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
const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('gulp-cssnano');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');
const rename = require("gulp-rename");
const rigger = require('gulp-rigger');
const rimraf = require('rimraf');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        html: './individual/public/build/',
        js: './individual/public/build/js/',
        css: './individual/public/build/css/',
        img: './individual/public/build/images/',
        fonts: './individual/public/build/fonts/'
    },
    src: { //Пути откуда брать исходники
        html: './individual/views/layouts/main.html',
        js: './individual/public/src/js/script.js',
        style: './individual/public/src/scss/style.sass',
        img: './individual/public/src/images/**/*.*',
        fonts: './individual/public/src/fonts/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        html: './individual/views/**/*.html',
        js: './individual/public/src/js/**/*.js',
        style: './individual/public/src/scss/**/*.+(scss|sass)',
        img: './individual/public/src/img/**/*.*',
        fonts: './individual/public/src/fonts/**/*.*'
    },
    clean: 'individual/public/build'
};
const config = {
    server: {
        baseDir: "individual/public/build/"
    },
    tunnel: true,
    host: 'localhost',
    port: 3000,
    logPrefix: "Post"
};
gulp.task('webserver', function () {
    browserSync(config);
});
gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('html:build', function () {
    return gulp.src(path.src.html) //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(rename('index.html'))
        .pipe(gulp.dest(path.build.html)) //Выплюнем их в папку build
        .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});
gulp.task('js:build', function () {
    return gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger()) //Прогоним через rigger
        .pipe(sourcemaps.init()) //Инициализируем sourcemap
        .pipe(sourcemaps.write()) //Пропишем карты
        .pipe(gulp.dest(path.build.js)) //Выплюнем готовый файл в build
        .pipe(reload({stream: true})); //И перезагрузим сервер
});
gulp.task('css:build', function () {
    return gulp.src(path.src.style)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        .pipe(cssnano())
        // .pipe(rename('style.min.css'))
        .pipe(sourcemaps.init({debug: true, identityMap: true}))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(path.build.css));
});
gulp.task('img:build', function () {
    return gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(reload({stream: true}));
});
gulp.task('fonts:build', function() {
    return gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', gulp.series([
    'html:build',
    'js:build',
    'css:build',
    'fonts:build',
    'img:build'
]));
gulp.task('watch', function(){
    gulp.watch([path.watch.html], gulp.series(['html:build']));
    gulp.watch([path.watch.style], gulp.series(['css:build']));
    gulp.watch([path.watch.js], gulp.series(['js:build']));
    gulp.watch([path.watch.img], gulp.series(['img:build']));
    gulp.watch([path.watch.fonts], gulp.series(['fonts:build']));
});
// gulp.task('watch', function () {
//     return gulp.watch('./individual/public/src/scss/**/*.+(scss|sass)', gulp.series(['css:build']));
// });
gulp.task('default', gulp.series(['build', 'webserver', 'watch']));