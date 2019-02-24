var gulp = require('gulp'); 
var concat = require('gulp-concat'); 

gulp.task('concatScripts', function() {
	gulp.src(['js/circle/autogrow.js',
			'js/circle/circle.js', 
			'js/global.js'
		]).pipe(concat('app.js')).pipe(gulp.dest('js'));
});

