export default {
  name: "package",
  title: "Pricing Package",
  type: "document",
  fields: [
    { name: "name", title: "Package name", type: "string" },
    { name: "price", title: "Price", type: "string", description: "e.g. $250 or From $400" },
    { name: "unit", title: "Unit / duration", type: "string", description: "e.g. per session" },
    { name: "features", title: "Included features", type: "array", of: [{ type: "string" }] },
    { name: "featured", title: "Highlight this package", type: "boolean", initialValue: false },
    { name: "order", title: "Sort order", type: "number" },
  ],
};
