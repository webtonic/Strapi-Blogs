"use strict";

module.exports = {
  register(/*{ strapi }*/) {},

  bootstrap({ strapi }) {
    require("./services/bootstrap.js")({ strapi });
  },
};
