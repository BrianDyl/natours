var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('html', function(){
    console.log("it works");
});
gulp.task('watch', function(){

    browserSync.init({
        notify: false,
        server:{
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
       browserSync.reload();
    });

    watch('./app/style.css', function(){
        browserSync.reload();
     });
  
});

