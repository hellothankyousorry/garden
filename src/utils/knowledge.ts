import { getCollection, type CollectionEntry } from "astro:content";
import { BASE_PATH } from "@/site.config";

export type NoteEntry = CollectionEntry<"posts">;
export type ProjectEntry = CollectionEntry<"projects">;

export async function getPublishedNotes(): Promise<NoteEntry[]> {
  const notes = await getCollection("posts", ({ data }) => !data.draft);
  return notes.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
}

export async function getPublishedProjects(): Promise<ProjectEntry[]> {
  const projects = await getCollection("projects", ({ data }) => !data.draft);
  return projects.sort(
    (a, b) => b.data.pubDatetime.valueOf() - a.data.pubDatetime.valueOf()
  );
}

export const noteUrl = (id: string) => `${BASE_PATH}/notes/${id}/`;
export const projectUrl = (id: string) => `${BASE_PATH}/projects/${id}/`;

const wikilinkTargets = (body: string | undefined): string[] => {
  if (!body) return [];
  return [...body.matchAll(/\[\[([^\]|]+?)(?:\|[^\]]+?)?\]\]/g)].map(match =>
    match[1].trim().toLowerCase().replace(/\s+/g, "-")
  );
};

export function getBacklinks(notes: NoteEntry[], targetId: string): NoteEntry[] {
  const target = targetId.toLowerCase();
  return notes.filter(note => wikilinkTargets(note.body).includes(target));
}

/** Explicit relations first, then shared tags, then reverse wikilinks. */
export function getRelatedNotes(
  note: NoteEntry,
  notes: NoteEntry[],
  limit = 4
): NoteEntry[] {
  const candidates = new Map<string, { entry: NoteEntry; score: number }>();
  const add = (entry: NoteEntry, score: number) => {
    if (entry.id === note.id) return;
    const existing = candidates.get(entry.id);
    candidates.set(entry.id, {
      entry,
      score: (existing?.score ?? 0) + score,
    });
  };

  note.data.related.forEach(id =>
    notes.filter(candidate => candidate.id === id).forEach(entry => add(entry, 8))
  );

  notes.forEach(candidate => {
    const shared = candidate.data.tags.filter(tag =>
      note.data.tags.includes(tag)
    ).length;
    if (shared > 0) add(candidate, shared * 2);
  });

  getBacklinks(notes, note.id).forEach(entry => add(entry, 5));

  return [...candidates.values()]
    .sort((a, b) => b.score - a.score || b.entry.data.pubDatetime.valueOf() - a.entry.data.pubDatetime.valueOf())
    .slice(0, limit)
    .map(item => item.entry);
}

export function getNotesByTag(notes: NoteEntry[], tag: string): NoteEntry[] {
  return notes.filter(note => note.data.tags.includes(tag));
}
