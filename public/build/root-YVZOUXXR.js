import {
  require_react_dom
} from "/build/_shared/chunk-PW2KS2GM.js";
import {
  ModalContextProvider,
  ThemeButton_default,
  useModalContext
} from "/build/_shared/chunk-XLW3IBII.js";
import {
  AnimatePresence,
  motion,
  useReducedMotion
} from "/build/_shared/chunk-T5QMIDXH.js";
import {
  require_prop_types,
  require_react_is
} from "/build/_shared/chunk-RYEBE5TO.js";
import {
  NAVBAR_ID,
  SupportedTheme,
  ThemeContextProvider,
  fixedWidthLayoutClasses,
  topLevelLinksOnDesktop,
  topLevelLinksOnMobile,
  useTheme
} from "/build/_shared/chunk-HUR7WIRB.js";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Scripts,
  ScrollRestoration,
  import_react_router_dom,
  useCatch,
  useLoaderData
} from "/build/_shared/chunk-UPSQRU4N.js";
import "/build/_shared/chunk-2NY3NSZL.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-RESDZ3PJ.js";

// node_modules/tabbable/index.js
var require_tabbable = __commonJS({
  "node_modules/tabbable/index.js"(exports, module) {
    init_react();
    var candidateSelectors = [
      "input",
      "select",
      "textarea",
      "a[href]",
      "button",
      "[tabindex]",
      "audio[controls]",
      "video[controls]",
      '[contenteditable]:not([contenteditable="false"])'
    ];
    var candidateSelector = candidateSelectors.join(",");
    var matches = typeof Element === "undefined" ? function() {
    } : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    function tabbable2(el, options) {
      options = options || {};
      var regularTabbables = [];
      var orderedTabbables = [];
      var candidates = el.querySelectorAll(candidateSelector);
      if (options.includeContainer) {
        if (matches.call(el, candidateSelector)) {
          candidates = Array.prototype.slice.apply(candidates);
          candidates.unshift(el);
        }
      }
      var i, candidate, candidateTabindex;
      for (i = 0; i < candidates.length; i++) {
        candidate = candidates[i];
        if (!isNodeMatchingSelectorTabbable(candidate))
          continue;
        candidateTabindex = getTabindex(candidate);
        if (candidateTabindex === 0) {
          regularTabbables.push(candidate);
        } else {
          orderedTabbables.push({
            documentOrder: i,
            tabIndex: candidateTabindex,
            node: candidate
          });
        }
      }
      var tabbableNodes = orderedTabbables.sort(sortOrderedTabbables).map(function(a) {
        return a.node;
      }).concat(regularTabbables);
      return tabbableNodes;
    }
    tabbable2.isTabbable = isTabbable;
    tabbable2.isFocusable = isFocusable;
    function isNodeMatchingSelectorTabbable(node) {
      if (!isNodeMatchingSelectorFocusable(node) || isNonTabbableRadio(node) || getTabindex(node) < 0) {
        return false;
      }
      return true;
    }
    function isTabbable(node) {
      if (!node)
        throw new Error("No node provided");
      if (matches.call(node, candidateSelector) === false)
        return false;
      return isNodeMatchingSelectorTabbable(node);
    }
    function isNodeMatchingSelectorFocusable(node) {
      if (node.disabled || isHiddenInput(node) || isHidden(node)) {
        return false;
      }
      return true;
    }
    var focusableCandidateSelector = candidateSelectors.concat("iframe").join(",");
    function isFocusable(node) {
      if (!node)
        throw new Error("No node provided");
      if (matches.call(node, focusableCandidateSelector) === false)
        return false;
      return isNodeMatchingSelectorFocusable(node);
    }
    function getTabindex(node) {
      var tabindexAttr = parseInt(node.getAttribute("tabindex"), 10);
      if (!isNaN(tabindexAttr))
        return tabindexAttr;
      if (isContentEditable(node))
        return 0;
      return node.tabIndex;
    }
    function sortOrderedTabbables(a, b) {
      return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
    }
    function isContentEditable(node) {
      return node.contentEditable === "true";
    }
    function isInput(node) {
      return node.tagName === "INPUT";
    }
    function isHiddenInput(node) {
      return isInput(node) && node.type === "hidden";
    }
    function isRadio(node) {
      return isInput(node) && node.type === "radio";
    }
    function isNonTabbableRadio(node) {
      return isRadio(node) && !isTabbableRadio(node);
    }
    function getCheckedRadio(nodes) {
      for (var i = 0; i < nodes.length; i++) {
        if (nodes[i].checked) {
          return nodes[i];
        }
      }
    }
    function isTabbableRadio(node) {
      if (!node.name)
        return true;
      var radioSet = node.ownerDocument.querySelectorAll('input[type="radio"][name="' + node.name + '"]');
      var checked = getCheckedRadio(radioSet);
      return !checked || checked === node;
    }
    function isHidden(node) {
      return node.offsetParent === null || getComputedStyle(node).visibility === "hidden";
    }
    module.exports = tabbable2;
  }
});

// empty-module:./utils/theme.server
var require_theme = __commonJS({
  "empty-module:./utils/theme.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// node_modules/stackframe/stackframe.js
var require_stackframe = __commonJS({
  "node_modules/stackframe/stackframe.js"(exports, module) {
    init_react();
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("stackframe", [], factory);
      } else if (typeof exports === "object") {
        module.exports = factory();
      } else {
        root.StackFrame = factory();
      }
    })(exports, function() {
      "use strict";
      function _isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      function _capitalize(str) {
        return str.charAt(0).toUpperCase() + str.substring(1);
      }
      function _getter(p) {
        return function() {
          return this[p];
        };
      }
      var booleanProps = ["isConstructor", "isEval", "isNative", "isToplevel"];
      var numericProps = ["columnNumber", "lineNumber"];
      var stringProps = ["fileName", "functionName", "source"];
      var arrayProps = ["args"];
      var objectProps = ["evalOrigin"];
      var props2 = booleanProps.concat(numericProps, stringProps, arrayProps, objectProps);
      function StackFrame(obj) {
        if (!obj)
          return;
        for (var i2 = 0; i2 < props2.length; i2++) {
          if (obj[props2[i2]] !== void 0) {
            this["set" + _capitalize(props2[i2])](obj[props2[i2]]);
          }
        }
      }
      StackFrame.prototype = {
        getArgs: function() {
          return this.args;
        },
        setArgs: function(v) {
          if (Object.prototype.toString.call(v) !== "[object Array]") {
            throw new TypeError("Args must be an Array");
          }
          this.args = v;
        },
        getEvalOrigin: function() {
          return this.evalOrigin;
        },
        setEvalOrigin: function(v) {
          if (v instanceof StackFrame) {
            this.evalOrigin = v;
          } else if (v instanceof Object) {
            this.evalOrigin = new StackFrame(v);
          } else {
            throw new TypeError("Eval Origin must be an Object or StackFrame");
          }
        },
        toString: function() {
          var fileName = this.getFileName() || "";
          var lineNumber = this.getLineNumber() || "";
          var columnNumber = this.getColumnNumber() || "";
          var functionName = this.getFunctionName() || "";
          if (this.getIsEval()) {
            if (fileName) {
              return "[eval] (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
            }
            return "[eval]:" + lineNumber + ":" + columnNumber;
          }
          if (functionName) {
            return functionName + " (" + fileName + ":" + lineNumber + ":" + columnNumber + ")";
          }
          return fileName + ":" + lineNumber + ":" + columnNumber;
        }
      };
      StackFrame.fromString = function StackFrame$$fromString(str) {
        var argsStartIndex = str.indexOf("(");
        var argsEndIndex = str.lastIndexOf(")");
        var functionName = str.substring(0, argsStartIndex);
        var args = str.substring(argsStartIndex + 1, argsEndIndex).split(",");
        var locationString = str.substring(argsEndIndex + 1);
        if (locationString.indexOf("@") === 0) {
          var parts = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(locationString, "");
          var fileName = parts[1];
          var lineNumber = parts[2];
          var columnNumber = parts[3];
        }
        return new StackFrame({
          functionName,
          args: args || void 0,
          fileName,
          lineNumber: lineNumber || void 0,
          columnNumber: columnNumber || void 0
        });
      };
      for (var i = 0; i < booleanProps.length; i++) {
        StackFrame.prototype["get" + _capitalize(booleanProps[i])] = _getter(booleanProps[i]);
        StackFrame.prototype["set" + _capitalize(booleanProps[i])] = function(p) {
          return function(v) {
            this[p] = Boolean(v);
          };
        }(booleanProps[i]);
      }
      for (var j = 0; j < numericProps.length; j++) {
        StackFrame.prototype["get" + _capitalize(numericProps[j])] = _getter(numericProps[j]);
        StackFrame.prototype["set" + _capitalize(numericProps[j])] = function(p) {
          return function(v) {
            if (!_isNumber(v)) {
              throw new TypeError(p + " must be a Number");
            }
            this[p] = Number(v);
          };
        }(numericProps[j]);
      }
      for (var k = 0; k < stringProps.length; k++) {
        StackFrame.prototype["get" + _capitalize(stringProps[k])] = _getter(stringProps[k]);
        StackFrame.prototype["set" + _capitalize(stringProps[k])] = function(p) {
          return function(v) {
            this[p] = String(v);
          };
        }(stringProps[k]);
      }
      return StackFrame;
    });
  }
});

// node_modules/error-stack-parser/error-stack-parser.js
var require_error_stack_parser = __commonJS({
  "node_modules/error-stack-parser/error-stack-parser.js"(exports, module) {
    init_react();
    (function(root, factory) {
      "use strict";
      if (typeof define === "function" && define.amd) {
        define("error-stack-parser", ["stackframe"], factory);
      } else if (typeof exports === "object") {
        module.exports = factory(require_stackframe());
      } else {
        root.ErrorStackParser = factory(root.StackFrame);
      }
    })(exports, function ErrorStackParser(StackFrame) {
      "use strict";
      var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+:\d+/;
      var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+:\d+|\(native\))/m;
      var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code])?$/;
      return {
        parse: function ErrorStackParser$$parse(error) {
          if (typeof error.stacktrace !== "undefined" || typeof error["opera#sourceloc"] !== "undefined") {
            return this.parseOpera(error);
          } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
            return this.parseV8OrIE(error);
          } else if (error.stack) {
            return this.parseFFOrSafari(error);
          } else {
            throw new Error("Cannot parse given Error object");
          }
        },
        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
          if (urlLike.indexOf(":") === -1) {
            return [urlLike];
          }
          var regExp = /(.+?)(?::(\d+))?(?::(\d+))?$/;
          var parts = regExp.exec(urlLike.replace(/[()]/g, ""));
          return [parts[1], parts[2] || void 0, parts[3] || void 0];
        },
        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(CHROME_IE_STACK_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf("(eval ") > -1) {
              line = line.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, "");
            }
            var sanitizedLine = line.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, "");
            var location = sanitizedLine.match(/ (\(.+\)$)/);
            sanitizedLine = location ? sanitizedLine.replace(location[0], "") : sanitizedLine;
            var locationParts = this.extractLocation(location ? location[1] : sanitizedLine);
            var functionName = location && sanitizedLine || void 0;
            var fileName = ["eval", "<anonymous>"].indexOf(locationParts[0]) > -1 ? void 0 : locationParts[0];
            return new StackFrame({
              functionName,
              fileName,
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        },
        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !line.match(SAFARI_NATIVE_CODE_REGEXP);
          }, this);
          return filtered.map(function(line) {
            if (line.indexOf(" > eval") > -1) {
              line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1");
            }
            if (line.indexOf("@") === -1 && line.indexOf(":") === -1) {
              return new StackFrame({
                functionName: line
              });
            } else {
              var functionNameRegex = /((.*".+"[^@]*)?[^@]*)(?:@)/;
              var matches = line.match(functionNameRegex);
              var functionName = matches && matches[1] ? matches[1] : void 0;
              var locationParts = this.extractLocation(line.replace(functionNameRegex, ""));
              return new StackFrame({
                functionName,
                fileName: locationParts[0],
                lineNumber: locationParts[1],
                columnNumber: locationParts[2],
                source: line
              });
            }
          }, this);
        },
        parseOpera: function ErrorStackParser$$parseOpera(e) {
          if (!e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length) {
            return this.parseOpera9(e);
          } else if (!e.stack) {
            return this.parseOpera10(e);
          } else {
            return this.parseOpera11(e);
          }
        },
        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
          var lines = e.message.split("\n");
          var result = [];
          for (var i = 2, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
              result.push(new StackFrame({
                fileName: match[2],
                lineNumber: match[1],
                source: lines[i]
              }));
            }
          }
          return result;
        },
        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
          var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
          var lines = e.stacktrace.split("\n");
          var result = [];
          for (var i = 0, len = lines.length; i < len; i += 2) {
            var match = lineRE.exec(lines[i]);
            if (match) {
              result.push(new StackFrame({
                functionName: match[3] || void 0,
                fileName: match[2],
                lineNumber: match[1],
                source: lines[i]
              }));
            }
          }
          return result;
        },
        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
          var filtered = error.stack.split("\n").filter(function(line) {
            return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) && !line.match(/^Error created at/);
          }, this);
          return filtered.map(function(line) {
            var tokens = line.split("@");
            var locationParts = this.extractLocation(tokens.pop());
            var functionCall = tokens.shift() || "";
            var functionName = functionCall.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
            var argsRaw;
            if (functionCall.match(/\(([^)]*)\)/)) {
              argsRaw = functionCall.replace(/^[^(]+\(([^)]*)\)$/, "$1");
            }
            var args = argsRaw === void 0 || argsRaw === "[arguments not available]" ? void 0 : argsRaw.split(",");
            return new StackFrame({
              functionName,
              args,
              fileName: locationParts[0],
              lineNumber: locationParts[1],
              columnNumber: locationParts[2],
              source: line
            });
          }, this);
        }
      };
    });
  }
});

// browser-route-module:/Users/flo/Development/Devato/app/root.tsx?browser
init_react();

// app/root.tsx
init_react();

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-LYEKZ7V3.css";

// app/styles/global.css
var global_default = "/build/_assets/global-UKKZGAHJ.css";

// app/root.tsx
var React7 = __toModule(require_react());

// app/components/NavBar/NavBar.tsx
init_react();
var React3 = __toModule(require_react());

// app/components/NavBar/NavLink.tsx
init_react();
var getTextColorClassNameForNavLink = (hasStripeHeader, currentTheme) => {
  if (currentTheme === SupportedTheme.DARK) {
    return hasStripeHeader ? "text-white hover:text-cyan-300" : "text-gray-400 hover:text-white";
  }
  if (currentTheme === SupportedTheme.LIGHT) {
    return hasStripeHeader ? "text-white hover:text-cyan-400" : "text-gray-400 hover:text-black";
  }
};
var NavLink = ({
  to,
  hasStripeBackground,
  isCurrentRoute,
  ...rest
}) => {
  const { theme } = useTheme();
  const textColorClassName = getTextColorClassNameForNavLink(hasStripeBackground, theme);
  const IS_CURRENT_ROUTE_CLASSNAME = hasStripeBackground ? "NavLink--is-active-route text-cyan-300" : "NavLink--is-active-route text-navBar-linkActive";
  return /* @__PURE__ */ React.createElement("li", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ React.createElement(Link, {
    prefetch: "intent",
    className: `focus:outline-none block whitespace-nowrap text-lg font-medium ${textColorClassName} ${isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null}`,
    to,
    ...rest
  }));
};
var NavLink_default = NavLink;

// app/components/NavBar/MobileMenu.tsx
init_react();

// node_modules/@reach/menu-button/dist/reach-menu-button.esm.js
init_react();
var import_react14 = __toModule(require_react());
var import_prop_types2 = __toModule(require_prop_types());

// node_modules/tiny-warning/dist/tiny-warning.esm.js
init_react();
var isProduction = false;
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }
    var text = "Warning: " + message;
    if (typeof console !== "undefined") {
      console.warn(text);
    }
    try {
      throw Error(text);
    } catch (x) {
    }
  }
}
var tiny_warning_esm_default = warning;

// node_modules/@reach/popover/dist/reach-popover.esm.js
init_react();
var import_react6 = __toModule(require_react());

// node_modules/@reach/portal/dist/reach-portal.esm.js
init_react();
var import_react3 = __toModule(require_react());

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
init_react();
var import_react = __toModule(require_react());

// node_modules/@reach/utils/can-use-dom/dist/reach-utils-can-use-dom.esm.js
init_react();
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}

// node_modules/@reach/utils/use-isomorphic-layout-effect/dist/reach-utils-use-isomorphic-layout-effect.esm.js
var useIsomorphicLayoutEffect = /* @__PURE__ */ canUseDOM() ? import_react.useLayoutEffect : import_react.useEffect;

// node_modules/@reach/utils/use-force-update/dist/reach-utils-use-force-update.esm.js
init_react();
var import_react2 = __toModule(require_react());
function useForceUpdate() {
  var _useState = (0, import_react2.useState)(Object.create(null)), dispatch = _useState[1];
  return (0, import_react2.useCallback)(function() {
    dispatch(Object.create(null));
  }, []);
}

// node_modules/@reach/portal/dist/reach-portal.esm.js
var import_react_dom = __toModule(require_react_dom());
var Portal = function Portal2(_ref) {
  var children = _ref.children, _ref$type = _ref.type, type = _ref$type === void 0 ? "reach-portal" : _ref$type, containerRef = _ref.containerRef;
  var mountNode = (0, import_react3.useRef)(null);
  var portalNode = (0, import_react3.useRef)(null);
  var forceUpdate = useForceUpdate();
  if (true) {
    (0, import_react3.useEffect)(function() {
      if (containerRef != null) {
        true ? tiny_warning_esm_default(typeof containerRef === "object" && "current" in containerRef, "@reach/portal: Invalid value passed to the `containerRef` of a `Portal`. The portal will be appended to the document body, but if you want to attach it to another DOM node you must pass a valid React ref object to `containerRef`.") : void 0;
        true ? tiny_warning_esm_default(containerRef ? containerRef.current != null : true, "@reach/portal: A ref was passed to the `containerRef` prop of a `Portal`, but no DOM node was attached to it. Be sure to pass the ref to a DOM component.\n\nIf you are forwarding the ref from another component, be sure to use the React.forwardRef API. See https://reactjs.org/docs/forwarding-refs.html.") : void 0;
      }
    }, [containerRef]);
  }
  useIsomorphicLayoutEffect(function() {
    if (!mountNode.current)
      return;
    var ownerDocument = mountNode.current.ownerDocument;
    var body = (containerRef == null ? void 0 : containerRef.current) || ownerDocument.body;
    portalNode.current = ownerDocument == null ? void 0 : ownerDocument.createElement(type);
    body.appendChild(portalNode.current);
    forceUpdate();
    return function() {
      if (portalNode.current && body) {
        body.removeChild(portalNode.current);
      }
    };
  }, [type, forceUpdate, containerRef]);
  return portalNode.current ? /* @__PURE__ */ (0, import_react_dom.createPortal)(children, portalNode.current) : /* @__PURE__ */ (0, import_react3.createElement)("span", {
    ref: mountNode
  });
};
if (true) {
  Portal.displayName = "Portal";
}

// node_modules/@reach/rect/dist/reach-rect.esm.js
init_react();
var import_react4 = __toModule(require_react());
var import_prop_types = __toModule(require_prop_types());

// node_modules/@reach/observe-rect/dist/observe-rect.esm.js
init_react();
var props = ["bottom", "height", "left", "right", "top", "width"];
var rectChanged = function rectChanged2(a, b) {
  if (a === void 0) {
    a = {};
  }
  if (b === void 0) {
    b = {};
  }
  return props.some(function(prop) {
    return a[prop] !== b[prop];
  });
};
var observedNodes = /* @__PURE__ */ new Map();
var rafId;
var run = function run2() {
  var changedStates = [];
  observedNodes.forEach(function(state, node) {
    var newRect = node.getBoundingClientRect();
    if (rectChanged(newRect, state.rect)) {
      state.rect = newRect;
      changedStates.push(state);
    }
  });
  changedStates.forEach(function(state) {
    state.callbacks.forEach(function(cb) {
      return cb(state.rect);
    });
  });
  rafId = window.requestAnimationFrame(run2);
};
function observeRect(node, cb) {
  return {
    observe: function observe() {
      var wasEmpty = observedNodes.size === 0;
      if (observedNodes.has(node)) {
        observedNodes.get(node).callbacks.push(cb);
      } else {
        observedNodes.set(node, {
          rect: void 0,
          hasRectChanged: false,
          callbacks: [cb]
        });
      }
      if (wasEmpty)
        run();
    },
    unobserve: function unobserve() {
      var state = observedNodes.get(node);
      if (state) {
        var index = state.callbacks.indexOf(cb);
        if (index >= 0)
          state.callbacks.splice(index, 1);
        if (!state.callbacks.length)
          observedNodes["delete"](node);
        if (!observedNodes.size)
          cancelAnimationFrame(rafId);
      }
    }
  };
}
var observe_rect_esm_default = observeRect;

// node_modules/@reach/utils/type-check/dist/reach-utils-type-check.esm.js
init_react();
function isBoolean(value) {
  return typeof value === "boolean";
}
function isFunction(value) {
  return !!(value && {}.toString.call(value) == "[object Function]");
}
function isString(value) {
  return typeof value === "string";
}

// node_modules/@reach/rect/dist/reach-rect.esm.js
var Rect = function Rect2(_ref) {
  var onChange = _ref.onChange, _ref$observe = _ref.observe, observe = _ref$observe === void 0 ? true : _ref$observe, children = _ref.children;
  var ref = (0, import_react4.useRef)(null);
  var rect = useRect(ref, {
    observe,
    onChange
  });
  return children({
    ref,
    rect
  });
};
if (true) {
  Rect.displayName = "Rect";
  Rect.propTypes = {
    children: import_prop_types.default.func.isRequired,
    observe: import_prop_types.default.bool,
    onChange: import_prop_types.default.func
  };
}
function useRect(nodeRef, observeOrOptions, deprecated_onChange) {
  var observe;
  var onChange;
  if (isBoolean(observeOrOptions)) {
    observe = observeOrOptions;
  } else {
    var _observeOrOptions$obs;
    observe = (_observeOrOptions$obs = observeOrOptions == null ? void 0 : observeOrOptions.observe) != null ? _observeOrOptions$obs : true;
    onChange = observeOrOptions == null ? void 0 : observeOrOptions.onChange;
  }
  if (isFunction(deprecated_onChange)) {
    onChange = deprecated_onChange;
  }
  if (true) {
    (0, import_react4.useEffect)(function() {
      true ? tiny_warning_esm_default(!isBoolean(observeOrOptions), "Passing `observe` as the second argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `observe` property as the second argument (`useRect(ref, { observe })`).\nSee https://reach.tech/rect#userect-observe") : void 0;
    }, [observeOrOptions]);
    (0, import_react4.useEffect)(function() {
      true ? tiny_warning_esm_default(!isFunction(deprecated_onChange), "Passing `onChange` as the third argument to `useRect` is deprecated and will be removed in a future version of Reach UI. Instead, you can pass an object of options with an `onChange` property as the second argument (`useRect(ref, { onChange })`).\nSee https://reach.tech/rect#userect-onchange") : void 0;
    }, [deprecated_onChange]);
  }
  var _React$useState = (0, import_react4.useState)(nodeRef.current), element = _React$useState[0], setElement = _React$useState[1];
  var initialRectIsSet = (0, import_react4.useRef)(false);
  var initialRefIsSet = (0, import_react4.useRef)(false);
  var _React$useState2 = (0, import_react4.useState)(null), rect = _React$useState2[0], setRect = _React$useState2[1];
  var onChangeRef = (0, import_react4.useRef)(onChange);
  useIsomorphicLayoutEffect(function() {
    onChangeRef.current = onChange;
    if (nodeRef.current !== element) {
      setElement(nodeRef.current);
    }
  });
  useIsomorphicLayoutEffect(function() {
    if (element && !initialRectIsSet.current) {
      initialRectIsSet.current = true;
      setRect(element.getBoundingClientRect());
    }
  }, [element]);
  useIsomorphicLayoutEffect(function() {
    if (!observe) {
      return;
    }
    var elem = element;
    if (!initialRefIsSet.current) {
      initialRefIsSet.current = true;
      elem = nodeRef.current;
    }
    if (!elem) {
      if (true) {
        console.warn("You need to place the ref");
      }
      return;
    }
    var observer = observe_rect_esm_default(elem, function(rect2) {
      onChangeRef.current == null ? void 0 : onChangeRef.current(rect2);
      setRect(rect2);
    });
    observer.observe();
    return function() {
      observer.unobserve();
    };
  }, [observe, element, nodeRef]);
  return rect;
}

// node_modules/@reach/utils/owner-document/dist/reach-utils-owner-document.esm.js
init_react();
function getOwnerDocument(element) {
  return canUseDOM() ? element ? element.ownerDocument : document : null;
}

// node_modules/@reach/utils/compose-refs/dist/reach-utils-compose-refs.esm.js
init_react();
var import_react5 = __toModule(require_react());
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it;
  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      return function() {
        if (i >= o.length)
          return {
            done: true
          };
        return {
          done: false,
          value: o[i++]
        };
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  it = o[Symbol.iterator]();
  return it.next.bind(it);
}
function assignRef(ref, value) {
  if (ref == null)
    return;
  if (isFunction(ref)) {
    ref(value);
  } else {
    try {
      ref.current = value;
    } catch (error) {
      throw new Error('Cannot assign value "' + value + '" to ref "' + ref + '"');
    }
  }
}
function useComposedRefs() {
  for (var _len = arguments.length, refs = new Array(_len), _key = 0; _key < _len; _key++) {
    refs[_key] = arguments[_key];
  }
  return (0, import_react5.useCallback)(function(node) {
    for (var _iterator = _createForOfIteratorHelperLoose(refs), _step; !(_step = _iterator()).done; ) {
      var ref = _step.value;
      assignRef(ref, node);
    }
  }, refs);
}

// node_modules/@reach/popover/dist/reach-popover.esm.js
var import_tabbable = __toModule(require_tabbable());
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
var _excluded = ["as", "targetRef", "position", "unstable_observableRefs"];
var Popover = /* @__PURE__ */ (0, import_react6.forwardRef)(function Popover2(props2, ref) {
  return /* @__PURE__ */ (0, import_react6.createElement)(Portal, null, /* @__PURE__ */ (0, import_react6.createElement)(PopoverImpl, _extends({
    ref
  }, props2)));
});
if (true) {
  Popover.displayName = "Popover";
}
var PopoverImpl = /* @__PURE__ */ (0, import_react6.forwardRef)(function PopoverImpl2(_ref, forwardedRef) {
  var _ref$as = _ref.as, Comp = _ref$as === void 0 ? "div" : _ref$as, targetRef = _ref.targetRef, _ref$position = _ref.position, position = _ref$position === void 0 ? positionDefault : _ref$position, _ref$unstable_observa = _ref.unstable_observableRefs, unstable_observableRefs = _ref$unstable_observa === void 0 ? [] : _ref$unstable_observa, props2 = _objectWithoutPropertiesLoose(_ref, _excluded);
  var popoverRef = (0, import_react6.useRef)(null);
  var popoverRect = useRect(popoverRef, {
    observe: !props2.hidden
  });
  var targetRect = useRect(targetRef, {
    observe: !props2.hidden
  });
  var ref = useComposedRefs(popoverRef, forwardedRef);
  useSimulateTabNavigationForReactTree(targetRef, popoverRef);
  return /* @__PURE__ */ (0, import_react6.createElement)(Comp, _extends({
    "data-reach-popover": "",
    ref
  }, props2, {
    style: _extends({
      position: "absolute"
    }, getStyles.apply(void 0, [position, targetRect, popoverRect].concat(unstable_observableRefs)), props2.style)
  }));
});
if (true) {
  PopoverImpl.displayName = "PopoverImpl";
}
function getStyles(position, targetRect, popoverRect) {
  for (var _len = arguments.length, unstable_observableRefs = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    unstable_observableRefs[_key - 3] = arguments[_key];
  }
  return popoverRect ? position.apply(void 0, [targetRect, popoverRect].concat(unstable_observableRefs.map(function(ref) {
    return ref.current;
  }))) : {
    visibility: "hidden"
  };
}
function getTopPosition(targetRect, popoverRect, isDirectionUp) {
  return {
    top: isDirectionUp ? targetRect.top - popoverRect.height + window.pageYOffset + "px" : targetRect.top + targetRect.height + window.pageYOffset + "px"
  };
}
var positionDefault = function positionDefault2(targetRect, popoverRect) {
  if (!targetRect || !popoverRect) {
    return {};
  }
  var _getCollisions = getCollisions(targetRect, popoverRect), directionRight = _getCollisions.directionRight, directionUp = _getCollisions.directionUp;
  return _extends({
    left: directionRight ? targetRect.right - popoverRect.width + window.pageXOffset + "px" : targetRect.left + window.pageXOffset + "px"
  }, getTopPosition(targetRect, popoverRect, directionUp));
};
function getCollisions(targetRect, popoverRect, offsetLeft, offsetBottom) {
  if (offsetLeft === void 0) {
    offsetLeft = 0;
  }
  if (offsetBottom === void 0) {
    offsetBottom = 0;
  }
  var collisions = {
    top: targetRect.top - popoverRect.height < 0,
    right: window.innerWidth < targetRect.left + popoverRect.width - offsetLeft,
    bottom: window.innerHeight < targetRect.bottom + popoverRect.height - offsetBottom,
    left: targetRect.left + targetRect.width - popoverRect.width < 0
  };
  var directionRight = collisions.right && !collisions.left;
  var directionLeft = collisions.left && !collisions.right;
  var directionUp = collisions.bottom && !collisions.top;
  var directionDown = collisions.top && !collisions.bottom;
  return {
    directionRight,
    directionLeft,
    directionUp,
    directionDown
  };
}
function useSimulateTabNavigationForReactTree(triggerRef, popoverRef) {
  var ownerDocument = getOwnerDocument(triggerRef.current);
  function handleKeyDown(event) {
    if (event.key === "Tab" && popoverRef.current && (0, import_tabbable.default)(popoverRef.current).length === 0) {
      return;
    }
    if (event.key === "Tab" && event.shiftKey) {
      if (shiftTabbedFromElementAfterTrigger(event)) {
        focusLastTabbableInPopover(event);
      } else if (shiftTabbedOutOfPopover(event)) {
        focusTriggerRef(event);
      } else if (shiftTabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    } else if (event.key === "Tab") {
      if (tabbedFromTriggerToPopover()) {
        focusFirstPopoverTabbable(event);
      } else if (tabbedOutOfPopover()) {
        focusTabbableAfterTrigger(event);
      } else if (tabbedToBrowserChrome(event)) {
        disableTabbablesInPopover();
      }
    }
  }
  (0, import_react6.useEffect)(function() {
    ownerDocument.addEventListener("keydown", handleKeyDown);
    return function() {
      ownerDocument.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  function getElementAfterTrigger() {
    var elements = (0, import_tabbable.default)(ownerDocument);
    var targetIndex = elements && triggerRef.current ? elements.indexOf(triggerRef.current) : -1;
    var elementAfterTrigger = elements && elements[targetIndex + 1];
    return popoverRef.current && popoverRef.current.contains(elementAfterTrigger || null) ? false : elementAfterTrigger;
  }
  function tabbedFromTriggerToPopover() {
    return triggerRef.current ? triggerRef.current === ownerDocument.activeElement : false;
  }
  function focusFirstPopoverTabbable(event) {
    var elements = popoverRef.current && (0, import_tabbable.default)(popoverRef.current);
    if (elements && elements[0]) {
      event.preventDefault();
      elements[0].focus();
    }
  }
  function tabbedOutOfPopover() {
    var inPopover = popoverRef.current ? popoverRef.current.contains(ownerDocument.activeElement || null) : false;
    if (inPopover) {
      var elements = popoverRef.current && (0, import_tabbable.default)(popoverRef.current);
      return Boolean(elements && elements[elements.length - 1] === ownerDocument.activeElement);
    }
    return false;
  }
  function focusTabbableAfterTrigger(event) {
    var elementAfterTrigger = getElementAfterTrigger();
    if (elementAfterTrigger) {
      event.preventDefault();
      elementAfterTrigger.focus();
    }
  }
  function shiftTabbedFromElementAfterTrigger(event) {
    if (!event.shiftKey)
      return;
    var elementAfterTrigger = getElementAfterTrigger();
    return event.target === elementAfterTrigger;
  }
  function focusLastTabbableInPopover(event) {
    var elements = popoverRef.current && (0, import_tabbable.default)(popoverRef.current);
    var last = elements && elements[elements.length - 1];
    if (last) {
      event.preventDefault();
      last.focus();
    }
  }
  function shiftTabbedOutOfPopover(event) {
    var elements = popoverRef.current && (0, import_tabbable.default)(popoverRef.current);
    if (elements) {
      return elements.length === 0 ? false : event.target === elements[0];
    }
    return false;
  }
  function focusTriggerRef(event) {
    var _triggerRef$current;
    event.preventDefault();
    (_triggerRef$current = triggerRef.current) == null ? void 0 : _triggerRef$current.focus();
  }
  function tabbedToBrowserChrome(event) {
    var elements = popoverRef.current ? (0, import_tabbable.default)(ownerDocument).filter(function(element) {
      return !popoverRef.current.contains(element);
    }) : null;
    return elements ? event.target === elements[elements.length - 1] : false;
  }
  function shiftTabbedToBrowserChrome(event) {
    return event.target === (0, import_tabbable.default)(ownerDocument)[0];
  }
  var restoreTabIndexTupl\u00E9s = [];
  function disableTabbablesInPopover() {
    var elements = popoverRef.current && (0, import_tabbable.default)(popoverRef.current);
    if (elements) {
      elements.forEach(function(element) {
        restoreTabIndexTupl\u00E9s.push([element, element.tabIndex]);
        element.tabIndex = -1;
      });
      ownerDocument.addEventListener("focusin", enableTabbablesInPopover);
    }
  }
  function enableTabbablesInPopover() {
    ownerDocument.removeEventListener("focusin", enableTabbablesInPopover);
    restoreTabIndexTupl\u00E9s.forEach(function(_ref2) {
      var element = _ref2[0], tabIndex = _ref2[1];
      element.tabIndex = tabIndex;
    });
  }
}

// node_modules/@reach/dropdown/dist/reach-dropdown.esm.js
init_react();
var import_react12 = __toModule(require_react());

// node_modules/@reach/auto-id/dist/reach-auto-id.esm.js
init_react();
var import_react7 = __toModule(require_react());
var serverHandoffComplete = false;
var id = 0;
var genId = function genId2() {
  return ++id;
};
function useId(idFromProps) {
  var initialId = idFromProps || (serverHandoffComplete ? genId() : null);
  var _React$useState = (0, import_react7.useState)(initialId), id2 = _React$useState[0], setId = _React$useState[1];
  useIsomorphicLayoutEffect(function() {
    if (id2 === null) {
      setId(genId());
    }
  }, []);
  (0, import_react7.useEffect)(function() {
    if (serverHandoffComplete === false) {
      serverHandoffComplete = true;
    }
  }, []);
  return id2 != null ? String(id2) : void 0;
}

// node_modules/@reach/descendants/dist/reach-descendants.esm.js
init_react();
var import_react9 = __toModule(require_react());

// node_modules/@reach/utils/context/dist/reach-utils-context.esm.js
init_react();
var import_react8 = __toModule(require_react());
function createNamedContext(name, defaultValue) {
  var Ctx = /* @__PURE__ */ (0, import_react8.createContext)(defaultValue);
  if (true) {
    Ctx.displayName = name;
  }
  return Ctx;
}

// node_modules/@reach/utils/noop/dist/reach-utils-noop.esm.js
init_react();
function noop() {
}

// node_modules/@reach/descendants/dist/reach-descendants.esm.js
function _objectWithoutPropertiesLoose2(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends2() {
  _extends2 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends2.apply(this, arguments);
}
var _excluded2 = ["element", "index"];
function createDescendantContext(name, initialValue) {
  if (initialValue === void 0) {
    initialValue = {};
  }
  var descendants = [];
  return createNamedContext(name, _extends2({
    descendants,
    registerDescendant: noop,
    unregisterDescendant: noop
  }, initialValue));
}
function useDescendant(descendant, context, indexProp) {
  var forceUpdate = useForceUpdate();
  var _React$useContext = (0, import_react9.useContext)(context), registerDescendant = _React$useContext.registerDescendant, unregisterDescendant = _React$useContext.unregisterDescendant, descendants = _React$useContext.descendants;
  var index = indexProp != null ? indexProp : descendants.findIndex(function(item) {
    return item.element === descendant.element;
  });
  useIsomorphicLayoutEffect(function() {
    if (!descendant.element)
      forceUpdate();
    registerDescendant(_extends2({}, descendant, {
      index
    }));
    return function() {
      unregisterDescendant(descendant.element);
    };
  }, [descendant, forceUpdate, index, registerDescendant, unregisterDescendant].concat(Object.values(descendant)));
  return index;
}
function useDescendantsInit() {
  return (0, import_react9.useState)([]);
}
function useDescendants(ctx) {
  return (0, import_react9.useContext)(ctx).descendants;
}
function DescendantProvider(_ref) {
  var Ctx = _ref.context, children = _ref.children, items = _ref.items, set = _ref.set;
  var registerDescendant = (0, import_react9.useCallback)(function(_ref2) {
    var element = _ref2.element, explicitIndex = _ref2.index, rest = _objectWithoutPropertiesLoose2(_ref2, _excluded2);
    if (!element) {
      return;
    }
    set(function(items2) {
      var newItems;
      if (explicitIndex != null) {
        return [].concat(items2, [_extends2({}, rest, {
          element,
          index: explicitIndex
        })]).sort(function(a, b) {
          return a.index - b.index;
        });
      } else if (items2.length === 0) {
        newItems = [_extends2({}, rest, {
          element,
          index: 0
        })];
      } else if (items2.find(function(item) {
        return item.element === element;
      })) {
        newItems = items2;
      } else {
        var index = items2.findIndex(function(item) {
          if (!item.element || !element) {
            return false;
          }
          return Boolean(item.element.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_PRECEDING);
        });
        var newItem = _extends2({}, rest, {
          element,
          index
        });
        if (index === -1) {
          newItems = [].concat(items2, [newItem]);
        } else {
          newItems = [].concat(items2.slice(0, index), [newItem], items2.slice(index));
        }
      }
      return newItems.map(function(item, index2) {
        return _extends2({}, item, {
          index: index2
        });
      });
    });
  }, []);
  var unregisterDescendant = (0, import_react9.useCallback)(function(element) {
    if (!element) {
      return;
    }
    set(function(items2) {
      return items2.filter(function(item) {
        return element !== item.element;
      });
    });
  }, []);
  return /* @__PURE__ */ (0, import_react9.createElement)(Ctx.Provider, {
    value: (0, import_react9.useMemo)(function() {
      return {
        descendants: items,
        registerDescendant,
        unregisterDescendant
      };
    }, [items, registerDescendant, unregisterDescendant])
  }, children);
}
function useDescendantKeyDown(context, options) {
  var _React$useContext2 = (0, import_react9.useContext)(context), descendants = _React$useContext2.descendants;
  var callback = options.callback, currentIndex = options.currentIndex, filter = options.filter, _options$key = options.key, key = _options$key === void 0 ? "index" : _options$key, _options$orientation = options.orientation, orientation = _options$orientation === void 0 ? "vertical" : _options$orientation, _options$rotate = options.rotate, rotate = _options$rotate === void 0 ? true : _options$rotate, _options$rtl = options.rtl, rtl = _options$rtl === void 0 ? false : _options$rtl;
  return function handleKeyDown(event) {
    if (!["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(event.key)) {
      return;
    }
    var index = currentIndex != null ? currentIndex : -1;
    var selectableDescendants = filter ? descendants.filter(filter) : descendants;
    if (!selectableDescendants.length) {
      return;
    }
    var selectableIndex = selectableDescendants.findIndex(function(descendant) {
      return descendant.index === currentIndex;
    });
    function getNextOption() {
      var atBottom = index === getLastOption().index;
      return atBottom ? rotate ? getFirstOption() : selectableDescendants[selectableIndex] : selectableDescendants[(selectableIndex + 1) % selectableDescendants.length];
    }
    function getPreviousOption() {
      var atTop = index === getFirstOption().index;
      return atTop ? rotate ? getLastOption() : selectableDescendants[selectableIndex] : selectableDescendants[(selectableIndex - 1 + selectableDescendants.length) % selectableDescendants.length];
    }
    function getFirstOption() {
      return selectableDescendants[0];
    }
    function getLastOption() {
      return selectableDescendants[selectableDescendants.length - 1];
    }
    switch (event.key) {
      case "ArrowDown":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var next = getNextOption();
          callback(key === "option" ? next : next[key]);
        }
        break;
      case "ArrowUp":
        if (orientation === "vertical" || orientation === "both") {
          event.preventDefault();
          var prev = getPreviousOption();
          callback(key === "option" ? prev : prev[key]);
        }
        break;
      case "ArrowLeft":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var nextOrPrev = (rtl ? getNextOption : getPreviousOption)();
          callback(key === "option" ? nextOrPrev : nextOrPrev[key]);
        }
        break;
      case "ArrowRight":
        if (orientation === "horizontal" || orientation === "both") {
          event.preventDefault();
          var prevOrNext = (rtl ? getPreviousOption : getNextOption)();
          callback(key === "option" ? prevOrNext : prevOrNext[key]);
        }
        break;
      case "PageUp":
        event.preventDefault();
        var prevOrFirst = (event.ctrlKey ? getPreviousOption : getFirstOption)();
        callback(key === "option" ? prevOrFirst : prevOrFirst[key]);
        break;
      case "Home":
        event.preventDefault();
        var first = getFirstOption();
        callback(key === "option" ? first : first[key]);
        break;
      case "PageDown":
        event.preventDefault();
        var nextOrLast = (event.ctrlKey ? getNextOption : getLastOption)();
        callback(key === "option" ? nextOrLast : nextOrLast[key]);
        break;
      case "End":
        event.preventDefault();
        var last = getLastOption();
        callback(key === "option" ? last : last[key]);
        break;
    }
  };
}

// node_modules/@reach/utils/is-right-click/dist/reach-utils-is-right-click.esm.js
init_react();
function isRightClick(nativeEvent) {
  return "which" in nativeEvent ? nativeEvent.which === 3 : "button" in nativeEvent ? nativeEvent.button === 2 : false;
}

// node_modules/@reach/utils/use-previous/dist/reach-utils-use-previous.esm.js
init_react();
var import_react10 = __toModule(require_react());
function usePrevious(value) {
  var ref = (0, import_react10.useRef)(null);
  (0, import_react10.useEffect)(function() {
    ref.current = value;
  }, [value]);
  return ref.current;
}

// node_modules/@reach/utils/make-id/dist/reach-utils-make-id.esm.js
init_react();
function makeId() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
  return args.filter(function(val) {
    return val != null;
  }).join("--");
}

// node_modules/@reach/utils/use-stateful-ref-value/dist/reach-utils-use-stateful-ref-value.esm.js
init_react();
var import_react11 = __toModule(require_react());
function useStatefulRefValue(ref, initialState2) {
  var _useState = (0, import_react11.useState)(initialState2), state = _useState[0], setState = _useState[1];
  var callbackRef = (0, import_react11.useCallback)(function(refValue) {
    ref.current = refValue;
    setState(refValue);
  }, []);
  return [state, callbackRef];
}

// node_modules/@reach/utils/compose-event-handlers/dist/reach-utils-compose-event-handlers.esm.js
init_react();
function composeEventHandlers(theirHandler, ourHandler) {
  return function(event) {
    theirHandler && theirHandler(event);
    if (!event.defaultPrevented) {
      return ourHandler(event);
    }
  };
}

// node_modules/@reach/dropdown/dist/reach-dropdown.esm.js
function _objectWithoutPropertiesLoose3(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function _extends3() {
  _extends3 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends3.apply(this, arguments);
}
var _excluded3 = ["onKeyDown", "onMouseDown", "id", "ref"];
var _excluded22 = ["as"];
var _excluded32 = ["index", "isLink", "onClick", "onDragStart", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseUp", "onSelect", "disabled", "onFocus", "valueText", "ref"];
var _excluded4 = ["as"];
var _excluded5 = ["id", "onKeyDown", "ref"];
var _excluded6 = ["as"];
var _excluded7 = ["onBlur", "portal", "position", "ref"];
var _excluded8 = ["as"];
var CLEAR_SELECTION_INDEX = "CLEAR_SELECTION_INDEX";
var CLICK_MENU_ITEM = "CLICK_MENU_ITEM";
var CLOSE_MENU = "CLOSE_MENU";
var OPEN_MENU_AT_FIRST_ITEM = "OPEN_MENU_AT_FIRST_ITEM";
var OPEN_MENU_AT_INDEX = "OPEN_MENU_AT_INDEX";
var OPEN_MENU_CLEARED = "OPEN_MENU_CLEARED";
var SEARCH_FOR_ITEM = "SEARCH_FOR_ITEM";
var SELECT_ITEM_AT_INDEX = "SELECT_ITEM_AT_INDEX";
var SET_BUTTON_ID = "SET_BUTTON_ID";
var DropdownDescendantContext = /* @__PURE__ */ createDescendantContext("DropdownDescendantContext");
var DropdownContext = /* @__PURE__ */ createNamedContext("DropdownContext", {});
var initialState = {
  triggerId: null,
  isExpanded: false,
  typeaheadQuery: "",
  selectionIndex: -1
};
var DropdownProvider = function DropdownProvider2(_ref) {
  var id2 = _ref.id, children = _ref.children;
  var triggerRef = (0, import_react12.useRef)(null);
  var dropdownRef = (0, import_react12.useRef)(null);
  var popoverRef = (0, import_react12.useRef)(null);
  var _useDescendantsInit = useDescendantsInit(), descendants = _useDescendantsInit[0], setDescendants = _useDescendantsInit[1];
  var _id = useId(id2);
  var dropdownId = id2 || makeId("menu", _id);
  var triggerId = makeId("menu-button", dropdownId);
  var _React$useReducer = (0, import_react12.useReducer)(reducer, _extends3({}, initialState, {
    triggerId
  })), state = _React$useReducer[0], dispatch = _React$useReducer[1];
  var triggerClickedRef = (0, import_react12.useRef)(false);
  var selectCallbacks = (0, import_react12.useRef)([]);
  var readyToSelect = (0, import_react12.useRef)(false);
  var mouseDownStartPosRef = (0, import_react12.useRef)({
    x: 0,
    y: 0
  });
  var context = {
    dispatch,
    dropdownId,
    dropdownRef,
    mouseDownStartPosRef,
    popoverRef,
    readyToSelect,
    selectCallbacks,
    state,
    triggerClickedRef,
    triggerRef
  };
  (0, import_react12.useEffect)(function() {
    if (state.isExpanded) {
      window.__REACH_DISABLE_TOOLTIPS = true;
      window.requestAnimationFrame(function() {
        focus(dropdownRef.current);
      });
    } else {
      window.__REACH_DISABLE_TOOLTIPS = false;
    }
  }, [state.isExpanded]);
  return /* @__PURE__ */ (0, import_react12.createElement)(DescendantProvider, {
    context: DropdownDescendantContext,
    items: descendants,
    set: setDescendants
  }, /* @__PURE__ */ (0, import_react12.createElement)(DropdownContext.Provider, {
    value: context
  }, isFunction(children) ? children({
    isExpanded: state.isExpanded,
    isOpen: state.isExpanded
  }) : children));
};
if (true) {
  DropdownProvider.displayName = "DropdownProvider";
}
function useDropdownTrigger(_ref2) {
  var onKeyDown = _ref2.onKeyDown, onMouseDown = _ref2.onMouseDown, id2 = _ref2.id, forwardedRef = _ref2.ref, props2 = _objectWithoutPropertiesLoose3(_ref2, _excluded3);
  var _useDropdownContext = useDropdownContext(), dispatch = _useDropdownContext.dispatch, dropdownId = _useDropdownContext.dropdownId, mouseDownStartPosRef = _useDropdownContext.mouseDownStartPosRef, triggerClickedRef = _useDropdownContext.triggerClickedRef, triggerRef = _useDropdownContext.triggerRef, _useDropdownContext$s = _useDropdownContext.state, triggerId = _useDropdownContext$s.triggerId, isExpanded = _useDropdownContext$s.isExpanded;
  var ref = useComposedRefs(triggerRef, forwardedRef);
  var items = useDropdownDescendants();
  var firstNonDisabledIndex = (0, import_react12.useMemo)(function() {
    return items.findIndex(function(item) {
      return !item.disabled;
    });
  }, [items]);
  (0, import_react12.useEffect)(function() {
    if (id2 != null && id2 !== triggerId) {
      dispatch({
        type: SET_BUTTON_ID,
        payload: id2
      });
    }
  }, [triggerId, dispatch, id2]);
  function handleKeyDown(event) {
    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        dispatch({
          type: OPEN_MENU_AT_INDEX,
          payload: {
            index: firstNonDisabledIndex
          }
        });
        break;
      case "Enter":
      case " ":
        dispatch({
          type: OPEN_MENU_AT_INDEX,
          payload: {
            index: firstNonDisabledIndex
          }
        });
        break;
    }
  }
  function handleMouseDown(event) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }
    mouseDownStartPosRef.current = {
      x: event.clientX,
      y: event.clientY
    };
    if (!isExpanded) {
      triggerClickedRef.current = true;
    }
    if (isExpanded) {
      dispatch({
        type: CLOSE_MENU
      });
    } else {
      dispatch({
        type: OPEN_MENU_CLEARED
      });
    }
  }
  return {
    data: {
      isExpanded,
      controls: dropdownId
    },
    props: _extends3({}, props2, {
      ref,
      id: triggerId || void 0,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown),
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      type: "button"
    })
  };
}
var DropdownTrigger = /* @__PURE__ */ (0, import_react12.forwardRef)(function(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as, Comp = _ref3$as === void 0 ? "button" : _ref3$as, rest = _objectWithoutPropertiesLoose3(_ref3, _excluded22);
  var _useDropdownTrigger = useDropdownTrigger(_extends3({}, rest, {
    ref: forwardedRef
  })), props2 = _useDropdownTrigger.props;
  return /* @__PURE__ */ (0, import_react12.createElement)(Comp, _extends3({
    "data-reach-dropdown-trigger": ""
  }, props2));
});
if (true) {
  DropdownTrigger.displayName = "DropdownTrigger";
}
function useDropdownItem(_ref4) {
  var indexProp = _ref4.index, _ref4$isLink = _ref4.isLink, isLink = _ref4$isLink === void 0 ? false : _ref4$isLink, onClick = _ref4.onClick, onDragStart = _ref4.onDragStart, onMouseDown = _ref4.onMouseDown, onMouseEnter = _ref4.onMouseEnter, onMouseLeave = _ref4.onMouseLeave, onMouseMove = _ref4.onMouseMove, onMouseUp = _ref4.onMouseUp, onSelect = _ref4.onSelect, disabled = _ref4.disabled, onFocus = _ref4.onFocus, valueTextProp = _ref4.valueText, forwardedRef = _ref4.ref, props2 = _objectWithoutPropertiesLoose3(_ref4, _excluded32);
  var _useDropdownContext2 = useDropdownContext(), dispatch = _useDropdownContext2.dispatch, dropdownRef = _useDropdownContext2.dropdownRef, mouseDownStartPosRef = _useDropdownContext2.mouseDownStartPosRef, readyToSelect = _useDropdownContext2.readyToSelect, selectCallbacks = _useDropdownContext2.selectCallbacks, triggerRef = _useDropdownContext2.triggerRef, _useDropdownContext2$ = _useDropdownContext2.state, selectionIndex = _useDropdownContext2$.selectionIndex, isExpanded = _useDropdownContext2$.isExpanded;
  var ownRef = (0, import_react12.useRef)(null);
  var _React$useState = (0, import_react12.useState)(valueTextProp || ""), valueText = _React$useState[0], setValueText = _React$useState[1];
  var setValueTextFromDOM = (0, import_react12.useCallback)(function(node) {
    if (!valueTextProp && node != null && node.textContent) {
      setValueText(node.textContent);
    }
  }, [valueTextProp]);
  var mouseEventStarted = (0, import_react12.useRef)(false);
  var _useStatefulRefValue = useStatefulRefValue(ownRef, null), element = _useStatefulRefValue[0], handleRefSet = _useStatefulRefValue[1];
  var descendant = (0, import_react12.useMemo)(function() {
    return {
      element,
      key: valueText,
      disabled,
      isLink
    };
  }, [disabled, element, isLink, valueText]);
  var index = useDescendant(descendant, DropdownDescendantContext, indexProp);
  var isSelected = index === selectionIndex && !disabled;
  var ref = useComposedRefs(forwardedRef, handleRefSet, setValueTextFromDOM);
  selectCallbacks.current[index] = onSelect;
  function select() {
    focus(triggerRef.current);
    onSelect && onSelect();
    dispatch({
      type: CLICK_MENU_ITEM
    });
  }
  function handleClick(event) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }
    if (isLink) {
      if (disabled) {
        event.preventDefault();
      } else {
        select();
      }
    }
  }
  function handleDragStart(event) {
    if (isLink) {
      event.preventDefault();
    }
  }
  function handleMouseDown(event) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }
    if (isLink) {
      mouseEventStarted.current = true;
    } else {
      event.preventDefault();
    }
  }
  function handleMouseEnter(event) {
    var doc = getOwnerDocument(dropdownRef.current);
    if (!isSelected && index != null && !disabled) {
      if (dropdownRef != null && dropdownRef.current && dropdownRef.current !== doc.activeElement && ownRef.current !== doc.activeElement) {
        dropdownRef.current.focus();
      }
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index
        }
      });
    }
  }
  function handleMouseLeave(event) {
    dispatch({
      type: CLEAR_SELECTION_INDEX
    });
  }
  function handleMouseMove(event) {
    if (!readyToSelect.current) {
      var threshold = 8;
      var deltaX = Math.abs(event.clientX - mouseDownStartPosRef.current.x);
      var deltaY = Math.abs(event.clientY - mouseDownStartPosRef.current.y);
      if (deltaX > threshold || deltaY > threshold) {
        readyToSelect.current = true;
      }
    }
    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index,
          dropdownRef
        }
      });
    }
  }
  function handleFocus() {
    readyToSelect.current = true;
    if (!isSelected && index != null && !disabled) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index
        }
      });
    }
  }
  function handleMouseUp(event) {
    if (isRightClick(event.nativeEvent)) {
      return;
    }
    if (!readyToSelect.current) {
      readyToSelect.current = true;
      return;
    }
    if (isLink) {
      if (mouseEventStarted.current) {
        mouseEventStarted.current = false;
      } else if (ownRef.current) {
        ownRef.current.click();
      }
    } else {
      if (!disabled) {
        select();
      }
    }
  }
  (0, import_react12.useEffect)(function() {
    if (isExpanded) {
      var id2 = window.setTimeout(function() {
        readyToSelect.current = true;
      }, 400);
      return function() {
        window.clearTimeout(id2);
      };
    } else {
      readyToSelect.current = false;
    }
  }, [isExpanded, readyToSelect]);
  (0, import_react12.useEffect)(function() {
    var ownerDocument = getOwnerDocument(ownRef.current);
    ownerDocument.addEventListener("mouseup", listener);
    return function() {
      ownerDocument.removeEventListener("mouseup", listener);
    };
    function listener() {
      mouseEventStarted.current = false;
    }
  }, []);
  return {
    data: {
      disabled
    },
    props: _extends3({
      id: useItemId(index),
      tabIndex: -1
    }, props2, {
      ref,
      "data-disabled": disabled ? "" : void 0,
      "data-selected": isSelected ? "" : void 0,
      "data-valuetext": valueText,
      onClick: composeEventHandlers(onClick, handleClick),
      onDragStart: composeEventHandlers(onDragStart, handleDragStart),
      onMouseDown: composeEventHandlers(onMouseDown, handleMouseDown),
      onMouseEnter: composeEventHandlers(onMouseEnter, handleMouseEnter),
      onMouseLeave: composeEventHandlers(onMouseLeave, handleMouseLeave),
      onMouseMove: composeEventHandlers(onMouseMove, handleMouseMove),
      onFocus: composeEventHandlers(onFocus, handleFocus),
      onMouseUp: composeEventHandlers(onMouseUp, handleMouseUp)
    })
  };
}
var DropdownItem = /* @__PURE__ */ (0, import_react12.forwardRef)(function(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as, Comp = _ref5$as === void 0 ? "div" : _ref5$as, rest = _objectWithoutPropertiesLoose3(_ref5, _excluded4);
  var _useDropdownItem = useDropdownItem(_extends3({}, rest, {
    ref: forwardedRef
  })), props2 = _useDropdownItem.props;
  return /* @__PURE__ */ (0, import_react12.createElement)(Comp, _extends3({
    "data-reach-dropdown-item": ""
  }, props2));
});
if (true) {
  DropdownItem.displayName = "DropdownItem";
}
function useDropdownItems(_ref6) {
  _ref6.id;
  var onKeyDown = _ref6.onKeyDown, forwardedRef = _ref6.ref, props2 = _objectWithoutPropertiesLoose3(_ref6, _excluded5);
  var _useDropdownContext3 = useDropdownContext(), dispatch = _useDropdownContext3.dispatch, triggerRef = _useDropdownContext3.triggerRef, dropdownRef = _useDropdownContext3.dropdownRef, selectCallbacks = _useDropdownContext3.selectCallbacks, dropdownId = _useDropdownContext3.dropdownId, _useDropdownContext3$ = _useDropdownContext3.state, isExpanded = _useDropdownContext3$.isExpanded, triggerId = _useDropdownContext3$.triggerId, selectionIndex = _useDropdownContext3$.selectionIndex, typeaheadQuery = _useDropdownContext3$.typeaheadQuery;
  var items = useDropdownDescendants();
  var ref = useComposedRefs(dropdownRef, forwardedRef);
  (0, import_react12.useEffect)(function() {
    var match = findItemFromTypeahead(items, typeaheadQuery);
    if (typeaheadQuery && match != null) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: match,
          dropdownRef
        }
      });
    }
    var timeout = window.setTimeout(function() {
      return typeaheadQuery && dispatch({
        type: SEARCH_FOR_ITEM,
        payload: ""
      });
    }, 1e3);
    return function() {
      return window.clearTimeout(timeout);
    };
  }, [dispatch, items, typeaheadQuery, dropdownRef]);
  var prevItemsLength = usePrevious(items.length);
  var prevSelected = usePrevious(items[selectionIndex]);
  var prevSelectionIndex = usePrevious(selectionIndex);
  (0, import_react12.useEffect)(function() {
    if (selectionIndex > items.length - 1) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: items.length - 1,
          dropdownRef
        }
      });
    } else if (prevItemsLength !== items.length && selectionIndex > -1 && prevSelected && prevSelectionIndex === selectionIndex && items[selectionIndex] !== prevSelected) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index: items.findIndex(function(i) {
            return i.key === (prevSelected == null ? void 0 : prevSelected.key);
          }),
          dropdownRef
        }
      });
    }
  }, [dropdownRef, dispatch, items, prevItemsLength, prevSelected, prevSelectionIndex, selectionIndex]);
  var handleKeyDown = composeEventHandlers(function handleKeyDown2(event) {
    var key = event.key;
    if (!isExpanded) {
      return;
    }
    switch (key) {
      case "Enter":
      case " ":
        var selected = items.find(function(item) {
          return item.index === selectionIndex;
        });
        if (selected && !selected.disabled) {
          event.preventDefault();
          if (selected.isLink && selected.element) {
            selected.element.click();
          } else {
            focus(triggerRef.current);
            selectCallbacks.current[selected.index] && selectCallbacks.current[selected.index]();
            dispatch({
              type: CLICK_MENU_ITEM
            });
          }
        }
        break;
      case "Escape":
        focus(triggerRef.current);
        dispatch({
          type: CLOSE_MENU
        });
        break;
      case "Tab":
        event.preventDefault();
        break;
      default:
        if (isString(key) && key.length === 1) {
          var query = typeaheadQuery + key.toLowerCase();
          dispatch({
            type: SEARCH_FOR_ITEM,
            payload: query
          });
        }
        break;
    }
  }, useDescendantKeyDown(DropdownDescendantContext, {
    currentIndex: selectionIndex,
    orientation: "vertical",
    rotate: false,
    filter: function filter(item) {
      return !item.disabled;
    },
    callback: function callback(index) {
      dispatch({
        type: SELECT_ITEM_AT_INDEX,
        payload: {
          index,
          dropdownRef
        }
      });
    },
    key: "index"
  }));
  return {
    data: {
      activeDescendant: useItemId(selectionIndex) || void 0,
      triggerId
    },
    props: _extends3({
      tabIndex: -1
    }, props2, {
      ref,
      id: dropdownId,
      onKeyDown: composeEventHandlers(onKeyDown, handleKeyDown)
    })
  };
}
var DropdownItems = /* @__PURE__ */ (0, import_react12.forwardRef)(function(_ref7, forwardedRef) {
  var _ref7$as = _ref7.as, Comp = _ref7$as === void 0 ? "div" : _ref7$as, rest = _objectWithoutPropertiesLoose3(_ref7, _excluded6);
  var _useDropdownItems = useDropdownItems(_extends3({}, rest, {
    ref: forwardedRef
  })), props2 = _useDropdownItems.props;
  return /* @__PURE__ */ (0, import_react12.createElement)(Comp, _extends3({
    "data-reach-dropdown-items": ""
  }, props2));
});
if (true) {
  DropdownItems.displayName = "DropdownItems";
}
function useDropdownPopover(_ref8) {
  var onBlur = _ref8.onBlur, _ref8$portal = _ref8.portal, portal = _ref8$portal === void 0 ? true : _ref8$portal, position = _ref8.position, forwardedRef = _ref8.ref, props2 = _objectWithoutPropertiesLoose3(_ref8, _excluded7);
  var _useDropdownContext4 = useDropdownContext(), triggerRef = _useDropdownContext4.triggerRef, triggerClickedRef = _useDropdownContext4.triggerClickedRef, dispatch = _useDropdownContext4.dispatch, dropdownRef = _useDropdownContext4.dropdownRef, popoverRef = _useDropdownContext4.popoverRef, isExpanded = _useDropdownContext4.state.isExpanded;
  var ref = useComposedRefs(popoverRef, forwardedRef);
  (0, import_react12.useEffect)(function() {
    if (!isExpanded) {
      return;
    }
    var ownerDocument = getOwnerDocument(popoverRef.current);
    function listener(event) {
      if (triggerClickedRef.current) {
        triggerClickedRef.current = false;
      } else if (!popoverContainsEventTarget(popoverRef.current, event.target)) {
        dispatch({
          type: CLOSE_MENU
        });
      }
    }
    ownerDocument.addEventListener("mousedown", listener);
    return function() {
      ownerDocument.removeEventListener("mousedown", listener);
    };
  }, [triggerClickedRef, triggerRef, dispatch, dropdownRef, popoverRef, isExpanded]);
  return {
    data: {
      portal,
      position,
      targetRef: triggerRef,
      isExpanded
    },
    props: _extends3({
      ref,
      hidden: !isExpanded,
      onBlur: composeEventHandlers(onBlur, function(event) {
        if (event.currentTarget.contains(event.relatedTarget)) {
          return;
        }
        dispatch({
          type: CLOSE_MENU
        });
      })
    }, props2)
  };
}
var DropdownPopover = /* @__PURE__ */ (0, import_react12.forwardRef)(function(_ref9, forwardedRef) {
  var _ref9$as = _ref9.as, Comp = _ref9$as === void 0 ? "div" : _ref9$as, rest = _objectWithoutPropertiesLoose3(_ref9, _excluded8);
  var _useDropdownPopover = useDropdownPopover(_extends3({}, rest, {
    ref: forwardedRef
  })), _useDropdownPopover$d = _useDropdownPopover.data, portal = _useDropdownPopover$d.portal, targetRef = _useDropdownPopover$d.targetRef, position = _useDropdownPopover$d.position, props2 = _useDropdownPopover.props;
  var sharedProps = {
    "data-reach-dropdown-popover": ""
  };
  return portal ? /* @__PURE__ */ (0, import_react12.createElement)(Popover, _extends3({}, props2, sharedProps, {
    as: Comp,
    targetRef,
    position
  })) : /* @__PURE__ */ (0, import_react12.createElement)(Comp, _extends3({}, props2, sharedProps));
});
if (true) {
  DropdownPopover.displayName = "DropdownPopover";
}
function findItemFromTypeahead(items, string) {
  if (string === void 0) {
    string = "";
  }
  if (!string) {
    return null;
  }
  var found = items.find(function(item) {
    var _item$element, _item$element$dataset, _item$element$dataset2;
    return item.disabled ? false : (_item$element = item.element) == null ? void 0 : (_item$element$dataset = _item$element.dataset) == null ? void 0 : (_item$element$dataset2 = _item$element$dataset.valuetext) == null ? void 0 : _item$element$dataset2.toLowerCase().startsWith(string);
  });
  return found ? items.indexOf(found) : null;
}
function useItemId(index) {
  var _React$useContext = (0, import_react12.useContext)(DropdownContext), dropdownId = _React$useContext.dropdownId;
  return index != null && index > -1 ? makeId("option-" + index, dropdownId) : void 0;
}
function focus(element) {
  element && element.focus();
}
function popoverContainsEventTarget(popover, target) {
  return !!(popover && popover.contains(target));
}
function reducer(state, action) {
  if (action === void 0) {
    action = {};
  }
  switch (action.type) {
    case CLICK_MENU_ITEM:
      return _extends3({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });
    case CLOSE_MENU:
      return _extends3({}, state, {
        isExpanded: false,
        selectionIndex: -1
      });
    case OPEN_MENU_AT_FIRST_ITEM:
      return _extends3({}, state, {
        isExpanded: true,
        selectionIndex: 0
      });
    case OPEN_MENU_AT_INDEX:
      return _extends3({}, state, {
        isExpanded: true,
        selectionIndex: action.payload.index
      });
    case OPEN_MENU_CLEARED:
      return _extends3({}, state, {
        isExpanded: true,
        selectionIndex: -1
      });
    case SELECT_ITEM_AT_INDEX: {
      var _action$payload$dropd = action.payload.dropdownRef, dropdownRef = _action$payload$dropd === void 0 ? {
        current: null
      } : _action$payload$dropd;
      if (action.payload.index >= 0 && action.payload.index !== state.selectionIndex) {
        if (dropdownRef.current) {
          var doc = getOwnerDocument(dropdownRef.current);
          if (dropdownRef.current !== (doc == null ? void 0 : doc.activeElement)) {
            dropdownRef.current.focus();
          }
        }
        return _extends3({}, state, {
          selectionIndex: action.payload.max != null ? Math.min(Math.max(action.payload.index, 0), action.payload.max) : Math.max(action.payload.index, 0)
        });
      }
      return state;
    }
    case CLEAR_SELECTION_INDEX:
      return _extends3({}, state, {
        selectionIndex: -1
      });
    case SET_BUTTON_ID:
      return _extends3({}, state, {
        triggerId: action.payload
      });
    case SEARCH_FOR_ITEM:
      if (typeof action.payload !== "undefined") {
        return _extends3({}, state, {
          typeaheadQuery: action.payload
        });
      }
      return state;
    default:
      return state;
  }
}
function useDropdownContext() {
  return (0, import_react12.useContext)(DropdownContext);
}
function useDropdownDescendants() {
  return useDescendants(DropdownDescendantContext);
}

// node_modules/@reach/utils/dev-utils/dist/reach-utils-dev-utils.esm.js
init_react();
var import_react13 = __toModule(require_react());
var checkedPkgs = {};
function checkStyles(packageName) {
  if (true) {
    var _ref = typeof process !== "undefined" ? process.env : {
      NODE_ENV: "development"
    }, environment = _ref.NODE_ENV;
    if (checkedPkgs[packageName])
      return;
    checkedPkgs[packageName] = true;
    if (environment === "development" && parseInt(window.getComputedStyle(document.body).getPropertyValue("--reach-" + packageName), 10) !== 1) {
      console.warn("@reach/" + packageName + ' styles not found. If you are using a bundler like webpack or parcel include this in the entry file of your app before any of your own styles:\n  \n      import "@reach/' + packageName + `/styles.css";
  
    Otherwise you'll need to include them some other way:
  
      <link rel="stylesheet" type="text/css" href="node_modules/@reach/` + packageName + '/styles.css" />\n  \n    For more information visit https://ui.reach.tech/styling.\n    ');
    }
  }
}
function useCheckStyles(packageName) {
  if (true) {
    var name = (0, import_react13.useRef)(packageName);
    (0, import_react13.useEffect)(function() {
      return void (name.current = packageName);
    }, [packageName]);
    (0, import_react13.useEffect)(function() {
      return checkStyles(name.current);
    }, []);
  }
}

// node_modules/@reach/menu-button/dist/reach-menu-button.esm.js
var import_react_is = __toModule(require_react_is());
function _extends4() {
  _extends4 = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends4.apply(this, arguments);
}
function _objectWithoutPropertiesLoose4(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var _excluded9 = ["as", "id", "children"];
var _excluded23 = ["as"];
var _excluded33 = ["as"];
var _excluded42 = ["as"];
var _excluded52 = ["as"];
var _excluded62 = ["as", "component", "onSelect"];
var _excluded72 = ["portal"];
var _excluded82 = ["as"];
var Menu = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref, forwardedRef) {
  var _ref$as = _ref.as, Comp = _ref$as === void 0 ? import_react14.Fragment : _ref$as, id2 = _ref.id, children = _ref.children, rest = _objectWithoutPropertiesLoose4(_ref, _excluded9);
  useCheckStyles("menu-button");
  var parentIsFragment = (0, import_react14.useMemo)(function() {
    try {
      return (0, import_react_is.isFragment)(/* @__PURE__ */ (0, import_react14.createElement)(Comp, null));
    } catch (err) {
      return false;
    }
  }, [Comp]);
  var props2 = parentIsFragment ? {} : _extends4({
    ref: forwardedRef,
    id: id2,
    "data-reach-menu": ""
  }, rest);
  return /* @__PURE__ */ (0, import_react14.createElement)(Comp, props2, /* @__PURE__ */ (0, import_react14.createElement)(DropdownProvider, {
    id: id2,
    children
  }));
});
if (true) {
  Menu.displayName = "Menu";
  Menu.propTypes = {
    children: /* @__PURE__ */ import_prop_types2.default.oneOfType([import_prop_types2.default.func, import_prop_types2.default.node])
  };
}
var MenuButton = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref2, forwardedRef) {
  var _ref2$as = _ref2.as, Comp = _ref2$as === void 0 ? "button" : _ref2$as, rest = _objectWithoutPropertiesLoose4(_ref2, _excluded23);
  var _useDropdownTrigger = useDropdownTrigger(_extends4({}, rest, {
    ref: forwardedRef
  })), _useDropdownTrigger$d = _useDropdownTrigger.data, isExpanded = _useDropdownTrigger$d.isExpanded, controls = _useDropdownTrigger$d.controls, props2 = _useDropdownTrigger.props;
  return /* @__PURE__ */ (0, import_react14.createElement)(Comp, _extends4({
    "aria-expanded": isExpanded ? true : void 0,
    "aria-haspopup": true,
    "aria-controls": controls
  }, props2, {
    "data-reach-menu-button": ""
  }));
});
if (true) {
  MenuButton.displayName = "MenuButton";
  MenuButton.propTypes = {
    children: import_prop_types2.default.node
  };
}
var MenuItemImpl = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref3, forwardedRef) {
  var _ref3$as = _ref3.as, Comp = _ref3$as === void 0 ? "div" : _ref3$as, rest = _objectWithoutPropertiesLoose4(_ref3, _excluded33);
  var _useDropdownItem = useDropdownItem(_extends4({}, rest, {
    ref: forwardedRef
  })), disabled = _useDropdownItem.data.disabled, props2 = _useDropdownItem.props;
  return /* @__PURE__ */ (0, import_react14.createElement)(Comp, _extends4({
    role: "menuitem"
  }, props2, {
    "aria-disabled": disabled || void 0,
    "data-reach-menu-item": ""
  }));
});
var MenuItem = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref4, forwardedRef) {
  var _ref4$as = _ref4.as, as = _ref4$as === void 0 ? "div" : _ref4$as, props2 = _objectWithoutPropertiesLoose4(_ref4, _excluded42);
  return /* @__PURE__ */ (0, import_react14.createElement)(MenuItemImpl, _extends4({}, props2, {
    ref: forwardedRef,
    as
  }));
});
if (true) {
  MenuItem.displayName = "MenuItem";
  MenuItem.propTypes = {
    as: import_prop_types2.default.any,
    onSelect: import_prop_types2.default.func.isRequired
  };
}
var MenuItems = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref5, forwardedRef) {
  var _ref5$as = _ref5.as, Comp = _ref5$as === void 0 ? "div" : _ref5$as, rest = _objectWithoutPropertiesLoose4(_ref5, _excluded52);
  var _useDropdownItems = useDropdownItems(_extends4({}, rest, {
    ref: forwardedRef
  })), _useDropdownItems$dat = _useDropdownItems.data, activeDescendant = _useDropdownItems$dat.activeDescendant, triggerId = _useDropdownItems$dat.triggerId, props2 = _useDropdownItems.props;
  return /* @__PURE__ */ (0, import_react14.createElement)(Comp, _extends4({
    "aria-activedescendant": activeDescendant,
    "aria-labelledby": triggerId || void 0,
    role: "menu"
  }, props2, {
    "data-reach-menu-items": ""
  }));
});
if (true) {
  MenuItems.displayName = "MenuItems";
  MenuItems.propTypes = {
    children: import_prop_types2.default.node
  };
}
var MenuLink = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref6, forwardedRef) {
  var _ref6$as = _ref6.as, as = _ref6$as === void 0 ? "a" : _ref6$as, component = _ref6.component, onSelect = _ref6.onSelect, props2 = _objectWithoutPropertiesLoose4(_ref6, _excluded62);
  useDevWarning(!component, "[@reach/menu-button]: Please use the `as` prop instead of `component`");
  return /* @__PURE__ */ (0, import_react14.createElement)(MenuItemImpl, _extends4({}, props2, {
    ref: forwardedRef,
    "data-reach-menu-link": "",
    as,
    isLink: true,
    onSelect: onSelect || noop
  }));
});
if (true) {
  MenuLink.displayName = "MenuLink";
  MenuLink.propTypes = {
    as: import_prop_types2.default.any
  };
}
var MenuList = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref7, forwardedRef) {
  var _ref7$portal = _ref7.portal, portal = _ref7$portal === void 0 ? true : _ref7$portal, props2 = _objectWithoutPropertiesLoose4(_ref7, _excluded72);
  return /* @__PURE__ */ (0, import_react14.createElement)(MenuPopover, {
    portal
  }, /* @__PURE__ */ (0, import_react14.createElement)(MenuItems, _extends4({}, props2, {
    ref: forwardedRef,
    "data-reach-menu-list": ""
  })));
});
if (true) {
  MenuList.displayName = "MenuList";
  MenuList.propTypes = {
    children: import_prop_types2.default.node.isRequired
  };
}
var MenuPopover = /* @__PURE__ */ (0, import_react14.forwardRef)(function(_ref8, forwardedRef) {
  var _ref8$as = _ref8.as, Comp = _ref8$as === void 0 ? "div" : _ref8$as, rest = _objectWithoutPropertiesLoose4(_ref8, _excluded82);
  var _useDropdownPopover = useDropdownPopover(_extends4({}, rest, {
    ref: forwardedRef
  })), _useDropdownPopover$d = _useDropdownPopover.data, portal = _useDropdownPopover$d.portal, targetRef = _useDropdownPopover$d.targetRef, position = _useDropdownPopover$d.position, props2 = _useDropdownPopover.props;
  var sharedProps = {
    "data-reach-menu-popover": ""
  };
  return portal ? /* @__PURE__ */ (0, import_react14.createElement)(Popover, _extends4({}, props2, sharedProps, {
    as: Comp,
    targetRef,
    position
  })) : /* @__PURE__ */ (0, import_react14.createElement)(Comp, _extends4({}, props2, sharedProps));
});
if (true) {
  MenuPopover.displayName = "MenuPopover";
  MenuPopover.propTypes = {
    children: import_prop_types2.default.node
  };
}
function useDevWarning(condition, message) {
  if (true) {
    var messageRef = (0, import_react14.useRef)(message);
    (0, import_react14.useEffect)(function() {
      messageRef.current = message;
    }, [message]);
    (0, import_react14.useEffect)(function() {
      true ? tiny_warning_esm_default(condition, messageRef.current) : void 0;
    }, [condition]);
  }
}

// app/components/NavBar/MobileMenuList.tsx
init_react();
var MobileMenuList = (props2) => {
  const shouldReduceMotion = useReducedMotion();
  return /* @__PURE__ */ React.createElement(AnimatePresence, null, props2.isExpanded ? /* @__PURE__ */ React.createElement(MenuPopover, {
    position: (mobileMenuExpandButton) => ({
      top: `calc(${Number(mobileMenuExpandButton?.top) + Number(mobileMenuExpandButton?.height)}px + 2.25rem)`,
      left: 0,
      bottom: 0,
      right: 0
    }),
    className: "block z-50"
  }, /* @__PURE__ */ React.createElement(motion.div, {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.15,
      ease: "linear"
    },
    className: "MenuLists h-full overflow-y-scroll border-t border-mobileNav-border pb-12 outline-none"
  }, /* @__PURE__ */ React.createElement(MenuItems, {
    className: "MobileNav__MenuItemsWrapper flex border-none bg-transparent p-0 h-full flex-col"
  }, topLevelLinksOnMobile.map((link) => /* @__PURE__ */ React.createElement(MenuLink, {
    className: "MobileNav__MenuItem border-b border-mobileNav-border px-[5vw] text-lg py-9",
    key: link.href,
    as: Link,
    to: link.href
  }, link.displayName)), /* @__PURE__ */ React.createElement("div", {
    className: "noscript-hidden py-9 text-center flex justify-center"
  }, /* @__PURE__ */ React.createElement(ThemeButton_default, {
    hasStripeHeader: props2.hasStripeHeader
  }))))) : null);
};
var MobileMenuList_default = MobileMenuList;

// app/components/NavBar/MobileMenu.tsx
var React2 = __toModule(require_react());
var getClassName = (theme, hasStripeHeader, modalIsOpen) => {
  if (modalIsOpen) {
    return theme === SupportedTheme.LIGHT ? "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black" : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
  if (theme === SupportedTheme.LIGHT) {
    return hasStripeHeader ? "text-blue-800 hover:text-white border-blue-800 hover:border-white focus:border-white" : "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black";
  }
  if (theme === SupportedTheme.DARK) {
    return hasStripeHeader ? "text-blue-200 hover:text-white border-blue-200 hover:border-white focus:border-white" : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
};
var MobileMenu = (props2) => {
  const { modalIsOpen, updateModalStatus } = useModalContext();
  const className = getClassName(props2.theme, props2.hasStripeHeader, modalIsOpen);
  return /* @__PURE__ */ React2.createElement(Menu, null, ({ isExpanded }) => {
    React2.useEffect(() => {
      updateModalStatus(isExpanded);
    }, [isExpanded]);
    return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement(MenuButton, {
      id: "menu--1",
      "aria-label": isExpanded ? "Close menu" : "Open menu",
      name: isExpanded ? "Close menu" : "Open menu",
      className: "focus:outline-none inline-flex h-12 w-12 items-center justify-center rounded-full border-2 p-1 transition " + className
    }, /* @__PURE__ */ React2.createElement("svg", {
      className: `ham hamRotate ham8 ${modalIsOpen ? "active" : ""}`,
      viewBox: "0 0 100 100",
      width: "80",
      id: "ham-button",
      fill: "currentColor"
    }, /* @__PURE__ */ React2.createElement("path", {
      className: "line top",
      d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20",
      fill: "currentColor"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: "line middle",
      d: "m 30,50 h 40",
      fill: "currentColor"
    }), /* @__PURE__ */ React2.createElement("path", {
      className: "line bottom",
      d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20",
      fill: "currentColor"
    }))), /* @__PURE__ */ React2.createElement(MobileMenuList_default, {
      ...props2,
      isExpanded
    }));
  });
};
var MobileMenu_default = MobileMenu;

// app/components/NavBar/NavBar.tsx
var Navbar = () => {
  const location = (0, import_react_router_dom.useLocation)();
  const hasStripeBackground = !location.pathname.startsWith("/blog");
  const { modalIsOpen } = useModalContext();
  const { theme } = useTheme();
  const currentTopLevelRoute = location.pathname.split("/")[1];
  return /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("div", {
    className: fixedWidthLayoutClasses + " mb-10 md:mb-16 lg:mb-20",
    id: NAVBAR_ID
  }, /* @__PURE__ */ React3.createElement("nav", {
    className: "px-5vw nav-bar-wrapper py-10 pb-15 w-full mx-auto flex max-w-8xl items-center justify-between"
  }, /* @__PURE__ */ React3.createElement("div", null, /* @__PURE__ */ React3.createElement(NavLogo, {
    hasStripeBackground,
    isCurrentRoute: getIsActiveRoute("/", currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute)
  })), /* @__PURE__ */ React3.createElement("ul", {
    className: "hidden lg:flex lg:w-1/2 justify-between list-none"
  }, topLevelLinksOnDesktop.map((link) => {
    return /* @__PURE__ */ React3.createElement(NavLink_default, {
      key: link.href,
      to: link.href,
      hasStripeBackground,
      isCurrentRoute: getIsActiveRoute(link.href, currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute)
    }, link.displayName);
  })), /* @__PURE__ */ React3.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "block lg:hidden"
  }, /* @__PURE__ */ React3.createElement(MobileMenu_default, {
    hasStripeHeader: hasStripeBackground,
    theme
  })), /* @__PURE__ */ React3.createElement("div", {
    className: "noscript-hidden hidden lg:block"
  }, /* @__PURE__ */ React3.createElement(ThemeButton_default, {
    hasStripeHeader: hasStripeBackground
  }))))), hasStripeBackground && !modalIsOpen && /* @__PURE__ */ React3.createElement("div", {
    id: "stripes"
  }, /* @__PURE__ */ React3.createElement("span", null), /* @__PURE__ */ React3.createElement("span", null), /* @__PURE__ */ React3.createElement("span", null), /* @__PURE__ */ React3.createElement("span", null), /* @__PURE__ */ React3.createElement("span", null)));
};
var getIsActiveRoute = (href, currentTopLevelRoute) => {
  if (href.startsWith("/#")) {
    return false;
  }
  return "/" + currentTopLevelRoute === href;
};
var NavBar_default = Navbar;
var NavLogo = (props2) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const logoText = getLogoClassName(props2.hasStripeBackground, theme, modalIsOpen);
  const IS_CURRENT_ROUTE_CLASSNAME = "NavLink--is-active-route";
  return /* @__PURE__ */ React3.createElement(Link, {
    prefetch: "intent",
    to: "/",
    className: `logo focus:outline-none block whitespace-nowrap text-2xl font-medium transition uppercase ${logoText} ${props2.isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null}`
  }, /* @__PURE__ */ React3.createElement("img", {
    src: "./images/logo.png",
    width: 150
  }));
};
var getLogoClassName = (hasStripeBg, theme, modalIsOpen) => {
  if (modalIsOpen) {
    return theme === SupportedTheme.LIGHT ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white";
  }
  if (hasStripeBg) {
    return theme === SupportedTheme.LIGHT ? "text-cyan-100" : "text-cyan-200";
  }
  return theme === SupportedTheme.LIGHT ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white";
};

// app/components/NavBar/NavBar.css
var NavBar_default2 = "/build/_assets/NavBar-UV7VHNAO.css";

// app/components/Error/ErrorPage.css
var ErrorPage_default = "/build/_assets/ErrorPage-Y3QCBTQ2.css";

// app/components/ThemeButton/ThemeButton.css
var ThemeButton_default2 = "/build/_assets/ThemeButton-72VSPY3H.css";

// app/components/Footer/Footer.tsx
init_react();
var React4 = __toModule(require_react());
var Footer = ({}) => {
  return /* @__PURE__ */ React4.createElement("div", {
    className: "footer"
  }, /* @__PURE__ */ React4.createElement("footer", {
    className: "p-4 bg-white sm:p-6 dark:bg-gray-800"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "md:flex md:justify-between"
  }, /* @__PURE__ */ React4.createElement("div", {
    className: "mb-6 md:mb-0"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "https://devato.de",
    className: "flex items-center"
  }, /* @__PURE__ */ React4.createElement("img", {
    src: "./images/logo.png",
    className: "mr-3 h-8",
    alt: "Logo"
  }), /* @__PURE__ */ React4.createElement("span", {
    className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
  }))), /* @__PURE__ */ React4.createElement("div", {
    className: "grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3"
  }, /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Ressourcen"), /* @__PURE__ */ React4.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "https://devato.de/blog",
    className: "hover:underline"
  }, "Blog")), /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "https://github.com/DevatoDE?tab=repositories",
    className: "hover:underline"
  }, "Code Templates")), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", {
    href: "https://github.com/DevatoDE?tab=repositories",
    className: "hover:underline"
  }, "Upwork Testimonials")))), /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Service"), /* @__PURE__ */ React4.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline "
  }, "Shopify Development")), /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline"
  }, "Backend Automation")), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline"
  }, "Shopify Optimierung")))), /* @__PURE__ */ React4.createElement("div", null, /* @__PURE__ */ React4.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Rechtliches"), /* @__PURE__ */ React4.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "hover:underline"
  }, "Impressum")), /* @__PURE__ */ React4.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "hover:underline"
  }, "Datenschutz")), /* @__PURE__ */ React4.createElement("li", null, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "hover:underline"
  }, "AGB")))))), /* @__PURE__ */ React4.createElement("hr", {
    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  }), /* @__PURE__ */ React4.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React4.createElement("span", {
    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "\xA9 2022 ", /* @__PURE__ */ React4.createElement("a", {
    href: "https://flowbite.com",
    className: "hover:underline"
  }, "Flowbite\u2122"), ". All Rights Reserved."), /* @__PURE__ */ React4.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0"
  }, /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }))), /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React4.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React4.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React4.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
    clipRule: "evenodd"
  })))))));
};
var Footer_default = Footer;

// app/root.tsx
var import_theme = __toModule(require_theme());

// app/components/Error/ErrorPage.tsx
init_react();
var React6 = __toModule(require_react());

// app/components/Error/RedBox.tsx
init_react();
var React5 = __toModule(require_react());
var import_error_stack_parser = __toModule(require_error_stack_parser());
function RedBox({ error }) {
  const [isVisible, setIsVisible] = React5.useState(true);
  const frames = import_error_stack_parser.default.parse(error);
  const className = !isVisible ? " pointer-events-none opacity-0" : "";
  return /* @__PURE__ */ React5.createElement("div", {
    className: `fixed inset-0 z-10 flex items-center justify-center transition ${className}`
  }, /* @__PURE__ */ React5.createElement("button", {
    className: "absolute inset-0 block h-full w-full bg-black opacity-75",
    onClick: () => setIsVisible(false)
  }), /* @__PURE__ */ React5.createElement("div", {
    className: "border-lg text-textLgColor relative mx-5vw my-16 max-h-75vh overflow-y-auto rounded-lg bg-red-500 p-12 text-xl"
  }, /* @__PURE__ */ React5.createElement("h2", null, error.message), /* @__PURE__ */ React5.createElement("div", null, frames.map((frame) => /* @__PURE__ */ React5.createElement("div", {
    key: [frame.fileName, frame.lineNumber, frame.columnNumber].join("-"),
    className: "pt-4"
  }, /* @__PURE__ */ React5.createElement("h6", {
    className: "pt-2"
  }, frame.functionName), /* @__PURE__ */ React5.createElement("div", {
    className: "font-light opacity-75"
  }, frame.fileName, ":", frame.lineNumber, ":", frame.columnNumber))))));
}

// app/components/Error/ErrorPage.tsx
var ErrorPage = (props2) => {
  const error = props2.error;
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("main", null, error && true ? /* @__PURE__ */ React6.createElement(RedBox, {
    error
  }) : null, /* @__PURE__ */ React6.createElement("div", {
    className: "font-mono text-white flex flex-col w-full h-full justify-start pt-20 px-10 sm:px-0 max-w-[800px] m-auto z-50 "
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "text-4xl custom2:text-5xl mb-5 xs:mb-10 font-bold z-50"
  }, "UH OH! You're lost."), /* @__PURE__ */ React6.createElement("div", {
    className: "text-lg inline-flex mb-10 xs:mb-14 z-50 leading-9"
  }, /* @__PURE__ */ React6.createElement("p", null, /* @__PURE__ */ React6.createElement("span", {
    style: { color: "#0CECDD" }
  }, '"www.alissanguyen.dev', props2.pathname, '"'), " ", "is not a page on alissanguyen.dev. How you got here is a mystery. But you can click the", " ", /* @__PURE__ */ React6.createElement("span", {
    className: "font-bold text-sky-500"
  }, "blue"), " button below to go back to homepage, or the", " ", /* @__PURE__ */ React6.createElement("span", {
    className: "font-bold text-rose-500"
  }, "red"), " one to explore my blog :)")), /* @__PURE__ */ React6.createElement("div", {
    className: "z-50 mb-10 text-lg tracking-wide xs:tracking-normal"
  }, /* @__PURE__ */ React6.createElement("a", {
    href: "/",
    className: "rounded-full px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white mr-5"
  }, "Home"), /* @__PURE__ */ React6.createElement("a", {
    href: "/blog",
    className: "rounded-full px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white mr-5"
  }, "Blog"))), /* @__PURE__ */ React6.createElement(Flowers, null)));
};
var ErrorPage_default2 = ErrorPage;
var Flowers = () => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "FlowersContainer relative"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "night"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flowers absolute "
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower Flower--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--6"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower Flower--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower Flower--3"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--3"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "1.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-long"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-long__top"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-long__bottom"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "growing-grass"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass Flower__Grass--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass--top"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass--bottom"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--8"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassOverlay"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "growing-grass"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass Flower__Grass--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass--top"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__Grass--bottom"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--8"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__GrassOverlay"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-right Flower__g-right--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.8s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-right Flower__g-right--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.8s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--3"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--4"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--5"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--6"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--7"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--8"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-front__Line"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--1"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--2"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--3"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--4"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--5"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--6"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--7"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--8"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--0"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--1"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.8s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--2"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--3"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--4"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--5"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--6"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.4s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.8s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React6.createElement("div", {
    className: "long-g long-g--7"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.2s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.5s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "Leaf Leaf--3"
  }))))));
};

// app/utils/ga.ts
init_react();
function injectGA() {
  if (typeof window == "undefined") {
    return;
  }
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-4J0L3BTY29");
}

// app/root.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: tailwind_default },
    { rel: "stylesheet", href: ThemeButton_default2 },
    { rel: "stylesheet", href: NavBar_default2 },
    { rel: "stylesheet", href: global_default },
    { rel: "stylesheet", href: ErrorPage_default },
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com"
    },
    {
      rel: "stylesheet",
      href: "/fonts/zen_kaku_gothic_antique.css"
    },
    {
      rel: "stylesheet",
      href: "/fonts/pacifico.css"
    },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      href: "/favicon-16x16.png"
    },
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      href: "/favicon-32x32.png"
    },
    {
      rel: "manifest",
      href: "/site.webmanifest"
    }
  ];
};
var App = () => {
  const { theme } = useLoaderData();
  return /* @__PURE__ */ React7.createElement(ThemeContextProvider, {
    initialTheme: theme
  }, /* @__PURE__ */ React7.createElement(ModalContextProvider, null, /* @__PURE__ */ React7.createElement(Document, null, /* @__PURE__ */ React7.createElement(Layout, null, /* @__PURE__ */ React7.createElement(import_react_router_dom.Outlet, null)))));
};
var convertSupportedThemeToClassName = (theme, onBlogRoute) => {
  if (theme === SupportedTheme.LIGHT) {
    if (onBlogRoute) {
      return "light-theme light-theme-blog";
    }
    return "light-theme";
  } else {
    if (onBlogRoute) {
      return "dark-theme dark-theme-blog";
    }
    return "dark-theme";
  }
};
var Document = (props2) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const location = (0, import_react_router_dom.useLocation)();
  const onBlogRoute = location.pathname.startsWith("/blog");
  React7.useEffect(() => {
    document.body.classList.add("Background__ColorTransition--short");
  }, []);
  return /* @__PURE__ */ React7.createElement("html", {
    lang: "en",
    className: `${convertSupportedThemeToClassName(theme, onBlogRoute)}`
  }, /* @__PURE__ */ React7.createElement("head", null, /* @__PURE__ */ React7.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "googlebot",
    content: "notranslate"
  }), false ? /* @__PURE__ */ React7.createElement("base", {
    href: "https://www.devato.de"
  }) : null, /* @__PURE__ */ React7.createElement(Meta, null), /* @__PURE__ */ React7.createElement(Links, null), /* @__PURE__ */ React7.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-4J0L3BTY29"
  }), /* @__PURE__ */ React7.createElement("script", null, injectGA())), /* @__PURE__ */ React7.createElement("body", {
    id: "root",
    className: `${modalIsOpen ? "overflow-hidden" : ""}`
  }, /* @__PURE__ */ React7.createElement("script", {
    async: true,
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8"
  }), /* @__PURE__ */ React7.createElement("noscript", null, /* @__PURE__ */ React7.createElement("div", {
    style: {
      backgroundColor: "black",
      color: "white",
      padding: 30
    }
  }, /* @__PURE__ */ React7.createElement("p", {
    style: { fontSize: "1.5em" }
  }, "Diese Seite funktioniert besser mit JavaScript aktiviert..."))), props2.children, /* @__PURE__ */ React7.createElement(ScrollRestoration, null), /* @__PURE__ */ React7.createElement(Scripts, null), /* @__PURE__ */ React7.createElement(LiveReload, null)));
};
var Layout = (props2) => {
  return /* @__PURE__ */ React7.createElement(React7.Fragment, null, /* @__PURE__ */ React7.createElement(NavBar_default, null), /* @__PURE__ */ React7.createElement("div", {
    className: "Document__Content"
  }, props2.children), /* @__PURE__ */ React7.createElement(Footer_default, null));
};
function ErrorBoundary({ error }) {
  const location = (0, import_react_router_dom.useLocation)();
  return /* @__PURE__ */ React7.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React7.createElement("head", null, /* @__PURE__ */ React7.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React7.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React7.createElement(Meta, null), /* @__PURE__ */ React7.createElement("title", null, "Oh no..."), /* @__PURE__ */ React7.createElement(Links, null)), /* @__PURE__ */ React7.createElement("body", {
    id: "root"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "app tracking-wide text-lg overflow-hidden"
  }, /* @__PURE__ */ React7.createElement(ErrorPage_default2, {
    error,
    heroMsg: "500 - Oh no, da ist irgendetwas schief gelaufen.",
    pathname: location.pathname,
    subMsg: "funktioniert aktuell nicht. Sorry."
  })), /* @__PURE__ */ React7.createElement(Scripts, null), /* @__PURE__ */ React7.createElement(Footer_default, null)));
}
var CatchBoundary = (props2) => {
  const caught = useCatch();
  const location = (0, import_react_router_dom.useLocation)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React7.createElement("html", {
      lang: "en"
    }, /* @__PURE__ */ React7.createElement("head", null, /* @__PURE__ */ React7.createElement("meta", {
      charSet: "utf-8"
    }), /* @__PURE__ */ React7.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /* @__PURE__ */ React7.createElement(Meta, null), /* @__PURE__ */ React7.createElement("title", null, "404 - Oh no..."), /* @__PURE__ */ React7.createElement(Links, null)), /* @__PURE__ */ React7.createElement("body", {
      id: "root"
    }, /* @__PURE__ */ React7.createElement("noscript", null, /* @__PURE__ */ React7.createElement("div", {
      style: {
        backgroundColor: "black",
        color: "white",
        padding: 30
      }
    }, /* @__PURE__ */ React7.createElement("p", {
      style: { fontSize: "1.5em" }
    }, "Diese Seite funktioniert besser mit JavaScript aktiviert..."))), /* @__PURE__ */ React7.createElement("div", {
      className: "app tracking-wide overflow-hidden"
    }, /* @__PURE__ */ React7.createElement(ErrorPage_default2, {
      heroMsg: "404 - Oh no, diese Seite scheint nicht zu funktionieren.",
      pathname: location.pathname,
      subMsg: "ist keine Seite auf Devato. Sorry."
    })), props2.children));
  }
  throw new Error(`Unhandled error: ${caught.status}`);
};
var root_default = App;
export {
  CatchBoundary,
  ErrorBoundary,
  root_default as default,
  links
};
//# sourceMappingURL=/build/root-YVZOUXXR.js.map
