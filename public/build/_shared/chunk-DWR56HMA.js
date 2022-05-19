import {
  React,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// app/types.ts
init_react();
var AlertType;
(function(AlertType2) {
  AlertType2["ERROR"] = "error";
  AlertType2["SUCCESS"] = "success";
  AlertType2["CONFIRMED"] = "confirmed";
})(AlertType || (AlertType = {}));
var SupportedTheme;
(function(SupportedTheme2) {
  SupportedTheme2["DARK"] = "dark";
  SupportedTheme2["LIGHT"] = "light";
})(SupportedTheme || (SupportedTheme = {}));
var ContactFormFields;
(function(ContactFormFields2) {
  ContactFormFields2["email"] = "Email";
  ContactFormFields2["name"] = "Name";
  ContactFormFields2["subject"] = "Betreff / Projekt";
  ContactFormFields2["message"] = "Nachricht";
})(ContactFormFields || (ContactFormFields = {}));

// app/providers/ThemeProvider.tsx
init_react();
var React2 = __toModule(require_react());
var ThemeContext = React2.createContext(void 0);
var useTheme = () => {
  const contextValue = React2.useContext(ThemeContext);
  if (!contextValue) {
    throw new Error("You are trying to use useGlobalContext without rendering a ThemeContext.Provider somewhere above this component in the component tree. Render a ThemeContext.Provider somewhere above this component in the component tree to resolve this issue.");
  }
  return contextValue;
};
var ThemeContextProvider = (props) => {
  const [theme, setTheme] = React2.useState(props.initialTheme);
  const updateTheme = (newTheme) => {
    setTheme(newTheme);
  };
  return /* @__PURE__ */ React2.createElement(ThemeContext.Provider, {
    value: {
      theme,
      updateTheme
    }
  }, props.children);
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

// node_modules/react-icons/fa/index.esm.js
init_react();

// node_modules/react-icons/lib/esm/index.js
init_react();

// node_modules/react-icons/lib/esm/iconsManifest.js
init_react();

// node_modules/react-icons/lib/esm/iconBase.js
init_react();
var import_react2 = __toModule(require_react());

// node_modules/react-icons/lib/esm/iconContext.js
init_react();
var import_react = __toModule(require_react());
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = import_react.default.createContext && import_react.default.createContext(DefaultContext);

// node_modules/react-icons/lib/esm/iconBase.js
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p))
          t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e) {
  var t = {};
  for (var p in s)
    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return import_react2.default.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return import_react2.default.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className)
      className = conf.className;
    if (props.className)
      className = (className ? className + " " : "") + props.className;
    return import_react2.default.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && import_react2.default.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? import_react2.default.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}

// node_modules/react-icons/fa/index.esm.js
function FaFacebookF(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 320 512" }, "child": [{ "tag": "path", "attr": { "d": "M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" } }] })(props);
}
function FaGithub(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 496 512" }, "child": [{ "tag": "path", "attr": { "d": "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" } }] })(props);
}
function FaInstagram(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" } }] })(props);
}
function FaLinkedin(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 448 512" }, "child": [{ "tag": "path", "attr": { "d": "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" } }] })(props);
}
function FaTwitter(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 512 512" }, "child": [{ "tag": "path", "attr": { "d": "M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" } }] })(props);
}

// app/constants.tsx
var IMAGE_WIDTH = "1200";
var IMAGE_HEIGHT = "630";
var PORTFOLIO_WEBSITE_NAME = "Flo Shopify";
var BLOG_WEBSITE_NAME = "Flos Shopify Development Blog";
var TWITTER_CARD_TYPE = "summary_large_image";
var AUTHOR = "Flo S";
var WEBSITE_URL = "https://www.solutio.io/";
var BLOG_URL = "https://www.solutio.io/blog";
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
var sm = [
  {
    name: "Facebook",
    className: "icon facebook relative bg-white text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(FaFacebookF, null),
    externalUrl: "https://www.facebook.com/alissa.1404"
  },
  {
    name: "Twitter",
    className: "icon twitter text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(FaTwitter, null),
    externalUrl: "https://twitter.com/alissang_dev"
  },
  {
    name: "Instagram",
    className: "icon instagram text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(FaInstagram, null),
    externalUrl: "https://www.instagram.com/alissang1211/"
  },
  {
    name: "Github",
    className: "icon github text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(FaGithub, null),
    externalUrl: "https://github.com/alissanguyen"
  },
  {
    name: "Linkedin",
    className: "icon linkedin text-black hover:text-white",
    icon: () => /* @__PURE__ */ React.createElement(FaLinkedin, null),
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
var TEXT_HIGHLIGHT;
(function(TEXT_HIGHLIGHT2) {
  TEXT_HIGHLIGHT2["BLUE"] = "var(--blue)";
  TEXT_HIGHLIGHT2["YELLOW"] = "var(--yellow)";
  TEXT_HIGHLIGHT2["GREEN"] = "var(--green)";
  TEXT_HIGHLIGHT2["RED"] = "var(--red)";
  TEXT_HIGHLIGHT2["ORANGE"] = "var(--orange)";
  TEXT_HIGHLIGHT2["PINK"] = "var(--pink)";
  TEXT_HIGHLIGHT2["PURPLE"] = "var(--purple)";
})(TEXT_HIGHLIGHT || (TEXT_HIGHLIGHT = {}));
var STICKY_HIGHLIGHT;
(function(STICKY_HIGHLIGHT2) {
  STICKY_HIGHLIGHT2["BLUE"] = "rgba(75, 150, 255, 0.1)";
  STICKY_HIGHLIGHT2["YELLOW"] = "var(--sticky-yellow-bg)";
  STICKY_HIGHLIGHT2["GREEN"] = "var(--sticky-green-bg)";
  STICKY_HIGHLIGHT2["ORANGE"] = "var(--sticky-orange-bg)";
  STICKY_HIGHLIGHT2["PINK"] = "rgb(255, 69, 140, 0.1)";
  STICKY_HIGHLIGHT2["PURPLE"] = "rgb(196, 69, 255, 0.1)";
  STICKY_HIGHLIGHT2["RED"] = "rgba(255, 69, 69, 0.1)";
})(STICKY_HIGHLIGHT || (STICKY_HIGHLIGHT = {}));
var STICKY_BORDER;
(function(STICKY_BORDER2) {
  STICKY_BORDER2["BLUE"] = "rgba(75, 150, 255, 1)";
  STICKY_BORDER2["YELLOW"] = "var(--sticky-yellow-border)";
  STICKY_BORDER2["GREEN"] = "var(--sticky-green-border)";
  STICKY_BORDER2["ORANGE"] = "var(--sticky-orange-border)";
  STICKY_BORDER2["PINK"] = "rgb(255, 81, 148)";
  STICKY_BORDER2["PURPLE"] = "rgb(203, 89, 255)";
  STICKY_BORDER2["RED"] = "rgb(255, 69, 69)";
})(STICKY_BORDER || (STICKY_BORDER = {}));
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
  "Deployment to platforms such as Vercel, Netlify, and Cloudflare to leverage caching and firewalls at the edge.",
  "Creating JAM Stack frontend applications that integrate with modern headless content management systems (CMS) like Contentful and payment APIs like Stripe",
  "Data management with Firestore, Prisma, or Supabase. Use of classic web security principles and user authorization/authentication with Firebase Auth and automated emails with Sendgrid.",
  "Modern UI libraries like TailwindCSS, Headless UI, Framer Motion, etc. to create beautiful, responsive, and accessible web apps quickly."
];
var recentProjects = [
  {
    name: "Unimals",
    description: "Unimals verkauft Artikel die der Kunde selbst gestalten kann. Neben einer ausgiebigen Analyse der bestehenden Prozesse, wurde eine gr\xFCndliche Optimierung der generellen Schnittstellen vorgenommen. Ferner mussten alle Bestellungen im Backend automatisch an die Supplier API gesendet werden.",
    gitRepo: "https://github.com/alissanguyen/lunar",
    website: "https://www.unimals.de/",
    img: "/images/unimals.png"
  },
  {
    name: "HelloBello",
    description: "Migration von WooCommerce zu Shopify auf Basis eines integrierten Subscription (Abo) Modelles.",
    gitRepo: "https://github.com/alissanguyen/league-demo",
    website: "https://www.hellobello.at/",
    img: "/images/HelloBello.png"
  },
  {
    name: "LiWanda",
    description: "A responsive website with animations and futuristic design.",
    gitRepo: "https://github.com/alissanguyen/atom",
    website: "https://atom.alissanguyen.dev",
    img: "/images/projects/atom.jpg"
  },
  {
    name: "Planets",
    description: "A responsive landing page to learn about planets in the universe.",
    gitRepo: "https://github.com/alissanguyen/planets",
    website: "https://planets.alissanguyen.dev",
    img: "/images/projects/planets.jpg"
  },
  {
    name: "Calculator App",
    description: "A responsive calculator app with mobile-first design and custom theme widget.",
    gitRepo: "https://github.com/alissanguyen/calculator-app",
    website: "https://calculator.alissanguyen.dev",
    img: "/images/projects/calculator.jpg"
  },
  {
    name: "GitHub Spotter 2.0",
    img: "/images/projects/githubspotter2.jpg",
    description: "A website designed to search GitHub users by usernames with GitHub API.",
    gitRepo: "https://github.com/alissanguyen/github-spotter-2",
    website: "https://githubspotter2.alissanguyen.dev"
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
    background: "/images/facts/cat.jpg",
    color: "sky",
    imgDescription: "Pic of cat"
  },
  {
    index: 2,
    title: `Subscription Integration`,
    description: "Abo Modelle in Shopify Stores integrieren und verwalten.",
    background: "/images/facts/harvard.jpg",
    color: "blue",
    imgDescription: "Pic of Harvard"
  },
  {
    index: 3,
    title: "Conversion Optimierung",
    description: "Nachweisliche Steigerung Ihrer KPI's durch strategische Optimierung.",
    background: "/images/facts/snake.jpg",
    color: "indigo",
    imgDescription: "Pic of snake"
  },
  {
    index: 4,
    title: "Third Party Integration",
    description: "Drittanbieter Applikationen einfach und sicher in Shopify implementieren.",
    background: "/images/facts/ambitious.jpg",
    color: "violet",
    imgDescription: "Illustration"
  },
  {
    index: 5,
    title: "Shopify Daten Export & Pipeline",
    description: "Shopify sammelt wertvolle E_Commerce Daten die wir f\xFCr Sie in bestehende Dashboards integrieren.",
    background: "/images/facts/math.jpg",
    color: "purple",
    imgDescription: "Pic of math on chalkboard"
  },
  {
    index: 6,
    title: "Analytics & Artificial Intelligence",
    description: "Als Experten f\xFCr E-Commerce Analytics und KI entwickeln wir innovative L\xF6sungen.",
    background: "/images/facts/mayonnaise.jpg",
    color: "fuchsia",
    imgDescription: "Pic of mayonnaise"
  },
  {
    index: 7,
    title: "Chat Bot und On-Site Apps",
    description: "Durch Chatbots und ander On-Site Apps bieten Sie Ihren Kunden mehr als die Konkurrenz",
    background: "/images/facts/piano.jpg",
    color: "pink",
    imgDescription: "Pic of piano"
  },
  {
    index: 8,
    title: "CRM Integration & Custom Backend Development",
    description: "Wir l\xF6sen die technisch komplexesten Shopify Probleme.",
    background: "/images/facts/dad-joke.jpg",
    color: "rose",
    imgDescription: "Pic of a dad (not my dad)"
  }
];
var NAVBAR_ID = "Navbar";

export {
  AlertType,
  SupportedTheme,
  ContactFormFields,
  useTheme,
  ThemeContextProvider,
  GenIcon,
  IMAGE_WIDTH,
  IMAGE_HEIGHT,
  PORTFOLIO_WEBSITE_NAME,
  BLOG_WEBSITE_NAME,
  TWITTER_CARD_TYPE,
  AUTHOR,
  WEBSITE_URL,
  BLOG_URL,
  TWITTER_ACC,
  TWITTER_PUBLISHER,
  WEBSITE_KEYWORDS,
  BLOG_KEYWORDS,
  WEBSITE_DESCRIPTION,
  BLOG_DESCRIPTION,
  PORTFOLIO_IMAGE_URL,
  BLOG_IMAGE_URL,
  topLevelLinksOnMobile,
  topLevelLinksOnDesktop,
  sm,
  contactFormHtmlId,
  tags,
  TEXT_HIGHLIGHT,
  STICKY_HIGHLIGHT,
  STICKY_BORDER,
  fixedWidthLayoutClasses,
  skills,
  abilities,
  recentProjects,
  otherProjects,
  facts,
  NAVBAR_ID
};
//# sourceMappingURL=/build/_shared/chunk-DWR56HMA.js.map
