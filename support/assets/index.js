(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("coveo-search-ui"));
	else if(typeof define === 'function' && define.amd)
		define(["coveo-search-ui"], factory);
	else if(typeof exports === 'object')
		exports["CoveoGeneratedAnswer"] = factory(require("coveo-search-ui"));
	else
		root["CoveoGeneratedAnswer"] = factory(root["Coveo"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory(__webpack_require__(0));
	else {}
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.component = void 0;
var coveo_search_ui_1 = __webpack_require__(0);
function component(constructor) {
    coveo_search_ui_1.Initialization.registerAutoCreateComponent(constructor);
    return constructor;
}
exports.component = component;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(4), exports);
__exportStar(__webpack_require__(7), exports);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(1), exports);
__exportStar(__webpack_require__(5), exports);
__exportStar(__webpack_require__(6), exports);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.lazyComponent = exports.lazyDependentComponent = void 0;
var coveo_search_ui_1 = __webpack_require__(0);
var component_1 = __webpack_require__(1);
function lazyDependentComponent(dependentComponentId) {
    return function (constructor) {
        if (!coveo_search_ui_1.LazyInitialization) {
            return component_1.component(constructor);
        }
        coveo_search_ui_1.LazyInitialization.registerLazyComponent(constructor.ID, function () {
            return coveo_search_ui_1.load(dependentComponentId).then(function () { return component_1.component(constructor); });
        });
        return constructor;
    };
}
exports.lazyDependentComponent = lazyDependentComponent;
function lazyComponent(constructor) {
    if (!coveo_search_ui_1.LazyInitialization) {
        return component_1.component(constructor);
    }
    coveo_search_ui_1.LazyInitialization.registerLazyComponent(constructor.ID, component_1.component(constructor));
    return constructor;
}
exports.lazyComponent = lazyComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.requiresFields = void 0;
var coveo_search_ui_1 = __webpack_require__(0);
function requiresFields() {
    var fields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fields[_i] = arguments[_i];
    }
    return function (constructor) {
        coveo_search_ui_1.Initialization.registerComponentFields(constructor.ID, fields);
        return constructor;
    };
}
exports.requiresFields = requiresFields;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(8), exports);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Webpack output a library target with a temporary name.
// It does not take care of merging the namespace if the global variable already exists.
// If another piece of code in the page use the Coveo namespace (eg: extension), then they get overwritten
// This code swap the current module to the "real" Coveo variable, without overwriting the whole global var.
// This is to allow end user to put CoveoPSComponents.js before or after the main CoveoJsSearch.js, without breaking
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swapVar = void 0;
function swapVar(scope) {
    if (!window['Coveo']) {
        window['Coveo'] = scope;
        return;
    }
    window['Coveo'] = __assign(__assign({}, scope), window['Coveo']);
}
exports.swapVar = swapVar;


/***/ })
/******/ ]);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.createAbortController = void 0;
function createAbortController() {
    // For nodejs environments only, we want to load the implementation of AbortController from node-abort-controller package.
    // For browser environments, we need to make sure that we don't use AbortController as it might not be available (Locker Service in Salesforce)
    // This is not something that can be polyfilled in a meaningful manner.
    // This is a low level browser API after all, and only JS code inside a polyfill cannot actually cancel network requests done by the browser.
    // WARNING : R&D did a bunch of patches on node-abort-controller. Make sure you do them if you need to 
    // recompile this project : https://github.com/coveo/ui-kit/blob/e6f04593f9a721baef32581bc199b16e48b3c9b7/patches/%40microsoft%2Bfetch-event-source%2B2.0.1.patch
    if (typeof window === 'undefined') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var nodeAbort = __webpack_require__(7).AbortController;
        return new nodeAbort();
    }
    return typeof AbortController === 'undefined' ? null : new AbortController();
}
exports.createAbortController = createAbortController;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(10);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(__webpack_require__(5), exports);
var turbo_core_1 = __webpack_require__(1);
(0, turbo_core_1.swapVar)(this);


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAnswer = void 0;
var coveo_search_ui_1 = __webpack_require__(0);
var turbo_core_1 = __webpack_require__(1);
var generated_answer_controller_1 = __webpack_require__(6);
var core_1 = __webpack_require__(13);
var local_storage_utils_1 = __webpack_require__(9);
var GeneratedAnswer = /** @class */ (function (_super) {
    __extends(GeneratedAnswer, _super);
    function GeneratedAnswer(element, options, bindings) {
        var _this = _super.call(this, element, GeneratedAnswer_1.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.svgLike = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"><path stroke="#565B66" d="M2 5.5H4C4.27614 5.5 4.5 5.72386 4.5 6V13C4.5 13.2761 4.27614 13.5 4 13.5H2C1.72386 13.5 1.5 13.2761 1.5 13V6C1.5 5.72386 1.72386 5.5 2 5.5Z" class="line"></path><path stroke="#565B66" d="M12 13.5H6.97214C6.66165 13.5 6.35542 13.4277 6.07771 13.2889L4.5 12.5" class="line"></path><path fill="#565B66" d="M9.50003 5C9.22389 5 9.00003 5.22386 9.00003 5.5C9.00003 5.77614 9.22389 6 9.50003 6V5ZM9.50003 6H13.5V5H9.50003V6ZM13.5 7H13V8H13.5V7ZM14 6.5C14 6.77614 13.7762 7 13.5 7V8C14.3285 8 15 7.32843 15 6.5H14ZM13.5 6C13.7762 6 14 6.22386 14 6.5H15C15 5.67157 14.3285 5 13.5 5V6Z" class="fill"></path><path stroke-linecap="round" stroke="#565B66" d="M11 7.5H13C13.5523 7.5 14 7.94772 14 8.5V8.5C14 9.05228 13.5523 9.5 13 9.5H11" class="line"></path><path stroke-linecap="round" stroke="#565B66" d="M12 9.49976H12.5C13.0523 9.49976 13.5 9.94747 13.5 10.4998V10.4998C13.5 11.052 13.0523 11.4998 12.5 11.4998H11" class="line"></path><path stroke-linecap="round" stroke="#565B66" d="M11 11.5H12C12.5523 11.5 13 11.9477 13 12.5V12.5C13 13.0523 12.5523 13.5 12 13.5H10.5" class="line"></path><path stroke="#565B66" d="M4.49999 5.99996C6.81105 5.99996 7.50004 4.75549 7.50004 3.56506C7.50004 3.16785 7.50004 2.8058 7.50003 2.49968C7.50003 1.94743 7.94769 1.50004 8.49995 1.49999V1.49999C9.05225 1.49995 9.50001 1.94767 9.50001 2.49997L9.50003 4.50001L9.49997 5.5" class="line"></path></svg>';
        _this.svgDislike = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"><path stroke="#565B66" d="M14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H12C11.7239 10.5 11.5 10.2761 11.5 10V3C11.5 2.72386 11.7239 2.5 12 2.5H14C14.2761 2.5 14.5 2.72386 14.5 3L14.5 10Z" class="line"></path><path stroke="#565B66" d="M4.00001 2.5L9.02786 2.5C9.33835 2.5 9.64458 2.57229 9.92229 2.71115L11.5 3.5" class="line"></path><path fill="#565B66" d="M6.49997 11C6.77611 11 6.99997 10.7761 6.99997 10.5C6.99997 10.2239 6.77611 10 6.49997 10V11ZM6.49997 10H2.49997V11H6.49997V10ZM2.49997 9H2.99997L2.99997 8H2.49997L2.49997 9ZM1.99997 9.5C1.99997 9.22386 2.22383 9 2.49997 9L2.49997 8C1.67154 8 0.999969 8.67157 0.999969 9.5H1.99997ZM2.49997 10C2.22383 10 1.99997 9.77614 1.99997 9.5H0.999969C0.999969 10.3284 1.67154 11 2.49997 11V10Z" class="fill"></path><path stroke-linecap="round" stroke="#565B66" d="M5 8.5H3C2.44772 8.5 2 8.05228 2 7.5V7.5C2 6.94772 2.44772 6.5 3 6.5H5" class="line"></path><path stroke-linecap="round" stroke="#565B66" d="M3.99997 6.50012H3.49997C2.94768 6.50012 2.49997 6.05241 2.49997 5.50012V5.50012C2.49997 4.94784 2.94768 4.50012 3.49997 4.50012H4.99997" class="line"></path><path stroke-linecap="round" stroke="#565B66" d="M5 4.49994H4C3.44772 4.49994 3.00001 4.05223 3 3.49994V3.49994C3 2.94766 3.44772 2.49994 4 2.49994H5.5" class="line"></path><path stroke="#565B66" d="M11.5 10L10.5585 10C10.2114 9.99999 9.8891 10.18 9.70705 10.4755L8.51507 12.4104C8.50518 12.4264 8.49995 12.4449 8.49995 12.4638L8.49996 13.5229C8.49996 14.0625 8.06252 14.4999 7.52291 14.4999V14.4999C7.19622 14.4999 6.88995 14.3349 6.70874 14.0631V14.0631C6.2568 13.3852 6.08975 12.5512 6.24953 11.7523L6.49998 10.5" class="line"></path></svg>';
        _this.svgCopy = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"><rect stroke="currentColor" rx="1.5" height="10" width="9" y="1.50024" x="1.5"></rect><path stroke-linecap="round" stroke="currentColor" d="M3.5 8.50024H8.5"></path><path stroke-linecap="round" stroke="currentColor" d="M3.5 4.50024L8.5 4.50024"></path><path stroke-linecap="round" stroke="currentColor" d="M3.5 6.50024L8.5 6.50024"></path><path stroke-linecap="round" stroke="currentColor" d="M4.5 14.5002L11.5 14.5002C12.6046 14.5002 13.5 13.6048 13.5 12.5002L13.5 5.50024"></path></svg>';
        _this.svgBullets = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"><line stroke-linecap="round" stroke="currentColor" y2="3" x2="13.5" y1="3" x1="7.5"></line><line stroke-linecap="round" stroke="currentColor" y2="13" x2="13.5" y1="13" x1="7.5"></line><line stroke-linecap="round" stroke="currentColor" y2="8" x2="13.5" y1="8" x1="7.5"></line><circle fill="currentColor" r="1.5" cy="3" cx="3.5"></circle><circle fill="currentColor" r="1.5" cy="8" cx="3.5"></circle><circle fill="currentColor" r="1.5" cy="13" cx="3.5"></circle></svg>';
        _this.svgSummary = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" height="16" width="16"><path d="M7 13.5C7 14.0523 7.44772 14.5 8 14.5C8.55228 14.5 9 14.0523 9 13.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.5 7.05C11.5 8.20833 10.9538 9.23537 10.109 9.88341C9.82908 10.0981 9.53089 10.3663 9.31281 10.7201L9.26859 10.7918C8.99723 11.232 8.51709 11.5 8 11.5C7.48291 11.5 7.00277 11.232 6.73141 10.7918L6.68719 10.7201C6.46911 10.3663 6.17091 10.0981 5.89101 9.88341C5.04624 9.23537 4.5 8.20833 4.5 7.05C4.5 5.08351 6.07284 3.5 8 3.5C9.92716 3.5 11.5 5.08351 11.5 7.05Z" stroke="currentColor" /><path d="M2.5 7.5L2 7.5" stroke="currentColor" stroke-linecap="round" /><path d="M3.5 3.5L3.00001 3" stroke="currentColor" stroke-linecap="round" /><path d="M14 7.5L13.5 7.5" stroke="currentColor" stroke-linecap="round" /><path d="M13 3L12.5 3.5" stroke="currentColor" stroke-linecap="round" /><path d="M8 2L8 1.5" stroke="currentColor" stroke-linecap="round" /></svg>';
        _this.svgSteps = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" width="16" height="16"><line x1="8.5" y1="3" x2="14.5" y2="3" stroke="currentColor" stroke-linecap="round" /><path d="M2 2.77548L3.37137 4.16667L6 1.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><line x1="8.5" y1="13" x2="14.5" y2="13" stroke="currentColor" stroke-linecap="round" /><line x1="8.5" y1="8" x2="14.5" y2="8" stroke="currentColor" stroke-linecap="round" /><path d="M2 12.7755L3.37137 14.1667L6 11.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /><path d="M2 7.77548L3.37137 9.16667L6 6.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" /></svg>';
        _this.svgClose = '<svg viewBox="0 0 22 22"><g transform="matrix(.7071 -.7071 .7071 .7071 -3.142 11)"><path d="m9-3.4h2v26.9h-2z"/><path d="m-3.4 9h26.9v2h-26.9z"/></g></svg>';
        _this.rephraseOptions = [
            {
                value: 'step',
                icon: _this.svgSteps,
                titleKey: 'steps',
                tooltipKey: 'steps-tooltip',
            },
            {
                value: 'bullet',
                icon: _this.svgBullets,
                titleKey: 'bullets',
                tooltipKey: 'bullets-tooltip',
            },
            {
                titleKey: 'summary',
                value: 'concise',
                icon: _this.svgSummary,
                tooltipKey: 'summary',
            },
        ];
        _this.feedbackOptions = [
            {
                id: 'irrelevant',
                localeKey: 'irrelevant',
                correspondingAnswer: 'irrelevant'
            },
            {
                id: 'notAccurate',
                localeKey: 'not-accurate',
                correspondingAnswer: 'notAccurate',
            },
            {
                id: 'outOfDate',
                localeKey: 'out-of-date',
                correspondingAnswer: 'outOfDate',
            },
            {
                id: 'harmful',
                localeKey: 'harmful',
                correspondingAnswer: 'harmful'
            },
            {
                id: 'other',
                localeKey: 'other',
                correspondingAnswer: 'other',
            },
        ];
        _this.hoverAnalyticsTimeout = 1000;
        _this.isFeedbackModalOpen = false;
        _this.storage = new local_storage_utils_1.SafeStorage();
        _this.options = coveo_search_ui_1.ComponentOptions.initComponentOptions(element, GeneratedAnswer_1, options);
        _this.contentNode = (0, coveo_search_ui_1.$$)('div');
        _this.element.appendChild(_this.contentNode.el);
        _this.data = _this.readStoredData();
        _this.controller = new generated_answer_controller_1.GeneratedAnswerController(_this, function (state) { return _this.stateChangeCallback(state); }, {
            initialState: {
                isVisible: _this.data.isVisible
            }
        });
        return _this;
    }
    GeneratedAnswer_1 = GeneratedAnswer;
    Object.defineProperty(GeneratedAnswer.prototype, "loadingClasses", {
        get: function () {
            return 'my-3';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratedAnswer.prototype, "contentClasses", {
        get: function () {
            return 'mt-0 mb-4 border border-neutral shadow-lg p-6 bg-background rounded-lg p-6 text-on-background';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratedAnswer.prototype, "hasRetryableError", {
        get: function () {
            var _a;
            return ((_a = this.generatedAnswerState.error) === null || _a === void 0 ? void 0 : _a.isRetryable);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GeneratedAnswer.prototype, "shouldBeHidden", {
        get: function () {
            var _a = this.generatedAnswerState, isLoading = _a.isLoading, answer = _a.answer, citations = _a.citations;
            return (!(isLoading || answer !== undefined || citations.length) &&
                !this.hasRetryableError);
        },
        enumerable: false,
        configurable: true
    });
    GeneratedAnswer.prototype.readStoredData = function () {
        return this.storage.getParsedJSON(local_storage_utils_1.StorageItems.GENERATED_ANSWER_DATA, { isVisible: true });
    };
    GeneratedAnswer.prototype.writeStoredData = function (data) {
        this.storage.setJSON(local_storage_utils_1.StorageItems.GENERATED_ANSWER_DATA, data);
    };
    GeneratedAnswer.prototype.stateChangeCallback = function (state) {
        var _a;
        this.generatedAnswerState = state;
        if (this.generatedAnswerState.isVisible !== ((_a = this.data) === null || _a === void 0 ? void 0 : _a.isVisible)) {
            this.data = __assign(__assign({}, this.data), { isVisible: this.generatedAnswerState.isVisible });
            this.writeStoredData(this.data);
        }
        this.render();
    };
    GeneratedAnswer.prototype.render = function () {
        var isLoading = this.generatedAnswerState.isLoading;
        if (this.shouldBeHidden) {
            this.contentNode.el.innerHTML = '';
        }
        else {
            if (isLoading) {
                this.contentNode.el.innerHTML = '';
                this.contentNode.append(this.renderTypingLoader());
            }
            else {
                var aside = (0, coveo_search_ui_1.$$)('aside', { class: isLoading ? this.loadingClasses : this.contentClasses, part: 'container' });
                var article = (0, coveo_search_ui_1.$$)('article');
                article.append(this.renderContent());
                aside.append(article.el);
                this.contentNode.el.innerHTML = '';
                this.contentNode.append(aside.el);
            }
        }
    };
    GeneratedAnswer.prototype.renderContent = function () {
        var content = (0, coveo_search_ui_1.$$)('div', { class: "generated-content" });
        var center = (0, coveo_search_ui_1.$$)('div', { class: "flex items-center" });
        var heading = (0, coveo_search_ui_1.$$)('div', { class: "text-bg-blue font-medium inline-block rounded-md py-2 px-2.5", part: "header-label" });
        heading.text((0, coveo_search_ui_1.l)('generated-answer-title'));
        center.append(heading.el);
        content.append(center.el);
        if (this.hasRetryableError) {
            content.append(this.renderRetryPrompt());
        }
        else {
            center.append(this.renderFeedbackButtons());
            if (this.generatedAnswerState.isVisible) {
                content.append(this.renderGeneratedContent());
                if (this.isFeedbackModalOpen) {
                    content.append(this.renderFeedbackModal());
                }
            }
        }
        return content.el;
    };
    GeneratedAnswer.prototype.renderFeedbackButtons = function () {
        var _this = this;
        var container = (0, coveo_search_ui_1.$$)('div', { class: "flex gap-2 h-9 items-center ml-auto" });
        var feedbackButtons = (0, coveo_search_ui_1.$$)('div', { class: 'feedback-buttons flex gap-2 ml-auto' });
        if (this.generatedAnswerState.isVisible && !this.generatedAnswerState.isStreaming) {
            feedbackButtons.append(this.renderFeedbackButton((0, coveo_search_ui_1.l)('this-answer-was-helpful'), 'like', this.generatedAnswerState.liked, function () { return _this.controller.like(); }));
            feedbackButtons.append(this.renderFeedbackButton((0, coveo_search_ui_1.l)('this-answer-was-not-helpful'), 'dislike', this.generatedAnswerState.disliked, function () {
                _this.isFeedbackModalOpen = true;
                _this.controller.dislike();
            }));
            feedbackButtons.append(this.renderCopyButton(this.generatedAnswerState.isCopied, function () { return _this.controller.copy(); }));
        }
        container.append(feedbackButtons.el);
        container.append(this.renderSwitch(this.generatedAnswerState.isVisible));
        return container.el;
    };
    GeneratedAnswer.prototype.renderFeedbackButton = function (title, variant, active, onclick) {
        var button = (0, coveo_search_ui_1.$$)('button', {
            title: title,
            class: "btn-text-neutral feedback-button w-5 p-2 rounded-md ".concat(variant, " ").concat(active ? 'active' : '')
        });
        button.el.innerHTML = variant == 'like' ? this.svgLike : this.svgDislike;
        button.on('click', onclick);
        return button.el;
    };
    GeneratedAnswer.prototype.renderCopyButton = function (isCopied, onclick) {
        var button = (0, coveo_search_ui_1.$$)('button', {
            title: !isCopied ? (0, coveo_search_ui_1.l)("copy-generated-answer") : (0, coveo_search_ui_1.l)("generated-answer-copied"),
            class: "btn-text-neutral feedback-button w-5 p-2 rounded-md ".concat(isCopied ? 'copied' : ''),
            part: 'copy-button'
        });
        var iconContainer = (0, coveo_search_ui_1.$$)('div', { class: "icon-container text-neutral-dark ripple-relative" });
        button.on('click', onclick);
        iconContainer.el.innerHTML = this.svgCopy;
        button.append(iconContainer.el);
        return button.el;
    };
    GeneratedAnswer.prototype.renderSwitch = function (isChecked) {
        var _this = this;
        var switchEl = (0, coveo_search_ui_1.$$)('button', {
            class: "toggle-button ".concat(isChecked ? 'checked' : 'unchecked'),
            role: "switch",
        });
        switchEl.on('click', function () {
            isChecked = !isChecked;
            if (isChecked) {
                _this.controller.show();
            }
            else {
                _this.controller.hide();
            }
        });
        var slider = (0, coveo_search_ui_1.$$)('div', {
            class: "slider"
        });
        switchEl.append(slider.el);
        return switchEl.el;
    };
    GeneratedAnswer.prototype.renderRetryPrompt = function () {
        var _this = this;
        var retryPrompt = (0, coveo_search_ui_1.$$)('div', { part: 'retry-container', class: 'mt-4' });
        var messageDiv = (0, coveo_search_ui_1.$$)('div', { class: 'mx-auto text-center text-neutral-dark' });
        retryPrompt.append(messageDiv.el);
        messageDiv.text((0, coveo_search_ui_1.l)('retry-stream-message'));
        var button = (0, coveo_search_ui_1.$$)('button', { class: 'block px-4 py-2 mt-4 mx-auto btn-primary' });
        retryPrompt.append(button.el);
        button.text((0, coveo_search_ui_1.l)('retry'));
        button.on('click', function () {
            _this.retry();
        });
        return retryPrompt.el;
    };
    GeneratedAnswer.prototype.renderGeneratedContent = function () {
        var div = (0, coveo_search_ui_1.$$)('div', { class: "mt-6" });
        var p = (0, coveo_search_ui_1.$$)('p', { class: 'text-on-background whitespace-pre-wrap', part: 'generated-text' });
        if (this.generatedAnswerState.isStreaming) {
            p.addClass('cursor');
        }
        var answer = this.generatedAnswerState.answer;
        p.text(answer ? answer : '');
        div.append(p.el);
        var footer = (0, coveo_search_ui_1.$$)('div', { class: "footer mt-6" });
        if (!this.generatedAnswerState.isStreaming) {
            footer.append(this.renderSourceCitations());
            footer.append(this.renderRephraseButtons());
        }
        div.append(footer.el);
        return div.el;
    };
    GeneratedAnswer.prototype.renderRephraseButtons = function () {
        var _this = this;
        var rephraseButtons = (0, coveo_search_ui_1.$$)('div', { class: 'rephrase-buttons shrink-0' });
        var label = (0, coveo_search_ui_1.$$)('p', {
            class: 'mb-2 text-neutral-dark shrink-0',
            part: 'rephrase-label',
        });
        label.el.innerHTML = (0, coveo_search_ui_1.l)('rephrase');
        rephraseButtons.append(label.el);
        var flex = (0, coveo_search_ui_1.$$)('div', { class: 'flex flex-wrap gap-2 ml-auto' });
        this.rephraseOptions.map(function (option) {
            flex.append(_this.renderRephraseButton(option, function () { return _this.controller.rephrase(option.value); }));
        });
        rephraseButtons.append(flex.el);
        return rephraseButtons.el;
    };
    GeneratedAnswer.prototype.renderRephraseButton = function (option, onclick) {
        var isActive = this.generatedAnswerState.answerStyle === option.value;
        var button = (0, coveo_search_ui_1.$$)('button', {
            title: (0, coveo_search_ui_1.l)(option.tooltipKey),
            class: "btn-outline-primary flex items-center rounded-md ".concat(isActive ? 'active' : ''),
            part: 'rephrase-button',
            areaPressed: String(isActive)
        });
        var iconContainer = (0, coveo_search_ui_1.$$)('div', { class: "icon-container text-neutral-dark h-full mx-auto shrink-0 relative" });
        button.on('click', onclick);
        iconContainer.el.innerHTML = option.icon;
        button.append(iconContainer.el);
        var rephraseButtonLabel = (0, coveo_search_ui_1.$$)('div', { class: "rephrase-btn-label hidden text-neutral-dark" });
        rephraseButtonLabel.el.innerHTML = option.titleKey;
        button.append(rephraseButtonLabel.el);
        return button.el;
    };
    GeneratedAnswer.prototype.renderSourceCitations = function () {
        var _this = this;
        var div = (0, coveo_search_ui_1.$$)('div');
        var citations = this.generatedAnswerState.citations;
        if (citations.length) {
            var divSourceCititations = (0, coveo_search_ui_1.$$)('div', { class: 'source-citations' });
            div.append(divSourceCititations.el);
            var p = (0, coveo_search_ui_1.$$)('p', { part: 'citations-label', class: 'mb-2 text-neutral-dark shrink-0' });
            p.text((0, coveo_search_ui_1.l)('more-info'));
            divSourceCititations.append(p.el);
            var ol_1 = (0, coveo_search_ui_1.$$)('ol', { class: 'list-none citations-container gap-2 flex items-center flex-wrap' });
            divSourceCititations.append(ol_1.el);
            citations.map(function (citation, index) {
                var _a;
                var li = (0, coveo_search_ui_1.$$)('li', { key: citation.id });
                var a = (0, coveo_search_ui_1.$$)('a', {
                    title: citation.title,
                    href: (_a = citation.clickUri) !== null && _a !== void 0 ? _a : citation.uri,
                    target: '_blank',
                    rel: 'noopener',
                    part: 'citation',
                    class: 'flex items-center p-1 bg-background btn-text-neutral border rounded-full border-neutral text-on-background'
                });
                li.append(a.el);
                a.on('click', function () { return _this.controller.clickCitation(citation); });
                a.el.innerHTML = "\n                    <div class=\"citation-index rounded-full font-medium rounded-full flex items-center text-bg-blue shrink-0\">\n                        <div class=\"mx-auto\">".concat(index + 1, "</div>\n                    </div>\n                    <span class=\"citation-title truncate mx-1\">\n                        ").concat(citation.title, "\n                    </span>\n                ");
                var popperInstance;
                var popover = (0, coveo_search_ui_1.$$)('div', {
                    class: 'rounded-md border border-neutral shadow-md p-4 z-10 bg-background flex-col gap-3 hidden',
                    role: 'dialog',
                    style: "width: 20rem;"
                });
                a.append(popover.el);
                popover.el.innerHTML = "\n                    <div class=\"truncate text-neutral-dark text-sm\">".concat(citation.uri, "</div>\n                    <div class=\"font-bold text-md\">").concat(citation.title, "</div>\n                    <p class=\"text-on-background text-sm\">").concat(citation.text && citation.text.substring(1, 200) + (citation.text.length > 200 ? '...' : ''), "</p>\n                ");
                a.on('mouseenter', function () {
                    popover.el.style.display = 'flex';
                    if (!popperInstance) {
                        popperInstance = (0, core_1.createPopper)(a.el, popover.el, {
                            placement: 'top-start',
                            modifiers: [
                                {
                                    name: 'offset',
                                    options: {
                                        offset: [0, 6],
                                    },
                                },
                                core_1.preventOverflow,
                            ],
                        });
                    }
                    _this.hoverStart = new Date().getTime();
                });
                a.on('mouseleave', function () {
                    popover.el.style.display = 'none';
                    var difference = new Date().getTime() - _this.hoverStart;
                    if (difference > _this.hoverAnalyticsTimeout) {
                        _this.controller.sendHoverEndEvent(citation, difference);
                    }
                    _this.hoverStart = undefined;
                });
                return li.el;
            }).forEach(function (el) { return ol_1.append(el); });
            return divSourceCititations.el;
        }
        return div.el;
    };
    GeneratedAnswer.prototype.renderTypingLoader = function () {
        var typingLoader = (0, coveo_search_ui_1.$$)('div', { class: 'typing-indicator', 'aria-hidden': 'true' });
        typingLoader.el.innerHTML = '<span></span><span></span><span></span>';
        return typingLoader.el;
    };
    GeneratedAnswer.prototype.renderModalHeader = function () {
        var _this = this;
        var headerWrapper = (0, coveo_search_ui_1.$$)('div', { class: 'header-wrapper' });
        var header = (0, coveo_search_ui_1.$$)('div', { class: 'header' });
        var feedbackTitle = (0, coveo_search_ui_1.$$)('h1');
        feedbackTitle.el.innerText = (0, coveo_search_ui_1.l)('feedback');
        var closeContainer = (0, coveo_search_ui_1.$$)('div', {
            class: 'close-container'
        });
        var closeButton = (0, coveo_search_ui_1.$$)('button', {
            class: 'btn-text-transparent p-3 relative w-[2.6rem] h-[2.6rem] ripple-parent'
        });
        closeButton.el.innerHTML = this.svgClose;
        closeButton.on('click', function () {
            _this.isFeedbackModalOpen = false;
            _this.controller.updateFeedback(undefined); // reset feedback value
            _this.removeFeedbackModal();
        });
        closeContainer.append(closeButton.el);
        header.append(feedbackTitle.el);
        header.append(closeContainer.el);
        headerWrapper.append(header.el);
        return headerWrapper.el;
    };
    GeneratedAnswer.prototype.renderModalBody = function () {
        var _this = this;
        var modalBodyWrapper = (0, coveo_search_ui_1.$$)('div', { class: 'modal-body-wrapper p-4' });
        var modalBody = (0, coveo_search_ui_1.$$)('div', { class: 'modal-body' });
        var modalForm = (0, coveo_search_ui_1.$$)('div', { class: 'modal-form p-2' });
        var feedbackText = (0, coveo_search_ui_1.$$)('p', { class: 'reason-title' });
        feedbackText.el.innerText = (0, coveo_search_ui_1.l)('generated-answer-feedback-instructions');
        modalForm.append(feedbackText.el);
        this.feedbackOptions.map(function (feedbackOption) {
            var reason = (0, coveo_search_ui_1.$$)('div', { class: 'reason' });
            _this.renderFeedbackOption(feedbackOption).forEach(function (option) {
                reason.append(option.el);
            });
            modalForm.append(reason.el);
        });
        var detailsInput = (0, coveo_search_ui_1.$$)('textarea', { id: "other-input", class: 'details-input', placeholder: "Add Details", style: "display: none;" });
        modalBody.append(modalForm.el);
        modalBodyWrapper.append(modalBody.el);
        modalBody.append(detailsInput.el);
        return modalBodyWrapper.el;
    };
    GeneratedAnswer.prototype.removeFeedbackModal = function () {
        var content = Coveo.$$(this.bindings.root).find('.generated-content');
        var modal = Coveo.$$(this.bindings.root).find('#feedback-modal');
        content.removeChild(modal);
    };
    GeneratedAnswer.prototype.renderModalFooter = function () {
        var _this = this;
        var modalFooterWrapper = (0, coveo_search_ui_1.$$)('div', { class: 'modal-footer-wrapper' });
        var modalFooter = (0, coveo_search_ui_1.$$)('div', { class: 'modal-footer' });
        var modalFooterButtons = (0, coveo_search_ui_1.$$)('div', { class: 'modal-footer-buttons' });
        var cancelButton = (0, coveo_search_ui_1.$$)('button', { class: 'btn-outline-neutral text-primary flex justify-center text-sm leading-4 p-2 ripple-parent ripple-relative' });
        var submitButton = (0, coveo_search_ui_1.$$)('button', { class: 'btn-primary flex justify-center text-sm leading-4 p-2 ripple-parent ripple-relative' });
        cancelButton.el.innerHTML = (0, coveo_search_ui_1.l)("close");
        cancelButton.on('click', function () {
            _this.isFeedbackModalOpen = false;
            _this.controller.updateFeedback(undefined); // reset feedback value
            _this.removeFeedbackModal();
        });
        submitButton.el.innerHTML = (0, coveo_search_ui_1.l)("feedback-send");
        submitButton.on('click', function () {
            _this.controller.submitFeedback();
            _this.isFeedbackModalOpen = false;
            _this.controller.updateFeedback(undefined); // reset feedback value
            _this.removeFeedbackModal();
        });
        modalFooterButtons.append(cancelButton.el);
        modalFooterButtons.append(submitButton.el);
        modalFooter.append(modalFooterButtons.el);
        modalFooterWrapper.append(modalFooter.el);
        return modalFooterWrapper.el;
    };
    GeneratedAnswer.prototype.renderFeedbackModal = function () {
        var backdrop = (0, coveo_search_ui_1.$$)('div', { class: 'backdrop fixed left-0 top-0 right-0 bottom-0 z-[9999]', id: "feedback-modal" });
        var container = (0, coveo_search_ui_1.$$)('article', { class: 'modal-container bg-background text-on-background' });
        var ruler = (0, coveo_search_ui_1.$$)('hr', { class: 'ruler' });
        container.el.appendChild(this.renderModalHeader());
        container.el.appendChild(ruler.el);
        container.el.appendChild(this.renderModalBody());
        container.el.appendChild(this.renderModalFooter());
        backdrop.append(container.el);
        return backdrop.el;
    };
    GeneratedAnswer.prototype.renderFeedbackOption = function (feedbackOption) {
        var _this = this;
        var radioOption = (0, coveo_search_ui_1.$$)('input', {
            class: "reason-radio",
            type: 'radio',
            name: 'answer',
            part: 'reason-radio',
            value: feedbackOption.localeKey,
            id: feedbackOption.id,
        });
        radioOption.on('change', function (e) {
            var inputBox = Coveo.$$(_this.bindings.root).find('#other-input');
            if (e.target["id"] === "other") {
                inputBox.style.display = "block";
            }
            else {
                inputBox.style.display = "none";
            }
            _this.controller.updateFeedback(feedbackOption.correspondingAnswer);
        });
        var labelOption = (0, coveo_search_ui_1.$$)('label', { class: "reason-label", part: 'reason-label', for: feedbackOption.id });
        labelOption.el.innerText = (0, coveo_search_ui_1.l)(feedbackOption.localeKey);
        return [radioOption, labelOption];
    };
    GeneratedAnswer.prototype.retry = function () {
        this.controller.logRetry();
        this.queryController.executeQuery();
    };
    var GeneratedAnswer_1;
    GeneratedAnswer.ID = 'GeneratedAnswer';
    GeneratedAnswer.options = {};
    GeneratedAnswer = GeneratedAnswer_1 = __decorate([
        turbo_core_1.lazyComponent
    ], GeneratedAnswer);
    return GeneratedAnswer;
}(coveo_search_ui_1.Component));
exports.GeneratedAnswer = GeneratedAnswer;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAnswerController = exports.getGeneratedAnswerInitialState = void 0;
var abort_controller_polyfill_1 = __webpack_require__(2);
var generated_answer_client_1 = __webpack_require__(8);
function getGeneratedAnswerInitialState() {
    return {
        isLoading: false,
        isStreaming: false,
        citations: [],
        liked: false,
        disliked: false,
        isCopied: false,
        answerStyle: "default",
        generateRephrase: false,
        isVisible: true
    };
}
exports.getGeneratedAnswerInitialState = getGeneratedAnswerInitialState;
var GeneratedAnswerController = /** @class */ (function () {
    function GeneratedAnswerController(bindings, stateChangeCallback, props) {
        var _this = this;
        var _a;
        this.bindings = bindings;
        this.stateChangeCallback = stateChangeCallback;
        this.props = props;
        this.state = getGeneratedAnswerInitialState();
        this.feedbackAnswerState = { currentFeedbackAnswer: undefined };
        this.client = new generated_answer_client_1.GeneratedAnswerAPIClient();
        this.abortController = (0, abort_controller_polyfill_1.createAbortController)();
        var _b = this.bindings.queryController.getEndpoint().options, restUri = _b.restUri, accessToken = _b.accessToken, queryStringArguments = _b.queryStringArguments;
        var orgFromAccessToken = null;
        try {
            orgFromAccessToken = JSON.parse(atob(accessToken.split('.')[1])).organization;
        }
        catch (_c) { }
        this.requestParams = {
            url: new URL(restUri, window.location.href).origin,
            accessToken: accessToken,
            organizationId: queryStringArguments['organizationId'] || this.bindings['options'].organizationId || orgFromAccessToken
        };
        Coveo.SearchEndpoint.defaultEndpoint.setRequestModifier(function (params) {
            params.requestData["pipelineRuleParameters"] = {
                "mlGenerativeQuestionAnswering": {
                    "responseFormat": {
                        "answerStyle": _this.state.answerStyle
                    }
                }
            };
            return params;
        });
        Coveo.$$(this.bindings.root).on(Coveo.QueryEvents.querySuccess, function (e, args) { _this.onQuerySuccess(e, args); });
        var isVisible = (_a = props.initialState) === null || _a === void 0 ? void 0 : _a.isVisible;
        if (isVisible !== undefined) {
            this.state.isVisible = isVisible;
        }
    }
    GeneratedAnswerController.prototype.like = function () {
        this.updateState(function (state) {
            state.liked = true;
            state.disliked = false;
        });
        this.logLikeGeneratedAnswer();
    };
    GeneratedAnswerController.prototype.dislike = function () {
        this.updateState(function (state) {
            state.liked = false;
            state.disliked = true;
        });
        this.logDislikeGeneratedAnswer();
    };
    GeneratedAnswerController.prototype.copy = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, navigator.clipboard.writeText(this.state.answer)];
                    case 1:
                        _a.sent();
                        this.updateState(function (state) {
                            state.isCopied = true;
                        });
                        setTimeout(function () {
                            _this.updateState(function (state) {
                                state.isCopied = false;
                            });
                        }, 2000);
                        this.logCopyGeneratedAnswer();
                        return [2 /*return*/];
                }
            });
        });
    };
    GeneratedAnswerController.prototype.rephrase = function (option) {
        this.updateState(function (state) {
            state.answerStyle = option;
            state.generateRephrase = true;
        });
        this.logRephrase();
        Coveo.executeQuery(this.bindings.root);
    };
    GeneratedAnswerController.prototype.show = function () {
        this.updateState(function (state) {
            state.isVisible = true;
        });
        this.logShowGeneratedAnswer();
    };
    GeneratedAnswerController.prototype.hide = function () {
        this.updateState(function (state) {
            state.isVisible = false;
        });
        this.logHideGeneratedAnswer();
    };
    GeneratedAnswerController.prototype.updateFeedback = function (currentFeedback) {
        this.feedbackAnswerState.currentFeedbackAnswer = currentFeedback;
    };
    GeneratedAnswerController.prototype.clickCitation = function (citation) {
        this.logCitationClick(citation);
    };
    GeneratedAnswerController.prototype.sendHoverEndEvent = function (citation, difference) {
        this.logHoverCitation(citation, difference);
    };
    GeneratedAnswerController.prototype.submitFeedback = function () {
        if (this.feedbackAnswerState.currentFeedbackAnswer === "other") {
            var inputBox = Coveo.$$(this.bindings.root).find('#other-input');
            ;
            this.logGeneratedAnswerDetailedFeedback(inputBox.value);
        }
        else {
            this.logGeneratedAnswerFeedback();
        }
    };
    GeneratedAnswerController.prototype.onQuerySuccess = function (e, data) {
        var _a, _b;
        var requestId = data.results.searchUid;
        var streamId = (_a = data.results['extendedResults']) === null || _a === void 0 ? void 0 : _a.generativeQuestionAnsweringId;
        if (this.lastRequestId !== requestId || this.state.generateRephrase) {
            this.updateState(function (state) {
                state.generateRephrase = false;
            });
            this.lastRequestId = requestId;
            (_b = this.abortController) === null || _b === void 0 ? void 0 : _b.abort();
            this.resetAnswer();
        }
        var isStreamInProgress = this.getIsStreamInProgress();
        if (!isStreamInProgress && streamId && streamId != this.requestParams.streamId) {
            this.requestParams.streamId = streamId;
            this.resetAnswer();
            this.getGeneratedAnswer();
        }
    };
    GeneratedAnswerController.prototype.getGeneratedAnswer = function () {
        var _this = this;
        this.updateState(function (state) { state.isLoading = true; });
        this.abortController = this.client.streamGeneratedAnswer(this.requestParams, {
            write: function (data) { return _this.write(data); },
            abort: function (error) { return _this.abort(error); },
            close: function () { return _this.close(); },
            resetAnswer: function () { return _this.resetAnswer(); }
        });
        if (!this.abortController) {
            this.updateState(function (state) { return state.isLoading = false; });
        }
    };
    GeneratedAnswerController.prototype.updateState = function (updateCallback) {
        updateCallback(this.state);
        this.stateChangeCallback(this.state);
    };
    GeneratedAnswerController.prototype.write = function (data) {
        this.updateState(function (state) { return state.isLoading = false; });
        if (data.payload && data.payloadType) {
            this.handleStreamPayload(data.payloadType, data.payload);
        }
    };
    GeneratedAnswerController.prototype.setAbortControllerRef = function (ref) {
        this.abortController = ref;
    };
    ;
    GeneratedAnswerController.prototype.getIsStreamInProgress = function () {
        var _a;
        if (!this.abortController || ((_a = this.abortController) === null || _a === void 0 ? void 0 : _a.signal.aborted)) {
            this.abortController = null;
            return false;
        }
        return true;
    };
    ;
    GeneratedAnswerController.prototype.abort = function (payload) {
        this.updateState(function (state) {
            state.isLoading = false;
            state.isStreaming = false;
            state.error = __assign(__assign({}, payload), { isRetryable: payload.code === generated_answer_client_1.RETRYABLE_STREAM_ERROR_CODE });
            state.citations = [];
            delete state.answer;
        });
    };
    GeneratedAnswerController.prototype.close = function () {
        this.updateState(function (state) {
            state.isLoading = false;
        });
    };
    GeneratedAnswerController.prototype.resetAnswer = function () {
        var _this = this;
        this.updateState(function (state) { return _this.state = __assign(__assign({}, getGeneratedAnswerInitialState()), { isVisible: _this.state.isVisible }); });
    };
    GeneratedAnswerController.prototype.handleStreamPayload = function (payloadType, payload) {
        console.log('handleStreamPayload', [payloadType, payload]);
        switch (payloadType) {
            case 'genqa.messageType':
                this.updateState(function (state) {
                    state.isLoading = false;
                    state.isStreaming = true;
                    if (!state.answer) {
                        state.answer = '';
                    }
                    state.answer += JSON.parse(payload).textDelta;
                    delete state.error;
                });
                break;
            case 'genqa.citationsType':
                console.log('####genqa.citationsType');
                this.updateState(function (state) { return state.citations = JSON.parse(payload).citations; });
                break;
            case 'genqa.endOfStreamType':
                this.updateState(function (state) { state.isStreaming = false; });
                this.logGeneratedAnswerStreamEnd(JSON.parse(payload).answerGenerated);
                break;
        }
    };
    ;
    GeneratedAnswerController.prototype.logGeneratedAnswerStreamEnd = function (answerGenerated) {
        Coveo.logCustomEvent(this.bindings.root, { name: 'generatedAnswerStreamEnd', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "answerGenerated": answerGenerated
        });
    };
    GeneratedAnswerController.prototype.logLikeGeneratedAnswer = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'likeGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logDislikeGeneratedAnswer = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'dislikeGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logCopyGeneratedAnswer = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'copyGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logShowGeneratedAnswer = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'showGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logHideGeneratedAnswer = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'hideGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logCitationClick = function (citation) {
        Coveo.logCustomEvent(this.bindings.root, { name: 'openGeneratedAnswerSource', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "permanentId": citation.permanentid,
            "id": citation.id
        });
    };
    GeneratedAnswerController.prototype.logHoverCitation = function (citation, difference) {
        Coveo.logCustomEvent(this.bindings.root, { name: 'openGeneratedAnswerSource', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "permanentId": citation.permanentid,
            "id": citation.id,
            "difference": difference
        });
    };
    GeneratedAnswerController.prototype.logRetry = function () {
        Coveo.logSearchEvent(this.bindings.root, { name: 'retryGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId
        });
    };
    GeneratedAnswerController.prototype.logRephrase = function () {
        Coveo.logSearchEvent(this.bindings.root, { name: 'rephraseGeneratedAnswer', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "rephraseFormat": this.state.answerStyle
        });
    };
    GeneratedAnswerController.prototype.logGeneratedAnswerFeedback = function () {
        Coveo.logCustomEvent(this.bindings.root, { name: 'generatedAnswerFeedbackSubmit', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "reason": this.feedbackAnswerState.currentFeedbackAnswer
        });
    };
    GeneratedAnswerController.prototype.logGeneratedAnswerDetailedFeedback = function (details) {
        Coveo.logCustomEvent(this.bindings.root, { name: 'generatedAnswerDetailedFeedbackSubmit', type: 'generatedAnswer' }, {
            "generativeQuestionAnsweringId": this.requestParams.streamId,
            "reason": this.feedbackAnswerState.currentFeedbackAnswer,
            details: details
        });
    };
    return GeneratedAnswerController;
}());
exports.GeneratedAnswerController = GeneratedAnswerController;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const _global =
  typeof self !== 'undefined'
    ? self
    : typeof window !== 'undefined'
    ? window
    : /* otherwise */ undefined

if (!_global) {
  throw new Error(
    `Unable to find global scope. Are you sure this is running in the browser?`
  )
}

if (!_global.AbortController) {
  throw new Error(
    `Could not find "AbortController" in the global scope. You need to polyfill it first`
  )
}

module.exports.AbortController = _global.AbortController

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneratedAnswerAPIClient = exports.RETRYABLE_STREAM_ERROR_CODE = void 0;
var fetch_event_source_1 = __webpack_require__(14);
var abort_controller_polyfill_1 = __webpack_require__(2);
var buildStreamingUrl = function (url, orgId, streamId) { return "".concat(url, "/rest/organizations/").concat(orgId, "/machinelearning/streaming/").concat(streamId); };
var resetTimeout = function (
// eslint-disable-next-line @typescript-eslint/no-explicit-any
callback, timeoutId, ms) {
    clearTimeout(timeoutId);
    return setTimeout(callback, ms);
};
var MAX_RETRIES = 3;
var MAX_TIMEOUT = 5000;
var EVENT_STREAM_CONTENT_TYPE = 'text/event-stream';
exports.RETRYABLE_STREAM_ERROR_CODE = 1;
var RetryableError = /** @class */ (function (_super) {
    __extends(RetryableError, _super);
    function RetryableError() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.IsRetryableError = true;
        return _this;
    }
    return RetryableError;
}(Error));
var FatalError = /** @class */ (function (_super) {
    __extends(FatalError, _super);
    function FatalError(payload) {
        var _this = _super.call(this, payload.message) || this;
        _this.payload = payload;
        //In some instance testing isinstanceof FatalError does not work,
        //  when creating new FatalError, instanceof only works for Error class check;
        //  here implementing a formal flag to identify the type of error
        _this.IsFatalError = true;
        return _this;
    }
    return FatalError;
}(Error));
var TimeoutStateManager = /** @class */ (function () {
    function TimeoutStateManager() {
        this.timeouts = new Set();
    }
    TimeoutStateManager.prototype.add = function (timeout) {
        this.timeouts.add(timeout);
    };
    TimeoutStateManager.prototype.remove = function (timeout) {
        clearTimeout(timeout);
        this.timeouts.delete(timeout);
    };
    TimeoutStateManager.prototype.isActive = function (timeout) {
        return this.timeouts.has(timeout);
    };
    return TimeoutStateManager;
}());
var GeneratedAnswerAPIClient = /** @class */ (function () {
    function GeneratedAnswerAPIClient() {
    }
    GeneratedAnswerAPIClient.prototype.streamGeneratedAnswer = function (params, callbacks) {
        var url = params.url, organizationId = params.organizationId, streamId = params.streamId, accessToken = params.accessToken;
        var write = callbacks.write, abort = callbacks.abort, close = callbacks.close, resetAnswer = callbacks.resetAnswer;
        var timeoutStateManager = new TimeoutStateManager();
        if (!streamId) {
            return;
        }
        var retryCount = 0;
        var timeout;
        var retryStream = function () {
            if (timeout && !timeoutStateManager.isActive(timeout)) {
                abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                resetAnswer();
                stream();
            }
        };
        var refreshTimeout = function () {
            timeoutStateManager.remove(timeout);
            timeout = resetTimeout(retryStream, timeout, MAX_TIMEOUT);
            timeoutStateManager.add(timeout);
        };
        var abortController = (0, abort_controller_polyfill_1.createAbortController)();
        var stream = function () {
            return (0, fetch_event_source_1.fetchEventSource)(buildStreamingUrl(url, organizationId, streamId), {
                method: 'GET',
                headers: {
                    Authorization: "Bearer ".concat(accessToken),
                    accept: '*/*',
                },
                signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal,
                onopen: function (response) {
                    return __awaiter(this, void 0, void 0, function () {
                        var isClientSideError, e;
                        return __generator(this, function (_a) {
                            if (response.ok &&
                                response.headers.get('content-type') === EVENT_STREAM_CONTENT_TYPE) {
                                return [2 /*return*/];
                            }
                            isClientSideError = response.status >= 400 &&
                                response.status < 500 &&
                                response.status !== 429;
                            if (isClientSideError) {
                                e = new FatalError({
                                    message: 'Error opening stream',
                                    code: response.status,
                                });
                                throw e;
                            }
                            else {
                                throw new RetryableError();
                            }
                            return [2 /*return*/];
                        });
                    });
                },
                onmessage: function (event) {
                    console.log('onmessage', event.data);
                    var data = JSON.parse(event.data);
                    if (data.finishReason === 'ERROR') {
                        timeoutStateManager.remove(timeout);
                        abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                        abort({
                            message: data.errorMessage,
                            code: data.statusCode,
                        });
                        return;
                    }
                    write(data);
                    retryCount = 0;
                    if (data.finishReason === 'COMPLETED') {
                        timeoutStateManager.remove(timeout);
                        close();
                    }
                    else {
                        refreshTimeout();
                    }
                },
                onerror: function (err) {
                    timeoutStateManager.remove(timeout);
                    if (err.IsFatalError) {
                        abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                        abort(err);
                        throw err;
                    }
                    if (++retryCount > MAX_RETRIES) {
                        var error = {
                            message: 'Failed to complete stream.',
                            code: exports.RETRYABLE_STREAM_ERROR_CODE,
                        };
                        abortController === null || abortController === void 0 ? void 0 : abortController.abort();
                        abort(error);
                        throw new FatalError(error);
                    }
                    resetAnswer();
                },
            });
        };
        stream();
        return abortController;
    };
    return GeneratedAnswerAPIClient;
}());
exports.GeneratedAnswerAPIClient = GeneratedAnswerAPIClient;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SafeStorage = exports.StorageItems = void 0;
var StorageItems;
(function (StorageItems) {
    StorageItems["GENERATED_ANSWER_DATA"] = "coveo-generated-answer-data";
})(StorageItems || (exports.StorageItems = StorageItems = {}));
var SafeStorage = /** @class */ (function () {
    function SafeStorage() {
    }
    SafeStorage.prototype.clear = function () {
        return this.tryAccessLocalStorageOrWarn(function () { return localStorage.clear(); }, function () { });
    };
    SafeStorage.prototype.getItem = function (key) {
        return this.tryAccessLocalStorageOrWarn(function () { return localStorage.getItem(key); }, function () { return null; });
    };
    SafeStorage.prototype.getParsedJSON = function (key, fallback) {
        var item = this.getItem(key);
        if (!item) {
            return fallback;
        }
        return this.tryJSONOrWarn(key, function () { return JSON.parse(item); }, function () { return fallback; });
    };
    SafeStorage.prototype.key = function (index) {
        return this.tryAccessLocalStorageOrWarn(function () { return localStorage.key(index); }, function () { return null; });
    };
    Object.defineProperty(SafeStorage.prototype, "length", {
        get: function () {
            return this.tryOrElse(function () { return localStorage.length; }, function () { return 0; });
        },
        enumerable: false,
        configurable: true
    });
    SafeStorage.prototype.removeItem = function (key) {
        return this.tryAccessLocalStorageOrWarn(function () { return localStorage.removeItem(key); }, function () { });
    };
    SafeStorage.prototype.setItem = function (key, value) {
        return this.tryAccessLocalStorageOrWarn(function () { return localStorage.setItem(key, value); }, function () { });
    };
    SafeStorage.prototype.setJSON = function (key, obj) {
        var stringified = this.tryJSONOrWarn(key, function () { return JSON.stringify(obj); }, function () { return JSON.stringify({}); });
        return this.setItem(key, stringified);
    };
    SafeStorage.prototype.tryAccessLocalStorageOrWarn = function (tryTo, orElse) {
        return this.tryOrElse(tryTo, function () {
            console.warn('Error while trying to read or modify local storage. This can be caused by browser specific settings.');
            return orElse();
        });
    };
    SafeStorage.prototype.tryJSONOrWarn = function (key, tryTo, orElse) {
        return this.tryOrElse(tryTo, function () {
            console.warn("Error while trying to do JSON manipulation with local storage entry. ".concat(key));
            return orElse();
        });
    };
    SafeStorage.prototype.tryOrElse = function (tryTo, orElse) {
        try {
            return tryTo();
        }
        catch (e) {
            console.warn(e);
            return orElse();
        }
    };
    return SafeStorage;
}());
exports.SafeStorage = SafeStorage;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(11);
            var content = __webpack_require__(12);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "top", function() { return /* reexport */ enums_top; });
__webpack_require__.d(__webpack_exports__, "bottom", function() { return /* reexport */ bottom; });
__webpack_require__.d(__webpack_exports__, "right", function() { return /* reexport */ right; });
__webpack_require__.d(__webpack_exports__, "left", function() { return /* reexport */ left; });
__webpack_require__.d(__webpack_exports__, "auto", function() { return /* reexport */ auto; });
__webpack_require__.d(__webpack_exports__, "basePlacements", function() { return /* reexport */ basePlacements; });
__webpack_require__.d(__webpack_exports__, "start", function() { return /* reexport */ start; });
__webpack_require__.d(__webpack_exports__, "end", function() { return /* reexport */ end; });
__webpack_require__.d(__webpack_exports__, "clippingParents", function() { return /* reexport */ enums_clippingParents; });
__webpack_require__.d(__webpack_exports__, "viewport", function() { return /* reexport */ viewport; });
__webpack_require__.d(__webpack_exports__, "popper", function() { return /* reexport */ enums_popper; });
__webpack_require__.d(__webpack_exports__, "reference", function() { return /* reexport */ enums_reference; });
__webpack_require__.d(__webpack_exports__, "variationPlacements", function() { return /* reexport */ variationPlacements; });
__webpack_require__.d(__webpack_exports__, "placements", function() { return /* reexport */ enums_placements; });
__webpack_require__.d(__webpack_exports__, "beforeRead", function() { return /* reexport */ beforeRead; });
__webpack_require__.d(__webpack_exports__, "read", function() { return /* reexport */ read; });
__webpack_require__.d(__webpack_exports__, "afterRead", function() { return /* reexport */ afterRead; });
__webpack_require__.d(__webpack_exports__, "beforeMain", function() { return /* reexport */ beforeMain; });
__webpack_require__.d(__webpack_exports__, "main", function() { return /* reexport */ main; });
__webpack_require__.d(__webpack_exports__, "afterMain", function() { return /* reexport */ afterMain; });
__webpack_require__.d(__webpack_exports__, "beforeWrite", function() { return /* reexport */ beforeWrite; });
__webpack_require__.d(__webpack_exports__, "write", function() { return /* reexport */ write; });
__webpack_require__.d(__webpack_exports__, "afterWrite", function() { return /* reexport */ afterWrite; });
__webpack_require__.d(__webpack_exports__, "modifierPhases", function() { return /* reexport */ modifierPhases; });
__webpack_require__.d(__webpack_exports__, "applyStyles", function() { return /* reexport */ modifiers_applyStyles; });
__webpack_require__.d(__webpack_exports__, "arrow", function() { return /* reexport */ modifiers_arrow; });
__webpack_require__.d(__webpack_exports__, "computeStyles", function() { return /* reexport */ modifiers_computeStyles; });
__webpack_require__.d(__webpack_exports__, "eventListeners", function() { return /* reexport */ eventListeners; });
__webpack_require__.d(__webpack_exports__, "flip", function() { return /* reexport */ modifiers_flip; });
__webpack_require__.d(__webpack_exports__, "hide", function() { return /* reexport */ modifiers_hide; });
__webpack_require__.d(__webpack_exports__, "offset", function() { return /* reexport */ modifiers_offset; });
__webpack_require__.d(__webpack_exports__, "popperOffsets", function() { return /* reexport */ modifiers_popperOffsets; });
__webpack_require__.d(__webpack_exports__, "preventOverflow", function() { return /* reexport */ modifiers_preventOverflow; });
__webpack_require__.d(__webpack_exports__, "popperGenerator", function() { return /* reexport */ popperGenerator; });
__webpack_require__.d(__webpack_exports__, "detectOverflow", function() { return /* reexport */ detectOverflow; });
__webpack_require__.d(__webpack_exports__, "createPopperBase", function() { return /* reexport */ createPopper_createPopper; });
__webpack_require__.d(__webpack_exports__, "createPopper", function() { return /* reexport */ popper_createPopper; });
__webpack_require__.d(__webpack_exports__, "createPopperLite", function() { return /* reexport */ popper_lite_createPopper; });

// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/enums.js
var enums_top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [enums_top, bottom, right, left];
var start = 'start';
var end = 'end';
var enums_clippingParents = 'clippingParents';
var viewport = 'viewport';
var enums_popper = 'popper';
var enums_reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var enums_placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeName.js
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindow.js
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/instanceOf.js


function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/applyStyles.js

 // This modifier takes the styles prepared by the `computeStyles` modifier
// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_applyStyles = ({
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getBasePlacement.js

function getBasePlacement(placement) {
  return placement.split('-')[0];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/math.js
var math_max = Math.max;
var math_min = Math.min;
var round = Math.round;
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/userAgent.js
function getUAString() {
  var uaData = navigator.userAgentData;

  if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) {
    return uaData.brands.map(function (item) {
      return item.brand + "/" + item.version;
    }).join(' ');
  }

  return navigator.userAgent;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isLayoutViewport.js

function isLayoutViewport() {
  return !/^((?!chrome|android).)*safari/i.test(getUAString());
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getBoundingClientRect.js




function getBoundingClientRect(element, includeScale, isFixedStrategy) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  if (isFixedStrategy === void 0) {
    isFixedStrategy = false;
  }

  var clientRect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (includeScale && isHTMLElement(element)) {
    scaleX = element.offsetWidth > 0 ? round(clientRect.width) / element.offsetWidth || 1 : 1;
    scaleY = element.offsetHeight > 0 ? round(clientRect.height) / element.offsetHeight || 1 : 1;
  }

  var _ref = isElement(element) ? getWindow(element) : window,
      visualViewport = _ref.visualViewport;

  var addVisualOffsets = !isLayoutViewport() && isFixedStrategy;
  var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
  var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
  var width = clientRect.width / scaleX;
  var height = clientRect.height / scaleY;
  return {
    width: width,
    height: height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getLayoutRect.js
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/contains.js

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getComputedStyle.js

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isTableElement.js

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentElement.js

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getParentNode.js



function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getOffsetParent.js








function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = /firefox/i.test(getUAString());
  var isIE = /Trident/i.test(getUAString());

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getMainAxisFromPlacement.js
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/within.js

function within(min, value, max) {
  return math_max(min, math_min(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getFreshSideObject.js
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergePaddingObject.js

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/expandToHashMap.js
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/arrow.js








 // eslint-disable-next-line import/no-unused-modules

var arrow_toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = arrow_toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? enums_top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function arrow_effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_arrow = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: arrow_effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getVariation.js
function getVariation(placement) {
  return placement.split('-')[1];
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/computeStyles.js







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref, win) {
  var x = _ref.x,
      y = _ref.y;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = enums_top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === enums_top || (placement === left || placement === right) && variation === end) {
      sideY = bottom;
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left || (placement === enums_top || placement === bottom) && variation === end) {
      sideX = right;
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }, getWindow(popper)) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_computeStyles = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/eventListeners.js
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function eventListeners_effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var eventListeners = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: eventListeners_effect,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositePlacement.js
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getOppositeVariationPlacement.js
var getOppositeVariationPlacement_hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return getOppositeVariationPlacement_hash[matched];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScroll.js

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getWindowScrollBarX.js



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getViewportRect.js




function getViewportRect(element, strategy) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0;

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height;
    var layoutViewport = isLayoutViewport();

    if (layoutViewport || !layoutViewport && strategy === 'fixed') {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getDocumentRect.js




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = math_max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = math_max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += math_max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/isScrollParent.js

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getScrollParent.js




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/listScrollParents.js




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/rectToClientRect.js
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getClippingRect.js















function getInnerBoundingClientRect(element, strategy) {
  var rect = getBoundingClientRect(element, false, strategy === 'fixed');
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent, strategy) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element, strategy)) : isElement(clippingParent) ? getInnerBoundingClientRect(clippingParent, strategy) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary, strategy) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent, strategy);
    accRect.top = math_max(rect.top, accRect.top);
    accRect.right = math_min(rect.right, accRect.right);
    accRect.bottom = math_min(rect.bottom, accRect.bottom);
    accRect.left = math_max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent, strategy));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeOffsets.js




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case enums_top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/detectOverflow.js








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$strategy = _options.strategy,
      strategy = _options$strategy === void 0 ? state.strategy : _options$strategy,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? enums_clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? enums_popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === enums_popper ? enums_reference : enums_popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary, strategy);
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === enums_popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === enums_popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [enums_top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/computeAutoPlacement.js




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? enums_placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/flip.js






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [enums_top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : enums_top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_flip = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/hide.js



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [enums_top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_hide = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/offset.js

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, enums_top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset_offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = enums_placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_offset = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset_offset
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/popperOffsets.js


function popperOffsets_popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_popperOffsets = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets_popperOffsets,
  data: {}
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/getAltAxis.js
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/preventOverflow.js












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? enums_top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? math_min(min, tetherMin) : min, offset, tether ? math_max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? enums_top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [enums_top, left].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? withinMaxClamp(_tetherMin, _offset, _tetherMax) : within(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ var modifiers_preventOverflow = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/modifiers/index.js









// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getHTMLElementScroll.js
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getNodeScroll.js




function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/dom-utils/getCompositeRect.js









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled, isFixed);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/orderModifiers.js
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/debounce.js
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/utils/mergeByName.js
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}
// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/createPopper.js









var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        });
        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref) {
        var name = _ref.name,
            _ref$options = _ref.options,
            options = _ref$options === void 0 ? {} : _ref$options,
            effect = _ref.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper_createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper.js










var popper_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles, modifiers_offset, modifiers_flip, modifiers_preventOverflow, modifiers_arrow, modifiers_hide];
var popper_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/popper-lite.js





var popper_lite_defaultModifiers = [eventListeners, modifiers_popperOffsets, modifiers_computeStyles, modifiers_applyStyles];
var popper_lite_createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: popper_lite_defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules


// CONCATENATED MODULE: ./node_modules/@popperjs/core/lib/index.js

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules

 // eslint-disable-next-line import/no-unused-modules



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "fetchEventSource", function() { return /* reexport */ fetchEventSource; });
__webpack_require__.d(__webpack_exports__, "EventStreamContentType", function() { return /* reexport */ EventStreamContentType; });

// CONCATENATED MODULE: ./node_modules/@microsoft/fetch-event-source/lib/esm/parse.js
async function getBytes(stream, onChunk) {
    const reader = stream.getReader();
    let result;
    while (!(result = await reader.read()).done) {
        onChunk(result.value);
    }
}
function getLines(onLine) {
    let buffer;
    let position;
    let fieldLength;
    let discardTrailingNewline = false;
    return function onChunk(arr) {
        if (buffer === undefined) {
            buffer = arr;
            position = 0;
            fieldLength = -1;
        }
        else {
            buffer = concat(buffer, arr);
        }
        const bufLength = buffer.length;
        let lineStart = 0;
        while (position < bufLength) {
            if (discardTrailingNewline) {
                if (buffer[position] === 10) {
                    lineStart = ++position;
                }
                discardTrailingNewline = false;
            }
            let lineEnd = -1;
            for (; position < bufLength && lineEnd === -1; ++position) {
                switch (buffer[position]) {
                    case 58:
                        if (fieldLength === -1) {
                            fieldLength = position - lineStart;
                        }
                        break;
                    case 13:
                        discardTrailingNewline = true;
                    case 10:
                        lineEnd = position;
                        break;
                }
            }
            if (lineEnd === -1) {
                break;
            }
            onLine(buffer.subarray(lineStart, lineEnd), fieldLength);
            lineStart = position;
            fieldLength = -1;
        }
        if (lineStart === bufLength) {
            buffer = undefined;
        }
        else if (lineStart !== 0) {
            buffer = buffer.subarray(lineStart);
            position -= lineStart;
        }
    };
}
function getMessages(onId, onRetry, onMessage) {
    let message = newMessage();
    const decoder = new TextDecoder();
    return function onLine(line, fieldLength) {
        if (line.length === 0) {
            onMessage === null || onMessage === void 0 ? void 0 : onMessage(message);
            message = newMessage();
        }
        else if (fieldLength > 0) {
            const field = decoder.decode(line.subarray(0, fieldLength));
            const valueOffset = fieldLength + (line[fieldLength + 1] === 32 ? 2 : 1);
            const value = decoder.decode(line.subarray(valueOffset));
            switch (field) {
                case 'data':
                    message.data = message.data
                        ? message.data + '\n' + value
                        : value;
                    break;
                case 'event':
                    message.event = value;
                    break;
                case 'id':
                    onId(message.id = value);
                    break;
                case 'retry':
                    const retry = parseInt(value, 10);
                    if (!isNaN(retry)) {
                        onRetry(message.retry = retry);
                    }
                    break;
            }
        }
    };
}
function concat(a, b) {
    const res = new Uint8Array(a.length + b.length);
    res.set(a);
    res.set(b, a.length);
    return res;
}
function newMessage() {
    return {
        data: '',
        event: '',
        id: '',
        retry: undefined,
    };
}
//# sourceMappingURL=parse.js.map
// CONCATENATED MODULE: ./node_modules/@microsoft/fetch-event-source/lib/esm/fetch.js
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};

const EventStreamContentType = 'text/event-stream';
const DefaultRetryInterval = 1000;
const LastEventId = 'last-event-id';
function fetchEventSource(input, _a) {
    var { signal: inputSignal, headers: inputHeaders, onopen: inputOnOpen, onmessage, onclose, onerror, openWhenHidden, fetch: inputFetch } = _a, rest = __rest(_a, ["signal", "headers", "onopen", "onmessage", "onclose", "onerror", "openWhenHidden", "fetch"]);
    return new Promise((resolve, reject) => {
        const headers = Object.assign({}, inputHeaders);
        if (!headers.accept) {
            headers.accept = EventStreamContentType;
        }
        let curRequestController;
        function onVisibilityChange() {
            curRequestController.abort();
            if (!document.hidden) {
                create();
            }
        }
        if (!openWhenHidden) {
            document.addEventListener('visibilitychange', onVisibilityChange);
        }
        let retryInterval = DefaultRetryInterval;
        let retryTimer = 0;
        function dispose() {
            document.removeEventListener('visibilitychange', onVisibilityChange);
            window.clearTimeout(retryTimer);
            curRequestController.abort();
        }
        inputSignal === null || inputSignal === void 0 ? void 0 : inputSignal.addEventListener('abort', () => {
            dispose();
            resolve();
        });
        const fetch = inputFetch !== null && inputFetch !== void 0 ? inputFetch : window.fetch;
        const onopen = inputOnOpen !== null && inputOnOpen !== void 0 ? inputOnOpen : defaultOnOpen;
        async function create() {
            var _a;
            curRequestController = new AbortController();
            try {
                const response = await fetch(input, Object.assign(Object.assign({}, rest), { headers, signal: curRequestController.signal }));
                await onopen(response);
                await getBytes(response.body, getLines(getMessages(id => {
                    if (id) {
                        headers[LastEventId] = id;
                    }
                    else {
                        delete headers[LastEventId];
                    }
                }, retry => {
                    retryInterval = retry;
                }, onmessage)));
                onclose === null || onclose === void 0 ? void 0 : onclose();
                dispose();
                resolve();
            }
            catch (err) {
                if (!curRequestController.signal.aborted) {
                    try {
                        const interval = (_a = onerror === null || onerror === void 0 ? void 0 : onerror(err)) !== null && _a !== void 0 ? _a : retryInterval;
                        window.clearTimeout(retryTimer);
                        retryTimer = window.setTimeout(create, interval);
                    }
                    catch (innerErr) {
                        dispose();
                        reject(innerErr);
                    }
                }
            }
        }
        create();
    });
}
function defaultOnOpen(response) {
    const contentType = response.headers.get('content-type');
    if (!(contentType === null || contentType === void 0 ? void 0 : contentType.startsWith(EventStreamContentType))) {
        throw new Error(`Expected content-type to be ${EventStreamContentType}, Actual: ${contentType}`);
    }
}
//# sourceMappingURL=fetch.js.map
// CONCATENATED MODULE: ./node_modules/@microsoft/fetch-event-source/lib/esm/index.js

//# sourceMappingURL=index.js.map

/***/ })
/******/ ]);
});