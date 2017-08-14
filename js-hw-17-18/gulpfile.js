'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var rigger = require('gulp-rigger');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');
var babel = require('gulp-babel');

var paths = {
    src: {
        html: 'src/*.html',
        css: 'src/scss/**/*.scss',
        js: 'src/js/**/*.js'        
    },
    dist: {
        html: 'dist/',
        css: 'dist/css',
        js: 'dist/js'
    },
    watch: {
        html: 'src/**/*.html',
    }
};

var serverConfig = {
    server: {
        baseDir: './dist'
    },
    host: 'localhost',
    port: 9000,
    logPrefix: 'ROBOT',
    notify: false
};

gulp.task('bundleHtml', function(){
    return gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({stream: true}));    
});

gulp.task('bundleCss', function(){
    return gulp.src(paths.src.css)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('styles.css'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('bundleJs', function(){
   return gulp.src(paths.src.js)
   .pipe(concat('scripts.js'))
   .pipe(babel({presets: ['env']}))
   .pipe(gulp.dest(paths.dist.js))
   .pipe(browserSync.reload({stream: true}));
});

gulp.task('webServer', function(){
    browserSync(serverConfig);
});

gulp.task('watch', function(){
    gulp.watch(paths.src.css, ['bundleCss']);
    gulp.watch(paths.watch.html, ['bundleHtml']);
    gulp.watch(paths.src.js, ['bundleJs']);    
});

gulp.task('default', ['bundleHtml','bundleCss','bundleJs','webServer','watch']);

