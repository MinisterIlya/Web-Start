const gulp = require('gulp'),
      browserSync = require('browser-sync').create(),
      minify = require('gulp-minify-css'),
      rename = require('gulp-rename');

gulp.task('hello', (done) => {
  console.log("Hello world");
  done();
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('minify', (done) => {
  gulp.src('css/*.css')
    .pipe(minify({keepBreaks: true}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css/'));
    done();
});
