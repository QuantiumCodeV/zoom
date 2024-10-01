(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("Coveo"));
	else if(typeof define === 'function' && define.amd)
		define(["Coveo"], factory);
	else if(typeof exports === 'object')
		exports["CoveoExtension"] = factory(require("Coveo"));
	else
		root["CoveoExtension"] = factory(root["Coveo"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_coveo_search_ui__) {
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
/******/ 	__webpack_require__.p = "/commonjs";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/Index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Index.ts":
/*!**********************!*\
  !*** ./src/Index.ts ***!
  \**********************/
/*! exports provided: ActionButton, ToggleActionButton, DisableableToggleActionButton, AttachResult, UserActivity, UserActions, ClickedDocumentList, QueryList, UserProfilingEndpoint, UserProfileModel, ResultsFilter, ViewedByCustomer, ResultAction, CopyToClipboard, TopQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/ActionButton/ActionButton */ "./src/components/ActionButton/ActionButton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return _components_ActionButton_ActionButton__WEBPACK_IMPORTED_MODULE_0__["ActionButton"]; });

/* harmony import */ var _components_ActionButton_ToggleActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/ActionButton/ToggleActionButton */ "./src/components/ActionButton/ToggleActionButton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToggleActionButton", function() { return _components_ActionButton_ToggleActionButton__WEBPACK_IMPORTED_MODULE_1__["ToggleActionButton"]; });

/* harmony import */ var _components_ActionButton_DisableableToggleActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ActionButton/DisableableToggleActionButton */ "./src/components/ActionButton/DisableableToggleActionButton.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisableableToggleActionButton", function() { return _components_ActionButton_DisableableToggleActionButton__WEBPACK_IMPORTED_MODULE_2__["DisableableToggleActionButton"]; });

/* harmony import */ var _components_AttachResult_AttachResult__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AttachResult/AttachResult */ "./src/components/AttachResult/AttachResult.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttachResult", function() { return _components_AttachResult_AttachResult__WEBPACK_IMPORTED_MODULE_3__["AttachResult"]; });

/* harmony import */ var _components_UserActions_UserActivity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UserActions/UserActivity */ "./src/components/UserActions/UserActivity.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserActivity", function() { return _components_UserActions_UserActivity__WEBPACK_IMPORTED_MODULE_4__["UserActivity"]; });

/* harmony import */ var _components_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/UserActions/UserActions */ "./src/components/UserActions/UserActions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return _components_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_5__["UserActions"]; });

/* harmony import */ var _components_UserActions_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/UserActions/ClickedDocumentList */ "./src/components/UserActions/ClickedDocumentList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClickedDocumentList", function() { return _components_UserActions_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_6__["ClickedDocumentList"]; });

/* harmony import */ var _components_UserActions_QueryList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/UserActions/QueryList */ "./src/components/UserActions/QueryList.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return _components_UserActions_QueryList__WEBPACK_IMPORTED_MODULE_7__["QueryList"]; });

/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./rest/UserProfilingEndpoint */ "./src/rest/UserProfilingEndpoint.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfilingEndpoint", function() { return _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_8__["UserProfilingEndpoint"]; });

/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/UserProfileModel */ "./src/models/UserProfileModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_9__["UserProfileModel"]; });

/* harmony import */ var _components_ResultsFilter_ResultsFilter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ResultsFilter/ResultsFilter */ "./src/components/ResultsFilter/ResultsFilter.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return _components_ResultsFilter_ResultsFilter__WEBPACK_IMPORTED_MODULE_10__["ResultsFilter"]; });

/* harmony import */ var _components_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ViewedByCustomer/ViewedByCustomer */ "./src/components/ViewedByCustomer/ViewedByCustomer.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ViewedByCustomer", function() { return _components_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_11__["ViewedByCustomer"]; });

/* harmony import */ var _components_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ResultAction/ResultAction */ "./src/components/ResultAction/ResultAction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ResultAction", function() { return _components_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_12__["ResultAction"]; });

/* harmony import */ var _components_CopyToClipboard_CopyToClipboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/CopyToClipboard/CopyToClipboard */ "./src/components/CopyToClipboard/CopyToClipboard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboard", function() { return _components_CopyToClipboard_CopyToClipboard__WEBPACK_IMPORTED_MODULE_13__["CopyToClipboard"]; });

/* harmony import */ var _components_TopQueries_TopQueries__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/TopQueries/TopQueries */ "./src/components/TopQueries/TopQueries.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TopQueries", function() { return _components_TopQueries_TopQueries__WEBPACK_IMPORTED_MODULE_14__["TopQueries"]; });

// This entry point defines all the components that are included in the extensions.

















/***/ }),

/***/ "./src/components/ActionButton/ActionButton.ts":
/*!*****************************************************!*\
  !*** ./src/components/ActionButton/ActionButton.ts ***!
  \*****************************************************/
/*! exports provided: ActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionButton", function() { return ActionButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * The _ActionButton_ component is a simple button allowing to show an icon, text, and tooltip.
 *
 * ```html
 * <button class='CoveoActionButton'></button>
 * ```
 */
var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton(element, options, bindings) {
        var _this = _super.call(this, element, ActionButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ActionButton, options);
        if (_this.options.icon || _this.options.title) {
            _this.render();
        }
        else {
            console.warn('The action button cannot render since no icon nor title is defined.');
            Coveo.$$(_this.element).hide();
        }
        if (_this.options.click) {
            Coveo.$$(element).on('click', function () { return _this.options.click(); });
        }
        return _this;
    }
    /**
     * Updates the button icon.
     * @param icon Markup of the SVG icon to set.
     */
    ActionButton.prototype.updateIcon = function (icon) {
        var iconElement = this.element.querySelector('.coveo-actionbutton_icon');
        if (iconElement && icon && icon != iconElement.innerHTML) {
            iconElement.innerHTML = icon;
        }
    };
    /**
     * Updates the button tooltip.
     * @param tooltip The tooltip to set.
     */
    ActionButton.prototype.updateTooltip = function (tooltip) {
        if (tooltip && tooltip != this.element.title) {
            this.element.title = tooltip;
        }
    };
    ActionButton.prototype.render = function () {
        this.applyButtonStyles();
        if (this.options.icon) {
            this.appendIcon();
        }
        if (this.options.title) {
            this.appendTitle();
        }
        if (this.options.tooltip) {
            this.appendTooltip();
        }
    };
    ActionButton.prototype.applyButtonStyles = function () {
        this.element.classList.add('coveo-actionbutton');
        if (this.options.icon && !this.options.title) {
            this.element.classList.add('coveo-actionbutton-icononly');
        }
    };
    ActionButton.prototype.createIconElement = function () {
        var iconElement = document.createElement('span');
        iconElement.classList.add('coveo-icon', 'coveo-actionbutton_icon');
        iconElement.innerHTML = this.options.icon;
        return iconElement;
    };
    ActionButton.prototype.createTitleElement = function () {
        var titleElement = document.createElement('span');
        titleElement.classList.add('coveo-actionbutton_title');
        titleElement.innerText = this.options.title;
        return titleElement;
    };
    ActionButton.prototype.appendIcon = function () {
        this.element.appendChild(this.createIconElement());
    };
    ActionButton.prototype.appendTitle = function () {
        this.element.appendChild(this.createTitleElement());
    };
    ActionButton.prototype.appendTooltip = function () {
        this.element.title = this.options.tooltip;
    };
    ActionButton.ID = 'ActionButton';
    /**
     * The possible options for _ActionButton_.
     * @componentOptions
     */
    ActionButton.options = {
        /**
         * Specifies the button label. The text is displayed on a single line, next to the icon.
         *
         * Default is the empty string.
         *
         * ```html
         * <button class='CoveoActionButton' data-title='My Button'></button>
         * ```
         */
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the button tooltip text.
         *
         * Default is the empty string.
         *
         * ```html
         * <button class='CoveoActionButton' data-tooltip='My button tooltip'></button>
         * ```
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the button SVG icon.
         * Note: The SVG markup has to be HTML encoded when set using the HTML attributes.
         *
         * Default is the empty string.
         *
         * For example, with this SVG markup:
         *
         * ```xml
         * <svg width="1em" height="1em">...</svg>
         * ```
         *
         * The attribute would be set like this:
         *
         * ```html
         * <button class='CoveoActionButton' data-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
         * ```
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * Specifies the handler called when the button is clicked.
         *
         * Default is `null`.
         *
         * This option must be set in JavaScript when initializing the component.
         */
        click: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }, { required: true }),
    };
    return ActionButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ActionButton);


/***/ }),

/***/ "./src/components/ActionButton/DisableableButton.ts":
/*!**********************************************************!*\
  !*** ./src/components/ActionButton/DisableableButton.ts ***!
  \**********************************************************/
/*! exports provided: DisabledState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisabledState", function() { return DisabledState; });
var DisabledState = /** @class */ (function () {
    function DisabledState(disabledButton) {
        this.name = 'DisabledState';
        this.onStateEntry = function () {
            this.element.classList.add(DisabledState.DISABLED_CLASS_NAME);
            this.element.setAttribute('disabled', '');
        };
        this.onStateExit = function () {
            this.element.classList.remove(DisabledState.DISABLED_CLASS_NAME);
            this.element.removeAttribute('disabled');
        };
        this.click = function () { };
        this.icon = disabledButton.options.disabledIcon;
        this.tooltip = disabledButton.options.disabledTooltip;
    }
    DisabledState.DISABLED_CLASS_NAME = 'coveo-actionbutton-disabled';
    return DisabledState;
}());



/***/ }),

/***/ "./src/components/ActionButton/DisableableToggleActionButton.ts":
/*!**********************************************************************!*\
  !*** ./src/components/ActionButton/DisableableToggleActionButton.ts ***!
  \**********************************************************************/
/*! exports provided: DisableableToggleActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableableToggleActionButton", function() { return DisableableToggleActionButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _StatefulActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatefulActionButton */ "./src/components/ActionButton/StatefulActionButton.ts");
/* harmony import */ var _ToggleableButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ToggleableButton */ "./src/components/ActionButton/ToggleableButton.ts");
/* harmony import */ var _DisableableButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DisableableButton */ "./src/components/ActionButton/DisableableButton.ts");
/* harmony import */ var _ToggleActionButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ToggleActionButton */ "./src/components/ActionButton/ToggleActionButton.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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





var DisableableToggleActionButton = /** @class */ (function (_super) {
    __extends(DisableableToggleActionButton, _super);
    function DisableableToggleActionButton(element, options, bindings) {
        var _this = _super.call(this, element, DisableableToggleActionButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, DisableableToggleActionButton, options);
        _this.createInnerButton(bindings);
        return _this;
    }
    /**
     * Indicates whether the toggle button is in the activated state.
     */
    DisableableToggleActionButton.prototype.isActivated = function () {
        return this.innerStatefulActionButton.getCurrentState() === this.activatedState;
    };
    /**
     * Indicates whether the disableable toggle button is in the disable state.
     */
    DisableableToggleActionButton.prototype.isDisabled = function () {
        return this.innerStatefulActionButton.getCurrentState() === this.disabledState;
    };
    /**
     * Sets the toggle button to the specified state.
     * @param activated Whether the button is activated.
     */
    DisableableToggleActionButton.prototype.setActivated = function (activated) {
        if (this.isDisabled() && !activated) {
            this.innerStatefulActionButton.switchTo(this.deactivatedState);
        }
        if (!this.isDisabled() && activated !== this.isActivated()) {
            this.innerStatefulActionButton.switchTo(activated ? this.activatedState : this.deactivatedState);
        }
    };
    DisableableToggleActionButton.prototype.setEnabled = function (enabled) {
        if (enabled) {
            this.enable();
        }
        else {
            this.disable();
        }
    };
    DisableableToggleActionButton.prototype.disable = function () {
        if (this.isDisabled()) {
            return;
        }
        if (this.isActivated()) {
            this.innerStatefulActionButton.switchTo(this.deactivatedState);
        }
        this.innerStatefulActionButton.switchTo(this.disabledState);
    };
    DisableableToggleActionButton.prototype.enable = function () {
        if (this.isDisabled()) {
            this.innerStatefulActionButton.switchTo(this.deactivatedState);
        }
    };
    DisableableToggleActionButton.prototype.onClick = function () {
        if (this.isDisabled()) {
            return;
        }
        this.setActivated(!this.isActivated());
        if (this.options.click) {
            this.options.click();
        }
    };
    DisableableToggleActionButton.prototype.createInnerButton = function (bindings) {
        this.deactivatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_2__["ToggleDeactivatedState"](this);
        this.disabledState = new _DisableableButton__WEBPACK_IMPORTED_MODULE_3__["DisabledState"](this);
        this.activatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_2__["ToggleActivatedState"](this);
        this.innerStatefulActionButton = new _StatefulActionButton__WEBPACK_IMPORTED_MODULE_1__["StatefulActionButton"](this.element, {
            initialState: this.deactivatedState,
            states: [this.deactivatedState, this.activatedState, this.disabledState],
            allowedTransitions: [
                { from: this.deactivatedState, to: this.disabledState },
                { from: this.disabledState, to: this.deactivatedState },
                { from: this.deactivatedState, to: this.activatedState },
                { from: this.activatedState, to: this.deactivatedState },
            ],
        }, bindings);
    };
    DisableableToggleActionButton.ID = 'DisableableToggleActionButton';
    DisableableToggleActionButton.ACTIVATED_CLASS_NAME = 'coveo-toggleactionbutton-activated';
    DisableableToggleActionButton.options = __assign(__assign({}, _ToggleActionButton__WEBPACK_IMPORTED_MODULE_4__["ToggleActionButton"].options), { disabledTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(), disabledIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption() });
    return DisableableToggleActionButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(DisableableToggleActionButton);


/***/ }),

/***/ "./src/components/ActionButton/StatefulActionButton.ts":
/*!*************************************************************!*\
  !*** ./src/components/ActionButton/StatefulActionButton.ts ***!
  \*************************************************************/
/*! exports provided: StatefulActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatefulActionButton", function() { return StatefulActionButton; });
/* harmony import */ var _ActionButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionButton */ "./src/components/ActionButton/ActionButton.ts");
var __assign = (undefined && undefined.__assign) || function () {
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

/**
 * An action button able to handle multiple states and their transitions.
 */
var StatefulActionButton = /** @class */ (function () {
    function StatefulActionButton(element, options, bindings) {
        var _a;
        this.element = element;
        this.options = options;
        this.bindings = bindings;
        var optionsValidity = this.checkOptionsValidity();
        if (!optionsValidity.areValid) {
            console.warn("Cannot render the stateful action button because options are invalid.\n\t" + optionsValidity.errorMessage);
            return;
        }
        this.currentState = this.options.initialState;
        (_a = this.currentState.onStateEntry) === null || _a === void 0 ? void 0 : _a.apply(this);
        this.innerActionButton = new _ActionButton__WEBPACK_IMPORTED_MODULE_0__["ActionButton"](element, __assign(__assign({}, this.options.initialState), { click: this.handleClick.bind(this) }), bindings);
    }
    /**
     * Switch the state of the instance if the state and the transition between the current and new state are allowed.
     * @param state a state to try to switch to
     */
    StatefulActionButton.prototype.switchTo = function (state) {
        if (this.options.states.indexOf(state) === -1) {
            console.warn("State '" + state.name + "' does not exist on this StatefulActionButton\nEnsure to use the object references used at the instantiation.");
            return;
        }
        if (!this.isTransitionAllowed(state)) {
            console.warn("Transition from State '" + this.currentState.name + "' to State '" + state.name + "' is not allowed on this StatefulActionButton.\nEnsure to use the object references used at the instantiation.");
            return;
        }
        var _a = [this.currentState.onStateExit, state.onStateEntry], oldStateExit = _a[0], newStateEntry = _a[1];
        this.innerActionButton.updateIcon(state.icon);
        this.innerActionButton.updateTooltip(state.tooltip);
        this.currentState = state;
        oldStateExit === null || oldStateExit === void 0 ? void 0 : oldStateExit.call(this);
        newStateEntry === null || newStateEntry === void 0 ? void 0 : newStateEntry.call(this);
    };
    /**
     * Return the current state of the instance.
     */
    StatefulActionButton.prototype.getCurrentState = function () {
        return this.currentState;
    };
    /**
     * Check if the options given to the constructor are valid.
     * If not, it will also display the appropriate warning.
     */
    StatefulActionButton.prototype.checkOptionsValidity = function () {
        var _a;
        if (!((_a = this.options.states) === null || _a === void 0 ? void 0 : _a.length)) {
            return { areValid: false, errorMessage: 'States is not defined or empty.' };
        }
        if (!this.options.initialState) {
            return { areValid: false, errorMessage: 'InitialState is not defined.' };
        }
        if (this.options.states.indexOf(this.options.initialState) < 0) {
            return { areValid: false, errorMessage: 'InitialState is not in the list of state.' };
        }
        return !this.options.allowedTransitions ? { areValid: true } : this.areTransitionsValid();
    };
    StatefulActionButton.prototype.areTransitionsValid = function () {
        for (var index = 0; index < this.options.allowedTransitions.length; index++) {
            var transition = this.options.allowedTransitions[index];
            if (this.options.states.indexOf(transition.from) === -1) {
                return { areValid: false, errorMessage: this.generateInvalidTransitionMessage(index, true) };
            }
            if (this.options.states.indexOf(transition.to) === -1) {
                return { areValid: false, errorMessage: this.generateInvalidTransitionMessage(index, false) };
            }
        }
        return { areValid: true };
    };
    StatefulActionButton.prototype.generateInvalidTransitionMessage = function (transitionNumber, isOrigin) {
        return (isOrigin ? 'Origin' : 'Destination') + " of Transition #" + transitionNumber + " is not in the list of states. Ensure to use the same object reference as in the options.states.";
    };
    /**
     * Check if a transition from the current state to @param state is allowed.
     * @param state the destination of the transition
     */
    StatefulActionButton.prototype.isTransitionAllowed = function (state) {
        var _this = this;
        if (!this.options.allowedTransitions) {
            return true;
        }
        return this.options.allowedTransitions.some(function (transition) { return transition.from === _this.currentState && transition.to === state; });
    };
    /**
     * Handle user click.
     */
    StatefulActionButton.prototype.handleClick = function () {
        this.currentState.click();
    };
    StatefulActionButton.ID = 'StatefulActionButton';
    return StatefulActionButton;
}());



/***/ }),

/***/ "./src/components/ActionButton/ToggleActionButton.ts":
/*!***********************************************************!*\
  !*** ./src/components/ActionButton/ToggleActionButton.ts ***!
  \***********************************************************/
/*! exports provided: ToggleActionButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleActionButton", function() { return ToggleActionButton; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ToggleableButton */ "./src/components/ActionButton/ToggleableButton.ts");
/* harmony import */ var _StatefulActionButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StatefulActionButton */ "./src/components/ActionButton/StatefulActionButton.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();



var ToggleActionButton = /** @class */ (function (_super) {
    __extends(ToggleActionButton, _super);
    function ToggleActionButton(element, options, bindings) {
        var _this = _super.call(this, element, ToggleActionButton.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ToggleActionButton, options);
        _this.createInnerButton(bindings);
        return _this;
    }
    /**
     * Indicates whether the toggle button is in the activated state.
     */
    ToggleActionButton.prototype.isActivated = function () {
        return this.innerStatefulActionButton.getCurrentState() === this.activatedState;
    };
    /**
     * Sets the toggle button to the specified state.
     * @param activated Whether the button is activated.
     */
    ToggleActionButton.prototype.setActivated = function (activated) {
        if (activated !== this.isActivated()) {
            this.innerStatefulActionButton.switchTo(activated ? this.activatedState : this.deactivatedState);
        }
    };
    ToggleActionButton.prototype.onClick = function () {
        this.setActivated(!this.isActivated());
        if (this.options.click) {
            this.options.click();
        }
    };
    ToggleActionButton.prototype.createInnerButton = function (bindings) {
        this.deactivatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__["ToggleDeactivatedState"](this);
        this.activatedState = new _ToggleableButton__WEBPACK_IMPORTED_MODULE_1__["ToggleActivatedState"](this);
        this.innerStatefulActionButton = new _StatefulActionButton__WEBPACK_IMPORTED_MODULE_2__["StatefulActionButton"](this.element, {
            initialState: this.deactivatedState,
            states: [this.deactivatedState, this.activatedState],
            allowedTransitions: [
                { from: this.deactivatedState, to: this.activatedState },
                { from: this.activatedState, to: this.deactivatedState },
            ],
        }, bindings);
    };
    ToggleActionButton.ID = 'ToggleActionButton';
    ToggleActionButton.ACTIVATED_CLASS_NAME = 'coveo-toggleactionbutton-activated';
    ToggleActionButton.options = {
        /**
         * Specifies the button SVG icon displayed to activate the button.
         * Note: The SVG markup has to be HTML encoded when set using the HTML attributes.
         *
         * Default is the empty string.
         *
         * For example, with this SVG markup:
         *
         * ```xml
         * <svg width="1em" height="1em">...</svg>
         * ```
         *
         * The attribute would be set like this:
         *
         * ```html
         * <button class='CoveoToggleActionButton' data-activate-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
         * ```
         */
        activateIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'deactivatedIcon' }),
        /**
         * Specifies the button tooltip text displayed to activate the button.
         *
         * Default is the empty string.
         *
         * ```html
         * <button class='CoveoToggleActionButton' data-activate-tooltip='Activate the feature'></button>
         * ```
         */
        activateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'deactivatedTooltip' }),
        /**
         * Specifies the button icon displayed to deactivate the button.
         *
         * Default is the empty string.
         *
         * For example, with this SVG markup:
         *
         * ```xml
         * <svg width="1em" height="1em">...</svg>
         * ```
         *
         * The attribute would be set like this:
         *
         * ```html
         * <button class='CoveoToggleActionButton' data-deactivate-icon='&lt;svg width=&quot;1em&quot; height=&quot;1em&quot;&gt;...&lt;/svg&gt;'></button>
         * ```
         */
        deactivateIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'activatedIcon' }),
        /**
         * Specifies the button tooltip displayed to deactivate the button.
         *
         * Default is the empty string.
         *
         * ```html
         * <button class='CoveoToggleActionButton' data-deactivate-tooltip='Deactivate the feature'></button>
         * ```
         */
        deactivateTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ alias: 'activatedTooltip' }),
        /**
         * Specifies the handler called when the button is clicked.
         *
         * Default is `null`.
         *
         * This option is set in JavaScript when initializing the component.
         */
        click: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
        /**
         * Specifies the handler called when the button is activated.
         *
         * Default is `null`.
         *
         * This option is set in JavaScript when initializing the component.
         */
        activate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
        /**
         * Specifies the handler called when the button is deactivated.
         *
         * Default is `null`.
         *
         * This option is set in JavaScript when initializing the component.
         */
        deactivate: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }),
    };
    return ToggleActionButton;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ToggleActionButton);


/***/ }),

/***/ "./src/components/ActionButton/ToggleableButton.ts":
/*!*********************************************************!*\
  !*** ./src/components/ActionButton/ToggleableButton.ts ***!
  \*********************************************************/
/*! exports provided: ToggleDeactivatedState, ToggleActivatedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleDeactivatedState", function() { return ToggleDeactivatedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleActivatedState", function() { return ToggleActivatedState; });
var ToggleDeactivatedState = /** @class */ (function () {
    function ToggleDeactivatedState(toggleableButton) {
        this.name = 'ToggleDeactivatedState';
        this.icon = toggleableButton.options.activateIcon;
        this.tooltip = toggleableButton.options.activateTooltip;
        this.click = function () { return toggleableButton.onClick(); };
    }
    return ToggleDeactivatedState;
}());

var ToggleActivatedState = /** @class */ (function () {
    function ToggleActivatedState(toggleableButton) {
        this.name = 'ToggleActivatedState';
        this.onStateEntry = function () {
            var _a;
            this.element.classList.add(ToggleActivatedState.ACTIVATED_CLASS_NAME);
            this.element.setAttribute('aria-pressed', 'true');
            (_a = toggleableButton.options.activate) === null || _a === void 0 ? void 0 : _a.apply(toggleableButton);
        };
        this.onStateExit = function () {
            var _a;
            this.element.classList.remove(ToggleActivatedState.ACTIVATED_CLASS_NAME);
            this.element.setAttribute('aria-pressed', 'false');
            (_a = toggleableButton.options.deactivate) === null || _a === void 0 ? void 0 : _a.apply(toggleableButton);
        };
        this.click = function () { return toggleableButton.onClick(); };
        this.icon = toggleableButton.options.deactivateIcon;
        this.tooltip = toggleableButton.options.deactivateTooltip;
    }
    ToggleActivatedState.ACTIVATED_CLASS_NAME = 'coveo-toggleactionbutton-activated';
    return ToggleActivatedState;
}());



/***/ }),

/***/ "./src/components/AttachResult/AttachResult.ts":
/*!*****************************************************!*\
  !*** ./src/components/AttachResult/AttachResult.ts ***!
  \*****************************************************/
/*! exports provided: AttachResult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachResult", function() { return AttachResult; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Events */ "./src/components/AttachResult/Events.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/components/AttachResult/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The AttachResult component allows a user to link a search result to something else in their external
 * system, for instance a case, incident, request, etc.
 */
var AttachResult = /** @class */ (function (_super) {
    __extends(AttachResult, _super);
    function AttachResult(element, options, bindings, queryResult) {
        var _this = _super.call(this, element, AttachResult.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryResult = queryResult;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, AttachResult, options);
        _this.queryResult = _this.queryResult || _this.resolveResult();
        _this.initialize();
        _this.bind.on(_this.element, 'click', _this.toggleAttached);
        return _this;
    }
    /**
     * Gets whether or not the result is currently attached.
     */
    AttachResult.prototype.isAttached = function () {
        return !!this.attached;
    };
    /**
     * Attach the query result.
     */
    AttachResult.prototype.attach = function () {
        var _this = this;
        if (this.attached || this.loading) {
            return Promise.resolve();
        }
        this.setLoading(true);
        return this.options
            .attach(this.queryResult)
            .then(function () {
            _this.attached = true;
            _this.usageAnalytics.logClickEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseAttach, {}, _this.queryResult, _this.element);
            _this.logAnalyticsCaseEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseAttach);
            Coveo.$$(_this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_2__["AttachResultEvents"].Attach, { queryResult: _this.queryResult });
        })
            .finally(function () {
            _this.setLoading(false);
        });
    };
    /**
     * Detach the query result.
     */
    AttachResult.prototype.detach = function () {
        var _this = this;
        if (!this.attached && !this.loading) {
            return Promise.resolve();
        }
        this.setLoading(true);
        return this.options
            .detach(this.queryResult)
            .then(function () {
            _this.attached = false;
            _this.logAnalyticsCaseEvent(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["analyticsActionCauseList"].caseDetach);
            Coveo.$$(_this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_2__["AttachResultEvents"].Detach, { queryResult: _this.queryResult });
        })
            .finally(function () {
            _this.setLoading(false);
        });
    };
    /** Toggle the state of the component. If the current result is not attached, attach it, if not, detach it. */
    AttachResult.prototype.toggleAttached = function () {
        this.attached ? this.detach() : this.attach();
    };
    AttachResult.prototype.initialize = function () {
        this.buttonElement = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div').el;
        this.element.appendChild(this.buttonElement);
        this.tooltipElement = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', {
            className: 'coveo-caption-for-icon',
        }).el;
        this.element.appendChild(this.tooltipElement);
        this.updateInitialAttachedState();
    };
    AttachResult.prototype.updateInitialAttachedState = function () {
        var _this = this;
        this.attached = false;
        this.render();
        // Resolve the current result for the component and the initial state.
        if (this.options.isAttached) {
            this.setLoading(true);
            this.options
                .isAttached(this.queryResult)
                .then(function (attached) {
                _this.attached = attached;
            })
                .catch(function (error) {
                _this.logger.error('Error retrieving initial result attached state.', error);
            })
                .finally(function () {
                _this.setLoading(false);
            });
        }
    };
    /** Set the loading property and updates the component UI. */
    AttachResult.prototype.setLoading = function (loading) {
        this.loading = loading;
        this.render();
    };
    AttachResult.prototype.logAnalyticsCaseEvent = function (cause) {
        var customData = {
            resultUriHash: this.queryResult.raw.urihash,
            author: this.queryResult.raw.author,
            articleID: this.queryResult.raw[this.options.articleIdField],
            caseID: this.options.caseId,
        };
        this.usageAnalytics.logCustomEvent(cause, customData, this.element, this.queryResult);
    };
    AttachResult.prototype.render = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-attached');
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-attach');
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).removeClass('coveo-icon-loading');
        if (this.loading) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-loading');
            this.buttonElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_1__["wait"];
        }
        else {
            this.buttonElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_1__["paperclipIcon"];
            if (this.attached) {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-attached');
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.tooltipElement).text(this.options.detachCaption);
            }
            else {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.buttonElement).addClass('coveo-icon-attach');
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.tooltipElement).text(this.options.attachCaption);
            }
        }
    };
    AttachResult.ID = 'AttachResult';
    AttachResult.options = {
        attachCaption: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(AttachResult.ID + "_Attach"),
        }),
        detachCaption: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(AttachResult.ID + "_Detach"),
        }),
        articleIdField: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'permanentid',
        }),
        caseId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        attach: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (name) { return function (result) {
            return new Promise(function (resolve, reject) {
                console.log('attached ', result);
                resolve();
            });
        }; }, {
            defaultFunction: function () { return function (result) {
                return new Promise(function (resolve, reject) {
                    console.log('attached ', result);
                    resolve();
                });
            }; },
        }),
        detach: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (name) { return function (result) {
            return new Promise(function (resolve, reject) {
                console.log('detached ', result);
                resolve();
            });
        }; }, {
            defaultFunction: function () { return function (result) {
                return new Promise(function (resolve, reject) {
                    console.log('detached ', result);
                    resolve();
                });
            }; },
        }),
    };
    return AttachResult;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerComponentFields(AttachResult.ID, ['urihash']);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(AttachResult);


/***/ }),

/***/ "./src/components/AttachResult/Events.ts":
/*!***********************************************!*\
  !*** ./src/components/AttachResult/Events.ts ***!
  \***********************************************/
/*! exports provided: AttachResultEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttachResultEvents", function() { return AttachResultEvents; });
/**
 * List of possible event types triggered by the **AttachResult** component
 * when a user interacts with it.
 */
var AttachResultEvents;
(function (AttachResultEvents) {
    AttachResultEvents["Attach"] = "attach";
    AttachResultEvents["Detach"] = "detach";
})(AttachResultEvents || (AttachResultEvents = {}));


/***/ }),

/***/ "./src/components/AttachResult/Strings.ts":
/*!************************************************!*\
  !*** ./src/components/AttachResult/Strings.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    AttachResult_Attach: 'Attach Result',
    AttachResult_Detach: 'Detach Result',
});


/***/ }),

/***/ "./src/components/CopyToClipboard/CopyToClipboard.ts":
/*!***********************************************************!*\
  !*** ./src/components/CopyToClipboard/CopyToClipboard.ts ***!
  \***********************************************************/
/*! exports provided: CopyToClipboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyToClipboard", function() { return CopyToClipboard; });
/* harmony import */ var _ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ResultAction/ResultAction */ "./src/components/ResultAction/ResultAction.ts");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/components/CopyToClipboard/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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




var CopyToClipboard = /** @class */ (function (_super) {
    __extends(CopyToClipboard, _super);
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param result The result of the query in which this resultAction exists.
     */
    function CopyToClipboard(element, options, bindings, result) {
        var _this = _super.call(this, element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].initComponentOptions(element, CopyToClipboard, options), bindings, result) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.result = result;
        _super.prototype.init.call(_this);
        return _this;
    }
    CopyToClipboard.prototype.doAction = function () {
        this.usageAnalytics.logClickEvent({ name: 'copyToClipboard', type: 'resultAction' }, {}, this.result, this.element);
        this.copyToClipboard(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["StringUtils"].buildStringTemplateFromResult(this.options.template, this.result));
    };
    CopyToClipboard.prototype.copyToClipboard = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(navigator && navigator.clipboard && navigator.clipboard.writeText)) return [3 /*break*/, 5];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, navigator.clipboard.writeText(text)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.logger.error('Copy to clipboard failed.', text, err_1);
                        this.copyToClipboardFallback(text);
                        return [3 /*break*/, 4];
                    case 4: return [3 /*break*/, 6];
                    case 5:
                        this.copyToClipboardFallback(text);
                        _a.label = 6;
                    case 6:
                        this.setToolipText(this.options.successTooltip);
                        this.refreshTooltip();
                        return [2 /*return*/];
                }
            });
        });
    };
    CopyToClipboard.prototype.refreshTooltip = function () {
        var _this = this;
        setTimeout(function () { return _this.setToolipText(_this.options.tooltip); }, 500);
    };
    CopyToClipboard.prototype.setToolipText = function (text) {
        var tooltipElement = this.element.querySelector('.coveo-caption-for-icon');
        if (tooltipElement && text) {
            tooltipElement.innerText = text;
        }
    };
    /**
     * Sadly that's the only way of doing in in IE11 and in lockerservice.
     */
    CopyToClipboard.prototype.copyToClipboardFallback = function (text) {
        var el = document.createElement('textarea');
        el.value = text;
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
    };
    CopyToClipboard.ID = 'CopyToClipboard';
    /**
     * The possible options for _ResultAction_.
     * @componentOptions
     */
    CopyToClipboard.options = {
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: _utils_icons__WEBPACK_IMPORTED_MODULE_2__["copy"] }),
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('CopyToClipboard_copy'); } }),
        successTooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildCustomOption(function (tooltip) { return tooltip; }, { defaultFunction: function () { return Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["l"])('CopyToClipboard_copied'); } }),
        template: coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["ComponentOptions"].buildStringOption({ defaultValue: '${title}\n${clickUri}' }),
    };
    return CopyToClipboard;
}(_ResultAction_ResultAction__WEBPACK_IMPORTED_MODULE_0__["ResultAction"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerComponentFields(CopyToClipboard.ID, ['title', 'clickUri']);
coveo_search_ui__WEBPACK_IMPORTED_MODULE_1__["Initialization"].registerAutoCreateComponent(CopyToClipboard);


/***/ }),

/***/ "./src/components/CopyToClipboard/Strings.ts":
/*!***************************************************!*\
  !*** ./src/components/CopyToClipboard/Strings.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    CopyToClipboard_copy: 'Copy',
    CopyToClipboard_copied: 'Copied!',
});


/***/ }),

/***/ "./src/components/ResultAction/ResultAction.ts":
/*!*****************************************************!*\
  !*** ./src/components/ResultAction/ResultAction.ts ***!
  \*****************************************************/
/*! exports provided: ResultAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultAction", function() { return ResultAction; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * The base class for all ResultAction components.
 * Its main responsibility is handling the visual elements of the Result Action.
 */
var ResultAction = /** @class */ (function (_super) {
    __extends(ResultAction, _super);
    /**
     * Construct a ResultAction component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     * @param queryResult The result of the query in which this resultAction exists.
     */
    function ResultAction(element, options, bindings, queryResult) {
        var _this = _super.call(this, element, ResultAction.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.queryResult = queryResult;
        _this.isInitialized = false;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultAction, options);
        _this.queryResult = _this.queryResult || _this.resolveResult();
        // Hide until initialized.
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(_this.element).addClass('coveo-hidden');
        _this.bind.on(_this.element, 'click', function () { return _this.doAction(); });
        return _this;
    }
    /**
     * Initializes the component if it is not already initialized.
     */
    ResultAction.prototype.init = function () {
        if (!this.isInitialized) {
            this.show();
            this.isInitialized = true;
        }
        else {
            this.logger.debug('Attempted to initialize ResultAction that was already initialized.');
        }
    };
    /**
     * Deactivate the component if it is initialized.
     * @param e The reason for the deactivation.
     */
    ResultAction.prototype.deactivate = function (e) {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).remove();
        this.logger.warn(e);
        this.isInitialized = false;
    };
    /**
     * Make the result action button visible.
     */
    ResultAction.prototype.show = function () {
        Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.element).removeClass('coveo-hidden');
        if (this.options.icon) {
            var icon = document.createElement('span');
            icon.innerHTML = this.options.icon;
            icon.className = 'coveo-icon';
            this.element.appendChild(icon);
        }
        if (this.options.tooltip) {
            var tooltip = document.createElement('span');
            tooltip.innerText = this.options.tooltip;
            tooltip.className = 'coveo-caption-for-icon';
            this.element.appendChild(tooltip);
        }
    };
    ResultAction.ID = 'ResultAction';
    /**
     * The possible options for _ResultAction_.
     * @componentOptions
     */
    ResultAction.options = {
        /**
         * See {@link IResultActionOptions.icon}
         * Optional. You may instead provide the icon by appending it as a child element.
         */
        icon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
        /**
         * See {@link IResultActionOptions.tooltip}
         * Optional. If no tooltip is provided, the tooltip popup will not appear.
         */
        tooltip: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption(),
    };
    return ResultAction;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));



/***/ }),

/***/ "./src/components/ResultsFilter/Events.ts":
/*!************************************************!*\
  !*** ./src/components/ResultsFilter/Events.ts ***!
  \************************************************/
/*! exports provided: ResultsFilterEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilterEvents", function() { return ResultsFilterEvents; });
/**
 * Events triggered by the **ResultsFilter** component.
 */
var ResultsFilterEvents;
(function (ResultsFilterEvents) {
    ResultsFilterEvents["Click"] = "click";
})(ResultsFilterEvents || (ResultsFilterEvents = {}));


/***/ }),

/***/ "./src/components/ResultsFilter/ResultsFilter.ts":
/*!*******************************************************!*\
  !*** ./src/components/ResultsFilter/ResultsFilter.ts ***!
  \*******************************************************/
/*! exports provided: ResultsFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsFilter", function() { return ResultsFilter; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Events */ "./src/components/ResultsFilter/Events.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Strings */ "./src/components/ResultsFilter/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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



/**
 * The ResultsFilter component allows a user to click a checkbox to
 * search only for matching results.
 */
var ResultsFilter = /** @class */ (function (_super) {
    __extends(ResultsFilter, _super);
    function ResultsFilter(element, options, bindings) {
        var _this = _super.call(this, element, ResultsFilter.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ResultsFilter, options);
        _this.initialize();
        _this.queryStateModel.registerNewAttribute(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), false);
        _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].buildingQuery, _this.handleBuildingQuery.bind(_this));
        _this.bind.onQueryState('change:', coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), _this.handleQueryStateChange.bind(_this));
        return _this;
    }
    ResultsFilter.prototype.isSelected = function () {
        return this.checkbox && this.checkbox.isSelected();
    };
    ResultsFilter.prototype.toggle = function () {
        if (this.isSelected()) {
            this.checkbox.reset();
        }
        else {
            this.checkbox.select(true);
        }
    };
    ResultsFilter.prototype.initialize = function () {
        var _this = this;
        var mainSection = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', { className: 'CoveoFacet' });
        var headerSection = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('div', { className: 'coveo-facet-header' });
        var labelDiv = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])('label', {
            className: 'coveo-facet-value-label-wrapper',
        }).el;
        headerSection.append(labelDiv);
        mainSection.append(headerSection.el);
        this.createCheckbox().then(function (checkbox) {
            _this.checkbox = checkbox;
            labelDiv.appendChild(_this.checkbox.getElement());
        });
        this.element.appendChild(mainSection.el);
    };
    ResultsFilter.prototype.createCheckbox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(Coveo.Checkbox === undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["load"])('Checkbox')];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Checkbox"](this.handleCheckboxChange.bind(this), this.options.text)];
                }
            });
        });
    };
    ResultsFilter.prototype.handleCheckboxChange = function (checkbox) {
        this.queryStateModel.set(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryStateModel"].getFacetId(ResultsFilter.ID), this.checkbox.isSelected());
        this.triggerQuery();
        Coveo.$$(this.root).trigger(_Events__WEBPACK_IMPORTED_MODULE_1__["ResultsFilterEvents"].Click, { checked: this.checkbox.isSelected() });
    };
    ResultsFilter.prototype.triggerQuery = function () {
        this.usageAnalytics.logSearchEvent({ name: ResultsFilter.ID, type: 'misc' }, { filteredResults: this.isSelected() });
        this.queryController.executeQuery({ origin: this });
    };
    ResultsFilter.prototype.handleQueryStateChange = function (args) {
        if (args['value']) {
            this.checkbox.select(false);
        }
        else {
            this.checkbox.reset();
        }
    };
    ResultsFilter.prototype.handleBuildingQuery = function (args) {
        if (this.isSelected()) {
            var values = this.options.getValues();
            args.queryBuilder.advancedExpression.add("@" + this.options.field + "=(" + values.join(',') + ")");
        }
    };
    ResultsFilter.ID = 'ResultsFilter';
    ResultsFilter.options = {
        text: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ResultsFilter.ID + "_Label"),
        }),
        field: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'urihash',
        }),
        getValues: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (name) { return function () { return new Array(); }; }, {
            defaultFunction: function () { return function () { return new Array(); }; },
        }),
    };
    return ResultsFilter;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ResultsFilter);


/***/ }),

/***/ "./src/components/ResultsFilter/Strings.ts":
/*!*************************************************!*\
  !*** ./src/components/ResultsFilter/Strings.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    ResultsFilter_Label: 'Filter Results',
});


/***/ }),

/***/ "./src/components/TopQueries/Strings.ts":
/*!**********************************************!*\
  !*** ./src/components/TopQueries/Strings.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    TopQueries_title: 'People also searched for',
});


/***/ }),

/***/ "./src/components/TopQueries/TopQueries.ts":
/*!*************************************************!*\
  !*** ./src/components/TopQueries/TopQueries.ts ***!
  \*************************************************/
/*! exports provided: TopQueries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopQueries", function() { return TopQueries; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Strings */ "./src/components/TopQueries/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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


/**
 * The TopQueries component suggests the top searched queries in the specific context and links the search results of the suggestions to the user
 */
var TopQueries = /** @class */ (function (_super) {
    __extends(TopQueries, _super);
    /**
     * Construct a TopQueries component.
     * @param element The HTML element bound to this component.
     * @param options The options that can be provided to this component.
     * @param bindings The bindings, or environment within which this component exists.
     */
    function TopQueries(element, options, bindings) {
        var _this = _super.call(this, element, TopQueries.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, TopQueries, options);
        var titleElem = document.createElement('h2');
        titleElem.innerText = options.title;
        _this.listElem = document.createElement('ul');
        _this.element.appendChild(titleElem);
        _this.element.appendChild(_this.listElem);
        _this.updateTopQueries();
        return _this;
    }
    TopQueries.prototype.updateTopQueries = function (suggestionQueryParams) {
        var _a;
        if (suggestionQueryParams === void 0) { suggestionQueryParams = this.options.suggestionQueryParams; }
        return __awaiter(this, void 0, void 0, function () {
            var suggestions, err_1;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.show();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.queryController.getEndpoint().getQuerySuggest(suggestionQueryParams)];
                    case 2:
                        suggestions = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.error("Failed to fetch query suggestions: " + err_1);
                        this.hide();
                        return [2 /*return*/];
                    case 4:
                        if (!((_a = suggestions === null || suggestions === void 0 ? void 0 : suggestions.completions) === null || _a === void 0 ? void 0 : _a.length) || suggestions.completions.length == 0) {
                            // Hide the widget if there are no query suggestions or data format is invalid
                            this.hide();
                        }
                        else {
                            suggestions.completions.forEach(function (completion) {
                                var li = document.createElement('li');
                                var a = document.createElement('a');
                                a.classList.add('coveo-link');
                                a.addEventListener('click', function () { return _this.options.onClick(completion.expression, _this); });
                                a.innerHTML = completion.expression;
                                li.appendChild(a);
                                _this.listElem.appendChild(li);
                            });
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    TopQueries.prototype.hide = function () {
        this.element.classList.add('coveo-hidden');
    };
    TopQueries.prototype.show = function () {
        this.element.classList.remove('coveo-hidden');
    };
    TopQueries.ID = 'TopQueries';
    /**
     * The possible options for the TopQueries component
     * @componentOptions
     */
    TopQueries.options = {
        suggestionQueryParams: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildJsonOption({ defaultValue: { q: '' } }),
        title: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('TopQueries_title') }),
        onClick: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (s) { return null; }, {
            defaultValue: function (expression, component) {
                component.usageAnalytics.logSearchEvent(TopQueries.topQueriesClickActionCause, {});
                component.queryStateModel.set('q', expression);
                component.queryController.executeQuery({ origin: component });
            },
        }),
    };
    TopQueries.topQueriesClickActionCause = {
        name: 'topQueriesClick',
        type: 'interface',
    };
    return TopQueries;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(TopQueries);


/***/ }),

/***/ "./src/components/UserActions/ClickedDocumentList.ts":
/*!***********************************************************!*\
  !*** ./src/components/UserActions/ClickedDocumentList.ts ***!
  \***********************************************************/
/*! exports provided: ClickedDocumentList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickedDocumentList", function() { return ClickedDocumentList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./src/models/UserProfileModel.ts");
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandableList */ "./src/components/UserActions/ExpandableList.ts");
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../rest/UserProfilingEndpoint */ "./src/rest/UserProfilingEndpoint.ts");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strings */ "./src/components/UserActions/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






/**
 * Display the list of the most recent clicked documents of a user.
 */
var ClickedDocumentList = /** @class */ (function (_super) {
    __extends(ClickedDocumentList, _super);
    /**
     * Create an instance of **ClickedDocumentList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function ClickedDocumentList(element, options, bindings) {
        var _this = _super.call(this, element, ClickedDocumentList.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ClickedDocumentList, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__["UserProfileModel"]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            _this.sortedDocumentsList = actions
                .filter(function (action) { return action.document && action.type === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_3__["UserActionType"].Click; })
                .sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); })
                .reverse()
                .reduce(_this.filterDuplicatesClickAction, [])
                .map(function (action) {
                action.document.searchInterface = _this.searchInterface;
                return action;
            });
            _this.render();
        }, _this.logger.error.bind(_this.logger));
        return _this;
    }
    ClickedDocumentList.prototype.filterDuplicatesClickAction = function (accumulator, action) {
        return !accumulator.find(function (existing) { return existing.raw.uri_hash === action.raw.uri_hash; }) ? __spreadArrays(accumulator, [action]) : accumulator;
    };
    ClickedDocumentList.prototype.render = function () {
        var _this = this;
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__["ExpandableList"](this.element, this.sortedDocumentsList, {
            maximumItemsShown: this.sortedDocumentsList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: function (action) {
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setStateObjectOnQueryResult(_this.queryStateModel.get(), action.document);
                coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryUtils"].setSearchInterfaceObjectOnQueryResult(_this.searchInterface, action.document);
                return _this.options.template.instantiateToElement(action.document, {
                    wrapInDiv: true,
                    checkCondition: true,
                    currentLayout: 'list',
                    responsiveComponents: _this.searchInterface.responsiveComponents,
                }).then(function (element) {
                    coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].automaticallyCreateComponentsInsideResult(element, action.document);
                    if (action.raw.origin_level_1) {
                        _this.addTooltipElement(element, action);
                    }
                    return element;
                });
            },
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_no_clicked_documents"),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_more"),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ClickedDocumentList.ID + "_less"),
        });
    };
    ClickedDocumentList.prototype.addTooltipElement = function (element, action) {
        var insertBeforeElement = element.querySelector('.CoveoResultLink');
        if (insertBeforeElement) {
            var tooltip = document.createElement('div');
            tooltip.classList.add('coveo-tooltip-origin1');
            tooltip.innerText = action.raw.origin_level_1;
            var parentNode = insertBeforeElement.parentNode;
            parentNode.insertBefore(tooltip, insertBeforeElement);
        }
    };
    /**
     * Identifier of the Search-UI component.
     */
    ClickedDocumentList.ID = 'ClickedDocumentList';
    /**
     * Default initialization options of the **ClickedDocumentList** class.
     */
    ClickedDocumentList.options = {
        numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
            defaultValue: 3,
            min: 1,
        }),
        listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'Most Recent Clicked Documents',
        }),
        userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
        template: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildTemplateOption({
            defaultValue: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["HtmlTemplate"].fromString("<div class=\"coveo-list-row\">\n                    <div class=\"coveo-row-icon\">" + _utils_icons__WEBPACK_IMPORTED_MODULE_4__["duplicate"] + "</div>\n                    <a class=\"CoveoResultLink\"/a>\n                </div>", {
                layout: 'list',
            }),
        }),
    };
    return ClickedDocumentList;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ClickedDocumentList);


/***/ }),

/***/ "./src/components/UserActions/Events.ts":
/*!**********************************************!*\
  !*** ./src/components/UserActions/Events.ts ***!
  \**********************************************/
/*! exports provided: USER_ACTION_EVENT_TYPE, UserActionEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ACTION_EVENT_TYPE", function() { return USER_ACTION_EVENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionEvents", function() { return UserActionEvents; });
var USER_ACTION_EVENT_TYPE = 'User Actions';
var UserActionEvents = /** @class */ (function () {
    function UserActionEvents() {
    }
    UserActionEvents.load = Object.freeze({
        name: 'userActionLoad',
        type: USER_ACTION_EVENT_TYPE,
    });
    UserActionEvents.submit = Object.freeze({
        name: 'userActionsSubmit',
        type: USER_ACTION_EVENT_TYPE,
    });
    UserActionEvents.open = Object.freeze({
        name: 'openUserActions',
        type: USER_ACTION_EVENT_TYPE,
    });
    return UserActionEvents;
}());



/***/ }),

/***/ "./src/components/UserActions/ExpandableList.ts":
/*!******************************************************!*\
  !*** ./src/components/UserActions/ExpandableList.ts ***!
  \******************************************************/
/*! exports provided: ExpandableList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpandableList", function() { return ExpandableList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

/**
 * Display a list that expand when click on the more button.
 */
var ExpandableList = /** @class */ (function () {
    /**
     * Create an instance of the **ExpandableList** class.
     *
     * @param element Element on which to bind the component
     * @param items List of items to display.
     * @param options Initialization options.
     */
    function ExpandableList(element, items, options) {
        this.element = element;
        this.items = items;
        this.options = options;
        this.isOpen = false;
        this.options = this.parseOptions(options);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(this.options.transform);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotNull(this.options.transform);
        this.proccessedItem = items.slice(0, this.options.maximumItemsShown).map(this.options.transform);
        this.visibleItems = this.proccessedItem.slice(0, this.options.minimumItemsShown);
        this.hiddenItems = this.proccessedItem.slice(this.options.minimumItemsShown, this.options.maximumItemsShown);
        this.render();
    }
    ExpandableList.prototype.buildMoreButton = function () {
        var button = document.createElement('button');
        button.type = 'button';
        button.classList.add('coveo-more-less');
        button.addEventListener('click', this.toggleExpansion.bind(this));
        this.button = button;
        return button;
    };
    ExpandableList.prototype.isSomeItemsHidden = function () {
        return !(this.options.maximumItemsShown === this.options.minimumItemsShown || this.hiddenItems.length === 0);
    };
    ExpandableList.prototype.parseOptions = function (options) {
        var moreOrEqualThan = function (mininum, value) { return (value >= mininum ? value : mininum); };
        var parsedOptions = __assign({}, options);
        parsedOptions.showLessMessage = parsedOptions.showLessMessage || ExpandableList.DEFAULTS.LESS_LABEL;
        parsedOptions.showMoreMessage = parsedOptions.showMoreMessage || ExpandableList.DEFAULTS.MORE_LABEL;
        parsedOptions.minimumItemsShown = parsedOptions.minimumItemsShown || ExpandableList.DEFAULTS.MINIMUM_ITEMS_SHOWN;
        parsedOptions.maximumItemsShown = parsedOptions.maximumItemsShown || ExpandableList.DEFAULTS.MAXIMUM_ITEMS_SHOWN;
        parsedOptions.minimumItemsShown = moreOrEqualThan(parsedOptions.minimumItemsShown, 1);
        parsedOptions.maximumItemsShown = moreOrEqualThan(parsedOptions.maximumItemsShown, parsedOptions.minimumItemsShown);
        parsedOptions.listLabel = parsedOptions.listLabel || ExpandableList.DEFAULTS.LIST_LABEL;
        return parsedOptions;
    };
    ExpandableList.prototype.render = function () {
        this.element.classList.add(ExpandableList.COMPONENT_CLASS);
        var header = document.createElement('h2');
        header.classList.add('coveo-title');
        header.innerText = this.options.listLabel;
        var list = document.createElement('ol');
        list.classList.add('coveo-list');
        this.element.appendChild(header);
        this.element.appendChild(list);
        if (this.isSomeItemsHidden()) {
            this.element.appendChild(this.buildMoreButton());
        }
        if (this.items.length === 0) {
            this.renderEmpty();
        }
        else {
            this.fold();
        }
    };
    ExpandableList.prototype.renderEmpty = function () {
        var list = this.element.querySelector('.coveo-list');
        var li = document.createElement('li');
        li.classList.add(ExpandableList.EMPTY_CLASS);
        li.innerText = this.options.messageWhenEmpty || '';
        list.appendChild(li);
    };
    ExpandableList.prototype.toggleExpansion = function () {
        if (this.isOpen) {
            this.fold();
        }
        else {
            this.unfold();
        }
        this.isOpen = !this.isOpen;
    };
    ExpandableList.prototype.fold = function () {
        this.update(this.visibleItems, this.options.showMoreMessage);
    };
    ExpandableList.prototype.unfold = function () {
        this.update(__spreadArrays(this.visibleItems, this.hiddenItems), this.options.showLessMessage);
    };
    ExpandableList.prototype.update = function (items, buttonText) {
        return __awaiter(this, void 0, void 0, function () {
            var list, listItems;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = this.element.querySelector('.coveo-list');
                        return [4 /*yield*/, Promise.all(items)];
                    case 1:
                        listItems = (_a.sent()).map(function (itemElement) {
                            var listItem = document.createElement('li');
                            listItem.appendChild(itemElement);
                            return listItem;
                        });
                        list.innerHTML = '';
                        listItems.forEach(function (itemElement) {
                            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(list).append(itemElement);
                        });
                        if (this.button) {
                            this.button.innerText = buttonText;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    ExpandableList.DEFAULTS = Object.freeze({
        LESS_LABEL: 'Show Less',
        MORE_LABEL: 'Show More',
        LIST_LABEL: 'Items',
        MAXIMUM_ITEMS_SHOWN: 8,
        MINIMUM_ITEMS_SHOWN: 4,
    });
    ExpandableList.COMPONENT_CLASS = 'coveo-expandable-list';
    ExpandableList.EMPTY_CLASS = 'coveo-empty';
    return ExpandableList;
}());



/***/ }),

/***/ "./src/components/UserActions/QueryList.ts":
/*!*************************************************!*\
  !*** ./src/components/UserActions/QueryList.ts ***!
  \*************************************************/
/*! exports provided: QueryList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryList", function() { return QueryList; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./src/models/UserProfileModel.ts");
/* harmony import */ var _ExpandableList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExpandableList */ "./src/components/UserActions/ExpandableList.ts");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Strings */ "./src/components/UserActions/Strings.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Events */ "./src/components/UserActions/Events.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var DEFAULT_TRANSFORMATION = function () { return function (query) {
    var container = document.createElement('div');
    container.classList.add('coveo-list-row');
    var icon = document.createElement('div');
    icon.classList.add('coveo-row-icon');
    icon.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_3__["search"];
    var link = document.createElement('a');
    link.classList.add('coveo-link');
    link.innerText = query;
    link.title = query;
    container.appendChild(icon);
    container.appendChild(link);
    return Promise.resolve(container);
}; };
/**
 * Display the list of the most recent queries of a user.
 */
var QueryList = /** @class */ (function (_super) {
    __extends(QueryList, _super);
    /**
     * Create an instance of **QueryList**. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function QueryList(element, options, bindings) {
        var _this = _super.call(this, element, QueryList.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, QueryList, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_1__["UserProfileModel"]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            _this.sortedQueryList = __spreadArrays(actions).filter(function (action) { return action.query; })
                .sort(function (a, b) { return a.timestamp.getTime() - b.timestamp.getTime(); })
                .reverse()
                .reduce(_this.filterDuplicateQueries, []);
            _this.render();
        }, _this.logger.error.bind(_this.logger));
        return _this;
    }
    QueryList.prototype.filterDuplicateQueries = function (accumulator, action) {
        return !accumulator.find(function (existing) { return existing.query === action.query; }) ? __spreadArrays(accumulator, [action]) : accumulator;
    };
    QueryList.prototype.render = function () {
        var _this = this;
        new _ExpandableList__WEBPACK_IMPORTED_MODULE_2__["ExpandableList"](this.element, this.sortedQueryList, {
            maximumItemsShown: this.sortedQueryList.length,
            minimumItemsShown: this.options.numberOfItems,
            transform: function (action) {
                return _this.options.transform(action.query).then(function (element) {
                    if (action.raw.origin_level_1) {
                        _this.addTooltipElement(element, action);
                    }
                    return _this.makeClickable(action.query, element);
                });
            },
            listLabel: this.options.listLabel,
            messageWhenEmpty: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_no_queries"),
            showMoreMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_more"),
            showLessMessage: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(QueryList.ID + "_less"),
        });
    };
    /**
     * Make a list item element generate a query when click if an omnibox is present.
     * @param query The query to generate.
     * @param listItem  The list item element.
     */
    QueryList.prototype.makeClickable = function (query, listItem) {
        var _this = this;
        var omniboxElement = this.root.querySelector('.CoveoOmnibox');
        if (omniboxElement != null) {
            listItem.addEventListener('click', function () {
                Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(omniboxElement, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Omnibox"], true).setText(query);
                _this.usageAnalytics.logSearchEvent(_Events__WEBPACK_IMPORTED_MODULE_5__["UserActionEvents"].submit, {});
                _this.queryController.executeQuery();
            });
            listItem.style.cursor = 'pointer';
        }
        return listItem;
    };
    QueryList.prototype.addTooltipElement = function (element, action) {
        var insertBeforeElement = element.querySelector('.coveo-link');
        if (insertBeforeElement) {
            var tooltip = document.createElement('div');
            tooltip.classList.add('coveo-tooltip-origin1');
            tooltip.innerText = action.raw.origin_level_1;
            var parentNode = insertBeforeElement.parentNode;
            parentNode.insertBefore(tooltip, insertBeforeElement);
        }
    };
    /**
     * Identifier of the Search-UI component.
     */
    QueryList.ID = 'QueryList';
    /**
     * Default initialization options of the **QueryList** class.
     */
    QueryList.options = {
        numberOfItems: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildNumberOption({
            defaultValue: 3,
            min: 1,
            required: true,
        }),
        listLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'Most Recent Queries',
        }),
        transform: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(DEFAULT_TRANSFORMATION, {
            defaultValue: DEFAULT_TRANSFORMATION(),
        }),
        userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
    };
    return QueryList;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(QueryList);


/***/ }),

/***/ "./src/components/UserActions/ResponsiveUserActions.ts":
/*!*************************************************************!*\
  !*** ./src/components/UserActions/ResponsiveUserActions.ts ***!
  \*************************************************************/
/*! exports provided: ResponsiveUserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveUserActions", function() { return ResponsiveUserActions; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserActions */ "./src/components/UserActions/UserActions.ts");


/**
 * Handle the responsive button creation and positionning.
 */
var ResponsiveUserActions = /** @class */ (function () {
    /**
     * Create a **ResponsiveUserActions** instance.
     *
     * @param root The root of the interface.
     * @param ID Identifier of the **ResponsiveUserActions**.
     * @param _options _unused parameter_.
     */
    function ResponsiveUserActions(root, ID, _options) {
        this.root = root;
        this.ID = ID;
    }
    /**
     * Register the **component** to the **ResponsiveComponentsManager**.
     *
     * @param root The root of the interface.
     * @param component The component to register as a responsive component.
     */
    ResponsiveUserActions.init = function (root, component) {
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveComponentsManager"].register(ResponsiveUserActions, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(root), _UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID, component, {});
    };
    /**
     * Register the user action component as a responsive component.
     *
     * @param component The component to register as a responsive component.
     */
    ResponsiveUserActions.prototype.registerComponent = function (component) {
        if (!this.userActions && component.constructor.ID === _UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID) {
            this.userActions = component;
            this.buildDropdownHeader(this.userActions.options.buttonLabel);
            return true;
        }
        return false;
    };
    /**
     * On resize, will place the user actions button in the Dropdown Header Wrapper Section.
     */
    ResponsiveUserActions.prototype.handleResizeEvent = function () {
        var wrapper = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(this.root).find("." + coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveComponentsManager"].DROPDOWN_HEADER_WRAPPER_CSS_CLASS);
        if (wrapper != null) {
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(wrapper).append(this.dropdownHeader.element.el);
        }
    };
    /**
     * Always return true because the component always need a button.
     */
    ResponsiveUserActions.prototype.needDropdownWrapper = function () {
        return true;
    };
    ResponsiveUserActions.prototype.buildDropdownHeader = function (label) {
        var _this = this;
        // Create a button.
        var button = document.createElement('a');
        var content = document.createElement('p');
        content.innerText = label;
        button.appendChild(content);
        this.dropdownHeader = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResponsiveDropdownHeader"]('user-actions', Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["$$"])(button));
        this.dropdownHeader.element.on('click', function () {
            _this.userActions.toggle();
        });
    };
    return ResponsiveUserActions;
}());



/***/ }),

/***/ "./src/components/UserActions/Strings.ts":
/*!***********************************************!*\
  !*** ./src/components/UserActions/Strings.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    UserActions: 'User Actions',
    UserActions_no_actions_title: 'No actions available for this user',
    UserActions_no_actions_causes_title: 'Possible causes',
    UserActions_no_actions_cause_not_enabled: 'User actions are not enabled for your organization',
    UserActions_no_actions_cause_not_associated: 'There are no user actions associated with the user',
    UserActions_no_actions_cause_case_too_old: 'The case is too old to detect related actions',
    UserActions_no_actions_contact_admin: 'Contact your administrator for help',
    UserActions_enable_prompt: 'The User Action feature is not activated for your organization.\nTo activate it, contact Coveo Support.',
    QueryList_more: 'Show More',
    QueryList_less: 'Show Less',
    QueryList_no_queries: 'No queries made by this user',
    ClickedDocumentList_more: 'Show More',
    ClickedDocumentList_less: 'Show Less',
    ClickedDocumentList_no_clicked_documents: 'No document clicked by this user',
    UserActivity_start_date: 'Start Date',
    UserActivity_start_time: 'Start Time',
    UserActivity_duration: 'Duration',
    UserActivity_other_event: 'Other Event',
    UserActivity_other_events: 'Other Events',
    UserActivity_no_actions_timeline: 'No actions to display in the timeline',
    UserActivity_no_actions_cause_filtered: 'All the actions were filtered',
    UserActivity_search: 'Query',
    UserActivity_query: 'User Query',
    UserActivity_click: 'Clicked Document',
    UserActivity_view: 'Page View',
    UserActivity_custom: 'Custom Action',
    UserActivity_ticketCreated: 'Ticket Created',
    UserActivity_showNewSession: 'Show new session',
    UserActivity_showPastSession: 'Show past session',
    UserActivity_showMore: 'Show More',
    UserActivity_showMoreActions: 'More Actions',
    UserActivity_session: 'Session',
    UserActivity_emptySearch: 'Empty Search',
    UserActivity_invalidDate: 'Invalid date for ticket creation',
});


/***/ }),

/***/ "./src/components/UserActions/UserActions.ts":
/*!***************************************************!*\
  !*** ./src/components/UserActions/UserActions.ts ***!
  \***************************************************/
/*! exports provided: UserActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActions", function() { return UserActions; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ResponsiveUserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveUserActions */ "./src/components/UserActions/ResponsiveUserActions.ts");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ClickedDocumentList */ "./src/components/UserActions/ClickedDocumentList.ts");
/* harmony import */ var _QueryList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./QueryList */ "./src/components/UserActions/QueryList.ts");
/* harmony import */ var _UserActivity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./UserActivity */ "./src/components/UserActions/UserActivity.ts");
/* harmony import */ var _Index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Index */ "./src/Index.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Strings */ "./src/components/UserActions/Strings.ts");
/* harmony import */ var _ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ViewedByCustomer/ViewedByCustomer */ "./src/components/ViewedByCustomer/ViewedByCustomer.ts");
/* harmony import */ var _Events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Events */ "./src/components/UserActions/Events.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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










var ResultLayoutType;
(function (ResultLayoutType) {
    ResultLayoutType["LIST"] = "list";
    ResultLayoutType["TABLE"] = "table";
    ResultLayoutType["CARD"] = "card";
})(ResultLayoutType || (ResultLayoutType = {}));
/**
 * Display a panel that contains a summary of a user session and that also contains detailed information about user actions.
 */
var UserActions = /** @class */ (function (_super) {
    __extends(UserActions, _super);
    /**
     * Create an instance of the **UserActions** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function UserActions(element, options, bindings) {
        var _this = _super.call(this, element, UserActions.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, UserActions, options);
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        if (_this.options.viewedByCustomer) {
            _this.showViewedByCustomer();
        }
        _this.tagViewsOfUser();
        if (!options.hidden) {
            if (options.useResponsiveManager) {
                _ResponsiveUserActions__WEBPACK_IMPORTED_MODULE_1__["ResponsiveUserActions"].init(_this.root, _this);
            }
            _this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryEvents"].newQuery, function () { return _this.hide(); });
            _this.hide();
        }
        return _this;
    }
    /**
     * Collapse the panel.
     */
    UserActions.prototype.hide = function () {
        if (this.isOpened) {
            this.isOpened = false;
            Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _Index__WEBPACK_IMPORTED_MODULE_6__["UserProfileModel"]).deleteActions(this.options.userId);
            this.root.classList.remove(UserActions.USER_ACTION_OPENED);
            this.element.dispatchEvent(new CustomEvent(UserActions.Events.Hide));
        }
    };
    /**
     * Open the panel.
     */
    UserActions.prototype.show = function () {
        return __awaiter(this, void 0, void 0, function () {
            var userActions, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isOpened) return [3 /*break*/, 4];
                        this.isOpened = true;
                        this.renderLoading();
                        this.element.dispatchEvent(new CustomEvent(UserActions.Events.Show));
                        this.bindings.usageAnalytics.logCustomEvent(_Events__WEBPACK_IMPORTED_MODULE_9__["UserActionEvents"].open, {}, this.element);
                        this.root.classList.add(UserActions.USER_ACTION_OPENED);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(this.root, _Index__WEBPACK_IMPORTED_MODULE_6__["UserProfileModel"]).getActions(this.options.userId)];
                    case 2:
                        userActions = _a.sent();
                        if (userActions.length > 0) {
                            this.render();
                        }
                        else {
                            this.renderNoActions();
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        if ((e_1 === null || e_1 === void 0 ? void 0 : e_1.statusCode) === 404) {
                            this.renderEnablePrompt();
                        }
                        else {
                            this.renderNoActions();
                        }
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Toggle the visibility of the panel.
     */
    UserActions.prototype.toggle = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isOpened) return [3 /*break*/, 1];
                        this.hide();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.show()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserActions.prototype.buildAccordionHeader = function (title) {
        var div = document.createElement('div');
        div.classList.add('coveo-accordion-header');
        var headerTitle = document.createElement('div');
        headerTitle.classList.add('coveo-accordion-header-title');
        headerTitle.innerText = title;
        var arrow = document.createElement('div');
        arrow.classList.add('coveo-arrow-down');
        arrow.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_2__["arrowDown"];
        div.appendChild(headerTitle);
        div.appendChild(arrow);
        return div;
    };
    UserActions.prototype.buildAccordion = function (title, elements) {
        var div = document.createElement('div');
        div.classList.add('coveo-accordion');
        var header = this.buildAccordionHeader(title);
        var foldable = document.createElement('div');
        foldable.classList.add('coveo-accordion-foldable');
        elements.forEach(function (el) { return foldable.appendChild(el); });
        div.appendChild(header);
        div.appendChild(foldable);
        header.addEventListener('click', function () {
            if (div.classList.contains('coveo-folded')) {
                div.classList.remove('coveo-folded');
            }
            else {
                div.classList.add('coveo-folded');
            }
        });
        return div;
    };
    UserActions.prototype.buildCoveoElement = function (klass) {
        var el = document.createElement('div');
        el.classList.add("Coveo" + klass.ID);
        return el;
    };
    /**
     * Initialize child Search-UI component and pass down critical options.
     *
     * @param element Parent element of each child that would be initialize.
     */
    UserActions.prototype.initializeSearchUIComponents = function (element) {
        var originalOptions = this.searchInterface.options.originalOptionsObject;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].automaticallyCreateComponentsInside(element, {
            options: __assign(__assign({}, originalOptions), { QueryList: __assign(__assign({}, originalOptions.QueryList), { userId: this.options.userId }), ClickedDocumentList: __assign(__assign({}, originalOptions.ClickedDocumentList), { userId: this.options.userId }), UserActivity: __assign(__assign({}, originalOptions.UserActivity), { userId: this.options.userId }) }),
            bindings: this.bindings,
        });
    };
    UserActions.prototype.renderLoading = function () {
        this.element.innerHTML = '';
        var loadingElement = document.createElement('div');
        loadingElement.classList.add('coveo-loading-container');
        loadingElement.innerHTML = "\n        <div role=\"status\" class=\"slds-spinner slds-spinner--medium\">\n            <span class=\"slds-assistive-text\">Loading</span>\n            <div class=\"slds-spinner__dot-a\"></div>\n            <div class=\"slds-spinner__dot-b\"></div>\n        </div>";
        this.element.appendChild(loadingElement);
    };
    UserActions.prototype.render = function () {
        var element = document.createElement('div');
        var summarySection = this.buildAccordion(this.options.summaryLabel, [
            this.buildCoveoElement(_ClickedDocumentList__WEBPACK_IMPORTED_MODULE_3__["ClickedDocumentList"]),
            this.buildCoveoElement(_QueryList__WEBPACK_IMPORTED_MODULE_4__["QueryList"]),
        ]);
        summarySection.classList.add("coveo-summary");
        var detailsSection = this.buildAccordion(this.options.activityLabel, [this.buildCoveoElement(_UserActivity__WEBPACK_IMPORTED_MODULE_5__["UserActivity"])]);
        detailsSection.classList.add('coveo-details');
        element.appendChild(summarySection);
        element.appendChild(detailsSection);
        this.initializeSearchUIComponents(element);
        this.element.innerHTML = '';
        this.element.appendChild(element);
    };
    UserActions.prototype.renderNoActions = function () {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('coveo-no-actions');
        messageContainer.innerHTML = "\n        <div class=\"coveo-user-actions-title\">" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID) + "</div>\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_title') + ".</p>\n        <div>\n            <span>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_causes_title') + "</span>\n            <ul class=\"coveo-no-actions-causes\">\n                <li>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_cause_not_associated') + ".</li>\n                <li>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_cause_case_too_old') + ".</li>\n            </ul>\n        </div>\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_contact_admin') + ".</p>\n        ";
        this.element.innerHTML = '';
        this.element.appendChild(messageContainer);
    };
    UserActions.prototype.renderEnablePrompt = function () {
        var messageContainer = document.createElement('div');
        messageContainer.classList.add('coveo-no-actions');
        messageContainer.innerHTML = "\n        <div class=\"coveo-user-actions-title\">" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID) + "</div>\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_cause_not_enabled') + ".</p>\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActions.ID + '_no_actions_contact_admin') + ".</p>\n        ";
        this.element.innerHTML = '';
        this.element.appendChild(messageContainer);
    };
    UserActions.prototype.showViewedByCustomer = function () {
        var _this = this;
        this.bind.onRootElement(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultListEvents"].newResultDisplayed, function (args) {
            if (Boolean(args.item.getElementsByClassName('CoveoViewedByCustomer').length)) {
                return;
            }
            if (_this.inferResultListLayout() !== ResultLayoutType.TABLE) {
                var resultLastRow = '.coveo-result-row:last-child';
                args.item
                    .querySelector(resultLastRow)
                    .parentNode.appendChild(_ViewedByCustomer_ViewedByCustomer__WEBPACK_IMPORTED_MODULE_8__["ViewedByCustomer"].getViewedByCustomerResultRowDom(_this.bindings, args.result));
            }
        });
    };
    UserActions.prototype.tagViewsOfUser = function () {
        var _this = this;
        Coveo.$$(this.root).on('buildingQuery', function (e, args) {
            try {
                args.queryBuilder.userActions = {
                    tagViewsOfUser: _this.options.userId,
                };
            }
            catch (e) {
                _this.logger.warn("CreatedBy Email wasn't found", e);
            }
        });
    };
    UserActions.prototype.inferResultListLayout = function () {
        var resultLists = this.root.querySelectorAll(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeSelectorForType(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ResultList"].ID) + ":not(.coveo-hidden)");
        var resultListLayoutTypes = [ResultLayoutType.CARD, ResultLayoutType.TABLE, ResultLayoutType.LIST];
        if (resultLists.length > 0 && resultListLayoutTypes.indexOf(resultLists[0].dataset.layout) !== -1) {
            return resultLists[0].dataset.layout;
        }
        return ResultLayoutType.LIST;
    };
    /**
     * Identifier of the Search-UI component.
     */
    UserActions.ID = 'UserActions';
    UserActions.Events = {
        Hide: 'userActionsPanelHide',
        Show: 'userActionsPanelShow',
    };
    /**
     * Default initialization options of the **UserActions** class.
     */
    UserActions.options = {
        userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
        buttonLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'User Actions',
        }),
        summaryLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'Session Summary',
        }),
        activityLabel: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({
            defaultValue: 'User Activity Timeline',
        }),
        viewedByCustomer: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
            defaultValue: true,
        }),
        hidden: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
            defaultValue: false,
        }),
        useResponsiveManager: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({
            defaultValue: true,
        }),
    };
    UserActions.USER_ACTION_OPENED = 'coveo-user-actions-opened';
    return UserActions;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(UserActions);


/***/ }),

/***/ "./src/components/UserActions/UserActivity.ts":
/*!****************************************************!*\
  !*** ./src/components/UserActions/UserActivity.ts ***!
  \****************************************************/
/*! exports provided: UserActivity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActivity", function() { return UserActivity; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/time */ "./src/utils/time.ts");
/* harmony import */ var _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../models/UserProfileModel */ "./src/models/UserProfileModel.ts");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../rest/UserProfilingEndpoint */ "./src/rest/UserProfilingEndpoint.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Strings */ "./src/components/UserActions/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};






var MSEC_IN_SECOND = 1000;
var SECONDS_IN_MINUTE = 60;
var MAX_MINUTES_IN_SESSION = 30;
var MAX_MSEC_IN_SESSION = MAX_MINUTES_IN_SESSION * SECONDS_IN_MINUTE * MSEC_IN_SECOND;
var SESSION_BEFORE_TO_DISPLAY = 2;
var SESSION_AFTER_TO_DISPLAY = 2;
var MAIN_CLASS = 'coveo-user-activity';
var ORIGIN_CLASS = 'coveo-footer';
var ACTIVITY_TITLE_SECTION = 'coveo-activity-title-section';
var ACTIVITY_TITLE_CLASS = 'coveo-activity-title';
var ACTIVITY_CLASS = 'coveo-activity';
var EVENT_CLASS = 'coveo-action';
var CLICK_EVENT_CLASS = 'coveo-click';
var SEARCH_EVENT_CLASS = 'coveo-search';
var CUSTOM_EVENT_CLASS = 'coveo-custom';
var VIEW_EVENT_CLASS = 'coveo-view';
var FOLDED_CLASS = 'coveo-folded';
var FOLDED_ACTIONS_CLASS = 'coveo-folded-actions';
var TEXT_CLASS = 'coveo-text';
var ICON_CLASS = 'coveo-icon';
var CASE_CREATION_ACTION_CLASS = 'coveo-case-creation-action';
var UserActivity = /** @class */ (function (_super) {
    __extends(UserActivity, _super);
    /**
     * Create an instance of the **UserActivity** class. Initialize is needed the **UserProfileModel** and fetch user actions related to the **UserId**.
     *
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function UserActivity(element, options, bindings) {
        var _this = _super.call(this, element, UserActivity.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        _this.hasExpandedActions = false;
        _this.isPartOfTheSameSession = function (action, previousDateTime) {
            return Math.abs(action.timestamp.valueOf() - previousDateTime.valueOf()) < MAX_MSEC_IN_SESSION;
        };
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, UserActivity, options);
        if (typeof _this.options.ticketCreationDateTime === 'string' || typeof _this.options.ticketCreationDateTime === 'number') {
            _this.options.ticketCreationDateTime = UserActivity.parseDate(_this.options.ticketCreationDateTime);
        }
        if (!_this.options.userId) {
            _this.disable();
            return _this;
        }
        _this.userProfileModel = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["get"])(_this.root, _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserProfileModel"]);
        _this.userProfileModel.getActions(_this.options.userId).then(function (actions) {
            var sortMostRecentFirst = function (a, b) { return b.timestamp.getTime() - a.timestamp.getTime(); };
            var sortedActions = __spreadArrays(actions).sort(sortMostRecentFirst);
            var filteredActions = sortedActions;
            if (_this.options.customActionsExclude && _this.options.customActionsExclude.length > 0) {
                filteredActions = sortedActions.filter(function (action) { return _this.filterActions(action); });
            }
            _this.sessions = _this.splitActionsBySessions(filteredActions);
            _this.buildSessionsToDisplay();
            _this.render();
        });
        return _this;
    }
    UserActivity.parseDate = function (value) {
        try {
            return new Date(value);
        }
        catch (e) {
            console.warn(Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_invalidDate") + (" '" + value + "'"));
            return null;
        }
    };
    UserActivity.prototype.filterActions = function (action) {
        return action.type !== _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Custom || !this.shouldExcludeCustomAction(action);
    };
    UserActivity.prototype.shouldExcludeCustomAction = function (action) {
        var eventValue = action.raw.event_value || '';
        var eventType = action.raw.event_type || '';
        return this.options.customActionsExclude.includes(eventValue) || this.options.customActionsExclude.includes(eventType);
    };
    UserActivity.prototype.splitActionsBySessions = function (actions) {
        var _this = this;
        var _a;
        if (actions.length === 0) {
            return [];
        }
        var splitSessions = [new _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserActionSession"](actions[0].timestamp, [])];
        var previousDateTime = (_a = actions[0]) === null || _a === void 0 ? void 0 : _a.timestamp;
        var currentSession = splitSessions[0];
        actions.forEach(function (action) {
            if (_this.isPartOfTheSameSession(action, previousDateTime)) {
                currentSession.actions.push(action);
            }
            else {
                splitSessions.push(new _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserActionSession"](action.timestamp, [action]));
                currentSession = splitSessions[splitSessions.length - 1];
            }
            previousDateTime = action.timestamp;
        });
        return splitSessions;
    };
    UserActivity.prototype.buildSessionsToDisplay = function () {
        var _a;
        var _this = this;
        if (this.options.ticketCreationDateTime instanceof Date) {
            (_a = this.findCaseSubmitSession(), this.caseSubmitSessionIndex = _a.caseSubmitSessionIndex, this.caseSubmitSession = _a.caseSubmitSession);
            if (this.caseSubmitSessionIndex !== -1) {
                var sessionIndexBefore = this.caseSubmitSessionIndex - SESSION_BEFORE_TO_DISPLAY;
                var sessionIndexAfter = this.caseSubmitSessionIndex + SESSION_AFTER_TO_DISPLAY;
                this.sessionsToDisplay = this.findSurroundingSessions(sessionIndexBefore, sessionIndexAfter);
                this.caseSubmitSession.expanded = true;
                var insertTicketCreatedIndex = this.caseSubmitSession.actions.findIndex(function (action) { return action.timestamp <= _this.options.ticketCreationDateTime; });
                this.caseSubmitSession.actions.splice(insertTicketCreatedIndex, 0, this.buildTicketCreatedAction());
                return;
            }
            else {
                console.warn("Could not find a user action session corresponding to this date: " + this.options.ticketCreationDateTime + ".");
            }
        }
        if (this.sessions.length > 0) {
            this.sessionsToDisplay = this.sessions.slice(0, 5);
            this.sessionsToDisplay[0].expanded = true;
        }
        else {
            this.sessionsToDisplay = [];
        }
    };
    UserActivity.prototype.buildTicketCreatedAction = function () {
        return new _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserAction"](_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].TicketCreated, this.options.ticketCreationDateTime, {});
    };
    UserActivity.prototype.findCaseSubmitSession = function () {
        var caseSubmitSessionIndex = this.findSessionIncludingCaseSubmit();
        var caseSubmitSession = null;
        if (caseSubmitSessionIndex !== -1) {
            // If we found a session that correctly includes the timestamp when the ticket was created
            caseSubmitSession = this.sessions[caseSubmitSessionIndex];
            // return { caseSubmitSessionIndex: foundCaseSubmitSessionIndex, caseSubmitSession: this.sessions[foundCaseSubmitSessionIndex] };
        }
        else {
            // We can try to find a session that occurred just before the ticket create.
            caseSubmitSessionIndex = this.findPotentialSessionJustBeforeCaseSubmit();
            if (caseSubmitSessionIndex !== -1) {
                caseSubmitSession = this.sessions[caseSubmitSessionIndex];
            }
        }
        return {
            caseSubmitSessionIndex: caseSubmitSessionIndex,
            caseSubmitSession: caseSubmitSession,
        };
    };
    UserActivity.prototype.findSessionIncludingCaseSubmit = function () {
        var _this = this;
        return this.sessions.findIndex(function (session) {
            return session.actions[0].timestamp >= _this.options.ticketCreationDateTime &&
                session.actions[session.actions.length - 1].timestamp <= _this.options.ticketCreationDateTime;
        });
    };
    UserActivity.prototype.findPotentialSessionJustBeforeCaseSubmit = function () {
        var _this = this;
        var potentialSessionIndex = this.sessions.findIndex(function (session) { return session.actions[0].timestamp <= _this.options.ticketCreationDateTime; });
        if (potentialSessionIndex !== -1) {
            var lastActionInSession = this.sessions[potentialSessionIndex].actions[0];
            if (!this.isPartOfTheSameSession(lastActionInSession, this.options.ticketCreationDateTime)) {
                // If the session before the ticket create is not part of the same session, create a standalone session.
                this.sessions.splice(potentialSessionIndex, 0, new _models_UserProfileModel__WEBPACK_IMPORTED_MODULE_2__["UserActionSession"](this.options.ticketCreationDateTime, []));
            }
            return potentialSessionIndex;
        }
        return -1;
    };
    UserActivity.prototype.findSurroundingSessions = function (from, to) {
        // +1 because with slice `end` is not included.
        return this.sessions.slice(Math.max(0, from), Math.min(this.sessions.length, to + 1));
    };
    UserActivity.prototype.render = function () {
        this.element.innerHTML = '';
        var panel = document.createElement('div');
        panel.classList.add(MAIN_CLASS);
        var activitySection = this.buildActivitySection();
        activitySection.classList.add(ACTIVITY_CLASS);
        panel.appendChild(activitySection);
        this.element.appendChild(panel);
    };
    UserActivity.prototype.buildActivitySection = function () {
        if (this.sessionsToDisplay.length > 0) {
            var list_1 = document.createElement('ol');
            var sessionsBuilt = this.buildSessionsItems(this.sessionsToDisplay);
            sessionsBuilt.forEach(function (sessionItem) {
                if (sessionItem) {
                    list_1.appendChild(sessionItem);
                }
            });
            return list_1;
        }
        else {
            return this.buildNoActionsMessage();
        }
    };
    UserActivity.prototype.buildNoActionsMessage = function () {
        var noActionsDiv = document.createElement('div');
        noActionsDiv.innerHTML = "\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + '_no_actions_timeline') + ".</p>\n        <div>\n            <span>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActions_no_actions_causes_title') + "</span>\n            <ul class=\"coveo-no-actions-causes\">\n                <li>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActions_no_actions_cause_not_associated') + ".</li>\n                <li>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + '_no_actions_cause_filtered') + ".</li>\n            </ul>\n        </div>\n        <p>" + Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('UserActions_no_actions_contact_admin') + ".</p>";
        return noActionsDiv;
    };
    UserActivity.prototype.buildSessionsItems = function (sessions) {
        var _this = this;
        var hitExpanded = false;
        var htmlElements = [];
        sessions.forEach(function (session, index) {
            var _a, _b;
            if (session.expanded) {
                htmlElements.push(_this.buildSessionItem(session));
                hitExpanded = true;
            }
            else {
                if (!hitExpanded && ((_a = sessions[index + 1]) === null || _a === void 0 ? void 0 : _a.expanded)) {
                    htmlElements.push(_this.buildFoldedSession(session, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_showNewSession")));
                }
                if (hitExpanded && ((_b = sessions[index - 1]) === null || _b === void 0 ? void 0 : _b.expanded)) {
                    htmlElements.push(_this.buildFoldedSession(session, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_showPastSession")));
                }
            }
        });
        return htmlElements;
    };
    UserActivity.prototype.buildFoldedSession = function (sessionToExpand, showMoreButtonText) {
        var _this = this;
        var li = document.createElement('li');
        li.classList.add(FOLDED_CLASS);
        var hr = document.createElement('hr');
        var span = document.createElement('span');
        span.classList.add(TEXT_CLASS);
        span.innerText = showMoreButtonText || Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_showMore");
        hr.appendChild(span);
        li.addEventListener('click', function () {
            sessionToExpand.expanded = true;
            _this.render();
        });
        li.appendChild(hr);
        return li;
    };
    UserActivity.prototype.buildSessionItem = function (session) {
        if (session.actions.length === 0) {
            return null;
        }
        var sessionContainer = document.createElement('div');
        sessionContainer.classList.add('coveo-session-container');
        sessionContainer.appendChild(this.buildSessionHeader(session));
        this.buildSessionContent(session.actions, session === this.caseSubmitSession).forEach(function (actionHTML) {
            return sessionContainer.appendChild(actionHTML);
        });
        return sessionContainer;
    };
    UserActivity.prototype.buildSessionHeader = function (session) {
        var sessionHeader = document.createElement('div');
        sessionHeader.classList.add('coveo-session-header');
        sessionHeader.innerText = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_session") + (" " + Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(session.timestamp));
        return sessionHeader;
    };
    UserActivity.prototype.buildSessionContent = function (actions, withFolded) {
        var _this = this;
        var actionsHTML = [];
        var actionsToDisplay = actions;
        if (withFolded && this.options.ticketCreationDateTime && !this.hasExpandedActions) {
            // Special behavior because, in the session with the Ticket Creation event,
            // until the user expands them, the actions that occurred AFTER a ticket creation are collapsed.
            actionsToDisplay = actionsToDisplay.filter(function (action) { return action.timestamp <= _this.options.ticketCreationDateTime; });
            if (actionsToDisplay.length < actions.length) {
                actionsHTML.push(this.buildFoldedActions());
            }
        }
        actionsHTML = actionsHTML.concat(actionsToDisplay.map(function (action) { return _this.buildActionListItem(action); }));
        return actionsHTML;
    };
    UserActivity.prototype.buildFoldedActions = function () {
        var _this = this;
        var li = document.createElement('li');
        li.classList.add(FOLDED_ACTIONS_CLASS);
        var span = document.createElement('span');
        span.classList.add(TEXT_CLASS);
        span.innerText = Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_showMoreActions");
        li.addEventListener('click', function () {
            _this.hasExpandedActions = true;
            _this.render();
        });
        for (var i = 0; i < 3; i++) {
            var el = this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["dot"]);
            li.appendChild(el);
        }
        li.appendChild(span);
        return li;
    };
    UserActivity.prototype.buildActionListItem = function (action) {
        var _a;
        var _this = this;
        try {
            var defaultBuilder = function (action) { return _this.buildCustomEvent(action); };
            var buildersMap = (_a = {},
                _a[_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Click] = function (action) { return _this.buildClickEvent(action); },
                _a[_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Search] = function (action) { return _this.buildSearchEvent(action); },
                _a[_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].PageView] = function (action) { return _this.buildViewEvent(action); },
                _a[_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].TicketCreated] = function (action) { return _this.buildTicketCreated(action); },
                _a[_rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_4__["UserActionType"].Custom] = function (action) { return _this.buildCustomEvent(action); },
                _a);
            var builder = buildersMap[action.type] || defaultBuilder;
            return builder(action);
        }
        catch (err) {
            console.error(err);
            return null;
        }
    };
    UserActivity.prototype.buildSearchEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(EVENT_CLASS, SEARCH_EVENT_CLASS);
        li.appendChild(this.buildTitleSection(action, action.query || Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_emptySearch")));
        li.appendChild(this.buildFooterElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["search"]));
        return li;
    };
    UserActivity.prototype.buildClickEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(EVENT_CLASS, CLICK_EVENT_CLASS);
        var titleSection = document.createElement('div');
        titleSection.classList.add(ACTIVITY_TITLE_SECTION);
        var clickedURLElement = document.createElement('a');
        clickedURLElement.classList.add(ACTIVITY_TITLE_CLASS);
        clickedURLElement.innerText = (action.document && action.document.title) || '';
        clickedURLElement.title = (action.document && action.document.title) || '';
        clickedURLElement.href = (action.document && action.document.clickUri) || '';
        titleSection.appendChild(clickedURLElement);
        document.createAttributeNS('svg', 'svg');
        li.appendChild(titleSection);
        li.appendChild(this.buildFooterElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["duplicate"]));
        return li;
    };
    UserActivity.prototype.buildViewEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(EVENT_CLASS, VIEW_EVENT_CLASS);
        if (UserActivity.clickable_uri_ids.indexOf(action.raw.content_id_key) !== -1) {
            //If the content id key is included in the clickable_uri list, make the component a link
            var titleSection = document.createElement('div');
            titleSection.classList.add(ACTIVITY_TITLE_SECTION);
            var a = document.createElement('a');
            a.href = action.raw.content_id_value;
            a.innerText = action.raw.title || action.raw.content_id_value;
            titleSection.appendChild(a);
            li.appendChild(titleSection);
        }
        else {
            li.appendChild(this.buildTitleSection(action, action.raw.title || action.raw.content_id_key + ": " + action.raw.content_id_value));
        }
        li.appendChild(this.buildFooterElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["view"]));
        return li;
    };
    UserActivity.prototype.buildCustomEvent = function (action) {
        var li = document.createElement('li');
        li.classList.add(EVENT_CLASS, CUSTOM_EVENT_CLASS);
        li.appendChild(this.buildTitleSection(action, "" + (action.raw.event_value || action.raw.event_type || Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_custom"))));
        li.appendChild(this.buildFooterElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["dot"]));
        return li;
    };
    UserActivity.prototype.buildTicketCreated = function (action) {
        var li = document.createElement('li');
        li.classList.add(EVENT_CLASS, CUSTOM_EVENT_CLASS, CASE_CREATION_ACTION_CLASS);
        li.appendChild(this.buildTitleSection(action, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(UserActivity.ID + "_ticketCreated")));
        li.appendChild(this.buildFooterElement(action));
        li.appendChild(this.buildIcon(_utils_icons__WEBPACK_IMPORTED_MODULE_3__["flag"]));
        return li;
    };
    UserActivity.prototype.buildFooterElement = function (action) {
        var el = document.createElement('div');
        el.classList.add(ORIGIN_CLASS);
        el.innerText = "" + Object(_utils_time__WEBPACK_IMPORTED_MODULE_1__["formatTime"])(action.timestamp);
        if (action.raw.origin_level_1) {
            el.innerText += " - " + action.raw.origin_level_1;
        }
        return el;
    };
    UserActivity.prototype.buildTitleElement = function (_, content) {
        var el = document.createElement('div');
        el.classList.add(ACTIVITY_TITLE_CLASS);
        el.innerText = content;
        el.title = content;
        return el;
    };
    UserActivity.prototype.buildTitleSection = function (action, content) {
        var titleSection = document.createElement('div');
        titleSection.classList.add(ACTIVITY_TITLE_SECTION);
        titleSection.appendChild(this.buildTitleElement(action, content));
        return titleSection;
    };
    UserActivity.prototype.buildIcon = function (icon) {
        var el = document.createElement('div');
        el.classList.add(ICON_CLASS);
        el.innerHTML = icon;
        return el;
    };
    UserActivity.ID = 'UserActivity';
    UserActivity.options = {
        userId: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ required: true }),
        customActionsExclude: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildListOption({
            defaultValue: ['ticket_create_start', 'ticket_field_update', 'ticket_next_stage', 'ticket_classification_click'],
            required: true,
        }),
        ticketCreationDateTime: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildCustomOption(function (value) { return UserActivity.parseDate(value); }, {
            required: false,
        }),
    };
    UserActivity.clickable_uri_ids = ['@clickableuri'];
    return UserActivity;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(UserActivity);


/***/ }),

/***/ "./src/components/ViewedByCustomer/Strings.ts":
/*!****************************************************!*\
  !*** ./src/components/ViewedByCustomer/Strings.ts ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_translation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/translation */ "./src/utils/translation.ts");

_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Translation"].register(_utils_translation__WEBPACK_IMPORTED_MODULE_0__["Language"].English, {
    ViewedByCustomer_DefaultLabel: 'Viewed by Customer',
});


/***/ }),

/***/ "./src/components/ViewedByCustomer/ViewedByCustomer.ts":
/*!*************************************************************!*\
  !*** ./src/components/ViewedByCustomer/ViewedByCustomer.ts ***!
  \*************************************************************/
/*! exports provided: ViewedByCustomer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewedByCustomer", function() { return ViewedByCustomer; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UserActions_UserActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserActions/UserActions */ "./src/components/UserActions/UserActions.ts");
/* harmony import */ var _utils_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/icons */ "./src/utils/icons.ts");
/* harmony import */ var _Strings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Strings */ "./src/components/ViewedByCustomer/Strings.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();




/**
 * The _ViewedByCustomer_  component allows your agents to see, within the Salesforce Lightning console, every result which the user clicked. It displays an icon and a label on each result, if already viewed by the customer who created the case (see [Coveo Component ViewedByCustomer](https://docs.coveo.com/en/3073/coveoforsalesforce/viewedbycustomercomponent)).
 * ```html
 * <div class="CoveoViewedByCustomer"></div>
 * ```
 */
var ViewedByCustomer = /** @class */ (function (_super) {
    __extends(ViewedByCustomer, _super);
    /**
     * Create an instance of {@link ViewedByCustomer}.
     * @param element Element on which to bind the component.
     * @param options Initialization options of the component.
     * @param bindings Bindings of the Search-UI environment.
     */
    function ViewedByCustomer(element, options, bindings, result) {
        var _this = _super.call(this, element, ViewedByCustomer.ID, bindings) || this;
        _this.element = element;
        _this.options = options;
        _this.bindings = bindings;
        if (_this.root.getElementsByClassName(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].computeCssClassNameForType(_UserActions_UserActions__WEBPACK_IMPORTED_MODULE_1__["UserActions"].ID)).length === 0) {
            _this.logger.warn('The ViewedByCustomer component has been detected without a UserActions component. You may encounter issues with the former.');
        }
        _this.options = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].initComponentOptions(element, ViewedByCustomer, options);
        result = result ? result : _this.resolveResult();
        if (!result) {
            throw new Error('No result found on result component ViewedByCustomer.');
        }
        if (result.isUserActionView) {
            _this.render();
        }
        return _this;
    }
    ViewedByCustomer.prototype.render = function () {
        if (this.options.showIcon) {
            var iconElement = document.createElement('span');
            iconElement.classList.add(ViewedByCustomer.ICON_CLASS);
            iconElement.innerHTML = _utils_icons__WEBPACK_IMPORTED_MODULE_2__["user"];
            this.element.appendChild(iconElement);
        }
        var labelElement = document.createElement('span');
        labelElement.classList.add(ViewedByCustomer.LABEL_CLASS);
        labelElement.innerText = this.options.label;
        this.element.appendChild(labelElement);
    };
    /**
     * Generate a ViewedByCustomer in a preformated Dom ready to be inserted in a result
     * @param bindings bindings to be used by the {@link ViewedByCustomer}
     * @param result result to be used by the {@link ViewedByCustomer}
     */
    ViewedByCustomer.getViewedByCustomerResultRowDom = function (bindings, result) {
        var viewedByCustomerRow = document.createElement('div');
        viewedByCustomerRow.classList.add('coveo-result-row');
        var viewedByCustomerCell = document.createElement('div');
        viewedByCustomerCell.classList.add('coveo-result-cell');
        var viewedByCustomerElement = document.createElement('span');
        new ViewedByCustomer(viewedByCustomerElement, undefined, bindings, result);
        viewedByCustomerCell.appendChild(viewedByCustomerElement);
        viewedByCustomerRow.appendChild(viewedByCustomerCell);
        return viewedByCustomerRow;
    };
    /**
     * Unique Identifier used by the Search-UI.
     */
    ViewedByCustomer.ID = 'ViewedByCustomer';
    /**
     * Default options used by the component.
     */
    ViewedByCustomer.options = {
        showIcon: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildBooleanOption({ defaultValue: true }),
        label: coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["ComponentOptions"].buildStringOption({ defaultValue: Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])(ViewedByCustomer.ID + "_DefaultLabel") }),
    };
    // Internal CSS selectors.
    ViewedByCustomer.ICON_CLASS = 'viewed-by-customer-icon';
    ViewedByCustomer.LABEL_CLASS = 'viewed-by-customer-label';
    return ViewedByCustomer;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"]));

coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Initialization"].registerAutoCreateComponent(ViewedByCustomer);


/***/ }),

/***/ "./src/models/UserProfileModel.ts":
/*!****************************************!*\
  !*** ./src/models/UserProfileModel.ts ***!
  \****************************************/
/*! exports provided: UserActionSession, UserAction, UserProfileModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionSession", function() { return UserActionSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAction", function() { return UserAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileModel", function() { return UserProfileModel; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_UserActions_Events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/UserActions/Events */ "./src/components/UserActions/Events.ts");
/* harmony import */ var _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest/UserProfilingEndpoint */ "./src/rest/UserProfilingEndpoint.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (undefined && undefined.__assign) || function () {
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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



var UserActionSession = /** @class */ (function () {
    function UserActionSession(timestamp, actions, expanded) {
        if (expanded === void 0) { expanded = false; }
        this.timestamp = timestamp;
        this.actions = actions;
        this.expanded = expanded;
    }
    return UserActionSession;
}());

/**
 * Represent an action that a user has made.
 */
var UserAction = /** @class */ (function () {
    function UserAction(type, timestamp, raw, document, query) {
        this.type = type;
        this.timestamp = timestamp;
        this.raw = raw;
        this.document = document;
        this.query = query;
    }
    return UserAction;
}());

/**
 * Model that store each user profile informations such as actions made by them,
 */
var UserProfileModel = /** @class */ (function (_super) {
    __extends(UserProfileModel, _super);
    /**
     * Create a `UserProfileModel` and bound it to `element`.
     * Also create a `UserProfilingEndpoint` that will be use to fetch actions made by a user.
     *
     * @param element An element on which the model will be bound on.
     * @param options A set of options necessary for the component creation.
     */
    function UserProfileModel(element, options) {
        var _this = _super.call(this, element, UserProfileModel.ID, {}) || this;
        _this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.restUri);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.organizationId);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].isNotUndefined(_this.options.searchEndpoint);
        _this.getOrFetchCache = {};
        _this.endpoint = new _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__["UserProfilingEndpoint"]({
            uri: _this.options.restUri,
            accessToken: _this.options.accessToken || _this.options.searchEndpoint.accessToken,
            organization: _this.options.organizationId,
        });
        return _this;
    }
    /**
     * Get all actions related to a user.
     *
     * @param userId The identifier of a user.
     */
    UserProfileModel.prototype.getActions = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var actions, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        actions = this.get(userId);
                        if (!Array.isArray(actions)) return [3 /*break*/, 1];
                        _a = actions;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.fetchActions(userId)];
                    case 2:
                        _a = _b.sent();
                        _b.label = 3;
                    case 3:
                        actions = _a;
                        this.set(userId, actions, UserProfileModel.MODEL_CONFIG);
                        return [2 /*return*/, actions];
                }
            });
        });
    };
    /**
     * Delete all actions related to a user from the model.
     *
     * @param userId The identifier of a user.
     */
    UserProfileModel.prototype.deleteActions = function (userId) {
        this.set(userId, undefined, UserProfileModel.MODEL_CONFIG);
        this.getOrFetchCache[userId] = undefined;
    };
    UserProfileModel.prototype.fetchActions = function (userId) {
        var _this = this;
        var pendingFetch = this.getOrFetchCache[userId];
        var doFetch = function () {
            _this.getOrFetchCache[userId] = _this.endpoint.getActions(userId).then(function (actions) { return _this.parseGetActionsResponse(userId, actions); });
            return _this.getOrFetchCache[userId];
        };
        return pendingFetch || doFetch();
    };
    UserProfileModel.prototype.parseGetActionsResponse = function (userId, actions) {
        var userActions = this.buildUserActions(actions);
        this.registerNewAttribute(userId, userActions);
        return userActions;
    };
    UserProfileModel.prototype.fetchDocuments = function (urihashes) {
        return __awaiter(this, void 0, void 0, function () {
            var builder, query, searchRequest, documentsDict;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (urihashes.length === 0) {
                            return [2 /*return*/, Promise.resolve({})];
                        }
                        builder = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["QueryBuilder"]();
                        builder.advancedExpression.addFieldExpression('@urihash', '==', urihashes.filter(function (x) { return x; }));
                        // Ensure we fetch the good amount of document.
                        builder.numberOfResults = urihashes.length;
                        query = builder.build();
                        return [4 /*yield*/, this.options.searchEndpoint.search(query)];
                    case 1:
                        searchRequest = _a.sent();
                        // Here we directly send the event using the Analytics Endpoint to prevent any unwanted side effects.
                        this.sendUserActionLoad(query, searchRequest);
                        documentsDict = searchRequest.results.reduce(function (acc, result) {
                            var _a;
                            return (__assign(__assign({}, acc), (_a = {}, _a[result.raw.urihash] = result, _a)));
                        }, {});
                        return [2 /*return*/, documentsDict];
                }
            });
        });
    };
    UserProfileModel.prototype.buildUserActions = function (actions) {
        return __awaiter(this, void 0, void 0, function () {
            var documents, urihashes, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        documents = {};
                        urihashes = actions
                            .filter(this.isClick)
                            .map(function (action) { return action.value.uri_hash; })
                            // Remove duplicates.
                            .filter(function (value, index, list) { return list.indexOf(value) === index; });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.fetchDocuments(urihashes)];
                    case 2:
                        documents = _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        this.logger.error(UserProfileModel.ERROR_MESSAGE.FETCH_CLICKED_DOCUMENT_FAIL, error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, actions.map(function (action) {
                            return new UserAction(action.name, new Date(action.time), action.value, _this.isClickOrView(action) ? documents[action.value.uri_hash] : undefined, _this.isSearch(action) ? action.value.query_expression : undefined);
                        })];
                }
            });
        });
    };
    UserProfileModel.prototype.isClick = function (action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__["UserActionType"].Click;
    };
    UserProfileModel.prototype.isClickOrView = function (action) {
        return this.isClick(action) || action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__["UserActionType"].PageView;
    };
    UserProfileModel.prototype.isSearch = function (action) {
        return action.name === _rest_UserProfilingEndpoint__WEBPACK_IMPORTED_MODULE_2__["UserActionType"].Search;
    };
    UserProfileModel.prototype.sendUserActionLoad = function (query, result) {
        var _a, _b, _c;
        var uaClient = (_a = coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Component"].get(this.element, coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["SearchInterface"], true)) === null || _a === void 0 ? void 0 : _a.usageAnalytics;
        uaClient === null || uaClient === void 0 ? void 0 : uaClient.logSearchEvent(_components_UserActions_Events__WEBPACK_IMPORTED_MODULE_1__["UserActionEvents"].load, {});
        uaClient === null || uaClient === void 0 ? void 0 : uaClient.endpoint.sendSearchEvents([
            __assign(__assign({}, uaClient.getPendingSearchEvent().templateSearchEvent), {
                queryPipeline: result.pipeline,
                splitTestRunName: result.splitTestRun,
                splitTestRunVersion: result.splitTestRun ? result.pipeline : undefined,
                queryText: (_b = query.q) !== null && _b !== void 0 ? _b : '',
                advancedQuery: (_c = query.aq) !== null && _c !== void 0 ? _c : '',
                didYouMean: query.enableDidYouMean,
                numberOfResults: result.totalCount,
                responseTime: result.duration,
                pageNumber: query.firstResult / query.numberOfResults,
                resultsPerPage: query.numberOfResults,
                searchQueryUid: result.searchUid,
                contextual: false,
            }),
        ]);
    };
    /**
     * Identifier of the Search-UI component.
     */
    UserProfileModel.ID = 'UserProfileModel';
    UserProfileModel.ERROR_MESSAGE = Object.freeze({
        FETCH_CLICKED_DOCUMENT_FAIL: 'Fetching clicked documents details failed',
    });
    UserProfileModel.MODEL_CONFIG = {
        customAttribute: true,
        silent: true,
    };
    return UserProfileModel;
}(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Model"]));

/**
 * Expose the UserProfileModel so a user action implementation can use it.
 */
window['Coveo'] && (window['Coveo']['UserProfileModel'] = UserProfileModel);


/***/ }),

/***/ "./src/rest/UserProfilingEndpoint.ts":
/*!*******************************************!*\
  !*** ./src/rest/UserProfilingEndpoint.ts ***!
  \*******************************************/
/*! exports provided: UserActionType, UserProfilingEndpoint */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserActionType", function() { return UserActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfilingEndpoint", function() { return UserProfilingEndpoint; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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

/**
 * User Actions posible type.
 */
var UserActionType;
(function (UserActionType) {
    UserActionType["Search"] = "SEARCH";
    UserActionType["Click"] = "CLICK";
    UserActionType["PageView"] = "VIEW";
    UserActionType["Custom"] = "CUSTOM";
    UserActionType["TicketCreated"] = "TICKET_CREATED";
})(UserActionType || (UserActionType = {}));
/**
 * Class that handle interaction with the endpoint.
 */
var UserProfilingEndpoint = /** @class */ (function () {
    /**
     * Create a `UserProfilingEndpoint` instance.
     * Create [`EndpointCaller`]{@link EndpointCaller} instance and uses it to communicate with the endpoint internally.
     *
     * @param options The options to initialize the component.
     */
    function UserProfilingEndpoint(options) {
        this.options = options;
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.accessToken);
        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(this.options.organization);
        this.options.uri = this.options.uri ? this.options.uri : UserProfilingEndpoint.DEFAULT_URI;
        this.options.accessToken.subscribeToRenewal(this.buildEndpointCaller.bind(this));
        this.buildEndpointCaller(this.options.accessToken.token);
    }
    UserProfilingEndpoint.prototype.buildEndpointCaller = function (token) {
        this.caller = new coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["EndpointCaller"]({ accessToken: token });
    };
    /**
     * Get the list of actions a user has performed.
     *
     * @param userId Id from which action history will be retrieve. (either visitId or user email).
     */
    UserProfilingEndpoint.prototype.getActions = function (userId) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["Assert"].exists(userId);
                        return [4 /*yield*/, this.caller.call({
                                method: 'POST',
                                url: this.options.uri + "/rest/organizations/" + this.options.organization + "/machinelearning/user/actions",
                                queryString: [],
                                responseType: 'json',
                                requestDataType: 'application/json',
                                requestData: { objectId: userId },
                                errorsAsSuccess: false,
                            })];
                    case 1:
                        response = _a.sent();
                        if (this.isResponseEmpty(response)) {
                            throw new Error("Response has no values: " + JSON.stringify(response));
                        }
                        return [2 /*return*/, this.parseResponse(response.data)];
                }
            });
        });
    };
    UserProfilingEndpoint.prototype.parseResponse = function (response) {
        return response.value.map(function (v) {
            return {
                time: parseInt(v.time),
                value: JSON.parse(v.value),
                name: v.name,
            };
        });
    };
    UserProfilingEndpoint.prototype.isResponseEmpty = function (response) {
        return !response || !response.data || !response.data.value || !Array.isArray(response.data.value) || !(response.data.value.length > 0);
    };
    /**
     * Default platform uri.
     */
    UserProfilingEndpoint.DEFAULT_URI = 'https://platform.cloud.coveo.com';
    return UserProfilingEndpoint;
}());



/***/ }),

/***/ "./src/utils/icons.ts":
/*!****************************!*\
  !*** ./src/utils/icons.ts ***!
  \****************************/
/*! exports provided: arrowDown, duplicate, search, view, dot, flag, paperclipIcon, user, wait, copy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrowDown", function() { return arrowDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "duplicate", function() { return duplicate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "view", function() { return view; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dot", function() { return dot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flag", function() { return flag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "paperclipIcon", function() { return paperclipIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wait", function() { return wait; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony import */ var _svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../svg/arrow-down.svg */ "./svg/arrow-down.svg");
/* harmony import */ var _svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _svg_duplicate_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../svg/duplicate.svg */ "./svg/duplicate.svg");
/* harmony import */ var _svg_duplicate_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_svg_duplicate_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _svg_search_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../svg/search.svg */ "./svg/search.svg");
/* harmony import */ var _svg_search_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_search_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _svg_view_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../svg/view.svg */ "./svg/view.svg");
/* harmony import */ var _svg_view_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_view_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _svg_dot_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../svg/dot.svg */ "./svg/dot.svg");
/* harmony import */ var _svg_dot_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_dot_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _svg_flag_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../svg/flag.svg */ "./svg/flag.svg");
/* harmony import */ var _svg_flag_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_flag_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _svg_paperclip_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../svg/paperclip.svg */ "./svg/paperclip.svg");
/* harmony import */ var _svg_paperclip_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_svg_paperclip_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _svg_user_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../svg/user.svg */ "./svg/user.svg");
/* harmony import */ var _svg_user_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_svg_user_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _svg_wait_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../svg/wait.svg */ "./svg/wait.svg");
/* harmony import */ var _svg_wait_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_svg_wait_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _svg_copy_paste_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../svg/copy-paste.svg */ "./svg/copy-paste.svg");
/* harmony import */ var _svg_copy_paste_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_svg_copy_paste_svg__WEBPACK_IMPORTED_MODULE_9__);










var arrowDown = _svg_arrow_down_svg__WEBPACK_IMPORTED_MODULE_0__;
var duplicate = _svg_duplicate_svg__WEBPACK_IMPORTED_MODULE_1__;
var search = _svg_search_svg__WEBPACK_IMPORTED_MODULE_2__;
var view = _svg_view_svg__WEBPACK_IMPORTED_MODULE_3__;
var dot = _svg_dot_svg__WEBPACK_IMPORTED_MODULE_4__;
var flag = _svg_flag_svg__WEBPACK_IMPORTED_MODULE_5__;
var paperclipIcon = _svg_paperclip_svg__WEBPACK_IMPORTED_MODULE_6__;
var user = _svg_user_svg__WEBPACK_IMPORTED_MODULE_7__;
var wait = _svg_wait_svg__WEBPACK_IMPORTED_MODULE_8__;
var copy = _svg_copy_paste_svg__WEBPACK_IMPORTED_MODULE_9__;


/***/ }),

/***/ "./src/utils/time.ts":
/*!***************************!*\
  !*** ./src/utils/time.ts ***!
  \***************************/
/*! exports provided: formatDate, formatDateShort, formatTime, formatTimeShort, formatDateAndTime, formatDateAndTimeShort, formatTimeInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateShort", function() { return formatDateShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeShort", function() { return formatTimeShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateAndTime", function() { return formatDateAndTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDateAndTimeShort", function() { return formatDateAndTimeShort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTimeInterval", function() { return formatTimeInterval; });
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coveo-search-ui */ "coveo-search-ui");
/* harmony import */ var coveo_search_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Format a date object to a date string that follow the format describe below.
 * > Ex: `Mon, Apr 29, 2019`
 * @param date The date that will be formated.
 * @returns A string formated version of the date.
 */
function formatDate(date) {
    return date.toLocaleDateString('default', {
        weekday: 'short',
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    });
}
/**
 * Format a date object to a short date string that follow the format describe below.
 * > Ex: `Apr 29`
 * @param date The date that will be formated.
 * @returns A string formated version of the date.
 */
function formatDateShort(date) {
    return date.toLocaleDateString('default', {
        day: '2-digit',
        month: 'short',
    });
}
/**
 * Format a date object to a time string that follow the format describe below.
 * > Ex: `12:00:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the time.
 */
function formatTime(date) {
    return date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });
}
/**
 * Format a date object to a short time string that follow the format describe below.
 * > Ex: `12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the time.
 */
function formatTimeShort(date) {
    return date.toLocaleTimeString('default', {
        hour: '2-digit',
        minute: '2-digit',
    });
}
/**
 * Format a date object to a date and time string that follow the format describe below.
 * > Ex: `Mon, Apr 29, 2019 - 12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the date and time.
 */
function formatDateAndTime(date) {
    return formatDate(date) + " - " + formatTimeShort(date);
}
/**
 * Format a date object to a date and time string that follow the format describe below.
 * > Ex: `Apr 29 - 12:00 PM`
 * @param date The date that will be formated.
 * @returns A string formated version of the date and time.
 */
function formatDateAndTimeShort(date) {
    return formatDateShort(date) + " - " + formatTimeShort(date);
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
var WEEK = 7 * DAY;
/**
 * Format a time interval to a user friendly string format.
 * > Ex: `5 minutes 10 seconds`
 * @param interval The time interval in milliseconds to format in a user friendly fashion.
 */
function formatTimeInterval(interval) {
    var string_index = 1;
    var nb_seconds = Math.floor(Math.round((interval % MINUTE) / SECOND));
    var nb_minutes = Math.floor((interval % HOUR) / MINUTE);
    var nb_hour = Math.floor((interval % DAY) / HOUR);
    var nb_day = Math.floor((interval % WEEK) / DAY);
    var nb_week = Math.floor(interval / WEEK);
    var formater = function (nb, unit) { return nb + " " + unit + (nb === 1 ? '' : 's'); };
    var seconds_str = formater(nb_seconds, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('second'));
    var minutes_str = formater(nb_minutes, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('minute'));
    var hour_str = formater(nb_hour, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('hour'));
    var day_str = formater(nb_day, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('day'));
    var week_str = formater(nb_week, Object(coveo_search_ui__WEBPACK_IMPORTED_MODULE_0__["l"])('week'));
    var time_per_unit = [
        [nb_week, "" + week_str + (nb_day > 0 ? " " + day_str : '')],
        [nb_day, "" + day_str + (nb_hour > 0 ? " " + hour_str : '')],
        [nb_hour, "" + hour_str + (nb_minutes > 0 ? " " + minutes_str : '')],
        [nb_minutes, "" + minutes_str + (nb_seconds > 0 ? " " + seconds_str : '')],
        [nb_seconds, seconds_str],
    ];
    var first_meaningful_tuple = time_per_unit.find(function (_a) {
        var amount = _a[0], _ = _a[1];
        return amount > 0;
    }) || [0, '0 seconds'];
    return first_meaningful_tuple[string_index];
}


/***/ }),

/***/ "./src/utils/translation.ts":
/*!**********************************!*\
  !*** ./src/utils/translation.ts ***!
  \**********************************/
/*! exports provided: Language, Translation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Language", function() { return Language; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Translation", function() { return Translation; });
/**
 * Supported languages.
 */
var Language;
(function (Language) {
    Language["English"] = "en";
})(Language || (Language = {}));
/**
 * Translation utilities.
 */
var Translation = /** @class */ (function () {
    function Translation() {
    }
    /**
     * Register translations for a language.
     *
     * @param language Language of the dictionary.
     * @param translationDictionary Key-Value dictionary that contain all traslation for a language.
     */
    Translation.register = function (language, translationDictionary) {
        var _a;
        Object.keys(translationDictionary).forEach(function (key) {
            String['locales'] = String['locales'] || {};
            String['locales'][language] = String['locales'][language] || {};
            String['locales'][language][key] = translationDictionary[key];
        });
        String['toLocaleString'].call(this, (_a = {}, _a[language] = String['locales'][language], _a));
    };
    return Translation;
}());



/***/ }),

/***/ "./svg/arrow-down.svg":
/*!****************************!*\
  !*** ./svg/arrow-down.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" width=\".5em\" height=\".5em\" enable-background=\"new 0 0 10 6\" viewBox=\"0 0 10 6\">\n    <g fill=\"black\">\n        <path d=\"m5 5.932c-.222 0-.443-.084-.612-.253l-4.134-4.134c-.338-.338-.338-.886 0-1.224s.886-.338 1.224 0l3.522 3.521 3.523-3.521c.336-.338.886-.338 1.224 0s .337.886-.001 1.224l-4.135 4.134c-.168.169-.39.253-.611.253z\"/>\n    </g>\n</svg>\n"

/***/ }),

/***/ "./svg/copy-paste.svg":
/*!****************************!*\
  !*** ./svg/copy-paste.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg width=\".5em\" height=\".5em\" viewBox=\"0 0 20 20\">\n    <path d=\"M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1\"></path>\n    <path d=\"M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14\"></path>\n</svg>"

/***/ }),

/***/ "./svg/dot.svg":
/*!*********************!*\
  !*** ./svg/dot.svg ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1em\" height=\"1em\" fill=\"#004990\" viewBox=\"0 0 10 10\">\n<circle cx=\"5\" cy=\"5\" r=\"5\" fill=\"#f7f8f9\"/>\n  <circle cx=\"5\" cy=\"5\" r=\"3\"/>\n</svg>\n"

/***/ }),

/***/ "./svg/duplicate.svg":
/*!***************************!*\
  !*** ./svg/duplicate.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1em\" height=\"1em\" fill=\"#004990\" viewBox=\"0 0 30 30\">\n  <circle cx=\"15\" cy=\"15\" r=\"15\" fill=\"#f7f8f9\"/>\n  <g transform=\"translate(6, 5)\">\n    <path d=\"M4 5h7v1H4V5m0 3h7v1H4V8m0 3h7v1H4v-1\"/>\n    <path d=\"M15 1c.009-.525.066-1-1-1H1.002c-.651 0-1 .33-1 1v15c0 .66.351 1 1 1H3v2c.075.546.383 1 1 1h13c.718 0 1-.295 1-1V3c.001-.468-.406-.99-1-1h-2V1M2 15V2h11v13H2m14 3H5v-.995L14 17c.5.005.976-.428 1-1l.021-12H16v14\"/>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./svg/flag.svg":
/*!**********************!*\
  !*** ./svg/flag.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" x=\"0px\" y=\"0px\" width=\"1em\" height=\"1em\" viewBox=\"0 0 52 52\">\n<g>\n\t<path fill=\"#2E844A\" d=\"M9,3.5C9,2.7,8.3,2,7.5,2h-3C3.7,2,3,2.7,3,3.5v45C3,49.3,3.7,50,4.5,50h3C8.3,50,9,49.3,9,48.5V3.5z\"/>\n\t<path fill=\"#2E844A\" d=\"M47.5,7.7c-16,8.4-14.2-8.8-33.5-2.1c-0.6,0.2-1,0.8-1,1.4v23.3c0,0.7,0.7,1.2,1.3,0.9   c19.2-6.4,17.2,11.2,33.9,1.8c0.5-0.3,0.8-0.8,0.8-1.3V8.5C49,7.8,48.2,7.3,47.5,7.7z\"/>\n</g>\n</svg>"

/***/ }),

/***/ "./svg/paperclip.svg":
/*!***************************!*\
  !*** ./svg/paperclip.svg ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" id=\"Calque_1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n\t viewBox=\"0 0 80 75\" enable-background=\"new 0 0 80 75\" xml:space=\"preserve\">\n\t<path d=\"M73.844,6.458c-8.208-8.611-21.558-8.611-29.766,0L4.389,48.092c-5.853,6.14-5.853,16.164,0,22.304\n\t\t\tc5.853,6.14,15.409,6.14,21.262,0l39.688-41.634c3.497-3.668,3.497-9.714,0-13.382c-3.497-3.668-9.26-3.668-12.757,0\n\t\t\tL18.564,51.065c-0.777,0.793-1.088,1.964-0.812,3.064c0.276,1.1,1.095,1.959,2.143,2.249c1.049,0.289,2.165-0.036,2.921-0.852\n\t\t\tL56.835,19.84c1.215-1.274,3.038-1.274,4.252,0c1.215,1.274,1.215,3.187,0,4.461L21.399,65.935c-3.571,3.745-9.187,3.745-12.757,0\n\t\t\tc-3.57-3.745-3.57-9.637,0-13.382L48.33,10.919c5.926-6.217,15.335-6.217,21.262,0c5.926,6.217,5.926,16.087,0,22.304\n\t\t\tL35.573,68.908c-0.778,0.793-1.089,1.964-0.814,3.065c0.276,1.101,1.095,1.96,2.145,2.25c1.049,0.289,2.166-0.037,2.922-0.854\n\t\t\tl34.018-35.686C82.052,29.072,82.052,15.069,73.844,6.458z\"/>\n</svg>\n"

/***/ }),

/***/ "./svg/search.svg":
/*!************************!*\
  !*** ./svg/search.svg ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1em\" height=\"1em\" fill=\"#004990\" viewBox=\"0 0 25 25\">\n  <circle cx=\"12.5\" cy=\"12.5\" r=\"12.5\" fill=\"#f7f8f9\"/>\n  <g transform=\"translate(5, 5)\">\n    <path d=\"M2.01 6.03a4.025 4.025 0 0 1 4.02-4.02 4.025 4.025 0 0 1 4.02 4.02 4.025 4.025 0 0 1-4.02 4.02 4.024 4.024 0 0 1-4.02-4.02m12.696 7.256l-3.769-3.768a5.991 5.991 0 0 0 1.12-3.487 6.036 6.036 0 0 0-6.03-6.03 6.036 6.036 0 0 0-6.03 6.03 6.036 6.036 0 0 0 6.03 6.03c1.3 0 2.502-.418 3.487-1.12l3.769 3.769a1.001 1.001 0 0 0 1.42 0 1.005 1.005 0 0 0 0-1.422\" />\n  </g>\n</svg>\n"

/***/ }),

/***/ "./svg/user.svg":
/*!**********************!*\
  !*** ./svg/user.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1em\" height=\"1em\" viewBox=\"0 0 15 15\">\n  <path d=\"M 7.5,15 A 7.5,7.5 0 1 1 15,7.5 7.5,7.5 0 0 1 7.5,15 Z M 7.5,1 A 6.5,6.5 0 1 0 14,7.5 6.51,6.51 0 0 0 7.5,1 Z\"/>\n  <path d=\"M 3.39,12.5 A 6.48,6.48 0 0 0 11.5,12.6 7.08,7.08 0 0 0 8.98,11.6 8,8 0 0 1 8.6,10.25 4,4 0 0 0 11,6.5 3.78,3.78 0 0 0 7.5,2.5 3.78,3.78 0 0 0 4,6.5 4,4 0 0 0 6.37,10.29 8.25,8.25 0 0 1 6.01,11.61 7.2,7.2 0 0 0 3.39,12.5 Z\"/>\n</svg>\n"

/***/ }),

/***/ "./svg/view.svg":
/*!**********************!*\
  !*** ./svg/view.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1em\" height=\"1em\" fill=\"#004990\" viewBox=\"0 0 800 800\">\n<!-- viewBox=\"0 0 576 512\" -->\n  <circle cx=\"400\" cy=\"400\" r=\"400\" fill=\"#f7f8f9\"/>\n  <g transform=\"translate(112, 144)\">\n    <path d=\"M569.354 231.631C512.969 135.949 407.81 72 288 72 168.14 72 63.004 135.994 6.646 231.631a47.999 47.999 0 0 0 0 48.739C63.031 376.051 168.19 440 288 440c119.86 0 224.996-63.994 281.354-159.631a47.997 47.997 0 0 0 0-48.738zM288 392c-75.162 0-136-60.827-136-136 0-75.162 60.826-136 136-136 75.162 0 136 60.826 136 136 0 75.162-60.826 136-136 136zm104-136c0 57.438-46.562 104-104 104s-104-46.562-104-104c0-17.708 4.431-34.379 12.236-48.973l-.001.032c0 23.651 19.173 42.823 42.824 42.823s42.824-19.173 42.824-42.823c0-23.651-19.173-42.824-42.824-42.824l-.032.001C253.621 156.431 270.292 152 288 152c57.438 0 104 46.562 104 104z\"/>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./svg/wait.svg":
/*!**********************!*\
  !*** ./svg/wait.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<svg enable-background=\"new 0 0 18 18\" viewBox=\"0 0 18 18\" xmlns=\"http://www.w3.org/2000/svg\">\n    <g>\n        <path d=\"m16.76 8.051c-.448 0-.855-.303-.969-.757-.78-3.117-3.573-5.294-6.791-5.294s-6.01 2.177-6.79 5.294c-.134.537-.679.861-1.213.727-.536-.134-.861-.677-.728-1.212 1.004-4.009 4.594-6.809 8.731-6.809 4.138 0 7.728 2.8 8.73 6.809.135.536-.191 1.079-.727 1.213-.081.02-.162.029-.243.029z\" />\n        <path d=\"m9 18c-4.238 0-7.943-3.007-8.809-7.149-.113-.541.234-1.071.774-1.184.541-.112 1.071.232 1.184.773.674 3.222 3.555 5.56 6.851 5.56s6.178-2.338 6.852-5.56c.113-.539.634-.892 1.184-.773.54.112.887.643.773 1.184-.866 4.142-4.57 7.149-8.809 7.149z\" />\n    </g>\n</svg>"

/***/ }),

/***/ "coveo-search-ui":
/*!************************!*\
  !*** external "Coveo" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_coveo_search_ui__;

/***/ })

/******/ });
});
//# sourceMappingURL=CoveoJsSearchExtensions.js.map