const {src, dest, watch, series} = require('gulp'),
      browserSync = require('browser-sync').create(),
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      minify = require('gulp-minify'),
      autoprefixer = require('gulp-autoprefixer'),
      htmlmin = require('gulp-htmlmin'),
      tinypng = require('gulp-tinypng-compress');
      // minify = require('gulp-minify-css'),
      // rename = require('gulp-rename'),

function bs() {
  servSass();
  browserSync.init({
      server: {
          baseDir: "./"
      },
      online: true
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./sass/**/*.sass", servSass);
  watch("./sass/**/*.scss", servSass);
};

function servSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false,
        flexbox: true,
        browsers: ['last 2 versions']
       }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

function buildCSS(done) {
  src('css/**/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(dest('dist/css/'))
  src('css/**/*.min.css')
    .pipe(dest('dist/css/'))
  done();
}

function buildJS(done) {
  src(['js/**/*.js', '!js/**/*.min.js'])
    .pipe(minify({
    ext:{
        min:'.js'
    },
    }))
    .pipe(dest('dist/js/'))
  src('js/**/*.min.js')
    .pipe(dest('dist/js/'))
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'))

  done();
}

function php(done) {
  src('**.php')
    .pipe(dest('dist/'))
  src( 'phpmailer/**/**.php')
    .pipe(dest('dist/phpmailer/'))
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts'))
  done();
}

function imagemin(done) {
  src('img/**/*.{png,jpg}')
    .pipe(tinypng({ key: 'sH2jrgxQX7GHmnslPR2Zs9GkDXNqVgMz', }))
    .pipe(dest('dist/img/'))
  src('img/**/*.svg')
    .pipe(dest('dist/img/'))
  src('favicon.ico')
    .pipe(dest('dist/'))
  done();
}

exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);
// function minRename() {
//   src('css/*.css')
//     .pipe(minify({keepBreaks: true}))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest('css/'));
//     done();
// };

