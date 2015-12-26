var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', ['cp'], function() {
    browserSync({
        server: {
            baseDir: '..'
        }
    });
});

gulp.task('cp', function(){
  gulp.src('index.html')
      .pipe(gulp.dest('..'));
});

gulp.task('rebuild', ['cp'], function() {
  browserSync.reload();
});

gulp.task('watch', function() {
  gulp.watch(['**/*.html'], ['rebuild']);
});

gulp.task('default', ['browser-sync', 'watch']);
