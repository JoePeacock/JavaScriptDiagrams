var gulp   = require('gulp');
var argv   = require('yargs').argv;
var fs     = require("fs");
var util   = require("util");

var eslint     = require("gulp-eslint");
var gutil      = require("gulp-util");
var babel      = require("gulp-babel");
var concat     = require("gulp-concat");
var sourcemaps = require('gulp-sourcemaps');

var getSourcePath = function() {
    var diagramName = argv.name;
    var destinationPath = util.format("lib/%s", diagramName);   
    var paths = [];

    // Validate that path exists!
    try {
        file = fs.lstatSync(destinationPath);
        if (file.isDirectory()) {
            if (diagramName) {
                paths.push(util.format("lib/%s/src/*.js", diagramName));
            } else {
                paths = ["lib/**/**/*.js"];
            }
            return { jsPath: paths, 
                     directory: destinationPath,
                     name: diagramName + "-build.js"
                 };
        }
    } catch (error) {
        throw error;
    }
};

gulp.task('lint', function(){

    lib = getSourcePath();

    return gulp.src(lib.jsPath)
        .pipe(eslint({
            extends: 'eslint:recommended',
            ecmaFeatures: {
                'modules': true
            },
            baseConfig:{
                parser: "babel-eslint"
            },
            globals: {
                'jQuery':false,
                '$':true
            },
            rules: {
               'no-console': 1,
               'no-unused-vars': 1
            },
            envs: [
                'browser'
            ]
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('compile', ['lint'], function(){
    lib = getSourcePath();
    return gulp.src(lib.jsPath)
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat(lib.name))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(lib.directory));
});

gulp.task('new', function () {
    var diagramName = argv.name;
    var destinationPath = util.format("lib/%s", diagramName);

    if (diagramName === undefined) {
        throw new Error("You must specify a name with --name")
    } else {
        try {
            file = fs.lstatSync(destinationPath);
            if (file.isDirectory()) {
                throw new Error("A diagram with this name already exists!");
            }
        } catch (error) {
            if (error.code === "ENOENT") {

                gulp.src("templates/newDiagram/**/*")
                    .pipe(gulp.dest(destinationPath));

                gutil.log("Created new directory:", 
                          gutil.colors.green(destinationPath), 
                          "from template.");
            } else {
                throw error;
            }
        }
    }
});
