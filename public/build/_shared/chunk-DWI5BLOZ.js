import {
  __commonJS,
  init_react,
  require_react
} from "/build/_shared/chunk-FVSE6P6F.js";

// node_modules/history/umd/history.development.js
var require_history_development = __commonJS({
  "node_modules/history/umd/history.development.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports) : typeof define === "function" && define.amd ? define(["exports"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.HistoryLibrary = {}));
    })(exports, function(exports2) {
      "use strict";
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
      exports2.Action = void 0;
      (function(Action) {
        Action["Pop"] = "POP";
        Action["Push"] = "PUSH";
        Action["Replace"] = "REPLACE";
      })(exports2.Action || (exports2.Action = {}));
      var readOnly = function(obj) {
        return Object.freeze(obj);
      };
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      var BeforeUnloadEventType = "beforeunload";
      var HashChangeEventType = "hashchange";
      var PopStateEventType = "popstate";
      function createBrowserHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options = options, _options$window = _options.window, window = _options$window === void 0 ? document.defaultView : _options$window;
        var globalHistory = window.history;
        function getIndexAndLocation() {
          var _window$location = window.location, pathname = _window$location.pathname, search = _window$location.search, hash = _window$location.hash;
          var state = globalHistory.state || {};
          return [state.idx, readOnly({
            pathname,
            search,
            hash,
            state: state.usr || null,
            key: state.key || "default"
          })];
        }
        var blockedPopTx = null;
        function handlePop() {
          if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
          } else {
            var nextAction = exports2.Action.Pop;
            var _getIndexAndLocation = getIndexAndLocation(), nextIndex = _getIndexAndLocation[0], nextLocation = _getIndexAndLocation[1];
            if (blockers.length) {
              if (nextIndex != null) {
                var delta = index - nextIndex;
                if (delta) {
                  blockedPopTx = {
                    action: nextAction,
                    location: nextLocation,
                    retry: function retry() {
                      go(delta * -1);
                    }
                  };
                  go(delta);
                }
              } else {
                warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
              }
            } else {
              applyTx(nextAction);
            }
          }
        }
        window.addEventListener(PopStateEventType, handlePop);
        var action = exports2.Action.Pop;
        var _getIndexAndLocation2 = getIndexAndLocation(), index = _getIndexAndLocation2[0], location = _getIndexAndLocation2[1];
        var listeners = createEvents();
        var blockers = createEvents();
        if (index == null) {
          index = 0;
          globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
          }), "");
        }
        function createHref(to) {
          return typeof to === "string" ? to : createPath(to);
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            hash: "",
            search: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function getHistoryStateAndUrl(nextLocation, index2) {
          return [{
            usr: nextLocation.state,
            key: nextLocation.key,
            idx: index2
          }, createHref(nextLocation)];
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction) {
          action = nextAction;
          var _getIndexAndLocation3 = getIndexAndLocation();
          index = _getIndexAndLocation3[0];
          location = _getIndexAndLocation3[1];
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr[0], url = _getHistoryStateAndUr[1];
            try {
              globalHistory.pushState(historyState, "", url);
            } catch (error) {
              window.location.assign(url);
            }
            applyTx(nextAction);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr2 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr2[0], url = _getHistoryStateAndUr2[1];
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
          }
        }
        function go(delta) {
          globalHistory.go(delta);
        }
        var history = {
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) {
              window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            }
            return function() {
              unblock();
              if (!blockers.length) {
                window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
            };
          }
        };
        return history;
      }
      function createHashHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options2 = options, _options2$window = _options2.window, window = _options2$window === void 0 ? document.defaultView : _options2$window;
        var globalHistory = window.history;
        function getIndexAndLocation() {
          var _parsePath = parsePath(window.location.hash.substr(1)), _parsePath$pathname = _parsePath.pathname, pathname = _parsePath$pathname === void 0 ? "/" : _parsePath$pathname, _parsePath$search = _parsePath.search, search = _parsePath$search === void 0 ? "" : _parsePath$search, _parsePath$hash = _parsePath.hash, hash = _parsePath$hash === void 0 ? "" : _parsePath$hash;
          var state = globalHistory.state || {};
          return [state.idx, readOnly({
            pathname,
            search,
            hash,
            state: state.usr || null,
            key: state.key || "default"
          })];
        }
        var blockedPopTx = null;
        function handlePop() {
          if (blockedPopTx) {
            blockers.call(blockedPopTx);
            blockedPopTx = null;
          } else {
            var nextAction = exports2.Action.Pop;
            var _getIndexAndLocation4 = getIndexAndLocation(), nextIndex = _getIndexAndLocation4[0], nextLocation = _getIndexAndLocation4[1];
            if (blockers.length) {
              if (nextIndex != null) {
                var delta = index - nextIndex;
                if (delta) {
                  blockedPopTx = {
                    action: nextAction,
                    location: nextLocation,
                    retry: function retry() {
                      go(delta * -1);
                    }
                  };
                  go(delta);
                }
              } else {
                warning(false, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
              }
            } else {
              applyTx(nextAction);
            }
          }
        }
        window.addEventListener(PopStateEventType, handlePop);
        window.addEventListener(HashChangeEventType, function() {
          var _getIndexAndLocation5 = getIndexAndLocation(), nextLocation = _getIndexAndLocation5[1];
          if (createPath(nextLocation) !== createPath(location)) {
            handlePop();
          }
        });
        var action = exports2.Action.Pop;
        var _getIndexAndLocation6 = getIndexAndLocation(), index = _getIndexAndLocation6[0], location = _getIndexAndLocation6[1];
        var listeners = createEvents();
        var blockers = createEvents();
        if (index == null) {
          index = 0;
          globalHistory.replaceState(_extends({}, globalHistory.state, {
            idx: index
          }), "");
        }
        function getBaseHref() {
          var base = document.querySelector("base");
          var href = "";
          if (base && base.getAttribute("href")) {
            var url = window.location.href;
            var hashIndex = url.indexOf("#");
            href = hashIndex === -1 ? url : url.slice(0, hashIndex);
          }
          return href;
        }
        function createHref(to) {
          return getBaseHref() + "#" + (typeof to === "string" ? to : createPath(to));
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            hash: "",
            search: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function getHistoryStateAndUrl(nextLocation, index2) {
          return [{
            usr: nextLocation.state,
            key: nextLocation.key,
            idx: index2
          }, createHref(nextLocation)];
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction) {
          action = nextAction;
          var _getIndexAndLocation7 = getIndexAndLocation();
          index = _getIndexAndLocation7[0];
          location = _getIndexAndLocation7[1];
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr3 = getHistoryStateAndUrl(nextLocation, index + 1), historyState = _getHistoryStateAndUr3[0], url = _getHistoryStateAndUr3[1];
            try {
              globalHistory.pushState(historyState, "", url);
            } catch (error) {
              window.location.assign(url);
            }
            applyTx(nextAction);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          warning(nextLocation.pathname.charAt(0) === "/", "Relative pathnames are not supported in hash history.replace(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            var _getHistoryStateAndUr4 = getHistoryStateAndUrl(nextLocation, index), historyState = _getHistoryStateAndUr4[0], url = _getHistoryStateAndUr4[1];
            globalHistory.replaceState(historyState, "", url);
            applyTx(nextAction);
          }
        }
        function go(delta) {
          globalHistory.go(delta);
        }
        var history = {
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            var unblock = blockers.push(blocker);
            if (blockers.length === 1) {
              window.addEventListener(BeforeUnloadEventType, promptBeforeUnload);
            }
            return function() {
              unblock();
              if (!blockers.length) {
                window.removeEventListener(BeforeUnloadEventType, promptBeforeUnload);
              }
            };
          }
        };
        return history;
      }
      function createMemoryHistory(options) {
        if (options === void 0) {
          options = {};
        }
        var _options3 = options, _options3$initialEntr = _options3.initialEntries, initialEntries = _options3$initialEntr === void 0 ? ["/"] : _options3$initialEntr, initialIndex = _options3.initialIndex;
        var entries = initialEntries.map(function(entry) {
          var location2 = readOnly(_extends({
            pathname: "/",
            search: "",
            hash: "",
            state: null,
            key: createKey()
          }, typeof entry === "string" ? parsePath(entry) : entry));
          warning(location2.pathname.charAt(0) === "/", "Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: " + JSON.stringify(entry) + ")");
          return location2;
        });
        var index = clamp(initialIndex == null ? entries.length - 1 : initialIndex, 0, entries.length - 1);
        var action = exports2.Action.Pop;
        var location = entries[index];
        var listeners = createEvents();
        var blockers = createEvents();
        function createHref(to) {
          return typeof to === "string" ? to : createPath(to);
        }
        function getNextLocation(to, state) {
          if (state === void 0) {
            state = null;
          }
          return readOnly(_extends({
            pathname: location.pathname,
            search: "",
            hash: ""
          }, typeof to === "string" ? parsePath(to) : to, {
            state,
            key: createKey()
          }));
        }
        function allowTx(action2, location2, retry) {
          return !blockers.length || (blockers.call({
            action: action2,
            location: location2,
            retry
          }), false);
        }
        function applyTx(nextAction, nextLocation) {
          action = nextAction;
          location = nextLocation;
          listeners.call({
            action,
            location
          });
        }
        function push(to, state) {
          var nextAction = exports2.Action.Push;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            push(to, state);
          }
          warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.push(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            index += 1;
            entries.splice(index, entries.length, nextLocation);
            applyTx(nextAction, nextLocation);
          }
        }
        function replace(to, state) {
          var nextAction = exports2.Action.Replace;
          var nextLocation = getNextLocation(to, state);
          function retry() {
            replace(to, state);
          }
          warning(location.pathname.charAt(0) === "/", "Relative pathnames are not supported in memory history.replace(" + JSON.stringify(to) + ")");
          if (allowTx(nextAction, nextLocation, retry)) {
            entries[index] = nextLocation;
            applyTx(nextAction, nextLocation);
          }
        }
        function go(delta) {
          var nextIndex = clamp(index + delta, 0, entries.length - 1);
          var nextAction = exports2.Action.Pop;
          var nextLocation = entries[nextIndex];
          function retry() {
            go(delta);
          }
          if (allowTx(nextAction, nextLocation, retry)) {
            index = nextIndex;
            applyTx(nextAction, nextLocation);
          }
        }
        var history = {
          get index() {
            return index;
          },
          get action() {
            return action;
          },
          get location() {
            return location;
          },
          createHref,
          push,
          replace,
          go,
          back: function back() {
            go(-1);
          },
          forward: function forward() {
            go(1);
          },
          listen: function listen(listener) {
            return listeners.push(listener);
          },
          block: function block(blocker) {
            return blockers.push(blocker);
          }
        };
        return history;
      }
      function clamp(n, lowerBound, upperBound) {
        return Math.min(Math.max(n, lowerBound), upperBound);
      }
      function promptBeforeUnload(event) {
        event.preventDefault();
        event.returnValue = "";
      }
      function createEvents() {
        var handlers = [];
        return {
          get length() {
            return handlers.length;
          },
          push: function push(fn) {
            handlers.push(fn);
            return function() {
              handlers = handlers.filter(function(handler) {
                return handler !== fn;
              });
            };
          },
          call: function call(arg) {
            handlers.forEach(function(fn) {
              return fn && fn(arg);
            });
          }
        };
      }
      function createKey() {
        return Math.random().toString(36).substr(2, 8);
      }
      function createPath(_ref) {
        var _ref$pathname = _ref.pathname, pathname = _ref$pathname === void 0 ? "/" : _ref$pathname, _ref$search = _ref.search, search = _ref$search === void 0 ? "" : _ref$search, _ref$hash = _ref.hash, hash = _ref$hash === void 0 ? "" : _ref$hash;
        if (search && search !== "?")
          pathname += search.charAt(0) === "?" ? search : "?" + search;
        if (hash && hash !== "#")
          pathname += hash.charAt(0) === "#" ? hash : "#" + hash;
        return pathname;
      }
      function parsePath(path) {
        var parsedPath = {};
        if (path) {
          var hashIndex = path.indexOf("#");
          if (hashIndex >= 0) {
            parsedPath.hash = path.substr(hashIndex);
            path = path.substr(0, hashIndex);
          }
          var searchIndex = path.indexOf("?");
          if (searchIndex >= 0) {
            parsedPath.search = path.substr(searchIndex);
            path = path.substr(0, searchIndex);
          }
          if (path) {
            parsedPath.pathname = path;
          }
        }
        return parsedPath;
      }
      exports2.createBrowserHistory = createBrowserHistory;
      exports2.createHashHistory = createHashHistory;
      exports2.createMemoryHistory = createMemoryHistory;
      exports2.createPath = createPath;
      exports2.parsePath = parsePath;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/history/main.js
var require_main = __commonJS({
  "node_modules/history/main.js"(exports, module) {
    init_react();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_history_development();
    }
  }
});

// node_modules/react-router/umd/react-router.development.js
var require_react_router_development = __commonJS({
  "node_modules/react-router/umd/react-router.development.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_main(), require_react()) : typeof define === "function" && define.amd ? define(["exports", "history", "react"], factory) : (global = global || self, factory(global.ReactRouter = {}, global.HistoryLibrary, global.React));
    })(exports, function(exports2, history, React2) {
      "use strict";
      const NavigationContext = /* @__PURE__ */ React2.createContext(null);
      {
        NavigationContext.displayName = "Navigation";
      }
      const LocationContext = /* @__PURE__ */ React2.createContext(null);
      {
        LocationContext.displayName = "Location";
      }
      const RouteContext = /* @__PURE__ */ React2.createContext({
        outlet: null,
        matches: []
      });
      {
        RouteContext.displayName = "Route";
      }
      function invariant(cond, message) {
        if (!cond)
          throw new Error(message);
      }
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      const alreadyWarned = {};
      function warningOnce(key, cond, message) {
        if (!cond && !alreadyWarned[key]) {
          alreadyWarned[key] = true;
          warning(false, message);
        }
      }
      function generatePath(path, params) {
        if (params === void 0) {
          params = {};
        }
        return path.replace(/:(\w+)/g, (_, key) => {
          !(params[key] != null) ? invariant(false, 'Missing ":' + key + '" param') : void 0;
          return params[key];
        }).replace(/\/*\*$/, (_) => params["*"] == null ? "" : params["*"].replace(/^\/*/, "/"));
      }
      function matchRoutes(routes, locationArg, basename) {
        if (basename === void 0) {
          basename = "/";
        }
        let location = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
        let pathname = stripBasename(location.pathname || "/", basename);
        if (pathname == null) {
          return null;
        }
        let branches = flattenRoutes(routes);
        rankRouteBranches(branches);
        let matches = null;
        for (let i = 0; matches == null && i < branches.length; ++i) {
          matches = matchRouteBranch(branches[i], pathname);
        }
        return matches;
      }
      function flattenRoutes(routes, branches, parentsMeta, parentPath) {
        if (branches === void 0) {
          branches = [];
        }
        if (parentsMeta === void 0) {
          parentsMeta = [];
        }
        if (parentPath === void 0) {
          parentPath = "";
        }
        routes.forEach((route, index) => {
          let meta = {
            relativePath: route.path || "",
            caseSensitive: route.caseSensitive === true,
            childrenIndex: index,
            route
          };
          if (meta.relativePath.startsWith("/")) {
            !meta.relativePath.startsWith(parentPath) ? invariant(false, 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.") : void 0;
            meta.relativePath = meta.relativePath.slice(parentPath.length);
          }
          let path = joinPaths([parentPath, meta.relativePath]);
          let routesMeta = parentsMeta.concat(meta);
          if (route.children && route.children.length > 0) {
            !(route.index !== true) ? invariant(false, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')) : void 0;
            flattenRoutes(route.children, branches, routesMeta, path);
          }
          if (route.path == null && !route.index) {
            return;
          }
          branches.push({
            path,
            score: computeScore(path, route.index),
            routesMeta
          });
        });
        return branches;
      }
      function rankRouteBranches(branches) {
        branches.sort((a, b) => a.score !== b.score ? b.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b.routesMeta.map((meta) => meta.childrenIndex)));
      }
      const paramRe = /^:\w+$/;
      const dynamicSegmentValue = 3;
      const indexRouteValue = 2;
      const emptySegmentValue = 1;
      const staticSegmentValue = 10;
      const splatPenalty = -2;
      const isSplat = (s) => s === "*";
      function computeScore(path, index) {
        let segments = path.split("/");
        let initialScore = segments.length;
        if (segments.some(isSplat)) {
          initialScore += splatPenalty;
        }
        if (index) {
          initialScore += indexRouteValue;
        }
        return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
      }
      function compareIndexes(a, b) {
        let siblings = a.length === b.length && a.slice(0, -1).every((n, i) => n === b[i]);
        return siblings ? a[a.length - 1] - b[b.length - 1] : 0;
      }
      function matchRouteBranch(branch, pathname) {
        let {
          routesMeta
        } = branch;
        let matchedParams = {};
        let matchedPathname = "/";
        let matches = [];
        for (let i = 0; i < routesMeta.length; ++i) {
          let meta = routesMeta[i];
          let end = i === routesMeta.length - 1;
          let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
          let match = matchPath({
            path: meta.relativePath,
            caseSensitive: meta.caseSensitive,
            end
          }, remainingPathname);
          if (!match)
            return null;
          Object.assign(matchedParams, match.params);
          let route = meta.route;
          matches.push({
            params: matchedParams,
            pathname: joinPaths([matchedPathname, match.pathname]),
            pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
            route
          });
          if (match.pathnameBase !== "/") {
            matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
          }
        }
        return matches;
      }
      function matchPath(pattern, pathname) {
        if (typeof pattern === "string") {
          pattern = {
            path: pattern,
            caseSensitive: false,
            end: true
          };
        }
        let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
        let match = pathname.match(matcher);
        if (!match)
          return null;
        let matchedPathname = match[0];
        let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
        let captureGroups = match.slice(1);
        let params = paramNames.reduce((memo, paramName, index) => {
          if (paramName === "*") {
            let splatValue = captureGroups[index] || "";
            pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
          }
          memo[paramName] = safelyDecodeURIComponent(captureGroups[index] || "", paramName);
          return memo;
        }, {});
        return {
          params,
          pathname: matchedPathname,
          pathnameBase,
          pattern
        };
      }
      function compilePath(path, caseSensitive, end) {
        if (caseSensitive === void 0) {
          caseSensitive = false;
        }
        if (end === void 0) {
          end = true;
        }
        warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
        let paramNames = [];
        let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/:(\w+)/g, (_, paramName) => {
          paramNames.push(paramName);
          return "([^\\/]+)";
        });
        if (path.endsWith("*")) {
          paramNames.push("*");
          regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
        } else {
          regexpSource += end ? "\\/*$" : "(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)";
        }
        let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
        return [matcher, paramNames];
      }
      function safelyDecodeURIComponent(value, paramName) {
        try {
          return decodeURIComponent(value);
        } catch (error) {
          warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
          return value;
        }
      }
      function resolvePath(to, fromPathname) {
        if (fromPathname === void 0) {
          fromPathname = "/";
        }
        let {
          pathname: toPathname,
          search = "",
          hash = ""
        } = typeof to === "string" ? history.parsePath(to) : to;
        let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
        return {
          pathname,
          search: normalizeSearch(search),
          hash: normalizeHash(hash)
        };
      }
      function resolvePathname(relativePath, fromPathname) {
        let segments = fromPathname.replace(/\/+$/, "").split("/");
        let relativeSegments = relativePath.split("/");
        relativeSegments.forEach((segment) => {
          if (segment === "..") {
            if (segments.length > 1)
              segments.pop();
          } else if (segment !== ".") {
            segments.push(segment);
          }
        });
        return segments.length > 1 ? segments.join("/") : "/";
      }
      function resolveTo(toArg, routePathnames, locationPathname) {
        let to = typeof toArg === "string" ? history.parsePath(toArg) : toArg;
        let toPathname = toArg === "" || to.pathname === "" ? "/" : to.pathname;
        let from;
        if (toPathname == null) {
          from = locationPathname;
        } else {
          let routePathnameIndex = routePathnames.length - 1;
          if (toPathname.startsWith("..")) {
            let toSegments = toPathname.split("/");
            while (toSegments[0] === "..") {
              toSegments.shift();
              routePathnameIndex -= 1;
            }
            to.pathname = toSegments.join("/");
          }
          from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
        }
        let path = resolvePath(to, from);
        if (toPathname && toPathname !== "/" && toPathname.endsWith("/") && !path.pathname.endsWith("/")) {
          path.pathname += "/";
        }
        return path;
      }
      function getToPathname(to) {
        return to === "" || to.pathname === "" ? "/" : typeof to === "string" ? history.parsePath(to).pathname : to.pathname;
      }
      function stripBasename(pathname, basename) {
        if (basename === "/")
          return pathname;
        if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
          return null;
        }
        let nextChar = pathname.charAt(basename.length);
        if (nextChar && nextChar !== "/") {
          return null;
        }
        return pathname.slice(basename.length) || "/";
      }
      const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
      const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
      const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
      const normalizeHash = (hash) => !hash || hash === "#" ? "" : hash.startsWith("#") ? hash : "#" + hash;
      function useHref(to) {
        !useInRouterContext() ? invariant(false, "useHref() may be used only in the context of a <Router> component.") : void 0;
        let {
          basename,
          navigator
        } = React2.useContext(NavigationContext);
        let {
          hash,
          pathname,
          search
        } = useResolvedPath(to);
        let joinedPathname = pathname;
        if (basename !== "/") {
          let toPathname = getToPathname(to);
          let endsWithSlash = toPathname != null && toPathname.endsWith("/");
          joinedPathname = pathname === "/" ? basename + (endsWithSlash ? "/" : "") : joinPaths([basename, pathname]);
        }
        return navigator.createHref({
          pathname: joinedPathname,
          search,
          hash
        });
      }
      function useInRouterContext() {
        return React2.useContext(LocationContext) != null;
      }
      function useLocation() {
        !useInRouterContext() ? invariant(false, "useLocation() may be used only in the context of a <Router> component.") : void 0;
        return React2.useContext(LocationContext).location;
      }
      function useNavigationType() {
        return React2.useContext(LocationContext).navigationType;
      }
      function useMatch(pattern) {
        !useInRouterContext() ? invariant(false, "useMatch() may be used only in the context of a <Router> component.") : void 0;
        let {
          pathname
        } = useLocation();
        return React2.useMemo(() => matchPath(pattern, pathname), [pathname, pattern]);
      }
      function useNavigate() {
        !useInRouterContext() ? invariant(false, "useNavigate() may be used only in the context of a <Router> component.") : void 0;
        let {
          basename,
          navigator
        } = React2.useContext(NavigationContext);
        let {
          matches
        } = React2.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation();
        let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
        let activeRef = React2.useRef(false);
        React2.useEffect(() => {
          activeRef.current = true;
        });
        let navigate = React2.useCallback(function(to, options) {
          if (options === void 0) {
            options = {};
          }
          warning(activeRef.current, "You should call navigate() in a React.useEffect(), not when your component is first rendered.");
          if (!activeRef.current)
            return;
          if (typeof to === "number") {
            navigator.go(to);
            return;
          }
          let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname);
          if (basename !== "/") {
            path.pathname = joinPaths([basename, path.pathname]);
          }
          (!!options.replace ? navigator.replace : navigator.push)(path, options.state);
        }, [basename, navigator, routePathnamesJson, locationPathname]);
        return navigate;
      }
      const OutletContext = /* @__PURE__ */ React2.createContext(null);
      function useOutletContext() {
        return React2.useContext(OutletContext);
      }
      function useOutlet(context) {
        let outlet = React2.useContext(RouteContext).outlet;
        if (outlet) {
          return /* @__PURE__ */ React2.createElement(OutletContext.Provider, {
            value: context
          }, outlet);
        }
        return outlet;
      }
      function useParams() {
        let {
          matches
        } = React2.useContext(RouteContext);
        let routeMatch = matches[matches.length - 1];
        return routeMatch ? routeMatch.params : {};
      }
      function useResolvedPath(to) {
        let {
          matches
        } = React2.useContext(RouteContext);
        let {
          pathname: locationPathname
        } = useLocation();
        let routePathnamesJson = JSON.stringify(matches.map((match) => match.pathnameBase));
        return React2.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname), [to, routePathnamesJson, locationPathname]);
      }
      function useRoutes(routes, locationArg) {
        !useInRouterContext() ? invariant(false, "useRoutes() may be used only in the context of a <Router> component.") : void 0;
        let {
          matches: parentMatches
        } = React2.useContext(RouteContext);
        let routeMatch = parentMatches[parentMatches.length - 1];
        let parentParams = routeMatch ? routeMatch.params : {};
        let parentPathname = routeMatch ? routeMatch.pathname : "/";
        let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
        let parentRoute = routeMatch && routeMatch.route;
        {
          let parentPath = parentRoute && parentRoute.path || "";
          warningOnce(parentPathname, !parentRoute || parentPath.endsWith("*"), "You rendered descendant <Routes> (or called `useRoutes()`) at " + ('"' + parentPathname + '" (under <Route path="' + parentPath + '">) but the ') + `parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

` + ('Please change the parent <Route path="' + parentPath + '"> to <Route ') + ('path="' + (parentPath === "/" ? "*" : parentPath + "/*") + '">.'));
        }
        let locationFromContext = useLocation();
        let location;
        if (locationArg) {
          var _parsedLocationArg$pa;
          let parsedLocationArg = typeof locationArg === "string" ? history.parsePath(locationArg) : locationArg;
          !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false, "When overriding the location using `<Routes location>` or `useRoutes(routes, location)`, the location pathname must begin with the portion of the URL pathname that was " + ('matched by all parent routes. The current pathname base is "' + parentPathnameBase + '" ') + ('but pathname "' + parsedLocationArg.pathname + '" was given in the `location` prop.')) : void 0;
          location = parsedLocationArg;
        } else {
          location = locationFromContext;
        }
        let pathname = location.pathname || "/";
        let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
        let matches = matchRoutes(routes, {
          pathname: remainingPathname
        });
        {
          warning(parentRoute || matches != null, 'No routes matched location "' + location.pathname + location.search + location.hash + '" ');
          warning(matches == null || matches[matches.length - 1].route.element !== void 0, 'Matched leaf route at location "' + location.pathname + location.search + location.hash + '" does not have an element. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.');
        }
        return _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
          params: Object.assign({}, parentParams, match.params),
          pathname: joinPaths([parentPathnameBase, match.pathname]),
          pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([parentPathnameBase, match.pathnameBase])
        })), parentMatches);
      }
      function _renderMatches(matches, parentMatches) {
        if (parentMatches === void 0) {
          parentMatches = [];
        }
        if (matches == null)
          return null;
        return matches.reduceRight((outlet, match, index) => {
          return /* @__PURE__ */ React2.createElement(RouteContext.Provider, {
            children: match.route.element !== void 0 ? match.route.element : outlet,
            value: {
              outlet,
              matches: parentMatches.concat(matches.slice(0, index + 1))
            }
          });
        }, null);
      }
      function MemoryRouter(_ref) {
        let {
          basename,
          children,
          initialEntries,
          initialIndex
        } = _ref;
        let historyRef = React2.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createMemoryHistory({
            initialEntries,
            initialIndex
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React2.useState({
          action: history$1.action,
          location: history$1.location
        });
        React2.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React2.createElement(Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function Navigate(_ref2) {
        let {
          to,
          replace,
          state
        } = _ref2;
        !useInRouterContext() ? invariant(false, "<Navigate> may be used only in the context of a <Router> component.") : void 0;
        warning(!React2.useContext(NavigationContext).static, "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");
        let navigate = useNavigate();
        React2.useEffect(() => {
          navigate(to, {
            replace,
            state
          });
        });
        return null;
      }
      function Outlet(props) {
        return useOutlet(props.context);
      }
      function Route(_props) {
        invariant(false, "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.");
      }
      function Router(_ref3) {
        let {
          basename: basenameProp = "/",
          children = null,
          location: locationProp,
          navigationType = history.Action.Pop,
          navigator,
          static: staticProp = false
        } = _ref3;
        !!useInRouterContext() ? invariant(false, "You cannot render a <Router> inside another <Router>. You should never have more than one in your app.") : void 0;
        let basename = normalizePathname(basenameProp);
        let navigationContext = React2.useMemo(() => ({
          basename,
          navigator,
          static: staticProp
        }), [basename, navigator, staticProp]);
        if (typeof locationProp === "string") {
          locationProp = history.parsePath(locationProp);
        }
        let {
          pathname = "/",
          search = "",
          hash = "",
          state = null,
          key = "default"
        } = locationProp;
        let location = React2.useMemo(() => {
          let trailingPathname = stripBasename(pathname, basename);
          if (trailingPathname == null) {
            return null;
          }
          return {
            pathname: trailingPathname,
            search,
            hash,
            state,
            key
          };
        }, [basename, pathname, search, hash, state, key]);
        warning(location != null, '<Router basename="' + basename + '"> is not able to match the URL ' + ('"' + pathname + search + hash + '" because it does not start with the ') + "basename, so the <Router> won't render anything.");
        if (location == null) {
          return null;
        }
        return /* @__PURE__ */ React2.createElement(NavigationContext.Provider, {
          value: navigationContext
        }, /* @__PURE__ */ React2.createElement(LocationContext.Provider, {
          children,
          value: {
            location,
            navigationType
          }
        }));
      }
      function Routes(_ref4) {
        let {
          children,
          location
        } = _ref4;
        return useRoutes(createRoutesFromChildren(children), location);
      }
      function createRoutesFromChildren(children) {
        let routes = [];
        React2.Children.forEach(children, (element) => {
          if (!/* @__PURE__ */ React2.isValidElement(element)) {
            return;
          }
          if (element.type === React2.Fragment) {
            routes.push.apply(routes, createRoutesFromChildren(element.props.children));
            return;
          }
          !(element.type === Route) ? invariant(false, "[" + (typeof element.type === "string" ? element.type : element.type.name) + "] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>") : void 0;
          let route = {
            caseSensitive: element.props.caseSensitive,
            element: element.props.element,
            index: element.props.index,
            path: element.props.path
          };
          if (element.props.children) {
            route.children = createRoutesFromChildren(element.props.children);
          }
          routes.push(route);
        });
        return routes;
      }
      function renderMatches(matches) {
        return _renderMatches(matches);
      }
      Object.defineProperty(exports2, "NavigationType", {
        enumerable: true,
        get: function() {
          return history.Action;
        }
      });
      Object.defineProperty(exports2, "createPath", {
        enumerable: true,
        get: function() {
          return history.createPath;
        }
      });
      Object.defineProperty(exports2, "parsePath", {
        enumerable: true,
        get: function() {
          return history.parsePath;
        }
      });
      exports2.MemoryRouter = MemoryRouter;
      exports2.Navigate = Navigate;
      exports2.Outlet = Outlet;
      exports2.Route = Route;
      exports2.Router = Router;
      exports2.Routes = Routes;
      exports2.UNSAFE_LocationContext = LocationContext;
      exports2.UNSAFE_NavigationContext = NavigationContext;
      exports2.UNSAFE_RouteContext = RouteContext;
      exports2.createRoutesFromChildren = createRoutesFromChildren;
      exports2.generatePath = generatePath;
      exports2.matchPath = matchPath;
      exports2.matchRoutes = matchRoutes;
      exports2.renderMatches = renderMatches;
      exports2.resolvePath = resolvePath;
      exports2.useHref = useHref;
      exports2.useInRouterContext = useInRouterContext;
      exports2.useLocation = useLocation;
      exports2.useMatch = useMatch;
      exports2.useNavigate = useNavigate;
      exports2.useNavigationType = useNavigationType;
      exports2.useOutlet = useOutlet;
      exports2.useOutletContext = useOutletContext;
      exports2.useParams = useParams;
      exports2.useResolvedPath = useResolvedPath;
      exports2.useRoutes = useRoutes;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/react-router/main.js
var require_main2 = __commonJS({
  "node_modules/react-router/main.js"(exports, module) {
    init_react();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_router_development();
    }
  }
});

// node_modules/react-router-dom/umd/react-router-dom.development.js
var require_react_router_dom_development = __commonJS({
  "node_modules/react-router-dom/umd/react-router-dom.development.js"(exports, module) {
    init_react();
    (function(global, factory) {
      typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require_react(), require_main(), require_main2()) : typeof define === "function" && define.amd ? define(["exports", "react", "history", "react-router"], factory) : (global = global || self, factory(global.ReactRouterDOM = {}, global.React, global.HistoryLibrary, global.ReactRouter));
    })(exports, function(exports2, React, history, reactRouter) {
      "use strict";
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
      const _excluded = ["onClick", "reloadDocument", "replace", "state", "target", "to"], _excluded2 = ["aria-current", "caseSensitive", "className", "end", "style", "to", "children"];
      function warning(cond, message) {
        if (!cond) {
          if (typeof console !== "undefined")
            console.warn(message);
          try {
            throw new Error(message);
          } catch (e) {
          }
        }
      }
      function BrowserRouter(_ref) {
        let {
          basename,
          children,
          window
        } = _ref;
        let historyRef = React.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createBrowserHistory({
            window
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React.useState({
          action: history$1.action,
          location: history$1.location
        });
        React.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HashRouter(_ref2) {
        let {
          basename,
          children,
          window
        } = _ref2;
        let historyRef = React.useRef();
        if (historyRef.current == null) {
          historyRef.current = history.createHashHistory({
            window
          });
        }
        let history$1 = historyRef.current;
        let [state, setState] = React.useState({
          action: history$1.action,
          location: history$1.location
        });
        React.useLayoutEffect(() => history$1.listen(setState), [history$1]);
        return /* @__PURE__ */ React.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history$1
        });
      }
      function HistoryRouter(_ref3) {
        let {
          basename,
          children,
          history: history2
        } = _ref3;
        const [state, setState] = React.useState({
          action: history2.action,
          location: history2.location
        });
        React.useLayoutEffect(() => history2.listen(setState), [history2]);
        return /* @__PURE__ */ React.createElement(reactRouter.Router, {
          basename,
          children,
          location: state.location,
          navigationType: state.action,
          navigator: history2
        });
      }
      {
        HistoryRouter.displayName = "unstable_HistoryRouter";
      }
      function isModifiedEvent(event) {
        return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
      }
      const Link = /* @__PURE__ */ React.forwardRef(function LinkWithRef(_ref4, ref) {
        let {
          onClick,
          reloadDocument,
          replace = false,
          state,
          target,
          to
        } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
        let href = reactRouter.useHref(to);
        let internalOnClick = useLinkClickHandler(to, {
          replace,
          state,
          target
        });
        function handleClick(event) {
          if (onClick)
            onClick(event);
          if (!event.defaultPrevented && !reloadDocument) {
            internalOnClick(event);
          }
        }
        return /* @__PURE__ */ React.createElement("a", _extends({}, rest, {
          href,
          onClick: handleClick,
          ref,
          target
        }));
      });
      {
        Link.displayName = "Link";
      }
      const NavLink = /* @__PURE__ */ React.forwardRef(function NavLinkWithRef(_ref5, ref) {
        let {
          "aria-current": ariaCurrentProp = "page",
          caseSensitive = false,
          className: classNameProp = "",
          end = false,
          style: styleProp,
          to,
          children
        } = _ref5, rest = _objectWithoutPropertiesLoose(_ref5, _excluded2);
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        let locationPathname = location.pathname;
        let toPathname = path.pathname;
        if (!caseSensitive) {
          locationPathname = locationPathname.toLowerCase();
          toPathname = toPathname.toLowerCase();
        }
        let isActive = locationPathname === toPathname || !end && locationPathname.startsWith(toPathname) && locationPathname.charAt(toPathname.length) === "/";
        let ariaCurrent = isActive ? ariaCurrentProp : void 0;
        let className;
        if (typeof classNameProp === "function") {
          className = classNameProp({
            isActive
          });
        } else {
          className = [classNameProp, isActive ? "active" : null].filter(Boolean).join(" ");
        }
        let style = typeof styleProp === "function" ? styleProp({
          isActive
        }) : styleProp;
        return /* @__PURE__ */ React.createElement(Link, _extends({}, rest, {
          "aria-current": ariaCurrent,
          className,
          ref,
          style,
          to
        }), typeof children === "function" ? children({
          isActive
        }) : children);
      });
      {
        NavLink.displayName = "NavLink";
      }
      function useLinkClickHandler(to, _temp) {
        let {
          target,
          replace: replaceProp,
          state
        } = _temp === void 0 ? {} : _temp;
        let navigate = reactRouter.useNavigate();
        let location = reactRouter.useLocation();
        let path = reactRouter.useResolvedPath(to);
        return React.useCallback((event) => {
          if (event.button === 0 && (!target || target === "_self") && !isModifiedEvent(event)) {
            event.preventDefault();
            let replace = !!replaceProp || reactRouter.createPath(location) === reactRouter.createPath(path);
            navigate(to, {
              replace,
              state
            });
          }
        }, [location, navigate, path, replaceProp, state, target, to]);
      }
      function useSearchParams(defaultInit) {
        warning(typeof URLSearchParams !== "undefined", "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params\n\nIf you're unsure how to load polyfills, we recommend you check out https://polyfill.io/v3/ which provides some recommendations about how to load polyfills only for users that need them, instead of for every user.");
        let defaultSearchParamsRef = React.useRef(createSearchParams(defaultInit));
        let location = reactRouter.useLocation();
        let searchParams = React.useMemo(() => {
          let searchParams2 = createSearchParams(location.search);
          for (let key of defaultSearchParamsRef.current.keys()) {
            if (!searchParams2.has(key)) {
              defaultSearchParamsRef.current.getAll(key).forEach((value) => {
                searchParams2.append(key, value);
              });
            }
          }
          return searchParams2;
        }, [location.search]);
        let navigate = reactRouter.useNavigate();
        let setSearchParams = React.useCallback((nextInit, navigateOptions) => {
          navigate("?" + createSearchParams(nextInit), navigateOptions);
        }, [navigate]);
        return [searchParams, setSearchParams];
      }
      function createSearchParams(init) {
        if (init === void 0) {
          init = "";
        }
        return new URLSearchParams(typeof init === "string" || Array.isArray(init) || init instanceof URLSearchParams ? init : Object.keys(init).reduce((memo, key) => {
          let value = init[key];
          return memo.concat(Array.isArray(value) ? value.map((v) => [key, v]) : [[key, value]]);
        }, []));
      }
      Object.defineProperty(exports2, "MemoryRouter", {
        enumerable: true,
        get: function() {
          return reactRouter.MemoryRouter;
        }
      });
      Object.defineProperty(exports2, "Navigate", {
        enumerable: true,
        get: function() {
          return reactRouter.Navigate;
        }
      });
      Object.defineProperty(exports2, "NavigationType", {
        enumerable: true,
        get: function() {
          return reactRouter.NavigationType;
        }
      });
      Object.defineProperty(exports2, "Outlet", {
        enumerable: true,
        get: function() {
          return reactRouter.Outlet;
        }
      });
      Object.defineProperty(exports2, "Route", {
        enumerable: true,
        get: function() {
          return reactRouter.Route;
        }
      });
      Object.defineProperty(exports2, "Router", {
        enumerable: true,
        get: function() {
          return reactRouter.Router;
        }
      });
      Object.defineProperty(exports2, "Routes", {
        enumerable: true,
        get: function() {
          return reactRouter.Routes;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_LocationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_LocationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_NavigationContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_NavigationContext;
        }
      });
      Object.defineProperty(exports2, "UNSAFE_RouteContext", {
        enumerable: true,
        get: function() {
          return reactRouter.UNSAFE_RouteContext;
        }
      });
      Object.defineProperty(exports2, "createPath", {
        enumerable: true,
        get: function() {
          return reactRouter.createPath;
        }
      });
      Object.defineProperty(exports2, "createRoutesFromChildren", {
        enumerable: true,
        get: function() {
          return reactRouter.createRoutesFromChildren;
        }
      });
      Object.defineProperty(exports2, "generatePath", {
        enumerable: true,
        get: function() {
          return reactRouter.generatePath;
        }
      });
      Object.defineProperty(exports2, "matchPath", {
        enumerable: true,
        get: function() {
          return reactRouter.matchPath;
        }
      });
      Object.defineProperty(exports2, "matchRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.matchRoutes;
        }
      });
      Object.defineProperty(exports2, "parsePath", {
        enumerable: true,
        get: function() {
          return reactRouter.parsePath;
        }
      });
      Object.defineProperty(exports2, "renderMatches", {
        enumerable: true,
        get: function() {
          return reactRouter.renderMatches;
        }
      });
      Object.defineProperty(exports2, "resolvePath", {
        enumerable: true,
        get: function() {
          return reactRouter.resolvePath;
        }
      });
      Object.defineProperty(exports2, "useHref", {
        enumerable: true,
        get: function() {
          return reactRouter.useHref;
        }
      });
      Object.defineProperty(exports2, "useInRouterContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useInRouterContext;
        }
      });
      Object.defineProperty(exports2, "useLocation", {
        enumerable: true,
        get: function() {
          return reactRouter.useLocation;
        }
      });
      Object.defineProperty(exports2, "useMatch", {
        enumerable: true,
        get: function() {
          return reactRouter.useMatch;
        }
      });
      Object.defineProperty(exports2, "useNavigate", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigate;
        }
      });
      Object.defineProperty(exports2, "useNavigationType", {
        enumerable: true,
        get: function() {
          return reactRouter.useNavigationType;
        }
      });
      Object.defineProperty(exports2, "useOutlet", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutlet;
        }
      });
      Object.defineProperty(exports2, "useOutletContext", {
        enumerable: true,
        get: function() {
          return reactRouter.useOutletContext;
        }
      });
      Object.defineProperty(exports2, "useParams", {
        enumerable: true,
        get: function() {
          return reactRouter.useParams;
        }
      });
      Object.defineProperty(exports2, "useResolvedPath", {
        enumerable: true,
        get: function() {
          return reactRouter.useResolvedPath;
        }
      });
      Object.defineProperty(exports2, "useRoutes", {
        enumerable: true,
        get: function() {
          return reactRouter.useRoutes;
        }
      });
      exports2.BrowserRouter = BrowserRouter;
      exports2.HashRouter = HashRouter;
      exports2.Link = Link;
      exports2.NavLink = NavLink;
      exports2.createSearchParams = createSearchParams;
      exports2.unstable_HistoryRouter = HistoryRouter;
      exports2.useLinkClickHandler = useLinkClickHandler;
      exports2.useSearchParams = useSearchParams;
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
  }
});

// node_modules/react-router-dom/main.js
var require_main3 = __commonJS({
  "node_modules/react-router-dom/main.js"(exports, module) {
    init_react();
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_react_router_dom_development();
    }
  }
});

export {
  require_main,
  require_main3 as require_main2
};
/**
 * React Router DOM v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * React Router v6.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=/build/_shared/chunk-DWI5BLOZ.js.map
