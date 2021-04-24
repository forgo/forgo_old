/// <reference path="./deploy.d.ts" />

import React from "https://esm.sh/react@17.0.2";

// You need to import `h` factory function as Deno Deploy
// uses it instead of `React.createElement`
import { h } from "https://x.lcas.dev/preact@10.5.12/mod.js";
import { renderToString } from "https://x.lcas.dev/preact@10.5.12/ssr.js";

import { App } from "~/app.tsx";

addEventListener("fetch", (event: FetchEvent) => {
  // renderToString generates html string from JSX components.
  const response = new Response(renderToString(<App />), {
    headers: { "content-type": "text/html; charset=uft-8" },
  });

  event.respondWith(response);
});