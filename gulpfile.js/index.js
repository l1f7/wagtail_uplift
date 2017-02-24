/*
  gulpfile.js
  ===========
  Rather than manage one giant configuration file responsible
  for creating multiple tasks, each task has been broken out into
  its own file in gulpfile.js/tasks. Any files in that directory get
  automatically required below.

  To add a new task, simply add a new task file that directory.
  gulpfile.js/tasks/default.js specifies the default set of tasks to run
  when you run `gulp`.

  This file also sets up a watch system so that you can add/modify
  Gulp configuration or task files on the fly. It will automatically
  reload Gulp on changes, and will also persist Gulp through an error.
*/

// Make sure we have access to the ES2015 Promise format
// which some of the Node libraries have started using
// but which not all versions of Node support yet
require('es6-promise').polyfill();

var requireDir = require('require-dir')
,   fs         = require('fs')
,   gaze       = require('gaze')
,   gutil      = require('gulp-util')
,   respawn    = require('respawn');

// Require all tasks in gulp/tasks, including subfolders
requireDir('./tasks', { recurse: true });

// Keep gulp arguments
process.argv.splice(0, 2);

// Set our process options object
var options = {
  kill: 5000,
  stdio: 'inherit'
}

// Create process monitor that respawns Gulp on an error
monitor = respawn(['gulp'].concat(process.argv), options);
monitor.maxRestarts = 0;

// Let the user know what's up
gutil.log('Watching Gulp config files...');

// Watch the gulpfile/task files for changes
gaze(['./gulpfile.js/**/*.js'], function (err, watcher) {
  // 'all' allows us to capture changed/added/deleted
  // at the same time
  this.on('all', function (filepath) {
    gutil.log('Gulp config/tasks changed, reloading...');
    monitor.stop(function () {
      monitor.start();
    });

    process.on('SIGINT', function () {
      monitor.stop(function () {
        process.exit();
      });
    });

    monitor.start();
  });
});