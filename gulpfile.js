var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('default', ['sass']);

gulp.task('sass', function() {
  gulp.src('./style/**.scss')
    .pipe(sass())
    .pipe(gulp.dest('./style'))
});
