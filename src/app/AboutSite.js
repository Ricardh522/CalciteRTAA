define([
	'dijit/registry',
	'dojo/dom',
	'dojo/dom-construct',
	'dojo/dom-class',
	'dojo/_base/declare',
	'dojo/_base/lang',
	'dojo/Deferred',
	'dijit/layout/ContentPane',
	'dojo/text!./templates/AboutSite_template.html',
	'dijit/_WidgetBase',
	"dijit/_TemplatedMixin",
	'dijit/_WidgetsInTemplateMixin'
	],
	function(
		registry,
		dom,
		domConstruct,
		domClass,
		declare,
		lang,
		Deferred,
		ContentPane,
		template,
		_WidgetBase,
		_TemplatedMixin,
		_WidgetsInTemplateMixin 
		) {
		return declare([_WidgetBase, _TemplatedMixin, _WidgetsInTemplateMixin], {
			templateString: template,
			id: null,
			baseClass: '_aboutSite',
			constructor: function(options, srcNodeRef) {
				this.inherited(arguments);
				console.log("_aboutSite::constructor()");
			},
			postCreate: function() {
				var self = this;
				this.inherited(arguments);
				console.log("_aboutSite::postCreate()");
				var cp = new ContentPane({
					class: 'admin-panel',
					style: "height: 100vh; width: 100%; background-color: white"
				});
				cp.placeAt(self.content);
				domClass.add(self.domNode, 'off');
			},
			startup: function() {
				this.inherited(arguments);
				console.log("_aboutSite::startup()");
				var self = this;
				var deferred = new Deferred();
				deferred.resolve(self);
				return deferred.promise;
			}
		});
	});