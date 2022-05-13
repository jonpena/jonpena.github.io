/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _css_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/normalize.css */ \"./src/css/normalize.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _css_tagcloud_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/tagcloud.css */ \"./src/css/tagcloud.css\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/main.js */ \"./src/js/main.js\");\n/* harmony import */ var _js_main_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_main_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_site_1_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/site-1.webp */ \"./src/assets/site-1.webp\");\n/* harmony import */ var _assets_site_2_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/site-2.webp */ \"./src/assets/site-2.webp\");\n/* harmony import */ var _assets_site_3_webp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/site-3.webp */ \"./src/assets/site-3.webp\");\n/* harmony import */ var _assets_asterisk_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/asterisk.svg */ \"./src/assets/asterisk.svg\");\n/* harmony import */ var _assets_circle_error_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/circle-error.svg */ \"./src/assets/circle-error.svg\");\n/* harmony import */ var _assets_circle_success_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/circle-success.svg */ \"./src/assets/circle-success.svg\");\n/* harmony import */ var _assets_git_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/git.webp */ \"./src/assets/git.webp\");\n/* harmony import */ var _assets_github_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/github.webp */ \"./src/assets/github.webp\");\n/* harmony import */ var _assets_css3_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/css3.webp */ \"./src/assets/css3.webp\");\n/* harmony import */ var _assets_html5_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/html5.webp */ \"./src/assets/html5.webp\");\n/* harmony import */ var _assets_js_webp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/js.webp */ \"./src/assets/js.webp\");\n/* harmony import */ var _assets_sass_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/sass.webp */ \"./src/assets/sass.webp\");\n/* harmony import */ var _assets_webpack_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/webpack.svg */ \"./src/assets/webpack.svg\");\n/* harmony import */ var _assets_npm_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/npm.svg */ \"./src/assets/npm.svg\");\n/* harmony import */ var _assets_gsap_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/gsap.svg */ \"./src/assets/gsap.svg\");\n/* harmony import */ var _assets_react_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/react.webp */ \"./src/assets/react.webp\");\n/* harmony import */ var _assets_postcss_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./assets/postcss.webp */ \"./src/assets/postcss.webp\");\n/* harmony import */ var _assets_typescript_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./assets/typescript.webp */ \"./src/assets/typescript.webp\");\n// Inject HTML Files\n // Inject CSS Files\n\n\n\n // Inject Javascript Files\n\n // import pwa from \"./js/pwa.js\"\n// import sw from \"./js/serviceWorker.js\"\n// Inject Files\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://Portafolio/./src/index.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval("var $hamburger = document.querySelector(\".hamburger\");\nvar $navbar = document.querySelector(\".navbar\");\nvar $menuContainer = document.querySelector(\".menu-container\");\nvar $sphere = document.querySelector(\".sphere\");\nvar mq = matchMedia('(min-width: 48em)');\nvar options = {\n  maxSpeed: 'normal',\n  initSpeed: 'fast',\n  direction: 30,\n  keep: true,\n  radius: mq.matches ? 360 : 230\n}; // Links of Navigation Menu\n\n$navbar.addEventListener(\"click\", function (e) {\n  if (e.target.matches(\".navbar span a\")) {\n    $hamburger.classList.toggle(\"active\");\n    $navbar.classList.toggle(\"active\");\n  }\n}); // Button Mobile Burger\n\n$hamburger.onclick = function () {\n  $hamburger.classList.toggle(\"active\");\n  $navbar.classList.toggle(\"active\");\n};\n\ndocument.addEventListener(\"scroll\", function () {\n  window.scrollY > 50 ? $menuContainer.classList.add(\"active\") : $menuContainer.classList.remove(\"active\");\n});\n/**\r\n * Observer para indicador de menu en version de desktop\r\n **/\n\nvar cd = function cd(entries) {\n  entries.forEach(function (el) {\n    var temp = document.querySelector(\".navbar-item[data-id=\\\"#\".concat(el.target.getAttribute('id'), \"\\\"]\"));\n    el.isIntersecting ? temp.classList.add(\"active\") : temp.classList.remove(\"active\");\n  });\n};\n\nvar observer = new IntersectionObserver(cd, {\n  threshold: 0.3\n});\nvar $sections = document.querySelectorAll(\"[data-scroll]\");\n$sections.forEach(function (el) {\n  return observer.observe(el);\n});\n/**\r\n * Rain Effect With Canvas\r\n **/\n\nvar $canvas = document.getElementById(\"canvas\");\nvar ctx = $canvas.getContext(\"2d\");\n$canvas.width = window.innerWidth;\n$canvas.height = window.innerHeight;\nvar dropCount = mq.matches ? 80 : 30,\n    drops = [];\n\nvar Random = function Random(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n};\n\nvar drawLine = function drawLine(ctx, x1, y1, x2, y2, color) {\n  ctx.beginPath();\n  ctx.moveTo(x1, y1);\n  ctx.lineTo(x2, y2);\n  ctx.closePath();\n  ctx.strokeStyle = color;\n  ctx.stroke();\n};\n\nvar drop = function drop(x, y) {\n  var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"#fff\";\n  this.x = x;\n  this.y = y;\n  this.c = c;\n  this.vy = mq.matches ? Random(4, 6) : Random(7, 9);\n};\n\nfor (var i = 0; i < dropCount; i++) {\n  var color = i & 1 ? \"#00a2f2\" : \"#e1148b\";\n  var initialPosition = Random(-1800, 0);\n  drops.push(new drop(Random(1, canvas.width), initialPosition, color));\n}\n/**\r\n * Init Rain Animation Forever\r\n **/\n\n\nwindow.addEventListener(\"DOMContentLoaded\", function (e) {\n  TagCloud(\".sphere\", Array(13).fill(\"\"), options);\n  document.querySelector('.tagcloud').style.width = \"100%\";\n  document.querySelector('.tagcloud').style.height = \"470px\";\n  requestAnimationFrame(update);\n\n  function update() {\n    ctx.clearRect(0, 0, $canvas.width, $canvas.height);\n    drops.forEach(function (drop) {\n      drop.y += drop.vy;\n\n      if (drop.y > $canvas.height) {\n        drop.y = 0;\n        drop.vy = mq.matches ? Random(4, 6) : Random(7, 9);\n      }\n\n      drawLine(ctx, drop.x, drop.y, drop.x, drop.y + 12, drop.c);\n    });\n    requestAnimationFrame(update);\n  }\n});\n/**\r\n * Recalcular las posiciones de las drops\r\n **/\n\nwindow.onresize = function () {\n  $canvas.width = window.innerWidth;\n  $canvas.height = window.innerHeight;\n\n  for (var _i = 0; _i < dropCount; _i++) {\n    drops[_i].x = Random(2, $canvas.width);\n    drops[_i].y = Random(-1800, 0);\n  }\n};\n\nmq.onchange = function (e) {\n  options.radius = mq.matches ? 360 : 230;\n  $sphere.removeChild($sphere.childNodes[0]);\n  TagCloud(\".sphere\", Array(13).fill(\"\"), options);\n  document.querySelector('.tagcloud').style.width = \"100%\";\n  document.querySelector('.tagcloud').style.height = \"470px\";\n};\n/**\r\n * Transition Effect with SrollReveal\r\n **/\n\n\nwindow.scrollReveal = ScrollReveal();\nscrollReveal.reveal(\".navbar-container\", {\n  duration: 1200,\n  origin: \"top\",\n  distance: \"4rem\",\n  mobile: false\n});\nscrollReveal.reveal(\".move-right\", {\n  duration: 2000,\n  origin: \"left\",\n  distance: \"-100px\"\n});\nscrollReveal.reveal(\".move-left\", {\n  duration: 2000,\n  origin: \"left\",\n  distance: \"100px\"\n});\nscrollReveal.reveal(\".move-top\", {\n  duration: 2000,\n  origin: \"bottom\",\n  distance: \"60px\"\n}); // Progressive Web App\n\nif ('serviceWorker' in navigator) {\n  navigator.serviceWorker.register('./sw.js').then(function (reg) {\n    return console.log(\"Registro exitoso\", reg);\n  })[\"catch\"](function (err) {\n    return console.warn(\"Error al tratar de registrar el services Worker\", err);\n  });\n}\n\n//# sourceURL=webpack://Portafolio/./src/js/main.js?");

/***/ }),

/***/ "./src/assets/asterisk.svg":
/*!*********************************!*\
  !*** ./src/assets/asterisk.svg ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/asterisk.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/asterisk.svg?");

/***/ }),

/***/ "./src/assets/circle-error.svg":
/*!*************************************!*\
  !*** ./src/assets/circle-error.svg ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/circle-error.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/circle-error.svg?");

/***/ }),

/***/ "./src/assets/circle-success.svg":
/*!***************************************!*\
  !*** ./src/assets/circle-success.svg ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/circle-success.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/circle-success.svg?");

/***/ }),

/***/ "./src/assets/css3.webp":
/*!******************************!*\
  !*** ./src/assets/css3.webp ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/css3.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/css3.webp?");

/***/ }),

/***/ "./src/assets/git.webp":
/*!*****************************!*\
  !*** ./src/assets/git.webp ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/git.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/git.webp?");

/***/ }),

/***/ "./src/assets/github.webp":
/*!********************************!*\
  !*** ./src/assets/github.webp ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/github.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/github.webp?");

/***/ }),

/***/ "./src/assets/gsap.svg":
/*!*****************************!*\
  !*** ./src/assets/gsap.svg ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/gsap.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/gsap.svg?");

/***/ }),

/***/ "./src/assets/html5.webp":
/*!*******************************!*\
  !*** ./src/assets/html5.webp ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/html5.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/html5.webp?");

/***/ }),

/***/ "./src/assets/js.webp":
/*!****************************!*\
  !*** ./src/assets/js.webp ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/js.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/js.webp?");

/***/ }),

/***/ "./src/assets/npm.svg":
/*!****************************!*\
  !*** ./src/assets/npm.svg ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/npm.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/npm.svg?");

/***/ }),

/***/ "./src/assets/postcss.webp":
/*!*********************************!*\
  !*** ./src/assets/postcss.webp ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/postcss.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/postcss.webp?");

/***/ }),

/***/ "./src/assets/react.webp":
/*!*******************************!*\
  !*** ./src/assets/react.webp ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/react.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/react.webp?");

/***/ }),

/***/ "./src/assets/sass.webp":
/*!******************************!*\
  !*** ./src/assets/sass.webp ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/sass.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/sass.webp?");

/***/ }),

/***/ "./src/assets/site-1.webp":
/*!********************************!*\
  !*** ./src/assets/site-1.webp ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/site-1.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/site-1.webp?");

/***/ }),

/***/ "./src/assets/site-2.webp":
/*!********************************!*\
  !*** ./src/assets/site-2.webp ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/site-2.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/site-2.webp?");

/***/ }),

/***/ "./src/assets/site-3.webp":
/*!********************************!*\
  !*** ./src/assets/site-3.webp ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/site-3.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/site-3.webp?");

/***/ }),

/***/ "./src/assets/typescript.webp":
/*!************************************!*\
  !*** ./src/assets/typescript.webp ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/typescript.webp\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/typescript.webp?");

/***/ }),

/***/ "./src/assets/webpack.svg":
/*!********************************!*\
  !*** ./src/assets/webpack.svg ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./assets/webpack.svg\");\n\n//# sourceURL=webpack://Portafolio/./src/assets/webpack.svg?");

/***/ }),

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Module\nvar code = \"<!DOCTYPE html>\\r\\n\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n\\r\\n  <meta charset=\\\"UTF-8\\\" />\\r\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\" />\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\" />\\r\\n  \\r\\n  <meta name=\\\"theme-color\\\" content=\\\"#00a2f2\\\">\\r\\n  <meta name=\\\"msapplication-TileColor\\\" content=\\\"#00a2f2\\\">\\r\\n  <meta name=\\\"msapplication-TileImage\\\" content=\\\"./assets/favicon.png\\\">\\r\\n  <link rel=\\\"apple-touch-icon\\\" href=\\\"./assets/favicon.png\\\">\\r\\n  <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"./assets/favicon.png\\\">\\r\\n  \\r\\n  <link rel=\\\"manifest\\\" href=\\\"manifest.json\\\">\\r\\n  \\r\\n  <title>Portfolio Jonathan Peña</title>\\r\\n      \\r\\n  <link rel=\\\"preconnect\\\" href=\\\"https://fonts.googleapis.com\\\"/>\\r\\n  <link rel=\\\"preconnect\\\" href=\\\"https://fonts.gstatic.com\\\" crossorigin/>\\r\\n  <link href=\\\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap\\\" rel=\\\"stylesheet\\\"/>\\r\\n\\r\\n</head>\\r\\n  \\r\\n  <body id=\\\"home\\\" data-scroll>\\r\\n    \\r\\n    <!-- RAIN EFFECT WITH CANVAS -->\\r\\n    <canvas id=\\\"canvas\\\"> </canvas>\\r\\n        \\r\\n    <!-- NAVEGATION MENU -->\\r\\n    <div class=\\\"menu-container\\\">\\r\\n      \\r\\n      <div class=\\\"navbar-container\\\">\\r\\n        \\r\\n        <a class=\\\"logo\\\" href=\\\"#\\\">JONATHAN<b> PEÑA</b></a>\\r\\n        \\r\\n        <nav class=\\\"navbar\\\">\\r\\n          <span class=\\\"navbar-item active\\\" data-text=\\\"HOME\\\" data-id=\\\"#home\\\"><a href=\\\"#\\\">HOME</a></span>\\r\\n          <span class=\\\"navbar-item\\\" data-text=\\\"PROJECT\\\" data-id=\\\"#project\\\"><a href=\\\"#project\\\">PROJECT</a></span>\\r\\n          <span class=\\\"navbar-item\\\" data-text=\\\"ABOUT ME\\\" data-id=\\\"#about\\\"><a href=\\\"#about\\\">ABOUT ME</a></span>\\r\\n          <span class=\\\"navbar-item\\\" data-text=\\\"CONTACT\\\" data-id=\\\"#contact\\\"><a href=\\\"#contact\\\">CONTACT</a></span>\\r\\n          <div  class=\\\"animation\\\"></div>\\r\\n        </nav>\\r\\n        \\r\\n        <div class=\\\"hamburger\\\">\\r\\n          <span class=\\\"hamburger-bar1\\\"></span>\\r\\n          <span class=\\\"hamburger-bar2\\\"></span>\\r\\n          <span class=\\\"hamburger-bar3\\\"></span>\\r\\n        </div>\\r\\n        \\r\\n      </div>\\r\\n      \\r\\n    </div>\\r\\n    \\r\\n    <!-- H E A D E R -->\\r\\n    <header id=\\\"header\\\">\\r\\n      \\r\\n      <div class=\\\"header-container\\\">\\r\\n        \\r\\n        <div class=\\\"hero-container\\\">\\r\\n          \\r\\n          <h1 class=\\\"hero-h1 style-p\\\">Hi I'm <b>J</b>onathan <b>P</b>eña</h1>\\r\\n          \\r\\n          <h2 class=\\\"hero-h2\\\">Web Developer</h2>\\r\\n          \\r\\n          <blockquote class=\\\"hero-quote style-p\\\">\\r\\n            \\\"Education is what remains after one \\r\\n            has forgotten what one has learned in school\\\"\\r\\n            <cite class=\\\"style-p\\\" translate=\\\"no\\\"> ~ Albert Einstein</cite>\\r\\n          </blockquote>\\r\\n          \\r\\n          <a class=\\\"btn style-p\\\" href=\\\"#about\\\" style=\\\"--btn-bgc:#0e0e22ff; --btn-clr:#00a2f2;\\\"><span>ABOUT ME</span></a>\\r\\n          \\r\\n        </div>\\r\\n        \\r\\n      </div>\\r\\n      \\r\\n    </header>\\r\\n    \\r\\n    <!-- M A I N -->\\r\\n    <main id=\\\"main\\\">\\r\\n      \\r\\n      <!-- P R O J E C T  S E C T I O N -->\\r\\n      <section id=\\\"project\\\" data-scroll>\\r\\n\\r\\n        <div class=\\\"project-title move-top\\\">\\r\\n          <h2 class=\\\"style-p font-purple\\\">Featured<b class=\\\"font-blue\\\"> Projects</b></h2>\\r\\n          <p class=\\\"style-p\\\">These are the last projects I worked on</p>\\r\\n        </div>\\r\\n        \\r\\n        <div class=\\\"project-container\\\">\\r\\n          \\r\\n          <div class=\\\"project-item move-right\\\">\\r\\n            \\r\\n            <img class=\\\"project-img\\\" src=\\\"assets/site-1.webp\\\" width=\\\"600\\\" height=\\\"480\\\" alt=\\\"website-1\\\">\\r\\n            \\r\\n            <div class=\\\"project-content\\\">\\r\\n              <p>Project #01</p>\\r\\n              <h3 translate=\\\"no\\\">Marketing</h3>\\r\\n              <a class=\\\"btn style-p\\\" style=\\\"--btn-bgc:#12122a; --btn-clr:#00a2f2;\\\"><span>READ MORE</span></a>\\r\\n            </div>\\r\\n            \\r\\n          </div>\\r\\n          \\r\\n          <div class=\\\"project-item move-left\\\">\\r\\n            \\r\\n            <img class=\\\"project-img\\\" src=\\\"assets/site-2.webp\\\" width=\\\"600\\\" height=\\\"480\\\" alt=\\\"website-2\\\">\\r\\n\\r\\n            <div class=\\\"project-content\\\">\\r\\n              <p>Project #02</p>\\r\\n              <h3 translate=\\\"no\\\">BizBud</h3>\\r\\n              <a class=\\\"btn style-p\\\" style=\\\"--btn-bgc:#12122a;--btn-clr:#00a2f2;\\\"><span>READ MORE</span></a>\\r\\n            </div>\\r\\n            \\r\\n          </div>\\r\\n          \\r\\n          <div class=\\\"project-item move-right\\\">\\r\\n            \\r\\n              <img class=\\\"project-img\\\" src=\\\"assets/site-3.webp\\\" width=\\\"600\\\" height=\\\"480\\\" alt=\\\"website-3\\\">\\r\\n            \\r\\n            <div class=\\\"project-content\\\">\\r\\n              <p>Project #03</p>\\r\\n              <h3 translate=\\\"no\\\">Simpleux</h3>\\r\\n              <a class=\\\"btn style-p\\\" style=\\\"--btn-bgc:#12122a;--btn-clr:#00a2f2;\\\"><span>READ MORE</span></a>\\r\\n            </div>\\r\\n            \\r\\n          </div>\\r\\n          \\r\\n        </div>\\r\\n        \\r\\n      </section>\\r\\n      \\r\\n      <!-- SECTION ABOUT -->\\r\\n      <section id=\\\"about\\\" data-scroll>\\r\\n        \\r\\n        <div class=\\\"about-title move-top\\\">\\r\\n          \\r\\n          <h2 class=\\\"style-p font-purple\\\">About <b class=\\\"font-blue\\\">Me</b></h2>\\r\\n\\r\\n          <p class=\\\"style-p\\\">\\r\\n            I am a front-end developer who enjoys doing the layout and interactivity \\r\\n            of web interfaces, as well as optimization, for the good positioning and \\r\\n            loading performance of websites and applications. I am a completely self-taught\\r\\n            person and I learned to program on my own through books and videos\\r\\n          </p>\\r\\n\\r\\n          <h3 class=\\\"style-p font-blue\\\">SKILLS</h3>\\r\\n        \\r\\n          <span class=\\\"sphere\\\"></span>\\r\\n\\r\\n        </div>\\r\\n        \\r\\n      </section>\\r\\n\\r\\n\\r\\n      <!-- CONTACT SECTION -->\\r\\n      <section id=\\\"contact\\\" data-scroll=\\\"\\\">\\r\\n        \\r\\n        <div class=\\\"contact-title move-top\\\">\\r\\n          <h2 class=\\\"style-p font-purple\\\">Contact me</h2>\\r\\n        </div>\\r\\n        \\r\\n        <div class=\\\"contact-container move-right\\\">\\r\\n          \\r\\n          <div class=\\\"box\\\">\\r\\n            <!--  Form -->\\r\\n            <div class=\\\"contact form\\\">\\r\\n              \\r\\n              <form id=\\\"formulario\\\" action=\\\"#\\\" autocomplete=\\\"off\\\">\\r\\n                \\r\\n                <div class=\\\"form-container\\\">\\r\\n                  \\r\\n                    <div class=\\\"row50\\\">\\r\\n                      \\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <label for=\\\"nombre\\\">Name</label>\\r\\n                        <input type=\\\"text\\\" id=\\\"nombre\\\" name=\\\"name\\\" title=\\\"Campo Obligatorio\\\" placeholder=\\\"jones\\\" required pattern=\\\"[a-zA-ZÀ-ÿ]{3,20}\\\" maxlength=\\\"20\\\">\\r\\n                        <p>Name must be from 3 to 20 digits and can only contain letters</p>\\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <label for=\\\"apellido\\\">Last name (Optional)</label>\\r\\n                        <input type=\\\"text\\\" id=\\\"apellido\\\" name=\\\"apellido\\\" placeholder=\\\"smith\\\" pattern=\\\"[a-zA-ZÀ-ÿ]{3,20}\\\" maxlength=\\\"20\\\">\\r\\n                        <p>Last name must be from 3 to 20 digits and can only contain letters</p>\\r\\n                      </div>\\r\\n\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"row50\\\">\\r\\n\\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <label for=\\\"email\\\">Email</label>\\r\\n                        <input type=\\\"email\\\" id=\\\"email\\\" name=\\\"email\\\" title=\\\"Campo Obligatorio\\\" placeholder=\\\"example@gmail.com\\\" required pattern=\\\"[a-z0-9._%+-]+@[a-z0-9.-]+\\\\.[a-z]{2,4}$\\\">\\r\\n                        <p>Email can only contain letters, numbers, points, hyphens and underscores</p>\\r\\n                      </div>\\r\\n\\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <label for=\\\"telefono\\\">Phone (Optional)</label>\\r\\n                        <input type=\\\"tel\\\" name=\\\"telefono\\\" id=\\\"telefono\\\" placeholder=\\\"4121983819\\\" pattern=\\\"[0-9]+\\\" minlength=\\\"7\\\" maxlength=\\\"12\\\">\\r\\n                        <p>Phone number can only contain numbers and a maximum of 12 digits</p>\\r\\n                      </div>\\r\\n\\r\\n                    </div>\\r\\n                    \\r\\n                    <div class=\\\"row100\\\">\\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <label for=\\\"message\\\">Message</label>\\r\\n                        <textarea id=\\\"message\\\" placeholder=\\\"Write your message...\\\" maxlength=\\\"255\\\"></textarea>\\r\\n                      </div>\\r\\n                    </div>\\r\\n\\r\\n                    <div class=\\\"row100\\\">\\r\\n                      <div class=\\\"inputBox\\\">\\r\\n                        <button type=\\\"submit\\\" class=\\\"btn style-p\\\" style=\\\"--btn-bgc: #12122a; --btn-clr:#e1148b;\\\"><span>Submit</span></button>\\r\\n                      </div>\\r\\n                    </div>\\r\\n\\r\\n                  </div>\\r\\n\\r\\n                </form>\\r\\n              </div>\\r\\n              \\r\\n            </div>\\r\\n        </div>\\r\\n      </section>\\r\\n      \\r\\n    </main>\\r\\n\\r\\n    <footer id=\\\"footer\\\">\\r\\n      \\r\\n      <div class=\\\"footer-container\\\">\\r\\n      \\r\\n        <p>&copy; Copyright All Rights Reserved</p>\\r\\n        \\r\\n        <div class=\\\"social-container\\\">\\r\\n          <ion-icon name=\\\"logo-facebook\\\"></ion-icon>\\r\\n          <ion-icon name=\\\"logo-youtube\\\"></ion-icon>\\r\\n          <ion-icon name=\\\"logo-linkedin\\\"></ion-icon>\\r\\n        </div>\\r\\n\\r\\n        <p><span>💖</span> Created by Jonathan Peña</p>\\r\\n\\r\\n      </div>\\r\\n        \\r\\n    </footer>\\r\\n\\r\\n    <script src=\\\"https://cdn.jsdelivr.net/npm/scrollreveal@4.0.9/dist/scrollreveal.min.js\\\"></script>\\r\\n    <script src=\\\"https://cdn.jsdelivr.net/npm/TagCloud@2.2.0/dist/TagCloud.min.js\\\"></script>\\r\\n    <script type=\\\"module\\\" src=\\\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js\\\"></script>\\r\\n    <script nomodule src=\\\"https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js\\\"></script>  \\r\\n    \\r\\n  </body>\\r\\n\\r\\n</html>\\r\\n\";\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (code);\n\n//# sourceURL=webpack://Portafolio/./src/index.html?");

/***/ }),

/***/ "./src/css/normalize.css":
/*!*******************************!*\
  !*** ./src/css/normalize.css ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Portafolio/./src/css/normalize.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Portafolio/./src/css/style.css?");

/***/ }),

/***/ "./src/css/tagcloud.css":
/*!******************************!*\
  !*** ./src/css/tagcloud.css ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://Portafolio/./src/css/tagcloud.css?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;