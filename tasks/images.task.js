const gulp = require('gulp');
const path = require('path');

gulp.task(images);

function images(done) {
  gulp.src(path.resolve(__dirname, '../individual/public/images/**/*.*')) // sync task
    .pipe(gulp.dest(path.resolve(__dirname, '../build/public/images')));
  done();
}
