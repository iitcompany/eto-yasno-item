'use strict';

const gulp = require('gulp');
const watch = require('gulp-watch');
const HubRegistry = require('gulp-hub');

// import all tasks
const hub = new HubRegistry(['./tasks/*.task.js']);
gulp.registry(hub);

// BUILD
gulp.task('build:dev', gulp.series(
  ['css',
    'js',
    'images']
));

// WATCH
gulp.task('watch', () => {
  watch('./public/scss/**/*.sass', 'css');

  //watch('./individual/public/fonts/**/*.*', gulp.series('fonts', 'reload'));
});

gulp.task('build', gulp.series(
  ['css',
    'images']
));

// DEFAULT TASK
gulp.task('default', gulp.series(['build:dev', 'watch']));
