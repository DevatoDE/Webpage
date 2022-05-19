import {
  require_react_dom
} from "/build/_shared/chunk-ICVEOAC4.js";
import "/build/_shared/chunk-GGSUZKFI.js";
import {
  ChevronDownIcon_default
} from "/build/_shared/chunk-QVUXHPFX.js";
import {
  ArrowSmRightIcon_default,
  esm_default
} from "/build/_shared/chunk-4NVESOM4.js";
import "/build/_shared/chunk-AOOMS32I.js";
import {
  BsGithub
} from "/build/_shared/chunk-BBQITRHV.js";
import {
  AUTHOR,
  AlertType,
  ContactFormFields,
  GenIcon,
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
  mainProjects,
  otherProjects,
  recentProjects,
  skills,
  sm,
  useTheme
} from "/build/_shared/chunk-6VAFCFF3.js";
import {
  Form,
  useActionData,
  useTransition
} from "/build/_shared/chunk-3QRA3G35.js";
import {
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// node_modules/use-typewriter-hook/index.js
var require_use_typewriter_hook = __commonJS({
  "node_modules/use-typewriter-hook/index.js"(exports) {
    init_react();
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      Object.defineProperty(o, k22, { enumerable: true, get: function() {
        return m[k2];
      } });
    } : function(o, m, k2, k22) {
      if (k22 === void 0)
        k22 = k2;
      o[k22] = m[k2];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k2 in mod)
          if (k2 !== "default" && Object.prototype.hasOwnProperty.call(mod, k2))
            __createBinding(result, mod, k2);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findCommonSubstring = exports.useTypewriter = void 0;
    var React23 = __importStar(require_react());
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
    var useTypewriter2 = (config) => {
      const resolvedConfig = Object.assign(Object.assign({}, CONFIGURATION_DEFAULTS), config);
      const [typingDirection, setTypingDirection] = React23.useState(TypingDirection.FORWARD);
      const [sentencePointer, setSentencePointer] = React23.useState(0);
      const [textValue, setTextValue] = React23.useState("");
      const [startTypewriter, setStartTypewriter] = React23.useState(false);
      const targetTextArray = Array.isArray(resolvedConfig.targetText) ? resolvedConfig.targetText : [resolvedConfig.targetText];
      const isPausedRef = React23.useRef(false);
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
      const targetTextRef = React23.useRef(targetTextArray[sentencePointer]);
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
      React23.useEffect(() => {
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
      React23.useEffect(() => {
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
      const savedCallback = React23.useRef(callback);
      React23.useEffect(() => {
        savedCallback.current = callback;
      }, [callback]);
      React23.useEffect(() => {
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
      for (let i = 0; i <= string1.length - 1; i++) {
        if (str1[i] === str2[i]) {
          commonSubstring = commonSubstring + str1[i];
        } else {
          return commonSubstring;
        }
      }
      return commonSubstring;
    }
    exports.findCommonSubstring = findCommonSubstring;
  }
});

// browser-route-module:/Users/flo/Development/alissanguyen-dot-dev-1/app/routes/index.tsx?browser
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
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
    o2.__proto__ = p2;
    return o2;
  };
  return _setPrototypeOf(o, p);
}
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
  }, "Eat.")), /* @__PURE__ */ React3.createElement("div", {
    className: wrapperClass
  }, /* @__PURE__ */ React3.createElement("div", {
    className: contentClass
  }, "Learn.")), /* @__PURE__ */ React3.createElement("div", {
    className: wrapperClass
  }, /* @__PURE__ */ React3.createElement("div", {
    className: contentClass
  }, "Code.")));
};
var Portfolio = () => {
  const word = "Portfolio";
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
var React4 = __toModule(require_react());

// app/components/ExternalLinkButton/ExternalLinkButton.css
var ExternalLinkButton_default = "/build/_assets/ExternalLinkButton-CJS3CIDO.css";

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var links = () => [
  {
    rel: "stylesheet",
    href: ExternalLinkButton_default
  }
];
var ExternalLinkButton = (props) => {
  const children = typeof props.children === "string" ? /* @__PURE__ */ React4.createElement("span", null, props.children) : props.children;
  return /* @__PURE__ */ React4.createElement("a", {
    ...props.linkProps,
    href: props.to,
    className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm"
  }, /* @__PURE__ */ React4.createElement("button", {
    role: "link",
    name: props.accessibilityName,
    "aria-label": props.accessibilityName,
    tabIndex: -1,
    className: "ExternalLinkButton__Button"
  }, React4.cloneElement(children, {
    ...children.props,
    className: "ExternalLinkButton__ButtonContents relative inline-flex",
    children: /* @__PURE__ */ React4.createElement(React4.Fragment, null, children.props.children, /* @__PURE__ */ React4.createElement("div", {
      className: "relative flex items-center"
    }, /* @__PURE__ */ React4.createElement(ExternalLinkSvg, null)))
  })));
};
var ExternalLinkSvg = () => {
  return /* @__PURE__ */ React4.createElement("svg", {
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
  }, /* @__PURE__ */ React4.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};
var ExternalLinkButton_default2 = ExternalLinkButton;

// app/sections/AboutMe/AboutMe.tsx
init_react();
var React12 = __toModule(require_react());

// app/sections/AboutMe/AboutMe.css
var AboutMe_default = "/build/_assets/AboutMe-BWQ4B3EN.css";

// app/sections/AboutMe/FunFacts.tsx
init_react();
var React5 = __toModule(require_react());
var FunFacts = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "funfacts-animate" : "";
  const [hover, setHover] = React5.useState(false);
  const handleHover = () => {
    setHover(!hover);
  };
  return /* @__PURE__ */ React5.createElement("div", {
    className: `FunFacts__Wrapper ${className}`,
    ref: setRef
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "FunFacts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React5.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor"
  }, "Random fun facts about me")), /* @__PURE__ */ React5.createElement("div", {
    className: "wrapper"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "cols flex flex-wrap justify-between"
  }, facts.map((fact) => /* @__PURE__ */ React5.createElement("div", {
    key: fact.index,
    className: `col ${hover ? "hover" : ""} justify-between items-center cursor-auto my-5`,
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onTouchStart: handleHover
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "front flex justify-center items-center bg-cover text-center bg-center h-auto after:absolute after:top-0 after:left-0 after:w-full after:rounded-lg after:h-full after:block rounded-lg after:opacity-50 z-10 object-cover",
    style: {
      backgroundImage: `url(${fact.background})`
    }
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "inner w-full box-border outline outline-1 outline-transparent px-4"
  }, /* @__PURE__ */ React5.createElement("p", {
    className: "text-white relative after:absolute after:block after:left-0 after:right-0 text-4xl"
  }, fact.index), /* @__PURE__ */ React5.createElement("span", {
    className: "text-white text-lg"
  }, fact.title))), /* @__PURE__ */ React5.createElement("div", {
    className: "back absolute top-0 flex left-0 w-full justify-center items-center bg-cover text-center bg-center h-auto rounded-lg"
  }, /* @__PURE__ */ React5.createElement("div", {
    className: "inner w-full box-border outline outline-1 outline-transparent opacity-90 px-4"
  }, /* @__PURE__ */ React5.createElement("p", {
    className: "p text-subText opacity-100 text-lg"
  }, fact.description)))))))));
};
var FunFacts_default = FunFacts;

// app/sections/AboutMe/MyStory.tsx
init_react();
var React6 = __toModule(require_react());
var MyStory = ({}) => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "my-story-wrapper flex flex-col items-baseline w-full text-textSmColor"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "my-story-title reveal-text text-textLgColor leading-none relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
  }, "My story"), /* @__PURE__ */ React6.createElement("div", {
    className: "fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center"
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "my-4 text-lg xs:mb-8 sm:w-4/5 leading-7 text-text-SmColor"
  }, "I was born and raised in Vietnam. When I was 15, I came to America on my own as a transfer student. After graduating in Florida, I attended Rhodes College in Tennessee as a Computer Science student. The COVID-19 pandemic forced me to move to Seattle in 2020 when I started my in-depth front-end programming journey."), /* @__PURE__ */ React6.createElement(Globe, null)), /* @__PURE__ */ React6.createElement("div", {
    className: "spacer-div mb-10 sm:mb-0"
  }), /* @__PURE__ */ React6.createElement(MyselfCard, null));
};
var MyStory_default = MyStory;
var JINX_ANIMATION_TIMEOUT_MS = 3e3;
var JINX_ELEMENT_ID = "jinx-svg";
var MyselfCard = () => {
  React6.useEffect(() => {
    setTimeout(() => {
      const jinxImg = document.getElementById(JINX_ELEMENT_ID);
      if (jinxImg) {
        jinxImg.classList.remove("hidden");
      }
    }, JINX_ANIMATION_TIMEOUT_MS);
  }, []);
  return /* @__PURE__ */ React6.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/5"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React6.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "A little bit about me"), /* @__PURE__ */ React6.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "In my free time, I like to watch Youtube and Netflix, and playing games. My favorite youtubers are Danny Gonzales and Drew Gooden (Go Greg and Little Stinkers!). Some games I usually play are Wild Rift, Clash of Clans, and League of Legends."), /* @__PURE__ */ React6.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React6.createElement("img", {
    id: JINX_ELEMENT_ID,
    loading: "lazy",
    title: "Jinx image",
    src: "/svg/jinx.svg",
    alt: "Jinx - my favorite League of Legends champion",
    className: "jinx-img hidden"
  }));
};

// app/sections/AboutMe/Titles.tsx
init_react();
var React7 = __toModule(require_react());
var Titles = ({}) => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "title-content text-aboutMe-aboutMeText"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "title-content__container inline-flex overflow-hidden font-semibold items-center"
  }, /* @__PURE__ */ React7.createElement("h1", {
    className: "hidden"
  }, "Wir sind a software engineer, a freelance artist, an anime lover, and a cat mom."), /* @__PURE__ */ React7.createElement("p", {
    className: "title-content__container__text m-0  inline-flex"
  }, "I'm a"), /* @__PURE__ */ React7.createElement("span", {
    className: "blinker"
  }, "["), /* @__PURE__ */ React7.createElement("ul", {
    className: "title-content__container__list text-center list-none"
  }, /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "software engineer"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "freelance artist"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "manga/anime lover !"), /* @__PURE__ */ React7.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "cat mom \u{1F408}\u200D\u2B1B \u{1F408}")), /* @__PURE__ */ React7.createElement("span", {
    className: "blinker"
  }, "]")));
};
var Titles_default = Titles;

// app/sections/AboutMe/Hi.tsx
init_react();
var React8 = __toModule(require_react());
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
  return /* @__PURE__ */ React8.createElement("span", {
    className: "font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-aboutMe-aboutMeText",
    "aria-live": "polite",
    "aria-label": "Hi I'm Alissa"
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

// app/components/ResumeButton/ResumeButton.tsx
init_react();
var React9 = __toModule(require_react());

// app/components/ResumeButton/ResumeButton.css
var ResumeButton_default = "/build/_assets/ResumeButton-4ICFHR44.css";

// app/components/ResumeButton/ResumeButton.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: ResumeButton_default }];
};
var ResumeButton = () => {
  return /* @__PURE__ */ React9.createElement("a", {
    href: "/images/resume.pdf",
    download: "AlissaNguyen_resume.pdf"
  }, /* @__PURE__ */ React9.createElement("button", {
    className: "resume-button px-5 py-2 text-center uppercase relative after:absolute after:bottom-0 after:w-0 after:left-1/2 after:bg-transparent hover:cursor-pointer focus:cursor-pointer lg:text-base font-normal select-none",
    name: "Download Resume",
    "aria-label": "Resume"
  }, "Download Resume"));
};
var ResumeButton_default2 = ResumeButton;

// app/sections/AboutMe/Facts.tsx
init_react();
var React11 = __toModule(require_react());

// node_modules/@headlessui/react/dist/headlessui.esm.js
init_react();
var import_react2 = __toModule(require_react());
var import_react3 = __toModule(require_react());
var import_react4 = __toModule(require_react());
var import_react5 = __toModule(require_react());
var import_react6 = __toModule(require_react());
var import_react7 = __toModule(require_react());
var import_react8 = __toModule(require_react());
var import_react9 = __toModule(require_react());
var import_react10 = __toModule(require_react());
var import_react11 = __toModule(require_react());
var import_react12 = __toModule(require_react());
var import_react13 = __toModule(require_react());
var import_react14 = __toModule(require_react());
var import_react15 = __toModule(require_react());
var import_react16 = __toModule(require_react());
var import_react17 = __toModule(require_react());
var import_react18 = __toModule(require_react());
var import_react_dom = __toModule(require_react_dom());
var import_react19 = __toModule(require_react());
var import_react20 = __toModule(require_react());
var import_react21 = __toModule(require_react());
var import_react22 = __toModule(require_react());
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
function k() {
  let e = [], t = [], r = { enqueue(o) {
    t.push(o);
  }, requestAnimationFrame(...o) {
    let n = requestAnimationFrame(...o);
    r.add(() => cancelAnimationFrame(n));
  }, nextFrame(...o) {
    r.requestAnimationFrame(() => {
      r.requestAnimationFrame(...o);
    });
  }, setTimeout(...o) {
    let n = setTimeout(...o);
    r.add(() => clearTimeout(n));
  }, add(o) {
    e.push(o);
  }, dispose() {
    for (let o of e.splice(0))
      o();
  }, async workQueue() {
    for (let o of t.splice(0))
      await o();
  } };
  return r;
}
function Q() {
  let [e] = (0, import_react3.useState)(k);
  return (0, import_react3.useEffect)(() => () => e.dispose(), [e]), e;
}
var x = typeof window != "undefined" ? import_react5.useLayoutEffect : import_react5.useEffect;
var yt = { serverHandoffComplete: false };
function q() {
  let [e, t] = (0, import_react6.useState)(yt.serverHandoffComplete);
  return (0, import_react6.useEffect)(() => {
    e !== true && t(true);
  }, [e]), (0, import_react6.useEffect)(() => {
    yt.serverHandoffComplete === false && (yt.serverHandoffComplete = true);
  }, []), e;
}
var or = 0;
function to() {
  return ++or;
}
function A() {
  let e = q(), [t, r] = (0, import_react4.useState)(e ? to : null);
  return x(() => {
    t === null && r(to());
  }, [t]), t != null ? "" + t : void 0;
}
function ke(e) {
  let t = (0, import_react8.useRef)(e);
  return (0, import_react8.useEffect)(() => {
    t.current = e;
  }, [e]), t;
}
function ee(e, t) {
  let [r, o] = (0, import_react7.useState)(e), n = ke(e);
  return x(() => o(n.current), [n, o, ...t]), r;
}
function I(...e) {
  let t = (0, import_react9.useRef)(e);
  return (0, import_react9.useEffect)(() => {
    t.current = e;
  }, [e]), (0, import_react9.useCallback)((r) => {
    for (let o of t.current)
      o != null && (typeof o == "function" ? o(r) : o.current = r);
  }, [t]);
}
function S(e, t, ...r) {
  if (e in t) {
    let n = t[e];
    return typeof n == "function" ? n(...r) : n;
  }
  let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((n) => `"${n}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(o, S), o;
}
function E({ props: e, slot: t, defaultTag: r, features: o, visible: n = true, name: i }) {
  if (n)
    return _e(e, t, r, i);
  let a = o != null ? o : 0;
  if (a & 2) {
    let { static: l = false, ...s } = e;
    if (l)
      return _e(s, t, r, i);
  }
  if (a & 1) {
    let { unmount: l = true, ...s } = e;
    return S(l ? 0 : 1, { [0]() {
      return null;
    }, [1]() {
      return _e({ ...s, hidden: true, style: { display: "none" } }, t, r, i);
    } });
  }
  return _e(e, t, r, i);
}
function _e(e, t = {}, r, o) {
  let { as: n = r, children: i, refName: a = "ref", ...l } = gt(e, ["unmount", "static"]), s = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof i == "function" ? i(t) : i;
  if (l.className && typeof l.className == "function" && (l.className = l.className(t)), n === import_react10.Fragment && Object.keys(l).length > 0) {
    if (!(0, import_react10.isValidElement)(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(l).map((c) => `  - ${c}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((c) => `  - ${c}`).join(`
`)].join(`
`));
    return (0, import_react10.cloneElement)(u, Object.assign({}, fr(mr(gt(l, ["ref"])), u.props, ["onClick"]), s));
  }
  return (0, import_react10.createElement)(n, Object.assign({}, gt(l, ["ref"]), n !== import_react10.Fragment && s), u);
}
function fr(e, t, r) {
  let o = Object.assign({}, e);
  for (let n of r)
    e[n] !== void 0 && t[n] !== void 0 && Object.assign(o, { [n](i) {
      i.defaultPrevented || e[n](i), i.defaultPrevented || t[n](i);
    } });
  return o;
}
function D(e) {
  var t;
  return Object.assign((0, import_react10.forwardRef)(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function mr(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function gt(e, t = []) {
  let r = Object.assign({}, e);
  for (let o of t)
    o in r && delete r[o];
  return r;
}
function br(e) {
  throw new Error("Unexpected object: " + e);
}
function ae(e, t) {
  let r = t.resolveItems();
  if (r.length <= 0)
    return null;
  let o = t.resolveActiveIndex(), n = o != null ? o : -1, i = (() => {
    switch (e.focus) {
      case 0:
        return r.findIndex((a) => !t.resolveDisabled(a));
      case 1: {
        let a = r.slice().reverse().findIndex((l, s, u) => n !== -1 && u.length - s - 1 >= n ? false : !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 2:
        return r.findIndex((a, l) => l <= n ? false : !t.resolveDisabled(a));
      case 3: {
        let a = r.slice().reverse().findIndex((l) => !t.resolveDisabled(l));
        return a === -1 ? a : r.length - 1 - a;
      }
      case 4:
        return r.findIndex((a) => t.resolveId(a) === e.id);
      case 5:
        return null;
      default:
        br(e);
    }
  })();
  return i === -1 ? o : i;
}
function G(e) {
  let t = e.parentElement, r = null;
  for (; t && !(t instanceof HTMLFieldSetElement); )
    t instanceof HTMLLegendElement && (r = t), t = t.parentElement;
  let o = (t == null ? void 0 : t.getAttribute("disabled")) === "";
  return o && Tr(r) ? false : o;
}
function Tr(e) {
  if (!e)
    return false;
  let t = e.previousElementSibling;
  for (; t !== null; ) {
    if (t instanceof HTMLLegendElement)
      return false;
    t = t.previousElementSibling;
  }
  return true;
}
function w(e, t, r) {
  let o = (0, import_react11.useRef)(t);
  o.current = t, (0, import_react11.useEffect)(() => {
    function n(i) {
      o.current.call(window, i);
    }
    return window.addEventListener(e, n, r), () => window.removeEventListener(e, n, r);
  }, [e, r]);
}
var Pt = (0, import_react12.createContext)(null);
Pt.displayName = "OpenClosedContext";
function _() {
  return (0, import_react12.useContext)(Pt);
}
function W({ value: e, children: t }) {
  return import_react12.default.createElement(Pt.Provider, { value: e }, t);
}
function ro(e) {
  var r;
  if (e.type)
    return e.type;
  let t = (r = e.as) != null ? r : "button";
  if (typeof t == "string" && t.toLowerCase() === "button")
    return "button";
}
function U(e, t) {
  let [r, o] = (0, import_react13.useState)(() => ro(e));
  return x(() => {
    o(ro(e));
  }, [e.type, e.as]), x(() => {
    r || !t.current || t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && o("button");
  }, [r, t]), r;
}
function se({ container: e, accept: t, walk: r, enabled: o = true }) {
  let n = (0, import_react14.useRef)(t), i = (0, import_react14.useRef)(r);
  (0, import_react14.useEffect)(() => {
    n.current = t, i.current = r;
  }, [t, r]), x(() => {
    if (!e || !o)
      return;
    let a = n.current, l = i.current, s = Object.assign((c) => a(c), { acceptNode: a }), u = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, s, false);
    for (; u.nextNode(); )
      l(u.currentNode);
  }, [e, o, n, i]);
}
var Ar = { [1](e) {
  return e.disabled || e.comboboxState === 1 ? e : { ...e, activeOptionIndex: null, comboboxState: 1 };
}, [0](e) {
  return e.disabled || e.comboboxState === 0 ? e : { ...e, comboboxState: 0 };
}, [2](e, t) {
  return e.disabled === t.disabled ? e : { ...e, disabled: t.disabled };
}, [3](e, t) {
  if (e.disabled || e.optionsRef.current && !e.optionsPropsRef.current.static && e.comboboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.activeOptionIndex === r ? e : { ...e, activeOptionIndex: r };
}, [4]: (e, t) => {
  var i;
  let r = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null, o = Array.from((i = e.optionsRef.current) == null ? void 0 : i.querySelectorAll('[id^="headlessui-combobox-option-"]')).reduce((a, l, s) => Object.assign(a, { [l.id]: s }), {}), n = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((a, l) => o[a.id] - o[l.id]);
  return { ...e, options: n, activeOptionIndex: (() => r === null ? null : n.indexOf(r))() };
}, [5]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, options: r, activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))() };
} };
var vt = (0, import_react2.createContext)(null);
vt.displayName = "ComboboxContext";
function pe(e) {
  let t = (0, import_react2.useContext)(vt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Combobox /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, pe), r;
  }
  return t;
}
var Rt = (0, import_react2.createContext)(null);
Rt.displayName = "ComboboxActions";
function Ue() {
  let e = (0, import_react2.useContext)(Rt);
  if (e === null) {
    let t = new Error("ComboboxActions is missing a parent <Combobox /> component.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ue), t;
  }
  return e;
}
function hr(e, t) {
  return S(t.type, Ar, e, t);
}
var Or = import_react2.Fragment;
var Ir = D(function(t, r) {
  let { value: o, onChange: n, disabled: i = false, ...a } = t, l = (0, import_react2.useRef)({ value: o, onChange: n }), s = (0, import_react2.useRef)({ static: false, hold: false }), u = (0, import_react2.useRef)({ displayValue: void 0 }), c = (0, import_react2.useReducer)(hr, { comboboxState: 1, comboboxPropsRef: l, optionsPropsRef: s, inputPropsRef: u, labelRef: (0, import_react2.createRef)(), inputRef: (0, import_react2.createRef)(), buttonRef: (0, import_react2.createRef)(), optionsRef: (0, import_react2.createRef)(), disabled: i, options: [], activeOptionIndex: null }), [{ comboboxState: m, options: b, activeOptionIndex: T, optionsRef: y, inputRef: p, buttonRef: f }, d] = c;
  x(() => {
    l.current.value = o;
  }, [o, l]), x(() => {
    l.current.onChange = n;
  }, [n, l]), x(() => d({ type: 2, disabled: i }), [i]), w("mousedown", (O) => {
    var N, K, V;
    let L = O.target;
    m === 0 && (((N = f.current) == null ? void 0 : N.contains(L)) || ((K = p.current) == null ? void 0 : K.contains(L)) || ((V = y.current) == null ? void 0 : V.contains(L)) || d({ type: 1 }));
  });
  let P = T === null ? null : b[T].dataRef.current.value, C = (0, import_react2.useMemo)(() => ({ open: m === 0, disabled: i, activeIndex: T, activeOption: P }), [m, i, b, T]), R = (0, import_react2.useCallback)(() => {
    if (!p.current || o === void 0)
      return;
    let O = u.current.displayValue;
    typeof O == "function" ? p.current.value = O(o) : typeof o == "string" && (p.current.value = o);
  }, [o, p, u]), g = (0, import_react2.useCallback)((O) => {
    let L = b.find((K) => K.id === O);
    if (!L)
      return;
    let { dataRef: N } = L;
    l.current.onChange(N.current.value), R();
  }, [b, l, p]), v = (0, import_react2.useCallback)(() => {
    if (T !== null) {
      let { dataRef: O } = b[T];
      l.current.onChange(O.current.value), R();
    }
  }, [T, b, l, p]), h = (0, import_react2.useMemo)(() => ({ selectOption: g, selectActiveOption: v }), [g, v]);
  return x(() => {
    m === 1 && R();
  }, [R, m]), x(R, [R]), import_react2.default.createElement(Rt.Provider, { value: h }, import_react2.default.createElement(vt.Provider, { value: c }, import_react2.default.createElement(W, { value: S(m, { [0]: 0, [1]: 1 }) }, E({ props: r === null ? a : { ...a, ref: r }, slot: C, defaultTag: Or, name: "Combobox" }))));
});
var Lr = "input";
var Dr = D(function(t, r) {
  var R, g;
  let { value: o, onChange: n, displayValue: i, ...a } = t, [l, s] = pe("Combobox.Input"), u = Ue(), c = I(l.inputRef, r), m = l.inputPropsRef, b = `headlessui-combobox-input-${A()}`, T = Q(), y = ke(n);
  x(() => {
    m.current.displayValue = i;
  }, [i, m]);
  let p = (0, import_react2.useCallback)((v) => {
    switch (v.key) {
      case "Enter":
        v.preventDefault(), v.stopPropagation(), u.selectActiveOption(), s({ type: 1 });
        break;
      case "ArrowDown":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 2 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 0 });
          });
        } });
      case "ArrowUp":
        return v.preventDefault(), v.stopPropagation(), S(l.comboboxState, { [0]: () => s({ type: 3, focus: 1 }), [1]: () => {
          s({ type: 0 }), T.nextFrame(() => {
            l.comboboxPropsRef.current.value || s({ type: 3, focus: 3 });
          });
        } });
      case "Home":
      case "PageUp":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 0 });
      case "End":
      case "PageDown":
        return v.preventDefault(), v.stopPropagation(), s({ type: 3, focus: 3 });
      case "Escape":
        return v.preventDefault(), l.optionsRef.current && !l.optionsPropsRef.current.static && v.stopPropagation(), s({ type: 1 });
      case "Tab":
        u.selectActiveOption(), s({ type: 1 });
        break;
    }
  }, [T, s, l, u]), f = (0, import_react2.useCallback)((v) => {
    var h;
    s({ type: 0 }), (h = y.current) == null || h.call(y, v);
  }, [s, y]), d = ee(() => {
    if (!!l.labelRef.current)
      return [l.labelRef.current.id].join(" ");
  }, [l.labelRef.current]), P = (0, import_react2.useMemo)(() => ({ open: l.comboboxState === 0, disabled: l.disabled }), [l]), C = { ref: c, id: b, role: "combobox", type: "text", "aria-controls": (R = l.optionsRef.current) == null ? void 0 : R.id, "aria-expanded": l.disabled ? void 0 : l.comboboxState === 0, "aria-activedescendant": l.activeOptionIndex === null || (g = l.options[l.activeOptionIndex]) == null ? void 0 : g.id, "aria-labelledby": d, disabled: l.disabled, onKeyDown: p, onChange: f };
  return E({ props: { ...a, ...C }, slot: P, defaultTag: Lr, name: "Combobox.Input" });
});
var Mr = "button";
var Fr = D(function(t, r) {
  var p;
  let [o, n] = pe("Combobox.Button"), i = Ue(), a = I(o.buttonRef, r), l = `headlessui-combobox-button-${A()}`, s = Q(), u = (0, import_react2.useCallback)((f) => {
    switch (f.key) {
      case "ArrowDown":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({ type: 3, focus: 0 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "ArrowUp":
        return f.preventDefault(), f.stopPropagation(), o.comboboxState === 1 && (n({ type: 0 }), s.nextFrame(() => {
          o.comboboxPropsRef.current.value || n({ type: 3, focus: 3 });
        })), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
      case "Escape":
        return f.preventDefault(), o.optionsRef.current && !o.optionsPropsRef.current.static && f.stopPropagation(), n({ type: 1 }), s.nextFrame(() => {
          var d;
          return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
        });
    }
  }, [s, n, o, i]), c = (0, import_react2.useCallback)((f) => {
    if (G(f.currentTarget))
      return f.preventDefault();
    o.comboboxState === 0 ? n({ type: 1 }) : (f.preventDefault(), n({ type: 0 })), s.nextFrame(() => {
      var d;
      return (d = o.inputRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    });
  }, [n, s, o]), m = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, l].join(" ");
  }, [o.labelRef.current, l]), b = (0, import_react2.useMemo)(() => ({ open: o.comboboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: a, id: l, type: U(t, o.buttonRef), tabIndex: -1, "aria-haspopup": true, "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id, "aria-expanded": o.disabled ? void 0 : o.comboboxState === 0, "aria-labelledby": m, disabled: o.disabled, onClick: c, onKeyDown: u };
  return E({ props: { ...T, ...y }, slot: b, defaultTag: Mr, name: "Combobox.Button" });
});
var wr = "label";
function kr(e) {
  let [t] = pe("Combobox.Label"), r = `headlessui-combobox-label-${A()}`, o = (0, import_react2.useCallback)(() => {
    var a;
    return (a = t.inputRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.inputRef]), n = (0, import_react2.useMemo)(() => ({ open: t.comboboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: { ...e, ...i }, slot: n, defaultTag: wr, name: "Combobox.Label" });
}
var _r = "ul";
var Gr = 1 | 2;
var Hr = D(function(t, r) {
  var y;
  let { hold: o = false, ...n } = t, [i] = pe("Combobox.Options"), { optionsPropsRef: a } = i, l = I(i.optionsRef, r), s = `headlessui-combobox-options-${A()}`, u = _(), c = (() => u !== null ? u === 0 : i.comboboxState === 0)();
  x(() => {
    var p;
    a.current.static = (p = t.static) != null ? p : false;
  }, [a, t.static]), x(() => {
    a.current.hold = o;
  }, [o, a]), se({ container: i.optionsRef.current, enabled: i.comboboxState === 0, accept(p) {
    return p.getAttribute("role") === "option" ? NodeFilter.FILTER_REJECT : p.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(p) {
    p.setAttribute("role", "none");
  } });
  let m = ee(() => {
    var p, f, d;
    return (d = (p = i.labelRef.current) == null ? void 0 : p.id) != null ? d : (f = i.buttonRef.current) == null ? void 0 : f.id;
  }, [i.labelRef.current, i.buttonRef.current]), b = (0, import_react2.useMemo)(() => ({ open: i.comboboxState === 0 }), [i]), T = { "aria-activedescendant": i.activeOptionIndex === null || (y = i.options[i.activeOptionIndex]) == null ? void 0 : y.id, "aria-labelledby": m, role: "listbox", id: s, ref: l };
  return E({ props: { ...n, ...T }, slot: b, defaultTag: _r, features: Gr, visible: c, name: "Combobox.Options" });
});
var Ur = "li";
function Br(e) {
  let { disabled: t = false, value: r, ...o } = e, [n, i] = pe("Combobox.Option"), a = Ue(), l = `headlessui-combobox-option-${A()}`, s = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === l : false, u = n.comboboxPropsRef.current.value === r, c = (0, import_react2.useRef)({ disabled: t, value: r });
  x(() => {
    c.current.disabled = t;
  }, [c, t]), x(() => {
    c.current.value = r;
  }, [c, r]), x(() => {
    var P, C;
    c.current.textValue = (C = (P = document.getElementById(l)) == null ? void 0 : P.textContent) == null ? void 0 : C.toLowerCase();
  }, [c, l]);
  let m = (0, import_react2.useCallback)(() => a.selectOption(l), [a, l]);
  x(() => (i({ type: 4, id: l, dataRef: c }), () => i({ type: 5, id: l })), [c, l]), x(() => {
    n.comboboxState === 0 && (!u || i({ type: 3, focus: 4, id: l }));
  }, [n.comboboxState, u, l]), x(() => {
    if (n.comboboxState !== 0 || !s)
      return;
    let P = k();
    return P.requestAnimationFrame(() => {
      var C, R;
      (R = (C = document.getElementById(l)) == null ? void 0 : C.scrollIntoView) == null || R.call(C, { block: "nearest" });
    }), P.dispose;
  }, [l, s, n.comboboxState, n.activeOptionIndex]);
  let b = (0, import_react2.useCallback)((P) => {
    if (t)
      return P.preventDefault();
    m(), i({ type: 1 }), k().nextFrame(() => {
      var C;
      return (C = n.inputRef.current) == null ? void 0 : C.focus({ preventScroll: true });
    });
  }, [i, n.inputRef, t, m]), T = (0, import_react2.useCallback)(() => {
    if (t)
      return i({ type: 3, focus: 5 });
    i({ type: 3, focus: 4, id: l });
  }, [t, l, i]), y = (0, import_react2.useCallback)(() => {
    t || s || i({ type: 3, focus: 4, id: l });
  }, [t, s, l, i]), p = (0, import_react2.useCallback)(() => {
    t || !s || n.optionsPropsRef.current.hold || i({ type: 3, focus: 5 });
  }, [t, s, i, n.comboboxState, n.comboboxPropsRef]), f = (0, import_react2.useMemo)(() => ({ active: s, selected: u, disabled: t }), [s, u, t]);
  return E({ props: { ...o, ...{ id: l, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": u === true ? true : void 0, disabled: void 0, onClick: b, onFocus: T, onPointerMove: y, onMouseMove: y, onPointerLeave: p, onMouseLeave: p } }, slot: f, defaultTag: Ur, name: "Combobox.Option" });
}
var Na = Object.assign(Ir, { Input: Dr, Button: Fr, Label: kr, Options: Hr, Option: Br });
var Et = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map((e) => `${e}:not([tabindex='-1'])`).join(",");
function xe(e = document.body) {
  return e == null ? [] : Array.from(e.querySelectorAll(Et));
}
function de(e, t = 0) {
  return e === document.body ? false : S(t, { [0]() {
    return e.matches(Et);
  }, [1]() {
    let r = e;
    for (; r !== null; ) {
      if (r.matches(Et))
        return true;
      r = r.parentElement;
    }
    return false;
  } });
}
function ce(e) {
  e == null || e.focus({ preventScroll: true });
}
function M(e, t) {
  let r = Array.isArray(e) ? e.slice().sort((c, m) => {
    let b = c.compareDocumentPosition(m);
    return b & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : b & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  }) : xe(e), o = document.activeElement, n = (() => {
    if (t & (1 | 4))
      return 1;
    if (t & (2 | 8))
      return -1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), i = (() => {
    if (t & 1)
      return 0;
    if (t & 2)
      return Math.max(0, r.indexOf(o)) - 1;
    if (t & 4)
      return Math.max(0, r.indexOf(o)) + 1;
    if (t & 8)
      return r.length - 1;
    throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last");
  })(), a = t & 32 ? { preventScroll: true } : {}, l = 0, s = r.length, u;
  do {
    if (l >= s || l + s <= 0)
      return 0;
    let c = i + l;
    if (t & 16)
      c = (c + s) % s;
    else {
      if (c < 0)
        return 3;
      if (c >= s)
        return 1;
    }
    u = r[c], u == null || u.focus(a), l += n;
  } while (u !== document.activeElement);
  return u.hasAttribute("tabindex") || u.setAttribute("tabindex", "0"), 2;
}
function Be() {
  let e = (0, import_react17.useRef)(false);
  return (0, import_react17.useEffect)(() => (e.current = true, () => {
    e.current = false;
  }), []), e;
}
function Ne(e, t = 30, { initialFocus: r, containers: o } = {}) {
  let n = (0, import_react16.useRef)(typeof window != "undefined" ? document.activeElement : null), i = (0, import_react16.useRef)(null), a = Be(), l = Boolean(t & 16), s = Boolean(t & 2);
  (0, import_react16.useEffect)(() => {
    !l || (n.current = document.activeElement);
  }, [l]), (0, import_react16.useEffect)(() => {
    if (!!l)
      return () => {
        ce(n.current), n.current = null;
      };
  }, [l]), (0, import_react16.useEffect)(() => {
    if (!s || !e.current)
      return;
    let u = document.activeElement;
    if (r == null ? void 0 : r.current) {
      if ((r == null ? void 0 : r.current) === u) {
        i.current = u;
        return;
      }
    } else if (e.current.contains(u)) {
      i.current = u;
      return;
    }
    (r == null ? void 0 : r.current) ? ce(r.current) : M(e.current, 1) === 0 && console.warn("There are no focusable elements inside the <FocusTrap />"), i.current = document.activeElement;
  }, [e, r, s]), w("keydown", (u) => {
    !(t & 4) || !e.current || u.key === "Tab" && (u.preventDefault(), M(e.current, (u.shiftKey ? 2 : 4) | 16) === 2 && (i.current = document.activeElement));
  }), w("focus", (u) => {
    if (!(t & 8))
      return;
    let c = new Set(o == null ? void 0 : o.current);
    if (c.add(e), !c.size)
      return;
    let m = i.current;
    if (!m || !a.current)
      return;
    let b = u.target;
    b && b instanceof HTMLElement ? Kr(c, b) ? (i.current = b, ce(b)) : (u.preventDefault(), u.stopPropagation(), ce(m)) : ce(i.current);
  }, true);
}
function Kr(e, t) {
  var r;
  for (let o of e)
    if ((r = o.current) == null ? void 0 : r.contains(t))
      return true;
  return false;
}
var fe = new Set();
var J = new Map();
function po(e) {
  e.setAttribute("aria-hidden", "true"), e.inert = true;
}
function co(e) {
  let t = J.get(e);
  !t || (t["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", t["aria-hidden"]), e.inert = t.inert);
}
function fo(e, t = true) {
  x(() => {
    if (!t || !e.current)
      return;
    let r = e.current;
    fe.add(r);
    for (let o of J.keys())
      o.contains(r) && (co(o), J.delete(o));
    return document.querySelectorAll("body > *").forEach((o) => {
      if (o instanceof HTMLElement) {
        for (let n of fe)
          if (o.contains(n))
            return;
        fe.size === 1 && (J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o));
      }
    }), () => {
      if (fe.delete(r), fe.size > 0)
        document.querySelectorAll("body > *").forEach((o) => {
          if (o instanceof HTMLElement && !J.has(o)) {
            for (let n of fe)
              if (o.contains(n))
                return;
            J.set(o, { "aria-hidden": o.getAttribute("aria-hidden"), inert: o.inert }), po(o);
          }
        });
      else
        for (let o of J.keys())
          co(o), J.delete(o);
    };
  }, [t]);
}
var mo = (0, import_react19.createContext)(false);
function bo() {
  return (0, import_react19.useContext)(mo);
}
function At(e) {
  return import_react19.default.createElement(mo.Provider, { value: e.force }, e.children);
}
function Xr() {
  let e = bo(), t = (0, import_react18.useContext)(Po), [r, o] = (0, import_react18.useState)(() => {
    if (!e && t !== null || typeof window == "undefined")
      return null;
    let n = document.getElementById("headlessui-portal-root");
    if (n)
      return n;
    let i = document.createElement("div");
    return i.setAttribute("id", "headlessui-portal-root"), document.body.appendChild(i);
  });
  return (0, import_react18.useEffect)(() => {
    r !== null && (document.body.contains(r) || document.body.appendChild(r));
  }, [r]), (0, import_react18.useEffect)(() => {
    e || t !== null && o(t.current);
  }, [t, o, e]), r;
}
var Jr = import_react18.Fragment;
function We(e) {
  let t = e, r = Xr(), [o] = (0, import_react18.useState)(() => typeof window == "undefined" ? null : document.createElement("div")), n = q();
  return x(() => {
    if (!!r && !!o)
      return r.appendChild(o), () => {
        var i;
        !r || !o || (r.removeChild(o), r.childNodes.length <= 0 && ((i = r.parentElement) == null || i.removeChild(r)));
      };
  }, [r, o]), n ? !r || !o ? null : (0, import_react_dom.createPortal)(E({ props: t, defaultTag: Jr, name: "Portal" }), o) : null;
}
var Zr = import_react18.Fragment;
var Po = (0, import_react18.createContext)(null);
function en(e) {
  let { target: t, ...r } = e;
  return import_react18.default.createElement(Po.Provider, { value: t }, E({ props: r, defaultTag: Zr, name: "Popover.Group" }));
}
We.Group = en;
var vo = (0, import_react20.createContext)(null);
function Ro() {
  let e = (0, import_react20.useContext)(vo);
  if (e === null) {
    let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Ro), t;
  }
  return e;
}
function re() {
  let [e, t] = (0, import_react20.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react20.useMemo)(() => function(o) {
    let n = (0, import_react20.useCallback)((a) => (t((l) => [...l, a]), () => t((l) => {
      let s = l.slice(), u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i = (0, import_react20.useMemo)(() => ({ register: n, slot: o.slot, name: o.name, props: o.props }), [n, o.slot, o.name, o.props]);
    return import_react20.default.createElement(vo.Provider, { value: i }, o.children);
  }, [t])];
}
var an = "p";
function me(e) {
  let t = Ro(), r = `headlessui-description-${A()}`;
  x(() => t.register(r), [r, t.register]);
  let o = e, n = { ...t.props, id: r };
  return E({ props: { ...o, ...n }, slot: t.slot || {}, defaultTag: an, name: t.name || "Description" });
}
var ht = (0, import_react21.createContext)(() => {
});
ht.displayName = "StackContext";
function cn() {
  return (0, import_react21.useContext)(ht);
}
function Eo({ children: e, onUpdate: t, type: r, element: o }) {
  let n = cn(), i = (0, import_react21.useCallback)((...a) => {
    t == null || t(...a), n(...a);
  }, [n, t]);
  return x(() => (i(0, r, o), () => i(1, r, o)), [i, r, o]), import_react21.default.createElement(ht.Provider, { value: i }, e);
}
var yn = { [0](e, t) {
  return e.titleId === t.id ? e : { ...e, titleId: t.id };
} };
var Ve = (0, import_react15.createContext)(null);
Ve.displayName = "DialogContext";
function It(e) {
  let t = (0, import_react15.useContext)(Ve);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${An.displayName} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, It), r;
  }
  return t;
}
function gn(e, t) {
  return S(t.type, yn, e, t);
}
var Pn = "div";
var xn = 1 | 2;
var vn = D(function(t, r) {
  let { open: o, onClose: n, initialFocus: i, ...a } = t, [l, s] = (0, import_react15.useState)(0), u = _();
  o === void 0 && u !== null && (o = S(u, { [0]: true, [1]: false }));
  let c = (0, import_react15.useRef)(new Set()), m = (0, import_react15.useRef)(null), b = I(m, r), T = t.hasOwnProperty("open") || u !== null, y = t.hasOwnProperty("onClose");
  if (!T && !y)
    throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
  if (!T)
    throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
  if (!y)
    throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
  if (typeof o != "boolean")
    throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);
  if (typeof n != "function")
    throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${n}`);
  let p = o ? 0 : 1, f = (() => u !== null ? u === 0 : p === 0)(), [d, P] = (0, import_react15.useReducer)(gn, { titleId: null, descriptionId: null }), C = (0, import_react15.useCallback)(() => n(false), [n]), R = (0, import_react15.useCallback)((F) => P({ type: 0, id: F }), [P]), v = q() && p === 0, h = l > 1, O = (0, import_react15.useContext)(Ve) !== null;
  Ne(m, v ? S(h ? "parent" : "leaf", { parent: 16, leaf: 30 }) : 1, { initialFocus: i, containers: c }), fo(m, h ? v : false), w("mousedown", (F) => {
    var H;
    let $ = F.target;
    p === 0 && (h || ((H = m.current) == null ? void 0 : H.contains($)) || C());
  }), w("keydown", (F) => {
    F.key === "Escape" && p === 0 && (h || (F.preventDefault(), F.stopPropagation(), C()));
  }), (0, import_react15.useEffect)(() => {
    if (p !== 0 || O)
      return;
    let F = document.documentElement.style.overflow, $ = document.documentElement.style.paddingRight, H = window.innerWidth - document.documentElement.clientWidth;
    return document.documentElement.style.overflow = "hidden", document.documentElement.style.paddingRight = `${H}px`, () => {
      document.documentElement.style.overflow = F, document.documentElement.style.paddingRight = $;
    };
  }, [p, O]), (0, import_react15.useEffect)(() => {
    if (p !== 0 || !m.current)
      return;
    let F = new IntersectionObserver(($) => {
      for (let H of $)
        H.boundingClientRect.x === 0 && H.boundingClientRect.y === 0 && H.boundingClientRect.width === 0 && H.boundingClientRect.height === 0 && C();
    });
    return F.observe(m.current), () => F.disconnect();
  }, [p, m, C]);
  let [N, K] = re(), V = `headlessui-dialog-${A()}`, Fe = (0, import_react15.useMemo)(() => [{ dialogState: p, close: C, setTitleId: R }, d], [p, d, C, R]), ge = (0, import_react15.useMemo)(() => ({ open: p === 0 }), [p]), we = { ref: b, id: V, role: "dialog", "aria-modal": p === 0 ? true : void 0, "aria-labelledby": d.titleId, "aria-describedby": N, onClick(F) {
    F.stopPropagation();
  } }, X = a;
  return import_react15.default.createElement(Eo, { type: "Dialog", element: m, onUpdate: (0, import_react15.useCallback)((F, $, H) => {
    $ === "Dialog" && S(F, { [0]() {
      c.current.add(H), s((Pe) => Pe + 1);
    }, [1]() {
      c.current.add(H), s((Pe) => Pe - 1);
    } });
  }, []) }, import_react15.default.createElement(At, { force: true }, import_react15.default.createElement(We, null, import_react15.default.createElement(Ve.Provider, { value: Fe }, import_react15.default.createElement(We.Group, { target: m }, import_react15.default.createElement(At, { force: false }, import_react15.default.createElement(K, { slot: ge, name: "Dialog.Description" }, E({ props: { ...X, ...we }, slot: ge, defaultTag: Pn, features: xn, visible: f, name: "Dialog" }))))))));
});
var Rn = "div";
var En = D(function(t, r) {
  let [{ dialogState: o, close: n }] = It("Dialog.Overlay"), i = I(r), a = `headlessui-dialog-overlay-${A()}`, l = (0, import_react15.useCallback)((m) => {
    if (m.target === m.currentTarget) {
      if (G(m.currentTarget))
        return m.preventDefault();
      m.preventDefault(), m.stopPropagation(), n();
    }
  }, [n]), s = (0, import_react15.useMemo)(() => ({ open: o === 0 }), [o]);
  return E({ props: { ...t, ...{ ref: i, id: a, "aria-hidden": true, onClick: l } }, slot: s, defaultTag: Rn, name: "Dialog.Overlay" });
});
var Cn = "h2";
function Sn(e) {
  let [{ dialogState: t, setTitleId: r }] = It("Dialog.Title"), o = `headlessui-dialog-title-${A()}`;
  (0, import_react15.useEffect)(() => (r(o), () => r(null)), [o, r]);
  let n = (0, import_react15.useMemo)(() => ({ open: t === 0 }), [t]);
  return E({ props: { ...e, ...{ id: o } }, slot: n, defaultTag: Cn, name: "Dialog.Title" });
}
var An = Object.assign(vn, { Overlay: En, Title: Sn, Description: me });
var Ln = { [0]: (e) => ({ ...e, disclosureState: S(e.disclosureState, { [0]: 1, [1]: 0 }) }), [1]: (e) => e.disclosureState === 1 ? e : { ...e, disclosureState: 1 }, [4](e) {
  return e.linkedPanel === true ? e : { ...e, linkedPanel: true };
}, [5](e) {
  return e.linkedPanel === false ? e : { ...e, linkedPanel: false };
}, [2](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [3](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} };
var Mt = (0, import_react22.createContext)(null);
Mt.displayName = "DisclosureContext";
function Ft(e) {
  let t = (0, import_react22.useContext)(Mt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ft), r;
  }
  return t;
}
var wt = (0, import_react22.createContext)(null);
wt.displayName = "DisclosureAPIContext";
function Ao(e) {
  let t = (0, import_react22.useContext)(wt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ye.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ao), r;
  }
  return t;
}
var kt = (0, import_react22.createContext)(null);
kt.displayName = "DisclosurePanelContext";
function Dn() {
  return (0, import_react22.useContext)(kt);
}
function Mn(e, t) {
  return S(t.type, Ln, e, t);
}
var Fn = import_react22.Fragment;
function Ye(e) {
  let { defaultOpen: t = false, ...r } = e, o = `headlessui-disclosure-button-${A()}`, n = `headlessui-disclosure-panel-${A()}`, i = (0, import_react22.useReducer)(Mn, { disclosureState: t ? 0 : 1, linkedPanel: false, buttonId: o, panelId: n }), [{ disclosureState: a }, l] = i;
  (0, import_react22.useEffect)(() => l({ type: 2, buttonId: o }), [o, l]), (0, import_react22.useEffect)(() => l({ type: 3, panelId: n }), [n, l]);
  let s = (0, import_react22.useCallback)((m) => {
    l({ type: 1 });
    let b = (() => m ? m instanceof HTMLElement ? m : m.current instanceof HTMLElement ? m.current : document.getElementById(o) : document.getElementById(o))();
    b == null || b.focus();
  }, [l, o]), u = (0, import_react22.useMemo)(() => ({ close: s }), [s]), c = (0, import_react22.useMemo)(() => ({ open: a === 0, close: s }), [a, s]);
  return import_react22.default.createElement(Mt.Provider, { value: i }, import_react22.default.createElement(wt.Provider, { value: u }, import_react22.default.createElement(W, { value: S(a, { [0]: 0, [1]: 1 }) }, E({ props: r, slot: c, defaultTag: Fn, name: "Disclosure" }))));
}
var wn = "button";
var kn = D(function(t, r) {
  let [o, n] = Ft("Disclosure.Button"), i = (0, import_react22.useRef)(null), a = I(i, r), l = Dn(), s = l === null ? false : l === o.panelId, u = (0, import_react22.useCallback)((f) => {
    var d;
    if (s) {
      if (o.disclosureState === 1)
        return;
      switch (f.key) {
        case " ":
        case "Enter":
          f.preventDefault(), f.stopPropagation(), n({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus();
          break;
      }
    } else
      switch (f.key) {
        case " ":
        case "Enter":
          f.preventDefault(), f.stopPropagation(), n({ type: 0 });
          break;
      }
  }, [n, s, o.disclosureState, o.buttonId]), c = (0, import_react22.useCallback)((f) => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []), m = (0, import_react22.useCallback)((f) => {
    var d;
    G(f.currentTarget) || t.disabled || (s ? (n({ type: 0 }), (d = document.getElementById(o.buttonId)) == null || d.focus()) : n({ type: 0 }));
  }, [n, t.disabled, o.buttonId, s]), b = (0, import_react22.useMemo)(() => ({ open: o.disclosureState === 0 }), [o]), T = U(t, i), y = t, p = s ? { ref: a, type: T, onKeyDown: u, onClick: m } : { ref: a, id: o.buttonId, type: T, "aria-expanded": t.disabled ? void 0 : o.disclosureState === 0, "aria-controls": o.linkedPanel ? o.panelId : void 0, onKeyDown: u, onKeyUp: c, onClick: m };
  return E({ props: { ...y, ...p }, slot: b, defaultTag: wn, name: "Disclosure.Button" });
});
var _n = "div";
var Gn = 1 | 2;
var Hn = D(function(t, r) {
  let [o, n] = Ft("Disclosure.Panel"), { close: i } = Ao("Disclosure.Panel"), a = I(r, () => {
    o.linkedPanel || n({ type: 4 });
  }), l = _(), s = (() => l !== null ? l === 0 : o.disclosureState === 0)();
  (0, import_react22.useEffect)(() => () => n({ type: 5 }), [n]), (0, import_react22.useEffect)(() => {
    var b;
    o.disclosureState === 1 && ((b = t.unmount) != null ? b : true) && n({ type: 5 });
  }, [o.disclosureState, t.unmount, n]);
  let u = (0, import_react22.useMemo)(() => ({ open: o.disclosureState === 0, close: i }), [o, i]), c = { ref: a, id: o.panelId }, m = t;
  return import_react22.default.createElement(kt.Provider, { value: o.panelId }, E({ props: { ...m, ...c }, slot: u, defaultTag: _n, features: Gn, visible: s, name: "Disclosure.Panel" }));
});
Ye.Button = kn;
Ye.Panel = Hn;
var $n = { [1](e) {
  return e.disabled || e.listboxState === 1 ? e : { ...e, activeOptionIndex: null, listboxState: 1 };
}, [0](e) {
  return e.disabled || e.listboxState === 0 ? e : { ...e, listboxState: 0 };
}, [2](e, t) {
  return e.disabled === t.disabled ? e : { ...e, disabled: t.disabled };
}, [3](e, t) {
  return e.orientation === t.orientation ? e : { ...e, orientation: t.orientation };
}, [4](e, t) {
  if (e.disabled || e.listboxState === 1)
    return e;
  let r = ae(t, { resolveItems: () => e.options, resolveActiveIndex: () => e.activeOptionIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeOptionIndex === r ? e : { ...e, searchQuery: "", activeOptionIndex: r };
}, [5]: (e, t) => {
  if (e.disabled || e.listboxState === 1)
    return e;
  let o = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), a = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + o).concat(e.options.slice(0, e.activeOptionIndex + o)) : e.options).find((s) => {
    var u;
    return !s.dataRef.current.disabled && ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n));
  }), l = a ? e.options.indexOf(a) : -1;
  return l === -1 || l === e.activeOptionIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeOptionIndex: l };
}, [6](e) {
  return e.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : { ...e, searchQuery: "" };
}, [7]: (e, t) => {
  var n;
  let r = Array.from((n = e.optionsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-listbox-option-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.options, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return { ...e, options: o };
}, [8]: (e, t) => {
  let r = e.options.slice(), o = e.activeOptionIndex !== null ? r[e.activeOptionIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, options: r, activeOptionIndex: (() => n === e.activeOptionIndex || o === null ? null : r.indexOf(o))() };
} };
var Gt = (0, import_react24.createContext)(null);
Gt.displayName = "ListboxContext";
function Re(e) {
  let t = (0, import_react24.useContext)(Gt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ee.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Re), r;
  }
  return t;
}
function Qn(e, t) {
  return S(t.type, $n, e, t);
}
var qn = import_react24.Fragment;
function Ee(e) {
  let { value: t, onChange: r, disabled: o = false, horizontal: n = false, ...i } = e, a = n ? "horizontal" : "vertical", l = (0, import_react24.useReducer)(Qn, { listboxState: 1, propsRef: { current: { value: t, onChange: r } }, labelRef: (0, import_react24.createRef)(), buttonRef: (0, import_react24.createRef)(), optionsRef: (0, import_react24.createRef)(), disabled: o, orientation: a, options: [], searchQuery: "", activeOptionIndex: null }), [{ listboxState: s, propsRef: u, optionsRef: c, buttonRef: m }, b] = l;
  x(() => {
    u.current.value = t;
  }, [t, u]), x(() => {
    u.current.onChange = r;
  }, [r, u]), x(() => b({ type: 2, disabled: o }), [o]), x(() => b({ type: 3, orientation: a }), [a]), w("mousedown", (y) => {
    var f, d, P;
    let p = y.target;
    s === 0 && (((f = m.current) == null ? void 0 : f.contains(p)) || ((d = c.current) == null ? void 0 : d.contains(p)) || (b({ type: 1 }), de(p, 1) || (y.preventDefault(), (P = m.current) == null || P.focus())));
  });
  let T = (0, import_react24.useMemo)(() => ({ open: s === 0, disabled: o }), [s, o]);
  return import_react24.default.createElement(Gt.Provider, { value: l }, import_react24.default.createElement(W, { value: S(s, { [0]: 0, [1]: 1 }) }, E({ props: i, slot: T, defaultTag: qn, name: "Listbox" })));
}
var zn = "button";
var Yn = D(function(t, r) {
  var p;
  let [o, n] = Re("Listbox.Button"), i = I(o.buttonRef, r), a = `headlessui-listbox-button-${A()}`, l = Q(), s = (0, import_react24.useCallback)((f) => {
    switch (f.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        f.preventDefault(), n({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n({ type: 4, focus: 0 });
        });
        break;
      case "ArrowUp":
        f.preventDefault(), n({ type: 0 }), l.nextFrame(() => {
          o.propsRef.current.value || n({ type: 4, focus: 3 });
        });
        break;
    }
  }, [n, o, l]), u = (0, import_react24.useCallback)((f) => {
    switch (f.key) {
      case " ":
        f.preventDefault();
        break;
    }
  }, []), c = (0, import_react24.useCallback)((f) => {
    if (G(f.currentTarget))
      return f.preventDefault();
    o.listboxState === 0 ? (n({ type: 1 }), l.nextFrame(() => {
      var d;
      return (d = o.buttonRef.current) == null ? void 0 : d.focus({ preventScroll: true });
    })) : (f.preventDefault(), n({ type: 0 }));
  }, [n, l, o]), m = ee(() => {
    if (!!o.labelRef.current)
      return [o.labelRef.current.id, a].join(" ");
  }, [o.labelRef.current, a]), b = (0, import_react24.useMemo)(() => ({ open: o.listboxState === 0, disabled: o.disabled }), [o]), T = t, y = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (p = o.optionsRef.current) == null ? void 0 : p.id, "aria-expanded": o.disabled ? void 0 : o.listboxState === 0, "aria-labelledby": m, disabled: o.disabled, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: { ...T, ...y }, slot: b, defaultTag: zn, name: "Listbox.Button" });
});
var Xn = "label";
function Jn(e) {
  let [t] = Re("Listbox.Label"), r = `headlessui-listbox-label-${A()}`, o = (0, import_react24.useCallback)(() => {
    var a;
    return (a = t.buttonRef.current) == null ? void 0 : a.focus({ preventScroll: true });
  }, [t.buttonRef]), n = (0, import_react24.useMemo)(() => ({ open: t.listboxState === 0, disabled: t.disabled }), [t]), i = { ref: t.labelRef, id: r, onClick: o };
  return E({ props: { ...e, ...i }, slot: n, defaultTag: Xn, name: "Listbox.Label" });
}
var Zn = "ul";
var ei = 1 | 2;
var ti = D(function(t, r) {
  var f;
  let [o, n] = Re("Listbox.Options"), i = I(o.optionsRef, r), a = `headlessui-listbox-options-${A()}`, l = Q(), s = Q(), u = _(), c = (() => u !== null ? u === 0 : o.listboxState === 0)();
  x(() => {
    let d = o.optionsRef.current;
    !d || o.listboxState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.listboxState, o.optionsRef]);
  let m = (0, import_react24.useCallback)((d) => {
    switch (s.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n({ type: 5, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({ type: 1 }), o.activeOptionIndex !== null) {
          let { dataRef: P } = o.options[o.activeOptionIndex];
          o.propsRef.current.onChange(P.current.value);
        }
        k().nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
        break;
      case S(o.orientation, { vertical: "ArrowDown", horizontal: "ArrowRight" }):
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 2 });
      case S(o.orientation, { vertical: "ArrowUp", horizontal: "ArrowLeft" }):
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 4, focus: 3 });
      case "Escape":
        return d.preventDefault(), d.stopPropagation(), n({ type: 1 }), l.nextFrame(() => {
          var P;
          return (P = o.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
        });
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n({ type: 5, value: d.key }), s.setTimeout(() => n({ type: 6 }), 350));
        break;
    }
  }, [l, n, s, o]), b = ee(() => {
    var d, P, C;
    return (C = (d = o.labelRef.current) == null ? void 0 : d.id) != null ? C : (P = o.buttonRef.current) == null ? void 0 : P.id;
  }, [o.labelRef.current, o.buttonRef.current]), T = (0, import_react24.useMemo)(() => ({ open: o.listboxState === 0 }), [o]), y = { "aria-activedescendant": o.activeOptionIndex === null || (f = o.options[o.activeOptionIndex]) == null ? void 0 : f.id, "aria-labelledby": b, "aria-orientation": o.orientation, id: a, onKeyDown: m, role: "listbox", tabIndex: 0, ref: i };
  return E({ props: { ...t, ...y }, slot: T, defaultTag: Zn, features: ei, visible: c, name: "Listbox.Options" });
});
var oi = "li";
function ri(e) {
  let { disabled: t = false, value: r, ...o } = e, [n, i] = Re("Listbox.Option"), a = `headlessui-listbox-option-${A()}`, l = n.activeOptionIndex !== null ? n.options[n.activeOptionIndex].id === a : false, s = n.propsRef.current.value === r, u = (0, import_react24.useRef)({ disabled: t, value: r });
  x(() => {
    u.current.disabled = t;
  }, [u, t]), x(() => {
    u.current.value = r;
  }, [u, r]), x(() => {
    var d, P;
    u.current.textValue = (P = (d = document.getElementById(a)) == null ? void 0 : d.textContent) == null ? void 0 : P.toLowerCase();
  }, [u, a]);
  let c = (0, import_react24.useCallback)(() => n.propsRef.current.onChange(r), [n.propsRef, r]);
  x(() => (i({ type: 7, id: a, dataRef: u }), () => i({ type: 8, id: a })), [u, a]), x(() => {
    var d, P;
    n.listboxState === 0 && (!s || (i({ type: 4, focus: 4, id: a }), (P = (d = document.getElementById(a)) == null ? void 0 : d.focus) == null || P.call(d)));
  }, [n.listboxState]), x(() => {
    if (n.listboxState !== 0 || !l)
      return;
    let d = k();
    return d.requestAnimationFrame(() => {
      var P, C;
      (C = (P = document.getElementById(a)) == null ? void 0 : P.scrollIntoView) == null || C.call(P, { block: "nearest" });
    }), d.dispose;
  }, [a, l, n.listboxState, n.activeOptionIndex]);
  let m = (0, import_react24.useCallback)((d) => {
    if (t)
      return d.preventDefault();
    c(), i({ type: 1 }), k().nextFrame(() => {
      var P;
      return (P = n.buttonRef.current) == null ? void 0 : P.focus({ preventScroll: true });
    });
  }, [i, n.buttonRef, t, c]), b = (0, import_react24.useCallback)(() => {
    if (t)
      return i({ type: 4, focus: 5 });
    i({ type: 4, focus: 4, id: a });
  }, [t, a, i]), T = (0, import_react24.useCallback)(() => {
    t || l || i({ type: 4, focus: 4, id: a });
  }, [t, l, a, i]), y = (0, import_react24.useCallback)(() => {
    t || !l || i({ type: 4, focus: 5 });
  }, [t, l, i]), p = (0, import_react24.useMemo)(() => ({ active: l, selected: s, disabled: t }), [l, s, t]);
  return E({ props: { ...o, ...{ id: a, role: "option", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, "aria-selected": s === true ? true : void 0, disabled: void 0, onClick: m, onFocus: b, onPointerMove: T, onMouseMove: T, onPointerLeave: y, onMouseLeave: y } }, slot: p, defaultTag: oi, name: "Listbox.Option" });
}
Ee.Button = Yn;
Ee.Label = Jn;
Ee.Options = ti;
Ee.Option = ri;
var ui = { [1](e) {
  return e.menuState === 1 ? e : { ...e, activeItemIndex: null, menuState: 1 };
}, [0](e) {
  return e.menuState === 0 ? e : { ...e, menuState: 0 };
}, [2]: (e, t) => {
  let r = ae(t, { resolveItems: () => e.items, resolveActiveIndex: () => e.activeItemIndex, resolveId: (o) => o.id, resolveDisabled: (o) => o.dataRef.current.disabled });
  return e.searchQuery === "" && e.activeItemIndex === r ? e : { ...e, searchQuery: "", activeItemIndex: r };
}, [3]: (e, t) => {
  let o = e.searchQuery !== "" ? 0 : 1, n = e.searchQuery + t.value.toLowerCase(), a = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + o).concat(e.items.slice(0, e.activeItemIndex + o)) : e.items).find((s) => {
    var u;
    return ((u = s.dataRef.current.textValue) == null ? void 0 : u.startsWith(n)) && !s.dataRef.current.disabled;
  }), l = a ? e.items.indexOf(a) : -1;
  return l === -1 || l === e.activeItemIndex ? { ...e, searchQuery: n } : { ...e, searchQuery: n, activeItemIndex: l };
}, [4](e) {
  return e.searchQuery === "" ? e : { ...e, searchQuery: "", searchActiveItemIndex: null };
}, [5]: (e, t) => {
  var n;
  let r = Array.from((n = e.itemsRef.current) == null ? void 0 : n.querySelectorAll('[id^="headlessui-menu-item-"]')).reduce((i, a, l) => Object.assign(i, { [a.id]: l }), {}), o = [...e.items, { id: t.id, dataRef: t.dataRef }].sort((i, a) => r[i.id] - r[a.id]);
  return { ...e, items: o };
}, [6]: (e, t) => {
  let r = e.items.slice(), o = e.activeItemIndex !== null ? r[e.activeItemIndex] : null, n = r.findIndex((i) => i.id === t.id);
  return n !== -1 && r.splice(n, 1), { ...e, items: r, activeItemIndex: (() => n === e.activeItemIndex || o === null ? null : r.indexOf(o))() };
} };
var Ht = (0, import_react25.createContext)(null);
Ht.displayName = "MenuContext";
function Je(e) {
  let t = (0, import_react25.useContext)(Ht);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Ze.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Je), r;
  }
  return t;
}
function pi(e, t) {
  return S(t.type, ui, e, t);
}
var di = import_react25.Fragment;
function Ze(e) {
  let t = (0, import_react25.useReducer)(pi, { menuState: 1, buttonRef: (0, import_react25.createRef)(), itemsRef: (0, import_react25.createRef)(), items: [], searchQuery: "", activeItemIndex: null }), [{ menuState: r, itemsRef: o, buttonRef: n }, i] = t;
  w("mousedown", (l) => {
    var u, c, m;
    let s = l.target;
    r === 0 && (((u = n.current) == null ? void 0 : u.contains(s)) || ((c = o.current) == null ? void 0 : c.contains(s)) || (i({ type: 1 }), de(s, 1) || (l.preventDefault(), (m = n.current) == null || m.focus())));
  });
  let a = (0, import_react25.useMemo)(() => ({ open: r === 0 }), [r]);
  return import_react25.default.createElement(Ht.Provider, { value: t }, import_react25.default.createElement(W, { value: S(r, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: a, defaultTag: di, name: "Menu" })));
}
var ci = "button";
var fi = D(function(t, r) {
  var y;
  let [o, n] = Je("Menu.Button"), i = I(o.buttonRef, r), a = `headlessui-menu-button-${A()}`, l = Q(), s = (0, import_react25.useCallback)((p) => {
    switch (p.key) {
      case " ":
      case "Enter":
      case "ArrowDown":
        p.preventDefault(), p.stopPropagation(), n({ type: 0 }), l.nextFrame(() => n({ type: 2, focus: 0 }));
        break;
      case "ArrowUp":
        p.preventDefault(), p.stopPropagation(), n({ type: 0 }), l.nextFrame(() => n({ type: 2, focus: 3 }));
        break;
    }
  }, [n, l]), u = (0, import_react25.useCallback)((p) => {
    switch (p.key) {
      case " ":
        p.preventDefault();
        break;
    }
  }, []), c = (0, import_react25.useCallback)((p) => {
    if (G(p.currentTarget))
      return p.preventDefault();
    t.disabled || (o.menuState === 0 ? (n({ type: 1 }), l.nextFrame(() => {
      var f;
      return (f = o.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: true });
    })) : (p.preventDefault(), p.stopPropagation(), n({ type: 0 })));
  }, [n, l, o, t.disabled]), m = (0, import_react25.useMemo)(() => ({ open: o.menuState === 0 }), [o]), b = t, T = { ref: i, id: a, type: U(t, o.buttonRef), "aria-haspopup": true, "aria-controls": (y = o.itemsRef.current) == null ? void 0 : y.id, "aria-expanded": t.disabled ? void 0 : o.menuState === 0, onKeyDown: s, onKeyUp: u, onClick: c };
  return E({ props: { ...b, ...T }, slot: m, defaultTag: ci, name: "Menu.Button" });
});
var mi = "div";
var bi = 1 | 2;
var Ti = D(function(t, r) {
  var p, f;
  let [o, n] = Je("Menu.Items"), i = I(o.itemsRef, r), a = `headlessui-menu-items-${A()}`, l = Q(), s = _(), u = (() => s !== null ? s === 0 : o.menuState === 0)();
  (0, import_react25.useEffect)(() => {
    let d = o.itemsRef.current;
    !d || o.menuState === 0 && d !== document.activeElement && d.focus({ preventScroll: true });
  }, [o.menuState, o.itemsRef]), se({ container: o.itemsRef.current, enabled: o.menuState === 0, accept(d) {
    return d.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : d.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(d) {
    d.setAttribute("role", "none");
  } });
  let c = (0, import_react25.useCallback)((d) => {
    var P;
    switch (l.dispose(), d.key) {
      case " ":
        if (o.searchQuery !== "")
          return d.preventDefault(), d.stopPropagation(), n({ type: 3, value: d.key });
      case "Enter":
        if (d.preventDefault(), d.stopPropagation(), n({ type: 1 }), o.activeItemIndex !== null) {
          let { id: C } = o.items[o.activeItemIndex];
          (P = document.getElementById(C)) == null || P.click();
        }
        k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "ArrowDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 2 });
      case "ArrowUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 1 });
      case "Home":
      case "PageUp":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 0 });
      case "End":
      case "PageDown":
        return d.preventDefault(), d.stopPropagation(), n({ type: 2, focus: 3 });
      case "Escape":
        d.preventDefault(), d.stopPropagation(), n({ type: 1 }), k().nextFrame(() => {
          var C;
          return (C = o.buttonRef.current) == null ? void 0 : C.focus({ preventScroll: true });
        });
        break;
      case "Tab":
        d.preventDefault(), d.stopPropagation();
        break;
      default:
        d.key.length === 1 && (n({ type: 3, value: d.key }), l.setTimeout(() => n({ type: 4 }), 350));
        break;
    }
  }, [n, l, o]), m = (0, import_react25.useCallback)((d) => {
    switch (d.key) {
      case " ":
        d.preventDefault();
        break;
    }
  }, []), b = (0, import_react25.useMemo)(() => ({ open: o.menuState === 0 }), [o]), T = { "aria-activedescendant": o.activeItemIndex === null || (p = o.items[o.activeItemIndex]) == null ? void 0 : p.id, "aria-labelledby": (f = o.buttonRef.current) == null ? void 0 : f.id, id: a, onKeyDown: c, onKeyUp: m, role: "menu", tabIndex: 0, ref: i };
  return E({ props: { ...t, ...T }, slot: b, defaultTag: mi, features: bi, visible: u, name: "Menu.Items" });
});
var yi = import_react25.Fragment;
function gi(e) {
  let { disabled: t = false, onClick: r, ...o } = e, [n, i] = Je("Menu.Item"), a = `headlessui-menu-item-${A()}`, l = n.activeItemIndex !== null ? n.items[n.activeItemIndex].id === a : false;
  x(() => {
    if (n.menuState !== 0 || !l)
      return;
    let p = k();
    return p.requestAnimationFrame(() => {
      var f, d;
      (d = (f = document.getElementById(a)) == null ? void 0 : f.scrollIntoView) == null || d.call(f, { block: "nearest" });
    }), p.dispose;
  }, [a, l, n.menuState, n.activeItemIndex]);
  let s = (0, import_react25.useRef)({ disabled: t });
  x(() => {
    s.current.disabled = t;
  }, [s, t]), x(() => {
    var p, f;
    s.current.textValue = (f = (p = document.getElementById(a)) == null ? void 0 : p.textContent) == null ? void 0 : f.toLowerCase();
  }, [s, a]), x(() => (i({ type: 5, id: a, dataRef: s }), () => i({ type: 6, id: a })), [s, a]);
  let u = (0, import_react25.useCallback)((p) => {
    if (t)
      return p.preventDefault();
    if (i({ type: 1 }), k().nextFrame(() => {
      var f;
      return (f = n.buttonRef.current) == null ? void 0 : f.focus({ preventScroll: true });
    }), r)
      return r(p);
  }, [i, n.buttonRef, t, r]), c = (0, import_react25.useCallback)(() => {
    if (t)
      return i({ type: 2, focus: 5 });
    i({ type: 2, focus: 4, id: a });
  }, [t, a, i]), m = (0, import_react25.useCallback)(() => {
    t || l || i({ type: 2, focus: 4, id: a });
  }, [t, l, a, i]), b = (0, import_react25.useCallback)(() => {
    t || !l || i({ type: 2, focus: 5 });
  }, [t, l, i]), T = (0, import_react25.useMemo)(() => ({ active: l, disabled: t }), [l, t]);
  return E({ props: { ...o, ...{ id: a, role: "menuitem", tabIndex: t === true ? void 0 : -1, "aria-disabled": t === true ? true : void 0, disabled: void 0, onClick: u, onFocus: c, onPointerMove: m, onMouseMove: m, onPointerLeave: b, onMouseLeave: b } }, slot: T, defaultTag: yi, name: "Menu.Item" });
}
Ze.Button = fi;
Ze.Items = Ti;
Ze.Item = gi;
var vi = { [0]: (e) => ({ ...e, popoverState: S(e.popoverState, { [0]: 1, [1]: 0 }) }), [1](e) {
  return e.popoverState === 1 ? e : { ...e, popoverState: 1 };
}, [2](e, t) {
  return e.button === t.button ? e : { ...e, button: t.button };
}, [3](e, t) {
  return e.buttonId === t.buttonId ? e : { ...e, buttonId: t.buttonId };
}, [4](e, t) {
  return e.panel === t.panel ? e : { ...e, panel: t.panel };
}, [5](e, t) {
  return e.panelId === t.panelId ? e : { ...e, panelId: t.panelId };
} };
var Ut = (0, import_react26.createContext)(null);
Ut.displayName = "PopoverContext";
function ot(e) {
  let t = (0, import_react26.useContext)(Ut);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, ot), r;
  }
  return t;
}
var Bt = (0, import_react26.createContext)(null);
Bt.displayName = "PopoverAPIContext";
function Mo(e) {
  let t = (0, import_react26.useContext)(Bt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${Te.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Mo), r;
  }
  return t;
}
var Nt = (0, import_react26.createContext)(null);
Nt.displayName = "PopoverGroupContext";
function Fo() {
  return (0, import_react26.useContext)(Nt);
}
var Wt = (0, import_react26.createContext)(null);
Wt.displayName = "PopoverPanelContext";
function Ri() {
  return (0, import_react26.useContext)(Wt);
}
function Ei(e, t) {
  return S(t.type, vi, e, t);
}
var Ci = "div";
function Te(e) {
  let t = `headlessui-popover-button-${A()}`, r = `headlessui-popover-panel-${A()}`, o = (0, import_react26.useReducer)(Ei, { popoverState: 1, button: null, buttonId: t, panel: null, panelId: r }), [{ popoverState: n, button: i, panel: a }, l] = o;
  (0, import_react26.useEffect)(() => l({ type: 3, buttonId: t }), [t, l]), (0, import_react26.useEffect)(() => l({ type: 5, panelId: r }), [r, l]);
  let s = (0, import_react26.useMemo)(() => ({ buttonId: t, panelId: r, close: () => l({ type: 1 }) }), [t, r, l]), u = Fo(), c = u == null ? void 0 : u.registerPopover, m = (0, import_react26.useCallback)(() => {
    var p;
    return (p = u == null ? void 0 : u.isFocusWithinPopoverGroup()) != null ? p : (i == null ? void 0 : i.contains(document.activeElement)) || (a == null ? void 0 : a.contains(document.activeElement));
  }, [u, i, a]);
  (0, import_react26.useEffect)(() => c == null ? void 0 : c(s), [c, s]), w("focus", () => {
    n === 0 && (m() || !i || !a || l({ type: 1 }));
  }, true), w("mousedown", (p) => {
    let f = p.target;
    n === 0 && ((i == null ? void 0 : i.contains(f)) || (a == null ? void 0 : a.contains(f)) || (l({ type: 1 }), de(f, 1) || (p.preventDefault(), i == null || i.focus())));
  });
  let b = (0, import_react26.useCallback)((p) => {
    l({ type: 1 });
    let f = (() => p ? p instanceof HTMLElement ? p : p.current instanceof HTMLElement ? p.current : i : i)();
    f == null || f.focus();
  }, [l, i]), T = (0, import_react26.useMemo)(() => ({ close: b }), [b]), y = (0, import_react26.useMemo)(() => ({ open: n === 0, close: b }), [n, b]);
  return import_react26.default.createElement(Ut.Provider, { value: o }, import_react26.default.createElement(Bt.Provider, { value: T }, import_react26.default.createElement(W, { value: S(n, { [0]: 0, [1]: 1 }) }, E({ props: e, slot: y, defaultTag: Ci, name: "Popover" }))));
}
var Si = "button";
var Ai = D(function(t, r) {
  let [o, n] = ot("Popover.Button"), i = (0, import_react26.useRef)(null), a = Fo(), l = a == null ? void 0 : a.closeOthers, s = Ri(), u = s === null ? false : s === o.panelId, c = I(i, r, u ? null : (g) => n({ type: 2, button: g })), m = I(i, r), b = (0, import_react26.useRef)(null), T = (0, import_react26.useRef)(typeof window == "undefined" ? null : document.activeElement);
  w("focus", () => {
    T.current = b.current, b.current = document.activeElement;
  }, true);
  let y = (0, import_react26.useCallback)((g) => {
    var v, h;
    if (u) {
      if (o.popoverState === 1)
        return;
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), n({ type: 1 }), (v = o.button) == null || v.focus();
          break;
      }
    } else
      switch (g.key) {
        case " ":
        case "Enter":
          g.preventDefault(), g.stopPropagation(), o.popoverState === 1 && (l == null || l(o.buttonId)), n({ type: 0 });
          break;
        case "Escape":
          if (o.popoverState !== 0)
            return l == null ? void 0 : l(o.buttonId);
          if (!i.current || !i.current.contains(document.activeElement))
            return;
          g.preventDefault(), g.stopPropagation(), n({ type: 1 });
          break;
        case "Tab":
          if (o.popoverState !== 0 || !o.panel || !o.button)
            return;
          if (g.shiftKey) {
            if (!T.current || ((h = o.button) == null ? void 0 : h.contains(T.current)) || o.panel.contains(T.current))
              return;
            let O = xe(), L = O.indexOf(T.current);
            if (O.indexOf(o.button) > L)
              return;
            g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          } else
            g.preventDefault(), g.stopPropagation(), M(o.panel, 1);
          break;
      }
  }, [n, o.popoverState, o.buttonId, o.button, o.panel, i, l, u]), p = (0, import_react26.useCallback)((g) => {
    var v;
    if (!u && (g.key === " " && g.preventDefault(), o.popoverState === 0 && !!o.panel && !!o.button))
      switch (g.key) {
        case "Tab":
          if (!T.current || ((v = o.button) == null ? void 0 : v.contains(T.current)) || o.panel.contains(T.current))
            return;
          let h = xe(), O = h.indexOf(T.current);
          if (h.indexOf(o.button) > O)
            return;
          g.preventDefault(), g.stopPropagation(), M(o.panel, 8);
          break;
      }
  }, [o.popoverState, o.panel, o.button, u]), f = (0, import_react26.useCallback)((g) => {
    var v, h;
    G(g.currentTarget) || t.disabled || (u ? (n({ type: 1 }), (v = o.button) == null || v.focus()) : (o.popoverState === 1 && (l == null || l(o.buttonId)), (h = o.button) == null || h.focus(), n({ type: 0 })));
  }, [n, o.button, o.popoverState, o.buttonId, t.disabled, l, u]), d = (0, import_react26.useMemo)(() => ({ open: o.popoverState === 0 }), [o]), P = U(t, i), C = t, R = u ? { ref: m, type: P, onKeyDown: y, onClick: f } : { ref: c, id: o.buttonId, type: P, "aria-expanded": t.disabled ? void 0 : o.popoverState === 0, "aria-controls": o.panel ? o.panelId : void 0, onKeyDown: y, onKeyUp: p, onClick: f };
  return E({ props: { ...C, ...R }, slot: d, defaultTag: Si, name: "Popover.Button" });
});
var hi = "div";
var Oi = 1 | 2;
var Ii = D(function(t, r) {
  let [{ popoverState: o }, n] = ot("Popover.Overlay"), i = I(r), a = `headlessui-popover-overlay-${A()}`, l = _(), s = (() => l !== null ? l === 0 : o === 0)(), u = (0, import_react26.useCallback)((T) => {
    if (G(T.currentTarget))
      return T.preventDefault();
    n({ type: 1 });
  }, [n]), c = (0, import_react26.useMemo)(() => ({ open: o === 0 }), [o]);
  return E({ props: { ...t, ...{ ref: i, id: a, "aria-hidden": true, onClick: u } }, slot: c, defaultTag: hi, features: Oi, visible: s, name: "Popover.Overlay" });
});
var Li = "div";
var Di = 1 | 2;
var Mi = D(function(t, r) {
  let { focus: o = false, ...n } = t, [i, a] = ot("Popover.Panel"), { close: l } = Mo("Popover.Panel"), s = (0, import_react26.useRef)(null), u = I(s, r, (p) => {
    a({ type: 4, panel: p });
  }), c = _(), m = (() => c !== null ? c === 0 : i.popoverState === 0)(), b = (0, import_react26.useCallback)((p) => {
    var f;
    switch (p.key) {
      case "Escape":
        if (i.popoverState !== 0 || !s.current || !s.current.contains(document.activeElement))
          return;
        p.preventDefault(), p.stopPropagation(), a({ type: 1 }), (f = i.button) == null || f.focus();
        break;
    }
  }, [i, s, a]);
  (0, import_react26.useEffect)(() => () => a({ type: 4, panel: null }), [a]), (0, import_react26.useEffect)(() => {
    var p;
    t.static || i.popoverState === 1 && ((p = t.unmount) != null ? p : true) && a({ type: 4, panel: null });
  }, [i.popoverState, t.unmount, t.static, a]), (0, import_react26.useEffect)(() => {
    if (!o || i.popoverState !== 0 || !s.current)
      return;
    let p = document.activeElement;
    s.current.contains(p) || M(s.current, 1);
  }, [o, s, i.popoverState]), w("keydown", (p) => {
    var d;
    if (i.popoverState !== 0 || !s.current || p.key !== "Tab" || !document.activeElement || !s.current || !s.current.contains(document.activeElement))
      return;
    p.preventDefault();
    let f = M(s.current, p.shiftKey ? 2 : 4);
    if (f === 3)
      return (d = i.button) == null ? void 0 : d.focus();
    if (f === 1) {
      if (!i.button)
        return;
      let P = xe(), C = P.indexOf(i.button), R = P.splice(C + 1).filter((g) => {
        var v;
        return !((v = s.current) == null ? void 0 : v.contains(g));
      });
      M(R, 1) === 0 && M(document.body, 1);
    }
  }), w("focus", () => {
    var p;
    !o || i.popoverState === 0 && (!s.current || ((p = s.current) == null ? void 0 : p.contains(document.activeElement)) || a({ type: 1 }));
  }, true);
  let T = (0, import_react26.useMemo)(() => ({ open: i.popoverState === 0, close: l }), [i, l]), y = { ref: u, id: i.panelId, onKeyDown: b };
  return import_react26.default.createElement(Wt.Provider, { value: i.panelId }, E({ props: { ...n, ...y }, slot: T, defaultTag: Li, features: Di, visible: m, name: "Popover.Panel" }));
});
var Fi = "div";
function wi(e) {
  let t = (0, import_react26.useRef)(null), [r, o] = (0, import_react26.useState)([]), n = (0, import_react26.useCallback)((b) => {
    o((T) => {
      let y = T.indexOf(b);
      if (y !== -1) {
        let p = T.slice();
        return p.splice(y, 1), p;
      }
      return T;
    });
  }, [o]), i = (0, import_react26.useCallback)((b) => (o((T) => [...T, b]), () => n(b)), [o, n]), a = (0, import_react26.useCallback)(() => {
    var T;
    let b = document.activeElement;
    return ((T = t.current) == null ? void 0 : T.contains(b)) ? true : r.some((y) => {
      var p, f;
      return ((p = document.getElementById(y.buttonId)) == null ? void 0 : p.contains(b)) || ((f = document.getElementById(y.panelId)) == null ? void 0 : f.contains(b));
    });
  }, [t, r]), l = (0, import_react26.useCallback)((b) => {
    for (let T of r)
      T.buttonId !== b && T.close();
  }, [r]), s = (0, import_react26.useMemo)(() => ({ registerPopover: i, unregisterPopover: n, isFocusWithinPopoverGroup: a, closeOthers: l }), [i, n, a, l]), u = (0, import_react26.useMemo)(() => ({}), []), c = { ref: t }, m = e;
  return import_react26.default.createElement(Nt.Provider, { value: s }, E({ props: { ...m, ...c }, slot: u, defaultTag: Fi, name: "Popover.Group" }));
}
Te.Button = Ai;
Te.Overlay = Ii;
Te.Panel = Mi;
Te.Group = wi;
function wo(e = 0) {
  let [t, r] = (0, import_react28.useState)(e), o = (0, import_react28.useCallback)((l) => r((s) => s | l), [r]), n = (0, import_react28.useCallback)((l) => Boolean(t & l), [t]), i = (0, import_react28.useCallback)((l) => r((s) => s & ~l), [r]), a = (0, import_react28.useCallback)((l) => r((s) => s ^ l), [r]);
  return { addFlag: o, hasFlag: n, removeFlag: i, toggleFlag: a };
}
var _o = (0, import_react29.createContext)(null);
function Go() {
  let e = (0, import_react29.useContext)(_o);
  if (e === null) {
    let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
    throw Error.captureStackTrace && Error.captureStackTrace(t, Go), t;
  }
  return e;
}
function Ae() {
  let [e, t] = (0, import_react29.useState)([]);
  return [e.length > 0 ? e.join(" ") : void 0, (0, import_react29.useMemo)(() => function(o) {
    let n = (0, import_react29.useCallback)((a) => (t((l) => [...l, a]), () => t((l) => {
      let s = l.slice(), u = s.indexOf(a);
      return u !== -1 && s.splice(u, 1), s;
    })), []), i = (0, import_react29.useMemo)(() => ({ register: n, slot: o.slot, name: o.name, props: o.props }), [n, o.slot, o.name, o.props]);
    return import_react29.default.createElement(_o.Provider, { value: i }, o.children);
  }, [t])];
}
var Ni = "label";
function nt(e) {
  let { passive: t = false, ...r } = e, o = Go(), n = `headlessui-label-${A()}`;
  x(() => o.register(n), [n, o.register]);
  let i = { ...o.props, id: n }, a = { ...r, ...i };
  return t && delete a.onClick, E({ props: a, slot: o.slot || {}, defaultTag: Ni, name: o.name || "Label" });
}
var Vi = { [0](e, t) {
  return { ...e, options: [...e.options, { id: t.id, element: t.element, propsRef: t.propsRef }] };
}, [1](e, t) {
  let r = e.options.slice(), o = e.options.findIndex((n) => n.id === t.id);
  return o === -1 ? e : (r.splice(o, 1), { ...e, options: r });
} };
var jt = (0, import_react27.createContext)(null);
jt.displayName = "RadioGroupContext";
function Ho(e) {
  let t = (0, import_react27.useContext)(jt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <${lt.name} /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Ho), r;
  }
  return t;
}
function $i(e, t) {
  return S(t.type, Vi, e, t);
}
var Qi = "div";
function lt(e) {
  let { value: t, onChange: r, disabled: o = false, ...n } = e, [{ options: i }, a] = (0, import_react27.useReducer)($i, { options: [] }), [l, s] = Ae(), [u, c] = re(), m = `headlessui-radiogroup-${A()}`, b = (0, import_react27.useRef)(null), T = (0, import_react27.useMemo)(() => i.find((R) => !R.propsRef.current.disabled), [i]), y = (0, import_react27.useMemo)(() => i.some((R) => R.propsRef.current.value === t), [i, t]), p = (0, import_react27.useCallback)((R) => {
    var v;
    if (o || R === t)
      return false;
    let g = (v = i.find((h) => h.propsRef.current.value === R)) == null ? void 0 : v.propsRef.current;
    return (g == null ? void 0 : g.disabled) ? false : (r(R), true);
  }, [r, t, o, i]);
  se({ container: b.current, accept(R) {
    return R.getAttribute("role") === "radio" ? NodeFilter.FILTER_REJECT : R.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT;
  }, walk(R) {
    R.setAttribute("role", "none");
  } });
  let f = (0, import_react27.useCallback)((R) => {
    if (!b.current)
      return;
    let v = i.filter((h) => h.propsRef.current.disabled === false).map((h) => h.element.current);
    switch (R.key) {
      case "ArrowLeft":
      case "ArrowUp":
        if (R.preventDefault(), R.stopPropagation(), M(v, 2 | 16) === 2) {
          let O = i.find((L) => L.element.current === document.activeElement);
          O && p(O.propsRef.current.value);
        }
        break;
      case "ArrowRight":
      case "ArrowDown":
        if (R.preventDefault(), R.stopPropagation(), M(v, 4 | 16) === 2) {
          let O = i.find((L) => L.element.current === document.activeElement);
          O && p(O.propsRef.current.value);
        }
        break;
      case " ":
        {
          R.preventDefault(), R.stopPropagation();
          let h = i.find((O) => O.element.current === document.activeElement);
          h && p(h.propsRef.current.value);
        }
        break;
    }
  }, [b, i, p]), d = (0, import_react27.useCallback)((R) => (a({ type: 0, ...R }), () => a({ type: 1, id: R.id })), [a]), P = (0, import_react27.useMemo)(() => ({ registerOption: d, firstOption: T, containsCheckedOption: y, change: p, disabled: o, value: t }), [d, T, y, p, o, t]), C = { ref: b, id: m, role: "radiogroup", "aria-labelledby": l, "aria-describedby": u, onKeyDown: f };
  return import_react27.default.createElement(c, { name: "RadioGroup.Description" }, import_react27.default.createElement(s, { name: "RadioGroup.Label" }, import_react27.default.createElement(jt.Provider, { value: P }, E({ props: { ...n, ...C }, defaultTag: Qi, name: "RadioGroup" }))));
}
var qi = "div";
function zi(e) {
  let t = (0, import_react27.useRef)(null), r = `headlessui-radiogroup-option-${A()}`, [o, n] = Ae(), [i, a] = re(), { addFlag: l, removeFlag: s, hasFlag: u } = wo(1), { value: c, disabled: m = false, ...b } = e, T = (0, import_react27.useRef)({ value: c, disabled: m });
  x(() => {
    T.current.value = c;
  }, [c, T]), x(() => {
    T.current.disabled = m;
  }, [m, T]);
  let { registerOption: y, disabled: p, change: f, firstOption: d, containsCheckedOption: P, value: C } = Ho("RadioGroup.Option");
  x(() => y({ id: r, element: t, propsRef: T }), [r, y, t, e]);
  let R = (0, import_react27.useCallback)(() => {
    var V;
    !f(c) || (l(2), (V = t.current) == null || V.focus());
  }, [l, f, c]), g = (0, import_react27.useCallback)(() => l(2), [l]), v = (0, import_react27.useCallback)(() => s(2), [s]), h = (d == null ? void 0 : d.id) === r, O = p || m, L = C === c, N = { ref: t, id: r, role: "radio", "aria-checked": L ? "true" : "false", "aria-labelledby": o, "aria-describedby": i, "aria-disabled": O ? true : void 0, tabIndex: (() => O ? -1 : L || !P && h ? 0 : -1)(), onClick: O ? void 0 : R, onFocus: O ? void 0 : g, onBlur: O ? void 0 : v }, K = (0, import_react27.useMemo)(() => ({ checked: L, disabled: O, active: u(2) }), [L, O, u]);
  return import_react27.default.createElement(a, { name: "RadioGroup.Description" }, import_react27.default.createElement(n, { name: "RadioGroup.Label" }, E({ props: { ...b, ...N }, slot: K, defaultTag: qi, name: "RadioGroup.Option" })));
}
lt.Option = zi;
lt.Label = nt;
lt.Description = me;
var $t = (0, import_react30.createContext)(null);
$t.displayName = "GroupContext";
var tl = import_react30.Fragment;
function ol(e) {
  let [t, r] = (0, import_react30.useState)(null), [o, n] = Ae(), [i, a] = re(), l = (0, import_react30.useMemo)(() => ({ switch: t, setSwitch: r, labelledby: o, describedby: i }), [t, r, o, i]);
  return import_react30.default.createElement(a, { name: "Switch.Description" }, import_react30.default.createElement(n, { name: "Switch.Label", props: { onClick() {
    !t || (t.click(), t.focus({ preventScroll: true }));
  } } }, import_react30.default.createElement($t.Provider, { value: l }, E({ props: e, defaultTag: tl, name: "Switch.Group" }))));
}
var rl = "button";
function Qt(e) {
  let { checked: t, onChange: r, ...o } = e, n = `headlessui-switch-${A()}`, i = (0, import_react30.useContext)($t), a = (0, import_react30.useRef)(null), l = I(a, i === null ? null : i.setSwitch), s = (0, import_react30.useCallback)(() => r(!t), [r, t]), u = (0, import_react30.useCallback)((y) => {
    if (G(y.currentTarget))
      return y.preventDefault();
    y.preventDefault(), s();
  }, [s]), c = (0, import_react30.useCallback)((y) => {
    y.key !== "Tab" && y.preventDefault(), y.key === " " && s();
  }, [s]), m = (0, import_react30.useCallback)((y) => y.preventDefault(), []), b = (0, import_react30.useMemo)(() => ({ checked: t }), [t]), T = { id: n, ref: l, role: "switch", type: U(e, a), tabIndex: 0, "aria-checked": t, "aria-labelledby": i == null ? void 0 : i.labelledby, "aria-describedby": i == null ? void 0 : i.describedby, onClick: u, onKeyUp: c, onKeyPress: m };
  return E({ props: { ...o, ...T }, slot: b, defaultTag: rl, name: "Switch" });
}
Qt.Group = ol;
Qt.Label = nt;
Qt.Description = me;
var ul = { [0](e, t) {
  return e.selectedIndex === t.index ? e : { ...e, selectedIndex: t.index };
}, [1](e, t) {
  return e.orientation === t.orientation ? e : { ...e, orientation: t.orientation };
}, [2](e, t) {
  return e.activation === t.activation ? e : { ...e, activation: t.activation };
}, [3](e, t) {
  return e.tabs.includes(t.tab) ? e : { ...e, tabs: [...e.tabs, t.tab] };
}, [4](e, t) {
  return { ...e, tabs: e.tabs.filter((r) => r !== t.tab) };
}, [5](e, t) {
  return e.panels.includes(t.panel) ? e : { ...e, panels: [...e.panels, t.panel] };
}, [6](e, t) {
  return { ...e, panels: e.panels.filter((r) => r !== t.panel) };
}, [7](e) {
  return { ...e };
} };
var zt = (0, import_react31.createContext)(null);
zt.displayName = "TabsContext";
function Le(e) {
  let t = (0, import_react31.useContext)(zt);
  if (t === null) {
    let r = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, Le), r;
  }
  return t;
}
function pl(e, t) {
  return S(t.type, ul, e, t);
}
var dl = import_react31.Fragment;
function cl(e) {
  let { defaultIndex: t = 0, vertical: r = false, manual: o = false, onChange: n, selectedIndex: i = null, ...a } = e, l = r ? "vertical" : "horizontal", s = o ? "manual" : "auto", [u, c] = (0, import_react31.useReducer)(pl, { selectedIndex: null, tabs: [], panels: [], orientation: l, activation: s }), m = (0, import_react31.useMemo)(() => ({ selectedIndex: u.selectedIndex }), [u.selectedIndex]), b = (0, import_react31.useRef)(() => {
  });
  (0, import_react31.useEffect)(() => {
    c({ type: 1, orientation: l });
  }, [l]), (0, import_react31.useEffect)(() => {
    c({ type: 2, activation: s });
  }, [s]), (0, import_react31.useEffect)(() => {
    typeof n == "function" && (b.current = n);
  }, [n]), (0, import_react31.useEffect)(() => {
    if (u.tabs.length <= 0 || i === null && u.selectedIndex !== null)
      return;
    let p = u.tabs.map((P) => P.current).filter(Boolean), f = p.filter((P) => !P.hasAttribute("disabled")), d = i != null ? i : t;
    if (d < 0)
      c({ type: 0, index: p.indexOf(f[0]) });
    else if (d > u.tabs.length)
      c({ type: 0, index: p.indexOf(f[f.length - 1]) });
    else {
      let P = p.slice(0, d), R = [...p.slice(d), ...P].find((g) => f.includes(g));
      if (!R)
        return;
      c({ type: 0, index: p.indexOf(R) });
    }
  }, [t, i, u.tabs, u.selectedIndex]);
  let T = (0, import_react31.useRef)(u.selectedIndex);
  (0, import_react31.useEffect)(() => {
    T.current = u.selectedIndex;
  }, [u.selectedIndex]);
  let y = (0, import_react31.useMemo)(() => [u, { dispatch: c, change(p) {
    T.current !== p && b.current(p), T.current = p, c({ type: 0, index: p });
  } }], [u, c]);
  return import_react31.default.createElement(zt.Provider, { value: y }, E({ props: { ...a }, slot: m, defaultTag: dl, name: "Tabs" }));
}
var fl = "div";
function ml(e) {
  let [{ selectedIndex: t, orientation: r }] = Le("Tab.List"), o = { selectedIndex: t };
  return E({ props: { ...e, ...{ role: "tablist", "aria-orientation": r } }, slot: o, defaultTag: fl, name: "Tabs.List" });
}
var bl = "button";
function De(e) {
  var C, R;
  let t = `headlessui-tabs-tab-${A()}`, [{ selectedIndex: r, tabs: o, panels: n, orientation: i, activation: a }, { dispatch: l, change: s }] = Le(De.name), u = (0, import_react31.useRef)(null), c = I(u, (g) => {
    !g || l({ type: 7 });
  });
  x(() => (l({ type: 3, tab: u }), () => l({ type: 4, tab: u })), [l, u]);
  let m = o.indexOf(u), b = m === r, T = (0, import_react31.useCallback)((g) => {
    let v = o.map((h) => h.current).filter(Boolean);
    if (g.key === " " || g.key === "Enter") {
      g.preventDefault(), g.stopPropagation(), s(m);
      return;
    }
    switch (g.key) {
      case "Home":
      case "PageUp":
        return g.preventDefault(), g.stopPropagation(), M(v, 1);
      case "End":
      case "PageDown":
        return g.preventDefault(), g.stopPropagation(), M(v, 8);
    }
    return S(i, { vertical() {
      if (g.key === "ArrowUp")
        return M(v, 2 | 16);
      if (g.key === "ArrowDown")
        return M(v, 4 | 16);
    }, horizontal() {
      if (g.key === "ArrowLeft")
        return M(v, 2 | 16);
      if (g.key === "ArrowRight")
        return M(v, 4 | 16);
    } });
  }, [o, i, m, s]), y = (0, import_react31.useCallback)(() => {
    var g;
    (g = u.current) == null || g.focus();
  }, [u]), p = (0, import_react31.useCallback)(() => {
    var g;
    (g = u.current) == null || g.focus(), s(m);
  }, [s, m, u]), f = (0, import_react31.useMemo)(() => ({ selected: b }), [b]), d = { ref: c, onKeyDown: T, onFocus: a === "manual" ? y : p, onClick: p, id: t, role: "tab", type: U(e, u), "aria-controls": (R = (C = n[m]) == null ? void 0 : C.current) == null ? void 0 : R.id, "aria-selected": b, tabIndex: b ? 0 : -1 };
  return E({ props: { ...e, ...d }, slot: f, defaultTag: bl, name: "Tabs.Tab" });
}
var Tl = "div";
function yl(e) {
  let [{ selectedIndex: t }] = Le("Tab.Panels"), r = (0, import_react31.useMemo)(() => ({ selectedIndex: t }), [t]);
  return E({ props: e, slot: r, defaultTag: Tl, name: "Tabs.Panels" });
}
var gl = "div";
var Pl = 1 | 2;
function xl(e) {
  var T, y;
  let [{ selectedIndex: t, tabs: r, panels: o }, { dispatch: n }] = Le("Tab.Panel"), i = `headlessui-tabs-panel-${A()}`, a = (0, import_react31.useRef)(null), l = I(a, (p) => {
    !p || n({ type: 7 });
  });
  x(() => (n({ type: 5, panel: a }), () => n({ type: 6, panel: a })), [n, a]);
  let s = o.indexOf(a), u = s === t, c = (0, import_react31.useMemo)(() => ({ selected: u }), [u]), m = { ref: l, id: i, role: "tabpanel", "aria-labelledby": (y = (T = r[s]) == null ? void 0 : T.current) == null ? void 0 : y.id, tabIndex: u ? 0 : -1 };
  return E({ props: { ...e, ...m }, slot: c, defaultTag: gl, features: Pl, visible: u, name: "Tabs.Panel" });
}
De.Group = cl;
De.List = ml;
De.Panels = yl;
De.Panel = xl;
function Bo() {
  let e = (0, import_react33.useRef)(true);
  return (0, import_react33.useEffect)(() => {
    e.current = false;
  }, []), e.current;
}
function No(e) {
  let t = { called: false };
  return (...r) => {
    if (!t.called)
      return t.called = true, e(...r);
  };
}
function Yt(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ut(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function El(e, t) {
  let r = k();
  if (!e)
    return r.dispose;
  let { transitionDuration: o, transitionDelay: n } = getComputedStyle(e), [i, a] = [o, n].map((l) => {
    let [s = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, c) => c - u);
    return s;
  });
  return i !== 0 ? r.setTimeout(() => {
    t("finished");
  }, i + a) : t("finished"), r.add(() => t("cancelled")), r.dispose;
}
function Xt(e, t, r, o, n, i) {
  let a = k(), l = i !== void 0 ? No(i) : () => {
  };
  return ut(e, ...n), Yt(e, ...t, ...r), a.nextFrame(() => {
    ut(e, ...r), Yt(e, ...o), a.add(El(e, (s) => (ut(e, ...o, ...t), Yt(e, ...n), l(s))));
  }), a.add(() => ut(e, ...t, ...r, ...o, ...n)), a.add(() => l("cancelled")), a.dispose;
}
function le(e = "") {
  return (0, import_react32.useMemo)(() => e.split(" ").filter((t) => t.trim().length > 1), [e]);
}
var dt = (0, import_react32.createContext)(null);
dt.displayName = "TransitionContext";
function Cl() {
  let e = (0, import_react32.useContext)(dt);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Sl() {
  let e = (0, import_react32.useContext)(ct);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
var ct = (0, import_react32.createContext)(null);
ct.displayName = "NestingContext";
function ft(e) {
  return "children" in e ? ft(e.children) : e.current.filter(({ state: t }) => t === "visible").length > 0;
}
function $o(e) {
  let t = (0, import_react32.useRef)(e), r = (0, import_react32.useRef)([]), o = Be();
  (0, import_react32.useEffect)(() => {
    t.current = e;
  }, [e]);
  let n = (0, import_react32.useCallback)((a, l = 1) => {
    var u;
    let s = r.current.findIndex(({ id: c }) => c === a);
    s !== -1 && (S(l, { [0]() {
      r.current.splice(s, 1);
    }, [1]() {
      r.current[s].state = "hidden";
    } }), !ft(r) && o.current && ((u = t.current) == null || u.call(t)));
  }, [t, o, r]), i = (0, import_react32.useCallback)((a) => {
    let l = r.current.find(({ id: s }) => s === a);
    return l ? l.state !== "visible" && (l.state = "visible") : r.current.push({ id: a, state: "visible" }), () => n(a, 0);
  }, [r, n]);
  return (0, import_react32.useMemo)(() => ({ children: r, register: i, unregister: n }), [i, n, r]);
}
function Al() {
}
var hl = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Qo(e) {
  var r;
  let t = {};
  for (let o of hl)
    t[o] = (r = e[o]) != null ? r : Al;
  return t;
}
function Ol(e) {
  let t = (0, import_react32.useRef)(Qo(e));
  return (0, import_react32.useEffect)(() => {
    t.current = Qo(e);
  }, [e]), t;
}
var Il = "div";
var qo = 1;
function zo(e) {
  let { beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n, enter: i, enterFrom: a, enterTo: l, entered: s, leave: u, leaveFrom: c, leaveTo: m, ...b } = e, T = (0, import_react32.useRef)(null), [y, p] = (0, import_react32.useState)("visible"), f = b.unmount ? 0 : 1, { show: d, appear: P, initial: C } = Cl(), { register: R, unregister: g } = Sl(), v = A(), h = (0, import_react32.useRef)(false), O = $o(() => {
    h.current || (p("hidden"), g(v), X.current.afterLeave());
  });
  x(() => {
    if (!!v)
      return R(v);
  }, [R, v]), x(() => {
    if (f === 1 && !!v) {
      if (d && y !== "visible") {
        p("visible");
        return;
      }
      S(y, { hidden: () => g(v), visible: () => R(v) });
    }
  }, [y, v, R, g, d, f]);
  let L = le(i), N = le(a), K = le(l), V = le(s), Fe = le(u), ge = le(c), we = le(m), X = Ol({ beforeEnter: t, afterEnter: r, beforeLeave: o, afterLeave: n }), F = q();
  (0, import_react32.useEffect)(() => {
    if (F && y === "visible" && T.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [T, y, F]);
  let $ = C && !P;
  x(() => {
    let bt = T.current;
    if (!!bt && !$)
      return h.current = true, d && X.current.beforeEnter(), d || X.current.beforeLeave(), d ? Xt(bt, L, N, K, V, (Tt) => {
        h.current = false, Tt === "finished" && X.current.afterEnter();
      }) : Xt(bt, Fe, ge, we, V, (Tt) => {
        h.current = false, Tt === "finished" && (ft(O) || (p("hidden"), g(v), X.current.afterLeave()));
      });
  }, [X, v, h, g, O, T, $, d, L, N, K, Fe, ge, we]);
  let H = { ref: T }, Pe = b;
  return import_react32.default.createElement(ct.Provider, { value: O }, import_react32.default.createElement(W, { value: S(y, { visible: 0, hidden: 1 }) }, E({ props: { ...Pe, ...H }, defaultTag: Il, features: qo, visible: y === "visible", name: "Transition.Child" })));
}
function mt(e) {
  let { show: t, appear: r = false, unmount: o, ...n } = e, i = _();
  if (t === void 0 && i !== null && (t = S(i, { [0]: true, [1]: false })), ![true, false].includes(t))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [a, l] = (0, import_react32.useState)(t ? "visible" : "hidden"), s = $o(() => {
    l("hidden");
  }), u = Bo(), c = (0, import_react32.useMemo)(() => ({ show: t, appear: r || !u, initial: u }), [t, r, u]);
  (0, import_react32.useEffect)(() => {
    t ? l("visible") : ft(s) || l("hidden");
  }, [t, s]);
  let m = { unmount: o };
  return import_react32.default.createElement(ct.Provider, { value: s }, import_react32.default.createElement(dt.Provider, { value: c }, E({ props: { ...m, as: import_react32.Fragment, children: import_react32.default.createElement(zo, { ...m, ...n }) }, defaultTag: import_react32.Fragment, features: qo, visible: a === "visible", name: "Transition" })));
}
mt.Child = function(t) {
  let r = (0, import_react32.useContext)(dt) !== null, o = _() !== null;
  return !r && o ? import_react32.default.createElement(mt, { ...t }) : import_react32.default.createElement(zo, { ...t });
};
mt.Root = mt;

// app/sections/AboutMe/Facts.tsx
var facts2 = [
  {
    index: 1,
    title: "I love cats and I have two :)",
    description: "Rosie (girl) and Felix (boy) are my love and energy to work hard everyday.",
    image: "/images/facts/cat.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `I once applied to Harvard`,
    description: "Yeah.. It's a long story...but basically I got deferred haha",
    image: "/images/facts/harvard.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "I am not afraid of snakes or spiders",
    description: "They are everywhere in Vietnam so that's why I adapted.",
    image: "/images/facts/snake.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "I am a very ambitious person",
    description: "When I was 10 I thought I can be the president of Europe XD. ",
    image: "/images/facts/ambitious.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "My favorite subject was Math",
    description: "I love it in high school. I guess it's the asian trait in me.",
    image: "/images/facts/math.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "I unbelievably love mayonnaise!",
    description: "I can eat mayo with pretty much everything (except desserts LOL).",
    image: "/images/facts/mayonnaise.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "I play 3 musical instruments",
    description: "I used to play ukulele, piano, and organ, now I only play ukulele.",
    image: "/images/facts/piano.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "I really like dad jokes but I suck at them",
    description: "Unfortunately these jokes only work if you git them.",
    image: "/images/facts/dad-joke.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];
var Facts = ({}) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React11.createElement("div", {
    className: "Mobile__Facts__Wrapper"
  }, /* @__PURE__ */ React11.createElement("div", {
    className: "Mobile__Facts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React11.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8"
  }, "Random fun facts about me")), /* @__PURE__ */ React11.createElement("div", {
    className: `Mobile__FactCards w-full rounded-2xl w-full mx-auto bg-transparent text-lg grid grid-rows-8 gap-2`
  }, facts2.map((fact) => /* @__PURE__ */ React11.createElement(FactCard, {
    key: fact.description,
    theme,
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
  return /* @__PURE__ */ React11.createElement(Ye, null, ({ open }) => /* @__PURE__ */ React11.createElement(React11.Fragment, null, /* @__PURE__ */ React11.createElement(Ye.Button, {
    className: `Mobile__FactCard__Title__Btn flex justify-between items-center w-full px-4 py-2 font-medium text-left rounded-lg ${className} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`,
    name: open ? "close" : "open"
  }, /* @__PURE__ */ React11.createElement("span", null, props.title), /* @__PURE__ */ React11.createElement(ChevronDownIcon_default, {
    className: `${open ? "transform rotate-180" : ""} w-5 h-5 text-${props.color}-500`
  })), /* @__PURE__ */ React11.createElement(Ye.Panel, {
    className: "px-4 pt-4 pb-2 text-gray-500 flex flex-row items-center justify-start text-base"
  }, /* @__PURE__ */ React11.createElement("span", {
    className: descriptionText
  }, props.description), /* @__PURE__ */ React11.createElement("img", {
    src: props.image,
    alt: props.imageAlt,
    title: props.imageAlt,
    className: "Mobile__FactCard__Image ml-2 object-cover w-32 rounded-lg"
  }))));
};

// app/sections/AboutMe/AboutMe.tsx
var links3 = () => [
  {
    rel: "stylesheet",
    href: AboutMe_default
  }
];
var AboutMe = (props) => {
  const { theme } = useTheme();
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
    className: "text-aboutMe-aboutMeText my-4"
  }, "Wir sind Ihr zuverl\xE4ssiger Dienstleister rund um Shopify Optimierung und Programmierung. Zusammen mit uns ist Ihr E-Commerce Erfolg gesichert."), /* @__PURE__ */ React12.createElement("p", {
    className: "mb-5 xs:mb-10 text-aboutMe-aboutMeText"
  }, "I enjoy building software that makes peoples' lives easier by writing elegant, performant, and maintainable frontend code. I also enjoy petting every cat I see."), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div mt-5 sm:mt-10"
  }), /* @__PURE__ */ React12.createElement(Titles_default, null), /* @__PURE__ */ React12.createElement("div", {
    className: "mt-5 xs:mt-12"
  }), /* @__PURE__ */ React12.createElement("div", {
    className: "resume-btn-wrapper w-fit"
  }, /* @__PURE__ */ React12.createElement(ResumeButton_default2, null))))), /* @__PURE__ */ React12.createElement("div", {
    className: "avatar-image-wrapper sm:col-span-2 justify-self-end lg:mb-0 mb-10"
  }, /* @__PURE__ */ React12.createElement("img", {
    src: "/images/avatar.jpeg",
    alt: "A picture of me uwu",
    title: "Picture of me",
    className: `avatar-image lg:h-[30rem]`
  })), /* @__PURE__ */ React12.createElement("div", {
    className: "spacer-div sm:mt-10"
  })), /* @__PURE__ */ React12.createElement(MyStory_default, null)), /* @__PURE__ */ React12.createElement("div", {
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
var links4 = () => {
  return [{ rel: "stylesheet", href: SocialMedia_default }];
};
var SocialMedia = ({}) => {
  const { theme } = useTheme();
  const styles = getTextStyles(theme);
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
var getTextStyles = (theme) => {
  return theme === SupportedTheme.LIGHT ? "text-black hover:text-white" : "text-white";
};
var SocialMedia_default2 = SocialMedia;

// app/sections/Contact/Contact.css
var Contact_default = "/build/_assets/Contact-6KCLBKZ2.css";

// app/sections/Contact/Contact.tsx
var links5 = () => [
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
    className: `${contactTitleClassname} contact-title xl:mt-20`,
    ref: setRef
  }, /* @__PURE__ */ React15.createElement("text", {
    textAnchor: "middle",
    x: "50%",
    y: "90%",
    className: "text-9xl"
  }, "Get in touch!"));
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
    message: "Failed to send message, please try again.",
    type: AlertType.ERROR
  }) : hasSuccess ? /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "I've received your message :)",
    type: AlertType.CONFIRMED
  }) : /* @__PURE__ */ React15.createElement(Alert_default, {
    message: "Tell me anything! Or shoot me a message on LinkedIn!",
    type: AlertType.CONFIRMED
  }), /* @__PURE__ */ React15.createElement("label", {
    htmlFor: ContactFormFields.name,
    className: "text-base pt-2 pb-1"
  }, "Your name"), /* @__PURE__ */ React15.createElement("input", {
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
  }, "Your email"), /* @__PURE__ */ React15.createElement("input", {
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
  }, "Your email subject"), /* @__PURE__ */ React15.createElement("input", {
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
  }, "Your message"), /* @__PURE__ */ React15.createElement("textarea", {
    id: ContactFormFields.message,
    name: ContactFormFields.message,
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React15.createElement("div", {
    className: "error text-sm font-medium italic text-teal-300"
  }, /* @__PURE__ */ React15.createElement("p", null, fieldErrors?.message && fieldErrors?.message)), /* @__PURE__ */ React15.createElement("button", {
    type: "submit",
    name: "Send",
    className: "contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
  }, buttonText))), /* @__PURE__ */ React15.createElement("div", {
    className: "text-textLgColor flex justify-center mt-6 mb-10"
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
  arr: function(a) {
    return Array.isArray(a);
  },
  obj: function(a) {
    return stringContains(Object.prototype.toString.call(a), "Object");
  },
  pth: function(a) {
    return is.obj(a) && a.hasOwnProperty("totalLength");
  },
  svg: function(a) {
    return a instanceof SVGElement;
  },
  inp: function(a) {
    return a instanceof HTMLInputElement;
  },
  dom: function(a) {
    return a.nodeType || is.svg(a);
  },
  str: function(a) {
    return typeof a === "string";
  },
  fnc: function(a) {
    return typeof a === "function";
  },
  und: function(a) {
    return typeof a === "undefined";
  },
  nil: function(a) {
    return is.und(a) || a === null;
  },
  hex: function(a) {
    return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
  },
  rgb: function(a) {
    return /^rgb/.test(a);
  },
  hsl: function(a) {
    return /^hsl/.test(a);
  },
  col: function(a) {
    return is.hex(a) || is.rgb(a) || is.hsl(a);
  },
  key: function(a) {
    return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== "targets" && a !== "keyframes";
  }
};
function parseEasingParameters(string) {
  var match = /\(([^)]+)\)/.exec(string);
  return match ? match[1].split(",").map(function(p) {
    return parseFloat(p);
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
  var a = 1;
  var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
  function solver(t) {
    var progress = duration ? duration * t / 1e3 : t;
    if (zeta < 1) {
      progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
    } else {
      progress = (a + b * progress) * Math.exp(-progress * w0);
    }
    if (t === 0 || t === 1) {
      return t;
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
  return function(t) {
    return Math.ceil(minMax(t, 1e-6, 1) * steps2) * (1 / steps2);
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
  function C(aA1) {
    return 3 * aA1;
  }
  function calcBezier(aT, aA1, aA2) {
    return ((A2(aA1, aA2) * aT + B2(aA1, aA2)) * aT + C(aA1)) * aT;
  }
  function getSlope(aT, aA1, aA2) {
    return 3 * A2(aA1, aA2) * aT * aT + 2 * B2(aA1, aA2) * aT + C(aA1);
  }
  function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
      currentT = aA + (aB - aA) / 2;
      currentX = calcBezier(currentT, mX1, mX2) - aX;
      if (currentX > 0) {
        aB = currentT;
      } else {
        aA = currentT;
      }
    } while (Math.abs(currentX) > 1e-7 && ++i < 10);
    return currentT;
  }
  function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for (var i = 0; i < 4; ++i) {
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
      for (var i = 0; i < kSplineTableSize; ++i) {
        sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
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
    return function(x2) {
      if (mX1 === mY1 && mX2 === mY2) {
        return x2;
      }
      if (x2 === 0 || x2 === 1) {
        return x2;
      }
      return calcBezier(getTForX(x2), mY1, mY2);
    };
  }
  return bezier2;
}();
var penner = function() {
  var eases = { linear: function() {
    return function(t) {
      return t;
    };
  } };
  var functionEasings = {
    Sine: function() {
      return function(t) {
        return 1 - Math.cos(t * Math.PI / 2);
      };
    },
    Circ: function() {
      return function(t) {
        return 1 - Math.sqrt(1 - t * t);
      };
    },
    Back: function() {
      return function(t) {
        return t * t * (3 * t - 2);
      };
    },
    Bounce: function() {
      return function(t) {
        var pow2, b = 4;
        while (t < ((pow2 = Math.pow(2, --b)) - 1) / 11) {
        }
        return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
      };
    },
    Elastic: function(amplitude, period) {
      if (amplitude === void 0)
        amplitude = 1;
      if (period === void 0)
        period = 0.5;
      var a = minMax(amplitude, 1, 10);
      var p = minMax(period, 0.1, 2);
      return function(t) {
        return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
      };
    }
  };
  var baseEasings = ["Quad", "Cubic", "Quart", "Quint", "Expo"];
  baseEasings.forEach(function(name, i) {
    functionEasings[name] = function() {
      return function(t) {
        return Math.pow(t, i + 2);
      };
    };
  });
  Object.keys(functionEasings).forEach(function(name) {
    var easeIn = functionEasings[name];
    eases["easeIn" + name] = easeIn;
    eases["easeOut" + name] = function(a, b) {
      return function(t) {
        return 1 - easeIn(a, b)(1 - t);
      };
    };
    eases["easeInOut" + name] = function(a, b) {
      return function(t) {
        return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
      };
    };
    eases["easeOutIn" + name] = function(a, b) {
      return function(t) {
        return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
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
  } catch (e) {
    return;
  }
}
function filterArray(arr, callback) {
  var len = arr.length;
  var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
  var result = [];
  for (var i = 0; i < len; i++) {
    if (i in arr) {
      var val = arr[i];
      if (callback.call(thisArg, val, i, arr)) {
        result.push(val);
      }
    }
  }
  return result;
}
function flattenArray(arr) {
  return arr.reduce(function(a, b) {
    return a.concat(is.arr(b) ? flattenArray(b) : b);
  }, []);
}
function toArray(o) {
  if (is.arr(o)) {
    return o;
  }
  if (is.str(o)) {
    o = selectString(o) || o;
  }
  if (o instanceof NodeList || o instanceof HTMLCollection) {
    return [].slice.call(o);
  }
  return [o];
}
function arrayContains(arr, val) {
  return arr.some(function(a) {
    return a === val;
  });
}
function cloneObject(o) {
  var clone = {};
  for (var p in o) {
    clone[p] = o[p];
  }
  return clone;
}
function replaceObjectProps(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o1) {
    o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
  }
  return o;
}
function mergeObjects(o1, o2) {
  var o = cloneObject(o1);
  for (var p in o2) {
    o[p] = is.und(o1[p]) ? o2[p] : o1[p];
  }
  return o;
}
function rgbToRgba(rgbValue) {
  var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
  return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
  var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  var hex = hexValue.replace(rgx, function(m, r2, g2, b2) {
    return r2 + r2 + g2 + g2 + b2 + b2;
  });
  var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  var r = parseInt(rgb[1], 16);
  var g = parseInt(rgb[2], 16);
  var b = parseInt(rgb[3], 16);
  return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
  var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
  var h = parseInt(hsl[1], 10) / 360;
  var s = parseInt(hsl[2], 10) / 100;
  var l = parseInt(hsl[3], 10) / 100;
  var a = hsl[4] || 1;
  function hue2rgb(p2, q3, t) {
    if (t < 0) {
      t += 1;
    }
    if (t > 1) {
      t -= 1;
    }
    if (t < 1 / 6) {
      return p2 + (q3 - p2) * 6 * t;
    }
    if (t < 1 / 2) {
      return q3;
    }
    if (t < 2 / 3) {
      return p2 + (q3 - p2) * (2 / 3 - t) * 6;
    }
    return p2;
  }
  var r, g, b;
  if (s == 0) {
    r = g = b = l;
  } else {
    var q2 = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q2;
    r = hue2rgb(p, q2, h + 1 / 3);
    g = hue2rgb(p, q2, h);
    b = hue2rgb(p, q2, h - 1 / 3);
  }
  return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
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
  var m;
  while (m = reg.exec(str)) {
    transforms.set(m[1], m[2]);
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
  var u = getUnit(to2) || 0;
  var x2 = parseFloat(from);
  var y = parseFloat(to2.replace(operator[0], ""));
  switch (operator[0][0]) {
    case "+":
      return x2 + y + u;
    case "-":
      return x2 - y + u;
    case "*":
      return x2 * y + u;
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
  for (var i = 0; i < points.numberOfItems; i++) {
    var currentPos = points.getItem(i);
    if (i > 0) {
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
  var p = percent || 100;
  return function(property) {
    return {
      property,
      el: pathEl,
      svg: getParentSvg(pathEl),
      totalLength: getTotalLength(pathEl) * (p / 100)
    };
  };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
  function point(offset) {
    if (offset === void 0)
      offset = 0;
    var l = progress + offset >= 1 ? progress + offset : 0;
    return path.el.getPointAtLength(l);
  }
  var svg = getParentSvg(path.el, path.svg);
  var p = point();
  var p0 = point(-1);
  var p1 = point(1);
  var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
  var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
  switch (path.property) {
    case "x":
      return (p.x - svg.x) * scaleX;
    case "y":
      return (p.y - svg.y) * scaleY;
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
  return parsed.map(function(t, i) {
    return { target: t, id: i, total: parsed.length, transforms: { list: getElementTransforms(t) } };
  });
}
function normalizePropertyTweens(prop, tweenSettings) {
  var settings = cloneObject(tweenSettings);
  if (/^spring/.test(settings.easing)) {
    settings.duration = spring(settings.easing);
  }
  if (is.arr(prop)) {
    var l = prop.length;
    var isFromTo = l === 2 && !is.obj(prop[0]);
    if (!isFromTo) {
      if (!is.fnc(tweenSettings.duration)) {
        settings.duration = tweenSettings.duration / l;
      }
    } else {
      prop = { value: prop };
    }
  }
  var propArray = is.arr(prop) ? prop : [prop];
  return propArray.map(function(v, i) {
    var obj = is.obj(v) && !is.pth(v) ? v : { value: v };
    if (is.und(obj.delay)) {
      obj.delay = !i ? tweenSettings.delay : 0;
    }
    if (is.und(obj.endDelay)) {
      obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
    }
    return obj;
  }).map(function(k2) {
    return mergeObjects(k2, settings);
  });
}
function flattenKeyframes(keyframes) {
  var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
    return Object.keys(key);
  })), function(p) {
    return is.key(p);
  }).reduce(function(a, b) {
    if (a.indexOf(b) < 0) {
      a.push(b);
    }
    return a;
  }, []);
  var properties = {};
  var loop = function(i2) {
    var propName = propertyNames[i2];
    properties[propName] = keyframes.map(function(key) {
      var newKey = {};
      for (var p in key) {
        if (is.key(p)) {
          if (p == propName) {
            newKey.value = key[p];
          }
        } else {
          newKey[p] = key[p];
        }
      }
      return newKey;
    });
  };
  for (var i = 0; i < propertyNames.length; i++)
    loop(i);
  return properties;
}
function getProperties(tweenSettings, params) {
  var properties = [];
  var keyframes = params.keyframes;
  if (keyframes) {
    params = mergeObjects(flattenKeyframes(keyframes), params);
  }
  for (var p in params) {
    if (is.key(p)) {
      properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
      });
    }
  }
  return properties;
}
function normalizeTweenValues(tween, animatable) {
  var t = {};
  for (var p in tween) {
    var value = getFunctionValue(tween[p], animatable);
    if (is.arr(value)) {
      value = value.map(function(v) {
        return getFunctionValue(v, animatable);
      });
      if (value.length === 1) {
        value = value[0];
      }
    }
    t[p] = value;
  }
  t.duration = parseFloat(t.duration);
  t.delay = parseFloat(t.delay);
  return t;
}
function normalizeTweens(prop, animatable) {
  var previousTween;
  return prop.tweens.map(function(t) {
    var tween = normalizeTweenValues(t, animatable);
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
  css: function(t, p, v) {
    return t.style[p] = v;
  },
  attribute: function(t, p, v) {
    return t.setAttribute(p, v);
  },
  object: function(t, p, v) {
    return t[p] = v;
  },
  transform: function(t, p, v, transforms, manual) {
    transforms.list.set(p, v);
    if (p === transforms.last || manual) {
      var str = "";
      transforms.list.forEach(function(value, prop) {
        str += prop + "(" + value + ") ";
      });
      t.style.transform = str;
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
  })), function(a) {
    return !is.und(a);
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
  function step(t) {
    var activeInstancesLength = activeInstances.length;
    var i = 0;
    while (i < activeInstancesLength) {
      var activeInstance = activeInstances[i];
      if (!activeInstance.paused) {
        activeInstance.tick(t);
        i++;
      } else {
        activeInstances.splice(i, 1);
        activeInstancesLength--;
      }
    }
    raf = i > 0 ? requestAnimationFrame(step) : void 0;
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
      for (var i = 0; i < childrenLength; i++) {
        seekChild(time, children[i]);
      }
    } else {
      for (var i$1 = childrenLength; i$1--; ) {
        seekChild(time, children[i$1]);
      }
    }
  }
  function setAnimationsProgress(insTime) {
    var i = 0;
    var animations = instance.animations;
    var animationsLength = animations.length;
    while (i < animationsLength) {
      var anim = animations[i];
      var animatable = anim.animatable;
      var tweens = anim.tweens;
      var tweenLength = tweens.length - 1;
      var tween = tweens[tweenLength];
      if (tweenLength) {
        tween = filterArray(tweens, function(t) {
          return insTime < t.end;
        })[0] || tween;
      }
      var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
      var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
      var strings = tween.to.strings;
      var round = tween.round;
      var numbers = [];
      var toNumbersLength = tween.to.numbers.length;
      var progress = void 0;
      for (var n = 0; n < toNumbersLength; n++) {
        var value = void 0;
        var toNumber = tween.to.numbers[n];
        var fromNumber = tween.from.numbers[n] || 0;
        if (!tween.isPath) {
          value = fromNumber + eased * (toNumber - fromNumber);
        } else {
          value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
        }
        if (round) {
          if (!(tween.isColor && n > 2)) {
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
        for (var s = 0; s < stringsLength; s++) {
          var a = strings[s];
          var b = strings[s + 1];
          var n$1 = numbers[s];
          if (!isNaN(n$1)) {
            if (!b) {
              progress += n$1 + " ";
            } else {
              progress += n$1 + b;
            }
          }
        }
      }
      setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
      anim.currentValue = progress;
      i++;
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
    for (var i = childrenLength; i--; ) {
      instance.children[i].reset();
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
  instance.tick = function(t) {
    now = t;
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
  for (var a = animations.length; a--; ) {
    if (arrayContains(targetsArray, animations[a].animatable.target)) {
      animations.splice(a, 1);
    }
  }
}
function removeTargetsFromInstance(targetsArray, instance) {
  var animations = instance.animations;
  var children = instance.children;
  removeTargetsFromAnimations(targetsArray, animations);
  for (var c = children.length; c--; ) {
    var child = children[c];
    var childAnimations = child.animations;
    removeTargetsFromAnimations(targetsArray, childAnimations);
    if (!childAnimations.length && !child.children.length) {
      children.splice(c, 1);
    }
  }
  if (!animations.length && !children.length) {
    instance.pause();
  }
}
function removeTargetsFromActiveInstances(targets) {
  var targetsArray = parseTargets(targets);
  for (var i = activeInstances.length; i--; ) {
    var instance = activeInstances[i];
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
  return function(el2, i, t) {
    if (fromFirst) {
      fromIndex = 0;
    }
    if (fromCenter) {
      fromIndex = (t - 1) / 2;
    }
    if (fromLast) {
      fromIndex = t - 1;
    }
    if (!values.length) {
      for (var index = 0; index < t; index++) {
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
    return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
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
    for (var i = 0; i < children.length; i++) {
      passThrough(children[i]);
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
var links6 = () => [
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
      for (let i = 0; i < letters.length; i++) {
        anime_es_default({
          targets: letters[i],
          easing: "easeInQuad",
          translateX: ["5px", "0"],
          delay: 50 * i
        });
        anime_es_default({
          targets: letters[i],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i
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
  }, "M"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "y"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "\xA0"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "S"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "k"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "i"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "l"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "l"), /* @__PURE__ */ React16.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "s"));
};

// app/sections/Projects/Projects.tsx
init_react();
var React21 = __toModule(require_react());

// app/sections/Projects/FeaturedProjects.tsx
init_react();
var React18 = __toModule(require_react());

// app/components/ExternalLinkButton/SmallExternalLinkButton.tsx
init_react();
var React17 = __toModule(require_react());

// node_modules/react-icons/im/index.esm.js
init_react();
function ImNpm(props) {
  return GenIcon({ "tag": "svg", "attr": { "version": "1.1", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M0 0v16h16v-16h-16zM13 13h-2v-8h-3v8h-5v-10h10v10z" } }] })(props);
}

// node_modules/react-icons/bi/index.esm.js
init_react();
function BiLinkExternal(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "d": "m13 3 3.293 3.293-7 7 1.414 1.414 7-7L21 11V3z" } }, { "tag": "path", "attr": { "d": "M19 19H5V5h7l-2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-5l-2-2v7z" } }] })(props);
}

// app/components/ExternalLinkButton/SmallExternalLinkButton.tsx
var SmallExternalLinkButton = (props) => {
  return /* @__PURE__ */ React17.createElement("a", {
    className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm text-projects-text",
    href: props.href,
    target: "_blank"
  }, /* @__PURE__ */ React17.createElement("button", {
    className: "ExternalLinkButton__SmallButton flex items-center justify-center",
    name: props.accessibilityName,
    "aria-label": props.accessibilityName
  }, props.type === "Github" ? /* @__PURE__ */ React17.createElement(BsGithub, {
    className: "w-5 h-5 hover:text-blue-400 focus:text-blue-400"
  }) : props.type === "Website" ? /* @__PURE__ */ React17.createElement(BiLinkExternal, {
    className: "w-5 h-5 hover:text-cyan-200 focus:text-cyan-200"
  }) : /* @__PURE__ */ React17.createElement("div", {
    className: "h-5 w-5 flex items-center justify-center"
  }, /* @__PURE__ */ React17.createElement(ImNpm, {
    className: "w-4 h-4 hover:text-rose-500 focus:text-rose-500"
  }))));
};
var SmallExternalLinkButton_default = SmallExternalLinkButton;

// app/sections/Projects/FeaturedProjects.tsx
var FeaturedProjects = ({}) => {
  const { theme } = useTheme();
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const animationClassName = wasInViewAtLeastOnce ? "project-slide-up" : void 0;
  return /* @__PURE__ */ React18.createElement("div", {
    className: `main-projects-wrapper text-projects-text grid grid-cols-1 gap-10 z-10`,
    ref: setRef
  }, /* @__PURE__ */ React18.createElement("img", {
    src: "/images/background/Gradient.svg",
    alt: "Decorative background",
    className: "gradient-blob absolute opacity-60"
  }), mainProjects.map((project, index) => /* @__PURE__ */ React18.createElement("div", {
    className: `FeaturedProject__Card ${animationClassName} duration-300 ease-in md:grid md:grid-cols-2 sm:flex sm:flex-col bg-cover gap-10 p-7 xs:p-10`,
    style: {
      backgroundImage: `${theme === SupportedTheme.LIGHT ? project.bgLight : project.bgDark}`,
      animationDuration: `${index + 1.25}s`
    },
    key: project.name
  }, /* @__PURE__ */ React18.createElement("img", {
    src: project.img,
    className: "main-project-img sm:h-[20rem] md:h-[18rem] lg:h-[22rem] w-full",
    title: `Image of ${project.name} project`,
    loading: "lazy",
    alt: `Image of ${project.name} project`
  }), /* @__PURE__ */ React18.createElement("div", {
    className: "main-project-content flex flex-col justify-between"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "flex flex-col mt-5 sm:mt-0"
  }, /* @__PURE__ */ React18.createElement("p", {
    className: "main-project-title font-semibold text-2xl sm:text-3xl pb-5"
  }, project.name), /* @__PURE__ */ React18.createElement("p", {
    className: "main-project-description text-base leading-8 pb-2"
  }, project.description), /* @__PURE__ */ React18.createElement("p", {
    className: "main-project-time text-sm text-projects-subText pb-2"
  }, project.role)), /* @__PURE__ */ React18.createElement("div", {
    className: "main-project-frameworks flex flex-col "
  }, project.frameworks.map((framework) => /* @__PURE__ */ React18.createElement("div", {
    className: "inline-flex items-center",
    key: framework
  }, /* @__PURE__ */ React18.createElement(ArrowSmRightIcon_default, {
    className: "text-projecs-arrow w-5 mr-3"
  }), /* @__PURE__ */ React18.createElement("p", {
    className: "text-[15px] leading-7"
  }, framework)))), /* @__PURE__ */ React18.createElement("div", {
    className: "spacer-div sm:mt-3"
  }), !project.inProgress ? /* @__PURE__ */ React18.createElement("div", {
    className: "main-project-small-buttons flex flex-row items-center justify-between text-sm mt-5"
  }, /* @__PURE__ */ React18.createElement(SmallExternalLinkButton_default, {
    type: "Github",
    href: project.gitRepo,
    accessibilityName: "Visit Github repository"
  }), /* @__PURE__ */ React18.createElement(SmallExternalLinkButton_default, {
    type: "Website",
    href: project.website,
    accessibilityName: "Visit website"
  }), project.npm ? /* @__PURE__ */ React18.createElement(SmallExternalLinkButton_default, {
    type: "NPM",
    href: project.npm,
    accessibilityName: "Visit NPM page"
  }) : null) : null, project.inProgress ? /* @__PURE__ */ React18.createElement("span", {
    className: "WorkInProgress__Label uppercase bg-indigo-400 text-white text-center text-base xs:text-lg py-2 px-6 mt-2 w-fit rounded-full"
  }, "Work In Progress") : /* @__PURE__ */ React18.createElement("div", {
    className: "main-project-buttons flex flex-row items-center justify-start text-sm mt-5 sm:mt-0"
  }, /* @__PURE__ */ React18.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit Github repository"
  }, "View source"), /* @__PURE__ */ React18.createElement("div", {
    className: "mr-4"
  }), /* @__PURE__ */ React18.createElement(ExternalLinkButton_default2, {
    to: project.website,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit Website"
  }, "Visit Website"), project.npm ? /* @__PURE__ */ React18.createElement("div", {
    className: "inline-flex"
  }, /* @__PURE__ */ React18.createElement("div", {
    className: "mr-4"
  }), /* @__PURE__ */ React18.createElement(ExternalLinkButton_default2, {
    to: project.npm,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit NPM package"
  }, "View on NPM")) : null)))));
};
var FeaturedProjects_default = FeaturedProjects;

// app/sections/Projects/RecentProjects.tsx
init_react();
var React19 = __toModule(require_react());
var RecentProjectsTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "title-animation" : "";
  return /* @__PURE__ */ React19.createElement("div", {
    className: `gradient-title ${className} text-center lg:text-[9rem] md:text-[7rem] sm:text-[4rem] xs:text-[3rem] text-[2.5rem] overflow-visible text-transparent`,
    ref: setRef
  }, "Recent projects");
};
var RecentProjects = ({}) => {
  return /* @__PURE__ */ React19.createElement("div", {
    className: "front-end-wrapper flex flex-col text-textSmColor w-full"
  }, /* @__PURE__ */ React19.createElement(RecentProjectsTitle, null), /* @__PURE__ */ React19.createElement("div", {
    className: "h-12"
  }), /* @__PURE__ */ React19.createElement("div", {
    className: "recent-projects-wrapper grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 md:gap-10 md:px-5"
  }, recentProjects.map((project) => /* @__PURE__ */ React19.createElement("div", {
    className: "recent-project-card bg-projects-recentBg text-center flex flex-col rounded-lg duration-300 hover:bg-projects-recentHover focus:bg-projects-recentHover shadow-lg shadow-projects-recentShadow items-center justify-between",
    key: project.name
  }, /* @__PURE__ */ React19.createElement("img", {
    src: project.img,
    alt: `Showcase image for ${project.name}`,
    className: "lg:h-56 md:h-40 w-full rounded-t-lg",
    loading: "lazy"
  }), /* @__PURE__ */ React19.createElement("div", {
    className: "recent-project-content px-5 pt-3 lg:pt-5 lg:px-10"
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "recent-project-card-title font-medium text-2xl pb-3 sm:pb-5"
  }, project.name), /* @__PURE__ */ React19.createElement("div", {
    className: "recent-project-card-description text-base text-subText pb-5"
  }, project.description)), /* @__PURE__ */ React19.createElement("div", {
    className: "recent-project-buttons flex flex-row items-center justify-center text-sm pb-5"
  }, /* @__PURE__ */ React19.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "View source code"
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
var RecentProjects_default = RecentProjects;

// app/sections/Projects/OtherProjects.tsx
init_react();
var React20 = __toModule(require_react());
var OtherProjects = ({}) => {
  return /* @__PURE__ */ React20.createElement("div", {
    className: "others-wrapper text-textSmColor"
  }, /* @__PURE__ */ React20.createElement("ul", {
    className: "other-projects-wrapper m-0 p-0 text-base grid grid-rows-7 list-none gap-5 md:gap-0"
  }, otherProjects.map((project) => /* @__PURE__ */ React20.createElement("li", {
    className: "other-project-wrapper py-4 flex flex-col items-center justify-between md:flex-row",
    key: project.name
  }, /* @__PURE__ */ React20.createElement("div", {
    className: "info inline-flex items-center md:w-48 md:mr-5 custom:mr-0 custom:w-64 mb-5 md:mb-0"
  }, /* @__PURE__ */ React20.createElement("img", {
    src: project.icon,
    alt: project.name,
    loading: "lazy",
    title: `Icon for ${project.name}`,
    className: "md:w-8 mr-4 align-middle"
  }), /* @__PURE__ */ React20.createElement("p", {
    className: "font-medium text-lg"
  }, project.name)), /* @__PURE__ */ React20.createElement("span", {
    className: "md:flex-1 text-base text-center w-full xxs:w-4/5 xs:w-2/3 md:w-full md:text-left"
  }, project.description), /* @__PURE__ */ React20.createElement("div", {
    className: "inline-flex items-center mt-5 md:mt-0 md:ml-5 custom:ml-0"
  }, /* @__PURE__ */ React20.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit GitHub repository"
  }, "View source"), /* @__PURE__ */ React20.createElement("div", {
    className: "mr-4"
  }), /* @__PURE__ */ React20.createElement(ExternalLinkButton_default2, {
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
  return /* @__PURE__ */ React21.createElement("div", {
    className: "projects-wrapper"
  }, /* @__PURE__ */ React21.createElement("svg", {
    viewBox: "0 0 1280 400",
    className: `${featuredClassname} text-[16rem] lg:text-[15rem] font-medium`,
    ref: setRef
  }, /* @__PURE__ */ React21.createElement("text", {
    textAnchor: "middle",
    x: "50%",
    y: "70%"
  }, "Featured")), /* @__PURE__ */ React21.createElement(FeaturedProjects_default, null), /* @__PURE__ */ React21.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React21.createElement(RecentProjects_default, null), /* @__PURE__ */ React21.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React21.createElement(OtherProjects_default, null));
};
var Projects_default2 = Projects;

// app/routes/index.tsx
var React22 = __toModule(require_react());
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
    ...links3(),
    ...links6(),
    ...links7(),
    ...links5(),
    ...links2(),
    ...links4()
  ];
};
var TRACKING_ID = "UA-223958752-1";
esm_default.initialize(TRACKING_ID);
var Index = () => {
  const actionData = useActionData();
  const transition = useTransition();
  React22.useEffect(() => {
    esm_default.pageview(window.location.pathname + window.location.search);
  }, []);
  React22.useEffect(() => {
    const maybeContactForm = document.getElementById(contactFormHtmlId);
    if (maybeContactForm && actionData && actionData.status === 200) {
      maybeContactForm.reset();
    }
  }, [actionData]);
  return /* @__PURE__ */ React22.createElement(React22.Fragment, null, /* @__PURE__ */ React22.createElement("div", {
    className: "app tracking-wide text-lg overflow-hidden"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: `${fixedWidthLayoutClasses} flex flex-col`
  }, /* @__PURE__ */ React22.createElement(AboutMe_default2, null), /* @__PURE__ */ React22.createElement("div", {
    style: { zIndex: -1 }
  }, /* @__PURE__ */ React22.createElement(GradientBackground3, null), /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div mt-20 xs:mt-80"
  }), /* @__PURE__ */ React22.createElement(EatLearnCode, null)), /* @__PURE__ */ React22.createElement(Portfolio, null), /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div xs:mt-44 sm:mt-96",
    id: "portfolio"
  }), /* @__PURE__ */ React22.createElement(MySkills_default2, null), /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div mt-24 custom2:mt-24"
  }), /* @__PURE__ */ React22.createElement("section", {
    id: "projects"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div sm:mt-0"
  }), /* @__PURE__ */ React22.createElement(Projects_default2, null)), /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div mt-24"
  }), /* @__PURE__ */ React22.createElement("div", {
    className: "spacer-div mt-10"
  })), /* @__PURE__ */ React22.createElement("div", {
    className: "blob-bg pb-10",
    id: "contact"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: `${fixedWidthLayoutClasses} pt-20`
  }, /* @__PURE__ */ React22.createElement(Contact_default2, {
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
//# sourceMappingURL=/build/routes/index-SWVXMMFI.js.map
