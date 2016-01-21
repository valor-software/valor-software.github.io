var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('compressJS', function() {
    return gulp.src('./src/*.js')
      .pipe(uglify({compress: true}))
      .pipe(concat('all-js.min.gzip'))
      .pipe(gulp.dest('./dest'));
});

gulp.task('default', [
  'compressJS'
]);