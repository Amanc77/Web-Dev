import { serve } from "bun";

serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello this is ice tea", { status: 200 });
    } else if (url.pathname === "/lemon-tea") {
      return new Response("Hello this is lemon tea", { status: 200 });
    } else {
      return new Response("404 not found", { status: 404 });
    }
  },

  port: 3000,
  hostname: "127.0.0.2",
});
