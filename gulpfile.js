var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');


//script paths
var jsFiles = [
	'js/scripts/pages/**.js',
	'js/scripts/routeDefs.js',
	'js/scripts/components/**.js',
	'js/scripts/app.js'
];
var jsDest = 'dist/scripts';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('app.js'))
        .pipe(gulp.dest(jsDest))
        .pipe(rename('app.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(jsDest));
});

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('watch', function() {
    gulp.watch('js/scripts/**/*.js', ['scripts']);
});

//.pipe(rename('scripts.min.js'))
//.pipe(uglify())
//.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })