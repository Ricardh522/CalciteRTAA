define([
  "dojo/_base/declare",
  "dijit/_WidgetBase",
  "dijit/_TemplatedMixin",
  "dojo/text!./templates/skyAirplane_template.html"
],
 function(
   declare,
   _WidgetBase,
   _TemplatedMixin, 
   template) {

  var canvas, stage, exportRoot;
  function init() {
  	// --- write your JS code here ---

  	canvas = document.getElementById("canvas");
  	images = images||{};
  	ss = ss||{};

  	var loader = new createjs.LoadQueue(false);
  	loader.addEventListener("fileload", handleFileLoad);
  	loader.addEventListener("complete", handleComplete);
  	loader.loadFile({src:"app/img/SkyAirplane_atlas_.json", type:"spritesheet", id:"SkyAirplane_atlas_"}, true);
  	loader.loadManifest(lib.properties.manifest);
  }

  function handleFileLoad(evt) {
  	if (evt.item.type === "image") { images[evt.item.id] = evt.result; }
  }

  function handleComplete(evt) {
  	var queue = evt.target;
  	ss.SkyAirplane_atlas_ = queue.getResult("SkyAirplane_atlas_");
  	exportRoot = new lib.SkyAirplane();

  	stage = new createjs.Stage(canvas);
  	stage.addChild(exportRoot);
  	stage.update();

  	createjs.Ticker.setFPS(lib.properties.fps);
  	createjs.Ticker.addEventListener("tick", stage);
  }

  (function (lib, img, cjs, ss) {

  var p; // shortcut to reference prototypes
  lib.webFontTxtFilters = {};

  // library properties:
  lib.properties = {
  	width: 550,
  	height: 400,
  	fps: 24,
  	color: "#FFFFFF",
  	webfonts: {},
  	manifest: []
  };



  lib.webfontAvailable = function(family) {
  	lib.properties.webfonts[family] = true;
  	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
  	for(var f = 0; f < txtFilters.length; ++f) {
  		txtFilters[f].updateCache();
  	}
  };
  // symbols:



  (lib.Bitmap2 = function() {
  	this.spriteSheet = ss.SkyAirplane_atlas_;
  	this.gotoAndStop(0);
  }).prototype = p = new cjs.Sprite();



  (lib.header_sky = function() {
  	this.spriteSheet = ss.SkyAirplane_atlas_;
  	this.gotoAndStop(1);
  }).prototype = p = new cjs.Sprite();



  (lib.Symbol1 = function(mode,startPosition,loop) {
  	this.initialize(mode,startPosition,loop,{});

  	// Layer 1
  	this.instance = new lib.Bitmap2();
  	this.instance.setTransform(0,0,0.028,0.028);

  	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(0,0,64,21);


  // stage content:
  (lib.SkyAirplane = function(mode,startPosition,loop) {
  	this.initialize(mode,startPosition,loop,{});

  	// Airplane
  	this.instance = new lib.Symbol1();
  	this.instance.setTransform(1252.8,19.4,0.974,0.99,0,0,0,31.8,10.5);
  	this.instance.alpha = 0.48;

  	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:32,scaleY:0.99,x:1251,y:19.5,alpha:0.5},0).wait(1).to({scaleY:0.99,x:1249.1,y:19.6,alpha:0.51},0).wait(1).to({scaleX:0.97,scaleY:0.99,x:1247.2,y:19.7,alpha:0.52},0).wait(1).to({scaleY:0.99,x:1245.2,y:19.9,alpha:0.529},0).wait(1).to({scaleY:0.98,x:1243.3,y:20,alpha:0.539},0).wait(1).to({scaleY:0.98,x:1241.4,alpha:0.549},0).wait(1).to({scaleY:0.98,x:1239.4,y:20.1,alpha:0.558},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:1237.4,y:20.3,alpha:0.568},0).wait(1).to({scaleY:0.98,x:1235.5,y:20.4,alpha:0.578},0).wait(1).to({scaleY:0.98,x:1233.6,alpha:0.587},0).wait(1).to({scaleY:0.98,x:1231.6,y:20.6,alpha:0.596},0).wait(1).to({scaleY:0.98,x:1229.7,y:20.7,alpha:0.606},0).wait(1).to({scaleX:0.97,scaleY:0.98,x:1227.8,y:20.8,alpha:0.615},0).wait(1).to({scaleY:0.97,x:1225.8,alpha:0.625},0).wait(1).to({scaleY:0.97,x:1223.9,y:21,alpha:0.634},0).wait(1).to({scaleY:0.97,x:1221.9,y:21.1,alpha:0.643},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:1220,y:21.2,alpha:0.652},0).wait(1).to({scaleY:0.97,x:1218.1,alpha:0.661},0).wait(1).to({scaleY:0.97,x:1216.1,y:21.4,alpha:0.67},0).wait(1).to({scaleY:0.97,x:1214.2,y:21.5,alpha:0.679},0).wait(1).to({scaleY:0.97,x:1212.3,y:21.6,alpha:0.688},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:1210.3,alpha:0.697},0).wait(1).to({scaleY:0.96,x:1208.4,y:21.8,alpha:0.706},0).wait(1).to({scaleY:0.96,x:1206.4,y:21.9,alpha:0.715},0).wait(1).to({scaleY:0.96,x:1204.5,y:22,alpha:0.724},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:1202.6,alpha:0.733},0).wait(1).to({scaleY:0.96,x:1200.6,y:22.2,alpha:0.741},0).wait(1).to({scaleY:0.96,x:1198.6,y:22.3,alpha:0.75},0).wait(1).to({scaleY:0.96,x:1196.7,y:22.4,alpha:0.758},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:1194.8,alpha:0.767},0).wait(1).to({scaleY:0.95,x:1192.9,y:22.6,alpha:0.775},0).wait(1).to({scaleY:0.95,x:1190.9,y:22.7,alpha:0.784},0).wait(1).to({scaleY:0.95,x:1189,y:22.8,alpha:0.792},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:1187,alpha:0.8},0).wait(1).to({scaleY:0.95,x:1185.1,y:23,alpha:0.808},0).wait(1).to({scaleY:0.95,x:1183.1,y:23.1,alpha:0.817},0).wait(1).to({scaleY:0.95,x:1181.2,y:23.2,alpha:0.825},0).wait(1).to({scaleX:0.97,scaleY:0.95,x:1179.3,alpha:0.832},0).wait(1).to({scaleY:0.94,x:1177.4,y:23.4,alpha:0.84},0).wait(1).to({scaleY:0.94,x:1175.4,y:23.5,alpha:0.848},0).wait(1).to({scaleY:0.94,x:1173.4,y:23.6,alpha:0.856},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:1171.5,alpha:0.863},0).wait(1).to({scaleY:0.94,x:1169.6,y:23.8,alpha:0.871},0).wait(1).to({scaleY:0.94,x:1167.7,y:23.9,alpha:0.878},0).wait(1).to({scaleX:0.96,scaleY:0.94,x:1165.7,y:24,alpha:0.886},0).wait(1).to({scaleY:0.94,x:1163.7,alpha:0.893},0).wait(1).to({scaleY:0.93,x:1161.8,y:24.1,alpha:0.9},0).wait(1).to({scaleY:0.93,x:1159.9,y:24.3,alpha:0.907},0).wait(1).to({scaleX:0.96,scaleY:0.93,x:1158,y:24.4,alpha:0.913},0).wait(1).to({scaleY:0.93,x:1156,alpha:0.92},0).wait(1).to({scaleY:0.93,x:1154,y:24.5,alpha:0.927},0).wait(1).to({scaleX:0.96,scaleY:0.93,x:1152.1,y:24.7,alpha:0.933},0).wait(1).to({scaleY:0.93,x:1150.2,y:24.8,alpha:0.939},0).wait(1).to({scaleY:0.93,x:1148.3,alpha:0.945},0).wait(1).to({scaleY:0.93,x:1146.3,y:24.9,alpha:0.951},0).wait(1).to({scaleX:0.96,scaleY:0.92,x:1144.4,y:25.1,alpha:0.956},0).wait(1).to({scaleY:0.92,x:1142.4,y:25.2,alpha:0.961},0).wait(1).to({scaleY:0.92,x:1140.5,alpha:0.966},0).wait(1).to({scaleX:0.96,scaleY:0.92,x:1138.6,y:25.3,alpha:0.971},0).wait(1).to({scaleY:0.92,x:1136.6,y:25.5,alpha:0.975},0).wait(1).to({scaleY:0.92,x:1134.7,y:25.6,alpha:0.979},0).wait(1).to({scaleX:0.96,scaleY:0.92,x:1132.7,alpha:0.983},0).wait(1).to({scaleY:0.92,x:1130.8,y:25.7,alpha:0.986},0).wait(1).to({scaleY:0.91,x:1128.9,y:25.8,alpha:0.988},0).wait(1).to({scaleY:0.91,x:1126.9,y:26,alpha:0.989},0).wait(1).to({scaleX:0.96,scaleY:0.91,x:1125,alpha:0.99},0).wait(1).to({scaleY:0.91,x:1123,y:26.1},0).wait(1).to({scaleY:0.91,x:1121.1,y:26.2},0).wait(1).to({scaleX:0.96,scaleY:0.91,x:1119.2,y:26.4},0).wait(1).to({scaleY:0.91,x:1117.2},0).wait(1).to({scaleY:0.91,x:1115.3,y:26.5},0).wait(1).to({scaleX:0.96,scaleY:0.91,x:1113.3,y:26.6},0).wait(1).to({scaleY:0.9,x:1111.4,y:26.8},0).wait(1).to({scaleY:0.9,x:1109.5},0).wait(1).to({scaleX:0.95,scaleY:0.9,x:1107.5,y:26.9},0).wait(1).to({scaleY:0.9,x:1105.6,y:27},0).wait(1).to({scaleY:0.9,x:1103.6,y:27.2},0).wait(1).to({scaleX:0.95,scaleY:0.9,x:1101.7},0).wait(1).to({scaleY:0.9,x:1099.8,y:27.3},0).wait(1).to({scaleY:0.9,x:1097.8,y:27.4},0).wait(1).to({scaleX:0.95,scaleY:0.89,x:1095.9,y:27.6},0).wait(1).to({scaleY:0.89,x:1093.9},0).wait(1).to({scaleY:0.89,x:1092,y:27.7},0).wait(1).to({scaleX:0.95,scaleY:0.89,x:1090.1,y:27.8},0).wait(1).to({scaleY:0.89,x:1088.1,y:27.9},0).wait(1).to({scaleY:0.89,x:1086.2,y:28},0).wait(1).to({scaleX:0.95,scaleY:0.89,x:1084.2,y:28.1},0).wait(1).to({scaleY:0.89,x:1082.3,y:28.2},0).wait(1).to({scaleY:0.88,x:1080.4,y:28.3},0).wait(1).to({scaleX:0.95,scaleY:0.88,x:1078.5,y:28.4},0).wait(1).to({scaleY:0.88,x:1076.5,y:28.5},0).wait(1).to({scaleY:0.88,x:1074.5,y:28.6},0).wait(1).to({scaleX:0.95,scaleY:0.88,x:1072.6,y:28.7},0).wait(1).to({scaleY:0.88,x:1070.7,y:28.8},0).wait(1).to({scaleY:0.88,x:1068.7,y:28.9},0).wait(1).to({scaleX:0.95,scaleY:0.88,x:1066.8,y:29},0).wait(1).to({scaleY:0.88,x:1064.9,y:29.1},0).wait(1).to({scaleX:0.95,scaleY:0.87,x:1062.9,y:29.2},0).wait(1).to({scaleY:0.87,x:1061,y:29.3},0).wait(1).to({scaleY:0.87,x:1059,y:29.4},0).wait(1).to({scaleX:0.95,scaleY:0.87,x:1057.1,y:29.5},0).wait(1).to({scaleY:0.87,x:1055.2,y:29.6},0).wait(1).to({scaleY:0.87,x:1053.2,y:29.7},0).wait(1).to({scaleX:0.94,scaleY:0.87,x:1051.3,y:29.8},0).wait(1).to({scaleY:0.87,x:1049.3,y:29.9},0).wait(1).to({scaleX:0.94,scaleY:0.86,x:1047.4,y:30},0).wait(1).to({scaleY:0.86,x:1045.5,y:30.1},0).wait(1).to({scaleY:0.86,x:1043.5,y:30.2},0).wait(1).to({scaleX:0.94,scaleY:0.86,x:1041.6,y:30.3},0).wait(1).to({scaleY:0.86,x:1039.7,y:30.4},0).wait(1).to({scaleY:0.86,x:1037.7,y:30.5},0).wait(1).to({scaleX:0.94,scaleY:0.86,x:1035.7,y:30.6},0).wait(1).to({scaleY:0.86,x:1033.8,y:30.7},0).wait(1).to({scaleX:0.94,scaleY:0.86,x:1031.9,y:30.8},0).wait(1).to({scaleY:0.85,x:1030,y:30.9},0).wait(1).to({scaleY:0.85,x:1028,y:31},0).wait(1).to({scaleX:0.94,scaleY:0.85,x:1026.1,y:31.1},0).wait(1).to({scaleY:0.85,x:1024.1,y:31.2},0).wait(1).to({scaleY:0.85,x:1022.2,y:31.3},0).wait(1).to({scaleX:0.94,scaleY:0.85,x:1020.2,y:31.4},0).wait(1).to({scaleY:0.85,x:1018.3,y:31.5},0).wait(1).to({scaleX:0.94,scaleY:0.85,x:1016.4,y:31.6},0).wait(1).to({scaleY:0.84,x:1014.5,y:31.7},0).wait(1).to({scaleY:0.84,x:1012.5,y:31.8},0).wait(1).to({scaleX:0.94,scaleY:0.84,x:1010.6,y:31.9},0).wait(1).to({scaleY:0.84,x:1008.6,y:32},0).wait(1).to({scaleX:0.94,scaleY:0.84,x:1006.7,y:32.1},0).wait(1).to({scaleY:0.84,x:1004.7,y:32.2},0).wait(1).to({scaleY:0.84,x:1002.8,y:32.3},0).wait(1).to({scaleX:0.93,scaleY:0.84,x:1000.9,y:32.4},0).wait(1).to({scaleY:0.83,x:998.9,y:32.5},0).wait(1).to({scaleX:0.93,scaleY:0.83,x:997,y:32.6},0).wait(1).to({scaleY:0.83,x:995,y:32.7},0).wait(1).to({scaleX:0.93,scaleY:0.83,x:993.1,y:32.8},0).wait(1).to({scaleY:0.83,x:991.1,y:32.9},0).wait(1).to({scaleY:0.83,x:989.2,y:33},0).wait(1).to({scaleX:0.93,scaleY:0.83,x:987.3,y:33.1},0).wait(1).to({scaleY:0.83,x:985.4,y:33.2},0).wait(1).to({scaleX:0.93,scaleY:0.83,x:983.4,y:33.3},0).wait(1).to({scaleY:0.82,x:981.5,y:33.4},0).wait(1).to({scaleX:0.93,scaleY:0.82,x:979.5,y:33.5},0).wait(1).to({scaleY:0.82,x:977.6,y:33.6},0).wait(1).to({scaleY:0.82,x:975.6,y:33.7},0).wait(1).to({scaleX:0.93,scaleY:0.82,x:973.7,y:33.8},0).wait(1).to({scaleY:0.82,x:971.8,y:33.9},0).wait(1).to({scaleX:0.93,scaleY:0.82,x:969.8,y:34},0).wait(1).to({scaleY:0.82,x:967.9,y:34.1},0).wait(1).to({scaleX:0.93,scaleY:0.81,x:966,y:34.2},0).wait(1).to({scaleY:0.81,x:964,y:34.3},0).wait(1).to({scaleY:0.81,x:962.1,y:34.4},0).wait(1).to({scaleX:0.93,scaleY:0.81,x:960.1,y:34.5},0).wait(1).to({scaleY:0.81,x:958.2,y:34.6},0).wait(1).to({scaleX:0.92,scaleY:0.81,x:956.3,y:34.7},0).wait(1).to({scaleY:0.81,x:954.3,y:34.8},0).wait(1).to({scaleX:0.92,scaleY:0.81,x:952.4,y:34.9},0).wait(1).to({scaleY:0.81,x:950.5,y:35},0).wait(1).to({scaleX:0.92,scaleY:0.8,x:948.5,y:35.1},0).wait(1).to({scaleY:0.8,x:946.6,y:35.2},0).wait(1).to({scaleY:0.8,x:944.6,y:35.3},0).wait(1).to({scaleX:0.92,scaleY:0.8,x:942.7,y:35.4},0).wait(1).to({scaleY:0.8,x:940.7,y:35.5},0).wait(1).to({scaleX:0.92,scaleY:0.8,x:938.8,y:35.6},0).wait(1).to({scaleY:0.8,x:936.9,y:35.7},0).wait(1).to({scaleX:0.92,scaleY:0.8,x:934.9,y:35.8},0).wait(1).to({scaleY:0.79,x:933,y:35.9},0).wait(1).to({scaleX:0.92,scaleY:0.79,x:931.1,y:36},0).wait(1).to({scaleY:0.79,x:929.1,y:36.1},0).wait(1).to({scaleX:0.92,scaleY:0.79,x:927.2,y:36.2},0).wait(1).to({scaleY:0.79,x:925.2,y:36.3},0).wait(1).to({scaleX:0.92,scaleY:0.79,x:923.3,y:36.4},0).wait(1).to({scaleY:0.79,x:921.3,y:36.5},0).wait(1).to({scaleX:0.92,scaleY:0.79,x:919.4,y:36.6},0).wait(1).to({scaleY:0.79,x:917.5,y:36.7},0).wait(1).to({scaleY:0.78,x:915.5,y:36.8},0).wait(1).to({scaleX:0.91,scaleY:0.78,x:913.6,y:36.9},0).wait(1).to({scaleY:0.78,x:911.7,y:37},0).wait(1).to({scaleX:0.91,scaleY:0.78,x:909.7,y:37.1},0).wait(1).to({scaleY:0.78,x:907.8,y:37.2},0).wait(1).to({scaleX:0.91,scaleY:0.78,x:905.8,y:37.3},0).wait(1).to({scaleY:0.78,x:903.9,y:37.4},0).wait(1).to({scaleX:0.91,scaleY:0.78,x:901.9,y:37.5},0).wait(1).to({scaleY:0.77,x:900,y:37.6},0).wait(1).to({scaleX:0.91,scaleY:0.77,x:898.1,y:37.7},0).wait(1).to({scaleY:0.77,x:896.1,y:37.8},0).wait(1).to({scaleX:0.91,scaleY:0.77,x:894.2,y:37.9},0).wait(1).to({scaleY:0.77,x:892.3,y:38},0).wait(1).to({scaleX:0.91,scaleY:0.77,x:890.3,y:38.1},0).wait(1).to({scaleY:0.77,x:888.4,y:38.2},0).wait(1).to({scaleX:0.91,scaleY:0.77,x:886.5,y:38.3},0).wait(1).to({scaleY:0.76,x:884.5,y:38.5},0).wait(1).to({scaleX:0.91,scaleY:0.76,x:882.6},0).wait(1).to({scaleY:0.76,x:880.6,y:38.6},0).wait(1).to({scaleX:0.91,scaleY:0.76,x:878.7,y:38.7},0).wait(1).to({scaleY:0.76,x:876.7,y:38.9},0).wait(1).to({scaleX:0.9,scaleY:0.76,x:874.8},0).wait(1).to({scaleY:0.76,x:872.9,y:39},0).wait(1).to({scaleX:0.9,scaleY:0.76,x:870.9,y:39.1},0).wait(1).to({scaleY:0.76,x:869,y:39.3},0).wait(1).to({scaleX:0.9,scaleY:0.75,x:867},0).wait(1).to({scaleX:0.9,scaleY:0.75,x:865.1,y:39.4},0).wait(1).to({scaleY:0.75,x:863.2,y:39.5},0).wait(1).to({scaleX:0.9,scaleY:0.75,x:861.2,y:39.7},0).wait(1).to({scaleY:0.75,x:859.3},0).wait(1).to({scaleX:0.9,scaleY:0.75,x:857.4,y:39.8},0).wait(1).to({scaleY:0.75,x:855.4,y:40},0).wait(1).to({scaleX:0.9,scaleY:0.75,x:853.5,y:40.1},0).wait(1).to({scaleY:0.74,x:851.6},0).wait(1).to({scaleX:0.9,scaleY:0.74,x:849.6,y:40.2},0).wait(1).to({scaleY:0.74,x:847.7,y:40.4},0).wait(1).to({scaleX:0.9,scaleY:0.74,x:845.7,y:40.5},0).wait(1).to({scaleY:0.74,x:843.8},0).wait(1).to({scaleX:0.9,scaleY:0.74,x:841.8,y:40.6},0).wait(1).to({scaleY:0.74,x:839.9,y:40.8},0).wait(1).to({scaleX:0.89,scaleY:0.74,x:838,y:40.9},0).wait(1).to({scaleX:0.89,scaleY:0.74,x:836},0).wait(1).to({scaleY:0.73,x:834.1,y:41},0).wait(1).to({scaleX:0.89,scaleY:0.73,x:832.1,y:41.2},0).wait(1).to({scaleY:0.73,x:830.2,y:41.3},0).wait(1).to({scaleX:0.89,scaleY:0.73,x:828.2},0).wait(1).to({scaleY:0.73,x:826.3,y:41.5},0).wait(1).to({scaleX:0.89,scaleY:0.73,x:824.4,y:41.6},0).wait(1).to({scaleY:0.73,x:822.4,y:41.7},0).wait(1).to({scaleX:0.89,scaleY:0.73,x:820.5},0).wait(1).to({scaleX:0.89,scaleY:0.72,x:818.6,y:41.9},0).wait(1).to({scaleY:0.72,x:816.6,y:42},0).wait(1).to({scaleX:0.89,scaleY:0.72,x:814.7,y:42.1},0).wait(1).to({scaleY:0.72,x:812.7},0).wait(1).to({scaleX:0.89,scaleY:0.72,x:810.8,y:42.3},0).wait(1).to({scaleY:0.72,x:808.9,y:42.4},0).wait(1).to({scaleX:0.89,scaleY:0.72,x:806.9,y:42.5},0).wait(1).to({scaleX:0.88,scaleY:0.72,x:805,y:42.6},0).wait(1).to({scaleY:0.72,x:803.1,y:42.7},0).wait(1).to({scaleX:0.88,scaleY:0.71,x:801.1,y:42.8},0).wait(1).to({scaleY:0.71,x:799.2,y:42.9},0).wait(1).to({scaleX:0.88,scaleY:0.71,x:797.2,y:43},0).wait(1).to({scaleX:0.88,scaleY:0.71,x:795.3,y:43.1},0).wait(1).to({scaleY:0.71,x:793.4,y:43.2},0).wait(1).to({scaleX:0.88,scaleY:0.71,x:791.4,y:43.3},0).wait(1).to({scaleY:0.71,x:789.5,y:43.4},0).wait(1).to({scaleX:0.88,scaleY:0.71,x:787.6,y:43.5},0).wait(1).to({scaleX:0.88,scaleY:0.7,x:785.6,y:43.6},0).wait(1).to({scaleY:0.7,x:783.7,y:43.7},0).wait(1).to({scaleX:0.88,scaleY:0.7,x:781.7,y:43.8},0).wait(1).to({scaleY:0.7,x:779.8,y:43.9},0).wait(1).to({scaleX:0.88,scaleY:0.7,x:777.9,y:44},0).wait(1).to({scaleX:0.88,scaleY:0.7,x:775.9,y:44.1},0).wait(1).to({scaleY:0.7,x:774,y:44.2},0).wait(1).to({scaleX:0.87,scaleY:0.7,x:772,y:44.3},0).wait(1).to({scaleY:0.69,x:770.1,y:44.4},0).wait(1).to({scaleX:0.87,scaleY:0.69,x:768.2,y:44.5},0).wait(1).to({scaleX:0.87,scaleY:0.69,x:766.2,y:44.6},0).wait(1).to({scaleY:0.69,x:764.3,y:44.7},0).wait(1).to({scaleX:0.87,scaleY:0.69,x:762.4,y:44.8},0).wait(1).to({scaleY:0.69,x:760.4,y:44.9},0).wait(1).to({scaleX:0.87,scaleY:0.69,x:758.5,y:45},0).wait(1).to({scaleX:0.87,scaleY:0.69,x:756.5,y:45.1},0).wait(1).to({scaleY:0.69,x:754.6,y:45.2},0).wait(1).to({scaleX:0.87,scaleY:0.68,x:752.7,y:45.3},0).wait(1).to({scaleX:0.87,scaleY:0.68,x:750.7,y:45.4},0).wait(1).to({scaleY:0.68,x:748.8,y:45.5},0).wait(1).to({scaleX:0.87,scaleY:0.68,x:746.8,y:45.6},0).wait(1).to({scaleX:0.87,scaleY:0.68,x:744.9,y:45.7},0).wait(1).to({scaleY:0.68,x:742.9,y:45.8},0).wait(1).to({scaleX:0.86,scaleY:0.68,x:741,y:45.9},0).wait(1).to({scaleY:0.68,x:739.1,y:46},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:737.1,y:46.2},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:735.2},0).wait(1).to({scaleY:0.67,x:733.2,y:46.3},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:731.3,y:46.4},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:729.4,y:46.6},0).wait(1).to({scaleY:0.67,x:727.4},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:725.5,y:46.7},0).wait(1).to({scaleX:0.86,scaleY:0.67,x:723.5,y:46.9},0).wait(1).to({scaleY:0.67,x:721.6,y:47},0).wait(1).to({scaleX:0.86,scaleY:0.66,x:719.6},0).wait(1).to({scaleX:0.86,scaleY:0.66,x:717.7,y:47.1},0).wait(1).to({scaleY:0.66,x:715.8,y:47.3},0).wait(1).to({scaleX:0.86,scaleY:0.66,x:713.8,y:47.4},0).wait(1).to({scaleX:0.85,scaleY:0.66,x:711.9},0).wait(1).to({scaleY:0.66,x:710,y:47.6},0).wait(1).to({scaleX:0.85,scaleY:0.66,x:708,y:47.7},0).wait(1).to({scaleX:0.85,scaleY:0.66,x:706.1,y:47.8},0).wait(1).to({scaleY:0.65,x:704.2,y:47.9},0).wait(1).to({scaleX:0.85,scaleY:0.65,x:702.2,y:48},0).wait(1).to({scaleX:0.85,scaleY:0.65,x:700.3,y:48.1},0).wait(1).to({scaleX:0.85,scaleY:0.65,x:698.3,y:48.2},0).wait(1).to({scaleY:0.65,x:696.4,y:48.3},0).wait(1).to({scaleX:0.85,scaleY:0.65,x:694.5,y:48.4},0).wait(1).to({scaleX:0.85,scaleY:0.65,x:692.5,y:48.5},0).wait(1).to({scaleY:0.65,x:690.6,y:48.6},0).wait(1).to({scaleX:0.85,scaleY:0.64,x:688.6,y:48.7},0).wait(1).to({scaleX:0.85,scaleY:0.64,x:686.7,y:48.8},0).wait(1).to({scaleY:0.64,x:684.8,y:48.9},0).wait(1).to({scaleX:0.84,scaleY:0.64,x:682.8,y:49},0).wait(1).to({scaleX:0.84,scaleY:0.64,x:680.9,y:49.1},0).wait(1).to({scaleX:0.84,scaleY:0.64,x:678.9,y:49.2},0).wait(1).to({scaleY:0.64,x:677,y:49.3},0).wait(1).to({scaleX:0.84,scaleY:0.64,x:675,y:49.4},0).wait(1).to({scaleX:0.84,scaleY:0.64,x:673.1,y:49.5},0).wait(1).to({scaleY:0.63,x:671.2,y:49.6},0).wait(1).to({scaleX:0.84,scaleY:0.63,x:669.3,y:49.7},0).wait(1).to({scaleX:0.84,scaleY:0.63,x:667.3,y:49.8},0).wait(1).to({scaleX:0.84,scaleY:0.63,x:665.4,y:49.9},0).wait(1).to({scaleY:0.63,x:663.4,y:50},0).wait(1).to({scaleX:0.84,scaleY:0.63,x:661.5,y:50.1},0).wait(1).to({scaleX:0.84,scaleY:0.63,x:659.5,y:50.2},0).wait(1).to({scaleX:0.83,scaleY:0.63,x:657.6,y:50.3},0).wait(1).to({scaleY:0.62,x:655.7,y:50.4},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:653.7,y:50.5},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:651.8,y:50.7},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:649.8},0).wait(1).to({scaleY:0.62,x:647.9,y:50.8},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:646,y:51},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:644,y:51.1},0).wait(1).to({scaleX:0.83,scaleY:0.62,x:642.1},0).wait(1).to({scaleY:0.62,x:640.2,y:51.3},0).wait(1).to({scaleX:0.83,scaleY:0.61,x:638.2,y:51.4},0).wait(1).to({scaleX:0.83,scaleY:0.61,x:636.3,y:51.5},0).wait(1).to({scaleX:0.83,scaleY:0.61,x:634.3,y:51.6},0).wait(1).to({scaleY:0.61,x:632.4,y:51.7},0).wait(1).to({scaleX:0.82,scaleY:0.61,x:630.4,y:51.8},0).wait(1).to({scaleX:0.82,scaleY:0.61,x:628.5,y:51.9},0).wait(1).to({scaleX:0.82,scaleY:0.61,x:626.6,y:52},0).wait(1).to({scaleX:0.82,scaleY:0.61,x:624.7,y:52.1},0).wait(1).to({scaleY:0.6,x:622.7,y:52.2},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:620.8,y:52.3},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:618.8,y:52.4},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:616.9,y:52.5},0).wait(1).to({scaleY:0.6,x:614.9,y:52.6},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:613,y:52.7},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:611.1,y:52.8},0).wait(1).to({scaleX:0.82,scaleY:0.6,x:609.1,y:52.9},0).wait(1).to({scaleX:0.81,scaleY:0.6,x:607.2,y:53},0).wait(1).to({scaleY:0.59,x:605.3,y:53.1},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:603.3,y:53.2},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:601.4,y:53.3},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:599.4,y:53.4},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:597.5,y:53.6},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:595.6},0).wait(1).to({scaleY:0.59,x:593.6,y:53.7},0).wait(1).to({scaleX:0.81,scaleY:0.59,x:591.7,y:53.9},0).wait(1).to({scaleX:0.81,scaleY:0.58,x:589.7,y:54},0).wait(1).to({scaleX:0.81,scaleY:0.58,x:587.8},0).wait(1).to({scaleX:0.81,scaleY:0.58,x:585.8,y:54.2},0).wait(1).to({scaleX:0.8,scaleY:0.58,x:583.9,y:54.3},0).wait(1).to({scaleY:0.58,x:582,y:54.4},0).wait(1).to({scaleX:0.8,scaleY:0.58,x:580.1,y:54.5},0).wait(1).to({scaleX:0.8,scaleY:0.58,x:578.1,y:54.6},0).wait(1).to({scaleX:0.8,scaleY:0.58,x:576.2,y:54.7},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:574.2,y:54.8},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:572.3,y:54.9},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:570.3,y:55},0).wait(1).to({scaleY:0.57,x:568.4,y:55.1},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:566.5,y:55.2},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:564.5,y:55.3},0).wait(1).to({scaleX:0.8,scaleY:0.57,x:562.6,y:55.4},0).wait(1).to({scaleX:0.79,scaleY:0.57,x:560.6,y:55.5},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:558.7,y:55.6},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:556.8,y:55.7},0).wait(1).to({scaleY:0.56,x:554.9,y:55.8},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:552.9,y:55.9},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:550.9,y:56.1},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:549},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:547.1,y:56.2},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:545.1,y:56.4},0).wait(1).to({scaleX:0.79,scaleY:0.56,x:543.2,y:56.5},0).wait(1).to({scaleX:0.79,scaleY:0.55,x:541.3},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:539.3,y:56.7},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:537.4,y:56.8},0).wait(1).to({scaleY:0.55,x:535.4,y:56.9},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:533.5,y:57},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:531.6,y:57.1},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:529.6,y:57.2},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:527.7,y:57.3},0).wait(1).to({scaleX:0.78,scaleY:0.55,x:525.7,y:57.4},0).wait(1).to({scaleX:0.78,scaleY:0.54,x:523.8,y:57.5},0).wait(1).to({scaleX:0.78,scaleY:0.54,x:521.9,y:57.6},0).wait(1).to({scaleX:0.78,scaleY:0.54,x:519.9,y:57.7},0).wait(1).to({scaleX:0.77,scaleY:0.54,x:518,y:57.8},0).wait(1).to({scaleX:0.77,scaleY:0.54,x:516.1,y:57.9},0).wait(1).to({scaleX:0.77,scaleY:0.54,x:514.1,y:58},0).wait(1).to({scaleX:0.77,scaleY:0.54,x:512.2,y:58.2},0).wait(1).to({scaleX:0.77,scaleY:0.54,x:510.2},0).wait(1).to({scaleX:0.77,scaleY:0.53,x:508.3,y:58.3},0).wait(1).to({scaleX:0.77,scaleY:0.53,x:506.4,y:58.5},0).wait(1).to({scaleX:0.77,scaleY:0.53,x:504.4,y:58.6},0).wait(1).to({scaleY:0.53,x:502.5},0).wait(1).to({scaleX:0.77,scaleY:0.53,x:500.5,y:58.8},0).wait(1).to({scaleX:0.77,scaleY:0.53,x:498.6,y:58.9},0).wait(1).to({scaleX:0.76,scaleY:0.53,x:496.7,y:59},0).wait(1).to({scaleX:0.76,scaleY:0.53,x:494.7,y:59.1},0).wait(1).to({scaleX:0.76,scaleY:0.53,x:492.8,y:59.2},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:490.8,y:59.3},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:488.9,y:59.4},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:487,y:59.5},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:485,y:59.6},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:483.1,y:59.7},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:481.2,y:59.8},0).wait(1).to({scaleX:0.76,scaleY:0.52,x:479.2,y:59.9},0).wait(1).to({scaleX:0.75,scaleY:0.52,x:477.2,y:60},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:475.3,y:60.1},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:473.4,y:60.3},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:471.4},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:469.5,y:60.5},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:467.6,y:60.6},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:465.6,y:60.7},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:463.7,y:60.8},0).wait(1).to({scaleX:0.75,scaleY:0.51,x:461.8,y:60.9},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:459.8,y:61},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:457.9,y:61.1},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:455.9,y:61.2},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:454,y:61.3},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:452.1,y:61.4},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:450.1,y:61.5},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:448.2,y:61.6},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:446.3,y:61.7},0).wait(1).to({scaleX:0.74,scaleY:0.5,x:444.3,y:61.8},0).wait(1).to({scaleX:0.74,scaleY:0.49,x:442.4,y:62},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:440.4},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:438.5,y:62.2},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:436.5,y:62.3},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:434.6,y:62.4},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:432.7,y:62.5},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:430.7,y:62.6},0).wait(1).to({scaleX:0.73,scaleY:0.49,x:428.8,y:62.7},0).wait(1).to({scaleX:0.73,scaleY:0.48,x:426.9,y:62.8},0).wait(1).to({scaleX:0.73,scaleY:0.48,x:424.9,y:62.9},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:423,y:63},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:421,y:63.1},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:419.1,y:63.2},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:417.2,y:63.3},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:415.2,y:63.4},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:413.3,y:63.6},0).wait(1).to({scaleX:0.72,scaleY:0.48,x:411.4,y:63.7},0).wait(1).to({scaleX:0.72,scaleY:0.47,x:409.4},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:407.4,y:63.9},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:405.5,y:64},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:403.6,y:64.1},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:401.6,y:64.2},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:399.7,y:64.3},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:397.7,y:64.4},0).wait(1).to({scaleX:0.71,scaleY:0.47,x:395.8,y:64.5},0).wait(1).to({scaleX:0.71,scaleY:0.46,x:393.9,y:64.6},0).wait(1).to({scaleX:0.71,scaleY:0.46,x:391.9,y:64.7},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:390,y:64.8},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:388.1,y:65},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:386.1},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:384.2,y:65.2},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:382.2,y:65.3},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:380.3,y:65.4},0).wait(1).to({scaleX:0.7,scaleY:0.46,x:378.4,y:65.5},0).wait(1).to({scaleX:0.7,scaleY:0.45,x:376.4,y:65.6},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:374.5,y:65.7},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:372.5,y:65.8},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:370.6,y:65.9},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:368.7,y:66},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:366.7,y:66.1},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:364.8,y:66.3},0).wait(1).to({scaleX:0.69,scaleY:0.45,x:362.8},0).wait(1).to({scaleX:0.69,scaleY:0.44,x:360.9,y:66.5},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:359,y:66.6},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:357.1,y:66.7},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:355.1,y:66.8},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:353.2,y:66.9},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:351.2,y:67},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:349.3,y:67.1},0).wait(1).to({scaleX:0.68,scaleY:0.44,x:347.4,y:67.2},0).wait(1).to({scaleX:0.68,scaleY:0.43,x:345.4,y:67.3},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:343.5,y:67.5},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:341.5,y:67.6},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:339.6},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:337.6,y:67.8},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:335.7,y:67.9},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:333.8,y:68},0).wait(1).to({scaleX:0.67,scaleY:0.43,x:331.9,y:68.1},0).wait(1).to({scaleX:0.66,scaleY:0.43,x:329.9,y:68.2},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:328,y:68.3},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:326,y:68.4},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:324.1,y:68.5},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:322.1,y:68.6},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:320.2,y:68.8},0).wait(1).to({scaleX:0.66,scaleY:0.42,x:318.2,y:68.9},0).wait(1).to({scaleX:0.65,scaleY:0.42,x:316.3,y:69},0).wait(1).to({scaleX:0.65,scaleY:0.42,x:314.4,y:69.1},0).wait(1).to({scaleX:0.65,scaleY:0.41,x:312.5,y:69.2},0).wait(1).to({scaleX:0.65,scaleY:0.41,x:310.5,y:69.3},0).wait(1).to({scaleX:0.65,scaleY:0.41,x:308.6,y:69.4},0).wait(1).to({scaleX:0.65,scaleY:0.41,x:306.6,y:69.5},0).wait(1).to({scaleX:0.65,scaleY:0.41,x:304.7,y:69.6},0).wait(1).to({scaleX:0.64,scaleY:0.41,x:302.8,y:69.8},0).wait(1).to({scaleX:0.64,scaleY:0.41,x:300.8},0).wait(1).to({scaleX:0.64,scaleY:0.41,x:298.9,y:70},0).wait(1).to({scaleX:0.64,scaleY:0.41,x:296.9,y:70.1},0).wait(1).to({scaleX:0.64,scaleY:0.4,x:295,y:70.2},0).wait(1).to({scaleX:0.64,scaleY:0.4,x:293,y:70.3},0).wait(1).to({scaleX:0.64,scaleY:0.4,x:291.1,y:70.4},0).wait(1).to({scaleX:0.63,scaleY:0.4,x:289.2,y:70.5},0).wait(1).to({scaleX:0.63,scaleY:0.4,x:287.2,y:70.7},0).wait(1).to({scaleX:0.63,scaleY:0.4,x:285.3},0).wait(1).to({scaleX:0.63,scaleY:0.4,x:283.3,y:70.9},0).wait(1).to({scaleX:0.63,scaleY:0.4,x:281.4,y:71},0).wait(1).to({scaleX:0.63,scaleY:0.39,x:279.5,y:71.1},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:277.5,y:71.2},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:275.6,y:71.3},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:273.7,y:71.4},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:271.7,y:71.5},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:269.8,y:71.6},0).wait(1).to({scaleX:0.62,scaleY:0.39,x:267.8,y:71.7},0).wait(1).to({scaleX:0.61,scaleY:0.39,x:265.9,y:71.9},0).wait(1).to({scaleX:0.61,scaleY:0.38,x:264,y:72},0).wait(1).to({scaleX:0.61,scaleY:0.38,x:262,y:72.1},0).wait(1).to({scaleX:0.61,scaleY:0.38,x:260.1,y:72.2},0).wait(1).to({scaleX:0.61,scaleY:0.38,x:258.2,y:72.3},0).wait(1).to({scaleX:0.61,scaleY:0.38,x:256.2,y:72.4},0).wait(1).to({scaleX:0.6,scaleY:0.38,x:254.3,y:72.5},0).wait(1).to({scaleX:0.6,scaleY:0.38,x:252.4,y:72.6},0).wait(1).to({scaleX:0.6,scaleY:0.38,x:250.4,y:72.8},0).wait(1).to({scaleX:0.6,scaleY:0.38,x:248.5,y:72.9},0).wait(1).to({scaleX:0.6,scaleY:0.37,x:246.5,y:73,alpha:0.989},0).wait(1).to({scaleX:0.6,scaleY:0.37,x:244.6,y:73.1,alpha:0.988},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:242.6,y:73.2,alpha:0.986},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:240.7,y:73.3,alpha:0.985},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:238.8,y:73.4,alpha:0.982},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:236.8,y:73.5,alpha:0.98},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:234.9,y:73.7,alpha:0.978},0).wait(1).to({scaleX:0.59,scaleY:0.37,x:233,y:73.8,alpha:0.975},0).wait(1).to({scaleX:0.58,scaleY:0.36,x:231,y:73.9,alpha:0.972},0).wait(1).to({scaleX:0.58,scaleY:0.36,x:229.1,y:74,alpha:0.969},0).wait(1).to({scaleX:0.58,scaleY:0.36,x:227.1,y:74.1,alpha:0.965},0).wait(1).to({scaleX:0.58,scaleY:0.36,x:225.2,y:74.3,alpha:0.962},0).wait(1).to({scaleX:0.58,scaleY:0.36,x:223.3,alpha:0.958},0).wait(1).to({scaleX:0.57,scaleY:0.36,x:221.3,y:74.5,alpha:0.954},0).wait(1).to({scaleX:0.57,scaleY:0.36,x:219.4,y:74.6,alpha:0.95},0).wait(1).to({scaleX:0.57,scaleY:0.36,x:217.4,y:74.7,alpha:0.946},0).wait(1).to({scaleX:0.57,scaleY:0.36,x:215.5,y:74.8,alpha:0.942},0).wait(1).to({scaleX:0.57,scaleY:0.35,x:213.6,y:74.9,alpha:0.938},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:211.6,y:75,alpha:0.934},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:209.7,y:75.2,alpha:0.929},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:207.7,y:75.3,alpha:0.925},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:205.8,y:75.4,alpha:0.92},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:203.9,y:75.5,alpha:0.916},0).wait(1).to({scaleX:0.56,scaleY:0.35,x:201.9,y:75.6,alpha:0.911},0).wait(1).to({scaleX:0.55,scaleY:0.35,x:200,y:75.8,alpha:0.906},0).wait(1).to({scaleX:0.55,scaleY:0.34,x:198.1,alpha:0.901},0).wait(1).to({scaleX:0.55,scaleY:0.34,x:196.1,y:76,alpha:0.896},0).wait(1).to({scaleX:0.55,scaleY:0.34,x:194.2,y:76.1,alpha:0.891},0).wait(1).to({scaleX:0.55,scaleY:0.34,x:192.2,y:76.2,alpha:0.886},0).wait(1).to({scaleX:0.54,scaleY:0.34,x:190.3,y:76.3,alpha:0.881},0).wait(1).to({scaleX:0.54,scaleY:0.34,x:188.3,y:76.4,alpha:0.876},0).wait(1).to({scaleX:0.54,scaleY:0.34,x:186.4,y:76.6,alpha:0.87},0).wait(1).to({scaleX:0.54,scaleY:0.34,x:184.5,y:76.7,alpha:0.865},0).wait(1).to({scaleX:0.54,scaleY:0.34,x:182.5,y:76.8,alpha:0.86},0).wait(1).to({scaleX:0.53,scaleY:0.33,x:180.6,y:76.9,alpha:0.854},0).wait(1).to({scaleX:0.53,scaleY:0.33,x:178.7,y:77,alpha:0.849},0).wait(1).to({scaleX:0.53,scaleY:0.33,x:176.7,y:77.2,alpha:0.843},0).wait(1).to({scaleX:0.53,scaleY:0.33,x:174.8,alpha:0.837},0).wait(1).to({scaleX:0.52,scaleY:0.33,x:172.9,y:77.4,alpha:0.832},0).wait(1).to({scaleX:0.52,scaleY:0.33,x:170.9,y:77.5,alpha:0.826},0).wait(1).to({scaleX:0.52,scaleY:0.33,x:169,y:77.6,alpha:0.82},0).wait(1).to({scaleX:0.52,scaleY:0.33,x:167,y:77.7,alpha:0.815},0).wait(1).to({scaleX:0.52,scaleY:0.32,x:165.1,y:77.8,alpha:0.809},0).wait(1).to({scaleX:0.51,scaleY:0.32,x:163.1,y:78,alpha:0.803},0).wait(1).to({scaleX:0.51,scaleY:0.32,x:161.2,y:78.1,alpha:0.797},0).wait(1).to({scaleX:0.51,scaleY:0.32,x:159.3,y:78.2,alpha:0.791},0).wait(1).to({scaleX:0.51,scaleY:0.32,x:157.3,y:78.3,alpha:0.785},0).wait(1).to({scaleX:0.5,scaleY:0.32,x:155.4,y:78.4,alpha:0.779},0).wait(1).to({scaleX:0.5,scaleY:0.32,x:153.5,y:78.6,alpha:0.773},0).wait(1).to({scaleX:0.5,scaleY:0.32,x:151.5,alpha:0.767},0).wait(1).to({scaleX:0.5,scaleY:0.31,x:149.6,y:78.8,alpha:0.761},0).wait(1).to({scaleX:0.49,scaleY:0.31,x:147.6,y:78.9,alpha:0.755},0).wait(1).to({scaleX:0.49,scaleY:0.31,x:145.7,y:79,alpha:0.749},0).wait(1).to({scaleX:0.49,scaleY:0.31,x:143.8,y:79.1,alpha:0.743},0).wait(1).to({scaleX:0.49,scaleY:0.31,x:141.8,y:79.3,alpha:0.737},0).wait(1).to({scaleX:0.49,scaleY:0.31,x:139.9,y:79.4,alpha:0.73},0).wait(1).to({scaleX:0.48,scaleY:0.31,x:137.9,y:79.5,alpha:0.724},0).wait(1).to({scaleX:0.48,scaleY:0.31,x:136,y:79.6,alpha:0.718},0).wait(1).to({scaleX:0.48,scaleY:0.31,x:134.1,y:79.7,alpha:0.711},0).wait(1).to({scaleX:0.47,scaleY:0.3,x:132.2,y:79.9,alpha:0.705},0).wait(1).to({scaleX:0.47,scaleY:0.3,x:130.2,y:80,alpha:0.699},0).wait(1).to({scaleX:0.47,scaleY:0.3,x:128.2,y:80.1,alpha:0.692},0).wait(1).to({scaleX:0.47,scaleY:0.3,x:126.3,y:80.2,alpha:0.686},0).wait(1).to({scaleX:0.46,scaleY:0.3,x:124.4,y:80.4,alpha:0.679},0).wait(1).to({scaleX:0.46,scaleY:0.3,x:122.4,y:80.5,alpha:0.673},0).wait(1).to({scaleX:0.46,scaleY:0.3,x:120.5,y:80.6,alpha:0.666},0).wait(1).to({scaleX:0.46,scaleY:0.3,x:118.6,y:80.7,alpha:0.66},0).wait(1).to({scaleX:0.45,scaleY:0.29,x:116.6,y:80.8,alpha:0.653},0).wait(1).to({scaleX:0.45,scaleY:0.29,x:114.7,y:81,alpha:0.647},0).wait(1).to({scaleX:0.45,scaleY:0.29,x:112.7,y:81.1,alpha:0.64},0).wait(1).to({scaleX:0.44,scaleY:0.29,x:110.8,y:81.2,alpha:0.634},0).wait(1).to({scaleX:0.44,scaleY:0.29,x:108.9,y:81.3,alpha:0.627},0).wait(1).to({scaleX:0.44,scaleY:0.29,x:107,y:81.5,alpha:0.62},0).wait(1).to({scaleX:0.44,scaleY:0.29,x:105,y:81.6,alpha:0.614},0).wait(1).to({scaleX:0.43,scaleY:0.29,x:103.1,y:81.7,alpha:0.607},0).wait(1).to({scaleX:0.43,scaleY:0.28,x:101.1,y:81.8,alpha:0.6},0).wait(1).to({scaleX:0.43,scaleY:0.28,x:99.2,y:82,alpha:0.594},0).wait(1).to({scaleX:0.42,scaleY:0.28,x:97.2,y:82.1,alpha:0.587},0).wait(1).to({scaleX:0.42,scaleY:0.28,x:95.3,y:82.2,alpha:0.58},0).wait(1).to({scaleX:0.42,scaleY:0.28,x:93.4,y:82.3,alpha:0.573},0).wait(1).to({scaleX:0.42,scaleY:0.28,x:91.4,y:82.5,alpha:0.566},0).wait(1).to({scaleX:0.41,scaleY:0.28,x:89.5,y:82.6,alpha:0.56},0).wait(1).to({scaleX:0.41,scaleY:0.28,x:87.6,y:82.7,alpha:0.553},0).wait(1).to({scaleX:0.41,scaleY:0.28,x:85.6,y:82.8,alpha:0.546},0).wait(1).to({scaleX:0.4,scaleY:0.27,x:83.7,y:83,alpha:0.539},0).wait(1).to({scaleX:0.4,scaleY:0.27,x:81.7,y:83.1,alpha:0.532},0).wait(1).to({scaleX:0.4,scaleY:0.27,x:79.8,y:83.2,alpha:0.525},0).wait(1).to({scaleX:0.4,scaleY:0.27,x:77.9,y:83.3,alpha:0.518},0).wait(1).to({scaleX:0.39,scaleY:0.27,x:75.9,y:83.5,alpha:0.511},0).wait(1).to({scaleX:0.39,scaleY:0.27,x:74,y:83.6,alpha:0.504},0).wait(1).to({scaleX:0.39,scaleY:0.27,x:72.1,y:83.7,alpha:0.497},0).wait(1).to({scaleX:0.38,scaleY:0.27,x:70.1,y:83.9,alpha:0.49},0).wait(1).to({scaleX:0.38,scaleY:0.27,x:68.2,y:84,alpha:0.483},0).wait(1).to({scaleX:0.38,scaleY:0.26,x:66.2,y:84.1,alpha:0.476},0).wait(1).to({scaleX:0.37,scaleY:0.26,x:64.3,y:84.2,alpha:0.469},0).wait(1).to({scaleX:0.37,scaleY:0.26,x:62.4,y:84.4,alpha:0.462},0).wait(1).to({scaleX:0.37,scaleY:0.26,x:60.4,y:84.5,alpha:0.455},0).wait(1).to({scaleX:0.36,scaleY:0.26,x:58.5,y:84.6,alpha:0.448},0).wait(1).to({scaleX:0.36,scaleY:0.26,x:56.6,y:84.8,alpha:0.441},0).wait(1).to({scaleX:0.36,scaleY:0.26,x:54.6,y:84.9,alpha:0.434},0).wait(1).to({scaleX:0.35,scaleY:0.26,x:52.7,y:85.1,alpha:0.426},0).wait(1).to({scaleX:0.35,scaleY:0.25,x:50.7,alpha:0.419},0).wait(1).to({scaleX:0.35,scaleY:0.25,x:48.8,y:85.3,alpha:0.412},0).wait(1).to({scaleX:0.35,scaleY:0.25,x:46.9,y:85.4,alpha:0.405},0).wait(1).to({scaleX:0.34,scaleY:0.25,x:44.9,y:85.6,alpha:0.398},0).wait(1).to({scaleX:0.34,scaleY:0.25,x:43,y:85.7,alpha:0.39},0).wait(1).to({scaleX:0.34,scaleY:0.25,x:41,y:85.8,alpha:0.383},0).wait(1).to({scaleX:0.33,scaleY:0.25,x:39.1,y:86,alpha:0.376},0).wait(1).to({scaleX:0.33,scaleY:0.25,x:37.2,y:86.1,alpha:0.369},0).wait(1).to({scaleX:0.33,scaleY:0.24,x:35.2,y:86.2,alpha:0.361},0).wait(1).to({scaleX:0.32,scaleY:0.24,x:33.3,y:86.4,alpha:0.354},0).wait(1).to({scaleX:0.32,scaleY:0.24,x:31.4,y:86.5,alpha:0.347},0).wait(1).to({scaleX:0.32,scaleY:0.24,x:29.4,y:86.7,alpha:0.34},0).wait(1).to({scaleX:0.31,scaleY:0.24,x:27.5,y:86.8,alpha:0.332},0).wait(1).to({scaleX:0.31,scaleY:0.24,x:25.5,y:86.9,alpha:0.325},0).wait(1).to({scaleX:0.31,scaleY:0.24,x:23.6,y:87.1,alpha:0.317},0).wait(1).to({scaleX:0.3,scaleY:0.24,x:21.7,y:87.3,alpha:0.31},0).wait(1).to({scaleX:0.3,scaleY:0.24,x:19.7,y:87.4,alpha:0.303},0).wait(1).to({scaleX:0.29,scaleY:0.23,x:17.8,y:87.5,alpha:0.295},0).wait(1).to({scaleX:0.29,scaleY:0.23,x:15.9,y:87.7,alpha:0.288},0).wait(1).to({scaleX:0.29,scaleY:0.23,x:13.9,y:87.8,alpha:0.281},0).wait(1).to({scaleX:0.28,scaleY:0.23,x:12,y:88,alpha:0.273},0).wait(1).to({scaleX:0.28,scaleY:0.23,x:10,y:88.1,alpha:0.266},0).wait(1).to({scaleX:0.28,scaleY:0.23,x:8.2,y:88.3,alpha:0.258},0).wait(1).to({scaleX:0.27,scaleY:0.23,x:6.2,y:88.4,alpha:0.251},0).wait(1).to({scaleX:0.27,scaleY:0.23,x:4.3,y:88.6,alpha:0.243},0).wait(1).to({scaleX:0.27,scaleY:0.22,x:2.3,y:88.7,alpha:0.236},0).wait(1).to({scaleX:0.26,scaleY:0.22,x:0.4,y:88.9,alpha:0.228},0).wait(1).to({scaleX:0.26,scaleY:0.22,x:-1.5,y:89.1,alpha:0.221},0).wait(1).to({scaleX:0.25,scaleY:0.22,x:-3.5,y:89.2,alpha:0.213},0).wait(1).to({scaleX:0.25,scaleY:0.22,x:-5.4,y:89.4,alpha:0.206},0).wait(1).to({scaleX:0.25,scaleY:0.22,x:-7.3,y:89.5,alpha:0.198},0).wait(1).to({scaleX:0.24,scaleY:0.22,x:-9.3,y:89.7,alpha:0.19},0).wait(1).to({scaleX:0.24,scaleY:0.22,x:-11.2,y:89.8,alpha:0.183},0).wait(1).to({scaleX:0.23,scaleY:0.22,x:-13.1,y:90,alpha:0.175},0).wait(1).to({scaleX:0.23,scaleY:0.21,x:-15.1,y:90.2,alpha:0.168},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:-17,y:90.4,alpha:0.16},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:-18.9,y:90.5,alpha:0.152},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:-20.9,y:90.7,alpha:0.145},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-22.8,y:90.9,alpha:0.137},0).wait(1).to({scaleX:0.21,scaleY:0.21,x:-24.7,y:91.1,alpha:0.129},0).wait(1).to({scaleX:0.2,scaleY:0.21,x:-26.7,y:91.3,alpha:0.122},0).wait(1).to({scaleX:0.2,scaleY:0.21,x:-28.6,y:91.5,alpha:0.114},0).wait(1).to({scaleX:0.19,scaleY:0.2,x:-30.6,y:91.8,alpha:0.106},0).wait(1).to({scaleX:0.19,scaleY:0.2,x:-32.5,y:92,alpha:0.098},0).wait(1).to({scaleX:0.18,scaleY:0.2,x:-34.4,y:92.2,alpha:0.091},0).wait(1).to({scaleX:0.17,scaleY:0.2,x:-36.3,y:92.5,alpha:0.083},0).wait(1).to({scaleX:0.17,scaleY:0.2,x:-38.3,y:92.8,alpha:0.075},0).wait(1).to({scaleX:0.16,scaleY:0.2,x:-40.2,y:93.2,alpha:0.067},0).wait(1).to({scaleY:0.2,x:-41.9,y:93.8,alpha:0.059},0).wait(1));

  	// Layer 1
  	this.instance_1 = new lib.header_sky();

  	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(669));

  }).prototype = p = new cjs.MovieClip();
  p.nominalBounds = new cjs.Rectangle(275,200,1284.2,421);

})(lib = lib||{}, images = images||{}, createjs = window.createjs||{}, ss = ss||{});
  var lib, images, createjs, ss;

  return declare([_WidgetBase, _TemplatedMixin], {
    templateString: template,

    postCreate: function() {
      init();
    }
  });
});