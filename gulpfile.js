const gulp = require('gulp');
const gprint = require('gulp-print');
const gutil = require("gulp-util");
const del = require('del');
const vinylPaths = require('vinyl-paths');
const webpack = require("webpack");
const webpackstream = require('webpack-stream');
const webpackconfig = require('./webpack.config.js');
const sass = require('gulp-sass');
const extractMediaQuery = require('gulp-extract-media-queries');
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');
const watch = require('gulp-watch');

const runwebpack = (cb) => {
    return new Promise((resolve, reject) => {
        webpack(webpackconfig, (err, stats) => {
            if (err) return reject(err);
            if (stats.hasErrors()) return reject(new Error(stats.compilation.errors.join('\n')));
            resolve()
        })
    })
};

const styles = (cb) => {
    return gulp
        .src("./src/style/containers/*.scss")
        .pipe(sass({ outputStyle: "expanded" }))
        .pipe(extractMediaQuery())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest("./dist/css"))
};

gulp.task('stream', () => {
        return watch('src/style/**/*.scss', gulp.series(['css']))
})



const js = gulp.series(runwebpack);
const css = gulp.series(styles);
// const test = gulp.series(watch);
exports.js = js;
exports.css = css;
// exports.test = test;
