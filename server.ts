import { Application } from "https://deno.land/x/abc/mod.ts";
const app = new Application();
app
    .static("/", "./dist/")
    .start({ port: 8080 });
