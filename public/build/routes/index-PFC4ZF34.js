import {
  require_react_dom
} from "/build/_shared/chunk-VH4TZHYW.js";
import "/build/_shared/chunk-GGSUZKFI.js";
import {
  ChevronDownIcon_default
} from "/build/_shared/chunk-QVUXHPFX.js";
import {
  esm_default
} from "/build/_shared/chunk-64VENT2U.js";
import "/build/_shared/chunk-AOOMS32I.js";
import {
  AUTHOR,
  AlertType,
  ContactFormFields,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  PORTFOLIO_IMAGE_URL,
  PORTFOLIO_WEBSITE_NAME,
  SupportedTheme,
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
} from "/build/_shared/chunk-TFKBSNK3.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-3QRA3G35.js";
import {
  __commonJS,
  __toModule,
  init_react,
  require_object_assign,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// node_modules/react/cjs/react-jsx-runtime.development.js
var require_react_jsx_runtime_development = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.development.js"(exports) {
    init_react();
    "use strict";
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
              var s4 = sampleLines.length - 1;
              var c4 = controlLines.length - 1;
              while (s4 >= 1 && c4 >= 0 && sampleLines[s4] !== controlLines[c4]) {
                c4--;
              }
              for (; s4 >= 1 && c4 >= 0; s4--, c4--) {
                if (sampleLines[s4] !== controlLines[c4]) {
                  if (s4 !== 1 || c4 !== 1) {
                    do {
                      s4--;
                      c4--;
                      if (c4 < 0 || sampleLines[s4] !== controlLines[c4]) {
                        var _frame = "\n" + sampleLines[s4].replace(" at new ", " at ");
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s4 >= 1 && c4 >= 0);
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
        function warnIfStringRefCannotBeAutoConverted(config2, self) {
          {
            if (typeof config2.ref === "string" && ReactCurrentOwner.current && self && ReactCurrentOwner.current.stateNode !== self) {
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
        var ReactElement = function(type, key, ref, self, source, owner, props) {
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
              value: self
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
        function jsxDEV(type, config2, maybeKey, source, self) {
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
              warnIfStringRefCannotBeAutoConverted(config2, self);
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
            return ReactElement(type, key, ref, self, source, ReactCurrentOwner.current, props);
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
              for (var i3 = 0; i3 < node.length; i3++) {
                var child = node[i3];
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
            for (var i3 = 0; i3 < keys.length; i3++) {
              var key = keys[i3];
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
        function jsxWithValidation(type, props, key, isStaticChildren, source, self) {
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
            var element = jsxDEV(type, props, key, source, self);
            if (element == null) {
              return element;
            }
            if (validType) {
              var children = props.children;
              if (children !== void 0) {
                if (isStaticChildren) {
                  if (Array.isArray(children)) {
                    for (var i3 = 0; i3 < children.length; i3++) {
                      validateChildKeys(children[i3], type);
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
    init_react();
    "use strict";
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
    init_react();
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o6, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      Object.defineProperty(o6, k22, { enumerable: true, get: function() {
        return m3[k3];
      } });
    } : function(o6, m3, k3, k22) {
      if (k22 === void 0)
        k22 = k3;
      o6[k22] = m3[k3];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o6, v3) {
      Object.defineProperty(o6, "default", { enumerable: true, value: v3 });
    } : function(o6, v3) {
      o6["default"] = v3;
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
      for (let i3 = 0; i3 <= string1.length - 1; i3++) {
        if (str1[i3] === str2[i3]) {
          commonSubstring = commonSubstring + str1[i3];
        } else {
          return commonSubstring;
        }
      }
      return commonSubstring;
    }
    exports.findCommonSubstring = findCommonSubstring;
  }
});

// browser-route-module:/Users/flo/Development/Devato/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();

// app/components/Decoration.tsx
init_react();
var React3 = __toModule(require_react());

// app/hooks/useWasInViewAtLeastOnce.ts
init_react();
var React2 = __toModule(require_react());

// node_modules/react-intersection-observer/react-intersection-observer.m.js
init_react();
var React = __toModule(require_react());
var import_react = __toModule(require_react());
function _extends() {
  _extends = Object.assign || function(target) {
    for (var i3 = 1; i3 < arguments.length; i3++) {
      var source = arguments[i3];
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
function _setPrototypeOf(o6, p2) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o7, p3) {
    o7.__proto__ = p3;
    return o7;
  };
  return _setPrototypeOf(o6, p2);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i3;
  for (i3 = 0; i3 < sourceKeys.length; i3++) {
    key = sourceKeys[i3];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
var observerMap = new Map();
var RootIds = new WeakMap();
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
    var elements = new Map();
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
var _excluded = ["children", "as", "tag", "triggerOnce", "threshold", "root", "rootMargin", "onChange", "skip", "trackVisibility", "delay", "initialInView", "fallbackInView"];
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
    var _this$props2 = this.props, children = _this$props2.children, as = _this$props2.as, tag = _this$props2.tag, props = _objectWithoutPropertiesLoose(_this$props2, _excluded);
    return /* @__PURE__ */ React.createElement(as || tag || "div", _extends({
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
var import_react2 = __toModule(require_react());
var e = "colors";
var t = "sizes";
var r = "space";
var n = { gap: r, gridGap: r, columnGap: r, gridColumnGap: r, rowGap: r, gridRowGap: r, inset: r, insetBlock: r, insetBlockEnd: r, insetBlockStart: r, insetInline: r, insetInlineEnd: r, insetInlineStart: r, margin: r, marginTop: r, marginRight: r, marginBottom: r, marginLeft: r, marginBlock: r, marginBlockEnd: r, marginBlockStart: r, marginInline: r, marginInlineEnd: r, marginInlineStart: r, padding: r, paddingTop: r, paddingRight: r, paddingBottom: r, paddingLeft: r, paddingBlock: r, paddingBlockEnd: r, paddingBlockStart: r, paddingInline: r, paddingInlineEnd: r, paddingInlineStart: r, top: r, right: r, bottom: r, left: r, scrollMargin: r, scrollMarginTop: r, scrollMarginRight: r, scrollMarginBottom: r, scrollMarginLeft: r, scrollMarginX: r, scrollMarginY: r, scrollMarginBlock: r, scrollMarginBlockEnd: r, scrollMarginBlockStart: r, scrollMarginInline: r, scrollMarginInlineEnd: r, scrollMarginInlineStart: r, scrollPadding: r, scrollPaddingTop: r, scrollPaddingRight: r, scrollPaddingBottom: r, scrollPaddingLeft: r, scrollPaddingX: r, scrollPaddingY: r, scrollPaddingBlock: r, scrollPaddingBlockEnd: r, scrollPaddingBlockStart: r, scrollPaddingInline: r, scrollPaddingInlineEnd: r, scrollPaddingInlineStart: r, fontSize: "fontSizes", background: e, backgroundColor: e, backgroundImage: e, borderImage: e, border: e, borderBlock: e, borderBlockEnd: e, borderBlockStart: e, borderBottom: e, borderBottomColor: e, borderColor: e, borderInline: e, borderInlineEnd: e, borderInlineStart: e, borderLeft: e, borderLeftColor: e, borderRight: e, borderRightColor: e, borderTop: e, borderTopColor: e, caretColor: e, color: e, columnRuleColor: e, fill: e, outline: e, outlineColor: e, stroke: e, textDecorationColor: e, fontFamily: "fonts", fontWeight: "fontWeights", lineHeight: "lineHeights", letterSpacing: "letterSpacings", blockSize: t, minBlockSize: t, maxBlockSize: t, inlineSize: t, minInlineSize: t, maxInlineSize: t, width: t, minWidth: t, maxWidth: t, height: t, minHeight: t, maxHeight: t, flexBasis: t, gridTemplateColumns: t, gridTemplateRows: t, borderWidth: "borderWidths", borderTopWidth: "borderWidths", borderRightWidth: "borderWidths", borderBottomWidth: "borderWidths", borderLeftWidth: "borderWidths", borderStyle: "borderStyles", borderTopStyle: "borderStyles", borderRightStyle: "borderStyles", borderBottomStyle: "borderStyles", borderLeftStyle: "borderStyles", borderRadius: "radii", borderTopLeftRadius: "radii", borderTopRightRadius: "radii", borderBottomRightRadius: "radii", borderBottomLeftRadius: "radii", boxShadow: "shadows", textShadow: "shadows", transition: "transitions", zIndex: "zIndices" };
var i = (e5, t8) => typeof t8 == "function" ? { "()": Function.prototype.toString.call(t8) } : t8;
var o = () => {
  const e5 = Object.create(null);
  return (t8, r5, ...n2) => {
    const o6 = ((e6) => JSON.stringify(e6, i))(t8);
    return o6 in e5 ? e5[o6] : e5[o6] = r5(t8, ...n2);
  };
};
var l = Symbol.for("sxs.internal");
var s = (e5, t8) => Object.defineProperties(e5, Object.getOwnPropertyDescriptors(t8));
var a = (e5) => {
  for (const t8 in e5)
    return true;
  return false;
};
var { hasOwnProperty: c } = Object.prototype;
var d = (e5) => e5.includes("-") ? e5 : e5.replace(/[A-Z]/g, (e6) => "-" + e6.toLowerCase());
var g = /\s+(?![^()]*\))/;
var p = (e5) => (t8) => e5(...typeof t8 == "string" ? String(t8).split(g) : [t8]);
var u = { appearance: (e5) => ({ WebkitAppearance: e5, appearance: e5 }), backfaceVisibility: (e5) => ({ WebkitBackfaceVisibility: e5, backfaceVisibility: e5 }), backdropFilter: (e5) => ({ WebkitBackdropFilter: e5, backdropFilter: e5 }), backgroundClip: (e5) => ({ WebkitBackgroundClip: e5, backgroundClip: e5 }), boxDecorationBreak: (e5) => ({ WebkitBoxDecorationBreak: e5, boxDecorationBreak: e5 }), clipPath: (e5) => ({ WebkitClipPath: e5, clipPath: e5 }), content: (e5) => ({ content: e5.includes('"') || e5.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e5) ? e5 : `"${e5}"` }), hyphens: (e5) => ({ WebkitHyphens: e5, hyphens: e5 }), maskImage: (e5) => ({ WebkitMaskImage: e5, maskImage: e5 }), maskSize: (e5) => ({ WebkitMaskSize: e5, maskSize: e5 }), tabSize: (e5) => ({ MozTabSize: e5, tabSize: e5 }), textSizeAdjust: (e5) => ({ WebkitTextSizeAdjust: e5, textSizeAdjust: e5 }), userSelect: (e5) => ({ WebkitUserSelect: e5, userSelect: e5 }), marginBlock: p((e5, t8) => ({ marginBlockStart: e5, marginBlockEnd: t8 || e5 })), marginInline: p((e5, t8) => ({ marginInlineStart: e5, marginInlineEnd: t8 || e5 })), maxSize: p((e5, t8) => ({ maxBlockSize: e5, maxInlineSize: t8 || e5 })), minSize: p((e5, t8) => ({ minBlockSize: e5, minInlineSize: t8 || e5 })), paddingBlock: p((e5, t8) => ({ paddingBlockStart: e5, paddingBlockEnd: t8 || e5 })), paddingInline: p((e5, t8) => ({ paddingInlineStart: e5, paddingInlineEnd: t8 || e5 })) };
var h = /([\d.]+)([^]*)/;
var f = (e5, t8) => e5.length ? e5.reduce((e6, r5) => (e6.push(...t8.map((e7) => e7.includes("&") ? e7.replace(/&/g, /[ +>|~]/.test(r5) && /&.*&/.test(e7) ? `:is(${r5})` : r5) : r5 + " " + e7)), e6), []) : t8;
var m = (e5, t8) => e5 in b && typeof t8 == "string" ? t8.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t9, r5, n2, i3) => r5 + (n2 === "stretch" ? `-moz-available${i3};${d(e5)}:${r5}-webkit-fill-available` : `-moz-fit-content${i3};${d(e5)}:${r5}fit-content`) + i3) : String(t8);
var b = { blockSize: 1, height: 1, inlineSize: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, width: 1 };
var S = (e5) => e5 ? e5 + "-" : "";
var k = (e5, t8, r5) => e5.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e6, n2, i3, o6, l3) => o6 == "$" == !!i3 ? e6 : (n2 || o6 == "--" ? "calc(" : "") + "var(--" + (o6 === "$" ? S(t8) + (l3.includes("$") ? "" : S(r5)) + l3.replace(/\$/g, "-") : l3) + ")" + (n2 || o6 == "--" ? "*" + (n2 || "") + (i3 || "1") + ")" : ""));
var y = /\s*,\s*(?![^()]*\))/;
var B = Object.prototype.toString;
var $ = (e5, t8, r5, n2, i3) => {
  let o6, l3, s4;
  const a4 = (e6, t9, r6) => {
    let c4, g2;
    const p2 = (e7) => {
      for (c4 in e7) {
        const R2 = c4.charCodeAt(0) === 64, z3 = R2 && Array.isArray(e7[c4]) ? e7[c4] : [e7[c4]];
        for (g2 of z3) {
          const e8 = /[A-Z]/.test($2 = c4) ? $2 : $2.replace(/-[^]/g, (e9) => e9[1].toUpperCase()), z4 = typeof g2 == "object" && g2 && g2.toString === B && (!n2.utils[e8] || !t9.length);
          if (e8 in n2.utils && !z4) {
            const t10 = n2.utils[e8];
            if (t10 !== l3) {
              l3 = t10, p2(t10(g2)), l3 = null;
              continue;
            }
          } else if (e8 in u) {
            const t10 = u[e8];
            if (t10 !== s4) {
              s4 = t10, p2(t10(g2)), s4 = null;
              continue;
            }
          }
          if (R2 && (b2 = c4.slice(1) in n2.media ? "@media " + n2.media[c4.slice(1)] : c4, c4 = b2.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e9, t10, r7, n3, i4, o7) => {
            const l4 = h.test(t10), s5 = 0.0625 * (l4 ? -1 : 1), [a5, c5] = l4 ? [n3, t10] : [t10, n3];
            return "(" + (r7[0] === "=" ? "" : r7[0] === ">" === l4 ? "max-" : "min-") + a5 + ":" + (r7[0] !== "=" && r7.length === 1 ? c5.replace(h, (e10, t11, n4) => Number(t11) + s5 * (r7 === ">" ? 1 : -1) + n4) : c5) + (i4 ? ") and (" + (i4[0] === ">" ? "min-" : "max-") + a5 + ":" + (i4.length === 1 ? o7.replace(h, (e10, t11, r8) => Number(t11) + s5 * (i4 === ">" ? -1 : 1) + r8) : o7) : "") + ")";
          })), z4) {
            const e9 = R2 ? r6.concat(c4) : [...r6], n3 = R2 ? [...t9] : f(t9, c4.split(y));
            o6 !== void 0 && i3(x(...o6)), o6 = void 0, a4(g2, n3, e9);
          } else
            o6 === void 0 && (o6 = [[], t9, r6]), c4 = R2 || c4.charCodeAt(0) !== 36 ? c4 : `--${S(n2.prefix)}${c4.slice(1).replace(/\$/g, "-")}`, g2 = z4 ? g2 : typeof g2 == "number" ? g2 && e8 in I ? String(g2) + "px" : String(g2) : k(m(e8, g2 == null ? "" : g2), n2.prefix, n2.themeMap[e8]), o6[0].push(`${R2 ? `${c4} ` : `${d(c4)}:`}${g2}`);
        }
      }
      var b2, $2;
    };
    p2(e6), o6 !== void 0 && i3(x(...o6)), o6 = void 0;
  };
  a4(e5, t8, r5);
};
var x = (e5, t8, r5) => `${r5.map((e6) => `${e6}{`).join("")}${t8.length ? `${t8.join(",")}{` : ""}${e5.join(";")}${t8.length ? "}" : ""}${Array(r5.length ? r5.length + 1 : 0).join("}")}`;
var I = { animationDelay: 1, animationDuration: 1, backgroundSize: 1, blockSize: 1, border: 1, borderBlock: 1, borderBlockEnd: 1, borderBlockEndWidth: 1, borderBlockStart: 1, borderBlockStartWidth: 1, borderBlockWidth: 1, borderBottom: 1, borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderBottomWidth: 1, borderEndEndRadius: 1, borderEndStartRadius: 1, borderInlineEnd: 1, borderInlineEndWidth: 1, borderInlineStart: 1, borderInlineStartWidth: 1, borderInlineWidth: 1, borderLeft: 1, borderLeftWidth: 1, borderRadius: 1, borderRight: 1, borderRightWidth: 1, borderSpacing: 1, borderStartEndRadius: 1, borderStartStartRadius: 1, borderTop: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1, borderTopWidth: 1, borderWidth: 1, bottom: 1, columnGap: 1, columnRule: 1, columnRuleWidth: 1, columnWidth: 1, containIntrinsicSize: 1, flexBasis: 1, fontSize: 1, gap: 1, gridAutoColumns: 1, gridAutoRows: 1, gridTemplateColumns: 1, gridTemplateRows: 1, height: 1, inlineSize: 1, inset: 1, insetBlock: 1, insetBlockEnd: 1, insetBlockStart: 1, insetInline: 1, insetInlineEnd: 1, insetInlineStart: 1, left: 1, letterSpacing: 1, margin: 1, marginBlock: 1, marginBlockEnd: 1, marginBlockStart: 1, marginBottom: 1, marginInline: 1, marginInlineEnd: 1, marginInlineStart: 1, marginLeft: 1, marginRight: 1, marginTop: 1, maxBlockSize: 1, maxHeight: 1, maxInlineSize: 1, maxWidth: 1, minBlockSize: 1, minHeight: 1, minInlineSize: 1, minWidth: 1, offsetDistance: 1, offsetRotate: 1, outline: 1, outlineOffset: 1, outlineWidth: 1, overflowClipMargin: 1, padding: 1, paddingBlock: 1, paddingBlockEnd: 1, paddingBlockStart: 1, paddingBottom: 1, paddingInline: 1, paddingInlineEnd: 1, paddingInlineStart: 1, paddingLeft: 1, paddingRight: 1, paddingTop: 1, perspective: 1, right: 1, rowGap: 1, scrollMargin: 1, scrollMarginBlock: 1, scrollMarginBlockEnd: 1, scrollMarginBlockStart: 1, scrollMarginBottom: 1, scrollMarginInline: 1, scrollMarginInlineEnd: 1, scrollMarginInlineStart: 1, scrollMarginLeft: 1, scrollMarginRight: 1, scrollMarginTop: 1, scrollPadding: 1, scrollPaddingBlock: 1, scrollPaddingBlockEnd: 1, scrollPaddingBlockStart: 1, scrollPaddingBottom: 1, scrollPaddingInline: 1, scrollPaddingInlineEnd: 1, scrollPaddingInlineStart: 1, scrollPaddingLeft: 1, scrollPaddingRight: 1, scrollPaddingTop: 1, shapeMargin: 1, textDecoration: 1, textDecorationThickness: 1, textIndent: 1, textUnderlineOffset: 1, top: 1, transitionDelay: 1, transitionDuration: 1, verticalAlign: 1, width: 1, wordSpacing: 1 };
var R = (e5) => String.fromCharCode(e5 + (e5 > 25 ? 39 : 97));
var z = (e5) => ((e6) => {
  let t8, r5 = "";
  for (t8 = Math.abs(e6); t8 > 52; t8 = t8 / 52 | 0)
    r5 = R(t8 % 52) + r5;
  return R(t8 % 52) + r5;
})(((e6, t8) => {
  let r5 = t8.length;
  for (; r5; )
    e6 = 33 * e6 ^ t8.charCodeAt(--r5);
  return e6;
})(5381, JSON.stringify(e5)) >>> 0);
var W = ["themed", "global", "styled", "onevar", "resonevar", "allvar", "inline"];
var j = (e5) => {
  if (e5.href && !e5.href.startsWith(location.origin))
    return false;
  try {
    return !!e5.cssRules;
  } catch (e6) {
    return false;
  }
};
var E = (e5) => {
  let t8;
  const r5 = () => {
    const { cssRules: e6 } = t8.sheet;
    return [].map.call(e6, (r6, n3) => {
      const { cssText: i3 } = r6;
      let o6 = "";
      if (i3.startsWith("--sxs"))
        return "";
      if (e6[n3 - 1] && (o6 = e6[n3 - 1].cssText).startsWith("--sxs")) {
        if (!r6.cssRules.length)
          return "";
        for (const e7 in t8.rules)
          if (t8.rules[e7].group === r6)
            return `--sxs{--sxs:${[...t8.rules[e7].cache].join(" ")}}${i3}`;
        return r6.cssRules.length ? `${o6}${i3}` : "";
      }
      return i3;
    }).join("");
  }, n2 = () => {
    if (t8) {
      const { rules: e6, sheet: r6 } = t8;
      if (!r6.deleteRule) {
        for (; Object(Object(r6.cssRules)[0]).type === 3; )
          r6.cssRules.splice(0, 1);
        r6.cssRules = [];
      }
      for (const t9 in e6)
        delete e6[t9];
    }
    const i3 = Object(e5).styleSheets || [];
    for (const e6 of i3)
      if (j(e6)) {
        for (let i4 = 0, o7 = e6.cssRules; o7[i4]; ++i4) {
          const l4 = Object(o7[i4]);
          if (l4.type !== 1)
            continue;
          const s4 = Object(o7[i4 + 1]);
          if (s4.type !== 4)
            continue;
          ++i4;
          const { cssText: a4 } = l4;
          if (!a4.startsWith("--sxs"))
            continue;
          const c4 = a4.slice(14, -3).trim().split(/\s+/), d3 = W[c4[0]];
          d3 && (t8 || (t8 = { sheet: e6, reset: n2, rules: {}, toString: r5 }), t8.rules[d3] = { group: s4, index: i4, cache: new Set(c4) });
        }
        if (t8)
          break;
      }
    if (!t8) {
      const i4 = (e6, t9) => ({ type: t9, cssRules: [], insertRule(e7, t10) {
        this.cssRules.splice(t10, 0, i4(e7, { import: 3, undefined: 1 }[(e7.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
      }, get cssText() {
        return e6 === "@media{}" ? `@media{${[].map.call(this.cssRules, (e7) => e7.cssText).join("")}}` : e6;
      } });
      t8 = { sheet: e5 ? (e5.head || e5).appendChild(document.createElement("style")).sheet : i4("", "text/css"), rules: {}, reset: n2, toString: r5 };
    }
    const { sheet: o6, rules: l3 } = t8;
    for (let e6 = W.length - 1; e6 >= 0; --e6) {
      const t9 = W[e6];
      if (!l3[t9]) {
        const r6 = W[e6 + 1], n3 = l3[r6] ? l3[r6].index : o6.cssRules.length;
        o6.insertRule("@media{}", n3), o6.insertRule(`--sxs{--sxs:${e6}}`, n3), l3[t9] = { group: o6.cssRules[n3 + 1], index: n3, cache: new Set([e6]) };
      }
      v(l3[t9]);
    }
  };
  return n2(), t8;
};
var v = (e5) => {
  const t8 = e5.group;
  let r5 = t8.cssRules.length;
  e5.apply = (e6) => {
    try {
      t8.insertRule(e6, r5), ++r5;
    } catch (e7) {
    }
  };
};
var T = Symbol();
var w = o();
var M = (e5, t8) => w(e5, () => (...r5) => {
  let n2 = { type: null, composers: new Set() };
  for (const t9 of r5)
    if (t9 != null)
      if (t9[l]) {
        n2.type == null && (n2.type = t9[l].type);
        for (const e6 of t9[l].composers)
          n2.composers.add(e6);
      } else
        t9.constructor !== Object || t9.$$typeof ? n2.type == null && (n2.type = t9) : n2.composers.add(C(t9, e5));
  return n2.type == null && (n2.type = "span"), n2.composers.size || n2.composers.add(["PJLV", {}, [], [], {}, []]), P(e5, n2, t8);
});
var C = ({ variants: e5, compoundVariants: t8, defaultVariants: r5, ...n2 }, i3) => {
  const o6 = `${S(i3.prefix)}c-${z(n2)}`, l3 = [], s4 = [], d3 = Object.create(null), g2 = [];
  for (const e6 in r5)
    d3[e6] = String(r5[e6]);
  if (typeof e5 == "object" && e5)
    for (const t9 in e5) {
      p2 = d3, u2 = t9, c.call(p2, u2) || (d3[t9] = "undefined");
      const r6 = e5[t9];
      for (const e6 in r6) {
        const n3 = { [t9]: String(e6) };
        String(e6) === "undefined" && g2.push(t9);
        const i4 = r6[e6], o7 = [n3, i4, !a(i4)];
        l3.push(o7);
      }
    }
  var p2, u2;
  if (typeof t8 == "object" && t8)
    for (const e6 of t8) {
      let { css: t9, ...r6 } = e6;
      t9 = typeof t9 == "object" && t9 || {};
      for (const e7 in r6)
        r6[e7] = String(r6[e7]);
      const n3 = [r6, t9, !a(t9)];
      s4.push(n3);
    }
  return [o6, n2, l3, s4, d3, g2];
};
var P = (e5, t8, r5) => {
  const [n2, i3, o6, a4] = L(t8.composers), c4 = typeof t8.type == "function" || t8.type.$$typeof ? ((e6) => {
    function t9() {
      for (let r6 = 0; r6 < t9[T].length; r6++) {
        const [n3, i4] = t9[T][r6];
        e6.rules[n3].apply(i4);
      }
      return t9[T] = [], null;
    }
    return t9[T] = [], t9.rules = {}, W.forEach((e7) => t9.rules[e7] = { apply: (r6) => t9[T].push([e7, r6]) }), t9;
  })(r5) : null, d3 = (c4 || r5).rules, g2 = `.${n2}${i3.length > 1 ? `:where(.${i3.slice(1).join(".")})` : ""}`, p2 = (l3) => {
    l3 = typeof l3 == "object" && l3 || A;
    const { css: s4, ...p3 } = l3, u2 = {};
    for (const e6 in o6)
      if (delete p3[e6], e6 in l3) {
        let t9 = l3[e6];
        typeof t9 == "object" && t9 ? u2[e6] = { "@initial": o6[e6], ...t9 } : (t9 = String(t9), u2[e6] = t9 !== "undefined" || a4.has(e6) ? t9 : o6[e6]);
      } else
        u2[e6] = o6[e6];
    const h2 = new Set([...i3]);
    for (const [n3, i4, o7, l4] of t8.composers) {
      r5.rules.styled.cache.has(n3) || (r5.rules.styled.cache.add(n3), $(i4, [`.${n3}`], [], e5, (e6) => {
        d3.styled.apply(e6);
      }));
      const t9 = O(o7, u2, e5.media), s5 = O(l4, u2, e5.media, true);
      for (const i5 of t9)
        if (i5 !== void 0)
          for (const [t10, o8, l5] of i5) {
            const i6 = `${n3}-${z(o8)}-${t10}`;
            h2.add(i6);
            const s6 = (l5 ? r5.rules.resonevar : r5.rules.onevar).cache, a5 = l5 ? d3.resonevar : d3.onevar;
            s6.has(i6) || (s6.add(i6), $(o8, [`.${i6}`], [], e5, (e6) => {
              a5.apply(e6);
            }));
          }
      for (const t10 of s5)
        if (t10 !== void 0)
          for (const [i5, o8] of t10) {
            const t11 = `${n3}-${z(o8)}-${i5}`;
            h2.add(t11), r5.rules.allvar.cache.has(t11) || (r5.rules.allvar.cache.add(t11), $(o8, [`.${t11}`], [], e5, (e6) => {
              d3.allvar.apply(e6);
            }));
          }
    }
    if (typeof s4 == "object" && s4) {
      const t9 = `${n2}-i${z(s4)}-css`;
      h2.add(t9), r5.rules.inline.cache.has(t9) || (r5.rules.inline.cache.add(t9), $(s4, [`.${t9}`], [], e5, (e6) => {
        d3.inline.apply(e6);
      }));
    }
    for (const e6 of String(l3.className || "").trim().split(/\s+/))
      e6 && h2.add(e6);
    const f2 = p3.className = [...h2].join(" ");
    return { type: t8.type, className: f2, selector: g2, props: p3, toString: () => f2, deferredInjector: c4 };
  };
  return s(p2, { className: n2, selector: g2, [l]: t8, toString: () => (r5.rules.styled.cache.has(n2) || p2(), n2) });
};
var L = (e5) => {
  let t8 = "";
  const r5 = [], n2 = {}, i3 = [];
  for (const [o6, , , , l3, s4] of e5) {
    t8 === "" && (t8 = o6), r5.push(o6), i3.push(...s4);
    for (const e6 in l3) {
      const t9 = l3[e6];
      (n2[e6] === void 0 || t9 !== "undefined" || s4.includes(t9)) && (n2[e6] = t9);
    }
  }
  return [t8, r5, n2, new Set(i3)];
};
var O = (e5, t8, r5, n2) => {
  const i3 = [];
  e:
    for (let [o6, l3, s4] of e5) {
      if (s4)
        continue;
      let e6, a4 = 0, c4 = false;
      for (e6 in o6) {
        const n3 = o6[e6];
        let i4 = t8[e6];
        if (i4 !== n3) {
          if (typeof i4 != "object" || !i4)
            continue e;
          {
            let e7, t9, o7 = 0;
            for (const l4 in i4) {
              if (n3 === String(i4[l4])) {
                if (l4 !== "@initial") {
                  const e8 = l4.slice(1);
                  (t9 = t9 || []).push(e8 in r5 ? r5[e8] : l4.replace(/^@media ?/, "")), c4 = true;
                }
                a4 += o7, e7 = true;
              }
              ++o7;
            }
            if (t9 && t9.length && (l3 = { ["@media " + t9.join(", ")]: l3 }), !e7)
              continue e;
          }
        }
      }
      (i3[a4] = i3[a4] || []).push([n2 ? "cv" : `${e6}-${o6[e6]}`, l3, c4]);
    }
  return i3;
};
var A = {};
var N = o();
var D = (e5, t8) => N(e5, () => (...r5) => {
  const n2 = () => {
    for (let n3 of r5) {
      n3 = typeof n3 == "object" && n3 || {};
      let r6 = z(n3);
      if (!t8.rules.global.cache.has(r6)) {
        if (t8.rules.global.cache.add(r6), "@import" in n3) {
          let e6 = [].indexOf.call(t8.sheet.cssRules, t8.rules.themed.group) - 1;
          for (let r7 of [].concat(n3["@import"]))
            r7 = r7.includes('"') || r7.includes("'") ? r7 : `"${r7}"`, t8.sheet.insertRule(`@import ${r7};`, e6++);
          delete n3["@import"];
        }
        $(n3, [], [], e5, (e6) => {
          t8.rules.global.apply(e6);
        });
      }
    }
    return "";
  };
  return s(n2, { toString: n2 });
});
var H = o();
var V = (e5, t8) => H(e5, () => (r5) => {
  const n2 = `${S(e5.prefix)}k-${z(r5)}`, i3 = () => {
    if (!t8.rules.global.cache.has(n2)) {
      t8.rules.global.cache.add(n2);
      const i4 = [];
      $(r5, [], [], e5, (e6) => i4.push(e6));
      const o6 = `@keyframes ${n2}{${i4.join("")}}`;
      t8.rules.global.apply(o6);
    }
    return n2;
  };
  return s(i3, { get name() {
    return i3();
  }, toString: i3 });
});
var G = class {
  constructor(e5, t8, r5, n2) {
    this.token = e5 == null ? "" : String(e5), this.value = t8 == null ? "" : String(t8), this.scale = r5 == null ? "" : String(r5), this.prefix = n2 == null ? "" : String(n2);
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
var J = (e5, t8) => F(e5, () => (r5, n2) => {
  n2 = typeof r5 == "object" && r5 || Object(n2);
  const i3 = `.${r5 = (r5 = typeof r5 == "string" ? r5 : "") || `${S(e5.prefix)}t-${z(n2)}`}`, o6 = {}, l3 = [];
  for (const t9 in n2) {
    o6[t9] = {};
    for (const r6 in n2[t9]) {
      const i4 = `--${S(e5.prefix)}${t9}-${r6}`, s5 = k(String(n2[t9][r6]), e5.prefix, t9);
      o6[t9][r6] = new G(r6, s5, t9, e5.prefix), l3.push(`${i4}:${s5}`);
    }
  }
  const s4 = () => {
    if (l3.length && !t8.rules.themed.cache.has(r5)) {
      t8.rules.themed.cache.add(r5);
      const i4 = `${n2 === e5.theme ? ":root," : ""}.${r5}{${l3.join(";")}}`;
      t8.rules.themed.apply(i4);
    }
    return r5;
  };
  return { ...o6, get className() {
    return s4();
  }, selector: i3, toString: s4 };
});
var U = o();
var Y = o();
var q = (e5) => {
  const t8 = ((e6) => {
    let t9 = false;
    const r5 = U(e6, (e7) => {
      t9 = true;
      const r6 = "prefix" in (e7 = typeof e7 == "object" && e7 || {}) ? String(e7.prefix) : "", i3 = typeof e7.media == "object" && e7.media || {}, o6 = typeof e7.root == "object" ? e7.root || null : globalThis.document || null, l3 = typeof e7.theme == "object" && e7.theme || {}, s4 = { prefix: r6, media: i3, theme: l3, themeMap: typeof e7.themeMap == "object" && e7.themeMap || { ...n }, utils: typeof e7.utils == "object" && e7.utils || {} }, a4 = E(o6), c4 = { css: M(s4, a4), globalCss: D(s4, a4), keyframes: V(s4, a4), createTheme: J(s4, a4), reset() {
        a4.reset(), c4.theme.toString();
      }, theme: {}, sheet: a4, config: s4, prefix: r6, getCssText: a4.toString, toString: a4.toString };
      return String(c4.theme = c4.createTheme(l3)), c4;
    });
    return t9 || r5.reset(), r5;
  })(e5);
  return t8.styled = (({ config: e6, sheet: t9 }) => Y(e6, () => {
    const r5 = M(e6, t9);
    return (...e7) => {
      const t10 = r5(...e7), n2 = t10[l].type, i3 = import_react2.default.forwardRef((e8, r6) => {
        const i4 = e8 && e8.as || n2, { props: o6, deferredInjector: l3 } = t10(e8);
        return delete o6.as, o6.ref = r6, l3 ? import_react2.default.createElement(import_react2.default.Fragment, null, import_react2.default.createElement(i4, o6), import_react2.default.createElement(l3, null)) : import_react2.default.createElement(i4, o6);
      });
      return i3.className = t10.className, i3.displayName = `Styled.${n2.displayName || n2.name || n2}`, i3.selector = t10.selector, i3.toString = () => t10.selector, i3[l] = t10[l], i3;
    };
  }))(t8), t8;
};

// node_modules/@nextui-org/react/esm/theme/common.js
init_react();
var defaultTokens = { fonts: { sans: "-apple-system, BlinkMacSystemFont, 'Segoe UI','Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans','Helvetica Neue', sans-serif;", mono: "Menlo, Monaco, 'Lucida Console', 'Liberation Mono', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono','Courier New', monospace;" }, fontSizes: { tiny: ".75rem", xs: "0.875rem", base: "1rem", sm: "1.25rem", md: "1.5rem", lg: "2.25rem", xl: "3rem" }, fontWeights: { hairline: 100, thin: 200, light: 300, normal: 400, medium: 500, semibold: 600, bold: 700, extrabold: 800, black: 900 }, lineHeights: { xs: 1, sm: 1.25, md: 1.5, lg: 1.625, xl: 1.75 }, letterSpacings: { tighter: "-0.05em", tight: "-0.025em", normal: "0", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, space: { 0: "0rem", xs: "0.5rem", sm: "0.75rem", md: "1rem", lg: "1.25rem", xl: "2.25rem", px: "1px", 1: "0.125rem", 2: "0.25rem", 3: "0.375rem", 4: "0.5rem", 5: "0.625rem", 6: "0.75rem", 7: "0.875rem", 8: "1rem", 9: "1.25rem", 10: "1.5rem", 11: "1.75rem", 12: "2rem", 13: "2.25rem", 14: "2.5rem", 15: "2.75rem", 16: "3rem", 17: "3.5rem", 18: "4rem", 20: "5rem", 24: "6rem", 28: "7rem", 32: "8rem", 36: "9rem", 40: "10rem", 44: "11rem", 48: "12rem", 52: "13rem", 56: "14rem", 60: "15rem", 64: "16rem", 72: "18rem", 80: "20rem", 96: "24rem" }, radii: { xs: "7px", sm: "9px", md: "12px", base: "14px", lg: "14px", xl: "18px", squared: "33%", rounded: "50%", pill: "9999px" }, zIndices: { 1: "100", 2: "200", 3: "300", 4: "400", 5: "500", 10: "1000", max: "9999" }, borderWeights: { light: "1px", normal: "2px", bold: "3px", extrabold: "4px", black: "5px" }, transitions: { default: "all 250ms ease", button: "background 0.25s ease 0s, color 0.25s ease 0s, border-color 0.25s ease 0s, box-shadow 0.25s ease 0s, transform 0.25s ease 0s, opacity 0.25s ease 0s", avatar: "box-shadow 0.25s ease 0s, opacity 0.25s ease 0s", link: "opacity 0.25s ease 0s, background 0.25s ease 0s", card: "transform 0.25s ease 0s" }, breakpoints: { xs: "650px", sm: "960px", md: "1280px", lg: "1400px", xl: "1920px" } };
var defaultColors = { white: "#ffffff", black: "#000000", blue100: "#bfd8fc", blue200: "#98D5FD", blue300: "#64B8FB", blue400: "#3D9CF7", blue500: "#0070F3", blue600: "#0056D0", blue700: "#0040AE", blue800: "#002D8C", blue900: "#002074", purple100: "#dbc8f0", purple200: "#DDA9F9", purple300: "#C17CEF", purple400: "#A258DF", purple500: "#7928ca", purple600: "#5E1DAD", purple700: "#461491", purple800: "#310C75", purple900: "#220760", green100: "#dafee8", green200: "#A1F9AC", green300: "#6FEE8D", green400: "#4ADE7B", green500: "#17c964", green600: "#10AC63", green700: "#0B905F", green800: "#077457", green900: "#046050", yellow100: "#fce6c7", yellow200: "#FEE7A6", yellow300: "#FCD57A", yellow400: "#F9C258", yellow500: "#f5a623", yellow600: "#D28519", yellow700: "#B06811", yellow800: "#8E4D0B", yellow900: "#753A06", red100: "#fbc4d5", red200: "#FDA0A5", red300: "#FB7085", red400: "#F74C77", red500: "#f21361", red600: "#D00D65", red700: "#AE0963", red800: "#8C065C", red900: "#740357", cyan100: "#EEFFF4", cyan200: "#DDFFED", cyan300: "#CCFFE9", cyan400: "#BFFFEA", cyan500: "#AAFFEC", cyan600: "#7CDBCF", cyan700: "#55B7B4", cyan800: "#368D93", cyan900: "#206C7A", pink100: "#FFDBE7", pink200: "#FFB8D6", pink300: "#FF94CC", pink400: "#FF7ACC", pink500: "#ff4ecd", pink600: "#DB39BD", pink700: "#B727AA", pink800: "#921893", pink900: "#6E0E7A", gray100: "#F4F4F4", gray200: "#EAEAEA", gray300: "#C1C1C1", gray400: "#999999", gray500: "#888888", gray600: "#666666", gray700: "#444444", gray800: "#333333", gray900: "#111111", primaryLight: "$blue100", primary: "$blue500", primaryDark: "$blue600", primaryShadow: "$blue100", secondaryLight: "$purple100", secondary: "$purple500", secondaryDark: "$purple600", secondaryShadow: "$purple100", successLight: "$green100", success: "$green500", successDark: "$green600", successShadow: "$green100", warningLight: "$yellow100", warning: "$yellow500", warningDark: "$yellow600", warningShadow: "$yellow100", errorLight: "$red100", error: "$red500", errorDark: "$red600", errorShadow: "$red100", gradient: "linear-gradient(112deg, $cyan500 -63.59%, $pink500 -20.3%, $blue500 70.46%)", link: "$blue500" };
var defaultMedia = { xs: `(min-width: ${defaultTokens.breakpoints.xs})`, sm: `(min-width: ${defaultTokens.breakpoints.sm})`, md: `(min-width: ${defaultTokens.breakpoints.md})`, lg: `(min-width: ${defaultTokens.breakpoints.lg})`, xl: `(min-width: ${defaultTokens.breakpoints.xl})`, xsMax: `(max-width: ${defaultTokens.breakpoints.xs})`, smMax: `(max-width: ${defaultTokens.breakpoints.sm})`, mdMax: `(max-width: ${defaultTokens.breakpoints.md})`, lgMax: `(max-width: ${defaultTokens.breakpoints.lg})`, xlMax: `(max-width: ${defaultTokens.breakpoints.xl})`, motion: "(prefers-reduced-motion: reduce)", safari: "not all and (min-resolution:.001dpcm)", hover: "(any-hover: hover)", dark: "(prefers-color-scheme: dark)", light: "(prefers-color-scheme: light)" };
var defaultUtils = { p: (e5) => ({ padding: e5 }), pt: (e5) => ({ paddingTop: e5 }), pr: (e5) => ({ paddingRight: e5 }), pb: (e5) => ({ paddingBottom: e5 }), pl: (e5) => ({ paddingLeft: e5 }), px: (e5) => ({ paddingLeft: e5, paddingRight: e5 }), py: (e5) => ({ paddingTop: e5, paddingBottom: e5 }), m: (e5) => ({ margin: e5 }), mt: (e5) => ({ marginTop: e5 }), mr: (e5) => ({ marginRight: e5 }), mb: (e5) => ({ marginBottom: e5 }), ml: (e5) => ({ marginLeft: e5 }), mx: (e5) => ({ marginLeft: e5, marginRight: e5 }), my: (e5) => ({ marginTop: e5, marginBottom: e5 }), ta: (e5) => ({ textAlign: e5 }), tt: (e5) => ({ textTransform: e5 }), to: (e5) => ({ textOverflow: e5 }), d: (e5) => ({ display: e5 }), dflex: (e5) => ({ display: "flex", alignItems: e5, justifyContent: e5 }), fd: (e5) => ({ flexDirection: e5 }), fw: (e5) => ({ flexWrap: e5 }), ai: (e5) => ({ alignItems: e5 }), ac: (e5) => ({ alignContent: e5 }), jc: (e5) => ({ justifyContent: e5 }), as: (e5) => ({ alignSelf: e5 }), fg: (e5) => ({ flexGrow: e5 }), fs: (e5) => ({ fontSize: e5 }), fb: (e5) => ({ flexBasis: e5 }), bc: (e5) => ({ backgroundColor: e5 }), bf: (e5) => ({ backdropFilter: e5 }), bg: (e5) => ({ background: e5 }), bgBlur: (e5) => ({ bf: "saturate(180%) blur(10px)", bg: `${e5}66` }), bgColor: (e5) => ({ backgroundColor: e5 }), backgroundClip: (e5) => ({ WebkitBackgroundClip: e5, backgroundClip: e5 }), bgClip: (e5) => ({ WebkitBackgroundClip: e5, backgroundClip: e5 }), br: (e5) => ({ borderRadius: e5 }), bw: (e5) => ({ borderWidth: e5 }), btrr: (e5) => ({ borderTopRightRadius: e5 }), bbrr: (e5) => ({ borderBottomRightRadius: e5 }), bblr: (e5) => ({ borderBottomLeftRadius: e5 }), btlr: (e5) => ({ borderTopLeftRadius: e5 }), bs: (e5) => ({ boxShadow: e5 }), normalShadow: (e5) => ({ boxShadow: `0 4px 14px 0 $colors${e5}` }), normalShadowVar: (e5) => ({ boxShadow: `0 4px 14px 0 ${e5}` }), lh: (e5) => ({ lineHeight: e5 }), ov: (e5) => ({ overflow: e5 }), ox: (e5) => ({ overflowX: e5 }), oy: (e5) => ({ overflowY: e5 }), pe: (e5) => ({ pointerEvents: e5 }), events: (e5) => ({ pointerEvents: e5 }), us: (e5) => ({ WebkitUserSelect: e5, userSelect: e5 }), userSelect: (e5) => ({ WebkitUserSelect: e5, userSelect: e5 }), w: (e5) => ({ width: e5 }), h: (e5) => ({ height: e5 }), mw: (e5) => ({ maxWidth: e5 }), maxW: (e5) => ({ maxWidth: e5 }), mh: (e5) => ({ maxHeight: e5 }), maxH: (e5) => ({ maxHeight: e5 }), size: (e5) => ({ width: e5, height: e5 }), minSize: (e5) => ({ minWidth: e5, minHeight: e5, width: e5, height: e5 }), sizeMin: (e5) => ({ minWidth: e5, minHeight: e5, width: e5, height: e5 }), maxSize: (e5) => ({ maxWidth: e5, maxHeight: e5 }), sizeMax: (e5) => ({ maxWidth: e5, maxHeight: e5 }), appearance: (e5) => ({ WebkitAppearance: e5, appearance: e5 }), scale: (e5) => ({ transform: `scale(${e5})` }), linearGradient: (e5) => ({ backgroundImage: `linear-gradient(${e5})` }), tdl: (e5) => ({ textDecorationLine: e5 }), textGradient: (e5) => ({ backgroundImage: `linear-gradient(${e5})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", "&::selection": { WebkitTextFillColor: "$colors$text" } }) };
var defaultThemeMap = { ...n, width: "space", height: "space", minWidth: "space", maxWidth: "space", minHeight: "space", maxHeight: "space", flexBasis: "space", gridTemplateColumns: "space", gridTemplateRows: "space", blockSize: "space", minBlockSize: "space", maxBlockSize: "space", inlineSize: "space", minInlineSize: "space", maxInlineSize: "space", borderWidth: "borderWeights" };
var common_default = { prefix: "nextui", theme: { ...defaultTokens, colors: defaultColors, shadows: {} }, media: defaultMedia, utils: defaultUtils, themeMap: defaultThemeMap };

// node_modules/@nextui-org/react/esm/theme/light-theme.js
init_react();
var light_theme_default = { colors: { accents1: "$gray100", accents2: "$gray200", accents3: "$gray300", accents4: "$gray400", accents5: "$gray500", accents6: "$gray600", accents7: "$gray700", accents8: "$gray800", accents9: "$gray900", background: "$white", foreground: "$black", backgroundContrast: "$white", text: "$gray800", codeLight: "$pink100", code: "$pink600", border: "$gray200", selection: "$blue200" }, shadows: { xs: "-4px 0 4px rgb(0 0 0 / 5%);", sm: "0 5px 20px -5px rgba(0, 0, 0, 0.1)", md: "0 8px 30px rgba(0, 0, 0, 0.15)", lg: "0 30px 60px rgba(0, 0, 0, 0.15)", xl: "0 40px 80px rgba(0, 0, 0, 0.25)" } };

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
var use_warning_default = (e5, n2) => {
  const r5 = `[Next UI]${n2 ? ` [${n2}]` : " "}: ${e5}`;
  if (typeof console != "undefined" && !o2[r5]) {
    if (o2[r5] = true, true)
      return console.error(r5);
    console.warn(r5);
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
var import_react5 = __toModule(require_react());
var use_drip_default = (e5 = false, n2) => {
  const [r5, o6] = (0, import_react5.useState)(e5), [c4, i3] = (0, import_react5.useState)(0), [l3, u2] = (0, import_react5.useState)(0);
  return { visible: r5, x: c4, y: l3, onClick: (t8) => {
    if (!n2.current)
      return;
    const e6 = n2.current.getBoundingClientRect();
    o6(true), i3(t8.clientX - e6.left), u2(t8.clientY - e6.top);
  }, onCompleted: () => {
    o6(false), i3(0), u2(0);
  } };
};

// node_modules/@nextui-org/react/esm/use-drip/index.js
var use_drip_default2 = use_drip_default;

// node_modules/@nextui-org/react/esm/utils/drip.js
init_react();
var import_react6 = __toModule(require_react());

// node_modules/@nextui-org/react/esm/utils/with-defaults.js
init_react();
var with_defaults_default = (e5, t8) => (e5.defaultProps = t8, e5);

// node_modules/@nextui-org/react/esm/utils/clsx.js
init_react();
function r2(e5) {
  var t8, f2, n2 = "";
  if (typeof e5 == "string" || typeof e5 == "number")
    n2 += e5;
  else if (typeof e5 == "object")
    if (Array.isArray(e5))
      for (t8 = 0; t8 < e5.length; t8++)
        e5[t8] && (f2 = r2(e5[t8])) && (n2 && (n2 += " "), n2 += f2);
    else
      for (t8 in e5)
        e5[t8] && (n2 && (n2 += " "), n2 += t8);
  return n2;
}
function clsx_default(...e5) {
  for (var t8, f2, n2 = 0, o6 = ""; n2 < e5.length; )
    (t8 = e5[n2++]) && (f2 = r2(t8)) && (o6 && (o6 += " "), o6 += f2);
  return o6;
}

// node_modules/@nextui-org/react/esm/utils/drip.js
var import_jsx_runtime = __toModule(require_jsx_runtime());
var a2 = keyframes({ "0%": { opacity: 0, transform: "scale(0.25)" }, "30%": { opacity: 1 }, "80%": { opacity: 0.5 }, "100%": { transform: "scale(28)", opacity: 0 } });
var StyledDrip = styled("div", { position: "absolute", left: 0, right: 0, top: 0, bottom: 0, "& svg": { position: "absolute", animation: `350ms linear ${a2}`, animationFillMode: "forwards", width: "$md", height: "$md" } });
var m2 = ({ visible: t8, x: r5, y: o6, color: n2, onCompleted: a4, className: m3, ...c4 }) => {
  const d3 = (0, import_react6.useRef)(null), p2 = Number.isNaN(+o6) ? 0 : o6 - 10, u2 = Number.isNaN(+r5) ? 0 : r5 - 10;
  return (0, import_react6.useEffect)(() => {
    if (d3.current)
      return d3.current.addEventListener("animationend", a4), () => {
        d3.current && d3.current.removeEventListener("animationend", a4);
      };
  }), t8 ? (0, import_jsx_runtime.jsx)(StyledDrip, { ref: d3, className: clsx_default("nextui-drip", m3), ...c4, children: (0, import_jsx_runtime.jsx)("svg", { width: "20", height: "20", viewBox: "0 0 20 20", style: { top: p2, left: u2 }, children: (0, import_jsx_runtime.jsx)("g", { stroke: "none", strokeWidth: "1", fill: "none", fillRule: "evenodd", children: (0, import_jsx_runtime.jsx)("g", { className: "nextui-drip-filler", fill: n2, children: (0, import_jsx_runtime.jsx)("rect", { width: "100%", height: "100%", rx: "10" }) }) }) }) }) : null;
};
var c3 = import_react6.default.memo(m2);
var drip_default = with_defaults_default(c3, { visible: false, x: 0, y: 0, className: "" });

// node_modules/@react-aria/ssr/dist/module.js
init_react();
var import_react7 = __toModule(require_react());
function $parcel$export(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
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

// node_modules/clsx/dist/clsx.m.js
init_react();
function toVal(mix) {
  var k3, y3, str = "";
  if (typeof mix === "string" || typeof mix === "number") {
    str += mix;
  } else if (typeof mix === "object") {
    if (Array.isArray(mix)) {
      for (k3 = 0; k3 < mix.length; k3++) {
        if (mix[k3]) {
          if (y3 = toVal(mix[k3])) {
            str && (str += " ");
            str += y3;
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
  var i3 = 0, tmp, x4, str = "";
  while (i3 < arguments.length) {
    if (tmp = arguments[i3++]) {
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
var import_react8 = __toModule(require_react());
function $parcel$export2(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
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

// node_modules/@nextui-org/react/esm/utils/dom.js
init_react();
var import_react9 = __toModule(require_react());
function canUseDOM() {
  return !(typeof window == "undefined" || !window.document || !window.document.createElement);
}
var isBrowser = canUseDOM();
function useDOMRef(r5) {
  const n2 = (0, import_react9.useRef)(null);
  return (0, import_react9.useImperativeHandle)(r5, () => n2.current), n2;
}

// node_modules/@nextui-org/react/esm/button/index.js
init_react();

// node_modules/@nextui-org/react/esm/button/button.js
init_react();
var import_react19 = __toModule(require_react());

// node_modules/@react-aria/focus/dist/module.js
init_react();
var import_react12 = __toModule(require_react());

// node_modules/@react-aria/focus/node_modules/@react-aria/utils/dist/module.js
init_react();
var import_react10 = __toModule(require_react());
function $parcel$export3(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $bdb11010cef70236$exports = {};
$parcel$export3($bdb11010cef70236$exports, "useId", () => $bdb11010cef70236$export$f680877a34711e37);
$parcel$export3($bdb11010cef70236$exports, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f842629);
$parcel$export3($bdb11010cef70236$exports, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb8);
var $f0a04ccd8dbdd83b$exports = {};
$parcel$export3($f0a04ccd8dbdd83b$exports, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof window !== "undefined" ? import_react10.default.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
  let isRendering = (0, import_react10.useRef)(true);
  isRendering.current = true;
  let [value, setValue] = (0, import_react10.useState)(defaultId);
  let nextId = (0, import_react10.useRef)(null);
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
    let r5 = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap.delete(r5);
    };
  }, [
    res
  ]);
  (0, import_react10.useEffect)(() => {
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
  let updateId = (0, import_react10.useCallback)(() => {
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
  for (let i3 = 1; i3 < args.length; i3++) {
    let props = args[i3];
    for (let key in props) {
      let a4 = result[key];
      let b2 = props[key];
      if (typeof a4 === "function" && typeof b2 === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90)
        result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e(a4, b2);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a4 === "string" && typeof b2 === "string")
        result[key] = clsx_m_default(a4, b2);
      else if (key === "id" && a4 && b2)
        result.id = $bdb11010cef70236$export$cd8c9cb68f842629(a4, b2);
      else
        result[key] = b2 !== void 0 ? b2 : a4;
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
var $65484d02dcb7eb3e$var$DOMPropNames = new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames = new Set([
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
    } catch (e5) {
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
var $bbed8b41f857bcc0$var$transitionsByElement = new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e5) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e5.target);
    if (!transitions) {
      transitions = new Set();
      $bbed8b41f857bcc0$var$transitionsByElement.set(e5.target, transitions);
      e5.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e5.propertyName);
  };
  let onTransitionEnd = (e5) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e5.target);
    if (!properties)
      return;
    properties.delete(e5.propertyName);
    if (properties.size === 0) {
      e5.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement.delete(e5.target);
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
  let getPosition = (e5) => orientation === "horizontal" ? e5.clientX : e5.clientY;
  let getNextOffset = (e5) => {
    let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e5);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };
  let dragging = (0, import_react10.useRef)(false);
  let prevPosition = (0, import_react10.useRef)(0);
  let handlers = (0, import_react10.useRef)({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;
  let onMouseDragged = (e5) => {
    e5.preventDefault();
    let nextOffset = getNextOffset(e5);
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
  let onMouseUp = (e5) => {
    const target = e5.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e5);
    if (handlers.current.onDrag)
      handlers.current.onDrag(false);
    if (handlers.current.onPositionChange)
      handlers.current.onPositionChange(nextOffset);
    $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
    window.removeEventListener("mouseup", onMouseUp, false);
    window.removeEventListener("mousemove", onMouseDragged, false);
  };
  let onMouseDown = (e5) => {
    const target = e5.currentTarget;
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
  let onKeyDown = (e5) => {
    switch (e5.key) {
      case "Left":
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Up":
      case "ArrowUp":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Right":
      case "ArrowRight":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Home":
        e5.preventDefault();
        if (onDecrementToMin)
          onDecrementToMin();
        break;
      case "End":
        e5.preventDefault();
        if (onIncrementToMax)
          onIncrementToMax();
        break;
      case "Enter":
        e5.preventDefault();
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
  let globalListeners = (0, import_react10.useRef)(new Map());
  let addGlobalListener = (0, import_react10.useCallback)((eventTarget, type, listener, options) => {
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
  let removeGlobalListener = (0, import_react10.useCallback)((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react10.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react10.useEffect)(() => {
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
    let ids = new Set([
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
  const objRef = (0, import_react10.useRef)();
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
  const isInitialMount = (0, import_react10.useRef)(true);
  (0, import_react10.useEffect)(() => {
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
  (0, import_react10.useEffect)(() => {
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
  let [size1, setSize] = (0, import_react10.useState)(() => $5df64b3807dc15ee$var$getViewportSize());
  (0, import_react10.useEffect)(() => {
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
var $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
  let [id1, setId] = (0, import_react10.useState)(null);
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
  let handlerRef = (0, import_react10.useRef)(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  (0, import_react10.useEffect)(() => {
    if (isDisabled)
      return;
    let element = ref.current;
    let handler = (e5) => handlerRef.current.call(this, e5);
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
  let [value, setValue] = (0, import_react10.useState)(defaultValue);
  let valueRef = (0, import_react10.useRef)(value);
  let effect = (0, import_react10.useRef)(null);
  valueRef.current = value;
  let nextRef = (0, import_react10.useRef)(null);
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
  let queue = (0, import_react10.useCallback)((fn) => {
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
  let y3 = scrollView.scrollTop;
  let maxX = x4 + scrollView.offsetWidth;
  let maxY = y3 + scrollView.offsetHeight;
  if (offsetX <= x4)
    x4 = offsetX;
  else if (offsetX + width > maxX)
    x4 += offsetX + width - maxX;
  if (offsetY <= y3)
    y3 = offsetY;
  else if (offsetY + height > maxY)
    y3 += offsetY + height - maxY;
  scrollView.scrollLeft = x4;
  scrollView.scrollTop = y3;
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

// node_modules/@react-aria/focus/node_modules/@react-aria/interactions/dist/module.js
init_react();
var import_react11 = __toModule(require_react());
function $parcel$export4(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $3b117e43dc0ca95d$exports = {};
$parcel$export4($3b117e43dc0ca95d$exports, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e99);
var $f6c31cce2adf654f$exports = {};
$parcel$export4($f6c31cce2adf654f$exports, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad21);
var $14c0b72509d70225$var$state = "default";
var $14c0b72509d70225$var$savedUserSelect = "";
var $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
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
  let stateRef = (0, import_react11.useRef)({
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
      let onBlurHandler = (e5) => {
        var ref;
        let state = stateRef.current;
        state.isFocused = false;
        if (target.disabled)
          (ref = state.onBlur) === null || ref === void 0 ? void 0 : ref.call(state, new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e5));
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
var $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = import_react11.default.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext(props) {
  let context = (0, import_react11.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
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
  let propsRef = (0, import_react11.useRef)(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = (0, import_react11.useState)(false);
  let ref = (0, import_react11.useRef)({
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
  let pressProps1 = (0, import_react11.useMemo)(() => {
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
    let cancel = (e5) => {
      if (state.isPressed) {
        if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType, false);
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
      onKeyDown(e5) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e5.nativeEvent) && e5.currentTarget.contains(e5.target)) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e5.target))
            e5.preventDefault();
          e5.stopPropagation();
          if (!state.isPressed && !e5.repeat) {
            state.target = e5.currentTarget;
            state.isPressed = true;
            triggerPressStart(e5, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e5) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e5.nativeEvent) && !e5.repeat && e5.currentTarget.contains(e5.target))
          triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e5), "keyboard");
      },
      onClick(e5) {
        if (e5 && !e5.currentTarget.contains(e5.target))
          return;
        if (e5 && e5.button === 0) {
          e5.stopPropagation();
          if (isDisabled1)
            e5.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || $8a9cb279dc87e130$export$60278871457622de(e5.nativeEvent))) {
            if (!isDisabled1 && !preventFocusOnPress)
              $7215afc6de606d6b$export$de79e2c695e052f3(e5.currentTarget);
            triggerPressStart(e5, "virtual");
            triggerPressUp(e5, "virtual");
            triggerPressEnd(e5, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e5) => {
      if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e5)) {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e5.target))
          e5.preventDefault();
        e5.stopPropagation();
        state.isPressed = false;
        let target = e5.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")
          state.target.click();
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps.onPointerDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($f6c31cce2adf654f$var$isVirtualPointerEvent(e5.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e5.currentTarget))
          e5.preventDefault();
        state.pointerType = e5.pointerType;
        e5.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e5.pointerId;
          state.target = e5.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress)
            $7215afc6de606d6b$export$de79e2c695e052f3(e5.currentTarget);
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$16a4697467175487(state.target);
          triggerPressStart(e5, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps.onMouseDown = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (e5.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault(e5.currentTarget))
            e5.preventDefault();
          e5.stopPropagation();
        }
      };
      pressProps.onPointerUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target) || state.pointerType === "virtual")
          return;
        if (e5.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e5, e5.currentTarget))
          triggerPressUp(e5, state.pointerType || e5.pointerType);
      };
      let onPointerMove = (e5) => {
        if (e5.pointerId !== state.activePointerId)
          return;
        if ($f6c31cce2adf654f$var$isOverTarget(e5, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.activePointerId && state.isPressed && e5.button === 0) {
          if ($f6c31cce2adf654f$var$isOverTarget(e5, state.target))
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType);
          else if (state.isOverTarget)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        }
      };
      let onPointerCancel = (e5) => {
        cancel(e5);
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
      };
    } else {
      pressProps.onMouseDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault(e5.currentTarget))
          e5.preventDefault();
        e5.stopPropagation();
        if (state.ignoreEmulatedMouseEvents)
          return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e5.currentTarget;
        state.pointerType = $8a9cb279dc87e130$export$60278871457622de(e5.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e5.currentTarget);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps.onMouseEnter = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e5, state.pointerType);
        }
      };
      pressProps.onMouseLeave = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onMouseUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e5.button === 0)
          triggerPressUp(e5, state.pointerType);
      };
      let onMouseUp = (e5) => {
        if (e5.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($f6c31cce2adf654f$var$isOverTarget(e5, state.target))
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType);
        else if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e5), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps.onTouchStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e5.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e5.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f3(e5.currentTarget);
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$16a4697467175487(state.target);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps.onTouchMove = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e5.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e5.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e5, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onTouchEnd = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById(e5.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e5.currentTarget)) {
          triggerPressUp(e5, state.pointerType);
          triggerPressEnd(e5, state.pointerType);
        } else if (state.isOverTarget)
          triggerPressEnd(e5, state.pointerType, false);
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };
      pressProps.onTouchCancel = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed)
          cancel(e5);
      };
      let onScroll = (e5) => {
        if (state.isPressed && e5.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
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
  (0, import_react11.useEffect)(() => {
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
  for (let i3 = 0; i3 < changedTouches.length; i3++) {
    const touch = changedTouches[i3];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e5) {
  return {
    currentTarget: target,
    shiftKey: e5.shiftKey,
    ctrlKey: e5.ctrlKey,
    metaKey: e5.metaKey,
    altKey: e5.altKey
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
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a4, b2) {
  if (a4.left > b2.right || b2.left > a4.right)
    return false;
  if (a4.top > b2.bottom || b2.top > a4.bottom)
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
var $3b117e43dc0ca95d$export$27c701ed9e449e99 = /* @__PURE__ */ import_react11.default.forwardRef(({ children, ...props }, ref) => {
  let newRef = (0, import_react11.useRef)();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad21({
    ...props,
    ref
  });
  let child = import_react11.default.Children.only(children);
  return /* @__PURE__ */ import_react11.default.cloneElement(child, {
    ref,
    ...$3ef42575df84b30b$export$9d1611c77c2fe928(child.props, pressProps)
  });
});
var $f1ab8c75478c6f73$exports = {};
$parcel$export4($f1ab8c75478c6f73$exports, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b8);
var $f1ab8c75478c6f73$export$3351871ee4b288b8 = /* @__PURE__ */ import_react11.default.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react11.useRef)(false);
  let prevContext = (0, import_react11.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb5);
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
  (0, import_react11.useEffect)(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ import_react11.default.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports = {};
$parcel$export4($a1ea59d68270f0dd$exports, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e6);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
  let onBlur;
  if (!props.isDisabled && (props.onBlur || props.onFocusChange))
    onBlur = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onBlur)
          props.onBlur(e5);
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
    onFocus = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onFocus)
          props.onFocus(e5);
        if (props.onFocusChange)
          props.onFocusChange(true);
        onSyntheticFocus(e5);
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
var $507fabe10e71c6fb$var$changeHandlers = new Set();
var $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
var $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e5) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers)
    handler(modality, e5);
}
function $507fabe10e71c6fb$var$isValidKey(e5) {
  return !(e5.metaKey || !$c87311424ea30a05$export$9ac100e40613ea10() && e5.altKey || e5.ctrlKey || e5.key === "Control" || e5.key === "Shift" || e5.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e5) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
  if ($507fabe10e71c6fb$var$isValidKey(e5)) {
    $507fabe10e71c6fb$var$currentModality = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e5);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e5) {
  $507fabe10e71c6fb$var$currentModality = "pointer";
  if (e5.type === "mousedown" || e5.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e5);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent(e5) {
  if ($8a9cb279dc87e130$export$60278871457622de(e5)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    $507fabe10e71c6fb$var$currentModality = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e5) {
  if (e5.target === window || e5.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
    $507fabe10e71c6fb$var$currentModality = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e5);
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
  let [modality, setModality] = (0, import_react11.useState)($507fabe10e71c6fb$var$currentModality);
  (0, import_react11.useEffect)(() => {
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
function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e5) {
  return !(isTextInput && modality === "keyboard" && e5 instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e5.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
  let { isTextInput, autoFocus } = props;
  let [isFocusVisibleState, setFocusVisible] = (0, import_react11.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
  $507fabe10e71c6fb$export$ec71b4b83ac08ec3(($507fabe10e71c6fb$export$b9b3dfddab17db273) => {
    setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db273);
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
  (0, import_react11.useEffect)(() => {
    let handler = (modality, e5) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e5))
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
  let state = (0, import_react11.useRef)({
    isFocusWithin: false
  }).current;
  let onBlur = props.isDisabled ? null : (e5) => {
    if (state.isFocusWithin && !e5.currentTarget.contains(e5.relatedTarget)) {
      state.isFocusWithin = false;
      if (props.onBlurWithin)
        props.onBlurWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(false);
    }
  };
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc(onBlur);
  let onFocus = props.isDisabled ? null : (e5) => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin)
        props.onFocusWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(true);
      state.isFocusWithin = true;
      onSyntheticFocus(e5);
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
function $6179b936705e76d3$var$handleGlobalPointerEvent(e5) {
  if (e5.pointerType === "touch")
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
  let [isHovered, setHovered] = (0, import_react11.useState)(false);
  let state = (0, import_react11.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react11.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = (0, import_react11.useMemo)(() => {
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
      hoverProps.onPointerEnter = (e5) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e5.pointerType === "mouse")
          return;
        triggerHoverStart(e5, e5.pointerType);
      };
      hoverProps.onPointerLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, e5.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e5) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e5, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps.onMouseLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, "mouse");
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
  (0, import_react11.useEffect)(() => {
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
  let stateRef = (0, import_react11.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  (0, import_react11.useEffect)(() => {
    if (isDisabled)
      return;
    let onPointerDown = (e5) => {
      if ($e0b6e0b68ec7f50f$var$isValidEvent(e5, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart)
          state.onInteractOutsideStart(e5);
        state.isPointerDown = true;
      }
    };
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e5) => {
        if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      document.addEventListener("pointerup", onPointerUp, true);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown, true);
        document.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e5) => {
        if (state.ignoreEmulatedMouseEvents)
          state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      let onTouchEnd = (e5) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
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
  return (e5) => {
    let event = {
      ...e5,
      preventDefault() {
        e5.preventDefault();
      },
      isDefaultPrevented() {
        return e5.isDefaultPrevented();
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
      e5.stopPropagation();
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
  let state = (0, import_react11.useRef)({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed6();
  let moveProps1 = (0, import_react11.useMemo)(() => {
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
      let onMouseMove = (e5) => {
        if (e5.button === 0) {
          move(e5, "mouse", e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onMouseUp = (e5) => {
        if (e5.button === 0) {
          end(e5, "mouse");
          removeGlobalListener(window, "mousemove", onMouseMove, false);
          removeGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      moveProps.onMouseDown = (e5) => {
        if (e5.button === 0) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          addGlobalListener(window, "mousemove", onMouseMove, false);
          addGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      let onTouchMove = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          let { pageX, pageY } = e5.changedTouches[touch];
          move(e5, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };
      let onTouchEnd = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          end(e5, "touch");
          state.current.id = null;
          removeGlobalListener(window, "touchmove", onTouchMove);
          removeGlobalListener(window, "touchend", onTouchEnd);
          removeGlobalListener(window, "touchcancel", onTouchEnd);
        }
      };
      moveProps.onTouchStart = (e5) => {
        if (e5.changedTouches.length === 0 || state.current.id != null)
          return;
        let { pageX, pageY, identifier } = e5.changedTouches[0];
        start();
        e5.stopPropagation();
        e5.preventDefault();
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
      let onPointerMove = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          move(e5, pointerType, e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          end(e5, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
      moveProps.onPointerDown = (e5) => {
        if (e5.button === 0 && state.current.id == null) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          state.current.id = e5.pointerId;
          addGlobalListener(window, "pointermove", onPointerMove, false);
          addGlobalListener(window, "pointerup", onPointerUp, false);
          addGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
    }
    let triggerKeyboardMove = (e5, deltaX, deltaY) => {
      start();
      move(e5, "keyboard", deltaX, deltaY);
      end(e5, "keyboard");
    };
    moveProps.onKeyDown = (e5) => {
      switch (e5.key) {
        case "Left":
        case "ArrowLeft":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, 1);
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
  let onScrollHandler = (0, import_react11.useCallback)((e5) => {
    if (e5.ctrlKey)
      return;
    e5.preventDefault();
    e5.stopPropagation();
    if (onScroll)
      onScroll({
        deltaX: e5.deltaX,
        deltaY: e5.deltaY
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
  const timeRef = (0, import_react11.useRef)(null);
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
          let onContextMenu = (e5) => {
            e5.preventDefault();
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
    onPressEnd(e5) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e5.pointerType === "mouse" || e5.pointerType === "touch"))
        onLongPressEnd({
          ...e5,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}

// node_modules/@react-aria/focus/dist/module.js
function $parcel$export5(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
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
var $9bf71ea28793e738$var$scopes = new Map();
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
    let onKeyDown = (e5) => {
      if (e5.key !== "Tab" || e5.altKey || e5.ctrlKey || e5.metaKey || scopeRef !== $9bf71ea28793e738$var$activeScope)
        return;
      let focusedElement = document.activeElement;
      let scope = scopeRef.current;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: true
      }, scope);
      walker.currentNode = focusedElement;
      let nextElement = e5.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!nextElement) {
        walker.currentNode = e5.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
        nextElement = e5.shiftKey ? walker.previousNode() : walker.nextNode();
      }
      e5.preventDefault();
      if (nextElement)
        $9bf71ea28793e738$var$focusElement(nextElement, true);
    };
    let onFocus = (e5) => {
      if (!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) {
        $9bf71ea28793e738$var$activeScope = scopeRef;
        focusedNode.current = e5.target;
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(e5.target, scopeRef)) {
        if (focusedNode.current)
          focusedNode.current.focus();
        else if ($9bf71ea28793e738$var$activeScope)
          $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
      } else if (scopeRef === $9bf71ea28793e738$var$activeScope)
        focusedNode.current = e5.target;
    };
    let onBlur = (e5) => {
      raf.current = requestAnimationFrame(() => {
        if (scopeRef === $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
          $9bf71ea28793e738$var$activeScope = scopeRef;
          focusedNode.current = e5.target;
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
  for (let s4 of $9bf71ea28793e738$var$scopes.keys()) {
    if ((s4 === scope || $9bf71ea28793e738$var$isAncestorScope(scope, s4)) && $9bf71ea28793e738$var$isElementInScope(element, s4.current))
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
    let onKeyDown = (e5) => {
      if (e5.key !== "Tab" || e5.altKey || e5.ctrlKey || e5.metaKey)
        return;
      let focusedElement = document.activeElement;
      if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current))
        return;
      let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
        tabbable: true
      });
      walker.currentNode = focusedElement;
      let nextElement = e5.shiftKey ? walker.previousNode() : walker.nextNode();
      if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body)
        nodeToRestore = null;
      if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
        walker.currentNode = nodeToRestore;
        do
          nextElement = e5.shiftKey ? walker.previousNode() : walker.nextNode();
        while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
        e5.preventDefault();
        e5.stopPropagation();
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
      domRef.current.focus();
    autoFocusRef.current = false;
  }, []);
  return {
    focusableProps: $3ef42575df84b30b$export$9d1611c77c2fe928({
      ...interactions,
      tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : void 0
    }, interactionProps)
  };
}

// node_modules/@react-aria/button/dist/module.js
init_react();

// node_modules/@react-aria/button/node_modules/@react-aria/utils/dist/module.js
init_react();
var import_react13 = __toModule(require_react());
function $parcel$export6(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $bdb11010cef70236$exports2 = {};
$parcel$export6($bdb11010cef70236$exports2, "useId", () => $bdb11010cef70236$export$f680877a34711e372);
$parcel$export6($bdb11010cef70236$exports2, "mergeIds", () => $bdb11010cef70236$export$cd8c9cb68f8426292);
$parcel$export6($bdb11010cef70236$exports2, "useSlotId", () => $bdb11010cef70236$export$b4cc09c592e8fdb82);
var $f0a04ccd8dbdd83b$exports2 = {};
$parcel$export6($f0a04ccd8dbdd83b$exports2, "useLayoutEffect", () => $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2);
var $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2 = typeof window !== "undefined" ? import_react13.default.useLayoutEffect : () => {
};
var $bdb11010cef70236$var$idsUpdaterMap2 = new Map();
function $bdb11010cef70236$export$f680877a34711e372(defaultId) {
  let isRendering = (0, import_react13.useRef)(true);
  isRendering.current = true;
  let [value, setValue] = (0, import_react13.useState)(defaultId);
  let nextId = (0, import_react13.useRef)(null);
  let res = $9d939cbc98267846$export$619500959fc48b26(value);
  let updateValue = (val) => {
    if (!isRendering.current)
      setValue(val);
    else
      nextId.current = val;
  };
  $bdb11010cef70236$var$idsUpdaterMap2.set(res, updateValue);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
    isRendering.current = false;
  }, [
    updateValue
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
    let r5 = res;
    return () => {
      $bdb11010cef70236$var$idsUpdaterMap2.delete(r5);
    };
  }, [
    res
  ]);
  (0, import_react13.useEffect)(() => {
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
function $bdb11010cef70236$export$cd8c9cb68f8426292(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $bdb11010cef70236$var$idsUpdaterMap2.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $bdb11010cef70236$var$idsUpdaterMap2.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb82(depArray = []) {
  let id = $bdb11010cef70236$export$f680877a34711e372();
  let [resolvedId, setResolvedId] = $1dbecbe27a04f9af$export$14d238f342723f252(id);
  let updateId = (0, import_react13.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : null;
    });
  }, [
    id,
    setResolvedId
  ]);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}
var $ff5963eb1fccf552$exports2 = {};
$parcel$export6($ff5963eb1fccf552$exports2, "chain", () => $ff5963eb1fccf552$export$e08e3b67e392101e2);
function $ff5963eb1fccf552$export$e08e3b67e392101e2(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}
var $3ef42575df84b30b$exports2 = {};
$parcel$export6($3ef42575df84b30b$exports2, "mergeProps", () => $3ef42575df84b30b$export$9d1611c77c2fe9282);
function $3ef42575df84b30b$export$9d1611c77c2fe9282(...args) {
  let result = {
    ...args[0]
  };
  for (let i3 = 1; i3 < args.length; i3++) {
    let props = args[i3];
    for (let key in props) {
      let a4 = result[key];
      let b2 = props[key];
      if (typeof a4 === "function" && typeof b2 === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90)
        result[key] = $ff5963eb1fccf552$export$e08e3b67e392101e2(a4, b2);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a4 === "string" && typeof b2 === "string")
        result[key] = clsx_m_default(a4, b2);
      else if (key === "id" && a4 && b2)
        result.id = $bdb11010cef70236$export$cd8c9cb68f8426292(a4, b2);
      else
        result[key] = b2 !== void 0 ? b2 : a4;
    }
  }
  return result;
}
var $5dc95899b306f630$exports2 = {};
$parcel$export6($5dc95899b306f630$exports2, "mergeRefs", () => $5dc95899b306f630$export$c9058316764c140e2);
function $5dc95899b306f630$export$c9058316764c140e2(...refs) {
  return (value) => {
    for (let ref of refs) {
      if (typeof ref === "function")
        ref(value);
      else if (ref != null)
        ref.current = value;
    }
  };
}
var $65484d02dcb7eb3e$exports2 = {};
$parcel$export6($65484d02dcb7eb3e$exports2, "filterDOMProps", () => $65484d02dcb7eb3e$export$457c3d6518dd4c6f2);
var $65484d02dcb7eb3e$var$DOMPropNames2 = new Set([
  "id"
]);
var $65484d02dcb7eb3e$var$labelablePropNames2 = new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $65484d02dcb7eb3e$var$propRe2 = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f2(props, opts = {}) {
  let { labelable, propNames } = opts;
  let filteredProps = {};
  for (const prop in props)
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames2.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames2.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe2.test(prop)))
      filteredProps[prop] = props[prop];
  return filteredProps;
}
var $7215afc6de606d6b$exports2 = {};
$parcel$export6($7215afc6de606d6b$exports2, "focusWithoutScrolling", () => $7215afc6de606d6b$export$de79e2c695e052f32);
function $7215afc6de606d6b$export$de79e2c695e052f32(element) {
  if ($7215afc6de606d6b$var$supportsPreventScroll2())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $7215afc6de606d6b$var$getScrollableElements2(element);
    element.focus();
    $7215afc6de606d6b$var$restoreScrollPosition2(scrollableElements);
  }
}
var $7215afc6de606d6b$var$supportsPreventScrollCached2 = null;
function $7215afc6de606d6b$var$supportsPreventScroll2() {
  if ($7215afc6de606d6b$var$supportsPreventScrollCached2 == null) {
    $7215afc6de606d6b$var$supportsPreventScrollCached2 = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $7215afc6de606d6b$var$supportsPreventScrollCached2 = true;
          return true;
        }
      });
    } catch (e5) {
    }
  }
  return $7215afc6de606d6b$var$supportsPreventScrollCached2;
}
function $7215afc6de606d6b$var$getScrollableElements2(element) {
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
function $7215afc6de606d6b$var$restoreScrollPosition2(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var $ab71dadb03a6fb2e$exports2 = {};
$parcel$export6($ab71dadb03a6fb2e$exports2, "getOffset", () => $ab71dadb03a6fb2e$export$622cea445a1c5b7d2);
function $ab71dadb03a6fb2e$export$622cea445a1c5b7d2(element, reverse, orientation = "horizontal") {
  let rect = element.getBoundingClientRect();
  if (reverse)
    return orientation === "horizontal" ? rect.right : rect.bottom;
  return orientation === "horizontal" ? rect.left : rect.top;
}
var $103b0e103f1b5952$exports2 = {};
$parcel$export6($103b0e103f1b5952$exports2, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export6($103b0e103f1b5952$exports2, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
var $bbed8b41f857bcc0$exports2 = {};
$parcel$export6($bbed8b41f857bcc0$exports2, "runAfterTransition", () => $bbed8b41f857bcc0$export$24490316f764c4302);
var $bbed8b41f857bcc0$var$transitionsByElement2 = new Map();
var $bbed8b41f857bcc0$var$transitionCallbacks2 = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents2() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e5) => {
    let transitions = $bbed8b41f857bcc0$var$transitionsByElement2.get(e5.target);
    if (!transitions) {
      transitions = new Set();
      $bbed8b41f857bcc0$var$transitionsByElement2.set(e5.target, transitions);
      e5.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e5.propertyName);
  };
  let onTransitionEnd = (e5) => {
    let properties = $bbed8b41f857bcc0$var$transitionsByElement2.get(e5.target);
    if (!properties)
      return;
    properties.delete(e5.propertyName);
    if (properties.size === 0) {
      e5.target.removeEventListener("transitioncancel", onTransitionEnd);
      $bbed8b41f857bcc0$var$transitionsByElement2.delete(e5.target);
    }
    if ($bbed8b41f857bcc0$var$transitionsByElement2.size === 0) {
      for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks2)
        cb();
      $bbed8b41f857bcc0$var$transitionCallbacks2.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $bbed8b41f857bcc0$var$setupGlobalEvents2();
  else
    document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents2);
}
function $bbed8b41f857bcc0$export$24490316f764c4302(fn) {
  requestAnimationFrame(() => {
    if ($bbed8b41f857bcc0$var$transitionsByElement2.size === 0)
      fn();
    else
      $bbed8b41f857bcc0$var$transitionCallbacks2.add(fn);
  });
}
var $9cc09df9fd7676be$exports2 = {};
$parcel$export6($9cc09df9fd7676be$exports2, "useDrag1D", () => $9cc09df9fd7676be$export$7bbed75feba397062);
var $9cc09df9fd7676be$var$draggingElements2 = [];
function $9cc09df9fd7676be$export$7bbed75feba397062(props) {
  console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
  let { containerRef, reverse, orientation, onHover, onDrag, onPositionChange, onIncrement, onDecrement, onIncrementToMax, onDecrementToMin, onCollapseToggle } = props;
  let getPosition = (e5) => orientation === "horizontal" ? e5.clientX : e5.clientY;
  let getNextOffset = (e5) => {
    let containerOffset = $ab71dadb03a6fb2e$export$622cea445a1c5b7d2(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e5);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };
  let dragging = (0, import_react13.useRef)(false);
  let prevPosition = (0, import_react13.useRef)(0);
  let handlers = (0, import_react13.useRef)({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;
  let onMouseDragged = (e5) => {
    e5.preventDefault();
    let nextOffset = getNextOffset(e5);
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
  let onMouseUp = (e5) => {
    const target = e5.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e5);
    if (handlers.current.onDrag)
      handlers.current.onDrag(false);
    if (handlers.current.onPositionChange)
      handlers.current.onPositionChange(nextOffset);
    $9cc09df9fd7676be$var$draggingElements2.splice($9cc09df9fd7676be$var$draggingElements2.indexOf(target), 1);
    window.removeEventListener("mouseup", onMouseUp, false);
    window.removeEventListener("mousemove", onMouseDragged, false);
  };
  let onMouseDown = (e5) => {
    const target = e5.currentTarget;
    if ($9cc09df9fd7676be$var$draggingElements2.some((elt) => target.contains(elt)))
      return;
    $9cc09df9fd7676be$var$draggingElements2.push(target);
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
  let onKeyDown = (e5) => {
    switch (e5.key) {
      case "Left":
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Up":
      case "ArrowUp":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Right":
      case "ArrowRight":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Home":
        e5.preventDefault();
        if (onDecrementToMin)
          onDecrementToMin();
        break;
      case "End":
        e5.preventDefault();
        if (onIncrementToMax)
          onIncrementToMax();
        break;
      case "Enter":
        e5.preventDefault();
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
var $03deb23ff14920c4$exports2 = {};
$parcel$export6($03deb23ff14920c4$exports2, "useGlobalListeners", () => $03deb23ff14920c4$export$4eaf04e54aa8eed62);
function $03deb23ff14920c4$export$4eaf04e54aa8eed62() {
  let globalListeners = (0, import_react13.useRef)(new Map());
  let addGlobalListener = (0, import_react13.useCallback)((eventTarget, type, listener, options) => {
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
  let removeGlobalListener = (0, import_react13.useCallback)((eventTarget, type, listener, options) => {
    var ref;
    let fn = ((ref = globalListeners.current.get(listener)) === null || ref === void 0 ? void 0 : ref.fn) || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react13.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react13.useEffect)(() => {
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
var $313b98861ee5dd6c$exports2 = {};
$parcel$export6($313b98861ee5dd6c$exports2, "useLabels", () => $313b98861ee5dd6c$export$d6875122194c7b442);
function $313b98861ee5dd6c$export$d6875122194c7b442(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $bdb11010cef70236$export$f680877a34711e372(id);
  if (labelledBy && label) {
    let ids = new Set([
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
var $df56164dff5785e2$exports2 = {};
$parcel$export6($df56164dff5785e2$exports2, "useObjectRef", () => $df56164dff5785e2$export$4338b53315abf6662);
function $df56164dff5785e2$export$4338b53315abf6662(forwardedRef) {
  const objRef = (0, import_react13.useRef)();
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
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
var $4f58c5f72bcf79f7$exports2 = {};
$parcel$export6($4f58c5f72bcf79f7$exports2, "useUpdateEffect", () => $4f58c5f72bcf79f7$export$496315a1608d96022);
function $4f58c5f72bcf79f7$export$496315a1608d96022(effect, dependencies) {
  const isInitialMount = (0, import_react13.useRef)(true);
  (0, import_react13.useEffect)(() => {
    if (isInitialMount.current)
      isInitialMount.current = false;
    else
      effect();
  }, dependencies);
}
var $9daab02d461809db$exports2 = {};
$parcel$export6($9daab02d461809db$exports2, "useResizeObserver", () => $9daab02d461809db$export$683480f191c0e3ea2);
function $9daab02d461809db$var$hasResizeObserver2() {
  return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea2(options) {
  const { ref, onResize } = options;
  (0, import_react13.useEffect)(() => {
    let element = ref === null || ref === void 0 ? void 0 : ref.current;
    if (!element)
      return;
    if (!$9daab02d461809db$var$hasResizeObserver2()) {
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
var $e7801be82b4b2a53$exports2 = {};
$parcel$export6($e7801be82b4b2a53$exports2, "useSyncRef", () => $e7801be82b4b2a53$export$4debdb1a3f0fa79e2);
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e2(context, ref) {
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
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
var $62d8ded9296f3872$exports2 = {};
$parcel$export6($62d8ded9296f3872$exports2, "getScrollParent", () => $62d8ded9296f3872$export$cfa2225e879387812);
function $62d8ded9296f3872$export$cfa2225e879387812(node) {
  while (node && !$62d8ded9296f3872$var$isScrollable2(node))
    node = node.parentElement;
  return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$var$isScrollable2(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
var $5df64b3807dc15ee$exports2 = {};
$parcel$export6($5df64b3807dc15ee$exports2, "useViewportSize", () => $5df64b3807dc15ee$export$d699905dd57c73ca2);
var $5df64b3807dc15ee$var$visualViewport2 = typeof window !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca2() {
  let [size1, setSize] = (0, import_react13.useState)(() => $5df64b3807dc15ee$var$getViewportSize2());
  (0, import_react13.useEffect)(() => {
    let onResize = () => {
      setSize((size) => {
        let newSize = $5df64b3807dc15ee$var$getViewportSize2();
        if (newSize.width === size.width && newSize.height === size.height)
          return size;
        return newSize;
      });
    };
    if (!$5df64b3807dc15ee$var$visualViewport2)
      window.addEventListener("resize", onResize);
    else
      $5df64b3807dc15ee$var$visualViewport2.addEventListener("resize", onResize);
    return () => {
      if (!$5df64b3807dc15ee$var$visualViewport2)
        window.removeEventListener("resize", onResize);
      else
        $5df64b3807dc15ee$var$visualViewport2.removeEventListener("resize", onResize);
    };
  }, []);
  return size1;
}
function $5df64b3807dc15ee$var$getViewportSize2() {
  return {
    width: ($5df64b3807dc15ee$var$visualViewport2 === null || $5df64b3807dc15ee$var$visualViewport2 === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport2.width) || window.innerWidth,
    height: ($5df64b3807dc15ee$var$visualViewport2 === null || $5df64b3807dc15ee$var$visualViewport2 === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport2.height) || window.innerHeight
  };
}
var $ef06256079686ba0$exports2 = {};
$parcel$export6($ef06256079686ba0$exports2, "useDescription", () => $ef06256079686ba0$export$f8aeda7b10753fa12);
var $ef06256079686ba0$var$descriptionId2 = 0;
var $ef06256079686ba0$var$descriptionNodes2 = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa12(description) {
  let [id1, setId] = (0, import_react13.useState)(null);
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
    if (!description)
      return;
    let desc = $ef06256079686ba0$var$descriptionNodes2.get(description);
    if (!desc) {
      let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId2++}`;
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
      $ef06256079686ba0$var$descriptionNodes2.set(description, desc);
    } else
      setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $ef06256079686ba0$var$descriptionNodes2.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id1 : void 0
  };
}
var $c87311424ea30a05$exports2 = {};
$parcel$export6($c87311424ea30a05$exports2, "isMac", () => $c87311424ea30a05$export$9ac100e40613ea102);
$parcel$export6($c87311424ea30a05$exports2, "isIPhone", () => $c87311424ea30a05$export$186c6964ca17d992);
$parcel$export6($c87311424ea30a05$exports2, "isIPad", () => $c87311424ea30a05$export$7bef049ce92e42242);
$parcel$export6($c87311424ea30a05$exports2, "isIOS", () => $c87311424ea30a05$export$fedb369cb70207f12);
$parcel$export6($c87311424ea30a05$exports2, "isAppleDevice", () => $c87311424ea30a05$export$e1865c3bedcd822b2);
$parcel$export6($c87311424ea30a05$exports2, "isWebKit", () => $c87311424ea30a05$export$78551043582a6a982);
$parcel$export6($c87311424ea30a05$exports2, "isChrome", () => $c87311424ea30a05$export$6446a186d09e379e2);
$parcel$export6($c87311424ea30a05$exports2, "isAndroid", () => $c87311424ea30a05$export$a11b0059900ceec82);
function $c87311424ea30a05$var$testUserAgent2(re2) {
  var ref;
  if (typeof window === "undefined" || window.navigator == null)
    return false;
  return ((ref = window.navigator["userAgentData"]) === null || ref === void 0 ? void 0 : ref.brands.some((brand) => re2.test(brand.brand))) || re2.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform2(re2) {
  return typeof window !== "undefined" && window.navigator != null ? re2.test((window.navigator["userAgentData"] || window.navigator).platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea102() {
  return $c87311424ea30a05$var$testPlatform2(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d992() {
  return $c87311424ea30a05$var$testPlatform2(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e42242() {
  return $c87311424ea30a05$var$testPlatform2(/^iPad/i) || $c87311424ea30a05$export$9ac100e40613ea102() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f12() {
  return $c87311424ea30a05$export$186c6964ca17d992() || $c87311424ea30a05$export$7bef049ce92e42242();
}
function $c87311424ea30a05$export$e1865c3bedcd822b2() {
  return $c87311424ea30a05$export$9ac100e40613ea102() || $c87311424ea30a05$export$fedb369cb70207f12();
}
function $c87311424ea30a05$export$78551043582a6a982() {
  return $c87311424ea30a05$var$testUserAgent2(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e2();
}
function $c87311424ea30a05$export$6446a186d09e379e2() {
  return $c87311424ea30a05$var$testUserAgent2(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec82() {
  return $c87311424ea30a05$var$testUserAgent2(/Android/i);
}
var $e9faafb641e167db$exports2 = {};
$parcel$export6($e9faafb641e167db$exports2, "useEvent", () => $e9faafb641e167db$export$90fc3a17d93f704c2);
function $e9faafb641e167db$export$90fc3a17d93f704c2(ref, event, handler1, options) {
  let handlerRef = (0, import_react13.useRef)(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  (0, import_react13.useEffect)(() => {
    if (isDisabled)
      return;
    let element = ref.current;
    let handler = (e5) => handlerRef.current.call(this, e5);
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
var $1dbecbe27a04f9af$exports2 = {};
$parcel$export6($1dbecbe27a04f9af$exports2, "useValueEffect", () => $1dbecbe27a04f9af$export$14d238f342723f252);
function $1dbecbe27a04f9af$export$14d238f342723f252(defaultValue) {
  let [value, setValue] = (0, import_react13.useState)(defaultValue);
  let valueRef = (0, import_react13.useRef)(value);
  let effect = (0, import_react13.useRef)(null);
  valueRef.current = value;
  let nextRef = (0, import_react13.useRef)(null);
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
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
    if (effect.current)
      nextRef.current();
  });
  let queue = (0, import_react13.useCallback)((fn) => {
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
var $2f04cbc44ee30ce0$exports2 = {};
$parcel$export6($2f04cbc44ee30ce0$exports2, "scrollIntoView", () => $2f04cbc44ee30ce0$export$53a0910f038337bd2);
function $2f04cbc44ee30ce0$export$53a0910f038337bd2(scrollView, element) {
  let offsetX = $2f04cbc44ee30ce0$var$relativeOffset2(scrollView, element, "left");
  let offsetY = $2f04cbc44ee30ce0$var$relativeOffset2(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x4 = scrollView.scrollLeft;
  let y3 = scrollView.scrollTop;
  let maxX = x4 + scrollView.offsetWidth;
  let maxY = y3 + scrollView.offsetHeight;
  if (offsetX <= x4)
    x4 = offsetX;
  else if (offsetX + width > maxX)
    x4 += offsetX + width - maxX;
  if (offsetY <= y3)
    y3 = offsetY;
  else if (offsetY + height > maxY)
    y3 += offsetY + height - maxY;
  scrollView.scrollLeft = x4;
  scrollView.scrollTop = y3;
}
function $2f04cbc44ee30ce0$var$relativeOffset2(ancestor, child, axis) {
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

// node_modules/@react-aria/button/node_modules/@react-aria/interactions/dist/module.js
init_react();
var import_react14 = __toModule(require_react());
function $parcel$export7(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $3b117e43dc0ca95d$exports2 = {};
$parcel$export7($3b117e43dc0ca95d$exports2, "Pressable", () => $3b117e43dc0ca95d$export$27c701ed9e449e992);
var $f6c31cce2adf654f$exports2 = {};
$parcel$export7($f6c31cce2adf654f$exports2, "usePress", () => $f6c31cce2adf654f$export$45712eceda6fad212);
var $14c0b72509d70225$var$state2 = "default";
var $14c0b72509d70225$var$savedUserSelect2 = "";
var $14c0b72509d70225$var$modifiedElementMap2 = new WeakMap();
function $14c0b72509d70225$export$16a46974671754872(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f12()) {
    if ($14c0b72509d70225$var$state2 === "default") {
      $14c0b72509d70225$var$savedUserSelect2 = document.documentElement.style.webkitUserSelect;
      document.documentElement.style.webkitUserSelect = "none";
    }
    $14c0b72509d70225$var$state2 = "disabled";
  } else if (target) {
    $14c0b72509d70225$var$modifiedElementMap2.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $14c0b72509d70225$export$b0d6fa1ab32e32952(target) {
  if ($c87311424ea30a05$export$fedb369cb70207f12()) {
    if ($14c0b72509d70225$var$state2 !== "disabled")
      return;
    $14c0b72509d70225$var$state2 = "restoring";
    setTimeout(() => {
      $bbed8b41f857bcc0$export$24490316f764c4302(() => {
        if ($14c0b72509d70225$var$state2 === "restoring") {
          if (document.documentElement.style.webkitUserSelect === "none")
            document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect2 || "";
          $14c0b72509d70225$var$savedUserSelect2 = "";
          $14c0b72509d70225$var$state2 = "default";
        }
      });
    }, 300);
  } else if (target && $14c0b72509d70225$var$modifiedElementMap2.has(target)) {
    let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap2.get(target);
    if (target.style.userSelect === "none")
      target.style.userSelect = targetOldUserSelect;
    if (target.getAttribute("style") === "")
      target.removeAttribute("style");
    $14c0b72509d70225$var$modifiedElementMap2.delete(target);
  }
}
function $8a9cb279dc87e130$export$60278871457622de2(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
var $8a9cb279dc87e130$export$905e7fc544a71f362 = class {
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
function $8a9cb279dc87e130$export$715c682d09d639cc2(onBlur) {
  let stateRef = (0, import_react14.useRef)({
    isFocused: false,
    onBlur,
    observer: null
  });
  let state1 = stateRef.current;
  state1.onBlur = onBlur;
  $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c2(() => {
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
      let onBlurHandler = (e5) => {
        var ref;
        let state = stateRef.current;
        state.isFocused = false;
        if (target.disabled)
          (ref = state.onBlur) === null || ref === void 0 ? void 0 : ref.call(state, new $8a9cb279dc87e130$export$905e7fc544a71f362("blur", e5));
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
var $ae1eeba8b9eafd08$export$5165eccb35aaadb52 = import_react14.default.createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb52.displayName = "PressResponderContext";
function $f6c31cce2adf654f$var$usePressResponderContext2(props) {
  let context = (0, import_react14.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb52);
  if (context) {
    let { register, ...contextProps } = context;
    props = $3ef42575df84b30b$export$9d1611c77c2fe9282(contextProps, props);
    register();
  }
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e2(context, props.ref);
  return props;
}
function $f6c31cce2adf654f$export$45712eceda6fad212(props) {
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
  } = $f6c31cce2adf654f$var$usePressResponderContext2(props);
  let propsRef = (0, import_react14.useRef)(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = (0, import_react14.useState)(false);
  let ref = (0, import_react14.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $03deb23ff14920c4$export$4eaf04e54aa8eed62();
  let pressProps1 = (0, import_react14.useMemo)(() => {
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
    let cancel = (e5) => {
      if (state.isPressed) {
        if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e32952(state.target);
      }
    };
    let pressProps = {
      onKeyDown(e5) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent2(e5.nativeEvent) && e5.currentTarget.contains(e5.target)) {
          if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard2(e5.target))
            e5.preventDefault();
          e5.stopPropagation();
          if (!state.isPressed && !e5.repeat) {
            state.target = e5.currentTarget;
            state.isPressed = true;
            triggerPressStart(e5, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e5) {
        if ($f6c31cce2adf654f$var$isValidKeyboardEvent2(e5.nativeEvent) && !e5.repeat && e5.currentTarget.contains(e5.target))
          triggerPressUp($f6c31cce2adf654f$var$createEvent2(state.target, e5), "keyboard");
      },
      onClick(e5) {
        if (e5 && !e5.currentTarget.contains(e5.target))
          return;
        if (e5 && e5.button === 0) {
          e5.stopPropagation();
          if (isDisabled1)
            e5.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || $8a9cb279dc87e130$export$60278871457622de2(e5.nativeEvent))) {
            if (!isDisabled1 && !preventFocusOnPress)
              $7215afc6de606d6b$export$de79e2c695e052f32(e5.currentTarget);
            triggerPressStart(e5, "virtual");
            triggerPressUp(e5, "virtual");
            triggerPressEnd(e5, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e5) => {
      if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent2(e5)) {
        if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard2(e5.target))
          e5.preventDefault();
        e5.stopPropagation();
        state.isPressed = false;
        let target = e5.target;
        triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (state.target.contains(target) && $f6c31cce2adf654f$var$isHTMLAnchorLink2(state.target) || state.target.getAttribute("role") === "link")
          state.target.click();
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps.onPointerDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($f6c31cce2adf654f$var$isVirtualPointerEvent2(e5.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($f6c31cce2adf654f$var$shouldPreventDefault2(e5.currentTarget))
          e5.preventDefault();
        state.pointerType = e5.pointerType;
        e5.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e5.pointerId;
          state.target = e5.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress)
            $7215afc6de606d6b$export$de79e2c695e052f32(e5.currentTarget);
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$16a46974671754872(state.target);
          triggerPressStart(e5, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps.onMouseDown = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (e5.button === 0) {
          if ($f6c31cce2adf654f$var$shouldPreventDefault2(e5.currentTarget))
            e5.preventDefault();
          e5.stopPropagation();
        }
      };
      pressProps.onPointerUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target) || state.pointerType === "virtual")
          return;
        if (e5.button === 0 && $f6c31cce2adf654f$var$isOverTarget2(e5, e5.currentTarget))
          triggerPressUp(e5, state.pointerType || e5.pointerType);
      };
      let onPointerMove = (e5) => {
        if (e5.pointerId !== state.activePointerId)
          return;
        if ($f6c31cce2adf654f$var$isOverTarget2(e5, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.activePointerId && state.isPressed && e5.button === 0) {
          if ($f6c31cce2adf654f$var$isOverTarget2(e5, state.target))
            triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType);
          else if (state.isOverTarget)
            triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            $14c0b72509d70225$export$b0d6fa1ab32e32952(state.target);
        }
      };
      let onPointerCancel = (e5) => {
        cancel(e5);
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
      };
    } else {
      pressProps.onMouseDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($f6c31cce2adf654f$var$shouldPreventDefault2(e5.currentTarget))
          e5.preventDefault();
        e5.stopPropagation();
        if (state.ignoreEmulatedMouseEvents)
          return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e5.currentTarget;
        state.pointerType = $8a9cb279dc87e130$export$60278871457622de2(e5.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f32(e5.currentTarget);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps.onMouseEnter = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e5, state.pointerType);
        }
      };
      pressProps.onMouseLeave = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onMouseUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e5.button === 0)
          triggerPressUp(e5, state.pointerType);
      };
      let onMouseUp = (e5) => {
        if (e5.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($f6c31cce2adf654f$var$isOverTarget2(e5, state.target))
          triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType);
        else if (state.isOverTarget)
          triggerPressEnd($f6c31cce2adf654f$var$createEvent2(state.target, e5), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps.onTouchStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        let touch = $f6c31cce2adf654f$var$getTouchFromEvent2(e5.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e5.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled1 && !preventFocusOnPress)
          $7215afc6de606d6b$export$de79e2c695e052f32(e5.currentTarget);
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$16a46974671754872(state.target);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps.onTouchMove = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById2(e5.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget2(touch, e5.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e5, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onTouchEnd = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $f6c31cce2adf654f$var$getTouchById2(e5.nativeEvent, state.activePointerId);
        if (touch && $f6c31cce2adf654f$var$isOverTarget2(touch, e5.currentTarget)) {
          triggerPressUp(e5, state.pointerType);
          triggerPressEnd(e5, state.pointerType);
        } else if (state.isOverTarget)
          triggerPressEnd(e5, state.pointerType, false);
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress)
          $14c0b72509d70225$export$b0d6fa1ab32e32952(state.target);
        removeAllGlobalListeners();
      };
      pressProps.onTouchCancel = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed)
          cancel(e5);
      };
      let onScroll = (e5) => {
        if (state.isPressed && e5.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
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
  (0, import_react14.useEffect)(() => {
    return () => {
      if (!allowTextSelectionOnPress)
        $14c0b72509d70225$export$b0d6fa1ab32e32952(ref.current.target);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $3ef42575df84b30b$export$9d1611c77c2fe9282(domProps, pressProps1)
  };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink2(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent2(event) {
  const { key, code, target } = event;
  const element = target;
  const { tagName, isContentEditable } = element;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true && (!$f6c31cce2adf654f$var$isHTMLAnchorLink2(element) || role === "button" && key !== "Enter") && !(role === "link" && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent2(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $f6c31cce2adf654f$var$getTouchById2(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i3 = 0; i3 < changedTouches.length; i3++) {
    const touch = changedTouches[i3];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $f6c31cce2adf654f$var$createEvent2(target, e5) {
  return {
    currentTarget: target,
    shiftKey: e5.shiftKey,
    ctrlKey: e5.ctrlKey,
    metaKey: e5.metaKey,
    altKey: e5.altKey
  };
}
function $f6c31cce2adf654f$var$getPointClientRect2(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping2(a4, b2) {
  if (a4.left > b2.right || b2.left > a4.right)
    return false;
  if (a4.top > b2.bottom || b2.top > a4.bottom)
    return false;
  return true;
}
function $f6c31cce2adf654f$var$isOverTarget2(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $f6c31cce2adf654f$var$getPointClientRect2(point);
  return $f6c31cce2adf654f$var$areRectanglesOverlapping2(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault2(target) {
  return !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard2(target) {
  return !((target.tagName === "INPUT" || target.tagName === "BUTTON") && target.type === "submit");
}
function $f6c31cce2adf654f$var$isVirtualPointerEvent2(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}
var $3b117e43dc0ca95d$export$27c701ed9e449e992 = /* @__PURE__ */ import_react14.default.forwardRef(({ children, ...props }, ref) => {
  let newRef = (0, import_react14.useRef)();
  ref = ref !== null && ref !== void 0 ? ref : newRef;
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad212({
    ...props,
    ref
  });
  let child = import_react14.default.Children.only(children);
  return /* @__PURE__ */ import_react14.default.cloneElement(child, {
    ref,
    ...$3ef42575df84b30b$export$9d1611c77c2fe9282(child.props, pressProps)
  });
});
var $f1ab8c75478c6f73$exports2 = {};
$parcel$export7($f1ab8c75478c6f73$exports2, "PressResponder", () => $f1ab8c75478c6f73$export$3351871ee4b288b82);
var $f1ab8c75478c6f73$export$3351871ee4b288b82 = /* @__PURE__ */ import_react14.default.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react14.useRef)(false);
  let prevContext = (0, import_react14.useContext)($ae1eeba8b9eafd08$export$5165eccb35aaadb52);
  let context = $3ef42575df84b30b$export$9d1611c77c2fe9282(prevContext || {}, {
    ...props,
    ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  $e7801be82b4b2a53$export$4debdb1a3f0fa79e2(prevContext, ref);
  (0, import_react14.useEffect)(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ import_react14.default.createElement($ae1eeba8b9eafd08$export$5165eccb35aaadb52.Provider, {
    value: context
  }, children);
});
var $a1ea59d68270f0dd$exports2 = {};
$parcel$export7($a1ea59d68270f0dd$exports2, "useFocus", () => $a1ea59d68270f0dd$export$f8168d8dd8fd66e62);
function $a1ea59d68270f0dd$export$f8168d8dd8fd66e62(props) {
  let onBlur;
  if (!props.isDisabled && (props.onBlur || props.onFocusChange))
    onBlur = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onBlur)
          props.onBlur(e5);
        if (props.onFocusChange)
          props.onFocusChange(false);
        return true;
      }
    };
  else
    onBlur = null;
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc2(onBlur);
  let onFocus;
  if (!props.isDisabled && (props.onFocus || props.onFocusChange || props.onBlur))
    onFocus = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onFocus)
          props.onFocus(e5);
        if (props.onFocusChange)
          props.onFocusChange(true);
        onSyntheticFocus(e5);
      }
    };
  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
var $507fabe10e71c6fb$exports2 = {};
$parcel$export7($507fabe10e71c6fb$exports2, "isFocusVisible", () => $507fabe10e71c6fb$export$b9b3dfddab17db272);
$parcel$export7($507fabe10e71c6fb$exports2, "getInteractionModality", () => $507fabe10e71c6fb$export$630ff653c5ada6a92);
$parcel$export7($507fabe10e71c6fb$exports2, "setInteractionModality", () => $507fabe10e71c6fb$export$8397ddfc504fdb9a2);
$parcel$export7($507fabe10e71c6fb$exports2, "useInteractionModality", () => $507fabe10e71c6fb$export$98e20ec92f614cfe2);
$parcel$export7($507fabe10e71c6fb$exports2, "useFocusVisible", () => $507fabe10e71c6fb$export$ffd9e5021c1fb2d62);
$parcel$export7($507fabe10e71c6fb$exports2, "useFocusVisibleListener", () => $507fabe10e71c6fb$export$ec71b4b83ac08ec32);
var $507fabe10e71c6fb$var$currentModality2 = null;
var $507fabe10e71c6fb$var$changeHandlers2 = new Set();
var $507fabe10e71c6fb$var$hasSetupGlobalListeners2 = false;
var $507fabe10e71c6fb$var$hasEventBeforeFocus2 = false;
var $507fabe10e71c6fb$var$hasBlurredWindowRecently2 = false;
var $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS2 = {
  Tab: true,
  Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers2(modality, e5) {
  for (let handler of $507fabe10e71c6fb$var$changeHandlers2)
    handler(modality, e5);
}
function $507fabe10e71c6fb$var$isValidKey2(e5) {
  return !(e5.metaKey || !$c87311424ea30a05$export$9ac100e40613ea102() && e5.altKey || e5.ctrlKey || e5.key === "Control" || e5.key === "Shift" || e5.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent2(e5) {
  $507fabe10e71c6fb$var$hasEventBeforeFocus2 = true;
  if ($507fabe10e71c6fb$var$isValidKey2(e5)) {
    $507fabe10e71c6fb$var$currentModality2 = "keyboard";
    $507fabe10e71c6fb$var$triggerChangeHandlers2("keyboard", e5);
  }
}
function $507fabe10e71c6fb$var$handlePointerEvent2(e5) {
  $507fabe10e71c6fb$var$currentModality2 = "pointer";
  if (e5.type === "mousedown" || e5.type === "pointerdown") {
    $507fabe10e71c6fb$var$hasEventBeforeFocus2 = true;
    $507fabe10e71c6fb$var$triggerChangeHandlers2("pointer", e5);
  }
}
function $507fabe10e71c6fb$var$handleClickEvent2(e5) {
  if ($8a9cb279dc87e130$export$60278871457622de2(e5)) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus2 = true;
    $507fabe10e71c6fb$var$currentModality2 = "virtual";
  }
}
function $507fabe10e71c6fb$var$handleFocusEvent2(e5) {
  if (e5.target === window || e5.target === document)
    return;
  if (!$507fabe10e71c6fb$var$hasEventBeforeFocus2 && !$507fabe10e71c6fb$var$hasBlurredWindowRecently2) {
    $507fabe10e71c6fb$var$currentModality2 = "virtual";
    $507fabe10e71c6fb$var$triggerChangeHandlers2("virtual", e5);
  }
  $507fabe10e71c6fb$var$hasEventBeforeFocus2 = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently2 = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur2() {
  $507fabe10e71c6fb$var$hasEventBeforeFocus2 = false;
  $507fabe10e71c6fb$var$hasBlurredWindowRecently2 = true;
}
function $507fabe10e71c6fb$var$setupGlobalFocusEvents2() {
  if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners2)
    return;
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $507fabe10e71c6fb$var$hasEventBeforeFocus2 = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent2, true);
  document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent2, true);
  document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent2, true);
  window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent2, true);
  window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur2, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent2, true);
    document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent2, true);
    document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent2, true);
  } else {
    document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent2, true);
    document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent2, true);
    document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent2, true);
  }
  $507fabe10e71c6fb$var$hasSetupGlobalListeners2 = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $507fabe10e71c6fb$var$setupGlobalFocusEvents2();
  else
    document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents2);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db272() {
  return $507fabe10e71c6fb$var$currentModality2 !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a92() {
  return $507fabe10e71c6fb$var$currentModality2;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a2(modality) {
  $507fabe10e71c6fb$var$currentModality2 = modality;
  $507fabe10e71c6fb$var$triggerChangeHandlers2(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe2() {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents2();
  let [modality, setModality] = (0, import_react14.useState)($507fabe10e71c6fb$var$currentModality2);
  (0, import_react14.useEffect)(() => {
    let handler = () => {
      setModality($507fabe10e71c6fb$var$currentModality2);
    };
    $507fabe10e71c6fb$var$changeHandlers2.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers2.delete(handler);
    };
  }, []);
  return modality;
}
function $507fabe10e71c6fb$var$isKeyboardFocusEvent2(isTextInput, modality, e5) {
  return !(isTextInput && modality === "keyboard" && e5 instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS2[e5.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d62(props = {}) {
  let { isTextInput, autoFocus } = props;
  let [isFocusVisibleState, setFocusVisible] = (0, import_react14.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db272());
  $507fabe10e71c6fb$export$ec71b4b83ac08ec32(($507fabe10e71c6fb$export$b9b3dfddab17db273) => {
    setFocusVisible($507fabe10e71c6fb$export$b9b3dfddab17db273);
  }, [
    isTextInput
  ], {
    isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec32(fn, deps, opts) {
  $507fabe10e71c6fb$var$setupGlobalFocusEvents2();
  (0, import_react14.useEffect)(() => {
    let handler = (modality, e5) => {
      if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent2(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e5))
        return;
      fn($507fabe10e71c6fb$export$b9b3dfddab17db272());
    };
    $507fabe10e71c6fb$var$changeHandlers2.add(handler);
    return () => {
      $507fabe10e71c6fb$var$changeHandlers2.delete(handler);
    };
  }, deps);
}
var $9ab94262bd0047c7$exports2 = {};
$parcel$export7($9ab94262bd0047c7$exports2, "useFocusWithin", () => $9ab94262bd0047c7$export$420e68273165f4ec2);
function $9ab94262bd0047c7$export$420e68273165f4ec2(props) {
  let state = (0, import_react14.useRef)({
    isFocusWithin: false
  }).current;
  let onBlur = props.isDisabled ? null : (e5) => {
    if (state.isFocusWithin && !e5.currentTarget.contains(e5.relatedTarget)) {
      state.isFocusWithin = false;
      if (props.onBlurWithin)
        props.onBlurWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(false);
    }
  };
  let onSyntheticFocus = $8a9cb279dc87e130$export$715c682d09d639cc2(onBlur);
  let onFocus = props.isDisabled ? null : (e5) => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin)
        props.onFocusWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(true);
      state.isFocusWithin = true;
      onSyntheticFocus(e5);
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var $6179b936705e76d3$exports2 = {};
$parcel$export7($6179b936705e76d3$exports2, "useHover", () => $6179b936705e76d3$export$ae780daf29e6d4562);
var $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents2 = false;
var $6179b936705e76d3$var$hoverCount2 = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents2() {
  $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents2 = true;
  setTimeout(() => {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents2 = false;
  }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent2(e5) {
  if (e5.pointerType === "touch")
    $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents2();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents2() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent2);
  else
    document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents2);
  $6179b936705e76d3$var$hoverCount2++;
  return () => {
    $6179b936705e76d3$var$hoverCount2--;
    if ($6179b936705e76d3$var$hoverCount2 > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent2);
    else
      document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents2);
  };
}
function $6179b936705e76d3$export$ae780daf29e6d4562(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react14.useState)(false);
  let state = (0, import_react14.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react14.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents2, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = (0, import_react14.useMemo)(() => {
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
      hoverProps.onPointerEnter = (e5) => {
        if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents2 && e5.pointerType === "mouse")
          return;
        triggerHoverStart(e5, e5.pointerType);
      };
      hoverProps.onPointerLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, e5.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e5) => {
        if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents2)
          triggerHoverStart(e5, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps.onMouseLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, "mouse");
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
  (0, import_react14.useEffect)(() => {
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
var $e0b6e0b68ec7f50f$exports2 = {};
$parcel$export7($e0b6e0b68ec7f50f$exports2, "useInteractOutside", () => $e0b6e0b68ec7f50f$export$872b660ac5a1ff982);
function $e0b6e0b68ec7f50f$export$872b660ac5a1ff982(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = (0, import_react14.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  (0, import_react14.useEffect)(() => {
    if (isDisabled)
      return;
    let onPointerDown = (e5) => {
      if ($e0b6e0b68ec7f50f$var$isValidEvent2(e5, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart)
          state.onInteractOutsideStart(e5);
        state.isPointerDown = true;
      }
    };
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e5) => {
        if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent2(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      document.addEventListener("pointerup", onPointerUp, true);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown, true);
        document.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e5) => {
        if (state.ignoreEmulatedMouseEvents)
          state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && state.onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent2(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      let onTouchEnd = (e5) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.onInteractOutside && state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent2(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
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
function $e0b6e0b68ec7f50f$var$isValidEvent2(event, ref) {
  if (event.button > 0)
    return false;
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target))
      return false;
  }
  return ref.current && !ref.current.contains(event.target);
}
var $46d819fcbaf35654$exports2 = {};
$parcel$export7($46d819fcbaf35654$exports2, "useKeyboard", () => $46d819fcbaf35654$export$8f71654801c2f7cd2);
function $93925083ecbb358c$export$48d1ea63208302602(handler) {
  if (!handler)
    return;
  let shouldStopPropagation = true;
  return (e5) => {
    let event = {
      ...e5,
      preventDefault() {
        e5.preventDefault();
      },
      isDefaultPrevented() {
        return e5.isDefaultPrevented();
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
      e5.stopPropagation();
  };
}
function $46d819fcbaf35654$export$8f71654801c2f7cd2(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $93925083ecbb358c$export$48d1ea63208302602(props.onKeyDown),
      onKeyUp: $93925083ecbb358c$export$48d1ea63208302602(props.onKeyUp)
    }
  };
}
var $e8a7022cf87cba2a$exports2 = {};
$parcel$export7($e8a7022cf87cba2a$exports2, "useMove", () => $e8a7022cf87cba2a$export$36da96379f79f2452);
function $e8a7022cf87cba2a$export$36da96379f79f2452(props) {
  let { onMoveStart, onMove, onMoveEnd } = props;
  let state = (0, import_react14.useRef)({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed62();
  let moveProps1 = (0, import_react14.useMemo)(() => {
    let moveProps = {};
    let start = () => {
      $14c0b72509d70225$export$16a46974671754872();
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
      $14c0b72509d70225$export$b0d6fa1ab32e32952();
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
      let onMouseMove = (e5) => {
        if (e5.button === 0) {
          move(e5, "mouse", e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onMouseUp = (e5) => {
        if (e5.button === 0) {
          end(e5, "mouse");
          removeGlobalListener(window, "mousemove", onMouseMove, false);
          removeGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      moveProps.onMouseDown = (e5) => {
        if (e5.button === 0) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          addGlobalListener(window, "mousemove", onMouseMove, false);
          addGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      let onTouchMove = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          let { pageX, pageY } = e5.changedTouches[touch];
          move(e5, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };
      let onTouchEnd = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          end(e5, "touch");
          state.current.id = null;
          removeGlobalListener(window, "touchmove", onTouchMove);
          removeGlobalListener(window, "touchend", onTouchEnd);
          removeGlobalListener(window, "touchcancel", onTouchEnd);
        }
      };
      moveProps.onTouchStart = (e5) => {
        if (e5.changedTouches.length === 0 || state.current.id != null)
          return;
        let { pageX, pageY, identifier } = e5.changedTouches[0];
        start();
        e5.stopPropagation();
        e5.preventDefault();
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
      let onPointerMove = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          move(e5, pointerType, e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          end(e5, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
      moveProps.onPointerDown = (e5) => {
        if (e5.button === 0 && state.current.id == null) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          state.current.id = e5.pointerId;
          addGlobalListener(window, "pointermove", onPointerMove, false);
          addGlobalListener(window, "pointerup", onPointerUp, false);
          addGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
    }
    let triggerKeyboardMove = (e5, deltaX, deltaY) => {
      start();
      move(e5, "keyboard", deltaX, deltaY);
      end(e5, "keyboard");
    };
    moveProps.onKeyDown = (e5) => {
      switch (e5.key) {
        case "Left":
        case "ArrowLeft":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, 1);
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
var $7d0a636d7a4dcefd$exports2 = {};
$parcel$export7($7d0a636d7a4dcefd$exports2, "useScrollWheel", () => $7d0a636d7a4dcefd$export$2123ff2b87c81ca2);
function $7d0a636d7a4dcefd$export$2123ff2b87c81ca2(props, ref) {
  let { onScroll, isDisabled } = props;
  let onScrollHandler = (0, import_react14.useCallback)((e5) => {
    if (e5.ctrlKey)
      return;
    e5.preventDefault();
    e5.stopPropagation();
    if (onScroll)
      onScroll({
        deltaX: e5.deltaX,
        deltaY: e5.deltaY
      });
  }, [
    onScroll
  ]);
  $e9faafb641e167db$export$90fc3a17d93f704c2(ref, "wheel", isDisabled ? null : onScrollHandler);
}
var $8a26561d2877236e$exports2 = {};
$parcel$export7($8a26561d2877236e$exports2, "useLongPress", () => $8a26561d2877236e$export$c24ed0104d07eab92);
var $8a26561d2877236e$var$DEFAULT_THRESHOLD2 = 500;
function $8a26561d2877236e$export$c24ed0104d07eab92(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD2, accessibilityDescription } = props;
  const timeRef = (0, import_react14.useRef)(null);
  let { addGlobalListener, removeGlobalListener } = $03deb23ff14920c4$export$4eaf04e54aa8eed62();
  let { pressProps } = $f6c31cce2adf654f$export$45712eceda6fad212({
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
          let onContextMenu = (e5) => {
            e5.preventDefault();
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
    onPressEnd(e5) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e5.pointerType === "mouse" || e5.pointerType === "touch"))
        onLongPressEnd({
          ...e5,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = $ef06256079686ba0$export$f8aeda7b10753fa12(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $3ef42575df84b30b$export$9d1611c77c2fe9282(pressProps, descriptionProps)
  };
}

// node_modules/@react-aria/button/dist/module.js
function $parcel$export8(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $701a24aa0da5b062$exports = {};
$parcel$export8($701a24aa0da5b062$exports, "useButton", () => $701a24aa0da5b062$export$ea18c227d4417cc3);
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
  let { pressProps, isPressed } = $f6c31cce2adf654f$export$45712eceda6fad212({
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
  let buttonProps = $3ef42575df84b30b$export$9d1611c77c2fe9282(focusableProps, pressProps, $65484d02dcb7eb3e$export$457c3d6518dd4c6f2(props, {
    labelable: true
  }));
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe9282(additionalProps, buttonProps, {
      "aria-haspopup": props["aria-haspopup"],
      "aria-expanded": props["aria-expanded"],
      "aria-controls": props["aria-controls"],
      "aria-pressed": props["aria-pressed"],
      onClick: (e5) => {
        if (deprecatedOnClick) {
          deprecatedOnClick(e5);
          console.warn("onClick is deprecated, please use onPress");
        }
      }
    })
  };
}
var $55f54f7887471b58$exports = {};
$parcel$export8($55f54f7887471b58$exports, "useToggleButton", () => $55f54f7887471b58$export$51e84d46ca0bc451);
function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
  const { isSelected } = state;
  const { isPressed, buttonProps } = $701a24aa0da5b062$export$ea18c227d4417cc3({
    ...props,
    onPress: $ff5963eb1fccf552$export$e08e3b67e392101e2(state.toggle, props.onPress)
  }, ref);
  return {
    isPressed,
    buttonProps: $3ef42575df84b30b$export$9d1611c77c2fe9282(buttonProps, {
      "aria-pressed": isSelected
    })
  };
}

// node_modules/@react-aria/interactions/dist/module.js
init_react();

// node_modules/@react-aria/utils/dist/module.js
init_react();
var import_react15 = __toModule(require_react());
function $parcel$export9(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $4208ab27be92763a$exports = {};
$parcel$export9($4208ab27be92763a$exports, "useId", () => $4208ab27be92763a$export$f680877a34711e37);
$parcel$export9($4208ab27be92763a$exports, "mergeIds", () => $4208ab27be92763a$export$cd8c9cb68f842629);
$parcel$export9($4208ab27be92763a$exports, "useSlotId", () => $4208ab27be92763a$export$b4cc09c592e8fdb8);
var $62918828a5c4cefe$exports = {};
$parcel$export9($62918828a5c4cefe$exports, "useLayoutEffect", () => $62918828a5c4cefe$export$e5c5a5f917a5871c);
var $62918828a5c4cefe$export$e5c5a5f917a5871c = typeof window !== "undefined" ? import_react15.default.useLayoutEffect : () => {
};
var $4208ab27be92763a$var$idsUpdaterMap = new Map();
function $4208ab27be92763a$export$f680877a34711e37(defaultId) {
  let isRendering = (0, import_react15.useRef)(true);
  isRendering.current = true;
  let [value, setValue] = (0, import_react15.useState)(defaultId);
  let nextId = (0, import_react15.useRef)(null);
  let res = $9d939cbc98267846$export$619500959fc48b26(value);
  let updateValue = (val) => {
    if (!isRendering.current)
      setValue(val);
    else
      nextId.current = val;
  };
  $4208ab27be92763a$var$idsUpdaterMap.set(res, updateValue);
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
    isRendering.current = false;
  }, [
    updateValue
  ]);
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
    let r5 = res;
    return () => {
      $4208ab27be92763a$var$idsUpdaterMap.delete(r5);
    };
  }, [
    res
  ]);
  (0, import_react15.useEffect)(() => {
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
function $4208ab27be92763a$export$cd8c9cb68f842629(idA, idB) {
  if (idA === idB)
    return idA;
  let setIdA = $4208ab27be92763a$var$idsUpdaterMap.get(idA);
  if (setIdA) {
    setIdA(idB);
    return idB;
  }
  let setIdB = $4208ab27be92763a$var$idsUpdaterMap.get(idB);
  if (setIdB) {
    setIdB(idA);
    return idA;
  }
  return idB;
}
function $4208ab27be92763a$export$b4cc09c592e8fdb8(depArray = []) {
  let id = $4208ab27be92763a$export$f680877a34711e37();
  let [resolvedId, setResolvedId] = $8bfb318ccfa2e412$export$14d238f342723f25(id);
  let updateId = (0, import_react15.useCallback)(() => {
    setResolvedId(function* () {
      yield id;
      yield document.getElementById(id) ? id : null;
    });
  }, [
    id,
    setResolvedId
  ]);
  $62918828a5c4cefe$export$e5c5a5f917a5871c(updateId, [
    id,
    updateId,
    ...depArray
  ]);
  return resolvedId;
}
var $2aefb161b9a41928$exports = {};
$parcel$export9($2aefb161b9a41928$exports, "chain", () => $2aefb161b9a41928$export$e08e3b67e392101e);
function $2aefb161b9a41928$export$e08e3b67e392101e(...callbacks) {
  return (...args) => {
    for (let callback of callbacks)
      if (typeof callback === "function")
        callback(...args);
  };
}
var $699afe8e9e0f66de$exports = {};
$parcel$export9($699afe8e9e0f66de$exports, "mergeProps", () => $699afe8e9e0f66de$export$9d1611c77c2fe928);
function $699afe8e9e0f66de$export$9d1611c77c2fe928(...args) {
  let result = {
    ...args[0]
  };
  for (let i3 = 1; i3 < args.length; i3++) {
    let props = args[i3];
    for (let key in props) {
      let a4 = result[key];
      let b2 = props[key];
      if (typeof a4 === "function" && typeof b2 === "function" && key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= 65 && key.charCodeAt(2) <= 90)
        result[key] = $2aefb161b9a41928$export$e08e3b67e392101e(a4, b2);
      else if ((key === "className" || key === "UNSAFE_className") && typeof a4 === "string" && typeof b2 === "string")
        result[key] = clsx_m_default(a4, b2);
      else if (key === "id" && a4 && b2)
        result.id = $4208ab27be92763a$export$cd8c9cb68f842629(a4, b2);
      else
        result[key] = b2 !== void 0 ? b2 : a4;
    }
  }
  return result;
}
var $7efcb978e02fb174$exports = {};
$parcel$export9($7efcb978e02fb174$exports, "filterDOMProps", () => $7efcb978e02fb174$export$457c3d6518dd4c6f);
var $7efcb978e02fb174$var$DOMPropNames = new Set([
  "id"
]);
var $7efcb978e02fb174$var$labelablePropNames = new Set([
  "aria-label",
  "aria-labelledby",
  "aria-describedby",
  "aria-details"
]);
var $7efcb978e02fb174$var$propRe = /^(data-.*)$/;
function $7efcb978e02fb174$export$457c3d6518dd4c6f(props, opts = {}) {
  let { labelable, propNames } = opts;
  let filteredProps = {};
  for (const prop in props)
    if (Object.prototype.hasOwnProperty.call(props, prop) && ($7efcb978e02fb174$var$DOMPropNames.has(prop) || labelable && $7efcb978e02fb174$var$labelablePropNames.has(prop) || propNames?.has(prop) || $7efcb978e02fb174$var$propRe.test(prop)))
      filteredProps[prop] = props[prop];
  return filteredProps;
}
var $0172e2a3384c2851$exports = {};
$parcel$export9($0172e2a3384c2851$exports, "focusWithoutScrolling", () => $0172e2a3384c2851$export$de79e2c695e052f3);
function $0172e2a3384c2851$export$de79e2c695e052f3(element) {
  if ($0172e2a3384c2851$var$supportsPreventScroll())
    element.focus({
      preventScroll: true
    });
  else {
    let scrollableElements = $0172e2a3384c2851$var$getScrollableElements(element);
    element.focus();
    $0172e2a3384c2851$var$restoreScrollPosition(scrollableElements);
  }
}
var $0172e2a3384c2851$var$supportsPreventScrollCached = null;
function $0172e2a3384c2851$var$supportsPreventScroll() {
  if ($0172e2a3384c2851$var$supportsPreventScrollCached == null) {
    $0172e2a3384c2851$var$supportsPreventScrollCached = false;
    try {
      var focusElem = document.createElement("div");
      focusElem.focus({
        get preventScroll() {
          $0172e2a3384c2851$var$supportsPreventScrollCached = true;
          return true;
        }
      });
    } catch (e5) {
    }
  }
  return $0172e2a3384c2851$var$supportsPreventScrollCached;
}
function $0172e2a3384c2851$var$getScrollableElements(element) {
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
function $0172e2a3384c2851$var$restoreScrollPosition(scrollableElements) {
  for (let { element, scrollTop, scrollLeft } of scrollableElements) {
    element.scrollTop = scrollTop;
    element.scrollLeft = scrollLeft;
  }
}
var $5062b1512bdf762b$exports = {};
$parcel$export9($5062b1512bdf762b$exports, "getOffset", () => $5062b1512bdf762b$export$622cea445a1c5b7d);
function $5062b1512bdf762b$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
  let rect = element.getBoundingClientRect();
  if (reverse)
    return orientation === "horizontal" ? rect.right : rect.bottom;
  return orientation === "horizontal" ? rect.left : rect.top;
}
var $5cdbf4ddafd135bc$exports = {};
$parcel$export9($5cdbf4ddafd135bc$exports, "clamp", () => $48d9f1d165180307$export$7d15b64cf5a3a4c4);
$parcel$export9($5cdbf4ddafd135bc$exports, "snapValueToStep", () => $48d9f1d165180307$export$cb6e0bb50bc19463);
var $fdecdd2f4116564c$exports = {};
$parcel$export9($fdecdd2f4116564c$exports, "runAfterTransition", () => $fdecdd2f4116564c$export$24490316f764c430);
var $fdecdd2f4116564c$var$transitionsByElement = new Map();
var $fdecdd2f4116564c$var$transitionCallbacks = new Set();
function $fdecdd2f4116564c$var$setupGlobalEvents() {
  if (typeof window === "undefined")
    return;
  let onTransitionStart = (e5) => {
    let transitions = $fdecdd2f4116564c$var$transitionsByElement.get(e5.target);
    if (!transitions) {
      transitions = new Set();
      $fdecdd2f4116564c$var$transitionsByElement.set(e5.target, transitions);
      e5.target.addEventListener("transitioncancel", onTransitionEnd);
    }
    transitions.add(e5.propertyName);
  };
  let onTransitionEnd = (e5) => {
    let properties = $fdecdd2f4116564c$var$transitionsByElement.get(e5.target);
    if (!properties)
      return;
    properties.delete(e5.propertyName);
    if (properties.size === 0) {
      e5.target.removeEventListener("transitioncancel", onTransitionEnd);
      $fdecdd2f4116564c$var$transitionsByElement.delete(e5.target);
    }
    if ($fdecdd2f4116564c$var$transitionsByElement.size === 0) {
      for (let cb of $fdecdd2f4116564c$var$transitionCallbacks)
        cb();
      $fdecdd2f4116564c$var$transitionCallbacks.clear();
    }
  };
  document.body.addEventListener("transitionrun", onTransitionStart);
  document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $fdecdd2f4116564c$var$setupGlobalEvents();
  else
    document.addEventListener("DOMContentLoaded", $fdecdd2f4116564c$var$setupGlobalEvents);
}
function $fdecdd2f4116564c$export$24490316f764c430(fn) {
  requestAnimationFrame(() => {
    if ($fdecdd2f4116564c$var$transitionsByElement.size === 0)
      fn();
    else
      $fdecdd2f4116564c$var$transitionCallbacks.add(fn);
  });
}
var $95a0e07fe544f4e9$exports = {};
$parcel$export9($95a0e07fe544f4e9$exports, "useDrag1D", () => $95a0e07fe544f4e9$export$7bbed75feba39706);
var $95a0e07fe544f4e9$var$draggingElements = [];
function $95a0e07fe544f4e9$export$7bbed75feba39706(props) {
  console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
  let { containerRef, reverse, orientation, onHover, onDrag, onPositionChange, onIncrement, onDecrement, onIncrementToMax, onDecrementToMin, onCollapseToggle } = props;
  let getPosition = (e5) => orientation === "horizontal" ? e5.clientX : e5.clientY;
  let getNextOffset = (e5) => {
    let containerOffset = $5062b1512bdf762b$export$622cea445a1c5b7d(containerRef.current, reverse, orientation);
    let mouseOffset = getPosition(e5);
    let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
    return nextOffset;
  };
  let dragging = (0, import_react15.useRef)(false);
  let prevPosition = (0, import_react15.useRef)(0);
  let handlers = (0, import_react15.useRef)({
    onPositionChange,
    onDrag
  });
  handlers.current.onDrag = onDrag;
  handlers.current.onPositionChange = onPositionChange;
  let onMouseDragged = (e5) => {
    e5.preventDefault();
    let nextOffset = getNextOffset(e5);
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
  let onMouseUp = (e5) => {
    const target = e5.target;
    dragging.current = false;
    let nextOffset = getNextOffset(e5);
    if (handlers.current.onDrag)
      handlers.current.onDrag(false);
    if (handlers.current.onPositionChange)
      handlers.current.onPositionChange(nextOffset);
    $95a0e07fe544f4e9$var$draggingElements.splice($95a0e07fe544f4e9$var$draggingElements.indexOf(target), 1);
    window.removeEventListener("mouseup", onMouseUp, false);
    window.removeEventListener("mousemove", onMouseDragged, false);
  };
  let onMouseDown = (e5) => {
    const target = e5.currentTarget;
    if ($95a0e07fe544f4e9$var$draggingElements.some((elt) => target.contains(elt)))
      return;
    $95a0e07fe544f4e9$var$draggingElements.push(target);
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
  let onKeyDown = (e5) => {
    switch (e5.key) {
      case "Left":
      case "ArrowLeft":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Up":
      case "ArrowUp":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onDecrement && !reverse)
            onDecrement();
          else if (onIncrement && reverse)
            onIncrement();
        }
        break;
      case "Right":
      case "ArrowRight":
        if (orientation === "horizontal") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Down":
      case "ArrowDown":
        if (orientation === "vertical") {
          e5.preventDefault();
          if (onIncrement && !reverse)
            onIncrement();
          else if (onDecrement && reverse)
            onDecrement();
        }
        break;
      case "Home":
        e5.preventDefault();
        if (onDecrementToMin)
          onDecrementToMin();
        break;
      case "End":
        e5.preventDefault();
        if (onIncrementToMax)
          onIncrementToMax();
        break;
      case "Enter":
        e5.preventDefault();
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
var $042598a43c3fee40$exports = {};
$parcel$export9($042598a43c3fee40$exports, "useGlobalListeners", () => $042598a43c3fee40$export$4eaf04e54aa8eed6);
function $042598a43c3fee40$export$4eaf04e54aa8eed6() {
  let globalListeners = (0, import_react15.useRef)(new Map());
  let addGlobalListener = (0, import_react15.useCallback)((eventTarget, type, listener, options) => {
    let fn = options?.once ? (...args) => {
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
  let removeGlobalListener = (0, import_react15.useCallback)((eventTarget, type, listener, options) => {
    let fn = globalListeners.current.get(listener)?.fn || listener;
    eventTarget.removeEventListener(type, fn, options);
    globalListeners.current.delete(listener);
  }, []);
  let removeAllGlobalListeners = (0, import_react15.useCallback)(() => {
    globalListeners.current.forEach((value, key) => {
      removeGlobalListener(value.eventTarget, value.type, key, value.options);
    });
  }, [
    removeGlobalListener
  ]);
  (0, import_react15.useEffect)(() => {
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
var $2ab91c20d1fbac23$exports = {};
$parcel$export9($2ab91c20d1fbac23$exports, "useLabels", () => $2ab91c20d1fbac23$export$d6875122194c7b44);
function $2ab91c20d1fbac23$export$d6875122194c7b44(props, defaultLabel) {
  let { id, "aria-label": label, "aria-labelledby": labelledBy } = props;
  id = $4208ab27be92763a$export$f680877a34711e37(id);
  if (labelledBy && label) {
    let ids = new Set([
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
var $1ea3613dec903cb9$exports = {};
$parcel$export9($1ea3613dec903cb9$exports, "useObjectRef", () => $1ea3613dec903cb9$export$4338b53315abf666);
function $1ea3613dec903cb9$export$4338b53315abf666(forwardedRef) {
  const objRef = (0, import_react15.useRef)();
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
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
var $d3ab8ae13db3a1fd$exports = {};
$parcel$export9($d3ab8ae13db3a1fd$exports, "useUpdateEffect", () => $d3ab8ae13db3a1fd$export$496315a1608d9602);
function $d3ab8ae13db3a1fd$export$496315a1608d9602(effect, dependencies) {
  const isInitialMount = (0, import_react15.useRef)(true);
  (0, import_react15.useEffect)(() => {
    if (isInitialMount.current)
      isInitialMount.current = false;
    else
      effect();
  }, dependencies);
}
var $f3e728a941364b05$exports = {};
$parcel$export9($f3e728a941364b05$exports, "useResizeObserver", () => $f3e728a941364b05$export$683480f191c0e3ea);
function $f3e728a941364b05$var$hasResizeObserver() {
  return typeof window.ResizeObserver !== "undefined";
}
function $f3e728a941364b05$export$683480f191c0e3ea(options) {
  const { ref, onResize } = options;
  (0, import_react15.useEffect)(() => {
    let element = ref?.current;
    if (!element)
      return;
    if (!$f3e728a941364b05$var$hasResizeObserver()) {
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
var $518b8f251641d71b$exports = {};
$parcel$export9($518b8f251641d71b$exports, "useSyncRef", () => $518b8f251641d71b$export$4debdb1a3f0fa79e);
function $518b8f251641d71b$export$4debdb1a3f0fa79e(context, ref) {
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
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
var $2fe8625dffd76a00$exports = {};
$parcel$export9($2fe8625dffd76a00$exports, "getScrollParent", () => $2fe8625dffd76a00$export$cfa2225e87938781);
function $2fe8625dffd76a00$export$cfa2225e87938781(node) {
  while (node && !$2fe8625dffd76a00$var$isScrollable(node))
    node = node.parentElement;
  return node || document.scrollingElement || document.documentElement;
}
function $2fe8625dffd76a00$var$isScrollable(node) {
  let style = window.getComputedStyle(node);
  return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}
var $c5fe598a15f005e5$exports = {};
$parcel$export9($c5fe598a15f005e5$exports, "useViewportSize", () => $c5fe598a15f005e5$export$d699905dd57c73ca);
var $c5fe598a15f005e5$var$visualViewport = typeof window !== "undefined" && window.visualViewport;
function $c5fe598a15f005e5$export$d699905dd57c73ca() {
  let [size1, setSize] = (0, import_react15.useState)(() => $c5fe598a15f005e5$var$getViewportSize());
  (0, import_react15.useEffect)(() => {
    let onResize = () => {
      setSize((size) => {
        let newSize = $c5fe598a15f005e5$var$getViewportSize();
        if (newSize.width === size.width && newSize.height === size.height)
          return size;
        return newSize;
      });
    };
    if (!$c5fe598a15f005e5$var$visualViewport)
      window.addEventListener("resize", onResize);
    else
      $c5fe598a15f005e5$var$visualViewport.addEventListener("resize", onResize);
    return () => {
      if (!$c5fe598a15f005e5$var$visualViewport)
        window.removeEventListener("resize", onResize);
      else
        $c5fe598a15f005e5$var$visualViewport.removeEventListener("resize", onResize);
    };
  }, []);
  return size1;
}
function $c5fe598a15f005e5$var$getViewportSize() {
  return {
    width: $c5fe598a15f005e5$var$visualViewport?.width || window.innerWidth,
    height: $c5fe598a15f005e5$var$visualViewport?.height || window.innerHeight
  };
}
var $5475261706737633$exports = {};
$parcel$export9($5475261706737633$exports, "useDescription", () => $5475261706737633$export$f8aeda7b10753fa1);
var $5475261706737633$var$descriptionId = 0;
var $5475261706737633$var$descriptionNodes = new Map();
function $5475261706737633$export$f8aeda7b10753fa1(description) {
  let [id1, setId] = (0, import_react15.useState)(null);
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
    if (!description)
      return;
    let desc = $5475261706737633$var$descriptionNodes.get(description);
    if (!desc) {
      let id = `react-aria-description-${$5475261706737633$var$descriptionId++}`;
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
      $5475261706737633$var$descriptionNodes.set(description, desc);
    } else
      setId(desc.element.id);
    desc.refCount++;
    return () => {
      if (--desc.refCount === 0) {
        desc.element.remove();
        $5475261706737633$var$descriptionNodes.delete(description);
      }
    };
  }, [
    description
  ]);
  return {
    "aria-describedby": description ? id1 : void 0
  };
}
var $43a0edf5ccd884bb$exports = {};
$parcel$export9($43a0edf5ccd884bb$exports, "isMac", () => $43a0edf5ccd884bb$export$9ac100e40613ea10);
$parcel$export9($43a0edf5ccd884bb$exports, "isIPhone", () => $43a0edf5ccd884bb$export$186c6964ca17d99);
$parcel$export9($43a0edf5ccd884bb$exports, "isIPad", () => $43a0edf5ccd884bb$export$7bef049ce92e4224);
$parcel$export9($43a0edf5ccd884bb$exports, "isIOS", () => $43a0edf5ccd884bb$export$fedb369cb70207f1);
$parcel$export9($43a0edf5ccd884bb$exports, "isAppleDevice", () => $43a0edf5ccd884bb$export$e1865c3bedcd822b);
$parcel$export9($43a0edf5ccd884bb$exports, "isWebKit", () => $43a0edf5ccd884bb$export$78551043582a6a98);
$parcel$export9($43a0edf5ccd884bb$exports, "isChrome", () => $43a0edf5ccd884bb$export$6446a186d09e379e);
$parcel$export9($43a0edf5ccd884bb$exports, "isAndroid", () => $43a0edf5ccd884bb$export$a11b0059900ceec8);
function $43a0edf5ccd884bb$var$testUserAgent(re2) {
  return typeof window !== "undefined" && window.navigator != null ? re2.test(window.navigator.userAgent) : false;
}
function $43a0edf5ccd884bb$var$testPlatform(re2) {
  return typeof window !== "undefined" && window.navigator != null ? re2.test(window.navigator.platform) : false;
}
function $43a0edf5ccd884bb$export$9ac100e40613ea10() {
  return $43a0edf5ccd884bb$var$testPlatform(/^Mac/);
}
function $43a0edf5ccd884bb$export$186c6964ca17d99() {
  return $43a0edf5ccd884bb$var$testPlatform(/^iPhone/);
}
function $43a0edf5ccd884bb$export$7bef049ce92e4224() {
  return $43a0edf5ccd884bb$var$testPlatform(/^iPad/) || $43a0edf5ccd884bb$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $43a0edf5ccd884bb$export$fedb369cb70207f1() {
  return $43a0edf5ccd884bb$export$186c6964ca17d99() || $43a0edf5ccd884bb$export$7bef049ce92e4224();
}
function $43a0edf5ccd884bb$export$e1865c3bedcd822b() {
  return $43a0edf5ccd884bb$export$9ac100e40613ea10() || $43a0edf5ccd884bb$export$fedb369cb70207f1();
}
function $43a0edf5ccd884bb$export$78551043582a6a98() {
  return $43a0edf5ccd884bb$var$testUserAgent(/AppleWebKit/) && !$43a0edf5ccd884bb$export$6446a186d09e379e();
}
function $43a0edf5ccd884bb$export$6446a186d09e379e() {
  return $43a0edf5ccd884bb$var$testUserAgent(/Chrome/);
}
function $43a0edf5ccd884bb$export$a11b0059900ceec8() {
  return $43a0edf5ccd884bb$var$testUserAgent(/Android/);
}
var $6f85328eaea47571$exports = {};
$parcel$export9($6f85328eaea47571$exports, "useEvent", () => $6f85328eaea47571$export$90fc3a17d93f704c);
function $6f85328eaea47571$export$90fc3a17d93f704c(ref, event, handler1, options) {
  let handlerRef = (0, import_react15.useRef)(handler1);
  handlerRef.current = handler1;
  let isDisabled = handler1 == null;
  (0, import_react15.useEffect)(() => {
    if (isDisabled)
      return;
    let element = ref.current;
    let handler = (e5) => handlerRef.current.call(this, e5);
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
var $8bfb318ccfa2e412$exports = {};
$parcel$export9($8bfb318ccfa2e412$exports, "useValueEffect", () => $8bfb318ccfa2e412$export$14d238f342723f25);
function $8bfb318ccfa2e412$export$14d238f342723f25(defaultValue) {
  let [value, setValue] = (0, import_react15.useState)(defaultValue);
  let valueRef = (0, import_react15.useRef)(value);
  let effect = (0, import_react15.useRef)(null);
  valueRef.current = value;
  let nextRef = (0, import_react15.useRef)(null);
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
  $62918828a5c4cefe$export$e5c5a5f917a5871c(() => {
    if (effect.current)
      nextRef.current();
  });
  let queue = (0, import_react15.useCallback)((fn) => {
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
var $7b1a72e750057d55$exports = {};
$parcel$export9($7b1a72e750057d55$exports, "scrollIntoView", () => $7b1a72e750057d55$export$53a0910f038337bd);
function $7b1a72e750057d55$export$53a0910f038337bd(scrollView, element) {
  let offsetX = $7b1a72e750057d55$var$relativeOffset(scrollView, element, "left");
  let offsetY = $7b1a72e750057d55$var$relativeOffset(scrollView, element, "top");
  let width = element.offsetWidth;
  let height = element.offsetHeight;
  let x4 = scrollView.scrollLeft;
  let y3 = scrollView.scrollTop;
  let maxX = x4 + scrollView.offsetWidth;
  let maxY = y3 + scrollView.offsetHeight;
  if (offsetX <= x4)
    x4 = offsetX;
  else if (offsetX + width > maxX)
    x4 += offsetX + width - maxX;
  if (offsetY <= y3)
    y3 = offsetY;
  else if (offsetY + height > maxY)
    y3 += offsetY + height - maxY;
  scrollView.scrollLeft = x4;
  scrollView.scrollTop = y3;
}
function $7b1a72e750057d55$var$relativeOffset(ancestor, child, axis) {
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
var import_react16 = __toModule(require_react());
function $parcel$export10(e5, n2, v3, s4) {
  Object.defineProperty(e5, n2, { get: v3, set: s4, enumerable: true, configurable: true });
}
var $acf5f8872229f2cb$exports = {};
$parcel$export10($acf5f8872229f2cb$exports, "Pressable", () => $acf5f8872229f2cb$export$27c701ed9e449e99);
var $bb70d401e0bbab2b$exports = {};
$parcel$export10($bb70d401e0bbab2b$exports, "usePress", () => $bb70d401e0bbab2b$export$45712eceda6fad21);
var $8714dea79b55b9da$var$state = "default";
var $8714dea79b55b9da$var$savedUserSelect = "";
var $8714dea79b55b9da$var$modifiedElementMap = new WeakMap();
function $8714dea79b55b9da$export$16a4697467175487(target) {
  if ($43a0edf5ccd884bb$export$fedb369cb70207f1()) {
    if ($8714dea79b55b9da$var$state === "default") {
      $8714dea79b55b9da$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
      document.documentElement.style.webkitUserSelect = "none";
    }
    $8714dea79b55b9da$var$state = "disabled";
  } else if (target) {
    $8714dea79b55b9da$var$modifiedElementMap.set(target, target.style.userSelect);
    target.style.userSelect = "none";
  }
}
function $8714dea79b55b9da$export$b0d6fa1ab32e3295(target) {
  if ($43a0edf5ccd884bb$export$fedb369cb70207f1()) {
    if ($8714dea79b55b9da$var$state !== "disabled")
      return;
    $8714dea79b55b9da$var$state = "restoring";
    setTimeout(() => {
      $fdecdd2f4116564c$export$24490316f764c430(() => {
        if ($8714dea79b55b9da$var$state === "restoring") {
          if (document.documentElement.style.webkitUserSelect === "none")
            document.documentElement.style.webkitUserSelect = $8714dea79b55b9da$var$savedUserSelect || "";
          $8714dea79b55b9da$var$savedUserSelect = "";
          $8714dea79b55b9da$var$state = "default";
        }
      });
    }, 300);
  } else if (target && $8714dea79b55b9da$var$modifiedElementMap.has(target)) {
    let targetOldUserSelect = $8714dea79b55b9da$var$modifiedElementMap.get(target);
    if (target.style.userSelect === "none")
      target.style.userSelect = targetOldUserSelect;
    if (target.getAttribute("style") === "")
      target.removeAttribute("style");
    $8714dea79b55b9da$var$modifiedElementMap.delete(target);
  }
}
function $e0ce205c97c9e771$export$60278871457622de(event) {
  if (event.mozInputSource === 0 && event.isTrusted)
    return true;
  return event.detail === 0 && !event.pointerType;
}
var $60f869ba95814a99$export$5165eccb35aaadb5 = import_react16.default.createContext(null);
$60f869ba95814a99$export$5165eccb35aaadb5.displayName = "PressResponderContext";
function $bb70d401e0bbab2b$var$usePressResponderContext(props) {
  let context = (0, import_react16.useContext)($60f869ba95814a99$export$5165eccb35aaadb5);
  if (context) {
    let { register, ...contextProps } = context;
    props = $699afe8e9e0f66de$export$9d1611c77c2fe928(contextProps, props);
    register();
  }
  $518b8f251641d71b$export$4debdb1a3f0fa79e(context, props.ref);
  return props;
}
function $bb70d401e0bbab2b$export$45712eceda6fad21(props) {
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
  } = $bb70d401e0bbab2b$var$usePressResponderContext(props);
  let propsRef = (0, import_react16.useRef)(null);
  propsRef.current = {
    onPress: onPress1,
    onPressChange: onPressChange1,
    onPressStart: onPressStart1,
    onPressEnd: onPressEnd1,
    onPressUp: onPressUp1,
    isDisabled: isDisabled1,
    shouldCancelOnPointerExit
  };
  let [isPressed, setPressed] = (0, import_react16.useState)(false);
  let ref = (0, import_react16.useRef)({
    isPressed: false,
    ignoreEmulatedMouseEvents: false,
    ignoreClickAfterPress: false,
    didFirePressStart: false,
    activePointerId: null,
    target: null,
    isOverTarget: false,
    pointerType: null
  });
  let { addGlobalListener, removeAllGlobalListeners } = $042598a43c3fee40$export$4eaf04e54aa8eed6();
  let pressProps1 = (0, import_react16.useMemo)(() => {
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
    let cancel = (e5) => {
      if (state.isPressed) {
        if (state.isOverTarget)
          triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType, false);
        state.isPressed = false;
        state.isOverTarget = false;
        state.activePointerId = null;
        state.pointerType = null;
        removeAllGlobalListeners();
        if (!allowTextSelectionOnPress)
          $8714dea79b55b9da$export$b0d6fa1ab32e3295(state.target);
      }
    };
    let pressProps = {
      onKeyDown(e5) {
        if ($bb70d401e0bbab2b$var$isValidKeyboardEvent(e5.nativeEvent) && e5.currentTarget.contains(e5.target)) {
          if ($bb70d401e0bbab2b$var$shouldPreventDefaultKeyboard(e5.target))
            e5.preventDefault();
          e5.stopPropagation();
          if (!state.isPressed && !e5.repeat) {
            state.target = e5.currentTarget;
            state.isPressed = true;
            triggerPressStart(e5, "keyboard");
            addGlobalListener(document, "keyup", onKeyUp, false);
          }
        }
      },
      onKeyUp(e5) {
        if ($bb70d401e0bbab2b$var$isValidKeyboardEvent(e5.nativeEvent) && !e5.repeat && e5.currentTarget.contains(e5.target))
          triggerPressUp($bb70d401e0bbab2b$var$createEvent(state.target, e5), "keyboard");
      },
      onClick(e5) {
        if (e5 && !e5.currentTarget.contains(e5.target))
          return;
        if (e5 && e5.button === 0) {
          e5.stopPropagation();
          if (isDisabled1)
            e5.preventDefault();
          if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || $e0ce205c97c9e771$export$60278871457622de(e5.nativeEvent))) {
            if (!isDisabled1 && !preventFocusOnPress)
              $0172e2a3384c2851$export$de79e2c695e052f3(e5.currentTarget);
            triggerPressStart(e5, "virtual");
            triggerPressUp(e5, "virtual");
            triggerPressEnd(e5, "virtual");
          }
          state.ignoreEmulatedMouseEvents = false;
          state.ignoreClickAfterPress = false;
        }
      }
    };
    let onKeyUp = (e5) => {
      if (state.isPressed && $bb70d401e0bbab2b$var$isValidKeyboardEvent(e5)) {
        if ($bb70d401e0bbab2b$var$shouldPreventDefaultKeyboard(e5.target))
          e5.preventDefault();
        e5.stopPropagation();
        state.isPressed = false;
        let target = e5.target;
        triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), "keyboard", state.target.contains(target));
        removeAllGlobalListeners();
        if (state.target.contains(target) && $bb70d401e0bbab2b$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")
          state.target.click();
      }
    };
    if (typeof PointerEvent !== "undefined") {
      pressProps.onPointerDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($bb70d401e0bbab2b$var$isVirtualPointerEvent(e5.nativeEvent)) {
          state.pointerType = "virtual";
          return;
        }
        if ($bb70d401e0bbab2b$var$shouldPreventDefault(e5.target))
          e5.preventDefault();
        state.pointerType = e5.pointerType;
        e5.stopPropagation();
        if (!state.isPressed) {
          state.isPressed = true;
          state.isOverTarget = true;
          state.activePointerId = e5.pointerId;
          state.target = e5.currentTarget;
          if (!isDisabled1 && !preventFocusOnPress)
            $0172e2a3384c2851$export$de79e2c695e052f3(e5.currentTarget);
          if (!allowTextSelectionOnPress)
            $8714dea79b55b9da$export$16a4697467175487(state.target);
          triggerPressStart(e5, state.pointerType);
          addGlobalListener(document, "pointermove", onPointerMove, false);
          addGlobalListener(document, "pointerup", onPointerUp, false);
          addGlobalListener(document, "pointercancel", onPointerCancel, false);
        }
      };
      pressProps.onMouseDown = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (e5.button === 0) {
          if ($bb70d401e0bbab2b$var$shouldPreventDefault(e5.target))
            e5.preventDefault();
          e5.stopPropagation();
        }
      };
      pressProps.onPointerUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target) || state.pointerType === "virtual")
          return;
        if (e5.button === 0 && $bb70d401e0bbab2b$var$isOverTarget(e5, e5.currentTarget))
          triggerPressUp(e5, state.pointerType || e5.pointerType);
      };
      let onPointerMove = (e5) => {
        if (e5.pointerId !== state.activePointerId)
          return;
        if ($bb70d401e0bbab2b$var$isOverTarget(e5, state.target)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.activePointerId && state.isPressed && e5.button === 0) {
          if ($bb70d401e0bbab2b$var$isOverTarget(e5, state.target))
            triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType);
          else if (state.isOverTarget)
            triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType, false);
          state.isPressed = false;
          state.isOverTarget = false;
          state.activePointerId = null;
          state.pointerType = null;
          removeAllGlobalListeners();
          if (!allowTextSelectionOnPress)
            $8714dea79b55b9da$export$b0d6fa1ab32e3295(state.target);
        }
      };
      let onPointerCancel = (e5) => {
        cancel(e5);
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
      };
    } else {
      pressProps.onMouseDown = (e5) => {
        if (e5.button !== 0 || !e5.currentTarget.contains(e5.target))
          return;
        if ($bb70d401e0bbab2b$var$shouldPreventDefault(e5.target))
          e5.preventDefault();
        e5.stopPropagation();
        if (state.ignoreEmulatedMouseEvents)
          return;
        state.isPressed = true;
        state.isOverTarget = true;
        state.target = e5.currentTarget;
        state.pointerType = $e0ce205c97c9e771$export$60278871457622de(e5.nativeEvent) ? "virtual" : "mouse";
        if (!isDisabled1 && !preventFocusOnPress)
          $0172e2a3384c2851$export$de79e2c695e052f3(e5.currentTarget);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(document, "mouseup", onMouseUp, false);
      };
      pressProps.onMouseEnter = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = true;
          triggerPressStart(e5, state.pointerType);
        }
      };
      pressProps.onMouseLeave = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onMouseUp = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        if (!state.ignoreEmulatedMouseEvents && e5.button === 0)
          triggerPressUp(e5, state.pointerType);
      };
      let onMouseUp = (e5) => {
        if (e5.button !== 0)
          return;
        state.isPressed = false;
        removeAllGlobalListeners();
        if (state.ignoreEmulatedMouseEvents) {
          state.ignoreEmulatedMouseEvents = false;
          return;
        }
        if ($bb70d401e0bbab2b$var$isOverTarget(e5, state.target))
          triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType);
        else if (state.isOverTarget)
          triggerPressEnd($bb70d401e0bbab2b$var$createEvent(state.target, e5), state.pointerType, false);
        state.isOverTarget = false;
      };
      pressProps.onTouchStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        let touch = $bb70d401e0bbab2b$var$getTouchFromEvent(e5.nativeEvent);
        if (!touch)
          return;
        state.activePointerId = touch.identifier;
        state.ignoreEmulatedMouseEvents = true;
        state.isOverTarget = true;
        state.isPressed = true;
        state.target = e5.currentTarget;
        state.pointerType = "touch";
        if (!isDisabled1 && !preventFocusOnPress)
          $0172e2a3384c2851$export$de79e2c695e052f3(e5.currentTarget);
        if (!allowTextSelectionOnPress)
          $8714dea79b55b9da$export$16a4697467175487(state.target);
        triggerPressStart(e5, state.pointerType);
        addGlobalListener(window, "scroll", onScroll, true);
      };
      pressProps.onTouchMove = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $bb70d401e0bbab2b$var$getTouchById(e5.nativeEvent, state.activePointerId);
        if (touch && $bb70d401e0bbab2b$var$isOverTarget(touch, e5.currentTarget)) {
          if (!state.isOverTarget) {
            state.isOverTarget = true;
            triggerPressStart(e5, state.pointerType);
          }
        } else if (state.isOverTarget) {
          state.isOverTarget = false;
          triggerPressEnd(e5, state.pointerType, false);
          if (propsRef.current.shouldCancelOnPointerExit)
            cancel(e5);
        }
      };
      pressProps.onTouchEnd = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (!state.isPressed)
          return;
        let touch = $bb70d401e0bbab2b$var$getTouchById(e5.nativeEvent, state.activePointerId);
        if (touch && $bb70d401e0bbab2b$var$isOverTarget(touch, e5.currentTarget)) {
          triggerPressUp(e5, state.pointerType);
          triggerPressEnd(e5, state.pointerType);
        } else if (state.isOverTarget)
          triggerPressEnd(e5, state.pointerType, false);
        state.isPressed = false;
        state.activePointerId = null;
        state.isOverTarget = false;
        state.ignoreEmulatedMouseEvents = true;
        if (!allowTextSelectionOnPress)
          $8714dea79b55b9da$export$b0d6fa1ab32e3295(state.target);
        removeAllGlobalListeners();
      };
      pressProps.onTouchCancel = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        e5.stopPropagation();
        if (state.isPressed)
          cancel(e5);
      };
      let onScroll = (e5) => {
        if (state.isPressed && e5.target.contains(state.target))
          cancel({
            currentTarget: state.target,
            shiftKey: false,
            ctrlKey: false,
            metaKey: false,
            altKey: false
          });
      };
      pressProps.onDragStart = (e5) => {
        if (!e5.currentTarget.contains(e5.target))
          return;
        cancel(e5);
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
  (0, import_react16.useEffect)(() => {
    return () => {
      if (!allowTextSelectionOnPress)
        $8714dea79b55b9da$export$b0d6fa1ab32e3295(ref.current.target);
    };
  }, [
    allowTextSelectionOnPress
  ]);
  return {
    isPressed: isPressedProp || isPressed,
    pressProps: $699afe8e9e0f66de$export$9d1611c77c2fe928(domProps, pressProps1)
  };
}
function $bb70d401e0bbab2b$var$isHTMLAnchorLink(target) {
  return target.tagName === "A" && target.hasAttribute("href");
}
function $bb70d401e0bbab2b$var$isValidKeyboardEvent(event) {
  const { key, code, target } = event;
  const element = target;
  const { tagName, isContentEditable } = element;
  const role = element.getAttribute("role");
  return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && tagName !== "INPUT" && tagName !== "TEXTAREA" && isContentEditable !== true && (!$bb70d401e0bbab2b$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && !(role === "link" && key !== "Enter");
}
function $bb70d401e0bbab2b$var$getTouchFromEvent(event) {
  const { targetTouches } = event;
  if (targetTouches.length > 0)
    return targetTouches[0];
  return null;
}
function $bb70d401e0bbab2b$var$getTouchById(event, pointerId) {
  const changedTouches = event.changedTouches;
  for (let i3 = 0; i3 < changedTouches.length; i3++) {
    const touch = changedTouches[i3];
    if (touch.identifier === pointerId)
      return touch;
  }
  return null;
}
function $bb70d401e0bbab2b$var$createEvent(target, e5) {
  return {
    currentTarget: target,
    shiftKey: e5.shiftKey,
    ctrlKey: e5.ctrlKey,
    metaKey: e5.metaKey,
    altKey: e5.altKey
  };
}
function $bb70d401e0bbab2b$var$getPointClientRect(point) {
  let offsetX = point.width / 2 || point.radiusX || 0;
  let offsetY = point.height / 2 || point.radiusY || 0;
  return {
    top: point.clientY - offsetY,
    right: point.clientX + offsetX,
    bottom: point.clientY + offsetY,
    left: point.clientX - offsetX
  };
}
function $bb70d401e0bbab2b$var$areRectanglesOverlapping(a4, b2) {
  if (a4.left > b2.right || b2.left > a4.right)
    return false;
  if (a4.top > b2.bottom || b2.top > a4.bottom)
    return false;
  return true;
}
function $bb70d401e0bbab2b$var$isOverTarget(point, target) {
  let rect = target.getBoundingClientRect();
  let pointRect = $bb70d401e0bbab2b$var$getPointClientRect(point);
  return $bb70d401e0bbab2b$var$areRectanglesOverlapping(rect, pointRect);
}
function $bb70d401e0bbab2b$var$shouldPreventDefault(target) {
  return !target.closest('[draggable="true"]');
}
function $bb70d401e0bbab2b$var$shouldPreventDefaultKeyboard(target) {
  return !((target.tagName === "INPUT" || target.tagName === "BUTTON") && target.type === "submit");
}
function $bb70d401e0bbab2b$var$isVirtualPointerEvent(event) {
  return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0;
}
var $acf5f8872229f2cb$export$27c701ed9e449e99 = /* @__PURE__ */ import_react16.default.forwardRef(({ children, ...props }, ref) => {
  let newRef = (0, import_react16.useRef)();
  ref = ref ?? newRef;
  let { pressProps } = $bb70d401e0bbab2b$export$45712eceda6fad21({
    ...props,
    ref
  });
  let child = import_react16.default.Children.only(children);
  return /* @__PURE__ */ import_react16.default.cloneElement(child, {
    ref,
    ...$699afe8e9e0f66de$export$9d1611c77c2fe928(child.props, pressProps)
  });
});
var $36b2a54c41893e87$exports = {};
$parcel$export10($36b2a54c41893e87$exports, "PressResponder", () => $36b2a54c41893e87$export$3351871ee4b288b8);
var $36b2a54c41893e87$export$3351871ee4b288b8 = /* @__PURE__ */ import_react16.default.forwardRef(({ children, ...props }, ref) => {
  let isRegistered = (0, import_react16.useRef)(false);
  let prevContext = (0, import_react16.useContext)($60f869ba95814a99$export$5165eccb35aaadb5);
  let context = $699afe8e9e0f66de$export$9d1611c77c2fe928(prevContext || {}, {
    ...props,
    ref: ref || prevContext?.ref,
    register() {
      isRegistered.current = true;
      if (prevContext)
        prevContext.register();
    }
  });
  $518b8f251641d71b$export$4debdb1a3f0fa79e(prevContext, ref);
  (0, import_react16.useEffect)(() => {
    if (!isRegistered.current)
      console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
  }, []);
  return /* @__PURE__ */ import_react16.default.createElement($60f869ba95814a99$export$5165eccb35aaadb5.Provider, {
    value: context
  }, children);
});
var $96cd623b8d5dd15d$exports = {};
$parcel$export10($96cd623b8d5dd15d$exports, "useFocus", () => $96cd623b8d5dd15d$export$f8168d8dd8fd66e6);
function $96cd623b8d5dd15d$export$f8168d8dd8fd66e6(props) {
  if (props.isDisabled)
    return {
      focusProps: {}
    };
  let onFocus, onBlur;
  if (props.onFocus || props.onFocusChange)
    onFocus = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onFocus)
          props.onFocus(e5);
        if (props.onFocusChange)
          props.onFocusChange(true);
      }
    };
  if (props.onBlur || props.onFocusChange)
    onBlur = (e5) => {
      if (e5.target === e5.currentTarget) {
        if (props.onBlur)
          props.onBlur(e5);
        if (props.onFocusChange)
          props.onFocusChange(false);
      }
    };
  return {
    focusProps: {
      onFocus,
      onBlur
    }
  };
}
var $d2dd66cff767efeb$exports = {};
$parcel$export10($d2dd66cff767efeb$exports, "isFocusVisible", () => $d2dd66cff767efeb$export$b9b3dfddab17db27);
$parcel$export10($d2dd66cff767efeb$exports, "getInteractionModality", () => $d2dd66cff767efeb$export$630ff653c5ada6a9);
$parcel$export10($d2dd66cff767efeb$exports, "setInteractionModality", () => $d2dd66cff767efeb$export$8397ddfc504fdb9a);
$parcel$export10($d2dd66cff767efeb$exports, "useInteractionModality", () => $d2dd66cff767efeb$export$98e20ec92f614cfe);
$parcel$export10($d2dd66cff767efeb$exports, "useFocusVisible", () => $d2dd66cff767efeb$export$ffd9e5021c1fb2d6);
$parcel$export10($d2dd66cff767efeb$exports, "useFocusVisibleListener", () => $d2dd66cff767efeb$export$ec71b4b83ac08ec3);
var $d2dd66cff767efeb$var$currentModality = null;
var $d2dd66cff767efeb$var$changeHandlers = new Set();
var $d2dd66cff767efeb$var$hasSetupGlobalListeners = false;
var $d2dd66cff767efeb$var$hasEventBeforeFocus = false;
var $d2dd66cff767efeb$var$hasBlurredWindowRecently = false;
var $d2dd66cff767efeb$var$FOCUS_VISIBLE_INPUT_KEYS = {
  Tab: true,
  Escape: true
};
function $d2dd66cff767efeb$var$triggerChangeHandlers(modality, e5) {
  for (let handler of $d2dd66cff767efeb$var$changeHandlers)
    handler(modality, e5);
}
function $d2dd66cff767efeb$var$isValidKey(e5) {
  return !(e5.metaKey || !$43a0edf5ccd884bb$export$9ac100e40613ea10() && e5.altKey || e5.ctrlKey || e5.key === "Control" || e5.key === "Shift" || e5.key === "Meta");
}
function $d2dd66cff767efeb$var$handleKeyboardEvent(e5) {
  $d2dd66cff767efeb$var$hasEventBeforeFocus = true;
  if ($d2dd66cff767efeb$var$isValidKey(e5)) {
    $d2dd66cff767efeb$var$currentModality = "keyboard";
    $d2dd66cff767efeb$var$triggerChangeHandlers("keyboard", e5);
  }
}
function $d2dd66cff767efeb$var$handlePointerEvent(e5) {
  $d2dd66cff767efeb$var$currentModality = "pointer";
  if (e5.type === "mousedown" || e5.type === "pointerdown") {
    $d2dd66cff767efeb$var$hasEventBeforeFocus = true;
    $d2dd66cff767efeb$var$triggerChangeHandlers("pointer", e5);
  }
}
function $d2dd66cff767efeb$var$handleClickEvent(e5) {
  if ($e0ce205c97c9e771$export$60278871457622de(e5)) {
    $d2dd66cff767efeb$var$hasEventBeforeFocus = true;
    $d2dd66cff767efeb$var$currentModality = "virtual";
  }
}
function $d2dd66cff767efeb$var$handleFocusEvent(e5) {
  if (e5.target === window || e5.target === document)
    return;
  if (!$d2dd66cff767efeb$var$hasEventBeforeFocus && !$d2dd66cff767efeb$var$hasBlurredWindowRecently) {
    $d2dd66cff767efeb$var$currentModality = "virtual";
    $d2dd66cff767efeb$var$triggerChangeHandlers("virtual", e5);
  }
  $d2dd66cff767efeb$var$hasEventBeforeFocus = false;
  $d2dd66cff767efeb$var$hasBlurredWindowRecently = false;
}
function $d2dd66cff767efeb$var$handleWindowBlur() {
  $d2dd66cff767efeb$var$hasEventBeforeFocus = false;
  $d2dd66cff767efeb$var$hasBlurredWindowRecently = true;
}
function $d2dd66cff767efeb$var$setupGlobalFocusEvents() {
  if (typeof window === "undefined" || $d2dd66cff767efeb$var$hasSetupGlobalListeners)
    return;
  let focus = HTMLElement.prototype.focus;
  HTMLElement.prototype.focus = function() {
    $d2dd66cff767efeb$var$hasEventBeforeFocus = true;
    focus.apply(this, arguments);
  };
  document.addEventListener("keydown", $d2dd66cff767efeb$var$handleKeyboardEvent, true);
  document.addEventListener("keyup", $d2dd66cff767efeb$var$handleKeyboardEvent, true);
  document.addEventListener("click", $d2dd66cff767efeb$var$handleClickEvent, true);
  window.addEventListener("focus", $d2dd66cff767efeb$var$handleFocusEvent, true);
  window.addEventListener("blur", $d2dd66cff767efeb$var$handleWindowBlur, false);
  if (typeof PointerEvent !== "undefined") {
    document.addEventListener("pointerdown", $d2dd66cff767efeb$var$handlePointerEvent, true);
    document.addEventListener("pointermove", $d2dd66cff767efeb$var$handlePointerEvent, true);
    document.addEventListener("pointerup", $d2dd66cff767efeb$var$handlePointerEvent, true);
  } else {
    document.addEventListener("mousedown", $d2dd66cff767efeb$var$handlePointerEvent, true);
    document.addEventListener("mousemove", $d2dd66cff767efeb$var$handlePointerEvent, true);
    document.addEventListener("mouseup", $d2dd66cff767efeb$var$handlePointerEvent, true);
  }
  $d2dd66cff767efeb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
  if (document.readyState !== "loading")
    $d2dd66cff767efeb$var$setupGlobalFocusEvents();
  else
    document.addEventListener("DOMContentLoaded", $d2dd66cff767efeb$var$setupGlobalFocusEvents);
}
function $d2dd66cff767efeb$export$b9b3dfddab17db27() {
  return $d2dd66cff767efeb$var$currentModality !== "pointer";
}
function $d2dd66cff767efeb$export$630ff653c5ada6a9() {
  return $d2dd66cff767efeb$var$currentModality;
}
function $d2dd66cff767efeb$export$8397ddfc504fdb9a(modality) {
  $d2dd66cff767efeb$var$currentModality = modality;
  $d2dd66cff767efeb$var$triggerChangeHandlers(modality, null);
}
function $d2dd66cff767efeb$export$98e20ec92f614cfe() {
  $d2dd66cff767efeb$var$setupGlobalFocusEvents();
  let [modality, setModality] = (0, import_react16.useState)($d2dd66cff767efeb$var$currentModality);
  (0, import_react16.useEffect)(() => {
    let handler = () => {
      setModality($d2dd66cff767efeb$var$currentModality);
    };
    $d2dd66cff767efeb$var$changeHandlers.add(handler);
    return () => {
      $d2dd66cff767efeb$var$changeHandlers.delete(handler);
    };
  }, []);
  return modality;
}
function $d2dd66cff767efeb$var$isKeyboardFocusEvent(isTextInput, modality, e5) {
  return !(isTextInput && modality === "keyboard" && e5 instanceof KeyboardEvent && !$d2dd66cff767efeb$var$FOCUS_VISIBLE_INPUT_KEYS[e5.key]);
}
function $d2dd66cff767efeb$export$ffd9e5021c1fb2d6(props = {}) {
  let { isTextInput, autoFocus } = props;
  let [isFocusVisibleState, setFocusVisible] = (0, import_react16.useState)(autoFocus || $d2dd66cff767efeb$export$b9b3dfddab17db27());
  $d2dd66cff767efeb$export$ec71b4b83ac08ec3(($d2dd66cff767efeb$export$b9b3dfddab17db272) => {
    setFocusVisible($d2dd66cff767efeb$export$b9b3dfddab17db272);
  }, [
    isTextInput
  ], {
    isTextInput
  });
  return {
    isFocusVisible: isFocusVisibleState
  };
}
function $d2dd66cff767efeb$export$ec71b4b83ac08ec3(fn, deps, opts) {
  $d2dd66cff767efeb$var$setupGlobalFocusEvents();
  (0, import_react16.useEffect)(() => {
    let handler = (modality, e5) => {
      if (!$d2dd66cff767efeb$var$isKeyboardFocusEvent(opts?.isTextInput, modality, e5))
        return;
      fn($d2dd66cff767efeb$export$b9b3dfddab17db27());
    };
    $d2dd66cff767efeb$var$changeHandlers.add(handler);
    return () => {
      $d2dd66cff767efeb$var$changeHandlers.delete(handler);
    };
  }, deps);
}
var $d2acb2e6011484f7$exports = {};
$parcel$export10($d2acb2e6011484f7$exports, "useFocusWithin", () => $d2acb2e6011484f7$export$420e68273165f4ec);
function $d2acb2e6011484f7$export$420e68273165f4ec(props) {
  let state = (0, import_react16.useRef)({
    isFocusWithin: false
  }).current;
  if (props.isDisabled)
    return {
      focusWithinProps: {}
    };
  let onFocus = (e5) => {
    if (!state.isFocusWithin) {
      if (props.onFocusWithin)
        props.onFocusWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(true);
      state.isFocusWithin = true;
    }
  };
  let onBlur = (e5) => {
    if (state.isFocusWithin && !e5.currentTarget.contains(e5.relatedTarget)) {
      if (props.onBlurWithin)
        props.onBlurWithin(e5);
      if (props.onFocusWithinChange)
        props.onFocusWithinChange(false);
      state.isFocusWithin = false;
    }
  };
  return {
    focusWithinProps: {
      onFocus,
      onBlur
    }
  };
}
var $52a70f66afabebbb$exports = {};
$parcel$export10($52a70f66afabebbb$exports, "useHover", () => $52a70f66afabebbb$export$ae780daf29e6d456);
var $52a70f66afabebbb$var$globalIgnoreEmulatedMouseEvents = false;
var $52a70f66afabebbb$var$hoverCount = 0;
function $52a70f66afabebbb$var$setGlobalIgnoreEmulatedMouseEvents() {
  $52a70f66afabebbb$var$globalIgnoreEmulatedMouseEvents = true;
  setTimeout(() => {
    $52a70f66afabebbb$var$globalIgnoreEmulatedMouseEvents = false;
  }, 50);
}
function $52a70f66afabebbb$var$handleGlobalPointerEvent(e5) {
  if (e5.pointerType === "touch")
    $52a70f66afabebbb$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $52a70f66afabebbb$var$setupGlobalTouchEvents() {
  if (typeof document === "undefined")
    return;
  if (typeof PointerEvent !== "undefined")
    document.addEventListener("pointerup", $52a70f66afabebbb$var$handleGlobalPointerEvent);
  else
    document.addEventListener("touchend", $52a70f66afabebbb$var$setGlobalIgnoreEmulatedMouseEvents);
  $52a70f66afabebbb$var$hoverCount++;
  return () => {
    $52a70f66afabebbb$var$hoverCount--;
    if ($52a70f66afabebbb$var$hoverCount > 0)
      return;
    if (typeof PointerEvent !== "undefined")
      document.removeEventListener("pointerup", $52a70f66afabebbb$var$handleGlobalPointerEvent);
    else
      document.removeEventListener("touchend", $52a70f66afabebbb$var$setGlobalIgnoreEmulatedMouseEvents);
  };
}
function $52a70f66afabebbb$export$ae780daf29e6d456(props) {
  let { onHoverStart, onHoverChange, onHoverEnd, isDisabled } = props;
  let [isHovered, setHovered] = (0, import_react16.useState)(false);
  let state = (0, import_react16.useRef)({
    isHovered: false,
    ignoreEmulatedMouseEvents: false,
    pointerType: "",
    target: null
  }).current;
  (0, import_react16.useEffect)($52a70f66afabebbb$var$setupGlobalTouchEvents, []);
  let { hoverProps: hoverProps1, triggerHoverEnd: triggerHoverEnd1 } = (0, import_react16.useMemo)(() => {
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
      hoverProps.onPointerEnter = (e5) => {
        if ($52a70f66afabebbb$var$globalIgnoreEmulatedMouseEvents && e5.pointerType === "mouse")
          return;
        triggerHoverStart(e5, e5.pointerType);
      };
      hoverProps.onPointerLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, e5.pointerType);
      };
    } else {
      hoverProps.onTouchStart = () => {
        state.ignoreEmulatedMouseEvents = true;
      };
      hoverProps.onMouseEnter = (e5) => {
        if (!state.ignoreEmulatedMouseEvents && !$52a70f66afabebbb$var$globalIgnoreEmulatedMouseEvents)
          triggerHoverStart(e5, "mouse");
        state.ignoreEmulatedMouseEvents = false;
      };
      hoverProps.onMouseLeave = (e5) => {
        if (!isDisabled && e5.currentTarget.contains(e5.target))
          triggerHoverEnd(e5, "mouse");
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
  (0, import_react16.useEffect)(() => {
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
var $ba9bc027ba236f10$exports = {};
$parcel$export10($ba9bc027ba236f10$exports, "useInteractOutside", () => $ba9bc027ba236f10$export$872b660ac5a1ff98);
function $ba9bc027ba236f10$export$872b660ac5a1ff98(props) {
  let { ref, onInteractOutside, isDisabled, onInteractOutsideStart } = props;
  let stateRef = (0, import_react16.useRef)({
    isPointerDown: false,
    ignoreEmulatedMouseEvents: false,
    onInteractOutside,
    onInteractOutsideStart
  });
  let state = stateRef.current;
  state.onInteractOutside = onInteractOutside;
  state.onInteractOutsideStart = onInteractOutsideStart;
  (0, import_react16.useEffect)(() => {
    if (isDisabled)
      return;
    let onPointerDown = (e5) => {
      if ($ba9bc027ba236f10$var$isValidEvent(e5, ref) && state.onInteractOutside) {
        if (state.onInteractOutsideStart)
          state.onInteractOutsideStart(e5);
        state.isPointerDown = true;
      }
    };
    if (typeof PointerEvent !== "undefined") {
      let onPointerUp = (e5) => {
        if (state.isPointerDown && state.onInteractOutside && $ba9bc027ba236f10$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      document.addEventListener("pointerdown", onPointerDown, true);
      document.addEventListener("pointerup", onPointerUp, true);
      return () => {
        document.removeEventListener("pointerdown", onPointerDown, true);
        document.removeEventListener("pointerup", onPointerUp, true);
      };
    } else {
      let onMouseUp = (e5) => {
        if (state.ignoreEmulatedMouseEvents)
          state.ignoreEmulatedMouseEvents = false;
        else if (state.isPointerDown && state.onInteractOutside && $ba9bc027ba236f10$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
        }
      };
      let onTouchEnd = (e5) => {
        state.ignoreEmulatedMouseEvents = true;
        if (state.onInteractOutside && state.isPointerDown && $ba9bc027ba236f10$var$isValidEvent(e5, ref)) {
          state.isPointerDown = false;
          state.onInteractOutside(e5);
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
function $ba9bc027ba236f10$var$isValidEvent(event, ref) {
  if (event.button > 0)
    return false;
  if (event.target) {
    const ownerDocument = event.target.ownerDocument;
    if (!ownerDocument || !ownerDocument.documentElement.contains(event.target))
      return false;
  }
  return ref.current && !ref.current.contains(event.target);
}
var $a866ba1020241f41$exports = {};
$parcel$export10($a866ba1020241f41$exports, "useKeyboard", () => $a866ba1020241f41$export$8f71654801c2f7cd);
function $23f3ec5b42541cce$export$48d1ea6320830260(handler) {
  if (!handler)
    return;
  let shouldStopPropagation = true;
  return (e5) => {
    let event = {
      ...e5,
      preventDefault() {
        e5.preventDefault();
      },
      isDefaultPrevented() {
        return e5.isDefaultPrevented();
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
      e5.stopPropagation();
  };
}
function $a866ba1020241f41$export$8f71654801c2f7cd(props) {
  return {
    keyboardProps: props.isDisabled ? {} : {
      onKeyDown: $23f3ec5b42541cce$export$48d1ea6320830260(props.onKeyDown),
      onKeyUp: $23f3ec5b42541cce$export$48d1ea6320830260(props.onKeyUp)
    }
  };
}
var $75f78fec52a57cf7$exports = {};
$parcel$export10($75f78fec52a57cf7$exports, "useMove", () => $75f78fec52a57cf7$export$36da96379f79f245);
function $75f78fec52a57cf7$export$36da96379f79f245(props) {
  let { onMoveStart, onMove, onMoveEnd } = props;
  let state = (0, import_react16.useRef)({
    didMove: false,
    lastPosition: null,
    id: null
  });
  let { addGlobalListener, removeGlobalListener } = $042598a43c3fee40$export$4eaf04e54aa8eed6();
  let moveProps1 = (0, import_react16.useMemo)(() => {
    let moveProps = {};
    let start = () => {
      $8714dea79b55b9da$export$16a4697467175487();
      state.current.didMove = false;
    };
    let move = (originalEvent, pointerType, deltaX, deltaY) => {
      if (deltaX === 0 && deltaY === 0)
        return;
      if (!state.current.didMove) {
        state.current.didMove = true;
        onMoveStart?.({
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
      $8714dea79b55b9da$export$b0d6fa1ab32e3295();
      if (state.current.didMove)
        onMoveEnd?.({
          type: "moveend",
          pointerType,
          shiftKey: originalEvent.shiftKey,
          metaKey: originalEvent.metaKey,
          ctrlKey: originalEvent.ctrlKey,
          altKey: originalEvent.altKey
        });
    };
    if (typeof PointerEvent === "undefined") {
      let onMouseMove = (e5) => {
        if (e5.button === 0) {
          move(e5, "mouse", e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onMouseUp = (e5) => {
        if (e5.button === 0) {
          end(e5, "mouse");
          removeGlobalListener(window, "mousemove", onMouseMove, false);
          removeGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      moveProps.onMouseDown = (e5) => {
        if (e5.button === 0) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          addGlobalListener(window, "mousemove", onMouseMove, false);
          addGlobalListener(window, "mouseup", onMouseUp, false);
        }
      };
      let onTouchMove = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          let { pageX, pageY } = e5.changedTouches[touch];
          move(e5, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX,
            pageY
          };
        }
      };
      let onTouchEnd = (e5) => {
        let touch = [
          ...e5.changedTouches
        ].findIndex(({ identifier }) => identifier === state.current.id);
        if (touch >= 0) {
          end(e5, "touch");
          state.current.id = null;
          removeGlobalListener(window, "touchmove", onTouchMove);
          removeGlobalListener(window, "touchend", onTouchEnd);
          removeGlobalListener(window, "touchcancel", onTouchEnd);
        }
      };
      moveProps.onTouchStart = (e5) => {
        if (e5.changedTouches.length === 0 || state.current.id != null)
          return;
        let { pageX, pageY, identifier } = e5.changedTouches[0];
        start();
        e5.stopPropagation();
        e5.preventDefault();
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
      let onPointerMove = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          move(e5, pointerType, e5.pageX - state.current.lastPosition.pageX, e5.pageY - state.current.lastPosition.pageY);
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
        }
      };
      let onPointerUp = (e5) => {
        if (e5.pointerId === state.current.id) {
          let pointerType = e5.pointerType || "mouse";
          end(e5, pointerType);
          state.current.id = null;
          removeGlobalListener(window, "pointermove", onPointerMove, false);
          removeGlobalListener(window, "pointerup", onPointerUp, false);
          removeGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
      moveProps.onPointerDown = (e5) => {
        if (e5.button === 0 && state.current.id == null) {
          start();
          e5.stopPropagation();
          e5.preventDefault();
          state.current.lastPosition = {
            pageX: e5.pageX,
            pageY: e5.pageY
          };
          state.current.id = e5.pointerId;
          addGlobalListener(window, "pointermove", onPointerMove, false);
          addGlobalListener(window, "pointerup", onPointerUp, false);
          addGlobalListener(window, "pointercancel", onPointerUp, false);
        }
      };
    }
    let triggerKeyboardMove = (e5, deltaX, deltaY) => {
      start();
      move(e5, "keyboard", deltaX, deltaY);
      end(e5, "keyboard");
    };
    moveProps.onKeyDown = (e5) => {
      switch (e5.key) {
        case "Left":
        case "ArrowLeft":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, -1, 0);
          break;
        case "Right":
        case "ArrowRight":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 1, 0);
          break;
        case "Up":
        case "ArrowUp":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, -1);
          break;
        case "Down":
        case "ArrowDown":
          e5.preventDefault();
          e5.stopPropagation();
          triggerKeyboardMove(e5, 0, 1);
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
var $d19e70b846cd84a0$exports = {};
$parcel$export10($d19e70b846cd84a0$exports, "useScrollWheel", () => $d19e70b846cd84a0$export$2123ff2b87c81ca);
function $d19e70b846cd84a0$export$2123ff2b87c81ca(props, ref) {
  let { onScroll, isDisabled } = props;
  let onScrollHandler = (0, import_react16.useCallback)((e5) => {
    if (e5.ctrlKey)
      return;
    e5.preventDefault();
    e5.stopPropagation();
    if (onScroll)
      onScroll({
        deltaX: e5.deltaX,
        deltaY: e5.deltaY
      });
  }, [
    onScroll
  ]);
  $6f85328eaea47571$export$90fc3a17d93f704c(ref, "wheel", isDisabled ? null : onScrollHandler);
}
var $ea9746f03755d5ba$exports = {};
$parcel$export10($ea9746f03755d5ba$exports, "useLongPress", () => $ea9746f03755d5ba$export$c24ed0104d07eab9);
var $ea9746f03755d5ba$var$DEFAULT_THRESHOLD = 500;
function $ea9746f03755d5ba$export$c24ed0104d07eab9(props) {
  let { isDisabled, onLongPressStart, onLongPressEnd, onLongPress, threshold = $ea9746f03755d5ba$var$DEFAULT_THRESHOLD, accessibilityDescription } = props;
  const timeRef = (0, import_react16.useRef)(null);
  let { addGlobalListener, removeGlobalListener } = $042598a43c3fee40$export$4eaf04e54aa8eed6();
  let { pressProps } = $bb70d401e0bbab2b$export$45712eceda6fad21({
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
          let onContextMenu = (e5) => {
            e5.preventDefault();
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
    onPressEnd(e5) {
      if (timeRef.current)
        clearTimeout(timeRef.current);
      if (onLongPressEnd && (e5.pointerType === "mouse" || e5.pointerType === "touch"))
        onLongPressEnd({
          ...e5,
          type: "longpressend"
        });
    }
  });
  let descriptionProps = $5475261706737633$export$f8aeda7b10753fa1(onLongPress && !isDisabled ? accessibilityDescription : null);
  return {
    longPressProps: $699afe8e9e0f66de$export$9d1611c77c2fe928(pressProps, descriptionProps)
  };
}

// node_modules/@nextui-org/react/esm/button/utils.js
init_react();
var filterPropsWithGroup = (e5, o6) => {
  var r5, t8, n2, l3, d3, a4, i3, s4, g2, u2, b2;
  return o6.isButtonGroup ? { ...e5, auto: true, shadow: false, bordered: (r5 = o6.bordered) != null ? r5 : e5.bordered, borderWeight: (t8 = o6.borderWeight) != null ? t8 : e5.borderWeight, ghost: (n2 = o6.ghost) != null ? n2 : e5.ghost, ripple: (l3 = o6.ripple) != null ? l3 : e5.ripple, flat: (d3 = o6.flat) != null ? d3 : e5.flat, animated: (a4 = o6.animated) != null ? a4 : e5.animated, rounded: (i3 = o6.rounded) != null ? i3 : e5.rounded, light: (s4 = o6.light) != null ? s4 : e5.light, size: (g2 = o6.size) != null ? g2 : e5.size, color: (u2 = o6.color) != null ? u2 : e5.color, disabled: (b2 = o6.disabled) != null ? b2 : e5.disabled } : e5;
};
var getCssColors = (e5) => {
  if (!e5.disabled)
    return e5.auto && e5.color === "gradient" && (e5.bordered || e5.ghost) ? { px: "$$buttonBorderWeight", py: "$$buttonBorderWeight" } : {};
  const o6 = { bg: "$accents2", color: "$accents4", transform: "none", boxShadow: "none", pe: "none" };
  return e5.bordered || e5.flat || e5.ghost || e5.light ? e5.color === "gradient" && (e5.bordered || e5.ghost) ? { color: "$accents4", backgroundImage: "linear-gradient($background, $background), linear-gradient($accents2, $accents2)", transform: "none", boxShadow: "none", pe: "none", pl: "$$buttonBorderWeight", pr: "$$buttonBorderWeight" } : e5.bordered || e5.ghost || e5.light ? { ...o6, bg: "transparent", borderColor: "$accents2" } : e5.flat ? { ...o6, bg: "$accents1" } : {} : o6;
};

// node_modules/@nextui-org/react/esm/button/button-group-context.js
init_react();
var import_react17 = __toModule(require_react());
var o3 = { isButtonGroup: false, disabled: false };
var ButtonGroupContext = import_react17.default.createContext(o3);
var useButtonGroupContext = () => import_react17.default.useContext(ButtonGroupContext);

// node_modules/@nextui-org/react/esm/button/button-icon.js
init_react();
var import_react18 = __toModule(require_react());
var import_jsx_runtime2 = __toModule(require_jsx_runtime());
var StyledButtonIcon = styled("span", { dflex: "center", position: "absolute", left: "$$buttonPadding", right: "auto", top: "50%", transform: "translateY(-50%)", color: "inherit", zIndex: "$1", "& svg": { background: "transparent" }, variants: { isAuto: { true: { position: "relative", transform: "none", top: "0%" } }, isRight: { true: { right: "$$buttonPadding", left: "auto" } }, isSingle: { true: { position: "static", transform: "none" } }, isGradientButtonBorder: { true: {} } }, compoundVariants: [{ isAuto: true, isRight: true, isSingle: false, css: { order: 2, ml: "$$buttonPadding", right: "0%", left: "0%" } }, { isAuto: true, isRight: false, isSingle: false, css: { order: 0, mr: "$$buttonPadding", right: "0%", left: "0%" } }, { isSingle: true, isRight: false, css: { ml: 0 } }, { isSingle: true, isRight: true, css: { mr: 0 } }, { isSingle: true, isRight: false, isGradientButtonBorder: true, css: { mr: "$$buttonPadding" } }] });
var e4 = ({ children: t8, className: i3, ...n2 }) => (0, import_jsx_runtime2.jsx)(StyledButtonIcon, { className: clsx_default("nextui-button-icon", { "nextui-button-icon-right": n2.isRight, "nextui-button-icon-single": n2.isSingle }, i3), ...n2, children: t8 });
e4.toString = () => ".nextui-button-icon";
var r3 = import_react18.default.memo(e4);
var button_icon_default = with_defaults_default(r3, { className: "" });

// node_modules/@nextui-org/react/esm/button/button.styles.js
init_react();
var StyledButton = styled("button", { $$buttonBorderRadius: "$radii$md", $$buttonHoverOpacity: 0.85, $$buttonPressedScale: 0.97, dflex: "center", appearance: "none", boxSizing: "border-box", fontWeight: "$medium", us: "none", lineHeight: "$sm", ta: "center", whiteSpace: "nowrap", transition: "$button", position: "relative", overflow: "hidden", border: "none", cursor: "pointer", pe: "auto", p: 0, br: "$$buttonBorderRadius", "@motion": { transition: "none" }, ".nextui-button-text": { dflex: "center", zIndex: "$2", "p, pre, div": { margin: 0 } }, [`& ${StyledDrip}`]: { zIndex: "$1", ".nextui-drip-filler": { opacity: 0.25, fill: "$accents2" } }, variants: { bordered: { true: { bg: "transparent", borderStyle: "solid", color: "$text" } }, ghost: { true: { "&:hover": { color: "$white" } } }, color: { default: { bg: "$primary", color: "$white" }, primary: { bg: "$primary", color: "$white" }, secondary: { bg: "$secondary", color: "$white" }, success: { bg: "$success", color: "$white" }, warning: { bg: "$warning", color: "$white" }, error: { bg: "$error", color: "$white" }, gradient: { bg: "$gradient", color: "$white" } }, size: { xs: { $$buttonPadding: "$space$3", $$buttonBorderRadius: "$radii$xs", px: "$3", height: "$10", lh: "$space$10", width: "auto", minWidth: "$20", fontSize: "$tiny" }, sm: { $$buttonPadding: "$space$5", $$buttonBorderRadius: "$radii$sm", px: "$5", height: "$12", lh: "$space$14", width: "auto", minWidth: "$36", fontSize: "$xs" }, md: { $$buttonPadding: "$space$7", $$buttonBorderRadius: "$radii$md", px: "$7", height: "$14", lh: "$space$14", width: "auto", minWidth: "$48", fontSize: "$xs" }, lg: { $$buttonPadding: "$space$9", $$buttonBorderRadius: "$radii$base", px: "$9", height: "$15", lh: "$space$15", width: "auto", minWidth: "$60", fontSize: "$base" }, xl: { $$buttonPadding: "$space$10", $$buttonBorderRadius: "$radii$xl", px: "$10", height: "$17", lh: "$space$17", width: "auto", minWidth: "$72", fontSize: "$sm" } }, borderWeight: { light: { bw: "$light", $$buttonBorderWeight: "$borderWeights$light" }, normal: { bw: "$normal", $$buttonBorderWeight: "$borderWeights$normal" }, bold: { bw: "$bold", $$buttonBorderWeight: "$borderWeights$bold" }, extrabold: { bw: "$extrabold", $$buttonBorderWeight: "$borderWeights$extrabold" }, black: { bw: "$black", $$buttonBorderWeight: "$borderWeights$black" } }, flat: { true: { color: "$text" } }, light: { true: { bg: "transparent", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.8, fill: "$accents2" } } } }, shadow: { true: { bs: "$sm" } }, animated: { false: { transition: "none" } }, auto: { true: { width: "auto", minWidth: "min-content" } }, rounded: { true: { $$buttonBorderRadius: "$radii$pill" } }, isPressed: { true: {} }, isHovered: { true: { opacity: "$$buttonHoverOpacity" } } }, compoundVariants: [{ isPressed: true, animated: true, css: { transform: "scale($$buttonPressedScale)" } }, { auto: true, size: "xs", css: { px: "$5", minWidth: "min-content" } }, { auto: true, size: "sm", css: { px: "$8", minWidth: "min-content" } }, { auto: true, size: "md", css: { px: "$9", minWidth: "min-content" } }, { auto: true, size: "lg", css: { px: "$10", minWidth: "min-content" } }, { auto: true, size: "xl", css: { px: "$11", minWidth: "min-content" } }, { shadow: true, color: "default", css: { normalShadow: "$primaryShadow" } }, { shadow: true, color: "primary", css: { normalShadow: "$primaryShadow" } }, { shadow: true, color: "secondary", css: { normalShadow: "$secondaryShadow" } }, { shadow: true, color: "warning", css: { normalShadow: "$warningShadow" } }, { shadow: true, color: "success", css: { normalShadow: "$successShadow" } }, { shadow: true, color: "error", css: { normalShadow: "$errorShadow" } }, { shadow: true, color: "gradient", css: { normalShadow: "$primaryShadow" } }, { light: true, color: "default", css: { bg: "transparent", color: "$text" } }, { light: true, color: "primary", css: { bg: "transparent", color: "$primary" } }, { light: true, color: "secondary", css: { bg: "transparent", color: "$secondary" } }, { light: true, color: "warning", css: { bg: "transparent", color: "$warning" } }, { light: true, color: "success", css: { bg: "transparent", color: "$success" } }, { light: true, color: "error", css: { bg: "transparent", color: "$error" } }, { bordered: true, color: "default", css: { bg: "transparent", borderColor: "$primary", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$primary" } } } }, { bordered: true, color: "primary", css: { bg: "transparent", borderColor: "$primary", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$primary" } } } }, { bordered: true, color: "secondary", css: { bg: "transparent", borderColor: "$secondary", color: "$secondary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$secondary" } } } }, { bordered: true, color: "success", css: { bg: "transparent", borderColor: "$success", color: "$success", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$success" } } } }, { bordered: true, color: "warning", css: { bg: "transparent", borderColor: "$warning", color: "$warning", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$warning" } } } }, { bordered: true, color: "error", css: { bg: "transparent", borderColor: "$error", color: "$error", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$error" } } } }, { bordered: true, color: "gradient", css: { bg: "transparent", color: "$text", padding: "$$buttonBorderWeight", bgClip: "content-box, border-box", borderColor: "$primary", backgroundImage: "linear-gradient($background, $background), $gradient", border: "none", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { fill: "$secondary" } } } }, { ghost: true, isHovered: true, color: "default", css: { bg: "$primary" } }, { ghost: true, isHovered: true, color: "primary", css: { bg: "$primary" } }, { ghost: true, isHovered: true, color: "secondary", css: { bg: "$secondary" } }, { ghost: true, isHovered: true, color: "success", css: { bg: "$success" } }, { ghost: true, isHovered: true, color: "warning", css: { bg: "$warning" } }, { ghost: true, isHovered: true, color: "error", css: { bg: "$error" } }, { ghost: true, color: "gradient", isHovered: true, css: { bg: "$gradient" } }, { flat: true, color: "default", css: { bg: "$primaryLight", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$primary" } } } }, { flat: true, color: "primary", css: { bg: "$primaryLight", color: "$primary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$primary" } } } }, { flat: true, color: "secondary", css: { bg: "$secondaryLight", color: "$secondary", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$secondary" } } } }, { flat: true, color: "success", css: { bg: "$successLight", color: "$success", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$success" } } } }, { flat: true, color: "warning", css: { bg: "$warningLight", color: "$warning", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$warning" } } } }, { flat: true, color: "error", css: { bg: "$errorLight", color: "$error", [`& ${StyledDrip}`]: { ".nextui-drip-filler": { opacity: 0.4, fill: "$error" } } } }, { auto: true, color: "gradient", bordered: true, css: { ".nextui-button-text": { px: "$$buttonPadding" }, ".nextui-button-icon": { ml: "$$buttonPadding" }, ".nextui-button-icon-right": { mr: "$$buttonPadding" }, ".nextui-button-text-left": { pl: 0 }, ".nextui-button-text-right": { pr: 0 } } }, { rounded: true, size: "xs", css: { br: "$pill" } }, { rounded: true, size: "sm", css: { br: "$pill" } }, { rounded: true, size: "md", css: { br: "$pill" } }, { rounded: true, size: "lg", css: { br: "$pill" } }, { rounded: true, size: "xl", css: { br: "$pill" } }], defaultVariants: { color: "default", borderWeight: "normal", animated: true, size: "md" } }, cssFocusVisible);
var button_styles_default = StyledButton;

// node_modules/@nextui-org/react/esm/button/button.js
var import_jsx_runtime3 = __toModule(require_jsx_runtime());
var import_jsx_runtime4 = __toModule(require_jsx_runtime());
var import_jsx_runtime5 = __toModule(require_jsx_runtime());
var N2 = import_react19.default.forwardRef(({ onClick: b2, onPress: N3, as: P2, css: B3, ...F2 }, j3) => {
  const w3 = useButtonGroupContext(), k3 = filterPropsWithGroup(F2, w3), C2 = getCssColors(k3), { flat: R2, children: S3, disabled: T2, animated: A3, light: D3, ripple: G3, bordered: H2, auto: U3, borderWeight: V2, icon: W3, iconRight: I3, ghost: $2, autoFocus: q3, className: z3, ...E3 } = k3, J3 = (t8) => {
    A3 && G3 && K.current && Z3(t8);
  }, K = useDOMRef(j3), { buttonProps: L2, isPressed: M3 } = $701a24aa0da5b062$export$ea18c227d4417cc3({ ...F2, isDisabled: T2, elementType: P2, onPress: (t8) => {
    t8.pointerType !== "keyboard" && t8.pointerType !== "virtual" || J3(t8), N3 == null || N3(t8);
  } }, K), { hoverProps: O2, isHovered: Q2 } = $52a70f66afabebbb$export$ae780daf29e6d456({ isDisabled: T2 }), { isFocusVisible: X, focusProps: Y3 } = $f7dceffc5ad7768b$export$4e328f61c538687f({ autoFocus: q3 }), { onClick: Z3, ..._2 } = use_drip_default2(false, K);
  L2.onClick = (t8) => {
    J3(t8), b2 == null || b2(t8);
  }, __DEV__ && k3.color === "gradient" && (R2 || D3) && use_warning_default2("Using the gradient color on flat and light buttons will have no effect.");
  const tt2 = W3 || I3, ot2 = Boolean(I3), rt2 = (0, import_react19.useMemo)(() => M3 ? "pressed" : Q2 ? "hovered" : T2 ? "disabled" : "ready", [T2, Q2, M3]);
  return (0, import_jsx_runtime5.jsxs)(button_styles_default, { as: P2, ref: K, borderWeight: V2, auto: U3, flat: R2, light: D3, ghost: $2, bordered: H2 || $2, "data-state": rt2, animated: A3, isPressed: M3, isHovered: Q2, isFocusVisible: X && !T2, className: clsx_default("nextui-button", `nextui-button--${rt2}`, z3), css: { ...B3, ...C2 }, ...$699afe8e9e0f66de$export$9d1611c77c2fe928(L2, Y3, O2, E3), children: [import_react19.default.Children.count(S3) === 0 ? (0, import_jsx_runtime3.jsx)(button_icon_default, { isSingle: true, isAuto: U3, isRight: ot2, isGradientButtonBorder: E3.color === "gradient" && (H2 || $2), children: tt2 }) : tt2 ? (0, import_jsx_runtime5.jsxs)(import_jsx_runtime4.Fragment, { children: [(0, import_jsx_runtime3.jsx)(button_icon_default, { isSingle: false, isAuto: U3, isRight: ot2, isGradientButtonBorder: E3.color === "gradient" && (H2 || $2), children: tt2 }), (0, import_jsx_runtime3.jsx)("div", { className: clsx_default("nextui-button-text", { "nextui-button-text-right": ot2, "nextui-button-text-left": !ot2 }), children: S3 })] }) : (0, import_jsx_runtime3.jsx)("span", { className: "nextui-button-text", children: S3 }), (0, import_jsx_runtime3.jsx)(drip_default, { color: "white", ..._2 })] });
});
__DEV__ && (N2.displayName = "NextUI.Button"), N2.toString = () => ".nextui-button";
var button_default = with_defaults_default(N2, { ghost: false, bordered: false, ripple: true, animated: true, disabled: false, autoFocus: false, auto: false, className: "", type: "button" });

// node_modules/@nextui-org/react/esm/button/button-group.js
init_react();
var import_react20 = __toModule(require_react());

// node_modules/@nextui-org/react/esm/button/button-group.styles.js
init_react();
var StyledButtonGroup = styled("div", { display: "inline-flex", margin: "$3", backgroundColor: "transparent", height: "min-content", [`& ${button_styles_default}`]: { ".nextui-button-text": { top: 0 } }, variants: { vertical: { true: { fd: "column", [`& ${button_styles_default}`]: { "&:not(:first-child)": { btlr: 0, btrr: 0 }, "&:not(:last-child)": { bblr: 0, bbrr: 0 } } }, false: { fd: "row", [`& ${button_styles_default}`]: { "&:not(:first-child)": { btlr: 0, bblr: 0 }, "&:not(:last-child)": { btrr: 0, bbrr: 0 } } } }, size: { xs: { br: "$xs" }, sm: { br: "$sm" }, md: { br: "$md" }, lg: { br: "$base" }, xl: { br: "$xl" } }, rounded: { true: { br: "$pill" } }, bordered: { true: { bg: "transparent" } }, gradient: { true: { pl: 0 } } }, defaultVariants: { vertical: false }, compoundVariants: [{ bordered: true, vertical: true, css: { [`& ${button_styles_default}`]: { "&:not(:last-child)": { borderBottom: "none", paddingBottom: "0" } } } }, { bordered: true, vertical: false, css: { [`& ${button_styles_default}`]: { "&:not(:first-child)": { borderLeft: "none" } } } }, { bordered: true, vertical: false, gradient: true, css: { [`& ${button_styles_default}`]: { "&:not(:last-child)&:not(:first-child)": { pl: 0 }, "&:last-child": { pl: 0 } } } }] });
var button_group_styles_default = StyledButtonGroup;

// node_modules/@nextui-org/react/esm/button/button-group.js
var import_jsx_runtime6 = __toModule(require_jsx_runtime());
var a3 = (o6) => {
  const { disabled: t8, size: a4, color: l3, bordered: n2, ghost: s4, light: u2, flat: m3, shadow: p2, auto: c4, animated: g2, rounded: h2, ripple: b2, borderWeight: f2, children: x4, ...z3 } = o6, w3 = (0, import_react20.useMemo)(() => ({ disabled: t8, size: a4, color: l3, bordered: n2, light: u2, ghost: s4, flat: m3, shadow: p2, auto: c4, borderWeight: f2, animated: g2, rounded: h2, ripple: b2, isButtonGroup: true }), [t8, g2, a4, b2, l3, n2, u2, s4, m3, f2]);
  return (0, import_jsx_runtime6.jsx)(ButtonGroupContext.Provider, { value: w3, children: (0, import_jsx_runtime6.jsx)(button_group_styles_default, { size: a4, bordered: n2 || s4, gradient: o6.color === "gradient", ...z3, children: x4 }) });
};
a3.toString = () => ".nextui-button-group";
var l2 = import_react20.default.memo(a3);
var button_group_default = with_defaults_default(l2, { borderWeight: "normal", size: "md", color: "default" });

// node_modules/@nextui-org/react/esm/button/index.js
button_default.Group = button_group_default;
var button_default2 = button_default;

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var React5 = __toModule(require_react());

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
var React12 = __toModule(require_react());

// app/sections/AboutMe/AboutMe.css
var AboutMe_default = "/build/_assets/AboutMe-3G7ZRCR7.css";

// app/sections/AboutMe/FunFacts.tsx
init_react();
var React6 = __toModule(require_react());
var FunFacts = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "funfacts-animate" : "";
  const [hover, setHover] = React6.useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return /* @__PURE__ */ React6.createElement("div", {
    className: `FunFacts__Wrapper ${className}`,
    ref: setRef
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "FunFacts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor"
  }, "So unterst\xFCtzen wir unsere Kunden")), /* @__PURE__ */ React6.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "cols flex flex-wrap justify-between"
  }, facts.map((fact) => /* @__PURE__ */ React6.createElement("div", {
    key: fact.index,
    className: `col ${hover ? "hover" : ""} justify-between items-center cursor-auto my-5`,
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onTouchStart: handleHover
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "front flex justify-center items-center bg-cover text-center bg-center h-auto after:absolute after:top-0 after:left-0 after:w-full after:rounded-lg after:h-full after:block rounded-lg after:opacity-50 z-10 object-cover",
    style: {
      backgroundImage: `url(${fact.background})`
    }
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "inner w-full box-border outline outline-1 outline-transparent px-4"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "text-white relative after:absolute after:block after:left-0 after:right-0 text-4xl"
  }, fact.index), /* @__PURE__ */ React6.createElement("span", {
    className: "text-white text-lg"
  }, fact.title))), /* @__PURE__ */ React6.createElement("div", {
    className: "back absolute top-0 flex left-0 w-full justify-center items-center bg-cover text-center bg-center h-auto rounded-lg"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "inner w-full box-border outline outline-1 outline-transparent opacity-90 px-4"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "p text-subText opacity-100 text-lg"
  }, fact.description)))))))));
};
var FunFacts_default = FunFacts;

// app/sections/AboutMe/MyStory.tsx
init_react();
var React7 = __toModule(require_react());
var MyStory = ({}) => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "my-story-wrapper flex flex-col items-baseline w-full text-textSmColor"
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "my-story-title reveal-text text-textLgColor leading-none margin-top:50 relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
  }, "\xDCber Uns"), /* @__PURE__ */ React7.createElement("div", {
    className: "fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center"
  }, /* @__PURE__ */ React7.createElement("p", {
    className: "my-4 text-xl xs:mb-10 sm:w-4/5 leading-20 text-text-SmColor"
  }, "Seit Jahren betreiben und entwickeln wir einzigartige Shopify Stores. Durch Design \xFCberzeugend und durch Analytics best\xE4tigt: E-Commerce Development f\xFCr h\xF6chste Anspr\xFCche. "), /* @__PURE__ */ React7.createElement(Globe, null)), /* @__PURE__ */ React7.createElement("div", {
    className: "spacer-div mb-15 sm:mb-15"
  }), /* @__PURE__ */ React7.createElement(MyselfCard, null), /* @__PURE__ */ React7.createElement("div", {
    className: "spacer-div mb-10 sm:mb-5"
  }), /* @__PURE__ */ React7.createElement(MyselfCard2, null));
};
var MyStory_default = MyStory;
var MyselfCard = () => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React7.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Neuen Shop entwickeln"), /* @__PURE__ */ React7.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Wir analysieren Ihre Bed\xFCrfnisse und erstellen in enger Absprache Ihren einzigarten Online Store. Auch bei der Migration von anderen Plattformen zu Shopify helfen wir unseren Kunden."), /* @__PURE__ */ React7.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React7.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React7.createElement("img", {
    src: "/images/HelloBelloLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React7.createElement(button_default2, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Projekt Ansehen"))));
};
var MyselfCard2 = () => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React7.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Bestehenden Store optimieren"), /* @__PURE__ */ React7.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Shopify Development liegt in unserer Natur. Sowohl komplexe Automation von Bestellprozessen als auch die Erstellung von Private Apps: Devato ist Ihr Ansprechpartner."), /* @__PURE__ */ React7.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React7.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React7.createElement("img", {
    src: "/images/UnimalsLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React7.createElement(button_default2, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Zur Case Study"))));
};

// app/sections/AboutMe/Titles.tsx
init_react();
var React8 = __toModule(require_react());
var Titles = ({}) => {
  return /* @__PURE__ */ React8.createElement("div", {
    className: "title-content text-aboutMe-aboutMeText"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "title-content__container inline-flex overflow-hidden font-semibold items-center"
  }, /* @__PURE__ */ React8.createElement("h1", {
    className: "hidden"
  }, "Wir sind Software Engineers, Marketing Experten, Designer und Process Engineers."), /* @__PURE__ */ React8.createElement("p", {
    className: "title-content__container__text m-0  inline-flex"
  }, "Wir sind"), /* @__PURE__ */ React8.createElement("span", {
    className: "blinker"
  }, "["), /* @__PURE__ */ React8.createElement("ul", {
    className: "title-content__container__list text-center list-none"
  }, /* @__PURE__ */ React8.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Software Developer"), /* @__PURE__ */ React8.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shopify Experten"), /* @__PURE__ */ React8.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shop Designer"), /* @__PURE__ */ React8.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "E-Commerce Spezialisten")), /* @__PURE__ */ React8.createElement("span", {
    className: "blinker"
  }, "]")));
};
var Titles_default = Titles;

// app/sections/AboutMe/Hi.tsx
init_react();
var React9 = __toModule(require_react());
var import_use_typewriter_hook = __toModule(require_use_typewriter_hook());
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
  return /* @__PURE__ */ React9.createElement("span", {
    className: "font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-aboutMe-aboutMeText",
    "aria-live": "polite",
    "aria-label": "Wir sind Devato"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: ""
  }, "Hi, wir sind"), /* @__PURE__ */ React9.createElement("span", null, " ")), /* @__PURE__ */ React9.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }), /* @__PURE__ */ React9.createElement("span", {
    className: "inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: `${wrapperClassName}`
  }, fragments)));
};
var Hi_default = Hi;
var splitTargetText = (str, startIndex, endIndex) => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement("span", {
    className: "inline-block"
  }, str.slice(0, startIndex)), /* @__PURE__ */ React9.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React9.createElement("span", {
    className: "custom-typewriter-text",
    style: customStyle
  }, str.slice(startIndex, endIndex))), /* @__PURE__ */ React9.createElement("span", {
    className: "inline-block"
  }, str.slice(endIndex, str.length)));
};

// app/sections/AboutMe/Facts.tsx
init_react();
var React10 = __toModule(require_react());

// node_modules/@headlessui/react/dist/headlessui.esm.js
init_react();
var import_react23 = __toModule(require_react());
var import_react24 = __toModule(require_react());
var import_react25 = __toModule(require_react());
var import_react26 = __toModule(require_react());
var import_react27 = __toModule(require_react());
var import_react28 = __toModule(require_react());
var import_react29 = __toModule(require_react());
var import_react30 = __toModule(require_react());
var import_react31 = __toModule(require_react());
var import_react32 = __toModule(require_react());
var import_react33 = __toModule(require_react());
var import_react34 = __toModule(require_react());
var import_react35 = __toModule(require_react());
var import_react36 = __toModule(require_react());
var import_react37 = __toModule(require_react());
var import_react38 = __toModule(require_react());
var import_react39 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_react40 = __toModule(require_react());
var import_react41 = __toModule(require_react());
var import_react42 = __toModule(require_react());
var import_react43 = __toModule(require_react());
var import_react44 = __toModule(require_react());
var import_react45 = __toModule(require_react());
var import_react46 = __toModule(require_react());
var import_react47 = __toModule(require_react());
var import_react48 = __toModule(require_react());
var import_react49 = __toModule(require_react());
var import_react50 = __toModule(require_react());
var import_react51 = __toModule(require_react());
var import_react52 = __toModule(require_react());
var import_react53 = __toModule(require_react());
var import_react54 = __toModule(require_react());
function k2() {
  let e5 = [], t8 = [], r5 = { enqueue(o6) {
    t8.push(o6);
  }, requestAnimationFrame(...o6) {
    let n2 = requestAnimationFrame(...o6);
    r5.add(() => cancelAnimationFrame(n2));
  }, nextFrame(...o6) {
    r5.requestAnimationFrame(() => {
      r5.requestAnimationFrame(...o6);
    });
  }, setTimeout(...o6) {
    let n2 = setTimeout(...o6);
    r5.add(() => clearTimeout(n2));
  }, add(o6) {
    e5.push(o6);
  }, dispose() {
    for (let o6 of e5.splice(0))
      o6();
  }, async workQueue() {
    for (let o6 of t8.splice(0))
      await o6();
  } };
  return r5;
}
function Q() {
  let [e5] = (0, import_react24.useState)(k2);
  return (0, import_react24.useEffect)(() => () => e5.dispose(), [e5]), e5;
}
var x3 = typeof window != "undefined" ? import_react26.useLayoutEffect : import_react26.useEffect;
var yt = { serverHandoffComplete: false };
function q2() {
  let [e5, t8] = (0, import_react27.useState)(yt.serverHandoffComplete);
  return (0, import_react27.useEffect)(() => {
    e5 !== true && t8(true);
  }, [e5]), (0, import_react27.useEffect)(() => {
    yt.serverHandoffComplete === false && (yt.serverHandoffComplete = true);
  }, []), e5;
}
var or = 0;
function to() {
  return ++or;
}
function A2() {
  let e5 = q2(), [t8, r5] = (0, import_react25.useState)(e5 ? to : null);
  return x3(() => {
    t8 === null && r5(to());
  }, [t8]), t8 != null ? "" + t8 : void 0;
}
function ke(e5) {
  let t8 = (0, import_react29.useRef)(e5);
  return (0, import_react29.useEffect)(() => {
    t8.current = e5;
  }, [e5]), t8;
}
function ee(e5, t8) {
  let [r5, o6] = (0, import_react28.useState)(e5), n2 = ke(e5);
  return x3(() => o6(n2.current), [n2, o6, ...t8]), r5;
}
function I2(...e5) {
  let t8 = (0, import_react30.useRef)(e5);
  return (0, import_react30.useEffect)(() => {
    t8.current = e5;
  }, [e5]), (0, import_react30.useCallback)((r5) => {
    for (let o6 of t8.current)
      o6 != null && (typeof o6 == "function" ? o6(r5) : o6.current = r5);
  }, [t8]);
}
function S2(e5, t8, ...r5) {
  if (e5 in t8) {
    let n2 = t8[e5];
    return typeof n2 == "function" ? n2(...r5) : n2;
  }
  let o6 = new Error(`Tried to handle "${e5}" but there is no handler defined. Only defined handlers are: ${Object.keys(t8).map((n2) => `"${n2}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o6, S2), o6;
}
function E2({ props: e5, slot: t8, defaultTag: r5, features: o6, visible: n2 = true, name: i3 }) {
  if (n2)
    return _e(e5, t8, r5, i3);
  let a4 = o6 != null ? o6 : 0;
  if (a4 & 2) {
    let { static: l3 = false, ...s4 } = e5;
    if (l3)
      return _e(s4, t8, r5, i3);
  }
  if (a4 & 1) {
    let { unmount: l3 = true, ...s4 } = e5;
    return S2(l3 ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return _e({ ...s4, hidden: true, style: { display: "none" } }, t8, r5, i3);
    } });
  }
  return _e(e5, t8, r5, i3);
}
function _e(e5, t8 = {}, r5, o6) {
  let { as: n2 = r5, children: i3, refName: a4 = "ref", ...l3 } = gt(e5, ["unmount", "static"]), s4 = e5.ref !== void 0 ? { [a4]: e5.ref } : {}, u2 = typeof i3 == "function" ? i3(t8) : i3;
  if (l3.className && typeof l3.className == "function" && (l3.className = l3.className(t8)), n2 === import_react31.Fragment && Object.keys(l3).length > 0) {
    if (!(0, import_react31.isValidElement)(u2) || Array.isArray(u2) && u2.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${o6} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l3).map((c4) => `  - ${c4}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c4) => `  - ${c4}`).join(`
`)].join(`
`));
    return (0, import_react31.cloneElement)(u2, Object.assign({}, fr(mr(gt(l3, ["ref"])), u2.props, ["onClick"]), s4));
  }
  return (0, import_react31.createElement)(n2, Object.assign({}, gt(l3, ["ref"]), n2 !== import_react31.Fragment && s4), u2);
}
function fr(e5, t8, r5) {
  let o6 = Object.assign({}, e5);
  for (let n2 of r5)
    e5[n2] !== void 0 && t8[n2] !== void 0 && Object.assign(o6, { [n2](i3) {
      i3.defaultPrevented || e5[n2](i3), i3.defaultPrevented || t8[n2](i3);
    } });
  return o6;
}
function D2(e5) {
  var t8;
  return Object.assign((0, import_react31.forwardRef)(e5), { displayName: (t8 = e5.displayName) != null ? t8 : e5.name });
}
function mr(e5) {
  let t8 = Object.assign({}, e5);
  for (let r5 in t8)
    t8[r5] === void 0 && delete t8[r5];
  return t8;
}
function gt(e5, t8 = []) {
  let r5 = Object.assign({}, e5);
  for (let o6 of t8)
    o6 in r5 && delete r5[o6];
  return r5;
}
function br(e5) {
  throw new Error("Unexpected object: " + e5);
}
function ae(e5, t8) {
  let r5 = t8.resolveItems();
  if (r5.length <= 0)
    return null;
  let o6 = t8.resolveActiveIndex(), n2 = o6 != null ? o6 : -1, i3 = (() => {
    switch (e5.focus) {
      case 0:
        return r5.findIndex((a4) => !t8.resolveDisabled(a4));
      case 1: {
        let a4 = r5.slice().reverse().findIndex((l3, s4, u2) => n2 !== -1 && u2.length - s4 - 1 >= n2 ? false : !t8.resolveDisabled(l3));
        return a4 === -1 ? a4 : r5.length - 1 - a4;
      }
      case 2:
        return r5.findIndex((a4, l3) => l3 <= n2 ? false : !t8.resolveDisabled(a4));
      case 3: {
        let a4 = r5.slice().reverse().findIndex((l3) => !t8.resolveDisabled(l3));
        return a4 === -1 ? a4 : r5.length - 1 - a4;
      }
      case 4:
        return r5.findIndex((a4) => t8.resolveId(a4) === e5.id);
      case 5:
        return null;
      default:
        br(e5);
    }
  })();
  return i3 === -1 ? o6 : i3;
}
function G2(e5) {
  let t8 = e5.parentElement, r5 = null;
  for (; t8 && !(t8 instanceof HTMLFieldSetElement); )
    t8 instanceof HTMLLegendElement && (r5 = t8), t8 = t8.parentElement;
  let o6 = (t8 == null ? void 0 : t8.getAttribute("disabled")) === "";
  return o6 && Tr(r5) ? false : o6;
}
function Tr(e5) {
  if (!e5)
    return false;
  let t8 = e5.previousElementSibling;
  for (; t8 !== null; ) {
    if (t8 instanceof HTMLLegendElement)
      return false;
    t8 = t8.previousElementSibling;
  }
  return true;
}
function w2(e5, t8, r5) {
  let o6 = (0, import_react32.useRef)(t8);
  o6.current = t8, (0, import_react32.useEffect)(() => {
    function n2(i3) {
      o6.current.call(window, i3);
    }
    return window.addEventListener(e5, n2, r5), () => window.removeEventListener(e5, n2, r5);
  }, [e5, r5]);
}
var Pt = (0, import_react33.createContext)(null);
Pt.displayName = "OpenClosedContext";
function _() {
  return (0, import_react33.useContext)(Pt);
}
function W2({ value: e5, children: t8 }) {
  return import_react33.default.createElement(Pt.Provider, { value: e5 }, t8);
}
function ro(e5) {
  var r5;
  if (e5.type)
    return e5.type;
  let t8 = (r5 = e5.as) != null ? r5 : "button";
  if (typeof t8 == "string" && t8.toLowerCase() === "button")
    return "button";
}
function U2(e5, t8) {
  let [r5, o6] = (0, import_react34.useState)(() => ro(e5));
  return x3(() => {
    o6(ro(e5));
  }, [e5.type, e5.as]), x3(() => {
    r5 || !t8.current || t8.current instanceof HTMLButtonElement && !t8.current.hasAttribute("type") && o6("button");
  }, [r5, t8]), r5;
}
function se({ container: e5, accept: t8, walk: r5, enabled: o6 = true }) {
  let n2 = (0, import_react35.useRef)(t8), i3 = (0, import_react35.useRef)(r5);
  (0, import_react35.useEffect)(() => {
    n2.current = t8, i3.current = r5;
  }, [t8, r5]), x3(() => {
    if (!e5 || !o6)
      return;
    let a4 = n2.current, l3 = i3.current, s4 = Object.assign((c4) => a4(c4), { acceptNode: a4 }), u2 = document.createTreeWalker(e5, NodeFilter.SHOW_ELEMENT, s4, false);
    for (; u2.nextNode(); )
      l3(u2.currentNode);
  }, [e5, o6, n2, i3]);
}
var Ar = { [1](e5) {
  return e5.disabled || e5.comboboxState === 1 ? e5 : { ...e5, activeOptionIndex: null, comboboxState: 1 };
}, [0](e5) {
  return e5.disabled || e5.comboboxState === 0 ? e5 : { ...e5, comboboxState: 0 };
}, [2](e5, t8) {
  return e5.disabled === t8.disabled ? e5 : { ...e5, disabled: t8.disabled };
}, [3](e5, t8) {
  if (e5.disabled || e5.optionsRef.current && !e5.optionsPropsRef.current.static && e5.comboboxState === 1)
    return e5;
  let r5 = ae(t8, { resolveItems: () => e5.options, resolveActiveIndex: () => e5.activeOptionIndex, resolveId: (o6) => o6.id, resolveDisabled: (o6) => o6.dataRef.current.disabled });
  return e5.activeOptionIndex === r5 ? e5 : { ...e5, activeOptionIndex: r5 };
}, [4]: (e5, t8) => {
  var i3;
  let r5 = e5.activeOptionIndex !== null ? e5.options[e5.activeOptionIndex] : null, o6 = Array.from((i3 = e5.optionsRef.current) == null ? void 0 : i3.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a4, l3, s4) => Object.assign(a4, { [l3.id]: s4 }), {}), n2 = [...e5.options, { id: t8.id, dataRef: t8.dataRef }].sort((a4, l3) => o6[a4.id] - o6[l3.id]);
  return { ...e5, options: n2, activeOptionIndex: (() => r5 === null ? null : n2.indexOf(r5))() };
}, [5]: (e5, t8) => {
  let r5 = e5.options.slice(), o6 = e5.activeOptionIndex !== null ? r5[e5.activeOptionIndex] : null, n2 = r5.findIndex((i3) => i3.id === t8.id);
  return n2 !== -1 && r5.splice(n2, 1), { ...e5, options: r5, activeOptionIndex: (() => n2 === e5.activeOptionIndex || o6 === null ? null : r5.indexOf(o6))() };
} };
var vt = (0, import_react23.createContext)(null);
vt.displayName = "ComboboxContext";
function pe(e5) {
  let t8 = (0, import_react23.useContext)(vt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, pe), r5;
  }
  return t8;
}
var Rt = (0, import_react23.createContext)(null);
Rt.displayName = "ComboboxActions";
function Ue() {
  let e5 = (0, import_react23.useContext)(Rt);
  if (e5 === null) {
    let t8 = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t8, Ue), t8;
  }
  return e5;
}
function hr(e5, t8) {
  return S2(t8.type, Ar, e5, t8);
}
var Or = import_react23.Fragment;
var Ir = D2(function(t8, r5) {
  let { value: o6, onChange: n2, disabled: i3 = false, ...a4 } = t8, l3 = (0, import_react23.useRef)({ value: o6, onChange: n2 }), s4 = (0, import_react23.useRef)({ static: false, hold: false }), u2 = (0, import_react23.useRef)({ displayValue: void 0 }), c4 = (0, import_react23.useReducer)(hr, { comboboxState: 1, comboboxPropsRef: l3, optionsPropsRef: s4, inputPropsRef: u2, labelRef: (0, import_react23.createRef)(), inputRef: (0, import_react23.createRef)(), buttonRef: (0, import_react23.createRef)(), optionsRef: (0, import_react23.createRef)(), disabled: i3, options: [], activeOptionIndex: null }), [{ comboboxState: m3, options: b2, activeOptionIndex: T2, optionsRef: y3, inputRef: p2, buttonRef: f2 }, d3] = c4;
  x3(() => {
    l3.current.value = o6;
  }, [o6, l3]), x3(() => {
    l3.current.onChange = n2;
  }, [n2, l3]), x3(() => d3({ type: 2, disabled: i3 }), [i3]), w2("mousedown", (O2) => {
    var N3, K, V2;
    let L2 = O2.target;
    m3 === 0 && (((N3 = f2.current) == null ? void 0 : N3.contains(L2)) || ((K = p2.current) == null ? void 0 : K.contains(L2)) || ((V2 = y3.current) == null ? void 0 : V2.contains(L2)) || d3({ type: 1 }));
  });
  let P2 = T2 === null ? null : b2[T2].dataRef.current.value, C2 = (0, import_react23.useMemo)(() => ({ open: m3 === 0, disabled: i3, activeIndex: T2, activeOption: P2 }), [m3, i3, b2, T2]), R2 = (0, import_react23.useCallback)(() => {
    if (!p2.current || o6 === void 0)
      return;
    let O2 = u2.current.displayValue;
    typeof O2 == "function" ? p2.current.value = O2(o6) : typeof o6 == "string" && (p2.current.value = o6);
  }, [o6, p2, u2]), g2 = (0, import_react23.useCallback)((O2) => {
    let L2 = b2.find((K) => K.id === O2);
    if (!L2)
      return;
    let { dataRef: N3 } = L2;
    l3.current.onChange(N3.current.value), R2();
  }, [b2, l3, p2]), v3 = (0, import_react23.useCallback)(() => {
    if (T2 !== null) {
      let { dataRef: O2 } = b2[T2];
      l3.current.onChange(O2.current.value), R2();
    }
  }, [T2, b2, l3, p2]), h2 = (0, import_react23.useMemo)(() => ({ selectOption: g2, selectActiveOption: v3 }), [g2, v3]);
  return x3(() => {
    m3 === 1 && R2();
  }, [R2, m3]), x3(R2, [R2]), import_react23.default.createElement(Rt.Provider, { value: h2 }, import_react23.default.createElement(vt.Provider, { value: c4 }, import_react23.default.createElement(W2, { value: S2(m3, { [0]: 0, [1]: 1 }) }, E2({ props: r5 === null ? a4 : { ...a4, ref: r5 }, slot: C2, defaultTag: Or, name: "Combobox" }))));
});
var Lr = "input";
var Dr = D2(function(t8, r5) {
  var R2, g2;
  let { value: o6, onChange: n2, displayValue: i3, ...a4 } = t8, [l3, s4] = pe("Combobox.Input"), u2 = Ue(), c4 = I2(l3.inputRef, r5), m3 = l3.inputPropsRef, b2 = `headlessui-combobox-input-${A2()}`, T2 = Q(), y3 = ke(n2);
  x3(() => {
    m3.current.displayValue = i3;
  }, [i3, m3]);
  let p2 = (0, import_react23.useCallback)((v3) => {
    switch (v3.key) {
      case "Enter":
        v3.preventDefault(), v3.stopPropagation(), u2.selectActiveOption(), s4({ type: 1 });
        break;
      case "ArrowDown":
        return v3.preventDefault(), v3.stopPropagation(), S2(l3.comboboxState, { [0]: () => s4({ type: 3, focus: 2 }), [1]: () => {
          s4({ type: 0 }), T2.nextFrame(() => {
            l3.comboboxPropsRef.current.value || s4({ type: 3, focus: 0 });
          });
        } });
      case "ArrowUp":
        return v3.preventDefault(), v3.stopPropagation(), S2(l3.comboboxState, { [0]: () => s4({ type: 3, focus: 1 }), [1]: () => {
          s4({ type: 0 }), T2.nextFrame(() => {
            l3.comboboxPropsRef.current.value || s4({ type: 3, focus: 3 });
          });
        } });
      case "Home":
      case "PageUp":
        return v3.preventDefault(), v3.stopPropagation(), s4({ type: 3, focus: 0 });
      case "End":
      case "PageDown":
        return v3.preventDefault(), v3.stopPropagation(), s4({ type: 3, focus: 3 });
      case "Escape":
        return v3.preventDefault(), l3.optionsRef.current && !l3.optionsPropsRef.current.static && v3.stopPropagation(), s4({ type: 1 });
      case "Tab":
        u2.selectActiveOption(), s4({ type: 1 });
        break;
    }
  }, [T2, s4, l3, u2]), f2 = (0, import_react23.useCallback)((v3) => {
    var h2;
    s4({ type: 0 }), (h2 = y3.current) == null || h2.call(y3, v3);
  }, [s4, y3]), d3 = ee(() => {
    if (!!l3.labelRef.current)
      return [l3.labelRef.current.id].join(" ");
  }, [l3.labelRef.current]), P2 = (0, import_react23.useMemo)(() => ({ open: l3.comboboxState === 0, disabled: l3.disabled }), [l3]), C2 = { ref: c4, id: b2, role: "combobox", type: "text", "aria-controls": (R2 = l3.optionsRef.current) == null ? void 0 : R2.id, "aria-expanded": l3.disabled ? void 0 : l3.comboboxState === 0, "aria-activedescendant": l3.activeOptionIndex === null || (g2 = l3.options[l3.activeOptionIndex]) == null ? void 0 : g2.id, "aria-labelledby": d3, disabled: l3.disabled, onKeyDown: p2, onChange: f2 };
  return E2({ props: { ...a4, ...C2 }, slot: P2, defaultTag: Lr, name: "Combobox.Input" });
});
var Mr = "button";
var Fr = D2(function(t8, r5) {
  var p2;
  let [o6, n2] = pe("Combobox.Button"), i3 = Ue(), a4 = I2(o6.buttonRef, r5), l3 = `headlessui-combobox-button-${A2()}`, s4 = Q(), u2 = (0, import_react23.useCallback)((f2) => {
    switch (f2.key) {
      case "ArrowDown":
        return f2.preventDefault(), f2.stopPropagation(), o6.comboboxState === 1 && (n2({ type: 0 }), s4.nextFrame(() => {
          o6.comboboxPropsRef.current.value || n2({ type: 3, focus: 0 });
        })), s4.nextFrame(() => {
          var d3;
          return (d3 = o6.inputRef.current) == null ? void 0 : d3.focus({ preventScroll: true });
        });
      case "ArrowUp":
        return f2.preventDefault(), f2.stopPropagation(), o6.comboboxState === 1 && (n2({ type: 0 }), s4.nextFrame(() => {
          o6.comboboxPropsRef.current.value || n2({ type: 3, focus: 3 });
        })), s4.nextFrame(() => {
          var d3;
          return (d3 = o6.inputRef.current) == null ? void 0 : d3.focus({ preventScroll: true });
        });
      case "Escape":
        return f2.preventDefault(), o6.optionsRef.current && !o6.optionsPropsRef.current.static && f2.stopPropagation(), n2({ type: 1 }), s4.nextFrame(() => {
          var d3;
          return (d3 = o6.inputRef.current) == null ? void 0 : d3.focus({ preventScroll: true });
        });
    }
  }, [s4, n2, o6, i3]), c4 = (0, import_react23.useCallback)((f2) => {
    if (G2(f2.currentTarget))
      return f2.preventDefault();
    o6.comboboxState === 0 ? n2({ type: 1 }) : (f2.preventDefault(), n2({ type: 0 })), s4.nextFrame(() => {
      var d3;
      return (d3 = o6.inputRef.current) == null ? void 0 : d3.focus({ preventScroll: true });
    });
  }, [n2, s4, o6]), m3 = ee(() => {
    if (!!o6.labelRef.current)
      return [o6.labelRef.current.id, l3].join(" ");
  }, [o6.labelRef.current, l3]), b2 = (0, import_react23.useMemo)(() => ({ open: o6.comboboxState === 0, disabled: o6.disabled }), [o6]), T2 = t8, y3 = { ref: a4, id: l3, type: U2(t8, o6.buttonRef), tabIndex: -1, "aria-haspopup": true, "aria-controls": (p2 = o6.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o6.disabled ? void 0 : o6.comboboxState === 0, "aria-labelledby": m3, disabled: o6.disabled, onClick: c4, onKeyDown: u2 };
  return E2({ props: { ...T2, ...y3 }, slot: b2, defaultTag: Mr, name: "Combobox.Button" });
});
var wr = "label";
function kr(e5) {
  let [t8] = pe("Combobox.Label"), r5 = `headlessui-combobox-label-${A2()}`, o6 = (0, import_react23.useCallback)(() => {
    var a4;
    return (a4 = t8.inputRef.current) == null ? void 0 : a4.focus({ preventScroll: true });
  }, [t8.inputRef]), n2 = (0, import_react23.useMemo)(() => ({ open: t8.comboboxState === 0, disabled: t8.disabled }), [t8]), i3 = { ref: t8.labelRef, id: r5, onClick: o6 };
  return E2({ props: { ...e5, ...i3 }, slot: n2, defaultTag: wr, name: "Combobox.Label" });
}
var _r = "ul";
var Gr = 1 | 2;
var Hr = D2(function(t8, r5) {
  var y3;
  let { hold: o6 = false, ...n2 } = t8, [i3] = pe("Combobox.Options"), { optionsPropsRef: a4 } = i3, l3 = I2(i3.optionsRef, r5), s4 = `headlessui-combobox-options-${A2()}`, u2 = _(), c4 = (() => u2 !== null ? u2 === 0 : i3.comboboxState === 0)();
  x3(() => {
    var p2;
    a4.current.static = (p2 = t8.static) != null ? p2 : false;
  }, [a4, t8.static]), x3(() => {
    a4.current.hold = o6;
  }, [o6, a4]), se({ container: i3.optionsRef.current, enabled: i3.comboboxState === 0, accept(p2) {
    return p2.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p2) {
    p2.setAttribute("role", "none");
  } });
  let m3 = ee(() => {
    var p2, f2, d3;
    return (d3 = (p2 = i3.labelRef.current) == null ? void 0 : p2.id) != null ? d3 : (f2 = i3.buttonRef.current) == null ? void 0 : f2.id;
  }, [i3.labelRef.current, i3.buttonRef.current]), b2 = (0, import_react23.useMemo)(() => ({ open: i3.comboboxState === 0 }), [i3]), T2 = { "aria-activedescendant": i3.activeOptionIndex === null || (y3 = i3.options[i3.activeOptionIndex]) == null ? void 0 : y3.id, "aria-labelledby": m3, role: "listbox", id: s4, ref: l3 };
  return E2({ props: { ...n2, ...T2 }, slot: b2, defaultTag: _r, features: Gr, visible: c4, name: "Combobox.Options" });
});
var Ur = "li";
function Br(e5) {
  let { disabled: t8 = false, value: r5, ...o6 } = e5, [n2, i3] = pe("Combobox.Option"), a4 = Ue(), l3 = `headlessui-combobox-option-${A2()}`, s4 = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === l3 : false, u2 = n2.comboboxPropsRef.current.value === r5, c4 = (0, import_react23.useRef)({ disabled: t8, value: r5 });
  x3(() => {
    c4.current.disabled = t8;
  }, [c4, t8]), x3(() => {
    c4.current.value = r5;
  }, [c4, r5]), x3(() => {
    var P2, C2;
    c4.current.textValue = (C2 = (P2 = document.getElementById(l3)) == null ? void 0 : P2.textContent) == null ? void 0 : C2.toLowerCase();
  }, [c4, l3]);
  let m3 = (0, import_react23.useCallback)(() => a4.selectOption(l3), [a4, l3]);
  x3(() => (i3({ type: 4, id: l3, dataRef: c4 }), () => i3({ type: 5, id: l3 })), [c4, l3]), x3(() => {
    n2.comboboxState === 0 && (!u2 || i3({ type: 3, focus: 4, id: l3 }));
  }, [n2.comboboxState, u2, l3]), x3(() => {
    if (n2.comboboxState !== 0 || !s4)
      return;
    let P2 = k2();
    return P2.requestAnimationFrame(() => {
      var C2, R2;
      (R2 = (C2 = document.getElementById(l3)) == null ? void 0 : C2.scrollIntoView) == null || R2.call(C2, { block: "nearest" });
    }), P2.dispose;
  }, [l3, s4, n2.comboboxState, n2.activeOptionIndex]);
  let b2 = (0, import_react23.useCallback)((P2) => {
    if (t8)
      return P2.preventDefault();
    m3(), i3({ type: 1 }), k2().nextFrame(() => {
      var C2;
      return (C2 = n2.inputRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
    });
  }, [i3, n2.inputRef, t8, m3]), T2 = (0, import_react23.useCallback)(() => {
    if (t8)
      return i3({ type: 3, focus: 5 });
    i3({ type: 3, focus: 4, id: l3 });
  }, [t8, l3, i3]), y3 = (0, import_react23.useCallback)(() => {
    t8 || s4 || i3({ type: 3, focus: 4, id: l3 });
  }, [t8, s4, l3, i3]), p2 = (0, import_react23.useCallback)(() => {
    t8 || !s4 || n2.optionsPropsRef.current.hold || i3({ type: 3, focus: 5 });
  }, [t8, s4, i3, n2.comboboxState, n2.comboboxPropsRef]), f2 = (0, import_react23.useMemo)(() => ({ active: s4, selected: u2, disabled: t8 }), [s4, u2, t8]);
  return E2({ props: { ...o6, ...{ id: l3, role: "option", tabIndex: t8 === true ? void 0 : -1, "aria-disabled": t8 === true ? true : void 0, "aria-selected": u2 === true ? true : void 0, disabled: void 0, onClick: b2, onFocus: T2, onPointerMove: y3, onMouseMove: y3, onPointerLeave: p2, onMouseLeave: p2 } }, slot: f2, defaultTag: Ur, name: "Combobox.Option" });
}
var Na = Object.assign(Ir, { Input: Dr, Button: Fr, Label: kr, Options: Hr, Option: Br });
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e5) => `${e5}:not([tabindex='-1'])`).join(",");
function xe(e5 = document.body) {
  return e5 == null ? [] : Array.from(e5.querySelectorAll(Et));
}
function de(e5, t8 = 0) {
  return e5 === document.body ? false : S2(t8, { [0]() {
    return e5.matches(Et);
  }, [1]() {
    let r5 = e5;
    for (; r5 !== null; ) {
      if (r5.matches(Et))
        return true;
      r5 = r5.parentElement;
    }
    return false;
  } });
}
function ce(e5) {
  e5 == null || e5.focus({ preventScroll: true });
}
function M2(e5, t8) {
  let r5 = Array.isArray(e5) ? e5.slice().sort((c4, m3) => {
    let b2 = c4.compareDocumentPosition(m3);
    return b2 & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b2 & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e5), o6 = document.activeElement, n2 = (() => {
    if (t8 & (1 | 4))
      return 1;
    if (t8 & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i3 = (() => {
    if (t8 & 1)
      return 0;
    if (t8 & 2)
      return Math.max(0, r5.indexOf(o6)) - 1;
    if (t8 & 4)
      return Math.max(0, r5.indexOf(o6)) + 1;
    if (t8 & 8)
      return r5.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a4 = t8 & 32 ? { preventScroll: true } : {}, l3 = 0, s4 = r5.length, u2;
  do {
    if (l3 >= s4 || l3 + s4 <= 0)
      return 0;
    let c4 = i3 + l3;
    if (t8 & 16)
      c4 = (c4 + s4) % s4;
    else {
      if (c4 < 0)
        return 3;
      if (c4 >= s4)
        return 1;
    }
    u2 = r5[c4], u2 == null || u2.focus(a4), l3 += n2;
  } while (u2 !== document.activeElement);
  return u2.hasAttribute("tabindex") || u2.setAttribute("tabindex", "0"), 2;
}
function Be() {
  let e5 = (0, import_react38.useRef)(false);
  return (0, import_react38.useEffect)(() => (e5.current = true, () => {
    e5.current = false;
  }), []), e5;
}
function Ne(e5, t8 = 30, { initialFocus: r5, containers: o6 } = {}) {
  let n2 = (0, import_react37.useRef)(typeof window != "undefined" ? document.activeElement : null), i3 = (0, import_react37.useRef)(null), a4 = Be(), l3 = Boolean(t8 & 16), s4 = Boolean(t8 & 2);
  (0, import_react37.useEffect)(() => {
    !l3 || (n2.current = document.activeElement);
  }, [l3]), (0, import_react37.useEffect)(() => {
    if (!!l3)
      return () => {
        ce(n2.current), n2.current = null;
      };
  }, [l3]), (0, import_react37.useEffect)(() => {
    if (!s4 || !e5.current)
      return;
    let u2 = document.activeElement;
    if (r5 == null ? void 0 : r5.current) {
      if ((r5 == null ? void 0 : r5.current) === u2) {
        i3.current = u2;
        return;
      }
    } else if (e5.current.contains(u2)) {
      i3.current = u2;
      return;
    }
    (r5 == null ? void 0 : r5.current) ? ce(r5.current) : M2(e5.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i3.current = document.activeElement;
  }, [e5, r5, s4]), w2("keydown", (u2) => {
    !(t8 & 4) || !e5.current || u2.key === "Tab" && (u2.preventDefault(), M2(e5.current, (u2.shiftKey ? 2 : 4) | 16) === 2 && (i3.current = document.activeElement));
  }), w2("focus", (u2) => {
    if (!(t8 & 8))
      return;
    let c4 = new Set(o6 == null ? void 0 : o6.current);
    if (c4.add(e5), !c4.size)
      return;
    let m3 = i3.current;
    if (!m3 || !a4.current)
      return;
    let b2 = u2.target;
    b2 && b2 instanceof HTMLElement ? Kr(c4, b2) ? (i3.current = b2, ce(b2)) : (u2.preventDefault(), u2.stopPropagation(), ce(m3)) : ce(i3.current);
  }, true);
}
function Kr(e5, t8) {
  var r5;
  for (let o6 of e5)
    if ((r5 = o6.current) == null ? void 0 : r5.contains(t8))
      return true;
  return false;
}
var fe = new Set();
var J2 = new Map();
function po(e5) {
  e5.setAttribute("aria-hidden", "true"), e5.inert = true;
}
function co(e5) {
  let t8 = J2.get(e5);
  !t8 || (t8["aria-hidden"] === null ? e5.removeAttribute("aria-hidden") : e5.setAttribute("aria-hidden", t8["aria-hidden"]), e5.inert = t8.inert);
}
function fo(e5, t8 = true) {
  x3(() => {
    if (!t8 || !e5.current)
      return;
    let r5 = e5.current;
    fe.add(r5);
    for (let o6 of J2.keys())
      o6.contains(r5) && (co(o6), J2.delete(o6));
    return document.querySelectorAll("body > *").forEach((o6) => {
      if (o6 instanceof HTMLElement) {
        for (let n2 of fe)
          if (o6.contains(n2))
            return;
        fe.size === 1 && (J2.set(o6, { "aria-hidden": o6.getAttribute("aria-hidden"), inert: o6.inert }), po(o6));
      }
    }), () => {
      if (fe.delete(r5), fe.size > 0)
        document.querySelectorAll("body > *").forEach((o6) => {
          if (o6 instanceof HTMLElement && !J2.has(o6)) {
            for (let n2 of fe)
              if (o6.contains(n2))
                return;
            J2.set(o6, { "aria-hidden": o6.getAttribute("aria-hidden"), inert: o6.inert }), po(o6);
          }
        });
      else
        for (let o6 of J2.keys())
          co(o6), J2.delete(o6);
    };
  }, [t8]);
}
var mo = (0, import_react40.createContext)(false);
function bo() {
  return (0, import_react40.useContext)(mo);
}
function At(e5) {
  return import_react40.default.createElement(mo.Provider, { value: e5.force }, e5.children);
}
function Xr() {
  let e5 = bo(), t8 = (0, import_react39.useContext)(Po), [r5, o6] = (0, import_react39.useState)(() => {
    if (!e5 && t8 !== null || typeof window == "undefined")
      return null;
    let n2 = document.getElementById("headlessui-portal-root");
    if (n2)
      return n2;
    let i3 = document.createElement("div");
    return i3.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i3);
  });
  return (0, import_react39.useEffect)(() => {
    r5 !== null && (document.body.contains(r5) || document.body.appendChild(r5));
  }, [r5]), (0, import_react39.useEffect)(() => {
    e5 || t8 !== null && o6(t8.current);
  }, [t8, o6, e5]), r5;
}
var Jr = import_react39.Fragment;
function We(e5) {
  let t8 = e5, r5 = Xr(), [o6] = (0, import_react39.useState)(() => typeof window == "undefined" ? null : document.createElement("div")), n2 = q2();
  return x3(() => {
    if (!!r5 && !!o6)
      return r5.appendChild(o6), () => {
        var i3;
        !r5 || !o6 || (r5.removeChild(o6), r5.childNodes.length <= 0 && ((i3 = r5.parentElement) == null || i3.removeChild(r5)));
      };
  }, [r5, o6]), n2 ? !r5 || !o6 ? null : (0, import_react_dom.createPortal)(E2({ props: t8, defaultTag: Jr, name: "Portal" }), o6) : null;
}
var Zr = import_react39.Fragment;
var Po = (0, import_react39.createContext)(null);
function en(e5) {
  let { target: t8, ...r5 } = e5;
  return import_react39.default.createElement(Po.Provider, { value: t8 }, E2({ props: r5, defaultTag: Zr, name: "Popover.Group" }));
}
We.Group = en;
var vo = (0, import_react41.createContext)(null);
function Ro() {
  let e5 = (0, import_react41.useContext)(vo);
  if (e5 === null) {
    let t8 = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t8, Ro), t8;
  }
  return e5;
}
function re() {
  let [e5, t8] = (0, import_react41.useState)([]);
  return [e5.length > 0 ? e5.join(" ") : void 0, (0, import_react41.useMemo)(() => function(o6) {
    let n2 = (0, import_react41.useCallback)((a4) => (t8((l3) => [...l3, a4]), () => t8((l3) => {
      let s4 = l3.slice(), u2 = s4.indexOf(a4);
      return u2 !== -1 && s4.splice(u2, 1), s4;
    })), []), i3 = (0, import_react41.useMemo)(() => ({ register: n2, slot: o6.slot, name: o6.name, props: o6.props }), [n2, o6.slot, o6.name, o6.props]);
    return import_react41.default.createElement(vo.Provider, { value: i3 }, o6.children);
  }, [t8])];
}
var an = "p";
function me(e5) {
  let t8 = Ro(), r5 = `headlessui-description-${A2()}`;
  x3(() => t8.register(r5), [r5, t8.register]);
  let o6 = e5, n2 = { ...t8.props, id: r5 };
  return E2({ props: { ...o6, ...n2 }, slot: t8.slot || {}, defaultTag: an, name: t8.name || "Description" });
}
var ht = (0, import_react42.createContext)(() => {
});
ht.displayName = "StackContext";
function cn() {
  return (0, import_react42.useContext)(ht);
}
function Eo({ children: e5, onUpdate: t8, type: r5, element: o6 }) {
  let n2 = cn(), i3 = (0, import_react42.useCallback)((...a4) => {
    t8 == null || t8(...a4), n2(...a4);
  }, [n2, t8]);
  return x3(() => (i3(0, r5, o6), () => i3(1, r5, o6)), [i3, r5, o6]), import_react42.default.createElement(ht.Provider, { value: i3 }, e5);
}
var yn = { [0](e5, t8) {
  return e5.titleId === t8.id ? e5 : { ...e5, titleId: t8.id };
} };
var Ve = (0, import_react36.createContext)(null);
Ve.displayName = "DialogContext";
function It(e5) {
  let t8 = (0, import_react36.useContext)(Ve);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, It), r5;
  }
  return t8;
}
function gn(e5, t8) {
  return S2(t8.type, yn, e5, t8);
}
var Pn = "div";
var xn = 1 | 2;
var vn = D2(function(t8, r5) {
  let { open: o6, onClose: n2, initialFocus: i3, ...a4 } = t8, [l3, s4] = (0, import_react36.useState)(0), u2 = _();
  o6 === void 0 && u2 !== null && (o6 = S2(u2, { [0]: true, [1]: false }));
  let c4 = (0, import_react36.useRef)(new Set()), m3 = (0, import_react36.useRef)(null), b2 = I2(m3, r5), T2 = t8.hasOwnProperty("open") || u2 !== null, y3 = t8.hasOwnProperty("onClose");
  if (!T2 && !y3)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T2)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y3)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o6 != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o6}`);
  if (typeof n2 != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n2}`);
  let p2 = o6 ? 0 : 1, f2 = (() => u2 !== null ? u2 === 0 : p2 === 0)(), [d3, P2] = (0, import_react36.useReducer)(gn, { titleId: null, descriptionId: null }), C2 = (0, import_react36.useCallback)(() => n2(false), [n2]), R2 = (0, import_react36.useCallback)((F2) => P2({ type: 0, id: F2 }), [P2]), v3 = q2() && p2 === 0, h2 = l3 > 1, O2 = (0, import_react36.useContext)(Ve) !== null;
  Ne(m3, v3 ? S2(h2 ? "parent" : "leaf", { parent: 16, leaf: 30 }) : 1, { initialFocus: i3, containers: c4 }), fo(m3, h2 ? v3 : false), w2("mousedown", (F2) => {
    var H2;
    let $2 = F2.target;
    p2 === 0 && (h2 || ((H2 = m3.current) == null ? void 0 : H2.contains($2)) || C2());
  }), w2("keydown", (F2) => {
    F2.key === "Escape" && p2 === 0 && (h2 || (F2.preventDefault(), F2.stopPropagation(), C2()));
  }), (0, import_react36.useEffect)(() => {
    if (p2 !== 0 || O2)
      return;
    let F2 = document.documentElement.style.overflow, $2 = document.documentElement.style.paddingRight, H2 = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H2}px`, () => {
      document.documentElement.style.overflow = F2, document.documentElement.style.paddingRight = $2;
    };
  }, [p2, O2]), (0, import_react36.useEffect)(() => {
    if (p2 !== 0 || !m3.current)
      return;
    let F2 = new IntersectionObserver(($2) => {
      for (let H2 of $2)
        H2.boundingClientRect.x === 0 && H2.boundingClientRect.y === 0 && H2.boundingClientRect.width === 0 && H2.boundingClientRect.height === 0 && C2();
    });
    return F2.observe(m3.current), () => F2.disconnect();
  }, [p2, m3, C2]);
  let [N3, K] = re(), V2 = `headlessui-dialog-${A2()}`, Fe = (0, import_react36.useMemo)(() => [{ dialogState: p2, close: C2, setTitleId: R2 }, d3], [p2, d3, C2, R2]), ge = (0, import_react36.useMemo)(() => ({ open: p2 === 0 }), [p2]), we = { ref: b2, id: V2, role: "dialog", "aria-modal": p2 === 0 ? true : void 0, "aria-labelledby": d3.titleId, "aria-describedby": N3, onClick(F2) {
    F2.stopPropagation();
  } }, X = a4;
  return import_react36.default.createElement(Eo, { type: "Dialog", element: m3, onUpdate: (0, import_react36.useCallback)((F2, $2, H2) => {
    $2 === "Dialog" && S2(F2, { [0]() {
      c4.current.add(H2), s4((Pe) => Pe + 1);
    }, [1]() {
      c4.current.add(H2), s4((Pe) => Pe - 1);
    } });
  }, []) }, import_react36.default.createElement(At, { force: true }, import_react36.default.createElement(We, null, import_react36.default.createElement(Ve.Provider, { value: Fe }, import_react36.default.createElement(We.Group, { target: m3 }, import_react36.default.createElement(At, { force: false }, import_react36.default.createElement(K, { slot: ge, name: "Dialog.Description" }, E2({ props: { ...X, ...we }, slot: ge, defaultTag: Pn, features: xn, visible: f2, name: "Dialog" }))))))));
});
var Rn = "div";
var En = D2(function(t8, r5) {
  let [{ dialogState: o6, close: n2 }] = It("Dialog.Overlay"), i3 = I2(r5), a4 = `headlessui-dialog-overlay-${A2()}`, l3 = (0, import_react36.useCallback)((m3) => {
    if (m3.target === m3.currentTarget) {
      if (G2(m3.currentTarget))
        return m3.preventDefault();
      m3.preventDefault(), m3.stopPropagation(), n2();
    }
  }, [n2]), s4 = (0, import_react36.useMemo)(() => ({ open: o6 === 0 }), [o6]);
  return E2({ props: { ...t8, ...{ ref: i3, id: a4, "aria-hidden": true, onClick: l3 } }, slot: s4, defaultTag: Rn, name: "Dialog.Overlay" });
});
var Cn = "h2";
function Sn(e5) {
  let [{ dialogState: t8, setTitleId: r5 }] = It("Dialog.Title"), o6 = `headlessui-dialog-title-${A2()}`;
  (0, import_react36.useEffect)(() => (r5(o6), () => r5(null)), [o6, r5]);
  let n2 = (0, import_react36.useMemo)(() => ({ open: t8 === 0 }), [t8]);
  return E2({ props: { ...e5, ...{ id: o6 } }, slot: n2, defaultTag: Cn, name: "Dialog.Title" });
}
var An = Object.assign(vn, { Overlay: En, Title: Sn, Description: me });
var Ln = { [0]: (e5) => ({ ...e5, disclosureState: S2(e5.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e5) => e5.disclosureState === 1 ? e5 : { ...e5, disclosureState: 1 }, [4](e5) {
  return e5.linkedPanel === true ? e5 : { ...e5, linkedPanel: true };
}, [5](e5) {
  return e5.linkedPanel === false ? e5 : { ...e5, linkedPanel: false };
}, [2](e5, t8) {
  return e5.buttonId === t8.buttonId ? e5 : { ...e5, buttonId: t8.buttonId };
}, [3](e5, t8) {
  return e5.panelId === t8.panelId ? e5 : { ...e5, panelId: t8.panelId };
} };
var Mt = (0, import_react43.createContext)(null);
Mt.displayName = "DisclosureContext";
function Ft(e5) {
  let t8 = (0, import_react43.useContext)(Mt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Ft), r5;
  }
  return t8;
}
var wt = (0, import_react43.createContext)(null);
wt.displayName = "DisclosureAPIContext";
function Ao(e5) {
  let t8 = (0, import_react43.useContext)(wt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Ao), r5;
  }
  return t8;
}
var kt = (0, import_react43.createContext)(null);
kt.displayName = "DisclosurePanelContext";
function Dn() {
  return (0, import_react43.useContext)(kt);
}
function Mn(e5, t8) {
  return S2(t8.type, Ln, e5, t8);
}
var Fn = import_react43.Fragment;
function Ye(e5) {
  let { defaultOpen: t8 = false, ...r5 } = e5, o6 = `headlessui-disclosure-button-${A2()}`, n2 = `headlessui-disclosure-panel-${A2()}`, i3 = (0, import_react43.useReducer)(Mn, { disclosureState: t8 ? 0 : 1, linkedPanel: false, buttonId: o6, panelId: n2 }), [{ disclosureState: a4 }, l3] = i3;
  (0, import_react43.useEffect)(() => l3({ type: 2, buttonId: o6 }), [o6, l3]), (0, import_react43.useEffect)(() => l3({ type: 3, panelId: n2 }), [n2, l3]);
  let s4 = (0, import_react43.useCallback)((m3) => {
    l3({ type: 1 });
    let b2 = (() => m3 ? m3 instanceof HTMLElement ? m3 : m3.current instanceof HTMLElement ? m3.current : document.getElementById(o6) : document.getElementById(o6))();
    b2 == null || b2.focus();
  }, [l3, o6]), u2 = (0, import_react43.useMemo)(() => ({ close: s4 }), [s4]), c4 = (0, import_react43.useMemo)(() => ({ open: a4 === 0, close: s4 }), [a4, s4]);
  return import_react43.default.createElement(Mt.Provider, { value: i3 }, import_react43.default.createElement(wt.Provider, { value: u2 }, import_react43.default.createElement(W2, { value: S2(a4, { [0]: 0, [1]: 1 }) }, E2({ props: r5, slot: c4, defaultTag: Fn, name: "Disclosure" }))));
}
var wn = "button";
var kn = D2(function(t8, r5) {
  let [o6, n2] = Ft("Disclosure.Button"), i3 = (0, import_react43.useRef)(null), a4 = I2(i3, r5), l3 = Dn(), s4 = l3 === null ? false : l3 === o6.panelId, u2 = (0, import_react43.useCallback)((f2) => {
    var d3;
    if (s4) {
      if (o6.disclosureState === 1)
        return;
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 }), (d3 = document.getElementById(o6.buttonId)) == null || d3.focus();
          break;
      }
    } else
      switch (f2.key) {
        case " ":
        case "Enter":
          f2.preventDefault(), f2.stopPropagation(), n2({ type: 0 });
          break;
      }
  }, [n2, s4, o6.disclosureState, o6.buttonId]), c4 = (0, import_react43.useCallback)((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), m3 = (0, import_react43.useCallback)((f2) => {
    var d3;
    G2(f2.currentTarget) || t8.disabled || (s4 ? (n2({ type: 0 }), (d3 = document.getElementById(o6.buttonId)) == null || d3.focus()) : n2({ type: 0 }));
  }, [n2, t8.disabled, o6.buttonId, s4]), b2 = (0, import_react43.useMemo)(() => ({ open: o6.disclosureState === 0 }), [o6]), T2 = U2(t8, i3), y3 = t8, p2 = s4 ? { ref: a4, type: T2, onKeyDown: u2, onClick: m3 } : { ref: a4, id: o6.buttonId, type: T2, "aria-expanded": t8.disabled ? void 0 : o6.disclosureState === 0, "aria-controls": o6.linkedPanel ? o6.panelId : void 0, onKeyDown: u2, onKeyUp: c4, onClick: m3 };
  return E2({ props: { ...y3, ...p2 }, slot: b2, defaultTag: wn, name: "Disclosure.Button" });
});
var _n = "div";
var Gn = 1 | 2;
var Hn = D2(function(t8, r5) {
  let [o6, n2] = Ft("Disclosure.Panel"), { close: i3 } = Ao("Disclosure.Panel"), a4 = I2(r5, () => {
    o6.linkedPanel || n2({ type: 4 });
  }), l3 = _(), s4 = (() => l3 !== null ? l3 === 0 : o6.disclosureState === 0)();
  (0, import_react43.useEffect)(() => () => n2({ type: 5 }), [n2]), (0, import_react43.useEffect)(() => {
    var b2;
    o6.disclosureState === 1 && ((b2 = t8.unmount) != null ? b2 : true) && n2({ type: 5 });
  }, [o6.disclosureState, t8.unmount, n2]);
  let u2 = (0, import_react43.useMemo)(() => ({ open: o6.disclosureState === 0, close: i3 }), [o6, i3]), c4 = { ref: a4, id: o6.panelId }, m3 = t8;
  return import_react43.default.createElement(kt.Provider, { value: o6.panelId }, E2({ props: { ...m3, ...c4 }, slot: u2, defaultTag: _n, features: Gn, visible: s4, name: "Disclosure.Panel" }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = { [1](e5) {
  return e5.disabled || e5.listboxState === 1 ? e5 : { ...e5, activeOptionIndex: null, listboxState: 1 };
}, [0](e5) {
  return e5.disabled || e5.listboxState === 0 ? e5 : { ...e5, listboxState: 0 };
}, [2](e5, t8) {
  return e5.disabled === t8.disabled ? e5 : { ...e5, disabled: t8.disabled };
}, [3](e5, t8) {
  return e5.orientation === t8.orientation ? e5 : { ...e5, orientation: t8.orientation };
}, [4](e5, t8) {
  if (e5.disabled || e5.listboxState === 1)
    return e5;
  let r5 = ae(t8, { resolveItems: () => e5.options, resolveActiveIndex: () => e5.activeOptionIndex, resolveId: (o6) => o6.id, resolveDisabled: (o6) => o6.dataRef.current.disabled });
  return e5.searchQuery === "" && e5.activeOptionIndex === r5 ? e5 : { ...e5, searchQuery: "", activeOptionIndex: r5 };
}, [5]: (e5, t8) => {
  if (e5.disabled || e5.listboxState === 1)
    return e5;
  let o6 = e5.searchQuery !== "" ? 0 : 1, n2 = e5.searchQuery + t8.value.toLowerCase(), a4 = (e5.activeOptionIndex !== null ? e5.options.slice(e5.activeOptionIndex + o6).concat(e5.options.slice(0, e5.activeOptionIndex + o6)) : e5.options).find((s4) => {
    var u2;
    return !s4.dataRef.current.disabled && ((u2 = s4.dataRef.current.textValue) == null ? void 0 : u2.startsWith(n2));
  }), l3 = a4 ? e5.options.indexOf(a4) : -1;
  return l3 === -1 || l3 === e5.activeOptionIndex ? { ...e5, searchQuery: n2 } : { ...e5, searchQuery: n2, activeOptionIndex: l3 };
}, [6](e5) {
  return e5.disabled || e5.listboxState === 1 || e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "" };
}, [7]: (e5, t8) => {
  var n2;
  let r5 = Array.from((n2 = e5.optionsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i3, a4, l3) => Object.assign(i3, { [a4.id]: l3 }), {}), o6 = [...e5.options, { id: t8.id, dataRef: t8.dataRef }].sort((i3, a4) => r5[i3.id] - r5[a4.id]);
  return { ...e5, options: o6 };
}, [8]: (e5, t8) => {
  let r5 = e5.options.slice(), o6 = e5.activeOptionIndex !== null ? r5[e5.activeOptionIndex] : null, n2 = r5.findIndex((i3) => i3.id === t8.id);
  return n2 !== -1 && r5.splice(n2, 1), { ...e5, options: r5, activeOptionIndex: (() => n2 === e5.activeOptionIndex || o6 === null ? null : r5.indexOf(o6))() };
} };
var Gt = (0, import_react45.createContext)(null);
Gt.displayName = "ListboxContext";
function Re(e5) {
  let t8 = (0, import_react45.useContext)(Gt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Re), r5;
  }
  return t8;
}
function Qn(e5, t8) {
  return S2(t8.type, $n, e5, t8);
}
var qn = import_react45.Fragment;
function Ee(e5) {
  let { value: t8, onChange: r5, disabled: o6 = false, horizontal: n2 = false, ...i3 } = e5, a4 = n2 ? "horizontal" : "vertical", l3 = (0, import_react45.useReducer)(Qn, { listboxState: 1, propsRef: { current: { value: t8, onChange: r5 } }, labelRef: (0, import_react45.createRef)(), buttonRef: (0, import_react45.createRef)(), optionsRef: (0, import_react45.createRef)(), disabled: o6, orientation: a4, options: [], searchQuery: "", activeOptionIndex: null }), [{ listboxState: s4, propsRef: u2, optionsRef: c4, buttonRef: m3 }, b2] = l3;
  x3(() => {
    u2.current.value = t8;
  }, [t8, u2]), x3(() => {
    u2.current.onChange = r5;
  }, [r5, u2]), x3(() => b2({ type: 2, disabled: o6 }), [o6]), x3(() => b2({ type: 3, orientation: a4 }), [a4]), w2("mousedown", (y3) => {
    var f2, d3, P2;
    let p2 = y3.target;
    s4 === 0 && (((f2 = m3.current) == null ? void 0 : f2.contains(p2)) || ((d3 = c4.current) == null ? void 0 : d3.contains(p2)) || (b2({ type: 1 }), de(p2, 1) || (y3.preventDefault(), (P2 = m3.current) == null || P2.focus())));
  });
  let T2 = (0, import_react45.useMemo)(() => ({ open: s4 === 0, disabled: o6 }), [s4, o6]);
  return import_react45.default.createElement(Gt.Provider, { value: l3 }, import_react45.default.createElement(W2, { value: S2(s4, { [0]: 0, [1]: 1 }) }, E2({ props: i3, slot: T2, defaultTag: qn, name: "Listbox" })));
}
var zn = "button";
var Yn = D2(function(t8, r5) {
  var p2;
  let [o6, n2] = Re("Listbox.Button"), i3 = I2(o6.buttonRef, r5), a4 = `headlessui-listbox-button-${A2()}`, l3 = Q(), s4 = (0, import_react45.useCallback)((f2) => {
    switch (f2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f2.preventDefault(), n2({ type: 0 }), l3.nextFrame(() => {
          o6.propsRef.current.value || n2({ type: 4, focus: 0 });
        });
        break;
      case "ArrowUp":
        f2.preventDefault(), n2({ type: 0 }), l3.nextFrame(() => {
          o6.propsRef.current.value || n2({ type: 4, focus: 3 });
        });
        break;
    }
  }, [n2, o6, l3]), u2 = (0, import_react45.useCallback)((f2) => {
    switch (f2.key) {
      case " ":
        f2.preventDefault();
        break;
    }
  }, []), c4 = (0, import_react45.useCallback)((f2) => {
    if (G2(f2.currentTarget))
      return f2.preventDefault();
    o6.listboxState === 0 ? (n2({ type: 1 }), l3.nextFrame(() => {
      var d3;
      return (d3 = o6.buttonRef.current) == null ? void 0 : d3.focus({ preventScroll: true });
    })) : (f2.preventDefault(), n2({ type: 0 }));
  }, [n2, l3, o6]), m3 = ee(() => {
    if (!!o6.labelRef.current)
      return [o6.labelRef.current.id, a4].join(" ");
  }, [o6.labelRef.current, a4]), b2 = (0, import_react45.useMemo)(() => ({ open: o6.listboxState === 0, disabled: o6.disabled }), [o6]), T2 = t8, y3 = { ref: i3, id: a4, type: U2(t8, o6.buttonRef), "aria-haspopup": true, "aria-controls": (p2 = o6.optionsRef.current) == null ? void 0 : p2.id, "aria-expanded": o6.disabled ? void 0 : o6.listboxState === 0, "aria-labelledby": m3, disabled: o6.disabled, onKeyDown: s4, onKeyUp: u2, onClick: c4 };
  return E2({ props: { ...T2, ...y3 }, slot: b2, defaultTag: zn, name: "Listbox.Button" });
});
var Xn = "label";
function Jn(e5) {
  let [t8] = Re("Listbox.Label"), r5 = `headlessui-listbox-label-${A2()}`, o6 = (0, import_react45.useCallback)(() => {
    var a4;
    return (a4 = t8.buttonRef.current) == null ? void 0 : a4.focus({ preventScroll: true });
  }, [t8.buttonRef]), n2 = (0, import_react45.useMemo)(() => ({ open: t8.listboxState === 0, disabled: t8.disabled }), [t8]), i3 = { ref: t8.labelRef, id: r5, onClick: o6 };
  return E2({ props: { ...e5, ...i3 }, slot: n2, defaultTag: Xn, name: "Listbox.Label" });
}
var Zn = "ul";
var ei = 1 | 2;
var ti = D2(function(t8, r5) {
  var f2;
  let [o6, n2] = Re("Listbox.Options"), i3 = I2(o6.optionsRef, r5), a4 = `headlessui-listbox-options-${A2()}`, l3 = Q(), s4 = Q(), u2 = _(), c4 = (() => u2 !== null ? u2 === 0 : o6.listboxState === 0)();
  x3(() => {
    let d3 = o6.optionsRef.current;
    !d3 || o6.listboxState === 0 && d3 !== document.activeElement && d3.focus({ preventScroll: true });
  }, [o6.listboxState, o6.optionsRef]);
  let m3 = (0, import_react45.useCallback)((d3) => {
    switch (s4.dispose(), d3.key) {
      case " ":
        if (o6.searchQuery !== "")
          return d3.preventDefault(), d3.stopPropagation(), n2({ type: 5, value: d3.key });
      case "Enter":
        if (d3.preventDefault(), d3.stopPropagation(), n2({ type: 1 }), o6.activeOptionIndex !== null) {
          let { dataRef: P2 } = o6.options[o6.activeOptionIndex];
          o6.propsRef.current.onChange(P2.current.value);
        }
        k2().nextFrame(() => {
          var P2;
          return (P2 = o6.buttonRef.current) == null ? void 0 : P2.focus({ preventScroll: true });
        });
        break;
      case S2(o6.orientation, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 4, focus: 2 });
      case S2(o6.orientation, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 4, focus: 1 });
      case "Home":
      case "PageUp":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 4, focus: 0 });
      case "End":
      case "PageDown":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 4, focus: 3 });
      case "Escape":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 1 }), l3.nextFrame(() => {
          var P2;
          return (P2 = o6.buttonRef.current) == null ? void 0 : P2.focus({ preventScroll: true });
        });
      case "Tab":
        d3.preventDefault(), d3.stopPropagation();
        break;
      default:
        d3.key.length === 1 && (n2({ type: 5, value: d3.key }), s4.setTimeout(() => n2({ type: 6 }), 350));
        break;
    }
  }, [l3, n2, s4, o6]), b2 = ee(() => {
    var d3, P2, C2;
    return (C2 = (d3 = o6.labelRef.current) == null ? void 0 : d3.id) != null ? C2 : (P2 = o6.buttonRef.current) == null ? void 0 : P2.id;
  }, [o6.labelRef.current, o6.buttonRef.current]), T2 = (0, import_react45.useMemo)(() => ({ open: o6.listboxState === 0 }), [o6]), y3 = { "aria-activedescendant": o6.activeOptionIndex === null || (f2 = o6.options[o6.activeOptionIndex]) == null ? void 0 : f2.id, "aria-labelledby": b2, "aria-orientation": o6.orientation, id: a4, onKeyDown: m3, role: "listbox", tabIndex: 0, ref: i3 };
  return E2({ props: { ...t8, ...y3 }, slot: T2, defaultTag: Zn, features: ei, visible: c4, name: "Listbox.Options" });
});
var oi = "li";
function ri(e5) {
  let { disabled: t8 = false, value: r5, ...o6 } = e5, [n2, i3] = Re("Listbox.Option"), a4 = `headlessui-listbox-option-${A2()}`, l3 = n2.activeOptionIndex !== null ? n2.options[n2.activeOptionIndex].id === a4 : false, s4 = n2.propsRef.current.value === r5, u2 = (0, import_react45.useRef)({ disabled: t8, value: r5 });
  x3(() => {
    u2.current.disabled = t8;
  }, [u2, t8]), x3(() => {
    u2.current.value = r5;
  }, [u2, r5]), x3(() => {
    var d3, P2;
    u2.current.textValue = (P2 = (d3 = document.getElementById(a4)) == null ? void 0 : d3.textContent) == null ? void 0 : P2.toLowerCase();
  }, [u2, a4]);
  let c4 = (0, import_react45.useCallback)(() => n2.propsRef.current.onChange(r5), [n2.propsRef, r5]);
  x3(() => (i3({ type: 7, id: a4, dataRef: u2 }), () => i3({ type: 8, id: a4 })), [u2, a4]), x3(() => {
    var d3, P2;
    n2.listboxState === 0 && (!s4 || (i3({ type: 4, focus: 4, id: a4 }), (P2 = (d3 = document.getElementById(a4)) == null ? void 0 : d3.focus) == null || P2.call(d3)));
  }, [n2.listboxState]), x3(() => {
    if (n2.listboxState !== 0 || !l3)
      return;
    let d3 = k2();
    return d3.requestAnimationFrame(() => {
      var P2, C2;
      (C2 = (P2 = document.getElementById(a4)) == null ? void 0 : P2.scrollIntoView) == null || C2.call(P2, { block: "nearest" });
    }), d3.dispose;
  }, [a4, l3, n2.listboxState, n2.activeOptionIndex]);
  let m3 = (0, import_react45.useCallback)((d3) => {
    if (t8)
      return d3.preventDefault();
    c4(), i3({ type: 1 }), k2().nextFrame(() => {
      var P2;
      return (P2 = n2.buttonRef.current) == null ? void 0 : P2.focus({ preventScroll: true });
    });
  }, [i3, n2.buttonRef, t8, c4]), b2 = (0, import_react45.useCallback)(() => {
    if (t8)
      return i3({ type: 4, focus: 5 });
    i3({ type: 4, focus: 4, id: a4 });
  }, [t8, a4, i3]), T2 = (0, import_react45.useCallback)(() => {
    t8 || l3 || i3({ type: 4, focus: 4, id: a4 });
  }, [t8, l3, a4, i3]), y3 = (0, import_react45.useCallback)(() => {
    t8 || !l3 || i3({ type: 4, focus: 5 });
  }, [t8, l3, i3]), p2 = (0, import_react45.useMemo)(() => ({ active: l3, selected: s4, disabled: t8 }), [l3, s4, t8]);
  return E2({ props: { ...o6, ...{ id: a4, role: "option", tabIndex: t8 === true ? void 0 : -1, "aria-disabled": t8 === true ? true : void 0, "aria-selected": s4 === true ? true : void 0, disabled: void 0, onClick: m3, onFocus: b2, onPointerMove: T2, onMouseMove: T2, onPointerLeave: y3, onMouseLeave: y3 } }, slot: p2, defaultTag: oi, name: "Listbox.Option" });
}
Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = { [1](e5) {
  return e5.menuState === 1 ? e5 : { ...e5, activeItemIndex: null, menuState: 1 };
}, [0](e5) {
  return e5.menuState === 0 ? e5 : { ...e5, menuState: 0 };
}, [2]: (e5, t8) => {
  let r5 = ae(t8, { resolveItems: () => e5.items, resolveActiveIndex: () => e5.activeItemIndex, resolveId: (o6) => o6.id, resolveDisabled: (o6) => o6.dataRef.current.disabled });
  return e5.searchQuery === "" && e5.activeItemIndex === r5 ? e5 : { ...e5, searchQuery: "", activeItemIndex: r5 };
}, [3]: (e5, t8) => {
  let o6 = e5.searchQuery !== "" ? 0 : 1, n2 = e5.searchQuery + t8.value.toLowerCase(), a4 = (e5.activeItemIndex !== null ? e5.items.slice(e5.activeItemIndex + o6).concat(e5.items.slice(0, e5.activeItemIndex + o6)) : e5.items).find((s4) => {
    var u2;
    return ((u2 = s4.dataRef.current.textValue) == null ? void 0 : u2.startsWith(n2)) && !s4.dataRef.current.disabled;
  }), l3 = a4 ? e5.items.indexOf(a4) : -1;
  return l3 === -1 || l3 === e5.activeItemIndex ? { ...e5, searchQuery: n2 } : { ...e5, searchQuery: n2, activeItemIndex: l3 };
}, [4](e5) {
  return e5.searchQuery === "" ? e5 : { ...e5, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e5, t8) => {
  var n2;
  let r5 = Array.from((n2 = e5.itemsRef.current) == null ? void 0 : n2.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i3, a4, l3) => Object.assign(i3, { [a4.id]: l3 }), {}), o6 = [...e5.items, { id: t8.id, dataRef: t8.dataRef }].sort((i3, a4) => r5[i3.id] - r5[a4.id]);
  return { ...e5, items: o6 };
}, [6]: (e5, t8) => {
  let r5 = e5.items.slice(), o6 = e5.activeItemIndex !== null ? r5[e5.activeItemIndex] : null, n2 = r5.findIndex((i3) => i3.id === t8.id);
  return n2 !== -1 && r5.splice(n2, 1), { ...e5, items: r5, activeItemIndex: (() => n2 === e5.activeItemIndex || o6 === null ? null : r5.indexOf(o6))() };
} };
var Ht = (0, import_react46.createContext)(null);
Ht.displayName = "MenuContext";
function Je(e5) {
  let t8 = (0, import_react46.useContext)(Ht);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Je), r5;
  }
  return t8;
}
function pi(e5, t8) {
  return S2(t8.type, ui, e5, t8);
}
var di = import_react46.Fragment;
function Ze(e5) {
  let t8 = (0, import_react46.useReducer)(pi, { menuState: 1, buttonRef: (0, import_react46.createRef)(), itemsRef: (0, import_react46.createRef)(), items: [], searchQuery: "", activeItemIndex: null }), [{ menuState: r5, itemsRef: o6, buttonRef: n2 }, i3] = t8;
  w2("mousedown", (l3) => {
    var u2, c4, m3;
    let s4 = l3.target;
    r5 === 0 && (((u2 = n2.current) == null ? void 0 : u2.contains(s4)) || ((c4 = o6.current) == null ? void 0 : c4.contains(s4)) || (i3({ type: 1 }), de(s4, 1) || (l3.preventDefault(), (m3 = n2.current) == null || m3.focus())));
  });
  let a4 = (0, import_react46.useMemo)(() => ({ open: r5 === 0 }), [r5]);
  return import_react46.default.createElement(Ht.Provider, { value: t8 }, import_react46.default.createElement(W2, { value: S2(r5, { [0]: 0, [1]: 1 }) }, E2({ props: e5, slot: a4, defaultTag: di, name: "Menu" })));
}
var ci = "button";
var fi = D2(function(t8, r5) {
  var y3;
  let [o6, n2] = Je("Menu.Button"), i3 = I2(o6.buttonRef, r5), a4 = `headlessui-menu-button-${A2()}`, l3 = Q(), s4 = (0, import_react46.useCallback)((p2) => {
    switch (p2.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l3.nextFrame(() => n2({ type: 2, focus: 0 }));
        break;
      case "ArrowUp":
        p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 }), l3.nextFrame(() => n2({ type: 2, focus: 3 }));
        break;
    }
  }, [n2, l3]), u2 = (0, import_react46.useCallback)((p2) => {
    switch (p2.key) {
      case " ":
        p2.preventDefault();
        break;
    }
  }, []), c4 = (0, import_react46.useCallback)((p2) => {
    if (G2(p2.currentTarget))
      return p2.preventDefault();
    t8.disabled || (o6.menuState === 0 ? (n2({ type: 1 }), l3.nextFrame(() => {
      var f2;
      return (f2 = o6.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    })) : (p2.preventDefault(), p2.stopPropagation(), n2({ type: 0 })));
  }, [n2, l3, o6, t8.disabled]), m3 = (0, import_react46.useMemo)(() => ({ open: o6.menuState === 0 }), [o6]), b2 = t8, T2 = { ref: i3, id: a4, type: U2(t8, o6.buttonRef), "aria-haspopup": true, "aria-controls": (y3 = o6.itemsRef.current) == null ? void 0 : y3.id, "aria-expanded": t8.disabled ? void 0 : o6.menuState === 0, onKeyDown: s4, onKeyUp: u2, onClick: c4 };
  return E2({ props: { ...b2, ...T2 }, slot: m3, defaultTag: ci, name: "Menu.Button" });
});
var mi = "div";
var bi = 1 | 2;
var Ti = D2(function(t8, r5) {
  var p2, f2;
  let [o6, n2] = Je("Menu.Items"), i3 = I2(o6.itemsRef, r5), a4 = `headlessui-menu-items-${A2()}`, l3 = Q(), s4 = _(), u2 = (() => s4 !== null ? s4 === 0 : o6.menuState === 0)();
  (0, import_react46.useEffect)(() => {
    let d3 = o6.itemsRef.current;
    !d3 || o6.menuState === 0 && d3 !== document.activeElement && d3.focus({ preventScroll: true });
  }, [o6.menuState, o6.itemsRef]), se({ container: o6.itemsRef.current, enabled: o6.menuState === 0, accept(d3) {
    return d3.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d3.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d3) {
    d3.setAttribute("role", "none");
  } });
  let c4 = (0, import_react46.useCallback)((d3) => {
    var P2;
    switch (l3.dispose(), d3.key) {
      case " ":
        if (o6.searchQuery !== "")
          return d3.preventDefault(), d3.stopPropagation(), n2({ type: 3, value: d3.key });
      case "Enter":
        if (d3.preventDefault(), d3.stopPropagation(), n2({ type: 1 }), o6.activeItemIndex !== null) {
          let { id: C2 } = o6.items[o6.activeItemIndex];
          (P2 = document.getElementById(C2)) == null || P2.click();
        }
        k2().nextFrame(() => {
          var C2;
          return (C2 = o6.buttonRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 2, focus: 2 });
      case "ArrowUp":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 2, focus: 1 });
      case "Home":
      case "PageUp":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 2, focus: 0 });
      case "End":
      case "PageDown":
        return d3.preventDefault(), d3.stopPropagation(), n2({ type: 2, focus: 3 });
      case "Escape":
        d3.preventDefault(), d3.stopPropagation(), n2({ type: 1 }), k2().nextFrame(() => {
          var C2;
          return (C2 = o6.buttonRef.current) == null ? void 0 : C2.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        d3.preventDefault(), d3.stopPropagation();
        break;
      default:
        d3.key.length === 1 && (n2({ type: 3, value: d3.key }), l3.setTimeout(() => n2({ type: 4 }), 350));
        break;
    }
  }, [n2, l3, o6]), m3 = (0, import_react46.useCallback)((d3) => {
    switch (d3.key) {
      case " ":
        d3.preventDefault();
        break;
    }
  }, []), b2 = (0, import_react46.useMemo)(() => ({ open: o6.menuState === 0 }), [o6]), T2 = { "aria-activedescendant": o6.activeItemIndex === null || (p2 = o6.items[o6.activeItemIndex]) == null ? void 0 : p2.id, "aria-labelledby": (f2 = o6.buttonRef.current) == null ? void 0 : f2.id, id: a4, onKeyDown: c4, onKeyUp: m3, role: "menu", tabIndex: 0, ref: i3 };
  return E2({ props: { ...t8, ...T2 }, slot: b2, defaultTag: mi, features: bi, visible: u2, name: "Menu.Items" });
});
var yi = import_react46.Fragment;
function gi(e5) {
  let { disabled: t8 = false, onClick: r5, ...o6 } = e5, [n2, i3] = Je("Menu.Item"), a4 = `headlessui-menu-item-${A2()}`, l3 = n2.activeItemIndex !== null ? n2.items[n2.activeItemIndex].id === a4 : false;
  x3(() => {
    if (n2.menuState !== 0 || !l3)
      return;
    let p2 = k2();
    return p2.requestAnimationFrame(() => {
      var f2, d3;
      (d3 = (f2 = document.getElementById(a4)) == null ? void 0 : f2.scrollIntoView) == null || d3.call(f2, { block: "nearest" });
    }), p2.dispose;
  }, [a4, l3, n2.menuState, n2.activeItemIndex]);
  let s4 = (0, import_react46.useRef)({ disabled: t8 });
  x3(() => {
    s4.current.disabled = t8;
  }, [s4, t8]), x3(() => {
    var p2, f2;
    s4.current.textValue = (f2 = (p2 = document.getElementById(a4)) == null ? void 0 : p2.textContent) == null ? void 0 : f2.toLowerCase();
  }, [s4, a4]), x3(() => (i3({ type: 5, id: a4, dataRef: s4 }), () => i3({ type: 6, id: a4 })), [s4, a4]);
  let u2 = (0, import_react46.useCallback)((p2) => {
    if (t8)
      return p2.preventDefault();
    if (i3({ type: 1 }), k2().nextFrame(() => {
      var f2;
      return (f2 = n2.buttonRef.current) == null ? void 0 : f2.focus({ preventScroll: true });
    }), r5)
      return r5(p2);
  }, [i3, n2.buttonRef, t8, r5]), c4 = (0, import_react46.useCallback)(() => {
    if (t8)
      return i3({ type: 2, focus: 5 });
    i3({ type: 2, focus: 4, id: a4 });
  }, [t8, a4, i3]), m3 = (0, import_react46.useCallback)(() => {
    t8 || l3 || i3({ type: 2, focus: 4, id: a4 });
  }, [t8, l3, a4, i3]), b2 = (0, import_react46.useCallback)(() => {
    t8 || !l3 || i3({ type: 2, focus: 5 });
  }, [t8, l3, i3]), T2 = (0, import_react46.useMemo)(() => ({ active: l3, disabled: t8 }), [l3, t8]);
  return E2({ props: { ...o6, ...{ id: a4, role: "menuitem", tabIndex: t8 === true ? void 0 : -1, "aria-disabled": t8 === true ? true : void 0, disabled: void 0, onClick: u2, onFocus: c4, onPointerMove: m3, onMouseMove: m3, onPointerLeave: b2, onMouseLeave: b2 } }, slot: T2, defaultTag: yi, name: "Menu.Item" });
}
Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = { [0]: (e5) => ({ ...e5, popoverState: S2(e5.popoverState, { [0]: 1, [1]: 0 }) }), [1](e5) {
  return e5.popoverState === 1 ? e5 : { ...e5, popoverState: 1 };
}, [2](e5, t8) {
  return e5.button === t8.button ? e5 : { ...e5, button: t8.button };
}, [3](e5, t8) {
  return e5.buttonId === t8.buttonId ? e5 : { ...e5, buttonId: t8.buttonId };
}, [4](e5, t8) {
  return e5.panel === t8.panel ? e5 : { ...e5, panel: t8.panel };
}, [5](e5, t8) {
  return e5.panelId === t8.panelId ? e5 : { ...e5, panelId: t8.panelId };
} };
var Ut = (0, import_react47.createContext)(null);
Ut.displayName = "PopoverContext";
function ot(e5) {
  let t8 = (0, import_react47.useContext)(Ut);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, ot), r5;
  }
  return t8;
}
var Bt = (0, import_react47.createContext)(null);
Bt.displayName = "PopoverAPIContext";
function Mo(e5) {
  let t8 = (0, import_react47.useContext)(Bt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Mo), r5;
  }
  return t8;
}
var Nt = (0, import_react47.createContext)(null);
Nt.displayName = "PopoverGroupContext";
function Fo() {
  return (0, import_react47.useContext)(Nt);
}
var Wt = (0, import_react47.createContext)(null);
Wt.displayName = "PopoverPanelContext";
function Ri() {
  return (0, import_react47.useContext)(Wt);
}
function Ei(e5, t8) {
  return S2(t8.type, vi, e5, t8);
}
var Ci = "div";
function Te(e5) {
  let t8 = `headlessui-popover-button-${A2()}`, r5 = `headlessui-popover-panel-${A2()}`, o6 = (0, import_react47.useReducer)(Ei, { popoverState: 1, button: null, buttonId: t8, panel: null, panelId: r5 }), [{ popoverState: n2, button: i3, panel: a4 }, l3] = o6;
  (0, import_react47.useEffect)(() => l3({ type: 3, buttonId: t8 }), [t8, l3]), (0, import_react47.useEffect)(() => l3({ type: 5, panelId: r5 }), [r5, l3]);
  let s4 = (0, import_react47.useMemo)(() => ({ buttonId: t8, panelId: r5, close: () => l3({ type: 1 }) }), [t8, r5, l3]), u2 = Fo(), c4 = u2 == null ? void 0 : u2.registerPopover, m3 = (0, import_react47.useCallback)(() => {
    var p2;
    return (p2 = u2 == null ? void 0 : u2.isFocusWithinPopoverGroup()) != null ? p2 : (i3 == null ? void 0 : i3.contains(document.activeElement)) || (a4 == null ? void 0 : a4.contains(document.activeElement));
  }, [u2, i3, a4]);
  (0, import_react47.useEffect)(() => c4 == null ? void 0 : c4(s4), [c4, s4]), w2("focus", () => {
    n2 === 0 && (m3() || !i3 || !a4 || l3({ type: 1 }));
  }, true), w2("mousedown", (p2) => {
    let f2 = p2.target;
    n2 === 0 && ((i3 == null ? void 0 : i3.contains(f2)) || (a4 == null ? void 0 : a4.contains(f2)) || (l3({ type: 1 }), de(f2, 1) || (p2.preventDefault(), i3 == null || i3.focus())));
  });
  let b2 = (0, import_react47.useCallback)((p2) => {
    l3({ type: 1 });
    let f2 = (() => p2 ? p2 instanceof HTMLElement ? p2 : p2.current instanceof HTMLElement ? p2.current : i3 : i3)();
    f2 == null || f2.focus();
  }, [l3, i3]), T2 = (0, import_react47.useMemo)(() => ({ close: b2 }), [b2]), y3 = (0, import_react47.useMemo)(() => ({ open: n2 === 0, close: b2 }), [n2, b2]);
  return import_react47.default.createElement(Ut.Provider, { value: o6 }, import_react47.default.createElement(Bt.Provider, { value: T2 }, import_react47.default.createElement(W2, { value: S2(n2, { [0]: 0, [1]: 1 }) }, E2({ props: e5, slot: y3, defaultTag: Ci, name: "Popover" }))));
}
var Si = "button";
var Ai = D2(function(t8, r5) {
  let [o6, n2] = ot("Popover.Button"), i3 = (0, import_react47.useRef)(null), a4 = Fo(), l3 = a4 == null ? void 0 : a4.closeOthers, s4 = Ri(), u2 = s4 === null ? false : s4 === o6.panelId, c4 = I2(i3, r5, u2 ? null : (g2) => n2({ type: 2, button: g2 })), m3 = I2(i3, r5), b2 = (0, import_react47.useRef)(null), T2 = (0, import_react47.useRef)(typeof window == "undefined" ? null : document.activeElement);
  w2("focus", () => {
    T2.current = b2.current, b2.current = document.activeElement;
  }, true);
  let y3 = (0, import_react47.useCallback)((g2) => {
    var v3, h2;
    if (u2) {
      if (o6.popoverState === 1)
        return;
      switch (g2.key) {
        case " ":
        case "Enter":
          g2.preventDefault(), g2.stopPropagation(), n2({ type: 1 }), (v3 = o6.button) == null || v3.focus();
          break;
      }
    } else
      switch (g2.key) {
        case " ":
        case "Enter":
          g2.preventDefault(), g2.stopPropagation(), o6.popoverState === 1 && (l3 == null || l3(o6.buttonId)), n2({ type: 0 });
          break;
        case "Escape":
          if (o6.popoverState !== 0)
            return l3 == null ? void 0 : l3(o6.buttonId);
          if (!i3.current || !i3.current.contains(document.activeElement))
            return;
          g2.preventDefault(), g2.stopPropagation(), n2({ type: 1 });
          break;
        case "Tab":
          if (o6.popoverState !== 0 || !o6.panel || !o6.button)
            return;
          if (g2.shiftKey) {
            if (!T2.current || ((h2 = o6.button) == null ? void 0 : h2.contains(T2.current)) || o6.panel.contains(T2.current))
              return;
            let O2 = xe(), L2 = O2.indexOf(T2.current);
            if (O2.indexOf(o6.button) > L2)
              return;
            g2.preventDefault(), g2.stopPropagation(), M2(o6.panel, 8);
          } else
            g2.preventDefault(), g2.stopPropagation(), M2(o6.panel, 1);
          break;
      }
  }, [n2, o6.popoverState, o6.buttonId, o6.button, o6.panel, i3, l3, u2]), p2 = (0, import_react47.useCallback)((g2) => {
    var v3;
    if (!u2 && (g2.key === " " && g2.preventDefault(), o6.popoverState === 0 && !!o6.panel && !!o6.button))
      switch (g2.key) {
        case "Tab":
          if (!T2.current || ((v3 = o6.button) == null ? void 0 : v3.contains(T2.current)) || o6.panel.contains(T2.current))
            return;
          let h2 = xe(), O2 = h2.indexOf(T2.current);
          if (h2.indexOf(o6.button) > O2)
            return;
          g2.preventDefault(), g2.stopPropagation(), M2(o6.panel, 8);
          break;
      }
  }, [o6.popoverState, o6.panel, o6.button, u2]), f2 = (0, import_react47.useCallback)((g2) => {
    var v3, h2;
    G2(g2.currentTarget) || t8.disabled || (u2 ? (n2({ type: 1 }), (v3 = o6.button) == null || v3.focus()) : (o6.popoverState === 1 && (l3 == null || l3(o6.buttonId)), (h2 = o6.button) == null || h2.focus(), n2({ type: 0 })));
  }, [n2, o6.button, o6.popoverState, o6.buttonId, t8.disabled, l3, u2]), d3 = (0, import_react47.useMemo)(() => ({ open: o6.popoverState === 0 }), [o6]), P2 = U2(t8, i3), C2 = t8, R2 = u2 ? { ref: m3, type: P2, onKeyDown: y3, onClick: f2 } : { ref: c4, id: o6.buttonId, type: P2, "aria-expanded": t8.disabled ? void 0 : o6.popoverState === 0, "aria-controls": o6.panel ? o6.panelId : void 0, onKeyDown: y3, onKeyUp: p2, onClick: f2 };
  return E2({ props: { ...C2, ...R2 }, slot: d3, defaultTag: Si, name: "Popover.Button" });
});
var hi = "div";
var Oi = 1 | 2;
var Ii = D2(function(t8, r5) {
  let [{ popoverState: o6 }, n2] = ot("Popover.Overlay"), i3 = I2(r5), a4 = `headlessui-popover-overlay-${A2()}`, l3 = _(), s4 = (() => l3 !== null ? l3 === 0 : o6 === 0)(), u2 = (0, import_react47.useCallback)((T2) => {
    if (G2(T2.currentTarget))
      return T2.preventDefault();
    n2({ type: 1 });
  }, [n2]), c4 = (0, import_react47.useMemo)(() => ({ open: o6 === 0 }), [o6]);
  return E2({ props: { ...t8, ...{ ref: i3, id: a4, "aria-hidden": true, onClick: u2 } }, slot: c4, defaultTag: hi, features: Oi, visible: s4, name: "Popover.Overlay" });
});
var Li = "div";
var Di = 1 | 2;
var Mi = D2(function(t8, r5) {
  let { focus: o6 = false, ...n2 } = t8, [i3, a4] = ot("Popover.Panel"), { close: l3 } = Mo("Popover.Panel"), s4 = (0, import_react47.useRef)(null), u2 = I2(s4, r5, (p2) => {
    a4({ type: 4, panel: p2 });
  }), c4 = _(), m3 = (() => c4 !== null ? c4 === 0 : i3.popoverState === 0)(), b2 = (0, import_react47.useCallback)((p2) => {
    var f2;
    switch (p2.key) {
      case "Escape":
        if (i3.popoverState !== 0 || !s4.current || !s4.current.contains(document.activeElement))
          return;
        p2.preventDefault(), p2.stopPropagation(), a4({ type: 1 }), (f2 = i3.button) == null || f2.focus();
        break;
    }
  }, [i3, s4, a4]);
  (0, import_react47.useEffect)(() => () => a4({ type: 4, panel: null }), [a4]), (0, import_react47.useEffect)(() => {
    var p2;
    t8.static || i3.popoverState === 1 && ((p2 = t8.unmount) != null ? p2 : true) && a4({ type: 4, panel: null });
  }, [i3.popoverState, t8.unmount, t8.static, a4]), (0, import_react47.useEffect)(() => {
    if (!o6 || i3.popoverState !== 0 || !s4.current)
      return;
    let p2 = document.activeElement;
    s4.current.contains(p2) || M2(s4.current, 1);
  }, [o6, s4, i3.popoverState]), w2("keydown", (p2) => {
    var d3;
    if (i3.popoverState !== 0 || !s4.current || p2.key !== "Tab" || !document.activeElement || !s4.current || !s4.current.contains(document.activeElement))
      return;
    p2.preventDefault();
    let f2 = M2(s4.current, p2.shiftKey ? 2 : 4);
    if (f2 === 3)
      return (d3 = i3.button) == null ? void 0 : d3.focus();
    if (f2 === 1) {
      if (!i3.button)
        return;
      let P2 = xe(), C2 = P2.indexOf(i3.button), R2 = P2.splice(C2 + 1).filter((g2) => {
        var v3;
        return !((v3 = s4.current) == null ? void 0 : v3.contains(g2));
      });
      M2(R2, 1) === 0 && M2(document.body, 1);
    }
  }), w2("focus", () => {
    var p2;
    !o6 || i3.popoverState === 0 && (!s4.current || ((p2 = s4.current) == null ? void 0 : p2.contains(document.activeElement)) || a4({ type: 1 }));
  }, true);
  let T2 = (0, import_react47.useMemo)(() => ({ open: i3.popoverState === 0, close: l3 }), [i3, l3]), y3 = { ref: u2, id: i3.panelId, onKeyDown: b2 };
  return import_react47.default.createElement(Wt.Provider, { value: i3.panelId }, E2({ props: { ...n2, ...y3 }, slot: T2, defaultTag: Li, features: Di, visible: m3, name: "Popover.Panel" }));
});
var Fi = "div";
function wi(e5) {
  let t8 = (0, import_react47.useRef)(null), [r5, o6] = (0, import_react47.useState)([]), n2 = (0, import_react47.useCallback)((b2) => {
    o6((T2) => {
      let y3 = T2.indexOf(b2);
      if (y3 !== -1) {
        let p2 = T2.slice();
        return p2.splice(y3, 1), p2;
      }
      return T2;
    });
  }, [o6]), i3 = (0, import_react47.useCallback)((b2) => (o6((T2) => [...T2, b2]), () => n2(b2)), [o6, n2]), a4 = (0, import_react47.useCallback)(() => {
    var T2;
    let b2 = document.activeElement;
    return ((T2 = t8.current) == null ? void 0 : T2.contains(b2)) ? true : r5.some((y3) => {
      var p2, f2;
      return ((p2 = document.getElementById(y3.buttonId)) == null ? void 0 : p2.contains(b2)) || ((f2 = document.getElementById(y3.panelId)) == null ? void 0 : f2.contains(b2));
    });
  }, [t8, r5]), l3 = (0, import_react47.useCallback)((b2) => {
    for (let T2 of r5)
      T2.buttonId !== b2 && T2.close();
  }, [r5]), s4 = (0, import_react47.useMemo)(() => ({ registerPopover: i3, unregisterPopover: n2, isFocusWithinPopoverGroup: a4, closeOthers: l3 }), [i3, n2, a4, l3]), u2 = (0, import_react47.useMemo)(() => ({}), []), c4 = { ref: t8 }, m3 = e5;
  return import_react47.default.createElement(Nt.Provider, { value: s4 }, E2({ props: { ...m3, ...c4 }, slot: u2, defaultTag: Fi, name: "Popover.Group" }));
}
Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;
function wo(e5 = 0) {
  let [t8, r5] = (0, import_react49.useState)(e5), o6 = (0, import_react49.useCallback)((l3) => r5((s4) => s4 | l3), [r5]), n2 = (0, import_react49.useCallback)((l3) => Boolean(t8 & l3), [t8]), i3 = (0, import_react49.useCallback)((l3) => r5((s4) => s4 & ~l3), [r5]), a4 = (0, import_react49.useCallback)((l3) => r5((s4) => s4 ^ l3), [r5]);
  return { addFlag: o6, hasFlag: n2, removeFlag: i3, toggleFlag: a4 };
}
var _o = (0, import_react50.createContext)(null);
function Go() {
  let e5 = (0, import_react50.useContext)(_o);
  if (e5 === null) {
    let t8 = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t8, Go), t8;
  }
  return e5;
}
function Ae() {
  let [e5, t8] = (0, import_react50.useState)([]);
  return [e5.length > 0 ? e5.join(" ") : void 0, (0, import_react50.useMemo)(() => function(o6) {
    let n2 = (0, import_react50.useCallback)((a4) => (t8((l3) => [...l3, a4]), () => t8((l3) => {
      let s4 = l3.slice(), u2 = s4.indexOf(a4);
      return u2 !== -1 && s4.splice(u2, 1), s4;
    })), []), i3 = (0, import_react50.useMemo)(() => ({ register: n2, slot: o6.slot, name: o6.name, props: o6.props }), [n2, o6.slot, o6.name, o6.props]);
    return import_react50.default.createElement(_o.Provider, { value: i3 }, o6.children);
  }, [t8])];
}
var Ni = "label";
function nt(e5) {
  let { passive: t8 = false, ...r5 } = e5, o6 = Go(), n2 = `headlessui-label-${A2()}`;
  x3(() => o6.register(n2), [n2, o6.register]);
  let i3 = { ...o6.props, id: n2 }, a4 = { ...r5, ...i3 };
  return t8 && delete a4.onClick, E2({ props: a4, slot: o6.slot || {}, defaultTag: Ni, name: o6.name || "Label" });
}
var Vi = { [0](e5, t8) {
  return { ...e5, options: [...e5.options, { id: t8.id, element: t8.element, propsRef: t8.propsRef }] };
}, [1](e5, t8) {
  let r5 = e5.options.slice(), o6 = e5.options.findIndex((n2) => n2.id === t8.id);
  return o6 === -1 ? e5 : (r5.splice(o6, 1), { ...e5, options: r5 });
} };
var jt = (0, import_react48.createContext)(null);
jt.displayName = "RadioGroupContext";
function Ho(e5) {
  let t8 = (0, import_react48.useContext)(jt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Ho), r5;
  }
  return t8;
}
function $i(e5, t8) {
  return S2(t8.type, Vi, e5, t8);
}
var Qi = "div";
function lt(e5) {
  let { value: t8, onChange: r5, disabled: o6 = false, ...n2 } = e5, [{ options: i3 }, a4] = (0, import_react48.useReducer)($i, { options: [] }), [l3, s4] = Ae(), [u2, c4] = re(), m3 = `headlessui-radiogroup-${A2()}`, b2 = (0, import_react48.useRef)(null), T2 = (0, import_react48.useMemo)(() => i3.find((R2) => !R2.propsRef.current.disabled), [i3]), y3 = (0, import_react48.useMemo)(() => i3.some((R2) => R2.propsRef.current.value === t8), [i3, t8]), p2 = (0, import_react48.useCallback)((R2) => {
    var v3;
    if (o6 || R2 === t8)
      return false;
    let g2 = (v3 = i3.find((h2) => h2.propsRef.current.value === R2)) == null ? void 0 : v3.propsRef.current;
    return (g2 == null ? void 0 : g2.disabled) ? false : (r5(R2), true);
  }, [r5, t8, o6, i3]);
  se({ container: b2.current, accept(R2) {
    return R2.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : R2.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(R2) {
    R2.setAttribute("role", "none");
  } });
  let f2 = (0, import_react48.useCallback)((R2) => {
    if (!b2.current)
      return;
    let v3 = i3.filter((h2) => h2.propsRef.current.disabled === false).map((h2) => h2.element.current);
    switch (R2.key) {
      case "ArrowLeft":
      case "ArrowUp":
        if (R2.preventDefault(), R2.stopPropagation(), M2(v3, 2 | 16) === 2) {
          let O2 = i3.find((L2) => L2.element.current === document.activeElement);
          O2 && p2(O2.propsRef.current.value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (R2.preventDefault(), R2.stopPropagation(), M2(v3, 4 | 16) === 2) {
          let O2 = i3.find((L2) => L2.element.current === document.activeElement);
          O2 && p2(O2.propsRef.current.value);
        }
        break;
      case " ":
        {
          R2.preventDefault(), R2.stopPropagation();
          let h2 = i3.find((O2) => O2.element.current === document.activeElement);
          h2 && p2(h2.propsRef.current.value);
        }
        break;
    }
  }, [b2, i3, p2]), d3 = (0, import_react48.useCallback)((R2) => (a4({ type: 0, ...R2 }), () => a4({ type: 1, id: R2.id })), [a4]), P2 = (0, import_react48.useMemo)(() => ({ registerOption: d3, firstOption: T2, containsCheckedOption: y3, change: p2, disabled: o6, value: t8 }), [d3, T2, y3, p2, o6, t8]), C2 = { ref: b2, id: m3, role: "radiogroup", "aria-labelledby": l3, "aria-describedby": u2, onKeyDown: f2 };
  return import_react48.default.createElement(c4, { name: "RadioGroup.Description" }, import_react48.default.createElement(s4, { name: "RadioGroup.Label" }, import_react48.default.createElement(jt.Provider, { value: P2 }, E2({ props: { ...n2, ...C2 }, defaultTag: Qi, name: "RadioGroup" }))));
}
var qi = "div";
function zi(e5) {
  let t8 = (0, import_react48.useRef)(null), r5 = `headlessui-radiogroup-option-${A2()}`, [o6, n2] = Ae(), [i3, a4] = re(), { addFlag: l3, removeFlag: s4, hasFlag: u2 } = wo(1), { value: c4, disabled: m3 = false, ...b2 } = e5, T2 = (0, import_react48.useRef)({ value: c4, disabled: m3 });
  x3(() => {
    T2.current.value = c4;
  }, [c4, T2]), x3(() => {
    T2.current.disabled = m3;
  }, [m3, T2]);
  let { registerOption: y3, disabled: p2, change: f2, firstOption: d3, containsCheckedOption: P2, value: C2 } = Ho("RadioGroup.Option");
  x3(() => y3({ id: r5, element: t8, propsRef: T2 }), [r5, y3, t8, e5]);
  let R2 = (0, import_react48.useCallback)(() => {
    var V2;
    !f2(c4) || (l3(2), (V2 = t8.current) == null || V2.focus());
  }, [l3, f2, c4]), g2 = (0, import_react48.useCallback)(() => l3(2), [l3]), v3 = (0, import_react48.useCallback)(() => s4(2), [s4]), h2 = (d3 == null ? void 0 : d3.id) === r5, O2 = p2 || m3, L2 = C2 === c4, N3 = { ref: t8, id: r5, role: "radio", "aria-checked": L2 ? "true" : "false", "aria-labelledby": o6, "aria-describedby": i3, "aria-disabled": O2 ? true : void 0, tabIndex: (() => O2 ? -1 : L2 || !P2 && h2 ? 0 : -1)(), onClick: O2 ? void 0 : R2, onFocus: O2 ? void 0 : g2, onBlur: O2 ? void 0 : v3 }, K = (0, import_react48.useMemo)(() => ({ checked: L2, disabled: O2, active: u2(2) }), [L2, O2, u2]);
  return import_react48.default.createElement(a4, { name: "RadioGroup.Description" }, import_react48.default.createElement(n2, { name: "RadioGroup.Label" }, E2({ props: { ...b2, ...N3 }, slot: K, defaultTag: qi, name: "RadioGroup.Option" })));
}
lt.Option = zi;
lt.Label = nt;
lt.Description = me;
var $t = (0, import_react51.createContext)(null);
$t.displayName = "GroupContext";
var tl = import_react51.Fragment;
function ol(e5) {
  let [t8, r5] = (0, import_react51.useState)(null), [o6, n2] = Ae(), [i3, a4] = re(), l3 = (0, import_react51.useMemo)(() => ({ switch: t8, setSwitch: r5, labelledby: o6, describedby: i3 }), [t8, r5, o6, i3]);
  return import_react51.default.createElement(a4, { name: "Switch.Description" }, import_react51.default.createElement(n2, { name: "Switch.Label", props: { onClick() {
    !t8 || (t8.click(), t8.focus({ preventScroll: true }));
  } } }, import_react51.default.createElement($t.Provider, { value: l3 }, E2({ props: e5, defaultTag: tl, name: "Switch.Group" }))));
}
var rl = "button";
function Qt(e5) {
  let { checked: t8, onChange: r5, ...o6 } = e5, n2 = `headlessui-switch-${A2()}`, i3 = (0, import_react51.useContext)($t), a4 = (0, import_react51.useRef)(null), l3 = I2(a4, i3 === null ? null : i3.setSwitch), s4 = (0, import_react51.useCallback)(() => r5(!t8), [r5, t8]), u2 = (0, import_react51.useCallback)((y3) => {
    if (G2(y3.currentTarget))
      return y3.preventDefault();
    y3.preventDefault(), s4();
  }, [s4]), c4 = (0, import_react51.useCallback)((y3) => {
    y3.key !== "Tab" && y3.preventDefault(), y3.key === " " && s4();
  }, [s4]), m3 = (0, import_react51.useCallback)((y3) => y3.preventDefault(), []), b2 = (0, import_react51.useMemo)(() => ({ checked: t8 }), [t8]), T2 = { id: n2, ref: l3, role: "switch", type: U2(e5, a4), tabIndex: 0, "aria-checked": t8, "aria-labelledby": i3 == null ? void 0 : i3.labelledby, "aria-describedby": i3 == null ? void 0 : i3.describedby, onClick: u2, onKeyUp: c4, onKeyPress: m3 };
  return E2({ props: { ...o6, ...T2 }, slot: b2, defaultTag: rl, name: "Switch" });
}
Qt.Group = ol;
Qt.Label = nt;
Qt.Description = me;
var ul = { [0](e5, t8) {
  return e5.selectedIndex === t8.index ? e5 : { ...e5, selectedIndex: t8.index };
}, [1](e5, t8) {
  return e5.orientation === t8.orientation ? e5 : { ...e5, orientation: t8.orientation };
}, [2](e5, t8) {
  return e5.activation === t8.activation ? e5 : { ...e5, activation: t8.activation };
}, [3](e5, t8) {
  return e5.tabs.includes(t8.tab) ? e5 : { ...e5, tabs: [...e5.tabs, t8.tab] };
}, [4](e5, t8) {
  return { ...e5, tabs: e5.tabs.filter((r5) => r5 !== t8.tab) };
}, [5](e5, t8) {
  return e5.panels.includes(t8.panel) ? e5 : { ...e5, panels: [...e5.panels, t8.panel] };
}, [6](e5, t8) {
  return { ...e5, panels: e5.panels.filter((r5) => r5 !== t8.panel) };
}, [7](e5) {
  return { ...e5 };
} };
var zt = (0, import_react52.createContext)(null);
zt.displayName = "TabsContext";
function Le(e5) {
  let t8 = (0, import_react52.useContext)(zt);
  if (t8 === null) {
    let r5 = new Error(`<${e5} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r5, Le), r5;
  }
  return t8;
}
function pl(e5, t8) {
  return S2(t8.type, ul, e5, t8);
}
var dl = import_react52.Fragment;
function cl(e5) {
  let { defaultIndex: t8 = 0, vertical: r5 = false, manual: o6 = false, onChange: n2, selectedIndex: i3 = null, ...a4 } = e5, l3 = r5 ? "vertical" : "horizontal", s4 = o6 ? "manual" : "auto", [u2, c4] = (0, import_react52.useReducer)(pl, { selectedIndex: null, tabs: [], panels: [], orientation: l3, activation: s4 }), m3 = (0, import_react52.useMemo)(() => ({ selectedIndex: u2.selectedIndex }), [u2.selectedIndex]), b2 = (0, import_react52.useRef)(() => {
  });
  (0, import_react52.useEffect)(() => {
    c4({ type: 1, orientation: l3 });
  }, [l3]), (0, import_react52.useEffect)(() => {
    c4({ type: 2, activation: s4 });
  }, [s4]), (0, import_react52.useEffect)(() => {
    typeof n2 == "function" && (b2.current = n2);
  }, [n2]), (0, import_react52.useEffect)(() => {
    if (u2.tabs.length <= 0 || i3 === null && u2.selectedIndex !== null)
      return;
    let p2 = u2.tabs.map((P2) => P2.current).filter(Boolean), f2 = p2.filter((P2) => !P2.hasAttribute("disabled")), d3 = i3 != null ? i3 : t8;
    if (d3 < 0)
      c4({ type: 0, index: p2.indexOf(f2[0]) });
    else if (d3 > u2.tabs.length)
      c4({ type: 0, index: p2.indexOf(f2[f2.length - 1]) });
    else {
      let P2 = p2.slice(0, d3), R2 = [...p2.slice(d3), ...P2].find((g2) => f2.includes(g2));
      if (!R2)
        return;
      c4({ type: 0, index: p2.indexOf(R2) });
    }
  }, [t8, i3, u2.tabs, u2.selectedIndex]);
  let T2 = (0, import_react52.useRef)(u2.selectedIndex);
  (0, import_react52.useEffect)(() => {
    T2.current = u2.selectedIndex;
  }, [u2.selectedIndex]);
  let y3 = (0, import_react52.useMemo)(() => [u2, { dispatch: c4, change(p2) {
    T2.current !== p2 && b2.current(p2), T2.current = p2, c4({ type: 0, index: p2 });
  } }], [u2, c4]);
  return import_react52.default.createElement(zt.Provider, { value: y3 }, E2({ props: { ...a4 }, slot: m3, defaultTag: dl, name: "Tabs" }));
}
var fl = "div";
function ml(e5) {
  let [{ selectedIndex: t8, orientation: r5 }] = Le("Tab.List"), o6 = { selectedIndex: t8 };
  return E2({ props: { ...e5, ...{ role: "tablist", "aria-orientation": r5 } }, slot: o6, defaultTag: fl, name: "Tabs.List" });
}
var bl = "button";
function De(e5) {
  var C2, R2;
  let t8 = `headlessui-tabs-tab-${A2()}`, [{ selectedIndex: r5, tabs: o6, panels: n2, orientation: i3, activation: a4 }, { dispatch: l3, change: s4 }] = Le(De.name), u2 = (0, import_react52.useRef)(null), c4 = I2(u2, (g2) => {
    !g2 || l3({ type: 7 });
  });
  x3(() => (l3({ type: 3, tab: u2 }), () => l3({ type: 4, tab: u2 })), [l3, u2]);
  let m3 = o6.indexOf(u2), b2 = m3 === r5, T2 = (0, import_react52.useCallback)((g2) => {
    let v3 = o6.map((h2) => h2.current).filter(Boolean);
    if (g2.key === " " || g2.key === "Enter") {
      g2.preventDefault(), g2.stopPropagation(), s4(m3);
      return;
    }
    switch (g2.key) {
      case "Home":
      case "PageUp":
        return g2.preventDefault(), g2.stopPropagation(), M2(v3, 1);
      case "End":
      case "PageDown":
        return g2.preventDefault(), g2.stopPropagation(), M2(v3, 8);
    }
    return S2(i3, { vertical() {
      if (g2.key === "ArrowUp")
        return M2(v3, 2 | 16);
      if (g2.key === "ArrowDown")
        return M2(v3, 4 | 16);
    }, horizontal() {
      if (g2.key === "ArrowLeft")
        return M2(v3, 2 | 16);
      if (g2.key === "ArrowRight")
        return M2(v3, 4 | 16);
    } });
  }, [o6, i3, m3, s4]), y3 = (0, import_react52.useCallback)(() => {
    var g2;
    (g2 = u2.current) == null || g2.focus();
  }, [u2]), p2 = (0, import_react52.useCallback)(() => {
    var g2;
    (g2 = u2.current) == null || g2.focus(), s4(m3);
  }, [s4, m3, u2]), f2 = (0, import_react52.useMemo)(() => ({ selected: b2 }), [b2]), d3 = { ref: c4, onKeyDown: T2, onFocus: a4 === "manual" ? y3 : p2, onClick: p2, id: t8, role: "tab", type: U2(e5, u2), "aria-controls": (R2 = (C2 = n2[m3]) == null ? void 0 : C2.current) == null ? void 0 : R2.id, "aria-selected": b2, tabIndex: b2 ? 0 : -1 };
  return E2({ props: { ...e5, ...d3 }, slot: f2, defaultTag: bl, name: "Tabs.Tab" });
}
var Tl = "div";
function yl(e5) {
  let [{ selectedIndex: t8 }] = Le("Tab.Panels"), r5 = (0, import_react52.useMemo)(() => ({ selectedIndex: t8 }), [t8]);
  return E2({ props: e5, slot: r5, defaultTag: Tl, name: "Tabs.Panels" });
}
var gl = "div";
var Pl = 1 | 2;
function xl(e5) {
  var T2, y3;
  let [{ selectedIndex: t8, tabs: r5, panels: o6 }, { dispatch: n2 }] = Le("Tab.Panel"), i3 = `headlessui-tabs-panel-${A2()}`, a4 = (0, import_react52.useRef)(null), l3 = I2(a4, (p2) => {
    !p2 || n2({ type: 7 });
  });
  x3(() => (n2({ type: 5, panel: a4 }), () => n2({ type: 6, panel: a4 })), [n2, a4]);
  let s4 = o6.indexOf(a4), u2 = s4 === t8, c4 = (0, import_react52.useMemo)(() => ({ selected: u2 }), [u2]), m3 = { ref: l3, id: i3, role: "tabpanel", "aria-labelledby": (y3 = (T2 = r5[s4]) == null ? void 0 : T2.current) == null ? void 0 : y3.id, tabIndex: u2 ? 0 : -1 };
  return E2({ props: { ...e5, ...m3 }, slot: c4, defaultTag: gl, features: Pl, visible: u2, name: "Tabs.Panel" });
}
De.Group = cl;
De.List = ml;
De.Panels = yl;
De.Panel = xl;
function Bo() {
  let e5 = (0, import_react54.useRef)(true);
  return (0, import_react54.useEffect)(() => {
    e5.current = false;
  }, []), e5.current;
}
function No(e5) {
  let t8 = { called: false };
  return (...r5) => {
    if (!t8.called)
      return t8.called = true, e5(...r5);
  };
}
function Yt(e5, ...t8) {
  e5 && t8.length > 0 && e5.classList.add(...t8);
}
function ut(e5, ...t8) {
  e5 && t8.length > 0 && e5.classList.remove(...t8);
}
function El(e5, t8) {
  let r5 = k2();
  if (!e5)
    return r5.dispose;
  let { transitionDuration: o6, transitionDelay: n2 } = getComputedStyle(e5), [i3, a4] = [o6, n2].map((l3) => {
    let [s4 = 0] = l3.split(",").filter(Boolean).map((u2) => u2.includes("ms") ? parseFloat(u2) : parseFloat(u2) * 1e3).sort((u2, c4) => c4 - u2);
    return s4;
  });
  return i3 !== 0 ? r5.setTimeout(() => {
    t8("finished");
  }, i3 + a4) : t8("finished"), r5.add(() => t8("cancelled")), r5.dispose;
}
function Xt(e5, t8, r5, o6, n2, i3) {
  let a4 = k2(), l3 = i3 !== void 0 ? No(i3) : () => {
  };
  return ut(e5, ...n2), Yt(e5, ...t8, ...r5), a4.nextFrame(() => {
    ut(e5, ...r5), Yt(e5, ...o6), a4.add(El(e5, (s4) => (ut(e5, ...o6, ...t8), Yt(e5, ...n2), l3(s4))));
  }), a4.add(() => ut(e5, ...t8, ...r5, ...o6, ...n2)), a4.add(() => l3("cancelled")), a4.dispose;
}
function le(e5 = "") {
  return (0, import_react53.useMemo)(() => e5.split(" ").filter((t8) => t8.trim().length > 1), [e5]);
}
var dt = (0, import_react53.createContext)(null);
dt.displayName = "TransitionContext";
function Cl() {
  let e5 = (0, import_react53.useContext)(dt);
  if (e5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
function Sl() {
  let e5 = (0, import_react53.useContext)(ct);
  if (e5 === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e5;
}
var ct = (0, import_react53.createContext)(null);
ct.displayName = "NestingContext";
function ft(e5) {
  return "children" in e5 ? ft(e5.children) : e5.current.filter(({ state: t8 }) => t8 === "visible").length > 0;
}
function $o(e5) {
  let t8 = (0, import_react53.useRef)(e5), r5 = (0, import_react53.useRef)([]), o6 = Be();
  (0, import_react53.useEffect)(() => {
    t8.current = e5;
  }, [e5]);
  let n2 = (0, import_react53.useCallback)((a4, l3 = 1) => {
    var u2;
    let s4 = r5.current.findIndex(({ id: c4 }) => c4 === a4);
    s4 !== -1 && (S2(l3, { [0]() {
      r5.current.splice(s4, 1);
    }, [1]() {
      r5.current[s4].state = "hidden";
    } }), !ft(r5) && o6.current && ((u2 = t8.current) == null || u2.call(t8)));
  }, [t8, o6, r5]), i3 = (0, import_react53.useCallback)((a4) => {
    let l3 = r5.current.find(({ id: s4 }) => s4 === a4);
    return l3 ? l3.state !== "visible" && (l3.state = "visible") : r5.current.push({ id: a4, state: "visible" }), () => n2(a4, 0);
  }, [r5, n2]);
  return (0, import_react53.useMemo)(() => ({ children: r5, register: i3, unregister: n2 }), [i3, n2, r5]);
}
function Al() {
}
var hl = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qo(e5) {
  var r5;
  let t8 = {};
  for (let o6 of hl)
    t8[o6] = (r5 = e5[o6]) != null ? r5 : Al;
  return t8;
}
function Ol(e5) {
  let t8 = (0, import_react53.useRef)(Qo(e5));
  return (0, import_react53.useEffect)(() => {
    t8.current = Qo(e5);
  }, [e5]), t8;
}
var Il = "div";
var qo = 1;
function zo(e5) {
  let { beforeEnter: t8, afterEnter: r5, beforeLeave: o6, afterLeave: n2, enter: i3, enterFrom: a4, enterTo: l3, entered: s4, leave: u2, leaveFrom: c4, leaveTo: m3, ...b2 } = e5, T2 = (0, import_react53.useRef)(null), [y3, p2] = (0, import_react53.useState)("visible"), f2 = b2.unmount ? 0 : 1, { show: d3, appear: P2, initial: C2 } = Cl(), { register: R2, unregister: g2 } = Sl(), v3 = A2(), h2 = (0, import_react53.useRef)(false), O2 = $o(() => {
    h2.current || (p2("hidden"), g2(v3), X.current.afterLeave());
  });
  x3(() => {
    if (!!v3)
      return R2(v3);
  }, [R2, v3]), x3(() => {
    if (f2 === 1 && !!v3) {
      if (d3 && y3 !== "visible") {
        p2("visible");
        return;
      }
      S2(y3, { hidden: () => g2(v3), visible: () => R2(v3) });
    }
  }, [y3, v3, R2, g2, d3, f2]);
  let L2 = le(i3), N3 = le(a4), K = le(l3), V2 = le(s4), Fe = le(u2), ge = le(c4), we = le(m3), X = Ol({ beforeEnter: t8, afterEnter: r5, beforeLeave: o6, afterLeave: n2 }), F2 = q2();
  (0, import_react53.useEffect)(() => {
    if (F2 && y3 === "visible" && T2.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T2, y3, F2]);
  let $2 = C2 && !P2;
  x3(() => {
    let bt = T2.current;
    if (!!bt && !$2)
      return h2.current = true, d3 && X.current.beforeEnter(), d3 || X.current.beforeLeave(), d3 ? Xt(bt, L2, N3, K, V2, (Tt) => {
        h2.current = false, Tt === "finished" && X.current.afterEnter();
      }) : Xt(bt, Fe, ge, we, V2, (Tt) => {
        h2.current = false, Tt === "finished" && (ft(O2) || (p2("hidden"), g2(v3), X.current.afterLeave()));
      });
  }, [X, v3, h2, g2, O2, T2, $2, d3, L2, N3, K, Fe, ge, we]);
  let H2 = { ref: T2 }, Pe = b2;
  return import_react53.default.createElement(ct.Provider, { value: O2 }, import_react53.default.createElement(W2, { value: S2(y3, { visible: 0, hidden: 1 }) }, E2({ props: { ...Pe, ...H2 }, defaultTag: Il, features: qo, visible: y3 === "visible", name: "Transition.Child" })));
}
function mt(e5) {
  let { show: t8, appear: r5 = false, unmount: o6, ...n2 } = e5, i3 = _();
  if (t8 === void 0 && i3 !== null && (t8 = S2(i3, { [0]: true, [1]: false })), ![true, false].includes(t8))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a4, l3] = (0, import_react53.useState)(t8 ? "visible" : "hidden"), s4 = $o(() => {
    l3("hidden");
  }), u2 = Bo(), c4 = (0, import_react53.useMemo)(() => ({ show: t8, appear: r5 || !u2, initial: u2 }), [t8, r5, u2]);
  (0, import_react53.useEffect)(() => {
    t8 ? l3("visible") : ft(s4) || l3("hidden");
  }, [t8, s4]);
  let m3 = { unmount: o6 };
  return import_react53.default.createElement(ct.Provider, { value: s4 }, import_react53.default.createElement(dt.Provider, { value: c4 }, E2({ props: { ...m3, as: import_react53.Fragment, children: import_react53.default.createElement(zo, { ...m3, ...n2 }) }, defaultTag: import_react53.Fragment, features: qo, visible: a4 === "visible", name: "Transition" })));
}
mt.Child = function(t8) {
  let r5 = (0, import_react53.useContext)(dt) !== null, o6 = _() !== null;
  return !r5 && o6 ? import_react53.default.createElement(mt, { ...t8 }) : import_react53.default.createElement(zo, { ...t8 });
};
mt.Root = mt;

// app/sections/AboutMe/Facts.tsx
var Facts = ({}) => {
  const { theme: theme2 } = useTheme();
  return /* @__PURE__ */ React10.createElement("div", {
    className: "Mobile__Facts__Wrapper"
  }, /* @__PURE__ */ React10.createElement("div", {
    className: "Mobile__Facts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React10.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8"
  }, "So unterst\xFCtzen wir unsere Kunden")), /* @__PURE__ */ React10.createElement("div", {
    className: `Mobile__FactCards w-full rounded-2xl w-full mx-auto bg-transparent text-lg grid grid-rows-8 gap-2`
  }, facts.map((fact) => /* @__PURE__ */ React10.createElement(FactCard, {
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
  const className = props.theme === SupportedTheme.LIGHT ? `text-${props.color}-900 bg-${props.color}-100 hover:bg-${props.color}-200 focus-visible:ring-${props.color}-500` : `text-${props.color}-100 bg-${props.color}-900 hover:bg-${props.color}-700 focus-visible:ring-${props.color}-500`;
  const descriptionText = props.theme === SupportedTheme.LIGHT ? "text-gray-600" : "text-gray-300";
  return /* @__PURE__ */ React10.createElement(Ye, null, ({ open }) => /* @__PURE__ */ React10.createElement(React10.Fragment, null, /* @__PURE__ */ React10.createElement(Ye.Button, {
    className: `Mobile__FactCard__Title__Btn flex justify-between items-center w-full px-4 py-2 font-medium text-left rounded-lg ${className} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`,
    name: open ? "close" : "open"
  }, /* @__PURE__ */ React10.createElement("span", null, props.title), /* @__PURE__ */ React10.createElement(ChevronDownIcon_default, {
    className: `${open ? "transform rotate-180" : ""} w-5 h-5 text-${props.color}-500`
  })), /* @__PURE__ */ React10.createElement(Ye.Panel, {
    className: "px-4 pt-4 pb-2 text-gray-500 flex flex-row items-center justify-start text-base"
  }, /* @__PURE__ */ React10.createElement("span", {
    className: descriptionText
  }, props.description), /* @__PURE__ */ React10.createElement("img", {
    src: props.image,
    alt: props.imageAlt,
    title: props.imageAlt,
    className: "Mobile__FactCard__Image ml-2 object-cover w-32 rounded-lg"
  }))));
};

// app/sections/AboutMe/Testimonials.tsx
init_react();
var React11 = __toModule(require_react());
var Testimonials = ({}) => {
  return /* @__PURE__ */ React11.createElement("div", {
    className: "partner"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "container mx-auto px-6 space-y-8 md:px-12"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "m-auto text-center "
  }, /* @__PURE__ */ React11.createElement("h2", {
    className: "text-2xl text-gray-700 font-bold md:text-4xl"
  }, "Development Partner und Unternehmen")), /* @__PURE__ */ React11.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-md"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React11.createElement("img", {
    src: "https://tailus.io/sources/blocks/company-site/preview/images/clients/airbnb.svg",
    className: "",
    alt: ""
  })), /* @__PURE__ */ React11.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React11.createElement("img", {
    src: "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-8.png",
    className: "w-32 ",
    alt: ""
  })), /* @__PURE__ */ React11.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React11.createElement("img", {
    src: "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-3.png",
    className: "w-32 ",
    alt: ""
  })), /* @__PURE__ */ React11.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React11.createElement("img", {
    src: "https://tailus.io/sources/blocks/company-site/preview/images/clients/client-1.png",
    className: "w-32 ",
    alt: ""
  })))), /* @__PURE__ */ React11.createElement("div", {
    className: "m-auto text-center py-10"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "text-7xl"
  }, "\u201D"), /* @__PURE__ */ React11.createElement("div", {
    className: "font-medium max-w-xl text-2xl m-auto text-gray-500"
  }, "We know the ecosystem very well and they provides the speed, flexible account model and API-first approach that no one else can. These aspects are essential to building certain products that power our customers' growth."), /* @__PURE__ */ React11.createElement("div", {
    className: "mt-5 text-sm"
  }, /* @__PURE__ */ React11.createElement("span", {
    className: "md:text-xl font-medium text-textLgColor "
  }, "Henrique Dubugras"), /* @__PURE__ */ React11.createElement("span", {
    className: "md:text-lg  font-small text-textLgColor"
  }, " \u2014 Co-Founder and CEO, Acme"))));
};
var Testimonials_default = Testimonials;

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
    className: "spacer-div mt-20 md:mt-24 lg:mt-56"
  }), /* @__PURE__ */ React12.createElement(FunFacts_default, null), /* @__PURE__ */ React12.createElement(Facts_default, null)));
};
var AboutMe_default2 = AboutMe;

// app/sections/Contact/Contact.tsx
init_react();
var React15 = __toModule(require_react());

// app/components/Alert.tsx
init_react();
var React13 = __toModule(require_react());
var Alert = (props) => {
  return /* @__PURE__ */ React13.createElement("div", null, props.type === AlertType.SUCCESS ? /* @__PURE__ */ React13.createElement("div", {
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
  })))) : props.type === AlertType.ERROR ? /* @__PURE__ */ React13.createElement("div", {
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
var React14 = __toModule(require_react());

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
  return theme2 === SupportedTheme.LIGHT ? "text-black hover:text-white" : "text-white";
};
var SocialMedia_default2 = SocialMedia;

// app/sections/Contact/Contact.css
var Contact_default = "/build/_assets/Contact-VHYDKY6A.css";

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
    viewBox: "0 0 500 110",
    className: `${contactTitleClassname} contact-title xl:mt-0`,
    ref: setRef
  }, /* @__PURE__ */ React15.createElement("text", {
    textAnchor: "middle",
    x: "50%",
    y: "90%",
    className: "text-2xl"
  }, "Jetzt unverbindlich anfragen!"));
};
var ContactMeSection = (props) => {
  const { fieldErrors, transition } = props;
  const hasError = fieldErrors && Object.keys(fieldErrors).length > 0;
  const hasSuccess = fieldErrors && Object.keys(fieldErrors).length === 0;
  const buttonText = transition.state === "submitting" ? "Sending..." : transition.state === "loading" ? "Sent!" : "Send";
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
    message: "Leider ist etwas schief gelaufen. Bitte nochmal versuchen!",
    type: AlertType.ERROR
  }) : hasSuccess ? /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Wir haben Ihre Anfrage erhalten!",
    type: AlertType.CONFIRMED
  }) : /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Wir antworten meist innerhalb von 2 Werktagen.",
    type: AlertType.CONFIRMED
  }), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: ContactFormFields.name,
    className: "text-base pt-2 pb-1"
  }, "Ihr (Unternehmens-) Name"), /* @__PURE__ */ React15.createElement("input", {
    id: ContactFormFields.name,
    name: ContactFormFields.name,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.name && fieldErrors?.name)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: ContactFormFields.email,
    className: "text-base pt-2 pb-1"
  }, "Email Adresse"), /* @__PURE__ */ React15.createElement("input", {
    id: ContactFormFields.email,
    name: ContactFormFields.email,
    type: "email",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.email && fieldErrors?.email)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: ContactFormFields.subject,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Betreff oder Projektidee"), /* @__PURE__ */ React15.createElement("input", {
    id: ContactFormFields.subject,
    name: ContactFormFields.subject,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-2"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.subject && fieldErrors?.subject)), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: ContactFormFields.message,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Ihre Nachricht"), /* @__PURE__ */ React15.createElement("textarea", {
    id: ContactFormFields.message,
    name: ContactFormFields.message,
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error text-sm font-medium italic text-teal-300"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.message && fieldErrors?.message)), /* @__PURE__ */ React15.createElement("button", {
    type: "submit",
    name: "Senden",
    className: "contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
  }, buttonText))), /* @__PURE__ */ React15.createElement("div", {
    className: "text-textLgColor flex justify-center mt-6"
  }, /* @__PURE__ */ React15.createElement(SocialMedia_default2, null)));
};
var Contact_default2 = ContactMeSection;

// app/sections/MySkills/MySkills.tsx
init_react();
var React16 = __toModule(require_react());

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
  arr: function(a4) {
    return Array.isArray(a4);
  },
  obj: function(a4) {
    return stringContains(Object.prototype.toString.call(a4), "Object");
  },
  pth: function(a4) {
    return is.obj(a4) && a4.hasOwnProperty("totalLength");
  },
  svg: function(a4) {
    return a4 instanceof SVGElement;
  },
  inp: function(a4) {
    return a4 instanceof HTMLInputElement;
  },
  dom: function(a4) {
    return a4.nodeType || is.svg(a4);
  },
  str: function(a4) {
    return typeof a4 === "string";
  },
  fnc: function(a4) {
    return typeof a4 === "function";
  },
  und: function(a4) {
    return typeof a4 === "undefined";
  },
  nil: function(a4) {
    return is.und(a4) || a4 === null;
  },
  hex: function(a4) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a4);
  },
  rgb: function(a4) {
    return /^rgb/.test(a4);
  },
  hsl: function(a4) {
    return /^hsl/.test(a4);
  },
  col: function(a4) {
    return is.hex(a4) || is.rgb(a4) || is.hsl(a4);
  },
  key: function(a4) {
    return !defaultInstanceSettings.hasOwnProperty(a4) && !defaultTweenSettings.hasOwnProperty(a4) && a4 !== "targets" && a4 !== "keyframes";
  }
};
function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(",").map(function(p2) {
    return parseFloat(p2);
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
  var a4 = 1;
  var b2 = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  function solver(t8) {
    var progress = duration ? duration * t8 / 1e3 : t8;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a4 * Math.cos(wd * progress) + b2 * Math.sin(wd * progress));
    } else {
      progress = (a4 + b2 * progress) * Math.exp(-progress * w0);
    }
    if (t8 === 0 || t8 === 1) {
      return t8;
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
  return function(t8) {
    return Math.ceil(minMax(t8, 1e-6, 1) * steps2) * (1 / steps2);
  };
}
var bezier = function() {
  var kSplineTableSize = 11;
  var kSampleStepSize = 1 / (kSplineTableSize - 1);
  function A3(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
  }
  function B3(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
  }
  function C2(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A3(aA1, aA2) * aT + B3(aA1, aA2)) * aT + C2(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A3(aA1, aA2) * aT * aT + 2 * B3(aA1, aA2) * aT + C2(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i3 = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 1e-7 && ++i3 < 10);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i3 = 0; i3 < 4; ++i3) {
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
      for (var i3 = 0; i3 < kSplineTableSize; ++i3) {
        sampleValues[i3] = calcBezier(i3 * kSampleStepSize, mX1, mX2);
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
    return function(t8) {
      return t8;
    };
  } };
  var functionEasings = {
    Sine: function() {
      return function(t8) {
        return 1 - Math.cos(t8 * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(t8) {
        return 1 - Math.sqrt(1 - t8 * t8);
      };
    },
    Back: function() {
      return function(t8) {
        return t8 * t8 * (3 * t8 - 2);
      };
    },
    Bounce: function() {
      return function(t8) {
        var pow2, b2 = 4;
        while (t8 < ((pow2 = Math.pow(2, --b2)) - 1) / 11) {
        }
        return 1 / Math.pow(4, 3 - b2) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t8, 2);
      };
    },
    Elastic: function(amplitude, period) {
      if (amplitude === void 0)
        amplitude = 1;
      if (period === void 0)
        period = 0.5;
      var a4 = minMax(amplitude, 1, 10);
      var p2 = minMax(period, 0.1, 2);
      return function(t8) {
        return t8 === 0 || t8 === 1 ? t8 : -a4 * Math.pow(2, 10 * (t8 - 1)) * Math.sin((t8 - 1 - p2 / (Math.PI * 2) * Math.asin(1 / a4)) * (Math.PI * 2) / p2);
      };
    }
  };
  var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  baseEasings.forEach(function(name, i3) {
    functionEasings[name] = function() {
      return function(t8) {
        return Math.pow(t8, i3 + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function(name) {
    var easeIn = functionEasings[name];
    eases["easeIn" + name] = easeIn;
    eases["easeOut" + name] = function(a4, b2) {
      return function(t8) {
        return 1 - easeIn(a4, b2)(1 - t8);
      };
    };
    eases["easeInOut" + name] = function(a4, b2) {
      return function(t8) {
        return t8 < 0.5 ? easeIn(a4, b2)(t8 * 2) / 2 : 1 - easeIn(a4, b2)(t8 * -2 + 2) / 2;
      };
    };
    eases["easeOutIn" + name] = function(a4, b2) {
      return function(t8) {
        return t8 < 0.5 ? (1 - easeIn(a4, b2)(1 - t8 * 2)) / 2 : (easeIn(a4, b2)(t8 * 2 - 1) + 1) / 2;
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
  } catch (e5) {
    return;
  }
}
function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i3 = 0; i3 < len; i3++) {
    if (i3 in arr) {
      var val = arr[i3];
      if (callback.call(thisArg, val, i3, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}
function flattenArray(arr) {
  return arr.reduce(function(a4, b2) {
    return a4.concat(is.arr(b2) ? flattenArray(b2) : b2);
  }, []);
}
function toArray(o6) {
  if (is.arr(o6)) {
    return o6;
  }
  if (is.str(o6)) {
    o6 = selectString(o6) || o6;
  }
  if (o6 instanceof NodeList || o6 instanceof HTMLCollection) {
    return [].slice.call(o6);
  }
  return [o6];
}
function arrayContains(arr, val) {
  return arr.some(function(a4) {
    return a4 === val;
  });
}
function cloneObject(o6) {
  var clone = {};
  for (var p2 in o6) {
    clone[p2] = o6[p2];
  }
  return clone;
}
function replaceObjectProps(o1, o22) {
  var o6 = cloneObject(o1);
  for (var p2 in o1) {
    o6[p2] = o22.hasOwnProperty(p2) ? o22[p2] : o1[p2];
  }
  return o6;
}
function mergeObjects(o1, o22) {
  var o6 = cloneObject(o1);
  for (var p2 in o22) {
    o6[p2] = is.und(o1[p2]) ? o22[p2] : o1[p2];
  }
  return o6;
}
function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function(m3, r6, g3, b3) {
    return r6 + r6 + g3 + g3 + b3 + b3;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r5 = parseInt(rgb[1], 16);
  var g2 = parseInt(rgb[2], 16);
  var b2 = parseInt(rgb[3], 16);
  return "rgba(" + r5 + "," + g2 + "," + b2 + ",1)";
}
function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h2 = parseInt(hsl[1], 10) / 360;
  var s4 = parseInt(hsl[2], 10) / 100;
  var l3 = parseInt(hsl[3], 10) / 100;
  var a4 = hsl[4] || 1;
  function hue2rgb(p3, q4, t8) {
    if (t8 < 0) {
      t8 += 1;
    }
    if (t8 > 1) {
      t8 -= 1;
    }
    if (t8 < 1 / 6) {
      return p3 + (q4 - p3) * 6 * t8;
    }
    if (t8 < 1 / 2) {
      return q4;
    }
    if (t8 < 2 / 3) {
      return p3 + (q4 - p3) * (2 / 3 - t8) * 6;
    }
    return p3;
  }
  var r5, g2, b2;
  if (s4 == 0) {
    r5 = g2 = b2 = l3;
  } else {
    var q3 = l3 < 0.5 ? l3 * (1 + s4) : l3 + s4 - l3 * s4;
    var p2 = 2 * l3 - q3;
    r5 = hue2rgb(p2, q3, h2 + 1 / 3);
    g2 = hue2rgb(p2, q3, h2);
    b2 = hue2rgb(p2, q3, h2 - 1 / 3);
  }
  return "rgba(" + r5 * 255 + "," + g2 * 255 + "," + b2 * 255 + "," + a4 + ")";
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
function getAttribute(el2, prop) {
  return el2.getAttribute(prop);
}
function convertPxToUnit(el2, value, unit) {
  var valueUnit = getUnit(value);
  if (arrayContains([unit, "deg", "rad", "turn"], valueUnit)) {
    return value;
  }
  var cached = cache.CSS[value + unit];
  if (!is.und(cached)) {
    return cached;
  }
  var baseline = 100;
  var tempEl = document.createElement(el2.tagName);
  var parentEl = el2.parentNode && el2.parentNode !== document ? el2.parentNode : document.body;
  parentEl.appendChild(tempEl);
  tempEl.style.position = "absolute";
  tempEl.style.width = baseline + unit;
  var factor = baseline / tempEl.offsetWidth;
  parentEl.removeChild(tempEl);
  var convertedUnit = factor * parseFloat(value);
  cache.CSS[value + unit] = convertedUnit;
  return convertedUnit;
}
function getCSSValue(el2, prop, unit) {
  if (prop in el2.style) {
    var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
    var value = el2.style[prop] || getComputedStyle(el2).getPropertyValue(uppercasePropName) || "0";
    return unit ? convertPxToUnit(el2, value, unit) : value;
  }
}
function getAnimationType(el2, prop) {
  if (is.dom(el2) && !is.inp(el2) && (!is.nil(getAttribute(el2, prop)) || is.svg(el2) && el2[prop])) {
    return "attribute";
  }
  if (is.dom(el2) && arrayContains(validTransforms, prop)) {
    return "transform";
  }
  if (is.dom(el2) && (prop !== "transform" && getCSSValue(el2, prop))) {
    return "css";
  }
  if (el2[prop] != null) {
    return "object";
  }
}
function getElementTransforms(el2) {
  if (!is.dom(el2)) {
    return;
  }
  var str = el2.style.transform || "";
  var reg = /(\w+)\(([^)]*)\)/g;
  var transforms = new Map();
  var m3;
  while (m3 = reg.exec(str)) {
    transforms.set(m3[1], m3[2]);
  }
  return transforms;
}
function getTransformValue(el2, propName, animatable, unit) {
  var defaultVal = stringContains(propName, "scale") ? 1 : 0 + getTransformUnit(propName);
  var value = getElementTransforms(el2).get(propName) || defaultVal;
  if (animatable) {
    animatable.transforms.list.set(propName, value);
    animatable.transforms["last"] = propName;
  }
  return unit ? convertPxToUnit(el2, value, unit) : value;
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
function getRelativeValue(to2, from) {
  var operator = /^(\*=|\+=|-=)/.exec(to2);
  if (!operator) {
    return to2;
  }
  var u2 = getUnit(to2) || 0;
  var x4 = parseFloat(from);
  var y3 = parseFloat(to2.replace(operator[0], ""));
  switch (operator[0][0]) {
    case "+":
      return x4 + y3 + u2;
    case "-":
      return x4 - y3 + u2;
    case "*":
      return x4 * y3 + u2;
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
function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el2) {
  return Math.PI * 2 * getAttribute(el2, "r");
}
function getRectLength(el2) {
  return getAttribute(el2, "width") * 2 + getAttribute(el2, "height") * 2;
}
function getLineLength(el2) {
  return getDistance({ x: getAttribute(el2, "x1"), y: getAttribute(el2, "y1") }, { x: getAttribute(el2, "x2"), y: getAttribute(el2, "y2") });
}
function getPolylineLength(el2) {
  var points = el2.points;
  var totalLength = 0;
  var previousPos;
  for (var i3 = 0; i3 < points.numberOfItems; i3++) {
    var currentPos = points.getItem(i3);
    if (i3 > 0) {
      totalLength += getDistance(previousPos, currentPos);
    }
    previousPos = currentPos;
  }
  return totalLength;
}
function getPolygonLength(el2) {
  var points = el2.points;
  return getPolylineLength(el2) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
function getTotalLength(el2) {
  if (el2.getTotalLength) {
    return el2.getTotalLength();
  }
  switch (el2.tagName.toLowerCase()) {
    case "circle":
      return getCircleLength(el2);
    case "rect":
      return getRectLength(el2);
    case "line":
      return getLineLength(el2);
    case "polyline":
      return getPolylineLength(el2);
    case "polygon":
      return getPolygonLength(el2);
  }
}
function setDashoffset(el2) {
  var pathLength = getTotalLength(el2);
  el2.setAttribute("stroke-dasharray", pathLength);
  return pathLength;
}
function getParentSvgEl(el2) {
  var parentEl = el2.parentNode;
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
  var p2 = percent || 100;
  return function(property) {
    return {
      property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p2 / 100)
    };
  };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0)
      offset = 0;
    var l3 = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l3);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p2 = point();
  var p0 = point(-1);
  var p1 = point(1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case "x":
      return (p2.x - svg.x) * scaleX;
    case "y":
      return (p2.y - svg.y) * scaleY;
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
  return filterArray(targetsArray, function(item, pos, self) {
    return self.indexOf(item) === pos;
  });
}
function getAnimatables(targets) {
  var parsed = parseTargets(targets);
  return parsed.map(function(t8, i3) {
    return { target: t8, id: i3, total: parsed.length, transforms: { list: getElementTransforms(t8) } };
  });
}
function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }
  if (is.arr(prop)) {
    var l3 = prop.length;
    var isFromTo = l3 === 2 && !is.obj(prop[0]);
    if (!isFromTo) {
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l3;
      }
    } else {
      prop = { value: prop };
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function(v3, i3) {
    var obj = is.obj(v3) && !is.pth(v3) ? v3 : { value: v3 };
    if (is.und(obj.delay)) {
      obj.delay = !i3 ? tweenSettings.delay : 0;
    }
    if (is.und(obj.endDelay)) {
      obj.endDelay = i3 === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }
    return obj;
  }).map(function(k3) {
    return mergeObjects(k3, settings);
  });
}
function flattenKeyframes(keyframes2) {
  var propertyNames = filterArray(flattenArray(keyframes2.map(function(key) {
    return Object.keys(key);
  })), function(p2) {
    return is.key(p2);
  }).reduce(function(a4, b2) {
    if (a4.indexOf(b2) < 0) {
      a4.push(b2);
    }
    return a4;
  }, []);
  var properties = {};
  var loop = function(i4) {
    var propName = propertyNames[i4];
    properties[propName] = keyframes2.map(function(key) {
      var newKey = {};
      for (var p2 in key) {
        if (is.key(p2)) {
          if (p2 == propName) {
            newKey.value = key[p2];
          }
        } else {
          newKey[p2] = key[p2];
        }
      }
      return newKey;
    });
  };
  for (var i3 = 0; i3 < propertyNames.length; i3++)
    loop(i3);
  return properties;
}
function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes2 = params.keyframes;
  if (keyframes2) {
    params = mergeObjects(flattenKeyframes(keyframes2), params);
  }
  for (var p2 in params) {
    if (is.key(p2)) {
      properties.push({
        name: p2,
        tweens: normalizePropertyTweens(params[p2], tweenSettings)
      });
    }
  }
  return properties;
}
function normalizeTweenValues(tween, animatable) {
  var t8 = {};
  for (var p2 in tween) {
    var value = getFunctionValue(tween[p2], animatable);
    if (is.arr(value)) {
      value = value.map(function(v3) {
        return getFunctionValue(v3, animatable);
      });
      if (value.length === 1) {
        value = value[0];
      }
    }
    t8[p2] = value;
  }
  t8.duration = parseFloat(t8.duration);
  t8.delay = parseFloat(t8.delay);
  return t8;
}
function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function(t8) {
    var tween = normalizeTweenValues(t8, animatable);
    var tweenValue = tween.value;
    var to2 = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
    var toUnit = getUnit(to2);
    var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
    var previousValue = previousTween ? previousTween.to.original : originalValue;
    var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
    var fromUnit = getUnit(from) || getUnit(originalValue);
    var unit = toUnit || fromUnit;
    if (is.und(to2)) {
      to2 = previousValue;
    }
    tween.from = decomposeValue(from, unit);
    tween.to = decomposeValue(getRelativeValue(to2, from), unit);
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
  css: function(t8, p2, v3) {
    return t8.style[p2] = v3;
  },
  attribute: function(t8, p2, v3) {
    return t8.setAttribute(p2, v3);
  },
  object: function(t8, p2, v3) {
    return t8[p2] = v3;
  },
  transform: function(t8, p2, v3, transforms, manual) {
    transforms.list.set(p2, v3);
    if (p2 === transforms.last || manual) {
      var str = "";
      transforms.list.forEach(function(value, prop) {
        str += prop + "(" + value + ") ";
      });
      t8.style.transform = str;
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
      var to2 = getRelativeValue(validateValue(value, unit), originalValue);
      var animType = getAnimationType(target, property);
      setProgressValue[animType](target, property, to2, animatable.transforms, true);
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
  })), function(a4) {
    return !is.und(a4);
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
  function step(t8) {
    var activeInstancesLength = activeInstances.length;
    var i3 = 0;
    while (i3 < activeInstancesLength) {
      var activeInstance = activeInstances[i3];
      if (!activeInstance.paused) {
        activeInstance.tick(t8);
        i3++;
      } else {
        activeInstances.splice(i3, 1);
        activeInstancesLength--;
      }
    }
    raf = i3 > 0 ? requestAnimationFrame(step) : void 0;
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
      for (var i3 = 0; i3 < childrenLength; i3++) {
        seekChild(time, children[i3]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--; ) {
        seekChild(time, children[i$1]);
      }
    }
  }
  function setAnimationsProgress(insTime) {
    var i3 = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i3 < animationsLength) {
      var anim = animations[i3];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      if (tweenLength) {
        tween = filterArray(tweens, function(t8) {
          return insTime < t8.end;
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
        for (var s4 = 0; s4 < stringsLength; s4++) {
          var a4 = strings[s4];
          var b2 = strings[s4 + 1];
          var n$1 = numbers[s4];
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
      i3++;
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
    for (var i3 = childrenLength; i3--; ) {
      instance.children[i3].reset();
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
  instance.tick = function(t8) {
    now = t8;
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
  for (var a4 = animations.length; a4--; ) {
    if (arrayContains(targetsArray, animations[a4].animatable.target)) {
      animations.splice(a4, 1);
    }
  }
}
function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c4 = children.length; c4--; ) {
    var child = children[c4];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) {
      children.splice(c4, 1);
    }
  }
  if (!animations.length && !children.length) {
    instance.pause();
  }
}
function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i3 = activeInstances.length; i3--; ) {
    var instance = activeInstances[i3];
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
  return function(el2, i3, t8) {
    if (fromFirst) {
      fromIndex = 0;
    }
    if (fromCenter) {
      fromIndex = (t8 - 1) / 2;
    }
    if (fromLast) {
      fromIndex = t8 - 1;
    }
    if (!values.length) {
      for (var index = 0; index < t8; index++) {
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
    return start + spacing * (Math.round(values[i3] * 100) / 100) + unit;
  };
}
function timeline(params) {
  if (params === void 0)
    params = {};
  var tl2 = anime(params);
  tl2.duration = 0;
  tl2.add = function(instanceParams, timelineOffset) {
    var tlIndex = activeInstances.indexOf(tl2);
    var children = tl2.children;
    if (tlIndex > -1) {
      activeInstances.splice(tlIndex, 1);
    }
    function passThrough(ins2) {
      ins2.passThrough = true;
    }
    for (var i3 = 0; i3 < children.length; i3++) {
      passThrough(children[i3]);
    }
    var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
    insParams.targets = insParams.targets || params.targets;
    var tlDuration = tl2.duration;
    insParams.autoplay = false;
    insParams.direction = tl2.direction;
    insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
    passThrough(tl2);
    tl2.seek(insParams.timelineOffset);
    var ins = anime(insParams);
    passThrough(ins);
    children.push(ins);
    var timings = getInstanceTimings(children, params);
    tl2.delay = timings.delay;
    tl2.endDelay = timings.endDelay;
    tl2.duration = timings.duration;
    tl2.seek(0);
    tl2.reset();
    if (tl2.autoplay) {
      tl2.play();
    }
    return tl2;
  };
  return tl2;
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
      for (let i3 = 0; i3 < letters.length; i3++) {
        anime_es_default({
          targets: letters[i3],
          easing: "easeInQuad",
          translateX: ["5px", "0"],
          delay: 50 * i3
        });
        anime_es_default({
          targets: letters[i3],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i3
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
var React17 = __toModule(require_react());

// app/components/ResumeButton/ResumeButton.css
var ResumeButton_default = "/build/_assets/ResumeButton-4ICFHR44.css";

// app/components/ResumeButton/ResumeButton.tsx
var links6 = () => {
  return [{ rel: "stylesheet", href: ResumeButton_default }];
};

// app/sections/Projects/Projects.tsx
init_react();
var React20 = __toModule(require_react());

// app/sections/Projects/RecentProjects.tsx
init_react();
var React18 = __toModule(require_react());
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
    className: "mr-4"
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
var React19 = __toModule(require_react());
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
var React21 = __toModule(require_react());
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
  })))));
};
var routes_default = Index;
export {
  routes_default as default,
  links8 as links,
  meta
};
/** @license React v17.0.2
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
//# sourceMappingURL=/build/routes/index-PFC4ZF34.js.map
