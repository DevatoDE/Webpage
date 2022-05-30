var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// server-entry-module:@remix-run/dev/server-build
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
var import_config = require("dotenv/config");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:/Users/flo/Development/Webpage-1/app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader
});
init_react();
var import_remix6 = __toESM(require_remix());

// app/tailwind.css
var tailwind_default = "/build/_assets/tailwind-IJELHZCB.css";

// app/styles/global.css
var global_default = "/build/_assets/global-HE6OXUP5.css";

// route:/Users/flo/Development/Webpage-1/app/root.tsx
var React9 = __toESM(require("react"));

// app/components/NavBar/NavBar.tsx
init_react();
var React6 = __toESM(require("react"));
var import_remix4 = __toESM(require_remix());

// app/components/ThemeButton/ThemeButton.tsx
init_react();
var React4 = __toESM(require("react"));

// app/providers/ModalProvider.tsx
init_react();
var React2 = __toESM(require("react"));
var ModalContext = React2.createContext(void 0);
var useModalContext = () => {
  const contextValue = React2.useContext(ModalContext);
  if (!contextValue) {
    throw new Error("You are trying to use useModalContext without rendering a ModalContext.Provider somewhere above this component in the component tree. Render a ModalContext.Provider somewhere above this component in the component tree to resolve this issue.");
  }
  return contextValue;
};
var ModalContextProvider = (props) => {
  const [modalIsOpen, setModalIsOpen] = React2.useState(false);
  const updateModalStatus = (newValue) => {
    setModalIsOpen(newValue);
  };
  React2.useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add("fixed");
      document.body.classList.add("overflow-y-hidden");
      document.body.style.height = "100vh";
    } else {
      document.body.classList.remove("fixed");
      document.body.classList.remove("overflow-y-hidden");
      document.body.style.removeProperty("height");
    }
  }, [modalIsOpen]);
  return /* @__PURE__ */ React2.createElement(ModalContext.Provider, {
    value: {
      modalIsOpen,
      updateModalStatus
    }
  }, props.children);
};

// app/providers/ThemeProvider.tsx
init_react();
var React3 = __toESM(require("react"));
var ThemeContext = React3.createContext(void 0);
var useTheme = () => {
  const contextValue = React3.useContext(ThemeContext);
  if (!contextValue) {
    throw new Error("You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue.");
  }
  return contextValue;
};
var ThemeContextProvider = (props) => {
  const [theme, setTheme] = React3.useState(props.initialTheme);
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return /* @__PURE__ */ React3.createElement(ThemeContext.Provider, {
    value: {
      theme,
      updateTheme
    }
  }, props.children);
};

// app/components/ThemeButton/ThemeButton.tsx
var getShadowClassName = (theme, hasStripeHeader) => {
  if (theme === "light" /* LIGHT */) {
    return hasStripeHeader ? "shadow-light-stripe" : "shadow-light";
  } else {
    return hasStripeHeader ? "shadow-dark-stripe" : "shadow-dark";
  }
};
var getClassName = (theme) => {
  return theme === "light" /* LIGHT */ ? "border-2 border-gray-400 hover:border-black" : "border-2 border-gray-400 hover:border-white";
};
var mobileSun = "/svg/mobileSun.svg";
var ThemeButton = (props) => {
  const { theme, updateTheme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const sun = "/svg/sun.svg";
  const shadow = getShadowClassName(theme, props.hasStripeHeader);
  const className = getClassName(theme);
  const handleToggleTheme = (oldTheme) => {
    updateTheme(oldTheme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */);
  };
  const nextTheme = theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */;
  const generateFormData = () => {
    const form = new FormData();
    form.append("theme", nextTheme);
    return form;
  };
  function toggleTheme(theme2) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme2);
      fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return /* @__PURE__ */ React4.createElement(React4.Fragment, null, !modalIsOpen ? /* @__PURE__ */ React4.createElement("div", {
    className: "ThemeButton_Wrapper"
  }, /* @__PURE__ */ React4.createElement("button", {
    name: "Switch to dark theme",
    className: `theme-container ${shadow}`,
    onClick: () => toggleTheme(theme)
  }, theme === "light" /* LIGHT */ ? /* @__PURE__ */ React4.createElement("img", {
    className: "theme-icon select-none",
    src: sun,
    alt: "Sun icon",
    title: "Sun"
  }) : /* @__PURE__ */ React4.createElement(MoonIcon, {
    onBlogRoute: !props.hasStripeHeader
  }))) : /* @__PURE__ */ React4.createElement("div", {
    className: "ThemeButton_Wrapper"
  }, /* @__PURE__ */ React4.createElement("button", {
    name: "Switch to light mode",
    className: `rounded-full px-5 py-3 inline-flex items-center justify-center ${className}`,
    onClick: () => toggleTheme(theme)
  }, theme === "light" /* LIGHT */ ? /* @__PURE__ */ React4.createElement("div", {
    className: "inline-flex items-center justify-center text-base"
  }, /* @__PURE__ */ React4.createElement("img", {
    className: "theme-icon select-none mr-4 w-5",
    src: mobileSun,
    alt: "Sun icon",
    title: "Sun"
  }), /* @__PURE__ */ React4.createElement("p", {
    className: "text-black"
  }, "Switch to dark mode")) : /* @__PURE__ */ React4.createElement("div", {
    className: "inline-flex items-center justify-center text-base"
  }, /* @__PURE__ */ React4.createElement("img", {
    src: "/svg/moon-blog.svg",
    alt: "Moon icon",
    title: "Moon",
    className: "theme-icon flex items-center m-auto justify-center w-5 select-none"
  }), /* @__PURE__ */ React4.createElement("p", {
    className: "ml-4 text-gray-200 hover:text-white"
  }, "Switch to light mode")))));
};
var MoonIcon = (props) => /* @__PURE__ */ React4.createElement("img", {
  src: props.onBlogRoute ? "/svg/moon-blog.svg" : "/svg/moon.svg",
  alt: "Moon icon",
  title: "Moon",
  className: "theme-icon flex items-center m-auto justify-center w-8 select-none"
});
var ThemeButton_default = ThemeButton;
var SimplifiedThemeButton = () => {
  const { theme, updateTheme } = useTheme();
  const handleToggleTheme = (oldTheme) => {
    updateTheme(oldTheme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */);
  };
  const nextTheme = theme === "dark" /* DARK */ ? "light" /* LIGHT */ : "dark" /* DARK */;
  const generateFormData = () => {
    const form = new FormData();
    form.append("theme", nextTheme);
    return form;
  };
  function toggleTheme(theme2) {
    requestAnimationFrame(() => {
      handleToggleTheme(theme2);
      fetch("/setTheme?index", {
        method: "POST",
        body: generateFormData(),
        credentials: "same-origin"
      });
    });
  }
  return /* @__PURE__ */ React4.createElement("div", {
    className: "SimplifiedThemeButton_Wrapper"
  }, /* @__PURE__ */ React4.createElement("button", {
    name: "light theme",
    className: `rounded-full px-5 py-3 inline-flex items-center justify-center `,
    onClick: () => toggleTheme(theme)
  }, theme === "light" /* LIGHT */ ? /* @__PURE__ */ React4.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-7 w-7 text-gray-600 hover:text-black ease-in duration-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  })) : /* @__PURE__ */ React4.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-7 w-7 text-gray-400 hover:text-white ease-in duration-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }))));
};

// app/constants.tsx
init_react();

// app/assets/otherprojects/game.png
var game_default = "/build/_assets/game-COU6NQ35.png";

// app/assets/otherprojects/launch.png
var launch_default = "/build/_assets/launch-Q2SHHKB7.png";

// app/assets/otherprojects/bookmark.png
var bookmark_default = "/build/_assets/bookmark-V76FVPJS.png";

// app/assets/otherprojects/memory.png
var memory_default = "/build/_assets/memory-RFIFC7HR.png";

// app/assets/otherprojects/invoice.png
var invoice_default = "/build/_assets/invoice-ASYB6UL2.png";

// app/assets/otherprojects/pomodoro.png
var pomodoro_default = "/build/_assets/pomodoro-5X7SIOCR.png";

// app/assets/otherprojects/weather.png
var weather_default = "/build/_assets/weather-KIFYQBNS.png";

// app/constants.tsx
var import_fa = require("react-icons/fa");
var IMAGE_WIDTH = "1200";
var IMAGE_HEIGHT = "630";
var PORTFOLIO_WEBSITE_NAME = "Devato | Shopify Development";
var BLOG_WEBSITE_NAME = "Devato | Blog";
var TWITTER_CARD_TYPE = "summary_large_image";
var AUTHOR = "Flo S";
var WEBSITE_URL = "https://www.devato.de/";
var BLOG_URL = "https://www.devato.de/blog";
var TWITTER_ACC = "@flostanglmeier";
var TWITTER_PUBLISHER = "https://twitter.com/FloStanglmeier";
var WEBSITE_KEYWORDS = "Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer";
var BLOG_KEYWORDS = "Remix, Shopify, ECommerce, Shopify Agentur, Agentur Shopify, Shopify Software Entwicklung, Shopify Development, Backend, Software Development, Software Engineer, Modern Programing, Frontend Engineer, Web Developer, Florian Stanglmeier, Tobias Peters, Ecommerce Optimierung, Shopify Beratung, Shopify Programmierer";
var WEBSITE_DESCRIPTION = "Wir sind deine zuverl\xE4ssige Shopify Agentur f\xFCr die Entwicklung von Shopify-Websites und -Apps, sowie f\xFCr die Optimierung von E-Commerce Shops.";
var BLOG_DESCRIPTION = "Shopify Development von Experten: Alles rund um ECommerce Optimierung und Software Engineering f\xFCr Shopify-Websites und -Apps.";
var PORTFOLIO_IMAGE_URL = "https://www.alissanguyen.dev/images/preview.jpg";
var BLOG_IMAGE_URL = "https://www.alissanguyen.dev/images/blogpreview.jpg";
var topLevelLinksOnMobile = [
  {
    href: "/",
    displayName: "Home"
  },
  {
    href: "/blog",
    displayName: "Blog & Case Studies"
  },
  {
    href: "/#portfolio",
    displayName: "Services"
  },
  {
    href: "/#projects",
    displayName: "Projekte"
  },
  {
    href: "/#contact",
    displayName: "Kontakt"
  }
];
var topLevelLinksOnDesktop = [
  {
    href: "/blog",
    displayName: "Blog & Case Studies"
  },
  {
    href: "/#portfolio",
    displayName: "Services"
  },
  {
    href: "/#projects",
    displayName: "Projekte"
  },
  {
    href: "/#contact",
    displayName: "Kontakt"
  }
];
var THEME_COOKIE_KEY = "florian_s_theme";
var sm = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(import_fa.FaFacebookF, null),
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(import_fa.FaTwitter, null),
    externalUrl: "https://twitter.com/alissang_dev"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(import_fa.FaInstagram, null),
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(import_fa.FaGithub, null),
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(import_fa.FaLinkedin, null),
    externalUrl: "https://www.linkedin.com/in/alissa-nguyen-dev/"
  }
];
var contactFormHtmlId = "contact-form";
var tags = [
  { id: "algorithms", name: "algorithms" },
  { id: "tutorials", name: "tutorials" },
  {
    id: "frontEnd",
    name: "front-end"
  },
  {
    id: "backEnd",
    name: "backend"
  },
  {
    id: "css",
    name: "css"
  },
  {
    id: "html",
    name: "html"
  },
  {
    id: "javascript",
    name: "javascript"
  },
  {
    id: "performance",
    name: "performance"
  },
  {
    id: "personal",
    name: "personal"
  },
  {
    id: "productivity",
    name: "productivity"
  },
  {
    id: "react",
    name: "react"
  },
  {
    id: "remix",
    name: "remix"
  },
  {
    id: "typescript",
    name: "typescript"
  },
  {
    id: "git",
    name: "git"
  },
  {
    id: "resources",
    name: "resources"
  },
  {
    id: "testing",
    name: "testing"
  },
  {
    id: "general",
    name: "general"
  },
  { id: "security", name: "security" },
  { id: "hosting", name: "hosting" },
  { id: "databases", name: "databases" },
  { id: "shopify", name: "shopify" }
];
var fixedWidthLayoutClasses = `relative max-w-screen-lg w-full text-3xl m-auto px-8 sm:px-12 lg:px-5 xl:px-0`;
var skills = [
  {
    id: "a",
    name: "Javascript",
    icon: "/images/tech/javascript.svg"
  },
  {
    id: "b",
    name: "Typescript",
    icon: "/images/tech/typescript.svg"
  },
  {
    id: "c",
    name: "React.js",
    icon: "/images/tech/react.svg"
  },
  {
    id: "d",
    name: "HTML",
    icon: "/images/tech/html.svg"
  },
  {
    id: "e",
    name: "CSS",
    icon: "/images/tech/css.svg"
  },
  {
    id: "g",
    name: "C#",
    icon: "/images/tech/C.svg"
  },
  {
    id: "k",
    name: "Framework",
    icon: "/images/tech/NET.svg"
  },
  {
    id: "n",
    name: "Tensorflow",
    icon: "/images/tech/tensorflow.svg"
  },
  {
    id: "o",
    name: "Python",
    icon: "/images/tech/Python.svg"
  },
  {
    id: "p",
    name: "Node.js",
    icon: "/images/tech/nodejs.svg"
  },
  {
    id: "q",
    name: "Shopify",
    icon: "/images/tech/shopify.svg"
  },
  {
    id: "r",
    name: "Woo Commerce",
    icon: "/images/tech/woocom.svg"
  }
];
var abilities = [
  "FRONTEND - Die richtige Technologie unterst\xFCtzt Ihr Vorhaben und optimiert wichtige Aspekte wie Performance und Sicherheit. Durch ein tiefes technisches Verst\xE4ndnis der Technologien k\xF6nnen Sie Ihre Projekte effizienter gestalten und schneller entwickeln. Wir nutzen Javascript, Typescript und React f\xFCr unsere Front-End Projekte.",
  "BACKEND - Ein resilentes Backend System ist der Grundstein f\xFCr einen automatisierten Online Store. Sei es die Automation der Bestellung beim Supplier oder die Integration von innovativen Machine Learning Systemen - Die Experten von Devato entwickeln eine individuelle L\xF6sung f\xFCr Ihr Unternehmen. ",
  "Durch jahrelange Erfahrung mit diversen E-Commerce Plattformen und Shop Systemen k\xF6nnen wir Sie sowohl bei der Optimierung von Conversion Rates und allgemeinen KPI's helfen, als auch bei der Migration von ganzen Stores auf eine neue Plattform. "
];
var recentProjects = [
  {
    name: "Unimals",
    description: "Unimals verkauft Artikel die der Kunde selbst gestalten kann. Neben einer ausgiebigen Analyse der bestehenden Prozesse, wurde eine gr\xFCndliche Optimierung der generellen Schnittstellen vorgenommen. Ferner mussten alle Bestellungen im Backend automatisch an die Supplier API gesendet werden.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://www.unimals.de/",
    img: "/images/projects/unimals.png"
  },
  {
    name: "HelloBello",
    description: "Migration von WooCommerce zu Shopify auf Basis eines integrierten Subscription (Abo) Modelles.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://www.hellobello.at/",
    img: "/images/projects/HelloBello.png"
  },
  {
    name: "LiWanda",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "/images/projects/atom.jpg"
  }
];
var otherProjects = [
  {
    icon: game_default,
    name: "Glass Gaming",
    description: "A demo UI for gamers to track gaming progress with inneumorphism design.",
    gitRepo: "https://github.com/alissanguyen/glass-gaming-website",
    website: "https://glassgaming.alissanguyen.dev"
  },
  {
    icon: launch_default,
    name: "Launch Countdown",
    description: "A demo launch countdown page with animations.",
    gitRepo: "https://github.com/alissanguyen/launch-countdown",
    website: "https://launch.alissanguyen.dev"
  },
  {
    icon: bookmark_default,
    name: "Bookmark Page Demo",
    description: "A demo landing page for a bookmark tool.",
    gitRepo: "https://github.com/alissanguyen/demo-bookmark-page",
    website: "https://bookmark.alissanguyen.dev"
  },
  {
    icon: memory_default,
    name: "Memory Game",
    description: "A memory game website.",
    gitRepo: "https://github.com/alissanguyen/memory-game",
    website: "https://memory.alissanguyen.dev/"
  },
  {
    icon: invoice_default,
    name: "Invoice App Demo",
    description: "A demo UI for invoices management.",
    gitRepo: "https://github.com/alissanguyen/invoice-app-demo",
    website: "https://invoices.alissanguyen.dev"
  },
  {
    icon: pomodoro_default,
    name: "Pomodoro Timer App",
    description: "A pomodoro inspired timer with mobile-first design.",
    gitRepo: "https://github.com/alissanguyen/pomodoro-app",
    website: "https://pomodoro.alissanguyen.dev/"
  },
  {
    icon: weather_default,
    name: "Weatherly",
    description: "A 5-day weather website that includes forecast for every 3 hours.",
    gitRepo: "https://github.com/alissanguyen/weatherly",
    website: "https://weatherly.alissanguyen.dev/"
  }
];
var facts = [
  {
    index: 1,
    title: "WooCoomerce to Shopify",
    description: "Migration von Shops kann aufw\xE4ndig sein. Wir helfen Ihnen damit.",
    image: "/images/facts/bg_services.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `Subscription Integration`,
    description: "Abo Modelle in Shopify Stores integrieren und verwalten.",
    image: "/images/facts/bg_services.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "Conversion Optimierung",
    description: "Nachweisliche Steigerung Ihrer KPI's durch strategische Optimierung.",
    image: "/images/facts/bg_services.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "Third Party Integration",
    description: "Drittanbieter Applikationen einfach und sicher in Shopify implementieren.",
    image: "/images/facts/bg_services.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "Shopify Daten Export & Pipeline",
    description: "Shopify sammelt wertvolle E_Commerce Daten die wir f\xFCr Sie in bestehende Dashboards integrieren.",
    image: "/images/facts/bg_services.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "Analytics & Artificial Intelligence",
    description: "Als Experten f\xFCr E-Commerce Analytics und KI entwickeln wir innovative L\xF6sungen.",
    image: "/images/facts/bg_services.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "Chat Bot und On-Site Apps",
    description: "Durch Chatbots und ander On-Site Apps bieten Sie Ihren Kunden mehr als die Konkurrenz",
    image: "/images/facts/bg_services.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "CRM Integration & Custom Backend Development",
    description: "Wir l\xF6sen die technisch komplexesten Shopify Probleme.",
    image: "/images/facts/bg_services.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];
var NAVBAR_ID = "Navbar";

// app/components/NavBar/NavLink.tsx
init_react();
var import_remix2 = __toESM(require_remix());
var getTextColorClassNameForNavLink = (hasStripeHeader, currentTheme) => {
  if (currentTheme === "dark" /* DARK */) {
    return hasStripeHeader ? "text-white hover:text-cyan-300" : "text-gray-400 hover:text-white";
  }
  if (currentTheme === "light" /* LIGHT */) {
    return hasStripeHeader ? "text-white hover:text-cyan-400" : "text-gray-400 hover:text-black";
  }
};
var NavLink = (_a) => {
  var _b = _a, {
    to,
    hasStripeBackground,
    isCurrentRoute
  } = _b, rest = __objRest(_b, [
    "to",
    "hasStripeBackground",
    "isCurrentRoute"
  ]);
  const { theme } = useTheme();
  const textColorClassName = getTextColorClassNameForNavLink(hasStripeBackground, theme);
  const IS_CURRENT_ROUTE_CLASSNAME = hasStripeBackground ? "NavLink--is-active-route text-cyan-300" : "NavLink--is-active-route text-navBar-linkActive";
  return /* @__PURE__ */ React.createElement("li", {
    className: "px-5 py-2"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, __spreadValues({
    prefetch: "intent",
    className: `focus:outline-none block whitespace-nowrap text-lg font-medium ${textColorClassName} ${isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null}`,
    to
  }, rest)));
};
var NavLink_default = NavLink;

// app/components/NavBar/MobileMenu.tsx
init_react();
var import_menu_button2 = require("@reach/menu-button");

// app/components/NavBar/MobileMenuList.tsx
init_react();
var import_menu_button = require("@reach/menu-button");
var import_framer_motion = require("framer-motion");
var import_remix3 = __toESM(require_remix());
var MobileMenuList = (props) => {
  const shouldReduceMotion = (0, import_framer_motion.useReducedMotion)();
  return /* @__PURE__ */ React.createElement(import_framer_motion.AnimatePresence, null, props.isExpanded ? /* @__PURE__ */ React.createElement(import_menu_button.MenuPopover, {
    position: (mobileMenuExpandButton) => ({
      top: `calc(${Number(mobileMenuExpandButton == null ? void 0 : mobileMenuExpandButton.top) + Number(mobileMenuExpandButton == null ? void 0 : mobileMenuExpandButton.height)}px + 2.25rem)`,
      left: 0,
      bottom: 0,
      right: 0
    }),
    className: "block z-50"
  }, /* @__PURE__ */ React.createElement(import_framer_motion.motion.div, {
    initial: { y: -50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -50, opacity: 0 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.15,
      ease: "linear"
    },
    className: "MenuLists h-full overflow-y-scroll border-t border-mobileNav-border pb-12 outline-none"
  }, /* @__PURE__ */ React.createElement(import_menu_button.MenuItems, {
    className: "MobileNav__MenuItemsWrapper flex border-none bg-transparent p-0 h-full flex-col"
  }, topLevelLinksOnMobile.map((link) => /* @__PURE__ */ React.createElement(import_menu_button.MenuLink, {
    className: "MobileNav__MenuItem border-b border-mobileNav-border px-[5vw] text-lg py-9",
    key: link.href,
    as: import_remix3.Link,
    to: link.href
  }, link.displayName)), /* @__PURE__ */ React.createElement("div", {
    className: "noscript-hidden py-9 text-center flex justify-center"
  }, /* @__PURE__ */ React.createElement(ThemeButton_default, {
    hasStripeHeader: props.hasStripeHeader
  }))))) : null);
};
var MobileMenuList_default = MobileMenuList;

// app/components/NavBar/MobileMenu.tsx
var React5 = __toESM(require("react"));
var getClassName2 = (theme, hasStripeHeader, modalIsOpen) => {
  if (modalIsOpen) {
    return theme === "light" /* LIGHT */ ? "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black" : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
  if (theme === "light" /* LIGHT */) {
    return hasStripeHeader ? "text-blue-800 hover:text-white border-blue-800 hover:border-white focus:border-white" : "text-gray-400 hover:text-black border-gray-400 hover:border-black focus:border-black";
  }
  if (theme === "dark" /* DARK */) {
    return hasStripeHeader ? "text-blue-200 hover:text-white border-blue-200 hover:border-white focus:border-white" : "text-gray-500 hover:text-white border-gray-500 hover:border-white focus:border-white";
  }
};
var MobileMenu = (props) => {
  const { modalIsOpen, updateModalStatus } = useModalContext();
  const className = getClassName2(props.theme, props.hasStripeHeader, modalIsOpen);
  return /* @__PURE__ */ React5.createElement(import_menu_button2.Menu, null, ({ isExpanded }) => {
    React5.useEffect(() => {
      updateModalStatus(isExpanded);
    }, [isExpanded]);
    return /* @__PURE__ */ React5.createElement(React5.Fragment, null, /* @__PURE__ */ React5.createElement(import_menu_button2.MenuButton, {
      id: "menu--1",
      "aria-label": isExpanded ? "Close menu" : "Open menu",
      name: isExpanded ? "Close menu" : "Open menu",
      className: "focus:outline-none inline-flex h-12 w-12 items-center justify-center rounded-full border-2 p-1 transition " + className
    }, /* @__PURE__ */ React5.createElement("svg", {
      className: `ham hamRotate ham8 ${modalIsOpen ? "active" : ""}`,
      viewBox: "0 0 100 100",
      width: "80",
      id: "ham-button",
      fill: "currentColor"
    }, /* @__PURE__ */ React5.createElement("path", {
      className: "line top",
      d: "m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20",
      fill: "currentColor"
    }), /* @__PURE__ */ React5.createElement("path", {
      className: "line middle",
      d: "m 30,50 h 40",
      fill: "currentColor"
    }), /* @__PURE__ */ React5.createElement("path", {
      className: "line bottom",
      d: "m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20",
      fill: "currentColor"
    }))), /* @__PURE__ */ React5.createElement(MobileMenuList_default, __spreadProps(__spreadValues({}, props), {
      isExpanded
    })));
  });
};
var MobileMenu_default = MobileMenu;

// app/components/NavBar/NavBar.tsx
var Navbar = () => {
  const location = (0, import_remix4.useLocation)();
  const hasStripeBackground = !location.pathname.startsWith("/blog");
  const { modalIsOpen } = useModalContext();
  const { theme } = useTheme();
  const currentTopLevelRoute = location.pathname.split("/")[1];
  return /* @__PURE__ */ React6.createElement(React6.Fragment, null, /* @__PURE__ */ React6.createElement("div", {
    className: fixedWidthLayoutClasses + " mb-10 md:mb-16 lg:mb-20",
    id: NAVBAR_ID
  }, /* @__PURE__ */ React6.createElement("nav", {
    className: "px-5vw nav-bar-wrapper py-10 pb-15 w-full mx-auto flex max-w-8xl items-center justify-between"
  }, /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement(NavLogo, {
    hasStripeBackground,
    isCurrentRoute: getIsActiveRoute("/", currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute)
  })), /* @__PURE__ */ React6.createElement("ul", {
    className: "hidden lg:flex lg:w-1/2 justify-between list-none"
  }, topLevelLinksOnDesktop.map((link) => {
    return /* @__PURE__ */ React6.createElement(NavLink_default, {
      key: link.href,
      to: link.href,
      hasStripeBackground,
      isCurrentRoute: getIsActiveRoute(link.href, currentTopLevelRoute === void 0 ? "" : currentTopLevelRoute)
    }, link.displayName);
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "block lg:hidden"
  }, /* @__PURE__ */ React6.createElement(MobileMenu_default, {
    hasStripeHeader: hasStripeBackground,
    theme
  })), /* @__PURE__ */ React6.createElement("div", {
    className: "noscript-hidden hidden lg:block"
  }, /* @__PURE__ */ React6.createElement(ThemeButton_default, {
    hasStripeHeader: hasStripeBackground
  }))))), hasStripeBackground && !modalIsOpen && /* @__PURE__ */ React6.createElement("div", {
    id: "stripes"
  }, /* @__PURE__ */ React6.createElement("span", null), /* @__PURE__ */ React6.createElement("span", null), /* @__PURE__ */ React6.createElement("span", null), /* @__PURE__ */ React6.createElement("span", null), /* @__PURE__ */ React6.createElement("span", null)));
};
var getIsActiveRoute = (href, currentTopLevelRoute) => {
  if (href.startsWith("/#")) {
    return false;
  }
  return "/" + currentTopLevelRoute === href;
};
var NavBar_default = Navbar;
var NavLogo = (props) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const logoText = getLogoClassName(props.hasStripeBackground, theme, modalIsOpen);
  const IS_CURRENT_ROUTE_CLASSNAME = "NavLink--is-active-route";
  return /* @__PURE__ */ React6.createElement(import_remix4.Link, {
    prefetch: "intent",
    to: "/",
    className: `logo  ${logoText} ${props.isCurrentRoute ? IS_CURRENT_ROUTE_CLASSNAME : null}`
  }, /* @__PURE__ */ React6.createElement("img", {
    src: "./images/logo.png",
    width: 150
  }));
};
var getLogoClassName = (hasStripeBg, theme, modalIsOpen) => {
  if (modalIsOpen) {
    return theme === "light" /* LIGHT */ ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white";
  }
  if (hasStripeBg) {
    return theme === "light" /* LIGHT */ ? "text-cyan-100" : "text-cyan-200";
  }
  return theme === "light" /* LIGHT */ ? "text-gray-500 hover:text-black" : "text-gray-400 hover:text-white";
};

// app/components/NavBar/NavBar.css
var NavBar_default2 = "/build/_assets/NavBar-UV7VHNAO.css";

// app/components/Error/ErrorPage.css
var ErrorPage_default = "/build/_assets/ErrorPage-Y3QCBTQ2.css";

// app/components/ThemeButton/ThemeButton.css
var ThemeButton_default2 = "/build/_assets/ThemeButton-72VSPY3H.css";

// app/components/Footer/Footer.tsx
init_react();
var React7 = __toESM(require("react"));
var Footer = ({}) => {
  return /* @__PURE__ */ React7.createElement("div", {
    className: "footer"
  }, /* @__PURE__ */ React7.createElement("footer", {
    className: "p-4 bg-white sm:p-6 dark:bg-gray-800"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "md:flex md:justify-between"
  }, /* @__PURE__ */ React7.createElement("div", {
    className: "mb-6 md:mb-0"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de",
    className: "flex items-center"
  }, /* @__PURE__ */ React7.createElement("img", {
    src: "./images/devato-logo-white.png",
    className: "mr-3 h-10",
    alt: "Logo"
  }), /* @__PURE__ */ React7.createElement("span", {
    className: "self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
  }))), /* @__PURE__ */ React7.createElement("div", {
    className: "grid grid-cols-2 gap-20 sm:gap-20 sm:grid-cols-3"
  }, /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Ressourcen"), /* @__PURE__ */ React7.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4 mr-5"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de/blog",
    className: "hover:underline"
  }, "Blog")), /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "https://github.com/DevatoDE?tab=repositories",
    className: "hover:underline"
  }, "Code Templates")), /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement("a", {
    href: "https://github.com/DevatoDE?tab=repositories",
    className: "hover:underline"
  }, "Upwork Testimonials")))), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Service"), /* @__PURE__ */ React7.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline "
  }, "Shopify Development")), /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline"
  }, "Backend Automation")), /* @__PURE__ */ React7.createElement("li", null, /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de/#portfolio",
    className: "hover:underline"
  }, "Shopify Optimierung")))), /* @__PURE__ */ React7.createElement("div", null, /* @__PURE__ */ React7.createElement("h2", {
    className: "mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white"
  }, "Rechtliches"), /* @__PURE__ */ React7.createElement("ul", {
    className: "text-gray-600 dark:text-gray-400"
  }, /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "/impressum",
    className: "hover:underline"
  }, "Impressum")), /* @__PURE__ */ React7.createElement("li", {
    className: "mb-4"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "/datenschutz",
    className: "hover:underline"
  }, "Datenschutz")))))), /* @__PURE__ */ React7.createElement("hr", {
    className: "my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"
  }), /* @__PURE__ */ React7.createElement("div", {
    className: "sm:flex sm:items-center sm:justify-between"
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "text-sm text-gray-500 sm:text-center dark:text-gray-400"
  }, "\xA9 2022 ", /* @__PURE__ */ React7.createElement("a", {
    href: "https://devato.de",
    className: "hover:underline"
  }, "Devato"), ". All Rights Reserved."), /* @__PURE__ */ React7.createElement("div", {
    className: "flex mt-4 space-x-6 sm:justify-center sm:mt-0"
  }, /* @__PURE__ */ React7.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    d: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React7.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React7.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("path", {
    d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
  }))), /* @__PURE__ */ React7.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
    clipRule: "evenodd"
  }))), /* @__PURE__ */ React7.createElement("a", {
    href: "#",
    className: "text-gray-500 hover:text-gray-900 dark:hover:text-white"
  }, /* @__PURE__ */ React7.createElement("svg", {
    className: "w-5 h-5",
    fill: "currentColor",
    viewBox: "0 0 24 24",
    "aria-hidden": "true"
  }, /* @__PURE__ */ React7.createElement("path", {
    fillRule: "evenodd",
    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z",
    clipRule: "evenodd"
  })))))));
};
var Footer_default = Footer;

// app/utils/theme.server.ts
init_react();
var import_remix5 = __toESM(require_remix());
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}
var themeStorage = (0, import_remix5.createCookieSessionStorage)({
  cookie: {
    name: "flo_stanglmeier_theme",
    secure: true,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    httpOnly: true
  }
});
async function getThemeSession(request) {
  const session = await themeStorage.getSession(request.headers.get("Cookie"));
  return {
    getTheme: () => {
      const themeValue = session.get(THEME_COOKIE_KEY);
      return isTheme(themeValue) ? themeValue : "light" /* LIGHT */;
    },
    setTheme: (theme) => session.set(THEME_COOKIE_KEY, theme),
    commit: () => themeStorage.commitSession(session)
  };
}
var isTheme = (maybeTheme) => {
  return maybeTheme === "dark" /* DARK */ || maybeTheme === "light" /* LIGHT */;
};

// app/components/Error/ErrorPage.tsx
init_react();
var React8 = __toESM(require("react"));
var ErrorPage = (props) => {
  const error = props.error;
  return /* @__PURE__ */ React8.createElement(React8.Fragment, null, /* @__PURE__ */ React8.createElement("main", null, error && false ? /* @__PURE__ */ React8.createElement(RedBox, {
    error
  }) : null, /* @__PURE__ */ React8.createElement("div", {
    className: "font-mono text-white flex flex-col w-full h-full justify-start pt-20 px-10 sm:px-0 max-w-[800px] m-auto z-50 "
  }, /* @__PURE__ */ React8.createElement("p", {
    className: "text-4xl custom2:text-5xl mb-5 xs:mb-10 font-bold z-50"
  }, "UH OH! You're lost."), /* @__PURE__ */ React8.createElement("div", {
    className: "text-lg inline-flex mb-10 xs:mb-14 z-50 leading-9"
  }, /* @__PURE__ */ React8.createElement("p", null, /* @__PURE__ */ React8.createElement("span", {
    style: { color: "#0CECDD" }
  }, '"www.alissanguyen.dev', props.pathname, '"'), " ", "is not a page on alissanguyen.dev. How you got here is a mystery. But you can click the", " ", /* @__PURE__ */ React8.createElement("span", {
    className: "font-bold text-sky-500"
  }, "blue"), " button below to go back to homepage, or the", " ", /* @__PURE__ */ React8.createElement("span", {
    className: "font-bold text-rose-500"
  }, "red"), " one to explore my blog :)")), /* @__PURE__ */ React8.createElement("div", {
    className: "z-50 mb-10 text-lg tracking-wide xs:tracking-normal"
  }, /* @__PURE__ */ React8.createElement("a", {
    href: "/",
    className: "rounded-full px-5 py-3 bg-blue-500 hover:bg-blue-600 text-white mr-5"
  }, "Home"), /* @__PURE__ */ React8.createElement("a", {
    href: "/blog",
    className: "rounded-full px-5 py-3 bg-rose-500 hover:bg-rose-600 text-white mr-5"
  }, "Blog"))), /* @__PURE__ */ React8.createElement(Flowers, null)));
};
var ErrorPage_default2 = ErrorPage;
var Flowers = () => {
  return /* @__PURE__ */ React8.createElement("div", {
    className: "FlowersContainer relative"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "night"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flowers absolute "
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower Flower--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--6"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower Flower--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower Flower--3"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leafs Flower__Leafs--3"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Leaf Flower__Leaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__WhiteCircle"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Light Flower__Light--8"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Line"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__LineLeaf Flower__LineLeaf--4"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "1.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-long"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-long__top"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-long__bottom"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "growing-grass"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass Flower__Grass--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass--top"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass--bottom"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--8"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassOverlay"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "growing-grass"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass Flower__Grass--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass--top"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__Grass--bottom"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassLeaf Flower__GrassLeaf--8"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__GrassOverlay"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-right Flower__g-right--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.8s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-right Flower__g-right--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.8s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--3"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--4"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--5"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--6"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--7"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf-wrapper Flower__g-front__Leaf-wrapper--8"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Leaf"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-front__Line"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--1"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--2"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--3"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--4"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--5"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--6"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--7"
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "Flower__g-fr__Leaf Flower__g-fr__Leaf--8"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--0"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "2.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--1"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.8s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--2"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--3"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--4"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--5"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--6"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.4s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "4.8s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))), /* @__PURE__ */ React8.createElement("div", {
    className: "long-g long-g--7"
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--0"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.2s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--1"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.5s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--2"
  })), /* @__PURE__ */ React8.createElement("div", {
    className: "grow-ans",
    style: { animationDelay: "3.6s" }
  }, /* @__PURE__ */ React8.createElement("div", {
    className: "Leaf Leaf--3"
  }))))));
};

// route:/Users/flo/Development/Webpage-1/app/root.tsx
var import_ga = require("~/utils/ga.jsx");
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
var loader = async ({ request, params }) => {
  const themeValue = await getThemeSession(request);
  return {
    theme: themeValue.getTheme()
  };
};
var App = () => {
  const { theme } = (0, import_remix6.useLoaderData)();
  return /* @__PURE__ */ React9.createElement(ThemeContextProvider, {
    initialTheme: theme
  }, /* @__PURE__ */ React9.createElement(ModalContextProvider, null, /* @__PURE__ */ React9.createElement(Document, null, /* @__PURE__ */ React9.createElement(Layout, null, /* @__PURE__ */ React9.createElement(import_remix6.Outlet, null)))));
};
var convertSupportedThemeToClassName = (theme, onBlogRoute) => {
  if (theme === "light" /* LIGHT */) {
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
var Document = (props) => {
  const { theme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const location = (0, import_remix6.useLocation)();
  const onBlogRoute = location.pathname.startsWith("/blog");
  React9.useEffect(() => {
    document.body.classList.add("Background__ColorTransition--short");
  }, []);
  return /* @__PURE__ */ React9.createElement("html", {
    lang: "en",
    className: `${convertSupportedThemeToClassName(theme, onBlogRoute)}`
  }, /* @__PURE__ */ React9.createElement("head", null, /* @__PURE__ */ React9.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React9.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React9.createElement("meta", {
    name: "googlebot",
    content: "notranslate"
  }), true ? /* @__PURE__ */ React9.createElement("base", {
    href: "https://www.devato.de"
  }) : null, /* @__PURE__ */ React9.createElement(import_remix6.Meta, null), /* @__PURE__ */ React9.createElement(import_remix6.Links, null), /* @__PURE__ */ React9.createElement("script", {
    async: true,
    src: "https://www.googletagmanager.com/gtag/js?id=G-4J0L3BTY29"
  }), /* @__PURE__ */ React9.createElement("script", null, (0, import_ga.injectGA)())), /* @__PURE__ */ React9.createElement("body", {
    id: "root",
    className: `${modalIsOpen ? "overflow-hidden" : ""}`
  }, /* @__PURE__ */ React9.createElement("script", {
    async: true,
    src: "https://platform.twitter.com/widgets.js",
    charSet: "utf-8"
  }), /* @__PURE__ */ React9.createElement("noscript", null, /* @__PURE__ */ React9.createElement("div", {
    style: {
      backgroundColor: "black",
      color: "white",
      padding: 30
    }
  }, /* @__PURE__ */ React9.createElement("p", {
    style: { fontSize: "1.5em" }
  }, "Diese Seite funktioniert besser mit JavaScript aktiviert..."))), props.children, /* @__PURE__ */ React9.createElement(import_remix6.ScrollRestoration, null), /* @__PURE__ */ React9.createElement(import_remix6.Scripts, null), false));
};
var Layout = (props) => {
  return /* @__PURE__ */ React9.createElement(React9.Fragment, null, /* @__PURE__ */ React9.createElement(NavBar_default, null), /* @__PURE__ */ React9.createElement("div", {
    className: "Document__Content"
  }, props.children), /* @__PURE__ */ React9.createElement(Footer_default, null));
};
function ErrorBoundary({ error }) {
  const location = (0, import_remix6.useLocation)();
  return /* @__PURE__ */ React9.createElement("html", {
    lang: "en",
    className: "dark"
  }, /* @__PURE__ */ React9.createElement("head", null, /* @__PURE__ */ React9.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React9.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /* @__PURE__ */ React9.createElement(import_remix6.Meta, null), /* @__PURE__ */ React9.createElement("title", null, "Oh no..."), /* @__PURE__ */ React9.createElement(import_remix6.Links, null)), /* @__PURE__ */ React9.createElement("body", {
    id: "root"
  }, /* @__PURE__ */ React9.createElement("div", {
    className: "app tracking-wide text-lg overflow-hidden"
  }, /* @__PURE__ */ React9.createElement(ErrorPage_default2, {
    error,
    heroMsg: "500 - Oh no, da ist irgendetwas schief gelaufen.",
    pathname: location.pathname,
    subMsg: "funktioniert aktuell nicht. Sorry."
  })), /* @__PURE__ */ React9.createElement(import_remix6.Scripts, null), /* @__PURE__ */ React9.createElement(Footer_default, null)));
}
var CatchBoundary = (props) => {
  const caught = (0, import_remix6.useCatch)();
  const location = (0, import_remix6.useLocation)();
  if (caught.status === 404) {
    return /* @__PURE__ */ React9.createElement("html", {
      lang: "en"
    }, /* @__PURE__ */ React9.createElement("head", null, /* @__PURE__ */ React9.createElement("meta", {
      charSet: "utf-8"
    }), /* @__PURE__ */ React9.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }), /* @__PURE__ */ React9.createElement(import_remix6.Meta, null), /* @__PURE__ */ React9.createElement("title", null, "404 - Oh no..."), /* @__PURE__ */ React9.createElement(import_remix6.Links, null)), /* @__PURE__ */ React9.createElement("body", {
      id: "root"
    }, /* @__PURE__ */ React9.createElement("noscript", null, /* @__PURE__ */ React9.createElement("div", {
      style: {
        backgroundColor: "black",
        color: "white",
        padding: 30
      }
    }, /* @__PURE__ */ React9.createElement("p", {
      style: { fontSize: "1.5em" }
    }, "Diese Seite funktioniert besser mit JavaScript aktiviert..."))), /* @__PURE__ */ React9.createElement("div", {
      className: "app tracking-wide overflow-hidden"
    }, /* @__PURE__ */ React9.createElement(ErrorPage_default2, {
      heroMsg: "404 - Oh no, diese Seite scheint nicht zu funktionieren.",
      pathname: location.pathname,
      subMsg: "ist keine Seite auf Devato. Sorry."
    })), props.children));
  }
  throw new Error(`Unhandled error: ${caught.status}`);
};
var root_default = App;

// route:/Users/flo/Development/Webpage-1/app/routes/datenschutz/index.tsx
var datenschutz_exports = {};
__export(datenschutz_exports, {
  default: () => datenschutz_default
});
init_react();
var Index = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block p-6 rounded-lg shadow-lg bg-white max-w"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.'), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Server-Logfiles"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Sie k\xF6nnen unsere Webseiten besuchen, ohne Angaben zu Ihrer Person zu machen. Bei jedem Zugriff auf unsere Website werden an uns oder unseren Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet Browser \xFCbermittelt und in Protokolldaten (sog. Server-Logfiles) gespeichert. Zu diesen gespeicherten Daten geh\xF6ren z.B. der Name der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die IP-Adresse, die \xFCbertragene Datenmenge und der anfragende Provider. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem \xFCberwiegenden berechtigten Interesse an der Gew\xE4hrleistung eines st\xF6rungsfreien Betriebs unserer Website sowie zur Verbesserung unseres Angebotes."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Kontakt"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Verantwortlicher im Impressum. Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten des f\xFCr die Datenverarbeitung Verantwortlichen finden Sie in unserem Impressum."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Initiativ-Kontaktaufnahme des Kunden per E-Mail"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Wenn Sie per E-Mail initiativ mit uns in Gesch\xE4ftskontakt treten, erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verf\xFCgung gestellten Umfang. Die Datenverarbeitung dient der Bearbeitung und Beantwortung Ihrer Kontaktanfrage. Wenn die Kontaktaufnahme der Durchf\xFChrung vorvertraglichen Ma\xDFnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Kontaktaufnahme aus anderen Gr\xFCnden erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem \xFCberwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gr\xFCnden, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen. Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschlie\xDFend unter Beachtung gesetzlicher Aufbewahrungsfristen gel\xF6scht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Erhebung und Verarbeitung bei Nutzung des Kontaktformulars"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Bei der Nutzung des Kontaktformulars erheben wir Ihre personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext) nur in dem von Ihnen zur Verf\xFCgung gestellten Umfang. Die Datenverarbeitung dient dem Zweck der Kontaktaufnahme. Wenn die Kontaktaufnahme der Durchf\xFChrung vorvertraglichen Ma\xDFnahmen (bspw. Beratung bei Kaufinteresse, Angebotserstellung) dient oder einen bereits zwischen Ihnen und uns geschlossenen Vertrag betrifft, erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Erfolgt die Kontaktaufnahme aus anderen Gr\xFCnden erfolgt diese Datenverarbeitung auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem \xFCberwiegenden berechtigten Interesse an der Bearbeitung und Beantwortung Ihrer Anfrage. In diesem Fall haben Sie das Recht, aus Gr\xFCnden, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f DSGVO beruhenden Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen. Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer Anfrage. Ihre Daten werden anschlie\xDFend unter Beachtung gesetzlicher Aufbewahrungsfristen gel\xF6scht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Werbung"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Verwendung der E-Mail-Adresse f\xFCr die Zusendung von Newslettern Wir nutzen Ihre E-Mail-Adresse unabh\xE4ngig von der Vertragsabwicklung ausschlie\xDFlich f\xFCr eigene Werbezwecke zum Newsletterversand, sofern Sie dem ausdr\xFCcklich zugestimmt haben. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung. Sie k\xF6nnen die Einwilligung jederzeit widerrufen, ohne dass die Rechtm\xE4\xDFigkeit der aufgrund der Einwilligung bis zum Widerruf erfolgten Verarbeitung ber\xFChrt wird. Sie k\xF6nnen dazu den Newsletter jederzeit unter Nutzung des entsprechenden Links im Newsletter oder durch Mitteilung an uns abbestellen. Ihre E-Mail-Adresse wird danach aus dem Verteiler entfernt. Ihre Daten werden dabei an einen Dienstleister f\xFCr E-Mail-Marketing im Rahmen einer Auftragsverarbeitung weitergegeben. Eine Weitergabe an sonstige Dritte erfolgt nicht."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Cookies"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem eines Nutzers gespeichert werden. Ruft ein Nutzer eine Website auf, so kann ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden. Dieser Cookie enth\xE4lt eine charakteristische Zeichenfolge, die eine eindeutige Identifizierung des Browsers beim erneuten Aufrufen der Website erm\xF6glicht. Cookies werden auf Ihrem Rechner gespeichert. Daher haben Sie die volle Kontrolle \xFCber die Verwendung von Cookies. Durch die Auswahl entsprechender technischer Einstellungen in Ihrem Internetbrowser k\xF6nnen Sie vor dem Setzen von Cookies benachrichtigt werden und \xFCber die Annahme einzeln entscheiden sowie die Speicherung der Cookies und \xDCbermittlung der enthaltenen Daten verhindern. Bereits gespeicherte Cookies k\xF6nnen jederzeit gel\xF6scht werden. Wir weisen Sie jedoch darauf hin, dass Sie dann gegebenenfalls nicht s\xE4mtliche Funktionen dieser Website vollumf\xE4nglich werden nutzen k\xF6nnen. Unter den nachstehenden Links k\xF6nnen Sie sich informieren, wie Sie die Cookies bei den wichtigsten Browsern verwalten (u.a. auch deaktivieren) k\xF6nnen: Chrome: https://support.google.com/accounts/answer/61416?hl=de Internet Explorer: https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies Mozilla Firefox: https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen Safari: https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac"), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Technisch notwendige Cookies"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Soweit nachstehend in der Datenschutzerkl\xE4rung keine anderen Angaben gemacht werden setzen wir nur diese technisch notwendigen Cookies zu dem Zweck ein, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Des Weiteren erm\xF6glichen Cookies unseren Systemen, Ihren Browser auch nach einem Seitenwechsel zu erkennen und Ihnen Services anzubieten. Einige Funktionen unserer Internetseite k\xF6nnen ohne den Einsatz von Cookies nicht angeboten werden. F\xFCr diese ist es erforderlich, dass der Browser auch nach einem Seitenwechsel wiedererkannt wird. Die Nutzung von Cookies oder vergleichbarer Technologien erfolgt auf Grundlage des \xA7 15 Abs. 3 S. 1 TMG. Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem \xFCberwiegenden berechtigten Interesse an der Gew\xE4hrleistung der optimalen Funktionalit\xE4t der Website sowie einer nutzerfreundlichen und effektiven Gestaltung unseres Angebots. Sie haben das Recht aus Gr\xFCnden, die sich aus Ihrer besonderen Situation ergeben, jederzeit dieser Verarbeitungen Sie betreffender personenbezogener Daten zu widersprechen."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Verwendung von Google Fonts"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Wir verwenden auf unserer Website Google Fonts der Google Ireland Limited (Gordon House, Barrow Street, Dublin 4, Irland; \u201CGoogle\u201D). Die Datenverarbeitung dient dem Zweck der einheitlichen Darstellung von Schriftarten auf unserer Website. Um die Schriftarten zu laden, wird beim Seitenaufruf eine Verbindung zu Servern von Google hergestellt. Hierbei k\xF6nnen Cookies eingesetzt werden. Dabei wird u.a. Ihre IP-Adresse sowie Informationen zu dem von Ihnen genutzten Browser verarbeitet und an Google \xFCbermittelt. Diese Daten werden nicht mit Ihrem Google-Konto verkn\xFCpft. Ihre Daten werden gegebenenfalls in die USA \xFCbermittelt. F\xFCr die USA ist kein Angemessenheitsbeschluss der EU-Kommission vorhanden. Die Daten\xFCbermittlung erfolgt u.a auf Grundlage von Standardvertragsklauseln als geeignete Garantien f\xFCr den Schutz der personenbezogenen Daten, einsehbar unter: https://policies.google.com/privacy/frameworks. Die Nutzung von Cookies oder vergleichbarer Technologien erfolgt auf Grundlage des \xA7 15 Abs. 3 S. 1 TMG. Die Verarbeitung Ihrer personenbezogenen Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus unserem \xFCberwiegenden berechtigten Interesse an einer nutzerfreundlichen und \xE4sthetischen Gestaltung unserer Website. Sie haben das Recht aus Gr\xFCnden, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen diese auf Art. 6 Abs. 1 lit. f DSGVO beruhende Verarbeitung Sie betreffender personenbezogener Daten durch eine Mitteilung an uns zu widersprechen. N\xE4here Informationen zur Datenverarbeitung und zum Datenschutz finden Sie unter https://www.google.de/intl/de/policies/ sowie unter https://developers.google.com/fonts/faq."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Betroffenenrechte und Speicherdauer"), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Dauer der Speicherung"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Die Daten werden unter Ber\xFCcksichtigung gesetzlicher Aufbewahrungsfristen gespeichert und dann nach Fristablauf gel\xF6scht, sofern Sie der weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Rechte der betroffenen Person"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen folgende Rechte nach Art. 15 bis 20 DSGVO zu: Recht auf Auskunft, auf Berichtigung, auf L\xF6schung, auf Einschr\xE4nkung der Verarbeitung, auf Daten\xFCbertragbarkeit. Au\xDFerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6 Abs. 1 f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke von Direktwerbung."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Beschwerderecht bei der Aufsichtsbeh\xF6rde"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Sie haben gem\xE4\xDF Art. 77 DSGVO das Recht, sich bei der Aufsichtsbeh\xF6rde zu beschweren, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten nicht rechtm\xE4\xDFig erfolgt."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Widerspruchsrecht"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Beruhen die hier aufgef\xFChrten personenbezogenen Datenverarbeitungen auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht aus Gr\xFCnden, die sich aus Ihrer besonderen Situation ergeben, jederzeit diesen Verarbeitungen mit Wirkung f\xFCr die Zukunft zu widersprechen. Nach erfolgtem Widerspruch wird die Verarbeitung der betroffenen Daten beendet, es sei denn, wir k\xF6nnen zwingende schutzw\xFCrdige Gr\xFCnde f\xFCr die Verarbeitung nachweisen, die Ihren Interessen, Rechten und Freiheiten \xFCberwiegen, oder wenn die Verarbeitung der Geltendmachung, Aus\xFCbung oder Verteidigung von Rechtsanspr\xFCchen dient."), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Zuletzt aktualisiert am: 11.09.2021")));
};
var datenschutz_default = Index;

// route:/Users/flo/Development/Webpage-1/app/routes/impressum/index.tsx
var impressum_exports = {};
__export(impressum_exports, {
  default: () => impressum_default
});
init_react();
var Index2 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block p-6 rounded-lg shadow-lg bg-white max-w"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Impressum"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Angaben gem\xE4\xDF \xA7 5 TMG:"), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Devato"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base "
  }, "Tobias Peters"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base"
  }, "Am Manfredhof 10"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "83646 Bad T\xF6lz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Tel.: +491734162207"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "E-Mail: info@devato.de"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "USt-ID: DE815868622"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Inhaltlich Verantwortlicher gem\xE4\xDF \xA7 55 RStV:"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base "
  }, "Tobias Peters"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base"
  }, "Am Manfredhof 10"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "83646 Bad T\xF6lz"), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Haftungsausschluss"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Haftung f\xFCr Inhalte Die Inhalte unserer Seiten wurden mit gr\xF6\xDFter Sorgfalt erstellt. F\xFCr die Richtigkeit, Vollst\xE4ndigkeit und Aktualit\xE4t der Inhalte k\xF6nnen wir jedoch keine Gew\xE4hr \xFCbernehmen. Als Diensteanbieter sind wir gem\xE4\xDF \xA7 7 Abs.1 TMG f\xFCr eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach \xA7\xA7 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, \xFCbermittelte oder gespeicherte fremde Informationen zu \xFCberwachen oder nach Umst\xE4nden zu forschen, die auf eine rechtswidrige T\xE4tigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unber\xFChrt. Eine diesbez\xFCgliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m\xF6glich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Haftung f\xFCr Links"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Unser Angebot enth\xE4lt Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb k\xF6nnen wir f\xFCr diese fremden Inhalte auch keine Gew\xE4hr \xFCbernehmen. F\xFCr die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m\xF6gliche Rechtsverst\xF6\xDFe \xFCberpr\xFCft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Urheberrecht"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielf\xE4ltigung, Bearbeitung, Verbreitung und jede Art der Verwertung au\xDFerhalb der Grenzen des Urheberrechtes bed\xFCrfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur f\xFCr den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.")));
};
var impressum_default = Index2;

// route:/Users/flo/Development/Webpage-1/app/routes/setTheme/index.tsx
var setTheme_exports = {};
__export(setTheme_exports, {
  action: () => action,
  loader: () => loader2
});
init_react();
var import_remix7 = __toESM(require_remix());
var action = async ({ request }) => {
  const themeSession = await getThemeSession(request);
  const formData = await request.formData();
  const theme = formData.get("theme");
  if (!isTheme(theme)) {
    return (0, import_remix7.json)({
      success: false,
      message: `theme value of ${theme} is not a valid theme`
    });
  }
  themeSession.setTheme(theme);
  return new Response(void 0, {
    headers: {
      "Set-Cookie": await themeSession.commit()
    }
  });
};
var loader2 = async () => {
  return (0, import_remix7.redirect)("/", { status: 404 });
};

// route:/Users/flo/Development/Webpage-1/app/routes/blog/$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => slug_default,
  links: () => links6,
  loader: () => loader3,
  meta: () => meta
});
init_react();
var React32 = __toESM(require("react"));
var import_remix8 = __toESM(require_remix());

// app/contentful/contentfulClient.ts
init_react();
var import_contentful = __toESM(require("contentful"));
var GLOBAL_CONTENTFUL_CLIENT = null;
var getGlobalContentfulClient = () => {
  if (!GLOBAL_CONTENTFUL_CLIENT) {
    const secretApiKey = process.env.CONTENTFUL_API_KEY;
    if (!secretApiKey) {
      throw new Error("Secret Contentful API Key not found.");
    }
    GLOBAL_CONTENTFUL_CLIENT = import_contentful.default.createClient({
      space: "xrrco3pcenii",
      accessToken: secretApiKey
    });
  }
  return GLOBAL_CONTENTFUL_CLIENT;
};
var QUERY_ONLY_VISIBLE_IN_PRODUCTION = true ? {
  "fields.isVisibleInProduction": true
} : {};
var getContentfulBlogPostBySlug = async (slug) => {
  const queryResults = await getGlobalContentfulClient().getEntries(__spreadValues({
    content_type: "shopifyDevelopmentBlog",
    "fields.blogPostSlug": slug,
    limit: 1
  }, QUERY_ONLY_VISIBLE_IN_PRODUCTION));
  if (queryResults.items.length <= 0) {
    throw new Error("No blog post with that slug found :(");
  }
  return queryResults.items[0];
};
var getContentfulBlogPosts = async () => {
  const queryResults = await getGlobalContentfulClient().getEntries(__spreadProps(__spreadValues({
    content_type: "shopifyDevelopmentBlog"
  }, QUERY_ONLY_VISIBLE_IN_PRODUCTION), {
    order: "-sys.updatedAt"
  }));
  return queryResults;
};
var getContentfulTags = async () => {
  const queryResults = await getGlobalContentfulClient().getTags().then((response) => {
    return response;
  });
  return queryResults;
};

// route:/Users/flo/Development/Webpage-1/app/routes/blog/$slug.tsx
var import_rich_text_react_renderer2 = require("@contentful/rich-text-react-renderer");

// app/contentful/defaultRichTextMarkdown.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_rich_text_types2 = require("@contentful/rich-text-types");

// app/components/Contentful/EntryHyperLink/EntryHyperLink.tsx
init_react();
var React10 = __toESM(require("react"));
var EntryHyperLink = (props) => {
  const otherPostSlug = props.node.data.target.fields.blogPostSlug;
  return /* @__PURE__ */ React10.createElement("a", {
    className: "BlogPost__EntryHyperLink text-post-hyperlink underlined hover:text-post-hyperlinkHover italic",
    href: `/blog/${otherPostSlug}`
  }, props.children);
};
var EntryHyperLink_default = EntryHyperLink;

// app/components/Contentful/HyperLink/HyperLink.tsx
init_react();
var React11 = __toESM(require("react"));
var HyperLink = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React11.createElement("a", {
    href: props.url,
    className: `BlogPost__HyperLink font-medium ${theme === "light" /* LIGHT */ ? "text-blue-500 hover:text-black" : "text-cyan-400 hover:text-white"} ease-in duration-100`
  }, props.children);
};
var HyperLink_default = HyperLink;

// app/components/Contentful/BlockQuote/BlockQuote.tsx
init_react();
var React12 = __toESM(require("react"));

// app/components/Contentful/BlockQuote/BlockQuote.css
var BlockQuote_default = "/build/_assets/BlockQuote-TSCC4MNG.css";

// app/components/Contentful/BlockQuote/BlockQuote.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: BlockQuote_default }];
};
var BlockQuote = (props) => {
  return /* @__PURE__ */ React12.createElement("blockquote", {
    className: "BlogPostBlockQuote__Container p-8 mt-8 mb-12 mx-0 border-t-[1px] border-t-gray-300 flex flex-col"
  }, /* @__PURE__ */ React12.createElement("p", {
    className: "BlogPostBlockQuote__Description font-medium m-auto flex items-center justify-center text-post-quote w-2/3"
  }, props.quoteData.quoteDescription), /* @__PURE__ */ React12.createElement("p", {
    className: "BlogPostBlockQuote__Author italic text-xl text-post-quoteAuthor text-right mt-5"
  }, props.quoteData.author));
};
var BlockQuote_default2 = BlockQuote;

// app/components/Blog/BlogPostTags.tsx
init_react();
var React13 = __toESM(require("react"));
var tagIdsToDisplayNames = tags.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});
var BlogPostTags = (props) => {
  const blogPostTags = props.tags;
  return /* @__PURE__ */ React13.createElement("div", {
    className: "PostCard__TagsWrapper pt-2 pb-4 w-full overflow-hidden"
  }, blogPostTags.map((tag) => {
    const title = tagIdsToDisplayNames[tag.sys.id];
    return /* @__PURE__ */ React13.createElement("span", {
      key: tag.sys.id,
      className: "PostCard__Tag inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
    }, "#", title);
  }));
};
var BlogPostTags_default = BlogPostTags;

// app/components/Contentful/ImageMedia/ImageMedia.tsx
init_react();
var React14 = __toESM(require("react"));

// app/components/Contentful/ImageMedia/ImageMedia.css
var ImageMedia_default = "/build/_assets/ImageMedia-OZ3ERPQM.css";

// app/components/Contentful/ImageMedia/ImageMedia.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: ImageMedia_default }];
};
var ImageMedia = (props) => {
  return /* @__PURE__ */ React14.createElement("div", {
    className: "BlogPost__ImageMedia__Container"
  }, /* @__PURE__ */ React14.createElement("img", {
    src: "https:" + props.src,
    alt: props.alt,
    title: props.alt,
    className: "BlogPost__ImageMedia m-auto flex",
    loading: "lazy"
  }), props.description !== void 0 && /* @__PURE__ */ React14.createElement("em", {
    className: "BlogPost__ImageMedia__Description mx-8 my-2 italic flex text-center items-center justify-center text-base"
  }, props.description));
};
var ImageMedia_default2 = ImageMedia;

// app/components/Contentful/CodeBlock/CodeBlock.tsx
init_react();
var React15 = __toESM(require("react"));

// app/components/Contentful/CodeBlock/CodeBlock.css
var CodeBlock_default = "/build/_assets/CodeBlock-BXX6PS7Q.css";

// app/components/Contentful/CodeBlock/CodeBlock.tsx
var import_prism_react_renderer = __toESM(require("prism-react-renderer"));
var import_github = __toESM(require("prism-react-renderer/themes/github"));
var import_vsDark = __toESM(require("prism-react-renderer/themes/vsDark"));
var links4 = () => {
  return [{ rel: "stylesheet", href: CodeBlock_default }];
};
var CodeBlock = (props) => {
  const codeText = props.data.codeText;
  const { theme } = useTheme();
  const language = props.data.language;
  return /* @__PURE__ */ React15.createElement("div", {
    className: "CodeBlock__Wrapper rounded-lg mt-3 mb-6"
  }, /* @__PURE__ */ React15.createElement(import_prism_react_renderer.default, __spreadProps(__spreadValues({}, import_prism_react_renderer.defaultProps), {
    theme: theme === "light" /* LIGHT */ ? import_github.default : import_vsDark.default,
    code: codeText,
    language
  }), ({ className, tokens, getLineProps, getTokenProps }) => {
    return /* @__PURE__ */ React15.createElement("div", {
      className: "CodeBlock"
    }, props.data.fileName !== void 0 ? /* @__PURE__ */ React15.createElement("div", {
      className: "CodeBlock__FileName__Container w-full rounded-t-lg"
    }, /* @__PURE__ */ React15.createElement("p", {
      className: "CodeBlock__FileName text-center"
    }, props.data.fileName)) : null, /* @__PURE__ */ React15.createElement("pre", {
      className: `${className} CodeBlock__InnerContainer overflow-x-auto roundedLg p-4 ${props.data.fileName ? "pt-2" : ""}
                `
    }, tokens.map((line, i) => {
      const _a = getLineProps({
        line,
        key: i
      }), { classname } = _a, restProps = __objRest(_a, ["classname"]);
      return /* @__PURE__ */ React15.createElement("div", __spreadProps(__spreadValues({
        key: i
      }, restProps), {
        className: `${className} LineNo__${i + 1} grid CodeBlock__LineWrapper relative ${props.data.shouldDisplayLineNumber ? "gap-10" : ""} breakWord whitespace-preWrap`
      }), /* @__PURE__ */ React15.createElement("div", null, /* @__PURE__ */ React15.createElement("span", {
        className: `CodeBlock__LineNo pl-1 ${props.data.shouldDisplayLineNumber ? "visible" : "invisible"}`,
        style: { position: "sticky" }
      }, i + 1)), /* @__PURE__ */ React15.createElement("div", {
        className: ""
      }, line.map((token, key) => {
        const _a2 = getTokenProps({
          token,
          key
        }), { className: className2 } = _a2, restProps2 = __objRest(_a2, ["className"]);
        return /* @__PURE__ */ React15.createElement("span", __spreadProps(__spreadValues({
          key
        }, restProps2), {
          className: `${className2} CodeBlock__Token--smol-tab`
        }));
      })));
    })));
  }));
};
var CodeBlock_default2 = CodeBlock;

// app/components/Contentful/Heading/HeadingFive.tsx
init_react();
var React16 = __toESM(require("react"));
var HeadingFive = (props) => {
  return /* @__PURE__ */ React16.createElement("h6", {
    className: `BlogPost__HeadingFive text-xl custom2:text-2xl text-post-bodyTextLg mt-2 mb-1 font-medium`
  }, props.children);
};
var HeadingFive_default = HeadingFive;

// app/components/Contentful/Heading/HeadingOne.tsx
init_react();
var React17 = __toESM(require("react"));
var HeadingOne = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React17.createElement("h2", {
    className: `BlogPost__HeadingOne text-4xl xs:text-5xl custom2:text-6xl mb-5 mt-5 font-medium ${theme === "light" /* LIGHT */ ? "text-emerald-500" : "text-teal-400"}`
  }, props.children);
};
var HeadingOne_default = HeadingOne;

// app/components/Contentful/Heading/HeadingTwo.tsx
init_react();
var React18 = __toESM(require("react"));
var HeadingTwo = (props) => {
  return /* @__PURE__ */ React18.createElement("h3", {
    className: "BlogPost__HeadingTwo text-3xl xs:text-4xl custom2:text-[2.5rem] mt-8 mb-5 text-post-bodyTextLg"
  }, props.children);
};
var HeadingTwo_default = HeadingTwo;

// app/components/Contentful/Heading/HeadingThree.tsx
init_react();
var React19 = __toESM(require("react"));
var HeadingThree = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React19.createElement("h4", {
    className: `BlogPost__HeadingThree text-2xl font-medium xs:font-normal xs:text-3xl custom2:text-4xl leading-10 mb-5 mt-10 ${theme === "light" /* LIGHT */ ? "text-sky-600" : "text-sky-400"}`
  }, props.children);
};
var HeadingThree_default = HeadingThree;

// app/components/Contentful/Heading/HeadingFour.tsx
init_react();
var React20 = __toESM(require("react"));
var HeadingFour = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React20.createElement("h5", {
    className: `BlogPost__HeadingFour text-2xl xs:text-3xl mt-10 ${theme === "light" /* LIGHT */ ? "text-purple-500" : "text-fuchsia-400"} font-medium`
  }, props.children);
};
var HeadingFour_default = HeadingFour;

// app/components/Contentful/Heading/HeadingSix.tsx
init_react();
var React21 = __toESM(require("react"));
var HeadingSix = (props) => {
  return /* @__PURE__ */ React21.createElement("p", {
    className: `font-bold text-xl mb-5 mt-10 xs:font-medium`
  }, props.children);
};
var HeadingSix_default = HeadingSix;

// app/components/Contentful/StickyNote/StickyNote.tsx
init_react();
var React24 = __toESM(require("react"));
var import_rich_text_react_renderer = require("@contentful/rich-text-react-renderer");

// app/contentful/richTextMarkdownForStickies.tsx
init_react();
var import_react = __toESM(require("react"));
var import_rich_text_types = require("@contentful/rich-text-types");

// app/contentful/contentfulUtils.tsx
init_react();
var highlightedTextMatcher = /\((.+)\)(?=\[(\w+)\])/;
var addColour = (children = []) => {
  if (children === null) {
    return children;
  }
  const mappedChildren = children.flatMap((child) => {
    if (typeof child === "string") {
      const matches = child.match(highlightedTextMatcher);
      if (matches) {
        const result = createSpanFromMatches(matches, child);
        return result;
      }
    }
    if (typeof child === "object") {
      const element = child;
      const content = element.props.children;
      const className = element.props.className;
      const stringMatches = typeof content === "string" && content.match(highlightedTextMatcher);
      if (content && content.props && typeof content.props.children === "string") {
        const textContent = content.props.children;
        const objectChildMatches = textContent.match(highlightedTextMatcher);
        if (objectChildMatches) {
          return createSpanFromMatches(objectChildMatches, textContent, {
            className
          });
        }
      }
      if (stringMatches) {
        return createSpanFromMatches(stringMatches, content, { className });
      }
    }
    return child;
  });
  return mappedChildren;
};
var createSpanFromMatches = (matches, text, restProps = {}) => {
  const content = text.split(`${matches[0]}[${matches[2]}]`);
  return [
    content[0],
    /* @__PURE__ */ React.createElement("span", __spreadProps(__spreadValues({
      key: matches[1]
    }, restProps), {
      style: {
        color: "#000000",
        backgroundColor: `${matches[2] !== void 0 && contentfulHighlights[matches[2]]}`
      }
    }), matches[1]),
    content[1]
  ];
};
var contentfulHighlights = {
  blue: "var(--blue)" /* BLUE */,
  yellow: "var(--yellow)" /* YELLOW */,
  green: "var(--green)" /* GREEN */,
  red: "var(--red)" /* RED */,
  orange: "var(--orange)" /* ORANGE */,
  pink: "var(--pink)" /* PINK */,
  purple: "var(--purple)" /* PURPLE */
};

// app/components/Contentful/Illustration/Illustration.tsx
init_react();
var React22 = __toESM(require("react"));
var Illustration = (props) => {
  const { theme } = useTheme();
  const lightModeIllustrationImageSrc = "https://" + props.rawData.lightIllustration.fields.file.url.split("//")[1];
  const darkModeIllustrationImageSrc = "https://" + props.rawData.darkIllustration.fields.file.url.split("//")[1];
  const imageSrc = theme === "dark" /* DARK */ ? darkModeIllustrationImageSrc : lightModeIllustrationImageSrc;
  const padding = props.location === "inside sticky" ? "pt-3 pb-2" : "";
  return /* @__PURE__ */ React22.createElement("div", {
    className: `Illustration__Container rounded-lg ${padding}`
  }, /* @__PURE__ */ React22.createElement("a", {
    href: imageSrc,
    target: "_blank"
  }, /* @__PURE__ */ React22.createElement("img", {
    title: "Illustration for " + props.rawData.illustrationName,
    src: imageSrc,
    alt: "Illustration for " + props.rawData.illustrationName,
    className: "Illustration__Image rounded-lg p-4",
    style: {
      backgroundColor: `${theme === "light" /* LIGHT */ ? "#ffffff" : "#0e0e0e"}`
    }
  })));
};
var Illustration_default = Illustration;

// app/contentful/richTextMarkdownForStickies.tsx
var stickyOptions = {
  renderMark: {
    [import_rich_text_types.MARKS.BOLD]: (text) => {
      const { theme } = useTheme();
      return /* @__PURE__ */ import_react.default.createElement("span", {
        className: `bold font-bold opacity-90 ${theme === "light" /* LIGHT */ ? "text-black" : "text-white"}`
      }, addColour([text]));
    },
    [import_rich_text_types.MARKS.ITALIC]: (text) => {
      return /* @__PURE__ */ import_react.default.createElement("span", {
        className: "italic"
      }, text);
    },
    [import_rich_text_types.MARKS.UNDERLINE]: (text) => {
      return /* @__PURE__ */ import_react.default.createElement("span", {
        className: `custom-underline`
      }, text);
    },
    [import_rich_text_types.MARKS.CODE]: (children) => {
      return /* @__PURE__ */ import_react.default.createElement("code", {
        className: "BlogPost__Paragraph__Code inline-flex font-medium"
      }, children);
    }
  },
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      const { theme } = useTheme();
      return /* @__PURE__ */ import_react.default.createElement("a", {
        className: `BlogPost__HyperLink ${theme === "dark" /* DARK */ ? "text-cyan-200 hover:text-white" : "text-cyan-700 hover:text-black"}`,
        href: node.data.uri
      }, children);
    },
    [import_rich_text_types.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ import_react.default.createElement(EntryHyperLink_default, {
      node
    }, children),
    [import_rich_text_types.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, children),
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ import_react.default.createElement("p", {
      className: "Sticky__Paragraph"
    }, addColour(children)),
    [import_rich_text_types.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ import_react.default.createElement(HeadingThree_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ import_react.default.createElement(HeadingFour_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ import_react.default.createElement(HeadingFive_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ import_react.default.createElement(HeadingSix_default, null, children),
    [import_rich_text_types.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ import_react.default.createElement("ol", {
      className: "list-decimal"
    }, children),
    [import_rich_text_types.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ import_react.default.createElement("ul", {
      className: "list-disc"
    }, children),
    [import_rich_text_types.BLOCKS.LIST_ITEM]: (node, children) => {
      return /* @__PURE__ */ import_react.default.createElement("li", {
        className: "inline-flex list-item leading-8 ml-10"
      }, children);
    },
    [import_rich_text_types.BLOCKS.HR]: (node) => /* @__PURE__ */ import_react.default.createElement("div", {
      className: "spacer-div h-7"
    }),
    [import_rich_text_types.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;
      switch (contentModel) {
        case "illustration":
          const illustrationData = node.data.target.fields;
          return /* @__PURE__ */ import_react.default.createElement(Illustration_default, {
            rawData: illustrationData,
            location: "inside sticky"
          });
        default:
          return /* @__PURE__ */ import_react.default.createElement("p", {
            className: "text-rose-500"
          }, "Error loading asset entry");
      }
    },
    [import_rich_text_types.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description;
      return /* @__PURE__ */ import_react.default.createElement(ImageMedia_default2, {
        src: node.data.target.fields.file.url,
        alt: node.data.target.fields.description,
        description: maybeDescription ? maybeDescription : void 0
      });
    },
    [import_rich_text_types.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ import_react.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ import_react.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ import_react.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ import_react.default.createElement("div", null, children)
  }
};

// app/components/Contentful/StickyNote/StickyNote.tsx
var StickyNote = (props) => {
  const stickyColorCode = props.stickyData.stickyColor;
  const stickyBgColor = contentfulStickyBackgrounds[stickyColorCode];
  const stickyBorderColor = contentfulStickyBorders[stickyColorCode];
  const body = (0, import_rich_text_react_renderer.documentToReactComponents)(props.stickyData.stickyBodyRichText, stickyOptions);
  return /* @__PURE__ */ React24.createElement("div", {
    className: "Sticky__Container mt-4 px-5 pt-2 pb-3 rounded-r-xl",
    style: {
      borderLeft: `solid 6px ${stickyBorderColor}`,
      backgroundColor: `${stickyBgColor}`,
      color: `${stickyBorderColor}`
    }
  }, props.stickyData.shouldDisplayTitle ? /* @__PURE__ */ React24.createElement("p", {
    className: "Sticky__Title font-extrabold tracking-wide mb-1"
  }, props.stickyData.stickyTitle) : null, /* @__PURE__ */ React24.createElement("div", {
    className: "Sticky__Body font-medium"
  }, body));
};
var StickyNote_default = StickyNote;
var contentfulStickyBackgrounds = {
  yellow: "var(--sticky-yellow-bg)" /* YELLOW */,
  blue: "rgba(75, 150, 255, 0.1)" /* BLUE */,
  pink: "rgb(255, 69, 140, 0.1)" /* PINK */,
  green: "var(--sticky-green-bg)" /* GREEN */,
  orange: "var(--sticky-orange-bg)" /* ORANGE */,
  purple: "rgb(196, 69, 255, 0.1)" /* PURPLE */,
  red: "rgba(255, 69, 69, 0.1)" /* RED */
};
var contentfulStickyBorders = {
  yellow: "var(--sticky-yellow-border)" /* YELLOW */,
  blue: "rgba(75, 150, 255, 1)" /* BLUE */,
  pink: "rgb(255, 81, 148)" /* PINK */,
  green: "var(--sticky-green-border)" /* GREEN */,
  orange: "var(--sticky-orange-border)" /* ORANGE */,
  purple: "rgb(203, 89, 255)" /* PURPLE */,
  red: "rgb(255, 69, 69)" /* RED */
};

// app/contentful/defaultRichTextMarkdown.tsx
var options = {
  renderMark: {
    [import_rich_text_types2.MARKS.BOLD]: (text) => /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "bold font-bold text-post-bodyTextLg"
    }, addColour([text])),
    [import_rich_text_types2.MARKS.ITALIC]: (text) => /* @__PURE__ */ import_react2.default.createElement("span", {
      className: "italic text-post-bodyTextLg"
    }, text),
    [import_rich_text_types2.MARKS.UNDERLINE]: (text) => {
      const [className, setClassName] = import_react2.default.useState("");
      function randomUnderlinedColor() {
        const underlinedColorClassNames = [
          "custom-underline--yellow",
          "custom-underline--green",
          "custom-underline--red"
        ];
        const randomColor = underlinedColorClassNames[Math.floor(Math.random() * underlinedColorClassNames.length)];
        setClassName(randomColor !== void 0 ? randomColor : "custom-underline--yellow");
      }
      import_react2.default.useEffect(() => randomUnderlinedColor(), [className]);
      return /* @__PURE__ */ import_react2.default.createElement("span", {
        className: `custom-underline text-post-bodyTextLg ${className}`
      }, text);
    },
    [import_rich_text_types2.MARKS.CODE]: (children) => {
      return /* @__PURE__ */ import_react2.default.createElement("code", {
        className: "BlogPost__Paragraph__Code inline-flex font-medium"
      }, children);
    }
  },
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HyperLink_default, {
      url: node.data.uri
    }, children),
    [import_rich_text_types2.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(EntryHyperLink_default, {
      node
    }, children),
    [import_rich_text_types2.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children),
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => {
      return /* @__PURE__ */ import_react2.default.createElement("p", {
        className: "BlogPost__Paragraph text-lg relative z-10"
      }, addColour(children));
    },
    [import_rich_text_types2.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingOne_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingTwo_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingThree_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingFour_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingFive_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingSix_default, null, children),
    [import_rich_text_types2.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("ol", {
      className: "ml-12 mb-8 list-decimal"
    }, children),
    [import_rich_text_types2.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("ul", {
      className: "list-disc ml-10"
    }, children),
    [import_rich_text_types2.BLOCKS.LIST_ITEM]: (node, children) => {
      return /* @__PURE__ */ import_react2.default.createElement("li", {
        className: "List__Item text-xl list-item leading-8"
      }, children);
    },
    [import_rich_text_types2.BLOCKS.HR]: (node) => /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "spacer-div h-7"
    }),
    [import_rich_text_types2.BLOCKS.QUOTE]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("blockquote", null, children),
    [import_rich_text_types2.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;
      switch (contentModel) {
        case "quote":
          const quoteData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement(BlockQuote_default2, {
            quoteData
          });
        case "table":
          const tableData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement("div", {
            className: "table-container text-lg mt-5 mb-10 text-left mx-auto w-full",
            dangerouslySetInnerHTML: { __html: tableData.tableMarkdown }
          });
        case "illustration":
          const illustrationData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement(Illustration_default, {
            rawData: illustrationData,
            location: "outside sticky"
          });
        case "rawVideoHtml":
          const videoMarkupData = node.data.target.fields;
          const videoMarkup = videoMarkupData.rawHtmlMarkup;
          return /* @__PURE__ */ import_react2.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: videoMarkup }
          });
        case "blogPost":
          const post = node.data.target.fields;
          const tags2 = node.data.target.metadata.tags;
          return /* @__PURE__ */ import_react2.default.createElement("a", {
            href: `/blog/${post.blogPostSlug}`,
            className: "flex flex-col custom2:flex-row w-full EmbeddedEntry_BlogPost_Card mt-4 px-5 pt-5 custom2:p-5 rounded-lg",
            key: post.blogPostSlug
          }, /* @__PURE__ */ import_react2.default.createElement("img", {
            src: post.blogPostSplash.fields.file.url,
            alt: post.blogPostSplash.fields.title,
            title: post.blogPostSplash.fields.title,
            className: "object-cover w-full mb-2 custom2:mb-0 custom2:max-w-[240px] custom2:mr-5 rounded-lg"
          }), /* @__PURE__ */ import_react2.default.createElement("div", {
            className: "flex flex-col items-baseline justify-between"
          }, /* @__PURE__ */ import_react2.default.createElement("span", {
            className: "text-xl mb-2 text-blog-lgText font-bold"
          }, post.blogPostTitle), /* @__PURE__ */ import_react2.default.createElement("p", {
            className: "text-base text-gray-400"
          }, post.blogPostExcerpt), /* @__PURE__ */ import_react2.default.createElement(BlogPostTags_default, {
            tags: tags2
          })));
        case "codeBlock":
          const codeBlockData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement(CodeBlock_default2, {
            data: codeBlockData
          });
        case "stickyNote":
          const noteData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement(StickyNote_default, {
            stickyData: noteData
          });
        case "gif":
          const gifData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: gifData.gifMarkup }
          });
        case "codeSandbox":
          const sandboxData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement("div", {
            className: "BlogPost__SandBox__Container mt-5"
          }, /* @__PURE__ */ import_react2.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: sandboxData.rawMarkup }
          }));
        default:
          return /* @__PURE__ */ import_react2.default.createElement("p", {
            className: "text-base text-rose-500"
          }, "Error loading asset entry");
      }
    },
    [import_rich_text_types2.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description;
      switch (assetType) {
        case "video/mp4":
          return /* @__PURE__ */ import_react2.default.createElement("video", {
            width: "100%",
            height: "100%",
            controls: true
          }, /* @__PURE__ */ import_react2.default.createElement("source", {
            src: node.data.target.fields.file.url,
            type: "video/mp4"
          }));
        case "image/jpeg":
        case "image/svg+xml":
        case "image/gif":
        case "image/png":
          return /* @__PURE__ */ import_react2.default.createElement(ImageMedia_default2, {
            src: node.data.target.fields.file.url,
            alt: node.data.target.fields.title,
            description: maybeDescription ? maybeDescription : void 0
          });
        default:
          return /* @__PURE__ */ import_react2.default.createElement(ImageMedia_default2, {
            src: node.data.target.fields.file.url,
            alt: node.data.target.fields.title,
            description: maybeDescription ? maybeDescription : void 0
          });
      }
    },
    [import_rich_text_types2.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("table", null, /* @__PURE__ */ import_react2.default.createElement("tbody", null, children)),
    [import_rich_text_types2.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("tr", null, children),
    [import_rich_text_types2.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("td", null, children),
    [import_rich_text_types2.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("thead", null, children)
  }
};

// app/styles/blogpost.css
var blogpost_default = "/build/_assets/blogpost-F5L2FXAW.css";

// app/components/BlogPost/AuthorSection/AuthorSection.tsx
init_react();
var React26 = __toESM(require("react"));
var import_solid = require("@heroicons/react/solid");
var AuthorSection = ({}) => {
  const { theme } = useTheme();
  const borderColor = theme === "light" /* LIGHT */ ? "border-gray-400" : "border-gray-200";
  return /* @__PURE__ */ React26.createElement("div", {
    className: `BlogPost__AuthorSection__Container border-t-2 ${borderColor} flex m-auto flex-col items-center justify-center sm:grid-cols-4 sm:gap-10 py-10`
  }, /* @__PURE__ */ React26.createElement("img", {
    src: "/images/author.jpg",
    alt: "Florian Stanglmeier Portrait",
    className: "BlogPost__AuthorSection__AuthorAvatar rounded-full mb-7 sm:mb-0 w-56",
    title: "My portrait picture"
  }), /* @__PURE__ */ React26.createElement("div", {
    className: "BlogPost__AuthorSection__Biography flex flex-col items-start justify-start sm:col-span-3"
  }, /* @__PURE__ */ React26.createElement("p", {
    className: "font-medium text-2xl mb-4 xs:mb-2 text-post-bodyTextLg"
  }, "Verfasst von Florian Stanglmeier"), /* @__PURE__ */ React26.createElement("a", {
    href: "https://www.linkedin.com/in/florianstanglmeier/",
    className: "twitter-follow-button",
    "data-size": "large",
    "aria-label": "Folg uns auf LinkedIn",
    "data-show-screen-name": "false",
    "data-show-count": "false"
  }, "Follow"), /* @__PURE__ */ React26.createElement("p", {
    className: "text-lg mt-7"
  }, "Florian Stanglmeier ist IT Stratege und AI Experte. Er ist zust\xE4ndig f\xFCr die Entwicklung und das Management von Projekten."), /* @__PURE__ */ React26.createElement("a", {
    href: "/",
    className: "mt-7 inline-flex items-center justify-start text-post-bodyTextLg"
  }, /* @__PURE__ */ React26.createElement("p", {
    className: "text-xl mr-5"
  }, "Mehr erfahren"), /* @__PURE__ */ React26.createElement(import_solid.ArrowRightIcon, {
    className: "h-10 mr-4 rounded-full border-2 p-2 hover:border-gray-700 transition-all duration-120"
  }))));
};
var AuthorSection_default = AuthorSection;

// app/api/getPostsAndTags.ts
init_react();
var getPostsAndTags = async () => {
  const [blogPosts, contentfulTags] = await Promise.all([
    getContentfulBlogPosts(),
    getContentfulTags()
  ]);
  return { blogPosts, contentfulTags };
};

// app/components/BlogPost/RelatedPostsSection/RelatedPostsSection.tsx
init_react();
var React28 = __toESM(require("react"));

// app/components/BlogPost/RelatedPostsSection/RelatedPostCard.tsx
init_react();
var React27 = __toESM(require("react"));
var RelatedPostCard = (props) => {
  const rawDateData = new Date(props.post.sys.updatedAt).toDateString();
  const date = rawDateData.substring(rawDateData.indexOf(" ") + 1);
  const tags2 = props.post.metadata.tags;
  return /* @__PURE__ */ React27.createElement("div", {
    className: "RelatedBlogPost__Card__Container"
  }, /* @__PURE__ */ React27.createElement("a", {
    href: `/blog/${props.post.fields.blogPostSlug}`,
    className: "RelatedBlogPost__Link__Container h-full rounded-lg"
  }, /* @__PURE__ */ React27.createElement("img", {
    src: props.post.fields.blogPostSplash.fields.file.url,
    alt: props.post.fields.blogPostSplash.fields.title,
    title: props.post.fields.blogPostSplash.fields.title,
    className: "RelatedBlogPost__Image rounded-lg w-full h-80",
    loading: "lazy"
  })), /* @__PURE__ */ React27.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React27.createElement("span", {
    className: "inline-flex text-xl md:text-2xl text-gray-400 font-bold mt-2 mb-3"
  }, date, " \u2014 5 min read"), /* @__PURE__ */ React27.createElement("span", {
    className: "RelatedBlogPost__Title text-blog-lgText font-bold text-2xl md:text-3xl"
  }, props.post.fields.blogPostTitle), /* @__PURE__ */ React27.createElement("div", null, /* @__PURE__ */ React27.createElement(BlogPostTags_default, {
    tags: tags2
  }))));
};
var RelatedPostCard_default = RelatedPostCard;

// app/components/BlogPost/RelatedPostsSection/RelatedPostsSection.tsx
var RelatedPostsSection = (props) => {
  return /* @__PURE__ */ React28.createElement("div", {
    className: `${fixedWidthLayoutClasses} max-w-[1000px] pt-20 pb-20 sm:pb-32 lg:pb-44`
  }, /* @__PURE__ */ React28.createElement("div", {
    className: "flex flex-col items-start justify-center text-3xl mb-10"
  }, /* @__PURE__ */ React28.createElement("p", {
    className: "text-post-bodyTextLg text-5xl font-medium mb-5"
  }, "If you found this article helpful."), /* @__PURE__ */ React28.createElement("p", {
    className: "text-post-bodyText text-4xl"
  }, "You will love these ones as well.")), /* @__PURE__ */ React28.createElement("div", {
    className: "RelatedBlogPosts__Wrapper grid gap-10 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none"
  }, props.relatedPosts.map((post) => /* @__PURE__ */ React28.createElement("li", {
    key: post.sys.id ? post.sys.id : post.fields.blogPostTitle,
    className: "RelatedBlogPost__Container"
  }, /* @__PURE__ */ React28.createElement(RelatedPostCard_default, {
    post
  })))));
};
var RelatedPostsSection_default = RelatedPostsSection;

// app/components/FloatingHeader/FloatingHeader.tsx
init_react();

// app/components/FloatingHeader/FloatingHeader.css
var FloatingHeader_default = "/build/_assets/FloatingHeader-VG2BC7U7.css";

// app/components/FloatingHeader/FloatingHeader.tsx
var React31 = __toESM(require("react"));

// app/components/FloatingHeader/ShareSection.tsx
init_react();
var React29 = __toESM(require("react"));
var ShareSection = (props) => {
  const tweetMsg = `I just read ${props.title} by @alissa_nguyen14

`;
  const twitterShareHref = `https://twitter.com/intent/tweet?hashtags=programming%2Cblog&original_referer=https%3A%2F%2Fwww.alissanguyen.dev%2F&related=alissa_nguyen14&text=${tweetMsg}%0A%0A&url=https%3A%2F%2Fwww.alissanguyen.dev%2Fblog%2F${props.slug}%2F`;
  const facebookShareHref = "https://www.facebook.com/sharer/sharer.php?u=https://www.alissanguyen.dev/blog/" + props.slug;
  const linkedinShareHref = "https://www.linkedin.com/shareArticle?mini=true&url=https://www.alissanguyen.dev/blog/" + props.slug + "&title=" + props.title;
  return /* @__PURE__ */ React29.createElement("div", {
    className: "floating-header-share"
  }, /* @__PURE__ */ React29.createElement("div", {
    className: "floating-header-share-label hidden custom:flex mr-2 font-medium items-center text-post-bodyTextLg"
  }, "Share this"), /* @__PURE__ */ React29.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "ionicon inline-flex items-center h-6 mr-3 mt-1 text-post-bodyTextLg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React29.createElement("circle", {
    cx: "128",
    cy: "256",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React29.createElement("circle", {
    cx: "384",
    cy: "112",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React29.createElement("circle", {
    cx: "384",
    cy: "400",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React29.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
  })), /* @__PURE__ */ React29.createElement("a", {
    className: "floating-header-share-tw",
    href: twitterShareHref,
    target: "_blank"
  }, /* @__PURE__ */ React29.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React29.createElement("path", {
    d: "M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
  }))), /* @__PURE__ */ React29.createElement("a", {
    className: "floating-header-share-fb",
    href: facebookShareHref,
    target: "_blank",
    rel: "nofollow",
    "data-size": "large"
  }, /* @__PURE__ */ React29.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React29.createElement("path", {
    d: "M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
  }))), /* @__PURE__ */ React29.createElement("a", {
    className: "floating-header-share-linkedin",
    href: linkedinShareHref,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React29.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React29.createElement("path", {
    d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
  }))));
};
var ShareSection_default = ShareSection;

// app/components/FloatingHeader/ProgressBar.tsx
init_react();
var React30 = __toESM(require("react"));
var ProgressBar = ({ progress }) => {
  return /* @__PURE__ */ React30.createElement("div", {
    className: `scroll-line`,
    style: {
      width: `${progress}%`
    },
    id: "scroll-line"
  });
};
var ProgressBar_default = ProgressBar;

// app/components/FloatingHeader/FloatingHeader.tsx
var import_bs = require("react-icons/bs");
var links5 = () => {
  return [{ rel: "stylesheet", href: FloatingHeader_default }];
};
var FloatingHeader = (props) => {
  const [shouldShowFloatingHeader, setShouldShowFloatingHeader] = React31.useState(false);
  const [progress, setProgress] = React31.useState(0);
  function fillScrollLine() {
    requestAnimationFrame(() => {
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.clientHeight;
      const navBar = document.getElementById(NAVBAR_ID);
      if (navBar) {
        const navbarContainerHeight = navBar.clientHeight;
        const scrolled = window.scrollY;
        const percentScrolled = scrolled / (fullHeight - windowHeight) * 100;
        setProgress(percentScrolled);
        setShouldShowFloatingHeader(calculateShouldShowFloatingHeader(scrolled, navbarContainerHeight));
      }
    });
  }
  React31.useEffect(() => {
    fillScrollLine();
    window.addEventListener("scroll", fillScrollLine);
    return () => {
      window.removeEventListener("scroll", fillScrollLine);
    };
  }, []);
  return /* @__PURE__ */ React31.createElement("div", {
    className: `floating-header text-xl ${shouldShowFloatingHeader ? "floating-active" : ""}`,
    id: "Floating__Header"
  }, /* @__PURE__ */ React31.createElement("div", {
    className: "floating-header-logo font-medium ml-4 text-post-bodyTextLg"
  }, /* @__PURE__ */ React31.createElement("a", {
    href: "https://www.alissanguyen.dev/blog"
  }, /* @__PURE__ */ React31.createElement("span", {
    className: "hidden xs:flex"
  }, "Alissa Nguyen's Blog"), /* @__PURE__ */ React31.createElement("div", {
    className: "FloatingHeader__GoBackButton inline-flex items-center justify-center xs:hidden font-normal pl-2"
  }, /* @__PURE__ */ React31.createElement(import_bs.BsFillArrowLeftCircleFill, {
    className: "FloatingHeader__GoBackArrowSVG w-5 mr-2"
  }), /* @__PURE__ */ React31.createElement("span", {
    className: "FloatingHeader__GoBackLabel text-lg pb-1"
  }, "Back")))), /* @__PURE__ */ React31.createElement("span", {
    className: "floating-header-divider text-post-bodyTextLg"
  }, "\u2014"), /* @__PURE__ */ React31.createElement("div", {
    className: "floating-header-title font-medium"
  }, props.postTitle), /* @__PURE__ */ React31.createElement(ProgressBar_default, {
    progress
  }), /* @__PURE__ */ React31.createElement(SimplifiedThemeButton, null), /* @__PURE__ */ React31.createElement(ShareSection_default, {
    title: props.postTitle,
    slug: props.postSlug
  }));
};
var calculateShouldShowFloatingHeader = (amountScrolledInPixels, containerHeightInPixels) => {
  return amountScrolledInPixels >= containerHeightInPixels;
};
var FloatingHeader_default2 = FloatingHeader;

// route:/Users/flo/Development/Webpage-1/app/routes/blog/$slug.tsx
var links6 = () => {
  return [
    {
      rel: "stylesheet",
      href: blogpost_default
    },
    ...links2(),
    ...links3(),
    ...links4(),
    ...links5()
  ];
};
var meta = ({ data, location }) => {
  try {
    const dataWithType = data;
    const { blogPost } = dataWithType;
    const imageURl = "https:" + blogPost.fields.blogPostSplash.fields.file.url;
    const webURL = "https://www.alissanguyen.dev" + location.pathname;
    const description = blogPost.fields.blogPostExcerpt.slice(0, 160) + "... ";
    const title = blogPost.fields.blogPostTitle;
    const keywords = blogPost.fields.blogPostKeywords + ", Alissa Nguyen, AlissaNguyen, FrontEnd Engineer";
    const publishedDate = blogPost.sys.createdAt;
    const updatedDate = blogPost.sys.updatedAt;
    return {
      title: blogPost.fields.blogPostTitle,
      keywords,
      image: imageURl,
      description,
      "og:url": webURL,
      "og:image": imageURl,
      "og:title": title,
      "og:site_name": "Alissa Nguyen's Blog",
      "og:type": "article",
      "og:description": description,
      "article:published_time": publishedDate,
      "article:modified_time": updatedDate,
      "article:publisher": TWITTER_PUBLISHER,
      "twitter:card": TWITTER_CARD_TYPE,
      "twitter:creator": TWITTER_ACC,
      "twitter:site": TWITTER_ACC,
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": imageURl,
      "twitter:alt": title,
      "twitter:url": webURL,
      "og:image:width": IMAGE_WIDTH,
      "og:image:height": IMAGE_HEIGHT,
      author: AUTHOR,
      "theme-color": "#212529"
    };
  } catch (e) {
    console.error(e);
    const emptyMeta = {};
    return emptyMeta;
  }
};
var loader3 = async ({ params }) => {
  if (!params.slug) {
    throw new Error("Missing slug in params.");
  }
  try {
    const [blogPost, { blogPosts, contentfulTags }] = await Promise.all([
      getContentfulBlogPostBySlug(params.slug),
      getPostsAndTags()
    ]);
    return {
      blogPost,
      blogPosts,
      contentfulTags
    };
  } catch (e) {
    console.error(e);
    throw new Response(void 0, { status: 404 });
  }
};
var Post = ({}) => {
  const { blogPost, blogPosts } = (0, import_remix8.useLoaderData)();
  const { theme } = useTheme();
  const blogPostBody = (0, import_rich_text_react_renderer2.documentToReactComponents)(blogPost.fields.bodyRichText, options);
  const blogPostTranslation = blogPost.fields.blogPostTranslations !== void 0 ? blogPost.fields.blogPostTranslations.content : [];
  const updatedDate = new Date(blogPost.sys.updatedAt).toDateString();
  const subUpdatedDate = updatedDate.substring(updatedDate.indexOf(" ") + 1);
  const publishedDate = new Date(blogPost.sys.createdAt).toDateString();
  const subPublishedDate = publishedDate.substring(updatedDate.indexOf(" ") + 1);
  const tagsToFindRelatedPostsFor = blogPost.metadata.tags;
  const blogPostWithAtLeastOneSharedTag = blogPosts.items.filter((post) => {
    return post.sys.id !== blogPost.sys.id && tagsToFindRelatedPostsFor.some((selectedTag) => {
      return post.metadata.tags.some((tag) => tag.sys.id === selectedTag.sys.id);
    });
  }).slice(0, 3);
  return /* @__PURE__ */ React32.createElement(React32.Fragment, null, /* @__PURE__ */ React32.createElement(FloatingHeader_default2, {
    postSlug: blogPost.fields.blogPostSlug,
    postTitle: blogPost.fields.blogPostTitle
  }), /* @__PURE__ */ React32.createElement("div", {
    className: "text-post-bodyText"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: `${fixedWidthLayoutClasses} flex flex-col mb-5 xl:mb-10`
  }, /* @__PURE__ */ React32.createElement("a", {
    href: "/blog",
    className: "go-back-btn inline-flex border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-100 ease-in w-fit"
  }, /* @__PURE__ */ React32.createElement("img", {
    src: theme === "dark" /* DARK */ ? "/svg/arrow.svg" : "/svg/arrowDark.svg",
    className: "go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg",
    alt: "go back",
    title: "Back"
  }), "Go back"), /* @__PURE__ */ React32.createElement("h1", {
    className: "BlogPost__Title text-4xl text-post-bodyTextLg xs:text-5xl font-bold"
  }, blogPost.fields.blogPostTitle), /* @__PURE__ */ React32.createElement("div", {
    className: "w-full flex flex-col custom2:flex-row custom2:justify-between custom2:items-center mt-2 mx-auto max-w-[700px]"
  }, /* @__PURE__ */ React32.createElement("p", {
    className: "BlogPost__DatePublish text-xl mb-2 custom2:mb-0"
  }, "Published on ", subPublishedDate), /* @__PURE__ */ React32.createElement("p", {
    className: "BlogPost__DatePublish text-xl"
  }, "Last updated on ", subUpdatedDate))), /* @__PURE__ */ React32.createElement("img", {
    src: "https://" + blogPost.fields.blogPostSplash.fields.file.url,
    className: "BlogPost__SplashImage max-w-[1200px] mb-5 xl:mb-10 mx-auto rounded-lg w-[83%] custom3:w-[85%] xs:w-[90%] xl:w-full",
    alt: blogPost.fields.blogPostSplash.fields.title,
    title: blogPost.fields.blogPostSplash.fields.title
  }), /* @__PURE__ */ React32.createElement("div", {
    className: `BlogPost text-post-bodyText ${fixedWidthLayoutClasses} mb-20`
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "Translation__Section flex flex-col sm:flex-row sm:items-center self-baseline text-base sm:text-lg gap-5"
  }, blogPostTranslation.length > 1 ? /* @__PURE__ */ React32.createElement("div", {
    className: "flex flex-row items-center gap-3 sm:gap-5"
  }, blogPostTranslation.map((translation) => {
    if (translation.data.target !== void 0) {
      console.log(translation.data.target.fields, "HELLO");
      const translationData = translation.data.target.fields;
      const language = translationData.language;
      const translationLink = translationData.linkToTranslation;
      return /* @__PURE__ */ React32.createElement("a", {
        target: "_blank",
        href: translationLink,
        className: `translation-button px-4 pt-2 pb-3 sm:px-5 sm:pt-3 sm:pb-4 ${theme === "light" /* LIGHT */ ? "bg-gray-100 text-black" : "bg-zinc-700 text-white"} rounded-full w-fit`
      }, language);
    }
    return null;
  })) : /* @__PURE__ */ React32.createElement("div", {
    className: "BlogPost__TranslationSection flex flex-col custom3:flex-row justify-start text-post-bodyText"
  }, /* @__PURE__ */ React32.createElement("span", {
    className: "italic mr-10"
  }, "No translation available.")), /* @__PURE__ */ React32.createElement("a", {
    className: "AddTranslation__Button font-medium underlined w-fit text-lg sm:text-xl",
    href: "https://github.com/alissanguyen/alissanguyen-dot-dev/blob/main/CONTRIBUTING.md",
    target: "_blank"
  }, "Add translation")), /* @__PURE__ */ React32.createElement("div", {
    className: "BlogPost__BodyWrapper mt-10 custom3:mt-16"
  }, blogPostBody), /* @__PURE__ */ React32.createElement("div", {
    className: "flex flex-col lg:flex-row lg:justify-between my-16"
  }, /* @__PURE__ */ React32.createElement("div", {
    className: "text-base mb-16 lg:mb-0"
  }, /* @__PURE__ */ React32.createElement("span", {
    className: "text-lg font-medium"
  }, "Tags:"), " ", blogPost.metadata.tags.map((tag) => /* @__PURE__ */ React32.createElement(TagBadge, {
    tag,
    theme
  })))), /* @__PURE__ */ React32.createElement(AuthorSection_default, null)), /* @__PURE__ */ React32.createElement("hr", null), blogPostWithAtLeastOneSharedTag.length > 0 && /* @__PURE__ */ React32.createElement(RelatedPostsSection_default, {
    relatedPosts: blogPostWithAtLeastOneSharedTag
  }), /* @__PURE__ */ React32.createElement("hr", null)));
};
var slug_default = Post;
var TagBadge = (props) => {
  const tagName = tagIdsToDisplayNames[props.tag.sys.id];
  return /* @__PURE__ */ React32.createElement(React32.Fragment, null, props.theme === "light" /* LIGHT */ ? /* @__PURE__ */ React32.createElement("div", {
    className: "tag-badge bg-gray-600 before:bg-gray-600 hover:bg-gray-900 before:hover:bg-gray-900 text-gray-200 hover:text-white inline-flex items-center"
  }, tagName) : /* @__PURE__ */ React32.createElement("div", {
    className: "tag-badge tag-dark bg-gray-300 before:bg-gray-300 before:hover:bg-white hover:bg-white text-gray-700 hover:text-black inline-flex items-center"
  }, tagName));
};

// route:/Users/flo/Development/Webpage-1/app/routes/blog/index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => BlogPage,
  links: () => links7,
  loader: () => loader4,
  meta: () => meta2
});
init_react();
var import_remix9 = __toESM(require_remix());
var React38 = __toESM(require("react"));

// app/components/Blog/BlogPostCard.tsx
init_react();
var React34 = __toESM(require("react"));

// app/components/Blog/CopyURLButton.tsx
init_react();
var React33 = __toESM(require("react"));
var import_fi = require("react-icons/fi");
var import_bs2 = require("react-icons/bs");
var CopyURLButton = (props) => {
  const buttonText = props.userRecentlyCopiedText ? "Copied" : "Copy URL";
  return /* @__PURE__ */ React33.createElement(React33.Fragment, null, /* @__PURE__ */ React33.createElement("button", {
    name: buttonText,
    "aria-label": buttonText,
    className: "url-button copy-url-button custom3:px-4",
    onClick: props.handleCopyURL
  }, /* @__PURE__ */ React33.createElement("span", {
    className: "hidden custom3:flex"
  }, buttonText), /* @__PURE__ */ React33.createElement("span", {
    className: "flex custom3:hidden"
  }, props.userRecentlyCopiedText ? /* @__PURE__ */ React33.createElement(import_bs2.BsCheck2, {
    className: "w-5 h-4 text-gray-600"
  }) : /* @__PURE__ */ React33.createElement(import_fi.FiCopy, {
    className: "w-5 h-4 text-gray-600"
  }))));
};
var CopyURLButton_default = CopyURLButton;

// app/components/Blog/BlogPostCard.tsx
var import_md = require("react-icons/md");
var BlogPostCard = (props) => {
  const blogPost = props.blogPost;
  const blogPostTags = blogPost.metadata.tags;
  const rawDate = new Date(blogPost.sys.updatedAt).toDateString();
  const publishedDate = rawDate.substring(rawDate.indexOf(" ") + 1);
  const postUrl = `https://www.solutio.io/blog/${blogPost.fields.blogPostSlug}`;
  const [userRecentlyCopiedText, setUsetRecentlyCopiedText] = React34.useState(false);
  const handleCopyURL = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(postUrl);
    setUsetRecentlyCopiedText(true);
  };
  React34.useEffect(() => {
    let timeout;
    if (userRecentlyCopiedText) {
      timeout = window.setTimeout(() => setUsetRecentlyCopiedText(false), 1500);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [userRecentlyCopiedText]);
  return /* @__PURE__ */ React34.createElement("a", {
    href: `/blog/${blogPost.fields.blogPostSlug}`,
    className: "h-full rounded-lg"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "h-full"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "Card__Container"
  }, /* @__PURE__ */ React34.createElement(CopyURLButton_default, {
    userRecentlyCopiedText,
    handleCopyURL
  }), /* @__PURE__ */ React34.createElement("div", {
    className: "Card__TextContent h-full flex rounded-b-lg flex-col pt-5 pb-2 px-5 justify-between"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React34.createElement("div", {
    className: "Card__Date__Wrapper"
  }, /* @__PURE__ */ React34.createElement(import_md.MdDateRange, {
    className: "h-5"
  }), /* @__PURE__ */ React34.createElement("p", {
    className: "Card__Date text-base text-gray-500 font-medium font-sans"
  }, publishedDate)), /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement("div", {
    className: "font-bold text-grey-900 text-xl mb-2 sm:max-h-16 overflow-hidden"
  }, blogPost.fields.blogPostTitle), /* @__PURE__ */ React34.createElement("p", {
    className: "Card__Excerpt text-gray-600 text-base line-clamp-3"
  }, blogPost.fields.blogPostExcerpt))), /* @__PURE__ */ React34.createElement(BlogPostTags_default, {
    tags: blogPostTags
  })))));
};
var BlogPostCard_default = BlogPostCard;

// app/components/Blog/SearchBarSection.tsx
init_react();
var React36 = __toESM(require("react"));
var import_outline = require("@heroicons/react/outline");

// app/components/Blog/BlogIndexDecoration.tsx
init_react();
var React35 = __toESM(require("react"));
var import_framer_motion2 = require("framer-motion");
var BlogIndexDecoration = () => {
  return /* @__PURE__ */ React35.createElement(import_framer_motion2.motion.svg, {
    animate: { scale: 1, opacity: 1 },
    transition: { type: "spring", bounce: 0.5, duration: 0.5 },
    initial: {
      scale: 0.9,
      opacity: 0.5
    },
    viewBox: "0 0 799 818",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "decorative-bg hidden sm:block absolute"
  }, /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter0_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("circle", {
    cx: "737.5",
    cy: "606.5",
    r: "61.5",
    fill: "url(#paint0_radial_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React35.createElement("circle", {
    cx: "737.5",
    cy: "606.5",
    r: "61",
    stroke: "url(#paint1_linear_0_5)"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter1_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("circle", {
    cx: "243",
    cy: "750",
    r: "38",
    fill: "url(#paint2_linear_0_5)",
    fillOpacity: "0.5"
  }), /* @__PURE__ */ React35.createElement("circle", {
    cx: "243",
    cy: "750",
    r: "37.5",
    stroke: "url(#paint3_linear_0_5)"
  })), /* @__PURE__ */ React35.createElement("circle", {
    cx: "68",
    cy: "68",
    r: "68",
    fill: "url(#paint4_linear_0_5)",
    fillOpacity: "0.8"
  }), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter2_d_0_5)"
  }, /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter3_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("rect", {
    x: "56",
    y: "44",
    width: "687",
    height: "704",
    rx: "50",
    fill: "white",
    fillOpacity: "0.2"
  }), /* @__PURE__ */ React35.createElement("rect", {
    x: "57",
    y: "45",
    width: "685",
    height: "702",
    rx: "49",
    stroke: "url(#paint5_linear_0_5)",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React35.createElement("g", {
    opacity: "0.5"
  }, /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter4_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M124.701 53L124.701 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter5_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M161.34 53L161.34 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter6_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M197.982 53L197.982 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter7_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M234.621 53L234.621 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter8_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M271.261 53L271.261 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter9_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M307.9 53L307.9 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter10_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M344.542 53L344.542 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter11_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M381.181 53L381.181 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter12_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M417.82 53L417.82 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter13_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M454.462 53L454.462 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter14_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M491.101 53L491.101 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter15_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M527.741 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter16_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M564.38 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter17_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M601.022 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter18_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M637.661 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter19_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M674.301 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter20_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 122L66.9997 122",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter21_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 158L66.9997 158",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter22_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 195L66.9997 195",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter23_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 232L66.9997 232",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter24_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 268L66.9997 268",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter25_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 305L66.9997 305",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter26_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 342L66.9997 342",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter27_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 378L66.9997 378",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter28_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 415L66.9997 415",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter29_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 451L66.9997 451",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter30_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 488L66.9997 488",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter31_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 525L66.9997 525",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter32_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 561L66.9997 561",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter33_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 598L66.9997 598",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter34_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 635L66.9997 635",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter35_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M731 671L66.9997 671",
    stroke: "#CEE1EA"
  }))), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter36_d_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M600.078 353.579C598.077 358.814 582.698 357.8 565.727 351.314C548.756 344.828 536.621 335.326 538.622 330.09C540.623 324.854 616.558 131.88 616.558 131.88L678.014 155.369C678.014 155.369 601.178 350.7 600.078 353.579Z",
    fill: "url(#paint6_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M677.491 155.543C677.063 156.664 675.889 157.526 673.953 158.051C672.028 158.574 669.44 158.737 666.355 158.534C660.192 158.127 652.147 156.265 643.69 153.033C635.233 149.801 627.997 145.823 623.134 142.015C620.7 140.109 618.881 138.261 617.795 136.588C616.704 134.905 616.403 133.48 616.831 132.359C617.26 131.238 618.434 130.377 620.37 129.851C622.295 129.329 624.883 129.166 627.967 129.369C634.131 129.775 642.176 131.637 650.632 134.87C659.089 138.102 666.326 142.08 671.189 145.888C673.622 147.794 675.442 149.641 676.527 151.315C677.619 152.997 677.92 154.422 677.491 155.543Z",
    fill: "url(#paint7_linear_0_5)",
    stroke: "url(#paint8_linear_0_5)",
    strokeWidth: "0.852615"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter37_d_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M527.088 469.925C494.055 525.968 396.524 538.317 319.791 489.864C256.399 449.835 211.497 363.715 241.198 307.858C278.131 245.199 274.926 250.637 274.926 250.637C274.926 250.637 290.314 365.335 351.016 410.141C414.302 456.854 557.996 417.489 557.996 417.489C557.996 417.489 531.33 462.728 527.088 469.925Z",
    fill: "url(#paint9_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M475.753 418.479C452.391 458.113 658.842 344.819 488.119 233.447C317.397 122.076 280.156 356.592 303.518 316.958C326.88 277.323 384.375 267.92 431.936 295.954C479.497 323.988 499.115 378.845 475.753 418.479Z",
    fill: "url(#paint10_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("mask", {
    id: "path-44-inside-1_0_5",
    fill: "white"
  }, /* @__PURE__ */ React35.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348.361 448.686C426.749 494.89 521.438 479.511 559.856 414.334C598.273 349.158 565.871 258.866 487.483 212.661C409.095 166.456 314.405 181.836 275.988 247.012C237.571 312.189 269.973 402.481 348.361 448.686ZM383.141 389.679C429.822 417.195 484.919 410.226 506.204 374.115C527.49 338.004 506.903 286.424 460.222 258.909C413.542 231.394 358.445 238.362 337.159 274.474C315.874 310.585 336.461 362.164 383.141 389.679Z"
  })), /* @__PURE__ */ React35.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348.361 448.686C426.749 494.89 521.438 479.511 559.856 414.334C598.273 349.158 565.871 258.866 487.483 212.661C409.095 166.456 314.405 181.836 275.988 247.012C237.571 312.189 269.973 402.481 348.361 448.686ZM383.141 389.679C429.822 417.195 484.919 410.226 506.204 374.115C527.49 338.004 506.903 286.424 460.222 258.909C413.542 231.394 358.445 238.362 337.159 274.474C315.874 310.585 336.461 362.164 383.141 389.679Z",
    fill: "url(#paint11_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M558.261 413.394C520.518 477.427 427.096 492.946 349.301 447.091L347.421 450.28C426.401 496.834 522.359 481.594 561.45 415.274L558.261 413.394ZM486.543 214.256C564.338 260.111 596.004 349.362 558.261 413.394L561.45 415.274C600.542 348.954 567.403 257.62 488.423 211.066L486.543 214.256ZM277.583 247.952C315.326 183.92 408.747 168.4 486.543 214.256L488.423 211.066C409.442 164.512 313.485 179.752 274.393 246.072L277.583 247.952ZM349.301 447.091C271.506 401.235 239.839 311.985 277.583 247.952L274.393 246.072C235.302 312.392 268.44 403.726 347.421 450.28L349.301 447.091ZM504.609 373.175C484.053 408.049 430.286 415.319 384.081 388.085L382.201 391.274C429.358 419.07 485.784 412.404 507.799 375.055L504.609 373.175ZM459.282 260.504C505.487 287.738 525.165 338.301 504.609 373.175L507.799 375.055C529.814 337.706 508.318 285.11 461.162 257.314L459.282 260.504ZM338.754 275.414C359.31 240.54 413.078 233.269 459.282 260.504L461.162 257.314C414.006 229.519 357.579 236.185 335.565 273.534L338.754 275.414ZM384.081 388.085C337.877 360.85 318.198 310.288 338.754 275.414L335.565 273.534C313.55 310.882 335.045 363.479 382.201 391.274L384.081 388.085Z",
    fill: "url(#paint12_linear_0_5)",
    mask: "url(#path-44-inside-1_0_5)"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter38_d_0_5)"
  }, /* @__PURE__ */ React35.createElement("g", {
    opacity: "0.9",
    filter: "url(#filter39_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M485.043 439.685L589.146 524.942L528.18 637.661L441.913 549.736L485.043 439.685Z",
    fill: "url(#paint13_linear_0_5)"
  })), /* @__PURE__ */ React35.createElement("path", {
    d: "M588.445 525.033L665.036 510.824L609.991 614.22L528.18 637.661L588.445 525.033Z",
    fill: "url(#paint14_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("g", {
    opacity: "0.9",
    filter: "url(#filter40_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("path", {
    d: "M571.165 438.502L665.036 510.824L588.445 525.033L484.647 439.38L571.165 438.502Z",
    fill: "url(#paint15_linear_0_5)"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M487.191 440.28L570.854 439.43L662.829 510.293L588.701 524.044L487.191 440.28Z",
    stroke: "white",
    strokeWidth: "1.85119"
  }))), /* @__PURE__ */ React35.createElement("path", {
    d: "M132.874 316.849C137.803 323.071 146.839 324.127 153.069 319.208L306.525 198.06C312.833 193.08 313.839 183.898 308.758 177.671L271.499 132L98.0105 272.837L132.874 316.849Z",
    fill: "url(#paint16_linear_0_5)",
    stroke: "white",
    strokeWidth: "0.719444"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M78.158 227.731C75.8974 221.856 77.7182 215.194 82.6526 211.285L215.796 105.817C220.73 101.908 227.633 101.661 232.834 105.206L268.971 129.837C272.981 132.57 273.191 138.408 269.387 141.421L105.045 271.603C101.241 274.616 95.6059 273.076 93.8632 268.547L78.158 227.731Z",
    fill: "url(#paint17_linear_0_5)",
    stroke: "white",
    strokeWidth: "0.719444"
  }), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter41_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("ellipse", {
    cx: "209.34",
    cy: "486.612",
    rx: "88.6628",
    ry: "81.5901",
    transform: "rotate(13.5781 209.34 486.612)",
    fill: "url(#paint18_linear_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M294.939 507.286C284.449 550.719 237.649 576.765 190.327 565.336C143.005 553.906 113.251 509.371 123.741 465.938C134.231 422.505 181.032 396.458 228.354 407.888C275.676 419.317 305.429 463.852 294.939 507.286Z",
    stroke: "#FFFAFA",
    strokeWidth: "1.20513"
  })), /* @__PURE__ */ React35.createElement("g", {
    filter: "url(#filter42_b_0_5)"
  }, /* @__PURE__ */ React35.createElement("ellipse", {
    cx: "214.158",
    cy: "474.56",
    rx: "88.6628",
    ry: "81.5901",
    transform: "rotate(13.5781 214.158 474.56)",
    fill: "url(#paint19_linear_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M299.758 495.234C289.268 538.667 242.467 564.713 195.145 553.284C147.823 541.855 118.069 497.32 128.559 453.886C139.049 410.453 185.85 384.407 233.172 395.836C280.494 407.266 310.248 451.801 299.758 495.234Z",
    stroke: "#FFFAFA",
    strokeWidth: "1.20513"
  })), /* @__PURE__ */ React35.createElement("path", {
    d: "M22 685.104C23.4616 748.595 44.6441 780.341 85.5476 780.341",
    stroke: "#FF7FA8",
    strokeWidth: "2"
  }), /* @__PURE__ */ React35.createElement("path", {
    d: "M691 15C744.123 15 770.684 40.3333 770.684 91",
    stroke: "#848CF1",
    strokeWidth: "2"
  }), /* @__PURE__ */ React35.createElement("defs", null, /* @__PURE__ */ React35.createElement("filter", {
    id: "filter0_b_0_5",
    x: "622",
    y: "491",
    width: "231",
    height: "231",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "27"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter1_b_0_5",
    x: "151",
    y: "658",
    width: "184",
    height: "184",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "27"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter2_d_0_5",
    x: "26",
    y: "44",
    width: "727",
    height: "744",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React35.createElement("feOffset", {
    dx: "-10",
    dy: "20"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    stdDeviation: "10"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.380365 0 0 0 0 0.453506 0 0 0 0 0.8375 0 0 0 0.2 0"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter3_b_0_5",
    x: "36",
    y: "24",
    width: "727",
    height: "744",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "10"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter4_b_0_5",
    x: "114.201",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter5_b_0_5",
    x: "150.84",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter6_b_0_5",
    x: "187.482",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter7_b_0_5",
    x: "224.121",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter8_b_0_5",
    x: "260.761",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter9_b_0_5",
    x: "297.4",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter10_b_0_5",
    x: "334.042",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter11_b_0_5",
    x: "370.681",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter12_b_0_5",
    x: "407.32",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter13_b_0_5",
    x: "443.962",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter14_b_0_5",
    x: "480.601",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter15_b_0_5",
    x: "517.241",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter16_b_0_5",
    x: "553.88",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter17_b_0_5",
    x: "590.522",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter18_b_0_5",
    x: "627.161",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter19_b_0_5",
    x: "663.801",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter20_b_0_5",
    x: "56.9997",
    y: "111.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter21_b_0_5",
    x: "56.9997",
    y: "147.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter22_b_0_5",
    x: "56.9997",
    y: "184.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter23_b_0_5",
    x: "56.9997",
    y: "221.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter24_b_0_5",
    x: "56.9997",
    y: "257.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter25_b_0_5",
    x: "56.9997",
    y: "294.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter26_b_0_5",
    x: "56.9997",
    y: "331.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter27_b_0_5",
    x: "56.9997",
    y: "367.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter28_b_0_5",
    x: "56.9997",
    y: "404.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter29_b_0_5",
    x: "56.9997",
    y: "440.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter30_b_0_5",
    x: "56.9997",
    y: "477.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter31_b_0_5",
    x: "56.9997",
    y: "514.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter32_b_0_5",
    x: "56.9997",
    y: "550.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter33_b_0_5",
    x: "56.9997",
    y: "587.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter34_b_0_5",
    x: "56.9997",
    y: "624.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter35_b_0_5",
    x: "56.9997",
    y: "660.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter36_d_0_5",
    x: "506.166",
    y: "128.858",
    width: "204.18",
    height: "320.185",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React35.createElement("feOffset", {
    dy: "59.8751"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    stdDeviation: "16.1202"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0 0.420941 0 0 0 0.15 0"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter37_d_0_5",
    x: "161.828",
    y: "186.003",
    width: "484.192",
    height: "534.005",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React35.createElement("feOffset", {
    dy: "130"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    stdDeviation: "35"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.388235 0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0.1 0"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter38_d_0_5",
    x: "391.913",
    y: "438.502",
    width: "323.123",
    height: "379.16",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React35.createElement("feOffset", {
    dy: "130"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    stdDeviation: "25"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React35.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.436157 0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0.05 0"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter39_b_0_5",
    x: "437.913",
    y: "435.685",
    width: "155.234",
    height: "205.976",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "2"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter40_b_0_5",
    x: "480.647",
    y: "434.502",
    width: "188.389",
    height: "94.5312",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "2"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter41_b_0_5",
    x: "96.9309",
    y: "380.493",
    width: "224.819",
    height: "212.237",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "12.0513"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("filter", {
    id: "filter42_b_0_5",
    x: "101.749",
    y: "368.442",
    width: "224.819",
    height: "212.237",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React35.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React35.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "12.0513"
  }), /* @__PURE__ */ React35.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React35.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React35.createElement("radialGradient", {
    id: "paint0_radial_0_5",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(699.541 573.543) rotate(42.9865) scale(106.599)"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FFA59E",
    stopOpacity: "0.31"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#7D8AF3"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint1_linear_0_5",
    x1: "689.242",
    y1: "568.541",
    x2: "784.876",
    y2: "640.928",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFB775",
    stopOpacity: "0.956667"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint2_linear_0_5",
    x1: "243.22",
    y1: "702.335",
    x2: "261.012",
    y2: "758.127",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#BBFA96",
    stopOpacity: "0.65"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#3EA692"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint3_linear_0_5",
    x1: "220.376",
    y1: "726.058",
    x2: "260.133",
    y2: "793.052",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FFF0B9"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#288D7F"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint4_linear_0_5",
    x1: "126.489",
    y1: "116.043",
    x2: "104.511",
    y2: "-9.29053",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FF68B1"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFCF87"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint5_linear_0_5",
    x1: "399.5",
    y1: "44",
    x2: "711.128",
    y2: "739.507",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#F6B1A6"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#7E8AF3"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint6_linear_0_5",
    x1: "658.007",
    y1: "188.28",
    x2: "611.979",
    y2: "168.956",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#278C7E"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#7CEBCA"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint7_linear_0_5",
    x1: "738.192",
    y1: "184.615",
    x2: "670.9",
    y2: "219.919",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FFE895"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#A5FF96"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint8_linear_0_5",
    x1: "658.38",
    y1: "137.374",
    x2: "653.573",
    y2: "152.954",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#3BBA7F"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "white"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint9_linear_0_5",
    x1: "247.506",
    y1: "359.458",
    x2: "483.525",
    y2: "495.372",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#A96389"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#BD92EA"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint10_linear_0_5",
    x1: "481.16",
    y1: "229.016",
    x2: "393.436",
    y2: "377.843",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#5049B8"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#846CB2"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint11_linear_0_5",
    x1: "551.801",
    y1: "236.605",
    x2: "274.863",
    y2: "437.667",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#6684F9"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "0.504278",
    stopColor: "#E3A2D8"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFB989"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint12_linear_0_5",
    x1: "522.567",
    y1: "233.341",
    x2: "446.689",
    y2: "436.806",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#8572FF"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "white"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint13_linear_0_5",
    x1: "498.571",
    y1: "607.275",
    x2: "537.154",
    y2: "514.651",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FFB7A0"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#F6DFA4"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint14_linear_0_5",
    x1: "580.702",
    y1: "644.043",
    x2: "617.418",
    y2: "489.018",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FF68B1"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFCF87"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint15_linear_0_5",
    x1: "859.906",
    y1: "660.963",
    x2: "576.425",
    y2: "457.071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FE9535"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFF9BE"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint16_linear_0_5",
    x1: "183.454",
    y1: "202.477",
    x2: "242.399",
    y2: "264.964",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FFBC6C"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFD0D3"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint17_linear_0_5",
    x1: "494.751",
    y1: "-76.7657",
    x2: "180.089",
    y2: "213.639",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", {
    stopColor: "#FE9535"
  }), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#FFF9BE"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint18_linear_0_5",
    x1: "187.159",
    y1: "558.641",
    x2: "238.667",
    y2: "410.702",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", null), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#BDD7FF",
    stopOpacity: "0.13"
  })), /* @__PURE__ */ React35.createElement("linearGradient", {
    id: "paint19_linear_0_5",
    x1: "209.239",
    y1: "557.087",
    x2: "261.376",
    y2: "401.068",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React35.createElement("stop", null), /* @__PURE__ */ React35.createElement("stop", {
    offset: "1",
    stopColor: "#BDD7FF",
    stopOpacity: "0.13"
  }))));
};
var BlogIndexDecoration_default = BlogIndexDecoration;

// app/components/Blog/SearchBarSection.tsx
var SearchBarSection = (props) => {
  return /* @__PURE__ */ React36.createElement("div", {
    className: "BlogPage__Header__Wrapper"
  }, /* @__PURE__ */ React36.createElement("div", {
    className: "custom2:col-span-3 sm:col-span-2 "
  }, /* @__PURE__ */ React36.createElement("p", {
    className: "BlogPage__SubHeader mb-5 text-5xl font-medium leading-snug"
  }, "Case Studies und Blog Beitr\xE4ge von Devato."), /* @__PURE__ */ React36.createElement("p", {
    className: "BlogPage__SubHeader mb-10 leading-normal text-post-bodyText text-2xl font-normal"
  }, "Wir teilen unsere Erfahrungen mit neuen Technologien, komplexen Business Cases und einzigartigen Shops."), /* @__PURE__ */ React36.createElement("div", {
    className: "SearchBar__InputWrapper"
  }, /* @__PURE__ */ React36.createElement("input", {
    type: "text",
    name: "Search blog posts",
    id: "blog-post-search-bar",
    value: props.search,
    onChange: (e) => {
      props.setSearch(e.target.value);
    },
    className: "SearchBar__Input",
    placeholder: "Search posts"
  }), /* @__PURE__ */ React36.createElement("div", {
    className: "SearchBar__Icon"
  }, /* @__PURE__ */ React36.createElement("span", {
    className: "mr-2"
  }, /* @__PURE__ */ React36.createElement(import_outline.DocumentTextIcon, {
    className: "h-5 w-5"
  })), /* @__PURE__ */ React36.createElement("p", {
    className: "text-sm opacity-80"
  }, props.count)))), /* @__PURE__ */ React36.createElement(BlogIndexDecoration_default, null));
};
var SearchBarSection_default = SearchBarSection;

// app/components/Blog/TagsSection.tsx
init_react();
var React37 = __toESM(require("react"));
var TagsSection = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React37.createElement("div", {
    className: "Tags__Wrapper mt-16 md:mt-32 mb-16 text-blog-lgText"
  }, /* @__PURE__ */ React37.createElement("p", {
    className: "BlogPage__SubHeader text-xl mb-4 font-bold"
  }, "Blog nach Themen durchsuchen"), /* @__PURE__ */ React37.createElement("div", {
    className: "tags-wrapper flex flex-row flex-wrap"
  }, props.tags.map((tag) => /* @__PURE__ */ React37.createElement(TagBadge2, {
    key: tag.sys.id,
    tag: tag.name,
    tagId: tag.sys.id,
    theme,
    selected: props.selectedTags.has(tag.sys.id),
    onClick: () => {
      props.onTagSelect(tag.sys.id);
    },
    disabled: !props.availableTags.has(tag.sys.id)
  }))));
};
var TagsSection_default = TagsSection;
var TagBadge2 = (props) => {
  const selectedClassName = props.theme === "dark" /* DARK */ ? "bg-white text-black" : "bg-black text-white";
  const disabledClassName = "opacity-25";
  return /* @__PURE__ */ React37.createElement("button", {
    name: "Filter for" + props.tag,
    "aria-label": props.tag,
    className: `mb-4 mr-4 h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition flex ${props.selected ? selectedClassName : "bg-blog-tagBg"} ${props.disabled ? disabledClassName : "focus-ring"}`,
    onClick: () => props.onClick(props.tagId),
    disabled: props.disabled
  }, /* @__PURE__ */ React37.createElement("span", {
    className: "text-lg"
  }, "#" + props.tag));
};

// app/components/Blog/Blog.css
var Blog_default = "/build/_assets/Blog-PYOP7LTU.css";

// route:/Users/flo/Development/Webpage-1/app/routes/blog/index.tsx
var import_react_ga = __toESM(require("react-ga"));
var loader4 = getPostsAndTags;
var links7 = () => {
  return [
    { rel: "stylesheet", href: Blog_default },
    {
      rel: "canonical",
      href: "https://www.devato.de/blog"
    }
  ];
};
var meta2 = () => {
  return {
    title: BLOG_WEBSITE_NAME,
    description: BLOG_DESCRIPTION,
    keywords: BLOG_KEYWORDS,
    image: BLOG_IMAGE_URL,
    url: BLOG_URL,
    "twitter:title": BLOG_WEBSITE_NAME,
    "twitter:description": BLOG_DESCRIPTION,
    "twitter:alt": BLOG_WEBSITE_NAME,
    "twitter:image": BLOG_IMAGE_URL,
    "twitter:card": TWITTER_CARD_TYPE,
    "twitter:creator": TWITTER_ACC,
    "twitter:site": TWITTER_ACC,
    "og:url": BLOG_URL,
    "og:image": BLOG_IMAGE_URL,
    "og:title": BLOG_WEBSITE_NAME,
    "og:description": BLOG_DESCRIPTION,
    "og:image:width": IMAGE_WIDTH,
    "og:image:height": IMAGE_HEIGHT,
    author: AUTHOR,
    "theme-color": "#212529"
  };
};
var TRACKING_ID = "UA-223958752-2";
import_react_ga.default.initialize(TRACKING_ID);
function BlogPage() {
  const { blogPosts, contentfulTags } = (0, import_remix9.useLoaderData)();
  const [searchInput, setSearchInput] = React38.useState("");
  const postCount = Object.keys(blogPosts.items).length;
  const [selectedTagIds, setSelectedTagIds] = React38.useState(/* @__PURE__ */ new Set([]));
  React38.useEffect(() => {
    import_react_ga.default.pageview(window.location.pathname + window.location.search);
  }, []);
  const updateSelectedTagIds = (tagId) => {
    setSelectedTagIds((prev) => {
      const clone = new Set(prev);
      const tagIdAlreadyIncluded = clone.has(tagId);
      if (tagIdAlreadyIncluded) {
        clone.delete(tagId);
        return clone;
      } else {
        clone.add(tagId);
        return clone;
      }
    });
  };
  const selectedTagIdsAsArray = [...selectedTagIds];
  const filteredBlogPostsByTags = selectedTagIds.size === 0 ? blogPosts.items : blogPosts.items.filter((post) => {
    return selectedTagIdsAsArray.every((selectedTag) => {
      return post.metadata.tags.some((tag) => tag.sys.id === selectedTag);
    });
  });
  const availableTagIds = filteredBlogPostsByTags.reduce((acc, cur) => {
    const tags2 = cur.metadata.tags;
    tags2.forEach((tag) => {
      const alreadyHasThisTagId = acc.has(tag.sys.id);
      if (alreadyHasThisTagId) {
        return;
      }
      acc.add(tag.sys.id);
    });
    return acc;
  }, /* @__PURE__ */ new Set([]));
  const searchInputRegex = new RegExp(escapeSearchTermForRegularExpressionConstruction(searchInput), "i");
  const filteredBlogPostsByName = searchInput === "" ? filteredBlogPostsByTags : filteredBlogPostsByTags.filter((post) => {
    return searchInputRegex.test(post.fields.blogPostTitle);
  });
  return /* @__PURE__ */ React38.createElement("div", {
    className: fixedWidthLayoutClasses
  }, /* @__PURE__ */ React38.createElement(SearchBarSection_default, {
    search: searchInput,
    setSearch: setSearchInput,
    count: postCount
  }), /* @__PURE__ */ React38.createElement(TagsSection_default, {
    tags: contentfulTags.items,
    selectedTags: selectedTagIds,
    onTagSelect: updateSelectedTagIds,
    availableTags: availableTagIds
  }), /* @__PURE__ */ React38.createElement("div", {
    className: "spacer-div mt-20 relative"
  }), /* @__PURE__ */ React38.createElement("img", {
    src: "/images/blobs/Ellipse 3.svg",
    title: "Decorative Blob",
    alt: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-3 absolute hidden lg:block w-96 lg:translate-x-[-20rem] lg:translate-y-[-10rem] xl:translate-y-[-20rem] xl:translate-x-[-28rem] 2xl:translate-x-[-30rem] 3xl:translate-x-[-40rem] z-[-99]"
  }), /* @__PURE__ */ React38.createElement("img", {
    src: "/images/blobs/Pinky.svg",
    alt: "Decorative Blob",
    title: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-4 absolute w-44 hidden lg:block lg:translate-x-[10rem] lg:translate-y-[-7rem] top-0 xl:translate-y-[-10rem] xl:translate-x-[14rem] 2xl:translate-x-[18rem] 3xl:translate-x-[25rem] right-0 z-[-99]"
  }), /* @__PURE__ */ React38.createElement("img", {
    src: "/images/blobs/ellipse2.svg",
    alt: "Decorative Blob",
    title: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-2 absolute w-72 bottom-0 hidden lg:block lg:translate-x-[18rem] lg:translate-y-[-15rem] xl:translate-x-[15rem] 2xl:translate-x-[25rem] xl:translate-y-[-10rem] 3xl:translate-x-[40rem] right-0 z-[-99]"
  }), filteredBlogPostsByName.length > 0 ? /* @__PURE__ */ React38.createElement("ul", {
    className: "BlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none"
  }, filteredBlogPostsByName.map((blogPost) => {
    return /* @__PURE__ */ React38.createElement("li", {
      key: blogPost.sys.id
    }, /* @__PURE__ */ React38.createElement(BlogPostCard_default, {
      blogPost
    }));
  })) : /* @__PURE__ */ React38.createElement("div", {
    className: "flex items-center m-auto flex-row justify-center"
  }, /* @__PURE__ */ React38.createElement("p", {
    className: "text-3xl text-blog-lgText mr-10"
  }, "Oh no.. there is some problems loading blog posts :("), /* @__PURE__ */ React38.createElement("img", {
    src: "/images/cry2.png",
    alt: "Crying illustration",
    title: "Crying illustration",
    className: "w-44"
  })));
}
var escapeSearchTermForRegularExpressionConstruction = (str) => {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};

// route:/Users/flo/Development/Webpage-1/app/routes/agb/index.tsx
var agb_exports = {};
__export(agb_exports, {
  default: () => agb_default
});
init_react();
var Index3 = () => {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "block p-6 rounded-lg shadow-lg bg-white max-w"
  }, /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.'), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.'), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.'), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.'), /* @__PURE__ */ React.createElement("h5", {
    className: "text-gray-900 text-xl leading-tight font-medium mb-2"
  }, "Datenschutz"), /* @__PURE__ */ React.createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, 'Soweit nachstehend keine anderen Angaben gemacht werden, ist die Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich oder vertraglich vorgeschrieben, noch f\xFCr einen Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine Folgen. Dies gilt nur soweit bei den nachfolgenden Verarbeitungsvorg\xE4ngen keine anderweitige Angabe gemacht wird. "Personenbezogene Daten" sind alle Informationen, die sich auf eine identifizierte oder identifizierbare nat\xFCrliche Person beziehen.')));
};
var agb_default = Index3;

// route:/Users/flo/Development/Webpage-1/app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  action: () => action2,
  default: () => routes_default,
  links: () => links15,
  meta: () => meta3
});
init_react();
var import_remix12 = __toESM(require_remix());

// app/components/Decoration.tsx
init_react();
var React40 = __toESM(require("react"));

// app/hooks/useWasInViewAtLeastOnce.ts
init_react();
var React39 = __toESM(require("react"));
var import_react_intersection_observer = require("react-intersection-observer");
var useWasInViewAtLeastOnce = (options2) => {
  const [wasInViewAtLeastOnce, setWasInViewAtLeastOnce] = React39.useState(false);
  const { ref: setRef, inView } = (0, import_react_intersection_observer.useInView)(options2);
  React39.useEffect(() => {
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
  return /* @__PURE__ */ React40.createElement("div", {
    className: `elc-container h-full lg:text-4xl `,
    ref: setRef
  }, /* @__PURE__ */ React40.createElement("div", {
    className: wrapperClass
  }, /* @__PURE__ */ React40.createElement("div", {
    className: contentClass
  }, "Einzigartige Ideen erfordern"), /* @__PURE__ */ React40.createElement("div", {
    className: contentClass
  }, "kompromisslose Umsetzung."), /* @__PURE__ */ React40.createElement("div", {
    className: "spacer-div mb-10 sm:mb-5"
  })));
};
var Portfolio = () => {
  const word = "Technologien";
  return /* @__PURE__ */ React40.createElement("section", {
    "aria-label": "Floating Logo",
    className: "portfolio-text font-extrabold w-full text-5xl xxs:text-6xl xs:text-7xl sm:text-8xl md:text-9xl lg:text-[9rem] text-textSmColor xs:mt-44 sm:mt-96"
  }, /* @__PURE__ */ React40.createElement("div", {
    className: "tilt flex-center uppercase"
  }, word.split("").map((letter, index) => {
    return /* @__PURE__ */ React40.createElement("span", {
      key: index
    }, letter);
  })));
};
var GradientBackground3 = () => {
  return /* @__PURE__ */ React40.createElement("svg", {
    viewBox: "0 0 100 100",
    preserveAspectRatio: "xMidYMid slice",
    className: "gradient-bg gradient-bg-3 absolute mix-blend-screen overflow-visible"
  }, /* @__PURE__ */ React40.createElement("defs", null, /* @__PURE__ */ React40.createElement("radialGradient", {
    id: "Gradient1",
    cx: "50%",
    cy: "50%",
    fx: "10%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "fx",
    dur: "34s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "0%",
    stopColor: "#00aeef"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "100%",
    stopColor: "#00aeef00"
  })), /* @__PURE__ */ React40.createElement("radialGradient", {
    id: "Gradient2",
    cx: "50%",
    cy: "50%",
    fx: "10%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "fx",
    dur: "23.5s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "0%",
    stopColor: "#ec008c"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "100%",
    stopColor: "#ec008c00"
  })), /* @__PURE__ */ React40.createElement("radialGradient", {
    id: "Gradient3",
    cx: "50%",
    cy: "50%",
    fx: "50%",
    fy: "50%",
    r: ".5"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "fx",
    dur: "21.5s",
    values: "0%;10%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "0%",
    stopColor: "#fff200"
  }), /* @__PURE__ */ React40.createElement("stop", {
    offset: "100%",
    stopColor: "#fff20000"
  }))), /* @__PURE__ */ React40.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient1)"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "x",
    dur: "20s",
    values: "25%;0%;25%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "y",
    dur: "21s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "17s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React40.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient2)"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "x",
    dur: "23s",
    values: "-25%;0%;-25%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "y",
    dur: "24s",
    values: "0%;50%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 50 50",
    to: "360 50 50",
    dur: "18s",
    repeatCount: "indefinite"
  })), /* @__PURE__ */ React40.createElement("rect", {
    x: "0",
    y: "0",
    width: "100%",
    height: "100%",
    fill: "url(#Gradient3)"
  }, /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "x",
    dur: "25s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animate", {
    attributeName: "y",
    dur: "26s",
    values: "0%;25%;0%",
    repeatCount: "indefinite"
  }), /* @__PURE__ */ React40.createElement("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "360 50 50",
    to: "0 50 50",
    dur: "19s",
    repeatCount: "indefinite"
  })));
};
var Globe = () => {
  return /* @__PURE__ */ React40.createElement("div", {
    className: "globe"
  }, /* @__PURE__ */ React40.createElement("svg", {
    width: "547",
    height: "200",
    viewBox: "0 0 547 200",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React40.createElement("path", {
    d: "M120.95 45.907l-1.18 1.573-.784.786-1.57.865-.236.71s-.628.63-.55 1.022c.08.393.08 1.1.08 1.1s-1.1 1.024-1.57 1.338c-.472.314-1.1 1.022-1.1 1.022s-.393.473-.628.63c-.236.157-.628.63-.942 1.1-.315.473-.63.787-.786 1.023-.157.236-.628.786-.863 1.652-.235.865-.863 1.887-.863 1.887l-.157.393c.078 1.338.078 1.574.235 2.046.157.47.315.314.157 1.337-.157 1.022-.157 1.415-.314 1.887s-.628 1.337-.784 1.73c-.158.394.314 1.1.314 1.1s.235 1.024.078 1.26c-.157.236.08.708.08.708s.94.55 1.255.865c.315.315.865.787.943 1.023.08.236.707 1.337.785 1.573.08.236.707 1.1.864 1.337.157.236.942 1.1.942 1.1s1.02.787 1.257 1.102c.236.314.943.472 1.178.707.236.236.785.157 1.1.394.314.236.942-.158 1.256 0 .314.157 1.178-.157 1.413-.315.236-.156.785-.706 1.178-.47.392.235.628 0 .942.078.314.08.785-.314 1.1-.314.313 0 1.098-.315 1.334-.315s1.022-.474 1.336-.474c.314 0 .706-.313 1.1-.156.39.156.234-.315.94-.08.708.236.943 0 1.18.236.234.237.55 0 .784.316.236.314.628.55.707.865.078.314.55.63.55.63l.47.077s.63-.47.785-.156c.157.314.864.236.864.236l.707.786.235.315s.472 1.258.393 1.73c-.078.472-.078 1.494-.313 1.73-.236.236-.393 1.26-.393 1.26s-.314.313.393.942c.707.63 1.178 1.18 1.413 1.494.236.316.864 1.182.942 1.732.08.55.236.865.55 1.573.314.708.707.786.785 1.573.08.787.236.787.157 1.337-.078.55-.314.63-.078 1.022.235.394.55 1.102.47 1.338-.078.235-.235 1.258-.235 1.258l-.156.472-.706 1.338-.472.707c-.157.55-.47 1.1-.392 1.887.078.787-.392.787.235 1.573.628.787.94 1.652 1.334 2.36.393.708.628 1.416.707 1.887.08.472.393.63.55 1.26.157.628.236.942.236 1.336 0 .393-.08 1.416.08 1.652.155.236.234.944.313 1.258.077.315-.237.394.234.944.47.55.785.865 1.1 1.26.313.392.235.235.47.785.236.55.55.866.63 1.337.077.47.155 1.65.39 2.2.237.552.55 1.103.55 1.103s.865.55 1.18.472c.312-.08.94-.786 1.412-.55.47.235.864 0 1.256 0 .393 0 .785-.473 1.178-.473.393 0 .942-.63 1.257-.472.314.157.706-.158 1.098-.55.393-.393.63-.708 1.335-1.337.707-.63.628-.63 1.1-1.023.47-.393.942-1.26 1.49-1.416.55-.157.708-.707.865-1.1.157-.394.235-.63.47-.945.237-.315.08.08.472-.944.393-1.023.865-1.416 1.257-1.652.392-.236.628-.708.863-.787.236-.08.63.236.472-.472-.158-.707 0-1.73-.158-1.966-.157-.237-.393.55-.314-.63.08-1.18.942-2.36.942-2.36s1.178-1.494 1.57-1.73c.393-.236.47-.472 1.02-.787.55-.314 1.728-1.1 1.728-1.494 0-.394.472-1.417.472-1.653s0-.472-.157-1.81c-.157-1.336.157-1.02-.314-2.28-.472-1.258-.55-2.83-.865-3.224-.314-.394-.157-1.417-.157-1.73 0-.315.55-1.102.785-1.416.236-.315 1.256-1.574 1.256-1.574s1.57-1.808 2.12-2.673c.55-.866 1.098-1.652 1.49-1.966.394-.315 1.336-1.024 1.885-1.81.55-.786 1.65-2.28 1.728-2.517.078-.235.706-1.022.706-1.022s.863-1.023 1.02-1.573c.157-.55.942-3.618.785-3.46-.157.157-1.1.314-1.413.392-.314.08.47.393-1.806.237-2.277-.157-3.454.236-3.454.236-.708-.157-1.257.63-1.493-.472-.236-1.1-.394-1.73-.864-2.516-.47-.787-.786-1.1-1.492-2.124-.706-1.022-.628-.55-1.257-1.337-.627-.786-.785-.55-1.177-1.573-.393-1.022-.707-.63-1.178-2.045-.47-1.417-.785-1.574-1.02-2.36-.236-.787-.55-1.023-.707-1.73-.157-.71-1.963-4.327-2.2-4.563-.234-.235-.627-1.494-.548-1.258.078.235 1.178 1.02 1.178 1.02s.627-.235.863-.235 1.178.866 1.178 1.18c0 .315 1.65 1.81 2.042 2.91.392 1.1.864 1.888.942 2.202.078.315.864 1.574 1.178 2.046.313.472 1.334 1.415 1.49 1.887.158.472 1.65 2.045 1.65 3.068 0 1.022.706 2.36.785 2.673.08.316 1.492.71 1.492.71l1.885-.472s2.826-1.81 3.14-1.81c.314 0 2.827-1.18 2.827-1.18s1.02-.943 1.727-1.493c.707-.55 1.492-1.573 1.65-2.045.156-.473.47-.55 1.098-1.26.628-.707 1.492-1.415.942-1.887-.55-.47-.864-.314-1.648-1.1-.786-.787-.707-.63-1.257-1.653-.55-1.022.078-2.202-1.1-1.022-1.178 1.18-.707 1.495-1.885 1.73-1.177.237-1.65 1.023-2.198.237-.55-.787-1.1-.315-1.414-1.495-.314-1.18-.55-1.26-.628-1.73-.078-.472 0-.472-.628-1.652s-.157-2.99.236-1.966c.392 1.022 1.02 1.18 2.04 1.887 1.022.707 1.493 1.258 2.435 1.337.942.078 1.728 0 1.885.156.157.158.313-.078.706.08.392.157.548-.236.706.392.157.63 1.02.708 1.413 1.1.392.394.392.237 1.413.394 1.02.157 2.434.157 2.434.157l1.49-.08 1.73.158s1.256.708 1.57.708c.313 0 .392.865 1.177 1.337s.942.55 1.413 1.1c.472.552.393.788 1.02 1.338.63.55 1.65-.078 1.807-.314.157-.236.942-.63.786 0-.158.63.784.393.55 1.888-.237 1.494-.394 1.1 0 2.123.39 1.023 2.118 4.17 2.197 5.113.08.943.55.63.628 1.495.08.864.55 1.18.55 1.808 0 .63.55.787.628 1.26.08.472.942.078 1.178 0 .237-.08 1.335-1.102 1.335-1.102s.472-.156.393-.943c-.08-.786 0-.63 0-1.81 0-1.18-.47-1.18-.235-2.358.235-1.18.863-1.888 1.02-2.438.157-.552.786-1.496 1.1-1.575.313-.078 2.04-.943 2.434-1.494.392-.55 1.02-1.18 1.65-1.808.627-.63 1.726-1.415 1.962-1.18.234.236.156.158.548.158.393 0 1.1.315 1.65.393.55.08 1.648 1.416 1.884 2.124.235.708.078.55.942 1.573.864 1.022 1.65.393 1.65 1.65 0 1.26 0 1.18.392 1.653.392.472.863-.865 1.334-.707.47.157.55-.158.942 1.1.392 1.26.628 1.26.707 2.518.077 1.258-.08.078-.08 1.1 0 1.023-.08 1.102.08 2.045.155.944.705 1.258.627 1.415 0 0 .47-1.337.313-2.28-.156-.944 0-2.28.393-2.674.393-.393.786-.786 1.1.237.314 1.022.47.236 1.177 1.415.707 1.18 1.335.944 1.413 1.494.08.55.472.63 1.02 1.1.55.474 1.022-.077 1.65-.55.63-.47 2.355-2.2 2.435-2.91.078-.707.784-.55-.472-2.358-1.257-1.81-1.257-2.44-2.59-3.54-1.335-1.1-2.12-1.18-1.1-2.595 1.02-1.416 1.492-2.36 2.12-1.966.628.393 1.727.314 1.727 1.887s-.314 3.304.785 1.416c1.1-1.888 1.65-2.99 1.335-2.674-.314.315.706-.63.706-.63s.078-.707 1.413-1.02c1.335-.317 1.727-.473 2.2-.71.47-.236 1.805-1.81 2.04-2.516.235-.708.864-1.967.707-2.517-.157-.55-.943-3.224-1.1-3.146-.156.08-.078.08-1.098-1.022-1.022-1.1-1.728-1.888-1.885-2.36-.157-.472-.55-.55-.08-1.18.473-.63.708-.55.787-1.1.078-.55.706-1.023-.472-.63-1.177.393-.314.158-1.335.08-1.02-.08-3.69.55-2.354-1.102 1.334-1.652 1.726-2.674 1.962-2.674s1.414-1.338 1.492-.08c.078 1.26.55.944.628 1.73.08.787 1.65-.864 1.65-.864s.548.157.94.55c.393.393.393 1.652.393 1.652s-.313-.394.55.236c.864.63 1.806.314 1.806 1.65 0 1.338 0 1.417.55 1.732.55.314 1.098.157 1.57-.236.47-.393 1.256-1.81 1.256-1.81s.08-.55-1.178-1.336c-1.256-.787-2.04-1.337-2.51-1.73-.473-.394-.316-1.573.155-2.046.472-.472.707-.708.55-1.337-.158-.628.235-1.1 1.413-1.02 1.178.078 1.413-.08 1.413-.08s.236.157.236-.315c0-.47 1.49-2.674 1.098-2.674-.393 0 .08-.55-.157-1.414-.235-.866.786-2.202-.077-2.832-.864-.63-1.1-.944-1.65-1.887-.55-.945-.47-1.1-2.512-1.338-2.04-.237-2.982.47-3.454-.158-.47-.63-.706.944-1.02-.944-.314-1.887.47-3.146.47-3.146s1.257-.786 1.57-1.337c.315-.55 1.57-.787 2.593-.393 1.02.393 2.51.314 3.768.55 1.256.236 1.177 1.023 1.805 0 .628-1.022 0-1.494.47-2.044.473-.55 1.022-1.416 1.415-.866.392.55 1.178 1.1 1.806.393.628-.707.864-.786.864-.786l.313.314s.708-.394.708.314.707 1.495.314 2.045c-.393.55-.942.472-.942 1.81 0 1.337 0 1.1.863 2.202.864 1.1 1.414.157 1.57 1.337.158 1.18.314.944 1.18 1.73.862.786.705.786 1.333 1.258.63.472.943.945.943.158 0-.787.077-1.18 0-1.888-.08-.707.627-1.258.155-2.438-.47-1.18-.078-1.1-1.02-1.966-.943-.865-1.57.157-1.884-1.1-.314-1.26 1.492-1.81 1.964-1.968.47-.156 1.177-1.1 1.334-.47.157.628-1.178 2.91 1.1.47 2.276-2.438 1.256-1.415 1.256-1.415s1.177-.157 1.413 0c.235.157.864-.708.628-.63-.236.08-2.512-1.258-2.512-1.258l-1.65-.943s.55-.394.943-.315c.393.08.472-.786.864-.865.393-.08 3.062.55 3.612.865.55.315 2.512.393 2.276.236-.235-.157-1.49-1.1-1.57-1.416-.078-.314-2.826-.944-3.69-.865-.864.078-1.648.314-2.355.078-.707-.236-1.727-.865-2.277-.865s-7.46-1.337-7.773-1.258c-.314.078-.785 1.573-1.02 1.337-.236-.236-.63-.236-1.73-.55-1.097-.315-2.59-.552-4.553-.71-1.962-.156-3.297.16-3.846-.47-.55-.63-1.727-.394-3.062-.473-1.335-.077-2.905 0-3.612 0-.707 0-2.355-.077-2.748-.156-.393-.08-.864-.63-1.335-.708-.47-.08-.393-.235-1.335-.393-.942-.157-.863-1.18-1.177-.315-.314.866-.158.63-.628.944-.472.315-.943.944-1.257.944-.314 0-1.57.08-1.806-.08-.236-.156-.628-.313-1.413-.313s-.785.078-1.805-.08c-1.02-.156-1.806-.078-2.748-.55-.943-.47-.943-.786-1.728-.707-.785.08-.785-.158-1.885-.158s-2.434.63-3.14.708c-.707.08-2.277-.08-2.827-.314-.55-.236-.707-.787-2.748-.55-2.042.235-3.22.235-2.827-.394.393-.63.864-1.26 1.1-1.337.235-.078.784-.47.39-.628-.39-.158-.784-.393-1.725-.472-.943-.08-.865.314-2.278.157s.786-.55-2.12-.472c-2.904.08-3.61.315-3.925.315-.314 0-.707-.63-1.492.314s-1.885 1.494-3.455 1.573c-1.57.08-1.65-.157-3.14.393-1.492.55-2.434-.157-2.12 1.1.314 1.26.707 1.732.707 1.968 0 .235-.707 1.81-1.57.865-.865-.944-2.435-4.64-1.728-2.124.706 2.516 2.276 3.38.785 3.774-1.492.394-1.335-.157-1.57-.314-.236-.158 0-1.26-.08-1.888-.078-.63-.235-1.022-.55-1.337-.312-.315-.234-.787-.862-.944-.63-.156-.08-.47-1.1-.47s-1.884-.63-1.648.786c.235 1.415.47.472 1.098 1.81.628 1.336 1.806.392.943 1.336-.864.943-3.14.63-3.69.236-.55-.394-.393.157-1.414-.55-1.022-.71-.707-1.26-1.885-.71-1.178.552-1.57 1.574-2.042 1.18-.47-.393-1.57.55-1.962.08-.392-.472-1.963-.472-2.276 0-.315.472-1.257.393-2.59 1.022-1.336.63-.944.08-2.593 1.416-1.648 1.337-2.59 2.438-3.14 1.573-.55-.866-3.533-2.36-2.355-2.597 1.178-.236 1.728-.708 2.356-.157.63.55 1.65.393 1.806 0 .157-.394.865-.787-.078-1.258-.942-.473-1.02-.158-2.512-.708-1.492-.55 0-.394-2.042-.708-2.04-.315-2.905-.472-3.455-.63-.55-.157-1.336 0-2.12-.078-.786-.08-1.335-.236-2.042-.157-.706.078-1.1-.08-2.04.63-.944.707-1.65 1.022-2.28 1.572-.627.55-2.275 1.65-2.746 2.044-.472.393-2.12 1.652-2.278 2.124-.157.472.157.865-.47 1.18-.63.314-1.257.314-1.728.392-.472.08 0-.707-.472.08-.47.786-.314 3.617.08 3.224.39-.394.156-1.652 1.883-.472 1.728 1.18 2.827 1.022 2.748 2.123-.078 1.1 1.178 1.023 1.335 1.26.157.235.942-.316.942-.316s1.728-1.102 1.728-1.652c0-.55 1.1-1.81 1.1-1.81s-.787-.392-.787-1.18c0-.785.236-1.022.393-1.808.157-.786-.864 0 1.492-1.495 2.355-1.494 2.512-.47 2.512-.47s.314.313-.08.785c-.39.472-1.098 1.73-1.255 1.888-.157.157.707 1.416 1.1 1.416.392 0 1.177-.315 1.648-.237.472.08 1.257-.235 1.492-.078.236.156.785.628.392 1.022-.392.393-1.256.864-1.884.708-.628-.157-1.57-1.26-1.02.314.55 1.573-.08 1.966-.55 1.888-.47-.08-1.492-.865-1.335.314.157 1.18-1.02 1.966-1.256 1.966s-.707-.078-.707-.078-.707-.08-1.1-.08c-.39 0-1.177.394-1.412.71-.236.313-.55.078-.942.078-.392 0 0-.472-.785-.63-.784-.157-1.256-.314-1.727 0-.47.315-1.177.472-1.492.236-.314-.236.158-.787-.47-.47-.63.313-1.1 1.178-1.336 1.257-.235.078.707 0-.235.078-.942.08-1.335.316-1.806.473-.472.157.156 1.1-.708 1.415-.863.316-.235-.392-1.1.316-.863.708-1.02 1.337-1.333 1.415-.316.08-.237.237-.944.316-.706.08-.628.157-1.02.236-.393.078.078.236-.786.078-.864-.157-1.49.158-1.335.473.157.314 3.063 1.18.864 1.1-2.2-.078-1.492.315-1.02.63.47.314.705.63.94.708.237.08.63 1.023.63 1.023s.627-.08.234.472c-.392.55.157.708-.235 1.416-.394.71-.394.237-.708.394-.314.157-.785.708-1.65.236-.863-.472-1.49-.708-2.51-.786-1.022-.08-.316-.236-1.022.314-.707.55-.864 1.18-.785 1.887.08.708.157 1.652-.08 2.124-.234.47-.234.943-.078 1.65.158.71.63 1.024.63 1.024s1.098.157 1.334.236c.236.078.707-.157 1.335.235.63.394 1.257.55 1.65.08.392-.472 1.962-1.023 2.434-1.495.47-.472.784-.63.548-1.1-.235-.473.47-1.653.864-1.89.392-.234 1.256-.47 1.256-.47l.942-1.416s.785-.866 1.178-.787c.392.08 2.59.866 2.434-.157-.157-1.023.157-1.337.392-.944.236.393.864.236.864.236s.314-.157.55.08c.235.234.55 1.258 1.02 1.493.472.236.864.472 1.178.63.314.157.628 0 1.257.55.628.55 1.256.865 1.334 1.1.08.237.63.787.63.787s.548.158.39.473c-.156.314-.94 1.258-1.334 1.415-.392.157-1.413-.158-1.02.157.392.315.942.708 1.177.472.236-.237 1.727-1.81 1.727-1.81s-.078.08 0-.393c.08-.472 0-1.022.393-.787.393.237.628.55.785.237.157-.315.314-.158-.078-.394-.393-.236-1.335-1.573-1.806-1.65-.47-.08-1.65-.867-1.65-.867s-.234-.236-.783-.865c-.55-.628-.707-.47-.864-1.02-.157-.552-.63-1.26.235-1.103.864.158 1.413.708 2.2 1.18.784.472.627.63 1.334 1.1.706.473.785.945 1.334.867.55-.08 1.178.314 1.178 1.022s.157 1.494.314 1.652c.157.158.628.472.785.787.157.314.47 1.1.707 1.415.235.315.47.55.706.944.236.393.314-.08.55.08.235.156.55.077.55-.237 0-.315.078-.866.078-.866s1.1-.313.785-.47c-.315-.158-1.257-1.102-1.18-1.416.08-.315 0-.944.394-.865.392.077.785.785 1.65.156.863-.63 1.883-.944 1.57 0-.315.944.078 1.1 0 2.123-.08 1.022.314.707.863 1.258.55.55.942.63 1.335.787.392.157 1.02.08 1.65.157.627.08 1.02-.236 1.57-.078.548.157 1.805-.08 2.04.078.237.157 1.18-.314 1.257.236.077.55.392-.08.156 1.18-.235 1.258-.55 2.123-.55 2.123-.863 1.653-1.177 2.046-1.57 2.125-.392.08-.628.315-1.334.236-.707-.078-1.57 0-2.59-.235-1.022-.236-2.907.236-3.692-.236-.785-.473-1.884-.08-2.356-.63-.47-.55-1.256-.472-1.57-.787-.314-.314-.47-1.18-.47.08 0 1.258-.708 1.336-.864 1.966-.158.628.235.313-.63.234-.863-.08-1.098.394-2.354-.55-1.257-.944-1.885-.944-2.513-1.337-.628-.394-1.256.707-1.884-.55-.63-1.26-1.493-.237-1.572-1.26-.078-1.022 0-.943.08-1.572.078-.63.94-1.18.55-1.416-.394-.236-.08-.63-.63-.394s-1.334.315-1.962.55c-.63.237 1.413 0-1.65.237-3.06.236-3.925.55-3.925.55s-.235-.157-.628.158c-.392.315-.942.787-1.49.55-.55-.235-.865-.156-1.336-.077-.47.078-.785-.394-1.335 0-.548.392-1.176.55-1.412.392-.236-.16-.63-.788-.63-.788zm52.526 51.752c-.235.865-1.1 2.123-1.1 2.123l-1.57.786s-.548.47-.863.55c-.314.078-1.1.472-1.1.472s-.706-.158-.47.55c.235.708.314 1.573.235 1.81-.078.235-.078.707-.078 1.337 0 .628-.236 1.414-.628 1.57-.393.16-.786.316-.707.867.08.55.08 2.202.08 2.202l1.02 1.572s.314-.236.942-.236c.627 0 1.256-.55 1.256-.55s.707.157.628-.708c-.078-.865.316-1.888.236-2.124-.078-.236.707-1.258.707-1.494s.786-1.337.786-1.73.548-1.023.627-1.494c.078-.473.157-1.573.314-1.888.158-.314.236-.63.236-.944v-.943l-.55-1.73zm61.478 10.617c-.235.314-.392 3.697-.55 4.09-.156.393-.47 2.438-.313 2.91.158.472.393 2.202.237 2.753-.158.55.078 2.28-.315 2.202-.392-.08-.55.08-.55.315 0 .236.55.707.55.707s.943 0 1.335-.078c.393-.08 1.178-.472 1.806-.472.628 0 1.02-.473 1.57-.473s1.728-.39 2.042-.234c.314.156.785-.944 1.335-.708.55.236 1.727-.55 2.277-.55s.785-.866 1.413-.708c.628.157 1.806-.315 2.356-.08.55.237 1.413-.786 1.805 0 .394.787 1.572 1.102 1.572 1.495s-.08 1.26-.08 1.26l.943-.08s1.492-.944 1.728-.944c.235 0 .785-.785.785-.392s-.472 1.26-.628 1.65c-.157.395.156.867.156.867s.786.393.472 1.1c-.314.71.078.552 0 1.102-.08.55 0 .314.313.63.316.314.866.865 1.336.786.472-.08.628-.55 1.02-.315.394.236 1.178.08 1.414.394s-1.49 1.1 1.492-.236c2.984-1.338 3.297-1.652 3.69-2.124.394-.472.865-.944 1.178-1.26.314-.313.08-.235 1.02-.943.943-.708.943-.394 1.807-1.73.864-1.338 1.49-1.81 1.65-2.046.156-.236.47-.314.548-1.26.08-.942.707-1.808.707-2.122 0-.314.235-.786.157-1.337-.08-.55.313-1.337-.158-2.123-.47-.787.235-1.1-.47-1.416-.708-.315-1.18-.157-1.336-.708-.157-.55-.786-.472-1.02-1.966-.237-1.494-1.18-1.652-1.18-1.652s-.94-.393-.705-.55c.237-.158.315-1.26.237-1.574-.08-.314-.08-1.022-.314-1.494-.236-.472-.393-1.1-.628-1.652-.236-.55-.628-.708-.786-1.337-.158-.63-.393-.865-.472-1.022-.08-.156-.236-.943-.392-.078-.157.865-.472 2.516-.472 2.516s-.628 1.338-.864 1.73c-.235.394-.47 1.417-.863 1.338-.393-.08-.63.394-.942.314-.315-.08-.786.08-1.02-.157-.236-.236-.865-.865-1.18-.944-.313-.08-.548-.708-.784-.708-.235 0-.627-.55-.55-.866.08-.314.158-1.022.237-1.337.078-.315.55-1.023.55-1.023s0-.472-.393-.472-.47 0-1.335-.08c-.865-.078-1.1-.156-1.415-.156-.313 0 .315-.16-.55.077-.862.237-1.255.866-1.805 1.417-.55.55-.078.392-.55.55-.47.158-.39-.393-.706.472-.314.865.158 1.1-.08 1.258-.234.158-1.883-.55-1.883-.55s.394-.08.08-.472c-.314-.394-.628-.944-1.1-.708-.47.236-.864.394-1.177.787-.314.394-.314.708-.55 1.023-.235.314-.863.314-.942.63-.077.314-.077 1.1-.313 1.18-.235.078-.313-.315-.55-.394-.234-.08-.156-.71-.313-.315-.157.393-.314.314-.55.943-.235.63-.314 1.18-.55 1.26-.235.078 0 .156-.706.55-.706.393-.864.393-1.884.865s-.785.472-1.49.55c-.708.08-.866.315-1.336.394-.472.078-.785.156-1.257.63-.47.47-.862.628-1.176.707-.314.078-.63.393-.63.393zm4.632-31.067c-.313.472-1.334 1.888-1.726 1.967-.393.078-.786.472-1.1.393-.314-.08-1.02 0-1.256 1.022-.236 1.023-.628 1.573-.865 1.494-.236-.078.392 1.494-.942.866-1.335-.63-.864.55-1.02.865-.158.315.234 1.18.313 1.495.08.314.315.865.63 1.336.313.472.55 1.023 1.098.866.55-.158 2.277 0 2.277 0s.63.236 1.02.236c.393 0 .472-.157.707-.157s.707-.787.628-.866c-.078-.08-.313-.314.157-.786.472-.472 1.02-.628 1.1-1.18.078-.55-.157-.55.078-.865.236-.314.785-.235.63-.55-.16-.315.155-.236-.16-.866-.312-.63-.705-.866-.39-1.652.313-.787.628-.944.55-1.416-.08-.472.39-.63-.16-1.18-.548-.55-.784-.708-1.176-.866l-.394-.156zm15.39 7.865c.314-.078 1.413-.865 1.492.55.078 1.417.156 1.023.628 1.81.47.786.784 1.023 1.334.63.55-.394 1.178-.394 1.334-1.102.158-.708.158-.708.63-.708.47 0 .627-.078.863.237.236.314.392 0 1.413.55 1.02.55 1.884.393 2.513.944.628.55.942.472 1.806.786.863.315.47-.157 1.255.708.786.865.472 1.1.864 1.494.39.394.706-.314.548.63-.157.943-1.256 0 .393 1.336 1.65 1.338 1.886 1.574 2.435 1.967.55.393.942.865.472.865-.472 0-1.964 0-2.12-.236-.158-.236-.864-.394-1.336-.944-.47-.55-1.49-.944-1.725-1.415-.236-.473-.55-.63-.942-.63-.393 0-.785.472-1.335 1.023-.55.55-.314-.314-1.02-.08-.708.237-1.492-.078-1.886-.392-.392-.315-.313-.787-.94-.55-.63.235-1.022.078-.786-.394.235-.472.078-1.1.078-1.1s.236-.788-.313-.945c-.55-.158-.55-.708-1.1-.866-.55-.157-1.412-.55-1.412-.55s-.08 0-.314-.08c-.236-.078-.236-.078-.864-.235-.628-.16-1.1-.002-1.413-.395-.315-.393-.157-.943-.157-.943s1.256.157 0-.787l-1.257-.943s.157-.08.08-.237c-.08-.158.782 0 .782 0zm-35.332-6.528s.392.394 1.02.315c.628-.08 1.1 1.258 1.492 1.73.392.472.628.708 1.492 1.258.863.55.785-.472 1.963 1.18s.63.63 1.178 1.652c.55 1.023.864 1.573 1.178 1.81.314.235.55.864.63 1.1.077.236.626.944.626 1.18s.157.865-.314 1.416c-.47.55-.864.63-.864.63s-.942-.473-1.256-.945c-.314-.472-.706-.865-1.256-1.81-.55-.943-1.178-1.965-1.492-2.437-.314-.472-.785-.944-1.02-1.416-.236-.472-.864-1.888-1.178-2.045-.314-.158-.393-.63-.943-1.18-.55-.55-.472-1.022-.707-1.337-.236-.314-.785-1.023-.785-1.023l.236-.078zM66.93 139.895c-.55-.314-1.728-.865-2.12-1.18-.392-.314-1.57-2.045-1.57-2.045l-.864-1.652s-1.02-1.258-.785-1.73c.236-.472.708-.786.708-1.022s.47-.866.078-1.1c-.393-.237-.393-.316-.628-1.024-.236-.707-.236-1.337-.55-1.494-.314-.157-.55-1.18-.864-1.258-.313-.08-.628-.63-.628-.63l-.47-6.37s-.158-2.91-.315-3.54c-.156-.63.236-1.966-.156-3.146-.393-1.18.08-2.595-.157-3.067-.236-.472.157-1.81-.08-3.067-.234-1.26.943-2.832 0-3.303-.94-.473-.234-1.18-1.02-1.18-.784 0-1.334-.394-2.04-.944-.708-.55-2.043-1.573-2.435-1.967-.392-.393-1.65-1.415-2.04-1.73-.394-.314-.787-1.652-1.1-2.045-.314-.392-.47-1.572-.943-2.28-.472-.707-1.1-1.887-1.257-2.123-.157-.236-1.885-2.28-1.885-2.28l.157-1.26s1.178-.707 1.02-.943c-.156-.236.08-.472-.47-.944-.55-.472-.47-1.337 0-1.73.47-.394 1.177-1.652 1.177-1.652l1.178-1.966s.943-1.023.943-1.73c0-.71 1.334-1.18.55-1.81-.786-.63-.393-1.18-.63-1.652-.235-.47-.078-.786.63-1.258.706-.472 1.962-2.202 1.962-2.202s.942-.236 1.178-.236c.235 0 .628-2.518 1.335-.866.706 1.652.942.787.706 1.966-.235 1.18.314.944.628.63.314-.315-.157.236.47-1.18.63-1.416.394-1.888.786-1.494.393.393.55.472 1.257.708.706.236.942.157 1.177.63.235.47.157-.16 1.492.078 1.334.236 3.22-.472 2.983.314-.235.786-.706-.08.393.786 1.1.866 1.256 1.023 1.884 1.18.628.158 1.178.08 2.12 1.023.943.942 1.178 1.02 1.413 1.493.236.472.628.157 1.02.63.394.47.943.47 1.493.47.55 0 0-.47.863.16.865.628 1.492.706 1.885 1.965.392 1.26 1.178 1.18.55 2.438-.63 1.26-1.885 1.81-1.335 1.73.55-.078 1.57-.55 1.884-.47.314.077.47-.237.942 0 .47.234.55-.316.47.234-.078.55-.078 0-.078.55 0 .552-.157-.55.785-.313.942.236.392-.473 1.492.55 1.098 1.023 1.098.708 1.49 1.26.393.55.785-.315 1.02-.08.237.236.943.078 1.65.236.707.157.236-.472 1.335.236 1.1.706 2.198.47 2.434 1.1.234.63.863.393 1.177.786.313.394.47-.157.785.394.314.55 1.256.393 1.1.943-.158.55.234.236.077 1.022-.158.788-.708 2.046-1.178 2.36-.472.315-.47.708-.785 1.1-.314.395-.236-.392-.63.71-.39 1.1-.313 1.258-.627 2.28-.314 1.022-.078 0-.314 1.022-.235 1.023-.078 1.652-.314 2.832-.235 1.18-.156 1.18-.313 2.044-.158.865.39-.393-.316 1.416-.706 1.81-.785 1.73-1.02 2.517-.236.787.078.157-.785.63-.865.47-.394.313-1.415.628-1.02.315-2.277.63-2.67.708-.39.08-1.962.55-1.49 1.494.47.944.47 1.1 0 2.282-.472 1.178-1.178 1.572-1.178 2.122 0 .55-.315 1.1-.393 1.494-.08.393.707-.394-.235.786-.943 1.18-1.022.866-1.336 1.574-.314.707 0 .156-.314.707-.314.55-1.1.786-1.1.786s.08.393-.235.236c-.314-.157-.236.078-1.414-.237-1.176-.315-1.333-1.1-1.49-.55-.157.55.078.865.785 1.415.706.55 1.884.708 1.57 1.26-.314.55-.314.55-.55.864-.235.314.315.077-.235.314-.55.235-.864 1.258-1.1 1.258-.235 0-.392.393-.706.236-.314-.157-1.1-.708-1.256-.393-.157.314-.47-.394-.393.707.08 1.1.236 1.73-.157 1.967-.392.235-1.335 0-1.335 0l-.157-.395-.55.158s-.235.944.158 1.1c.392.158.314.315.706.787.393.472.157 1.337.157 1.337s0 .236-.392.63c-.392.393-.55.708-.628.943-.08.236-.55 1.26.157 1.18.706-.08 1.256-.472 1.256.787 0 1.258.314.944-.078 1.81-.393.864-.707.942-.786 1.73-.078.785.08.864.236 1.336.157.472.55.236.157.472-.392.236-1.57 0-1.57 0zM46.672 75.873l-.55-.786s-.234-.473-.627-.55c-.393-.08-1.257-1.102-1.257-1.102s-.392-.314-.392-.865c0-.55-.314-1.415-.08-2.36.237-.943.315-2.123.237-2.438-.08-.314.392-.393-.157-.707-.55-.315-1.65-.394-2.356-.394s-1.57.238-1.727.316c-.157.08.863-2.36 1.02-2.753.157-.393.864-2.123.864-2.36 0-.235.236-.314-.235-.628-.47-.315-1.256-.472-1.728-.236-.47.235-.392-.316-.785.628s-.786 1.966-1.257 2.124c-.47.157-1.413.63-1.413.63s-1.178-.08-1.57-.158c-.393-.08-2.042-.944-2.356-1.494-.314-.55-.47-1.73-.47-2.28 0-.552.862-2.203.784-2.597-.078-.393.864-1.966.785-2.202-.08-.235.157-1.022.393-1.336.235-.315 1.413-.708 1.727-1.023.314-.313.864-.706 1.413-.864.55-.157 1.02-.314 1.414-.314.392 0 1.413-.865 1.57 0 .157.865.864.55 1.256.63.393.078.472.47 1.1-.552.628-1.022 1.256-1.337 1.256-1.1 0 .235 1.02-.08 1.177.157.156.235.47-.158 1.02.314.55.473 1.335.552 1.256.787-.078.236.314.236.314.472 0 .235.314-.55.314.864 0 1.416.393 2.28.393 2.28s.55 1.18.785.945c.235-.237.706-.866.706-.866s.785-.472.236-2.124c-.55-1.65-.157-2.123-.314-2.674-.157-.55-.157-.865.785-1.573.942-.708 3.22-2.28 3.77-2.595.548-.315 1.804-1.18 1.804-1.18s.47-.236.55-.865c.077-.63 1.57-1.73 1.648-2.045.08-.314 1.1-1.1 1.1-1.1s1.098-.63 1.02-1.023c-.08-.393 1.413-1.1 1.65-1.1.234 0 1.49.392 1.49-.316 0-.71 0-.866.786-1.495.785-.63 1.805-1.573 2.198-1.573s1.727-.708 2.277-.865c.55-.158 2.276-.944.706 0-1.57.943-.55.393-.864 1.18-.314.786-.55 1.808.942.628 1.492-1.18 1.413-1.415 1.963-1.494.55-.077.157.237 1.335-.156s1.256-.55 1.256-.55.55-.473.236-.708c-.314-.237.314-.55-.864-.08-1.178.473-1.1.55-1.885.315-.784-.235-1.962-.156-1.1-.943.865-.786 1.964-1.022 1.257-1.337-.706-.314-2.512.08-2.747.157-.236.08-.786-.078-1.257 0-.47.08-.314-.628 0-.786.315-.156 1.335-.63 2.59-.943 1.257-.315 4.32-.393 5.026-.393.707 0 1.65.157 2.2-.236.548-.393 1.648-1.022 1.805-1.337.156-.314.784-.785.784-.785s.706-.708.314-1.023c-.393-.314-.786-1.022-1.1-.865-.313.157-.078 1.1-.706.078s-.55-1.18-.864-1.415c-.314-.236-.628-.08-.392-1.18.235-1.1.157-1.573.157-1.573s.235-.943 0-1.022c-.236-.08-.392-.314-.785-.08-.393.237-2.59 1.338-3.062 1.574-.47.235-1.1-.945-.864-1.495.236-.55.078-.236-.235-1.022-.314-.787-1.57-.945-2.042-.945-.47 0-1.57-.708-1.884-.235-.313.47-1.962 1.965-2.276 2.123-.314.158-.785-1.337-1.02 1.1-.237 2.44.863 3.147-.393 3.305-1.255.158-2.355.865-2.355.865s-1.02.08-1.02.708c0 .63-.393 2.124-.864 2.28-.47.16-1.648-.077-2.04-.55-.393-.47.078-2.2.078-2.2l.707-.71s-5.025-.785-4.947-1.1c.08-.315-1.492-.865-1.65-1.337-.156-.472-.235-1.495-.077-1.888.158-.393 2.278-2.28 3.377-2.674 1.1-.393 2.983-1.258 3.533-1.416.55-.157 1.492-.078 1.806-.47.314-.395.392-1.102.392-1.102s-.157-1.102.157-.945c.314.16.864.395.943.63.078.237.078.787.628.158.55-.63 1.256-.866 1.884-1.18.628-.315 1.57-.236 2.12-.55.55-.315 1.492-.63 1.57-1.416.08-.786-.235-.55-.628-.63-.392-.078.157.08-1.177.71-1.335.628-.943.156-1.885.628-.942.472-1.02.55-1.1.157-.078-.393.158-1.022.158-1.022s.08-.08-.47-.236c-.55-.158-.55.078-.63-.63-.078-.708.393-1.73-.392-1.416-.785.315-1.49-.236-2.04 1.337-.55 1.574-2.435 3.226-2.906 2.832-.47-.393-.55-.472-.943-.472-.392 0-.942-.47-1.648-.55-.708-.08-2.828-.08-3.377 0-.55.08-1.178-.315-1.65.158-.47.47-1.177 1.1-1.177 1.337 0 .236-.707-.866-.942-.787-.236.08-.864-.314-1.57-.314-.707 0-1.178-.394-1.413-.394-.235 0 .236-.63 0-.708-.235-.078-5.34-.235-5.34-.235s-1.648-.63-2.276-.55c-.628.078-2.355.156-3.69.392-1.335.235-3.298 1.022-3.926 1.1-.628.08-2.04.08-2.277-.314-.235-.393.08-.315-.235-.393-.314-.08-.078-.236-.784-.787-.706-.55.315-1.022-1.1-1.022-1.412 0-2.275-.08-3.532 0-1.256.08-3.847.708-4.16.63-.315-.08-2.827.392-3.22.157-.393-.236-2.356.865-2.748.787-.392-.08-1.884.08-2.277.315-.393.236-2.277.707-1.65 1.1.63.394.55.787.63 1.023.078.236-.63.786-.63.786s-.156 0-1.02-.313c-.863-.315-1.805-.472-2.198-.236-.393.237-1.1.71-.942 1.024.157.314 1.256 1.022 1.413.786.157-.236.55-.708 1.02-.63.472.08 1.18-.313.55.473-.628.786-1.177 1.18-1.57 1.26-.392.077-1.334.156-2.198.235-.864.08-.786-.315-1.57.472-.786.786-1.1.314-1.257 1.18-.156.864-.313.864 0 1.1.315.236-.627.315.08.55.706.237 1.57.473 1.49.71-.078.235.787-.316.315.313-.47.63-.785 1.18.157.55.942-.628 1.492-.157 2.277-.55.784-.393 1.57-.472 2.04-.786.472-.315.707-.786 1.414-1.023.707-.236.235.08.314.472.078.393 0 .472.47.157.472-.315.472-.078 1.1-.472.628-.392 1.335-.785 1.806-.55.47.237.628.237.942.237.314 0-.392-.08.314 0 .707.078-.314-.236 2.042.314 2.355.552 2.984.158 3.14 1.024.158.865.472-.08.864.47.392.552.628.08.864 1.024.235.944 0 3.54-.157 3.854-.157.314-.236.314-.157 1.022.078.708 1.02 4.09.706 4.326-.313.235-1.02.314-1.02.314L18.8 34.19s-.63 1.18-1.178 1.81c-.55.628-1.256 1.415-1.65 1.965-.392.55-.706 1.495-1.255 2.045-.55.55-1.02.314-.864 1.494.157 1.18 0 2.438.157 3.304.157.865.55 2.045.864 2.517.314.47.55.47 1.1.865.55.393 1.255.865 1.176 1.258-.078.393.08 2.832.08 2.832s.47.786.548 1.65c.08.867.63 1.732.63 1.732l.47 1.023s.235.08.55.707c.314.63.314.63.392.944.08.315.08.236.08.315 0 .08-.08-1.336-.237-1.73-.157-.393-.157-.865-.314-1.337-.158-.472.078-1.023-.393-1.73-.47-.708-.47-.787-.707-1.495-.235-.707-.55-1.494-.235-1.652.314-.156.55-1.18 1.177 0 .628 1.18.707.866.786 1.81.078.944.314 1.26.55 1.65.235.394.784 1.732 1.098 2.282.314.55 0-.314.707.787.706 1.1.785 1.337 1.178 2.202.393.865.63.865.864 1.494.236.63.08.473-.078 1.18-.157.708.157 1.495.157 1.495s1.1.393 1.177.63c.08.235 1.178.628 1.335.943.157.315 1.178.708 1.178.708s.864.55 1.177.707c.314.158 1.257.315 1.257.315s.628.158.863.236c.236.08.943.08.943.08s.628-.473.863-.316c.236.157.785-.315 1.02.08.236.392.708.392.943.707.235.314.47.314.863.707.393.394.785.315 1.177.63.393.314.707.314 1.178.314.47 0 .47 0 .785.08.314.078.47-.237.785.157.314.393.55.628.785 1.022.236.393.785.393.864 1.022.078.63.235.55.235 1.1 0 .552.314.788.55.945.235.157 1.1.943 1.1.943l1.177.237.94.708 1.022.313zM71.837 2.806l4.71-.59s1.65 0 2.474-.59c.825-.59 0-.59 2.474-1.06 2.474-.473 1.767-.71 3.063-.473 1.295.236 1.648.236 3.062.472C89.03.8 89.384.447 90.68.8c1.296.354 1.885.236 2.945.236h3.297c1.65 0 3.18-.943 3.77-.354.588.59.94.354 2.944.59 2.002.236 2.826-.236 3.65 0 .825.236 2.24-.118 3.887 0 1.65.118 2.474-.118 3.062-.118.59 0 1.178-.826 2.002-.118.825.708 1.885-.236 2.002.708.117.944 1.648.236.117.944-1.53.708-1.295.59-2.355 1.534-1.06.944.706 1.77-1.53 2.595-2.24.826-2.593-.472-3.18.944-.59 1.417 0 1.77-.12 2.48-.117.706-.352.824-1.06 1.414-.706.59-.706 0-2.354.354-1.65.354-2.827.708-3.533.708-.707 0-2.238.59-2.71.826-.47.236.825.59-1.648 1.298-2.474.708-3.063.59-3.77 1.533-.706.944-.47 1.063-.94 1.652-.473.59-1.886 2.95-2.592 2.36-.707-.59-1.06-.472-1.65-1.062-.588-.59-.942-1.415-1.295-1.887s-.47-1.652-.59-2.36c-.116-.708-1.177-2.36 0-2.124 1.18.236 1.886.118 2.24-.117.352-.237.706-1.062.706-1.062s-.118-1.298-.472-2.006c-.353-.708-.117-1.298-.706-2.005-.59-.708-.59-.59-1.413-1.298-.825-.708-.59-1.062-1.885-1.18-1.295-.118-1.65-.472-2.12-.354-.47.118-2.002-.826-.353-.944 1.65-.118 3.18.118 3.18.118s2.12-.944 1.413-1.062c-.706-.118 1.06-1.18-.59-.826-1.648.354-3.532.826-4.003.944-.47.118-1.65.236-2.827.59s-2.59.236-3.297 1.062c-.707.826 0 .944-.707.826-.706-.118.59-.826-1.06 0s-1.177.708-2.002.472c-.824-.236-1.413-.59-1.413-.59s1.06-.118-.47-.236-1.53-.118-2.12-.826c-.59-.708-.235-.708.118-.944s.59-.708.59-.708zm-2.59 5.31c-.59.59-2.004 1.415-1.65 1.77.354.353.59 1.65 1.296 1.296.706-.353-.118-1.533 2.59-.59 2.71.944 2.474-.117 3.063 1.298.588 1.416 1.06 2.478.706 2.832-.353.354-.47.708-1.65 1.062-1.177.354-1.648.826-.823 1.415.823.59 2.354 1.18 3.06 1.533.708.354 2.827.472 1.767-.707-1.06-1.18.236-1.534.236-1.534s2.002 1.534 1.296-.236c-.708-1.77-1.18-1.77-.708-1.77.47 0 1.413.59 1.413.59l.47-.944-.47-1.533-1.53-1.535s1.294-1.18-.472-1.415c-1.767-.236-1.65-.236-2.59-.827-.944-.59-1.06-.825-2.828-.47-1.766.353-2.355.59-2.355.59l-.824-.828zM42.982 9.53c.706-.707 2.59-2.36 3.297-1.887.707.472 1.767-.354 2.59.354.825.708 1.768 1.534 2.474 1.77.707.235 1.53-.59 2.238-.236.707.355 3.18-1.77 2.71-.117-.472 1.652.588 2.123-.708 2.242-1.295.118-2.71 1.06-3.298.708-.59-.354-1.06-.708-2.002-.236-.942.47-.47.47-1.53.236-1.06-.236-1.296.235-1.532-.12-.236-.352-.942-.234-.824-1.296.117-1.062.47-.944-.236-.944-.707 0-1.295.118-1.767-.236-.47-.354-1.412-.236-1.412-.236zm351.8 36.377l-1.178 1.573-.785.786-1.57.865-.236.71s-.628.63-.55 1.022c.08.393.08 1.1.08 1.1s-1.1 1.024-1.57 1.338c-.473.314-1.1 1.022-1.1 1.022s-.393.473-.63.63c-.234.157-.627.63-.94 1.1-.315.473-.63.787-.786 1.023-.157.236-.628.786-.864 1.652-.235.865-.864 1.887-.864 1.887l-.157.393c.08 1.338.08 1.574.236 2.046.156.47.313.314.156 1.337-.157 1.022-.157 1.415-.314 1.887s-.628 1.337-.785 1.73c-.157.394.314 1.1.314 1.1s.237 1.024.08 1.26c-.157.236.078.708.078.708s.942.55 1.257.865c.313.315.863.787.942 1.023.08.236.706 1.337.785 1.573.078.236.707 1.1.864 1.337.157.236.942 1.1.942 1.1s1.02.787 1.256 1.102c.236.314.943.472 1.178.707.235.236.785.157 1.1.394.313.236.94-.158 1.255 0 .314.157 1.178-.157 1.414-.315.236-.156.786-.706 1.178-.47.393.235.628 0 .943.078.314.08.786-.314 1.1-.314.314 0 1.1-.315 1.334-.315.236 0 1.02-.474 1.335-.474.313 0 .706-.313 1.098-.156.393.156.236-.315.942-.08.707.236.943 0 1.178.236.236.237.55 0 .786.316.235.314.628.55.706.865.078.314.55.63.55.63l.47.077s.63-.47.786-.156c.157.314.864.236.864.236l.706.786.236.315s.47 1.258.392 1.73c-.078.472-.078 1.494-.314 1.73-.235.236-.392 1.26-.392 1.26s-.314.313.392.942c.707.63 1.178 1.18 1.414 1.494.236.316.864 1.182.942 1.732.08.55.236.865.55 1.573.314.708.706.786.785 1.573.08.787.236.787.158 1.337-.08.55-.314.63-.08 1.022.237.394.55 1.102.472 1.338-.078.235-.235 1.258-.235 1.258l-.157.472-.707 1.338-.47.707c-.157.55-.47 1.1-.392 1.887.078.787-.393.787.235 1.573.628.787.942 1.652 1.335 2.36.392.708.628 1.416.706 1.887.08.472.393.63.55 1.26.156.628.235.942.235 1.336 0 .393-.08 1.416.078 1.652.157.236.236.944.314 1.258.08.315-.236.394.236.944.47.55.785.865 1.1 1.26.313.392.234.235.47.785.235.55.55.866.628 1.337.08.47.157 1.65.393 2.2.234.552.548 1.103.548 1.103s.864.55 1.178.472c.314-.08.942-.786 1.414-.55.47.235.863 0 1.256 0 .392 0 .785-.473 1.178-.473.392 0 .942-.63 1.256-.472.314.157.706-.158 1.1-.55.392-.393.627-.708 1.334-1.337.706-.63.628-.63 1.1-1.023.47-.393.94-1.26 1.49-1.416.55-.157.707-.707.864-1.1.157-.394.236-.63.47-.945.237-.315.08.08.473-.944.393-1.023.865-1.416 1.258-1.652.392-.236.627-.708.863-.787.236-.08.63.236.472-.472-.156-.707 0-1.73-.156-1.966-.158-.237-.394.55-.315-.63.08-1.18.943-2.36.943-2.36s1.178-1.494 1.57-1.73c.394-.236.472-.472 1.022-.787.55-.314 1.727-1.1 1.727-1.494 0-.394.47-1.417.47-1.653s0-.472-.155-1.81c-.158-1.336.156-1.02-.315-2.28-.47-1.258-.55-2.83-.863-3.224-.316-.394-.16-1.417-.16-1.73 0-.315.55-1.102.787-1.416.235-.315 1.256-1.574 1.256-1.574s1.57-1.808 2.12-2.673c.55-.866 1.1-1.652 1.49-1.966.394-.315 1.336-1.024 1.886-1.81.55-.786 1.648-2.28 1.727-2.517.078-.235.706-1.022.706-1.022s.863-1.023 1.02-1.573c.157-.55.942-3.618.785-3.46-.156.157-1.1.314-1.413.392-.314.08.472.393-1.806.237-2.277-.157-3.455.236-3.455.236-.707-.157-1.256.63-1.492-.472-.236-1.1-.393-1.73-.864-2.516-.472-.787-.786-1.1-1.492-2.124-.707-1.022-.63-.55-1.257-1.337-.627-.786-.784-.55-1.177-1.573-.392-1.022-.706-.63-1.177-2.045-.472-1.417-.786-1.574-1.02-2.36-.237-.787-.55-1.023-.708-1.73-.157-.71-1.962-4.327-2.198-4.563-.236-.235-.628-1.494-.55-1.258.08.235 1.178 1.02 1.178 1.02s.628-.235.864-.235c.235 0 1.177.866 1.177 1.18 0 .315 1.65 1.81 2.04 2.91.394 1.1.866 1.888.943 2.202.078.315.864 1.574 1.178 2.046.315.472 1.336 1.415 1.493 1.887.157.472 1.65 2.045 1.65 3.068 0 1.022.705 2.36.784 2.673.08.316 1.49.71 1.49.71l1.886-.472s2.826-1.81 3.14-1.81c.314 0 2.828-1.18 2.828-1.18s1.02-.943 1.727-1.493c.707-.55 1.492-1.573 1.65-2.045.156-.473.47-.55 1.098-1.26.63-.707 1.492-1.415.943-1.887-.55-.47-.864-.314-1.65-1.1-.784-.787-.706-.63-1.255-1.653-.55-1.022.078-2.202-1.1-1.022-1.177 1.18-.706 1.495-1.884 1.73-1.18.237-1.65 1.023-2.2.237-.55-.787-1.1-.315-1.413-1.495-.314-1.18-.55-1.26-.628-1.73-.08-.472 0-.472-.63-1.652-.627-1.18-.156-2.99.236-1.966.393 1.022 1.02 1.18 2.042 1.887 1.02.707 1.492 1.258 2.434 1.337.942.078 1.727 0 1.884.156.157.158.314-.078.707.08.393.157.55-.236.706.392.156.63 1.02.708 1.412 1.1.393.394.393.237 1.414.394 1.02.157 2.435.157 2.435.157l1.492-.08 1.727.158s1.256.708 1.57.708c.314 0 .392.865 1.177 1.337.786.472.943.55 1.414 1.1.473.552.393.788 1.02 1.338.63.55 1.65-.078 1.808-.314.156-.236.94-.63.785 0-.157.63.785.393.55 1.888-.236 1.494-.394 1.1 0 2.123.392 1.023 2.12 4.17 2.198 5.113.08.943.55.63.63 1.495.078.864.548 1.18.548 1.808 0 .63.55.787.628 1.26.08.472.943.078 1.178 0 .236-.08 1.335-1.102 1.335-1.102s.47-.156.392-.943c-.08-.786 0-.63 0-1.81 0-1.18-.47-1.18-.236-2.358.236-1.18.864-1.888 1.02-2.438.158-.552.786-1.496 1.1-1.575.314-.078 2.042-.943 2.434-1.494.393-.55 1.02-1.18 1.65-1.808.627-.63 1.726-1.415 1.962-1.18.236.236.157.158.55.158.392 0 1.1.315 1.648.393.55.08 1.65 1.416 1.885 2.124.236.708.08.55.942 1.573.864 1.022 1.65.393 1.65 1.65 0 1.26 0 1.18.392 1.653.392.472.862-.865 1.333-.707.47.157.55-.158.942 1.1.393 1.26.628 1.26.707 2.518.078 1.258-.078.078-.078 1.1 0 1.023-.08 1.102.078 2.045.157.944.706 1.258.628 1.415 0 0 .47-1.337.314-2.28-.156-.944 0-2.28.393-2.674.392-.393.785-.786 1.1.237.313 1.022.47.236 1.176 1.415.708 1.18 1.335.944 1.414 1.494.078.55.472.63 1.02 1.1.55.474 1.02-.077 1.65-.55.628-.47 2.355-2.2 2.434-2.91.08-.707.786-.55-.47-2.358-1.257-1.81-1.257-2.44-2.592-3.54-1.334-1.1-2.12-1.18-1.098-2.595 1.02-1.416 1.492-2.36 2.12-1.966.628.393 1.726.314 1.726 1.887s-.314 3.304.786 1.416 1.65-2.99 1.334-2.674c-.313.315.707-.63.707-.63s.08-.707 1.414-1.02c1.334-.317 1.727-.473 2.198-.71.47-.236 1.806-1.81 2.042-2.516.235-.708.863-1.967.706-2.517-.157-.55-.942-3.224-1.1-3.146-.156.08-.077.08-1.098-1.022-1.02-1.1-1.728-1.888-1.884-2.36-.156-.472-.55-.55-.078-1.18.47-.63.707-.55.785-1.1.078-.55.706-1.023-.47-.63-1.18.393-.315.158-1.336.08-1.02-.08-3.69.55-2.354-1.102 1.334-1.652 1.726-2.674 1.962-2.674s1.414-1.338 1.492-.08c.08 1.26.55.944.628 1.73.08.787 1.65-.864 1.65-.864s.55.157.94.55c.394.393.394 1.652.394 1.652s-.314-.394.55.236c.864.63 1.805.314 1.805 1.65 0 1.338 0 1.417.55 1.732.55.314 1.1.157 1.57-.236.472-.393 1.257-1.81 1.257-1.81s.078-.55-1.178-1.336c-1.256-.787-2.04-1.337-2.512-1.73-.472-.394-.314-1.573.156-2.046.472-.472.707-.708.55-1.337-.157-.628.236-1.1 1.414-1.02 1.177.078 1.413-.08 1.413-.08s.236.157.236-.315c0-.47 1.49-2.674 1.098-2.674-.39 0 .08-.55-.156-1.414-.235-.866.786-2.202-.078-2.832-.864-.63-1.1-.944-1.65-1.887-.548-.945-.47-1.1-2.51-1.338-2.043-.237-2.985.47-3.456-.158-.47-.63-.707.944-1.02-.944-.314-1.887.47-3.146.47-3.146s1.257-.786 1.57-1.337c.314-.55 1.57-.787 2.592-.393 1.02.393 2.512.314 3.77.55 1.255.236 1.177 1.023 1.805 0 .628-1.022 0-1.494.47-2.044.473-.55 1.022-1.416 1.414-.866.393.55 1.18 1.1 1.808.393.628-.707.863-.786.863-.786l.315.314s.706-.394.706.314.708 1.495.316 2.045c-.394.55-.942.472-.942 1.81 0 1.337 0 1.1.863 2.202.864 1.1 1.413.157 1.57 1.337.158 1.18.314.944 1.178 1.73.864.786.706.786 1.335 1.258.628.472.942.945.942.158 0-.787.08-1.18 0-1.888-.08-.707.63-1.258.157-2.438-.472-1.18-.08-1.1-1.022-1.966-.942-.865-1.57.157-1.884-1.1-.314-1.26 1.492-1.81 1.963-1.968.47-.156 1.177-1.1 1.334-.47.158.628-1.176 2.91 1.1.47 2.277-2.438 1.257-1.415 1.257-1.415s1.178-.157 1.413 0c.235.157.865-.708.628-.63-.235.08-2.51-1.258-2.51-1.258l-1.65-.943s.55-.394.94-.315c.394.08.473-.786.866-.865.392-.08 3.062.55 3.612.865.55.315 2.512.393 2.276.236-.236-.157-1.49-1.1-1.57-1.416-.078-.314-2.827-.944-3.69-.865-.864.078-1.65.314-2.356.078-.707-.236-1.727-.865-2.277-.865s-7.46-1.337-7.773-1.258c-.314.078-.786 1.573-1.02 1.337-.237-.236-.63-.236-1.73-.55-1.098-.315-2.59-.552-4.553-.71-1.963-.156-3.297.16-3.847-.47-.55-.63-1.727-.394-3.062-.473-1.334-.077-2.905 0-3.612 0-.706 0-2.355-.077-2.747-.156-.393-.08-.864-.63-1.335-.708-.47-.08-.392-.235-1.334-.393-.942-.157-.864-1.18-1.178-.315-.314.866-.157.63-.628.944-.47.315-.942.944-1.256.944-.314 0-1.57.08-1.806-.08-.236-.156-.63-.313-1.414-.313-.785 0-.785.078-1.806-.08-1.02-.156-1.806-.078-2.748-.55-.942-.47-.942-.786-1.727-.707-.785.08-.785-.158-1.885-.158-1.098 0-2.433.63-3.14.708-.706.08-2.277-.08-2.826-.314-.55-.236-.707-.787-2.75-.55-2.04.235-3.218.235-2.825-.394.392-.63.863-1.26 1.1-1.337.235-.078.784-.47.39-.628-.39-.158-.784-.393-1.726-.472-.94-.08-.863.314-2.276.157-1.413-.157.785-.55-2.12-.472-2.905.08-3.61.315-3.925.315-.316 0-.708-.63-1.493.314-.786.944-1.885 1.494-3.455 1.573-1.57.08-1.65-.157-3.14.393-1.492.55-2.435-.157-2.12 1.1.313 1.26.706 1.732.706 1.968 0 .235-.707 1.81-1.57.865-.864-.944-2.434-4.64-1.728-2.124.707 2.516 2.277 3.38.786 3.774-1.492.394-1.336-.157-1.57-.314-.236-.158 0-1.26-.08-1.888-.08-.63-.235-1.022-.55-1.337-.313-.315-.235-.787-.863-.944-.628-.156-.078-.47-1.1-.47-1.02 0-1.883-.63-1.648.786.236 1.415.47.472 1.1 1.81.627 1.336 1.805.392.94 1.336-.862.943-3.14.63-3.69.236-.55-.394-.39.157-1.413-.55-1.02-.71-.706-1.26-1.883-.71-1.18.552-1.572 1.574-2.043 1.18-.47-.393-1.57.55-1.963.08-.393-.472-1.963-.472-2.277 0-.314.472-1.256.393-2.59 1.022-1.336.63-.943.08-2.592 1.416-1.65 1.337-2.592 2.438-3.14 1.573-.55-.866-3.534-2.36-2.356-2.597 1.177-.236 1.726-.708 2.354-.157.63.55 1.65.393 1.806 0 .157-.394.864-.787-.08-1.258-.94-.473-1.02-.158-2.51-.708-1.493-.55 0-.394-2.043-.708-2.04-.315-2.905-.472-3.454-.63-.55-.157-1.335 0-2.12-.078-.785-.08-1.335-.236-2.042-.157-.705.078-1.097-.08-2.04.63-.943.707-1.65 1.022-2.277 1.572-.628.55-2.277 1.65-2.748 2.044-.47.393-2.12 1.652-2.277 2.124-.157.472.157.865-.47 1.18-.63.314-1.257.314-1.73.392-.47.08 0-.707-.47.08-.47.786-.314 3.617.078 3.224.393-.394.157-1.652 1.885-.472s2.828 1.022 2.75 2.123c-.08 1.1 1.177 1.023 1.334 1.26.157.235.942-.316.942-.316s1.727-1.102 1.727-1.652c0-.55 1.1-1.81 1.1-1.81s-.786-.392-.786-1.18c0-.785.236-1.022.393-1.808.157-.786-.864 0 1.492-1.495 2.355-1.494 2.512-.47 2.512-.47s.313.313-.08.785c-.39.472-1.098 1.73-1.255 1.888-.158.157.706 1.416 1.098 1.416.392 0 1.178-.315 1.65-.237.47.08 1.255-.235 1.49-.078.236.156.786.628.393 1.022-.39.393-1.255.864-1.883.708-.63-.157-1.57-1.26-1.02.314.55 1.573-.08 1.966-.55 1.888-.47-.08-1.492-.865-1.335.314.157 1.18-1.02 1.966-1.257 1.966-.235 0-.706-.078-.706-.078s-.708-.08-1.1-.08c-.393 0-1.178.394-1.414.71-.235.313-.55.078-.942.078-.392 0 0-.472-.785-.63-.786-.157-1.257-.314-1.728 0-.47.315-1.178.472-1.492.236-.314-.236.157-.787-.47-.47-.63.313-1.1 1.178-1.336 1.257-.235.078.707 0-.235.078-.944.08-1.336.316-1.807.473-.472.157.157 1.1-.707 1.415-.864.316-.235-.392-1.1.316-.863.708-1.02 1.337-1.334 1.415-.314.08-.235.237-.942.316-.707.08-.628.157-1.02.236-.394.078.078.236-.786.078-.864-.157-1.492.158-1.335.473.156.314 3.06 1.18.863 1.1-2.2-.078-1.492.315-1.02.63.47.314.705.63.94.708.237.08.63 1.023.63 1.023s.627-.08.235.472c-.392.55.157.708-.236 1.416-.392.71-.392.237-.706.394-.314.157-.785.708-1.65.236-.863-.472-1.49-.708-2.512-.786-1.02-.08-.314-.236-1.02.314-.707.55-.864 1.18-.785 1.887.077.708.156 1.652-.08 2.124-.236.47-.236.943-.08 1.65.158.71.63 1.024.63 1.024s1.1.157 1.334.236c.236.078.707-.157 1.335.235.627.394 1.255.55 1.648.08.392-.472 1.963-1.023 2.434-1.495.47-.472.785-.63.55-1.1-.236-.473.47-1.653.863-1.89.393-.234 1.257-.47 1.257-.47l.942-1.416s.785-.866 1.177-.787c.394.08 2.592.866 2.436-.157-.157-1.023.156-1.337.392-.944.235.393.864.236.864.236s.314-.157.55.08c.235.234.548 1.258 1.02 1.493.47.236.863.472 1.178.63.314.157.628 0 1.256.55s1.256.865 1.335 1.1c.08.237.63.787.63.787s.55.158.392.473c-.157.314-.942 1.258-1.335 1.415-.393.157-1.413-.158-1.02.157.39.315.94.708 1.177.472.236-.237 1.727-1.81 1.727-1.81s-.077.08 0-.393c.08-.472 0-1.022.394-.787.392.237.628.55.785.237.156-.315.313-.158-.08-.394-.393-.236-1.334-1.573-1.806-1.65-.47-.08-1.65-.867-1.65-.867s-.234-.236-.784-.865c-.55-.628-.706-.47-.864-1.02-.157-.552-.628-1.26.236-1.103.864.158 1.413.708 2.198 1.18.785.472.63.63 1.335 1.1.707.473.786.945 1.335.867.55-.08 1.178.314 1.178 1.022s.156 1.494.313 1.652c.16.158.63.472.787.787.157.314.47 1.1.706 1.415.236.315.47.55.707.944.235.393.314-.08.55.08.235.156.55.077.55-.237 0-.315.077-.866.077-.866s1.1-.313.786-.47c-.314-.158-1.257-1.102-1.178-1.416.078-.315 0-.944.392-.865.393.077.786.785 1.65.156.863-.63 1.884-.944 1.57 0-.314.944.08 1.1 0 2.123-.08 1.022.314.707.864 1.258.55.55.943.63 1.335.787.393.157 1.02.08 1.65.157.628.08 1.02-.236 1.57-.078.55.157 1.805-.08 2.04.078.237.157 1.18-.314 1.257.236.08.55.393-.08.158 1.18-.236 1.258-.55 2.123-.55 2.123-.864 1.653-1.178 2.046-1.57 2.125-.393.08-.628.315-1.335.236-.707-.078-1.57 0-2.59-.235-1.022-.236-2.906.236-3.69-.236-.786-.473-1.886-.08-2.357-.63-.47-.55-1.256-.472-1.57-.787-.314-.314-.47-1.18-.47.08 0 1.258-.708 1.336-.865 1.966-.157.628.235.313-.63.234-.862-.08-1.098.394-2.354-.55-1.257-.944-1.885-.944-2.513-1.337-.63-.394-1.257.707-1.885-.55-.628-1.26-1.492-.237-1.57-1.26-.078-1.022 0-.943.078-1.572.08-.63.943-1.18.55-1.416-.393-.236-.08-.63-.628-.394-.55.236-1.335.315-1.963.55-.63.237 1.412 0-1.65.237-3.062.236-3.926.55-3.926.55s-.235-.157-.628.158-.942.787-1.492.55c-.55-.235-.863-.156-1.334-.077-.472.078-.785-.394-1.335 0-.55.392-1.178.55-1.414.392-.235-.16-.627-.788-.627-.788zM447.31 97.66c-.236.865-1.1 2.123-1.1 2.123l-1.57.786s-.55.47-.864.55c-.314.078-1.1.472-1.1.472s-.705-.158-.47.55c.235.708.314 1.573.235 1.81-.077.235-.077.707-.077 1.337 0 .628-.235 1.414-.628 1.57-.392.16-.785.316-.707.867.08.55.08 2.202.08 2.202l1.02 1.572s.314-.236.942-.236c.628 0 1.257-.55 1.257-.55s.707.157.627-.708c-.078-.865.315-1.888.236-2.124-.078-.236.707-1.258.707-1.494s.785-1.337.785-1.73.55-1.023.628-1.494c.08-.473.157-1.573.314-1.888.157-.314.236-.63.236-.944v-.943l-.55-1.73zm61.478 10.617c-.236.314-.393 3.697-.55 4.09-.157.393-.47 2.438-.313 2.91.156.472.392 2.202.235 2.753-.157.55.08 2.28-.315 2.202-.392-.08-.548.08-.548.315 0 .236.548.707.548.707s.943 0 1.336-.078c.393-.08 1.178-.472 1.807-.472.628 0 1.02-.473 1.57-.473s1.728-.39 2.04-.234c.315.156.786-.944 1.336-.708s1.728-.55 2.277-.55c.55 0 .786-.866 1.414-.708.628.157 1.806-.315 2.355-.08.548.237 1.413-.786 1.805 0 .393.787 1.57 1.102 1.57 1.495s-.08 1.26-.08 1.26l.944-.08s1.49-.944 1.726-.944.785-.785.785-.392-.47 1.26-.627 1.65c-.157.395.157.867.157.867s.786.393.47 1.1c-.313.71.08.552 0 1.102-.077.55 0 .314.315.63.314.314.864.865 1.335.786.472-.08.628-.55 1.02-.315.393.236 1.178.08 1.413.394.237.314-1.49 1.1 1.493-.236 2.983-1.338 3.297-1.652 3.69-2.124.393-.472.864-.944 1.177-1.26.315-.313.08-.235 1.02-.943.943-.708.943-.394 1.808-1.73.864-1.338 1.492-1.81 1.65-2.046.157-.236.47-.314.55-1.26.078-.942.705-1.808.705-2.122 0-.314.236-.786.157-1.337-.078-.55.315-1.337-.157-2.123-.47-.787.236-1.1-.47-1.416-.708-.315-1.18-.157-1.336-.708-.158-.55-.786-.472-1.022-1.966-.235-1.494-1.177-1.652-1.177-1.652s-.94-.393-.706-.55c.236-.158.314-1.26.236-1.574-.08-.314-.08-1.022-.314-1.494-.235-.472-.393-1.1-.628-1.652-.235-.55-.628-.708-.785-1.337-.158-.63-.393-.865-.47-1.022-.08-.156-.238-.943-.394-.078-.158.865-.473 2.516-.473 2.516s-.628 1.338-.863 1.73c-.236.394-.47 1.417-.864 1.338-.392-.08-.63.394-.942.314-.314-.08-.785.08-1.02-.157-.236-.236-.864-.865-1.178-.944-.314-.08-.55-.708-.786-.708s-.628-.55-.55-.866c.08-.314.158-1.022.236-1.337.078-.315.55-1.023.55-1.023s0-.472-.393-.472c-.392 0-.47 0-1.335-.08-.863-.078-1.098-.156-1.413-.156-.314 0 .314-.16-.55.077-.864.237-1.257.866-1.806 1.417-.55.55-.08.392-.55.55-.47.158-.392-.393-.706.472-.315.865.157 1.1-.08 1.258-.235.158-1.883-.55-1.883-.55s.392-.08.078-.472c-.314-.394-.628-.944-1.098-.708-.472.236-.865.394-1.178.787-.315.394-.315.708-.55 1.023-.236.314-.864.314-.942.63-.08.314-.08 1.1-.314 1.18-.234.078-.313-.315-.548-.394-.236-.08-.158-.71-.314-.315-.157.393-.314.314-.55.943-.236.63-.314 1.18-.55 1.26-.235.078 0 .156-.707.55-.705.393-.862.393-1.882.865s-.785.472-1.492.55c-.706.08-.864.315-1.335.394-.47.078-.784.156-1.255.63-.47.47-.864.628-1.178.707-.314.078-.63.393-.63.393zm4.632-31.067c-.314.472-1.335 1.888-1.727 1.967-.393.078-.786.472-1.1.393-.313-.08-1.02 0-1.256 1.022-.235 1.023-.628 1.573-.864 1.494-.235-.078.392 1.494-.942.866-1.333-.63-.862.55-1.02.865-.157.315.236 1.18.314 1.495.08.314.314.865.63 1.336.313.472.548 1.023 1.098.866.55-.158 2.276 0 2.276 0s.63.236 1.02.236c.394 0 .473-.157.708-.157s.706-.787.628-.866c-.08-.08-.314-.314.157-.786.472-.472 1.022-.628 1.1-1.18.08-.55-.157-.55.08-.865.234-.314.784-.235.627-.55-.157-.315.157-.236-.157-.866s-.707-.866-.393-1.652c.314-.787.63-.944.55-1.416-.08-.472.393-.63-.157-1.18-.55-.55-.785-.708-1.178-.866l-.392-.156zm15.39 7.865c.314-.078 1.412-.865 1.49.55.08 1.417.157 1.023.63 1.81.47.786.784 1.023 1.333.63.55-.394 1.178-.394 1.335-1.102.157-.708.157-.708.628-.708.472 0 .628-.078.865.237.236.314.392 0 1.414.55 1.02.55 1.884.393 2.513.944.628.55.942.472 1.805.786.864.315.47-.157 1.256.708s.472 1.1.864 1.494c.393.394.707-.314.55.63-.157.943-1.256 0 .393 1.336 1.648 1.338 1.884 1.574 2.433 1.967.55.393.943.865.472.865-.472 0-1.963 0-2.12-.236-.157-.236-.863-.394-1.335-.944-.47-.55-1.49-.944-1.726-1.415-.238-.473-.552-.63-.944-.63-.392 0-.785.472-1.335 1.023-.55.55-.312-.314-1.02-.08-.707.237-1.49-.078-1.884-.392-.393-.315-.314-.787-.942-.55-.628.235-1.02.078-.785-.394.235-.472.077-1.1.077-1.1s.237-.788-.313-.945c-.55-.158-.55-.708-1.1-.866-.55-.157-1.412-.55-1.412-.55s-.08 0-.315-.08c-.235-.078-.235-.078-.863-.235-.628-.16-1.1-.002-1.414-.395-.314-.393-.157-.943-.157-.943s1.256.157 0-.787l-1.256-.943s.156-.08.078-.237c-.08-.158.784 0 .784 0zm-35.333-6.528s.392.394 1.02.315c.63-.08 1.1 1.258 1.493 1.73.392.472.628.708 1.49 1.258.865.55.786-.472 1.964 1.18s.628.63 1.178 1.652c.55 1.023.864 1.573 1.177 1.81.313.235.55.864.628 1.1.078.236.628.944.628 1.18s.157.865-.314 1.416c-.47.55-.864.63-.864.63s-.942-.473-1.256-.945c-.314-.472-.707-.865-1.257-1.81-.55-.943-1.177-1.965-1.49-2.437-.315-.472-.787-.944-1.022-1.416s-.864-1.888-1.178-2.045c-.314-.158-.392-.63-.942-1.18-.55-.55-.47-1.022-.707-1.337-.235-.314-.784-1.023-.784-1.023l.235-.078zm-152.714 61.348c-.55-.314-1.727-.865-2.12-1.18-.392-.314-1.57-2.045-1.57-2.045l-.864-1.652s-1.02-1.258-.785-1.73.706-.786.706-1.022.472-.866.08-1.1c-.393-.237-.393-.316-.63-1.024-.234-.707-.234-1.337-.548-1.494-.315-.157-.55-1.18-.864-1.258-.314-.08-.628-.63-.628-.63l-.472-6.37s-.157-2.91-.313-3.54c-.158-.63.235-1.966-.158-3.146-.392-1.18.08-2.595-.157-3.067-.235-.472.157-1.81-.078-3.067-.236-1.26.942-2.832 0-3.303-.942-.473-.236-1.18-1.02-1.18-.786 0-1.336-.394-2.042-.944-.707-.55-2.042-1.573-2.434-1.967-.393-.393-1.65-1.415-2.042-1.73-.392-.314-.785-1.652-1.1-2.045-.313-.392-.47-1.572-.94-2.28-.472-.707-1.1-1.887-1.258-2.123-.157-.236-1.884-2.28-1.884-2.28l.157-1.26s1.177-.707 1.02-.943c-.157-.236.078-.472-.472-.944-.55-.472-.47-1.337 0-1.73.472-.394 1.178-1.652 1.178-1.652l1.178-1.966s.942-1.023.942-1.73c0-.71 1.335-1.18.55-1.81-.786-.63-.393-1.18-.63-1.652-.234-.47-.077-.786.63-1.258.706-.472 1.962-2.202 1.962-2.202s.943-.236 1.178-.236c.236 0 .628-2.518 1.335-.866.708 1.652.943.787.708 1.966-.236 1.18.314.944.628.63.314-.315-.158.236.47-1.18.63-1.416.393-1.888.786-1.494.392.393.55.472 1.256.708s.942.157 1.177.63c.236.47.158-.16 1.492.078 1.335.236 3.22-.472 2.984.314-.235.786-.706-.08.393.786 1.1.866 1.257 1.023 1.885 1.18.628.158 1.177.08 2.12 1.023.942.942 1.178 1.02 1.413 1.493.236.472.63.157 1.022.63.392.47.942.47 1.49.47.55 0 0-.47.865.16.864.628 1.492.706 1.884 1.965.394 1.26 1.18 1.18.55 2.438-.627 1.26-1.883 1.81-1.334 1.73.55-.078 1.57-.55 1.885-.47.315.077.472-.237.943 0 .47.234.55-.316.47.234-.078.55-.078 0-.078.55 0 .552-.157-.55.785-.313.943.236.393-.473 1.492.55 1.1 1.023 1.1.708 1.492 1.26.392.55.785-.315 1.02-.08.236.236.943.078 1.65.236.706.157.235-.472 1.335.236 1.097.706 2.197.47 2.432 1.1.236.63.864.393 1.178.786.314.394.47-.157.785.394.314.55 1.257.393 1.1.943-.158.55.235.236.078 1.022-.157.788-.707 2.046-1.178 2.36-.47.315-.47.708-.785 1.1-.314.395-.235-.392-.628.71-.393 1.1-.314 1.258-.628 2.28-.314 1.022-.08 0-.314 1.022-.235 1.023-.08 1.652-.314 2.832-.235 1.18-.157 1.18-.314 2.044-.157.865.393-.393-.314 1.416-.707 1.81-.785 1.73-1.02 2.517-.236.787.078.157-.786.63-.863.47-.392.313-1.413.628-1.022.315-2.278.63-2.67.708-.393.08-1.963.55-1.492 1.494.47.944.47 1.1 0 2.282-.47 1.178-1.178 1.572-1.178 2.122 0 .55-.314 1.1-.392 1.494-.08.393.706-.394-.236.786-.942 1.18-1.02.866-1.335 1.574-.314.707 0 .156-.314.707-.314.55-1.1.786-1.1.786s.08.393-.235.236c-.314-.157-.235.078-1.413-.237s-1.335-1.1-1.492-.55c-.157.55.08.865.786 1.415.705.55 1.883.708 1.57 1.26-.315.55-.315.55-.55.864-.237.314.313.077-.237.314-.55.235-.863 1.258-1.1 1.258-.234 0-.392.393-.705.236-.314-.157-1.1-.708-1.257-.393-.156.314-.47-.394-.39.707.077 1.1.234 1.73-.158 1.967-.393.235-1.335 0-1.335 0l-.157-.395-.55.158s-.235.944.157 1.1c.393.158.314.315.707.787.392.472.157 1.337.157 1.337s0 .236-.392.63c-.392.393-.55.708-.628.943-.08.236-.55 1.26.157 1.18.707-.08 1.257-.472 1.257.787 0 1.258.314.944-.08 1.81-.392.864-.706.942-.784 1.73-.078.785.08.864.236 1.336.157.472.55.236.157.472-.392.236-1.57 0-1.57 0zm-20.257-64.022l-.55-.786s-.235-.473-.628-.55c-.392-.08-1.256-1.102-1.256-1.102s-.393-.314-.393-.865c0-.55-.315-1.415-.08-2.36.236-.943.315-2.123.236-2.438-.078-.314.393-.393-.157-.707-.55-.315-1.65-.394-2.356-.394-.707 0-1.57.238-1.728.316-.157.08.864-2.36 1.02-2.753.158-.393.865-2.123.865-2.36 0-.235.236-.314-.235-.628-.47-.315-1.256-.472-1.727-.236-.47.235-.393-.316-.785.628s-.785 1.966-1.257 2.124c-.47.157-1.413.63-1.413.63s-1.177-.08-1.57-.158c-.393-.08-2.04-.944-2.355-1.494-.314-.55-.47-1.73-.47-2.28 0-.552.862-2.203.784-2.597-.08-.393.864-1.966.785-2.202-.08-.235.157-1.022.392-1.336.235-.315 1.413-.708 1.727-1.023.314-.313.863-.706 1.413-.864.55-.157 1.02-.314 1.413-.314s1.413-.865 1.57 0c.158.865.864.55 1.257.63.392.078.47.47 1.1-.552.627-1.022 1.255-1.337 1.255-1.1 0 .235 1.02-.08 1.178.157.157.235.47-.158 1.02.314.55.473 1.335.552 1.257.787-.08.236.314.236.314.472 0 .235.314-.55.314.864 0 1.416.392 2.28.392 2.28s.55 1.18.785.945c.236-.237.707-.866.707-.866s.785-.472.235-2.124c-.55-1.65-.157-2.123-.314-2.674-.157-.55-.157-.865.785-1.573.942-.708 3.22-2.28 3.77-2.595.548-.315 1.805-1.18 1.805-1.18s.47-.236.55-.865c.078-.63 1.57-1.73 1.648-2.045.08-.314 1.1-1.1 1.1-1.1s1.1-.63 1.02-1.023c-.077-.393 1.415-1.1 1.65-1.1.236 0 1.492.392 1.492-.316 0-.71 0-.866.785-1.495.785-.63 1.806-1.573 2.2-1.573.39 0 1.726-.708 2.275-.865.55-.158 2.278-.944.707 0-1.57.943-.55.393-.865 1.18-.313.786-.55 1.808.943.628 1.492-1.18 1.413-1.415 1.963-1.494.55-.077.158.237 1.335-.156 1.178-.393 1.257-.55 1.257-.55s.55-.473.235-.708c-.314-.237.314-.55-.864-.08-1.177.473-1.1.55-1.884.315-.786-.235-1.964-.156-1.1-.943.864-.786 1.963-1.022 1.256-1.337-.706-.314-2.512.08-2.748.157-.236.08-.785-.078-1.256 0-.47.08-.314-.628 0-.786.314-.156 1.335-.63 2.59-.943 1.257-.315 4.32-.393 5.026-.393.706 0 1.648.157 2.198-.236s1.65-1.022 1.806-1.337c.157-.314.785-.785.785-.785s.707-.708.314-1.023c-.39-.314-.784-1.022-1.098-.865-.314.157-.078 1.1-.706.078-.63-1.022-.55-1.18-.864-1.415-.314-.236-.628-.08-.392-1.18.235-1.1.157-1.573.157-1.573s.235-.943 0-1.022c-.236-.08-.393-.314-.785-.08-.393.237-2.59 1.338-3.062 1.574-.472.235-1.1-.945-.864-1.495.235-.55.078-.236-.236-1.022-.314-.787-1.57-.945-2.04-.945-.473 0-1.57-.708-1.886-.235-.314.47-1.962 1.965-2.277 2.123-.314.158-.785-1.337-1.02 1.1-.236 2.44.863 3.147-.393 3.305-1.256.158-2.355.865-2.355.865s-1.022.08-1.022.708c0 .63-.392 2.124-.864 2.28-.47.16-1.65-.077-2.04-.55-.394-.47.077-2.2.077-2.2l.708-.71s-5.025-.785-4.947-1.1c.08-.315-1.49-.865-1.647-1.337-.157-.472-.236-1.495-.08-1.888.158-.393 2.278-2.28 3.377-2.674 1.1-.393 2.984-1.258 3.534-1.416.55-.157 1.49-.078 1.806-.47.313-.395.392-1.102.392-1.102s-.157-1.102.157-.945c.313.16.863.395.94.63.08.237.08.787.63.158.55-.63 1.256-.866 1.884-1.18.628-.315 1.57-.236 2.12-.55.55-.315 1.492-.63 1.57-1.416.08-.786-.235-.55-.628-.63-.393-.078.157.08-1.178.71-1.335.628-.942.156-1.884.628s-1.02.55-1.1.157c-.078-.393.158-1.022.158-1.022s.078-.08-.47-.236c-.55-.158-.55.078-.63-.63-.078-.708.393-1.73-.392-1.416-.785.315-1.492-.236-2.04 1.337-.55 1.574-2.436 3.226-2.907 2.832-.47-.393-.55-.472-.942-.472-.392 0-.94-.47-1.648-.55-.707-.08-2.827-.08-3.376 0-.55.08-1.178-.315-1.65.158-.47.47-1.177 1.1-1.177 1.337 0 .236-.707-.866-.943-.787-.235.08-.864-.314-1.57-.314-.707 0-1.178-.394-1.413-.394-.235 0 .235-.63 0-.708-.235-.078-5.34-.235-5.34-.235s-1.648-.63-2.276-.55c-.628.078-2.355.156-3.69.392-1.336.235-3.3 1.022-3.926 1.1-.63.08-2.042.08-2.277-.314-.236-.393.078-.315-.236-.393-.315-.08-.08-.236-.786-.787-.707-.55.314-1.022-1.1-1.022-1.412 0-2.276-.08-3.532 0-1.257.08-3.847.708-4.16.63-.315-.08-2.828.392-3.22.157-.393-.236-2.356.865-2.748.787-.393-.08-1.885.08-2.277.315-.393.236-2.277.707-1.65 1.1.63.394.55.787.63 1.023.078.236-.63.786-.63.786s-.157 0-1.02-.313c-.864-.315-1.806-.472-2.2-.236-.39.237-1.098.71-.94 1.024.157.314 1.255 1.022 1.413.786.157-.236.55-.708 1.02-.63.472.08 1.178-.313.55.473-.628.786-1.178 1.18-1.57 1.26-.393.077-1.335.156-2.2.235-.863.08-.784-.315-1.57.472-.784.786-1.098.314-1.255 1.18-.157.864-.314.864 0 1.1.314.236-.628.315.078.55.707.237 1.57.473 1.492.71-.08.235.785-.316.314.313-.472.63-.786 1.18.156.55.942-.628 1.49-.157 2.277-.55.785-.393 1.57-.472 2.04-.786.472-.315.708-.786 1.414-1.023.707-.236.236.08.314.472.08.393 0 .472.473.157.47-.315.47-.078 1.1-.472.627-.392 1.333-.785 1.805-.55.47.237.628.237.942.237.314 0-.393-.08.314 0 .707.078-.314-.236 2.04.314 2.357.552 2.985.158 3.142 1.024.157.865.47-.08.863.47.392.552.628.08.863 1.024.236.944 0 3.54-.157 3.854-.157.314-.235.314-.157 1.022.078.708 1.02 4.09.706 4.326-.314.235-1.02.314-1.02.314l-.393 1.416s-.628 1.18-1.178 1.81c-.55.628-1.256 1.415-1.65 1.965-.39.55-.705 1.495-1.255 2.045-.55.55-1.02.314-.864 1.494.157 1.18 0 2.438.157 3.304.158.865.55 2.045.864 2.517.314.47.55.47 1.1.865.55.393 1.256.865 1.177 1.258-.08.393.078 2.832.078 2.832s.472.786.55 1.65c.08.867.628 1.732.628 1.732l.47 1.023s.237.08.55.707c.315.63.315.63.394.944.078.315.078.236.078.315 0 .08-.078-1.336-.235-1.73-.157-.393-.157-.865-.314-1.337s.078-1.023-.393-1.73c-.47-.708-.47-.787-.706-1.495-.236-.707-.55-1.494-.236-1.652.314-.156.55-1.18 1.178 0 .628 1.18.707.866.785 1.81.08.944.315 1.26.55 1.65.236.394.786 1.732 1.1 2.282.314.55 0-.314.706.787.707 1.1.786 1.337 1.178 2.202.393.865.628.865.864 1.494.235.63.078.473-.08 1.18-.156.708.158 1.495.158 1.495s1.1.393 1.178.63c.078.235 1.177.628 1.335.943.156.315 1.176.708 1.176.708s.864.55 1.178.707c.314.158 1.257.315 1.257.315s.628.158.864.236c.235.08.942.08.942.08s.628-.473.864-.316c.235.157.785-.315 1.02.08.236.392.707.392.943.707.235.314.47.314.863.707.393.394.786.315 1.178.63.392.314.706.314 1.178.314.47 0 .47 0 .785.08.313.078.47-.237.785.157.314.393.55.628.785 1.022.235.393.785.393.863 1.022.08.63.236.55.236 1.1 0 .552.314.788.55.945.235.157 1.098.943 1.098.943l1.178.237.942.708 1.022.313zM345.67 2.806l4.71-.59s1.65 0 2.475-.59c.824-.59 0-.59 2.473-1.06 2.473-.473 1.767-.71 3.062-.473 1.295.236 1.65.236 3.062.472 1.413.235 1.767-.118 3.062.235 1.296.354 1.884.236 2.944.236h3.298c1.65 0 3.18-.943 3.77-.354.588.59.94.354 2.943.59 2 .236 2.826-.236 3.65 0 .825.236 2.238-.118 3.887 0 1.648.118 2.473-.118 3.062-.118.588 0 1.176-.826 2-.118.826.708 1.885-.236 2.003.708.118.944 1.65.236.118.944-1.53.708-1.295.59-2.355 1.534-1.06.944.707 1.77-1.53 2.595-2.24.826-2.592-.472-3.18.944-.59 1.417 0 1.77-.118 2.48-.118.706-.354.824-1.06 1.414-.707.59-.707 0-2.356.354-1.648.354-2.825.708-3.532.708-.707 0-2.238.59-2.71.826-.47.236.826.59-1.648 1.298-2.473.708-3.062.59-3.77 1.533-.705.944-.47 1.063-.94 1.652-.472.59-1.885 2.95-2.592 2.36-.706-.59-1.06-.472-1.65-1.062-.588-.59-.94-1.415-1.294-1.887-.354-.472-.472-1.652-.59-2.36-.117-.708-1.177-2.36 0-2.124 1.178.236 1.885.118 2.238-.117.354-.237.707-1.062.707-1.062s-.118-1.298-.472-2.006c-.353-.708-.118-1.298-.706-2.005-.59-.708-.59-.59-1.414-1.298-.824-.708-.59-1.062-1.884-1.18-1.296-.118-1.65-.472-2.12-.354-.47.118-2.002-.826-.354-.944 1.65-.118 3.18.118 3.18.118s2.12-.944 1.414-1.062c-.707-.118 1.06-1.18-.59-.826-1.648.354-3.532.826-4.004.944-.47.118-1.648.236-2.826.59-1.177.354-2.59.236-3.298 1.062-.706.826 0 .944-.706.826-.707-.118.588-.826-1.06 0-1.65.826-1.178.708-2.002.472-.825-.236-1.414-.59-1.414-.59s1.06-.118-.47-.236-1.53-.118-2.12-.826c-.59-.708-.236-.708.117-.944.355-.236.59-.708.59-.708zm-2.59 5.31c-.59.59-2.003 1.415-1.65 1.77.354.353.59 1.65 1.296 1.296.707-.353-.118-1.533 2.59-.59 2.71.944 2.474-.117 3.063 1.298.588 1.416 1.06 2.478.705 2.832-.353.354-.47.708-1.648 1.062-1.178.354-1.65.826-.825 1.415.825.59 2.356 1.18 3.062 1.533.707.354 2.827.472 1.767-.707-1.06-1.18.236-1.534.236-1.534s2.003 1.534 1.296-.236c-.707-1.77-1.178-1.77-.707-1.77.472 0 1.414.59 1.414.59l.47-.944-.47-1.533-1.532-1.535s1.295-1.18-.472-1.415c-1.766-.236-1.65-.236-2.59-.827-.943-.59-1.06-.825-2.827-.47-1.768.353-2.357.59-2.357.59l-.824-.828zM316.815 9.53c.707-.707 2.59-2.36 3.298-1.887.706.472 1.766-.354 2.59.354.825.708 1.767 1.534 2.474 1.77.707.235 1.53-.59 2.238-.236.706.355 3.18-1.77 2.708-.117-.47 1.652.59 2.123-.706 2.242-1.296.118-2.71 1.06-3.298.708-.59-.354-1.06-.708-2.003-.236-.942.47-.47.47-1.53.236-1.06-.236-1.296.235-1.53-.12-.237-.352-.943-.234-.826-1.296.12-1.062.472-.944-.235-.944-.706 0-1.295.118-1.766-.236-.472-.354-1.414-.236-1.414-.236z",
    stroke: "#8BC34A",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  })));
};

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
init_react();
var import_react3 = require("@nextui-org/react");
var React41 = __toESM(require("react"));

// app/components/ExternalLinkButton/ExternalLinkButton.css
var ExternalLinkButton_default = "/build/_assets/ExternalLinkButton-HSYTIT2Y.css";

// app/components/ExternalLinkButton/ExternalLinkButton.tsx
var links8 = () => [
  {
    rel: "stylesheet",
    href: ExternalLinkButton_default
  }
];
var ExternalLinkButton = (props) => {
  const children = typeof props.children === "string" ? /* @__PURE__ */ React41.createElement("span", null, props.children) : props.children;
  return /* @__PURE__ */ React41.createElement("a", __spreadProps(__spreadValues({}, props.linkProps), {
    href: props.to,
    className: "ExternalLinkButton__Wrapper py-2 px-3 text-sm"
  }), /* @__PURE__ */ React41.createElement(import_react3.Button, {
    auto: true,
    ghost: true,
    rounded: true,
    color: "gradient",
    role: "link",
    name: props.accessibilityName,
    "aria-label": props.accessibilityName,
    tabIndex: -1,
    className: "ExternalLinkButton__Button"
  }, React41.cloneElement(children, __spreadProps(__spreadValues({}, children.props), {
    className: "ExternalLinkButton__ButtonContents relative inline-flex",
    children: /* @__PURE__ */ React41.createElement(React41.Fragment, null, children.props.children, /* @__PURE__ */ React41.createElement("div", {
      className: "relative flex items-center"
    }, /* @__PURE__ */ React41.createElement(ExternalLinkSvg, null)))
  }))));
};
var ExternalLinkSvg = () => {
  return /* @__PURE__ */ React41.createElement("svg", {
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
  }, /* @__PURE__ */ React41.createElement("path", {
    d: "M5 12h13M12 5l7 7-7 7"
  }));
};
var ExternalLinkButton_default2 = ExternalLinkButton;

// app/sections/AboutMe/AboutMe.tsx
init_react();
var React48 = __toESM(require("react"));

// app/sections/AboutMe/AboutMe.css
var AboutMe_default = "/build/_assets/AboutMe-KOROGJM3.css";

// app/sections/AboutMe/MyStory.tsx
init_react();
var React42 = __toESM(require("react"));
var import_react4 = require("@nextui-org/react");
var MyStory = ({}) => {
  return /* @__PURE__ */ React42.createElement("div", {
    className: "my-story-wrapper flex flex-col items-baseline w-full text-textSmColor"
  }, /* @__PURE__ */ React42.createElement("span", {
    className: "my-story-title reveal-text text-textLgColor leading-none margin-top:50 relative after:pointer-events-none py-4 font-extrabold whitespace-nowrap cursor-default after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 lg:text-6xl md:text-5xl sm:text-4xl xs:text-3xl xxs:text-2xl"
  }, "\xDCber Uns"), /* @__PURE__ */ React42.createElement("div", {
    className: "fade-in-text my-story-content md:mt-2 flex flex-col sm:flex-row items-center"
  }, /* @__PURE__ */ React42.createElement("p", {
    className: "my-4 text-xl xs:mb-10 sm:w-4/5 leading-20 text-text-SmColor"
  }, "Seit Jahren betreiben und entwickeln wir einzigartige Shopify Stores. Durch Design \xFCberzeugend und durch Analytics best\xE4tigt: E-Commerce Development f\xFCr h\xF6chste Anspr\xFCche. "), /* @__PURE__ */ React42.createElement(Globe, null)), /* @__PURE__ */ React42.createElement("div", {
    className: "spacer-div mb-15 sm:mb-15"
  }), /* @__PURE__ */ React42.createElement(MyselfCard, null), /* @__PURE__ */ React42.createElement("div", {
    className: "spacer-div mb-10 sm:mb-5"
  }), /* @__PURE__ */ React42.createElement(MyselfCard2, null));
};
var MyStory_default = MyStory;
var MyselfCard = () => {
  return /* @__PURE__ */ React42.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React42.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React42.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Neuen Shop entwickeln"), /* @__PURE__ */ React42.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Wir analysieren Ihre Bed\xFCrfnisse und erstellen in enger Absprache Ihren einzigarten Online Store. Auch bei der Migration von anderen Plattformen zu Shopify helfen wir unseren Kunden."), /* @__PURE__ */ React42.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React42.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React42.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React42.createElement("img", {
    src: "/images/HelloBelloLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React42.createElement(import_react4.Button, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Projekt Ansehen"))));
};
var MyselfCard2 = () => {
  return /* @__PURE__ */ React42.createElement("div", {
    className: "myself-card px-8 pt-6 w-full overflow-visible relative custom2:w-4/6"
  }, /* @__PURE__ */ React42.createElement("div", {
    className: "my-hobbies"
  }, /* @__PURE__ */ React42.createElement("h2", {
    className: "text-2xl font-medium mb-2"
  }, "Bestehenden Store optimieren"), /* @__PURE__ */ React42.createElement("p", {
    className: " text-base text-subText leading-7"
  }, "Shopify Development liegt in unserer Natur. Sowohl komplexe Automation von Bestellprozessen als auch die Erstellung von Private Apps: Devato ist Ihr Ansprechpartner."), /* @__PURE__ */ React42.createElement("div", {
    className: "pb-6"
  })), /* @__PURE__ */ React42.createElement("div", {
    className: "divider"
  }, /* @__PURE__ */ React42.createElement("div", {
    className: "divider-line mt-10"
  }, /* @__PURE__ */ React42.createElement("img", {
    src: "/images/UnimalsLogo.png",
    alt: "myself-card",
    className: "myself-card-img",
    loading: "lazy",
    title: "HB Image"
  }), /* @__PURE__ */ React42.createElement(import_react4.Button, {
    color: "gradient",
    rounded: true,
    bordered: true
  }, "Zur Case Study"))));
};

// app/sections/AboutMe/Titles.tsx
init_react();
var React43 = __toESM(require("react"));
var Titles = ({}) => {
  return /* @__PURE__ */ React43.createElement("div", {
    className: "title-content text-aboutMe-aboutMeText"
  }, /* @__PURE__ */ React43.createElement("div", {
    className: "title-content__container inline-flex overflow-hidden font-semibold items-center"
  }, /* @__PURE__ */ React43.createElement("h1", {
    className: "hidden"
  }, "Wir sind Software Engineers, Marketing Experten, Designer und Process Engineers."), /* @__PURE__ */ React43.createElement("p", {
    className: "title-content__container__text m-0  inline-flex"
  }, "Wir sind"), /* @__PURE__ */ React43.createElement("span", {
    className: "blinker"
  }, "["), /* @__PURE__ */ React43.createElement("ul", {
    className: "title-content__container__list text-center list-none"
  }, /* @__PURE__ */ React43.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Software Developer"), /* @__PURE__ */ React43.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shopify Experten"), /* @__PURE__ */ React43.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "Shop Designer"), /* @__PURE__ */ React43.createElement("li", {
    className: "title-content__container__list__item m-0"
  }, "E-Commerce Spezialisten")), /* @__PURE__ */ React43.createElement("span", {
    className: "blinker"
  }, "]")));
};
var Titles_default = Titles;

// app/sections/AboutMe/Hi.tsx
init_react();
var React44 = __toESM(require("react"));
var import_use_typewriter_hook = require("use-typewriter-hook");
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
  return /* @__PURE__ */ React44.createElement("span", {
    className: "font-semibold lg:text-7xl custom:text-6xl md:text-5xl sm:text-4xl xs:text-5xl xxs:text-4xl text-aboutMe-aboutMeText",
    "aria-live": "polite",
    "aria-label": "Wir sind Devato"
  }, /* @__PURE__ */ React44.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React44.createElement("span", {
    className: ""
  }, "Hi, wir sind"), /* @__PURE__ */ React44.createElement("span", null, " ")), /* @__PURE__ */ React44.createElement("span", {
    className: "welcome inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }), /* @__PURE__ */ React44.createElement("span", {
    className: "inline-flex whitespace-pre leading-none text-center justify-center items-center after:inline-flex after:items-center"
  }, /* @__PURE__ */ React44.createElement("span", {
    className: `${wrapperClassName}`
  }, fragments)));
};
var Hi_default = Hi;
var splitTargetText = (str, startIndex, endIndex) => {
  const customStyle = {
    color: "var(--alissa)"
  };
  return /* @__PURE__ */ React44.createElement(React44.Fragment, null, /* @__PURE__ */ React44.createElement("span", {
    className: "inline-block"
  }, str.slice(0, startIndex)), /* @__PURE__ */ React44.createElement("span", {
    className: "inline-block"
  }, /* @__PURE__ */ React44.createElement("span", {
    className: "custom-typewriter-text",
    style: customStyle
  }, str.slice(startIndex, endIndex))), /* @__PURE__ */ React44.createElement("span", {
    className: "inline-block"
  }, str.slice(endIndex, str.length)));
};

// app/sections/AboutMe/Facts.tsx
init_react();
var React45 = __toESM(require("react"));
var import_react5 = require("@headlessui/react");
var import_solid2 = require("@heroicons/react/solid");
var Facts = ({}) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React45.createElement("div", {
    className: "Mobile__Facts__Wrapper"
  }, /* @__PURE__ */ React45.createElement("div", {
    className: "Mobile__Facts__Title__Wrapper inline-flex items-center"
  }, /* @__PURE__ */ React45.createElement("span", {
    className: "md:text-4xl sm:text-3xl font-medium mb-5 text-textLgColor mb-8"
  }, "So unterst\xFCtzen wir unsere Kunden")), /* @__PURE__ */ React45.createElement("div", {
    className: `Mobile__FactCards w-full rounded-2xl w-full mx-auto bg-transparent text-lg grid grid-rows-8 gap-2`
  }, facts.map((fact) => /* @__PURE__ */ React45.createElement(FactCard, {
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
  const className = props.theme === "light" /* LIGHT */ ? `text-${props.color}-900 bg-${props.color}-100 hover:bg-${props.color}-200 focus-visible:ring-${props.color}-500` : `text-${props.color}-100 bg-${props.color}-900 hover:bg-${props.color}-700 focus-visible:ring-${props.color}-500`;
  const descriptionText = props.theme === "light" /* LIGHT */ ? "text-gray-600" : "text-gray-300";
  return /* @__PURE__ */ React45.createElement(import_react5.Disclosure, null, ({ open }) => /* @__PURE__ */ React45.createElement(React45.Fragment, null, /* @__PURE__ */ React45.createElement(import_react5.Disclosure.Button, {
    className: `Mobile__FactCard__Title__Btn flex justify-between items-center w-full px-4 py-2 font-medium text-left rounded-lg ${className} focus:outline-none focus-visible:ring focus-visible:ring-opacity-75`,
    name: open ? "close" : "open"
  }, /* @__PURE__ */ React45.createElement("span", null, props.title), /* @__PURE__ */ React45.createElement(import_solid2.ChevronDownIcon, {
    className: `${open ? "transform rotate-180" : ""} w-5 h-5 text-${props.color}-500`
  })), /* @__PURE__ */ React45.createElement(import_react5.Disclosure.Panel, {
    className: "px-4 pt-4 pb-2 text-gray-500 flex flex-row items-center justify-start text-base"
  }, /* @__PURE__ */ React45.createElement("span", {
    className: descriptionText
  }, props.description), /* @__PURE__ */ React45.createElement("img", {
    src: props.image,
    alt: props.imageAlt,
    title: props.imageAlt,
    className: "Mobile__FactCard__Image ml-2 object-cover w-32 rounded-lg"
  }))));
};

// app/sections/AboutMe/Testimonials.tsx
init_react();
var React46 = __toESM(require("react"));
var Testimonials = ({}) => {
  return /* @__PURE__ */ React46.createElement("div", {
    className: "partner"
  }, /* @__PURE__ */ React46.createElement("div", {
    className: "container mx-auto px-6 space-y-8 md:px-12"
  }, /* @__PURE__ */ React46.createElement("div", {
    className: "m-auto text-center "
  }, /* @__PURE__ */ React46.createElement("h2", {
    className: "text-2xl text-textSmColor font-bold md:text-4xl"
  }, "Development Partner und Unternehmen")), /* @__PURE__ */ React46.createElement("div", {
    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 rounded-md"
  }, /* @__PURE__ */ React46.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React46.createElement("img", {
    src: "images/cloud.png",
    className: "w-100",
    alt: ""
  })), /* @__PURE__ */ React46.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React46.createElement("img", {
    src: "images/partner.png",
    className: "w-180 mt-10",
    alt: ""
  })), /* @__PURE__ */ React46.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React46.createElement("img", {
    src: "images/plus.png",
    className: "w-100 mt-10",
    alt: ""
  })), /* @__PURE__ */ React46.createElement("div", {
    className: "p-4"
  }, /* @__PURE__ */ React46.createElement("img", {
    src: "images/aws.png",
    className: "w-50 mt-3",
    alt: ""
  })))));
};
var Testimonials_default = Testimonials;

// app/sections/AboutMe/AboutMe.tsx
var import_react6 = require("@nextui-org/react");

// app/sections/AboutMe/Services.tsx
init_react();
var React47 = __toESM(require("react"));
var Services = () => {
  return /* @__PURE__ */ React47.createElement("section", {
    className: "pt-20 lg:pt-[120px] pb-12 lg:pb-[90px]"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "container"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "flex flex-wrap -mx-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "w-full px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "text-center mx-auto mb-12 text-textSmColor lg:mb-20 max-w-[510px]"
  }, /* @__PURE__ */ React47.createElement("span", {
    className: "font-semibold text-lg text-primary mb-2 block"
  }, "Unsere Services"), /* @__PURE__ */ React47.createElement("h2", {
    className: "\n                  font-bold\n                  text-3xl\n                  sm:text-4xl\n                  md:text-[40px]\n                  mb-4\n                  text-textSmColor\n                  "
  }, "Angebote f\xFCr Unternehmen"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-base text-body-color text-text-SmColor"
  }, "Durch das Management eigener Shopify Stores mit einem Bestellvolumen von mehr als 10.000 Produkten monatlich k\xF6nnen wir Ihnen Services bieten die Sie wirklich ben\xF6tigen.")))), /* @__PURE__ */ React47.createElement("div", {
    className: "flex flex-wrap -mx-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "32",
    height: "32",
    viewBox: "0 0 32 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("path", {
    d: "M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z",
    fill: "white"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Custom Shopify Store"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Anhand Ihrer Vorstellungen und Ziele bauen wir einen personalisierten Shopify Store f\xFCr Sie und richten Ihre Produkte oder Dienstleistungen ein."))), /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "39",
    height: "22",
    viewBox: "0 0 39 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("mask", {
    id: "path-1-inside-1",
    fill: "white"
  }, /* @__PURE__ */ React47.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M19.5004 0C14.6345 0 11.4767 2.14015 10.0251 6.42044C9.95552 6.62552 10.2264 6.7705 10.3756 6.61355C12.182 4.7134 14.2484 4.03687 16.575 4.58345C18.0583 4.93186 19.119 5.94382 20.2921 7.0642C22.2042 8.88862 24.4173 11 29.2502 11C34.1152 11 37.2736 8.85997 38.7247 4.58049C38.7943 4.3754 38.5234 4.23044 38.3742 4.38741C36.5684 6.28738 34.502 6.96375 32.1756 6.41655C30.6915 6.06814 29.6308 5.05618 28.4577 3.93652C26.5456 2.11066 24.3333 0 19.5004 0ZM-nan -nanL9.74981 11C4.88456 11 1.72609 13.1402 0.275037 17.4207C0.205519 17.6258 0.476365 17.7707 0.62555 17.6138C2.43196 15.7135 4.49843 15.0368 6.82441 15.5835C8.30851 15.9319 9.36923 16.9438 10.5423 18.0642C12.4544 19.8886 14.6667 22 19.5004 22C24.3656 22 27.5241 19.8604 28.9752 15.58C29.0447 15.3749 28.7738 15.23 28.6246 15.3869C26.8182 17.2873 24.7517 17.9639 22.425 17.4173C20.9417 17.0681 19.881 16.0562 18.7079 14.9365C16.7958 13.1121 14.5827 11 9.74981 11L-nan -nanL-nan -nanZ"
  })), /* @__PURE__ */ React47.createElement("path", {
    d: "M16.575 4.58345L16.3463 5.55695L16.3463 5.55696L16.575 4.58345ZM20.2921 7.0642L19.6014 7.78736L19.6018 7.78769L20.2921 7.0642ZM32.1756 6.41655L32.4046 5.44311L32.4041 5.44301L32.1756 6.41655ZM28.4577 3.93652L27.7671 4.65974L27.7673 4.6599L28.4577 3.93652ZM6.82441 15.5835L6.59564 16.5569L6.59586 16.557L6.82441 15.5835ZM10.5423 18.0642L9.85161 18.7874L9.85196 18.7877L10.5423 18.0642ZM22.425 17.4173L22.1959 18.3907L22.1963 18.3908L22.425 17.4173ZM18.7079 14.9365L19.3983 14.2131L19.3982 14.213L18.7079 14.9365ZM0.275037 17.4207L-0.672026 17.0997L0.275037 17.4207ZM0.62555 17.6138L-0.0992438 16.9248L0.62555 17.6138ZM28.9752 15.58L29.9222 15.901L28.9752 15.58ZM28.6246 15.3869L27.8998 14.6979L28.6246 15.3869ZM38.7247 4.58049L37.7777 4.25936L38.7247 4.58049ZM38.3742 4.38741L39.099 5.07632L38.3742 4.38741ZM10.0251 6.42044L9.07806 6.09926L10.0251 6.42044ZM10.3756 6.61355L11.1004 7.30255L10.3756 6.61355ZM19.5004 -1C16.9224 -1 14.7064 -0.432275 12.9214 0.777273C11.1301 1.99111 9.86051 3.79212 9.07806 6.09926L10.9721 6.74162C11.6413 4.76847 12.6764 3.35925 14.0434 2.43295C15.4167 1.50235 17.2126 1 19.5004 1V-1ZM11.1004 7.30255C12.6907 5.62967 14.4042 5.10069 16.3463 5.55695L16.8037 3.60996C14.0926 2.97305 11.6733 3.79712 9.65083 5.92456L11.1004 7.30255ZM16.3463 5.55696C17.5202 5.83268 18.3899 6.63023 19.6014 7.78736L20.9828 6.34104C19.8482 5.25741 18.5964 4.03104 16.8036 3.60995L16.3463 5.55696ZM19.6018 7.78769C20.5507 8.69312 21.6704 9.7678 23.1998 10.5957C24.7495 11.4346 26.6758 12 29.2502 12V10C26.9917 10 25.395 9.50973 24.1519 8.83684C22.8885 8.15292 21.9456 7.2597 20.9824 6.34071L19.6018 7.78769ZM29.2502 12C31.8278 12 34.0437 11.4323 35.8286 10.2229C37.6199 9.00923 38.8895 7.20846 39.6718 4.90163L37.7777 4.25936C37.1088 6.23199 36.0737 7.64098 34.7067 8.56718C33.3334 9.49769 31.5376 10 29.2502 10V12ZM37.6493 3.6985C36.0597 5.37104 34.3464 5.89986 32.4046 5.44311L31.9466 7.38998C34.6577 8.02765 37.0771 7.20371 39.099 5.07632L37.6493 3.6985ZM32.4041 5.44301C31.2295 5.16725 30.3598 4.36966 29.1482 3.21314L27.7673 4.6599C28.9017 5.74271 30.1535 6.96904 31.947 7.39008L32.4041 5.44301ZM29.1483 3.2133C28.1993 2.30704 27.0797 1.23211 25.5504 0.404169C24.0008 -0.434783 22.0747 -1 19.5004 -1V1C21.7589 1 23.3554 1.49011 24.5983 2.16296C25.8614 2.84681 26.8041 3.74014 27.7671 4.65974L29.1483 3.2133ZM9.74981 10C7.17206 10 4.95609 10.5678 3.17112 11.7774C1.3798 12.9913 0.110142 14.7924 -0.672026 17.0997L1.2221 17.7418C1.89099 15.7686 2.92609 14.3594 4.29308 13.433C5.66642 12.5024 7.46231 12 9.74981 12V10ZM1.35034 18.3028C2.94075 16.6297 4.65428 16.1007 6.59564 16.5569L7.05318 14.61C4.34259 13.973 1.92317 14.7973 -0.0992438 16.9248L1.35034 18.3028ZM6.59586 16.557C7.77045 16.8327 8.64013 17.6303 9.85161 18.7874L11.233 17.341C10.0983 16.2573 8.84657 15.031 7.05295 14.6099L6.59586 16.557ZM9.85196 18.7877C10.8008 19.6931 11.9204 20.7678 13.4497 21.5957C14.9993 22.4346 16.9257 23 19.5004 23V21C17.2415 21 15.6448 20.5097 14.4018 19.8368C13.1385 19.1529 12.1958 18.2598 11.2326 17.3407L9.85196 18.7877ZM19.5004 23C22.0781 23 24.294 22.4324 26.079 21.223C27.8704 20.0093 29.14 18.2084 29.9222 15.901L28.0281 15.2589C27.3592 17.232 26.3241 18.6411 24.9572 19.5673C23.5838 20.4978 21.7879 21 19.5004 21V23ZM27.8998 14.6979C26.3095 16.371 24.5959 16.9 22.6537 16.4438L22.1963 18.3908C24.9075 19.0277 27.327 18.2035 29.3494 16.0759L27.8998 14.6979ZM22.6541 16.4439C21.4798 16.1675 20.61 15.3697 19.3983 14.2131L18.0174 15.6599C19.1519 16.7427 20.4035 17.9688 22.1959 18.3907L22.6541 16.4439ZM19.3982 14.213C18.4494 13.3077 17.3296 12.2328 15.8003 11.4047C14.2506 10.5656 12.3242 10 9.74981 10V12C12.0083 12 13.6049 12.4904 14.848 13.1635C16.1115 13.8476 17.0544 14.741 18.0176 15.66L19.3982 14.213ZM-0.672026 17.0997C-0.889639 17.7416 -0.537234 18.2988 -0.109577 18.5315C0.304715 18.7568 0.918575 18.757 1.35034 18.3028L-0.0992438 16.9248C0.18334 16.6276 0.587185 16.6337 0.846137 16.7746C1.11845 16.9227 1.3702 17.3049 1.2221 17.7418L-0.672026 17.0997ZM29.9222 15.901C30.1398 15.2591 29.7874 14.7019 29.3598 14.4693C28.9455 14.2439 28.3316 14.2437 27.8998 14.6979L29.3494 16.0759C29.0669 16.3732 28.663 16.367 28.4041 16.2261C28.1317 16.078 27.88 15.6958 28.0281 15.2589L29.9222 15.901ZM39.6718 4.90163C39.8895 4.25959 39.537 3.70235 39.1093 3.46973C38.695 3.24438 38.0811 3.24419 37.6493 3.6985L39.099 5.07632C38.8164 5.37366 38.4126 5.36747 38.1537 5.22663C37.8814 5.07852 37.6295 4.69631 37.7777 4.25936L39.6718 4.90163ZM9.07806 6.09926C8.86033 6.74124 9.21275 7.29849 9.64037 7.53115C10.0546 7.75655 10.6685 7.7568 11.1004 7.30255L9.65083 5.92456C9.93346 5.62726 10.3373 5.63349 10.5962 5.77436C10.8685 5.9225 11.1203 6.30472 10.9721 6.74162L9.07806 6.09926Z",
    fill: "white",
    mask: "url(#path-1-inside-1)"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Shop Migration"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie nutzen noch immer WooCommerce oder veraltete Shop Systeme? Wir helfen Ihnen beim Umzug Ihrer E-Commerce Assets."))), /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("path", {
    d: "M17.5 7.875C8.20312 7.875 0.65625 16.0781 0.65625 26.1406C0.65625 26.6875 1.09375 27.125 1.64062 27.125H33.3594C33.9062 27.125 34.3438 26.6875 34.3438 26.1406C34.3438 16.0781 26.7969 7.875 17.5 7.875ZM19.4687 25.2109L17.9922 20.5078C17.8281 20.0156 17.1719 20.0156 17.0078 20.5078L15.5312 25.2109H2.625C3.0625 16.625 9.57031 9.78906 17.5 9.78906C25.4297 9.78906 31.9375 16.625 32.375 25.2109H19.4687Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M17.5 13.7812C16.9531 13.7812 16.5156 14.2187 16.5156 14.7656V16.1875C16.5156 16.7344 16.9531 17.1719 17.5 17.1719C18.0469 17.1719 18.4844 16.7344 18.4844 16.1875V14.7656C18.4844 14.2187 18.0469 13.7812 17.5 13.7812Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M25.8672 17.8828L24.9922 18.8125C24.6094 19.1953 24.6094 19.7969 24.9922 20.1797C25.1563 20.3438 25.4297 20.4531 25.6484 20.4531C25.9219 20.4531 26.1406 20.3438 26.3594 20.1797L27.2344 19.25C27.6172 18.8672 27.6172 18.2656 27.2344 17.8828C26.8516 17.5 26.25 17.5 25.8672 17.8828Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M9.13281 17.8828C8.80468 17.5 8.14843 17.4453 7.76562 17.8281C7.38281 18.1562 7.32812 18.8125 7.71093 19.1953L8.53125 20.125C8.69531 20.3437 8.96874 20.4531 9.24218 20.4531C9.46093 20.4531 9.67968 20.3984 9.89843 20.2344C10.2812 19.9062 10.3359 19.25 9.95312 18.8672L9.13281 17.8828Z",
    fill: "white"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Store Speed Optimierung"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Shopify Source Codes sind nicht auf Speed optimiert, obwohl dieser das Website Ranking beeinflusst. Wir beschleunigen Ihre Page Loading Zeiten."))), /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("path", {
    d: "M10.7734 14.3281H3.82813C2.07813 14.3281 0.65625 12.9062 0.65625 11.1562V4.21094C0.65625 2.46094 2.07813 1.03906 3.82813 1.03906H10.7734C12.5234 1.03906 13.9453 2.46094 13.9453 4.21094V11.1562C13.9453 12.9062 12.5234 14.3281 10.7734 14.3281ZM3.82813 2.95312C3.17188 2.95312 2.57031 3.5 2.57031 4.21094V11.1562C2.57031 11.8125 3.11719 12.4141 3.82813 12.4141H10.7734C11.4297 12.4141 12.0313 11.8672 12.0313 11.1562V4.21094C12.0313 3.55469 11.4844 2.95312 10.7734 2.95312H3.82813Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M31.1719 14.3281H24.2266C22.4766 14.3281 21.0547 12.9062 21.0547 11.1562V4.21094C21.0547 2.46094 22.4766 1.03906 24.2266 1.03906H31.1719C32.9219 1.03906 34.3438 2.46094 34.3438 4.21094V11.1562C34.3438 12.9062 32.9219 14.3281 31.1719 14.3281ZM24.2266 2.95312C23.5703 2.95312 22.9688 3.5 22.9688 4.21094V11.1562C22.9688 11.8125 23.5156 12.4141 24.2266 12.4141H31.1719C31.8281 12.4141 32.4297 11.8672 32.4297 11.1562V4.21094C32.4297 3.55469 31.8828 2.95312 31.1719 2.95312H24.2266Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M10.7734 33.9609H3.82813C2.07813 33.9609 0.65625 32.5391 0.65625 30.7891V23.8438C0.65625 22.0938 2.07813 20.6719 3.82813 20.6719H10.7734C12.5234 20.6719 13.9453 22.0938 13.9453 23.8438V30.7891C13.9453 32.5391 12.5234 33.9609 10.7734 33.9609ZM3.82813 22.5859C3.17188 22.5859 2.57031 23.1328 2.57031 23.8438V30.7891C2.57031 31.4453 3.11719 32.0469 3.82813 32.0469H10.7734C11.4297 32.0469 12.0313 31.5 12.0313 30.7891V23.8438C12.0313 23.1875 11.4844 22.5859 10.7734 22.5859H3.82813Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M31.1719 33.9609H24.2266C22.4766 33.9609 21.0547 32.5391 21.0547 30.7891V23.8438C21.0547 22.0938 22.4766 20.6719 24.2266 20.6719H31.1719C32.9219 20.6719 34.3438 22.0938 34.3438 23.8438V30.7891C34.3438 32.5391 32.9219 33.9609 31.1719 33.9609ZM24.2266 22.5859C23.5703 22.5859 22.9688 23.1328 22.9688 23.8438V30.7891C22.9688 31.4453 23.5156 32.0469 24.2266 32.0469H31.1719C31.8281 32.0469 32.4297 31.5 32.4297 30.7891V23.8438C32.4297 23.1875 31.8828 22.5859 31.1719 22.5859H24.2266Z",
    fill: "white"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "App & Backend Entwicklung"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie wollen mehr aus Ihrem Shopify Store herausholen oder einfach ein komplexes Backend Problem l\xF6sen? Devato entwickelt f\xFCr Sie die optimale L\xF6sung."))), /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("path", {
    d: "M29.5312 21.6562L28.6563 21.1641L29.6953 20.5625C30.7344 19.9062 31.3359 18.8125 31.2812 17.6094C31.2266 16.4063 30.625 15.3125 29.5312 14.7109L27.8906 13.7813L29.6406 12.6875C30.6797 12.0313 31.2812 10.9375 31.2266 9.73438C31.1719 8.53125 30.5703 7.4375 29.4766 6.83594L19.25 1.09375C18.2109 0.492187 16.9531 0.546875 15.9141 1.09375L5.41406 7.21875C4.375 7.82031 3.71875 8.91406 3.71875 10.1172C3.71875 11.3203 4.375 12.4141 5.41406 13.0156L7.10938 14L5.41406 14.9844C4.375 15.5859 3.71875 16.6797 3.71875 17.8828C3.71875 19.0859 4.32031 20.1797 5.41406 20.7812L6.39844 21.3281L5.46875 21.875C4.42969 22.4766 3.77344 23.5703 3.77344 24.7734C3.77344 25.9766 4.375 27.0703 5.46875 27.6719L15.9141 33.6875C16.4609 34.0156 17.0078 34.125 17.6094 34.125C18.2109 34.125 18.8125 33.9609 19.3594 33.6328L29.6953 27.2891C30.7344 26.6328 31.3359 25.5391 31.2812 24.3359C31.2266 23.2969 30.625 22.2031 29.5312 21.6562ZM5.63281 10.1172C5.63281 9.57031 5.90625 9.13281 6.34375 8.85938L16.8438 2.78906C17.0625 2.67969 17.3359 2.57031 17.5547 2.57031C17.7734 2.57031 18.0469 2.625 18.2656 2.73437L28.5469 8.47656C28.9844 8.75 29.2578 9.1875 29.3125 9.73438C29.3125 10.2812 29.0391 10.7188 28.6016 10.9922L18.3203 17.3906C17.8828 17.6641 17.2812 17.6641 16.8438 17.3906L6.39844 11.375C5.90625 11.1562 5.63281 10.6641 5.63281 10.1172ZM5.63281 17.9375C5.63281 17.3906 5.90625 16.9531 6.34375 16.6797L9.02344 15.1484L15.8594 19.0859C16.4062 19.4141 16.9531 19.5234 17.5547 19.5234C18.1562 19.5234 18.7578 19.3594 19.3047 19.0312L26.0312 14.875L28.6016 16.2969C29.0391 16.5703 29.3125 17.0078 29.3672 17.5547C29.3672 18.1016 29.0938 18.5391 28.6563 18.8125L18.3203 25.2656C17.8828 25.5391 17.2812 25.5391 16.8438 25.2656L6.39844 19.25C5.90625 18.9766 5.63281 18.4844 5.63281 17.9375ZM28.6563 25.8125L18.3203 32.2109C17.8828 32.4844 17.2812 32.4844 16.8438 32.2109L6.39844 26.1953C5.96094 25.9219 5.6875 25.4844 5.6875 24.9375C5.6875 24.3906 5.96094 23.9531 6.39844 23.6797L8.3125 22.5859L15.8594 26.9609C16.4062 27.2891 16.9531 27.3984 17.5547 27.3984C18.1562 27.3984 18.7578 27.2344 19.3047 26.9062L26.7969 22.2578L28.6563 23.2969C29.0938 23.5703 29.3672 24.0078 29.4219 24.5547C29.3672 25.0469 29.0938 25.5391 28.6563 25.8125Z",
    fill: "white"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Rechnungsschreibung und Buchhaltung"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Wir erstellen einen automatisierten und rechtsicheren Prozess von der Rechnungserstellung bis hin zur fertigen monatlichen Buchhaltung"))), /* @__PURE__ */ React47.createElement("div", {
    className: "w-full md:w-1/2 lg:w-1/3 px-4"
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n               p-10\n               md:px-7\n               xl:px-10\n               rounded-[20px]\n               bg-white\n               shadow-md\n               hover:shadow-lg\n               mb-8\n               "
  }, /* @__PURE__ */ React47.createElement("div", {
    className: "\n                  w-[70px]\n                  h-[70px]\n                  flex\n                  items-center\n                  justify-center\n                  bg-primary\n                  rounded-2xl\n                  mb-8\n                  "
  }, /* @__PURE__ */ React47.createElement("svg", {
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ React47.createElement("path", {
    d: "M4.04684 15.5859C4.2109 15.5859 4.37497 15.5859 4.48434 15.5313L10.5547 13.3984C11.0468 13.2344 11.3203 12.6875 11.1562 12.1953C10.9922 11.7031 10.4453 11.4297 9.95309 11.5938L6.28903 12.9063C8.09372 7.92969 12.8515 4.53906 18.375 4.53906C24.2265 4.53906 29.3672 8.42188 30.789 14.0547C30.8984 14.5469 31.4453 14.875 31.9375 14.7656C32.4297 14.6563 32.7578 14.1094 32.6484 13.6172C31.0078 7.16406 25.1015 2.67969 18.375 2.67969C11.8125 2.67969 6.12497 6.89063 4.26559 13.0156L2.57028 8.25781C2.40622 7.76563 1.85934 7.49219 1.36715 7.65625C0.874967 7.82031 0.60153 8.36719 0.765592 8.85938L2.84372 14.8203C3.00778 15.2578 3.55465 15.5859 4.04684 15.5859Z",
    fill: "white"
  }), /* @__PURE__ */ React47.createElement("path", {
    d: "M34.2343 27.2891L31.9922 21.3828C31.8828 21.0547 31.6093 20.7812 31.2812 20.6719C30.9531 20.5625 30.625 20.5078 30.2968 20.6719L24.2812 22.9687C23.789 23.1328 23.5156 23.7344 23.7343 24.2266C23.8984 24.7187 24.5 24.9922 24.9922 24.7734L28.7109 23.3516C26.6328 27.6719 22.2031 30.5156 17.1718 30.5156C11.6484 30.5156 6.78122 27.0703 5.0859 21.9297C4.86715 21.4375 4.32028 21.1641 3.82809 21.3281C3.3359 21.4922 3.06247 22.0391 3.22653 22.5312C5.19528 28.4375 10.7734 32.4297 17.1172 32.4297C23.1328 32.4297 28.4922 28.875 30.6797 23.4609L32.4297 28C32.5937 28.3828 32.9218 28.6016 33.3047 28.6016C33.414 28.6016 33.5234 28.6016 33.6328 28.5469C34.1797 28.3281 34.4531 27.7813 34.2343 27.2891Z",
    fill: "white"
  }))), /* @__PURE__ */ React47.createElement("h4", {
    className: "font-semibold text-xl text-dark mb-3"
  }, "Bestellungs- & Daten Automation"), /* @__PURE__ */ React47.createElement("p", {
    className: "text-body-color text-lg text-text-SmColor"
  }, "Sie haben einen E-Commerce Store und m\xF6chten repetitive Arbeit vermeiden? Devato ist Ihr Dienstleister f\xFCr komplexe Automatisierung."))))));
};
var Services_default = Services;

// app/sections/AboutMe/AboutMe.tsx
var links9 = () => [
  {
    rel: "stylesheet",
    href: AboutMe_default
  }
];
var AboutMe = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React48.createElement("section", {
    id: "AboutMe",
    className: "AboutMe__Wrapper"
  }, /* @__PURE__ */ React48.createElement("article", {
    className: "aboutme-wrapper flex flex-col justify-center"
  }, /* @__PURE__ */ React48.createElement("div", {
    className: "Introduction__Wrapper",
    id: "introductionWrapper"
  }, /* @__PURE__ */ React48.createElement("div", {
    className: "flex flex-col sm:grid sm:grid-cols-5 sm:gap-5 mb-5"
  }, /* @__PURE__ */ React48.createElement("div", {
    className: "flex flex-col col-span-3"
  }, /* @__PURE__ */ React48.createElement(Hi_default, null), /* @__PURE__ */ React48.createElement("div", {
    className: "bio-description md:text-lg leading-10 lg:text-lg "
  }, /* @__PURE__ */ React48.createElement("div", {
    className: "my-10 text-lg"
  }, /* @__PURE__ */ React48.createElement("p", {
    className: "text-aboutMe-aboutMeText my-10"
  }, "Devato ist Ihr zuverl\xE4ssiger Dienstleister rund um Shopify E-Commerce. Von der Erstellung neuer Shops bis hin zu komplexen Backend Entwicklungen: Wir unterst\xFCtzen Sie in allen Themen rund um Shopify."), /* @__PURE__ */ React48.createElement("div", {
    className: "spacer-div mt-10 sm:mt-10"
  }), /* @__PURE__ */ React48.createElement(Titles_default, null), /* @__PURE__ */ React48.createElement("div", {
    className: "spacer-div mt-10 sm:mt-20"
  }), /* @__PURE__ */ React48.createElement("div", {
    className: "mt-0 xs:mt-30"
  }), /* @__PURE__ */ React48.createElement("div", {
    className: "resume-btn-wrapper mt-30 w-fit"
  }, /* @__PURE__ */ React48.createElement("a", {
    href: "/#projects"
  }, /* @__PURE__ */ React48.createElement(import_react6.Button, {
    color: "gradient",
    size: "xl",
    auto: true,
    href: "sectionStory",
    rounded: true,
    bordered: true
  }, "Projekte ansehen"))), /* @__PURE__ */ React48.createElement("div", {
    className: "spacer-div mt-100 sm:mt-100"
  })))), /* @__PURE__ */ React48.createElement("div", {
    className: "spacer-div mt-20 md:mt-24 lg:mt-56"
  })), /* @__PURE__ */ React48.createElement(MyStory_default, null)), /* @__PURE__ */ React48.createElement("div", {
    className: "story-wrapper",
    id: "sectionStory"
  }), /* @__PURE__ */ React48.createElement(Testimonials_default, null), /* @__PURE__ */ React48.createElement("div", {
    className: "spacer-div mt-20 md:mt-5 lg:mt-5"
  }), /* @__PURE__ */ React48.createElement(Services_default, null), /* @__PURE__ */ React48.createElement(Facts_default, null)));
};
var AboutMe_default2 = AboutMe;

// app/sections/Contact/Contact.tsx
init_react();
var React51 = __toESM(require("react"));
var import_remix10 = __toESM(require_remix());

// app/components/Alert.tsx
init_react();
var React49 = __toESM(require("react"));
var Alert = (props) => {
  return /* @__PURE__ */ React49.createElement("div", null, props.type === "success" /* SUCCESS */ ? /* @__PURE__ */ React49.createElement("div", {
    className: "bg-green-100 p-5 w-full rounded"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "flex justify-between"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React49.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-green-500 h-4 w-4"
  }, /* @__PURE__ */ React49.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 16.518l-4.5-4.319 1.396-1.435 3.078 2.937 6.105-6.218 1.421 1.409-7.5 7.626z"
  })), /* @__PURE__ */ React49.createElement("div", {
    className: "flex-1 leading-tight text-sm text-green-700 font-medium"
  }, props.message)), /* @__PURE__ */ React49.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-green-600 h-3 w-3"
  }, /* @__PURE__ */ React49.createElement("path", {
    d: "M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"
  })))) : props.type === "error" /* ERROR */ ? /* @__PURE__ */ React49.createElement("div", {
    className: "bg-red-100 p-5 w-full"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React49.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-red-500 h-4 w-4"
  }, /* @__PURE__ */ React49.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.597 17.954l-4.591-4.55-4.555 4.596-1.405-1.405 4.547-4.592-4.593-4.552 1.405-1.405 4.588 4.543 4.545-4.589 1.416 1.403-4.546 4.587 4.592 4.548-1.403 1.416z"
  })), /* @__PURE__ */ React49.createElement("div", {
    className: "leading-tight flex flex-col space-y-2"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "text-sm font-medium text-red-700"
  }, "Something went wrong"), /* @__PURE__ */ React49.createElement("div", {
    className: "flex-1 leading-snug text-sm text-red-600"
  }, props.message)))) : /* @__PURE__ */ React49.createElement("div", {
    className: "bg-blue-100 p-5 w-full border-l-4 border-blue-500"
  }, /* @__PURE__ */ React49.createElement("div", {
    className: "flex space-x-3"
  }, /* @__PURE__ */ React49.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: "flex-none fill-current text-blue-500 h-4 w-4"
  }, /* @__PURE__ */ React49.createElement("path", {
    d: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"
  })), /* @__PURE__ */ React49.createElement("div", {
    className: "flex-1 leading-tight text-sm text-blue-700"
  }, props.message))));
};
var Alert_default = Alert;

// app/components/SocialMedia/SocialMedia.tsx
init_react();
var React50 = __toESM(require("react"));

// app/components/SocialMedia/SocialMedia.css
var SocialMedia_default = "/build/_assets/SocialMedia-SPTQH6WS.css";

// app/components/SocialMedia/SocialMedia.tsx
var links10 = () => {
  return [{ rel: "stylesheet", href: SocialMedia_default }];
};
var SocialMedia = ({}) => {
  const { theme } = useTheme();
  const styles = getTextStyles(theme);
  return /* @__PURE__ */ React50.createElement("div", {
    className: "sm-wrapper grid grid-cols-5 gap-4 items-center "
  }, sm.map((element) => {
    const IconMarkup = element.icon;
    return /* @__PURE__ */ React50.createElement("div", {
      className: `${element.className} social-media-icon-wrapper relative bg-aboutMe-smIconBg flex flex-col justify-center items-center justify-self-center ${styles}`,
      key: element.name
    }, /* @__PURE__ */ React50.createElement("div", {
      className: "tooltip absolute top-0 text-sm text-white bg-white"
    }, element.name), /* @__PURE__ */ React50.createElement("a", {
      href: element.externalUrl,
      target: "_blank"
    }, /* @__PURE__ */ React50.createElement("span", {
      className: "flex justify-center items-center text-lg"
    }, /* @__PURE__ */ React50.createElement(IconMarkup, null))));
  }));
};
var getTextStyles = (theme) => {
  return theme === "light" /* LIGHT */ ? "text-black hover:text-white" : "text-white";
};
var SocialMedia_default2 = SocialMedia;

// app/sections/Contact/Contact.css
var Contact_default = "/build/_assets/Contact-PPDYOJMV.css";

// app/sections/Contact/Contact.tsx
var links11 = () => [
  {
    rel: "stylesheet",
    href: Contact_default
  }
];
var ContactTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const contactTitleClassname = wasInViewAtLeastOnce ? "contact-title" : void 0;
  return /* @__PURE__ */ React51.createElement("svg", {
    viewBox: "0 0 900 110",
    className: `${contactTitleClassname} contact-title xl:mt-10`,
    ref: setRef
  }, /* @__PURE__ */ React51.createElement("text", {
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
  return /* @__PURE__ */ React51.createElement("div", {
    className: "contact-wrapper flex flex-col items-center justify-center translate-y-[-1rem] xs:translate-y-0 xl:translate-y-[-5rem]"
  }, /* @__PURE__ */ React51.createElement(ContactTitle, null), /* @__PURE__ */ React51.createElement("div", {
    className: "spacer-div mt-10"
  }), /* @__PURE__ */ React51.createElement("div", {
    className: "contact-form-wrapper w-full custom2:w-[90%] sm:w-4/5 md:w-2/3 lg:w-1/2"
  }, /* @__PURE__ */ React51.createElement(import_remix10.Form, {
    id: contactFormHtmlId,
    method: "post",
    action: "/?index",
    className: "contact-form flex flex-col text-contact-label w-full"
  }, hasError ? /* @__PURE__ */ React51.createElement(Alert_default, {
    message: "Senden fehlgeschlagen. Bitte versuchen Sie es erneut oder schreiben Sie eine Mail an info@devato.de.",
    type: "error" /* ERROR */
  }) : hasSuccess ? /* @__PURE__ */ React51.createElement(Alert_default, {
    message: "Wir haben Ihre Anfrage erhalten und kommen bald auf Sie zur\xFCck!",
    type: "confirmed" /* CONFIRMED */
  }) : /* @__PURE__ */ React51.createElement(Alert_default, {
    message: "Wir antworten meist innerhalb von 2 Werkatagen.",
    type: "confirmed" /* CONFIRMED */
  }), /* @__PURE__ */ React51.createElement("label", {
    htmlFor: "Name" /* name */,
    className: "text-base pt-2 pb-1"
  }, "Ihr Name"), /* @__PURE__ */ React51.createElement("input", {
    id: "Name" /* name */,
    name: "Name" /* name */,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React51.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React51.createElement("p", null, (fieldErrors == null ? void 0 : fieldErrors.name) && (fieldErrors == null ? void 0 : fieldErrors.name))), /* @__PURE__ */ React51.createElement("label", {
    htmlFor: "Email" /* email */,
    className: "text-base pt-2 pb-1"
  }, "Ihre Email"), /* @__PURE__ */ React51.createElement("input", {
    id: "Email" /* email */,
    name: "Email" /* email */,
    type: "email",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React51.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React51.createElement("p", null, (fieldErrors == null ? void 0 : fieldErrors.email) && (fieldErrors == null ? void 0 : fieldErrors.email))), /* @__PURE__ */ React51.createElement("label", {
    htmlFor: "Betreff / Projekt" /* subject */,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Betreff"), /* @__PURE__ */ React51.createElement("input", {
    id: "Betreff / Projekt" /* subject */,
    name: "Betreff / Projekt" /* subject */,
    type: "text",
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-2"
  }), /* @__PURE__ */ React51.createElement("div", {
    className: "error"
  }, /* @__PURE__ */ React51.createElement("p", null, (fieldErrors == null ? void 0 : fieldErrors.subject) && (fieldErrors == null ? void 0 : fieldErrors.subject))), /* @__PURE__ */ React51.createElement("label", {
    htmlFor: "Nachricht" /* message */,
    className: "text-textLgcolor text-base pt-2 pb-1"
  }, "Ihre Nachricht"), /* @__PURE__ */ React51.createElement("textarea", {
    id: "Nachricht" /* message */,
    name: "Nachricht" /* message */,
    required: true,
    className: "appearance-none rounded-lg relative block w-full px-3 py-1"
  }), /* @__PURE__ */ React51.createElement("div", {
    className: "error text-sm font-medium italic text-teal-300"
  }, /* @__PURE__ */ React51.createElement("p", null, (fieldErrors == null ? void 0 : fieldErrors.message) && (fieldErrors == null ? void 0 : fieldErrors.message))), /* @__PURE__ */ React51.createElement("button", {
    type: "submit",
    name: "Senden",
    className: "contact-btn bg-contact-send hover:bg-contact-sendHover focus:bg-contact-sendHover rounded-lg text-base mt-7 text-white py-3 w-full"
  }, buttonText))), /* @__PURE__ */ React51.createElement("div", {
    className: "text-textLgColor flex justify-center mt-6 mb-10"
  }, /* @__PURE__ */ React51.createElement(SocialMedia_default2, null)));
};
var Contact_default2 = ContactMeSection;

// app/sections/MySkills/MySkills.tsx
init_react();
var React52 = __toESM(require("react"));
var import_animejs = __toESM(require("animejs"));

// app/sections/MySkills/MySkills.css
var MySkills_default = "/build/_assets/MySkills-INNCWRXU.css";

// app/sections/MySkills/MySkills.tsx
var links12 = () => [
  {
    rel: "stylesheet",
    href: MySkills_default
  }
];
var MySkills = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "show" : "hide";
  return /* @__PURE__ */ React52.createElement("section", {
    className: `h-fit ${className}`,
    ref: setRef
  }, /* @__PURE__ */ React52.createElement("div", {
    className: "skills-section-container"
  }, /* @__PURE__ */ React52.createElement("img", {
    src: "/images/background/Eclipse.svg",
    alt: "Decorative background eclipse",
    className: "eclipse absolute"
  }), /* @__PURE__ */ React52.createElement(Title, null), /* @__PURE__ */ React52.createElement("div", {
    className: "Skills__Wrapper md:grid md:grid-cols-5 lg:grid-cols-7 gap-5"
  }, /* @__PURE__ */ React52.createElement("div", {
    className: "Skills__SkillCards__Wrapper grid grid-cols-3 gap-2 custom2:grid-cols-5 md:grid-cols-2 md:col-span-2 lg:grid-cols-3 lg:col-span-3 custom3:gap-5 lg:gap-y-10 "
  }, skills.map((skill, index) => /* @__PURE__ */ React52.createElement("div", {
    className: `Skills__SkillCard flex ${className} relative left-0 top-0 w-full p-4 h-full items-center text-center`,
    key: skill.id,
    style: {
      animationDelay: `${1 + index}`
    }
  }, /* @__PURE__ */ React52.createElement("div", {
    className: "flex flex-col items-center w-full"
  }, /* @__PURE__ */ React52.createElement("img", {
    src: skill.icon,
    alt: skill.name + " icon",
    className: "w-[4rem] h-[4rem]",
    title: skill.name,
    loading: "lazy"
  }), /* @__PURE__ */ React52.createElement("p", {
    className: "text-sm sm:text-base text-textSmColor mt-2"
  }, skill.name))))), /* @__PURE__ */ React52.createElement("ul", {
    className: "abilities-wrapper mt-5 md:mt-0 md:col-span-3 lg:col-span-4 flex flex-col justify-start"
  }, abilities.map((ability, index) => /* @__PURE__ */ React52.createElement("li", {
    key: ability
  }, /* @__PURE__ */ React52.createElement("div", {
    className: `ability-card ${className} flex justify-center items-center text-left p-8`,
    style: {
      animationDelay: `${1 + index}`
    }
  }, /* @__PURE__ */ React52.createElement("p", {
    className: "text-base text-textSmColor leading-8"
  }, ability)), /* @__PURE__ */ React52.createElement("div", {
    className: "spacer-div mt-5"
  })))))));
};
var MySkills_default2 = MySkills;
var Title = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const letterClassname = wasInViewAtLeastOnce ? "title-letter" : void 0;
  React52.useEffect(() => {
    const letters = document.getElementsByClassName("title-letter");
    setTimeout(() => {
      for (let i = 0; i < letters.length; i++) {
        (0, import_animejs.default)({
          targets: letters[i],
          easing: "easeInQuad",
          translateX: ["5px", "0"],
          delay: 50 * i
        });
        (0, import_animejs.default)({
          targets: letters[i],
          easing: "easeInQuad",
          opacity: 1,
          delay: 60 * i
        });
      }
    }, 500);
  }, [wasInViewAtLeastOnce]);
  return /* @__PURE__ */ React52.createElement("span", {
    id: "skill-title",
    className: "inline-flex text-4xl xs:text-5xl custom2:text-6xl md:text-6xl font-medium mb-10 xs:mb-12 custom2:mb-14 text-textLgColor",
    ref: setRef
  }, /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "S"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "e"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "r"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "v"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "i"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "c"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "e"), /* @__PURE__ */ React52.createElement("span", {
    className: `${letterClassname} opacity-0`
  }, "s"));
};

// app/components/ResumeButton/ResumeButton.tsx
init_react();
var import_react7 = require("@nextui-org/react");
var React53 = __toESM(require("react"));

// app/components/ResumeButton/ResumeButton.css
var ResumeButton_default = "/build/_assets/ResumeButton-4ICFHR44.css";

// app/components/ResumeButton/ResumeButton.tsx
var links13 = () => {
  return [{ rel: "stylesheet", href: ResumeButton_default }];
};

// app/sections/Projects/Projects.tsx
init_react();
var React56 = __toESM(require("react"));

// app/sections/Projects/RecentProjects.tsx
init_react();
var React54 = __toESM(require("react"));
var RecentProjectsTitle = () => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const className = wasInViewAtLeastOnce ? "title-animation" : "";
  return /* @__PURE__ */ React54.createElement("div", {
    className: `gradient-title ${className} text-center lg:text-[9rem] md:text-[7rem] sm:text-[4rem] xs:text-[3rem] text-[2.5rem] overflow-visible text-transparent`,
    ref: setRef
  }, "Recent projects");
};
var RecentProjects = ({}) => {
  return /* @__PURE__ */ React54.createElement("div", {
    className: "front-end-wrapper flex flex-col text-textSmColor w-full"
  }, /* @__PURE__ */ React54.createElement(RecentProjectsTitle, null), /* @__PURE__ */ React54.createElement("div", {
    className: "h-12"
  }), /* @__PURE__ */ React54.createElement("div", {
    className: "recent-projects-wrapper grid grid-cols-1 gap-12 md:grid-cols-3 sm:grid-cols-2 sm:gap-x-7 sm:gap-y-10 md:gap-10 md:px-5"
  }, recentProjects.map((project) => /* @__PURE__ */ React54.createElement("div", {
    className: "recent-project-card bg-projects-recentBg text-center flex flex-col rounded-lg duration-300 hover:bg-projects-recentHover focus:bg-projects-recentHover shadow-lg shadow-projects-recentShadow items-center justify-between",
    key: project.name
  }, /* @__PURE__ */ React54.createElement("img", {
    src: project.img,
    alt: `Showcase image for ${project.name}`,
    className: "lg:h-56 md:h-40 w-full rounded-t-lg",
    loading: "lazy"
  }), /* @__PURE__ */ React54.createElement("div", {
    className: "recent-project-content px-5 pt-3 lg:pt-5 lg:px-10"
  }, /* @__PURE__ */ React54.createElement("div", {
    className: "recent-project-card-title font-medium text-2xl pb-3 sm:pb-5"
  }, project.name), /* @__PURE__ */ React54.createElement("div", {
    className: "recent-project-card-description text-base text-subText pb-5"
  }, project.description)), /* @__PURE__ */ React54.createElement("div", {
    className: "recent-project-buttons flex flex-row items-center justify-center text-sm pb-5"
  }, /* @__PURE__ */ React54.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "View source code"
  }, "Case Study"), /* @__PURE__ */ React54.createElement("div", {
    className: "mr-2"
  }), /* @__PURE__ */ React54.createElement(ExternalLinkButton_default2, {
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
var React55 = __toESM(require("react"));
var OtherProjects = ({}) => {
  return /* @__PURE__ */ React55.createElement("div", {
    className: "others-wrapper text-textSmColor"
  }, /* @__PURE__ */ React55.createElement("ul", {
    className: "other-projects-wrapper m-0 p-0 text-base grid grid-rows-7 list-none gap-5 md:gap-0"
  }, otherProjects.map((project) => /* @__PURE__ */ React55.createElement("li", {
    className: "other-project-wrapper py-4 flex flex-col items-center justify-between md:flex-row",
    key: project.name
  }, /* @__PURE__ */ React55.createElement("div", {
    className: "info inline-flex items-center md:w-48 md:mr-5 custom:mr-0 custom:w-64 mb-5 md:mb-0"
  }, /* @__PURE__ */ React55.createElement("img", {
    src: project.icon,
    alt: project.name,
    loading: "lazy",
    title: `Icon for ${project.name}`,
    className: "md:w-8 mr-4 align-middle"
  }), /* @__PURE__ */ React55.createElement("p", {
    className: "font-medium text-lg"
  }, project.name)), /* @__PURE__ */ React55.createElement("span", {
    className: "md:flex-1 text-base text-center w-full xxs:w-4/5 xs:w-2/3 md:w-full md:text-left"
  }, project.description), /* @__PURE__ */ React55.createElement("div", {
    className: "inline-flex items-center mt-5 md:mt-0 md:ml-5 custom:ml-0"
  }, /* @__PURE__ */ React55.createElement(ExternalLinkButton_default2, {
    to: project.gitRepo,
    linkProps: {
      target: "_blank"
    },
    accessibilityName: "Visit GitHub repository"
  }, "View source"), /* @__PURE__ */ React55.createElement("div", {
    className: "mr-4"
  }), /* @__PURE__ */ React55.createElement(ExternalLinkButton_default2, {
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
var links14 = () => [
  {
    rel: "stylesheet",
    href: Projects_default
  }
];
var Projects = ({}) => {
  const { setRef, wasInViewAtLeastOnce } = useWasInViewAtLeastOnce();
  const featuredClassname = wasInViewAtLeastOnce ? "my-projects-title" : void 0;
  return /* @__PURE__ */ React56.createElement("div", {
    className: "projects-wrapper"
  }, /* @__PURE__ */ React56.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React56.createElement(RecentProjects_default, null), /* @__PURE__ */ React56.createElement("div", {
    className: "mt-24"
  }), /* @__PURE__ */ React56.createElement(OtherProjects_default, null));
};
var Projects_default2 = Projects;

// route:/Users/flo/Development/Webpage-1/app/routes/index.tsx
var React57 = __toESM(require("react"));

// app/utils/functions.tsx
init_react();
var import_remix11 = __toESM(require_remix());
function validateName(name) {
  if (typeof name !== "string") {
    return "Your name is not a string.";
  }
}
function validateMessage(message) {
  if (typeof message !== "string") {
    return "Your message is not a string.";
  }
  const transformedMsg = message.toLowerCase();
  if (transformedMsg.includes(" bot ") || transformedMsg.includes("bot ") || transformedMsg.includes(" money ") || transformedMsg.includes(" rich ") || transformedMsg.includes("crypto") || transformedMsg.includes("robot ") || transformedMsg.includes(" robot ")) {
    return "Your activity is unusual, please try again or contact me through Linkedin.";
  }
  if (message.length < 10) {
    return "Message must be at least 10 characters.";
  }
}
function validateSubject(subject) {
  if (typeof subject !== "string") {
    return "Your message is not a string.";
  }
  if (subject.length < 2) {
    return "Subject must be at least 2 characters.";
  }
}
function validateEmail(email) {
  if (typeof email !== "string") {
    return "Your email is not a string.";
  }
  const emailParts = email.split("@");
  if (emailParts.length < 2) {
    return "Invalid email";
  }
  if (!email.includes("@")) {
    return "Invalid email";
  }
}
function badRequest(data) {
  return (0, import_remix11.json)(data, { status: 400 });
}

// route:/Users/flo/Development/Webpage-1/app/routes/index.tsx
var import_react_ga2 = __toESM(require("react-ga"));
var import_react_cookie_consent = __toESM(require("react-cookie-consent"));
var meta3 = () => {
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
var links15 = () => {
  return [
    {
      rel: "canonical",
      href: "https://www.alissanguyen.dev/"
    },
    ...links8(),
    ...links9(),
    ...links12(),
    ...links14(),
    ...links11(),
    ...links13(),
    ...links10()
  ];
};
var action2 = async ({
  request
}) => {
  const formData = await request.formData();
  const email = formData.get("Email" /* email */);
  const subject = formData.get("Betreff / Projekt" /* subject */);
  const name = formData.get("Name" /* name */);
  const message = formData.get("Nachricht" /* message */);
  const fields = { subject, email, name, message };
  const fieldErrors = {
    name: validateName(name),
    subject: validateSubject(subject),
    email: validateEmail(email),
    message: validateMessage(message)
  };
  if (Object.values(fieldErrors).some(Boolean)) {
    return badRequest({ fieldErrors, fields });
  }
  const coercedEmail = email;
  const coercedName = name;
  const coercedSubject = subject;
  const coercedMessage = message;
  const messageFields = {
    email: coercedEmail,
    name: coercedName,
    subject: coercedSubject,
    message: coercedMessage
  };
  const sgMail = require("@sendgrid/mail");
  sgMail.setApiKey(process.env.SENDGRID_SECRET_API_KEY);
  function createHtml(fromEmail, name2, body) {
    const html = `<h3>From email: ${fromEmail}</h3>
    <h3>From user: ${name2}</h3>
    <p>Message: ${body}</p>`;
    return html;
  }
  const msg = {
    to: "devato.agency@gmail.com",
    from: "info@devato.de",
    subject: messageFields.subject,
    text: messageFields.message,
    html: createHtml(messageFields.email, messageFields.name, messageFields.message)
  };
  try {
    const jsonResponse = await sgMail.send(msg).then(() => {
      return {
        status: 200
      };
    }).catch((error) => {
      console.error(error);
      return {
        status: error && error.status ? error.status : 500
      };
    });
    return (0, import_remix12.json)({
      status: 200,
      fieldErrors: {}
    }, jsonResponse);
  } catch (error) {
    console.error("Failed to send confirmation email to: ", coercedEmail);
    return (0, import_remix12.json)({
      status: 200,
      fieldErrors: {}
    }, {
      status: error && error.status ? error.status : 500
    });
  }
};
var TRACKING_ID2 = "UA-223958752-1";
import_react_ga2.default.initialize(TRACKING_ID2);
var Index4 = () => {
  const actionData = (0, import_remix12.useActionData)();
  const transition = (0, import_remix12.useTransition)();
  React57.useEffect(() => {
    import_react_ga2.default.pageview(window.location.pathname + window.location.search);
  }, []);
  React57.useEffect(() => {
    const maybeContactForm = document.getElementById(contactFormHtmlId);
    if (maybeContactForm && actionData && actionData.status === 200) {
      maybeContactForm.reset();
    }
  }, [actionData]);
  return /* @__PURE__ */ React57.createElement(React57.Fragment, null, /* @__PURE__ */ React57.createElement("div", {
    className: "app tracking-wide text-lg overflow-hidden"
  }, /* @__PURE__ */ React57.createElement("div", {
    className: `${fixedWidthLayoutClasses} flex flex-col`
  }, /* @__PURE__ */ React57.createElement(AboutMe_default2, null), /* @__PURE__ */ React57.createElement("div", {
    style: { zIndex: -1 }
  }, /* @__PURE__ */ React57.createElement(GradientBackground3, null), /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div mt-20 xs:mt-80"
  }), /* @__PURE__ */ React57.createElement(EatLearnCode, null)), /* @__PURE__ */ React57.createElement(Portfolio, null), /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div xs:mt-44 sm:mt-96",
    id: "portfolio"
  }), /* @__PURE__ */ React57.createElement(MySkills_default2, null), /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div mt-24 custom2:mt-24"
  }), /* @__PURE__ */ React57.createElement("section", {
    id: "projects"
  }, /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div sm:mt-0"
  }), /* @__PURE__ */ React57.createElement(Projects_default2, null)), /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div mt-24"
  }), /* @__PURE__ */ React57.createElement("div", {
    className: "spacer-div mt-10"
  })), /* @__PURE__ */ React57.createElement("div", {
    className: "blob-bg pb-10",
    id: "contact"
  }, /* @__PURE__ */ React57.createElement("div", {
    className: `${fixedWidthLayoutClasses} pt-20`
  }, /* @__PURE__ */ React57.createElement(Contact_default2, {
    fieldErrors: actionData && actionData.fieldErrors,
    transition
  })), /* @__PURE__ */ React57.createElement(import_react_cookie_consent.default, {
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
var routes_default = Index4;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "6118dfb2", "entry": { "module": "/build/entry.client-QQGFSQJY.js", "imports": ["/build/_shared/chunk-PZ2Z7HGX.js", "/build/_shared/chunk-NOP6RD6V.js", "/build/_shared/chunk-2ADOHOB6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-CWRMOJKV.js", "imports": ["/build/_shared/chunk-TRDMDFFK.js", "/build/_shared/chunk-PRT6NESQ.js", "/build/_shared/chunk-O2ZYEK6Q.js", "/build/_shared/chunk-PRNJJ46C.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": true, "hasErrorBoundary": true }, "routes/agb/index": { "id": "routes/agb/index", "parentId": "root", "path": "agb", "index": true, "caseSensitive": void 0, "module": "/build/routes/agb/index-7PNPB5XM.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-3KYMSCRT.js", "imports": ["/build/_shared/chunk-5LPLTHXU.js", "/build/_shared/chunk-IW7HQTIW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-MZ737AOV.js", "imports": ["/build/_shared/chunk-LAPU6LJH.js", "/build/_shared/chunk-IW7HQTIW.js"], "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/datenschutz/index": { "id": "routes/datenschutz/index", "parentId": "root", "path": "datenschutz", "index": true, "caseSensitive": void 0, "module": "/build/routes/datenschutz/index-FZLTFHXI.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/impressum/index": { "id": "routes/impressum/index", "parentId": "root", "path": "impressum", "index": true, "caseSensitive": void 0, "module": "/build/routes/impressum/index-YRCDZATO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-IX3JEF2Q.js", "imports": ["/build/_shared/chunk-5LPLTHXU.js", "/build/_shared/chunk-LAPU6LJH.js"], "hasAction": true, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/setTheme/index": { "id": "routes/setTheme/index", "parentId": "root", "path": "setTheme", "index": true, "caseSensitive": void 0, "module": "/build/routes/setTheme/index-HUUNC2IN.js", "imports": void 0, "hasAction": true, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6118DFB2.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/datenschutz/index": {
    id: "routes/datenschutz/index",
    parentId: "root",
    path: "datenschutz",
    index: true,
    caseSensitive: void 0,
    module: datenschutz_exports
  },
  "routes/impressum/index": {
    id: "routes/impressum/index",
    parentId: "root",
    path: "impressum",
    index: true,
    caseSensitive: void 0,
    module: impressum_exports
  },
  "routes/setTheme/index": {
    id: "routes/setTheme/index",
    parentId: "root",
    path: "setTheme",
    index: true,
    caseSensitive: void 0,
    module: setTheme_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/agb/index": {
    id: "routes/agb/index",
    parentId: "root",
    path: "agb",
    index: true,
    caseSensitive: void 0,
    module: agb_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};
module.exports = __toCommonJS(stdin_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
