(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("MathJax"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["MathJax", "react"], factory);
	else if(typeof exports === 'object')
		exports["ReactEquationEditor"] = factory(require("MathJax"), require("react"));
	else
		root["ReactEquationEditor"] = factory(root["MathJax"], root["react"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 190);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(5);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(189)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./react-equation-editor.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./react-equation-editor.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./2的3次方跟.png": 6,
	"./3x+y.png": 7,
	"./3x+yalignright.png": 8,
	"./Alef.png": 9,
	"./A上B下.png": 10,
	"./Bet.png": 11,
	"./DeltaPlus.png": 12,
	"./EpsilonPlus.png": 13,
	"./GammaPlus.png": 14,
	"./LambdaPlus.png": 15,
	"./Omega .png": 16,
	"./PhiPlus.png": 17,
	"./PiPlus.png": 18,
	"./PsiPlus.png": 19,
	"./SigmaPlus.png": 20,
	"./ThetaPlus.png": 21,
	"./UpsilonPlus.png": 22,
	"./XiPlus.png": 23,
	"./a2.png": 24,
	"./alpha.png": 25,
	"./a分之b.png": 26,
	"./a的平方.png": 27,
	"./bac.png": 28,
	"./beta.png": 29,
	"./bigcap.png": 30,
	"./bigcapab.png": 31,
	"./bigcup.png": 32,
	"./braceabc.png": 33,
	"./chi.png": 34,
	"./coprod.png": 35,
	"./delta.png": 36,
	"./double-line.png": 37,
	"./down-abc.png": 38,
	"./epsilon.png": 39,
	"./eta.png": 40,
	"./gamma.png": 41,
	"./huakuohao-abc.png": 42,
	"./int.png": 43,
	"./intab.png": 44,
	"./iota.png": 45,
	"./kappa.png": 46,
	"./lambda.png": 47,
	"./langle-abc.png": 48,
	"./left-brace-abc.png": 49,
	"./left-right-abc.png": 50,
	"./mathbbA.png": 51,
	"./mathbbB.png": 52,
	"./mathbbC.png": 53,
	"./mathbbD.png": 54,
	"./mathbbE.png": 55,
	"./mathbbF.png": 56,
	"./mathbbG.png": 57,
	"./mathbbH.png": 58,
	"./mathbfA.png": 59,
	"./mathbfB.png": 60,
	"./mathbfC.png": 61,
	"./mathbfD.png": 62,
	"./mathbfE.png": 63,
	"./mathbfF.png": 64,
	"./mathbfG.png": 65,
	"./mathbfH.png": 66,
	"./mathcalA.png": 67,
	"./mathcalB.png": 68,
	"./mathcalC.png": 69,
	"./mathcalD.png": 70,
	"./mathcalE.png": 71,
	"./mathcalF.png": 72,
	"./mathcalG.png": 73,
	"./mathcalH.png": 74,
	"./mathfrakA.png": 75,
	"./mathfrakB.png": 76,
	"./mathfrakC.png": 77,
	"./mathfrakD.png": 78,
	"./mathfrakE.png": 79,
	"./mathfrakF.png": 80,
	"./mathfrakG.png": 81,
	"./mathfrakH.png": 82,
	"./mathsfA.png": 83,
	"./mathsfB.png": 84,
	"./mathsfC.png": 85,
	"./mathsfD.png": 86,
	"./mathsfE.png": 87,
	"./mathsfF.png": 88,
	"./mathsfG.png": 89,
	"./mathsfH.png": 90,
	"./mu.png": 91,
	"./n 次方跟.png": 92,
	"./nu.png": 93,
	"./oint.png": 94,
	"./omega.png": 95,
	"./phi.png": 96,
	"./pi.png": 97,
	"./prod.png": 98,
	"./psi.png": 99,
	"./rho.png": 100,
	"./right-brace-abc.png": 101,
	"./sigma.png": 102,
	"./single-line-abc.png": 103,
	"./sum.png": 104,
	"./sumab.png": 105,
	"./tau.png": 106,
	"./theta.png": 107,
	"./up-abc.png": 108,
	"./upsilon.png": 109,
	"./varepsilon.png": 110,
	"./varphi.png": 111,
	"./varpi.png": 112,
	"./varrho.png": 113,
	"./varsigma.png": 114,
	"./vartheta.png": 115,
	"./x+1^2.png": 116,
	"./x2的平方.png": 117,
	"./xa的b次方.png": 118,
	"./xb分之a.png": 119,
	"./xi.png": 120,
	"./zeta.png": 121,
	"./上箭头.png": 122,
	"./下箭头.png": 123,
	"./不存在.png": 124,
	"./不等于.png": 125,
	"./两个括号a=1b=2.png": 126,
	"./两个积分.png": 127,
	"./两行a1b2.png": 128,
	"./中线水平省略号.png": 129,
	"./乘号.png": 130,
	"./交集.png": 131,
	"./偏微分.png": 132,
	"./减加号.png": 133,
	"./减号.png": 134,
	"./加减.png": 135,
	"./加号.png": 136,
	"./加重号运算符.png": 137,
	"./包含.png": 138,
	"./包含于.png": 139,
	"./华氏度.png": 140,
	"./双竖线a=1b=2.png": 141,
	"./右下对角线省略号.png": 142,
	"./右括号a=1b=2.png": 143,
	"./右竖线a=1b=2.png": 144,
	"./右箭头.png": 145,
	"./因为.png": 146,
	"./圆括号a=1b=2.png": 147,
	"./垂直省略号.png": 148,
	"./大于号.png": 149,
	"./大于等于.png": 150,
	"./大于等于号.png": 151,
	"./存在.png": 152,
	"./小于号.png": 153,
	"./小于等于.png": 154,
	"./小圆括号a=1b=2.png": 155,
	"./小等于号.png": 156,
	"./左右箭头.png": 157,
	"./左括号a=1b=2.png": 158,
	"./左括号ifx.png": 159,
	"./左箭头.png": 160,
	"./并集.png": 161,
	"./度.png": 162,
	"./微分.png": 163,
	"./微分算符.png": 164,
	"./成比例.png": 165,
	"./所以.png": 166,
	"./无穷大.png": 167,
	"./星号.png": 168,
	"./极限.png": 169,
	"./校对结束.png": 170,
	"./根号.png": 171,
	"./根号x.png": 172,
	"./渐进于.png": 173,
	"./百分比.png": 174,
	"./矩阵a1b2.png": 175,
	"./空集.png": 176,
	"./竖线a=1b=2.png": 177,
	"./等于号.png": 178,
	"./等价于.png": 179,
	"./约等于.png": 180,
	"./补集.png": 181,
	"./远大于.png": 182,
	"./远小于.png": 183,
	"./递增.png": 184,
	"./针对所有.png": 185,
	"./阶乘.png": 186,
	"./除号.png": 187,
	"./非.png": 188
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 1;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function () {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for (var i = 0; i < this.length; i++) {
			var item = this[i];
			if (item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)();
// imports


// module
exports.push([module.i, ".ree {\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.ree h1 {\r\n    margin: 50px;\r\n    text-align: center;\r\n}\r\n\r\n.ree .latex-wrapper {\r\n    margin: 20px 0;\r\n    max-height: 200px;\r\n    overflow: auto;\r\n}\r\n\r\n.ree .latex-wrapper:after {\r\n    display: block;\r\n    content: '';\r\n    visibility: hidden;\r\n    height: 0;\r\n    clear: both;\r\n}\r\n\r\n.ree .single-wrapper img{\r\n    display: block;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n    -moz-transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    -o-transform: translate(-50%, -50%);\r\n    transform: translate(-50%, -50%);\r\n    vertical-align: middle;\r\n}\r\n\r\n.ree .latex-wrapper .single-wrapper {\r\n    position: relative;\r\n    width: 25px;\r\n    height: 25px;\r\n    display: block;\r\n    float: left;\r\n    margin: 0 10px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n.ree .to115 {\r\n    width: 110px !important;\r\n    height: 75px !important;\r\n}\r\n\r\n.ree .latex-wrapper .single-wrapper:hover {\r\n    background: #AAD6FF;\r\n}\r\n\r\n.ree .to200{\r\n    border: solid 1px #eeeeee;\r\n    padding: 2px;\r\n    margin-bottom: 22px !important;\r\n    width: 302px !important;\r\n    height: 141px !important;\r\n}\r\n\r\n.ree .to200:hover {\r\n    background-color: transparent !important;\r\n}\r\n\r\n.ree-type {\r\n    display: block;\r\n    width: 150px;\r\n    height: 34px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\r\n    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s\r\n}\r\n\r\n.ree-input {\r\n    -webkit-box-sizing: border-box;\r\n    -moz-box-sizing: border-box;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    width: 100%;\r\n    height: 150px;\r\n    padding: 6px 12px;\r\n    font-size: 14px;\r\n    line-height: 1.42857143;\r\n    color: #555;\r\n    background-color: #fff;\r\n    background-image: none;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);\r\n    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;\r\n    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;\r\n}\r\n\r\n.ree-input:focus,\r\n.ree-type:focus {\r\n    border-color: #66afe9;\r\n    outline: 0;\r\n    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);\r\n    box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102,175,233,.6);\r\n}\r\n\r\n.ree-output {\r\n    width: 100%;\r\n    overflow: auto;\r\n}\r\n\r\n#MathJax_Message {\r\n    display: none !important;\r\n}\r\n\r\n.mjx-chtml {\r\n    text-align: left !important;\r\n}", ""]);

// exports


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa7779e66c9bc5a55d7f0a670edc0094.png";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3f28779b73662028abb30619095367cc.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c3585f0cfabc65cbc1da3f3cf44fcb9.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fdc6a3222fbcfef5966276409811e028.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "630c03d932a0e27786f5be5902732a57.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "950bd8f407b790a72667d7a6c64587ea.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a1d51443220fcf4b7ae38ab0b3ffdc8.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ca4c6381ccad734b5e8708999ab22c1.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fc641a78122cd6be231402c3e02baf6e.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "79d0cde5468714f72924c7f03a845aa7.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8592c90108ff83ff6fc6974fae4080a2.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2ec1df3d58587d5637d886a047c0ff6.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "162b9a6d65b1f8c3837cfcbe80201c94.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "025d4ec1086a938f9fd832597b1ad6da.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "443ef1384d987029beda29d32b273fe8.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11e2be0e8dfeee102e1e2bab9a291e41.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "66b27b8c541b2218ec9b69e1505d4474.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "df97ce77880119f7cf144460589bf2ff.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a80b881ee4d0ae3dfc9d9431a7f1b5ea.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4d3d0d15a5aacfba9d1b4189bafb58f9.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64f63e1bced2ff2b7c056f03064d1708.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "92351ecbb886d5fb75ffc3eac5fd2828.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d503031e6312d37f9a5b654f2f33cfa2.png";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a3c915f9aa5f4113916e925fda3392bf.png";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f6a9381a286cd4e936d94b3b6af47d88.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6959272831887d180285eee90534d1dc.png";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dbff2ed4367c8e6d8c0683d98655fd95.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e9e751b141ee92ea8bd9d3ea72783b1a.png";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "533c2425ee5b822e60b7c0cd366d7665.png";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d13d899fdd9a206b2202b4217492ab9f.png";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a914b534dbe8735c6aa411063069cc5f.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cbcea06dccbbfb8bf6bdbf5409ab64e2.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f551f6d8ba95291c9286a53a0850811.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6046ffb9e776d81d9118c60f75cf7080.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2c90d3a5bd431bd100b287ba4a5e9157.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96d9a422635c80bd15b1ba82e3023697.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d9c23160427ee0ed8643a66689c34513.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5e7a91f1dea8153db0fa7096b996448c.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4a94f026075e91868facb0fc81dc5dd8.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "44f224b1996149bda6851313cf1e9f13.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3d2d019cc5b1e3c4569cb70c2146a502.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8e94df1c7cf483daf9c8fb822f5b9e3f.png";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ab932e01211fd2ed5f4657639da9f20f.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "39f7af005a9668ca640614fbcc10460f.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "264e5f57b1954ea3c31ffa6cb36271fb.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8f510a27225a8b109747dc350c16d41.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dad3f04e97a2ed5cc06ca3d2657ab6dc.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6aa6095f7615171c859f2d62c5be336d.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8d501a54bd1cd58d7c80d24ea372e3ff.png";

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9291e2f18d4ff866bc4bc5a6f3f8ccf6.png";

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "690a9da33a78b6377bfed110a26700df.png";

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7f277ca54ecbf2f2b227fbe2ec626c6e.png";

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c7deaeeac22a23a1dbb0df3a98bd315.png";

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "149dc7e472c2d51e9f2b16b95ebbb2d8.png";

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9e85e85774cb010aff2a91d567ccd46f.png";

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fbc520d0bd3b9f7872efaa802264bad1.png";

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ab8cf7c3d03ff1dc3a32d8e8d406400.png";

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "229af6acee1193b8367a4b8a7eaeb70e.png";

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bc3b60c080602faf64cb25d0538338b5.png";

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b25b70e7acec224c5e6a600708a71649.png";

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "49255dbdeeaabf62e014a89c141b4dd8.png";

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64b21f66e904b32fccbd8305a7a0ebe9.png";

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "729df03300ce13c27ca4c3105cf5d08b.png";

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f64e04cbe6a7f9773d77fee40920371e.png";

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c6a5ed6aad6f6fa21db4a028e9aeaaa5.png";

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af3c6be0823373654845b2de56bdb1f8.png";

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "945807e1dea63515fb027b13d1e2d21d.png";

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "69db67668834faf45500c18b8d1e281c.png";

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3e94e1b4d1fea82aaa1a36b075575e14.png";

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d61ff19a5a6a9495ad46d0470b2736b6.png";

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "591811d7be6c7bafa7b678886013e5d9.png";

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4b370a32f7dec3435ec6948b678f47cc.png";

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "918ced0b53c58adea2c524fe49f1d429.png";

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4fcd309d5e255dccba51257ef3c96a26.png";

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a9d387170b17a995f4ee2b5b1d99a5c0.png";

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a761b43c6fa15a6cd8dd17df2a9708b6.png";

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "937d3e52e8decfca059538659caaa1cc.png";

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1223175ead28392d56723395e7aa4917.png";

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "daf83a8f98919561a0c2d0e595c9f3b2.png";

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7845978fdbc71ef712fcdb616a552b7f.png";

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "61db0c515c389a9bad2218f347983198.png";

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "325914dacba59135e3cf610466ccf4f2.png";

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "855aa53d67c971dfda0eb8d796eb0ac3.png";

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "713347109854652113b95859b8a23097.png";

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a06142b085936a9113a0e35ad0f5d809.png";

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5dba0fef38bbe5b9ab0749d3ce2c8dd6.png";

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "29a2fa4742f7f7faf313a246b083a8b3.png";

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5c208b568bb891efb060e84aa987f6ed.png";

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "282f18772117cc1bf4751025885bb042.png";

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c96064ef514a14b7a4a4705adc544334.png";

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1ac53244a6c99c49e0981af4fd2c3499.png";

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "334851f9734b726cb378db50a577854d.png";

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "96c6f970a35afabc3a74301b4a85d257.png";

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1049ff0dabfe81edfe2b457a31283cfc.png";

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a4d65d4fd88b9f85accbcf010bf501f4.png";

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0aac58ab69471acb5df1eef352928d40.png";

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "20270f50b9b49207ca833da99aa5990b.png";

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2dc76af7c74db17c77371e5ee00492f.png";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d52196ab3eb050d187e5fed98767b3dc.png";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "46fb574de1b7033db43db58f73ae4591.png";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "223d007ff2365dc950f4c3c97f8eda3d.png";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e723d8411206485fcd8c5bfd4ffdf99c.png";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2da871edafa4ae8b73b2fd5a22d204d2.png";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "12348c2939df5290dd7371f057de7db1.png";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6ca4c6381ccad734b5e8708999ab22c1.png";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8c6bd1d5b3a24c4ed7d4d1b8c326dbd7.png";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2221b7c0476d1d1b613d3f88f2638a94.png";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cf6c01ae2ba4fae08680178c2754f6db.png";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70ebd5c4e4c92b324bfb1acc18505087.png";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "03d3ed1d2269ef2ccafdb1ec79d135fb.png";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "24e44b4c8b6208049d5f220788fb42a5.png";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c7d77f85120fd28470ab1ef8100464b2.png";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "28112ed26ae622961fc9c1fe843139af.png";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e27ee63e0e43ccca3858311d132e9b59.png";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0f744e7e8393132d0f6001e1ce7b2a82.png";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c40ad90282a8ef4b5be67dffbc1c5b7f.png";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a8d6d9f37ba8fcf9791237d0c612f806.png";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f87babcdd8b0962f1ce72c01b0c24ba.png";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be345fed7a100992b3b7c69623047caf.png";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2187b79d4697e6e843179eb52e95b1bb.png";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "64b3d6894a96eadd4bec53afd05f741b.png";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "91ad6a3b3dd1471c02c0dc75b26c2a49.png";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "e464890b77350de18720c576e27db226.png";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4aab20a790faf707ec331603f4dbd40b.png";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fcae0117c6e6c0d6e1cf22dc7aa54e3d.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "be884f9e547f4adb68dbaaf200dec0e7.png";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f758964acbd348f879e4cba2f1458edf.png";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fd977b3f5e3350e21169d925382ba640.png";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7b36b6935b0266eb47f80192c463138a.png";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "85fc665eb096ef8b8d2bd09e5720a88a.png";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f38d9d730dc378992858639887527b51.png";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9634396ebdd1823afe69d0028cf21154.png";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7416ab731748e1c515eae2894fa03b7b.png";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7d9d2edb085b3e26d7e6eea7253c0f41.png";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5370287923ecb0b8f5748fff772d9fae.png";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ed54e0271481e3135134db5d7377c8e3.png";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b8877bb3f13c9ef13281f047c59fa95c.png";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "057306c50daff98ba7dbddddb95b247c.png";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6fa780c537d93dbe9c5dd6c3e2f41cc.png";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "cd5f4d54b9d075d631e9b1acf88345fd.png";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f32cd62053cd0dfb287696d16018b37.png";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "906546c12f8e5b5acd4aeaaeca79fbb8.png";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "09a5225920a4bdb47f1128c38a5c55ca.png";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "70ed2a8f64b6896114cb81bb59f1286f.png";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f18d61202f0d338cd3b0b750b2a77df2.png";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d09ddd4028620eaeab4e387163936e04.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2e5f6f6c496f37405d7ef79113fdec4d.png";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c5c6addeb5fb6de7b12e8f81dee23c92.png";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "090d15f22a78a26f01eaea2a60a0e7b7.png";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3220d55a51d813f3c1f4b32416c4d688.png";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ddd6fdb62799a71dccea13e9c44796ae.png";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d504fda29b3eb98c4a80f7bbe4407839.png";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d6c2db6f95bfc2b3bbdd0c0046c7a57d.png";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2c8a913ee9d8f51d40aec01955ae535.png";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3a3651c2826bec8e71580a0ad764a7b6.png";

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d291b9e3935457afc85be3a4f2ca4fca.png";

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5d46c851e525eb5cb28d4347568ba24b.png";

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa5128edfd4a85b43fc7c5d2a78afed5.png";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "833bb90df71b8e6ae2c67c50e531dc4b.png";

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a294fd5706f7933c4e3d4944488e5aba.png";

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "af0d8c7a9675e8b59005e9b7f7202c96.png";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b1ceb2d812b27741b411a856332769e3.png";

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b2f626efb31e7d08c49f7f058ba287a3.png";

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0dd3b0418774f1ebd4d2255d35da571e.png";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6f1eb17fc499e7fa74088643d9b79029.png";

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "073bef672ef3f5017a682d2288f5ece4.png";

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b16f689450cddca11e6ecf2bea70d6f9.png";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7a0c974e1836899eb18cde9689ed2283.png";

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "378e33561c65fb1402f6891443f7cbc2.png";

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bc0255f1e6380169be3ed050cf0ebf76.png";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d75b940cf868bd8807873e1091429288.png";

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc514185f9d6b392d00ac82fa79a8130.png";

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d652587bc62d98a96b10f2f8903e1329.png";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dc288c8d9bf3993a2c620d4835b45e5b.png";

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f2cce2fed296243565a9c7cf6d0236c7.png";

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8361ef6de966562e4eb257894bcb0094.png";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "7c48b714b97794ffd95facfdf80f39ac.png";

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "97e3215b3cf84919bdeca977c39320d4.png";

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "0a1d51443220fcf4b7ae38ab0b3ffdc8.png";

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c580cc1f31539ae92ab1258c2987bb4c.png";

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "eab6a4667054553c9acd60655d0c45e8.png";

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "9c9557854e71725199cb844e2c51a3e2.png";

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "63bb07de643b2117ddb6e20058379079.png";

/***/ }),
/* 189 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(0);

var _MathJax = __webpack_require__(2);

var _MathJax2 = _interopRequireDefault(_MathJax);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactEquationEditor = function (_Component) {
    _inherits(ReactEquationEditor, _Component);

    function ReactEquationEditor() {
        var _ref,
            _arguments = arguments;

        var _temp, _this, _ret;

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        _classCallCheck(this, ReactEquationEditor);

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactEquationEditor.__proto__ || Object.getPrototypeOf(ReactEquationEditor)).call.apply(_ref, [this].concat(args))), _this), _this.mathObj = {
            "加减": "\\pm",
            "无穷大": "\\infty",
            "等于号": "=",
            "不等于": "\\neq",
            "渐进于": "\\approx",
            "乘号": "\\times",
            "除号": "\\div",
            "阶乘": "!",
            "成比例": "\\propto",
            "小于号": "<",
            "远小于": "<<",
            "大于号": ">",
            "远大于": ">>",
            "小等于号": "\\leqslant",
            "大于等于号": "\\geqslant",
            "小于等于": "\\leq",
            "大于等于": "\\geq",
            "减加号": "\\mp",
            "约等于": "\\cong",
            "等价于": "\\equiv",
            "针对所有": "\\forall",
            "补集": "C",
            "偏微分": "\\partial",
            "根号": "\\sqrt{n}",
            "n 次方跟": "\\sqrt[n]{x}",
            "并集": "\\cup",
            "交集": "\\cap",
            "空集": "\\emptyset",
            "百分比": "\\%",
            "度": "^\\circ",
            "华氏度": "^\\circ F",
            "递增": "\\Delta",
            "微分算符": "\\nabla",
            "存在": "\\exists",
            "不存在": "\\nexists",
            "包含于": "\\in",
            "包含": "\\ni",
            "左箭头": "\\leftarrow",
            "上箭头": '\\uparrow',
            "右箭头": "\\rightarrow",
            "下箭头": "\\downarrow",
            "左右箭头": "\\leftrightarrow",
            "因为": "\\because",
            "所以": "\\therefore",
            "加号": "+",
            "减号": "-",
            "非": "\\neg",
            "Alpha": "\\alpha",
            "Beta": "\\beta",
            "GammaPlus": "\\Gamma",
            "DeltaPlus": "\\delta",
            "EpsilonPlus": "\\varepsilon",
            "Epsilon": "\\epsilon",
            "ThetaPlus": "\\Theta",
            "vartheta": "\\vartheta",
            "Mu": "\\mu",
            "PiPlus": "\\Pi",
            "Rho": "\\rho",
            "SigmaPlus": "\\Sigma",
            "Tau": "\\tau",
            "varphi": "\\varphi",
            "Omega": "\\omega",
            "星号": "\\ast",
            "加重号运算符": "\\bullet",
            "垂直省略号": "\\vdots",
            "中线水平省略号": "\\cdots",
            "右下对角线省略号": "\\ddots",
            "Alef": "\\aleph",
            "Bet": "\\beth",
            "校对结束": "\\blacksquare"
        }, _this.greekAlphabet = {
            "alpha": "\\alpha",
            "beta": "\\beta",
            "gamma": "\\gamma",
            "delta": "\\delta",
            "epsilon": "\\epsilon",
            "varepsilon": "\\varepsilon",
            "zeta": "\\zeta",
            "eta": "\\eta",
            "theta": "\\theta",
            "vartheta": "\\vartheta",
            "iota": "\\iota",
            "kappa": "\\kappa",
            "lambda": "\\lambda",
            "mu": "\\mu",
            "nu": "\\nu",
            "xi": "\\xi",
            "pi": "\\pi",
            "varpi": "\\varpi",
            "rho": "\\rho",
            "varrho": "\\varrho",
            "sigma": "\\sigma",
            "varsigma": "\\varsigma",
            "tau": "\\tau",
            "upsilon": '\\upsilon',
            "phi": "\\phi",
            "varphi": "\\varphi",
            "chi": "\\chi",
            "psi": "\\psi",
            "omega": "\\omega",
            "GammaPlus": "\\Gamma",
            "DeltaPlus": "\\Delta",
            "ThetaPlus": "\\Theta",
            "LambdaPlus": "\\Lambda",
            "XiPlus": "\\Xi",
            "PiPlus": "\\Pi",
            "SigmaPlus": "\\Sigma",
            "UpsilonPlus": '\\Upsilon',
            "PhiPlus": "\\Phi",
            "PsiPlus": "\\Psi",
            "Omega ": "\\Omega "
        }, _this.handwritting = {
            "mathbbA": "\\mathbb{A}",
            "mathbbB": "\\mathbb{B}",
            "mathbbC": "\\mathbb{C}",
            "mathbbD": "\\mathbb{D}",
            "mathbbE": "\\mathbb{E}",
            "mathbbF": "\\mathbb{F}",
            "mathbbG": "\\mathbb{G}",
            "mathbbH": "\\mathbb{H}",
            "mathbfA": "\\mathbf{A}",
            "mathbfB": "\\mathbf{B}",
            "mathbfC": "\\mathbf{C}",
            "mathbfD": "\\mathbf{D}",
            "mathbfE": "\\mathbf{E}",
            "mathbfF": "\\mathbf{F}",
            "mathbfG": "\\mathbf{G}",
            "mathbfH": "\\mathbf{H}",
            "mathcalA": "\\mathcal{A}",
            "mathcalB": "\\mathcal{B}",
            "mathcalC": "\\mathcal{C}",
            "mathcalD": "\\mathcal{D}",
            "mathcalE": "\\mathcal{E}",
            "mathcalF": "\\mathcal{F}",
            "mathcalG": "\\mathcal{G}",
            "mathcalH": "\\mathcal{H}",
            "mathfrakA": "\\mathfrak{A}",
            "mathfrakB": "\\mathfrak{B}",
            "mathfrakC": "\\mathfrak{C}",
            "mathfrakD": "\\mathfrak{D}",
            "mathfrakE": "\\mathfrak{E}",
            "mathfrakF": "\\mathfrak{F}",
            "mathfrakG": "\\mathfrak{G}",
            "mathfrakH": "\\mathfrak{H}",
            "mathsfA": "\\mathsf{A}",
            "mathsfB": "\\mathsf{B}",
            "mathsfC": "\\mathsf{C}",
            "mathsfD": "\\mathsf{D}",
            "mathsfE": "\\mathsf{E}",
            "mathsfF": "\\mathsf{F}",
            "mathsfG": "\\mathsf{G}",
            "mathsfH": "\\mathsf{H}"
        }, _this.mathConstructor = {
            "right-brace-abc": "\\left. abc \\right \\}",
            "left-brace-abc": "\\left \\{ abc \\right.",
            "left-right-abc": "\\left (  \\right )",
            "double-line": "\\left \\| abc \\right \\|",
            "braceabc": "\\left [ abc \\right ]",
            "langle-abc": "\\left \\langle abc \\right \\rangle",
            "huakuohao-abc": "\\left \\{ abc \\right \\}",
            "up-abc": "\\left \\lfloor  \\right \\rfloor",
            "single-line-abc": "\\left | abc \\right |",
            "down-abc": "\\left \\lceil abc \\right \\rceil",
            "a的平方": "a^2",
            "a分之b": "\\frac{a}{b}",
            "int": "\\int",
            "bigcap": "\\bigcap",
            "sum": "\\sum",
            "prod": "\\prod",
            "a2": "a_{2}",
            "xb分之a": "x\\tfrac{a}{b}",
            "intab": "\\int_{a}^{b}",
            "bigcapab": "\\bigcap_{a}^{b}",
            "sumab": "\\sum_{a}^{b}",
            "xa的b次方": "x_{a}^{b}",
            "oint": "\\oint",
            "bigcup": "\\bigcup",
            "根号x": "\\sqrt{x}",
            "2的3次方跟": "\\sqrt[3]{2}",
            "coprod": "\\coprod",
            "x2的平方": "{x_{2}}^{2}",
            "bac": "_{b}^{a}\\textrm{C}",
            "微分": "\\frac{\\mathrm{d} }{\\mathrm{d} x}",
            "两个积分": "\\iint_{a}^{b}",
            "极限": "\\lim_{x \\to 0 }",
            "两行a1b2": '\\begin{matrix}\na &=1 \\\\ \nb &=2 \n\\end{matrix}',
            "矩阵a1b2": '\\begin{bmatrix}\na &=1 \\\\\nb &=2 \n\\end{bmatrix}',
            "a上b下": '\\binom{A}{B}',
            "圆括号a=1b=2": '\\begin{pmatrix}\na &=1 \\\\ \nb &=2 \n\\end{pmatrix}',
            "小圆括号a=1b=2": '\\bigl(\\begin{smallmatrix}\na &=1 \\\\\nb &=2 \n\\end{smallmatrix}\\bigr)',
            "左括号ifx": '\\begin{cases}\n..., & \\text{ if } x= \\\\\n..., & \\text{ if } x= \n\\end{cases}',
            "竖线a=1b=2": '\\begin{vmatrix}\na &=1 \\\\\nb &=2 \n\\end{vmatrix}',
            "两个括号a=1b=2": '\\begin{Bmatrix}\na &=1 \\\\\nb &=2\n\\end{Bmatrix}',
            "双竖线a=1b=2": '\\begin{Vmatrix}\na &=1 \\\\\nb &=2\n\\end{Vmatrix}',
            "左括号a=1b=2": '\\left\\{\\begin{matrix}\na &=1 \\\\\nb &=2\n\\end{matrix}\\right.',
            "右竖线a=1b=2": '\\left.\\begin{matrix}\na &=1 \\\\\nb &=2\n\\end{matrix}\\right|',
            "右括号a=1b=2": '\\left.\\begin{matrix}\na &=1 \\\\\nb &=2\n\\end{matrix}\\right\\}'
        }, _this.align = {
            "x+1^2": '\\begin{align}\n(x+1)^2\n&{= (x+1)(x+1)}\\\\\n&{= x(x+1) + 1(x+1)}\\\\\n&{= (x^2+x) + (x+1)}\\\\\n&{= x^2 + (x + x) + 1}\\\\\n&{= x^2+2x+1}\\\\\n\\end{align}',
            "3x+y": '\\begin{align}\n\\frac{3x + y}{7} &= 9   & \\text{given}   \\\\\n3x + y &= 63            & \\text{multiply by 7}   \\\\\n3x &= 63 - y            & \\text{subtract y}   \\\\\nx &= 21 - \\frac{y}{3}   & \\text{divide by 3}   \\\\\n\\end{align}',
            "3x+yalignright": '\\begin{align}\n\\frac{3x + y}{7} &= 9                && \\text{given} \\\\\n3x + y           &= 63               && \\text{multiply by 7} \\\\\n3x               &= 63 - y           && \\text{subtract y} \\\\\nx                &= 21 - \\frac{y}{3} && \\text{divide by 3} \\\\\n\\end{align}'
        }, _this.handleLatexClick = function (event) {
            // 事件代理，提高性能
            var target = event.target,
                className = target.getAttribute("class");
            if (className.indexOf("single-wrapper") !== -1 || className === "latex-image") {
                var inputValue = _this.state.inputValue;
                // console.log(this.getCursorPos(this.reeInput));
                if (typeof _this.selectStart !== "undefined" && typeof _this.selectEnd !== "undefined") {
                    var before = inputValue.slice(0, _this.selectStart);
                    var after = inputValue.slice(_this.selectEnd);
                    var latex = target.getAttribute("data-latex");
                    inputValue = before + latex + after;
                    _this.selectStart = _this.selectEnd += latex.length;
                } else {
                    inputValue += target.getAttribute("data-latex");
                }
                _this.setState({
                    inputValue: inputValue
                }, function () {
                    window.UpdateMath(_this.state.inputValue);
                    setTimeout(function () {
                        _this.reeInput.focus();
                        if (typeof _this.selectStart !== "undefined" && typeof _this.selectEnd !== "undefined") {
                            _this.setCursorPos(_this.reeInput, _this.selectStart, _this.selectEnd);
                        } else {
                            var len = _this.reeInput.value.length;
                            _this.setCursorPos(_this.reeInput, len, len);
                        }
                    }, 100);
                });
            }
        }, _this.getCursorPos = function (input) {
            if ("selectionStart" in input && document.activeElement == input) {
                return {
                    start: input.selectionStart,
                    end: input.selectionEnd
                };
            } else if (input.createTextRange) {
                var sel = document.selection.createRange();
                if (sel.parentElement() === input) {
                    var rng = input.createTextRange();
                    rng.moveToBookmark(sel.getBookmark());
                    var len = void 0;
                    for (len = 0; rng.compareEndPoints("EndToStart", rng) > 0; rng.moveEnd("character", -1)) {
                        len++;
                    }
                    rng.setEndPoint("StartToStart", input.createTextRange());
                    var pos = void 0;
                    for (pos = { start: 0, end: len }; rng.compareEndPoints("EndToStart", rng) > 0; rng.moveEnd("character", -1)) {
                        pos.start++;
                        pos.end++;
                    }
                    return pos;
                }
            }
            return -1;
        }, _this.setCursorPos = function (input, start, end) {
            if (_arguments.length < 3) end = start;
            if ("selectionStart" in input) {
                setTimeout(function () {
                    input.selectionStart = start;
                    input.selectionEnd = end;
                }, 1);
            } else if (input.createTextRange) {
                var rng = input.createTextRange();
                rng.moveStart("character", start);
                rng.collapse();
                rng.moveEnd("character", end - start);
                rng.select();
            }
        }, _this.state = {
            inputValue: "",
            latexType: "基础数学"
        }, _this.handleInputChange = function (event) {
            _this.setState({
                inputValue: event.target.value
            }, function () {
                window.UpdateMath(_this.state.inputValue);
            });
        }, _this.handleLatexTypeChange = function (event) {
            _this.setState({
                latexType: event.target.value
            });
        }, _this.handleInputKeyUp = function (event) {
            _this.setPos(event.target);
        }, _this.handleInputClick = function (event) {
            _this.setPos(event.target);
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReactEquationEditor, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.reeInput = document.querySelector("#ree-input");
            try {
                var QUEUE = _MathJax2.default.Hub.queue; // shorthand for the queue
                var math = null,
                    box = null; // the element jax for the math output, and the box it's in

                //
                //  Hide and show the box (so it doesn't flicker as much)
                //
                var HIDEBOX = function HIDEBOX() {
                    box.style.visibility = "hidden";
                };
                var SHOWBOX = function SHOWBOX() {
                    box.style.visibility = "visible";
                };

                //
                //  Get the element jax when MathJax has produced it.
                //
                QUEUE.Push(function () {
                    math = _MathJax2.default.Hub.getAllJax("MathOutput")[0];
                    box = document.getElementById("box");
                    SHOWBOX(); // box is initially hidden so the braces don't show
                });

                //
                //  The onchange event handler that typesets the math entered
                //  by the user.  Hide the box, then typeset, then show it again
                //  so we don't see a flash as the math is cleared and replaced.
                //
                window.UpdateMath = function (TeX) {
                    QUEUE.Push(HIDEBOX, ["resetEquationNumbers", _MathJax2.default.InputJax.TeX], ["Text", math, "\\displaystyle{" + TeX + "}"], SHOWBOX);
                };
                window.UpdateMath("");
            } catch (e) {
                // 故意的，mathjax 初始化的时候报错，貌似不影响使用
            }
        }
    }, {
        key: 'setPos',
        value: function setPos(input) {
            var pos = this.getCursorPos(input);
            this.selectStart = pos.start;
            this.selectEnd = pos.end;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var latexArray = void 0;
            var baseObj = void 0;
            var adjustClass = "";
            switch (this.state.latexType) {
                case "基础数学":
                    {
                        baseObj = this.mathObj;
                        latexArray = Object.keys(this.mathObj);
                        break;
                    }
                case "希腊字母":
                    {
                        baseObj = this.greekAlphabet;
                        latexArray = Object.keys(this.greekAlphabet);
                        break;
                    }
                case "手写体":
                    {
                        baseObj = this.handwritting;
                        latexArray = Object.keys(this.handwritting);
                        break;
                    }
                case "数学结构":
                    {
                        baseObj = this.mathConstructor;
                        latexArray = Object.keys(this.mathConstructor).reverse();
                        adjustClass = "to115";
                        break;
                    }
                case "对齐":
                    {
                        baseObj = this.align;
                        latexArray = Object.keys(this.align);
                        adjustClass = "to200";
                    }
                default:
                    {}
            }

            return _react2.default.createElement(
                'div',
                { className: 'ree' },
                _react2.default.createElement(
                    'div',
                    { className: 'ree-header' },
                    _react2.default.createElement(
                        'select',
                        { value: this.state.latexType, onChange: this.handleLatexTypeChange, className: 'ree-type',
                            name: 'ree-type', id: 'ree-type' },
                        _react2.default.createElement(
                            'option',
                            { value: '\u57FA\u7840\u6570\u5B66' },
                            '\u57FA\u7840\u6570\u5B66'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '\u5E0C\u814A\u5B57\u6BCD' },
                            '\u5E0C\u814A\u5B57\u6BCD'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '\u624B\u5199\u4F53' },
                            '\u624B\u5199\u4F53'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '\u6570\u5B66\u7ED3\u6784' },
                            '\u6570\u5B66\u7ED3\u6784'
                        ),
                        _react2.default.createElement(
                            'option',
                            { value: '\u5BF9\u9F50' },
                            '\u5BF9\u9F50'
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'latex-wrapper', onClick: this.handleLatexClick },
                    latexArray.map(function (item) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'single-wrapper ' + adjustClass, title: '' + baseObj[item],
                                key: '' + item,
                                'data-latex': '' + baseObj[item] },
                            _react2.default.createElement('img', { className: 'latex-image',
                                src: __webpack_require__(1)("./" + item + '.png'),
                                'data-latex': '' + baseObj[item] })
                        );
                    })
                ),
                _react2.default.createElement('textarea', { onKeyUp: this.handleInputKeyUp, onClick: this.handleInputClick, className: 'ree-input',
                    ref: function ref(reeInput) {
                        _this2.reeInput = reeInput;
                    }, value: this.state.inputValue, onChange: this.handleInputChange, name: 'ree-input',
                    id: 'ree-input',
                    cols: '30', rows: '10' }),
                _react2.default.createElement(
                    'div',
                    { className: 'ree-output' },
                    _react2.default.createElement(
                        'div',
                        { className: 'box', id: 'box', style: { visibility: "hidden" } },
                        _react2.default.createElement(
                            'div',
                            { id: 'MathOutput', className: 'output' },
                            '$$',
                            '$$'
                        )
                    )
                )
            );
        }
    }]);

    return ReactEquationEditor;
}(_react.Component);

exports.default = ReactEquationEditor;

/***/ })
/******/ ]);
});