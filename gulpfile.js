const gulp = require('gulp')
// const imagemin = require('gulp-imagemin')
// const uglify = require('gulp-uglify')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const resolver = require("gulp-resolver")
const runSequence = require('run-sequence')
/**
	top level function
	gulp.task - define task
	gulp.src - point to files to use
	gulp.dest  - point tofolder to ouput
	gulp.watch - watch files and folders for changes
*/
const babelplug = {
    "presets": ["es2015", "stage-2"],
    "plugins": ["transform-runtime", "transform-async-to-generator"]
}
// Logs Message
gulp.task('message',function(){
	return console.log('gulp is running')
})

gulp.task('babel', function () {
   const data =  gulp.src('app/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist'))
   return data
})

gulp.task('controller', function () {
   const data =  gulp.src('app/application/controller/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist/application/controller'))
   return data
})

gulp.task('model', function () {
   const data =  gulp.src('app/application/model/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist/application/model'))
   return data
})

gulp.task('config', function () {
   const data =  gulp.src('app/application/config/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist/application/config'))
   return data
})


gulp.task('policies', function () {
   const data =  gulp.src('app/application/policies/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist/application/policies'))
   return data
})

gulp.task('system', function () {
   const data =  gulp.src('app/system/*js')
        .pipe(babel(babelplug))
        .pipe(gulp.dest('dist/system/'))
   return data
})

gulp.task('copyHtml', function () {
   const data =  gulp.src('app/views/*.html')
        .pipe(gulp.dest('dist/views/'))
   return data
})

gulp.task('start', function () {
  return nodemon({
    script: 'dist/app.js'
  })
})

gulp.task('watch', function() {
    gulp.watch('app/*js', ['babel','controller','model','config','policies','system']);
});

gulp.task('default', ['babel','controller','model','config','policies','system','copyHtml'], function() {
  return runSequence(['watch', 'start']);
});

