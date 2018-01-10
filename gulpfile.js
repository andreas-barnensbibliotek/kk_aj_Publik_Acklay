/*
install 
1. skapa mappar 
2. kÃ¶r bower init. fyll i allt optional
3. installera foundation: bower install foundation --save -dev
4. npm init
5. npm install --save-dev gulp gulp-sass gulp-autoprefixer gulp-rename gulp-clean-css gulp-sourcemaps webpack-stream
6. skapa gulpfile.js nedan med länkar till bower foundation
7  npm install --save-dev gulp-babel babel-preset-env
*/

var gulpDocumentation = require('gulp-documentation');
var gulp = require('gulp'),
    sass = require('gulp-sass'),	
    autoprefixer = require('gulp-autoprefixer'),
	rename = require('gulp-rename'),
    minifycss = require('gulp-clean-css'),			
    webpack = require('webpack-stream'),	
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	sourcemaps = require('gulp-sourcemaps'),
    babel = require('gulp-babel'),
minify = require("gulp-babel-minify"),  
	path = require('path');

	/*
	sÃ¤tter sÃ¶kvÃ¤gar till mapptrÃ¤det
	*/
	var srcPath={		
		'bower' : './bower_components',
		'scss': './_dev/devsass',	
		'publik': './public',
        'devjs':'./_dev/devjs',
		'jsbundle': './_dev/jsbundle'
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
	return gulp.src([
		srcPath.bower + '/modernizr/modernizr.js'
		]
	)
	.pipe(concat('modernizr.js'))
	.pipe(gulp.dest(srcPath.publik +'/js/'));		
		
});
	
//gulp.task('jsconcatfiles', ['foundationJS'], function () {
//    return gulp.src(srcPath.jsbundle + '/**/*.js')
//        .pipe(sourcemaps.init())
//		.pipe(webpack( require('./config/webpack.config.js') ))
//      .pipe(concat('kk_aj_publicbundle.js'))
//        .pipe(sourcemaps.write())
//      .pipe(gulp.dest(srcPath.publik + '/js/'));
//});

gulp.task('webpackjs', function () {
    return gulp.src(srcPath.devjs + '/app.js')
    .pipe(webpack(require('./config/webpack.config.js')))
    .pipe(gulp.dest(srcPath.jsbundle + '/'));
});

gulp.task('jsconcatfiles', ['webpackjs', 'foundationJS'], function () {
    return gulp.src(
            [
                srcPath.jsbundle + '/jplist_pagination/jquery-ui.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.core.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.pagination-bundle.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.sort-bundle.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.filter-dropdown-bundle.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.jquery-ui-bundle.min.js',
                srcPath.jsbundle + '/jplist_pagination/jplist.history-bundle.min.js',
				srcPath.jsbundle + '/foundation/foundation.min.js',
                srcPath.jsbundle + '/foundation/foundation.topbar.js',
                srcPath.jsbundle + '/handelbars/handlebars.js',				
                //srcPath.jsbundle + '/autocomplete/jquery.easy-autocomplete.js',
                srcPath.jsbundle + '/localstorage/localstorage.js',
                srcPath.jsbundle +'/kk_aj_js/kk_aj_kulturkatalogenWebpack.js',
            ]
        )
       .pipe(sourcemaps.init())
       .pipe(concat('kk_aj_publicbundle.js'))
       .pipe(sourcemaps.write())
       .pipe(gulp.dest(srcPath.publik + '/js/'));
});
 

gulp.task('default',function() {
    gulp.watch('_dev/devsass/**/*.scss', ['SassToCssSrc']); 
	gulp.watch('_dev/devjs/**/*.js', ['jsconcatfiles']);       
   
});


gulp.task('jspublicera', function () {
    return gulp.src(
            srcPath.publik + '/js/kk_aj_publicbundle.js'
        )
        .pipe(minify({
            mangle: {
                keepClassName: true
            }
        }))
        .pipe(rename('kk_aj_publicbundle_min.js'))
       .pipe(gulp.dest(srcPath.publik + '/js/'));
});

gulp.task('dochtml', function () {
    return gulp.src(srcPath.publik + '/js/testar.js')
      .pipe(gulpDocumentation('html'))
      .pipe(gulp.dest(srcPath.publik + '/doc/test'));
});