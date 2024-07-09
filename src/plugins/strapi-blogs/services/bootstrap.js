"use strict";

module.exports = async ({ strapi }) => {
  console.log("Bootstrap script running...");

  // Check if the content type already exists
  const contentTypeExists = strapi.contentTypes["api::blog.blog"];
  console.log("Content type exists:", contentTypeExists);

  if (!contentTypeExists) {
    console.log("Creating new content type...");

    await strapi.query("content-type-builder").createContentType({
      contentType: {
        kind: "collectionType",
        collectionName: "blogs",
        info: {
          singularName: "blog",
          pluralName: "blogs",
          displayName: "Blog",
        },
        options: {
          draftAndPublish: true,
        },
        attributes: {
          image: {
            type: "media",
            multiple: false,
            required: false,
            allowedTypes: ["images", "files", "videos", "audios"],
          },
          heading: {
            type: "string",
          },
          summary: {
            type: "string",
          },
          categories: {
            type: "string",
          },
          tags: {
            type: "string",
          },
          is_active: {
            type: "string",
          },
          is_primary: {
            type: "string",
          },
          content: {
            type: "customField",
            options: {
              preset: "toolbar",
            },
            customField: "plugin::ckeditor5video.CKEditor5Video",
          },
          Related_blogs: {
            type: "relation",
            relation: "oneToMany",
            target: "api::blog.blog",
          },
        },
      },
    });

    console.log("Content type created successfully.");
  } else {
    console.log("Content type already exists. No action needed.");
  }
};
