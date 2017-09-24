// http://github.com/AveVlad/gulp-connect
//https://www.npmjs.com/package/gulp-inject
//* npm install gulp
//* npm install gulp --save-dev
//* npm install gulp-conect --save-dev
//* npm install gulp-inject --save-dev



var gulp = require('gulp'),
    connect = require('gulp-connect'),
    inject = require('gulp-inject'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');


gulp.task('index', function () {
    var target = gulp.src('app/index.html');

    var source = gulp.src(['app/src/**/*.js', 'app/src/**/*.css'], {read: false});

    return target.pipe(inject(source,{relative: true})).pipe(gulp.dest('app/'));
});

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8081
    });
});

gulp.task('html', function () {
    gulp.src('./app/**/*.html')
        .pipe(connect.reload());
});

gulp.task('js', function () {
    gulp.src('./app/**/*.js')
        .pipe(connect.reload());
});


gulp.task('css', function () {
    gulp.src('./app/**/*.css')
        .pipe(connect.reload());
});


gulp.task('watch', function () {
    gulp.watch(['./app/**/*.html'], ['html']);
    gulp.watch(['./app/**/*.js'], ['js']);
    gulp.watch(['./app/**/*.css'], ['css']);
    gulp.watch(['./app/src/scss/**/*.scss'], ['sass']);
});

gulp.task('sass', function() {
  return gulp.src('app/src/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sourcemaps.init())
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(gulp.dest('app/src/css'))


   /* .pipe(sass())
    .pipe(gulp.dest('app/src/css'))*/
});

gulp.task('default', ['connect', 'watch', 'index', 'sass']);

