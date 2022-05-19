import {
  GenIcon,
  tags
} from "/build/_shared/chunk-C64B5WXH.js";
import {
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// app/components/Blog/BlogPostTags.tsx
init_react();
var React = __toModule(require_react());
var tagIdsToDisplayNames = tags.reduce((acc, cur) => {
  acc[cur.id] = cur.name;
  return acc;
}, {});
var BlogPostTags = (props) => {
  const blogPostTags = props.tags;
  return /* @__PURE__ */ React.createElement("div", {
    className: "PostCard__TagsWrapper pt-2 pb-4 w-full overflow-hidden"
  }, blogPostTags.map((tag) => {
    const title = tagIdsToDisplayNames[tag.sys.id];
    return /* @__PURE__ */ React.createElement("span", {
      key: tag.sys.id,
      className: "PostCard__Tag inline-block bg-gray-100 rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mr-2"
    }, "#", title);
  }));
};
var BlogPostTags_default = BlogPostTags;

// node_modules/react-icons/bs/index.esm.js
init_react();
function BsFillArrowLeftCircleFill(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" } }] })(props);
}
function BsCheck2(props) {
  return GenIcon({ "tag": "svg", "attr": { "fill": "currentColor", "viewBox": "0 0 16 16" }, "child": [{ "tag": "path", "attr": { "d": "M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" } }] })(props);
}

export {
  tagIdsToDisplayNames,
  BlogPostTags_default,
  BsFillArrowLeftCircleFill,
  BsCheck2
};
//# sourceMappingURL=/build/_shared/chunk-BBJG44RN.js.map
