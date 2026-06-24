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
    outputFolder: "edit", // editor SPA served at /edit
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
        name: "home",
        label: "Home Page",
        path: "content/home",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/",
        },
        fields: [
          { type: "string", name: "header", label: "Header" },
          { type: "string", name: "subheader", label: "Subheader" },
          {
            type: "string",
            name: "bodyText",
            label: "Intro Paragraph",
            ui: { component: "textarea" },
          },
          { type: "image", name: "bodyImage", label: "Intro Graphic" },
          {
            type: "string",
            name: "whyChooseUsHeader",
            label: "\"Why Choose Us\" Heading",
          },
          {
            type: "object",
            name: "reasons",
            label: "Why Choose Us",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Reason" }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
      {
        name: "ourApproach",
        label: "Our Approach Page",
        path: "content/our-approach",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/our-approach",
        },
        fields: [
          { type: "string", name: "header", label: "Header" },
          {
            type: "string",
            name: "intro",
            label: "Intro (separate paragraphs with a blank line)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "whoWeServeHeader",
            label: "\"Who We Serve\" Heading",
          },
          {
            type: "string",
            name: "whoWeServeIntro",
            label: "\"Who We Serve\" Intro",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "cards",
            label: "Who We Serve Cards",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.header || "Card" }) },
            fields: [
              { type: "string", name: "header", label: "Header" },
              { type: "string", name: "focus", label: "Focus" },
              {
                type: "string",
                name: "body",
                label: "Body",
                ui: { component: "textarea" },
              },
            ],
          },
        ],
      },
      {
        name: "clientHub",
        label: "Client Hub Page",
        path: "content/client-hub",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/client-hub",
        },
        fields: [
          {
            type: "string",
            name: "intro",
            label: "Intro",
            ui: { component: "textarea" },
          },
          {
            type: "object",
            name: "portals",
            label: "Portals",
            list: true,
            ui: { itemProps: (item) => ({ label: item?.title || "Portal" }) },
            fields: [
              { type: "string", name: "title", label: "Title" },
              { type: "image", name: "image", label: "Logo" },
              { type: "string", name: "alt", label: "Logo Alt Text" },
              {
                type: "string",
                name: "body1",
                label: "Intro Text (supports <b> tags)",
                ui: { component: "textarea" },
              },
              {
                type: "object",
                name: "bullets",
                label: "Capabilities",
                list: true,
                ui: {
                  itemProps: (item) => ({ label: item?.title || "Capability" }),
                },
                fields: [
                  { type: "string", name: "title", label: "Title" },
                  {
                    type: "string",
                    name: "body",
                    label: "Body",
                    ui: { component: "textarea" },
                  },
                ],
              },
              {
                type: "string",
                name: "body2",
                label: "Closing Text (supports <b> tags)",
                ui: { component: "textarea" },
              },
              { type: "string", name: "buttonTitle", label: "Button Label" },
              {
                type: "string",
                name: "buttonUrl",
                label: "Button URL (single)",
              },
              {
                type: "string",
                name: "buttonUrlDesktop",
                label: "Button URL — Desktop (optional)",
              },
              {
                type: "string",
                name: "buttonUrlMobile",
                label: "Button URL — Mobile (optional)",
              },
            ],
          },
        ],
      },
      {
        name: "contact",
        label: "Contact Page",
        path: "content/contact",
        format: "json",
        ui: {
          allowedActions: { create: false, delete: false },
          router: () => "/contact",
        },
        fields: [
          { type: "string", name: "header", label: "Header" },
          {
            type: "string",
            name: "intro",
            label: "Intro (separate paragraphs with a blank line)",
            ui: { component: "textarea" },
          },
          { type: "string", name: "messageLabel", label: "Message Field Label" },
          { type: "string", name: "submitLabel", label: "Submit Button Label" },
          {
            type: "string",
            name: "discretionHeader",
            label: "Discretion Section Heading",
          },
          {
            type: "string",
            name: "discretionBody1",
            label: "Discretion Text (before the Client Hub link)",
            ui: { component: "textarea" },
          },
          {
            type: "string",
            name: "clientHubLinkText",
            label: "Client Hub Link Text",
          },
          {
            type: "string",
            name: "discretionBody2",
            label: "Discretion Text (after the Client Hub link)",
            ui: { component: "textarea" },
          },
        ],
      },
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
