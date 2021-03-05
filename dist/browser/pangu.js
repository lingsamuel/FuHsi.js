/*!
 * pangu.js
 * --------
 * @version: 1.0.1
 * @homepage: https://github.com/vinta/pangu.js
 * @license: MIT
 * @author: Vinta Chen <vinta.chen@gmail.com> (https://github.com/vinta)
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("pangu", [], factory);
	else if(typeof exports === 'object')
		exports["pangu"] = factory();
	else
		root["pangu"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  var _require = __webpack_require__(1),
      Pangu = _require.Pangu;

  var _require2 = __webpack_require__(2),
      QuoteNode = _require2.QuoteNode;

  function once(func) {
    var _this = this,
        _arguments = arguments;

    var executed = false;
    return function () {
      if (executed) {
        return;
      }

      var self = _this;
      executed = true;
      func.apply(self, _arguments);
    };
  }

  function debounce(func, delay, mustRunDelay) {
    var _this2 = this,
        _arguments2 = arguments;

    var timer = null;
    var startTime = null;
    return function () {
      var self = _this2;
      var args = _arguments2;
      var currentTime = +new Date();
      clearTimeout(timer);

      if (!startTime) {
        startTime = currentTime;
      }

      if (currentTime - startTime >= mustRunDelay) {
        func.apply(self, args);
        startTime = currentTime;
      } else {
        timer = setTimeout(function () {
          func.apply(self, args);
        }, delay);
      }
    };
  }

  var BrowserPangu = function (_Pangu) {
    _inherits(BrowserPangu, _Pangu);

    function BrowserPangu() {
      var _this3;

      _classCallCheck(this, BrowserPangu);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(BrowserPangu).call(this));
      _this3.isAutoSpacingPageExecuted = false;
      return _this3;
    }

    _createClass(BrowserPangu, [{
      key: "spacingNode",
      value: function spacingNode(contextNode) {
        $(contextNode).find("h1, h2, h3, h4, h5, h6, p").each(function (i, elem) {
          QuoteNode(elem);
        });
      }
    }, {
      key: "spacingPageTitle",
      value: function spacingPageTitle() {}
    }, {
      key: "spacingPageBody",
      value: function spacingPageBody() {
        var start = new Date();
        console.log("parse start", start);
        $("body").each(function (i, elem) {
          QuoteNode(elem);
        });
        var end = new Date();
        console.log("parse end", end, "take", end - start, "ms");
      }
    }, {
      key: "spacingPage",
      value: function spacingPage() {
        this.spacingPageTitle();
        this.spacingPageBody();
      }
    }, {
      key: "autoSpacingPage",
      value: function autoSpacingPage() {
        var pageDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
        var nodeDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
        var nodeMaxWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2000;

        if (!(document.body instanceof Node)) {
          return;
        }

        if (this.isAutoSpacingPageExecuted) {
          return;
        }

        this.isAutoSpacingPageExecuted = true;
        var self = this;
        var onceSpacingPage = once(function () {
          self.spacingPage();
        });
        var videos = document.getElementsByTagName('video');

        if (videos.length === 0) {
          setTimeout(function () {
            onceSpacingPage();
          }, pageDelay);
        } else {
          for (var i = 0; i < videos.length; i++) {
            var video = videos[i];

            if (video.readyState === 4) {
              setTimeout(function () {
                onceSpacingPage();
              }, 3000);
              break;
            }

            video.addEventListener('loadeddata', function () {
              setTimeout(function () {
                onceSpacingPage();
              }, 4000);
            });
          }
        }

        var queue = [];
        var debouncedSpacingNodes = debounce(function () {
          while (queue.length) {
            var node = queue.shift();

            if (node) {
              self.spacingNode(node);
            }
          }
        }, nodeDelay, {
          'maxWait': nodeMaxWait
        });
        var mutationObserver = new MutationObserver(function (mutations, observer) {
          mutations.forEach(function (mutation) {
            switch (mutation.type) {
              case 'childList':
                mutation.addedNodes.forEach(function (node) {
                  if (node.nodeType === Node.ELEMENT_NODE) {
                    queue.push(node);
                  } else if (node.nodeType === Node.TEXT_NODE) {
                    queue.push(node.parentNode);
                  }
                });
                break;

              case 'characterData':
                var node = mutation.target;

                if (node.nodeType === Node.TEXT_NODE) {
                  queue.push(node.parentNode);
                }

                break;

              default:
                break;
            }
          });
          debouncedSpacingNodes();
        });
        mutationObserver.observe(document.body, {
          characterData: true,
          childList: true,
          subtree: true
        });
      }
    }]);

    return BrowserPangu;
  }(Pangu);

  var pangu = new BrowserPangu();
  module.exports = pangu;
  module.exports.default = pangu;
  module.exports.Pangu = BrowserPangu;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function () {
  "use strict";

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  var CJK = "\u2E80-\u2EFF\u2F00-\u2FDF\u3040-\u309F\u30A0-\u30FA\u30FC-\u30FF\u3100-\u312F\u3200-\u32FF\u3400-\u4DBF\u4E00-\u9FFF\uF900-\uFAFF";
  var ANY_CJK = new RegExp("[".concat(CJK, "]"));
  var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK = new RegExp("([".concat(CJK, "])[ ]*([\\:]+|\\.)[ ]*([").concat(CJK, "])"), 'g');
  var CONVERT_TO_FULLWIDTH_CJK_SYMBOLS = new RegExp("([".concat(CJK, "])[ ]*([~\\!;,\\?]+)[ ]*"), 'g');
  var DOTS_CJK = new RegExp("([\\.]{2,}|\u2026)([".concat(CJK, "])"), 'g');
  var FIX_CJK_COLON_ANS = new RegExp("([".concat(CJK, "])\\:([A-Z0-9\\(\\)])"), 'g');
  var CJK_QUOTE = new RegExp("([".concat(CJK, "])([`\"\u05F4])"), 'g');
  var QUOTE_CJK = new RegExp("([`\"\u05F4])([".concat(CJK, "])"), 'g');
  var FIX_QUOTE_ANY_QUOTE = /([`"\u05f4]+)[ ]*(.+?)[ ]*([`"\u05f4]+)/g;
  var CJK_SINGLE_QUOTE_BUT_POSSESSIVE = new RegExp("([".concat(CJK, "])('[^s])"), 'g');
  var SINGLE_QUOTE_CJK = new RegExp("(')([".concat(CJK, "])"), 'g');
  var FIX_POSSESSIVE_SINGLE_QUOTE = new RegExp("([A-Za-z0-9".concat(CJK, "])( )('s)"), 'g');
  var HASH_ANS_CJK_HASH = new RegExp("([".concat(CJK, "])(#)([").concat(CJK, "]+)(#)([").concat(CJK, "])"), 'g');
  var CJK_HASH = new RegExp("([".concat(CJK, "])(#([^ ]))"), 'g');
  var HASH_CJK = new RegExp("(([^ ])#)([".concat(CJK, "])"), 'g');
  var CJK_OPERATOR_ANS = new RegExp("([".concat(CJK, "])([\\+\\-\\*\\/=&\\|<>])([A-Za-z0-9])"), 'g');
  var ANS_OPERATOR_CJK = new RegExp("([A-Za-z0-9])([\\+\\-\\*\\/=&\\|<>])([".concat(CJK, "])"), 'g');
  var FIX_SLASH_AS = /([/]) ([a-z\-_\./]+)/g;
  var FIX_SLASH_AS_SLASH = /([/\.])([A-Za-z\-_\./]+) ([/])/g;
  var CJK_LEFT_BRACKET = new RegExp("([".concat(CJK, "])([\\(\\[\\{<>\u201C])"), 'g');
  var RIGHT_BRACKET_CJK = new RegExp("([\\)\\]\\}<>\u201D])([".concat(CJK, "])"), 'g');
  var FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET = /([\(\[\{<\u201c]+)[ ]*(.+?)[ ]*([\)\]\}>\u201d]+)/;
  var ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET = new RegExp("([A-Za-z0-9".concat(CJK, "])[ ]*([\u201C])([A-Za-z0-9").concat(CJK, "\\-_ ]+)([\u201D])"), 'g');
  var LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK = new RegExp("([\u201C])([A-Za-z0-9".concat(CJK, "\\-_ ]+)([\u201D])[ ]*([A-Za-z0-9").concat(CJK, "])"), 'g');
  var AN_LEFT_BRACKET = /([A-Za-z0-9])([\(\[\{])/g;
  var RIGHT_BRACKET_AN = /([\)\]\}])([A-Za-z0-9])/g;
  var CJK_ANS = new RegExp("([".concat(CJK, "])([A-Za-z\u0370-\u03FF0-9@\\$%\\^&\\*\\-\\+\\\\=\\|/\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])"), 'g');
  var ANS_CJK = new RegExp("([A-Za-z\u0370-\u03FF0-9~\\$%\\^&\\*\\-\\+\\\\=\\|/!;:,\\.\\?\xA1-\xFF\u2150-\u218F\u2700\u2014\u27BF])([".concat(CJK, "])"), 'g');
  var S_A = /(%)([A-Za-z])/g;
  var MIDDLE_DOT = /([ ]*)([\u00b7\u2022\u2027])([ ]*)/g;

  var Pangu = function () {
    function Pangu() {
      _classCallCheck(this, Pangu);

      this.version = '4.0.7';
    }

    _createClass(Pangu, [{
      key: "convertToFullwidth",
      value: function convertToFullwidth(symbols) {
        return symbols.replace(/~/g, '～').replace(/!/g, '！').replace(/;/g, '；').replace(/:/g, '：').replace(/,/g, '，').replace(/\./g, '。').replace(/\?/g, '？');
      }
    }, {
      key: "spacing",
      value: function spacing(text) {
        if (typeof text !== 'string') {
          console.warn("spacing(text) only accepts string but got ".concat(_typeof(text)));
          return text;
        }

        if (text.length <= 1 || !ANY_CJK.test(text)) {
          return text;
        }

        var self = this;
        var newText = text;
        newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS_CJK, function (match, leftCjk, symbols, rightCjk) {
          var fullwidthSymbols = self.convertToFullwidth(symbols);
          return "".concat(leftCjk).concat(fullwidthSymbols).concat(rightCjk);
        });
        newText = newText.replace(CONVERT_TO_FULLWIDTH_CJK_SYMBOLS, function (match, cjk, symbols) {
          var fullwidthSymbols = self.convertToFullwidth(symbols);
          return "".concat(cjk).concat(fullwidthSymbols);
        });
        newText = newText.replace(DOTS_CJK, '$1 $2');
        newText = newText.replace(FIX_CJK_COLON_ANS, '$1：$2');
        newText = newText.replace(CJK_QUOTE, '$1 $2');
        newText = newText.replace(QUOTE_CJK, '$1 $2');
        newText = newText.replace(FIX_QUOTE_ANY_QUOTE, '$1$2$3');
        newText = newText.replace(CJK_SINGLE_QUOTE_BUT_POSSESSIVE, '$1 $2');
        newText = newText.replace(SINGLE_QUOTE_CJK, '$1 $2');
        newText = newText.replace(FIX_POSSESSIVE_SINGLE_QUOTE, "$1's");
        newText = newText.replace(HASH_ANS_CJK_HASH, '$1 $2$3$4 $5');
        newText = newText.replace(CJK_HASH, '$1 $2');
        newText = newText.replace(HASH_CJK, '$1 $3');
        newText = newText.replace(CJK_OPERATOR_ANS, '$1 $2 $3');
        newText = newText.replace(ANS_OPERATOR_CJK, '$1 $2 $3');
        newText = newText.replace(FIX_SLASH_AS, '$1$2');
        newText = newText.replace(FIX_SLASH_AS_SLASH, '$1$2$3');
        newText = newText.replace(CJK_LEFT_BRACKET, '$1 $2');
        newText = newText.replace(RIGHT_BRACKET_CJK, '$1 $2');
        newText = newText.replace(FIX_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1$2$3');
        newText = newText.replace(ANS_CJK_LEFT_BRACKET_ANY_RIGHT_BRACKET, '$1 $2$3$4');
        newText = newText.replace(LEFT_BRACKET_ANY_RIGHT_BRACKET_ANS_CJK, '$1$2$3 $4');
        newText = newText.replace(AN_LEFT_BRACKET, '$1 $2');
        newText = newText.replace(RIGHT_BRACKET_AN, '$1 $2');
        newText = newText.replace(CJK_ANS, '$1 $2');
        newText = newText.replace(ANS_CJK, '$1 $2');
        newText = newText.replace(S_A, '$1 $2');
        newText = newText.replace(MIDDLE_DOT, '・');
        return newText;
      }
    }, {
      key: "spacingText",
      value: function spacingText(text) {
        var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var newText;

        try {
          newText = this.spacing(text);
        } catch (err) {
          callback(err);
          return;
        }

        callback(null, newText);
      }
    }, {
      key: "spacingTextSync",
      value: function spacingTextSync(text) {
        return this.spacing(text);
      }
    }]);

    return Pangu;
  }();

  var pangu = new Pangu();
  module.exports = pangu;
  module.exports.default = pangu;
  module.exports.Pangu = Pangu;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {


// 自动处理中英文混排

// 仅含空白字符
function onlySpace(str) {
    return str == undefined || /^[ \r\n\t]+$/.test(str);
}

// 英文合法字符串
function canBeEn(str) {
    // 仅判断：数字字母、逗号、空格、斜杠、ASCII 引号，Unicode 引号，英文圆括号，英文句号，英文叹号，英文问号，英文 dash，换行，冒号
    return str != undefined && /^[0-9a-zA-Z, //\\\'\"‘’“”\(\)\.\!\?\-\r\n\:]+$/.test(str);
}

function onlyNeutralCharacter(str) {
    // 仅判断中立符号：
    // 数字、空格、斜杠、Unicode 引号，换行
    return str != undefined && /^[0-9 //\\‘’“”\r\n]+$/.test(str);
}

function hasQuote(str) {
    return str != undefined && /[‘’“”]/g.test(str);
}

function hasEnLetter(str) {
    return str != undefined && /[a-zA-Z]/g.test(str);
}

function isQuote(char) {
    return (['\'', '\"', '‘', '’', '“', '”']).includes(char);
}

function isEnOnlyQuote(char) {
    return (['\'', '\"']).includes(char);
}

function isOpenQuote(char) {
    return (['‘', '“']).includes(char);
}

function isCloseQuote(char) {
    return (['’', '”']).includes(char);
}

function isOpenDoubleQuote(char) {
    return (['“']).includes(char);
}

function isCloseDoubleQuote(char) {
    return (['”']).includes(char);
}

function openDoubleQuotingCn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (index > str.length - 2) {
        // 中文引号至少要包含一个中文字符。
        // “中”
        return false;
    }
    if (isOpenDoubleQuote(str[index])) {
        let isQuotingCn = false;
        let i = index + 1;
        let stack = [];
        while (i < str.length) {
            if (isOpenDoubleQuote(str[i])) {
                stack.push(str[i]);
            }
            if (isCloseDoubleQuote(str[i])) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (!canBeEn(str[i]) && stack.length == 0) {
                // 不是英文字符，且已经是最外层嵌套
                isQuotingCn = true;
                break;
            }
            i++;
        }
        return isQuotingCn;
    }

    return false;
}

function closeDoubleQuotingCn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (index < 2) {
        // 中文引号至少要包含一个中文字符。
        // “中”
        return false;
    }
    if (isCloseDoubleQuote(str[index])) {
        let isQuotingCn = false;
        let i = index - 1;
        let stack = [];
        while (i >= 0) {
            if (isCloseDoubleQuote(str[i])) {
                stack.push(str[i]);
            }
            if (isOpenDoubleQuote(str[i])) {
                if (stack.length > 0) {
                    stack.pop();
                } else {
                    break;
                }
            }
            if (!canBeEn(str[i]) && stack.length == 0) {
                // 不是英文字符，且已经是最外层嵌套
                isQuotingCn = true;
                break;
            }
            i--;
        }
        return isQuotingCn;
    }

    return false;
}

// 目标 index 处若是引号，判断是不是英文引号
// 要求临近字符需要是英文或空格（你好 “eng” 你好）=> （你好 "eng" 你好）
function quotingEn(str, index) {
    if (index == undefined || index < 0 || index >= str.length) {
        console.log(`Checking out of index ${index}`);
        return false;
    }
    if (!isQuote(str[index])) {
        // 不是引号
        return false;
    }

    // 理论上讲开引号后、闭引号前不应该跟空格。
    if (isOpenQuote(str[index])) {
        // 开引号后，需要是英文，并且向后遍历是否是中文引号。
        let nextIsEN = (index == str.length - 1 || canBeEn(str[index + 1])) && !openDoubleQuotingCn(str, index);
        return nextIsEN;
    } else if (isCloseQuote(str[index])) {
        // 闭引号前，需要是英文。并且向前遍历是否是中文引号。
        let prevIsEN = (index == 0 || canBeEn(str[index - 1])) && !closeDoubleQuotingCn(str, index);
        return prevIsEN;
    } else if (isEnOnlyQuote(str[index])) {
        return true;
    }
}

function splitStringByLang(str) {
    let arr = [];
    let push = function(s) {
        // 合并空格
        if ((s.trim().length == 0 && arr.length != 0) || (arr.length == 1 && arr[0].trim().length == 0)) {
            arr[arr.length - 1] = arr[arr.length - 1] + s
        } else {
            arr.push(s)
        }
    }

    let lastStart = 0;
    for (let i = 0; i < str.length; i++) {
        if (canBeEn(str[i]) && // 是英文字符
            (!isQuote(str[i]) || quotingEn(str, i))) { // 若是引号，需要是英文引号
            if (lastStart != i) {
                push(str.slice(lastStart, i));
            }
            lastStart = i;

            i++;
            while (i < str.length && canBeEn(str[i]) && // 是英文字符
                (!isQuote(str[i]) || quotingEn(str, i))) { // 若是引号，需要是英文引号
                i++;
            }
            push(str.slice(lastStart, i));
            lastStart = i;
        }
    }
    if (str.length != lastStart) {
        push(str.slice(lastStart, str.length));
    }
    return arr;
}

function sanitizer(str) {
    if (onlySpace(str)) {
        return [];
    }
    let arr = splitStringByLang(str);

    let result = [];
    let isEn = canBeEn(arr[0]) && hasEnLetter(arr[0]);
    // 由于只支持中英，实际上只需要返回第一个元素的语言即可。
    // 不过为了调用者的方便，还是算了。
    for (let i = 0; i < arr.length; i++) {
        // if (onlyNeutralCharacter(arr[i])) {
        //   result.push({
        //     lang: "",
        //     content: arr[i],
        //   });
        // } else {
        result.push({
            lang: isEn ? "en" : "zh",
            content: arr[i],
        });
        isEn = !isEn;
        // }
    }
    return result;
}


function addSpan(lang, str) {
    return `<span lang='${lang}'>${str}</span>`
}

function addCNQuote(fontFamily, autoEmpty) {
    if (!fontFamily.includes('"Chinese Quote",')) {
        return '"Chinese Quote",' + fontFamily;
    }
    if(autoEmpty) {
        return "";
    }
    return '"Chinese Quote",' + fontFamily;
}

function rmCNQuote(fontFamily, autoEmpty) {
    if (fontFamily.includes('"Chinese Quote",')) {
        return fontFamily.replaceAll('"Chinese Quote",', "");
    }
    if(autoEmpty) {
        return "";
    }
    return fontFamily.replaceAll('"Chinese Quote",', "");
}

function autoQuote(lang, fontFamily, autoEmpty) {
    if (lang == "zh") {
        return addCNQuote(fontFamily, autoEmpty);
    } else {
        // 移除 en 的 Chinese Quote
        return rmCNQuote(fontFamily, autoEmpty);
    }
}

function tryTranspile(elem) {
    if (!elem.hasChildNodes()) {
        return;
    }

    let validNodes = [
        Node.TEXT_NODE,
    ]
    let invalidSubElement = [
        "IMG", "CODE", "Q", "TEXTAREA", "SCRIPT", "PRE", "SVG", "PATH", "CANVAS", "NOSCRIPT", "FORM", "STYLE"
    ];

    let parentFontFamily = getComputedStyle(elem).fontFamily;
    for (let n = 0; n < elem.childNodes.length; n++) {
        let node = elem.childNodes[n];
        if (elem.childNodes[n].nodeType == Node.ELEMENT_NODE && !invalidSubElement.includes(elem.childNodes[n].tagName)) {
            tryTranspile(elem.childNodes[n]);
            continue;
        } else if (!validNodes.includes(elem.childNodes[n].nodeType)) {
            continue;
        }

        let str = node.textContent;

        let arr = sanitizer(str);
        // console.log(elem, node,arr);
        if (arr.length == 0) {
            continue;
        }
        if (n == 0 && elem.childNodes.length == 1 && arr.length == 1) {
            // node.lang = arr[0].lang;
            // elem.lang = arr[0].lang;
            if(hasQuote(arr[0].content)){
                console.log(str, arr[0].lang, parentFontFamily)
                elem.style.fontFamily = autoQuote(arr[0].lang, parentFontFamily);
            }
            // 仅含一种语言
            continue;
        }
        // console.log(arr);
        let nextNode = elem.childNodes[n + 1];
        for (let i = 0; i < arr.length; i++) {
            let newNode;
            if(!hasQuote(arr[i].content)){
                newNode = document.createTextNode(arr[i].content);
            } else {
                newNode = document.createElement("span");
                console.log(str, arr[0].lang, parentFontFamily)
                newNode.style.fontFamily = autoQuote(arr[i].lang, parentFontFamily, true);
                newNode.textContent = arr[i].content;
            }
            // newNode.lang = arr[i].lang;
            elem.insertBefore(newNode, nextNode);
        }
        elem.removeChild(node);
        n = n + arr.length - 1;
    }
}

module.exports = tryTranspile;
module.exports.default = tryTranspile;
module.exports.QuoteNode = tryTranspile;


/***/ })
/******/ ]);
});