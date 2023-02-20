'use strict';

/**
 * welcome router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::welcome.welcome');
