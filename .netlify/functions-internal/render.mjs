import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FRADMCN.ttf","favicon.png","robots.txt"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3de33b41.js","app":"_app/immutable/entry/app.1f6261cd.js","imports":["_app/immutable/entry/start.3de33b41.js","_app/immutable/chunks/index.93769664.js","_app/immutable/chunks/singletons.c9bdcfaa.js","_app/immutable/chunks/index.2d6009d5.js","_app/immutable/entry/app.1f6261cd.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.93769664.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
