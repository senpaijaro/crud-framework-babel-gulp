const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel')
const resolver = require("gulp-resolver")
const runSequence = require('run-sequence')
const iife = require("gulp-iife")
const clean = require('gulp-clean')
const templateCache = require('gulp-angular-templatecache')
const concat = require('gulp-concat')
const plug = require('gulp-load-plugins')()

const app = './app/views/app.js'
const config = './app/views/config/**.js'
const controllers = './app/views/components/**/**.js'
const templates = './app/views/components/**/**.htm'
const template = './app/views/templates.js'
/**
	top level functions
	gulp.task - define task
	gulp.src - point to files to use
	gulp.dest  - point tofolder to ouput
	gulp.watch - watch files and folders for changes
*/

const babelplug = {
    "presets": ["es2015", "stage-2"],
    "plugins": ["transform-runtime", "transform-async-to-generator"]
}

gulp.task('clean', () =>
    gulp.src([ app, template,"./dist/views/*"])
        .pipe(clean())
)
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

gulp.task('iife', function () {
    return gulp.src([app, template,config, controllers])
       .pipe(babel({
        presets: ['env']
       }))
      .pipe(iife())
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./dist/views'))
})

gulp.task('template',  function () {
    return gulp.src(templates)
        .pipe(templateCache({standalone: true}))
        .pipe(gulp.dest('./app/views'))
})

gulp.task('index', function() {
  const target = gulp.src('./app/views/index.htm')
  const sources = gulp.src(['./dist/views/*.js', './dist/views/*.css'])
  
  return target.pipe(plug.inject(sources, {relative: true}))
    .pipe(gulp.dest('./dist/views'))
});


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
   const data =  gulp.src('app/views/public/components/**/**.htm')
        .pipe(gulp.dest('dist/views/public/components'))
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

gulp.task('default', ['babel','controller','model','config','policies','system','template', 'iife','index'], function() {
  return runSequence(['watch', 'start']);
});

