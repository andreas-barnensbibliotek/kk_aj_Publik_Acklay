/*
install 
1. skapa mappar 
2. kÃ¶r bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream
6. skapa gulpfile.js nedan med länkar till bower foundation
*/


var gulp = require('gulp'),
    sass = require('gulp-sass'),	
    autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css'),			
    webpack = require('webpack-stream'),	
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
	path = require('path');

	/*
	sÃ¤tter sÃ¶kvÃ¤gar till mapptrÃ¤det
	*/
	var srcPath={		
		'bower' : './bower_components',
		'scss': './_dev/devsass',	
		'publik': './public',
        'devjs':'./_dev/devjs',
		'jsbundle': './_dev/_jsbundle'
	};
	
	
gulp.task('SassToCssSrc', function() {
    gulp.src(srcPath.scss +'/**/*.scss')  
        .pipe(sass({
            style: 'expanded',
            sourceComments: 'normal',
			includePaths: [
				srcPath.bower +'/foundation/scss' //importera alla sass filer från foundation. gör att alla komponenter går att använda direkt
			]			
		}).on('error', sass.logError))
		.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true })) // pass the file through autoprefixer 
		.pipe(sourcemaps.write())
        .pipe(gulp.dest(srcPath.publik +'/css/'));
		
});

gulp.task('foundationJS', function () {
	gulp.src(
			[
				srcPath.bower +'/jquery/dist/jquery.js',
				srcPath.bower +'/foundation/js/foundation.js',
				srcPath.bower + '/foundation/js/foundation/foundation.alert.js',
			]
		)			
		.pipe(concat('foundationvendor.js'))
		.pipe(gulp.dest(srcPath.jsbundle +'/'));
		
	return gulp.src([
		srcPath.bower + '/modernizr/modernizr.js'
		]
	)
	.pipe(concat('modernizr.js'))
	.pipe(gulp.dest(srcPath.publik +'/js/'));		
		
});
	
gulp.task('jsconcatfiles', ['foundationJS'], function () {
    return gulp.src(srcPath.jsbundle + '/**/*.js')
        .pipe(sourcemaps.init())
		.pipe(webpack( require('./config/webpack.config.js') ))
      .pipe(concat('kk_aj_publicbundle.js'))
        .pipe(sourcemaps.write())
      .pipe(gulp.dest(srcPath.publik + '/js/'));
});


	 

//Watch task
gulp.task('default',function() {
    gulp.watch('_dev/devsass/**/*.scss', ['SassToCssSrc']); 
	gulp.watch('_dev/devjs/**/*.js', ['jsconcatfiles']);       
   
});

