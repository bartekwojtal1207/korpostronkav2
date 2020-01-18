const gulp = require('gulp');
const gprint = require('gulp-print');
const gutil = require("gulp-util");
const del = require('del');
const vinylPaths = require('vinyl-paths');
const webpack = require("webpack");
const webpackstream = require('webpack-stream');
const webpackconfig = require('./webpack.config.js');

const runwebpack = (cb) => {
    return new Promise((resolve, reject) => {
        webpack(webpackconfig, (err, stats) => {
            if (err) return reject(err);
            if (stats.hasErrors()) return reject(new Error(stats.compilation.errors.join('\n')));
            resolve()
        })
    })
};


const js = gulp.series(runwebpack);
exports.js = js;