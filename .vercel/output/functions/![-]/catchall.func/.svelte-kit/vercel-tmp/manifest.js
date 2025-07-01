export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["3itir.svg","9fbd4972fc0c3ffddfc14a8b901a6aa53a99193c.jpg","android-chrome-192x192.png","android-chrome-512x512.png","animation-star.png","apple-touch-icon.png","Arrow.png","Bell.png","bento card.png","bijli.png","bjli.svg","black.png","Car.png","CaretLeft (2).svg","CaretLeft (3).svg","Database.png","Default.png","Ellipse 1.png","Envelope.png","favicon copy.png","favicon-1.svg","favicon-16x16.png","favicon-32x32.png","favicon.ico","favicon.png","favicon.svg","FileArrowDown.svg","fi_1008958.png","fi_12123759.svg","fi_87925.png","flag.png","flag.svg","Frame 2735.png","Frame 2735.svg","Frame 2741 (1).png","Funnel.png","Gift.png","greenb.png","grr.svg","kora.png","Layer_1.png","leftarrow.png","LockKey.png","Mesaage.png","NL - Netherlands.png","NL - Netherlands.svg","NO HESI (1).svg","NO HESI.svg","nullb.png","ornageb.png","ornge.svg","ortire.svg","Polygon 1.png","Polygon 1.svg","pricing-plans.png","Rectangle 115.png","Right Arrow.png","rings.png","robots.txt","Search.png","Server-button.png","site.webmanifest","sitemap.xml","Star.svg","str.svg","Tick2.png","tier-tag (1).png","tier-tag (2).png","tier-tag (3).png","tier-tag.png","tier0.png","Tier3.png","Tier4.png","upd.png","User.png","Vector (1).svg","Vector (3).svg","Vector.png","Vector.svg","yellob.png","yelo.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".jpg":"image/jpeg",".png":"image/png",".txt":"text/plain",".webmanifest":"application/manifest+json",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BWibS7I5.js",app:"_app/immutable/entry/app.sWJRGRx2.js",imports:["_app/immutable/entry/start.BWibS7I5.js","_app/immutable/chunks/BX655cEg.js","_app/immutable/chunks/C_NSvUt5.js","_app/immutable/entry/app.sWJRGRx2.js","_app/immutable/chunks/C_NSvUt5.js","_app/immutable/chunks/IHki7fMi.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
		],
		routes: [
			{
				id: "/(app)",
				pattern: /^\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/(app)/server",
				pattern: /^\/server\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
