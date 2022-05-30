import {
  ChevronDownIcon_default
} from "/build/_shared/chunk-K6LN7FR2.js";
import {
  esm_default
} from "/build/_shared/chunk-UYCBDY5W.js";
import "/build/_shared/chunk-C4R5JSF2.js";
import {
  AUTHOR,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  PORTFOLIO_IMAGE_URL,
  PORTFOLIO_WEBSITE_NAME,
  TWITTER_ACC,
  TWITTER_CARD_TYPE,
  WEBSITE_DESCRIPTION,
  WEBSITE_KEYWORDS,
  WEBSITE_URL,
  abilities,
  contactFormHtmlId,
  facts,
  fixedWidthLayoutClasses,
  otherProjects,
  recentProjects,
  skills,
  sm,
  useTheme
} from "/build/_shared/chunk-JAMJANG6.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-7YNG6UJI.js";
import {
  __commonJS,
  __toESM,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-XV23MX66.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    "use strict";
    init_react();
    if (true) {
      (function() {
        "use strict";
        var React22 = require_react();
        var _assign = require_object_assign();
        var REACT_ELEMENT_TYPE = 60103;
        var REACT_PORTAL_TYPE = 60106;
        exports.Fragment = 60107;
        var REACT_STRICT_MODE_TYPE = 60108;
        var REACT_PROFILER_TYPE = 60114;
        var REACT_PROVIDER_TYPE = 60109;
        var REACT_CONTEXT_TYPE = 60110;
        var REACT_FORWARD_REF_TYPE = 60112;
        var REACT_SUSPENSE_TYPE = 60113;
        var REACT_SUSPENSE_LIST_TYPE = 60120;
        var REACT_MEMO_TYPE = 60115;
        var REACT_LAZY_TYPE = 60116;
        var REACT_BLOCK_TYPE = 60121;
        var REACT_SERVER_BLOCK_TYPE = 60122;
        var REACT_FUNDAMENTAL_TYPE = 60117;
        var REACT_SCOPE_TYPE = 60119;
        var REACT_OPAQUE_ID_TYPE = 60128;
        var REACT_DEBUG_TRACING_MODE_TYPE = 60129;
        var REACT_OFFSCREEN_TYPE = 60130;
        var REACT_LEGACY_HIDDEN_TYPE = 60131;
        if (typeof Symbol === "function" && Symbol.for) {
          var symbolFor = Symbol.for;
          REACT_ELEMENT_TYPE = symbolFor("react.element");
          REACT_PORTAL_TYPE = symbolFor("react.portal");
          exports.Fragment = symbolFor("react.fragment");
          REACT_STRICT_MODE_TYPE = symbolFor("react.strict_mode");
          REACT_PROFILER_TYPE = symbolFor("react.profiler");
          REACT_PROVIDER_TYPE = symbolFor("react.provider");
          REACT_CONTEXT_TYPE = symbolFor("react.context");
          REACT_FORWARD_REF_TYPE = symbolFor("react.forward_ref");
          REACT_SUSPENSE_TYPE = symbolFor("react.suspense");
          REACT_SUSPENSE_LIST_TYPE = symbolFor("react.suspense_list");
          REACT_MEMO_TYPE = symbolFor("react.memo");
          REACT_LAZY_TYPE = symbolFor("react.lazy");
          REACT_BLOCK_TYPE = symbolFor("react.block");
          REACT_SERVER_BLOCK_TYPE = symbolFor("react.server.block");
          REACT_FUNDAMENTAL_TYPE = symbolFor("react.fundamental");
          REACT_SCOPE_TYPE = symbolFor("react.scope");
          REACT_OPAQUE_ID_TYPE = symbolFor("react.opaque.id");
          REACT_DEBUG_TRACING_MODE_TYPE = symbolFor("react.debug_trace_mode");
          REACT_OFFSCREEN_TYPE = symbolFor("react.offscreen");
          REACT_LEGACY_HIDDEN_TYPE = symbolFor("react.legacy_hidden");
        }
        var MAYBE_ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactSharedInternals = React22.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format) {
          {
            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }
            printWarning("error", format, args);
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return "" + item;
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var enableScopeAPI = false;
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === exports.Fragment || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
              return true;
            }
          }
          return false;
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var functionName = innerType.displayName || innerType.name || "";
          return outerType.displayName || (functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName);
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentName(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentName(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case exports.Fragment:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                return getComponentName(type.type);
              case REACT_BLOCK_TYPE:
                return getComponentName(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentName(init(payload));
                } catch (x4) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: _assign({}, props, {
                  value: prevLog
                }),
                info: _assign({}, props, {
                  value: prevInfo
                }),
                warn: _assign({}, props, {
                  value: prevWarn
                }),
                error: _assign({}, props, {
                  value: prevError
                }),
                group: _assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: _assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: _assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x4) {
                var match = x4.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher.current;
            ReactCurrentDispatcher.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x4) {
                  control = x4;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x4) {
                  control = x4;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x4) {
                control = x4;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s7 = sampleLines.length - 1;
              var c5 = controlLines.length - 1;
              while (s7 >= 1 && c5 >= 0 && sampleLines[s7] !== controlLines[c5]) {
                c5--;
              }
              for (; s7 >= 1 && c5 >= 0; s7--, c5--) {
                if (sampleLines[s7] !== controlLines[c5]) {
                  if (s7 !== 1 || c5 !== 1) {
                    do {
                      s7--;
                      c5--;
                      if (c5 < 0 || sampleLines[s7] !== controlLines[c5]) {
                        var _frame = "\n" + sampleLines[s7].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s7 >= 1 && c5 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_BLOCK_TYPE:
                return describeFunctionComponentFrame(type._render);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x4) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location2, componentName, element) {
          {
            var has = Function.call.bind(Object.prototype.hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location2 + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location2, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location2, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location2, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        var ReactCurrentOwner = ReactSharedInternals.ReactCurrentOwner;
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown;
        var specialPropRefWarningShown;
        var didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config2) {
          {
            if (hasOwnProperty.call(config2, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.ref !== void 0;
        }
        function hasValidKey(config2) {
          {
            if (hasOwnProperty.call(config2, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config2, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config2.key !== void 0;
        }
        function warnIfStringRefCannotBeAutoConverted(config2, self2) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && self2 && ReactCurrentOwner.current.stateNode !== self2) {
              var componentName = getComponentName(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', getComponentName(ReactCurrentOwner.current.type), config2.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        function defineKeyPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingKey = function() {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingKey.isReactWarning = true;
            Object.defineProperty(props, "key", {
              get: warnAboutAccessingKey,
              configurable: true
            });
          }
        }
        function defineRefPropWarningGetter(props, displayName) {
          {
            var warnAboutAccessingRef = function() {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            };
            warnAboutAccessingRef.isReactWarning = true;
            Object.defineProperty(props, "ref", {
              get: warnAboutAccessingRef,
              configurable: true
            });
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            $$typeof: REACT_ELEMENT_TYPE,
            type,
            key,
            ref,
            props,
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function jsxDEV(type, config2, maybeKey, source, self2) {
          {
            var propName;
            var props = {};
            var key = null;
            var ref = null;
            if (maybeKey !== void 0) {
              key = "" + maybeKey;
            }
            if (hasValidKey(config2)) {
              key = "" + config2.key;
            }
            if (hasValidRef(config2)) {
              ref = config2.ref;
              warnIfStringRefCannotBeAutoConverted(config2, self2);
            }
            for (propName in config2) {
              if (hasOwnProperty.call(config2, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config2[propName];
              }
            }
            if (type && type.defaultProps) {
              var defaultProps = type.defaultProps;
              for (propName in defaultProps) {
                if (props[propName] === void 0) {
                  props[propName] = defaultProps[propName];
                }
              }
            }
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
            return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
          }
        }
        var ReactCurrentOwner$1 = ReactSharedInternals.ReactCurrentOwner;
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function isValidElement(object) {
          {
            return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
          }
        }
        function getDeclarationErrorAddendum() {
          {
            if (ReactCurrentOwner$1.current) {
              var name = getComponentName(ReactCurrentOwner$1.current.type);
              if (name) {
                return "\n\nCheck the render method of `" + name + "`.";
              }
            }
            return "";
          }
        }
        function getSourceInfoErrorAddendum(source) {
          {
            if (source !== void 0) {
              var fileName = source.fileName.replace(/^.*[\\\/]/, "");
              var lineNumber = source.lineNumber;
              return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
            }
            return "";
          }
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          {
            var info = getDeclarationErrorAddendum();
            if (!info) {
              var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
              if (parentName) {
                info = "\n\nCheck the top-level render call using <" + parentName + ">.";
              }
            }
            return info;
          }
        }
        function validateExplicitKey(element, parentType) {
          {
            if (!element._store || element._store.validated || element.key != null) {
              return;
            }
            element._store.validated = true;
            var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
            if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
              return;
            }
            ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
            var childOwner = "";
            if (element && element._owner && element._owner !== ReactCurrentOwner$1.current) {
              childOwner = " It was passed a child from " + getComponentName(element._owner.type) + ".";
            }
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          {
            if (typeof node !== "object") {
              return;
            }
            if (Array.isArray(node)) {
              for (var i6 = 0; i6 < node.length; i6++) {
                var child = node[i6];
                if (isValidElement(child)) {
                  validateExplicitKey(child, parentType);
                }
              }
            } else if (isValidElement(node)) {
              if (node._store) {
                node._store.validated = true;
              }
            } else if (node) {
              var iteratorFn = getIteratorFn(node);
              if (typeof iteratorFn === "function") {
                if (iteratorFn !== node.entries) {
                  var iterator = iteratorFn.call(node);
                  var step;
                  while (!(step = iterator.next()).done) {
                    if (isValidElement(step.value)) {
                      validateExplicitKey(step.value, parentType);
                    }
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentName(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentName(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i6 = 0; i6 < keys.length; i6++) {
              var key = keys[i6];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function jsxWithValidation(type, props, key, isStaticChildren, source, self2) {
          {
            var validType = isValidElementType(type);
            if (!validType) {
              var info = "";
              if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
                info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
              }
              var sourceInfo = getSourceInfoErrorAddendum(source);
              if (sourceInfo) {
                info += sourceInfo;
              } else {
                info += getDeclarationErrorAddendum();
              }
              var typeString;
              if (type === null) {
                typeString = "null";
              } else if (Array.isArray(type)) {
                typeString = "array";
              } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
                typeString = "<" + (getComponentName(type.type) || "Unknown") + " />";
                info = " Did you accidentally export a JSX literal instead of a component?";
              } else {
                typeString = typeof type;
              }
              error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
            var element = jsxDEV(type, props, key, source, self2);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (Array.isArray(children)) {
                    for (var i6 = 0; i6 < children.length; i6++) {
                      validateChildKeys(children[i6], type);
                    }
                    if (Object.freeze) {
                      Object.freeze(children);
                    }
                  } else {
                    error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                  }
                } else {
                  validateChildKeys(children, type);
                }
              }
            }
            if (type === exports.Fragment) {
              validateFragmentProps(element);
            } else {
              validatePropTypes(element);
            }
            return element;
          }
        }
        function jsxWithValidationStatic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, true);
          }
        }
        function jsxWithValidationDynamic(type, props, key) {
          {
            return jsxWithValidation(type, props, key, false);
          }
        }
        var jsx = jsxWithValidationDynamic;
        var jsxs = jsxWithValidationStatic;
        exports.jsx = jsx;
        exports.jsxs = jsxs;
      })();
    }
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    init_react();
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_jsx_runtime_development();
    }
  }
});

// node_modules/use-typewriter-hook/index.js
var require_use_typewriter_hook = __commonJS({
  "node_modules/use-typewriter-hook/index.js"(exports) {
    "use strict";
    init_react();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o11, m4, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o11, k22, { enumerable: true, get: function() {
        return m4[k3];
      } });
    } : function(o11, m4, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o11[k22] = m4[k3];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o11, v3) {
      Object.defineProperty(o11, "default", { enumerable: true, value: v3 });
    } : function(o11, v3) {
      o11["default"] = v3;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k3 in mod)
          if (k3 !== "default" && Object.prototype.hasOwnProperty.call(mod, k3))
            __createBinding(result, mod, k3);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findCommonSubstring = exports.useTypewriter = void 0;
    var React22 = __importStar(require_react());
    var DEFAULT_CURSOR_CLASSNAME = "use-typewriter-cursor";
    var CONFIGURATION_DEFAULTS = {
      targetText: "",
      autoStartDelay: 100,
      typingDelayMillis: 100,
      wrapperClassName: DEFAULT_CURSOR_CLASSNAME,
      loop: false,
      loopDelay: 100
    };
    var TypingDirection;
    (function(TypingDirection2) {
      TypingDirection2["FORWARD"] = "FORWARD";
      TypingDirection2["BACKWARD"] = "BACKWARD";
    })(TypingDirection || (TypingDirection = {}));
    var useTypewriter2 = (config2) => {
      const resolvedConfig = Object.assign(Object.assign({}, CONFIGURATION_DEFAULTS), config2);
      const [typingDirection, setTypingDirection] = React22.useState(TypingDirection.FORWARD);
      const [sentencePointer, setSentencePointer] = React22.useState(0);
      const [textValue, setTextValue] = React22.useState("");
      const [startTypewriter, setStartTypewriter] = React22.useState(false);
      const targetTextArray = Array.isArray(resolvedConfig.targetText) ? resolvedConfig.targetText : [resolvedConfig.targetText];
      const isPausedRef = React22.useRef(false);
      function pause() {
        isPausedRef.current = true;
      }
      function start() {
        isPausedRef.current = false;
      }
      const returnNextDirection = (prevDirection, targetString, loop, pointer) => {
        const nextDirection = prevDirection === TypingDirection.FORWARD ? TypingDirection.BACKWARD : TypingDirection.FORWARD;
        if (nextDirection === TypingDirection.BACKWARD) {
          if (loop) {
            return nextDirection;
          }
          if (pointer !== targetString.length - 1) {
            return nextDirection;
          }
          return prevDirection;
        }
        return nextDirection;
      };
      const targetTextRef = React22.useRef(targetTextArray[sentencePointer]);
      const erase = () => {
        if (isPausedRef.current || !startTypewriter) {
          return;
        }
        setTextValue((prev) => {
          const stringWithoutLastCharacter = prev.slice(0, prev.length - 1);
          return stringWithoutLastCharacter;
        });
      };
      const type = () => {
        if (isPausedRef.current || !startTypewriter) {
          return;
        }
        setTextValue((prev) => {
          const nextCharacterToAdd = targetTextRef.current.charAt(prev.length);
          const nextTextValue = prev + nextCharacterToAdd;
          return nextTextValue;
        });
      };
      React22.useEffect(() => {
        setTimeout(() => {
          setStartTypewriter(true);
        }, resolvedConfig.autoStartDelay);
      }, [resolvedConfig.autoStartDelay]);
      const handleChange = () => {
        if (typingDirection === TypingDirection.FORWARD) {
          type();
        } else if (typingDirection === TypingDirection.BACKWARD) {
          erase();
        }
      };
      React22.useEffect(() => {
        if (textValue !== targetTextRef.current) {
          return;
        }
        if (typingDirection === TypingDirection.FORWARD) {
          setSentencePointer((prevSentencePointer) => {
            const nextSentencePointer = targetTextArray.length ? calculateNextSentencePointer(targetTextArray.length, prevSentencePointer) : 0;
            if (Array.isArray(resolvedConfig.targetText)) {
              targetTextRef.current = findCommonSubstring(targetTextRef.current, targetTextArray[nextSentencePointer]);
            } else {
              targetTextRef.current = "";
            }
            return nextSentencePointer;
          });
        } else if (typingDirection === TypingDirection.BACKWARD) {
          targetTextRef.current = targetTextArray[sentencePointer];
        }
        setTimeout(() => {
          setTypingDirection((prevDirection) => {
            return returnNextDirection(prevDirection, targetTextArray, resolvedConfig.loop, sentencePointer);
          });
        }, resolvedConfig.loopDelay);
      }, [textValue]);
      useInterval(handleChange, startTypewriter ? resolvedConfig.typingDelayMillis : null, true);
      return {
        textValue,
        pause,
        start,
        wrapperClassName: resolvedConfig.wrapperClassName
      };
    };
    exports.useTypewriter = useTypewriter2;
    var calculateNextSentencePointer = (numberOfSentences, currentSentenceIndex) => {
      return currentSentenceIndex === numberOfSentences - 1 ? 0 : currentSentenceIndex + 1;
    };
    function useInterval(callback, delayMillis, callImmediately = false) {
      const savedCallback = React22.useRef(callback);
      React22.useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
      React22.useEffect(() => {
        if (delayMillis === null) {
          return;
        }
        if (callImmediately) {
          savedCallback.current();
        }
        const id = setInterval(() => savedCallback.current(), delayMillis);
        return () => clearInterval(id);
      }, [delayMillis, callImmediately]);
    }
    function findCommonSubstring(string1, string2) {
      const str1 = [...string1];
      const str2 = [...string2];
      let commonSubstring = "";
      for (let i6 = 0; i6 <= string1.length - 1; i6++) {
        if (str1[i6] === str2[i6]) {
          commonSubstring = commonSubstring + str1[i6];
        } else {
          return commonSubstring;
        }
      }
      return commonSubstring;
    }
    exports.findCommonSubstring = findCommonSubstring;
  }
});

// node_modules/react-cookie-consent/build/index.js
var require_build = __commonJS({
  "node_modules/react-cookie-consent/build/index.js"(exports, module) {
    init_react();
    !function(e6, t13) {
      typeof exports == "object" && typeof module == "object" ? module.exports = t13() : typeof define == "function" && define.amd ? define([], t13) : typeof exports == "object" ? exports.ReactCookieConsent = t13() : e6.ReactCookieConsent = t13();
    }(typeof self != "undefined" ? self : exports, function() {
      return function() {
        var e6 = { 808: function(e7, t14, n3) {
          var o12, r9, i6;
          (r9 = typeof (o12 = i6 = function() {
            function e8() {
              for (var e9 = 0, t16 = {}; e9 < arguments.length; e9++) {
                var n4 = arguments[e9];
                for (var o13 in n4)
                  t16[o13] = n4[o13];
              }
              return t16;
            }
            function t15(e9) {
              return e9.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
            }
            return function n4(o13) {
              function r10() {
              }
              function i7(t16, n5, i8) {
                if (typeof document != "undefined") {
                  typeof (i8 = e8({ path: "/" }, r10.defaults, i8)).expires == "number" && (i8.expires = new Date(1 * new Date() + 864e5 * i8.expires)), i8.expires = i8.expires ? i8.expires.toUTCString() : "";
                  try {
                    var c6 = JSON.stringify(n5);
                    /^[\{\[]/.test(c6) && (n5 = c6);
                  } catch (e9) {
                  }
                  n5 = o13.write ? o13.write(n5, t16) : encodeURIComponent(String(n5)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t16 = encodeURIComponent(String(t16)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                  var l6 = "";
                  for (var s7 in i8)
                    i8[s7] && (l6 += "; " + s7, i8[s7] !== true && (l6 += "=" + i8[s7].split(";")[0]));
                  return document.cookie = t16 + "=" + n5 + l6;
                }
              }
              function c5(e9, n5) {
                if (typeof document != "undefined") {
                  for (var r11 = {}, i8 = document.cookie ? document.cookie.split("; ") : [], c6 = 0; c6 < i8.length; c6++) {
                    var l6 = i8[c6].split("="), s7 = l6.slice(1).join("=");
                    n5 || s7.charAt(0) !== '"' || (s7 = s7.slice(1, -1));
                    try {
                      var a6 = t15(l6[0]);
                      if (s7 = (o13.read || o13)(s7, a6) || t15(s7), n5)
                        try {
                          s7 = JSON.parse(s7);
                        } catch (e10) {
                        }
                      if (r11[a6] = s7, e9 === a6)
                        break;
                    } catch (e10) {
                    }
                  }
                  return e9 ? r11[e9] : r11;
                }
              }
              return r10.set = i7, r10.get = function(e9) {
                return c5(e9, false);
              }, r10.getJSON = function(e9) {
                return c5(e9, true);
              }, r10.remove = function(t16, n5) {
                i7(t16, "", e8(n5, { expires: -1 }));
              }, r10.defaults = {}, r10.withConverter = n4, r10;
            }(function() {
            });
          }) == "function" ? o12.call(t14, n3, t14, e7) : o12) === void 0 || (e7.exports = r9), e7.exports = i6();
        }, 703: function(e7, t14, n3) {
          "use strict";
          var o12 = n3(414);
          function r9() {
          }
          function i6() {
          }
          i6.resetWarningCache = r9, e7.exports = function() {
            function e8(e9, t16, n5, r10, i7, c5) {
              if (c5 !== o12) {
                var l6 = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                throw l6.name = "Invariant Violation", l6;
              }
            }
            function t15() {
              return e8;
            }
            e8.isRequired = e8;
            var n4 = { array: e8, bool: e8, func: e8, number: e8, object: e8, string: e8, symbol: e8, any: e8, arrayOf: t15, element: e8, elementType: e8, instanceOf: t15, node: e8, objectOf: t15, oneOf: t15, oneOfType: t15, shape: t15, exact: t15, checkPropTypes: i6, resetWarningCache: r9 };
            return n4.PropTypes = n4, n4;
          };
        }, 697: function(e7, t14, n3) {
          e7.exports = n3(703)();
        }, 414: function(e7) {
          "use strict";
          e7.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
        } }, t13 = {};
        function n2(o12) {
          var r9 = t13[o12];
          if (r9 !== void 0)
            return r9.exports;
          var i6 = t13[o12] = { exports: {} };
          return e6[o12](i6, i6.exports, n2), i6.exports;
        }
        n2.n = function(e7) {
          var t14 = e7 && e7.__esModule ? function() {
            return e7.default;
          } : function() {
            return e7;
          };
          return n2.d(t14, { a: t14 }), t14;
        }, n2.d = function(e7, t14) {
          for (var o12 in t14)
            n2.o(t14, o12) && !n2.o(e7, o12) && Object.defineProperty(e7, o12, { enumerable: true, get: t14[o12] });
        }, n2.o = function(e7, t14) {
          return Object.prototype.hasOwnProperty.call(e7, t14);
        }, n2.r = function(e7) {
          typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(e7, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e7, "__esModule", { value: true });
        };
        var o11 = {};
        return function() {
          "use strict";
          n2.r(o11), n2.d(o11, { Cookies: function() {
            return l6();
          }, OPTIONS: function() {
            return h4;
          }, SAME_SITE_OPTIONS: function() {
            return C3;
          }, VISIBLE_OPTIONS: function() {
            return g4;
          }, default: function() {
            return T4;
          }, getCookieConsentValue: function() {
            return S2;
          }, resetCookieConsentValue: function() {
            return k3;
          } });
          const e7 = require_react();
          var t14 = n2.n(e7), r9 = n2(697), i6 = n2.n(r9), c5 = n2(808), l6 = n2.n(c5);
          function s7(e8) {
            return (s7 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e9) {
              return typeof e9;
            } : function(e9) {
              return e9 && typeof Symbol == "function" && e9.constructor === Symbol && e9 !== Symbol.prototype ? "symbol" : typeof e9;
            })(e8);
          }
          var a6 = ["children"];
          function u5() {
            return (u5 = Object.assign || function(e8) {
              for (var t15 = 1; t15 < arguments.length; t15++) {
                var n3 = arguments[t15];
                for (var o12 in n3)
                  Object.prototype.hasOwnProperty.call(n3, o12) && (e8[o12] = n3[o12]);
              }
              return e8;
            }).apply(this, arguments);
          }
          function p3(e8, t15) {
            var n3 = Object.keys(e8);
            if (Object.getOwnPropertySymbols) {
              var o12 = Object.getOwnPropertySymbols(e8);
              t15 && (o12 = o12.filter(function(t16) {
                return Object.getOwnPropertyDescriptor(e8, t16).enumerable;
              })), n3.push.apply(n3, o12);
            }
            return n3;
          }
          function f4(e8) {
            for (var t15 = 1; t15 < arguments.length; t15++) {
              var n3 = arguments[t15] != null ? arguments[t15] : {};
              t15 % 2 ? p3(Object(n3), true).forEach(function(t16) {
                m4(e8, t16, n3[t16]);
              }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e8, Object.getOwnPropertyDescriptors(n3)) : p3(Object(n3)).forEach(function(t16) {
                Object.defineProperty(e8, t16, Object.getOwnPropertyDescriptor(n3, t16));
              });
            }
            return e8;
          }
          function b2(e8, t15) {
            for (var n3 = 0; n3 < t15.length; n3++) {
              var o12 = t15[n3];
              o12.enumerable = o12.enumerable || false, o12.configurable = true, "value" in o12 && (o12.writable = true), Object.defineProperty(e8, o12.key, o12);
            }
          }
          function y6(e8, t15) {
            return (y6 = Object.setPrototypeOf || function(e9, t16) {
              return e9.__proto__ = t16, e9;
            })(e8, t15);
          }
          function d4(e8, t15) {
            if (t15 && (s7(t15) === "object" || typeof t15 == "function"))
              return t15;
            if (t15 !== void 0)
              throw new TypeError("Derived constructors may only return object or undefined");
            return v3(e8);
          }
          function v3(e8) {
            if (e8 === void 0)
              throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return e8;
          }
          function O2(e8) {
            return (O2 = Object.setPrototypeOf ? Object.getPrototypeOf : function(e9) {
              return e9.__proto__ || Object.getPrototypeOf(e9);
            })(e8);
          }
          function m4(e8, t15, n3) {
            return t15 in e8 ? Object.defineProperty(e8, t15, { value: n3, enumerable: true, configurable: true, writable: true }) : e8[t15] = n3, e8;
          }
          var h4 = { TOP: "top", BOTTOM: "bottom", NONE: "none" }, C3 = { STRICT: "strict", LAX: "lax", NONE: "none" }, g4 = { HIDDEN: "hidden", SHOW: "show", BY_COOKIE_VALUE: "byCookieValue" }, S2 = function() {
            var e8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : j3, t15 = l6().get(e8);
            return t15 === void 0 ? l6().get(x4(e8)) : t15;
          }, k3 = function() {
            var e8 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : j3;
            l6().remove(e8);
          }, x4 = function(e8) {
            return "".concat(e8, "-legacy");
          }, j3 = "CookieConsent", w3 = function(e8) {
            var t15 = e8.condition, n3 = e8.wrapper, o12 = e8.children;
            return t15 ? n3(o12) : o12;
          }, B2 = function(e8) {
            !function(e9, t15) {
              if (typeof t15 != "function" && t15 !== null)
                throw new TypeError("Super expression must either be null or a function");
              e9.prototype = Object.create(t15 && t15.prototype, { constructor: { value: e9, writable: true, configurable: true } }), Object.defineProperty(e9, "prototype", { writable: false }), t15 && y6(e9, t15);
            }(s8, e8);
            var n3, o12, r10, i7, c6 = (r10 = s8, i7 = function() {
              if (typeof Reflect == "undefined" || !Reflect.construct)
                return false;
              if (Reflect.construct.sham)
                return false;
              if (typeof Proxy == "function")
                return true;
              try {
                return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
                })), true;
              } catch (e9) {
                return false;
              }
            }(), function() {
              var e9, t15 = O2(r10);
              if (i7) {
                var n4 = O2(this).constructor;
                e9 = Reflect.construct(t15, arguments, n4);
              } else
                e9 = t15.apply(this, arguments);
              return d4(this, e9);
            });
            function s8(e9) {
              var t15;
              return function(e10, t16) {
                if (!(e10 instanceof t16))
                  throw new TypeError("Cannot call a class as a function");
              }(this, s8), m4(v3(t15 = c6.call(this, e9)), "handleScroll", function() {
                var e10 = t15.props.acceptOnScrollPercentage, n4 = document.documentElement, o13 = document.body, r11 = "scrollTop", i8 = "scrollHeight";
                (n4[r11] || o13[r11]) / ((n4[i8] || o13[i8]) - n4.clientHeight) * 100 > e10 && t15.accept(true);
              }), m4(v3(t15), "removeScrollListener", function() {
                t15.props.acceptOnScroll && window.removeEventListener("scroll", t15.handleScroll);
              }), t15.state = { visible: false, style: { alignItems: "baseline", background: "#353535", color: "white", display: "flex", flexWrap: "wrap", justifyContent: "space-between", left: "0", position: "fixed", width: "100%", zIndex: "999" }, buttonStyle: { background: "#ffd42d", border: "0", borderRadius: "0px", boxShadow: "none", color: "black", cursor: "pointer", flex: "0 0 auto", padding: "5px 10px", margin: "15px" }, declineButtonStyle: { background: "#c12a2a", border: "0", borderRadius: "0px", boxShadow: "none", color: "#e5e5e5", cursor: "pointer", flex: "0 0 auto", padding: "5px 10px", margin: "15px" }, contentStyle: { flex: "1 0 300px", margin: "15px" }, overlayStyle: { position: "fixed", left: 0, top: 0, width: "100%", height: "100%", zIndex: "999", backgroundColor: "rgba(0,0,0,0.3)" } }, t15;
            }
            return n3 = s8, (o12 = [{ key: "componentDidMount", value: function() {
              var e9 = this.props.debug;
              (this.getCookieValue() === void 0 || e9) && (this.setState({ visible: true }), this.props.acceptOnScroll && window.addEventListener("scroll", this.handleScroll, { passive: true }));
            } }, { key: "componentWillUnmount", value: function() {
              this.removeScrollListener();
            } }, { key: "accept", value: function() {
              var e9 = arguments.length > 0 && arguments[0] !== void 0 && arguments[0], t15 = this.props, n4 = t15.cookieName, o13 = t15.cookieValue, r11 = t15.hideOnAccept, i8 = t15.onAccept;
              this.setCookie(n4, o13), i8(e9 != null && e9), r11 && (this.setState({ visible: false }), this.removeScrollListener());
            } }, { key: "overlayClick", value: function() {
              var e9 = this.props, t15 = e9.acceptOnOverlayClick, n4 = e9.onOverlayClick;
              t15 && this.accept(), n4();
            } }, { key: "decline", value: function() {
              var e9 = this.props, t15 = e9.cookieName, n4 = e9.declineCookieValue, o13 = e9.hideOnDecline, r11 = e9.onDecline;
              e9.setDeclineCookie && this.setCookie(t15, n4), r11(), o13 && this.setState({ visible: false });
            } }, { key: "setCookie", value: function(e9, t15) {
              var n4 = this.props, o13 = n4.extraCookieOptions, r11 = n4.expires, i8 = n4.sameSite, c7 = this.props.cookieSecurity;
              c7 === void 0 && (c7 = !location || location.protocol === "https:");
              var s9 = f4(f4({ expires: r11 }, o13), {}, { sameSite: i8, secure: c7 });
              i8 === C3.NONE && l6().set(x4(e9), t15, s9), l6().set(e9, t15, s9);
            } }, { key: "getCookieValue", value: function() {
              var e9 = this.props.cookieName;
              return S2(e9);
            } }, { key: "render", value: function() {
              var e9 = this;
              switch (this.props.visible) {
                case g4.HIDDEN:
                  return null;
                case g4.BY_COOKIE_VALUE:
                  if (!this.state.visible)
                    return null;
              }
              var n4 = this.props, o13 = n4.location, r11 = n4.style, i8 = n4.buttonStyle, c7 = n4.declineButtonStyle, l7 = n4.contentStyle, s9 = n4.disableStyles, a7 = n4.buttonText, p4 = n4.declineButtonText, b3 = n4.containerClasses, y7 = n4.contentClasses, d5 = n4.buttonClasses, v4 = n4.buttonWrapperClasses, O3 = n4.declineButtonClasses, m5 = n4.buttonId, C4 = n4.declineButtonId, S3 = n4.disableButtonStyles, k4 = n4.enableDeclineButton, x5 = n4.flipButtons, j4 = n4.ButtonComponent, B3 = n4.overlay, T5 = n4.overlayClasses, P3 = n4.overlayStyle, E3 = n4.ariaAcceptLabel, D2 = n4.ariaDeclineLabel, I3 = n4.customContainerAttributes, _2 = n4.customContentAttributes, A2 = n4.customButtonProps, N3 = {}, R4 = {}, L3 = {}, V3 = {}, U3 = {};
              switch (s9 ? (N3 = u5({}, r11), R4 = u5({}, i8), L3 = u5({}, c7), V3 = u5({}, l7), U3 = u5({}, P3)) : (N3 = u5({}, f4(f4({}, this.state.style), r11)), V3 = u5({}, f4(f4({}, this.state.contentStyle), l7)), U3 = u5({}, f4(f4({}, this.state.overlayStyle), P3)), S3 ? (R4 = u5({}, i8), L3 = u5({}, c7)) : (R4 = u5({}, f4(f4({}, this.state.buttonStyle), i8)), L3 = u5({}, f4(f4({}, this.state.declineButtonStyle), c7)))), o13) {
                case h4.TOP:
                  N3.top = "0";
                  break;
                case h4.BOTTOM:
                  N3.bottom = "0";
              }
              var W2 = [];
              return k4 && W2.push(t14().createElement(j4, { key: "declineButton", style: L3, className: O3, id: C4, "aria-label": D2, onClick: function() {
                e9.decline();
              } }, p4)), W2.push(t14().createElement(j4, u5({}, A2, { key: "acceptButton", style: R4, className: d5, id: m5, "aria-label": E3, onClick: function() {
                e9.accept();
              } }), a7)), x5 && W2.reverse(), t14().createElement(w3, { condition: B3, wrapper: function(n5) {
                return t14().createElement("div", { style: U3, className: T5, onClick: function() {
                  e9.overlayClick();
                } }, n5);
              } }, t14().createElement("div", u5({ className: "".concat(b3), style: N3 }, I3), t14().createElement("div", u5({ style: V3, className: y7 }, _2), this.props.children), t14().createElement("div", { className: "".concat(v4) }, W2.map(function(e10) {
                return e10;
              }))));
            } }]) && b2(n3.prototype, o12), Object.defineProperty(n3, "prototype", { writable: false }), s8;
          }(e7.Component);
          B2.propTypes = { location: i6().oneOf(Object.keys(h4).map(function(e8) {
            return h4[e8];
          })), visible: i6().oneOf(Object.keys(g4).map(function(e8) {
            return g4[e8];
          })), sameSite: i6().oneOf(Object.keys(C3).map(function(e8) {
            return C3[e8];
          })), style: i6().object, buttonStyle: i6().object, declineButtonStyle: i6().object, contentStyle: i6().object, children: i6().any, disableStyles: i6().bool, hideOnAccept: i6().bool, hideOnDecline: i6().bool, onAccept: i6().func, onDecline: i6().func, buttonText: i6().oneOfType([i6().string, i6().func, i6().element]), declineButtonText: i6().oneOfType([i6().string, i6().func, i6().element]), cookieName: i6().string, cookieValue: i6().oneOfType([i6().string, i6().bool, i6().number]), declineCookieValue: i6().oneOfType([i6().string, i6().bool, i6().number]), setDeclineCookie: i6().bool, debug: i6().bool, expires: i6().number, containerClasses: i6().string, contentClasses: i6().string, buttonClasses: i6().string, buttonWrapperClasses: i6().string, declineButtonClasses: i6().string, buttonId: i6().string, declineButtonId: i6().string, extraCookieOptions: i6().object, disableButtonStyles: i6().bool, enableDeclineButton: i6().bool, flipButtons: i6().bool, ButtonComponent: i6().elementType, cookieSecurity: i6().bool, overlay: i6().bool, overlayClasses: i6().string, overlayStyle: i6().object, onOverlayClick: i6().func, acceptOnOverlayClick: i6().bool, ariaAcceptLabel: i6().string, ariaDeclineLabel: i6().string, acceptOnScroll: i6().bool, acceptOnScrollPercentage: i6().number, customContentAttributes: i6().object, customContainerAttributes: i6().object, customButtonProps: i6().object }, B2.defaultProps = { disableStyles: false, hideOnAccept: true, hideOnDecline: true, location: h4.BOTTOM, visible: g4.BY_COOKIE_VALUE, onAccept: function() {
          }, onDecline: function() {
          }, cookieName: j3, cookieValue: true, declineCookieValue: false, setDeclineCookie: true, buttonText: "I understand", declineButtonText: "I decline", debug: false, expires: 365, containerClasses: "CookieConsent", contentClasses: "", buttonClasses: "", buttonWrapperClasses: "", declineButtonClasses: "", buttonId: "rcc-confirm-button", declineButtonId: "rcc-decline-button", extraCookieOptions: {}, disableButtonStyles: false, enableDeclineButton: false, flipButtons: false, sameSite: C3.LAX, ButtonComponent: function(e8) {
            var n3 = e8.children, o12 = function(e9, t15) {
              if (e9 == null)
                return {};
              var n4, o13, r10 = function(e10, t16) {
                if (e10 == null)
                  return {};
                var n5, o14, r11 = {}, i8 = Object.keys(e10);
                for (o14 = 0; o14 < i8.length; o14++)
                  n5 = i8[o14], t16.indexOf(n5) >= 0 || (r11[n5] = e10[n5]);
                return r11;
              }(e9, t15);
              if (Object.getOwnPropertySymbols) {
                var i7 = Object.getOwnPropertySymbols(e9);
                for (o13 = 0; o13 < i7.length; o13++)
                  n4 = i7[o13], t15.indexOf(n4) >= 0 || Object.prototype.propertyIsEnumerable.call(e9, n4) && (r10[n4] = e9[n4]);
              }
              return r10;
            }(e8, a6);
            return t14().createElement("button", o12, n3);
          }, overlay: false, overlayClasses: "", onOverlayClick: function() {
          }, acceptOnOverlayClick: false, ariaAcceptLabel: "Accept cookies", ariaDeclineLabel: "Decline cookies", acceptOnScroll: false, acceptOnScrollPercentage: 25, customContentAttributes: {}, customContainerAttributes: {}, customButtonProps: {} };
          const T4 = B2;
        }(), o11;
      }();
    });
  }
});

// browser-route-module:/Users/flo/Development/Webpage/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/Decoration.tsx
init_react();
var React3 = __toESM(require_react());

// app/hooks/useWasInViewAtLeastOnce.ts
init_react();
var React2 = __toESM(require_react());

// node_modules/react-intersection-observer/react-intersection-observer.m.js
init_react();
var React = __toESM(require_react());
var import_react = __toESM(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i6 = 1; i6 < arguments.length; i6++) {
      var source = arguments[i6];
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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o11, p3) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o12, p4) {
    o12.__proto__ = p4;
    return o12;
  };
  return _setPrototypeOf(o11, p3);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i6;
  for (i6 = 0; i6 < sourceKeys.length; i6++) {
    key = sourceKeys[i6];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var observerMap = /* @__PURE__ */ new Map();
var RootIds = /* @__PURE__ */ new WeakMap();
var rootId = 0;
var unsupportedValue = void 0;
function getRootId(root) {
  if (!root)
    return "0";
  if (RootIds.has(root))
    return RootIds.get(root);
  rootId += 1;
  RootIds.set(root, rootId.toString());
  return RootIds.get(root);
}
function optionsToId(options) {
  return Object.keys(options).sort().filter(function(key) {
    return options[key] !== void 0;
  }).map(function(key) {
    return key + "_" + (key === "root" ? getRootId(options.root) : options[key]);
  }).toString();
}
function createObserver(options) {
  var id = optionsToId(options);
  var instance = observerMap.get(id);
  if (!instance) {
    var elements = /* @__PURE__ */ new Map();
    var thresholds;
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        var _elements$get;
        var inView = entry.isIntersecting && thresholds.some(function(threshold) {
          return entry.intersectionRatio >= threshold;
        });
        if (options.trackVisibility && typeof entry.isVisible === "undefined") {
          entry.isVisible = inView;
        }
        (_elements$get = elements.get(entry.target)) == null ? void 0 : _elements$get.forEach(function(callback) {
          callback(inView, entry);
        });
      });
    }, options);
    thresholds = observer.thresholds || (Array.isArray(options.threshold) ? options.threshold : [options.threshold || 0]);
    instance = {
      id,
      observer,
      elements
    };
    observerMap.set(id, instance);
  }
  return instance;
}
function observe(element, callback, options, fallbackInView) {
  if (options === void 0) {
    options = {};
  }
  if (fallbackInView === void 0) {
    fallbackInView = unsupportedValue;
  }
  if (typeof window.IntersectionObserver === "undefined" && fallbackInView !== void 0) {
    var bounds = element.getBoundingClientRect();
    callback(fallbackInView, {
      isIntersecting: fallbackInView,
      target: element,
      intersectionRatio: typeof options.threshold === "number" ? options.threshold : 0,
      time: 0,
      boundingClientRect: bounds,
      intersectionRect: bounds,
      rootBounds: bounds
    });
    return function() {
    };
  }
  var _createObserver = createObserver(options), id = _createObserver.id, observer = _createObserver.observer, elements = _createObserver.elements;
  var callbacks = elements.get(element) || [];
  if (!elements.has(element)) {
    elements.set(element, callbacks);
  }
  callbacks.push(callback);
  observer.observe(element);
  return function unobserve() {
    callbacks.splice(callbacks.indexOf(callback), 1);
    if (callbacks.length === 0) {
      elements["delete"](element);
      observer.unobserve(element);
    }
    if (elements.size === 0) {
      observer.disconnect();
      observerMap["delete"](id);
    }
  };
}
var _excluded = ["children", "as", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
function isPlainChildren(props) {
  return typeof props.children !== "function";
}
var InView = /* @__PURE__ */ function(_React$Component) {
  _inheritsLoose(InView2, _React$Component);
  function InView2(props) {
    var _this;
    _this = _React$Component.call(this, props) || this;
    _this.node = null;
    _this._unobserveCb = null;
    _this.handleNode = function(node) {
      if (_this.node) {
        _this.unobserve();
        if (!node && !_this.props.triggerOnce && !_this.props.skip) {
          _this.setState({
            inView: !!_this.props.initialInView,
            entry: void 0
          });
        }
      }
      _this.node = node ? node : null;
      _this.observeNode();
    };
    _this.handleChange = function(inView, entry) {
      if (inView && _this.props.triggerOnce) {
        _this.unobserve();
      }
      if (!isPlainChildren(_this.props)) {
        _this.setState({
          inView,
          entry
        });
      }
      if (_this.props.onChange) {
        _this.props.onChange(inView, entry);
      }
    };
    _this.state = {
      inView: !!props.initialInView,
      entry: void 0
    };
    return _this;
  }
  var _proto = InView2.prototype;
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (prevProps.rootMargin !== this.props.rootMargin || prevProps.root !== this.props.root || prevProps.threshold !== this.props.threshold || prevProps.skip !== this.props.skip || prevProps.trackVisibility !== this.props.trackVisibility || prevProps.delay !== this.props.delay) {
      this.unobserve();
      this.observeNode();
    }
  };
  _proto.componentWillUnmount = function componentWillUnmount() {
    this.unobserve();
    this.node = null;
  };
  _proto.observeNode = function observeNode() {
    if (!this.node || this.props.skip)
      return;
    var _this$props = this.props, threshold = _this$props.threshold, root = _this$props.root, rootMargin = _this$props.rootMargin, trackVisibility = _this$props.trackVisibility, delay = _this$props.delay, fallbackInView = _this$props.fallbackInView;
    this._unobserveCb = observe(this.node, this.handleChange, {
      threshold,
      root,
      rootMargin,
      trackVisibility,
      delay
    }, fallbackInView);
  };
  _proto.unobserve = function unobserve() {
    if (this._unobserveCb) {
      this._unobserveCb();
      this._unobserveCb = null;
    }
  };
  _proto.render = function render() {
    if (!isPlainChildren(this.props)) {
      var _this$state = this.state, inView = _this$state.inView, entry = _this$state.entry;
      return this.props.children({
        inView,
        entry,
        ref: this.handleNode
      });
    }
    var _this$props2 = this.props, children = _this$props2.children, as = _this$props2.as, props = _objectWithoutPropertiesLoose(_this$props2, _excluded);
    return /* @__PURE__ */ React.createElement(as || "div", _extends({
      ref: this.handleNode
    }, props), children);
  };
  return InView2;
}(React.Component);
InView.displayName = "InView";
InView.defaultProps = {
  threshold: 0,
  triggerOnce: false,
  initialInView: false
};
function useInView(_temp) {
  var _ref = _temp === void 0 ? {} : _temp, threshold = _ref.threshold, delay = _ref.delay, trackVisibility = _ref.trackVisibility, rootMargin = _ref.rootMargin, root = _ref.root, triggerOnce = _ref.triggerOnce, skip = _ref.skip, initialInView = _ref.initialInView, fallbackInView = _ref.fallbackInView;
  var unobserve = React.useRef();
  var _React$useState = React.useState({
    inView: !!initialInView
  }), state = _React$useState[0], setState = _React$useState[1];
  var setRef = React.useCallback(function(node) {
    if (unobserve.current !== void 0) {
      unobserve.current();
      unobserve.current = void 0;
    }
    if (skip)
      return;
    if (node) {
      unobserve.current = observe(node, function(inView, entry) {
        setState({
          inView,
          entry
        });
        if (entry.isIntersecting && triggerOnce && unobserve.current) {
          unobserve.current();
          unobserve.current = void 0;
        }
      }, {
        root,
        rootMargin,
        threshold,
        trackVisibility,
        delay
      }, fallbackInView);
    }
  }, [
    Array.isArray(threshold) ? threshold.toString() : threshold,
    root,
    rootMargin,
    triggerOnce,
    skip,
    trackVisibility,
    fallbackInView,
    delay
  ]);
  (0, import_react.useEffect)(function() {
    if (!unobserve.current && state.entry && !triggerOnce && !skip) {
      setState({
        inView: !!initialInView
      });
    }
  });
  var result = [setRef, state.inView, state.entry];
  result.ref = result[0];
  result.inView = result[1];
  result.entry = result[2];
  return result;
}

// app/hooks/useWasInViewAtLeastOnce.ts
var useWasInViewAtLeastOnce = (options) => {
  const [wasInViewAtLeastOnce, setWasInViewAtLeastOnce] = React2.useState(false);
  const { ref: setRef, inView } = useInView(options);
  React2.useEffect(() => {
    if (inView) {
      setWasInViewAtLeastOnce(true);
    }
  }, [inView]);
  return { setRef, wasInViewAtLeastOnce };
};

// app/components/Decoration.tsx
var EatLearnCode = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const wrapperClass = wasInViewAtLeastOnce ? "elc-reveal" : void 0;
  const contentClass = wasInViewAtLeastOnce ? "elc-reveal__content" : void 0;
  return /* @__PURE__ */ React3.createElement("div", {
    className: `elc-container h-full lg:text-4xl `,
    ref: setRef
  }, /* @__PURE__ */ React3.createElement("div", {
    className: wrapperClass
  }, /* @__PURE__ */ React3.createElement("div", {
    className: contentClass
  }, "Einzigartige Ideen erfordern"), /* @__PURE__ */ React3.createElement("div", {
    className: contentClass
  }, "kompromisslose Umsetzung."), /* @__PURE__ */ React3.createElement("div", {
    className: "spacer-div mb-10 sm:mb-5"
  })));
};
var Portfolio = () => {
  const word = "Technologien";
  return /* @__PURE__ */ React3.createElement("section", {
    "aria-label": "Floating Logo",
    className: "portfolio-text font-extrabold w-full text-5xl xxs:text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] text-textSmColor xs:mt-44 sm:mt-96"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "tilt flex-center uppercase"
  }, word.split("").map((letter, index) => {
    return /* @__PURE__ */ React3.createElement("span", {
      key: index
    }, letter);
  })));
};
var GradientBackground3 = () => {
  return /* @__PURE__ */ React3.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid slice",
    className: "gradient-bg gradient-bg-3 absolute mix-blend-screen overflow-visible"
  }, /* @__PURE__ */ React3.createElement("defs", null, /* @__PURE__ */ React3.createElement("radialGradient", {
    id: "Gradient1",
    cx: "50%",
    cy: "50%",
    fx: "10%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "fx",
    dur: "34s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "0%",
    stopColor: "#00aeef"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "100%",
    stopColor: "#00aeef00"
  })), /* @__PURE__ */ React3.createElement("radialGradient", {
    id: "Gradient2",
    cx: "50%",
    cy: "50%",
    fx: "10%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "fx",
    dur: "23.5s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "0%",
    stopColor: "#ec008c"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "100%",
    stopColor: "#ec008c00"
  })), /* @__PURE__ */ React3.createElement("radialGradient", {
    id: "Gradient3",
    cx: "50%",
    cy: "50%",
    fx: "50%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "fx",
    dur: "21.5s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "0%",
    stopColor: "#fff200"
  }), /* @__PURE__ */ React3.createElement("stop", {
    offset: "100%",
    stopColor: "#fff20000"
  }))), /* @__PURE__ */ React3.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient1)"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "x",
    dur: "20s",
    values: "25%;0%;25%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "y",
    dur: "21s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "17s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React3.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient2)"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "x",
    dur: "23s",
    values: "-25%;0%;-25%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "y",
    dur: "24s",
    values: "0%;50%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "18s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React3.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient3)"
  }, /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "x",
    dur: "25s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animate", {
    attributeName: "y",
    dur: "26s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React3.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "360 50 50",
    to: "0 50 50",
    dur: "19s",
    repeatCount: "indefinite"
  })));
};
var Globe = () => {
  return /* @__PURE__ */ React3.createElement("div", {
    className: "globe"
  }, /* @__PURE__ */ React3.createElement("svg", {
    width: "547",
    height: "200",
    viewBox: "0 0 547 200",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React3.createElement("path", {
    d: "M120.95 45.907l-1.18 1.573-.784.786-1.57.865-.236.71s-.628.63-.55 1.022c.08.393.08 1.1.08 1.1s-1.1 1.024-1.57 1.338c-.472.314-1.1 1.022-1.1 1.022s-.393.473-.628.63c-.236.157-.628.63-.942 1.1-.315.473-.63.787-.786 1.023-.157.236-.628.786-.863 1.652-.235.865-.863 1.887-.863 1.887l-.157.393c.078 1.338.078 1.574.235 2.046.157.47.315.314.157 1.337-.157 1.022-.157 1.415-.314 1.887s-.628 1.337-.784 1.73c-.158.394.314 1.1.314 1.1s.235 1.024.078 1.26c-.157.236.08.708.08.708s.94.55 1.255.865c.315.315.865.787.943 1.023.08.236.707 1.337.785 1.573.08.236.707 1.1.864 1.337.157.236.942 1.1.942 1.1s1.02.787 1.257 1.102c.236.314.943.472 1.178.707.236.236.785.157 1.1.394.314.236.942-.158 1.256 0 .314.157 1.178-.157 1.413-.315.236-.156.785-.706 1.178-.47.392.235.628 0 .942.078.314.08.785-.314 1.1-.314.313 0 1.098-.315 1.334-.315s1.022-.474 1.336-.474c.314 0 .706-.313 1.1-.156.39.156.234-.315.94-.08.708.236.943 0 1.18.236.234.237.55 0 .784.316.236.314.628.55.707.865.078.314.55.63.55.63l.47.077s.63-.47.785-.156c.157.314.864.236.864.236l.707.786.235.315s.472 1.258.393 1.73c-.078.472-.078 1.494-.313 1.73-.236.236-.393 1.26-.393 1.26s-.314.313.393.942c.707.63 1.178 1.18 1.413 1.494.236.316.864 1.182.942 1.732.08.55.236.865.55 1.573.314.708.707.786.785 1.573.08.787.236.787.157 1.337-.078.55-.314.63-.078 1.022.235.394.55 1.102.47 1.338-.078.235-.235 1.258-.235 1.258l-.156.472-.706 1.338-.472.707c-.157.55-.47 1.1-.392 1.887.078.787-.392.787.235 1.573.628.787.94 1.652 1.334 2.36.393.708.628 1.416.707 1.887.08.472.393.63.55 1.26.157.628.236.942.236 1.336 0 .393-.08 1.416.08 1.652.155.236.234.944.313 1.258.077.315-.237.394.234.944.47.55.785.865 1.1 1.26.313.392.235.235.47.785.236.55.55.866.63 1.337.077.47.155 1.65.39 2.2.237.552.55 1.103.55 1.103s.865.55 1.18.472c.312-.08.94-.786 1.412-.55.47.235.864 0 1.256 0 .393 0 .785-.473 1.178-.473.393 0 .942-.63 1.257-.472.314.157.706-.158 1.098-.55.393-.393.63-.708 1.335-1.337.707-.63.628-.63 1.1-1.023.47-.393.942-1.26 1.49-1.416.55-.157.708-.707.865-1.1.157-.394.235-.63.47-.945.237-.315.08.08.472-.944.393-1.023.865-1.416 1.257-1.652.392-.236.628-.708.863-.787.236-.08.63.236.472-.472-.158-.707 0-1.73-.158-1.966-.157-.237-.393.55-.314-.63.08-1.18.942-2.36.942-2.36s1.178-1.494 1.57-1.73c.393-.236.47-.472 1.02-.787.55-.314 1.728-1.1 1.728-1.494 0-.394.472-1.417.472-1.653s0-.472-.157-1.81c-.157-1.336.157-1.02-.314-2.28-.472-1.258-.55-2.83-.865-3.224-.314-.394-.157-1.417-.157-1.73 0-.315.55-1.102.785-1.416.236-.315 1.256-1.574 1.256-1.574s1.57-1.808 2.12-2.673c.55-.866 1.098-1.652 1.49-1.966.394-.315 1.336-1.024 1.885-1.81.55-.786 1.65-2.28 1.728-2.517.078-.235.706-1.022.706-1.022s.863-1.023 1.02-1.573c.157-.55.942-3.618.785-3.46-.157.157-1.1.314-1.413.392-.314.08.47.393-1.806.237-2.277-.157-3.454.236-3.454.236-.708-.157-1.257.63-1.493-.472-.236-1.1-.394-1.73-.864-2.516-.47-.787-.786-1.1-1.492-2.124-.706-1.022-.628-.55-1.257-1.337-.627-.786-.785-.55-1.177-1.573-.393-1.022-.707-.63-1.178-2.045-.47-1.417-.785-1.574-1.02-2.36-.236-.787-.55-1.023-.707-1.73-.157-.71-1.963-4.327-2.2-4.563-.234-.235-.627-1.494-.548-1.258.078.235 1.178 1.02 1.178 1.02s.627-.235.863-.235 1.178.866 1.178 1.18c0 .315 1.65 1.81 2.042 2.91.392 1.1.864 1.888.942 2.202.078.315.864 1.574 1.178 2.046.313.472 1.334 1.415 1.49 1.887.158.472 1.65 2.045 1.65 3.068 0 1.022.706 2.36.785 2.673.08.316 1.492.71 1.492.71l1.885-.472s2.826-1.81 3.14-1.81c.314 0 2.827-1.18 2.827-1.18s1.02-.943 1.727-1.493c.707-.55 1.492-1.573 1.65-2.045.156-.473.47-.55 1.098-1.26.628-.707 1.492-1.415.942-1.887-.55-.47-.864-.314-1.648-1.1-.786-.787-.707-.63-1.257-1.653-.55-1.022.078-2.202-1.1-1.022-1.178 1.18-.707 1.495-1.885 1.73-1.177.237-1.65 1.023-2.198.237-.55-.787-1.1-.315-1.414-1.495-.314-1.18-.55-1.26-.628-1.73-.078-.472 0-.472-.628-1.652s-.157-2.99.236-1.966c.392 1.022 1.02 1.18 2.04 1.887 1.022.707 1.493 1.258 2.435 1.337.942.078 1.728 0 1.885.156.157.158.313-.078.706.08.392.157.548-.236.706.392.157.63 1.02.708 1.413 1.1.392.394.392.237 1.413.394 1.02.157 2.434.157 2.434.157l1.49-.08 1.73.158s1.256.708 1.57.708c.313 0 .392.865 1.177 1.337s.942.55 1.413 1.1c.472.552.393.788 1.02 1.338.63.55 1.65-.078 1.807-.314.157-.236.942-.63.786 0-.158.63.784.393.55 1.888-.237 1.494-.394 1.1 0 2.123.39 1.023 2.118 4.17 2.197 5.113.08.943.55.63.628 1.495.08.864.55 1.18.55 1.808 0 .63.55.787.628 1.26.08.472.942.078 1.178 0 .237-.08 1.335-1.102 1.335-1.102s.472-.156.393-.943c-.08-.786 0-.63 0-1.81 0-1.18-.47-1.18-.235-2.358.235-1.18.863-1.888 1.02-2.438.157-.552.786-1.496 1.1-1.575.313-.078 2.04-.943 2.434-1.494.392-.55 1.02-1.18 1.65-1.808.627-.63 1.726-1.415 1.962-1.18.234.236.156.158.548.158.393 0 1.1.315 1.65.393.55.08 1.648 1.416 1.884 2.124.235.708.078.55.942 1.573.864 1.022 1.65.393 1.65 1.65 0 1.26 0 1.18.392 1.653.392.472.863-.865 1.334-.707.47.157.55-.158.942 1.1.392 1.26.628 1.26.707 2.518.077 1.258-.08.078-.08 1.1 0 1.023-.08 1.102.08 2.045.155.944.705 1.258.627 1.415 0 0 .47-1.337.313-2.28-.156-.944 0-2.28.393-2.674.393-.393.786-.786 1.1.237.314 1.022.47.236 1.177 1.415.707 1.18 1.335.944 1.413 1.494.08.55.472.63 1.02 1.1.55.474 1.022-.077 1.65-.55.63-.47 2.355-2.2 2.435-2.91.078-.707.784-.55-.472-2.358-1.257-1.81-1.257-2.44-2.59-3.54-1.335-1.1-2.12-1.18-1.1-2.595 1.02-1.416 1.492-2.36 2.12-1.966.628.393 1.727.314 1.727 1.887s-.314 3.304.785 1.416c1.1-1.888 1.65-2.99 1.335-2.674-.314.315.706-.63.706-.63s.078-.707 1.413-1.02c1.335-.317 1.727-.473 2.2-.71.47-.236 1.805-1.81 2.04-2.516.235-.708.864-1.967.707-2.517-.157-.55-.943-3.224-1.1-3.146-.156.08-.078.08-1.098-1.022-1.022-1.1-1.728-1.888-1.885-2.36-.157-.472-.55-.55-.08-1.18.473-.63.708-.55.787-1.1.078-.55.706-1.023-.472-.63-1.177.393-.314.158-1.335.08-1.02-.08-3.69.55-2.354-1.102 1.334-1.652 1.726-2.674 1.962-2.674s1.414-1.338 1.492-.08c.078 1.26.55.944.628 1.73.08.787 1.65-.864 1.65-.864s.548.157.94.55c.393.393.393 1.652.393 1.652s-.313-.394.55.236c.864.63 1.806.314 1.806 1.65 0 1.338 0 1.417.55 1.732.55.314 1.098.157 1.57-.236.47-.393 1.256-1.81 1.256-1.81s.08-.55-1.178-1.336c-1.256-.787-2.04-1.337-2.51-1.73-.473-.394-.316-1.573.155-2.046.472-.472.707-.708.55-1.337-.158-.628.235-1.1 1.413-1.02 1.178.078 1.413-.08 1.413-.08s.236.157.236-.315c0-.47 1.49-2.674 1.098-2.674-.393 0 .08-.55-.157-1.414-.235-.866.786-2.202-.077-2.832-.864-.63-1.1-.944-1.65-1.887-.55-.945-.47-1.1-2.512-1.338-2.04-.237-2.982.47-3.454-.158-.47-.63-.706.944-1.02-.944-.314-1.887.47-3.146.47-3.146s1.257-.786 1.57-1.337c.315-.55 1.57-.787 2.593-.393 1.02.393 2.51.314 3.768.55 1.256.236 1.177 1.023 1.805 0 .628-1.022 0-1.494.47-2.044.473-.55 1.022-1.416 1.415-.866.392.55 1.178 1.1 1.806.393.628-.707.864-.786.864-.786l.313.314s.708-.394.708.314.707 1.495.314 2.045c-.393.55-.942.472-.942 1.81 0 1.337 0 1.1.863 2.202.864 1.1 1.414.157 1.57 1.337.158 1.18.314.944 1.18 1.73.862.786.705.786 1.333 1.258.63.472.943.945.943.158 0-.787.077-1.18 0-1.888-.08-.707.627-1.258.155-2.438-.47-1.18-.078-1.1-1.02-1.966-.943-.865-1.57.157-1.884-1.1-.314-1.26 1.492-1.81 1.964-1.968.47-.156 1.177-1.1 1.334-.47.157.628-1.178 2.91 1.1.47 2.276-2.438 1.256-1.415 1.256-1.415s1.177-.157 1.413 0c.235.157.864-.708.628-.63-.236.08-2.512-1.258-2.512-1.258l-1.65-.943s.55-.394.943-.315c.393.08.472-.786.864-.865.393-.08 3.062.55 3.612.865.55.315 2.512.393 2.276.236-.235-.157-1.49-1.1-1.57-1.416-.078-.314-2.826-.944-3.69-.865-.864.078-1.648.314-2.355.078-.707-.236-1.727-.865-2.277-.865s-7.46-1.337-7.773-1.258c-.314.078-.785 1.573-1.02 1.337-.236-.236-.63-.236-1.73-.55-1.097-.315-2.59-.552-4.553-.71-1.962-.156-3.297.16-3.846-.47-.55-.63-1.727-.394-3.062-.473-1.335-.077-2.905 0-3.612 0-.707 0-2.355-.077-2.748-.156-.393-.08-.864-.63-1.335-.708-.47-.08-.393-.235-1.335-.393-.942-.157-.863-1.18-1.177-.315-.314.866-.158.63-.628.944-.472.315-.943.944-1.257.944-.314 0-1.57.08-1.806-.08-.236-.156-.628-.313-1.413-.313s-.785.078-1.805-.08c-1.02-.156-1.806-.078-2.748-.55-.943-.47-.943-.786-1.728-.707-.785.08-.785-.158-1.885-.158s-2.434.63-3.14.708c-.707.08-2.277-.08-2.827-.314-.55-.236-.707-.787-2.748-.55-2.042.235-3.22.235-2.827-.394.393-.63.864-1.26 1.1-1.337.235-.078.784-.47.39-.628-.39-.158-.784-.393-1.725-.472-.943-.08-.865.314-2.278.157s.786-.55-2.12-.472c-2.904.08-3.61.315-3.925.315-.314 0-.707-.63-1.492.314s-1.885 1.494-3.455 1.573c-1.57.08-1.65-.157-3.14.393-1.492.55-2.434-.157-2.12 1.1.314 1.26.707 1.732.707 1.968 0 .235-.707 1.81-1.57.865-.865-.944-2.435-4.64-1.728-2.124.706 2.516 2.276 3.38.785 3.774-1.492.394-1.335-.157-1.57-.314-.236-.158 0-1.26-.08-1.888-.078-.63-.235-1.022-.55-1.337-.312-.315-.234-.787-.862-.944-.63-.156-.08-.47-1.1-.47s-1.884-.63-1.648.786c.235 1.415.47.472 1.098 1.81.628 1.336 1.806.392.943 1.336-.864.943-3.14.63-3.69.236-.55-.394-.393.157-1.414-.55-1.022-.71-.707-1.26-1.885-.71-1.178.552-1.57 1.574-2.042 1.18-.47-.393-1.57.55-1.962.08-.392-.472-1.963-.472-2.276 0-.315.472-1.257.393-2.59 1.022-1.336.63-.944.08-2.593 1.416-1.648 1.337-2.59 2.438-3.14 1.573-.55-.866-3.533-2.36-2.355-2.597 1.178-.236 1.728-.708 2.356-.157.63.55 1.65.393 1.806 0 .157-.394.865-.787-.078-1.258-.942-.473-1.02-.158-2.512-.708-1.492-.55 0-.394-2.042-.708-2.04-.315-2.905-.472-3.455-.63-.55-.157-1.336 0-2.12-.078-.786-.08-1.335-.236-2.042-.157-.706.078-1.1-.08-2.04.63-.944.707-1.65 1.022-2.28 1.572-.627.55-2.275 1.65-2.746 2.044-.472.393-2.12 1.652-2.278 2.124-.157.472.157.865-.47 1.18-.63.314-1.257.314-1.728.392-.472.08 0-.707-.472.08-.47.786-.314 3.617.08 3.224.39-.394.156-1.652 1.883-.472 1.728 1.18 2.827 1.022 2.748 2.123-.078 1.1 1.178 1.023 1.335 1.26.157.235.942-.316.942-.316s1.728-1.102 1.728-1.652c0-.55 1.1-1.81 1.1-1.81s-.787-.392-.787-1.18c0-.785.236-1.022.393-1.808.157-.786-.864 0 1.492-1.495 2.355-1.494 2.512-.47 2.512-.47s.314.313-.08.785c-.39.472-1.098 1.73-1.255 1.888-.157.157.707 1.416 1.1 1.416.392 0 1.177-.315 1.648-.237.472.08 1.257-.235 1.492-.078.236.156.785.628.392 1.022-.392.393-1.256.864-1.884.708-.628-.157-1.57-1.26-1.02.314.55 1.573-.08 1.966-.55 1.888-.47-.08-1.492-.865-1.335.314.157 1.18-1.02 1.966-1.256 1.966s-.707-.078-.707-.078-.707-.08-1.1-.08c-.39 0-1.177.394-1.412.71-.236.313-.55.078-.942.078-.392 0 0-.472-.785-.63-.784-.157-1.256-.314-1.727 0-.47.315-1.177.472-1.492.236-.314-.236.158-.787-.47-.47-.63.313-1.1 1.178-1.336 1.257-.235.078.707 0-.235.078-.942.08-1.335.316-1.806.473-.472.157.156 1.1-.708 1.415-.863.316-.235-.392-1.1.316-.863.708-1.02 1.337-1.333 1.415-.316.08-.237.237-.944.316-.706.08-.628.157-1.02.236-.393.078.078.236-.786.078-.864-.157-1.49.158-1.335.473.157.314 3.063 1.18.864 1.1-2.2-.078-1.492.315-1.02.63.47.314.705.63.94.708.237.08.63 1.023.63 1.023s.627-.08.234.472c-.392.55.157.708-.235 1.416-.394.71-.394.237-.708.394-.314.157-.785.708-1.65.236-.863-.472-1.49-.708-2.51-.786-1.022-.08-.316-.236-1.022.314-.707.55-.864 1.18-.785 1.887.08.708.157 1.652-.08 2.124-.234.47-.234.943-.078 1.65.158.71.63 1.024.63 1.024s1.098.157 1.334.236c.236.078.707-.157 1.335.235.63.394 1.257.55 1.65.08.392-.472 1.962-1.023 2.434-1.495.47-.472.784-.63.548-1.1-.235-.473.47-1.653.864-1.89.392-.234 1.256-.47 1.256-.47l.942-1.416s.785-.866 1.178-.787c.392.08 2.59.866 2.434-.157-.157-1.023.157-1.337.392-.944.236.393.864.236.864.236s.314-.157.55.08c.235.234.55 1.258 1.02 1.493.472.236.864.472 1.178.63.314.157.628 0 1.257.55.628.55 1.256.865 1.334 1.1.08.237.63.787.63.787s.548.158.39.473c-.156.314-.94 1.258-1.334 1.415-.392.157-1.413-.158-1.02.157.392.315.942.708 1.177.472.236-.237 1.727-1.81 1.727-1.81s-.078.08 0-.393c.08-.472 0-1.022.393-.787.393.237.628.55.785.237.157-.315.314-.158-.078-.394-.393-.236-1.335-1.573-1.806-1.65-.47-.08-1.65-.867-1.65-.867s-.234-.236-.783-.865c-.55-.628-.707-.47-.864-1.02-.157-.552-.63-1.26.235-1.103.864.158 1.413.708 2.2 1.18.784.472.627.63 1.334 1.1.706.473.785.945 1.334.867.55-.08 1.178.314 1.178 1.022s.157 1.494.314 1.652c.157.158.628.472.785.787.157.314.47 1.1.707 1.415.235.315.47.55.706.944.236.393.314-.08.55.08.235.156.55.077.55-.237 0-.315.078-.866.078-.866s1.1-.313.785-.47c-.315-.158-1.257-1.102-1.18-1.416.08-.315 0-.944.394-.865.392.077.785.785 1.65.156.863-.63 1.883-.944 1.57 0-.315.944.078 1.1 0 2.123-.08 1.022.314.707.863 1.258.55.55.942.63 1.335.787.392.157 1.02.08 1.65.157.627.08 1.02-.236 1.57-.078.548.157 1.805-.08 2.04.078.237.157 1.18-.314 1.257.236.077.55.392-.08.156 1.18-.235 1.258-.55 2.123-.55 2.123-.863 1.653-1.177 2.046-1.57 2.125-.392.08-.628.315-1.334.236-.707-.078-1.57 0-2.59-.235-1.022-.236-2.907.236-3.692-.236-.785-.473-1.884-.08-2.356-.63-.47-.55-1.256-.472-1.57-.787-.314-.314-.47-1.18-.47.08 0 1.258-.708 1.336-.864 1.966-.158.628.235.313-.63.234-.863-.08-1.098.394-2.354-.55-1.257-.944-1.885-.944-2.513-1.337-.628-.394-1.256.707-1.884-.55-.63-1.26-1.493-.237-1.572-1.26-.078-1.022 0-.943.08-1.572.078-.63.94-1.18.55-1.416-.394-.236-.08-.63-.63-.394s-1.334.315-1.962.55c-.63.237 1.413 0-1.65.237-3.06.236-3.925.55-3.925.55s-.235-.157-.628.158c-.392.315-.942.787-1.49.55-.55-.235-.865-.156-1.336-.077-.47.078-.785-.394-1.335 0-.548.392-1.176.55-1.412.392-.236-.16-.63-.788-.63-.788zm52.526 51.752c-.235.865-1.1 2.123-1.1 2.123l-1.57.786s-.548.47-.863.55c-.314.078-1.1.472-1.1.472s-.706-.158-.47.55c.235.708.314 1.573.235 1.81-.078.235-.078.707-.078 1.337 0 .628-.236 1.414-.628 1.57-.393.16-.786.316-.707.867.08.55.08 2.202.08 2.202l1.02 1.572s.314-.236.942-.236c.627 0 1.256-.55 1.256-.55s.707.157.628-.708c-.078-.865.316-1.888.236-2.124-.078-.236.707-1.258.707-1.494s.786-1.337.786-1.73.548-1.023.627-1.494c.078-.473.157-1.573.314-1.888.158-.314.236-.63.236-.944v-.943l-.55-1.73zm61.478 10.617c-.235.314-.392 3.697-.55 4.09-.156.393-.47 2.438-.313 2.91.158.472.393 2.202.237 2.753-.158.55.078 2.28-.315 2.202-.392-.08-.55.08-.55.315 0 .236.55.707.55.707s.943 0 1.335-.078c.393-.08 1.178-.472 1.806-.472.628 0 1.02-.473 1.57-.473s1.728-.39 2.042-.234c.314.156.785-.944 1.335-.708.55.236 1.727-.55 2.277-.55s.785-.866 1.413-.708c.628.157 1.806-.315 2.356-.08.55.237 1.413-.786 1.805 0 .394.787 1.572 1.102 1.572 1.495s-.08 1.26-.08 1.26l.943-.08s1.492-.944 1.728-.944c.235 0 .785-.785.785-.392s-.472 1.26-.628 1.65c-.157.395.156.867.156.867s.786.393.472 1.1c-.314.71.078.552 0 1.102-.08.55 0 .314.313.63.316.314.866.865 1.336.786.472-.08.628-.55 1.02-.315.394.236 1.178.08 1.414.394s-1.49 1.1 1.492-.236c2.984-1.338 3.297-1.652 3.69-2.124.394-.472.865-.944 1.178-1.26.314-.313.08-.235 1.02-.943.943-.708.943-.394 1.807-1.73.864-1.338 1.49-1.81 1.65-2.046.156-.236.47-.314.548-1.26.08-.942.707-1.808.707-2.122 0-.314.235-.786.157-1.337-.08-.55.313-1.337-.158-2.123-.47-.787.235-1.1-.47-1.416-.708-.315-1.18-.157-1.336-.708-.157-.55-.786-.472-1.02-1.966-.237-1.494-1.18-1.652-1.18-1.652s-.94-.393-.705-.55c.237-.158.315-1.26.237-1.574-.08-.314-.08-1.022-.314-1.494-.236-.472-.393-1.1-.628-1.652-.236-.55-.628-.708-.786-1.337-.158-.63-.393-.865-.472-1.022-.08-.156-.236-.943-.392-.078-.157.865-.472 2.516-.472 2.516s-.628 1.338-.864 1.73c-.235.394-.47 1.417-.863 1.338-.393-.08-.63.394-.942.314-.315-.08-.786.08-1.02-.157-.236-.236-.865-.865-1.18-.944-.313-.08-.548-.708-.784-.708-.235 0-.627-.55-.55-.866.08-.314.158-1.022.237-1.337.078-.315.55-1.023.55-1.023s0-.472-.393-.472-.47 0-1.335-.08c-.865-.078-1.1-.156-1.415-.156-.313 0 .315-.16-.55.077-.862.237-1.255.866-1.805 1.417-.55.55-.078.392-.55.55-.47.158-.39-.393-.706.472-.314.865.158 1.1-.08 1.258-.234.158-1.883-.55-1.883-.55s.394-.08.08-.472c-.314-.394-.628-.944-1.1-.708-.47.236-.864.394-1.177.787-.314.394-.314.708-.55 1.023-.235.314-.863.314-.942.63-.077.314-.077 1.1-.313 1.18-.235.078-.313-.315-.55-.394-.234-.08-.156-.71-.313-.315-.157.393-.314.314-.55.943-.235.63-.314 1.18-.55 1.26-.235.078 0 .156-.706.55-.706.393-.864.393-1.884.865s-.785.472-1.49.55c-.708.08-.866.315-1.336.394-.472.078-.785.156-1.257.63-.47.47-.862.628-1.176.707-.314.078-.63.393-.63.393zm4.632-31.067c-.313.472-1.334 1.888-1.726 1.967-.393.078-.786.472-1.1.393-.314-.08-1.02 0-1.256 1.022-.236 1.023-.628 1.573-.865 1.494-.236-.078.392 1.494-.942.866-1.335-.63-.864.55-1.02.865-.158.315.234 1.18.313 1.495.08.314.315.865.63 1.336.313.472.55 1.023 1.098.866.55-.158 2.277 0 2.277 0s.63.236 1.02.236c.393 0 .472-.157.707-.157s.707-.787.628-.866c-.078-.08-.313-.314.157-.786.472-.472 1.02-.628 1.1-1.18.078-.55-.157-.55.078-.865.236-.314.785-.235.63-.55-.16-.315.155-.236-.16-.866-.312-.63-.705-.866-.39-1.652.313-.787.628-.944.55-1.416-.08-.472.39-.63-.16-1.18-.548-.55-.784-.708-1.176-.866l-.394-.156zm15.39 7.865c.314-.078 1.413-.865 1.492.55.078 1.417.156 1.023.628 1.81.47.786.784 1.023 1.334.63.55-.394 1.178-.394 1.334-1.102.158-.708.158-.708.63-.708.47 0 .627-.078.863.237.236.314.392 0 1.413.55 1.02.55 1.884.393 2.513.944.628.55.942.472 1.806.786.863.315.47-.157 1.255.708.786.865.472 1.1.864 1.494.39.394.706-.314.548.63-.157.943-1.256 0 .393 1.336 1.65 1.338 1.886 1.574 2.435 1.967.55.393.942.865.472.865-.472 0-1.964 0-2.12-.236-.158-.236-.864-.394-1.336-.944-.47-.55-1.49-.944-1.725-1.415-.236-.473-.55-.63-.942-.63-.393 0-.785.472-1.335 1.023-.55.55-.314-.314-1.02-.08-.708.237-1.492-.078-1.886-.392-.392-.315-.313-.787-.94-.55-.63.235-1.022.078-.786-.394.235-.472.078-1.1.078-1.1s.236-.788-.313-.945c-.55-.158-.55-.708-1.1-.866-.55-.157-1.412-.55-1.412-.55s-.08 0-.314-.08c-.236-.078-.236-.078-.864-.235-.628-.16-1.1-.002-1.413-.395-.315-.393-.157-.943-.157-.943s1.256.157 0-.787l-1.257-.943s.157-.08.08-.237c-.08-.158.782 0 .782 0zm-35.332-6.528s.392.394 1.02.315c.628-.08 1.1 1.258 1.492 1.73.392.472.628.708 1.492 1.258.863.55.785-.472 1.963 1.18s.63.63 1.178 1.652c.55 1.023.864 1.573 1.178 1.81.314.235.55.864.63 1.1.077.236.626.944.626 1.18s.157.865-.314 1.416c-.47.55-.864.63-.864.63s-.942-.473-1.256-.945c-.314-.472-.706-.865-1.256-1.81-.55-.943-1.178-1.965-1.492-2.437-.314-.472-.785-.944-1.02-1.416-.236-.472-.864-1.888-1.178-2.045-.314-.158-.393-.63-.943-1.18-.55-.55-.472-1.022-.707-1.337-.236-.314-.785-1.023-.785-1.023l.236-.078zM66.93 139.895c-.55-.314-1.728-.865-2.12-1.18-.392-.314-1.57-2.045-1.57-2.045l-.864-1.652s-1.02-1.258-.785-1.73c.236-.472.708-.786.708-1.022s.47-.866.078-1.1c-.393-.237-.393-.316-.628-1.024-.236-.707-.236-1.337-.55-1.494-.314-.157-.55-1.18-.864-1.258-.313-.08-.628-.63-.628-.63l-.47-6.37s-.158-2.91-.315-3.54c-.156-.63.236-1.966-.156-3.146-.393-1.18.08-2.595-.157-3.067-.236-.472.157-1.81-.08-3.067-.234-1.26.943-2.832 0-3.303-.94-.473-.234-1.18-1.02-1.18-.784 0-1.334-.394-2.04-.944-.708-.55-2.043-1.573-2.435-1.967-.392-.393-1.65-1.415-2.04-1.73-.394-.314-.787-1.652-1.1-2.045-.314-.392-.47-1.572-.943-2.28-.472-.707-1.1-1.887-1.257-2.123-.157-.236-1.885-2.28-1.885-2.28l.157-1.26s1.178-.707 1.02-.943c-.156-.236.08-.472-.47-.944-.55-.472-.47-1.337 0-1.73.47-.394 1.177-1.652 1.177-1.652l1.178-1.966s.943-1.023.943-1.73c0-.71 1.334-1.18.55-1.81-.786-.63-.393-1.18-.63-1.652-.235-.47-.078-.786.63-1.258.706-.472 1.962-2.202 1.962-2.202s.942-.236 1.178-.236c.235 0 .628-2.518 1.335-.866.706 1.652.942.787.706 1.966-.235 1.18.314.944.628.63.314-.315-.157.236.47-1.18.63-1.416.394-1.888.786-1.494.393.393.55.472 1.257.708.706.236.942.157 1.177.63.235.47.157-.16 1.492.078 1.334.236 3.22-.472 2.983.314-.235.786-.706-.08.393.786 1.1.866 1.256 1.023 1.884 1.18.628.158 1.178.08 2.12 1.023.943.942 1.178 1.02 1.413 1.493.236.472.628.157 1.02.63.394.47.943.47 1.493.47.55 0 0-.47.863.16.865.628 1.492.706 1.885 1.965.392 1.26 1.178 1.18.55 2.438-.63 1.26-1.885 1.81-1.335 1.73.55-.078 1.57-.55 1.884-.47.314.077.47-.237.942 0 .47.234.55-.316.47.234-.078.55-.078 0-.078.55 0 .552-.157-.55.785-.313.942.236.392-.473 1.492.55 1.098 1.023 1.098.708 1.49 1.26.393.55.785-.315 1.02-.08.237.236.943.078 1.65.236.707.157.236-.472 1.335.236 1.1.706 2.198.47 2.434 1.1.234.63.863.393 1.177.786.313.394.47-.157.785.394.314.55 1.256.393 1.1.943-.158.55.234.236.077 1.022-.158.788-.708 2.046-1.178 2.36-.472.315-.47.708-.785 1.1-.314.395-.236-.392-.63.71-.39 1.1-.313 1.258-.627 2.28-.314 1.022-.078 0-.314 1.022-.235 1.023-.078 1.652-.314 2.832-.235 1.18-.156 1.18-.313 2.044-.158.865.39-.393-.316 1.416-.706 1.81-.785 1.73-1.02 2.517-.236.787.078.157-.785.63-.865.47-.394.313-1.415.628-1.02.315-2.277.63-2.67.708-.39.08-1.962.55-1.49 1.494.47.944.47 1.1 0 2.282-.472 1.178-1.178 1.572-1.178 2.122 0 .55-.315 1.1-.393 1.494-.08.393.707-.394-.235.786-.943 1.18-1.022.866-1.336 1.574-.314.707 0 .156-.314.707-.314.55-1.1.786-1.1.786s.08.393-.235.236c-.314-.157-.236.078-1.414-.237-1.176-.315-1.333-1.1-1.49-.55-.157.55.078.865.785 1.415.706.55 1.884.708 1.57 1.26-.314.55-.314.55-.55.864-.235.314.315.077-.235.314-.55.235-.864 1.258-1.1 1.258-.235 0-.392.393-.706.236-.314-.157-1.1-.708-1.256-.393-.157.314-.47-.394-.393.707.08 1.1.236 1.73-.157 1.967-.392.235-1.335 0-1.335 0l-.157-.395-.55.158s-.235.944.158 1.1c.392.158.314.315.706.787.393.472.157 1.337.157 1.337s0 .236-.392.63c-.392.393-.55.708-.628.943-.08.236-.55 1.26.157 1.18.706-.08 1.256-.472 1.256.787 0 1.258.314.944-.078 1.81-.393.864-.707.942-.786 1.73-.078.785.08.864.236 1.336.157.472.55.236.157.472-.392.236-1.57 0-1.57 0zM46.672 75.873l-.55-.786s-.234-.473-.627-.55c-.393-.08-1.257-1.102-1.257-1.102s-.392-.314-.392-.865c0-.55-.314-1.415-.08-2.36.237-.943.315-2.123.237-2.438-.08-.314.392-.393-.157-.707-.55-.315-1.65-.394-2.356-.394s-1.57.238-1.727.316c-.157.08.863-2.36 1.02-2.753.157-.393.864-2.123.864-2.36 0-.235.236-.314-.235-.628-.47-.315-1.256-.472-1.728-.236-.47.235-.392-.316-.785.628s-.786 1.966-1.257 2.124c-.47.157-1.413.63-1.413.63s-1.178-.08-1.57-.158c-.393-.08-2.042-.944-2.356-1.494-.314-.55-.47-1.73-.47-2.28 0-.552.862-2.203.784-2.597-.078-.393.864-1.966.785-2.202-.08-.235.157-1.022.393-1.336.235-.315 1.413-.708 1.727-1.023.314-.313.864-.706 1.413-.864.55-.157 1.02-.314 1.414-.314.392 0 1.413-.865 1.57 0 .157.865.864.55 1.256.63.393.078.472.47 1.1-.552.628-1.022 1.256-1.337 1.256-1.1 0 .235 1.02-.08 1.177.157.156.235.47-.158 1.02.314.55.473 1.335.552 1.256.787-.078.236.314.236.314.472 0 .235.314-.55.314.864 0 1.416.393 2.28.393 2.28s.55 1.18.785.945c.235-.237.706-.866.706-.866s.785-.472.236-2.124c-.55-1.65-.157-2.123-.314-2.674-.157-.55-.157-.865.785-1.573.942-.708 3.22-2.28 3.77-2.595.548-.315 1.804-1.18 1.804-1.18s.47-.236.55-.865c.077-.63 1.57-1.73 1.648-2.045.08-.314 1.1-1.1 1.1-1.1s1.098-.63 1.02-1.023c-.08-.393 1.413-1.1 1.65-1.1.234 0 1.49.392 1.49-.316 0-.71 0-.866.786-1.495.785-.63 1.805-1.573 2.198-1.573s1.727-.708 2.277-.865c.55-.158 2.276-.944.706 0-1.57.943-.55.393-.864 1.18-.314.786-.55 1.808.942.628 1.492-1.18 1.413-1.415 1.963-1.494.55-.077.157.237 1.335-.156s1.256-.55 1.256-.55.55-.473.236-.708c-.314-.237.314-.55-.864-.08-1.178.473-1.1.55-1.885.315-.784-.235-1.962-.156-1.1-.943.865-.786 1.964-1.022 1.257-1.337-.706-.314-2.512.08-2.747.157-.236.08-.786-.078-1.257 0-.47.08-.314-.628 0-.786.315-.156 1.335-.63 2.59-.943 1.257-.315 4.32-.393 5.026-.393.707 0 1.65.157 2.2-.236.548-.393 1.648-1.022 1.805-1.337.156-.314.784-.785.784-.785s.706-.708.314-1.023c-.393-.314-.786-1.022-1.1-.865-.313.157-.078 1.1-.706.078s-.55-1.18-.864-1.415c-.314-.236-.628-.08-.392-1.18.235-1.1.157-1.573.157-1.573s.235-.943 0-1.022c-.236-.08-.392-.314-.785-.08-.393.237-2.59 1.338-3.062 1.574-.47.235-1.1-.945-.864-1.495.236-.55.078-.236-.235-1.022-.314-.787-1.57-.945-2.042-.945-.47 0-1.57-.708-1.884-.235-.313.47-1.962 1.965-2.276 2.123-.314.158-.785-1.337-1.02 1.1-.237 2.44.863 3.147-.393 3.305-1.255.158-2.355.865-2.355.865s-1.02.08-1.02.708c0 .63-.393 2.124-.864 2.28-.47.16-1.648-.077-2.04-.55-.393-.47.078-2.2.078-2.2l.707-.71s-5.025-.785-4.947-1.1c.08-.315-1.492-.865-1.65-1.337-.156-.472-.235-1.495-.077-1.888.158-.393 2.278-2.28 3.377-2.674 1.1-.393 2.983-1.258 3.533-1.416.55-.157 1.492-.078 1.806-.47.314-.395.392-1.102.392-1.102s-.157-1.102.157-.945c.314.16.864.395.943.63.078.237.078.787.628.158.55-.63 1.256-.866 1.884-1.18.628-.315 1.57-.236 2.12-.55.55-.315 1.492-.63 1.57-1.416.08-.786-.235-.55-.628-.63-.392-.078.157.08-1.177.71-1.335.628-.943.156-1.885.628-.942.472-1.02.55-1.1.157-.078-.393.158-1.022.158-1.022s.08-.08-.47-.236c-.55-.158-.55.078-.63-.63-.078-.708.393-1.73-.392-1.416-.785.315-1.49-.236-2.04 1.337-.55 1.574-2.435 3.226-2.906 2.832-.47-.393-.55-.472-.943-.472-.392 0-.942-.47-1.648-.55-.708-.08-2.828-.08-3.377 0-.55.08-1.178-.315-1.65.158-.47.47-1.177 1.1-1.177 1.337 0 .236-.707-.866-.942-.787-.236.08-.864-.314-1.57-.314-.707 0-1.178-.394-1.413-.394-.235 0 .236-.63 0-.708-.235-.078-5.34-.235-5.34-.235s-1.648-.63-2.276-.55c-.628.078-2.355.156-3.69.392-1.335.235-3.298 1.022-3.926 1.1-.628.08-2.04.08-2.277-.314-.235-.393.08-.315-.235-.393-.314-.08-.078-.236-.784-.787-.706-.55.315-1.022-1.1-1.022-1.412 0-2.275-.08-3.532 0-1.256.08-3.847.708-4.16.63-.315-.08-2.827.392-3.22.157-.393-.236-2.356.865-2.748.787-.392-.08-1.884.08-2.277.315-.393.236-2.277.707-1.65 1.1.63.394.55.787.63 1.023.078.236-.63.786-.63.786s-.156 0-1.02-.313c-.863-.315-1.805-.472-2.198-.236-.393.237-1.1.71-.942 1.024.157.314 1.256 1.022 1.413.786.157-.236.55-.708 1.02-.63.472.08 1.18-.313.55.473-.628.786-1.177 1.18-1.57 1.26-.392.077-1.334.156-2.198.235-.864.08-.786-.315-1.57.472-.786.786-1.1.314-1.257 1.18-.156.864-.313.864 0 1.1.315.236-.627.315.08.55.706.237 1.57.473 1.49.71-.078.235.787-.316.315.313-.47.63-.785 1.18.157.55.942-.628 1.492-.157 2.277-.55.784-.393 1.57-.472 2.04-.786.472-.315.707-.786 1.414-1.023.707-.236.235.08.314.472.078.393 0 .472.47.157.472-.315.472-.078 1.1-.472.628-.392 1.335-.785 1.806-.55.47.237.628.237.942.237.314 0-.392-.08.314 0 .707.078-.314-.236 2.042.314 2.355.552 2.984.158 3.14 1.024.158.865.472-.08.864.47.392.552.628.08.864 1.024.235.944 0 3.54-.157 3.854-.157.314-.236.314-.157 1.022.078.708 1.02 4.09.706 4.326-.313.235-1.02.314-1.02.314L18.8 34.19s-.63 1.18-1.178 1.81c-.55.628-1.256 1.415-1.65 1.965-.392.55-.706 1.495-1.255 2.045-.55.55-1.02.314-.864 1.494.157 1.18 0 2.438.157 3.304.157.865.55 2.045.864 2.517.314.47.55.47 1.1.865.55.393 1.255.865 1.176 1.258-.078.393.08 2.832.08 2.832s.47.786.548 1.65c.08.867.63 1.732.63 1.732l.47 1.023s.235.08.55.707c.314.63.314.63.392.944.08.315.08.236.08.315 0 .08-.08-1.336-.237-1.73-.157-.393-.157-.865-.314-1.337-.158-.472.078-1.023-.393-1.73-.47-.708-.47-.787-.707-1.495-.235-.707-.55-1.494-.235-1.652.314-.156.55-1.18 1.177 0 .628 1.18.707.866.786 1.81.078.944.314 1.26.55 1.65.235.394.784 1.732 1.098 2.282.314.55 0-.314.707.787.706 1.1.785 1.337 1.178 2.202.393.865.63.865.864 1.494.236.63.08.473-.078 1.18-.157.708.157 1.495.157 1.495s1.1.393 1.177.63c.08.235 1.178.628 1.335.943.157.315 1.178.708 1.178.708s.864.55 1.177.707c.314.158 1.257.315 1.257.315s.628.158.863.236c.236.08.943.08.943.08s.628-.473.863-.316c.236.157.785-.315 1.02.08.236.392.708.392.943.707.235.314.47.314.863.707.393.394.785.315 1.177.63.393.314.707.314 1.178.314.47 0 .47 0 .785.08.314.078.47-.237.785.157.314.393.55.628.785 1.022.236.393.785.393.864 1.022.078.63.235.55.235 1.1 0 .552.314.788.55.945.235.157 1.1.943 1.1.943l1.177.237.94.708 1.022.313zM71.837 2.806l4.71-.59s1.65 0 2.474-.59c.825-.59 0-.59 2.474-1.06 2.474-.473 1.767-.71 3.063-.473 1.295.236 1.648.236 3.062.472C89.03.8 89.384.447 90.68.8c1.296.354 1.885.236 2.945.236h3.297c1.65 0 3.18-.943 3.77-.354.588.59.94.354 2.944.59 2.002.236 2.826-.236 3.65 0 .825.236 2.24-.118 3.887 0 1.65.118 2.474-.118 3.062-.118.59 0 1.178-.826 2.002-.118.825.708 1.885-.236 2.002.708.117.944 1.648.236.117.944-1.53.708-1.295.59-2.355 1.534-1.06.944.706 1.77-1.53 2.595-2.24.826-2.593-.472-3.18.944-.59 1.417 0 1.77-.12 2.48-.117.706-.352.824-1.06 1.414-.706.59-.706 0-2.354.354-1.65.354-2.827.708-3.533.708-.707 0-2.238.59-2.71.826-.47.236.825.59-1.648 1.298-2.474.708-3.063.59-3.77 1.533-.706.944-.47 1.063-.94 1.652-.473.59-1.886 2.95-2.592 2.36-.707-.59-1.06-.472-1.65-1.062-.588-.59-.942-1.415-1.295-1.887s-.47-1.652-.59-2.36c-.116-.708-1.177-2.36 0-2.124 1.18.236 1.886.118 2.24-.117.352-.237.706-1.062.706-1.062s-.118-1.298-.472-2.006c-.353-.708-.117-1.298-.706-2.005-.59-.708-.59-.59-1.413-1.298-.825-.708-.59-1.062-1.885-1.18-1.295-.118-1.65-.472-2.12-.354-.47.118-2.002-.826-.353-.944 1.65-.118 3.18.118 3.18.118s2.12-.944 1.413-1.062c-.706-.118 1.06-1.18-.59-.826-1.648.354-3.532.826-4.003.944-.47.118-1.65.236-2.827.59s-2.59.236-3.297 1.062c-.707.826 0 .944-.707.826-.706-.118.59-.826-1.06 0s-1.177.708-2.002.472c-.824-.236-1.413-.59-1.413-.59s1.06-.118-.47-.236-1.53-.118-2.12-.826c-.59-.708-.235-.708.118-.944s.59-.708.59-.708zm-2.59 5.31c-.59.59-2.004 1.415-1.65 1.77.354.353.59 1.65 1.296 1.296.706-.353-.118-1.533 2.59-.59 2.71.944 2.474-.117 3.063 1.298.588 1.416 1.06 2.478.706 2.832-.353.354-.47.708-1.65 1.062-1.177.354-1.648.826-.823 1.415.823.59 2.354 1.18 3.06 1.533.708.354 2.827.472 1.767-.707-1.06-1.18.236-1.534.236-1.534s2.002 1.534 1.296-.236c-.708-1.77-1.18-1.77-.708-1.77.47 0 1.413.59 1.413.59l.47-.944-.47-1.533-1.53-1.535s1.294-1.18-.472-1.415c-1.767-.236-1.65-.236-2.59-.827-.944-.59-1.06-.825-2.828-.47-1.766.353-2.355.59-2.355.59l-.824-.828zM42.982 9.53c.706-.707 2.59-2.36 3.297-1.887.707.472 1.767-.354 2.59.354.825.708 1.768 1.534 2.474 1.77.707.235 1.53-.59 2.238-.236.707.355 3.18-1.77 2.71-.117-.472 1.652.588 2.123-.708 2.242-1.295.118-2.71 1.06-3.298.708-.59-.354-1.06-.708-2.002-.236-.942.47-.47.47-1.53.236-1.06-.236-1.296.235-1.532-.12-.236-.352-.942-.234-.824-1.296.117-1.062.47-.944-.236-.944-.707 0-1.295.118-1.767-.236-.47-.354-1.412-.236-1.412-.236zm351.8 36.377l-1.178 1.573-.785.786-1.57.865-.236.71s-.628.63-.55 1.022c.08.393.08 1.1.08 1.1s-1.1 1.024-1.57 1.338c-.473.314-1.1 1.022-1.1 1.022s-.393.473-.63.63c-.234.157-.627.63-.94 1.1-.315.473-.63.787-.786 1.023-.157.236-.628.786-.864 1.652-.235.865-.864 1.887-.864 1.887l-.157.393c.08 1.338.08 1.574.236 2.046.156.47.313.314.156 1.337-.157 1.022-.157 1.415-.314 1.887s-.628 1.337-.785 1.73c-.157.394.314 1.1.314 1.1s.237 1.024.08 1.26c-.157.236.078.708.078.708s.942.55 1.257.865c.313.315.863.787.942 1.023.08.236.706 1.337.785 1.573.078.236.707 1.1.864 1.337.157.236.942 1.1.942 1.1s1.02.787 1.256 1.102c.236.314.943.472 1.178.707.235.236.785.157 1.1.394.313.236.94-.158 1.255 0 .314.157 1.178-.157 1.414-.315.236-.156.786-.706 1.178-.47.393.235.628 0 .943.078.314.08.786-.314 1.1-.314.314 0 1.1-.315 1.334-.315.236 0 1.02-.474 1.335-.474.313 0 .706-.313 1.098-.156.393.156.236-.315.942-.08.707.236.943 0 1.178.236.236.237.55 0 .786.316.235.314.628.55.706.865.078.314.55.63.55.63l.47.077s.63-.47.786-.156c.157.314.864.236.864.236l.706.786.236.315s.47 1.258.392 1.73c-.078.472-.078 1.494-.314 1.73-.235.236-.392 1.26-.392 1.26s-.314.313.392.942c.707.63 1.178 1.18 1.414 1.494.236.316.864 1.182.942 1.732.08.55.236.865.55 1.573.314.708.706.786.785 1.573.08.787.236.787.158 1.337-.08.55-.314.63-.08 1.022.237.394.55 1.102.472 1.338-.078.235-.235 1.258-.235 1.258l-.157.472-.707 1.338-.47.707c-.157.55-.47 1.1-.392 1.887.078.787-.393.787.235 1.573.628.787.942 1.652 1.335 2.36.392.708.628 1.416.706 1.887.08.472.393.63.55 1.26.156.628.235.942.235 1.336 0 .393-.08 1.416.078 1.652.157.236.236.944.314 1.258.08.315-.236.394.236.944.47.55.785.865 1.1 1.26.313.392.234.235.47.785.235.55.55.866.628 1.337.08.47.157 1.65.393 2.2.234.552.548 1.103.548 1.103s.864.55 1.178.472c.314-.08.942-.786 1.414-.55.47.235.863 0 1.256 0 .392 0 .785-.473 1.178-.473.392 0 .942-.63 1.256-.472.314.157.706-.158 1.1-.55.392-.393.627-.708 1.334-1.337.706-.63.628-.63 1.1-1.023.47-.393.94-1.26 1.49-1.416.55-.157.707-.707.864-1.1.157-.394.236-.63.47-.945.237-.315.08.08.473-.944.393-1.023.865-1.416 1.258-1.652.392-.236.627-.708.863-.787.236-.08.63.236.472-.472-.156-.707 0-1.73-.156-1.966-.158-.237-.394.55-.315-.63.08-1.18.943-2.36.943-2.36s1.178-1.494 1.57-1.73c.394-.236.472-.472 1.022-.787.55-.314 1.727-1.1 1.727-1.494 0-.394.47-1.417.47-1.653s0-.472-.155-1.81c-.158-1.336.156-1.02-.315-2.28-.47-1.258-.55-2.83-.863-3.224-.316-.394-.16-1.417-.16-1.73 0-.315.55-1.102.787-1.416.235-.315 1.256-1.574 1.256-1.574s1.57-1.808 2.12-2.673c.55-.866 1.1-1.652 1.49-1.966.394-.315 1.336-1.024 1.886-1.81.55-.786 1.648-2.28 1.727-2.517.078-.235.706-1.022.706-1.022s.863-1.023 1.02-1.573c.157-.55.942-3.618.785-3.46-.156.157-1.1.314-1.413.392-.314.08.472.393-1.806.237-2.277-.157-3.455.236-3.455.236-.707-.157-1.256.63-1.492-.472-.236-1.1-.393-1.73-.864-2.516-.472-.787-.786-1.1-1.492-2.124-.707-1.022-.63-.55-1.257-1.337-.627-.786-.784-.55-1.177-1.573-.392-1.022-.706-.63-1.177-2.045-.472-1.417-.786-1.574-1.02-2.36-.237-.787-.55-1.023-.708-1.73-.157-.71-1.962-4.327-2.198-4.563-.236-.235-.628-1.494-.55-1.258.08.235 1.178 1.02 1.178 1.02s.628-.235.864-.235c.235 0 1.177.866 1.177 1.18 0 .315 1.65 1.81 2.04 2.91.394 1.1.866 1.888.943 2.202.078.315.864 1.574 1.178 2.046.315.472 1.336 1.415 1.493 1.887.157.472 1.65 2.045 1.65 3.068 0 1.022.705 2.36.784 2.673.08.316 1.49.71 1.49.71l1.886-.472s2.826-1.81 3.14-1.81c.314 0 2.828-1.18 2.828-1.18s1.02-.943 1.727-1.493c.707-.55 1.492-1.573 1.65-2.045.156-.473.47-.55 1.098-1.26.63-.707 1.492-1.415.943-1.887-.55-.47-.864-.314-1.65-1.1-.784-.787-.706-.63-1.255-1.653-.55-1.022.078-2.202-1.1-1.022-1.177 1.18-.706 1.495-1.884 1.73-1.18.237-1.65 1.023-2.2.237-.55-.787-1.1-.315-1.413-1.495-.314-1.18-.55-1.26-.628-1.73-.08-.472 0-.472-.63-1.652-.627-1.18-.156-2.99.236-1.966.393 1.022 1.02 1.18 2.042 1.887 1.02.707 1.492 1.258 2.434 1.337.942.078 1.727 0 1.884.156.157.158.314-.078.707.08.393.157.55-.236.706.392.156.63 1.02.708 1.412 1.1.393.394.393.237 1.414.394 1.02.157 2.435.157 2.435.157l1.492-.08 1.727.158s1.256.708 1.57.708c.314 0 .392.865 1.177 1.337.786.472.943.55 1.414 1.1.473.552.393.788 1.02 1.338.63.55 1.65-.078 1.808-.314.156-.236.94-.63.785 0-.157.63.785.393.55 1.888-.236 1.494-.394 1.1 0 2.123.392 1.023 2.12 4.17 2.198 5.113.08.943.55.63.63 1.495.078.864.548 1.18.548 1.808 0 .63.55.787.628 1.26.08.472.943.078 1.178 0 .236-.08 1.335-1.102 1.335-1.102s.47-.156.392-.943c-.08-.786 0-.63 0-1.81 0-1.18-.47-1.18-.236-2.358.236-1.18.864-1.888 1.02-2.438.158-.552.786-1.496 1.1-1.575.314-.078 2.042-.943 2.434-1.494.393-.55 1.02-1.18 1.65-1.808.627-.63 1.726-1.415 1.962-1.18.236.236.157.158.55.158.392 0 1.1.315 1.648.393.55.08 1.65 1.416 1.885 2.124.236.708.08.55.942 1.573.864 1.022 1.65.393 1.65 1.65 0 1.26 0 1.18.392 1.653.392.472.862-.865 1.333-.707.47.157.55-.158.942 1.1.393 1.26.628 1.26.707 2.518.078 1.258-.078.078-.078 1.1 0 1.023-.08 1.102.078 2.045.157.944.706 1.258.628 1.415 0 0 .47-1.337.314-2.28-.156-.944 0-2.28.393-2.674.392-.393.785-.786 1.1.237.313 1.022.47.236 1.176 1.415.708 1.18 1.335.944 1.414 1.494.078.55.472.63 1.02 1.1.55.474 1.02-.077 1.65-.55.628-.47 2.355-2.2 2.434-2.91.08-.707.786-.55-.47-2.358-1.257-1.81-1.257-2.44-2.592-3.54-1.334-1.1-2.12-1.18-1.098-2.595 1.02-1.416 1.492-2.36 2.12-1.966.628.393 1.726.314 1.726 1.887s-.314 3.304.786 1.416 1.65-2.99 1.334-2.674c-.313.315.707-.63.707-.63s.08-.707 1.414-1.02c1.334-.317 1.727-.473 2.198-.71.47-.236 1.806-1.81 2.042-2.516.235-.708.863-1.967.706-2.517-.157-.55-.942-3.224-1.1-3.146-.156.08-.077.08-1.098-1.022-1.02-1.1-1.728-1.888-1.884-2.36-.156-.472-.55-.55-.078-1.18.47-.63.707-.55.785-1.1.078-.55.706-1.023-.47-.63-1.18.393-.315.158-1.336.08-1.02-.08-3.69.55-2.354-1.102 1.334-1.652 1.726-2.674 1.962-2.674s1.414-1.338 1.492-.08c.08 1.26.55.944.628 1.73.08.787 1.65-.864 1.65-.864s.55.157.94.55c.394.393.394 1.652.394 1.652s-.314-.394.55.236c.864.63 1.805.314 1.805 1.65 0 1.338 0 1.417.55 1.732.55.314 1.1.157 1.57-.236.472-.393 1.257-1.81 1.257-1.81s.078-.55-1.178-1.336c-1.256-.787-2.04-1.337-2.512-1.73-.472-.394-.314-1.573.156-2.046.472-.472.707-.708.55-1.337-.157-.628.236-1.1 1.414-1.02 1.177.078 1.413-.08 1.413-.08s.236.157.236-.315c0-.47 1.49-2.674 1.098-2.674-.39 0 .08-.55-.156-1.414-.235-.866.786-2.202-.078-2.832-.864-.63-1.1-.944-1.65-1.887-.548-.945-.47-1.1-2.51-1.338-2.043-.237-2.985.47-3.456-.158-.47-.63-.707.944-1.02-.944-.314-1.887.47-3.146.47-3.146s1.257-.786 1.57-1.337c.314-.55 1.57-.787 2.592-.393 1.02.393 2.512.314 3.77.55 1.255.236 1.177 1.023 1.805 0 .628-1.022 0-1.494.47-2.044.473-.55 1.022-1.416 1.414-.866.393.55 1.18 1.1 1.808.393.628-.707.863-.786.863-.786l.315.314s.706-.394.706.314.708 1.495.316 2.045c-.394.55-.942.472-.942 1.81 0 1.337 0 1.1.863 2.202.864 1.1 1.413.157 1.57 1.337.158 1.18.314.944 1.178 1.73.864.786.706.786 1.335 1.258.628.472.942.945.942.158 0-.787.08-1.18 0-1.888-.08-.707.63-1.258.157-2.438-.472-1.18-.08-1.1-1.022-1.966-.942-.865-1.57.157-1.884-1.1-.314-1.26 1.492-1.81 1.963-1.968.47-.156 1.177-1.1 1.334-.47.158.628-1.176 2.91 1.1.47 2.277-2.438 1.257-1.415 1.257-1.415s1.178-.157 1.413 0c.235.157.865-.708.628-.63-.235.08-2.51-1.258-2.51-1.258l-1.65-.943s.55-.394.94-.315c.394.08.473-.786.866-.865.392-.08 3.062.55 3.612.865.55.315 2.512.393 2.276.236-.236-.157-1.49-1.1-1.57-1.416-.078-.314-2.827-.944-3.69-.865-.864.078-1.65.314-2.356.078-.707-.236-1.727-.865-2.277-.865s-7.46-1.337-7.773-1.258c-.314.078-.786 1.573-1.02 1.337-.237-.236-.63-.236-1.73-.55-1.098-.315-2.59-.552-4.553-.71-1.963-.156-3.297.16-3.847-.47-.55-.63-1.727-.394-3.062-.473-1.334-.077-2.905 0-3.612 0-.706 0-2.355-.077-2.747-.156-.393-.08-.864-.63-1.335-.708-.47-.08-.392-.235-1.334-.393-.942-.157-.864-1.18-1.178-.315-.314.866-.157.63-.628.944-.47.315-.942.944-1.256.944-.314 0-1.57.08-1.806-.08-.236-.156-.63-.313-1.414-.313-.785 0-.785.078-1.806-.08-1.02-.156-1.806-.078-2.748-.55-.942-.47-.942-.786-1.727-.707-.785.08-.785-.158-1.885-.158-1.098 0-2.433.63-3.14.708-.706.08-2.277-.08-2.826-.314-.55-.236-.707-.787-2.75-.55-2.04.235-3.218.235-2.825-.394.392-.63.863-1.26 1.1-1.337.235-.078.784-.47.39-.628-.39-.158-.784-.393-1.726-.472-.94-.08-.863.314-2.276.157-1.413-.157.785-.55-2.12-.472-2.905.08-3.61.315-3.925.315-.316 0-.708-.63-1.493.314-.786.944-1.885 1.494-3.455 1.573-1.57.08-1.65-.157-3.14.393-1.492.55-2.435-.157-2.12 1.1.313 1.26.706 1.732.706 1.968 0 .235-.707 1.81-1.57.865-.864-.944-2.434-4.64-1.728-2.124.707 2.516 2.277 3.38.786 3.774-1.492.394-1.336-.157-1.57-.314-.236-.158 0-1.26-.08-1.888-.08-.63-.235-1.022-.55-1.337-.313-.315-.235-.787-.863-.944-.628-.156-.078-.47-1.1-.47-1.02 0-1.883-.63-1.648.786.236 1.415.47.472 1.1 1.81.627 1.336 1.805.392.94 1.336-.862.943-3.14.63-3.69.236-.55-.394-.39.157-1.413-.55-1.02-.71-.706-1.26-1.883-.71-1.18.552-1.572 1.574-2.043 1.18-.47-.393-1.57.55-1.963.08-.393-.472-1.963-.472-2.277 0-.314.472-1.256.393-2.59 1.022-1.336.63-.943.08-2.592 1.416-1.65 1.337-2.592 2.438-3.14 1.573-.55-.866-3.534-2.36-2.356-2.597 1.177-.236 1.726-.708 2.354-.157.63.55 1.65.393 1.806 0 .157-.394.864-.787-.08-1.258-.94-.473-1.02-.158-2.51-.708-1.493-.55 0-.394-2.043-.708-2.04-.315-2.905-.472-3.454-.63-.55-.157-1.335 0-2.12-.078-.785-.08-1.335-.236-2.042-.157-.705.078-1.097-.08-2.04.63-.943.707-1.65 1.022-2.277 1.572-.628.55-2.277 1.65-2.748 2.044-.47.393-2.12 1.652-2.277 2.124-.157.472.157.865-.47 1.18-.63.314-1.257.314-1.73.392-.47.08 0-.707-.47.08-.47.786-.314 3.617.078 3.224.393-.394.157-1.652 1.885-.472s2.828 1.022 2.75 2.123c-.08 1.1 1.177 1.023 1.334 1.26.157.235.942-.316.942-.316s1.727-1.102 1.727-1.652c0-.55 1.1-1.81 1.1-1.81s-.786-.392-.786-1.18c0-.785.236-1.022.393-1.808.157-.786-.864 0 1.492-1.495 2.355-1.494 2.512-.47 2.512-.47s.313.313-.08.785c-.39.472-1.098 1.73-1.255 1.888-.158.157.706 1.416 1.098 1.416.392 0 1.178-.315 1.65-.237.47.08 1.255-.235 1.49-.078.236.156.786.628.393 1.022-.39.393-1.255.864-1.883.708-.63-.157-1.57-1.26-1.02.314.55 1.573-.08 1.966-.55 1.888-.47-.08-1.492-.865-1.335.314.157 1.18-1.02 1.966-1.257 1.966-.235 0-.706-.078-.706-.078s-.708-.08-1.1-.08c-.393 0-1.178.394-1.414.71-.235.313-.55.078-.942.078-.392 0 0-.472-.785-.63-.786-.157-1.257-.314-1.728 0-.47.315-1.178.472-1.492.236-.314-.236.157-.787-.47-.47-.63.313-1.1 1.178-1.336 1.257-.235.078.707 0-.235.078-.944.08-1.336.316-1.807.473-.472.157.157 1.1-.707 1.415-.864.316-.235-.392-1.1.316-.863.708-1.02 1.337-1.334 1.415-.314.08-.235.237-.942.316-.707.08-.628.157-1.02.236-.394.078.078.236-.786.078-.864-.157-1.492.158-1.335.473.156.314 3.06 1.18.863 1.1-2.2-.078-1.492.315-1.02.63.47.314.705.63.94.708.237.08.63 1.023.63 1.023s.627-.08.235.472c-.392.55.157.708-.236 1.416-.392.71-.392.237-.706.394-.314.157-.785.708-1.65.236-.863-.472-1.49-.708-2.512-.786-1.02-.08-.314-.236-1.02.314-.707.55-.864 1.18-.785 1.887.077.708.156 1.652-.08 2.124-.236.47-.236.943-.08 1.65.158.71.63 1.024.63 1.024s1.1.157 1.334.236c.236.078.707-.157 1.335.235.627.394 1.255.55 1.648.08.392-.472 1.963-1.023 2.434-1.495.47-.472.785-.63.55-1.1-.236-.473.47-1.653.863-1.89.393-.234 1.257-.47 1.257-.47l.942-1.416s.785-.866 1.177-.787c.394.08 2.592.866 2.436-.157-.157-1.023.156-1.337.392-.944.235.393.864.236.864.236s.314-.157.55.08c.235.234.548 1.258 1.02 1.493.47.236.863.472 1.178.63.314.157.628 0 1.256.55s1.256.865 1.335 1.1c.08.237.63.787.63.787s.55.158.392.473c-.157.314-.942 1.258-1.335 1.415-.393.157-1.413-.158-1.02.157.39.315.94.708 1.177.472.236-.237 1.727-1.81 1.727-1.81s-.077.08 0-.393c.08-.472 0-1.022.394-.787.392.237.628.55.785.237.156-.315.313-.158-.08-.394-.393-.236-1.334-1.573-1.806-1.65-.47-.08-1.65-.867-1.65-.867s-.234-.236-.784-.865c-.55-.628-.706-.47-.864-1.02-.157-.552-.628-1.26.236-1.103.864.158 1.413.708 2.198 1.18.785.472.63.63 1.335 1.1.707.473.786.945 1.335.867.55-.08 1.178.314 1.178 1.022s.156 1.494.313 1.652c.16.158.63.472.787.787.157.314.47 1.1.706 1.415.236.315.47.55.707.944.235.393.314-.08.55.08.235.156.55.077.55-.237 0-.315.077-.866.077-.866s1.1-.313.786-.47c-.314-.158-1.257-1.102-1.178-1.416.078-.315 0-.944.392-.865.393.077.786.785 1.65.156.863-.63 1.884-.944 1.57 0-.314.944.08 1.1 0 2.123-.08 1.022.314.707.864 1.258.55.55.943.63 1.335.787.393.157 1.02.08 1.65.157.628.08 1.02-.236 1.57-.078.55.157 1.805-.08 2.04.078.237.157 1.18-.314 1.257.236.08.55.393-.08.158 1.18-.236 1.258-.55 2.123-.55 2.123-.864 1.653-1.178 2.046-1.57 2.125-.393.08-.628.315-1.335.236-.707-.078-1.57 0-2.59-.235-1.022-.236-2.906.236-3.69-.236-.786-.473-1.886-.08-2.357-.63-.47-.55-1.256-.472-1.57-.787-.314-.314-.47-1.18-.47.08 0 1.258-.708 1.336-.865 1.966-.157.628.235.313-.63.234-.862-.08-1.098.394-2.354-.55-1.257-.944-1.885-.944-2.513-1.337-.63-.394-1.257.707-1.885-.55-.628-1.26-1.492-.237-1.57-1.26-.078-1.022 0-.943.078-1.572.08-.63.943-1.18.55-1.416-.393-.236-.08-.63-.628-.394-.55.236-1.335.315-1.963.55-.63.237 1.412 0-1.65.237-3.062.236-3.926.55-3.926.55s-.235-.157-.628.158-.942.787-1.492.55c-.55-.235-.863-.156-1.334-.077-.472.078-.785-.394-1.335 0-.55.392-1.178.55-1.414.392-.235-.16-.627-.788-.627-.788zM447.31 97.66c-.236.865-1.1 2.123-1.1 2.123l-1.57.786s-.55.47-.864.55c-.314.078-1.1.472-1.1.472s-.705-.158-.47.55c.235.708.314 1.573.235 1.81-.077.235-.077.707-.077 1.337 0 .628-.235 1.414-.628 1.57-.392.16-.785.316-.707.867.08.55.08 2.202.08 2.202l1.02 1.572s.314-.236.942-.236c.628 0 1.257-.55 1.257-.55s.707.157.627-.708c-.078-.865.315-1.888.236-2.124-.078-.236.707-1.258.707-1.494s.785-1.337.785-1.73.55-1.023.628-1.494c.08-.473.157-1.573.314-1.888.157-.314.236-.63.236-.944v-.943l-.55-1.73zm61.478 10.617c-.236.314-.393 3.697-.55 4.09-.157.393-.47 2.438-.313 2.91.156.472.392 2.202.235 2.753-.157.55.08 2.28-.315 2.202-.392-.08-.548.08-.548.315 0 .236.548.707.548.707s.943 0 1.336-.078c.393-.08 1.178-.472 1.807-.472.628 0 1.02-.473 1.57-.473s1.728-.39 2.04-.234c.315.156.786-.944 1.336-.708s1.728-.55 2.277-.55c.55 0 .786-.866 1.414-.708.628.157 1.806-.315 2.355-.08.548.237 1.413-.786 1.805 0 .393.787 1.57 1.102 1.57 1.495s-.08 1.26-.08 1.26l.944-.08s1.49-.944 1.726-.944.785-.785.785-.392-.47 1.26-.627 1.65c-.157.395.157.867.157.867s.786.393.47 1.1c-.313.71.08.552 0 1.102-.077.55 0 .314.315.63.314.314.864.865 1.335.786.472-.08.628-.55 1.02-.315.393.236 1.178.08 1.413.394.237.314-1.49 1.1 1.493-.236 2.983-1.338 3.297-1.652 3.69-2.124.393-.472.864-.944 1.177-1.26.315-.313.08-.235 1.02-.943.943-.708.943-.394 1.808-1.73.864-1.338 1.492-1.81 1.65-2.046.157-.236.47-.314.55-1.26.078-.942.705-1.808.705-2.122 0-.314.236-.786.157-1.337-.078-.55.315-1.337-.157-2.123-.47-.787.236-1.1-.47-1.416-.708-.315-1.18-.157-1.336-.708-.158-.55-.786-.472-1.022-1.966-.235-1.494-1.177-1.652-1.177-1.652s-.94-.393-.706-.55c.236-.158.314-1.26.236-1.574-.08-.314-.08-1.022-.314-1.494-.235-.472-.393-1.1-.628-1.652-.235-.55-.628-.708-.785-1.337-.158-.63-.393-.865-.47-1.022-.08-.156-.238-.943-.394-.078-.158.865-.473 2.516-.473 2.516s-.628 1.338-.863 1.73c-.236.394-.47 1.417-.864 1.338-.392-.08-.63.394-.942.314-.314-.08-.785.08-1.02-.157-.236-.236-.864-.865-1.178-.944-.314-.08-.55-.708-.786-.708s-.628-.55-.55-.866c.08-.314.158-1.022.236-1.337.078-.315.55-1.023.55-1.023s0-.472-.393-.472c-.392 0-.47 0-1.335-.08-.863-.078-1.098-.156-1.413-.156-.314 0 .314-.16-.55.077-.864.237-1.257.866-1.806 1.417-.55.55-.08.392-.55.55-.47.158-.392-.393-.706.472-.315.865.157 1.1-.08 1.258-.235.158-1.883-.55-1.883-.55s.392-.08.078-.472c-.314-.394-.628-.944-1.098-.708-.472.236-.865.394-1.178.787-.315.394-.315.708-.55 1.023-.236.314-.864.314-.942.63-.08.314-.08 1.1-.314 1.18-.234.078-.313-.315-.548-.394-.236-.08-.158-.71-.314-.315-.157.393-.314.314-.55.943-.236.63-.314 1.18-.55 1.26-.235.078 0 .156-.707.55-.705.393-.862.393-1.882.865s-.785.472-1.492.55c-.706.08-.864.315-1.335.394-.47.078-.784.156-1.255.63-.47.47-.864.628-1.178.707-.314.078-.63.393-.63.393zm4.632-31.067c-.314.472-1.335 1.888-1.727 1.967-.393.078-.786.472-1.1.393-.313-.08-1.02 0-1.256 1.022-.235 1.023-.628 1.573-.864 1.494-.235-.078.392 1.494-.942.866-1.333-.63-.862.55-1.02.865-.157.315.236 1.18.314 1.495.08.314.314.865.63 1.336.313.472.548 1.023 1.098.866.55-.158 2.276 0 2.276 0s.63.236 1.02.236c.394 0 .473-.157.708-.157s.706-.787.628-.866c-.08-.08-.314-.314.157-.786.472-.472 1.022-.628 1.1-1.18.08-.55-.157-.55.08-.865.234-.314.784-.235.627-.55-.157-.315.157-.236-.157-.866s-.707-.866-.393-1.652c.314-.787.63-.944.55-1.416-.08-.472.393-.63-.157-1.18-.55-.55-.785-.708-1.178-.866l-.392-.156zm15.39 7.865c.314-.078 1.412-.865 1.49.55.08 1.417.157 1.023.63 1.81.47.786.784 1.023 1.333.63.55-.394 1.178-.394 1.335-1.102.157-.708.157-.708.628-.708.472 0 .628-.078.865.237.236.314.392 0 1.414.55 1.02.55 1.884.393 2.513.944.628.55.942.472 1.805.786.864.315.47-.157 1.256.708s.472 1.1.864 1.494c.393.394.707-.314.55.63-.157.943-1.256 0 .393 1.336 1.648 1.338 1.884 1.574 2.433 1.967.55.393.943.865.472.865-.472 0-1.963 0-2.12-.236-.157-.236-.863-.394-1.335-.944-.47-.55-1.49-.944-1.726-1.415-.238-.473-.552-.63-.944-.63-.392 0-.785.472-1.335 1.023-.55.55-.312-.314-1.02-.08-.707.237-1.49-.078-1.884-.392-.393-.315-.314-.787-.942-.55-.628.235-1.02.078-.785-.394.235-.472.077-1.1.077-1.1s.237-.788-.313-.945c-.55-.158-.55-.708-1.1-.866-.55-.157-1.412-.55-1.412-.55s-.08 0-.315-.08c-.235-.078-.235-.078-.863-.235-.628-.16-1.1-.002-1.414-.395-.314-.393-.157-.943-.157-.943s1.256.157 0-.787l-1.256-.943s.156-.08.078-.237c-.08-.158.784 0 .784 0zm-35.333-6.528s.392.394 1.02.315c.63-.08 1.1 1.258 1.493 1.73.392.472.628.708 1.49 1.258.865.55.786-.472 1.964 1.18s.628.63 1.178 1.652c.55 1.023.864 1.573 1.177 1.81.313.235.55.864.628 1.1.078.236.628.944.628 1.18s.157.865-.314 1.416c-.47.55-.864.63-.864.63s-.942-.473-1.256-.945c-.314-.472-.707-.865-1.257-1.81-.55-.943-1.177-1.965-1.49-2.437-.315-.472-.787-.944-1.022-1.416s-.864-1.888-1.178-2.045c-.314-.158-.392-.63-.942-1.18-.55-.55-.47-1.022-.707-1.337-.235-.314-.784-1.023-.784-1.023l.235-.078zm-152.714 61.348c-.55-.314-1.727-.865-2.12-1.18-.392-.314-1.57-2.045-1.57-2.045l-.864-1.652s-1.02-1.258-.785-1.73.706-.786.706-1.022.472-.866.08-1.1c-.393-.237-.393-.316-.63-1.024-.234-.707-.234-1.337-.548-1.494-.315-.157-.55-1.18-.864-1.258-.314-.08-.628-.63-.628-.63l-.472-6.37s-.157-2.91-.313-3.54c-.158-.63.235-1.966-.158-3.146-.392-1.18.08-2.595-.157-3.067-.235-.472.157-1.81-.078-3.067-.236-1.26.942-2.832 0-3.303-.942-.473-.236-1.18-1.02-1.18-.786 0-1.336-.394-2.042-.944-.707-.55-2.042-1.573-2.434-1.967-.393-.393-1.65-1.415-2.042-1.73-.392-.314-.785-1.652-1.1-2.045-.313-.392-.47-1.572-.94-2.28-.472-.707-1.1-1.887-1.258-2.123-.157-.236-1.884-2.28-1.884-2.28l.157-1.26s1.177-.707 1.02-.943c-.157-.236.078-.472-.472-.944-.55-.472-.47-1.337 0-1.73.472-.394 1.178-1.652 1.178-1.652l1.178-1.966s.942-1.023.942-1.73c0-.71 1.335-1.18.55-1.81-.786-.63-.393-1.18-.63-1.652-.234-.47-.077-.786.63-1.258.706-.472 1.962-2.202 1.962-2.202s.943-.236 1.178-.236c.236 0 .628-2.518 1.335-.866.708 1.652.943.787.708 1.966-.236 1.18.314.944.628.63.314-.315-.158.236.47-1.18.63-1.416.393-1.888.786-1.494.392.393.55.472 1.256.708s.942.157 1.177.63c.236.47.158-.16 1.492.078 1.335.236 3.22-.472 2.984.314-.235.786-.706-.08.393.786 1.1.866 1.257 1.023 1.885 1.18.628.158 1.177.08 2.12 1.023.942.942 1.178 1.02 1.413 1.493.236.472.63.157 1.022.63.392.47.942.47 1.49.47.55 0 0-.47.865.16.864.628 1.492.706 1.884 1.965.394 1.26 1.18 1.18.55 2.438-.627 1.26-1.883 1.81-1.334 1.73.55-.078 1.57-.55 1.885-.47.315.077.472-.237.943 0 .47.234.55-.316.47.234-.078.55-.078 0-.078.55 0 .552-.157-.55.785-.313.943.236.393-.473 1.492.55 1.1 1.023 1.1.708 1.492 1.26.392.55.785-.315 1.02-.08.236.236.943.078 1.65.236.706.157.235-.472 1.335.236 1.097.706 2.197.47 2.432 1.1.236.63.864.393 1.178.786.314.394.47-.157.785.394.314.55 1.257.393 1.1.943-.158.55.235.236.078 1.022-.157.788-.707 2.046-1.178 2.36-.47.315-.47.708-.785 1.1-.314.395-.235-.392-.628.71-.393 1.1-.314 1.258-.628 2.28-.314 1.022-.08 0-.314 1.022-.235 1.023-.08 1.652-.314 2.832-.235 1.18-.157 1.18-.314 2.044-.157.865.393-.393-.314 1.416-.707 1.81-.785 1.73-1.02 2.517-.236.787.078.157-.786.63-.863.47-.392.313-1.413.628-1.022.315-2.278.63-2.67.708-.393.08-1.963.55-1.492 1.494.47.944.47 1.1 0 2.282-.47 1.178-1.178 1.572-1.178 2.122 0 .55-.314 1.1-.392 1.494-.08.393.706-.394-.236.786-.942 1.18-1.02.866-1.335 1.574-.314.707 0 .156-.314.707-.314.55-1.1.786-1.1.786s.08.393-.235.236c-.314-.157-.235.078-1.413-.237s-1.335-1.1-1.492-.55c-.157.55.08.865.786 1.415.705.55 1.883.708 1.57 1.26-.315.55-.315.55-.55.864-.237.314.313.077-.237.314-.55.235-.863 1.258-1.1 1.258-.234 0-.392.393-.705.236-.314-.157-1.1-.708-1.257-.393-.156.314-.47-.394-.39.707.077 1.1.234 1.73-.158 1.967-.393.235-1.335 0-1.335 0l-.157-.395-.55.158s-.235.944.157 1.1c.393.158.314.315.707.787.392.472.157 1.337.157 1.337s0 .236-.392.63c-.392.393-.55.708-.628.943-.08.236-.55 1.26.157 1.18.707-.08 1.257-.472 1.257.787 0 1.258.314.944-.08 1.81-.392.864-.706.942-.784 1.73-.078.785.08.864.236 1.336.157.472.55.236.157.472-.392.236-1.57 0-1.57 0zm-20.257-64.022l-.55-.786s-.235-.473-.628-.55c-.392-.08-1.256-1.102-1.256-1.102s-.393-.314-.393-.865c0-.55-.315-1.415-.08-2.36.236-.943.315-2.123.236-2.438-.078-.314.393-.393-.157-.707-.55-.315-1.65-.394-2.356-.394-.707 0-1.57.238-1.728.316-.157.08.864-2.36 1.02-2.753.158-.393.865-2.123.865-2.36 0-.235.236-.314-.235-.628-.47-.315-1.256-.472-1.727-.236-.47.235-.393-.316-.785.628s-.785 1.966-1.257 2.124c-.47.157-1.413.63-1.413.63s-1.177-.08-1.57-.158c-.393-.08-2.04-.944-2.355-1.494-.314-.55-.47-1.73-.47-2.28 0-.552.862-2.203.784-2.597-.08-.393.864-1.966.785-2.202-.08-.235.157-1.022.392-1.336.235-.315 1.413-.708 1.727-1.023.314-.313.863-.706 1.413-.864.55-.157 1.02-.314 1.413-.314s1.413-.865 1.57 0c.158.865.864.55 1.257.63.392.078.47.47 1.1-.552.627-1.022 1.255-1.337 1.255-1.1 0 .235 1.02-.08 1.178.157.157.235.47-.158 1.02.314.55.473 1.335.552 1.257.787-.08.236.314.236.314.472 0 .235.314-.55.314.864 0 1.416.392 2.28.392 2.28s.55 1.18.785.945c.236-.237.707-.866.707-.866s.785-.472.235-2.124c-.55-1.65-.157-2.123-.314-2.674-.157-.55-.157-.865.785-1.573.942-.708 3.22-2.28 3.77-2.595.548-.315 1.805-1.18 1.805-1.18s.47-.236.55-.865c.078-.63 1.57-1.73 1.648-2.045.08-.314 1.1-1.1 1.1-1.1s1.1-.63 1.02-1.023c-.077-.393 1.415-1.1 1.65-1.1.236 0 1.492.392 1.492-.316 0-.71 0-.866.785-1.495.785-.63 1.806-1.573 2.2-1.573.39 0 1.726-.708 2.275-.865.55-.158 2.278-.944.707 0-1.57.943-.55.393-.865 1.18-.313.786-.55 1.808.943.628 1.492-1.18 1.413-1.415 1.963-1.494.55-.077.158.237 1.335-.156 1.178-.393 1.257-.55 1.257-.55s.55-.473.235-.708c-.314-.237.314-.55-.864-.08-1.177.473-1.1.55-1.884.315-.786-.235-1.964-.156-1.1-.943.864-.786 1.963-1.022 1.256-1.337-.706-.314-2.512.08-2.748.157-.236.08-.785-.078-1.256 0-.47.08-.314-.628 0-.786.314-.156 1.335-.63 2.59-.943 1.257-.315 4.32-.393 5.026-.393.706 0 1.648.157 2.198-.236s1.65-1.022 1.806-1.337c.157-.314.785-.785.785-.785s.707-.708.314-1.023c-.39-.314-.784-1.022-1.098-.865-.314.157-.078 1.1-.706.078-.63-1.022-.55-1.18-.864-1.415-.314-.236-.628-.08-.392-1.18.235-1.1.157-1.573.157-1.573s.235-.943 0-1.022c-.236-.08-.393-.314-.785-.08-.393.237-2.59 1.338-3.062 1.574-.472.235-1.1-.945-.864-1.495.235-.55.078-.236-.236-1.022-.314-.787-1.57-.945-2.04-.945-.473 0-1.57-.708-1.886-.235-.314.47-1.962 1.965-2.277 2.123-.314.158-.785-1.337-1.02 1.1-.236 2.44.863 3.147-.393 3.305-1.256.158-2.355.865-2.355.865s-1.022.08-1.022.708c0 .63-.392 2.124-.864 2.28-.47.16-1.65-.077-2.04-.55-.394-.47.077-2.2.077-2.2l.708-.71s-5.025-.785-4.947-1.1c.08-.315-1.49-.865-1.647-1.337-.157-.472-.236-1.495-.08-1.888.158-.393 2.278-2.28 3.377-2.674 1.1-.393 2.984-1.258 3.534-1.416.55-.157 1.49-.078 1.806-.47.313-.395.392-1.102.392-1.102s-.157-1.102.157-.945c.313.16.863.395.94.63.08.237.08.787.63.158.55-.63 1.256-.866 1.884-1.18.628-.315 1.57-.236 2.12-.55.55-.315 1.492-.63 1.57-1.416.08-.786-.235-.55-.628-.63-.393-.078.157.08-1.178.71-1.335.628-.942.156-1.884.628s-1.02.55-1.1.157c-.078-.393.158-1.022.158-1.022s.078-.08-.47-.236c-.55-.158-.55.078-.63-.63-.078-.708.393-1.73-.392-1.416-.785.315-1.492-.236-2.04 1.337-.55 1.574-2.436 3.226-2.907 2.832-.47-.393-.55-.472-.942-.472-.392 0-.94-.47-1.648-.55-.707-.08-2.827-.08-3.376 0-.55.08-1.178-.315-1.65.158-.47.47-1.177 1.1-1.177 1.337 0 .236-.707-.866-.943-.787-.235.08-.864-.314-1.57-.314-.707 0-1.178-.394-1.413-.394-.235 0 .235-.63 0-.708-.235-.078-5.34-.235-5.34-.235s-1.648-.63-2.276-.55c-.628.078-2.355.156-3.69.392-1.336.235-3.3 1.022-3.926 1.1-.63.08-2.042.08-2.277-.314-.236-.393.078-.315-.236-.393-.315-.08-.08-.236-.786-.787-.707-.55.314-1.022-1.1-1.022-1.412 0-2.276-.08-3.532 0-1.257.08-3.847.708-4.16.63-.315-.08-2.828.392-3.22.157-.393-.236-2.356.865-2.748.787-.393-.08-1.885.08-2.277.315-.393.236-2.277.707-1.65 1.1.63.394.55.787.63 1.023.078.236-.63.786-.63.786s-.157 0-1.02-.313c-.864-.315-1.806-.472-2.2-.236-.39.237-1.098.71-.94 1.024.157.314 1.255 1.022 1.413.786.157-.236.55-.708 1.02-.63.472.08 1.178-.313.55.473-.628.786-1.178 1.18-1.57 1.26-.393.077-1.335.156-2.2.235-.863.08-.784-.315-1.57.472-.784.786-1.098.314-1.255 1.18-.157.864-.314.864 0 1.1.314.236-.628.315.078.55.707.237 1.57.473 1.492.71-.08.235.785-.316.314.313-.472.63-.786 1.18.156.55.942-.628 1.49-.157 2.277-.55.785-.393 1.57-.472 2.04-.786.472-.315.708-.786 1.414-1.023.707-.236.236.08.314.472.08.393 0 .472.473.157.47-.315.47-.078 1.1-.472.627-.392 1.333-.785 1.805-.55.47.237.628.237.942.237.314 0-.393-.08.314 0 .707.078-.314-.236 2.04.314 2.357.552 2.985.158 3.142 1.024.157.865.47-.08.863.47.392.552.628.08.863 1.024.236.944 0 3.54-.157 3.854-.157.314-.235.314-.157 1.022.078.708 1.02 4.09.706 4.326-.314.235-1.02.314-1.02.314l-.393 1.416s-.628 1.18-1.178 1.81c-.55.628-1.256 1.415-1.65 1.965-.39.55-.705 1.495-1.255 2.045-.55.55-1.02.314-.864 1.494.157 1.18 0 2.438.157 3.304.158.865.55 2.045.864 2.517.314.47.55.47 1.1.865.55.393 1.256.865 1.177 1.258-.08.393.078 2.832.078 2.832s.472.786.55 1.65c.08.867.628 1.732.628 1.732l.47 1.023s.237.08.55.707c.315.63.315.63.394.944.078.315.078.236.078.315 0 .08-.078-1.336-.235-1.73-.157-.393-.157-.865-.314-1.337s.078-1.023-.393-1.73c-.47-.708-.47-.787-.706-1.495-.236-.707-.55-1.494-.236-1.652.314-.156.55-1.18 1.178 0 .628 1.18.707.866.785 1.81.08.944.315 1.26.55 1.65.236.394.786 1.732 1.1 2.282.314.55 0-.314.706.787.707 1.1.786 1.337 1.178 2.202.393.865.628.865.864 1.494.235.63.078.473-.08 1.18-.156.708.158 1.495.158 1.495s1.1.393 1.178.63c.078.235 1.177.628 1.335.943.156.315 1.176.708 1.176.708s.864.55 1.178.707c.314.158 1.257.315 1.257.315s.628.158.864.236c.235.08.942.08.942.08s.628-.473.864-.316c.235.157.785-.315 1.02.08.236.392.707.392.943.707.235.314.47.314.863.707.393.394.786.315 1.178.63.392.314.706.314 1.178.314.47 0 .47 0 .785.08.313.078.47-.237.785.157.314.393.55.628.785 1.022.235.393.785.393.863 1.022.08.63.236.55.236 1.1 0 .552.314.788.55.945.235.157 1.098.943 1.098.943l1.178.237.942.708 1.022.313zM345.67 2.806l4.71-.59s1.65 0 2.475-.59c.824-.59 0-.59 2.473-1.06 2.473-.473 1.767-.71 3.062-.473 1.295.236 1.65.236 3.062.472 1.413.235 1.767-.118 3.062.235 1.296.354 1.884.236 2.944.236h3.298c1.65 0 3.18-.943 3.77-.354.588.59.94.354 2.943.59 2 .236 2.826-.236 3.65 0 .825.236 2.238-.118 3.887 0 1.648.118 2.473-.118 3.062-.118.588 0 1.176-.826 2-.118.826.708 1.885-.236 2.003.708.118.944 1.65.236.118.944-1.53.708-1.295.59-2.355 1.534-1.06.944.707 1.77-1.53 2.595-2.24.826-2.592-.472-3.18.944-.59 1.417 0 1.77-.118 2.48-.118.706-.354.824-1.06 1.414-.707.59-.707 0-2.356.354-1.648.354-2.825.708-3.532.708-.707 0-2.238.59-2.71.826-.47.236.826.59-1.648 1.298-2.473.708-3.062.59-3.77 1.533-.705.944-.47 1.063-.94 1.652-.472.59-1.885 2.95-2.592 2.36-.706-.59-1.06-.472-1.65-1.062-.588-.59-.94-1.415-1.294-1.887-.354-.472-.472-1.652-.59-2.36-.117-.708-1.177-2.36 0-2.124 1.178.236 1.885.118 2.238-.117.354-.237.707-1.062.707-1.062s-.118-1.298-.472-2.006c-.353-.708-.118-1.298-.706-2.005-.59-.708-.59-.59-1.414-1.298-.824-.708-.59-1.062-1.884-1.18-1.296-.118-1.65-.472-2.12-.354-.47.118-2.002-.826-.354-.944 1.65-.118 3.18.118 3.18.118s2.12-.944 1.414-1.062c-.707-.118 1.06-1.18-.59-.826-1.648.354-3.532.826-4.004.944-.47.118-1.648.236-2.826.59-1.177.354-2.59.236-3.298 1.062-.706.826 0 .944-.706.826-.707-.118.588-.826-1.06 0-1.65.826-1.178.708-2.002.472-.825-.236-1.414-.59-1.414-.59s1.06-.118-.47-.236-1.53-.118-2.12-.826c-.59-.708-.236-.708.117-.944.355-.236.59-.708.59-.708zm-2.59 5.31c-.59.59-2.003 1.415-1.65 1.77.354.353.59 1.65 1.296 1.296.707-.353-.118-1.533 2.59-.59 2.71.944 2.474-.117 3.063 1.298.588 1.416 1.06 2.478.705 2.832-.353.354-.47.708-1.648 1.062-1.178.354-1.65.826-.825 1.415.825.59 2.356 1.18 3.062 1.533.707.354 2.827.472 1.767-.707-1.06-1.18.236-1.534.236-1.534s2.003 1.534 1.296-.236c-.707-1.77-1.178-1.77-.707-1.77.472 0 1.414.59 1.414.59l.47-.944-.47-1.533-1.532-1.535s1.295-1.18-.472-1.415c-1.766-.236-1.65-.236-2.59-.827-.943-.59-1.06-.825-2.827-.47-1.768.353-2.357.59-2.357.59l-.824-.828zM316.815 9.53c.707-.707 2.59-2.36 3.298-1.887.706.472 1.766-.354 2.59.354.825.708 1.767 1.534 2.474 1.77.707.235 1.53-.59 2.238-.236.706.355 3.18-1.77 2.708-.117-.47 1.652.59 2.123-.706 2.242-1.296.118-2.71 1.06-3.298.708-.59-.354-1.06-.708-2.003-.236-.942.47-.47.47-1.53.236-1.06-.236-1.296.235-1.53-.12-.237-.352-.943-.234-.826-1.296.12-1.062.472-.944-.235-.944-.706 0-1.295.118-1.766-.236-.472-.354-1.414-.236-1.414-.236z",
    stroke: "#8BC34A",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  })));
};

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
init_react();

// node_modules/@nextui-org/react/esm/index.js
init_react();

// node_modules/@nextui-org/react/esm/theme/stitches.config.js
init_react();

// node_modules/@stitches/react/dist/index.mjs
init_react();
var import_react2 = __toESM(require_react(), 1);
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e6, t13) => typeof t13 == "function" ? { "()": Function.prototype.toString.call(t13) } : t13;
var o = () => {
  const e6 = /* @__PURE__ */ Object.create(null);
  return (t13, r9, ...n2) => {
    const o11 = ((e7) => JSON.stringify(e7, i))(t13);
    return o11 in e6 ? e6[o11] : e6[o11] = r9(t13, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e6, t13) => Object.defineProperties(e6, Object.getOwnPropertyDescriptors(t13));
var a = (e6) => {
  for (const t13 in e6)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e6) => e6.includes("-") ? e6 : e6.replace(/[A-Z]/g, (e7) => "-" + e7.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e6) => (t13) => e6(...typeof t13 == "string" ? String(t13).split(g) : [t13]);
var u = { appearance: (e6) => ({ WebkitAppearance: e6, appearance: e6 }), backfaceVisibility: (e6) => ({ WebkitBackfaceVisibility: e6, backfaceVisibility: e6 }), backdropFilter: (e6) => ({ WebkitBackdropFilter: e6, backdropFilter: e6 }), backgroundClip: (e6) => ({ WebkitBackgroundClip: e6, backgroundClip: e6 }), boxDecorationBreak: (e6) => ({ WebkitBoxDecorationBreak: e6, boxDecorationBreak: e6 }), clipPath: (e6) => ({ WebkitClipPath: e6, clipPath: e6 }), content: (e6) => ({ content: e6.includes('"') || e6.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e6) ? e6 : `"${e6}"` }), hyphens: (e6) => ({ WebkitHyphens: e6, hyphens: e6 }), maskImage: (e6) => ({ WebkitMaskImage: e6, maskImage: e6 }), maskSize: (e6) => ({ WebkitMaskSize: e6, maskSize: e6 }), tabSize: (e6) => ({ MozTabSize: e6, tabSize: e6 }), textSizeAdjust: (e6) => ({ WebkitTextSizeAdjust: e6, textSizeAdjust: e6 }), userSelect: (e6) => ({ WebkitUserSelect: e6, userSelect: e6 }), marginBlock: p((e6, t13) => ({ marginBlockStart: e6, marginBlockEnd: t13 || e6 })), marginInline: p((e6, t13) => ({ marginInlineStart: e6, marginInlineEnd: t13 || e6 })), maxSize: p((e6, t13) => ({ maxBlockSize: e6, maxInlineSize: t13 || e6 })), minSize: p((e6, t13) => ({ minBlockSize: e6, minInlineSize: t13 || e6 })), paddingBlock: p((e6, t13) => ({ paddingBlockStart: e6, paddingBlockEnd: t13 || e6 })), paddingInline: p((e6, t13) => ({ paddingInlineStart: e6, paddingInlineEnd: t13 || e6 })) };
var h = /([\d.]+)([^]*)/;
var f = (e6, t13) => e6.length ? e6.reduce((e7, r9) => (e7.push(...t13.map((e8) => e8.includes("&") ? e8.replace(/&/g, /[ +>|~]/.test(r9) && /&.*&/.test(e8) ? `:is(${r9})` : r9) : r9 + " " + e8)), e7), []) : t13;
var m = (e6, t13) => e6 in b && typeof t13 == "string" ? t13.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t14, r9, n2, i6) => r9 + (n2 === "stretch" ? `-moz-available${i6};${d(e6)}:${r9}-webkit-fill-available` : `-moz-fit-content${i6};${d(e6)}:${r9}fit-content`) + i6) : String(t13);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e6) => e6 ? e6 + "-" : "";
var k = (e6, t13, r9) => e6.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e7, n2, i6, o11, l6) => o11 == "$" == !!i6 ? e7 : (n2 || o11 == "--" ? "calc(" : "") + "var(--" + (o11 === "$" ? S(t13) + (l6.includes("$") ? "" : S(r9)) + l6.replace(/\$/g, "-") : l6) + ")" + (n2 || o11 == "--" ? "*" + (n2 || "") + (i6 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e6, t13, r9, n2, i6) => {
  let o11, l6, s7;
  const a6 = (e7, t14, r10) => {
    let c5, g4;
    const p3 = (e8) => {
      for (c5 in e8) {
        const R4 = c5.charCodeAt(0) === 64, z2 = R4 && Array.isArray(e8[c5]) ? e8[c5] : [e8[c5]];
        for (g4 of z2) {
          const e9 = /[A-Z]/.test($2 = c5) ? $2 : $2.replace(/-[^]/g, (e10) => e10[1].toUpperCase()), z3 = typeof g4 == "object" && g4 && g4.toString === B && (!n2.utils[e9] || !t14.length);
          if (e9 in n2.utils && !z3) {
            const t15 = n2.utils[e9];
            if (t15 !== l6) {
              l6 = t15, p3(t15(g4)), l6 = null;
              continue;
            }
          } else if (e9 in u) {
            const t15 = u[e9];
            if (t15 !== s7) {
              s7 = t15, p3(t15(g4)), s7 = null;
              continue;
            }
          }
          if (R4 && (b2 = c5.slice(1) in n2.media ? "@media " + n2.media[c5.slice(1)] : c5, c5 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e10, t15, r11, n3, i7, o12) => {
            const l7 = h.test(t15), s8 = 0.0625 * (l7 ? -1 : 1), [a7, c6] = l7 ? [n3, t15] : [t15, n3];
            return "(" + (r11[0] === "=" ? "" : r11[0] === ">" === l7 ? "max-" : "min-") + a7 + ":" + (r11[0] !== "=" && r11.length === 1 ? c6.replace(h, (e11, t16, n4) => Number(t16) + s8 * (r11 === ">" ? 1 : -1) + n4) : c6) + (i7 ? ") and (" + (i7[0] === ">" ? "min-" : "max-") + a7 + ":" + (i7.length === 1 ? o12.replace(h, (e11, t16, r12) => Number(t16) + s8 * (i7 === ">" ? -1 : 1) + r12) : o12) : "") + ")";
          })), z3) {
            const e10 = R4 ? r10.concat(c5) : [...r10], n3 = R4 ? [...t14] : f(t14, c5.split(y));
            o11 !== void 0 && i6(x(...o11)), o11 = void 0, a6(g4, n3, e10);
          } else
            o11 === void 0 && (o11 = [[], t14, r10]), c5 = R4 || c5.charCodeAt(0) !== 36 ? c5 : `--${S(n2.prefix)}${c5.slice(1).replace(/\$/g, "-")}`, g4 = z3 ? g4 : typeof g4 == "number" ? g4 && e9 in I ? String(g4) + "px" : String(g4) : k(m(e9, g4 == null ? "" : g4), n2.prefix, n2.themeMap[e9]), o11[0].push(`${R4 ? `${c5} ` : `${d(c5)}:`}${g4}`);
        }
      }
      var b2, $2;
    };
    p3(e7), o11 !== void 0 && i6(x(...o11)), o11 = void 0;
  };
  a6(e6, t13, r9);
};
var x = (e6, t13, r9) => `${r9.map((e7) => `${e7}{`).join("")}${t13.length ? `${t13.join(",")}{` : ""}${e6.join(";")}${t13.length ? "}" : ""}${Array(r9.length ? r9.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e6) => String.fromCharCode(e6 + (e6 > 25 ? 39 : 97));
var z = (e6) => ((e7) => {
  let t13, r9 = "";
  for (t13 = Math.abs(e7); t13 > 52; t13 = t13 / 52 | 0)
    r9 = R(t13 % 52) + r9;
  return R(t13 % 52) + r9;
})(((e7, t13) => {
  let r9 = t13.length;
  for (; r9; )
    e7 = 33 * e7 ^ t13.charCodeAt(--r9);
  return e7;
})(5381, JSON.stringify(e6)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e6) => {
  if (e6.href && !e6.href.startsWith(location.origin))
    return false;
  try {
    return !!e6.cssRules;
  } catch (e7) {
    return false;
  }
};
var E = (e6) => {
  let t13;
  const r9 = () => {
    const { cssRules: e7 } = t13.sheet;
    return [].map.call(e7, (r10, n3) => {
      const { cssText: i6 } = r10;
      let o11 = "";
      if (i6.startsWith("--sxs"))
        return "";
      if (e7[n3 - 1] && (o11 = e7[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r10.cssRules.length)
          return "";
        for (const e8 in t13.rules)
          if (t13.rules[e8].group === r10)
            return `--sxs{--sxs:${[...t13.rules[e8].cache].join(" ")}}${i6}`;
        return r10.cssRules.length ? `${o11}${i6}` : "";
      }
      return i6;
    }).join("");
  }, n2 = () => {
    if (t13) {
      const { rules: e7, sheet: r10 } = t13;
      if (!r10.deleteRule) {
        for (; Object(Object(r10.cssRules)[0]).type === 3; )
          r10.cssRules.splice(0, 1);
        r10.cssRules = [];
      }
      for (const t14 in e7)
        delete e7[t14];
    }
    const i6 = Object(e6).styleSheets || [];
    for (const e7 of i6)
      if (j(e7)) {
        for (let i7 = 0, o12 = e7.cssRules; o12[i7]; ++i7) {
          const l7 = Object(o12[i7]);
          if (l7.type !== 1)
            continue;
          const s7 = Object(o12[i7 + 1]);
          if (s7.type !== 4)
            continue;
          ++i7;
          const { cssText: a6 } = l7;
          if (!a6.startsWith("--sxs"))
            continue;
          const c5 = a6.slice(14, -3).trim().split(/\s+/), d4 = W[c5[0]];
          d4 && (t13 || (t13 = { sheet: e7, reset: n2, rules: {}, toString: r9 }), t13.rules[d4] = { group: s7, index: i7, cache: new Set(c5) });
        }
        if (t13)
          break;
      }
    if (!t13) {
      const i7 = (e7, t14) => ({ type: t14, cssRules: [], insertRule(e8, t15) {
        this.cssRules.splice(t15, 0, i7(e8, { import: 3, undefined: 1 }[(e8.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e7 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e8) => e8.cssText).join("")}}` : e7;
      } });
      t13 = { sheet: e6 ? (e6.head || e6).appendChild(document.createElement("style")).sheet : i7("", "text/css"), rules: {}, reset: n2, toString: r9 };
    }
    const { sheet: o11, rules: l6 } = t13;
    for (let e7 = W.length - 1; e7 >= 0; --e7) {
      const t14 = W[e7];
      if (!l6[t14]) {
        const r10 = W[e7 + 1], n3 = l6[r10] ? l6[r10].index : o11.cssRules.length;
        o11.insertRule("@media{}", n3), o11.insertRule(`--sxs{--sxs:${e7}}`, n3), l6[t14] = { group: o11.cssRules[n3 + 1], index: n3, cache: /* @__PURE__ */ new Set([e7]) };
      }
      v(l6[t14]);
    }
  };
  return n2(), t13;
};
var v = (e6) => {
  const t13 = e6.group;
  let r9 = t13.cssRules.length;
  e6.apply = (e7) => {
    try {
      t13.insertRule(e7, r9), ++r9;
    } catch (e8) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e6, t13) => w(e6, () => (...r9) => {
  let n2 = { type: null, composers: /* @__PURE__ */ new Set() };
  for (const t14 of r9)
    if (t14 != null)
      if (t14[l]) {
        n2.type == null && (n2.type = t14[l].type);
        for (const e7 of t14[l].composers)
          n2.composers.add(e7);
      } else
        t14.constructor !== Object || t14.$$typeof ? n2.type == null && (n2.type = t14) : n2.composers.add(C(t14, e6));
  return n2.type == null && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e6, n2, t13);
});
var C = ({ variants: e6, compoundVariants: t13, defaultVariants: r9, ...n2 }, i6) => {
  const o11 = `${S(i6.prefix)}c-${z(n2)}`, l6 = [], s7 = [], d4 = /* @__PURE__ */ Object.create(null), g4 = [];
  for (const e7 in r9)
    d4[e7] = String(r9[e7]);
  if (typeof e6 == "object" && e6)
    for (const t14 in e6) {
      p3 = d4, u5 = t14, c.call(p3, u5) || (d4[t14] = "undefined");
      const r10 = e6[t14];
      for (const e7 in r10) {
        const n3 = { [t14]: String(e7) };
        String(e7) === "undefined" && g4.push(t14);
        const i7 = r10[e7], o12 = [n3, i7, !a(i7)];
        l6.push(o12);
      }
    }
  var p3, u5;
  if (typeof t13 == "object" && t13)
    for (const e7 of t13) {
      let { css: t14, ...r10 } = e7;
      t14 = typeof t14 == "object" && t14 || {};
      for (const e8 in r10)
        r10[e8] = String(r10[e8]);
      const n3 = [r10, t14, !a(t14)];
      s7.push(n3);
    }
  return [o11, n2, l6, s7, d4, g4];
};
var P = (e6, t13, r9) => {
  const [n2, i6, o11, a6] = L(t13.composers), c5 = typeof t13.type == "function" || t13.type.$$typeof ? ((e7) => {
    function t14() {
      for (let r10 = 0; r10 < t14[T].length; r10++) {
        const [n3, i7] = t14[T][r10];
        e7.rules[n3].apply(i7);
      }
      return t14[T] = [], null;
    }
    return t14[T] = [], t14.rules = {}, W.forEach((e8) => t14.rules[e8] = { apply: (r10) => t14[T].push([e8, r10]) }), t14;
  })(r9) : null, d4 = (c5 || r9).rules, g4 = `.${n2}${i6.length > 1 ? `:where(.${i6.slice(1).join(".")})` : ""}`, p3 = (l6) => {
    l6 = typeof l6 == "object" && l6 || A;
    const { css: s7, ...p4 } = l6, u5 = {};
    for (const e7 in o11)
      if (delete p4[e7], e7 in l6) {
        let t14 = l6[e7];
        typeof t14 == "object" && t14 ? u5[e7] = { "@initial": o11[e7], ...t14 } : (t14 = String(t14), u5[e7] = t14 !== "undefined" || a6.has(e7) ? t14 : o11[e7]);
      } else
        u5[e7] = o11[e7];
    const h4 = /* @__PURE__ */ new Set([...i6]);
    for (const [n3, i7, o12, l7] of t13.composers) {
      r9.rules.styled.cache.has(n3) || (r9.rules.styled.cache.add(n3), $(i7, [`.${n3}`], [], e6, (e7) => {
        d4.styled.apply(e7);
      }));
      const t14 = O(o12, u5, e6.media), s8 = O(l7, u5, e6.media, true);
      for (const i8 of t14)
        if (i8 !== void 0)
          for (const [t15, o13, l8] of i8) {
            const i9 = `${n3}-${z(o13)}-${t15}`;
            h4.add(i9);
            const s9 = (l8 ? r9.rules.resonevar : r9.rules.onevar).cache, a7 = l8 ? d4.resonevar : d4.onevar;
            s9.has(i9) || (s9.add(i9), $(o13, [`.${i9}`], [], e6, (e7) => {
              a7.apply(e7);
            }));
          }
      for (const t15 of s8)
        if (t15 !== void 0)
          for (const [i8, o13] of t15) {
            const t16 = `${n3}-${z(o13)}-${i8}`;
            h4.add(t16), r9.rules.allvar.cache.has(t16) || (r9.rules.allvar.cache.add(t16), $(o13, [`.${t16}`], [], e6, (e7) => {
              d4.allvar.apply(e7);
            }));
          }
    }
    if (typeof s7 == "object" && s7) {
      const t14 = `${n2}-i${z(s7)}-css`;
      h4.add(t14), r9.rules.inline.cache.has(t14) || (r9.rules.inline.cache.add(t14), $(s7, [`.${t14}`], [], e6, (e7) => {
        d4.inline.apply(e7);
      }));
    }
    for (const e7 of String(l6.className || "").trim().split(/\s+/))
      e7 && h4.add(e7);
    const f4 = p4.className = [...h4].join(" ");
    return { type: t13.type, className: f4, selector: g4, props: p4, toString: () => f4, deferredInjector: c5 };
  };
  return s(p3, { className: n2, selector: g4, [l]: t13, toString: () => (r9.rules.styled.cache.has(n2) || p3(), n2) });
};
var L = (e6) => {
  let t13 = "";
  const r9 = [], n2 = {}, i6 = [];
  for (const [o11, , , , l6, s7] of e6) {
    t13 === "" && (t13 = o11), r9.push(o11), i6.push(...s7);
    for (const e7 in l6) {
      const t14 = l6[e7];
      (n2[e7] === void 0 || t14 !== "undefined" || s7.includes(t14)) && (n2[e7] = t14);
    }
  }
  return [t13, r9, n2, new Set(i6)];
};
var O = (e6, t13, r9, n2) => {
  const i6 = [];
  e:
    for (let [o11, l6, s7] of e6) {
      if (s7)
        continue;
      let e7, a6 = 0, c5 = false;
      for (e7 in o11) {
        const n3 = o11[e7];
        let i7 = t13[e7];
        if (i7 !== n3) {
          if (typeof i7 != "object" || !i7)
            continue e;
          {
            let e8, t14, o12 = 0;
            for (const l7 in i7) {
              if (n3 === String(i7[l7])) {
                if (l7 !== "@initial") {
                  const e9 = l7.slice(1);
                  (t14 = t14 || []).push(e9 in r9 ? r9[e9] : l7.replace(/^@media ?/, "")), c5 = true;
                }
                a6 += o12, e8 = true;
              }
              ++o12;
            }
            if (t14 && t14.length && (l6 = { ["@media " + t14.join(", ")]: l6 }), !e8)
              continue e;
          }
        }
      }
      (i6[a6] = i6[a6] || []).push([n2 ? "cv" : `${e7}-${o11[e7]}`, l6, c5]);
    }
  return i6;
};
var A = {};
var N = o();
var D = (e6, t13) => N(e6, () => (...r9) => {
  const n2 = () => {
    for (let n3 of r9) {
      n3 = typeof n3 == "object" && n3 || {};
      let r10 = z(n3);
      if (!t13.rules.global.cache.has(r10)) {
        if (t13.rules.global.cache.add(r10), "@import" in n3) {
          let e7 = [].indexOf.call(t13.sheet.cssRules, t13.rules.themed.group) - 1;
          for (let r11 of [].concat(n3["@import"]))
            r11 = r11.includes('"') || r11.includes("'") ? r11 : `"${r11}"`, t13.sheet.insertRule(`@import ${r11};`, e7++);
          delete n3["@import"];
        }
        $(n3, [], [], e6, (e7) => {
          t13.rules.global.apply(e7);
        });
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
});
var H = o();
var V = (e6, t13) => H(e6, () => (r9) => {
  const n2 = `${S(e6.prefix)}k-${z(r9)}`, i6 = () => {
    if (!t13.rules.global.cache.has(n2)) {
      t13.rules.global.cache.add(n2);
      const i7 = [];
      $(r9, [], [], e6, (e7) => i7.push(e7));
      const o11 = `@keyframes ${n2}{${i7.join("")}}`;
      t13.rules.global.apply(o11);
    }
    return n2;
  };
  return s(i6, { get name() {
    return i6();
  }, toString: i6 });
});
var G = class {
  constructor(e6, t13, r9, n2) {
    this.token = e6 == null ? "" : String(e6), this.value = t13 == null ? "" : String(t13), this.scale = r9 == null ? "" : String(r9), this.prefix = n2 == null ? "" : String(n2);
  }
  get computedValue() {
    return "var(" + this.variable + ")";
  }
  get variable() {
    return "--" + S(this.prefix) + S(this.scale) + this.token;
  }
  toString() {
    return this.computedValue;
  }
};
var F = o();
var J = (e6, t13) => F(e6, () => (r9, n2) => {
  n2 = typeof r9 == "object" && r9 || Object(n2);
  const i6 = `.${r9 = (r9 = typeof r9 == "string" ? r9 : "") || `${S(e6.prefix)}t-${z(n2)}`}`, o11 = {}, l6 = [];
  for (const t14 in n2) {
    o11[t14] = {};
    for (const r10 in n2[t14]) {
      const i7 = `--${S(e6.prefix)}${t14}-${r10}`, s8 = k(String(n2[t14][r10]), e6.prefix, t14);
      o11[t14][r10] = new G(r10, s8, t14, e6.prefix), l6.push(`${i7}:${s8}`);
    }
  }
  const s7 = () => {
    if (l6.length && !t13.rules.themed.cache.has(r9)) {
      t13.rules.themed.cache.add(r9);
      const i7 = `${n2 === e6.theme ? ":root," : ""}.${r9}{${l6.join(";")}}`;
      t13.rules.themed.apply(i7);
    }
    return r9;
  };
  return { ...o11, get className() {
    return s7();
  }, selector: i6, toString: s7 };
});
var U = o();
var Y = o();
var q = (e6) => {
  const t13 = ((e7) => {
    let t14 = false;
    const r9 = U(e7, (e8) => {
      t14 = true;
      const r10 = "prefix" in (e8 = typeof e8 == "object" && e8 || {}) ? String(e8.prefix) : "", i6 = typeof e8.media == "object" && e8.media || {}, o11 = typeof e8.root == "object" ? e8.root || null : globalThis.document || null, l6 = typeof e8.theme == "object" && e8.theme || {}, s7 = { prefix: r10, media: i6, theme: l6, themeMap: typeof e8.themeMap == "object" && e8.themeMap || { ...n }, utils: typeof e8.utils == "object" && e8.utils || {} }, a6 = E(o11), c5 = { css: M(s7, a6), globalCss: D(s7, a6), keyframes: V(s7, a6), createTheme: J(s7, a6), reset() {
        a6.reset(), c5.theme.toString();
      }, theme: {}, sheet: a6, config: s7, prefix: r10, getCssText: a6.toString, toString: a6.toString };
      return String(c5.theme = c5.createTheme(l6)), c5;
    });
    return t14 || r9.reset(), r9;
  })(e6);
  return t13.styled = (({ config: e7, sheet: t14 }) => Y(e7, () => {
    const r9 = M(e7, t14);
    return (...e8) => {
      const t15 = r9(...e8), n2 = t15[l].type, i6 = import_react2.default.forwardRef((e9, r10) => {
        const i7 = e9 && e9.as || n2, { props: o11, deferredInjector: l6 } = t15(e9);
        return delete o11.as, o11.ref = r10, l6 ? import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(i7, o11), import_react2.default.createElement(l6, null)) : import_react2.default.createElement(i7, o11);
      });
      return i6.className = t15.className, i6.displayName = `Styled.${n2.displayName || n2.name || n2}`, i6.selector = t15.selector, i6.toString = () => t15.selector, i6[l] = t15[l], i6;
    };
  }))(t13), t13;
};

// node_modules/@nextui-org/react/esm/theme/common.js
init_react();
var defaultTokens = { fonts: { sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;", mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;" }, fontSizes: { tiny: ".75rem", xs: "0.875rem", base: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.25rem", xl: "3rem" }, fontWeights: { hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 }, lineHeights: { xs: 1, sm: 1.25, md: 1.5, lg: 1.625, xl: 1.75 }, letterSpacings: { tighter: "-0.05em", tight: "-0.025em", normal: "0", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, space: { 0: "0rem", xs: "0.5rem", sm: "0.75rem", md: "1rem", lg: "1.25rem", xl: "2.25rem", px: "1px", 1: "0.125rem", 2: "0.25rem", 3: "0.375rem", 4: "0.5rem", 5: "0.625rem", 6: "0.75rem", 7: "0.875rem", 8: "1rem", 9: "1.25rem", 10: "1.5rem", 11: "1.75rem", 12: "2rem", 13: "2.25rem", 14: "2.5rem", 15: "2.75rem", 16: "3rem", 17: "3.5rem", 18: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, radii: { xs: "7px", sm: "9px", md: "12px", base: "14px", lg: "14px", xl: "18px", squared: "33%", rounded: "50%", pill: "9999px" }, zIndices: { 1: "100", 2: "200", 3: "300", 4: "400", 5: "500", 10: "1000", max: "9999" }, borderWeights: { light: "1px", normal: "2px", bold: "3px", extrabold: "4px", black: "5px" }, transitions: { default: "all 250ms ease", button: "background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s", avatar: "box-shadow 0.25s ease 0s, opacity 0.25s ease 0s", link: "opacity 0.25s ease 0s, background 0.25s ease 0s", card: "transform 0.25s ease 0s, box-shadow 0.25s ease 0s" }, breakpoints: { xs: "650px", sm: "960px", md: "1280px", lg: "1400px", xl: "1920px" } };
var defaultColors = { white: "#ffffff", black: "#000000", primaryLight: "$blue200", primaryLightHover: "$blue300", primaryLightActive: "$blue400", primaryLightContrast: "$blue600", primary: "$blue600", primaryBorder: "$blue500", primaryBorderHover: "$blue600", primarySolidHover: "$blue700", primarySolidContrast: "$white", primaryShadow: "$blue500", secondaryLight: "$purple200", secondaryLightHover: "$purple300", secondaryLightActive: "$purple400", secondaryLightContrast: "$purple600", secondary: "$purple600", secondaryBorder: "$purple500", secondaryBorderHover: "$purple600", secondarySolidHover: "$purple700", secondarySolidContrast: "$white", secondaryShadow: "$purple500", successLight: "$green200", successLightHover: "$green300", successLightActive: "$green400", successLightContrast: "$green700", success: "$green600", successBorder: "$green500", successBorderHover: "$green600", successSolidHover: "$green700", successSolidContrast: "$white", successShadow: "$green500", warningLight: "$yellow200", warningLightHover: "$yellow300", warningLightActive: "$yellow400", warningLightContrast: "$yellow700", warning: "$yellow600", warningBorder: "$yellow500", warningBorderHover: "$yellow600", warningSolidHover: "$yellow700", warningSolidContrast: "$white", warningShadow: "$yellow500", errorLight: "$red200", errorLightHover: "$red300", errorLightActive: "$red400", errorLightContrast: "$red600", error: "$red600", errorBorder: "$red500", errorBorderHover: "$red600", errorSolidHover: "$red700", errorSolidContrast: "$white", errorShadow: "$red500", gradient: "linear-gradient(112deg, $cyan600 -63.59%, $pink600 -20.3%, $blue600 70.46%)", accents0: "$gray50", accents1: "$gray100", accents2: "$gray200", accents3: "$gray300", accents4: "$gray400", accents5: "$gray500", accents6: "$gray600", accents7: "$gray700", accents8: "$gray800", accents9: "$gray900", border: "$gray300" };
var defaultMedia = { xs: `(min-width: ${defaultTokens.breakpoints.xs})`, sm: `(min-width: ${defaultTokens.breakpoints.sm})`, md: `(min-width: ${defaultTokens.breakpoints.md})`, lg: `(min-width: ${defaultTokens.breakpoints.lg})`, xl: `(min-width: ${defaultTokens.breakpoints.xl})`, xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`, smMax: `(max-width: ${defaultTokens.breakpoints.sm})`, mdMax: `(max-width: ${defaultTokens.breakpoints.md})`, lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`, xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`, motion: "(prefers-reduced-motion: reduce)", safari: "not all and (min-resolution:.001dpcm)", hover: "(any-hover: hover)", dark: "(prefers-color-scheme: dark)", light: "(prefers-color-scheme: light)" };
var defaultUtils = { p: (e6) => ({ padding: e6 }), pt: (e6) => ({ paddingTop: e6 }), pr: (e6) => ({ paddingRight: e6 }), pb: (e6) => ({ paddingBottom: e6 }), pl: (e6) => ({ paddingLeft: e6 }), px: (e6) => ({ paddingLeft: e6, paddingRight: e6 }), py: (e6) => ({ paddingTop: e6, paddingBottom: e6 }), m: (e6) => ({ margin: e6 }), mt: (e6) => ({ marginTop: e6 }), mr: (e6) => ({ marginRight: e6 }), mb: (e6) => ({ marginBottom: e6 }), ml: (e6) => ({ marginLeft: e6 }), mx: (e6) => ({ marginLeft: e6, marginRight: e6 }), my: (e6) => ({ marginTop: e6, marginBottom: e6 }), ta: (e6) => ({ textAlign: e6 }), tt: (e6) => ({ textTransform: e6 }), to: (e6) => ({ textOverflow: e6 }), d: (e6) => ({ display: e6 }), dflex: (e6) => ({ display: "flex", alignItems: e6, justifyContent: e6 }), fd: (e6) => ({ flexDirection: e6 }), fw: (e6) => ({ flexWrap: e6 }), ai: (e6) => ({ alignItems: e6 }), ac: (e6) => ({ alignContent: e6 }), jc: (e6) => ({ justifyContent: e6 }), as: (e6) => ({ alignSelf: e6 }), fg: (e6) => ({ flexGrow: e6 }), fs: (e6) => ({ fontSize: e6 }), fb: (e6) => ({ flexBasis: e6 }), bc: (e6) => ({ backgroundColor: e6 }), bf: (e6) => ({ backdropFilter: e6 }), bg: (e6) => ({ background: e6 }), bgBlur: (e6) => ({ bf: "saturate(180%) blur(10px)", bg: `${e6}66` }), bgColor: (e6) => ({ backgroundColor: e6 }), backgroundClip: (e6) => ({ WebkitBackgroundClip: e6, backgroundClip: e6 }), bgClip: (e6) => ({ WebkitBackgroundClip: e6, backgroundClip: e6 }), br: (e6) => ({ borderRadius: e6 }), bw: (e6) => ({ borderWidth: e6 }), btrr: (e6) => ({ borderTopRightRadius: e6 }), bbrr: (e6) => ({ borderBottomRightRadius: e6 }), bblr: (e6) => ({ borderBottomLeftRadius: e6 }), btlr: (e6) => ({ borderTopLeftRadius: e6 }), bs: (e6) => ({ boxShadow: e6 }), normalShadow: (e6) => ({ boxShadow: `0 4px 14px 0 $colors${e6}` }), normalShadowVar: (e6) => ({ boxShadow: `0 4px 14px 0 ${e6}` }), lh: (e6) => ({ lineHeight: e6 }), ov: (e6) => ({ overflow: e6 }), ox: (e6) => ({ overflowX: e6 }), oy: (e6) => ({ overflowY: e6 }), pe: (e6) => ({ pointerEvents: e6 }), events: (e6) => ({ pointerEvents: e6 }), us: (e6) => ({ WebkitUserSelect: e6, userSelect: e6 }), userSelect: (e6) => ({ WebkitUserSelect: e6, userSelect: e6 }), w: (e6) => ({ width: e6 }), h: (e6) => ({ height: e6 }), mw: (e6) => ({ maxWidth: e6 }), maxW: (e6) => ({ maxWidth: e6 }), mh: (e6) => ({ maxHeight: e6 }), maxH: (e6) => ({ maxHeight: e6 }), size: (e6) => ({ width: e6, height: e6 }), minSize: (e6) => ({ minWidth: e6, minHeight: e6, width: e6, height: e6 }), sizeMin: (e6) => ({ minWidth: e6, minHeight: e6, width: e6, height: e6 }), maxSize: (e6) => ({ maxWidth: e6, maxHeight: e6 }), sizeMax: (e6) => ({ maxWidth: e6, maxHeight: e6 }), appearance: (e6) => ({ WebkitAppearance: e6, appearance: e6 }), scale: (e6) => ({ transform: `scale(${e6})` }), linearGradient: (e6) => ({ backgroundImage: `linear-gradient(${e6})` }), tdl: (e6) => ({ textDecorationLine: e6 }), textGradient: (e6) => ({ backgroundImage: `linear-gradient(${e6})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", "&::selection": { WebkitTextFillColor: "$colors$text" } }) };
var defaultThemeMap = { ...n, width: "space", height: "space", minWidth: "space", maxWidth: "space", minHeight: "space", maxHeight: "space", flexBasis: "space", gridTemplateColumns: "space", gridTemplateRows: "space", blockSize: "space", minBlockSize: "space", maxBlockSize: "space", inlineSize: "space", minInlineSize: "space", maxInlineSize: "space", borderWidth: "borderWeights" };
var common_default = { prefix: "nextui", theme: { ...defaultTokens, colors: defaultColors, shadows: {} }, media: defaultMedia, utils: defaultUtils, themeMap: defaultThemeMap };

// node_modules/@nextui-org/react/esm/theme/light-theme.js
init_react();

// node_modules/@nextui-org/react/esm/theme/colors/blue.js
init_react();
var blue = { blue50: "#EDF5FF", blue100: "#E1EFFF", blue200: "#CEE4FE", blue300: "#B7D5F8", blue400: "#96C1F2", blue500: "#5EA2EF", blue600: "#0072F5", blue700: "#005FCC", blue800: "#004799", blue900: "#00254D" };

// node_modules/@nextui-org/react/esm/theme/colors/purple.js
init_react();
var purple = { purple50: "#F7F2FD", purple100: "#F1E8FB", purple200: "#EADCF8", purple300: "#E0CBF5", purple400: "#D1B1F0", purple500: "#BC8EE9", purple600: "#7828C8", purple700: "#6622AA", purple800: "#4D1980", purple900: "#290E44" };

// node_modules/@nextui-org/react/esm/theme/colors/green.js
init_react();
var green = { green50: "#F1FDF7", green100: "#E8FCF1", green200: "#DAFBE8", green300: "#C8F9DD", green400: "#ADF5CC", green500: "#88F1B6", green600: "#17C964", green700: "#13A452", green800: "#108944", green900: "#06371B" };

// node_modules/@nextui-org/react/esm/theme/colors/yellow.js
init_react();
var yellow = { yellow50: "#FEF9F0", yellow100: "#FEF5E7", yellow200: "#FDEFD8", yellow300: "#FCE7C5", yellow400: "#FBDBA7", yellow500: "#F9CB80", yellow600: "#F5A524", yellow700: "#B97509", yellow800: "#925D07", yellow900: "#4E3104" };

// node_modules/@nextui-org/react/esm/theme/colors/red.js
init_react();
var red = { red50: "#FEF0F5", red100: "#FEE7EF", red200: "#FDD8E5", red300: "#FCC5D8", red400: "#FAA8C5", red500: "#F881AB", red600: "#F31260", red700: "#B80A47", red800: "#910838", red900: "#4E041E" };

// node_modules/@nextui-org/react/esm/theme/colors/cyan.js
init_react();
var cyan = { cyan50: "#F0FCFF", cyan100: "#E6FAFE", cyan200: "#D7F8FE", cyan300: "#C3F4FD", cyan400: "#A5EEFD", cyan500: "#7EE7FC", cyan600: "#06B7DB", cyan700: "#09AACD", cyan800: "#0E8AAA", cyan900: "#053B48" };

// node_modules/@nextui-org/react/esm/theme/colors/pink.js
init_react();
var pink = { pink50: "#FFF0FB", pink100: "#FFE5F8", pink200: "#FFD6F3", pink300: "#FFC2EE", pink400: "#FFA3E5", pink500: "#FF7AD9", pink600: "#FF4ECD", pink700: "#D6009A", pink800: "#B80084", pink900: "#4D0037" };

// node_modules/@nextui-org/react/esm/theme/colors/gray.js
init_react();
var gray = { gray50: "#F5F5F5", gray100: "#EDEDED", gray200: "#EBEBEB", gray300: "#E0E0E0", gray400: "#D4D4D4", gray500: "#C2C2C2", gray600: "#A3A3A3", gray700: "#808080", gray800: "#666666", gray900: "#111111" };

// node_modules/@nextui-org/react/esm/theme/light-theme.js
var light_theme_default = { colors: { background: "$white", foreground: "$black", backgroundContrast: "$white", ...blue, ...purple, ...green, ...yellow, ...red, ...cyan, ...pink, ...gray, text: "$gray900", link: "$blue600", codeLight: "$pink100", code: "$pink600", selection: "$blue200" }, shadows: { xs: "-4px 0 4px rgb(0 0 0 / 5%);", sm: "0 5px 20px -5px rgba(0, 0, 0, 0.1)", md: "0 8px 30px rgba(0, 0, 0, 0.15)", lg: "0 30px 60px rgba(0, 0, 0, 0.15)", xl: "0 40px 80px rgba(0, 0, 0, 0.25)" } };

// node_modules/@nextui-org/react/esm/theme/stitches.config.js
var c2 = q({ ...common_default, theme: { ...common_default.theme, shadows: { ...light_theme_default.shadows }, colors: { ...common_default.theme.colors, ...light_theme_default.colors } } });
var createThemeBase = c2.createTheme;
var styled = c2.styled;
var css = c2.css;
var globalCss = c2.globalCss;
var keyframes = c2.keyframes;
var getCssText = c2.getCssText;
var theme = c2.theme;
var config = c2.config;
var sharedFocus = css({ WebkitTapHighlightColor: "transparent", "&:focus:not(&:focus-visible)": { boxShadow: "none" }, "&:focus": { outline: "none", boxShadow: "0 0 0 2px $colors$background, 0 0 0 4px $colors$primary" }, "@safari": { WebkitTapHighlightColor: "transparent", outline: "none" } });
var cssFocusVisible = css({ variants: { isFocusVisible: { true: { outline: "transparent solid 2px", outlineOffset: "2px", boxShadow: "0 0 0 2px $colors$background, 0 0 0 4px $colors$primary" }, false: { outline: "none" } } } });
var sharedVisuallyHidden = css({ border: "0px", clip: "rect(0px, 0px, 0px, 0px)", height: "1px", width: "1px", margin: "-1px", padding: "0px", overflow: "hidden", whiteSpace: "nowrap", position: "absolute" });

// node_modules/@nextui-org/react/esm/use-warning/index.js
init_react();

// node_modules/@nextui-org/react/esm/use-warning/use-warning.js
init_react();
var o2 = {};
var use_warning_default = (e6, n2) => {
  const r9 = `[Next UI]${n2 ? ` [${n2}]` : " "}: ${e6}`;
  if (typeof console != "undefined" && !o2[r9]) {
    if (o2[r9] = true, true)
      return console.error(r9);
    console.warn(r9);
  }
};

// node_modules/@nextui-org/react/esm/use-warning/index.js
var use_warning_default2 = use_warning_default;

// node_modules/@nextui-org/react/esm/utils/assertion.js
init_react();
var __DEV__ = true;

// node_modules/@nextui-org/react/esm/use-drip/index.js
init_react();

// node_modules/@nextui-org/react/esm/use-drip/use-drip.js
init_react();
var import_react5 = __toESM(require_react());
var use_drip_default = (e6 = false, n2) => {
  const [r9, o11] = (0, import_react5.useState)(e6), [c5, i6] = (0, import_react5.useState)(0), [l6, u5] = (0, import_react5.useState)(0);
  return { visible: r9, x: c5, y: l6, onClick: (t13) => {
    if (!n2.current)
      return;
    const e7 = n2.current.getBoundingClientRect();
    o11(true), i6(t13.clientX - e7.left), u5(t13.clientY - e7.top);
  }, onCompleted: () => {
    o11(false), i6(0), u5(0);
  } };
};

// node_modules/@nextui-org/react/esm/use-drip/index.js
var use_drip_default2 = use_drip_default;

// node_modules/@nextui-org/react/esm/utils/drip.js
init_react();
var import_react6 = __toESM(require_react());

// node_modules/@nextui-org/react/esm/utils/with-defaults.js
init_react();
var with_defaults_default = (e6, t13) => (e6.defaultProps = t13, e6);

// node_modules/@nextui-org/react/esm/utils/clsx.js
init_react();
function r2(e6) {
  var t13, f4, n2 = "";
  if (typeof e6 == "string" || typeof e6 == "number")
    n2 += e6;
  else if (typeof e6 == "object")
    if (Array.isArray(e6))
      for (t13 = 0; t13 < e6.length; t13++)
        e6[t13] && (f4 = r2(e6[t13])) && (n2 && (n2 += " "), n2 += f4);
    else
      for (t13 in e6)
        e6[t13] && (n2 && (n2 += " "), n2 += t13);
  return n2;
}
function clsx_default(...e6) {
  for (var t13, f4, n2 = 0, o11 = ""; n2 < e6.length; )
    (t13 = e6[n2++]) && (f4 = r2(t13)) && (o11 && (o11 += " "), o11 += f4);
  return o11;
}

// node_modules/@nextui-org/react/esm/utils/drip.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var a2 = keyframes({ "0%": { opacity: 0, transform: "scale(0.25)" }, "30%": { opacity: 1 }, "80%": { opacity: 0.5 }, "100%": { transform: "scale(28)", opacity: 0 } });
var StyledDrip = styled("div", { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, "& svg": { position: "absolute", animation: `350ms linear ${a2}`, animationFillMode: "forwards", width: "$md", height: "$md" } });
var m2 = ({ visible: t13, x: r9, y: o11, color: n2, onCompleted: a6, className: m4, ...c5 }) => {
  const d4 = (0, import_react6.useRef)(null), p3 = Number.isNaN(+o11) ? 0 : o11 - 10, u5 = Number.isNaN(+r9) ? 0 : r9 - 10;
  return (0, import_react6.useEffect)(() => {
    if (d4.current)
      return d4.current.addEventListener("animationend", a6), () => {
        d4.current && d4.current.removeEventListener("animationend", a6);
      };
  }), t13 ? (0, import_jsx_runtime.jsx)(StyledDrip, { ref: d4, className: clsx_default("nextui-drip", m4), ...c5, children: (0, import_jsx_runtime.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", style: { top: p3, left: u5 }, children: (0, import_jsx_runtime.jsx)("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: (0, import_jsx_runtime.jsx)("g", { className: "nextui-drip-filler", fill: n2, children: (0, import_jsx_runtime.jsx)("rect", { width: "100%", height: "100%", rx: "10" }) }) }) }) }) : null;
};
var c3 = import_react6.default.memo(m2);
var drip_default = with_defaults_default(c3, { visible: false, x: 0, y: 0, className: "" });

// node_modules/@react-aria/ssr/dist/module.js
init_react();
var import_react7 = __toESM(require_react());
function $parcel$export(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $9d939cbc98267846$exports = {};
$parcel$export($9d939cbc98267846$exports, "SSRProvider", () => $9d939cbc98267846$export$9f8ac96af4b1b2ae);
$parcel$export($9d939cbc98267846$exports, "useSSRSafeId", () => $9d939cbc98267846$export$619500959fc48b26);
$parcel$export($9d939cbc98267846$exports, "useIsSSR", () => $9d939cbc98267846$export$535bd6ca7f90a273);
var $9d939cbc98267846$var$defaultContext = {
  prefix: String(Math.round(Math.random() * 1e10)),
  current: 0
};
var $9d939cbc98267846$var$SSRContext = /* @__PURE__ */ import_react7.default.createContext($9d939cbc98267846$var$defaultContext);
function $9d939cbc98267846$export$9f8ac96af4b1b2ae(props) {
  let cur = (0, import_react7.useContext)($9d939cbc98267846$var$SSRContext);
  let value = (0, import_react7.useMemo)(() => ({
    prefix: cur === $9d939cbc98267846$var$defaultContext ? "" : `${cur.prefix}-${++cur.current}`,
    current: 0
  }), [
    cur
  ]);
  return /* @__PURE__ */ import_react7.default.createElement($9d939cbc98267846$var$SSRContext.Provider, {
    value
  }, props.children);
}
var $9d939cbc98267846$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
function $9d939cbc98267846$export$619500959fc48b26(defaultId) {
  let ctx = (0, import_react7.useContext)($9d939cbc98267846$var$SSRContext);
  if (ctx === $9d939cbc98267846$var$defaultContext && !$9d939cbc98267846$var$canUseDOM)
    console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
  return (0, import_react7.useMemo)(() => defaultId || `react-aria${ctx.prefix}-${++ctx.current}`, [
    defaultId
  ]);
}
function $9d939cbc98267846$export$535bd6ca7f90a273() {
  let cur = (0, import_react7.useContext)($9d939cbc98267846$var$SSRContext);
  let isInSSRContext = cur !== $9d939cbc98267846$var$defaultContext;
  let [isSSR, setIsSSR] = (0, import_react7.useState)(isInSSRContext);
  if (typeof window !== "undefined" && isInSSRContext)
    (0, import_react7.useLayoutEffect)(() => {
      setIsSSR(false);
    }, []);
  return isSSR;
}

// node_modules/@react-aria/utils/dist/module.js
init_react();
var import_react9 = __toESM(require_react());

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k3, y6, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k3 = 0; k3 < mix.length; k3++) {
        if (mix[k3]) {
          if (y6 = toVal(mix[k3])) {
            str && (str += " ");
            str += y6;
          }
        }
      }
    } else {
      for (k3 in mix) {
        if (mix[k3]) {
          str && (str += " ");
          str += k3;
        }
      }
    }
  }
  return str;
}
function clsx_m_default() {
  var i6 = 0, tmp, x4, str = "";
  while (i6 < arguments.length) {
    if (tmp = arguments[i6++]) {
      if (x4 = toVal(tmp)) {
        str && (str += " ");
        str += x4;
      }
    }
  }
  return str;
}

// node_modules/@react-stately/utils/dist/module.js
init_react();
var import_react8 = __toESM(require_react());
function $parcel$export2(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $bfee1151ccb0650f$exports = {};
$parcel$export2($bfee1151ccb0650f$exports, "useControlledState", () => $bfee1151ccb0650f$export$40bfa8c7b0832715);
function $bfee1151ccb0650f$export$40bfa8c7b0832715(value1, defaultValue, onChange) {
  let [stateValue, setStateValue] = (0, import_react8.useState)(value1 || defaultValue);
  let ref = (0, import_react8.useRef)(value1 !== void 0);
  let wasControlled = ref.current;
  let isControlled = value1 !== void 0;
  let stateRef = (0, import_react8.useRef)(stateValue);
  if (wasControlled !== isControlled)
    console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
  ref.current = isControlled;
  let setValue = (0, import_react8.useCallback)((value2, ...args) => {
    let onChangeCaller = (value, ...onChangeArgs) => {
      if (onChange) {
        if (!Object.is(stateRef.current, value))
          onChange(value, ...onChangeArgs);
      }
      if (!isControlled)
        stateRef.current = value;
    };
    if (typeof value2 === "function") {
      console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
      let updateFunction = (oldValue, ...functionArgs) => {
        let interceptedValue = value2(isControlled ? stateRef.current : oldValue, ...functionArgs);
        onChangeCaller(interceptedValue, ...args);
        if (!isControlled)
          return interceptedValue;
        return oldValue;
      };
      setStateValue(updateFunction);
    } else {
      if (!isControlled)
        setStateValue(value2);
      onChangeCaller(value2, ...args);
    }
  }, [
    isControlled,
    onChange
  ]);
  if (isControlled)
    stateRef.current = value1;
  else
    value1 = stateValue;
  return [
    value1,
    setValue
  ];
}
var $48d9f1d165180307$exports = {};
$parcel$export2($48d9f1d165180307$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export2($48d9f1d165180307$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
$parcel$export2($48d9f1d165180307$exports, "toFixedNumber", () => $48d9f1d165180307$export$b6268554fba451f);
function $48d9f1d165180307$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
  let newValue = Math.min(Math.max(value, min), max);
  return newValue;
}
function $48d9f1d165180307$export$cb6e0bb50bc19463(value, min, max, step) {
  let remainder = (value - (isNaN(min) ? 0 : min)) % step;
  let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
  if (!isNaN(min)) {
    if (snappedValue < min)
      snappedValue = min;
    else if (!isNaN(max) && snappedValue > max)
      snappedValue = min + Math.floor((max - min) / step) * step;
  } else if (!isNaN(max) && snappedValue > max)
    snappedValue = Math.floor(max / step) * step;
  let string = step.toString();
  let index = string.indexOf(".");
  let precision = index >= 0 ? string.length - index : 0;
  if (precision > 0) {
    let pow = Math.pow(10, precision);
    snappedValue = Math.round(snappedValue * pow) / pow;
  }
  return snappedValue;
}
function $48d9f1d165180307$export$b6268554fba451f(value, digits, base = 10) {
  const pow = Math.pow(base, digits);
  return Math.round(value * pow) / pow;
}

// node_modules/@react-aria/utils/dist/module.js
function $parcel$export3(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $bdb11010cef70236$exports = {};
$parcel$export3($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export3($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export3($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);
var $f0a04ccd8dbdd83b$exports = {};
$parcel$export3($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== "undefined" ? import_react9.default.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$idsUpdaterMap = /* @__PURE__ */ new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let isRendering = (0, import_react9.useRef)(true);
  isRendering.current = true;
  let [value, setValue] = (0, import_react9.useState)(defaultId);
  let nextId = (0, import_react9.useRef)(null);
  let res = $9d939cbc98267846$export$619500959fc48b26(value);
  let updateValue = (val) => {
    if (!isRendering.current)
      setValue(val);
    else
      nextId.current = val;
  };
  $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    isRendering.current = false;
  }, [
    updateValue
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let r9 = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r9);
    };
  }, [
    res
  ]);
  (0, import_react9.useEffect)(() => {
    let newId = nextId.current;
    if (newId) {
      setValue(newId);
      nextId.current = null;
    }
  }, [
    setValue,
    updateValue
  ]);
  return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f25(id);
  let updateId = (0, import_react9.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : null;
    });
  }, [
    id,
    setResolvedId
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}
var $ff5963eb1fccf552$exports = {};
$parcel$export3($ff5963eb1fccf552$exports, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e);
function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}
var $3ef42575df84b30b$exports = {};
$parcel$export3($3ef42575df84b30b$exports, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe928);
function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i6 = 1; i6 < args.length; i6++) {
    let props = args[i6];
    for (let key in props) {
      let a6 = result[key];
      let b2 = props[key];
      if (typeof a6 === "function" && typeof b2 === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90)
        result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a6, b2);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a6 === "string" && typeof b2 === "string")
        result[key] = clsx_m_default(a6, b2);
      else if (key === "id" && a6 && b2)
        result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a6, b2);
      else
        result[key] = b2 !== void 0 ? b2 : a6;
    }
  }
  return result;
}
var $5dc95899b306f630$exports = {};
$parcel$export3($5dc95899b306f630$exports, "mergeRefs", () => $5dc95899b306f630$export$c9058316764c140e);
function $5dc95899b306f630$export$c9058316764c140e(...refs) {
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function")
        ref(value);
      else if (ref != null)
        ref.current = value;
    }
  };
}
var $65484d02dcb7eb3e$exports = {};
$parcel$export3($65484d02dcb7eb3e$exports, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f);
var $65484d02dcb7eb3e$var$DOMPropNames = /* @__PURE__ */ new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames = /* @__PURE__ */ new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, propNames } = opts;
  let filteredProps = {};
  for (const prop in props)
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop)))
      filteredProps[prop] = props[prop];
  return filteredProps;
}
var $7215afc6de606d6b$exports = {};
$parcel$export3($7215afc6de606d6b$exports, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f3);
function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e6) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
  var parent = element.parentNode;
  var scrollableElements = [];
  var rootScrollingElement = document.scrollingElement || document.documentElement;
  while (parent instanceof HTMLElement && parent !== rootScrollingElement) {
    if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth)
      scrollableElements.push({
        element: parent,
        scrollTop: parent.scrollTop,
        scrollLeft: parent.scrollLeft
      });
    parent = parent.parentNode;
  }
  if (rootScrollingElement instanceof HTMLElement)
    scrollableElements.push({
      element: rootScrollingElement,
      scrollTop: rootScrollingElement.scrollTop,
      scrollLeft: rootScrollingElement.scrollLeft
    });
  return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var $ab71dadb03a6fb2e$exports = {};
$parcel$export3($ab71dadb03a6fb2e$exports, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
  let rect = element.getBoundingClientRect();
  if (reverse)
    return orientation === "horizontal" ? rect.right : rect.bottom;
  return orientation === "horizontal" ? rect.left : rect.top;
}
var $103b0e103f1b5952$exports = {};
$parcel$export3($103b0e103f1b5952$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export3($103b0e103f1b5952$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
var $bbed8b41f857bcc0$exports = {};
$parcel$export3($bbed8b41f857bcc0$exports, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c430);
var $bbed8b41f857bcc0$var$transitionsByElement = /* @__PURE__ */ new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = /* @__PURE__ */ new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e6) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e6.target);
    if (!transitions) {
      transitions = /* @__PURE__ */ new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e6.target, transitions);
      e6.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e6.propertyName);
  };
  let onTransitionEnd = (e6) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e6.target);
    if (!properties)
      return;
    properties.delete(e6.propertyName);
    if (properties.size === 0) {
      e6.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e6.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0)
      fn();
    else
      $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
  });
}
var $9cc09df9fd7676be$exports = {};
$parcel$export3($9cc09df9fd7676be$exports, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba39706);
var $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
  console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
  let { containerRef, reverse, orientation, onHover, onDrag, onPositionChange, onIncrement, onDecrement, onIncrementToMax, onDecrementToMin, onCollapseToggle } = props;
  let getPosition = (e6) => orientation === "horizontal" ? e6.clientX : e6.clientY;
  let getNextOffset = (e6) => {
    let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e6);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };
  let dragging = (0, import_react9.useRef)(false);
  let prevPosition = (0, import_react9.useRef)(0);
  let handlers = (0, import_react9.useRef)({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;
  let onMouseDragged = (e6) => {
    e6.preventDefault();
    let nextOffset = getNextOffset(e6);
    if (!dragging.current) {
      dragging.current = true;
      if (handlers.current.onDrag)
        handlers.current.onDrag(true);
      if (handlers.current.onPositionChange)
        handlers.current.onPositionChange(nextOffset);
    }
    if (prevPosition.current === nextOffset)
      return;
    prevPosition.current = nextOffset;
    if (onPositionChange)
      onPositionChange(nextOffset);
  };
  let onMouseUp = (e6) => {
    const target = e6.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e6);
    if (handlers.current.onDrag)
      handlers.current.onDrag(false);
    if (handlers.current.onPositionChange)
      handlers.current.onPositionChange(nextOffset);
    $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
    window.removeEventListener("mouseup", onMouseUp, false);
    window.removeEventListener("mousemove", onMouseDragged, false);
  };
  let onMouseDown = (e6) => {
    const target = e6.currentTarget;
    if ($9cc09df9fd7676be$var$draggingElements.some((elt) => target.contains(elt)))
      return;
    $9cc09df9fd7676be$var$draggingElements.push(target);
    window.addEventListener("mousemove", onMouseDragged, false);
    window.addEventListener("mouseup", onMouseUp, false);
  };
  let onMouseEnter = () => {
    if (onHover)
      onHover(true);
  };
  let onMouseOut = () => {
    if (onHover)
      onHover(false);
  };
  let onKeyDown = (e6) => {
    switch (e6.key) {
      case "Left":
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e6.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Up":
      case "ArrowUp":
        if (orientation === "vertical") {
          e6.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Right":
      case "ArrowRight":
        if (orientation === "horizontal") {
          e6.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (orientation === "vertical") {
          e6.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Home":
        e6.preventDefault();
        if (onDecrementToMin)
          onDecrementToMin();
        break;
      case "End":
        e6.preventDefault();
        if (onIncrementToMax)
          onIncrementToMax();
        break;
      case "Enter":
        e6.preventDefault();
        if (onCollapseToggle)
          onCollapseToggle();
        break;
    }
  };
  return {
    onMouseDown,
    onMouseEnter,
    onMouseOut,
    onKeyDown
  };
}
var $03deb23ff14920c4$exports = {};
$parcel$export3($03deb23ff14920c4$exports, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed6);
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react9.useRef)(/* @__PURE__ */ new Map());
  let addGlobalListener = (0, import_react9.useCallback)((eventTarget, type, listener, options) => {
    let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args) => {
      globalListeners.current.delete(listener);
      listener(...args);
    } : listener;
    globalListeners.current.set(listener, {
      type,
      eventTarget,
      fn,
      options
    });
    eventTarget.addEventListener(type, listener, options);
  }, []);
  let removeGlobalListener = (0, import_react9.useCallback)((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react9.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react9.useEffect)(() => {
    return removeAllGlobalListeners;
  }, [
    removeAllGlobalListeners
  ]);
  return {
    addGlobalListener,
    removeGlobalListener,
    removeAllGlobalListeners
  };
}
var $313b98861ee5dd6c$exports = {};
$parcel$export3($313b98861ee5dd6c$exports, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b44);
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $bdb11010cef70236$export$f680877a34711e37(id);
  if (labelledBy && label) {
    let ids = /* @__PURE__ */ new Set([
      ...labelledBy.trim().split(/\s+/),
      id
    ]);
    labelledBy = [
      ...ids
    ].join(" ");
  } else if (labelledBy)
    labelledBy = labelledBy.trim().split(/\s+/).join(" ");
  if (!label && !labelledBy && defaultLabel)
    label = defaultLabel;
  return {
    id,
    "aria-label": label,
    "aria-labelledby": labelledBy
  };
}
var $df56164dff5785e2$exports = {};
$parcel$export3($df56164dff5785e2$exports, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf666);
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react9.useRef)();
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!forwardedRef)
      return;
    if (typeof forwardedRef === "function")
      forwardedRef(objRef.current);
    else
      forwardedRef.current = objRef.current;
  }, [
    forwardedRef
  ]);
  return objRef;
}
var $4f58c5f72bcf79f7$exports = {};
$parcel$export3($4f58c5f72bcf79f7$exports, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d9602);
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
  const isInitialMount = (0, import_react9.useRef)(true);
  (0, import_react9.useEffect)(() => {
    if (isInitialMount.current)
      isInitialMount.current = false;
    else
      effect();
  }, dependencies);
}
var $9daab02d461809db$exports = {};
$parcel$export3($9daab02d461809db$exports, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea);
function $9daab02d461809db$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
  const { ref, onResize } = options;
  (0, import_react9.useEffect)(() => {
    let element = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!element)
      return;
    if (!$9daab02d461809db$var$hasResizeObserver()) {
      window.addEventListener("resize", onResize, false);
      return () => {
        window.removeEventListener("resize", onResize, false);
      };
    } else {
      const resizeObserverInstance = new window.ResizeObserver((entries) => {
        if (!entries.length)
          return;
        onResize();
      });
      resizeObserverInstance.observe(element);
      return () => {
        if (element)
          resizeObserverInstance.unobserve(element);
      };
    }
  }, [
    onResize,
    ref
  ]);
}
var $e7801be82b4b2a53$exports = {};
$parcel$export3($e7801be82b4b2a53$exports, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e);
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (context && context.ref && ref) {
      context.ref.current = ref.current;
      return () => {
        context.ref.current = null;
      };
    }
  }, [
    context,
    ref
  ]);
}
var $62d8ded9296f3872$exports = {};
$parcel$export3($62d8ded9296f3872$exports, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e87938781);
function $62d8ded9296f3872$export$cfa2225e87938781(node) {
  while (node && !$62d8ded9296f3872$var$isScrollable(node))
    node = node.parentElement;
  return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
var $5df64b3807dc15ee$exports = {};
$parcel$export3($5df64b3807dc15ee$exports, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca);
var $5df64b3807dc15ee$var$visualViewport = typeof window !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
  let [size1, setSize] = (0, import_react9.useState)(() => $5df64b3807dc15ee$var$getViewportSize());
  (0, import_react9.useEffect)(() => {
    let onResize = () => {
      setSize((size) => {
        let newSize = $5df64b3807dc15ee$var$getViewportSize();
        if (newSize.width === size.width && newSize.height === size.height)
          return size;
        return newSize;
      });
    };
    if (!$5df64b3807dc15ee$var$visualViewport)
      window.addEventListener("resize", onResize);
    else
      $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
    return () => {
      if (!$5df64b3807dc15ee$var$visualViewport)
        window.removeEventListener("resize", onResize);
      else
        $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
    };
  }, []);
  return size1;
}
function $5df64b3807dc15ee$var$getViewportSize() {
  return {
    width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
    height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
  };
}
var $ef06256079686ba0$exports = {};
$parcel$export3($ef06256079686ba0$exports, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa1);
var $ef06256079686ba0$var$descriptionId = 0;
var $ef06256079686ba0$var$descriptionNodes = /* @__PURE__ */ new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id1, setId] = (0, import_react9.useState)(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (!description)
      return;
    let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
    if (!desc) {
      let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
      setId(id);
      let node = document.createElement("div");
      node.id = id;
      node.style.display = "none";
      node.textContent = description;
      document.body.appendChild(node);
      desc = {
        refCount: 0,
        element: node
      };
      $ef06256079686ba0$var$descriptionNodes.set(description, desc);
    } else
      setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id1 : void 0
  };
}
var $c87311424ea30a05$exports = {};
$parcel$export3($c87311424ea30a05$exports, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea10);
$parcel$export3($c87311424ea30a05$exports, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d99);
$parcel$export3($c87311424ea30a05$exports, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e4224);
$parcel$export3($c87311424ea30a05$exports, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f1);
$parcel$export3($c87311424ea30a05$exports, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b);
$parcel$export3($c87311424ea30a05$exports, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a98);
$parcel$export3($c87311424ea30a05$exports, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e);
$parcel$export3($c87311424ea30a05$exports, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec8);
function $c87311424ea30a05$var$testUserAgent(re2) {
  var ref;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((ref = window.navigator["userAgentData"]) === null || ref === void 0 ? void 0 : ref.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re2) {
  return typeof window !== "undefined" && window.navigator != null ? re2.test((window.navigator["userAgentData"] || window.navigator).platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
  return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
  return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
  return $c87311424ea30a05$var$testPlatform(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
  return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
  return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
  return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
  return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
  return $c87311424ea30a05$var$testUserAgent(/Android/i);
}
var $e9faafb641e167db$exports = {};
$parcel$export3($e9faafb641e167db$exports, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c);
function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler1, options) {
  let handlerRef = (0, import_react9.useRef)(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  (0, import_react9.useEffect)(() => {
    if (isDisabled)
      return;
    let element = ref.current;
    let handler = (e6) => handlerRef.current.call(this, e6);
    element.addEventListener(event, handler, options);
    return () => {
      element.removeEventListener(event, handler, options);
    };
  }, [
    ref,
    event,
    options,
    isDisabled
  ]);
}
var $1dbecbe27a04f9af$exports = {};
$parcel$export3($1dbecbe27a04f9af$exports, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f25);
function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = (0, import_react9.useState)(defaultValue);
  let valueRef = (0, import_react9.useRef)(value);
  let effect = (0, import_react9.useRef)(null);
  valueRef.current = value;
  let nextRef = (0, import_react9.useRef)(null);
  nextRef.current = () => {
    let newValue = effect.current.next();
    if (newValue.done) {
      effect.current = null;
      return;
    }
    if (value === newValue.value)
      nextRef.current();
    else
      setValue(newValue.value);
  };
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    if (effect.current)
      nextRef.current();
  });
  let queue = (0, import_react9.useCallback)((fn) => {
    effect.current = fn(valueRef.current);
    nextRef.current();
  }, [
    effect,
    nextRef
  ]);
  return [
    value,
    queue
  ];
}
var $2f04cbc44ee30ce0$exports = {};
$parcel$export3($2f04cbc44ee30ce0$exports, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd);
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x4 = scrollView.scrollLeft;
  let y6 = scrollView.scrollTop;
  let maxX = x4 + scrollView.offsetWidth;
  let maxY = y6 + scrollView.offsetHeight;
  if (offsetX <= x4)
    x4 = offsetX;
  else if (offsetX + width > maxX)
    x4 += offsetX + width - maxX;
  if (offsetY <= y6)
    y6 = offsetY;
  else if (offsetY + height > maxY)
    y6 += offsetY + height - maxY;
  scrollView.scrollLeft = x4;
  scrollView.scrollTop = y6;
}
function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
  const prop = axis === "left" ? "offsetLeft" : "offsetTop";
  let sum = 0;
  while (child.offsetParent) {
    sum += child[prop];
    if (child.offsetParent === ancestor)
      break;
    else if (child.offsetParent.contains(ancestor)) {
      sum -= ancestor[prop];
      break;
    }
    child = child.offsetParent;
  }
  return sum;
}

// node_modules/@react-aria/interactions/dist/module.js
init_react();
var import_react10 = __toESM(require_react());
function $parcel$export4(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $3b117e43dc0ca95d$exports = {};
$parcel$export4($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);
var $f6c31cce2adf654f$exports = {};
$parcel$export4($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21);
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = /* @__PURE__ */ new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state === "default") {
      $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
      document.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state = "disabled";
  } else if (target) {
    $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f1()) {
    if ($14c0b72509d70225$var$state !== "disabled")
      return;
    $14c0b72509d70225$var$state = "restoring";
    setTimeout(() => {
      $bbed8b41f857bcc0$export$24490316f764c430(() => {
        if ($14c0b72509d70225$var$state === "restoring") {
          if (document.documentElement.style.webkitUserSelect === "none")
            document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
          $14c0b72509d70225$var$savedUserSelect = "";
          $14c0b72509d70225$var$state = "default";
        }
      });
    }, 300);
  } else if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
    let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
    if (target.style.userSelect === "none")
      target.style.userSelect = targetOldUserSelect;
    if (target.getAttribute("style") === "")
      target.removeAttribute("style");
    $14c0b72509d70225$var$modifiedElementMap.delete(target);
  }
}
function $8a9cb279dc87e130$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
var $8a9cb279dc87e130$export$905e7fc544a71f36 = class {
  isDefaultPrevented() {
    return this.nativeEvent.defaultPrevented;
  }
  preventDefault() {
    this.defaultPrevented = true;
    this.nativeEvent.preventDefault();
  }
  stopPropagation() {
    this.nativeEvent.stopPropagation();
    this.isPropagationStopped = () => true;
  }
  isPropagationStopped() {
    return false;
  }
  persist() {
  }
  constructor(type, nativeEvent) {
    this.nativeEvent = nativeEvent;
    this.target = nativeEvent.target;
    this.currentTarget = nativeEvent.currentTarget;
    this.relatedTarget = nativeEvent.relatedTarget;
    this.bubbles = nativeEvent.bubbles;
    this.cancelable = nativeEvent.cancelable;
    this.defaultPrevented = nativeEvent.defaultPrevented;
    this.eventPhase = nativeEvent.eventPhase;
    this.isTrusted = nativeEvent.isTrusted;
    this.timeStamp = nativeEvent.timeStamp;
    this.type = type;
  }
};
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
  let stateRef = (0, import_react10.useRef)({
    isFocused: false,
    onBlur,
    observer: null
  });
  let state1 = stateRef.current;
  state1.onBlur = onBlur;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    return () => {
      if (state1.observer) {
        state1.observer.disconnect();
        state1.observer = null;
      }
    };
  }, [
    state1
  ]);
  return (e1) => {
    if (e1.target instanceof HTMLButtonElement || e1.target instanceof HTMLInputElement || e1.target instanceof HTMLTextAreaElement || e1.target instanceof HTMLSelectElement) {
      state1.isFocused = true;
      let target = e1.target;
      let onBlurHandler = (e6) => {
        var ref;
        let state = stateRef.current;
        state.isFocused = false;
        if (target.disabled)
          (ref = state.onBlur) === null || ref === void 0 ? void 0 : ref.call(state, new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e6));
        if (state.observer) {
          state.observer.disconnect();
          state.observer = null;
        }
      };
      target.addEventListener("focusout", onBlurHandler, {
        once: true
      });
      state1.observer = new MutationObserver(() => {
        if (state1.isFocused && target.disabled) {
          state1.observer.disconnect();
          target.dispatchEvent(new FocusEvent("blur"));
          target.dispatchEvent(new FocusEvent("focusout", {
            bubbles: true
          }));
        }
      });
      state1.observer.observe(target, {
        attributes: true,
        attributeFilter: [
          "disabled"
        ]
      });
    }
  };
}
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = import_react10.default.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react10.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  if (context) {
    let { register, ...contextProps } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe928(contextProps, props);
    register();
  }
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
  let {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    isPressed: isPressedProp,
    preventFocusOnPress,
    shouldCancelOnPointerExit,
    allowTextSelectionOnPress,
    ref: _2,
    ...domProps
  } = $f6c31cce2adf654f$var$usePressResponderContext(props);
  let propsRef = (0, import_react10.useRef)(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = (0, import_react10.useState)(false);
  let ref = (0, import_react10.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let pressProps1 = (0, import_react10.useMemo)(() => {
    let state = ref.current;
    let triggerPressStart = (originalEvent, pointerType) => {
      let { onPressStart, onPressChange, isDisabled } = propsRef.current;
      if (isDisabled || state.didFirePressStart)
        return;
      if (onPressStart)
        onPressStart({
          type: "pressstart",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      if (onPressChange)
        onPressChange(true);
      state.didFirePressStart = true;
      setPressed(true);
    };
    let triggerPressEnd = (originalEvent, pointerType, wasPressed = true) => {
      let { onPressEnd, onPressChange, onPress, isDisabled } = propsRef.current;
      if (!state.didFirePressStart)
        return;
      state.ignoreClickAfterPress = true;
      state.didFirePressStart = false;
      if (onPressEnd)
        onPressEnd({
          type: "pressend",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      if (onPressChange)
        onPressChange(false);
      setPressed(false);
      if (onPress && wasPressed && !isDisabled)
        onPress({
          type: "press",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    let triggerPressUp = (originalEvent, pointerType) => {
      let { onPressUp, isDisabled } = propsRef.current;
      if (isDisabled)
        return;
      if (onPressUp)
        onPressUp({
          type: "pressup",
          pointerType,
          target: originalEvent.currentTarget,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    let cancel = (e6) => {
      if (state.isPressed) {
        if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
      }
    };
    let pressProps = {
      onKeyDown(e6) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e6.nativeEvent) && e6.currentTarget.contains(e6.target)) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e6.target))
            e6.preventDefault();
          e6.stopPropagation();
          if (!state.isPressed && !e6.repeat) {
            state.target = e6.currentTarget;
            state.isPressed = true;
            triggerPressStart(e6, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e6) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e6.nativeEvent) && !e6.repeat && e6.currentTarget.contains(e6.target))
          triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e6), "keyboard");
      },
      onClick(e6) {
        if (e6 && !e6.currentTarget.contains(e6.target))
          return;
        if (e6 && e6.button === 0) {
          e6.stopPropagation();
          if (isDisabled1)
            e6.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || $8a9cb279dc87e130$export$60278871457622de(e6.nativeEvent))) {
            if (!isDisabled1 && !preventFocusOnPress)
              $7215afc6de606d6b$export$de79e2c695e052f3(e6.currentTarget);
            triggerPressStart(e6, "virtual");
            triggerPressUp(e6, "virtual");
            triggerPressEnd(e6, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e6) => {
      if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e6)) {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e6.target))
          e6.preventDefault();
        e6.stopPropagation();
        state.isPressed = false;
        let target = e6.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")
          state.target.click();
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps.onPointerDown = (e6) => {
        if (e6.button !== 0 || !e6.currentTarget.contains(e6.target))
          return;
        if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e6.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e6.currentTarget))
          e6.preventDefault();
        state.pointerType = e6.pointerType;
        e6.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e6.pointerId;
          state.target = e6.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress)
            $7215afc6de606d6b$export$de79e2c695e052f3(e6.currentTarget);
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$16a4697467175487(state.target);
          triggerPressStart(e6, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps.onMouseDown = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        if (e6.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e6.currentTarget))
            e6.preventDefault();
          e6.stopPropagation();
        }
      };
      pressProps.onPointerUp = (e6) => {
        if (!e6.currentTarget.contains(e6.target) || state.pointerType === "virtual")
          return;
        if (e6.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e6, e6.currentTarget))
          triggerPressUp(e6, state.pointerType || e6.pointerType);
      };
      let onPointerMove = (e6) => {
        if (e6.pointerId !== state.activePointerId)
          return;
        if ($f6c31cce2adf654f$var$isOverTarget(e6, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e6);
        }
      };
      let onPointerUp = (e6) => {
        if (e6.pointerId === state.activePointerId && state.isPressed && e6.button === 0) {
          if ($f6c31cce2adf654f$var$isOverTarget(e6, state.target))
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType);
          else if (state.isOverTarget)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        }
      };
      let onPointerCancel = (e6) => {
        cancel(e6);
      };
      pressProps.onDragStart = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        cancel(e6);
      };
    } else {
      pressProps.onMouseDown = (e6) => {
        if (e6.button !== 0 || !e6.currentTarget.contains(e6.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e6.currentTarget))
          e6.preventDefault();
        e6.stopPropagation();
        if (state.ignoreEmulatedMouseEvents)
          return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e6.currentTarget;
        state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e6.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e6.currentTarget);
        triggerPressStart(e6, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps.onMouseEnter = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e6, state.pointerType);
        }
      };
      pressProps.onMouseLeave = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e6, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e6);
        }
      };
      pressProps.onMouseUp = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e6.button === 0)
          triggerPressUp(e6, state.pointerType);
      };
      let onMouseUp = (e6) => {
        if (e6.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($f6c31cce2adf654f$var$isOverTarget(e6, state.target))
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType);
        else if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e6), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps.onTouchStart = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e6.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e6.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e6.currentTarget);
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$16a4697467175487(state.target);
        triggerPressStart(e6, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps.onTouchMove = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e6.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e6.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e6, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e6, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e6);
        }
      };
      pressProps.onTouchEnd = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e6.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e6.currentTarget)) {
          triggerPressUp(e6, state.pointerType);
          triggerPressEnd(e6, state.pointerType);
        } else if (state.isOverTarget)
          triggerPressEnd(e6, state.pointerType, false);
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };
      pressProps.onTouchCancel = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        e6.stopPropagation();
        if (state.isPressed)
          cancel(e6);
      };
      let onScroll = (e6) => {
        if (state.isPressed && e6.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps.onDragStart = (e6) => {
        if (!e6.currentTarget.contains(e6.target))
          return;
        cancel(e6);
      };
    }
    return pressProps;
  }, [
    addGlobalListener,
    isDisabled1,
    preventFocusOnPress,
    removeAllGlobalListeners,
    allowTextSelectionOnPress
  ]);
  (0, import_react10.useEffect)(() => {
    return () => {
      if (!allowTextSelectionOnPress)
        $14c0b72509d70225$export$b0d6fa1ab32e3295(ref.current.target);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(domProps, pressProps1)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event) {
  const { key, code, target } = event;
  const element = target;
  const { tagName, isContentEditable } = element;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && !(role === "link" && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i6 = 0; i6 < changedTouches.length; i6++) {
    const touch = changedTouches[i6];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e6) {
  return {
    currentTarget: target,
    shiftKey: e6.shiftKey,
    ctrlKey: e6.ctrlKey,
    metaKey: e6.metaKey,
    altKey: e6.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a6, b2) {
  if (a6.left > b2.right || b2.left > a6.right)
    return false;
  if (a6.top > b2.bottom || b2.top > a6.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
  return !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target) {
  return !((target.tagName === "INPUT" || target.tagName === "BUTTON") && target.type === "submit");
}
function $f6c31cce2adf654f$var$isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = /* @__PURE__ */ import_react10.default.forwardRef(({ children, ...props }, ref) => {
  let newRef = (0, import_react10.useRef)();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    ...props,
    ref
  });
  let child = import_react10.default.Children.only(children);
  return /* @__PURE__ */ import_react10.default.cloneElement(child, {
    ref,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
  });
});
var $f1ab8c75478c6f73$exports = {};
$parcel$export4($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = /* @__PURE__ */ import_react10.default.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react10.useRef)(false);
  let prevContext = (0, import_react10.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
  let context = $3ef42575df84b30b$export$9d1611c77c2fe928(prevContext || {}, {
    ...props,
    ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(prevContext, ref);
  (0, import_react10.useEffect)(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ import_react10.default.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports = {};
$parcel$export4($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let onBlur;
  if (!props.isDisabled && (props.onBlur || props.onFocusChange))
    onBlur = (e6) => {
      if (e6.target === e6.currentTarget) {
        if (props.onBlur)
          props.onBlur(e6);
        if (props.onFocusChange)
          props.onFocusChange(false);
        return true;
      }
    };
  else
    onBlur = null;
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus;
  if (!props.isDisabled && (props.onFocus || props.onFocusChange || props.onBlur))
    onFocus = (e6) => {
      if (e6.target === e6.currentTarget) {
        if (props.onFocus)
          props.onFocus(e6);
        if (props.onFocusChange)
          props.onFocusChange(true);
        onSyntheticFocus(e6);
      }
    };
  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
var $507fabe10e71c6fb$exports = {};
$parcel$export4($507fabe10e71c6fb$exports, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db27);
$parcel$export4($507fabe10e71c6fb$exports, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a9);
$parcel$export4($507fabe10e71c6fb$exports, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a);
$parcel$export4($507fabe10e71c6fb$exports, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe);
$parcel$export4($507fabe10e71c6fb$exports, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d6);
$parcel$export4($507fabe10e71c6fb$exports, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec3);
var $507fabe10e71c6fb$var$currentModality = null;
var $507fabe10e71c6fb$var$changeHandlers = /* @__PURE__ */ new Set();
var $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e6) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e6);
}
function $507fabe10e71c6fb$var$isValidKey(e6) {
  return !(e6.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e6.altKey || e6.ctrlKey || e6.key === "Control" || e6.key === "Shift" || e6.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e6) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e6)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e6);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e6) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e6.type === "mousedown" || e6.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e6);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e6) {
  if ($8a9cb279dc87e130$export$60278871457622de(e6)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e6) {
  if (e6.target === window || e6.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e6);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
  if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners)
    return;
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
  document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
  window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
  window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  } else {
    document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
    document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
  }
  $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  else
    document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
  return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
  return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
  $507fabe10e71c6fb$var$currentModality = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  let [modality, setModality] = (0, import_react10.useState)($507fabe10e71c6fb$var$currentModality);
  (0, import_react10.useEffect)(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality);
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, []);
  return modality;
}
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e6) {
  return !(isTextInput && modality === "keyboard" && e6 instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e6.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
  let { isTextInput, autoFocus } = props;
  let [isFocusVisibleState, setFocusVisible] = (0, import_react10.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3(($507fabe10e71c6fb$export$b9b3dfddab17db272) => {
    setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db272);
  }, [
    isTextInput
  ], {
    isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents();
  (0, import_react10.useEffect)(() => {
    let handler = (modality, e6) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e6))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
    };
    $507fabe10e71c6fb$var$changeHandlers.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
var $9ab94262bd0047c7$exports = {};
$parcel$export4($9ab94262bd0047c7$exports, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec);
function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
  let state = (0, import_react10.useRef)({
    isFocusWithin: false
  }).current;
  let onBlur = props.isDisabled ? null : (e6) => {
    if (state.isFocusWithin && !e6.currentTarget.contains(e6.relatedTarget)) {
      state.isFocusWithin = false;
      if (props.onBlurWithin)
        props.onBlurWithin(e6);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(false);
    }
  };
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = props.isDisabled ? null : (e6) => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin)
        props.onFocusWithin(e6);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(true);
      state.isFocusWithin = true;
      onSyntheticFocus(e6);
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var $6179b936705e76d3$exports = {};
$parcel$export4($6179b936705e76d3$exports, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d456);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
var $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e6) {
  if (e6.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  $6179b936705e76d3$var$hoverCount++;
  return () => {
    $6179b936705e76d3$var$hoverCount--;
    if ($6179b936705e76d3$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react10.useState)(false);
  let state = (0, import_react10.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react10.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = (0, import_react10.useMemo)(() => {
    let triggerHoverStart = (event, pointerType) => {
      state.pointerType = pointerType;
      if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target))
        return;
      state.isHovered = true;
      let target = event.currentTarget;
      state.target = target;
      if (onHoverStart)
        onHoverStart({
          type: "hoverstart",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(true);
      setHovered(true);
    };
    let triggerHoverEnd = (event, pointerType) => {
      state.pointerType = "";
      state.target = null;
      if (pointerType === "touch" || !state.isHovered)
        return;
      state.isHovered = false;
      let target = event.currentTarget;
      if (onHoverEnd)
        onHoverEnd({
          type: "hoverend",
          target,
          pointerType
        });
      if (onHoverChange)
        onHoverChange(false);
      setHovered(false);
    };
    let hoverProps = {};
    if (typeof PointerEvent !== "undefined") {
      hoverProps.onPointerEnter = (e6) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e6.pointerType === "mouse")
          return;
        triggerHoverStart(e6, e6.pointerType);
      };
      hoverProps.onPointerLeave = (e6) => {
        if (!isDisabled && e6.currentTarget.contains(e6.target))
          triggerHoverEnd(e6, e6.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e6) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e6, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps.onMouseLeave = (e6) => {
        if (!isDisabled && e6.currentTarget.contains(e6.target))
          triggerHoverEnd(e6, "mouse");
      };
    }
    return {
      hoverProps,
      triggerHoverEnd
    };
  }, [
    onHoverStart,
    onHoverChange,
    onHoverEnd,
    isDisabled,
    state
  ]);
  (0, import_react10.useEffect)(() => {
    if (isDisabled)
      triggerHoverEnd1({
        currentTarget: state.target
      }, state.pointerType);
  }, [
    isDisabled
  ]);
  return {
    hoverProps: hoverProps1,
    isHovered
  };
}
var $e0b6e0b68ec7f50f$exports = {};
$parcel$export4($e0b6e0b68ec7f50f$exports, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff98);
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = (0, import_react10.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  (0, import_react10.useEffect)(() => {
    if (isDisabled)
      return;
    let onPointerDown = (e6) => {
      if ($e0b6e0b68ec7f50f$var$isValidEvent(e6, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart)
          state.onInteractOutsideStart(e6);
        state.isPointerDown = true;
      }
    };
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e6) => {
        if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e6, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e6);
        }
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      document.addEventListener("pointerup", onPointerUp, true);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown, true);
        document.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e6) => {
        if (state.ignoreEmulatedMouseEvents)
          state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e6, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e6);
        }
      };
      let onTouchEnd = (e6) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e6, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e6);
        }
      };
      document.addEventListener("mousedown", onPointerDown, true);
      document.addEventListener("mouseup", onMouseUp, true);
      document.addEventListener("touchstart", onPointerDown, true);
      document.addEventListener("touchend", onTouchEnd, true);
      return () => {
        document.removeEventListener("mousedown", onPointerDown, true);
        document.removeEventListener("mouseup", onMouseUp, true);
        document.removeEventListener("touchstart", onPointerDown, true);
        document.removeEventListener("touchend", onTouchEnd, true);
      };
    }
  }, [
    ref,
    state,
    isDisabled
  ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
  if (event.button > 0)
    return false;
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target))
      return false;
  }
  return ref.current && !ref.current.contains(event.target);
}
var $46d819fcbaf35654$exports = {};
$parcel$export4($46d819fcbaf35654$exports, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd);
function $93925083ecbb358c$export$48d1ea6320830260(handler) {
  if (!handler)
    return;
  let shouldStopPropagation = true;
  return (e6) => {
    let event = {
      ...e6,
      preventDefault() {
        e6.preventDefault();
      },
      isDefaultPrevented() {
        return e6.isDefaultPrevented();
      },
      stopPropagation() {
        console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
      },
      continuePropagation() {
        shouldStopPropagation = false;
      }
    };
    handler(event);
    if (shouldStopPropagation)
      e6.stopPropagation();
  };
}
function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $93925083ecbb358c$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}
var $e8a7022cf87cba2a$exports = {};
$parcel$export4($e8a7022cf87cba2a$exports, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f245);
function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
  let { onMoveStart, onMove, onMoveEnd } = props;
  let state = (0, import_react10.useRef)({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let moveProps1 = (0, import_react10.useMemo)(() => {
    let moveProps = {};
    let start = () => {
      $14c0b72509d70225$export$16a4697467175487();
      state.current.didMove = false;
    };
    let move = (originalEvent, pointerType, deltaX, deltaY) => {
      if (deltaX === 0 && deltaY === 0)
        return;
      if (!state.current.didMove) {
        state.current.didMove = true;
        onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
          type: "movestart",
          pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
      }
      onMove({
        type: "move",
        pointerType,
        deltaX,
        deltaY,
        shiftKey: originalEvent.shiftKey,
        metaKey: originalEvent.metaKey,
        ctrlKey: originalEvent.ctrlKey,
        altKey: originalEvent.altKey
      });
    };
    let end = (originalEvent, pointerType) => {
      $14c0b72509d70225$export$b0d6fa1ab32e3295();
      if (state.current.didMove)
        onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
          type: "moveend",
          pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    if (typeof PointerEvent === "undefined") {
      let onMouseMove = (e6) => {
        if (e6.button === 0) {
          move(e6, "mouse", e6.pageX - state.current.lastPosition.pageX, e6.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e6.pageX,
            pageY: e6.pageY
          };
        }
      };
      let onMouseUp = (e6) => {
        if (e6.button === 0) {
          end(e6, "mouse");
          removeGlobalListener(window, "mousemove", onMouseMove, false);
          removeGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      moveProps.onMouseDown = (e6) => {
        if (e6.button === 0) {
          start();
          e6.stopPropagation();
          e6.preventDefault();
          state.current.lastPosition = {
            pageX: e6.pageX,
            pageY: e6.pageY
          };
          addGlobalListener(window, "mousemove", onMouseMove, false);
          addGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      let onTouchMove = (e6) => {
        let touch = [
          ...e6.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          let { pageX, pageY } = e6.changedTouches[touch];
          move(e6, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };
      let onTouchEnd = (e6) => {
        let touch = [
          ...e6.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          end(e6, "touch");
          state.current.id = null;
          removeGlobalListener(window, "touchmove", onTouchMove);
          removeGlobalListener(window, "touchend", onTouchEnd);
          removeGlobalListener(window, "touchcancel", onTouchEnd);
        }
      };
      moveProps.onTouchStart = (e6) => {
        if (e6.changedTouches.length === 0 || state.current.id != null)
          return;
        let { pageX, pageY, identifier } = e6.changedTouches[0];
        start();
        e6.stopPropagation();
        e6.preventDefault();
        state.current.lastPosition = {
          pageX,
          pageY
        };
        state.current.id = identifier;
        addGlobalListener(window, "touchmove", onTouchMove, false);
        addGlobalListener(window, "touchend", onTouchEnd, false);
        addGlobalListener(window, "touchcancel", onTouchEnd, false);
      };
    } else {
      let onPointerMove = (e6) => {
        if (e6.pointerId === state.current.id) {
          let pointerType = e6.pointerType || "mouse";
          move(e6, pointerType, e6.pageX - state.current.lastPosition.pageX, e6.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e6.pageX,
            pageY: e6.pageY
          };
        }
      };
      let onPointerUp = (e6) => {
        if (e6.pointerId === state.current.id) {
          let pointerType = e6.pointerType || "mouse";
          end(e6, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
      moveProps.onPointerDown = (e6) => {
        if (e6.button === 0 && state.current.id == null) {
          start();
          e6.stopPropagation();
          e6.preventDefault();
          state.current.lastPosition = {
            pageX: e6.pageX,
            pageY: e6.pageY
          };
          state.current.id = e6.pointerId;
          addGlobalListener(window, "pointermove", onPointerMove, false);
          addGlobalListener(window, "pointerup", onPointerUp, false);
          addGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
    }
    let triggerKeyboardMove = (e6, deltaX, deltaY) => {
      start();
      move(e6, "keyboard", deltaX, deltaY);
      end(e6, "keyboard");
    };
    moveProps.onKeyDown = (e6) => {
      switch (e6.key) {
        case "Left":
        case "ArrowLeft":
          e6.preventDefault();
          e6.stopPropagation();
          triggerKeyboardMove(e6, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e6.preventDefault();
          e6.stopPropagation();
          triggerKeyboardMove(e6, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e6.preventDefault();
          e6.stopPropagation();
          triggerKeyboardMove(e6, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e6.preventDefault();
          e6.stopPropagation();
          triggerKeyboardMove(e6, 0, 1);
          break;
      }
    };
    return moveProps;
  }, [
    state,
    onMoveStart,
    onMove,
    onMoveEnd,
    addGlobalListener,
    removeGlobalListener
  ]);
  return {
    moveProps: moveProps1
  };
}
var $7d0a636d7a4dcefd$exports = {};
$parcel$export4($7d0a636d7a4dcefd$exports, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca);
function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
  let { onScroll, isDisabled } = props;
  let onScrollHandler = (0, import_react10.useCallback)((e6) => {
    if (e6.ctrlKey)
      return;
    e6.preventDefault();
    e6.stopPropagation();
    if (onScroll)
      onScroll({
        deltaX: e6.deltaX,
        deltaY: e6.deltaY
      });
  }, [
    onScroll
  ]);
  $e9faafb641e167db$export$90fc3a17d93f704c(ref, "wheel", isDisabled ? null : onScrollHandler);
}
var $8a26561d2877236e$exports = {};
$parcel$export4($8a26561d2877236e$exports, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab9);
var $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = (0, import_react10.useRef)(null);
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    isDisabled,
    onPressStart(e1) {
      if (e1.pointerType === "mouse" || e1.pointerType === "touch") {
        if (onLongPressStart)
          onLongPressStart({
            ...e1,
            type: "longpressstart"
          });
        timeRef.current = setTimeout(() => {
          e1.target.dispatchEvent(new PointerEvent("pointercancel", {
            bubbles: true
          }));
          if (onLongPress)
            onLongPress({
              ...e1,
              type: "longpress"
            });
          timeRef.current = null;
        }, threshold);
        if (e1.pointerType === "touch") {
          let onContextMenu = (e6) => {
            e6.preventDefault();
          };
          addGlobalListener(e1.target, "contextmenu", onContextMenu, {
            once: true
          });
          addGlobalListener(window, "pointerup", () => {
            setTimeout(() => {
              removeGlobalListener(e1.target, "contextmenu", onContextMenu);
            }, 30);
          }, {
            once: true
          });
        }
      }
    },
    onPressEnd(e6) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e6.pointerType === "mouse" || e6.pointerType === "touch"))
        onLongPressEnd({
          ...e6,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}

// node_modules/@nextui-org/react/esm/utils/dom.js
init_react();
var import_react11 = __toESM(require_react());
function canUseDOM() {
  return !(typeof window == "undefined" || !window.document || !window.document.createElement);
}
var isBrowser = canUseDOM();
function useDOMRef(r9) {
  const n2 = (0, import_react11.useRef)(null);
  return (0, import_react11.useImperativeHandle)(r9, () => n2.current), n2;
}

// node_modules/@nextui-org/react/esm/button/index.js
init_react();

// node_modules/@nextui-org/react/esm/button/button.js
init_react();
var import_react15 = __toESM(require_react());

// node_modules/@react-aria/focus/dist/module.js
init_react();
var import_react12 = __toESM(require_react());
function $parcel$export5(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $9bf71ea28793e738$exports = {};
$parcel$export5($9bf71ea28793e738$exports, "FocusScope", () => $9bf71ea28793e738$export$20e40289641fbbb6);
$parcel$export5($9bf71ea28793e738$exports, "useFocusManager", () => $9bf71ea28793e738$export$10c5169755ce7bd7);
$parcel$export5($9bf71ea28793e738$exports, "getFocusableTreeWalker", () => $9bf71ea28793e738$export$2d6ec8fc375ceafa);
$parcel$export5($9bf71ea28793e738$exports, "createFocusManager", () => $9bf71ea28793e738$export$c5251b9e124bf29);
var $6a99195332edec8b$exports = {};
$parcel$export5($6a99195332edec8b$exports, "focusSafely", () => $6a99195332edec8b$export$80f3e147d781571c);
function $6a99195332edec8b$export$80f3e147d781571c(element) {
  if ($507fabe10e71c6fb$export$630ff653c5ada6a9() === "virtual") {
    let lastFocusedElement = document.activeElement;
    $bbed8b41f857bcc0$export$24490316f764c430(() => {
      if (document.activeElement === lastFocusedElement && document.contains(element))
        $7215afc6de606d6b$export$de79e2c695e052f3(element);
    });
  } else
    $7215afc6de606d6b$export$de79e2c695e052f3(element);
}
function $645f2e67b85a24c9$var$isStyleVisible(element) {
  if (!(element instanceof HTMLElement) && !(element instanceof SVGElement))
    return false;
  let { display, visibility } = element.style;
  let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
  if (isVisible) {
    const { getComputedStyle: getComputedStyle2 } = element.ownerDocument.defaultView;
    let { display: computedDisplay, visibility: computedVisibility } = getComputedStyle2(element);
    isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
  }
  return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
  return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
  return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}
var $9bf71ea28793e738$var$FocusContext = /* @__PURE__ */ import_react12.default.createContext(null);
var $9bf71ea28793e738$var$activeScope = null;
var $9bf71ea28793e738$var$scopes = /* @__PURE__ */ new Map();
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
  let { children, contain, restoreFocus, autoFocus } = props;
  let startRef = (0, import_react12.useRef)();
  let endRef = (0, import_react12.useRef)();
  let scopeRef = (0, import_react12.useRef)([]);
  let ctx = (0, import_react12.useContext)($9bf71ea28793e738$var$FocusContext);
  let parentScope = ctx === null || ctx === void 0 ? void 0 : ctx.scopeRef;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let node = startRef.current.nextSibling;
    let nodes = [];
    while (node && node !== endRef.current) {
      nodes.push(node);
      node = node.nextSibling;
    }
    scopeRef.current = nodes;
  }, [
    children,
    parentScope
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    $9bf71ea28793e738$var$scopes.set(scopeRef, parentScope);
    return () => {
      if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$var$scopes.has(parentScope)))
        $9bf71ea28793e738$var$activeScope = parentScope;
      $9bf71ea28793e738$var$scopes.delete(scopeRef);
    };
  }, [
    scopeRef,
    parentScope
  ]);
  $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
  $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
  $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
  let focusManager = $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef);
  return /* @__PURE__ */ import_react12.default.createElement($9bf71ea28793e738$var$FocusContext.Provider, {
    value: {
      scopeRef,
      focusManager
    }
  }, /* @__PURE__ */ import_react12.default.createElement("span", {
    "data-focus-scope-start": true,
    hidden: true,
    ref: startRef
  }), children, /* @__PURE__ */ import_react12.default.createElement("span", {
    "data-focus-scope-end": true,
    hidden: true,
    ref: endRef
  }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
  var ref;
  return (ref = (0, import_react12.useContext)($9bf71ea28793e738$var$FocusContext)) === null || ref === void 0 ? void 0 : ref.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
  return {
    focusNext(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[0].previousElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
      }
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = {}) {
      let scope = scopeRef.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let sentinel = scope[scope.length - 1].nextElementSibling;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = sentinel;
        previousNode = walker.previousNode();
      }
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = scope[0].previousElementSibling;
      let nextNode = walker.nextNode();
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = {}) {
      let scope = scopeRef.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable
      }, scope);
      walker.currentNode = scope[scope.length - 1].nextElementSibling;
      let previousNode = walker.previousNode();
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    }
  };
}
var $9bf71ea28793e738$var$focusableElements = [
  "input:not([disabled]):not([type=hidden])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "button:not([disabled])",
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[contenteditable]"
];
var $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
var $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
  return scope[0].parentElement;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
  let focusedNode = (0, import_react12.useRef)();
  let raf = (0, import_react12.useRef)(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let scope1 = scopeRef.current;
    if (!contain)
      return;
    let onKeyDown = (e6) => {
      if (e6.key !== "Tab" || e6.altKey || e6.ctrlKey || e6.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope)
        return;
      let focusedElement = document.activeElement;
      let scope = scopeRef.current;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
      }, scope);
      walker.currentNode = focusedElement;
      let nextElement = e6.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nextElement) {
        walker.currentNode = e6.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
        nextElement = e6.shiftKey ? walker.previousNode() : walker.nextNode();
      }
      e6.preventDefault();
      if (nextElement)
        $9bf71ea28793e738$var$focusElement(nextElement, true);
    };
    let onFocus = (e6) => {
      if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = e6.target;
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e6.target, scopeRef)) {
        if (focusedNode.current)
          focusedNode.current.focus();
        else if ($9bf71ea28793e738$var$activeScope)
          $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope)
        focusedNode.current = e6.target;
    };
    let onBlur = (e6) => {
      raf.current = requestAnimationFrame(() => {
        if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          focusedNode.current = e6.target;
          focusedNode.current.focus();
        }
      });
    };
    document.addEventListener("keydown", onKeyDown, false);
    document.addEventListener("focusin", onFocus, false);
    scope1.forEach((element) => element.addEventListener("focusin", onFocus, false));
    scope1.forEach((element) => element.addEventListener("focusout", onBlur, false));
    return () => {
      document.removeEventListener("keydown", onKeyDown, false);
      document.removeEventListener("focusin", onFocus, false);
      scope1.forEach((element) => element.removeEventListener("focusin", onFocus, false));
      scope1.forEach((element) => element.removeEventListener("focusout", onBlur, false));
    };
  }, [
    scopeRef,
    contain
  ]);
  (0, import_react12.useEffect)(() => {
    return () => cancelAnimationFrame(raf.current);
  }, [
    raf
  ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
  for (let scope of $9bf71ea28793e738$var$scopes.keys()) {
    if ($9bf71ea28793e738$var$isElementInScope(element, scope.current))
      return true;
  }
  return false;
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
  return scope.some((node) => node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope) {
  for (let s7 of $9bf71ea28793e738$var$scopes.keys()) {
    if ((s7 === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s7)) && $9bf71ea28793e738$var$isElementInScope(element, s7.current))
      return true;
  }
  return false;
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
  let parent = $9bf71ea28793e738$var$scopes.get(scope);
  if (!parent)
    return false;
  if (parent === ancestor)
    return true;
  return $9bf71ea28793e738$var$isAncestorScope(ancestor, parent);
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
  if (element != null && !scroll)
    try {
      $6a99195332edec8b$export$80f3e147d781571c(element);
    } catch (err) {
    }
  else if (element != null)
    try {
      element.focus();
    } catch (err1) {
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope) {
  let sentinel = scope[0].previousElementSibling;
  let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
    tabbable: true
  }, scope);
  walker.currentNode = sentinel;
  $9bf71ea28793e738$var$focusElement(walker.nextNode());
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
  const autoFocusRef = import_react12.default.useRef(autoFocus);
  (0, import_react12.useEffect)(() => {
    if (autoFocusRef.current) {
      $9bf71ea28793e738$var$activeScope = scopeRef;
      if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current))
        $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
    }
    autoFocusRef.current = false;
  }, []);
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
  const nodeToRestoreRef = (0, import_react12.useRef)(typeof document !== "undefined" ? document.activeElement : null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c(() => {
    let nodeToRestore = nodeToRestoreRef.current;
    if (!restoreFocus)
      return;
    let onKeyDown = (e6) => {
      if (e6.key !== "Tab" || e6.altKey || e6.ctrlKey || e6.metaKey)
        return;
      let focusedElement = document.activeElement;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
        tabbable: true
      });
      walker.currentNode = focusedElement;
      let nextElement = e6.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body)
        nodeToRestore = null;
      if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;
        do
          nextElement = e6.shiftKey ? walker.previousNode() : walker.nextNode();
        while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
        e6.preventDefault();
        e6.stopPropagation();
        if (nextElement)
          $9bf71ea28793e738$var$focusElement(nextElement, true);
        else if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore))
          focusedElement.blur();
        else
          $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
      }
    };
    if (!contain)
      document.addEventListener("keydown", onKeyDown, true);
    return () => {
      if (!contain)
        document.removeEventListener("keydown", onKeyDown, true);
      if (restoreFocus && nodeToRestore && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current))
        requestAnimationFrame(() => {
          if (document.body.contains(nodeToRestore))
            $9bf71ea28793e738$var$focusElement(nodeToRestore);
        });
    };
  }, [
    scopeRef,
    restoreFocus,
    contain
  ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
  let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
  let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode(node) {
      var ref;
      if (opts === null || opts === void 0 ? void 0 : (ref = opts.from) === null || ref === void 0 ? void 0 : ref.contains(node))
        return NodeFilter.FILTER_REJECT;
      if (node.matches(selector) && $645f2e67b85a24c9$export$e989c0fffaa6b27a(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)))
        return NodeFilter.FILTER_ACCEPT;
      return NodeFilter.FILTER_SKIP;
    }
  });
  if (opts === null || opts === void 0 ? void 0 : opts.from)
    walker.currentNode = opts.from;
  return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref) {
  return {
    focusNext(opts = {}) {
      let root = ref.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable
      });
      if (root.contains(node))
        walker.currentNode = node;
      let nextNode = walker.nextNode();
      if (!nextNode && wrap) {
        walker.currentNode = root;
        nextNode = walker.nextNode();
      }
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusPrevious(opts = {}) {
      let root = ref.current;
      let { from, tabbable, wrap } = opts;
      let node = from || document.activeElement;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable
      });
      if (root.contains(node))
        walker.currentNode = node;
      else {
        let next = $9bf71ea28793e738$var$last(walker);
        if (next)
          $9bf71ea28793e738$var$focusElement(next, true);
        return next;
      }
      let previousNode = walker.previousNode();
      if (!previousNode && wrap) {
        walker.currentNode = root;
        previousNode = $9bf71ea28793e738$var$last(walker);
      }
      if (previousNode)
        $9bf71ea28793e738$var$focusElement(previousNode, true);
      return previousNode;
    },
    focusFirst(opts = {}) {
      let root = ref.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable
      });
      let nextNode = walker.nextNode();
      if (nextNode)
        $9bf71ea28793e738$var$focusElement(nextNode, true);
      return nextNode;
    },
    focusLast(opts = {}) {
      let root = ref.current;
      let { tabbable } = opts;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
        tabbable
      });
      let next = $9bf71ea28793e738$var$last(walker);
      if (next)
        $9bf71ea28793e738$var$focusElement(next, true);
      return next;
    }
  };
}
function $9bf71ea28793e738$var$last(walker) {
  let next;
  let last;
  do {
    last = walker.lastChild();
    if (last)
      next = last;
  } while (last);
  return next;
}
var $907718708eab68af$exports = {};
$parcel$export5($907718708eab68af$exports, "FocusRing", () => $907718708eab68af$export$1a38b4ad7f578e1d);
var $f7dceffc5ad7768b$exports = {};
$parcel$export5($f7dceffc5ad7768b$exports, "useFocusRing", () => $f7dceffc5ad7768b$export$4e328f61c538687f);
function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
  let { autoFocus = false, isTextInput, within } = props;
  let state = (0, import_react12.useRef)({
    isFocused: false,
    isFocusVisible: autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27()
  }).current;
  let [isFocused1, setFocused] = (0, import_react12.useState)(false);
  let [isFocusVisibleState, setFocusVisible] = (0, import_react12.useState)(() => state.isFocused && state.isFocusVisible);
  let updateState = () => setFocusVisible(state.isFocused && state.isFocusVisible);
  let onFocusChange = (isFocused) => {
    state.isFocused = isFocused;
    setFocused(isFocused);
    updateState();
  };
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible) => {
    state.isFocusVisible = isFocusVisible;
    updateState();
  }, [], {
    isTextInput
  });
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6({
    isDisabled: within,
    onFocusChange
  });
  let { focusWithinProps } = $9ab94262bd0047c7$export$420e68273165f4ec({
    isDisabled: !within,
    onFocusWithinChange: onFocusChange
  });
  return {
    isFocused: isFocused1,
    isFocusVisible: state.isFocused && isFocusVisibleState,
    focusProps: within ? focusWithinProps : focusProps
  };
}
function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
  let { children, focusClass, focusRingClass } = props;
  let { isFocused, isFocusVisible, focusProps } = $f7dceffc5ad7768b$export$4e328f61c538687f(props);
  let child = import_react12.default.Children.only(children);
  return /* @__PURE__ */ import_react12.default.cloneElement(child, $3ef42575df84b30b$export$9d1611c77c2fe928(child.props, {
    ...focusProps,
    className: clsx_m_default({
      [focusClass || ""]: isFocused,
      [focusRingClass || ""]: isFocusVisible
    })
  }));
}
var $e6afbd83fe6ebbd2$exports = {};
$parcel$export5($e6afbd83fe6ebbd2$exports, "FocusableProvider", () => $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5);
$parcel$export5($e6afbd83fe6ebbd2$exports, "useFocusable", () => $e6afbd83fe6ebbd2$export$4c014de7c8940b4c);
var $e6afbd83fe6ebbd2$var$FocusableContext = /* @__PURE__ */ import_react12.default.createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
  let context = (0, import_react12.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref);
  let { ref: _2, ...otherProps } = context;
  return otherProps;
}
function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
  let { children, ...otherProps } = props;
  let context = {
    ...otherProps,
    ref
  };
  return /* @__PURE__ */ import_react12.default.createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
    value: context
  }, children);
}
var $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /* @__PURE__ */ import_react12.default.forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
  let { focusProps } = $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props);
  let { keyboardProps } = $46d819fcbaf35654$export$8f71654801c2f7cd(props);
  let interactions = $3ef42575df84b30b$export$9d1611c77c2fe928(focusProps, keyboardProps);
  let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
  let interactionProps = props.isDisabled ? {} : domProps;
  let autoFocusRef = (0, import_react12.useRef)(props.autoFocus);
  (0, import_react12.useEffect)(() => {
    if (autoFocusRef.current && domRef.current)
      $6a99195332edec8b$export$80f3e147d781571c(domRef.current);
    autoFocusRef.current = false;
  }, [
    domRef
  ]);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}

// node_modules/@react-aria/button/dist/module.js
init_react();
function $parcel$export6(e6, n2, v3, s7) {
  Object.defineProperty(e6, n2, { get: v3, set: s7, enumerable: true, configurable: true });
}
var $701a24aa0da5b062$exports = {};
$parcel$export6($701a24aa0da5b062$exports, "useButton", () => $701a24aa0da5b062$export$ea18c227d4417cc3);
function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
  let {
    elementType = "button",
    isDisabled,
    onPress,
    onPressStart,
    onPressEnd,
    onPressChange,
    preventFocusOnPress,
    allowFocusWhenDisabled,
    onClick: deprecatedOnClick,
    href,
    target,
    rel,
    type = "button"
  } = props;
  let additionalProps;
  if (elementType === "button")
    additionalProps = {
      type,
      disabled: isDisabled
    };
  else
    additionalProps = {
      role: "button",
      tabIndex: isDisabled ? void 0 : 0,
      href: elementType === "a" && isDisabled ? void 0 : href,
      target: elementType === "a" ? target : void 0,
      type: elementType === "input" ? type : void 0,
      disabled: elementType === "input" ? isDisabled : void 0,
      "aria-disabled": !isDisabled || elementType === "input" ? void 0 : isDisabled,
      rel: elementType === "a" ? rel : void 0
    };
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad21({
    onPressStart,
    onPressEnd,
    onPressChange,
    onPress,
    isDisabled,
    preventFocusOnPress,
    ref
  });
  let { focusableProps } = $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, ref);
  if (allowFocusWhenDisabled)
    focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe928(focusableProps, pressProps, $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, {
    labelable: true
  }));
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e6) => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e6);
          console.warn("onClick is deprecated, please use onPress");
        }
      }
    })
  };
}
var $55f54f7887471b58$exports = {};
$parcel$export6($55f54f7887471b58$exports, "useToggleButton", () => $55f54f7887471b58$export$51e84d46ca0bc451);
function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
  const { isSelected } = state;
  const { isPressed, buttonProps } = $701a24aa0da5b062$export$ea18c227d4417cc3({
    ...props,
    onPress: $ff5963eb1fccf552$export$e08e3b67e392101e(state.toggle, props.onPress)
  }, ref);
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe928(buttonProps, {
      "aria-pressed": isSelected
    })
  };
}

// node_modules/@nextui-org/react/esm/button/utils.js
init_react();
var filterPropsWithGroup = (e6, o11) => {
  var r9, t13, n2, l6, d4, a6, i6, s7, g4, u5, b2;
  return o11.isButtonGroup ? { ...e6, auto: true, shadow: false, bordered: (r9 = o11.bordered) != null ? r9 : e6.bordered, borderWeight: (t13 = o11.borderWeight) != null ? t13 : e6.borderWeight, ghost: (n2 = o11.ghost) != null ? n2 : e6.ghost, ripple: (l6 = o11.ripple) != null ? l6 : e6.ripple, flat: (d4 = o11.flat) != null ? d4 : e6.flat, animated: (a6 = o11.animated) != null ? a6 : e6.animated, rounded: (i6 = o11.rounded) != null ? i6 : e6.rounded, light: (s7 = o11.light) != null ? s7 : e6.light, size: (g4 = o11.size) != null ? g4 : e6.size, color: (u5 = o11.color) != null ? u5 : e6.color, disabled: (b2 = o11.disabled) != null ? b2 : e6.disabled } : e6;
};
var getCssColors = (e6) => {
  if (!e6.disabled)
    return e6.auto && e6.color === "gradient" && (e6.bordered || e6.ghost) ? { px: "$$buttonBorderWeight", py: "$$buttonBorderWeight" } : {};
  const o11 = { bg: "$accents1", color: "$accents7", transform: "none", boxShadow: "none", pe: "none" };
  return e6.bordered || e6.flat || e6.ghost || e6.light ? e6.color === "gradient" && (e6.bordered || e6.ghost) ? { color: "$accents4", backgroundImage: "linear-gradient($background, $background), linear-gradient($accents2, $accents2)", transform: "none", boxShadow: "none", pe: "none", pl: "$$buttonBorderWeight", pr: "$$buttonBorderWeight" } : e6.bordered || e6.ghost || e6.light ? { ...o11, bg: "transparent", borderColor: "$accents4" } : e6.flat ? { ...o11, bg: "$accents1" } : {} : o11;
};

// node_modules/@nextui-org/react/esm/button/button-group-context.js
init_react();
var import_react13 = __toESM(require_react());
var o3 = { isButtonGroup: false, disabled: false };
var ButtonGroupContext = import_react13.default.createContext(o3);
var useButtonGroupContext = () => import_react13.default.useContext(ButtonGroupContext);

// node_modules/@nextui-org/react/esm/button/button-icon.js
init_react();
var import_react14 = __toESM(require_react());
var import_jsx_runtime2 = __toESM(require_jsx_runtime());
var StyledButtonIcon = styled("span", { dflex: "center", position: "absolute", left: "$$buttonPadding", right: "auto", top: "50%", transform: "translateY(-50%)", color: "inherit", zIndex: "$1", "& svg": { background: "transparent" }, variants: { isAuto: { true: { position: "relative", transform: "none", top: "0%" } }, isRight: { true: { right: "$$buttonPadding", left: "auto" } }, isSingle: { true: { position: "static", transform: "none" } }, isGradientButtonBorder: { true: {} } }, compoundVariants: [{ isAuto: true, isRight: true, isSingle: false, css: { order: 2, ml: "$$buttonPadding", right: "0%", left: "0%" } }, { isAuto: true, isRight: false, isSingle: false, css: { order: 0, mr: "$$buttonPadding", right: "0%", left: "0%" } }, { isSingle: true, isRight: false, css: { ml: 0 } }, { isSingle: true, isRight: true, css: { mr: 0 } }, { isSingle: true, isRight: false, isGradientButtonBorder: true, css: { mr: "$$buttonPadding" } }] });
var e4 = ({ children: t13, className: i6, ...n2 }) => (0, import_jsx_runtime2.jsx)(StyledButtonIcon, { className: clsx_default("nextui-button-icon", { "nextui-button-icon-right": n2.isRight, "nextui-button-icon-single": n2.isSingle }, i6), ...n2, children: t13 });
e4.toString = () => ".nextui-button-icon";
var r3 = import_react14.default.memo(e4);
var button_icon_default = with_defaults_default(r3, { className: "" });

// node_modules/@nextui-org/react/esm/button/button.styles.js
init_react();
var StyledButton = styled("button", { $$buttonBorderRadius: "$radii$md", $$buttonPressedScale: 0.97, dflex: "center", appearance: "none", boxSizing: "border-box", fontWeight: "$medium", us: "none", lineHeight: "$sm", ta: "center", whiteSpace: "nowrap", transition: "$button", position: "relative", overflow: "hidden", border: "none", cursor: "pointer", pe: "auto", p: 0, br: "$$buttonBorderRadius", "@motion": { transition: "none" }, ".nextui-button-text": { dflex: "center", zIndex: "$2", "p, pre, div": { margin: 0 } }, [`& ${StyledDrip}`]: { zIndex: "$1", ".nextui-drip-filler": { opacity: 0.25, fill: "$accents2" } }, variants: { bordered: { true: { bg: "transparent", borderStyle: "solid", color: "$text" } }, ghost: { true: {} }, color: { default: { bg: "$primary", color: "$primarySolidContrast" }, primary: { bg: "$primary", color: "$primarySolidContrast" }, secondary: { bg: "$secondary", color: "$secondarySolidContrast" }, success: { bg: "$success", color: "$successSolidContrast" }, warning: { bg: "$warning", color: "$warningSolidContrast" }, error: { bg: "$error", color: "$errorSolidContrast" }, gradient: { bg: "$gradient", color: "$primarySolidContrast" } }, size: { xs: { $$buttonPadding: "$space$3", $$buttonBorderRadius: "$radii$xs", px: "$3", height: "$10", lh: "$space$10", width: "auto", minWidth: "$20", fontSize: "$tiny" }, sm: { $$buttonPadding: "$space$5", $$buttonBorderRadius: "$radii$sm", px: "$5", height: "$12", lh: "$space$14", width: "auto", minWidth: "$36", fontSize: "$xs" }, md: { $$buttonPadding: "$space$7", $$buttonBorderRadius: "$radii$md", px: "$7", height: "$14", lh: "$space$14", width: "auto", minWidth: "$48", fontSize: "$xs" }, lg: { $$buttonPadding: "$space$9", $$buttonBorderRadius: "$radii$base", px: "$9", height: "$15", lh: "$space$15", width: "auto", minWidth: "$60", fontSize: "$base" }, xl: { $$buttonPadding: "$space$10", $$buttonBorderRadius: "$radii$xl", px: "$10", height: "$17", lh: "$space$17", width: "auto", minWidth: "$72", fontSize: "$sm" } }, borderWeight: { light: { bw: "$light", $$buttonBorderWeight: "$borderWeights$light" }, normal: { bw: "$normal", $$buttonBorderWeight: "$borderWeights$normal" }, bold: { bw: "$bold", $$buttonBorderWeight: "$borderWeights$bold" }, extrabold: { bw: "$extrabold", $$buttonBorderWeight: "$borderWeights$extrabold" }, black: { bw: "$black", $$buttonBorderWeight: "$borderWeights$black" } }, flat: { true: { color: "$text" } }, light: { true: { bg: "transparent", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$accents2" } } } }, shadow: { true: { bs: "$sm" } }, animated: { false: { transition: "none" } }, auto: { true: { width: "auto", minWidth: "min-content" } }, rounded: { true: { $$buttonBorderRadius: "$radii$pill" } }, isPressed: { true: {} }, isHovered: { true: {} } }, compoundVariants: [{ isPressed: true, animated: true, css: { transform: "scale($$buttonPressedScale)" } }, { auto: true, size: "xs", css: { px: "$5", minWidth: "min-content" } }, { auto: true, size: "sm", css: { px: "$8", minWidth: "min-content" } }, { auto: true, size: "md", css: { px: "$9", minWidth: "min-content" } }, { auto: true, size: "lg", css: { px: "$10", minWidth: "min-content" } }, { auto: true, size: "xl", css: { px: "$11", minWidth: "min-content" } }, { shadow: true, color: "default", css: { normalShadow: "$primaryShadow" } }, { shadow: true, color: "primary", css: { normalShadow: "$primaryShadow" } }, { shadow: true, color: "secondary", css: { normalShadow: "$secondaryShadow" } }, { shadow: true, color: "warning", css: { normalShadow: "$warningShadow" } }, { shadow: true, color: "success", css: { normalShadow: "$successShadow" } }, { shadow: true, color: "error", css: { normalShadow: "$errorShadow" } }, { shadow: true, color: "gradient", css: { normalShadow: "$primaryShadow" } }, { light: true, color: "default", css: { bg: "transparent", color: "$text", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$primaryLightActive" } } } }, { light: true, color: "primary", css: { bg: "transparent", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$primaryLightActive" } } } }, { light: true, color: "secondary", css: { bg: "transparent", color: "$secondary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$secondaryLightActive" } } } }, { light: true, color: "warning", css: { bg: "transparent", color: "$warning", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$warningLightActive" } } } }, { light: true, color: "success", css: { bg: "transparent", color: "$success", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$successLightActive" } } } }, { light: true, color: "error", css: { bg: "transparent", color: "$error", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$errorLightActive" } } } }, { bordered: true, color: "default", css: { bg: "transparent", borderColor: "$primary", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$primary" } } } }, { bordered: true, color: "primary", css: { bg: "transparent", borderColor: "$primary", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$primary" } } } }, { bordered: true, color: "secondary", css: { bg: "transparent", borderColor: "$secondary", color: "$secondary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$secondary" } } } }, { bordered: true, color: "success", css: { bg: "transparent", borderColor: "$success", color: "$success", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$success" } } } }, { bordered: true, color: "warning", css: { bg: "transparent", borderColor: "$warning", color: "$warning", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$warning" } } } }, { bordered: true, color: "error", css: { bg: "transparent", borderColor: "$error", color: "$error", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$error" } } } }, { bordered: true, color: "gradient", css: { bg: "transparent", color: "$text", padding: "$$buttonBorderWeight", bgClip: "content-box, border-box", borderColor: "$primary", backgroundImage: "linear-gradient($background, $background), $gradient", border: "none", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$secondary" } } } }, { ghost: true, isHovered: true, color: "default", css: { bg: "$primary", color: "$primarySolidContrast" } }, { ghost: true, isHovered: true, color: "primary", css: { bg: "$primary", color: "$primarySolidContrast" } }, { ghost: true, isHovered: true, color: "secondary", css: { bg: "$secondary", color: "$secondarySolidContrast" } }, { ghost: true, isHovered: true, color: "success", css: { bg: "$success", color: "$successSolidContrast" } }, { ghost: true, isHovered: true, color: "warning", css: { bg: "$warning", color: "$warningSolidContrast" } }, { ghost: true, isHovered: true, color: "error", css: { bg: "$error", color: "$errorSolidContrast" } }, { ghost: true, color: "gradient", isHovered: true, css: { bg: "$gradient", color: "$white" } }, { flat: true, color: "default", css: { bg: "$primaryLight", color: "$primaryLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$primary" } } } }, { flat: true, color: "primary", css: { bg: "$primaryLight", color: "$primaryLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$primary" } } } }, { flat: true, color: "secondary", css: { bg: "$secondaryLight", color: "$secondaryLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$secondary" } } } }, { flat: true, color: "success", css: { bg: "$successLight", color: "$successLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$success" } } } }, { flat: true, color: "warning", css: { bg: "$warningLight", color: "$warningLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$warning" } } } }, { flat: true, color: "error", css: { bg: "$errorLight", color: "$errorLightContrast", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$error" } } } }, { flat: true, isHovered: true, color: "default", css: { bg: "$primaryLightHover" } }, { flat: true, isHovered: true, color: "primary", css: { bg: "$primaryLightHover" } }, { flat: true, isHovered: true, color: "secondary", css: { bg: "$secondaryLightHover" } }, { flat: true, isHovered: true, color: "success", css: { bg: "$successLightHover" } }, { flat: true, isHovered: true, color: "warning", css: { bg: "$warningLightHover" } }, { flat: true, isHovered: true, color: "error", css: { bg: "$errorLightHover" } }, { flat: true, isPressed: true, color: "default", css: { bg: "$primaryLightActive" } }, { flat: true, isPressed: true, color: "primary", css: { bg: "$primaryLightActive" } }, { flat: true, isPressed: true, color: "secondary", css: { bg: "$secondaryLightActive" } }, { flat: true, isPressed: true, color: "success", css: { bg: "$successLightActive" } }, { flat: true, isPressed: true, color: "warning", css: { bg: "$warningLightActive" } }, { flat: true, isPressed: true, color: "error", css: { bg: "$errorLightActive" } }, { auto: true, color: "gradient", bordered: true, css: { ".nextui-button-text": { px: "$$buttonPadding" }, ".nextui-button-icon": { ml: "$$buttonPadding" }, ".nextui-button-icon-right": { mr: "$$buttonPadding" }, ".nextui-button-text-left": { pl: 0 }, ".nextui-button-text-right": { pr: 0 } } }, { rounded: true, size: "xs", css: { br: "$pill" } }, { rounded: true, size: "sm", css: { br: "$pill" } }, { rounded: true, size: "md", css: { br: "$pill" } }, { rounded: true, size: "lg", css: { br: "$pill" } }, { rounded: true, size: "xl", css: { br: "$pill" } }], defaultVariants: { color: "default", borderWeight: "normal", animated: true, size: "md" } }, cssFocusVisible);
var button_styles_default = StyledButton;

// node_modules/@nextui-org/react/esm/button/button.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime());
var import_jsx_runtime4 = __toESM(require_jsx_runtime());
var import_jsx_runtime5 = __toESM(require_jsx_runtime());
var F2 = import_react15.default.forwardRef(({ onClick: b2, onPress: F4, as: N3, css: P3, ...B2 }, j3) => {
  const w3 = useButtonGroupContext(), k3 = filterPropsWithGroup(B2, w3), C3 = getCssColors(k3), { flat: R4, children: S2, disabled: T4, animated: A2, light: D2, ripple: G2, bordered: H4, auto: U3, borderWeight: V3, icon: W2, iconRight: I3, ghost: $2, autoFocus: q2, className: z2, ...E3 } = k3, J2 = (t13) => {
    A2 && G2 && K2.current && _2(t13);
  }, K2 = useDOMRef(j3), { buttonProps: L3, isPressed: M2 } = $701a24aa0da5b062$export$ea18c227d4417cc3({ ...B2, onClick: (t13) => {
    J2(t13), b2 == null || b2(t13);
  }, isDisabled: T4, elementType: N3, onPress: (t13) => {
    t13.pointerType !== "keyboard" && t13.pointerType !== "virtual" || (J2(t13), b2 == null || b2(t13)), F4 == null || F4(t13);
  } }, K2), { hoverProps: O2, isHovered: Q2 } = $6179b936705e76d3$export$ae780daf29e6d456({ isDisabled: T4 }), { isFocused: X2, isFocusVisible: Y3, focusProps: Z3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: q2 }), { onClick: _2, ...tt } = use_drip_default2(false, K2);
  __DEV__ && k3.color === "gradient" && (R4 || D2) && use_warning_default2("Using the gradient color on flat and light buttons will have no effect.");
  const ot = W2 || I3, rt = Boolean(I3), et = (0, import_react15.useMemo)(() => M2 ? "pressed" : Q2 ? "hovered" : T4 ? "disabled" : "ready", [T4, Q2, M2]);
  return (0, import_jsx_runtime5.jsxs)(button_styles_default, { as: N3, ref: K2, borderWeight: V3, auto: U3, flat: R4, light: D2, ghost: $2, bordered: H4 || $2, "data-state": et, animated: A2, isPressed: M2, isHovered: Q2 || $2 && X2, isFocusVisible: Y3 && !T4, className: clsx_default("nextui-button", `nextui-button--${et}`, z2), css: { ...P3, ...C3 }, ...$3ef42575df84b30b$export$9d1611c77c2fe928(L3, Z3, O2, E3), children: [import_react15.default.Children.count(S2) === 0 ? (0, import_jsx_runtime3.jsx)(button_icon_default, { isSingle: true, isAuto: U3, isRight: rt, isGradientButtonBorder: E3.color === "gradient" && (H4 || $2), children: ot }) : ot ? (0, import_jsx_runtime5.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime3.jsx)(button_icon_default, { isSingle: false, isAuto: U3, isRight: rt, isGradientButtonBorder: E3.color === "gradient" && (H4 || $2), children: ot }), (0, import_jsx_runtime3.jsx)("div", { className: clsx_default("nextui-button-text", { "nextui-button-text-right": rt, "nextui-button-text-left": !rt }), children: S2 })] }) : (0, import_jsx_runtime3.jsx)("span", { className: "nextui-button-text", children: S2 }), (0, import_jsx_runtime3.jsx)(drip_default, { color: "white", ...tt })] });
});
__DEV__ && (F2.displayName = "NextUI.Button"), F2.toString = () => ".nextui-button";
var button_default = with_defaults_default(F2, { ghost: false, bordered: false, ripple: true, animated: true, disabled: false, autoFocus: false, auto: false, className: "", type: "button" });

// node_modules/@nextui-org/react/esm/button/button-group.js
init_react();
var import_react16 = __toESM(require_react());

// node_modules/@nextui-org/react/esm/button/button-group.styles.js
init_react();
var StyledButtonGroup = styled("div", { display: "inline-flex", margin: "$3", backgroundColor: "transparent", height: "min-content", [`& ${button_styles_default}`]: { ".nextui-button-text": { top: 0 } }, variants: { vertical: { true: { fd: "column", [`& ${button_styles_default}`]: { "&:not(:first-child)": { btlr: 0, btrr: 0 }, "&:not(:last-child)": { bblr: 0, bbrr: 0 } } }, false: { fd: "row", [`& ${button_styles_default}`]: { "&:not(:first-child)": { btlr: 0, bblr: 0 }, "&:not(:last-child)": { btrr: 0, bbrr: 0 } } } }, size: { xs: { br: "$xs" }, sm: { br: "$sm" }, md: { br: "$md" }, lg: { br: "$base" }, xl: { br: "$xl" } }, rounded: { true: { br: "$pill" } }, bordered: { true: { bg: "transparent" } }, gradient: { true: { pl: 0 } } }, defaultVariants: { vertical: false }, compoundVariants: [{ bordered: true, vertical: true, css: { [`& ${button_styles_default}`]: { "&:not(:last-child)": { borderBottom: "none", paddingBottom: "0" } } } }, { bordered: true, vertical: false, css: { [`& ${button_styles_default}`]: { "&:not(:first-child)": { borderLeft: "none" } } } }, { bordered: true, vertical: false, gradient: true, css: { [`& ${button_styles_default}`]: { "&:not(:last-child)&:not(:first-child)": { pl: 0 }, "&:last-child": { pl: 0 } } } }] });
var button_group_styles_default = StyledButtonGroup;

// node_modules/@nextui-org/react/esm/button/button-group.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime());
var a3 = (o11) => {
  const { disabled: t13, size: a6, color: l6, bordered: n2, ghost: s7, light: u5, flat: m4, shadow: p3, auto: c5, animated: g4, rounded: h4, ripple: b2, borderWeight: f4, children: x4, ...z2 } = o11, w3 = (0, import_react16.useMemo)(() => ({ disabled: t13, size: a6, color: l6, bordered: n2, light: u5, ghost: s7, flat: m4, shadow: p3, auto: c5, borderWeight: f4, animated: g4, rounded: h4, ripple: b2, isButtonGroup: true }), [t13, g4, a6, b2, l6, n2, u5, s7, m4, f4]);
  return (0, import_jsx_runtime6.jsx)(ButtonGroupContext.Provider, { value: w3, children: (0, import_jsx_runtime6.jsx)(button_group_styles_default, { size: a6, bordered: n2 || s7, gradient: o11.color === "gradient", ...z2, children: x4 }) });
};
a3.toString = () => ".nextui-button-group";
var l2 = import_react16.default.memo(a3);
var button_group_default = with_defaults_default(l2, { borderWeight: "normal", size: "md", color: "default" });

// node_modules/@nextui-org/react/esm/button/index.js
button_default.Group = button_group_default;
var button_default2 = button_default;

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var React5 = __toESM(require_react());

// app/components/ExternalLinkButton/ExternalLinkButton.css
var ExternalLinkButton_default = "/build/_assets/ExternalLinkButton-HSYTIT2Y.css";

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: ExternalLinkButton_default
  }
];
var ExternalLinkButton = (props) => {
  const children = typeof props.children === "string" ? /* @__PURE__ */ React5.createElement("span", null, props.children) : props.children;
  return /* @__PURE__ */ React5.createElement("a", {
    ...props.linkProps,
    href: props.to,
    className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm"
  }, /* @__PURE__ */ React5.createElement(button_default2, {
    auto: true,
    ghost: true,
    rounded: true,
    color: "gradient",
    role: "link",
    name: props.accessibilityName,
    "aria-label": props.accessibilityName,
    tabIndex: -1,
    className: "ExternalLinkButton__Button"
  }, React5.cloneElement(children, {
    ...children.props,
    className: "ExternalLinkButton__ButtonContents relative inline-flex",
    children: /* @__PURE__ */ React5.createElement(React5.Fragment, null, children.props.children, /* @__PURE__ */ React5.createElement("div", {
      className: "relative flex items-center"
    }, /* @__PURE__ */ React5.createElement(ExternalLinkSvg, null)))
  })));
};
var ExternalLinkSvg = () => {
  return /* @__PURE__ */ React5.createElement("svg", {
    fill: "none",
    height: "20",
    stroke: "currentColor",
    strokeLinecap: "square",
    strokeLinejoin: "inherit",
    strokeWidth: "1",
    viewBox: "0 0 24 24",
    width: "20",
    xmlns: "http://www.w3.org/2000/svg",
    className: "ExternalLinkButton__Icon absolute"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};
var ExternalLinkButton_default2 = ExternalLinkButton;

// app/sections/AboutMe/AboutMe.tsx
init_react();
var React12 = __toESM(require_react());

// app/sections/AboutMe/AboutMe.css
var AboutMe_default = "/build/_assets/AboutMe-KOROGJM3.css";

// app/sections/AboutMe/MyStory.tsx
init_react();
var React6 = __toESM(require_react());
var MyStory = ({}) => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "my-story-wrapper flex flex-col items-baseline w-full text-textSmColor"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "my-story-title reveal-text text-textLgColor leading-none margin-top:50 relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
  }, "\xDCber Uns"), /* @__PURE__ */ React6.createElement("div", {
    className: "fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "my-4 text-xl xs:mb-10 sm:w-4/5 leading-20 text-text-SmColor"
  }, "Seit Jahren betreiben und entwickeln wir einzigartige Shopify Stores. Durch Design \xFCberzeugend und durch Analytics best\xE4tigt: E-Commerce Development f\xFCr h\xF6chste Anspr\xFCche. "), /* @__PURE__ */ React6.createElement(Globe, null)), /* @__PURE__ */ React6.createElement("div", {
    className: "spacer-div mb-15 sm:mb-15"
  }), /* @__PURE__ */ React6.createElement(MyselfCard, null), /* @__PURE__ */ React6.createElement("div", {
    className: "spacer-div mb-10 sm:mb-5"
  }), /* @__PURE__ */ React6.createElement(MyselfCard2, null));
};
var MyStory_default = MyStory;
var MyselfCard = () => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React6.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Neuen Shop entwickeln"), /* @__PURE__ */ React6.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Wir analysieren Ihre Bed\xFCrfnisse und erstellen in enger Absprache Ihren einzigarten Online Store. Auch bei der Migration von anderen Plattformen zu Shopify helfen wir unseren Kunden."), /* @__PURE__ */ React6.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React6.createElement("img", {
    src: "/images/HelloBelloLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React6.createElement(button_default2, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Projekt Ansehen"))));
};
var MyselfCard2 = () => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React6.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Bestehenden Store optimieren"), /* @__PURE__ */ React6.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Shopify Development liegt in unserer Natur. Sowohl komplexe Automation von Bestellprozessen als auch die Erstellung von Private Apps: Devato ist Ihr Ansprechpartner."), /* @__PURE__ */ React6.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React6.createElement("img", {
    src: "/images/UnimalsLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React6.createElement(button_default2, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Zur Case Study"))));
};

// app/sections/AboutMe/Titles.tsx
init_react();
var React7 = __toESM(require_react());
var Titles = ({}) => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "title-content text-aboutMe-aboutMeText"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "title-content__container inline-flex overflow-hidden font-semibold items-center"
  }, /* @__PURE__ */ React7.createElement("h1", {
    className: "hidden"
  }, "Wir sind Software Engineers, Marketing Experten, Designer und Process Engineers."), /* @__PURE__ */ React7.createElement("p", {
    className: "title-content__container__text m-0  inline-flex"
  }, "Wir sind"), /* @__PURE__ */ React7.createElement("span", {
    className: "blinker"
  }, "["), /* @__PURE__ */ React7.createElement("ul", {
    className: "title-content__container__list text-center list-none"
  }, /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Software Developer"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shopify Experten"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shop Designer"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "E-Commerce Spezialisten")), /* @__PURE__ */ React7.createElement("span", {
    className: "blinker"
  }, "]")));
};
var Titles_default = Titles;

// app/sections/AboutMe/Hi.tsx
init_react();
var React8 = __toESM(require_react());
var import_use_typewriter_hook = __toESM(require_use_typewriter_hook());
var Hi = () => {
  const targetText = "Dein Partner f\xFCr Shopify\u{1F6CD}\uFE0F ";
  const { textValue: typedText, wrapperClassName } = (0, import_use_typewriter_hook.useTypewriter)({
    targetText,
    autoStartDelay: 400,
    typingDelayMillis: 70
  });
  const stringToSearch = "Shopify";
  const startIndex = targetText.indexOf(stringToSearch);
  const endIndex = startIndex + stringToSearch.length;
  const fragments = splitTargetText(typedText, startIndex, endIndex);
  return /* @__PURE__ */ React8.createElement("span", {
    className: "font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-aboutMe-aboutMeText",
    "aria-live": "polite",
    "aria-label": "Wir sind Devato"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: ""
  }, "Hi, wir sind"), /* @__PURE__ */ React8.createElement("span", null, " ")), /* @__PURE__ */ React8.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }), /* @__PURE__ */ React8.createElement("span", {
    className: "inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: `${wrapperClassName}`
  }, fragments)));
};
var Hi_default = Hi;
var splitTargetText = (str, startIndex, endIndex) => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("span", {
    className: "inline-block"
  }, str.slice(0, startIndex)), /* @__PURE__ */ React8.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React8.createElement("span", {
    className: "custom-typewriter-text",
    style: customStyle
  }, str.slice(startIndex, endIndex))), /* @__PURE__ */ React8.createElement("span", {
    className: "inline-block"
  }, str.slice(endIndex, str.length)));
};

// app/sections/AboutMe/Facts.tsx
init_react();
var React9 = __toESM(require_react());

// node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
init_react();
var import_react19 = __toESM(require_react(), 1);
var t8 = typeof window != "undefined" ? import_react19.useLayoutEffect : import_react19.useEffect;

// node_modules/@headlessui/react/dist/hooks/use-latest-value.js
init_react();
var import_react20 = __toESM(require_react(), 1);
function s4(e6) {
  let r9 = (0, import_react20.useRef)(e6);
  return t8(() => {
    r9.current = e6;
  }, [e6]), r9;
}

// node_modules/@headlessui/react/dist/hooks/use-event.js
init_react();
var import_react21 = __toESM(require_react(), 1);
var o6 = function(t13) {
  let e6 = s4(t13);
  return import_react21.default.useCallback((...r9) => e6.current(...r9), [e6]);
};

// node_modules/@headlessui/react/dist/hooks/use-id.js
init_react();
var import_react23 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
init_react();
var import_react22 = __toESM(require_react(), 1);
var r5 = { serverHandoffComplete: false };
function a5() {
  let [e6, f4] = (0, import_react22.useState)(r5.serverHandoffComplete);
  return (0, import_react22.useEffect)(() => {
    e6 !== true && f4(true);
  }, [e6]), (0, import_react22.useEffect)(() => {
    r5.serverHandoffComplete === false && (r5.serverHandoffComplete = true);
  }, []), e6;
}

// node_modules/@headlessui/react/dist/hooks/use-id.js
var u2;
var l3 = 0;
function r6() {
  return ++l3;
}
var I2 = (u2 = import_react23.default.useId) != null ? u2 : function() {
  let n2 = a5(), [e6, o11] = import_react23.default.useState(n2 ? r6 : null);
  return t8(() => {
    e6 === null && o11(r6());
  }, [e6]), e6 != null ? "" + e6 : void 0;
};

// node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
init_react();
var import_react24 = __toESM(require_react(), 1);
function i3(t13) {
  var n2;
  if (t13.type)
    return t13.type;
  let e6 = (n2 = t13.as) != null ? n2 : "button";
  if (typeof e6 == "string" && e6.toLowerCase() === "button")
    return "button";
}
function s5(t13, e6) {
  let [n2, u5] = (0, import_react24.useState)(() => i3(t13));
  return t8(() => {
    u5(i3(t13));
  }, [t13.type, t13.as]), t8(() => {
    n2 || !e6.current || e6.current instanceof HTMLButtonElement && !e6.current.hasAttribute("type") && u5("button");
  }, [n2, e6]), n2;
}

// node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
init_react();
var import_react25 = __toESM(require_react(), 1);
var u3 = Symbol();
function T2(t13, n2 = true) {
  return Object.assign(t13, { [u3]: n2 });
}
function y3(...t13) {
  let n2 = (0, import_react25.useRef)(t13);
  (0, import_react25.useEffect)(() => {
    n2.current = t13;
  }, [t13]);
  let c5 = o6((e6) => {
    for (let o11 of n2.current)
      o11 != null && (typeof o11 == "function" ? o11(e6) : o11.current = e6);
  });
  return t13.every((e6) => e6 == null || (e6 == null ? void 0 : e6[u3])) ? void 0 : c5;
}

// node_modules/@headlessui/react/dist/utils/owner.js
init_react();
function t12(n2) {
  return typeof window == "undefined" ? null : n2 instanceof Node ? n2.ownerDocument : n2 != null && n2.hasOwnProperty("current") && n2.current instanceof Node ? n2.current.ownerDocument : document;
}

// node_modules/@headlessui/react/dist/utils/render.js
init_react();
var import_react26 = __toESM(require_react(), 1);

// node_modules/@headlessui/react/dist/utils/match.js
init_react();
function u4(r9, n2, ...a6) {
  if (r9 in n2) {
    let e6 = n2[r9];
    return typeof e6 == "function" ? e6(...a6) : e6;
  }
  let t13 = new Error(`Tried to handle "${r9}" but there is no handler defined. Only defined handlers are: ${Object.keys(n2).map((e6) => `"${e6}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(t13, u4), t13;
}

// node_modules/@headlessui/react/dist/utils/render.js
var x3 = ((n2) => (n2[n2.None = 0] = "None", n2[n2.RenderStrategy = 1] = "RenderStrategy", n2[n2.Static = 2] = "Static", n2))(x3 || {});
var R2 = ((e6) => (e6[e6.Unmount = 0] = "Unmount", e6[e6.Hidden = 1] = "Hidden", e6))(R2 || {});
function _({ ourProps: r9, theirProps: t13, slot: e6, defaultTag: n2, features: a6, visible: s7 = true, name: l6 }) {
  let o11 = y4(t13, r9);
  if (s7)
    return f3(o11, e6, n2, l6);
  let u5 = a6 != null ? a6 : 0;
  if (u5 & 2) {
    let { static: i6 = false, ...d4 } = o11;
    if (i6)
      return f3(d4, e6, n2, l6);
  }
  if (u5 & 1) {
    let { unmount: i6 = true, ...d4 } = o11;
    return u4(i6 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return f3({ ...d4, hidden: true, style: { display: "none" } }, e6, n2, l6);
    } });
  }
  return f3(o11, e6, n2, l6);
}
function f3(r9, t13 = {}, e6, n2) {
  let { as: a6 = e6, children: s7, refName: l6 = "ref", ...o11 } = m3(r9, ["unmount", "static"]), u5 = r9.ref !== void 0 ? { [l6]: r9.ref } : {}, i6 = typeof s7 == "function" ? s7(t13) : s7;
  o11.className && typeof o11.className == "function" && (o11.className = o11.className(t13));
  let d4 = {};
  if (a6 === import_react26.Fragment && Object.keys(T3(o11)).length > 0) {
    if (!(0, import_react26.isValidElement)(i6) || Array.isArray(i6) && i6.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n2} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(o11).map((p3) => `  - ${p3}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p3) => `  - ${p3}`).join(`
`)].join(`
`));
    return (0, import_react26.cloneElement)(i6, Object.assign({}, y4(i6.props, T3(m3(o11, ["ref"]))), d4, u5));
  }
  return (0, import_react26.createElement)(a6, Object.assign({}, m3(o11, ["ref"]), a6 !== import_react26.Fragment && u5, a6 !== import_react26.Fragment && d4), i6);
}
function y4(...r9) {
  var n2;
  if (r9.length === 0)
    return {};
  if (r9.length === 1)
    return r9[0];
  let t13 = {}, e6 = {};
  for (let a6 of r9)
    for (let s7 in a6)
      s7.startsWith("on") && typeof a6[s7] == "function" ? ((n2 = e6[s7]) != null || (e6[s7] = []), e6[s7].push(a6[s7])) : t13[s7] = a6[s7];
  if (t13.disabled || t13["aria-disabled"])
    return Object.assign(t13, Object.fromEntries(Object.keys(e6).map((a6) => [a6, void 0])));
  for (let a6 in e6)
    Object.assign(t13, { [a6](s7) {
      let l6 = e6[a6];
      for (let o11 of l6) {
        if (s7.defaultPrevented)
          return;
        o11(s7);
      }
    } });
  return t13;
}
function H2(r9) {
  var t13;
  return Object.assign((0, import_react26.forwardRef)(r9), { displayName: (t13 = r9.displayName) != null ? t13 : r9.name });
}
function T3(r9) {
  let t13 = Object.assign({}, r9);
  for (let e6 in t13)
    t13[e6] === void 0 && delete t13[e6];
  return t13;
}
function m3(r9, t13 = []) {
  let e6 = Object.assign({}, r9);
  for (let n2 of t13)
    n2 in e6 && delete e6[n2];
  return e6;
}

// node_modules/@headlessui/react/dist/utils/bugs.js
init_react();
function r7(n2) {
  let e6 = n2.parentElement, l6 = null;
  for (; e6 && !(e6 instanceof HTMLFieldSetElement); )
    e6 instanceof HTMLLegendElement && (l6 = e6), e6 = e6.parentElement;
  let t13 = (e6 == null ? void 0 : e6.getAttribute("disabled")) === "";
  return t13 && i5(l6) ? false : t13;
}
function i5(n2) {
  if (!n2)
    return false;
  let e6 = n2.previousElementSibling;
  for (; e6 !== null; ) {
    if (e6 instanceof HTMLLegendElement)
      return false;
    e6 = e6.previousElementSibling;
  }
  return true;
}

// node_modules/@headlessui/react/dist/internal/open-closed.js
init_react();
var import_react27 = __toESM(require_react(), 1);
var o9 = (0, import_react27.createContext)(null);
o9.displayName = "OpenClosedContext";
var p2 = ((e6) => (e6[e6.Open = 0] = "Open", e6[e6.Closed = 1] = "Closed", e6))(p2 || {});
function s6() {
  return (0, import_react27.useContext)(o9);
}
function C2({ value: t13, children: n2 }) {
  return import_react27.default.createElement(o9.Provider, { value: t13 }, n2);
}

// node_modules/@headlessui/react/dist/components/keyboard.js
init_react();
var o10 = ((r9) => (r9.Space = " ", r9.Enter = "Enter", r9.Escape = "Escape", r9.Backspace = "Backspace", r9.Delete = "Delete", r9.ArrowLeft = "ArrowLeft", r9.ArrowUp = "ArrowUp", r9.ArrowRight = "ArrowRight", r9.ArrowDown = "ArrowDown", r9.Home = "Home", r9.End = "End", r9.PageUp = "PageUp", r9.PageDown = "PageDown", r9.Tab = "Tab", r9))(o10 || {});

// node_modules/@headlessui/react/dist/components/disclosure/disclosure.js
init_react();
var import_react28 = __toESM(require_react(), 1);
var Q = ((o11) => (o11[o11.Open = 0] = "Open", o11[o11.Closed = 1] = "Closed", o11))(Q || {});
var V2 = ((l6) => (l6[l6.ToggleDisclosure = 0] = "ToggleDisclosure", l6[l6.CloseDisclosure = 1] = "CloseDisclosure", l6[l6.SetButtonId = 2] = "SetButtonId", l6[l6.SetPanelId = 3] = "SetPanelId", l6[l6.LinkPanel = 4] = "LinkPanel", l6[l6.UnlinkPanel = 5] = "UnlinkPanel", l6))(V2 || {});
var X = { [0]: (e6) => ({ ...e6, disclosureState: u4(e6.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e6) => e6.disclosureState === 1 ? e6 : { ...e6, disclosureState: 1 }, [4](e6) {
  return e6.linkedPanel === true ? e6 : { ...e6, linkedPanel: true };
}, [5](e6) {
  return e6.linkedPanel === false ? e6 : { ...e6, linkedPanel: false };
}, [2](e6, t13) {
  return e6.buttonId === t13.buttonId ? e6 : { ...e6, buttonId: t13.buttonId };
}, [3](e6, t13) {
  return e6.panelId === t13.panelId ? e6 : { ...e6, panelId: t13.panelId };
} };
var h3 = (0, import_react28.createContext)(null);
h3.displayName = "DisclosureContext";
function H3(e6) {
  let t13 = (0, import_react28.useContext)(h3);
  if (t13 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, H3), o11;
  }
  return t13;
}
var U2 = (0, import_react28.createContext)(null);
U2.displayName = "DisclosureAPIContext";
function K(e6) {
  let t13 = (0, import_react28.useContext)(U2);
  if (t13 === null) {
    let o11 = new Error(`<${e6} /> is missing a parent <Disclosure /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(o11, K), o11;
  }
  return t13;
}
var w2 = (0, import_react28.createContext)(null);
w2.displayName = "DisclosurePanelContext";
function Y2() {
  return (0, import_react28.useContext)(w2);
}
function Z2(e6, t13) {
  return u4(t13.type, X, e6, t13);
}
var ee = import_react28.Fragment;
var te = H2(function(t13, o11) {
  let { defaultOpen: n2 = false, ...s7 } = t13, i6 = `headlessui-disclosure-button-${I2()}`, l6 = `headlessui-disclosure-panel-${I2()}`, u5 = (0, import_react28.useRef)(null), D2 = y3(o11, T2((f4) => {
    u5.current = f4;
  }, t13.as === void 0 || t13.as === import_react28.default.Fragment)), P3 = (0, import_react28.useRef)(null), m4 = (0, import_react28.useRef)(null), p3 = (0, import_react28.useReducer)(Z2, { disclosureState: n2 ? 0 : 1, linkedPanel: false, buttonRef: m4, panelRef: P3, buttonId: i6, panelId: l6 }), [{ disclosureState: a6 }, c5] = p3;
  (0, import_react28.useEffect)(() => c5({ type: 2, buttonId: i6 }), [i6, c5]), (0, import_react28.useEffect)(() => c5({ type: 3, panelId: l6 }), [l6, c5]);
  let T4 = o6((f4) => {
    c5({ type: 1 });
    let A2 = t12(u5);
    if (!A2)
      return;
    let I3 = (() => f4 ? f4 instanceof HTMLElement ? f4 : f4.current instanceof HTMLElement ? f4.current : A2.getElementById(i6) : A2.getElementById(i6))();
    I3 == null || I3.focus();
  }), C3 = (0, import_react28.useMemo)(() => ({ close: T4 }), [T4]), r9 = (0, import_react28.useMemo)(() => ({ open: a6 === 0, close: T4 }), [a6, T4]), d4 = { ref: D2 };
  return import_react28.default.createElement(h3.Provider, { value: p3 }, import_react28.default.createElement(U2.Provider, { value: C3 }, import_react28.default.createElement(C2, { value: u4(a6, { [0]: p2.Open, [1]: p2.Closed }) }, _({ ourProps: d4, theirProps: s7, slot: r9, defaultTag: ee, name: "Disclosure" }))));
});
var ne = "button";
var le = H2(function(t13, o11) {
  let [n2, s7] = H3("Disclosure.Button"), i6 = Y2(), l6 = i6 === null ? false : i6 === n2.panelId, u5 = (0, import_react28.useRef)(null), D2 = y3(u5, o11, l6 ? null : n2.buttonRef), P3 = o6((r9) => {
    var d4;
    if (l6) {
      if (n2.disclosureState === 1)
        return;
      switch (r9.key) {
        case o10.Space:
        case o10.Enter:
          r9.preventDefault(), r9.stopPropagation(), s7({ type: 0 }), (d4 = n2.buttonRef.current) == null || d4.focus();
          break;
      }
    } else
      switch (r9.key) {
        case o10.Space:
        case o10.Enter:
          r9.preventDefault(), r9.stopPropagation(), s7({ type: 0 });
          break;
      }
  }), m4 = o6((r9) => {
    switch (r9.key) {
      case o10.Space:
        r9.preventDefault();
        break;
    }
  }), p3 = o6((r9) => {
    var d4;
    r7(r9.currentTarget) || t13.disabled || (l6 ? (s7({ type: 0 }), (d4 = n2.buttonRef.current) == null || d4.focus()) : s7({ type: 0 }));
  }), a6 = (0, import_react28.useMemo)(() => ({ open: n2.disclosureState === 0 }), [n2]), c5 = s5(t13, u5), T4 = t13, C3 = l6 ? { ref: D2, type: c5, onKeyDown: P3, onClick: p3 } : { ref: D2, id: n2.buttonId, type: c5, "aria-expanded": t13.disabled ? void 0 : n2.disclosureState === 0, "aria-controls": n2.linkedPanel ? n2.panelId : void 0, onKeyDown: P3, onKeyUp: m4, onClick: p3 };
  return _({ ourProps: C3, theirProps: T4, slot: a6, defaultTag: ne, name: "Disclosure.Button" });
});
var oe = "div";
var re = x3.RenderStrategy | x3.Static;
var se = H2(function(t13, o11) {
  let [n2, s7] = H3("Disclosure.Panel"), { close: i6 } = K("Disclosure.Panel"), l6 = y3(o11, n2.panelRef, () => {
    n2.linkedPanel || s7({ type: 4 });
  }), u5 = s6(), D2 = (() => u5 !== null ? u5 === p2.Open : n2.disclosureState === 0)();
  (0, import_react28.useEffect)(() => () => s7({ type: 5 }), [s7]), (0, import_react28.useEffect)(() => {
    var a6;
    n2.disclosureState === 1 && ((a6 = t13.unmount) != null ? a6 : true) && s7({ type: 5 });
  }, [n2.disclosureState, t13.unmount, s7]);
  let P3 = (0, import_react28.useMemo)(() => ({ open: n2.disclosureState === 0, close: i6 }), [n2, i6]), m4 = t13, p3 = { ref: l6, id: n2.panelId };
  return import_react28.default.createElement(w2.Provider, { value: n2.panelId }, _({ ourProps: p3, theirProps: m4, slot: P3, defaultTag: oe, features: re, visible: D2, name: "Disclosure.Panel" }));
});
var ke = Object.assign(te, { Button: le, Panel: se });

// app/sections/AboutMe/Facts.tsx
var Facts = ({}) => {
  const { theme: theme2 } = useTheme();
  return /* @__PURE__ */ React9.createElement("div", {
    className: "Mobile__Facts__Wrapper"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "Mobile__Facts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8"
  }, "So unterst\xFCtzen wir unsere Kunden")), /* @__PURE__ */ React9.createElement("div", {
    className: `Mobile__FactCards w-full rounded-2xl w-full mx-auto bg-transparent text-lg grid grid-rows-8 gap-2`
  }, facts.map((fact) => /* @__PURE__ */ React9.createElement(FactCard, {
    key: fact.description,
    theme: theme2,
    title: fact.title,
    description: fact.description,
    image: fact.image,
    color: fact.color,
    imageAlt: `Image to illustrate ${fact.title}`
  }))));
};
var Facts_default = Facts;
var FactCard = (props) => {
  const className = props.theme === "light" /* LIGHT */ ? `text-${props.color}-900 bg-${props.color}-100 hover:bg-${props.color}-200 focus-visible:ring-${props.color}-500` : `text-${props.color}-100 bg-${props.color}-900 hover:bg-${props.color}-700 focus-visible:ring-${props.color}-500`;
  const descriptionText = props.theme === "light" /* LIGHT */ ? "text-gray-600" : "text-gray-300";
  return /* @__PURE__ */ React9.createElement(ke, null, ({ open }) => /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(ke.Button, {
    className: `Mobile__FactCard__Title__Btn flex justify-between items-center w-full px-4 py-2 font-medium text-left rounded-lg ${className} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`,
    name: open ? "close" : "open"
  }, /* @__PURE__ */ React9.createElement("span", null, props.title), /* @__PURE__ */ React9.createElement(ChevronDownIcon_default, {
    className: `${open ? "transform rotate-180" : ""} w-5 h-5 text-${props.color}-500`
  })), /* @__PURE__ */ React9.createElement(ke.Panel, {
    className: "px-4 pt-4 pb-2 text-gray-500 flex flex-row items-center justify-start text-base"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: descriptionText
  }, props.description), /* @__PURE__ */ React9.createElement("img", {
    src: props.image,
    alt: props.imageAlt,
    title: props.imageAlt,
    className: "Mobile__FactCard__Image ml-2 object-cover w-32 rounded-lg"
  }))));
};

// app/sections/AboutMe/Testimonials.tsx
init_react();
var React10 = __toESM(require_react());
var Testimonials = ({}) => {
  return /* @__PURE__ */ React10.createElement("div", {
    className: "partner"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "container mx-auto px-6 space-y-8 md:px-12"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "m-auto text-center "
  }, /* @__PURE__ */ React10.createElement("h2", {
    className: "text-2xl text-textSmColor font-bold md:text-4xl"
  }, "Development Partner und Unternehmen")), /* @__PURE__ */ React10.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-md"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React10.createElement("img", {
    src: "images/cloud.png",
    className: "w-100",
    alt: ""
  })), /* @__PURE__ */ React10.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React10.createElement("img", {
    src: "images/partner.png",
    className: "w-180 mt-10",
    alt: ""
  })), /* @__PURE__ */ React10.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React10.createElement("img", {
    src: "images/plus.png",
    className: "w-100 mt-10",
    alt: ""
  })), /* @__PURE__ */ React10.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React10.createElement("img", {
    src: "images/aws.png",
    className: "w-50 mt-3",
    alt: ""
  })))));
};
var Testimonials_default = Testimonials;

// app/sections/AboutMe/Services.tsx
init_react();
var React11 = __toESM(require_react());
var Services = () => {
  return /* @__PURE__ */ React11.createElement("section", {
    className: "pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "flex flex-wrap -mx-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "w-full px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "text-center mx-auto mb-12 text-textSmColor lg:mb-20 max-w-[510px]"
  }, /* @__PURE__ */ React11.createElement("span", {
    className: "font-semibold text-lg text-primary mb-2 block"
  }, "Unsere Services"), /* @__PURE__ */ React11.createElement("h2", {
    className: "\n                  font-bold\n                  text-3xl\n                  sm:text-4xl\n                  md:text-[40px]\n                  mb-4\n                  text-textSmColor\n                  "
  }, "Angebote f\xFCr Unternehmen"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-base text-body-color text-text-SmColor"
  }, "Durch das Management eigener Shopify Stores mit einem Bestellvolumen von mehr als 10.000 Produkten monatlich k\xF6nnen wir Ihnen Services bieten die Sie wirklich ben\xF6tigen.")))), /* @__PURE__ */ React11.createElement("div", {
    className: "flex flex-wrap -mx-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z",
    fill: "white"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Custom Shopify Store"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Anhand Ihrer Vorstellungen und Ziele bauen wir einen personalisierten Shopify Store f\xFCr Sie und richten Ihre Produkte oder Dienstleistungen ein."))), /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "39",
    height: "22",
    viewBox: "0 0 39 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("mask", {
    id: "path-1-inside-1",
    fill: "white"
  }, /* @__PURE__ */ React11.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044C9.95552 6.62552 10.2264 6.7705 10.3756 6.61355C12.182 4.7134 14.2484 4.03687 16.575 4.58345C18.0583 4.93186 19.119 5.94382 20.2921 7.0642C22.2042 8.88862 24.4173 11 29.2502 11C34.1152 11 37.2736 8.85997 38.7247 4.58049C38.7943 4.3754 38.5234 4.23044 38.3742 4.38741C36.5684 6.28738 34.502 6.96375 32.1756 6.41655C30.6915 6.06814 29.6308 5.05618 28.4577 3.93652C26.5456 2.11066 24.3333 0 19.5004 0ZM-nan -nanL9.74981 11C4.88456 11 1.72609 13.1402 0.275037 17.4207C0.205519 17.6258 0.476365 17.7707 0.62555 17.6138C2.43196 15.7135 4.49843 15.0368 6.82441 15.5835C8.30851 15.9319 9.36923 16.9438 10.5423 18.0642C12.4544 19.8886 14.6667 22 19.5004 22C24.3656 22 27.5241 19.8604 28.9752 15.58C29.0447 15.3749 28.7738 15.23 28.6246 15.3869C26.8182 17.2873 24.7517 17.9639 22.425 17.4173C20.9417 17.0681 19.881 16.0562 18.7079 14.9365C16.7958 13.1121 14.5827 11 9.74981 11L-nan -nanL-nan -nanZ"
  })), /* @__PURE__ */ React11.createElement("path", {
    d: "M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4.58345ZM20.2921 7.0642L19.6014 7.78736L19.6018 7.78769L20.2921 7.0642ZM32.1756 6.41655L32.4046 5.44311L32.4041 5.44301L32.1756 6.41655ZM28.4577 3.93652L27.7671 4.65974L27.7673 4.6599L28.4577 3.93652ZM6.82441 15.5835L6.59564 16.5569L6.59586 16.557L6.82441 15.5835ZM10.5423 18.0642L9.85161 18.7874L9.85196 18.7877L10.5423 18.0642ZM22.425 17.4173L22.1959 18.3907L22.1963 18.3908L22.425 17.4173ZM18.7079 14.9365L19.3983 14.2131L19.3982 14.213L18.7079 14.9365ZM0.275037 17.4207L-0.672026 17.0997L0.275037 17.4207ZM0.62555 17.6138L-0.0992438 16.9248L0.62555 17.6138ZM28.9752 15.58L29.9222 15.901L28.9752 15.58ZM28.6246 15.3869L27.8998 14.6979L28.6246 15.3869ZM38.7247 4.58049L37.7777 4.25936L38.7247 4.58049ZM38.3742 4.38741L39.099 5.07632L38.3742 4.38741ZM10.0251 6.42044L9.07806 6.09926L10.0251 6.42044ZM10.3756 6.61355L11.1004 7.30255L10.3756 6.61355ZM19.5004 -1C16.9224 -1 14.7064 -0.432275 12.9214 0.777273C11.1301 1.99111 9.86051 3.79212 9.07806 6.09926L10.9721 6.74162C11.6413 4.76847 12.6764 3.35925 14.0434 2.43295C15.4167 1.50235 17.2126 1 19.5004 1V-1ZM11.1004 7.30255C12.6907 5.62967 14.4042 5.10069 16.3463 5.55695L16.8037 3.60996C14.0926 2.97305 11.6733 3.79712 9.65083 5.92456L11.1004 7.30255ZM16.3463 5.55696C17.5202 5.83268 18.3899 6.63023 19.6014 7.78736L20.9828 6.34104C19.8482 5.25741 18.5964 4.03104 16.8036 3.60995L16.3463 5.55696ZM19.6018 7.78769C20.5507 8.69312 21.6704 9.7678 23.1998 10.5957C24.7495 11.4346 26.6758 12 29.2502 12V10C26.9917 10 25.395 9.50973 24.1519 8.83684C22.8885 8.15292 21.9456 7.2597 20.9824 6.34071L19.6018 7.78769ZM29.2502 12C31.8278 12 34.0437 11.4323 35.8286 10.2229C37.6199 9.00923 38.8895 7.20846 39.6718 4.90163L37.7777 4.25936C37.1088 6.23199 36.0737 7.64098 34.7067 8.56718C33.3334 9.49769 31.5376 10 29.2502 10V12ZM37.6493 3.6985C36.0597 5.37104 34.3464 5.89986 32.4046 5.44311L31.9466 7.38998C34.6577 8.02765 37.0771 7.20371 39.099 5.07632L37.6493 3.6985ZM32.4041 5.44301C31.2295 5.16725 30.3598 4.36966 29.1482 3.21314L27.7673 4.6599C28.9017 5.74271 30.1535 6.96904 31.947 7.39008L32.4041 5.44301ZM29.1483 3.2133C28.1993 2.30704 27.0797 1.23211 25.5504 0.404169C24.0008 -0.434783 22.0747 -1 19.5004 -1V1C21.7589 1 23.3554 1.49011 24.5983 2.16296C25.8614 2.84681 26.8041 3.74014 27.7671 4.65974L29.1483 3.2133ZM9.74981 10C7.17206 10 4.95609 10.5678 3.17112 11.7774C1.3798 12.9913 0.110142 14.7924 -0.672026 17.0997L1.2221 17.7418C1.89099 15.7686 2.92609 14.3594 4.29308 13.433C5.66642 12.5024 7.46231 12 9.74981 12V10ZM1.35034 18.3028C2.94075 16.6297 4.65428 16.1007 6.59564 16.5569L7.05318 14.61C4.34259 13.973 1.92317 14.7973 -0.0992438 16.9248L1.35034 18.3028ZM6.59586 16.557C7.77045 16.8327 8.64013 17.6303 9.85161 18.7874L11.233 17.341C10.0983 16.2573 8.84657 15.031 7.05295 14.6099L6.59586 16.557ZM9.85196 18.7877C10.8008 19.6931 11.9204 20.7678 13.4497 21.5957C14.9993 22.4346 16.9257 23 19.5004 23V21C17.2415 21 15.6448 20.5097 14.4018 19.8368C13.1385 19.1529 12.1958 18.2598 11.2326 17.3407L9.85196 18.7877ZM19.5004 23C22.0781 23 24.294 22.4324 26.079 21.223C27.8704 20.0093 29.14 18.2084 29.9222 15.901L28.0281 15.2589C27.3592 17.232 26.3241 18.6411 24.9572 19.5673C23.5838 20.4978 21.7879 21 19.5004 21V23ZM27.8998 14.6979C26.3095 16.371 24.5959 16.9 22.6537 16.4438L22.1963 18.3908C24.9075 19.0277 27.327 18.2035 29.3494 16.0759L27.8998 14.6979ZM22.6541 16.4439C21.4798 16.1675 20.61 15.3697 19.3983 14.2131L18.0174 15.6599C19.1519 16.7427 20.4035 17.9688 22.1959 18.3907L22.6541 16.4439ZM19.3982 14.213C18.4494 13.3077 17.3296 12.2328 15.8003 11.4047C14.2506 10.5656 12.3242 10 9.74981 10V12C12.0083 12 13.6049 12.4904 14.848 13.1635C16.1115 13.8476 17.0544 14.741 18.0176 15.66L19.3982 14.213ZM-0.672026 17.0997C-0.889639 17.7416 -0.537234 18.2988 -0.109577 18.5315C0.304715 18.7568 0.918575 18.757 1.35034 18.3028L-0.0992438 16.9248C0.18334 16.6276 0.587185 16.6337 0.846137 16.7746C1.11845 16.9227 1.3702 17.3049 1.2221 17.7418L-0.672026 17.0997ZM29.9222 15.901C30.1398 15.2591 29.7874 14.7019 29.3598 14.4693C28.9455 14.2439 28.3316 14.2437 27.8998 14.6979L29.3494 16.0759C29.0669 16.3732 28.663 16.367 28.4041 16.2261C28.1317 16.078 27.88 15.6958 28.0281 15.2589L29.9222 15.901ZM39.6718 4.90163C39.8895 4.25959 39.537 3.70235 39.1093 3.46973C38.695 3.24438 38.0811 3.24419 37.6493 3.6985L39.099 5.07632C38.8164 5.37366 38.4126 5.36747 38.1537 5.22663C37.8814 5.07852 37.6295 4.69631 37.7777 4.25936L39.6718 4.90163ZM9.07806 6.09926C8.86033 6.74124 9.21275 7.29849 9.64037 7.53115C10.0546 7.75655 10.6685 7.7568 11.1004 7.30255L9.65083 5.92456C9.93346 5.62726 10.3373 5.63349 10.5962 5.77436C10.8685 5.9225 11.1203 6.30472 10.9721 6.74162L9.07806 6.09926Z",
    fill: "white",
    mask: "url(#path-1-inside-1)"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Shop Migration"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie nutzen noch immer WooCommerce oder veraltete Shop Systeme? Wir helfen Ihnen beim Umzug Ihrer E-Commerce Assets."))), /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M17.5 7.875C8.20312 7.875 0.65625 16.0781 0.65625 26.1406C0.65625 26.6875 1.09375 27.125 1.64062 27.125H33.3594C33.9062 27.125 34.3438 26.6875 34.3438 26.1406C34.3438 16.0781 26.7969 7.875 17.5 7.875ZM19.4687 25.2109L17.9922 20.5078C17.8281 20.0156 17.1719 20.0156 17.0078 20.5078L15.5312 25.2109H2.625C3.0625 16.625 9.57031 9.78906 17.5 9.78906C25.4297 9.78906 31.9375 16.625 32.375 25.2109H19.4687Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M17.5 13.7812C16.9531 13.7812 16.5156 14.2187 16.5156 14.7656V16.1875C16.5156 16.7344 16.9531 17.1719 17.5 17.1719C18.0469 17.1719 18.4844 16.7344 18.4844 16.1875V14.7656C18.4844 14.2187 18.0469 13.7812 17.5 13.7812Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M25.8672 17.8828L24.9922 18.8125C24.6094 19.1953 24.6094 19.7969 24.9922 20.1797C25.1563 20.3438 25.4297 20.4531 25.6484 20.4531C25.9219 20.4531 26.1406 20.3438 26.3594 20.1797L27.2344 19.25C27.6172 18.8672 27.6172 18.2656 27.2344 17.8828C26.8516 17.5 26.25 17.5 25.8672 17.8828Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M9.13281 17.8828C8.80468 17.5 8.14843 17.4453 7.76562 17.8281C7.38281 18.1562 7.32812 18.8125 7.71093 19.1953L8.53125 20.125C8.69531 20.3437 8.96874 20.4531 9.24218 20.4531C9.46093 20.4531 9.67968 20.3984 9.89843 20.2344C10.2812 19.9062 10.3359 19.25 9.95312 18.8672L9.13281 17.8828Z",
    fill: "white"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Store Speed Optimierung"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Shopify Source Codes sind nicht auf Speed optimiert, obwohl dieser das Website Ranking beeinflusst. Wir beschleunigen Ihre Page Loading Zeiten."))), /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z",
    fill: "white"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "App & Backend Entwicklung"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie wollen mehr aus Ihrem Shopify Store herausholen oder einfach ein komplexes Backend Problem l\xF6sen? Devato entwickelt f\xFCr Sie die optimale L\xF6sung."))), /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z",
    fill: "white"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Rechnungsschreibung und Buchhaltung"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Wir erstellen einen automatisierten und rechtsicheren Prozess von der Rechnungserstellung bis hin zur fertigen monatlichen Buchhaltung"))), /* @__PURE__ */ React11.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React11.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React11.createElement("path", {
    d: "M4.04684 15.5859C4.2109 15.5859 4.37497 15.5859 4.48434 15.5313L10.5547 13.3984C11.0468 13.2344 11.3203 12.6875 11.1562 12.1953C10.9922 11.7031 10.4453 11.4297 9.95309 11.5938L6.28903 12.9063C8.09372 7.92969 12.8515 4.53906 18.375 4.53906C24.2265 4.53906 29.3672 8.42188 30.789 14.0547C30.8984 14.5469 31.4453 14.875 31.9375 14.7656C32.4297 14.6563 32.7578 14.1094 32.6484 13.6172C31.0078 7.16406 25.1015 2.67969 18.375 2.67969C11.8125 2.67969 6.12497 6.89063 4.26559 13.0156L2.57028 8.25781C2.40622 7.76563 1.85934 7.49219 1.36715 7.65625C0.874967 7.82031 0.60153 8.36719 0.765592 8.85938L2.84372 14.8203C3.00778 15.2578 3.55465 15.5859 4.04684 15.5859Z",
    fill: "white"
  }), /* @__PURE__ */ React11.createElement("path", {
    d: "M34.2343 27.2891L31.9922 21.3828C31.8828 21.0547 31.6093 20.7812 31.2812 20.6719C30.9531 20.5625 30.625 20.5078 30.2968 20.6719L24.2812 22.9687C23.789 23.1328 23.5156 23.7344 23.7343 24.2266C23.8984 24.7187 24.5 24.9922 24.9922 24.7734L28.7109 23.3516C26.6328 27.6719 22.2031 30.5156 17.1718 30.5156C11.6484 30.5156 6.78122 27.0703 5.0859 21.9297C4.86715 21.4375 4.32028 21.1641 3.82809 21.3281C3.3359 21.4922 3.06247 22.0391 3.22653 22.5312C5.19528 28.4375 10.7734 32.4297 17.1172 32.4297C23.1328 32.4297 28.4922 28.875 30.6797 23.4609L32.4297 28C32.5937 28.3828 32.9218 28.6016 33.3047 28.6016C33.414 28.6016 33.5234 28.6016 33.6328 28.5469C34.1797 28.3281 34.4531 27.7813 34.2343 27.2891Z",
    fill: "white"
  }))), /* @__PURE__ */ React11.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Bestellungs- & Daten Automation"), /* @__PURE__ */ React11.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie haben einen E-Commerce Store und m\xF6chten repetitive Arbeit vermeiden? Devato ist Ihr Dienstleister f\xFCr komplexe Automatisierung."))))));
};
var Services_default = Services;

// app/sections/AboutMe/AboutMe.tsx
var links2 = () => [
  {
    rel: "stylesheet",
    href: AboutMe_default
  }
];
var AboutMe = (props) => {
  const { theme: theme2 } = useTheme();
  return /* @__PURE__ */ React12.createElement("section", {
    id: "AboutMe",
    className: "AboutMe__Wrapper"
  }, /* @__PURE__ */ React12.createElement("article", {
    className: "aboutme-wrapper flex flex-col justify-center"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "Introduction__Wrapper",
    id: "introductionWrapper"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 mb-5"
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "flex flex-col col-span-3"
  }, /* @__PURE__ */ React12.createElement(Hi_default, null), /* @__PURE__ */ React12.createElement("div", {
    className: "bio-description md:text-lg leading-10 lg:text-lg "
  }, /* @__PURE__ */ React12.createElement("div", {
    className: "my-10 text-lg"
  }, /* @__PURE__ */ React12.createElement("p", {
    className: "text-aboutMe-aboutMeText my-10"
  }, "Devato ist Ihr zuverl\xE4ssiger Dienstleister rund um Shopify E-Commerce. Von der Erstellung neuer Shops bis hin zu komplexen Backend Entwicklungen: Wir unterst\xFCtzen Sie in allen Themen rund um Shopify."), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-10 sm:mt-10"
  }), /* @__PURE__ */ React12.createElement(Titles_default, null), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-10 sm:mt-20"
  }), /* @__PURE__ */ React12.createElement("div", {
    className: "mt-0 xs:mt-30"
  }), /* @__PURE__ */ React12.createElement("div", {
    className: "resume-btn-wrapper mt-30 w-fit"
  }, /* @__PURE__ */ React12.createElement("a", {
    href: "/#projects"
  }, /* @__PURE__ */ React12.createElement(button_default2, {
    color: "gradient",
    size: "xl",
    auto: true,
    href: "sectionStory",
    rounded: true,
    bordered: true
  }, "Projekte ansehen"))), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-100 sm:mt-100"
  })))), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-20 md:mt-24 lg:mt-56"
  })), /* @__PURE__ */ React12.createElement(MyStory_default, null)), /* @__PURE__ */ React12.createElement("div", {
    className: "story-wrapper",
    id: "sectionStory"
  }), /* @__PURE__ */ React12.createElement(Testimonials_default, null), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-20 md:mt-5 lg:mt-5"
  }), /* @__PURE__ */ React12.createElement(Services_default, null), /* @__PURE__ */ React12.createElement(Facts_default, null)));
};
var AboutMe_default2 = AboutMe;

// app/sections/Contact/Contact.tsx
init_react();
var React15 = __toESM(require_react());

// app/components/Alert.tsx
init_react();
var React13 = __toESM(require_react());
var Alert = (props) => {
  return /* @__PURE__ */ React13.createElement("div", null, props.type === "success" /* SUCCESS */ ? /* @__PURE__ */ React13.createElement("div", {
    className: "bg-green-100 p-5 w-full rounded"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React13.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-green-500 h-4 w-4"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
  })), /* @__PURE__ */ React13.createElement("div", {
    className: "flex-1 leading-tight text-sm text-green-700 font-medium"
  }, props.message)), /* @__PURE__ */ React13.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-green-600 h-3 w-3"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
  })))) : props.type === "error" /* ERROR */ ? /* @__PURE__ */ React13.createElement("div", {
    className: "bg-red-100 p-5 w-full"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React13.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-red-500 h-4 w-4"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"
  })), /* @__PURE__ */ React13.createElement("div", {
    className: "leading-tight flex flex-col space-y-2"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "text-sm font-medium text-red-700"
  }, "Something went wrong"), /* @__PURE__ */ React13.createElement("div", {
    className: "flex-1 leading-snug text-sm text-red-600"
  }, props.message)))) : /* @__PURE__ */ React13.createElement("div", {
    className: "bg-blue-100 p-5 w-full border-l-4 border-blue-500"
  }, /* @__PURE__ */ React13.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React13.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-blue-500 h-4 w-4"
  }, /* @__PURE__ */ React13.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
  })), /* @__PURE__ */ React13.createElement("div", {
    className: "flex-1 leading-tight text-sm text-blue-700"
  }, props.message))));
};
var Alert_default = Alert;

// app/components/SocialMedia/SocialMedia.tsx
init_react();
var React14 = __toESM(require_react());

// app/components/SocialMedia/SocialMedia.css
var SocialMedia_default = "/build/_assets/SocialMedia-SPTQH6WS.css";

// app/components/SocialMedia/SocialMedia.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: SocialMedia_default }];
};
var SocialMedia = ({}) => {
  const { theme: theme2 } = useTheme();
  const styles = getTextStyles(theme2);
  return /* @__PURE__ */ React14.createElement("div", {
    className: "sm-wrapper grid grid-cols-5 gap-4 items-center "
  }, sm.map((element) => {
    const IconMarkup = element.icon;
    return /* @__PURE__ */ React14.createElement("div", {
      className: `${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center ${styles}`,
      key: element.name
    }, /* @__PURE__ */ React14.createElement("div", {
      className: "tooltip absolute top-0 text-sm text-white bg-white"
    }, element.name), /* @__PURE__ */ React14.createElement("a", {
      href: element.externalUrl,
      target: "_blank"
    }, /* @__PURE__ */ React14.createElement("span", {
      className: "flex justify-center items-center text-lg"
    }, /* @__PURE__ */ React14.createElement(IconMarkup, null))));
  }));
};
var getTextStyles = (theme2) => {
  return theme2 === "light" /* LIGHT */ ? "text-black hover:text-white" : "text-white";
};
var SocialMedia_default2 = SocialMedia;

// app/sections/Contact/Contact.css
var Contact_default = "/build/_assets/Contact-PPDYOJMV.css";

// app/sections/Contact/Contact.tsx
var links4 = () => [
  {
    rel: "stylesheet",
    href: Contact_default
  }
];
var ContactTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const contactTitleClassname = wasInViewAtLeastOnce ? "contact-title" : void 0;
  return /* @__PURE__ */ React15.createElement("svg", {
    viewBox: "0 0 900 110",
    className: `${contactTitleClassname} contact-title xl:mt-10`,
    ref: setRef
  }, /* @__PURE__ */ React15.createElement("text", {
    textAnchor: "middle",
    x: "50%",
    y: "90%",
    className: "text-7xl"
  }, "Kontakt"));
};
var ContactMeSection = (props) => {
  const { fieldErrors, transition } = props;
  const hasError = fieldErrors && Object.keys(fieldErrors).length > 0;
  const hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0;
  const buttonText = transition.state === "submitting" ? "Sendet..." : transition.state === "loading" ? "Gesendet!" : "Senden";
  return /* @__PURE__ */ React15.createElement("div", {
    className: "contact-wrapper flex flex-col items-center justify-center translate-y-[-1rem] xs:translate-y-0 xl:translate-y-[-5rem]"
  }, /* @__PURE__ */ React15.createElement(ContactTitle, null), /* @__PURE__ */ React15.createElement("div", {
    className: "spacer-div mt-10"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "contact-form-wrapper w-full custom2:w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2"
  }, /* @__PURE__ */ React15.createElement(Form, {
    id: contactFormHtmlId,
    method: "post",
    action: "/?index",
    className: "contact-form flex flex-col text-contact-label w-full"
  }, hasError ? /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie eine Mail an info@devato.de.",
    type: "error" /* ERROR */
  }) : hasSuccess ? /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Wir haben Ihre Anfrage erhalten und kommen bald auf Sie zur\xFCck!",
    type: "confirmed" /* CONFIRMED */
  }) : /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Wir antworten meist innerhalb von 2 Werkatagen.",
    type: "confirmed" /* CONFIRMED */
  }), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: "Name" /* name */,
    className: "text-base pt-2 pb-1"
  }, "Ihr Name"), /* @__PURE__ */ React15.createElement("input", {
    id: "Name" /* name */,
    name: "Name" /* name */,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.name && fieldErrors?.name)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: "Email" /* email */,
    className: "text-base pt-2 pb-1"
  }, "Ihre Email"), /* @__PURE__ */ React15.createElement("input", {
    id: "Email" /* email */,
    name: "Email" /* email */,
    type: "email",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.email && fieldErrors?.email)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: "Betreff / Projekt" /* subject */,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Betreff"), /* @__PURE__ */ React15.createElement("input", {
    id: "Betreff / Projekt" /* subject */,
    name: "Betreff / Projekt" /* subject */,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-2"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.subject && fieldErrors?.subject)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: "Nachricht" /* message */,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Ihre Nachricht"), /* @__PURE__ */ React15.createElement("textarea", {
    id: "Nachricht" /* message */,
    name: "Nachricht" /* message */,
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error text-sm font-medium italic text-teal-300"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.message && fieldErrors?.message)), /* @__PURE__ */ React15.createElement("button", {
    type: "submit",
    name: "Senden",
    className: "contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
  }, buttonText))), /* @__PURE__ */ React15.createElement("div", {
    className: "text-textLgColor flex justify-center mt-6 mb-10"
  }, /* @__PURE__ */ React15.createElement(SocialMedia_default2, null)));
};
var Contact_default2 = ContactMeSection;

// app/sections/MySkills/MySkills.tsx
init_react();
var React16 = __toESM(require_react());

// node_modules/animejs/lib/anime.es.js
init_react();
var defaultInstanceSettings = {
  update: null,
  begin: null,
  loopBegin: null,
  changeBegin: null,
  change: null,
  changeComplete: null,
  loopComplete: null,
  complete: null,
  loop: 1,
  direction: "normal",
  autoplay: true,
  timelineOffset: 0
};
var defaultTweenSettings = {
  duration: 1e3,
  delay: 0,
  endDelay: 0,
  easing: "easeOutElastic(1, .5)",
  round: 0
};
var validTransforms = ["translateX", "translateY", "translateZ", "rotate", "rotateX", "rotateY", "rotateZ", "scale", "scaleX", "scaleY", "scaleZ", "skew", "skewX", "skewY", "perspective", "matrix", "matrix3d"];
var cache = {
  CSS: {},
  springs: {}
};
function minMax(val, min, max) {
  return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
  return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
  return func.apply(null, args);
}
var is = {
  arr: function(a6) {
    return Array.isArray(a6);
  },
  obj: function(a6) {
    return stringContains(Object.prototype.toString.call(a6), "Object");
  },
  pth: function(a6) {
    return is.obj(a6) && a6.hasOwnProperty("totalLength");
  },
  svg: function(a6) {
    return a6 instanceof SVGElement;
  },
  inp: function(a6) {
    return a6 instanceof HTMLInputElement;
  },
  dom: function(a6) {
    return a6.nodeType || is.svg(a6);
  },
  str: function(a6) {
    return typeof a6 === "string";
  },
  fnc: function(a6) {
    return typeof a6 === "function";
  },
  und: function(a6) {
    return typeof a6 === "undefined";
  },
  nil: function(a6) {
    return is.und(a6) || a6 === null;
  },
  hex: function(a6) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a6);
  },
  rgb: function(a6) {
    return /^rgb/.test(a6);
  },
  hsl: function(a6) {
    return /^hsl/.test(a6);
  },
  col: function(a6) {
    return is.hex(a6) || is.rgb(a6) || is.hsl(a6);
  },
  key: function(a6) {
    return !defaultInstanceSettings.hasOwnProperty(a6) && !defaultTweenSettings.hasOwnProperty(a6) && a6 !== "targets" && a6 !== "keyframes";
  }
};
function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(",").map(function(p3) {
    return parseFloat(p3);
  }) : [];
}
function spring(string, duration) {
  var params = parseEasingParameters(string);
  var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
  var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
  var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
  var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
  var w0 = Math.sqrt(stiffness / mass);
  var zeta = damping / (2 * Math.sqrt(stiffness * mass));
  var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
  var a6 = 1;
  var b2 = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  function solver(t13) {
    var progress = duration ? duration * t13 / 1e3 : t13;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a6 * Math.cos(wd * progress) + b2 * Math.sin(wd * progress));
    } else {
      progress = (a6 + b2 * progress) * Math.exp(-progress * w0);
    }
    if (t13 === 0 || t13 === 1) {
      return t13;
    }
    return 1 - progress;
  }
  function getDuration() {
    var cached = cache.springs[string];
    if (cached) {
      return cached;
    }
    var frame = 1 / 6;
    var elapsed = 0;
    var rest = 0;
    while (true) {
      elapsed += frame;
      if (solver(elapsed) === 1) {
        rest++;
        if (rest >= 16) {
          break;
        }
      } else {
        rest = 0;
      }
    }
    var duration2 = elapsed * frame * 1e3;
    cache.springs[string] = duration2;
    return duration2;
  }
  return duration ? solver : getDuration;
}
function steps(steps2) {
  if (steps2 === void 0)
    steps2 = 10;
  return function(t13) {
    return Math.ceil(minMax(t13, 1e-6, 1) * steps2) * (1 / steps2);
  };
}
var bezier = function() {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  function A2(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B2(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C3(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A2(aA1, aA2) * aT + B2(aA1, aA2)) * aT + C3(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A2(aA1, aA2) * aT * aT + 2 * B2(aA1, aA2) * aT + C3(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i6 = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 1e-7 && ++i6 < 10);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i6 = 0; i6 < 4; ++i6) {
      var currentSlope = getSlope(aGuessT, mX1, mX2);
      if (currentSlope === 0) {
        return aGuessT;
      }
      var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
      aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
  }
  function bezier2(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
      return;
    }
    var sampleValues = new Float32Array(kSplineTableSize);
    if (mX1 !== mY1 || mX2 !== mY2) {
      for (var i6 = 0; i6 < kSplineTableSize; ++i6) {
        sampleValues[i6] = calcBezier(i6 * kSampleStepSize, mX1, mX2);
      }
    }
    function getTForX(aX) {
      var intervalStart = 0;
      var currentSample = 1;
      var lastSample = kSplineTableSize - 1;
      for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
        intervalStart += kSampleStepSize;
      }
      --currentSample;
      var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
      var guessForT = intervalStart + dist * kSampleStepSize;
      var initialSlope = getSlope(guessForT, mX1, mX2);
      if (initialSlope >= 1e-3) {
        return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
      } else if (initialSlope === 0) {
        return guessForT;
      } else {
        return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
      }
    }
    return function(x4) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x4;
      }
      if (x4 === 0 || x4 === 1) {
        return x4;
      }
      return calcBezier(getTForX(x4), mY1, mY2);
    };
  }
  return bezier2;
}();
var penner = function() {
  var eases = { linear: function() {
    return function(t13) {
      return t13;
    };
  } };
  var functionEasings = {
    Sine: function() {
      return function(t13) {
        return 1 - Math.cos(t13 * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(t13) {
        return 1 - Math.sqrt(1 - t13 * t13);
      };
    },
    Back: function() {
      return function(t13) {
        return t13 * t13 * (3 * t13 - 2);
      };
    },
    Bounce: function() {
      return function(t13) {
        var pow2, b2 = 4;
        while (t13 < ((pow2 = Math.pow(2, --b2)) - 1) / 11) {
        }
        return 1 / Math.pow(4, 3 - b2) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t13, 2);
      };
    },
    Elastic: function(amplitude, period) {
      if (amplitude === void 0)
        amplitude = 1;
      if (period === void 0)
        period = 0.5;
      var a6 = minMax(amplitude, 1, 10);
      var p3 = minMax(period, 0.1, 2);
      return function(t13) {
        return t13 === 0 || t13 === 1 ? t13 : -a6 * Math.pow(2, 10 * (t13 - 1)) * Math.sin((t13 - 1 - p3 / (Math.PI * 2) * Math.asin(1 / a6)) * (Math.PI * 2) / p3);
      };
    }
  };
  var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  baseEasings.forEach(function(name, i6) {
    functionEasings[name] = function() {
      return function(t13) {
        return Math.pow(t13, i6 + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function(name) {
    var easeIn = functionEasings[name];
    eases["easeIn" + name] = easeIn;
    eases["easeOut" + name] = function(a6, b2) {
      return function(t13) {
        return 1 - easeIn(a6, b2)(1 - t13);
      };
    };
    eases["easeInOut" + name] = function(a6, b2) {
      return function(t13) {
        return t13 < 0.5 ? easeIn(a6, b2)(t13 * 2) / 2 : 1 - easeIn(a6, b2)(t13 * -2 + 2) / 2;
      };
    };
    eases["easeOutIn" + name] = function(a6, b2) {
      return function(t13) {
        return t13 < 0.5 ? (1 - easeIn(a6, b2)(1 - t13 * 2)) / 2 : (easeIn(a6, b2)(t13 * 2 - 1) + 1) / 2;
      };
    };
  });
  return eases;
}();
function parseEasings(easing, duration) {
  if (is.fnc(easing)) {
    return easing;
  }
  var name = easing.split("(")[0];
  var ease = penner[name];
  var args = parseEasingParameters(easing);
  switch (name) {
    case "spring":
      return spring(easing, duration);
    case "cubicBezier":
      return applyArguments(bezier, args);
    case "steps":
      return applyArguments(steps, args);
    default:
      return applyArguments(ease, args);
  }
}
function selectString(str) {
  try {
    var nodes = document.querySelectorAll(str);
    return nodes;
  } catch (e6) {
    return;
  }
}
function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i6 = 0; i6 < len; i6++) {
    if (i6 in arr) {
      var val = arr[i6];
      if (callback.call(thisArg, val, i6, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}
function flattenArray(arr) {
  return arr.reduce(function(a6, b2) {
    return a6.concat(is.arr(b2) ? flattenArray(b2) : b2);
  }, []);
}
function toArray(o11) {
  if (is.arr(o11)) {
    return o11;
  }
  if (is.str(o11)) {
    o11 = selectString(o11) || o11;
  }
  if (o11 instanceof NodeList || o11 instanceof HTMLCollection) {
    return [].slice.call(o11);
  }
  return [o11];
}
function arrayContains(arr, val) {
  return arr.some(function(a6) {
    return a6 === val;
  });
}
function cloneObject(o11) {
  var clone = {};
  for (var p3 in o11) {
    clone[p3] = o11[p3];
  }
  return clone;
}
function replaceObjectProps(o1, o22) {
  var o11 = cloneObject(o1);
  for (var p3 in o1) {
    o11[p3] = o22.hasOwnProperty(p3) ? o22[p3] : o1[p3];
  }
  return o11;
}
function mergeObjects(o1, o22) {
  var o11 = cloneObject(o1);
  for (var p3 in o22) {
    o11[p3] = is.und(o1[p3]) ? o22[p3] : o1[p3];
  }
  return o11;
}
function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function(m4, r10, g5, b3) {
    return r10 + r10 + g5 + g5 + b3 + b3;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r9 = parseInt(rgb[1], 16);
  var g4 = parseInt(rgb[2], 16);
  var b2 = parseInt(rgb[3], 16);
  return "rgba(" + r9 + "," + g4 + "," + b2 + ",1)";
}
function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h4 = parseInt(hsl[1], 10) / 360;
  var s7 = parseInt(hsl[2], 10) / 100;
  var l6 = parseInt(hsl[3], 10) / 100;
  var a6 = hsl[4] || 1;
  function hue2rgb(p4, q3, t13) {
    if (t13 < 0) {
      t13 += 1;
    }
    if (t13 > 1) {
      t13 -= 1;
    }
    if (t13 < 1 / 6) {
      return p4 + (q3 - p4) * 6 * t13;
    }
    if (t13 < 1 / 2) {
      return q3;
    }
    if (t13 < 2 / 3) {
      return p4 + (q3 - p4) * (2 / 3 - t13) * 6;
    }
    return p4;
  }
  var r9, g4, b2;
  if (s7 == 0) {
    r9 = g4 = b2 = l6;
  } else {
    var q2 = l6 < 0.5 ? l6 * (1 + s7) : l6 + s7 - l6 * s7;
    var p3 = 2 * l6 - q2;
    r9 = hue2rgb(p3, q2, h4 + 1 / 3);
    g4 = hue2rgb(p3, q2, h4);
    b2 = hue2rgb(p3, q2, h4 - 1 / 3);
  }
  return "rgba(" + r9 * 255 + "," + g4 * 255 + "," + b2 * 255 + "," + a6 + ")";
}
function colorToRgb(val) {
  if (is.rgb(val)) {
    return rgbToRgba(val);
  }
  if (is.hex(val)) {
    return hexToRgba(val);
  }
  if (is.hsl(val)) {
    return hslToRgba(val);
  }
}
function getUnit(val) {
  var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
  if (split) {
    return split[1];
  }
}
function getTransformUnit(propName) {
  if (stringContains(propName, "translate") || propName === "perspective") {
    return "px";
  }
  if (stringContains(propName, "rotate") || stringContains(propName, "skew")) {
    return "deg";
  }
}
function getFunctionValue(val, animatable) {
  if (!is.fnc(val)) {
    return val;
  }
  return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
  return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
    return value;
  }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) {
    return cached;
  }
  var baseline = 100;
  var tempEl = document.createElement(el.tagName);
  var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = "absolute";
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}
function getCSSValue(el, prop, unit) {
  if (prop in el.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || "0";
    return unit ? convertPxToUnit(el, value, unit) : value;
  }
}
function getAnimationType(el, prop) {
  if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) {
    return "attribute";
  }
  if (is.dom(el) && arrayContains(validTransforms, prop)) {
    return "transform";
  }
  if (is.dom(el) && (prop !== "transform" && getCSSValue(el, prop))) {
    return "css";
  }
  if (el[prop] != null) {
    return "object";
  }
}
function getElementTransforms(el) {
  if (!is.dom(el)) {
    return;
  }
  var str = el.style.transform || "";
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = /* @__PURE__ */ new Map();
  var m4;
  while (m4 = reg.exec(str)) {
    transforms.set(m4[1], m4[2]);
  }
  return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
  var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms["last"] = propName;
  }
  return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
  switch (getAnimationType(target, propName)) {
    case "transform":
      return getTransformValue(target, propName, animatable, unit);
    case "css":
      return getCSSValue(target, propName, unit);
    case "attribute":
      return getAttribute(target, propName);
    default:
      return target[propName] || 0;
  }
}
function getRelativeValue(to, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to);
  if (!operator) {
    return to;
  }
  var u5 = getUnit(to) || 0;
  var x4 = parseFloat(from);
  var y6 = parseFloat(to.replace(operator[0], ""));
  switch (operator[0][0]) {
    case "+":
      return x4 + y6 + u5;
    case "-":
      return x4 - y6 + u5;
    case "*":
      return x4 * y6 + u5;
  }
}
function validateValue(val, unit) {
  if (is.col(val)) {
    return colorToRgb(val);
  }
  if (/\s/g.test(val)) {
    return val;
  }
  var originalUnit = getUnit(val);
  var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
  if (unit) {
    return unitLess + unit;
  }
  return unitLess;
}
function getDistance(p1, p22) {
  return Math.sqrt(Math.pow(p22.x - p1.x, 2) + Math.pow(p22.y - p1.y, 2));
}
function getCircleLength(el) {
  return Math.PI * 2 * getAttribute(el, "r");
}
function getRectLength(el) {
  return getAttribute(el, "width") * 2 + getAttribute(el, "height") * 2;
}
function getLineLength(el) {
  return getDistance({ x: getAttribute(el, "x1"), y: getAttribute(el, "y1") }, { x: getAttribute(el, "x2"), y: getAttribute(el, "y2") });
}
function getPolylineLength(el) {
  var points = el.points;
  var totalLength = 0;
  var previousPos;
  for (var i6 = 0; i6 < points.numberOfItems; i6++) {
    var currentPos = points.getItem(i6);
    if (i6 > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }
    previousPos = currentPos;
  }
  return totalLength;
}
function getPolygonLength(el) {
  var points = el.points;
  return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
function getTotalLength(el) {
  if (el.getTotalLength) {
    return el.getTotalLength();
  }
  switch (el.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(el);
    case "rect":
      return getRectLength(el);
    case "line":
      return getLineLength(el);
    case "polyline":
      return getPolylineLength(el);
    case "polygon":
      return getPolygonLength(el);
  }
}
function setDashoffset(el) {
  var pathLength = getTotalLength(el);
  el.setAttribute("stroke-dasharray", pathLength);
  return pathLength;
}
function getParentSvgEl(el) {
  var parentEl = el.parentNode;
  while (is.svg(parentEl)) {
    if (!is.svg(parentEl.parentNode)) {
      break;
    }
    parentEl = parentEl.parentNode;
  }
  return parentEl;
}
function getParentSvg(pathEl, svgData) {
  var svg = svgData || {};
  var parentSvgEl = svg.el || getParentSvgEl(pathEl);
  var rect = parentSvgEl.getBoundingClientRect();
  var viewBoxAttr = getAttribute(parentSvgEl, "viewBox");
  var width = rect.width;
  var height = rect.height;
  var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(" ") : [0, 0, width, height]);
  return {
    el: parentSvgEl,
    viewBox,
    x: viewBox[0] / 1,
    y: viewBox[1] / 1,
    w: width,
    h: height,
    vW: viewBox[2],
    vH: viewBox[3]
  };
}
function getPath(path, percent) {
  var pathEl = is.str(path) ? selectString(path)[0] : path;
  var p3 = percent || 100;
  return function(property) {
    return {
      property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p3 / 100)
    };
  };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0)
      offset = 0;
    var l6 = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l6);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p3 = point();
  var p0 = point(-1);
  var p1 = point(1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case "x":
      return (p3.x - svg.x) * scaleX;
    case "y":
      return (p3.y - svg.y) * scaleY;
    case "angle":
      return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
  }
}
function decomposeValue(val, unit) {
  var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g;
  var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + "";
  return {
    original: value,
    numbers: value.match(rgx) ? value.match(rgx).map(Number) : [0],
    strings: is.str(val) || unit ? value.split(rgx) : []
  };
}
function parseTargets(targets) {
  var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
  return filterArray(targetsArray, function(item, pos, self2) {
    return self2.indexOf(item) === pos;
  });
}
function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function(t13, i6) {
    return { target: t13, id: i6, total: parsed.length, transforms: { list: getElementTransforms(t13) } };
  });
}
function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }
  if (is.arr(prop)) {
    var l6 = prop.length;
    var isFromTo = l6 === 2 && !is.obj(prop[0]);
    if (!isFromTo) {
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l6;
      }
    } else {
      prop = { value: prop };
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function(v3, i6) {
    var obj = is.obj(v3) && !is.pth(v3) ? v3 : { value: v3 };
    if (is.und(obj.delay)) {
      obj.delay = !i6 ? tweenSettings.delay : 0;
    }
    if (is.und(obj.endDelay)) {
      obj.endDelay = i6 === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }
    return obj;
  }).map(function(k3) {
    return mergeObjects(k3, settings);
  });
}
function flattenKeyframes(keyframes2) {
  var propertyNames = filterArray(flattenArray(keyframes2.map(function(key) {
    return Object.keys(key);
  })), function(p3) {
    return is.key(p3);
  }).reduce(function(a6, b2) {
    if (a6.indexOf(b2) < 0) {
      a6.push(b2);
    }
    return a6;
  }, []);
  var properties = {};
  var loop = function(i7) {
    var propName = propertyNames[i7];
    properties[propName] = keyframes2.map(function(key) {
      var newKey = {};
      for (var p3 in key) {
        if (is.key(p3)) {
          if (p3 == propName) {
            newKey.value = key[p3];
          }
        } else {
          newKey[p3] = key[p3];
        }
      }
      return newKey;
    });
  };
  for (var i6 = 0; i6 < propertyNames.length; i6++)
    loop(i6);
  return properties;
}
function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes2 = params.keyframes;
  if (keyframes2) {
    params = mergeObjects(flattenKeyframes(keyframes2), params);
  }
  for (var p3 in params) {
    if (is.key(p3)) {
      properties.push({
        name: p3,
        tweens: normalizePropertyTweens(params[p3], tweenSettings)
      });
    }
  }
  return properties;
}
function normalizeTweenValues(tween, animatable) {
  var t13 = {};
  for (var p3 in tween) {
    var value = getFunctionValue(tween[p3], animatable);
    if (is.arr(value)) {
      value = value.map(function(v3) {
        return getFunctionValue(v3, animatable);
      });
      if (value.length === 1) {
        value = value[0];
      }
    }
    t13[p3] = value;
  }
  t13.duration = parseFloat(t13.duration);
  t13.delay = parseFloat(t13.delay);
  return t13;
}
function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function(t13) {
    var tween = normalizeTweenValues(t13, animatable);
    var tweenValue = tween.value;
    var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to)) {
      to = previousValue;
    }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to, from), unit);
    tween.start = previousTween ? previousTween.end : 0;
    tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
    tween.easing = parseEasings(tween.easing, tween.duration);
    tween.isPath = is.pth(tweenValue);
    tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
    tween.isColor = is.col(tween.from.original);
    if (tween.isColor) {
      tween.round = 1;
    }
    previousTween = tween;
    return tween;
  });
}
var setProgressValue = {
  css: function(t13, p3, v3) {
    return t13.style[p3] = v3;
  },
  attribute: function(t13, p3, v3) {
    return t13.setAttribute(p3, v3);
  },
  object: function(t13, p3, v3) {
    return t13[p3] = v3;
  },
  transform: function(t13, p3, v3, transforms, manual) {
    transforms.list.set(p3, v3);
    if (p3 === transforms.last || manual) {
      var str = "";
      transforms.list.forEach(function(value, prop) {
        str += prop + "(" + value + ") ";
      });
      t13.style.transform = str;
    }
  }
};
function setTargetsValue(targets, properties) {
  var animatables = getAnimatables(targets);
  animatables.forEach(function(animatable) {
    for (var property in properties) {
      var value = getFunctionValue(properties[property], animatable);
      var target = animatable.target;
      var valueUnit = getUnit(value);
      var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
      var unit = valueUnit || getUnit(originalValue);
      var to = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to, animatable.transforms, true);
    }
  });
}
function createAnimation(animatable, prop) {
  var animType = getAnimationType(animatable.target, prop.name);
  if (animType) {
    var tweens = normalizeTweens(prop, animatable);
    var lastTween = tweens[tweens.length - 1];
    return {
      type: animType,
      property: prop.name,
      animatable,
      tweens,
      duration: lastTween.end,
      delay: tweens[0].delay,
      endDelay: lastTween.endDelay
    };
  }
}
function getAnimations(animatables, properties) {
  return filterArray(flattenArray(animatables.map(function(animatable) {
    return properties.map(function(prop) {
      return createAnimation(animatable, prop);
    });
  })), function(a6) {
    return !is.und(a6);
  });
}
function getInstanceTimings(animations, tweenSettings) {
  var animLength = animations.length;
  var getTlOffset = function(anim) {
    return anim.timelineOffset ? anim.timelineOffset : 0;
  };
  var timings = {};
  timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration;
  })) : tweenSettings.duration;
  timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.delay;
  })) : tweenSettings.delay;
  timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
    return getTlOffset(anim) + anim.duration - anim.endDelay;
  })) : tweenSettings.endDelay;
  return timings;
}
var instanceID = 0;
function createNewInstance(params) {
  var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
  var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
  var properties = getProperties(tweenSettings, params);
  var animatables = getAnimatables(params.targets);
  var animations = getAnimations(animatables, properties);
  var timings = getInstanceTimings(animations, tweenSettings);
  var id = instanceID;
  instanceID++;
  return mergeObjects(instanceSettings, {
    id,
    children: [],
    animatables,
    animations,
    duration: timings.duration,
    delay: timings.delay,
    endDelay: timings.endDelay
  });
}
var activeInstances = [];
var engine = function() {
  var raf;
  function play() {
    if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) {
      raf = requestAnimationFrame(step);
    }
  }
  function step(t13) {
    var activeInstancesLength = activeInstances.length;
    var i6 = 0;
    while (i6 < activeInstancesLength) {
      var activeInstance = activeInstances[i6];
      if (!activeInstance.paused) {
        activeInstance.tick(t13);
        i6++;
      } else {
        activeInstances.splice(i6, 1);
        activeInstancesLength--;
      }
    }
    raf = i6 > 0 ? requestAnimationFrame(step) : void 0;
  }
  function handleVisibilityChange() {
    if (!anime.suspendWhenDocumentHidden) {
      return;
    }
    if (isDocumentHidden()) {
      raf = cancelAnimationFrame(raf);
    } else {
      activeInstances.forEach(function(instance) {
        return instance._onDocumentVisibility();
      });
      engine();
    }
  }
  if (typeof document !== "undefined") {
    document.addEventListener("visibilitychange", handleVisibilityChange);
  }
  return play;
}();
function isDocumentHidden() {
  return !!document && document.hidden;
}
function anime(params) {
  if (params === void 0)
    params = {};
  var startTime = 0, lastTime = 0, now = 0;
  var children, childrenLength = 0;
  var resolve = null;
  function makePromise(instance2) {
    var promise2 = window.Promise && new Promise(function(_resolve) {
      return resolve = _resolve;
    });
    instance2.finished = promise2;
    return promise2;
  }
  var instance = createNewInstance(params);
  var promise = makePromise(instance);
  function toggleInstanceDirection() {
    var direction = instance.direction;
    if (direction !== "alternate") {
      instance.direction = direction !== "normal" ? "normal" : "reverse";
    }
    instance.reversed = !instance.reversed;
    children.forEach(function(child) {
      return child.reversed = instance.reversed;
    });
  }
  function adjustTime(time) {
    return instance.reversed ? instance.duration - time : time;
  }
  function resetTime() {
    startTime = 0;
    lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
  }
  function seekChild(time, child) {
    if (child) {
      child.seek(time - child.timelineOffset);
    }
  }
  function syncInstanceChildren(time) {
    if (!instance.reversePlayback) {
      for (var i6 = 0; i6 < childrenLength; i6++) {
        seekChild(time, children[i6]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--; ) {
        seekChild(time, children[i$1]);
      }
    }
  }
  function setAnimationsProgress(insTime) {
    var i6 = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i6 < animationsLength) {
      var anim = animations[i6];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      if (tweenLength) {
        tween = filterArray(tweens, function(t13) {
          return insTime < t13.end;
        })[0] || tween;
      }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;
      for (var n2 = 0; n2 < toNumbersLength; n2++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n2];
        var fromNumber = tween.from.numbers[n2] || 0;
        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n2 > 2)) {
            value = Math.round(value * round) / round;
          }
        }
        numbers.push(value);
      }
      var stringsLength = strings.length;
      if (!stringsLength) {
        progress = numbers[0];
      } else {
        progress = strings[0];
        for (var s7 = 0; s7 < stringsLength; s7++) {
          var a6 = strings[s7];
          var b2 = strings[s7 + 1];
          var n$1 = numbers[s7];
          if (!isNaN(n$1)) {
            if (!b2) {
              progress += n$1 + " ";
            } else {
              progress += n$1 + b2;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i6++;
    }
  }
  function setCallback(cb) {
    if (instance[cb] && !instance.passThrough) {
      instance[cb](instance);
    }
  }
  function countIteration() {
    if (instance.remaining && instance.remaining !== true) {
      instance.remaining--;
    }
  }
  function setInstanceProgress(engineTime) {
    var insDuration = instance.duration;
    var insDelay = instance.delay;
    var insEndDelay = insDuration - instance.endDelay;
    var insTime = adjustTime(engineTime);
    instance.progress = minMax(insTime / insDuration * 100, 0, 100);
    instance.reversePlayback = insTime < instance.currentTime;
    if (children) {
      syncInstanceChildren(insTime);
    }
    if (!instance.began && instance.currentTime > 0) {
      instance.began = true;
      setCallback("begin");
    }
    if (!instance.loopBegan && instance.currentTime > 0) {
      instance.loopBegan = true;
      setCallback("loopBegin");
    }
    if (insTime <= insDelay && instance.currentTime !== 0) {
      setAnimationsProgress(0);
    }
    if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) {
      setAnimationsProgress(insDuration);
    }
    if (insTime > insDelay && insTime < insEndDelay) {
      if (!instance.changeBegan) {
        instance.changeBegan = true;
        instance.changeCompleted = false;
        setCallback("changeBegin");
      }
      setCallback("change");
      setAnimationsProgress(insTime);
    } else {
      if (instance.changeBegan) {
        instance.changeCompleted = true;
        instance.changeBegan = false;
        setCallback("changeComplete");
      }
    }
    instance.currentTime = minMax(insTime, 0, insDuration);
    if (instance.began) {
      setCallback("update");
    }
    if (engineTime >= insDuration) {
      lastTime = 0;
      countIteration();
      if (!instance.remaining) {
        instance.paused = true;
        if (!instance.completed) {
          instance.completed = true;
          setCallback("loopComplete");
          setCallback("complete");
          if (!instance.passThrough && "Promise" in window) {
            resolve();
            promise = makePromise(instance);
          }
        }
      } else {
        startTime = now;
        setCallback("loopComplete");
        instance.loopBegan = false;
        if (instance.direction === "alternate") {
          toggleInstanceDirection();
        }
      }
    }
  }
  instance.reset = function() {
    var direction = instance.direction;
    instance.passThrough = false;
    instance.currentTime = 0;
    instance.progress = 0;
    instance.paused = true;
    instance.began = false;
    instance.loopBegan = false;
    instance.changeBegan = false;
    instance.completed = false;
    instance.changeCompleted = false;
    instance.reversePlayback = false;
    instance.reversed = direction === "reverse";
    instance.remaining = instance.loop;
    children = instance.children;
    childrenLength = children.length;
    for (var i6 = childrenLength; i6--; ) {
      instance.children[i6].reset();
    }
    if (instance.reversed && instance.loop !== true || direction === "alternate" && instance.loop === 1) {
      instance.remaining++;
    }
    setAnimationsProgress(instance.reversed ? instance.duration : 0);
  };
  instance._onDocumentVisibility = resetTime;
  instance.set = function(targets, properties) {
    setTargetsValue(targets, properties);
    return instance;
  };
  instance.tick = function(t13) {
    now = t13;
    if (!startTime) {
      startTime = now;
    }
    setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
  };
  instance.seek = function(time) {
    setInstanceProgress(adjustTime(time));
  };
  instance.pause = function() {
    instance.paused = true;
    resetTime();
  };
  instance.play = function() {
    if (!instance.paused) {
      return;
    }
    if (instance.completed) {
      instance.reset();
    }
    instance.paused = false;
    activeInstances.push(instance);
    resetTime();
    engine();
  };
  instance.reverse = function() {
    toggleInstanceDirection();
    instance.completed = instance.reversed ? false : true;
    resetTime();
  };
  instance.restart = function() {
    instance.reset();
    instance.play();
  };
  instance.remove = function(targets) {
    var targetsArray = parseTargets(targets);
    removeTargetsFromInstance(targetsArray, instance);
  };
  instance.reset();
  if (instance.autoplay) {
    instance.play();
  }
  return instance;
}
function removeTargetsFromAnimations(targetsArray, animations) {
  for (var a6 = animations.length; a6--; ) {
    if (arrayContains(targetsArray, animations[a6].animatable.target)) {
      animations.splice(a6, 1);
    }
  }
}
function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c5 = children.length; c5--; ) {
    var child = children[c5];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) {
      children.splice(c5, 1);
    }
  }
  if (!animations.length && !children.length) {
    instance.pause();
  }
}
function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i6 = activeInstances.length; i6--; ) {
    var instance = activeInstances[i6];
    removeTargetsFromInstance(targetsArray, instance);
  }
}
function stagger(val, params) {
  if (params === void 0)
    params = {};
  var direction = params.direction || "normal";
  var easing = params.easing ? parseEasings(params.easing) : null;
  var grid = params.grid;
  var axis = params.axis;
  var fromIndex = params.from || 0;
  var fromFirst = fromIndex === "first";
  var fromCenter = fromIndex === "center";
  var fromLast = fromIndex === "last";
  var isRange = is.arr(val);
  var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
  var val2 = isRange ? parseFloat(val[1]) : 0;
  var unit = getUnit(isRange ? val[1] : val) || 0;
  var start = params.start || 0 + (isRange ? val1 : 0);
  var values = [];
  var maxValue = 0;
  return function(el, i6, t13) {
    if (fromFirst) {
      fromIndex = 0;
    }
    if (fromCenter) {
      fromIndex = (t13 - 1) / 2;
    }
    if (fromLast) {
      fromIndex = t13 - 1;
    }
    if (!values.length) {
      for (var index = 0; index < t13; index++) {
        if (!grid) {
          values.push(Math.abs(fromIndex - index));
        } else {
          var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
          var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
          var toX = index % grid[0];
          var toY = Math.floor(index / grid[0]);
          var distanceX = fromX - toX;
          var distanceY = fromY - toY;
          var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          if (axis === "x") {
            value = -distanceX;
          }
          if (axis === "y") {
            value = -distanceY;
          }
          values.push(value);
        }
        maxValue = Math.max.apply(Math, values);
      }
      if (easing) {
        values = values.map(function(val3) {
          return easing(val3 / maxValue) * maxValue;
        });
      }
      if (direction === "reverse") {
        values = values.map(function(val3) {
          return axis ? val3 < 0 ? val3 * -1 : -val3 : Math.abs(maxValue - val3);
        });
      }
    }
    var spacing = isRange ? (val2 - val1) / maxValue : val1;
    return start + spacing * (Math.round(values[i6] * 100) / 100) + unit;
  };
}
function timeline(params) {
  if (params === void 0)
    params = {};
  var tl = anime(params);
  tl.duration = 0;
  tl.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl);
    var children = tl.children;
    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }
    function passThrough(ins2) {
      ins2.passThrough = true;
    }
    for (var i6 = 0; i6 < children.length; i6++) {
      passThrough(children[i6]);
    }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl.duration;
    insParams.autoplay = false;
    insParams.direction = tl.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl);
    tl.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl.delay = timings.delay;
    tl.endDelay = timings.endDelay;
    tl.duration = timings.duration;
    tl.seek(0);
    tl.reset();
    if (tl.autoplay) {
      tl.play();
    }
    return tl;
  };
  return tl;
}
anime.version = "3.2.1";
anime.speed = 1;
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
var anime_es_default = anime;

// app/sections/MySkills/MySkills.css
var MySkills_default = "/build/_assets/MySkills-INNCWRXU.css";

// app/sections/MySkills/MySkills.tsx
var links5 = () => [
  {
    rel: "stylesheet",
    href: MySkills_default
  }
];
var MySkills = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "show" : "hide";
  return /* @__PURE__ */ React16.createElement("section", {
    className: `h-fit ${className}`,
    ref: setRef
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "skills-section-container"
  }, /* @__PURE__ */ React16.createElement("img", {
    src: "/images/background/Eclipse.svg",
    alt: "Decorative background eclipse",
    className: "eclipse absolute"
  }), /* @__PURE__ */ React16.createElement(Title, null), /* @__PURE__ */ React16.createElement("div", {
    className: "Skills__Wrapper md:grid md:grid-cols-5 lg:grid-cols-7 gap-5"
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "Skills__SkillCards__Wrapper grid grid-cols-3 gap-2 custom2:grid-cols-5 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 custom3:gap-5 lg:gap-y-10 "
  }, skills.map((skill, index) => /* @__PURE__ */ React16.createElement("div", {
    className: `Skills__SkillCard flex ${className} relative left-0 top-0 w-full p-4 h-full items-center text-center`,
    key: skill.id,
    style: {
      animationDelay: `${1 + index}`
    }
  }, /* @__PURE__ */ React16.createElement("div", {
    className: "flex flex-col items-center w-full"
  }, /* @__PURE__ */ React16.createElement("img", {
    src: skill.icon,
    alt: skill.name + " icon",
    className: "w-[4rem] h-[4rem]",
    title: skill.name,
    loading: "lazy"
  }), /* @__PURE__ */ React16.createElement("p", {
    className: "text-sm sm:text-base text-textSmColor mt-2"
  }, skill.name))))), /* @__PURE__ */ React16.createElement("ul", {
    className: "abilities-wrapper mt-5 md:mt-0 md:col-span-3 lg:col-span-4 flex flex-col justify-start"
  }, abilities.map((ability, index) => /* @__PURE__ */ React16.createElement("li", {
    key: ability
  }, /* @__PURE__ */ React16.createElement("div", {
    className: `ability-card ${className} flex justify-center items-center text-left p-8`,
    style: {
      animationDelay: `${1 + index}`
    }
  }, /* @__PURE__ */ React16.createElement("p", {
    className: "text-base text-textSmColor leading-8"
  }, ability)), /* @__PURE__ */ React16.createElement("div", {
    className: "spacer-div mt-5"
  })))))));
};
var MySkills_default2 = MySkills;
var Title = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const letterClassname = wasInViewAtLeastOnce ? "title-letter" : void 0;
  React16.useEffect(() => {
    const letters = document.getElementsByClassName("title-letter");
    setTimeout(() => {
      for (let i6 = 0; i6 < letters.length; i6++) {
        anime_es_default({
          targets: letters[i6],
          easing: "easeInQuad",
          translateX: ["5px", "0"],
          delay: 50 * i6
        });
        anime_es_default({
          targets: letters[i6],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i6
        });
      }
    }, 500);
  }, [wasInViewAtLeastOnce]);
  return /* @__PURE__ */ React16.createElement("span", {
    id: "skill-title",
    className: "inline-flex text-4xl xs:text-5xl custom2:text-6xl md:text-6xl font-medium mb-10 xs:mb-12 custom2:mb-14 text-textLgColor",
    ref: setRef
  }, /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "S"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "e"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "r"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "v"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "i"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "c"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "e"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "s"));
};

// app/components/ResumeButton/ResumeButton.tsx
init_react();
var React17 = __toESM(require_react());

// app/components/ResumeButton/ResumeButton.css
var ResumeButton_default = "/build/_assets/ResumeButton-4ICFHR44.css";

// app/components/ResumeButton/ResumeButton.tsx
var links6 = () => {
  return [{ rel: "stylesheet", href: ResumeButton_default }];
};

// app/sections/Projects/Projects.tsx
init_react();
var React20 = __toESM(require_react());

// app/sections/Projects/RecentProjects.tsx
init_react();
var React18 = __toESM(require_react());
var RecentProjectsTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "title-animation" : "";
  return /* @__PURE__ */ React18.createElement("div", {
    className: `gradient-title ${className} text-center lg:text-[9rem] md:text-[7rem] sm:text-[4rem] xs:text-[3rem] text-[2.5rem] overflow-visible text-transparent`,
    ref: setRef
  }, "Recent projects");
};
var RecentProjects = ({}) => {
  return /* @__PURE__ */ React18.createElement("div", {
    className: "front-end-wrapper flex flex-col text-textSmColor w-full"
  }, /* @__PURE__ */ React18.createElement(RecentProjectsTitle, null), /* @__PURE__ */ React18.createElement("div", {
    className: "h-12"
  }), /* @__PURE__ */ React18.createElement("div", {
    className: "recent-projects-wrapper grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 md:gap-10 md:px-5"
  }, recentProjects.map((project) => /* @__PURE__ */ React18.createElement("div", {
    className: "recent-project-card bg-projects-recentBg text-center flex flex-col rounded-lg duration-300 hover:bg-projects-recentHover focus:bg-projects-recentHover shadow-lg shadow-projects-recentShadow items-center justify-between",
    key: project.name
  }, /* @__PURE__ */ React18.createElement("img", {
    src: project.img,
    alt: `Showcase image for ${project.name}`,
    className: "lg:h-56 md:h-40 w-full rounded-t-lg",
    loading: "lazy"
  }), /* @__PURE__ */ React18.createElement("div", {
    className: "recent-project-content px-5 pt-3 lg:pt-5 lg:px-10"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "recent-project-card-title font-medium text-2xl pb-3 sm:pb-5"
  }, project.name), /* @__PURE__ */ React18.createElement("div", {
    className: "recent-project-card-description text-base text-subText pb-5"
  }, project.description)), /* @__PURE__ */ React18.createElement("div", {
    className: "recent-project-buttons flex flex-row items-center justify-center text-sm pb-5"
  }, /* @__PURE__ */ React18.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "View source code"
  }, "Case Study"), /* @__PURE__ */ React18.createElement("div", {
    className: "mr-2"
  }), /* @__PURE__ */ React18.createElement(ExternalLinkButton_default2, {
    to: project.website,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit website"
  }, "Website ansehen"))))));
};
var RecentProjects_default = RecentProjects;

// app/sections/Projects/OtherProjects.tsx
init_react();
var React19 = __toESM(require_react());
var OtherProjects = ({}) => {
  return /* @__PURE__ */ React19.createElement("div", {
    className: "others-wrapper text-textSmColor"
  }, /* @__PURE__ */ React19.createElement("ul", {
    className: "other-projects-wrapper m-0 p-0 text-base grid grid-rows-7 list-none gap-5 md:gap-0"
  }, otherProjects.map((project) => /* @__PURE__ */ React19.createElement("li", {
    className: "other-project-wrapper py-4 flex flex-col items-center justify-between md:flex-row",
    key: project.name
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "info inline-flex items-center md:w-48 md:mr-5 custom:mr-0 custom:w-64 mb-5 md:mb-0"
  }, /* @__PURE__ */ React19.createElement("img", {
    src: project.icon,
    alt: project.name,
    loading: "lazy",
    title: `Icon for ${project.name}`,
    className: "md:w-8 mr-4 align-middle"
  }), /* @__PURE__ */ React19.createElement("p", {
    className: "font-medium text-lg"
  }, project.name)), /* @__PURE__ */ React19.createElement("span", {
    className: "md:flex-1 text-base text-center w-full xxs:w-4/5 xs:w-2/3 md:w-full md:text-left"
  }, project.description), /* @__PURE__ */ React19.createElement("div", {
    className: "inline-flex items-center mt-5 md:mt-0 md:ml-5 custom:ml-0"
  }, /* @__PURE__ */ React19.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit GitHub repository"
  }, "View source"), /* @__PURE__ */ React19.createElement("div", {
    className: "mr-4"
  }), /* @__PURE__ */ React19.createElement(ExternalLinkButton_default2, {
    to: project.website,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit website"
  }, "Visit Website"))))));
};
var OtherProjects_default = OtherProjects;

// app/sections/Projects/Projects.css
var Projects_default = "/build/_assets/Projects-COB2YOM7.css";

// app/sections/Projects/Projects.tsx
var links7 = () => [
  {
    rel: "stylesheet",
    href: Projects_default
  }
];
var Projects = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const featuredClassname = wasInViewAtLeastOnce ? "my-projects-title" : void 0;
  return /* @__PURE__ */ React20.createElement("div", {
    className: "projects-wrapper"
  }, /* @__PURE__ */ React20.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React20.createElement(RecentProjects_default, null), /* @__PURE__ */ React20.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React20.createElement(OtherProjects_default, null));
};
var Projects_default2 = Projects;

// app/routes/index.tsx
var React21 = __toESM(require_react());
var import_react_cookie_consent = __toESM(require_build());
var meta = () => {
  return {
    title: PORTFOLIO_WEBSITE_NAME,
    description: WEBSITE_DESCRIPTION,
    keywords: WEBSITE_KEYWORDS,
    image: PORTFOLIO_IMAGE_URL,
    "twitter:title": PORTFOLIO_WEBSITE_NAME,
    "twitter:description": WEBSITE_DESCRIPTION,
    "twitter:alt": PORTFOLIO_WEBSITE_NAME,
    "twitter:image": PORTFOLIO_IMAGE_URL,
    "twitter:card": TWITTER_CARD_TYPE,
    "twitter:creator": TWITTER_ACC,
    "twitter:site": TWITTER_ACC,
    "og:url": WEBSITE_URL,
    "og:image": PORTFOLIO_IMAGE_URL,
    "og:title": PORTFOLIO_WEBSITE_NAME,
    "og:description": WEBSITE_DESCRIPTION,
    "og:image:width": IMAGE_WIDTH,
    "og:image:height": IMAGE_HEIGHT,
    author: AUTHOR,
    "theme-color": "#16181a"
  };
};
var links8 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.alissanguyen.dev/"
    },
    ...links(),
    ...links2(),
    ...links5(),
    ...links7(),
    ...links4(),
    ...links6(),
    ...links3()
  ];
};
var TRACKING_ID = "UA-223958752-1";
esm_default.initialize(TRACKING_ID);
var Index = () => {
  const actionData = useActionData();
  const transition = useTransition();
  React21.useEffect(() => {
    esm_default.pageview(window.location.pathname + window.location.search);
  }, []);
  React21.useEffect(() => {
    const maybeContactForm = document.getElementById(contactFormHtmlId);
    if (maybeContactForm && actionData && actionData.status === 200) {
      maybeContactForm.reset();
    }
  }, [actionData]);
  return /* @__PURE__ */ React21.createElement(React21.Fragment, null, /* @__PURE__ */ React21.createElement("div", {
    className: "app tracking-wide text-lg overflow-hidden"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: `${fixedWidthLayoutClasses} flex flex-col`
  }, /* @__PURE__ */ React21.createElement(AboutMe_default2, null), /* @__PURE__ */ React21.createElement("div", {
    style: { zIndex: -1 }
  }, /* @__PURE__ */ React21.createElement(GradientBackground3, null), /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div mt-20 xs:mt-80"
  }), /* @__PURE__ */ React21.createElement(EatLearnCode, null)), /* @__PURE__ */ React21.createElement(Portfolio, null), /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div xs:mt-44 sm:mt-96",
    id: "portfolio"
  }), /* @__PURE__ */ React21.createElement(MySkills_default2, null), /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div mt-24 custom2:mt-24"
  }), /* @__PURE__ */ React21.createElement("section", {
    id: "projects"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div sm:mt-0"
  }), /* @__PURE__ */ React21.createElement(Projects_default2, null)), /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div mt-24"
  }), /* @__PURE__ */ React21.createElement("div", {
    className: "spacer-div mt-10"
  })), /* @__PURE__ */ React21.createElement("div", {
    className: "blob-bg pb-10",
    id: "contact"
  }, /* @__PURE__ */ React21.createElement("div", {
    className: `${fixedWidthLayoutClasses} pt-20`
  }, /* @__PURE__ */ React21.createElement(Contact_default2, {
    fieldErrors: actionData && actionData.fieldErrors,
    transition
  })), /* @__PURE__ */ React21.createElement(import_react_cookie_consent.default, {
    style: { background: "black" },
    buttonStyle: { background: "white" },
    debug: true,
    buttonClasses: "btn btn-primary",
    containerClasses: "alert alert-warning col-lg-12",
    contentClasses: "text-capitalize",
    buttonText: "Ich verstehe.",
    declineButtonText: "Ablehnen."
  }, "Wir verwenden nur erforderliche Cookies und speichern keine personenbezogenen Daten."))));
};
var routes_default = Index;
export {
  routes_default as default,
  links8 as links,
  meta
};
/*! For license information please see index.js.LICENSE.txt */
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/index-NNJOMCL2.js.map
