var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cssnano = require('gulp-cssnano');
var browsersync = require('browser-sync').create();
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');


gulp.task('server', function(){
  browsersync.init({
    server: {
      baseDir: './'
    }
  });
  gulp.watch('./src/scss/**/*.scss',['sass']);
  gulp.watch('./src/js/**/*.js',['js']);
  gulp.watch('./*.html').on('change', browsersync.reload);
})

gulp.task('sass', function(){
  return gulp.src('./src/scss/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(autoprefixer())
  .pipe(cssnano())
  .pipe(gulp.dest('./css'))
  .pipe(browsersync.stream());
});

gulp.task('js', function(){
  return gulp.src([
    './src/js/scripts.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(uglify({mangle: false}).on('error', gutil.log))
  .pipe(gulp.dest('./js'))
  .pipe(browsersync.reload({stream: true}));
})


gulp.task('default',['server']);
