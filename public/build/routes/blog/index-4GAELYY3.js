import {
  motion
} from "/build/_shared/chunk-XPOM4QCY.js";
import {
  BlogPostTags_default,
  BsCheck2
} from "/build/_shared/chunk-I6EEESUB.js";
import {
  esm_default
} from "/build/_shared/chunk-64VENT2U.js";
import "/build/_shared/chunk-AOOMS32I.js";
import {
  AUTHOR,
  BLOG_DESCRIPTION,
  BLOG_IMAGE_URL,
  BLOG_KEYWORDS,
  BLOG_URL,
  BLOG_WEBSITE_NAME,
  GenIcon,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  SupportedTheme,
  TWITTER_ACC,
  TWITTER_CARD_TYPE,
  fixedWidthLayoutClasses,
  useTheme
} from "/build/_shared/chunk-RBFZKFZL.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3QRA3G35.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// browser-route-module:/Users/flo/Development/Devato/app/routes/blog/index.tsx?browser
init_react();

// app/routes/blog/index.tsx
init_react();
var React8 = __toModule(require_react());

// app/components/Blog/BlogPostCard.tsx
init_react();
var React3 = __toModule(require_react());

// app/components/Blog/CopyURLButton.tsx
init_react();
var React2 = __toModule(require_react());

// node_modules/react-icons/fi/index.esm.js
init_react();
function FiCopy(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24", "fill": "none", "stroke": "currentColor", "strokeWidth": "2", "strokeLinecap": "round", "strokeLinejoin": "round" }, "child": [{ "tag": "rect", "attr": { "x": "9", "y": "9", "width": "13", "height": "13", "rx": "2", "ry": "2" } }, { "tag": "path", "attr": { "d": "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" } }] })(props);
}

// app/components/Blog/CopyURLButton.tsx
var CopyURLButton = (props) => {
  const buttonText = props.userRecentlyCopiedText ? "Copied" : "Copy URL";
  return /* @__PURE__ */ React2.createElement(React2.Fragment, null, /* @__PURE__ */ React2.createElement("button", {
    name: buttonText,
    "aria-label": buttonText,
    className: "url-button copy-url-button custom3:px-4",
    onClick: props.handleCopyURL
  }, /* @__PURE__ */ React2.createElement("span", {
    className: "hidden custom3:flex"
  }, buttonText), /* @__PURE__ */ React2.createElement("span", {
    className: "flex custom3:hidden"
  }, props.userRecentlyCopiedText ? /* @__PURE__ */ React2.createElement(BsCheck2, {
    className: "w-5 h-4 text-gray-600"
  }) : /* @__PURE__ */ React2.createElement(FiCopy, {
    className: "w-5 h-4 text-gray-600"
  }))));
};
var CopyURLButton_default = CopyURLButton;

// node_modules/react-icons/md/index.esm.js
init_react();
function MdDateRange(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "d": "M0 0h24v24H0z" } }, { "tag": "path", "attr": { "d": "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 002 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z" } }] })(props);
}

// app/components/Blog/BlogPostCard.tsx
var BlogPostCard = (props) => {
  const blogPost = props.blogPost;
  const blogPostTags = blogPost.metadata.tags;
  const rawDate = new Date(blogPost.sys.updatedAt).toDateString();
  const publishedDate = rawDate.substring(rawDate.indexOf(" ") + 1);
  const postUrl = `https://www.solutio.io/blog/${blogPost.fields.blogPostSlug}`;
  const [userRecentlyCopiedText, setUsetRecentlyCopiedText] = React3.useState(false);
  const handleCopyURL = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(postUrl);
    setUsetRecentlyCopiedText(true);
  };
  React3.useEffect(() => {
    let timeout;
    if (userRecentlyCopiedText) {
      timeout = window.setTimeout(() => setUsetRecentlyCopiedText(false), 1500);
    }
    return () => {
      window.clearTimeout(timeout);
    };
  }, [userRecentlyCopiedText]);
  return /* @__PURE__ */ React3.createElement("a", {
    href: `/blog/${blogPost.fields.blogPostSlug}`,
    className: "h-full rounded-lg"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "h-full"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "Card__Container"
  }, /* @__PURE__ */ React3.createElement(CopyURLButton_default, {
    userRecentlyCopiedText,
    handleCopyURL
  }), /* @__PURE__ */ React3.createElement("div", {
    className: "Card__TextContent h-full flex rounded-b-lg flex-col pt-5 pb-2 px-5 justify-between"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React3.createElement("div", {
    className: "Card__Date__Wrapper"
  }, /* @__PURE__ */ React3.createElement(MdDateRange, {
    className: "h-5"
  }), /* @__PURE__ */ React3.createElement("p", {
    className: "Card__Date text-base text-gray-500 font-medium font-sans"
  }, publishedDate)), /* @__PURE__ */ React3.createElement(React3.Fragment, null, /* @__PURE__ */ React3.createElement("div", {
    className: "font-bold text-grey-900 text-xl mb-2 sm:max-h-16 overflow-hidden"
  }, blogPost.fields.blogPostTitle), /* @__PURE__ */ React3.createElement("p", {
    className: "Card__Excerpt text-gray-600 text-base line-clamp-3"
  }, blogPost.fields.blogPostExcerpt))), /* @__PURE__ */ React3.createElement(BlogPostTags_default, {
    tags: blogPostTags
  })))));
};
var BlogPostCard_default = BlogPostCard;

// app/components/Blog/SearchBarSection.tsx
init_react();
var React6 = __toModule(require_react());

// node_modules/@heroicons/react/outline/esm/index.js
init_react();

// node_modules/@heroicons/react/outline/esm/DocumentTextIcon.js
init_react();
var React4 = __toModule(require_react());
function DocumentTextIcon(props, svgRef) {
  return /* @__PURE__ */ React4.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 2,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef
  }, props), /* @__PURE__ */ React4.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
  }));
}
var ForwardRef = React4.forwardRef(DocumentTextIcon);
var DocumentTextIcon_default = ForwardRef;

// app/components/Blog/BlogIndexDecoration.tsx
init_react();
var React5 = __toModule(require_react());
var BlogIndexDecoration = () => {
  return /* @__PURE__ */ React5.createElement(motion.svg, {
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
  }, /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter0_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("circle", {
    cx: "737.5",
    cy: "606.5",
    r: "61.5",
    fill: "url(#paint0_radial_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React5.createElement("circle", {
    cx: "737.5",
    cy: "606.5",
    r: "61",
    stroke: "url(#paint1_linear_0_5)"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter1_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("circle", {
    cx: "243",
    cy: "750",
    r: "38",
    fill: "url(#paint2_linear_0_5)",
    fillOpacity: "0.5"
  }), /* @__PURE__ */ React5.createElement("circle", {
    cx: "243",
    cy: "750",
    r: "37.5",
    stroke: "url(#paint3_linear_0_5)"
  })), /* @__PURE__ */ React5.createElement("circle", {
    cx: "68",
    cy: "68",
    r: "68",
    fill: "url(#paint4_linear_0_5)",
    fillOpacity: "0.8"
  }), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter2_d_0_5)"
  }, /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter3_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("rect", {
    x: "56",
    y: "44",
    width: "687",
    height: "704",
    rx: "50",
    fill: "white",
    fillOpacity: "0.2"
  }), /* @__PURE__ */ React5.createElement("rect", {
    x: "57",
    y: "45",
    width: "685",
    height: "702",
    rx: "49",
    stroke: "url(#paint5_linear_0_5)",
    strokeWidth: "2"
  }))), /* @__PURE__ */ React5.createElement("g", {
    opacity: "0.5"
  }, /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter4_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M124.701 53L124.701 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter5_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M161.34 53L161.34 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter6_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M197.982 53L197.982 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter7_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M234.621 53L234.621 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter8_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M271.261 53L271.261 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter9_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M307.9 53L307.9 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter10_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M344.542 53L344.542 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter11_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M381.181 53L381.181 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter12_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M417.82 53L417.82 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter13_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M454.462 53L454.462 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter14_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M491.101 53L491.101 740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter15_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M527.741 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter16_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M564.38 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter17_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M601.022 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter18_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M637.661 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter19_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M674.301 53V740",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter20_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 122L66.9997 122",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter21_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 158L66.9997 158",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter22_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 195L66.9997 195",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter23_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 232L66.9997 232",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter24_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 268L66.9997 268",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter25_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 305L66.9997 305",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter26_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 342L66.9997 342",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter27_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 378L66.9997 378",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter28_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 415L66.9997 415",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter29_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 451L66.9997 451",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter30_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 488L66.9997 488",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter31_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 525L66.9997 525",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter32_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 561L66.9997 561",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter33_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 598L66.9997 598",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter34_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 635L66.9997 635",
    stroke: "#CEE1EA"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter35_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M731 671L66.9997 671",
    stroke: "#CEE1EA"
  }))), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter36_d_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M600.078 353.579C598.077 358.814 582.698 357.8 565.727 351.314C548.756 344.828 536.621 335.326 538.622 330.09C540.623 324.854 616.558 131.88 616.558 131.88L678.014 155.369C678.014 155.369 601.178 350.7 600.078 353.579Z",
    fill: "url(#paint6_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M677.491 155.543C677.063 156.664 675.889 157.526 673.953 158.051C672.028 158.574 669.44 158.737 666.355 158.534C660.192 158.127 652.147 156.265 643.69 153.033C635.233 149.801 627.997 145.823 623.134 142.015C620.7 140.109 618.881 138.261 617.795 136.588C616.704 134.905 616.403 133.48 616.831 132.359C617.26 131.238 618.434 130.377 620.37 129.851C622.295 129.329 624.883 129.166 627.967 129.369C634.131 129.775 642.176 131.637 650.632 134.87C659.089 138.102 666.326 142.08 671.189 145.888C673.622 147.794 675.442 149.641 676.527 151.315C677.619 152.997 677.92 154.422 677.491 155.543Z",
    fill: "url(#paint7_linear_0_5)",
    stroke: "url(#paint8_linear_0_5)",
    strokeWidth: "0.852615"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter37_d_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M527.088 469.925C494.055 525.968 396.524 538.317 319.791 489.864C256.399 449.835 211.497 363.715 241.198 307.858C278.131 245.199 274.926 250.637 274.926 250.637C274.926 250.637 290.314 365.335 351.016 410.141C414.302 456.854 557.996 417.489 557.996 417.489C557.996 417.489 531.33 462.728 527.088 469.925Z",
    fill: "url(#paint9_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M475.753 418.479C452.391 458.113 658.842 344.819 488.119 233.447C317.397 122.076 280.156 356.592 303.518 316.958C326.88 277.323 384.375 267.92 431.936 295.954C479.497 323.988 499.115 378.845 475.753 418.479Z",
    fill: "url(#paint10_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("mask", {
    id: "path-44-inside-1_0_5",
    fill: "white"
  }, /* @__PURE__ */ React5.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348.361 448.686C426.749 494.89 521.438 479.511 559.856 414.334C598.273 349.158 565.871 258.866 487.483 212.661C409.095 166.456 314.405 181.836 275.988 247.012C237.571 312.189 269.973 402.481 348.361 448.686ZM383.141 389.679C429.822 417.195 484.919 410.226 506.204 374.115C527.49 338.004 506.903 286.424 460.222 258.909C413.542 231.394 358.445 238.362 337.159 274.474C315.874 310.585 336.461 362.164 383.141 389.679Z"
  })), /* @__PURE__ */ React5.createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M348.361 448.686C426.749 494.89 521.438 479.511 559.856 414.334C598.273 349.158 565.871 258.866 487.483 212.661C409.095 166.456 314.405 181.836 275.988 247.012C237.571 312.189 269.973 402.481 348.361 448.686ZM383.141 389.679C429.822 417.195 484.919 410.226 506.204 374.115C527.49 338.004 506.903 286.424 460.222 258.909C413.542 231.394 358.445 238.362 337.159 274.474C315.874 310.585 336.461 362.164 383.141 389.679Z",
    fill: "url(#paint11_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M558.261 413.394C520.518 477.427 427.096 492.946 349.301 447.091L347.421 450.28C426.401 496.834 522.359 481.594 561.45 415.274L558.261 413.394ZM486.543 214.256C564.338 260.111 596.004 349.362 558.261 413.394L561.45 415.274C600.542 348.954 567.403 257.62 488.423 211.066L486.543 214.256ZM277.583 247.952C315.326 183.92 408.747 168.4 486.543 214.256L488.423 211.066C409.442 164.512 313.485 179.752 274.393 246.072L277.583 247.952ZM349.301 447.091C271.506 401.235 239.839 311.985 277.583 247.952L274.393 246.072C235.302 312.392 268.44 403.726 347.421 450.28L349.301 447.091ZM504.609 373.175C484.053 408.049 430.286 415.319 384.081 388.085L382.201 391.274C429.358 419.07 485.784 412.404 507.799 375.055L504.609 373.175ZM459.282 260.504C505.487 287.738 525.165 338.301 504.609 373.175L507.799 375.055C529.814 337.706 508.318 285.11 461.162 257.314L459.282 260.504ZM338.754 275.414C359.31 240.54 413.078 233.269 459.282 260.504L461.162 257.314C414.006 229.519 357.579 236.185 335.565 273.534L338.754 275.414ZM384.081 388.085C337.877 360.85 318.198 310.288 338.754 275.414L335.565 273.534C313.55 310.882 335.045 363.479 382.201 391.274L384.081 388.085Z",
    fill: "url(#paint12_linear_0_5)",
    mask: "url(#path-44-inside-1_0_5)"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter38_d_0_5)"
  }, /* @__PURE__ */ React5.createElement("g", {
    opacity: "0.9",
    filter: "url(#filter39_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M485.043 439.685L589.146 524.942L528.18 637.661L441.913 549.736L485.043 439.685Z",
    fill: "url(#paint13_linear_0_5)"
  })), /* @__PURE__ */ React5.createElement("path", {
    d: "M588.445 525.033L665.036 510.824L609.991 614.22L528.18 637.661L588.445 525.033Z",
    fill: "url(#paint14_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("g", {
    opacity: "0.9",
    filter: "url(#filter40_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("path", {
    d: "M571.165 438.502L665.036 510.824L588.445 525.033L484.647 439.38L571.165 438.502Z",
    fill: "url(#paint15_linear_0_5)"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M487.191 440.28L570.854 439.43L662.829 510.293L588.701 524.044L487.191 440.28Z",
    stroke: "white",
    strokeWidth: "1.85119"
  }))), /* @__PURE__ */ React5.createElement("path", {
    d: "M132.874 316.849C137.803 323.071 146.839 324.127 153.069 319.208L306.525 198.06C312.833 193.08 313.839 183.898 308.758 177.671L271.499 132L98.0105 272.837L132.874 316.849Z",
    fill: "url(#paint16_linear_0_5)",
    stroke: "white",
    strokeWidth: "0.719444"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M78.158 227.731C75.8974 221.856 77.7182 215.194 82.6526 211.285L215.796 105.817C220.73 101.908 227.633 101.661 232.834 105.206L268.971 129.837C272.981 132.57 273.191 138.408 269.387 141.421L105.045 271.603C101.241 274.616 95.6059 273.076 93.8632 268.547L78.158 227.731Z",
    fill: "url(#paint17_linear_0_5)",
    stroke: "white",
    strokeWidth: "0.719444"
  }), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter41_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("ellipse", {
    cx: "209.34",
    cy: "486.612",
    rx: "88.6628",
    ry: "81.5901",
    transform: "rotate(13.5781 209.34 486.612)",
    fill: "url(#paint18_linear_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M294.939 507.286C284.449 550.719 237.649 576.765 190.327 565.336C143.005 553.906 113.251 509.371 123.741 465.938C134.231 422.505 181.032 396.458 228.354 407.888C275.676 419.317 305.429 463.852 294.939 507.286Z",
    stroke: "#FFFAFA",
    strokeWidth: "1.20513"
  })), /* @__PURE__ */ React5.createElement("g", {
    filter: "url(#filter42_b_0_5)"
  }, /* @__PURE__ */ React5.createElement("ellipse", {
    cx: "214.158",
    cy: "474.56",
    rx: "88.6628",
    ry: "81.5901",
    transform: "rotate(13.5781 214.158 474.56)",
    fill: "url(#paint19_linear_0_5)",
    fillOpacity: "0.7"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M299.758 495.234C289.268 538.667 242.467 564.713 195.145 553.284C147.823 541.855 118.069 497.32 128.559 453.886C139.049 410.453 185.85 384.407 233.172 395.836C280.494 407.266 310.248 451.801 299.758 495.234Z",
    stroke: "#FFFAFA",
    strokeWidth: "1.20513"
  })), /* @__PURE__ */ React5.createElement("path", {
    d: "M22 685.104C23.4616 748.595 44.6441 780.341 85.5476 780.341",
    stroke: "#FF7FA8",
    strokeWidth: "2"
  }), /* @__PURE__ */ React5.createElement("path", {
    d: "M691 15C744.123 15 770.684 40.3333 770.684 91",
    stroke: "#848CF1",
    strokeWidth: "2"
  }), /* @__PURE__ */ React5.createElement("defs", null, /* @__PURE__ */ React5.createElement("filter", {
    id: "filter0_b_0_5",
    x: "622",
    y: "491",
    width: "231",
    height: "231",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "27"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter1_b_0_5",
    x: "151",
    y: "658",
    width: "184",
    height: "184",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "27"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter2_d_0_5",
    x: "26",
    y: "44",
    width: "727",
    height: "744",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React5.createElement("feOffset", {
    dx: "-10",
    dy: "20"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    stdDeviation: "10"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.380365 0 0 0 0 0.453506 0 0 0 0 0.8375 0 0 0 0.2 0"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter3_b_0_5",
    x: "36",
    y: "24",
    width: "727",
    height: "744",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "10"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter4_b_0_5",
    x: "114.201",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter5_b_0_5",
    x: "150.84",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter6_b_0_5",
    x: "187.482",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter7_b_0_5",
    x: "224.121",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter8_b_0_5",
    x: "260.761",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter9_b_0_5",
    x: "297.4",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter10_b_0_5",
    x: "334.042",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter11_b_0_5",
    x: "370.681",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter12_b_0_5",
    x: "407.32",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter13_b_0_5",
    x: "443.962",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter14_b_0_5",
    x: "480.601",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter15_b_0_5",
    x: "517.241",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter16_b_0_5",
    x: "553.88",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter17_b_0_5",
    x: "590.522",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter18_b_0_5",
    x: "627.161",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter19_b_0_5",
    x: "663.801",
    y: "43",
    width: "21",
    height: "707",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter20_b_0_5",
    x: "56.9997",
    y: "111.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter21_b_0_5",
    x: "56.9997",
    y: "147.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter22_b_0_5",
    x: "56.9997",
    y: "184.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter23_b_0_5",
    x: "56.9997",
    y: "221.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter24_b_0_5",
    x: "56.9997",
    y: "257.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter25_b_0_5",
    x: "56.9997",
    y: "294.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter26_b_0_5",
    x: "56.9997",
    y: "331.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter27_b_0_5",
    x: "56.9997",
    y: "367.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter28_b_0_5",
    x: "56.9997",
    y: "404.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter29_b_0_5",
    x: "56.9997",
    y: "440.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter30_b_0_5",
    x: "56.9997",
    y: "477.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter31_b_0_5",
    x: "56.9997",
    y: "514.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter32_b_0_5",
    x: "56.9997",
    y: "550.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter33_b_0_5",
    x: "56.9997",
    y: "587.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter34_b_0_5",
    x: "56.9997",
    y: "624.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter35_b_0_5",
    x: "56.9997",
    y: "660.5",
    width: "684",
    height: "21",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "5"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter36_d_0_5",
    x: "506.166",
    y: "128.858",
    width: "204.18",
    height: "320.185",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React5.createElement("feOffset", {
    dy: "59.8751"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    stdDeviation: "16.1202"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0 0.420941 0 0 0 0.15 0"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter37_d_0_5",
    x: "161.828",
    y: "186.003",
    width: "484.192",
    height: "534.005",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React5.createElement("feOffset", {
    dy: "130"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    stdDeviation: "35"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.388235 0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0.1 0"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter38_d_0_5",
    x: "391.913",
    y: "438.502",
    width: "323.123",
    height: "379.16",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    in: "SourceAlpha",
    type: "matrix",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
    result: "hardAlpha"
  }), /* @__PURE__ */ React5.createElement("feOffset", {
    dy: "130"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    stdDeviation: "25"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "hardAlpha",
    operator: "out"
  }), /* @__PURE__ */ React5.createElement("feColorMatrix", {
    type: "matrix",
    values: "0 0 0 0 0.436157 0 0 0 0 0.337255 0 0 0 0 0.717647 0 0 0 0.05 0"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in2: "BackgroundImageFix",
    result: "effect1_dropShadow_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_dropShadow_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter39_b_0_5",
    x: "437.913",
    y: "435.685",
    width: "155.234",
    height: "205.976",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "2"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter40_b_0_5",
    x: "480.647",
    y: "434.502",
    width: "188.389",
    height: "94.5312",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "2"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter41_b_0_5",
    x: "96.9309",
    y: "380.493",
    width: "224.819",
    height: "212.237",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "12.0513"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("filter", {
    id: "filter42_b_0_5",
    x: "101.749",
    y: "368.442",
    width: "224.819",
    height: "212.237",
    filterUnits: "userSpaceOnUse",
    colorInterpolationFilters: "sRGB"
  }, /* @__PURE__ */ React5.createElement("feFlood", {
    floodOpacity: "0",
    result: "BackgroundImageFix"
  }), /* @__PURE__ */ React5.createElement("feGaussianBlur", {
    in: "BackgroundImage",
    stdDeviation: "12.0513"
  }), /* @__PURE__ */ React5.createElement("feComposite", {
    in2: "SourceAlpha",
    operator: "in",
    result: "effect1_backgroundBlur_0_5"
  }), /* @__PURE__ */ React5.createElement("feBlend", {
    mode: "normal",
    in: "SourceGraphic",
    in2: "effect1_backgroundBlur_0_5",
    result: "shape"
  })), /* @__PURE__ */ React5.createElement("radialGradient", {
    id: "paint0_radial_0_5",
    cx: "0",
    cy: "0",
    r: "1",
    gradientUnits: "userSpaceOnUse",
    gradientTransform: "translate(699.541 573.543) rotate(42.9865) scale(106.599)"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FFA59E",
    stopOpacity: "0.31"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#7D8AF3"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint1_linear_0_5",
    x1: "689.242",
    y1: "568.541",
    x2: "784.876",
    y2: "640.928",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "white"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFB775",
    stopOpacity: "0.956667"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint2_linear_0_5",
    x1: "243.22",
    y1: "702.335",
    x2: "261.012",
    y2: "758.127",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#BBFA96",
    stopOpacity: "0.65"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#3EA692"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint3_linear_0_5",
    x1: "220.376",
    y1: "726.058",
    x2: "260.133",
    y2: "793.052",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FFF0B9"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#288D7F"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint4_linear_0_5",
    x1: "126.489",
    y1: "116.043",
    x2: "104.511",
    y2: "-9.29053",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FF68B1"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFCF87"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint5_linear_0_5",
    x1: "399.5",
    y1: "44",
    x2: "711.128",
    y2: "739.507",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#F6B1A6"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#7E8AF3"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint6_linear_0_5",
    x1: "658.007",
    y1: "188.28",
    x2: "611.979",
    y2: "168.956",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#278C7E"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#7CEBCA"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint7_linear_0_5",
    x1: "738.192",
    y1: "184.615",
    x2: "670.9",
    y2: "219.919",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FFE895"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#A5FF96"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint8_linear_0_5",
    x1: "658.38",
    y1: "137.374",
    x2: "653.573",
    y2: "152.954",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#3BBA7F"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "white"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint9_linear_0_5",
    x1: "247.506",
    y1: "359.458",
    x2: "483.525",
    y2: "495.372",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#A96389"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#BD92EA"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint10_linear_0_5",
    x1: "481.16",
    y1: "229.016",
    x2: "393.436",
    y2: "377.843",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#5049B8"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#846CB2"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint11_linear_0_5",
    x1: "551.801",
    y1: "236.605",
    x2: "274.863",
    y2: "437.667",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#6684F9"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "0.504278",
    stopColor: "#E3A2D8"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFB989"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint12_linear_0_5",
    x1: "522.567",
    y1: "233.341",
    x2: "446.689",
    y2: "436.806",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#8572FF"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "white"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint13_linear_0_5",
    x1: "498.571",
    y1: "607.275",
    x2: "537.154",
    y2: "514.651",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FFB7A0"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#F6DFA4"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint14_linear_0_5",
    x1: "580.702",
    y1: "644.043",
    x2: "617.418",
    y2: "489.018",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FF68B1"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFCF87"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint15_linear_0_5",
    x1: "859.906",
    y1: "660.963",
    x2: "576.425",
    y2: "457.071",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FE9535"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFF9BE"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint16_linear_0_5",
    x1: "183.454",
    y1: "202.477",
    x2: "242.399",
    y2: "264.964",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FFBC6C"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFD0D3"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint17_linear_0_5",
    x1: "494.751",
    y1: "-76.7657",
    x2: "180.089",
    y2: "213.639",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", {
    stopColor: "#FE9535"
  }), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#FFF9BE"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint18_linear_0_5",
    x1: "187.159",
    y1: "558.641",
    x2: "238.667",
    y2: "410.702",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", null), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#BDD7FF",
    stopOpacity: "0.13"
  })), /* @__PURE__ */ React5.createElement("linearGradient", {
    id: "paint19_linear_0_5",
    x1: "209.239",
    y1: "557.087",
    x2: "261.376",
    y2: "401.068",
    gradientUnits: "userSpaceOnUse"
  }, /* @__PURE__ */ React5.createElement("stop", null), /* @__PURE__ */ React5.createElement("stop", {
    offset: "1",
    stopColor: "#BDD7FF",
    stopOpacity: "0.13"
  }))));
};
var BlogIndexDecoration_default = BlogIndexDecoration;

// app/components/Blog/SearchBarSection.tsx
var SearchBarSection = (props) => {
  return /* @__PURE__ */ React6.createElement("div", {
    className: "BlogPage__Header__Wrapper"
  }, /* @__PURE__ */ React6.createElement("div", {
    className: "custom2:col-span-3 sm:col-span-2 "
  }, /* @__PURE__ */ React6.createElement("p", {
    className: "BlogPage__SubHeader mb-5 text-5xl font-medium leading-snug"
  }, "Case Studies und Blog Beitr\xE4ge von Devato."), /* @__PURE__ */ React6.createElement("p", {
    className: "BlogPage__SubHeader mb-10 leading-normal text-post-bodyText text-3xl font-normal"
  }, "Tag along with me as I explore new tech and share my learning along the way!"), /* @__PURE__ */ React6.createElement("div", {
    className: "SearchBar__InputWrapper"
  }, /* @__PURE__ */ React6.createElement("input", {
    type: "text",
    name: "Search blog posts",
    id: "blog-post-search-bar",
    value: props.search,
    onChange: (e) => {
      props.setSearch(e.target.value);
    },
    className: "SearchBar__Input",
    placeholder: "Search posts"
  }), /* @__PURE__ */ React6.createElement("div", {
    className: "SearchBar__Icon"
  }, /* @__PURE__ */ React6.createElement("span", {
    className: "mr-2"
  }, /* @__PURE__ */ React6.createElement(DocumentTextIcon_default, {
    className: "h-5 w-5"
  })), /* @__PURE__ */ React6.createElement("p", {
    className: "text-sm opacity-80"
  }, props.count)))), /* @__PURE__ */ React6.createElement(BlogIndexDecoration_default, null));
};
var SearchBarSection_default = SearchBarSection;

// app/components/Blog/TagsSection.tsx
init_react();
var React7 = __toModule(require_react());
var TagsSection = (props) => {
  const { theme } = useTheme();
  return /* @__PURE__ */ React7.createElement("div", {
    className: "Tags__Wrapper mt-16 md:mt-32 mb-16 text-blog-lgText"
  }, /* @__PURE__ */ React7.createElement("p", {
    className: "BlogPage__SubHeader text-xl mb-4 font-bold"
  }, "Search blog by topics"), /* @__PURE__ */ React7.createElement("div", {
    className: "tags-wrapper flex flex-row flex-wrap"
  }, props.tags.map((tag) => /* @__PURE__ */ React7.createElement(TagBadge, {
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
var TagBadge = (props) => {
  const selectedClassName = props.theme === SupportedTheme.DARK ? "bg-white text-black" : "bg-black text-white";
  const disabledClassName = "opacity-25";
  return /* @__PURE__ */ React7.createElement("button", {
    name: "Filter for" + props.tag,
    "aria-label": props.tag,
    className: `mb-4 mr-4 h-auto w-auto cursor-pointer rounded-full px-6 py-3 transition flex ${props.selected ? selectedClassName : "bg-blog-tagBg"} ${props.disabled ? disabledClassName : "focus-ring"}`,
    onClick: () => props.onClick(props.tagId),
    disabled: props.disabled
  }, /* @__PURE__ */ React7.createElement("span", {
    className: "text-lg"
  }, "#" + props.tag));
};

// app/components/Blog/Blog.css
var Blog_default = "/build/_assets/Blog-PYOP7LTU.css";

// app/routes/blog/index.tsx
var links = () => {
  return [
    { rel: "stylesheet", href: Blog_default },
    {
      rel: "canonical",
      href: "https://www.alissanguyen.dev/blog"
    }
  ];
};
var meta = () => {
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
esm_default.initialize(TRACKING_ID);
function BlogPage() {
  const { blogPosts, contentfulTags } = useLoaderData();
  const [searchInput, setSearchInput] = React8.useState("");
  const postCount = Object.keys(blogPosts.items).length;
  const [selectedTagIds, setSelectedTagIds] = React8.useState(new Set([]));
  React8.useEffect(() => {
    esm_default.pageview(window.location.pathname + window.location.search);
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
    const tags = cur.metadata.tags;
    tags.forEach((tag) => {
      const alreadyHasThisTagId = acc.has(tag.sys.id);
      if (alreadyHasThisTagId) {
        return;
      }
      acc.add(tag.sys.id);
    });
    return acc;
  }, new Set([]));
  const searchInputRegex = new RegExp(escapeSearchTermForRegularExpressionConstruction(searchInput), "i");
  const filteredBlogPostsByName = searchInput === "" ? filteredBlogPostsByTags : filteredBlogPostsByTags.filter((post) => {
    return searchInputRegex.test(post.fields.blogPostTitle);
  });
  return /* @__PURE__ */ React8.createElement("div", {
    className: fixedWidthLayoutClasses
  }, /* @__PURE__ */ React8.createElement(SearchBarSection_default, {
    search: searchInput,
    setSearch: setSearchInput,
    count: postCount
  }), /* @__PURE__ */ React8.createElement(TagsSection_default, {
    tags: contentfulTags.items,
    selectedTags: selectedTagIds,
    onTagSelect: updateSelectedTagIds,
    availableTags: availableTagIds
  }), /* @__PURE__ */ React8.createElement("div", {
    className: "spacer-div mt-20 relative"
  }), /* @__PURE__ */ React8.createElement("img", {
    src: "/images/blobs/Ellipse 3.svg",
    title: "Decorative Blob",
    alt: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-3 absolute hidden lg:block w-96 lg:translate-x-[-20rem] lg:translate-y-[-10rem] xl:translate-y-[-20rem] xl:translate-x-[-28rem] 2xl:translate-x-[-30rem] 3xl:translate-x-[-40rem] z-[-99]"
  }), /* @__PURE__ */ React8.createElement("img", {
    src: "/images/blobs/Pinky.svg",
    alt: "Decorative Blob",
    title: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-4 absolute w-44 hidden lg:block lg:translate-x-[10rem] lg:translate-y-[-7rem] top-0 xl:translate-y-[-10rem] xl:translate-x-[14rem] 2xl:translate-x-[18rem] 3xl:translate-x-[25rem] right-0 z-[-99]"
  }), /* @__PURE__ */ React8.createElement("img", {
    src: "/images/blobs/ellipse2.svg",
    alt: "Decorative Blob",
    title: "Decorative Blob",
    loading: "lazy",
    className: "blog-blob-2 absolute w-72 bottom-0 hidden lg:block lg:translate-x-[18rem] lg:translate-y-[-15rem] xl:translate-x-[15rem] 2xl:translate-x-[25rem] xl:translate-y-[-10rem] 3xl:translate-x-[40rem] right-0 z-[-99]"
  }), filteredBlogPostsByName.length > 0 ? /* @__PURE__ */ React8.createElement("ul", {
    className: "BlogPosts__Wrapper grid gap-10 gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none"
  }, filteredBlogPostsByName.map((blogPost) => {
    return /* @__PURE__ */ React8.createElement("li", {
      key: blogPost.sys.id
    }, /* @__PURE__ */ React8.createElement(BlogPostCard_default, {
      blogPost
    }));
  })) : /* @__PURE__ */ React8.createElement("div", {
    className: "flex items-center m-auto flex-row justify-center"
  }, /* @__PURE__ */ React8.createElement("p", {
    className: "text-3xl text-blog-lgText mr-10"
  }, "Oh no.. there is some problems loading blog posts :("), /* @__PURE__ */ React8.createElement("img", {
    src: "/images/cry2.png",
    alt: "Crying illustration",
    title: "Crying illustration",
    className: "w-44"
  })));
}
var escapeSearchTermForRegularExpressionConstruction = (str) => {
  return str.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
};
export {
  BlogPage as default,
  links,
  meta
};
//# sourceMappingURL=/build/routes/blog/index-4GAELYY3.js.map
