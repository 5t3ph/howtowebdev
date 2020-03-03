const gulp = require("gulp");
const browserSync = require("browser-sync").create();

const paths = {
  styles: {
    src: ["./src/*.css"],
    dest: "./dist/"
  },
  html: {
    src: ["./src/*.html"],
    dest: "./dist/"
  }
};

/* STYLES */
function style() {
  return gulp
    .src(paths.styles.src)
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

/* HTML */
function html() {
  return gulp
    .src(paths.html.src)
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

/* FUNCTIONS */
function watch() {
  browserSync.init({
    server: {
      baseDir: "./src/"
    }
  });
  gulp.watch(paths.styles.src, style);
  gulp.watch(paths.html.src, html);
}

/* GULP TASKS */
exports.default = watch;