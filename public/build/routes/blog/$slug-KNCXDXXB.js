import {
  SimplifiedThemeButton
} from "/build/_shared/chunk-QOO3OBFJ.js";
import {
  BlogPostTags_default,
  BsFillArrowLeftCircleFill,
  tagIdsToDisplayNames
} from "/build/_shared/chunk-WV5ON4HX.js";
import {
  ArrowRightIcon_default
} from "/build/_shared/chunk-QVUXHPFX.js";
import {
  AUTHOR,
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  NAVBAR_ID,
  STICKY_BORDER,
  STICKY_HIGHLIGHT,
  SupportedTheme,
  TEXT_HIGHLIGHT,
  TWITTER_ACC,
  TWITTER_CARD_TYPE,
  TWITTER_PUBLISHER,
  fixedWidthLayoutClasses,
  useTheme
} from "/build/_shared/chunk-MFXABG7H.js";
import {
  useLoaderData
} from "/build/_shared/chunk-3QRA3G35.js";
import {
  React,
  __commonJS,
  __toModule,
  init_react,
  require_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js
var require_rich_text_react_renderer_es5 = __commonJS({
  "node_modules/@contentful/rich-text-react-renderer/dist/rich-text-react-renderer.es5.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React24 = require_react();
    var React__default = _interopDefault(React24);
    var __assign = function() {
      __assign = Object.assign || function __assign2(t) {
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
    var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
    function unwrapExports(x) {
      return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
    }
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    var blocks = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.BLOCKS = void 0;
      var BLOCKS3;
      (function(BLOCKS4) {
        BLOCKS4["DOCUMENT"] = "document";
        BLOCKS4["PARAGRAPH"] = "paragraph";
        BLOCKS4["HEADING_1"] = "heading-1";
        BLOCKS4["HEADING_2"] = "heading-2";
        BLOCKS4["HEADING_3"] = "heading-3";
        BLOCKS4["HEADING_4"] = "heading-4";
        BLOCKS4["HEADING_5"] = "heading-5";
        BLOCKS4["HEADING_6"] = "heading-6";
        BLOCKS4["OL_LIST"] = "ordered-list";
        BLOCKS4["UL_LIST"] = "unordered-list";
        BLOCKS4["LIST_ITEM"] = "list-item";
        BLOCKS4["HR"] = "hr";
        BLOCKS4["QUOTE"] = "blockquote";
        BLOCKS4["EMBEDDED_ENTRY"] = "embedded-entry-block";
        BLOCKS4["EMBEDDED_ASSET"] = "embedded-asset-block";
        BLOCKS4["TABLE"] = "table";
        BLOCKS4["TABLE_ROW"] = "table-row";
        BLOCKS4["TABLE_CELL"] = "table-cell";
        BLOCKS4["TABLE_HEADER_CELL"] = "table-header-cell";
      })(BLOCKS3 = exports2.BLOCKS || (exports2.BLOCKS = {}));
    });
    unwrapExports(blocks);
    var blocks_1 = blocks.BLOCKS;
    var inlines = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.INLINES = void 0;
      var INLINES3;
      (function(INLINES4) {
        INLINES4["HYPERLINK"] = "hyperlink";
        INLINES4["ENTRY_HYPERLINK"] = "entry-hyperlink";
        INLINES4["ASSET_HYPERLINK"] = "asset-hyperlink";
        INLINES4["EMBEDDED_ENTRY"] = "embedded-entry-inline";
      })(INLINES3 = exports2.INLINES || (exports2.INLINES = {}));
    });
    unwrapExports(inlines);
    var inlines_1 = inlines.INLINES;
    var marks = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var MARKS3;
      (function(MARKS4) {
        MARKS4["BOLD"] = "bold";
        MARKS4["ITALIC"] = "italic";
        MARKS4["UNDERLINE"] = "underline";
        MARKS4["CODE"] = "code";
      })(MARKS3 || (MARKS3 = {}));
      exports2.default = MARKS3;
    });
    unwrapExports(marks);
    var schemaConstraints = createCommonjsModule(function(module2, exports2) {
      var __spreadArray = commonjsGlobal && commonjsGlobal.__spreadArray || function(to, from, pack) {
        if (pack || arguments.length === 2)
          for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar)
                ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
      var _a2;
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.V1_NODE_TYPES = exports2.TEXT_CONTAINERS = exports2.HEADINGS = exports2.CONTAINERS = exports2.VOID_BLOCKS = exports2.TABLE_BLOCKS = exports2.LIST_ITEM_BLOCKS = exports2.TOP_LEVEL_BLOCKS = void 0;
      exports2.TOP_LEVEL_BLOCKS = [
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET,
        blocks.BLOCKS.TABLE
      ];
      exports2.LIST_ITEM_BLOCKS = [
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET
      ];
      exports2.TABLE_BLOCKS = [
        blocks.BLOCKS.TABLE,
        blocks.BLOCKS.TABLE_ROW,
        blocks.BLOCKS.TABLE_CELL,
        blocks.BLOCKS.TABLE_HEADER_CELL
      ];
      exports2.VOID_BLOCKS = [blocks.BLOCKS.HR, blocks.BLOCKS.EMBEDDED_ENTRY, blocks.BLOCKS.EMBEDDED_ASSET];
      exports2.CONTAINERS = (_a2 = {}, _a2[blocks.BLOCKS.OL_LIST] = [blocks.BLOCKS.LIST_ITEM], _a2[blocks.BLOCKS.UL_LIST] = [blocks.BLOCKS.LIST_ITEM], _a2[blocks.BLOCKS.LIST_ITEM] = exports2.LIST_ITEM_BLOCKS, _a2[blocks.BLOCKS.QUOTE] = [blocks.BLOCKS.PARAGRAPH], _a2[blocks.BLOCKS.TABLE] = [blocks.BLOCKS.TABLE_ROW], _a2[blocks.BLOCKS.TABLE_ROW] = [blocks.BLOCKS.TABLE_CELL, blocks.BLOCKS.TABLE_HEADER_CELL], _a2[blocks.BLOCKS.TABLE_CELL] = [blocks.BLOCKS.PARAGRAPH], _a2[blocks.BLOCKS.TABLE_HEADER_CELL] = [blocks.BLOCKS.PARAGRAPH], _a2);
      exports2.HEADINGS = [
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6
      ];
      exports2.TEXT_CONTAINERS = __spreadArray([blocks.BLOCKS.PARAGRAPH], exports2.HEADINGS, true);
      exports2.V1_NODE_TYPES = [
        blocks.BLOCKS.DOCUMENT,
        blocks.BLOCKS.PARAGRAPH,
        blocks.BLOCKS.HEADING_1,
        blocks.BLOCKS.HEADING_2,
        blocks.BLOCKS.HEADING_3,
        blocks.BLOCKS.HEADING_4,
        blocks.BLOCKS.HEADING_5,
        blocks.BLOCKS.HEADING_6,
        blocks.BLOCKS.OL_LIST,
        blocks.BLOCKS.UL_LIST,
        blocks.BLOCKS.LIST_ITEM,
        blocks.BLOCKS.HR,
        blocks.BLOCKS.QUOTE,
        blocks.BLOCKS.EMBEDDED_ENTRY,
        blocks.BLOCKS.EMBEDDED_ASSET,
        inlines.INLINES.HYPERLINK,
        inlines.INLINES.ENTRY_HYPERLINK,
        inlines.INLINES.ASSET_HYPERLINK,
        inlines.INLINES.EMBEDDED_ENTRY,
        "text"
      ];
    });
    unwrapExports(schemaConstraints);
    var schemaConstraints_1 = schemaConstraints.V1_NODE_TYPES;
    var schemaConstraints_2 = schemaConstraints.TEXT_CONTAINERS;
    var schemaConstraints_3 = schemaConstraints.HEADINGS;
    var schemaConstraints_4 = schemaConstraints.CONTAINERS;
    var schemaConstraints_5 = schemaConstraints.VOID_BLOCKS;
    var schemaConstraints_6 = schemaConstraints.TABLE_BLOCKS;
    var schemaConstraints_7 = schemaConstraints.LIST_ITEM_BLOCKS;
    var schemaConstraints_8 = schemaConstraints.TOP_LEVEL_BLOCKS;
    var types = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
    unwrapExports(types);
    var nodeTypes = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
    });
    unwrapExports(nodeTypes);
    var emptyDocument = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      var EMPTY_DOCUMENT = {
        nodeType: blocks.BLOCKS.DOCUMENT,
        data: {},
        content: [
          {
            nodeType: blocks.BLOCKS.PARAGRAPH,
            data: {},
            content: [
              {
                nodeType: "text",
                value: "",
                marks: [],
                data: {}
              }
            ]
          }
        ]
      };
      exports2.default = EMPTY_DOCUMENT;
    });
    unwrapExports(emptyDocument);
    var helpers = createCommonjsModule(function(module2, exports2) {
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.isText = exports2.isBlock = exports2.isInline = void 0;
      function hasValue(obj, value) {
        for (var _i = 0, _a2 = Object.keys(obj); _i < _a2.length; _i++) {
          var key = _a2[_i];
          if (value === obj[key]) {
            return true;
          }
        }
        return false;
      }
      function isInline(node) {
        return hasValue(inlines.INLINES, node.nodeType);
      }
      exports2.isInline = isInline;
      function isBlock(node) {
        return hasValue(blocks.BLOCKS, node.nodeType);
      }
      exports2.isBlock = isBlock;
      function isText(node) {
        return node.nodeType === "text";
      }
      exports2.isText = isText;
    });
    unwrapExports(helpers);
    var helpers_1 = helpers.isText;
    var helpers_2 = helpers.isBlock;
    var helpers_3 = helpers.isInline;
    var dist = createCommonjsModule(function(module2, exports2) {
      var __createBinding = commonjsGlobal && commonjsGlobal.__createBinding || (Object.create ? function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() {
          return m[k];
        } });
      } : function(o, m, k, k2) {
        if (k2 === void 0)
          k2 = k;
        o[k2] = m[k];
      });
      var __setModuleDefault = commonjsGlobal && commonjsGlobal.__setModuleDefault || (Object.create ? function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      } : function(o, v) {
        o["default"] = v;
      });
      var __exportStar = commonjsGlobal && commonjsGlobal.__exportStar || function(m, exports3) {
        for (var p in m)
          if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports3, p))
            __createBinding(exports3, m, p);
      };
      var __importStar = commonjsGlobal && commonjsGlobal.__importStar || function(mod) {
        if (mod && mod.__esModule)
          return mod;
        var result = {};
        if (mod != null) {
          for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
              __createBinding(result, mod, k);
        }
        __setModuleDefault(result, mod);
        return result;
      };
      var __importDefault = commonjsGlobal && commonjsGlobal.__importDefault || function(mod) {
        return mod && mod.__esModule ? mod : { "default": mod };
      };
      Object.defineProperty(exports2, "__esModule", { value: true });
      exports2.helpers = exports2.EMPTY_DOCUMENT = exports2.MARKS = exports2.INLINES = exports2.BLOCKS = void 0;
      Object.defineProperty(exports2, "BLOCKS", { enumerable: true, get: function() {
        return blocks.BLOCKS;
      } });
      Object.defineProperty(exports2, "INLINES", { enumerable: true, get: function() {
        return inlines.INLINES;
      } });
      Object.defineProperty(exports2, "MARKS", { enumerable: true, get: function() {
        return __importDefault(marks).default;
      } });
      __exportStar(schemaConstraints, exports2);
      __exportStar(types, exports2);
      __exportStar(nodeTypes, exports2);
      Object.defineProperty(exports2, "EMPTY_DOCUMENT", { enumerable: true, get: function() {
        return __importDefault(emptyDocument).default;
      } });
      var helpers$1 = __importStar(helpers);
      exports2.helpers = helpers$1;
    });
    unwrapExports(dist);
    var dist_1 = dist.helpers;
    var dist_2 = dist.EMPTY_DOCUMENT;
    var dist_3 = dist.MARKS;
    var dist_4 = dist.INLINES;
    var dist_5 = dist.BLOCKS;
    function appendKeyToValidElement(element, key) {
      if (React24.isValidElement(element) && element.key === null) {
        return React24.cloneElement(element, { key });
      }
      return element;
    }
    function nodeListToReactComponents(nodes, options2) {
      return nodes.map(function(node, index) {
        return appendKeyToValidElement(nodeToReactComponent(node, options2), index);
      });
    }
    function nodeToReactComponent(node, options2) {
      var renderNode = options2.renderNode, renderMark = options2.renderMark, renderText = options2.renderText;
      if (dist_1.isText(node)) {
        return node.marks.reduce(function(value, mark) {
          if (!renderMark[mark.type]) {
            return value;
          }
          return renderMark[mark.type](value);
        }, renderText ? renderText(node.value) : node.value);
      } else {
        var children = nodeListToReactComponents(node.content, options2);
        if (!node.nodeType || !renderNode[node.nodeType]) {
          return React__default.createElement(React__default.Fragment, null, children);
        }
        return renderNode[node.nodeType](node, children);
      }
    }
    var _a;
    var _b;
    var defaultNodeRenderers = (_a = {}, _a[dist_5.DOCUMENT] = function(node, children) {
      return children;
    }, _a[dist_5.PARAGRAPH] = function(node, children) {
      return React__default.createElement("p", null, children);
    }, _a[dist_5.HEADING_1] = function(node, children) {
      return React__default.createElement("h1", null, children);
    }, _a[dist_5.HEADING_2] = function(node, children) {
      return React__default.createElement("h2", null, children);
    }, _a[dist_5.HEADING_3] = function(node, children) {
      return React__default.createElement("h3", null, children);
    }, _a[dist_5.HEADING_4] = function(node, children) {
      return React__default.createElement("h4", null, children);
    }, _a[dist_5.HEADING_5] = function(node, children) {
      return React__default.createElement("h5", null, children);
    }, _a[dist_5.HEADING_6] = function(node, children) {
      return React__default.createElement("h6", null, children);
    }, _a[dist_5.EMBEDDED_ENTRY] = function(node, children) {
      return React__default.createElement("div", null, children);
    }, _a[dist_5.UL_LIST] = function(node, children) {
      return React__default.createElement("ul", null, children);
    }, _a[dist_5.OL_LIST] = function(node, children) {
      return React__default.createElement("ol", null, children);
    }, _a[dist_5.LIST_ITEM] = function(node, children) {
      return React__default.createElement("li", null, children);
    }, _a[dist_5.QUOTE] = function(node, children) {
      return React__default.createElement("blockquote", null, children);
    }, _a[dist_5.HR] = function() {
      return React__default.createElement("hr", null);
    }, _a[dist_5.TABLE] = function(node, children) {
      return React__default.createElement("table", null, React__default.createElement("tbody", null, children));
    }, _a[dist_5.TABLE_ROW] = function(node, children) {
      return React__default.createElement("tr", null, children);
    }, _a[dist_5.TABLE_HEADER_CELL] = function(node, children) {
      return React__default.createElement("th", null, children);
    }, _a[dist_5.TABLE_CELL] = function(node, children) {
      return React__default.createElement("td", null, children);
    }, _a[dist_4.ASSET_HYPERLINK] = function(node) {
      return defaultInline(dist_4.ASSET_HYPERLINK, node);
    }, _a[dist_4.ENTRY_HYPERLINK] = function(node) {
      return defaultInline(dist_4.ENTRY_HYPERLINK, node);
    }, _a[dist_4.EMBEDDED_ENTRY] = function(node) {
      return defaultInline(dist_4.EMBEDDED_ENTRY, node);
    }, _a[dist_4.HYPERLINK] = function(node, children) {
      return React__default.createElement("a", { href: node.data.uri }, children);
    }, _a);
    var defaultMarkRenderers = (_b = {}, _b[dist_3.BOLD] = function(text) {
      return React__default.createElement("b", null, text);
    }, _b[dist_3.ITALIC] = function(text) {
      return React__default.createElement("i", null, text);
    }, _b[dist_3.UNDERLINE] = function(text) {
      return React__default.createElement("u", null, text);
    }, _b[dist_3.CODE] = function(text) {
      return React__default.createElement("code", null, text);
    }, _b);
    function defaultInline(type, node) {
      return React__default.createElement("span", { key: node.data.target.sys.id }, "type: ", node.nodeType, " id: ", node.data.target.sys.id);
    }
    function documentToReactComponents3(richTextDocument, options2) {
      if (options2 === void 0) {
        options2 = {};
      }
      if (!richTextDocument) {
        return null;
      }
      return nodeToReactComponent(richTextDocument, {
        renderNode: __assign(__assign({}, defaultNodeRenderers), options2.renderNode),
        renderMark: __assign(__assign({}, defaultMarkRenderers), options2.renderMark),
        renderText: options2.renderText
      });
    }
    exports.documentToReactComponents = documentToReactComponents3;
  }
});

// node_modules/@contentful/rich-text-types/dist/blocks.js
var require_blocks = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/blocks.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BLOCKS = void 0;
    var BLOCKS3;
    (function(BLOCKS4) {
      BLOCKS4["DOCUMENT"] = "document";
      BLOCKS4["PARAGRAPH"] = "paragraph";
      BLOCKS4["HEADING_1"] = "heading-1";
      BLOCKS4["HEADING_2"] = "heading-2";
      BLOCKS4["HEADING_3"] = "heading-3";
      BLOCKS4["HEADING_4"] = "heading-4";
      BLOCKS4["HEADING_5"] = "heading-5";
      BLOCKS4["HEADING_6"] = "heading-6";
      BLOCKS4["OL_LIST"] = "ordered-list";
      BLOCKS4["UL_LIST"] = "unordered-list";
      BLOCKS4["LIST_ITEM"] = "list-item";
      BLOCKS4["HR"] = "hr";
      BLOCKS4["QUOTE"] = "blockquote";
      BLOCKS4["EMBEDDED_ENTRY"] = "embedded-entry-block";
      BLOCKS4["EMBEDDED_ASSET"] = "embedded-asset-block";
      BLOCKS4["TABLE"] = "table";
      BLOCKS4["TABLE_ROW"] = "table-row";
      BLOCKS4["TABLE_CELL"] = "table-cell";
      BLOCKS4["TABLE_HEADER_CELL"] = "table-header-cell";
    })(BLOCKS3 = exports.BLOCKS || (exports.BLOCKS = {}));
  }
});

// node_modules/@contentful/rich-text-types/dist/inlines.js
var require_inlines = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/inlines.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.INLINES = void 0;
    var INLINES3;
    (function(INLINES4) {
      INLINES4["HYPERLINK"] = "hyperlink";
      INLINES4["ENTRY_HYPERLINK"] = "entry-hyperlink";
      INLINES4["ASSET_HYPERLINK"] = "asset-hyperlink";
      INLINES4["EMBEDDED_ENTRY"] = "embedded-entry-inline";
    })(INLINES3 = exports.INLINES || (exports.INLINES = {}));
  }
});

// node_modules/@contentful/rich-text-types/dist/marks.js
var require_marks = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/marks.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var MARKS3;
    (function(MARKS4) {
      MARKS4["BOLD"] = "bold";
      MARKS4["ITALIC"] = "italic";
      MARKS4["UNDERLINE"] = "underline";
      MARKS4["CODE"] = "code";
    })(MARKS3 || (MARKS3 = {}));
    exports.default = MARKS3;
  }
});

// node_modules/@contentful/rich-text-types/dist/schemaConstraints.js
var require_schemaConstraints = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/schemaConstraints.js"(exports) {
    init_react();
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    var _a;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.V1_NODE_TYPES = exports.TEXT_CONTAINERS = exports.HEADINGS = exports.CONTAINERS = exports.VOID_BLOCKS = exports.TABLE_BLOCKS = exports.LIST_ITEM_BLOCKS = exports.TOP_LEVEL_BLOCKS = void 0;
    var blocks_1 = require_blocks();
    var inlines_1 = require_inlines();
    exports.TOP_LEVEL_BLOCKS = [
      blocks_1.BLOCKS.PARAGRAPH,
      blocks_1.BLOCKS.HEADING_1,
      blocks_1.BLOCKS.HEADING_2,
      blocks_1.BLOCKS.HEADING_3,
      blocks_1.BLOCKS.HEADING_4,
      blocks_1.BLOCKS.HEADING_5,
      blocks_1.BLOCKS.HEADING_6,
      blocks_1.BLOCKS.OL_LIST,
      blocks_1.BLOCKS.UL_LIST,
      blocks_1.BLOCKS.HR,
      blocks_1.BLOCKS.QUOTE,
      blocks_1.BLOCKS.EMBEDDED_ENTRY,
      blocks_1.BLOCKS.EMBEDDED_ASSET,
      blocks_1.BLOCKS.TABLE
    ];
    exports.LIST_ITEM_BLOCKS = [
      blocks_1.BLOCKS.PARAGRAPH,
      blocks_1.BLOCKS.HEADING_1,
      blocks_1.BLOCKS.HEADING_2,
      blocks_1.BLOCKS.HEADING_3,
      blocks_1.BLOCKS.HEADING_4,
      blocks_1.BLOCKS.HEADING_5,
      blocks_1.BLOCKS.HEADING_6,
      blocks_1.BLOCKS.OL_LIST,
      blocks_1.BLOCKS.UL_LIST,
      blocks_1.BLOCKS.HR,
      blocks_1.BLOCKS.QUOTE,
      blocks_1.BLOCKS.EMBEDDED_ENTRY,
      blocks_1.BLOCKS.EMBEDDED_ASSET
    ];
    exports.TABLE_BLOCKS = [
      blocks_1.BLOCKS.TABLE,
      blocks_1.BLOCKS.TABLE_ROW,
      blocks_1.BLOCKS.TABLE_CELL,
      blocks_1.BLOCKS.TABLE_HEADER_CELL
    ];
    exports.VOID_BLOCKS = [blocks_1.BLOCKS.HR, blocks_1.BLOCKS.EMBEDDED_ENTRY, blocks_1.BLOCKS.EMBEDDED_ASSET];
    exports.CONTAINERS = (_a = {}, _a[blocks_1.BLOCKS.OL_LIST] = [blocks_1.BLOCKS.LIST_ITEM], _a[blocks_1.BLOCKS.UL_LIST] = [blocks_1.BLOCKS.LIST_ITEM], _a[blocks_1.BLOCKS.LIST_ITEM] = exports.LIST_ITEM_BLOCKS, _a[blocks_1.BLOCKS.QUOTE] = [blocks_1.BLOCKS.PARAGRAPH], _a[blocks_1.BLOCKS.TABLE] = [blocks_1.BLOCKS.TABLE_ROW], _a[blocks_1.BLOCKS.TABLE_ROW] = [blocks_1.BLOCKS.TABLE_CELL, blocks_1.BLOCKS.TABLE_HEADER_CELL], _a[blocks_1.BLOCKS.TABLE_CELL] = [blocks_1.BLOCKS.PARAGRAPH], _a[blocks_1.BLOCKS.TABLE_HEADER_CELL] = [blocks_1.BLOCKS.PARAGRAPH], _a);
    exports.HEADINGS = [
      blocks_1.BLOCKS.HEADING_1,
      blocks_1.BLOCKS.HEADING_2,
      blocks_1.BLOCKS.HEADING_3,
      blocks_1.BLOCKS.HEADING_4,
      blocks_1.BLOCKS.HEADING_5,
      blocks_1.BLOCKS.HEADING_6
    ];
    exports.TEXT_CONTAINERS = __spreadArray([blocks_1.BLOCKS.PARAGRAPH], exports.HEADINGS, true);
    exports.V1_NODE_TYPES = [
      blocks_1.BLOCKS.DOCUMENT,
      blocks_1.BLOCKS.PARAGRAPH,
      blocks_1.BLOCKS.HEADING_1,
      blocks_1.BLOCKS.HEADING_2,
      blocks_1.BLOCKS.HEADING_3,
      blocks_1.BLOCKS.HEADING_4,
      blocks_1.BLOCKS.HEADING_5,
      blocks_1.BLOCKS.HEADING_6,
      blocks_1.BLOCKS.OL_LIST,
      blocks_1.BLOCKS.UL_LIST,
      blocks_1.BLOCKS.LIST_ITEM,
      blocks_1.BLOCKS.HR,
      blocks_1.BLOCKS.QUOTE,
      blocks_1.BLOCKS.EMBEDDED_ENTRY,
      blocks_1.BLOCKS.EMBEDDED_ASSET,
      inlines_1.INLINES.HYPERLINK,
      inlines_1.INLINES.ENTRY_HYPERLINK,
      inlines_1.INLINES.ASSET_HYPERLINK,
      inlines_1.INLINES.EMBEDDED_ENTRY,
      "text"
    ];
  }
});

// node_modules/@contentful/rich-text-types/dist/types.js
var require_types = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/types.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@contentful/rich-text-types/dist/nodeTypes.js
var require_nodeTypes = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/nodeTypes.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/@contentful/rich-text-types/dist/emptyDocument.js
var require_emptyDocument = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/emptyDocument.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var blocks_1 = require_blocks();
    var EMPTY_DOCUMENT = {
      nodeType: blocks_1.BLOCKS.DOCUMENT,
      data: {},
      content: [
        {
          nodeType: blocks_1.BLOCKS.PARAGRAPH,
          data: {},
          content: [
            {
              nodeType: "text",
              value: "",
              marks: [],
              data: {}
            }
          ]
        }
      ]
    };
    exports.default = EMPTY_DOCUMENT;
  }
});

// node_modules/@contentful/rich-text-types/dist/helpers.js
var require_helpers = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/helpers.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isText = exports.isBlock = exports.isInline = void 0;
    var blocks_1 = require_blocks();
    var inlines_1 = require_inlines();
    function hasValue(obj, value) {
      for (var _i = 0, _a = Object.keys(obj); _i < _a.length; _i++) {
        var key = _a[_i];
        if (value === obj[key]) {
          return true;
        }
      }
      return false;
    }
    function isInline(node) {
      return hasValue(inlines_1.INLINES, node.nodeType);
    }
    exports.isInline = isInline;
    function isBlock(node) {
      return hasValue(blocks_1.BLOCKS, node.nodeType);
    }
    exports.isBlock = isBlock;
    function isText(node) {
      return node.nodeType === "text";
    }
    exports.isText = isText;
  }
});

// node_modules/@contentful/rich-text-types/dist/index.js
var require_dist = __commonJS({
  "node_modules/@contentful/rich-text-types/dist/index.js"(exports) {
    init_react();
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.helpers = exports.EMPTY_DOCUMENT = exports.MARKS = exports.INLINES = exports.BLOCKS = void 0;
    var blocks_1 = require_blocks();
    Object.defineProperty(exports, "BLOCKS", { enumerable: true, get: function() {
      return blocks_1.BLOCKS;
    } });
    var inlines_1 = require_inlines();
    Object.defineProperty(exports, "INLINES", { enumerable: true, get: function() {
      return inlines_1.INLINES;
    } });
    var marks_1 = require_marks();
    Object.defineProperty(exports, "MARKS", { enumerable: true, get: function() {
      return __importDefault(marks_1).default;
    } });
    __exportStar(require_schemaConstraints(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_nodeTypes(), exports);
    var emptyDocument_1 = require_emptyDocument();
    Object.defineProperty(exports, "EMPTY_DOCUMENT", { enumerable: true, get: function() {
      return __importDefault(emptyDocument_1).default;
    } });
    var helpers = __importStar(require_helpers());
    exports.helpers = helpers;
  }
});

// browser-route-module:/Users/flo/Development/Devato/app/routes/blog/$slug.tsx?browser
init_react();

// app/routes/blog/$slug.tsx
init_react();
var React23 = __toModule(require_react());
var import_rich_text_react_renderer2 = __toModule(require_rich_text_react_renderer_es5());

// app/contentful/defaultRichTextMarkdown.tsx
init_react();
var import_react3 = __toModule(require_react());
var import_rich_text_types2 = __toModule(require_dist());

// app/components/Contentful/EntryHyperLink/EntryHyperLink.tsx
init_react();
var React2 = __toModule(require_react());
var EntryHyperLink = (props) => {
  const otherPostSlug = props.node.data.target.fields.blogPostSlug;
  return /* @__PURE__ */ React2.createElement("a", {
    className: "BlogPost__EntryHyperLink text-post-hyperlink underlined hover:text-post-hyperlinkHover italic",
    href: `/blog/${otherPostSlug}`
  }, props.children);
};
var EntryHyperLink_default = EntryHyperLink;

// app/components/Contentful/HyperLink/HyperLink.tsx
init_react();
var React3 = __toModule(require_react());
var HyperLink = (props) => {
  const { theme: theme4 } = useTheme();
  return /* @__PURE__ */ React3.createElement("a", {
    href: props.url,
    className: `BlogPost__HyperLink font-medium ${theme4 === SupportedTheme.LIGHT ? "text-blue-500 hover:text-black" : "text-cyan-400 hover:text-white"} ease-in duration-100`
  }, props.children);
};
var HyperLink_default = HyperLink;

// app/components/Contentful/BlockQuote/BlockQuote.tsx
init_react();
var React4 = __toModule(require_react());

// app/components/Contentful/BlockQuote/BlockQuote.css
var BlockQuote_default = "/build/_assets/BlockQuote-TSCC4MNG.css";

// app/components/Contentful/BlockQuote/BlockQuote.tsx
var links = () => {
  return [{ rel: "stylesheet", href: BlockQuote_default }];
};
var BlockQuote = (props) => {
  return /* @__PURE__ */ React4.createElement("blockquote", {
    className: "BlogPostBlockQuote__Container p-8 mt-8 mb-12 mx-0 border-t-[1px] border-t-gray-300 flex flex-col"
  }, /* @__PURE__ */ React4.createElement("p", {
    className: "BlogPostBlockQuote__Description font-medium m-auto flex items-center justify-center text-post-quote w-2/3"
  }, props.quoteData.quoteDescription), /* @__PURE__ */ React4.createElement("p", {
    className: "BlogPostBlockQuote__Author italic text-xl text-post-quoteAuthor text-right mt-5"
  }, props.quoteData.author));
};
var BlockQuote_default2 = BlockQuote;

// app/components/Contentful/ImageMedia/ImageMedia.tsx
init_react();
var React5 = __toModule(require_react());

// app/components/Contentful/ImageMedia/ImageMedia.css
var ImageMedia_default = "/build/_assets/ImageMedia-OZ3ERPQM.css";

// app/components/Contentful/ImageMedia/ImageMedia.tsx
var links2 = () => {
  return [{ rel: "stylesheet", href: ImageMedia_default }];
};
var ImageMedia = (props) => {
  return /* @__PURE__ */ React5.createElement("div", {
    className: "BlogPost__ImageMedia__Container"
  }, /* @__PURE__ */ React5.createElement("img", {
    src: "https:" + props.src,
    alt: props.alt,
    title: props.alt,
    className: "BlogPost__ImageMedia m-auto flex",
    loading: "lazy"
  }), props.description !== void 0 && /* @__PURE__ */ React5.createElement("em", {
    className: "BlogPost__ImageMedia__Description mx-8 my-2 italic flex text-center items-center justify-center text-base"
  }, props.description));
};
var ImageMedia_default2 = ImageMedia;

// app/components/Contentful/CodeBlock/CodeBlock.tsx
init_react();
var React6 = __toModule(require_react());

// app/components/Contentful/CodeBlock/CodeBlock.css
var CodeBlock_default = "/build/_assets/CodeBlock-BXX6PS7Q.css";

// node_modules/prism-react-renderer/dist/index.js
init_react();

// node_modules/prism-react-renderer/prism/index.js
init_react();
var Prism = function() {
  var lang = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i;
  var uniqueId = 0;
  var plainTextGrammar = {};
  var _ = {
    util: {
      encode: function encode(tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, encode(tokens.content), tokens.alias);
        } else if (Array.isArray(tokens)) {
          return tokens.map(encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function(o) {
        return Object.prototype.toString.call(o).slice(8, -1);
      },
      objId: function(obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", { value: ++uniqueId });
        }
        return obj["__id"];
      },
      clone: function deepClone(o, visited) {
        visited = visited || {};
        var clone;
        var id;
        switch (_.util.type(o)) {
          case "Object":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = {};
            visited[id] = clone;
            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = deepClone(o[key], visited);
              }
            }
            return clone;
          case "Array":
            id = _.util.objId(o);
            if (visited[id]) {
              return visited[id];
            }
            clone = [];
            visited[id] = clone;
            o.forEach(function(v, i) {
              clone[i] = deepClone(v, visited);
            });
            return clone;
          default:
            return o;
        }
      },
      getLanguage: function(element) {
        while (element) {
          var m = lang.exec(element.className);
          if (m) {
            return m[1].toLowerCase();
          }
          element = element.parentElement;
        }
        return "none";
      },
      setLanguage: function(element, language) {
        element.className = element.className.replace(RegExp(lang, "gi"), "");
        element.classList.add("language-" + language);
      },
      isActive: function(element, className, defaultActivation) {
        var no = "no-" + className;
        while (element) {
          var classList = element.classList;
          if (classList.contains(className)) {
            return true;
          }
          if (classList.contains(no)) {
            return false;
          }
          element = element.parentElement;
        }
        return !!defaultActivation;
      }
    },
    languages: {
      plain: plainTextGrammar,
      plaintext: plainTextGrammar,
      text: plainTextGrammar,
      txt: plainTextGrammar,
      extend: function(id, redef) {
        var lang2 = _.util.clone(_.languages[id]);
        for (var key in redef) {
          lang2[key] = redef[key];
        }
        return lang2;
      },
      insertBefore: function(inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];
        var ret = {};
        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }
            if (!insert.hasOwnProperty(token)) {
              ret[token] = grammar[token];
            }
          }
        }
        var old = root[inside];
        root[inside] = ret;
        _.languages.DFS(_.languages, function(key, value) {
          if (value === old && key != inside) {
            this[key] = ret;
          }
        });
        return ret;
      },
      DFS: function DFS(o, callback, type, visited) {
        visited = visited || {};
        var objId = _.util.objId;
        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);
            var property = o[i];
            var propertyType = _.util.type(property);
            if (propertyType === "Object" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, null, visited);
            } else if (propertyType === "Array" && !visited[objId(property)]) {
              visited[objId(property)] = true;
              DFS(property, callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function(text, grammar, language) {
      var env = {
        code: text,
        grammar,
        language
      };
      _.hooks.run("before-tokenize", env);
      env.tokens = _.tokenize(env.code, env.grammar);
      _.hooks.run("after-tokenize", env);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    tokenize: function(text, grammar) {
      var rest = grammar.rest;
      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }
        delete grammar.rest;
      }
      var tokenList = new LinkedList();
      addAfter(tokenList, tokenList.head, text);
      matchGrammar(text, tokenList, grammar, tokenList.head, 0);
      return toArray(tokenList);
    },
    hooks: {
      all: {},
      add: function(name, callback) {
        var hooks = _.hooks.all;
        hooks[name] = hooks[name] || [];
        hooks[name].push(callback);
      },
      run: function(name, env) {
        var callbacks = _.hooks.all[name];
        if (!callbacks || !callbacks.length) {
          return;
        }
        for (var i = 0, callback; callback = callbacks[i++]; ) {
          callback(env);
        }
      }
    },
    Token
  };
  function Token(type, content, alias, matchedStr) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = (matchedStr || "").length | 0;
  }
  Token.stringify = function stringify(o, language) {
    if (typeof o == "string") {
      return o;
    }
    if (Array.isArray(o)) {
      var s = "";
      o.forEach(function(e) {
        s += stringify(e, language);
      });
      return s;
    }
    var env = {
      type: o.type,
      content: stringify(o.content, language),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language
    };
    var aliases = o.alias;
    if (aliases) {
      if (Array.isArray(aliases)) {
        Array.prototype.push.apply(env.classes, aliases);
      } else {
        env.classes.push(aliases);
      }
    }
    _.hooks.run("wrap", env);
    var attributes = "";
    for (var name in env.attributes) {
      attributes += " " + name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + attributes + ">" + env.content + "</" + env.tag + ">";
  };
  function matchPattern(pattern, pos, text, lookbehind) {
    pattern.lastIndex = pos;
    var match = pattern.exec(text);
    if (match && lookbehind && match[1]) {
      var lookbehindLength = match[1].length;
      match.index += lookbehindLength;
      match[0] = match[0].slice(lookbehindLength);
    }
    return match;
  }
  function matchGrammar(text, tokenList, grammar, startNode, startPos, rematch) {
    for (var token in grammar) {
      if (!grammar.hasOwnProperty(token) || !grammar[token]) {
        continue;
      }
      var patterns = grammar[token];
      patterns = Array.isArray(patterns) ? patterns : [patterns];
      for (var j = 0; j < patterns.length; ++j) {
        if (rematch && rematch.cause == token + "," + j) {
          return;
        }
        var patternObj = patterns[j];
        var inside = patternObj.inside;
        var lookbehind = !!patternObj.lookbehind;
        var greedy = !!patternObj.greedy;
        var alias = patternObj.alias;
        if (greedy && !patternObj.pattern.global) {
          var flags = patternObj.pattern.toString().match(/[imsuy]*$/)[0];
          patternObj.pattern = RegExp(patternObj.pattern.source, flags + "g");
        }
        var pattern = patternObj.pattern || patternObj;
        for (var currentNode = startNode.next, pos = startPos; currentNode !== tokenList.tail; pos += currentNode.value.length, currentNode = currentNode.next) {
          if (rematch && pos >= rematch.reach) {
            break;
          }
          var str = currentNode.value;
          if (tokenList.length > text.length) {
            return;
          }
          if (str instanceof Token) {
            continue;
          }
          var removeCount = 1;
          var match;
          if (greedy) {
            match = matchPattern(pattern, pos, text, lookbehind);
            if (!match || match.index >= text.length) {
              break;
            }
            var from = match.index;
            var to = match.index + match[0].length;
            var p = pos;
            p += currentNode.value.length;
            while (from >= p) {
              currentNode = currentNode.next;
              p += currentNode.value.length;
            }
            p -= currentNode.value.length;
            pos = p;
            if (currentNode.value instanceof Token) {
              continue;
            }
            for (var k = currentNode; k !== tokenList.tail && (p < to || typeof k.value === "string"); k = k.next) {
              removeCount++;
              p += k.value.length;
            }
            removeCount--;
            str = text.slice(pos, p);
            match.index -= pos;
          } else {
            match = matchPattern(pattern, 0, str, lookbehind);
            if (!match) {
              continue;
            }
          }
          var from = match.index;
          var matchStr = match[0];
          var before = str.slice(0, from);
          var after = str.slice(from + matchStr.length);
          var reach = pos + str.length;
          if (rematch && reach > rematch.reach) {
            rematch.reach = reach;
          }
          var removeFrom = currentNode.prev;
          if (before) {
            removeFrom = addAfter(tokenList, removeFrom, before);
            pos += before.length;
          }
          removeRange(tokenList, removeFrom, removeCount);
          var wrapped = new Token(token, inside ? _.tokenize(matchStr, inside) : matchStr, alias, matchStr);
          currentNode = addAfter(tokenList, removeFrom, wrapped);
          if (after) {
            addAfter(tokenList, currentNode, after);
          }
          if (removeCount > 1) {
            var nestedRematch = {
              cause: token + "," + j,
              reach
            };
            matchGrammar(text, tokenList, grammar, currentNode.prev, pos, nestedRematch);
            if (rematch && nestedRematch.reach > rematch.reach) {
              rematch.reach = nestedRematch.reach;
            }
          }
        }
      }
    }
  }
  function LinkedList() {
    var head = { value: null, prev: null, next: null };
    var tail = { value: null, prev: head, next: null };
    head.next = tail;
    this.head = head;
    this.tail = tail;
    this.length = 0;
  }
  function addAfter(list, node, value) {
    var next = node.next;
    var newNode = { value, prev: node, next };
    node.next = newNode;
    next.prev = newNode;
    list.length++;
    return newNode;
  }
  function removeRange(list, node, count) {
    var next = node.next;
    for (var i = 0; i < count && next !== list.tail; i++) {
      next = next.next;
    }
    node.next = next;
    next.prev = node;
    list.length -= i;
  }
  function toArray(list) {
    var array = [];
    var node = list.head.next;
    while (node !== list.tail) {
      array.push(node.value);
      node = node.next;
    }
    return array;
  }
  return _;
}();
var prism = Prism;
Prism.default = Prism;
prism.languages.markup = {
  "comment": {
    pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
    greedy: true
  },
  "prolog": {
    pattern: /<\?[\s\S]+?\?>/,
    greedy: true
  },
  "doctype": {
    pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
    greedy: true,
    inside: {
      "internal-subset": {
        pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
        lookbehind: true,
        greedy: true,
        inside: null
      },
      "string": {
        pattern: /"[^"]*"|'[^']*'/,
        greedy: true
      },
      "punctuation": /^<!|>$|[[\]]/,
      "doctype-tag": /^DOCTYPE/i,
      "name": /[^\s<>'"]+/
    }
  },
  "cdata": {
    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
    greedy: true
  },
  "tag": {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
    greedy: true,
    inside: {
      "tag": {
        pattern: /^<\/?[^\s>\/]+/,
        inside: {
          "punctuation": /^<\/?/,
          "namespace": /^[^\s>\/:]+:/
        }
      },
      "special-attr": [],
      "attr-value": {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
        inside: {
          "punctuation": [{
            pattern: /^=/,
            alias: "attr-equals"
          }, /"|'/]
        }
      },
      "punctuation": /\/?>/,
      "attr-name": {
        pattern: /[^\s>\/]+/,
        inside: {
          "namespace": /^[^\s>\/:]+:/
        }
      }
    }
  },
  "entity": [{
    pattern: /&[\da-z]{1,8};/i,
    alias: "named-entity"
  }, /&#x?[\da-f]{1,8};/i]
};
prism.languages.markup["tag"].inside["attr-value"].inside["entity"] = prism.languages.markup["entity"];
prism.languages.markup["doctype"].inside["internal-subset"].inside = prism.languages.markup;
prism.hooks.add("wrap", function(env) {
  if (env.type === "entity") {
    env.attributes["title"] = env.content.replace(/&amp;/, "&");
  }
});
Object.defineProperty(prism.languages.markup.tag, "addInlined", {
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside["language-" + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: prism.languages[lang]
    };
    includedCdataInside["cdata"] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      "included-cdata": {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside["language-" + lang] = {
      pattern: /[\s\S]+/,
      inside: prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function() {
        return tagName;
      }), "i"),
      lookbehind: true,
      greedy: true,
      inside
    };
    prism.languages.insertBefore("markup", "cdata", def);
  }
});
Object.defineProperty(prism.languages.markup.tag, "addAttribute", {
  value: function(attrName, lang) {
    prism.languages.markup.tag.inside["special-attr"].push({
      pattern: RegExp(/(^|["'\s])/.source + "(?:" + attrName + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
      lookbehind: true,
      inside: {
        "attr-name": /^[^\s=]+/,
        "attr-value": {
          pattern: /=[\s\S]+/,
          inside: {
            "value": {
              pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
              lookbehind: true,
              alias: [lang, "language-" + lang],
              inside: prism.languages[lang]
            },
            "punctuation": [{
              pattern: /^=/,
              alias: "attr-equals"
            }, /"|'/]
          }
        }
      }
    });
  }
});
prism.languages.html = prism.languages.markup;
prism.languages.mathml = prism.languages.markup;
prism.languages.svg = prism.languages.markup;
prism.languages.xml = prism.languages.extend("markup", {});
prism.languages.ssml = prism.languages.xml;
prism.languages.atom = prism.languages.xml;
prism.languages.rss = prism.languages.xml;
(function(Prism2) {
  var envVars = "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b";
  var commandAfterHeredoc = {
    pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
    lookbehind: true,
    alias: "punctuation",
    inside: null
  };
  var insideString = {
    "bash": commandAfterHeredoc,
    "environment": {
      pattern: RegExp("\\$" + envVars),
      alias: "constant"
    },
    "variable": [
      {
        pattern: /\$?\(\([\s\S]+?\)\)/,
        greedy: true,
        inside: {
          "variable": [{
            pattern: /(^\$\(\([\s\S]+)\)\)/,
            lookbehind: true
          }, /^\$\(\(/],
          "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
          "operator": /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
          "punctuation": /\(\(?|\)\)?|,|;/
        }
      },
      {
        pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
        greedy: true,
        inside: {
          "variable": /^\$\(|^`|\)$|`$/
        }
      },
      {
        pattern: /\$\{[^}]+\}/,
        greedy: true,
        inside: {
          "operator": /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
          "punctuation": /[\[\]]/,
          "environment": {
            pattern: RegExp("(\\{)" + envVars),
            lookbehind: true,
            alias: "constant"
          }
        }
      },
      /\$(?:\w+|[#?*!@$])/
    ],
    "entity": /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/
  };
  Prism2.languages.bash = {
    "shebang": {
      pattern: /^#!\s*\/.*/,
      alias: "important"
    },
    "comment": {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    "function-name": [
      {
        pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
        lookbehind: true,
        alias: "function"
      },
      {
        pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/,
        alias: "function"
      }
    ],
    "for-or-select": {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: "variable",
      lookbehind: true
    },
    "assign-left": {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        "environment": {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: "constant"
        }
      },
      alias: "variable",
      lookbehind: true
    },
    "string": [
      {
        pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
        lookbehind: true,
        greedy: true,
        inside: {
          "bash": commandAfterHeredoc
        }
      },
      {
        pattern: /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
        lookbehind: true,
        greedy: true,
        inside: insideString
      },
      {
        pattern: /(^|[^$\\])'[^']*'/,
        lookbehind: true,
        greedy: true
      },
      {
        pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
        greedy: true,
        inside: {
          "entity": insideString.entity
        }
      }
    ],
    "environment": {
      pattern: RegExp("\\$?" + envVars),
      alias: "constant"
    },
    "variable": insideString.variable,
    "function": {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "keyword": {
      pattern: /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "builtin": {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
      lookbehind: true,
      alias: "class-name"
    },
    "boolean": {
      pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    "file-descriptor": {
      pattern: /\B&\d\b/,
      alias: "important"
    },
    "operator": {
      pattern: /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
      inside: {
        "file-descriptor": {
          pattern: /^\d/,
          alias: "important"
        }
      }
    },
    "punctuation": /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    "number": {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  commandAfterHeredoc.inside = Prism2.languages.bash;
  var toBeCopied = ["comment", "function-name", "for-or-select", "assign-left", "string", "environment", "function", "keyword", "builtin", "boolean", "file-descriptor", "operator", "punctuation", "number"];
  var inside = insideString.variable[1].inside;
  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism2.languages.bash[toBeCopied[i]];
  }
  Prism2.languages.shell = Prism2.languages.bash;
})(prism);
prism.languages.clike = {
  "comment": [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true,
    greedy: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
    lookbehind: true,
    inside: {
      "punctuation": /[.\\]/
    }
  },
  "keyword": /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
  "boolean": /\b(?:false|true)\b/,
  "function": /\b\w+(?=\()/,
  "number": /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
  "operator": /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.c = prism.languages.extend("clike", {
  "comment": {
    pattern: /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "class-name": {
    pattern: /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
    lookbehind: true
  },
  "keyword": /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
  "function": /\b[a-z_]\w*(?=\s*\()/i,
  "number": /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
  "operator": />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/
});
prism.languages.insertBefore("c", "string", {
  "char": {
    pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
    greedy: true
  }
});
prism.languages.insertBefore("c", "string", {
  "macro": {
    pattern: /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    greedy: true,
    alias: "property",
    inside: {
      "string": [{
        pattern: /^(#\s*include\s*)<[^>]+>/,
        lookbehind: true
      }, prism.languages.c["string"]],
      "char": prism.languages.c["char"],
      "comment": prism.languages.c["comment"],
      "macro-name": [{
        pattern: /(^#\s*define\s+)\w+\b(?!\()/i,
        lookbehind: true
      }, {
        pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
        lookbehind: true,
        alias: "function"
      }],
      "directive": {
        pattern: /^(#\s*)[a-z]+/,
        lookbehind: true,
        alias: "keyword"
      },
      "directive-hash": /^#/,
      "punctuation": /##|\\(?=[\r\n])/,
      "expression": {
        pattern: /\S[\s\S]*/,
        inside: prism.languages.c
      }
    }
  }
});
prism.languages.insertBefore("c", "function", {
  "constant": /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/
});
delete prism.languages.c["boolean"];
(function(Prism2) {
  var keyword = /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
  var modName = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(/<keyword>/g, function() {
    return keyword.source;
  });
  Prism2.languages.cpp = Prism2.languages.extend("c", {
    "class-name": [
      {
        pattern: RegExp(/(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(/<keyword>/g, function() {
          return keyword.source;
        })),
        lookbehind: true
      },
      /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
      /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
      /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/
    ],
    "keyword": keyword,
    "number": {
      pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
      greedy: true
    },
    "operator": />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
    "boolean": /\b(?:false|true)\b/
  });
  Prism2.languages.insertBefore("cpp", "string", {
    "module": {
      pattern: RegExp(/(\b(?:import|module)\s+)/.source + "(?:" + /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source + "|" + /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(/<mod-name>/g, function() {
        return modName;
      }) + ")"),
      lookbehind: true,
      greedy: true,
      inside: {
        "string": /^[<"][\s\S]+/,
        "operator": /:/,
        "punctuation": /\./
      }
    },
    "raw-string": {
      pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
      alias: "string",
      greedy: true
    }
  });
  Prism2.languages.insertBefore("cpp", "keyword", {
    "generic-function": {
      pattern: /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
      inside: {
        "function": /^\w+/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: Prism2.languages.cpp
        }
      }
    }
  });
  Prism2.languages.insertBefore("cpp", "operator", {
    "double-colon": {
      pattern: /::/,
      alias: "punctuation"
    }
  });
  Prism2.languages.insertBefore("cpp", "class-name", {
    "base-clause": {
      pattern: /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
      lookbehind: true,
      greedy: true,
      inside: Prism2.languages.extend("cpp", {})
    }
  });
  Prism2.languages.insertBefore("inside", "double-colon", {
    "class-name": /\b[a-z_]\w*\b(?!\s*::)/i
  }, Prism2.languages.cpp["base-clause"]);
})(prism);
(function(Prism2) {
  var string = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
  Prism2.languages.css = {
    "comment": /\/\*[\s\S]*?\*\//,
    "atrule": {
      pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
      inside: {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      }
    },
    "url": {
      pattern: RegExp("\\burl\\((?:" + string.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
      greedy: true,
      inside: {
        "function": /^url/i,
        "punctuation": /^\(|\)$/,
        "string": {
          pattern: RegExp("^" + string.source + "$"),
          alias: "url"
        }
      }
    },
    "selector": {
      pattern: RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|` + string.source + ")*(?=\\s*\\{)"),
      lookbehind: true
    },
    "string": {
      pattern: string,
      greedy: true
    },
    "property": {
      pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
      lookbehind: true
    },
    "important": /!important\b/i,
    "function": {
      pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
      lookbehind: true
    },
    "punctuation": /[(){};:,]/
  };
  Prism2.languages.css["atrule"].inside.rest = Prism2.languages.css;
  var markup = Prism2.languages.markup;
  if (markup) {
    markup.tag.addInlined("style", "css");
    markup.tag.addAttribute("style", "css");
  }
})(prism);
(function(Prism2) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  var selectorInside;
  Prism2.languages.css.selector = {
    pattern: Prism2.languages.css.selector.pattern,
    lookbehind: true,
    inside: selectorInside = {
      "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
      "pseudo-class": /:[-\w]+/,
      "class": /\.[-\w]+/,
      "id": /#[-\w]+/,
      "attribute": {
        pattern: RegExp(`\\[(?:[^[\\]"']|` + string.source + ")*\\]"),
        greedy: true,
        inside: {
          "punctuation": /^\[|\]$/,
          "case-sensitivity": {
            pattern: /(\s)[si]$/i,
            lookbehind: true,
            alias: "keyword"
          },
          "namespace": {
            pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
            lookbehind: true,
            inside: {
              "punctuation": /\|$/
            }
          },
          "attr-name": {
            pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
            lookbehind: true
          },
          "attr-value": [string, {
            pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
            lookbehind: true
          }],
          "operator": /[|~*^$]?=/
        }
      },
      "n-th": [{
        pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
        lookbehind: true,
        inside: {
          "number": /[\dn]+/,
          "operator": /[+-]/
        }
      }, {
        pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
        lookbehind: true
      }],
      "combinator": />|\+|~|\|\|/,
      "punctuation": /[(),]/
    }
  };
  Prism2.languages.css["atrule"].inside["selector-function-argument"].inside = selectorInside;
  Prism2.languages.insertBefore("css", "property", {
    "variable": {
      pattern: /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
      lookbehind: true
    }
  });
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  Prism2.languages.insertBefore("css", "function", {
    "operator": {
      pattern: /(\s)[+\-*\/](?=\s)/,
      lookbehind: true
    },
    "hexcode": {
      pattern: /\B#[\da-f]{3,8}\b/i,
      alias: "color"
    },
    "color": [{
      pattern: /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
      lookbehind: true
    }, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "number": number
  });
})(prism);
prism.languages.javascript = prism.languages.extend("clike", {
  "class-name": [prism.languages.clike["class-name"], {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
    lookbehind: true
  }],
  "keyword": [{
    pattern: /((?:^|\})\s*)catch\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  "function": /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  "number": {
    pattern: RegExp(/(^|[^\w$])/.source + "(?:" + (/NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source) + ")" + /(?![\w$])/.source),
    lookbehind: true
  },
  "operator": /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
});
prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;
prism.languages.insertBefore("javascript", "keyword", {
  "regex": {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
    lookbehind: true,
    greedy: true,
    inside: {
      "regex-source": {
        pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
        lookbehind: true,
        alias: "language-regex",
        inside: prism.languages.regex
      },
      "regex-delimiter": /^\/|\/$/,
      "regex-flags": /^[a-z]+$/
    }
  },
  "function-variable": {
    pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
    alias: "function"
  },
  "parameter": [{
    pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: prism.languages.javascript
  }],
  "constant": /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
prism.languages.insertBefore("javascript", "string", {
  "hashbang": {
    pattern: /^#!.*/,
    greedy: true,
    alias: "comment"
  },
  "template-string": {
    pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
    greedy: true,
    inside: {
      "template-punctuation": {
        pattern: /^`|`$/,
        alias: "string"
      },
      "interpolation": {
        pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
        lookbehind: true,
        inside: {
          "interpolation-punctuation": {
            pattern: /^\$\{|\}$/,
            alias: "punctuation"
          },
          rest: prism.languages.javascript
        }
      },
      "string": /[\s\S]+/
    }
  },
  "string-property": {
    pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
    lookbehind: true,
    greedy: true,
    alias: "property"
  }
});
prism.languages.insertBefore("javascript", "operator", {
  "literal-property": {
    pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
    lookbehind: true,
    alias: "property"
  }
});
if (prism.languages.markup) {
  prism.languages.markup.tag.addInlined("script", "javascript");
  prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript");
}
prism.languages.js = prism.languages.javascript;
(function(Prism2) {
  var javascript = Prism2.util.clone(Prism2.languages.javascript);
  var space = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source;
  var braces = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source;
  var spread = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
  function re(source, flags) {
    source = source.replace(/<S>/g, function() {
      return space;
    }).replace(/<BRACES>/g, function() {
      return braces;
    }).replace(/<SPREAD>/g, function() {
      return spread;
    });
    return RegExp(source, flags);
  }
  spread = re(spread).source;
  Prism2.languages.jsx = Prism2.languages.extend("markup", javascript);
  Prism2.languages.jsx.tag.pattern = re(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source);
  Prism2.languages.jsx.tag.inside["tag"].pattern = /^<\/?[^\s>\/]*/;
  Prism2.languages.jsx.tag.inside["attr-value"].pattern = /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/;
  Prism2.languages.jsx.tag.inside["tag"].inside["class-name"] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism2.languages.jsx.tag.inside["comment"] = javascript["comment"];
  Prism2.languages.insertBefore("inside", "attr-name", {
    "spread": {
      pattern: re(/<SPREAD>/.source),
      inside: Prism2.languages.jsx
    }
  }, Prism2.languages.jsx.tag);
  Prism2.languages.insertBefore("inside", "special-attr", {
    "script": {
      pattern: re(/=<BRACES>/.source),
      alias: "language-javascript",
      inside: {
        "script-punctuation": {
          pattern: /^=(?=\{)/,
          alias: "punctuation"
        },
        rest: Prism2.languages.jsx
      }
    }
  }, Prism2.languages.jsx.tag);
  var stringifyToken = function(token) {
    if (!token) {
      return "";
    }
    if (typeof token === "string") {
      return token;
    }
    if (typeof token.content === "string") {
      return token.content;
    }
    return token.content.map(stringifyToken).join("");
  };
  var walkTokens = function(tokens) {
    var openedTags = [];
    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;
      if (typeof token !== "string") {
        if (token.type === "tag" && token.content[0] && token.content[0].type === "tag") {
          if (token.content[0].content[0].content === "</") {
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === "/>")
              ;
            else {
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === "punctuation" && token.content === "{") {
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === "punctuation" && token.content === "}") {
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }
      if (notTagNorBrace || typeof token === "string") {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          var plainText = stringifyToken(token);
          if (i < tokens.length - 1 && (typeof tokens[i + 1] === "string" || tokens[i + 1].type === "plain-text")) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }
          if (i > 0 && (typeof tokens[i - 1] === "string" || tokens[i - 1].type === "plain-text")) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }
          tokens[i] = new Prism2.Token("plain-text", plainText, null, plainText);
        }
      }
      if (token.content && typeof token.content !== "string") {
        walkTokens(token.content);
      }
    }
  };
  Prism2.hooks.add("after-tokenize", function(env) {
    if (env.language !== "jsx" && env.language !== "tsx") {
      return;
    }
    walkTokens(env.tokens);
  });
})(prism);
(function(Prism2) {
  Prism2.languages.insertBefore("javascript", "function-variable", {
    "method-variable": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function-variable"].pattern.source),
      lookbehind: true,
      alias: ["function-variable", "method", "function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "function", {
    "method": {
      pattern: RegExp("(\\.\\s*)" + Prism2.languages.javascript["function"].source),
      lookbehind: true,
      alias: ["function", "property-access"]
    }
  });
  Prism2.languages.insertBefore("javascript", "constant", {
    "known-class-name": [{
      pattern: /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
      alias: "class-name"
    }, {
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: "class-name"
    }]
  });
  function withId(source, flags) {
    return RegExp(source.replace(/<ID>/g, function() {
      return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/.source;
    }), flags);
  }
  Prism2.languages.insertBefore("javascript", "keyword", {
    "imports": {
      pattern: withId(/(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    },
    "exports": {
      pattern: withId(/(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/.source),
      lookbehind: true,
      inside: Prism2.languages.javascript
    }
  });
  Prism2.languages.javascript["keyword"].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: "module"
  }, {
    pattern: /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
    alias: "control-flow"
  }, {
    pattern: /\bnull\b/,
    alias: ["null", "nil"]
  }, {
    pattern: /\bundefined\b/,
    alias: "nil"
  });
  Prism2.languages.insertBefore("javascript", "operator", {
    "spread": {
      pattern: /\.{3}/,
      alias: "operator"
    },
    "arrow": {
      pattern: /=>/,
      alias: "operator"
    }
  });
  Prism2.languages.insertBefore("javascript", "punctuation", {
    "property-access": {
      pattern: withId(/(\.\s*)#?<ID>/.source),
      lookbehind: true
    },
    "maybe-class-name": {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    "dom": {
      pattern: /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
      alias: "variable"
    },
    "console": {
      pattern: /\bconsole(?=\s*\.)/,
      alias: "class-name"
    }
  });
  var maybeClassNameTokens = ["function", "function-variable", "method", "method-variable", "property-access"];
  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism2.languages.javascript[token];
    if (Prism2.util.type(value) === "RegExp") {
      value = Prism2.languages.javascript[token] = {
        pattern: value
      };
    }
    var inside = value.inside || {};
    value.inside = inside;
    inside["maybe-class-name"] = /^[A-Z][\s\S]*/;
  }
})(prism);
(function(Prism2) {
  var templateString = Prism2.languages.javascript["template-string"];
  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside["interpolation"];
  var interpolationPunctuationObject = interpolationObject.inside["interpolation-punctuation"];
  var interpolationPattern = interpolationObject.pattern.source;
  function createTemplate(language, tag) {
    if (!Prism2.languages[language]) {
      return void 0;
    }
    return {
      pattern: RegExp("((?:" + tag + ")\\s*)" + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        "template-punctuation": {
          pattern: /^`|`$/,
          alias: "string"
        },
        "embedded-code": {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }
  Prism2.languages.javascript["template-string"] = [
    createTemplate("css", /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),
    createTemplate("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
    createTemplate("svg", /\bsvg/.source),
    createTemplate("markdown", /\b(?:markdown|md)/.source),
    createTemplate("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
    createTemplate("sql", /\bsql/.source),
    templateString
  ].filter(Boolean);
  function getPlaceholder(counter, language) {
    return "___" + language.toUpperCase() + "_" + counter + "___";
  }
  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code,
      grammar,
      language
    };
    Prism2.hooks.run("before-tokenize", env);
    env.tokens = Prism2.tokenize(env.code, env.grammar);
    Prism2.hooks.run("after-tokenize", env);
    return env.tokens;
  }
  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar["interpolation-punctuation"] = interpolationPunctuationObject;
    var tokens = Prism2.tokenize(expression, tempGrammar);
    if (tokens.length === 3) {
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism2.languages.javascript, "javascript"));
      tokens.splice.apply(tokens, args);
    }
    return new Prism2.Token("interpolation", tokens, interpolationObject.alias, expression);
  }
  function tokenizeEmbedded(code, grammar, language) {
    var _tokens = Prism2.tokenize(code, {
      "interpolation": {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    });
    var placeholderCounter = 0;
    var placeholderMap = {};
    var embeddedCode = _tokens.map(function(token) {
      if (typeof token === "string") {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;
        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {
        }
        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join("");
    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language);
    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }
        var token = tokens[i];
        if (typeof token === "string" || typeof token.content === "string") {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === "string" ? token : token.content;
          var index = s.indexOf(placeholder);
          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];
            if (before) {
              replacement.push(before);
            }
            replacement.push(middle);
            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }
            if (typeof token === "string") {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;
          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }
    walkTokens(embeddedTokens);
    return new Prism2.Token(language, embeddedTokens, "language-" + language, code);
  }
  var supportedLanguages = {
    "javascript": true,
    "js": true,
    "typescript": true,
    "ts": true,
    "jsx": true,
    "tsx": true
  };
  Prism2.hooks.add("after-tokenize", function(env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (typeof token === "string") {
          continue;
        }
        var content = token.content;
        if (!Array.isArray(content)) {
          if (typeof content !== "string") {
            findTemplateStrings([content]);
          }
          continue;
        }
        if (token.type === "template-string") {
          var embedded = content[1];
          if (content.length === 3 && typeof embedded !== "string" && embedded.type === "embedded-code") {
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism2.languages[language];
            if (!grammar) {
              continue;
            }
            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }
    findTemplateStrings(env.tokens);
  });
  function stringContent(value) {
    if (typeof value === "string") {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join("");
    } else {
      return stringContent(value.content);
    }
  }
})(prism);
(function(Prism2) {
  var comment = /#(?!\{).+/;
  var interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: "variable"
  };
  Prism2.languages.coffeescript = Prism2.languages.extend("javascript", {
    "comment": comment,
    "string": [
      {
        pattern: /'(?:\\[\s\S]|[^\\'])*'/,
        greedy: true
      },
      {
        pattern: /"(?:\\[\s\S]|[^\\"])*"/,
        greedy: true,
        inside: {
          "interpolation": interpolation
        }
      }
    ],
    "keyword": /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    "class-member": {
      pattern: /@(?!\d)\w+/,
      alias: "variable"
    }
  });
  Prism2.languages.insertBefore("coffeescript", "comment", {
    "multiline-comment": {
      pattern: /###[\s\S]+?###/,
      alias: "comment"
    },
    "block-regex": {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: "regex",
      inside: {
        "comment": comment,
        "interpolation": interpolation
      }
    }
  });
  Prism2.languages.insertBefore("coffeescript", "string", {
    "inline-javascript": {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        "delimiter": {
          pattern: /^`|`$/,
          alias: "punctuation"
        },
        "script": {
          pattern: /[\s\S]+/,
          alias: "language-javascript",
          inside: Prism2.languages.javascript
        }
      }
    },
    "multiline-string": [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: "string"
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: "string",
      inside: {
        interpolation
      }
    }]
  });
  Prism2.languages.insertBefore("coffeescript", "keyword", {
    "property": /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism2.languages.coffeescript["template-string"];
  Prism2.languages.coffee = Prism2.languages.coffeescript;
})(prism);
(function(Prism2) {
  Prism2.languages.diff = {
    "coord": [
      /^(?:\*{3}|-{3}|\+{3}).*$/m,
      /^@@.*@@$/m,
      /^\d.*$/m
    ]
  };
  var PREFIXES = {
    "deleted-sign": "-",
    "deleted-arrow": "<",
    "inserted-sign": "+",
    "inserted-arrow": ">",
    "unchanged": " ",
    "diff": "!"
  };
  Object.keys(PREFIXES).forEach(function(name) {
    var prefix = PREFIXES[name];
    var alias = [];
    if (!/^\w+$/.test(name)) {
      alias.push(/\w+/.exec(name)[0]);
    }
    if (name === "diff") {
      alias.push("bold");
    }
    Prism2.languages.diff[name] = {
      pattern: RegExp("^(?:[" + prefix + "].*(?:\r\n?|\n|(?![\\s\\S])))+", "m"),
      alias,
      inside: {
        "line": {
          pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
          lookbehind: true
        },
        "prefix": {
          pattern: /[\s\S]/,
          alias: /\w+/.exec(name)[0]
        }
      }
    };
  });
  Object.defineProperty(Prism2.languages.diff, "PREFIXES", {
    value: PREFIXES
  });
})(prism);
prism.languages.git = {
  "comment": /^#.*/m,
  "deleted": /^[-–].*/m,
  "inserted": /^\+.*/m,
  "string": /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
  "command": {
    pattern: /^.*\$ git .*$/m,
    inside: {
      "parameter": /\s--?\w+/
    }
  },
  "coord": /^@@.*@@$/m,
  "commit-sha1": /^commit \w{40}$/m
};
prism.languages.go = prism.languages.extend("clike", {
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
    lookbehind: true,
    greedy: true
  },
  "keyword": /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  "boolean": /\b(?:_|false|iota|nil|true)\b/,
  "number": [
    /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
    /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
    /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i
  ],
  "operator": /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  "builtin": /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/
});
prism.languages.insertBefore("go", "string", {
  "char": {
    pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/,
    greedy: true
  }
});
delete prism.languages.go["class-name"];
prism.languages.graphql = {
  "comment": /#.*/,
  "description": {
    pattern: /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
    greedy: true,
    alias: "string",
    inside: {
      "language-markdown": {
        pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
        lookbehind: true,
        inside: prism.languages.markdown
      }
    }
  },
  "string": {
    pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  "number": /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "boolean": /\b(?:false|true)\b/,
  "variable": /\$[a-z_]\w*/i,
  "directive": {
    pattern: /@[a-z_]\w*/i,
    alias: "function"
  },
  "attr-name": {
    pattern: /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  "atom-input": {
    pattern: /\b[A-Z]\w*Input\b/,
    alias: "class-name"
  },
  "scalar": /\b(?:Boolean|Float|ID|Int|String)\b/,
  "constant": /\b[A-Z][A-Z_\d]*\b/,
  "class-name": {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
    lookbehind: true
  },
  "fragment": {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-mutation": {
    pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "definition-query": {
    pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: "function"
  },
  "keyword": /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
  "operator": /[!=|&]|\.{3}/,
  "property-query": /\w+(?=\s*\()/,
  "object": /\w+(?=\s*\{)/,
  "punctuation": /[!(){}\[\]:=,]/,
  "property": /\w+/
};
prism.hooks.add("after-tokenize", function afterTokenizeGraphql(env) {
  if (env.language !== "graphql") {
    return;
  }
  var validTokens = env.tokens.filter(function(token) {
    return typeof token !== "string" && token.type !== "comment" && token.type !== "scalar";
  });
  var currentIndex = 0;
  function getToken(offset) {
    return validTokens[currentIndex + offset];
  }
  function isTokenType(types, offset) {
    offset = offset || 0;
    for (var i2 = 0; i2 < types.length; i2++) {
      var token = getToken(i2 + offset);
      if (!token || token.type !== types[i2]) {
        return false;
      }
    }
    return true;
  }
  function findClosingBracket(open, close) {
    var stackHeight = 1;
    for (var i2 = currentIndex; i2 < validTokens.length; i2++) {
      var token = validTokens[i2];
      var content = token.content;
      if (token.type === "punctuation" && typeof content === "string") {
        if (open.test(content)) {
          stackHeight++;
        } else if (close.test(content)) {
          stackHeight--;
          if (stackHeight === 0) {
            return i2;
          }
        }
      }
    }
    return -1;
  }
  function addAlias(token, alias) {
    var aliases = token.alias;
    if (!aliases) {
      token.alias = aliases = [];
    } else if (!Array.isArray(aliases)) {
      token.alias = aliases = [aliases];
    }
    aliases.push(alias);
  }
  for (; currentIndex < validTokens.length; ) {
    var startToken = validTokens[currentIndex++];
    if (startToken.type === "keyword" && startToken.content === "mutation") {
      var inputVariables = [];
      if (isTokenType(["definition-mutation", "punctuation"]) && getToken(1).content === "(") {
        currentIndex += 2;
        var definitionEnd = findClosingBracket(/^\($/, /^\)$/);
        if (definitionEnd === -1) {
          continue;
        }
        for (; currentIndex < definitionEnd; currentIndex++) {
          var t = getToken(0);
          if (t.type === "variable") {
            addAlias(t, "variable-input");
            inputVariables.push(t.content);
          }
        }
        currentIndex = definitionEnd + 1;
      }
      if (isTokenType(["punctuation", "property-query"]) && getToken(0).content === "{") {
        currentIndex++;
        addAlias(getToken(0), "property-mutation");
        if (inputVariables.length > 0) {
          var mutationEnd = findClosingBracket(/^\{$/, /^\}$/);
          if (mutationEnd === -1) {
            continue;
          }
          for (var i = currentIndex; i < mutationEnd; i++) {
            var varToken = validTokens[i];
            if (varToken.type === "variable" && inputVariables.indexOf(varToken.content) >= 0) {
              addAlias(varToken, "variable-input");
            }
          }
        }
      }
    }
  }
});
(function(Prism2) {
  function getPlaceholder(language, index) {
    return "___" + language.toUpperCase() + index + "___";
  }
  Object.defineProperties(Prism2.languages["markup-templating"] = {}, {
    buildPlaceholders: {
      value: function(env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }
        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function(match) {
          if (typeof replaceFilter === "function" && !replaceFilter(match)) {
            return match;
          }
          var i = tokenStack.length;
          var placeholder;
          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          }
          tokenStack[i] = match;
          return placeholder;
        });
        env.grammar = Prism2.languages.markup;
      }
    },
    tokenizePlaceholders: {
      value: function(env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        }
        env.grammar = Prism2.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);
        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            if (j >= keys.length) {
              break;
            }
            var token = tokens[i];
            if (typeof token === "string" || token.content && typeof token.content === "string") {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === "string" ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);
              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism2.Token(language, Prism2.tokenize(t, env.grammar), "language-" + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];
                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }
                replacement.push(middle);
                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }
                if (typeof token === "string") {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content) {
              walkTokens(token.content);
            }
          }
          return tokens;
        }
        walkTokens(env.tokens);
      }
    }
  });
})(prism);
(function(Prism2) {
  Prism2.languages.handlebars = {
    "comment": /\{\{![\s\S]*?\}\}/,
    "delimiter": {
      pattern: /^\{\{\{?|\}\}\}?$/,
      alias: "punctuation"
    },
    "string": /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    "number": /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    "boolean": /\b(?:false|true)\b/,
    "block": {
      pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
      lookbehind: true,
      alias: "keyword"
    },
    "brackets": {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    "punctuation": /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
    "variable": /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism2.hooks.add("before-tokenize", function(env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism2.languages["markup-templating"].buildPlaceholders(env, "handlebars", handlebarsPattern);
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    Prism2.languages["markup-templating"].tokenizePlaceholders(env, "handlebars");
  });
  Prism2.languages.hbs = Prism2.languages.handlebars;
})(prism);
prism.languages.json = {
  "property": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "string": {
    pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    lookbehind: true,
    greedy: true
  },
  "comment": {
    pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
    greedy: true
  },
  "number": /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  "punctuation": /[{}[\],]/,
  "operator": /:/,
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  }
};
prism.languages.webmanifest = prism.languages.json;
prism.languages.less = prism.languages.extend("css", {
  "comment": [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  "atrule": {
    pattern: /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "punctuation": /[:()]/
    }
  },
  "selector": {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
    inside: {
      "variable": /@+[\w-]+/
    }
  },
  "property": /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
  "operator": /[+\-*\/]/
});
prism.languages.insertBefore("less", "property", {
  "variable": [
    {
      pattern: /@[\w-]+\s*:/,
      inside: {
        "punctuation": /:/
      }
    },
    /@@?[\w-]+/
  ],
  "mixin-usage": {
    pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
    lookbehind: true,
    alias: "function"
  }
});
prism.languages.makefile = {
  "comment": {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  "string": {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  "builtin-target": {
    pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
    alias: "builtin"
  },
  "target": {
    pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
    alias: "symbol",
    inside: {
      "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/
    }
  },
  "variable": /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  "keyword": /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
  "function": {
    pattern: /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
    lookbehind: true
  },
  "operator": /(?:::|[?:+!])?=|[|@]/,
  "punctuation": /[:;(){}]/
};
(function(Prism2) {
  var inner = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
  function createInline(pattern) {
    pattern = pattern.replace(/<inner>/g, function() {
      return inner;
    });
    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + pattern + ")");
  }
  var tableCell = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(/__/g, function() {
    return tableCell;
  });
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/.source;
  Prism2.languages.markdown = Prism2.languages.extend("markup", {});
  Prism2.languages.insertBefore("markdown", "prolog", {
    "front-matter-block": {
      pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
      lookbehind: true,
      greedy: true,
      inside: {
        "punctuation": /^---|---$/,
        "front-matter": {
          pattern: /\S+(?:\s+\S+)*/,
          alias: ["yaml", "language-yaml"],
          inside: Prism2.languages.yaml
        }
      }
    },
    "blockquote": {
      pattern: /^>(?:[\t ]*>)*/m,
      alias: "punctuation"
    },
    "table": {
      pattern: RegExp("^" + tableRow + tableLine + "(?:" + tableRow + ")*", "m"),
      inside: {
        "table-data-rows": {
          pattern: RegExp("^(" + tableRow + tableLine + ")(?:" + tableRow + ")*$"),
          lookbehind: true,
          inside: {
            "table-data": {
              pattern: RegExp(tableCell),
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        },
        "table-line": {
          pattern: RegExp("^(" + tableRow + ")" + tableLine + "$"),
          lookbehind: true,
          inside: {
            "punctuation": /\||:?-{3,}:?/
          }
        },
        "table-header-row": {
          pattern: RegExp("^" + tableRow + "$"),
          inside: {
            "table-header": {
              pattern: RegExp(tableCell),
              alias: "important",
              inside: Prism2.languages.markdown
            },
            "punctuation": /\|/
          }
        }
      }
    },
    "code": [{
      pattern: /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
      lookbehind: true,
      alias: "keyword"
    }, {
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        "code-block": {
          pattern: /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
          lookbehind: true
        },
        "code-language": {
          pattern: /^(```).+/,
          lookbehind: true
        },
        "punctuation": /```/
      }
    }],
    "title": [{
      pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
      alias: "important",
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      pattern: /(^\s*)#.+/m,
      lookbehind: true,
      alias: "important",
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    "hr": {
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "list": {
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: "punctuation"
    },
    "url-reference": {
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        "variable": {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        "string": /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        "punctuation": /^[\[\]!:]|[<>]/
      },
      alias: "url"
    },
    "bold": {
      pattern: createInline(/\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /\*\*|__/
      }
    },
    "italic": {
      pattern: createInline(/\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /[*_]/
      }
    },
    "strike": {
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+\2/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "content": {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {}
        },
        "punctuation": /~~?/
      }
    },
    "code-snippet": {
      pattern: /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
      lookbehind: true,
      greedy: true,
      alias: ["code", "keyword"]
    },
    "url": {
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/.source),
      lookbehind: true,
      greedy: true,
      inside: {
        "operator": /^!/,
        "content": {
          pattern: /(^\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {}
        },
        "variable": {
          pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        "url": {
          pattern: /(^\]\()[^\s)]+/,
          lookbehind: true
        },
        "string": {
          pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
          lookbehind: true
        }
      }
    }
  });
  ["url", "bold", "italic", "strike"].forEach(function(token) {
    ["url", "bold", "italic", "strike", "code-snippet"].forEach(function(inside) {
      if (token !== inside) {
        Prism2.languages.markdown[token].inside.content.inside[inside] = Prism2.languages.markdown[inside];
      }
    });
  });
  Prism2.hooks.add("after-tokenize", function(env) {
    if (env.language !== "markdown" && env.language !== "md") {
      return;
    }
    function walkTokens(tokens) {
      if (!tokens || typeof tokens === "string") {
        return;
      }
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];
        if (token.type !== "code") {
          walkTokens(token.content);
          continue;
        }
        var codeLang = token.content[1];
        var codeBlock = token.content[3];
        if (codeLang && codeBlock && codeLang.type === "code-language" && codeBlock.type === "code-block" && typeof codeLang.content === "string") {
          var lang = codeLang.content.replace(/\b#/g, "sharp").replace(/\b\+\+/g, "pp");
          lang = (/[a-z][\w-]*/i.exec(lang) || [""])[0].toLowerCase();
          var alias = "language-" + lang;
          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === "string") {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }
    walkTokens(env.tokens);
  });
  Prism2.hooks.add("wrap", function(env) {
    if (env.type !== "code-block") {
      return;
    }
    var codeLang = "";
    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);
      if (match) {
        codeLang = match[1];
        break;
      }
    }
    var grammar = Prism2.languages[codeLang];
    if (!grammar) {
      if (codeLang && codeLang !== "none" && Prism2.plugins.autoloader) {
        var id = "md-" + new Date().valueOf() + "-" + Math.floor(Math.random() * 1e16);
        env.attributes["id"] = id;
        Prism2.plugins.autoloader.loadLanguages(codeLang, function() {
          var ele = document.getElementById(id);
          if (ele) {
            ele.innerHTML = Prism2.highlight(ele.textContent, Prism2.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      env.content = Prism2.highlight(textContent(env.content), grammar, codeLang);
    }
  });
  var tagPattern = RegExp(Prism2.languages.markup.tag.pattern.source, "gi");
  var KNOWN_ENTITY_NAMES = {
    "amp": "&",
    "lt": "<",
    "gt": ">",
    "quot": '"'
  };
  var fromCodePoint = String.fromCodePoint || String.fromCharCode;
  function textContent(html) {
    var text = html.replace(tagPattern, "");
    text = text.replace(/&(\w{1,8}|#x?[\da-f]{1,8});/gi, function(m, code) {
      code = code.toLowerCase();
      if (code[0] === "#") {
        var value;
        if (code[1] === "x") {
          value = parseInt(code.slice(2), 16);
        } else {
          value = Number(code.slice(1));
        }
        return fromCodePoint(value);
      } else {
        var known = KNOWN_ENTITY_NAMES[code];
        if (known) {
          return known;
        }
        return m;
      }
    });
    return text;
  }
  Prism2.languages.md = Prism2.languages.markdown;
})(prism);
prism.languages.objectivec = prism.languages.extend("c", {
  "string": {
    pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
    greedy: true
  },
  "keyword": /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  "operator": /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete prism.languages.objectivec["class-name"];
prism.languages.objc = prism.languages.objectivec;
prism.languages.ocaml = {
  "comment": {
    pattern: /\(\*[\s\S]*?\*\)/,
    greedy: true
  },
  "char": {
    pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
    greedy: true
  },
  "string": [{
    pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/,
    greedy: true
  }],
  "number": [
    /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
    /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
    /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i
  ],
  "directive": {
    pattern: /\B#\w+/,
    alias: "property"
  },
  "label": {
    pattern: /\B~\w+/,
    alias: "property"
  },
  "type-variable": {
    pattern: /\B'\w+/,
    alias: "function"
  },
  "variant": {
    pattern: /`\w+/,
    alias: "symbol"
  },
  "keyword": /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
  "boolean": /\b(?:false|true)\b/,
  "operator-like-punctuation": {
    pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
    alias: "punctuation"
  },
  "operator": /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
  "punctuation": /;;|::|[(){}\[\].,:;#]|\b_\b/
};
prism.languages.python = {
  "comment": {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true,
    greedy: true
  },
  "string-interpolation": {
    pattern: /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      "interpolation": {
        pattern: /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
        lookbehind: true,
        inside: {
          "format-spec": {
            pattern: /(:)[^:(){}]+(?=\}$)/,
            lookbehind: true
          },
          "conversion-option": {
            pattern: /![sra](?=[:}]$)/,
            alias: "punctuation"
          },
          rest: null
        }
      },
      "string": /[\s\S]+/
    }
  },
  "triple-quoted-string": {
    pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
    greedy: true,
    alias: "string"
  },
  "string": {
    pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  "function": {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  "class-name": {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  "decorator": {
    pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
    lookbehind: true,
    alias: ["annotation", "punctuation"],
    inside: {
      "punctuation": /\./
    }
  },
  "keyword": /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  "builtin": /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  "boolean": /\b(?:False|None|True)\b/,
  "number": /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
  "operator": /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  "punctuation": /[{}[\];(),.:]/
};
prism.languages.python["string-interpolation"].inside["interpolation"].inside.rest = prism.languages.python;
prism.languages.py = prism.languages.python;
prism.languages.reason = prism.languages.extend("clike", {
  "string": {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  "class-name": /\b[A-Z]\w*/,
  "keyword": /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  "operator": /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/
});
prism.languages.insertBefore("reason", "class-name", {
  "char": {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    greedy: true
  },
  "constructor": /\b[A-Z]\w*\b(?!\s*\.)/,
  "label": {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: "symbol"
  }
});
delete prism.languages.reason.function;
(function(Prism2) {
  Prism2.languages.sass = Prism2.languages.extend("css", {
    "comment": {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
      lookbehind: true,
      greedy: true
    }
  });
  Prism2.languages.insertBefore("sass", "atrule", {
    "atrule-line": {
      pattern: /^(?:[ \t]*)[@+=].+/m,
      greedy: true,
      inside: {
        "atrule": /(?:@[\w-]+|[+=])/
      }
    }
  });
  delete Prism2.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/, {
    pattern: /(\s)-(?=\s)/,
    lookbehind: true
  }];
  Prism2.languages.insertBefore("sass", "property", {
    "variable-line": {
      pattern: /^[ \t]*\$.+/m,
      greedy: true,
      inside: {
        "punctuation": /:/,
        "variable": variable,
        "operator": operator
      }
    },
    "property-line": {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
      greedy: true,
      inside: {
        "property": [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        "punctuation": /:/,
        "variable": variable,
        "operator": operator,
        "important": Prism2.languages.sass.important
      }
    }
  });
  delete Prism2.languages.sass.property;
  delete Prism2.languages.sass.important;
  Prism2.languages.insertBefore("sass", "punctuation", {
    "selector": {
      pattern: /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
      lookbehind: true,
      greedy: true
    }
  });
})(prism);
prism.languages.scss = prism.languages.extend("css", {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  "atrule": {
    pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
    inside: {
      "rule": /@[\w-]+/
    }
  },
  "url": /(?:[-a-z]+-)?url(?=\()/i,
  "selector": {
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
    inside: {
      "parent": {
        pattern: /&/,
        alias: "important"
      },
      "placeholder": /%[-\w]+/,
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  "property": {
    pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      "variable": /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
prism.languages.insertBefore("scss", "atrule", {
  "keyword": [/@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i, {
    pattern: /( )(?:from|through)(?= )/,
    lookbehind: true
  }]
});
prism.languages.insertBefore("scss", "important", {
  "variable": /\$[-\w]+|#\{\$[-\w]+\}/
});
prism.languages.insertBefore("scss", "function", {
  "module-modifier": {
    pattern: /\b(?:as|hide|show|with)\b/i,
    alias: "keyword"
  },
  "placeholder": {
    pattern: /%[-\w]+/,
    alias: "selector"
  },
  "statement": {
    pattern: /\B!(?:default|optional)\b/i,
    alias: "keyword"
  },
  "boolean": /\b(?:false|true)\b/,
  "null": {
    pattern: /\bnull\b/,
    alias: "keyword"
  },
  "operator": {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
    lookbehind: true
  }
});
prism.languages.scss["atrule"].inside.rest = prism.languages.scss;
prism.languages.sql = {
  "comment": {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  "variable": [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  "string": {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  "identifier": {
    pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
    greedy: true,
    lookbehind: true,
    inside: {
      "punctuation": /^`|`$/
    }
  },
  "function": /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  "keyword": /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  "boolean": /\b(?:FALSE|NULL|TRUE)\b/i,
  "number": /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
  "operator": /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  "punctuation": /[;[\]()`,.]/
};
(function(Prism2) {
  var unit = {
    pattern: /(\b\d+)(?:%|[a-z]+)/,
    lookbehind: true
  };
  var number = {
    pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
    lookbehind: true
  };
  var inside = {
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    "url": {
      pattern: /\burl\((["']?).*?\1\)/i,
      greedy: true
    },
    "string": {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    "interpolation": null,
    "func": null,
    "important": /\B!(?:important|optional)\b/i,
    "keyword": {
      pattern: /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
      lookbehind: true
    },
    "hexcode": /#[\da-f]{3,6}/i,
    "color": [/\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i, {
      pattern: /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
      inside: {
        "unit": unit,
        "number": number,
        "function": /[\w-]+(?=\()/,
        "punctuation": /[(),]/
      }
    }],
    "entity": /\\[\da-f]{1,8}/i,
    "unit": unit,
    "boolean": /\b(?:false|true)\b/,
    "operator": [
      /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/
    ],
    "number": number,
    "punctuation": /[{}()\[\];:,]/
  };
  inside["interpolation"] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: "variable",
    inside: {
      "delimiter": {
        pattern: /^\{|\}$/,
        alias: "punctuation"
      },
      rest: inside
    }
  };
  inside["func"] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      "function": /^[^(]+/,
      rest: inside
    }
  };
  Prism2.languages.stylus = {
    "atrule-declaration": {
      pattern: /(^[ \t]*)@.+/m,
      lookbehind: true,
      inside: {
        "atrule": /^@[\w-]+/,
        rest: inside
      }
    },
    "variable-declaration": {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
      lookbehind: true,
      inside: {
        "variable": /^\S+/,
        rest: inside
      }
    },
    "statement": {
      pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
      lookbehind: true,
      inside: {
        "keyword": /^\S+/,
        rest: inside
      }
    },
    "property-declaration": {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
      lookbehind: true,
      inside: {
        "property": {
          pattern: /^[^\s:]+/,
          inside: {
            "interpolation": inside.interpolation
          }
        },
        rest: inside
      }
    },
    "selector": {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
      lookbehind: true,
      inside: {
        "interpolation": inside.interpolation,
        "comment": inside.comment,
        "punctuation": /[{},]/
      }
    },
    "func": inside.func,
    "string": inside.string,
    "comment": {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true,
      greedy: true
    },
    "interpolation": inside.interpolation,
    "punctuation": /[{}()\[\];:.]/
  };
})(prism);
(function(Prism2) {
  Prism2.languages.typescript = Prism2.languages.extend("javascript", {
    "class-name": {
      pattern: /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
      lookbehind: true,
      greedy: true,
      inside: null
    },
    "builtin": /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/
  });
  Prism2.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/, /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/, /\btype\b(?=\s*(?:[\{*]|$))/);
  delete Prism2.languages.typescript["parameter"];
  delete Prism2.languages.typescript["literal-property"];
  var typeInside = Prism2.languages.extend("typescript", {});
  delete typeInside["class-name"];
  Prism2.languages.typescript["class-name"].inside = typeInside;
  Prism2.languages.insertBefore("typescript", "function", {
    "decorator": {
      pattern: /@[$\w\xA0-\uFFFF]+/,
      inside: {
        "at": {
          pattern: /^@/,
          alias: "operator"
        },
        "function": /^[\s\S]+/
      }
    },
    "generic-function": {
      pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
      greedy: true,
      inside: {
        "function": /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
        "generic": {
          pattern: /<[\s\S]+/,
          alias: "class-name",
          inside: typeInside
        }
      }
    }
  });
  Prism2.languages.ts = Prism2.languages.typescript;
})(prism);
(function(Prism2) {
  var typescript = Prism2.util.clone(Prism2.languages.typescript);
  Prism2.languages.tsx = Prism2.languages.extend("jsx", typescript);
  delete Prism2.languages.tsx["parameter"];
  delete Prism2.languages.tsx["literal-property"];
  var tag = Prism2.languages.tsx.tag;
  tag.pattern = RegExp(/(^|[^\w$]|(?=<\/))/.source + "(?:" + tag.pattern.source + ")", tag.pattern.flags);
  tag.lookbehind = true;
})(prism);
prism.languages.wasm = {
  "comment": [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  "string": {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  "keyword": [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      "operator": /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      "punctuation": /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  "variable": /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
  "number": /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  "punctuation": /[()]/
};
(function(Prism2) {
  var anchorOrAlias = /[*&][^\s[\]{},]+/;
  var tag = /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/;
  var properties = "(?:" + tag.source + "(?:[ 	]+" + anchorOrAlias.source + ")?|" + anchorOrAlias.source + "(?:[ 	]+" + tag.source + ")?)";
  var plainKey = /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(/<PLAIN>/g, function() {
    return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/.source;
  });
  var string = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
  function createValuePattern(value, flags) {
    flags = (flags || "").replace(/m/g, "") + "m";
    var pattern = /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source.replace(/<<prop>>/g, function() {
      return properties;
    }).replace(/<<value>>/g, function() {
      return value;
    });
    return RegExp(pattern, flags);
  }
  Prism2.languages.yaml = {
    "scalar": {
      pattern: RegExp(/([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(/<<prop>>/g, function() {
        return properties;
      })),
      lookbehind: true,
      alias: "string"
    },
    "comment": /#.*/,
    "key": {
      pattern: RegExp(/((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source.replace(/<<prop>>/g, function() {
        return properties;
      }).replace(/<<key>>/g, function() {
        return "(?:" + plainKey + "|" + string + ")";
      })),
      lookbehind: true,
      greedy: true,
      alias: "atrule"
    },
    "directive": {
      pattern: /(^[ \t]*)%.+/m,
      lookbehind: true,
      alias: "important"
    },
    "datetime": {
      pattern: createValuePattern(/\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/.source),
      lookbehind: true,
      alias: "number"
    },
    "boolean": {
      pattern: createValuePattern(/false|true/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "null": {
      pattern: createValuePattern(/null|~/.source, "i"),
      lookbehind: true,
      alias: "important"
    },
    "string": {
      pattern: createValuePattern(string),
      lookbehind: true,
      greedy: true
    },
    "number": {
      pattern: createValuePattern(/[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/.source, "i"),
      lookbehind: true
    },
    "tag": tag,
    "important": anchorOrAlias,
    "punctuation": /---|[:[\]{}\-,|>?]|\.\.\./
  };
  Prism2.languages.yml = Prism2.languages.yaml;
})(prism);
var prism_default = prism;

// node_modules/prism-react-renderer/themes/duotoneDark/index.js
init_react();
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};
var duotoneDark_default = theme;

// node_modules/prism-react-renderer/dist/index.js
var import_react = __toModule(require_react());
var defaultProps = {
  Prism: prism_default,
  theme: duotoneDark_default
};
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
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
var newlineRe = /\r\n|\r|\n/;
var normalizeEmptyLines = function(line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "\n",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].content = "\n";
    line[0].empty = true;
  }
};
var appendTypes = function(types, add) {
  var typesSize = types.length;
  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }
  return types.concat(add);
};
var normalizeTokens = function(tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];
  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i];
      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);
        if (token.alias) {
          types = appendTypes(types, token.alias);
        }
        content = token.content;
      }
      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      }
      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types,
        content: splitByNewlines[0]
      });
      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types,
          content: splitByNewlines[i$1]
        });
      }
    }
    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }
  normalizeEmptyLines(currentLine);
  return acc;
};
var themeToDict = function(theme4, language) {
  var plain = theme4.plain;
  var base = Object.create(null);
  var themeDict = theme4.styles.reduce(function(acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;
    if (languages && !languages.includes(language)) {
      return acc;
    }
    themeEntry.types.forEach(function(type) {
      var accStyle = _extends({}, acc[type], style);
      acc[type] = accStyle;
    });
    return acc;
  }, base);
  themeDict.root = plain;
  themeDict.plain = _extends({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};
function objectWithoutProperties(obj, exclude) {
  var target = {};
  for (var k in obj)
    if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1)
      target[k] = obj[k];
  return target;
}
var Highlight = /* @__PURE__ */ function(Component2) {
  function Highlight2() {
    var this$1 = this;
    var args = [], len = arguments.length;
    while (len--)
      args[len] = arguments[len];
    Component2.apply(this, args);
    _defineProperty(this, "getThemeDict", function(props) {
      if (this$1.themeDict !== void 0 && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }
      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : void 0;
      return this$1.themeDict = themeDict;
    });
    _defineProperty(this, "getLineProps", function(ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token-line",
        style: void 0,
        key: void 0
      });
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict !== void 0) {
        output.style = themeDict.plain;
      }
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "getStyleForToken", function(ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);
      if (themeDict === void 0) {
        return void 0;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : void 0;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }
      var baseStyle = empty ? {
        display: "inline-block"
      } : {};
      var typeStyles = types.map(function(type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });
    _defineProperty(this, "getTokenProps", function(ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;
      var output = _extends({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: void 0
      });
      if (style !== void 0) {
        output.style = output.style !== void 0 ? _extends({}, output.style, style) : style;
      }
      if (key !== void 0) {
        output.key = key;
      }
      if (className) {
        output.className += " " + className;
      }
      return output;
    });
    _defineProperty(this, "tokenize", function(Prism2, code, grammar, language) {
      var env = {
        code,
        grammar,
        language,
        tokens: []
      };
      Prism2.hooks.run("before-tokenize", env);
      var tokens = env.tokens = Prism2.tokenize(env.code, env.grammar, env.language);
      Prism2.hooks.run("after-tokenize", env);
      return tokens;
    });
  }
  if (Component2)
    Highlight2.__proto__ = Component2;
  Highlight2.prototype = Object.create(Component2 && Component2.prototype);
  Highlight2.prototype.constructor = Highlight2;
  Highlight2.prototype.render = function render() {
    var ref = this.props;
    var Prism2 = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism2.languages[language];
    var mixedTokens = grammar !== void 0 ? this.tokenize(Prism2, code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens,
      className: "prism-code language-" + language,
      style: themeDict !== void 0 ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };
  return Highlight2;
}(import_react.Component);
var dist_default = Highlight;

// node_modules/prism-react-renderer/themes/github/index.js
init_react();
var theme2 = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};
var github_default = theme2;

// node_modules/prism-react-renderer/themes/vsDark/index.js
init_react();
var theme3 = {
  plain: {
    color: "#9CDCFE",
    backgroundColor: "#1E1E1E"
  },
  styles: [{
    types: ["prolog"],
    style: {
      color: "rgb(0, 0, 128)"
    }
  }, {
    types: ["comment"],
    style: {
      color: "rgb(106, 153, 85)"
    }
  }, {
    types: ["builtin", "changed", "keyword", "interpolation-punctuation"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["number", "inserted"],
    style: {
      color: "rgb(181, 206, 168)"
    }
  }, {
    types: ["constant"],
    style: {
      color: "rgb(100, 102, 149)"
    }
  }, {
    types: ["attr-name", "variable"],
    style: {
      color: "rgb(156, 220, 254)"
    }
  }, {
    types: ["deleted", "string", "attr-value", "template-punctuation"],
    style: {
      color: "rgb(206, 145, 120)"
    }
  }, {
    types: ["selector"],
    style: {
      color: "rgb(215, 186, 125)"
    }
  }, {
    types: ["tag"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["tag"],
    languages: ["markup"],
    style: {
      color: "rgb(86, 156, 214)"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "rgb(212, 212, 212)"
    }
  }, {
    types: ["punctuation"],
    languages: ["markup"],
    style: {
      color: "#808080"
    }
  }, {
    types: ["function"],
    style: {
      color: "rgb(220, 220, 170)"
    }
  }, {
    types: ["class-name"],
    style: {
      color: "rgb(78, 201, 176)"
    }
  }, {
    types: ["char"],
    style: {
      color: "rgb(209, 105, 105)"
    }
  }]
};
var vsDark_default = theme3;

// app/components/Contentful/CodeBlock/CodeBlock.tsx
var links3 = () => {
  return [{ rel: "stylesheet", href: CodeBlock_default }];
};
var CodeBlock = (props) => {
  const codeText = props.data.codeText;
  const { theme: theme4 } = useTheme();
  const language = props.data.language;
  return /* @__PURE__ */ React6.createElement("div", {
    className: "CodeBlock__Wrapper rounded-lg mt-3 mb-6"
  }, /* @__PURE__ */ React6.createElement(dist_default, {
    ...defaultProps,
    theme: theme4 === SupportedTheme.LIGHT ? github_default : vsDark_default,
    code: codeText,
    language
  }, ({ className, tokens, getLineProps, getTokenProps }) => {
    return /* @__PURE__ */ React6.createElement("div", {
      className: "CodeBlock"
    }, props.data.fileName !== void 0 ? /* @__PURE__ */ React6.createElement("div", {
      className: "CodeBlock__FileName__Container w-full rounded-t-lg"
    }, /* @__PURE__ */ React6.createElement("p", {
      className: "CodeBlock__FileName text-center"
    }, props.data.fileName)) : null, /* @__PURE__ */ React6.createElement("pre", {
      className: `${className} CodeBlock__InnerContainer overflow-x-auto roundedLg p-4 ${props.data.fileName ? "pt-2" : ""}
                `
    }, tokens.map((line, i) => {
      const { classname, ...restProps } = getLineProps({
        line,
        key: i
      });
      return /* @__PURE__ */ React6.createElement("div", {
        key: i,
        ...restProps,
        className: `${className} LineNo__${i + 1} grid CodeBlock__LineWrapper relative ${props.data.shouldDisplayLineNumber ? "gap-10" : ""} breakWord whitespace-preWrap`
      }, /* @__PURE__ */ React6.createElement("div", null, /* @__PURE__ */ React6.createElement("span", {
        className: `CodeBlock__LineNo pl-1 ${props.data.shouldDisplayLineNumber ? "visible" : "invisible"}`,
        style: { position: "sticky" }
      }, i + 1)), /* @__PURE__ */ React6.createElement("div", {
        className: ""
      }, line.map((token, key) => {
        const { className: className2, ...restProps2 } = getTokenProps({
          token,
          key
        });
        return /* @__PURE__ */ React6.createElement("span", {
          key,
          ...restProps2,
          className: `${className2} CodeBlock__Token--smol-tab`
        });
      })));
    })));
  }));
};
var CodeBlock_default2 = CodeBlock;

// app/components/Contentful/Heading/HeadingFive.tsx
init_react();
var React7 = __toModule(require_react());
var HeadingFive = (props) => {
  return /* @__PURE__ */ React7.createElement("h6", {
    className: `BlogPost__HeadingFive text-xl custom2:text-2xl text-post-bodyTextLg mt-2 mb-1 font-medium`
  }, props.children);
};
var HeadingFive_default = HeadingFive;

// app/components/Contentful/Heading/HeadingOne.tsx
init_react();
var React8 = __toModule(require_react());
var HeadingOne = (props) => {
  const { theme: theme4 } = useTheme();
  return /* @__PURE__ */ React8.createElement("h2", {
    className: `BlogPost__HeadingOne text-4xl xs:text-5xl custom2:text-6xl mb-5 mt-5 font-medium ${theme4 === SupportedTheme.LIGHT ? "text-emerald-500" : "text-teal-400"}`
  }, props.children);
};
var HeadingOne_default = HeadingOne;

// app/components/Contentful/Heading/HeadingTwo.tsx
init_react();
var React9 = __toModule(require_react());
var HeadingTwo = (props) => {
  return /* @__PURE__ */ React9.createElement("h3", {
    className: "BlogPost__HeadingTwo text-3xl xs:text-4xl custom2:text-[2.5rem] mt-8 mb-5 text-post-bodyTextLg"
  }, props.children);
};
var HeadingTwo_default = HeadingTwo;

// app/components/Contentful/Heading/HeadingThree.tsx
init_react();
var React10 = __toModule(require_react());
var HeadingThree = (props) => {
  const { theme: theme4 } = useTheme();
  return /* @__PURE__ */ React10.createElement("h4", {
    className: `BlogPost__HeadingThree text-2xl font-medium xs:font-normal xs:text-3xl custom2:text-4xl leading-10 mb-5 mt-10 ${theme4 === SupportedTheme.LIGHT ? "text-sky-600" : "text-sky-400"}`
  }, props.children);
};
var HeadingThree_default = HeadingThree;

// app/components/Contentful/Heading/HeadingFour.tsx
init_react();
var React11 = __toModule(require_react());
var HeadingFour = (props) => {
  const { theme: theme4 } = useTheme();
  return /* @__PURE__ */ React11.createElement("h5", {
    className: `BlogPost__HeadingFour text-2xl xs:text-3xl mt-10 ${theme4 === SupportedTheme.LIGHT ? "text-purple-500" : "text-fuchsia-400"} font-medium`
  }, props.children);
};
var HeadingFour_default = HeadingFour;

// app/components/Contentful/Heading/HeadingSix.tsx
init_react();
var React12 = __toModule(require_react());
var HeadingSix = (props) => {
  return /* @__PURE__ */ React12.createElement("p", {
    className: `font-bold text-xl mb-5 mt-10 xs:font-medium`
  }, props.children);
};
var HeadingSix_default = HeadingSix;

// app/components/Contentful/StickyNote/StickyNote.tsx
init_react();
var React15 = __toModule(require_react());
var import_rich_text_react_renderer = __toModule(require_rich_text_react_renderer_es5());

// app/contentful/richTextMarkdownForStickies.tsx
init_react();
var import_react2 = __toModule(require_react());
var import_rich_text_types = __toModule(require_dist());

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
    /* @__PURE__ */ React.createElement("span", {
      key: matches[1],
      ...restProps,
      style: {
        color: "#000000",
        backgroundColor: `${matches[2] !== void 0 && contentfulHighlights[matches[2]]}`
      }
    }, matches[1]),
    content[1]
  ];
};
var contentfulHighlights = {
  blue: TEXT_HIGHLIGHT.BLUE,
  yellow: TEXT_HIGHLIGHT.YELLOW,
  green: TEXT_HIGHLIGHT.GREEN,
  red: TEXT_HIGHLIGHT.RED,
  orange: TEXT_HIGHLIGHT.ORANGE,
  pink: TEXT_HIGHLIGHT.PINK,
  purple: TEXT_HIGHLIGHT.PURPLE
};

// app/components/Contentful/Illustration/Illustration.tsx
init_react();
var React13 = __toModule(require_react());
var Illustration = (props) => {
  const { theme: theme4 } = useTheme();
  const lightModeIllustrationImageSrc = "https://" + props.rawData.lightIllustration.fields.file.url.split("//")[1];
  const darkModeIllustrationImageSrc = "https://" + props.rawData.darkIllustration.fields.file.url.split("//")[1];
  const imageSrc = theme4 === SupportedTheme.DARK ? darkModeIllustrationImageSrc : lightModeIllustrationImageSrc;
  const padding = props.location === "inside sticky" ? "pt-3 pb-2" : "";
  return /* @__PURE__ */ React13.createElement("div", {
    className: `Illustration__Container rounded-lg ${padding}`
  }, /* @__PURE__ */ React13.createElement("a", {
    href: imageSrc,
    target: "_blank"
  }, /* @__PURE__ */ React13.createElement("img", {
    title: "Illustration for " + props.rawData.illustrationName,
    src: imageSrc,
    alt: "Illustration for " + props.rawData.illustrationName,
    className: "Illustration__Image rounded-lg p-4",
    style: {
      backgroundColor: `${theme4 === SupportedTheme.LIGHT ? "#ffffff" : "#0e0e0e"}`
    }
  })));
};
var Illustration_default = Illustration;

// app/contentful/richTextMarkdownForStickies.tsx
var stickyOptions = {
  renderMark: {
    [import_rich_text_types.MARKS.BOLD]: (text) => {
      const { theme: theme4 } = useTheme();
      return /* @__PURE__ */ import_react2.default.createElement("span", {
        className: `bold font-bold opacity-90 ${theme4 === SupportedTheme.LIGHT ? "text-black" : "text-white"}`
      }, addColour([text]));
    },
    [import_rich_text_types.MARKS.ITALIC]: (text) => {
      return /* @__PURE__ */ import_react2.default.createElement("span", {
        className: "italic"
      }, text);
    },
    [import_rich_text_types.MARKS.UNDERLINE]: (text) => {
      return /* @__PURE__ */ import_react2.default.createElement("span", {
        className: `custom-underline`
      }, text);
    },
    [import_rich_text_types.MARKS.CODE]: (children) => {
      return /* @__PURE__ */ import_react2.default.createElement("code", {
        className: "BlogPost__Paragraph__Code inline-flex font-medium"
      }, children);
    }
  },
  renderNode: {
    [import_rich_text_types.INLINES.HYPERLINK]: (node, children) => {
      const { theme: theme4 } = useTheme();
      return /* @__PURE__ */ import_react2.default.createElement("a", {
        className: `BlogPost__HyperLink ${theme4 === SupportedTheme.DARK ? "text-cyan-200 hover:text-white" : "text-cyan-700 hover:text-black"}`,
        href: node.data.uri
      }, children);
    },
    [import_rich_text_types.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(EntryHyperLink_default, {
      node
    }, children),
    [import_rich_text_types.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(import_react2.default.Fragment, null, children),
    [import_rich_text_types.BLOCKS.PARAGRAPH]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("p", {
      className: "Sticky__Paragraph"
    }, addColour(children)),
    [import_rich_text_types.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingThree_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingFour_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingFive_default, null, children),
    [import_rich_text_types.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ import_react2.default.createElement(HeadingSix_default, null, children),
    [import_rich_text_types.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("ol", {
      className: "list-decimal"
    }, children),
    [import_rich_text_types.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("ul", {
      className: "list-disc"
    }, children),
    [import_rich_text_types.BLOCKS.LIST_ITEM]: (node, children) => {
      return /* @__PURE__ */ import_react2.default.createElement("li", {
        className: "inline-flex list-item leading-8 ml-10"
      }, children);
    },
    [import_rich_text_types.BLOCKS.HR]: (node) => /* @__PURE__ */ import_react2.default.createElement("div", {
      className: "spacer-div h-7"
    }),
    [import_rich_text_types.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;
      switch (contentModel) {
        case "illustration":
          const illustrationData = node.data.target.fields;
          return /* @__PURE__ */ import_react2.default.createElement(Illustration_default, {
            rawData: illustrationData,
            location: "inside sticky"
          });
        default:
          return /* @__PURE__ */ import_react2.default.createElement("p", {
            className: "text-rose-500"
          }, "Error loading asset entry");
      }
    },
    [import_rich_text_types.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description;
      return /* @__PURE__ */ import_react2.default.createElement(ImageMedia_default2, {
        src: node.data.target.fields.file.url,
        alt: node.data.target.fields.description,
        description: maybeDescription ? maybeDescription : void 0
      });
    },
    [import_rich_text_types.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("div", null, children),
    [import_rich_text_types.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ import_react2.default.createElement("div", null, children)
  }
};

// app/components/Contentful/StickyNote/StickyNote.tsx
var StickyNote = (props) => {
  const stickyColorCode = props.stickyData.stickyColor;
  const stickyBgColor = contentfulStickyBackgrounds[stickyColorCode];
  const stickyBorderColor = contentfulStickyBorders[stickyColorCode];
  const body = (0, import_rich_text_react_renderer.documentToReactComponents)(props.stickyData.stickyBodyRichText, stickyOptions);
  return /* @__PURE__ */ React15.createElement("div", {
    className: "Sticky__Container mt-4 px-5 pt-2 pb-3 rounded-r-xl",
    style: {
      borderLeft: `solid 6px ${stickyBorderColor}`,
      backgroundColor: `${stickyBgColor}`,
      color: `${stickyBorderColor}`
    }
  }, props.stickyData.shouldDisplayTitle ? /* @__PURE__ */ React15.createElement("p", {
    className: "Sticky__Title font-extrabold tracking-wide mb-1"
  }, props.stickyData.stickyTitle) : null, /* @__PURE__ */ React15.createElement("div", {
    className: "Sticky__Body font-medium"
  }, body));
};
var StickyNote_default = StickyNote;
var contentfulStickyBackgrounds = {
  yellow: STICKY_HIGHLIGHT.YELLOW,
  blue: STICKY_HIGHLIGHT.BLUE,
  pink: STICKY_HIGHLIGHT.PINK,
  green: STICKY_HIGHLIGHT.GREEN,
  orange: STICKY_HIGHLIGHT.ORANGE,
  purple: STICKY_HIGHLIGHT.PURPLE,
  red: STICKY_HIGHLIGHT.RED
};
var contentfulStickyBorders = {
  yellow: STICKY_BORDER.YELLOW,
  blue: STICKY_BORDER.BLUE,
  pink: STICKY_BORDER.PINK,
  green: STICKY_BORDER.GREEN,
  orange: STICKY_BORDER.ORANGE,
  purple: STICKY_BORDER.PURPLE,
  red: STICKY_BORDER.RED
};

// app/contentful/defaultRichTextMarkdown.tsx
var options = {
  renderMark: {
    [import_rich_text_types2.MARKS.BOLD]: (text) => /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "bold font-bold text-post-bodyTextLg"
    }, addColour([text])),
    [import_rich_text_types2.MARKS.ITALIC]: (text) => /* @__PURE__ */ import_react3.default.createElement("span", {
      className: "italic text-post-bodyTextLg"
    }, text),
    [import_rich_text_types2.MARKS.UNDERLINE]: (text) => {
      const [className, setClassName] = import_react3.default.useState("");
      function randomUnderlinedColor() {
        const underlinedColorClassNames = [
          "custom-underline--yellow",
          "custom-underline--green",
          "custom-underline--red"
        ];
        const randomColor = underlinedColorClassNames[Math.floor(Math.random() * underlinedColorClassNames.length)];
        setClassName(randomColor !== void 0 ? randomColor : "custom-underline--yellow");
      }
      import_react3.default.useEffect(() => randomUnderlinedColor(), [className]);
      return /* @__PURE__ */ import_react3.default.createElement("span", {
        className: `custom-underline text-post-bodyTextLg ${className}`
      }, text);
    },
    [import_rich_text_types2.MARKS.CODE]: (children) => {
      return /* @__PURE__ */ import_react3.default.createElement("code", {
        className: "BlogPost__Paragraph__Code inline-flex font-medium"
      }, children);
    }
  },
  renderNode: {
    [import_rich_text_types2.INLINES.HYPERLINK]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HyperLink_default, {
      url: node.data.uri
    }, children),
    [import_rich_text_types2.INLINES.ENTRY_HYPERLINK]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(EntryHyperLink_default, {
      node
    }, children),
    [import_rich_text_types2.BLOCKS.DOCUMENT]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(import_react3.default.Fragment, null, children),
    [import_rich_text_types2.BLOCKS.PARAGRAPH]: (node, children) => {
      return /* @__PURE__ */ import_react3.default.createElement("p", {
        className: "BlogPost__Paragraph text-lg relative z-10"
      }, addColour(children));
    },
    [import_rich_text_types2.BLOCKS.HEADING_1]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingOne_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_2]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingTwo_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_3]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingThree_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_4]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingFour_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_5]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingFive_default, null, children),
    [import_rich_text_types2.BLOCKS.HEADING_6]: (node, children) => /* @__PURE__ */ import_react3.default.createElement(HeadingSix_default, null, children),
    [import_rich_text_types2.BLOCKS.OL_LIST]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("ol", {
      className: "ml-12 mb-8 list-decimal"
    }, children),
    [import_rich_text_types2.BLOCKS.UL_LIST]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("ul", {
      className: "list-disc ml-10"
    }, children),
    [import_rich_text_types2.BLOCKS.LIST_ITEM]: (node, children) => {
      return /* @__PURE__ */ import_react3.default.createElement("li", {
        className: "List__Item text-xl list-item leading-8"
      }, children);
    },
    [import_rich_text_types2.BLOCKS.HR]: (node) => /* @__PURE__ */ import_react3.default.createElement("div", {
      className: "spacer-div h-7"
    }),
    [import_rich_text_types2.BLOCKS.QUOTE]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("blockquote", null, children),
    [import_rich_text_types2.BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
      const contentModel = node.data.target.sys.contentType.sys.id;
      switch (contentModel) {
        case "quote":
          const quoteData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement(BlockQuote_default2, {
            quoteData
          });
        case "table":
          const tableData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement("div", {
            className: "table-container text-lg mt-5 mb-10 text-left mx-auto w-full",
            dangerouslySetInnerHTML: { __html: tableData.tableMarkdown }
          });
        case "illustration":
          const illustrationData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement(Illustration_default, {
            rawData: illustrationData,
            location: "outside sticky"
          });
        case "rawVideoHtml":
          const videoMarkupData = node.data.target.fields;
          const videoMarkup = videoMarkupData.rawHtmlMarkup;
          return /* @__PURE__ */ import_react3.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: videoMarkup }
          });
        case "blogPost":
          const post = node.data.target.fields;
          const tags = node.data.target.metadata.tags;
          return /* @__PURE__ */ import_react3.default.createElement("a", {
            href: `/blog/${post.blogPostSlug}`,
            className: "flex flex-col custom2:flex-row w-full EmbeddedEntry_BlogPost_Card mt-4 px-5 pt-5 custom2:p-5 rounded-lg",
            key: post.blogPostSlug
          }, /* @__PURE__ */ import_react3.default.createElement("img", {
            src: post.blogPostSplash.fields.file.url,
            alt: post.blogPostSplash.fields.title,
            title: post.blogPostSplash.fields.title,
            className: "object-cover w-full mb-2 custom2:mb-0 custom2:max-w-[240px] custom2:mr-5 rounded-lg"
          }), /* @__PURE__ */ import_react3.default.createElement("div", {
            className: "flex flex-col items-baseline justify-between"
          }, /* @__PURE__ */ import_react3.default.createElement("span", {
            className: "text-xl mb-2 text-blog-lgText font-bold"
          }, post.blogPostTitle), /* @__PURE__ */ import_react3.default.createElement("p", {
            className: "text-base text-gray-400"
          }, post.blogPostExcerpt), /* @__PURE__ */ import_react3.default.createElement(BlogPostTags_default, {
            tags
          })));
        case "codeBlock":
          const codeBlockData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement(CodeBlock_default2, {
            data: codeBlockData
          });
        case "stickyNote":
          const noteData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement(StickyNote_default, {
            stickyData: noteData
          });
        case "gif":
          const gifData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: gifData.gifMarkup }
          });
        case "codeSandbox":
          const sandboxData = node.data.target.fields;
          return /* @__PURE__ */ import_react3.default.createElement("div", {
            className: "BlogPost__SandBox__Container mt-5"
          }, /* @__PURE__ */ import_react3.default.createElement("div", {
            dangerouslySetInnerHTML: { __html: sandboxData.rawMarkup }
          }));
        default:
          return /* @__PURE__ */ import_react3.default.createElement("p", {
            className: "text-base text-rose-500"
          }, "Error loading asset entry");
      }
    },
    [import_rich_text_types2.BLOCKS.EMBEDDED_ASSET]: (node, children) => {
      const assetType = node.data.target.fields.file.contentType;
      const maybeDescription = node.data.target.fields.description;
      switch (assetType) {
        case "video/mp4":
          return /* @__PURE__ */ import_react3.default.createElement("video", {
            width: "100%",
            height: "100%",
            controls: true
          }, /* @__PURE__ */ import_react3.default.createElement("source", {
            src: node.data.target.fields.file.url,
            type: "video/mp4"
          }));
        case "image/jpeg":
        case "image/svg+xml":
        case "image/gif":
        case "image/png":
          return /* @__PURE__ */ import_react3.default.createElement(ImageMedia_default2, {
            src: node.data.target.fields.file.url,
            alt: node.data.target.fields.title,
            description: maybeDescription ? maybeDescription : void 0
          });
        default:
          return /* @__PURE__ */ import_react3.default.createElement(ImageMedia_default2, {
            src: node.data.target.fields.file.url,
            alt: node.data.target.fields.title,
            description: maybeDescription ? maybeDescription : void 0
          });
      }
    },
    [import_rich_text_types2.BLOCKS.TABLE]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("table", null, /* @__PURE__ */ import_react3.default.createElement("tbody", null, children)),
    [import_rich_text_types2.BLOCKS.TABLE_ROW]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("tr", null, children),
    [import_rich_text_types2.BLOCKS.TABLE_CELL]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("td", null, children),
    [import_rich_text_types2.BLOCKS.TABLE_HEADER_CELL]: (node, children) => /* @__PURE__ */ import_react3.default.createElement("thead", null, children)
  }
};

// app/styles/blogpost.css
var blogpost_default = "/build/_assets/blogpost-F5L2FXAW.css";

// app/components/BlogPost/AuthorSection/AuthorSection.tsx
init_react();
var React17 = __toModule(require_react());
var AuthorSection = ({}) => {
  const { theme: theme4 } = useTheme();
  const borderColor = theme4 === SupportedTheme.LIGHT ? "border-gray-400" : "border-gray-200";
  return /* @__PURE__ */ React17.createElement("div", {
    className: `BlogPost__AuthorSection__Container border-t-2 ${borderColor} flex m-auto flex-col items-center justify-center sm:grid-cols-4 sm:gap-10 py-10`
  }, /* @__PURE__ */ React17.createElement("img", {
    src: "/images/author.jpg",
    alt: "My portrait picture",
    className: "BlogPost__AuthorSection__AuthorAvatar rounded-full mb-7 sm:mb-0 w-56",
    title: "My portrait picture"
  }), /* @__PURE__ */ React17.createElement("div", {
    className: "BlogPost__AuthorSection__Biography flex flex-col items-start justify-start sm:col-span-3"
  }, /* @__PURE__ */ React17.createElement("p", {
    className: "font-medium text-2xl mb-4 xs:mb-2 text-post-bodyTextLg"
  }, "Written by Alissa Nguyen"), /* @__PURE__ */ React17.createElement("a", {
    href: "https://twitter.com/alissang_dev?ref_src=twsrc%5Etfw",
    className: "twitter-follow-button",
    "data-size": "large",
    "aria-label": "Follow me on Twitter",
    "data-show-screen-name": "false",
    "data-show-count": "false"
  }, "Follow"), /* @__PURE__ */ React17.createElement("p", {
    className: "text-lg mt-7"
  }, "Alissa Nguyen is a software engineer with main focus is on building better software with latest technologies and frameworks such as Remix, React, and TailwindCSS. She is currently working on some side projects, exploring her hobbies, and living with her two kitties."), /* @__PURE__ */ React17.createElement("a", {
    href: "/",
    className: "mt-7 inline-flex items-center justify-start text-post-bodyTextLg"
  }, /* @__PURE__ */ React17.createElement("p", {
    className: "text-xl mr-5"
  }, "Learn more about me"), /* @__PURE__ */ React17.createElement(ArrowRightIcon_default, {
    className: "h-10 mr-4 rounded-full border-2 p-2 hover:border-gray-700 transition-all duration-120"
  }))));
};
var AuthorSection_default = AuthorSection;

// app/components/BlogPost/RelatedPostsSection/RelatedPostsSection.tsx
init_react();
var React19 = __toModule(require_react());

// app/components/BlogPost/RelatedPostsSection/RelatedPostCard.tsx
init_react();
var React18 = __toModule(require_react());
var RelatedPostCard = (props) => {
  const rawDateData = new Date(props.post.sys.updatedAt).toDateString();
  const date = rawDateData.substring(rawDateData.indexOf(" ") + 1);
  const tags = props.post.metadata.tags;
  return /* @__PURE__ */ React18.createElement("div", {
    className: "RelatedBlogPost__Card__Container"
  }, /* @__PURE__ */ React18.createElement("a", {
    href: `/blog/${props.post.fields.blogPostSlug}`,
    className: "RelatedBlogPost__Link__Container h-full rounded-lg"
  }, /* @__PURE__ */ React18.createElement("img", {
    src: props.post.fields.blogPostSplash.fields.file.url,
    alt: props.post.fields.blogPostSplash.fields.title,
    title: props.post.fields.blogPostSplash.fields.title,
    className: "RelatedBlogPost__Image rounded-lg w-full h-80",
    loading: "lazy"
  })), /* @__PURE__ */ React18.createElement("div", {
    className: "flex flex-col"
  }, /* @__PURE__ */ React18.createElement("span", {
    className: "inline-flex text-xl md:text-2xl text-gray-400 font-bold mt-2 mb-3"
  }, date, " \u2014 5 min read"), /* @__PURE__ */ React18.createElement("span", {
    className: "RelatedBlogPost__Title text-blog-lgText font-bold text-2xl md:text-3xl"
  }, props.post.fields.blogPostTitle), /* @__PURE__ */ React18.createElement("div", null, /* @__PURE__ */ React18.createElement(BlogPostTags_default, {
    tags
  }))));
};
var RelatedPostCard_default = RelatedPostCard;

// app/components/BlogPost/RelatedPostsSection/RelatedPostsSection.tsx
var RelatedPostsSection = (props) => {
  return /* @__PURE__ */ React19.createElement("div", {
    className: `${fixedWidthLayoutClasses} max-w-[1000px] pt-20 pb-20 sm:pb-32 lg:pb-44`
  }, /* @__PURE__ */ React19.createElement("div", {
    className: "flex flex-col items-start justify-center text-3xl mb-10"
  }, /* @__PURE__ */ React19.createElement("p", {
    className: "text-post-bodyTextLg text-5xl font-medium mb-5"
  }, "If you found this article helpful."), /* @__PURE__ */ React19.createElement("p", {
    className: "text-post-bodyText text-4xl"
  }, "You will love these ones as well.")), /* @__PURE__ */ React19.createElement("div", {
    className: "RelatedBlogPosts__Wrapper grid gap-10 sm:gap-y-20 md:grid-cols-2 lg:grid-cols-3 list-none"
  }, props.relatedPosts.map((post) => /* @__PURE__ */ React19.createElement("li", {
    key: post.sys.id ? post.sys.id : post.fields.blogPostTitle,
    className: "RelatedBlogPost__Container"
  }, /* @__PURE__ */ React19.createElement(RelatedPostCard_default, {
    post
  })))));
};
var RelatedPostsSection_default = RelatedPostsSection;

// app/components/FloatingHeader/FloatingHeader.tsx
init_react();

// app/components/FloatingHeader/FloatingHeader.css
var FloatingHeader_default = "/build/_assets/FloatingHeader-VG2BC7U7.css";

// app/components/FloatingHeader/FloatingHeader.tsx
var React22 = __toModule(require_react());

// app/components/FloatingHeader/ShareSection.tsx
init_react();
var React20 = __toModule(require_react());
var ShareSection = (props) => {
  const tweetMsg = `I just read ${props.title} by @alissa_nguyen14

`;
  const twitterShareHref = `https://twitter.com/intent/tweet?hashtags=programming%2Cblog&original_referer=https%3A%2F%2Fwww.alissanguyen.dev%2F&related=alissa_nguyen14&text=${tweetMsg}%0A%0A&url=https%3A%2F%2Fwww.alissanguyen.dev%2Fblog%2F${props.slug}%2F`;
  const facebookShareHref = "https://www.facebook.com/sharer/sharer.php?u=https://www.alissanguyen.dev/blog/" + props.slug;
  const linkedinShareHref = "https://www.linkedin.com/shareArticle?mini=true&url=https://www.alissanguyen.dev/blog/" + props.slug + "&title=" + props.title;
  return /* @__PURE__ */ React20.createElement("div", {
    className: "floating-header-share"
  }, /* @__PURE__ */ React20.createElement("div", {
    className: "floating-header-share-label hidden custom:flex mr-2 font-medium items-center text-post-bodyTextLg"
  }, "Share this"), /* @__PURE__ */ React20.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: "ionicon inline-flex items-center h-6 mr-3 mt-1 text-post-bodyTextLg",
    viewBox: "0 0 512 512"
  }, /* @__PURE__ */ React20.createElement("circle", {
    cx: "128",
    cy: "256",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React20.createElement("circle", {
    cx: "384",
    cy: "112",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React20.createElement("circle", {
    cx: "384",
    cy: "400",
    r: "48",
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32"
  }), /* @__PURE__ */ React20.createElement("path", {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "32",
    d: "M169.83 279.53l172.34 96.94M342.17 135.53l-172.34 96.94"
  })), /* @__PURE__ */ React20.createElement("a", {
    className: "floating-header-share-tw",
    href: twitterShareHref,
    target: "_blank"
  }, /* @__PURE__ */ React20.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React20.createElement("path", {
    d: "M30.063 7.313c-.813 1.125-1.75 2.125-2.875 2.938v.75c0 1.563-.188 3.125-.688 4.625a15.088 15.088 0 0 1-2.063 4.438c-.875 1.438-2 2.688-3.25 3.813a15.015 15.015 0 0 1-4.625 2.563c-1.813.688-3.75 1-5.75 1-3.25 0-6.188-.875-8.875-2.625.438.063.875.125 1.375.125 2.688 0 5.063-.875 7.188-2.5-1.25 0-2.375-.375-3.375-1.125s-1.688-1.688-2.063-2.875c.438.063.813.125 1.125.125.5 0 1-.063 1.5-.25-1.313-.25-2.438-.938-3.313-1.938a5.673 5.673 0 0 1-1.313-3.688v-.063c.813.438 1.688.688 2.625.688a5.228 5.228 0 0 1-1.875-2c-.5-.875-.688-1.813-.688-2.75 0-1.063.25-2.063.75-2.938 1.438 1.75 3.188 3.188 5.25 4.25s4.313 1.688 6.688 1.813a5.579 5.579 0 0 1 1.5-5.438c1.125-1.125 2.5-1.688 4.125-1.688s3.063.625 4.188 1.813a11.48 11.48 0 0 0 3.688-1.375c-.438 1.375-1.313 2.438-2.563 3.188 1.125-.125 2.188-.438 3.313-.875z"
  }))), /* @__PURE__ */ React20.createElement("a", {
    className: "floating-header-share-fb",
    href: facebookShareHref,
    target: "_blank",
    rel: "nofollow",
    "data-size": "large"
  }, /* @__PURE__ */ React20.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React20.createElement("path", {
    d: "M19 6h5V0h-5c-3.86 0-7 3.14-7 7v3H8v6h4v16h6V16h5l1-6h-6V7c0-.542.458-1 1-1z"
  }))), /* @__PURE__ */ React20.createElement("a", {
    className: "floating-header-share-linkedin",
    href: linkedinShareHref,
    target: "_blank",
    rel: "noopener noreferrer"
  }, /* @__PURE__ */ React20.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    className: "floating-header-share-svg"
  }, /* @__PURE__ */ React20.createElement("path", {
    d: "M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
  }))));
};
var ShareSection_default = ShareSection;

// app/components/FloatingHeader/ProgressBar.tsx
init_react();
var React21 = __toModule(require_react());
var ProgressBar = ({ progress }) => {
  return /* @__PURE__ */ React21.createElement("div", {
    className: `scroll-line`,
    style: {
      width: `${progress}%`
    },
    id: "scroll-line"
  });
};
var ProgressBar_default = ProgressBar;

// app/components/FloatingHeader/FloatingHeader.tsx
var links4 = () => {
  return [{ rel: "stylesheet", href: FloatingHeader_default }];
};
var FloatingHeader = (props) => {
  const [shouldShowFloatingHeader, setShouldShowFloatingHeader] = React22.useState(false);
  const [progress, setProgress] = React22.useState(0);
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
  React22.useEffect(() => {
    fillScrollLine();
    window.addEventListener("scroll", fillScrollLine);
    return () => {
      window.removeEventListener("scroll", fillScrollLine);
    };
  }, []);
  return /* @__PURE__ */ React22.createElement("div", {
    className: `floating-header text-xl ${shouldShowFloatingHeader ? "floating-active" : ""}`,
    id: "Floating__Header"
  }, /* @__PURE__ */ React22.createElement("div", {
    className: "floating-header-logo font-medium ml-4 text-post-bodyTextLg"
  }, /* @__PURE__ */ React22.createElement("a", {
    href: "https://www.alissanguyen.dev/blog"
  }, /* @__PURE__ */ React22.createElement("span", {
    className: "hidden xs:flex"
  }, "Alissa Nguyen's Blog"), /* @__PURE__ */ React22.createElement("div", {
    className: "FloatingHeader__GoBackButton inline-flex items-center justify-center xs:hidden font-normal pl-2"
  }, /* @__PURE__ */ React22.createElement(BsFillArrowLeftCircleFill, {
    className: "FloatingHeader__GoBackArrowSVG w-5 mr-2"
  }), /* @__PURE__ */ React22.createElement("span", {
    className: "FloatingHeader__GoBackLabel text-lg pb-1"
  }, "Back")))), /* @__PURE__ */ React22.createElement("span", {
    className: "floating-header-divider text-post-bodyTextLg"
  }, "\u2014"), /* @__PURE__ */ React22.createElement("div", {
    className: "floating-header-title font-medium"
  }, props.postTitle), /* @__PURE__ */ React22.createElement(ProgressBar_default, {
    progress
  }), /* @__PURE__ */ React22.createElement(SimplifiedThemeButton, null), /* @__PURE__ */ React22.createElement(ShareSection_default, {
    title: props.postTitle,
    slug: props.postSlug
  }));
};
var calculateShouldShowFloatingHeader = (amountScrolledInPixels, containerHeightInPixels) => {
  return amountScrolledInPixels >= containerHeightInPixels;
};
var FloatingHeader_default2 = FloatingHeader;

// app/routes/blog/$slug.tsx
var links5 = () => {
  return [
    {
      rel: "stylesheet",
      href: blogpost_default
    },
    ...links(),
    ...links2(),
    ...links3(),
    ...links4()
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
var Post = ({}) => {
  const { blogPost, blogPosts } = useLoaderData();
  const { theme: theme4 } = useTheme();
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
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, /* @__PURE__ */ React23.createElement(FloatingHeader_default2, {
    postSlug: blogPost.fields.blogPostSlug,
    postTitle: blogPost.fields.blogPostTitle
  }), /* @__PURE__ */ React23.createElement("div", {
    className: "text-post-bodyText"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: `${fixedWidthLayoutClasses} flex flex-col mb-5 xl:mb-10`
  }, /* @__PURE__ */ React23.createElement("a", {
    href: "/blog",
    className: "go-back-btn inline-flex border-none items-center justify-start text-xl mb-10 hover:text-post-bodyTextLg duration-100 ease-in w-fit"
  }, /* @__PURE__ */ React23.createElement("img", {
    src: theme4 === SupportedTheme.DARK ? "/svg/arrow.svg" : "/svg/arrowDark.svg",
    className: "go-back-arrow w-6 rounded-full mr-2 hover:text-post-bodyTextLg",
    alt: "go back",
    title: "Back"
  }), "Go back"), /* @__PURE__ */ React23.createElement("h1", {
    className: "BlogPost__Title text-4xl text-post-bodyTextLg xs:text-5xl font-bold"
  }, blogPost.fields.blogPostTitle), /* @__PURE__ */ React23.createElement("div", {
    className: "w-full flex flex-col custom2:flex-row custom2:justify-between custom2:items-center mt-2 mx-auto max-w-[700px]"
  }, /* @__PURE__ */ React23.createElement("p", {
    className: "BlogPost__DatePublish text-xl mb-2 custom2:mb-0"
  }, "Published on ", subPublishedDate), /* @__PURE__ */ React23.createElement("p", {
    className: "BlogPost__DatePublish text-xl"
  }, "Last updated on ", subUpdatedDate))), /* @__PURE__ */ React23.createElement("img", {
    src: "https://" + blogPost.fields.blogPostSplash.fields.file.url,
    className: "BlogPost__SplashImage max-w-[1200px] mb-5 xl:mb-10 mx-auto rounded-lg w-[83%] custom3:w-[85%] xs:w-[90%] xl:w-full",
    alt: blogPost.fields.blogPostSplash.fields.title,
    title: blogPost.fields.blogPostSplash.fields.title
  }), /* @__PURE__ */ React23.createElement("div", {
    className: `BlogPost text-post-bodyText ${fixedWidthLayoutClasses} mb-20`
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "Translation__Section flex flex-col sm:flex-row sm:items-center self-baseline text-base sm:text-lg gap-5"
  }, blogPostTranslation.length > 1 ? /* @__PURE__ */ React23.createElement("div", {
    className: "flex flex-row items-center gap-3 sm:gap-5"
  }, blogPostTranslation.map((translation) => {
    if (translation.data.target !== void 0) {
      console.log(translation.data.target.fields, "HELLO");
      const translationData = translation.data.target.fields;
      const language = translationData.language;
      const translationLink = translationData.linkToTranslation;
      return /* @__PURE__ */ React23.createElement("a", {
        target: "_blank",
        href: translationLink,
        className: `translation-button px-4 pt-2 pb-3 sm:px-5 sm:pt-3 sm:pb-4 ${theme4 === SupportedTheme.LIGHT ? "bg-gray-100 text-black" : "bg-zinc-700 text-white"} rounded-full w-fit`
      }, language);
    }
    return null;
  })) : /* @__PURE__ */ React23.createElement("div", {
    className: "BlogPost__TranslationSection flex flex-col custom3:flex-row justify-start text-post-bodyText"
  }, /* @__PURE__ */ React23.createElement("span", {
    className: "italic mr-10"
  }, "No translation available.")), /* @__PURE__ */ React23.createElement("a", {
    className: "AddTranslation__Button font-medium underlined w-fit text-lg sm:text-xl",
    href: "https://github.com/alissanguyen/alissanguyen-dot-dev/blob/main/CONTRIBUTING.md",
    target: "_blank"
  }, "Add translation")), /* @__PURE__ */ React23.createElement("div", {
    className: "BlogPost__BodyWrapper mt-10 custom3:mt-16"
  }, blogPostBody), /* @__PURE__ */ React23.createElement("div", {
    className: "flex flex-col lg:flex-row lg:justify-between my-16"
  }, /* @__PURE__ */ React23.createElement("div", {
    className: "text-base mb-16 lg:mb-0"
  }, /* @__PURE__ */ React23.createElement("span", {
    className: "text-lg font-medium"
  }, "Tags:"), " ", blogPost.metadata.tags.map((tag) => /* @__PURE__ */ React23.createElement(TagBadge, {
    tag,
    theme: theme4
  })))), /* @__PURE__ */ React23.createElement(AuthorSection_default, null)), /* @__PURE__ */ React23.createElement("hr", null), blogPostWithAtLeastOneSharedTag.length > 0 && /* @__PURE__ */ React23.createElement(RelatedPostsSection_default, {
    relatedPosts: blogPostWithAtLeastOneSharedTag
  }), /* @__PURE__ */ React23.createElement("hr", null)));
};
var slug_default = Post;
var TagBadge = (props) => {
  const tagName = tagIdsToDisplayNames[props.tag.sys.id];
  return /* @__PURE__ */ React23.createElement(React23.Fragment, null, props.theme === SupportedTheme.LIGHT ? /* @__PURE__ */ React23.createElement("div", {
    className: "tag-badge bg-gray-600 before:bg-gray-600 hover:bg-gray-900 before:hover:bg-gray-900 text-gray-200 hover:text-white inline-flex items-center"
  }, tagName) : /* @__PURE__ */ React23.createElement("div", {
    className: "tag-badge tag-dark bg-gray-300 before:bg-gray-300 before:hover:bg-white hover:bg-white text-gray-700 hover:text-black inline-flex items-center"
  }, tagName));
};
export {
  slug_default as default,
  links5 as links,
  meta
};
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */
//# sourceMappingURL=/build/routes/blog/$slug-KNCXDXXB.js.map
