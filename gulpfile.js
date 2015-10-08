'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require("gulp-rename");

gulp.task('sass', function () {
  gulp.src('./src/gridbox.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'))
    .pipe(minifyCss())
    .pipe(rename('gridbox.min.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./src/*.scss','./src/**/*.scss'], ['sass']);
});

gulp.task('default', ['sass']);