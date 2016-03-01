var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	sass = require('gulp-ruby-sass'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	uncss = require('gulp-uncss'),
	beautify = require('gulp-beautify');

// Scripts Task
// Uglifies
gulp.task('scripts', function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});

//Styles Task
//
gulp.task('styles', function(){
	gulp.src('scss/**/*.scss')
		.pipe(sass({
			style: 'compressed'
		}))
		.on('error', errorLog)
		.pipe(prefix('last 2 versions'))
		.pipe(uncss())
		.pipe(gulp.dest('css/'))
		.pipe(livereload());
});

//Image Task
//Compress
gulp.task('image', function(){
	gulp.src('img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/img/'));
});

//Beautify Code
gulp.task('beautify', function(){
	gulp.src('js/*.js')
	.pipe(beautify({indentSize: 2}))
	.pipe(gulp.dest('./js/'))
});

//Watch Task
//Watches JS for save then run scripts task
gulp.task('watch', function(){

	var server = livereload();

	gulp.watch('js/*.js', ['scripts']);
	gulp.watch('scss/**/*.scss', ['styles']);
});


gulp.task('default', ['scripts', 'beautify', 'watch']);