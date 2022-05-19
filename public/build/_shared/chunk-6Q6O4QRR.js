import {
  SupportedTheme,
  useTheme
} from "/build/_shared/chunk-FRB22TO6.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// app/providers/ModalProvider.tsx
init_react();
var React = __toModule(require_react());
var ModalContext = React.createContext(void 0);
var useModalContext = () => {
  const contextValue = React.useContext(ModalContext);
  if (!contextValue) {
    throw new Error("You are trying to use useModalContext without rendering a ModalContext.Provider somewhere above this component in the component tree. Render a ModalContext.Provider somewhere above this component in the component tree to resolve this issue.");
  }
  return contextValue;
};
var ModalContextProvider = (props) => {
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const updateModalStatus = (newValue) => {
    setModalIsOpen(newValue);
  };
  React.useEffect(() => {
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
  return /* @__PURE__ */ React.createElement(ModalContext.Provider, {
    value: {
      modalIsOpen,
      updateModalStatus
    }
  }, props.children);
};

// app/components/ThemeButton/ThemeButton.tsx
init_react();
var React2 = __toModule(require_react());
var getShadowClassName = (theme, hasStripeHeader) => {
  if (theme === SupportedTheme.LIGHT) {
    return hasStripeHeader ? "shadow-light-stripe" : "shadow-light";
  } else {
    return hasStripeHeader ? "shadow-dark-stripe" : "shadow-dark";
  }
};
var getClassName = (theme) => {
  return theme === SupportedTheme.LIGHT ? "border-2 border-gray-400 hover:border-black" : "border-2 border-gray-400 hover:border-white";
};
var mobileSun = "/svg/mobileSun.svg";
var ThemeButton = (props) => {
  const { theme, updateTheme } = useTheme();
  const { modalIsOpen } = useModalContext();
  const sun = "/svg/sun.svg";
  const shadow = getShadowClassName(theme, props.hasStripeHeader);
  const className = getClassName(theme);
  const handleToggleTheme = (oldTheme) => {
    updateTheme(oldTheme === SupportedTheme.DARK ? SupportedTheme.LIGHT : SupportedTheme.DARK);
  };
  const nextTheme = theme === SupportedTheme.DARK ? SupportedTheme.LIGHT : SupportedTheme.DARK;
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
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, !modalIsOpen ? /* @__PURE__ */ React2.createElement("div", {
    className: "ThemeButton_Wrapper"
  }, /* @__PURE__ */ React2.createElement("button", {
    name: "Switch to dark theme",
    className: `theme-container ${shadow}`,
    onClick: () => toggleTheme(theme)
  }, theme === SupportedTheme.LIGHT ? /* @__PURE__ */ React2.createElement("img", {
    className: "theme-icon select-none",
    src: sun,
    alt: "Sun icon",
    title: "Sun"
  }) : /* @__PURE__ */ React2.createElement(MoonIcon, {
    onBlogRoute: !props.hasStripeHeader
  }))) : /* @__PURE__ */ React2.createElement("div", {
    className: "ThemeButton_Wrapper"
  }, /* @__PURE__ */ React2.createElement("button", {
    name: "Switch to light mode",
    className: `rounded-full px-5 py-3 inline-flex items-center justify-center ${className}`,
    onClick: () => toggleTheme(theme)
  }, theme === SupportedTheme.LIGHT ? /* @__PURE__ */ React2.createElement("div", {
    className: "inline-flex items-center justify-center text-base"
  }, /* @__PURE__ */ React2.createElement("img", {
    className: "theme-icon select-none mr-4 w-5",
    src: mobileSun,
    alt: "Sun icon",
    title: "Sun"
  }), /* @__PURE__ */ React2.createElement("p", {
    className: "text-black"
  }, "Switch to dark mode")) : /* @__PURE__ */ React2.createElement("div", {
    className: "inline-flex items-center justify-center text-base"
  }, /* @__PURE__ */ React2.createElement("img", {
    src: "/svg/moon-blog.svg",
    alt: "Moon icon",
    title: "Moon",
    className: "theme-icon flex items-center m-auto justify-center w-5 select-none"
  }), /* @__PURE__ */ React2.createElement("p", {
    className: "ml-4 text-gray-200 hover:text-white"
  }, "Switch to light mode")))));
};
var MoonIcon = (props) => /* @__PURE__ */ React2.createElement("img", {
  src: props.onBlogRoute ? "/svg/moon-blog.svg" : "/svg/moon.svg",
  alt: "Moon icon",
  title: "Moon",
  className: "theme-icon flex items-center m-auto justify-center w-8 select-none"
});
var ThemeButton_default = ThemeButton;
var SimplifiedThemeButton = () => {
  const { theme, updateTheme } = useTheme();
  const handleToggleTheme = (oldTheme) => {
    updateTheme(oldTheme === SupportedTheme.DARK ? SupportedTheme.LIGHT : SupportedTheme.DARK);
  };
  const nextTheme = theme === SupportedTheme.DARK ? SupportedTheme.LIGHT : SupportedTheme.DARK;
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
  return /* @__PURE__ */ React2.createElement("div", {
    className: "SimplifiedThemeButton_Wrapper"
  }, /* @__PURE__ */ React2.createElement("button", {
    name: "light theme",
    className: `rounded-full px-5 py-3 inline-flex items-center justify-center `,
    onClick: () => toggleTheme(theme)
  }, theme === SupportedTheme.LIGHT ? /* @__PURE__ */ React2.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-7 w-7 text-gray-600 hover:text-black ease-in duration-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
  })) : /* @__PURE__ */ React2.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "h-7 w-7 text-gray-400 hover:text-white ease-in duration-100",
    fill: "none",
    viewBox: "0 0 24 24",
    stroke: "currentColor",
    strokeWidth: "1.5"
  }, /* @__PURE__ */ React2.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
  }))));
};

export {
  useModalContext,
  ModalContextProvider,
  ThemeButton_default,
  SimplifiedThemeButton
};
//# sourceMappingURL=/build/_shared/chunk-6Q6O4QRR.js.map
