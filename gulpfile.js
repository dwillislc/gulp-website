var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify'); 
var uglifycss = require('gulp-uglifycss');
var rename = require('gulp-rename'); 
var sass = require('gulp-sass');


// Concat all js files into app.js 
gulp.task('concatScripts', function() {
	return gulp.src(['js/circle/autogrow.js',
			'js/circle/circle.js', 
			'js/global.js'
		]).pipe(concat('app.js')).pipe(gulp.dest('js'));
});

// Minify all js files and insert into all.min.js after concatentaion
gulp.task('scripts', ['concatScripts'], function () {
	return gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest('dist/scripts'));
}) 

// Compile sass into css
gulp.task('compileSass', function () {
	return gulp.src('sass/global.scss')
		.pipe(sass())
		.pipe(gulp.dest('css')); 
})

// Minify styles/css and insert into all.min.css 
gulp.task('minifyStyles', ['compileSass'], function () {
	gulp.src('css/global.css')
		.pipe(uglifycss())
		.pipe(gulp.dest('dist/styles'));
})

