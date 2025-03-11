'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

function buildStyles() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('dist/css'));
};

function buildBootstrap() {
  return gulp.src('src/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('bootstrap.css'))
    .pipe(gulp.dest('dist/css'));
};

exports.buildStyles = buildStyles;
exports.buildBootstrap = buildBootstrap;
exports.watch = function () {
  gulp.watch('src/scss/style.scss', buildStyles);
  gulp.watch('src/scss/bootstrap.scss', buildBootstrap);
};