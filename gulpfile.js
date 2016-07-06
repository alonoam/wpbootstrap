var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee'),
	browserify = require('gulp-browserify'),
	concat = require ('gulp-concat');
var coffeeSources = ['components/coffee/script.coffee']
var jsSources = [
	'components/scripts/affix.js',
	'components/scripts/alert.js',
	'components/scripts/button.js',
	'components/scripts/carousel.js',
	'components/scripts/collapse.js',
	'components/scripts/dropdown.js',
	'components/scripts/modal.js',
	'components/scripts/popover.js',
	'components/scripts/rrssb.js'
	];
gulp.task('coffee', function() {
	gulp.src(coffeeSources)
		.pipe(coffee({ bare: true })
			.on('error', gulp.log))
		.pipe(gulp.dest('components/scripts'))
});	
gulp.task('js', function() {
	gulp.src(jsSources)
		.pipe(concat('scripts.js'))
		.pipe(browserify())
		.pipe(gulp.dest('builds/development/js'))
});