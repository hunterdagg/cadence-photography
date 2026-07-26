export default {
  name: "photo",
  title: "Portfolio Photo",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["Portrait", "Event", "Editorial"] },
    },
    { name: "shutter", title: "Shutter speed", type: "string", description: "e.g. 1/200" },
    { name: "aperture", title: "Aperture", type: "string", description: "e.g. f/2.0" },
    { name: "iso", title: "ISO", type: "string", description: "e.g. 400" },
    { name: "featured", title: "Show on homepage", type: "boolean", initialValue: false },
    { name: "order", title: "Sort order", type: "number" },
  ],
};
