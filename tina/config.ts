import { defineConfig } from "tinacms";

// The branch Tina reads/writes content from in production.
// Vercel sets VERCEL_GIT_COMMIT_REF automatically; falls back to the working branch.
const branch =
  process.env.NEXT_PUBLIC_TINA_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,
  // These are provided by TinaCloud in production. Empty locally (uses local mode).
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID || "",
  token: process.env.TINA_TOKEN || "",
  build: {
    outputFolder: "admin", // admin SPA served at /admin
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "", // images live at the root of /public (e.g. /krishna.webp)
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "about",
        label: "About Page",
        path: "content/about",
        format: "json",
        // Single fixed page — no creating/deleting documents from the CMS.
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/about",
        },
        fields: [
          {
            type: "string",
            name: "pageHeader",
            label: "Page Header",
          },
          {
            type: "object",
            name: "members",
            label: "Team Members",
            list: true,
            ui: {
              itemProps: (item) => ({ label: item?.name || "Team Member" }),
            },
            fields: [
              { type: "image", name: "image", label: "Photo" },
              { type: "string", name: "imageAlt", label: "Photo Alt Text" },
              {
                type: "string",
                name: "photoCredit",
                label: "Photo Credit (optional)",
              },
              {
                type: "string",
                name: "education",
                label: "Education / Credentials",
                description: "One line per credential.",
                list: true,
              },
              {
                type: "string",
                name: "sectionTitle",
                label: "Section Title",
              },
              { type: "string", name: "name", label: "Name" },
              { type: "string", name: "role", label: "Role / Title" },
              {
                type: "string",
                name: "bio",
                label: "Biography",
                description: "Separate paragraphs with a blank line.",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
    ],
  },
});
