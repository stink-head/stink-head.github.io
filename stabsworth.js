(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"stabbydragon_atlas_", frames: [[0,0,145,166],[0,168,111,121]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib._11 = function() {
	this.spriteSheet = ss["stabbydragon_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._22 = function() {
	this.spriteSheet = ss["stabbydragon_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._11();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,145,166), null);


(lib.hand1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib._22();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand1, new cjs.Rectangle(0,0,111,121), null);


(lib.hand2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.arm = new lib.hand1();
	this.arm.parent = this;
	this.arm.setTransform(49.3,-44.7,1,1,0,0,0,55.5,60.5);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF99").s().p("AgdAdQgMgMAAgRQAAgQAMgNQANgMAQAAQARAAAMAMQAMANAAAQQAAARgMAMQgMAMgRAAQgQAAgNgMg");
	this.shape.setTransform(4.2,4.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.arm}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.hand2, new cjs.Rectangle(-6.2,-105.2,111,121), null);


// stage content:
(lib.test_Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

    function getOffset( el ) {
        var _x = 0;
        var _y = 0;
        while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
            _x += el.offsetLeft - el.scrollLeft;
            _y += el.offsetTop - el.scrollTop;
            el = el.offsetParent;
        }
        return { top: _y, left: _x };
    }

	// timeline functions:
	this.frame_0 = function() {
		// document.addEventListener("mousemove", function (e) {
		// 	var var1 = e.clientY - this.hand.y;
		// 	var var2 = e.clientX - this.hand.x;
		// 	var radiusR = Math.atan2(var1, var2);
		// 	var degreeR = radiusR / (Math.PI / 180);
		// 	this.hand.rotation = degreeR;
		// }.bind(this));

		document.addEventListener("mousemove", function (e) {
			var var1 = e.clientY - ( getOffset( document.getElementById('dom_overlay_container') ).top + this.hand.y);
			var var2 = e.clientX - ( getOffset( document.getElementById('dom_overlay_container') ).left + this.hand.x);
			var radiusR = Math.atan2(var1, var2);
			var degreeR = radiusR / (Math.PI / 180);
			this.hand.rotation = degreeR;
		}.bind(this));
		
		console.log("smell butts lol");
	};

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 4
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(127,162,1,1,0,0,0,72.5,83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer 5
	this.hand = new lib.hand2();
	this.hand.parent = this;
	this.hand.setTransform(147.2,167,1,1,0,0,0,4.2,4.2);

	this.timeline.addTween(cjs.Tween.get(this.hand).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(208.5,213.1,193.3,187.4);
// library properties:
lib.properties = {
	width: 308,
	height: 311,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"http://static.tumblr.com/eiy5urf/mBfomq5dn/stabbydragon_atlas_.png", id:"stabbydragon_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;