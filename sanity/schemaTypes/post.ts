export default {
  name: "post",
  title: "Journal Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "coverImage", title: "Cover image", type: "image", options: { hotspot: true } },
    { name: "excerpt", title: "Excerpt", type: "text", rows: 3 },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] },
    { name: "publishedAt", title: "Published at", type: "datetime" },
  ],
};
