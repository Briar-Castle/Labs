/**
 * Welcome to Cloudflare Workers! This is your first worker.
 *
 * - Run "npm run dev" in your terminal to start a development server
 * - Open a browser tab at http://localhost:8787/ to see your worker in action
 * - Run "npm run deploy" to publish your worker
 *
 * Learn more at https://developers.cloudflare.com/workers/
 */

const projects = {
  "CreatureRegistry": "https://dodo-unique.github.io/CreatureRegistry/",
};

export default {
  async fetch(request) {
    console.log("The request has reached router")
    const url = new URL(request.url);


    const [, project, ...suffix] = url.pathname.split("/");

    const target = projects[project];

    if (!target) {
      console.log("Project not found")
      return new Response("Project not found", { status: 404 });
    }

    const destination = new URL(target);

    destination.pathname =
      destination.pathname.replace(/\/$/, "") +
      "/" +
      suffix.join("/");

    destination.search = url.search;

    return fetch(destination, request);
  },
};