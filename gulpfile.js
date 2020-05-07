const {src, dest, watch} = require('gulp'),
      browserSync = require('browser-sync').create(),
      // minify = require('gulp-minify-css'),
      // rename = require('gulp-rename'),
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer');

function bs() {
  servSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./js/*.js").on('change', browserSync.reload);
  watch("./sass/**/*.sass", servSass);
};

function servSass() {
  return src("./sass/**/.sass")
      .pipe(sass())
      .pipe(autoprefixer({
        cascade: false
       }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};

exports.serve = bs;

// function minRename() {
//   src('css/*.css')
//     .pipe(minify({keepBreaks: true}))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(dest('css/'));
//     done();
// };

