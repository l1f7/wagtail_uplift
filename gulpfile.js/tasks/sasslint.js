/**
 * Sass Lint
 * ----------------------------------------------------
 */

const gulp = require('gulp');
const sassLint = require('gulp-sass-lint');
const handleErrors = require('../lib/handleErrors');
const config = require('../config/sass');

gulp.task('sasslint', () => {
  return gulp.src(config.src)
    .pipe(sassLint())
    .on('error', handleErrors)
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
});
