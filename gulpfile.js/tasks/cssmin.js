/**
 * CSS Minify
 * -----------------------------------
 * Minifies our CSS file created by the compiled
 * SASS style modules
 */

var gulp   = require('gulp')
,   cssmin = require('gulp-cssmin')
,   rename = require('gulp-rename')
,   config = require('../config/cssmin')

// The second argument specifies the 'sass' task as a
// dependency (ie. it has to run before cssmin can fire)
gulp.task('cssmin', ['sass'], function () {
  gulp.src(config.src)
    .pipe(cssmin({showLog: true}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(config.dest));
});
