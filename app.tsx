// @deno-types="https://esm.sh/react@17.0.2/react.d.ts"


declare namespace JSX {
  interface IntrinsicElements {
    [elemName: string]: any;
  }
}

import React from "react";
export function App() {
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