var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');


gulp.task('sass', function(){
  return gulp.src('./src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cssnano())
  .pipe(gulp.dest('./css'))
});


gulp.task('default', function() {
  gulp.watch('./src/scss/**/*.scss',['sass']);
});
