import {
  import_server_runtime
} from "/build/_shared/chunk-35SD6L7F.js";
import "/build/_shared/chunk-Q6YUKLYO.js";
import {
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-FVSE6P6F.js";

// empty-module:~/utils/theme.server
var require_theme = __commonJS({
  "empty-module:~/utils/theme.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/flo/Development/Webpage/app/routes/setTheme/index.tsx?browser
init_react();

// app/routes/setTheme/index.tsx
init_react();
var import_theme = __toModule(require_theme());
var action = async ({ request }) => {
  const themeSession = await (0, import_theme.getThemeSession)(request);
  const formData = await request.formData();
  const theme = formData.get("theme");
  if (!(0, import_theme.isTheme)(theme)) {
    return (0, import_server_runtime.json)({
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
var loader = async () => {
  return (0, import_server_runtime.redirect)("/", { status: 404 });
};
export {
  action,
  loader
};
//# sourceMappingURL=/build/routes/setTheme/index-EOEBHYBW.js.map
