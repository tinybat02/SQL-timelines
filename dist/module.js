define(["@grafana/ui","moment","react"], function(__WEBPACK_EXTERNAL_MODULE__grafana_ui__, __WEBPACK_EXTERNAL_MODULE_moment__, __WEBPACK_EXTERNAL_MODULE_react__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./module.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../node_modules/react-calendar-timeline/lib/Timeline.css":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js??ref--8-1!../node_modules/postcss-loader/src??ref--8-2!../node_modules/sass-loader/lib/loader.js!../node_modules/react-calendar-timeline/lib/Timeline.css ***!
  \********************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, ".react-calendar-timeline * {\n  box-sizing: border-box; }\n\n.react-calendar-timeline .rct-outer {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.react-calendar-timeline .rct-scroll {\n  display: inline-block;\n  white-space: normal;\n  vertical-align: top;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  touch-action: none; }\n\n.react-calendar-timeline .rct-item:hover {\n  z-index: 88; }\n\n.react-calendar-timeline .rct-item .rct-item-content {\n  position: sticky;\n  position: -webkit-sticky;\n  left: 0px;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: 2px;\n  padding: 0 6px;\n  height: 100%; }\n\n.react-calendar-timeline .rct-sidebar {\n  overflow: hidden;\n  white-space: normal;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  box-sizing: border-box;\n  border-right: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar.rct-sidebar-right {\n  border-right: 0;\n  border-left: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row {\n  padding: 0 4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  margin: 0;\n  border-bottom: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row.rct-sidebar-row-odd {\n  background: rgba(0, 0, 0, 0.05); }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row.rct-sidebar-row-even {\n  background: transparent; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl {\n  position: absolute;\n  border-left: 1px solid #bbb;\n  z-index: 30; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-vl-first {\n  border-left-width: 2px; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-6, .react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-0 {\n  background: rgba(250, 246, 225, 0.5); }\n\n.react-calendar-timeline .rct-horizontal-lines {\n  -webkit-user-select: none;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-even,\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {\n  border-bottom: 1px solid #bbb;\n  box-sizing: border-box;\n  z-index: 40; }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {\n  background: rgba(0, 0, 0, 0.05); }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-even {\n  background: transparent; }\n\n.react-calendar-timeline .rct-cursor-line {\n  position: absolute;\n  width: 2px;\n  background: #2196f3;\n  z-index: 51; }\n\n.react-calendar-timeline .rct-dateHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  border-bottom: 1px solid #bbb;\n  cursor: pointer;\n  font-size: 14px;\n  background-color: #f0f0f0;\n  border-left: 2px solid #bbb; }\n\n.react-calendar-timeline .rct-dateHeader-primary {\n  background-color: transparent;\n  background-color: initial;\n  border-left: 1px solid #bbb;\n  border-right: 1px solid #bbb;\n  color: #fff; }\n\n.react-calendar-timeline .rct-header-root {\n  background: #c52020;\n  border-bottom: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-calendar-header {\n  border: 1px solid #bbb; }\n", "",{"version":3,"sources":["Timeline.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB,EAAE;;AAE1B;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB,EAAE;;AAEvB;EACE,qBAAqB;EACrB,mBAAmB;EACnB,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAElB,kBAAkB,EAAE;;AAEtB;EACE,WAAW,EAAE;;AAEf;EACE,gBAAgB;EAChB,wBAAwB;EACxB,SAAS;EACT,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB;EAClB,cAAc;EACd,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB;EACrB,mBAAmB;EACnB,kBAAkB;EAClB,sBAAsB;EACtB,4BAA4B,EAAE;;AAEhC;EACE,eAAe;EACf,2BAA2B,EAAE;;AAE/B;EACE,cAAc;EACd,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;EACvB,sBAAsB;EACtB,SAAS;EACT,6BAA6B,EAAE;;AAEjC;EACE,+BAA+B,EAAE;;AAEnC;EACE,uBAAuB,EAAE;;AAE3B;EACE,kBAAkB;EAClB,2BAA2B;EAC3B,WAAW,EAAE;;AAEf;EACE,sBAAsB,EAAE;;AAE1B;EACE,oCAAoC,EAAE;;AAExC;EACE,yBAAyB;EACzB,2BAA2B;EAC3B,qBAAqB;EACrB,iBAAiB,EAAE;;AAErB;;EAEE,6BAA6B;EAC7B,sBAAsB;EACtB,WAAW,EAAE;;AAEf;EACE,+BAA+B,EAAE;;AAEnC;EACE,uBAAuB,EAAE;;AAE3B;EACE,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,WAAW,EAAE;;AAEf;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,6BAA6B;EAC7B,eAAe;EACf,eAAe;EACf,yBAAyB;EACzB,2BAA2B,EAAE;;AAE/B;EACE,6BAAyB;EAAzB,yBAAyB;EACzB,2BAA2B;EAC3B,4BAA4B;EAC5B,WAAW,EAAE;;AAEf;EACE,mBAAmB;EACnB,6BAA6B,EAAE;;AAEjC;EACE,sBAAsB,EAAE","file":"Timeline.css","sourcesContent":[".react-calendar-timeline * {\n  box-sizing: border-box; }\n\n.react-calendar-timeline .rct-outer {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap; }\n\n.react-calendar-timeline .rct-scroll {\n  display: inline-block;\n  white-space: normal;\n  vertical-align: top;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -ms-touch-action: none;\n  touch-action: none; }\n\n.react-calendar-timeline .rct-item:hover {\n  z-index: 88; }\n\n.react-calendar-timeline .rct-item .rct-item-content {\n  position: sticky;\n  position: -webkit-sticky;\n  left: 0px;\n  overflow: hidden;\n  display: inline-block;\n  border-radius: 2px;\n  padding: 0 6px;\n  height: 100%; }\n\n.react-calendar-timeline .rct-sidebar {\n  overflow: hidden;\n  white-space: normal;\n  display: inline-block;\n  vertical-align: top;\n  position: relative;\n  box-sizing: border-box;\n  border-right: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar.rct-sidebar-right {\n  border-right: 0;\n  border-left: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row {\n  padding: 0 4px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  box-sizing: border-box;\n  margin: 0;\n  border-bottom: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row.rct-sidebar-row-odd {\n  background: rgba(0, 0, 0, 0.05); }\n\n.react-calendar-timeline .rct-sidebar .rct-sidebar-row.rct-sidebar-row-even {\n  background: transparent; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl {\n  position: absolute;\n  border-left: 1px solid #bbb;\n  z-index: 30; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-vl-first {\n  border-left-width: 2px; }\n\n.react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-6, .react-calendar-timeline .rct-vertical-lines .rct-vl.rct-day-0 {\n  background: rgba(250, 246, 225, 0.5); }\n\n.react-calendar-timeline .rct-horizontal-lines {\n  -webkit-user-select: none;\n  -moz-user-select: -moz-none;\n  -ms-user-select: none;\n  user-select: none; }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-even,\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {\n  border-bottom: 1px solid #bbb;\n  box-sizing: border-box;\n  z-index: 40; }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-odd {\n  background: rgba(0, 0, 0, 0.05); }\n\n.react-calendar-timeline .rct-horizontal-lines .rct-hl-even {\n  background: transparent; }\n\n.react-calendar-timeline .rct-cursor-line {\n  position: absolute;\n  width: 2px;\n  background: #2196f3;\n  z-index: 51; }\n\n.react-calendar-timeline .rct-dateHeader {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  border-bottom: 1px solid #bbb;\n  cursor: pointer;\n  font-size: 14px;\n  background-color: #f0f0f0;\n  border-left: 2px solid #bbb; }\n\n.react-calendar-timeline .rct-dateHeader-primary {\n  background-color: initial;\n  border-left: 1px solid #bbb;\n  border-right: 1px solid #bbb;\n  color: #fff; }\n\n.react-calendar-timeline .rct-header-root {\n  background: #c52020;\n  border-bottom: 1px solid #bbb; }\n\n.react-calendar-timeline .rct-calendar-header {\n  border: 1px solid #bbb; }\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "../node_modules/gud/index.js":
/*!************************************!*\
  !*** ../node_modules/gud/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../node_modules/interactjs/dist/interact.min.js":
/*!*******************************************************!*\
  !*** ../node_modules/interactjs/dist/interact.min.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* interact.js 1.9.20 | https://raw.github.com/taye/interact.js/master/LICENSE */
!function(t){if(true)module.exports=t();else {}}((function(){var t={};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(t){return!(!t||!t.Window)&&t instanceof t.Window};var e={};Object.defineProperty(e,"__esModule",{value:!0}),e.init=r,e.getWindow=o,e.default=void 0;var n={realWindow:void 0,window:void 0,getWindow:o,init:r};function r(t){n.realWindow=t;var e=t.document.createTextNode("");e.ownerDocument!==t.document&&"function"==typeof t.wrap&&t.wrap(e)===e&&(t=t.wrap(t)),n.window=t}function o(e){return(0,t.default)(e)?e:(e.ownerDocument||e).defaultView||n.window}"undefined"==typeof window?(n.window=void 0,n.realWindow=void 0):r(window),n.init=r;var i=n;e.default=i;var a={};function s(t){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var l=function(t){return!!t&&"object"===s(t)},u=function(t){return"function"==typeof t},c={window:function(n){return n===e.default.window||(0,t.default)(n)},docFrag:function(t){return l(t)&&11===t.nodeType},object:l,func:u,number:function(t){return"number"==typeof t},bool:function(t){return"boolean"==typeof t},string:function(t){return"string"==typeof t},element:function(t){if(!t||"object"!==s(t))return!1;var n=e.default.getWindow(t)||e.default.window;return/object|function/.test(s(n.Element))?t instanceof n.Element:1===t.nodeType&&"string"==typeof t.nodeName},plainObject:function(t){return l(t)&&!!t.constructor&&/function Object\b/.test(t.constructor.toString())},array:function(t){return l(t)&&void 0!==t.length&&u(t.splice)}};a.default=c;var f={};function d(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.prepared.axis;"x"===n?(e.coords.cur.page.y=e.coords.start.page.y,e.coords.cur.client.y=e.coords.start.client.y,e.coords.velocity.client.y=0,e.coords.velocity.page.y=0):"y"===n&&(e.coords.cur.page.x=e.coords.start.page.x,e.coords.cur.client.x=e.coords.start.client.x,e.coords.velocity.client.x=0,e.coords.velocity.page.x=0)}}function p(t){var e=t.iEvent,n=t.interaction;if("drag"===n.prepared.name){var r=n.prepared.axis;if("x"===r||"y"===r){var o="x"===r?"y":"x";e.page[o]=n.coords.start.page[o],e.client[o]=n.coords.start.client[o],e.delta[o]=0}}}Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;var v={id:"actions/drag",install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.draggable=v.draggable,e.map.drag=v,e.methodDict.drag="draggable",r.actions.drag=v.defaults},listeners:{"interactions:before-action-move":d,"interactions:action-resume":d,"interactions:action-move":p,"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.buttons,o=n.options.drag;if(o&&o.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(r&n.options.drag.mouseButtons)))return t.action={name:"drag",axis:"start"===o.lockAxis?o.startAxis:o.lockAxis},!1}},draggable:function(t){return a.default.object(t)?(this.options.drag.enabled=!1!==t.enabled,this.setPerAction("drag",t),this.setOnEvents("drag",t),/^(xy|x|y|start)$/.test(t.lockAxis)&&(this.options.drag.lockAxis=t.lockAxis),/^(xy|x|y)$/.test(t.startAxis)&&(this.options.drag.startAxis=t.startAxis),this):a.default.bool(t)?(this.options.drag.enabled=t,this):this.options.drag},beforeMove:d,move:p,defaults:{startAxis:"xy",lockAxis:"xy"},getCursor:function(){return"move"}},h=v;f.default=h;var g={};Object.defineProperty(g,"__esModule",{value:!0}),g.default=void 0;var y={init:function(t){var e=t;y.document=e.document,y.DocumentFragment=e.DocumentFragment||m,y.SVGElement=e.SVGElement||m,y.SVGSVGElement=e.SVGSVGElement||m,y.SVGElementInstance=e.SVGElementInstance||m,y.Element=e.Element||m,y.HTMLElement=e.HTMLElement||y.Element,y.Event=e.Event,y.Touch=e.Touch||m,y.PointerEvent=e.PointerEvent||e.MSPointerEvent},document:null,DocumentFragment:null,SVGElement:null,SVGSVGElement:null,SVGElementInstance:null,Element:null,HTMLElement:null,Event:null,Touch:null,PointerEvent:null};function m(){}var b=y;g.default=b;var x={};Object.defineProperty(x,"__esModule",{value:!0}),x.default=void 0;var w={init:function(t){var n=g.default.Element,r=e.default.window.navigator;w.supportsTouch="ontouchstart"in t||a.default.func(t.DocumentTouch)&&g.default.document instanceof t.DocumentTouch,w.supportsPointerEvent=!1!==r.pointerEnabled&&!!g.default.PointerEvent,w.isIOS=/iP(hone|od|ad)/.test(r.platform),w.isIOS7=/iP(hone|od|ad)/.test(r.platform)&&/OS 7[^\d]/.test(r.appVersion),w.isIe9=/MSIE 9/.test(r.userAgent),w.isOperaMobile="Opera"===r.appName&&w.supportsTouch&&/Presto/.test(r.userAgent),w.prefixedMatchesSelector="matches"in n.prototype?"matches":"webkitMatchesSelector"in n.prototype?"webkitMatchesSelector":"mozMatchesSelector"in n.prototype?"mozMatchesSelector":"oMatchesSelector"in n.prototype?"oMatchesSelector":"msMatchesSelector",w.pEventTypes=w.supportsPointerEvent?g.default.PointerEvent===t.MSPointerEvent?{up:"MSPointerUp",down:"MSPointerDown",over:"mouseover",out:"mouseout",move:"MSPointerMove",cancel:"MSPointerCancel"}:{up:"pointerup",down:"pointerdown",over:"pointerover",out:"pointerout",move:"pointermove",cancel:"pointercancel"}:null,w.wheelEvent="onmousewheel"in g.default.document?"mousewheel":"wheel"},supportsTouch:null,supportsPointerEvent:null,isIOS7:null,isIOS:null,isIe9:null,isOperaMobile:null,prefixedMatchesSelector:null,pEventTypes:null,wheelEvent:null};var _=w;x.default=_;var S={};function P(t){var e=t.parentNode;if(a.default.docFrag(e)){for(;(e=e.host)&&a.default.docFrag(e););return e}return e}function O(t,n){return e.default.window!==e.default.realWindow&&(n=n.replace(/\/deep\//g," ")),t[x.default.prefixedMatchesSelector](n)}Object.defineProperty(S,"__esModule",{value:!0}),S.nodeContains=function(t,e){for(;e;){if(e===t)return!0;e=e.parentNode}return!1},S.closest=function(t,e){for(;a.default.element(t);){if(O(t,e))return t;t=P(t)}return null},S.parentNode=P,S.matchesSelector=O,S.indexOfDeepestElement=function(t){for(var n,r=[],o=0;o<t.length;o++){var i=t[o],a=t[n];if(i&&o!==n)if(a){var s=E(i),l=E(a);if(s!==i.ownerDocument)if(l!==i.ownerDocument)if(s!==l){r=r.length?r:T(a);var u=void 0;if(a instanceof g.default.HTMLElement&&i instanceof g.default.SVGElement&&!(i instanceof g.default.SVGSVGElement)){if(i===l)continue;u=i.ownerSVGElement}else u=i;for(var c=T(u,a.ownerDocument),f=0;c[f]&&c[f]===r[f];)f++;for(var d=[c[f-1],c[f],r[f]],p=d[0].lastChild;p;){if(p===d[1]){n=o,r=c;break}if(p===d[2])break;p=p.previousSibling}}else v=i,h=a,y=void 0,m=void 0,y=parseInt((0,e.getWindow)(v).getComputedStyle(v).zIndex,10)||0,m=parseInt((0,e.getWindow)(h).getComputedStyle(h).zIndex,10)||0,y>=m&&(n=o);else n=o}else n=o}var v,h,y,m;return n},S.matchesUpTo=function(t,e,n){for(;a.default.element(t);){if(O(t,e))return!0;if((t=P(t))===n)return O(t,e)}return!1},S.getActualElement=function(t){return t instanceof g.default.SVGElementInstance?t.correspondingUseElement:t},S.getScrollXY=M,S.getElementClientRect=j,S.getElementRect=function(t){var n=j(t);if(!x.default.isIOS7&&n){var r=M(e.default.getWindow(t));n.left+=r.x,n.right+=r.x,n.top+=r.y,n.bottom+=r.y}return n},S.getPath=function(t){var e=[];for(;t;)e.push(t),t=P(t);return e},S.trySelector=function(t){if(!a.default.string(t))return!1;return g.default.document.querySelector(t),!0};var E=function(t){return t.parentNode||t.host};function T(t,e){for(var n,r=[],o=t;(n=E(o))&&o!==e&&n!==o.ownerDocument;)r.unshift(o),o=n;return r}function M(t){return{x:(t=t||e.default.window).scrollX||t.document.documentElement.scrollLeft,y:t.scrollY||t.document.documentElement.scrollTop}}function j(t){var e=t instanceof g.default.SVGElement?t.getBoundingClientRect():t.getClientRects()[0];return e&&{left:e.left,right:e.right,top:e.top,bottom:e.bottom,width:e.width||e.right-e.left,height:e.height||e.bottom-e.top}}var k={};Object.defineProperty(k,"__esModule",{value:!0}),k.default=function(t,e){for(var n in e)t[n]=e[n];return t};var I={};function D(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function A(t,e,n){return"parent"===t?(0,S.parentNode)(n):"self"===t?e.getRect(n):(0,S.closest)(n,t)}Object.defineProperty(I,"__esModule",{value:!0}),I.getStringOptionResult=A,I.resolveRectLike=function(t,e,n,r){var o=t;a.default.string(o)?o=A(o,e,n):a.default.func(o)&&(o=o.apply(void 0,function(t){if(Array.isArray(t))return D(t)}(i=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(i)||function(t,e){if(t){if("string"==typeof t)return D(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(t,e):void 0}}(i)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var i;a.default.element(o)&&(o=(0,S.getElementRect)(o));return o},I.rectToXY=function(t){return t&&{x:"x"in t?t.x:t.left,y:"y"in t?t.y:t.top}},I.xywhToTlbr=function(t){!t||"left"in t&&"top"in t||((t=(0,k.default)({},t)).left=t.x||0,t.top=t.y||0,t.right=t.right||t.left+t.width,t.bottom=t.bottom||t.top+t.height);return t},I.tlbrToXywh=function(t){!t||"x"in t&&"y"in t||((t=(0,k.default)({},t)).x=t.left||0,t.y=t.top||0,t.width=t.width||(t.right||0)-t.x,t.height=t.height||(t.bottom||0)-t.y);return t},I.addEdges=function(t,e,n){t.left&&(e.left+=n.x);t.right&&(e.right+=n.x);t.top&&(e.top+=n.y);t.bottom&&(e.bottom+=n.y);e.width=e.right-e.left,e.height=e.bottom-e.top};var z={};Object.defineProperty(z,"__esModule",{value:!0}),z.default=function(t,e,n){var r=t.options[n],o=r&&r.origin||t.options.origin,i=(0,I.resolveRectLike)(o,t,e,[t&&e]);return(0,I.rectToXY)(i)||{x:0,y:0}};var C={};function R(t){return t.trim().split(/ +/)}Object.defineProperty(C,"__esModule",{value:!0}),C.default=function t(e,n,r){r=r||{},a.default.string(e)&&-1!==e.search(" ")&&(e=R(e));if(a.default.array(e))return e.reduce((function(e,o){return(0,k.default)(e,t(o,n,r))}),r);a.default.object(e)&&(n=e,e="");if(a.default.func(n))r[e]=r[e]||[],r[e].push(n);else if(a.default.array(n))for(var o=0;o<n.length;o++){var i;i=n[o],t(e,i,r)}else if(a.default.object(n))for(var s in n){var l=R(s).map((function(t){return"".concat(e).concat(t)}));t(l,n[s],r)}return r};var F={};Object.defineProperty(F,"__esModule",{value:!0}),F.default=void 0;F.default=function(t,e){return Math.sqrt(t*t+e*e)};var X={};function Y(t,e){for(var n in e){var r=Y.prefixedPropREs,o=!1;for(var i in r)if(0===n.indexOf(i)&&r[i].test(n)){o=!0;break}o||"function"==typeof e[n]||(t[n]=e[n])}return t}Object.defineProperty(X,"__esModule",{value:!0}),X.default=void 0,Y.prefixedPropREs={webkit:/(Movement[XY]|Radius[XY]|RotationAngle|Force)$/,moz:/(Pressure)$/};var W=Y;X.default=W;var L={};function B(t){return t instanceof g.default.Event||t instanceof g.default.Touch}function U(t,e,n){return t=t||"page",(n=n||{}).x=e[t+"X"],n.y=e[t+"Y"],n}function V(t,e){return e=e||{x:0,y:0},x.default.isOperaMobile&&B(t)?(U("screen",t,e),e.x+=window.scrollX,e.y+=window.scrollY):U("page",t,e),e}function q(t,e){return e=e||{},x.default.isOperaMobile&&B(t)?U("screen",t,e):U("client",t,e),e}function N(t){var e=[];return a.default.array(t)?(e[0]=t[0],e[1]=t[1]):"touchend"===t.type?1===t.touches.length?(e[0]=t.touches[0],e[1]=t.changedTouches[0]):0===t.touches.length&&(e[0]=t.changedTouches[0],e[1]=t.changedTouches[1]):(e[0]=t.touches[0],e[1]=t.touches[1]),e}function $(t){for(var e={pageX:0,pageY:0,clientX:0,clientY:0,screenX:0,screenY:0},n=0;n<t.length;n++){var r=t[n];for(var o in e)e[o]+=r[o]}for(var i in e)e[i]/=t.length;return e}Object.defineProperty(L,"__esModule",{value:!0}),L.copyCoords=function(t,e){t.page=t.page||{},t.page.x=e.page.x,t.page.y=e.page.y,t.client=t.client||{},t.client.x=e.client.x,t.client.y=e.client.y,t.timeStamp=e.timeStamp},L.setCoordDeltas=function(t,e,n){t.page.x=n.page.x-e.page.x,t.page.y=n.page.y-e.page.y,t.client.x=n.client.x-e.client.x,t.client.y=n.client.y-e.client.y,t.timeStamp=n.timeStamp-e.timeStamp},L.setCoordVelocity=function(t,e){var n=Math.max(e.timeStamp/1e3,.001);t.page.x=e.page.x/n,t.page.y=e.page.y/n,t.client.x=e.client.x/n,t.client.y=e.client.y/n,t.timeStamp=n},L.setZeroCoords=function(t){t.page.x=0,t.page.y=0,t.client.x=0,t.client.y=0},L.isNativePointer=B,L.getXY=U,L.getPageXY=V,L.getClientXY=q,L.getPointerId=function(t){return a.default.number(t.pointerId)?t.pointerId:t.identifier},L.setCoords=function(t,e,n){var r=e.length>1?$(e):e[0],o={};V(r,o),t.page.x=o.x,t.page.y=o.y,q(r,o),t.client.x=o.x,t.client.y=o.y,t.timeStamp=n},L.getTouchPair=N,L.pointerAverage=$,L.touchBBox=function(t){if(!(t.length||t.touches&&t.touches.length>1))return null;var e=N(t),n=Math.min(e[0].pageX,e[1].pageX),r=Math.min(e[0].pageY,e[1].pageY),o=Math.max(e[0].pageX,e[1].pageX),i=Math.max(e[0].pageY,e[1].pageY);return{x:n,y:r,left:n,top:r,right:o,bottom:i,width:o-n,height:i-r}},L.touchDistance=function(t,e){var n=e+"X",r=e+"Y",o=N(t),i=o[0][n]-o[1][n],a=o[0][r]-o[1][r];return(0,F.default)(i,a)},L.touchAngle=function(t,e){var n=e+"X",r=e+"Y",o=N(t),i=o[1][n]-o[0][n],a=o[1][r]-o[0][r];return 180*Math.atan2(a,i)/Math.PI},L.getPointerType=function(t){return a.default.string(t.pointerType)?t.pointerType:a.default.number(t.pointerType)?[void 0,void 0,"touch","pen","mouse"][t.pointerType]:/touch/.test(t.type)||t instanceof g.default.Touch?"touch":"mouse"},L.getEventTargets=function(t){var e=a.default.func(t.composedPath)?t.composedPath():t.path;return[S.getActualElement(e?e[0]:t.target),S.getActualElement(t.currentTarget)]},L.newCoords=function(){return{page:{x:0,y:0},client:{x:0,y:0},timeStamp:0}},L.coordsToEvent=function(t){return{coords:t,get page(){return this.coords.page},get client(){return this.coords.client},get timeStamp(){return this.coords.timeStamp},get pageX(){return this.coords.page.x},get pageY(){return this.coords.page.y},get clientX(){return this.coords.client.x},get clientY(){return this.coords.client.y},get pointerId(){return this.coords.pointerId},get target(){return this.coords.target},get type(){return this.coords.type},get pointerType(){return this.coords.pointerType},get buttons(){return this.coords.buttons},preventDefault:function(){}}},Object.defineProperty(L,"pointerExtend",{enumerable:!0,get:function(){return X.default}});var G={};function H(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(G,"__esModule",{value:!0}),G.default=G.BaseEvent=void 0;var K=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.type=void 0,this.target=void 0,this.currentTarget=void 0,this.interactable=void 0,this._interaction=void 0,this.timeStamp=void 0,this.immediatePropagationStopped=!1,this.propagationStopped=!1,this._interaction=e}var e,n,r;return e=t,(n=[{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&H(e.prototype,n),r&&H(e,r),t}();G.BaseEvent=K,Object.defineProperty(K.prototype,"interaction",{get:function(){return this._interaction._proxy},set:function(){}});var Z=K;G.default=Z;var J={};Object.defineProperty(J,"__esModule",{value:!0}),J.find=J.findIndex=J.from=J.merge=J.remove=J.contains=void 0;J.contains=function(t,e){return-1!==t.indexOf(e)};J.remove=function(t,e){return t.splice(t.indexOf(e),1)};var Q=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];t.push(r)}return t};J.merge=Q;J.from=function(t){return Q([],t)};var tt=function(t,e){for(var n=0;n<t.length;n++)if(e(t[n],n,t))return n;return-1};J.findIndex=tt;J.find=function(t,e){return t[tt(t,e)]};var et={};function nt(t){return(nt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function rt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ot(t,e){return(ot=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function it(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=st(t);if(e){var o=st(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return at(this,n)}}function at(t,e){return!e||"object"!==nt(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(et,"__esModule",{value:!0}),et.DropEvent=void 0;var lt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ot(t,e)}(i,t);var e,n,r,o=it(i);function i(t,e,n){var r;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this,e._interaction)).target=void 0,r.dropzone=void 0,r.dragEvent=void 0,r.relatedTarget=void 0,r.draggable=void 0,r.timeStamp=void 0,r.propagationStopped=!1,r.immediatePropagationStopped=!1;var a="dragleave"===n?t.prev:t.cur,s=a.element,l=a.dropzone;return r.type=n,r.target=s,r.currentTarget=s,r.dropzone=l,r.dragEvent=e,r.relatedTarget=e.target,r.draggable=e.interactable,r.timeStamp=e.timeStamp,r}return e=i,(n=[{key:"reject",value:function(){var t=this,e=this._interaction.dropState;if("dropactivate"===this.type||this.dropzone&&e.cur.dropzone===this.dropzone&&e.cur.element===this.target)if(e.prev.dropzone=this.dropzone,e.prev.element=this.target,e.rejected=!0,e.events.enter=null,this.stopImmediatePropagation(),"dropactivate"===this.type){var n=e.activeDrops,r=J.findIndex(n,(function(e){var n=e.dropzone,r=e.element;return n===t.dropzone&&r===t.target}));e.activeDrops.splice(r,1);var o=new i(e,this.dragEvent,"dropdeactivate");o.dropzone=this.dropzone,o.target=this.target,this.dropzone.fire(o)}else this.dropzone.fire(new i(e,this.dragEvent,"dragleave"))}},{key:"preventDefault",value:function(){}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}}])&&rt(e.prototype,n),r&&rt(e,r),i}(G.BaseEvent);et.DropEvent=lt;var ut={};function ct(t,e){for(var n=0;n<t.slice().length;n++){var r=t.slice()[n],o=r.dropzone,i=r.element;e.dropzone=o,e.target=i,o.fire(e),e.propagationStopped=e.immediatePropagationStopped=!1}}function ft(t,e){for(var n=function(t,e){for(var n=t.interactables,r=[],o=0;o<n.list.length;o++){var i=n.list[o];if(i.options.drop.enabled){var s=i.options.drop.accept;if(!(a.default.element(s)&&s!==e||a.default.string(s)&&!S.matchesSelector(e,s)||a.default.func(s)&&!s({dropzone:i,draggableElement:e})))for(var l=a.default.string(i.target)?i._context.querySelectorAll(i.target):a.default.array(i.target)?i.target:[i.target],u=0;u<l.length;u++){var c=l[u];c!==e&&r.push({dropzone:i,element:c})}}}return r}(t,e),r=0;r<n.length;r++){var o=n[r];o.rect=o.dropzone.getRect(o.element)}return n}function dt(t,e,n){for(var r=t.dropState,o=t.interactable,i=t.element,a=[],s=0;s<r.activeDrops.length;s++){var l=r.activeDrops[s],u=l.dropzone,c=l.element,f=l.rect;a.push(u.dropCheck(e,n,o,i,c,f)?c:null)}var d=S.indexOfDeepestElement(a);return r.activeDrops[d]||null}function pt(t,e,n){var r=t.dropState,o={enter:null,leave:null,activate:null,deactivate:null,move:null,drop:null};return"dragstart"===n.type&&(o.activate=new et.DropEvent(r,n,"dropactivate"),o.activate.target=null,o.activate.dropzone=null),"dragend"===n.type&&(o.deactivate=new et.DropEvent(r,n,"dropdeactivate"),o.deactivate.target=null,o.deactivate.dropzone=null),r.rejected||(r.cur.element!==r.prev.element&&(r.prev.dropzone&&(o.leave=new et.DropEvent(r,n,"dragleave"),n.dragLeave=o.leave.target=r.prev.element,n.prevDropzone=o.leave.dropzone=r.prev.dropzone),r.cur.dropzone&&(o.enter=new et.DropEvent(r,n,"dragenter"),n.dragEnter=r.cur.element,n.dropzone=r.cur.dropzone)),"dragend"===n.type&&r.cur.dropzone&&(o.drop=new et.DropEvent(r,n,"drop"),n.dropzone=r.cur.dropzone,n.relatedTarget=r.cur.element),"dragmove"===n.type&&r.cur.dropzone&&(o.move=new et.DropEvent(r,n,"dropmove"),o.move.dragmove=n,n.dropzone=r.cur.dropzone)),o}function vt(t,e){var n=t.dropState,r=n.activeDrops,o=n.cur,i=n.prev;e.leave&&i.dropzone.fire(e.leave),e.move&&o.dropzone.fire(e.move),e.enter&&o.dropzone.fire(e.enter),e.drop&&o.dropzone.fire(e.drop),e.deactivate&&ct(r,e.deactivate),n.prev.dropzone=o.dropzone,n.prev.element=o.element}function ht(t,e){var n=t.interaction,r=t.iEvent,o=t.event;if("dragmove"===r.type||"dragend"===r.type){var i=n.dropState;e.dynamicDrop&&(i.activeDrops=ft(e,n.element));var a=r,s=dt(n,a,o);i.rejected=i.rejected&&!!s&&s.dropzone===i.cur.dropzone&&s.element===i.cur.element,i.cur.dropzone=s&&s.dropzone,i.cur.element=s&&s.element,i.events=pt(n,0,a)}}Object.defineProperty(ut,"__esModule",{value:!0}),ut.default=void 0;var gt={id:"actions/drop",install:function(t){var e=t.actions,n=t.interactStatic,r=t.Interactable,o=t.defaults;t.usePlugin(f.default),r.prototype.dropzone=function(t){return function(t,e){if(a.default.object(e)){if(t.options.drop.enabled=!1!==e.enabled,e.listeners){var n=(0,C.default)(e.listeners),r=Object.keys(n).reduce((function(t,e){return t[/^(enter|leave)/.test(e)?"drag".concat(e):/^(activate|deactivate|move)/.test(e)?"drop".concat(e):e]=n[e],t}),{});t.off(t.options.drop.listeners),t.on(r),t.options.drop.listeners=r}return a.default.func(e.ondrop)&&t.on("drop",e.ondrop),a.default.func(e.ondropactivate)&&t.on("dropactivate",e.ondropactivate),a.default.func(e.ondropdeactivate)&&t.on("dropdeactivate",e.ondropdeactivate),a.default.func(e.ondragenter)&&t.on("dragenter",e.ondragenter),a.default.func(e.ondragleave)&&t.on("dragleave",e.ondragleave),a.default.func(e.ondropmove)&&t.on("dropmove",e.ondropmove),/^(pointer|center)$/.test(e.overlap)?t.options.drop.overlap=e.overlap:a.default.number(e.overlap)&&(t.options.drop.overlap=Math.max(Math.min(1,e.overlap),0)),"accept"in e&&(t.options.drop.accept=e.accept),"checker"in e&&(t.options.drop.checker=e.checker),t}if(a.default.bool(e))return t.options.drop.enabled=e,t;return t.options.drop}(this,t)},r.prototype.dropCheck=function(t,e,n,r,o,i){return function(t,e,n,r,o,i,s){var l=!1;if(!(s=s||t.getRect(i)))return!!t.options.drop.checker&&t.options.drop.checker(e,n,l,t,i,r,o);var u=t.options.drop.overlap;if("pointer"===u){var c=(0,z.default)(r,o,"drag"),f=L.getPageXY(e);f.x+=c.x,f.y+=c.y;var d=f.x>s.left&&f.x<s.right,p=f.y>s.top&&f.y<s.bottom;l=d&&p}var v=r.getRect(o);if(v&&"center"===u){var h=v.left+v.width/2,g=v.top+v.height/2;l=h>=s.left&&h<=s.right&&g>=s.top&&g<=s.bottom}if(v&&a.default.number(u)){var y=Math.max(0,Math.min(s.right,v.right)-Math.max(s.left,v.left))*Math.max(0,Math.min(s.bottom,v.bottom)-Math.max(s.top,v.top))/(v.width*v.height);l=y>=u}t.options.drop.checker&&(l=t.options.drop.checker(e,n,l,t,i,r,o));return l}(this,t,e,n,r,o,i)},n.dynamicDrop=function(e){return a.default.bool(e)?(t.dynamicDrop=e,n):t.dynamicDrop},(0,k.default)(e.phaselessTypes,{dragenter:!0,dragleave:!0,dropactivate:!0,dropdeactivate:!0,dropmove:!0,drop:!0}),e.methodDict.drop="dropzone",t.dynamicDrop=!1,o.actions.drop=gt.defaults},listeners:{"interactions:before-action-start":function(t){var e=t.interaction;"drag"===e.prepared.name&&(e.dropState={cur:{dropzone:null,element:null},prev:{dropzone:null,element:null},rejected:null,events:null,activeDrops:[]})},"interactions:after-action-start":function(t,e){var n=t.interaction,r=(t.event,t.iEvent);if("drag"===n.prepared.name){var o=n.dropState;o.activeDrops=null,o.events=null,o.activeDrops=ft(e,n.element),o.events=pt(n,0,r),o.events.activate&&(ct(o.activeDrops,o.events.activate),e.fire("actions/drop:start",{interaction:n,dragEvent:r}))}},"interactions:action-move":ht,"interactions:action-end":ht,"interactions:after-action-move":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(vt(n,n.dropState.events),e.fire("actions/drop:move",{interaction:n,dragEvent:r}),n.dropState.events={})},"interactions:after-action-end":function(t,e){var n=t.interaction,r=t.iEvent;"drag"===n.prepared.name&&(vt(n,n.dropState.events),e.fire("actions/drop:end",{interaction:n,dragEvent:r}))},"interactions:stop":function(t){var e=t.interaction;if("drag"===e.prepared.name){var n=e.dropState;n&&(n.activeDrops=null,n.events=null,n.cur.dropzone=null,n.cur.element=null,n.prev.dropzone=null,n.prev.element=null,n.rejected=!1)}}},getActiveDrops:ft,getDrop:dt,getDropEvents:pt,fireDropEvents:vt,defaults:{enabled:!1,accept:null,overlap:"pointer"}},yt=gt;ut.default=yt;var mt={};function bt(t){var e=t.interaction,n=t.iEvent,r=t.phase;if("gesture"===e.prepared.name){var o=e.pointers.map((function(t){return t.pointer})),i="start"===r,s="end"===r,l=e.interactable.options.deltaSource;if(n.touches=[o[0],o[1]],i)n.distance=L.touchDistance(o,l),n.box=L.touchBBox(o),n.scale=1,n.ds=0,n.angle=L.touchAngle(o,l),n.da=0,e.gesture.startDistance=n.distance,e.gesture.startAngle=n.angle;else if(s){var u=e.prevEvent;n.distance=u.distance,n.box=u.box,n.scale=u.scale,n.ds=0,n.angle=u.angle,n.da=0}else n.distance=L.touchDistance(o,l),n.box=L.touchBBox(o),n.scale=n.distance/e.gesture.startDistance,n.angle=L.touchAngle(o,l),n.ds=n.scale-e.gesture.scale,n.da=n.angle-e.gesture.angle;e.gesture.distance=n.distance,e.gesture.angle=n.angle,a.default.number(n.scale)&&n.scale!==1/0&&!isNaN(n.scale)&&(e.gesture.scale=n.scale)}}Object.defineProperty(mt,"__esModule",{value:!0}),mt.default=void 0;var xt={id:"actions/gesture",before:["actions/drag","actions/resize"],install:function(t){var e=t.actions,n=t.Interactable,r=t.defaults;n.prototype.gesturable=function(t){return a.default.object(t)?(this.options.gesture.enabled=!1!==t.enabled,this.setPerAction("gesture",t),this.setOnEvents("gesture",t),this):a.default.bool(t)?(this.options.gesture.enabled=t,this):this.options.gesture},e.map.gesture=xt,e.methodDict.gesture="gesturable",r.actions.gesture=xt.defaults},listeners:{"interactions:action-start":bt,"interactions:action-move":bt,"interactions:action-end":bt,"interactions:new":function(t){t.interaction.gesture={angle:0,distance:0,scale:1,startAngle:0,startDistance:0}},"auto-start:check":function(t){if(!(t.interaction.pointers.length<2)){var e=t.interactable.options.gesture;if(e&&e.enabled)return t.action={name:"gesture"},!1}}},defaults:{},getCursor:function(){return""}},wt=xt;mt.default=wt;var _t={};function St(t,e,n,r,o,i,s){if(!e)return!1;if(!0===e){var l=a.default.number(i.width)?i.width:i.right-i.left,u=a.default.number(i.height)?i.height:i.bottom-i.top;if(s=Math.min(s,Math.abs(("left"===t||"right"===t?l:u)/2)),l<0&&("left"===t?t="right":"right"===t&&(t="left")),u<0&&("top"===t?t="bottom":"bottom"===t&&(t="top")),"left"===t)return n.x<(l>=0?i.left:i.right)+s;if("top"===t)return n.y<(u>=0?i.top:i.bottom)+s;if("right"===t)return n.x>(l>=0?i.right:i.left)-s;if("bottom"===t)return n.y>(u>=0?i.bottom:i.top)-s}return!!a.default.element(r)&&(a.default.element(e)?e===r:S.matchesUpTo(r,e,o))}function Pt(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.resizeAxes){var r=e;n.interactable.options.resize.square?("y"===n.resizeAxes?r.delta.x=r.delta.y:r.delta.y=r.delta.x,r.axes="xy"):(r.axes=n.resizeAxes,"x"===n.resizeAxes?r.delta.y=0:"y"===n.resizeAxes&&(r.delta.x=0))}}Object.defineProperty(_t,"__esModule",{value:!0}),_t.default=void 0;var Ot={id:"actions/resize",before:["actions/drag"],install:function(t){var e=t.actions,n=t.browser,r=t.Interactable,o=t.defaults;Ot.cursors=function(t){return t.isIe9?{x:"e-resize",y:"s-resize",xy:"se-resize",top:"n-resize",left:"w-resize",bottom:"s-resize",right:"e-resize",topleft:"se-resize",bottomright:"se-resize",topright:"ne-resize",bottomleft:"ne-resize"}:{x:"ew-resize",y:"ns-resize",xy:"nwse-resize",top:"ns-resize",left:"ew-resize",bottom:"ns-resize",right:"ew-resize",topleft:"nwse-resize",bottomright:"nwse-resize",topright:"nesw-resize",bottomleft:"nesw-resize"}}(n),Ot.defaultMargin=n.supportsTouch||n.supportsPointerEvent?20:10,r.prototype.resizable=function(e){return function(t,e,n){if(a.default.object(e))return t.options.resize.enabled=!1!==e.enabled,t.setPerAction("resize",e),t.setOnEvents("resize",e),a.default.string(e.axis)&&/^x$|^y$|^xy$/.test(e.axis)?t.options.resize.axis=e.axis:null===e.axis&&(t.options.resize.axis=n.defaults.actions.resize.axis),a.default.bool(e.preserveAspectRatio)?t.options.resize.preserveAspectRatio=e.preserveAspectRatio:a.default.bool(e.square)&&(t.options.resize.square=e.square),t;if(a.default.bool(e))return t.options.resize.enabled=e,t;return t.options.resize}(this,e,t)},e.map.resize=Ot,e.methodDict.resize="resizable",o.actions.resize=Ot.defaults},listeners:{"interactions:new":function(t){t.interaction.resizeAxes="xy"},"interactions:action-start":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.rect;n._rects={start:(0,k.default)({},o),corrected:(0,k.default)({},o),previous:(0,k.default)({},o),delta:{left:0,right:0,width:0,top:0,bottom:0,height:0}},r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}}(t),Pt(t)},"interactions:action-move":function(t){!function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e,o=n.interactable.options.resize.invert,i="reposition"===o||"negate"===o,a=n.rect,s=n._rects,l=s.start,u=s.corrected,c=s.delta,f=s.previous;if((0,k.default)(f,u),i){if((0,k.default)(u,a),"reposition"===o){if(u.top>u.bottom){var d=u.top;u.top=u.bottom,u.bottom=d}if(u.left>u.right){var p=u.left;u.left=u.right,u.right=p}}}else u.top=Math.min(a.top,l.bottom),u.bottom=Math.max(a.bottom,l.top),u.left=Math.min(a.left,l.right),u.right=Math.max(a.right,l.left);for(var v in u.width=u.right-u.left,u.height=u.bottom-u.top,u)c[v]=u[v]-f[v];r.edges=n.prepared.edges,r.rect=u,r.deltaRect=c}}(t),Pt(t)},"interactions:action-end":function(t){var e=t.iEvent,n=t.interaction;if("resize"===n.prepared.name&&n.prepared.edges){var r=e;r.edges=n.prepared.edges,r.rect=n._rects.corrected,r.deltaRect=n._rects.delta}},"auto-start:check":function(t){var e=t.interaction,n=t.interactable,r=t.element,o=t.rect,i=t.buttons;if(o){var s=(0,k.default)({},e.coords.cur.page),l=n.options.resize;if(l&&l.enabled&&(!e.pointerIsDown||!/mouse|pointer/.test(e.pointerType)||0!=(i&l.mouseButtons))){if(a.default.object(l.edges)){var u={left:!1,right:!1,top:!1,bottom:!1};for(var c in u)u[c]=St(c,l.edges[c],s,e._latestPointer.eventTarget,r,o,l.margin||Ot.defaultMargin);u.left=u.left&&!u.right,u.top=u.top&&!u.bottom,(u.left||u.right||u.top||u.bottom)&&(t.action={name:"resize",edges:u})}else{var f="y"!==l.axis&&s.x>o.right-Ot.defaultMargin,d="x"!==l.axis&&s.y>o.bottom-Ot.defaultMargin;(f||d)&&(t.action={name:"resize",axes:(f?"x":"")+(d?"y":"")})}return!t.action&&void 0}}}},defaults:{square:!1,preserveAspectRatio:!1,axis:"xy",margin:NaN,edges:null,invert:"none"},cursors:null,getCursor:function(t){var e=t.edges,n=t.axis,r=t.name,o=Ot.cursors,i=null;if(n)i=o[r+n];else if(e){for(var a="",s=["top","bottom","left","right"],l=0;l<s.length;l++){var u=s[l];e[u]&&(a+=u)}i=o[a]}return i},defaultMargin:null},Et=Ot;_t.default=Et;var Tt={};Object.defineProperty(Tt,"__esModule",{value:!0}),Tt.default=void 0;var Mt={id:"actions",install:function(t){t.usePlugin(mt.default),t.usePlugin(_t.default),t.usePlugin(f.default),t.usePlugin(ut.default)}};Tt.default=Mt;var jt={};Object.defineProperty(jt,"__esModule",{value:!0}),jt.default=void 0;jt.default={};var kt={};Object.defineProperty(kt,"__esModule",{value:!0}),kt.default=void 0;var It,Dt,At=0;var zt={request:function(t){return It(t)},cancel:function(t){return Dt(t)},init:function(t){if(It=t.requestAnimationFrame,Dt=t.cancelAnimationFrame,!It)for(var e=["ms","moz","webkit","o"],n=0;n<e.length;n++){var r=e[n];It=t["".concat(r,"RequestAnimationFrame")],Dt=t["".concat(r,"CancelAnimationFrame")]||t["".concat(r,"CancelRequestAnimationFrame")]}It||(It=function(t){var e=Date.now(),n=Math.max(0,16-(e-At)),r=setTimeout((function(){t(e+n)}),n);return At=e+n,r},Dt=function(t){return clearTimeout(t)})}};kt.default=zt;var Ct={};Object.defineProperty(Ct,"__esModule",{value:!0}),Ct.getContainer=Ft,Ct.getScroll=Xt,Ct.getScrollSize=function(t){a.default.window(t)&&(t=window.document.body);return{x:t.scrollWidth,y:t.scrollHeight}},Ct.getScrollSizeDelta=function(t,e){var n=t.interaction,r=t.element,o=n&&n.interactable.options[n.prepared.name].autoScroll;if(!o||!o.enabled)return e(),{x:0,y:0};var i=Ft(o.container,n.interactable,r),a=Xt(i);e();var s=Xt(i);return{x:s.x-a.x,y:s.y-a.y}},Ct.default=void 0;var Rt={defaults:{enabled:!1,margin:60,container:null,speed:300},now:Date.now,interaction:null,i:0,x:0,y:0,isScrolling:!1,prevTime:0,margin:0,speed:0,start:function(t){Rt.isScrolling=!0,kt.default.cancel(Rt.i),t.autoScroll=Rt,Rt.interaction=t,Rt.prevTime=Rt.now(),Rt.i=kt.default.request(Rt.scroll)},stop:function(){Rt.isScrolling=!1,Rt.interaction&&(Rt.interaction.autoScroll=null),kt.default.cancel(Rt.i)},scroll:function(){var t=Rt.interaction,e=t.interactable,n=t.element,r=t.prepared.name,o=e.options[r].autoScroll,i=Ft(o.container,e,n),s=Rt.now(),l=(s-Rt.prevTime)/1e3,u=o.speed*l;if(u>=1){var c={x:Rt.x*u,y:Rt.y*u};if(c.x||c.y){var f=Xt(i);a.default.window(i)?i.scrollBy(c.x,c.y):i&&(i.scrollLeft+=c.x,i.scrollTop+=c.y);var d=Xt(i),p={x:d.x-f.x,y:d.y-f.y};(p.x||p.y)&&e.fire({type:"autoscroll",target:n,interactable:e,delta:p,interaction:t,container:i})}Rt.prevTime=s}Rt.isScrolling&&(kt.default.cancel(Rt.i),Rt.i=kt.default.request(Rt.scroll))},check:function(t,e){var n=t.options;return n[e].autoScroll&&n[e].autoScroll.enabled},onInteractionMove:function(t){var e=t.interaction,n=t.pointer;if(e.interacting()&&Rt.check(e.interactable,e.prepared.name))if(e.simulation)Rt.x=Rt.y=0;else{var r,o,i,s,l=e.interactable,u=e.element,c=e.prepared.name,f=l.options[c].autoScroll,d=Ft(f.container,l,u);if(a.default.window(d))s=n.clientX<Rt.margin,r=n.clientY<Rt.margin,o=n.clientX>d.innerWidth-Rt.margin,i=n.clientY>d.innerHeight-Rt.margin;else{var p=S.getElementClientRect(d);s=n.clientX<p.left+Rt.margin,r=n.clientY<p.top+Rt.margin,o=n.clientX>p.right-Rt.margin,i=n.clientY>p.bottom-Rt.margin}Rt.x=o?1:s?-1:0,Rt.y=i?1:r?-1:0,Rt.isScrolling||(Rt.margin=f.margin,Rt.speed=f.speed,Rt.start(e))}}};function Ft(t,n,r){return(a.default.string(t)?(0,I.getStringOptionResult)(t,n,r):t)||(0,e.getWindow)(r)}function Xt(t){return a.default.window(t)&&(t=window.document.body),{x:t.scrollLeft,y:t.scrollTop}}var Yt={id:"auto-scroll",install:function(t){var e=t.defaults,n=t.actions;t.autoScroll=Rt,Rt.now=function(){return t.now()},n.phaselessTypes.autoscroll=!0,e.perAction.autoScroll=Rt.defaults},listeners:{"interactions:new":function(t){t.interaction.autoScroll=null},"interactions:destroy":function(t){t.interaction.autoScroll=null,Rt.stop(),Rt.interaction&&(Rt.interaction=null)},"interactions:stop":Rt.stop,"interactions:action-move":function(t){return Rt.onInteractionMove(t)}}};Ct.default=Yt;var Wt={};Object.defineProperty(Wt,"__esModule",{value:!0}),Wt.warnOnce=function(t,n){var r=!1;return function(){return r||(e.default.window.console.warn(n),r=!0),t.apply(this,arguments)}},Wt.copyAction=function(t,e){return t.name=e.name,t.axis=e.axis,t.edges=e.edges,t};var Lt={};function Bt(t){return a.default.bool(t)?(this.options.styleCursor=t,this):null===t?(delete this.options.styleCursor,this):this.options.styleCursor}function Ut(t){return a.default.func(t)?(this.options.actionChecker=t,this):null===t?(delete this.options.actionChecker,this):this.options.actionChecker}Object.defineProperty(Lt,"__esModule",{value:!0}),Lt.default=void 0;var Vt={id:"auto-start/interactableMethods",install:function(t){var e=t.Interactable;e.prototype.getAction=function(e,n,r,o){var i=function(t,e,n,r,o){var i=t.getRect(r),a=e.buttons||{0:1,1:4,3:8,4:16}[e.button],s={action:null,interactable:t,interaction:n,element:r,rect:i,buttons:a};return o.fire("auto-start:check",s),s.action}(this,n,r,o,t);return this.options.actionChecker?this.options.actionChecker(e,n,i,this,o,r):i},e.prototype.ignoreFrom=(0,Wt.warnOnce)((function(t){return this._backCompatOption("ignoreFrom",t)}),"Interactable.ignoreFrom() has been deprecated. Use Interactble.draggable({ignoreFrom: newValue})."),e.prototype.allowFrom=(0,Wt.warnOnce)((function(t){return this._backCompatOption("allowFrom",t)}),"Interactable.allowFrom() has been deprecated. Use Interactble.draggable({allowFrom: newValue})."),e.prototype.actionChecker=Ut,e.prototype.styleCursor=Bt}};Lt.default=Vt;var qt={};function Nt(t,e,n,r,o){return e.testIgnoreAllow(e.options[t.name],n,r)&&e.options[t.name].enabled&&Kt(e,n,t,o)?t:null}function $t(t,e,n,r,o,i,a){for(var s=0,l=r.length;s<l;s++){var u=r[s],c=o[s],f=u.getAction(e,n,t,c);if(f){var d=Nt(f,u,c,i,a);if(d)return{action:d,interactable:u,element:c}}}return{action:null,interactable:null,element:null}}function Gt(t,e,n,r,o){var i=[],s=[],l=r;function u(t){i.push(t),s.push(l)}for(;a.default.element(l);){i=[],s=[],o.interactables.forEachMatch(l,u);var c=$t(t,e,n,i,s,r,o);if(c.action&&!c.interactable.options[c.action.name].manualStart)return c;l=S.parentNode(l)}return{action:null,interactable:null,element:null}}function Ht(t,e,n){var r=e.action,o=e.interactable,i=e.element;r=r||{name:null},t.interactable=o,t.element=i,(0,Wt.copyAction)(t.prepared,r),t.rect=o&&r.name?o.getRect(i):null,Qt(t,n),n.fire("autoStart:prepared",{interaction:t})}function Kt(t,e,n,r){var o=t.options,i=o[n.name].max,a=o[n.name].maxPerElement,s=r.autoStart.maxInteractions,l=0,u=0,c=0;if(!(i&&a&&s))return!1;for(var f=0;f<r.interactions.list.length;f++){var d=r.interactions.list[f],p=d.prepared.name;if(d.interacting()){if(++l>=s)return!1;if(d.interactable===t){if((u+=p===n.name?1:0)>=i)return!1;if(d.element===e&&(c++,p===n.name&&c>=a))return!1}}}return s>0}function Zt(t,e){return a.default.number(t)?(e.autoStart.maxInteractions=t,this):e.autoStart.maxInteractions}function Jt(t,e,n){var r=n.autoStart.cursorElement;r&&r!==t&&(r.style.cursor=""),t.ownerDocument.documentElement.style.cursor=e,t.style.cursor=e,n.autoStart.cursorElement=e?t:null}function Qt(t,e){var n=t.interactable,r=t.element,o=t.prepared;if("mouse"===t.pointerType&&n&&n.options.styleCursor){var i="";if(o.name){var s=n.options[o.name].cursorChecker;i=a.default.func(s)?s(o,n,r,t._interacting):e.actions.map[o.name].getCursor(o)}Jt(t.element,i||"",e)}else e.autoStart.cursorElement&&Jt(e.autoStart.cursorElement,"",e)}Object.defineProperty(qt,"__esModule",{value:!0}),qt.default=void 0;var te={id:"auto-start/base",before:["actions"],install:function(t){var e=t.interactStatic,n=t.defaults;t.usePlugin(Lt.default),n.base.actionChecker=null,n.base.styleCursor=!0,(0,k.default)(n.perAction,{manualStart:!1,max:1/0,maxPerElement:1,allowFrom:null,ignoreFrom:null,mouseButtons:1}),e.maxInteractions=function(e){return Zt(e,t)},t.autoStart={maxInteractions:1/0,withinInteractionLimit:Kt,cursorElement:null}},listeners:{"interactions:down":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.interacting()||Ht(n,Gt(n,r,o,i,e),e)},"interactions:move":function(t,e){!function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;"mouse"!==n.pointerType||n.pointerIsDown||n.interacting()||Ht(n,Gt(n,r,o,i,e),e)}(t,e),function(t,e){var n=t.interaction;if(n.pointerIsDown&&!n.interacting()&&n.pointerWasMoved&&n.prepared.name){e.fire("autoStart:before-start",t);var r=n.interactable,o=n.prepared.name;o&&r&&(r.options[o].manualStart||!Kt(r,n.element,n.prepared,e)?n.stop():(n.start(n.prepared,r,n.element),Qt(n,e)))}}(t,e)},"interactions:stop":function(t,e){var n=t.interaction,r=n.interactable;r&&r.options.styleCursor&&Jt(n.element,"",e)}},maxInteractions:Zt,withinInteractionLimit:Kt,validateAction:Nt};qt.default=te;var ee={};Object.defineProperty(ee,"__esModule",{value:!0}),ee.default=void 0;var ne={id:"auto-start/dragAxis",listeners:{"autoStart:before-start":function(t,e){var n=t.interaction,r=t.eventTarget,o=t.dx,i=t.dy;if("drag"===n.prepared.name){var s=Math.abs(o),l=Math.abs(i),u=n.interactable.options.drag,c=u.startAxis,f=s>l?"x":s<l?"y":"xy";if(n.prepared.axis="start"===u.lockAxis?f[0]:u.lockAxis,"xy"!==f&&"xy"!==c&&c!==f){n.prepared.name=null;for(var d=r,p=function(t){if(t!==n.interactable){var o=n.interactable.options.drag;if(!o.manualStart&&t.testIgnoreAllow(o,d,r)){var i=t.getAction(n.downPointer,n.downEvent,n,d);if(i&&"drag"===i.name&&function(t,e){if(!e)return!1;var n=e.options.drag.startAxis;return"xy"===t||"xy"===n||n===t}(f,t)&&qt.default.validateAction(i,t,d,r,e))return t}}};a.default.element(d);){var v=e.interactables.forEachMatch(d,p);if(v){n.prepared.name="drag",n.interactable=v,n.element=d;break}d=(0,S.parentNode)(d)}}}}}};ee.default=ne;var re={};function oe(t){var e=t.prepared&&t.prepared.name;if(!e)return null;var n=t.interactable.options;return n[e].hold||n[e].delay}Object.defineProperty(re,"__esModule",{value:!0}),re.default=void 0;var ie={id:"auto-start/hold",install:function(t){var e=t.defaults;t.usePlugin(qt.default),e.perAction.hold=0,e.perAction.delay=0},listeners:{"interactions:new":function(t){t.interaction.autoStartHoldTimer=null},"autoStart:prepared":function(t){var e=t.interaction,n=oe(e);n>0&&(e.autoStartHoldTimer=setTimeout((function(){e.start(e.prepared,e.interactable,e.element)}),n))},"interactions:move":function(t){var e=t.interaction,n=t.duplicate;e.pointerWasMoved&&!n&&clearTimeout(e.autoStartHoldTimer)},"autoStart:before-start":function(t){var e=t.interaction;oe(e)>0&&(e.prepared.name=null)}},getHoldDuration:oe};re.default=ie;var ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=void 0;var se={id:"auto-start",install:function(t){t.usePlugin(qt.default),t.usePlugin(re.default),t.usePlugin(ee.default)}};ae.default=se;var le={};Object.defineProperty(le,"__esModule",{value:!0}),le.default=void 0;le.default={};var ue={};function ce(t){return/^(always|never|auto)$/.test(t)?(this.options.preventDefault=t,this):a.default.bool(t)?(this.options.preventDefault=t?"always":"never",this):this.options.preventDefault}function fe(t){var e=t.interaction,n=t.event;e.interactable&&e.interactable.checkAndPreventDefault(n)}function de(t){var n=t.Interactable;n.prototype.preventDefault=ce,n.prototype.checkAndPreventDefault=function(n){return function(t,n,r){var o=t.options.preventDefault;if("never"!==o)if("always"!==o){if(n.events.supportsPassive&&/^touch(start|move)$/.test(r.type)){var i=(0,e.getWindow)(r.target).document,s=n.getDocOptions(i);if(!s||!s.events||!1!==s.events.passive)return}/^(mouse|pointer|touch)*(down|start)/i.test(r.type)||a.default.element(r.target)&&(0,S.matchesSelector)(r.target,"input,select,textarea,[contenteditable=true],[contenteditable=true] *")||r.preventDefault()}else r.preventDefault()}(this,t,n)},t.interactions.docEvents.push({type:"dragstart",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){var r=t.interactions.list[n];if(r.element&&(r.element===e.target||(0,S.nodeContains)(r.element,e.target)))return void r.interactable.checkAndPreventDefault(e)}}})}Object.defineProperty(ue,"__esModule",{value:!0}),ue.install=de,ue.default=void 0;var pe={id:"core/interactablePreventDefault",install:de,listeners:["down","move","up","cancel"].reduce((function(t,e){return t["interactions:".concat(e)]=fe,t}),{})};ue.default=pe;var ve,he={};function ge(t){return function(t){if(Array.isArray(t))return ye(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return ye(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ye(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ye(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(he,"__esModule",{value:!0}),he.default=void 0,function(t){t.touchAction="touchAction",t.boxSizing="boxSizing",t.noListeners="noListeners"}(ve||(ve={}));var me={touchAction:"https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action",boxSizing:"https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing"};var be=[{name:ve.touchAction,perform:function(t){return!function(t,e,n){var r=t;for(;a.default.element(r);){if(xe(r,e,n))return!0;r=(0,S.parentNode)(r)}return!1}(t.element,"touchAction",/pan-|pinch|none/)},getInfo:function(t){return[t.element,me.touchAction]},text:'Consider adding CSS "touch-action: none" to this element\n'},{name:ve.boxSizing,perform:function(t){var e=t.element;return"resize"===t.prepared.name&&e instanceof g.default.HTMLElement&&!xe(e,"boxSizing",/border-box/)},text:'Consider adding CSS "box-sizing: border-box" to this resizable element',getInfo:function(t){return[t.element,me.boxSizing]}},{name:ve.noListeners,perform:function(t){var e=t.prepared.name;return!(t.interactable.events.types["".concat(e,"move")]||[]).length},getInfo:function(t){return[t.prepared.name,t.interactable]},text:"There are no listeners set for this action"}];function xe(t,n,r){var o=t.style[n]||e.default.window.getComputedStyle(t)[n];return r.test((o||"").toString())}var we="dev-tools",_e={id:we,install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.logger,r=t.Interactable,o=t.defaults;t.logger=n||console,o.base.devTools={ignore:{}},r.prototype.devTools=function(t){return t?((0,k.default)(this.options.devTools,t),this):this.options.devTools}},listeners:{"interactions:action-start":function(t,e){for(var n=t.interaction,r=0;r<be.length;r++){var o,i=be[r],a=n.interactable&&n.interactable.options;if(!(a&&a.devTools&&a.devTools.ignore[i.name])&&i.perform(n))(o=e.logger).warn.apply(o,["[interact.js] "+i.text].concat(ge(i.getInfo(n))))}}},checks:be,CheckName:ve,links:me,prefix:"[interact.js] "};he.default=_e;var Se={};Object.defineProperty(Se,"__esModule",{value:!0}),Se.default=void 0;Se.default={};var Pe={};Object.defineProperty(Pe,"__esModule",{value:!0}),Pe.default=function t(e){var n={};for(var r in e){var o=e[r];a.default.plainObject(o)?n[r]=t(o):a.default.array(o)?n[r]=J.from(o):n[r]=o}return n};var Oe={};function Ee(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Te(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Te(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Te(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Me(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Oe,"__esModule",{value:!0}),Oe.getRectOffset=Ie,Oe.default=void 0;var je=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.states=[],this.startOffset={left:0,right:0,top:0,bottom:0},this.startDelta=null,this.result=null,this.endResult=null,this.edges=void 0,this.interaction=void 0,this.interaction=e,this.result=ke()}var e,n,r;return e=t,(n=[{key:"start",value:function(t,e){var n=t.phase,r=this.interaction,o=function(t){var e=t.interactable.options[t.prepared.name],n=e.modifiers;return n&&n.length?n:["snap","snapSize","snapEdges","restrict","restrictEdges","restrictSize"].map((function(t){var n=e[t];return n&&n.enabled&&{options:n,methods:n._methods}})).filter((function(t){return!!t}))}(r);this.prepareStates(o),this.edges=(0,k.default)({},r.edges),this.startOffset=Ie(r.rect,e),this.startDelta={x:0,y:0};var i={phase:n,pageCoords:e,preEnd:!1};return this.result=ke(),this.startAll(i),this.result=this.setAll(i)}},{key:"fillArg",value:function(t){var e=this.interaction;t.interaction=e,t.interactable=e.interactable,t.element=e.element,t.rect=t.rect||e.rect,t.edges=this.edges,t.startOffset=this.startOffset}},{key:"startAll",value:function(t){this.fillArg(t);for(var e=0;e<this.states.length;e++){var n=this.states[e];n.methods.start&&(t.state=n,n.methods.start(t))}}},{key:"setAll",value:function(t){this.fillArg(t);var e=t.phase,n=t.preEnd,r=t.skipModifiers,o=t.rect;t.coords=(0,k.default)({},t.pageCoords),t.rect=(0,k.default)({},o);for(var i=r?this.states.slice(r):this.states,a=ke(t.coords,t.rect),s=0;s<i.length;s++){var l=i[s],u=l.options,c=(0,k.default)({},t.coords),f=null;l.methods.set&&this.shouldDo(u,n,e)&&(t.state=l,f=l.methods.set(t),I.addEdges(this.interaction.edges,t.rect,{x:t.coords.x-c.x,y:t.coords.y-c.y})),a.eventProps.push(f)}a.delta.x=t.coords.x-t.pageCoords.x,a.delta.y=t.coords.y-t.pageCoords.y,a.rectDelta.left=t.rect.left-o.left,a.rectDelta.right=t.rect.right-o.right,a.rectDelta.top=t.rect.top-o.top,a.rectDelta.bottom=t.rect.bottom-o.bottom;var d=this.result.coords,p=this.result.rect;if(d&&p){var v=a.rect.left!==p.left||a.rect.right!==p.right||a.rect.top!==p.top||a.rect.bottom!==p.bottom;a.changed=v||d.x!==a.coords.x||d.y!==a.coords.y}return a}},{key:"applyToInteraction",value:function(t){var e=this.interaction,n=t.phase,r=e.coords.cur,o=e.coords.start,i=this.result,a=this.startDelta,s=i.delta;"start"===n&&(0,k.default)(this.startDelta,i.delta);for(var l=[[o,a],[r,s]],u=0;u<l.length;u++){var c=Ee(l[u],2),f=c[0],d=c[1];f.page.x+=d.x,f.page.y+=d.y,f.client.x+=d.x,f.client.y+=d.y}var p=this.result.rectDelta,v=t.rect||e.rect;v.left+=p.left,v.right+=p.right,v.top+=p.top,v.bottom+=p.bottom,v.width=v.right-v.left,v.height=v.bottom-v.top}},{key:"setAndApply",value:function(t){var e=this.interaction,n=t.phase,r=t.preEnd,o=t.skipModifiers,i=this.setAll({preEnd:r,phase:n,pageCoords:t.modifiedCoords||e.coords.cur.page});if(this.result=i,!i.changed&&(!o||o<this.states.length)&&e.interacting())return!1;if(t.modifiedCoords){var a=e.coords.cur.page,s={x:t.modifiedCoords.x-a.x,y:t.modifiedCoords.y-a.y};i.coords.x+=s.x,i.coords.y+=s.y,i.delta.x+=s.x,i.delta.y+=s.y}this.applyToInteraction(t)}},{key:"beforeEnd",value:function(t){var e=t.interaction,n=t.event,r=this.states;if(r&&r.length){for(var o=!1,i=0;i<r.length;i++){var a=r[i];t.state=a;var s=a.options,l=a.methods,u=l.beforeEnd&&l.beforeEnd(t);if(u)return this.endResult=u,!1;o=o||!o&&this.shouldDo(s,!0,t.phase,!0)}o&&e.move({event:n,preEnd:!0})}}},{key:"stop",value:function(t){var e=t.interaction;if(this.states&&this.states.length){var n=(0,k.default)({states:this.states,interactable:e.interactable,element:e.element,rect:null},t);this.fillArg(n);for(var r=0;r<this.states.length;r++){var o=this.states[r];n.state=o,o.methods.stop&&o.methods.stop(n)}this.states=null,this.endResult=null}}},{key:"prepareStates",value:function(t){this.states=[];for(var e=0;e<t.length;e++){var n=t[e],r=n.options,o=n.methods,i=n.name;this.states.push({options:r,methods:o,index:e,name:i})}return this.states}},{key:"restoreInteractionCoords",value:function(t){var e=t.interaction,n=e.coords,r=e.rect,o=e.modification;if(o.result){for(var i=o.startDelta,a=o.result,s=a.delta,l=a.rectDelta,u=[[n.start,i],[n.cur,s]],c=0;c<u.length;c++){var f=Ee(u[c],2),d=f[0],p=f[1];d.page.x-=p.x,d.page.y-=p.y,d.client.x-=p.x,d.client.y-=p.y}r.left-=l.left,r.right-=l.right,r.top-=l.top,r.bottom-=l.bottom}}},{key:"shouldDo",value:function(t,e,n,r){return!(!t||!1===t.enabled||r&&!t.endOnly||t.endOnly&&!e||"start"===n&&!t.setStart)}},{key:"copyFrom",value:function(t){this.startOffset=t.startOffset,this.startDelta=t.startDelta,this.edges=t.edges,this.states=t.states.map((function(t){return(0,Pe.default)(t)})),this.result=ke((0,k.default)({},t.result.coords),(0,k.default)({},t.result.rect))}},{key:"destroy",value:function(){for(var t in this)this[t]=null}}])&&Me(e.prototype,n),r&&Me(e,r),t}();function ke(t,e){return{rect:e,coords:t,delta:{x:0,y:0},rectDelta:{left:0,right:0,top:0,bottom:0},eventProps:[],changed:!0}}function Ie(t,e){return t?{left:e.x-t.left,top:e.y-t.top,right:t.right-e.x,bottom:t.bottom-e.y}:{left:0,top:0,right:0,bottom:0}}Oe.default=je;var De={};function Ae(t){var e=t.iEvent,n=t.interaction.modification.result;n&&(e.modifiers=n.eventProps)}Object.defineProperty(De,"__esModule",{value:!0}),De.makeModifier=function(t,e){var n=t.defaults,r={start:t.start,set:t.set,beforeEnd:t.beforeEnd,stop:t.stop},o=function(t){var o=t||{};for(var i in o.enabled=!1!==o.enabled,n)i in o||(o[i]=n[i]);var a={options:o,methods:r,name:e,enable:function(){return o.enabled=!0,a},disable:function(){return o.enabled=!1,a}};return a};e&&"string"==typeof e&&(o._defaults=n,o._methods=r);return o},De.addEventModifiers=Ae,De.default=void 0;var ze={id:"modifiers/base",install:function(t){t.defaults.perAction.modifiers=[]},listeners:{"interactions:new":function(t){var e=t.interaction;e.modification=new Oe.default(e)},"interactions:before-action-start":function(t){var e=t.interaction.modification;e.start(t,t.interaction.coords.start.page),t.interaction.edges=e.edges,e.applyToInteraction(t)},"interactions:before-action-move":function(t){return t.interaction.modification.setAndApply(t)},"interactions:before-action-end":function(t){return t.interaction.modification.beforeEnd(t)},"interactions:action-start":Ae,"interactions:action-move":Ae,"interactions:action-end":Ae,"interactions:after-action-start":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-move":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:stop":function(t){return t.interaction.modification.stop(t)}},before:["actions"]};De.default=ze;var Ce={};Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.defaults=void 0;Ce.defaults={base:{preventDefault:"auto",deltaSource:"page"},perAction:{enabled:!1,origin:{x:0,y:0}},actions:{}};var Re={};function Fe(t){return(Fe="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xe(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ye(t,e){return(Ye=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function We(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Ue(t);if(e){var o=Ue(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Le(this,n)}}function Le(t,e){return!e||"object"!==Fe(e)&&"function"!=typeof e?Be(t):e}function Be(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Ue(t){return(Ue=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Re,"__esModule",{value:!0}),Re.InteractEvent=void 0;var Ve=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Ye(t,e)}(i,t);var e,n,r,o=We(i);function i(t,e,n,r,a,s,l){var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(u=o.call(this,t)).target=void 0,u.currentTarget=void 0,u.relatedTarget=null,u.screenX=void 0,u.screenY=void 0,u.button=void 0,u.buttons=void 0,u.ctrlKey=void 0,u.shiftKey=void 0,u.altKey=void 0,u.metaKey=void 0,u.page=void 0,u.client=void 0,u.delta=void 0,u.rect=void 0,u.x0=void 0,u.y0=void 0,u.t0=void 0,u.dt=void 0,u.duration=void 0,u.clientX0=void 0,u.clientY0=void 0,u.velocity=void 0,u.speed=void 0,u.swipe=void 0,u.timeStamp=void 0,u.dragEnter=void 0,u.dragLeave=void 0,u.axes=void 0,u.preEnd=void 0,a=a||t.element;var c=t.interactable,f=(c&&c.options||Ce.defaults).deltaSource,d=(0,z.default)(c,a,n),p="start"===r,v="end"===r,h=p?Be(u):t.prevEvent,g=p?t.coords.start:v?{page:h.page,client:h.client,timeStamp:t.coords.cur.timeStamp}:t.coords.cur;return u.page=(0,k.default)({},g.page),u.client=(0,k.default)({},g.client),u.rect=(0,k.default)({},t.rect),u.timeStamp=g.timeStamp,v||(u.page.x-=d.x,u.page.y-=d.y,u.client.x-=d.x,u.client.y-=d.y),u.ctrlKey=e.ctrlKey,u.altKey=e.altKey,u.shiftKey=e.shiftKey,u.metaKey=e.metaKey,u.button=e.button,u.buttons=e.buttons,u.target=a,u.currentTarget=a,u.preEnd=s,u.type=l||n+(r||""),u.interactable=c,u.t0=p?t.pointers[t.pointers.length-1].downTime:h.t0,u.x0=t.coords.start.page.x-d.x,u.y0=t.coords.start.page.y-d.y,u.clientX0=t.coords.start.client.x-d.x,u.clientY0=t.coords.start.client.y-d.y,u.delta=p||v?{x:0,y:0}:{x:u[f].x-h[f].x,y:u[f].y-h[f].y},u.dt=t.coords.delta.timeStamp,u.duration=u.timeStamp-u.t0,u.velocity=(0,k.default)({},t.coords.velocity[f]),u.speed=(0,F.default)(u.velocity.x,u.velocity.y),u.swipe=v||"inertiastart"===r?u.getSwipe():null,u}return e=i,(n=[{key:"getSwipe",value:function(){var t=this._interaction;if(t.prevEvent.speed<600||this.timeStamp-t.prevEvent.timeStamp>150)return null;var e=180*Math.atan2(t.prevEvent.velocityY,t.prevEvent.velocityX)/Math.PI;e<0&&(e+=360);var n=112.5<=e&&e<247.5,r=202.5<=e&&e<337.5;return{up:r,down:!r&&22.5<=e&&e<157.5,left:n,right:!n&&(292.5<=e||e<67.5),angle:e,speed:t.prevEvent.speed,velocity:{x:t.prevEvent.velocityX,y:t.prevEvent.velocityY}}}},{key:"preventDefault",value:function(){}},{key:"stopImmediatePropagation",value:function(){this.immediatePropagationStopped=this.propagationStopped=!0}},{key:"stopPropagation",value:function(){this.propagationStopped=!0}}])&&Xe(e.prototype,n),r&&Xe(e,r),i}(G.BaseEvent);Re.InteractEvent=Ve,Object.defineProperties(Ve.prototype,{pageX:{get:function(){return this.page.x},set:function(t){this.page.x=t}},pageY:{get:function(){return this.page.y},set:function(t){this.page.y=t}},clientX:{get:function(){return this.client.x},set:function(t){this.client.x=t}},clientY:{get:function(){return this.client.y},set:function(t){this.client.y=t}},dx:{get:function(){return this.delta.x},set:function(t){this.delta.x=t}},dy:{get:function(){return this.delta.y},set:function(t){this.delta.y=t}},velocityX:{get:function(){return this.velocity.x},set:function(t){this.velocity.x=t}},velocityY:{get:function(){return this.velocity.y},set:function(t){this.velocity.y=t}}});var qe={};Object.defineProperty(qe,"__esModule",{value:!0}),qe.PointerInfo=void 0;qe.PointerInfo=function t(e,n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.id=void 0,this.pointer=void 0,this.event=void 0,this.downTime=void 0,this.downTarget=void 0,this.id=e,this.pointer=n,this.event=r,this.downTime=o,this.downTarget=i};var Ne,$e,Ge={};function He(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Ke(t,e,n){return e&&He(t.prototype,e),n&&He(t,n),t}Object.defineProperty(Ge,"__esModule",{value:!0}),Object.defineProperty(Ge,"PointerInfo",{enumerable:!0,get:function(){return qe.PointerInfo}}),Ge.default=Ge.Interaction=Ge._ProxyMethods=Ge._ProxyValues=void 0,Ge._ProxyValues=Ne,function(t){t.interactable="",t.element="",t.prepared="",t.pointerIsDown="",t.pointerWasMoved="",t._proxy=""}(Ne||(Ge._ProxyValues=Ne={})),Ge._ProxyMethods=$e,function(t){t.start="",t.move="",t.end="",t.stop="",t.interacting=""}($e||(Ge._ProxyMethods=$e={}));var Ze=0,Je=function(){function t(e){var n=this,r=e.pointerType,o=e.scopeFire;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.interactable=null,this.element=null,this.rect=void 0,this._rects=void 0,this.edges=void 0,this._scopeFire=void 0,this.prepared={name:null,axis:null,edges:null},this.pointerType=void 0,this.pointers=[],this.downEvent=null,this.downPointer={},this._latestPointer={pointer:null,event:null,eventTarget:null},this.prevEvent=null,this.pointerIsDown=!1,this.pointerWasMoved=!1,this._interacting=!1,this._ending=!1,this._stopped=!0,this._proxy=null,this.simulation=null,this.doMove=(0,Wt.warnOnce)((function(t){this.move(t)}),"The interaction.doMove() method has been renamed to interaction.move()"),this.coords={start:L.newCoords(),prev:L.newCoords(),cur:L.newCoords(),delta:L.newCoords(),velocity:L.newCoords()},this._id=Ze++,this._scopeFire=o,this.pointerType=r;var i=this;this._proxy={};var a=function(t){Object.defineProperty(n._proxy,t,{get:function(){return i[t]}})};for(var s in Ne)a(s);var l=function(t){Object.defineProperty(n._proxy,t,{value:function(){return i[t].apply(i,arguments)}})};for(var u in $e)l(u);this._scopeFire("interactions:new",{interaction:this})}return Ke(t,[{key:"pointerMoveTolerance",get:function(){return 1}}]),Ke(t,[{key:"pointerDown",value:function(t,e,n){var r=this.updatePointer(t,e,n,!0),o=this.pointers[r];this._scopeFire("interactions:down",{pointer:t,event:e,eventTarget:n,pointerIndex:r,pointerInfo:o,type:"down",interaction:this})}},{key:"start",value:function(t,e,n){return!(this.interacting()||!this.pointerIsDown||this.pointers.length<("gesture"===t.name?2:1)||!e.options[t.name].enabled)&&((0,Wt.copyAction)(this.prepared,t),this.interactable=e,this.element=n,this.rect=e.getRect(n),this.edges=this.prepared.edges?(0,k.default)({},this.prepared.edges):{left:!0,right:!0,top:!0,bottom:!0},this._stopped=!1,this._interacting=this._doPhase({interaction:this,event:this.downEvent,phase:"start"})&&!this._stopped,this._interacting)}},{key:"pointerMove",value:function(t,e,n){this.simulation||this.modification&&this.modification.endResult||this.updatePointer(t,e,n,!1);var r,o,i=this.coords.cur.page.x===this.coords.prev.page.x&&this.coords.cur.page.y===this.coords.prev.page.y&&this.coords.cur.client.x===this.coords.prev.client.x&&this.coords.cur.client.y===this.coords.prev.client.y;this.pointerIsDown&&!this.pointerWasMoved&&(r=this.coords.cur.client.x-this.coords.start.client.x,o=this.coords.cur.client.y-this.coords.start.client.y,this.pointerWasMoved=(0,F.default)(r,o)>this.pointerMoveTolerance);var a=this.getPointerIndex(t),s={pointer:t,pointerIndex:a,pointerInfo:this.pointers[a],event:e,type:"move",eventTarget:n,dx:r,dy:o,duplicate:i,interaction:this};i||L.setCoordVelocity(this.coords.velocity,this.coords.delta),this._scopeFire("interactions:move",s),i||this.simulation||(this.interacting()&&(s.type=null,this.move(s)),this.pointerWasMoved&&L.copyCoords(this.coords.prev,this.coords.cur))}},{key:"move",value:function(t){t&&t.event||L.setZeroCoords(this.coords.delta),(t=(0,k.default)({pointer:this._latestPointer.pointer,event:this._latestPointer.event,eventTarget:this._latestPointer.eventTarget,interaction:this},t||{})).phase="move",this._doPhase(t)}},{key:"pointerUp",value:function(t,e,n,r){var o=this.getPointerIndex(t);-1===o&&(o=this.updatePointer(t,e,n,!1));var i=/cancel$/i.test(e.type)?"cancel":"up";this._scopeFire("interactions:".concat(i),{pointer:t,pointerIndex:o,pointerInfo:this.pointers[o],event:e,eventTarget:n,type:i,curEventTarget:r,interaction:this}),this.simulation||this.end(e),this.pointerIsDown=!1,this.removePointer(t,e)}},{key:"documentBlur",value:function(t){this.end(t),this._scopeFire("interactions:blur",{event:t,type:"blur",interaction:this})}},{key:"end",value:function(t){var e;this._ending=!0,t=t||this._latestPointer.event,this.interacting()&&(e=this._doPhase({event:t,interaction:this,phase:"end"})),this._ending=!1,!0===e&&this.stop()}},{key:"currentAction",value:function(){return this._interacting?this.prepared.name:null}},{key:"interacting",value:function(){return this._interacting}},{key:"stop",value:function(){this._scopeFire("interactions:stop",{interaction:this}),this.interactable=this.element=null,this._interacting=!1,this._stopped=!0,this.prepared.name=this.prevEvent=null}},{key:"getPointerIndex",value:function(t){var e=L.getPointerId(t);return"mouse"===this.pointerType||"pen"===this.pointerType?this.pointers.length-1:J.findIndex(this.pointers,(function(t){return t.id===e}))}},{key:"getPointerInfo",value:function(t){return this.pointers[this.getPointerIndex(t)]}},{key:"updatePointer",value:function(t,e,n,r){var o=L.getPointerId(t),i=this.getPointerIndex(t),a=this.pointers[i];return r=!1!==r&&(r||/(down|start)$/i.test(e.type)),a?a.pointer=t:(a=new qe.PointerInfo(o,t,e,null,null),i=this.pointers.length,this.pointers.push(a)),L.setCoords(this.coords.cur,this.pointers.map((function(t){return t.pointer})),this._now()),L.setCoordDeltas(this.coords.delta,this.coords.prev,this.coords.cur),r&&(this.pointerIsDown=!0,a.downTime=this.coords.cur.timeStamp,a.downTarget=n,L.pointerExtend(this.downPointer,t),this.interacting()||(L.copyCoords(this.coords.start,this.coords.cur),L.copyCoords(this.coords.prev,this.coords.cur),this.downEvent=e,this.pointerWasMoved=!1)),this._updateLatestPointer(t,e,n),this._scopeFire("interactions:update-pointer",{pointer:t,event:e,eventTarget:n,down:r,pointerInfo:a,pointerIndex:i,interaction:this}),i}},{key:"removePointer",value:function(t,e){var n=this.getPointerIndex(t);if(-1!==n){var r=this.pointers[n];this._scopeFire("interactions:remove-pointer",{pointer:t,event:e,eventTarget:null,pointerIndex:n,pointerInfo:r,interaction:this}),this.pointers.splice(n,1)}}},{key:"_updateLatestPointer",value:function(t,e,n){this._latestPointer.pointer=t,this._latestPointer.event=e,this._latestPointer.eventTarget=n}},{key:"destroy",value:function(){this._latestPointer.pointer=null,this._latestPointer.event=null,this._latestPointer.eventTarget=null}},{key:"_createPreparedEvent",value:function(t,e,n,r){return new Re.InteractEvent(this,t,this.prepared.name,e,this.element,n,r)}},{key:"_fireEvent",value:function(t){this.interactable.fire(t),(!this.prevEvent||t.timeStamp>=this.prevEvent.timeStamp)&&(this.prevEvent=t)}},{key:"_doPhase",value:function(t){var e=t.event,n=t.phase,r=t.preEnd,o=t.type,i=this.rect;if(i&&"move"===n&&(I.addEdges(this.edges,i,this.coords.delta[this.interactable.options.deltaSource]),i.width=i.right-i.left,i.height=i.bottom-i.top),!1===this._scopeFire("interactions:before-action-".concat(n),t))return!1;var a=t.iEvent=this._createPreparedEvent(e,n,r,o);return this._scopeFire("interactions:action-".concat(n),t),"start"===n&&(this.prevEvent=a),this._fireEvent(a),this._scopeFire("interactions:after-action-".concat(n),t),!0}},{key:"_now",value:function(){return Date.now()}}]),t}();Ge.Interaction=Je;var Qe=Je;Ge.default=Qe;var tn={};function en(t){t.pointerIsDown&&(an(t.coords.cur,t.offset.total),t.offset.pending.x=0,t.offset.pending.y=0)}function nn(t){rn(t.interaction)}function rn(t){if(!function(t){return!(!t.offset.pending.x&&!t.offset.pending.y)}(t))return!1;var e=t.offset.pending;return an(t.coords.cur,e),an(t.coords.delta,e),I.addEdges(t.edges,t.rect,e),e.x=0,e.y=0,!0}function on(t){var e=t.x,n=t.y;this.offset.pending.x+=e,this.offset.pending.y+=n,this.offset.total.x+=e,this.offset.total.y+=n}function an(t,e){var n=t.page,r=t.client,o=e.x,i=e.y;n.x+=o,n.y+=i,r.x+=o,r.y+=i}Object.defineProperty(tn,"__esModule",{value:!0}),tn.addTotal=en,tn.applyPending=rn,tn.default=void 0,Ge._ProxyMethods.offsetBy="";var sn={id:"offset",before:["modifiers"],install:function(t){t.Interaction.prototype.offsetBy=on},listeners:{"interactions:new":function(t){t.interaction.offset={total:{x:0,y:0},pending:{x:0,y:0}}},"interactions:update-pointer":function(t){return en(t.interaction)},"interactions:before-action-start":nn,"interactions:before-action-move":nn,"interactions:before-action-end":function(t){var e=t.interaction;if(rn(e))return e.move({offset:!0}),e.end(),!1},"interactions:stop":function(t){var e=t.interaction;e.offset.total.x=0,e.offset.total.y=0,e.offset.pending.x=0,e.offset.pending.y=0}}};tn.default=sn;var ln={};function un(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(ln,"__esModule",{value:!0}),ln.default=ln.InertiaState=void 0;var cn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.active=!1,this.isModified=!1,this.smoothEnd=!1,this.allowResume=!1,this.modification=null,this.modifierCount=0,this.modifierArg=null,this.startCoords=null,this.t0=0,this.v0=0,this.te=0,this.targetOffset=null,this.modifiedOffset=null,this.currentOffset=null,this.lambda_v0=0,this.one_ve_v0=0,this.timeout=null,this.interaction=void 0,this.interaction=e}var e,n,r;return e=t,(n=[{key:"start",value:function(t){var e=this.interaction,n=fn(e);if(!n||!n.enabled)return!1;var r=e.coords.velocity.client,o=(0,F.default)(r.x,r.y),i=this.modification||(this.modification=new Oe.default(e));if(i.copyFrom(e.modification),this.t0=e._now(),this.allowResume=n.allowResume,this.v0=o,this.currentOffset={x:0,y:0},this.startCoords=e.coords.cur.page,this.modifierArg={interaction:e,interactable:e.interactable,element:e.element,rect:e.rect,edges:e.edges,pageCoords:this.startCoords,preEnd:!0,phase:"inertiastart"},this.t0-e.coords.cur.timeStamp<50&&o>n.minSpeed&&o>n.endSpeed)this.startInertia();else{if(i.result=i.setAll(this.modifierArg),!i.result.changed)return!1;this.startSmoothEnd()}return e.modification.result.rect=null,e.offsetBy(this.targetOffset),e._doPhase({interaction:e,event:t,phase:"inertiastart"}),e.offsetBy({x:-this.targetOffset.x,y:-this.targetOffset.y}),e.modification.result.rect=null,this.active=!0,e.simulation=this,!0}},{key:"startInertia",value:function(){var t=this,e=this.interaction.coords.velocity.client,n=fn(this.interaction),r=n.resistance,o=-Math.log(n.endSpeed/this.v0)/r;this.targetOffset={x:(e.x-o)/r,y:(e.y-o)/r},this.te=o,this.lambda_v0=r/this.v0,this.one_ve_v0=1-n.endSpeed/this.v0;var i=this.modification,a=this.modifierArg;a.pageCoords={x:this.startCoords.x+this.targetOffset.x,y:this.startCoords.y+this.targetOffset.y},i.result=i.setAll(a),i.result.changed&&(this.isModified=!0,this.modifiedOffset={x:this.targetOffset.x+i.result.delta.x,y:this.targetOffset.y+i.result.delta.y}),this.timeout=kt.default.request((function(){return t.inertiaTick()}))}},{key:"startSmoothEnd",value:function(){var t=this;this.smoothEnd=!0,this.isModified=!0,this.targetOffset={x:this.modification.result.delta.x,y:this.modification.result.delta.y},this.timeout=kt.default.request((function(){return t.smoothEndTick()}))}},{key:"inertiaTick",value:function(){var t,e,n,r,o,i,a,s=this,l=this.interaction,u=fn(l).resistance,c=(l._now()-this.t0)/1e3;if(c<this.te){var f,d=1-(Math.exp(-u*c)-this.lambda_v0)/this.one_ve_v0;this.isModified?(t=0,e=0,n=this.targetOffset.x,r=this.targetOffset.y,o=this.modifiedOffset.x,i=this.modifiedOffset.y,f={x:dn(a=d,t,n,o),y:dn(a,e,r,i)}):f={x:this.targetOffset.x*d,y:this.targetOffset.y*d};var p={x:f.x-this.currentOffset.x,y:f.y-this.currentOffset.y};this.currentOffset.x+=p.x,this.currentOffset.y+=p.y,l.offsetBy(p),l.move(),this.timeout=kt.default.request((function(){return s.inertiaTick()}))}else l.offsetBy({x:this.modifiedOffset.x-this.currentOffset.x,y:this.modifiedOffset.y-this.currentOffset.y}),this.end()}},{key:"smoothEndTick",value:function(){var t=this,e=this.interaction,n=e._now()-this.t0,r=fn(e).smoothEndDuration;if(n<r){var o={x:pn(n,0,this.targetOffset.x,r),y:pn(n,0,this.targetOffset.y,r)},i={x:o.x-this.currentOffset.x,y:o.y-this.currentOffset.y};this.currentOffset.x+=i.x,this.currentOffset.y+=i.y,e.offsetBy(i),e.move({skipModifiers:this.modifierCount}),this.timeout=kt.default.request((function(){return t.smoothEndTick()}))}else e.offsetBy({x:this.targetOffset.x-this.currentOffset.x,y:this.targetOffset.y-this.currentOffset.y}),this.end()}},{key:"resume",value:function(t){var e=t.pointer,n=t.event,r=t.eventTarget,o=this.interaction;o.offsetBy({x:-this.currentOffset.x,y:-this.currentOffset.y}),o.updatePointer(e,n,r,!0),o._doPhase({interaction:o,event:n,phase:"resume"}),(0,L.copyCoords)(o.coords.prev,o.coords.cur),this.stop()}},{key:"end",value:function(){this.interaction.move(),this.interaction.end(),this.stop()}},{key:"stop",value:function(){this.active=this.smoothEnd=!1,this.interaction.simulation=null,kt.default.cancel(this.timeout)}}])&&un(e.prototype,n),r&&un(e,r),t}();function fn(t){var e=t.interactable,n=t.prepared;return e&&e.options&&n.name&&e.options[n.name].inertia}function dn(t,e,n,r){var o=1-t;return o*o*e+2*o*t*n+t*t*r}function pn(t,e,n,r){return-n*(t/=r)*(t-2)+e}ln.InertiaState=cn;var vn={id:"inertia",before:["modifiers"],install:function(t){var e=t.defaults;t.usePlugin(tn.default),t.usePlugin(De.default),t.actions.phases.inertiastart=!0,t.actions.phases.resume=!0,e.perAction.inertia={enabled:!1,resistance:10,minSpeed:100,endSpeed:10,allowResume:!0,smoothEndDuration:300}},listeners:{"interactions:new":function(t){var e=t.interaction;e.inertia=new cn(e)},"interactions:before-action-end":function(t){var e=t.interaction,n=t.event;return(!e._interacting||e.simulation||!e.inertia.start(n))&&null},"interactions:down":function(t){var e=t.interaction,n=t.eventTarget,r=e.inertia;if(r.active)for(var o=n;a.default.element(o);){if(o===e.element){r.resume(t);break}o=S.parentNode(o)}},"interactions:stop":function(t){var e=t.interaction.inertia;e.active&&e.stop()},"interactions:before-action-resume":function(t){var e=t.interaction.modification;e.stop(t),e.start(t,t.interaction.coords.cur.page),e.applyToInteraction(t)},"interactions:before-action-inertiastart":function(t){return t.interaction.modification.setAndApply(t)},"interactions:action-resume":De.addEventModifiers,"interactions:action-inertiastart":De.addEventModifiers,"interactions:after-action-inertiastart":function(t){return t.interaction.modification.restoreInteractionCoords(t)},"interactions:after-action-resume":function(t){return t.interaction.modification.restoreInteractionCoords(t)}}};ln.default=vn;var hn={};function gn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function yn(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(t.immediatePropagationStopped)break;r(t)}}Object.defineProperty(hn,"__esModule",{value:!0}),hn.Eventable=void 0;var mn=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this.types={},this.propagationStopped=!1,this.immediatePropagationStopped=!1,this.global=void 0,this.options=(0,k.default)({},e||{})}var e,n,r;return e=t,(n=[{key:"fire",value:function(t){var e,n=this.global;(e=this.types[t.type])&&yn(t,e),!t.propagationStopped&&n&&(e=n[t.type])&&yn(t,e)}},{key:"on",value:function(t,e){var n=(0,C.default)(t,e);for(t in n)this.types[t]=J.merge(this.types[t]||[],n[t])}},{key:"off",value:function(t,e){var n=(0,C.default)(t,e);for(t in n){var r=this.types[t];if(r&&r.length)for(var o=0;o<n[t].length;o++){var i=n[t][o],a=r.indexOf(i);-1!==a&&r.splice(a,1)}}}},{key:"getRect",value:function(t){return null}}])&&gn(e.prototype,n),r&&gn(e,r),t}();hn.Eventable=mn;var bn={};Object.defineProperty(bn,"__esModule",{value:!0}),bn.default=function(t,e){if(e.phaselessTypes[t])return!0;for(var n in e.map)if(0===t.indexOf(n)&&t.substr(n.length)in e.phases)return!0;return!1};var xn={};function wn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function _n(t,e,n){return e&&wn(t.prototype,e),n&&wn(t,n),t}Object.defineProperty(xn,"__esModule",{value:!0}),xn.Interactable=void 0;var Sn=function(){function t(n,r,o,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.options=void 0,this._actions=void 0,this.target=void 0,this.events=new hn.Eventable,this._context=void 0,this._win=void 0,this._doc=void 0,this._scopeEvents=void 0,this._rectChecker=void 0,this._actions=r.actions,this.target=n,this._context=r.context||o,this._win=(0,e.getWindow)((0,S.trySelector)(n)?this._context:n),this._doc=this._win.document,this._scopeEvents=i,this.set(r)}return _n(t,[{key:"_defaults",get:function(){return{base:{},perAction:{},actions:{}}}}]),_n(t,[{key:"setOnEvents",value:function(t,e){return a.default.func(e.onstart)&&this.on("".concat(t,"start"),e.onstart),a.default.func(e.onmove)&&this.on("".concat(t,"move"),e.onmove),a.default.func(e.onend)&&this.on("".concat(t,"end"),e.onend),a.default.func(e.oninertiastart)&&this.on("".concat(t,"inertiastart"),e.oninertiastart),this}},{key:"updatePerActionListeners",value:function(t,e,n){(a.default.array(e)||a.default.object(e))&&this.off(t,e),(a.default.array(n)||a.default.object(n))&&this.on(t,n)}},{key:"setPerAction",value:function(t,e){var n=this._defaults;for(var r in e){var o=r,i=this.options[t],s=e[o];"listeners"===o&&this.updatePerActionListeners(t,i.listeners,s),a.default.array(s)?i[o]=J.from(s):a.default.plainObject(s)?(i[o]=(0,k.default)(i[o]||{},(0,Pe.default)(s)),a.default.object(n.perAction[o])&&"enabled"in n.perAction[o]&&(i[o].enabled=!1!==s.enabled)):a.default.bool(s)&&a.default.object(n.perAction[o])?i[o].enabled=s:i[o]=s}}},{key:"getRect",value:function(t){return t=t||(a.default.element(this.target)?this.target:null),a.default.string(this.target)&&(t=t||this._context.querySelector(this.target)),(0,S.getElementRect)(t)}},{key:"rectChecker",value:function(t){var e=this;return a.default.func(t)?(this._rectChecker=t,this.getRect=function(t){var n=(0,k.default)({},e._rectChecker(t));return"width"in n||(n.width=n.right-n.left,n.height=n.bottom-n.top),n},this):null===t?(delete this.getRect,delete this._rectChecker,this):this.getRect}},{key:"_backCompatOption",value:function(t,e){if((0,S.trySelector)(e)||a.default.object(e)){for(var n in this.options[t]=e,this._actions.map)this.options[n][t]=e;return this}return this.options[t]}},{key:"origin",value:function(t){return this._backCompatOption("origin",t)}},{key:"deltaSource",value:function(t){return"page"===t||"client"===t?(this.options.deltaSource=t,this):this.options.deltaSource}},{key:"context",value:function(){return this._context}},{key:"inContext",value:function(t){return this._context===t.ownerDocument||(0,S.nodeContains)(this._context,t)}},{key:"testIgnoreAllow",value:function(t,e,n){return!this.testIgnore(t.ignoreFrom,e,n)&&this.testAllow(t.allowFrom,e,n)}},{key:"testAllow",value:function(t,e,n){return!t||!!a.default.element(n)&&(a.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"testIgnore",value:function(t,e,n){return!(!t||!a.default.element(n))&&(a.default.string(t)?(0,S.matchesUpTo)(n,t,e):!!a.default.element(t)&&(0,S.nodeContains)(t,n))}},{key:"fire",value:function(t){return this.events.fire(t),this}},{key:"_onOff",value:function(t,e,n,r){a.default.object(e)&&!a.default.array(e)&&(r=n,n=null);var o="on"===t?"add":"remove",i=(0,C.default)(e,n);for(var s in i){"wheel"===s&&(s=x.default.wheelEvent);for(var l=0;l<i[s].length;l++){var u=i[s][l];(0,bn.default)(s,this._actions)?this.events[t](s,u):a.default.string(this.target)?this._scopeEvents["".concat(o,"Delegate")](this.target,this._context,s,u,r):this._scopeEvents[o](this.target,s,u,r)}}return this}},{key:"on",value:function(t,e,n){return this._onOff("on",t,e,n)}},{key:"off",value:function(t,e,n){return this._onOff("off",t,e,n)}},{key:"set",value:function(t){var e=this._defaults;for(var n in a.default.object(t)||(t={}),this.options=(0,Pe.default)(e.base),this._actions.methodDict){var r=n,o=this._actions.methodDict[r];this.options[r]={},this.setPerAction(r,(0,k.default)((0,k.default)({},e.perAction),e.actions[r])),this[o](t[r])}for(var i in t)a.default.func(this[i])&&this[i](t[i]);return this}},{key:"unset",value:function(){if(a.default.string(this.target))for(var t in this._scopeEvents.delegatedEvents)for(var e=this._scopeEvents.delegatedEvents[t],n=e.length-1;n>=0;n--){var r=e[n],o=r.selector,i=r.context,s=r.listeners;o===this.target&&i===this._context&&e.splice(n,1);for(var l=s.length-1;l>=0;l--)this._scopeEvents.removeDelegate(this.target,this._context,t,s[l][0],s[l][1])}else this._scopeEvents.remove(this.target,"all")}}]),t}();xn.Interactable=Sn;var Pn={};function On(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}Object.defineProperty(Pn,"__esModule",{value:!0}),Pn.InteractableSet=void 0;var En=function(){function t(e){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.list=[],this.selectorMap={},this.scope=void 0,this.scope=e,e.addListeners({"interactable:unset":function(t){var e=t.interactable,r=e.target,o=e._context,i=a.default.string(r)?n.selectorMap[r]:r[n.scope.id],s=i.findIndex((function(t){return t.context===o}));i[s]&&(i[s].context=null,i[s].interactable=null),i.splice(s,1)}})}var e,n,r;return e=t,(n=[{key:"new",value:function(t,e){e=(0,k.default)(e||{},{actions:this.scope.actions});var n=new this.scope.Interactable(t,e,this.scope.document,this.scope.events),r={context:n._context,interactable:n};return this.scope.addDocument(n._doc),this.list.push(n),a.default.string(t)?(this.selectorMap[t]||(this.selectorMap[t]=[]),this.selectorMap[t].push(r)):(n.target[this.scope.id]||Object.defineProperty(t,this.scope.id,{value:[],configurable:!0}),t[this.scope.id].push(r)),this.scope.fire("interactable:new",{target:t,options:e,interactable:n,win:this.scope._win}),n}},{key:"get",value:function(t,e){var n=e&&e.context||this.scope.document,r=a.default.string(t),o=r?this.selectorMap[t]:t[this.scope.id];if(!o)return null;var i=J.find(o,(function(e){return e.context===n&&(r||e.interactable.inContext(t))}));return i&&i.interactable}},{key:"forEachMatch",value:function(t,e){for(var n=0;n<this.list.length;n++){var r=this.list[n],o=void 0;if((a.default.string(r.target)?a.default.element(t)&&S.matchesSelector(t,r.target):t===r.target)&&r.inContext(t)&&(o=e(r)),void 0!==o)return o}}}])&&On(e.prototype,n),r&&On(e,r),t}();Pn.InteractableSet=En;var Tn={};function Mn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function jn(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return kn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return kn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(Tn,"__esModule",{value:!0}),Tn.default=Tn.FakeEvent=void 0;var In=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentTarget=void 0,this.originalEvent=void 0,this.originalEvent=e,(0,X.default)(this,e)}var e,n,r;return e=t,(n=[{key:"preventOriginalDefault",value:function(){this.originalEvent.preventDefault()}},{key:"stopPropagation",value:function(){this.originalEvent.stopPropagation()}},{key:"stopImmediatePropagation",value:function(){this.originalEvent.stopImmediatePropagation()}}])&&Mn(e.prototype,n),r&&Mn(e,r),t}();function Dn(t){if(!a.default.object(t))return{capture:!!t,passive:!1};var e=(0,k.default)({},t);return e.capture=!!t.capture,e.passive=!!t.passive,e}Tn.FakeEvent=In;var An={id:"events",install:function(t){var e=[],n={},r=[],o={add:i,remove:s,addDelegate:function(t,e,o,a,s){var c=Dn(s);if(!n[o]){n[o]=[];for(var f=0;f<r.length;f++){var d=r[f];i(d,o,l),i(d,o,u,!0)}}var p=n[o],v=J.find(p,(function(n){return n.selector===t&&n.context===e}));v||(v={selector:t,context:e,listeners:[]},p.push(v));v.listeners.push([a,c])},removeDelegate:function(t,e,r,o,i){var a,c=Dn(i),f=n[r],d=!1;if(!f)return;for(a=f.length-1;a>=0;a--){var p=f[a];if(p.selector===t&&p.context===e){for(var v=p.listeners,h=v.length-1;h>=0;h--){var g=jn(v[h],2),y=g[0],m=g[1],b=m.capture,x=m.passive;if(y===o&&b===c.capture&&x===c.passive){v.splice(h,1),v.length||(f.splice(a,1),s(e,r,l),s(e,r,u,!0)),d=!0;break}}if(d)break}}},delegateListener:l,delegateUseCapture:u,delegatedEvents:n,documents:r,targets:e,supportsOptions:!1,supportsPassive:!1};function i(t,n,r,i){var a=Dn(i),s=J.find(e,(function(e){return e.eventTarget===t}));s||(s={eventTarget:t,events:{}},e.push(s)),s.events[n]||(s.events[n]=[]),t.addEventListener&&!J.contains(s.events[n],r)&&(t.addEventListener(n,r,o.supportsOptions?a:a.capture),s.events[n].push(r))}function s(t,n,r,i){var a=Dn(i),l=J.findIndex(e,(function(e){return e.eventTarget===t})),u=e[l];if(u&&u.events)if("all"!==n){var c=!1,f=u.events[n];if(f){if("all"===r){for(var d=f.length-1;d>=0;d--)s(t,n,f[d],a);return}for(var p=0;p<f.length;p++)if(f[p]===r){t.removeEventListener(n,r,o.supportsOptions?a:a.capture),f.splice(p,1),0===f.length&&(delete u.events[n],c=!0);break}}c&&!Object.keys(u.events).length&&e.splice(l,1)}else for(n in u.events)u.events.hasOwnProperty(n)&&s(t,n,"all")}function l(t,e){for(var r=Dn(e),o=new In(t),i=n[t.type],s=jn(L.getEventTargets(t),1)[0],l=s;a.default.element(l);){for(var u=0;u<i.length;u++){var c=i[u],f=c.selector,d=c.context;if(S.matchesSelector(l,f)&&S.nodeContains(d,s)&&S.nodeContains(d,l)){var p=c.listeners;o.currentTarget=l;for(var v=0;v<p.length;v++){var h=jn(p[v],2),g=h[0],y=h[1],m=y.capture,b=y.passive;m===r.capture&&b===r.passive&&g(o)}}}l=S.parentNode(l)}}function u(t){return l(t,!0)}return t.document.createElement("div").addEventListener("test",null,{get capture(){return o.supportsOptions=!0},get passive(){return o.supportsPassive=!0}}),t.events=o,o}};Tn.default=An;var zn={};Object.defineProperty(zn,"__esModule",{value:!0}),zn.createInteractStatic=function(t){var e=function e(n,r){var o=t.interactables.get(n,r);return o||((o=t.interactables.new(n,r)).events.global=e.globalEvents),o};return e.getPointerAverage=L.pointerAverage,e.getTouchBBox=L.touchBBox,e.getTouchDistance=L.touchDistance,e.getTouchAngle=L.touchAngle,e.getElementRect=S.getElementRect,e.getElementClientRect=S.getElementClientRect,e.matchesSelector=S.matchesSelector,e.closest=S.closest,e.globalEvents={},e.version=void 0,e.scope=t,e.use=function(t,e){return this.scope.usePlugin(t,e),this},e.isSet=function(t,e){return!!this.scope.interactables.get(t,e&&e.context)},e.on=function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.on(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.on(i,t[i],e);return this}return(0,bn.default)(t,this.scope.actions)?this.globalEvents[t]?this.globalEvents[t].push(e):this.globalEvents[t]=[e]:this.scope.events.add(this.scope.document,t,e,{options:n}),this},e.off=function(t,e,n){if(a.default.string(t)&&-1!==t.search(" ")&&(t=t.trim().split(/ +/)),a.default.array(t)){for(var r=0;r<t.length;r++){var o=t[r];this.off(o,e,n)}return this}if(a.default.object(t)){for(var i in t)this.off(i,t[i],e);return this}var s;(0,bn.default)(t,this.scope.actions)?t in this.globalEvents&&-1!==(s=this.globalEvents[t].indexOf(e))&&this.globalEvents[t].splice(s,1):this.scope.events.remove(this.scope.document,t,e,n);return this},e.debug=function(){return this.scope},e.supportsTouch=function(){return x.default.supportsTouch},e.supportsPointerEvent=function(){return x.default.supportsPointerEvent},e.stop=function(){for(var t=0;t<this.scope.interactions.list.length;t++){this.scope.interactions.list[t].stop()}return this},e.pointerMoveTolerance=function(t){return a.default.number(t)?(this.scope.interactions.pointerMoveTolerance=t,this):this.scope.interactions.pointerMoveTolerance},e.addDocument=function(t,e){this.scope.addDocument(t,e)},e.removeDocument=function(t){this.scope.removeDocument(t)},e};var Cn={};Object.defineProperty(Cn,"__esModule",{value:!0}),Cn.default=void 0;var Rn={methodOrder:["simulationResume","mouseOrPen","hasPointer","idle"],search:function(t){for(var e=0;e<Rn.methodOrder.length;e++){var n;n=Rn.methodOrder[e];var r=Rn[n](t);if(r)return r}return null},simulationResume:function(t){var e=t.pointerType,n=t.eventType,r=t.eventTarget,o=t.scope;if(!/down|start/i.test(n))return null;for(var i=0;i<o.interactions.list.length;i++){var a=o.interactions.list[i],s=r;if(a.simulation&&a.simulation.allowResume&&a.pointerType===e)for(;s;){if(s===a.element)return a;s=S.parentNode(s)}}return null},mouseOrPen:function(t){var e,n=t.pointerId,r=t.pointerType,o=t.eventType,i=t.scope;if("mouse"!==r&&"pen"!==r)return null;for(var a=0;a<i.interactions.list.length;a++){var s=i.interactions.list[a];if(s.pointerType===r){if(s.simulation&&!Fn(s,n))continue;if(s.interacting())return s;e||(e=s)}}if(e)return e;for(var l=0;l<i.interactions.list.length;l++){var u=i.interactions.list[l];if(!(u.pointerType!==r||/down/i.test(o)&&u.simulation))return u}return null},hasPointer:function(t){for(var e=t.pointerId,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(Fn(o,e))return o}return null},idle:function(t){for(var e=t.pointerType,n=t.scope,r=0;r<n.interactions.list.length;r++){var o=n.interactions.list[r];if(1===o.pointers.length){var i=o.interactable;if(i&&(!i.options.gesture||!i.options.gesture.enabled))continue}else if(o.pointers.length>=2)continue;if(!o.interacting()&&e===o.pointerType)return o}return null}};function Fn(t,e){return t.pointers.some((function(t){return t.id===e}))}var Xn=Rn;Cn.default=Xn;var Yn={};function Wn(t){return(Wn="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Ln(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return Bn(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Bn(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Bn(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}function Un(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Vn(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qn(t,e){return(qn=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function Nn(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Gn(t);if(e){var o=Gn(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return $n(this,n)}}function $n(t,e){return!e||"object"!==Wn(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function Gn(t){return(Gn=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(Yn,"__esModule",{value:!0}),Yn.default=void 0;var Hn=["pointerDown","pointerMove","pointerUp","updatePointer","removePointer","windowBlur"];function Kn(t,e){return function(n){var r=e.interactions.list,o=L.getPointerType(n),i=Ln(L.getEventTargets(n),2),a=i[0],s=i[1],l=[];if(/^touch/.test(n.type)){e.prevTouchTime=e.now();for(var u=0;u<n.changedTouches.length;u++){var c=n.changedTouches[u],f={pointer:c,pointerId:L.getPointerId(c),pointerType:o,eventType:n.type,eventTarget:a,curEventTarget:s,scope:e},d=Zn(f);l.push([f.pointer,f.eventTarget,f.curEventTarget,d])}}else{var p=!1;if(!x.default.supportsPointerEvent&&/mouse/.test(n.type)){for(var v=0;v<r.length&&!p;v++)p="mouse"!==r[v].pointerType&&r[v].pointerIsDown;p=p||e.now()-e.prevTouchTime<500||0===n.timeStamp}if(!p){var h={pointer:n,pointerId:L.getPointerId(n),pointerType:o,eventType:n.type,curEventTarget:s,eventTarget:a,scope:e},g=Zn(h);l.push([h.pointer,h.eventTarget,h.curEventTarget,g])}}for(var y=0;y<l.length;y++){var m=Ln(l[y],4),b=m[0],w=m[1],_=m[2];m[3][t](b,n,w,_)}}}function Zn(t){var e=t.pointerType,n=t.scope,r={interaction:Cn.default.search(t),searchDetails:t};return n.fire("interactions:find",r),r.interaction||n.interactions.new({pointerType:e})}function Jn(t,e){var n=t.doc,r=t.scope,o=t.options,i=r.interactions.docEvents,a=r.events,s=a[e];for(var l in r.browser.isIOS&&!o.events&&(o.events={passive:!1}),a.delegatedEvents)s(n,l,a.delegateListener),s(n,l,a.delegateUseCapture,!0);for(var u=o&&o.events,c=0;c<i.length;c++){var f=i[c];s(n,f.type,f.listener,u)}}var Qn={id:"core/interactions",install:function(t){for(var e={},n=0;n<Hn.length;n++){var r=Hn[n];e[r]=Kn(r,t)}var o,i=x.default.pEventTypes;function a(){for(var e=0;e<t.interactions.list.length;e++){var n=t.interactions.list[e];if(n.pointerIsDown&&"touch"===n.pointerType&&!n._interacting)for(var r=function(){var e=n.pointers[o];t.documents.some((function(t){var n=t.doc;return(0,S.nodeContains)(n,e.downTarget)}))||n.removePointer(e.pointer,e.event)},o=0;o<n.pointers.length;o++){r()}}}(o=g.default.PointerEvent?[{type:i.down,listener:a},{type:i.down,listener:e.pointerDown},{type:i.move,listener:e.pointerMove},{type:i.up,listener:e.pointerUp},{type:i.cancel,listener:e.pointerUp}]:[{type:"mousedown",listener:e.pointerDown},{type:"mousemove",listener:e.pointerMove},{type:"mouseup",listener:e.pointerUp},{type:"touchstart",listener:a},{type:"touchstart",listener:e.pointerDown},{type:"touchmove",listener:e.pointerMove},{type:"touchend",listener:e.pointerUp},{type:"touchcancel",listener:e.pointerUp}]).push({type:"blur",listener:function(e){for(var n=0;n<t.interactions.list.length;n++){t.interactions.list[n].documentBlur(e)}}}),t.prevTouchTime=0,t.Interaction=function(e){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qn(t,e)}(a,e);var n,r,o,i=Nn(a);function a(){return Un(this,a),i.apply(this,arguments)}return n=a,(r=[{key:"_now",value:function(){return t.now()}},{key:"pointerMoveTolerance",get:function(){return t.interactions.pointerMoveTolerance},set:function(e){t.interactions.pointerMoveTolerance=e}}])&&Vn(n.prototype,r),o&&Vn(n,o),a}(Ge.default),t.interactions={list:[],new:function(e){e.scopeFire=function(e,n){return t.fire(e,n)};var n=new t.Interaction(e);return t.interactions.list.push(n),n},listeners:e,docEvents:o,pointerMoveTolerance:1},t.usePlugin(ue.default)},listeners:{"scope:add-document":function(t){return Jn(t,"add")},"scope:remove-document":function(t){return Jn(t,"remove")},"interactable:unset":function(t,e){for(var n=t.interactable,r=e.interactions.list.length-1;r>=0;r--){var o=e.interactions.list[r];o.interactable===n&&(o.stop(),e.fire("interactions:destroy",{interaction:o}),o.destroy(),e.interactions.list.length>2&&e.interactions.list.splice(r,1))}}},onDocSignal:Jn,doOnInteractions:Kn,methodNames:Hn};Yn.default=Qn;var tr={};function er(t){return(er="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function nr(t,e,n){return(nr="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,e,n){var r=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=ar(t)););return t}(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(n):o.value}})(t,e,n||t)}function rr(t,e){return(rr=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function or(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ar(t);if(e){var o=ar(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ir(this,n)}}function ir(t,e){return!e||"object"!==er(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function ar(t){return(ar=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function sr(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lr(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ur(t,e,n){return e&&lr(t.prototype,e),n&&lr(t,n),t}Object.defineProperty(tr,"__esModule",{value:!0}),tr.initScope=fr,tr.Scope=void 0;var cr=function(){function t(){var e=this;sr(this,t),this.id="__interact_scope_".concat(Math.floor(100*Math.random())),this.isInitialized=!1,this.listenerMaps=[],this.browser=x.default,this.defaults=(0,Pe.default)(Ce.defaults),this.Eventable=hn.Eventable,this.actions={map:{},phases:{start:!0,move:!0,end:!0},methodDict:{},phaselessTypes:{}},this.interactStatic=(0,zn.createInteractStatic)(this),this.InteractEvent=Re.InteractEvent,this.Interactable=void 0,this.interactables=new Pn.InteractableSet(this),this._win=void 0,this.document=void 0,this.window=void 0,this.documents=[],this._plugins={list:[],map:{}},this.onWindowUnload=function(t){return e.removeDocument(t.target)};var n=this;this.Interactable=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&rr(t,e)}(r,t);var e=or(r);function r(){return sr(this,r),e.apply(this,arguments)}return ur(r,[{key:"set",value:function(t){return nr(ar(r.prototype),"set",this).call(this,t),n.fire("interactable:set",{options:t,interactable:this}),this}},{key:"unset",value:function(){nr(ar(r.prototype),"unset",this).call(this),n.interactables.list.splice(n.interactables.list.indexOf(this),1),n.fire("interactable:unset",{interactable:this})}},{key:"_defaults",get:function(){return n.defaults}}]),r}(xn.Interactable)}return ur(t,[{key:"addListeners",value:function(t,e){this.listenerMaps.push({id:e,map:t})}},{key:"fire",value:function(t,e){for(var n=0;n<this.listenerMaps.length;n++){var r=this.listenerMaps[n].map[t];if(r&&!1===r(e,this,t))return!1}}},{key:"init",value:function(t){return this.isInitialized?this:fr(this,t)}},{key:"pluginIsInstalled",value:function(t){return this._plugins.map[t.id]||-1!==this._plugins.list.indexOf(t)}},{key:"usePlugin",value:function(t,e){if(!this.isInitialized)return this;if(this.pluginIsInstalled(t))return this;if(t.id&&(this._plugins.map[t.id]=t),this._plugins.list.push(t),t.install&&t.install(this,e),t.listeners&&t.before){for(var n=0,r=this.listenerMaps.length,o=t.before.reduce((function(t,e){return t[e]=!0,t[dr(e)]=!0,t}),{});n<r;n++){var i=this.listenerMaps[n].id;if(o[i]||o[dr(i)])break}this.listenerMaps.splice(n,0,{id:t.id,map:t.listeners})}else t.listeners&&this.listenerMaps.push({id:t.id,map:t.listeners});return this}},{key:"addDocument",value:function(t,n){if(-1!==this.getDocIndex(t))return!1;var r=e.default.getWindow(t);n=n?(0,k.default)({},n):{},this.documents.push({doc:t,options:n}),this.events.documents.push(t),t!==this.document&&this.events.add(r,"unload",this.onWindowUnload),this.fire("scope:add-document",{doc:t,window:r,scope:this,options:n})}},{key:"removeDocument",value:function(t){var n=this.getDocIndex(t),r=e.default.getWindow(t),o=this.documents[n].options;this.events.remove(r,"unload",this.onWindowUnload),this.documents.splice(n,1),this.events.documents.splice(n,1),this.fire("scope:remove-document",{doc:t,window:r,scope:this,options:o})}},{key:"getDocIndex",value:function(t){for(var e=0;e<this.documents.length;e++)if(this.documents[e].doc===t)return e;return-1}},{key:"getDocOptions",value:function(t){var e=this.getDocIndex(t);return-1===e?null:this.documents[e].options}},{key:"now",value:function(){return(this.window.Date||Date).now()}}]),t}();function fr(t,n){return t.isInitialized=!0,e.default.init(n),g.default.init(n),x.default.init(n),kt.default.init(n),t.window=n,t.document=n.document,t.usePlugin(Yn.default),t.usePlugin(Tn.default),t}function dr(t){return t&&t.replace(/\/.*$/,"")}tr.Scope=cr;var pr={};function vr(t){return(vr="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(pr,"__esModule",{value:!0}),pr.init=pr.default=void 0;var hr=new tr.Scope,gr=hr.interactStatic;pr.default=gr;var yr=function(t){return hr.init(t)};pr.init=yr,"object"===("undefined"==typeof window?"undefined":vr(window))&&window&&yr(window);var mr={};Object.defineProperty(mr,"__esModule",{value:!0}),mr.default=void 0;mr.default=function(){};var br={};Object.defineProperty(br,"__esModule",{value:!0}),br.default=void 0;br.default=function(){};var xr={};function wr(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return _r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(xr,"__esModule",{value:!0}),xr.default=void 0;xr.default=function(t){var e=[["x","y"],["left","top"],["right","bottom"],["width","height"]].filter((function(e){var n=wr(e,2),r=n[0],o=n[1];return r in t||o in t})),n=function(n,r){for(var o=t.range,i=t.limits,a=void 0===i?{left:-1/0,right:1/0,top:-1/0,bottom:1/0}:i,s=t.offset,l=void 0===s?{x:0,y:0}:s,u={range:o,grid:t,x:null,y:null},c=0;c<e.length;c++){var f=wr(e[c],2),d=f[0],p=f[1],v=Math.round((n-l.x)/t[d]),h=Math.round((r-l.y)/t[p]);u[d]=Math.max(a.left,Math.min(a.right,v*t[d]+l.x)),u[p]=Math.max(a.top,Math.min(a.bottom,h*t[p]+l.y))}return u};return n.grid=t,n.coordFields=e,n};var Sr={};Object.defineProperty(Sr,"__esModule",{value:!0}),Object.defineProperty(Sr,"edgeTarget",{enumerable:!0,get:function(){return mr.default}}),Object.defineProperty(Sr,"elements",{enumerable:!0,get:function(){return br.default}}),Object.defineProperty(Sr,"grid",{enumerable:!0,get:function(){return xr.default}});var Pr={};Object.defineProperty(Pr,"__esModule",{value:!0}),Pr.default=void 0;var Or={id:"snappers",install:function(t){var e=t.interactStatic;e.snappers=(0,k.default)(e.snappers||{},Sr),e.createSnapGrid=e.snappers.grid}};Pr.default=Or;var Er={};function Tr(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Mr(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Tr(Object(n),!0).forEach((function(e){jr(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Tr(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function jr(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object.defineProperty(Er,"__esModule",{value:!0}),Er.aspectRatio=Er.default=void 0;var kr={start:function(t){var e=t.state,n=t.rect,r=t.edges,o=t.pageCoords,i=e.options.ratio,a=e.options,s=a.equalDelta,l=a.modifiers;"preserve"===i&&(i=n.width/n.height),e.startCoords=(0,k.default)({},o),e.startRect=(0,k.default)({},n),e.ratio=i,e.equalDelta=s;var u=e.linkedEdges={top:r.top||r.left&&!r.bottom,left:r.left||r.top&&!r.right,bottom:r.bottom||r.right&&!r.top,right:r.right||r.bottom&&!r.left};if(e.xIsPrimaryAxis=!(!r.left&&!r.right),e.equalDelta)e.edgeSign=(u.left?1:-1)*(u.top?1:-1);else{var c=e.xIsPrimaryAxis?u.top:u.left;e.edgeSign=c?-1:1}if((0,k.default)(t.edges,u),l&&l.length){var f=new Oe.default(t.interaction);f.copyFrom(t.interaction.modification),f.prepareStates(l),e.subModification=f,f.startAll(Mr({},t))}},set:function(t){var e=t.state,n=t.rect,r=t.coords,o=(0,k.default)({},r),i=e.equalDelta?Ir:Dr;if(i(e,e.xIsPrimaryAxis,r,n),!e.subModification)return null;var a=(0,k.default)({},n);(0,I.addEdges)(e.linkedEdges,a,{x:r.x-o.x,y:r.y-o.y});var s=e.subModification.setAll(Mr(Mr({},t),{},{rect:a,edges:e.linkedEdges,pageCoords:r,prevCoords:r,prevRect:a})),l=s.delta;s.changed&&(i(e,Math.abs(l.x)>Math.abs(l.y),s.coords,s.rect),(0,k.default)(r,s.coords));return s.eventProps},defaults:{ratio:"preserve",equalDelta:!1,modifiers:[],enabled:!1}};function Ir(t,e,n){var r=t.startCoords,o=t.edgeSign;e?n.y=r.y+(n.x-r.x)*o:n.x=r.x+(n.y-r.y)*o}function Dr(t,e,n,r){var o=t.startRect,i=t.startCoords,a=t.ratio,s=t.edgeSign;if(e){var l=r.width/a;n.y=i.y+(l-o.height)*s}else{var u=r.height*a;n.x=i.x+(u-o.width)*s}}Er.aspectRatio=kr;var Ar=(0,De.makeModifier)(kr,"aspectRatio");Er.default=Ar;var zr={};Object.defineProperty(zr,"__esModule",{value:!0}),zr.default=void 0;var Cr=function(){};Cr._defaults={};var Rr=Cr;zr.default=Rr;var Fr={};Object.defineProperty(Fr,"__esModule",{value:!0}),Object.defineProperty(Fr,"default",{enumerable:!0,get:function(){return zr.default}});var Xr={};function Yr(t,e,n){return a.default.func(t)?I.resolveRectLike(t,e.interactable,e.element,[n.x,n.y,e]):I.resolveRectLike(t,e.interactable,e.element)}Object.defineProperty(Xr,"__esModule",{value:!0}),Xr.getRestrictionRect=Yr,Xr.restrict=Xr.default=void 0;var Wr={start:function(t){var e=t.rect,n=t.startOffset,r=t.state,o=t.interaction,i=t.pageCoords,a=r.options,s=a.elementRect,l=(0,k.default)({left:0,top:0,right:0,bottom:0},a.offset||{});if(e&&s){var u=Yr(a.restriction,o,i);if(u){var c=u.right-u.left-e.width,f=u.bottom-u.top-e.height;c<0&&(l.left+=c,l.right+=c),f<0&&(l.top+=f,l.bottom+=f)}l.left+=n.left-e.width*s.left,l.top+=n.top-e.height*s.top,l.right+=n.right-e.width*(1-s.right),l.bottom+=n.bottom-e.height*(1-s.bottom)}r.offset=l},set:function(t){var e=t.coords,n=t.interaction,r=t.state,o=r.options,i=r.offset,a=Yr(o.restriction,n,e);if(a){var s=I.xywhToTlbr(a);e.x=Math.max(Math.min(s.right-i.right,e.x),s.left+i.left),e.y=Math.max(Math.min(s.bottom-i.bottom,e.y),s.top+i.top)}},defaults:{restriction:null,elementRect:null,offset:null,endOnly:!1,enabled:!1}};Xr.restrict=Wr;var Lr=(0,De.makeModifier)(Wr,"restrict");Xr.default=Lr;var Br={};Object.defineProperty(Br,"__esModule",{value:!0}),Br.restrictEdges=Br.default=void 0;var Ur={top:1/0,left:1/0,bottom:-1/0,right:-1/0},Vr={top:-1/0,left:-1/0,bottom:1/0,right:1/0};function qr(t,e){for(var n=["top","left","bottom","right"],r=0;r<n.length;r++){var o=n[r];o in t||(t[o]=e[o])}return t}var Nr={noInner:Ur,noOuter:Vr,start:function(t){var e,n=t.interaction,r=t.startOffset,o=t.state,i=o.options;if(i){var a=(0,Xr.getRestrictionRect)(i.offset,n,n.coords.start.page);e=I.rectToXY(a)}e=e||{x:0,y:0},o.offset={top:e.y+r.top,left:e.x+r.left,bottom:e.y-r.bottom,right:e.x-r.right}},set:function(t){var e=t.coords,n=t.edges,r=t.interaction,o=t.state,i=o.offset,a=o.options;if(n){var s=(0,k.default)({},e),l=(0,Xr.getRestrictionRect)(a.inner,r,s)||{},u=(0,Xr.getRestrictionRect)(a.outer,r,s)||{};qr(l,Ur),qr(u,Vr),n.top?e.y=Math.min(Math.max(u.top+i.top,s.y),l.top+i.top):n.bottom&&(e.y=Math.max(Math.min(u.bottom+i.bottom,s.y),l.bottom+i.bottom)),n.left?e.x=Math.min(Math.max(u.left+i.left,s.x),l.left+i.left):n.right&&(e.x=Math.max(Math.min(u.right+i.right,s.x),l.right+i.right))}},defaults:{inner:null,outer:null,offset:null,endOnly:!1,enabled:!1}};Br.restrictEdges=Nr;var $r=(0,De.makeModifier)(Nr,"restrictEdges");Br.default=$r;var Gr={};Object.defineProperty(Gr,"__esModule",{value:!0}),Gr.restrictRect=Gr.default=void 0;var Hr=(0,k.default)({get elementRect(){return{top:0,left:0,bottom:1,right:1}},set elementRect(t){}},Xr.restrict.defaults),Kr={start:Xr.restrict.start,set:Xr.restrict.set,defaults:Hr};Gr.restrictRect=Kr;var Zr=(0,De.makeModifier)(Kr,"restrictRect");Gr.default=Zr;var Jr={};Object.defineProperty(Jr,"__esModule",{value:!0}),Jr.restrictSize=Jr.default=void 0;var Qr={width:-1/0,height:-1/0},to={width:1/0,height:1/0};var eo={start:function(t){return Br.restrictEdges.start(t)},set:function(t){var e=t.interaction,n=t.state,r=t.rect,o=t.edges,i=n.options;if(o){var a=I.tlbrToXywh((0,Xr.getRestrictionRect)(i.min,e,t.coords))||Qr,s=I.tlbrToXywh((0,Xr.getRestrictionRect)(i.max,e,t.coords))||to;n.options={endOnly:i.endOnly,inner:(0,k.default)({},Br.restrictEdges.noInner),outer:(0,k.default)({},Br.restrictEdges.noOuter)},o.top?(n.options.inner.top=r.bottom-a.height,n.options.outer.top=r.bottom-s.height):o.bottom&&(n.options.inner.bottom=r.top+a.height,n.options.outer.bottom=r.top+s.height),o.left?(n.options.inner.left=r.right-a.width,n.options.outer.left=r.right-s.width):o.right&&(n.options.inner.right=r.left+a.width,n.options.outer.right=r.left+s.width),Br.restrictEdges.set(t),n.options=i}},defaults:{min:null,max:null,endOnly:!1,enabled:!1}};Jr.restrictSize=eo;var no=(0,De.makeModifier)(eo,"restrictSize");Jr.default=no;var ro={};Object.defineProperty(ro,"__esModule",{value:!0}),Object.defineProperty(ro,"default",{enumerable:!0,get:function(){return zr.default}});var oo={};Object.defineProperty(oo,"__esModule",{value:!0}),oo.snap=oo.default=void 0;var io={start:function(t){var e,n=t.interaction,r=t.interactable,o=t.element,i=t.rect,a=t.state,s=t.startOffset,l=a.options,u=l.offsetWithOrigin?function(t){var e=t.interaction.element;return(0,I.rectToXY)((0,I.resolveRectLike)(t.state.options.origin,null,null,[e]))||(0,z.default)(t.interactable,e,t.interaction.prepared.name)}(t):{x:0,y:0};if("startCoords"===l.offset)e={x:n.coords.start.page.x,y:n.coords.start.page.y};else{var c=(0,I.resolveRectLike)(l.offset,r,o,[n]);(e=(0,I.rectToXY)(c)||{x:0,y:0}).x+=u.x,e.y+=u.y}var f=l.relativePoints;a.offsets=i&&f&&f.length?f.map((function(t,n){return{index:n,relativePoint:t,x:s.left-i.width*t.x+e.x,y:s.top-i.height*t.y+e.y}})):[(0,k.default)({index:0,relativePoint:null},e)]},set:function(t){var e=t.interaction,n=t.coords,r=t.state,o=r.options,i=r.offsets,s=(0,z.default)(e.interactable,e.element,e.prepared.name),l=(0,k.default)({},n),u=[];o.offsetWithOrigin||(l.x-=s.x,l.y-=s.y);for(var c=0;c<i.length;c++)for(var f=i[c],d=l.x-f.x,p=l.y-f.y,v=0,h=o.targets.length;v<h;v++){var g=o.targets[v],y=void 0;(y=a.default.func(g)?g(d,p,e._proxy,f,v):g)&&u.push({x:(a.default.number(y.x)?y.x:d)+f.x,y:(a.default.number(y.y)?y.y:p)+f.y,range:a.default.number(y.range)?y.range:o.range,source:g,index:v,offset:f})}for(var m={target:null,inRange:!1,distance:0,range:0,delta:{x:0,y:0}},b=0;b<u.length;b++){var x=u[b],w=x.range,_=x.x-l.x,S=x.y-l.y,P=(0,F.default)(_,S),O=P<=w;w===1/0&&m.inRange&&m.range!==1/0&&(O=!1),m.target&&!(O?m.inRange&&w!==1/0?P/w<m.distance/m.range:w===1/0&&m.range!==1/0||P<m.distance:!m.inRange&&P<m.distance)||(m.target=x,m.distance=P,m.range=w,m.inRange=O,m.delta.x=_,m.delta.y=S)}return m.inRange&&(n.x=m.target.x,n.y=m.target.y),r.closest=m,m},defaults:{range:1/0,targets:null,offset:null,offsetWithOrigin:!0,origin:null,relativePoints:null,endOnly:!1,enabled:!1}};oo.snap=io;var ao=(0,De.makeModifier)(io,"snap");oo.default=ao;var so={};function lo(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,s=t[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return uo(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return uo(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function uo(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}Object.defineProperty(so,"__esModule",{value:!0}),so.snapSize=so.default=void 0;var co={start:function(t){var e=t.state,n=t.edges,r=e.options;if(!n)return null;t.state={options:{targets:null,relativePoints:[{x:n.left?0:1,y:n.top?0:1}],offset:r.offset||"self",origin:{x:0,y:0},range:r.range}},e.targetFields=e.targetFields||[["width","height"],["x","y"]],oo.snap.start(t),e.offsets=t.state.offsets,t.state=e},set:function(t){var e=t.interaction,n=t.state,r=t.coords,o=n.options,i=n.offsets,s={x:r.x-i[0].x,y:r.y-i[0].y};n.options=(0,k.default)({},o),n.options.targets=[];for(var l=0;l<(o.targets||[]).length;l++){var u=(o.targets||[])[l],c=void 0;if(c=a.default.func(u)?u(s.x,s.y,e):u){for(var f=0;f<n.targetFields.length;f++){var d=lo(n.targetFields[f],2),p=d[0],v=d[1];if(p in c||v in c){c.x=c[p],c.y=c[v];break}}n.options.targets.push(c)}}var h=oo.snap.set(t);return n.options=o,h},defaults:{range:1/0,targets:null,offset:null,endOnly:!1,enabled:!1}};so.snapSize=co;var fo=(0,De.makeModifier)(co,"snapSize");so.default=fo;var po={};Object.defineProperty(po,"__esModule",{value:!0}),po.snapEdges=po.default=void 0;var vo={start:function(t){var e=t.edges;return e?(t.state.targetFields=t.state.targetFields||[[e.left?"left":"right",e.top?"top":"bottom"]],so.snapSize.start(t)):null},set:so.snapSize.set,defaults:(0,k.default)((0,Pe.default)(so.snapSize.defaults),{targets:null,range:null,offset:{x:0,y:0}})};po.snapEdges=vo;var ho=(0,De.makeModifier)(vo,"snapEdges");po.default=ho;var go={};Object.defineProperty(go,"__esModule",{value:!0}),Object.defineProperty(go,"default",{enumerable:!0,get:function(){return zr.default}});var yo={};Object.defineProperty(yo,"__esModule",{value:!0}),Object.defineProperty(yo,"default",{enumerable:!0,get:function(){return zr.default}});var mo={};Object.defineProperty(mo,"__esModule",{value:!0}),mo.default=void 0;var bo={aspectRatio:Er.default,restrictEdges:Br.default,restrict:Xr.default,restrictRect:Gr.default,restrictSize:Jr.default,snapEdges:po.default,snap:oo.default,snapSize:so.default,spring:go.default,avoid:Fr.default,transform:yo.default,rubberband:ro.default};mo.default=bo;var xo={};Object.defineProperty(xo,"__esModule",{value:!0}),xo.default=void 0;var wo={id:"modifiers",install:function(t){var e=t.interactStatic;for(var n in t.usePlugin(De.default),t.usePlugin(Pr.default),e.modifiers=mo.default,mo.default){var r=mo.default[n],o=r._defaults,i=r._methods;o._methods=i,t.defaults.perAction[n]=o}}};xo.default=wo;var _o={};Object.defineProperty(_o,"__esModule",{value:!0}),_o.default=void 0;_o.default={};var So={};function Po(t){return(Po="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Oo(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function Eo(t,e){return(Eo=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function To(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ko(t);if(e){var o=ko(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return Mo(this,n)}}function Mo(t,e){return!e||"object"!==Po(e)&&"function"!=typeof e?jo(t):e}function jo(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ko(t){return(ko=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}Object.defineProperty(So,"__esModule",{value:!0}),So.PointerEvent=So.default=void 0;var Io=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Eo(t,e)}(i,t);var e,n,r,o=To(i);function i(t,e,n,r,a,s){var l;if(function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),(l=o.call(this,a)).type=void 0,l.originalEvent=void 0,l.pointerId=void 0,l.pointerType=void 0,l.double=void 0,l.pageX=void 0,l.pageY=void 0,l.clientX=void 0,l.clientY=void 0,l.dt=void 0,l.eventable=void 0,L.pointerExtend(jo(l),n),n!==e&&L.pointerExtend(jo(l),e),l.timeStamp=s,l.originalEvent=n,l.type=t,l.pointerId=L.getPointerId(e),l.pointerType=L.getPointerType(e),l.target=r,l.currentTarget=null,"tap"===t){var u=a.getPointerIndex(e);l.dt=l.timeStamp-a.pointers[u].downTime;var c=l.timeStamp-a.tapTime;l.double=!!(a.prevTap&&"doubletap"!==a.prevTap.type&&a.prevTap.target===l.target&&c<500)}else"doubletap"===t&&(l.dt=e.timeStamp-a.tapTime);return l}return e=i,(n=[{key:"_subtractOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX-=e,this.pageY-=n,this.clientX-=e,this.clientY-=n,this}},{key:"_addOrigin",value:function(t){var e=t.x,n=t.y;return this.pageX+=e,this.pageY+=n,this.clientX+=e,this.clientY+=n,this}},{key:"preventDefault",value:function(){this.originalEvent.preventDefault()}}])&&Oo(e.prototype,n),r&&Oo(e,r),i}(G.default);So.PointerEvent=So.default=Io;var Do={};Object.defineProperty(Do,"__esModule",{value:!0}),Do.default=void 0;var Ao={id:"pointer-events/base",before:["inertia","modifiers","auto-start","actions"],install:function(t){t.pointerEvents=Ao,t.defaults.actions.pointerEvents=Ao.defaults,(0,k.default)(t.actions.phaselessTypes,Ao.types)},listeners:{"interactions:new":function(t){var e=t.interaction;e.prevTap=null,e.tapTime=0},"interactions:update-pointer":function(t){var e=t.down,n=t.pointerInfo;if(!e&&n.hold)return;n.hold={duration:1/0,timeout:null}},"interactions:move":function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.duplicate,s=n.getPointerIndex(r);a||n.pointerIsDown&&!n.pointerWasMoved||(n.pointerIsDown&&clearTimeout(n.pointers[s].hold.timeout),zo({interaction:n,pointer:r,event:o,eventTarget:i,type:"move"},e))},"interactions:down":function(t,e){!function(t,e){for(var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.pointerIndex,s=n.pointers[a].hold,l=S.getPath(i),u={interaction:n,pointer:r,event:o,eventTarget:i,type:"hold",targets:[],path:l,node:null},c=0;c<l.length;c++){var f=l[c];u.node=f,e.fire("pointerEvents:collect-targets",u)}if(!u.targets.length)return;for(var d=1/0,p=0;p<u.targets.length;p++){var v=u.targets[p].eventable.options.holdDuration;v<d&&(d=v)}s.duration=d,s.timeout=setTimeout((function(){zo({interaction:n,eventTarget:i,pointer:r,event:o,type:"hold"},e)}),d)}(t,e),zo(t,e)},"interactions:up":function(t,e){Ro(t),zo(t,e),function(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget;n.pointerWasMoved||zo({interaction:n,eventTarget:i,pointer:r,event:o,type:"tap"},e)}(t,e)},"interactions:cancel":function(t,e){Ro(t),zo(t,e)}},PointerEvent:So.PointerEvent,fire:zo,collectEventTargets:Co,defaults:{holdDuration:600,ignoreFrom:null,allowFrom:null,origin:{x:0,y:0}},types:{down:!0,move:!0,up:!0,cancel:!0,tap:!0,doubletap:!0,hold:!0}};function zo(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=t.targets,l=void 0===s?Co(t,e):s,u=new So.PointerEvent(a,r,o,i,n,e.now());e.fire("pointerEvents:new",{pointerEvent:u});for(var c={interaction:n,pointer:r,event:o,eventTarget:i,targets:l,type:a,pointerEvent:u},f=0;f<l.length;f++){var d=l[f];for(var p in d.props||{})u[p]=d.props[p];var v=(0,z.default)(d.eventable,d.node);if(u._subtractOrigin(v),u.eventable=d.eventable,u.currentTarget=d.node,d.eventable.fire(u),u._addOrigin(v),u.immediatePropagationStopped||u.propagationStopped&&f+1<l.length&&l[f+1].node!==u.currentTarget)break}if(e.fire("pointerEvents:fired",c),"tap"===a){var h=u.double?zo({interaction:n,pointer:r,event:o,eventTarget:i,type:"doubletap"},e):u;n.prevTap=h,n.tapTime=h.timeStamp}return u}function Co(t,e){var n=t.interaction,r=t.pointer,o=t.event,i=t.eventTarget,a=t.type,s=n.getPointerIndex(r),l=n.pointers[s];if("tap"===a&&(n.pointerWasMoved||!l||l.downTarget!==i))return[];for(var u=S.getPath(i),c={interaction:n,pointer:r,event:o,eventTarget:i,type:a,path:u,targets:[],node:null},f=0;f<u.length;f++){var d=u[f];c.node=d,e.fire("pointerEvents:collect-targets",c)}return"hold"===a&&(c.targets=c.targets.filter((function(t){return t.eventable.options.holdDuration===n.pointers[s].hold.duration}))),c.targets}function Ro(t){var e=t.interaction,n=t.pointerIndex;e.pointers[n].hold&&clearTimeout(e.pointers[n].hold.timeout)}var Fo=Ao;Do.default=Fo;var Xo={};function Yo(t){var e=t.interaction;e.holdIntervalHandle&&(clearInterval(e.holdIntervalHandle),e.holdIntervalHandle=null)}Object.defineProperty(Xo,"__esModule",{value:!0}),Xo.default=void 0;var Wo={id:"pointer-events/holdRepeat",install:function(t){t.usePlugin(Do.default);var e=t.pointerEvents;e.defaults.holdRepeatInterval=0,e.types.holdrepeat=t.actions.phaselessTypes.holdrepeat=!0},listeners:["move","up","cancel","endall"].reduce((function(t,e){return t["pointerEvents:".concat(e)]=Yo,t}),{"pointerEvents:new":function(t){var e=t.pointerEvent;"hold"===e.type&&(e.count=(e.count||0)+1)},"pointerEvents:fired":function(t,e){var n=t.interaction,r=t.pointerEvent,o=t.eventTarget,i=t.targets;if("hold"===r.type&&i.length){var a=i[0].eventable.options.holdRepeatInterval;a<=0||(n.holdIntervalHandle=setTimeout((function(){e.pointerEvents.fire({interaction:n,eventTarget:o,type:"hold",pointer:r,event:r},e)}),a))}}})};Xo.default=Wo;var Lo={};function Bo(t){return(0,k.default)(this.events.options,t),this}Object.defineProperty(Lo,"__esModule",{value:!0}),Lo.default=void 0;var Uo={id:"pointer-events/interactableTargets",install:function(t){var e=t.Interactable;e.prototype.pointerEvents=Bo;var n=e.prototype._backCompatOption;e.prototype._backCompatOption=function(t,e){var r=n.call(this,t,e);return r===this&&(this.events.options[t]=e),r}},listeners:{"pointerEvents:collect-targets":function(t,e){var n=t.targets,r=t.node,o=t.type,i=t.eventTarget;e.interactables.forEachMatch(r,(function(t){var e=t.events,a=e.options;e.types[o]&&e.types[o].length&&t.testIgnoreAllow(a,r,i)&&n.push({node:r,eventable:e,props:{interactable:t}})}))},"interactable:new":function(t){var e=t.interactable;e.events.getRect=function(t){return e.getRect(t)}},"interactable:set":function(t,e){var n=t.interactable,r=t.options;(0,k.default)(n.events.options,e.pointerEvents.defaults),(0,k.default)(n.events.options,r.pointerEvents||{})}}};Lo.default=Uo;var Vo={};Object.defineProperty(Vo,"__esModule",{value:!0}),Object.defineProperty(Vo,"holdRepeat",{enumerable:!0,get:function(){return Xo.default}}),Object.defineProperty(Vo,"interactableTargets",{enumerable:!0,get:function(){return Lo.default}}),Vo.pointerEvents=Vo.default=void 0,Vo.pointerEvents=Do;var qo={id:"pointer-events",install:function(t){t.usePlugin(Do),t.usePlugin(Xo.default),t.usePlugin(Lo.default)}};Vo.default=qo;var No={};Object.defineProperty(No,"__esModule",{value:!0}),No.default=void 0;No.default={};var $o={};function Go(t){var e=t.Interactable;t.actions.phases.reflow=!0,e.prototype.reflow=function(e){return function(t,e,n){for(var r=a.default.string(t.target)?J.from(t._context.querySelectorAll(t.target)):[t.target],o=n.window.Promise,i=o?[]:null,s=function(){var a=r[l],s=t.getRect(a);if(!s)return"break";var u=J.find(n.interactions.list,(function(n){return n.interacting()&&n.interactable===t&&n.element===a&&n.prepared.name===e.name})),c=void 0;if(u)u.move(),i&&(c=u._reflowPromise||new o((function(t){u._reflowResolve=t})));else{var f=(0,I.tlbrToXywh)(s),d={page:{x:f.x,y:f.y},client:{x:f.x,y:f.y},timeStamp:n.now()},p=L.coordsToEvent(d);c=function(t,e,n,r,o){var i=t.interactions.new({pointerType:"reflow"}),a={interaction:i,event:o,pointer:o,eventTarget:n,phase:"reflow"};i.interactable=e,i.element=n,i.prepared=(0,k.default)({},r),i.prevEvent=o,i.updatePointer(o,o,n,!0),i._doPhase(a);var s=t.window.Promise,l=s?new s((function(t){i._reflowResolve=t})):null;i._reflowPromise=l,i.start(r,e,n),i._interacting?(i.move(a),i.end(o)):i.stop();return i.removePointer(o,o),i.pointerIsDown=!1,l}(n,t,a,e,p)}i&&i.push(c)},l=0;l<r.length;l++){if("break"===s())break}return i&&o.all(i).then((function(){return t}))}(this,e,t)}}Object.defineProperty($o,"__esModule",{value:!0}),$o.install=Go,$o.default=void 0;var Ho={id:"reflow",install:Go,listeners:{"interactions:stop":function(t,e){var n=t.interaction;"reflow"===n.pointerType&&(n._reflowResolve&&n._reflowResolve(),J.remove(e.interactions.list,n))}}};$o.default=Ho;var Ko={};Object.defineProperty(Ko,"__esModule",{value:!0}),Ko.default=void 0;Ko.default={};var Zo={};Object.defineProperty(Zo,"__esModule",{value:!0}),Zo.exchange=void 0;Zo.exchange={};var Jo={};Object.defineProperty(Jo,"__esModule",{value:!0}),Jo.default=void 0;Jo.default={};var Qo={exports:{}};function ti(t){return(ti="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(Qo.exports,"__esModule",{value:!0}),Qo.exports.default=void 0,pr.default.use(_o.default),pr.default.use(ue.default),pr.default.use(tn.default),pr.default.use(le.default),pr.default.use(jt.default),pr.default.use(Vo.default),pr.default.use(ln.default),pr.default.use(xo.default),pr.default.use(ae.default),pr.default.use(Tt.default),pr.default.use(Ct.default),pr.default.use($o.default),pr.default.use(Se.default),pr.default.use(Jo.default),pr.default.use(No.default),pr.default.__utils={exchange:Zo.exchange,displace:Ko,pointer:L},pr.default.use(he.default);var ei=pr.default;if(Qo.exports.default=ei,"object"===ti(Qo)&&Qo)try{Qo.exports=pr.default}catch(t){}pr.default.default=pr.default,Qo=Qo.exports;var ni={exports:{}};function ri(t){return(ri="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(ni.exports,"__esModule",{value:!0}),ni.exports.default=void 0;var oi=Qo.default;if(ni.exports.default=oi,"object"===ri(ni)&&ni)try{ni.exports=Qo.default}catch(t){}return Qo.default.default=Qo.default,ni=ni.exports}));
//# sourceMappingURL=interact.min.js.map


/***/ }),

/***/ "../node_modules/lodash.isequal/index.js":
/*!***********************************************!*\
  !*** ../node_modules/lodash.isequal/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "../node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../webpack/buildin/module.js */ "../node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ "../node_modules/prop-types/checkPropTypes.js":
/*!****************************************************!*\
  !*** ../node_modules/prop-types/checkPropTypes.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "../node_modules/prop-types/factoryWithTypeCheckers.js":
/*!*************************************************************!*\
  !*** ../node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "../node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "../node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "../node_modules/prop-types/index.js":
/*!*******************************************!*\
  !*** ../node_modules/prop-types/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "../node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "../node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "../node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!**************************************************************!*\
  !*** ../node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/Timeline.css":
/*!****************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/Timeline.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../css-loader/dist/cjs.js??ref--8-1!../../postcss-loader/src??ref--8-2!../../sass-loader/lib/loader.js!./Timeline.css */ "../node_modules/css-loader/dist/cjs.js?!../node_modules/postcss-loader/src/index.js?!../node_modules/sass-loader/lib/loader.js!../node_modules/react-calendar-timeline/lib/Timeline.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../style-loader/lib/addStyles.js */ "../node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/index.js":
/*!************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "TimelineMarkers", {
  enumerable: true,
  get: function get() {
    return _TimelineMarkers["default"];
  }
});
Object.defineProperty(exports, "TodayMarker", {
  enumerable: true,
  get: function get() {
    return _TodayMarker["default"];
  }
});
Object.defineProperty(exports, "CustomMarker", {
  enumerable: true,
  get: function get() {
    return _CustomMarker["default"];
  }
});
Object.defineProperty(exports, "CursorMarker", {
  enumerable: true,
  get: function get() {
    return _CursorMarker["default"];
  }
});
Object.defineProperty(exports, "TimelineHeaders", {
  enumerable: true,
  get: function get() {
    return _TimelineHeaders["default"];
  }
});
Object.defineProperty(exports, "SidebarHeader", {
  enumerable: true,
  get: function get() {
    return _SidebarHeader["default"];
  }
});
Object.defineProperty(exports, "CustomHeader", {
  enumerable: true,
  get: function get() {
    return _CustomHeader["default"];
  }
});
Object.defineProperty(exports, "DateHeader", {
  enumerable: true,
  get: function get() {
    return _DateHeader["default"];
  }
});
exports["default"] = void 0;

var _Timeline = _interopRequireDefault(__webpack_require__(/*! ./lib/Timeline */ "../node_modules/react-calendar-timeline/lib/lib/Timeline.js"));

var _TimelineMarkers = _interopRequireDefault(__webpack_require__(/*! ./lib/markers/public/TimelineMarkers */ "../node_modules/react-calendar-timeline/lib/lib/markers/public/TimelineMarkers.js"));

var _TodayMarker = _interopRequireDefault(__webpack_require__(/*! ./lib/markers/public/TodayMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/public/TodayMarker.js"));

var _CustomMarker = _interopRequireDefault(__webpack_require__(/*! ./lib/markers/public/CustomMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/public/CustomMarker.js"));

var _CursorMarker = _interopRequireDefault(__webpack_require__(/*! ./lib/markers/public/CursorMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/public/CursorMarker.js"));

var _TimelineHeaders = _interopRequireDefault(__webpack_require__(/*! ./lib/headers/TimelineHeaders */ "../node_modules/react-calendar-timeline/lib/lib/headers/TimelineHeaders.js"));

var _SidebarHeader = _interopRequireDefault(__webpack_require__(/*! ./lib/headers/SidebarHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/SidebarHeader.js"));

var _CustomHeader = _interopRequireDefault(__webpack_require__(/*! ./lib/headers/CustomHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/CustomHeader.js"));

var _DateHeader = _interopRequireDefault(__webpack_require__(/*! ./lib/headers/DateHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/DateHeader.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _Timeline["default"];
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/Timeline.js":
/*!*******************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/Timeline.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _Items = _interopRequireDefault(__webpack_require__(/*! ./items/Items */ "../node_modules/react-calendar-timeline/lib/lib/items/Items.js"));

var _Sidebar = _interopRequireDefault(__webpack_require__(/*! ./layout/Sidebar */ "../node_modules/react-calendar-timeline/lib/lib/layout/Sidebar.js"));

var _Columns = _interopRequireDefault(__webpack_require__(/*! ./columns/Columns */ "../node_modules/react-calendar-timeline/lib/lib/columns/Columns.js"));

var _GroupRows = _interopRequireDefault(__webpack_require__(/*! ./row/GroupRows */ "../node_modules/react-calendar-timeline/lib/lib/row/GroupRows.js"));

var _ScrollElement = _interopRequireDefault(__webpack_require__(/*! ./scroll/ScrollElement */ "../node_modules/react-calendar-timeline/lib/lib/scroll/ScrollElement.js"));

var _MarkerCanvas = _interopRequireDefault(__webpack_require__(/*! ./markers/MarkerCanvas */ "../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvas.js"));

var _window = _interopRequireDefault(__webpack_require__(/*! ../resize-detector/window */ "../node_modules/react-calendar-timeline/lib/resize-detector/window.js"));

var _calendar = __webpack_require__(/*! ./utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

var _generic = __webpack_require__(/*! ./utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

var _defaultConfig = __webpack_require__(/*! ./default-config */ "../node_modules/react-calendar-timeline/lib/lib/default-config.js");

var _TimelineStateContext = __webpack_require__(/*! ./timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

var _TimelineMarkersContext = __webpack_require__(/*! ./markers/TimelineMarkersContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js");

var _HeadersContext = __webpack_require__(/*! ./headers/HeadersContext */ "../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js");

var _TimelineHeaders = _interopRequireDefault(__webpack_require__(/*! ./headers/TimelineHeaders */ "../node_modules/react-calendar-timeline/lib/lib/headers/TimelineHeaders.js"));

var _DateHeader = _interopRequireDefault(__webpack_require__(/*! ./headers/DateHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/DateHeader.js"));

var _SidebarHeader = _interopRequireDefault(__webpack_require__(/*! ./headers/SidebarHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/SidebarHeader.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ReactCalendarTimeline =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactCalendarTimeline, _Component);

  _createClass(ReactCalendarTimeline, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _this2 = this;

      return {
        getTimelineContext: function getTimelineContext() {
          return _this2.getTimelineContext();
        }
      };
    }
  }]);

  function ReactCalendarTimeline(_props) {
    var _this;

    _classCallCheck(this, ReactCalendarTimeline);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReactCalendarTimeline).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getTimelineContext", function () {
      var _this$state = _this.state,
          width = _this$state.width,
          visibleTimeStart = _this$state.visibleTimeStart,
          visibleTimeEnd = _this$state.visibleTimeEnd,
          canvasTimeStart = _this$state.canvasTimeStart,
          canvasTimeEnd = _this$state.canvasTimeEnd;
      return {
        timelineWidth: width,
        visibleTimeStart: visibleTimeStart,
        visibleTimeEnd: visibleTimeEnd,
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd
      };
    });

    _defineProperty(_assertThisInitialized(_this), "resize", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.props;

      var _this$container$getBo = _this.container.getBoundingClientRect(),
          containerWidth = _this$container$getBo.width;

      var width = containerWidth - props.sidebarWidth - props.rightSidebarWidth;
      var canvasWidth = (0, _calendar.getCanvasWidth)(width);

      var _stackTimelineItems = (0, _calendar.stackTimelineItems)(props.items, props.groups, canvasWidth, _this.state.canvasTimeStart, _this.state.canvasTimeEnd, props.keys, props.lineHeight, props.itemHeightRatio, props.stackItems, _this.state.draggingItem, _this.state.resizingItem, _this.state.dragTime, _this.state.resizingEdge, _this.state.resizeTime, _this.state.newGroupOrder),
          dimensionItems = _stackTimelineItems.dimensionItems,
          height = _stackTimelineItems.height,
          groupHeights = _stackTimelineItems.groupHeights,
          groupTops = _stackTimelineItems.groupTops; // this is needed by dragItem since it uses pageY from the drag events
      // if this was in the context of the scrollElement, this would not be necessary


      _this.setState({
        width: width,
        dimensionItems: dimensionItems,
        height: height,
        groupHeights: groupHeights,
        groupTops: groupTops
      });

      _this.scrollComponent.scrollLeft = width;
      _this.scrollHeaderRef.scrollLeft = width;
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function (scrollX) {
      var width = _this.state.width;
      var canvasTimeStart = _this.state.canvasTimeStart;
      var zoom = _this.state.visibleTimeEnd - _this.state.visibleTimeStart;
      var visibleTimeStart = canvasTimeStart + zoom * scrollX / width;

      if (_this.state.visibleTimeStart !== visibleTimeStart || _this.state.visibleTimeEnd !== visibleTimeStart + zoom) {
        _this.props.onTimeChange(visibleTimeStart, visibleTimeStart + zoom, _this.updateScrollCanvas);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateScrollCanvas", function (visibleTimeStart, visibleTimeEnd, forceUpdateDimensions) {
      var items = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _this.props.items;
      var groups = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : _this.props.groups;

      _this.setState((0, _calendar.calculateScrollCanvas)(visibleTimeStart, visibleTimeEnd, forceUpdateDimensions, items, groups, _this.props, _this.state));
    });

    _defineProperty(_assertThisInitialized(_this), "handleWheelZoom", function (speed, xPosition, deltaY) {
      _this.changeZoom(1.0 + speed * deltaY / 500, xPosition / _this.state.width);
    });

    _defineProperty(_assertThisInitialized(_this), "changeZoom", function (scale) {
      var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
      var _this$props = _this.props,
          minZoom = _this$props.minZoom,
          maxZoom = _this$props.maxZoom;
      var oldZoom = _this.state.visibleTimeEnd - _this.state.visibleTimeStart;
      var newZoom = Math.min(Math.max(Math.round(oldZoom * scale), minZoom), maxZoom); // min 1 min, max 20 years

      var newVisibleTimeStart = Math.round(_this.state.visibleTimeStart + (oldZoom - newZoom) * offset);

      _this.props.onTimeChange(newVisibleTimeStart, newVisibleTimeStart + newZoom, _this.updateScrollCanvas);
    });

    _defineProperty(_assertThisInitialized(_this), "showPeriod", function (from, to) {
      var visibleTimeStart = from.valueOf();
      var visibleTimeEnd = to.valueOf();
      var zoom = visibleTimeEnd - visibleTimeStart; // can't zoom in more than to show one hour

      if (zoom < 360000) {
        return;
      }

      _this.props.onTimeChange(visibleTimeStart, visibleTimeStart + zoom, _this.updateScrollCanvas);
    });

    _defineProperty(_assertThisInitialized(_this), "selectItem", function (item, clickType, e) {
      if (_this.isItemSelected(item) || _this.props.itemTouchSendsClick && clickType === 'touch') {
        if (item && _this.props.onItemClick) {
          var time = _this.timeFromItemEvent(e);

          _this.props.onItemClick(item, e, time);
        }
      } else {
        _this.setState({
          selectedItem: item
        });

        if (item && _this.props.onItemSelect) {
          var _time = _this.timeFromItemEvent(e);

          _this.props.onItemSelect(item, e, _time);
        } else if (item === null && _this.props.onItemDeselect) {
          _this.props.onItemDeselect(e); // this isnt in the docs. Is this function even used?

        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "doubleClickItem", function (item, e) {
      if (_this.props.onItemDoubleClick) {
        var time = _this.timeFromItemEvent(e);

        _this.props.onItemDoubleClick(item, e, time);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "contextMenuClickItem", function (item, e) {
      if (_this.props.onItemContextMenu) {
        var time = _this.timeFromItemEvent(e);

        _this.props.onItemContextMenu(item, e, time);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTimeFromRowClickEvent", function (e) {
      var dragSnap = _this.props.dragSnap;
      var _this$state2 = _this.state,
          width = _this$state2.width,
          canvasTimeStart = _this$state2.canvasTimeStart,
          canvasTimeEnd = _this$state2.canvasTimeEnd; // this gives us distance from left of row element, so event is in
      // context of the row element, not client or page

      var offsetX = e.nativeEvent.offsetX;
      var time = (0, _calendar.calculateTimeForXPosition)(canvasTimeStart, canvasTimeEnd, (0, _calendar.getCanvasWidth)(width), offsetX);
      time = Math.floor(time / dragSnap) * dragSnap;
      return time;
    });

    _defineProperty(_assertThisInitialized(_this), "timeFromItemEvent", function (e) {
      var _this$state3 = _this.state,
          width = _this$state3.width,
          visibleTimeStart = _this$state3.visibleTimeStart,
          visibleTimeEnd = _this$state3.visibleTimeEnd;
      var dragSnap = _this.props.dragSnap;
      var scrollComponent = _this.scrollComponent;

      var _scrollComponent$getB = scrollComponent.getBoundingClientRect(),
          scrollX = _scrollComponent$getB.left;

      var xRelativeToTimeline = e.clientX - scrollX;
      var relativeItemPosition = xRelativeToTimeline / width;
      var zoom = visibleTimeEnd - visibleTimeStart;
      var timeOffset = relativeItemPosition * zoom;
      var time = Math.round(visibleTimeStart + timeOffset);
      time = Math.floor(time / dragSnap) * dragSnap;
      return time;
    });

    _defineProperty(_assertThisInitialized(_this), "dragItem", function (item, dragTime, newGroupOrder) {
      var newGroup = _this.props.groups[newGroupOrder];
      var keys = _this.props.keys;

      _this.setState({
        draggingItem: item,
        dragTime: dragTime,
        newGroupOrder: newGroupOrder,
        dragGroupTitle: newGroup ? (0, _generic._get)(newGroup, keys.groupLabelKey) : ''
      });

      _this.updatingItem({
        eventType: 'move',
        itemId: item,
        time: dragTime,
        newGroupOrder: newGroupOrder
      });
    });

    _defineProperty(_assertThisInitialized(_this), "dropItem", function (item, dragTime, newGroupOrder) {
      _this.setState({
        draggingItem: null,
        dragTime: null,
        dragGroupTitle: null
      });

      if (_this.props.onItemMove) {
        _this.props.onItemMove(item, dragTime, newGroupOrder);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "resizingItem", function (item, resizeTime, edge) {
      _this.setState({
        resizingItem: item,
        resizingEdge: edge,
        resizeTime: resizeTime
      });

      _this.updatingItem({
        eventType: 'resize',
        itemId: item,
        time: resizeTime,
        edge: edge
      });
    });

    _defineProperty(_assertThisInitialized(_this), "resizedItem", function (item, resizeTime, edge, timeDelta) {
      _this.setState({
        resizingItem: null,
        resizingEdge: null,
        resizeTime: null
      });

      if (_this.props.onItemResize && timeDelta !== 0) {
        _this.props.onItemResize(item, resizeTime, edge);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updatingItem", function (_ref) {
      var eventType = _ref.eventType,
          itemId = _ref.itemId,
          time = _ref.time,
          edge = _ref.edge,
          newGroupOrder = _ref.newGroupOrder;

      if (_this.props.onItemDrag) {
        _this.props.onItemDrag({
          eventType: eventType,
          itemId: itemId,
          time: time,
          edge: edge,
          newGroupOrder: newGroupOrder
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowClick", function (e, rowIndex) {
      // shouldnt this be handled by the user, as far as when to deselect an item?
      if (_this.hasSelectedItem()) {
        _this.selectItem(null);
      }

      if (_this.props.onCanvasClick == null) return;

      var time = _this.getTimeFromRowClickEvent(e);

      var groupId = (0, _generic._get)(_this.props.groups[rowIndex], _this.props.keys.groupIdKey);

      _this.props.onCanvasClick(groupId, time, e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleRowDoubleClick", function (e, rowIndex) {
      if (_this.props.onCanvasDoubleClick == null) return;

      var time = _this.getTimeFromRowClickEvent(e);

      var groupId = (0, _generic._get)(_this.props.groups[rowIndex], _this.props.keys.groupIdKey);

      _this.props.onCanvasDoubleClick(groupId, time, e);
    });

    _defineProperty(_assertThisInitialized(_this), "handleScrollContextMenu", function (e, rowIndex) {
      if (_this.props.onCanvasContextMenu == null) return;

      var timePosition = _this.getTimeFromRowClickEvent(e);

      var groupId = (0, _generic._get)(_this.props.groups[rowIndex], _this.props.keys.groupIdKey);

      if (_this.props.onCanvasContextMenu) {
        e.preventDefault();

        _this.props.onCanvasContextMenu(groupId, timePosition, e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleHeaderRef", function (el) {
      _this.scrollHeaderRef = el;

      _this.props.headerRef(el);
    });

    _defineProperty(_assertThisInitialized(_this), "isTimelineHeader", function (child) {
      if (child.type === undefined) return false;
      return child.type.secretKey === _TimelineHeaders["default"].secretKey;
    });

    _defineProperty(_assertThisInitialized(_this), "renderHeaders", function () {
      if (_this.props.children) {
        var headerRenderer;

        _react["default"].Children.map(_this.props.children, function (child) {
          if (_this.isTimelineHeader(child)) {
            headerRenderer = child;
          }
        });

        if (headerRenderer) {
          return headerRenderer;
        }
      }

      return _react["default"].createElement(_TimelineHeaders["default"], null, _react["default"].createElement(_DateHeader["default"], {
        unit: "primaryHeader"
      }), _react["default"].createElement(_DateHeader["default"], null));
    });

    _defineProperty(_assertThisInitialized(_this), "getScrollElementRef", function (el) {
      _this.props.scrollRef(el);

      _this.scrollComponent = el;
    });

    _this.getSelected = _this.getSelected.bind(_assertThisInitialized(_this));
    _this.hasSelectedItem = _this.hasSelectedItem.bind(_assertThisInitialized(_this));
    _this.isItemSelected = _this.isItemSelected.bind(_assertThisInitialized(_this));
    var _visibleTimeStart = null;
    var _visibleTimeEnd = null;

    if (_this.props.defaultTimeStart && _this.props.defaultTimeEnd) {
      _visibleTimeStart = _this.props.defaultTimeStart.valueOf();
      _visibleTimeEnd = _this.props.defaultTimeEnd.valueOf();
    } else if (_this.props.visibleTimeStart && _this.props.visibleTimeEnd) {
      _visibleTimeStart = _this.props.visibleTimeStart;
      _visibleTimeEnd = _this.props.visibleTimeEnd;
    } else {
      //throwing an error because neither default or visible time props provided
      throw new Error('You must provide either "defaultTimeStart" and "defaultTimeEnd" or "visibleTimeStart" and "visibleTimeEnd" to initialize the Timeline');
    }

    var _getCanvasBoundariesF = (0, _calendar.getCanvasBoundariesFromVisibleTime)(_visibleTimeStart, _visibleTimeEnd),
        _getCanvasBoundariesF2 = _slicedToArray(_getCanvasBoundariesF, 2),
        _canvasTimeStart = _getCanvasBoundariesF2[0],
        _canvasTimeEnd = _getCanvasBoundariesF2[1];

    _this.state = {
      width: 1000,
      visibleTimeStart: _visibleTimeStart,
      visibleTimeEnd: _visibleTimeEnd,
      canvasTimeStart: _canvasTimeStart,
      canvasTimeEnd: _canvasTimeEnd,
      selectedItem: null,
      dragTime: null,
      dragGroupTitle: null,
      resizeTime: null,
      resizingItem: null,
      resizingEdge: null
    };

    var _canvasWidth = (0, _calendar.getCanvasWidth)(_this.state.width);

    var _stackTimelineItems2 = (0, _calendar.stackTimelineItems)(_props.items, _props.groups, _canvasWidth, _this.state.canvasTimeStart, _this.state.canvasTimeEnd, _props.keys, _props.lineHeight, _props.itemHeightRatio, _props.stackItems, _this.state.draggingItem, _this.state.resizingItem, _this.state.dragTime, _this.state.resizingEdge, _this.state.resizeTime, _this.state.newGroupOrder),
        _dimensionItems = _stackTimelineItems2.dimensionItems,
        _height = _stackTimelineItems2.height,
        _groupHeights = _stackTimelineItems2.groupHeights,
        _groupTops = _stackTimelineItems2.groupTops;
    /* eslint-disable react/no-direct-mutation-state */


    _this.state.dimensionItems = _dimensionItems;
    _this.state.height = _height;
    _this.state.groupHeights = _groupHeights;
    _this.state.groupTops = _groupTops;
    /* eslint-enable */

    return _this;
  }

  _createClass(ReactCalendarTimeline, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resize(this.props);

      if (this.props.resizeDetector && this.props.resizeDetector.addListener) {
        this.props.resizeDetector.addListener(this);
      }

      _window["default"].addListener(this);

      this.lastTouchDistance = null;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.resizeDetector && this.props.resizeDetector.addListener) {
        this.props.resizeDetector.removeListener(this);
      }

      _window["default"].removeListener(this);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var newZoom = this.state.visibleTimeEnd - this.state.visibleTimeStart;
      var oldZoom = prevState.visibleTimeEnd - prevState.visibleTimeStart; // are we changing zoom? Report it!

      if (this.props.onZoom && newZoom !== oldZoom) {
        this.props.onZoom(this.getTimelineContext());
      } // The bounds have changed? Report it!


      if (this.props.onBoundsChange && this.state.canvasTimeStart !== prevState.canvasTimeStart) {
        this.props.onBoundsChange(this.state.canvasTimeStart, this.state.canvasTimeStart + newZoom * 3);
      } // Check the scroll is correct


      var scrollLeft = Math.round(this.state.width * (this.state.visibleTimeStart - this.state.canvasTimeStart) / newZoom);
      var componentScrollLeft = Math.round(prevState.width * (prevState.visibleTimeStart - prevState.canvasTimeStart) / oldZoom);

      if (componentScrollLeft !== scrollLeft) {
        this.scrollComponent.scrollLeft = scrollLeft;
        this.scrollHeaderRef.scrollLeft = scrollLeft;
      }
    }
  }, {
    key: "columns",
    value: function columns(canvasTimeStart, canvasTimeEnd, canvasWidth, minUnit, timeSteps, height) {
      return _react["default"].createElement(_Columns["default"], {
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd,
        canvasWidth: canvasWidth,
        lineCount: (0, _generic._length)(this.props.groups),
        minUnit: minUnit,
        timeSteps: timeSteps,
        height: height,
        verticalLineClassNamesForTime: this.props.verticalLineClassNamesForTime
      });
    }
  }, {
    key: "rows",
    value: function rows(canvasWidth, groupHeights, groups) {
      return _react["default"].createElement(_GroupRows["default"], {
        groups: groups,
        canvasWidth: canvasWidth,
        lineCount: (0, _generic._length)(this.props.groups),
        groupHeights: groupHeights,
        clickTolerance: this.props.clickTolerance,
        onRowClick: this.handleRowClick,
        onRowDoubleClick: this.handleRowDoubleClick,
        horizontalLineClassNamesForGroup: this.props.horizontalLineClassNamesForGroup,
        onRowContextClick: this.handleScrollContextMenu
      });
    }
  }, {
    key: "items",
    value: function items(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, dimensionItems, groupHeights, groupTops) {
      return _react["default"].createElement(_Items["default"], {
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd,
        canvasWidth: canvasWidth,
        dimensionItems: dimensionItems,
        groupTops: groupTops,
        items: this.props.items,
        groups: this.props.groups,
        keys: this.props.keys,
        selectedItem: this.state.selectedItem,
        dragSnap: this.props.dragSnap,
        minResizeWidth: this.props.minResizeWidth,
        canChangeGroup: this.props.canChangeGroup,
        canMove: this.props.canMove,
        canResize: this.props.canResize,
        useResizeHandle: this.props.useResizeHandle,
        canSelect: this.props.canSelect,
        moveResizeValidator: this.props.moveResizeValidator,
        itemSelect: this.selectItem,
        itemDrag: this.dragItem,
        itemDrop: this.dropItem,
        onItemDoubleClick: this.doubleClickItem,
        onItemContextMenu: this.contextMenuClickItem,
        itemResizing: this.resizingItem,
        itemResized: this.resizedItem,
        itemRenderer: this.props.itemRenderer,
        selected: this.props.selected,
        scrollRef: this.scrollComponent
      });
    }
  }, {
    key: "sidebar",
    value: function sidebar(height, groupHeights) {
      var sidebarWidth = this.props.sidebarWidth;
      return sidebarWidth && _react["default"].createElement(_Sidebar["default"], {
        groups: this.props.groups,
        groupRenderer: this.props.groupRenderer,
        keys: this.props.keys,
        width: sidebarWidth,
        groupHeights: groupHeights,
        height: height
      });
    }
  }, {
    key: "rightSidebar",
    value: function rightSidebar(height, groupHeights) {
      var rightSidebarWidth = this.props.rightSidebarWidth;
      return rightSidebarWidth && _react["default"].createElement(_Sidebar["default"], {
        groups: this.props.groups,
        keys: this.props.keys,
        groupRenderer: this.props.groupRenderer,
        isRightSidebar: true,
        width: rightSidebarWidth,
        groupHeights: groupHeights,
        height: height
      });
    }
    /**
     * check if child of type TimelineHeader
     * refer to for explanation https://github.com/gaearon/react-hot-loader#checking-element-types 
     */

  }, {
    key: "childrenWithProps",
    value: function childrenWithProps(canvasTimeStart, canvasTimeEnd, canvasWidth, dimensionItems, groupHeights, groupTops, height, visibleTimeStart, visibleTimeEnd, minUnit, timeSteps) {
      var _this3 = this;

      if (!this.props.children) {
        return null;
      } // convert to an array and remove the nulls


      var childArray = Array.isArray(this.props.children) ? this.props.children.filter(function (c) {
        return c;
      }) : [this.props.children];
      var childProps = {
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd,
        canvasWidth: canvasWidth,
        visibleTimeStart: visibleTimeStart,
        visibleTimeEnd: visibleTimeEnd,
        dimensionItems: dimensionItems,
        items: this.props.items,
        groups: this.props.groups,
        keys: this.props.keys,
        groupHeights: groupHeights,
        groupTops: groupTops,
        selected: this.getSelected(),
        height: height,
        minUnit: minUnit,
        timeSteps: timeSteps
      };
      return _react["default"].Children.map(childArray, function (child) {
        if (!_this3.isTimelineHeader(child)) {
          return _react["default"].cloneElement(child, childProps);
        } else {
          return null;
        }
      });
    }
  }, {
    key: "getSelected",
    value: function getSelected() {
      return this.state.selectedItem && !this.props.selected ? [this.state.selectedItem] : this.props.selected || [];
    }
  }, {
    key: "hasSelectedItem",
    value: function hasSelectedItem() {
      if (!Array.isArray(this.props.selected)) return !!this.state.selectedItem;
      return this.props.selected.length > 0;
    }
  }, {
    key: "isItemSelected",
    value: function isItemSelected(itemId) {
      var selectedItems = this.getSelected();
      return selectedItems.some(function (i) {
        return i === itemId;
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props2 = this.props,
          items = _this$props2.items,
          groups = _this$props2.groups,
          sidebarWidth = _this$props2.sidebarWidth,
          rightSidebarWidth = _this$props2.rightSidebarWidth,
          timeSteps = _this$props2.timeSteps,
          traditionalZoom = _this$props2.traditionalZoom;
      var _this$state4 = this.state,
          draggingItem = _this$state4.draggingItem,
          resizingItem = _this$state4.resizingItem,
          width = _this$state4.width,
          visibleTimeStart = _this$state4.visibleTimeStart,
          visibleTimeEnd = _this$state4.visibleTimeEnd,
          canvasTimeStart = _this$state4.canvasTimeStart,
          canvasTimeEnd = _this$state4.canvasTimeEnd;
      var _this$state5 = this.state,
          dimensionItems = _this$state5.dimensionItems,
          height = _this$state5.height,
          groupHeights = _this$state5.groupHeights,
          groupTops = _this$state5.groupTops;
      var zoom = visibleTimeEnd - visibleTimeStart;
      var canvasWidth = (0, _calendar.getCanvasWidth)(width);
      var minUnit = (0, _calendar.getMinUnit)(zoom, width, timeSteps);
      var isInteractingWithItem = !!draggingItem || !!resizingItem;

      if (isInteractingWithItem) {
        var stackResults = (0, _calendar.stackTimelineItems)(items, groups, canvasWidth, this.state.canvasTimeStart, this.state.canvasTimeEnd, this.props.keys, this.props.lineHeight, this.props.itemHeightRatio, this.props.stackItems, this.state.draggingItem, this.state.resizingItem, this.state.dragTime, this.state.resizingEdge, this.state.resizeTime, this.state.newGroupOrder);
        dimensionItems = stackResults.dimensionItems;
        height = stackResults.height;
        groupHeights = stackResults.groupHeights;
        groupTops = stackResults.groupTops;
      }

      var outerComponentStyle = {
        height: "".concat(height, "px")
      };
      return _react["default"].createElement(_TimelineStateContext.TimelineStateProvider, {
        visibleTimeStart: visibleTimeStart,
        visibleTimeEnd: visibleTimeEnd,
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd,
        canvasWidth: canvasWidth,
        showPeriod: this.showPeriod,
        timelineUnit: minUnit,
        timelineWidth: this.state.width
      }, _react["default"].createElement(_TimelineMarkersContext.TimelineMarkersProvider, null, _react["default"].createElement(_HeadersContext.TimelineHeadersProvider, {
        registerScroll: this.handleHeaderRef,
        timeSteps: timeSteps,
        leftSidebarWidth: this.props.sidebarWidth,
        rightSidebarWidth: this.props.rightSidebarWidth
      }, _react["default"].createElement("div", {
        style: this.props.style,
        ref: function ref(el) {
          return _this4.container = el;
        },
        className: "react-calendar-timeline ".concat(this.props.className)
      }, this.renderHeaders(), _react["default"].createElement("div", {
        style: outerComponentStyle,
        className: "rct-outer"
      }, sidebarWidth > 0 ? this.sidebar(height, groupHeights) : null, _react["default"].createElement(_ScrollElement["default"], {
        scrollRef: this.getScrollElementRef,
        width: width,
        height: height,
        onZoom: this.changeZoom,
        onWheelZoom: this.handleWheelZoom,
        traditionalZoom: traditionalZoom,
        onScroll: this.onScroll,
        isInteractingWithItem: isInteractingWithItem
      }, _react["default"].createElement(_MarkerCanvas["default"], null, this.columns(canvasTimeStart, canvasTimeEnd, canvasWidth, minUnit, timeSteps, height), this.rows(canvasWidth, groupHeights, groups), this.items(canvasTimeStart, zoom, canvasTimeEnd, canvasWidth, minUnit, dimensionItems, groupHeights, groupTops), this.childrenWithProps(canvasTimeStart, canvasTimeEnd, canvasWidth, dimensionItems, groupHeights, groupTops, height, visibleTimeStart, visibleTimeEnd, minUnit, timeSteps))), rightSidebarWidth > 0 ? this.rightSidebar(height, groupHeights) : null)))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var visibleTimeStart = nextProps.visibleTimeStart,
          visibleTimeEnd = nextProps.visibleTimeEnd,
          items = nextProps.items,
          groups = nextProps.groups; // This is a gross hack pushing items and groups in to state only to allow
      // For the forceUpdate check

      var derivedState = {
        items: items,
        groups: groups // if the items or groups have changed we must re-render

      };
      var forceUpdate = items !== prevState.items || groups !== prevState.groups; // We are a controlled component

      if (visibleTimeStart && visibleTimeEnd) {
        // Get the new canvas position
        Object.assign(derivedState, (0, _calendar.calculateScrollCanvas)(visibleTimeStart, visibleTimeEnd, forceUpdate, items, groups, nextProps, prevState));
      } else if (forceUpdate) {
        // Calculate new item stack position as canvas may have changed
        var canvasWidth = (0, _calendar.getCanvasWidth)(prevState.width);
        Object.assign(derivedState, (0, _calendar.stackTimelineItems)(items, groups, canvasWidth, prevState.canvasTimeStart, prevState.canvasTimeEnd, nextProps.keys, nextProps.lineHeight, nextProps.itemHeightRatio, nextProps.stackItems, prevState.draggingItem, prevState.resizingItem, prevState.dragTime, prevState.resizingEdge, prevState.resizeTime, prevState.newGroupOrder));
      }

      return derivedState;
    }
  }]);

  return ReactCalendarTimeline;
}(_react.Component);

exports["default"] = ReactCalendarTimeline;

_defineProperty(ReactCalendarTimeline, "propTypes", {
  groups: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  items: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  sidebarWidth: _propTypes["default"].number,
  rightSidebarWidth: _propTypes["default"].number,
  dragSnap: _propTypes["default"].number,
  minResizeWidth: _propTypes["default"].number,
  stickyHeader: _propTypes["default"].bool,
  lineHeight: _propTypes["default"].number,
  itemHeightRatio: _propTypes["default"].number,
  minZoom: _propTypes["default"].number,
  maxZoom: _propTypes["default"].number,
  clickTolerance: _propTypes["default"].number,
  canChangeGroup: _propTypes["default"].bool,
  canMove: _propTypes["default"].bool,
  canResize: _propTypes["default"].oneOf([true, false, 'left', 'right', 'both']),
  useResizeHandle: _propTypes["default"].bool,
  canSelect: _propTypes["default"].bool,
  stackItems: _propTypes["default"].bool,
  traditionalZoom: _propTypes["default"].bool,
  itemTouchSendsClick: _propTypes["default"].bool,
  horizontalLineClassNamesForGroup: _propTypes["default"].func,
  onItemMove: _propTypes["default"].func,
  onItemResize: _propTypes["default"].func,
  onItemClick: _propTypes["default"].func,
  onItemSelect: _propTypes["default"].func,
  onItemDeselect: _propTypes["default"].func,
  onCanvasClick: _propTypes["default"].func,
  onItemDoubleClick: _propTypes["default"].func,
  onItemContextMenu: _propTypes["default"].func,
  onCanvasDoubleClick: _propTypes["default"].func,
  onCanvasContextMenu: _propTypes["default"].func,
  onZoom: _propTypes["default"].func,
  onItemDrag: _propTypes["default"].func,
  moveResizeValidator: _propTypes["default"].func,
  itemRenderer: _propTypes["default"].func,
  groupRenderer: _propTypes["default"].func,
  className: _propTypes["default"].string,
  style: _propTypes["default"].object,
  keys: _propTypes["default"].shape({
    groupIdKey: _propTypes["default"].string,
    groupTitleKey: _propTypes["default"].string,
    groupLabelKey: _propTypes["default"].string,
    groupRightTitleKey: _propTypes["default"].string,
    itemIdKey: _propTypes["default"].string,
    itemTitleKey: _propTypes["default"].string,
    itemDivTitleKey: _propTypes["default"].string,
    itemGroupKey: _propTypes["default"].string,
    itemTimeStartKey: _propTypes["default"].string,
    itemTimeEndKey: _propTypes["default"].string
  }),
  headerRef: _propTypes["default"].func,
  scrollRef: _propTypes["default"].func,
  timeSteps: _propTypes["default"].shape({
    second: _propTypes["default"].number,
    minute: _propTypes["default"].number,
    hour: _propTypes["default"].number,
    day: _propTypes["default"].number,
    month: _propTypes["default"].number,
    year: _propTypes["default"].number
  }),
  defaultTimeStart: _propTypes["default"].object,
  defaultTimeEnd: _propTypes["default"].object,
  visibleTimeStart: _propTypes["default"].number,
  visibleTimeEnd: _propTypes["default"].number,
  onTimeChange: _propTypes["default"].func,
  onBoundsChange: _propTypes["default"].func,
  selected: _propTypes["default"].array,
  headerLabelFormats: _propTypes["default"].shape({
    yearShort: _propTypes["default"].string,
    yearLong: _propTypes["default"].string,
    monthShort: _propTypes["default"].string,
    monthMedium: _propTypes["default"].string,
    monthMediumLong: _propTypes["default"].string,
    monthLong: _propTypes["default"].string,
    dayShort: _propTypes["default"].string,
    dayLong: _propTypes["default"].string,
    hourShort: _propTypes["default"].string,
    hourMedium: _propTypes["default"].string,
    hourMediumLong: _propTypes["default"].string,
    hourLong: _propTypes["default"].string
  }),
  subHeaderLabelFormats: _propTypes["default"].shape({
    yearShort: _propTypes["default"].string,
    yearLong: _propTypes["default"].string,
    monthShort: _propTypes["default"].string,
    monthMedium: _propTypes["default"].string,
    monthLong: _propTypes["default"].string,
    dayShort: _propTypes["default"].string,
    dayMedium: _propTypes["default"].string,
    dayMediumLong: _propTypes["default"].string,
    dayLong: _propTypes["default"].string,
    hourShort: _propTypes["default"].string,
    hourLong: _propTypes["default"].string,
    minuteShort: _propTypes["default"].string,
    minuteLong: _propTypes["default"].string
  }),
  resizeDetector: _propTypes["default"].shape({
    addListener: _propTypes["default"].func,
    removeListener: _propTypes["default"].func
  }),
  verticalLineClassNamesForTime: _propTypes["default"].func,
  children: _propTypes["default"].node
});

_defineProperty(ReactCalendarTimeline, "defaultProps", {
  sidebarWidth: 150,
  rightSidebarWidth: 0,
  dragSnap: 1000 * 60 * 15,
  // 15min
  minResizeWidth: 20,
  stickyHeader: true,
  lineHeight: 30,
  itemHeightRatio: 0.65,
  minZoom: 60 * 60 * 1000,
  // 1 hour
  maxZoom: 5 * 365.24 * 86400 * 1000,
  // 5 years
  clickTolerance: 3,
  // how many pixels can we drag for it to be still considered a click?
  canChangeGroup: true,
  canMove: true,
  canResize: 'right',
  useResizeHandle: false,
  canSelect: true,
  stackItems: false,
  traditionalZoom: false,
  horizontalLineClassNamesForGroup: null,
  onItemMove: null,
  onItemResize: null,
  onItemClick: null,
  onItemSelect: null,
  onItemDeselect: null,
  onItemDrag: null,
  onCanvasClick: null,
  onItemDoubleClick: null,
  onItemContextMenu: null,
  onZoom: null,
  verticalLineClassNamesForTime: null,
  moveResizeValidator: null,
  dayBackground: null,
  defaultTimeStart: null,
  defaultTimeEnd: null,
  itemTouchSendsClick: false,
  style: {},
  className: '',
  keys: _defaultConfig.defaultKeys,
  timeSteps: _defaultConfig.defaultTimeSteps,
  headerRef: function headerRef() {},
  scrollRef: function scrollRef() {},
  // if you pass in visibleTimeStart and visibleTimeEnd, you must also pass onTimeChange(visibleTimeStart, visibleTimeEnd),
  // which needs to update the props visibleTimeStart and visibleTimeEnd to the ones passed
  visibleTimeStart: null,
  visibleTimeEnd: null,
  onTimeChange: function onTimeChange(visibleTimeStart, visibleTimeEnd, updateScrollCanvas) {
    updateScrollCanvas(visibleTimeStart, visibleTimeEnd);
  },
  // called when the canvas area of the calendar changes
  onBoundsChange: null,
  children: null,
  headerLabelFormats: _defaultConfig.defaultHeaderLabelFormats,
  subHeaderLabelFormats: _defaultConfig.defaultSubHeaderLabelFormats,
  selected: null
});

_defineProperty(ReactCalendarTimeline, "childContextTypes", {
  getTimelineContext: _propTypes["default"].func
});


/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/columns/Columns.js":
/*!**************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/columns/Columns.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

var _TimelineStateContext = __webpack_require__(/*! ../timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var passThroughPropTypes = {
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  lineCount: _propTypes["default"].number.isRequired,
  minUnit: _propTypes["default"].string.isRequired,
  timeSteps: _propTypes["default"].object.isRequired,
  height: _propTypes["default"].number.isRequired,
  verticalLineClassNamesForTime: _propTypes["default"].func
};

var Columns =
/*#__PURE__*/
function (_Component) {
  _inherits(Columns, _Component);

  function Columns() {
    _classCallCheck(this, Columns);

    return _possibleConstructorReturn(this, _getPrototypeOf(Columns).apply(this, arguments));
  }

  _createClass(Columns, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.lineCount === this.props.lineCount && nextProps.minUnit === this.props.minUnit && nextProps.timeSteps === this.props.timeSteps && nextProps.height === this.props.height && nextProps.verticalLineClassNamesForTime === this.props.verticalLineClassNamesForTime);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canvasTimeStart = _this$props.canvasTimeStart,
          canvasTimeEnd = _this$props.canvasTimeEnd,
          canvasWidth = _this$props.canvasWidth,
          minUnit = _this$props.minUnit,
          timeSteps = _this$props.timeSteps,
          height = _this$props.height,
          verticalLineClassNamesForTime = _this$props.verticalLineClassNamesForTime,
          getLeftOffsetFromDate = _this$props.getLeftOffsetFromDate;
      var ratio = canvasWidth / (canvasTimeEnd - canvasTimeStart);
      var lines = [];
      (0, _calendar.iterateTimes)(canvasTimeStart, canvasTimeEnd, minUnit, timeSteps, function (time, nextTime) {
        var minUnitValue = time.get(minUnit === 'day' ? 'date' : minUnit);
        var firstOfType = minUnitValue === (minUnit === 'day' ? 1 : 0);
        var classNamesForTime = [];

        if (verticalLineClassNamesForTime) {
          classNamesForTime = verticalLineClassNamesForTime(time.unix() * 1000, // turn into ms, which is what verticalLineClassNamesForTime expects
          nextTime.unix() * 1000 - 1);
        } // TODO: rename or remove class that has reference to vertical-line


        var classNames = 'rct-vl' + (firstOfType ? ' rct-vl-first' : '') + (minUnit === 'day' || minUnit === 'hour' || minUnit === 'minute' ? " rct-day-".concat(time.day(), " ") : '') + classNamesForTime.join(' ');
        var left = getLeftOffsetFromDate(time.valueOf());
        var right = getLeftOffsetFromDate(nextTime.valueOf());
        lines.push(_react["default"].createElement("div", {
          key: "line-".concat(time.valueOf()),
          className: classNames,
          style: {
            pointerEvents: 'none',
            top: '0px',
            left: "".concat(left, "px"),
            width: "".concat(right - left, "px"),
            height: "".concat(height, "px")
          }
        }));
      });
      return _react["default"].createElement("div", {
        className: "rct-vertical-lines"
      }, lines);
    }
  }]);

  return Columns;
}(_react.Component);

_defineProperty(Columns, "propTypes", _objectSpread({}, passThroughPropTypes, {
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired
}));

var ColumnsWrapper = function ColumnsWrapper(_ref) {
  var props = _extends({}, _ref);

  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref2) {
    var getLeftOffsetFromDate = _ref2.getLeftOffsetFromDate;
    return _react["default"].createElement(Columns, _extends({
      getLeftOffsetFromDate: getLeftOffsetFromDate
    }, props));
  });
};

ColumnsWrapper.defaultProps = _objectSpread({}, passThroughPropTypes);
var _default = ColumnsWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/default-config.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/default-config.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultSubHeaderLabelFormats = exports.defaultHeaderLabelFormats = exports.defaultHeaderFormats = exports.defaultTimeSteps = exports.defaultKeys = void 0;
var defaultKeys = {
  groupIdKey: 'id',
  groupTitleKey: 'title',
  groupRightTitleKey: 'rightTitle',
  groupLabelKey: 'title',
  itemIdKey: 'id',
  itemTitleKey: 'title',
  itemDivTitleKey: 'title',
  itemGroupKey: 'group',
  itemTimeStartKey: 'start_time',
  itemTimeEndKey: 'end_time'
};
exports.defaultKeys = defaultKeys;
var defaultTimeSteps = {
  second: 1,
  minute: 1,
  hour: 1,
  day: 1,
  month: 1,
  year: 1
};
exports.defaultTimeSteps = defaultTimeSteps;
var defaultHeaderFormats = {
  year: {
    "long": 'YYYY',
    mediumLong: 'YYYY',
    medium: 'YYYY',
    "short": 'YY'
  },
  month: {
    "long": 'MMMM YYYY',
    mediumLong: 'MMMM',
    medium: 'MMMM',
    "short": 'MM/YY'
  },
  week: {
    "long": 'w',
    mediumLong: 'w',
    medium: 'w',
    "short": 'w'
  },
  day: {
    "long": 'dddd, LL',
    mediumLong: 'dddd, LL',
    medium: 'dd D',
    "short": 'D'
  },
  hour: {
    "long": 'dddd, LL, HH:00',
    mediumLong: 'L, HH:00',
    medium: 'HH:00',
    "short": 'HH'
  },
  minute: {
    "long": 'HH:mm',
    mediumLong: 'HH:mm',
    medium: 'HH:mm',
    "short": 'mm'
  } //TODO: delete this

};
exports.defaultHeaderFormats = defaultHeaderFormats;
var defaultHeaderLabelFormats = {
  yearShort: 'YY',
  yearLong: 'YYYY',
  monthShort: 'MM/YY',
  monthMedium: 'MM/YYYY',
  monthMediumLong: 'MMM YYYY',
  monthLong: 'MMMM YYYY',
  dayShort: 'L',
  dayLong: 'dddd, LL',
  hourShort: 'HH',
  hourMedium: 'HH:00',
  hourMediumLong: 'L, HH:00',
  hourLong: 'dddd, LL, HH:00',
  time: 'LLL' //TODO: delete this

};
exports.defaultHeaderLabelFormats = defaultHeaderLabelFormats;
var defaultSubHeaderLabelFormats = {
  yearShort: 'YY',
  yearLong: 'YYYY',
  monthShort: 'MM',
  monthMedium: 'MMM',
  monthLong: 'MMMM',
  dayShort: 'D',
  dayMedium: 'dd D',
  dayMediumLong: 'ddd, Do',
  dayLong: 'dddd, Do',
  hourShort: 'HH',
  hourLong: 'HH:00',
  minuteShort: 'mm',
  minuteLong: 'HH:mm'
};
exports.defaultSubHeaderLabelFormats = defaultSubHeaderLabelFormats;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/CustomDateHeader.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/CustomDateHeader.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomDateHeader = CustomDateHeader;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Interval = _interopRequireDefault(__webpack_require__(/*! ./Interval */ "../node_modules/react-calendar-timeline/lib/lib/headers/Interval.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function CustomDateHeader(_ref) {
  var _ref$headerContext = _ref.headerContext,
      intervals = _ref$headerContext.intervals,
      unit = _ref$headerContext.unit,
      getRootProps = _ref.getRootProps,
      getIntervalProps = _ref.getIntervalProps,
      showPeriod = _ref.showPeriod,
      _ref$data = _ref.data,
      style = _ref$data.style,
      intervalRenderer = _ref$data.intervalRenderer,
      className = _ref$data.className,
      getLabelFormat = _ref$data.getLabelFormat,
      unitProp = _ref$data.unitProp,
      headerData = _ref$data.headerData;
  return _react["default"].createElement("div", _extends({
    className: className
  }, getRootProps({
    style: style
  })), intervals.map(function (interval) {
    var intervalText = getLabelFormat([interval.startTime, interval.endTime], unit, interval.labelWidth);
    return _react["default"].createElement(_Interval["default"], {
      key: "label-".concat(interval.startTime.valueOf()),
      unit: unit,
      interval: interval,
      showPeriod: showPeriod,
      intervalText: intervalText,
      primaryHeader: unitProp === 'primaryHeader',
      getIntervalProps: getIntervalProps,
      intervalRenderer: intervalRenderer,
      headerData: headerData
    });
  }));
}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/CustomHeader.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/CustomHeader.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CustomHeader = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _HeadersContext = __webpack_require__(/*! ./HeadersContext */ "../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js");

var _TimelineStateContext = __webpack_require__(/*! ../timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomHeader, _React$Component);

  function CustomHeader(_props) {
    var _this;

    _classCallCheck(this, CustomHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CustomHeader).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "getHeaderIntervals", function (_ref) {
      var canvasTimeStart = _ref.canvasTimeStart,
          canvasTimeEnd = _ref.canvasTimeEnd,
          unit = _ref.unit,
          timeSteps = _ref.timeSteps,
          getLeftOffsetFromDate = _ref.getLeftOffsetFromDate;
      var intervals = [];
      (0, _calendar.iterateTimes)(canvasTimeStart, canvasTimeEnd, unit, timeSteps, function (startTime, endTime) {
        var left = getLeftOffsetFromDate(startTime.valueOf());
        var right = getLeftOffsetFromDate(endTime.valueOf());
        var width = right - left;
        intervals.push({
          startTime: startTime,
          endTime: endTime,
          labelWidth: width,
          left: left
        });
      });
      return intervals;
    });

    _defineProperty(_assertThisInitialized(_this), "getRootProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var style = props.style;
      return {
        style: Object.assign({}, style ? style : {}, {
          position: 'relative',
          width: _this.props.canvasWidth,
          height: _this.props.height
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getIntervalProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var interval = props.interval,
          style = props.style;
      if (!interval) throw new Error('you should provide interval to the prop getter');
      var startTime = interval.startTime,
          labelWidth = interval.labelWidth,
          left = interval.left;
      return {
        style: _this.getIntervalStyle({
          style: style,
          startTime: startTime,
          labelWidth: labelWidth,
          canvasTimeStart: _this.props.canvasTimeStart,
          unit: _this.props.unit,
          left: left
        }),
        key: "label-".concat(startTime.valueOf())
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getIntervalStyle", function (_ref2) {
      var left = _ref2.left,
          labelWidth = _ref2.labelWidth,
          style = _ref2.style;
      return _objectSpread({}, style, {
        left: left,
        width: labelWidth,
        position: 'absolute'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      var _this$props = _this.props,
          canvasTimeStart = _this$props.canvasTimeStart,
          canvasTimeEnd = _this$props.canvasTimeEnd,
          unit = _this$props.unit,
          showPeriod = _this$props.showPeriod,
          timelineWidth = _this$props.timelineWidth,
          visibleTimeStart = _this$props.visibleTimeStart,
          visibleTimeEnd = _this$props.visibleTimeEnd,
          headerData = _this$props.headerData; //TODO: only evaluate on changing params

      return {
        timelineContext: {
          timelineWidth: timelineWidth,
          visibleTimeStart: visibleTimeStart,
          visibleTimeEnd: visibleTimeEnd,
          canvasTimeStart: canvasTimeStart,
          canvasTimeEnd: canvasTimeEnd
        },
        headerContext: {
          unit: unit,
          intervals: _this.state.intervals
        },
        getRootProps: _this.getRootProps,
        getIntervalProps: _this.getIntervalProps,
        showPeriod: showPeriod,
        data: headerData
      };
    });

    var _canvasTimeStart = _props.canvasTimeStart,
        _canvasTimeEnd = _props.canvasTimeEnd,
        canvasWidth = _props.canvasWidth,
        _unit = _props.unit,
        _timeSteps = _props.timeSteps,
        _showPeriod = _props.showPeriod,
        _getLeftOffsetFromDate = _props.getLeftOffsetFromDate;

    var _intervals = _this.getHeaderIntervals({
      canvasTimeStart: _canvasTimeStart,
      canvasTimeEnd: _canvasTimeEnd,
      canvasWidth: canvasWidth,
      unit: _unit,
      timeSteps: _timeSteps,
      showPeriod: _showPeriod,
      getLeftOffsetFromDate: _getLeftOffsetFromDate
    });

    _this.state = {
      intervals: _intervals
    };
    return _this;
  }

  _createClass(CustomHeader, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      if (nextProps.canvasTimeStart !== this.props.canvasTimeStart || nextProps.canvasTimeEnd !== this.props.canvasTimeEnd || nextProps.canvasWidth !== this.props.canvasWidth || nextProps.unit !== this.props.unit || nextProps.timeSteps !== this.props.timeSteps || nextProps.showPeriod !== this.props.showPeriod || nextProps.children !== this.props.children || nextProps.headerData !== this.props.headerData) {
        return true;
      }

      return false;
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.canvasTimeStart !== this.props.canvasTimeStart || nextProps.canvasTimeEnd !== this.props.canvasTimeEnd || nextProps.canvasWidth !== this.props.canvasWidth || nextProps.unit !== this.props.unit || nextProps.timeSteps !== this.props.timeSteps || nextProps.showPeriod !== this.props.showPeriod) {
        var canvasTimeStart = nextProps.canvasTimeStart,
            canvasTimeEnd = nextProps.canvasTimeEnd,
            canvasWidth = nextProps.canvasWidth,
            unit = nextProps.unit,
            timeSteps = nextProps.timeSteps,
            showPeriod = nextProps.showPeriod,
            getLeftOffsetFromDate = nextProps.getLeftOffsetFromDate;
        var intervals = this.getHeaderIntervals({
          canvasTimeStart: canvasTimeStart,
          canvasTimeEnd: canvasTimeEnd,
          canvasWidth: canvasWidth,
          unit: unit,
          timeSteps: timeSteps,
          showPeriod: showPeriod,
          getLeftOffsetFromDate: getLeftOffsetFromDate
        });
        this.setState({
          intervals: intervals
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.getStateAndHelpers();
      var Renderer = this.props.children;
      return _react["default"].createElement(Renderer, props);
    }
  }]);

  return CustomHeader;
}(_react["default"].Component);

exports.CustomHeader = CustomHeader;

_defineProperty(CustomHeader, "propTypes", {
  //component props
  children: _propTypes["default"].func.isRequired,
  unit: _propTypes["default"].string.isRequired,
  //Timeline context
  timeSteps: _propTypes["default"].object.isRequired,
  visibleTimeStart: _propTypes["default"].number.isRequired,
  visibleTimeEnd: _propTypes["default"].number.isRequired,
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  showPeriod: _propTypes["default"].func.isRequired,
  headerData: _propTypes["default"].object,
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired,
  height: _propTypes["default"].number.isRequired
});

var CustomHeaderWrapper = function CustomHeaderWrapper(_ref3) {
  var children = _ref3.children,
      unit = _ref3.unit,
      headerData = _ref3.headerData,
      height = _ref3.height;
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref4) {
    var getTimelineState = _ref4.getTimelineState,
        showPeriod = _ref4.showPeriod,
        getLeftOffsetFromDate = _ref4.getLeftOffsetFromDate;
    var timelineState = getTimelineState();
    return _react["default"].createElement(_HeadersContext.TimelineHeadersConsumer, null, function (_ref5) {
      var timeSteps = _ref5.timeSteps;
      return _react["default"].createElement(CustomHeader, _extends({
        children: children,
        timeSteps: timeSteps,
        showPeriod: showPeriod,
        unit: unit ? unit : timelineState.timelineUnit
      }, timelineState, {
        headerData: headerData,
        getLeftOffsetFromDate: getLeftOffsetFromDate,
        height: height
      }));
    });
  });
};

CustomHeaderWrapper.propTypes = {
  children: _propTypes["default"].func.isRequired,
  unit: _propTypes["default"].string,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
};
CustomHeaderWrapper.defaultProps = {
  height: 30
};
var _default = CustomHeaderWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/DateHeader.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/DateHeader.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _TimelineStateContext = __webpack_require__(/*! ../timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

var _CustomHeader = _interopRequireDefault(__webpack_require__(/*! ./CustomHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/CustomHeader.js"));

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

var _defaultConfig = __webpack_require__(/*! ../default-config */ "../node_modules/react-calendar-timeline/lib/lib/default-config.js");

var _memoizeOne = _interopRequireDefault(__webpack_require__(/*! memoize-one */ "../node_modules/react-calendar-timeline/node_modules/memoize-one/dist/memoize-one.esm.js"));

var _CustomDateHeader = __webpack_require__(/*! ./CustomDateHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/CustomDateHeader.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DateHeader =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DateHeader, _React$Component);

  function DateHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DateHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DateHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getHeaderUnit", function () {
      if (_this.props.unit === 'primaryHeader') {
        return (0, _calendar.getNextUnit)(_this.props.timelineUnit);
      } else if (_this.props.unit) {
        return _this.props.unit;
      }

      return _this.props.timelineUnit;
    });

    _defineProperty(_assertThisInitialized(_this), "getRootStyle", (0, _memoizeOne["default"])(function (style) {
      return _objectSpread({
        height: 30
      }, style);
    }));

    _defineProperty(_assertThisInitialized(_this), "getLabelFormat", function (interval, unit, labelWidth) {
      var labelFormat = _this.props.labelFormat;

      if (typeof labelFormat === 'string') {
        var startTime = interval[0];
        return startTime.format(labelFormat);
      } else if (typeof labelFormat === 'function') {
        return labelFormat(interval, unit, labelWidth);
      } else {
        throw new Error('labelFormat should be function or string');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getHeaderData", (0, _memoizeOne["default"])(function (intervalRenderer, style, className, getLabelFormat, unitProp, headerData) {
      return {
        intervalRenderer: intervalRenderer,
        style: style,
        className: className,
        getLabelFormat: getLabelFormat,
        unitProp: unitProp,
        headerData: headerData
      };
    }));

    return _this;
  }

  _createClass(DateHeader, [{
    key: "render",
    value: function render() {
      var unit = this.getHeaderUnit();
      var _this$props = this.props,
          headerData = _this$props.headerData,
          height = _this$props.height;
      return _react["default"].createElement(_CustomHeader["default"], {
        unit: unit,
        height: height,
        headerData: this.getHeaderData(this.props.intervalRenderer, this.getRootStyle(this.props.style), this.props.className, this.getLabelFormat, this.props.unit, this.props.headerData),
        children: _CustomDateHeader.CustomDateHeader
      });
    }
  }]);

  return DateHeader;
}(_react["default"].Component);

_defineProperty(DateHeader, "propTypes", {
  unit: _propTypes["default"].string,
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  timelineUnit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]).isRequired,
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
});

var DateHeaderWrapper = function DateHeaderWrapper(_ref) {
  var unit = _ref.unit,
      labelFormat = _ref.labelFormat,
      style = _ref.style,
      className = _ref.className,
      intervalRenderer = _ref.intervalRenderer,
      headerData = _ref.headerData,
      height = _ref.height;
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref2) {
    var getTimelineState = _ref2.getTimelineState;
    var timelineState = getTimelineState();
    return _react["default"].createElement(DateHeader, {
      timelineUnit: timelineState.timelineUnit,
      unit: unit,
      labelFormat: labelFormat,
      style: style,
      className: className,
      intervalRenderer: intervalRenderer,
      headerData: headerData,
      height: height
    });
  });
};

DateHeaderWrapper.propTypes = {
  style: _propTypes["default"].object,
  className: _propTypes["default"].string,
  unit: _propTypes["default"].string,
  labelFormat: _propTypes["default"].oneOfType([_propTypes["default"].func, _propTypes["default"].objectOf(_propTypes["default"].objectOf(_propTypes["default"].string)), _propTypes["default"].string]),
  intervalRenderer: _propTypes["default"].func,
  headerData: _propTypes["default"].object,
  height: _propTypes["default"].number
};
DateHeaderWrapper.defaultProps = {
  labelFormat: formatLabel
};

function formatLabel(_ref3, unit, labelWidth) {
  var _ref4 = _slicedToArray(_ref3, 2),
      timeStart = _ref4[0],
      timeEnd = _ref4[1];

  var formatOptions = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : _defaultConfig.defaultHeaderFormats;
  var format;

  if (labelWidth >= 150) {
    format = formatOptions[unit]['long'];
  } else if (labelWidth >= 100) {
    format = formatOptions[unit]['mediumLong'];
  } else if (labelWidth >= 50) {
    format = formatOptions[unit]['medium'];
  } else {
    format = formatOptions[unit]['short'];
  }

  return timeStart.format(format);
}

var _default = DateHeaderWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineHeadersConsumer = exports.TimelineHeadersProvider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _createReactContext2 = _interopRequireDefault(__webpack_require__(/*! create-react-context */ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js"));

var _generic = __webpack_require__(/*! ../utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultContextState = {
  registerScroll: function registerScroll() {
    // eslint-disable-next-line
    console.warn('default registerScroll header used');
    return _generic.noop;
  },
  rightSidebarWidth: 0,
  leftSidebarWidth: 150,
  timeSteps: {}
};

var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
    Consumer = _createReactContext.Consumer,
    Provider = _createReactContext.Provider;

var TimelineHeadersProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelineHeadersProvider, _React$Component);

  function TimelineHeadersProvider() {
    _classCallCheck(this, TimelineHeadersProvider);

    return _possibleConstructorReturn(this, _getPrototypeOf(TimelineHeadersProvider).apply(this, arguments));
  }

  _createClass(TimelineHeadersProvider, [{
    key: "render",
    value: function render() {
      var contextValue = {
        rightSidebarWidth: this.props.rightSidebarWidth,
        leftSidebarWidth: this.props.leftSidebarWidth,
        timeSteps: this.props.timeSteps,
        registerScroll: this.props.registerScroll
      };
      return _react["default"].createElement(Provider, {
        value: contextValue
      }, this.props.children);
    }
  }]);

  return TimelineHeadersProvider;
}(_react["default"].Component);

exports.TimelineHeadersProvider = TimelineHeadersProvider;

_defineProperty(TimelineHeadersProvider, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  rightSidebarWidth: _propTypes["default"].number,
  leftSidebarWidth: _propTypes["default"].number.isRequired,
  //TODO: maybe this should be skipped?
  timeSteps: _propTypes["default"].object.isRequired,
  registerScroll: _propTypes["default"].func.isRequired
});

var TimelineHeadersConsumer = Consumer;
exports.TimelineHeadersConsumer = TimelineHeadersConsumer;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/Interval.js":
/*!***************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/Interval.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

var _events = __webpack_require__(/*! ../utility/events */ "../node_modules/react-calendar-timeline/lib/lib/utility/events.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Interval =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(Interval, _React$PureComponent);

  function Interval() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Interval);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Interval)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onIntervalClick", function () {
      var _this$props = _this.props,
          primaryHeader = _this$props.primaryHeader,
          interval = _this$props.interval,
          unit = _this$props.unit,
          showPeriod = _this$props.showPeriod;

      if (primaryHeader) {
        var nextUnit = (0, _calendar.getNextUnit)(unit);
        var newStartTime = interval.startTime.clone().startOf(nextUnit);
        var newEndTime = interval.startTime.clone().endOf(nextUnit);
        showPeriod(newStartTime, newEndTime);
      } else {
        showPeriod(interval.startTime, interval.endTime);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getIntervalProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return _objectSpread({}, _this.props.getIntervalProps(_objectSpread({
        interval: _this.props.interval
      }, props)), {
        onClick: (0, _events.composeEvents)(_this.onIntervalClick, props.onClick)
      });
    });

    return _this;
  }

  _createClass(Interval, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          intervalText = _this$props2.intervalText,
          interval = _this$props2.interval,
          intervalRenderer = _this$props2.intervalRenderer,
          headerData = _this$props2.headerData;
      var Renderer = intervalRenderer;

      if (Renderer) {
        return _react["default"].createElement(Renderer, {
          getIntervalProps: this.getIntervalProps,
          intervalContext: {
            interval: interval,
            intervalText: intervalText
          },
          data: headerData
        });
      }

      return _react["default"].createElement("div", _extends({}, this.getIntervalProps({}), {
        className: "rct-dateHeader ".concat(this.props.primaryHeader ? 'rct-dateHeader-primary' : '')
      }), _react["default"].createElement("span", null, intervalText));
    }
  }]);

  return Interval;
}(_react["default"].PureComponent);

_defineProperty(Interval, "propTypes", {
  intervalRenderer: _propTypes["default"].func,
  unit: _propTypes["default"].string.isRequired,
  interval: _propTypes["default"].object.isRequired,
  showPeriod: _propTypes["default"].func.isRequired,
  intervalText: _propTypes["default"].string.isRequired,
  primaryHeader: _propTypes["default"].bool.isRequired,
  getIntervalProps: _propTypes["default"].func.isRequired,
  headerData: _propTypes["default"].object
});

var _default = Interval;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/SidebarHeader.js":
/*!********************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/SidebarHeader.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _HeadersContext = __webpack_require__(/*! ./HeadersContext */ "../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js");

var _constants = __webpack_require__(/*! ./constants */ "../node_modules/react-calendar-timeline/lib/lib/headers/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SidebarHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(SidebarHeader, _React$PureComponent);

  function SidebarHeader() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SidebarHeader);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SidebarHeader)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "getRootProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var style = props.style;
      var width = _this.props.variant === _constants.RIGHT_VARIANT ? _this.props.rightSidebarWidth : _this.props.leftSidebarWidth;
      return {
        style: _objectSpread({}, style, {
          width: width
        })
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getStateAndHelpers", function () {
      return {
        getRootProps: _this.getRootProps,
        data: _this.props.headerData
      };
    });

    return _this;
  }

  _createClass(SidebarHeader, [{
    key: "render",
    value: function render() {
      var props = this.getStateAndHelpers();
      var Renderer = this.props.children;
      return _react["default"].createElement(Renderer, props);
    }
  }]);

  return SidebarHeader;
}(_react["default"].PureComponent);

_defineProperty(SidebarHeader, "propTypes", {
  children: _propTypes["default"].func.isRequired,
  rightSidebarWidth: _propTypes["default"].number,
  leftSidebarWidth: _propTypes["default"].number.isRequired,
  variant: _propTypes["default"].string,
  headerData: _propTypes["default"].object
});

var SidebarWrapper = function SidebarWrapper(_ref) {
  var children = _ref.children,
      variant = _ref.variant,
      headerData = _ref.headerData;
  return _react["default"].createElement(_HeadersContext.TimelineHeadersConsumer, null, function (_ref2) {
    var leftSidebarWidth = _ref2.leftSidebarWidth,
        rightSidebarWidth = _ref2.rightSidebarWidth;
    return _react["default"].createElement(SidebarHeader, {
      leftSidebarWidth: leftSidebarWidth,
      rightSidebarWidth: rightSidebarWidth,
      children: children,
      variant: variant,
      headerData: headerData
    });
  });
};

SidebarWrapper.propTypes = {
  children: _propTypes["default"].func.isRequired,
  variant: _propTypes["default"].string,
  headerData: _propTypes["default"].object
};
SidebarWrapper.defaultProps = {
  variant: _constants.LEFT_VARIANT,
  children: function children(_ref3) {
    var getRootProps = _ref3.getRootProps;
    return _react["default"].createElement("div", getRootProps());
  }
};
SidebarWrapper.secretKey = "SidebarHeader";
var _default = SidebarWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/TimelineHeaders.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/TimelineHeaders.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ "../node_modules/classnames/index.js"));

var _HeadersContext = __webpack_require__(/*! ./HeadersContext */ "../node_modules/react-calendar-timeline/lib/lib/headers/HeadersContext.js");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _SidebarHeader = _interopRequireDefault(__webpack_require__(/*! ./SidebarHeader */ "../node_modules/react-calendar-timeline/lib/lib/headers/SidebarHeader.js"));

var _constants = __webpack_require__(/*! ./constants */ "../node_modules/react-calendar-timeline/lib/lib/headers/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TimelineHeaders =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelineHeaders, _React$Component);

  function TimelineHeaders(props) {
    var _this;

    _classCallCheck(this, TimelineHeaders);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimelineHeaders).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getRootStyle", function () {
      return _objectSpread({}, _this.props.style, {
        display: 'flex',
        width: '100%'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getCalendarHeaderStyle", function () {
      var _this$props = _this.props,
          leftSidebarWidth = _this$props.leftSidebarWidth,
          rightSidebarWidth = _this$props.rightSidebarWidth,
          calendarHeaderStyle = _this$props.calendarHeaderStyle;
      return _objectSpread({}, calendarHeaderStyle, {
        overflow: 'hidden',
        width: "calc(100% - ".concat(leftSidebarWidth + rightSidebarWidth, "px)")
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleRootRef", function (element) {
      if (_this.props.headerRef) {
        _this.props.headerRef(element);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "isSidebarHeader", function (child) {
      if (child.type === undefined) return false;
      return child.type.secretKey === _SidebarHeader["default"].secretKey;
    });

    return _this;
  }

  _createClass(TimelineHeaders, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var rightSidebarHeader;
      var leftSidebarHeader;
      var calendarHeaders = [];
      var children = Array.isArray(this.props.children) ? this.props.children.filter(function (c) {
        return c;
      }) : [this.props.children];

      _react["default"].Children.map(children, function (child) {
        if (_this2.isSidebarHeader(child)) {
          if (child.props.variant === _constants.RIGHT_VARIANT) {
            rightSidebarHeader = child;
          } else {
            leftSidebarHeader = child;
          }
        } else {
          calendarHeaders.push(child);
        }
      });

      if (!leftSidebarHeader) {
        leftSidebarHeader = _react["default"].createElement(_SidebarHeader["default"], null);
      }

      if (!rightSidebarHeader && this.props.rightSidebarWidth) {
        rightSidebarHeader = _react["default"].createElement(_SidebarHeader["default"], {
          variant: "right"
        });
      }

      return _react["default"].createElement("div", {
        ref: this.handleRootRef,
        style: this.getRootStyle(),
        className: (0, _classnames["default"])('rct-header-root', this.props.className)
      }, leftSidebarHeader, _react["default"].createElement("div", {
        ref: this.props.registerScroll,
        style: this.getCalendarHeaderStyle(),
        className: (0, _classnames["default"])('rct-calendar-header', this.props.calendarHeaderClassName)
      }, calendarHeaders), rightSidebarHeader);
    }
  }]);

  return TimelineHeaders;
}(_react["default"].Component);

_defineProperty(TimelineHeaders, "propTypes", {
  registerScroll: _propTypes["default"].func.isRequired,
  leftSidebarWidth: _propTypes["default"].number.isRequired,
  rightSidebarWidth: _propTypes["default"].number.isRequired,
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  calendarHeaderStyle: _propTypes["default"].object,
  calendarHeaderClassName: _propTypes["default"].string,
  headerRef: _propTypes["default"].func
});

var TimelineHeadersWrapper = function TimelineHeadersWrapper(_ref) {
  var children = _ref.children,
      style = _ref.style,
      className = _ref.className,
      calendarHeaderStyle = _ref.calendarHeaderStyle,
      calendarHeaderClassName = _ref.calendarHeaderClassName;
  return _react["default"].createElement(_HeadersContext.TimelineHeadersConsumer, null, function (_ref2) {
    var leftSidebarWidth = _ref2.leftSidebarWidth,
        rightSidebarWidth = _ref2.rightSidebarWidth,
        registerScroll = _ref2.registerScroll;
    return _react["default"].createElement(TimelineHeaders, {
      leftSidebarWidth: leftSidebarWidth,
      rightSidebarWidth: rightSidebarWidth,
      registerScroll: registerScroll,
      style: style,
      className: className,
      calendarHeaderStyle: calendarHeaderStyle,
      calendarHeaderClassName: calendarHeaderClassName
    }, children);
  });
};

TimelineHeadersWrapper.propTypes = {
  style: _propTypes["default"].object,
  children: _propTypes["default"].node,
  className: _propTypes["default"].string,
  calendarHeaderStyle: _propTypes["default"].object,
  calendarHeaderClassName: _propTypes["default"].string
};
TimelineHeadersWrapper.secretKey = "TimelineHeaders";
var _default = TimelineHeadersWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/headers/constants.js":
/*!****************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/headers/constants.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RIGHT_VARIANT = exports.LEFT_VARIANT = void 0;
var LEFT_VARIANT = 'left';
exports.LEFT_VARIANT = LEFT_VARIANT;
var RIGHT_VARIANT = 'right';
exports.RIGHT_VARIANT = RIGHT_VARIANT;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/interaction/PreventClickOnDrag.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/interaction/PreventClickOnDrag.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var PreventClickOnDrag =
/*#__PURE__*/
function (_Component) {
  _inherits(PreventClickOnDrag, _Component);

  function PreventClickOnDrag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, PreventClickOnDrag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(PreventClickOnDrag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (evt) {
      _this.originClickX = evt.clientX;
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (evt) {
      if (Math.abs(_this.originClickX - evt.clientX) > _this.props.clickTolerance) {
        _this.cancelClick = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (evt) {
      if (!_this.cancelClick) {
        _this.props.onClick(evt);
      }

      _this.cancelClick = false;
      _this.originClickX = null;
    });

    return _this;
  }

  _createClass(PreventClickOnDrag, [{
    key: "render",
    value: function render() {
      var childElement = _react["default"].Children.only(this.props.children);

      return _react["default"].cloneElement(childElement, {
        onMouseDown: this.handleMouseDown,
        onMouseUp: this.handleMouseUp,
        onClick: this.handleClick
      });
    }
  }]);

  return PreventClickOnDrag;
}(_react.Component);

_defineProperty(PreventClickOnDrag, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  clickTolerance: _propTypes["default"].number.isRequired
});

var _default = PreventClickOnDrag;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/items/Item.js":
/*!*********************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/items/Item.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "react");

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _interactjs = _interopRequireDefault(__webpack_require__(/*! interactjs */ "../node_modules/interactjs/dist/interact.min.js"));

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _generic = __webpack_require__(/*! ../utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

var _events = __webpack_require__(/*! ../utility/events */ "../node_modules/react-calendar-timeline/lib/lib/utility/events.js");

var _defaultItemRenderer = __webpack_require__(/*! ./defaultItemRenderer */ "../node_modules/react-calendar-timeline/lib/lib/items/defaultItemRenderer.js");

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

var _domHelpers = __webpack_require__(/*! ../utility/dom-helpers */ "../node_modules/react-calendar-timeline/lib/lib/utility/dom-helpers.js");

var _styles = __webpack_require__(/*! ./styles */ "../node_modules/react-calendar-timeline/lib/lib/items/styles.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Item =
/*#__PURE__*/
function (_Component) {
  _inherits(Item, _Component);

  // removed prop type check for SPEED!
  // they are coming from a trusted component anyway
  // (this complicates performance debugging otherwise)
  function Item(_props) {
    var _this;

    _classCallCheck(this, Item);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Item).call(this, _props));

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e) {
      if (!_this.state.interactMounted) {
        e.preventDefault();
        _this.startedClicking = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      if (!_this.state.interactMounted && _this.startedClicking) {
        _this.startedClicking = false;

        _this.actualClick(e, 'click');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchStart", function (e) {
      if (!_this.state.interactMounted) {
        e.preventDefault();
        _this.startedTouching = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onTouchEnd", function (e) {
      if (!_this.state.interactMounted && _this.startedTouching) {
        _this.startedTouching = false;

        _this.actualClick(e, 'touch');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoubleClick", function (e) {
      e.stopPropagation();

      if (_this.props.onItemDoubleClick) {
        _this.props.onItemDoubleClick(_this.itemId, e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleContextMenu", function (e) {
      if (_this.props.onContextMenu) {
        e.preventDefault();
        e.stopPropagation();

        _this.props.onContextMenu(_this.itemId, e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getItemRef", function (el) {
      return _this.item = el;
    });

    _defineProperty(_assertThisInitialized(_this), "getDragLeftRef", function (el) {
      return _this.dragLeft = el;
    });

    _defineProperty(_assertThisInitialized(_this), "getDragRightRef", function (el) {
      return _this.dragRight = el;
    });

    _defineProperty(_assertThisInitialized(_this), "getItemProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      //TODO: maybe shouldnt include all of these classes
      var classNames = 'rct-item' + (_this.props.item.className ? " ".concat(_this.props.item.className) : '');
      return {
        key: _this.itemId,
        ref: _this.getItemRef,
        title: _this.itemDivTitle,
        className: classNames + " ".concat(props.className ? props.className : ''),
        onMouseDown: (0, _events.composeEvents)(_this.onMouseDown, props.onMouseDown),
        onMouseUp: (0, _events.composeEvents)(_this.onMouseUp, props.onMouseUp),
        onTouchStart: (0, _events.composeEvents)(_this.onTouchStart, props.onTouchStart),
        onTouchEnd: (0, _events.composeEvents)(_this.onTouchEnd, props.onTouchEnd),
        onDoubleClick: (0, _events.composeEvents)(_this.handleDoubleClick, props.onDoubleClick),
        onContextMenu: (0, _events.composeEvents)(_this.handleContextMenu, props.onContextMenu),
        style: Object.assign({}, _this.getItemStyle(props))
      };
    });

    _defineProperty(_assertThisInitialized(_this), "getResizeProps", function () {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var leftName = "rct-item-handler rct-item-handler-left rct-item-handler-resize-left";

      if (props.leftClassName) {
        leftName += " ".concat(props.leftClassName);
      }

      var rightName = "rct-item-handler rct-item-handler-right rct-item-handler-resize-right";

      if (props.rightClassName) {
        rightName += " ".concat(props.rightClassName);
      }

      return {
        left: {
          ref: _this.getDragLeftRef,
          className: leftName,
          style: Object.assign({}, _styles.leftResizeStyle, props.leftStyle)
        },
        right: {
          ref: _this.getDragRightRef,
          className: rightName,
          style: Object.assign({}, _styles.rightResizeStyle, props.rightStyle)
        }
      };
    });

    _this.cacheDataFromProps(_props);

    _this.state = {
      interactMounted: false,
      dragging: null,
      dragStart: null,
      preDragPosition: null,
      dragTime: null,
      dragGroupDelta: null,
      resizing: null,
      resizeEdge: null,
      resizeStart: null,
      resizeTime: null
    };
    return _this;
  }

  _createClass(Item, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var shouldUpdate = nextState.dragging !== this.state.dragging || nextState.dragTime !== this.state.dragTime || nextState.dragGroupDelta !== this.state.dragGroupDelta || nextState.resizing !== this.state.resizing || nextState.resizeTime !== this.state.resizeTime || nextProps.keys !== this.props.keys || !(0, _generic.deepObjectCompare)(nextProps.itemProps, this.props.itemProps) || nextProps.selected !== this.props.selected || nextProps.item !== this.props.item || nextProps.canvasTimeStart !== this.props.canvasTimeStart || nextProps.canvasTimeEnd !== this.props.canvasTimeEnd || nextProps.canvasWidth !== this.props.canvasWidth || (nextProps.order ? nextProps.order.index : undefined) !== (this.props.order ? this.props.order.index : undefined) || nextProps.dragSnap !== this.props.dragSnap || nextProps.minResizeWidth !== this.props.minResizeWidth || nextProps.canChangeGroup !== this.props.canChangeGroup || nextProps.canSelect !== this.props.canSelect || nextProps.canMove !== this.props.canMove || nextProps.canResizeLeft !== this.props.canResizeLeft || nextProps.canResizeRight !== this.props.canResizeRight || nextProps.dimensions !== this.props.dimensions;
      return shouldUpdate;
    }
  }, {
    key: "cacheDataFromProps",
    value: function cacheDataFromProps(props) {
      this.itemId = (0, _generic._get)(props.item, props.keys.itemIdKey);
      this.itemTitle = (0, _generic._get)(props.item, props.keys.itemTitleKey);
      this.itemDivTitle = props.keys.itemDivTitleKey ? (0, _generic._get)(props.item, props.keys.itemDivTitleKey) : this.itemTitle;
      this.itemTimeStart = (0, _generic._get)(props.item, props.keys.itemTimeStartKey);
      this.itemTimeEnd = (0, _generic._get)(props.item, props.keys.itemTimeEndKey);
    }
  }, {
    key: "getTimeRatio",
    value: function getTimeRatio() {
      var _this$props = this.props,
          canvasTimeStart = _this$props.canvasTimeStart,
          canvasTimeEnd = _this$props.canvasTimeEnd,
          canvasWidth = _this$props.canvasWidth;
      return (0, _calendar.coordinateToTimeRatio)(canvasTimeStart, canvasTimeEnd, canvasWidth);
    }
  }, {
    key: "dragTimeSnap",
    value: function dragTimeSnap(dragTime, considerOffset) {
      var dragSnap = this.props.dragSnap;

      if (dragSnap) {
        var offset = considerOffset ? (0, _moment["default"])().utcOffset() * 60 * 1000 : 0;
        return Math.round(dragTime / dragSnap) * dragSnap - offset % dragSnap;
      } else {
        return dragTime;
      }
    }
  }, {
    key: "resizeTimeSnap",
    value: function resizeTimeSnap(dragTime) {
      var dragSnap = this.props.dragSnap;

      if (dragSnap) {
        var endTime = this.itemTimeEnd % dragSnap;
        return Math.round((dragTime - endTime) / dragSnap) * dragSnap + endTime;
      } else {
        return dragTime;
      }
    }
  }, {
    key: "dragTime",
    value: function dragTime(e) {
      var startTime = (0, _moment["default"])(this.itemTimeStart);

      if (this.state.dragging) {
        return this.dragTimeSnap(this.timeFor(e) + this.state.dragStart.offset, true);
      } else {
        return startTime;
      }
    }
  }, {
    key: "timeFor",
    value: function timeFor(e) {
      var ratio = (0, _calendar.coordinateToTimeRatio)(this.props.canvasTimeStart, this.props.canvasTimeEnd, this.props.canvasWidth);
      var offset = (0, _domHelpers.getSumOffset)(this.props.scrollRef).offsetLeft;
      var scrolls = (0, _domHelpers.getSumScroll)(this.props.scrollRef);
      return (e.pageX - offset + scrolls.scrollLeft) * ratio + this.props.canvasTimeStart;
    }
  }, {
    key: "dragGroupDelta",
    value: function dragGroupDelta(e) {
      var _this$props2 = this.props,
          groupTops = _this$props2.groupTops,
          order = _this$props2.order;

      if (this.state.dragging) {
        if (!this.props.canChangeGroup) {
          return 0;
        }

        var groupDelta = 0;
        var offset = (0, _domHelpers.getSumOffset)(this.props.scrollRef).offsetTop;
        var scrolls = (0, _domHelpers.getSumScroll)(this.props.scrollRef);

        for (var _i = 0, _Object$keys = Object.keys(groupTops); _i < _Object$keys.length; _i++) {
          var key = _Object$keys[_i];
          var groupTop = groupTops[key];

          if (e.pageY - offset + scrolls.scrollTop > groupTop) {
            groupDelta = parseInt(key, 10) - order.index;
          } else {
            break;
          }
        }

        if (this.props.order.index + groupDelta < 0) {
          return 0 - this.props.order.index;
        } else {
          return groupDelta;
        }
      } else {
        return 0;
      }
    }
  }, {
    key: "resizeTimeDelta",
    value: function resizeTimeDelta(e, resizeEdge) {
      var length = this.itemTimeEnd - this.itemTimeStart;
      var timeDelta = this.dragTimeSnap((e.pageX - this.state.resizeStart) * this.getTimeRatio());

      if (length + (resizeEdge === 'left' ? -timeDelta : timeDelta) < (this.props.dragSnap || 1000)) {
        if (resizeEdge === 'left') {
          return length - (this.props.dragSnap || 1000);
        } else {
          return (this.props.dragSnap || 1000) - length;
        }
      } else {
        return timeDelta;
      }
    }
  }, {
    key: "mountInteract",
    value: function mountInteract() {
      var _this2 = this;

      var leftResize = this.props.useResizeHandle ? ".rct-item-handler-resize-left" : true;
      var rightResize = this.props.useResizeHandle ? ".rct-item-handler-resize-right" : true;
      (0, _interactjs["default"])(this.item).resizable({
        edges: {
          left: this.canResizeLeft() && leftResize,
          right: this.canResizeRight() && rightResize,
          top: false,
          bottom: false
        },
        enabled: this.props.selected && (this.canResizeLeft() || this.canResizeRight())
      }).draggable({
        enabled: this.props.selected && this.canMove()
      }).styleCursor(false).on('dragstart', function (e) {
        if (_this2.props.selected) {
          var clickTime = _this2.timeFor(e);

          _this2.setState({
            dragging: true,
            dragStart: {
              x: e.pageX,
              y: e.pageY,
              offset: _this2.itemTimeStart - clickTime
            },
            preDragPosition: {
              x: e.target.offsetLeft,
              y: e.target.offsetTop
            },
            dragTime: _this2.itemTimeStart,
            dragGroupDelta: 0
          });
        } else {
          return false;
        }
      }).on('dragmove', function (e) {
        if (_this2.state.dragging) {
          var dragTime = _this2.dragTime(e);

          var dragGroupDelta = _this2.dragGroupDelta(e);

          if (_this2.props.moveResizeValidator) {
            dragTime = _this2.props.moveResizeValidator('move', _this2.props.item, dragTime);
          }

          if (_this2.props.onDrag) {
            _this2.props.onDrag(_this2.itemId, dragTime, _this2.props.order.index + dragGroupDelta);
          }

          _this2.setState({
            dragTime: dragTime,
            dragGroupDelta: dragGroupDelta
          });
        }
      }).on('dragend', function (e) {
        if (_this2.state.dragging) {
          if (_this2.props.onDrop) {
            var dragTime = _this2.dragTime(e);

            if (_this2.props.moveResizeValidator) {
              dragTime = _this2.props.moveResizeValidator('move', _this2.props.item, dragTime);
            }

            _this2.props.onDrop(_this2.itemId, dragTime, _this2.props.order.index + _this2.dragGroupDelta(e));
          }

          _this2.setState({
            dragging: false,
            dragStart: null,
            preDragPosition: null,
            dragTime: null,
            dragGroupDelta: null
          });
        }
      }).on('resizestart', function (e) {
        if (_this2.props.selected) {
          _this2.setState({
            resizing: true,
            resizeEdge: null,
            // we don't know yet
            resizeStart: e.pageX,
            resizeTime: 0
          });
        } else {
          return false;
        }
      }).on('resizemove', function (e) {
        if (_this2.state.resizing) {
          var resizeEdge = _this2.state.resizeEdge;

          if (!resizeEdge) {
            resizeEdge = e.deltaRect.left !== 0 ? 'left' : 'right';

            _this2.setState({
              resizeEdge: resizeEdge
            });
          }

          var resizeTime = _this2.resizeTimeSnap(_this2.timeFor(e));

          if (_this2.props.moveResizeValidator) {
            resizeTime = _this2.props.moveResizeValidator('resize', _this2.props.item, resizeTime, resizeEdge);
          }

          if (_this2.props.onResizing) {
            _this2.props.onResizing(_this2.itemId, resizeTime, resizeEdge);
          }

          _this2.setState({
            resizeTime: resizeTime
          });
        }
      }).on('resizeend', function (e) {
        if (_this2.state.resizing) {
          var resizeEdge = _this2.state.resizeEdge;

          var resizeTime = _this2.resizeTimeSnap(_this2.timeFor(e));

          if (_this2.props.moveResizeValidator) {
            resizeTime = _this2.props.moveResizeValidator('resize', _this2.props.item, resizeTime, resizeEdge);
          }

          if (_this2.props.onResized) {
            _this2.props.onResized(_this2.itemId, resizeTime, resizeEdge, _this2.resizeTimeDelta(e, resizeEdge));
          }

          _this2.setState({
            resizing: null,
            resizeStart: null,
            resizeEdge: null,
            resizeTime: null
          });
        }
      }).on('tap', function (e) {
        _this2.actualClick(e, e.pointerType === 'mouse' ? 'click' : 'touch');
      });
      this.setState({
        interactMounted: true
      });
    }
  }, {
    key: "canResizeLeft",
    value: function canResizeLeft() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (!props.canResizeLeft) {
        return false;
      }

      var width = parseInt(props.dimensions.width, 10);
      return width >= props.minResizeWidth;
    }
  }, {
    key: "canResizeRight",
    value: function canResizeRight() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;

      if (!props.canResizeRight) {
        return false;
      }

      var width = parseInt(props.dimensions.width, 10);
      return width >= props.minResizeWidth;
    }
  }, {
    key: "canMove",
    value: function canMove() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      return !!props.canMove;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.cacheDataFromProps(this.props);
      var interactMounted = this.state.interactMounted;
      var couldDrag = prevProps.selected && this.canMove(prevProps);
      var couldResizeLeft = prevProps.selected && this.canResizeLeft(prevProps);
      var couldResizeRight = prevProps.selected && this.canResizeRight(prevProps);
      var willBeAbleToDrag = this.props.selected && this.canMove(this.props);
      var willBeAbleToResizeLeft = this.props.selected && this.canResizeLeft(this.props);
      var willBeAbleToResizeRight = this.props.selected && this.canResizeRight(this.props);

      if (!!this.item) {
        if (this.props.selected && !interactMounted) {
          this.mountInteract();
          interactMounted = true;
        }

        if (interactMounted && (couldResizeLeft !== willBeAbleToResizeLeft || couldResizeRight !== willBeAbleToResizeRight)) {
          var leftResize = this.props.useResizeHandle ? this.dragLeft : true;
          var rightResize = this.props.useResizeHandle ? this.dragRight : true;
          (0, _interactjs["default"])(this.item).resizable({
            enabled: willBeAbleToResizeLeft || willBeAbleToResizeRight,
            edges: {
              top: false,
              bottom: false,
              left: willBeAbleToResizeLeft && leftResize,
              right: willBeAbleToResizeRight && rightResize
            }
          });
        }

        if (interactMounted && couldDrag !== willBeAbleToDrag) {
          (0, _interactjs["default"])(this.item).draggable({
            enabled: willBeAbleToDrag
          });
        }
      } else {
        interactMounted = false;
      }

      this.setState({
        interactMounted: interactMounted
      });
    }
  }, {
    key: "actualClick",
    value: function actualClick(e, clickType) {
      if (this.props.canSelect && this.props.onSelect) {
        this.props.onSelect(this.itemId, clickType, e);
      }
    }
  }, {
    key: "getItemStyle",
    value: function getItemStyle(props) {
      var dimensions = this.props.dimensions;
      var baseStyles = {
        position: 'absolute',
        boxSizing: 'border-box',
        left: "".concat(dimensions.left, "px"),
        top: "".concat(dimensions.top, "px"),
        width: "".concat(dimensions.width, "px"),
        height: "".concat(dimensions.height, "px"),
        lineHeight: "".concat(dimensions.height, "px")
      };
      var finalStyle = Object.assign({}, _styles.overridableStyles, this.props.selected ? _styles.selectedStyle : {}, this.props.selected & this.canMove(this.props) ? _styles.selectedAndCanMove : {}, this.props.selected & this.canResizeLeft(this.props) ? _styles.selectedAndCanResizeLeft : {}, this.props.selected & this.canResizeLeft(this.props) & this.state.dragging ? _styles.selectedAndCanResizeLeftAndDragLeft : {}, this.props.selected & this.canResizeRight(this.props) ? _styles.selectedAndCanResizeRight : {}, this.props.selected & this.canResizeRight(this.props) & this.state.dragging ? _styles.selectedAndCanResizeRightAndDragRight : {}, props.style, baseStyles);
      return finalStyle;
    }
  }, {
    key: "render",
    value: function render() {
      if (typeof this.props.order === 'undefined' || this.props.order === null) {
        return null;
      }

      var timelineContext = this.context.getTimelineContext();
      var itemContext = {
        dimensions: this.props.dimensions,
        useResizeHandle: this.props.useResizeHandle,
        title: this.itemTitle,
        canMove: this.canMove(this.props),
        canResizeLeft: this.canResizeLeft(this.props),
        canResizeRight: this.canResizeRight(this.props),
        selected: this.props.selected,
        dragging: this.state.dragging,
        dragStart: this.state.dragStart,
        dragTime: this.state.dragTime,
        dragGroupDelta: this.state.dragGroupDelta,
        resizing: this.state.resizing,
        resizeEdge: this.state.resizeEdge,
        resizeStart: this.state.resizeStart,
        resizeTime: this.state.resizeTime,
        width: this.props.dimensions.width
      };
      return this.props.itemRenderer({
        item: this.props.item,
        timelineContext: timelineContext,
        itemContext: itemContext,
        getItemProps: this.getItemProps,
        getResizeProps: this.getResizeProps
      });
    }
  }]);

  return Item;
}(_react.Component);

exports["default"] = Item;

_defineProperty(Item, "propTypes", {
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  order: _propTypes["default"].object,
  dragSnap: _propTypes["default"].number,
  minResizeWidth: _propTypes["default"].number,
  selected: _propTypes["default"].bool,
  canChangeGroup: _propTypes["default"].bool.isRequired,
  canMove: _propTypes["default"].bool.isRequired,
  canResizeLeft: _propTypes["default"].bool.isRequired,
  canResizeRight: _propTypes["default"].bool.isRequired,
  keys: _propTypes["default"].object.isRequired,
  item: _propTypes["default"].object.isRequired,
  onSelect: _propTypes["default"].func,
  onDrag: _propTypes["default"].func,
  onDrop: _propTypes["default"].func,
  onResizing: _propTypes["default"].func,
  onResized: _propTypes["default"].func,
  onContextMenu: _propTypes["default"].func,
  itemRenderer: _propTypes["default"].func,
  itemProps: _propTypes["default"].object,
  canSelect: _propTypes["default"].bool,
  dimensions: _propTypes["default"].object,
  groupTops: _propTypes["default"].array,
  useResizeHandle: _propTypes["default"].bool,
  moveResizeValidator: _propTypes["default"].func,
  onItemDoubleClick: _propTypes["default"].func,
  scrollRef: _propTypes["default"].object
});

_defineProperty(Item, "defaultProps", {
  selected: false,
  itemRenderer: _defaultItemRenderer.defaultItemRenderer
});

_defineProperty(Item, "contextTypes", {
  getTimelineContext: _propTypes["default"].func
});

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/items/Items.js":
/*!**********************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/items/Items.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _Item = _interopRequireDefault(__webpack_require__(/*! ./Item */ "../node_modules/react-calendar-timeline/lib/lib/items/Item.js"));

var _generic = __webpack_require__(/*! ../utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var canResizeLeft = function canResizeLeft(item, canResize) {
  var value = (0, _generic._get)(item, 'canResize') !== undefined ? (0, _generic._get)(item, 'canResize') : canResize;
  return value === 'left' || value === 'both';
};

var canResizeRight = function canResizeRight(item, canResize) {
  var value = (0, _generic._get)(item, 'canResize') !== undefined ? (0, _generic._get)(item, 'canResize') : canResize;
  return value === 'right' || value === 'both' || value === true;
};

var Items =
/*#__PURE__*/
function (_Component) {
  _inherits(Items, _Component);

  function Items() {
    _classCallCheck(this, Items);

    return _possibleConstructorReturn(this, _getPrototypeOf(Items).apply(this, arguments));
  }

  _createClass(Items, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !((0, _generic.arraysEqual)(nextProps.groups, this.props.groups) && (0, _generic.arraysEqual)(nextProps.items, this.props.items) && (0, _generic.arraysEqual)(nextProps.dimensionItems, this.props.dimensionItems) && nextProps.keys === this.props.keys && nextProps.canvasTimeStart === this.props.canvasTimeStart && nextProps.canvasTimeEnd === this.props.canvasTimeEnd && nextProps.canvasWidth === this.props.canvasWidth && nextProps.selectedItem === this.props.selectedItem && nextProps.selected === this.props.selected && nextProps.dragSnap === this.props.dragSnap && nextProps.minResizeWidth === this.props.minResizeWidth && nextProps.canChangeGroup === this.props.canChangeGroup && nextProps.canMove === this.props.canMove && nextProps.canResize === this.props.canResize && nextProps.canSelect === this.props.canSelect);
    }
  }, {
    key: "isSelected",
    value: function isSelected(item, itemIdKey) {
      if (!this.props.selected) {
        return this.props.selectedItem === (0, _generic._get)(item, itemIdKey);
      } else {
        var target = (0, _generic._get)(item, itemIdKey);
        return this.props.selected.includes(target);
      }
    }
  }, {
    key: "getVisibleItems",
    value: function getVisibleItems(canvasTimeStart, canvasTimeEnd) {
      var _this$props = this.props,
          keys = _this$props.keys,
          items = _this$props.items;
      return (0, _calendar.getVisibleItems)(items, canvasTimeStart, canvasTimeEnd, keys);
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          canvasTimeStart = _this$props2.canvasTimeStart,
          canvasTimeEnd = _this$props2.canvasTimeEnd,
          dimensionItems = _this$props2.dimensionItems,
          keys = _this$props2.keys,
          groups = _this$props2.groups;
      var itemIdKey = keys.itemIdKey,
          itemGroupKey = keys.itemGroupKey;
      var groupOrders = (0, _calendar.getGroupOrders)(groups, keys);
      var visibleItems = this.getVisibleItems(canvasTimeStart, canvasTimeEnd, groupOrders);
      var sortedDimensionItems = (0, _generic.keyBy)(dimensionItems, 'id');
      return _react["default"].createElement("div", {
        className: "rct-items"
      }, visibleItems.filter(function (item) {
        return sortedDimensionItems[(0, _generic._get)(item, itemIdKey)];
      }).map(function (item) {
        return _react["default"].createElement(_Item["default"], {
          key: (0, _generic._get)(item, itemIdKey),
          item: item,
          keys: _this.props.keys,
          order: groupOrders[(0, _generic._get)(item, itemGroupKey)],
          dimensions: sortedDimensionItems[(0, _generic._get)(item, itemIdKey)].dimensions,
          selected: _this.isSelected(item, itemIdKey),
          canChangeGroup: (0, _generic._get)(item, 'canChangeGroup') !== undefined ? (0, _generic._get)(item, 'canChangeGroup') : _this.props.canChangeGroup,
          canMove: (0, _generic._get)(item, 'canMove') !== undefined ? (0, _generic._get)(item, 'canMove') : _this.props.canMove,
          canResizeLeft: canResizeLeft(item, _this.props.canResize),
          canResizeRight: canResizeRight(item, _this.props.canResize),
          canSelect: (0, _generic._get)(item, 'canSelect') !== undefined ? (0, _generic._get)(item, 'canSelect') : _this.props.canSelect,
          useResizeHandle: _this.props.useResizeHandle,
          groupTops: _this.props.groupTops,
          canvasTimeStart: _this.props.canvasTimeStart,
          canvasTimeEnd: _this.props.canvasTimeEnd,
          canvasWidth: _this.props.canvasWidth,
          dragSnap: _this.props.dragSnap,
          minResizeWidth: _this.props.minResizeWidth,
          onResizing: _this.props.itemResizing,
          onResized: _this.props.itemResized,
          moveResizeValidator: _this.props.moveResizeValidator,
          onDrag: _this.props.itemDrag,
          onDrop: _this.props.itemDrop,
          onItemDoubleClick: _this.props.onItemDoubleClick,
          onContextMenu: _this.props.onItemContextMenu,
          onSelect: _this.props.itemSelect,
          itemRenderer: _this.props.itemRenderer,
          scrollRef: _this.props.scrollRef
        });
      }));
    }
  }]);

  return Items;
}(_react.Component);

exports["default"] = Items;

_defineProperty(Items, "propTypes", {
  groups: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  items: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  dragSnap: _propTypes["default"].number,
  minResizeWidth: _propTypes["default"].number,
  selectedItem: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].number]),
  canChangeGroup: _propTypes["default"].bool.isRequired,
  canMove: _propTypes["default"].bool.isRequired,
  canResize: _propTypes["default"].oneOf([true, false, 'left', 'right', 'both']),
  canSelect: _propTypes["default"].bool,
  keys: _propTypes["default"].object.isRequired,
  moveResizeValidator: _propTypes["default"].func,
  itemSelect: _propTypes["default"].func,
  itemDrag: _propTypes["default"].func,
  itemDrop: _propTypes["default"].func,
  itemResizing: _propTypes["default"].func,
  itemResized: _propTypes["default"].func,
  onItemDoubleClick: _propTypes["default"].func,
  onItemContextMenu: _propTypes["default"].func,
  itemRenderer: _propTypes["default"].func,
  selected: _propTypes["default"].array,
  dimensionItems: _propTypes["default"].array,
  groupTops: _propTypes["default"].array,
  useResizeHandle: _propTypes["default"].bool,
  scrollRef: _propTypes["default"].object
});

_defineProperty(Items, "defaultProps", {
  selected: []
});

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/items/defaultItemRenderer.js":
/*!************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/items/defaultItemRenderer.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultItemRenderer = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultItemRenderer = function defaultItemRenderer(_ref) {
  var item = _ref.item,
      itemContext = _ref.itemContext,
      getItemProps = _ref.getItemProps,
      getResizeProps = _ref.getResizeProps;

  var _getResizeProps = getResizeProps(),
      leftResizeProps = _getResizeProps.left,
      rightResizeProps = _getResizeProps.right;

  return _react["default"].createElement("div", getItemProps(item.itemProps), itemContext.useResizeHandle ? _react["default"].createElement("div", leftResizeProps) : '', _react["default"].createElement("div", {
    className: "rct-item-content",
    style: {
      maxHeight: "".concat(itemContext.dimensions.height)
    }
  }, itemContext.title), itemContext.useResizeHandle ? _react["default"].createElement("div", rightResizeProps) : '');
}; // TODO: update this to actual prop types. Too much to change before release
// future me, forgive me.


exports.defaultItemRenderer = defaultItemRenderer;
defaultItemRenderer.propTypes = {
  item: _propTypes["default"].any,
  itemContext: _propTypes["default"].any,
  getItemProps: _propTypes["default"].any,
  getResizeProps: _propTypes["default"].any
};

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/items/styles.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/items/styles.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rightResizeStyle = exports.leftResizeStyle = exports.selectedAndCanResizeRightAndDragRight = exports.selectedAndCanResizeRight = exports.selectedAndCanResizeLeftAndDragLeft = exports.selectedAndCanResizeLeft = exports.selectedAndCanMove = exports.selectedStyle = exports.overridableStyles = void 0;
var overridableStyles = {
  fontSize: 12,
  color: 'white',
  cursor: 'pointer',
  background: '#2196f3',
  border: '1px solid #1a6fb3',
  zIndex: 80
};
exports.overridableStyles = overridableStyles;
var selectedStyle = {
  background: '#ffc107',
  border: '1px solid #ff9800',
  zIndex: 82
};
exports.selectedStyle = selectedStyle;
var selectedAndCanMove = {
  cursor: 'move'
};
exports.selectedAndCanMove = selectedAndCanMove;
var selectedAndCanResizeLeft = {
  borderLeftWidth: 3
};
exports.selectedAndCanResizeLeft = selectedAndCanResizeLeft;
var selectedAndCanResizeLeftAndDragLeft = {
  cursor: 'w-resize'
};
exports.selectedAndCanResizeLeftAndDragLeft = selectedAndCanResizeLeftAndDragLeft;
var selectedAndCanResizeRight = {
  borderRightWidth: 3
};
exports.selectedAndCanResizeRight = selectedAndCanResizeRight;
var selectedAndCanResizeRightAndDragRight = {
  cursor: 'e-resize'
};
exports.selectedAndCanResizeRightAndDragRight = selectedAndCanResizeRightAndDragRight;
var leftResizeStyle = {
  position: "absolute",
  width: 24,
  maxWidth: "20%",
  minWidth: 2,
  height: "100%",
  top: 0,
  left: 0,
  cursor: "pointer",
  zIndex: 88
};
exports.leftResizeStyle = leftResizeStyle;
var rightResizeStyle = {
  position: "absolute",
  width: 24,
  maxWidth: "20%",
  minWidth: 2,
  height: "100%",
  top: 0,
  right: 0,
  cursor: "pointer",
  zIndex: 88
};
exports.rightResizeStyle = rightResizeStyle;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/layout/Sidebar.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/layout/Sidebar.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _generic = __webpack_require__(/*! ../utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sidebar =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidebar, _Component);

  function Sidebar() {
    _classCallCheck(this, Sidebar);

    return _possibleConstructorReturn(this, _getPrototypeOf(Sidebar).apply(this, arguments));
  }

  _createClass(Sidebar, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(nextProps.keys === this.props.keys && nextProps.width === this.props.width && nextProps.height === this.props.height && (0, _generic.arraysEqual)(nextProps.groups, this.props.groups) && (0, _generic.arraysEqual)(nextProps.groupHeights, this.props.groupHeights));
    }
  }, {
    key: "renderGroupContent",
    value: function renderGroupContent(group, isRightSidebar, groupTitleKey, groupRightTitleKey) {
      if (this.props.groupRenderer) {
        return _react["default"].createElement(this.props.groupRenderer, {
          group: group,
          isRightSidebar: isRightSidebar
        });
      } else {
        return (0, _generic._get)(group, isRightSidebar ? groupRightTitleKey : groupTitleKey);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          width = _this$props.width,
          groupHeights = _this$props.groupHeights,
          height = _this$props.height,
          isRightSidebar = _this$props.isRightSidebar;
      var _this$props$keys = this.props.keys,
          groupIdKey = _this$props$keys.groupIdKey,
          groupTitleKey = _this$props$keys.groupTitleKey,
          groupRightTitleKey = _this$props$keys.groupRightTitleKey;
      var sidebarStyle = {
        width: "".concat(width, "px"),
        height: "".concat(height, "px")
      };
      var groupsStyle = {
        width: "".concat(width, "px")
      };
      var groupLines = this.props.groups.map(function (group, index) {
        var elementStyle = {
          height: "".concat(groupHeights[index], "px"),
          lineHeight: "".concat(groupHeights[index], "px")
        };
        return _react["default"].createElement("div", {
          key: (0, _generic._get)(group, groupIdKey),
          className: 'rct-sidebar-row rct-sidebar-row-' + (index % 2 === 0 ? 'even' : 'odd'),
          style: elementStyle
        }, _this.renderGroupContent(group, isRightSidebar, groupTitleKey, groupRightTitleKey));
      });
      return _react["default"].createElement("div", {
        className: 'rct-sidebar' + (isRightSidebar ? ' rct-sidebar-right' : ''),
        style: sidebarStyle
      }, _react["default"].createElement("div", {
        style: groupsStyle
      }, groupLines));
    }
  }]);

  return Sidebar;
}(_react.Component);

exports["default"] = Sidebar;

_defineProperty(Sidebar, "propTypes", {
  groups: _propTypes["default"].oneOfType([_propTypes["default"].array, _propTypes["default"].object]).isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  groupHeights: _propTypes["default"].array.isRequired,
  keys: _propTypes["default"].object.isRequired,
  groupRenderer: _propTypes["default"].func,
  isRightSidebar: _propTypes["default"].bool
});

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvas.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvas.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _MarkerCanvasContext = __webpack_require__(/*! ./MarkerCanvasContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvasContext.js");

var _TimelineMarkersRenderer = _interopRequireDefault(__webpack_require__(/*! ./TimelineMarkersRenderer */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersRenderer.js"));

var _TimelineStateContext = __webpack_require__(/*! ../timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// expand to fill entire parent container (ScrollElement)
var staticStyles = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
  /**
   * Renders registered markers and exposes a mouse over listener for
   * CursorMarkers to subscribe to
   */

};

var MarkerCanvas =
/*#__PURE__*/
function (_React$Component) {
  _inherits(MarkerCanvas, _React$Component);

  function MarkerCanvas() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MarkerCanvas);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MarkerCanvas)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (evt) {
      if (_this.subscription != null) {
        var pageX = evt.pageX; // FIXME: dont use getBoundingClientRect. Use passed in scroll amount

        var _this$containerEl$get = _this.containerEl.getBoundingClientRect(),
            containerLeft = _this$containerEl$get.left; // number of pixels from left we are on canvas
        // we do this calculation as pageX is based on x from viewport whereas
        // our canvas can be scrolled left and right and is generally outside
        // of the viewport.  This calculation is to get how many pixels the cursor
        // is from left of this element


        var canvasX = pageX - containerLeft;

        var date = _this.props.getDateFromLeftOffsetPosition(canvasX);

        _this.subscription({
          leftOffset: canvasX,
          date: date,
          isCursorOverCanvas: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      if (_this.subscription != null) {
        // tell subscriber that we're not on canvas
        _this.subscription({
          leftOffset: 0,
          date: 0,
          isCursorOverCanvas: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMoveSubscribe", function (sub) {
      _this.subscription = sub;
      return function () {
        _this.subscription = null;
      };
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      subscribeToMouseOver: _this.handleMouseMoveSubscribe
    });

    return _this;
  }

  _createClass(MarkerCanvas, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react["default"].createElement(_MarkerCanvasContext.MarkerCanvasProvider, {
        value: this.state
      }, _react["default"].createElement("div", {
        style: staticStyles,
        onMouseMove: this.handleMouseMove,
        onMouseLeave: this.handleMouseLeave,
        ref: function ref(el) {
          return _this2.containerEl = el;
        }
      }, _react["default"].createElement(_TimelineMarkersRenderer["default"], null), this.props.children));
    }
  }]);

  return MarkerCanvas;
}(_react["default"].Component);

_defineProperty(MarkerCanvas, "propTypes", {
  getDateFromLeftOffsetPosition: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node
});

var MarkerCanvasWrapper = function MarkerCanvasWrapper(props) {
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
    var getDateFromLeftOffsetPosition = _ref.getDateFromLeftOffsetPosition;
    return _react["default"].createElement(MarkerCanvas, _extends({
      getDateFromLeftOffsetPosition: getDateFromLeftOffsetPosition
    }, props));
  });
};

var _default = MarkerCanvasWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvasContext.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvasContext.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MarkerCanvasConsumer = exports.MarkerCanvasProvider = void 0;

var _createReactContext2 = _interopRequireDefault(__webpack_require__(/*! create-react-context */ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var defaultContextState = {
  subscribeToMouseOver: function subscribeToMouseOver() {
    console.warn('"subscribeToMouseOver" default func is being used');
  }
  /* eslint-enable */

};

var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
    Consumer = _createReactContext.Consumer,
    Provider = _createReactContext.Provider;

var MarkerCanvasProvider = Provider;
exports.MarkerCanvasProvider = MarkerCanvasProvider;
var MarkerCanvasConsumer = Consumer;
exports.MarkerCanvasConsumer = MarkerCanvasConsumer;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineMarkersConsumer = exports.TimelineMarkersProvider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _createReactContext2 = _interopRequireDefault(__webpack_require__(/*! create-react-context */ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js"));

var _generic = __webpack_require__(/*! ../utility/generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultContextState = {
  markers: [],
  subscribeMarker: function subscribeMarker() {
    // eslint-disable-next-line
    console.warn('default subscribe marker used');
    return _generic.noop;
  }
};

var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
    Consumer = _createReactContext.Consumer,
    Provider = _createReactContext.Provider; // REVIEW: is this the best way to manage ids?


var _id = 0;

var createId = function createId() {
  _id += 1;
  return _id + 1;
};

var TimelineMarkersProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelineMarkersProvider, _React$Component);

  function TimelineMarkersProvider() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimelineMarkersProvider);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimelineMarkersProvider)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSubscribeToMarker", function (newMarker) {
      newMarker = _objectSpread({}, newMarker, {
        // REVIEW: in the event that we accept id to be passed to the Marker components, this line would override those
        id: createId()
      });

      _this.setState(function (state) {
        return {
          markers: [].concat(_toConsumableArray(state.markers), [newMarker])
        };
      });

      return {
        unsubscribe: function unsubscribe() {
          _this.setState(function (state) {
            return {
              markers: state.markers.filter(function (marker) {
                return marker.id !== newMarker.id;
              })
            };
          });
        },
        getMarker: function getMarker() {
          return newMarker;
        }
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleUpdateMarker", function (updateMarker) {
      var markerIndex = _this.state.markers.findIndex(function (marker) {
        return marker.id === updateMarker.id;
      });

      if (markerIndex < 0) return;

      _this.setState(function (state) {
        return {
          markers: [].concat(_toConsumableArray(state.markers.slice(0, markerIndex)), [updateMarker], _toConsumableArray(state.markers.slice(markerIndex + 1)))
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      markers: [],
      subscribeMarker: _this.handleSubscribeToMarker,
      updateMarker: _this.handleUpdateMarker
    });

    return _this;
  }

  _createClass(TimelineMarkersProvider, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return TimelineMarkersProvider;
}(_react["default"].Component);

exports.TimelineMarkersProvider = TimelineMarkersProvider;

_defineProperty(TimelineMarkersProvider, "propTypes", {
  children: _propTypes["default"].element.isRequired
});

var TimelineMarkersConsumer = Consumer;
exports.TimelineMarkersConsumer = TimelineMarkersConsumer;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersRenderer.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersRenderer.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _TimelineMarkersContext = __webpack_require__(/*! ./TimelineMarkersContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js");

var _markerType = __webpack_require__(/*! ./markerType */ "../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js");

var _TodayMarker = _interopRequireDefault(__webpack_require__(/*! ./implementations/TodayMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/TodayMarker.js"));

var _CustomMarker = _interopRequireDefault(__webpack_require__(/*! ./implementations/CustomMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CustomMarker.js"));

var _TimelineStateContext = __webpack_require__(/*! ../timeline/TimelineStateContext */ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js");

var _CursorMarker = _interopRequireDefault(__webpack_require__(/*! ./implementations/CursorMarker */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CursorMarker.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/** Internal component used in timeline to render markers registered */
var TimelineMarkersRenderer = function TimelineMarkersRenderer() {
  return _react["default"].createElement(_TimelineStateContext.TimelineStateConsumer, null, function (_ref) {
    var getLeftOffsetFromDate = _ref.getLeftOffsetFromDate;
    return _react["default"].createElement(_TimelineMarkersContext.TimelineMarkersConsumer, null, function (_ref2) {
      var markers = _ref2.markers;
      return markers.map(function (marker) {
        switch (marker.type) {
          case _markerType.TimelineMarkerType.Today:
            return _react["default"].createElement(_TodayMarker["default"], {
              key: marker.id,
              getLeftOffsetFromDate: getLeftOffsetFromDate,
              renderer: marker.renderer,
              interval: marker.interval
            });

          case _markerType.TimelineMarkerType.Custom:
            return _react["default"].createElement(_CustomMarker["default"], {
              key: marker.id,
              renderer: marker.renderer,
              date: marker.date,
              getLeftOffsetFromDate: getLeftOffsetFromDate
            });

          case _markerType.TimelineMarkerType.Cursor:
            return _react["default"].createElement(_CursorMarker["default"], {
              key: marker.id,
              renderer: marker.renderer,
              getLeftOffsetFromDate: getLeftOffsetFromDate
            });

          default:
            return null;
        }
      });
    });
  });
};

var _default = TimelineMarkersRenderer;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CursorMarker.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CursorMarker.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _shared = __webpack_require__(/*! ./shared */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/shared.js");

var _MarkerCanvasContext = __webpack_require__(/*! ../MarkerCanvasContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/MarkerCanvasContext.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRenderer = (0, _shared.createDefaultRenderer)('default-cursor-marker');
/**
 * CursorMarker implementation subscribes to 'subscribeToCanvasMouseOver' on mount.
 * This subscription is passed in via MarkerCanvasConsumer, which is wired up to
 * MarkerCanvasProvider in the MarkerCanvas component. When the user mouses over MarkerCanvas,
 * the callback registered in CursorMarker (this component) is passed:
 *  leftOffset - pixels from left edge of canvas, used to position this element
 *  date - the date the cursor pertains to
 *  isCursorOverCanvas - whether the user cursor is over the canvas. This is set to 'false'
 *  when the user mouseleaves the element
 */

var CursorMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CursorMarker, _React$Component);

  function CursorMarker() {
    var _this;

    _classCallCheck(this, CursorMarker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CursorMarker).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleCanvasMouseOver", function (_ref) {
      var leftOffset = _ref.leftOffset,
          date = _ref.date,
          isCursorOverCanvas = _ref.isCursorOverCanvas;

      _this.setState({
        leftOffset: leftOffset,
        date: date,
        isShowingCursor: isCursorOverCanvas
      });
    });

    _this.state = {
      leftOffset: 0,
      date: 0,
      isShowingCursor: false
    };
    return _this;
  }

  _createClass(CursorMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unsubscribe = this.props.subscribeToCanvasMouseOver(this.handleCanvasMouseOver);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe != null) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isShowingCursor = _this$state.isShowingCursor,
          leftOffset = _this$state.leftOffset,
          date = _this$state.date;
      if (!isShowingCursor) return null;
      var styles = (0, _shared.createMarkerStylesWithLeftOffset)(leftOffset);
      return this.props.renderer({
        styles: styles,
        date: date
      });
    }
  }]);

  return CursorMarker;
}(_react["default"].Component); // TODO: turn into HOC?


_defineProperty(CursorMarker, "propTypes", {
  subscribeToCanvasMouseOver: _propTypes["default"].func.isRequired,
  renderer: _propTypes["default"].func
});

_defineProperty(CursorMarker, "defaultProps", {
  renderer: defaultRenderer
});

var CursorMarkerWrapper = function CursorMarkerWrapper(props) {
  return _react["default"].createElement(_MarkerCanvasContext.MarkerCanvasConsumer, null, function (_ref2) {
    var subscribeToMouseOver = _ref2.subscribeToMouseOver;
    return _react["default"].createElement(CursorMarker, _extends({
      subscribeToCanvasMouseOver: subscribeToMouseOver
    }, props));
  });
};

CursorMarkerWrapper.displayName = 'CursorMarkerWrapper';
var _default = CursorMarkerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CustomMarker.js":
/*!***********************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/implementations/CustomMarker.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _shared = __webpack_require__(/*! ./shared */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultCustomMarkerRenderer = (0, _shared.createDefaultRenderer)('default-customer-marker-id');
/**
 * CustomMarker that is placed based on passed in date prop
 */

var CustomMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomMarker, _React$Component);

  function CustomMarker() {
    _classCallCheck(this, CustomMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomMarker).apply(this, arguments));
  }

  _createClass(CustomMarker, [{
    key: "render",
    value: function render() {
      var date = this.props.date;
      var leftOffset = this.props.getLeftOffsetFromDate(date);
      var styles = (0, _shared.createMarkerStylesWithLeftOffset)(leftOffset);
      return this.props.renderer({
        styles: styles,
        date: date
      });
    }
  }]);

  return CustomMarker;
}(_react["default"].Component);

_defineProperty(CustomMarker, "propTypes", {
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired,
  renderer: _propTypes["default"].func,
  date: _propTypes["default"].number.isRequired
});

_defineProperty(CustomMarker, "defaultProps", {
  renderer: defaultCustomMarkerRenderer
});

var _default = CustomMarker;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/TodayMarker.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/implementations/TodayMarker.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _shared = __webpack_require__(/*! ./shared */ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/shared.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultRenderer = (0, _shared.createDefaultRenderer)('default-today-line');
/** Marker that is placed based on current date.  This component updates itself on
 * a set interval, dictated by the 'interval' prop.
 */

var TodayMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodayMarker, _React$Component);

  function TodayMarker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TodayMarker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TodayMarker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      date: Date.now()
    });

    return _this;
  }

  _createClass(TodayMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.intervalToken = this.createIntervalUpdater(this.props.interval);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.interval !== this.props.interval) {
        clearInterval(this.intervalToken);
        this.intervalToken = this.createIntervalUpdater(this.props.interval);
      }
    }
  }, {
    key: "createIntervalUpdater",
    value: function createIntervalUpdater(interval) {
      var _this2 = this;

      return setInterval(function () {
        _this2.setState({
          date: Date.now() // FIXME: use date utils pass in as props

        });
      }, interval);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearInterval(this.intervalToken);
    }
  }, {
    key: "render",
    value: function render() {
      var date = this.state.date;
      var leftOffset = this.props.getLeftOffsetFromDate(date);
      var styles = (0, _shared.createMarkerStylesWithLeftOffset)(leftOffset);
      return this.props.renderer({
        styles: styles,
        date: date
      });
    }
  }]);

  return TodayMarker;
}(_react["default"].Component);

_defineProperty(TodayMarker, "propTypes", {
  getLeftOffsetFromDate: _propTypes["default"].func.isRequired,
  renderer: _propTypes["default"].func,
  interval: _propTypes["default"].number.isRequired
});

_defineProperty(TodayMarker, "defaultProps", {
  renderer: defaultRenderer
});

var _default = TodayMarker;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/implementations/shared.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/implementations/shared.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createDefaultRenderer = exports.createMarkerStylesWithLeftOffset = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Baseline styles to get the marker to render correctly
 */
var criticalStyles = {
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '2px',
  backgroundColor: 'black',
  // by default, pointer events (specifically click) will
  // "pass through".  This is added so that CursorMarker
  // will not get in the way of canvas click
  pointerEvents: 'none' // FIXME: this creates a new object each time in render
  // might want to memoize this?

};

var createMarkerStylesWithLeftOffset = function createMarkerStylesWithLeftOffset(leftOffset) {
  return _objectSpread({}, criticalStyles, {
    left: leftOffset
  });
};

exports.createMarkerStylesWithLeftOffset = createMarkerStylesWithLeftOffset;

var createDefaultRenderer = function createDefaultRenderer(dataTestidValue) {
  // eslint-disable-next-line
  return function DefaultMarkerRenderer(_ref) {
    var styles = _ref.styles;
    return _react["default"].createElement("div", {
      style: styles
    });
  };
};

exports.createDefaultRenderer = createDefaultRenderer;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineMarkerType = void 0;
var TimelineMarkerType = {
  Today: 'Today',
  Custom: 'Custom',
  Cursor: 'Cursor'
};
exports.TimelineMarkerType = TimelineMarkerType;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/public/CursorMarker.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/public/CursorMarker.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _TimelineMarkersContext = __webpack_require__(/*! ../TimelineMarkersContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js");

var _markerType = __webpack_require__(/*! ../markerType */ "../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CursorMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CursorMarker, _React$Component);

  function CursorMarker() {
    _classCallCheck(this, CursorMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(CursorMarker).apply(this, arguments));
  }

  _createClass(CursorMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$subscribe = this.props.subscribeMarker({
        type: _markerType.TimelineMarkerType.Cursor,
        renderer: this.props.children
      }),
          unsubscribe = _this$props$subscribe.unsubscribe;

      this.unsubscribe = unsubscribe;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe != null) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return CursorMarker;
}(_react["default"].Component); // TODO: turn into HOC?


_defineProperty(CursorMarker, "propTypes", {
  subscribeMarker: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].func
});

var CursorMarkerWrapper = function CursorMarkerWrapper(props) {
  return _react["default"].createElement(_TimelineMarkersContext.TimelineMarkersConsumer, null, function (_ref) {
    var subscribeMarker = _ref.subscribeMarker;
    return _react["default"].createElement(CursorMarker, _extends({
      subscribeMarker: subscribeMarker
    }, props));
  });
};

CursorMarkerWrapper.displayName = 'CursorMarkerWrapper';
var _default = CursorMarkerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/public/CustomMarker.js":
/*!**************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/public/CustomMarker.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _TimelineMarkersContext = __webpack_require__(/*! ../TimelineMarkersContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js");

var _markerType = __webpack_require__(/*! ../markerType */ "../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CustomMarker, _React$Component);

  function CustomMarker() {
    _classCallCheck(this, CustomMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(CustomMarker).apply(this, arguments));
  }

  _createClass(CustomMarker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.date !== this.props.date && this.getMarker) {
        var marker = this.getMarker();
        this.props.updateMarker(_objectSpread({}, marker, {
          date: this.props.date
        }));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$subscribe = this.props.subscribeMarker({
        type: _markerType.TimelineMarkerType.Custom,
        renderer: this.props.children,
        date: this.props.date
      }),
          unsubscribe = _this$props$subscribe.unsubscribe,
          getMarker = _this$props$subscribe.getMarker;

      this.unsubscribe = unsubscribe;
      this.getMarker = getMarker;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe != null) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return CustomMarker;
}(_react["default"].Component); // TODO: turn into HOC?


_defineProperty(CustomMarker, "propTypes", {
  subscribeMarker: _propTypes["default"].func.isRequired,
  updateMarker: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].func,
  date: _propTypes["default"].number.isRequired
});

var CustomMarkerWrapper = function CustomMarkerWrapper(props) {
  return _react["default"].createElement(_TimelineMarkersContext.TimelineMarkersConsumer, null, function (_ref) {
    var subscribeMarker = _ref.subscribeMarker,
        updateMarker = _ref.updateMarker;
    return _react["default"].createElement(CustomMarker, _extends({
      subscribeMarker: subscribeMarker,
      updateMarker: updateMarker
    }, props));
  });
};

CustomMarkerWrapper.displayName = 'CustomMarkerWrapper';
var _default = CustomMarkerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/public/TimelineMarkers.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/public/TimelineMarkers.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

// Is this necessary? The initial reason for including this is for organization sake in the
// user code e.g.

/*
<Timeline {...otherProps}>
  <TimelineMarkers> // would there be props passed in here?
    <TodayLine />
    <CursorLine />
    <CustomLine />
  </TimelineMarkers>
</Timeline>

*/
// If we decide to pass in props to TimelineMarkers, then yes, this is necessary.
var TimelineMarkers = function TimelineMarkers(props) {
  return props.children || null;
};

var _default = TimelineMarkers;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/markers/public/TodayMarker.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/markers/public/TodayMarker.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _TimelineMarkersContext = __webpack_require__(/*! ../TimelineMarkersContext */ "../node_modules/react-calendar-timeline/lib/lib/markers/TimelineMarkersContext.js");

var _markerType = __webpack_require__(/*! ../markerType */ "../node_modules/react-calendar-timeline/lib/lib/markers/markerType.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TodayMarker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TodayMarker, _React$Component);

  function TodayMarker() {
    _classCallCheck(this, TodayMarker);

    return _possibleConstructorReturn(this, _getPrototypeOf(TodayMarker).apply(this, arguments));
  }

  _createClass(TodayMarker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$subscribe = this.props.subscribeMarker({
        type: _markerType.TimelineMarkerType.Today,
        renderer: this.props.children,
        interval: this.props.interval
      }),
          unsubscribe = _this$props$subscribe.unsubscribe,
          getMarker = _this$props$subscribe.getMarker;

      this.unsubscribe = unsubscribe;
      this.getMarker = getMarker;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribe != null) {
        this.unsubscribe();
        this.unsubscribe = null;
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.interval !== this.props.interval && this.getMarker) {
        var marker = this.getMarker();
        this.props.updateMarker(_objectSpread({}, marker, {
          interval: this.props.interval
        }));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return TodayMarker;
}(_react["default"].Component); // TODO: turn into HOC?


_defineProperty(TodayMarker, "propTypes", {
  subscribeMarker: _propTypes["default"].func.isRequired,
  updateMarker: _propTypes["default"].func.isRequired,
  interval: _propTypes["default"].number,
  children: _propTypes["default"].func
});

_defineProperty(TodayMarker, "defaultProps", {
  interval: 1000 * 10 // default to ten seconds

});

var TodayMarkerWrapper = function TodayMarkerWrapper(props) {
  return _react["default"].createElement(_TimelineMarkersContext.TimelineMarkersConsumer, null, function (_ref) {
    var subscribeMarker = _ref.subscribeMarker,
        updateMarker = _ref.updateMarker;
    return _react["default"].createElement(TodayMarker, _extends({
      subscribeMarker: subscribeMarker,
      updateMarker: updateMarker
    }, props));
  });
};

TodayMarkerWrapper.displayName = 'TodayMarkerWrapper';
var _default = TodayMarkerWrapper;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/row/GroupRow.js":
/*!***********************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/row/GroupRow.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _PreventClickOnDrag = _interopRequireDefault(__webpack_require__(/*! ../interaction/PreventClickOnDrag */ "../node_modules/react-calendar-timeline/lib/lib/interaction/PreventClickOnDrag.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupRow =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupRow, _Component);

  function GroupRow() {
    _classCallCheck(this, GroupRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(GroupRow).apply(this, arguments));
  }

  _createClass(GroupRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onContextMenu = _this$props.onContextMenu,
          onDoubleClick = _this$props.onDoubleClick,
          isEvenRow = _this$props.isEvenRow,
          style = _this$props.style,
          onClick = _this$props.onClick,
          clickTolerance = _this$props.clickTolerance,
          horizontalLineClassNamesForGroup = _this$props.horizontalLineClassNamesForGroup,
          group = _this$props.group;
      var classNamesForGroup = [];

      if (horizontalLineClassNamesForGroup) {
        classNamesForGroup = horizontalLineClassNamesForGroup(group);
      }

      return _react["default"].createElement(_PreventClickOnDrag["default"], {
        clickTolerance: clickTolerance,
        onClick: onClick
      }, _react["default"].createElement("div", {
        onContextMenu: onContextMenu,
        onDoubleClick: onDoubleClick,
        className: (isEvenRow ? 'rct-hl-even ' : 'rct-hl-odd ') + (classNamesForGroup ? classNamesForGroup.join(' ') : ''),
        style: style
      }));
    }
  }]);

  return GroupRow;
}(_react.Component);

_defineProperty(GroupRow, "propTypes", {
  onClick: _propTypes["default"].func.isRequired,
  onDoubleClick: _propTypes["default"].func.isRequired,
  onContextMenu: _propTypes["default"].func.isRequired,
  isEvenRow: _propTypes["default"].bool.isRequired,
  style: _propTypes["default"].object.isRequired,
  clickTolerance: _propTypes["default"].number.isRequired,
  group: _propTypes["default"].object.isRequired,
  horizontalLineClassNamesForGroup: _propTypes["default"].func
});

var _default = GroupRow;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/row/GroupRows.js":
/*!************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/row/GroupRows.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _GroupRow = _interopRequireDefault(__webpack_require__(/*! ./GroupRow */ "../node_modules/react-calendar-timeline/lib/lib/row/GroupRow.js"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GroupRows =
/*#__PURE__*/
function (_Component) {
  _inherits(GroupRows, _Component);

  function GroupRows() {
    _classCallCheck(this, GroupRows);

    return _possibleConstructorReturn(this, _getPrototypeOf(GroupRows).apply(this, arguments));
  }

  _createClass(GroupRows, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      return !(nextProps.canvasWidth === this.props.canvasWidth && nextProps.lineCount === this.props.lineCount && nextProps.groupHeights === this.props.groupHeights && nextProps.groups === this.props.groups);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          canvasWidth = _this$props.canvasWidth,
          lineCount = _this$props.lineCount,
          groupHeights = _this$props.groupHeights,
          onRowClick = _this$props.onRowClick,
          onRowDoubleClick = _this$props.onRowDoubleClick,
          clickTolerance = _this$props.clickTolerance,
          groups = _this$props.groups,
          horizontalLineClassNamesForGroup = _this$props.horizontalLineClassNamesForGroup,
          onRowContextClick = _this$props.onRowContextClick;
      var lines = [];

      var _loop = function _loop(i) {
        lines.push(_react["default"].createElement(_GroupRow["default"], {
          clickTolerance: clickTolerance,
          onContextMenu: function onContextMenu(evt) {
            return onRowContextClick(evt, i);
          },
          onClick: function onClick(evt) {
            return onRowClick(evt, i);
          },
          onDoubleClick: function onDoubleClick(evt) {
            return onRowDoubleClick(evt, i);
          },
          key: "horizontal-line-".concat(i),
          isEvenRow: i % 2 === 0,
          group: groups[i],
          horizontalLineClassNamesForGroup: horizontalLineClassNamesForGroup,
          style: {
            width: "".concat(canvasWidth, "px"),
            height: "".concat(groupHeights[i], "px")
          }
        }));
      };

      for (var i = 0; i < lineCount; i++) {
        _loop(i);
      }

      return _react["default"].createElement("div", {
        className: "rct-horizontal-lines"
      }, lines);
    }
  }]);

  return GroupRows;
}(_react.Component);

exports["default"] = GroupRows;

_defineProperty(GroupRows, "propTypes", {
  canvasWidth: _propTypes["default"].number.isRequired,
  lineCount: _propTypes["default"].number.isRequired,
  groupHeights: _propTypes["default"].array.isRequired,
  onRowClick: _propTypes["default"].func.isRequired,
  onRowDoubleClick: _propTypes["default"].func.isRequired,
  clickTolerance: _propTypes["default"].number.isRequired,
  groups: _propTypes["default"].array.isRequired,
  horizontalLineClassNamesForGroup: _propTypes["default"].func,
  onRowContextClick: _propTypes["default"].func.isRequired
});

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/scroll/ScrollElement.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/scroll/ScrollElement.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _domHelpers = __webpack_require__(/*! ../utility/dom-helpers */ "../node_modules/react-calendar-timeline/lib/lib/utility/dom-helpers.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ScrollElement =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollElement, _Component);

  function ScrollElement() {
    var _this;

    _classCallCheck(this, ScrollElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScrollElement).call(this));

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scrollX = _this.scrollComponent.scrollLeft;

      _this.props.onScroll(scrollX);
    });

    _defineProperty(_assertThisInitialized(_this), "refHandler", function (el) {
      _this.scrollComponent = el;

      _this.props.scrollRef(el);

      if (el) {
        el.addEventListener('wheel', _this.handleWheel, {
          passive: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleWheel", function (e) {
      var traditionalZoom = _this.props.traditionalZoom; // zoom in the time dimension

      if (e.ctrlKey || e.metaKey || e.altKey) {
        e.preventDefault();
        var parentPosition = (0, _domHelpers.getParentPosition)(e.currentTarget);
        var xPosition = e.clientX - parentPosition.x;
        var speed = e.ctrlKey ? 10 : e.metaKey ? 3 : 1; // convert vertical zoom to horiziontal

        _this.props.onWheelZoom(speed, xPosition, e.deltaY);
      } else if (e.shiftKey) {
        e.preventDefault(); // shift+scroll event from a touchpad has deltaY property populated; shift+scroll event from a mouse has deltaX

        _this.props.onScroll(_this.scrollComponent.scrollLeft + (e.deltaY || e.deltaX)); // no modifier pressed? we prevented the default event, so scroll or zoom as needed

      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (e) {
      if (e.button === 0) {
        _this.dragStartPosition = e.pageX;
        _this.dragLastPosition = e.pageX;

        _this.setState({
          isDragging: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseMove", function (e) {
      // this.props.onMouseMove(e)
      //why is interacting with item important?
      if (_this.state.isDragging && !_this.props.isInteractingWithItem) {
        _this.props.onScroll(_this.scrollComponent.scrollLeft + _this.dragLastPosition - e.pageX);

        _this.dragLastPosition = e.pageX;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function () {
      _this.dragStartPosition = null;
      _this.dragLastPosition = null;

      _this.setState({
        isDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseLeave", function () {
      // this.props.onMouseLeave(e)
      _this.dragStartPosition = null;
      _this.dragLastPosition = null;

      _this.setState({
        isDragging: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchStart", function (e) {
      if (e.touches.length === 2) {
        e.preventDefault();
        _this.lastTouchDistance = Math.abs(e.touches[0].screenX - e.touches[1].screenX);
        _this.singleTouchStart = null;
        _this.lastSingleTouch = null;
      } else if (e.touches.length === 1) {
        e.preventDefault();
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;
        _this.lastTouchDistance = null;
        _this.singleTouchStart = {
          x: x,
          y: y,
          screenY: window.pageYOffset
        };
        _this.lastSingleTouch = {
          x: x,
          y: y,
          screenY: window.pageYOffset
        };
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchMove", function (e) {
      var _this$props = _this.props,
          isInteractingWithItem = _this$props.isInteractingWithItem,
          width = _this$props.width,
          onZoom = _this$props.onZoom;

      if (isInteractingWithItem) {
        e.preventDefault();
        return;
      }

      if (_this.lastTouchDistance && e.touches.length === 2) {
        e.preventDefault();
        var touchDistance = Math.abs(e.touches[0].screenX - e.touches[1].screenX);
        var parentPosition = (0, _domHelpers.getParentPosition)(e.currentTarget);
        var xPosition = (e.touches[0].screenX + e.touches[1].screenX) / 2 - parentPosition.x;

        if (touchDistance !== 0 && _this.lastTouchDistance !== 0) {
          onZoom(_this.lastTouchDistance / touchDistance, xPosition / width);
          _this.lastTouchDistance = touchDistance;
        }
      } else if (_this.lastSingleTouch && e.touches.length === 1) {
        e.preventDefault();
        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;
        var deltaX = x - _this.lastSingleTouch.x;
        var deltaX0 = x - _this.singleTouchStart.x;
        var deltaY0 = y - _this.singleTouchStart.y;
        _this.lastSingleTouch = {
          x: x,
          y: y
        };
        var moveX = Math.abs(deltaX0) * 3 > Math.abs(deltaY0);
        var moveY = Math.abs(deltaY0) * 3 > Math.abs(deltaX0);

        if (deltaX !== 0 && moveX) {
          _this.props.onScroll(_this.scrollComponent.scrollLeft - deltaX);
        }

        if (moveY) {
          window.scrollTo(window.pageXOffset, _this.singleTouchStart.screenY - deltaY0);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleTouchEnd", function () {
      if (_this.lastTouchDistance) {
        _this.lastTouchDistance = null;
      }

      if (_this.lastSingleTouch) {
        _this.lastSingleTouch = null;
        _this.singleTouchStart = null;
      }
    });

    _this.state = {
      isDragging: false
    };
    return _this;
  }
  /**
   * needed to handle scrolling with trackpad
   */


  _createClass(ScrollElement, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.scrollComponent) {
        this.scrollComponent.removeEventListener('wheel', this.handleWheel);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          width = _this$props2.width,
          height = _this$props2.height,
          children = _this$props2.children;
      var isDragging = this.state.isDragging;
      var scrollComponentStyle = {
        width: "".concat(width, "px"),
        height: "".concat(height + 20, "px"),
        //20px to push the scroll element down off screen...?
        cursor: isDragging ? 'move' : 'default',
        position: 'relative'
      };
      return _react["default"].createElement("div", {
        ref: this.refHandler,
        className: "rct-scroll",
        style: scrollComponentStyle,
        onMouseDown: this.handleMouseDown,
        onMouseMove: this.handleMouseMove,
        onMouseUp: this.handleMouseUp,
        onMouseLeave: this.handleMouseLeave,
        onTouchStart: this.handleTouchStart,
        onTouchMove: this.handleTouchMove,
        onTouchEnd: this.handleTouchEnd,
        onScroll: this.handleScroll
      }, children);
    }
  }]);

  return ScrollElement;
}(_react.Component);

_defineProperty(ScrollElement, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  width: _propTypes["default"].number.isRequired,
  height: _propTypes["default"].number.isRequired,
  traditionalZoom: _propTypes["default"].bool.isRequired,
  scrollRef: _propTypes["default"].func.isRequired,
  isInteractingWithItem: _propTypes["default"].bool.isRequired,
  onZoom: _propTypes["default"].func.isRequired,
  onWheelZoom: _propTypes["default"].func.isRequired,
  onScroll: _propTypes["default"].func.isRequired
});

var _default = ScrollElement;
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js":
/*!****************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/timeline/TimelineStateContext.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TimelineStateConsumer = exports.TimelineStateProvider = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js"));

var _createReactContext2 = _interopRequireDefault(__webpack_require__(/*! create-react-context */ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js"));

var _calendar = __webpack_require__(/*! ../utility/calendar */ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* this context will hold all information regarding timeline state:
  1. timeline width
  2. visible time start and end
  3. canvas time start and end
  4. helpers for calculating left offset of items (and really...anything)
*/

/* eslint-disable no-console */
var defaultContextState = {
  getTimelineState: function getTimelineState() {
    console.warn('"getTimelineState" default func is being used');
  },
  getLeftOffsetFromDate: function getLeftOffsetFromDate() {
    console.warn('"getLeftOffsetFromDate" default func is being used');
  },
  getDateFromLeftOffsetPosition: function getDateFromLeftOffsetPosition() {
    console.warn('"getDateFromLeftOffsetPosition" default func is being used');
  },
  showPeriod: function showPeriod() {
    console.warn('"showPeriod" default func is being used');
  }
  /* eslint-enable */

};

var _createReactContext = (0, _createReactContext2["default"])(defaultContextState),
    Consumer = _createReactContext.Consumer,
    Provider = _createReactContext.Provider;

var TimelineStateProvider =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimelineStateProvider, _React$Component);

  /* eslint-disable react/no-unused-prop-types */
  function TimelineStateProvider(props) {
    var _this;

    _classCallCheck(this, TimelineStateProvider);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimelineStateProvider).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "getTimelineState", function () {
      var _this$props = _this.props,
          visibleTimeStart = _this$props.visibleTimeStart,
          visibleTimeEnd = _this$props.visibleTimeEnd,
          canvasTimeStart = _this$props.canvasTimeStart,
          canvasTimeEnd = _this$props.canvasTimeEnd,
          canvasWidth = _this$props.canvasWidth,
          timelineUnit = _this$props.timelineUnit,
          timelineWidth = _this$props.timelineWidth;
      return {
        visibleTimeStart: visibleTimeStart,
        visibleTimeEnd: visibleTimeEnd,
        canvasTimeStart: canvasTimeStart,
        canvasTimeEnd: canvasTimeEnd,
        canvasWidth: canvasWidth,
        timelineUnit: timelineUnit,
        timelineWidth: timelineWidth // REVIEW,

      };
    });

    _defineProperty(_assertThisInitialized(_this), "getLeftOffsetFromDate", function (date) {
      var _this$props2 = _this.props,
          canvasTimeStart = _this$props2.canvasTimeStart,
          canvasTimeEnd = _this$props2.canvasTimeEnd,
          canvasWidth = _this$props2.canvasWidth;
      return (0, _calendar.calculateXPositionForTime)(canvasTimeStart, canvasTimeEnd, canvasWidth, date);
    });

    _defineProperty(_assertThisInitialized(_this), "getDateFromLeftOffsetPosition", function (leftOffset) {
      var _this$props3 = _this.props,
          canvasTimeStart = _this$props3.canvasTimeStart,
          canvasTimeEnd = _this$props3.canvasTimeEnd,
          canvasWidth = _this$props3.canvasWidth;
      return (0, _calendar.calculateTimeForXPosition)(canvasTimeStart, canvasTimeEnd, canvasWidth, leftOffset);
    });

    _this.state = {
      timelineContext: {
        getTimelineState: _this.getTimelineState,
        getLeftOffsetFromDate: _this.getLeftOffsetFromDate,
        getDateFromLeftOffsetPosition: _this.getDateFromLeftOffsetPosition,
        showPeriod: _this.props.showPeriod
      }
    };
    return _this;
  }

  _createClass(TimelineStateProvider, [{
    key: "render",
    value: function render() {
      return _react["default"].createElement(Provider, {
        value: this.state.timelineContext
      }, this.props.children);
    }
  }]);

  return TimelineStateProvider;
}(_react["default"].Component);

exports.TimelineStateProvider = TimelineStateProvider;

_defineProperty(TimelineStateProvider, "propTypes", {
  children: _propTypes["default"].element.isRequired,
  visibleTimeStart: _propTypes["default"].number.isRequired,
  visibleTimeEnd: _propTypes["default"].number.isRequired,
  canvasTimeStart: _propTypes["default"].number.isRequired,
  canvasTimeEnd: _propTypes["default"].number.isRequired,
  canvasWidth: _propTypes["default"].number.isRequired,
  showPeriod: _propTypes["default"].func.isRequired,
  timelineUnit: _propTypes["default"].string.isRequired,
  timelineWidth: _propTypes["default"].number.isRequired
});

var TimelineStateConsumer = Consumer;
exports.TimelineStateConsumer = TimelineStateConsumer;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js":
/*!***************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/utility/calendar.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.coordinateToTimeRatio = coordinateToTimeRatio;
exports.calculateXPositionForTime = calculateXPositionForTime;
exports.calculateTimeForXPosition = calculateTimeForXPosition;
exports.iterateTimes = iterateTimes;
exports.getMinUnit = getMinUnit;
exports.getNextUnit = getNextUnit;
exports.calculateInteractionNewTimes = calculateInteractionNewTimes;
exports.calculateDimensions = calculateDimensions;
exports.getGroupOrders = getGroupOrders;
exports.getGroupedItems = getGroupedItems;
exports.getVisibleItems = getVisibleItems;
exports.collision = collision;
exports.groupStack = groupStack;
exports.groupNoStack = groupNoStack;
exports.stackAll = stackAll;
exports.stackGroup = stackGroup;
exports.stackTimelineItems = stackTimelineItems;
exports.getCanvasWidth = getCanvasWidth;
exports.getItemDimensions = getItemDimensions;
exports.getItemWithInteractions = getItemWithInteractions;
exports.getCanvasBoundariesFromVisibleTime = getCanvasBoundariesFromVisibleTime;
exports.calculateScrollCanvas = calculateScrollCanvas;
exports.minCellWidth = void 0;

var _moment = _interopRequireDefault(__webpack_require__(/*! moment */ "moment"));

var _generic = __webpack_require__(/*! ./generic */ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { if (i % 2) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } else { Object.defineProperties(target, Object.getOwnPropertyDescriptors(arguments[i])); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * Calculate the ms / pixel ratio of the timeline state
 * @param {number} canvasTimeStart
 * @param {number} canvasTimeEnd
 * @param {number} canvasWidth
 * @returns {number}
 */
function coordinateToTimeRatio(canvasTimeStart, canvasTimeEnd, canvasWidth) {
  return (canvasTimeEnd - canvasTimeStart) / canvasWidth;
}
/**
 * For a given time, calculate the pixel position given timeline state
 * (timeline width in px, canvas time range)
 * @param {number} canvasTimeStart
 * @param {number} canvasTimeEnd
 * @param {number} canvasWidth
 * @param {number} time
 * @returns {number}
 */


function calculateXPositionForTime(canvasTimeStart, canvasTimeEnd, canvasWidth, time) {
  var widthToZoomRatio = canvasWidth / (canvasTimeEnd - canvasTimeStart);
  var timeOffset = time - canvasTimeStart;
  return timeOffset * widthToZoomRatio;
}
/**
 * For a given x position (leftOffset) in pixels, calculate time based on
 * timeline state (timeline width in px, canvas time range)
 * @param {number} canvasTimeStart
 * @param {number} canvasTimeEnd
 * @param {number} canvasWidth
 * @param {number} leftOffset
 * @returns {number}
 */


function calculateTimeForXPosition(canvasTimeStart, canvasTimeEnd, canvasWidth, leftOffset) {
  var timeToPxRatio = (canvasTimeEnd - canvasTimeStart) / canvasWidth;
  var timeFromCanvasTimeStart = timeToPxRatio * leftOffset;
  return timeFromCanvasTimeStart + canvasTimeStart;
}

function iterateTimes(start, end, unit, timeSteps, callback) {
  var time = (0, _moment["default"])(start).startOf(unit);

  if (timeSteps[unit] && timeSteps[unit] > 1) {
    var value = time.get(unit);
    time.set(unit, value - value % timeSteps[unit]);
  }

  while (time.valueOf() < end) {
    var nextTime = (0, _moment["default"])(time).add(timeSteps[unit] || 1, "".concat(unit, "s"));
    callback(time, nextTime);
    time = nextTime;
  }
} // this function is VERY HOT as its used in Timeline.js render function
// TODO: check if there are performance implications here
// when "weeks" feature is implemented, this function will be modified heavily

/** determine the current rendered time unit based on timeline time span
 *
 * zoom: (in milliseconds) difference between time start and time end of timeline canvas
 * width: (in pixels) pixel width of timeline canvas
 * timeSteps: map of timeDividers with number to indicate step of each divider
 */
// the smallest cell we want to render is 17px
// this can be manipulated to make the breakpoints change more/less
// i.e. on zoom how often do we switch to the next unit of time
// i think this is the distance between cell lines


var minCellWidth = 17;
exports.minCellWidth = minCellWidth;

function getMinUnit(zoom, width, timeSteps) {
  // for supporting weeks, its important to remember that each of these
  // units has a natural progression to the other. i.e. a year is 12 months
  // a month is 24 days, a day is 24 hours.
  // with weeks this isnt the case so weeks needs to be handled specially
  var timeDividers = {
    second: 1000,
    minute: 60,
    hour: 60,
    day: 24,
    month: 30,
    year: 12
  };
  var minUnit = 'year'; // this timespan is in ms initially

  var nextTimeSpanInUnitContext = zoom;
  Object.keys(timeDividers).some(function (unit) {
    // converts previous time span to current unit
    // (e.g. milliseconds to seconds, seconds to minutes, etc)
    nextTimeSpanInUnitContext = nextTimeSpanInUnitContext / timeDividers[unit]; // timeSteps is "
    // With what step to display different units. E.g. 15 for minute means only minutes 0, 15, 30 and 45 will be shown."
    // how many cells would be rendered given this time span, for this unit?
    // e.g. for time span of 60 minutes, and time step of 1, we would render 60 cells

    var cellsToBeRenderedForCurrentUnit = nextTimeSpanInUnitContext / timeSteps[unit]; // what is happening here? why 3 if time steps are greater than 1??

    var cellWidthToUse = timeSteps[unit] && timeSteps[unit] > 1 ? 3 * minCellWidth : minCellWidth; // for the minWidth of a cell, how many cells would be rendered given
    // the current pixel width
    // i.e. f

    var minimumCellsToRenderUnit = width / cellWidthToUse;

    if (cellsToBeRenderedForCurrentUnit < minimumCellsToRenderUnit) {
      // for the current zoom, the number of cells we'd need to render all parts of this unit
      // is less than the minimum number of cells needed at minimum cell width
      minUnit = unit;
      return true;
    }
  });
  return minUnit;
}

function getNextUnit(unit) {
  var nextUnits = {
    second: 'minute',
    minute: 'hour',
    hour: 'day',
    day: 'month',
    month: 'year',
    year: 'year'
  };

  if (!nextUnits[unit]) {
    throw new Error("unit ".concat(unit, " in not acceptable"));
  }

  return nextUnits[unit];
}
/**
 * get the new start and new end time of item that is being
 * dragged or resized
 * @param {*} itemTimeStart original item time in milliseconds
 * @param {*} itemTimeEnd original item time in milliseconds
 * @param {*} dragTime new start time if item is dragged in milliseconds
 * @param {*} isDragging is item being dragged
 * @param {*} isResizing is item being resized
 * @param {`right` or `left`} resizingEdge resize edge
 * @param {*} resizeTime new resize time in milliseconds
 */


function calculateInteractionNewTimes(_ref) {
  var itemTimeStart = _ref.itemTimeStart,
      itemTimeEnd = _ref.itemTimeEnd,
      dragTime = _ref.dragTime,
      isDragging = _ref.isDragging,
      isResizing = _ref.isResizing,
      resizingEdge = _ref.resizingEdge,
      resizeTime = _ref.resizeTime;
  var originalItemRange = itemTimeEnd - itemTimeStart;
  var itemStart = isResizing && resizingEdge === 'left' ? resizeTime : itemTimeStart;
  var itemEnd = isResizing && resizingEdge === 'right' ? resizeTime : itemTimeEnd;
  return [isDragging ? dragTime : itemStart, isDragging ? dragTime + originalItemRange : itemEnd];
}

function calculateDimensions(_ref2) {
  var itemTimeStart = _ref2.itemTimeStart,
      itemTimeEnd = _ref2.itemTimeEnd,
      canvasTimeStart = _ref2.canvasTimeStart,
      canvasTimeEnd = _ref2.canvasTimeEnd,
      canvasWidth = _ref2.canvasWidth;
  var itemTimeRange = itemTimeEnd - itemTimeStart; // restrict startTime and endTime to be bounded by canvasTimeStart and canvasTimeEnd

  var effectiveStartTime = Math.max(itemTimeStart, canvasTimeStart);
  var effectiveEndTime = Math.min(itemTimeEnd, canvasTimeEnd);
  var left = calculateXPositionForTime(canvasTimeStart, canvasTimeEnd, canvasWidth, effectiveStartTime);
  var right = calculateXPositionForTime(canvasTimeStart, canvasTimeEnd, canvasWidth, effectiveEndTime);
  var itemWidth = right - left;
  var dimensions = {
    left: left,
    width: Math.max(itemWidth, 3),
    collisionLeft: itemTimeStart,
    collisionWidth: itemTimeRange
  };
  return dimensions;
}
/**
 * Get the order of groups based on their keys
 * @param {*} groups array of groups
 * @param {*} keys the keys object
 * @returns Ordered hash of objects with their array index and group
 */


function getGroupOrders(groups, keys) {
  var groupIdKey = keys.groupIdKey;
  var groupOrders = {};

  for (var i = 0; i < groups.length; i++) {
    groupOrders[(0, _generic._get)(groups[i], groupIdKey)] = {
      index: i,
      group: groups[i]
    };
  }

  return groupOrders;
}
/**
 * Adds items relevant to each group to the result of getGroupOrders
 * @param {*} items list of all items
 * @param {*} groupOrders the result of getGroupOrders
 */


function getGroupedItems(items, groupOrders) {
  var groupedItems = {};
  var keys = Object.keys(groupOrders); // Initialize with result object for each group

  for (var i = 0; i < keys.length; i++) {
    var groupOrder = groupOrders[keys[i]];
    groupedItems[i] = {
      index: groupOrder.index,
      group: groupOrder.group,
      items: []
    };
  } // Populate groups


  for (var _i = 0; _i < items.length; _i++) {
    if (items[_i].dimensions.order !== undefined) {
      var groupItem = groupedItems[items[_i].dimensions.order.index];

      if (groupItem) {
        groupItem.items.push(items[_i]);
      }
    }
  }

  return groupedItems;
}

function getVisibleItems(items, canvasTimeStart, canvasTimeEnd, keys) {
  var itemTimeStartKey = keys.itemTimeStartKey,
      itemTimeEndKey = keys.itemTimeEndKey;
  return items.filter(function (item) {
    return (0, _generic._get)(item, itemTimeStartKey) <= canvasTimeEnd && (0, _generic._get)(item, itemTimeEndKey) >= canvasTimeStart;
  });
}

var EPSILON = 0.001;

function collision(a, b, lineHeight) {
  var collisionPadding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : EPSILON;
  // 2d collisions detection - https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  var verticalMargin = 0;
  return a.collisionLeft + collisionPadding < b.collisionLeft + b.collisionWidth && a.collisionLeft + a.collisionWidth - collisionPadding > b.collisionLeft && a.top - verticalMargin + collisionPadding < b.top + b.height && a.top + a.height + verticalMargin - collisionPadding > b.top;
}
/**
 * Calculate the position of a given item for a group that
 * is being stacked
 */


function groupStack(lineHeight, item, group, groupHeight, groupTop, itemIndex) {
  // calculate non-overlapping positions
  var curHeight = groupHeight;
  var verticalMargin = (lineHeight - item.dimensions.height) / 2;

  if (item.dimensions.stack && item.dimensions.top === null) {
    item.dimensions.top = groupTop + verticalMargin;
    curHeight = Math.max(curHeight, lineHeight);

    do {
      var collidingItem = null; //Items are placed from i=0 onwards, only check items with index < i

      for (var j = itemIndex - 1, jj = 0; j >= jj; j--) {
        var other = group[j];

        if (other.dimensions.top !== null && other.dimensions.stack && collision(item.dimensions, other.dimensions, lineHeight)) {
          collidingItem = other;
          break;
        } else {// console.log('dont test', other.top !== null, other !== item, other.stack);
        }
      }

      if (collidingItem != null) {
        // There is a collision. Reposition the items above the colliding element
        item.dimensions.top = collidingItem.dimensions.top + lineHeight;
        curHeight = Math.max(curHeight, item.dimensions.top + item.dimensions.height + verticalMargin - groupTop);
      }
    } while (collidingItem);
  }

  return {
    groupHeight: curHeight,
    verticalMargin: verticalMargin,
    itemTop: item.dimensions.top
  };
} // Calculate the position of this item for a group that is not being stacked


function groupNoStack(lineHeight, item, groupHeight, groupTop) {
  var verticalMargin = (lineHeight - item.dimensions.height) / 2;

  if (item.dimensions.top === null) {
    item.dimensions.top = groupTop + verticalMargin;
    groupHeight = Math.max(groupHeight, lineHeight);
  }

  return {
    groupHeight: groupHeight,
    verticalMargin: 0,
    itemTop: item.dimensions.top
  };
}

function sum() {
  var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return arr.reduce(function (acc, i) {
    return acc + i;
  }, 0);
}
/**
 * Stack all groups
 * @param {*} items items to be stacked
 * @param {*} groupOrders the groupOrders object
 * @param {*} lineHeight
 * @param {*} stackItems should items be stacked?
 */


function stackAll(itemsDimensions, groupOrders, lineHeight, stackItems) {
  var groupHeights = [];
  var groupTops = [];
  var groupedItems = getGroupedItems(itemsDimensions, groupOrders);

  for (var index in groupedItems) {
    var groupItems = groupedItems[index];
    var _itemsDimensions = groupItems.items,
        group = groupItems.group;
    var groupTop = sum(groupHeights); // Is group being stacked?

    var isGroupStacked = group.stackItems !== undefined ? group.stackItems : stackItems;

    var _stackGroup = stackGroup(_itemsDimensions, isGroupStacked, lineHeight, groupTop),
        groupHeight = _stackGroup.groupHeight,
        verticalMargin = _stackGroup.verticalMargin; // If group height is overridden, push new height
    // Do this late as item position still needs to be calculated


    groupTops.push(groupTop);

    if (group.height) {
      groupHeights.push(group.height);
    } else {
      groupHeights.push(Math.max(groupHeight, lineHeight));
    }
  }

  return {
    height: sum(groupHeights),
    groupHeights: groupHeights,
    groupTops: groupTops
  };
}
/**
 * 
 * @param {*} itemsDimensions 
 * @param {*} isGroupStacked 
 * @param {*} lineHeight 
 * @param {*} groupTop 
 */


function stackGroup(itemsDimensions, isGroupStacked, lineHeight, groupTop) {
  var groupHeight = 0;
  var verticalMargin = 0; // Find positions for each item in group

  for (var itemIndex = 0; itemIndex < itemsDimensions.length; itemIndex++) {
    var r = {};

    if (isGroupStacked) {
      r = groupStack(lineHeight, itemsDimensions[itemIndex], itemsDimensions, groupHeight, groupTop, itemIndex);
    } else {
      r = groupNoStack(lineHeight, itemsDimensions[itemIndex], groupHeight, groupTop);
    }

    groupHeight = r.groupHeight;
    verticalMargin = r.verticalMargin;
  }

  return {
    groupHeight: groupHeight,
    verticalMargin: verticalMargin
  };
}
/**
 * Stack the items that will be visible
 * within the canvas area
 * @param {item[]} items
 * @param {group[]} groups
 * @param {number} canvasWidth
 * @param {number} canvasTimeStart
 * @param {number} canvasTimeEnd
 * @param {*} keys
 * @param {number} lineHeight
 * @param {number} itemHeightRatio
 * @param {boolean} stackItems
 * @param {*} draggingItem
 * @param {*} resizingItem
 * @param {number} dragTime
 * @param {left or right} resizingEdge
 * @param {number} resizeTime
 * @param {number} newGroupOrder
 */


function stackTimelineItems(items, groups, canvasWidth, canvasTimeStart, canvasTimeEnd, keys, lineHeight, itemHeightRatio, stackItems, draggingItem, resizingItem, dragTime, resizingEdge, resizeTime, newGroupOrder) {
  var visibleItems = getVisibleItems(items, canvasTimeStart, canvasTimeEnd, keys);
  var visibleItemsWithInteraction = visibleItems.map(function (item) {
    return getItemWithInteractions({
      item: item,
      keys: keys,
      draggingItem: draggingItem,
      resizingItem: resizingItem,
      dragTime: dragTime,
      resizingEdge: resizingEdge,
      resizeTime: resizeTime,
      groups: groups,
      newGroupOrder: newGroupOrder
    });
  }); // if there are no groups return an empty array of dimensions

  if (groups.length === 0) {
    return {
      dimensionItems: [],
      height: 0,
      groupHeights: [],
      groupTops: []
    };
  } // Get the order of groups based on their id key


  var groupOrders = getGroupOrders(groups, keys);
  var dimensionItems = visibleItemsWithInteraction.map(function (item) {
    return getItemDimensions({
      item: item,
      keys: keys,
      canvasTimeStart: canvasTimeStart,
      canvasTimeEnd: canvasTimeEnd,
      canvasWidth: canvasWidth,
      groupOrders: groupOrders,
      lineHeight: lineHeight,
      itemHeightRatio: itemHeightRatio
    });
  }).filter(function (item) {
    return !!item;
  }); // Get a new array of groupOrders holding the stacked items

  var _stackAll = stackAll(dimensionItems, groupOrders, lineHeight, stackItems),
      height = _stackAll.height,
      groupHeights = _stackAll.groupHeights,
      groupTops = _stackAll.groupTops;

  return {
    dimensionItems: dimensionItems,
    height: height,
    groupHeights: groupHeights,
    groupTops: groupTops
  };
}
/**
 * get canvas width from visible width
 * @param {*} width
 * @param {*} buffer
 */


function getCanvasWidth(width) {
  var buffer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  return width * buffer;
}
/**
 * get item's position, dimensions and collisions
 * @param {*} item
 * @param {*} keys
 * @param {*} canvasTimeStart
 * @param {*} canvasTimeEnd
 * @param {*} canvasWidth
 * @param {*} groupOrders
 * @param {*} lineHeight
 * @param {*} itemHeightRatio
 */


function getItemDimensions(_ref3) {
  var item = _ref3.item,
      keys = _ref3.keys,
      canvasTimeStart = _ref3.canvasTimeStart,
      canvasTimeEnd = _ref3.canvasTimeEnd,
      canvasWidth = _ref3.canvasWidth,
      groupOrders = _ref3.groupOrders,
      lineHeight = _ref3.lineHeight,
      itemHeightRatio = _ref3.itemHeightRatio;
  var itemId = (0, _generic._get)(item, keys.itemIdKey);
  var dimension = calculateDimensions({
    itemTimeStart: (0, _generic._get)(item, keys.itemTimeStartKey),
    itemTimeEnd: (0, _generic._get)(item, keys.itemTimeEndKey),
    canvasTimeStart: canvasTimeStart,
    canvasTimeEnd: canvasTimeEnd,
    canvasWidth: canvasWidth
  });

  if (dimension) {
    dimension.top = null;
    dimension.order = groupOrders[(0, _generic._get)(item, keys.itemGroupKey)];
    dimension.stack = !item.isOverlay;
    dimension.height = lineHeight * itemHeightRatio;
    return {
      id: itemId,
      dimensions: dimension
    };
  }
}
/**
 * get new item with changed  `itemTimeStart` , `itemTimeEnd` and `itemGroupKey` according to user interaction
 * user interaction is dragging an item and resize left and right
 * @param {*} item
 * @param {*} keys
 * @param {*} draggingItem
 * @param {*} resizingItem
 * @param {*} dragTime
 * @param {*} resizingEdge
 * @param {*} resizeTime
 * @param {*} groups
 * @param {*} newGroupOrder
 */


function getItemWithInteractions(_ref4) {
  var _objectSpread2;

  var item = _ref4.item,
      keys = _ref4.keys,
      draggingItem = _ref4.draggingItem,
      resizingItem = _ref4.resizingItem,
      dragTime = _ref4.dragTime,
      resizingEdge = _ref4.resizingEdge,
      resizeTime = _ref4.resizeTime,
      groups = _ref4.groups,
      newGroupOrder = _ref4.newGroupOrder;
  if (!resizingItem && !draggingItem) return item;
  var itemId = (0, _generic._get)(item, keys.itemIdKey);
  var isDragging = itemId === draggingItem;
  var isResizing = itemId === resizingItem;

  var _calculateInteraction = calculateInteractionNewTimes({
    itemTimeStart: (0, _generic._get)(item, keys.itemTimeStartKey),
    itemTimeEnd: (0, _generic._get)(item, keys.itemTimeEndKey),
    isDragging: isDragging,
    isResizing: isResizing,
    dragTime: dragTime,
    resizingEdge: resizingEdge,
    resizeTime: resizeTime
  }),
      _calculateInteraction2 = _slicedToArray(_calculateInteraction, 2),
      itemTimeStart = _calculateInteraction2[0],
      itemTimeEnd = _calculateInteraction2[1];

  var newItem = _objectSpread({}, item, (_objectSpread2 = {}, _defineProperty(_objectSpread2, keys.itemTimeStartKey, itemTimeStart), _defineProperty(_objectSpread2, keys.itemTimeEndKey, itemTimeEnd), _defineProperty(_objectSpread2, keys.itemGroupKey, isDragging ? (0, _generic._get)(groups[newGroupOrder], keys.groupIdKey) : (0, _generic._get)(item, keys.itemGroupKey)), _objectSpread2));

  return newItem;
}
/**
 * get canvas start and end time from visible start and end time
 * @param {number} visibleTimeStart
 * @param {number} visibleTimeEnd
 */


function getCanvasBoundariesFromVisibleTime(visibleTimeStart, visibleTimeEnd) {
  var zoom = visibleTimeEnd - visibleTimeStart;
  var canvasTimeStart = visibleTimeStart - (visibleTimeEnd - visibleTimeStart);
  var canvasTimeEnd = canvasTimeStart + zoom * 3;
  return [canvasTimeStart, canvasTimeEnd];
}
/**
 * Get the the canvas area for a given visible time
 * Will shift the start/end of the canvas if the visible time
 * does not fit within the existing
 * @param {number} visibleTimeStart
 * @param {number} visibleTimeEnd
 * @param {boolean} forceUpdateDimensions
 * @param {*} items
 * @param {*} groups
 * @param {*} props
 * @param {*} state
 */


function calculateScrollCanvas(visibleTimeStart, visibleTimeEnd, forceUpdateDimensions, items, groups, props, state) {
  var oldCanvasTimeStart = state.canvasTimeStart;
  var oldZoom = state.visibleTimeEnd - state.visibleTimeStart;
  var newZoom = visibleTimeEnd - visibleTimeStart;
  var newState = {
    visibleTimeStart: visibleTimeStart,
    visibleTimeEnd: visibleTimeEnd // Check if the current canvas covers the new times

  };
  var canKeepCanvas = newZoom === oldZoom && visibleTimeStart >= oldCanvasTimeStart + oldZoom * 0.5 && visibleTimeStart <= oldCanvasTimeStart + oldZoom * 1.5 && visibleTimeEnd >= oldCanvasTimeStart + oldZoom * 1.5 && visibleTimeEnd <= oldCanvasTimeStart + oldZoom * 2.5;

  if (!canKeepCanvas || forceUpdateDimensions) {
    var _getCanvasBoundariesF = getCanvasBoundariesFromVisibleTime(visibleTimeStart, visibleTimeEnd),
        _getCanvasBoundariesF2 = _slicedToArray(_getCanvasBoundariesF, 2),
        canvasTimeStart = _getCanvasBoundariesF2[0],
        canvasTimeEnd = _getCanvasBoundariesF2[1];

    newState.canvasTimeStart = canvasTimeStart;
    newState.canvasTimeEnd = canvasTimeEnd;

    var mergedState = _objectSpread({}, state, {}, newState);

    var canvasWidth = getCanvasWidth(mergedState.width); // The canvas cannot be kept, so calculate the new items position

    Object.assign(newState, stackTimelineItems(items, groups, canvasWidth, mergedState.canvasTimeStart, mergedState.canvasTimeEnd, props.keys, props.lineHeight, props.itemHeightRatio, props.stackItems, mergedState.draggingItem, mergedState.resizingItem, mergedState.dragTime, mergedState.resizingEdge, mergedState.resizeTime, mergedState.newGroupOrder));
  }

  return newState;
}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/utility/dom-helpers.js":
/*!******************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/utility/dom-helpers.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getParentPosition = getParentPosition;
exports.getSumScroll = getSumScroll;
exports.getSumOffset = getSumOffset;

// TODO: can we use getBoundingClientRect instead??
// last place this is used is in "handleWheel" in ScrollElement
function getParentPosition(element) {
  var xPosition = 0;
  var yPosition = 0;
  var first = true;

  while (element) {
    if (!element.offsetParent && element.tagName === 'BODY' && element.scrollLeft === 0 && element.scrollTop === 0) {
      element = document.scrollingElement || element;
    }

    xPosition += element.offsetLeft - (first ? 0 : element.scrollLeft) + element.clientLeft;
    yPosition += element.offsetTop - (first ? 0 : element.scrollTop) + element.clientTop;
    element = element.offsetParent;
    first = false;
  }

  return {
    x: xPosition,
    y: yPosition
  };
}

function getSumScroll(node) {
  if (node === document.body) {
    return {
      scrollLeft: 0,
      scrollTop: 0
    };
  } else {
    var parent = getSumScroll(node.parentNode);
    return {
      scrollLeft: node.scrollLeft + parent.scrollLeft,
      scrollTop: node.scrollTop + parent.scrollTop
    };
  }
}

function getSumOffset(node) {
  if (node === document.body || !node.offsetParent) {
    return {
      offsetLeft: 0,
      offsetTop: 0
    };
  } else {
    var parent = getSumOffset(node.offsetParent);
    return {
      offsetLeft: node.offsetLeft + parent.offsetLeft,
      offsetTop: node.offsetTop + parent.offsetTop
    };
  }
}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/utility/events.js":
/*!*************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/utility/events.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.composeEvents = composeEvents;

function composeEvents() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (event) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    event.preventDefault();
    fns.forEach(function (fn) {
      return fn && fn.apply(void 0, [event].concat(args));
    });
  };
}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/lib/utility/generic.js":
/*!**************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/lib/utility/generic.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._get = _get;
exports._length = _length;
exports.arraysEqual = arraysEqual;
exports.deepObjectCompare = deepObjectCompare;
exports.keyBy = keyBy;
exports.noop = noop;

var _lodash = _interopRequireDefault(__webpack_require__(/*! lodash.isequal */ "../node_modules/lodash.isequal/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// so we could use both immutable.js objects and regular objects
function _get(object, key) {
  return typeof object.get === 'function' ? object.get(key) : object[key];
}

function _length(object) {
  return typeof object.count === 'function' ? object.count() : object.length;
}

function arraysEqual(array1, array2) {
  return _length(array1) === _length(array2) && array1.every(function (element, index) {
    return element === _get(array2, index);
  });
}

function deepObjectCompare(obj1, obj2) {
  return (0, _lodash["default"])(obj1, obj2);
}

function keyBy(value, key) {
  var obj = {};
  value.forEach(function (element) {
    obj[element[key]] = element;
  });
  return obj;
}

function noop() {}

/***/ }),

/***/ "../node_modules/react-calendar-timeline/lib/resize-detector/window.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/lib/resize-detector/window.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function addListener(component) {
  component._resizeEventListener = {
    handleEvent: function handleEvent() {
      component.resize();
    }
  };
  window.addEventListener('resize', component._resizeEventListener);
}

function removeListener(component) {
  window.removeEventListener('resize', component._resizeEventListener);
}

var _default = {
  addListener: addListener,
  removeListener: removeListener
};
exports["default"] = _default;

/***/ }),

/***/ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/implementation.js":
/*!*******************************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/implementation.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ "../node_modules/gud/index.js");

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! warning */ "../node_modules/react-calendar-timeline/node_modules/warning/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (true) {
            (0, _warning2.default)((changedBits & MAX_SIGNED_31_BIT_INT) === changedBits, 'calculateChangedBits: Expected the return value to be a ' + '31-bit integer. Instead received: %s', changedBits);
          }

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ "react");

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ "../node_modules/react-calendar-timeline/node_modules/create-react-context/lib/implementation.js");

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),

/***/ "../node_modules/react-calendar-timeline/node_modules/memoize-one/dist/memoize-one.esm.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
    if (newInputs.length !== lastInputs.length) {
        return false;
    }
    for (var i = 0; i < newInputs.length; i++) {
        if (newInputs[i] !== lastInputs[i]) {
            return false;
        }
    }
    return true;
}

function memoizeOne(resultFn, isEqual) {
    if (isEqual === void 0) { isEqual = areInputsEqual; }
    var lastThis;
    var lastArgs = [];
    var lastResult;
    var calledOnce = false;
    function memoized() {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
            return lastResult;
        }
        lastResult = resultFn.apply(this, newArgs);
        calledOnce = true;
        lastThis = this;
        lastArgs = newArgs;
        return lastResult;
    }
    return memoized;
}

/* harmony default export */ __webpack_exports__["default"] = (memoizeOne);


/***/ }),

/***/ "../node_modules/react-calendar-timeline/node_modules/warning/warning.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/react-calendar-timeline/node_modules/warning/warning.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "../node_modules/react-is/cjs/react-is.development.js":
/*!************************************************************!*\
  !*** ../node_modules/react-is/cjs/react-is.development.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../node_modules/react-is/index.js":
/*!*****************************************!*\
  !*** ../node_modules/react-is/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "../node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
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

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

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

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "../node_modules/tslib/tslib.es6.js":
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "../node_modules/webpack/buildin/global.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../node_modules/webpack/buildin/module.js":
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/module.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./MainEditor.tsx":
/*!************************!*\
  !*** ./MainEditor.tsx ***!
  \************************/
/*! exports provided: MainEditor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainEditor", function() { return MainEditor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var MainEditor =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MainEditor, _super);

  function MainEditor() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  MainEditor.prototype.render = function () {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "section gf-form-group"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
      className: "section-heading"
    }, "Display"));
  };

  return MainEditor;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./MainPanel.tsx":
/*!***********************!*\
  !*** ./MainPanel.tsx ***!
  \***********************/
/*! exports provided: MainPanel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPanel", function() { return MainPanel; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-calendar-timeline */ "../node_modules/react-calendar-timeline/lib/index.js");
/* harmony import */ var react_calendar_timeline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helper */ "./utils/helper.ts");
/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-calendar-timeline/lib/Timeline.css */ "../node_modules/react-calendar-timeline/lib/Timeline.css");
/* harmony import */ var react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_calendar_timeline_lib_Timeline_css__WEBPACK_IMPORTED_MODULE_5__);






var initialState = {
  groups: [],
  items: [],
  visibleTimeStart: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(-6, 'hour'),
  visibleTimeEnd: moment__WEBPACK_IMPORTED_MODULE_3___default()().add(6, 'hour')
};

var MainPanel =
/** @class */
function (_super) {
  Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(MainPanel, _super);

  function MainPanel() {
    var _this = _super !== null && _super.apply(this, arguments) || this;

    _this.state = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState);
    return _this;
  }

  MainPanel.prototype.componentDidMount = function () {
    if (this.props.data.series.length > 0) {
      var fields = this.props.data.series[0].fields;

      var _a = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__["processData"])(fields),
          groups = _a.groups,
          items = _a.items,
          visibleTimeStart = _a.visibleTimeStart,
          visibleTimeEnd = _a.visibleTimeEnd;

      this.setState({
        groups: groups,
        items: items,
        visibleTimeStart: visibleTimeStart,
        visibleTimeEnd: visibleTimeEnd
      });
    }
  };

  MainPanel.prototype.componentDidUpdate = function (prevProps) {
    if (prevProps.data.series[0] !== this.props.data.series[0]) {
      if (this.props.data.series.length > 0) {
        var fields = this.props.data.series[0].fields;

        var _a = Object(_utils_helper__WEBPACK_IMPORTED_MODULE_4__["processData"])(fields),
            groups = _a.groups,
            items = _a.items,
            visibleTimeStart = _a.visibleTimeStart,
            visibleTimeEnd = _a.visibleTimeEnd;

        this.setState({
          groups: groups,
          items: items,
          visibleTimeStart: visibleTimeStart,
          visibleTimeEnd: visibleTimeEnd
        });
      } else {
        this.setState(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, initialState));
      }
    }
  };

  MainPanel.prototype.render = function () {
    var _a = this.props,
        width = _a.width,
        height = _a.height;
    var _b = this.state,
        groups = _b.groups,
        items = _b.items,
        visibleTimeStart = _b.visibleTimeStart,
        visibleTimeEnd = _b.visibleTimeEnd;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: width,
        height: height
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_calendar_timeline__WEBPACK_IMPORTED_MODULE_2___default.a, {
      groups: groups,
      items: items,
      visibleTimeStart: visibleTimeStart,
      visibleTimeEnd: visibleTimeEnd
    }));
  };

  return MainPanel;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);



/***/ }),

/***/ "./module.ts":
/*!*******************!*\
  !*** ./module.ts ***!
  \*******************/
/*! exports provided: plugin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "plugin", function() { return plugin; });
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @grafana/ui */ "@grafana/ui");
/* harmony import */ var _grafana_ui__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_grafana_ui__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types */ "./types.ts");
/* harmony import */ var _MainPanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MainPanel */ "./MainPanel.tsx");
/* harmony import */ var _MainEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MainEditor */ "./MainEditor.tsx");
// @ts-ignore




var plugin = new _grafana_ui__WEBPACK_IMPORTED_MODULE_0__["PanelPlugin"](_MainPanel__WEBPACK_IMPORTED_MODULE_2__["MainPanel"]).setDefaults(_types__WEBPACK_IMPORTED_MODULE_1__["defaults"]).setEditor(_MainEditor__WEBPACK_IMPORTED_MODULE_3__["MainEditor"]);

/***/ }),

/***/ "./types.ts":
/*!******************!*\
  !*** ./types.ts ***!
  \******************/
/*! exports provided: defaults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaults", function() { return defaults; });
var defaults = {};

/***/ }),

/***/ "./utils/helper.ts":
/*!*************************!*\
  !*** ./utils/helper.ts ***!
  \*************************/
/*! exports provided: processData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processData", function() { return processData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../node_modules/tslib/tslib.es6.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);


var processData = function processData(data) {
  // const hashArray = data[0];
  var startTimeArray = data[1];
  var endTimeArray = data[2];
  var visibleTimeStart = moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(Math.min.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(startTimeArray.values.buffer)) - 300);
  var visibleTimeEnd = moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(Math.max.apply(Math, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"])(endTimeArray.values.buffer)) + 300);
  var groups = [];
  var items = [];
  startTimeArray.values.buffer.map(function (item, i) {
    groups.push({
      id: i,
      title: "Anonym " + (i + 1)
    });
    items.push({
      id: i,
      group: i,
      title: '',
      start_time: moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(item),
      end_time: moment__WEBPACK_IMPORTED_MODULE_1___default.a.unix(endTimeArray.values.buffer[i])
    });
  });
  return {
    groups: groups,
    items: items,
    visibleTimeStart: visibleTimeStart,
    visibleTimeEnd: visibleTimeEnd
  };
};

/***/ }),

/***/ "@grafana/ui":
/*!******************************!*\
  !*** external "@grafana/ui" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__grafana_ui__;

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_moment__;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ })});;
//# sourceMappingURL=module.js.map