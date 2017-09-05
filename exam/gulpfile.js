const gulp = require('gulp'),
  browserSync = require('browser-sync'),
  sass = require('gulp-sass'),  
  autoprefixer = require('gulp-autoprefixer'),
  rimraf = require('rimraf'),
  rigger = require('gulp-rigger'),
  concat = require('gulp-concat'),
  babel = require('gulp-babel'),
  imagemin = require('gulp-imagemin'),
  cssnano = require('gulp-cssnano'),
  uglify = require('gulp-uglify'),
  del = require('del'),  
  concatCss = require('gulp-concat-css'),
  pngquant = require('imagemin-pngquant');

const paths = {
  src: {
    html: 'src/*.html',
    style: 'src/style/main.scss',
    js: 'src/js/**/*.js',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  dist: {
    html: 'dist/',
    js: 'dist/js/',
    style: 'dist/css/',
    img: 'dist/img/',
    fonts: 'dist/fonts/'
  },
  watch: {
    html: 'src/**/*.html',
    js: 'src/js/**/*.js',
    style: 'src/style/**/*.scss',
    img: 'src/img/**/*.*',
    fonts: 'src/fonts/**/*.*'
  },
  clean: '../dist'
};

gulp.task('sass', function () {
  gulp.src(paths.src.style)
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest(paths.dist.style))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function () {
  gulp.src(paths.src.html)
    .pipe(rigger())
    .pipe(gulp.dest(paths.dist.html))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('js', function () {
  gulp.src(paths.src.js)
    .pipe(rigger())
    .pipe(babel({presets: ['env']}))
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('fonts', function() {
  gulp.src(paths.src.fonts)
    .pipe(gulp.dest(paths.dist.fonts))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img', function () {
  gulp.src(paths.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{
        removeViewBox: false
      }],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(paths.dist.img))
    .pipe(browserSync.reload({stream: true}));
});


gulp.task('server', function () {
  browserSync({
    server: {baseDir: paths.dist.html},
    notify: false
  });
});

gulp.task('watch', ['sass', 'html', 'js', 'img'], function () {
  gulp.watch(paths.watch.style, ['sass']);
  gulp.watch(paths.watch.html, ['html']);
  gulp.watch(paths.watch.js, ['js']);
  gulp.watch(paths.watch.img, ['img']);
  gulp.watch(paths.watch.fonts, ['fonts']);
});

gulp.task('default', ['server', 'html', 'sass', 'js', 'fonts', 'img', 'watch']);


