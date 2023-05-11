export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","FRADMCN.ttf","favicon.png","robots.txt"]),
	mimeTypes: {".ttf":"font/ttf",".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.3de33b41.js","app":"_app/immutable/entry/app.1f6261cd.js","imports":["_app/immutable/entry/start.3de33b41.js","_app/immutable/chunks/index.93769664.js","_app/immutable/chunks/singletons.c9bdcfaa.js","_app/immutable/chunks/index.2d6009d5.js","_app/immutable/entry/app.1f6261cd.js","_app/immutable/chunks/preload-helper.41c905a7.js","_app/immutable/chunks/index.93769664.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/curriculum",
				pattern: /^\/curriculum\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
