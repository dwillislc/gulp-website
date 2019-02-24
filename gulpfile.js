var gulp = require('gulp'); 
var concat = require('gulp-concat'); 

// Concat all js files into app.js 
gulp.task('concatScripts', function() {
	gulp.src(['js/circle/autogrow.js',
			'js/circle/circle.js', 
			'js/global.js'
		]).pipe(concat('app.js')).pipe(gulp.dest('js'));
});

