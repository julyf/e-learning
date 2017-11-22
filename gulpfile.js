'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('sass', function () {
  return gulp.src('./stylesheets/*')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
  //gulp.watch('./stylesheets/styles.scss', ['sass']);
  gulp.watch('./stylesheets/**/*.scss', ['sass']);
});