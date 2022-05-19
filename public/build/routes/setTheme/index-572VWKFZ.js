import {
  import_server_runtime
} from "/build/_shared/chunk-GGSUZKFI.js";
import {
  __commonJS,
  __toModule,
  init_react
} from "/build/_shared/chunk-KQMXGBNO.js";

// empty-module:~/utils/theme.server
var require_theme = __commonJS({
  "empty-module:~/utils/theme.server"(exports, module) {
    init_react();
    module.exports = {};
  }
});

// browser-route-module:/Users/flo/Development/alissanguyen-dot-dev-1/app/routes/setTheme/index.tsx?browser
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
//# sourceMappingURL=/build/routes/setTheme/index-572VWKFZ.js.map
