/**
 * This is our basic configuration object that gets exported
 * to be used by our other config files.
 *
 * var config = require('./');
 *
 * You'll see the above line at the top of each our config
 * files, all that's doing is requiring this file.
 */

var config = {}

// source
config.sourceDirectory    = './raw/';

// build directory
config.appDirectory       = './wagtail_uplift/';
config.appAssets          = config.appDirectory + 'static/';

module.exports = config;
