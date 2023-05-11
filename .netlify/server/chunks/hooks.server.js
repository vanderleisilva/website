import { x } from "./runtime.esm.js";
const handle = async ({ event, resolve }) => {
  const lang = event.request.headers.get("accept-language")?.split(",")[0];
  if (lang) {
    x.set(lang);
  }
  return resolve(event);
};
export {
  handle
};
