import {
  require_react_dom
} from "/build/_shared/chunk-PW2KS2GM.js";
import {
  RemixBrowser
} from "/build/_shared/chunk-5DAUTDL6.js";
import "/build/_shared/chunk-UOW7DTF2.js";
import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-RESDZ3PJ.js";

// app/entry.client.tsx
init_react();
var import_react_dom = __toModule(require_react_dom());

// node_modules/stop-runaway-react-effects/dist/stop-runaway-react-effects.esm.js
init_react();
var import_react = __toModule(require_react());
var DEFAULT_CALL_COUNT = 60;
var DEFAULT_TIME_LIMIT = 1e3;
var last = function(array) {
  return array[array.length - 1];
};
var hijackEffectHook = false ? noop : function(hookName, _temp) {
  var _ref = _temp === void 0 ? {} : _temp, _ref$callCount = _ref.callCount, callCount = _ref$callCount === void 0 ? DEFAULT_CALL_COUNT : _ref$callCount, _ref$timeLimit = _ref.timeLimit, timeLimit = _ref$timeLimit === void 0 ? DEFAULT_TIME_LIMIT : _ref$timeLimit;
  var originalHook = import_react.default[hookName];
  import_react.default[hookName] = getHijackedEffectHook({
    hookName,
    callCount,
    timeLimit
  });
  return function() {
    import_react.default[hookName] = originalHook;
  };
};
function getHijackedEffectHook(_ref2) {
  var hookName = _ref2.hookName, callCount = _ref2.callCount, timeLimit = _ref2.timeLimit;
  var originalHook = import_react.default[hookName];
  return function() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var hookCallback = args[0], deps = args[1];
    var ref = import_react.default.useRef([]);
    var warnedRef = import_react.default.useRef(false);
    return originalHook.call(import_react.default, function() {
      var calls = ref.current;
      var oldestCall = last(calls);
      var now = Date.now();
      calls.push({
        time: now,
        args
      });
      if (!warnedRef.current && calls.length >= callCount && oldestCall.time > now - timeLimit) {
        var _console;
        var allRecentCallDependencies = calls.map(function(c) {
          return c.args[1];
        });
        var messages = ["The following effect callback was invoked " + callCount + " times in " + timeLimit + "ms", "\n", hookCallback.toString()];
        if (allRecentCallDependencies.some(Boolean)) {
          messages.push("\n", "Here are the dependencies this effect was called with the last " + callCount + " times:", allRecentCallDependencies);
          messages.push("\n", "Here are the dependency changes between each call:", allRecentCallDependencies.map(function(callDeps, callIndex) {
            if (callIndex === 0) {
              return callDeps;
            }
            return callDeps.map(function(dep, depIndex) {
              var prevDep = allRecentCallDependencies[callIndex - 1][depIndex];
              return Object.is(dep, prevDep) ? "UNCHANGED" : dep;
            });
          }));
          messages.push("\n", "Try to find where those changing dependencies are initialized. You probably need to memoize them using React.useMemo or React.useCallback");
        } else {
          messages.push("\n", "This effect is not called with a dependencies argument and probably should. Start by adding `[]` as a second argument to the " + hookName + " call, then add any other dependencies as elements to that array. You may also be interested in installing ESLint with https://npm.im/eslint-plugin-react-hooks");
        }
        (_console = console).warn.apply(_console, messages);
        warnedRef.current = true;
        throw new Error("Uh oh... Looks like we've got a runaway " + hookName + ". Check the console for more info. Make sure the " + hookName + " is being passed the right dependencies. (By the way, this error message is from https://npm.im/stop-runaway-react-effects, not React)");
      }
      ref.current = calls.slice(0, callCount).filter(function(r) {
        return r.time > now - timeLimit;
      });
      return hookCallback();
    }, deps);
  };
}
var hijackEffects = false ? noop : function(options) {
  var restoreUseEffect = hijackEffectHook("useEffect", options);
  var restoreUseLayoutEffect = hijackEffectHook("useLayoutEffect", options);
  return function() {
    restoreUseEffect();
    restoreUseLayoutEffect();
  };
};

// app/entry.client.tsx
if (true) {
  hijackEffects({
    callCount: 500,
    timeLimit: 1e3
  });
}
(0, import_react_dom.hydrate)(/* @__PURE__ */ React.createElement(RemixBrowser, null), document);
//# sourceMappingURL=/build/entry.client-CU3K52EL.js.map
