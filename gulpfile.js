var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify'); 
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename'); 
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var imagemin = require('gulp-imagemin');
var del = require('del'); 


// Concat all js files into app.js 
gulp.task('concatScripts', function() {
	return gulp.src(['js/circle/autogrow.js',
			'js/circle/circle.js', 
			'js/global.js'
		])
		.pipe(concat('app.js'))
		.pipe(sourcemaps.init())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('js'));
});

// Minify all js files and insert into all.min.js after concatentaion
gulp.task('scripts', ['concatScripts'], function () {
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest('dist/scripts'));
}); 

// Compile sass into css and write scss to a sourcemap
gulp.task('compileSass', function () {
	return gulp.src('sass/global.scss')
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('css')); 
});

// Minify styles/css and insert into all.min.css 
gulp.task('styles', ['compileSass'], function () {
	gulp.src('css/global.css')
		.pipe(uglifycss())
		.pipe(rename('all.min.css'))
		.pipe(gulp.dest('dist/styles'));
});

// Optimize the size of images 
gulp.task('images', function() {
	gulp.src('images/*')
		.pipe(imagemin({verbose: true}))
		.pipe(gulp.dest('dist/content'));
});

// Clean task 
gulp.task('clean', function() {
	del(['dist', 'js/app.*', 'css/global.css.map']);
})






