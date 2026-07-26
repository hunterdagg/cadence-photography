export default {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "tagline", title: "Hero tagline", type: "string" },
    { name: "bio", title: "About bio", type: "array", of: [{ type: "block" }] },
    { name: "email", title: "Contact email", type: "string" },
    { name: "instagram", title: "Instagram URL", type: "url" },
    { name: "location", title: "Location", type: "string" },
  ],
};
