'use strict';

// const gulp = require('gulp');
// const watch = require('gulp-watch');
// const HubRegistry = require('gulp-hub');

// import all tasks
// const hub = new HubRegistry(['./tasks/*.task.js']);
// gulp.registry(hub);
//
// // BUILD
// gulp.task('build:dev', gulp.series(
//   ['css',
//     'js',
//     'images']
// ));
//
// // WATCH
// gulp.task('watch', () => {
//   watch('./public/scss/**/*.sass', 'css');
//
//   //watch('./individual/public/fonts/**/*.*', gulp.series('fonts', 'reload'));
// });
//
// gulp.task('build', gulp.series(
//   ['css',
//     'images']
// ));
//
// // DEFAULT TASK
// gulp.task('default', gulp.series(['build:dev', 'watch']));

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');

gulp.task('css', function () {
    return gulp.src('./individual/public/scss/**/style.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        // .pipe(rename('style.min.css'))
        .pipe(sourcemaps.init({debug: true, identityMap: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./individual/public/css'));
});

//gulp.task('watch', gulp.series(['css']));
gulp.task('watch', function () {
    return gulp.watch('./individual/public/scss/**/*.+(scss|sass)', gulp.series(['css']));
});
