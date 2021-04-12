import { h } from 'https://esm.sh/preact@10.5.13'
import ReactDOMServer from 'react-dom/server'

function App() {
  return (
    <html>
      <head>
        <title>Hello from JSX</title>
      </head>
      <body>
        <h1>Hello world</h1>
      </body>
    </html>
  );
}

addEventListener("fetch", (event) => {
  // renderToString generates html string from JSX components.
  const response = new Response(ReactDOMServer.renderToString(<App />), {
    headers: { "content-type": "text/html; charset=utf-8" },
  });

  event.respondWith(response);
});