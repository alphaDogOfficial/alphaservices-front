var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function () {
   connect.server({
    root: 'dist',
    port: process.env.PORT || 4000, // localhost:5000
    livereload: false
  });
});

 
gulp.task('default', ['connect']);