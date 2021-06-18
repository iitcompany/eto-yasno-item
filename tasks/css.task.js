const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const path = require('path');

gulp.task(css);

function css(done){
  gulp.src(path.resolve(__dirname, './public/scss/**/main.sass'))
    .pipe(sourcemaps.init({debug: true, identityMap: true}))
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 10 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.resolve(__dirname, './public/css')));
  done();
}

// function css(done){
//     gulp.src('./public/scss/**/main.sass')
//         .pipe(sourcemaps.init({debug: true, identityMap: true}))
//         .pipe(sass().on('error', sass.logError))
//         .pipe(autoprefixer({
//             browsers: ['last 10 versions'],
//             cascade: false
//         }))
//         .pipe(sourcemaps.write('.'))
//         .pipe(gulp.dest('./public/css'));
//     done();
// }
