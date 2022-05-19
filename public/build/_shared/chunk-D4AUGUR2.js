import {
  tags
} from "/build/_shared/chunk-WHXUHIUL.js";
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

export {
  tagIdsToDisplayNames,
  BlogPostTags_default
};
//# sourceMappingURL=/build/_shared/chunk-D4AUGUR2.js.map
