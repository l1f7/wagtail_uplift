var gulp    = require('gulp')
,   sass    = require('../config/sass')
,   watch   = require('gulp-watch');

gulp.task('watch', function() {

  // We set 'sass' as a dependency of 'cssmin', so
  // we actually call cssmin when sass changes. This
  // means SASS runs, and then our CSSMIN task.
  watch(sass.src,          function() { gulp.start('cssmin'); });
});
