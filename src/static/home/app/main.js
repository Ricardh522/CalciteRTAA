define([
	'dijit/registry',
	"dojo/_base/declare",
	"dojo/_base/lang",
	"dojo/_base/unload",
	'dojo/parser',
	'dojo/dom',
	"dojo/dom-style",
	'dojo/dom-construct',
	'dojo/html',
	'dojo/router',
	"dojo/request",
	'dojo/query',
	'dojo/dom-class',
	'dojo/dom-attr',
	'dojo/_base/array',
	'dojo/promise/all',
	'dojo/Deferred',
	'dojo/hash',
	'dojo/topic',
	'dojo/on',
	'app/Card',
	'app/HomepageBanner',
	'app/PageBanner',
	'app/namedFunctions',
	'dojo/text!./ldap.json',
	'dijit/layout/ContentPane'
	], function(
		registry,
		declare,
		lang,
		baseUnload,
		parser,
		dom,
		domStyle,
		domConstruct,
		html,
		router,
		request,
		query,
		domClass,
		domAttr,
		Array,
		all,
		Deferred,
		hash,
		topic,
		on,
		Card,
		HomepageBanner,
		PageBanner,
		namedFunctions,
		ldapConfig,
		ContentPane
		) {

		var unload = function() {
			registry.forEach(function(widget, index, hash) {
				registry.remove(widget);
				domConstruct.destroy(widget.domNode);
			});
		};

		baseUnload.addOnUnload(unload);

		var app = {};
		lang.mixin(app, new namedFunctions());

		var ldap_url = JSON.parse(ldapConfig).url;

		var main_content = new ContentPane({
					id: 'main-content'
				}, 'main-content');
		main_content.startup();

		router.register("home", function(evt) {
			evt.preventDefault();
			console.log('loading ' + evt.newPath);

			app.unloadSection().then(function(e) {
				var pane;
				if (registry.byId('header-pane') === undefined) {
					pane = new ContentPane({
						style: "display: flex",
						id: 'header-pane'
					}, 'headerPane');
					pane.startup();
				} else {
					pane = registry.byId('header-pane');
				}
				
				if (registry.byId('homepage-banner') === undefined) {
					app.header = new HomepageBanner({
						id: 'homepage-banner',
						baseClass: 'sub-nav-title text-white leader-3 trailer-3 animate-fade-in',
						title: 'Reno/Tahoe International Airport GIS Website'
					});
				} else {
					app.header = registry.byId('homepage-banner');
				}

				pane.set('content', app.header);
			}, function(err) {
				console.log(err);
			});
		});

		router.register("gisportal/home", function(evt) {
				evt.preventDefault();
				console.log('loading ' + evt.newPath);

				app.unloadSection().then(function(e) {
					try {
						registry.byId('gisportal-banner').destroyRecursive();
					} catch(err) {
						console.log(err);
					}
					var node = query(".loader")[0];
                  	domClass.add(node, 'is-active');
					// if the user is admin, allow for browse data and backend api
					app.getGroups(ldap_url).then(function(e) {
						var routes;
						domClass.remove(node, 'is-active');
						var test = Array.indexOf(e, 'GIS');
						if (test !== -1) {
							routes = [{
									title: 'Map Viewer',
									href: '/#gisportal/mapviewer'
								}, {
									title: 'Web Mapping Apps',
									href: '/#gisportal/apps'
								}, {
									title: 'AGOL Browser',
									href: '/#gisportal/gis-data-browse'
								}, {
									title: 'Backend Database APIs',
									href: '/#gisportal/backend-apis'
								}];
						} else {
							routes = [{
									title: 'Map Viewer',
									href: '/#gisportal/mapviewer'
								}, {
									title: 'Web Apps',
									href: '/#gisportal/apps'
								}];
						}

						app.header = new PageBanner({
								id: 'gisportal-banner',
								baseClass: 'sub-nav-title text-white page-banner',
								title: 'Geographic Information Systems',
								routes: routes
							});

						
						var pane = registry.byId('header-pane');
						pane.set('content', app.header);
					});

			}, function(err) {
				console.log(err);
			});
		});

		router.register("gisportal/mapviewer", function(evt) {
						evt.preventDefault();
						console.log('loading ' + evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('gisportal-banner') !== undefined) {
								app.header.set('title', 'Map Viewer');
							}
						}, function(err) {
							console.log(err);
						});


		});

		router.register("gisportal/apps", function(evt) {
						evt.preventDefault();
						app.unloadContent().then(function(e) {
							console.log('loading ' + evt.newPath);

							if (registry.byId('gisportal-banner') !== undefined) {
								registry.byId('gisportal-banner').set('title', "Geospatial Applications");
							}

							
							var airspace_app = {
								id: "AirspaceAppCard",
								imgSrc: 'static/home/app/img/thumbnails/airspace_app.png',
								href: 'https://aroragis.maps.arcgis.com/apps/3DScene/index.html?appid=5f7bf59e212c4339a3ffda29315972be',
								header: 'Airspace',
								baseClass: 'card column-3 leader-2 trailer-2',
								contents: 'View and Analyze the data in the airspace of the RTAA Airport'
							};

							var eDoc_app = {
								id: "eDocAppCard",
								imgSrc: 'static/home/app/img/thumbnails/eDoc_app.png',
								href: 'https://gisapps.aroraengineers.com:3344/webappbuilder/apps/2/',
								header: 'eDoc Search Tools',
								baseClass: 'card column-3 leader-2 trailer-2',
								contents: 'Search for documents and images using this map focused search tool'
							};

							var airfield_app = {
								id: "AirfieldAppCard",
								imgSrc: 'static/home/app/img/thumbnails/airfield_app.png',
								href: 'https://rtaa.maps.arcgis.com/apps/webappviewer/index.html?id=ff605fe1a736477fad9b8b22709388d1',
								header: 'Airfield',
								baseClass: 'card column-3 leader-2 trailer-2',
								contents: 'View the Airfield Data'
							};

							var noise_app = {
								id: "NoiseAppCard",
								imgSrc: 'static/home/app/img/thumbnails/NoiseApp.png',
								href: "https://gisapps.aroraengineers.com/bcad-noise-mit/",
								header: 'Noise Mitigation App',
								baseClass: 'card column-3 leader-2 trailer-2',
								contents: 'View noise parcel documents and other Noise Mitigation data'
							};

							app.getGroups(ldap_url).then(function(e) {
								var cards;
								var test = Array.indexOf(e, 'GIS');
								if (test !== -1) {
									cards = [airspace_app, eDoc_app, airfield_app, noise_app];
								} else {
									cards = [airspace_app];
								}
								app.loadCards(Card, cards).then(function(e) {
									console.log(e);
								}, function(err) {
									console.log(err);
								});
							});
						});
		});

		router.register("gisportal/gis-data-browse", function(evt) {
						evt.preventDefault();
						console.log("loading "+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('gisportal-banner') !== undefined) {
								registry.byId('gisportal-banner').set('title', 'Browse GIS Data');
							}
						});

		});

		router.register("gisportal/backend-apis", function(evt) {
						evt.preventDefault();
						console.log("loading "+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('gisportal-banner') !== undefined) {
								registry.byId('gisportal-banner').set('title', 'Backend APIs');
							}

							app.loadCards(Card, [{
								id: "eDoc Rest API",
								imgSrc: 'static/home/app/img/thumbnails/restapi_app.png',
								href: 'https://gisapps.aroraengineers.com:8004/edoc/swag',
								header: 'eDoc Rest API',
								baseClass: 'card column-8 leader-1 trailer-2',
								contents: 'Manage the eDoc Rest API'
							}]).then(function(e) {
								console.log(e);
							}, function(err) {
								console.log(err);
							});
						});

		});

		router.register("departments/home", function(evt) {
						evt.preventDefault();
						console.log("loading "+evt.newPath);
						app.unloadSection().then(function(e) {
							try {
								registry.byId('departments-banner').destroyRecursive();
							} catch(err) {
								// console.log(err);
							}
							app.header = new PageBanner({
								id: 'departments-banner',
								baseClass: "sub-nav-title text-white page-banner",
								title: "Airport Departments",
								routes: [{
									title: 'Engineering',
									href: '/#departments/engineering'
								}, {
									title: 'Operations',
									href: '/#departments/operations'
								}, {
									title: 'Planning',
									href: '/#departments/planning'
								}, {
									title: 'Utilities',
									href: '/#departments/utilities'
								}]
							});

							var pane = registry.byId('header-pane');
							pane.set('content', app.header);
						});

		});

		router.register("departments/engineering", function(evt) {
						evt.preventDefault();
						console.log("loading "+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('departments-banner') !== undefined) {
								registry.byId('departments-banner').set('title', 'Engineering');
							}
						});

		});

		router.register("departments/operations", function(evt) {
						evt.preventDefault();
						console.log('loading '+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('departments-banner') !== undefined) {
								registry.byId('departments-banner').set('title', 'Operations');
							}
						});

		});

		router.register("departments/planning", function(evt) {
						evt.preventDefault();
						console.log('loading '+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('departments-banner') !== undefined) {
								registry.byId('departments-banner').set('title', 'Airport Planning');
							}
						});
		});

		router.register("departments/utilities", function(evt) {
						evt.preventDefault();
						console.log('loading '+evt.newPath);
						app.unloadContent().then(function(e) {
							if (registry.byId('departments-banner') !== undefined) {
								registry.byId('departments-banner').set('title', 'Airfield Utilities');
							}
						});
		});

		router.register("web-resources/home", function(evt) {
						evt.preventDefault();
						console.log('loading '+evt.newPath);
						app.unloadSection().then(function(e) {
							try {
								registry.byId('web-resources-banner').destroyRecursive();
							} catch(err) {
								// console.log(err);
							}
							app.header = new PageBanner({
								id: 'web-resources-banner',
								baseClass: 'sub-nav-title text-white page-banner',
								title: 'Online Resource Library',
								routes: [{
									title: 'Live Data Feeds',
									href: '/#web-resources/live-data'
								}, {
									title: 'State Level GIS Data',
									href: '/#web-resources/state-level'
								}, {
									title: 'County Level GIS Data',
									href: '/#web-resources/county-level'
								}, {
									title: 'ESRI Online Resources',
									href: '/#web-resources/esri-resources'
								}]
							});

							var pane = registry.byId('header-pane');
							pane.set('content', app.header);
						});

		});

		router.register("help/home", function(evt) {
						evt.preventDefault();
						console.log('loading '+evt.newPath);
						app.unloadSection().then(function(e) {
							try {
								registry.byId('help-banner').destroyRecursive();
							} catch(err) {
								// console.log(err);
							}
							app.header = new PageBanner({
								id: 'help-banner',
								baseClass: 'sub-nav-title text-white page-banner',
								title: 'Help Documentation',
								routes: [{
									title: 'Technical Details',
									href: '/#help/tech-details'
								}, {
									title: 'About this Site',
									href: '/#help/about'
								}, {
									title: 'Request Help Ticket',
									href: '/#help/request-ticket'
								}, {
									title: 'Tutorials',
									href: '/#help/tutorials'
								}]
							});

							var pane = registry.byId('header-pane');
							pane.set('content', app.header);
						});
		});

		router.startup();
		app.router = router;
		
		return app;

});