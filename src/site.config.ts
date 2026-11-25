/**
 * Site-wide constants that are safe to import from both Astro config and
 * components. Personal data lives in src/data/*.json and Markdown content.
 */
export const REPO_NAME = "garden";

export const BASE_PATH = `/${REPO_NAME}`;

export const SITE_URL = `https://hellothankyousorry.github.io${BASE_PATH}/`;

export const KIND_META = {
  seed: {
    label: "Seed",
    zh: "种子",
    description: "尚未成熟的想法与问题",
    glyph: "✳",
  },
  note: {
    label: "Note",
    zh: "笔记",
    description: "持续积累的知识与思考",
    glyph: "✦",
  },
  evergreen: {
    label: "Evergreen",
    zh: "常青",
    description: "反复修订、长期有效的思考",
    glyph: "❋",
  },
} as const;

export type NoteKind = keyof typeof KIND_META;

export const PAGE_ACCENTS = {
  home: "coral",
  notes: "violet",
  projects: "tangerine",
  resume: "teal",
  about: "rose",
  now: "sky",
  search: "violet",
  tags: "rose",
} as const;
