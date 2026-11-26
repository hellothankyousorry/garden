import type { Plugin } from "unified";
import type { Root } from "mdast";
import { BASE_PATH } from "../site.config";

type MdNode = {
  type: string;
  value?: string;
  url?: string;
  children?: MdNode[];
  data?: Record<string, unknown>;
};

const WIKILINK = /\[\[([^\]|]+?)(?:\|([^\]]+?))?\]\]/g;

const toSlug = (value: string) =>
  value
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\p{L}\p{N}-]/gu, "");

/**
 * Converts Obsidian-style [[slug]] / [[slug|label]] references into ordinary
 * internal Markdown links. Keeping this as a remark plugin means the links work
 * in any note without hand-writing base paths.
 */
export const remarkWikilinks: Plugin<[], Root> = () => tree => {
  const root = tree as unknown as MdNode;
  const splitText = (node: MdNode): MdNode[] => {
    if (node.type !== "text" || typeof node.value !== "string") return [node];

    const parts: MdNode[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    WIKILINK.lastIndex = 0;
    while ((match = WIKILINK.exec(node.value)) !== null) {
      if (match.index > lastIndex) {
        parts.push({
          type: "text",
          value: node.value.slice(lastIndex, match.index),
        });
      }
      const target = toSlug(match[1]);
      const label = match[2]?.trim() || match[1].trim();
      parts.push({
        type: "link",
        url: `${BASE_PATH}/notes/${target}/`,
        children: [{ type: "text", value: label }],
        data: { hProperties: { class: "wikilink" } },
      });
      lastIndex = match.index + match[0].length;
    }

    if (parts.length === 0) return [node];
    if (lastIndex < node.value.length) {
      parts.push({ type: "text", value: node.value.slice(lastIndex) });
    }
    return parts;
  };

  const visit = (node: MdNode) => {
    if (!node.children) return;
    node.children = node.children.flatMap(child => {
      const parts = splitText(child);
      parts.forEach(visit);
      return parts;
    });
  };
  visit(root);
};
