# Several examples for Deno native addons

This repo are some personal experiment how to develop the native addon in Deno. I tried two different solutions:

1. N-API: Deno already provide [Node API](https://github.com/denoland/deno/pull/13633) support, so you can directly importing N-API module, it should works in most of the cases. (Just using npm specifier -> `import { transform } from "npm:lightningcss";`)
2. FFI: Foreign Function Interface is the offical feature allowed developer to write the native addon for Deno, you can use any lang you want just need to support C ABIs.
