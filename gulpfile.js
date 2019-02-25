var gulp = require('gulp'); 
var concat = require('gulp-concat'); 
var uglify = require('gulp-uglify'); 
var rename = require('gulp-rename'); 

// Concat all js files into app.js 
gulp.task('concatScripts', function() {
	gulp.src(['js/circle/autogrow.js',
			'js/circle/circle.js', 
			'js/global.js'
		]).pipe(concat('app.js')).pipe(gulp.dest('js'));
});

// Minify all js files and insert into all.min.js
gulp.task('minifyScripts', function () {
	gulp.src('js/app.js')
	.pipe(uglify())
	.pipe(rename('all.min.js'))
	.pipe(gulp.dest('dist/scripts'));
}) 
