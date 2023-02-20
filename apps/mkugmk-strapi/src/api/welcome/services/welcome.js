'use strict';

/**
 * welcome service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::welcome.welcome');
