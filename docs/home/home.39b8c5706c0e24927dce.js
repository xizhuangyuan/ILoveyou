/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./pub/js/TransLste.js":
/*!*****************************!*\
  !*** ./pub/js/TransLste.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Translste)\n/* harmony export */ });\n/* harmony import */ var _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pub/js/ani */ \"./pub/js/ani.js\");\n\nclass Translste extends _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n\n  exce(el) {\n    el.classList.add('change');\n  }\n\n  static install() {\n    return new Translste();\n  }\n\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./pub/js/TransLste.js?");

/***/ }),

/***/ "./pub/js/ani.js":
/*!***********************!*\
  !*** ./pub/js/ani.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Animate)\n/* harmony export */ });\n// import TransLaste from \"./TransLste\";\n// import Transparency from \"./transparency\";\nclass Animate {\n  static el;\n\n  constructor() {}\n\n  static create() {\n    return new Animate();\n  }\n\n  mount(el) {\n    this.el = el;\n    this.model().exce(el);\n  }\n\n  use(Translste) {\n    try {\n      this.model = Translste.install;\n    } catch (e) {\n      Translaste;\n    }\n\n    return this;\n  }\n\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./pub/js/ani.js?");

/***/ }),

/***/ "./pub/js/transparency.js":
/*!********************************!*\
  !*** ./pub/js/transparency.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Translste)\n/* harmony export */ });\n/* harmony import */ var _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pub/js/ani */ \"./pub/js/ani.js\");\n // export default class Transparency {\n//     constructor(parse) {\n//         console.log(parse)\n//         this.parse = parse;\n//     }\n//     exce(item) {\n//         item.classList.add('change2');\n//         let addevent = function () {\n//             item.classList.remove('change2');\n//             item.removeEventListener('animationend', addevent);\n//         }\n//         item.addEventListener('animationend', addevent);\n//     }\n// }\n// export default class Translate extends Animation{\n//     constructor(){\n//         super();\n//     }\n//     exce(){\n//         let _this = this;\n//         this.addEventListener.classList.add('change');\n//         super.emit('animationstary');\n//     }\n// }\n\nclass Translste extends _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n  }\n\n  exce(el) {\n    el.classList.add('change2');\n  }\n\n  static install() {\n    return new Translste();\n  }\n\n}\n\n//# sourceURL=webpack://webpack-multpart-framework/./pub/js/transparency.js?");

/***/ }),

/***/ "./src/article-rount.js":
/*!******************************!*\
  !*** ./src/article-rount.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _article_1_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./article/南拳1.html */ \"./src/article/南拳1.html\");\n/* harmony import */ var _article_2_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./article/南拳2.html */ \"./src/article/南拳2.html\");\n/* harmony import */ var _article_3_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./article/南拳3.html */ \"./src/article/南拳3.html\");\n/* harmony import */ var _article_4_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./article/南拳4.html */ \"./src/article/南拳4.html\");\n/* harmony import */ var _article_5_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./article/南拳5.html */ \"./src/article/南拳5.html\");\n/* harmony import */ var _article_1_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./article/周记1.html */ \"./src/article/周记1.html\");\n\n\n\n\n\n\n\nfunction HTMLarticle(str) {\n  var span = document.createElement('span');\n  span.innerHTML = str;\n  return span.querySelector('template').innerHTML;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([{\n  id: 1,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_1_html__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n}, {\n  id: 2,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_2_html__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n}, {\n  id: 3,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_3_html__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n}, {\n  id: 4,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_4_html__WEBPACK_IMPORTED_MODULE_3__[\"default\"])\n}, {\n  id: 5,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_5_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"])\n}, {\n  id: 6,\n  // title: '如何看待知乎上的男拳',\n  article: HTMLarticle(_article_1_html__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n}]);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article-rount.js?");

/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../pub/js/ani */ \"./pub/js/ani.js\");\n/* harmony import */ var _pub_js_TransLste__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pub/js/TransLste */ \"./pub/js/TransLste.js\");\n/* harmony import */ var _pub_js_transparency__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pub/js/transparency */ \"./pub/js/transparency.js\");\n/* harmony import */ var _article_rount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../article-rount */ \"./src/article-rount.js\");\n\n\n\nlet animate1 = _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create().use(_pub_js_transparency__WEBPACK_IMPORTED_MODULE_2__[\"default\"]).mount(document.getElementsByClassName('tit')[0]);\nlet animate2 = _pub_js_ani__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create().use(_pub_js_TransLste__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).mount(document.getElementsByClassName('header-center-right_div1_text')[0]);\nvar size = 160; // 多少个字符换行\n\n\nvar odiv = document.querySelector('.main-center-left'); // 父节点\n\nvar idiv = odiv.querySelector('.template'); //  克隆子节点\n\nString.prototype.ellipsis = function (size) {\n  if (this.length > size) {\n    let newstr = this.substr(0, size) + '...';\n    return newstr;\n  }\n\n  return this;\n};\n\nvar fragment = document.createDocumentFragment();\n_article_rount__WEBPACK_IMPORTED_MODULE_3__[\"default\"].forEach(parse => {\n  var newdiv = idiv.content.cloneNode(true);\n  newdiv.querySelector('.text').innerHTML = parse.article.ellipsis(size);\n  newdiv.querySelector('.text').querySelector('h2').dataset.id = parse.id;\n\n  newdiv.querySelector('.text').querySelector('h2').onclick = function (e) {\n    window.location.href = './articleDetails.html?type=' + e.target.dataset.id + '&id=1&name=xiaoming';\n  };\n\n  if (parse.article.ellipsis(size).length > size) {\n    newdiv.querySelector('.btn').querySelector('.details').style.display = 'inline-block';\n  }\n\n  fragment.appendChild(newdiv);\n});\nodiv.appendChild(fragment);\nvar btn = document.querySelectorAll('.btn');\nbtn.forEach((item, index) => {\n  item.querySelector('.details').addEventListener('click', e => {\n    var a = e.target.parentNode.parentNode.querySelector('h2').dataset.id;\n    e.target.parentNode.parentNode.querySelector('.text').innerHTML = _article_rount__WEBPACK_IMPORTED_MODULE_3__[\"default\"][index].article.replace(/\\n/g, '<br>');\n    e.target.parentNode.querySelector('.away').style.display = 'inline-block';\n    e.target.parentNode.parentNode.querySelector('h2').dataset.id = a;\n    e.target.style.display = 'none';\n  });\n  item.querySelector('.away').addEventListener('click', e => {\n    var a = e.target.parentNode.parentNode.querySelector('h2').dataset.id;\n    e.target.parentNode.parentNode.querySelector('.text').innerHTML = _article_rount__WEBPACK_IMPORTED_MODULE_3__[\"default\"][index].article.ellipsis(size);\n    e.target.parentNode.querySelector('.details').style.display = 'inline-block';\n    e.target.parentNode.parentNode.querySelector('h2').dataset.id = a;\n    e.target.style.display = 'none';\n  });\n});\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/home/home.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/home/home.less":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/home/home.less ***!
  \***************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body,\\nh1,\\nh2 {\\n  margin: 0;\\n  padding: 0;\\n}\\nh2 {\\n  display: inline-block;\\n}\\n#wrap {\\n  min-width: 1400px;\\n}\\n.header {\\n  width: 100%;\\n  height: 200px;\\n  background-color: #2e7bcf;\\n}\\n.header-center {\\n  width: 1000px;\\n  height: 200px;\\n  margin: 0 auto;\\n}\\n.header-center-left {\\n  float: left;\\n  width: 700px;\\n}\\n.header-center-left_top,\\n.header-center-left_buttom {\\n  width: 700px;\\n  height: 100px;\\n  display: flex;\\n  align-items: center;\\n}\\n.tit {\\n  font-size: 70px;\\n  color: white;\\n  margin-left: 30px;\\n  margin-top: 35px;\\n  /* font-family: 'Architects Daughter', 'Helvetica Neue', Helvetica, Arial, serif; */\\n  font-style: italic;\\n}\\n.tittwo {\\n  color: #9ddcff;\\n  font-size: 25px;\\n  margin-left: 30px;\\n  margin-bottom: 35px;\\n}\\n.header-center-right {\\n  float: left;\\n  width: 300px;\\n  height: 200px;\\n}\\n.header-center-right_div1 {\\n  width: 250px;\\n  height: 80px;\\n  margin-top: 30px;\\n  margin-left: 40px;\\n  border-radius: 10px;\\n  color: white;\\n}\\n.header-center-right_div1_img {\\n  float: left;\\n  width: 70px;\\n  height: 80px;\\n}\\n.header-center-right_div1_text {\\n  float: left;\\n  width: 130px;\\n  height: 50px;\\n  padding: 15px 0;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  flex-wrap: wrap;\\n}\\n.main {\\n  width: 100%;\\n  background-color: #ccc;\\n}\\n.main-center {\\n  width: 1010px;\\n  height: 100%;\\n  margin: 0 auto;\\n}\\n.main-center-left,\\n.main-center-right {\\n  float: left;\\n}\\n.main-center-left {\\n  width: 700px;\\n}\\n.main-center-left_div {\\n  width: 100%;\\n  margin-top: 30px;\\n}\\n.change {\\n  margin-left: -1000px;\\n  animation: move 0.5s alternate both;\\n}\\n@keyframes move {\\n  100% {\\n    margin-left: 0;\\n  }\\n}\\n.text {\\n  text-indent: 24px;\\n}\\n.text h2::before {\\n  padding-right: 10px;\\n  content: '//';\\n  color: #9ddcff;\\n}\\n.main-center-right {\\n  width: 300px;\\n  box-shadow: 8px -2px 5px -6px #ccc inset;\\n  margin-left: 10px;\\n}\\n.main-center-right_div {\\n  width: 202px;\\n  height: 80px;\\n  background-color: #2e7bcf;\\n  border-radius: 10px;\\n  margin-top: 30px;\\n  margin-left: 30px;\\n}\\n.change2 {\\n  animation-name: rig;\\n  animation-duration: 1s;\\n  animation-fill-mode: forwards;\\n}\\n@keyframes rig {\\n  from {\\n    opacity: 0;\\n  }\\n  to {\\n    opacity: 1;\\n  }\\n}\\n.details {\\n  cursor: pointer;\\n  color: blue;\\n  display: none;\\n}\\n.away {\\n  cursor: pointer;\\n  color: blue;\\n  display: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/home/home.less?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/article/南拳1.html":
/*!******************************!*\
  !*** ./src/article/南拳1.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>如何看待知乎上的男拳1</h2>\\r\\n    <article>\\r\\n        1.注册知乎是在百度上提个问题，系统给推荐了一个来自知乎的答案，而想看到完整答案，需要注册，为此我成为了知乎用户。2.最开始的阶段是在知乎上看别人的文章与问答，觉得这里有很人性的温暖在里面，有很多问答都很精彩，有些问得认真，回答得也很认真。在看的过程中，也感受到久违的“真诚”在其中。平时生活中不想和人说的话，或者想了解的答案，在这里大部分找到解析的线索，你会觉得内心里多了可以安放情感与心绪的地方。3.知乎的很多回答很专业，在非专业人眼中有了解自己不知事物的窗口。4.看得多了，也随之开启写作的热情。有时也会回答问题，倾注很多个人的经验与感悟在里边，如果有人受益，那是一种很开心的，助人也自助的方式。5.知乎的升级系统，也比较吸引人，一篇300字以上图文，每天可增加65分，这是很有趣的一件事情。很期待能升级到下一个级别，以至于再下一个级别。6.我个人比较喜欢在平常的生活中感悟一些对自己有用的东西，知乎这个平台可以让自己的某些感悟分享给别人，这是一种很充实的幸福感。赠人玫瑰，手有余香！\\r\\n        作者：络浅微\\r\\n        链接：https://www.zhihu.com/question/37865484/answer/2165040906\\r\\n        来源：知乎\\r\\n        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%8D%97%E6%8B%B31.html?");

/***/ }),

/***/ "./src/article/南拳2.html":
/*!******************************!*\
  !*** ./src/article/南拳2.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>如何看待知乎上的男拳2</h2>\\r\\n    <article>\\r\\n        作者：游子离链接：https://www.zhihu.com/question/490763912/answer/2161431049来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。鄙人几乎没有出彩礼。但实际上鄙人破防是另外的事件。她爹妈给我八万（实际上是我给的储蓄卡）。然后我给了前妻八万。最后这八万给老婆保管。作为夫妻共同财产。就是一张卡传来传去就把婚结了。不过婚后每个月二万多的纯收入都给前妻保管。她们也知道我家家境与我爱她。因此彩礼没有计较。～知乎有个答案吧，就是说个规则。夫妻当然是人类最美好的感情之一。所谓君臣，父子，夫妻，朋友，亲戚。此谓之五伦。人就是五伦总和。但是五伦也不是绝对。君臣大义亦有陈胜吴广。而司马迁为陈吴立世家。列为诸侯。反贼为诸侯，这是古代中国一个创举。所谓帝王将相宁有种乎。只要你反抗暴政，你就是帝王将相。亦有孔子舍鲁君，卫君而投外国。亦有周天子不振，而亚圣孟夫子说于魏齐。国家无道，虽然是圣人投于外国亦是正举。生意上的伙伴，比如某些豪商，相约落水也是救一次。你不能无限压榨别人。即使父母，绝交别居的也很多。唯独夫妻之间，委屈求全的太多。因此要求也不是不可以提。但是得看看这个要求是不是奔着把对方掏空来的。男女之间，人伦所谓不爱的标志就是：不考虑你的感受，你的承受能力，你日后日子怎么过，只想着怎么掏空你。这种人，是老板，就是暴君，反他丫的。是君主，那就是横征暴敛，民不聊生。你应该当陈胜吴广，而不是印度人。这种子女，呵呵。最好还是有所防备。是合作的伙伴，朋友，建议还是换一个。唯独是夫妻，因为涉及到后代繁衍的问题，特别是穷人，所以就很多时候忍气吞声。～其实这种吧。建议还是换个老实本分的。真的。还没有进门就算计这个，多半也不是冲着过日子来的。到时候榨干了，你还能拿什么留她。或者即使能留住，你的日子过得好么？而且啥都不惦记，就惦记家里这点财产，这种人，内卷严重，兔子还不吃窝边草。每天算计这些，她能有多大出息。你给了，她以后还会怪你跟了你浪费人生。娶妻娶德。不然起码让你倒退n年\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%8D%97%E6%8B%B32.html?");

/***/ }),

/***/ "./src/article/南拳3.html":
/*!******************************!*\
  !*** ./src/article/南拳3.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>如何看待知乎上的男拳3</h2>\\r\\n    <article>\\r\\n        老师是武音毕业的资深声乐老师，专业过硬，师德好，教学兢兢业业，从教十几年来，桃李满天下，有不少都成为了专业歌手，上过中国好声音。不过，老师不喜欢以这些作为宣传。老师还经常参加公益活动，捐款捐物，如今这样的坚守初心，品德高尚的老师真的不多见了。如果各位读者有幸成为老师的学生，还请一定珍惜，好好学习，一定能学有所得！作者：缘分天空链接：https://www.zhihu.com/question/416914959/answer/2175487242来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%8D%97%E6%8B%B33.html?");

/***/ }),

/***/ "./src/article/南拳4.html":
/*!******************************!*\
  !*** ./src/article/南拳4.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>如何看待知乎上的男拳4</h2>\\r\\n    <article>\\r\\n        作者：异端之月链接：https://www.zhihu.com/question/458218535/answer/2175684102来源：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。第一，知乎男权地图炮所有女性的次数，按比例来说并不算多，论声势更是远远不如当年杨笠“普信男”“男的，垃圾”下的各种女性评论；第二，知乎男权与其说是男权不如说是反女权，这群人的目的就是反女权，如果有的时候不慎地图炮或者误伤了别人的话，【主要原因是女权太过可恶抹黑了全体女性而已】——就像【如果有个工人在抗战时候说日本人都是垃圾，主要不是因为他素质太低骂了日本群众，而是因为日本军国主义发动了侵略战争】，他的这个地图炮话语需要由日本军国主义来负责，同理，【不慎误伤一般女性的责任，应该主要由女权主义来负，因为女权主义已经这样群体性羞辱一般男性好多年了】第三，你想做正常网民可以，少参与性别话题就是了，如果你主动参与性别话题，【就像一个人非要跑到双方激烈交战的战场中央那样，交战双方没有为你生命负责的义务——简而言之，你被打死属于自找的】第四，知乎上的女权主义，起码在15年之前是非常常见而且是主流，当时反女权还根本寥寥无几，而且被普遍认为是魔怔，也就是说当时女权主义是天然正确的一方——比如我当时也认为女权主义是正确的。所以，在女权主义占据天然正义的高地，大部分知乎人赞成女权主义这种大优势局面之后，是怎么被反女权反推的？无他，【不要看女权主义说了什么，而要看女权主义做了什么】综上，知乎反女权属于正义的自卫反击，虽然会有打错人的情况，但这是属于没有办法，而且比例并不高，你想避免也很容易——不参与性别话题就是，你不站在战场中间，自然不会被双方集火。\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%8D%97%E6%8B%B34.html?");

/***/ }),

/***/ "./src/article/南拳5.html":
/*!******************************!*\
  !*** ./src/article/南拳5.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>如何看待知乎上的男拳5</h2>\\r\\n    <article>\\r\\n        这场战争一开始我：知乎著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%8D%97%E6%8B%B35.html?");

/***/ }),

/***/ "./src/article/周记1.html":
/*!******************************!*\
  !*** ./src/article/周记1.html ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Module\nvar code = \"<template>\\r\\n    <h2>周记1</h2>\\r\\n    <article>\\r\\n       ### 万物皆对象  之要是new出来的东西都属于对象\\r\\n       var str = new String('hello word');   <!--typeof str  object -->\\r\\n       ### 文档碎片的使用和为什么要用文档碎片\\r\\n       var fragment = document.createDocumentFragment();  <!--创建了一个文档碎片 -->\\r\\n       ### template标签中的任何东西不会渲染到网页上  从而减少重绘和回流  提高了性能\\r\\n       ### promise 解决回调地狱\\r\\n       new Promise((resolve,reject)=>{里面写异步操作})  //成功是resolve 失败是reject     成功了走then方法   失败了走eatch方法 \\r\\n       ####  onclick不能嵌套onclick事件  也不能在onclick中添加onclick事件  addEventListener事件结束完成后必须removeEventListener事件 \\r\\n       ####  a.style.color = 'red';  a.style.cursor = 'pointer' => a.style.cssText = `color : 'red';cursor : 'pointer'`  这样写的好处是减少了重绘和回流\\r\\n       ### class的继承\\r\\n       class People{\\r\\n\\t\\tconsructor(props){\\r\\n\\t\\t\\tthis.el = props;\\r\\n\\t\\t}\\r\\n\\t\\texec(){\\r\\n\\t\\t\\tconsole.log('父')\\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tclass Student extends People{\\r\\n\\t\\tconstructor(prop){\\r\\n\\t\\t\\tsuper();\\r\\n             this.exec();\\r\\n\\t\\t}\\r\\n\\t\\texec(){\\r\\n\\t\\t\\tconsole.log(super.exec());    \\r\\n\\t\\t}\\r\\n\\t}\\r\\n\\tvar stu1 = new Sutdent('张三');     //     父\\r\\n    </article>\\r\\n</template>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/article/%E5%91%A8%E8%AE%B01.html?");

/***/ }),

/***/ "./src/home/home.less":
/*!****************************!*\
  !*** ./src/home/home.less ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_home_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./home.less */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/home/home.less\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_home_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_home_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_home_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_node_modules_less_loader_dist_cjs_js_home_less__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-multpart-framework/./src/home/home.less?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-multpart-framework/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

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
/******/ 			id: moduleId,
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
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/home/home.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/home/home.less");
/******/ 	
/******/ })()
;