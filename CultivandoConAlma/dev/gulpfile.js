const {src,dest}= require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require ('gulp-clean-css');
const concat=require('gulp-concat');
const uglify=require('gulp-uglify-es').default;
sass.compiler = require('dart-sass'); //Este compilador permite use

function js(){
  return src(['./js/navegacion.js','./js/persistencia.js','./js/alerts.js', './js/products.js']) // 
      .pipe(concat("main.min.js"))
      .pipe(uglify())
      .pipe(dest('./js'));

}
function css() {
  return src("./sass/**/*.scss")
      .pipe(sass())
      .pipe(cleanCSS())
      .pipe(rename('main.min.css'))
      .pipe(dest("./css"));
}
exports.js = js;
exports.css = css;
exports.default = ()=>{};