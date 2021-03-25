const {src,dest}= require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
sass.compiler = require('dart-sass'); //Este compilador permite use
const copy = require('gulp-copy'); //npm install --save-dev gulp-copy
const image = require('gulp-image'); //npm install --save-dev gulp-image

function js_dev(){
  return src(['./js/navegacion.js','./js/persistencia.js','./js/alerts.js', './js/products.js']) // 
      .pipe(concat("main.min.js"))
      .pipe(uglify())
      .pipe(dest('./js'));

}
function css_dev() {
  return src("./sass/**/*.scss")
      .pipe(sass())
      .pipe(cleanCSS())
      .pipe(rename('main.min.css'))
      .pipe(dest("./css"));
}

function js_rel(){
	return src(['./js/navegacion.js','./js/persistencia.js','./js/alerts.js', './js/products.js']) // 
		.pipe(concat("main.min.js"))
		.pipe(uglify())
		.pipe(dest('../www/js'));
  
  }
  function css_dev() {
	return src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(rename('main.min.css'))
		.pipe(dest("./css"));
  }
  function css_rel() {
	return src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(cleanCSS())
		.pipe(rename('main.min.css'))
		.pipe(dest("../www/css"));
  }
function img_rel(destino){
	return src('./img/**/*')
	.pipe(image())
	.pipe(dest(`../www/img/`));
}

function html_rel(destino){
	return src('./index.html')
	.pipe(copy(`../www/`));
}

function build_dev(){
	css_dev();
	js_dev();
	return Promise.resolve("Build finished on dev");
}

function build_rel(){
	css_rel();
	js_rel();
	img_rel();
	html_rel();
	return Promise.resolve("Build finished on www");
}
exports.build_dev = build_dev;
exports.build_rel = build_rel;
exports.js_dev = js_dev;
exports.js_rel = js_rel;
exports.css_dev = css_dev;
exports.css_rel = css_rel;
exports.img_rel = img_rel;
exports.html_rel = html_rel;
exports.default = ()=>{};