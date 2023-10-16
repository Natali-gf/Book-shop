/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n\t<meta charset=\"UTF-8\">\r\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n\t<title>Document</title>\r\n</head>\r\n<body>\r\n\t<noscript>You need to enable JavaScript to run this app.</noscript>\r\n    <div id=\"root\" class=\"wrapper\"></div>\r\n\t<!-- <" + "script src=\"./index.js\" type=\"module\"><" + "/script> -->\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/modules/header/style.module.scss":
/*!**********************************************!*\
  !*** ./src/modules/header/style.module.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"_1eubkoLolVD68ZqvbRa4","header__logo":"gGq8Vn3mEvnZpX2x4Bs1","header__tools_profile":"u9jhYye5L8O9em15SRLu","nav__list":"oA3vuQiDbXZ_1eIcfK8U"});

/***/ }),

/***/ "./src/modules/main/style.module.scss":
/*!********************************************!*\
  !*** ./src/modules/main/style.module.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// extracted by mini-css-extract-plugin
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"header":"SOe3vnirH65XUiCM5zZw","header__logo":"HXGHylEjngWnPLuwewr2","header__tools_profile":"XXvWeIYwV9W7qA4HdbC2","nav__list":"DbFOf0iANg9BBxj2t4GV"});

/***/ }),

/***/ "./src/app/app.ts":
/*!************************!*\
  !*** ./src/app/app.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _modules_header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/header/Header */ "./src/modules/header/Header.ts");
/* harmony import */ var _modules_main_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modules/main/Main */ "./src/modules/main/Main.ts");


class App {
    constructor() {
        this._root = document.getElementById('root');
        this.header = new _modules_header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]();
        this.main = new _modules_main_Main__WEBPACK_IMPORTED_MODULE_1__["default"]();
    }
    rendering() {
        this._root.append(this.header.parentBlock);
        this._root.append(this.main.parentBlock);
        this.header.rendering();
        this.main.rendering();
    }
    // public checkLocalStorage(comments: Comment[]): Comment[] {
    // 	if(!localStorage.getItem('allTheComments')){
    // 		let favoriteComments: Comment[] = [];
    // 		comments.forEach((comment: Comment) => {
    // 			if(comment.isFavorite) {
    // 				favoriteComments.push(comment)
    // 			}
    // 		})
    // 		localStorage.setItem('allTheComments', JSON.stringify(comments));
    // 		localStorage.setItem('favoriteComments', JSON.stringify(favoriteComments));
    // 	}
    // 	return JSON.parse(localStorage.getItem('allTheComments'));
    // }
    get body() {
        return this._root;
    }
}


/***/ }),

/***/ "./src/data/Config.ts":
/*!****************************!*\
  !*** ./src/data/Config.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Config)
/* harmony export */ });
// import { FavoriteComment } from "../enum/favorite";
// import { RatingType } from "../enum/rating";
class Config {
    constructor() {
        this.nameShop = 'Bookshop';
        this.noInfoMessage = 'No information';
    }
}


/***/ }),

/***/ "./src/modules/header/Header.ts":
/*!**************************************!*\
  !*** ./src/modules/header/Header.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _data_Config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/Config */ "./src/data/Config.ts");
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.module.scss */ "./src/modules/header/style.module.scss");


const navigationLinks = [
    { name: 'books', link: '#' },
    { name: 'audiobooks', link: '#' },
    { name: 'Stationery & gifts', link: '#' },
    { name: 'blog', link: '#' }
];
class Header {
    constructor() {
        this._parentBlock = document.createElement('header');
        this.blockClassName = _style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header;
        this.config = new _data_Config__WEBPACK_IMPORTED_MODULE_0__["default"]();
    }
    rendering() {
        this._parentBlock.className = this.blockClassName;
        this._parentBlock.innerHTML = `
			<div class=${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header__logo}>${this.config.nameShop}</div>
			<div class='${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header__nav} ${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].nav}'>
				<ul class=${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].nav__list}>
					${navigationLinks.map((item) => (`<li><a href=${item.link}>${item.name}</a></li>`)).join('')}
				</ul>
			</div>
			<div class=${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header__tools}>
				<div class=${_style_module_scss__WEBPACK_IMPORTED_MODULE_1__["default"].header__tools_profile}></div>
			</div>`;
    }
    get parentBlock() {
        return this._parentBlock;
    }
}


/***/ }),

/***/ "./src/modules/main/Main.ts":
/*!**********************************!*\
  !*** ./src/modules/main/Main.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Main)
/* harmony export */ });
/* harmony import */ var _style_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.module.scss */ "./src/modules/main/style.module.scss");

class Main {
    constructor() {
        this._parentBlock = document.createElement('main');
        this.blockClassName = _style_module_scss__WEBPACK_IMPORTED_MODULE_0__["default"].wrapper__main;
    }
    rendering() {
        this._parentBlock.className = this.blockClassName;
    }
    get parentBlock() {
        return this._parentBlock;
    }
}


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _index_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.scss */ "./src/index.scss");
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app */ "./src/app/app.ts");



const app = new _app_app__WEBPACK_IMPORTED_MODULE_2__["default"]();
app.rendering();
// AIzaSyDVdXgclikW_8JdrDn7EvRN2W8IzSBKAR0

})();

/******/ })()
;
//# sourceMappingURL=main.js.map