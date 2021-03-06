var gulp = require('gulp');
var watch = require('gulp-watch');
var plugins = require('gulp-load-plugins')();
var del = require('del');
var es = require('event-stream');
var bowerFiles = require('main-bower-files');
var karma = require('karma').server;

// Path Strings
var paths = {
    scripts: ['app/**/*.js', 'app/*.js'],
    styles: ['app/**/*.css', 'app/**/*.scss'],
    assets: ['app/assets/**/*', 'bower_components/font-awesome/fonts/'],
    index: 'app/index.html',
    partials: ['app/**/*.html', '!app/index.html'],
    bowerDir: 'bower_components/',
    directivesDir: 'app/extensions/directives/',
    distDev: 'temp',
    distProd: 'dist',
    distScripts: '/scripts',
    distScriptsVendor: '/scripts/vendors',
    scriptsDevServer: 'devServer/*.js'
};

// Pipe Segments
var pipes = {};

pipes.orderedAppScripts = function() {
    return plugins.angularFilesort();
};
pipes.minifiedFileName = function() {
    return plugins.rename(function(path) {
        path.extname = '.min' + path.extname;
    });
};
pipes.validatedAppScripts = function() {
    return gulp.src(paths.scripts)
        .pipe(plugins.plumber())
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
};
pipes.builtAppScriptsDev = function() {
    return pipes.validatedAppScripts()
        .pipe(gulp.dest(paths.distDev + paths.distScripts));
};
pipes.builtAppScriptsProd = function() {
    return pipes.validatedAppScripts()
        .pipe(pipes.orderedAppScripts())
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('app.min.js'))
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(paths.distProd + paths.distScripts));
};
pipes.builtVendorScriptsDev = function() {
    return gulp.src(bowerFiles())
        .pipe(gulp.dest(paths.distDev + paths.distScriptsVendor));
};
pipes.builtVendorScriptsProd = function() {
    return gulp.src(bowerFiles())
        .pipe(plugins.concat('vendor.min.js'))
        .pipe(plugins.uglify())
        .pipe(gulp.dest(paths.distProd + paths.distScriptsVendor));
};
pipes.validatedDevServerScripts = function() {
    return gulp.src(paths.scriptsDevServer)
        .pipe(plugins.jshint())
        .pipe(plugins.jshint.reporter('jshint-stylish'));
};
pipes.validatedPartials = function() {
    return gulp.src(paths.partials)
        .pipe(plugins.htmlhint({
            'doctype-first': false
        }))
        .pipe(plugins.htmlhint.reporter());
};
pipes.builtPartialsDev = function() {
    return pipes.validatedPartials()
        .pipe(gulp.dest(paths.distDev));
};
pipes.builtPartialsProd = function() {
    return pipes.validatedPartials()
        .pipe(plugins.htmlhint.failReporter())
        .pipe(plugins.htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(paths.distProd));
};
pipes.builtStylesDev = function() {
    return gulp.src(paths.styles)
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
            includePaths: [
                paths.bowerDir + 'bootstrap-sass/assets/stylesheets',
                paths.bowerDir + 'font-awesome/scss',
                require('node-bourbon').includePaths,
                paths.directivesDir
            ],
            sourceComments: 'normal'
        }))
        .pipe(gulp.dest(paths.distDev));
};
pipes.builtStylesProd = function() {
    return gulp.src(paths.styles)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.plumber())
        .pipe(plugins.sass({
            includePaths: [
                paths.bowerDir + 'bootstrap-sass/assets/stylesheets',
                paths.bowerDir + 'font-awesome/scss',
                require('node-bourbon').includePaths,
                paths.directivesDir
            ]
        }))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(pipes.minifiedFileName())
        .pipe(gulp.dest(paths.distProd));
};
pipes.icons =   function()  {    
    return  gulp.src(paths.bowerDir  +  '/font-awesome/fonts/**.*')
        .pipe(gulp.dest(paths.distDev + '/assets/fonts/font-awesome'));
};
pipes.processedAssets = function() {
    return gulp.src(paths.assets)
        .pipe(gulp.dest(paths.distDev + '/assets'));
};
pipes.validatedIndex = function() {
    return gulp.src(paths.index)
        .pipe(plugins.htmlhint())
        .pipe(plugins.htmlhint.reporter());
};
pipes.builtIndexDev = function() {
    var orderedVendorScripts = pipes.builtVendorScriptsDev();

    var orderedAppScripts = pipes.builtAppScriptsDev()
        .pipe(pipes.orderedAppScripts());

    var appStyles = pipes.builtStylesDev();

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distDev))
        .pipe(plugins.inject(orderedVendorScripts, {
            relative: true,
            name: 'bower'
        }))
        .pipe(plugins.inject(orderedAppScripts, {
            relative: true
        }))
        .pipe(plugins.inject(appStyles, {
            relative: true
        }))
        .pipe(gulp.dest(paths.distDev));
};
pipes.builtIndexProd = function() {
    var vendorScripts = pipes.builtVendorScriptsProd();
    var appScripts = pipes.builtAppScriptsProd();
    var appStyles = pipes.builtStylesProd();
    var appPartials = pipes.builtPartialsProd();

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distProd))
        .pipe(plugins.inject(vendorScripts, {
            relative: true,
            name: 'bower'
        }))
        .pipe(plugins.inject(appScripts, {
            relative: true
        }))
        .pipe(plugins.inject(appStyles, {
            relative: true
        }))
        .pipe(plugins.htmlmin({
            collapseWhitespace: true,
            removeComments: true
        }))
        .pipe(gulp.dest(paths.distProd));
};
pipes.builtAppDev = function() {
    return es.merge(pipes.builtIndexDev(), pipes.builtPartialsDev(), pipes.processedAssets(), pipes.icons());
};
pipes.builtAppProd = function() {
    return es.merge(pipes.builtIndexProd(), pipes.processedAssets(), pipes.icons());
};
pipes.unitTests = function(done) {
    return karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, function() {
        done();
    });
};

// Gulp Tasks

//executes the unit tests
gulp.task('unit-test', pipes.unitTests);

// removes all compiled dev files
gulp.task('clean-dev', function() {
    return del(paths.distDev);
});

// removes all compiled production files
gulp.task('clean-prod', function() {
    return del(paths.distProd);
});

// checks html source files for syntax errors
gulp.task('validate-partials', pipes.validatedPartials);

// checks index.html for syntax errors
gulp.task('validate-index', pipes.validatedIndex);

// moves html source files into the dev environment
gulp.task('build-partials-dev', pipes.builtPartialsDev);

// converts partials to javascript using html2js
gulp.task('convert-partials-to-js', pipes.scriptedPartials);

// runs jshint on the dev server scripts
gulp.task('validate-devserver-scripts', pipes.validatedDevServerScripts);

// runs jshint on the app scripts
gulp.task('validate-app-scripts', pipes.validatedAppScripts);

// moves app scripts into the dev environment
gulp.task('build-app-scripts-dev', pipes.builtAppScriptsDev);

// concatenates, uglifies, and moves app scripts and partials into the prod environment
gulp.task('build-app-scripts-prod', pipes.builtAppScriptsProd);

// compiles app sass and moves to the dev environment
gulp.task('build-styles-dev', pipes.builtStylesDev);

// compiles and minifies app sass to css and moves to the prod environment
gulp.task('build-styles-prod', pipes.builtStylesProd);

// moves vendor scripts into the dev environment
gulp.task('build-vendor-scripts-dev', pipes.builtVendorScriptsDev);

// concatenates, uglifies, and moves vendor scripts into the prod environment
gulp.task('build-vendor-scripts-prod', pipes.builtVendorScriptsProd);

// validates and injects sources into index.html and moves it to the dev environment
gulp.task('build-index-dev', pipes.builtIndexDev);

// validates and injects sources into index.html, minifies and moves it to the dev environment
gulp.task('build-index-prod', pipes.builtIndexProd);

// builds a complete dev environment
gulp.task('build-app-dev', pipes.builtAppDev);

// builds a complete prod environment
gulp.task('build-app-prod', pipes.builtAppProd);

// cleans and builds a complete dev environment
gulp.task('clean-build-app-dev', ['clean-dev'], pipes.builtAppDev);

// cleans and builds a complete prod environment
gulp.task('clean-build-app-prod', ['clean-prod'], pipes.builtAppProd);

// clean, build, and watch live changes to the dev environment
gulp.task('default', ['clean-build-app-dev', 'validate-devserver-scripts'], function() {

    // start nodemon to auto-reload the dev server
    plugins.nodemon({
            script: 'server.js',
            ext: 'js',
            watch: ['devServer/'],
            env: {
                NODE_ENV: 'development'
            }
        })
        .on('change', ['validate-devserver-scripts'])
        .on('restart', function() {
            console.log('[nodemon] restarted dev server');
        });

    // start live-reload server
    plugins.livereload.listen({
        start: true
    });

    // watch index
    watch(paths.index, function() {
        return pipes.builtIndexDev()
            .pipe(plugins.livereload());
    });

    // watch app scripts
    watch(paths.scripts, function() {
        return pipes.builtIndexDev()
            .pipe(plugins.livereload());
    });

    // watch html partials
    watch(paths.partials, function() {
        return pipes.builtPartialsDev()
            .pipe(plugins.livereload());
    });

    // watch styles
    watch(paths.styles, function() {
        return pipes.builtIndexDev()
            .pipe(plugins.livereload());
    });

    // watch assets
    watch(paths.assets, function() {
        return pipes.processedAssets()
            .pipe(plugins.livereload());
    });

});

// clean, build, and watch live changes to the prod environment
gulp.task('prod', ['clean-build-app-prod', 'validate-devserver-scripts'], function() {
    // start nodemon to auto-reload the dev server
    plugins.nodemon({
            script: 'server.js',
            ext: 'js',
            watch: ['devServer/'],
            env: {
                NODE_ENV: 'production'
            }
        })
        .on('change', ['validate-devserver-scripts'])
        .on('restart', function() {
            console.log('[nodemon] restarted dev server');
        });

    // start live-reload server
    plugins.livereload.listen({
        start: true
    });

    // watch index
    watch(paths.index, function() {
        return pipes.builtIndexProd()
            .pipe(plugins.livereload());
    });

    // watch app scripts
    watch(paths.scripts, function() {
        return pipes.builtAppScriptsProd()
            .pipe(plugins.livereload());
    });

    // watch hhtml partials
    watch(paths.partials, function() {
        return pipes.builtAppScriptsProd()
            .pipe(plugins.livereload());
    });

    // watch styles
    watch(paths.styles, function() {
        return pipes.builtStylesProd()
            .pipe(plugins.livereload());
    });

    // watch assets
    watch(paths.assets, function() {
        return pipes.processedAssets()
            .pipe(plugins.livereload());
    });

});

// default task builds for prod
gulp.task('build', ['clean-build-app-prod']);
