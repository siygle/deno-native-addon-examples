import { transform } from "npm:lightningcss";

const filename = Deno.args[0] || "test.css";

const { code } = transform({
  filename,
  code: Deno.readFileSync(filename),
  minify: true,
  targets: {
    chrome: 95 << 16
  }
});

const decoder = new TextDecoder();
console.log(decoder.decode(code));
