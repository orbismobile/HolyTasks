var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

var options = {
  imageSource : "/Users/erikflores/projects/test/test/Assets.xcassets",
  imageDestination : "/Users/erikflores/Desktop/Assets.xcassets",
  tinyApiKey : ""
}

gulp.task('compress', function() {
    gulp.src(options.imageSource+'/**/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: options.tinyApiKey,
            sigFile: 'images/.tinypng-sigs',
            log: true,
            summarize: true
        }))
        .pipe(gulp.dest(options.imageDestination))

    gulp.src(options.imageSource+'**/Contents.json')
        .pipe(gulp.dest(options.imageDestination))
});
