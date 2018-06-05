'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rigger = require('gulp-rigger');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');

const paths = {
	src: {
		html: 'src/*.html',
		css: 'src/scss/**/*.scss',
		js: 'src/js/**/*.js',
		img: 'src/img/**/*.*'
	},
	dist: {
		html: 'dist/',
		css: 'dist/css',
		js: 'dist/js',
		img: 'dist/img/'
	},
	watch: {
		html: 'src/**/*.html',
		img: 'src/img/**/*.*'		
	}
};

const serverConfig = {
	server: {
		baseDir: './dist'
	},
	host: 'localhost',
	port: 9000,
	logPrefix: 'anonymous',
	notify: false
};

gulp.task('bundleHtml', () => {
	return gulp.src(paths.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(paths.dist.html))
		.pipe(browserSync.reload({stream: true}));    
});

gulp.task('bundleCss', () => {
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

gulp.task('img', () => {
	return gulp.src(paths.src.img)
		.pipe(gulp.dest(paths.dist.img))
		.pipe(browserSync.reload({stream: true}));		
});

gulp.task('bundleJs', () => {
	return gulp.src(paths.src.js)
		.pipe(concat('scripts.js'))
		.pipe(babel({presets: ['env']}))
		.pipe(concat('script.js'))
		.pipe(gulp.dest(paths.dist.js))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('webServer', () => {
	browserSync(serverConfig);
});

gulp.task('watch', () => {
	gulp.watch(paths.src.css, ['bundleCss']);
	gulp.watch(paths.watch.html, ['bundleHtml']);
	gulp.watch(paths.watch.img, ['img']);	
	gulp.watch(paths.src.js, ['bundleJs']);    
});


gulp.task('default', ['bundleHtml','bundleCss', 'img', 'bundleJs','webServer','watch']);



