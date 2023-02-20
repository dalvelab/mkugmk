'use strict';

/**
 *  welcome controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::welcome.welcome');
