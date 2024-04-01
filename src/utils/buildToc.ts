import { MarkdownHeading } from "astro";

export function buildToc(headings) {
  const toc = [];
  const parentHeadings = new Map();

  headings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);
    // Change 2 to 1 if your markdown includes your <h1>
    if (heading.depth === 1) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });

  return toc;
}


type HeadingWithSubheadings = MarkdownHeading & {
  subheadings: MarkdownHeading[];
};

export function grouppedHeadings(headings) {
  headings.reduce((array, heading) => {
  if (heading.depth === 2) {
    array.push({ ...heading, subheadings: [] });
  } else if (heading.depth === 3) {
    array.at(-1)?.subheadings.push(heading);
  }
  return array;
}, [] as HeadingWithSubheadings[])
}