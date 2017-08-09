

// 변수선언 = require('모듈이름');
var gulp = require('gulp');
var livereload = require('gulp-livereload');
var include = require('gulp-include');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');

/*

 gulp.task( task이름, 함수/익명함수 );

 */

gulp.task('hello1', function () {
  return console.log('Hello World1!');
});

gulp.task('hello2', function () {
  return console.log('Hello World2!');
});

gulp.task('hello3', function () {
  return console.log('Hello World3!');
});

// pipe()는 모듈의 기능을 실행해주는 함수
// 새로 고침
gulp.task('livereload', function(){
  gulp.src(['html/*', 'css/*', 'js/*', '*'])
      .pipe( livereload() );
});

gulp.task('watch', function(){
  livereload.listen();
  gulp.watch('*', ['livereload']);
  gulp.watch('html_src/**', ['include', 'livereload']);
  gulp.watch('css_src/**', ['sass', 'livereload']);
  gulp.watch('js_src/**', ['jsconcat', 'livereload']);
});

// header, footer, 공통영역 분리
gulp.task('include', function(){
  gulp.src("html_src/*.html")
      .pipe(include())
      .on('error', console.log)
      .pipe(gulp.dest("html/"));

});

// sass 실행
gulp.task('sass', function(){
  return gulp.src('css_src/*.scss')
      .pipe(sourcemaps.init())
      .pipe(sass({outputStyle:'expanded'}).on('error', sass.logError))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('css/'));
});



// concat ���� - ���� ���� ������ �ϳ��� ���Ϸ� ��ġ�� ���

<<<<<<< HEAD

=======
>>>>>>> a08b39e6b1e2c2c8a9c2a8ffd57b4e8284a258a3
gulp.task('germanyRes', function() {
  return gulp.src('js_src/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('germany_res.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js/'));
});

<<<<<<< HEAD

gulp.task('foodPageRolling', function() {
  return gulp.src('js_src/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('food_page_rolling.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js/'));
});

=======
gulp.task('jsconcat', ['germanyRes']);
>>>>>>> a08b39e6b1e2c2c8a9c2a8ffd57b4e8284a258a3

gulp.task('rolling', function() {
  return gulp.src('js_src/*.js')
      .pipe(sourcemaps.init())
      .pipe(concat('image_rolling.js'))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest('js/'));
});
<<<<<<< HEAD
gulp.task('jsconcat', ['rolling','foodPageRolling','germanyRes']);
=======
gulp.task('jsconcat', ['rolling']);

>>>>>>> a08b39e6b1e2c2c8a9c2a8ffd57b4e8284a258a3

gulp.task('default', ['livereload', 'include', 'sass', 'jsconcat', 'watch']);