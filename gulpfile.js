var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task('babel', function() {
  return browserify({
    entries: ['./src/app.js'],
    transform: ['babelify']
  })
  .bundle()
  .pipe(source('app.bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['babel'], function() {
  gulp.watch('./src/**/*.js', ['babel']);
});