/**
 *  babel
 */
var gulp = require('gulp'),
	babel = require('gulp-babel'),
	bs = require('browser-sync').create(),
	reload = bs.reload,
	runSequence = require('run-sequence').use(gulp),
	src = 'src', //源目录路径
	dist = 'dist'; //输出路径
var jshint = require('gulp-jshint');

//~=============gulp-jshint Start============
/*
 * npm install --save-dev jshint gulp-jshint
 */

var paths = {
	scripts: 'js/**/*.js',
};

gulp.task('lint', function() {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});
//~=============gulp-jshint End============

gulp.task('default', function() {
	// 将你的默认的任务代码放在这
});

gulp.task('babel', function() {
	var onError = function(err) {
		notify.onError({
			title: "Gulp",
			subtitle: "Failure!",
			message: "Error: <%= error.message %>",
			sound: "Beep"
		})(err);
	};

	return gulp.src(src + '/**/*.jsx')
		// .pipe(cached('react')) //把所有东西放入缓存中，每次只编译修改过的文件
		// .pipe(plumber({ //发生错误时不会中断 gulp 的流程，同时触发 notify 消息提示
		// 	errorHandler: onError
		// }))
		.pipe(babel())
		.pipe(gulp.dest(dist));
});

// Start the server
gulp.task('bs', function() {
	var files;

	files = [
		src + '/**/*.+(html|php|js|css|png|jpg|svg|gif)'
	];

	bs.init(files, {
		server: {
			baseDir: src,
		}
	});
});

gulp.task('server', ['babel', 'bs'], function() {
	gulp.watch(src + '/**/*.jsx', function() {
		runSequence('babel', reload);
	});
})