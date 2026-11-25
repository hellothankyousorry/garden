import rss from "@astrojs/rss";
import { getPublishedNotes, noteUrl } from "@/utils/knowledge";
import config from "@/config";

export async function GET() {
  const notes = await getPublishedNotes();

  return rss({
    title: `${config.site.title} — Notes`,
    description: config.site.description,
    site: config.site.url,
    items: notes.map(note => ({
      link: noteUrl(note.id),
      title: note.data.title,
      description: note.data.description,
      pubDate: new Date(note.data.modDatetime ?? note.data.pubDatetime),
      categories: note.data.tags,
    })),
  });
}
