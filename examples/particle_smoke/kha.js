(function ($hx_exports, $global) { "use strict";
$hx_exports["kha"] = $hx_exports["kha"] || {};
$hx_exports["kha"]["input"] = $hx_exports["kha"]["input"] || {};
var $hxClasses = {},$estr = function() { return js_Boot.__string_rec(this,''); },$hxEnums = $hxEnums || {},$_;
function $extend(from, fields) {
	var proto = Object.create(from);
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var EReg = function(r,opt) {
	this.r = new RegExp(r,opt.split("u").join(""));
};
$hxClasses["EReg"] = EReg;
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	,__class__: EReg
};
var HxOverrides = function() { };
$hxClasses["HxOverrides"] = HxOverrides;
HxOverrides.__name__ = true;
HxOverrides.strDate = function(s) {
	switch(s.length) {
	case 8:
		var k = s.split(":");
		var d = new Date();
		d["setTime"](0);
		d["setUTCHours"](k[0]);
		d["setUTCMinutes"](k[1]);
		d["setUTCSeconds"](k[2]);
		return d;
	case 10:
		var k = s.split("-");
		return new Date(k[0],k[1] - 1,k[2],0,0,0);
	case 19:
		var k = s.split(" ");
		var y = k[0].split("-");
		var t = k[1].split(":");
		return new Date(y[0],y[1] - 1,y[2],t[0],t[1],t[2]);
	default:
		throw haxe_Exception.thrown("Invalid date format : " + s);
	}
};
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) {
		return undefined;
	}
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(len == null) {
		len = s.length;
	} else if(len < 0) {
		if(pos == 0) {
			len = s.length + len;
		} else {
			return "";
		}
	}
	return s.substr(pos,len);
};
HxOverrides.remove = function(a,obj) {
	var i = a.indexOf(obj);
	if(i == -1) {
		return false;
	}
	a.splice(i,1);
	return true;
};
HxOverrides.now = function() {
	return Date.now();
};
var Main = function() { };
$hxClasses["Main"] = Main;
Main.__name__ = true;
Main.main = function() {
	iron_object_BoneAnimation.skinMaxBones = 8;
	iron_object_LightObject.cascadeCount = 4;
	iron_object_LightObject.cascadeSplitFactor = 0.800000011920929;
	armory_system_Starter.numAssets = 20;
	armory_system_Starter.drawLoading = armory_trait_internal_LoadingScreen.render;
	armory_system_Starter.main("Scene",0,false,true,false,960,540,1,true,armory_renderpath_RenderPathCreator.get);
};
Math.__name__ = true;
var Reflect = function() { };
$hxClasses["Reflect"] = Reflect;
Reflect.__name__ = true;
Reflect.field = function(o,field) {
	try {
		return o[field];
	} catch( _g ) {
		return null;
	}
};
Reflect.setProperty = function(o,field,value) {
	var tmp;
	var tmp1;
	if(o.__properties__) {
		tmp = o.__properties__["set_" + field];
		tmp1 = tmp;
	} else {
		tmp1 = false;
	}
	if(tmp1) {
		o[tmp](value);
	} else {
		o[field] = value;
	}
};
Reflect.isFunction = function(f) {
	if(typeof(f) == "function") {
		return !(f.__name__ || f.__ename__);
	} else {
		return false;
	}
};
var Std = function() { };
$hxClasses["Std"] = Std;
Std.__name__ = true;
Std.string = function(s) {
	return js_Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	if(x != null) {
		var _g = 0;
		var _g1 = x.length;
		while(_g < _g1) {
			var i = _g++;
			var c = x.charCodeAt(i);
			if(c <= 8 || c >= 14 && c != 32 && c != 45) {
				var nc = x.charCodeAt(i + 1);
				var v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
				if(isNaN(v)) {
					return null;
				} else {
					return v;
				}
			}
		}
	}
	return null;
};
Std.random = function(x) {
	if(x <= 0) {
		return 0;
	} else {
		return Math.floor(Math.random() * x);
	}
};
var StringTools = function() { };
$hxClasses["StringTools"] = StringTools;
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	if(s.length >= start.length) {
		return s.lastIndexOf(start,0) == 0;
	} else {
		return false;
	}
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	if(slen >= elen) {
		return s.indexOf(end,slen - elen) == slen - elen;
	} else {
		return false;
	}
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
var Type = function() { };
$hxClasses["Type"] = Type;
Type.__name__ = true;
Type.createInstance = function(cl,args) {
	var ctor = Function.prototype.bind.apply(cl,[null].concat(args));
	return new (ctor);
};
Type.createEnum = function(e,constr,params) {
	var f = Reflect.field(e,constr);
	if(f == null) {
		throw haxe_Exception.thrown("No such constructor " + constr);
	}
	if(Reflect.isFunction(f)) {
		if(params == null) {
			throw haxe_Exception.thrown("Constructor " + constr + " need parameters");
		}
		return f.apply(e,params);
	}
	if(params != null && params.length != 0) {
		throw haxe_Exception.thrown("Constructor " + constr + " does not need parameters");
	}
	return f;
};
var UInt = {};
UInt.gt = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) {
		return aNeg;
	} else {
		return a > b;
	}
};
UInt.gte = function(a,b) {
	var aNeg = a < 0;
	var bNeg = b < 0;
	if(aNeg != bNeg) {
		return aNeg;
	} else {
		return a >= b;
	}
};
UInt.toFloat = function(this1) {
	var int = this1;
	if(int < 0) {
		return 4294967296.0 + int;
	} else {
		return int + 0.0;
	}
};
var armory_data_Config = function() { };
$hxClasses["armory.data.Config"] = armory_data_Config;
armory_data_Config.__name__ = true;
var armory_object_Uniforms = function() { };
$hxClasses["armory.object.Uniforms"] = armory_object_Uniforms;
armory_object_Uniforms.__name__ = true;
armory_object_Uniforms.register = function() {
	iron_object_Uniforms.externalTextureLinks = [armory_object_Uniforms.textureLink];
	iron_object_Uniforms.externalVec2Links = [armory_object_Uniforms.vec2Link];
	iron_object_Uniforms.externalVec3Links = [armory_object_Uniforms.vec3Link];
	iron_object_Uniforms.externalVec4Links = [];
	iron_object_Uniforms.externalFloatLinks = [armory_object_Uniforms.floatLink];
	iron_object_Uniforms.externalIntLinks = [];
};
armory_object_Uniforms.textureLink = function(object,mat,link) {
	switch(link) {
	case "_morphDataNor":
		return (js_Boot.__cast(object , iron_object_MeshObject)).morphTarget.morphDataNor;
	case "_morphDataPos":
		return (js_Boot.__cast(object , iron_object_MeshObject)).morphTarget.morphDataPos;
	case "_nishitaLUT":
		if(armory_renderpath_Nishita.data == null) {
			armory_renderpath_Nishita.recompute(iron_Scene.active.world);
		}
		return armory_renderpath_Nishita.data.lut;
	}
	var this1 = iron_RenderPath.active.renderTargets;
	var key = StringTools.endsWith(link,"_depth") ? HxOverrides.substr(link,0,link.length - 6) : link;
	var target = this1.h[key];
	if(target != null) {
		return target.image;
	} else {
		return null;
	}
};
armory_object_Uniforms.vec3Link = function(object,mat,link) {
	var v = null;
	return v;
};
armory_object_Uniforms.vec2Link = function(object,mat,link) {
	var v = null;
	if(link == "_nishitaDensity") {
		var w = iron_Scene.active.world;
		if(w != null) {
			v = iron_object_Uniforms.helpVec;
			v.x = w.raw.nishita_density.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
			v.y = w.raw.nishita_density.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		}
	}
	return v;
};
armory_object_Uniforms.floatLink = function(object,mat,link) {
	return null;
};
var armory_renderpath_Inc = function() { };
$hxClasses["armory.renderpath.Inc"] = armory_renderpath_Inc;
armory_renderpath_Inc.__name__ = true;
armory_renderpath_Inc.init = function(_path) {
	armory_renderpath_Inc.path = _path;
};
armory_renderpath_Inc.bindShadowMap = function() {
	var _g = 0;
	var _g1 = iron_Scene.active.lights;
	while(_g < _g1.length) {
		var l = _g1[_g];
		++_g;
		if(!l.visible || l.data.raw.type != "sun") {
			continue;
		}
		var n = "shadowMap";
		armory_renderpath_Inc.path.bindTarget(n,n);
		break;
	}
	var _g = 0;
	var _g1 = armory_renderpath_Inc.pointIndex;
	while(_g < _g1) {
		var i = _g++;
		var n = "shadowMapPoint[" + i + "]";
		armory_renderpath_Inc.path.bindTarget(n,n);
	}
	var _g = 0;
	var _g1 = armory_renderpath_Inc.spotIndex;
	while(_g < _g1) {
		var i = _g++;
		var n = "shadowMapSpot[" + i + "]";
		armory_renderpath_Inc.path.bindTarget(n,n);
	}
};
armory_renderpath_Inc.shadowMapName = function(light) {
	switch(light.data.raw.type) {
	case "point":
		return "shadowMapPoint[" + armory_renderpath_Inc.pointIndex + "]";
	case "sun":
		return "shadowMap";
	default:
		return "shadowMapSpot[" + armory_renderpath_Inc.spotIndex + "]";
	}
};
armory_renderpath_Inc.getShadowMap = function(l) {
	var target = armory_renderpath_Inc.shadowMapName(l);
	var rt = armory_renderpath_Inc.path.renderTargets.h[target];
	if(rt == null) {
		if(armory_renderpath_Inc.path.light.data.raw.shadowmap_cube) {
			var size = armory_renderpath_Inc.path.light.data.raw.shadowmap_size;
			var t = new iron_RenderTargetRaw();
			t.name = target;
			t.width = size;
			t.height = size;
			t.format = "DEPTH16";
			t.is_cubemap = true;
			rt = armory_renderpath_Inc.path.createRenderTarget(t);
		} else {
			var sizew = armory_renderpath_Inc.path.light.data.raw.shadowmap_size;
			var sizeh = sizew;
			if(l.data.raw.type == "sun") {
				sizew *= iron_object_LightObject.cascadeCount;
			}
			var t = new iron_RenderTargetRaw();
			t.name = target;
			t.width = sizew;
			t.height = sizeh;
			t.format = "DEPTH16";
			rt = armory_renderpath_Inc.path.createRenderTarget(t);
		}
	}
	return target;
};
armory_renderpath_Inc.drawShadowMap = function() {
	armory_renderpath_Inc.pointIndex = 0;
	armory_renderpath_Inc.spotIndex = 0;
	var _g = 0;
	var _g1 = iron_Scene.active.lights;
	while(_g < _g1.length) {
		var l = _g1[_g];
		++_g;
		if(!l.visible) {
			continue;
		}
		armory_renderpath_Inc.path.light = l;
		var shadowmap = armory_renderpath_Inc.getShadowMap(l);
		var faces = l.data.raw.shadowmap_cube ? 6 : 1;
		var _g2 = 0;
		var _g3 = faces;
		while(_g2 < _g3) {
			var i = _g2++;
			if(faces > 1) {
				armory_renderpath_Inc.path.currentFace = i;
			}
			armory_renderpath_Inc.path.setTarget(shadowmap);
			armory_renderpath_Inc.path.clearTarget(null,1.0);
			if(l.data.raw.cast_shadow) {
				armory_renderpath_Inc.path.drawMeshes("shadowmap");
			}
		}
		armory_renderpath_Inc.path.currentFace = -1;
		if(l.data.raw.type == "point") {
			armory_renderpath_Inc.pointIndex++;
		} else if(l.data.raw.type == "spot" || l.data.raw.type == "area") {
			armory_renderpath_Inc.spotIndex++;
		}
	}
};
var armory_renderpath_Nishita = function() { };
$hxClasses["armory.renderpath.Nishita"] = armory_renderpath_Nishita;
armory_renderpath_Nishita.__name__ = true;
armory_renderpath_Nishita.recompute = function(world) {
	if(world == null || world.raw.nishita_density == null) {
		return;
	}
	if(armory_renderpath_Nishita.data == null) {
		armory_renderpath_Nishita.data = new armory_renderpath_NishitaData();
	}
	var density = world.raw.nishita_density;
	armory_renderpath_Nishita.data.computeLUT(new iron_math_Vec3(density.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),density.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),density.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN)));
};
var iron_math_Vec3 = function(x,y,z) {
	if(z == null) {
		z = 0.0;
	}
	if(y == null) {
		y = 0.0;
	}
	if(x == null) {
		x = 0.0;
	}
	this.x = x;
	this.y = y;
	this.z = z;
};
$hxClasses["iron.math.Vec3"] = iron_math_Vec3;
iron_math_Vec3.__name__ = true;
iron_math_Vec3.prototype = {
	__class__: iron_math_Vec3
};
var armory_renderpath_NishitaData = function() {
};
$hxClasses["armory.renderpath.NishitaData"] = armory_renderpath_NishitaData;
armory_renderpath_NishitaData.__name__ = true;
armory_renderpath_NishitaData.prototype = {
	getOzoneDensity: function(height) {
		if(height < 10000.0 || height >= 40000.0) {
			return 0.0;
		}
		if(height < 25000.0) {
			return (height - 10000.0) / 15000.0;
		}
		return -((height - 40000.0) / 15000.0);
	}
	,raySphereIntersection: function(rayOrigin,rayDirection,sphereRadius) {
		var a = rayDirection.x * rayDirection.x + rayDirection.y * rayDirection.y + rayDirection.z * rayDirection.z;
		var b = 2.0 * (rayDirection.x * rayOrigin.x + rayDirection.y * rayOrigin.y + rayDirection.z * rayOrigin.z);
		var c = rayOrigin.x * rayOrigin.x + rayOrigin.y * rayOrigin.y + rayOrigin.z * rayOrigin.z - sphereRadius * sphereRadius;
		var d = b * b - 4.0 * a * c;
		if(d < 0.0) {
			return new iron_math_Vec2(1e5,-1e5);
		}
		return new iron_math_Vec2((-b - Math.sqrt(d)) / (2.0 * a),(-b + Math.sqrt(d)) / (2.0 * a));
	}
	,computeLUT: function(density) {
		var this1 = new Float32Array(armory_renderpath_NishitaData.lutHeightSteps * armory_renderpath_NishitaData.lutAngleSteps * 4);
		var imageData = this1;
		var _g = 0;
		var _g1 = armory_renderpath_NishitaData.lutHeightSteps;
		while(_g < _g1) {
			var x = _g++;
			var height = x / (armory_renderpath_NishitaData.lutHeightSteps - 1);
			height *= height;
			height *= armory_renderpath_NishitaData.radiusAtmo;
			var _g2 = 0;
			var _g3 = armory_renderpath_NishitaData.lutAngleSteps;
			while(_g2 < _g3) {
				var y = _g2++;
				var sunTheta = y / (armory_renderpath_NishitaData.lutAngleSteps - 1) * 2 - 1;
				sunTheta = (sunTheta == 0 ? 0 : sunTheta < 0 ? -1.0 : 1.0) * sunTheta * sunTheta;
				sunTheta = sunTheta * Math.PI / 2 + Math.PI / 2;
				var jODepth = this.sampleSecondaryRay(height,sunTheta,density);
				var pixelIndex = (x + y * armory_renderpath_NishitaData.lutHeightSteps) * 4;
				imageData[pixelIndex] = jODepth.x;
				imageData[pixelIndex + 1] = jODepth.y;
				imageData[pixelIndex + 2] = jODepth.z;
				imageData[pixelIndex + 3] = 1.0;
			}
		}
		this.lut = kha_Image.fromBytes(haxe_io_Bytes.ofData(imageData.buffer),armory_renderpath_NishitaData.lutHeightSteps,armory_renderpath_NishitaData.lutAngleSteps,2,0);
	}
	,sampleSecondaryRay: function(height,sunTheta,density) {
		var iPos = new iron_math_Vec3(0,0,height + armory_renderpath_NishitaData.radiusPlanet);
		var _this = new iron_math_Vec3(0.0,Math.sin(sunTheta),Math.cos(sunTheta));
		var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
		if(n > 0.0) {
			var invN = 1.0 / n;
			_this.x *= invN;
			_this.y *= invN;
			_this.z *= invN;
		}
		var pSun = _this;
		var jTime = 0.0;
		var jStepSize = this.raySphereIntersection(iPos,pSun,armory_renderpath_NishitaData.radiusAtmo).y / armory_renderpath_NishitaData.jSteps;
		var jODepth_x = 0.0;
		var jODepth_y = 0.0;
		var jODepth_z = 0.0;
		var _g = 0;
		var _g1 = armory_renderpath_NishitaData.jSteps;
		while(_g < _g1) {
			var i = _g++;
			var x = iPos.x;
			var y = iPos.y;
			var z = iPos.z;
			if(z == null) {
				z = 0.0;
			}
			if(y == null) {
				y = 0.0;
			}
			if(x == null) {
				x = 0.0;
			}
			var jPos_x = x;
			var jPos_y = y;
			var jPos_z = z;
			var x1 = pSun.x;
			var y1 = pSun.y;
			var z1 = pSun.z;
			if(z1 == null) {
				z1 = 0.0;
			}
			if(y1 == null) {
				y1 = 0.0;
			}
			if(x1 == null) {
				x1 = 0.0;
			}
			var v_x = x1;
			var v_y = y1;
			var v_z = z1;
			var f = jTime + jStepSize * 0.5;
			v_x *= f;
			v_y *= f;
			v_z *= f;
			jPos_x += v_x;
			jPos_y += v_y;
			jPos_z += v_z;
			var jHeight = Math.sqrt(jPos_x * jPos_x + jPos_y * jPos_y + jPos_z * jPos_z) - armory_renderpath_NishitaData.radiusPlanet;
			var optDepthRayleigh = Math.exp(-jHeight / armory_renderpath_NishitaData.rayleighScale) * density.x;
			var optDepthMie = Math.exp(-jHeight / armory_renderpath_NishitaData.mieScale) * density.y;
			var optDepthOzone = this.getOzoneDensity(jHeight) * density.z;
			jODepth_x += optDepthRayleigh;
			jODepth_y += optDepthMie;
			jODepth_z += optDepthOzone;
			jTime += jStepSize;
		}
		jODepth_x *= jStepSize;
		jODepth_y *= jStepSize;
		jODepth_z *= jStepSize;
		var jAttenuation = new iron_math_Vec3();
		var mie = armory_renderpath_NishitaData.mieCoeff * jODepth_y;
		jAttenuation.x += mie;
		jAttenuation.y += mie;
		jAttenuation.z += mie;
		var _this = armory_renderpath_NishitaData.rayleighCoeff;
		var x = _this.x;
		var y = _this.y;
		var z = _this.z;
		if(z == null) {
			z = 0.0;
		}
		if(y == null) {
			y = 0.0;
		}
		if(x == null) {
			x = 0.0;
		}
		var v_x = x;
		var v_y = y;
		var v_z = z;
		var f = jODepth_x;
		v_x *= f;
		v_y *= f;
		v_z *= f;
		jAttenuation.x += v_x;
		jAttenuation.y += v_y;
		jAttenuation.z += v_z;
		var _this = armory_renderpath_NishitaData.ozoneCoeff;
		var x = _this.x;
		var y = _this.y;
		var z = _this.z;
		if(z == null) {
			z = 0.0;
		}
		if(y == null) {
			y = 0.0;
		}
		if(x == null) {
			x = 0.0;
		}
		var v_x = x;
		var v_y = y;
		var v_z = z;
		var f = jODepth_z;
		v_x *= f;
		v_y *= f;
		v_z *= f;
		jAttenuation.x += v_x;
		jAttenuation.y += v_y;
		jAttenuation.z += v_z;
		jAttenuation.x *= -1;
		jAttenuation.y *= -1;
		jAttenuation.z *= -1;
		var v = jAttenuation;
		jAttenuation.x = Math.exp(v.x);
		jAttenuation.y = Math.exp(v.y);
		jAttenuation.z = Math.exp(v.z);
		return jAttenuation;
	}
	,__class__: armory_renderpath_NishitaData
};
var armory_renderpath_RenderPathDeferred = function() { };
$hxClasses["armory.renderpath.RenderPathDeferred"] = armory_renderpath_RenderPathDeferred;
armory_renderpath_RenderPathDeferred.__name__ = true;
armory_renderpath_RenderPathDeferred.setTargetMeshes = function() {
	armory_renderpath_RenderPathDeferred.path.setTarget("gbuffer0",["gbuffer1"]);
};
armory_renderpath_RenderPathDeferred.drawMeshes = function() {
	armory_renderpath_RenderPathDeferred.path.drawMeshes("mesh");
};
armory_renderpath_RenderPathDeferred.init = function(_path) {
	armory_renderpath_RenderPathDeferred.path = _path;
	armory_renderpath_RenderPathDeferred.path.createDepthBuffer("main","DEPTH24");
	var t = new iron_RenderTargetRaw();
	t.name = "gbuffer0";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA64";
	t.scale = armory_renderpath_Inc.superSample;
	t.depth_buffer = "main";
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "tex";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA64";
	t.scale = armory_renderpath_Inc.superSample;
	t.depth_buffer = "main";
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "buf";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA64";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "gbuffer1";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA64";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/deferred_light/deferred_light");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/ssao_pass/ssao_pass");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/blur_edge_pass/blur_edge_pass_x");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/blur_edge_pass/blur_edge_pass_y");
	var t = new iron_RenderTargetRaw();
	t.name = "singlea";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "R8";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "singleb";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "R8";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "bufa";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA32";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	var t = new iron_RenderTargetRaw();
	t.name = "bufb";
	t.width = 0;
	t.height = 0;
	t.displayp = null;
	t.format = "RGBA32";
	t.scale = armory_renderpath_Inc.superSample;
	armory_renderpath_RenderPathDeferred.path.createRenderTarget(t);
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/compositor_pass/compositor_pass");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/smaa_edge_detect/smaa_edge_detect");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/smaa_blend_weight/smaa_blend_weight");
	armory_renderpath_RenderPathDeferred.path.loadShader("shader_datas/smaa_neighborhood_blend/smaa_neighborhood_blend");
};
armory_renderpath_RenderPathDeferred.commands = function() {
	armory_renderpath_RenderPathDeferred.path.setTarget("gbuffer0");
	armory_renderpath_RenderPathDeferred.path.clearTarget(null,1.0);
	armory_renderpath_RenderPathCreator.setTargetMeshes();
	armory_renderpath_RenderPathCreator.drawMeshes();
	if(armory_data_Config.raw.rp_ssgi != false) {
		armory_renderpath_RenderPathDeferred.path.setTarget("singlea");
		armory_renderpath_RenderPathDeferred.path.bindTarget("_main","gbufferD");
		armory_renderpath_RenderPathDeferred.path.bindTarget("gbuffer0","gbuffer0");
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/ssao_pass/ssao_pass");
		armory_renderpath_RenderPathDeferred.path.setTarget("singleb");
		armory_renderpath_RenderPathDeferred.path.bindTarget("singlea","tex");
		armory_renderpath_RenderPathDeferred.path.bindTarget("gbuffer0","gbuffer0");
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/blur_edge_pass/blur_edge_pass_x");
		armory_renderpath_RenderPathDeferred.path.setTarget("singlea");
		armory_renderpath_RenderPathDeferred.path.bindTarget("singleb","tex");
		armory_renderpath_RenderPathDeferred.path.bindTarget("gbuffer0","gbuffer0");
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/blur_edge_pass/blur_edge_pass_y");
	}
	armory_renderpath_Inc.drawShadowMap();
	armory_renderpath_RenderPathDeferred.path.setDepthFrom("tex","gbuffer1");
	armory_renderpath_RenderPathDeferred.path.setTarget("tex");
	armory_renderpath_RenderPathDeferred.path.bindTarget("_main","gbufferD");
	armory_renderpath_RenderPathDeferred.path.bindTarget("gbuffer0","gbuffer0");
	armory_renderpath_RenderPathDeferred.path.bindTarget("gbuffer1","gbuffer1");
	if(armory_data_Config.raw.rp_ssgi != false) {
		armory_renderpath_RenderPathDeferred.path.bindTarget("singlea","ssaotex");
	} else {
		armory_renderpath_RenderPathDeferred.path.bindTarget("empty_white","ssaotex");
	}
	var voxelao_pass = false;
	armory_renderpath_Inc.bindShadowMap();
	if(voxelao_pass) {
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/deferred_light/deferred_light_VoxelAOvar");
	} else {
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/deferred_light/deferred_light");
	}
	armory_renderpath_RenderPathDeferred.path.setDepthFrom("tex","gbuffer0");
	if(iron_Scene.active.raw.world_ref != null) {
		armory_renderpath_RenderPathDeferred.path.setTarget("tex");
		armory_renderpath_RenderPathDeferred.path.drawSkydome("shader_datas/World_" + iron_Scene.active.raw.world_ref + "/World_" + iron_Scene.active.raw.world_ref);
	}
	armory_renderpath_RenderPathDeferred.path.setTarget("tex");
	armory_renderpath_RenderPathDeferred.path.drawMeshes("blend");
	var framebuffer = "";
	armory_renderpath_RenderPathCreator.finalTarget = armory_renderpath_RenderPathDeferred.path.currentTarget;
	var target = "";
	target = "buf";
	armory_renderpath_RenderPathDeferred.path.setTarget(target);
	armory_renderpath_RenderPathDeferred.path.bindTarget("tex","tex");
	var isProbe = false;
	if(!isProbe) {
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/compositor_pass/compositor_pass");
	} else {
		armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/copy_pass/copy_pass");
	}
	armory_renderpath_RenderPathDeferred.path.setTarget("bufa");
	armory_renderpath_RenderPathDeferred.path.clearTarget(0);
	armory_renderpath_RenderPathDeferred.path.bindTarget("buf","colorTex");
	armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/smaa_edge_detect/smaa_edge_detect");
	armory_renderpath_RenderPathDeferred.path.setTarget("bufb");
	armory_renderpath_RenderPathDeferred.path.clearTarget(0);
	armory_renderpath_RenderPathDeferred.path.bindTarget("bufa","edgesTex");
	armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/smaa_blend_weight/smaa_blend_weight");
	armory_renderpath_RenderPathDeferred.path.setTarget(framebuffer);
	armory_renderpath_RenderPathDeferred.path.bindTarget("buf","colorTex");
	armory_renderpath_RenderPathDeferred.path.bindTarget("bufb","blendTex");
	armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/smaa_neighborhood_blend/smaa_neighborhood_blend");
};
armory_renderpath_RenderPathDeferred.setupDepthTexture = function() {
	armory_renderpath_RenderPathDeferred.path.setDepthFrom("gbuffer0","gbuffer1");
	armory_renderpath_RenderPathDeferred.path.depthToRenderTarget.h["main"] = armory_renderpath_RenderPathDeferred.path.renderTargets.h["tex"];
	armory_renderpath_RenderPathDeferred.path.setTarget("depthtex");
	armory_renderpath_RenderPathDeferred.path.bindTarget("_main","tex");
	armory_renderpath_RenderPathDeferred.path.drawShader("shader_datas/copy_pass/copy_pass");
	armory_renderpath_RenderPathDeferred.path.setDepthFrom("gbuffer0","tex");
	armory_renderpath_RenderPathDeferred.path.depthToRenderTarget.h["main"] = armory_renderpath_RenderPathDeferred.path.renderTargets.h["gbuffer0"];
	armory_renderpath_RenderPathDeferred.setTargetMeshes();
	armory_renderpath_RenderPathDeferred.path.bindTarget("depthtex","depthtex");
};
var armory_renderpath_RenderPathCreator = function() { };
$hxClasses["armory.renderpath.RenderPathCreator"] = armory_renderpath_RenderPathCreator;
armory_renderpath_RenderPathCreator.__name__ = true;
armory_renderpath_RenderPathCreator.commands = function() {
};
armory_renderpath_RenderPathCreator.get = function() {
	armory_renderpath_RenderPathCreator.path = new iron_RenderPath();
	armory_renderpath_Inc.init(armory_renderpath_RenderPathCreator.path);
	armory_renderpath_RenderPathDeferred.init(armory_renderpath_RenderPathCreator.path);
	armory_renderpath_RenderPathCreator.path.commands = function() {
		armory_renderpath_RenderPathDeferred.commands();
		armory_renderpath_RenderPathCreator.commands();
	};
	armory_renderpath_RenderPathCreator.path.setupDepthTexture = armory_renderpath_RenderPathDeferred.setupDepthTexture;
	return armory_renderpath_RenderPathCreator.path;
};
var haxe_Exception = function(message,previous,native) {
	Error.call(this,message);
	this.message = message;
	this.__previousException = previous;
	this.__nativeException = native != null ? native : this;
};
$hxClasses["haxe.Exception"] = haxe_Exception;
haxe_Exception.__name__ = true;
haxe_Exception.caught = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value;
	} else if(((value) instanceof Error)) {
		return new haxe_Exception(value.message,null,value);
	} else {
		return new haxe_ValueException(value,null,value);
	}
};
haxe_Exception.thrown = function(value) {
	if(((value) instanceof haxe_Exception)) {
		return value.get_native();
	} else if(((value) instanceof Error)) {
		return value;
	} else {
		var e = new haxe_ValueException(value);
		return e;
	}
};
haxe_Exception.__super__ = Error;
haxe_Exception.prototype = $extend(Error.prototype,{
	unwrap: function() {
		return this.__nativeException;
	}
	,toString: function() {
		return this.get_message();
	}
	,get_message: function() {
		return this.message;
	}
	,get_native: function() {
		return this.__nativeException;
	}
	,__class__: haxe_Exception
	,__properties__: {get_native:"get_native",get_message:"get_message"}
});
var haxe_exceptions_PosException = function(message,previous,pos) {
	haxe_Exception.call(this,message,previous);
	if(pos == null) {
		this.posInfos = { fileName : "(unknown)", lineNumber : 0, className : "(unknown)", methodName : "(unknown)"};
	} else {
		this.posInfos = pos;
	}
};
$hxClasses["haxe.exceptions.PosException"] = haxe_exceptions_PosException;
haxe_exceptions_PosException.__name__ = true;
haxe_exceptions_PosException.__super__ = haxe_Exception;
haxe_exceptions_PosException.prototype = $extend(haxe_Exception.prototype,{
	toString: function() {
		return "" + haxe_Exception.prototype.toString.call(this) + " in " + this.posInfos.className + "." + this.posInfos.methodName + " at " + this.posInfos.fileName + ":" + this.posInfos.lineNumber;
	}
	,__class__: haxe_exceptions_PosException
});
var armory_system_Starter = function() { };
$hxClasses["armory.system.Starter"] = armory_system_Starter;
armory_system_Starter.__name__ = true;
armory_system_Starter.main = function(scene,mode,resize,min,max,w,h,msaa,vsync,getRenderPath) {
	var tasks = 0;
	var start = function() {
		if(tasks > 0) {
			return;
		}
		if(armory_data_Config.raw == null) {
			armory_data_Config.raw = { };
		}
		var c = armory_data_Config.raw;
		if(c.window_mode == null) {
			c.window_mode = mode;
		}
		if(c.window_resizable == null) {
			c.window_resizable = resize;
		}
		if(c.window_minimizable == null) {
			c.window_minimizable = min;
		}
		if(c.window_maximizable == null) {
			c.window_maximizable = max;
		}
		if(c.window_w == null) {
			c.window_w = w;
		}
		if(c.window_h == null) {
			c.window_h = h;
		}
		if(c.window_scale == null) {
			c.window_scale = 1.0;
		}
		if(c.window_msaa == null) {
			c.window_msaa = msaa;
		}
		if(c.window_vsync == null) {
			c.window_vsync = vsync;
		}
		armory_object_Uniforms.register();
		var windowMode = c.window_mode == 0 ? 0 : 1;
		var windowFeatures = 0;
		if(c.window_resizable) {
			windowFeatures |= 1;
		}
		if(c.window_maximizable) {
			windowFeatures |= 4;
		}
		if(c.window_minimizable) {
			windowFeatures |= 2;
		}
		try {
			kha_System.start(new kha_SystemOptions("smoke",c.window_w,c.window_h,new kha_WindowOptions(null,-1,-1,800,600,-1,true,windowFeatures,windowMode),new kha_FramebufferOptions(60,c.window_vsync,32,16,8,c.window_msaa)),function($window) {
				iron_App.init(function() {
					var load = null;
					load = function(g) {
						if(iron_Scene.active != null && iron_Scene.active.ready) {
							iron_App.removeRender2D(load);
						} else {
							armory_system_Starter.drawLoading(g,iron_data_Data.assetsLoaded,armory_system_Starter.numAssets);
						}
					};
					iron_App.notifyOnRender2D(load);
					iron_Scene.setActive(scene,function(object) {
						iron_RenderPath.setActive(getRenderPath());
					});
				});
			});
		} catch( _g ) {
			if(!kha_SystemImpl.gl2) {
				haxe_Log.trace("This project was not compiled with legacy shaders flag - please use WebGL 2 capable browser.",{ fileName : "Sources/armory/system/Starter.hx", lineNumber : 70, className : "armory.system.Starter", methodName : "main"});
			}
		}
	};
	tasks = 1;
	tasks -= 1;
	start();
};
var iron_Trait = function() {
	this._render2D = null;
	this._render = null;
	this._lateUpdate = null;
	this._update = null;
	this._remove = null;
	this._init = null;
	this._add = null;
};
$hxClasses["iron.Trait"] = iron_Trait;
iron_Trait.__name__ = true;
iron_Trait.prototype = {
	remove: function() {
		this.object.removeTrait(this);
	}
	,notifyOnInit: function(f) {
		if(this._init == null) {
			this._init = [];
		}
		this._init.push(f);
		iron_App.notifyOnInit(f);
	}
	,notifyOnRemove: function(f) {
		if(this._remove == null) {
			this._remove = [];
		}
		this._remove.push(f);
	}
	,notifyOnUpdate: function(f) {
		if(this._update == null) {
			this._update = [];
		}
		this._update.push(f);
		iron_App.notifyOnUpdate(f);
	}
	,__class__: iron_Trait
};
var armory_trait_WalkNavigation = function() {
	this.ease = 1.0;
	this.yvec = new iron_math_Vec4();
	this.xvec = new iron_math_Vec4();
	this.dir = new iron_math_Vec4();
	this.speed = 5.0;
	iron_Trait.call(this);
	this.notifyOnInit($bind(this,this.init));
};
$hxClasses["armory.trait.WalkNavigation"] = armory_trait_WalkNavigation;
armory_trait_WalkNavigation.__name__ = true;
armory_trait_WalkNavigation.__super__ = iron_Trait;
armory_trait_WalkNavigation.prototype = $extend(iron_Trait.prototype,{
	init: function() {
		this.keyboard = iron_system_Input.getKeyboard();
		this.gamepad = iron_system_Input.getGamepad();
		this.mouse = iron_system_Input.getMouse();
		try {
			this.camera = js_Boot.__cast(this.object , iron_object_CameraObject);
		} catch( _g ) {
			var _g1 = haxe_Exception.caught(_g).unwrap();
			if(typeof(_g1) == "string") {
				var msg = _g1;
				haxe_Log.trace("Error occurred: " + msg + "\nWalkNavigation trait should be used with a camera object.",{ fileName : "Sources/armory/trait/WalkNavigation.hx", lineNumber : 38, className : "armory.trait.WalkNavigation", methodName : "init"});
			} else {
				throw _g;
			}
		}
		if(this.camera != null) {
			this.notifyOnUpdate($bind(this,this.update));
		}
	}
	,update: function() {
		if(!armory_trait_WalkNavigation.enabled || iron_system_Input.occupied) {
			return;
		}
		var moveForward = this.keyboard.down("w") || this.keyboard.down("up");
		var moveBackward = this.keyboard.down("s") || this.keyboard.down("down");
		var strafeLeft = this.keyboard.down("a") || this.keyboard.down("left");
		var strafeRight = this.keyboard.down("d") || this.keyboard.down("right");
		var strafeUp = this.keyboard.down("e");
		var strafeDown = this.keyboard.down("q");
		var fast = this.keyboard.down("shift") ? 2.0 : this.keyboard.down("alt") ? 0.5 : 1.0;
		if(this.gamepad != null) {
			var leftStickY = Math.abs(this.gamepad.leftStick.y) > 0.05;
			var leftStickX = Math.abs(this.gamepad.leftStick.x) > 0.05;
			var r1 = this.gamepad.down("r1") > 0.0;
			var l1 = this.gamepad.down("l1") > 0.0;
			var rightStickX = Math.abs(this.gamepad.rightStick.x) > 0.1;
			var rightStickY = Math.abs(this.gamepad.rightStick.y) > 0.1;
			if(leftStickY || leftStickX || r1 || l1 || rightStickX || rightStickY) {
				var _this = this.dir;
				_this.x = 0;
				_this.y = 0;
				_this.z = 0;
				_this.w = 1.0;
				if(leftStickY) {
					var _this = this.yvec;
					var _this1 = this.camera;
					var x = -_this1.transform.local.self._20;
					var y = -_this1.transform.local.self._21;
					var z = -_this1.transform.local.self._22;
					if(z == null) {
						z = 0.0;
					}
					if(y == null) {
						y = 0.0;
					}
					if(x == null) {
						x = 0.0;
					}
					var v_x = x;
					var v_y = y;
					var v_z = z;
					var v_w = 1.0;
					_this.x = v_x;
					_this.y = v_y;
					_this.z = v_z;
					_this.w = v_w;
					var _this = this.yvec;
					var f = this.gamepad.leftStick.y;
					_this.x *= f;
					_this.y *= f;
					_this.z *= f;
					var _this = this.dir;
					var v = this.yvec;
					_this.x += v.x;
					_this.y += v.y;
					_this.z += v.z;
				}
				if(leftStickX) {
					var _this = this.xvec;
					var _this1 = this.camera;
					var x = _this1.transform.local.self._00;
					var y = _this1.transform.local.self._01;
					var z = _this1.transform.local.self._02;
					if(z == null) {
						z = 0.0;
					}
					if(y == null) {
						y = 0.0;
					}
					if(x == null) {
						x = 0.0;
					}
					var v_x = x;
					var v_y = y;
					var v_z = z;
					var v_w = 1.0;
					_this.x = v_x;
					_this.y = v_y;
					_this.z = v_z;
					_this.w = v_w;
					var _this = this.xvec;
					var f = this.gamepad.leftStick.x;
					_this.x *= f;
					_this.y *= f;
					_this.z *= f;
					var _this = this.dir;
					var v = this.xvec;
					_this.x += v.x;
					_this.y += v.y;
					_this.z += v.z;
				}
				if(r1) {
					var _this = this.dir;
					_this.x += 0;
					_this.y += 0;
					_this.z += 1;
				}
				if(l1) {
					var _this = this.dir;
					_this.x += 0;
					_this.y += 0;
					_this.z += -1;
				}
				var d = iron_system_Time.get_delta() * this.speed * fast;
				this.camera.transform.move(this.dir,d);
				if(rightStickX) {
					this.camera.transform.rotate(new iron_math_Vec4(0.0,0.0,1.0),-this.gamepad.rightStick.x / 15.0);
				}
				if(rightStickY) {
					var _this = this.camera;
					this.camera.transform.rotate(new iron_math_Vec4(_this.transform.local.self._00,_this.transform.local.self._01,_this.transform.local.self._02),this.gamepad.rightStick.y / 15.0);
				}
			}
		}
		if(moveForward || moveBackward || strafeRight || strafeLeft || strafeUp || strafeDown) {
			this.ease += iron_system_Time.get_delta() * 15;
			if(this.ease > 1.0) {
				this.ease = 1.0;
			}
			var _this = this.dir;
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 1.0;
			if(moveForward) {
				var _this = this.dir;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y1 = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				_this.x += inlVec4_x;
				_this.y += inlVec4_y;
				_this.z += inlVec4_z;
			}
			if(moveBackward) {
				var _this = this.dir;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = -_this1.transform.local.self._20;
				var y = -_this1.transform.local.self._21;
				var z = -_this1.transform.local.self._22;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y1 = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				_this.x += -inlVec4_x;
				_this.y += -inlVec4_y;
				_this.z += -inlVec4_z;
			}
			if(strafeRight) {
				var _this = this.dir;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y1 = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				_this.x += inlVec4_x;
				_this.y += inlVec4_y;
				_this.z += inlVec4_z;
			}
			if(strafeLeft) {
				var _this = this.dir;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				var _this1 = this.camera;
				var x = _this1.transform.local.self._00;
				var y = _this1.transform.local.self._01;
				var z = _this1.transform.local.self._02;
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var inlVec4_x1 = x;
				var inlVec4_y1 = y;
				var inlVec4_z = z;
				var inlVec4_w = 1.0;
				_this.x += -inlVec4_x;
				_this.y += -inlVec4_y;
				_this.z += -inlVec4_z;
			}
			if(strafeUp) {
				var _this = this.dir;
				_this.x += 0;
				_this.y += 0;
				_this.z += 1;
			}
			if(strafeDown) {
				var _this = this.dir;
				_this.x += 0;
				_this.y += 0;
				_this.z += -1;
			}
		} else {
			this.ease -= iron_system_Time.get_delta() * 20.0 * this.ease;
			if(this.ease < 0.0) {
				this.ease = 0.0;
			}
		}
		if(this.mouse.wheelDelta < 0) {
			this.speed *= 1.1;
		} else if(this.mouse.wheelDelta > 0) {
			this.speed *= 0.9;
			if(this.speed < 0.5) {
				this.speed = 0.5;
			}
		}
		var d = iron_system_Time.get_delta() * this.speed * fast * this.ease;
		if(d > 0.0) {
			this.camera.transform.move(this.dir,d);
		}
		if(this.mouse.down()) {
			this.camera.transform.rotate(new iron_math_Vec4(0.0,0.0,1.0),-this.mouse.movementX / 200);
			var _this = this.camera;
			this.camera.transform.rotate(new iron_math_Vec4(_this.transform.local.self._00,_this.transform.local.self._01,_this.transform.local.self._02),-this.mouse.movementY / 200);
		}
	}
	,__class__: armory_trait_WalkNavigation
});
var armory_trait_internal_LoadingScreen = function() { };
$hxClasses["armory.trait.internal.LoadingScreen"] = armory_trait_internal_LoadingScreen;
armory_trait_internal_LoadingScreen.__name__ = true;
armory_trait_internal_LoadingScreen.render = function(g,assetsLoaded,assetsTotal) {
	g.set_color(-3200189);
	g.fillRect(0,kha_System.windowHeight() - 6,kha_System.windowWidth() / assetsTotal * assetsLoaded,6);
};
var armory_trait_internal_UniformsManager = function() {
	this.uniformExists = false;
	iron_Trait.call(this);
	this.notifyOnInit($bind(this,this.init));
	this.notifyOnRemove($bind(this,this.removeObject));
	if(!armory_trait_internal_UniformsManager.sceneRemoveInitalized) {
		iron_Scene.active.notifyOnRemove(armory_trait_internal_UniformsManager.removeScene);
	}
};
$hxClasses["armory.trait.internal.UniformsManager"] = armory_trait_internal_UniformsManager;
armory_trait_internal_UniformsManager.__name__ = true;
armory_trait_internal_UniformsManager.removeScene = function() {
	armory_trait_internal_UniformsManager.removeObjectFromAllMaps(iron_Scene.active.root);
};
armory_trait_internal_UniformsManager.register = function(type) {
	switch(type) {
	case 0:
		if(!armory_trait_internal_UniformsManager.floatsRegistered) {
			armory_trait_internal_UniformsManager.floatsRegistered = true;
			iron_object_Uniforms.externalFloatLinks.push(armory_trait_internal_UniformsManager.floatLink);
		}
		break;
	case 1:
		if(!armory_trait_internal_UniformsManager.vectorsRegistered) {
			armory_trait_internal_UniformsManager.vectorsRegistered = true;
			iron_object_Uniforms.externalVec3Links.push(armory_trait_internal_UniformsManager.vec3Link);
		}
		break;
	case 2:
		if(!armory_trait_internal_UniformsManager.texturesRegistered) {
			armory_trait_internal_UniformsManager.texturesRegistered = true;
			iron_object_Uniforms.externalTextureLinks.push(armory_trait_internal_UniformsManager.textureLink);
		}
		break;
	}
};
armory_trait_internal_UniformsManager.registerShaderUniforms = function(material) {
	var uniformExist = false;
	if(armory_trait_internal_UniformsManager.floatsMap.h.__keys__[iron_Scene.active.root.__id__] == null) {
		armory_trait_internal_UniformsManager.floatsMap.set(iron_Scene.active.root,null);
	}
	if(armory_trait_internal_UniformsManager.vectorsMap.h.__keys__[iron_Scene.active.root.__id__] == null) {
		armory_trait_internal_UniformsManager.vectorsMap.set(iron_Scene.active.root,null);
	}
	if(armory_trait_internal_UniformsManager.texturesMap.h.__keys__[iron_Scene.active.root.__id__] == null) {
		armory_trait_internal_UniformsManager.texturesMap.set(iron_Scene.active.root,null);
	}
	var _g = 0;
	var _g1 = material.shader.raw.contexts;
	while(_g < _g1.length) {
		var context = _g1[_g];
		++_g;
		var _g2 = 0;
		var _g3 = context.constants;
		while(_g2 < _g3.length) {
			var constant = _g3[_g2];
			++_g2;
			if(constant.is_arm_parameter) {
				uniformExist = true;
				var object = iron_Scene.active.root;
				switch(constant.type) {
				case "float":
					var link = constant.link;
					var value = constant.float;
					armory_trait_internal_UniformsManager.setFloatValue(material,object,link,value);
					armory_trait_internal_UniformsManager.register(0);
					break;
				case "vec3":
					var vec = new iron_math_Vec4();
					vec.x = constant.vec3.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					vec.y = constant.vec3.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					vec.z = constant.vec3.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
					armory_trait_internal_UniformsManager.setVec3Value(material,object,constant.link,vec);
					armory_trait_internal_UniformsManager.register(1);
					break;
				}
			}
		}
		var _g4 = 0;
		var _g5 = context.texture_units;
		while(_g4 < _g5.length) {
			var texture = [_g5[_g4]];
			++_g4;
			if(texture[0].is_arm_parameter) {
				uniformExist = true;
				var object1 = [iron_Scene.active.root];
				if(texture[0].default_image_file == null) {
					armory_trait_internal_UniformsManager.setTextureValue(material,object1[0],texture[0].link,null);
				} else {
					iron_data_Data.getImage(texture[0].default_image_file,(function(object,texture) {
						return function(image) {
							armory_trait_internal_UniformsManager.setTextureValue(material,object[0],texture[0].link,image);
						};
					})(object1,texture));
				}
				armory_trait_internal_UniformsManager.register(2);
			}
		}
	}
	return uniformExist;
};
armory_trait_internal_UniformsManager.setFloatValue = function(material,object,link,value) {
	if(object == null || material == null || link == null) {
		return;
	}
	var map = armory_trait_internal_UniformsManager.floatsMap;
	var matMap = map.h[object.__id__];
	if(matMap == null) {
		matMap = new haxe_ds_ObjectMap();
		map.set(object,matMap);
	}
	var entry = matMap.h[material.__id__];
	if(entry == null) {
		entry = new haxe_ds_StringMap();
		matMap.set(material,entry);
	}
	entry.h[link] = value;
};
armory_trait_internal_UniformsManager.setVec3Value = function(material,object,link,value) {
	if(object == null || material == null || link == null) {
		return;
	}
	var map = armory_trait_internal_UniformsManager.vectorsMap;
	var matMap = map.h[object.__id__];
	if(matMap == null) {
		matMap = new haxe_ds_ObjectMap();
		map.set(object,matMap);
	}
	var entry = matMap.h[material.__id__];
	if(entry == null) {
		entry = new haxe_ds_StringMap();
		matMap.set(material,entry);
	}
	entry.h[link] = value;
};
armory_trait_internal_UniformsManager.setTextureValue = function(material,object,link,value) {
	if(object == null || material == null || link == null) {
		return;
	}
	var map = armory_trait_internal_UniformsManager.texturesMap;
	var matMap = map.h[object.__id__];
	if(matMap == null) {
		matMap = new haxe_ds_ObjectMap();
		map.set(object,matMap);
	}
	var entry = matMap.h[material.__id__];
	if(entry == null) {
		entry = new haxe_ds_StringMap();
		matMap.set(material,entry);
	}
	entry.h[link] = value;
};
armory_trait_internal_UniformsManager.floatLink = function(object,mat,link) {
	if(object == null || mat == null) {
		return null;
	}
	if(armory_trait_internal_UniformsManager.floatsMap.h.__keys__[object.__id__] == null) {
		object = iron_Scene.active.root;
	}
	var material = armory_trait_internal_UniformsManager.floatsMap.h[object.__id__];
	if(material == null) {
		return null;
	}
	var entry = material.h[mat.__id__];
	if(entry == null) {
		return null;
	}
	return entry.h[link];
};
armory_trait_internal_UniformsManager.vec3Link = function(object,mat,link) {
	if(object == null || mat == null) {
		return null;
	}
	if(armory_trait_internal_UniformsManager.vectorsMap.h.__keys__[object.__id__] == null) {
		object = iron_Scene.active.root;
	}
	var material = armory_trait_internal_UniformsManager.vectorsMap.h[object.__id__];
	if(material == null) {
		return null;
	}
	var entry = material.h[mat.__id__];
	if(entry == null) {
		return null;
	}
	return entry.h[link];
};
armory_trait_internal_UniformsManager.textureLink = function(object,mat,link) {
	if(object == null || mat == null) {
		return null;
	}
	if(armory_trait_internal_UniformsManager.texturesMap.h.__keys__[object.__id__] == null) {
		object = iron_Scene.active.root;
	}
	var material = armory_trait_internal_UniformsManager.texturesMap.h[object.__id__];
	if(material == null) {
		return null;
	}
	var entry = material.h[mat.__id__];
	if(entry == null) {
		return null;
	}
	return entry.h[link];
};
armory_trait_internal_UniformsManager.getFloatsMap = function() {
	return armory_trait_internal_UniformsManager.floatsMap;
};
armory_trait_internal_UniformsManager.getVectorsMap = function() {
	return armory_trait_internal_UniformsManager.vectorsMap;
};
armory_trait_internal_UniformsManager.getTexturesMap = function() {
	return armory_trait_internal_UniformsManager.texturesMap;
};
armory_trait_internal_UniformsManager.removeObjectFromAllMaps = function(object) {
	armory_trait_internal_UniformsManager.floatsMap.remove(object);
	armory_trait_internal_UniformsManager.vectorsMap.remove(object);
	armory_trait_internal_UniformsManager.texturesMap.remove(object);
};
armory_trait_internal_UniformsManager.removeObjectFromMap = function(object,type) {
	switch(type) {
	case 0:
		armory_trait_internal_UniformsManager.floatsMap.remove(object);
		break;
	case 1:
		armory_trait_internal_UniformsManager.vectorsMap.remove(object);
		break;
	case 2:
		armory_trait_internal_UniformsManager.texturesMap.remove(object);
		break;
	}
};
armory_trait_internal_UniformsManager.__super__ = iron_Trait;
armory_trait_internal_UniformsManager.prototype = $extend(iron_Trait.prototype,{
	init: function() {
		if(((this.object) instanceof iron_object_MeshObject)) {
			var materials = (js_Boot.__cast(this.object , iron_object_MeshObject)).materials;
			var _g = 0;
			while(_g < materials.length) {
				var material = materials[_g];
				++_g;
				var exists = armory_trait_internal_UniformsManager.registerShaderUniforms(material);
				if(exists) {
					this.uniformExists = true;
				}
			}
		}
	}
	,removeObject: function() {
		armory_trait_internal_UniformsManager.removeObjectFromAllMaps(this.object);
	}
	,__class__: armory_trait_internal_UniformsManager
});
var haxe_IMap = function() { };
$hxClasses["haxe.IMap"] = haxe_IMap;
haxe_IMap.__name__ = true;
haxe_IMap.__isInterface__ = true;
var haxe_Log = function() { };
$hxClasses["haxe.Log"] = haxe_Log;
haxe_Log.__name__ = true;
haxe_Log.formatOutput = function(v,infos) {
	var str = Std.string(v);
	if(infos == null) {
		return str;
	}
	var pstr = infos.fileName + ":" + infos.lineNumber;
	if(infos.customParams != null) {
		var _g = 0;
		var _g1 = infos.customParams;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			str += ", " + Std.string(v);
		}
	}
	return pstr + ": " + str;
};
haxe_Log.trace = function(v,infos) {
	var str = haxe_Log.formatOutput(v,infos);
	if(typeof(console) != "undefined" && console.log != null) {
		console.log(str);
	}
};
var haxe__$Unserializer_DefaultResolver = function() {
};
$hxClasses["haxe._Unserializer.DefaultResolver"] = haxe__$Unserializer_DefaultResolver;
haxe__$Unserializer_DefaultResolver.__name__ = true;
haxe__$Unserializer_DefaultResolver.prototype = {
	resolveClass: function(name) {
		return $hxClasses[name];
	}
	,resolveEnum: function(name) {
		return $hxEnums[name];
	}
	,__class__: haxe__$Unserializer_DefaultResolver
};
var haxe_Unserializer = function(buf) {
	this.buf = buf;
	this.length = this.buf.length;
	this.pos = 0;
	this.scache = [];
	this.cache = [];
	var r = haxe_Unserializer.DEFAULT_RESOLVER;
	if(r == null) {
		r = new haxe__$Unserializer_DefaultResolver();
		haxe_Unserializer.DEFAULT_RESOLVER = r;
	}
	this.resolver = r;
};
$hxClasses["haxe.Unserializer"] = haxe_Unserializer;
haxe_Unserializer.__name__ = true;
haxe_Unserializer.initCodes = function() {
	var codes = [];
	var _g = 0;
	var _g1 = haxe_Unserializer.BASE64.length;
	while(_g < _g1) {
		var i = _g++;
		codes[haxe_Unserializer.BASE64.charCodeAt(i)] = i;
	}
	return codes;
};
haxe_Unserializer.run = function(v) {
	return new haxe_Unserializer(v).unserialize();
};
haxe_Unserializer.prototype = {
	readDigits: function() {
		var k = 0;
		var s = false;
		var fpos = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c == 45) {
				if(this.pos != fpos) {
					break;
				}
				s = true;
				this.pos++;
				continue;
			}
			if(c < 48 || c > 57) {
				break;
			}
			k = k * 10 + (c - 48);
			this.pos++;
		}
		if(s) {
			k *= -1;
		}
		return k;
	}
	,readFloat: function() {
		var p1 = this.pos;
		while(true) {
			var c = this.buf.charCodeAt(this.pos);
			if(c != c) {
				break;
			}
			if(c >= 43 && c < 58 || c == 101 || c == 69) {
				this.pos++;
			} else {
				break;
			}
		}
		return parseFloat(HxOverrides.substr(this.buf,p1,this.pos - p1));
	}
	,unserializeObject: function(o) {
		while(true) {
			if(this.pos >= this.length) {
				throw haxe_Exception.thrown("Invalid object");
			}
			if(this.buf.charCodeAt(this.pos) == 103) {
				break;
			}
			var k = this.unserialize();
			if(typeof(k) != "string") {
				throw haxe_Exception.thrown("Invalid object key");
			}
			var v = this.unserialize();
			o[k] = v;
		}
		this.pos++;
	}
	,unserializeEnum: function(edecl,tag) {
		if(this.buf.charCodeAt(this.pos++) != 58) {
			throw haxe_Exception.thrown("Invalid enum format");
		}
		var nargs = this.readDigits();
		if(nargs == 0) {
			return Type.createEnum(edecl,tag);
		}
		var args = [];
		while(nargs-- > 0) args.push(this.unserialize());
		return Type.createEnum(edecl,tag,args);
	}
	,unserialize: function() {
		switch(this.buf.charCodeAt(this.pos++)) {
		case 65:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			return cl;
		case 66:
			var name = this.unserialize();
			var e = this.resolver.resolveEnum(name);
			if(e == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			return e;
		case 67:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			o.hxUnserialize(this);
			if(this.buf.charCodeAt(this.pos++) != 103) {
				throw haxe_Exception.thrown("Invalid custom data");
			}
			return o;
		case 77:
			var h = new haxe_ds_ObjectMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				h.set(s,this.unserialize());
			}
			this.pos++;
			return h;
		case 82:
			var n = this.readDigits();
			if(n < 0 || n >= this.scache.length) {
				throw haxe_Exception.thrown("Invalid string reference");
			}
			return this.scache[n];
		case 97:
			var buf = this.buf;
			var a = [];
			this.cache.push(a);
			while(true) {
				var c = this.buf.charCodeAt(this.pos);
				if(c == 104) {
					this.pos++;
					break;
				}
				if(c == 117) {
					this.pos++;
					var n = this.readDigits();
					a[a.length + n - 1] = null;
				} else {
					a.push(this.unserialize());
				}
			}
			return a;
		case 98:
			var h = new haxe_ds_StringMap();
			this.cache.push(h);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) {
				var s = this.unserialize();
				var value = this.unserialize();
				h.h[s] = value;
			}
			this.pos++;
			return h;
		case 99:
			var name = this.unserialize();
			var cl = this.resolver.resolveClass(name);
			if(cl == null) {
				throw haxe_Exception.thrown("Class not found " + name);
			}
			var o = Object.create(cl.prototype);
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 100:
			return this.readFloat();
		case 102:
			return false;
		case 105:
			return this.readDigits();
		case 106:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			this.pos++;
			var index = this.readDigits();
			var _this = edecl.__constructs__;
			var result = new Array(_this.length);
			var _g = 0;
			var _g1 = _this.length;
			while(_g < _g1) {
				var i = _g++;
				result[i] = _this[i]._hx_name;
			}
			var tag = result[index];
			if(tag == null) {
				throw haxe_Exception.thrown("Unknown enum index " + name + "@" + index);
			}
			var e = this.unserializeEnum(edecl,tag);
			this.cache.push(e);
			return e;
		case 107:
			return NaN;
		case 108:
			var l = new haxe_ds_List();
			this.cache.push(l);
			var buf = this.buf;
			while(this.buf.charCodeAt(this.pos) != 104) l.add(this.unserialize());
			this.pos++;
			return l;
		case 109:
			return -Infinity;
		case 110:
			return null;
		case 111:
			var o = { };
			this.cache.push(o);
			this.unserializeObject(o);
			return o;
		case 112:
			return Infinity;
		case 113:
			var h = new haxe_ds_IntMap();
			this.cache.push(h);
			var buf = this.buf;
			var c = this.buf.charCodeAt(this.pos++);
			while(c == 58) {
				var i = this.readDigits();
				var value = this.unserialize();
				h.h[i] = value;
				c = this.buf.charCodeAt(this.pos++);
			}
			if(c != 104) {
				throw haxe_Exception.thrown("Invalid IntMap format");
			}
			return h;
		case 114:
			var n = this.readDigits();
			if(n < 0 || n >= this.cache.length) {
				throw haxe_Exception.thrown("Invalid reference");
			}
			return this.cache[n];
		case 115:
			var len = this.readDigits();
			var buf = this.buf;
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid bytes length");
			}
			var codes = haxe_Unserializer.CODES;
			if(codes == null) {
				codes = haxe_Unserializer.initCodes();
				haxe_Unserializer.CODES = codes;
			}
			var i = this.pos;
			var rest = len & 3;
			var size = (len >> 2) * 3 + (rest >= 2 ? rest - 1 : 0);
			var max = i + (len - rest);
			var bytes = new haxe_io_Bytes(new ArrayBuffer(size));
			var bpos = 0;
			while(i < max) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = c1 << 2 | c2 >> 4;
				var c3 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = c2 << 4 | c3 >> 2;
				var c4 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = c3 << 6 | c4;
			}
			if(rest >= 2) {
				var c1 = codes[buf.charCodeAt(i++)];
				var c2 = codes[buf.charCodeAt(i++)];
				bytes.b[bpos++] = c1 << 2 | c2 >> 4;
				if(rest == 3) {
					var c3 = codes[buf.charCodeAt(i++)];
					bytes.b[bpos++] = c2 << 4 | c3 >> 2;
				}
			}
			this.pos += len;
			this.cache.push(bytes);
			return bytes;
		case 116:
			return true;
		case 118:
			var d;
			if(this.buf.charCodeAt(this.pos) >= 48 && this.buf.charCodeAt(this.pos) <= 57 && this.buf.charCodeAt(this.pos + 1) >= 48 && this.buf.charCodeAt(this.pos + 1) <= 57 && this.buf.charCodeAt(this.pos + 2) >= 48 && this.buf.charCodeAt(this.pos + 2) <= 57 && this.buf.charCodeAt(this.pos + 3) >= 48 && this.buf.charCodeAt(this.pos + 3) <= 57 && this.buf.charCodeAt(this.pos + 4) == 45) {
				d = HxOverrides.strDate(HxOverrides.substr(this.buf,this.pos,19));
				this.pos += 19;
			} else {
				d = new Date(this.readFloat());
			}
			this.cache.push(d);
			return d;
		case 119:
			var name = this.unserialize();
			var edecl = this.resolver.resolveEnum(name);
			if(edecl == null) {
				throw haxe_Exception.thrown("Enum not found " + name);
			}
			var e = this.unserializeEnum(edecl,this.unserialize());
			this.cache.push(e);
			return e;
		case 120:
			throw haxe_Exception.thrown(this.unserialize());
		case 121:
			var len = this.readDigits();
			if(this.buf.charCodeAt(this.pos++) != 58 || this.length - this.pos < len) {
				throw haxe_Exception.thrown("Invalid string length");
			}
			var s = HxOverrides.substr(this.buf,this.pos,len);
			this.pos += len;
			s = decodeURIComponent(s.split("+").join(" "));
			this.scache.push(s);
			return s;
		case 122:
			return 0;
		default:
		}
		this.pos--;
		throw haxe_Exception.thrown("Invalid char " + this.buf.charAt(this.pos) + " at position " + this.pos);
	}
	,__class__: haxe_Unserializer
};
var haxe_ValueException = function(value,previous,native) {
	haxe_Exception.call(this,String(value),previous,native);
	this.value = value;
};
$hxClasses["haxe.ValueException"] = haxe_ValueException;
haxe_ValueException.__name__ = true;
haxe_ValueException.__super__ = haxe_Exception;
haxe_ValueException.prototype = $extend(haxe_Exception.prototype,{
	unwrap: function() {
		return this.value;
	}
	,__class__: haxe_ValueException
});
var haxe_io_Bytes = function(data) {
	this.length = data.byteLength;
	this.b = new Uint8Array(data);
	this.b.bufferValue = data;
	data.hxBytes = this;
	data.bytes = this.b;
};
$hxClasses["haxe.io.Bytes"] = haxe_io_Bytes;
haxe_io_Bytes.__name__ = true;
haxe_io_Bytes.ofData = function(b) {
	var hb = b.hxBytes;
	if(hb != null) {
		return hb;
	}
	return new haxe_io_Bytes(b);
};
haxe_io_Bytes.prototype = {
	blit: function(pos,src,srcpos,len) {
		if(pos < 0 || srcpos < 0 || len < 0 || pos + len > this.length || srcpos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(srcpos == 0 && len == src.b.byteLength) {
			this.b.set(src.b,pos);
		} else {
			this.b.set(src.b.subarray(srcpos,srcpos + len),pos);
		}
	}
	,getFloat: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getFloat32(pos,true);
	}
	,getInt32: function(pos) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		return this.data.getInt32(pos,true);
	}
	,setInt32: function(pos,v) {
		if(this.data == null) {
			this.data = new DataView(this.b.buffer,this.b.byteOffset,this.b.byteLength);
		}
		this.data.setInt32(pos,v,true);
	}
	,getString: function(pos,len,encoding) {
		if(pos < 0 || len < 0 || pos + len > this.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(encoding == null) {
			encoding = haxe_io_Encoding.UTF8;
		}
		var s = "";
		var b = this.b;
		var i = pos;
		var max = pos + len;
		switch(encoding._hx_index) {
		case 0:
			var debug = pos > 0;
			while(i < max) {
				var c = b[i++];
				if(c < 128) {
					if(c == 0) {
						break;
					}
					s += String.fromCodePoint(c);
				} else if(c < 224) {
					var code = (c & 63) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code);
				} else if(c < 240) {
					var c2 = b[i++];
					var code1 = (c & 31) << 12 | (c2 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(code1);
				} else {
					var c21 = b[i++];
					var c3 = b[i++];
					var u = (c & 15) << 18 | (c21 & 127) << 12 | (c3 & 127) << 6 | b[i++] & 127;
					s += String.fromCodePoint(u);
				}
			}
			break;
		case 1:
			while(i < max) {
				var c = b[i++] | b[i++] << 8;
				s += String.fromCodePoint(c);
			}
			break;
		}
		return s;
	}
	,toString: function() {
		return this.getString(0,this.length);
	}
	,__class__: haxe_io_Bytes
};
var haxe_io_Encoding = $hxEnums["haxe.io.Encoding"] = { __ename__:true,__constructs__:null
	,UTF8: {_hx_name:"UTF8",_hx_index:0,__enum__:"haxe.io.Encoding",toString:$estr}
	,RawNative: {_hx_name:"RawNative",_hx_index:1,__enum__:"haxe.io.Encoding",toString:$estr}
};
haxe_io_Encoding.__constructs__ = [haxe_io_Encoding.UTF8,haxe_io_Encoding.RawNative];
var haxe_ds_IntMap = function() {
	this.h = { };
};
$hxClasses["haxe.ds.IntMap"] = haxe_ds_IntMap;
haxe_ds_IntMap.__name__ = true;
haxe_ds_IntMap.__interfaces__ = [haxe_IMap];
haxe_ds_IntMap.prototype = {
	__class__: haxe_ds_IntMap
};
var haxe_ds_List = function() {
	this.length = 0;
};
$hxClasses["haxe.ds.List"] = haxe_ds_List;
haxe_ds_List.__name__ = true;
haxe_ds_List.prototype = {
	add: function(item) {
		var x = new haxe_ds__$List_ListNode(item,null);
		if(this.h == null) {
			this.h = x;
		} else {
			this.q.next = x;
		}
		this.q = x;
		this.length++;
	}
	,__class__: haxe_ds_List
};
var haxe_ds__$List_ListNode = function(item,next) {
	this.item = item;
	this.next = next;
};
$hxClasses["haxe.ds._List.ListNode"] = haxe_ds__$List_ListNode;
haxe_ds__$List_ListNode.__name__ = true;
haxe_ds__$List_ListNode.prototype = {
	__class__: haxe_ds__$List_ListNode
};
var haxe_ds_ObjectMap = function() {
	this.h = { __keys__ : { }};
};
$hxClasses["haxe.ds.ObjectMap"] = haxe_ds_ObjectMap;
haxe_ds_ObjectMap.__name__ = true;
haxe_ds_ObjectMap.__interfaces__ = [haxe_IMap];
haxe_ds_ObjectMap.prototype = {
	set: function(key,value) {
		var id = key.__id__;
		if(id == null) {
			id = (key.__id__ = $global.$haxeUID++);
		}
		this.h[id] = value;
		this.h.__keys__[id] = key;
	}
	,remove: function(key) {
		var id = key.__id__;
		if(this.h.__keys__[id] == null) {
			return false;
		}
		delete(this.h[id]);
		delete(this.h.__keys__[id]);
		return true;
	}
	,__class__: haxe_ds_ObjectMap
};
var haxe_ds_StringMap = function() {
	this.h = Object.create(null);
};
$hxClasses["haxe.ds.StringMap"] = haxe_ds_StringMap;
haxe_ds_StringMap.__name__ = true;
haxe_ds_StringMap.__interfaces__ = [haxe_IMap];
haxe_ds_StringMap.prototype = {
	__class__: haxe_ds_StringMap
};
var haxe_exceptions_NotImplementedException = function(message,previous,pos) {
	if(message == null) {
		message = "Not implemented";
	}
	haxe_exceptions_PosException.call(this,message,previous,pos);
};
$hxClasses["haxe.exceptions.NotImplementedException"] = haxe_exceptions_NotImplementedException;
haxe_exceptions_NotImplementedException.__name__ = true;
haxe_exceptions_NotImplementedException.__super__ = haxe_exceptions_PosException;
haxe_exceptions_NotImplementedException.prototype = $extend(haxe_exceptions_PosException.prototype,{
	__class__: haxe_exceptions_NotImplementedException
});
var haxe_io_BytesBuffer = function() {
	this.pos = 0;
	this.size = 0;
};
$hxClasses["haxe.io.BytesBuffer"] = haxe_io_BytesBuffer;
haxe_io_BytesBuffer.__name__ = true;
haxe_io_BytesBuffer.prototype = {
	addByte: function(byte) {
		if(this.pos == this.size) {
			this.grow(1);
		}
		this.view.setUint8(this.pos++,byte);
	}
	,addBytes: function(src,pos,len) {
		if(pos < 0 || len < 0 || pos + len > src.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.pos + len > this.size) {
			this.grow(len);
		}
		if(this.size == 0) {
			return;
		}
		var sub = new Uint8Array(src.b.buffer,src.b.byteOffset + pos,len);
		this.u8.set(sub,this.pos);
		this.pos += len;
	}
	,grow: function(delta) {
		var req = this.pos + delta;
		var nsize = this.size == 0 ? 16 : this.size;
		while(nsize < req) nsize = nsize * 3 >> 1;
		var nbuf = new ArrayBuffer(nsize);
		var nu8 = new Uint8Array(nbuf);
		if(this.size > 0) {
			nu8.set(this.u8);
		}
		this.size = nsize;
		this.buffer = nbuf;
		this.u8 = nu8;
		this.view = new DataView(this.buffer);
	}
	,getBytes: function() {
		if(this.size == 0) {
			return new haxe_io_Bytes(new ArrayBuffer(0));
		}
		var b = new haxe_io_Bytes(this.buffer);
		b.length = this.pos;
		return b;
	}
	,__class__: haxe_io_BytesBuffer
};
var haxe_io_Input = function() { };
$hxClasses["haxe.io.Input"] = haxe_io_Input;
haxe_io_Input.__name__ = true;
haxe_io_Input.prototype = {
	readByte: function() {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Input.hx", lineNumber : 53, className : "haxe.io.Input", methodName : "readByte"});
	}
	,readBytes: function(s,pos,len) {
		var k = len;
		var b = s.b;
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		try {
			while(k > 0) {
				b[pos] = this.readByte();
				++pos;
				--k;
			}
		} catch( _g ) {
			if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				throw _g;
			}
		}
		return len - k;
	}
	,set_bigEndian: function(b) {
		this.bigEndian = b;
		return b;
	}
	,readFullBytes: function(s,pos,len) {
		while(len > 0) {
			var k = this.readBytes(s,pos,len);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			pos += k;
			len -= k;
		}
	}
	,read: function(nbytes) {
		var s = new haxe_io_Bytes(new ArrayBuffer(nbytes));
		var p = 0;
		while(nbytes > 0) {
			var k = this.readBytes(s,p,nbytes);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			nbytes -= k;
		}
		return s;
	}
	,readFloat: function() {
		return haxe_io_FPHelper.i32ToFloat(this.readInt32());
	}
	,readInt8: function() {
		var n = this.readByte();
		if(n >= 128) {
			return n - 256;
		}
		return n;
	}
	,readInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var n = this.bigEndian ? ch2 | ch1 << 8 : ch1 | ch2 << 8;
		if((n & 32768) != 0) {
			return n - 65536;
		}
		return n;
	}
	,readUInt16: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		if(this.bigEndian) {
			return ch2 | ch1 << 8;
		} else {
			return ch1 | ch2 << 8;
		}
	}
	,readInt32: function() {
		var ch1 = this.readByte();
		var ch2 = this.readByte();
		var ch3 = this.readByte();
		var ch4 = this.readByte();
		if(this.bigEndian) {
			return ch4 | ch3 << 8 | ch2 << 16 | ch1 << 24;
		} else {
			return ch1 | ch2 << 8 | ch3 << 16 | ch4 << 24;
		}
	}
	,readString: function(len,encoding) {
		var b = new haxe_io_Bytes(new ArrayBuffer(len));
		this.readFullBytes(b,0,len);
		return b.getString(0,len,encoding);
	}
	,__class__: haxe_io_Input
	,__properties__: {set_bigEndian:"set_bigEndian"}
};
var haxe_io_BytesInput = function(b,pos,len) {
	if(pos == null) {
		pos = 0;
	}
	if(len == null) {
		len = b.length - pos;
	}
	if(pos < 0 || len < 0 || pos + len > b.length) {
		throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
	}
	this.b = b.b;
	this.pos = pos;
	this.len = len;
	this.totlen = len;
};
$hxClasses["haxe.io.BytesInput"] = haxe_io_BytesInput;
haxe_io_BytesInput.__name__ = true;
haxe_io_BytesInput.__super__ = haxe_io_Input;
haxe_io_BytesInput.prototype = $extend(haxe_io_Input.prototype,{
	set_position: function(p) {
		if(p < 0) {
			p = 0;
		} else if(p > this.totlen) {
			p = this.totlen;
		}
		this.len = this.totlen - p;
		return this.pos = p;
	}
	,readByte: function() {
		if(this.len == 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		this.len--;
		return this.b[this.pos++];
	}
	,readBytes: function(buf,pos,len) {
		if(pos < 0 || len < 0 || pos + len > buf.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		if(this.len == 0 && len > 0) {
			throw haxe_Exception.thrown(new haxe_io_Eof());
		}
		if(this.len < len) {
			len = this.len;
		}
		var b1 = this.b;
		var b2 = buf.b;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			b2[pos + i] = b1[this.pos + i];
		}
		this.pos += len;
		this.len -= len;
		return len;
	}
	,__class__: haxe_io_BytesInput
	,__properties__: $extend(haxe_io_Input.prototype.__properties__,{set_position:"set_position"})
});
var haxe_io_Output = function() { };
$hxClasses["haxe.io.Output"] = haxe_io_Output;
haxe_io_Output.__name__ = true;
haxe_io_Output.prototype = {
	writeByte: function(c) {
		throw new haxe_exceptions_NotImplementedException(null,null,{ fileName : "haxe/io/Output.hx", lineNumber : 47, className : "haxe.io.Output", methodName : "writeByte"});
	}
	,writeBytes: function(s,pos,len) {
		if(pos < 0 || len < 0 || pos + len > s.length) {
			throw haxe_Exception.thrown(haxe_io_Error.OutsideBounds);
		}
		var b = s.b;
		var k = len;
		while(k > 0) {
			this.writeByte(b[pos]);
			++pos;
			--k;
		}
		return len;
	}
	,write: function(s) {
		var l = s.length;
		var p = 0;
		while(l > 0) {
			var k = this.writeBytes(s,p,l);
			if(k == 0) {
				throw haxe_Exception.thrown(haxe_io_Error.Blocked);
			}
			p += k;
			l -= k;
		}
	}
	,writeFloat: function(x) {
		this.writeInt32(haxe_io_FPHelper.floatToI32(x));
	}
	,writeInt32: function(x) {
		if(this.bigEndian) {
			this.writeByte(x >>> 24);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x & 255);
		} else {
			this.writeByte(x & 255);
			this.writeByte(x >> 8 & 255);
			this.writeByte(x >> 16 & 255);
			this.writeByte(x >>> 24);
		}
	}
	,__class__: haxe_io_Output
};
var haxe_io_BytesOutput = function() {
	this.b = new haxe_io_BytesBuffer();
};
$hxClasses["haxe.io.BytesOutput"] = haxe_io_BytesOutput;
haxe_io_BytesOutput.__name__ = true;
haxe_io_BytesOutput.__super__ = haxe_io_Output;
haxe_io_BytesOutput.prototype = $extend(haxe_io_Output.prototype,{
	writeByte: function(c) {
		this.b.addByte(c);
	}
	,writeBytes: function(buf,pos,len) {
		this.b.addBytes(buf,pos,len);
		return len;
	}
	,getBytes: function() {
		return this.b.getBytes();
	}
	,__class__: haxe_io_BytesOutput
});
var haxe_io_Eof = function() {
};
$hxClasses["haxe.io.Eof"] = haxe_io_Eof;
haxe_io_Eof.__name__ = true;
haxe_io_Eof.prototype = {
	toString: function() {
		return "Eof";
	}
	,__class__: haxe_io_Eof
};
var haxe_io_Error = $hxEnums["haxe.io.Error"] = { __ename__:true,__constructs__:null
	,Blocked: {_hx_name:"Blocked",_hx_index:0,__enum__:"haxe.io.Error",toString:$estr}
	,Overflow: {_hx_name:"Overflow",_hx_index:1,__enum__:"haxe.io.Error",toString:$estr}
	,OutsideBounds: {_hx_name:"OutsideBounds",_hx_index:2,__enum__:"haxe.io.Error",toString:$estr}
	,Custom: ($_=function(e) { return {_hx_index:3,e:e,__enum__:"haxe.io.Error",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["e"],$_)
};
haxe_io_Error.__constructs__ = [haxe_io_Error.Blocked,haxe_io_Error.Overflow,haxe_io_Error.OutsideBounds,haxe_io_Error.Custom];
var haxe_io_FPHelper = function() { };
$hxClasses["haxe.io.FPHelper"] = haxe_io_FPHelper;
haxe_io_FPHelper.__name__ = true;
haxe_io_FPHelper.i32ToFloat = function(i) {
	haxe_io_FPHelper.helper.setInt32(0,i,true);
	return haxe_io_FPHelper.helper.getFloat32(0,true);
};
haxe_io_FPHelper.floatToI32 = function(f) {
	haxe_io_FPHelper.helper.setFloat32(0,f,true);
	return haxe_io_FPHelper.helper.getInt32(0,true);
};
var haxe_io_UInt8Array = {};
haxe_io_UInt8Array.fromBytes = function(bytes,bytePos,length) {
	if(bytePos == null) {
		bytePos = 0;
	}
	if(length == null) {
		length = bytes.length - bytePos;
	}
	return new Uint8Array(bytes.b.bufferValue,bytePos,length);
};
var haxe_iterators_ArrayIterator = function(array) {
	this.current = 0;
	this.array = array;
};
$hxClasses["haxe.iterators.ArrayIterator"] = haxe_iterators_ArrayIterator;
haxe_iterators_ArrayIterator.__name__ = true;
haxe_iterators_ArrayIterator.prototype = {
	hasNext: function() {
		return this.current < this.array.length;
	}
	,next: function() {
		return this.array[this.current++];
	}
	,__class__: haxe_iterators_ArrayIterator
};
var iron_App = function(done) {
	done();
	kha_System.notifyOnFrames(iron_App.render);
	kha_Scheduler.addTimeTask(iron_App.update,0,iron_system_Time.get_delta());
};
$hxClasses["iron.App"] = iron_App;
iron_App.__name__ = true;
iron_App.init = function(done) {
	new iron_App(done);
};
iron_App.update = function() {
	if(iron_Scene.active == null || !iron_Scene.active.ready) {
		return;
	}
	if(iron_App.pauseUpdates) {
		return;
	}
	iron_Scene.active.updateFrame();
	var i = 0;
	var l = iron_App.traitUpdates.length;
	while(i < l) {
		if(iron_App.traitInits.length > 0) {
			var _g = 0;
			var _g1 = iron_App.traitInits;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				if(iron_App.traitInits.length > 0) {
					f();
				} else {
					break;
				}
			}
			iron_App.traitInits.splice(0,iron_App.traitInits.length);
		}
		iron_App.traitUpdates[i]();
		if(l <= iron_App.traitUpdates.length) {
			++i;
		} else {
			l = iron_App.traitUpdates.length;
		}
	}
	i = 0;
	l = iron_App.traitLateUpdates.length;
	while(i < l) {
		iron_App.traitLateUpdates[i]();
		if(l <= iron_App.traitLateUpdates.length) {
			++i;
		} else {
			l = iron_App.traitLateUpdates.length;
		}
	}
	if(iron_App.onEndFrames != null) {
		var _g = 0;
		var _g1 = iron_App.onEndFrames;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f();
		}
	}
	if(iron_App.lastw == -1) {
		iron_App.lastw = kha_System.windowWidth();
		iron_App.lasth = kha_System.windowHeight();
	}
	if(iron_App.lastw != kha_System.windowWidth() || iron_App.lasth != kha_System.windowHeight()) {
		if(iron_App.onResize != null) {
			iron_App.onResize();
		} else if(iron_Scene.active != null && iron_Scene.active.camera != null) {
			iron_Scene.active.camera.buildProjection();
		}
	}
	iron_App.lastw = kha_System.windowWidth();
	iron_App.lasth = kha_System.windowHeight();
};
iron_App.render = function(frames) {
	var frame = frames[0];
	iron_App.framebuffer = frame;
	iron_system_Time.update();
	if(iron_Scene.active == null || !iron_Scene.active.ready) {
		iron_App.render2D(frame);
		return;
	}
	if(iron_App.traitInits.length > 0) {
		var _g = 0;
		var _g1 = iron_App.traitInits;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(iron_App.traitInits.length > 0) {
				f();
			} else {
				break;
			}
		}
		iron_App.traitInits.splice(0,iron_App.traitInits.length);
	}
	iron_Scene.active.renderFrame(frame.get_g4());
	var _g = 0;
	var _g1 = iron_App.traitRenders;
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		if(iron_App.traitRenders.length > 0) {
			f(frame.get_g4());
		} else {
			break;
		}
	}
	iron_App.render2D(frame);
};
iron_App.render2D = function(frame) {
	if(iron_App.traitRenders2D.length > 0) {
		frame.get_g2().begin(false);
		var _g = 0;
		var _g1 = iron_App.traitRenders2D;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			if(iron_App.traitRenders2D.length > 0) {
				f(frame.get_g2());
			} else {
				break;
			}
		}
		frame.get_g2().end();
	}
};
iron_App.notifyOnInit = function(f) {
	iron_App.traitInits.push(f);
};
iron_App.removeInit = function(f) {
	HxOverrides.remove(iron_App.traitInits,f);
};
iron_App.notifyOnUpdate = function(f) {
	iron_App.traitUpdates.push(f);
};
iron_App.removeUpdate = function(f) {
	HxOverrides.remove(iron_App.traitUpdates,f);
};
iron_App.removeLateUpdate = function(f) {
	HxOverrides.remove(iron_App.traitLateUpdates,f);
};
iron_App.removeRender = function(f) {
	HxOverrides.remove(iron_App.traitRenders,f);
};
iron_App.notifyOnRender2D = function(f) {
	iron_App.traitRenders2D.push(f);
};
iron_App.removeRender2D = function(f) {
	HxOverrides.remove(iron_App.traitRenders2D,f);
};
iron_App.notifyOnReset = function(f) {
	if(iron_App.onResets == null) {
		iron_App.onResets = [];
	}
	iron_App.onResets.push(f);
};
iron_App.notifyOnEndFrame = function(f) {
	if(iron_App.onEndFrames == null) {
		iron_App.onEndFrames = [];
	}
	iron_App.onEndFrames.push(f);
};
iron_App.prototype = {
	__class__: iron_App
};
var iron_RenderPath = function() {
	this.depthBuffers = [];
	this.cachedShaderContexts = new haxe_ds_StringMap();
	this.loading = 0;
	this.lastFrameTime = 0.0;
	this.viewportScaled = false;
	this.scissorSet = false;
	this.lastH = 0;
	this.lastW = 0;
	this.depthToRenderTarget = new haxe_ds_StringMap();
	this.renderTargets = new haxe_ds_StringMap();
	this.setupDepthTexture = null;
	this.commands = null;
	this.paused = false;
	this.drawOrder = 0;
	this.currentG = null;
	this.isProbe = false;
	this.isProbeCube = false;
	this.isProbePlanar = false;
	this.point = null;
	this.sun = null;
	this.light = null;
	this.currentTarget = null;
	this.frame = 0;
	this.frameTime = 0.0;
	this.frameScissorH = 0;
	this.frameScissorW = 0;
	this.frameScissorY = 0;
	this.frameScissorX = 0;
	this.frameScissor = false;
};
$hxClasses["iron.RenderPath"] = iron_RenderPath;
iron_RenderPath.__name__ = true;
iron_RenderPath.setActive = function(renderPath) {
	iron_RenderPath.active = renderPath;
};
iron_RenderPath.sortMeshesDistance = function(meshes) {
	meshes.sort(function(a,b) {
		if(a.cameraDistance >= b.cameraDistance) {
			return 1;
		} else {
			return -1;
		}
	});
};
iron_RenderPath.sortMeshesShader = function(meshes) {
	meshes.sort(function(a,b) {
		if(a.materials[0].name >= b.materials[0].name) {
			return 1;
		} else {
			return -1;
		}
	});
};
iron_RenderPath.prototype = {
	get_ready: function() {
		return this.loading == 0;
	}
	,renderFrame: function(g) {
		if(!this.get_ready() || this.paused || kha_System.windowWidth() == 0 || kha_System.windowHeight() == 0) {
			return;
		}
		if(this.lastW > 0 && (this.lastW != kha_System.windowWidth() || this.lastH != kha_System.windowHeight())) {
			this.resize();
		}
		this.lastW = kha_System.windowWidth();
		this.lastH = kha_System.windowHeight();
		this.frameTime = kha_Scheduler.time() - this.lastFrameTime;
		this.lastFrameTime = kha_Scheduler.time();
		var cam = iron_Scene.active.camera;
		this.isProbePlanar = cam != null && cam.renderTarget != null;
		this.isProbeCube = cam != null && cam.renderTargetCube != null;
		this.isProbe = this.isProbePlanar || this.isProbeCube;
		if(this.isProbePlanar) {
			this.frameG = cam.renderTarget.get_g4();
		} else if(this.isProbeCube) {
			this.frameG = cam.renderTargetCube.get_g4();
		} else {
			this.frameG = g;
		}
		this.currentW = kha_System.windowWidth();
		this.currentH = kha_System.windowHeight();
		this.currentD = 1;
		this.currentFace = -1;
		this.meshesSorted = false;
		var _g = 0;
		var _g1 = iron_Scene.active.lights;
		while(_g < _g1.length) {
			var l = _g1[_g];
			++_g;
			if(l.visible) {
				l.buildMatrix(iron_Scene.active.camera);
			}
			if(l.data.raw.type == "sun") {
				this.sun = l;
			} else {
				this.point = l;
			}
		}
		this.light = iron_Scene.active.lights[0];
		this.commands();
		if(!this.isProbe) {
			this.frame++;
		}
	}
	,setTarget: function(target,additional,viewportScale) {
		if(viewportScale == null) {
			viewportScale = 1.0;
		}
		if(target == "") {
			this.currentD = 1;
			this.currentTarget = null;
			this.currentFace = -1;
			if(this.isProbeCube) {
				this.currentW = iron_Scene.active.camera.renderTargetCube.get_width();
				this.currentH = iron_Scene.active.camera.renderTargetCube.get_height();
				var g = this.frameG;
				var additionalRenderTargets = null;
				var face = iron_Scene.active.camera.currentFace;
				if(face == null) {
					face = -1;
				}
				if(this.currentG != null) {
					if(this.scissorSet) {
						this.currentG.disableScissor();
						this.scissorSet = false;
					}
					this.currentG.end();
					this.currentG = null;
					this.bindParams = null;
				}
				this.currentG = g;
				this.additionalTargets = additionalRenderTargets;
				if(face >= 0) {
					g.beginFace(face);
				} else {
					g.begin(additionalRenderTargets);
				}
			} else {
				this.currentW = kha_System.windowWidth();
				this.currentH = kha_System.windowHeight();
				if(this.frameScissor) {
					this.setFrameScissor();
				}
				var g = this.frameG;
				var additionalRenderTargets = null;
				if(this.currentG != null) {
					if(this.scissorSet) {
						this.currentG.disableScissor();
						this.scissorSet = false;
					}
					this.currentG.end();
					this.currentG = null;
					this.bindParams = null;
				}
				this.currentG = g;
				this.additionalTargets = additionalRenderTargets;
				g.begin(additionalRenderTargets);
			}
		} else {
			var rt = this.renderTargets.h[target];
			this.currentTarget = rt;
			var additionalImages = null;
			if(additional != null) {
				additionalImages = [];
				var _g = 0;
				while(_g < additional.length) {
					var s = additional[_g];
					++_g;
					var t = this.renderTargets.h[s];
					additionalImages.push(t.image);
				}
			}
			var targetG = rt.isCubeMap ? rt.cubeMap.get_g4() : rt.image.get_g4();
			this.currentW = rt.isCubeMap ? rt.cubeMap.get_width() : rt.image.get_width();
			this.currentH = rt.isCubeMap ? rt.cubeMap.get_height() : rt.image.get_height();
			if(rt.is3D) {
				this.currentD = rt.image.get_depth();
			}
			var face = this.currentFace;
			if(face == null) {
				face = -1;
			}
			if(this.currentG != null) {
				if(this.scissorSet) {
					this.currentG.disableScissor();
					this.scissorSet = false;
				}
				this.currentG.end();
				this.currentG = null;
				this.bindParams = null;
			}
			this.currentG = targetG;
			this.additionalTargets = additionalImages;
			if(face >= 0) {
				targetG.beginFace(face);
			} else {
				targetG.begin(additionalImages);
			}
		}
		if(viewportScale != 1.0) {
			this.viewportScaled = true;
			var viewW = this.currentW * viewportScale | 0;
			var viewH = this.currentH * viewportScale | 0;
			this.currentG.viewport(0,viewH,viewW,viewH);
			this.currentG.scissor(0,viewH,viewW,viewH);
		} else if(this.viewportScaled) {
			this.viewportScaled = false;
			this.setCurrentViewport(this.currentW,this.currentH);
			this.setCurrentScissor(this.currentW,this.currentH);
		}
		this.bindParams = null;
	}
	,setDepthFrom: function(target,from) {
		var rt = this.renderTargets.h[target];
		rt.image.setDepthStencilFrom(this.renderTargets.h[from].image);
	}
	,setCurrentViewport: function(viewW,viewH) {
		this.currentG.viewport(0,this.currentH - viewH,viewW,viewH);
	}
	,setCurrentScissor: function(viewW,viewH) {
		this.currentG.scissor(0,this.currentH - viewH,viewW,viewH);
		this.scissorSet = true;
	}
	,setFrameScissor: function() {
		this.frameG.scissor(this.frameScissorX,this.currentH - (this.frameScissorH - this.frameScissorY),this.frameScissorW,this.frameScissorH);
	}
	,clearTarget: function(colorFlag,depthFlag) {
		if(colorFlag == -1) {
			if(iron_Scene.active.world != null) {
				colorFlag = iron_Scene.active.world.raw.background_color;
			} else if(iron_Scene.active.camera != null) {
				var cc = iron_Scene.active.camera.data.raw.clear_color;
				if(cc != null) {
					colorFlag = kha_Color.fromFloats(cc.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),cc.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),cc.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN));
				}
			}
		}
		this.currentG.clear(colorFlag,depthFlag,null);
	}
	,drawMeshes: function(context) {
		var isShadows = context == "shadowmap";
		if(isShadows) {
			if(this.light == null || !this.light.data.raw.cast_shadow || !this.light.visible || this.light.data.raw.strength == 0) {
				return;
			}
		}
		if(this.currentFace >= 0 && this.light != null) {
			this.light.setCubeFace(this.currentFace,iron_Scene.active.camera);
		}
		var drawn = false;
		if(isShadows && this.light.data.raw.type == "sun") {
			var step = this.currentH;
			var _g = 0;
			var _g1 = iron_object_LightObject.cascadeCount;
			while(_g < _g1) {
				var i = _g++;
				this.light.setCascade(iron_Scene.active.camera,i);
				this.currentG.viewport(i * step,0,step,step);
				this.submitDraw(context);
			}
			drawn = true;
		}
		if(!drawn) {
			this.submitDraw(context);
		}
		if(this.scissorSet) {
			this.currentG.disableScissor();
			this.scissorSet = false;
		}
		this.currentG.end();
		this.currentG = null;
		this.bindParams = null;
	}
	,submitDraw: function(context) {
		var camera = iron_Scene.active.camera;
		var meshes = iron_Scene.active.meshes;
		iron_object_MeshObject.lastPipeline = null;
		if(!this.meshesSorted && camera != null) {
			var camX = camera.transform.world.self._30;
			var camY = camera.transform.world.self._31;
			var camZ = camera.transform.world.self._32;
			var _g = 0;
			while(_g < meshes.length) {
				var mesh = meshes[_g];
				++_g;
				var vx = camX - mesh.transform.world.self._30;
				var vy = camY - mesh.transform.world.self._31;
				var vz = camZ - mesh.transform.world.self._32;
				mesh.cameraDistance = Math.sqrt(vx * vx + vy * vy + vz * vz);
			}
			if(this.drawOrder == 1) {
				iron_RenderPath.sortMeshesShader(meshes);
			} else {
				iron_RenderPath.sortMeshesDistance(meshes);
			}
			this.meshesSorted = true;
		}
		var g = this.currentG;
		var _bindParams = this.bindParams;
		var _g = 0;
		while(_g < meshes.length) {
			var m = meshes[_g];
			++_g;
			m.render(g,context,_bindParams);
		}
	}
	,drawSkydome: function(handle) {
		if(iron_data_ConstData.skydomeVB == null) {
			iron_data_ConstData.createSkydomeData();
		}
		var cc = this.cachedShaderContexts.h[handle];
		if(cc.context == null) {
			return;
		}
		this.currentG.setPipeline(cc.context.pipeState);
		iron_object_Uniforms.setContextConstants(this.currentG,cc.context,this.bindParams);
		iron_object_Uniforms.setObjectConstants(this.currentG,cc.context,null);
		this.currentG.setVertexBuffer(iron_data_ConstData.skydomeVB);
		this.currentG.setIndexBuffer(iron_data_ConstData.skydomeIB);
		this.currentG.drawIndexedVertices();
		if(this.scissorSet) {
			this.currentG.disableScissor();
			this.scissorSet = false;
		}
		this.currentG.end();
		this.currentG = null;
		this.bindParams = null;
	}
	,bindTarget: function(target,uniform) {
		if(this.bindParams != null) {
			this.bindParams.push(target);
			this.bindParams.push(uniform);
		} else {
			this.bindParams = [target,uniform];
		}
	}
	,drawShader: function(handle) {
		var cc = this.cachedShaderContexts.h[handle];
		if(iron_data_ConstData.screenAlignedVB == null) {
			iron_data_ConstData.createScreenAlignedData();
		}
		this.currentG.setPipeline(cc.context.pipeState);
		iron_object_Uniforms.setContextConstants(this.currentG,cc.context,this.bindParams);
		iron_object_Uniforms.setObjectConstants(this.currentG,cc.context,null);
		this.currentG.setVertexBuffer(iron_data_ConstData.screenAlignedVB);
		this.currentG.setIndexBuffer(iron_data_ConstData.screenAlignedIB);
		this.currentG.drawIndexedVertices();
		if(this.scissorSet) {
			this.currentG.disableScissor();
			this.scissorSet = false;
		}
		this.currentG.end();
		this.currentG = null;
		this.bindParams = null;
	}
	,loadShader: function(handle) {
		var _gthis = this;
		this.loading++;
		var cc = this.cachedShaderContexts.h[handle];
		if(cc != null) {
			this.loading--;
			return;
		}
		cc = new iron_CachedShaderContext();
		this.cachedShaderContexts.h[handle] = cc;
		var shaderPath = handle.split("/");
		iron_data_Data.getShader(shaderPath[0],shaderPath[1],function(res) {
			cc.context = res.getContext(shaderPath[2]);
			_gthis.loading--;
		});
	}
	,unloadShader: function(handle) {
		var _this = this.cachedShaderContexts;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
		var shaderPath = handle.split("/");
		var _this = iron_data_Data.cachedShaders;
		var key = shaderPath[1];
		if(Object.prototype.hasOwnProperty.call(_this.h,key)) {
			delete(_this.h[key]);
		}
	}
	,resize: function() {
		if(kha_System.windowWidth() == 0 || kha_System.windowHeight() == 0) {
			return;
		}
		var h = this.renderTargets.h;
		var rt_h = h;
		var rt_keys = Object.keys(h);
		var rt_length = rt_keys.length;
		var rt_current = 0;
		while(rt_current < rt_length) {
			var rt = rt_h[rt_keys[rt_current++]];
			if(rt == null || rt.raw.width > 0 || rt.depthStencilFrom == "" || rt == this.depthToRenderTarget.h[rt.depthStencilFrom]) {
				continue;
			}
			var nodepth = null;
			var h = this.renderTargets.h;
			var rt2_h = h;
			var rt2_keys = Object.keys(h);
			var rt2_length = rt2_keys.length;
			var rt2_current = 0;
			while(rt2_current < rt2_length) {
				var rt2 = rt2_h[rt2_keys[rt2_current++]];
				if(rt2 == null || rt2.raw.width > 0 || rt2.depthStencilFrom != "" || this.depthToRenderTarget.h[rt2.raw.depth_buffer] != null) {
					continue;
				}
				nodepth = rt2;
				break;
			}
			if(nodepth != null) {
				rt.image.setDepthStencilFrom(nodepth.image);
			}
		}
		var h = this.renderTargets.h;
		var rt_h = h;
		var rt_keys = Object.keys(h);
		var rt_length = rt_keys.length;
		var rt_current = 0;
		while(rt_current < rt_length) {
			var rt = rt_h[rt_keys[rt_current++]];
			if(rt != null && rt.raw.width == 0) {
				iron_App.notifyOnInit(($_=rt.image,$bind($_,$_.unload)));
				rt.image = this.createImage(rt.raw,rt.depthStencil);
			}
		}
		var h = this.renderTargets.h;
		var rt_h = h;
		var rt_keys = Object.keys(h);
		var rt_length = rt_keys.length;
		var rt_current = 0;
		while(rt_current < rt_length) {
			var rt = rt_h[rt_keys[rt_current++]];
			if(rt != null && rt.depthStencilFrom != "") {
				rt.image.setDepthStencilFrom(this.depthToRenderTarget.h[rt.depthStencilFrom].image);
			}
		}
	}
	,createRenderTarget: function(t) {
		var rt = this.createTarget(t);
		this.renderTargets.h[t.name] = rt;
		return rt;
	}
	,createDepthBuffer: function(name,format) {
		this.depthBuffers.push({ name : name, format : format});
	}
	,createTarget: function(t) {
		var rt = new iron_RenderTarget(t);
		if(t.depth_buffer != null) {
			rt.hasDepth = true;
			var depthTarget = this.depthToRenderTarget.h[t.depth_buffer];
			if(depthTarget == null) {
				var _g = 0;
				var _g1 = this.depthBuffers;
				while(_g < _g1.length) {
					var db = _g1[_g];
					++_g;
					if(db.name == t.depth_buffer) {
						this.depthToRenderTarget.h[db.name] = rt;
						var s = db.format;
						var tmp;
						if(s == null || s == "") {
							tmp = 1;
						} else {
							switch(s) {
							case "DEPTH16":
								tmp = 5;
								break;
							case "DEPTH24":
								tmp = 1;
								break;
							default:
								tmp = 1;
							}
						}
						rt.depthStencil = tmp;
						rt.image = this.createImage(t,rt.depthStencil);
						break;
					}
				}
			} else {
				rt.depthStencil = 0;
				rt.depthStencilFrom = t.depth_buffer;
				rt.image = this.createImage(t,rt.depthStencil);
				rt.image.setDepthStencilFrom(depthTarget.image);
			}
		} else {
			rt.hasDepth = false;
			if(t.depth != null && t.depth > 1) {
				rt.is3D = true;
			}
			if(t.is_cubemap) {
				rt.isCubeMap = true;
				rt.depthStencil = 0;
				rt.cubeMap = this.createCubeMap(t,rt.depthStencil);
			} else {
				rt.depthStencil = 0;
				rt.image = this.createImage(t,rt.depthStencil);
			}
		}
		return rt;
	}
	,createImage: function(t,depthStencil) {
		var width = t.width == 0 ? kha_System.windowWidth() : t.width;
		var height = t.height == 0 ? kha_System.windowHeight() : t.height;
		var depth = t.depth != null ? t.depth : 0;
		if(t.displayp != null) {
			if(width > height) {
				width = width * (t.displayp / height) | 0;
				height = t.displayp;
			} else {
				height = height * (t.displayp / width) | 0;
				width = t.displayp;
			}
		}
		if(t.scale != null) {
			width = width * t.scale | 0;
			height = height * t.scale | 0;
			depth = depth * t.scale | 0;
		}
		if(width < 1) {
			width = 1;
		}
		if(height < 1) {
			height = 1;
		}
		if(t.depth != null && t.depth > 1) {
			var img;
			if(t.format != null) {
				switch(t.format) {
				case "DEPTH16":
					img = 3;
					break;
				case "R16":
					img = 6;
					break;
				case "R32":
					img = 5;
					break;
				case "R8":
					img = 1;
					break;
				case "RGBA128":
					img = 2;
					break;
				case "RGBA32":
					img = 0;
					break;
				case "RGBA64":
					img = 4;
					break;
				default:
					img = 0;
				}
			} else {
				img = 0;
			}
			var img1 = kha_Image.create3D(width,height,depth,img);
			if(t.mipmaps) {
				img1.generateMipmaps(1000);
			}
			return img1;
		} else if(t.is_image != null && t.is_image) {
			var tmp;
			if(t.format != null) {
				switch(t.format) {
				case "DEPTH16":
					tmp = 3;
					break;
				case "R16":
					tmp = 6;
					break;
				case "R32":
					tmp = 5;
					break;
				case "R8":
					tmp = 1;
					break;
				case "RGBA128":
					tmp = 2;
					break;
				case "RGBA32":
					tmp = 0;
					break;
				case "RGBA64":
					tmp = 4;
					break;
				default:
					tmp = 0;
				}
			} else {
				tmp = 0;
			}
			return kha_Image.create(width,height,tmp);
		} else {
			var tmp;
			if(t.format != null) {
				switch(t.format) {
				case "DEPTH16":
					tmp = 3;
					break;
				case "R16":
					tmp = 6;
					break;
				case "R32":
					tmp = 5;
					break;
				case "R8":
					tmp = 1;
					break;
				case "RGBA128":
					tmp = 2;
					break;
				case "RGBA32":
					tmp = 0;
					break;
				case "RGBA64":
					tmp = 4;
					break;
				default:
					tmp = 0;
				}
			} else {
				tmp = 0;
			}
			return kha_Image.createRenderTarget(width,height,tmp,depthStencil);
		}
	}
	,createCubeMap: function(t,depthStencil) {
		var tmp;
		if(t.format != null) {
			switch(t.format) {
			case "DEPTH16":
				tmp = 3;
				break;
			case "R16":
				tmp = 6;
				break;
			case "R32":
				tmp = 5;
				break;
			case "R8":
				tmp = 1;
				break;
			case "RGBA128":
				tmp = 2;
				break;
			case "RGBA32":
				tmp = 0;
				break;
			case "RGBA64":
				tmp = 4;
				break;
			default:
				tmp = 0;
			}
		} else {
			tmp = 0;
		}
		return kha_graphics4_CubeMap.createRenderTarget(t.width,tmp,depthStencil);
	}
	,__class__: iron_RenderPath
	,__properties__: {get_ready:"get_ready"}
};
var iron_RenderTargetRaw = function() {
	this.is_cubemap = null;
	this.is_image = null;
	this.depth = null;
	this.mipmaps = null;
	this.depth_buffer = null;
	this.displayp = null;
	this.scale = null;
	this.format = null;
};
$hxClasses["iron.RenderTargetRaw"] = iron_RenderTargetRaw;
iron_RenderTargetRaw.__name__ = true;
iron_RenderTargetRaw.prototype = {
	__class__: iron_RenderTargetRaw
};
var iron_RenderTarget = function(raw) {
	this.isCubeMap = false;
	this.is3D = false;
	this.hasDepth = false;
	this.cubeMap = null;
	this.image = null;
	this.depthStencilFrom = "";
	this.raw = raw;
};
$hxClasses["iron.RenderTarget"] = iron_RenderTarget;
iron_RenderTarget.__name__ = true;
iron_RenderTarget.prototype = {
	__class__: iron_RenderTarget
};
var iron_CachedShaderContext = function() {
};
$hxClasses["iron.CachedShaderContext"] = iron_CachedShaderContext;
iron_CachedShaderContext.__name__ = true;
iron_CachedShaderContext.prototype = {
	__class__: iron_CachedShaderContext
};
var iron_Scene = function() {
	this.traitRemoves = [];
	this.traitInits = [];
	this.groups = null;
	this.uid = iron_Scene.uidCounter++;
	this.meshes = [];
	this.lights = [];
	this.cameras = [];
	this.speakers = [];
	this.empties = [];
	this.animations = [];
	this.armatures = [];
	this.embedded = new haxe_ds_StringMap();
	this.root = new iron_object_Object();
	this.root.name = "Root";
	this.traitInits = [];
	this.traitRemoves = [];
	this.initializing = true;
	if(iron_Scene.global == null) {
		iron_Scene.global = new iron_object_Object();
	}
};
$hxClasses["iron.Scene"] = iron_Scene;
iron_Scene.__name__ = true;
iron_Scene.create = function(format,done) {
	iron_Scene.active = new iron_Scene();
	iron_Scene.active.ready = false;
	iron_Scene.active.raw = format;
	iron_data_Data.getWorld(format.name,format.world_ref,function(world) {
		iron_Scene.active.world = world;
		iron_Scene.active.addScene(format.name,null,function(sceneObject) {
			var _g = 0;
			var _g1 = sceneObject.getChildren(true);
			while(_g < _g1.length) {
				var object = _g1[_g];
				++_g;
				iron_Scene.createTraits(object.raw.traits,object);
			}
			if(iron_Scene.active.cameras.length == 0) {
				haxe_Log.trace("No camera found for scene \"" + format.name + "\"",{ fileName : "Sources/iron/Scene.hx", lineNumber : 135, className : "iron.Scene", methodName : "create"});
			}
			iron_Scene.active.camera = iron_Scene.active.getCamera(format.camera_ref);
			iron_Scene.active.sceneParent = sceneObject;
			iron_Scene.active.ready = true;
			var _g = 0;
			var _g1 = iron_Scene.active.traitInits;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				f();
			}
			iron_Scene.active.traitInits = [];
			iron_Scene.active.initializing = false;
			done(sceneObject);
		});
	});
};
iron_Scene.setActive = function(sceneName,done) {
	if(!iron_Scene.framePassed) {
		return;
	}
	iron_Scene.framePassed = false;
	var removeWorldShader = null;
	if(iron_Scene.active != null) {
		if(iron_Scene.active.raw.world_ref != null) {
			removeWorldShader = "shader_datas/World_" + iron_Scene.active.raw.world_ref + "/World_" + iron_Scene.active.raw.world_ref;
		}
		iron_Scene.active.remove();
	}
	iron_data_Data.getSceneRaw(sceneName,function(format) {
		iron_Scene.create(format,function(o) {
			if(done != null) {
				done(o);
			}
			if(removeWorldShader != null) {
				iron_RenderPath.active.unloadShader(removeWorldShader);
			}
			if(format.world_ref != null) {
				iron_RenderPath.active.loadShader("shader_datas/World_" + format.world_ref + "/World_" + format.world_ref);
			}
		});
	});
};
iron_Scene.getRawObjectByName = function(format,name) {
	return iron_Scene.traverseObjs(format.objects,name);
};
iron_Scene.traverseObjs = function(children,name) {
	var _g = 0;
	while(_g < children.length) {
		var o = children[_g];
		++_g;
		if(o.name == name) {
			return o;
		}
		if(o.children != null) {
			var res = iron_Scene.traverseObjs(o.children,name);
			if(res != null) {
				return res;
			}
		}
	}
	return null;
};
iron_Scene.generateTransform = function(object,transform) {
	var tmp;
	if(object.transform != null) {
		var a = object.transform.values;
		tmp = new iron_math_Mat4(a.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN));
	} else {
		tmp = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	}
	transform.world = tmp;
	var _this = transform.world;
	var loc = transform.loc;
	var quat = transform.rot;
	var scale = transform.scale;
	loc.x = _this.self._30;
	loc.y = _this.self._31;
	loc.z = _this.self._32;
	var _this1 = iron_math_Mat4.helpVec;
	_this1.x = _this.self._00;
	_this1.y = _this.self._01;
	_this1.z = _this.self._02;
	_this1.w = 1.0;
	var _this2 = _this1;
	scale.x = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
	var _this1 = iron_math_Mat4.helpVec;
	_this1.x = _this.self._10;
	_this1.y = _this.self._11;
	_this1.z = _this.self._12;
	_this1.w = 1.0;
	var _this2 = _this1;
	scale.y = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
	var _this1 = iron_math_Mat4.helpVec;
	_this1.x = _this.self._20;
	_this1.y = _this.self._21;
	_this1.z = _this.self._22;
	_this1.w = 1.0;
	var _this2 = _this1;
	scale.z = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
	var _this1 = _this.self;
	var m3 = _this1._12;
	var m4 = _this1._22;
	var m5 = _this1._32;
	var m6 = _this1._13;
	var m7 = _this1._23;
	var m8 = _this1._33;
	var c00 = _this1._11 * (m4 * m8 - m5 * m7) - _this1._21 * (m3 * m8 - m5 * m6) + _this1._31 * (m3 * m7 - m4 * m6);
	var m3 = _this1._12;
	var m4 = _this1._22;
	var m5 = _this1._32;
	var m6 = _this1._13;
	var m7 = _this1._23;
	var m8 = _this1._33;
	var c01 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
	var m3 = _this1._11;
	var m4 = _this1._21;
	var m5 = _this1._31;
	var m6 = _this1._13;
	var m7 = _this1._23;
	var m8 = _this1._33;
	var c02 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
	var m3 = _this1._11;
	var m4 = _this1._21;
	var m5 = _this1._31;
	var m6 = _this1._12;
	var m7 = _this1._22;
	var m8 = _this1._32;
	var c03 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
	if(_this1._00 * c00 - _this1._01 * c01 + _this1._02 * c02 - _this1._03 * c03 < 0.0) {
		scale.x = -scale.x;
	}
	var invs = 1.0 / scale.x;
	iron_math_Mat4.helpMat.self._00 = _this.self._00 * invs;
	iron_math_Mat4.helpMat.self._01 = _this.self._01 * invs;
	iron_math_Mat4.helpMat.self._02 = _this.self._02 * invs;
	invs = 1.0 / scale.y;
	iron_math_Mat4.helpMat.self._10 = _this.self._10 * invs;
	iron_math_Mat4.helpMat.self._11 = _this.self._11 * invs;
	iron_math_Mat4.helpMat.self._12 = _this.self._12 * invs;
	invs = 1.0 / scale.z;
	iron_math_Mat4.helpMat.self._20 = _this.self._20 * invs;
	iron_math_Mat4.helpMat.self._21 = _this.self._21 * invs;
	iron_math_Mat4.helpMat.self._22 = _this.self._22 * invs;
	var m = iron_math_Mat4.helpMat;
	var m11 = m.self._00;
	var m12 = m.self._10;
	var m13 = m.self._20;
	var m21 = m.self._01;
	var m22 = m.self._11;
	var m23 = m.self._21;
	var m31 = m.self._02;
	var m32 = m.self._12;
	var m33 = m.self._22;
	var tr = m11 + m22 + m33;
	var s = 0.0;
	if(tr > 0) {
		s = 0.5 / Math.sqrt(tr + 1.0);
		quat.w = 0.25 / s;
		quat.x = (m32 - m23) * s;
		quat.y = (m13 - m31) * s;
		quat.z = (m21 - m12) * s;
	} else if(m11 > m22 && m11 > m33) {
		s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
		quat.w = (m32 - m23) / s;
		quat.x = 0.25 * s;
		quat.y = (m12 + m21) / s;
		quat.z = (m13 + m31) / s;
	} else if(m22 > m33) {
		s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
		quat.w = (m13 - m31) / s;
		quat.x = (m12 + m21) / s;
		quat.y = 0.25 * s;
		quat.z = (m23 + m32) / s;
	} else {
		s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
		quat.w = (m21 - m12) / s;
		quat.x = (m13 + m31) / s;
		quat.y = (m23 + m32) / s;
		quat.z = 0.25 * s;
	}
	if(object.local_only != null) {
		transform.localOnly = object.local_only;
	}
	if(transform.object.parent != null) {
		transform.update();
	}
};
iron_Scene.createTraits = function(traits,object) {
	if(traits == null) {
		return;
	}
	var _g = 0;
	while(_g < traits.length) {
		var t = traits[_g];
		++_g;
		if(t.type == "Script") {
			var args = [];
			if(t.parameters != null) {
				var _g1 = 0;
				var _g2 = t.parameters;
				while(_g1 < _g2.length) {
					var param = _g2[_g1];
					++_g1;
					args.push(iron_Scene.parseArg(param));
				}
			}
			var traitInst = iron_Scene.createTraitClassInstance(t.class_name,args);
			if(traitInst == null) {
				haxe_Log.trace("Error: Trait '" + t.class_name + "' referenced in object '" + object.name + "' not found",{ fileName : "Sources/iron/Scene.hx", lineNumber : 863, className : "iron.Scene", methodName : "createTraits"});
				continue;
			}
			if(t.props != null) {
				var _g3 = 0;
				var _g4 = t.props.length / 3 | 0;
				while(_g3 < _g4) {
					var i = _g3++;
					var pname = t.props[i * 3];
					var ptype = t.props[i * 3 + 1];
					var pval = t.props[i * 3 + 2];
					if(StringTools.endsWith(ptype,"Object") && pval != "") {
						Reflect.setProperty(traitInst,pname,iron_Scene.active.getChild(pval));
					} else {
						switch(ptype) {
						case "Vec2":
							var pVec = pval;
							Reflect.setProperty(traitInst,pname,new iron_math_Vec2(pVec.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN)));
							break;
						case "Vec3":
							var pVec1 = pval;
							Reflect.setProperty(traitInst,pname,new iron_math_Vec3(pVec1.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec1.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec1.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN)));
							break;
						case "Vec4":
							var pVec2 = pval;
							Reflect.setProperty(traitInst,pname,new iron_math_Vec4(pVec2.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec2.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec2.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),pVec2.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN)));
							break;
						default:
							Reflect.setProperty(traitInst,pname,pval);
						}
					}
				}
			}
			object.addTrait(traitInst);
		}
	}
};
iron_Scene.parseArg = function(str) {
	if(str == "true") {
		return true;
	} else if(str == "false") {
		return false;
	} else if(str == "null") {
		return null;
	} else if(str.charAt(0) == "'") {
		return StringTools.replace(str,"'","");
	} else if(str.charAt(0) == "\"") {
		return StringTools.replace(str,"\"","");
	} else if(str.charAt(0) == "[") {
		str = StringTools.replace(str,"[","");
		str = StringTools.replace(str,"]","");
		str = StringTools.replace(str," ","");
		var ar = [];
		var vals = str.split(",");
		var _g = 0;
		while(_g < vals.length) {
			var v = vals[_g];
			++_g;
			ar.push(iron_Scene.parseArg(v));
		}
		return ar;
	} else {
		var f = parseFloat(str);
		var i = Std.parseInt(str);
		if(f == i) {
			return i;
		} else {
			return f;
		}
	}
};
iron_Scene.createConstraints = function(constraints,object) {
	if(constraints == null) {
		return;
	}
	object.constraints = [];
	var _g = 0;
	while(_g < constraints.length) {
		var c = constraints[_g];
		++_g;
		var constr = new iron_object_Constraint(c);
		object.constraints.push(constr);
	}
};
iron_Scene.createTraitClassInstance = function(traitName,args) {
	var cname = $hxClasses[traitName];
	if(cname == null) {
		return null;
	}
	return Type.createInstance(cname,args);
};
iron_Scene.prototype = {
	remove: function() {
		var _g = 0;
		var _g1 = this.traitRemoves;
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f();
		}
		var _g = 0;
		var _g1 = this.meshes;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.remove();
		}
		var _g = 0;
		var _g1 = this.lights;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.remove();
		}
		var _g = 0;
		var _g1 = this.cameras;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.remove();
		}
		var _g = 0;
		var _g1 = this.speakers;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.remove();
		}
		var _g = 0;
		var _g1 = this.empties;
		while(_g < _g1.length) {
			var o = _g1[_g];
			++_g;
			o.remove();
		}
		this.groups = null;
		this.root.remove();
	}
	,updateFrame: function() {
		if(!this.ready) {
			return;
		}
		var _g = 0;
		var _g1 = this.animations;
		while(_g < _g1.length) {
			var anim = _g1[_g];
			++_g;
			anim.update(iron_system_Time.get_delta());
		}
		var _g = 0;
		var _g1 = this.empties;
		while(_g < _g1.length) {
			var e = _g1[_g];
			++_g;
			if(e != null && e.parent != null) {
				e.transform.update();
			}
		}
	}
	,renderFrame: function(g) {
		if(!this.ready || iron_RenderPath.active == null) {
			return;
		}
		iron_Scene.framePassed = true;
		if(this.camera != null) {
			this.camera.renderFrame(g);
		} else {
			iron_RenderPath.active.renderFrame(g);
		}
	}
	,addObject: function(parent) {
		var object = new iron_object_Object();
		if(parent != null) {
			object.setParent(parent);
		} else {
			object.setParent(this.root);
		}
		return object;
	}
	,getChild: function(name) {
		return this.root.getChild(name);
	}
	,getCamera: function(name) {
		var _g = 0;
		var _g1 = this.cameras;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.name == name) {
				return c;
			}
		}
		return null;
	}
	,addMeshObject: function(data,materials,parent) {
		var object = new iron_object_MeshObject(data,materials);
		if(parent != null) {
			object.setParent(parent);
		} else {
			object.setParent(this.root);
		}
		return object;
	}
	,addLightObject: function(data,parent) {
		var object = new iron_object_LightObject(data);
		if(parent != null) {
			object.setParent(parent);
		} else {
			object.setParent(this.root);
		}
		return object;
	}
	,addCameraObject: function(data,parent) {
		var object = new iron_object_CameraObject(data);
		if(parent != null) {
			object.setParent(parent);
		} else {
			object.setParent(this.root);
		}
		return object;
	}
	,addSpeakerObject: function(data,parent) {
		var object = new iron_object_SpeakerObject(data);
		if(parent != null) {
			object.setParent(parent);
		} else {
			object.setParent(this.root);
		}
		return object;
	}
	,addScene: function(sceneName,parent,done) {
		var _gthis = this;
		if(parent == null) {
			parent = this.addObject();
			parent.name = sceneName;
		}
		iron_data_Data.getSceneRaw(sceneName,function(format) {
			iron_Scene.createTraits(format.traits,parent);
			_gthis.loadEmbeddedData(format.embedded_datas,function() {
				var objectsTraversed = 0;
				var objectsCount = _gthis.getObjectsCount(format.objects);
				var traverseObjects = null;
				traverseObjects = function(parent,objects,parentObject,done) {
					if(objects == null) {
						return;
					}
					var _g = 0;
					var _g1 = objects.length;
					while(_g < _g1) {
						var i = _g++;
						var o = [objects[i]];
						if(o[0].spawn != null && o[0].spawn == false) {
							if((objectsTraversed += 1) == objectsCount) {
								done();
							}
							continue;
						}
						_gthis.createObject(o[0],format,parent,parentObject,(function(o) {
							return function(object) {
								traverseObjects(object,o[0].children,o[0],done);
								if((objectsTraversed += 1) == objectsCount) {
									done();
								}
							};
						})(o));
					}
				};
				if(format.objects == null || format.objects.length == 0) {
					done(parent);
				} else {
					traverseObjects(parent,format.objects,null,function() {
						done(parent);
					});
				}
			});
		});
	}
	,getObjectsCount: function(objects,discardNoSpawn) {
		if(discardNoSpawn == null) {
			discardNoSpawn = true;
		}
		if(objects == null) {
			return 0;
		}
		var result = objects.length;
		var _g = 0;
		while(_g < objects.length) {
			var o = objects[_g];
			++_g;
			if(discardNoSpawn && o.spawn != null && o.spawn == false) {
				continue;
			}
			if(o.children != null) {
				result += this.getObjectsCount(o.children);
			}
		}
		return result;
	}
	,spawnObject: function(name,parent,done,spawnChildren,srcRaw) {
		if(spawnChildren == null) {
			spawnChildren = true;
		}
		var _gthis = this;
		if(srcRaw == null) {
			srcRaw = this.raw;
		}
		var objectsTraversed = 0;
		var obj = iron_Scene.getRawObjectByName(srcRaw,name);
		var objectsCount = spawnChildren ? this.getObjectsCount([obj],false) : 1;
		var rootId = -1;
		var spawnObjectTree = null;
		spawnObjectTree = function(obj,parent,parentObject,done) {
			_gthis.createObject(obj,srcRaw,parent,parentObject,function(object) {
				if(rootId == -1) {
					rootId = object.uid;
				}
				if(spawnChildren && obj.children != null) {
					var _g = 0;
					var _g1 = obj.children;
					while(_g < _g1.length) {
						var child = _g1[_g];
						++_g;
						spawnObjectTree(child,object,obj,done);
					}
				}
				if((objectsTraversed += 1) == objectsCount && done != null) {
					while(object.uid != rootId) object = object.parent;
					done(object);
				}
			});
		};
		spawnObjectTree(obj,parent,null,done);
	}
	,createObject: function(o,format,parent,parentObject,done) {
		var _gthis = this;
		var sceneName = format.name;
		if(o.type == "camera_object") {
			iron_data_Data.getCamera(sceneName,o.data_ref,function(b) {
				var object = _gthis.addCameraObject(b,parent);
				_gthis.returnObject(object,o,done);
			});
		} else if(o.type == "light_object") {
			iron_data_Data.getLight(sceneName,o.data_ref,function(b) {
				var object = _gthis.addLightObject(b,parent);
				_gthis.returnObject(object,o,done);
			});
		} else if(o.type == "mesh_object") {
			if(o.material_refs == null || o.material_refs.length == 0) {
				this.createMeshObject(o,format,parent,parentObject,null,done);
			} else {
				var this1 = new Array(o.material_refs.length);
				var materials = this1;
				var materialsLoaded = 0;
				var _g = 0;
				var _g1 = o.material_refs.length;
				while(_g < _g1) {
					var i = [_g++];
					var ref = o.material_refs[i[0]];
					iron_data_Data.getMaterial(sceneName,ref,(function(i) {
						return function(mat) {
							materials[i[0]] = mat;
							materialsLoaded += 1;
							if(materialsLoaded == o.material_refs.length) {
								_gthis.createMeshObject(o,format,parent,parentObject,materials,done);
							}
						};
					})(i));
				}
			}
		} else if(o.type == "speaker_object") {
			var object = this.addSpeakerObject(iron_data_Data.getSpeakerRawByName(format.speaker_datas,o.data_ref),parent);
			this.returnObject(object,o,done);
		} else if(o.type == "object") {
			var object = this.addObject(parent);
			this.returnObject(object,o,function(ro) {
				if(o.group_ref != null) {
					_gthis.spawnGroup(format,o.group_ref,ro,function() {
						done(ro);
					});
				} else {
					done(ro);
				}
			});
		} else {
			done(null);
		}
	}
	,spawnGroup: function(format,groupRef,groupOwner,done,failed) {
		var _gthis = this;
		var spawned = 0;
		var object_refs = this.getGroupObjectRefs(groupRef);
		if(object_refs == null) {
			if(failed != null) {
				failed();
			}
		} else if(object_refs.length == 0) {
			done();
		} else {
			var _g = 0;
			while(_g < object_refs.length) {
				var object_ref = object_refs[_g];
				++_g;
				this.spawnObject(object_ref,groupOwner,function(spawnedObject) {
					if(!_gthis.isObjectInGroup(groupRef,spawnedObject.parent)) {
						var _g = 0;
						var _g1 = format.groups;
						while(_g < _g1.length) {
							var group = _g1[_g];
							++_g;
							if(group.name == groupRef) {
								spawnedObject.transform.applyParent();
								spawnedObject.transform.translate(-group.instance_offset.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),-group.instance_offset.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),-group.instance_offset.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN));
								break;
							}
						}
					}
					if((spawned += 1) == object_refs.length) {
						groupOwner.transform.reset();
						done();
					}
				});
			}
		}
	}
	,getGroupObjectRefs: function(group_ref) {
		var _g = 0;
		var _g1 = iron_Scene.active.raw.groups;
		while(_g < _g1.length) {
			var g = _g1[_g];
			++_g;
			if(g.name == group_ref) {
				return g.object_refs;
			}
		}
		return null;
	}
	,getGroupObjectsRaw: function(groupRef) {
		var objectRefs = this.getGroupObjectRefs(groupRef);
		var objects = [];
		if(objectRefs == null) {
			return objects;
		}
		var _g = 0;
		while(_g < objectRefs.length) {
			var objRef = objectRefs[_g];
			++_g;
			var rawObj = iron_Scene.getRawObjectByName(this.raw,objRef);
			objects.push(rawObj);
			var childRefs = this.getChildObjectsRaw(rawObj);
			objects = objects.concat(childRefs);
		}
		return objects;
	}
	,getChildObjectsRaw: function(rawObj,recursive) {
		if(recursive == null) {
			recursive = true;
		}
		var children = rawObj.children;
		if(children == null) {
			return [];
		}
		children = children.slice();
		if(recursive) {
			var _g = 0;
			var _g1 = rawObj.children;
			while(_g < _g1.length) {
				var child = _g1[_g];
				++_g;
				var childRefs = this.getChildObjectsRaw(child);
				children = children.concat(childRefs);
			}
		}
		return children;
	}
	,isObjectInGroup: function(groupRef,object) {
		var _g = 0;
		var _g1 = this.getGroupObjectsRaw(groupRef);
		while(_g < _g1.length) {
			var obj = _g1[_g];
			++_g;
			if(obj.name == object.name) {
				return true;
			}
		}
		return false;
	}
	,createMeshObject: function(o,format,parent,parentObject,materials,done) {
		var _gthis = this;
		var ref = o.data_ref.split("/");
		var object_file = "";
		var data_ref = "";
		var sceneName = format.name;
		if(ref.length == 2) {
			object_file = ref[0];
			data_ref = ref[1];
		} else {
			object_file = sceneName;
			data_ref = o.data_ref;
		}
		if(parentObject != null && parentObject.bone_actions != null) {
			var bactions = [];
			var _g = 0;
			var _g1 = parentObject.bone_actions;
			while(_g < _g1.length) {
				var ref = _g1[_g];
				++_g;
				iron_data_Data.getSceneRaw(ref,function(action) {
					bactions.push(action);
					if(bactions.length == parentObject.bone_actions.length) {
						var armature = null;
						var _g = 0;
						var _g1 = _gthis.armatures;
						while(_g < _g1.length) {
							var a = _g1[_g];
							++_g;
							if(a.uid == parent.uid) {
								armature = a;
								break;
							}
						}
						if(armature == null) {
							var _g = 0;
							var _g1 = _gthis.armatures;
							while(_g < _g1.length) {
								var a = _g1[_g];
								++_g;
								if(a.name == parent.name) {
									parent.name += "." + parent.uid;
									break;
								}
							}
							armature = new iron_data_Armature(parent.uid,parent.name,bactions);
							_gthis.armatures.push(armature);
						}
						_gthis.returnMeshObject(object_file,data_ref,sceneName,armature,materials,parent,parentObject,o,done);
					}
				});
			}
		} else {
			this.returnMeshObject(object_file,data_ref,sceneName,null,materials,parent,parentObject,o,done);
		}
	}
	,returnMeshObject: function(object_file,data_ref,sceneName,armature,materials,parent,parentObject,o,done) {
		var _gthis = this;
		iron_data_Data.getMesh(object_file,data_ref,function(mesh) {
			if(mesh.isSkinned) {
				var g = mesh.geom;
				if(armature != null) {
					g.addArmature(armature);
				} else {
					g.addAction(mesh.format.objects,"none");
				}
			}
			var object = _gthis.addMeshObject(mesh,materials,parent);
			if(o.particle_refs != null) {
				var _g = 0;
				var _g1 = o.particle_refs;
				while(_g < _g1.length) {
					var ref = _g1[_g];
					++_g;
					(js_Boot.__cast(object , iron_object_MeshObject)).setupParticleSystem(sceneName,ref);
				}
			}
			if(o.tilesheet_ref != null) {
				(js_Boot.__cast(object , iron_object_MeshObject)).setupTilesheet(sceneName,o.tilesheet_ref,o.tilesheet_action_ref);
			}
			_gthis.returnObject(object,o,done);
		});
	}
	,returnObject: function(object,o,done) {
		var _gthis = this;
		if(object != null && o.object_actions != null) {
			var oactions = [];
			while(oactions.length < o.object_actions.length) oactions.push(null);
			var actionsLoaded = 0;
			var _g = 0;
			var _g1 = o.object_actions.length;
			while(_g < _g1) {
				var i = [_g++];
				var ref = o.object_actions[i[0]];
				if(ref == "null") {
					actionsLoaded += 1;
					continue;
				}
				iron_data_Data.getSceneRaw(ref,(function(i) {
					return function(action) {
						oactions[i[0]] = action;
						actionsLoaded += 1;
						if(actionsLoaded == o.object_actions.length) {
							_gthis.returnObjectLoaded(object,o,oactions,done);
						}
					};
				})(i));
			}
		} else {
			this.returnObjectLoaded(object,o,null,done);
		}
	}
	,returnObjectLoaded: function(object,o,oactions,done) {
		if(object != null) {
			object.raw = o;
			object.name = o.name;
			if(o.visible != null) {
				object.visible = o.visible;
			}
			if(o.visible_mesh != null) {
				object.visibleMesh = o.visible_mesh;
			}
			if(o.visible_shadow != null) {
				object.visibleShadow = o.visible_shadow;
			}
			iron_Scene.createConstraints(o.constraints,object);
			iron_Scene.generateTransform(o,object.transform);
			object.setupAnimation(oactions);
			object.setupMorphTargets();
			if(o.properties != null) {
				object.properties = new haxe_ds_StringMap();
				var _g = 0;
				var _g1 = o.properties;
				while(_g < _g1.length) {
					var p = _g1[_g];
					++_g;
					object.properties.h[p.name] = p.value;
				}
			}
			if(!iron_Scene.active.initializing) {
				iron_Scene.createTraits(o.traits,object);
			}
		}
		done(object);
	}
	,loadEmbeddedData: function(datas,done) {
		if(datas == null) {
			done();
			return;
		}
		var loaded = 0;
		var _g = 0;
		while(_g < datas.length) {
			var file = datas[_g];
			++_g;
			this.embedData(file,function() {
				loaded += 1;
				if(loaded == datas.length) {
					done();
				}
			});
		}
	}
	,embedData: function(file,done) {
		var _gthis = this;
		if(StringTools.endsWith(file,".raw")) {
			iron_data_Data.getBlob(file,function(blob) {
				var b = blob.toBytes();
				var w = (Math.pow(b.length,0.333333333333333315) | 0) + 1;
				var image = kha_Image.fromBytes3D(b,w,w,w,1);
				_gthis.embedded.h[file] = image;
				done();
			});
		} else {
			iron_data_Data.getImage(file,function(image) {
				_gthis.embedded.h[file] = image;
				done();
			});
		}
	}
	,notifyOnInit: function(f) {
		if(this.ready) {
			f();
		} else {
			this.traitInits.push(f);
		}
	}
	,notifyOnRemove: function(f) {
		this.traitRemoves.push(f);
	}
	,__class__: iron_Scene
};
var iron_data_Armature = function(uid,name,actions) {
	this.matsReady = false;
	this.actions = [];
	this.uid = uid;
	this.name = name;
	var _g = 0;
	while(_g < actions.length) {
		var a = actions[_g];
		++_g;
		var _g1 = 0;
		var _g2 = a.objects;
		while(_g1 < _g2.length) {
			var o = _g2[_g1];
			++_g1;
			iron_data_Armature.setParents(o);
		}
		var bones = [[]];
		iron_data_Armature.traverseBones(a.objects,(function(bones) {
			return function(object) {
				bones[0].push(object);
			};
		})(bones));
		this.actions.push({ name : a.name, bones : bones[0], mats : null});
	}
};
$hxClasses["iron.data.Armature"] = iron_data_Armature;
iron_data_Armature.__name__ = true;
iron_data_Armature.setParents = function(object) {
	if(object.children == null) {
		return;
	}
	var _g = 0;
	var _g1 = object.children;
	while(_g < _g1.length) {
		var o = _g1[_g];
		++_g;
		o.parent = object;
		iron_data_Armature.setParents(o);
	}
};
iron_data_Armature.traverseBones = function(objects,callback) {
	var _g = 0;
	var _g1 = objects.length;
	while(_g < _g1) {
		var i = _g++;
		iron_data_Armature.traverseBonesStep(objects[i],callback);
	}
};
iron_data_Armature.traverseBonesStep = function(object,callback) {
	if(object.type == "bone_object") {
		callback(object);
	}
	if(object.children == null) {
		return;
	}
	var _g = 0;
	var _g1 = object.children.length;
	while(_g < _g1) {
		var i = _g++;
		iron_data_Armature.traverseBonesStep(object.children[i],callback);
	}
};
iron_data_Armature.prototype = {
	initMats: function() {
		if(this.matsReady) {
			return;
		}
		this.matsReady = true;
		var _g = 0;
		var _g1 = this.actions;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.mats != null) {
				continue;
			}
			a.mats = [];
			var _g2 = 0;
			var _g3 = a.bones;
			while(_g2 < _g3.length) {
				var b = _g3[_g2];
				++_g2;
				var a1 = b.transform.values;
				a.mats.push(new iron_math_Mat4(a1.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN),a1.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN)));
			}
		}
	}
	,getAction: function(name) {
		var _g = 0;
		var _g1 = this.actions;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.name == name) {
				return a;
			}
		}
		return null;
	}
	,__class__: iron_data_Armature
};
var iron_data_CameraData = function(raw,done) {
	this.raw = raw;
	this.name = raw.name;
	done(this);
};
$hxClasses["iron.data.CameraData"] = iron_data_CameraData;
iron_data_CameraData.__name__ = true;
iron_data_CameraData.parse = function(name,id,done) {
	iron_data_Data.getSceneRaw(name,function(format) {
		var raw = iron_data_Data.getCameraRawByName(format.camera_datas,id);
		if(raw == null) {
			haxe_Log.trace("Camera data \"" + id + "\" not found!",{ fileName : "Sources/iron/data/CameraData.hx", lineNumber : 20, className : "iron.data.CameraData", methodName : "parse"});
			done(null);
		}
		new iron_data_CameraData(raw,done);
	});
};
iron_data_CameraData.prototype = {
	__class__: iron_data_CameraData
};
var iron_data_ConstData = function() { };
$hxClasses["iron.data.ConstData"] = iron_data_ConstData;
iron_data_ConstData.__name__ = true;
iron_data_ConstData.createScreenAlignedData = function() {
	var data = [-1.0,-1.0,3.0,-1.0,-1.0,3.0];
	var indices = [0,1,2];
	var structure = new kha_graphics4_VertexStructure();
	structure.add("pos",1);
	iron_data_ConstData.screenAlignedVB = new kha_graphics4_VertexBuffer(data.length / (structure.byteSize() / 4 | 0) | 0,structure,0);
	var vertices = iron_data_ConstData.screenAlignedVB.lock();
	var _g = 0;
	var _g1 = vertices.byteLength / 4 | 0;
	while(_g < _g1) {
		var i = _g++;
		vertices.setFloat32(i * 4,data[i],true);
	}
	iron_data_ConstData.screenAlignedVB.unlock();
	iron_data_ConstData.screenAlignedIB = new kha_graphics4_IndexBuffer(indices.length,0);
	var id = iron_data_ConstData.screenAlignedIB.lock();
	var _g = 0;
	var _g1 = id.byteLength >> 2;
	while(_g < _g1) {
		var i = _g++;
		id.setUint32(i * 4,indices[i],kha_arrays_ByteArray.LITTLE_ENDIAN);
		var tmp = i * 4;
	}
	iron_data_ConstData.screenAlignedIB.unlock();
};
iron_data_ConstData.createSkydomeData = function() {
	var pos = iron_data_ConstData.skydomePos;
	var nor = iron_data_ConstData.skydomeNor;
	var structure = new kha_graphics4_VertexStructure();
	structure.add("pos",2);
	structure.add("nor",2);
	var structLength = structure.byteSize() / 4 | 0;
	iron_data_ConstData.skydomeVB = new kha_graphics4_VertexBuffer(pos.length / 3 | 0,structure,0);
	var vertices = iron_data_ConstData.skydomeVB.lock();
	var _g = 0;
	var _g1 = vertices.byteLength / 4 / structLength | 0;
	while(_g < _g1) {
		var i = _g++;
		vertices.setFloat32(i * structLength * 4,pos[i * 3],true);
		vertices.setFloat32((i * structLength + 1) * 4,pos[i * 3 + 1],true);
		vertices.setFloat32((i * structLength + 2) * 4,pos[i * 3 + 2],true);
		vertices.setFloat32((i * structLength + 3) * 4,nor[i * 3],true);
		vertices.setFloat32((i * structLength + 4) * 4,nor[i * 3 + 1],true);
		vertices.setFloat32((i * structLength + 5) * 4,nor[i * 3 + 2],true);
	}
	iron_data_ConstData.skydomeVB.unlock();
	var indices = iron_data_ConstData.skydomeIndices;
	iron_data_ConstData.skydomeIB = new kha_graphics4_IndexBuffer(indices.length,0);
	var id = iron_data_ConstData.skydomeIB.lock();
	var _g = 0;
	var _g1 = id.byteLength >> 2;
	while(_g < _g1) {
		var i = _g++;
		id.setUint32(i * 4,indices[i],kha_arrays_ByteArray.LITTLE_ENDIAN);
		var tmp = i * 4;
	}
	iron_data_ConstData.skydomeIB.unlock();
};
var iron_data_Data = function() { };
$hxClasses["iron.data.Data"] = iron_data_Data;
iron_data_Data.__name__ = true;
iron_data_Data.getMesh = function(file,name,done) {
	var handle = file + name;
	var cached = iron_data_Data.cachedMeshes.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingMeshes.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingMeshes.h[handle] = [done];
	iron_data_MeshData.parse(file,name,function(b) {
		iron_data_Data.cachedMeshes.h[handle] = b;
		b.handle = handle;
		var _g = 0;
		var _g1 = iron_data_Data.loadingMeshes.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingMeshes;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getLight = function(file,name,done) {
	var handle = file + name;
	var cached = iron_data_Data.cachedLights.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingLights.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingLights.h[handle] = [done];
	iron_data_LightData.parse(file,name,function(b) {
		iron_data_Data.cachedLights.h[handle] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingLights.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingLights;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getCamera = function(file,name,done) {
	var handle = file + name;
	var cached = iron_data_Data.cachedCameras.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingCameras.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingCameras.h[handle] = [done];
	iron_data_CameraData.parse(file,name,function(b) {
		iron_data_Data.cachedCameras.h[handle] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingCameras.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingCameras;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getMaterial = function(file,name,done) {
	var handle = file + name;
	var cached = iron_data_Data.cachedMaterials.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingMaterials.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingMaterials.h[handle] = [done];
	iron_data_MaterialData.parse(file,name,function(b) {
		iron_data_Data.cachedMaterials.h[handle] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingMaterials.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingMaterials;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getParticle = function(file,name,done) {
	var handle = file + name;
	var cached = iron_data_Data.cachedParticles.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingParticles.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingParticles.h[handle] = [done];
	iron_data_ParticleData.parse(file,name,function(b) {
		iron_data_Data.cachedParticles.h[handle] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingParticles.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingParticles;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getWorld = function(file,name,done) {
	if(name == null) {
		done(null);
		return;
	}
	var handle = file + name;
	var cached = iron_data_Data.cachedWorlds.h[handle];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingWorlds.h[handle];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingWorlds.h[handle] = [done];
	iron_data_WorldData.parse(file,name,function(b) {
		iron_data_Data.cachedWorlds.h[handle] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingWorlds.h[handle];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingWorlds;
		if(Object.prototype.hasOwnProperty.call(_this.h,handle)) {
			delete(_this.h[handle]);
		}
	});
};
iron_data_Data.getShader = function(file,name,done,overrideContext) {
	var cacheName = name;
	if(overrideContext != null) {
		cacheName += "2";
	}
	var cached = iron_data_Data.cachedShaders.h[cacheName];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingShaders.h[cacheName];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingShaders.h[cacheName] = [done];
	iron_data_ShaderData.parse(file,name,function(b) {
		iron_data_Data.cachedShaders.h[cacheName] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingShaders.h[cacheName];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingShaders;
		if(Object.prototype.hasOwnProperty.call(_this.h,cacheName)) {
			delete(_this.h[cacheName]);
		}
	},overrideContext);
};
iron_data_Data.getSceneRaw = function(file,done) {
	var cached = iron_data_Data.cachedSceneRaws.h[file];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingSceneRaws.h[file];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingSceneRaws.h[file] = [done];
	var compressed = StringTools.endsWith(file,".lz4");
	var isJson = StringTools.endsWith(file,".json");
	var ext = compressed || isJson || StringTools.endsWith(file,".arm") ? "" : ".arm";
	iron_data_Data.getBlob(file + ext,function(b) {
		var parsed = null;
		if(isJson) {
			var s = b.toString();
			if(s.charAt(0) == "{") {
				parsed = JSON.parse(s);
			} else {
				var i = new haxe_io_BytesInput(b.toBytes());
				i.set_bigEndian(false);
				parsed = iron_system_ArmPack.read(i);
			}
		} else {
			var i = new haxe_io_BytesInput(b.toBytes());
			i.set_bigEndian(false);
			parsed = iron_system_ArmPack.read(i);
		}
		iron_data_Data.returnSceneRaw(file,parsed);
	});
};
iron_data_Data.returnSceneRaw = function(file,parsed) {
	iron_data_Data.cachedSceneRaws.h[file] = parsed;
	var _g = 0;
	var _g1 = iron_data_Data.loadingSceneRaws.h[file];
	while(_g < _g1.length) {
		var f = _g1[_g];
		++_g;
		f(parsed);
	}
	var _this = iron_data_Data.loadingSceneRaws;
	if(Object.prototype.hasOwnProperty.call(_this.h,file)) {
		delete(_this.h[file]);
	}
};
iron_data_Data.getMeshRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getLightRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getCameraRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getMaterialRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getParticleRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getWorldRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getShaderRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getSpeakerRawByName = function(datas,name) {
	if(name == "") {
		return datas[0];
	}
	var _g = 0;
	while(_g < datas.length) {
		var dat = datas[_g];
		++_g;
		if(dat.name == name) {
			return dat;
		}
	}
	return null;
};
iron_data_Data.getBlob = function(file,done) {
	var cached = iron_data_Data.cachedBlobs.h[file];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingBlobs.h[file];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingBlobs.h[file] = [done];
	var tmp;
	if(iron_data_Data.isAbsolute(file) || file.charAt(0) == "." && file.charAt(1) == ".") {
		tmp = file;
	} else {
		var slash = file.lastIndexOf("/");
		tmp = slash >= 0 ? HxOverrides.substr(file,slash + 1,null) : file;
	}
	kha_Assets.loadBlobFromPath(tmp,function(b) {
		iron_data_Data.cachedBlobs.h[file] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingBlobs.h[file];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingBlobs;
		if(Object.prototype.hasOwnProperty.call(_this.h,file)) {
			delete(_this.h[file]);
		}
		iron_data_Data.assetsLoaded++;
	},null,{ fileName : "Sources/iron/data/Data.hx", lineNumber : 424, className : "iron.data.Data", methodName : "getBlob"});
};
iron_data_Data.getImage = function(file,done,readable,format) {
	if(format == null) {
		format = "RGBA32";
	}
	if(readable == null) {
		readable = false;
	}
	var cached = iron_data_Data.cachedImages.h[file];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingImages.h[file];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingImages.h[file] = [done];
	var tmp;
	if(iron_data_Data.isAbsolute(file) || file.charAt(0) == "." && file.charAt(1) == ".") {
		tmp = file;
	} else {
		var slash = file.lastIndexOf("/");
		tmp = slash >= 0 ? HxOverrides.substr(file,slash + 1,null) : file;
	}
	kha_Assets.loadImageFromPath(tmp,readable,function(b) {
		iron_data_Data.cachedImages.h[file] = b;
		var _g = 0;
		var _g1 = iron_data_Data.loadingImages.h[file];
		while(_g < _g1.length) {
			var f = _g1[_g];
			++_g;
			f(b);
		}
		var _this = iron_data_Data.loadingImages;
		if(Object.prototype.hasOwnProperty.call(_this.h,file)) {
			delete(_this.h[file]);
		}
		iron_data_Data.assetsLoaded++;
	},null,{ fileName : "Sources/iron/data/Data.hx", lineNumber : 471, className : "iron.data.Data", methodName : "getImage"});
};
iron_data_Data.getSound = function(file,done) {
	if(StringTools.endsWith(file,".wav")) {
		file = file.substring(0,file.length - 4) + ".ogg";
	}
	var cached = iron_data_Data.cachedSounds.h[file];
	if(cached != null) {
		done(cached);
		return;
	}
	var loading = iron_data_Data.loadingSounds.h[file];
	if(loading != null) {
		loading.push(done);
		return;
	}
	iron_data_Data.loadingSounds.h[file] = [done];
	var tmp;
	if(iron_data_Data.isAbsolute(file) || file.charAt(0) == "." && file.charAt(1) == ".") {
		tmp = file;
	} else {
		var slash = file.lastIndexOf("/");
		tmp = slash >= 0 ? HxOverrides.substr(file,slash + 1,null) : file;
	}
	kha_Assets.loadSoundFromPath(tmp,function(b) {
		b.uncompress(function() {
			iron_data_Data.cachedSounds.h[file] = b;
			var _g = 0;
			var _g1 = iron_data_Data.loadingSounds.h[file];
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				f(b);
			}
			var _this = iron_data_Data.loadingSounds;
			if(Object.prototype.hasOwnProperty.call(_this.h,file)) {
				delete(_this.h[file]);
			}
			iron_data_Data.assetsLoaded++;
		});
	},null,{ fileName : "Sources/iron/data/Data.hx", lineNumber : 511, className : "iron.data.Data", methodName : "getSound"});
};
iron_data_Data.isAbsolute = function(file) {
	if(!(file.charAt(0) == "/" || file.charAt(1) == ":")) {
		if(file.charAt(0) == "\\") {
			return file.charAt(1) == "\\";
		} else {
			return false;
		}
	} else {
		return true;
	}
};
var iron_data_Geometry = function(data,indices,materialIndices,usage) {
	this.mats = null;
	this.actions = null;
	this.skeletonBoneLens = null;
	this.skeletonBoneRefs = null;
	this.skeletonTransformsI = null;
	this.skinBoneWeights = null;
	this.skinBoneIndices = null;
	this.skinBoneCounts = null;
	this.instanceCount = 0;
	this.instanced = false;
	this.instancedVB = null;
	this.numTris = 0;
	this.ready = false;
	this.name = "";
	this.count = -1;
	this.start = 0;
	this.vertexBufferMap = new haxe_ds_StringMap();
	if(usage == null) {
		usage = 0;
	}
	this.indices = indices;
	this.materialIndices = materialIndices;
	this.usage = usage;
	this.vertexArrays = data.raw.vertex_arrays;
	this.positions = this.getVArray("pos");
	this.normals = this.getVArray("nor");
	this.uvs = this.getVArray("tex");
	this.cols = this.getVArray("col");
	this.data = data;
	this.struct = iron_data_Geometry.getVertexStructure(this.vertexArrays);
	this.structLength = this.struct.byteSize() / 2 | 0;
	this.structStr = "";
	var _g = 0;
	var _g1 = this.struct.elements;
	while(_g < _g1.length) {
		var e = _g1[_g];
		++_g;
		this.structStr += e.name;
	}
};
$hxClasses["iron.data.Geometry"] = iron_data_Geometry;
iron_data_Geometry.__name__ = true;
iron_data_Geometry.getVertexStructure = function(vertexArrays) {
	var structure = new kha_graphics4_VertexStructure();
	var _g = 0;
	var _g1 = vertexArrays.length;
	while(_g < _g1) {
		var i = _g++;
		structure.add(vertexArrays[i].attrib,iron_data_Geometry.getVertexData(vertexArrays[i].data));
	}
	return structure;
};
iron_data_Geometry.getVertexData = function(data) {
	switch(data) {
	case "short2norm":
		return 23;
	case "short4norm":
		return 27;
	default:
		return 27;
	}
};
iron_data_Geometry.buildVertices = function(vertices,vertexArrays,offset,fakeUVs,uvsIndex) {
	if(uvsIndex == null) {
		uvsIndex = -1;
	}
	if(fakeUVs == null) {
		fakeUVs = false;
	}
	if(offset == null) {
		offset = 0;
	}
	var arr = vertexArrays[0];
	var numVertices = (arr.values.byteLength >> 1) / arr.size | 0;
	var di = -1 + offset;
	var _g = 0;
	var _g1 = numVertices;
	while(_g < _g1) {
		var i = _g++;
		var _g2 = 0;
		var _g3 = vertexArrays.length;
		while(_g2 < _g3) {
			var va = _g2++;
			var l = vertexArrays[va].size;
			if(fakeUVs && va == uvsIndex) {
				var _g4 = 0;
				var _g5 = l;
				while(_g4 < _g5) {
					var j = _g4++;
					vertices.setInt16(++di * 2,0,kha_arrays_ByteArray.LITTLE_ENDIAN);
				}
				continue;
			}
			var _g6 = 0;
			var _g7 = l;
			while(_g6 < _g7) {
				var o = _g6++;
				vertices.setInt16(++di * 2,vertexArrays[va].values.getInt16((i * l + o) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN),kha_arrays_ByteArray.LITTLE_ENDIAN);
			}
			if(vertexArrays[va].padding != null) {
				if(vertexArrays[va].padding == 1) {
					vertices.setInt16(++di * 2,0,kha_arrays_ByteArray.LITTLE_ENDIAN);
				}
			}
		}
	}
};
iron_data_Geometry.prototype = {
	getVArray: function(name) {
		var _g = 0;
		var _g1 = this.vertexArrays.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.vertexArrays[i].attrib == name) {
				return this.vertexArrays[i];
			}
		}
		return null;
	}
	,setupInstanced: function(data,instancedType,usage) {
		var structure = new kha_graphics4_VertexStructure();
		structure.instanced = true;
		this.instanced = true;
		structure.add("ipos",2);
		if(instancedType == 2 || instancedType == 4) {
			structure.add("irot",2);
		}
		if(instancedType == 3 || instancedType == 4) {
			structure.add("iscl",2);
		}
		this.instanceCount = (data.byteLength >> 2) / (structure.byteSize() / 4 | 0) | 0;
		this.instancedVB = new kha_graphics4_VertexBuffer(this.instanceCount,structure,usage,1);
		var vertices = this.instancedVB.lock();
		var _g = 0;
		var _g1 = vertices.byteLength / 4 | 0;
		while(_g < _g1) {
			var i = _g++;
			vertices.setFloat32(i * 4,data.getFloat32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN),true);
		}
		this.instancedVB.unlock();
	}
	,get: function(vs) {
		var key = "";
		var _g = 0;
		while(_g < vs.length) {
			var e = vs[_g];
			++_g;
			key += e.name;
		}
		var vb = this.vertexBufferMap.h[key];
		if(vb == null) {
			var nVertexArrays = [];
			var atex = false;
			var texOffset = -1;
			var acol = false;
			var _g = 0;
			var _g1 = vs.length;
			while(_g < _g1) {
				var e = _g++;
				if(vs[e].name == "tex") {
					atex = true;
					texOffset = e;
				}
				if(vs[e].name == "col") {
					acol = true;
				}
				var _g2 = 0;
				var _g3 = this.vertexArrays.length;
				while(_g2 < _g3) {
					var va = _g2++;
					if(vs[e].name == this.vertexArrays[va].attrib) {
						nVertexArrays.push(this.vertexArrays[va]);
					}
				}
			}
			var struct = iron_data_Geometry.getVertexStructure(nVertexArrays);
			vb = new kha_graphics4_VertexBuffer((this.positions.values.byteLength >> 1) / this.positions.size | 0,struct,this.usage);
			this.vertices = vb.lock();
			iron_data_Geometry.buildVertices(this.vertices,nVertexArrays,0,atex && this.uvs == null,texOffset);
			vb.unlock();
			this.vertexBufferMap.h[key] = vb;
			if(atex && this.uvs == null) {
				haxe_Log.trace("Armory Warning: Geometry " + this.name + " is missing UV map",{ fileName : "Sources/iron/data/Geometry.hx", lineNumber : 228, className : "iron.data.Geometry", methodName : "get"});
			}
			if(acol && this.cols == null) {
				haxe_Log.trace("Armory Warning: Geometry " + this.name + " is missing vertex colors",{ fileName : "Sources/iron/data/Geometry.hx", lineNumber : 229, className : "iron.data.Geometry", methodName : "get"});
			}
		}
		return vb;
	}
	,build: function() {
		if(this.ready) {
			return;
		}
		this.vertexBuffer = new kha_graphics4_VertexBuffer((this.positions.values.byteLength >> 1) / this.positions.size | 0,this.struct,this.usage);
		this.vertices = this.vertexBuffer.lock();
		iron_data_Geometry.buildVertices(this.vertices,this.vertexArrays);
		this.vertexBuffer.unlock();
		this.vertexBufferMap.h[this.structStr] = this.vertexBuffer;
		this.indexBuffers = [];
		var _g = 0;
		var _g1 = this.indices;
		while(_g < _g1.length) {
			var id = _g1[_g];
			++_g;
			if(id.byteLength >> 2 == 0) {
				continue;
			}
			var indexBuffer = new kha_graphics4_IndexBuffer(id.byteLength >> 2,this.usage);
			this.numTris += (id.byteLength >> 2) / 3 | 0;
			var indicesA = indexBuffer.lock();
			var _g2 = 0;
			var _g3 = indicesA.byteLength >> 2;
			while(_g2 < _g3) {
				var i = _g2++;
				indicesA.setUint32(i * 4,id.getUint32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN),kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = i * 4;
			}
			indexBuffer.unlock();
			this.indexBuffers.push(indexBuffer);
		}
		if(this.data.raw.instanced_data != null) {
			this.setupInstanced(this.data.raw.instanced_data,this.data.raw.instanced_type,this.usage);
		}
		this.ready = true;
	}
	,addArmature: function(armature) {
		var _g = 0;
		var _g1 = armature.actions;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			this.addAction(a.bones,a.name);
		}
	}
	,addAction: function(bones,name) {
		if(bones == null) {
			return;
		}
		if(this.actions == null) {
			this.actions = new haxe_ds_StringMap();
			this.mats = new haxe_ds_StringMap();
		}
		if(this.actions.h[name] != null) {
			return;
		}
		var actionBones = [];
		var _g = 0;
		var _g1 = this.skeletonBoneRefs;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			var _g2 = 0;
			while(_g2 < bones.length) {
				var b = bones[_g2];
				++_g2;
				if(b.name == s) {
					actionBones.push(b);
				}
			}
		}
		this.actions.h[name] = actionBones;
		var actionMats = [];
		var _g = 0;
		while(_g < actionBones.length) {
			var b = actionBones[_g];
			++_g;
			var a = b.transform.values;
			actionMats.push(new iron_math_Mat4(a.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN)));
		}
		this.mats.h[name] = actionMats;
	}
	,initSkeletonTransforms: function(transformsI) {
		this.skeletonTransformsI = [];
		var _g = 0;
		while(_g < transformsI.length) {
			var t = transformsI[_g];
			++_g;
			var mi = new iron_math_Mat4(t.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN),t.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN));
			this.skeletonTransformsI.push(mi);
		}
	}
	,__class__: iron_data_Geometry
};
var iron_data_LightData = function(raw,done) {
	this.raw = raw;
	this.name = raw.name;
	done(this);
};
$hxClasses["iron.data.LightData"] = iron_data_LightData;
iron_data_LightData.__name__ = true;
iron_data_LightData.parse = function(name,id,done) {
	iron_data_Data.getSceneRaw(name,function(format) {
		var raw = iron_data_Data.getLightRawByName(format.light_datas,id);
		if(raw == null) {
			haxe_Log.trace("Light data \"" + id + "\" not found!",{ fileName : "Sources/iron/data/LightData.hx", lineNumber : 30, className : "iron.data.LightData", methodName : "parse"});
			done(null);
		}
		new iron_data_LightData(raw,done);
	});
};
iron_data_LightData.prototype = {
	__class__: iron_data_LightData
};
var iron_data_MaterialData = function(raw,done,file) {
	if(file == null) {
		file = "";
	}
	this.contexts = null;
	var _gthis = this;
	this.uid = ++iron_data_MaterialData.uidCounter;
	this.raw = raw;
	this.name = raw.name;
	var ref = raw.shader.split("/");
	var object_file = "";
	var data_ref = "";
	if(ref.length == 2) {
		object_file = ref[0];
		data_ref = ref[1];
	} else {
		object_file = file;
		data_ref = raw.shader;
	}
	iron_data_Data.getShader(object_file,data_ref,function(b) {
		_gthis.shader = b;
		_gthis.contexts = [];
		while(_gthis.contexts.length < raw.contexts.length) _gthis.contexts.push(null);
		var contextsLoaded = 0;
		var _g = 0;
		var _g1 = raw.contexts.length;
		while(_g < _g1) {
			var i = [_g++];
			var c = raw.contexts[i[0]];
			new iron_data_MaterialContext(c,(function(i) {
				return function(self) {
					_gthis.contexts[i[0]] = self;
					contextsLoaded += 1;
					if(contextsLoaded == raw.contexts.length) {
						done(_gthis);
					}
				};
			})(i));
		}
	},raw.override_context);
};
$hxClasses["iron.data.MaterialData"] = iron_data_MaterialData;
iron_data_MaterialData.__name__ = true;
iron_data_MaterialData.parse = function(file,name,done) {
	iron_data_Data.getSceneRaw(file,function(format) {
		var raw = iron_data_Data.getMaterialRawByName(format.material_datas,name);
		if(raw == null) {
			haxe_Log.trace("Material data \"" + name + "\" not found!",{ fileName : "Sources/iron/data/MaterialData.hx", lineNumber : 58, className : "iron.data.MaterialData", methodName : "parse"});
			done(null);
		}
		new iron_data_MaterialData(raw,done,file);
	});
};
iron_data_MaterialData.prototype = {
	getContext: function(name) {
		var _g = 0;
		var _g1 = this.contexts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(HxOverrides.substr(c.raw.name,0,name.length) == name) {
				return c;
			}
		}
		return null;
	}
	,__class__: iron_data_MaterialData
};
var iron_data_MaterialContext = function(raw,done) {
	this.id = 0;
	this.textures = null;
	var _gthis = this;
	this.raw = raw;
	this.id = iron_data_MaterialContext.num++;
	if(raw.bind_textures != null && raw.bind_textures.length > 0) {
		var this1 = new Array(raw.bind_textures.length);
		this.textures = this1;
		var texturesLoaded = 0;
		var _g = 0;
		var _g1 = raw.bind_textures.length;
		while(_g < _g1) {
			var i = [_g++];
			var tex = [raw.bind_textures[i[0]]];
			if(tex[0].file == "" || tex[0].source == "movie") {
				texturesLoaded += 1;
				if(texturesLoaded == raw.bind_textures.length) {
					done(this);
				}
				continue;
			}
			iron_data_Data.getImage(tex[0].file,(function(tex,i) {
				return function(image) {
					_gthis.textures[i[0]] = image;
					texturesLoaded += 1;
					if(tex[0].mipmaps != null) {
						var mipmaps = [];
						while(mipmaps.length < tex[0].mipmaps.length) mipmaps.push(null);
						var mipmapsLoaded = 0;
						var _g = 0;
						var _g1 = tex[0].mipmaps.length;
						while(_g < _g1) {
							var j = [_g++];
							var name = tex[0].mipmaps[j[0]];
							iron_data_Data.getImage(name,(function(j,tex) {
								return function(mipimg) {
									mipmaps[j[0]] = mipimg;
									mipmapsLoaded += 1;
									if(mipmapsLoaded == tex[0].mipmaps.length) {
										image.setMipmaps(mipmaps);
										tex[0].mipmaps = null;
										tex[0].generate_mipmaps = false;
										if(texturesLoaded == raw.bind_textures.length) {
											done(_gthis);
										}
									}
								};
							})(j,tex));
						}
					} else if(tex[0].generate_mipmaps == true && image != null) {
						image.generateMipmaps(1000);
						tex[0].mipmaps = null;
						tex[0].generate_mipmaps = false;
						if(texturesLoaded == raw.bind_textures.length) {
							done(_gthis);
						}
					} else if(texturesLoaded == raw.bind_textures.length) {
						done(_gthis);
					}
				};
			})(tex,i),false,tex[0].format != null ? tex[0].format : "RGBA32");
		}
	} else {
		done(this);
	}
};
$hxClasses["iron.data.MaterialContext"] = iron_data_MaterialContext;
iron_data_MaterialContext.__name__ = true;
iron_data_MaterialContext.prototype = {
	setTextureParameters: function(g,textureIndex,context,unitIndex) {
		context.setTextureParameters(g,unitIndex,this.raw.bind_textures[textureIndex]);
	}
	,__class__: iron_data_MaterialContext
};
var iron_data_MeshData = function(raw,done) {
	this.scaleTex = 1.0;
	this.scalePos = 1.0;
	this.refcount = 0;
	this.raw = raw;
	this.name = raw.name;
	if(raw.scale_pos != null) {
		this.scalePos = raw.scale_pos;
	}
	if(raw.scale_tex != null) {
		this.scaleTex = raw.scale_tex;
	}
	var indices = [];
	var materialIndices = [];
	var _g = 0;
	var _g1 = raw.index_arrays;
	while(_g < _g1.length) {
		var ind = _g1[_g];
		++_g;
		indices.push(ind.values);
		materialIndices.push(ind.material);
	}
	this.isSkinned = raw.skin != null;
	var vertexArrays = raw.vertex_arrays;
	if(this.isSkinned) {
		vertexArrays.push({ attrib : "bone", values : null, data : "short4norm"});
		vertexArrays.push({ attrib : "weight", values : null, data : "short4norm"});
	}
	var _g = 0;
	var _g1 = vertexArrays.length;
	while(_g < _g1) {
		var i = _g++;
		var padding = vertexArrays[i].padding;
		vertexArrays[i].size = this.getVertexSize(vertexArrays[i].data,padding != null ? padding : 0);
	}
	var parsedUsage = 0;
	if(raw.dynamic_usage != null && raw.dynamic_usage == true) {
		parsedUsage = 1;
	}
	var usage = parsedUsage;
	if(this.isSkinned) {
		var bonea = null;
		var weighta = null;
		var vertex_length = (vertexArrays[0].values.byteLength >> 1) / vertexArrays[0].size | 0;
		var l = vertex_length * 4;
		bonea = kha_arrays_Int16Array._new(l);
		weighta = kha_arrays_Int16Array._new(l);
		var index = 0;
		var ai = 0;
		var _g = 0;
		var _g1 = vertex_length;
		while(_g < _g1) {
			var i = _g++;
			var boneCount = raw.skin.bone_count_array.getInt16(i * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var _g2 = index;
			var _g3 = index + boneCount;
			while(_g2 < _g3) {
				var j = _g2++;
				bonea.setInt16(ai * 2,raw.skin.bone_index_array.getInt16(j * 2,kha_arrays_ByteArray.LITTLE_ENDIAN),kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = ai * 2;
				weighta.setInt16(ai * 2,raw.skin.bone_weight_array.getInt16(j * 2,kha_arrays_ByteArray.LITTLE_ENDIAN),kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp1 = ai * 2;
				++ai;
			}
			var _g4 = boneCount;
			var _g5 = 4;
			while(_g4 < _g5) {
				var j1 = _g4++;
				bonea.setInt16(ai * 2,0,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp2 = ai * 2;
				weighta.setInt16(ai * 2,0,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp3 = ai * 2;
				++ai;
			}
			index += boneCount;
		}
		vertexArrays[vertexArrays.length - 2].values = bonea;
		vertexArrays[vertexArrays.length - 1].values = weighta;
	}
	this.geom = new iron_data_Geometry(this,indices,materialIndices,usage);
	this.geom.name = this.name;
	done(this);
};
$hxClasses["iron.data.MeshData"] = iron_data_MeshData;
iron_data_MeshData.__name__ = true;
iron_data_MeshData.parse = function(name,id,done) {
	iron_data_Data.getSceneRaw(name,function(format) {
		var raw = iron_data_Data.getMeshRawByName(format.mesh_datas,id);
		if(raw == null) {
			haxe_Log.trace("Mesh data \"" + id + "\" not found!",{ fileName : "Sources/iron/data/MeshData.hx", lineNumber : 100, className : "iron.data.MeshData", methodName : "parse"});
			done(null);
		}
		new iron_data_MeshData(raw,function(dat) {
			dat.format = format;
			if(raw.skin != null) {
				dat.geom.skinBoneCounts = raw.skin.bone_count_array;
				dat.geom.skinBoneIndices = raw.skin.bone_index_array;
				dat.geom.skinBoneWeights = raw.skin.bone_weight_array;
				dat.geom.skeletonBoneRefs = raw.skin.bone_ref_array;
				dat.geom.skeletonBoneLens = raw.skin.bone_len_array;
				dat.geom.initSkeletonTransforms(raw.skin.transformsI);
			}
			done(dat);
		});
	});
};
iron_data_MeshData.prototype = {
	getVertexSize: function(vertex_data,padding) {
		if(padding == null) {
			padding = 0;
		}
		switch(vertex_data) {
		case "short2norm":
			return 2 - padding;
		case "short4norm":
			return 4 - padding;
		default:
			return 0;
		}
	}
	,__class__: iron_data_MeshData
};
var iron_data_ParticleData = function(raw,done) {
	this.raw = raw;
	this.name = raw.name;
	done(this);
};
$hxClasses["iron.data.ParticleData"] = iron_data_ParticleData;
iron_data_ParticleData.__name__ = true;
iron_data_ParticleData.parse = function(name,id,done) {
	iron_data_Data.getSceneRaw(name,function(format) {
		var raw = iron_data_Data.getParticleRawByName(format.particle_datas,id);
		if(raw == null) {
			haxe_Log.trace("Particle data \"" + id + "\" not found!",{ fileName : "Sources/iron/data/ParticleData.hx", lineNumber : 21, className : "iron.data.ParticleData", methodName : "parse"});
			done(null);
		}
		new iron_data_ParticleData(raw,done);
	});
};
iron_data_ParticleData.prototype = {
	__class__: iron_data_ParticleData
};
var iron_data_ShaderData = function(raw,done,overrideContext) {
	this.contexts = [];
	var _gthis = this;
	this.raw = raw;
	this.name = raw.name;
	var _g = 0;
	var _g1 = raw.contexts;
	while(_g < _g1.length) {
		var c = _g1[_g];
		++_g;
		this.contexts.push(null);
	}
	var contextsLoaded = 0;
	var _g = 0;
	var _g1 = raw.contexts.length;
	while(_g < _g1) {
		var i = [_g++];
		var c = raw.contexts[i[0]];
		new iron_data_ShaderContext(c,(function(i) {
			return function(con) {
				_gthis.contexts[i[0]] = con;
				contextsLoaded += 1;
				if(contextsLoaded == raw.contexts.length) {
					done(_gthis);
				}
			};
		})(i),overrideContext);
	}
};
$hxClasses["iron.data.ShaderData"] = iron_data_ShaderData;
iron_data_ShaderData.__name__ = true;
iron_data_ShaderData.parse = function(file,name,done,overrideContext) {
	iron_data_Data.getSceneRaw(file,function(format) {
		var raw = iron_data_Data.getShaderRawByName(format.shader_datas,name);
		if(raw == null) {
			haxe_Log.trace("Shader data \"" + name + "\" not found!",{ fileName : "Sources/iron/data/ShaderData.hx", lineNumber : 54, className : "iron.data.ShaderData", methodName : "parse"});
			done(null);
		}
		new iron_data_ShaderData(raw,done,overrideContext);
	});
};
iron_data_ShaderData.prototype = {
	getContext: function(name) {
		var _g = 0;
		var _g1 = this.contexts;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.raw.name == name) {
				return c;
			}
		}
		return null;
	}
	,__class__: iron_data_ShaderData
};
var iron_data_ShaderContext = function(raw,done,overrideContext) {
	this.instancingType = 0;
	this.raw = raw;
	if(raw.name == "voxel") {
		done(this);
		return;
	}
	this.overrideContext = overrideContext;
	this.parseVertexStructure();
	this.compile(done);
};
$hxClasses["iron.data.ShaderContext"] = iron_data_ShaderContext;
iron_data_ShaderContext.__name__ = true;
iron_data_ShaderContext.parseData = function(data) {
	if(data == "float1") {
		return 0;
	} else if(data == "float2") {
		return 1;
	} else if(data == "float3") {
		return 2;
	} else if(data == "float4") {
		return 3;
	} else if(data == "short2norm") {
		return 23;
	} else if(data == "short4norm") {
		return 27;
	}
	return 0;
};
iron_data_ShaderContext.prototype = {
	compile: function(done) {
		if(this.pipeState != null) {
			this.pipeState.delete();
		}
		this.pipeState = new kha_graphics4_PipelineState();
		this.constants = [];
		this.textureUnits = [];
		if(this.instancingType > 0) {
			var instStruct = new kha_graphics4_VertexStructure();
			instStruct.add("ipos",2);
			if(this.instancingType == 2 || this.instancingType == 4) {
				instStruct.add("irot",2);
			}
			if(this.instancingType == 3 || this.instancingType == 4) {
				instStruct.add("iscl",2);
			}
			instStruct.instanced = true;
			this.pipeState.inputLayout = [this.structure,instStruct];
		} else {
			this.pipeState.inputLayout = [this.structure];
		}
		this.pipeState.depthWrite = this.raw.depth_write;
		this.pipeState.depthMode = this.getCompareMode(this.raw.compare_mode);
		this.pipeState.cullMode = this.getCullMode(this.raw.cull_mode);
		if(this.raw.blend_source != null) {
			this.pipeState.blendSource = this.getBlendingFactor(this.raw.blend_source);
		}
		if(this.raw.blend_destination != null) {
			this.pipeState.blendDestination = this.getBlendingFactor(this.raw.blend_destination);
		}
		if(this.raw.blend_operation != null) {
			this.pipeState.blendOperation = this.getBlendingOperation(this.raw.blend_operation);
		}
		if(this.raw.alpha_blend_source != null) {
			this.pipeState.alphaBlendSource = this.getBlendingFactor(this.raw.alpha_blend_source);
		}
		if(this.raw.alpha_blend_destination != null) {
			this.pipeState.alphaBlendDestination = this.getBlendingFactor(this.raw.alpha_blend_destination);
		}
		if(this.raw.alpha_blend_operation != null) {
			this.pipeState.alphaBlendOperation = this.getBlendingOperation(this.raw.alpha_blend_operation);
		}
		if(this.raw.color_writes_red != null) {
			var _g = 0;
			var _g1 = this.raw.color_writes_red.length;
			while(_g < _g1) {
				var i = _g++;
				this.pipeState.colorWriteMasksRed[i] = this.raw.color_writes_red[i];
			}
		}
		if(this.raw.color_writes_green != null) {
			var _g = 0;
			var _g1 = this.raw.color_writes_green.length;
			while(_g < _g1) {
				var i = _g++;
				this.pipeState.colorWriteMasksGreen[i] = this.raw.color_writes_green[i];
			}
		}
		if(this.raw.color_writes_blue != null) {
			var _g = 0;
			var _g1 = this.raw.color_writes_blue.length;
			while(_g < _g1) {
				var i = _g++;
				this.pipeState.colorWriteMasksBlue[i] = this.raw.color_writes_blue[i];
			}
		}
		if(this.raw.color_writes_alpha != null) {
			var _g = 0;
			var _g1 = this.raw.color_writes_alpha.length;
			while(_g < _g1) {
				var i = _g++;
				this.pipeState.colorWriteMasksAlpha[i] = this.raw.color_writes_alpha[i];
			}
		}
		if(this.raw.color_attachments != null) {
			this.pipeState.colorAttachmentCount = this.raw.color_attachments.length;
			var _g = 0;
			var _g1 = this.raw.color_attachments.length;
			while(_g < _g1) {
				var i = _g++;
				this.pipeState.colorAttachments[i] = this.getTextureFormat(this.raw.color_attachments[i]);
			}
		}
		var tmp = this.raw.depth_attachment != null;
		if(this.raw.conservative_raster != null) {
			this.pipeState.conservativeRasterization = this.raw.conservative_raster;
		}
		if(this.raw.shader_from_source) {
			this.pipeState.vertexShader = kha_graphics4_VertexShader.fromSource(this.raw.vertex_shader);
			this.pipeState.fragmentShader = kha_graphics4_FragmentShader.fromSource(this.raw.fragment_shader);
			this.finishCompile(done);
		} else {
			var tmp = StringTools.replace(this.raw.fragment_shader,".","_");
			this.pipeState.fragmentShader = Reflect.field(kha_Shaders,tmp);
			var tmp = StringTools.replace(this.raw.vertex_shader,".","_");
			this.pipeState.vertexShader = Reflect.field(kha_Shaders,tmp);
			if(this.raw.geometry_shader != null) {
				var tmp = StringTools.replace(this.raw.geometry_shader,".","_");
				this.pipeState.geometryShader = Reflect.field(kha_Shaders,tmp);
			}
			if(this.raw.tesscontrol_shader != null) {
				var tmp = StringTools.replace(this.raw.tesscontrol_shader,".","_");
				this.pipeState.tessellationControlShader = Reflect.field(kha_Shaders,tmp);
			}
			if(this.raw.tesseval_shader != null) {
				var tmp = StringTools.replace(this.raw.tesseval_shader,".","_");
				this.pipeState.tessellationEvaluationShader = Reflect.field(kha_Shaders,tmp);
			}
			this.finishCompile(done);
		}
	}
	,finishCompile: function(done) {
		if(this.overrideContext != null) {
			if(this.overrideContext.cull_mode != null) {
				this.pipeState.cullMode = this.getCullMode(this.overrideContext.cull_mode);
			}
		}
		this.pipeState.compile();
		if(this.raw.constants != null) {
			var _g = 0;
			var _g1 = this.raw.constants;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				this.addConstant(c);
			}
		}
		if(this.raw.texture_units != null) {
			var _g = 0;
			var _g1 = this.raw.texture_units;
			while(_g < _g1.length) {
				var tu = _g1[_g];
				++_g;
				this.addTexture(tu);
			}
		}
		done(this);
	}
	,parseVertexStructure: function() {
		this.structure = new kha_graphics4_VertexStructure();
		var ipos = false;
		var irot = false;
		var iscl = false;
		var _g = 0;
		var _g1 = this.raw.vertex_elements;
		while(_g < _g1.length) {
			var elem = _g1[_g];
			++_g;
			if(elem.name == "ipos") {
				ipos = true;
				continue;
			}
			if(elem.name == "irot") {
				irot = true;
				continue;
			}
			if(elem.name == "iscl") {
				iscl = true;
				continue;
			}
			this.structure.add(elem.name,iron_data_ShaderContext.parseData(elem.data));
		}
		if(ipos && !irot && !iscl) {
			this.instancingType = 1;
		} else if(ipos && irot && !iscl) {
			this.instancingType = 2;
		} else if(ipos && !irot && iscl) {
			this.instancingType = 3;
		} else if(ipos && irot && iscl) {
			this.instancingType = 4;
		}
	}
	,getCompareMode: function(s) {
		switch(s) {
		case "always":
			return 0;
		case "equal":
			return 2;
		case "greater":
			return 6;
		case "greater_equal":
			return 7;
		case "less":
			return 4;
		case "less_equal":
			return 5;
		case "never":
			return 1;
		case "not_equal":
			return 3;
		default:
			return 4;
		}
	}
	,getCullMode: function(s) {
		switch(s) {
		case "clockwise":
			return 0;
		case "none":
			return 2;
		default:
			return 1;
		}
	}
	,getBlendingOperation: function(s) {
		switch(s) {
		case "add":
			return 0;
		case "max":
			return 4;
		case "min":
			return 3;
		case "reverse_subtract":
			return 2;
		case "subtract":
			return 1;
		default:
			return 0;
		}
	}
	,getBlendingFactor: function(s) {
		switch(s) {
		case "blend_one":
			return 1;
		case "blend_zero":
			return 2;
		case "destination_alpha":
			return 4;
		case "destination_color":
			return 8;
		case "inverse_destination_alpha":
			return 6;
		case "inverse_destination_color":
			return 10;
		case "inverse_source_alpha":
			return 5;
		case "inverse_source_color":
			return 9;
		case "source_alpha":
			return 3;
		case "source_color":
			return 7;
		default:
			return 0;
		}
	}
	,getTextureAddresing: function(s) {
		switch(s) {
		case "mirror":
			return 1;
		case "repeat":
			return 0;
		default:
			return 2;
		}
	}
	,getTextureFilter: function(s) {
		switch(s) {
		case "linear":
			return 1;
		case "point":
			return 0;
		default:
			return 2;
		}
	}
	,getMipmapFilter: function(s) {
		switch(s) {
		case "no":
			return 0;
		case "point":
			return 1;
		default:
			return 2;
		}
	}
	,getTextureFormat: function(s) {
		switch(s) {
		case "DEPTH16":
			return 3;
		case "R16":
			return 6;
		case "R32":
			return 5;
		case "R8":
			return 1;
		case "RGBA128":
			return 2;
		case "RGBA32":
			return 0;
		case "RGBA64":
			return 4;
		default:
			return 0;
		}
	}
	,addConstant: function(c) {
		this.constants.push(this.pipeState.getConstantLocation(c.name));
	}
	,addTexture: function(tu) {
		var unit = this.pipeState.getTextureUnit(tu.name);
		this.textureUnits.push(unit);
	}
	,setTextureParameters: function(g,unitIndex,tex) {
		var unit = this.textureUnits[unitIndex];
		g.setTextureParameters(unit,tex.u_addressing == null ? 0 : this.getTextureAddresing(tex.u_addressing),tex.v_addressing == null ? 0 : this.getTextureAddresing(tex.v_addressing),tex.min_filter == null ? 1 : this.getTextureFilter(tex.min_filter),tex.mag_filter == null ? 1 : this.getTextureFilter(tex.mag_filter),tex.mipmap_filter == null ? 0 : this.getMipmapFilter(tex.mipmap_filter));
	}
	,__class__: iron_data_ShaderContext
};
var iron_data_WorldData = function(raw,done) {
	var _gthis = this;
	this.raw = raw;
	this.name = raw.name;
	if(raw.probe != null) {
		new iron_data_Probe(raw.probe,function(self) {
			_gthis.probe = self;
			_gthis.loadEnvmap(done);
		});
	} else {
		this.loadEnvmap(done);
	}
};
$hxClasses["iron.data.WorldData"] = iron_data_WorldData;
iron_data_WorldData.__name__ = true;
iron_data_WorldData.parse = function(name,id,done) {
	iron_data_Data.getSceneRaw(name,function(format) {
		var raw = iron_data_Data.getWorldRawByName(format.world_datas,id);
		if(raw == null) {
			haxe_Log.trace("World data \"" + id + "\" not found!",{ fileName : "Sources/iron/data/WorldData.hx", lineNumber : 57, className : "iron.data.WorldData", methodName : "parse"});
			done(null);
		}
		new iron_data_WorldData(raw,done);
	});
};
iron_data_WorldData.getEmptyIrradiance = function() {
	if(iron_data_WorldData.emptyIrr == null) {
		iron_data_WorldData.emptyIrr = kha_arrays_Float32Array._new(28);
		var _g = 0;
		var _g1 = iron_data_WorldData.emptyIrr.byteLength >> 2;
		while(_g < _g1) {
			var i = _g++;
			iron_data_WorldData.emptyIrr.setFloat32(i * 4,0.0,true);
		}
	}
	return iron_data_WorldData.emptyIrr;
};
iron_data_WorldData.prototype = {
	loadEnvmap: function(done) {
		var _gthis = this;
		if(this.raw.envmap != null) {
			iron_data_Data.getImage(this.raw.envmap,function(image) {
				_gthis.envmap = image;
				done(_gthis);
			});
		} else {
			done(this);
		}
	}
	,__class__: iron_data_WorldData
};
var iron_data_Probe = function(raw,done) {
	this.radianceMipmaps = [];
	var _gthis = this;
	this.raw = raw;
	this.setIrradiance(function(irr) {
		_gthis.irradiance = irr;
		if(raw.radiance != null) {
			iron_data_Data.getImage(raw.radiance,function(rad) {
				_gthis.radiance = rad;
				while(_gthis.radianceMipmaps.length < raw.radiance_mipmaps) _gthis.radianceMipmaps.push(null);
				var dot = raw.radiance.lastIndexOf(".");
				var ext = raw.radiance.substring(dot);
				var base = raw.radiance.substring(0,dot);
				var mipsLoaded = 0;
				var _g = 0;
				var _g1 = raw.radiance_mipmaps;
				while(_g < _g1) {
					var i = [_g++];
					iron_data_Data.getImage(base + "_" + i[0] + ext,(function(i) {
						return function(mipimg) {
							_gthis.radianceMipmaps[i[0]] = mipimg;
							mipsLoaded += 1;
							if(mipsLoaded == raw.radiance_mipmaps) {
								_gthis.radiance.setMipmaps(_gthis.radianceMipmaps);
								done(_gthis);
							}
						};
					})(i),true);
				}
			});
		} else {
			done(_gthis);
		}
	});
};
$hxClasses["iron.data.Probe"] = iron_data_Probe;
iron_data_Probe.__name__ = true;
iron_data_Probe.prototype = {
	setIrradiance: function(done) {
		if(this.raw.irradiance == null) {
			done(iron_data_WorldData.getEmptyIrradiance());
		} else {
			var ext = StringTools.endsWith(this.raw.irradiance,".json") ? "" : ".arm";
			iron_data_Data.getBlob(this.raw.irradiance + ext,function(b) {
				var irradianceParsed;
				if(ext == "") {
					irradianceParsed = JSON.parse(b.toString());
				} else {
					var i = new haxe_io_BytesInput(b.toBytes());
					i.set_bigEndian(false);
					irradianceParsed = iron_system_ArmPack.read(i);
				}
				var irr = kha_arrays_Float32Array._new(28);
				var v = irradianceParsed.irradiance.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(0,v,true);
				var v = irradianceParsed.irradiance.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(4,v,true);
				var v = irradianceParsed.irradiance.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(8,v,true);
				var v = irradianceParsed.irradiance.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(12,v,true);
				var v = irradianceParsed.irradiance.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(16,v,true);
				var v = irradianceParsed.irradiance.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(20,v,true);
				var v = irradianceParsed.irradiance.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(24,v,true);
				var v = irradianceParsed.irradiance.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(28,v,true);
				var v = irradianceParsed.irradiance.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(32,v,true);
				var v = irradianceParsed.irradiance.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(36,v,true);
				var v = irradianceParsed.irradiance.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(40,v,true);
				var v = irradianceParsed.irradiance.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(44,v,true);
				var v = irradianceParsed.irradiance.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(48,v,true);
				var v = irradianceParsed.irradiance.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(52,v,true);
				var v = irradianceParsed.irradiance.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(56,v,true);
				var v = irradianceParsed.irradiance.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(60,v,true);
				var v = irradianceParsed.irradiance.getFloat32(64,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(64,v,true);
				var v = irradianceParsed.irradiance.getFloat32(68,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(68,v,true);
				var v = irradianceParsed.irradiance.getFloat32(72,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(72,v,true);
				var v = irradianceParsed.irradiance.getFloat32(76,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(76,v,true);
				var v = irradianceParsed.irradiance.getFloat32(80,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(80,v,true);
				var v = irradianceParsed.irradiance.getFloat32(84,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(84,v,true);
				var v = irradianceParsed.irradiance.getFloat32(88,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(88,v,true);
				var v = irradianceParsed.irradiance.getFloat32(92,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(92,v,true);
				var v = irradianceParsed.irradiance.getFloat32(96,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(96,v,true);
				var v = irradianceParsed.irradiance.getFloat32(100,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(100,v,true);
				var v = irradianceParsed.irradiance.getFloat32(104,kha_arrays_ByteArray.LITTLE_ENDIAN);
				irr.setFloat32(104,v,true);
				done(irr);
			});
		}
	}
	,__class__: iron_data_Probe
};
var iron_math_Mat3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
	this.self = new kha_math_FastMatrix3(_00,_10,_20,_01,_11,_21,_02,_12,_22);
};
$hxClasses["iron.math.Mat3"] = iron_math_Mat3;
iron_math_Mat3.__name__ = true;
iron_math_Mat3.prototype = {
	__class__: iron_math_Mat3
};
var kha_math_FastMatrix4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._30 = _30;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._31 = _31;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
	this._32 = _32;
	this._03 = _03;
	this._13 = _13;
	this._23 = _23;
	this._33 = _33;
};
$hxClasses["kha.math.FastMatrix4"] = kha_math_FastMatrix4;
kha_math_FastMatrix4.__name__ = true;
kha_math_FastMatrix4.prototype = {
	__class__: kha_math_FastMatrix4
};
var iron_math_Vec4 = function(x,y,z,w) {
	if(w == null) {
		w = 1.0;
	}
	if(z == null) {
		z = 0.0;
	}
	if(y == null) {
		y = 0.0;
	}
	if(x == null) {
		x = 0.0;
	}
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["iron.math.Vec4"] = iron_math_Vec4;
iron_math_Vec4.__name__ = true;
iron_math_Vec4.prototype = {
	__class__: iron_math_Vec4
};
var iron_math_Mat4 = function(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33) {
	this.self = new kha_math_FastMatrix4(_00,_10,_20,_30,_01,_11,_21,_31,_02,_12,_22,_32,_03,_13,_23,_33);
};
$hxClasses["iron.math.Mat4"] = iron_math_Mat4;
iron_math_Mat4.__name__ = true;
iron_math_Mat4.prototype = {
	__class__: iron_math_Mat4
};
var iron_math_Quat = function(x,y,z,w) {
	if(w == null) {
		w = 1.0;
	}
	if(z == null) {
		z = 0.0;
	}
	if(y == null) {
		y = 0.0;
	}
	if(x == null) {
		x = 0.0;
	}
	this.x = x;
	this.y = y;
	this.z = z;
	this.w = w;
};
$hxClasses["iron.math.Quat"] = iron_math_Quat;
iron_math_Quat.__name__ = true;
iron_math_Quat.prototype = {
	__class__: iron_math_Quat
};
var iron_math_Vec2 = function(x,y) {
	if(y == null) {
		y = 0.0;
	}
	if(x == null) {
		x = 0.0;
	}
	this.x = x;
	this.y = y;
};
$hxClasses["iron.math.Vec2"] = iron_math_Vec2;
iron_math_Vec2.__name__ = true;
iron_math_Vec2.prototype = {
	__class__: iron_math_Vec2
};
var iron_object_Animation = function() {
	this.markerEvents = null;
	this.lastFrameIndex = -1;
	this.blendFactor = 0.0;
	this.blendAction = "";
	this.blendCurrent = 0.0;
	this.blendTime = 0.0;
	this.frameTime = 0.0166666666666666664;
	this.paused = false;
	this.onComplete = null;
	this.frameIndex = 0;
	this.loop = true;
	this.speed = 1.0;
	this.time = 0.0;
	this.action = "";
	iron_Scene.active.animations.push(this);
	if(iron_Scene.active.raw.frame_time != null) {
		this.frameTime = iron_Scene.active.raw.frame_time;
	}
	this.play();
};
$hxClasses["iron.object.Animation"] = iron_object_Animation;
iron_object_Animation.__name__ = true;
iron_object_Animation.prototype = {
	play: function(action,onComplete,blendTime,speed,loop) {
		if(loop == null) {
			loop = true;
		}
		if(speed == null) {
			speed = 1.0;
		}
		if(blendTime == null) {
			blendTime = 0.0;
		}
		if(action == null) {
			action = "";
		}
		if(blendTime > 0) {
			this.blendTime = blendTime;
			this.blendCurrent = 0.0;
			this.blendAction = this.action;
			this.frameIndex = 0;
			this.time = 0.0;
		} else {
			this.frameIndex = -1;
		}
		this.action = action;
		this.onComplete = onComplete;
		this.speed = speed;
		this.loop = loop;
		this.paused = false;
	}
	,remove: function() {
		HxOverrides.remove(iron_Scene.active.animations,this);
	}
	,update: function(delta) {
		if(this.paused || this.speed == 0.0) {
			return;
		}
		this.time += delta * this.speed;
		if(this.blendTime > 0 && this.blendFactor == 0) {
			this.blendCurrent += delta;
			if(this.blendCurrent >= this.blendTime) {
				this.blendTime = 0.0;
			}
		}
	}
	,isTrackEnd: function(track) {
		if(this.speed > 0) {
			return this.frameIndex >= (track.frames.byteLength >> 2) - 1;
		} else {
			return this.frameIndex <= 0;
		}
	}
	,rewind: function(track) {
		this.frameIndex = this.speed > 0 ? 0 : (track.frames.byteLength >> 2) - 1;
		this.time = track.frames.getUint32(this.frameIndex * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime;
	}
	,updateTrack: function(anim) {
		if(anim == null) {
			return;
		}
		var track = anim.tracks[0];
		if(this.frameIndex == -1) {
			this.rewind(track);
		}
		var sign = this.speed > 0 ? 1 : -1;
		while(true) {
			var frameValues = track.frames;
			if(!(this.speed > 0 ? this.frameIndex + 1 < frameValues.byteLength >> 2 && this.time > frameValues.getUint32((this.frameIndex + 1) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime : this.frameIndex - 1 > -1 && this.time < frameValues.getUint32((this.frameIndex - 1) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime)) {
				break;
			}
			this.frameIndex += sign;
		}
		if(this.markerEvents != null && anim.marker_names != null && this.frameIndex != this.lastFrameIndex) {
			var _g = 0;
			var _g1 = anim.marker_frames.byteLength >> 2;
			while(_g < _g1) {
				var i = _g++;
				if(this.frameIndex == anim.marker_frames.getUint32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN)) {
					var ar = this.markerEvents.h[anim.marker_names[i]];
					if(ar != null) {
						var _g2 = 0;
						while(_g2 < ar.length) {
							var f = ar[_g2];
							++_g2;
							f();
						}
					}
				}
			}
			this.lastFrameIndex = this.frameIndex;
		}
		if(this.isTrackEnd(track)) {
			if(this.loop || this.blendTime > 0) {
				this.rewind(track);
			} else {
				this.frameIndex -= sign;
				this.paused = true;
			}
			if(this.onComplete != null && this.blendTime == 0) {
				this.onComplete();
			}
		}
	}
	,updateAnimSampled: function(anim,m) {
		if(anim == null) {
			return;
		}
		var track = anim.tracks[0];
		var sign = this.speed > 0 ? 1 : -1;
		var t = this.time;
		var ti = this.frameIndex;
		var t1 = track.frames.getUint32(ti * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime;
		var t2 = track.frames.getUint32((ti + sign) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime;
		var s = (t - t1) / (t2 - t1);
		var _this = iron_object_Animation.m1;
		var a = track.values;
		var offset = ti * 16;
		if(offset == null) {
			offset = 0;
		}
		_this.self._00 = a.getFloat32(offset * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._10 = a.getFloat32((1 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._20 = a.getFloat32((2 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._30 = a.getFloat32((3 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._01 = a.getFloat32((4 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._11 = a.getFloat32((5 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._21 = a.getFloat32((6 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._31 = a.getFloat32((7 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._02 = a.getFloat32((8 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._12 = a.getFloat32((9 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._22 = a.getFloat32((10 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._32 = a.getFloat32((11 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._03 = a.getFloat32((12 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._13 = a.getFloat32((13 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._23 = a.getFloat32((14 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._33 = a.getFloat32((15 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		var _this = iron_object_Animation.m2;
		var a = track.values;
		var offset = (ti + sign) * 16;
		if(offset == null) {
			offset = 0;
		}
		_this.self._00 = a.getFloat32(offset * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._10 = a.getFloat32((1 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._20 = a.getFloat32((2 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._30 = a.getFloat32((3 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._01 = a.getFloat32((4 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._11 = a.getFloat32((5 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._21 = a.getFloat32((6 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._31 = a.getFloat32((7 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._02 = a.getFloat32((8 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._12 = a.getFloat32((9 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._22 = a.getFloat32((10 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._32 = a.getFloat32((11 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._03 = a.getFloat32((12 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._13 = a.getFloat32((13 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._23 = a.getFloat32((14 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		_this.self._33 = a.getFloat32((15 + offset) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		var _this = iron_object_Animation.m1;
		var loc = iron_object_Animation.vpos;
		var quat = iron_object_Animation.q1;
		var scale = iron_object_Animation.vscl;
		loc.x = _this.self._30;
		loc.y = _this.self._31;
		loc.z = _this.self._32;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._00;
		_this1.y = _this.self._01;
		_this1.z = _this.self._02;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.x = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._10;
		_this1.y = _this.self._11;
		_this1.z = _this.self._12;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.y = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._20;
		_this1.y = _this.self._21;
		_this1.z = _this.self._22;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.z = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = _this.self;
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c00 = _this1._11 * (m4 * m8 - m5 * m7) - _this1._21 * (m3 * m8 - m5 * m6) + _this1._31 * (m3 * m7 - m4 * m6);
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c01 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c02 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._12;
		var m7 = _this1._22;
		var m8 = _this1._32;
		var c03 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		if(_this1._00 * c00 - _this1._01 * c01 + _this1._02 * c02 - _this1._03 * c03 < 0.0) {
			scale.x = -scale.x;
		}
		var invs = 1.0 / scale.x;
		iron_math_Mat4.helpMat.self._00 = _this.self._00 * invs;
		iron_math_Mat4.helpMat.self._01 = _this.self._01 * invs;
		iron_math_Mat4.helpMat.self._02 = _this.self._02 * invs;
		invs = 1.0 / scale.y;
		iron_math_Mat4.helpMat.self._10 = _this.self._10 * invs;
		iron_math_Mat4.helpMat.self._11 = _this.self._11 * invs;
		iron_math_Mat4.helpMat.self._12 = _this.self._12 * invs;
		invs = 1.0 / scale.z;
		iron_math_Mat4.helpMat.self._20 = _this.self._20 * invs;
		iron_math_Mat4.helpMat.self._21 = _this.self._21 * invs;
		iron_math_Mat4.helpMat.self._22 = _this.self._22 * invs;
		var m1 = iron_math_Mat4.helpMat;
		var m11 = m1.self._00;
		var m12 = m1.self._10;
		var m13 = m1.self._20;
		var m21 = m1.self._01;
		var m22 = m1.self._11;
		var m23 = m1.self._21;
		var m31 = m1.self._02;
		var m32 = m1.self._12;
		var m33 = m1.self._22;
		var tr = m11 + m22 + m33;
		var s1 = 0.0;
		if(tr > 0) {
			s1 = 0.5 / Math.sqrt(tr + 1.0);
			quat.w = 0.25 / s1;
			quat.x = (m32 - m23) * s1;
			quat.y = (m13 - m31) * s1;
			quat.z = (m21 - m12) * s1;
		} else if(m11 > m22 && m11 > m33) {
			s1 = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			quat.w = (m32 - m23) / s1;
			quat.x = 0.25 * s1;
			quat.y = (m12 + m21) / s1;
			quat.z = (m13 + m31) / s1;
		} else if(m22 > m33) {
			s1 = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			quat.w = (m13 - m31) / s1;
			quat.x = (m12 + m21) / s1;
			quat.y = 0.25 * s1;
			quat.z = (m23 + m32) / s1;
		} else {
			s1 = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			quat.w = (m21 - m12) / s1;
			quat.x = (m13 + m31) / s1;
			quat.y = (m23 + m32) / s1;
			quat.z = 0.25 * s1;
		}
		var _this = iron_object_Animation.m2;
		var loc = iron_object_Animation.vpos2;
		var quat = iron_object_Animation.q2;
		var scale = iron_object_Animation.vscl2;
		loc.x = _this.self._30;
		loc.y = _this.self._31;
		loc.z = _this.self._32;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._00;
		_this1.y = _this.self._01;
		_this1.z = _this.self._02;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.x = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._10;
		_this1.y = _this.self._11;
		_this1.z = _this.self._12;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.y = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._20;
		_this1.y = _this.self._21;
		_this1.z = _this.self._22;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.z = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = _this.self;
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c00 = _this1._11 * (m4 * m8 - m5 * m7) - _this1._21 * (m3 * m8 - m5 * m6) + _this1._31 * (m3 * m7 - m4 * m6);
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c01 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c02 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._12;
		var m7 = _this1._22;
		var m8 = _this1._32;
		var c03 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		if(_this1._00 * c00 - _this1._01 * c01 + _this1._02 * c02 - _this1._03 * c03 < 0.0) {
			scale.x = -scale.x;
		}
		var invs = 1.0 / scale.x;
		iron_math_Mat4.helpMat.self._00 = _this.self._00 * invs;
		iron_math_Mat4.helpMat.self._01 = _this.self._01 * invs;
		iron_math_Mat4.helpMat.self._02 = _this.self._02 * invs;
		invs = 1.0 / scale.y;
		iron_math_Mat4.helpMat.self._10 = _this.self._10 * invs;
		iron_math_Mat4.helpMat.self._11 = _this.self._11 * invs;
		iron_math_Mat4.helpMat.self._12 = _this.self._12 * invs;
		invs = 1.0 / scale.z;
		iron_math_Mat4.helpMat.self._20 = _this.self._20 * invs;
		iron_math_Mat4.helpMat.self._21 = _this.self._21 * invs;
		iron_math_Mat4.helpMat.self._22 = _this.self._22 * invs;
		var m1 = iron_math_Mat4.helpMat;
		var m11 = m1.self._00;
		var m12 = m1.self._10;
		var m13 = m1.self._20;
		var m21 = m1.self._01;
		var m22 = m1.self._11;
		var m23 = m1.self._21;
		var m31 = m1.self._02;
		var m32 = m1.self._12;
		var m33 = m1.self._22;
		var tr = m11 + m22 + m33;
		var s1 = 0.0;
		if(tr > 0) {
			s1 = 0.5 / Math.sqrt(tr + 1.0);
			quat.w = 0.25 / s1;
			quat.x = (m32 - m23) * s1;
			quat.y = (m13 - m31) * s1;
			quat.z = (m21 - m12) * s1;
		} else if(m11 > m22 && m11 > m33) {
			s1 = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			quat.w = (m32 - m23) / s1;
			quat.x = 0.25 * s1;
			quat.y = (m12 + m21) / s1;
			quat.z = (m13 + m31) / s1;
		} else if(m22 > m33) {
			s1 = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			quat.w = (m13 - m31) / s1;
			quat.x = (m12 + m21) / s1;
			quat.y = 0.25 * s1;
			quat.z = (m23 + m32) / s1;
		} else {
			s1 = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			quat.w = (m21 - m12) / s1;
			quat.x = (m13 + m31) / s1;
			quat.y = (m23 + m32) / s1;
			quat.z = 0.25 * s1;
		}
		var _this = iron_object_Animation.vp;
		var from = iron_object_Animation.vpos;
		var to = iron_object_Animation.vpos2;
		_this.x = from.x + (to.x - from.x) * s;
		_this.y = from.y + (to.y - from.y) * s;
		_this.z = from.z + (to.z - from.z) * s;
		var _this = iron_object_Animation.vs;
		var from = iron_object_Animation.vscl;
		var to = iron_object_Animation.vscl2;
		_this.x = from.x + (to.x - from.x) * s;
		_this.y = from.y + (to.y - from.y) * s;
		_this.z = from.z + (to.z - from.z) * s;
		var _this = iron_object_Animation.q3;
		var from = iron_object_Animation.q1;
		var to = iron_object_Animation.q2;
		var fromx = from.x;
		var fromy = from.y;
		var fromz = from.z;
		var fromw = from.w;
		var dot = from.x * to.x + from.y * to.y + from.z * to.z + from.w * to.w;
		if(dot < 0.0) {
			fromx = -fromx;
			fromy = -fromy;
			fromz = -fromz;
			fromw = -fromw;
		}
		_this.x = fromx + (to.x - fromx) * s;
		_this.y = fromy + (to.y - fromy) * s;
		_this.z = fromz + (to.z - fromz) * s;
		_this.w = fromw + (to.w - fromw) * s;
		var l = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z + _this.w * _this.w);
		if(l == 0.0) {
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 0;
		} else {
			l = 1.0 / l;
			_this.x *= l;
			_this.y *= l;
			_this.z *= l;
			_this.w *= l;
		}
		var q = iron_object_Animation.q3;
		var x = q.x;
		var y = q.y;
		var z = q.z;
		var w = q.w;
		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;
		var xx = x * x2;
		var xy = x * y2;
		var xz = x * z2;
		var yy = y * y2;
		var yz = y * z2;
		var zz = z * z2;
		var wx = w * x2;
		var wy = w * y2;
		var wz = w * z2;
		m.self._00 = 1.0 - (yy + zz);
		m.self._10 = xy - wz;
		m.self._20 = xz + wy;
		m.self._01 = xy + wz;
		m.self._11 = 1.0 - (xx + zz);
		m.self._21 = yz - wx;
		m.self._02 = xz - wy;
		m.self._12 = yz + wx;
		m.self._22 = 1.0 - (xx + yy);
		m.self._03 = 0.0;
		m.self._13 = 0.0;
		m.self._23 = 0.0;
		m.self._30 = 0.0;
		m.self._31 = 0.0;
		m.self._32 = 0.0;
		m.self._33 = 1.0;
		var v = iron_object_Animation.vs;
		var x = v.x;
		var y = v.y;
		var z = v.z;
		m.self._00 *= x;
		m.self._01 *= x;
		m.self._02 *= x;
		m.self._03 *= x;
		m.self._10 *= y;
		m.self._11 *= y;
		m.self._12 *= y;
		m.self._13 *= y;
		m.self._20 *= z;
		m.self._21 *= z;
		m.self._22 *= z;
		m.self._23 *= z;
		m.self._30 = iron_object_Animation.vp.x;
		m.self._31 = iron_object_Animation.vp.y;
		m.self._32 = iron_object_Animation.vp.z;
	}
	,__class__: iron_object_Animation
};
var iron_object_BoneAnimation = function(armatureName) {
	if(armatureName == null) {
		armatureName = "";
	}
	this.onUpdates = null;
	this.constraintMats = null;
	this.constraintTargetsI = null;
	this.constraintTargets = null;
	this.boneChildren = null;
	this.matsFastBlendSort = [];
	this.matsFastBlend = [];
	this.matsFastSort = [];
	this.matsFast = [];
	this.applyParent = null;
	this.absMats = null;
	this.skeletonMatsBlend = null;
	this.skeletonBonesBlend = null;
	this.skeletonMats = null;
	this.skeletonBones = null;
	iron_object_Animation.call(this);
	this.isSampled = false;
	var _g = 0;
	var _g1 = iron_Scene.active.armatures;
	while(_g < _g1.length) {
		var a = _g1[_g];
		++_g;
		if(a.name == armatureName) {
			this.armature = a;
			break;
		}
	}
};
$hxClasses["iron.object.BoneAnimation"] = iron_object_BoneAnimation;
iron_object_BoneAnimation.__name__ = true;
iron_object_BoneAnimation.__super__ = iron_object_Animation;
iron_object_BoneAnimation.prototype = $extend(iron_object_Animation.prototype,{
	setSkin: function(mo) {
		var _gthis = this;
		this.object = mo;
		this.data = mo != null ? mo.data : null;
		this.isSkinned = this.data != null && this.data.isSkinned;
		if(this.isSkinned) {
			var boneSize = 8;
			this.skinBuffer = kha_arrays_Float32Array._new(iron_object_BoneAnimation.skinMaxBones * boneSize);
			var _g = 0;
			var _g1 = this.skinBuffer.byteLength >> 2;
			while(_g < _g1) {
				var i = _g++;
				this.skinBuffer.setFloat32(i * 4,0,true);
			}
			var _this = this.object.transform.rot;
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 1;
			this.object.transform.buildMatrix();
			var refs = mo.parent.raw.bone_actions;
			if(refs != null && refs.length > 0) {
				iron_data_Data.getSceneRaw(refs[0],function(action) {
					_gthis.play(action.name);
				});
			}
		}
	}
	,addBoneChild: function(bone,o) {
		if(this.boneChildren == null) {
			this.boneChildren = new haxe_ds_StringMap();
		}
		var ar = this.boneChildren.h[bone];
		if(ar == null) {
			ar = [];
			this.boneChildren.h[bone] = ar;
		}
		ar.push(o);
	}
	,updateBoneChildren: function(bone,bm) {
		var ar = this.boneChildren.h[bone.name];
		if(ar == null) {
			return;
		}
		var _g = 0;
		while(_g < ar.length) {
			var o = ar[_g];
			++_g;
			var t = o.transform;
			if(t.boneParent == null) {
				t.boneParent = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
			}
			if(o.raw.parent_bone_tail != null) {
				if(o.raw.parent_bone_connected || this.isSkinned) {
					var v = o.raw.parent_bone_tail;
					var _this = t.boneParent;
					var x = v.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var y = v.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var z = v.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
					if(z == null) {
						z = 0.0;
					}
					if(y == null) {
						y = 0.0;
					}
					if(x == null) {
						x = 0.0;
					}
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = x;
					_this.self._31 = y;
					_this.self._32 = z;
					_this.self._33 = 1.0;
					var _this1 = t.boneParent;
					var a00 = _this1.self._00;
					var a01 = _this1.self._01;
					var a02 = _this1.self._02;
					var a03 = _this1.self._03;
					var a10 = _this1.self._10;
					var a11 = _this1.self._11;
					var a12 = _this1.self._12;
					var a13 = _this1.self._13;
					var a20 = _this1.self._20;
					var a21 = _this1.self._21;
					var a22 = _this1.self._22;
					var a23 = _this1.self._23;
					var a30 = _this1.self._30;
					var a31 = _this1.self._31;
					var a32 = _this1.self._32;
					var a33 = _this1.self._33;
					var b0 = bm.self._00;
					var b1 = bm.self._10;
					var b2 = bm.self._20;
					var b3 = bm.self._30;
					_this1.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this1.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this1.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this1.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = bm.self._01;
					b1 = bm.self._11;
					b2 = bm.self._21;
					b3 = bm.self._31;
					_this1.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this1.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this1.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this1.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = bm.self._02;
					b1 = bm.self._12;
					b2 = bm.self._22;
					b3 = bm.self._32;
					_this1.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this1.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this1.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this1.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = bm.self._03;
					b1 = bm.self._13;
					b2 = bm.self._23;
					b3 = bm.self._33;
					_this1.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this1.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this1.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this1.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				} else {
					var v1 = o.raw.parent_bone_tail_pose;
					var _this2 = t.boneParent;
					_this2.self._00 = bm.self._00;
					_this2.self._01 = bm.self._01;
					_this2.self._02 = bm.self._02;
					_this2.self._03 = bm.self._03;
					_this2.self._10 = bm.self._10;
					_this2.self._11 = bm.self._11;
					_this2.self._12 = bm.self._12;
					_this2.self._13 = bm.self._13;
					_this2.self._20 = bm.self._20;
					_this2.self._21 = bm.self._21;
					_this2.self._22 = bm.self._22;
					_this2.self._23 = bm.self._23;
					_this2.self._30 = bm.self._30;
					_this2.self._31 = bm.self._31;
					_this2.self._32 = bm.self._32;
					_this2.self._33 = bm.self._33;
					var _this3 = t.boneParent;
					var x1 = v1.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var y1 = v1.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var z1 = v1.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
					_this3.self._00 += x1 * _this3.self._03;
					_this3.self._01 += y1 * _this3.self._03;
					_this3.self._02 += z1 * _this3.self._03;
					_this3.self._10 += x1 * _this3.self._13;
					_this3.self._11 += y1 * _this3.self._13;
					_this3.self._12 += z1 * _this3.self._13;
					_this3.self._20 += x1 * _this3.self._23;
					_this3.self._21 += y1 * _this3.self._23;
					_this3.self._22 += z1 * _this3.self._23;
					_this3.self._30 += x1 * _this3.self._33;
					_this3.self._31 += y1 * _this3.self._33;
					_this3.self._32 += z1 * _this3.self._33;
				}
			} else {
				var _this4 = t.boneParent;
				_this4.self._00 = bm.self._00;
				_this4.self._01 = bm.self._01;
				_this4.self._02 = bm.self._02;
				_this4.self._03 = bm.self._03;
				_this4.self._10 = bm.self._10;
				_this4.self._11 = bm.self._11;
				_this4.self._12 = bm.self._12;
				_this4.self._13 = bm.self._13;
				_this4.self._20 = bm.self._20;
				_this4.self._21 = bm.self._21;
				_this4.self._22 = bm.self._22;
				_this4.self._23 = bm.self._23;
				_this4.self._30 = bm.self._30;
				_this4.self._31 = bm.self._31;
				_this4.self._32 = bm.self._32;
				_this4.self._33 = bm.self._33;
			}
			t.buildMatrix();
		}
	}
	,numParents: function(b) {
		var i = 0;
		var p = b.parent;
		while(p != null) {
			++i;
			p = p.parent;
		}
		return i;
	}
	,setMats: function() {
		var _gthis = this;
		while(this.matsFast.length < this.skeletonBones.length) {
			this.matsFast.push(new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0));
			this.matsFastSort.push(this.matsFastSort.length);
		}
		this.matsFastSort.sort(function(a,b) {
			var i = _gthis.numParents(_gthis.skeletonBones[a]);
			var j = _gthis.numParents(_gthis.skeletonBones[b]);
			if(i < j) {
				return -1;
			} else if(i > j) {
				return 1;
			} else {
				return 0;
			}
		});
		if(this.skeletonBonesBlend != null) {
			while(this.matsFastBlend.length < this.skeletonBonesBlend.length) {
				this.matsFastBlend.push(new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0));
				this.matsFastBlendSort.push(this.matsFastBlendSort.length);
			}
			this.matsFastBlendSort.sort(function(a,b) {
				var i = _gthis.numParents(_gthis.skeletonBonesBlend[a]);
				var j = _gthis.numParents(_gthis.skeletonBonesBlend[b]);
				if(i < j) {
					return -1;
				} else if(i > j) {
					return 1;
				} else {
					return 0;
				}
			});
		}
	}
	,setAction: function(action) {
		if(this.isSkinned) {
			this.skeletonBones = this.data.geom.actions.h[action];
			this.skeletonMats = this.data.geom.mats.h[action];
			this.skeletonBonesBlend = null;
			this.skeletonMatsBlend = null;
		} else {
			this.armature.initMats();
			var a = this.armature.getAction(action);
			this.skeletonBones = a.bones;
			this.skeletonMats = a.mats;
		}
		this.setMats();
	}
	,setActionBlend: function(action) {
		if(this.isSkinned) {
			this.skeletonBonesBlend = this.skeletonBones;
			this.skeletonMatsBlend = this.skeletonMats;
			this.skeletonBones = this.data.geom.actions.h[action];
			this.skeletonMats = this.data.geom.mats.h[action];
		} else {
			this.armature.initMats();
			var a = this.armature.getAction(action);
			this.skeletonBones = a.bones;
			this.skeletonMats = a.mats;
		}
		this.setMats();
	}
	,play: function(action,onComplete,blendTime,speed,loop) {
		if(loop == null) {
			loop = true;
		}
		if(speed == null) {
			speed = 1.0;
		}
		if(blendTime == null) {
			blendTime = 0.2;
		}
		if(action == null) {
			action = "";
		}
		iron_object_Animation.prototype.play.call(this,action,onComplete,blendTime,speed,loop);
		if(action != "") {
			if(blendTime > 0) {
				this.setActionBlend(action);
			} else {
				this.setAction(action);
			}
		}
		this.blendFactor = 0.0;
	}
	,update: function(delta) {
		if(!this.isSkinned && this.skeletonBones == null) {
			this.setAction(this.armature.actions[0].name);
		}
		if(this.object != null && (!this.object.visible || this.object.culled)) {
			return;
		}
		if(this.skeletonBones == null || this.skeletonBones.length == 0) {
			return;
		}
		iron_object_Animation.prototype.update.call(this,delta);
		if(this.paused || this.speed == 0.0) {
			return;
		}
		var lastBones = this.skeletonBones;
		var _g = 0;
		var _g1 = this.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			if(b.anim != null) {
				this.updateTrack(b.anim);
				break;
			}
		}
		if(lastBones != this.skeletonBones) {
			return;
		}
		var _g = 0;
		var _g1 = this.skeletonBones.length;
		while(_g < _g1) {
			var i = _g++;
			if(!this.skeletonBones[i].is_ik_fk_only) {
				this.updateAnimSampled(this.skeletonBones[i].anim,this.skeletonMats[i]);
			}
		}
		if(this.blendTime > 0 && this.skeletonBonesBlend != null) {
			var _g = 0;
			var _g1 = this.skeletonBonesBlend;
			while(_g < _g1.length) {
				var b = _g1[_g];
				++_g;
				if(b.anim != null) {
					this.updateTrack(b.anim);
					break;
				}
			}
			var _g = 0;
			var _g1 = this.skeletonBonesBlend.length;
			while(_g < _g1) {
				var i = _g++;
				this.updateAnimSampled(this.skeletonBonesBlend[i].anim,this.skeletonMatsBlend[i]);
			}
		}
		this.updateConstraints();
		if(this.onUpdates != null) {
			var i = 0;
			var l = this.onUpdates.length;
			while(i < l) {
				this.onUpdates[i]();
				if(l <= this.onUpdates.length) {
					++i;
				} else {
					l = this.onUpdates.length;
				}
			}
		}
		var _g = 0;
		var _g1 = this.skeletonBones.length;
		while(_g < _g1) {
			var i = _g++;
			this.multParent(this.matsFastSort[i],this.matsFast,this.skeletonBones,this.skeletonMats);
		}
		if(this.skeletonBonesBlend != null) {
			var _g = 0;
			var _g1 = this.skeletonBonesBlend.length;
			while(_g < _g1) {
				var i = _g++;
				this.multParent(this.matsFastBlendSort[i],this.matsFastBlend,this.skeletonBonesBlend,this.skeletonMatsBlend);
			}
		}
		if(this.isSkinned) {
			this.updateSkinGpu();
		} else {
			this.updateBonesOnly();
		}
	}
	,multParent: function(i,fasts,bones,mats) {
		var f = fasts[i];
		if(this.applyParent != null && !this.applyParent[i]) {
			var m = mats[i];
			f.self._00 = m.self._00;
			f.self._01 = m.self._01;
			f.self._02 = m.self._02;
			f.self._03 = m.self._03;
			f.self._10 = m.self._10;
			f.self._11 = m.self._11;
			f.self._12 = m.self._12;
			f.self._13 = m.self._13;
			f.self._20 = m.self._20;
			f.self._21 = m.self._21;
			f.self._22 = m.self._22;
			f.self._23 = m.self._23;
			f.self._30 = m.self._30;
			f.self._31 = m.self._31;
			f.self._32 = m.self._32;
			f.self._33 = m.self._33;
			return;
		}
		var p = bones[i].parent;
		var bi = this.getBoneIndex(p,bones);
		if(p == null || bi == -1) {
			var m = mats[i];
			f.self._00 = m.self._00;
			f.self._01 = m.self._01;
			f.self._02 = m.self._02;
			f.self._03 = m.self._03;
			f.self._10 = m.self._10;
			f.self._11 = m.self._11;
			f.self._12 = m.self._12;
			f.self._13 = m.self._13;
			f.self._20 = m.self._20;
			f.self._21 = m.self._21;
			f.self._22 = m.self._22;
			f.self._23 = m.self._23;
			f.self._30 = m.self._30;
			f.self._31 = m.self._31;
			f.self._32 = m.self._32;
			f.self._33 = m.self._33;
		} else {
			var b = fasts[bi];
			var a = mats[i];
			var a00 = a.self._00;
			var a01 = a.self._01;
			var a02 = a.self._02;
			var a03 = a.self._03;
			var a10 = a.self._10;
			var a11 = a.self._11;
			var a12 = a.self._12;
			var a13 = a.self._13;
			var a20 = a.self._20;
			var a21 = a.self._21;
			var a22 = a.self._22;
			var a23 = a.self._23;
			var a30 = a.self._30;
			var a31 = a.self._31;
			var a32 = a.self._32;
			var a33 = a.self._33;
			var b0 = b.self._00;
			var b1 = b.self._10;
			var b2 = b.self._20;
			var b3 = b.self._30;
			f.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			f.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			f.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			f.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._01;
			b1 = b.self._11;
			b2 = b.self._21;
			b3 = b.self._31;
			f.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			f.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			f.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			f.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._02;
			b1 = b.self._12;
			b2 = b.self._22;
			b3 = b.self._32;
			f.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			f.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			f.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			f.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._03;
			b1 = b.self._13;
			b2 = b.self._23;
			b3 = b.self._33;
			f.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			f.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			f.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			f.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		}
	}
	,updateConstraints: function() {
		if(this.data == null) {
			return;
		}
		var cs = this.data.raw.skin.constraints;
		if(cs == null) {
			return;
		}
		if(this.constraintTargets == null) {
			this.constraintTargets = [];
			this.constraintTargetsI = [];
			var _g = 0;
			while(_g < cs.length) {
				var c = cs[_g];
				++_g;
				var o = iron_Scene.active.getChild(c.target);
				this.constraintTargets.push(o);
				var m = null;
				if(o != null) {
					var a = o.raw.transform.values;
					m = new iron_math_Mat4(a.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(16,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(20,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(24,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(28,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(32,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(36,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(40,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(44,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(48,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(52,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(56,kha_arrays_ByteArray.LITTLE_ENDIAN),a.getFloat32(60,kha_arrays_ByteArray.LITTLE_ENDIAN));
					var a00 = m.self._00;
					var a01 = m.self._01;
					var a02 = m.self._02;
					var a03 = m.self._03;
					var a10 = m.self._10;
					var a11 = m.self._11;
					var a12 = m.self._12;
					var a13 = m.self._13;
					var a20 = m.self._20;
					var a21 = m.self._21;
					var a22 = m.self._22;
					var a23 = m.self._23;
					var a30 = m.self._30;
					var a31 = m.self._31;
					var a32 = m.self._32;
					var a33 = m.self._33;
					var b00 = a00 * a11 - a01 * a10;
					var b01 = a00 * a12 - a02 * a10;
					var b02 = a00 * a13 - a03 * a10;
					var b03 = a01 * a12 - a02 * a11;
					var b04 = a01 * a13 - a03 * a11;
					var b05 = a02 * a13 - a03 * a12;
					var b06 = a20 * a31 - a21 * a30;
					var b07 = a20 * a32 - a22 * a30;
					var b08 = a20 * a33 - a23 * a30;
					var b09 = a21 * a32 - a22 * a31;
					var b10 = a21 * a33 - a23 * a31;
					var b11 = a22 * a33 - a23 * a32;
					var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
					if(det == 0.0) {
						m.self._00 = 1.0;
						m.self._01 = 0.0;
						m.self._02 = 0.0;
						m.self._03 = 0.0;
						m.self._10 = 0.0;
						m.self._11 = 1.0;
						m.self._12 = 0.0;
						m.self._13 = 0.0;
						m.self._20 = 0.0;
						m.self._21 = 0.0;
						m.self._22 = 1.0;
						m.self._23 = 0.0;
						m.self._30 = 0.0;
						m.self._31 = 0.0;
						m.self._32 = 0.0;
						m.self._33 = 1.0;
					} else {
						det = 1.0 / det;
						m.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
						m.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
						m.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
						m.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
						m.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
						m.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
						m.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
						m.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
						m.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
						m.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
						m.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
						m.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
						m.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
						m.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
						m.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
						m.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
					}
				}
				this.constraintTargetsI.push(m);
			}
			this.constraintMats = new haxe_ds_ObjectMap();
		}
		var _g = 0;
		var _g1 = cs.length;
		while(_g < _g1) {
			var i = _g++;
			var c = cs[i];
			var bone = this.getBone(c.bone);
			if(bone == null) {
				continue;
			}
			var o = this.constraintTargets[i];
			if(o == null) {
				continue;
			}
			if(c.type == "CHILD_OF") {
				var m = this.constraintMats.h[bone.__id__];
				if(m == null) {
					m = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
					this.constraintMats.set(bone,m);
				}
				var m1 = this.object.parent.transform.world;
				m.self._00 = m1.self._00;
				m.self._01 = m1.self._01;
				m.self._02 = m1.self._02;
				m.self._03 = m1.self._03;
				m.self._10 = m1.self._10;
				m.self._11 = m1.self._11;
				m.self._12 = m1.self._12;
				m.self._13 = m1.self._13;
				m.self._20 = m1.self._20;
				m.self._21 = m1.self._21;
				m.self._22 = m1.self._22;
				m.self._23 = m1.self._23;
				m.self._30 = m1.self._30;
				m.self._31 = m1.self._31;
				m.self._32 = m1.self._32;
				m.self._33 = m1.self._33;
				var m2 = this.constraintTargetsI[i];
				var a00 = m.self._00;
				var a01 = m.self._01;
				var a02 = m.self._02;
				var a03 = m.self._03;
				var a10 = m.self._10;
				var a11 = m.self._11;
				var a12 = m.self._12;
				var a13 = m.self._13;
				var a20 = m.self._20;
				var a21 = m.self._21;
				var a22 = m.self._22;
				var a23 = m.self._23;
				var a30 = m.self._30;
				var a31 = m.self._31;
				var a32 = m.self._32;
				var a33 = m.self._33;
				var b0 = m2.self._00;
				var b1 = m2.self._10;
				var b2 = m2.self._20;
				var b3 = m2.self._30;
				m.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				m.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				m.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				m.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m2.self._01;
				b1 = m2.self._11;
				b2 = m2.self._21;
				b3 = m2.self._31;
				m.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				m.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				m.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				m.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m2.self._02;
				b1 = m2.self._12;
				b2 = m2.self._22;
				b3 = m2.self._32;
				m.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				m.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				m.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				m.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m2.self._03;
				b1 = m2.self._13;
				b2 = m2.self._23;
				b3 = m2.self._33;
				m.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				m.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				m.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				m.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var m3 = o.transform.world;
				var a001 = m.self._00;
				var a011 = m.self._01;
				var a021 = m.self._02;
				var a031 = m.self._03;
				var a101 = m.self._10;
				var a111 = m.self._11;
				var a121 = m.self._12;
				var a131 = m.self._13;
				var a201 = m.self._20;
				var a211 = m.self._21;
				var a221 = m.self._22;
				var a231 = m.self._23;
				var a301 = m.self._30;
				var a311 = m.self._31;
				var a321 = m.self._32;
				var a331 = m.self._33;
				var b01 = m3.self._00;
				var b11 = m3.self._10;
				var b21 = m3.self._20;
				var b31 = m3.self._30;
				m.self._00 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
				m.self._10 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
				m.self._20 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
				m.self._30 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
				b01 = m3.self._01;
				b11 = m3.self._11;
				b21 = m3.self._21;
				b31 = m3.self._31;
				m.self._01 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
				m.self._11 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
				m.self._21 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
				m.self._31 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
				b01 = m3.self._02;
				b11 = m3.self._12;
				b21 = m3.self._22;
				b31 = m3.self._32;
				m.self._02 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
				m.self._12 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
				m.self._22 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
				m.self._32 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
				b01 = m3.self._03;
				b11 = m3.self._13;
				b21 = m3.self._23;
				b31 = m3.self._33;
				m.self._03 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
				m.self._13 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
				m.self._23 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
				m.self._33 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
				var _this = iron_object_BoneAnimation.m1;
				var m4 = this.object.parent.transform.world;
				var a002 = m4.self._00;
				var a012 = m4.self._01;
				var a022 = m4.self._02;
				var a032 = m4.self._03;
				var a102 = m4.self._10;
				var a112 = m4.self._11;
				var a122 = m4.self._12;
				var a132 = m4.self._13;
				var a202 = m4.self._20;
				var a212 = m4.self._21;
				var a222 = m4.self._22;
				var a232 = m4.self._23;
				var a302 = m4.self._30;
				var a312 = m4.self._31;
				var a322 = m4.self._32;
				var a332 = m4.self._33;
				var b00 = a002 * a112 - a012 * a102;
				var b011 = a002 * a122 - a022 * a102;
				var b02 = a002 * a132 - a032 * a102;
				var b03 = a012 * a122 - a022 * a112;
				var b04 = a012 * a132 - a032 * a112;
				var b05 = a022 * a132 - a032 * a122;
				var b06 = a202 * a312 - a212 * a302;
				var b07 = a202 * a322 - a222 * a302;
				var b08 = a202 * a332 - a232 * a302;
				var b09 = a212 * a322 - a222 * a312;
				var b10 = a212 * a332 - a232 * a312;
				var b111 = a222 * a332 - a232 * a322;
				var det = b00 * b111 - b011 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
				if(det == 0.0) {
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					det = 1.0 / det;
					_this.self._00 = (a112 * b111 - a122 * b10 + a132 * b09) * det;
					_this.self._01 = (a022 * b10 - a012 * b111 - a032 * b09) * det;
					_this.self._02 = (a312 * b05 - a322 * b04 + a332 * b03) * det;
					_this.self._03 = (a222 * b04 - a212 * b05 - a232 * b03) * det;
					_this.self._10 = (a122 * b08 - a102 * b111 - a132 * b07) * det;
					_this.self._11 = (a002 * b111 - a022 * b08 + a032 * b07) * det;
					_this.self._12 = (a322 * b02 - a302 * b05 - a332 * b011) * det;
					_this.self._13 = (a202 * b05 - a222 * b02 + a232 * b011) * det;
					_this.self._20 = (a102 * b10 - a112 * b08 + a132 * b06) * det;
					_this.self._21 = (a012 * b08 - a002 * b10 - a032 * b06) * det;
					_this.self._22 = (a302 * b04 - a312 * b02 + a332 * b00) * det;
					_this.self._23 = (a212 * b02 - a202 * b04 - a232 * b00) * det;
					_this.self._30 = (a112 * b07 - a102 * b09 - a122 * b06) * det;
					_this.self._31 = (a002 * b09 - a012 * b07 + a022 * b06) * det;
					_this.self._32 = (a312 * b011 - a302 * b03 - a322 * b00) * det;
					_this.self._33 = (a202 * b03 - a212 * b011 + a222 * b00) * det;
				}
				var m5 = iron_object_BoneAnimation.m1;
				var a003 = m.self._00;
				var a013 = m.self._01;
				var a023 = m.self._02;
				var a033 = m.self._03;
				var a103 = m.self._10;
				var a113 = m.self._11;
				var a123 = m.self._12;
				var a133 = m.self._13;
				var a203 = m.self._20;
				var a213 = m.self._21;
				var a223 = m.self._22;
				var a233 = m.self._23;
				var a303 = m.self._30;
				var a313 = m.self._31;
				var a323 = m.self._32;
				var a333 = m.self._33;
				var b010 = m5.self._00;
				var b12 = m5.self._10;
				var b22 = m5.self._20;
				var b32 = m5.self._30;
				m.self._00 = a003 * b010 + a013 * b12 + a023 * b22 + a033 * b32;
				m.self._10 = a103 * b010 + a113 * b12 + a123 * b22 + a133 * b32;
				m.self._20 = a203 * b010 + a213 * b12 + a223 * b22 + a233 * b32;
				m.self._30 = a303 * b010 + a313 * b12 + a323 * b22 + a333 * b32;
				b010 = m5.self._01;
				b12 = m5.self._11;
				b22 = m5.self._21;
				b32 = m5.self._31;
				m.self._01 = a003 * b010 + a013 * b12 + a023 * b22 + a033 * b32;
				m.self._11 = a103 * b010 + a113 * b12 + a123 * b22 + a133 * b32;
				m.self._21 = a203 * b010 + a213 * b12 + a223 * b22 + a233 * b32;
				m.self._31 = a303 * b010 + a313 * b12 + a323 * b22 + a333 * b32;
				b010 = m5.self._02;
				b12 = m5.self._12;
				b22 = m5.self._22;
				b32 = m5.self._32;
				m.self._02 = a003 * b010 + a013 * b12 + a023 * b22 + a033 * b32;
				m.self._12 = a103 * b010 + a113 * b12 + a123 * b22 + a133 * b32;
				m.self._22 = a203 * b010 + a213 * b12 + a223 * b22 + a233 * b32;
				m.self._32 = a303 * b010 + a313 * b12 + a323 * b22 + a333 * b32;
				b010 = m5.self._03;
				b12 = m5.self._13;
				b22 = m5.self._23;
				b32 = m5.self._33;
				m.self._03 = a003 * b010 + a013 * b12 + a023 * b22 + a033 * b32;
				m.self._13 = a103 * b010 + a113 * b12 + a123 * b22 + a133 * b32;
				m.self._23 = a203 * b010 + a213 * b12 + a223 * b22 + a233 * b32;
				m.self._33 = a303 * b010 + a313 * b12 + a323 * b22 + a333 * b32;
			}
		}
	}
	,updateBonesOnly: function() {
		if(this.boneChildren != null) {
			var _g = 0;
			var _g1 = this.skeletonBones.length;
			while(_g < _g1) {
				var i = _g++;
				var b = this.skeletonBones[i];
				var _this = iron_object_BoneAnimation.m;
				var m = this.matsFast[i];
				_this.self._00 = m.self._00;
				_this.self._01 = m.self._01;
				_this.self._02 = m.self._02;
				_this.self._03 = m.self._03;
				_this.self._10 = m.self._10;
				_this.self._11 = m.self._11;
				_this.self._12 = m.self._12;
				_this.self._13 = m.self._13;
				_this.self._20 = m.self._20;
				_this.self._21 = m.self._21;
				_this.self._22 = m.self._22;
				_this.self._23 = m.self._23;
				_this.self._30 = m.self._30;
				_this.self._31 = m.self._31;
				_this.self._32 = m.self._32;
				_this.self._33 = m.self._33;
				this.updateBoneChildren(b,iron_object_BoneAnimation.m);
			}
		}
	}
	,updateSkinGpu: function() {
		var bones = this.skeletonBones;
		var s = this.blendCurrent / this.blendTime;
		s = s * s * (3.0 - 2.0 * s);
		if(this.blendFactor != 0.0) {
			s = 1.0 - this.blendFactor;
		}
		var _g = 0;
		var _g1 = bones.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.constraintMats != null) {
				var m = this.constraintMats.h[bones[i].__id__];
				if(m != null) {
					this.updateSkinBuffer(m,i);
					continue;
				}
			}
			var _this = iron_object_BoneAnimation.m;
			var m1 = this.matsFast[i];
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._03 = m1.self._03;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._13 = m1.self._13;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			_this.self._23 = m1.self._23;
			_this.self._30 = m1.self._30;
			_this.self._31 = m1.self._31;
			_this.self._32 = m1.self._32;
			_this.self._33 = m1.self._33;
			if(this.blendTime > 0 && this.skeletonBonesBlend != null) {
				var _this1 = iron_object_BoneAnimation.m1;
				var m2 = this.matsFastBlend[i];
				_this1.self._00 = m2.self._00;
				_this1.self._01 = m2.self._01;
				_this1.self._02 = m2.self._02;
				_this1.self._03 = m2.self._03;
				_this1.self._10 = m2.self._10;
				_this1.self._11 = m2.self._11;
				_this1.self._12 = m2.self._12;
				_this1.self._13 = m2.self._13;
				_this1.self._20 = m2.self._20;
				_this1.self._21 = m2.self._21;
				_this1.self._22 = m2.self._22;
				_this1.self._23 = m2.self._23;
				_this1.self._30 = m2.self._30;
				_this1.self._31 = m2.self._31;
				_this1.self._32 = m2.self._32;
				_this1.self._33 = m2.self._33;
				var _this2 = iron_object_BoneAnimation.m1;
				var loc = iron_object_BoneAnimation.vpos;
				var quat = iron_object_BoneAnimation.q1;
				var scale = iron_object_BoneAnimation.vscl;
				loc.x = _this2.self._30;
				loc.y = _this2.self._31;
				loc.z = _this2.self._32;
				var _this3 = iron_math_Mat4.helpVec;
				_this3.x = _this2.self._00;
				_this3.y = _this2.self._01;
				_this3.z = _this2.self._02;
				_this3.w = 1.0;
				var _this4 = _this3;
				scale.x = Math.sqrt(_this4.x * _this4.x + _this4.y * _this4.y + _this4.z * _this4.z);
				var _this5 = iron_math_Mat4.helpVec;
				_this5.x = _this2.self._10;
				_this5.y = _this2.self._11;
				_this5.z = _this2.self._12;
				_this5.w = 1.0;
				var _this6 = _this5;
				scale.y = Math.sqrt(_this6.x * _this6.x + _this6.y * _this6.y + _this6.z * _this6.z);
				var _this7 = iron_math_Mat4.helpVec;
				_this7.x = _this2.self._20;
				_this7.y = _this2.self._21;
				_this7.z = _this2.self._22;
				_this7.w = 1.0;
				var _this8 = _this7;
				scale.z = Math.sqrt(_this8.x * _this8.x + _this8.y * _this8.y + _this8.z * _this8.z);
				var _this9 = _this2.self;
				var m3 = _this9._12;
				var m4 = _this9._22;
				var m5 = _this9._32;
				var m6 = _this9._13;
				var m7 = _this9._23;
				var m8 = _this9._33;
				var c00 = _this9._11 * (m4 * m8 - m5 * m7) - _this9._21 * (m3 * m8 - m5 * m6) + _this9._31 * (m3 * m7 - m4 * m6);
				var m31 = _this9._12;
				var m41 = _this9._22;
				var m51 = _this9._32;
				var m61 = _this9._13;
				var m71 = _this9._23;
				var m81 = _this9._33;
				var c01 = _this9._10 * (m41 * m81 - m51 * m71) - _this9._20 * (m31 * m81 - m51 * m61) + _this9._30 * (m31 * m71 - m41 * m61);
				var m32 = _this9._11;
				var m42 = _this9._21;
				var m52 = _this9._31;
				var m62 = _this9._13;
				var m72 = _this9._23;
				var m82 = _this9._33;
				var c02 = _this9._10 * (m42 * m82 - m52 * m72) - _this9._20 * (m32 * m82 - m52 * m62) + _this9._30 * (m32 * m72 - m42 * m62);
				var m33 = _this9._11;
				var m43 = _this9._21;
				var m53 = _this9._31;
				var m63 = _this9._12;
				var m73 = _this9._22;
				var m83 = _this9._32;
				var c03 = _this9._10 * (m43 * m83 - m53 * m73) - _this9._20 * (m33 * m83 - m53 * m63) + _this9._30 * (m33 * m73 - m43 * m63);
				if(_this9._00 * c00 - _this9._01 * c01 + _this9._02 * c02 - _this9._03 * c03 < 0.0) {
					scale.x = -scale.x;
				}
				var invs = 1.0 / scale.x;
				iron_math_Mat4.helpMat.self._00 = _this2.self._00 * invs;
				iron_math_Mat4.helpMat.self._01 = _this2.self._01 * invs;
				iron_math_Mat4.helpMat.self._02 = _this2.self._02 * invs;
				invs = 1.0 / scale.y;
				iron_math_Mat4.helpMat.self._10 = _this2.self._10 * invs;
				iron_math_Mat4.helpMat.self._11 = _this2.self._11 * invs;
				iron_math_Mat4.helpMat.self._12 = _this2.self._12 * invs;
				invs = 1.0 / scale.z;
				iron_math_Mat4.helpMat.self._20 = _this2.self._20 * invs;
				iron_math_Mat4.helpMat.self._21 = _this2.self._21 * invs;
				iron_math_Mat4.helpMat.self._22 = _this2.self._22 * invs;
				var m9 = iron_math_Mat4.helpMat;
				var m11 = m9.self._00;
				var m12 = m9.self._10;
				var m13 = m9.self._20;
				var m21 = m9.self._01;
				var m22 = m9.self._11;
				var m23 = m9.self._21;
				var m311 = m9.self._02;
				var m321 = m9.self._12;
				var m331 = m9.self._22;
				var tr = m11 + m22 + m331;
				var s1 = 0.0;
				if(tr > 0) {
					s1 = 0.5 / Math.sqrt(tr + 1.0);
					quat.w = 0.25 / s1;
					quat.x = (m321 - m23) * s1;
					quat.y = (m13 - m311) * s1;
					quat.z = (m21 - m12) * s1;
				} else if(m11 > m22 && m11 > m331) {
					s1 = 2.0 * Math.sqrt(1.0 + m11 - m22 - m331);
					quat.w = (m321 - m23) / s1;
					quat.x = 0.25 * s1;
					quat.y = (m12 + m21) / s1;
					quat.z = (m13 + m311) / s1;
				} else if(m22 > m331) {
					s1 = 2.0 * Math.sqrt(1.0 + m22 - m11 - m331);
					quat.w = (m13 - m311) / s1;
					quat.x = (m12 + m21) / s1;
					quat.y = 0.25 * s1;
					quat.z = (m23 + m321) / s1;
				} else {
					s1 = 2.0 * Math.sqrt(1.0 + m331 - m11 - m22);
					quat.w = (m21 - m12) / s1;
					quat.x = (m13 + m311) / s1;
					quat.y = (m23 + m321) / s1;
					quat.z = 0.25 * s1;
				}
				var _this10 = iron_object_BoneAnimation.m;
				var loc1 = iron_object_BoneAnimation.vpos2;
				var quat1 = iron_object_BoneAnimation.q2;
				var scale1 = iron_object_BoneAnimation.vscl2;
				loc1.x = _this10.self._30;
				loc1.y = _this10.self._31;
				loc1.z = _this10.self._32;
				var _this11 = iron_math_Mat4.helpVec;
				_this11.x = _this10.self._00;
				_this11.y = _this10.self._01;
				_this11.z = _this10.self._02;
				_this11.w = 1.0;
				var _this12 = _this11;
				scale1.x = Math.sqrt(_this12.x * _this12.x + _this12.y * _this12.y + _this12.z * _this12.z);
				var _this13 = iron_math_Mat4.helpVec;
				_this13.x = _this10.self._10;
				_this13.y = _this10.self._11;
				_this13.z = _this10.self._12;
				_this13.w = 1.0;
				var _this14 = _this13;
				scale1.y = Math.sqrt(_this14.x * _this14.x + _this14.y * _this14.y + _this14.z * _this14.z);
				var _this15 = iron_math_Mat4.helpVec;
				_this15.x = _this10.self._20;
				_this15.y = _this10.self._21;
				_this15.z = _this10.self._22;
				_this15.w = 1.0;
				var _this16 = _this15;
				scale1.z = Math.sqrt(_this16.x * _this16.x + _this16.y * _this16.y + _this16.z * _this16.z);
				var _this17 = _this10.self;
				var m34 = _this17._12;
				var m44 = _this17._22;
				var m54 = _this17._32;
				var m64 = _this17._13;
				var m74 = _this17._23;
				var m84 = _this17._33;
				var c001 = _this17._11 * (m44 * m84 - m54 * m74) - _this17._21 * (m34 * m84 - m54 * m64) + _this17._31 * (m34 * m74 - m44 * m64);
				var m35 = _this17._12;
				var m45 = _this17._22;
				var m55 = _this17._32;
				var m65 = _this17._13;
				var m75 = _this17._23;
				var m85 = _this17._33;
				var c011 = _this17._10 * (m45 * m85 - m55 * m75) - _this17._20 * (m35 * m85 - m55 * m65) + _this17._30 * (m35 * m75 - m45 * m65);
				var m36 = _this17._11;
				var m46 = _this17._21;
				var m56 = _this17._31;
				var m66 = _this17._13;
				var m76 = _this17._23;
				var m86 = _this17._33;
				var c021 = _this17._10 * (m46 * m86 - m56 * m76) - _this17._20 * (m36 * m86 - m56 * m66) + _this17._30 * (m36 * m76 - m46 * m66);
				var m37 = _this17._11;
				var m47 = _this17._21;
				var m57 = _this17._31;
				var m67 = _this17._12;
				var m77 = _this17._22;
				var m87 = _this17._32;
				var c031 = _this17._10 * (m47 * m87 - m57 * m77) - _this17._20 * (m37 * m87 - m57 * m67) + _this17._30 * (m37 * m77 - m47 * m67);
				if(_this17._00 * c001 - _this17._01 * c011 + _this17._02 * c021 - _this17._03 * c031 < 0.0) {
					scale1.x = -scale1.x;
				}
				var invs1 = 1.0 / scale1.x;
				iron_math_Mat4.helpMat.self._00 = _this10.self._00 * invs1;
				iron_math_Mat4.helpMat.self._01 = _this10.self._01 * invs1;
				iron_math_Mat4.helpMat.self._02 = _this10.self._02 * invs1;
				invs1 = 1.0 / scale1.y;
				iron_math_Mat4.helpMat.self._10 = _this10.self._10 * invs1;
				iron_math_Mat4.helpMat.self._11 = _this10.self._11 * invs1;
				iron_math_Mat4.helpMat.self._12 = _this10.self._12 * invs1;
				invs1 = 1.0 / scale1.z;
				iron_math_Mat4.helpMat.self._20 = _this10.self._20 * invs1;
				iron_math_Mat4.helpMat.self._21 = _this10.self._21 * invs1;
				iron_math_Mat4.helpMat.self._22 = _this10.self._22 * invs1;
				var m10 = iron_math_Mat4.helpMat;
				var m111 = m10.self._00;
				var m121 = m10.self._10;
				var m131 = m10.self._20;
				var m211 = m10.self._01;
				var m221 = m10.self._11;
				var m231 = m10.self._21;
				var m312 = m10.self._02;
				var m322 = m10.self._12;
				var m332 = m10.self._22;
				var tr1 = m111 + m221 + m332;
				var s2 = 0.0;
				if(tr1 > 0) {
					s2 = 0.5 / Math.sqrt(tr1 + 1.0);
					quat1.w = 0.25 / s2;
					quat1.x = (m322 - m231) * s2;
					quat1.y = (m131 - m312) * s2;
					quat1.z = (m211 - m121) * s2;
				} else if(m111 > m221 && m111 > m332) {
					s2 = 2.0 * Math.sqrt(1.0 + m111 - m221 - m332);
					quat1.w = (m322 - m231) / s2;
					quat1.x = 0.25 * s2;
					quat1.y = (m121 + m211) / s2;
					quat1.z = (m131 + m312) / s2;
				} else if(m221 > m332) {
					s2 = 2.0 * Math.sqrt(1.0 + m221 - m111 - m332);
					quat1.w = (m131 - m312) / s2;
					quat1.x = (m121 + m211) / s2;
					quat1.y = 0.25 * s2;
					quat1.z = (m231 + m322) / s2;
				} else {
					s2 = 2.0 * Math.sqrt(1.0 + m332 - m111 - m221);
					quat1.w = (m211 - m121) / s2;
					quat1.x = (m131 + m312) / s2;
					quat1.y = (m231 + m322) / s2;
					quat1.z = 0.25 * s2;
				}
				var _this18 = iron_object_BoneAnimation.v1;
				var from = iron_object_BoneAnimation.vpos;
				var to = iron_object_BoneAnimation.vpos2;
				_this18.x = from.x + (to.x - from.x) * s;
				_this18.y = from.y + (to.y - from.y) * s;
				_this18.z = from.z + (to.z - from.z) * s;
				var _this19 = iron_object_BoneAnimation.v2;
				var from1 = iron_object_BoneAnimation.vscl;
				var to1 = iron_object_BoneAnimation.vscl2;
				_this19.x = from1.x + (to1.x - from1.x) * s;
				_this19.y = from1.y + (to1.y - from1.y) * s;
				_this19.z = from1.z + (to1.z - from1.z) * s;
				var _this20 = iron_object_BoneAnimation.q3;
				var from2 = iron_object_BoneAnimation.q1;
				var to2 = iron_object_BoneAnimation.q2;
				var fromx = from2.x;
				var fromy = from2.y;
				var fromz = from2.z;
				var fromw = from2.w;
				var dot = from2.x * to2.x + from2.y * to2.y + from2.z * to2.z + from2.w * to2.w;
				if(dot < 0.0) {
					fromx = -fromx;
					fromy = -fromy;
					fromz = -fromz;
					fromw = -fromw;
				}
				_this20.x = fromx + (to2.x - fromx) * s;
				_this20.y = fromy + (to2.y - fromy) * s;
				_this20.z = fromz + (to2.z - fromz) * s;
				_this20.w = fromw + (to2.w - fromw) * s;
				var l = Math.sqrt(_this20.x * _this20.x + _this20.y * _this20.y + _this20.z * _this20.z + _this20.w * _this20.w);
				if(l == 0.0) {
					_this20.x = 0;
					_this20.y = 0;
					_this20.z = 0;
					_this20.w = 0;
				} else {
					l = 1.0 / l;
					_this20.x *= l;
					_this20.y *= l;
					_this20.z *= l;
					_this20.w *= l;
				}
				var _this21 = iron_object_BoneAnimation.m;
				var q = iron_object_BoneAnimation.q3;
				var x = q.x;
				var y = q.y;
				var z = q.z;
				var w = q.w;
				var x2 = x + x;
				var y2 = y + y;
				var z2 = z + z;
				var xx = x * x2;
				var xy = x * y2;
				var xz = x * z2;
				var yy = y * y2;
				var yz = y * z2;
				var zz = z * z2;
				var wx = w * x2;
				var wy = w * y2;
				var wz = w * z2;
				_this21.self._00 = 1.0 - (yy + zz);
				_this21.self._10 = xy - wz;
				_this21.self._20 = xz + wy;
				_this21.self._01 = xy + wz;
				_this21.self._11 = 1.0 - (xx + zz);
				_this21.self._21 = yz - wx;
				_this21.self._02 = xz - wy;
				_this21.self._12 = yz + wx;
				_this21.self._22 = 1.0 - (xx + yy);
				_this21.self._03 = 0.0;
				_this21.self._13 = 0.0;
				_this21.self._23 = 0.0;
				_this21.self._30 = 0.0;
				_this21.self._31 = 0.0;
				_this21.self._32 = 0.0;
				_this21.self._33 = 1.0;
				var _this22 = iron_object_BoneAnimation.m;
				var v = iron_object_BoneAnimation.v2;
				var x1 = v.x;
				var y1 = v.y;
				var z1 = v.z;
				_this22.self._00 *= x1;
				_this22.self._01 *= x1;
				_this22.self._02 *= x1;
				_this22.self._03 *= x1;
				_this22.self._10 *= y1;
				_this22.self._11 *= y1;
				_this22.self._12 *= y1;
				_this22.self._13 *= y1;
				_this22.self._20 *= z1;
				_this22.self._21 *= z1;
				_this22.self._22 *= z1;
				_this22.self._23 *= z1;
				iron_object_BoneAnimation.m.self._30 = iron_object_BoneAnimation.v1.x;
				iron_object_BoneAnimation.m.self._31 = iron_object_BoneAnimation.v1.y;
				iron_object_BoneAnimation.m.self._32 = iron_object_BoneAnimation.v1.z;
			}
			if(this.absMats != null && i < this.absMats.length) {
				var _this23 = this.absMats[i];
				var m14 = iron_object_BoneAnimation.m;
				_this23.self._00 = m14.self._00;
				_this23.self._01 = m14.self._01;
				_this23.self._02 = m14.self._02;
				_this23.self._03 = m14.self._03;
				_this23.self._10 = m14.self._10;
				_this23.self._11 = m14.self._11;
				_this23.self._12 = m14.self._12;
				_this23.self._13 = m14.self._13;
				_this23.self._20 = m14.self._20;
				_this23.self._21 = m14.self._21;
				_this23.self._22 = m14.self._22;
				_this23.self._23 = m14.self._23;
				_this23.self._30 = m14.self._30;
				_this23.self._31 = m14.self._31;
				_this23.self._32 = m14.self._32;
				_this23.self._33 = m14.self._33;
			}
			if(this.boneChildren != null) {
				this.updateBoneChildren(bones[i],iron_object_BoneAnimation.m);
			}
			var _this24 = iron_object_BoneAnimation.m;
			var b = iron_object_BoneAnimation.m;
			var a = this.data.geom.skeletonTransformsI[i];
			var a00 = a.self._00;
			var a01 = a.self._01;
			var a02 = a.self._02;
			var a03 = a.self._03;
			var a10 = a.self._10;
			var a11 = a.self._11;
			var a12 = a.self._12;
			var a13 = a.self._13;
			var a20 = a.self._20;
			var a21 = a.self._21;
			var a22 = a.self._22;
			var a23 = a.self._23;
			var a30 = a.self._30;
			var a31 = a.self._31;
			var a32 = a.self._32;
			var a33 = a.self._33;
			var b0 = b.self._00;
			var b1 = b.self._10;
			var b2 = b.self._20;
			var b3 = b.self._30;
			_this24.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this24.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this24.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this24.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._01;
			b1 = b.self._11;
			b2 = b.self._21;
			b3 = b.self._31;
			_this24.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this24.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this24.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this24.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._02;
			b1 = b.self._12;
			b2 = b.self._22;
			b3 = b.self._32;
			_this24.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this24.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this24.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this24.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._03;
			b1 = b.self._13;
			b2 = b.self._23;
			b3 = b.self._33;
			_this24.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this24.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this24.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this24.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			this.updateSkinBuffer(iron_object_BoneAnimation.m,i);
		}
	}
	,updateSkinBuffer: function(m,i) {
		var loc = iron_object_BoneAnimation.vpos;
		var quat = iron_object_BoneAnimation.q1;
		var scale = iron_object_BoneAnimation.vscl;
		loc.x = m.self._30;
		loc.y = m.self._31;
		loc.z = m.self._32;
		var _this = iron_math_Mat4.helpVec;
		_this.x = m.self._00;
		_this.y = m.self._01;
		_this.z = m.self._02;
		_this.w = 1.0;
		var _this1 = _this;
		scale.x = Math.sqrt(_this1.x * _this1.x + _this1.y * _this1.y + _this1.z * _this1.z);
		var _this = iron_math_Mat4.helpVec;
		_this.x = m.self._10;
		_this.y = m.self._11;
		_this.z = m.self._12;
		_this.w = 1.0;
		var _this1 = _this;
		scale.y = Math.sqrt(_this1.x * _this1.x + _this1.y * _this1.y + _this1.z * _this1.z);
		var _this = iron_math_Mat4.helpVec;
		_this.x = m.self._20;
		_this.y = m.self._21;
		_this.z = m.self._22;
		_this.w = 1.0;
		var _this1 = _this;
		scale.z = Math.sqrt(_this1.x * _this1.x + _this1.y * _this1.y + _this1.z * _this1.z);
		var _this = m.self;
		var m3 = _this._12;
		var m4 = _this._22;
		var m5 = _this._32;
		var m6 = _this._13;
		var m7 = _this._23;
		var m8 = _this._33;
		var c00 = _this._11 * (m4 * m8 - m5 * m7) - _this._21 * (m3 * m8 - m5 * m6) + _this._31 * (m3 * m7 - m4 * m6);
		var m3 = _this._12;
		var m4 = _this._22;
		var m5 = _this._32;
		var m6 = _this._13;
		var m7 = _this._23;
		var m8 = _this._33;
		var c01 = _this._10 * (m4 * m8 - m5 * m7) - _this._20 * (m3 * m8 - m5 * m6) + _this._30 * (m3 * m7 - m4 * m6);
		var m3 = _this._11;
		var m4 = _this._21;
		var m5 = _this._31;
		var m6 = _this._13;
		var m7 = _this._23;
		var m8 = _this._33;
		var c02 = _this._10 * (m4 * m8 - m5 * m7) - _this._20 * (m3 * m8 - m5 * m6) + _this._30 * (m3 * m7 - m4 * m6);
		var m3 = _this._11;
		var m4 = _this._21;
		var m5 = _this._31;
		var m6 = _this._12;
		var m7 = _this._22;
		var m8 = _this._32;
		var c03 = _this._10 * (m4 * m8 - m5 * m7) - _this._20 * (m3 * m8 - m5 * m6) + _this._30 * (m3 * m7 - m4 * m6);
		if(_this._00 * c00 - _this._01 * c01 + _this._02 * c02 - _this._03 * c03 < 0.0) {
			scale.x = -scale.x;
		}
		var invs = 1.0 / scale.x;
		iron_math_Mat4.helpMat.self._00 = m.self._00 * invs;
		iron_math_Mat4.helpMat.self._01 = m.self._01 * invs;
		iron_math_Mat4.helpMat.self._02 = m.self._02 * invs;
		invs = 1.0 / scale.y;
		iron_math_Mat4.helpMat.self._10 = m.self._10 * invs;
		iron_math_Mat4.helpMat.self._11 = m.self._11 * invs;
		iron_math_Mat4.helpMat.self._12 = m.self._12 * invs;
		invs = 1.0 / scale.z;
		iron_math_Mat4.helpMat.self._20 = m.self._20 * invs;
		iron_math_Mat4.helpMat.self._21 = m.self._21 * invs;
		iron_math_Mat4.helpMat.self._22 = m.self._22 * invs;
		var m = iron_math_Mat4.helpMat;
		var m11 = m.self._00;
		var m12 = m.self._10;
		var m13 = m.self._20;
		var m21 = m.self._01;
		var m22 = m.self._11;
		var m23 = m.self._21;
		var m31 = m.self._02;
		var m32 = m.self._12;
		var m33 = m.self._22;
		var tr = m11 + m22 + m33;
		var s = 0.0;
		if(tr > 0) {
			s = 0.5 / Math.sqrt(tr + 1.0);
			quat.w = 0.25 / s;
			quat.x = (m32 - m23) * s;
			quat.y = (m13 - m31) * s;
			quat.z = (m21 - m12) * s;
		} else if(m11 > m22 && m11 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			quat.w = (m32 - m23) / s;
			quat.x = 0.25 * s;
			quat.y = (m12 + m21) / s;
			quat.z = (m13 + m31) / s;
		} else if(m22 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			quat.w = (m13 - m31) / s;
			quat.x = (m12 + m21) / s;
			quat.y = 0.25 * s;
			quat.z = (m23 + m32) / s;
		} else {
			s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			quat.w = (m21 - m12) / s;
			quat.x = (m13 + m31) / s;
			quat.y = (m23 + m32) / s;
			quat.z = 0.25 * s;
		}
		var _this = iron_object_BoneAnimation.q1;
		var l = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z + _this.w * _this.w);
		if(l == 0.0) {
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 0;
		} else {
			l = 1.0 / l;
			_this.x *= l;
			_this.y *= l;
			_this.z *= l;
			_this.w *= l;
		}
		var _this = iron_object_BoneAnimation.q2;
		_this.x = iron_object_BoneAnimation.vpos.x;
		_this.y = iron_object_BoneAnimation.vpos.y;
		_this.z = iron_object_BoneAnimation.vpos.z;
		_this.w = 0.0;
		var _this = iron_object_BoneAnimation.q2;
		var q1 = iron_object_BoneAnimation.q2;
		var q2 = iron_object_BoneAnimation.q1;
		var q1x = q1.x;
		var q1y = q1.y;
		var q1z = q1.z;
		var q1w = q1.w;
		var q2x = q2.x;
		var q2y = q2.y;
		var q2z = q2.z;
		var q2w = q2.w;
		_this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
		_this.y = q1w * q2y - q1x * q2z + q1y * q2w + q1z * q2x;
		_this.z = q1w * q2z + q1x * q2y - q1y * q2x + q1z * q2w;
		_this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
		var v = iron_object_BoneAnimation.q1.x;
		this.skinBuffer.setFloat32(i * 8 * 4,v,true);
		var v = iron_object_BoneAnimation.q1.y;
		this.skinBuffer.setFloat32((i * 8 + 1) * 4,v,true);
		var v = iron_object_BoneAnimation.q1.z;
		this.skinBuffer.setFloat32((i * 8 + 2) * 4,v,true);
		var v = iron_object_BoneAnimation.q1.w;
		this.skinBuffer.setFloat32((i * 8 + 3) * 4,v,true);
		var v = iron_object_BoneAnimation.q2.x * 0.5;
		this.skinBuffer.setFloat32((i * 8 + 4) * 4,v,true);
		var v = iron_object_BoneAnimation.q2.y * 0.5;
		this.skinBuffer.setFloat32((i * 8 + 5) * 4,v,true);
		var v = iron_object_BoneAnimation.q2.z * 0.5;
		this.skinBuffer.setFloat32((i * 8 + 6) * 4,v,true);
		var v = iron_object_BoneAnimation.q2.w * 0.5;
		this.skinBuffer.setFloat32((i * 8 + 7) * 4,v,true);
	}
	,getBone: function(name) {
		if(this.skeletonBones == null) {
			return null;
		}
		var _g = 0;
		var _g1 = this.skeletonBones;
		while(_g < _g1.length) {
			var b = _g1[_g];
			++_g;
			if(b.name == name) {
				return b;
			}
		}
		return null;
	}
	,getBoneIndex: function(bone,bones) {
		if(bones == null) {
			bones = this.skeletonBones;
		}
		if(bones != null) {
			var _g = 0;
			var _g1 = bones.length;
			while(_g < _g1) {
				var i = _g++;
				if(bones[i] == bone) {
					return i;
				}
			}
		}
		return -1;
	}
	,__class__: iron_object_BoneAnimation
});
var iron_object_Object = function() {
	this.isEmpty = false;
	this.properties = null;
	this.culledShadow = false;
	this.culledMesh = false;
	this.culled = false;
	this.visibleShadow = true;
	this.visibleMesh = true;
	this.visible = true;
	this.animation = null;
	this.lods = null;
	this.children = [];
	this.parent = null;
	this.traits = [];
	this.constraints = null;
	this.name = "";
	this.raw = null;
	this.uid = iron_object_Object.uidCounter++;
	this.urandom = iron_object_Object.seededRandom();
	this.transform = new iron_object_Transform(this);
	this.isEmpty = js_Boot.getClass(this) == iron_object_Object;
	if(this.isEmpty && iron_Scene.active != null) {
		iron_Scene.active.empties.push(this);
	}
};
$hxClasses["iron.object.Object"] = iron_object_Object;
iron_object_Object.__name__ = true;
iron_object_Object.seededRandom = function() {
	iron_object_Object.seed = (iron_object_Object.seed * 9301 + 49297) % 233280;
	return iron_object_Object.seed / 233280.0;
};
iron_object_Object.prototype = {
	setParent: function(parentObject,parentInverse,keepTransform) {
		if(keepTransform == null) {
			keepTransform = false;
		}
		if(parentInverse == null) {
			parentInverse = false;
		}
		if(parentObject == this || parentObject == this.parent) {
			return;
		}
		if(this.parent != null) {
			HxOverrides.remove(this.parent.children,this);
			if(keepTransform) {
				this.transform.applyParent();
			}
			this.parent = null;
			this.transform.buildMatrix();
		}
		if(parentObject == null) {
			parentObject = iron_Scene.active.sceneParent;
		}
		this.parent = parentObject;
		this.parent.children.push(this);
		if(parentInverse) {
			this.transform.applyParentInverse();
		}
	}
	,remove: function() {
		if(this.isEmpty && iron_Scene.active != null) {
			HxOverrides.remove(iron_Scene.active.empties,this);
		}
		if(this.animation != null) {
			this.animation.remove();
		}
		while(this.children.length > 0) this.children[0].remove();
		while(this.traits.length > 0) this.traits[0].remove();
		if(this.parent != null) {
			HxOverrides.remove(this.parent.children,this);
			this.parent = null;
		}
	}
	,getChild: function(name) {
		if(this.name == name) {
			return this;
		} else {
			var _g = 0;
			var _g1 = this.children;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				var r = c.getChild(name);
				if(r != null) {
					return r;
				}
			}
		}
		return null;
	}
	,getChildren: function(recursive) {
		if(recursive == null) {
			recursive = false;
		}
		if(!recursive) {
			return this.children;
		}
		var retChildren = this.children.slice();
		var _g = 0;
		var _g1 = this.children;
		while(_g < _g1.length) {
			var child = _g1[_g];
			++_g;
			retChildren = retChildren.concat(child.getChildren(recursive));
		}
		return retChildren;
	}
	,addTrait: function(t) {
		this.traits.push(t);
		t.object = this;
		if(t._add != null) {
			var _g = 0;
			var _g1 = t._add;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				f();
			}
			t._add = null;
		}
	}
	,removeTrait: function(t) {
		if(t._init != null) {
			var _g = 0;
			var _g1 = t._init;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				iron_App.removeInit(f);
			}
			t._init = null;
		}
		if(t._update != null) {
			var _g = 0;
			var _g1 = t._update;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				iron_App.removeUpdate(f);
			}
			t._update = null;
		}
		if(t._lateUpdate != null) {
			var _g = 0;
			var _g1 = t._lateUpdate;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				iron_App.removeLateUpdate(f);
			}
			t._lateUpdate = null;
		}
		if(t._render != null) {
			var _g = 0;
			var _g1 = t._render;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				iron_App.removeRender(f);
			}
			t._render = null;
		}
		if(t._render2D != null) {
			var _g = 0;
			var _g1 = t._render2D;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				iron_App.removeRender2D(f);
			}
			t._render2D = null;
		}
		if(t._remove != null) {
			var _g = 0;
			var _g1 = t._remove;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				f();
			}
			t._remove = null;
		}
		HxOverrides.remove(this.traits,t);
	}
	,getParentArmature: function(name) {
		var _g = 0;
		var _g1 = iron_Scene.active.animations;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.armature != null && a.armature.name == name) {
				return a;
			}
		}
		return null;
	}
	,setupAnimation: function(oactions) {
		var _gthis = this;
		if(this.raw.parent_bone != null) {
			iron_Scene.active.notifyOnInit(function() {
				var banim = _gthis.getParentArmature(_gthis.parent.name);
				if(banim != null) {
					banim.addBoneChild(_gthis.raw.parent_bone,_gthis);
				}
			});
		}
		if(oactions == null) {
			return;
		}
		this.animation = new iron_object_ObjectAnimation(this,oactions);
	}
	,setupMorphTargets: function() {
	}
	,__class__: iron_object_Object
};
var iron_object_CameraObject = function(data) {
	this.currentFace = 0;
	this.renderTargetCube = null;
	this.renderTarget = null;
	this.frustumPlanes = null;
	this.prevV = null;
	iron_object_Object.call(this);
	this.data = data;
	this.buildProjection();
	this.V = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	this.VP = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	if(data.raw.frustum_culling) {
		this.frustumPlanes = [];
		this.frustumPlanes.push(new iron_object_FrustumPlane());
		this.frustumPlanes.push(new iron_object_FrustumPlane());
		this.frustumPlanes.push(new iron_object_FrustumPlane());
		this.frustumPlanes.push(new iron_object_FrustumPlane());
		this.frustumPlanes.push(new iron_object_FrustumPlane());
		this.frustumPlanes.push(new iron_object_FrustumPlane());
	}
	iron_Scene.active.cameras.push(this);
};
$hxClasses["iron.object.CameraObject"] = iron_object_CameraObject;
iron_object_CameraObject.__name__ = true;
iron_object_CameraObject.buildViewFrustum = function(VP,frustumPlanes) {
	var _this = frustumPlanes[0];
	var _this1 = _this.normal;
	_this1.x = VP.self._03 + VP.self._00;
	_this1.y = VP.self._13 + VP.self._10;
	_this1.z = VP.self._23 + VP.self._20;
	_this1.w = 1.0;
	_this.constant = VP.self._33 + VP.self._30;
	var _this = frustumPlanes[1];
	var _this1 = _this.normal;
	_this1.x = VP.self._03 - VP.self._00;
	_this1.y = VP.self._13 - VP.self._10;
	_this1.z = VP.self._23 - VP.self._20;
	_this1.w = 1.0;
	_this.constant = VP.self._33 - VP.self._30;
	var _this = frustumPlanes[2];
	var _this1 = _this.normal;
	_this1.x = VP.self._03 - VP.self._01;
	_this1.y = VP.self._13 - VP.self._11;
	_this1.z = VP.self._23 - VP.self._21;
	_this1.w = 1.0;
	_this.constant = VP.self._33 - VP.self._31;
	var _this = frustumPlanes[3];
	var _this1 = _this.normal;
	_this1.x = VP.self._03 + VP.self._01;
	_this1.y = VP.self._13 + VP.self._11;
	_this1.z = VP.self._23 + VP.self._21;
	_this1.w = 1.0;
	_this.constant = VP.self._33 + VP.self._31;
	var _this = frustumPlanes[4];
	var _this1 = _this.normal;
	_this1.x = VP.self._02;
	_this1.y = VP.self._12;
	_this1.z = VP.self._22;
	_this1.w = 1.0;
	_this.constant = VP.self._32;
	var _this = frustumPlanes[5];
	var _this1 = _this.normal;
	_this1.x = VP.self._03 - VP.self._02;
	_this1.y = VP.self._13 - VP.self._12;
	_this1.z = VP.self._23 - VP.self._22;
	_this1.w = 1.0;
	_this.constant = VP.self._33 - VP.self._32;
	var _g = 0;
	while(_g < frustumPlanes.length) {
		var plane = frustumPlanes[_g];
		++_g;
		plane.normalize();
	}
};
iron_object_CameraObject.sphereInFrustum = function(frustumPlanes,t,radiusScale,offsetX,offsetY,offsetZ) {
	if(offsetZ == null) {
		offsetZ = 0.0;
	}
	if(offsetY == null) {
		offsetY = 0.0;
	}
	if(offsetX == null) {
		offsetX = 0.0;
	}
	if(radiusScale == null) {
		radiusScale = 1.0;
	}
	var radius = t.radius * radiusScale;
	var _g = 0;
	while(_g < frustumPlanes.length) {
		var plane = frustumPlanes[_g];
		++_g;
		var _this = iron_object_CameraObject.sphereCenter;
		_this.x = t.world.self._30 + offsetX;
		_this.y = t.world.self._31 + offsetY;
		_this.z = t.world.self._32 + offsetZ;
		_this.w = 1.0;
		if(plane.distanceToSphere(iron_object_CameraObject.sphereCenter,radius) + radius * 2 < 0) {
			return false;
		}
	}
	return true;
};
iron_object_CameraObject.setCubeFace = function(m,eye,face,flip) {
	if(flip == null) {
		flip = false;
	}
	var _this = iron_object_CameraObject.vcenter;
	_this.x = eye.x;
	_this.y = eye.y;
	_this.z = eye.z;
	_this.w = eye.w;
	var f = flip ? -1.0 : 1.0;
	switch(face) {
	case 0:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += f;
		_this.y += 0.0;
		_this.z += 0.0;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = -1.0 * f;
		_this.z = 0.0;
		_this.w = 1.0;
		break;
	case 1:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += -1.0 * f;
		_this.y += 0.0;
		_this.z += 0.0;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = -1.0 * f;
		_this.z = 0.0;
		_this.w = 1.0;
		break;
	case 2:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += 0.0;
		_this.y += f;
		_this.z += 0.0;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = 0.0;
		_this.z = f;
		_this.w = 1.0;
		break;
	case 3:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += 0.0;
		_this.y += -1.0 * f;
		_this.z += 0.0;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = 0.0;
		_this.z = -1.0 * f;
		_this.w = 1.0;
		break;
	case 4:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += 0.0;
		_this.y += 0.0;
		_this.z += f;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = -1.0 * f;
		_this.z = 0.0;
		_this.w = 1.0;
		break;
	case 5:
		var _this = iron_object_CameraObject.vcenter;
		_this.x += 0.0;
		_this.y += 0.0;
		_this.z += -1.0 * f;
		var _this = iron_object_CameraObject.vup;
		_this.x = 0.0;
		_this.y = -1.0 * f;
		_this.z = 0.0;
		_this.w = 1.0;
		break;
	}
	var center = iron_object_CameraObject.vcenter;
	var up = iron_object_CameraObject.vup;
	var f0 = center.x - eye.x;
	var f1 = center.y - eye.y;
	var f2 = center.z - eye.z;
	var n = 1.0 / Math.sqrt(f0 * f0 + f1 * f1 + f2 * f2);
	f0 *= n;
	f1 *= n;
	f2 *= n;
	var s0 = f1 * up.z - f2 * up.y;
	var s1 = f2 * up.x - f0 * up.z;
	var s2 = f0 * up.y - f1 * up.x;
	n = 1.0 / Math.sqrt(s0 * s0 + s1 * s1 + s2 * s2);
	s0 *= n;
	s1 *= n;
	s2 *= n;
	var u0 = s1 * f2 - s2 * f1;
	var u1 = s2 * f0 - s0 * f2;
	var u2 = s0 * f1 - s1 * f0;
	var d0 = -eye.x * s0 - eye.y * s1 - eye.z * s2;
	var d1 = -eye.x * u0 - eye.y * u1 - eye.z * u2;
	var d2 = eye.x * f0 + eye.y * f1 + eye.z * f2;
	m.self._00 = s0;
	m.self._10 = s1;
	m.self._20 = s2;
	m.self._30 = d0;
	m.self._01 = u0;
	m.self._11 = u1;
	m.self._21 = u2;
	m.self._31 = d1;
	m.self._02 = -f0;
	m.self._12 = -f1;
	m.self._22 = -f2;
	m.self._32 = d2;
	m.self._03 = 0.0;
	m.self._13 = 0.0;
	m.self._23 = 0.0;
	m.self._33 = 1.0;
};
iron_object_CameraObject.__super__ = iron_object_Object;
iron_object_CameraObject.prototype = $extend(iron_object_Object.prototype,{
	buildProjection: function(screenAspect) {
		if(this.data.raw.ortho != null) {
			var left = this.data.raw.ortho.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var right = this.data.raw.ortho.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var bottom = this.data.raw.ortho.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var top = this.data.raw.ortho.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var near = this.data.raw.near_plane;
			var far = this.data.raw.far_plane;
			var rl = right - left;
			var tb = top - bottom;
			var fn = far - near;
			var tx = -(right + left) / rl;
			var ty = -(top + bottom) / tb;
			var tz = -(far + near) / fn;
			this.P = new iron_math_Mat4(2 / rl,0,0,tx,0,2 / tb,0,ty,0,0,-2 / fn,tz,0,0,0,1);
		} else {
			if(screenAspect == null) {
				screenAspect = kha_System.windowWidth() / kha_System.windowHeight();
			}
			var aspect = this.data.raw.aspect != null ? this.data.raw.aspect : screenAspect;
			var zn = this.data.raw.near_plane;
			var zf = this.data.raw.far_plane;
			var uh = 1.0 / Math.tan(this.data.raw.fov / 2);
			var uw = uh / aspect;
			this.P = new iron_math_Mat4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
		}
	}
	,remove: function() {
		HxOverrides.remove(iron_Scene.active.cameras,this);
		iron_object_Object.prototype.remove.call(this);
	}
	,renderFrame: function(g) {
		this.buildMatrix();
		iron_RenderPath.active.renderFrame(g);
		var _this = this.prevV;
		var m = this.V;
		_this.self._00 = m.self._00;
		_this.self._01 = m.self._01;
		_this.self._02 = m.self._02;
		_this.self._03 = m.self._03;
		_this.self._10 = m.self._10;
		_this.self._11 = m.self._11;
		_this.self._12 = m.self._12;
		_this.self._13 = m.self._13;
		_this.self._20 = m.self._20;
		_this.self._21 = m.self._21;
		_this.self._22 = m.self._22;
		_this.self._23 = m.self._23;
		_this.self._30 = m.self._30;
		_this.self._31 = m.self._31;
		_this.self._32 = m.self._32;
		_this.self._33 = m.self._33;
	}
	,buildMatrix: function() {
		this.transform.buildMatrix();
		var _this = this.transform.world;
		var x = Math.sqrt(_this.self._00 * _this.self._00 + _this.self._10 * _this.self._10 + _this.self._20 * _this.self._20);
		var y = Math.sqrt(_this.self._01 * _this.self._01 + _this.self._11 * _this.self._11 + _this.self._21 * _this.self._21);
		var z = Math.sqrt(_this.self._02 * _this.self._02 + _this.self._12 * _this.self._12 + _this.self._22 * _this.self._22);
		if(z == null) {
			z = 0.0;
		}
		if(y == null) {
			y = 0.0;
		}
		if(x == null) {
			x = 0.0;
		}
		var sc_x = x;
		var sc_y = y;
		var sc_z = z;
		var sc_w = 1.0;
		if(sc_x != 1.0 || sc_y != 1.0 || sc_z != 1.0) {
			var _this = iron_object_CameraObject.temp;
			_this.x = 1.0 / sc_x;
			_this.y = 1.0 / sc_y;
			_this.z = 1.0 / sc_z;
			_this.w = 1.0;
			var _this = this.transform.world;
			var v = iron_object_CameraObject.temp;
			var x = v.x;
			var y = v.y;
			var z = v.z;
			_this.self._00 *= x;
			_this.self._01 *= x;
			_this.self._02 *= x;
			_this.self._03 *= x;
			_this.self._10 *= y;
			_this.self._11 *= y;
			_this.self._12 *= y;
			_this.self._13 *= y;
			_this.self._20 *= z;
			_this.self._21 *= z;
			_this.self._22 *= z;
			_this.self._23 *= z;
		}
		var _this = this.V;
		var m = this.transform.world;
		var a00 = m.self._00;
		var a01 = m.self._01;
		var a02 = m.self._02;
		var a03 = m.self._03;
		var a10 = m.self._10;
		var a11 = m.self._11;
		var a12 = m.self._12;
		var a13 = m.self._13;
		var a20 = m.self._20;
		var a21 = m.self._21;
		var a22 = m.self._22;
		var a23 = m.self._23;
		var a30 = m.self._30;
		var a31 = m.self._31;
		var a32 = m.self._32;
		var a33 = m.self._33;
		var b00 = a00 * a11 - a01 * a10;
		var b01 = a00 * a12 - a02 * a10;
		var b02 = a00 * a13 - a03 * a10;
		var b03 = a01 * a12 - a02 * a11;
		var b04 = a01 * a13 - a03 * a11;
		var b05 = a02 * a13 - a03 * a12;
		var b06 = a20 * a31 - a21 * a30;
		var b07 = a20 * a32 - a22 * a30;
		var b08 = a20 * a33 - a23 * a30;
		var b09 = a21 * a32 - a22 * a31;
		var b10 = a21 * a33 - a23 * a31;
		var b11 = a22 * a33 - a23 * a32;
		var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		if(det == 0.0) {
			_this.self._00 = 1.0;
			_this.self._01 = 0.0;
			_this.self._02 = 0.0;
			_this.self._03 = 0.0;
			_this.self._10 = 0.0;
			_this.self._11 = 1.0;
			_this.self._12 = 0.0;
			_this.self._13 = 0.0;
			_this.self._20 = 0.0;
			_this.self._21 = 0.0;
			_this.self._22 = 1.0;
			_this.self._23 = 0.0;
			_this.self._30 = 0.0;
			_this.self._31 = 0.0;
			_this.self._32 = 0.0;
			_this.self._33 = 1.0;
		} else {
			det = 1.0 / det;
			_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
			_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
			_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
			_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
			_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
			_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
			_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
			_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
			_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
			_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
			_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
			_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
			_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
			_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
			_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
			_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		}
		var _this = this.VP;
		var b = this.P;
		var a = this.V;
		var a00 = a.self._00;
		var a01 = a.self._01;
		var a02 = a.self._02;
		var a03 = a.self._03;
		var a10 = a.self._10;
		var a11 = a.self._11;
		var a12 = a.self._12;
		var a13 = a.self._13;
		var a20 = a.self._20;
		var a21 = a.self._21;
		var a22 = a.self._22;
		var a23 = a.self._23;
		var a30 = a.self._30;
		var a31 = a.self._31;
		var a32 = a.self._32;
		var a33 = a.self._33;
		var b0 = b.self._00;
		var b1 = b.self._10;
		var b2 = b.self._20;
		var b3 = b.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._01;
		b1 = b.self._11;
		b2 = b.self._21;
		b3 = b.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._02;
		b1 = b.self._12;
		b2 = b.self._22;
		b3 = b.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._03;
		b1 = b.self._13;
		b2 = b.self._23;
		b3 = b.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		if(this.data.raw.frustum_culling) {
			iron_object_CameraObject.buildViewFrustum(this.VP,this.frustumPlanes);
		}
		if(this.prevV == null) {
			this.prevV = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
			var _this = this.prevV;
			var m = this.V;
			_this.self._00 = m.self._00;
			_this.self._01 = m.self._01;
			_this.self._02 = m.self._02;
			_this.self._03 = m.self._03;
			_this.self._10 = m.self._10;
			_this.self._11 = m.self._11;
			_this.self._12 = m.self._12;
			_this.self._13 = m.self._13;
			_this.self._20 = m.self._20;
			_this.self._21 = m.self._21;
			_this.self._22 = m.self._22;
			_this.self._23 = m.self._23;
			_this.self._30 = m.self._30;
			_this.self._31 = m.self._31;
			_this.self._32 = m.self._32;
			_this.self._33 = m.self._33;
		}
	}
	,__class__: iron_object_CameraObject
});
var iron_object_FrustumPlane = function() {
	this.constant = 0.0;
	this.normal = new iron_math_Vec4(1.0,0.0,0.0);
};
$hxClasses["iron.object.FrustumPlane"] = iron_object_FrustumPlane;
iron_object_FrustumPlane.__name__ = true;
iron_object_FrustumPlane.prototype = {
	normalize: function() {
		var _this = this.normal;
		var inverseNormalLength = 1.0 / Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
		var _this = this.normal;
		_this.x *= inverseNormalLength;
		_this.y *= inverseNormalLength;
		_this.z *= inverseNormalLength;
		this.constant *= inverseNormalLength;
	}
	,distanceToSphere: function(sphereCenter,sphereRadius) {
		var _this = this.normal;
		return _this.x * sphereCenter.x + _this.y * sphereCenter.y + _this.z * sphereCenter.z + this.constant - sphereRadius;
	}
	,__class__: iron_object_FrustumPlane
};
var iron_object_Constraint = function(constr) {
	this.target = null;
	this.raw = constr;
};
$hxClasses["iron.object.Constraint"] = iron_object_Constraint;
iron_object_Constraint.__name__ = true;
iron_object_Constraint.prototype = {
	apply: function(transform) {
		if(this.target == null && this.raw.target != null) {
			this.target = iron_Scene.active.getChild(this.raw.target).transform;
		}
		if(this.raw.type == "COPY_LOCATION") {
			if(this.raw.use_x) {
				transform.world.self._30 = this.target.loc.x;
				if(this.raw.use_offset) {
					transform.world.self._30 += transform.loc.x;
				}
			}
			if(this.raw.use_y) {
				transform.world.self._31 = this.target.loc.y;
				if(this.raw.use_offset) {
					transform.world.self._31 += transform.loc.y;
				}
			}
			if(this.raw.use_z) {
				transform.world.self._32 = this.target.loc.z;
				if(this.raw.use_offset) {
					transform.world.self._32 += transform.loc.z;
				}
			}
		}
	}
	,__class__: iron_object_Constraint
};
var iron_object_LightObject = function(data) {
	this.frustumPlanes = null;
	this.VP = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	this.P = null;
	this.V = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	this.bias = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	this.camSlicedP = null;
	this.cascadeData = null;
	iron_object_Object.call(this);
	this.data = data;
	var type = data.raw.type;
	var fov = data.raw.fov;
	if(type == "sun") {
		if(iron_object_LightObject.corners == null) {
			iron_object_LightObject.corners = [];
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
			iron_object_LightObject.corners.push(new iron_math_Vec4());
		}
		this.P = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	} else if(type == "point" || type == "area") {
		var zn = data.raw.near_plane;
		var zf = data.raw.far_plane;
		var uh = 1.0 / Math.tan(fov / 2);
		var uw = uh / 1;
		this.P = new iron_math_Mat4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
	} else if(type == "spot") {
		var zn = data.raw.near_plane;
		var zf = data.raw.far_plane;
		var uh = 1.0 / Math.tan(fov / 2);
		var uw = uh / 1;
		this.P = new iron_math_Mat4(uw,0,0,0,0,uh,0,0,0,0,(zf + zn) / (zn - zf),2 * zf * zn / (zn - zf),0,0,-1,0);
	}
	iron_Scene.active.lights.push(this);
};
$hxClasses["iron.object.LightObject"] = iron_object_LightObject;
iron_object_LightObject.__name__ = true;
iron_object_LightObject.__super__ = iron_object_Object;
iron_object_LightObject.prototype = $extend(iron_object_Object.prototype,{
	remove: function() {
		if(iron_Scene.active != null) {
			HxOverrides.remove(iron_Scene.active.lights,this);
		}
		var rp = iron_RenderPath.active;
		if(rp.light == this) {
			rp.light = null;
		}
		if(rp.point == this) {
			rp.point = null;
		} else if(rp.sun == this) {
			rp.sun = null;
		}
		iron_object_Object.prototype.remove.call(this);
	}
	,buildMatrix: function(camera) {
		this.transform.buildMatrix();
		if(this.data.raw.type == "sun") {
			var _this = this.V;
			var m = this.transform.world;
			var a00 = m.self._00;
			var a01 = m.self._01;
			var a02 = m.self._02;
			var a03 = m.self._03;
			var a10 = m.self._10;
			var a11 = m.self._11;
			var a12 = m.self._12;
			var a13 = m.self._13;
			var a20 = m.self._20;
			var a21 = m.self._21;
			var a22 = m.self._22;
			var a23 = m.self._23;
			var a30 = m.self._30;
			var a31 = m.self._31;
			var a32 = m.self._32;
			var a33 = m.self._33;
			var b00 = a00 * a11 - a01 * a10;
			var b01 = a00 * a12 - a02 * a10;
			var b02 = a00 * a13 - a03 * a10;
			var b03 = a01 * a12 - a02 * a11;
			var b04 = a01 * a13 - a03 * a11;
			var b05 = a02 * a13 - a03 * a12;
			var b06 = a20 * a31 - a21 * a30;
			var b07 = a20 * a32 - a22 * a30;
			var b08 = a20 * a33 - a23 * a30;
			var b09 = a21 * a32 - a22 * a31;
			var b10 = a21 * a33 - a23 * a31;
			var b11 = a22 * a33 - a23 * a32;
			var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
			if(det == 0.0) {
				_this.self._00 = 1.0;
				_this.self._01 = 0.0;
				_this.self._02 = 0.0;
				_this.self._03 = 0.0;
				_this.self._10 = 0.0;
				_this.self._11 = 1.0;
				_this.self._12 = 0.0;
				_this.self._13 = 0.0;
				_this.self._20 = 0.0;
				_this.self._21 = 0.0;
				_this.self._22 = 1.0;
				_this.self._23 = 0.0;
				_this.self._30 = 0.0;
				_this.self._31 = 0.0;
				_this.self._32 = 0.0;
				_this.self._33 = 1.0;
			} else {
				det = 1.0 / det;
				_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
				_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
				_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
				_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
				_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
				_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
				_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
				_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
				_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
				_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
				_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
				_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
				_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
				_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
				_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
				_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
			}
			this.updateViewFrustum(camera);
		} else {
			var _this = this.V;
			var m = this.transform.world;
			var a00 = m.self._00;
			var a01 = m.self._01;
			var a02 = m.self._02;
			var a03 = m.self._03;
			var a10 = m.self._10;
			var a11 = m.self._11;
			var a12 = m.self._12;
			var a13 = m.self._13;
			var a20 = m.self._20;
			var a21 = m.self._21;
			var a22 = m.self._22;
			var a23 = m.self._23;
			var a30 = m.self._30;
			var a31 = m.self._31;
			var a32 = m.self._32;
			var a33 = m.self._33;
			var b00 = a00 * a11 - a01 * a10;
			var b01 = a00 * a12 - a02 * a10;
			var b02 = a00 * a13 - a03 * a10;
			var b03 = a01 * a12 - a02 * a11;
			var b04 = a01 * a13 - a03 * a11;
			var b05 = a02 * a13 - a03 * a12;
			var b06 = a20 * a31 - a21 * a30;
			var b07 = a20 * a32 - a22 * a30;
			var b08 = a20 * a33 - a23 * a30;
			var b09 = a21 * a32 - a22 * a31;
			var b10 = a21 * a33 - a23 * a31;
			var b11 = a22 * a33 - a23 * a32;
			var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
			if(det == 0.0) {
				_this.self._00 = 1.0;
				_this.self._01 = 0.0;
				_this.self._02 = 0.0;
				_this.self._03 = 0.0;
				_this.self._10 = 0.0;
				_this.self._11 = 1.0;
				_this.self._12 = 0.0;
				_this.self._13 = 0.0;
				_this.self._20 = 0.0;
				_this.self._21 = 0.0;
				_this.self._22 = 1.0;
				_this.self._23 = 0.0;
				_this.self._30 = 0.0;
				_this.self._31 = 0.0;
				_this.self._32 = 0.0;
				_this.self._33 = 1.0;
			} else {
				det = 1.0 / det;
				_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
				_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
				_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
				_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
				_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
				_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
				_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
				_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
				_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
				_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
				_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
				_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
				_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
				_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
				_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
				_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
			}
			this.updateViewFrustum(camera);
		}
	}
	,setCascade: function(camera,cascade) {
		var _this = iron_object_LightObject.m;
		var m = camera.V;
		_this.self._00 = m.self._00;
		_this.self._01 = m.self._01;
		_this.self._02 = m.self._02;
		_this.self._03 = m.self._03;
		_this.self._10 = m.self._10;
		_this.self._11 = m.self._11;
		_this.self._12 = m.self._12;
		_this.self._13 = m.self._13;
		_this.self._20 = m.self._20;
		_this.self._21 = m.self._21;
		_this.self._22 = m.self._22;
		_this.self._23 = m.self._23;
		_this.self._30 = m.self._30;
		_this.self._31 = m.self._31;
		_this.self._32 = m.self._32;
		_this.self._33 = m.self._33;
		if(this.camSlicedP == null) {
			this.camSlicedP = [];
			this.cascadeSplit = [];
			var ortho = camera.data.raw.ortho;
			if(ortho == null) {
				var aspect = camera.data.raw.aspect != null ? camera.data.raw.aspect : kha_System.windowWidth() / kha_System.windowHeight();
				var fov = camera.data.raw.fov;
				var near = camera.data.raw.near_plane;
				var far = camera.data.raw.far_plane;
				var factor = iron_object_LightObject.cascadeCount > 2 ? iron_object_LightObject.cascadeSplitFactor : iron_object_LightObject.cascadeSplitFactor * 0.25;
				var _g = 0;
				var _g1 = iron_object_LightObject.cascadeCount;
				while(_g < _g1) {
					var i = _g++;
					var f = i + 1.0;
					var cfar = (near + f / iron_object_LightObject.cascadeCount * (far - near)) * (1 - factor) + near * Math.pow(far / near,f / iron_object_LightObject.cascadeCount) * factor;
					this.cascadeSplit.push(cfar);
					var uh = 1.0 / Math.tan(fov / 2);
					var uw = uh / aspect;
					this.camSlicedP.push(new iron_math_Mat4(uw,0,0,0,0,uh,0,0,0,0,(cfar + near) / (near - cfar),2 * cfar * near / (near - cfar),0,0,-1,0));
				}
			} else {
				var _g = 0;
				var _g1 = iron_object_LightObject.cascadeCount;
				while(_g < _g1) {
					var i = _g++;
					this.cascadeSplit.push(this.data.raw.far_plane);
					var left = ortho.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var right = ortho.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var bottom = ortho.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var top = ortho.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var near = this.data.raw.near_plane;
					var far = this.data.raw.far_plane;
					var rl = right - left;
					var tb = top - bottom;
					var fn = far - near;
					var tx = -(right + left) / rl;
					var ty = -(top + bottom) / tb;
					var tz = -(far + near) / fn;
					this.camSlicedP.push(new iron_math_Mat4(2 / rl,0,0,tx,0,2 / tb,0,ty,0,0,-2 / fn,tz,0,0,0,1));
				}
			}
		}
		var _this = iron_object_LightObject.m;
		var m = this.camSlicedP[cascade];
		var a00 = _this.self._00;
		var a01 = _this.self._01;
		var a02 = _this.self._02;
		var a03 = _this.self._03;
		var a10 = _this.self._10;
		var a11 = _this.self._11;
		var a12 = _this.self._12;
		var a13 = _this.self._13;
		var a20 = _this.self._20;
		var a21 = _this.self._21;
		var a22 = _this.self._22;
		var a23 = _this.self._23;
		var a30 = _this.self._30;
		var a31 = _this.self._31;
		var a32 = _this.self._32;
		var a33 = _this.self._33;
		var b0 = m.self._00;
		var b1 = m.self._10;
		var b2 = m.self._20;
		var b3 = m.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._01;
		b1 = m.self._11;
		b2 = m.self._21;
		b3 = m.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._02;
		b1 = m.self._12;
		b2 = m.self._22;
		b3 = m.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._03;
		b1 = m.self._13;
		b2 = m.self._23;
		b3 = m.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		var _this = iron_object_LightObject.m;
		var m = iron_object_LightObject.m;
		var a00 = m.self._00;
		var a01 = m.self._01;
		var a02 = m.self._02;
		var a03 = m.self._03;
		var a10 = m.self._10;
		var a11 = m.self._11;
		var a12 = m.self._12;
		var a13 = m.self._13;
		var a20 = m.self._20;
		var a21 = m.self._21;
		var a22 = m.self._22;
		var a23 = m.self._23;
		var a30 = m.self._30;
		var a31 = m.self._31;
		var a32 = m.self._32;
		var a33 = m.self._33;
		var b00 = a00 * a11 - a01 * a10;
		var b01 = a00 * a12 - a02 * a10;
		var b02 = a00 * a13 - a03 * a10;
		var b03 = a01 * a12 - a02 * a11;
		var b04 = a01 * a13 - a03 * a11;
		var b05 = a02 * a13 - a03 * a12;
		var b06 = a20 * a31 - a21 * a30;
		var b07 = a20 * a32 - a22 * a30;
		var b08 = a20 * a33 - a23 * a30;
		var b09 = a21 * a32 - a22 * a31;
		var b10 = a21 * a33 - a23 * a31;
		var b11 = a22 * a33 - a23 * a32;
		var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		if(det == 0.0) {
			_this.self._00 = 1.0;
			_this.self._01 = 0.0;
			_this.self._02 = 0.0;
			_this.self._03 = 0.0;
			_this.self._10 = 0.0;
			_this.self._11 = 1.0;
			_this.self._12 = 0.0;
			_this.self._13 = 0.0;
			_this.self._20 = 0.0;
			_this.self._21 = 0.0;
			_this.self._22 = 1.0;
			_this.self._23 = 0.0;
			_this.self._30 = 0.0;
			_this.self._31 = 0.0;
			_this.self._32 = 0.0;
			_this.self._33 = 1.0;
		} else {
			det = 1.0 / det;
			_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
			_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
			_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
			_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
			_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
			_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
			_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
			_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
			_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
			_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
			_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
			_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
			_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
			_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
			_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
			_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		}
		var _this = this.V;
		var m = this.transform.world;
		var a00 = m.self._00;
		var a01 = m.self._01;
		var a02 = m.self._02;
		var a03 = m.self._03;
		var a10 = m.self._10;
		var a11 = m.self._11;
		var a12 = m.self._12;
		var a13 = m.self._13;
		var a20 = m.self._20;
		var a21 = m.self._21;
		var a22 = m.self._22;
		var a23 = m.self._23;
		var a30 = m.self._30;
		var a31 = m.self._31;
		var a32 = m.self._32;
		var a33 = m.self._33;
		var b00 = a00 * a11 - a01 * a10;
		var b01 = a00 * a12 - a02 * a10;
		var b02 = a00 * a13 - a03 * a10;
		var b03 = a01 * a12 - a02 * a11;
		var b04 = a01 * a13 - a03 * a11;
		var b05 = a02 * a13 - a03 * a12;
		var b06 = a20 * a31 - a21 * a30;
		var b07 = a20 * a32 - a22 * a30;
		var b08 = a20 * a33 - a23 * a30;
		var b09 = a21 * a32 - a22 * a31;
		var b10 = a21 * a33 - a23 * a31;
		var b11 = a22 * a33 - a23 * a32;
		var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		if(det == 0.0) {
			_this.self._00 = 1.0;
			_this.self._01 = 0.0;
			_this.self._02 = 0.0;
			_this.self._03 = 0.0;
			_this.self._10 = 0.0;
			_this.self._11 = 1.0;
			_this.self._12 = 0.0;
			_this.self._13 = 0.0;
			_this.self._20 = 0.0;
			_this.self._21 = 0.0;
			_this.self._22 = 1.0;
			_this.self._23 = 0.0;
			_this.self._30 = 0.0;
			_this.self._31 = 0.0;
			_this.self._32 = 0.0;
			_this.self._33 = 1.0;
		} else {
			det = 1.0 / det;
			_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
			_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
			_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
			_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
			_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
			_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
			_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
			_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
			_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
			_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
			_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
			_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
			_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
			_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
			_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
			_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		}
		var _this = this.V;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._00;
		_this1.y = _this.self._01;
		_this1.z = _this.self._02;
		_this1.w = 1.0;
		var _this2 = _this1;
		var scale = 1.0 / Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		_this.self._00 *= scale;
		_this.self._01 *= scale;
		_this.self._02 *= scale;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._10;
		_this1.y = _this.self._11;
		_this1.z = _this.self._12;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale = 1.0 / Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		_this.self._10 *= scale;
		_this.self._11 *= scale;
		_this.self._12 *= scale;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._20;
		_this1.y = _this.self._21;
		_this1.z = _this.self._22;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale = 1.0 / Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		_this.self._20 *= scale;
		_this.self._21 *= scale;
		_this.self._22 *= scale;
		_this.self._03 = 0.0;
		_this.self._13 = 0.0;
		_this.self._23 = 0.0;
		_this.self._30 = 0.0;
		_this.self._31 = 0.0;
		_this.self._32 = 0.0;
		_this.self._33 = 1.0;
		var _this = iron_object_LightObject.m;
		var m = this.V;
		var a00 = _this.self._00;
		var a01 = _this.self._01;
		var a02 = _this.self._02;
		var a03 = _this.self._03;
		var a10 = _this.self._10;
		var a11 = _this.self._11;
		var a12 = _this.self._12;
		var a13 = _this.self._13;
		var a20 = _this.self._20;
		var a21 = _this.self._21;
		var a22 = _this.self._22;
		var a23 = _this.self._23;
		var a30 = _this.self._30;
		var a31 = _this.self._31;
		var a32 = _this.self._32;
		var a33 = _this.self._33;
		var b0 = m.self._00;
		var b1 = m.self._10;
		var b2 = m.self._20;
		var b3 = m.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._01;
		b1 = m.self._11;
		b2 = m.self._21;
		b3 = m.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._02;
		b1 = m.self._12;
		b2 = m.self._22;
		b3 = m.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._03;
		b1 = m.self._13;
		b2 = m.self._23;
		b3 = m.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		var _this = iron_object_LightObject.corners[0];
		_this.x = -1.0;
		_this.y = -1.0;
		_this.z = 1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[1];
		_this.x = -1.0;
		_this.y = -1.0;
		_this.z = -1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[2];
		_this.x = -1.0;
		_this.y = 1.0;
		_this.z = 1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[3];
		_this.x = -1.0;
		_this.y = 1.0;
		_this.z = -1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[4];
		_this.x = 1.0;
		_this.y = -1.0;
		_this.z = 1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[5];
		_this.x = 1.0;
		_this.y = -1.0;
		_this.z = -1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[6];
		_this.x = 1.0;
		_this.y = 1.0;
		_this.z = 1.0;
		_this.w = 1.0;
		var _this = iron_object_LightObject.corners[7];
		_this.x = 1.0;
		_this.y = 1.0;
		_this.z = -1.0;
		_this.w = 1.0;
		var _g = 0;
		var _g1 = iron_object_LightObject.corners;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			var m = iron_object_LightObject.m;
			var x = v.x;
			var y = v.y;
			var z = v.z;
			var w = v.w;
			v.x = m.self._00 * x + m.self._10 * y + m.self._20 * z + m.self._30 * w;
			v.y = m.self._01 * x + m.self._11 * y + m.self._21 * z + m.self._31 * w;
			v.z = m.self._02 * x + m.self._12 * y + m.self._22 * z + m.self._32 * w;
			v.w = m.self._03 * x + m.self._13 * y + m.self._23 * z + m.self._33 * w;
			v.x /= v.w;
			v.y /= v.w;
			v.z /= v.w;
			v.w = 1.0;
		}
		var minx = iron_object_LightObject.corners[0].x;
		var miny = iron_object_LightObject.corners[0].y;
		var minz = iron_object_LightObject.corners[0].z;
		var maxx = iron_object_LightObject.corners[0].x;
		var maxy = iron_object_LightObject.corners[0].y;
		var maxz = iron_object_LightObject.corners[0].z;
		var _g = 0;
		var _g1 = iron_object_LightObject.corners;
		while(_g < _g1.length) {
			var v = _g1[_g];
			++_g;
			if(v.x < minx) {
				minx = v.x;
			}
			if(v.x > maxx) {
				maxx = v.x;
			}
			if(v.y < miny) {
				miny = v.y;
			}
			if(v.y > maxy) {
				maxy = v.y;
			}
			if(v.z < minz) {
				minz = v.z;
			}
			if(v.z > maxz) {
				maxz = v.z;
			}
		}
		var v1 = iron_object_LightObject.corners[0];
		var v2 = iron_object_LightObject.corners[7];
		var vx = v1.x - v2.x;
		var vy = v1.y - v2.y;
		var vz = v1.z - v2.z;
		var diag0 = Math.sqrt(vx * vx + vy * vy + vz * vz);
		var offx = (diag0 - (maxx - minx)) * 0.5;
		var offy = (diag0 - (maxy - miny)) * 0.5;
		minx -= offx;
		maxx += offx;
		miny -= offy;
		maxy += offy;
		var smsize = this.data.raw.shadowmap_size;
		smsize = smsize / 4 | 0;
		var worldPerTexelX = (maxx - minx) / smsize;
		var worldPerTexelY = (maxy - miny) / smsize;
		var worldPerTexelZ = (maxz - minz) / smsize;
		minx = Math.floor(minx / worldPerTexelX) * worldPerTexelX;
		miny = Math.floor(miny / worldPerTexelY) * worldPerTexelY;
		minz = Math.floor(minz / worldPerTexelZ) * worldPerTexelZ;
		maxx = Math.floor(maxx / worldPerTexelX) * worldPerTexelX;
		maxy = Math.floor(maxy / worldPerTexelY) * worldPerTexelY;
		maxz = Math.floor(maxz / worldPerTexelZ) * worldPerTexelZ;
		var hx = (maxx - minx) / 2;
		var hy = (maxy - miny) / 2;
		var hz = (maxz - minz) / 2;
		this.V.self._30 = -(minx + hx);
		this.V.self._31 = -(miny + hy);
		this.V.self._32 = -(minz + hz);
		var left = -hx;
		var bottom = -hy;
		var near = -hz * 4 * iron_object_LightObject.cascadeBounds;
		var rl = hx - left;
		var tb = hy - bottom;
		var fn = hz - near;
		var tx = -(hx + left) / rl;
		var ty = -(hy + bottom) / tb;
		var tz = -(hz + near) / fn;
		iron_object_LightObject.m = new iron_math_Mat4(2 / rl,0,0,tx,0,2 / tb,0,ty,0,0,-2 / fn,tz,0,0,0,1);
		var _this = this.P;
		var m = iron_object_LightObject.m;
		_this.self._00 = m.self._00;
		_this.self._01 = m.self._01;
		_this.self._02 = m.self._02;
		_this.self._03 = m.self._03;
		_this.self._10 = m.self._10;
		_this.self._11 = m.self._11;
		_this.self._12 = m.self._12;
		_this.self._13 = m.self._13;
		_this.self._20 = m.self._20;
		_this.self._21 = m.self._21;
		_this.self._22 = m.self._22;
		_this.self._23 = m.self._23;
		_this.self._30 = m.self._30;
		_this.self._31 = m.self._31;
		_this.self._32 = m.self._32;
		_this.self._33 = m.self._33;
		this.updateViewFrustum(camera);
		if(this.cascadeVP == null) {
			this.cascadeVP = [];
			var _g = 0;
			var _g1 = iron_object_LightObject.cascadeCount;
			while(_g < _g1) {
				var i = _g++;
				this.cascadeVP.push(new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0));
			}
		}
		var _this = this.cascadeVP[cascade];
		var m = this.VP;
		_this.self._00 = m.self._00;
		_this.self._01 = m.self._01;
		_this.self._02 = m.self._02;
		_this.self._03 = m.self._03;
		_this.self._10 = m.self._10;
		_this.self._11 = m.self._11;
		_this.self._12 = m.self._12;
		_this.self._13 = m.self._13;
		_this.self._20 = m.self._20;
		_this.self._21 = m.self._21;
		_this.self._22 = m.self._22;
		_this.self._23 = m.self._23;
		_this.self._30 = m.self._30;
		_this.self._31 = m.self._31;
		_this.self._32 = m.self._32;
		_this.self._33 = m.self._33;
	}
	,updateViewFrustum: function(camera) {
		var _this = this.VP;
		var b = this.P;
		var a = this.V;
		var a00 = a.self._00;
		var a01 = a.self._01;
		var a02 = a.self._02;
		var a03 = a.self._03;
		var a10 = a.self._10;
		var a11 = a.self._11;
		var a12 = a.self._12;
		var a13 = a.self._13;
		var a20 = a.self._20;
		var a21 = a.self._21;
		var a22 = a.self._22;
		var a23 = a.self._23;
		var a30 = a.self._30;
		var a31 = a.self._31;
		var a32 = a.self._32;
		var a33 = a.self._33;
		var b0 = b.self._00;
		var b1 = b.self._10;
		var b2 = b.self._20;
		var b3 = b.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._01;
		b1 = b.self._11;
		b2 = b.self._21;
		b3 = b.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._02;
		b1 = b.self._12;
		b2 = b.self._22;
		b3 = b.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = b.self._03;
		b1 = b.self._13;
		b2 = b.self._23;
		b3 = b.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		if(camera.data.raw.frustum_culling) {
			if(this.frustumPlanes == null) {
				this.frustumPlanes = [];
				this.frustumPlanes.push(new iron_object_FrustumPlane());
				this.frustumPlanes.push(new iron_object_FrustumPlane());
				this.frustumPlanes.push(new iron_object_FrustumPlane());
				this.frustumPlanes.push(new iron_object_FrustumPlane());
				this.frustumPlanes.push(new iron_object_FrustumPlane());
				this.frustumPlanes.push(new iron_object_FrustumPlane());
			}
			iron_object_CameraObject.buildViewFrustum(this.VP,this.frustumPlanes);
		}
	}
	,setCubeFace: function(face,camera) {
		var _this = iron_object_LightObject.eye;
		_this.x = this.transform.world.self._30;
		_this.y = this.transform.world.self._31;
		_this.z = this.transform.world.self._32;
		_this.w = 1.0;
		var flip = false;
		iron_object_CameraObject.setCubeFace(this.V,iron_object_LightObject.eye,face,flip);
		this.updateViewFrustum(camera);
	}
	,getCascadeData: function() {
		if(this.cascadeData == null) {
			this.cascadeData = kha_arrays_Float32Array._new(iron_object_LightObject.cascadeCount * 16 + 4);
		}
		if(this.cascadeVP == null) {
			return this.cascadeData;
		}
		var _g = 0;
		var _g1 = iron_object_LightObject.cascadeCount;
		while(_g < _g1) {
			var i = _g++;
			var _this = iron_object_LightObject.m;
			var m = this.cascadeVP[i];
			_this.self._00 = m.self._00;
			_this.self._01 = m.self._01;
			_this.self._02 = m.self._02;
			_this.self._03 = m.self._03;
			_this.self._10 = m.self._10;
			_this.self._11 = m.self._11;
			_this.self._12 = m.self._12;
			_this.self._13 = m.self._13;
			_this.self._20 = m.self._20;
			_this.self._21 = m.self._21;
			_this.self._22 = m.self._22;
			_this.self._23 = m.self._23;
			_this.self._30 = m.self._30;
			_this.self._31 = m.self._31;
			_this.self._32 = m.self._32;
			_this.self._33 = m.self._33;
			var _this1 = this.bias;
			var m1 = iron_object_Uniforms.biasMat;
			_this1.self._00 = m1.self._00;
			_this1.self._01 = m1.self._01;
			_this1.self._02 = m1.self._02;
			_this1.self._03 = m1.self._03;
			_this1.self._10 = m1.self._10;
			_this1.self._11 = m1.self._11;
			_this1.self._12 = m1.self._12;
			_this1.self._13 = m1.self._13;
			_this1.self._20 = m1.self._20;
			_this1.self._21 = m1.self._21;
			_this1.self._22 = m1.self._22;
			_this1.self._23 = m1.self._23;
			_this1.self._30 = m1.self._30;
			_this1.self._31 = m1.self._31;
			_this1.self._32 = m1.self._32;
			_this1.self._33 = m1.self._33;
			this.bias.self._00 /= iron_object_LightObject.cascadeCount;
			this.bias.self._30 /= iron_object_LightObject.cascadeCount;
			this.bias.self._30 += i * (1 / iron_object_LightObject.cascadeCount);
			var _this2 = iron_object_LightObject.m;
			var m2 = this.bias;
			var a00 = _this2.self._00;
			var a01 = _this2.self._01;
			var a02 = _this2.self._02;
			var a03 = _this2.self._03;
			var a10 = _this2.self._10;
			var a11 = _this2.self._11;
			var a12 = _this2.self._12;
			var a13 = _this2.self._13;
			var a20 = _this2.self._20;
			var a21 = _this2.self._21;
			var a22 = _this2.self._22;
			var a23 = _this2.self._23;
			var a30 = _this2.self._30;
			var a31 = _this2.self._31;
			var a32 = _this2.self._32;
			var a33 = _this2.self._33;
			var b0 = m2.self._00;
			var b1 = m2.self._10;
			var b2 = m2.self._20;
			var b3 = m2.self._30;
			_this2.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this2.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this2.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this2.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m2.self._01;
			b1 = m2.self._11;
			b2 = m2.self._21;
			b3 = m2.self._31;
			_this2.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this2.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this2.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this2.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m2.self._02;
			b1 = m2.self._12;
			b2 = m2.self._22;
			b3 = m2.self._32;
			_this2.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this2.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this2.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this2.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m2.self._03;
			b1 = m2.self._13;
			b2 = m2.self._23;
			b3 = m2.self._33;
			_this2.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this2.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this2.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this2.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			var v = iron_object_LightObject.m.self._00;
			this.cascadeData.setFloat32(i * 16 * 4,v,true);
			var v1 = iron_object_LightObject.m.self._01;
			this.cascadeData.setFloat32((i * 16 + 1) * 4,v1,true);
			var v2 = iron_object_LightObject.m.self._02;
			this.cascadeData.setFloat32((i * 16 + 2) * 4,v2,true);
			var v3 = iron_object_LightObject.m.self._03;
			this.cascadeData.setFloat32((i * 16 + 3) * 4,v3,true);
			var v4 = iron_object_LightObject.m.self._10;
			this.cascadeData.setFloat32((i * 16 + 4) * 4,v4,true);
			var v5 = iron_object_LightObject.m.self._11;
			this.cascadeData.setFloat32((i * 16 + 5) * 4,v5,true);
			var v6 = iron_object_LightObject.m.self._12;
			this.cascadeData.setFloat32((i * 16 + 6) * 4,v6,true);
			var v7 = iron_object_LightObject.m.self._13;
			this.cascadeData.setFloat32((i * 16 + 7) * 4,v7,true);
			var v8 = iron_object_LightObject.m.self._20;
			this.cascadeData.setFloat32((i * 16 + 8) * 4,v8,true);
			var v9 = iron_object_LightObject.m.self._21;
			this.cascadeData.setFloat32((i * 16 + 9) * 4,v9,true);
			var v10 = iron_object_LightObject.m.self._22;
			this.cascadeData.setFloat32((i * 16 + 10) * 4,v10,true);
			var v11 = iron_object_LightObject.m.self._23;
			this.cascadeData.setFloat32((i * 16 + 11) * 4,v11,true);
			var v12 = iron_object_LightObject.m.self._30;
			this.cascadeData.setFloat32((i * 16 + 12) * 4,v12,true);
			var v13 = iron_object_LightObject.m.self._31;
			this.cascadeData.setFloat32((i * 16 + 13) * 4,v13,true);
			var v14 = iron_object_LightObject.m.self._32;
			this.cascadeData.setFloat32((i * 16 + 14) * 4,v14,true);
			var v15 = iron_object_LightObject.m.self._33;
			this.cascadeData.setFloat32((i * 16 + 15) * 4,v15,true);
		}
		var v = this.cascadeSplit[0];
		this.cascadeData.setFloat32(iron_object_LightObject.cascadeCount * 16 * 4,v,true);
		var v = this.cascadeSplit[1];
		this.cascadeData.setFloat32((iron_object_LightObject.cascadeCount * 16 + 1) * 4,v,true);
		var v = this.cascadeSplit[2];
		this.cascadeData.setFloat32((iron_object_LightObject.cascadeCount * 16 + 2) * 4,v,true);
		var v = this.cascadeSplit[3];
		this.cascadeData.setFloat32((iron_object_LightObject.cascadeCount * 16 + 3) * 4,v,true);
		return this.cascadeData;
	}
	,__class__: iron_object_LightObject
});
var iron_object_MeshObject = function(data,materials) {
	this.morphTarget = null;
	this.force_context = null;
	this.skip_context = null;
	this.tilesheet = null;
	this.frustumCulling = true;
	this.screenSize = 0.0;
	this.particleIndex = -1;
	this.particleOwner = null;
	this.particleChildren = null;
	this.particleSystems = null;
	this.materialIndex = 0;
	this.data = null;
	iron_object_Object.call(this);
	this.materials = materials;
	this.setData(data);
	iron_Scene.active.meshes.push(this);
};
$hxClasses["iron.object.MeshObject"] = iron_object_MeshObject;
iron_object_MeshObject.__name__ = true;
iron_object_MeshObject.__super__ = iron_object_Object;
iron_object_MeshObject.prototype = $extend(iron_object_Object.prototype,{
	setData: function(data) {
		this.data = data;
		data.refcount++;
		data.geom.build();
		this.transform.scaleWorld = data.scalePos;
	}
	,remove: function() {
		if(this.particleChildren != null) {
			var _g = 0;
			var _g1 = this.particleChildren;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.remove();
			}
			this.particleChildren = null;
		}
		if(this.particleSystems != null) {
			var _g = 0;
			var _g1 = this.particleSystems;
			while(_g < _g1.length) {
				var psys = _g1[_g];
				++_g;
				psys.remove();
			}
			this.particleSystems = null;
		}
		if(this.tilesheet != null) {
			this.tilesheet.remove();
		}
		if(iron_Scene.active != null) {
			HxOverrides.remove(iron_Scene.active.meshes,this);
		}
		this.data.refcount--;
		iron_object_Object.prototype.remove.call(this);
	}
	,setupAnimation: function(oactions) {
		var hasAction = this.parent != null && this.parent.raw != null && this.parent.raw.bone_actions != null;
		if(hasAction) {
			var armatureName = this.parent.name;
			this.animation = this.getParentArmature(armatureName);
			if(this.animation == null) {
				this.animation = new iron_object_BoneAnimation(armatureName);
			}
			if(this.data.isSkinned) {
				(js_Boot.__cast(this.animation , iron_object_BoneAnimation)).setSkin(this);
			}
		}
		iron_object_Object.prototype.setupAnimation.call(this,oactions);
	}
	,setupMorphTargets: function() {
		if(this.data.raw.morph_target != null) {
			this.morphTarget = new iron_object_MorphTarget(this.data.raw.morph_target);
		}
	}
	,setupParticleSystem: function(sceneName,pref) {
		if(this.particleSystems == null) {
			this.particleSystems = [];
		}
		var psys = new iron_object_ParticleSystem(sceneName,pref);
		this.particleSystems.push(psys);
	}
	,setupTilesheet: function(sceneName,tilesheet_ref,tilesheet_action_ref) {
		this.tilesheet = new iron_object_Tilesheet(sceneName,tilesheet_ref,tilesheet_action_ref);
	}
	,setCulled: function(isShadow,b) {
		if(isShadow) {
			this.culledShadow = b;
		} else {
			this.culledMesh = b;
		}
		this.culled = this.culledMesh && this.culledShadow;
		return b;
	}
	,cullMaterial: function(context) {
		var mats = this.materials;
		if(!(this.raw != null && this.raw.lod_material != null && this.raw.lod_material == true) && !this.validContext(mats,context)) {
			return true;
		}
		var isShadow = context == "shadowmap";
		if(!this.visibleMesh && !isShadow) {
			return this.setCulled(isShadow,true);
		}
		if(!this.visibleShadow && isShadow) {
			return this.setCulled(isShadow,true);
		}
		if(this.skip_context == context) {
			return this.setCulled(isShadow,true);
		}
		if(this.force_context != null && this.force_context != context) {
			return this.setCulled(isShadow,true);
		}
		if(context == "voxel" && this.raw != null && this.raw.mobile == true) {
			return this.setCulled(isShadow,true);
		}
		return this.setCulled(isShadow,false);
	}
	,cullMesh: function(context,camera,light) {
		if(camera == null) {
			return false;
		}
		if(camera.data.raw.frustum_culling && this.frustumCulling) {
			var radiusScale = this.data.isSkinned ? 2.0 : 1.0;
			if(this.particleSystems != null || this.particleOwner != null) {
				radiusScale *= 1000;
			}
			if(context == "voxel") {
				radiusScale *= 100;
			}
			if(this.data.geom.instanced) {
				radiusScale *= 100;
			}
			var isShadow = context == "shadowmap";
			var frustumPlanes = isShadow ? light.frustumPlanes : camera.frustumPlanes;
			if(isShadow && light.data.raw.type != "sun") {
				light.transform.radius = light.data.raw.far_plane;
				if(!iron_object_CameraObject.sphereInFrustum(camera.frustumPlanes,light.transform)) {
					return this.setCulled(isShadow,true);
				}
			}
			if(!iron_object_CameraObject.sphereInFrustum(frustumPlanes,this.transform,radiusScale)) {
				return this.setCulled(isShadow,true);
			}
		}
		this.culled = false;
		return this.culled;
	}
	,skipContext: function(context,mat) {
		if(mat.raw.skip_context != null && mat.raw.skip_context == context) {
			return true;
		}
		return false;
	}
	,getContexts: function(context,materials,materialContexts,shaderContexts) {
		var _g = 0;
		while(_g < materials.length) {
			var mat = materials[_g];
			++_g;
			var found = false;
			var _g1 = 0;
			var _g2 = mat.raw.contexts.length;
			while(_g1 < _g2) {
				var i = _g1++;
				if(HxOverrides.substr(mat.raw.contexts[i].name,0,context.length) == context) {
					materialContexts.push(mat.contexts[i]);
					shaderContexts.push(mat.shader.getContext(context));
					found = true;
					break;
				}
			}
			if(!found) {
				materialContexts.push(null);
				shaderContexts.push(null);
			}
		}
	}
	,render: function(g,context,bindParams) {
		var _gthis = this;
		if(this.data == null || !this.data.geom.ready) {
			return;
		}
		if(!this.visible) {
			return;
		}
		if(this.cullMesh(context,iron_Scene.active.camera,iron_RenderPath.active.light)) {
			return;
		}
		var meshContext = this.raw != null && context == "mesh";
		if(this.raw != null && this.raw.is_particle && this.particleOwner == null) {
			return;
		}
		if(this.particleSystems != null && meshContext) {
			if(this.particleChildren == null) {
				this.particleChildren = [];
				var _g = 0;
				var _g1 = this.particleSystems;
				while(_g < _g1.length) {
					var psys = _g1[_g];
					++_g;
					iron_Scene.active.spawnObject(psys.data.raw.instance_object,null,function(o) {
						if(o != null) {
							var c = o;
							_gthis.particleChildren.push(c);
							c.particleOwner = _gthis;
							c.particleIndex = _gthis.particleChildren.length - 1;
						}
					});
				}
			}
			var _g = 0;
			var _g1 = this.particleSystems.length;
			while(_g < _g1) {
				var i = _g++;
				this.particleSystems[i].update(this.particleChildren[i],this);
			}
		}
		if(this.particleSystems != null && this.particleSystems.length > 0 && !this.raw.render_emitter) {
			return;
		}
		if(this.tilesheet != null) {
			this.tilesheet.update();
		}
		if(this.cullMaterial(context)) {
			return;
		}
		var mats = this.materials;
		var lod = this;
		if(this.raw != null && this.raw.lods != null && this.raw.lods.length > 0) {
			var camera = iron_Scene.active.camera;
			var tr = this.transform;
			var volume = tr.dim.x * tr.dim.y * tr.dim.z;
			this.screenSize = volume * (1.0 / this.cameraDistance);
			this.screenSize = this.screenSize > 1.0 ? 1.0 : this.screenSize;
			if(this.lods == null) {
				this.lods = [];
				var _g = 0;
				var _g1 = this.raw.lods;
				while(_g < _g1.length) {
					var l = _g1[_g];
					++_g;
					if(l.object_ref == "") {
						this.lods.push(null);
					} else {
						this.lods.push(iron_Scene.active.getChild(l.object_ref));
					}
				}
			}
			if(context == "voxel") {
				lod = this.lods[this.lods.length - 1];
			} else {
				var _g = 0;
				var _g1 = this.raw.lods.length;
				while(_g < _g1) {
					var i = _g++;
					if(this.screenSize > this.raw.lods[i].screen_size) {
						break;
					}
					lod = this.lods[i];
					if(this.raw != null && this.raw.lod_material != null && this.raw.lod_material == true) {
						mats = lod.materials;
					}
				}
			}
			if(lod == null) {
				return;
			}
		}
		if(this.raw != null && this.raw.lod_material != null && this.raw.lod_material == true && !this.validContext(mats,context)) {
			return;
		}
		var materialContexts = [];
		var shaderContexts = [];
		this.getContexts(context,mats,materialContexts,shaderContexts);
		iron_object_Uniforms.posUnpack = this.data.scalePos;
		iron_object_Uniforms.texUnpack = this.data.scaleTex;
		this.transform.update();
		var ldata = lod.data;
		var _g = 0;
		var _g1 = ldata.geom.indexBuffers.length;
		while(_g < _g1) {
			var i = _g++;
			var mi = ldata.geom.materialIndices[i];
			if(shaderContexts.length <= mi || shaderContexts[mi] == null) {
				continue;
			}
			this.materialIndex = mi;
			if(this.materials.length > mi && this.skipContext(context,this.materials[mi])) {
				continue;
			}
			var scontext = shaderContexts[mi];
			if(scontext == null) {
				continue;
			}
			var elems = scontext.raw.vertex_elements;
			if(scontext.pipeState != iron_object_MeshObject.lastPipeline) {
				g.setPipeline(scontext.pipeState);
				iron_object_MeshObject.lastPipeline = scontext.pipeState;
			}
			iron_object_Uniforms.setContextConstants(g,scontext,bindParams);
			iron_object_Uniforms.setObjectConstants(g,scontext,this);
			if(materialContexts.length > mi) {
				iron_object_Uniforms.setMaterialConstants(g,scontext,materialContexts[mi]);
			}
			if(ldata.geom.instancedVB != null) {
				g.setVertexBuffers([ldata.geom.get(elems),ldata.geom.instancedVB]);
			} else {
				g.setVertexBuffer(ldata.geom.get(elems));
			}
			g.setIndexBuffer(ldata.geom.indexBuffers[i]);
			if(ldata.geom.instanced) {
				g.drawIndexedVerticesInstanced(ldata.geom.instanceCount,ldata.geom.start,ldata.geom.count);
			} else {
				g.drawIndexedVertices(ldata.geom.start,ldata.geom.count);
			}
		}
	}
	,validContext: function(mats,context) {
		var _g = 0;
		while(_g < mats.length) {
			var mat = mats[_g];
			++_g;
			if(mat.getContext(context) != null) {
				return true;
			}
		}
		return false;
	}
	,__class__: iron_object_MeshObject
});
var iron_object_MorphTarget = function(data) {
	this.morphMap = null;
	this.morphBlockSize = 0;
	this.morphImageSize = 0;
	this.numMorphTargets = 0;
	var _gthis = this;
	this.morphWeights = data.morph_target_defaults;
	this.scaling = data.morph_scale;
	this.offset = data.morph_offset;
	this.numMorphTargets = data.num_morph_targets;
	this.morphImageSize = data.morph_img_size;
	this.morphBlockSize = data.morph_block_size;
	iron_data_Data.getImage(data.morph_target_data_file + "_morph_pos.png",function(img) {
		if(img != null) {
			_gthis.morphDataPos = img;
		}
	});
	iron_data_Data.getImage(data.morph_target_data_file + "_morph_nor.png",function(img) {
		if(img != null) {
			_gthis.morphDataNor = img;
		}
	});
	this.morphMap = new haxe_ds_StringMap();
	var i = 0;
	var _g = 0;
	var _g1 = data.morph_target_ref;
	while(_g < _g1.length) {
		var name = _g1[_g];
		++_g;
		this.morphMap.h[name] = i;
		++i;
	}
};
$hxClasses["iron.object.MorphTarget"] = iron_object_MorphTarget;
iron_object_MorphTarget.__name__ = true;
iron_object_MorphTarget.prototype = {
	__class__: iron_object_MorphTarget
};
var iron_object_ObjectAnimation = function(object,oactions) {
	this.object = object;
	this.oactions = oactions;
	this.isSkinned = false;
	iron_object_Animation.call(this);
};
$hxClasses["iron.object.ObjectAnimation"] = iron_object_ObjectAnimation;
iron_object_ObjectAnimation.__name__ = true;
iron_object_ObjectAnimation.__super__ = iron_object_Animation;
iron_object_ObjectAnimation.prototype = $extend(iron_object_Animation.prototype,{
	getAction: function(action) {
		var _g = 0;
		var _g1 = this.oactions;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a != null && a.objects[0].name == action) {
				return a.objects[0];
			}
		}
		return null;
	}
	,play: function(action,onComplete,blendTime,speed,loop) {
		if(loop == null) {
			loop = true;
		}
		if(speed == null) {
			speed = 1.0;
		}
		if(blendTime == null) {
			blendTime = 0.0;
		}
		if(action == null) {
			action = "";
		}
		iron_object_Animation.prototype.play.call(this,action,onComplete,blendTime,speed,loop);
		if(this.action == "" && this.oactions[0] != null) {
			this.action = this.oactions[0].objects[0].name;
		}
		this.oaction = this.getAction(this.action);
		if(this.oaction != null) {
			this.isSampled = this.oaction.sampled != null && this.oaction.sampled;
		}
	}
	,update: function(delta) {
		if(!this.object.visible || this.object.culled || this.oaction == null) {
			return;
		}
		iron_object_Animation.prototype.update.call(this,delta);
		if(this.paused) {
			return;
		}
		if(!this.isSkinned) {
			this.updateObjectAnim();
		}
	}
	,updateObjectAnim: function() {
		this.updateTransformAnim(this.oaction.anim,this.object.transform);
		this.object.transform.buildMatrix();
	}
	,isTrackEnd: function(track) {
		if(this.speed > 0) {
			return this.frameIndex >= (track.frames.byteLength >> 2) - 2;
		} else {
			return this.frameIndex <= 0;
		}
	}
	,updateTransformAnim: function(anim,transform) {
		if(anim == null) {
			return;
		}
		var total = anim.end * this.frameTime - anim.begin * this.frameTime;
		if(anim.has_delta) {
			var t = transform;
			if(t.dloc == null) {
				t.dloc = new iron_math_Vec4();
				t.drot = new iron_math_Quat();
				t.dscale = new iron_math_Vec4();
			}
			var _this = t.dloc;
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 1.0;
			var _this = t.dscale;
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 1.0;
			t._deulerX = t._deulerY = t._deulerZ = 0.0;
		}
		var _g = 0;
		var _g1 = anim.tracks;
		while(_g < _g1.length) {
			var track = _g1[_g];
			++_g;
			if(this.frameIndex == -1) {
				this.rewind(track);
			}
			var sign = this.speed > 0 ? 1 : -1;
			var t = this.time + anim.begin * this.frameTime;
			while(true) {
				var frameValues = track.frames;
				if(!(this.speed > 0 ? this.frameIndex < (frameValues.byteLength >> 2) - 2 && t > frameValues.getUint32((this.frameIndex + 1) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime : this.frameIndex > 1 && t > frameValues.getUint32((this.frameIndex - 1) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime)) {
					break;
				}
				this.frameIndex += sign;
			}
			if(this.frameIndex >= track.frames.byteLength >> 2) {
				continue;
			}
			if(this.time > total) {
				if(this.onComplete != null) {
					this.onComplete();
				}
				if(this.loop) {
					this.rewind(track);
				} else {
					this.frameIndex -= sign;
					this.paused = true;
				}
				return;
			}
			var ti = this.frameIndex;
			var t1 = track.frames.getUint32(ti * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime;
			var t2 = track.frames.getUint32((ti + sign) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.frameTime;
			var v1 = track.values.getFloat32(ti * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var v2 = track.values.getFloat32((ti + sign) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
			var s = (t - t1) / (t2 - t1);
			var value = (1.0 - s) * v1 + s * v2;
			switch(track.target) {
			case "dqwrot":
				transform.drot.w = value;
				break;
			case "dqxrot":
				transform.drot.x = value;
				break;
			case "dqyrot":
				transform.drot.y = value;
				break;
			case "dqzrot":
				transform.drot.z = value;
				break;
			case "dxloc":
				transform.dloc.x = value;
				break;
			case "dxrot":
				transform._deulerX = value;
				break;
			case "dxscl":
				transform.dscale.x = value;
				break;
			case "dyloc":
				transform.dloc.y = value;
				break;
			case "dyrot":
				transform._deulerY = value;
				break;
			case "dyscl":
				transform.dscale.y = value;
				break;
			case "dzloc":
				transform.dloc.z = value;
				break;
			case "dzrot":
				transform._deulerZ = value;
				break;
			case "dzscl":
				transform.dscale.z = value;
				break;
			case "qwrot":
				transform.rot.w = value;
				break;
			case "qxrot":
				transform.rot.x = value;
				break;
			case "qyrot":
				transform.rot.y = value;
				break;
			case "qzrot":
				transform.rot.z = value;
				break;
			case "xloc":
				transform.loc.x = value;
				break;
			case "xrot":
				transform.setRotation(value,transform._eulerY,transform._eulerZ);
				break;
			case "xscl":
				transform.scale.x = value;
				break;
			case "yloc":
				transform.loc.y = value;
				break;
			case "yrot":
				transform.setRotation(transform._eulerX,value,transform._eulerZ);
				break;
			case "yscl":
				transform.scale.y = value;
				break;
			case "zloc":
				transform.loc.z = value;
				break;
			case "zrot":
				transform.setRotation(transform._eulerX,transform._eulerY,value);
				break;
			case "zscl":
				transform.scale.z = value;
				break;
			}
		}
	}
	,__class__: iron_object_ObjectAnimation
});
var iron_object_ParticleSystem = function(sceneName,pref) {
	this.ownerScl = new iron_math_Vec4();
	this.ownerRot = new iron_math_Quat();
	this.ownerLoc = new iron_math_Vec4();
	this.m = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
	this.lapTime = 0.0;
	this.lap = 0;
	this.count = 0;
	this.seed = 0;
	this.spawnRate = 0.0;
	this.time = 0.0;
	this.animtime = 0.0;
	this.lifetime = 0.0;
	this.frameRate = 24;
	this.speed = 1.0;
	var _gthis = this;
	this.seed = pref.seed;
	this.particles = [];
	this.ready = false;
	iron_data_Data.getParticle(sceneName,pref.particle,function(b) {
		_gthis.data = b;
		_gthis.r = _gthis.data.raw;
		if(iron_Scene.active.raw.gravity != null) {
			_gthis.gx = iron_Scene.active.raw.gravity.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN) * _gthis.r.weight_gravity;
			_gthis.gy = iron_Scene.active.raw.gravity.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN) * _gthis.r.weight_gravity;
			_gthis.gz = iron_Scene.active.raw.gravity.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) * _gthis.r.weight_gravity;
		} else {
			_gthis.gx = 0;
			_gthis.gy = 0;
			_gthis.gz = -9.81 * _gthis.r.weight_gravity;
		}
		_gthis.alignx = _gthis.r.object_align_factor.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN) / 2;
		_gthis.aligny = _gthis.r.object_align_factor.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN) / 2;
		_gthis.alignz = _gthis.r.object_align_factor.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) / 2;
		_gthis.lifetime = _gthis.r.lifetime / _gthis.frameRate;
		_gthis.animtime = (_gthis.r.frame_end - _gthis.r.frame_start) / _gthis.frameRate;
		_gthis.spawnRate = (_gthis.r.frame_end - _gthis.r.frame_start) / _gthis.r.count / _gthis.frameRate;
		var _g = 0;
		var _g1 = _gthis.r.count;
		while(_g < _g1) {
			var i = _g++;
			_gthis.particles.push(new iron_object_Particle(i));
		}
		_gthis.ready = true;
	});
};
$hxClasses["iron.object.ParticleSystem"] = iron_object_ParticleSystem;
iron_object_ParticleSystem.__name__ = true;
iron_object_ParticleSystem.prototype = {
	update: function(object,owner) {
		if(!this.ready || object == null || this.speed == 0.0) {
			return;
		}
		var _this = owner.transform.world;
		var loc = this.ownerLoc;
		var quat = this.ownerRot;
		var scale = this.ownerScl;
		loc.x = _this.self._30;
		loc.y = _this.self._31;
		loc.z = _this.self._32;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._00;
		_this1.y = _this.self._01;
		_this1.z = _this.self._02;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.x = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._10;
		_this1.y = _this.self._11;
		_this1.z = _this.self._12;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.y = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._20;
		_this1.y = _this.self._21;
		_this1.z = _this.self._22;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.z = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = _this.self;
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c00 = _this1._11 * (m4 * m8 - m5 * m7) - _this1._21 * (m3 * m8 - m5 * m6) + _this1._31 * (m3 * m7 - m4 * m6);
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c01 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c02 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._12;
		var m7 = _this1._22;
		var m8 = _this1._32;
		var c03 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		if(_this1._00 * c00 - _this1._01 * c01 + _this1._02 * c02 - _this1._03 * c03 < 0.0) {
			scale.x = -scale.x;
		}
		var invs = 1.0 / scale.x;
		iron_math_Mat4.helpMat.self._00 = _this.self._00 * invs;
		iron_math_Mat4.helpMat.self._01 = _this.self._01 * invs;
		iron_math_Mat4.helpMat.self._02 = _this.self._02 * invs;
		invs = 1.0 / scale.y;
		iron_math_Mat4.helpMat.self._10 = _this.self._10 * invs;
		iron_math_Mat4.helpMat.self._11 = _this.self._11 * invs;
		iron_math_Mat4.helpMat.self._12 = _this.self._12 * invs;
		invs = 1.0 / scale.z;
		iron_math_Mat4.helpMat.self._20 = _this.self._20 * invs;
		iron_math_Mat4.helpMat.self._21 = _this.self._21 * invs;
		iron_math_Mat4.helpMat.self._22 = _this.self._22 * invs;
		var m = iron_math_Mat4.helpMat;
		var m11 = m.self._00;
		var m12 = m.self._10;
		var m13 = m.self._20;
		var m21 = m.self._01;
		var m22 = m.self._11;
		var m23 = m.self._21;
		var m31 = m.self._02;
		var m32 = m.self._12;
		var m33 = m.self._22;
		var tr = m11 + m22 + m33;
		var s = 0.0;
		if(tr > 0) {
			s = 0.5 / Math.sqrt(tr + 1.0);
			quat.w = 0.25 / s;
			quat.x = (m32 - m23) * s;
			quat.y = (m13 - m31) * s;
			quat.z = (m21 - m12) * s;
		} else if(m11 > m22 && m11 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			quat.w = (m32 - m23) / s;
			quat.x = 0.25 * s;
			quat.y = (m12 + m21) / s;
			quat.z = (m13 + m31) / s;
		} else if(m22 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			quat.w = (m13 - m31) / s;
			quat.x = (m12 + m21) / s;
			quat.y = 0.25 * s;
			quat.z = (m23 + m32) / s;
		} else {
			s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			quat.w = (m21 - m12) / s;
			quat.x = (m13 + m31) / s;
			quat.y = (m23 + m32) / s;
			quat.z = 0.25 * s;
		}
		object.transform.loc = this.ownerLoc;
		object.transform.rot = this.ownerRot;
		object.transform.scale = new iron_math_Vec4(this.r.particle_size,this.r.particle_size,this.r.particle_size,1);
		object.transform.buildMatrix();
		owner.transform.buildMatrix();
		var _this = object.transform.dim;
		var v = owner.transform.dim;
		_this.x = v.x;
		_this.y = v.y;
		_this.z = v.z;
		_this.w = v.w;
		this.dimx = object.transform.dim.x;
		this.dimy = object.transform.dim.y;
		if(object.tilesheet != null) {
			this.tilesx = object.tilesheet.raw.tilesx;
			this.tilesy = object.tilesheet.raw.tilesy;
			this.tilesFramerate = object.tilesheet.raw.framerate;
		}
		this.time += iron_system_Time.realDelta * this.speed;
		this.lap = this.time / this.animtime | 0;
		this.lapTime = this.time - this.lap * this.animtime;
		this.count = this.lapTime / this.spawnRate | 0;
		this.updateGpu(object,owner);
	}
	,getData: function() {
		var hair = this.r.type == 1;
		this.m.self._00 = this.r.loop ? this.animtime : -this.animtime;
		this.m.self._01 = hair ? 1 / this.particles.length : this.spawnRate;
		this.m.self._02 = hair ? 1 : this.lifetime;
		this.m.self._03 = this.particles.length;
		this.m.self._10 = hair ? 0 : this.alignx;
		this.m.self._11 = hair ? 0 : this.aligny;
		this.m.self._12 = hair ? 0 : this.alignz;
		this.m.self._13 = hair ? 0 : this.r.factor_random;
		this.m.self._20 = hair ? 0 : this.gx * this.r.mass;
		this.m.self._21 = hair ? 0 : this.gy * this.r.mass;
		this.m.self._22 = hair ? 0 : this.gz * this.r.mass;
		this.m.self._23 = hair ? 0 : this.r.lifetime_random;
		this.m.self._30 = this.tilesx;
		this.m.self._31 = this.tilesy;
		this.m.self._32 = 1 / this.tilesFramerate;
		this.m.self._33 = hair ? 1 : this.lapTime;
		return this.m;
	}
	,updateGpu: function(object,owner) {
		if(!object.data.geom.instanced) {
			this.setupGeomGpu(object,owner);
		}
	}
	,setupGeomGpu: function(object,owner) {
		var instancedData = kha_arrays_Float32Array._new(this.particles.length * 3);
		var i = 0;
		var scaleFactorVol = owner.data.scalePos / this.r.particle_size;
		var scaleFactorVertFace = 3.05185094759971923e-05 * scaleFactorVol;
		switch(this.r.emit_from) {
		case 0:
			var pa = owner.data.geom.positions;
			var _g = 0;
			var _g1 = this.particles;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				var j = this.fhash(i) * ((pa.values.byteLength >> 1) / pa.size) | 0;
				var v = pa.values.getInt16(j * pa.size * 2,kha_arrays_ByteArray.LITTLE_ENDIAN) * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v,true);
				++i;
				var v1 = pa.values.getInt16((j * pa.size + 1) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN) * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v1,true);
				++i;
				var v2 = pa.values.getInt16((j * pa.size + 2) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN) * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v2,true);
				++i;
			}
			break;
		case 1:
			var positions = owner.data.geom.positions.values;
			var _g = 0;
			var _g1 = this.particles;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				var ia = owner.data.geom.indices[Std.random(owner.data.geom.indices.length)];
				var faceIndex = Std.random((ia.byteLength >> 2) / 3 | 0);
				var i0 = ia.getUint32(faceIndex * 3 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var i1 = ia.getUint32((faceIndex * 3 + 1) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var i2 = ia.getUint32((faceIndex * 3 + 2) * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var x = positions.getInt16(i0 * 4 * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var y = positions.getInt16((i0 * 4 + 1) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var z = positions.getInt16((i0 * 4 + 2) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				if(z == null) {
					z = 0.0;
				}
				if(y == null) {
					y = 0.0;
				}
				if(x == null) {
					x = 0.0;
				}
				var pos_x = x;
				var pos_y = y;
				var pos_z = z;
				var x1 = positions.getInt16(i1 * 4 * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var y1 = positions.getInt16((i1 * 4 + 1) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var z1 = positions.getInt16((i1 * 4 + 2) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				if(z1 == null) {
					z1 = 0.0;
				}
				if(y1 == null) {
					y1 = 0.0;
				}
				if(x1 == null) {
					x1 = 0.0;
				}
				var v_x = x1;
				var v_y = y1;
				var v_z = z1;
				var x2 = positions.getInt16(i2 * 4 * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var y2 = positions.getInt16((i2 * 4 + 1) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var z2 = positions.getInt16((i2 * 4 + 2) * 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				if(z2 == null) {
					z2 = 0.0;
				}
				if(y2 == null) {
					y2 = 0.0;
				}
				if(x2 == null) {
					x2 = 0.0;
				}
				var v_x1 = x2;
				var v_y1 = y2;
				var v_z1 = z2;
				var x3 = Math.random();
				var y3 = Math.random();
				if(x3 + y3 > 1) {
					x3 = 1 - x3;
					y3 = 1 - y3;
				}
				v_x -= pos_x;
				v_y -= pos_y;
				v_z -= pos_z;
				v_x1 -= pos_x;
				v_y1 -= pos_y;
				v_z1 -= pos_z;
				v_x *= x3;
				v_y *= x3;
				v_z *= x3;
				v_x1 *= y3;
				v_y1 *= y3;
				v_z1 *= y3;
				v_x += v_x1;
				v_y += v_y1;
				v_z += v_z1;
				pos_x += v_x;
				pos_y += v_y;
				pos_z += v_z;
				var v = pos_x * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v,true);
				++i;
				var v1 = pos_y * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v1,true);
				++i;
				var v2 = pos_z * scaleFactorVertFace;
				instancedData.setFloat32(i * 4,v2,true);
				++i;
			}
			break;
		case 2:
			var _g = 0;
			var _g1 = this.particles;
			while(_g < _g1.length) {
				var p = _g1[_g];
				++_g;
				var v = (Math.random() * 2.0 - 1.0) * (object.transform.dim.x / 2.0) * scaleFactorVol;
				instancedData.setFloat32(i * 4,v,true);
				++i;
				var v1 = (Math.random() * 2.0 - 1.0) * (object.transform.dim.y / 2.0) * scaleFactorVol;
				instancedData.setFloat32(i * 4,v1,true);
				++i;
				var v2 = (Math.random() * 2.0 - 1.0) * (object.transform.dim.z / 2.0) * scaleFactorVol;
				instancedData.setFloat32(i * 4,v2,true);
				++i;
			}
			break;
		}
		object.data.geom.setupInstanced(instancedData,1,0);
	}
	,fhash: function(n) {
		var s = n + 1.0;
		s *= 9301.0 % s;
		s = (s * 9301.0 + 49297.0) % 233280.0;
		return s / 233280.0;
	}
	,remove: function() {
	}
	,__class__: iron_object_ParticleSystem
};
var iron_object_Particle = function(i) {
	this.i = i;
};
$hxClasses["iron.object.Particle"] = iron_object_Particle;
iron_object_Particle.__name__ = true;
iron_object_Particle.prototype = {
	__class__: iron_object_Particle
};
var iron_object_SpeakerObject = function(data) {
	this.channels = [];
	this.sound = null;
	this.paused = false;
	var _gthis = this;
	iron_object_Object.call(this);
	this.data = data;
	iron_Scene.active.speakers.push(this);
	if(data.sound == "") {
		return;
	}
	iron_data_Data.getSound(data.sound,function(sound) {
		_gthis.sound = sound;
		iron_App.notifyOnInit($bind(_gthis,_gthis.init));
	});
};
$hxClasses["iron.object.SpeakerObject"] = iron_object_SpeakerObject;
iron_object_SpeakerObject.__name__ = true;
iron_object_SpeakerObject.__super__ = iron_object_Object;
iron_object_SpeakerObject.prototype = $extend(iron_object_Object.prototype,{
	init: function() {
		if(this.visible && this.data.play_on_start) {
			this.play();
		}
	}
	,play: function() {
		if(this.sound == null || this.data.muted) {
			return;
		}
		if(this.paused) {
			var _g = 0;
			var _g1 = this.channels;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.play();
			}
			this.paused = false;
			return;
		}
		var channel = iron_system_Audio.play(this.sound,this.data.loop,this.data.stream);
		if(channel != null) {
			this.channels.push(channel);
			if(this.data.attenuation > 0 && this.channels.length == 1) {
				iron_App.notifyOnUpdate($bind(this,this.update));
			}
		}
	}
	,stop: function() {
		var _g = 0;
		var _g1 = this.channels;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.stop();
		}
		this.channels.splice(0,this.channels.length);
	}
	,update: function() {
		if(this.paused) {
			return;
		}
		var _g = 0;
		var _g1 = this.channels;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			if(c.get_finished()) {
				HxOverrides.remove(this.channels,c);
			}
		}
		if(this.channels.length == 0) {
			iron_App.removeUpdate($bind(this,this.update));
			return;
		}
		if(this.data.attenuation > 0) {
			var _this = iron_Scene.active.camera.transform.world;
			var x = _this.self._30;
			var y = _this.self._31;
			var z = _this.self._32;
			var w = _this.self._33;
			if(w == null) {
				w = 1.0;
			}
			if(z == null) {
				z = 0.0;
			}
			if(y == null) {
				y = 0.0;
			}
			if(x == null) {
				x = 0.0;
			}
			var v1_x = x;
			var v1_y = y;
			var v1_z = z;
			var v1_w = w;
			var _this = this.transform.world;
			var x = _this.self._30;
			var y = _this.self._31;
			var z = _this.self._32;
			var w = _this.self._33;
			if(w == null) {
				w = 1.0;
			}
			if(z == null) {
				z = 0.0;
			}
			if(y == null) {
				y = 0.0;
			}
			if(x == null) {
				x = 0.0;
			}
			var v2_x = x;
			var v2_y = y;
			var v2_z = z;
			var v2_w = w;
			var vx = v1_x - v2_x;
			var vy = v1_y - v2_y;
			var vz = v1_z - v2_z;
			var distance = Math.sqrt(vx * vx + vy * vy + vz * vz);
			distance = Math.max(Math.min(this.data.distance_max,distance),this.data.distance_reference);
			this.volume = this.data.distance_reference / (this.data.distance_reference + this.data.attenuation * (distance - this.data.distance_reference));
			this.volume *= this.data.volume;
		} else {
			this.volume = this.data.volume;
		}
		if(this.volume > this.data.volume_max) {
			this.volume = this.data.volume_max;
		} else if(this.volume < this.data.volume_min) {
			this.volume = this.data.volume_min;
		}
		var _g = 0;
		var _g1 = this.channels;
		while(_g < _g1.length) {
			var c = _g1[_g];
			++_g;
			c.set_volume(this.volume);
		}
	}
	,remove: function() {
		this.stop();
		if(iron_Scene.active != null) {
			HxOverrides.remove(iron_Scene.active.speakers,this);
		}
		iron_object_Object.prototype.remove.call(this);
	}
	,__class__: iron_object_SpeakerObject
});
var iron_object_Tilesheet = function(sceneName,tilesheet_ref,tilesheet_action_ref) {
	this.onActionComplete = null;
	this.time = 0.0;
	this.frame = 0;
	this.paused = false;
	this.action = null;
	this.tileY = 0.0;
	this.tileX = 0.0;
	var _gthis = this;
	this.ready = false;
	iron_data_Data.getSceneRaw(sceneName,function(format) {
		var _g = 0;
		var _g1 = format.tilesheet_datas;
		while(_g < _g1.length) {
			var ts = _g1[_g];
			++_g;
			if(ts.name == tilesheet_ref) {
				_gthis.raw = ts;
				_gthis.play(tilesheet_action_ref);
				_gthis.ready = true;
				break;
			}
		}
	});
};
$hxClasses["iron.object.Tilesheet"] = iron_object_Tilesheet;
iron_object_Tilesheet.__name__ = true;
iron_object_Tilesheet.prototype = {
	play: function(action_ref,onActionComplete) {
		this.onActionComplete = onActionComplete;
		var _g = 0;
		var _g1 = this.raw.actions;
		while(_g < _g1.length) {
			var a = _g1[_g];
			++_g;
			if(a.name == action_ref) {
				this.action = a;
				break;
			}
		}
		this.setFrame(this.action.start);
		this.paused = false;
	}
	,remove: function() {
	}
	,update: function() {
		if(!this.ready || this.paused || this.action.start >= this.action.end) {
			return;
		}
		this.time += iron_system_Time.get_delta();
		if(this.time >= 1 / this.raw.framerate) {
			this.setFrame(this.frame + 1);
		}
	}
	,setFrame: function(f) {
		this.frame = f;
		this.time = 0;
		var tx = this.frame % this.raw.tilesx;
		var ty = this.frame / this.raw.tilesx | 0;
		this.tileX = tx * (1 / this.raw.tilesx);
		this.tileY = ty * (1 / this.raw.tilesy);
		if(this.frame >= this.action.end && this.action.start < this.action.end) {
			if(this.onActionComplete != null) {
				this.onActionComplete();
			}
			if(this.action.loop) {
				this.setFrame(this.action.start);
			} else {
				this.paused = true;
			}
		}
	}
	,__class__: iron_object_Tilesheet
};
var iron_object_Transform = function(object) {
	this.dscale = null;
	this.drot = null;
	this.dloc = null;
	this.boneParent = null;
	this.scaleWorld = 1.0;
	this.localOnly = false;
	this.object = object;
	this.reset();
};
$hxClasses["iron.object.Transform"] = iron_object_Transform;
iron_object_Transform.__name__ = true;
iron_object_Transform.prototype = {
	reset: function() {
		this.world = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
		this.worldUnpack = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
		this.local = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
		this.loc = new iron_math_Vec4();
		this.rot = new iron_math_Quat();
		this.scale = new iron_math_Vec4(1.0,1.0,1.0);
		this.dim = new iron_math_Vec4(2.0,2.0,2.0);
		this.radius = 1.0;
		this.dirty = true;
	}
	,update: function() {
		if(this.dirty) {
			this.buildMatrix();
		}
	}
	,composeDelta: function() {
		var _this = this.dloc;
		var a = this.loc;
		var b = this.dloc;
		_this.x = a.x + b.x;
		_this.y = a.y + b.y;
		_this.z = a.z + b.z;
		var _this = this.dscale;
		var a = this.dscale;
		var b = this.scale;
		_this.x = a.x + b.x;
		_this.y = a.y + b.y;
		_this.z = a.z + b.z;
		var _this = this.drot;
		var f = this._deulerX / 2;
		var c1 = Math.cos(f);
		var s1 = Math.sin(f);
		f = this._deulerY / 2;
		var c2 = Math.cos(f);
		var s2 = Math.sin(f);
		f = this._deulerZ / 2;
		var c3 = Math.cos(f);
		var s3 = Math.sin(f);
		_this.x = s1 * c2 * c3 + c1 * s2 * s3;
		_this.y = c1 * s2 * c3 + s1 * c2 * s3;
		_this.z = c1 * c2 * s3 - s1 * s2 * c3;
		_this.w = c1 * c2 * c3 - s1 * s2 * s3;
		var _this = this.drot;
		var q1 = this.rot;
		var q2 = this.drot;
		var q1x = q1.x;
		var q1y = q1.y;
		var q1z = q1.z;
		var q1w = q1.w;
		var q2x = q2.x;
		var q2y = q2.y;
		var q2z = q2.z;
		var q2w = q2.w;
		_this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
		_this.y = q1w * q2y - q1x * q2z + q1y * q2w + q1z * q2x;
		_this.z = q1w * q2z + q1x * q2y - q1y * q2x + q1z * q2w;
		_this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
		var _this = this.local;
		var loc = this.dloc;
		var quat = this.drot;
		var sc = this.dscale;
		var x = quat.x;
		var y = quat.y;
		var z = quat.z;
		var w = quat.w;
		var x2 = x + x;
		var y2 = y + y;
		var z2 = z + z;
		var xx = x * x2;
		var xy = x * y2;
		var xz = x * z2;
		var yy = y * y2;
		var yz = y * z2;
		var zz = z * z2;
		var wx = w * x2;
		var wy = w * y2;
		var wz = w * z2;
		_this.self._00 = 1.0 - (yy + zz);
		_this.self._10 = xy - wz;
		_this.self._20 = xz + wy;
		_this.self._01 = xy + wz;
		_this.self._11 = 1.0 - (xx + zz);
		_this.self._21 = yz - wx;
		_this.self._02 = xz - wy;
		_this.self._12 = yz + wx;
		_this.self._22 = 1.0 - (xx + yy);
		_this.self._03 = 0.0;
		_this.self._13 = 0.0;
		_this.self._23 = 0.0;
		_this.self._30 = 0.0;
		_this.self._31 = 0.0;
		_this.self._32 = 0.0;
		_this.self._33 = 1.0;
		var x = sc.x;
		var y = sc.y;
		var z = sc.z;
		_this.self._00 *= x;
		_this.self._01 *= x;
		_this.self._02 *= x;
		_this.self._03 *= x;
		_this.self._10 *= y;
		_this.self._11 *= y;
		_this.self._12 *= y;
		_this.self._13 *= y;
		_this.self._20 *= z;
		_this.self._21 *= z;
		_this.self._22 *= z;
		_this.self._23 *= z;
		_this.self._30 = loc.x;
		_this.self._31 = loc.y;
		_this.self._32 = loc.z;
	}
	,buildMatrix: function() {
		if(this.dloc == null) {
			var _this = this.local;
			var loc = this.loc;
			var quat = this.rot;
			var sc = this.scale;
			var x = quat.x;
			var y = quat.y;
			var z = quat.z;
			var w = quat.w;
			var x2 = x + x;
			var y2 = y + y;
			var z2 = z + z;
			var xx = x * x2;
			var xy = x * y2;
			var xz = x * z2;
			var yy = y * y2;
			var yz = y * z2;
			var zz = z * z2;
			var wx = w * x2;
			var wy = w * y2;
			var wz = w * z2;
			_this.self._00 = 1.0 - (yy + zz);
			_this.self._10 = xy - wz;
			_this.self._20 = xz + wy;
			_this.self._01 = xy + wz;
			_this.self._11 = 1.0 - (xx + zz);
			_this.self._21 = yz - wx;
			_this.self._02 = xz - wy;
			_this.self._12 = yz + wx;
			_this.self._22 = 1.0 - (xx + yy);
			_this.self._03 = 0.0;
			_this.self._13 = 0.0;
			_this.self._23 = 0.0;
			_this.self._30 = 0.0;
			_this.self._31 = 0.0;
			_this.self._32 = 0.0;
			_this.self._33 = 1.0;
			var x = sc.x;
			var y = sc.y;
			var z = sc.z;
			_this.self._00 *= x;
			_this.self._01 *= x;
			_this.self._02 *= x;
			_this.self._03 *= x;
			_this.self._10 *= y;
			_this.self._11 *= y;
			_this.self._12 *= y;
			_this.self._13 *= y;
			_this.self._20 *= z;
			_this.self._21 *= z;
			_this.self._22 *= z;
			_this.self._23 *= z;
			_this.self._30 = loc.x;
			_this.self._31 = loc.y;
			_this.self._32 = loc.z;
		} else {
			this.composeDelta();
		}
		if(this.boneParent != null) {
			var _this = this.local;
			var b = this.boneParent;
			var a = this.local;
			var a00 = a.self._00;
			var a01 = a.self._01;
			var a02 = a.self._02;
			var a03 = a.self._03;
			var a10 = a.self._10;
			var a11 = a.self._11;
			var a12 = a.self._12;
			var a13 = a.self._13;
			var a20 = a.self._20;
			var a21 = a.self._21;
			var a22 = a.self._22;
			var a23 = a.self._23;
			var a30 = a.self._30;
			var a31 = a.self._31;
			var a32 = a.self._32;
			var a33 = a.self._33;
			var b0 = b.self._00;
			var b1 = b.self._10;
			var b2 = b.self._20;
			var b3 = b.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._01;
			b1 = b.self._11;
			b2 = b.self._21;
			b3 = b.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._02;
			b1 = b.self._12;
			b2 = b.self._22;
			b3 = b.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._03;
			b1 = b.self._13;
			b2 = b.self._23;
			b3 = b.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		}
		if(this.object.parent != null && !this.localOnly) {
			var _this = this.world;
			var a = this.local;
			var b = this.object.parent.transform.world;
			var a00 = a.self._00;
			var a01 = a.self._01;
			var a02 = a.self._02;
			var a03 = a.self._03;
			var a10 = a.self._10;
			var a11 = a.self._11;
			var a12 = a.self._12;
			var a13 = a.self._13;
			var a20 = a.self._20;
			var a21 = a.self._21;
			var a22 = a.self._22;
			var a23 = a.self._23;
			var a30 = a.self._30;
			var a31 = a.self._31;
			var a32 = a.self._32;
			var a33 = a.self._33;
			var b0 = b.self._00;
			var b1 = b.self._10;
			var b2 = b.self._20;
			var b3 = b.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._01;
			b1 = b.self._11;
			b2 = b.self._21;
			b3 = b.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = b.self._02;
			b1 = b.self._12;
			b2 = b.self._22;
			b3 = b.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			_this.self._03 = 0;
			_this.self._13 = 0;
			_this.self._23 = 0;
			_this.self._33 = 1;
		} else {
			var _this = this.world;
			var m = this.local;
			_this.self._00 = m.self._00;
			_this.self._01 = m.self._01;
			_this.self._02 = m.self._02;
			_this.self._03 = m.self._03;
			_this.self._10 = m.self._10;
			_this.self._11 = m.self._11;
			_this.self._12 = m.self._12;
			_this.self._13 = m.self._13;
			_this.self._20 = m.self._20;
			_this.self._21 = m.self._21;
			_this.self._22 = m.self._22;
			_this.self._23 = m.self._23;
			_this.self._30 = m.self._30;
			_this.self._31 = m.self._31;
			_this.self._32 = m.self._32;
			_this.self._33 = m.self._33;
		}
		var _this = this.worldUnpack;
		var m = this.world;
		_this.self._00 = m.self._00;
		_this.self._01 = m.self._01;
		_this.self._02 = m.self._02;
		_this.self._03 = m.self._03;
		_this.self._10 = m.self._10;
		_this.self._11 = m.self._11;
		_this.self._12 = m.self._12;
		_this.self._13 = m.self._13;
		_this.self._20 = m.self._20;
		_this.self._21 = m.self._21;
		_this.self._22 = m.self._22;
		_this.self._23 = m.self._23;
		_this.self._30 = m.self._30;
		_this.self._31 = m.self._31;
		_this.self._32 = m.self._32;
		_this.self._33 = m.self._33;
		if(this.scaleWorld != 1.0) {
			this.worldUnpack.self._00 *= this.scaleWorld;
			this.worldUnpack.self._01 *= this.scaleWorld;
			this.worldUnpack.self._02 *= this.scaleWorld;
			this.worldUnpack.self._03 *= this.scaleWorld;
			this.worldUnpack.self._10 *= this.scaleWorld;
			this.worldUnpack.self._11 *= this.scaleWorld;
			this.worldUnpack.self._12 *= this.scaleWorld;
			this.worldUnpack.self._13 *= this.scaleWorld;
			this.worldUnpack.self._20 *= this.scaleWorld;
			this.worldUnpack.self._21 *= this.scaleWorld;
			this.worldUnpack.self._22 *= this.scaleWorld;
			this.worldUnpack.self._23 *= this.scaleWorld;
		}
		if(this.object.constraints != null) {
			var _g = 0;
			var _g1 = this.object.constraints;
			while(_g < _g1.length) {
				var c = _g1[_g];
				++_g;
				c.apply(this);
			}
		}
		this.computeDim();
		var _g = 0;
		var _g1 = this.object.children;
		while(_g < _g1.length) {
			var n = _g1[_g];
			++_g;
			n.transform.buildMatrix();
		}
		this.dirty = false;
	}
	,translate: function(x,y,z) {
		this.loc.x += x;
		this.loc.y += y;
		this.loc.z += z;
		this.buildMatrix();
	}
	,decompose: function() {
		var _this = this.local;
		var loc = this.loc;
		var quat = this.rot;
		var scale = this.scale;
		loc.x = _this.self._30;
		loc.y = _this.self._31;
		loc.z = _this.self._32;
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._00;
		_this1.y = _this.self._01;
		_this1.z = _this.self._02;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.x = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._10;
		_this1.y = _this.self._11;
		_this1.z = _this.self._12;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.y = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = iron_math_Mat4.helpVec;
		_this1.x = _this.self._20;
		_this1.y = _this.self._21;
		_this1.z = _this.self._22;
		_this1.w = 1.0;
		var _this2 = _this1;
		scale.z = Math.sqrt(_this2.x * _this2.x + _this2.y * _this2.y + _this2.z * _this2.z);
		var _this1 = _this.self;
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c00 = _this1._11 * (m4 * m8 - m5 * m7) - _this1._21 * (m3 * m8 - m5 * m6) + _this1._31 * (m3 * m7 - m4 * m6);
		var m3 = _this1._12;
		var m4 = _this1._22;
		var m5 = _this1._32;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c01 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._13;
		var m7 = _this1._23;
		var m8 = _this1._33;
		var c02 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		var m3 = _this1._11;
		var m4 = _this1._21;
		var m5 = _this1._31;
		var m6 = _this1._12;
		var m7 = _this1._22;
		var m8 = _this1._32;
		var c03 = _this1._10 * (m4 * m8 - m5 * m7) - _this1._20 * (m3 * m8 - m5 * m6) + _this1._30 * (m3 * m7 - m4 * m6);
		if(_this1._00 * c00 - _this1._01 * c01 + _this1._02 * c02 - _this1._03 * c03 < 0.0) {
			scale.x = -scale.x;
		}
		var invs = 1.0 / scale.x;
		iron_math_Mat4.helpMat.self._00 = _this.self._00 * invs;
		iron_math_Mat4.helpMat.self._01 = _this.self._01 * invs;
		iron_math_Mat4.helpMat.self._02 = _this.self._02 * invs;
		invs = 1.0 / scale.y;
		iron_math_Mat4.helpMat.self._10 = _this.self._10 * invs;
		iron_math_Mat4.helpMat.self._11 = _this.self._11 * invs;
		iron_math_Mat4.helpMat.self._12 = _this.self._12 * invs;
		invs = 1.0 / scale.z;
		iron_math_Mat4.helpMat.self._20 = _this.self._20 * invs;
		iron_math_Mat4.helpMat.self._21 = _this.self._21 * invs;
		iron_math_Mat4.helpMat.self._22 = _this.self._22 * invs;
		var m = iron_math_Mat4.helpMat;
		var m11 = m.self._00;
		var m12 = m.self._10;
		var m13 = m.self._20;
		var m21 = m.self._01;
		var m22 = m.self._11;
		var m23 = m.self._21;
		var m31 = m.self._02;
		var m32 = m.self._12;
		var m33 = m.self._22;
		var tr = m11 + m22 + m33;
		var s = 0.0;
		if(tr > 0) {
			s = 0.5 / Math.sqrt(tr + 1.0);
			quat.w = 0.25 / s;
			quat.x = (m32 - m23) * s;
			quat.y = (m13 - m31) * s;
			quat.z = (m21 - m12) * s;
		} else if(m11 > m22 && m11 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m11 - m22 - m33);
			quat.w = (m32 - m23) / s;
			quat.x = 0.25 * s;
			quat.y = (m12 + m21) / s;
			quat.z = (m13 + m31) / s;
		} else if(m22 > m33) {
			s = 2.0 * Math.sqrt(1.0 + m22 - m11 - m33);
			quat.w = (m13 - m31) / s;
			quat.x = (m12 + m21) / s;
			quat.y = 0.25 * s;
			quat.z = (m23 + m32) / s;
		} else {
			s = 2.0 * Math.sqrt(1.0 + m33 - m11 - m22);
			quat.w = (m21 - m12) / s;
			quat.x = (m13 + m31) / s;
			quat.y = (m23 + m32) / s;
			quat.z = 0.25 * s;
		}
	}
	,rotate: function(axis,f) {
		var _this = iron_object_Transform.q;
		var s = Math.sin(f * 0.5);
		_this.x = axis.x * s;
		_this.y = axis.y * s;
		_this.z = axis.z * s;
		_this.w = Math.cos(f * 0.5);
		var l = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z + _this.w * _this.w);
		if(l == 0.0) {
			_this.x = 0;
			_this.y = 0;
			_this.z = 0;
			_this.w = 0;
		} else {
			l = 1.0 / l;
			_this.x *= l;
			_this.y *= l;
			_this.z *= l;
			_this.w *= l;
		}
		var _this = this.rot;
		var q1 = iron_object_Transform.q;
		var q2 = this.rot;
		var q1x = q1.x;
		var q1y = q1.y;
		var q1z = q1.z;
		var q1w = q1.w;
		var q2x = q2.x;
		var q2y = q2.y;
		var q2z = q2.z;
		var q2w = q2.w;
		_this.x = q1x * q2w + q1w * q2x + q1y * q2z - q1z * q2y;
		_this.y = q1w * q2y - q1x * q2z + q1y * q2w + q1z * q2x;
		_this.z = q1w * q2z + q1x * q2y - q1y * q2x + q1z * q2w;
		_this.w = q1w * q2w - q1x * q2x - q1y * q2y - q1z * q2z;
		this.buildMatrix();
	}
	,move: function(axis,f) {
		if(f == null) {
			f = 1.0;
		}
		var _this = this.loc;
		_this.x += axis.x * f;
		_this.y += axis.y * f;
		_this.z += axis.z * f;
		this.buildMatrix();
	}
	,setRotation: function(x,y,z) {
		var _this = this.rot;
		var f = x / 2;
		var c1 = Math.cos(f);
		var s1 = Math.sin(f);
		f = y / 2;
		var c2 = Math.cos(f);
		var s2 = Math.sin(f);
		f = z / 2;
		var c3 = Math.cos(f);
		var s3 = Math.sin(f);
		_this.x = s1 * c2 * c3 + c1 * s2 * s3;
		_this.y = c1 * s2 * c3 + s1 * c2 * s3;
		_this.z = c1 * c2 * s3 - s1 * s2 * c3;
		_this.w = c1 * c2 * c3 - s1 * s2 * s3;
		this._eulerX = x;
		this._eulerY = y;
		this._eulerZ = z;
		this.dirty = true;
	}
	,computeRadius: function() {
		this.radius = Math.sqrt(this.dim.x * this.dim.x + this.dim.y * this.dim.y + this.dim.z * this.dim.z);
	}
	,computeDim: function() {
		if(this.object.raw == null) {
			this.computeRadius();
			return;
		}
		var d = this.object.raw.dimensions;
		if(d == null) {
			var _this = this.dim;
			_this.x = 2 * this.scale.x;
			_this.y = 2 * this.scale.y;
			_this.z = 2 * this.scale.z;
			_this.w = 1.0;
		} else {
			var _this = this.dim;
			var y = d.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.scale.y;
			var z = d.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.scale.z;
			_this.x = d.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN) * this.scale.x;
			_this.y = y;
			_this.z = z;
			_this.w = 1.0;
		}
		this.computeRadius();
	}
	,applyParentInverse: function() {
		var pt = this.object.parent.transform;
		pt.buildMatrix();
		var _this = iron_object_Transform.temp;
		var m = pt.world;
		var a00 = m.self._00;
		var a01 = m.self._01;
		var a02 = m.self._02;
		var a03 = m.self._03;
		var a10 = m.self._10;
		var a11 = m.self._11;
		var a12 = m.self._12;
		var a13 = m.self._13;
		var a20 = m.self._20;
		var a21 = m.self._21;
		var a22 = m.self._22;
		var a23 = m.self._23;
		var a30 = m.self._30;
		var a31 = m.self._31;
		var a32 = m.self._32;
		var a33 = m.self._33;
		var b00 = a00 * a11 - a01 * a10;
		var b01 = a00 * a12 - a02 * a10;
		var b02 = a00 * a13 - a03 * a10;
		var b03 = a01 * a12 - a02 * a11;
		var b04 = a01 * a13 - a03 * a11;
		var b05 = a02 * a13 - a03 * a12;
		var b06 = a20 * a31 - a21 * a30;
		var b07 = a20 * a32 - a22 * a30;
		var b08 = a20 * a33 - a23 * a30;
		var b09 = a21 * a32 - a22 * a31;
		var b10 = a21 * a33 - a23 * a31;
		var b11 = a22 * a33 - a23 * a32;
		var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
		if(det == 0.0) {
			_this.self._00 = 1.0;
			_this.self._01 = 0.0;
			_this.self._02 = 0.0;
			_this.self._03 = 0.0;
			_this.self._10 = 0.0;
			_this.self._11 = 1.0;
			_this.self._12 = 0.0;
			_this.self._13 = 0.0;
			_this.self._20 = 0.0;
			_this.self._21 = 0.0;
			_this.self._22 = 1.0;
			_this.self._23 = 0.0;
			_this.self._30 = 0.0;
			_this.self._31 = 0.0;
			_this.self._32 = 0.0;
			_this.self._33 = 1.0;
		} else {
			det = 1.0 / det;
			_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
			_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
			_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
			_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
			_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
			_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
			_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
			_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
			_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
			_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
			_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
			_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
			_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
			_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
			_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
			_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
		}
		var _this = this.local;
		var m = iron_object_Transform.temp;
		var a00 = _this.self._00;
		var a01 = _this.self._01;
		var a02 = _this.self._02;
		var a03 = _this.self._03;
		var a10 = _this.self._10;
		var a11 = _this.self._11;
		var a12 = _this.self._12;
		var a13 = _this.self._13;
		var a20 = _this.self._20;
		var a21 = _this.self._21;
		var a22 = _this.self._22;
		var a23 = _this.self._23;
		var a30 = _this.self._30;
		var a31 = _this.self._31;
		var a32 = _this.self._32;
		var a33 = _this.self._33;
		var b0 = m.self._00;
		var b1 = m.self._10;
		var b2 = m.self._20;
		var b3 = m.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._01;
		b1 = m.self._11;
		b2 = m.self._21;
		b3 = m.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._02;
		b1 = m.self._12;
		b2 = m.self._22;
		b3 = m.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._03;
		b1 = m.self._13;
		b2 = m.self._23;
		b3 = m.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		this.decompose();
		this.buildMatrix();
	}
	,applyParent: function() {
		var pt = this.object.parent.transform;
		pt.buildMatrix();
		var _this = this.local;
		var m = pt.world;
		var a00 = _this.self._00;
		var a01 = _this.self._01;
		var a02 = _this.self._02;
		var a03 = _this.self._03;
		var a10 = _this.self._10;
		var a11 = _this.self._11;
		var a12 = _this.self._12;
		var a13 = _this.self._13;
		var a20 = _this.self._20;
		var a21 = _this.self._21;
		var a22 = _this.self._22;
		var a23 = _this.self._23;
		var a30 = _this.self._30;
		var a31 = _this.self._31;
		var a32 = _this.self._32;
		var a33 = _this.self._33;
		var b0 = m.self._00;
		var b1 = m.self._10;
		var b2 = m.self._20;
		var b3 = m.self._30;
		_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._01;
		b1 = m.self._11;
		b2 = m.self._21;
		b3 = m.self._31;
		_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._02;
		b1 = m.self._12;
		b2 = m.self._22;
		b3 = m.self._32;
		_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		b0 = m.self._03;
		b1 = m.self._13;
		b2 = m.self._23;
		b3 = m.self._33;
		_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
		_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
		_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
		_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
		this.decompose();
		this.buildMatrix();
	}
	,__class__: iron_object_Transform
};
var kha_math_FastMatrix3 = function(_00,_10,_20,_01,_11,_21,_02,_12,_22) {
	this._00 = _00;
	this._10 = _10;
	this._20 = _20;
	this._01 = _01;
	this._11 = _11;
	this._21 = _21;
	this._02 = _02;
	this._12 = _12;
	this._22 = _22;
};
$hxClasses["kha.math.FastMatrix3"] = kha_math_FastMatrix3;
kha_math_FastMatrix3.__name__ = true;
kha_math_FastMatrix3.prototype = {
	__class__: kha_math_FastMatrix3
};
var iron_object_Uniforms = function() { };
$hxClasses["iron.object.Uniforms"] = iron_object_Uniforms;
iron_object_Uniforms.__name__ = true;
iron_object_Uniforms.setContextConstants = function(g,context,bindParams) {
	if(context.raw.constants != null) {
		var _g = 0;
		var _g1 = context.raw.constants.length;
		while(_g < _g1) {
			var i = _g++;
			var c = context.raw.constants[i];
			iron_object_Uniforms.setContextConstant(g,context.constants[i],c);
		}
	}
	if(bindParams != null) {
		var _g = 0;
		var _g1 = bindParams.length / 2 | 0;
		while(_g < _g1) {
			var i = _g++;
			var pos = i * 2;
			var rtID = bindParams[pos];
			var samplerID = bindParams[pos + 1];
			var attachDepth = false;
			var char = rtID.charAt(0);
			if(char == "_") {
				attachDepth = true;
				rtID = HxOverrides.substr(rtID,1,null);
			}
			var rt = attachDepth ? iron_RenderPath.active.depthToRenderTarget.h[rtID] : iron_RenderPath.active.renderTargets.h[rtID];
			iron_object_Uniforms.bindRenderTarget(g,rt,context,samplerID,attachDepth);
		}
	}
	if(context.raw.texture_units != null) {
		var _g = 0;
		var _g1 = context.raw.texture_units.length;
		while(_g < _g1) {
			var j = _g++;
			var tulink = context.raw.texture_units[j].link;
			if(tulink == null) {
				continue;
			}
			if(tulink.charAt(0) == "$") {
				g.setTexture(context.textureUnits[j],iron_Scene.active.embedded.h[HxOverrides.substr(tulink,1,null)]);
				if(StringTools.endsWith(tulink,".raw")) {
					g.setTexture3DParameters(context.textureUnits[j],0,0,0,1,1,0);
				} else {
					g.setTextureParameters(context.textureUnits[j],0,0,1,1,0);
				}
			} else {
				switch(tulink) {
				case "_envmap":
					var w = iron_Scene.active.world;
					if(w != null) {
						g.setTexture(context.textureUnits[j],w.envmap);
						g.setTextureParameters(context.textureUnits[j],0,0,1,1,0);
					}
					break;
				case "_envmapRadiance":
					var w1 = iron_Scene.active.world;
					if(w1 != null) {
						g.setTexture(context.textureUnits[j],w1.probe.radiance);
						g.setTextureParameters(context.textureUnits[j],0,0,1,1,2);
					}
					break;
				}
			}
		}
	}
};
iron_object_Uniforms.setObjectConstants = function(g,context,object) {
	if(context.raw.constants != null) {
		var _g = 0;
		var _g1 = context.raw.constants.length;
		while(_g < _g1) {
			var i = _g++;
			var c = context.raw.constants[i];
			iron_object_Uniforms.setObjectConstant(g,object,context.constants[i],c);
		}
	}
	if(iron_object_Uniforms.externalTextureLinks != null) {
		if(context.raw.texture_units != null) {
			var _g = 0;
			var _g1 = context.raw.texture_units.length;
			while(_g < _g1) {
				var j = _g++;
				var tu = context.raw.texture_units[j];
				if(tu.link == null) {
					continue;
				}
				var tuAddrU;
				switch(tu.addressing_u) {
				case "clamp":
					tuAddrU = 2;
					break;
				case "mirror":
					tuAddrU = 1;
					break;
				default:
					tuAddrU = 0;
				}
				var tuAddrV;
				switch(tu.addressing_v) {
				case "clamp":
					tuAddrV = 2;
					break;
				case "mirror":
					tuAddrV = 1;
					break;
				default:
					tuAddrV = 0;
				}
				var tuFilterMin;
				switch(tu.filter_min) {
				case "anisotropic":
					tuFilterMin = 2;
					break;
				case "point":
					tuFilterMin = 0;
					break;
				default:
					tuFilterMin = 1;
				}
				var tuFilterMag;
				switch(tu.filter_mag) {
				case "anisotropic":
					tuFilterMag = 2;
					break;
				case "point":
					tuFilterMag = 0;
					break;
				default:
					tuFilterMag = 1;
				}
				var tuMipMapFilter;
				switch(tu.mipmap_filter) {
				case "linear":
					tuMipMapFilter = 2;
					break;
				case "point":
					tuMipMapFilter = 1;
					break;
				default:
					tuMipMapFilter = 0;
				}
				var _g2 = 0;
				var _g3 = iron_object_Uniforms.externalTextureLinks;
				while(_g2 < _g3.length) {
					var f = _g3[_g2];
					++_g2;
					var image = f(object,iron_object_Uniforms.currentMat(object),tu.link);
					if(image != null) {
						if(StringTools.endsWith(tu.link,"_depth")) {
							g.setTextureDepth(context.textureUnits[j],image);
						} else {
							g.setTexture(context.textureUnits[j],image);
						}
						g.setTextureParameters(context.textureUnits[j],tuAddrU,tuAddrV,tuFilterMin,tuFilterMag,tuMipMapFilter);
						break;
					}
				}
			}
		}
	}
};
iron_object_Uniforms.bindRenderTarget = function(g,rt,context,samplerID,attachDepth) {
	if(rt != null) {
		var tus = context.raw.texture_units;
		var _g = 0;
		var _g1 = tus.length;
		while(_g < _g1) {
			var j = _g++;
			if(samplerID == tus[j].name) {
				var isImage = tus[j].is_image != null && tus[j].is_image;
				var paramsSet = false;
				if(rt.raw.depth > 1) {
					g.setTexture3DParameters(context.textureUnits[j],2,2,2,1,2,2);
					paramsSet = true;
				}
				if(isImage) {
					g.setImageTexture(context.textureUnits[j],rt.image);
					g.setTexture3DParameters(context.textureUnits[j],2,2,2,1,0,2);
					paramsSet = true;
				} else if(rt.isCubeMap) {
					if(attachDepth) {
						g.setCubeMapDepth(context.textureUnits[j],rt.cubeMap);
					} else {
						g.setCubeMap(context.textureUnits[j],rt.cubeMap);
					}
				} else if(attachDepth) {
					g.setTextureDepth(context.textureUnits[j],rt.image);
				} else {
					g.setTexture(context.textureUnits[j],rt.image);
				}
				if(!paramsSet && rt.raw.mipmaps != null && rt.raw.mipmaps == true && !isImage) {
					g.setTextureParameters(context.textureUnits[j],2,2,1,1,2);
					paramsSet = true;
				}
				if(!paramsSet) {
					if(StringTools.startsWith(samplerID,"shadowMap")) {
						if(rt.isCubeMap) {
							g.setCubeMapCompareMode(context.textureUnits[j],true);
						} else {
							g.setTextureParameters(context.textureUnits[j],2,2,1,1,0);
							g.setTextureCompareMode(context.textureUnits[j],true);
						}
						paramsSet = true;
					} else if(attachDepth) {
						g.setTextureParameters(context.textureUnits[j],2,2,0,0,0);
						paramsSet = true;
					}
				}
				if(!paramsSet) {
					var oc = context.overrideContext;
					var allowParams = oc == null || oc.shared_sampler == null || oc.shared_sampler == samplerID;
					if(allowParams) {
						var addressing = oc != null && oc.addressing == "repeat" ? 0 : 2;
						var filter = oc != null && oc.filter == "point" ? 0 : iron_object_Uniforms.defaultFilter;
						g.setTextureParameters(context.textureUnits[j],addressing,addressing,filter,filter,0);
					}
					paramsSet = true;
				}
			}
		}
	}
};
iron_object_Uniforms.setContextConstant = function(g,location,c) {
	if(c.link == null) {
		return true;
	}
	var camera = iron_Scene.active.camera;
	var light = iron_RenderPath.active.light;
	if(c.type == "mat4") {
		var m = null;
		var _g = c.link;
		if(_g == null) {
			return false;
		} else {
			switch(_g) {
			case "_biasLightViewProjectionMatrix":
				if(light != null) {
					var _this = iron_object_Uniforms.helpMat;
					var m1 = light.VP;
					_this.self._00 = m1.self._00;
					_this.self._01 = m1.self._01;
					_this.self._02 = m1.self._02;
					_this.self._03 = m1.self._03;
					_this.self._10 = m1.self._10;
					_this.self._11 = m1.self._11;
					_this.self._12 = m1.self._12;
					_this.self._13 = m1.self._13;
					_this.self._20 = m1.self._20;
					_this.self._21 = m1.self._21;
					_this.self._22 = m1.self._22;
					_this.self._23 = m1.self._23;
					_this.self._30 = m1.self._30;
					_this.self._31 = m1.self._31;
					_this.self._32 = m1.self._32;
					_this.self._33 = m1.self._33;
					var _this = iron_object_Uniforms.helpMat;
					var m1 = iron_object_Uniforms.biasMat;
					var a00 = _this.self._00;
					var a01 = _this.self._01;
					var a02 = _this.self._02;
					var a03 = _this.self._03;
					var a10 = _this.self._10;
					var a11 = _this.self._11;
					var a12 = _this.self._12;
					var a13 = _this.self._13;
					var a20 = _this.self._20;
					var a21 = _this.self._21;
					var a22 = _this.self._22;
					var a23 = _this.self._23;
					var a30 = _this.self._30;
					var a31 = _this.self._31;
					var a32 = _this.self._32;
					var a33 = _this.self._33;
					var b0 = m1.self._00;
					var b1 = m1.self._10;
					var b2 = m1.self._20;
					var b3 = m1.self._30;
					_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m1.self._01;
					b1 = m1.self._11;
					b2 = m1.self._21;
					b3 = m1.self._31;
					_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m1.self._02;
					b1 = m1.self._12;
					b2 = m1.self._22;
					b3 = m1.self._32;
					_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m1.self._03;
					b1 = m1.self._13;
					b2 = m1.self._23;
					b3 = m1.self._33;
					_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					m = iron_object_Uniforms.helpMat;
				}
				break;
			case "_inverseProjectionMatrix":
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.P;
				var a00 = m1.self._00;
				var a01 = m1.self._01;
				var a02 = m1.self._02;
				var a03 = m1.self._03;
				var a10 = m1.self._10;
				var a11 = m1.self._11;
				var a12 = m1.self._12;
				var a13 = m1.self._13;
				var a20 = m1.self._20;
				var a21 = m1.self._21;
				var a22 = m1.self._22;
				var a23 = m1.self._23;
				var a30 = m1.self._30;
				var a31 = m1.self._31;
				var a32 = m1.self._32;
				var a33 = m1.self._33;
				var b00 = a00 * a11 - a01 * a10;
				var b01 = a00 * a12 - a02 * a10;
				var b02 = a00 * a13 - a03 * a10;
				var b03 = a01 * a12 - a02 * a11;
				var b04 = a01 * a13 - a03 * a11;
				var b05 = a02 * a13 - a03 * a12;
				var b06 = a20 * a31 - a21 * a30;
				var b07 = a20 * a32 - a22 * a30;
				var b08 = a20 * a33 - a23 * a30;
				var b09 = a21 * a32 - a22 * a31;
				var b10 = a21 * a33 - a23 * a31;
				var b11 = a22 * a33 - a23 * a32;
				var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
				if(det == 0.0) {
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					det = 1.0 / det;
					_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
					_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
					_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
					_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
					_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
					_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
					_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
					_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
					_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
					_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
					_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
					_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
					_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
					_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
					_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
					_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
				}
				m = iron_object_Uniforms.helpMat;
				break;
			case "_inverseViewProjectionMatrix":
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.V;
				_this.self._00 = m1.self._00;
				_this.self._01 = m1.self._01;
				_this.self._02 = m1.self._02;
				_this.self._03 = m1.self._03;
				_this.self._10 = m1.self._10;
				_this.self._11 = m1.self._11;
				_this.self._12 = m1.self._12;
				_this.self._13 = m1.self._13;
				_this.self._20 = m1.self._20;
				_this.self._21 = m1.self._21;
				_this.self._22 = m1.self._22;
				_this.self._23 = m1.self._23;
				_this.self._30 = m1.self._30;
				_this.self._31 = m1.self._31;
				_this.self._32 = m1.self._32;
				_this.self._33 = m1.self._33;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.P;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = iron_object_Uniforms.helpMat;
				var a00 = m1.self._00;
				var a01 = m1.self._01;
				var a02 = m1.self._02;
				var a03 = m1.self._03;
				var a10 = m1.self._10;
				var a11 = m1.self._11;
				var a12 = m1.self._12;
				var a13 = m1.self._13;
				var a20 = m1.self._20;
				var a21 = m1.self._21;
				var a22 = m1.self._22;
				var a23 = m1.self._23;
				var a30 = m1.self._30;
				var a31 = m1.self._31;
				var a32 = m1.self._32;
				var a33 = m1.self._33;
				var b00 = a00 * a11 - a01 * a10;
				var b01 = a00 * a12 - a02 * a10;
				var b02 = a00 * a13 - a03 * a10;
				var b03 = a01 * a12 - a02 * a11;
				var b04 = a01 * a13 - a03 * a11;
				var b05 = a02 * a13 - a03 * a12;
				var b06 = a20 * a31 - a21 * a30;
				var b07 = a20 * a32 - a22 * a30;
				var b08 = a20 * a33 - a23 * a30;
				var b09 = a21 * a32 - a22 * a31;
				var b10 = a21 * a33 - a23 * a31;
				var b11 = a22 * a33 - a23 * a32;
				var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
				if(det == 0.0) {
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					det = 1.0 / det;
					_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
					_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
					_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
					_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
					_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
					_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
					_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
					_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
					_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
					_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
					_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
					_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
					_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
					_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
					_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
					_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
				}
				m = iron_object_Uniforms.helpMat;
				break;
			case "_lightViewProjectionMatrix":
				if(light != null) {
					m = light.VP;
				}
				break;
			case "_prevViewProjectionMatrix":
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.prevV;
				_this.self._00 = m1.self._00;
				_this.self._01 = m1.self._01;
				_this.self._02 = m1.self._02;
				_this.self._03 = m1.self._03;
				_this.self._10 = m1.self._10;
				_this.self._11 = m1.self._11;
				_this.self._12 = m1.self._12;
				_this.self._13 = m1.self._13;
				_this.self._20 = m1.self._20;
				_this.self._21 = m1.self._21;
				_this.self._22 = m1.self._22;
				_this.self._23 = m1.self._23;
				_this.self._30 = m1.self._30;
				_this.self._31 = m1.self._31;
				_this.self._32 = m1.self._32;
				_this.self._33 = m1.self._33;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.P;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
				break;
			case "_projectionMatrix":
				m = camera.P;
				break;
			case "_skydomeMatrix":
				var tr = camera.transform;
				var _this = iron_object_Uniforms.helpVec;
				_this.x = tr.world.self._30;
				_this.y = tr.world.self._31;
				_this.z = tr.world.self._32 - 3.5;
				_this.w = 1.0;
				var bounds = camera.data.raw.far_plane * 0.95;
				var _this = iron_object_Uniforms.helpVec2;
				_this.x = bounds;
				_this.y = bounds;
				_this.z = bounds;
				_this.w = 1.0;
				var _this = iron_object_Uniforms.helpMat;
				var loc = iron_object_Uniforms.helpVec;
				var quat = iron_object_Uniforms.helpQuat;
				var sc = iron_object_Uniforms.helpVec2;
				var x = quat.x;
				var y = quat.y;
				var z = quat.z;
				var w = quat.w;
				var x2 = x + x;
				var y2 = y + y;
				var z2 = z + z;
				var xx = x * x2;
				var xy = x * y2;
				var xz = x * z2;
				var yy = y * y2;
				var yz = y * z2;
				var zz = z * z2;
				var wx = w * x2;
				var wy = w * y2;
				var wz = w * z2;
				_this.self._00 = 1.0 - (yy + zz);
				_this.self._10 = xy - wz;
				_this.self._20 = xz + wy;
				_this.self._01 = xy + wz;
				_this.self._11 = 1.0 - (xx + zz);
				_this.self._21 = yz - wx;
				_this.self._02 = xz - wy;
				_this.self._12 = yz + wx;
				_this.self._22 = 1.0 - (xx + yy);
				_this.self._03 = 0.0;
				_this.self._13 = 0.0;
				_this.self._23 = 0.0;
				_this.self._30 = 0.0;
				_this.self._31 = 0.0;
				_this.self._32 = 0.0;
				_this.self._33 = 1.0;
				var x = sc.x;
				var y = sc.y;
				var z = sc.z;
				_this.self._00 *= x;
				_this.self._01 *= x;
				_this.self._02 *= x;
				_this.self._03 *= x;
				_this.self._10 *= y;
				_this.self._11 *= y;
				_this.self._12 *= y;
				_this.self._13 *= y;
				_this.self._20 *= z;
				_this.self._21 *= z;
				_this.self._22 *= z;
				_this.self._23 *= z;
				_this.self._30 = loc.x;
				_this.self._31 = loc.y;
				_this.self._32 = loc.z;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.V;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.P;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
				break;
			case "_transposeViewMatrix":
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.V;
				_this.self._00 = m1.self._00;
				_this.self._01 = m1.self._01;
				_this.self._02 = m1.self._02;
				_this.self._03 = m1.self._03;
				_this.self._10 = m1.self._10;
				_this.self._11 = m1.self._11;
				_this.self._12 = m1.self._12;
				_this.self._13 = m1.self._13;
				_this.self._20 = m1.self._20;
				_this.self._21 = m1.self._21;
				_this.self._22 = m1.self._22;
				_this.self._23 = m1.self._23;
				_this.self._30 = m1.self._30;
				_this.self._31 = m1.self._31;
				_this.self._32 = m1.self._32;
				_this.self._33 = m1.self._33;
				var _this = iron_object_Uniforms.helpMat;
				var f = _this.self._01;
				_this.self._01 = _this.self._10;
				_this.self._10 = f;
				f = _this.self._02;
				_this.self._02 = _this.self._20;
				_this.self._20 = f;
				f = _this.self._12;
				_this.self._12 = _this.self._21;
				_this.self._21 = f;
				m = iron_object_Uniforms.helpMat;
				break;
			case "_viewMatrix":
				m = camera.V;
				break;
			case "_viewProjectionMatrix":
				m = camera.VP;
				break;
			default:
				return false;
			}
		}
		g.setMatrix(location,m != null ? m.self : new kha_math_FastMatrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1));
		return true;
	} else if(c.type == "vec4") {
		var v = null;
		var _this = iron_object_Uniforms.helpVec;
		var w = 0;
		if(w == null) {
			w = 1.0;
		}
		_this.x = 0;
		_this.y = 0;
		_this.z = 0;
		_this.w = w;
		var _g = c.link;
		return false;
	} else if(c.type == "vec3") {
		var v = null;
		var _this = iron_object_Uniforms.helpVec;
		_this.x = 0;
		_this.y = 0;
		_this.z = 0;
		_this.w = 1.0;
		var _g = c.link;
		if(_g == null) {
			return false;
		} else {
			switch(_g) {
			case "_backgroundCol":
				if(camera.data.raw.clear_color != null) {
					var _this = iron_object_Uniforms.helpVec;
					var y = camera.data.raw.clear_color.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var z = camera.data.raw.clear_color.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN);
					_this.x = camera.data.raw.clear_color.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					_this.y = y;
					_this.z = z;
					_this.w = 1.0;
				}
				v = iron_object_Uniforms.helpVec;
				break;
			case "_cameraLook":
				var _this = new iron_math_Vec4(-camera.transform.world.self._20,-camera.transform.world.self._21,-camera.transform.world.self._22);
				var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
				if(n > 0.0) {
					var invN = 1.0 / n;
					_this.x *= invN;
					_this.y *= invN;
					_this.z *= invN;
				}
				iron_object_Uniforms.helpVec = _this;
				v = iron_object_Uniforms.helpVec;
				break;
			case "_cameraPosition":
				var _this = iron_object_Uniforms.helpVec;
				_this.x = camera.transform.world.self._30;
				_this.y = camera.transform.world.self._31;
				_this.z = camera.transform.world.self._32;
				_this.w = 1.0;
				v = iron_object_Uniforms.helpVec;
				break;
			case "_cameraRight":
				var _this = new iron_math_Vec4(camera.transform.world.self._00,camera.transform.world.self._01,camera.transform.world.self._02);
				var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
				if(n > 0.0) {
					var invN = 1.0 / n;
					_this.x *= invN;
					_this.y *= invN;
					_this.z *= invN;
				}
				iron_object_Uniforms.helpVec = _this;
				v = iron_object_Uniforms.helpVec;
				break;
			case "_cameraUp":
				var _this = new iron_math_Vec4(camera.transform.world.self._10,camera.transform.world.self._11,camera.transform.world.self._12);
				var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
				if(n > 0.0) {
					var invN = 1.0 / n;
					_this.x *= invN;
					_this.y *= invN;
					_this.z *= invN;
				}
				iron_object_Uniforms.helpVec = _this;
				v = iron_object_Uniforms.helpVec;
				break;
			case "_hosekSunDirection":
				var w = iron_Scene.active.world;
				if(w != null) {
					var _this = iron_object_Uniforms.helpVec;
					var y = w.raw.sun_direction.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var z = w.raw.sun_direction.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) > 0 ? w.raw.sun_direction.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) : 0;
					_this.x = w.raw.sun_direction.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN);
					_this.y = y;
					_this.z = z;
					_this.w = 1.0;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_lightDirection":
				if(light != null) {
					var _this = new iron_math_Vec4(light.V.self._02,light.V.self._12,light.V.self._22);
					var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
					if(n > 0.0) {
						var invN = 1.0 / n;
						_this.x *= invN;
						_this.y *= invN;
						_this.z *= invN;
					}
					iron_object_Uniforms.helpVec = _this;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_lightPosition":
				if(light != null) {
					var _this = iron_object_Uniforms.helpVec;
					_this.x = light.transform.world.self._30;
					_this.y = light.transform.world.self._31;
					_this.z = light.transform.world.self._32;
					_this.w = 1.0;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_pointColor":
				var point = iron_RenderPath.active.point;
				if(point != null) {
					var str = point.visible ? point.data.raw.strength : 0.0;
					var _this = iron_object_Uniforms.helpVec;
					var y = point.data.raw.color.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					var z = point.data.raw.color.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					_this.x = point.data.raw.color.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					_this.y = y;
					_this.z = z;
					_this.w = 1.0;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_pointPosition":
				var point = iron_RenderPath.active.point;
				if(point != null) {
					var _this = iron_object_Uniforms.helpVec;
					_this.x = point.transform.world.self._30;
					_this.y = point.transform.world.self._31;
					_this.z = point.transform.world.self._32;
					_this.w = 1.0;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_sunColor":
				var sun = iron_RenderPath.active.sun;
				if(sun != null) {
					var str = sun.visible ? sun.data.raw.strength : 0.0;
					var _this = iron_object_Uniforms.helpVec;
					var y = sun.data.raw.color.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					var z = sun.data.raw.color.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					_this.x = sun.data.raw.color.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN) * str;
					_this.y = y;
					_this.z = z;
					_this.w = 1.0;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			case "_sunDirection":
				var sun = iron_RenderPath.active.sun;
				if(sun != null) {
					var _this = new iron_math_Vec4(sun.V.self._02,sun.V.self._12,sun.V.self._22);
					var n = Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
					if(n > 0.0) {
						var invN = 1.0 / n;
						_this.x *= invN;
						_this.y *= invN;
						_this.z *= invN;
					}
					iron_object_Uniforms.helpVec = _this;
					v = iron_object_Uniforms.helpVec;
				}
				break;
			default:
				return false;
			}
		}
		if(v != null) {
			g.setFloat3(location,v.x,v.y,v.z);
		} else {
			g.setFloat3(location,0.0,0.0,0.0);
		}
		return true;
	} else if(c.type == "vec2") {
		var v = null;
		var _this = iron_object_Uniforms.helpVec;
		_this.x = 0;
		_this.y = 0;
		_this.z = 0;
		_this.w = 1.0;
		var _g = c.link;
		if(_g == null) {
			return false;
		} else {
			switch(_g) {
			case "_aspectRatio":
				v = iron_object_Uniforms.helpVec;
				v.x = iron_RenderPath.active.currentH / iron_RenderPath.active.currentW;
				v.y = iron_RenderPath.active.currentW / iron_RenderPath.active.currentH;
				v.x = v.x > 1.0 ? 1.0 : v.x;
				v.y = v.y > 1.0 ? 1.0 : v.y;
				break;
			case "_cameraPlane":
				v = iron_object_Uniforms.helpVec;
				v.x = camera.data.raw.near_plane;
				v.y = camera.data.raw.far_plane;
				break;
			case "_cameraPlaneProj":
				var near = camera.data.raw.near_plane;
				var far = camera.data.raw.far_plane;
				v = iron_object_Uniforms.helpVec;
				v.x = far / (far - near);
				v.y = -far * near / (far - near);
				break;
			case "_lightPlane":
				if(light != null) {
					v = iron_object_Uniforms.helpVec;
					v.x = light.data.raw.near_plane;
					v.y = light.data.raw.far_plane;
				}
				break;
			case "_lightPlaneProj":
				if(light != null) {
					var near = light.data.raw.near_plane;
					var far = light.data.raw.far_plane;
					var a = far + near;
					var b = far - near;
					var f2 = 2.0;
					var c1 = f2 * far * near;
					v = iron_object_Uniforms.helpVec;
					v.x = a / b;
					v.y = c1 / b;
				}
				break;
			case "_screenSize":
				v = iron_object_Uniforms.helpVec;
				v.x = iron_RenderPath.active.currentW;
				v.y = iron_RenderPath.active.currentH;
				break;
			case "_screenSizeInv":
				v = iron_object_Uniforms.helpVec;
				v.x = 1.0 / iron_RenderPath.active.currentW;
				v.y = 1.0 / iron_RenderPath.active.currentH;
				break;
			case "_shadowMapSize":
				if(light != null && light.data.raw.cast_shadow) {
					v = iron_object_Uniforms.helpVec;
					v.x = v.y = light.data.raw.shadowmap_size;
				}
				break;
			case "_vec2x":
				v = iron_object_Uniforms.helpVec;
				v.x = 1.0;
				v.y = 0.0;
				break;
			case "_vec2x2":
				v = iron_object_Uniforms.helpVec;
				v.x = 2.0;
				v.y = 0.0;
				break;
			case "_vec2x2Inv":
				v = iron_object_Uniforms.helpVec;
				v.x = 2.0 / iron_RenderPath.active.currentW;
				v.y = 0.0;
				break;
			case "_vec2xInv":
				v = iron_object_Uniforms.helpVec;
				v.x = 1.0 / iron_RenderPath.active.currentW;
				v.y = 0.0;
				break;
			case "_vec2y":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 1.0;
				break;
			case "_vec2y2":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 2.0;
				break;
			case "_vec2y2Inv":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 2.0 / iron_RenderPath.active.currentH;
				break;
			case "_vec2y3":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 3.0;
				break;
			case "_vec2y3Inv":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 3.0 / iron_RenderPath.active.currentH;
				break;
			case "_vec2yInv":
				v = iron_object_Uniforms.helpVec;
				v.x = 0.0;
				v.y = 1.0 / iron_RenderPath.active.currentH;
				break;
			case "_windowSize":
				v = iron_object_Uniforms.helpVec;
				v.x = kha_System.windowWidth();
				v.y = kha_System.windowHeight();
				break;
			default:
				return false;
			}
		}
		if(v != null) {
			g.setFloat2(location,v.x,v.y);
		} else {
			g.setFloat2(location,0.0,0.0);
		}
		return true;
	} else if(c.type == "float") {
		var f = null;
		var _g = c.link;
		if(_g == null) {
			return false;
		} else {
			switch(_g) {
			case "_aspectRatioF":
				f = iron_RenderPath.active.currentW / iron_RenderPath.active.currentH;
				break;
			case "_aspectRatioWindowF":
				f = kha_System.windowWidth() / kha_System.windowHeight();
				break;
			case "_envmapStrength":
				f = iron_Scene.active.world == null ? 0.0 : iron_Scene.active.world.probe.raw.strength;
				break;
			case "_fieldOfView":
				f = camera.data.raw.fov;
				break;
			case "_frameScale":
				f = iron_RenderPath.active.frameTime / iron_system_Time.get_delta();
				break;
			case "_pointShadowsBias":
				var point = iron_RenderPath.active.point;
				f = point == null ? 0.0 : point.data.raw.shadows_bias;
				break;
			case "_sunShadowsBias":
				var sun = iron_RenderPath.active.sun;
				f = sun == null ? 0.0 : sun.data.raw.shadows_bias;
				break;
			case "_time":
				f = kha_Scheduler.time();
				break;
			default:
				return false;
			}
		}
		g.setFloat(location,f != null ? f : 0);
		return true;
	} else if(c.type == "floats") {
		var fa = null;
		switch(c.link) {
		case "_cascadeData":
			var _g = 0;
			var _g1 = iron_Scene.active.lights;
			while(_g < _g1.length) {
				var l = _g1[_g];
				++_g;
				if(l.data.raw.type == "sun") {
					fa = l.getCascadeData();
					break;
				}
			}
			break;
		case "_envmapIrradiance":
			fa = iron_Scene.active.world == null ? iron_data_WorldData.getEmptyIrradiance() : iron_Scene.active.world.probe.irradiance;
			break;
		}
		if(fa != null) {
			g.setFloats(location,fa);
			return true;
		}
	} else if(c.type == "int") {
		var i = null;
		var _g = c.link;
		if(_g == null) {
			return false;
		} else if(_g == "_envmapNumMipmaps") {
			var w = iron_Scene.active.world;
			i = w != null ? w.probe.raw.radiance_mipmaps + 1 - 2 : 1;
		} else {
			return false;
		}
		g.setInt(location,i != null ? i : 0);
		return true;
	}
	return false;
};
iron_object_Uniforms.setObjectConstant = function(g,object,location,c) {
	if(c.link == null) {
		return;
	}
	var camera = iron_Scene.active.camera;
	var light = iron_RenderPath.active.light;
	if(c.type == "mat4") {
		var m = null;
		switch(c.link) {
		case "_biasLightWorldViewProjectionMatrix":
			if(light != null) {
				if(object == null) {
					var _this = iron_object_Uniforms.helpMat;
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					var _this = iron_object_Uniforms.helpMat;
					var m1 = object.transform.worldUnpack;
					_this.self._00 = m1.self._00;
					_this.self._01 = m1.self._01;
					_this.self._02 = m1.self._02;
					_this.self._03 = m1.self._03;
					_this.self._10 = m1.self._10;
					_this.self._11 = m1.self._11;
					_this.self._12 = m1.self._12;
					_this.self._13 = m1.self._13;
					_this.self._20 = m1.self._20;
					_this.self._21 = m1.self._21;
					_this.self._22 = m1.self._22;
					_this.self._23 = m1.self._23;
					_this.self._30 = m1.self._30;
					_this.self._31 = m1.self._31;
					_this.self._32 = m1.self._32;
					_this.self._33 = m1.self._33;
				}
				var _this = iron_object_Uniforms.helpMat;
				var m1 = light.VP;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = iron_object_Uniforms.biasMat;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
			}
			break;
		case "_biasLightWorldViewProjectionMatrixSun":
			var _g = 0;
			var _g1 = iron_Scene.active.lights;
			while(_g < _g1.length) {
				var l = _g1[_g];
				++_g;
				if(l.data.raw.type == "sun") {
					if(object == null) {
						var _this = iron_object_Uniforms.helpMat;
						_this.self._00 = 1.0;
						_this.self._01 = 0.0;
						_this.self._02 = 0.0;
						_this.self._03 = 0.0;
						_this.self._10 = 0.0;
						_this.self._11 = 1.0;
						_this.self._12 = 0.0;
						_this.self._13 = 0.0;
						_this.self._20 = 0.0;
						_this.self._21 = 0.0;
						_this.self._22 = 1.0;
						_this.self._23 = 0.0;
						_this.self._30 = 0.0;
						_this.self._31 = 0.0;
						_this.self._32 = 0.0;
						_this.self._33 = 1.0;
					} else {
						var _this1 = iron_object_Uniforms.helpMat;
						var m1 = object.transform.worldUnpack;
						_this1.self._00 = m1.self._00;
						_this1.self._01 = m1.self._01;
						_this1.self._02 = m1.self._02;
						_this1.self._03 = m1.self._03;
						_this1.self._10 = m1.self._10;
						_this1.self._11 = m1.self._11;
						_this1.self._12 = m1.self._12;
						_this1.self._13 = m1.self._13;
						_this1.self._20 = m1.self._20;
						_this1.self._21 = m1.self._21;
						_this1.self._22 = m1.self._22;
						_this1.self._23 = m1.self._23;
						_this1.self._30 = m1.self._30;
						_this1.self._31 = m1.self._31;
						_this1.self._32 = m1.self._32;
						_this1.self._33 = m1.self._33;
					}
					var _this2 = iron_object_Uniforms.helpMat;
					var m2 = l.VP;
					var a00 = _this2.self._00;
					var a01 = _this2.self._01;
					var a02 = _this2.self._02;
					var a03 = _this2.self._03;
					var a10 = _this2.self._10;
					var a11 = _this2.self._11;
					var a12 = _this2.self._12;
					var a13 = _this2.self._13;
					var a20 = _this2.self._20;
					var a21 = _this2.self._21;
					var a22 = _this2.self._22;
					var a23 = _this2.self._23;
					var a30 = _this2.self._30;
					var a31 = _this2.self._31;
					var a32 = _this2.self._32;
					var a33 = _this2.self._33;
					var b0 = m2.self._00;
					var b1 = m2.self._10;
					var b2 = m2.self._20;
					var b3 = m2.self._30;
					_this2.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this2.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this2.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this2.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m2.self._01;
					b1 = m2.self._11;
					b2 = m2.self._21;
					b3 = m2.self._31;
					_this2.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this2.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this2.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this2.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m2.self._02;
					b1 = m2.self._12;
					b2 = m2.self._22;
					b3 = m2.self._32;
					_this2.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this2.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this2.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this2.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					b0 = m2.self._03;
					b1 = m2.self._13;
					b2 = m2.self._23;
					b3 = m2.self._33;
					_this2.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
					_this2.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
					_this2.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
					_this2.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
					var _this3 = iron_object_Uniforms.helpMat;
					var m3 = iron_object_Uniforms.biasMat;
					var a001 = _this3.self._00;
					var a011 = _this3.self._01;
					var a021 = _this3.self._02;
					var a031 = _this3.self._03;
					var a101 = _this3.self._10;
					var a111 = _this3.self._11;
					var a121 = _this3.self._12;
					var a131 = _this3.self._13;
					var a201 = _this3.self._20;
					var a211 = _this3.self._21;
					var a221 = _this3.self._22;
					var a231 = _this3.self._23;
					var a301 = _this3.self._30;
					var a311 = _this3.self._31;
					var a321 = _this3.self._32;
					var a331 = _this3.self._33;
					var b01 = m3.self._00;
					var b11 = m3.self._10;
					var b21 = m3.self._20;
					var b31 = m3.self._30;
					_this3.self._00 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
					_this3.self._10 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
					_this3.self._20 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
					_this3.self._30 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
					b01 = m3.self._01;
					b11 = m3.self._11;
					b21 = m3.self._21;
					b31 = m3.self._31;
					_this3.self._01 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
					_this3.self._11 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
					_this3.self._21 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
					_this3.self._31 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
					b01 = m3.self._02;
					b11 = m3.self._12;
					b21 = m3.self._22;
					b31 = m3.self._32;
					_this3.self._02 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
					_this3.self._12 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
					_this3.self._22 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
					_this3.self._32 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
					b01 = m3.self._03;
					b11 = m3.self._13;
					b21 = m3.self._23;
					b31 = m3.self._33;
					_this3.self._03 = a001 * b01 + a011 * b11 + a021 * b21 + a031 * b31;
					_this3.self._13 = a101 * b01 + a111 * b11 + a121 * b21 + a131 * b31;
					_this3.self._23 = a201 * b01 + a211 * b11 + a221 * b21 + a231 * b31;
					_this3.self._33 = a301 * b01 + a311 * b11 + a321 * b21 + a331 * b31;
					m = iron_object_Uniforms.helpMat;
					break;
				}
			}
			break;
		case "_inverseWorldMatrix":
			var _this = iron_object_Uniforms.helpMat;
			var m1 = object.transform.worldUnpack;
			var a00 = m1.self._00;
			var a01 = m1.self._01;
			var a02 = m1.self._02;
			var a03 = m1.self._03;
			var a10 = m1.self._10;
			var a11 = m1.self._11;
			var a12 = m1.self._12;
			var a13 = m1.self._13;
			var a20 = m1.self._20;
			var a21 = m1.self._21;
			var a22 = m1.self._22;
			var a23 = m1.self._23;
			var a30 = m1.self._30;
			var a31 = m1.self._31;
			var a32 = m1.self._32;
			var a33 = m1.self._33;
			var b00 = a00 * a11 - a01 * a10;
			var b01 = a00 * a12 - a02 * a10;
			var b02 = a00 * a13 - a03 * a10;
			var b03 = a01 * a12 - a02 * a11;
			var b04 = a01 * a13 - a03 * a11;
			var b05 = a02 * a13 - a03 * a12;
			var b06 = a20 * a31 - a21 * a30;
			var b07 = a20 * a32 - a22 * a30;
			var b08 = a20 * a33 - a23 * a30;
			var b09 = a21 * a32 - a22 * a31;
			var b10 = a21 * a33 - a23 * a31;
			var b11 = a22 * a33 - a23 * a32;
			var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
			if(det == 0.0) {
				_this.self._00 = 1.0;
				_this.self._01 = 0.0;
				_this.self._02 = 0.0;
				_this.self._03 = 0.0;
				_this.self._10 = 0.0;
				_this.self._11 = 1.0;
				_this.self._12 = 0.0;
				_this.self._13 = 0.0;
				_this.self._20 = 0.0;
				_this.self._21 = 0.0;
				_this.self._22 = 1.0;
				_this.self._23 = 0.0;
				_this.self._30 = 0.0;
				_this.self._31 = 0.0;
				_this.self._32 = 0.0;
				_this.self._33 = 1.0;
			} else {
				det = 1.0 / det;
				_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
				_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
				_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
				_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
				_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
				_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
				_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
				_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
				_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
				_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
				_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
				_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
				_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
				_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
				_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
				_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
			}
			m = iron_object_Uniforms.helpMat;
			break;
		case "_lightWorldViewProjectionMatrix":
			if(light != null) {
				if(object == null) {
					var _this = iron_object_Uniforms.helpMat;
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					var _this = iron_object_Uniforms.helpMat;
					var m1 = object.transform.worldUnpack;
					_this.self._00 = m1.self._00;
					_this.self._01 = m1.self._01;
					_this.self._02 = m1.self._02;
					_this.self._03 = m1.self._03;
					_this.self._10 = m1.self._10;
					_this.self._11 = m1.self._11;
					_this.self._12 = m1.self._12;
					_this.self._13 = m1.self._13;
					_this.self._20 = m1.self._20;
					_this.self._21 = m1.self._21;
					_this.self._22 = m1.self._22;
					_this.self._23 = m1.self._23;
					_this.self._30 = m1.self._30;
					_this.self._31 = m1.self._31;
					_this.self._32 = m1.self._32;
					_this.self._33 = m1.self._33;
				}
				var _this = iron_object_Uniforms.helpMat;
				var m1 = light.VP;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
			}
			break;
		case "_lightWorldViewProjectionMatrixCylinder":
			if(light != null) {
				var _this = iron_object_Uniforms.helpMat;
				var m1 = object.transform.worldUnpack;
				_this.self._00 = m1.self._00;
				_this.self._01 = m1.self._01;
				_this.self._02 = m1.self._02;
				_this.self._03 = m1.self._03;
				_this.self._10 = m1.self._10;
				_this.self._11 = m1.self._11;
				_this.self._12 = m1.self._12;
				_this.self._13 = m1.self._13;
				_this.self._20 = m1.self._20;
				_this.self._21 = m1.self._21;
				_this.self._22 = m1.self._22;
				_this.self._23 = m1.self._23;
				_this.self._30 = m1.self._30;
				_this.self._31 = m1.self._31;
				_this.self._32 = m1.self._32;
				_this.self._33 = m1.self._33;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.V;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				iron_object_Uniforms.helpMat.self._00 = 1.0;
				iron_object_Uniforms.helpMat.self._20 = 0.0;
				iron_object_Uniforms.helpMat.self._01 = 0.0;
				iron_object_Uniforms.helpMat.self._21 = 0.0;
				iron_object_Uniforms.helpMat.self._02 = 0.0;
				iron_object_Uniforms.helpMat.self._22 = 1.0;
				var _this = iron_object_Uniforms.helpMat2;
				var m1 = camera.V;
				var a00 = m1.self._00;
				var a01 = m1.self._01;
				var a02 = m1.self._02;
				var a03 = m1.self._03;
				var a10 = m1.self._10;
				var a11 = m1.self._11;
				var a12 = m1.self._12;
				var a13 = m1.self._13;
				var a20 = m1.self._20;
				var a21 = m1.self._21;
				var a22 = m1.self._22;
				var a23 = m1.self._23;
				var a30 = m1.self._30;
				var a31 = m1.self._31;
				var a32 = m1.self._32;
				var a33 = m1.self._33;
				var b00 = a00 * a11 - a01 * a10;
				var b01 = a00 * a12 - a02 * a10;
				var b02 = a00 * a13 - a03 * a10;
				var b03 = a01 * a12 - a02 * a11;
				var b04 = a01 * a13 - a03 * a11;
				var b05 = a02 * a13 - a03 * a12;
				var b06 = a20 * a31 - a21 * a30;
				var b07 = a20 * a32 - a22 * a30;
				var b08 = a20 * a33 - a23 * a30;
				var b09 = a21 * a32 - a22 * a31;
				var b10 = a21 * a33 - a23 * a31;
				var b11 = a22 * a33 - a23 * a32;
				var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
				if(det == 0.0) {
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					det = 1.0 / det;
					_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
					_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
					_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
					_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
					_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
					_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
					_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
					_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
					_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
					_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
					_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
					_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
					_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
					_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
					_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
					_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
				}
				var _this = iron_object_Uniforms.helpMat;
				var m1 = iron_object_Uniforms.helpMat2;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = light.VP;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
			}
			break;
		case "_lightWorldViewProjectionMatrixSphere":
			if(light != null) {
				var _this = iron_object_Uniforms.helpMat;
				var m1 = object.transform.worldUnpack;
				_this.self._00 = m1.self._00;
				_this.self._01 = m1.self._01;
				_this.self._02 = m1.self._02;
				_this.self._03 = m1.self._03;
				_this.self._10 = m1.self._10;
				_this.self._11 = m1.self._11;
				_this.self._12 = m1.self._12;
				_this.self._13 = m1.self._13;
				_this.self._20 = m1.self._20;
				_this.self._21 = m1.self._21;
				_this.self._22 = m1.self._22;
				_this.self._23 = m1.self._23;
				_this.self._30 = m1.self._30;
				_this.self._31 = m1.self._31;
				_this.self._32 = m1.self._32;
				_this.self._33 = m1.self._33;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = camera.V;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				iron_object_Uniforms.helpMat.self._00 = 1.0;
				iron_object_Uniforms.helpMat.self._10 = 0.0;
				iron_object_Uniforms.helpMat.self._20 = 0.0;
				iron_object_Uniforms.helpMat.self._01 = 0.0;
				iron_object_Uniforms.helpMat.self._11 = 1.0;
				iron_object_Uniforms.helpMat.self._21 = 0.0;
				iron_object_Uniforms.helpMat.self._02 = 0.0;
				iron_object_Uniforms.helpMat.self._12 = 0.0;
				iron_object_Uniforms.helpMat.self._22 = 1.0;
				var _this = iron_object_Uniforms.helpMat2;
				var m1 = camera.V;
				var a00 = m1.self._00;
				var a01 = m1.self._01;
				var a02 = m1.self._02;
				var a03 = m1.self._03;
				var a10 = m1.self._10;
				var a11 = m1.self._11;
				var a12 = m1.self._12;
				var a13 = m1.self._13;
				var a20 = m1.self._20;
				var a21 = m1.self._21;
				var a22 = m1.self._22;
				var a23 = m1.self._23;
				var a30 = m1.self._30;
				var a31 = m1.self._31;
				var a32 = m1.self._32;
				var a33 = m1.self._33;
				var b00 = a00 * a11 - a01 * a10;
				var b01 = a00 * a12 - a02 * a10;
				var b02 = a00 * a13 - a03 * a10;
				var b03 = a01 * a12 - a02 * a11;
				var b04 = a01 * a13 - a03 * a11;
				var b05 = a02 * a13 - a03 * a12;
				var b06 = a20 * a31 - a21 * a30;
				var b07 = a20 * a32 - a22 * a30;
				var b08 = a20 * a33 - a23 * a30;
				var b09 = a21 * a32 - a22 * a31;
				var b10 = a21 * a33 - a23 * a31;
				var b11 = a22 * a33 - a23 * a32;
				var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
				if(det == 0.0) {
					_this.self._00 = 1.0;
					_this.self._01 = 0.0;
					_this.self._02 = 0.0;
					_this.self._03 = 0.0;
					_this.self._10 = 0.0;
					_this.self._11 = 1.0;
					_this.self._12 = 0.0;
					_this.self._13 = 0.0;
					_this.self._20 = 0.0;
					_this.self._21 = 0.0;
					_this.self._22 = 1.0;
					_this.self._23 = 0.0;
					_this.self._30 = 0.0;
					_this.self._31 = 0.0;
					_this.self._32 = 0.0;
					_this.self._33 = 1.0;
				} else {
					det = 1.0 / det;
					_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
					_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
					_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
					_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
					_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
					_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
					_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
					_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
					_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
					_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
					_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
					_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
					_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
					_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
					_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
					_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
				}
				var _this = iron_object_Uniforms.helpMat;
				var m1 = iron_object_Uniforms.helpMat2;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				var _this = iron_object_Uniforms.helpMat;
				var m1 = light.VP;
				var a00 = _this.self._00;
				var a01 = _this.self._01;
				var a02 = _this.self._02;
				var a03 = _this.self._03;
				var a10 = _this.self._10;
				var a11 = _this.self._11;
				var a12 = _this.self._12;
				var a13 = _this.self._13;
				var a20 = _this.self._20;
				var a21 = _this.self._21;
				var a22 = _this.self._22;
				var a23 = _this.self._23;
				var a30 = _this.self._30;
				var a31 = _this.self._31;
				var a32 = _this.self._32;
				var a33 = _this.self._33;
				var b0 = m1.self._00;
				var b1 = m1.self._10;
				var b2 = m1.self._20;
				var b3 = m1.self._30;
				_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._01;
				b1 = m1.self._11;
				b2 = m1.self._21;
				b3 = m1.self._31;
				_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._02;
				b1 = m1.self._12;
				b2 = m1.self._22;
				b3 = m1.self._32;
				_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				b0 = m1.self._03;
				b1 = m1.self._13;
				b2 = m1.self._23;
				b3 = m1.self._33;
				_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
				_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
				_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
				_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
				m = iron_object_Uniforms.helpMat;
			}
			break;
		case "_particleData":
			var mo = js_Boot.__cast(object , iron_object_MeshObject);
			if(mo.particleOwner != null && mo.particleOwner.particleSystems != null) {
				m = mo.particleOwner.particleSystems[mo.particleIndex].getData();
			}
			break;
		case "_worldMatrix":
			m = object.transform.worldUnpack;
			break;
		case "_worldViewMatrix":
			var _this = iron_object_Uniforms.helpMat;
			var m1 = object.transform.worldUnpack;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._03 = m1.self._03;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._13 = m1.self._13;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			_this.self._23 = m1.self._23;
			_this.self._30 = m1.self._30;
			_this.self._31 = m1.self._31;
			_this.self._32 = m1.self._32;
			_this.self._33 = m1.self._33;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.V;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			m = iron_object_Uniforms.helpMat;
			break;
		case "_worldViewProjectionMatrix":
			var _this = iron_object_Uniforms.helpMat;
			var m1 = object.transform.worldUnpack;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._03 = m1.self._03;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._13 = m1.self._13;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			_this.self._23 = m1.self._23;
			_this.self._30 = m1.self._30;
			_this.self._31 = m1.self._31;
			_this.self._32 = m1.self._32;
			_this.self._33 = m1.self._33;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.V;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.P;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			m = iron_object_Uniforms.helpMat;
			break;
		case "_worldViewProjectionMatrixCylinder":
			var t = object.transform;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = t.worldUnpack;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._03 = m1.self._03;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._13 = m1.self._13;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			_this.self._23 = m1.self._23;
			_this.self._30 = m1.self._30;
			_this.self._31 = m1.self._31;
			_this.self._32 = m1.self._32;
			_this.self._33 = m1.self._33;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.V;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			var x = t.scale.x;
			var y = t.scale.y;
			var z = t.scale.z;
			if(z == null) {
				z = 0.0;
			}
			if(y == null) {
				y = 0.0;
			}
			if(x == null) {
				x = 0.0;
			}
			var scl_x = x;
			var scl_y = y;
			var scl_z = z;
			var scl_w = 1.0;
			var f = t.scaleWorld;
			scl_x *= f;
			scl_y *= f;
			scl_z *= f;
			iron_object_Uniforms.helpMat.self._00 = scl_x;
			iron_object_Uniforms.helpMat.self._20 = 0.0;
			iron_object_Uniforms.helpMat.self._01 = 0.0;
			iron_object_Uniforms.helpMat.self._21 = 0.0;
			iron_object_Uniforms.helpMat.self._02 = 0.0;
			iron_object_Uniforms.helpMat.self._22 = scl_y;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.P;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			m = iron_object_Uniforms.helpMat;
			break;
		case "_worldViewProjectionMatrixSphere":
			var t = object.transform;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = t.worldUnpack;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._03 = m1.self._03;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._13 = m1.self._13;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			_this.self._23 = m1.self._23;
			_this.self._30 = m1.self._30;
			_this.self._31 = m1.self._31;
			_this.self._32 = m1.self._32;
			_this.self._33 = m1.self._33;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.V;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			var x = t.scale.x;
			var y = t.scale.y;
			var z = t.scale.z;
			if(z == null) {
				z = 0.0;
			}
			if(y == null) {
				y = 0.0;
			}
			if(x == null) {
				x = 0.0;
			}
			var scl_x = x;
			var scl_y = y;
			var scl_z = z;
			var scl_w = 1.0;
			var f = t.scaleWorld;
			scl_x *= f;
			scl_y *= f;
			scl_z *= f;
			iron_object_Uniforms.helpMat.self._00 = scl_x;
			iron_object_Uniforms.helpMat.self._10 = 0.0;
			iron_object_Uniforms.helpMat.self._20 = 0.0;
			iron_object_Uniforms.helpMat.self._01 = 0.0;
			iron_object_Uniforms.helpMat.self._11 = scl_y;
			iron_object_Uniforms.helpMat.self._21 = 0.0;
			iron_object_Uniforms.helpMat.self._02 = 0.0;
			iron_object_Uniforms.helpMat.self._12 = 0.0;
			iron_object_Uniforms.helpMat.self._22 = scl_z;
			var _this = iron_object_Uniforms.helpMat;
			var m1 = camera.P;
			var a00 = _this.self._00;
			var a01 = _this.self._01;
			var a02 = _this.self._02;
			var a03 = _this.self._03;
			var a10 = _this.self._10;
			var a11 = _this.self._11;
			var a12 = _this.self._12;
			var a13 = _this.self._13;
			var a20 = _this.self._20;
			var a21 = _this.self._21;
			var a22 = _this.self._22;
			var a23 = _this.self._23;
			var a30 = _this.self._30;
			var a31 = _this.self._31;
			var a32 = _this.self._32;
			var a33 = _this.self._33;
			var b0 = m1.self._00;
			var b1 = m1.self._10;
			var b2 = m1.self._20;
			var b3 = m1.self._30;
			_this.self._00 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._10 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._20 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._30 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._01;
			b1 = m1.self._11;
			b2 = m1.self._21;
			b3 = m1.self._31;
			_this.self._01 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._11 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._21 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._31 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._02;
			b1 = m1.self._12;
			b2 = m1.self._22;
			b3 = m1.self._32;
			_this.self._02 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._12 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._22 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._32 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			b0 = m1.self._03;
			b1 = m1.self._13;
			b2 = m1.self._23;
			b3 = m1.self._33;
			_this.self._03 = a00 * b0 + a01 * b1 + a02 * b2 + a03 * b3;
			_this.self._13 = a10 * b0 + a11 * b1 + a12 * b2 + a13 * b3;
			_this.self._23 = a20 * b0 + a21 * b1 + a22 * b2 + a23 * b3;
			_this.self._33 = a30 * b0 + a31 * b1 + a32 * b2 + a33 * b3;
			m = iron_object_Uniforms.helpMat;
			break;
		}
		var tmp = m == null;
		if(m == null && iron_object_Uniforms.externalMat4Links != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalMat4Links;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				m = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(m != null) {
					break;
				}
			}
		}
		if(m == null) {
			return;
		}
		g.setMatrix(location,m.self);
	} else if(c.type == "mat3") {
		var m = null;
		switch(c.link) {
		case "_normalMatrix":
			var _this = iron_object_Uniforms.helpMat;
			var m1 = object.transform.world;
			var a00 = m1.self._00;
			var a01 = m1.self._01;
			var a02 = m1.self._02;
			var a03 = m1.self._03;
			var a10 = m1.self._10;
			var a11 = m1.self._11;
			var a12 = m1.self._12;
			var a13 = m1.self._13;
			var a20 = m1.self._20;
			var a21 = m1.self._21;
			var a22 = m1.self._22;
			var a23 = m1.self._23;
			var a30 = m1.self._30;
			var a31 = m1.self._31;
			var a32 = m1.self._32;
			var a33 = m1.self._33;
			var b00 = a00 * a11 - a01 * a10;
			var b01 = a00 * a12 - a02 * a10;
			var b02 = a00 * a13 - a03 * a10;
			var b03 = a01 * a12 - a02 * a11;
			var b04 = a01 * a13 - a03 * a11;
			var b05 = a02 * a13 - a03 * a12;
			var b06 = a20 * a31 - a21 * a30;
			var b07 = a20 * a32 - a22 * a30;
			var b08 = a20 * a33 - a23 * a30;
			var b09 = a21 * a32 - a22 * a31;
			var b10 = a21 * a33 - a23 * a31;
			var b11 = a22 * a33 - a23 * a32;
			var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
			if(det == 0.0) {
				_this.self._00 = 1.0;
				_this.self._01 = 0.0;
				_this.self._02 = 0.0;
				_this.self._03 = 0.0;
				_this.self._10 = 0.0;
				_this.self._11 = 1.0;
				_this.self._12 = 0.0;
				_this.self._13 = 0.0;
				_this.self._20 = 0.0;
				_this.self._21 = 0.0;
				_this.self._22 = 1.0;
				_this.self._23 = 0.0;
				_this.self._30 = 0.0;
				_this.self._31 = 0.0;
				_this.self._32 = 0.0;
				_this.self._33 = 1.0;
			} else {
				det = 1.0 / det;
				_this.self._00 = (a11 * b11 - a12 * b10 + a13 * b09) * det;
				_this.self._01 = (a02 * b10 - a01 * b11 - a03 * b09) * det;
				_this.self._02 = (a31 * b05 - a32 * b04 + a33 * b03) * det;
				_this.self._03 = (a22 * b04 - a21 * b05 - a23 * b03) * det;
				_this.self._10 = (a12 * b08 - a10 * b11 - a13 * b07) * det;
				_this.self._11 = (a00 * b11 - a02 * b08 + a03 * b07) * det;
				_this.self._12 = (a32 * b02 - a30 * b05 - a33 * b01) * det;
				_this.self._13 = (a20 * b05 - a22 * b02 + a23 * b01) * det;
				_this.self._20 = (a10 * b10 - a11 * b08 + a13 * b06) * det;
				_this.self._21 = (a01 * b08 - a00 * b10 - a03 * b06) * det;
				_this.self._22 = (a30 * b04 - a31 * b02 + a33 * b00) * det;
				_this.self._23 = (a21 * b02 - a20 * b04 - a23 * b00) * det;
				_this.self._30 = (a11 * b07 - a10 * b09 - a12 * b06) * det;
				_this.self._31 = (a00 * b09 - a01 * b07 + a02 * b06) * det;
				_this.self._32 = (a31 * b01 - a30 * b03 - a32 * b00) * det;
				_this.self._33 = (a20 * b03 - a21 * b01 + a22 * b00) * det;
			}
			var _this = iron_object_Uniforms.helpMat;
			var f = _this.self._01;
			_this.self._01 = _this.self._10;
			_this.self._10 = f;
			f = _this.self._02;
			_this.self._02 = _this.self._20;
			_this.self._20 = f;
			f = _this.self._12;
			_this.self._12 = _this.self._21;
			_this.self._21 = f;
			var _this = iron_object_Uniforms.helpMat3;
			var m1 = iron_object_Uniforms.helpMat;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			m = iron_object_Uniforms.helpMat3;
			break;
		case "_viewMatrix3":
			var _this = iron_object_Uniforms.helpMat3;
			var m1 = camera.V;
			_this.self._00 = m1.self._00;
			_this.self._01 = m1.self._01;
			_this.self._02 = m1.self._02;
			_this.self._10 = m1.self._10;
			_this.self._11 = m1.self._11;
			_this.self._12 = m1.self._12;
			_this.self._20 = m1.self._20;
			_this.self._21 = m1.self._21;
			_this.self._22 = m1.self._22;
			m = iron_object_Uniforms.helpMat3;
			break;
		}
		if(m == null) {
			return;
		}
		g.setMatrix3(location,m.self);
	} else if(c.type == "vec4") {
		var v = null;
		var _this = iron_object_Uniforms.helpVec;
		_this.x = 0;
		_this.y = 0;
		_this.z = 0;
		_this.w = 1.0;
		if(v == null && iron_object_Uniforms.externalVec4Links != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalVec4Links;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				v = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(v != null) {
					break;
				}
			}
		}
		if(v == null) {
			return;
		}
		g.setFloat4(location,v.x,v.y,v.z,v.w);
	} else if(c.type == "vec3") {
		var v = null;
		var _this = iron_object_Uniforms.helpVec;
		_this.x = 0;
		_this.y = 0;
		_this.z = 0;
		_this.w = 1.0;
		switch(c.link) {
		case "_dim":
			var d = object.transform.dim;
			var s = object.transform.scale;
			var _this = iron_object_Uniforms.helpVec;
			_this.x = d.x / s.x;
			_this.y = d.y / s.y;
			_this.z = d.z / s.z;
			_this.w = 1.0;
			v = iron_object_Uniforms.helpVec;
			break;
		case "_halfDim":
			var d = object.transform.dim;
			var s = object.transform.scale;
			var _this = iron_object_Uniforms.helpVec;
			_this.x = d.x / s.x / 2;
			_this.y = d.y / s.y / 2;
			_this.z = d.z / s.z / 2;
			_this.w = 1.0;
			v = iron_object_Uniforms.helpVec;
			break;
		}
		if(v == null && iron_object_Uniforms.externalVec3Links != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalVec3Links;
			while(_g < _g1.length) {
				var f = _g1[_g];
				++_g;
				v = f(object,iron_object_Uniforms.currentMat(object),c.link);
				if(v != null) {
					break;
				}
			}
		}
		if(v == null) {
			return;
		}
		g.setFloat3(location,v.x,v.y,v.z);
	} else if(c.type == "vec2") {
		var vx = null;
		var vy = null;
		switch(c.link) {
		case "_morphDataDim":
			var mt = (js_Boot.__cast(object , iron_object_MeshObject)).morphTarget;
			vx = mt.numMorphTargets;
			vy = mt.morphBlockSize / mt.morphImageSize;
			break;
		case "_morphScaleOffset":
			var mt = (js_Boot.__cast(object , iron_object_MeshObject)).morphTarget;
			vx = mt.scaling;
			vy = mt.offset;
			break;
		case "_tilesheetOffset":
			var ts = (js_Boot.__cast(object , iron_object_MeshObject)).tilesheet;
			vx = ts.tileX;
			vy = ts.tileY;
			break;
		}
		if(vx == null && iron_object_Uniforms.externalVec2Links != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalVec2Links;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				var v = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(v != null) {
					vx = v.x;
					vy = v.y;
					break;
				}
			}
		}
		if(vx == null) {
			return;
		}
		g.setFloat2(location,vx,vy);
	} else if(c.type == "float") {
		var f = null;
		switch(c.link) {
		case "_objectInfoIndex":
			f = object.uid;
			break;
		case "_objectInfoMaterialIndex":
			f = iron_object_Uniforms.currentMat(object).uid;
			break;
		case "_objectInfoRandom":
			f = object.urandom;
			break;
		case "_posUnpack":
			f = iron_object_Uniforms.posUnpack != null ? iron_object_Uniforms.posUnpack : 1.0;
			break;
		case "_texUnpack":
			f = iron_object_Uniforms.texUnpack != null ? iron_object_Uniforms.texUnpack : 1.0;
			break;
		}
		if(f == null && iron_object_Uniforms.externalFloatLinks != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalFloatLinks;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				var res = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(res != null) {
					f = res;
					break;
				}
			}
		}
		if(f == null) {
			return;
		}
		g.setFloat(location,f);
	} else if(c.type == "floats") {
		var fa = null;
		switch(c.link) {
		case "_morphWeights":
			fa = (js_Boot.__cast(object , iron_object_MeshObject)).morphTarget.morphWeights;
			break;
		case "_skinBones":
			if(object.animation != null) {
				fa = (js_Boot.__cast(object.animation , iron_object_BoneAnimation)).skinBuffer;
			}
			break;
		}
		if(fa == null && iron_object_Uniforms.externalFloatsLinks != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalFloatsLinks;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				fa = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(fa != null) {
					break;
				}
			}
		}
		if(fa == null) {
			return;
		}
		g.setFloats(location,fa);
	} else if(c.type == "int") {
		var i = null;
		if(c.link == "_uid") {
			i = object.uid;
		}
		if(i == null && iron_object_Uniforms.externalIntLinks != null) {
			var _g = 0;
			var _g1 = iron_object_Uniforms.externalIntLinks;
			while(_g < _g1.length) {
				var fn = _g1[_g];
				++_g;
				var res = fn(object,iron_object_Uniforms.currentMat(object),c.link);
				if(res != null) {
					i = res;
					break;
				}
			}
		}
		if(i == null) {
			return;
		}
		g.setInt(location,i);
	}
};
iron_object_Uniforms.setMaterialConstants = function(g,context,materialContext) {
	if(materialContext.raw.bind_constants != null) {
		var _g = 0;
		var _g1 = materialContext.raw.bind_constants.length;
		while(_g < _g1) {
			var i = _g++;
			var matc = materialContext.raw.bind_constants[i];
			var pos = -1;
			var _g2 = 0;
			var _g3 = context.raw.constants.length;
			while(_g2 < _g3) {
				var i1 = _g2++;
				if(context.raw.constants[i1].name == matc.name) {
					pos = i1;
					break;
				}
			}
			if(pos == -1) {
				continue;
			}
			var c = context.raw.constants[pos];
			iron_object_Uniforms.setMaterialConstant(g,context.constants[pos],c,matc);
		}
	}
	if(materialContext.textures != null) {
		var _g = 0;
		var _g1 = materialContext.textures.length;
		while(_g < _g1) {
			var i = _g++;
			var mname = materialContext.raw.bind_textures[i].name;
			var _g2 = 0;
			var _g3 = context.textureUnits.length;
			while(_g2 < _g3) {
				var j = _g2++;
				var sname = context.raw.texture_units[j].name;
				if(mname == sname) {
					g.setTexture(context.textureUnits[j],materialContext.textures[i]);
					materialContext.setTextureParameters(g,i,context,j);
					break;
				}
			}
		}
	}
};
iron_object_Uniforms.currentMat = function(object) {
	if(object != null && ((object) instanceof iron_object_MeshObject)) {
		var mo = js_Boot.__cast(object , iron_object_MeshObject);
		return mo.materials[mo.materialIndex];
	}
	return null;
};
iron_object_Uniforms.setMaterialConstant = function(g,location,c,matc) {
	switch(c.type) {
	case "bool":
		g.setBool(location,matc.bool);
		break;
	case "float":
		g.setFloat(location,matc.float);
		break;
	case "int":
		g.setInt(location,matc.int);
		break;
	case "vec2":
		g.setFloat2(location,matc.vec2.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec2.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN));
		break;
	case "vec3":
		g.setFloat3(location,matc.vec3.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec3.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec3.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN));
		break;
	case "vec4":
		g.setFloat4(location,matc.vec4.getFloat32(0,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec4.getFloat32(4,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec4.getFloat32(8,kha_arrays_ByteArray.LITTLE_ENDIAN),matc.vec4.getFloat32(12,kha_arrays_ByteArray.LITTLE_ENDIAN));
		break;
	}
};
var iron_system_ArmPack = function() { };
$hxClasses["iron.system.ArmPack"] = iron_system_ArmPack;
iron_system_ArmPack.__name__ = true;
iron_system_ArmPack.read = function(i,key,parentKey) {
	if(parentKey == null) {
		parentKey = "";
	}
	if(key == null) {
		key = "";
	}
	try {
		var b = i.readByte();
		switch(b) {
		case 192:
			return null;
		case 194:
			return false;
		case 195:
			return true;
		case 196:
			return i.read(i.readByte());
		case 197:
			return i.read(i.readUInt16());
		case 198:
			return i.read(i.readInt32());
		case 202:
			return i.readFloat();
		case 204:
			return i.readByte();
		case 205:
			return i.readUInt16();
		case 206:
			return i.readInt32();
		case 208:
			return i.readInt8();
		case 209:
			return i.readInt16();
		case 210:
			return i.readInt32();
		case 217:
			return i.readString(i.readByte());
		case 218:
			return i.readString(i.readUInt16());
		case 219:
			return i.readString(i.readInt32());
		case 220:
			return iron_system_ArmPack.readArray(i,i.readUInt16(),key,parentKey);
		case 221:
			return iron_system_ArmPack.readArray(i,i.readInt32(),key,parentKey);
		case 222:
			return iron_system_ArmPack.readMap(i,i.readUInt16(),key,parentKey);
		case 223:
			return iron_system_ArmPack.readMap(i,i.readInt32(),key,parentKey);
		default:
			if(b < 128) {
				return b;
			} else if(b < 144) {
				return iron_system_ArmPack.readMap(i,15 & b,key,parentKey);
			} else if(b < 160) {
				return iron_system_ArmPack.readArray(i,15 & b,key,parentKey);
			} else if(b < 192) {
				return i.readString(31 & b);
			} else if(b > 223) {
				return -256 | b;
			}
		}
	} catch( _g ) {
		if(!((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
			throw _g;
		}
	}
	return null;
};
iron_system_ArmPack.readArray = function(i,length,key,parentKey) {
	if(parentKey == null) {
		parentKey = "";
	}
	if(key == null) {
		key = "";
	}
	var b = i.readByte();
	i.set_position(i.pos - 1);
	if(b == 202) {
		i.set_position(i.pos + 1);
		var a = kha_arrays_Float32Array._new(length);
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var x = _g++;
			var v = i.readFloat();
			a.setFloat32(x * 4,v,true);
		}
		return a;
	} else if(b == 210) {
		i.set_position(i.pos + 1);
		var a = kha_arrays_Uint32Array._new(length);
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var x = _g++;
			a.setUint32(x * 4,i.readInt32(),kha_arrays_ByteArray.LITTLE_ENDIAN);
			var tmp = x * 4;
		}
		return a;
	} else if(b == 209) {
		i.set_position(i.pos + 1);
		var a = kha_arrays_Int16Array._new(length);
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var x = _g++;
			a.setInt16(x * 2,i.readInt16(),kha_arrays_ByteArray.LITTLE_ENDIAN);
			var tmp = x * 2;
		}
		return a;
	} else {
		var a = [];
		var _g = 0;
		var _g1 = length;
		while(_g < _g1) {
			var x = _g++;
			a.push(iron_system_ArmPack.read(i,key,parentKey));
		}
		return a;
	}
};
iron_system_ArmPack.readMap = function(i,length,key,parentKey) {
	if(parentKey == null) {
		parentKey = "";
	}
	if(key == null) {
		key = "";
	}
	var out = { };
	var _g = 0;
	var _g1 = length;
	while(_g < _g1) {
		var n = _g++;
		var k = Std.string(iron_system_ArmPack.read(i));
		var v = iron_system_ArmPack.read(i,k,key);
		out[k] = v;
	}
	return out;
};
var iron_system_Audio = function() { };
$hxClasses["iron.system.Audio"] = iron_system_Audio;
iron_system_Audio.__name__ = true;
iron_system_Audio.play = function(sound,loop,stream) {
	if(stream == null) {
		stream = false;
	}
	if(loop == null) {
		loop = false;
	}
	if(stream && sound.compressedData != null) {
		return kha_audio2_Audio1.stream(sound,loop);
	} else if(sound.uncompressedData != null) {
		return kha_audio2_Audio1.play(sound,loop);
	} else {
		return null;
	}
};
var iron_system_Input = function() { };
$hxClasses["iron.system.Input"] = iron_system_Input;
iron_system_Input.__name__ = true;
iron_system_Input.reset = function() {
	iron_system_Input.occupied = false;
	if(iron_system_Input.mouse != null) {
		iron_system_Input.mouse.reset();
	}
	if(iron_system_Input.pen != null) {
		iron_system_Input.pen.reset();
	}
	if(iron_system_Input.keyboard != null) {
		iron_system_Input.keyboard.reset();
	}
	var _g = 0;
	var _g1 = iron_system_Input.gamepads;
	while(_g < _g1.length) {
		var gamepad = _g1[_g];
		++_g;
		gamepad.reset();
	}
};
iron_system_Input.endFrame = function() {
	if(iron_system_Input.mouse != null) {
		iron_system_Input.mouse.endFrame();
	}
	if(iron_system_Input.pen != null) {
		iron_system_Input.pen.endFrame();
	}
	if(iron_system_Input.keyboard != null) {
		iron_system_Input.keyboard.endFrame();
	}
	var _g = 0;
	var _g1 = iron_system_Input.gamepads;
	while(_g < _g1.length) {
		var gamepad = _g1[_g];
		++_g;
		gamepad.endFrame();
	}
	if(iron_system_Input.virtualButtons != null) {
		var h = iron_system_Input.virtualButtons.h;
		var vb_h = h;
		var vb_keys = Object.keys(h);
		var vb_length = vb_keys.length;
		var vb_current = 0;
		while(vb_current < vb_length) {
			var vb = vb_h[vb_keys[vb_current++]];
			vb.started = vb.released = false;
		}
	}
};
iron_system_Input.getMouse = function() {
	if(!iron_system_Input.registered) {
		iron_system_Input.registered = true;
		iron_App.notifyOnEndFrame(iron_system_Input.endFrame);
		iron_App.notifyOnReset(iron_system_Input.reset);
		kha_System.notifyOnApplicationState(function() {
			iron_system_Input.getMouse().reset();
		},null,null,null,null);
	}
	if(iron_system_Input.mouse == null) {
		iron_system_Input.mouse = new iron_system_Mouse();
	}
	return iron_system_Input.mouse;
};
iron_system_Input.getKeyboard = function() {
	if(!iron_system_Input.registered) {
		iron_system_Input.registered = true;
		iron_App.notifyOnEndFrame(iron_system_Input.endFrame);
		iron_App.notifyOnReset(iron_system_Input.reset);
		kha_System.notifyOnApplicationState(function() {
			iron_system_Input.getMouse().reset();
		},null,null,null,null);
	}
	if(iron_system_Input.keyboard == null) {
		iron_system_Input.keyboard = new iron_system_Keyboard();
	}
	return iron_system_Input.keyboard;
};
iron_system_Input.getGamepad = function(i) {
	if(i == null) {
		i = 0;
	}
	if(i >= 4) {
		return null;
	}
	if(!iron_system_Input.registered) {
		iron_system_Input.registered = true;
		iron_App.notifyOnEndFrame(iron_system_Input.endFrame);
		iron_App.notifyOnReset(iron_system_Input.reset);
		kha_System.notifyOnApplicationState(function() {
			iron_system_Input.getMouse().reset();
		},null,null,null,null);
	}
	while(iron_system_Input.gamepads.length <= i) iron_system_Input.gamepads.push(new iron_system_Gamepad(iron_system_Input.gamepads.length));
	if(iron_system_Input.gamepads[i].connected) {
		return iron_system_Input.gamepads[i];
	} else {
		return null;
	}
};
var iron_system_VirtualButton = function() {
	this.down = false;
	this.released = false;
	this.started = false;
};
$hxClasses["iron.system.VirtualButton"] = iron_system_VirtualButton;
iron_system_VirtualButton.__name__ = true;
iron_system_VirtualButton.prototype = {
	__class__: iron_system_VirtualButton
};
var iron_system_VirtualInput = function() {
	this.virtualButtons = null;
};
$hxClasses["iron.system.VirtualInput"] = iron_system_VirtualInput;
iron_system_VirtualInput.__name__ = true;
iron_system_VirtualInput.prototype = {
	downVirtual: function(button) {
		if(this.virtualButtons != null) {
			var vb = this.virtualButtons.h[button];
			if(vb != null) {
				vb.down = true;
				vb.started = true;
			}
		}
	}
	,upVirtual: function(button) {
		if(this.virtualButtons != null) {
			var vb = this.virtualButtons.h[button];
			if(vb != null) {
				vb.down = false;
				vb.released = true;
			}
		}
	}
	,__class__: iron_system_VirtualInput
};
var iron_system_Mouse = function() {
	this.lastY = -1.0;
	this.lastX = -1.0;
	this.locked = false;
	this.wheelDelta = 0;
	this.movementY = 0.0;
	this.movementX = 0.0;
	this.moved = false;
	this.y = 0.0;
	this.x = 0.0;
	this.buttonsReleased = [false,false,false];
	this.buttonsStarted = [false,false,false];
	this.buttonsDown = [false,false,false];
	iron_system_VirtualInput.call(this);
	kha_input_Mouse.get().notify($bind(this,this.downListener),$bind(this,this.upListener),$bind(this,this.moveListener),$bind(this,this.wheelListener));
};
$hxClasses["iron.system.Mouse"] = iron_system_Mouse;
iron_system_Mouse.__name__ = true;
iron_system_Mouse.__super__ = iron_system_VirtualInput;
iron_system_Mouse.prototype = $extend(iron_system_VirtualInput.prototype,{
	endFrame: function() {
		var tmp = this.buttonsStarted[1] = this.buttonsStarted[2] = false;
		this.buttonsStarted[0] = tmp;
		var tmp = this.buttonsReleased[1] = this.buttonsReleased[2] = false;
		this.buttonsReleased[0] = tmp;
		this.moved = false;
		this.movementX = 0;
		this.movementY = 0;
		this.wheelDelta = 0;
	}
	,reset: function() {
		var tmp = this.buttonsDown[1] = this.buttonsDown[2] = false;
		this.buttonsDown[0] = tmp;
		this.endFrame();
	}
	,buttonIndex: function(button) {
		if(button == "left") {
			return 0;
		} else if(button == "right") {
			return 1;
		} else {
			return 2;
		}
	}
	,down: function(button) {
		if(button == null) {
			button = "left";
		}
		return this.buttonsDown[this.buttonIndex(button)];
	}
	,downListener: function(index,x,y) {
		this.buttonsDown[index] = true;
		this.buttonsStarted[index] = true;
		this.x = x;
		this.y = y;
		if(index == 0) {
			this.lastX = x;
			this.lastY = y;
		}
		this.downVirtual(iron_system_Mouse.buttons[index]);
	}
	,upListener: function(index,x,y) {
		this.buttonsDown[index] = false;
		this.buttonsReleased[index] = true;
		this.x = x;
		this.y = y;
		this.upVirtual(iron_system_Mouse.buttons[index]);
	}
	,moveListener: function(x,y,movementX,movementY) {
		if(this.lastX == -1.0 && this.lastY == -1.0) {
			this.lastX = x;
			this.lastY = y;
		}
		if(this.locked) {
			this.movementX += movementX;
			this.movementY += movementY;
		} else {
			this.movementX += x - this.lastX;
			this.movementY += y - this.lastY;
		}
		this.lastX = x;
		this.lastY = y;
		this.x = x;
		this.y = y;
		this.moved = true;
	}
	,wheelListener: function(delta) {
		this.wheelDelta = delta;
	}
	,__class__: iron_system_Mouse
});
var iron_system_Pen = function() {
	this.lastY = -1.0;
	this.lastX = -1.0;
	this.connected = false;
	this.pressure = 0.0;
	this.movementY = 0.0;
	this.movementX = 0.0;
	this.moved = false;
	this.y = 0.0;
	this.x = 0.0;
	this.buttonsReleased = [false];
	this.buttonsStarted = [false];
	this.buttonsDown = [false];
	iron_system_VirtualInput.call(this);
	kha_input_Pen.get().notify($bind(this,this.downListener),$bind(this,this.upListener),$bind(this,this.moveListener));
};
$hxClasses["iron.system.Pen"] = iron_system_Pen;
iron_system_Pen.__name__ = true;
iron_system_Pen.__super__ = iron_system_VirtualInput;
iron_system_Pen.prototype = $extend(iron_system_VirtualInput.prototype,{
	endFrame: function() {
		this.buttonsStarted[0] = false;
		this.buttonsReleased[0] = false;
		this.moved = false;
		this.movementX = 0;
		this.movementY = 0;
	}
	,reset: function() {
		this.buttonsDown[0] = false;
		this.endFrame();
	}
	,downListener: function(x,y,pressure) {
		this.buttonsDown[0] = true;
		this.buttonsStarted[0] = true;
		this.x = x;
		this.y = y;
		this.pressure = pressure;
	}
	,upListener: function(x,y,pressure) {
		this.buttonsDown[0] = false;
		this.buttonsReleased[0] = true;
		this.x = x;
		this.y = y;
		this.pressure = pressure;
	}
	,moveListener: function(x,y,pressure) {
		if(this.lastX == -1.0 && this.lastY == -1.0) {
			this.lastX = x;
			this.lastY = y;
		}
		this.movementX = x - this.lastX;
		this.movementY = y - this.lastY;
		this.lastX = x;
		this.lastY = y;
		this.x = x;
		this.y = y;
		this.moved = true;
		this.pressure = pressure;
		this.connected = true;
	}
	,__class__: iron_system_Pen
});
var iron_system_Keyboard = function() {
	this.repeatTime = 0.0;
	this.repeatKey = false;
	this.keysFrame = [];
	this.keysReleased = new haxe_ds_StringMap();
	this.keysStarted = new haxe_ds_StringMap();
	this.keysDown = new haxe_ds_StringMap();
	iron_system_VirtualInput.call(this);
	this.reset();
	kha_input_Keyboard.get().notify($bind(this,this.downListener),$bind(this,this.upListener),$bind(this,this.pressListener));
};
$hxClasses["iron.system.Keyboard"] = iron_system_Keyboard;
iron_system_Keyboard.__name__ = true;
iron_system_Keyboard.keyCode = function(key) {
	switch(key) {
	case 1:
		return "back";
	case 8:
		return "backspace";
	case 9:
		return "tab";
	case 13:
		return "enter";
	case 16:
		return "shift";
	case 17:
		return "control";
	case 18:
		return "alt";
	case 27:
		return "escape";
	case 32:
		return "space";
	case 37:
		return "left";
	case 38:
		return "up";
	case 39:
		return "right";
	case 40:
		return "down";
	case 46:
		return "delete";
	case 48:
		return "0";
	case 49:
		return "1";
	case 50:
		return "2";
	case 51:
		return "3";
	case 52:
		return "4";
	case 53:
		return "5";
	case 54:
		return "6";
	case 55:
		return "7";
	case 56:
		return "8";
	case 57:
		return "9";
	case 58:
		return ":";
	case 59:
		return ";";
	case 60:
		return "<";
	case 61:
		return "=";
	case 62:
		return ">";
	case 63:
		return "?";
	case 64:
		return "@";
	case 91:
		return "win";
	case 96:
		return "0";
	case 97:
		return "1";
	case 98:
		return "2";
	case 99:
		return "3";
	case 100:
		return "4";
	case 101:
		return "5";
	case 102:
		return "6";
	case 103:
		return "7";
	case 104:
		return "8";
	case 105:
		return "9";
	case 106:
		return "*";
	case 107:
		return "+";
	case 109:
		return "-";
	case 110:
		return ".";
	case 111:
		return "/";
	case 112:
		return "f1";
	case 113:
		return "f2";
	case 114:
		return "f3";
	case 115:
		return "f4";
	case 116:
		return "f5";
	case 117:
		return "f6";
	case 118:
		return "f7";
	case 119:
		return "f8";
	case 120:
		return "f9";
	case 121:
		return "f10";
	case 122:
		return "f11";
	case 123:
		return "f12";
	case 161:
		return "!";
	case 162:
		return "\"";
	case 163:
		return "#";
	case 164:
		return "$";
	case 165:
		return "%";
	case 166:
		return "&";
	case 167:
		return "_";
	case 168:
		return "(";
	case 169:
		return ")";
	case 170:
		return "*";
	case 171:
		return "+";
	case 172:
		return "|";
	case 173:
		return "-";
	case 174:
		return "{";
	case 175:
		return "}";
	case 176:
		return "~";
	case 188:
		return ",";
	case 190:
		return ".";
	case 191:
		return "/";
	case 192:
		return "`";
	case 219:
		return "[";
	case 220:
		return "\\";
	case 221:
		return "]";
	default:
		return String.fromCodePoint(key).toLowerCase();
	}
};
iron_system_Keyboard.__super__ = iron_system_VirtualInput;
iron_system_Keyboard.prototype = $extend(iron_system_VirtualInput.prototype,{
	endFrame: function() {
		if(this.keysFrame.length > 0) {
			var _g = 0;
			var _g1 = this.keysFrame;
			while(_g < _g1.length) {
				var s = _g1[_g];
				++_g;
				this.keysStarted.h[s] = false;
				this.keysReleased.h[s] = false;
			}
			this.keysFrame.splice(0,this.keysFrame.length);
		}
		if(kha_Scheduler.time() - this.repeatTime > 0.05) {
			this.repeatTime = kha_Scheduler.time();
			this.repeatKey = true;
		} else {
			this.repeatKey = false;
		}
	}
	,reset: function() {
		var _g = 0;
		var _g1 = iron_system_Keyboard.keys;
		while(_g < _g1.length) {
			var s = _g1[_g];
			++_g;
			this.keysDown.h[s] = false;
			this.keysStarted.h[s] = false;
			this.keysReleased.h[s] = false;
		}
		this.endFrame();
	}
	,down: function(key) {
		return this.keysDown.h[key];
	}
	,downListener: function(code) {
		var s = iron_system_Keyboard.keyCode(code);
		this.keysFrame.push(s);
		this.keysStarted.h[s] = true;
		this.keysDown.h[s] = true;
		this.repeatTime = kha_Scheduler.time() + 0.4;
		this.downVirtual(s);
	}
	,upListener: function(code) {
		var s = iron_system_Keyboard.keyCode(code);
		this.keysFrame.push(s);
		this.keysReleased.h[s] = true;
		this.keysDown.h[s] = false;
		this.upVirtual(s);
	}
	,pressListener: function(char) {
	}
	,__class__: iron_system_Keyboard
});
var iron_system_GamepadStick = function() {
	this.movementY = 0.0;
	this.movementX = 0.0;
	this.moved = false;
	this.lastY = 0.0;
	this.lastX = 0.0;
	this.y = 0.0;
	this.x = 0.0;
};
$hxClasses["iron.system.GamepadStick"] = iron_system_GamepadStick;
iron_system_GamepadStick.__name__ = true;
iron_system_GamepadStick.prototype = {
	__class__: iron_system_GamepadStick
};
var iron_system_Gamepad = function(i,virtual) {
	if(virtual == null) {
		virtual = false;
	}
	this.num = 0;
	this.connected = false;
	this.rightStick = new iron_system_GamepadStick();
	this.leftStick = new iron_system_GamepadStick();
	this.buttonsFrame = [];
	this.buttonsReleased = [];
	this.buttonsStarted = [];
	this.buttonsDown = [];
	iron_system_VirtualInput.call(this);
	var _g = 0;
	var _g1 = iron_system_Gamepad.buttons;
	while(_g < _g1.length) {
		var s = _g1[_g];
		++_g;
		this.buttonsDown.push(0.0);
		this.buttonsStarted.push(false);
		this.buttonsReleased.push(false);
	}
	this.num = i;
	this.reset();
	if(virtual) {
		this.connected = true;
	} else {
		this.connect();
	}
};
$hxClasses["iron.system.Gamepad"] = iron_system_Gamepad;
iron_system_Gamepad.__name__ = true;
iron_system_Gamepad.__super__ = iron_system_VirtualInput;
iron_system_Gamepad.prototype = $extend(iron_system_VirtualInput.prototype,{
	connect: function() {
		var gamepad = kha_input_Gamepad.get(this.num);
		if(gamepad == null) {
			return;
		}
		this.connected = true;
		gamepad.notify($bind(this,this.axisListener),$bind(this,this.buttonListener));
	}
	,endFrame: function() {
		if(this.buttonsFrame.length > 0) {
			var _g = 0;
			var _g1 = this.buttonsFrame;
			while(_g < _g1.length) {
				var i = _g1[_g];
				++_g;
				this.buttonsStarted[i] = false;
				this.buttonsReleased[i] = false;
			}
			this.buttonsFrame.splice(0,this.buttonsFrame.length);
		}
		this.leftStick.moved = false;
		this.leftStick.movementX = 0;
		this.leftStick.movementY = 0;
		this.rightStick.moved = false;
		this.rightStick.movementX = 0;
		this.rightStick.movementY = 0;
	}
	,reset: function() {
		var _g = 0;
		var _g1 = this.buttonsDown.length;
		while(_g < _g1) {
			var i = _g++;
			this.buttonsDown[i] = 0.0;
			this.buttonsStarted[i] = false;
			this.buttonsReleased[i] = false;
		}
		this.endFrame();
	}
	,buttonIndex: function(button) {
		var _g = 0;
		var _g1 = iron_system_Gamepad.buttons.length;
		while(_g < _g1) {
			var i = _g++;
			if(iron_system_Gamepad.buttons[i] == button) {
				return i;
			}
		}
		return 0;
	}
	,down: function(button) {
		return this.buttonsDown[this.buttonIndex(button)];
	}
	,axisListener: function(axis,value) {
		var stick = axis <= 1 ? this.leftStick : this.rightStick;
		if(axis == 0 || axis == 2) {
			stick.lastX = stick.x;
			stick.x = value;
			stick.movementX = stick.x - stick.lastX;
		} else if(axis == 1 || axis == 3) {
			stick.lastY = stick.y;
			stick.y = value;
			stick.movementY = stick.y - stick.lastY;
		}
		stick.moved = true;
	}
	,buttonListener: function(button,value) {
		this.buttonsFrame.push(button);
		this.buttonsDown[button] = value;
		if(value > 0) {
			this.buttonsStarted[button] = true;
		} else {
			this.buttonsReleased[button] = true;
		}
		if(value == 0.0) {
			this.upVirtual(iron_system_Gamepad.buttons[button]);
		} else if(value == 1.0) {
			this.downVirtual(iron_system_Gamepad.buttons[button]);
		}
	}
	,__class__: iron_system_Gamepad
});
var iron_system_Time = function() { };
$hxClasses["iron.system.Time"] = iron_system_Time;
iron_system_Time.__name__ = true;
iron_system_Time.__properties__ = {get_delta:"get_delta"};
iron_system_Time.get_delta = function() {
	if(iron_system_Time.frequency == null) {
		iron_system_Time.initFrequency();
	}
	return 1 / iron_system_Time.frequency * iron_system_Time.scale;
};
iron_system_Time.initFrequency = function() {
	iron_system_Time.frequency = kha_Display.get_primary() != null ? kha_Display.get_primary().get_frequency() : 60;
};
iron_system_Time.update = function() {
	iron_system_Time.realDelta = kha_Scheduler.realTime() - iron_system_Time.last;
	iron_system_Time.last = kha_Scheduler.realTime();
};
var js_Boot = function() { };
$hxClasses["js.Boot"] = js_Boot;
js_Boot.__name__ = true;
js_Boot.getClass = function(o) {
	if(o == null) {
		return null;
	} else if(((o) instanceof Array)) {
		return Array;
	} else {
		var cl = o.__class__;
		if(cl != null) {
			return cl;
		}
		var name = js_Boot.__nativeClassName(o);
		if(name != null) {
			return js_Boot.__resolveNativeClass(name);
		}
		return null;
	}
};
js_Boot.__string_rec = function(o,s) {
	if(o == null) {
		return "null";
	}
	if(s.length >= 5) {
		return "<...>";
	}
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) {
		t = "object";
	}
	switch(t) {
	case "function":
		return "<function>";
	case "object":
		if(o.__enum__) {
			var e = $hxEnums[o.__enum__];
			var con = e.__constructs__[o._hx_index];
			var n = con._hx_name;
			if(con.__params__) {
				s = s + "\t";
				return n + "(" + ((function($this) {
					var $r;
					var _g = [];
					{
						var _g1 = 0;
						var _g2 = con.__params__;
						while(true) {
							if(!(_g1 < _g2.length)) {
								break;
							}
							var p = _g2[_g1];
							_g1 = _g1 + 1;
							_g.push(js_Boot.__string_rec(o[p],s));
						}
					}
					$r = _g;
					return $r;
				}(this))).join(",") + ")";
			} else {
				return n;
			}
		}
		if(((o) instanceof Array)) {
			var str = "[";
			s += "\t";
			var _g = 0;
			var _g1 = o.length;
			while(_g < _g1) {
				var i = _g++;
				str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
			}
			str += "]";
			return str;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( _g ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
			var s2 = o.toString();
			if(s2 != "[object Object]") {
				return s2;
			}
		}
		var str = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		var k = null;
		for( k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str.length != 2) {
			str += ", \n";
		}
		str += s + k + " : " + js_Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str += "\n" + s + "}";
		return str;
	case "string":
		return o;
	default:
		return String(o);
	}
};
js_Boot.__interfLoop = function(cc,cl) {
	if(cc == null) {
		return false;
	}
	if(cc == cl) {
		return true;
	}
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g = 0;
		var _g1 = intf.length;
		while(_g < _g1) {
			var i = _g++;
			var i1 = intf[i];
			if(i1 == cl || js_Boot.__interfLoop(i1,cl)) {
				return true;
			}
		}
	}
	return js_Boot.__interfLoop(cc.__super__,cl);
};
js_Boot.__instanceof = function(o,cl) {
	if(cl == null) {
		return false;
	}
	switch(cl) {
	case Array:
		return ((o) instanceof Array);
	case Bool:
		return typeof(o) == "boolean";
	case Dynamic:
		return o != null;
	case Float:
		return typeof(o) == "number";
	case Int:
		if(typeof(o) == "number") {
			return ((o | 0) === o);
		} else {
			return false;
		}
		break;
	case String:
		return typeof(o) == "string";
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(js_Boot.__downcastCheck(o,cl)) {
					return true;
				}
			} else if(typeof(cl) == "object" && js_Boot.__isNativeObj(cl)) {
				if(((o) instanceof cl)) {
					return true;
				}
			}
		} else {
			return false;
		}
		if(cl == Class ? o.__name__ != null : false) {
			return true;
		}
		if(cl == Enum ? o.__ename__ != null : false) {
			return true;
		}
		return o.__enum__ != null ? $hxEnums[o.__enum__] == cl : false;
	}
};
js_Boot.__downcastCheck = function(o,cl) {
	if(!((o) instanceof cl)) {
		if(cl.__isInterface__) {
			return js_Boot.__interfLoop(js_Boot.getClass(o),cl);
		} else {
			return false;
		}
	} else {
		return true;
	}
};
js_Boot.__cast = function(o,t) {
	if(o == null || js_Boot.__instanceof(o,t)) {
		return o;
	} else {
		throw haxe_Exception.thrown("Cannot cast " + Std.string(o) + " to " + Std.string(t));
	}
};
js_Boot.__nativeClassName = function(o) {
	var name = js_Boot.__toStr.call(o).slice(8,-1);
	if(name == "Object" || name == "Function" || name == "Math" || name == "JSON") {
		return null;
	}
	return name;
};
js_Boot.__isNativeObj = function(o) {
	return js_Boot.__nativeClassName(o) != null;
};
js_Boot.__resolveNativeClass = function(name) {
	return $global[name];
};
var kha_Assets = function() { };
$hxClasses["kha.Assets"] = kha_Assets;
kha_Assets.__name__ = true;
kha_Assets.loadImageFromPath = function(path,readable,done,failed,pos) {
	var description = { files : [path], readable : readable};
	kha_LoaderImpl.loadImageFromDescription(description,done,kha_Assets.reporter(failed,pos));
};
kha_Assets.loadBlobFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	kha_LoaderImpl.loadBlobFromDescription(description,done,kha_Assets.reporter(failed,pos));
};
kha_Assets.loadSoundFromPath = function(path,done,failed,pos) {
	var description = { files : [path]};
	kha_LoaderImpl.loadSoundFromDescription(description,done,kha_Assets.reporter(failed,pos));
};
kha_Assets.reporter = function(custom,pos) {
	if(custom != null) {
		return custom;
	} else {
		var _g = haxe_Log.trace;
		var infos = pos;
		return function(v) {
			_g(v,infos);
		};
	}
};
var kha_Canvas = function() { };
$hxClasses["kha.Canvas"] = kha_Canvas;
kha_Canvas.__name__ = true;
kha_Canvas.__isInterface__ = true;
kha_Canvas.prototype = {
	__class__: kha_Canvas
	,__properties__: {get_g4:"get_g4",get_height:"get_height",get_width:"get_width"}
};
var kha_Resource = function() { };
$hxClasses["kha.Resource"] = kha_Resource;
kha_Resource.__name__ = true;
kha_Resource.__isInterface__ = true;
var kha_Image = function() { };
$hxClasses["kha.Image"] = kha_Image;
kha_Image.__name__ = true;
kha_Image.__interfaces__ = [kha_Resource,kha_Canvas];
kha_Image.__properties__ = {get_nonPow2Supported:"get_nonPow2Supported"};
kha_Image.create = function(width,height,format,usage) {
	if(format == null) {
		format = 0;
	}
	if(usage == null) {
		usage = 0;
	}
	if(kha_SystemImpl.gl == null) {
		return new kha_CanvasImage(width,height,format,false);
	} else {
		return new kha_WebGLImage(width,height,format,false,0,1);
	}
};
kha_Image.create3D = function(width,height,depth,format,usage) {
	return null;
};
kha_Image.createRenderTarget = function(width,height,format,depthStencil,antiAliasingSamples,contextId) {
	if(contextId == null) {
		contextId = 0;
	}
	if(antiAliasingSamples == null) {
		antiAliasingSamples = 1;
	}
	if(depthStencil == null) {
		depthStencil = 0;
	}
	if(format == null) {
		format = 0;
	}
	if(kha_SystemImpl.gl == null) {
		return new kha_CanvasImage(width,height,format,true);
	} else {
		return new kha_WebGLImage(width,height,format,true,depthStencil,antiAliasingSamples);
	}
};
kha_Image.fromImage = function(image,readable) {
	if(kha_SystemImpl.gl == null) {
		var img = new kha_CanvasImage(image.width,image.height,0,false);
		img.image = image;
		img.createTexture();
		return img;
	} else {
		var img = new kha_WebGLImage(image.width,image.height,0,false,0,1);
		img.image = image;
		img.createTexture();
		return img;
	}
};
kha_Image.fromBytes = function(bytes,width,height,format,usage) {
	if(format == null) {
		format = 0;
	}
	if(usage == null) {
		usage = 0;
	}
	if(kha_SystemImpl.gl != null) {
		var img = new kha_WebGLImage(width,height,format,false,0,1);
		img.image = img.bytesToArray(bytes);
		img.createTexture();
		return img;
	}
	var img = new kha_CanvasImage(width,height,format,false);
	var g2 = img.get_g2();
	var canvas = g2.canvas;
	var imageData = new ImageData(new Uint8ClampedArray(bytes.b.bufferValue),width,height);
	canvas.putImageData(imageData,0,0);
	return img;
};
kha_Image.fromBytes3D = function(bytes,width,height,depth,format,usage) {
	return null;
};
kha_Image.get_nonPow2Supported = function() {
	return kha_SystemImpl.gl != null;
};
kha_Image.renderTargetsInvertedY = function() {
	return true;
};
kha_Image.prototype = {
	unload: function() {
	}
	,generateMipmaps: function(levels) {
	}
	,setMipmaps: function(mipmaps) {
	}
	,setDepthStencilFrom: function(image) {
	}
	,get_width: function() {
		return 0;
	}
	,get_height: function() {
		return 0;
	}
	,get_depth: function() {
		return 1;
	}
	,get_g4: function() {
		return null;
	}
	,__class__: kha_Image
	,__properties__: {get_g4:"get_g4",get_depth:"get_depth",get_height:"get_height",get_width:"get_width"}
};
var kha_CanvasImage = function(width,height,format,renderTarget) {
	this.g2canvas = null;
	this.myWidth = width;
	this.myHeight = height;
	this.myFormat = format;
	this.renderTarget = renderTarget;
	this.image = null;
	this.video = null;
	if(renderTarget) {
		this.createTexture();
	}
};
$hxClasses["kha.CanvasImage"] = kha_CanvasImage;
kha_CanvasImage.__name__ = true;
kha_CanvasImage.init = function() {
	var canvas = window.document.createElement("canvas");
	if(canvas != null) {
		kha_CanvasImage.context = canvas.getContext("2d");
		canvas.width = 2048;
		canvas.height = 2048;
		kha_CanvasImage.context.globalCompositeOperation = "copy";
	}
};
kha_CanvasImage.__super__ = kha_Image;
kha_CanvasImage.prototype = $extend(kha_Image.prototype,{
	get_g2: function() {
		if(this.g2canvas == null) {
			var canvas = window.document.createElement("canvas");
			this.image = canvas;
			var context = canvas.getContext("2d");
			canvas.width = this.get_width();
			canvas.height = this.get_height();
			this.g2canvas = new kha_js_CanvasGraphics(context);
		}
		return this.g2canvas;
	}
	,get_g4: function() {
		return null;
	}
	,get_width: function() {
		return this.myWidth;
	}
	,get_height: function() {
		return this.myHeight;
	}
	,get_realWidth: function() {
		return this.myWidth;
	}
	,get_realHeight: function() {
		return this.myHeight;
	}
	,createTexture: function() {
		if(kha_SystemImpl.gl == null) {
			return;
		}
		this.texture = kha_SystemImpl.gl.createTexture();
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.texParameteri(3553,10240,9729);
		kha_SystemImpl.gl.texParameteri(3553,10241,9729);
		kha_SystemImpl.gl.texParameteri(3553,10242,33071);
		kha_SystemImpl.gl.texParameteri(3553,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = kha_SystemImpl.gl.createFramebuffer();
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			kha_SystemImpl.gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
		} else if(this.video != null) {
			kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video);
		} else {
			kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.image);
		}
		kha_SystemImpl.gl.bindTexture(3553,null);
	}
	,unload: function() {
		this.image = null;
		this.video = null;
		this.data = null;
	}
	,__class__: kha_CanvasImage
});
var kha_Color = {};
kha_Color.fromBytes = function(r,g,b,a) {
	if(a == null) {
		a = 255;
	}
	return kha_Color._new(a << 24 | r << 16 | g << 8 | b);
};
kha_Color.fromFloats = function(r,g,b,a) {
	if(a == null) {
		a = 1;
	}
	return kha_Color._new((a * 255 | 0) << 24 | (r * 255 | 0) << 16 | (g * 255 | 0) << 8 | (b * 255 | 0));
};
kha_Color._new = function(value) {
	var this1 = value;
	return this1;
};
var kha_Display = function() {
};
$hxClasses["kha.Display"] = kha_Display;
kha_Display.__name__ = true;
kha_Display.__properties__ = {get_primary:"get_primary"};
kha_Display.get_primary = function() {
	return kha_Display.instance;
};
kha_Display.prototype = {
	get_frequency: function() {
		return kha_SystemImpl.estimatedRefreshRate;
	}
	,__class__: kha_Display
	,__properties__: {get_frequency:"get_frequency"}
};
var kha_Framebuffer = function($window,g1,g2,g4) {
	this.window = $window;
	this.graphics1 = g1;
	this.graphics2 = g2;
	this.graphics4 = g4;
};
$hxClasses["kha.Framebuffer"] = kha_Framebuffer;
kha_Framebuffer.__name__ = true;
kha_Framebuffer.__interfaces__ = [kha_Canvas];
kha_Framebuffer.prototype = {
	init: function(g1,g2,g4) {
		this.graphics1 = g1;
		this.graphics2 = g2;
		this.graphics4 = g4;
	}
	,get_g2: function() {
		return this.graphics2;
	}
	,get_g4: function() {
		return this.graphics4;
	}
	,get_width: function() {
		return kha_System.windowWidth(this.window);
	}
	,get_height: function() {
		return kha_System.windowHeight(this.window);
	}
	,__class__: kha_Framebuffer
	,__properties__: {get_height:"get_height",get_width:"get_width",get_g4:"get_g4",get_g2:"get_g2"}
};
var kha_FramebufferOptions = function(frequency,verticalSync,colorBufferBits,depthBufferBits,stencilBufferBits,samplesPerPixel) {
	if(samplesPerPixel == null) {
		samplesPerPixel = 1;
	}
	if(stencilBufferBits == null) {
		stencilBufferBits = 8;
	}
	if(depthBufferBits == null) {
		depthBufferBits = 16;
	}
	if(colorBufferBits == null) {
		colorBufferBits = 32;
	}
	if(verticalSync == null) {
		verticalSync = true;
	}
	if(frequency == null) {
		frequency = 60;
	}
	this.samplesPerPixel = 1;
	this.stencilBufferBits = 8;
	this.depthBufferBits = 16;
	this.colorBufferBits = 32;
	this.verticalSync = true;
	this.frequency = 60;
	this.frequency = frequency;
	this.verticalSync = verticalSync;
	this.colorBufferBits = colorBufferBits;
	this.depthBufferBits = depthBufferBits;
	this.stencilBufferBits = stencilBufferBits;
	this.samplesPerPixel = samplesPerPixel;
};
$hxClasses["kha.FramebufferOptions"] = kha_FramebufferOptions;
kha_FramebufferOptions.__name__ = true;
kha_FramebufferOptions.prototype = {
	__class__: kha_FramebufferOptions
};
var kha_LoaderImpl = function() { };
$hxClasses["kha.LoaderImpl"] = kha_LoaderImpl;
kha_LoaderImpl.__name__ = true;
kha_LoaderImpl.loadImageFromDescription = function(desc,done,failed) {
	var readable = Object.prototype.hasOwnProperty.call(desc,"readable") && desc.readable;
	if(StringTools.endsWith(desc.files[0],".hdr")) {
		kha_LoaderImpl.loadBlobFromDescription(desc,function(blob) {
			var hdrImage = kha_internal_HdrFormat.parse(blob.toBytes());
			done(kha_Image.fromBytes(haxe_io_Bytes.ofData(hdrImage.data.buffer),hdrImage.width,hdrImage.height,2,readable ? 1 : 0));
		},failed);
	} else {
		var img = window.document.createElement("img");
		img.onerror = function(event) {
			failed({ url : desc.files[0], error : event});
		};
		img.onload = function(event) {
			done(kha_Image.fromImage(img,readable));
		};
		img.crossOrigin = "";
		img.src = desc.files[0];
	}
};
kha_LoaderImpl.loadSoundFromDescription = function(desc,done,failed) {
	if(kha_SystemImpl._hasWebAudio) {
		var element = window.document.createElement("audio");
		if(element.canPlayType("audio/mp4") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".mp4")) {
					new kha_js_WebAudioSound(file,done,failed);
					return;
				}
			}
		}
		if(element.canPlayType("audio/mp3") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".mp3")) {
					new kha_js_WebAudioSound(file,done,failed);
					return;
				}
			}
		}
		if(element.canPlayType("audio/wav") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".wav")) {
					new kha_js_WebAudioSound(file,done,failed);
					return;
				}
			}
		}
		var _g = 0;
		var _g1 = desc.files.length;
		while(_g < _g1) {
			var i = _g++;
			var file = desc.files[i];
			if(StringTools.endsWith(file,".ogg")) {
				new kha_js_WebAudioSound(file,done,failed);
				return;
			}
		}
		failed({ url : desc.files.join(","), error : "Unable to find sound files with supported audio formats"});
	} else if(kha_SystemImpl.mobile) {
		var element = window.document.createElement("audio");
		if(element.canPlayType("audio/mp4") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".mp4")) {
					new kha_js_MobileWebAudioSound(file,done,failed);
					return;
				}
			}
		}
		if(element.canPlayType("audio/mp3") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".mp3")) {
					new kha_js_MobileWebAudioSound(file,done,failed);
					return;
				}
			}
		}
		if(element.canPlayType("audio/wav") != "") {
			var _g = 0;
			var _g1 = desc.files.length;
			while(_g < _g1) {
				var i = _g++;
				var file = desc.files[i];
				if(StringTools.endsWith(file,".wav")) {
					new kha_js_MobileWebAudioSound(file,done,failed);
					return;
				}
			}
		}
		var _g = 0;
		var _g1 = desc.files.length;
		while(_g < _g1) {
			var i = _g++;
			var file = desc.files[i];
			if(StringTools.endsWith(file,".ogg")) {
				new kha_js_MobileWebAudioSound(file,done,failed);
				return;
			}
		}
		failed({ url : desc.files.join(","), error : "Unable to find sound files with supported audio formats"});
	} else {
		new kha_js_Sound(desc.files,done,failed);
	}
};
kha_LoaderImpl.loadRemote = function(desc,done,failed) {
	var request = new XMLHttpRequest();
	request.open("GET",desc.files[0],true);
	request.responseType = "arraybuffer";
	request.onreadystatechange = function() {
		if(request.readyState != 4) {
			return;
		}
		if(request.status >= 200 && request.status < 400 || request.status == 0 && request.statusText == "") {
			var bytes = null;
			var arrayBuffer = request.response;
			if(arrayBuffer != null) {
				var byteArray = new Uint8Array(arrayBuffer);
				bytes = haxe_io_Bytes.ofData(byteArray);
			} else if(request.responseBody != null) {
				var data = VBArray(request.responseBody).toArray();
				bytes = new haxe_io_Bytes(new ArrayBuffer(data.length));
				var _g = 0;
				var _g1 = data.length;
				while(_g < _g1) {
					var i = _g++;
					bytes.b[i] = data[i];
				}
			} else {
				failed({ url : desc.files[0]});
				return;
			}
			done(new kha_internal_BytesBlob(bytes));
		} else {
			failed({ url : desc.files[0]});
		}
	};
	request.send(null);
};
kha_LoaderImpl.loadBlobFromDescription = function(desc,done,failed) {
	kha_LoaderImpl.loadRemote(desc,done,failed);
};
var kha_TimeTask = function() {
};
$hxClasses["kha.TimeTask"] = kha_TimeTask;
kha_TimeTask.__name__ = true;
kha_TimeTask.prototype = {
	__class__: kha_TimeTask
};
var kha_FrameTask = function(task,priority,id) {
	this.task = task;
	this.priority = priority;
	this.id = id;
	this.active = true;
	this.paused = false;
};
$hxClasses["kha.FrameTask"] = kha_FrameTask;
kha_FrameTask.__name__ = true;
kha_FrameTask.prototype = {
	__class__: kha_FrameTask
};
var kha_Scheduler = function() { };
$hxClasses["kha.Scheduler"] = kha_Scheduler;
kha_Scheduler.__name__ = true;
kha_Scheduler.init = function() {
	kha_Scheduler.deltas = [];
	var _g = 0;
	var _g1 = kha_Scheduler.DIF_COUNT;
	while(_g < _g1) {
		var i = _g++;
		kha_Scheduler.deltas[i] = 0;
	}
	kha_Scheduler.stopped = true;
	kha_Scheduler.frame_tasks_sorted = true;
	kha_Scheduler.current = kha_Scheduler.lastTime = kha_Scheduler.lastFrameEnd = kha_Scheduler.realTime();
	kha_Scheduler.currentFrameTaskId = 0;
	kha_Scheduler.currentTimeTaskId = 0;
	kha_Scheduler.currentGroupId = 0;
	kha_Scheduler.timeTasks = [];
	kha_Scheduler.pausedTimeTasks = [];
	kha_Scheduler.outdatedTimeTasks = [];
	kha_Scheduler.timeTasksScratchpad = [];
	kha_Scheduler.frameTasks = [];
	kha_Scheduler.toDeleteFrame = [];
};
kha_Scheduler.start = function(restartTimers) {
	if(restartTimers == null) {
		restartTimers = false;
	}
	kha_Scheduler.vsync = kha_Window.get(0).get_vSynced();
	kha_Scheduler.stopped = false;
	kha_Scheduler.resetTime();
	kha_Scheduler.lastTime = kha_Scheduler.realTime() - kha_Scheduler.startTime;
	var _g = 0;
	var _g1 = kha_Scheduler.DIF_COUNT;
	while(_g < _g1) {
		var i = _g++;
		kha_Scheduler.deltas[i] = 0;
	}
	if(restartTimers) {
		var _g = 0;
		var _g1 = kha_Scheduler.timeTasks;
		while(_g < _g1.length) {
			var timeTask = _g1[_g];
			++_g;
			timeTask.paused = false;
		}
		var _g = 0;
		var _g1 = kha_Scheduler.frameTasks;
		while(_g < _g1.length) {
			var frameTask = _g1[_g];
			++_g;
			frameTask.paused = false;
		}
	}
};
kha_Scheduler.executeFrame = function() {
	var real = kha_Scheduler.realTime();
	var now = real - kha_Scheduler.startTime;
	var delta = now - kha_Scheduler.lastTime;
	var frameEnd = kha_Scheduler.lastFrameEnd;
	if(delta >= 0) {
		if(kha_netsync_Session.the() == null) {
			if(delta > kha_Scheduler.maxframetime) {
				kha_Scheduler.startTime += delta - kha_Scheduler.maxframetime;
				now = real - kha_Scheduler.startTime;
				delta = kha_Scheduler.maxframetime;
				frameEnd += delta;
			} else if(kha_Scheduler.vsync) {
				var frames = Math.round(delta / (1.0 / kha_Display.get_primary().get_frequency()));
				if(frames < 1) {
					return;
				}
				var realdif = frames * (1.0 / kha_Display.get_primary().get_frequency());
				delta = realdif;
				var _g = 0;
				var _g1 = kha_Scheduler.DIF_COUNT - 2;
				while(_g < _g1) {
					var i = _g++;
					delta += kha_Scheduler.deltas[i];
					kha_Scheduler.deltas[i] = kha_Scheduler.deltas[i + 1];
				}
				delta += kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 2];
				delta /= kha_Scheduler.DIF_COUNT;
				kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 2] = realdif;
				frameEnd += delta;
			} else {
				var _g = 0;
				var _g1 = kha_Scheduler.DIF_COUNT - 1;
				while(_g < _g1) {
					var i = _g++;
					kha_Scheduler.deltas[i] = kha_Scheduler.deltas[i + 1];
				}
				kha_Scheduler.deltas[kha_Scheduler.DIF_COUNT - 1] = delta;
				var next = 0;
				var _g = 0;
				var _g1 = kha_Scheduler.DIF_COUNT;
				while(_g < _g1) {
					var i = _g++;
					next += kha_Scheduler.deltas[i];
				}
				next /= kha_Scheduler.DIF_COUNT;
				frameEnd += next;
			}
		} else {
			frameEnd += delta;
		}
		kha_Scheduler.lastTime = now;
		if(!kha_Scheduler.stopped) {
			kha_Scheduler.lastFrameEnd = frameEnd;
		}
		var _g = 0;
		var _g1 = kha_Scheduler.pausedTimeTasks;
		while(_g < _g1.length) {
			var pausedTask = _g1[_g];
			++_g;
			pausedTask.next += delta;
		}
		if(kha_Scheduler.stopped) {
			var _g = 0;
			var _g1 = kha_Scheduler.timeTasks;
			while(_g < _g1.length) {
				var timeTask = _g1[_g];
				++_g;
				timeTask.next += delta;
			}
		}
		kha_Scheduler.executeTimeTasks(frameEnd);
		var _g = 0;
		var _g1 = kha_Scheduler.outdatedTimeTasks;
		while(_g < _g1.length) {
			var task = _g1[_g];
			++_g;
			if(task.next < frameEnd - 10.0) {
				kha_Scheduler.timeTasksScratchpad.push(task);
			}
		}
		var _g = 0;
		var _g1 = kha_Scheduler.timeTasksScratchpad;
		while(_g < _g1.length) {
			var task = _g1[_g];
			++_g;
			HxOverrides.remove(kha_Scheduler.outdatedTimeTasks,task);
		}
		while(kha_Scheduler.timeTasksScratchpad.length > 0) HxOverrides.remove(kha_Scheduler.timeTasksScratchpad,kha_Scheduler.timeTasksScratchpad[0]);
	}
	kha_Scheduler.current = frameEnd;
	kha_Scheduler.sortFrameTasks();
	var _g = 0;
	var _g1 = kha_Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(!kha_Scheduler.stopped && !frameTask.paused && frameTask.active) {
			if(!frameTask.task()) {
				frameTask.active = false;
			}
		}
	}
	var _g = 0;
	var _g1 = kha_Scheduler.frameTasks;
	while(_g < _g1.length) {
		var frameTask = _g1[_g];
		++_g;
		if(!frameTask.active) {
			kha_Scheduler.toDeleteFrame.push(frameTask);
		}
	}
	while(kha_Scheduler.toDeleteFrame.length > 0) HxOverrides.remove(kha_Scheduler.frameTasks,kha_Scheduler.toDeleteFrame.pop());
};
kha_Scheduler.executeTimeTasks = function(until) {
	while(kha_Scheduler.timeTasks.length > 0) {
		kha_Scheduler.activeTimeTask = kha_Scheduler.timeTasks[0];
		if(kha_Scheduler.activeTimeTask.next <= until) {
			kha_Scheduler.current = kha_Scheduler.activeTimeTask.next;
			kha_Scheduler.activeTimeTask.next += kha_Scheduler.activeTimeTask.period;
			HxOverrides.remove(kha_Scheduler.timeTasks,kha_Scheduler.activeTimeTask);
			if(kha_Scheduler.activeTimeTask.active && kha_Scheduler.activeTimeTask.task()) {
				if(kha_Scheduler.activeTimeTask.period > 0 && (kha_Scheduler.activeTimeTask.duration == 0 || kha_Scheduler.activeTimeTask.duration >= kha_Scheduler.activeTimeTask.start + kha_Scheduler.activeTimeTask.next)) {
					kha_Scheduler.insertSorted(kha_Scheduler.timeTasks,kha_Scheduler.activeTimeTask);
				} else {
					kha_Scheduler.archiveTimeTask(kha_Scheduler.activeTimeTask,until);
				}
			} else {
				kha_Scheduler.activeTimeTask.active = false;
				kha_Scheduler.archiveTimeTask(kha_Scheduler.activeTimeTask,until);
			}
		} else {
			break;
		}
	}
	kha_Scheduler.activeTimeTask = null;
};
kha_Scheduler.archiveTimeTask = function(timeTask,frameEnd) {
};
kha_Scheduler.time = function() {
	return kha_Scheduler.current;
};
kha_Scheduler.realTime = function() {
	return kha_System.get_time();
};
kha_Scheduler.resetTime = function() {
	var now = kha_System.get_time();
	var dif = now - kha_Scheduler.startTime;
	kha_Scheduler.startTime = now;
	var _g = 0;
	var _g1 = kha_Scheduler.timeTasks;
	while(_g < _g1.length) {
		var timeTask = _g1[_g];
		++_g;
		timeTask.start -= dif;
		timeTask.next -= dif;
	}
	var _g = 0;
	var _g1 = kha_Scheduler.DIF_COUNT;
	while(_g < _g1) {
		var i = _g++;
		kha_Scheduler.deltas[i] = 0;
	}
	kha_Scheduler.current = 0;
	kha_Scheduler.lastTime = 0;
	kha_Scheduler.lastFrameEnd = 0;
};
kha_Scheduler.addBreakableTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	var t = new kha_TimeTask();
	t.active = true;
	t.task = task;
	t.id = ++kha_Scheduler.currentTimeTaskId;
	t.groupId = groupId;
	t.start = kha_Scheduler.current + start;
	t.period = 0;
	if(period != 0) {
		t.period = period;
	}
	t.duration = 0;
	if(duration != 0) {
		t.duration = t.start + duration;
	}
	t.next = t.start;
	kha_Scheduler.insertSorted(kha_Scheduler.timeTasks,t);
	return t.id;
};
kha_Scheduler.addTimeTaskToGroup = function(groupId,task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	return kha_Scheduler.addBreakableTimeTaskToGroup(groupId,function() {
		task();
		return true;
	},start,period,duration);
};
kha_Scheduler.addTimeTask = function(task,start,period,duration) {
	if(duration == null) {
		duration = 0;
	}
	if(period == null) {
		period = 0;
	}
	return kha_Scheduler.addTimeTaskToGroup(0,task,start,period,duration);
};
kha_Scheduler.insertSorted = function(list,task) {
	var _g = 0;
	var _g1 = list.length;
	while(_g < _g1) {
		var i = _g++;
		if(list[i].next > task.next) {
			list.splice(i,0,task);
			return;
		}
	}
	list.push(task);
};
kha_Scheduler.sortFrameTasks = function() {
	if(kha_Scheduler.frame_tasks_sorted) {
		return;
	}
	kha_Scheduler.frameTasks.sort(function(a,b) {
		if(a.priority > b.priority) {
			return 1;
		} else if(a.priority < b.priority) {
			return -1;
		} else {
			return 0;
		}
	});
	kha_Scheduler.frame_tasks_sorted = true;
};
var kha_Shaders = function() { };
$hxClasses["kha.Shaders"] = kha_Shaders;
kha_Shaders.__name__ = true;
kha_Shaders.init = function() {
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Checker_mesh_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Checker_mesh_frag = new kha_graphics4_FragmentShader(blobs,["Checker_mesh-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Checker_mesh_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Checker_mesh_vert = new kha_graphics4_VertexShader(blobs,["Checker_mesh-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Checker_shadowmap_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Checker_shadowmap_frag = new kha_graphics4_FragmentShader(blobs,["Checker_shadowmap-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Checker_shadowmap_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Checker_shadowmap_vert = new kha_graphics4_VertexShader(blobs,["Checker_shadowmap-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Material_mesh_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Material_mesh_frag = new kha_graphics4_FragmentShader(blobs,["Material_mesh-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Material_mesh_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Material_mesh_vert = new kha_graphics4_VertexShader(blobs,["Material_mesh-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Particle_armtile_armpart_blend_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Particle_armtile_armpart_blend_frag = new kha_graphics4_FragmentShader(blobs,["Particle_armtile_armpart_blend-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"Particle_armtile_armpart_blend_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.Particle_armtile_armpart_blend_vert = new kha_graphics4_VertexShader(blobs,["Particle_armtile_armpart_blend-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"World_World_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.World_World_frag = new kha_graphics4_FragmentShader(blobs,["World_World-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"World_World_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.World_World_vert = new kha_graphics4_VertexShader(blobs,["World_World-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"blur_edge_pass_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.blur_edge_pass_frag = new kha_graphics4_FragmentShader(blobs,["blur_edge_pass-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"compositor_pass_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.compositor_pass_frag = new kha_graphics4_FragmentShader(blobs,["compositor_pass-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"compositor_pass_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.compositor_pass_vert = new kha_graphics4_VertexShader(blobs,["compositor_pass-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"deferred_light_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.deferred_light_frag = new kha_graphics4_FragmentShader(blobs,["deferred_light-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_colored_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_colored_frag = new kha_graphics4_FragmentShader(blobs,["painter-colored-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_colored_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_colored_vert = new kha_graphics4_VertexShader(blobs,["painter-colored-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_image_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_image_frag = new kha_graphics4_FragmentShader(blobs,["painter-image-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_image_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_image_vert = new kha_graphics4_VertexShader(blobs,["painter-image-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_text_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_text_frag = new kha_graphics4_FragmentShader(blobs,["painter-text-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_text_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_text_vert = new kha_graphics4_VertexShader(blobs,["painter-text-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_video_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_video_frag = new kha_graphics4_FragmentShader(blobs,["painter-video-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"painter_video_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.painter_video_vert = new kha_graphics4_VertexShader(blobs,["painter-video-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"pass_copy_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.pass_copy_frag = new kha_graphics4_FragmentShader(blobs,["pass_copy-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"pass_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.pass_vert = new kha_graphics4_VertexShader(blobs,["pass-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"pass_viewray_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.pass_viewray_vert = new kha_graphics4_VertexShader(blobs,["pass_viewray-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_blend_weight_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_blend_weight_frag = new kha_graphics4_FragmentShader(blobs,["smaa_blend_weight-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_blend_weight_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_blend_weight_vert = new kha_graphics4_VertexShader(blobs,["smaa_blend_weight-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_edge_detect_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_edge_detect_frag = new kha_graphics4_FragmentShader(blobs,["smaa_edge_detect-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_edge_detect_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_edge_detect_vert = new kha_graphics4_VertexShader(blobs,["smaa_edge_detect-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_neighborhood_blend_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_neighborhood_blend_frag = new kha_graphics4_FragmentShader(blobs,["smaa_neighborhood_blend-webgl2.frag.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"smaa_neighborhood_blend_vertData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.smaa_neighborhood_blend_vert = new kha_graphics4_VertexShader(blobs,["smaa_neighborhood_blend-webgl2.vert.essl"]);
	var blobs = [];
	var data = Reflect.field(kha_Shaders,"ssao_pass_fragData" + 0);
	var bytes = haxe_Unserializer.run(data);
	blobs.push(kha_internal_BytesBlob.fromBytes(bytes));
	kha_Shaders.ssao_pass_frag = new kha_graphics4_FragmentShader(blobs,["ssao_pass-webgl2.frag.essl"]);
};
var kha_Sound = function() {
	this.sampleRate = 0;
	this.channels = 0;
	this.length = 0;
};
$hxClasses["kha.Sound"] = kha_Sound;
kha_Sound.__name__ = true;
kha_Sound.__interfaces__ = [kha_Resource];
kha_Sound.prototype = {
	uncompress: function(done) {
		if(this.uncompressedData != null) {
			done();
			return;
		}
		var output = new haxe_io_BytesOutput();
		var header = kha_audio2_ogg_vorbis_Reader.readAll(this.compressedData,output,true);
		var soundBytes = output.getBytes();
		var count = soundBytes.length / 4 | 0;
		if(header.channel == 1) {
			this.length = count / kha_audio2_Audio.samplesPerSecond;
			this.uncompressedData = kha_arrays_Float32Array._new(count * 2);
			var _g = 0;
			var _g1 = count;
			while(_g < _g1) {
				var i = _g++;
				var this1 = this.uncompressedData;
				var v = soundBytes.getFloat(i * 4);
				this1.setFloat32(i * 2 * 4,v,true);
				var this2 = this.uncompressedData;
				var v1 = soundBytes.getFloat(i * 4);
				this2.setFloat32((i * 2 + 1) * 4,v1,true);
			}
		} else {
			this.length = count / 2 / kha_audio2_Audio.samplesPerSecond;
			this.uncompressedData = kha_arrays_Float32Array._new(count);
			var _g = 0;
			var _g1 = count;
			while(_g < _g1) {
				var i = _g++;
				var this1 = this.uncompressedData;
				var v = soundBytes.getFloat(i * 4);
				this1.setFloat32(i * 4,v,true);
			}
		}
		this.channels = header.channel;
		this.sampleRate = header.sampleRate;
		this.compressedData = null;
		done();
	}
	,__class__: kha_Sound
};
var kha_SystemOptions = function(title,width,height,$window,framebuffer) {
	if(height == null) {
		height = -1;
	}
	if(width == null) {
		width = -1;
	}
	if(title == null) {
		title = "Kha";
	}
	this.framebuffer = null;
	this.window = null;
	this.height = -1;
	this.width = -1;
	this.title = "Kha";
	this.title = title;
	this.window = $window == null ? new kha_WindowOptions(null,-1,-1,800,600,-1,true,null,0) : $window;
	if(width > 0) {
		this.window.width = width;
		this.width = width;
	} else {
		this.width = this.window.width;
	}
	if(height > 0) {
		this.window.height = height;
		this.height = height;
	} else {
		this.height = this.window.height;
	}
	if(this.window.title == null) {
		this.window.title = title;
	}
	this.framebuffer = framebuffer == null ? new kha_FramebufferOptions(60,true,32,16,8,1) : framebuffer;
};
$hxClasses["kha.SystemOptions"] = kha_SystemOptions;
kha_SystemOptions.__name__ = true;
kha_SystemOptions.prototype = {
	__class__: kha_SystemOptions
};
var kha_System = function() { };
$hxClasses["kha.System"] = kha_System;
kha_System.__name__ = true;
kha_System.__properties__ = {get_time:"get_time"};
kha_System.start = function(options,callback) {
	kha_System.theTitle = options.title;
	kha_SystemImpl.init(options,callback);
};
kha_System.notifyOnFrames = function(listener) {
	kha_System.renderListeners.push(listener);
};
kha_System.notifyOnApplicationState = function(foregroundListener,resumeListener,pauseListener,backgroundListener,shutdownListener) {
	if(foregroundListener != null) {
		kha_System.foregroundListeners.push(foregroundListener);
	}
	if(resumeListener != null) {
		kha_System.resumeListeners.push(resumeListener);
	}
	if(pauseListener != null) {
		kha_System.pauseListeners.push(pauseListener);
	}
	if(backgroundListener != null) {
		kha_System.backgroundListeners.push(backgroundListener);
	}
	if(shutdownListener != null) {
		kha_System.shutdownListeners.push(shutdownListener);
	}
};
kha_System.render = function(framebuffers) {
	var _g = 0;
	var _g1 = kha_System.renderListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(framebuffers);
	}
};
kha_System.foreground = function() {
	var _g = 0;
	var _g1 = kha_System.foregroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.background = function() {
	var _g = 0;
	var _g1 = kha_System.backgroundListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.shutdown = function() {
	var _g = 0;
	var _g1 = kha_System.shutdownListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener();
	}
};
kha_System.dropFiles = function(filePath) {
	var _g = 0;
	var _g1 = kha_System.dropFilesListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(filePath);
	}
};
kha_System.get_time = function() {
	return kha_SystemImpl.getTime();
};
kha_System.windowWidth = function($window) {
	if($window == null) {
		$window = 0;
	}
	return kha_Window.get($window).get_width();
};
kha_System.windowHeight = function($window) {
	if($window == null) {
		$window = 0;
	}
	return kha_Window.get_all()[$window].get_height();
};
var kha_GamepadStates = function() {
	this.axes = [];
	this.buttons = [];
};
$hxClasses["kha.GamepadStates"] = kha_GamepadStates;
kha_GamepadStates.__name__ = true;
kha_GamepadStates.prototype = {
	__class__: kha_GamepadStates
};
var kha_SystemImpl = function() { };
$hxClasses["kha.SystemImpl"] = kha_SystemImpl;
kha_SystemImpl.__name__ = true;
kha_SystemImpl.init = function(options,callback) {
	kha_SystemImpl.options = options;
	kha_SystemImpl.mobile = kha_SystemImpl.isMobile();
	kha_SystemImpl.ios = kha_SystemImpl.isIOS();
	kha_SystemImpl.chrome = kha_SystemImpl.isChrome();
	kha_SystemImpl.firefox = kha_SystemImpl.isFirefox();
	kha_SystemImpl.ie = kha_SystemImpl.isIE();
	kha_SystemImpl.mobileAudioPlaying = !kha_SystemImpl.mobile && !kha_SystemImpl.chrome && !kha_SystemImpl.firefox;
	kha_SystemImpl.initSecondStep(callback);
};
kha_SystemImpl.initSecondStep = function(callback) {
	kha_SystemImpl.init2(kha_SystemImpl.options.window.width,kha_SystemImpl.options.window.height);
	kha_SystemImpl.initAnimate(callback);
};
kha_SystemImpl.isMobile = function() {
	var agent = $global.navigator.userAgent;
	if(agent.indexOf("Android") >= 0 || agent.indexOf("webOS") >= 0 || agent.indexOf("BlackBerry") >= 0 || agent.indexOf("Windows Phone") >= 0) {
		return true;
	}
	if(kha_SystemImpl.isIOS()) {
		return true;
	}
	return false;
};
kha_SystemImpl.isIOS = function() {
	var agent = $global.navigator.userAgent;
	if(agent.indexOf("iPhone") >= 0 || agent.indexOf("iPad") >= 0 || agent.indexOf("iPod") >= 0) {
		return true;
	}
	return false;
};
kha_SystemImpl.isChrome = function() {
	var agent = $global.navigator.userAgent;
	if(agent.indexOf("Chrome") >= 0) {
		return true;
	}
	return false;
};
kha_SystemImpl.isFirefox = function() {
	var agent = $global.navigator.userAgent;
	if(agent.indexOf("Firefox") >= 0) {
		return true;
	}
	return false;
};
kha_SystemImpl.isIE = function() {
	var agent = $global.navigator.userAgent;
	if(agent.indexOf("MSIE ") >= 0 || agent.indexOf("Trident/") >= 0) {
		return true;
	}
	return false;
};
kha_SystemImpl.setCanvas = function(canvas) {
	kha_SystemImpl.khanvas = canvas;
};
kha_SystemImpl.getTime = function() {
	var now = window.performance != null ? window.performance.now() : Date.now();
	return now / 1000;
};
kha_SystemImpl.init2 = function(defaultWidth,defaultHeight,backbufferFormat) {
	kha_SystemImpl.keyboard = new kha_input_Keyboard();
	kha_SystemImpl.mouse = new kha_input_MouseImpl();
	kha_SystemImpl.surface = new kha_input_Surface();
	kha_SystemImpl.gamepads = [];
	kha_SystemImpl.gamepadStates = [];
	kha_SystemImpl.gamepads[0] = new kha_input_Gamepad(0);
	kha_SystemImpl.gamepadStates[0] = new kha_GamepadStates();
	kha_SystemImpl.gamepads[1] = new kha_input_Gamepad(1);
	kha_SystemImpl.gamepadStates[1] = new kha_GamepadStates();
	kha_SystemImpl.gamepads[2] = new kha_input_Gamepad(2);
	kha_SystemImpl.gamepadStates[2] = new kha_GamepadStates();
	kha_SystemImpl.gamepads[3] = new kha_input_Gamepad(3);
	kha_SystemImpl.gamepadStates[3] = new kha_GamepadStates();
	window.addEventListener("gamepadconnected",function(e) {
		var pad = e.gamepad;
		kha_input_Gamepad.sendConnectEvent(pad.index);
		var _g = 0;
		var _g1 = pad.buttons.length;
		while(_g < _g1) {
			var i = _g++;
			kha_SystemImpl.gamepadStates[pad.index].buttons[i] = 0;
		}
	});
	window.addEventListener("gamepaddisconnected",function(e) {
		kha_input_Gamepad.sendDisconnectEvent(e.gamepad.index);
	});
	var sysGamepads = kha_SystemImpl.getGamepads();
	if(sysGamepads != null) {
		var _g = 0;
		var _g1 = sysGamepads.length;
		while(_g < _g1) {
			var i = _g++;
			var pad = sysGamepads[i];
			if(pad != null) {
				kha_SystemImpl.gamepads[pad.index].connected = true;
			}
		}
	}
	if(kha_SystemImpl.ie) {
		kha_SystemImpl.pressedKeys = [];
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			kha_SystemImpl.pressedKeys.push(false);
		}
		var _g = 0;
		while(_g < 256) {
			var i = _g++;
			kha_SystemImpl.pressedKeys.push(null);
		}
	}
	var onCopy = function(e) {
		if(kha_System.copyListener != null) {
			var data = kha_System.copyListener();
			if(data != null) {
				e.clipboardData.setData("text/plain",data);
			}
			e.preventDefault();
		}
	};
	var onCut = function(e) {
		if(kha_System.cutListener != null) {
			var data = kha_System.cutListener();
			if(data != null) {
				e.clipboardData.setData("text/plain",data);
			}
			e.preventDefault();
		}
	};
	var onPaste = function(e) {
		if(kha_System.pasteListener != null) {
			var onPaste = e.clipboardData.getData("text/plain");
			kha_System.pasteListener(onPaste);
			e.preventDefault();
		}
	};
	var document = window.document;
	document.addEventListener("copy",onCopy);
	document.addEventListener("cut",onCut);
	document.addEventListener("paste",onPaste);
	kha_CanvasImage.init();
	kha_Scheduler.init();
	kha_SystemImpl.loadFinished(defaultWidth,defaultHeight);
};
kha_SystemImpl.getMouse = function(num) {
	if(num != 0) {
		return null;
	}
	return kha_SystemImpl.mouse;
};
kha_SystemImpl.getKeyboard = function(num) {
	if(num != 0) {
		return null;
	}
	return kha_SystemImpl.keyboard;
};
kha_SystemImpl.checkGamepad = function(pad) {
	var _g = 0;
	var _g1 = pad.axes.length;
	while(_g < _g1) {
		var i = _g++;
		if(pad.axes[i] != null) {
			var axis = pad.axes[i];
			if(kha_SystemImpl.gamepadStates[pad.index].axes[i] != axis) {
				kha_SystemImpl.gamepadStates[pad.index].axes[i] = axis;
				kha_SystemImpl.gamepads[pad.index].sendAxisEvent(i,axis);
			}
		}
	}
	var _g = 0;
	var _g1 = pad.buttons.length;
	while(_g < _g1) {
		var i = _g++;
		if(pad.buttons[i] != null) {
			if(kha_SystemImpl.gamepadStates[pad.index].buttons[i] != pad.buttons[i].value) {
				kha_SystemImpl.gamepadStates[pad.index].buttons[i] = pad.buttons[i].value;
				kha_SystemImpl.gamepads[pad.index].sendButtonEvent(i,pad.buttons[i].value);
			}
		}
	}
	if(pad.axes.length <= 4 && pad.buttons.length > 7) {
		kha_SystemImpl.gamepadStates[pad.index].axes[4] = pad.buttons[6].value;
		kha_SystemImpl.gamepads[pad.index].sendAxisEvent(4,pad.buttons[6].value);
		kha_SystemImpl.gamepadStates[pad.index].axes[5] = pad.buttons[7].value;
		kha_SystemImpl.gamepads[pad.index].sendAxisEvent(5,pad.buttons[7].value);
	}
};
kha_SystemImpl.getCanvasElement = function() {
	if(kha_SystemImpl.khanvas != null) {
		return kha_SystemImpl.khanvas;
	}
	return window.document.getElementById("khanvas");
};
kha_SystemImpl.loadFinished = function(defaultWidth,defaultHeight) {
	var canvas = kha_SystemImpl.getCanvasElement();
	canvas.style.cursor = "default";
	var gl = false;
	try {
		kha_SystemImpl.gl = canvas.getContext("webgl2",{ alpha : false, antialias : kha_SystemImpl.options.framebuffer.samplesPerPixel > 1, stencil : true});
		kha_SystemImpl.gl.pixelStorei(37441,1);
		kha_SystemImpl.halfFloat = { HALF_FLOAT_OES : 5131};
		kha_SystemImpl.depthTexture = { UNSIGNED_INT_24_8_WEBGL : 34042};
		kha_SystemImpl.drawBuffers = { COLOR_ATTACHMENT0_WEBGL : 36064};
		kha_SystemImpl.elementIndexUint = true;
		kha_SystemImpl.gl.getExtension("EXT_color_buffer_float");
		kha_SystemImpl.gl.getExtension("OES_texture_float_linear");
		kha_SystemImpl.gl.getExtension("OES_texture_half_float_linear");
		kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("EXT_texture_filter_anisotropic");
		if(kha_SystemImpl.anisotropicFilter == null) {
			kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
		}
		gl = true;
		kha_SystemImpl.gl2 = true;
		kha_Shaders.init();
	} catch( _g ) {
		haxe_Log.trace("Could not initialize WebGL 2, falling back to WebGL.",{ fileName : "kha/SystemImpl.hx", lineNumber : 378, className : "kha.SystemImpl", methodName : "loadFinished"});
	}
	if(!kha_SystemImpl.gl2) {
		try {
			kha_SystemImpl.gl = canvas.getContext("experimental-webgl",{ alpha : false, antialias : kha_SystemImpl.options.framebuffer.samplesPerPixel > 1, stencil : true});
			kha_SystemImpl.gl.pixelStorei(37441,1);
			kha_SystemImpl.gl.getExtension("OES_texture_float");
			kha_SystemImpl.gl.getExtension("OES_texture_float_linear");
			kha_SystemImpl.halfFloat = kha_SystemImpl.gl.getExtension("OES_texture_half_float");
			kha_SystemImpl.gl.getExtension("OES_texture_half_float_linear");
			kha_SystemImpl.depthTexture = kha_SystemImpl.gl.getExtension("WEBGL_depth_texture");
			kha_SystemImpl.gl.getExtension("EXT_shader_texture_lod");
			kha_SystemImpl.gl.getExtension("OES_standard_derivatives");
			kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("EXT_texture_filter_anisotropic");
			if(kha_SystemImpl.anisotropicFilter == null) {
				kha_SystemImpl.anisotropicFilter = kha_SystemImpl.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
			}
			kha_SystemImpl.drawBuffers = kha_SystemImpl.gl.getExtension("WEBGL_draw_buffers");
			kha_SystemImpl.elementIndexUint = kha_SystemImpl.gl.getExtension("OES_element_index_uint");
			gl = true;
			kha_Shaders.init();
		} catch( _g ) {
			haxe_Log.trace("Could not initialize WebGL, falling back to <canvas>.",{ fileName : "kha/SystemImpl.hx", lineNumber : 406, className : "kha.SystemImpl", methodName : "loadFinished"});
		}
	}
	kha_SystemImpl.setCanvas(canvas);
	kha_SystemImpl.window = new kha_Window(0,defaultWidth,defaultHeight,canvas);
	if(gl) {
		var g4 = new kha_js_graphics4_Graphics();
		kha_SystemImpl.frame = new kha_Framebuffer(0,null,null,g4);
		kha_SystemImpl.frame.init(new kha_graphics2_Graphics1(kha_SystemImpl.frame),new kha_js_graphics4_Graphics2(kha_SystemImpl.frame),g4);
	} else {
		kha_js_Font.Kravur = kha_Kravur; kha_Kravur = kha_js_Font;
		var g2 = new kha_js_CanvasGraphics(canvas.getContext("2d"));
		kha_SystemImpl.frame = new kha_Framebuffer(0,null,g2,null);
		kha_SystemImpl.frame.init(new kha_graphics2_Graphics1(kha_SystemImpl.frame),g2,null);
	}
	if(!kha_SystemImpl.mobile && kha_audio2_Audio._init()) {
		kha_SystemImpl._hasWebAudio = true;
		kha_audio2_Audio1._init();
	} else if(kha_SystemImpl.mobile) {
		kha_SystemImpl._hasWebAudio = false;
		kha_js_MobileWebAudio._init();
		kha_audio2_Audio1 = kha_js_MobileWebAudio;
	} else {
		kha_SystemImpl._hasWebAudio = false;
		kha_audio2_Audio1 = kha_js_AudioElementAudio;
	}
	kha_vr_VrInterface.instance = new kha_js_vr_VrInterface();
	canvas.focus();
	canvas.onmousedown = kha_SystemImpl.mouseDown;
	canvas.onmousemove = kha_SystemImpl.mouseMove;
	if(kha_SystemImpl.keyboard != null) {
		canvas.onkeydown = kha_SystemImpl.keyDown;
		canvas.onkeyup = kha_SystemImpl.keyUp;
		canvas.onkeypress = kha_SystemImpl.keyPress;
	}
	canvas.onblur = kha_SystemImpl.onBlur;
	canvas.onfocus = kha_SystemImpl.onFocus;
	canvas.onmousewheel = canvas.onwheel = kha_SystemImpl.mouseWheel;
	canvas.onmouseleave = kha_SystemImpl.mouseLeave;
	canvas.addEventListener("wheel mousewheel",kha_SystemImpl.mouseWheel,false);
	canvas.addEventListener("touchstart",kha_SystemImpl.touchDown,false);
	canvas.addEventListener("touchend",kha_SystemImpl.touchUp,false);
	canvas.addEventListener("touchmove",kha_SystemImpl.touchMove,false);
	canvas.addEventListener("touchcancel",kha_SystemImpl.touchCancel,false);
	window.document.addEventListener("dragover",function(event) {
		event.preventDefault();
	});
	window.document.addEventListener("drop",function(event) {
		event.preventDefault();
		if(event.dataTransfer != null && event.dataTransfer.files != null) {
			var _g = 0;
			var _g1 = event.dataTransfer.files;
			while(_g < _g1.length) {
				var file = _g1[_g];
				++_g;
				kha_LoaderImpl.dropFiles.h[file.name] = file;
				kha_System.dropFiles("drop://" + file.name);
			}
		}
	});
	window.addEventListener("unload",function() {
		kha_System.shutdown();
	});
};
kha_SystemImpl.initAnimate = function(callback) {
	var canvas = kha_SystemImpl.getCanvasElement();
	var $window = window;
	var requestAnimationFrame = $window.requestAnimationFrame;
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.mozRequestAnimationFrame;
	}
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.webkitRequestAnimationFrame;
	}
	if(requestAnimationFrame == null) {
		requestAnimationFrame = $window.msRequestAnimationFrame;
	}
	var isRefreshRateDetectionActive = false;
	var lastTimestamp = 0.0;
	var possibleRefreshRates = [30,60,75,90,120,144,240,340,360];
	var _g = [];
	var _g1 = 0;
	var _g2 = possibleRefreshRates.length;
	while(_g1 < _g2) {
		var _ = _g1++;
		_g.push(0);
	}
	var refreshRatesCounts = _g;
	var animate = null;
	animate = function(timestamp) {
		if(requestAnimationFrame == null) {
			window.setTimeout(animate,16.6666666666666679);
		} else {
			requestAnimationFrame(animate);
		}
		var sysGamepads = kha_SystemImpl.getGamepads();
		if(sysGamepads != null) {
			var _g = 0;
			var _g1 = sysGamepads.length;
			while(_g < _g1) {
				var i = _g++;
				var pad = sysGamepads[i];
				if(pad != null) {
					kha_SystemImpl.checkGamepad(pad);
				}
			}
		}
		kha_Scheduler.executeFrame();
		if(canvas.getContext != null) {
			if(kha_SystemImpl.lastCanvasClientWidth != canvas.clientWidth || kha_SystemImpl.lastCanvasClientHeight != canvas.clientHeight) {
				var scale = window.devicePixelRatio;
				canvas.width = canvas.clientWidth * scale | 0;
				canvas.height = canvas.clientHeight * scale | 0;
				kha_SystemImpl.lastCanvasClientWidth = canvas.clientWidth;
				kha_SystemImpl.lastCanvasClientHeight = canvas.clientHeight;
			}
			kha_System.render([kha_SystemImpl.frame]);
			if(kha_SystemImpl.gl != null) {
				kha_SystemImpl.gl.clearColor(1,1,1,1);
				kha_SystemImpl.gl.colorMask(false,false,false,true);
				kha_SystemImpl.gl.clear(16384);
				kha_SystemImpl.gl.colorMask(true,true,true,true);
			}
		}
		if(!isRefreshRateDetectionActive) {
			return;
		}
		if(lastTimestamp == 0) {
			lastTimestamp = timestamp;
			return;
		}
		var fps = Math.floor(1000 / (timestamp - lastTimestamp));
		if(kha_SystemImpl.estimatedRefreshRate < fps) {
			kha_SystemImpl.estimatedRefreshRate = fps;
		}
		lastTimestamp = timestamp;
		var _g3_current = 0;
		var _g3_array = possibleRefreshRates;
		while(_g3_current < _g3_array.length) {
			var _g4_value = _g3_array[_g3_current];
			var _g4_key = _g3_current++;
			var i = _g4_key;
			var rate = _g4_value;
			if(fps > rate - 3 && fps < rate + 3) {
				refreshRatesCounts[i]++;
			}
		}
	};
	window.setTimeout(function() {
		isRefreshRateDetectionActive = true;
		return window.setTimeout(function() {
			isRefreshRateDetectionActive = false;
			var index = possibleRefreshRates.indexOf(60);
			var max = 0;
			var _g3_current = 0;
			var _g3_array = refreshRatesCounts;
			while(_g3_current < _g3_array.length) {
				var _g4_value = _g3_array[_g3_current];
				var _g4_key = _g3_current++;
				var i = _g4_key;
				var count = _g4_value;
				if(count > max) {
					max = count;
					index = i;
				}
			}
			return kha_SystemImpl.estimatedRefreshRate = possibleRefreshRates[index];
		},1000);
	},500);
	kha_Scheduler.start();
	requestAnimationFrame(animate);
	callback(kha_SystemImpl.window);
};
kha_SystemImpl.lockMouse = function() {
	if(($_=kha_SystemImpl.khanvas,$bind($_,$_.requestPointerLock))) {
		kha_SystemImpl.khanvas.requestPointerLock();
	} else if(kha_SystemImpl.khanvas.mozRequestPointerLock) {
		kha_SystemImpl.khanvas.mozRequestPointerLock();
	} else if(kha_SystemImpl.khanvas.webkitRequestPointerLock) {
		kha_SystemImpl.khanvas.webkitRequestPointerLock();
	}
};
kha_SystemImpl.unlockMouse = function() {
	if(document.exitPointerLock) {
		document.exitPointerLock();
	} else if(document.mozExitPointerLock) {
		document.mozExitPointerLock();
	} else if(document.webkitExitPointerLock) {
		document.webkitExitPointerLock();
	}
};
kha_SystemImpl.canLockMouse = function() {
	return 'pointerLockElement' in document ||
		'mozPointerLockElement' in document ||
		'webkitPointerLockElement' in document;
};
kha_SystemImpl.isMouseLocked = function() {
	return document.pointerLockElement === kha_SystemImpl.khanvas ||
			document.mozPointerLockElement === kha_SystemImpl.khanvas ||
			document.webkitPointerLockElement === kha_SystemImpl.khanvas;
};
kha_SystemImpl.notifyOfMouseLockChange = function(func,error) {
	window.document.addEventListener("pointerlockchange",func,false);
	window.document.addEventListener("mozpointerlockchange",func,false);
	window.document.addEventListener("webkitpointerlockchange",func,false);
	window.document.addEventListener("pointerlockerror",error,false);
	window.document.addEventListener("mozpointerlockerror",error,false);
	window.document.addEventListener("webkitpointerlockerror",error,false);
};
kha_SystemImpl.removeFromMouseLockChange = function(func,error) {
	window.document.removeEventListener("pointerlockchange",func,false);
	window.document.removeEventListener("mozpointerlockchange",func,false);
	window.document.removeEventListener("webkitpointerlockchange",func,false);
	window.document.removeEventListener("pointerlockerror",error,false);
	window.document.removeEventListener("mozpointerlockerror",error,false);
	window.document.removeEventListener("webkitpointerlockerror",error,false);
};
kha_SystemImpl.setMouseXY = function(event) {
	var rect = kha_SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = kha_SystemImpl.khanvas.clientLeft;
	var borderHeight = kha_SystemImpl.khanvas.clientTop;
	kha_SystemImpl.mouseX = (event.clientX - rect.left - borderWidth) * kha_SystemImpl.khanvas.width / (rect.width - 2 * borderWidth) | 0;
	kha_SystemImpl.mouseY = (event.clientY - rect.top - borderHeight) * kha_SystemImpl.khanvas.height / (rect.height - 2 * borderHeight) | 0;
};
kha_SystemImpl.unlockiOSSound = function() {
	if(!kha_SystemImpl.ios || kha_SystemImpl.iosSoundEnabled) {
		return;
	}
	var buffer = kha_js_MobileWebAudio._context.createBuffer(1,1,22050);
	var source = kha_js_MobileWebAudio._context.createBufferSource();
	source.buffer = buffer;
	source.connect(kha_js_MobileWebAudio._context.destination);
	source.start();
	source.stop();
	kha_SystemImpl.iosSoundEnabled = true;
};
kha_SystemImpl.unlockSound = function() {
	if(!kha_SystemImpl.soundEnabled) {
		var context = kha_audio2_Audio._context;
		if(context == null) {
			context = kha_audio2_Audio1._context;
		}
		if(context != null) {
			context.resume().then(function(c) {
				kha_SystemImpl.soundEnabled = true;
			}).catch(function(err) {
				haxe_Log.trace(err,{ fileName : "kha/SystemImpl.hx", lineNumber : 685, className : "kha.SystemImpl", methodName : "unlockSound"});
			});
		}
		kha_audio2_Audio.wakeChannels();
	}
	kha_SystemImpl.unlockiOSSound();
};
kha_SystemImpl.mouseLeave = function() {
	kha_SystemImpl.mouse.sendLeaveEvent(0);
};
kha_SystemImpl.mouseWheel = function(event) {
	kha_SystemImpl.unlockSound();
	kha_SystemImpl.insideInputEvent = true;
	var _g = kha_input_Mouse.wheelEventBlockBehavior;
	switch(_g._hx_index) {
	case 0:
		event.preventDefault();
		break;
	case 1:
		break;
	case 2:
		var func = _g.func;
		if(func(event)) {
			event.preventDefault();
		}
		break;
	}
	if(event.deltaMode == 0) {
		if(event.deltaY < 0) {
			kha_SystemImpl.mouse.sendWheelEvent(0,-1);
		} else if(event.deltaY > 0) {
			kha_SystemImpl.mouse.sendWheelEvent(0,1);
		}
		kha_SystemImpl.insideInputEvent = false;
		return;
	}
	if(event.deltaMode == 1) {
		kha_SystemImpl.minimumScroll = Math.min(kha_SystemImpl.minimumScroll,Math.abs(event.deltaY)) | 0;
		kha_SystemImpl.mouse.sendWheelEvent(0,event.deltaY / kha_SystemImpl.minimumScroll | 0);
		kha_SystemImpl.insideInputEvent = false;
		return;
	}
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseDown = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	kha_SystemImpl.setMouseXY(event);
	if(event.which == 1) {
		kha_SystemImpl.mouse.sendDownEvent(0,0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mousemove",kha_SystemImpl.documentMouseMove,true);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",kha_SystemImpl.mouseLeftUp);
	} else if(event.which == 2) {
		kha_SystemImpl.mouse.sendDownEvent(0,2,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",kha_SystemImpl.mouseMiddleUp);
	} else if(event.which == 3) {
		kha_SystemImpl.mouse.sendDownEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",kha_SystemImpl.mouseRightUp);
	} else if(event.which == 4) {
		kha_SystemImpl.mouse.sendDownEvent(0,3,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",kha_SystemImpl.mouseBackUp);
	} else if(event.which == 5) {
		kha_SystemImpl.mouse.sendDownEvent(0,4,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
		kha_SystemImpl.khanvas.ownerDocument.addEventListener("mouseup",kha_SystemImpl.mouseForwardUp);
	}
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseLeftUp = function(event) {
	kha_SystemImpl.unlockSound();
	if(event.which != 1) {
		return;
	}
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",kha_SystemImpl.mouseLeftUp);
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mousemove",kha_SystemImpl.documentMouseMove,true);
	kha_SystemImpl.mouse.sendUpEvent(0,0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseMiddleUp = function(event) {
	kha_SystemImpl.unlockSound();
	if(event.which != 2) {
		return;
	}
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",kha_SystemImpl.mouseMiddleUp);
	kha_SystemImpl.mouse.sendUpEvent(0,2,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseRightUp = function(event) {
	kha_SystemImpl.unlockSound();
	if(event.which != 3) {
		return;
	}
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",kha_SystemImpl.mouseRightUp);
	kha_SystemImpl.mouse.sendUpEvent(0,1,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseBackUp = function(event) {
	kha_SystemImpl.unlockSound();
	if(event.which != 4) {
		return;
	}
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",kha_SystemImpl.mouseBackUp);
	kha_SystemImpl.mouse.sendUpEvent(0,3,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.mouseForwardUp = function(event) {
	kha_SystemImpl.unlockSound();
	if(event.which != 5) {
		return;
	}
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.khanvas.ownerDocument.removeEventListener("mouseup",kha_SystemImpl.mouseForwardUp);
	kha_SystemImpl.mouse.sendUpEvent(0,4,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.documentMouseMove = function(event) {
	event.stopPropagation();
	kha_SystemImpl.mouseMove(event);
};
kha_SystemImpl.mouseMove = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	var lastMouseX = kha_SystemImpl.mouseX;
	var lastMouseY = kha_SystemImpl.mouseY;
	kha_SystemImpl.setMouseXY(event);
	var movementX = event.movementX;
	var movementY = event.movementY;
	if(event.movementX == null) {
		movementX = event.mozMovementX != null ? event.mozMovementX : event.webkitMovementX != null ? event.webkitMovementX : kha_SystemImpl.mouseX - lastMouseX;
		movementY = event.mozMovementY != null ? event.mozMovementY : event.webkitMovementY != null ? event.webkitMovementY : kha_SystemImpl.mouseY - lastMouseY;
	}
	if(kha_SystemImpl.firefox) {
		movementX = movementX * window.devicePixelRatio | 0;
		movementY = movementY * window.devicePixelRatio | 0;
	}
	kha_SystemImpl.mouse.sendMoveEvent(0,kha_SystemImpl.mouseX,kha_SystemImpl.mouseY,movementX,movementY);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.setTouchXY = function(touch) {
	var rect = kha_SystemImpl.khanvas.getBoundingClientRect();
	var borderWidth = kha_SystemImpl.khanvas.clientLeft;
	var borderHeight = kha_SystemImpl.khanvas.clientTop;
	kha_SystemImpl.touchX = (touch.clientX - rect.left - borderWidth) * kha_SystemImpl.khanvas.width / (rect.width - 2 * borderWidth) | 0;
	kha_SystemImpl.touchY = (touch.clientY - rect.top - borderHeight) * kha_SystemImpl.khanvas.height / (rect.height - 2 * borderHeight) | 0;
};
kha_SystemImpl.touchDown = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	event.stopPropagation();
	var _g = kha_input_Surface.touchDownEventBlockBehavior;
	switch(_g._hx_index) {
	case 0:
		event.preventDefault();
		break;
	case 1:
		break;
	case 2:
		var func = _g.func;
		if(func(event)) {
			event.preventDefault();
		}
		break;
	}
	var index = 0;
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(kha_SystemImpl.ios) {
			id = kha_SystemImpl.iosTouchs.indexOf(-1);
			if(id == -1) {
				id = kha_SystemImpl.iosTouchs.length;
			}
			kha_SystemImpl.iosTouchs[id] = touch.identifier;
		}
		kha_SystemImpl.setTouchXY(touch);
		kha_SystemImpl.mouse.sendDownEvent(0,0,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		kha_SystemImpl.surface.sendTouchStartEvent(id,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		if(index == 0) {
			kha_SystemImpl.lastFirstTouchX = kha_SystemImpl.touchX;
			kha_SystemImpl.lastFirstTouchY = kha_SystemImpl.touchY;
		}
		++index;
	}
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.touchUp = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(kha_SystemImpl.ios) {
			id = kha_SystemImpl.iosTouchs.indexOf(id);
			kha_SystemImpl.iosTouchs[id] = -1;
		}
		kha_SystemImpl.setTouchXY(touch);
		kha_SystemImpl.mouse.sendUpEvent(0,0,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		kha_SystemImpl.surface.sendTouchEndEvent(id,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
	}
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.touchMove = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	var index = 0;
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		kha_SystemImpl.setTouchXY(touch);
		if(index == 0) {
			var movementX = kha_SystemImpl.touchX - kha_SystemImpl.lastFirstTouchX;
			var movementY = kha_SystemImpl.touchY - kha_SystemImpl.lastFirstTouchY;
			kha_SystemImpl.lastFirstTouchX = kha_SystemImpl.touchX;
			kha_SystemImpl.lastFirstTouchY = kha_SystemImpl.touchY;
			kha_SystemImpl.mouse.sendMoveEvent(0,kha_SystemImpl.touchX,kha_SystemImpl.touchY,movementX,movementY);
		}
		var id = touch.identifier;
		if(kha_SystemImpl.ios) {
			id = kha_SystemImpl.iosTouchs.indexOf(id);
		}
		kha_SystemImpl.surface.sendMoveEvent(id,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		++index;
	}
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.touchCancel = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	var _g = 0;
	var _g1 = event.changedTouches;
	while(_g < _g1.length) {
		var touch = _g1[_g];
		++_g;
		var id = touch.identifier;
		if(kha_SystemImpl.ios) {
			id = kha_SystemImpl.iosTouchs.indexOf(id);
		}
		kha_SystemImpl.setTouchXY(touch);
		kha_SystemImpl.mouse.sendUpEvent(0,0,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
		kha_SystemImpl.surface.sendTouchEndEvent(id,kha_SystemImpl.touchX,kha_SystemImpl.touchY);
	}
	kha_SystemImpl.iosTouchs = [];
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.onBlur = function() {
	kha_System.background();
};
kha_SystemImpl.onFocus = function() {
	kha_System.foreground();
};
kha_SystemImpl.keyDown = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	var _g = kha_input_Keyboard.keyBehavior;
	switch(_g._hx_index) {
	case 0:
		kha_SystemImpl.defaultKeyBlock(event);
		break;
	case 1:
		event.preventDefault();
		break;
	case 2:
		break;
	case 3:
		var func = _g.func;
		if(func(event.keyCode)) {
			event.preventDefault();
		}
		break;
	}
	event.stopPropagation();
	if(kha_SystemImpl.ie) {
		if(kha_SystemImpl.pressedKeys[event.keyCode]) {
			event.preventDefault();
			return;
		}
		kha_SystemImpl.pressedKeys[event.keyCode] = true;
	} else if(event.repeat) {
		event.preventDefault();
		return;
	}
	var keyCode = kha_SystemImpl.fixedKeyCode(event);
	kha_SystemImpl.keyboard.sendDownEvent(keyCode);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.fixedKeyCode = function(event) {
	switch(event.keyCode) {
	case 91:case 93:
		return 224;
	case 186:
		return 59;
	case 187:
		return 61;
	case 189:
		return 173;
	default:
		return event.keyCode;
	}
};
kha_SystemImpl.defaultKeyBlock = function(e) {
	if(e.ctrlKey || e.metaKey) {
		if(e.keyCode == 67 || e.keyCode == 88 || e.keyCode == 86) {
			return;
		}
		if(e.metaKey && e.keyCode == 81) {
			return;
		}
		e.preventDefault();
		return;
	}
	if(e.keyCode >= 112 && e.keyCode <= 123) {
		return;
	}
	if(e.key == null || e.key.length == 1) {
		return;
	}
	e.preventDefault();
};
kha_SystemImpl.keyUp = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	event.preventDefault();
	event.stopPropagation();
	if(kha_SystemImpl.ie) {
		kha_SystemImpl.pressedKeys[event.keyCode] = false;
	}
	var keyCode = kha_SystemImpl.fixedKeyCode(event);
	kha_SystemImpl.keyboard.sendUpEvent(keyCode);
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.keyPress = function(event) {
	kha_SystemImpl.insideInputEvent = true;
	kha_SystemImpl.unlockSound();
	if(event.which == 0) {
		return;
	}
	event.preventDefault();
	event.stopPropagation();
	var code = event.which;
	kha_SystemImpl.keyboard.sendPressEvent(String.fromCodePoint(code));
	kha_SystemImpl.insideInputEvent = false;
};
kha_SystemImpl.getGamepadId = function(index) {
	var sysGamepads = kha_SystemImpl.getGamepads();
	if(sysGamepads != null && sysGamepads[index]) {
		return sysGamepads[index].id;
	}
	return "unknown";
};
kha_SystemImpl.getGamepadVendor = function(index) {
	return "unknown";
};
kha_SystemImpl.setGamepadRumble = function(index,leftAmount,rightAmount) {
};
kha_SystemImpl.getGamepads = function() {
	if(kha_SystemImpl.chrome && kha_vr_VrInterface.instance != null && kha_vr_VrInterface.instance.IsVrEnabled()) {
		return null;
	}
	if(navigator.getGamepads) {
		return $global.navigator.getGamepads();
	} else {
		return null;
	}
};
kha_SystemImpl.getPen = function(num) {
	return null;
};
var kha_WebGLImage = function(width,height,format,renderTarget,depthStencilFormat,samples) {
	this.MSAAFrameBuffer = null;
	this.depthTexture = null;
	this.texture = null;
	this.renderBuffer = null;
	this.frameBuffer = null;
	this.myWidth = width;
	this.myHeight = height;
	this.myFormat = format;
	this.renderTarget = renderTarget;
	this.samples = samples;
	this.image = null;
	this.video = null;
	this.depthStencilFormat = depthStencilFormat;
	kha_WebGLImage.init();
	if(renderTarget) {
		this.createTexture();
	}
};
$hxClasses["kha.WebGLImage"] = kha_WebGLImage;
kha_WebGLImage.__name__ = true;
kha_WebGLImage.init = function() {
	if(kha_WebGLImage.context == null) {
		kha_WebGLImage.canvas = window.document.createElement("canvas");
		if(kha_WebGLImage.canvas != null) {
			kha_WebGLImage.context = kha_WebGLImage.canvas.getContext("2d");
			kha_WebGLImage.canvas.width = 4096;
			kha_WebGLImage.canvas.height = 4096;
			kha_WebGLImage.context.globalCompositeOperation = "copy";
		}
	}
};
kha_WebGLImage.__super__ = kha_Image;
kha_WebGLImage.prototype = $extend(kha_Image.prototype,{
	get_g4: function() {
		if(this.graphics4 == null) {
			this.graphics4 = new kha_js_graphics4_Graphics(this);
		}
		return this.graphics4;
	}
	,get_width: function() {
		return this.myWidth;
	}
	,get_height: function() {
		return this.myHeight;
	}
	,get_realWidth: function() {
		return this.myWidth;
	}
	,get_realHeight: function() {
		return this.myHeight;
	}
	,createTexture: function() {
		if(kha_SystemImpl.gl == null) {
			return;
		}
		this.texture = kha_SystemImpl.gl.createTexture();
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.texParameteri(3553,10240,9729);
		kha_SystemImpl.gl.texParameteri(3553,10241,9729);
		kha_SystemImpl.gl.texParameteri(3553,10242,33071);
		kha_SystemImpl.gl.texParameteri(3553,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = kha_SystemImpl.gl.createFramebuffer();
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			switch(this.myFormat) {
			case 0:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
				break;
			case 2:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.get_realWidth(),this.get_realHeight(),0,6408,5126,null);
				break;
			case 3:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5123,null);
				break;
			case 4:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.get_realWidth(),this.get_realHeight(),0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				break;
			case 5:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.get_realWidth(),this.get_realHeight(),0,kha_SystemImpl.gl2 ? 6403 : 6406,5126,null);
				break;
			case 6:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.get_realWidth(),this.get_realHeight(),0,kha_SystemImpl.gl2 ? 6403 : 6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				break;
			default:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
			}
			if(this.myFormat == 3) {
				kha_SystemImpl.gl.texParameteri(3553,10240,9728);
				kha_SystemImpl.gl.texParameteri(3553,10241,9728);
				kha_SystemImpl.gl.framebufferTexture2D(36160,36096,3553,this.texture,0);
				if(!kha_SystemImpl.gl2) {
					var colortex = kha_SystemImpl.gl.createTexture();
					kha_SystemImpl.gl.bindTexture(3553,colortex);
					kha_SystemImpl.gl.texImage2D(3553,0,6408,this.get_realWidth(),this.get_realHeight(),0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,3553,colortex,0);
					kha_SystemImpl.gl.bindTexture(3553,this.texture);
				}
			} else {
				if(this.samples > 1 && kha_SystemImpl.gl2) {
					this.MSAAFrameBuffer = kha_SystemImpl.gl.createFramebuffer();
					this.MSAAColorBuffer = kha_SystemImpl.gl.createRenderbuffer();
					kha_SystemImpl.gl.bindRenderbuffer(36161,this.MSAAColorBuffer);
					var MSAAFormat;
					switch(this.myFormat) {
					case 0:
						MSAAFormat = kha_SystemImpl.gl.RGBA8;
						break;
					case 2:
						MSAAFormat = kha_SystemImpl.gl.RGBA32F;
						break;
					case 4:
						MSAAFormat = kha_SystemImpl.gl.RGBA16F;
						break;
					case 5:
						MSAAFormat = 33326;
						break;
					case 6:
						MSAAFormat = 33325;
						break;
					default:
						MSAAFormat = kha_SystemImpl.gl.RGBA8;
					}
					kha_SystemImpl.gl.renderbufferStorageMultisample(36161,this.samples,MSAAFormat,this.get_realWidth(),this.get_realHeight());
					kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
					kha_SystemImpl.gl.framebufferRenderbuffer(36160,36064,36161,this.MSAAColorBuffer);
					kha_SystemImpl.gl.bindFramebuffer(36160,this.MSAAFrameBuffer);
				}
				kha_SystemImpl.gl.framebufferTexture2D(36160,36064,3553,this.texture,0);
				kha_SystemImpl.gl.bindFramebuffer(36160,null);
			}
			this.initDepthStencilBuffer(this.depthStencilFormat);
			var e = kha_SystemImpl.gl.checkFramebufferStatus(36160);
			if(e != 36053) {
				haxe_Log.trace("checkframebufferStatus error " + e,{ fileName : "kha/WebGLImage.hx", lineNumber : 270, className : "kha.WebGLImage", methodName : "createTexture"});
			}
			kha_SystemImpl.gl.bindRenderbuffer(36161,null);
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
		} else if(this.video != null) {
			kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video);
		} else {
			switch(this.myFormat) {
			case 0:
				if(((this.image) instanceof Uint8Array)) {
					kha_SystemImpl.gl.texImage2D(3553,0,6408,this.myWidth,this.myHeight,0,6408,5121,this.image);
				} else {
					kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.image);
				}
				break;
			case 1:
				kha_SystemImpl.gl.texImage2D(3553,0,6409,this.myWidth,this.myHeight,0,6409,5121,this.image);
				break;
			case 2:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,this.image);
				break;
			case 4:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,this.image);
				break;
			case 5:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,kha_SystemImpl.gl2 ? 6403 : 6406,5126,this.image);
				break;
			case 6:
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,kha_SystemImpl.gl2 ? 6403 : 6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,this.image);
				break;
			default:
				kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.image);
			}
		}
		kha_SystemImpl.gl.bindTexture(3553,null);
	}
	,initDepthStencilBuffer: function(depthStencilFormat) {
		switch(depthStencilFormat) {
		case 0:
			break;
		case 1:case 5:
			if(kha_SystemImpl.depthTexture == null) {
				this.renderBuffer = kha_SystemImpl.gl.createRenderbuffer();
				kha_SystemImpl.gl.bindRenderbuffer(36161,this.renderBuffer);
				kha_SystemImpl.gl.renderbufferStorage(36161,33189,this.get_realWidth(),this.get_realHeight());
				kha_SystemImpl.gl.framebufferRenderbuffer(36160,36096,36161,this.renderBuffer);
			} else {
				this.depthTexture = kha_SystemImpl.gl.createTexture();
				kha_SystemImpl.gl.bindTexture(3553,this.depthTexture);
				if(depthStencilFormat == 1) {
					kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33190 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5125,null);
				} else {
					kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.get_realWidth(),this.get_realHeight(),0,6402,5123,null);
				}
				kha_SystemImpl.gl.texParameteri(3553,10240,9728);
				kha_SystemImpl.gl.texParameteri(3553,10241,9728);
				kha_SystemImpl.gl.texParameteri(3553,10242,33071);
				kha_SystemImpl.gl.texParameteri(3553,10243,33071);
				kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
				if(this.samples > 1 && kha_SystemImpl.gl2) {
					this.MSAADepthBuffer = kha_SystemImpl.gl.createRenderbuffer();
					kha_SystemImpl.gl.bindRenderbuffer(36161,this.MSAADepthBuffer);
					if(depthStencilFormat == 1) {
						kha_SystemImpl.gl.renderbufferStorageMultisample(36161,this.samples,33190,this.get_realWidth(),this.get_realHeight());
					} else {
						kha_SystemImpl.gl.renderbufferStorageMultisample(36161,this.samples,33189,this.get_realWidth(),this.get_realHeight());
					}
					kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
					kha_SystemImpl.gl.framebufferRenderbuffer(36160,36096,36161,this.MSAADepthBuffer);
					kha_SystemImpl.gl.bindFramebuffer(36160,this.MSAAFrameBuffer);
				}
				kha_SystemImpl.gl.framebufferTexture2D(36160,36096,3553,this.depthTexture,0);
				kha_SystemImpl.gl.bindFramebuffer(36160,null);
			}
			break;
		case 2:case 3:case 4:
			if(kha_SystemImpl.depthTexture == null) {
				this.renderBuffer = kha_SystemImpl.gl.createRenderbuffer();
				kha_SystemImpl.gl.bindRenderbuffer(36161,this.renderBuffer);
				kha_SystemImpl.gl.renderbufferStorage(36161,34041,this.get_realWidth(),this.get_realHeight());
				kha_SystemImpl.gl.framebufferRenderbuffer(36160,33306,36161,this.renderBuffer);
			} else {
				this.depthTexture = kha_SystemImpl.gl.createTexture();
				kha_SystemImpl.gl.bindTexture(3553,this.depthTexture);
				kha_SystemImpl.gl.texImage2D(3553,0,kha_SystemImpl.gl2 ? 35056 : 34041,this.get_realWidth(),this.get_realHeight(),0,34041,kha_SystemImpl.depthTexture.UNSIGNED_INT_24_8_WEBGL,null);
				kha_SystemImpl.gl.texParameteri(3553,10240,9728);
				kha_SystemImpl.gl.texParameteri(3553,10241,9728);
				kha_SystemImpl.gl.texParameteri(3553,10242,33071);
				kha_SystemImpl.gl.texParameteri(3553,10243,33071);
				kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
				if(this.samples > 1 && kha_SystemImpl.gl2) {
					this.MSAADepthBuffer = kha_SystemImpl.gl.createRenderbuffer();
					kha_SystemImpl.gl.bindRenderbuffer(36161,this.MSAADepthBuffer);
					kha_SystemImpl.gl.renderbufferStorageMultisample(36161,this.samples,35056,this.get_realWidth(),this.get_realHeight());
					kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
					kha_SystemImpl.gl.framebufferRenderbuffer(36160,33306,36161,this.MSAADepthBuffer);
					kha_SystemImpl.gl.bindFramebuffer(36160,this.MSAAFrameBuffer);
				}
				kha_SystemImpl.gl.framebufferTexture2D(36160,33306,3553,this.depthTexture,0);
			}
			break;
		}
	}
	,set: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		if(this.video != null) {
			kha_SystemImpl.gl.texImage2D(3553,0,6408,6408,5121,this.video);
		}
	}
	,setDepth: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(3553,this.depthTexture);
	}
	,setDepthStencilFrom: function(image) {
		this.depthTexture = (js_Boot.__cast(image , kha_WebGLImage)).depthTexture;
		kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
		kha_SystemImpl.gl.framebufferTexture2D(36160,36096,3553,this.depthTexture,0);
		if(this.samples > 1 && kha_SystemImpl.gl2) {
			this.MSAADepthBuffer = (js_Boot.__cast(image , kha_WebGLImage)).MSAADepthBuffer;
			kha_SystemImpl.gl.framebufferRenderbuffer(36160,36096,36161,this.MSAADepthBuffer);
		}
	}
	,bytesToArray: function(bytes) {
		switch(this.myFormat) {
		case 0:case 1:
			return new Uint8Array(bytes.b.bufferValue);
		case 2:case 4:case 5:case 6:
			return new Float32Array(bytes.b.bufferValue);
		default:
			return new Uint8Array(bytes.b.bufferValue);
		}
	}
	,unload: function() {
		if(this.texture != null) {
			kha_SystemImpl.gl.deleteTexture(this.texture);
		}
		if(this.depthTexture != null) {
			kha_SystemImpl.gl.deleteTexture(this.depthTexture);
		}
		if(this.frameBuffer != null) {
			kha_SystemImpl.gl.deleteFramebuffer(this.frameBuffer);
		}
		if(this.renderBuffer != null) {
			kha_SystemImpl.gl.deleteRenderbuffer(this.renderBuffer);
		}
		if(this.MSAAFrameBuffer != null) {
			kha_SystemImpl.gl.deleteFramebuffer(this.MSAAFrameBuffer);
		}
		if(this.MSAAColorBuffer != null) {
			kha_SystemImpl.gl.deleteRenderbuffer(this.MSAAColorBuffer);
		}
		if(this.MSAADepthBuffer != null) {
			kha_SystemImpl.gl.deleteRenderbuffer(this.MSAADepthBuffer);
		}
	}
	,generateMipmaps: function(levels) {
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		kha_SystemImpl.gl.generateMipmap(3553);
	}
	,setMipmaps: function(mipmaps) {
		kha_SystemImpl.gl.bindTexture(3553,this.texture);
		if(this.myFormat == 2) {
			var _g = 0;
			var _g1 = mipmaps.length;
			while(_g < _g1) {
				var i = _g++;
				kha_SystemImpl.gl.texImage2D(3553,i + 1,kha_SystemImpl.gl2 ? 34836 : 6408,mipmaps[i].get_width(),mipmaps[i].get_height(),0,6408,5126,(js_Boot.__cast(mipmaps[i] , kha_WebGLImage)).image);
			}
		} else if(this.myFormat == 4) {
			var _g = 0;
			var _g1 = mipmaps.length;
			while(_g < _g1) {
				var i = _g++;
				kha_SystemImpl.gl.texImage2D(3553,i + 1,kha_SystemImpl.gl2 ? 34842 : 6408,mipmaps[i].get_width(),mipmaps[i].get_height(),0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,(js_Boot.__cast(mipmaps[i] , kha_WebGLImage)).image);
			}
		} else {
			var _g = 0;
			var _g1 = mipmaps.length;
			while(_g < _g1) {
				var i = _g++;
				kha_SystemImpl.gl.texImage2D(3553,i + 1,6408,6408,5121,(js_Boot.__cast(mipmaps[i] , kha_WebGLImage)).image);
			}
		}
	}
	,__class__: kha_WebGLImage
});
var kha_Window = function(num,defaultWidth,defaultHeight,canvas) {
	var _gthis = this;
	this.num = num;
	this.canvas = canvas;
	this.defaultWidth = defaultWidth;
	this.defaultHeight = defaultHeight;
	kha_Window.windows.push(this);
	kha_Window.resizeCallbacks[num] = [];
	kha_Window.windows.push(this);
	var observer = new MutationObserver(function(mutations,observer) {
		var isResize = false;
		var _g = 0;
		while(_g < mutations.length) {
			var mutation = mutations[_g];
			++_g;
			if(mutation.attributeName == "width" || mutation.attributeName == "height") {
				isResize = true;
				break;
			}
		}
		if(isResize) {
			_gthis.resize(canvas.width,canvas.height);
		}
	});
	observer.observe(canvas,{ attributes : true});
};
$hxClasses["kha.Window"] = kha_Window;
kha_Window.__name__ = true;
kha_Window.__properties__ = {get_all:"get_all"};
kha_Window.get = function(index) {
	return kha_Window.windows[index];
};
kha_Window.get_all = function() {
	return kha_Window.windows;
};
kha_Window.prototype = {
	resize: function(width,height) {
		var _g = 0;
		var _g1 = kha_Window.resizeCallbacks[this.num];
		while(_g < _g1.length) {
			var callback = _g1[_g];
			++_g;
			callback(width,height);
		}
	}
	,get_width: function() {
		if(this.canvas.width == 0) {
			return this.defaultWidth;
		} else {
			return this.canvas.width;
		}
	}
	,get_height: function() {
		if(this.canvas.height == 0) {
			return this.defaultHeight;
		} else {
			return this.canvas.height;
		}
	}
	,get_vSynced: function() {
		return true;
	}
	,__class__: kha_Window
	,__properties__: {get_vSynced:"get_vSynced",get_height:"get_height",get_width:"get_width"}
};
var kha_WindowOptions = function(title,x,y,width,height,display,visible,windowFeatures,mode) {
	if(mode == null) {
		mode = 0;
	}
	if(visible == null) {
		visible = true;
	}
	if(display == null) {
		display = -1;
	}
	if(height == null) {
		height = 600;
	}
	if(width == null) {
		width = 800;
	}
	if(y == null) {
		y = -1;
	}
	if(x == null) {
		x = -1;
	}
	this.mode = 0;
	this.windowFeatures = 1 | 4 | 2;
	this.visible = true;
	this.display = -1;
	this.height = 600;
	this.width = 800;
	this.y = -1;
	this.x = -1;
	this.title = null;
	this.title = title;
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
	this.display = display;
	this.visible = visible;
	this.windowFeatures = windowFeatures == null ? 1 | 4 | 2 : windowFeatures;
	this.mode = mode;
};
$hxClasses["kha.WindowOptions"] = kha_WindowOptions;
kha_WindowOptions.__name__ = true;
kha_WindowOptions.prototype = {
	__class__: kha_WindowOptions
};
var kha_arrays_ByteArray = {};
kha_arrays_ByteArray._new = function(buffer,byteOffset,byteLength) {
	var this1 = new DataView(buffer,byteOffset,byteLength);
	return this1;
};
kha_arrays_ByteArray.make = function(byteLength) {
	return kha_arrays_ByteArray._new(kha_arrays_ByteBuffer.create(byteLength));
};
var kha_arrays_ByteBuffer = {};
kha_arrays_ByteBuffer.create = function(length) {
	return kha_arrays_ByteBuffer._new(length);
};
kha_arrays_ByteBuffer._new = function(length) {
	var this1 = new ArrayBuffer(length);
	return this1;
};
var kha_arrays_Float32Array = {};
kha_arrays_Float32Array._new = function(elements) {
	var this1 = kha_arrays_ByteArray.make(elements * 4);
	return this1;
};
var kha_arrays_Int16Array = {};
kha_arrays_Int16Array._new = function(elements) {
	var this1 = kha_arrays_ByteArray.make(elements * 2);
	return this1;
};
var kha_arrays_Uint32Array = {};
kha_arrays_Uint32Array._new = function(elements) {
	var this1 = kha_arrays_ByteArray.make(elements * 4);
	return this1;
};
var kha_audio1_AudioChannel = function() { };
$hxClasses["kha.audio1.AudioChannel"] = kha_audio1_AudioChannel;
kha_audio1_AudioChannel.__name__ = true;
kha_audio1_AudioChannel.__isInterface__ = true;
kha_audio1_AudioChannel.prototype = {
	__class__: kha_audio1_AudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume"}
};
var kha_internal_IntBox = function(value) {
	this.value = value;
};
$hxClasses["kha.internal.IntBox"] = kha_internal_IntBox;
kha_internal_IntBox.__name__ = true;
kha_internal_IntBox.prototype = {
	__class__: kha_internal_IntBox
};
var kha_audio2_Audio = function() { };
$hxClasses["kha.audio2.Audio"] = kha_audio2_Audio;
kha_audio2_Audio.__name__ = true;
kha_audio2_Audio.initContext = function() {
	try {
		kha_audio2_Audio._context = new AudioContext();
		return;
	} catch( _g ) {
	}
	try {
		this._context = new webkitAudioContext();
		return;
	} catch( _g ) {
	}
};
kha_audio2_Audio._init = function() {
	kha_audio2_Audio.initContext();
	if(kha_audio2_Audio._context == null) {
		return false;
	}
	kha_audio2_Audio.samplesPerSecond = Math.round(kha_audio2_Audio._context.sampleRate);
	var bufferSize = 2048;
	kha_audio2_Audio.buffer = new kha_audio2_Buffer(bufferSize * 4,2,kha_audio2_Audio._context.sampleRate | 0);
	kha_audio2_Audio.processingNode = kha_audio2_Audio._context.createScriptProcessor(bufferSize,0,2);
	kha_audio2_Audio.processingNode.onaudioprocess = function(e) {
		var output1 = e.outputBuffer.getChannelData(0);
		var output2 = e.outputBuffer.getChannelData(1);
		if(kha_audio2_Audio.audioCallback != null) {
			kha_audio2_Audio.intBox.value = e.outputBuffer.length * 2;
			kha_audio2_Audio.audioCallback(kha_audio2_Audio.intBox,kha_audio2_Audio.buffer);
			var _g = 0;
			var _g1 = e.outputBuffer.length;
			while(_g < _g1) {
				var i = _g++;
				output1[i] = kha_audio2_Audio.buffer.data.getFloat32(kha_audio2_Audio.buffer.readLocation * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				kha_audio2_Audio.buffer.readLocation += 1;
				output2[i] = kha_audio2_Audio.buffer.data.getFloat32(kha_audio2_Audio.buffer.readLocation * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				kha_audio2_Audio.buffer.readLocation += 1;
				if(kha_audio2_Audio.buffer.readLocation >= kha_audio2_Audio.buffer.size) {
					kha_audio2_Audio.buffer.readLocation = 0;
				}
			}
		} else {
			var _g = 0;
			var _g1 = e.outputBuffer.length;
			while(_g < _g1) {
				var i = _g++;
				output1[i] = 0;
				output2[i] = 0;
			}
		}
	};
	kha_audio2_Audio.processingNode.connect(kha_audio2_Audio._context.destination);
	return true;
};
kha_audio2_Audio.wakeChannels = function() {
	kha_SystemImpl.mobileAudioPlaying = true;
	var _g = 0;
	var _g1 = kha_audio2_Audio.virtualChannels;
	while(_g < _g1.length) {
		var channel = _g1[_g];
		++_g;
		channel.wake();
	}
};
kha_audio2_Audio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var element = window.document.createElement("audio");
	var blob = new Blob([sound.compressedData.b.bufferValue],{ type : "audio/mp4"});
	element.src = URL.createObjectURL(blob);
	element.loop = loop;
	var channel = new kha_js_AEAudioChannel(element,loop);
	if(kha_SystemImpl.mobileAudioPlaying) {
		channel.play();
		return channel;
	} else {
		var virtualChannel = new kha_audio2_VirtualStreamChannel(channel,loop);
		kha_audio2_Audio.virtualChannels.push(virtualChannel);
		return virtualChannel;
	}
};
var kha_audio2_Audio1 = function() { };
$hxClasses["kha.audio2.Audio1"] = kha_audio2_Audio1;
kha_audio2_Audio1.__name__ = true;
kha_audio2_Audio1._init = function() {
	var this1 = new Array(32);
	kha_audio2_Audio1.soundChannels = this1;
	var this1 = new Array(32);
	kha_audio2_Audio1.streamChannels = this1;
	var this1 = new Array(32);
	kha_audio2_Audio1.internalSoundChannels = this1;
	var this1 = new Array(32);
	kha_audio2_Audio1.internalStreamChannels = this1;
	kha_audio2_Audio1.sampleCache1 = kha_arrays_Float32Array._new(512);
	kha_audio2_Audio1.sampleCache2 = kha_arrays_Float32Array._new(512);
	kha_audio2_Audio1.lastAllocationCount = 0;
	kha_audio2_Audio.audioCallback = kha_audio2_Audio1.mix;
};
kha_audio2_Audio1.mix = function(samplesBox,buffer) {
	var samples = samplesBox.value;
	if(kha_audio2_Audio1.sampleCache1.byteLength >> 2 < samples) {
		if(kha_audio2_Audio.disableGcInteractions) {
			haxe_Log.trace("Unexpected allocation request in audio thread.",{ fileName : "kha/audio2/Audio1.hx", lineNumber : 50, className : "kha.audio2.Audio1", methodName : "mix"});
			var _g = 0;
			var _g1 = samples;
			while(_g < _g1) {
				var i = _g++;
				buffer.data.setFloat32(buffer.writeLocation * 4,0,true);
				buffer.writeLocation += 1;
				if(buffer.writeLocation >= buffer.size) {
					buffer.writeLocation = 0;
				}
			}
			kha_audio2_Audio1.lastAllocationCount = 0;
			kha_audio2_Audio.disableGcInteractions = false;
			return;
		}
		kha_audio2_Audio1.sampleCache1 = kha_arrays_Float32Array._new(samples * 2);
		kha_audio2_Audio1.sampleCache2 = kha_arrays_Float32Array._new(samples * 2);
		kha_audio2_Audio1.lastAllocationCount = 0;
	} else if(kha_audio2_Audio1.lastAllocationCount > 100) {
		kha_audio2_Audio.disableGcInteractions = true;
	} else {
		kha_audio2_Audio1.lastAllocationCount += 1;
	}
	var _g = 0;
	var _g1 = samples;
	while(_g < _g1) {
		var i = _g++;
		kha_audio2_Audio1.sampleCache2.setFloat32(i * 4,0,true);
	}
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		kha_audio2_Audio1.internalSoundChannels[i] = kha_audio2_Audio1.soundChannels[i];
	}
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		kha_audio2_Audio1.internalStreamChannels[i] = kha_audio2_Audio1.streamChannels[i];
	}
	var _g = 0;
	var _g1 = kha_audio2_Audio1.internalSoundChannels;
	while(_g < _g1.length) {
		var channel = _g1[_g];
		++_g;
		if(channel == null || channel.get_finished()) {
			continue;
		}
		channel.nextSamples(kha_audio2_Audio1.sampleCache1,samples,buffer.samplesPerSecond);
		var _g2 = 0;
		var _g3 = samples;
		while(_g2 < _g3) {
			var i = _g2++;
			var _g4 = i;
			var _g5 = kha_audio2_Audio1.sampleCache2;
			var v = _g5.getFloat32(_g4 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) + kha_audio2_Audio1.sampleCache1.getFloat32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * channel.get_volume();
			_g5.setFloat32(_g4 * 4,v,true);
		}
	}
	var _g = 0;
	var _g1 = kha_audio2_Audio1.internalStreamChannels;
	while(_g < _g1.length) {
		var channel = _g1[_g];
		++_g;
		if(channel == null || channel.get_finished()) {
			continue;
		}
		channel.nextSamples(kha_audio2_Audio1.sampleCache1,samples,buffer.samplesPerSecond);
		var _g2 = 0;
		var _g3 = samples;
		while(_g2 < _g3) {
			var i = _g2++;
			var _g4 = i;
			var _g5 = kha_audio2_Audio1.sampleCache2;
			var v = _g5.getFloat32(_g4 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) + kha_audio2_Audio1.sampleCache1.getFloat32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN) * channel.get_volume();
			_g5.setFloat32(_g4 * 4,v,true);
		}
	}
	var _g = 0;
	var _g1 = samples;
	while(_g < _g1) {
		var i = _g++;
		var a = kha_audio2_Audio1.sampleCache2.getFloat32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
		var a1 = a < 1.0 ? a : 1.0;
		var v = a1 > -1.0 ? a1 : -1.0;
		buffer.data.setFloat32(buffer.writeLocation * 4,v,true);
		buffer.writeLocation += 1;
		if(buffer.writeLocation >= buffer.size) {
			buffer.writeLocation = 0;
		}
	}
};
kha_audio2_Audio1.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var channel = null;
	if(kha_audio2_Audio.samplesPerSecond != sound.sampleRate) {
		channel = new kha_audio2_ResamplingAudioChannel(loop,sound.sampleRate);
	} else {
		channel = new kha_audio2_AudioChannel(loop);
	}
	channel.data = sound.uncompressedData;
	var foundChannel = false;
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		if(kha_audio2_Audio1.soundChannels[i] == null || kha_audio2_Audio1.soundChannels[i].get_finished()) {
			kha_audio2_Audio1.soundChannels[i] = channel;
			foundChannel = true;
			break;
		}
	}
	if(foundChannel) {
		return channel;
	} else {
		return null;
	}
};
kha_audio2_Audio1._playAgain = function(channel) {
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		if(kha_audio2_Audio1.soundChannels[i] == channel) {
			kha_audio2_Audio1.soundChannels[i] = null;
		}
	}
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		if(kha_audio2_Audio1.soundChannels[i] == null || kha_audio2_Audio1.soundChannels[i].get_finished() || kha_audio2_Audio1.soundChannels[i] == channel) {
			kha_audio2_Audio1.soundChannels[i] = channel;
			break;
		}
	}
};
kha_audio2_Audio1.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var hardwareChannel = kha_audio2_Audio.stream(sound,loop);
	if(hardwareChannel != null) {
		return hardwareChannel;
	}
	var channel = new kha_audio2_StreamChannel(sound.compressedData,loop);
	var foundChannel = false;
	var _g = 0;
	while(_g < 32) {
		var i = _g++;
		if(kha_audio2_Audio1.streamChannels[i] == null || kha_audio2_Audio1.streamChannels[i].get_finished()) {
			kha_audio2_Audio1.streamChannels[i] = channel;
			foundChannel = true;
			break;
		}
	}
	if(foundChannel) {
		return channel;
	} else {
		return null;
	}
};
var kha_audio2_AudioChannel = function(looping) {
	this.looping = false;
	this.stopped = false;
	this.paused = false;
	this.myPosition = 0;
	this.myVolume = 1;
	this.data = null;
	this.looping = looping;
};
$hxClasses["kha.audio2.AudioChannel"] = kha_audio2_AudioChannel;
kha_audio2_AudioChannel.__name__ = true;
kha_audio2_AudioChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_audio2_AudioChannel.prototype = {
	nextSamples: function(requestedSamples,requestedLength,sampleRate) {
		if(this.paused || this.stopped) {
			var _g = 0;
			var _g1 = requestedLength;
			while(_g < _g1) {
				var i = _g++;
				requestedSamples.setFloat32(i * 4,0,true);
			}
			return;
		}
		var requestedSamplesIndex = 0;
		while(requestedSamplesIndex < requestedLength) {
			var _g = 0;
			var a = (this.data.byteLength >> 2) - this.myPosition;
			var b = requestedLength - requestedSamplesIndex;
			var _g1 = a < b ? a : b;
			while(_g < _g1) {
				var i = _g++;
				var v = this.data.getFloat32(this.myPosition++ * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				requestedSamples.setFloat32(requestedSamplesIndex++ * 4,v,true);
			}
			if(this.myPosition >= this.data.byteLength >> 2) {
				this.myPosition = 0;
				if(!this.looping) {
					this.stopped = true;
					break;
				}
			}
		}
		while(requestedSamplesIndex < requestedLength) requestedSamples.setFloat32(requestedSamplesIndex++ * 4,0,true);
	}
	,play: function() {
		this.paused = false;
		this.stopped = false;
		kha_audio2_Audio1._playAgain(this);
	}
	,stop: function() {
		this.myPosition = 0;
		this.stopped = true;
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,get_finished: function() {
		return this.stopped;
	}
	,__class__: kha_audio2_AudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume"}
};
var kha_audio2_Buffer = function(size,channels,samplesPerSecond) {
	this.size = size;
	this.data = kha_arrays_Float32Array._new(size);
	this.channels = channels;
	this.samplesPerSecond = samplesPerSecond;
	this.readLocation = 0;
	this.writeLocation = 0;
};
$hxClasses["kha.audio2.Buffer"] = kha_audio2_Buffer;
kha_audio2_Buffer.__name__ = true;
kha_audio2_Buffer.prototype = {
	__class__: kha_audio2_Buffer
};
var kha_audio2_ResamplingAudioChannel = function(looping,sampleRate) {
	kha_audio2_AudioChannel.call(this,looping);
	this.sampleRate = sampleRate;
};
$hxClasses["kha.audio2.ResamplingAudioChannel"] = kha_audio2_ResamplingAudioChannel;
kha_audio2_ResamplingAudioChannel.__name__ = true;
kha_audio2_ResamplingAudioChannel.__super__ = kha_audio2_AudioChannel;
kha_audio2_ResamplingAudioChannel.prototype = $extend(kha_audio2_AudioChannel.prototype,{
	nextSamples: function(requestedSamples,requestedLength,sampleRate) {
		if(this.paused || this.stopped) {
			var _g = 0;
			var _g1 = requestedLength;
			while(_g < _g1) {
				var i = _g++;
				requestedSamples.setFloat32(i * 4,0,true);
			}
			return;
		}
		var requestedSamplesIndex = 0;
		while(requestedSamplesIndex < requestedLength) {
			var _g = 0;
			var value = Math.ceil((this.data.byteLength >> 2) * (sampleRate / this.sampleRate));
			var a = (value % 2 == 0 ? value : value + 1) - this.myPosition;
			var b = requestedLength - requestedSamplesIndex;
			var _g1 = a < b ? a : b;
			while(_g < _g1) {
				var i = _g++;
				var k = requestedSamplesIndex++;
				var position = this.myPosition++;
				var even = position % 2 == 0;
				var factor = this.sampleRate / sampleRate;
				var v;
				if(even) {
					position = position / 2 | 0;
					var pos = factor * position;
					var pos1 = Math.floor(pos);
					var pos2 = Math.floor(pos + 1);
					pos1 *= 2;
					pos2 *= 2;
					var minimum = 0;
					var maximum = (this.data.byteLength >> 2) - 1;
					if(maximum % 2 != 0) {
						--maximum;
					}
					var a1 = pos1 < minimum || pos1 > maximum ? 0 : this.data.getFloat32(pos1 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var b1 = pos2 < minimum || pos2 > maximum ? 0 : this.data.getFloat32(pos2 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var t = pos - Math.floor(pos);
					v = (1 - t) * a1 + t * b1;
				} else {
					position = position / 2 | 0;
					var pos3 = factor * position;
					var pos11 = Math.floor(pos3);
					var pos21 = Math.floor(pos3 + 1);
					pos11 = pos11 * 2 + 1;
					pos21 = pos21 * 2 + 1;
					var minimum1 = 1;
					var maximum1 = (this.data.byteLength >> 2) - 1;
					if(maximum1 % 2 == 0) {
						--maximum1;
					}
					var a2 = pos11 < minimum1 || pos11 > maximum1 ? 0 : this.data.getFloat32(pos11 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var b2 = pos21 < minimum1 || pos21 > maximum1 ? 0 : this.data.getFloat32(pos21 * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
					var t1 = pos3 - Math.floor(pos3);
					v = (1 - t1) * a2 + t1 * b2;
				}
				requestedSamples.setFloat32(k * 4,v,true);
			}
			var value1 = Math.ceil((this.data.byteLength >> 2) * (sampleRate / this.sampleRate));
			if(this.myPosition >= (value1 % 2 == 0 ? value1 : value1 + 1)) {
				this.myPosition = 0;
				if(!this.looping) {
					this.stopped = true;
					break;
				}
			}
		}
		while(requestedSamplesIndex < requestedLength) requestedSamples.setFloat32(requestedSamplesIndex++ * 4,0,true);
	}
	,play: function() {
		this.paused = false;
		this.stopped = false;
		kha_audio2_Audio1._playAgain(this);
	}
	,stop: function() {
		this.myPosition = 0;
		this.stopped = true;
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,get_finished: function() {
		return this.stopped;
	}
	,__class__: kha_audio2_ResamplingAudioChannel
});
var kha_audio2_StreamChannel = function(data,loop) {
	this.paused = false;
	this.atend = false;
	this.myVolume = 1;
	this.loop = loop;
	this.reader = kha_audio2_ogg_vorbis_Reader.openFromBytes(data);
};
$hxClasses["kha.audio2.StreamChannel"] = kha_audio2_StreamChannel;
kha_audio2_StreamChannel.__name__ = true;
kha_audio2_StreamChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_audio2_StreamChannel.prototype = {
	nextSamples: function(samples,length,sampleRate) {
		if(this.paused) {
			var _g = 0;
			var _g1 = length;
			while(_g < _g1) {
				var i = _g++;
				samples.setFloat32(i * 4,0,true);
			}
			return;
		}
		var count = this.reader.read(samples,length / 2 | 0,2,sampleRate,true) * 2;
		if(count < length) {
			if(this.loop) {
				this.reader.set_currentMillisecond(0);
			} else {
				this.atend = true;
			}
			var _g = count;
			var _g1 = length;
			while(_g < _g1) {
				var i = _g++;
				samples.setFloat32(i * 4,0,true);
			}
		}
	}
	,play: function() {
		this.paused = false;
	}
	,stop: function() {
		this.atend = true;
	}
	,get_volume: function() {
		return this.myVolume;
	}
	,set_volume: function(value) {
		return this.myVolume = value;
	}
	,get_finished: function() {
		return this.atend;
	}
	,__class__: kha_audio2_StreamChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_volume:"get_volume"}
};
var kha_audio2_VirtualStreamChannel = function(aeChannel,looping) {
	this.mode = 2;
	this.aeChannel = aeChannel;
	this.looping = looping;
	this.lastTickTime = kha_Scheduler.realTime();
	this.lastPosition = 0;
};
$hxClasses["kha.audio2.VirtualStreamChannel"] = kha_audio2_VirtualStreamChannel;
kha_audio2_VirtualStreamChannel.__name__ = true;
kha_audio2_VirtualStreamChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_audio2_VirtualStreamChannel.prototype = {
	wake: function() {
		this.updatePosition();
		this.aeChannel.set_position(this.lastPosition);
		this.aeChannel.play();
	}
	,updatePosition: function() {
		var now = kha_Scheduler.realTime();
		switch(this.mode) {
		case 0:
			this.lastPosition = 0;
			break;
		case 1:
			break;
		case 2:
			this.lastPosition += now - this.lastTickTime;
			while(this.lastPosition > this.get_length()) this.lastPosition -= this.get_length();
			break;
		}
		this.lastTickTime = now;
	}
	,play: function() {
		if(kha_SystemImpl.mobileAudioPlaying) {
			this.aeChannel.play();
		} else {
			this.updatePosition();
			this.mode = 2;
		}
	}
	,stop: function() {
		if(kha_SystemImpl.mobileAudioPlaying) {
			this.aeChannel.stop();
		} else {
			this.updatePosition();
			this.mode = 0;
		}
	}
	,get_length: function() {
		return this.aeChannel.get_length();
	}
	,get_position: function() {
		if(kha_SystemImpl.mobileAudioPlaying) {
			return this.aeChannel.get_position();
		} else {
			this.updatePosition();
			return this.lastPosition;
		}
	}
	,set_volume: function(value) {
		return this.aeChannel.set_volume(value);
	}
	,get_finished: function() {
		if(kha_SystemImpl.mobileAudioPlaying) {
			return this.aeChannel.get_finished();
		} else if(this.mode != 0) {
			if(!this.looping) {
				return this.get_position() >= this.get_length();
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	,__class__: kha_audio2_VirtualStreamChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",get_position:"get_position",get_length:"get_length"}
};
var kha_audio2_ogg_tools_Crc32 = function() { };
$hxClasses["kha.audio2.ogg.tools.Crc32"] = kha_audio2_ogg_tools_Crc32;
kha_audio2_ogg_tools_Crc32.__name__ = true;
kha_audio2_ogg_tools_Crc32.init = function() {
	if(kha_audio2_ogg_tools_Crc32.table != null) {
		return;
	}
	var this1 = new Array(256);
	kha_audio2_ogg_tools_Crc32.table = this1;
	var _g = 0;
	while(_g < 256) {
		var i = _g++;
		var s = i << 24;
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		s = s << 1 ^ (UInt.gte(s,1 << 31) ? 79764919 : 0);
		kha_audio2_ogg_tools_Crc32.table[i] = s;
	}
};
var kha_audio2_ogg_vorbis_Reader = function(input,seekFunc,inputLength) {
	this.seekFunc = seekFunc;
	this.inputLength = inputLength;
	this.decoder = kha_audio2_ogg_vorbis_VorbisDecoder.start(input);
	this.decoder.setupSampleNumber(seekFunc,inputLength);
	this.loopStart = this.get_header().comment.get_loopStart();
	this.loopLength = this.get_header().comment.get_loopLength();
};
$hxClasses["kha.audio2.ogg.vorbis.Reader"] = kha_audio2_ogg_vorbis_Reader;
kha_audio2_ogg_vorbis_Reader.__name__ = true;
kha_audio2_ogg_vorbis_Reader.openFromBytes = function(bytes) {
	var input = new haxe_io_BytesInput(bytes);
	var bytes1 = input;
	return new kha_audio2_ogg_vorbis_Reader(input,function(pos) {
		kha_audio2_ogg_vorbis_Reader.seekBytes(bytes1,pos);
	},bytes.length);
};
kha_audio2_ogg_vorbis_Reader.seekBytes = function(bytes,pos) {
	bytes.set_position(pos);
};
kha_audio2_ogg_vorbis_Reader.readAll = function(bytes,output,useFloat) {
	if(useFloat == null) {
		useFloat = false;
	}
	var input = new haxe_io_BytesInput(bytes);
	var decoder = kha_audio2_ogg_vorbis_VorbisDecoder.start(input);
	var bytes1 = input;
	decoder.setupSampleNumber(function(pos) {
		kha_audio2_ogg_vorbis_Reader.seekBytes(bytes1,pos);
	},bytes.length);
	var header = decoder.header;
	var count = 0;
	var bufferSize = 4096;
	var buffer = kha_arrays_Float32Array._new(bufferSize * header.channel);
	while(true) {
		var n = decoder.read(buffer,bufferSize,header.channel,header.sampleRate,useFloat);
		var _g = 0;
		var _g1 = n * header.channel;
		while(_g < _g1) {
			var i = _g++;
			output.writeFloat(buffer.getFloat32(i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN));
		}
		if(n == 0) {
			break;
		}
		count += n;
	}
	return decoder.header;
};
kha_audio2_ogg_vorbis_Reader.prototype = {
	get_header: function() {
		return this.decoder.header;
	}
	,get_currentSample: function() {
		return this.decoder.currentSample;
	}
	,set_currentSample: function(value) {
		this.decoder.seek(this.seekFunc,this.inputLength,value);
		return this.decoder.currentSample;
	}
	,get_currentMillisecond: function() {
		var samples = this.get_currentSample();
		var b = this.get_header().sampleRate;
		return UInt.toFloat(samples) / UInt.toFloat(b) * 1000;
	}
	,set_currentMillisecond: function(value) {
		this.set_currentSample(Math.floor(UInt.toFloat(this.get_header().sampleRate) * (value / 1000)));
		return this.get_currentMillisecond();
	}
	,read: function(output,samples,channels,sampleRate,useFloat) {
		if(useFloat == null) {
			useFloat = false;
		}
		this.decoder.ensurePosition(this.seekFunc);
		if(samples == null) {
			samples = this.decoder.totalSample;
		}
		if(channels == null) {
			channels = this.get_header().channel;
		}
		if(sampleRate == null) {
			sampleRate = this.get_header().sampleRate;
		}
		return this.decoder.read(output,samples,channels,sampleRate,useFloat);
	}
	,__class__: kha_audio2_ogg_vorbis_Reader
	,__properties__: {set_currentMillisecond:"set_currentMillisecond",get_currentMillisecond:"get_currentMillisecond",set_currentSample:"set_currentSample",get_currentSample:"get_currentSample",get_header:"get_header"}
};
var kha_audio2_ogg_vorbis_VorbisDecodeState = function(input) {
	this.nextSeg = 0;
	this.firstDecode = false;
	this.bytesInSeg = 0;
	this.validBits = 0;
	this.input = input;
	this.inputPosition = 0;
	this.page = new kha_audio2_ogg_vorbis_data_Page();
	kha_audio2_ogg_tools_Crc32.init();
};
$hxClasses["kha.audio2.ogg.vorbis.VorbisDecodeState"] = kha_audio2_ogg_vorbis_VorbisDecodeState;
kha_audio2_ogg_vorbis_VorbisDecodeState.__name__ = true;
kha_audio2_ogg_vorbis_VorbisDecodeState.prototype = {
	setup: function(loc0,loc1) {
		this.inputPosition += 1;
		var segmentCount = this.input.readByte();
		this.inputPosition += segmentCount;
		var this1 = new Array(segmentCount);
		var vec = this1;
		var _g = 0;
		var _g1 = segmentCount;
		while(_g < _g1) {
			var i = _g++;
			vec[i] = this.input.readByte();
		}
		this.segments = vec;
		this.endSegWithKnownLoc = -2;
		if(loc0 != -1 || loc1 != -1) {
			var i = segmentCount - 1;
			while(i >= 0) {
				if(this.segments[i] < 255) {
					break;
				}
				if(i >= 0) {
					this.endSegWithKnownLoc = i;
					this.knownLocForPacket = loc0;
				}
				--i;
			}
		}
		if(this.firstDecode) {
			var i = 0;
			var len = 0;
			var p = new kha_audio2_ogg_vorbis_data_ProbedPage();
			var _g = 0;
			var _g1 = segmentCount;
			while(_g < _g1) {
				var i = _g++;
				len += this.segments[i];
			}
			len += 27 + segmentCount;
			p.pageStart = this.firstAudioPageOffset;
			p.pageEnd = p.pageStart + len;
			p.firstDecodedSample = 0;
			p.lastDecodedSample = loc0;
			this.pFirst = p;
		}
		this.nextSeg = 0;
	}
	,clone: function(seekFunc) {
		var state = Object.create(kha_audio2_ogg_vorbis_VorbisDecodeState.prototype);
		seekFunc(this.inputPosition);
		state.input = this.input;
		state.eof = this.eof;
		state.validBits = this.validBits;
		state.discardSamplesDeferred = this.discardSamplesDeferred;
		state.firstDecode = this.firstDecode;
		state.nextSeg = this.nextSeg;
		state.bytesInSeg = this.bytesInSeg;
		state.acc = state.acc;
		state.lastSeg = this.lastSeg;
		state.lastSegWhich = this.lastSegWhich;
		state.currentLoc = this.currentLoc;
		state.currentLocValid = this.currentLocValid;
		state.inputPosition = this.inputPosition;
		state.firstAudioPageOffset = this.firstAudioPageOffset;
		state.error = this.error;
		state.segments = this.segments;
		state.pFirst = this.pFirst;
		state.pLast = this.pLast;
		state.page = this.page.clone();
		return state;
	}
	,next: function() {
		if(this.lastSeg) {
			return 0;
		}
		if(this.nextSeg == -1) {
			this.lastSegWhich = this.segments.length - 1;
			try {
				this.page.start(this);
			} catch( _g ) {
				var _g1 = haxe_Exception.caught(_g).unwrap();
				if(((_g1) instanceof kha_audio2_ogg_vorbis_data_ReaderError)) {
					var e = _g1;
					this.lastSeg = true;
					this.error = e;
					return 0;
				} else {
					throw _g;
				}
			}
			if((this.page.flag & 1) == 0) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 171, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "next"}));
			}
		}
		var len = this.segments[this.nextSeg++];
		if(len < 255) {
			this.lastSeg = true;
			this.lastSegWhich = this.nextSeg - 1;
		}
		if(this.nextSeg >= this.segments.length) {
			this.nextSeg = -1;
		}
		this.bytesInSeg = len;
		return len;
	}
	,startPacket: function() {
		while(this.nextSeg == -1) {
			this.page.start(this);
			if((this.page.flag & 1) != 0) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 193, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "startPacket"}));
			}
		}
		this.lastSeg = false;
		this.validBits = 0;
		this.bytesInSeg = 0;
	}
	,maybeStartPacket: function() {
		if(this.nextSeg == -1) {
			var eof = false;
			var x;
			try {
				this.inputPosition += 1;
				x = this.input.readByte();
			} catch( _g ) {
				if(((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
					eof = true;
					x = 0;
				} else {
					throw _g;
				}
			}
			if(eof) {
				return false;
			}
			var tmp;
			var tmp1;
			var tmp2;
			if(x == 79) {
				this.inputPosition += 1;
				tmp2 = this.input.readByte() != 103;
			} else {
				tmp2 = true;
			}
			if(!tmp2) {
				this.inputPosition += 1;
				tmp1 = this.input.readByte() != 103;
			} else {
				tmp1 = true;
			}
			if(!tmp1) {
				this.inputPosition += 1;
				tmp = this.input.readByte() != 83;
			} else {
				tmp = true;
			}
			if(tmp) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 218, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "maybeStartPacket"}));
			}
			this.page.startWithoutCapturePattern(this);
		}
		this.startPacket();
		return true;
	}
	,readBits: function(n) {
		if(this.validBits < 0) {
			return 0;
		} else if(this.validBits < n) {
			if(n > 24) {
				return this.readBits(24) + (this.readBits(n - 24) << 24);
			} else {
				if(this.validBits == 0) {
					this.acc = 0;
				}
				while(true) {
					if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
						this.validBits = -1;
						break;
					} else {
						this.bytesInSeg--;
						this.inputPosition += 1;
						this.acc = this.acc + (this.input.readByte() << this.validBits);
						this.validBits += 8;
					}
					if(!(this.validBits < n)) {
						break;
					}
				}
				if(this.validBits < 0) {
					return 0;
				} else {
					var z = this.acc & (1 << n) - 1;
					this.acc = this.acc >>> n;
					this.validBits -= n;
					return z;
				}
			}
		} else {
			var z = this.acc & (1 << n) - 1;
			this.acc = this.acc >>> n;
			this.validBits -= n;
			return z;
		}
	}
	,firstPageValidate: function() {
		if(this.segments.length != 1) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"segmentCount",{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 308, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
		}
		if(this.segments[0] != 30) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"decodeState head",{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 311, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "firstPageValidate"}));
		}
	}
	,startFirstDecode: function() {
		this.firstAudioPageOffset = this.inputPosition;
		this.firstDecode = true;
	}
	,prepHuffman: function() {
		if(this.validBits <= 24) {
			if(this.validBits == 0) {
				this.acc = 0;
			}
			while(true) {
				if(this.bytesInSeg == 0 && (this.lastSeg || this.next() == 0)) {
					return;
				} else {
					this.bytesInSeg--;
					this.inputPosition += 1;
					this.acc = this.acc + (this.input.readByte() << this.validBits);
					this.validBits += 8;
				}
				if(!(this.validBits <= 24)) {
					break;
				}
			}
		}
	}
	,finishDecodePacket: function(previousLength,n,r) {
		var left = r.left.start;
		var currentLocValid = false;
		var n2 = n >> 1;
		if(this.firstDecode) {
			this.currentLoc = -n2;
			this.discardSamplesDeferred = n - r.right.end;
			currentLocValid = true;
			this.firstDecode = false;
		} else if(this.discardSamplesDeferred != 0) {
			r.left.start += this.discardSamplesDeferred;
			left = r.left.start;
			this.discardSamplesDeferred = 0;
		} else {
			var tmp = previousLength == 0 && currentLocValid;
		}
		if(this.lastSegWhich == this.endSegWithKnownLoc) {
			if(currentLocValid && (this.page.flag & 4) != 0) {
				var currentEnd = this.knownLocForPacket - (n - r.right.end);
				if(currentEnd < this.currentLoc + r.right.end) {
					var len = currentEnd < this.currentLoc ? 0 : currentEnd - this.currentLoc;
					len += r.left.start;
					this.currentLoc += len;
					return { len : len, left : left, right : r.right.start};
				}
			}
			this.currentLoc = this.knownLocForPacket - (n2 - r.left.start);
			currentLocValid = true;
		}
		if(currentLocValid) {
			this.currentLoc += r.right.start - r.left.start;
		}
		return { len : r.right.end, left : left, right : r.right.start};
	}
	,getSampleNumber: function(seekFunc,inputLength) {
		var restoreOffset = this.inputPosition;
		var previousSafe = UInt.gte(inputLength,65536) && UInt.gte(inputLength - 65536,this.firstAudioPageOffset) ? inputLength - 65536 : this.firstAudioPageOffset;
		seekFunc(this.inputPosition = previousSafe);
		var end = 0;
		var last = false;
		var _g = this.findPage(seekFunc,inputLength);
		switch(_g._hx_index) {
		case 0:
			var e = _g.end;
			var l = _g.last;
			end = e;
			last = l;
			break;
		case 1:
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 519, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
		}
		var lastPageLoc = this.inputPosition;
		_hx_loop1: while(!last) {
			seekFunc(this.inputPosition = end);
			var _g = this.findPage(seekFunc,inputLength);
			switch(_g._hx_index) {
			case 0:
				var e = _g.end;
				var l = _g.last;
				end = e;
				last = l;
				break;
			case 1:
				break _hx_loop1;
			}
			previousSafe = lastPageLoc + 1;
			lastPageLoc = this.inputPosition;
		}
		seekFunc(this.inputPosition = lastPageLoc);
		this.inputPosition += 6;
		var this1 = new Array(6);
		var vec = this1;
		var _g = 0;
		var _g1 = 6;
		while(_g < _g1) {
			var i = _g++;
			vec[i] = this.input.readByte();
		}
		var vorbisHeader = vec;
		this.inputPosition += 4;
		var lo = this.input.readInt32();
		this.inputPosition += 4;
		var hi = this.input.readInt32();
		if(lo == -1 && hi == -1 || hi > 0) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 553, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "getSampleNumber"}));
		}
		this.pLast = new kha_audio2_ogg_vorbis_data_ProbedPage();
		this.pLast.pageStart = lastPageLoc;
		this.pLast.pageEnd = end;
		this.pLast.lastDecodedSample = lo;
		this.pLast.firstDecodedSample = null;
		this.pLast.afterPreviousPageStart = previousSafe;
		seekFunc(this.inputPosition = restoreOffset);
		return lo;
	}
	,findPage: function(seekFunc,inputLength) {
		try {
			while(true) {
				this.inputPosition += 1;
				var n = this.input.readByte();
				if(n == 79) {
					var retryLoc = this.inputPosition;
					if(retryLoc - 25 > inputLength) {
						return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
					}
					var tmp;
					var tmp1;
					this.inputPosition += 1;
					if(this.input.readByte() == 103) {
						this.inputPosition += 1;
						tmp1 = this.input.readByte() != 103;
					} else {
						tmp1 = true;
					}
					if(!tmp1) {
						this.inputPosition += 1;
						tmp = this.input.readByte() != 83;
					} else {
						tmp = true;
					}
					if(tmp) {
						continue;
					}
					var this1 = new Array(27);
					var header = this1;
					header[0] = 79;
					header[1] = 103;
					header[2] = 103;
					header[3] = 83;
					this.inputPosition += 1;
					header[4] = this.input.readByte();
					this.inputPosition += 1;
					header[5] = this.input.readByte();
					this.inputPosition += 1;
					header[6] = this.input.readByte();
					this.inputPosition += 1;
					header[7] = this.input.readByte();
					this.inputPosition += 1;
					header[8] = this.input.readByte();
					this.inputPosition += 1;
					header[9] = this.input.readByte();
					this.inputPosition += 1;
					header[10] = this.input.readByte();
					this.inputPosition += 1;
					header[11] = this.input.readByte();
					this.inputPosition += 1;
					header[12] = this.input.readByte();
					this.inputPosition += 1;
					header[13] = this.input.readByte();
					this.inputPosition += 1;
					header[14] = this.input.readByte();
					this.inputPosition += 1;
					header[15] = this.input.readByte();
					this.inputPosition += 1;
					header[16] = this.input.readByte();
					this.inputPosition += 1;
					header[17] = this.input.readByte();
					this.inputPosition += 1;
					header[18] = this.input.readByte();
					this.inputPosition += 1;
					header[19] = this.input.readByte();
					this.inputPosition += 1;
					header[20] = this.input.readByte();
					this.inputPosition += 1;
					header[21] = this.input.readByte();
					this.inputPosition += 1;
					header[22] = this.input.readByte();
					this.inputPosition += 1;
					header[23] = this.input.readByte();
					this.inputPosition += 1;
					header[24] = this.input.readByte();
					this.inputPosition += 1;
					header[25] = this.input.readByte();
					this.inputPosition += 1;
					header[26] = this.input.readByte();
					if(header[4] != 0) {
						seekFunc(this.inputPosition = retryLoc);
						continue;
					}
					var goal = header[22] + (header[23] << 8) + (header[24] << 16) + (header[25] << 24);
					header[22] = 0;
					header[23] = 0;
					header[24] = 0;
					header[25] = 0;
					var crc = 0;
					var _g = 0;
					while(_g < 27) {
						var i = _g++;
						crc = crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[header[i] ^ crc >>> 24];
					}
					var len = 0;
					try {
						var _g1 = 0;
						var _g2 = header[26];
						while(_g1 < _g2) {
							var i1 = _g1++;
							this.inputPosition += 1;
							var s = this.input.readByte();
							crc = crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[s ^ crc >>> 24];
							len += s;
						}
						var _g3 = 0;
						var _g4 = len;
						while(_g3 < _g4) {
							var i2 = _g3++;
							this.inputPosition += 1;
							var byte = this.input.readByte();
							crc = crc << 8 ^ kha_audio2_ogg_tools_Crc32.table[byte ^ crc >>> 24];
						}
					} catch( _g5 ) {
						if(((haxe_Exception.caught(_g5).unwrap()) instanceof haxe_io_Eof)) {
							return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
						} else {
							throw _g5;
						}
					}
					if(crc == goal) {
						var end = this.inputPosition;
						seekFunc(this.inputPosition = retryLoc - 1);
						return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.Found(end,(header[5] & 4) != 0);
					}
				}
			}
		} catch( _g ) {
			if(((haxe_Exception.caught(_g).unwrap()) instanceof haxe_io_Eof)) {
				return kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound;
			} else {
				throw _g;
			}
		}
	}
	,analyzePage: function(seekFunc,h) {
		var z = new kha_audio2_ogg_vorbis_data_ProbedPage();
		var this1 = new Array(255);
		var packetType = this1;
		z.pageStart = this.inputPosition;
		this.inputPosition += 27;
		var this1 = new Array(27);
		var vec = this1;
		var _g = 0;
		var _g1 = 27;
		while(_g < _g1) {
			var i = _g++;
			vec[i] = this.input.readByte();
		}
		var pageHeader = vec;
		var n = pageHeader[26];
		this.inputPosition += n;
		var this1 = new Array(n);
		var vec = this1;
		var _g = 0;
		var _g1 = n;
		while(_g < _g1) {
			var i = _g++;
			vec[i] = this.input.readByte();
		}
		var lacing = vec;
		var len = 0;
		var _g = 0;
		var _g1 = pageHeader[26];
		while(_g < _g1) {
			var i = _g++;
			len += lacing[i];
		}
		z.pageEnd = z.pageStart + 27 + pageHeader[26] + len;
		z.lastDecodedSample = pageHeader[6] + (pageHeader[7] << 8) + (pageHeader[8] << 16) + (pageHeader[9] << 16);
		if((pageHeader[5] & 4) != 0) {
			z.firstDecodedSample = null;
			seekFunc(this.inputPosition = z.pageStart);
			return z;
		}
		var numPacket = 0;
		var packetStart = (pageHeader[5] & 1) == 0;
		var modeCount = h.modes.length;
		var _g = 0;
		var _g1 = pageHeader[26];
		while(_g < _g1) {
			var i = _g++;
			if(packetStart) {
				if(lacing[i] == 0) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				this.inputPosition += 1;
				var n = this.input.readByte();
				if((n & 1) != 0) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				n >>= 1;
				var n1 = modeCount - 1;
				var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
				var b = n1 < 16384 ? n1 < 16 ? log2_4[n1] : n1 < 512 ? 5 + log2_4[n1 >> 5] : 10 + log2_4[n1 >> 10] : n1 < 16777216 ? n1 < 524288 ? 15 + log2_4[n1 >> 15] : 20 + log2_4[n1 >> 20] : n1 < 536870912 ? 25 + log2_4[n1 >> 25] : n1 < -2147483648 ? 30 + log2_4[n1 >> 30] : 0;
				n &= (1 << b) - 1;
				if(n >= modeCount) {
					seekFunc(this.inputPosition = z.pageStart);
					return null;
				}
				packetType[numPacket++] = h.modes[n].blockflag;
				var len = lacing[i] - 1;
				this.inputPosition += len;
				var this1 = new Array(len);
				var vec = this1;
				var _g2 = 0;
				var _g3 = len;
				while(_g2 < _g3) {
					var i1 = _g2++;
					vec[i1] = this.input.readByte();
				}
			} else {
				var len1 = lacing[i];
				this.inputPosition += len1;
				var this2 = new Array(len1);
				var vec1 = this2;
				var _g4 = 0;
				var _g5 = len1;
				while(_g4 < _g5) {
					var i2 = _g4++;
					vec1[i2] = this.input.readByte();
				}
			}
			packetStart = lacing[i] < 255;
		}
		var samples = 0;
		if(numPacket > 1) {
			samples += packetType[numPacket - 1] ? h.blocksize1 : h.blocksize0;
		}
		var i = numPacket - 2;
		while(i >= 1) {
			--i;
			if(packetType[i]) {
				if(packetType[i + 1]) {
					samples += h.blocksize1 >> 1;
				} else {
					samples += (h.blocksize1 - h.blocksize0 >> 2) + (h.blocksize0 >> 1);
				}
			} else {
				samples += h.blocksize0 >> 1;
			}
			--i;
		}
		z.firstDecodedSample = z.lastDecodedSample - samples;
		seekFunc(this.inputPosition = z.pageStart);
		return z;
	}
	,decodeScalarRaw: function(c) {
		this.prepHuffman();
		var codewordLengths = c.codewordLengths;
		var codewords = c.codewords;
		var sortedCodewords = c.sortedCodewords;
		if(c.entries > 8 ? sortedCodewords != null : codewords != null) {
			var n = this.acc;
			n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
			n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
			n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
			n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
			var code = n >>> 16 | n << 16;
			var x = 0;
			var n = c.sortedEntries;
			while(n > 1) {
				var m = x + (n >> 1);
				if(UInt.gte(code,sortedCodewords[m])) {
					x = m;
					n -= n >> 1;
				} else {
					n >>= 1;
				}
			}
			if(!c.sparse) {
				x = c.sortedValues[x];
			}
			var len = codewordLengths[x];
			if(this.validBits >= len) {
				this.acc = this.acc >>> len;
				this.validBits -= len;
				return x;
			}
			this.validBits = 0;
			return -1;
		}
		var _g = 0;
		var _g1 = c.entries;
		while(_g < _g1) {
			var i = _g++;
			var cl = codewordLengths[i];
			if(cl == 255) {
				continue;
			}
			if(codewords[i] == (this.acc & (1 << cl) - 1)) {
				if(this.validBits >= cl) {
					this.acc = this.acc >>> cl;
					this.validBits -= cl;
					return i;
				}
				this.validBits = 0;
				return -1;
			}
		}
		this.error = new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 847, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "decodeScalarRaw"});
		this.validBits = 0;
		return -1;
	}
	,__class__: kha_audio2_ogg_vorbis_VorbisDecodeState
};
var kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult = $hxEnums["kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult"] = { __ename__:true,__constructs__:null
	,Found: ($_=function(end,last) { return {_hx_index:0,end:end,last:last,__enum__:"kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult",toString:$estr}; },$_._hx_name="Found",$_.__params__ = ["end","last"],$_)
	,NotFound: {_hx_name:"NotFound",_hx_index:1,__enum__:"kha.audio2.ogg.vorbis._VorbisDecodeState.FindPageResult",toString:$estr}
};
kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.__constructs__ = [kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.Found,kha_audio2_ogg_vorbis__$VorbisDecodeState_FindPageResult.NotFound];
var kha_audio2_ogg_vorbis_VorbisDecoder = function(header,decodeState) {
	this.header = header;
	this.decodeState = decodeState;
	this.totalSample = null;
	this.currentSample = 0;
	this.previousLength = 0;
	var this1 = new Array(header.channel);
	this.channelBuffers = this1;
	var this1 = new Array(header.channel);
	this.previousWindow = this1;
	var this1 = new Array(header.channel);
	this.finalY = this1;
	var _g = 0;
	var _g1 = header.channel;
	while(_g < _g1) {
		var i = _g++;
		var this1 = this.channelBuffers;
		var this2 = new Array(header.blocksize1);
		var vec = this2;
		this1[i] = vec;
		var this3 = this.previousWindow;
		var this4 = new Array(header.blocksize1 / 2 | 0);
		var vec1 = this4;
		this3[i] = vec1;
		this.finalY[i] = [];
	}
	var this1 = new Array(2);
	this.a = this1;
	var this1 = new Array(2);
	this.b = this1;
	var this1 = new Array(2);
	this.c = this1;
	var this1 = new Array(2);
	this.window = this1;
	var this1 = new Array(2);
	this.bitReverseData = this1;
	this.initBlocksize(0,header.blocksize0);
	this.initBlocksize(1,header.blocksize1);
};
$hxClasses["kha.audio2.ogg.vorbis.VorbisDecoder"] = kha_audio2_ogg_vorbis_VorbisDecoder;
kha_audio2_ogg_vorbis_VorbisDecoder.__name__ = true;
kha_audio2_ogg_vorbis_VorbisDecoder.start = function(input) {
	var decodeState = new kha_audio2_ogg_vorbis_VorbisDecodeState(input);
	var header = kha_audio2_ogg_vorbis_data_Header.read(decodeState);
	var decoder = new kha_audio2_ogg_vorbis_VorbisDecoder(header,decodeState);
	decodeState.startFirstDecode();
	decoder.pumpFirstFrame();
	return decoder;
};
kha_audio2_ogg_vorbis_VorbisDecoder.prototype = {
	read: function(output,samples,channels,sampleRate,useFloat) {
		var b = this.header.sampleRate;
		if((UInt.toFloat(sampleRate) % UInt.toFloat(b) | 0) != 0) {
			throw haxe_Exception.thrown("Unsupported sampleRate : can't convert " + (this.header.sampleRate == null ? "null" : Std.string(UInt.toFloat(this.header.sampleRate))) + " to " + sampleRate);
		}
		if(channels % this.header.channel != 0) {
			throw haxe_Exception.thrown("Unsupported channels : can't convert " + this.header.channel + " to " + channels);
		}
		var b = this.header.sampleRate;
		var sampleRepeat = UInt.toFloat(sampleRate) / UInt.toFloat(b) | 0;
		var channelRepeat = channels / this.header.channel | 0;
		var n = 0;
		var len = Math.floor(samples / sampleRepeat);
		if(this.totalSample != null && len > this.totalSample - this.currentSample) {
			len = this.totalSample - this.currentSample;
		}
		var index = 0;
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) {
				k = len - n;
			}
			var _g = this.channelBufferStart;
			var _g1 = this.channelBufferStart + k;
			while(_g < _g1) {
				var j = _g++;
				var _g2 = 0;
				var _g3 = sampleRepeat;
				while(_g2 < _g3) {
					var sr = _g2++;
					var _g4 = 0;
					var _g5 = this.header.channel;
					while(_g4 < _g5) {
						var i = _g4++;
						var _g6 = 0;
						var _g7 = channelRepeat;
						while(_g6 < _g7) {
							var cr = _g6++;
							var value = this.channelBuffers[i][j];
							if(value > 1) {
								value = 1;
							} else if(value < -1) {
								value = -1;
							}
							if(useFloat) {
								output.setFloat32(index * 4,value,true);
								++index;
							}
						}
					}
				}
			}
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) {
				break;
			}
		}
		var _g = n;
		var _g1 = len;
		while(_g < _g1) {
			var j = _g++;
			var _g2 = 0;
			var _g3 = sampleRepeat;
			while(_g2 < _g3) {
				var sr = _g2++;
				var _g4 = 0;
				var _g5 = this.header.channel;
				while(_g4 < _g5) {
					var i = _g4++;
					var _g6 = 0;
					var _g7 = channelRepeat;
					while(_g6 < _g7) {
						var cr = _g6++;
						if(useFloat) {
							output.setFloat32(index * 4,0,true);
							++index;
						}
					}
				}
			}
		}
		this.currentSample += len;
		return len * sampleRepeat;
	}
	,skipSamples: function(len) {
		var n = 0;
		if(this.totalSample != null && len > this.totalSample - this.currentSample) {
			len = this.totalSample - this.currentSample;
		}
		while(n < len) {
			var k = this.channelBufferEnd - this.channelBufferStart;
			if(k >= len - n) {
				k = len - n;
			}
			n += k;
			this.channelBufferStart += k;
			if(n == len || this.getFrameFloat() == 0) {
				break;
			}
		}
		this.currentSample += len;
		return len;
	}
	,setupSampleNumber: function(seekFunc,inputLength) {
		if(this.totalSample == null) {
			this.totalSample = this.decodeState.getSampleNumber(seekFunc,inputLength);
		}
	}
	,seek: function(seekFunc,inputLength,sampleNumber) {
		if(this.currentSample == sampleNumber) {
			return;
		}
		if(this.totalSample == null) {
			this.setupSampleNumber(seekFunc,inputLength);
			if(this.totalSample == 0) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 187, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
			}
		}
		if(sampleNumber < 0) {
			sampleNumber = 0;
		}
		var p0 = this.decodeState.pFirst;
		var p1 = this.decodeState.pLast;
		if(sampleNumber >= p1.lastDecodedSample) {
			sampleNumber = p1.lastDecodedSample - 1;
		}
		if(sampleNumber < p0.lastDecodedSample) {
			this.seekFrameFromPage(seekFunc,p0.pageStart,0,sampleNumber);
		} else {
			var attempts = 0;
			while(p0.pageEnd < p1.pageStart) {
				var startOffset = p0.pageEnd;
				var endOffset = p1.afterPreviousPageStart;
				var startSample = p0.lastDecodedSample;
				var endSample = p1.lastDecodedSample;
				if(startSample == null || endSample == null) {
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 219, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				}
				if(UInt.gt(endOffset,startOffset + 4000)) {
					endOffset = endOffset - 4000;
				}
				var probe = startOffset + Math.floor(UInt.toFloat(endOffset - startOffset) / UInt.toFloat(endSample - startSample) * (sampleNumber - startSample));
				if(attempts >= 4) {
					var probe2 = startOffset + (endOffset - startOffset >>> 1);
					probe = attempts >= 8 ? probe2 : UInt.gt(probe2,probe) ? probe + (probe2 - probe >>> 1) : probe2 + (probe - probe2 >>> 1);
				}
				++attempts;
				seekFunc(this.decodeState.inputPosition = probe);
				var _g = this.decodeState.findPage(seekFunc,inputLength);
				switch(_g._hx_index) {
				case 0:
					var _g1 = _g.end;
					var _g2 = _g.last;
					break;
				case 1:
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 249, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				}
				var q = this.decodeState.analyzePage(seekFunc,this.header);
				if(q == null) {
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 255, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
				}
				q.afterPreviousPageStart = probe;
				if(q.pageStart == p1.pageStart) {
					p1 = q;
					continue;
				}
				if(sampleNumber < q.lastDecodedSample) {
					p1 = q;
				} else {
					p0 = q;
				}
			}
			if(p0.lastDecodedSample <= sampleNumber && sampleNumber < p1.lastDecodedSample) {
				this.seekFrameFromPage(seekFunc,p1.pageStart,p0.lastDecodedSample,sampleNumber);
			} else {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 275, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "seek"}));
			}
		}
	}
	,seekFrameFromPage: function(seekFunc,pageStart,firstSample,targetSample) {
		var frame = 0;
		var frameStart = firstSample;
		seekFunc(this.decodeState.inputPosition = pageStart);
		this.decodeState.nextSeg = -1;
		var leftEnd = 0;
		var leftStart = 0;
		var prevState = null;
		var lastState = null;
		while(true) {
			prevState = lastState;
			lastState = this.decodeState.clone(seekFunc);
			var initialResult = this.decodeInitial();
			if(initialResult == null) {
				lastState = prevState;
				break;
			}
			leftStart = initialResult.left.start;
			leftEnd = initialResult.left.end;
			var start = frame == 0 ? leftEnd : leftStart;
			if(targetSample < frameStart + initialResult.right.start - start) {
				break;
			}
			var _this = this.decodeState;
			while(_this.bytesInSeg != 0 || !_this.lastSeg && _this.next() != 0) {
				_this.bytesInSeg--;
				_this.inputPosition += 1;
				_this.input.readByte();
			}
			frameStart += initialResult.right.start - start;
			++frame;
		}
		this.decodeState = lastState;
		seekFunc(this.decodeState.inputPosition);
		this.previousLength = 0;
		this.pumpFirstFrame();
		this.currentSample = frameStart;
		this.skipSamples(targetSample - frameStart);
	}
	,ensurePosition: function(seekFunc) {
		seekFunc(this.decodeState.inputPosition);
	}
	,getFrameFloat: function() {
		var result = this.decodePacket();
		if(result == null) {
			this.channelBufferStart = this.channelBufferEnd = 0;
			return 0;
		}
		var len = this.finishFrame(result);
		this.channelBufferStart = result.left;
		this.channelBufferEnd = result.left + len;
		return len;
	}
	,pumpFirstFrame: function() {
		this.finishFrame(this.decodePacket());
	}
	,finishFrame: function(r) {
		var len = r.len;
		var right = r.right;
		var left = r.left;
		if(this.previousLength != 0) {
			var n = this.previousLength;
			var w = this.getWindow(n);
			var _g = 0;
			var _g1 = this.header.channel;
			while(_g < _g1) {
				var i = _g++;
				var cb = this.channelBuffers[i];
				var pw = this.previousWindow[i];
				var _g2 = 0;
				var _g3 = n;
				while(_g2 < _g3) {
					var j = _g2++;
					cb[left + j] = cb[left + j] * w[j] + pw[j] * w[n - 1 - j];
				}
			}
		}
		var prev = this.previousLength;
		this.previousLength = len - right;
		var _g = 0;
		var _g1 = this.header.channel;
		while(_g < _g1) {
			var i = _g++;
			var pw = this.previousWindow[i];
			var cb = this.channelBuffers[i];
			var _g2 = 0;
			var _g3 = len - right;
			while(_g2 < _g3) {
				var j = _g2++;
				pw[j] = cb[right + j];
			}
		}
		if(prev == 0) {
			return 0;
		}
		if(len < right) {
			right = len;
		}
		return right - left;
	}
	,getWindow: function(len) {
		len <<= 1;
		if(len == this.header.blocksize0) {
			return this.window[0];
		} else if(len == this.header.blocksize1) {
			return this.window[1];
		} else {
			return null;
		}
	}
	,initBlocksize: function(bs,n) {
		var n2 = n >> 1;
		var n4 = n >> 2;
		var n8 = n >> 3;
		var this1 = this.a;
		var this2 = new Array(n2);
		this1[bs] = this2;
		var this1 = this.b;
		var this2 = new Array(n2);
		this1[bs] = this2;
		var this1 = this.c;
		var this2 = new Array(n4);
		this1[bs] = this2;
		var this1 = this.window;
		var this2 = new Array(n2);
		this1[bs] = this2;
		var this1 = this.bitReverseData;
		var this2 = new Array(n8);
		this1[bs] = this2;
		kha_audio2_ogg_vorbis_VorbisTools.computeTwiddleFactors(n,this.a[bs],this.b[bs],this.c[bs]);
		kha_audio2_ogg_vorbis_VorbisTools.computeWindow(n,this.window[bs]);
		kha_audio2_ogg_vorbis_VorbisTools.computeBitReverse(n,this.bitReverseData[bs]);
	}
	,inverseMdct: function(buffer,n,blocktype) {
		var bt = blocktype ? 1 : 0;
		var a = this.a[bt];
		var b = this.b[bt];
		var c = this.c[bt];
		var bitReverse = this.bitReverseData[bt];
		var n2 = n >> 1;
		var n4 = n >> 2;
		var n8 = n >> 3;
		var this1 = new Array(n2);
		var buf2 = this1;
		var dOffset = n2 - 2;
		var aaOffset = 0;
		var eOffset = 0;
		var eStopOffset = n2;
		while(eOffset != eStopOffset) {
			buf2[dOffset + 1] = buffer[eOffset] * a[aaOffset] - buffer[eOffset + 2] * a[aaOffset + 1];
			buf2[dOffset] = buffer[eOffset] * a[aaOffset + 1] + buffer[eOffset + 2] * a[aaOffset];
			dOffset -= 2;
			aaOffset += 2;
			eOffset += 4;
		}
		eOffset = n2 - 3;
		while(dOffset >= 0) {
			buf2[dOffset + 1] = -buffer[eOffset + 2] * a[aaOffset] - -buffer[eOffset] * a[aaOffset + 1];
			buf2[dOffset] = -buffer[eOffset + 2] * a[aaOffset + 1] + -buffer[eOffset] * a[aaOffset];
			dOffset -= 2;
			aaOffset += 2;
			eOffset -= 4;
		}
		var u = buffer;
		var v = buf2;
		var aaOffset = n2 - 8;
		var eOffset0 = n4;
		var eOffset1 = 0;
		var dOffset0 = n4;
		var dOffset1 = 0;
		while(aaOffset >= 0) {
			var v41_21 = v[eOffset0 + 1] - v[eOffset1 + 1];
			var v40_20 = v[eOffset0] - v[eOffset1];
			u[dOffset0 + 1] = v[eOffset0 + 1] + v[eOffset1 + 1];
			u[dOffset0] = v[eOffset0] + v[eOffset1];
			u[dOffset1 + 1] = v41_21 * a[aaOffset + 4] - v40_20 * a[aaOffset + 5];
			u[dOffset1] = v40_20 * a[aaOffset + 4] + v41_21 * a[aaOffset + 5];
			v41_21 = v[eOffset0 + 3] - v[eOffset1 + 3];
			v40_20 = v[eOffset0 + 2] - v[eOffset1 + 2];
			u[dOffset0 + 3] = v[eOffset0 + 3] + v[eOffset1 + 3];
			u[dOffset0 + 2] = v[eOffset0 + 2] + v[eOffset1 + 2];
			u[dOffset1 + 3] = v41_21 * a[aaOffset] - v40_20 * a[aaOffset + 1];
			u[dOffset1 + 2] = v40_20 * a[aaOffset] + v41_21 * a[aaOffset + 1];
			aaOffset -= 8;
			dOffset0 += 4;
			dOffset1 += 4;
			eOffset0 += 4;
			eOffset1 += 4;
		}
		var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
		var ld = (n < 16384 ? n < 16 ? log2_4[n] : n < 512 ? 5 + log2_4[n >> 5] : 10 + log2_4[n >> 10] : n < 16777216 ? n < 524288 ? 15 + log2_4[n >> 15] : 20 + log2_4[n >> 20] : n < 536870912 ? 25 + log2_4[n >> 25] : n < -2147483648 ? 30 + log2_4[n >> 30] : 0) - 1;
		var i_off = n2 - 1 - n4 * 0;
		var eeOffset0 = i_off;
		var eeOffset2 = i_off + -(n >> 3);
		var aOffset = 0;
		var i = (n >> 4 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eeOffset0] - u[eeOffset2];
			var k01_21 = u[eeOffset0 + (-1)] - u[eeOffset2 + (-1)];
			u[eeOffset0] += u[eeOffset2];
			u[eeOffset0 + (-1)] += u[eeOffset2 + (-1)];
			u[eeOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-2)] - u[eeOffset2 + (-2)];
			k01_21 = u[eeOffset0 + (-3)] - u[eeOffset2 + (-3)];
			u[eeOffset0 + (-2)] += u[eeOffset2 + (-2)];
			u[eeOffset0 + (-3)] += u[eeOffset2 + (-3)];
			u[eeOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-4)] - u[eeOffset2 + (-4)];
			k01_21 = u[eeOffset0 + (-5)] - u[eeOffset2 + (-5)];
			u[eeOffset0 + (-4)] += u[eeOffset2 + (-4)];
			u[eeOffset0 + (-5)] += u[eeOffset2 + (-5)];
			u[eeOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-6)] - u[eeOffset2 + (-6)];
			k01_21 = u[eeOffset0 + (-7)] - u[eeOffset2 + (-7)];
			u[eeOffset0 + (-6)] += u[eeOffset2 + (-6)];
			u[eeOffset0 + (-7)] += u[eeOffset2 + (-7)];
			u[eeOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			eeOffset0 -= 8;
			eeOffset2 -= 8;
		}
		var i_off = n2 - 1 - n4;
		var eeOffset0 = i_off;
		var eeOffset2 = i_off + -(n >> 3);
		var aOffset = 0;
		var i = (n >> 4 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eeOffset0] - u[eeOffset2];
			var k01_21 = u[eeOffset0 + (-1)] - u[eeOffset2 + (-1)];
			u[eeOffset0] += u[eeOffset2];
			u[eeOffset0 + (-1)] += u[eeOffset2 + (-1)];
			u[eeOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-2)] - u[eeOffset2 + (-2)];
			k01_21 = u[eeOffset0 + (-3)] - u[eeOffset2 + (-3)];
			u[eeOffset0 + (-2)] += u[eeOffset2 + (-2)];
			u[eeOffset0 + (-3)] += u[eeOffset2 + (-3)];
			u[eeOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-4)] - u[eeOffset2 + (-4)];
			k01_21 = u[eeOffset0 + (-5)] - u[eeOffset2 + (-5)];
			u[eeOffset0 + (-4)] += u[eeOffset2 + (-4)];
			u[eeOffset0 + (-5)] += u[eeOffset2 + (-5)];
			u[eeOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			k00_20 = u[eeOffset0 + (-6)] - u[eeOffset2 + (-6)];
			k01_21 = u[eeOffset0 + (-7)] - u[eeOffset2 + (-7)];
			u[eeOffset0 + (-6)] += u[eeOffset2 + (-6)];
			u[eeOffset0 + (-7)] += u[eeOffset2 + (-7)];
			u[eeOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eeOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 8;
			eeOffset0 -= 8;
			eeOffset2 -= 8;
		}
		var d0 = n2 - 1 - n8 * 0;
		var aOffset = 0;
		var eOffset0 = d0;
		var eOffset2 = d0 + -(n >> 4);
		var i = (n >> 5 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eOffset0] - u[eOffset2];
			var k01_21 = u[eOffset0 + (-1)] - u[eOffset2 + (-1)];
			u[eOffset0] += u[eOffset2];
			u[eOffset0 + (-1)] += u[eOffset2 + (-1)];
			u[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-2)] - u[eOffset2 + (-2)];
			k01_21 = u[eOffset0 + (-3)] - u[eOffset2 + (-3)];
			u[eOffset0 + (-2)] += u[eOffset2 + (-2)];
			u[eOffset0 + (-3)] += u[eOffset2 + (-3)];
			u[eOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-4)] - u[eOffset2 + (-4)];
			k01_21 = u[eOffset0 + (-5)] - u[eOffset2 + (-5)];
			u[eOffset0 + (-4)] += u[eOffset2 + (-4)];
			u[eOffset0 + (-5)] += u[eOffset2 + (-5)];
			u[eOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-6)] - u[eOffset2 + (-6)];
			k01_21 = u[eOffset0 + (-7)] - u[eOffset2 + (-7)];
			u[eOffset0 + (-6)] += u[eOffset2 + (-6)];
			u[eOffset0 + (-7)] += u[eOffset2 + (-7)];
			u[eOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			eOffset0 -= 8;
			eOffset2 -= 8;
			aOffset += 16;
		}
		var d0 = n2 - 1 - n8;
		var aOffset = 0;
		var eOffset0 = d0;
		var eOffset2 = d0 + -(n >> 4);
		var i = (n >> 5 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eOffset0] - u[eOffset2];
			var k01_21 = u[eOffset0 + (-1)] - u[eOffset2 + (-1)];
			u[eOffset0] += u[eOffset2];
			u[eOffset0 + (-1)] += u[eOffset2 + (-1)];
			u[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-2)] - u[eOffset2 + (-2)];
			k01_21 = u[eOffset0 + (-3)] - u[eOffset2 + (-3)];
			u[eOffset0 + (-2)] += u[eOffset2 + (-2)];
			u[eOffset0 + (-3)] += u[eOffset2 + (-3)];
			u[eOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-4)] - u[eOffset2 + (-4)];
			k01_21 = u[eOffset0 + (-5)] - u[eOffset2 + (-5)];
			u[eOffset0 + (-4)] += u[eOffset2 + (-4)];
			u[eOffset0 + (-5)] += u[eOffset2 + (-5)];
			u[eOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-6)] - u[eOffset2 + (-6)];
			k01_21 = u[eOffset0 + (-7)] - u[eOffset2 + (-7)];
			u[eOffset0 + (-6)] += u[eOffset2 + (-6)];
			u[eOffset0 + (-7)] += u[eOffset2 + (-7)];
			u[eOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			eOffset0 -= 8;
			eOffset2 -= 8;
			aOffset += 16;
		}
		var d0 = n2 - 1 - n8 * 2;
		var aOffset = 0;
		var eOffset0 = d0;
		var eOffset2 = d0 + -(n >> 4);
		var i = (n >> 5 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eOffset0] - u[eOffset2];
			var k01_21 = u[eOffset0 + (-1)] - u[eOffset2 + (-1)];
			u[eOffset0] += u[eOffset2];
			u[eOffset0 + (-1)] += u[eOffset2 + (-1)];
			u[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-2)] - u[eOffset2 + (-2)];
			k01_21 = u[eOffset0 + (-3)] - u[eOffset2 + (-3)];
			u[eOffset0 + (-2)] += u[eOffset2 + (-2)];
			u[eOffset0 + (-3)] += u[eOffset2 + (-3)];
			u[eOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-4)] - u[eOffset2 + (-4)];
			k01_21 = u[eOffset0 + (-5)] - u[eOffset2 + (-5)];
			u[eOffset0 + (-4)] += u[eOffset2 + (-4)];
			u[eOffset0 + (-5)] += u[eOffset2 + (-5)];
			u[eOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-6)] - u[eOffset2 + (-6)];
			k01_21 = u[eOffset0 + (-7)] - u[eOffset2 + (-7)];
			u[eOffset0 + (-6)] += u[eOffset2 + (-6)];
			u[eOffset0 + (-7)] += u[eOffset2 + (-7)];
			u[eOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			eOffset0 -= 8;
			eOffset2 -= 8;
			aOffset += 16;
		}
		var d0 = n2 - 1 - n8 * 3;
		var aOffset = 0;
		var eOffset0 = d0;
		var eOffset2 = d0 + -(n >> 4);
		var i = (n >> 5 >> 2) + 1;
		while(--i > 0) {
			var k00_20 = u[eOffset0] - u[eOffset2];
			var k01_21 = u[eOffset0 + (-1)] - u[eOffset2 + (-1)];
			u[eOffset0] += u[eOffset2];
			u[eOffset0 + (-1)] += u[eOffset2 + (-1)];
			u[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-2)] - u[eOffset2 + (-2)];
			k01_21 = u[eOffset0 + (-3)] - u[eOffset2 + (-3)];
			u[eOffset0 + (-2)] += u[eOffset2 + (-2)];
			u[eOffset0 + (-3)] += u[eOffset2 + (-3)];
			u[eOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-4)] - u[eOffset2 + (-4)];
			k01_21 = u[eOffset0 + (-5)] - u[eOffset2 + (-5)];
			u[eOffset0 + (-4)] += u[eOffset2 + (-4)];
			u[eOffset0 + (-5)] += u[eOffset2 + (-5)];
			u[eOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			aOffset += 16;
			k00_20 = u[eOffset0 + (-6)] - u[eOffset2 + (-6)];
			k01_21 = u[eOffset0 + (-7)] - u[eOffset2 + (-7)];
			u[eOffset0 + (-6)] += u[eOffset2 + (-6)];
			u[eOffset0 + (-7)] += u[eOffset2 + (-7)];
			u[eOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
			u[eOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
			eOffset0 -= 8;
			eOffset2 -= 8;
			aOffset += 16;
		}
		var _g = 2;
		var _g1 = ld - 3 >> 1;
		while(_g < _g1) {
			var l = _g++;
			var k0 = n >> l + 2;
			var k0_2 = k0 >> 1;
			var lim = 1 << l + 1;
			var _g2 = 0;
			var _g3 = lim;
			while(_g2 < _g3) {
				var i = _g2++;
				var d0 = n2 - 1 - k0 * i;
				var k1 = 1 << l + 3;
				var aOffset = 0;
				var eOffset0 = d0;
				var eOffset2 = d0 + -k0_2;
				var i1 = (n >> l + 4 >> 2) + 1;
				while(--i1 > 0) {
					var k00_20 = u[eOffset0] - u[eOffset2];
					var k01_21 = u[eOffset0 + (-1)] - u[eOffset2 + (-1)];
					u[eOffset0] += u[eOffset2];
					u[eOffset0 + (-1)] += u[eOffset2 + (-1)];
					u[eOffset2] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
					u[eOffset2 + (-1)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
					aOffset += k1;
					k00_20 = u[eOffset0 + (-2)] - u[eOffset2 + (-2)];
					k01_21 = u[eOffset0 + (-3)] - u[eOffset2 + (-3)];
					u[eOffset0 + (-2)] += u[eOffset2 + (-2)];
					u[eOffset0 + (-3)] += u[eOffset2 + (-3)];
					u[eOffset2 + (-2)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
					u[eOffset2 + (-3)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
					aOffset += k1;
					k00_20 = u[eOffset0 + (-4)] - u[eOffset2 + (-4)];
					k01_21 = u[eOffset0 + (-5)] - u[eOffset2 + (-5)];
					u[eOffset0 + (-4)] += u[eOffset2 + (-4)];
					u[eOffset0 + (-5)] += u[eOffset2 + (-5)];
					u[eOffset2 + (-4)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
					u[eOffset2 + (-5)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
					aOffset += k1;
					k00_20 = u[eOffset0 + (-6)] - u[eOffset2 + (-6)];
					k01_21 = u[eOffset0 + (-7)] - u[eOffset2 + (-7)];
					u[eOffset0 + (-6)] += u[eOffset2 + (-6)];
					u[eOffset0 + (-7)] += u[eOffset2 + (-7)];
					u[eOffset2 + (-6)] = k00_20 * a[aOffset] - k01_21 * a[aOffset + 1];
					u[eOffset2 + (-7)] = k01_21 * a[aOffset] + k00_20 * a[aOffset + 1];
					eOffset0 -= 8;
					eOffset2 -= 8;
					aOffset += k1;
				}
			}
		}
		var _g = ld - 3 >> 1;
		var _g1 = ld - 6;
		while(_g < _g1) {
			var l = _g++;
			var k0 = n >> l + 2;
			var k1 = 1 << l + 3;
			var k0_2 = k0 >> 1;
			var rlim = n >> l + 6;
			var lim = 1 << l + 1;
			var aOffset = 0;
			var i_off = n2 - 1;
			var r = rlim + 1;
			while(--r > 0) {
				var A0 = a[aOffset];
				var A1 = a[aOffset + 1];
				var A2 = a[aOffset + k1];
				var A3 = a[aOffset + k1 + 1];
				var A4 = a[aOffset + k1 * 2];
				var A5 = a[aOffset + k1 * 2 + 1];
				var A6 = a[aOffset + k1 * 3];
				var A7 = a[aOffset + k1 * 3 + 1];
				var eeOffset0 = i_off;
				var eeOffset2 = i_off + -k0_2;
				var i = lim + 1;
				while(--i > 0) {
					var k00 = u[eeOffset0] - u[eeOffset2];
					var k11 = u[eeOffset0 + (-1)] - u[eeOffset2 + (-1)];
					u[eeOffset0] += u[eeOffset2];
					u[eeOffset0 + (-1)] += u[eeOffset2 + (-1)];
					u[eeOffset2] = k00 * A0 - k11 * A1;
					u[eeOffset2 + (-1)] = k11 * A0 + k00 * A1;
					k00 = u[eeOffset0 + (-2)] - u[eeOffset2 + (-2)];
					k11 = u[eeOffset0 + (-3)] - u[eeOffset2 + (-3)];
					u[eeOffset0 + (-2)] += u[eeOffset2 + (-2)];
					u[eeOffset0 + (-3)] += u[eeOffset2 + (-3)];
					u[eeOffset2 + (-2)] = k00 * A2 - k11 * A3;
					u[eeOffset2 + (-3)] = k11 * A2 + k00 * A3;
					k00 = u[eeOffset0 + (-4)] - u[eeOffset2 + (-4)];
					k11 = u[eeOffset0 + (-5)] - u[eeOffset2 + (-5)];
					u[eeOffset0 + (-4)] += u[eeOffset2 + (-4)];
					u[eeOffset0 + (-5)] += u[eeOffset2 + (-5)];
					u[eeOffset2 + (-4)] = k00 * A4 - k11 * A5;
					u[eeOffset2 + (-5)] = k11 * A4 + k00 * A5;
					k00 = u[eeOffset0 + (-6)] - u[eeOffset2 + (-6)];
					k11 = u[eeOffset0 + (-7)] - u[eeOffset2 + (-7)];
					u[eeOffset0 + (-6)] += u[eeOffset2 + (-6)];
					u[eeOffset0 + (-7)] += u[eeOffset2 + (-7)];
					u[eeOffset2 + (-6)] = k00 * A6 - k11 * A7;
					u[eeOffset2 + (-7)] = k11 * A6 + k00 * A7;
					eeOffset0 -= k0;
					eeOffset2 -= k0;
				}
				aOffset += k1 * 4;
				i_off -= 8;
			}
		}
		var i_off = n2 - 1;
		var A2 = a[n >> 3];
		var zOffset = i_off;
		var baseOffset = i_off - 16 * (n >> 5);
		while(zOffset > baseOffset) {
			var t0 = u[zOffset];
			var t1 = u[zOffset + (-8)];
			u[zOffset + (-8)] = t0 - t1;
			u[zOffset] = t0 + t1;
			t0 = u[zOffset + (-1)];
			t1 = u[zOffset + (-9)];
			u[zOffset + (-9)] = t0 - t1;
			u[zOffset + (-1)] = t0 + t1;
			t0 = u[zOffset + (-2)];
			t1 = u[zOffset + (-10)];
			var k00 = t0 - t1;
			u[zOffset + (-2)] = t0 + t1;
			t0 = u[zOffset + (-3)];
			t1 = u[zOffset + (-11)];
			var k11 = t0 - t1;
			u[zOffset + (-3)] = t0 + t1;
			u[zOffset + (-10)] = (k00 + k11) * A2;
			u[zOffset + (-11)] = (k11 - k00) * A2;
			t0 = u[zOffset + (-4)];
			t1 = u[zOffset + (-12)];
			k00 = t1 - t0;
			u[zOffset + (-4)] = t0 + t1;
			t0 = u[zOffset + (-5)];
			t1 = u[zOffset + (-13)];
			k11 = t0 - t1;
			u[zOffset + (-5)] = t0 + t1;
			u[zOffset + (-12)] = k11;
			u[zOffset + (-13)] = k00;
			t0 = u[zOffset + (-6)];
			t1 = u[zOffset + (-14)];
			k00 = t1 - t0;
			u[zOffset + (-6)] = t0 + t1;
			t0 = u[zOffset + (-7)];
			t1 = u[zOffset + (-15)];
			k11 = t0 - t1;
			u[zOffset + (-7)] = t0 + t1;
			u[zOffset + (-14)] = (k00 + k11) * A2;
			u[zOffset + (-15)] = (k00 - k11) * A2;
			var t01 = u[zOffset];
			var t11 = u[zOffset + (-4)];
			var k001 = t01 - t11;
			var y0 = t01 + t11;
			t01 = u[zOffset + (-2)];
			t11 = u[zOffset + (-6)];
			var y2 = t01 + t11;
			var k22 = t01 - t11;
			u[zOffset] = y0 + y2;
			u[zOffset + (-2)] = y0 - y2;
			var k33 = u[zOffset + (-3)] - u[zOffset + (-7)];
			u[zOffset + (-4)] = k001 + k33;
			u[zOffset + (-6)] = k001 - k33;
			t01 = u[zOffset + (-1)];
			t11 = u[zOffset + (-5)];
			var k111 = t01 - t11;
			var y1 = t01 + t11;
			var y3 = u[zOffset + (-3)] + u[zOffset + (-7)];
			u[zOffset + (-1)] = y1 + y3;
			u[zOffset + (-3)] = y1 - y3;
			u[zOffset + (-5)] = k111 - k22;
			u[zOffset + (-7)] = k111 + k22;
			var zOffset1 = zOffset - 8;
			var t02 = u[zOffset1];
			var t12 = u[zOffset1 + (-4)];
			var k002 = t02 - t12;
			var y01 = t02 + t12;
			t02 = u[zOffset1 + (-2)];
			t12 = u[zOffset1 + (-6)];
			var y21 = t02 + t12;
			var k221 = t02 - t12;
			u[zOffset1] = y01 + y21;
			u[zOffset1 + (-2)] = y01 - y21;
			var k331 = u[zOffset1 + (-3)] - u[zOffset1 + (-7)];
			u[zOffset1 + (-4)] = k002 + k331;
			u[zOffset1 + (-6)] = k002 - k331;
			t02 = u[zOffset1 + (-1)];
			t12 = u[zOffset1 + (-5)];
			var k112 = t02 - t12;
			var y11 = t02 + t12;
			var y31 = u[zOffset1 + (-3)] + u[zOffset1 + (-7)];
			u[zOffset1 + (-1)] = y11 + y31;
			u[zOffset1 + (-3)] = y11 - y31;
			u[zOffset1 + (-5)] = k112 - k221;
			u[zOffset1 + (-7)] = k112 + k221;
			zOffset -= 16;
		}
		var brOffset = 0;
		var dOffset0 = n4 - 4;
		var dOffset1 = n2 - 4;
		while(dOffset0 >= 0) {
			var k4 = bitReverse[brOffset];
			v[dOffset1 + 3] = u[k4];
			v[dOffset1 + 2] = u[k4 + 1];
			v[dOffset0 + 3] = u[k4 + 2];
			v[dOffset0 + 2] = u[k4 + 3];
			k4 = bitReverse[brOffset + 1];
			v[dOffset1 + 1] = u[k4];
			v[dOffset1] = u[k4 + 1];
			v[dOffset0 + 1] = u[k4 + 2];
			v[dOffset0] = u[k4 + 3];
			dOffset0 -= 4;
			dOffset1 -= 4;
			brOffset += 2;
		}
		var cOffset = 0;
		var dOffset = 0;
		var eOffset = n2 - 4;
		while(dOffset < eOffset) {
			var a02 = v[dOffset] - v[eOffset + 2];
			var a11 = v[dOffset + 1] + v[eOffset + 3];
			var b0 = c[cOffset + 1] * a02 + c[cOffset] * a11;
			var b1 = c[cOffset + 1] * a11 - c[cOffset] * a02;
			var b2 = v[dOffset] + v[eOffset + 2];
			var b3 = v[dOffset + 1] - v[eOffset + 3];
			v[dOffset] = b2 + b0;
			v[dOffset + 1] = b3 + b1;
			v[eOffset + 2] = b2 - b0;
			v[eOffset + 3] = b1 - b3;
			a02 = v[dOffset + 2] - v[eOffset];
			a11 = v[dOffset + 3] + v[eOffset + 1];
			b0 = c[cOffset + 3] * a02 + c[cOffset + 2] * a11;
			b1 = c[cOffset + 3] * a11 - c[cOffset + 2] * a02;
			b2 = v[dOffset + 2] + v[eOffset];
			b3 = v[dOffset + 3] - v[eOffset + 1];
			v[dOffset + 2] = b2 + b0;
			v[dOffset + 3] = b3 + b1;
			v[eOffset] = b2 - b0;
			v[eOffset + 1] = b1 - b3;
			cOffset += 4;
			dOffset += 4;
			eOffset -= 4;
		}
		var bOffset = n2 - 8;
		var eOffset = n2 - 8;
		var dOffset0 = 0;
		var dOffset1 = n2 - 4;
		var dOffset2 = n2;
		var dOffset3 = n - 4;
		while(eOffset >= 0) {
			var p3 = buf2[eOffset + 6] * b[bOffset + 7] - buf2[eOffset + 7] * b[bOffset + 6];
			var p2 = -buf2[eOffset + 6] * b[bOffset + 6] - buf2[eOffset + 7] * b[bOffset + 7];
			buffer[dOffset0] = p3;
			buffer[dOffset1 + 3] = -p3;
			buffer[dOffset2] = p2;
			buffer[dOffset3 + 3] = p2;
			var p1 = buf2[eOffset + 4] * b[bOffset + 5] - buf2[eOffset + 5] * b[bOffset + 4];
			var p0 = -buf2[eOffset + 4] * b[bOffset + 4] - buf2[eOffset + 5] * b[bOffset + 5];
			buffer[dOffset0 + 1] = p1;
			buffer[dOffset1 + 2] = -p1;
			buffer[dOffset2 + 1] = p0;
			buffer[dOffset3 + 2] = p0;
			p3 = buf2[eOffset + 2] * b[bOffset + 3] - buf2[eOffset + 3] * b[bOffset + 2];
			p2 = -buf2[eOffset + 2] * b[bOffset + 2] - buf2[eOffset + 3] * b[bOffset + 3];
			buffer[dOffset0 + 2] = p3;
			buffer[dOffset1 + 1] = -p3;
			buffer[dOffset2 + 2] = p2;
			buffer[dOffset3 + 1] = p2;
			p1 = buf2[eOffset] * b[bOffset + 1] - buf2[eOffset + 1] * b[bOffset];
			p0 = -buf2[eOffset] * b[bOffset] - buf2[eOffset + 1] * b[bOffset + 1];
			buffer[dOffset0 + 3] = p1;
			buffer[dOffset1] = -p1;
			buffer[dOffset2 + 3] = p0;
			buffer[dOffset3] = p0;
			bOffset -= 8;
			eOffset -= 8;
			dOffset0 += 4;
			dOffset2 += 4;
			dOffset1 -= 4;
			dOffset3 -= 4;
		}
	}
	,decodePacket: function() {
		var result = this.decodeInitial();
		if(result == null) {
			return null;
		}
		var rest = this.decodePacketRest(result);
		return rest;
	}
	,decodeInitial: function() {
		this.channelBufferStart = this.channelBufferEnd = 0;
		while(true) {
			if(!this.decodeState.maybeStartPacket()) {
				return null;
			}
			if(this.decodeState.readBits(1) != 0) {
				while(true) {
					var _this = this.decodeState;
					var x;
					if(_this.bytesInSeg == 0 && (_this.lastSeg || _this.next() == 0)) {
						x = -1;
					} else {
						_this.bytesInSeg--;
						_this.inputPosition += 1;
						x = _this.input.readByte();
					}
					_this.validBits = 0;
					if(!(-1 != x)) {
						break;
					}
				}
				continue;
			}
			break;
		}
		var n = this.header.modes.length - 1;
		var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
		var i = this.decodeState.readBits(n < 16384 ? n < 16 ? log2_4[n] : n < 512 ? 5 + log2_4[n >> 5] : 10 + log2_4[n >> 10] : n < 16777216 ? n < 524288 ? 15 + log2_4[n >> 15] : 20 + log2_4[n >> 20] : n < 536870912 ? 25 + log2_4[n >> 25] : n < -2147483648 ? 30 + log2_4[n >> 30] : 0);
		if(i == -1 || i >= this.header.modes.length) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 519, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodeInitial"}));
		}
		var m = this.header.modes[i];
		var n;
		var prev;
		var next;
		if(m.blockflag) {
			n = this.header.blocksize1;
			prev = this.decodeState.readBits(1);
			next = this.decodeState.readBits(1);
		} else {
			next = 0;
			prev = next;
			n = this.header.blocksize0;
		}
		var windowCenter = n >> 1;
		return { mode : i, left : m.blockflag && prev == 0 ? { start : n - this.header.blocksize0 >> 2, end : n + this.header.blocksize0 >> 2} : { start : 0, end : windowCenter}, right : m.blockflag && next == 0 ? { start : n * 3 - this.header.blocksize0 >> 2, end : n * 3 + this.header.blocksize0 >> 2} : { start : windowCenter, end : n}};
	}
	,decodePacketRest: function(r) {
		var len = 0;
		var m = this.header.modes[r.mode];
		var this1 = new Array(256);
		var zeroChannel = this1;
		var this1 = new Array(256);
		var reallyZeroChannel = this1;
		var n = m.blockflag ? this.header.blocksize1 : this.header.blocksize0;
		var map = this.header.mapping[m.mapping];
		var n2 = n >> 1;
		var rangeList = [256,128,86,64];
		var codebooks = this.header.codebooks;
		var _g = 0;
		var _g1 = this.header.channel;
		while(_g < _g1) {
			var i = _g++;
			var s = map.chan[i].mux;
			zeroChannel[i] = false;
			var floor = this.header.floorConfig[map.submapFloor[s]];
			if(floor.type == 0) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecoder.hx", lineNumber : 581, className : "kha.audio2.ogg.vorbis.VorbisDecoder", methodName : "decodePacketRest"}));
			} else {
				var g = floor.floor1;
				if(this.decodeState.readBits(1) != 0) {
					var fy = [];
					var this1 = new Array(256);
					var step2Flag = this1;
					var range = rangeList[g.floor1Multiplier - 1];
					var offset = 2;
					fy = this.finalY[i];
					var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
					fy[0] = this.decodeState.readBits((range < 16384 ? range < 16 ? log2_4[range] : range < 512 ? 5 + log2_4[range >> 5] : 10 + log2_4[range >> 10] : range < 16777216 ? range < 524288 ? 15 + log2_4[range >> 15] : 20 + log2_4[range >> 20] : range < 536870912 ? 25 + log2_4[range >> 25] : range < -2147483648 ? 30 + log2_4[range >> 30] : 0) - 1);
					var log2_41 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
					fy[1] = this.decodeState.readBits((range < 16384 ? range < 16 ? log2_41[range] : range < 512 ? 5 + log2_41[range >> 5] : 10 + log2_41[range >> 10] : range < 16777216 ? range < 524288 ? 15 + log2_41[range >> 15] : 20 + log2_41[range >> 20] : range < 536870912 ? 25 + log2_41[range >> 25] : range < -2147483648 ? 30 + log2_41[range >> 30] : 0) - 1);
					var _g2 = 0;
					var _g3 = g.partitions;
					while(_g2 < _g3) {
						var j = _g2++;
						var pclass = g.partitionClassList[j];
						var cdim = g.classDimensions[pclass];
						var cbits = g.classSubclasses[pclass];
						var csub = (1 << cbits) - 1;
						var cval = 0;
						if(cbits != 0) {
							var c = codebooks[g.classMasterbooks[pclass]];
							var _this = this.decodeState;
							if(_this.validBits < 10) {
								_this.prepHuffman();
							}
							var i1 = c.fastHuffman[_this.acc & 1023];
							var val;
							if(i1 >= 0) {
								var l = c.codewordLengths[i1];
								_this.acc = _this.acc >>> l;
								_this.validBits -= l;
								if(_this.validBits < 0) {
									_this.validBits = 0;
									val = -1;
								} else {
									val = i1;
								}
							} else {
								val = _this.decodeScalarRaw(c);
							}
							if(c.sparse) {
								val = c.sortedValues[val];
							}
							cval = val;
						}
						var books = g.subclassBooks[pclass];
						var _g4 = 0;
						var _g5 = cdim;
						while(_g4 < _g5) {
							var k = _g4++;
							var book = books[cval & csub];
							cval >>= cbits;
							var tmp = offset++;
							var tmp1;
							if(book >= 0) {
								var _this1 = this.decodeState;
								var c1 = codebooks[book];
								if(_this1.validBits < 10) {
									_this1.prepHuffman();
								}
								var i2 = c1.fastHuffman[_this1.acc & 1023];
								var val1;
								if(i2 >= 0) {
									var l1 = c1.codewordLengths[i2];
									_this1.acc = _this1.acc >>> l1;
									_this1.validBits -= l1;
									if(_this1.validBits < 0) {
										_this1.validBits = 0;
										val1 = -1;
									} else {
										val1 = i2;
									}
								} else {
									val1 = _this1.decodeScalarRaw(c1);
								}
								if(c1.sparse) {
									val1 = c1.sortedValues[val1];
								}
								tmp1 = val1;
							} else {
								tmp1 = 0;
							}
							fy[tmp] = tmp1;
						}
					}
					if(this.decodeState.validBits == -1) {
						zeroChannel[i] = true;
						continue;
					}
					step2Flag[0] = step2Flag[1] = true;
					var naighbors = g.neighbors;
					var xlist = g.xlist;
					var _g6 = 2;
					var _g7 = g.values;
					while(_g6 < _g7) {
						var j1 = _g6++;
						var low = naighbors[j1][0];
						var high = naighbors[j1][1];
						var x0 = xlist[low];
						var y0 = fy[low];
						var dy = fy[high] - y0;
						var adx = xlist[high] - x0;
						var err = Math.abs(dy) * (xlist[j1] - x0);
						var off = err / adx | 0;
						var lowroom = dy < 0 ? y0 - off : y0 + off;
						var val2 = fy[j1];
						var highroom = range - lowroom;
						var room = highroom < lowroom ? highroom * 2 : lowroom * 2;
						if(val2 != 0) {
							step2Flag[low] = step2Flag[high] = true;
							step2Flag[j1] = true;
							if(val2 >= room) {
								if(highroom > lowroom) {
									fy[j1] = val2 - lowroom + lowroom;
								} else {
									fy[j1] = lowroom - val2 + highroom - 1;
								}
							} else if((val2 & 1) != 0) {
								fy[j1] = lowroom - (val2 + 1 >> 1);
							} else {
								fy[j1] = lowroom + (val2 >> 1);
							}
						} else {
							step2Flag[j1] = false;
							fy[j1] = lowroom;
						}
					}
					var _g8 = 0;
					var _g9 = g.values;
					while(_g8 < _g9) {
						var j2 = _g8++;
						if(!step2Flag[j2]) {
							fy[j2] = -1;
						}
					}
				} else {
					zeroChannel[i] = true;
				}
			}
		}
		var _g = 0;
		var _g1 = this.header.channel;
		while(_g < _g1) {
			var i = _g++;
			reallyZeroChannel[i] = zeroChannel[i];
		}
		var _g = 0;
		var _g1 = map.couplingSteps;
		while(_g < _g1) {
			var i = _g++;
			if(!zeroChannel[map.chan[i].magnitude] || !zeroChannel[map.chan[i].angle]) {
				zeroChannel[map.chan[i].magnitude] = zeroChannel[map.chan[i].angle] = false;
			}
		}
		var _g = 0;
		var _g1 = map.submaps;
		while(_g < _g1) {
			var i = _g++;
			var this1 = new Array(this.header.channel);
			var residueBuffers = this1;
			var this2 = new Array(256);
			var doNotDecode = this2;
			var ch = 0;
			var _g2 = 0;
			var _g3 = this.header.channel;
			while(_g2 < _g3) {
				var j = _g2++;
				if(map.chan[j].mux == i) {
					if(zeroChannel[j]) {
						doNotDecode[ch] = true;
						residueBuffers[ch] = null;
					} else {
						doNotDecode[ch] = false;
						residueBuffers[ch] = this.channelBuffers[j];
					}
					++ch;
				}
			}
			var r1 = map.submapResidue[i];
			var residue = this.header.residueConfig[r1];
			residue.decode(this.decodeState,this.header,residueBuffers,ch,n2,doNotDecode,this.channelBuffers);
		}
		var i = map.couplingSteps;
		var n2 = n >> 1;
		while(--i >= 0) {
			var m1 = this.channelBuffers[map.chan[i].magnitude];
			var a = this.channelBuffers[map.chan[i].angle];
			var _g = 0;
			var _g1 = n2;
			while(_g < _g1) {
				var j = _g++;
				var a2;
				var m2;
				if(m1[j] > 0) {
					if(a[j] > 0) {
						m2 = m1[j];
						a2 = m1[j] - a[j];
					} else {
						a2 = m1[j];
						m2 = m1[j] + a[j];
					}
				} else if(a[j] > 0) {
					m2 = m1[j];
					a2 = m1[j] + a[j];
				} else {
					a2 = m1[j];
					m2 = m1[j] - a[j];
				}
				m1[j] = m2;
				a[j] = a2;
			}
		}
		var _g = 0;
		var _g1 = this.header.channel;
		while(_g < _g1) {
			var i = _g++;
			if(reallyZeroChannel[i]) {
				var _g2 = 0;
				var _g3 = n2;
				while(_g2 < _g3) {
					var j = _g2++;
					this.channelBuffers[i][j] = 0;
				}
			} else {
				map.doFloor(this.header.floorConfig,i,n,this.channelBuffers[i],this.finalY[i],null);
			}
		}
		var _g = 0;
		var _g1 = this.header.channel;
		while(_g < _g1) {
			var i = _g++;
			this.inverseMdct(this.channelBuffers[i],n,m.blockflag);
		}
		var _this = this.decodeState;
		while(_this.bytesInSeg != 0 || !_this.lastSeg && _this.next() != 0) {
			_this.bytesInSeg--;
			_this.inputPosition += 1;
			_this.input.readByte();
		}
		return this.decodeState.finishDecodePacket(this.previousLength,n,r);
	}
	,__class__: kha_audio2_ogg_vorbis_VorbisDecoder
};
var kha_audio2_ogg_vorbis_VorbisTools = function() { };
$hxClasses["kha.audio2.ogg.vorbis.VorbisTools"] = kha_audio2_ogg_vorbis_VorbisTools;
kha_audio2_ogg_vorbis_VorbisTools.__name__ = true;
kha_audio2_ogg_vorbis_VorbisTools.pointCompare = function(a,b) {
	if(a.x < b.x) {
		return -1;
	} else if(a.x > b.x) {
		return 1;
	} else {
		return 0;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.uintAsc = function(a,b) {
	if(UInt.gt(b,a)) {
		return -1;
	} else if(a == b) {
		return 0;
	} else {
		return 1;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.lookup1Values = function(entries,dim) {
	var r = Math.exp(Math.log(entries) / dim) | 0;
	if((Math.pow(r + 1,dim) | 0) <= entries) {
		++r;
	}
	return r;
};
kha_audio2_ogg_vorbis_VorbisTools.computeWindow = function(n,$window) {
	var n2 = n >> 1;
	var _g = 0;
	var _g1 = n2;
	while(_g < _g1) {
		var i = _g++;
		$window[i] = Math.sin(1.57079632679489656 * kha_audio2_ogg_vorbis_VorbisTools.square(Math.sin((i + 0.5) / n2 * 0.5 * 3.14159265358979323846264)));
	}
};
kha_audio2_ogg_vorbis_VorbisTools.square = function(f) {
	return f * f;
};
kha_audio2_ogg_vorbis_VorbisTools.computeBitReverse = function(n,rev) {
	var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
	var ld = (n < 16384 ? n < 16 ? log2_4[n] : n < 512 ? 5 + log2_4[n >> 5] : 10 + log2_4[n >> 10] : n < 16777216 ? n < 524288 ? 15 + log2_4[n >> 15] : 20 + log2_4[n >> 20] : n < 536870912 ? 25 + log2_4[n >> 25] : n < -2147483648 ? 30 + log2_4[n >> 30] : 0) - 1;
	var n8 = n >> 3;
	var _g = 0;
	var _g1 = n8;
	while(_g < _g1) {
		var i = _g++;
		var n = i;
		n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
		n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
		n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
		n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
		rev[i] = (n >>> 16 | n << 16) >>> 32 - ld + 3 << 2;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.computeTwiddleFactors = function(n,af,bf,cf) {
	var n4 = n >> 2;
	var n8 = n >> 3;
	var k2 = 0;
	var _g = 0;
	var _g1 = n4;
	while(_g < _g1) {
		var k = _g++;
		af[k2] = Math.cos(4 * k * 3.14159265358979323846264 / n);
		af[k2 + 1] = -Math.sin(4 * k * 3.14159265358979323846264 / n);
		bf[k2] = Math.cos((k2 + 1) * 3.14159265358979323846264 / n / 2) * 0.5;
		bf[k2 + 1] = Math.sin((k2 + 1) * 3.14159265358979323846264 / n / 2) * 0.5;
		k2 += 2;
	}
	var k2 = 0;
	var _g = 0;
	var _g1 = n8;
	while(_g < _g1) {
		var k = _g++;
		cf[k2] = Math.cos(2 * (k2 + 1) * 3.14159265358979323846264 / n);
		cf[k2 + 1] = -Math.sin(2 * (k2 + 1) * 3.14159265358979323846264 / n);
		k2 += 2;
	}
};
kha_audio2_ogg_vorbis_VorbisTools.drawLine = function(output,x0,y0,x1,y1,n) {
	if(kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable == null) {
		var this1 = new Array(32);
		kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable = this1;
		var _g = 0;
		while(_g < 32) {
			var i = _g++;
			var this1 = kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable;
			var this2 = new Array(64);
			this1[i] = this2;
			var _g1 = 1;
			while(_g1 < 64) {
				var j = _g1++;
				kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[i][j] = i / j | 0;
			}
		}
	}
	var dy = y1 - y0;
	var adx = x1 - x0;
	var ady = dy < 0 ? -dy : dy;
	var base;
	var x = x0;
	var y = y0;
	var err = 0;
	var sy;
	if(adx < 64 && ady < 32) {
		if(dy < 0) {
			base = -kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[ady][adx];
			sy = base - 1;
		} else {
			base = kha_audio2_ogg_vorbis_VorbisTools.integerDivideTable[ady][adx];
			sy = base + 1;
		}
	} else {
		base = dy / adx | 0;
		sy = dy < 0 ? base - 1 : base + 1;
	}
	ady -= (base < 0 ? -base : base) * adx;
	if(x1 > n) {
		x1 = n;
	}
	output[x] *= kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[y];
	var _g = x + 1;
	var _g1 = x1;
	while(_g < _g1) {
		var i = _g++;
		err += ady;
		if(err >= adx) {
			err -= adx;
			y += sy;
		} else {
			y += base;
		}
		output[i] *= kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[y];
	}
};
var kha_audio2_ogg_vorbis_data_Codebook = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Codebook"] = kha_audio2_ogg_vorbis_data_Codebook;
kha_audio2_ogg_vorbis_data_Codebook.__name__ = true;
kha_audio2_ogg_vorbis_data_Codebook.read = function(decodeState) {
	var c = new kha_audio2_ogg_vorbis_data_Codebook();
	if(decodeState.readBits(8) != 66 || decodeState.readBits(8) != 67 || decodeState.readBits(8) != 86) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 40, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	var x = decodeState.readBits(8);
	c.dimensions = (decodeState.readBits(8) << 8) + x;
	var x = decodeState.readBits(8);
	var y = decodeState.readBits(8);
	c.entries = (decodeState.readBits(8) << 16) + (y << 8) + x;
	var ordered = decodeState.readBits(1);
	c.sparse = ordered != 0 ? false : decodeState.readBits(1) != 0;
	var this1 = new Array(c.entries);
	var lengths = this1;
	if(!c.sparse) {
		c.codewordLengths = lengths;
	}
	var total = 0;
	if(ordered != 0) {
		var currentEntry = 0;
		var currentLength = decodeState.readBits(5) + 1;
		while(currentEntry < c.entries) {
			var limit = c.entries - currentEntry;
			var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
			var n = decodeState.readBits(limit < 16384 ? limit < 16 ? log2_4[limit] : limit < 512 ? 5 + log2_4[limit >> 5] : 10 + log2_4[limit >> 10] : limit < 16777216 ? limit < 524288 ? 15 + log2_4[limit >> 15] : 20 + log2_4[limit >> 20] : limit < 536870912 ? 25 + log2_4[limit >> 25] : limit < -2147483648 ? 30 + log2_4[limit >> 30] : 0);
			if(currentEntry + n > c.entries) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"codebook entrys",{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			}
			var _g = 0;
			var _g1 = n;
			while(_g < _g1) {
				var i = _g++;
				lengths[currentEntry + i] = currentLength;
			}
			currentEntry += n;
			++currentLength;
		}
	} else {
		var _g = 0;
		var _g1 = c.entries;
		while(_g < _g1) {
			var j = _g++;
			var present = c.sparse ? decodeState.readBits(1) : 1;
			if(present != 0) {
				lengths[j] = decodeState.readBits(5) + 1;
				++total;
			} else {
				lengths[j] = 255;
			}
		}
	}
	if(c.sparse && total >= c.entries >> 2) {
		c.codewordLengths = lengths;
		c.sparse = false;
	}
	var tmp;
	if(c.sparse) {
		tmp = total;
	} else {
		var sortedCount = 0;
		var _g = 0;
		var _g1 = c.entries;
		while(_g < _g1) {
			var j = _g++;
			var l = lengths[j];
			if(l > 10 && l != 255) {
				++sortedCount;
			}
		}
		tmp = sortedCount;
	}
	c.sortedEntries = tmp;
	var values = null;
	if(!c.sparse) {
		var this1 = new Array(c.entries);
		c.codewords = this1;
	} else {
		if(c.sortedEntries != 0) {
			var this1 = new Array(c.sortedEntries);
			c.codewordLengths = this1;
			var this1 = new Array(c.entries);
			c.codewords = this1;
			var this1 = new Array(c.entries);
			values = this1;
		}
		var size = c.entries + 64 * c.sortedEntries;
	}
	if(!c.computeCodewords(lengths,c.entries,values)) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"compute codewords",{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 120, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	if(c.sortedEntries != 0) {
		c.sortedCodewords = [];
		var this1 = new Array(c.sortedEntries);
		c.sortedValues = this1;
		c.computeSortedHuffman(lengths,values);
	}
	if(c.sparse) {
		values = null;
		c.codewords = null;
		lengths = null;
	}
	c.computeAcceleratedHuffman();
	c.lookupType = decodeState.readBits(4);
	if(c.lookupType > 2) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"codebook lookup type",{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 143, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
	}
	if(c.lookupType > 0) {
		var x = decodeState.readBits(32);
		var mantissa = UInt.toFloat(x & 2097151);
		var sign = x & -2147483648;
		var exp = (x & 2145386496) >>> 21;
		var res = sign != 0 ? -mantissa : mantissa;
		c.minimumValue = res * Math.pow(2,exp - 788);
		var x = decodeState.readBits(32);
		var mantissa = UInt.toFloat(x & 2097151);
		var sign = x & -2147483648;
		var exp = (x & 2145386496) >>> 21;
		var res = sign != 0 ? -mantissa : mantissa;
		c.deltaValue = res * Math.pow(2,exp - 788);
		c.valueBits = decodeState.readBits(4) + 1;
		c.sequenceP = decodeState.readBits(1) != 0;
		if(c.lookupType == 1) {
			c.lookupValues = kha_audio2_ogg_vorbis_VorbisTools.lookup1Values(c.entries,c.dimensions);
		} else {
			c.lookupValues = c.entries * c.dimensions;
		}
		var this1 = new Array(c.lookupValues);
		var mults = this1;
		var _g = 0;
		var _g1 = c.lookupValues;
		while(_g < _g1) {
			var j = _g++;
			var q = decodeState.readBits(c.valueBits);
			if(q == -1) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"fail lookup",{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 161, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "read"}));
			}
			mults[j] = q;
		}
		var this1 = new Array(c.lookupValues);
		c.multiplicands = this1;
		var _g = 0;
		var _g1 = c.lookupValues;
		while(_g < _g1) {
			var j = _g++;
			c.multiplicands[j] = mults[j] * c.deltaValue + c.minimumValue;
		}
		if(c.lookupType == 2 && c.sequenceP) {
			var _g = 1;
			var _g1 = c.lookupValues;
			while(_g < _g1) {
				var j = _g++;
				c.multiplicands[j] = c.multiplicands[j - 1];
			}
			c.sequenceP = false;
		}
	}
	return c;
};
kha_audio2_ogg_vorbis_data_Codebook.prototype = {
	computeCodewords: function(len,n,values) {
		var this1 = new Array(32);
		var available = this1;
		available[0] = 0;
		available[1] = 0;
		available[2] = 0;
		available[3] = 0;
		available[4] = 0;
		available[5] = 0;
		available[6] = 0;
		available[7] = 0;
		available[8] = 0;
		available[9] = 0;
		available[10] = 0;
		available[11] = 0;
		available[12] = 0;
		available[13] = 0;
		available[14] = 0;
		available[15] = 0;
		available[16] = 0;
		available[17] = 0;
		available[18] = 0;
		available[19] = 0;
		available[20] = 0;
		available[21] = 0;
		available[22] = 0;
		available[23] = 0;
		available[24] = 0;
		available[25] = 0;
		available[26] = 0;
		available[27] = 0;
		available[28] = 0;
		available[29] = 0;
		available[30] = 0;
		available[31] = 0;
		var k = 0;
		while(k < n) {
			if(len[k] < 255) {
				break;
			}
			++k;
		}
		if(k == n) {
			return true;
		}
		var m = 0;
		var count = m++;
		if(!this.sparse) {
			this.codewords[k] = 0;
		} else {
			this.codewords[count] = 0;
			this.codewordLengths[count] = len[k];
			values[count] = k;
		}
		var i = 0;
		while(++i <= len[k]) available[i] = 1 << 32 - i;
		i = k;
		while(++i < n) {
			var z = len[i];
			if(z == 255) {
				continue;
			}
			while(z > 0 && available[z] == 0) --z;
			if(z == 0) {
				return false;
			}
			var res = available[z];
			available[z] = 0;
			var n1 = res;
			n1 = (n1 & -1431655766) >>> 1 | (n1 & 1431655765) << 1;
			n1 = (n1 & -858993460) >>> 2 | (n1 & 858993459) << 2;
			n1 = (n1 & -252645136) >>> 4 | (n1 & 252645135) << 4;
			n1 = (n1 & -16711936) >>> 8 | (n1 & 16711935) << 8;
			var huffCode = n1 >>> 16 | n1 << 16;
			var count = m++;
			if(!this.sparse) {
				this.codewords[i] = huffCode;
			} else {
				this.codewords[count] = huffCode;
				this.codewordLengths[count] = len[i];
				values[count] = i;
			}
			if(z != len[i]) {
				var y = len[i];
				while(y > z) {
					available[y] = res + (1 << 32 - y);
					--y;
				}
			}
		}
		return true;
	}
	,computeSortedHuffman: function(lengths,values) {
		if(!this.sparse) {
			var k = 0;
			var _g = 0;
			var _g1 = this.entries;
			while(_g < _g1) {
				var i = _g++;
				var len = lengths[i];
				if(this.sparse ? true : len == 255 ? false : len > 10) {
					var n = this.codewords[i];
					n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
					n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
					n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
					n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
					this.sortedCodewords[k++] = n >>> 16 | n << 16;
				}
			}
		} else {
			var _g = 0;
			var _g1 = this.sortedEntries;
			while(_g < _g1) {
				var i = _g++;
				var n = this.codewords[i];
				n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
				n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
				n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
				n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
				this.sortedCodewords[i] = n >>> 16 | n << 16;
			}
		}
		this.sortedCodewords[this.sortedEntries] = -1;
		this.sortedCodewords.sort(kha_audio2_ogg_vorbis_VorbisTools.uintAsc);
		var len = this.sparse ? this.sortedEntries : this.entries;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			var huffLen = this.sparse ? lengths[values[i]] : lengths[i];
			if(this.sparse ? true : huffLen == 255 ? false : huffLen > 10) {
				var n = this.codewords[i];
				n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
				n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
				n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
				n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
				var code = n >>> 16 | n << 16;
				var x = 0;
				var n1 = this.sortedEntries;
				while(n1 > 1) {
					var m = x + (n1 >> 1);
					if(UInt.gte(code,this.sortedCodewords[m])) {
						x = m;
						n1 -= n1 >> 1;
					} else {
						n1 >>= 1;
					}
				}
				if(this.sparse) {
					this.sortedValues[x] = values[i];
					this.codewordLengths[x] = huffLen;
				} else {
					this.sortedValues[x] = i;
				}
			}
		}
	}
	,computeAcceleratedHuffman: function() {
		var this1 = new Array(1024);
		this.fastHuffman = this1;
		this.fastHuffman[0] = -1;
		var _g = 0;
		var _g1 = 1024;
		while(_g < _g1) {
			var i = _g++;
			this.fastHuffman[i] = -1;
		}
		var len = this.sparse ? this.sortedEntries : this.entries;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			if(this.codewordLengths[i] <= 10) {
				var z;
				if(this.sparse) {
					var n = this.sortedCodewords[i];
					n = (n & -1431655766) >>> 1 | (n & 1431655765) << 1;
					n = (n & -858993460) >>> 2 | (n & 858993459) << 2;
					n = (n & -252645136) >>> 4 | (n & 252645135) << 4;
					n = (n & -16711936) >>> 8 | (n & 16711935) << 8;
					z = n >>> 16 | n << 16;
				} else {
					z = this.codewords[i];
				}
				while(z < 1024) {
					this.fastHuffman[z] = i;
					z += 1 << this.codewordLengths[i];
				}
			}
		}
	}
	,codebookDecode: function(decodeState,output,offset,len) {
		if(decodeState.validBits < 10) {
			decodeState.prepHuffman();
		}
		var i = this.fastHuffman[decodeState.acc & 1023];
		var val;
		if(i >= 0) {
			var l = this.codewordLengths[i];
			decodeState.acc = decodeState.acc >>> l;
			decodeState.validBits -= l;
			if(decodeState.validBits < 0) {
				decodeState.validBits = 0;
				val = -1;
			} else {
				val = i;
			}
		} else {
			val = decodeState.decodeScalarRaw(this);
		}
		if(this.sparse) {
			val = this.sortedValues[val];
		}
		var z = val;
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		var minimumValue = this.minimumValue;
		if(z < 0) {
			return false;
		}
		if(len > this.dimensions) {
			len = this.dimensions;
		}
		if(this.lookupType == 1) {
			var div = 1;
			var last = 0.0;
			var _g = 0;
			var _g1 = len;
			while(_g < _g1) {
				var i = _g++;
				var off = UInt.toFloat(z / div | 0) % UInt.toFloat(lookupValues) | 0;
				var val = multiplicands[off] + last;
				output[offset + i] += val;
				if(sequenceP) {
					last = val + minimumValue;
				}
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		if(sequenceP) {
			var last = 0.0;
			var _g = 0;
			var _g1 = len;
			while(_g < _g1) {
				var i = _g++;
				var val = multiplicands[z + i] + last;
				output[offset + i] += val;
				last = val + minimumValue;
			}
		} else {
			var last = 0.0;
			var _g = 0;
			var _g1 = len;
			while(_g < _g1) {
				var i = _g++;
				output[offset + i] += multiplicands[z + i] + last;
			}
		}
		return true;
	}
	,codebookDecodeStep: function(decodeState,output,offset,len,step) {
		if(decodeState.validBits < 10) {
			decodeState.prepHuffman();
		}
		var i = this.fastHuffman[decodeState.acc & 1023];
		var val;
		if(i >= 0) {
			var l = this.codewordLengths[i];
			decodeState.acc = decodeState.acc >>> l;
			decodeState.validBits -= l;
			if(decodeState.validBits < 0) {
				decodeState.validBits = 0;
				val = -1;
			} else {
				val = i;
			}
		} else {
			val = decodeState.decodeScalarRaw(this);
		}
		if(this.sparse) {
			val = this.sortedValues[val];
		}
		var z = val;
		var last = 0.0;
		if(z < 0) {
			return false;
		}
		if(len > this.dimensions) {
			len = this.dimensions;
		}
		var lookupValues = this.lookupValues;
		var sequenceP = this.sequenceP;
		var multiplicands = this.multiplicands;
		if(this.lookupType == 1) {
			var div = 1;
			var _g = 0;
			var _g1 = len;
			while(_g < _g1) {
				var i = _g++;
				var off = UInt.toFloat(z / div | 0) % UInt.toFloat(lookupValues) | 0;
				var val = multiplicands[off] + last;
				output[offset + i * step] += val;
				if(sequenceP) {
					last = val;
				}
				div = div * lookupValues;
			}
			return true;
		}
		z *= this.dimensions;
		var _g = 0;
		var _g1 = len;
		while(_g < _g1) {
			var i = _g++;
			var val = multiplicands[z + i] + last;
			output[offset + i * step] += val;
			if(sequenceP) {
				last = val;
			}
		}
		return true;
	}
	,decodeDeinterleaveRepeat: function(decodeState,residueBuffers,ch,cInter,pInter,len,totalDecode) {
		var effective = this.dimensions;
		if(this.lookupType == 0) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 488, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
		}
		var multiplicands = this.multiplicands;
		var sequenceP = this.sequenceP;
		var lookupValues = this.lookupValues;
		while(totalDecode > 0) {
			var last = 0.0;
			if(decodeState.validBits < 10) {
				decodeState.prepHuffman();
			}
			var i = this.fastHuffman[decodeState.acc & 1023];
			var val;
			if(i >= 0) {
				var l = this.codewordLengths[i];
				decodeState.acc = decodeState.acc >>> l;
				decodeState.validBits -= l;
				if(decodeState.validBits < 0) {
					decodeState.validBits = 0;
					val = -1;
				} else {
					val = i;
				}
			} else {
				val = decodeState.decodeScalarRaw(this);
			}
			if(this.sparse) {
				val = this.sortedValues[val];
			}
			var z = val;
			if(z < 0) {
				if(decodeState.bytesInSeg == 0 && decodeState.lastSeg) {
					return null;
				}
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "kha/audio2/ogg/vorbis/data/Codebook.hx", lineNumber : 503, className : "kha.audio2.ogg.vorbis.data.Codebook", methodName : "decodeDeinterleaveRepeat"}));
			}
			if(cInter + pInter * ch + effective > len * ch) {
				effective = len * ch - (pInter * ch - cInter);
			}
			if(this.lookupType == 1) {
				var div = 1;
				if(sequenceP) {
					var _g = 0;
					var _g1 = effective;
					while(_g < _g1) {
						var i1 = _g++;
						var off = UInt.toFloat(z / div | 0) % UInt.toFloat(lookupValues) | 0;
						var val1 = multiplicands[off] + last;
						residueBuffers[cInter][pInter] += val1;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val1;
						div = div * lookupValues;
					}
				} else {
					var _g2 = 0;
					var _g3 = effective;
					while(_g2 < _g3) {
						var i2 = _g2++;
						var off1 = UInt.toFloat(z / div | 0) % UInt.toFloat(lookupValues) | 0;
						var val2 = multiplicands[off1] + last;
						residueBuffers[cInter][pInter] += val2;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						div = div * lookupValues;
					}
				}
			} else {
				z *= this.dimensions;
				if(sequenceP) {
					var _g4 = 0;
					var _g5 = effective;
					while(_g4 < _g5) {
						var i3 = _g4++;
						var val3 = multiplicands[z + i3] + last;
						residueBuffers[cInter][pInter] += val3;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
						last = val3;
					}
				} else {
					var _g6 = 0;
					var _g7 = effective;
					while(_g6 < _g7) {
						var i4 = _g6++;
						var val4 = multiplicands[z + i4] + last;
						residueBuffers[cInter][pInter] += val4;
						if(++cInter == ch) {
							cInter = 0;
							++pInter;
						}
					}
				}
			}
			totalDecode -= effective;
		}
		return { cInter : cInter, pInter : pInter};
	}
	,residueDecode: function(decodeState,target,offset,n,rtype) {
		if(rtype == 0) {
			var step = n / this.dimensions | 0;
			var _g = 0;
			var _g1 = step;
			while(_g < _g1) {
				var k = _g++;
				if(!this.codebookDecodeStep(decodeState,target,offset + k,n - offset - k,step)) {
					return false;
				}
			}
		} else {
			var k = 0;
			while(k < n) {
				if(!this.codebookDecode(decodeState,target,offset,n - k)) {
					return false;
				}
				k += this.dimensions;
				offset += this.dimensions;
			}
		}
		return true;
	}
	,__class__: kha_audio2_ogg_vorbis_data_Codebook
};
var kha_audio2_ogg_vorbis_data_Comment = function() {
	this.data = new haxe_ds_StringMap();
};
$hxClasses["kha.audio2.ogg.vorbis.data.Comment"] = kha_audio2_ogg_vorbis_data_Comment;
kha_audio2_ogg_vorbis_data_Comment.__name__ = true;
kha_audio2_ogg_vorbis_data_Comment.prototype = {
	get_loopStart: function() {
		return Std.parseInt(this.getString("loopstart"));
	}
	,get_loopLength: function() {
		return Std.parseInt(this.getString("looplength"));
	}
	,add: function(key,value) {
		key = key.toLowerCase();
		if(Object.prototype.hasOwnProperty.call(this.data.h,key)) {
			this.data.h[key].push(value);
		} else {
			var v = [value];
			this.data.h[key] = v;
		}
	}
	,getString: function(key) {
		key = key.toLowerCase();
		if(Object.prototype.hasOwnProperty.call(this.data.h,key)) {
			return this.data.h[key][0];
		} else {
			return null;
		}
	}
	,__class__: kha_audio2_ogg_vorbis_data_Comment
	,__properties__: {get_loopLength:"get_loopLength",get_loopStart:"get_loopStart"}
};
var kha_audio2_ogg_vorbis_data_Floor = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor"] = kha_audio2_ogg_vorbis_data_Floor;
kha_audio2_ogg_vorbis_data_Floor.__name__ = true;
kha_audio2_ogg_vorbis_data_Floor.read = function(decodeState,codebooks) {
	var floor = new kha_audio2_ogg_vorbis_data_Floor();
	floor.type = decodeState.readBits(16);
	if(floor.type > 1) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Floor.hx", lineNumber : 28, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	}
	if(floor.type == 0) {
		var g = floor.floor0 = new kha_audio2_ogg_vorbis_data_Floor0();
		g.order = decodeState.readBits(8);
		g.rate = decodeState.readBits(16);
		g.barkMapSize = decodeState.readBits(16);
		g.amplitudeBits = decodeState.readBits(6);
		g.amplitudeOffset = decodeState.readBits(8);
		g.numberOfBooks = decodeState.readBits(4) + 1;
		var _g = 0;
		var _g1 = g.numberOfBooks;
		while(_g < _g1) {
			var j = _g++;
			g.bookList[j] = decodeState.readBits(8);
		}
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED,null,{ fileName : "kha/audio2/ogg/vorbis/data/Floor.hx", lineNumber : 41, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
	} else {
		var p = [];
		var g = floor.floor1 = new kha_audio2_ogg_vorbis_data_Floor1();
		var maxClass = -1;
		g.partitions = decodeState.readBits(5);
		var this1 = new Array(g.partitions);
		g.partitionClassList = this1;
		var _g = 0;
		var _g1 = g.partitions;
		while(_g < _g1) {
			var j = _g++;
			g.partitionClassList[j] = decodeState.readBits(4);
			if(g.partitionClassList[j] > maxClass) {
				maxClass = g.partitionClassList[j];
			}
		}
		var this1 = new Array(maxClass + 1);
		g.classDimensions = this1;
		var this1 = new Array(maxClass + 1);
		g.classMasterbooks = this1;
		var this1 = new Array(maxClass + 1);
		g.classSubclasses = this1;
		var this1 = new Array(maxClass + 1);
		g.subclassBooks = this1;
		var _g = 0;
		var _g1 = maxClass + 1;
		while(_g < _g1) {
			var j = _g++;
			g.classDimensions[j] = decodeState.readBits(3) + 1;
			g.classSubclasses[j] = decodeState.readBits(2);
			if(g.classSubclasses[j] != 0) {
				g.classMasterbooks[j] = decodeState.readBits(8);
				if(g.classMasterbooks[j] >= codebooks.length) {
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Floor.hx", lineNumber : 64, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
				}
			}
			var kl = 1 << g.classSubclasses[j];
			var this1 = g.subclassBooks;
			var this2 = new Array(kl);
			this1[j] = this2;
			var _g2 = 0;
			var _g3 = kl;
			while(_g2 < _g3) {
				var k = _g2++;
				g.subclassBooks[j][k] = decodeState.readBits(8) - 1;
				if(g.subclassBooks[j][k] >= codebooks.length) {
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Floor.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Floor", methodName : "read"}));
				}
			}
		}
		g.floor1Multiplier = decodeState.readBits(2) + 1;
		g.rangebits = decodeState.readBits(4);
		var this1 = new Array(250);
		g.xlist = this1;
		g.xlist[0] = 0;
		g.xlist[1] = 1 << g.rangebits;
		g.values = 2;
		var _g = 0;
		var _g1 = g.partitions;
		while(_g < _g1) {
			var j = _g++;
			var c = g.partitionClassList[j];
			var _g2 = 0;
			var _g3 = g.classDimensions[c];
			while(_g2 < _g3) {
				var k = _g2++;
				g.xlist[g.values] = decodeState.readBits(g.rangebits);
				g.values++;
			}
		}
		var _g = 0;
		var _g1 = g.values;
		while(_g < _g1) {
			var j = _g++;
			p.push(new kha_audio2_ogg_vorbis_data_IntPoint());
			p[j].x = g.xlist[j];
			p[j].y = j;
		}
		p.sort(kha_audio2_ogg_vorbis_VorbisTools.pointCompare);
		var this1 = new Array(g.values);
		g.sortedOrder = this1;
		var _g = 0;
		var _g1 = g.values;
		while(_g < _g1) {
			var j = _g++;
			g.sortedOrder[j] = p[j].y;
		}
		var this1 = new Array(g.values);
		g.neighbors = this1;
		var _g = 2;
		var _g1 = g.values;
		while(_g < _g1) {
			var j = _g++;
			var x = g.xlist;
			var low = -1;
			var high = 65536;
			var plow = 0;
			var phigh = 0;
			var _g2 = 0;
			var _g3 = j;
			while(_g2 < _g3) {
				var i = _g2++;
				if(x[i] > low && x[i] < x[j]) {
					plow = i;
					low = x[i];
				}
				if(x[i] < high && x[i] > x[j]) {
					phigh = i;
					high = x[i];
				}
			}
			var ne_low = plow;
			var ne_high = phigh;
			var this1 = g.neighbors;
			var this2 = new Array(g.values);
			this1[j] = this2;
			g.neighbors[j][0] = ne_low;
			g.neighbors[j][1] = ne_high;
		}
	}
	return floor;
};
kha_audio2_ogg_vorbis_data_Floor.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Floor
};
var kha_audio2_ogg_vorbis_data_Floor0 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor0"] = kha_audio2_ogg_vorbis_data_Floor0;
kha_audio2_ogg_vorbis_data_Floor0.__name__ = true;
kha_audio2_ogg_vorbis_data_Floor0.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Floor0
};
var kha_audio2_ogg_vorbis_data_Floor1 = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Floor1"] = kha_audio2_ogg_vorbis_data_Floor1;
kha_audio2_ogg_vorbis_data_Floor1.__name__ = true;
kha_audio2_ogg_vorbis_data_Floor1.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Floor1
};
var kha_audio2_ogg_vorbis_data_Header = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Header"] = kha_audio2_ogg_vorbis_data_Header;
kha_audio2_ogg_vorbis_data_Header.__name__ = true;
kha_audio2_ogg_vorbis_data_Header.read = function(decodeState) {
	var page = decodeState.page;
	page.start(decodeState);
	if((page.flag & 2) == 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"not firstPage",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if((page.flag & 4) != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"lastPage",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if((page.flag & 1) != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"continuedPacket",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.firstPageValidate();
	decodeState.inputPosition += 1;
	if(decodeState.input.readByte() != 1) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"decodeState head",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 57, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var header = new haxe_io_Bytes(new ArrayBuffer(6));
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[0] = x;
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[1] = x;
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[2] = x;
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[3] = x;
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[4] = x;
	var x;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header.b[5] = x;
	if(header.toString() != "vorbis") {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"vorbis header",{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 301, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "vorbisValidate"}));
	}
	decodeState.inputPosition += 4;
	var version = decodeState.input.readInt32();
	if(version != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"vorbis version : " + version,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 66, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var header = new kha_audio2_ogg_vorbis_data_Header();
	decodeState.inputPosition += 1;
	header.channel = decodeState.input.readByte();
	if(header.channel == 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"no channel",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 73, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	} else if(header.channel > 16) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS,"too many channels",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 75, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.inputPosition += 4;
	header.sampleRate = decodeState.input.readInt32();
	if(header.sampleRate == 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,"no sampling rate",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 80, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.inputPosition += 4;
	header.maximumBitRate = decodeState.input.readInt32();
	decodeState.inputPosition += 4;
	header.nominalBitRate = decodeState.input.readInt32();
	decodeState.inputPosition += 4;
	header.minimumBitRate = decodeState.input.readInt32();
	decodeState.inputPosition += 1;
	var x = decodeState.input.readByte();
	var log0 = x & 15;
	var log1 = x >> 4;
	header.blocksize0 = 1 << log0;
	header.blocksize1 = 1 << log1;
	if(log0 < 6 || log0 > 13) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 93, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if(log1 < 6 || log1 > 13) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 96, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	if(log0 > log1) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 99, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.inputPosition += 1;
	var x = decodeState.input.readByte();
	if((x & 1) == 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 105, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.page.start(decodeState);
	decodeState.startPacket();
	var len = 0;
	var output = new haxe_io_BytesOutput();
	while(true) {
		len = decodeState.next();
		if(!(len != 0)) {
			break;
		}
		decodeState.inputPosition += len;
		output.write(decodeState.input.read(len));
		decodeState.bytesInSeg = 0;
	}
	var packetInput = new haxe_io_BytesInput(output.getBytes());
	packetInput.readByte();
	packetInput.read(6);
	var vendorLength = packetInput.readInt32();
	header.vendor = packetInput.readString(vendorLength);
	header.comment = new kha_audio2_ogg_vorbis_data_Comment();
	var commentCount = packetInput.readInt32();
	var _g = 0;
	var _g1 = commentCount;
	while(_g < _g1) {
		var i = _g++;
		var n = packetInput.readInt32();
		var str = packetInput.readString(n);
		var splitter = str.indexOf("=");
		if(splitter != -1) {
			header.comment.add(str.substring(0,splitter),str.substring(splitter + 1));
		}
	}
	var x1 = packetInput.readByte();
	if((x1 & 1) == 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 141, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	decodeState.startPacket();
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	if(x1 != 5) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"setup packet",{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 149, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
	}
	var header1 = new haxe_io_Bytes(new ArrayBuffer(6));
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[0] = x1;
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[1] = x1;
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[2] = x1;
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[3] = x1;
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[4] = x1;
	var x1;
	if(decodeState.bytesInSeg == 0 && (decodeState.lastSeg || decodeState.next() == 0)) {
		x1 = -1;
	} else {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		x1 = decodeState.input.readByte();
	}
	decodeState.validBits = 0;
	header1.b[5] = x1;
	if(header1.toString() != "vorbis") {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"vorbis header",{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 301, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "vorbisValidate"}));
	}
	var codebookCount = decodeState.readBits(8) + 1;
	var this1 = new Array(codebookCount);
	header.codebooks = this1;
	var _g = 0;
	var _g1 = codebookCount;
	while(_g < _g1) {
		var i = _g++;
		header.codebooks[i] = kha_audio2_ogg_vorbis_data_Codebook.read(decodeState);
	}
	x = decodeState.readBits(6) + 1;
	var _g = 0;
	var _g1 = x;
	while(_g < _g1) {
		var i = _g++;
		if(decodeState.readBits(16) != 0) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 165, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
		}
	}
	var floorCount = decodeState.readBits(6) + 1;
	var this1 = new Array(floorCount);
	header.floorConfig = this1;
	var _g = 0;
	var _g1 = floorCount;
	while(_g < _g1) {
		var i = _g++;
		header.floorConfig[i] = kha_audio2_ogg_vorbis_data_Floor.read(decodeState,header.codebooks);
	}
	var residueCount = decodeState.readBits(6) + 1;
	var this1 = new Array(residueCount);
	header.residueConfig = this1;
	var _g = 0;
	var _g1 = residueCount;
	while(_g < _g1) {
		var i = _g++;
		header.residueConfig[i] = kha_audio2_ogg_vorbis_data_Residue.read(decodeState,header.codebooks);
	}
	var mappingCount = decodeState.readBits(6) + 1;
	var this1 = new Array(mappingCount);
	header.mapping = this1;
	var _g = 0;
	var _g1 = mappingCount;
	while(_g < _g1) {
		var i = _g++;
		var map = kha_audio2_ogg_vorbis_data_Mapping.read(decodeState,header.channel);
		header.mapping[i] = map;
		var _g2 = 0;
		var _g3 = map.submaps;
		while(_g2 < _g3) {
			var j = _g2++;
			if(map.submapFloor[j] >= header.floorConfig.length) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 191, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
			}
			if(map.submapResidue[j] >= header.residueConfig.length) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 194, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
			}
		}
	}
	var modeCount = decodeState.readBits(6) + 1;
	var this1 = new Array(modeCount);
	header.modes = this1;
	var _g = 0;
	var _g1 = modeCount;
	while(_g < _g1) {
		var i = _g++;
		var mode = kha_audio2_ogg_vorbis_data_Mode.read(decodeState);
		header.modes[i] = mode;
		if(mode.mapping >= header.mapping.length) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Header.hx", lineNumber : 205, className : "kha.audio2.ogg.vorbis.data.Header", methodName : "read"}));
		}
	}
	while(decodeState.bytesInSeg != 0 || !decodeState.lastSeg && decodeState.next() != 0) {
		decodeState.bytesInSeg--;
		decodeState.inputPosition += 1;
		decodeState.input.readByte();
	}
	return header;
};
kha_audio2_ogg_vorbis_data_Header.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Header
};
var kha_audio2_ogg_vorbis_data_IntPoint = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.IntPoint"] = kha_audio2_ogg_vorbis_data_IntPoint;
kha_audio2_ogg_vorbis_data_IntPoint.__name__ = true;
kha_audio2_ogg_vorbis_data_IntPoint.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_IntPoint
};
var kha_audio2_ogg_vorbis_data_Mapping = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Mapping"] = kha_audio2_ogg_vorbis_data_Mapping;
kha_audio2_ogg_vorbis_data_Mapping.__name__ = true;
kha_audio2_ogg_vorbis_data_Mapping.read = function(decodeState,channels) {
	var m = new kha_audio2_ogg_vorbis_data_Mapping();
	var mappingType = decodeState.readBits(16);
	if(mappingType != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,"mapping type " + mappingType,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 22, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	}
	var this1 = new Array(channels);
	m.chan = this1;
	var _g = 0;
	var _g1 = channels;
	while(_g < _g1) {
		var j = _g++;
		m.chan[j] = new kha_audio2_ogg_vorbis_data_MappingChannel();
	}
	if(decodeState.readBits(1) != 0) {
		m.submaps = decodeState.readBits(4) + 1;
	} else {
		m.submaps = 1;
	}
	if(decodeState.readBits(1) != 0) {
		m.couplingSteps = decodeState.readBits(8) + 1;
		var _g = 0;
		var _g1 = m.couplingSteps;
		while(_g < _g1) {
			var k = _g++;
			var n = channels - 1;
			var log2_4 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
			m.chan[k].magnitude = decodeState.readBits(n < 16384 ? n < 16 ? log2_4[n] : n < 512 ? 5 + log2_4[n >> 5] : 10 + log2_4[n >> 10] : n < 16777216 ? n < 524288 ? 15 + log2_4[n >> 15] : 20 + log2_4[n >> 20] : n < 536870912 ? 25 + log2_4[n >> 25] : n < -2147483648 ? 30 + log2_4[n >> 30] : 0);
			var n1 = channels - 1;
			var log2_41 = [0,1,2,2,3,3,3,3,4,4,4,4,4,4,4,4];
			m.chan[k].angle = decodeState.readBits(n1 < 16384 ? n1 < 16 ? log2_41[n1] : n1 < 512 ? 5 + log2_41[n1 >> 5] : 10 + log2_41[n1 >> 10] : n1 < 16777216 ? n1 < 524288 ? 15 + log2_41[n1 >> 15] : 20 + log2_41[n1 >> 20] : n1 < 536870912 ? 25 + log2_41[n1 >> 25] : n1 < -2147483648 ? 30 + log2_41[n1 >> 30] : 0);
			if(m.chan[k].magnitude >= channels) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 46, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
			if(m.chan[k].angle >= channels) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 49, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
			if(m.chan[k].magnitude == m.chan[k].angle) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 52, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
		}
	} else {
		m.couplingSteps = 0;
	}
	if(decodeState.readBits(2) != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 61, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
	}
	if(m.submaps > 1) {
		var _g = 0;
		var _g1 = channels;
		while(_g < _g1) {
			var j = _g++;
			m.chan[j].mux = decodeState.readBits(4);
			if(m.chan[j].mux >= m.submaps) {
				throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 67, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "read"}));
			}
		}
	} else {
		var _g = 0;
		var _g1 = channels;
		while(_g < _g1) {
			var j = _g++;
			m.chan[j].mux = 0;
		}
	}
	var this1 = new Array(m.submaps);
	m.submapFloor = this1;
	var this1 = new Array(m.submaps);
	m.submapResidue = this1;
	var _g = 0;
	var _g1 = m.submaps;
	while(_g < _g1) {
		var j = _g++;
		decodeState.readBits(8);
		m.submapFloor[j] = decodeState.readBits(8);
		m.submapResidue[j] = decodeState.readBits(8);
	}
	return m;
};
kha_audio2_ogg_vorbis_data_Mapping.prototype = {
	doFloor: function(floors,i,n,target,finalY,step2Flag) {
		var n2 = n >> 1;
		var s = this.chan[i].mux;
		var floor;
		var floor = floors[this.submapFloor[s]];
		if(floor.type == 0) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mapping.hx", lineNumber : 94, className : "kha.audio2.ogg.vorbis.data.Mapping", methodName : "doFloor"}));
		} else {
			var g = floor.floor1;
			var lx = 0;
			var ly = finalY[0] * g.floor1Multiplier;
			var _g = 1;
			var _g1 = g.values;
			while(_g < _g1) {
				var q = _g++;
				var j = g.sortedOrder[q];
				if(finalY[j] >= 0) {
					var hy = finalY[j] * g.floor1Multiplier;
					var hx = g.xlist[j];
					kha_audio2_ogg_vorbis_VorbisTools.drawLine(target,lx,ly,hx,hy,n2);
					lx = hx;
					ly = hy;
				}
			}
			if(lx < n2) {
				var _g = lx;
				var _g1 = n2;
				while(_g < _g1) {
					var j = _g++;
					target[j] *= kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE[ly];
				}
			}
		}
	}
	,__class__: kha_audio2_ogg_vorbis_data_Mapping
};
var kha_audio2_ogg_vorbis_data_MappingChannel = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.MappingChannel"] = kha_audio2_ogg_vorbis_data_MappingChannel;
kha_audio2_ogg_vorbis_data_MappingChannel.__name__ = true;
kha_audio2_ogg_vorbis_data_MappingChannel.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_MappingChannel
};
var kha_audio2_ogg_vorbis_data_Mode = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Mode"] = kha_audio2_ogg_vorbis_data_Mode;
kha_audio2_ogg_vorbis_data_Mode.__name__ = true;
kha_audio2_ogg_vorbis_data_Mode.read = function(decodeState) {
	var m = new kha_audio2_ogg_vorbis_data_Mode();
	m.blockflag = decodeState.readBits(1) != 0;
	m.windowtype = decodeState.readBits(16);
	m.transformtype = decodeState.readBits(16);
	m.mapping = decodeState.readBits(8);
	if(m.windowtype != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mode.hx", lineNumber : 22, className : "kha.audio2.ogg.vorbis.data.Mode", methodName : "read"}));
	}
	if(m.transformtype != 0) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Mode.hx", lineNumber : 25, className : "kha.audio2.ogg.vorbis.data.Mode", methodName : "read"}));
	}
	return m;
};
kha_audio2_ogg_vorbis_data_Mode.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_Mode
};
var kha_audio2_ogg_vorbis_data_Page = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Page"] = kha_audio2_ogg_vorbis_data_Page;
kha_audio2_ogg_vorbis_data_Page.__name__ = true;
kha_audio2_ogg_vorbis_data_Page.prototype = {
	clone: function() {
		var page = new kha_audio2_ogg_vorbis_data_Page();
		page.flag = this.flag;
		return page;
	}
	,start: function(decodeState) {
		var tmp;
		var tmp1;
		var tmp2;
		decodeState.inputPosition += 1;
		if(decodeState.input.readByte() == 79) {
			decodeState.inputPosition += 1;
			tmp2 = decodeState.input.readByte() != 103;
		} else {
			tmp2 = true;
		}
		if(!tmp2) {
			decodeState.inputPosition += 1;
			tmp1 = decodeState.input.readByte() != 103;
		} else {
			tmp1 = true;
		}
		if(!tmp1) {
			decodeState.inputPosition += 1;
			tmp = decodeState.input.readByte() != 83;
		} else {
			tmp = true;
		}
		if(tmp) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,null,{ fileName : "kha/audio2/ogg/vorbis/VorbisDecodeState.hx", lineNumber : 324, className : "kha.audio2.ogg.vorbis.VorbisDecodeState", methodName : "capturePattern"}));
		}
		this.startWithoutCapturePattern(decodeState);
	}
	,startWithoutCapturePattern: function(decodeState) {
		decodeState.inputPosition += 1;
		var version = decodeState.input.readByte();
		if(version != 0) {
			throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION,"" + version,{ fileName : "kha/audio2/ogg/vorbis/data/Page.hx", lineNumber : 34, className : "kha.audio2.ogg.vorbis.data.Page", methodName : "startWithoutCapturePattern"}));
		}
		decodeState.inputPosition += 1;
		this.flag = decodeState.input.readByte();
		decodeState.inputPosition += 4;
		var loc0 = decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		var loc1 = decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.inputPosition += 4;
		decodeState.input.readInt32();
		decodeState.setup(loc0,loc1);
	}
	,__class__: kha_audio2_ogg_vorbis_data_Page
};
var kha_audio2_ogg_vorbis_data_ProbedPage = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.ProbedPage"] = kha_audio2_ogg_vorbis_data_ProbedPage;
kha_audio2_ogg_vorbis_data_ProbedPage.__name__ = true;
kha_audio2_ogg_vorbis_data_ProbedPage.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_ProbedPage
};
var kha_audio2_ogg_vorbis_data_ReaderError = function(type,message,posInfos) {
	if(message == null) {
		message = "";
	}
	this.type = type;
	this.message = message;
	this.posInfos = posInfos;
};
$hxClasses["kha.audio2.ogg.vorbis.data.ReaderError"] = kha_audio2_ogg_vorbis_data_ReaderError;
kha_audio2_ogg_vorbis_data_ReaderError.__name__ = true;
kha_audio2_ogg_vorbis_data_ReaderError.prototype = {
	__class__: kha_audio2_ogg_vorbis_data_ReaderError
};
var kha_audio2_ogg_vorbis_data_ReaderErrorType = $hxEnums["kha.audio2.ogg.vorbis.data.ReaderErrorType"] = { __ename__:true,__constructs__:null
	,NEED_MORE_DATA: {_hx_name:"NEED_MORE_DATA",_hx_index:0,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INVALID_API_MIXING: {_hx_name:"INVALID_API_MIXING",_hx_index:1,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,OUTOFMEM: {_hx_name:"OUTOFMEM",_hx_index:2,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,FEATURE_NOT_SUPPORTED: {_hx_name:"FEATURE_NOT_SUPPORTED",_hx_index:3,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,TOO_MANY_CHANNELS: {_hx_name:"TOO_MANY_CHANNELS",_hx_index:4,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,FILE_OPEN_FAILURE: {_hx_name:"FILE_OPEN_FAILURE",_hx_index:5,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,SEEK_WITHOUT_LENGTH: {_hx_name:"SEEK_WITHOUT_LENGTH",_hx_index:6,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,UNEXPECTED_EOF: {_hx_name:"UNEXPECTED_EOF",_hx_index:7,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,SEEK_INVALID: {_hx_name:"SEEK_INVALID",_hx_index:8,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INVALID_SETUP: {_hx_name:"INVALID_SETUP",_hx_index:9,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INVALID_STREAM: {_hx_name:"INVALID_STREAM",_hx_index:10,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,MISSING_CAPTURE_PATTERN: {_hx_name:"MISSING_CAPTURE_PATTERN",_hx_index:11,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INVALID_STREAM_STRUCTURE_VERSION: {_hx_name:"INVALID_STREAM_STRUCTURE_VERSION",_hx_index:12,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,CONTINUED_PACKET_FLAG_INVALID: {_hx_name:"CONTINUED_PACKET_FLAG_INVALID",_hx_index:13,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INCORRECT_STREAM_SERIAL_NUMBER: {_hx_name:"INCORRECT_STREAM_SERIAL_NUMBER",_hx_index:14,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,INVALID_FIRST_PAGE: {_hx_name:"INVALID_FIRST_PAGE",_hx_index:15,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,BAD_PACKET_TYPE: {_hx_name:"BAD_PACKET_TYPE",_hx_index:16,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,CANT_FIND_LAST_PAGE: {_hx_name:"CANT_FIND_LAST_PAGE",_hx_index:17,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,SEEK_FAILED: {_hx_name:"SEEK_FAILED",_hx_index:18,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
	,OTHER: {_hx_name:"OTHER",_hx_index:19,__enum__:"kha.audio2.ogg.vorbis.data.ReaderErrorType",toString:$estr}
};
kha_audio2_ogg_vorbis_data_ReaderErrorType.__constructs__ = [kha_audio2_ogg_vorbis_data_ReaderErrorType.NEED_MORE_DATA,kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_API_MIXING,kha_audio2_ogg_vorbis_data_ReaderErrorType.OUTOFMEM,kha_audio2_ogg_vorbis_data_ReaderErrorType.FEATURE_NOT_SUPPORTED,kha_audio2_ogg_vorbis_data_ReaderErrorType.TOO_MANY_CHANNELS,kha_audio2_ogg_vorbis_data_ReaderErrorType.FILE_OPEN_FAILURE,kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_WITHOUT_LENGTH,kha_audio2_ogg_vorbis_data_ReaderErrorType.UNEXPECTED_EOF,kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_INVALID,kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM,kha_audio2_ogg_vorbis_data_ReaderErrorType.MISSING_CAPTURE_PATTERN,kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_STREAM_STRUCTURE_VERSION,kha_audio2_ogg_vorbis_data_ReaderErrorType.CONTINUED_PACKET_FLAG_INVALID,kha_audio2_ogg_vorbis_data_ReaderErrorType.INCORRECT_STREAM_SERIAL_NUMBER,kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_FIRST_PAGE,kha_audio2_ogg_vorbis_data_ReaderErrorType.BAD_PACKET_TYPE,kha_audio2_ogg_vorbis_data_ReaderErrorType.CANT_FIND_LAST_PAGE,kha_audio2_ogg_vorbis_data_ReaderErrorType.SEEK_FAILED,kha_audio2_ogg_vorbis_data_ReaderErrorType.OTHER];
var kha_audio2_ogg_vorbis_data_Residue = function() {
};
$hxClasses["kha.audio2.ogg.vorbis.data.Residue"] = kha_audio2_ogg_vorbis_data_Residue;
kha_audio2_ogg_vorbis_data_Residue.__name__ = true;
kha_audio2_ogg_vorbis_data_Residue.read = function(decodeState,codebooks) {
	var r = new kha_audio2_ogg_vorbis_data_Residue();
	r.type = decodeState.readBits(16);
	if(r.type > 2) {
		throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Residue.hx", lineNumber : 29, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
	}
	var this1 = new Array(64);
	var residueCascade = this1;
	r.begin = decodeState.readBits(24);
	r.end = decodeState.readBits(24);
	r.partSize = decodeState.readBits(24) + 1;
	var classifications = r.classifications = decodeState.readBits(6) + 1;
	r.classbook = decodeState.readBits(8);
	var _g = 0;
	var _g1 = r.classifications;
	while(_g < _g1) {
		var j = _g++;
		var highBits = 0;
		var lowBits = decodeState.readBits(3);
		if(decodeState.readBits(1) != 0) {
			highBits = decodeState.readBits(5);
		}
		residueCascade[j] = highBits * 8 + lowBits;
	}
	var this1 = new Array(r.classifications);
	r.residueBooks = this1;
	var _g = 0;
	var _g1 = r.classifications;
	while(_g < _g1) {
		var j = _g++;
		var this1 = r.residueBooks;
		var this2 = new Array(8);
		this1[j] = this2;
		var _g2 = 0;
		while(_g2 < 8) {
			var k = _g2++;
			if((residueCascade[j] & 1 << k) != 0) {
				r.residueBooks[j][k] = decodeState.readBits(8);
				if(r.residueBooks[j][k] >= codebooks.length) {
					throw haxe_Exception.thrown(new kha_audio2_ogg_vorbis_data_ReaderError(kha_audio2_ogg_vorbis_data_ReaderErrorType.INVALID_SETUP,null,{ fileName : "kha/audio2/ogg/vorbis/data/Residue.hx", lineNumber : 55, className : "kha.audio2.ogg.vorbis.data.Residue", methodName : "read"}));
				}
			} else {
				r.residueBooks[j][k] = -1;
			}
		}
	}
	var el = codebooks[r.classbook].entries;
	var classwords = codebooks[r.classbook].dimensions;
	var this1 = new Array(el);
	r.classdata = this1;
	var _g = 0;
	var _g1 = el;
	while(_g < _g1) {
		var j = _g++;
		var temp = j;
		var k = classwords;
		var this1 = r.classdata;
		var this2 = new Array(classwords);
		var cd = this1[j] = this2;
		while(--k >= 0) {
			cd[k] = temp % classifications;
			temp = temp / classifications | 0;
		}
	}
	return r;
};
kha_audio2_ogg_vorbis_data_Residue.prototype = {
	decode: function(decodeState,header,residueBuffers,ch,n,doNotDecode,channelBuffers) {
		var codebooks = header.codebooks;
		var classwords = codebooks[this.classbook].dimensions;
		var nRead = this.end - this.begin;
		var partSize = this.partSize;
		var partRead = UInt.toFloat(nRead) / UInt.toFloat(partSize) | 0;
		var this1 = new Array(header.channel * partRead + 1);
		var classifications = this1;
		var _g = 0;
		var _g1 = ch;
		while(_g < _g1) {
			var i = _g++;
			if(!doNotDecode[i]) {
				var buffer = residueBuffers[i];
				var _g2 = 0;
				var _g3 = buffer.length;
				while(_g2 < _g3) {
					var j = _g2++;
					buffer[j] = 0;
				}
			}
		}
		if(this.type == 2 && ch != 1) {
			var _g = 0;
			var _g1 = ch;
			while(_g < _g1) {
				var j = _g++;
				if(!doNotDecode[j]) {
					break;
				} else if(j == ch - 1) {
					return;
				}
			}
			var _g = 0;
			while(_g < 8) {
				var pass = _g++;
				var pcount = 0;
				var classSet = 0;
				if(ch == 2) {
					while(pcount < partRead) {
						var z = this.begin + pcount * partSize;
						var cInter = z & 1;
						var pInter = z >>> 1;
						if(pass == 0) {
							var c = codebooks[this.classbook];
							if(decodeState.validBits < 10) {
								decodeState.prepHuffman();
							}
							var i = c.fastHuffman[decodeState.acc & 1023];
							var val;
							if(i >= 0) {
								var l = c.codewordLengths[i];
								decodeState.acc = decodeState.acc >>> l;
								decodeState.validBits -= l;
								if(decodeState.validBits < 0) {
									decodeState.validBits = 0;
									val = -1;
								} else {
									val = i;
								}
							} else {
								val = decodeState.decodeScalarRaw(c);
							}
							if(c.sparse) {
								val = c.sortedValues[val];
							}
							var q = val;
							if(q == -1) {
								return;
							}
							var i1 = classwords;
							while(--i1 >= 0) {
								classifications[i1 + pcount] = q % this.classifications;
								q = q / this.classifications | 0;
							}
						}
						var _g1 = 0;
						var _g2 = classwords;
						while(_g1 < _g2) {
							var i2 = _g1++;
							if(pcount >= partRead) {
								break;
							}
							var z1 = this.begin + pcount * partSize;
							var c1 = classifications[pcount];
							var b = this.residueBooks[c1][pass];
							if(b >= 0) {
								var book = codebooks[b];
								var result = book.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter,pInter,n,partSize);
								if(result == null) {
									return;
								} else {
									cInter = result.cInter;
									pInter = result.pInter;
								}
							} else {
								z1 = z1 + partSize;
								cInter = z1 & 1;
								pInter = z1 >>> 1;
							}
							++pcount;
						}
					}
				} else if(ch == 1) {
					while(pcount < partRead) {
						var z2 = this.begin + pcount * partSize;
						var cInter1 = 0;
						var pInter1 = z2;
						if(pass == 0) {
							var c2 = codebooks[this.classbook];
							if(decodeState.validBits < 10) {
								decodeState.prepHuffman();
							}
							var i3 = c2.fastHuffman[decodeState.acc & 1023];
							var val1;
							if(i3 >= 0) {
								var l1 = c2.codewordLengths[i3];
								decodeState.acc = decodeState.acc >>> l1;
								decodeState.validBits -= l1;
								if(decodeState.validBits < 0) {
									decodeState.validBits = 0;
									val1 = -1;
								} else {
									val1 = i3;
								}
							} else {
								val1 = decodeState.decodeScalarRaw(c2);
							}
							if(c2.sparse) {
								val1 = c2.sortedValues[val1];
							}
							var q1 = val1;
							if(q1 == -1) {
								return;
							}
							var i4 = classwords;
							while(--i4 >= 0) {
								classifications[i4 + pcount] = q1 % this.classifications;
								q1 = q1 / this.classifications | 0;
							}
						}
						var _g3 = 0;
						var _g4 = classwords;
						while(_g3 < _g4) {
							var i5 = _g3++;
							if(pcount >= partRead) {
								break;
							}
							var z3 = this.begin + pcount * partSize;
							var b1 = this.residueBooks[classifications[pcount]][pass];
							if(b1 >= 0) {
								var book1 = codebooks[b1];
								var result1 = book1.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter1,pInter1,n,partSize);
								if(result1 == null) {
									return;
								} else {
									cInter1 = result1.cInter;
									pInter1 = result1.pInter;
								}
							} else {
								z3 = z3 + partSize;
								cInter1 = 0;
								pInter1 = z3;
							}
							++pcount;
						}
					}
				} else {
					while(pcount < partRead) {
						var z4 = this.begin + pcount * partSize;
						var cInter2 = UInt.toFloat(z4) % UInt.toFloat(ch) | 0;
						var pInter2 = UInt.toFloat(z4) / UInt.toFloat(ch) | 0;
						if(pass == 0) {
							var c3 = codebooks[this.classbook];
							if(decodeState.validBits < 10) {
								decodeState.prepHuffman();
							}
							var i6 = c3.fastHuffman[decodeState.acc & 1023];
							var val2;
							if(i6 >= 0) {
								var l2 = c3.codewordLengths[i6];
								decodeState.acc = decodeState.acc >>> l2;
								decodeState.validBits -= l2;
								if(decodeState.validBits < 0) {
									decodeState.validBits = 0;
									val2 = -1;
								} else {
									val2 = i6;
								}
							} else {
								val2 = decodeState.decodeScalarRaw(c3);
							}
							if(c3.sparse) {
								val2 = c3.sortedValues[val2];
							}
							var q2 = val2;
							if(q2 == -1) {
								return;
							}
							var i7 = classwords;
							while(--i7 >= 0) {
								classifications[i7 + pcount] = q2 % this.classifications;
								q2 = q2 / this.classifications | 0;
							}
						}
						var _g5 = 0;
						var _g6 = classwords;
						while(_g5 < _g6) {
							var i8 = _g5++;
							if(pcount >= partRead) {
								break;
							}
							var z5 = this.begin + pcount * partSize;
							var b2 = this.residueBooks[classifications[pcount]][pass];
							if(b2 >= 0) {
								var book2 = codebooks[b2];
								var result2 = book2.decodeDeinterleaveRepeat(decodeState,residueBuffers,ch,cInter2,pInter2,n,partSize);
								if(result2 == null) {
									return;
								} else {
									cInter2 = result2.cInter;
									pInter2 = result2.pInter;
								}
							} else {
								z5 = z5 + partSize;
								cInter2 = UInt.toFloat(z5) % UInt.toFloat(ch) | 0;
								pInter2 = UInt.toFloat(z5) / UInt.toFloat(ch) | 0;
							}
							++pcount;
						}
					}
				}
			}
			return;
		}
		var _g = 0;
		while(_g < 8) {
			var pass = _g++;
			var pcount = 0;
			var classSet = 0;
			while(pcount < partRead) {
				if(pass == 0) {
					var _g1 = 0;
					var _g2 = ch;
					while(_g1 < _g2) {
						var j = _g1++;
						if(!doNotDecode[j]) {
							var c = codebooks[this.classbook];
							if(decodeState.validBits < 10) {
								decodeState.prepHuffman();
							}
							var i = c.fastHuffman[decodeState.acc & 1023];
							var val;
							if(i >= 0) {
								var l = c.codewordLengths[i];
								decodeState.acc = decodeState.acc >>> l;
								decodeState.validBits -= l;
								if(decodeState.validBits < 0) {
									decodeState.validBits = 0;
									val = -1;
								} else {
									val = i;
								}
							} else {
								val = decodeState.decodeScalarRaw(c);
							}
							if(c.sparse) {
								val = c.sortedValues[val];
							}
							var temp = val;
							if(temp == -1) {
								return;
							}
							var i1 = classwords;
							while(--i1 >= 0) {
								classifications[j * partRead + i1 + pcount] = temp % this.classifications;
								temp = temp / this.classifications | 0;
							}
						}
					}
				}
				var _g3 = 0;
				var _g4 = classwords;
				while(_g3 < _g4) {
					var i2 = _g3++;
					if(pcount >= partRead) {
						break;
					}
					var _g5 = 0;
					var _g6 = ch;
					while(_g5 < _g6) {
						var j1 = _g5++;
						if(!doNotDecode[j1]) {
							var c1 = classifications[j1 * partRead + pcount];
							var b = this.residueBooks[c1][pass];
							if(b >= 0) {
								var target = residueBuffers[j1];
								var offset = this.begin + pcount * partSize;
								var n = partSize;
								var book = codebooks[b];
								if(!book.residueDecode(decodeState,target,offset,n,this.type)) {
									return;
								}
							}
						}
					}
					++pcount;
				}
			}
		}
	}
	,__class__: kha_audio2_ogg_vorbis_data_Residue
};
var kha_graphics1_Graphics = function() { };
$hxClasses["kha.graphics1.Graphics"] = kha_graphics1_Graphics;
kha_graphics1_Graphics.__name__ = true;
kha_graphics1_Graphics.__isInterface__ = true;
var kha_graphics2_Graphics = function() {
	this.transformations = [new kha_math_FastMatrix3(1,0,0,0,1,0,0,0,1)];
	this.transformationIndex = 0;
	this.opacities = [1];
	this.myFontSize = 12;
	this.pipe = null;
};
$hxClasses["kha.graphics2.Graphics"] = kha_graphics2_Graphics;
kha_graphics2_Graphics.__name__ = true;
kha_graphics2_Graphics.prototype = {
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
	}
	,end: function() {
	}
	,fillRect: function(x,y,width,height) {
	}
	,set_color: function(color) {
		return -16777216;
	}
	,get_fontSize: function() {
		return this.myFontSize;
	}
	,get_opacity: function() {
		return this.opacities[this.opacities.length - 1];
	}
	,__class__: kha_graphics2_Graphics
	,__properties__: {get_opacity:"get_opacity",get_fontSize:"get_fontSize",set_color:"set_color"}
};
var kha_graphics2_Graphics1 = function(canvas) {
	this.canvas = canvas;
};
$hxClasses["kha.graphics2.Graphics1"] = kha_graphics2_Graphics1;
kha_graphics2_Graphics1.__name__ = true;
kha_graphics2_Graphics1.__interfaces__ = [kha_graphics1_Graphics];
kha_graphics2_Graphics1.prototype = {
	__class__: kha_graphics2_Graphics1
};
var kha_graphics4_ConstantLocation = function() { };
$hxClasses["kha.graphics4.ConstantLocation"] = kha_graphics4_ConstantLocation;
kha_graphics4_ConstantLocation.__name__ = true;
kha_graphics4_ConstantLocation.__isInterface__ = true;
var kha_graphics4_CubeMap = function(size,format,renderTarget,depthStencilFormat) {
	this.isDepthAttachment = false;
	this.depthTexture = null;
	this.texture = null;
	this.frameBuffer = null;
	this.myWidth = size;
	this.myHeight = size;
	this.format = format;
	this.renderTarget = renderTarget;
	this.depthStencilFormat = depthStencilFormat;
	if(renderTarget) {
		this.createTexture();
	}
};
$hxClasses["kha.graphics4.CubeMap"] = kha_graphics4_CubeMap;
kha_graphics4_CubeMap.__name__ = true;
kha_graphics4_CubeMap.__interfaces__ = [kha_Resource,kha_Canvas];
kha_graphics4_CubeMap.createRenderTarget = function(size,format,depthStencil,contextId) {
	if(contextId == null) {
		contextId = 0;
	}
	if(format == null) {
		format = 0;
	}
	if(depthStencil == null) {
		depthStencil = 0;
	}
	return new kha_graphics4_CubeMap(size,format,true,depthStencil);
};
kha_graphics4_CubeMap.prototype = {
	createTexture: function() {
		if(kha_SystemImpl.gl == null) {
			return;
		}
		this.texture = kha_SystemImpl.gl.createTexture();
		kha_SystemImpl.gl.bindTexture(34067,this.texture);
		kha_SystemImpl.gl.texParameteri(34067,10240,9729);
		kha_SystemImpl.gl.texParameteri(34067,10241,9729);
		kha_SystemImpl.gl.texParameteri(34067,10242,33071);
		kha_SystemImpl.gl.texParameteri(34067,10243,33071);
		if(this.renderTarget) {
			this.frameBuffer = kha_SystemImpl.gl.createFramebuffer();
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			switch(this.format) {
			case 0:
				kha_SystemImpl.gl.texImage2D(34069,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34070,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34071,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34072,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34073,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34074,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				break;
			case 2:
				kha_SystemImpl.gl.texImage2D(34069,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				kha_SystemImpl.gl.texImage2D(34070,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				kha_SystemImpl.gl.texImage2D(34071,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				kha_SystemImpl.gl.texImage2D(34072,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				kha_SystemImpl.gl.texImage2D(34073,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				kha_SystemImpl.gl.texImage2D(34074,0,kha_SystemImpl.gl2 ? 34836 : 6408,this.myWidth,this.myHeight,0,6408,5126,null);
				break;
			case 3:
				kha_SystemImpl.gl.texImage2D(34069,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				kha_SystemImpl.gl.texImage2D(34070,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				kha_SystemImpl.gl.texImage2D(34071,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				kha_SystemImpl.gl.texImage2D(34072,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				kha_SystemImpl.gl.texImage2D(34073,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				kha_SystemImpl.gl.texImage2D(34074,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
				break;
			case 4:
				kha_SystemImpl.gl.texImage2D(34069,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34070,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34071,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34072,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34073,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34074,0,kha_SystemImpl.gl2 ? 34842 : 6408,this.myWidth,this.myHeight,0,6408,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				break;
			case 5:
				kha_SystemImpl.gl.texImage2D(34069,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				kha_SystemImpl.gl.texImage2D(34070,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				kha_SystemImpl.gl.texImage2D(34071,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				kha_SystemImpl.gl.texImage2D(34072,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				kha_SystemImpl.gl.texImage2D(34073,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				kha_SystemImpl.gl.texImage2D(34074,0,kha_SystemImpl.gl2 ? 33326 : 6406,this.myWidth,this.myHeight,0,6406,5126,null);
				break;
			case 6:
				kha_SystemImpl.gl.texImage2D(34069,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34070,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34071,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34072,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34073,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				kha_SystemImpl.gl.texImage2D(34074,0,kha_SystemImpl.gl2 ? 33325 : 6406,this.myWidth,this.myHeight,0,6406,kha_SystemImpl.halfFloat.HALF_FLOAT_OES,null);
				break;
			default:
				kha_SystemImpl.gl.texImage2D(34069,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34070,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34071,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34072,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34073,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
				kha_SystemImpl.gl.texImage2D(34074,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
			}
			if(this.format == 3) {
				kha_SystemImpl.gl.texParameteri(34067,10240,9728);
				kha_SystemImpl.gl.texParameteri(34067,10241,9728);
				this.isDepthAttachment = true;
				if(!kha_SystemImpl.gl2) {
					var colortex = kha_SystemImpl.gl.createTexture();
					kha_SystemImpl.gl.bindTexture(34067,colortex);
					kha_SystemImpl.gl.texImage2D(34069,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34069,colortex,0);
					kha_SystemImpl.gl.texImage2D(34070,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34070,colortex,0);
					kha_SystemImpl.gl.texImage2D(34071,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34071,colortex,0);
					kha_SystemImpl.gl.texImage2D(34072,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34072,colortex,0);
					kha_SystemImpl.gl.texImage2D(34073,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34073,colortex,0);
					kha_SystemImpl.gl.texImage2D(34074,0,6408,this.myWidth,this.myHeight,0,6408,5121,null);
					kha_SystemImpl.gl.framebufferTexture2D(36160,36064,34074,colortex,0);
					kha_SystemImpl.gl.bindTexture(34067,this.texture);
				}
			}
			this.initDepthStencilBuffer(this.depthStencilFormat);
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
		}
		kha_SystemImpl.gl.bindTexture(34067,null);
	}
	,initDepthStencilBuffer: function(depthStencilFormat) {
		switch(depthStencilFormat) {
		case 0:
			break;
		case 1:case 5:
			this.depthTexture = kha_SystemImpl.gl.createTexture();
			kha_SystemImpl.gl.bindTexture(34067,this.depthTexture);
			if(depthStencilFormat == 1) {
				kha_SystemImpl.gl.texImage2D(34067,0,kha_SystemImpl.gl2 ? 33190 : 6402,this.myWidth,this.myHeight,0,6402,5125,null);
			} else {
				kha_SystemImpl.gl.texImage2D(34067,0,kha_SystemImpl.gl2 ? 33189 : 6402,this.myWidth,this.myHeight,0,6402,5123,null);
			}
			kha_SystemImpl.gl.texParameteri(34067,10240,9728);
			kha_SystemImpl.gl.texParameteri(34067,10241,9728);
			kha_SystemImpl.gl.texParameteri(34067,10242,33071);
			kha_SystemImpl.gl.texParameteri(34067,10243,33071);
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			kha_SystemImpl.gl.framebufferTexture2D(36160,36096,34067,this.depthTexture,0);
			break;
		case 2:case 3:case 4:
			this.depthTexture = kha_SystemImpl.gl.createTexture();
			kha_SystemImpl.gl.bindTexture(34067,this.depthTexture);
			kha_SystemImpl.gl.texImage2D(34067,0,kha_SystemImpl.gl2 ? 35056 : 34041,this.myWidth,this.myHeight,0,34041,kha_SystemImpl.depthTexture.UNSIGNED_INT_24_8_WEBGL,null);
			kha_SystemImpl.gl.texParameteri(34067,10240,9728);
			kha_SystemImpl.gl.texParameteri(34067,10241,9728);
			kha_SystemImpl.gl.texParameteri(34067,10242,33071);
			kha_SystemImpl.gl.texParameteri(34067,10243,33071);
			kha_SystemImpl.gl.bindFramebuffer(36160,this.frameBuffer);
			kha_SystemImpl.gl.framebufferTexture2D(36160,33306,34067,this.depthTexture,0);
			break;
		}
	}
	,set: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(34067,this.texture);
	}
	,setDepth: function(stage) {
		kha_SystemImpl.gl.activeTexture(33984 + stage);
		kha_SystemImpl.gl.bindTexture(34067,this.depthTexture);
	}
	,get_width: function() {
		return this.myWidth;
	}
	,get_height: function() {
		return this.myHeight;
	}
	,get_g4: function() {
		if(this.graphics4 == null) {
			this.graphics4 = new kha_js_graphics4_Graphics(this);
		}
		return this.graphics4;
	}
	,__class__: kha_graphics4_CubeMap
	,__properties__: {get_g4:"get_g4",get_height:"get_height",get_width:"get_width"}
};
var kha_graphics4_FragmentShader = function(sources,files) {
	this.sources = [];
	var _g = 0;
	while(_g < sources.length) {
		var source = sources[_g];
		++_g;
		this.sources.push(source.toString());
	}
	this.type = 35632;
	this.shader = null;
	this.files = files;
};
$hxClasses["kha.graphics4.FragmentShader"] = kha_graphics4_FragmentShader;
kha_graphics4_FragmentShader.__name__ = true;
kha_graphics4_FragmentShader.fromSource = function(source) {
	var shader = new kha_graphics4_FragmentShader([],["runtime-string"]);
	shader.sources.push(source);
	return shader;
};
kha_graphics4_FragmentShader.prototype = {
	__class__: kha_graphics4_FragmentShader
};
var kha_graphics4_GeometryShader = function() { };
$hxClasses["kha.graphics4.GeometryShader"] = kha_graphics4_GeometryShader;
kha_graphics4_GeometryShader.__name__ = true;
var kha_graphics4_Graphics = function() { };
$hxClasses["kha.graphics4.Graphics"] = kha_graphics4_Graphics;
kha_graphics4_Graphics.__name__ = true;
kha_graphics4_Graphics.__isInterface__ = true;
kha_graphics4_Graphics.prototype = {
	__class__: kha_graphics4_Graphics
};
var kha_graphics4_InternalPipeline = function(pipeline,projectionLocation,textureLocation) {
	this.pipeline = pipeline;
	this.projectionLocation = projectionLocation;
	this.textureLocation = textureLocation;
};
$hxClasses["kha.graphics4.InternalPipeline"] = kha_graphics4_InternalPipeline;
kha_graphics4_InternalPipeline.__name__ = true;
kha_graphics4_InternalPipeline.prototype = {
	__class__: kha_graphics4_InternalPipeline
};
var kha_graphics4_PipelineCache = function() { };
$hxClasses["kha.graphics4.PipelineCache"] = kha_graphics4_PipelineCache;
kha_graphics4_PipelineCache.__name__ = true;
kha_graphics4_PipelineCache.__isInterface__ = true;
kha_graphics4_PipelineCache.prototype = {
	__class__: kha_graphics4_PipelineCache
};
var kha_graphics4_PerFramebufferPipelineCache = function(pipeline,texture) {
	this.pipelines = [];
	pipeline.compile();
	var projectionLocation = null;
	try {
		projectionLocation = pipeline.getConstantLocation("projectionMatrix");
	} catch( _g ) {
		var x = haxe_Exception.caught(_g).unwrap();
		haxe_Log.trace(x,{ fileName : "kha/graphics4/Graphics2.hx", lineNumber : 90, className : "kha.graphics4.PerFramebufferPipelineCache", methodName : "new"});
	}
	var textureLocation = null;
	if(texture) {
		try {
			textureLocation = pipeline.getTextureUnit("tex");
		} catch( _g ) {
			var x = haxe_Exception.caught(_g).unwrap();
			haxe_Log.trace(x,{ fileName : "kha/graphics4/Graphics2.hx", lineNumber : 99, className : "kha.graphics4.PerFramebufferPipelineCache", methodName : "new"});
		}
	}
	this.pipelines.push(new kha_graphics4_InternalPipeline(pipeline,projectionLocation,textureLocation));
};
$hxClasses["kha.graphics4.PerFramebufferPipelineCache"] = kha_graphics4_PerFramebufferPipelineCache;
kha_graphics4_PerFramebufferPipelineCache.__name__ = true;
kha_graphics4_PerFramebufferPipelineCache.__interfaces__ = [kha_graphics4_PipelineCache];
kha_graphics4_PerFramebufferPipelineCache.prototype = {
	get: function(colorFormats,depthStencilFormat) {
		return this.pipelines[this.hash(colorFormats,depthStencilFormat)];
	}
	,hash: function(colorFormats,depthStencilFormat) {
		return 0;
	}
	,__class__: kha_graphics4_PerFramebufferPipelineCache
};
var kha_graphics4_ImageShaderPainter = function(g4) {
	this.myPipeline = null;
	this.bilinearMipmaps = false;
	this.bilinear = false;
	this.g = g4;
	kha_graphics4_ImageShaderPainter.bufferStart = 0;
	kha_graphics4_ImageShaderPainter.bufferIndex = 0;
	kha_graphics4_ImageShaderPainter.initShaders();
	this.myPipeline = kha_graphics4_ImageShaderPainter.standardImagePipeline;
	this.initBuffers();
};
$hxClasses["kha.graphics4.ImageShaderPainter"] = kha_graphics4_ImageShaderPainter;
kha_graphics4_ImageShaderPainter.__name__ = true;
kha_graphics4_ImageShaderPainter.initShaders = function() {
	if(kha_graphics4_ImageShaderPainter.structure == null) {
		kha_graphics4_ImageShaderPainter.structure = kha_graphics4_Graphics2.createImageVertexStructure();
	}
	if(kha_graphics4_ImageShaderPainter.standardImagePipeline == null) {
		var pipeline = kha_graphics4_Graphics2.createImagePipeline(kha_graphics4_ImageShaderPainter.structure);
		kha_graphics4_ImageShaderPainter.standardImagePipeline = new kha_graphics4_PerFramebufferPipelineCache(pipeline,true);
	}
};
kha_graphics4_ImageShaderPainter.prototype = {
	setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		if(kha_graphics4_ImageShaderPainter.rectVertexBuffer == null) {
			kha_graphics4_ImageShaderPainter.rectVertexBuffer = new kha_graphics4_VertexBuffer(6000,kha_graphics4_ImageShaderPainter.structure,1);
			kha_graphics4_ImageShaderPainter.rectVertices = kha_graphics4_ImageShaderPainter.rectVertexBuffer.lock();
			kha_graphics4_ImageShaderPainter.indexBuffer = new kha_graphics4_IndexBuffer(9000,0);
			var indices = kha_graphics4_ImageShaderPainter.indexBuffer.lock();
			var _g = 0;
			while(_g < 1500) {
				var i = _g++;
				var k = i * 3 * 2;
				indices.setUint32(k * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = k * 4;
				var k1 = i * 3 * 2 + 1;
				indices.setUint32(k1 * 4,i * 4 + 1,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp1 = k1 * 4;
				var k2 = i * 3 * 2 + 2;
				indices.setUint32(k2 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp2 = k2 * 4;
				var k3 = i * 3 * 2 + 3;
				indices.setUint32(k3 * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp3 = k3 * 4;
				var k4 = i * 3 * 2 + 4;
				indices.setUint32(k4 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp4 = k4 * 4;
				var k5 = i * 3 * 2 + 5;
				indices.setUint32(k5 * 4,i * 4 + 3,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp5 = k5 * 4;
			}
			kha_graphics4_ImageShaderPainter.indexBuffer.unlock();
		}
	}
	,drawBuffer: function(end) {
		if(kha_graphics4_ImageShaderPainter.bufferIndex - kha_graphics4_ImageShaderPainter.bufferStart == 0) {
			return;
		}
		kha_graphics4_ImageShaderPainter.rectVertexBuffer.unlock((kha_graphics4_ImageShaderPainter.bufferIndex - kha_graphics4_ImageShaderPainter.bufferStart) * 4);
		var pipeline = this.myPipeline.get(null,3);
		this.g.setPipeline(pipeline.pipeline);
		this.g.setVertexBuffer(kha_graphics4_ImageShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(kha_graphics4_ImageShaderPainter.indexBuffer);
		this.g.setTexture(pipeline.textureLocation,kha_graphics4_ImageShaderPainter.lastTexture);
		this.g.setTextureParameters(pipeline.textureLocation,2,2,this.bilinear ? 1 : 0,this.bilinear ? 1 : 0,this.bilinearMipmaps ? 2 : 0);
		this.g.setMatrix(pipeline.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(kha_graphics4_ImageShaderPainter.bufferStart * 2 * 3,(kha_graphics4_ImageShaderPainter.bufferIndex - kha_graphics4_ImageShaderPainter.bufferStart) * 2 * 3);
		this.g.setTexture(pipeline.textureLocation,null);
		if(end || (kha_graphics4_ImageShaderPainter.bufferStart + kha_graphics4_ImageShaderPainter.bufferIndex + 1) * 4 >= 1500) {
			kha_graphics4_ImageShaderPainter.bufferStart = 0;
			kha_graphics4_ImageShaderPainter.bufferIndex = 0;
			kha_graphics4_ImageShaderPainter.rectVertices = kha_graphics4_ImageShaderPainter.rectVertexBuffer.lock(0);
		} else {
			kha_graphics4_ImageShaderPainter.bufferStart = kha_graphics4_ImageShaderPainter.bufferIndex;
			kha_graphics4_ImageShaderPainter.rectVertices = kha_graphics4_ImageShaderPainter.rectVertexBuffer.lock(kha_graphics4_ImageShaderPainter.bufferStart * 4);
		}
	}
	,end: function() {
		if(kha_graphics4_ImageShaderPainter.bufferIndex > 0) {
			this.drawBuffer(true);
		}
		kha_graphics4_ImageShaderPainter.lastTexture = null;
	}
	,__class__: kha_graphics4_ImageShaderPainter
};
var kha_graphics4_ColoredShaderPainter = function(g4) {
	this.myPipeline = null;
	this.g = g4;
	kha_graphics4_ColoredShaderPainter.bufferIndex = 0;
	kha_graphics4_ColoredShaderPainter.triangleBufferIndex = 0;
	kha_graphics4_ColoredShaderPainter.initShaders();
	this.myPipeline = kha_graphics4_ColoredShaderPainter.standardColorPipeline;
	this.initBuffers();
};
$hxClasses["kha.graphics4.ColoredShaderPainter"] = kha_graphics4_ColoredShaderPainter;
kha_graphics4_ColoredShaderPainter.__name__ = true;
kha_graphics4_ColoredShaderPainter.initShaders = function() {
	if(kha_graphics4_ColoredShaderPainter.structure == null) {
		kha_graphics4_ColoredShaderPainter.structure = kha_graphics4_Graphics2.createColoredVertexStructure();
	}
	if(kha_graphics4_ColoredShaderPainter.standardColorPipeline == null) {
		var pipeline = kha_graphics4_Graphics2.createColoredPipeline(kha_graphics4_ColoredShaderPainter.structure);
		kha_graphics4_ColoredShaderPainter.standardColorPipeline = new kha_graphics4_PerFramebufferPipelineCache(pipeline,false);
	}
};
kha_graphics4_ColoredShaderPainter.prototype = {
	setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		if(kha_graphics4_ColoredShaderPainter.rectVertexBuffer == null) {
			kha_graphics4_ColoredShaderPainter.rectVertexBuffer = new kha_graphics4_VertexBuffer(4000,kha_graphics4_ColoredShaderPainter.structure,1);
			kha_graphics4_ColoredShaderPainter.rectVertices = kha_graphics4_ColoredShaderPainter.rectVertexBuffer.lock();
			kha_graphics4_ColoredShaderPainter.indexBuffer = new kha_graphics4_IndexBuffer(6000,0);
			var indices = kha_graphics4_ColoredShaderPainter.indexBuffer.lock();
			var _g = 0;
			while(_g < 1000) {
				var i = _g++;
				var k = i * 3 * 2;
				indices.setUint32(k * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = k * 4;
				var k1 = i * 3 * 2 + 1;
				indices.setUint32(k1 * 4,i * 4 + 1,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp1 = k1 * 4;
				var k2 = i * 3 * 2 + 2;
				indices.setUint32(k2 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp2 = k2 * 4;
				var k3 = i * 3 * 2 + 3;
				indices.setUint32(k3 * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp3 = k3 * 4;
				var k4 = i * 3 * 2 + 4;
				indices.setUint32(k4 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp4 = k4 * 4;
				var k5 = i * 3 * 2 + 5;
				indices.setUint32(k5 * 4,i * 4 + 3,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp5 = k5 * 4;
			}
			kha_graphics4_ColoredShaderPainter.indexBuffer.unlock();
			kha_graphics4_ColoredShaderPainter.triangleVertexBuffer = new kha_graphics4_VertexBuffer(3000,kha_graphics4_ColoredShaderPainter.structure,1);
			kha_graphics4_ColoredShaderPainter.triangleVertices = kha_graphics4_ColoredShaderPainter.triangleVertexBuffer.lock();
			kha_graphics4_ColoredShaderPainter.triangleIndexBuffer = new kha_graphics4_IndexBuffer(3000,0);
			var triIndices = kha_graphics4_ColoredShaderPainter.triangleIndexBuffer.lock();
			var _g = 0;
			while(_g < 1000) {
				var i = _g++;
				var k = i * 3;
				triIndices.setUint32(k * 4,i * 3,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = k * 4;
				var k1 = i * 3 + 1;
				triIndices.setUint32(k1 * 4,i * 3 + 1,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp1 = k1 * 4;
				var k2 = i * 3 + 2;
				triIndices.setUint32(k2 * 4,i * 3 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp2 = k2 * 4;
			}
			kha_graphics4_ColoredShaderPainter.triangleIndexBuffer.unlock();
		}
	}
	,setRectVertices: function(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		var baseIndex = kha_graphics4_ColoredShaderPainter.bufferIndex * 4 * 4;
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32(baseIndex * 4,bottomleftx,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 1) * 4,bottomlefty,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 2) * 4,-5.0,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 4) * 4,topleftx,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 5) * 4,toplefty,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 6) * 4,-5.0,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 8) * 4,toprightx,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 9) * 4,toprighty,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 10) * 4,-5.0,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 12) * 4,bottomrightx,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 13) * 4,bottomrighty,true);
		kha_graphics4_ColoredShaderPainter.rectVertices.setFloat32((baseIndex + 14) * 4,-5.0,true);
	}
	,setRectColors: function(opacity,color) {
		var baseIndex = kha_graphics4_ColoredShaderPainter.bufferIndex * 4 * 4 * 4;
		var a = opacity * ((color >>> 24) * 0.00392156862745098);
		var r = a * (((color & 16711680) >>> 16) * 0.00392156862745098);
		var g = a * (((color & 65280) >>> 8) * 0.00392156862745098);
		var b = a * ((color & 255) * 0.00392156862745098);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 12,r * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 12 + 1,g * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 12 + 2,b * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 12 + 3,a * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 28,r * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 28 + 1,g * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 28 + 2,b * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 28 + 3,a * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 44,r * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 44 + 1,g * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 44 + 2,b * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 44 + 3,a * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 60,r * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 60 + 1,g * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 60 + 2,b * 255 | 0);
		kha_graphics4_ColoredShaderPainter.rectVertices.setUint8(baseIndex + 60 + 3,a * 255 | 0);
	}
	,drawBuffer: function(trisDone) {
		if(kha_graphics4_ColoredShaderPainter.bufferIndex == 0) {
			return;
		}
		if(!trisDone) {
			if(kha_graphics4_ColoredShaderPainter.triangleBufferIndex > 0) {
				this.drawTriBuffer(true);
			}
		}
		kha_graphics4_ColoredShaderPainter.rectVertexBuffer.unlock(kha_graphics4_ColoredShaderPainter.bufferIndex * 4);
		var pipeline = this.myPipeline.get(null,3);
		this.g.setPipeline(pipeline.pipeline);
		this.g.setVertexBuffer(kha_graphics4_ColoredShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(kha_graphics4_ColoredShaderPainter.indexBuffer);
		this.g.setMatrix(pipeline.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,kha_graphics4_ColoredShaderPainter.bufferIndex * 2 * 3);
		kha_graphics4_ColoredShaderPainter.bufferIndex = 0;
		kha_graphics4_ColoredShaderPainter.rectVertices = kha_graphics4_ColoredShaderPainter.rectVertexBuffer.lock();
	}
	,drawTriBuffer: function(rectsDone) {
		if(!rectsDone) {
			if(kha_graphics4_ColoredShaderPainter.bufferIndex > 0) {
				this.drawBuffer(true);
			}
		}
		kha_graphics4_ColoredShaderPainter.triangleVertexBuffer.unlock(kha_graphics4_ColoredShaderPainter.triangleBufferIndex * 3);
		var pipeline = this.myPipeline.get(null,3);
		this.g.setPipeline(pipeline.pipeline);
		this.g.setVertexBuffer(kha_graphics4_ColoredShaderPainter.triangleVertexBuffer);
		this.g.setIndexBuffer(kha_graphics4_ColoredShaderPainter.triangleIndexBuffer);
		this.g.setMatrix(pipeline.projectionLocation,this.projectionMatrix);
		this.g.drawIndexedVertices(0,kha_graphics4_ColoredShaderPainter.triangleBufferIndex * 3);
		kha_graphics4_ColoredShaderPainter.triangleBufferIndex = 0;
		kha_graphics4_ColoredShaderPainter.triangleVertices = kha_graphics4_ColoredShaderPainter.triangleVertexBuffer.lock();
	}
	,fillRect: function(opacity,color,bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty) {
		if(kha_graphics4_ColoredShaderPainter.triangleBufferIndex > 0) {
			this.drawTriBuffer(true);
		}
		if(kha_graphics4_ColoredShaderPainter.bufferIndex + 1 >= 1000) {
			this.drawBuffer(false);
		}
		this.setRectColors(opacity,color);
		this.setRectVertices(bottomleftx,bottomlefty,topleftx,toplefty,toprightx,toprighty,bottomrightx,bottomrighty);
		++kha_graphics4_ColoredShaderPainter.bufferIndex;
	}
	,__class__: kha_graphics4_ColoredShaderPainter
};
var kha_graphics4_TextShaderPainter = function(g4) {
	this.bilinear = false;
	this.myPipeline = null;
	this.g = g4;
	kha_graphics4_TextShaderPainter.bufferIndex = 0;
	kha_graphics4_TextShaderPainter.initShaders();
	this.myPipeline = kha_graphics4_TextShaderPainter.standardTextPipeline;
	this.initBuffers();
};
$hxClasses["kha.graphics4.TextShaderPainter"] = kha_graphics4_TextShaderPainter;
kha_graphics4_TextShaderPainter.__name__ = true;
kha_graphics4_TextShaderPainter.initShaders = function() {
	if(kha_graphics4_TextShaderPainter.structure == null) {
		kha_graphics4_TextShaderPainter.structure = kha_graphics4_Graphics2.createTextVertexStructure();
	}
	if(kha_graphics4_TextShaderPainter.standardTextPipeline == null) {
		var pipeline = kha_graphics4_Graphics2.createTextPipeline(kha_graphics4_TextShaderPainter.structure);
		kha_graphics4_TextShaderPainter.standardTextPipeline = new kha_graphics4_PerFramebufferPipelineCache(pipeline,true);
	}
};
kha_graphics4_TextShaderPainter.prototype = {
	setProjection: function(projectionMatrix) {
		this.projectionMatrix = projectionMatrix;
	}
	,initBuffers: function() {
		if(kha_graphics4_TextShaderPainter.rectVertexBuffer == null) {
			kha_graphics4_TextShaderPainter.rectVertexBuffer = new kha_graphics4_VertexBuffer(4000,kha_graphics4_TextShaderPainter.structure,1);
			kha_graphics4_TextShaderPainter.rectVertices = kha_graphics4_TextShaderPainter.rectVertexBuffer.lock();
			kha_graphics4_TextShaderPainter.indexBuffer = new kha_graphics4_IndexBuffer(6000,0);
			var indices = kha_graphics4_TextShaderPainter.indexBuffer.lock();
			var _g = 0;
			while(_g < 1000) {
				var i = _g++;
				var k = i * 3 * 2;
				indices.setUint32(k * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp = k * 4;
				var k1 = i * 3 * 2 + 1;
				indices.setUint32(k1 * 4,i * 4 + 1,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp1 = k1 * 4;
				var k2 = i * 3 * 2 + 2;
				indices.setUint32(k2 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp2 = k2 * 4;
				var k3 = i * 3 * 2 + 3;
				indices.setUint32(k3 * 4,i * 4,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp3 = k3 * 4;
				var k4 = i * 3 * 2 + 4;
				indices.setUint32(k4 * 4,i * 4 + 2,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp4 = k4 * 4;
				var k5 = i * 3 * 2 + 5;
				indices.setUint32(k5 * 4,i * 4 + 3,kha_arrays_ByteArray.LITTLE_ENDIAN);
				var tmp5 = k5 * 4;
			}
			kha_graphics4_TextShaderPainter.indexBuffer.unlock();
		}
	}
	,drawBuffer: function() {
		if(kha_graphics4_TextShaderPainter.bufferIndex == 0) {
			return;
		}
		kha_graphics4_TextShaderPainter.rectVertexBuffer.unlock(kha_graphics4_TextShaderPainter.bufferIndex * 4);
		var pipeline = this.myPipeline.get(null,3);
		this.g.setPipeline(pipeline.pipeline);
		this.g.setVertexBuffer(kha_graphics4_TextShaderPainter.rectVertexBuffer);
		this.g.setIndexBuffer(kha_graphics4_TextShaderPainter.indexBuffer);
		this.g.setMatrix(pipeline.projectionLocation,this.projectionMatrix);
		this.g.setTexture(pipeline.textureLocation,kha_graphics4_TextShaderPainter.lastTexture);
		this.g.setTextureParameters(pipeline.textureLocation,2,2,this.bilinear ? 1 : 0,this.bilinear ? 1 : 0,0);
		this.g.drawIndexedVertices(0,kha_graphics4_TextShaderPainter.bufferIndex * 2 * 3);
		this.g.setTexture(pipeline.textureLocation,null);
		kha_graphics4_TextShaderPainter.bufferIndex = 0;
		kha_graphics4_TextShaderPainter.rectVertices = kha_graphics4_TextShaderPainter.rectVertexBuffer.lock();
	}
	,end: function() {
		if(kha_graphics4_TextShaderPainter.bufferIndex > 0) {
			this.drawBuffer();
		}
		kha_graphics4_TextShaderPainter.lastTexture = null;
	}
	,__class__: kha_graphics4_TextShaderPainter
};
var kha_graphics4_Graphics2 = function(canvas) {
	kha_graphics2_Graphics.call(this);
	this.set_color(-1);
	this.canvas = canvas;
	this.g = canvas.get_g4();
	this.imagePainter = new kha_graphics4_ImageShaderPainter(this.g);
	this.coloredPainter = new kha_graphics4_ColoredShaderPainter(this.g);
	this.textPainter = new kha_graphics4_TextShaderPainter(this.g);
	this.textPainter.fontSize = this.get_fontSize();
	this.projectionMatrix = new kha_math_FastMatrix4(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);
	this.setProjection();
	if(kha_graphics4_Graphics2.videoPipeline == null) {
		kha_graphics4_Graphics2.videoPipeline = kha_graphics4_Graphics2.createImagePipeline(kha_graphics4_Graphics2.createImageVertexStructure());
		kha_graphics4_Graphics2.videoPipeline.fragmentShader = kha_Shaders.painter_video_frag;
		kha_graphics4_Graphics2.videoPipeline.vertexShader = kha_Shaders.painter_video_vert;
		kha_graphics4_Graphics2.videoPipeline.compile();
	}
};
$hxClasses["kha.graphics4.Graphics2"] = kha_graphics4_Graphics2;
kha_graphics4_Graphics2.__name__ = true;
kha_graphics4_Graphics2.upperPowerOfTwo = function(v) {
	--v;
	v |= v >>> 1;
	v |= v >>> 2;
	v |= v >>> 4;
	v |= v >>> 8;
	v |= v >>> 16;
	return ++v;
};
kha_graphics4_Graphics2.createImageVertexStructure = function() {
	var structure = new kha_graphics4_VertexStructure();
	structure.add("vertexPosition",2);
	structure.add("vertexUV",1);
	structure.add("vertexColor",16);
	return structure;
};
kha_graphics4_Graphics2.createImagePipeline = function(structure) {
	var shaderPipeline = new kha_graphics4_PipelineState();
	shaderPipeline.fragmentShader = kha_Shaders.painter_image_frag;
	shaderPipeline.vertexShader = kha_Shaders.painter_image_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = 1;
	shaderPipeline.blendDestination = 5;
	shaderPipeline.alphaBlendSource = 1;
	shaderPipeline.alphaBlendDestination = 5;
	return shaderPipeline;
};
kha_graphics4_Graphics2.createColoredVertexStructure = function() {
	var structure = new kha_graphics4_VertexStructure();
	structure.add("vertexPosition",2);
	structure.add("vertexColor",16);
	return structure;
};
kha_graphics4_Graphics2.createColoredPipeline = function(structure) {
	var shaderPipeline = new kha_graphics4_PipelineState();
	shaderPipeline.fragmentShader = kha_Shaders.painter_colored_frag;
	shaderPipeline.vertexShader = kha_Shaders.painter_colored_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = 1;
	shaderPipeline.blendDestination = 5;
	shaderPipeline.alphaBlendSource = 1;
	shaderPipeline.alphaBlendDestination = 5;
	return shaderPipeline;
};
kha_graphics4_Graphics2.createTextVertexStructure = function() {
	var structure = new kha_graphics4_VertexStructure();
	structure.add("vertexPosition",2);
	structure.add("vertexUV",1);
	structure.add("vertexColor",3);
	return structure;
};
kha_graphics4_Graphics2.createTextPipeline = function(structure) {
	var shaderPipeline = new kha_graphics4_PipelineState();
	shaderPipeline.fragmentShader = kha_Shaders.painter_text_frag;
	shaderPipeline.vertexShader = kha_Shaders.painter_text_vert;
	shaderPipeline.inputLayout = [structure];
	shaderPipeline.blendSource = 3;
	shaderPipeline.blendDestination = 5;
	shaderPipeline.alphaBlendSource = 3;
	shaderPipeline.alphaBlendDestination = 5;
	return shaderPipeline;
};
kha_graphics4_Graphics2.__super__ = kha_graphics2_Graphics;
kha_graphics4_Graphics2.prototype = $extend(kha_graphics2_Graphics.prototype,{
	setProjection: function() {
		var width = this.canvas.get_width();
		var height = this.canvas.get_height();
		if(((this.canvas) instanceof kha_Framebuffer)) {
			var _this = this.projectionMatrix;
			var tx = -width / width;
			var ty = -height / (0 - height);
			var tz = -1.00020002000200026;
			var m__00 = 2 / width;
			var m__10 = 0;
			var m__20 = 0;
			var m__30 = tx;
			var m__01 = 0;
			var m__11 = 2.0 / (0 - height);
			var m__21 = 0;
			var m__31 = ty;
			var m__02 = 0;
			var m__12 = 0;
			var m__22 = -0.002000200020002;
			var m__32 = tz;
			var m__03 = 0;
			var m__13 = 0;
			var m__23 = 0;
			var m__33 = 1;
			_this._00 = m__00;
			_this._10 = m__10;
			_this._20 = m__20;
			_this._30 = m__30;
			_this._01 = m__01;
			_this._11 = m__11;
			_this._21 = m__21;
			_this._31 = m__31;
			_this._02 = m__02;
			_this._12 = m__12;
			_this._22 = m__22;
			_this._32 = m__32;
			_this._03 = m__03;
			_this._13 = m__13;
			_this._23 = m__23;
			_this._33 = m__33;
		} else {
			if(!kha_Image.get_nonPow2Supported()) {
				width = kha_graphics4_Graphics2.upperPowerOfTwo(width);
				height = kha_graphics4_Graphics2.upperPowerOfTwo(height);
			}
			if(kha_Image.renderTargetsInvertedY()) {
				var _this = this.projectionMatrix;
				var tx = -width / width;
				var ty = -height / height;
				var tz = -1.00020002000200026;
				var m__00 = 2 / width;
				var m__10 = 0;
				var m__20 = 0;
				var m__30 = tx;
				var m__01 = 0;
				var m__11 = 2.0 / height;
				var m__21 = 0;
				var m__31 = ty;
				var m__02 = 0;
				var m__12 = 0;
				var m__22 = -0.002000200020002;
				var m__32 = tz;
				var m__03 = 0;
				var m__13 = 0;
				var m__23 = 0;
				var m__33 = 1;
				_this._00 = m__00;
				_this._10 = m__10;
				_this._20 = m__20;
				_this._30 = m__30;
				_this._01 = m__01;
				_this._11 = m__11;
				_this._21 = m__21;
				_this._31 = m__31;
				_this._02 = m__02;
				_this._12 = m__12;
				_this._22 = m__22;
				_this._32 = m__32;
				_this._03 = m__03;
				_this._13 = m__13;
				_this._23 = m__23;
				_this._33 = m__33;
			} else {
				var _this = this.projectionMatrix;
				var tx = -width / width;
				var ty = -height / (0 - height);
				var tz = -1.00020002000200026;
				var m__00 = 2 / width;
				var m__10 = 0;
				var m__20 = 0;
				var m__30 = tx;
				var m__01 = 0;
				var m__11 = 2.0 / (0 - height);
				var m__21 = 0;
				var m__31 = ty;
				var m__02 = 0;
				var m__12 = 0;
				var m__22 = -0.002000200020002;
				var m__32 = tz;
				var m__03 = 0;
				var m__13 = 0;
				var m__23 = 0;
				var m__33 = 1;
				_this._00 = m__00;
				_this._10 = m__10;
				_this._20 = m__20;
				_this._30 = m__30;
				_this._01 = m__01;
				_this._11 = m__11;
				_this._21 = m__21;
				_this._31 = m__31;
				_this._02 = m__02;
				_this._12 = m__12;
				_this._22 = m__22;
				_this._32 = m__32;
				_this._03 = m__03;
				_this._13 = m__13;
				_this._23 = m__23;
				_this._33 = m__33;
			}
		}
		this.imagePainter.setProjection(this.projectionMatrix);
		this.coloredPainter.setProjection(this.projectionMatrix);
		this.textPainter.setProjection(this.projectionMatrix);
	}
	,get_color: function() {
		return this.myColor;
	}
	,set_color: function(color) {
		return this.myColor = color;
	}
	,fillRect: function(x,y,width,height) {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.transformations[this.transformationIndex];
		var x1 = x;
		var y1 = y + height;
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var x2 = x1;
		var y2 = y1;
		if(y2 == null) {
			y2 = 0;
		}
		if(x2 == null) {
			x2 = 0;
		}
		var p1_x = x2;
		var p1_y = y2;
		var _this = this.transformations[this.transformationIndex];
		var x1 = x;
		var y1 = y;
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var x2 = x1;
		var y2 = y1;
		if(y2 == null) {
			y2 = 0;
		}
		if(x2 == null) {
			x2 = 0;
		}
		var p2_x = x2;
		var p2_y = y2;
		var _this = this.transformations[this.transformationIndex];
		var x1 = x + width;
		var y1 = y;
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x1 = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y1 = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var x2 = x1;
		var y2 = y1;
		if(y2 == null) {
			y2 = 0;
		}
		if(x2 == null) {
			x2 = 0;
		}
		var p3_x = x2;
		var p3_y = y2;
		var _this = this.transformations[this.transformationIndex];
		var x1 = x + width;
		var y1 = y + height;
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var value_x = x1;
		var value_y = y1;
		var w = _this._02 * value_x + _this._12 * value_y + _this._22;
		var x = (_this._00 * value_x + _this._10 * value_y + _this._20) / w;
		var y = (_this._01 * value_x + _this._11 * value_y + _this._21) / w;
		var x1 = x;
		var y1 = y;
		if(y1 == null) {
			y1 = 0;
		}
		if(x1 == null) {
			x1 = 0;
		}
		var p4_x = x1;
		var p4_y = y1;
		this.coloredPainter.fillRect(this.get_opacity(),this.get_color(),p1_x,p1_y,p2_x,p2_y,p3_x,p3_y,p4_x,p4_y);
	}
	,begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		if(kha_graphics4_Graphics2.current == null) {
			kha_graphics4_Graphics2.current = this;
		} else {
			throw haxe_Exception.thrown("End before you begin");
		}
		this.g.begin();
		if(clear) {
			this.clear(clearColor);
		}
		this.setProjection();
	}
	,clear: function(color) {
		this.flush();
		this.g.clear(color == null ? -16777216 : color);
	}
	,flush: function() {
		this.imagePainter.end();
		this.textPainter.end();
		var _this = this.coloredPainter;
		if(kha_graphics4_ColoredShaderPainter.triangleBufferIndex > 0) {
			_this.drawTriBuffer(false);
		}
		if(kha_graphics4_ColoredShaderPainter.bufferIndex > 0) {
			_this.drawBuffer(false);
		}
	}
	,end: function() {
		this.flush();
		this.g.end();
		if(kha_graphics4_Graphics2.current == this) {
			kha_graphics4_Graphics2.current = null;
		} else {
			throw haxe_Exception.thrown("Begin before you end");
		}
	}
	,__class__: kha_graphics4_Graphics2
});
var kha_graphics4_IndexBuffer = function(indexCount,usage,canRead) {
	if(canRead == null) {
		canRead = false;
	}
	this.lockEnd = 0;
	this.lockStart = 0;
	this.usage = usage;
	this.mySize = indexCount;
	this.buffer = kha_SystemImpl.gl.createBuffer();
	this._data = kha_arrays_Uint32Array._new(indexCount);
};
$hxClasses["kha.graphics4.IndexBuffer"] = kha_graphics4_IndexBuffer;
kha_graphics4_IndexBuffer.__name__ = true;
kha_graphics4_IndexBuffer.prototype = {
	lock: function(start,count) {
		this.lockStart = start != null ? start : 0;
		this.lockEnd = count != null ? start + count : this.mySize;
		var end = this.lockEnd;
		var start = this.lockStart * 4;
		var end1 = end != null ? end * 4 : null;
		return kha_arrays_ByteArray._new(this._data.buffer,start,end1 != null ? end1 - start : null);
	}
	,unlock: function(count) {
		if(count != null) {
			this.lockEnd = this.lockStart + count;
		}
		kha_SystemImpl.gl.bindBuffer(34963,this.buffer);
		var end = this.lockEnd;
		var start = this.lockStart * 4;
		var end1 = end != null ? end * 4 : null;
		var data = kha_arrays_ByteArray._new(this._data.buffer,start,end1 != null ? end1 - start : null);
		var glData = kha_SystemImpl.elementIndexUint == null ? new Uint16Array(data.buffer) : data;
		kha_SystemImpl.gl.bufferData(34963,glData,this.usage == 1 ? 35048 : 35044);
	}
	,set: function() {
		kha_SystemImpl.gl.bindBuffer(34963,this.buffer);
	}
	,count: function() {
		return this.mySize;
	}
	,__class__: kha_graphics4_IndexBuffer
};
var kha_graphics4_PipelineStateBase = function() {
	this.inputLayout = null;
	this.vertexShader = null;
	this.fragmentShader = null;
	this.geometryShader = null;
	this.tessellationControlShader = null;
	this.tessellationEvaluationShader = null;
	this.cullMode = 2;
	this.depthWrite = false;
	this.depthMode = 0;
	this.stencilMode = 0;
	this.stencilBothPass = 0;
	this.stencilDepthFail = 0;
	this.stencilFail = 0;
	this.stencilReferenceValue = kha_graphics4_StencilValue.Static(0);
	this.stencilReadMask = 255;
	this.stencilWriteMask = 255;
	this.blendSource = 1;
	this.blendDestination = 2;
	this.blendOperation = 0;
	this.alphaBlendSource = 1;
	this.alphaBlendDestination = 2;
	this.alphaBlendOperation = 0;
	this.colorWriteMasksRed = [];
	this.colorWriteMasksGreen = [];
	this.colorWriteMasksBlue = [];
	this.colorWriteMasksAlpha = [];
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksRed.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksGreen.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksBlue.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorWriteMasksAlpha.push(true);
	this.colorAttachmentCount = 1;
	this.colorAttachments = [];
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.colorAttachments.push(0);
	this.depthStencilAttachment = 0;
	this.conservativeRasterization = false;
};
$hxClasses["kha.graphics4.PipelineStateBase"] = kha_graphics4_PipelineStateBase;
kha_graphics4_PipelineStateBase.__name__ = true;
kha_graphics4_PipelineStateBase.prototype = {
	__class__: kha_graphics4_PipelineStateBase
};
var kha_graphics4_PipelineState = function() {
	this.program = null;
	kha_graphics4_PipelineStateBase.call(this);
	this.textures = [];
	this.textureValues = [];
};
$hxClasses["kha.graphics4.PipelineState"] = kha_graphics4_PipelineState;
kha_graphics4_PipelineState.__name__ = true;
kha_graphics4_PipelineState.__super__ = kha_graphics4_PipelineStateBase;
kha_graphics4_PipelineState.prototype = $extend(kha_graphics4_PipelineStateBase.prototype,{
	'delete': function() {
		if(this.program != null) {
			kha_SystemImpl.gl.deleteProgram(this.program);
		}
	}
	,compile: function() {
		if(this.program != null) {
			kha_SystemImpl.gl.deleteProgram(this.program);
		}
		this.program = kha_SystemImpl.gl.createProgram();
		this.compileShader(this.vertexShader);
		this.compileShader(this.fragmentShader);
		kha_SystemImpl.gl.attachShader(this.program,this.vertexShader.shader);
		kha_SystemImpl.gl.attachShader(this.program,this.fragmentShader.shader);
		var index = 0;
		var _g = 0;
		var _g1 = this.inputLayout;
		while(_g < _g1.length) {
			var structure = _g1[_g];
			++_g;
			var _g2 = 0;
			var _g3 = structure.elements;
			while(_g2 < _g3.length) {
				var element = _g3[_g2];
				++_g2;
				kha_SystemImpl.gl.bindAttribLocation(this.program,index,element.name);
				if(element.data == 4) {
					index += 4;
				} else {
					++index;
				}
			}
		}
		kha_SystemImpl.gl.linkProgram(this.program);
		if(!kha_SystemImpl.gl.getProgramParameter(this.program,35714)) {
			var message = "Could not link the shader program:\n" + kha_SystemImpl.gl.getProgramInfoLog(this.program);
			haxe_Log.trace("Error: " + message,{ fileName : "kha/graphics4/PipelineState.hx", lineNumber : 49, className : "kha.graphics4.PipelineState", methodName : "compile"});
			throw haxe_Exception.thrown(message);
		}
	}
	,set: function() {
		kha_SystemImpl.gl.useProgram(this.program);
		var _g = 0;
		var _g1 = this.textureValues.length;
		while(_g < _g1) {
			var index = _g++;
			kha_SystemImpl.gl.uniform1i(this.textureValues[index],index);
		}
		kha_SystemImpl.gl.colorMask(this.colorWriteMasksRed[0],this.colorWriteMasksGreen[0],this.colorWriteMasksBlue[0],this.colorWriteMasksAlpha[0]);
	}
	,compileShader: function(shader) {
		if(shader.shader != null) {
			return;
		}
		var s = kha_SystemImpl.gl.createShader(shader.type);
		var highp = kha_SystemImpl.gl.getShaderPrecisionFormat(35632,36338);
		var highpSupported = highp.precision != 0;
		var files = shader.files;
		var _g = 0;
		var _g1 = files.length;
		while(_g < _g1) {
			var i = _g++;
			if(kha_SystemImpl.gl2) {
				if(files[i].indexOf("-webgl2") >= 0 || files[i].indexOf("runtime-string") >= 0) {
					kha_SystemImpl.gl.shaderSource(s,shader.sources[i]);
					break;
				}
			} else {
				if(!highpSupported && (files[i].indexOf("-relaxed") >= 0 || files[i].indexOf("runtime-string") >= 0)) {
					kha_SystemImpl.gl.shaderSource(s,shader.sources[i]);
					break;
				}
				if(highpSupported && (files[i].indexOf("-relaxed") < 0 || files[i].indexOf("runtime-string") >= 0)) {
					kha_SystemImpl.gl.shaderSource(s,shader.sources[i]);
					break;
				}
			}
		}
		kha_SystemImpl.gl.compileShader(s);
		if(!kha_SystemImpl.gl.getShaderParameter(s,35713)) {
			var message = "Could not compile shader:\n" + kha_SystemImpl.gl.getShaderInfoLog(s);
			haxe_Log.trace("Error: " + message,{ fileName : "kha/graphics4/PipelineState.hx", lineNumber : 89, className : "kha.graphics4.PipelineState", methodName : "compileShader"});
			throw haxe_Exception.thrown(message);
		}
		shader.shader = s;
	}
	,getConstantLocation: function(name) {
		var location = kha_SystemImpl.gl.getUniformLocation(this.program,name);
		if(location == null) {
			haxe_Log.trace("Warning: Uniform " + name + " not found.",{ fileName : "kha/graphics4/PipelineState.hx", lineNumber : 98, className : "kha.graphics4.PipelineState", methodName : "getConstantLocation"});
		}
		var type = 5126;
		var count = kha_SystemImpl.gl.getProgramParameter(this.program,35718);
		var _g = 0;
		var _g1 = count;
		while(_g < _g1) {
			var i = _g++;
			var info = kha_SystemImpl.gl.getActiveUniform(this.program,i);
			if(info.name == name || info.name == name + "[0]") {
				type = info.type;
				break;
			}
		}
		return new kha_js_graphics4_ConstantLocation(location,type);
	}
	,getTextureUnit: function(name) {
		var index = this.findTexture(name);
		if(index < 0) {
			var location = kha_SystemImpl.gl.getUniformLocation(this.program,name);
			if(location == null) {
				haxe_Log.trace("Warning: Sampler " + name + " not found.",{ fileName : "kha/graphics4/PipelineState.hx", lineNumber : 117, className : "kha.graphics4.PipelineState", methodName : "getTextureUnit"});
			}
			index = this.textures.length;
			this.textureValues.push(location);
			this.textures.push(name);
		}
		return new kha_js_graphics4_TextureUnit(index);
	}
	,findTexture: function(name) {
		var _g = 0;
		var _g1 = this.textures.length;
		while(_g < _g1) {
			var index = _g++;
			if(this.textures[index] == name) {
				return index;
			}
		}
		return -1;
	}
	,__class__: kha_graphics4_PipelineState
});
var kha_graphics4_StencilValue = $hxEnums["kha.graphics4.StencilValue"] = { __ename__:true,__constructs__:null
	,Dynamic: {_hx_name:"Dynamic",_hx_index:0,__enum__:"kha.graphics4.StencilValue",toString:$estr}
	,Static: ($_=function(value) { return {_hx_index:1,value:value,__enum__:"kha.graphics4.StencilValue",toString:$estr}; },$_._hx_name="Static",$_.__params__ = ["value"],$_)
};
kha_graphics4_StencilValue.__constructs__ = [kha_graphics4_StencilValue.Dynamic,kha_graphics4_StencilValue.Static];
var kha_graphics4_TessellationControlShader = function() { };
$hxClasses["kha.graphics4.TessellationControlShader"] = kha_graphics4_TessellationControlShader;
kha_graphics4_TessellationControlShader.__name__ = true;
var kha_graphics4_TessellationEvaluationShader = function() { };
$hxClasses["kha.graphics4.TessellationEvaluationShader"] = kha_graphics4_TessellationEvaluationShader;
kha_graphics4_TessellationEvaluationShader.__name__ = true;
var kha_graphics4_TextureUnit = function() { };
$hxClasses["kha.graphics4.TextureUnit"] = kha_graphics4_TextureUnit;
kha_graphics4_TextureUnit.__name__ = true;
kha_graphics4_TextureUnit.__isInterface__ = true;
var kha_graphics4_VertexBuffer = function(vertexCount,structure,usage,instanceDataStepRate,canRead) {
	if(canRead == null) {
		canRead = false;
	}
	if(instanceDataStepRate == null) {
		instanceDataStepRate = 0;
	}
	this.lockEnd = 0;
	this.lockStart = 0;
	this.instanceDataStepRate = instanceDataStepRate;
	this.mySize = vertexCount;
	this.myStride = 0;
	var _g = 0;
	var _g1 = structure.elements;
	while(_g < _g1.length) {
		var element = _g1[_g];
		++_g;
		this.myStride += kha_graphics4_VertexStructure.dataByteSize(element.data);
	}
	this.buffer = kha_SystemImpl.gl.createBuffer();
	this._data = kha_arrays_ByteArray.make(vertexCount * this.myStride);
	this.sizes = [];
	this.offsets = [];
	this.types = [];
	this.sizes[structure.elements.length - 1] = 0;
	this.offsets[structure.elements.length - 1] = 0;
	this.types[structure.elements.length - 1] = 0;
	var offset = 0;
	var index = 0;
	var _g = 0;
	var _g1 = structure.elements;
	while(_g < _g1.length) {
		var element = _g1[_g];
		++_g;
		var size;
		var type;
		switch(element.data) {
		case 0:
			size = 1;
			type = 5126;
			break;
		case 1:
			size = 2;
			type = 5126;
			break;
		case 2:
			size = 3;
			type = 5126;
			break;
		case 3:
			size = 4;
			type = 5126;
			break;
		case 4:
			size = 16;
			type = 5126;
			break;
		case 5:case 7:
			size = 1;
			type = 5120;
			break;
		case 6:case 8:
			size = 1;
			type = 5121;
			break;
		case 10:case 12:
			size = 2;
			type = 5121;
			break;
		case 9:case 11:
			size = 2;
			type = 5120;
			break;
		case 13:case 15:
			size = 4;
			type = 5120;
			break;
		case 14:case 16:
			size = 4;
			type = 5121;
			break;
		case 17:case 19:
			size = 1;
			type = 5122;
			break;
		case 18:case 20:
			size = 1;
			type = 5123;
			break;
		case 21:case 23:
			size = 2;
			type = 5122;
			break;
		case 22:case 24:
			size = 2;
			type = 5123;
			break;
		case 25:case 27:
			size = 4;
			type = 5122;
			break;
		case 26:case 28:
			size = 4;
			type = 5123;
			break;
		case 29:
			size = 1;
			type = 5124;
			break;
		case 30:
			size = 1;
			type = 5125;
			break;
		case 31:
			size = 2;
			type = 5124;
			break;
		case 32:
			size = 2;
			type = 5125;
			break;
		case 33:
			size = 3;
			type = 5124;
			break;
		case 34:
			size = 3;
			type = 5125;
			break;
		case 35:
			size = 4;
			type = 5124;
			break;
		case 36:
			size = 4;
			type = 5125;
			break;
		}
		this.sizes[index] = size;
		this.offsets[index] = offset;
		this.types[index] = type;
		offset += kha_graphics4_VertexStructure.dataByteSize(element.data);
		++index;
	}
	kha_SystemImpl.gl.bindBuffer(34962,this.buffer);
	var tmp = kha_SystemImpl.gl;
	var this1 = this._data;
	var start = 0 * this.stride();
	var end = this.mySize * this.stride();
	tmp.bufferData(34962,kha_arrays_ByteArray._new(this1.buffer,start,end != null ? end - start : null),usage == 1 ? 35048 : 35044);
};
$hxClasses["kha.graphics4.VertexBuffer"] = kha_graphics4_VertexBuffer;
kha_graphics4_VertexBuffer.__name__ = true;
kha_graphics4_VertexBuffer.prototype = {
	lock: function(start,count) {
		this.lockStart = start != null ? start : 0;
		this.lockEnd = count != null ? start + count : this.mySize;
		var this1 = this._data;
		var start = this.lockStart * this.stride();
		var end = this.lockEnd * this.stride();
		return kha_arrays_ByteArray._new(this1.buffer,start,end != null ? end - start : null);
	}
	,unlock: function(count) {
		if(count != null) {
			this.lockEnd = this.lockStart + count;
		}
		kha_SystemImpl.gl.bindBuffer(34962,this.buffer);
		var tmp = kha_SystemImpl.gl;
		var tmp1 = this.lockStart * this.stride();
		var this1 = this._data;
		var start = this.lockStart * this.stride();
		var end = this.lockEnd * this.stride();
		tmp.bufferSubData(34962,tmp1,kha_arrays_ByteArray._new(this1.buffer,start,end != null ? end - start : null));
	}
	,stride: function() {
		return this.myStride;
	}
	,set: function(offset) {
		var ext = kha_SystemImpl.gl2 ? true : kha_SystemImpl.gl.getExtension("ANGLE_instanced_arrays");
		kha_SystemImpl.gl.bindBuffer(34962,this.buffer);
		var attributesOffset = 0;
		var _g = 0;
		var _g1 = this.sizes.length;
		while(_g < _g1) {
			var i = _g++;
			if(this.sizes[i] > 4) {
				var size = this.sizes[i];
				var addonOffset = 0;
				while(size > 0) {
					kha_SystemImpl.gl.enableVertexAttribArray(offset + attributesOffset);
					kha_SystemImpl.gl.vertexAttribPointer(offset + attributesOffset,4,5126,false,this.myStride,this.offsets[i] + addonOffset);
					if(ext) {
						if(kha_SystemImpl.gl2) {
							kha_SystemImpl.gl.vertexAttribDivisor(offset + attributesOffset,this.instanceDataStepRate);
						} else {
							ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
						}
					}
					size -= 4;
					addonOffset += 16;
					++attributesOffset;
				}
			} else {
				var normalized = this.types[i] == 5126 ? false : true;
				kha_SystemImpl.gl.enableVertexAttribArray(offset + attributesOffset);
				kha_SystemImpl.gl.vertexAttribPointer(offset + attributesOffset,this.sizes[i],this.types[i],normalized,this.myStride,this.offsets[i]);
				if(ext) {
					if(kha_SystemImpl.gl2) {
						kha_SystemImpl.gl.vertexAttribDivisor(offset + attributesOffset,this.instanceDataStepRate);
					} else {
						ext.vertexAttribDivisorANGLE(offset + attributesOffset,this.instanceDataStepRate);
					}
				}
				++attributesOffset;
			}
		}
		return attributesOffset;
	}
	,__class__: kha_graphics4_VertexBuffer
};
var kha_graphics4_VertexElement = function(name,data) {
	this.name = name;
	this.data = data;
};
$hxClasses["kha.graphics4.VertexElement"] = kha_graphics4_VertexElement;
kha_graphics4_VertexElement.__name__ = true;
kha_graphics4_VertexElement.prototype = {
	__class__: kha_graphics4_VertexElement
};
var kha_graphics4_VertexShader = function(sources,files) {
	this.sources = [];
	var _g = 0;
	while(_g < sources.length) {
		var source = sources[_g];
		++_g;
		this.sources.push(source.toString());
	}
	this.type = 35633;
	this.shader = null;
	this.files = files;
};
$hxClasses["kha.graphics4.VertexShader"] = kha_graphics4_VertexShader;
kha_graphics4_VertexShader.__name__ = true;
kha_graphics4_VertexShader.fromSource = function(source) {
	var shader = new kha_graphics4_VertexShader([],["runtime-string"]);
	shader.sources.push(source);
	return shader;
};
kha_graphics4_VertexShader.prototype = {
	__class__: kha_graphics4_VertexShader
};
var kha_graphics4_VertexStructure = function() {
	this.elements = [];
	this.instanced = false;
};
$hxClasses["kha.graphics4.VertexStructure"] = kha_graphics4_VertexStructure;
kha_graphics4_VertexStructure.__name__ = true;
kha_graphics4_VertexStructure.dataByteSize = function(data) {
	switch(data) {
	case 0:
		return 4;
	case 1:
		return 8;
	case 2:
		return 12;
	case 3:
		return 16;
	case 4:
		return 64;
	case 5:case 6:case 7:case 8:
		return 1;
	case 9:case 10:case 11:case 12:
		return 2;
	case 13:case 14:case 15:case 16:
		return 4;
	case 17:case 18:case 19:case 20:
		return 2;
	case 21:case 22:case 23:case 24:
		return 4;
	case 25:case 26:case 27:case 28:
		return 8;
	case 29:case 30:
		return 4;
	case 31:case 32:
		return 8;
	case 33:case 34:
		return 12;
	case 35:case 36:
		return 16;
	}
};
kha_graphics4_VertexStructure.prototype = {
	add: function(name,data) {
		this.elements.push(new kha_graphics4_VertexElement(name,data));
	}
	,size: function() {
		return this.elements.length;
	}
	,byteSize: function() {
		var byteSize = 0;
		var _g = 0;
		var _g1 = this.elements.length;
		while(_g < _g1) {
			var i = _g++;
			byteSize += kha_graphics4_VertexStructure.dataByteSize(this.elements[i].data);
		}
		return byteSize;
	}
	,get: function(index) {
		return this.elements[index];
	}
	,__class__: kha_graphics4_VertexStructure
};
var kha_input_Gamepad = $hx_exports["kha"]["input"]["Gamepad"] = function(index,id) {
	if(id == null) {
		id = "unknown";
	}
	if(index == null) {
		index = 0;
	}
	this.connected = false;
	this.index = index;
	this.axisListeners = [];
	this.buttonListeners = [];
	kha_input_Gamepad.instances[index] = this;
};
$hxClasses["kha.input.Gamepad"] = kha_input_Gamepad;
kha_input_Gamepad.__name__ = true;
kha_input_Gamepad.get = function(index) {
	if(index == null) {
		index = 0;
	}
	if(index >= kha_input_Gamepad.instances.length) {
		return null;
	}
	return kha_input_Gamepad.instances[index];
};
kha_input_Gamepad.notifyOnConnect = function(connectListener,disconnectListener) {
	if(connectListener != null) {
		kha_input_Gamepad.connectListeners.push(connectListener);
	}
	if(disconnectListener != null) {
		kha_input_Gamepad.disconnectListeners.push(disconnectListener);
	}
};
kha_input_Gamepad.removeConnect = function(connectListener,disconnectListener) {
	if(connectListener != null) {
		HxOverrides.remove(kha_input_Gamepad.connectListeners,connectListener);
	}
	if(disconnectListener != null) {
		HxOverrides.remove(kha_input_Gamepad.disconnectListeners,disconnectListener);
	}
};
kha_input_Gamepad.sendConnectEvent = function(index) {
	kha_input_Gamepad.instances[index].connected = true;
	var _g = 0;
	var _g1 = kha_input_Gamepad.connectListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(index);
	}
};
kha_input_Gamepad.sendDisconnectEvent = function(index) {
	kha_input_Gamepad.instances[index].connected = false;
	var _g = 0;
	var _g1 = kha_input_Gamepad.disconnectListeners;
	while(_g < _g1.length) {
		var listener = _g1[_g];
		++_g;
		listener(index);
	}
};
kha_input_Gamepad.prototype = {
	notify: function(axisListener,buttonListener) {
		if(axisListener != null) {
			this.axisListeners.push(axisListener);
		}
		if(buttonListener != null) {
			this.buttonListeners.push(buttonListener);
		}
	}
	,remove: function(axisListener,buttonListener) {
		if(axisListener != null) {
			HxOverrides.remove(this.axisListeners,axisListener);
		}
		if(buttonListener != null) {
			HxOverrides.remove(this.buttonListeners,buttonListener);
		}
	}
	,rumble: function(leftAmount,rightAmount) {
		kha_SystemImpl.setGamepadRumble(this.index,leftAmount,rightAmount);
	}
	,get_id: function() {
		return kha_SystemImpl.getGamepadId(this.index);
	}
	,get_vendor: function() {
		return kha_SystemImpl.getGamepadVendor(this.index);
	}
	,sendAxisEvent: function(axis,value) {
		var _g = 0;
		var _g1 = this.axisListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(axis,value);
		}
	}
	,sendButtonEvent: function(button,value) {
		var _g = 0;
		var _g1 = this.buttonListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(button,value);
		}
	}
	,__class__: kha_input_Gamepad
	,__properties__: {get_vendor:"get_vendor",get_id:"get_id"}
};
var kha_input_BlockInterventions = $hxEnums["kha.input.BlockInterventions"] = { __ename__:true,__constructs__:null
	,Default: {_hx_name:"Default",_hx_index:0,__enum__:"kha.input.BlockInterventions",toString:$estr}
	,Full: {_hx_name:"Full",_hx_index:1,__enum__:"kha.input.BlockInterventions",toString:$estr}
	,None: {_hx_name:"None",_hx_index:2,__enum__:"kha.input.BlockInterventions",toString:$estr}
	,Custom: ($_=function(func) { return {_hx_index:3,func:func,__enum__:"kha.input.BlockInterventions",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["func"],$_)
};
kha_input_BlockInterventions.__constructs__ = [kha_input_BlockInterventions.Default,kha_input_BlockInterventions.Full,kha_input_BlockInterventions.None,kha_input_BlockInterventions.Custom];
var kha_netsync_Controller = function() {
	this.__id = kha_netsync_ControllerBuilder.nextId++;
	this._inputBuffer = new haxe_io_Bytes(new ArrayBuffer(1));
};
$hxClasses["kha.netsync.Controller"] = kha_netsync_Controller;
kha_netsync_Controller.__name__ = true;
kha_netsync_Controller.prototype = {
	_id: function() {
		return this.__id;
	}
	,__class__: kha_netsync_Controller
};
var kha_input_Keyboard = $hx_exports["kha"]["input"]["Keyboard"] = function() {
	kha_netsync_Controller.call(this);
	this.downListeners = [];
	this.upListeners = [];
	this.pressListeners = [];
	kha_input_Keyboard.instance = this;
};
$hxClasses["kha.input.Keyboard"] = kha_input_Keyboard;
kha_input_Keyboard.__name__ = true;
kha_input_Keyboard.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return kha_SystemImpl.getKeyboard(num);
};
kha_input_Keyboard.disableSystemInterventions = function(behavior) {
	kha_input_Keyboard.keyBehavior = behavior;
};
kha_input_Keyboard.__super__ = kha_netsync_Controller;
kha_input_Keyboard.prototype = $extend(kha_netsync_Controller.prototype,{
	notify: function(downListener,upListener,pressListener) {
		if(downListener != null) {
			this.downListeners.push(downListener);
		}
		if(upListener != null) {
			this.upListeners.push(upListener);
		}
		if(pressListener != null) {
			this.pressListeners.push(pressListener);
		}
	}
	,remove: function(downListener,upListener,pressListener) {
		if(downListener != null) {
			HxOverrides.remove(this.downListeners,downListener);
		}
		if(upListener != null) {
			HxOverrides.remove(this.upListeners,upListener);
		}
		if(pressListener != null) {
			HxOverrides.remove(this.pressListeners,pressListener);
		}
	}
	,show: function() {
	}
	,hide: function() {
	}
	,sendDownEvent: function(code) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(5));
			bytes.setInt32(0,0);
			bytes.b[4] = code;
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.downListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(code);
		}
	}
	,sendUpEvent: function(code) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(5));
			bytes.setInt32(0,1);
			bytes.b[4] = code;
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.upListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(code);
		}
	}
	,sendPressEvent: function(char) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(5));
			bytes.setInt32(0,2);
			bytes.b[4] = HxOverrides.cca(char,0);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		var _g = 0;
		var _g1 = this.pressListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(char);
		}
	}
	,_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
		if(funcindex == 0) {
			var input0 = bytes.b[4];
			this.sendDownEvent(input0);
			return;
		}
		if(funcindex == 1) {
			var input0 = bytes.b[4];
			this.sendUpEvent(input0);
			return;
		}
		if(funcindex == 2) {
			var code = bytes.b[4];
			var input0 = String.fromCodePoint(code);
			this.sendPressEvent(input0);
			return;
		}
	}
	,__class__: kha_input_Keyboard
});
var kha_input_MouseEventBlockBehavior = $hxEnums["kha.input.MouseEventBlockBehavior"] = { __ename__:true,__constructs__:null
	,Full: {_hx_name:"Full",_hx_index:0,__enum__:"kha.input.MouseEventBlockBehavior",toString:$estr}
	,None: {_hx_name:"None",_hx_index:1,__enum__:"kha.input.MouseEventBlockBehavior",toString:$estr}
	,Custom: ($_=function(func) { return {_hx_index:2,func:func,__enum__:"kha.input.MouseEventBlockBehavior",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["func"],$_)
};
kha_input_MouseEventBlockBehavior.__constructs__ = [kha_input_MouseEventBlockBehavior.Full,kha_input_MouseEventBlockBehavior.None,kha_input_MouseEventBlockBehavior.Custom];
var kha_input_MouseCursor = $hxEnums["kha.input.MouseCursor"] = { __ename__:true,__constructs__:null
	,Default: {_hx_name:"Default",_hx_index:0,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Pointer: {_hx_name:"Pointer",_hx_index:1,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Text: {_hx_name:"Text",_hx_index:2,__enum__:"kha.input.MouseCursor",toString:$estr}
	,EastWestResize: {_hx_name:"EastWestResize",_hx_index:3,__enum__:"kha.input.MouseCursor",toString:$estr}
	,NorthSouthResize: {_hx_name:"NorthSouthResize",_hx_index:4,__enum__:"kha.input.MouseCursor",toString:$estr}
	,NorthEastResize: {_hx_name:"NorthEastResize",_hx_index:5,__enum__:"kha.input.MouseCursor",toString:$estr}
	,SouthEastResize: {_hx_name:"SouthEastResize",_hx_index:6,__enum__:"kha.input.MouseCursor",toString:$estr}
	,NorthWestResize: {_hx_name:"NorthWestResize",_hx_index:7,__enum__:"kha.input.MouseCursor",toString:$estr}
	,SouthWestResize: {_hx_name:"SouthWestResize",_hx_index:8,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Grab: {_hx_name:"Grab",_hx_index:9,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Grabbing: {_hx_name:"Grabbing",_hx_index:10,__enum__:"kha.input.MouseCursor",toString:$estr}
	,NotAllowed: {_hx_name:"NotAllowed",_hx_index:11,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Wait: {_hx_name:"Wait",_hx_index:12,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Crosshair: {_hx_name:"Crosshair",_hx_index:13,__enum__:"kha.input.MouseCursor",toString:$estr}
	,Custom: ($_=function(image) { return {_hx_index:14,image:image,__enum__:"kha.input.MouseCursor",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["image"],$_)
};
kha_input_MouseCursor.__constructs__ = [kha_input_MouseCursor.Default,kha_input_MouseCursor.Pointer,kha_input_MouseCursor.Text,kha_input_MouseCursor.EastWestResize,kha_input_MouseCursor.NorthSouthResize,kha_input_MouseCursor.NorthEastResize,kha_input_MouseCursor.SouthEastResize,kha_input_MouseCursor.NorthWestResize,kha_input_MouseCursor.SouthWestResize,kha_input_MouseCursor.Grab,kha_input_MouseCursor.Grabbing,kha_input_MouseCursor.NotAllowed,kha_input_MouseCursor.Wait,kha_input_MouseCursor.Crosshair,kha_input_MouseCursor.Custom];
var kha_input_Mouse = $hx_exports["kha"]["input"]["Mouse"] = function() {
	kha_netsync_Controller.call(this);
	kha_input_Mouse.instance = this;
};
$hxClasses["kha.input.Mouse"] = kha_input_Mouse;
kha_input_Mouse.__name__ = true;
kha_input_Mouse.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return kha_SystemImpl.getMouse(num);
};
kha_input_Mouse.setWheelEventBlockBehavior = function(behavior) {
	kha_input_Mouse.wheelEventBlockBehavior = behavior;
};
kha_input_Mouse.__super__ = kha_netsync_Controller;
kha_input_Mouse.prototype = $extend(kha_netsync_Controller.prototype,{
	notify: function(downListener,upListener,moveListener,wheelListener,leaveListener) {
		this.notifyWindowed(0,downListener,upListener,moveListener,wheelListener,leaveListener);
	}
	,remove: function(downListener,upListener,moveListener,wheelListener,leaveListener) {
		this.removeWindowed(0,downListener,upListener,moveListener,wheelListener,leaveListener);
	}
	,notifyWindowed: function(windowId,downListener,upListener,moveListener,wheelListener,leaveListener) {
		if(downListener != null) {
			if(this.windowDownListeners == null) {
				this.windowDownListeners = [];
			}
			while(this.windowDownListeners.length <= windowId) this.windowDownListeners.push([]);
			this.windowDownListeners[windowId].push(downListener);
		}
		if(upListener != null) {
			if(this.windowUpListeners == null) {
				this.windowUpListeners = [];
			}
			while(this.windowUpListeners.length <= windowId) this.windowUpListeners.push([]);
			this.windowUpListeners[windowId].push(upListener);
		}
		if(moveListener != null) {
			if(this.windowMoveListeners == null) {
				this.windowMoveListeners = [];
			}
			while(this.windowMoveListeners.length <= windowId) this.windowMoveListeners.push([]);
			this.windowMoveListeners[windowId].push(moveListener);
		}
		if(wheelListener != null) {
			if(this.windowWheelListeners == null) {
				this.windowWheelListeners = [];
			}
			while(this.windowWheelListeners.length <= windowId) this.windowWheelListeners.push([]);
			this.windowWheelListeners[windowId].push(wheelListener);
		}
		if(leaveListener != null) {
			if(this.windowLeaveListeners == null) {
				this.windowLeaveListeners = [];
			}
			while(this.windowLeaveListeners.length <= windowId) this.windowLeaveListeners.push([]);
			this.windowLeaveListeners[windowId].push(leaveListener);
		}
	}
	,removeWindowed: function(windowId,downListener,upListener,moveListener,wheelListener,leaveListener) {
		if(downListener != null) {
			if(this.windowDownListeners != null) {
				if(windowId < this.windowDownListeners.length) {
					HxOverrides.remove(this.windowDownListeners[windowId],downListener);
				} else {
					haxe_Log.trace("no downListeners for window \"" + windowId + "\" are registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 152, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				haxe_Log.trace("no downListeners were ever registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 156, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(upListener != null) {
			if(this.windowUpListeners != null) {
				if(windowId < this.windowUpListeners.length) {
					HxOverrides.remove(this.windowUpListeners[windowId],upListener);
				} else {
					haxe_Log.trace("no upListeners for window \"" + windowId + "\" are registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 166, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				haxe_Log.trace("no upListeners were ever registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 170, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(moveListener != null) {
			if(this.windowMoveListeners != null) {
				if(windowId < this.windowMoveListeners.length) {
					HxOverrides.remove(this.windowMoveListeners[windowId],moveListener);
				} else {
					haxe_Log.trace("no moveListeners for window \"" + windowId + "\" are registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 180, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				haxe_Log.trace("no moveListeners were ever registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 184, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(wheelListener != null) {
			if(this.windowWheelListeners != null) {
				if(windowId < this.windowWheelListeners.length) {
					HxOverrides.remove(this.windowWheelListeners[windowId],wheelListener);
				} else {
					haxe_Log.trace("no wheelListeners for window \"" + windowId + "\" are registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 194, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				haxe_Log.trace("no wheelListeners were ever registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 198, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
		if(leaveListener != null) {
			if(this.windowLeaveListeners != null) {
				if(windowId < this.windowLeaveListeners.length) {
					HxOverrides.remove(this.windowLeaveListeners[windowId],leaveListener);
				} else {
					haxe_Log.trace("no leaveListeners for window \"" + windowId + "\" are registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 208, className : "kha.input.Mouse", methodName : "removeWindowed"});
				}
			} else {
				haxe_Log.trace("no leaveListeners were ever registered",{ fileName : "kha/input/Mouse.hx", lineNumber : 212, className : "kha.input.Mouse", methodName : "removeWindowed"});
			}
		}
	}
	,lock: function() {
	}
	,unlock: function() {
	}
	,canLock: function() {
		return false;
	}
	,isLocked: function() {
		return false;
	}
	,notifyOnLockChange: function(change,error) {
	}
	,removeFromLockChange: function(change,error) {
	}
	,hideSystemCursor: function() {
	}
	,showSystemCursor: function() {
	}
	,setSystemCursor: function(cursor) {
	}
	,sendLeaveEvent: function(windowId) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(8));
			bytes.setInt32(0,0);
			bytes.setInt32(4,windowId);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowLeaveListeners != null) {
			var _g = 0;
			var _g1 = this.windowLeaveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener();
			}
		}
	}
	,sendDownEvent: function(windowId,button,x,y) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(20));
			bytes.setInt32(0,1);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,button);
			bytes.setInt32(12,x);
			bytes.setInt32(16,y);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowDownListeners != null) {
			var _g = 0;
			var _g1 = this.windowDownListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	}
	,sendUpEvent: function(windowId,button,x,y) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(20));
			bytes.setInt32(0,2);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,button);
			bytes.setInt32(12,x);
			bytes.setInt32(16,y);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowUpListeners != null) {
			var _g = 0;
			var _g1 = this.windowUpListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(button,x,y);
			}
		}
	}
	,sendMoveEvent: function(windowId,x,y,movementX,movementY) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(24));
			bytes.setInt32(0,3);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,x);
			bytes.setInt32(12,y);
			bytes.setInt32(16,movementX);
			bytes.setInt32(20,movementY);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowMoveListeners != null) {
			var _g = 0;
			var _g1 = this.windowMoveListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(x,y,movementX,movementY);
			}
		}
	}
	,sendWheelEvent: function(windowId,delta) {
		if(kha_netsync_Session.the() != null) {
			var bytes = new haxe_io_Bytes(new ArrayBuffer(12));
			bytes.setInt32(0,4);
			bytes.setInt32(4,windowId);
			bytes.setInt32(8,delta);
			kha_netsync_Session.the().sendControllerUpdate(this._id(),bytes);
		}
		if(this.windowWheelListeners != null) {
			var _g = 0;
			var _g1 = this.windowWheelListeners[windowId];
			while(_g < _g1.length) {
				var listener = _g1[_g];
				++_g;
				listener(delta);
			}
		}
	}
	,_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
		if(funcindex == 0) {
			var input0 = bytes.getInt32(4);
			this.sendLeaveEvent(input0);
			return;
		}
		if(funcindex == 1) {
			var input0 = bytes.getInt32(4);
			var input1 = bytes.getInt32(8);
			var input2 = bytes.getInt32(12);
			var input3 = bytes.getInt32(16);
			this.sendDownEvent(input0,input1,input2,input3);
			return;
		}
		if(funcindex == 2) {
			var input0 = bytes.getInt32(4);
			var input1 = bytes.getInt32(8);
			var input2 = bytes.getInt32(12);
			var input3 = bytes.getInt32(16);
			this.sendUpEvent(input0,input1,input2,input3);
			return;
		}
		if(funcindex == 3) {
			var input0 = bytes.getInt32(4);
			var input1 = bytes.getInt32(8);
			var input2 = bytes.getInt32(12);
			var input3 = bytes.getInt32(16);
			var input4 = bytes.getInt32(20);
			this.sendMoveEvent(input0,input1,input2,input3,input4);
			return;
		}
		if(funcindex == 4) {
			var input0 = bytes.getInt32(4);
			var input1 = bytes.getInt32(8);
			this.sendWheelEvent(input0,input1);
			return;
		}
	}
	,__class__: kha_input_Mouse
});
var kha_input_MouseImpl = function() {
	kha_input_Mouse.call(this);
};
$hxClasses["kha.input.MouseImpl"] = kha_input_MouseImpl;
kha_input_MouseImpl.__name__ = true;
kha_input_MouseImpl.__super__ = kha_input_Mouse;
kha_input_MouseImpl.prototype = $extend(kha_input_Mouse.prototype,{
	lock: function() {
		kha_SystemImpl.lockMouse();
	}
	,unlock: function() {
		kha_SystemImpl.unlockMouse();
	}
	,canLock: function() {
		return kha_SystemImpl.canLockMouse();
	}
	,isLocked: function() {
		return kha_SystemImpl.isMouseLocked();
	}
	,notifyOnLockChange: function(func,error) {
		kha_SystemImpl.notifyOfMouseLockChange(func,error);
	}
	,removeFromLockChange: function(func,error) {
		kha_SystemImpl.removeFromMouseLockChange(func,error);
	}
	,hideSystemCursor: function() {
		kha_SystemImpl.khanvas.style.cursor = "none";
	}
	,showSystemCursor: function() {
		kha_SystemImpl.khanvas.style.cursor = "default";
	}
	,setSystemCursor: function(cursor) {
		var tmp;
		switch(cursor._hx_index) {
		case 0:
			tmp = "default";
			break;
		case 1:
			tmp = "pointer";
			break;
		case 2:
			tmp = "text";
			break;
		case 3:
			tmp = "ew-resize";
			break;
		case 4:
			tmp = "ns-resize";
			break;
		case 5:
			tmp = "ne-resize";
			break;
		case 6:
			tmp = "se-resize";
			break;
		case 7:
			tmp = "nw-resize";
			break;
		case 8:
			tmp = "sw-resize";
			break;
		case 9:
			tmp = "grab";
			break;
		case 10:
			tmp = "grabbing";
			break;
		case 11:
			tmp = "not-allowed";
			break;
		case 12:
			tmp = "wait";
			break;
		case 13:
			tmp = "crosshair";
			break;
		case 14:
			var image = cursor.image;
			var canvas = window.document.createElement("canvas");
			canvas.width = image.get_width();
			canvas.height = image.get_height();
			if(((image) instanceof kha_WebGLImage)) {
				canvas.getContext("2d",null).drawImage((js_Boot.__cast(image , kha_WebGLImage)).image,0,0);
			} else {
				canvas.getContext("2d",null).drawImage((js_Boot.__cast(image , kha_CanvasImage)).image,0,0);
			}
			var dataURL = canvas.toDataURL("image/png");
			dataURL = StringTools.replace(dataURL,"/^data:image\\/(png|jpg);base64,/","");
			tmp = "url('" + dataURL + "'),auto";
			break;
		}
		kha_SystemImpl.khanvas.style.cursor = tmp;
	}
	,_receive: function(bytes) {
		var funcindex = bytes.getInt32(0);
	}
	,__class__: kha_input_MouseImpl
});
var kha_input_Pen = function() {
	kha_input_Pen.instance = this;
};
$hxClasses["kha.input.Pen"] = kha_input_Pen;
kha_input_Pen.__name__ = true;
kha_input_Pen.get = function(num) {
	if(num == null) {
		num = 0;
	}
	return kha_SystemImpl.getPen(num);
};
kha_input_Pen.prototype = {
	notify: function(downListener,upListener,moveListener) {
		this.notifyWindowed(0,downListener,upListener,moveListener);
	}
	,notifyWindowed: function(windowId,downListener,upListener,moveListener) {
		if(downListener != null) {
			if(this.windowDownListeners == null) {
				this.windowDownListeners = [];
			}
			while(this.windowDownListeners.length <= windowId) this.windowDownListeners.push([]);
			this.windowDownListeners[windowId].push(downListener);
		}
		if(upListener != null) {
			if(this.windowUpListeners == null) {
				this.windowUpListeners = [];
			}
			while(this.windowUpListeners.length <= windowId) this.windowUpListeners.push([]);
			this.windowUpListeners[windowId].push(upListener);
		}
		if(moveListener != null) {
			if(this.windowMoveListeners == null) {
				this.windowMoveListeners = [];
			}
			while(this.windowMoveListeners.length <= windowId) this.windowMoveListeners.push([]);
			this.windowMoveListeners[windowId].push(moveListener);
		}
	}
	,__class__: kha_input_Pen
};
var kha_input_TouchDownEventBlockBehavior = $hxEnums["kha.input.TouchDownEventBlockBehavior"] = { __ename__:true,__constructs__:null
	,Full: {_hx_name:"Full",_hx_index:0,__enum__:"kha.input.TouchDownEventBlockBehavior",toString:$estr}
	,None: {_hx_name:"None",_hx_index:1,__enum__:"kha.input.TouchDownEventBlockBehavior",toString:$estr}
	,Custom: ($_=function(func) { return {_hx_index:2,func:func,__enum__:"kha.input.TouchDownEventBlockBehavior",toString:$estr}; },$_._hx_name="Custom",$_.__params__ = ["func"],$_)
};
kha_input_TouchDownEventBlockBehavior.__constructs__ = [kha_input_TouchDownEventBlockBehavior.Full,kha_input_TouchDownEventBlockBehavior.None,kha_input_TouchDownEventBlockBehavior.Custom];
var kha_input_Surface = $hx_exports["kha"]["input"]["Surface"] = function() {
	this.touchStartListeners = [];
	this.touchEndListeners = [];
	this.moveListeners = [];
	kha_input_Surface.instance = this;
};
$hxClasses["kha.input.Surface"] = kha_input_Surface;
kha_input_Surface.__name__ = true;
kha_input_Surface.get = function(num) {
	if(num == null) {
		num = 0;
	}
	if(num != 0) {
		return null;
	}
	return kha_input_Surface.instance;
};
kha_input_Surface.setTouchDownEventBlockBehavior = function(behavior) {
	kha_input_Surface.touchDownEventBlockBehavior = behavior;
};
kha_input_Surface.prototype = {
	notify: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) {
			this.touchStartListeners.push(touchStartListener);
		}
		if(touchEndListener != null) {
			this.touchEndListeners.push(touchEndListener);
		}
		if(moveListener != null) {
			this.moveListeners.push(moveListener);
		}
	}
	,remove: function(touchStartListener,touchEndListener,moveListener) {
		if(touchStartListener != null) {
			HxOverrides.remove(this.touchStartListeners,touchStartListener);
		}
		if(touchEndListener != null) {
			HxOverrides.remove(this.touchEndListeners,touchEndListener);
		}
		if(moveListener != null) {
			HxOverrides.remove(this.moveListeners,moveListener);
		}
	}
	,sendTouchStartEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchStartListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,sendTouchEndEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.touchEndListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,sendMoveEvent: function(index,x,y) {
		var _g = 0;
		var _g1 = this.moveListeners;
		while(_g < _g1.length) {
			var listener = _g1[_g];
			++_g;
			listener(index,x,y);
		}
	}
	,__class__: kha_input_Surface
};
var kha_internal_BytesBlob = function(bytes) {
	this.bytes = bytes;
};
$hxClasses["kha.internal.BytesBlob"] = kha_internal_BytesBlob;
kha_internal_BytesBlob.__name__ = true;
kha_internal_BytesBlob.__interfaces__ = [kha_Resource];
kha_internal_BytesBlob.fromBytes = function(bytes) {
	return new kha_internal_BytesBlob(bytes);
};
kha_internal_BytesBlob.prototype = {
	get_length: function() {
		return this.bytes.length;
	}
	,toString: function() {
		return this.bytes.toString();
	}
	,toBytes: function() {
		return this.bytes;
	}
	,__class__: kha_internal_BytesBlob
	,__properties__: {get_length:"get_length"}
};
var kha_internal_HdrFormat = function() { };
$hxClasses["kha.internal.HdrFormat"] = kha_internal_HdrFormat;
kha_internal_HdrFormat.__name__ = true;
kha_internal_HdrFormat.readBuf = function(buf) {
	var bytesRead = 0;
	while(true) {
		buf[bytesRead++] = kha_internal_HdrFormat.buffer[kha_internal_HdrFormat.fileOffset];
		if(!(++kha_internal_HdrFormat.fileOffset < kha_internal_HdrFormat.bufferLength && bytesRead < buf.length)) {
			break;
		}
	}
	return bytesRead;
};
kha_internal_HdrFormat.readBufOffset = function(buf,offset,length) {
	var bytesRead = 0;
	while(true) {
		buf[offset + bytesRead++] = kha_internal_HdrFormat.buffer[kha_internal_HdrFormat.fileOffset];
		if(!(++kha_internal_HdrFormat.fileOffset < kha_internal_HdrFormat.bufferLength && bytesRead < length)) {
			break;
		}
	}
	return bytesRead;
};
kha_internal_HdrFormat.readPixelsRaw = function(buffer,data,offset,numpixels) {
	var numExpected = 4 * numpixels;
	var numRead = kha_internal_HdrFormat.readBufOffset(data,offset,numExpected);
	if(numRead < numExpected) {
		haxe_Log.trace("Error reading raw pixels: got " + numRead + " bytes, expected " + numExpected,{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 39, className : "kha.internal.HdrFormat", methodName : "readPixelsRaw"});
		return;
	}
};
kha_internal_HdrFormat.readPixelsRawRLE = function(buffer,data,offset,scanline_width,num_scanlines) {
	var this1 = new Uint8Array(4);
	var rgbe = this1;
	var scanline_buffer = null;
	var ptr;
	var ptr_end;
	var count;
	var this1 = new Uint8Array(2);
	var buf = this1;
	while(num_scanlines > 0) {
		if(kha_internal_HdrFormat.readBuf(rgbe) < rgbe.length) {
			haxe_Log.trace("Error reading bytes: expected " + rgbe.length,{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 55, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
			return;
		}
		if(rgbe[0] != 2 || rgbe[1] != 2 || (rgbe[2] & 128) != 0) {
			data[offset++] = rgbe[0];
			data[offset++] = rgbe[1];
			data[offset++] = rgbe[2];
			data[offset++] = rgbe[3];
			kha_internal_HdrFormat.readPixelsRaw(buffer,data,offset,scanline_width * num_scanlines - 1);
			return;
		}
		if(((rgbe[2] & 255) << 8 | rgbe[3] & 255) != scanline_width) {
			haxe_Log.trace("Wrong scanline width " + ((rgbe[2] & 255) << 8 | rgbe[3] & 255) + ", expected " + scanline_width,{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 70, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
			return;
		}
		if(scanline_buffer == null) {
			var this1 = new Uint8Array(4 * scanline_width);
			scanline_buffer = this1;
		}
		ptr = 0;
		var _g = 0;
		while(_g < 4) {
			var i = _g++;
			ptr_end = (i + 1) * scanline_width;
			while(ptr < ptr_end) {
				if(kha_internal_HdrFormat.readBuf(buf) < buf.length) {
					haxe_Log.trace("Error reading 2-byte buffer",{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 84, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
					return;
				}
				if((buf[0] & 255) > 128) {
					count = (buf[0] & 255) - 128;
					if(count == 0 || count > ptr_end - ptr) {
						haxe_Log.trace("Bad scanline data",{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 91, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
						return;
					}
					while(count-- > 0) scanline_buffer[ptr++] = buf[1];
				} else {
					count = buf[0] & 255;
					if(count == 0 || count > ptr_end - ptr) {
						haxe_Log.trace("Bad scanline data",{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 102, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
						return;
					}
					scanline_buffer[ptr++] = buf[1];
					if(--count > 0) {
						if(kha_internal_HdrFormat.readBufOffset(scanline_buffer,ptr,count) < count) {
							haxe_Log.trace("Error reading non-run data",{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 108, className : "kha.internal.HdrFormat", methodName : "readPixelsRawRLE"});
							return;
						}
						ptr += count;
					}
				}
			}
		}
		var _g1 = 0;
		var _g2 = scanline_width;
		while(_g1 < _g2) {
			var i1 = _g1++;
			data[offset] = scanline_buffer[i1];
			data[offset + 1] = scanline_buffer[i1 + scanline_width];
			data[offset + 2] = scanline_buffer[i1 + 2 * scanline_width];
			data[offset + 3] = scanline_buffer[i1 + 3 * scanline_width];
			offset += 4;
		}
		--num_scanlines;
	}
};
kha_internal_HdrFormat.readLine = function() {
	var buf = "";
	while(true) {
		var b = kha_internal_HdrFormat.buffer[kha_internal_HdrFormat.fileOffset];
		if(b == 10) {
			++kha_internal_HdrFormat.fileOffset;
			break;
		}
		buf += String.fromCodePoint(b);
		if(!(++kha_internal_HdrFormat.fileOffset < kha_internal_HdrFormat.bufferLength)) {
			break;
		}
	}
	return buf;
};
kha_internal_HdrFormat.parse = function(bytes) {
	kha_internal_HdrFormat.buffer = haxe_io_UInt8Array.fromBytes(bytes);
	kha_internal_HdrFormat.bufferLength = kha_internal_HdrFormat.buffer.length;
	kha_internal_HdrFormat.fileOffset = 0;
	var width = 0;
	var height = 0;
	var exposure = 1.0;
	var rle = false;
	var _g = 0;
	while(_g < 20) {
		var i = _g++;
		var line = kha_internal_HdrFormat.readLine();
		if(kha_internal_HdrFormat.formatPattern.match(line)) {
			rle = true;
		} else if(kha_internal_HdrFormat.exposurePattern.match(line)) {
			exposure = parseFloat(kha_internal_HdrFormat.exposurePattern.matched(1));
		} else if(kha_internal_HdrFormat.widthHeightPattern.match(line)) {
			height = Std.parseInt(kha_internal_HdrFormat.widthHeightPattern.matched(1));
			width = Std.parseInt(kha_internal_HdrFormat.widthHeightPattern.matched(2));
			break;
		}
	}
	if(!rle) {
		haxe_Log.trace("File is not run length encoded!",{ fileName : "kha/internal/HdrFormat.hx", lineNumber : 171, className : "kha.internal.HdrFormat", methodName : "parse"});
		return null;
	}
	var this1 = new Uint8Array(width * height * 4);
	var data = this1;
	var scanline_width = width;
	var num_scanlines = height;
	kha_internal_HdrFormat.readPixelsRawRLE(kha_internal_HdrFormat.buffer,data,0,scanline_width,num_scanlines);
	var this1 = new Float32Array(width * height * 4);
	var floatData = this1;
	var offset = 0;
	while(offset < data.length) {
		var r = data[offset] / 255;
		var g = data[offset + 1] / 255;
		var b = data[offset + 2] / 255;
		var e = data[offset + 3];
		var f = Math.pow(2.0,e - 128.0);
		r *= f;
		g *= f;
		b *= f;
		floatData[offset] = r;
		floatData[offset + 1] = g;
		floatData[offset + 2] = b;
		floatData[offset + 3] = 1.0;
		offset += 4;
	}
	return { width : width, height : height, data : floatData};
};
var kha_js_AEAudioChannel = function(element,looping) {
	this.stopped = false;
	this.element = element;
	this.looping = looping;
};
$hxClasses["kha.js.AEAudioChannel"] = kha_js_AEAudioChannel;
kha_js_AEAudioChannel.__name__ = true;
kha_js_AEAudioChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_js_AEAudioChannel.prototype = {
	play: function() {
		this.stopped = false;
		this.element.play();
	}
	,stop: function() {
		try {
			this.element.pause();
			this.element.currentTime = 0;
			this.stopped = true;
		} catch( _g ) {
			var e = haxe_Exception.caught(_g).unwrap();
			haxe_Log.trace(e,{ fileName : "kha/js/AEAudioChannel.hx", lineNumber : 37, className : "kha.js.AEAudioChannel", methodName : "stop"});
		}
	}
	,get_length: function() {
		var f = this.element.duration;
		if(isFinite(f)) {
			return this.element.duration;
		} else {
			return Infinity;
		}
	}
	,get_position: function() {
		return this.element.currentTime;
	}
	,set_position: function(value) {
		return this.element.currentTime = value;
	}
	,set_volume: function(value) {
		return this.element.volume = value;
	}
	,get_finished: function() {
		if(!this.stopped) {
			if(!this.looping) {
				return this.get_position() >= this.get_length();
			} else {
				return false;
			}
		} else {
			return true;
		}
	}
	,__class__: kha_js_AEAudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume",set_position:"set_position",get_position:"get_position",get_length:"get_length"}
};
var kha_js_AudioElementAudio = function() { };
$hxClasses["kha.js.AudioElementAudio"] = kha_js_AudioElementAudio;
kha_js_AudioElementAudio.__name__ = true;
kha_js_AudioElementAudio.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	return kha_js_AudioElementAudio.stream(sound,loop);
};
kha_js_AudioElementAudio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	sound.element.loop = loop;
	var channel = new kha_js_AEAudioChannel(sound.element,loop);
	channel.play();
	return channel;
};
var kha_js_CanvasGraphics = function(canvas) {
	kha_graphics2_Graphics.call(this);
	this.canvas = canvas;
	kha_js_CanvasGraphics.instance = this;
	this.myColor = kha_Color.fromBytes(0,0,0);
};
$hxClasses["kha.js.CanvasGraphics"] = kha_js_CanvasGraphics;
kha_js_CanvasGraphics.__name__ = true;
kha_js_CanvasGraphics.__super__ = kha_graphics2_Graphics;
kha_js_CanvasGraphics.prototype = $extend(kha_graphics2_Graphics.prototype,{
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		if(clear) {
			this.clear(clearColor);
		}
	}
	,clear: function(color) {
		if(color == null) {
			color = 0;
		}
		this.canvas.strokeStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		if((color >>> 24) * 0.00392156862745098 == 0) {
			this.canvas.clearRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height);
		} else {
			this.canvas.fillRect(0,0,this.canvas.canvas.width,this.canvas.canvas.height);
		}
		this.set_color(this.myColor);
	}
	,end: function() {
	}
	,set_color: function(color) {
		this.myColor = color;
		this.canvas.strokeStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		this.canvas.fillStyle = "rgba(" + ((color & 16711680) >>> 16) + "," + ((color & 65280) >>> 8) + "," + (color & 255) + "," + (color >>> 24) * 0.00392156862745098 + ")";
		return color;
	}
	,fillRect: function(x,y,width,height) {
		var tmp = this.get_opacity();
		this.canvas.globalAlpha = tmp * ((this.myColor >>> 24) * 0.00392156862745098);
		this.canvas.fillRect(x,y,width,height);
		this.canvas.globalAlpha = this.get_opacity();
	}
	,__class__: kha_js_CanvasGraphics
});
var kha_js_MobileWebAudio = function() { };
$hxClasses["kha.js.MobileWebAudio"] = kha_js_MobileWebAudio;
kha_js_MobileWebAudio.__name__ = true;
kha_js_MobileWebAudio._init = function() {
	try {
		kha_js_MobileWebAudio._context = new AudioContext();
		return;
	} catch( _g ) {
	}
	try {
		this._context = new webkitAudioContext();
		return;
	} catch( _g ) {
	}
};
kha_js_MobileWebAudio.play = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	var channel = new kha_js_MobileWebAudioChannel(sound,loop);
	channel.play();
	return channel;
};
kha_js_MobileWebAudio.stream = function(sound,loop) {
	if(loop == null) {
		loop = false;
	}
	return kha_js_MobileWebAudio.play(sound,loop);
};
var kha_js_MobileWebAudioChannel = function(sound,loop) {
	this.stopped = false;
	this.paused = false;
	this.buffer = sound._buffer;
	this.loop = loop;
	this.createSource();
};
$hxClasses["kha.js.MobileWebAudioChannel"] = kha_js_MobileWebAudioChannel;
kha_js_MobileWebAudioChannel.__name__ = true;
kha_js_MobileWebAudioChannel.__interfaces__ = [kha_audio1_AudioChannel];
kha_js_MobileWebAudioChannel.prototype = {
	createSource: function() {
		var _gthis = this;
		this.source = kha_js_MobileWebAudio._context.createBufferSource();
		this.source.loop = this.loop;
		this.source.buffer = this.buffer;
		this.source.onended = function() {
			_gthis.stopped = true;
		};
		this.gain = kha_js_MobileWebAudio._context.createGain();
		this.source.connect(this.gain);
		this.gain.connect(kha_js_MobileWebAudio._context.destination);
	}
	,play: function() {
		if(this.paused || this.stopped) {
			this.createSource();
		}
		this.stopped = false;
		if(this.paused) {
			this.paused = false;
			this.startTime = kha_js_MobileWebAudio._context.currentTime - this.pauseTime;
			this.source.start(0,this.pauseTime);
		} else {
			this.startTime = kha_js_MobileWebAudio._context.currentTime;
			this.source.start();
		}
	}
	,stop: function() {
		var wasStopped = this.paused || this.stopped;
		this.paused = false;
		this.stopped = true;
		if(wasStopped) {
			return;
		}
		this.source.stop();
	}
	,set_volume: function(value) {
		return this.gain.gain.value = value;
	}
	,get_finished: function() {
		return this.stopped;
	}
	,__class__: kha_js_MobileWebAudioChannel
	,__properties__: {get_finished:"get_finished",set_volume:"set_volume"}
};
var kha_js_MobileWebAudioSound = function(filename,done,failed) {
	var _gthis = this;
	kha_Sound.call(this);
	var request = new XMLHttpRequest();
	request.open("GET",filename,true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
		failed({ url : filename});
	};
	request.onload = function() {
		_gthis.compressedData = haxe_io_Bytes.ofData(request.response);
		_gthis.uncompressedData = null;
		kha_js_MobileWebAudio._context.decodeAudioData(_gthis.compressedData.b.bufferValue,function(buffer) {
			_gthis.length = buffer.duration;
			_gthis.channels = buffer.numberOfChannels;
			_gthis._buffer = buffer;
			done(_gthis);
		},function() {
			failed({ url : filename, error : "Audio format not supported"});
		});
	};
	request.send(null);
};
$hxClasses["kha.js.MobileWebAudioSound"] = kha_js_MobileWebAudioSound;
kha_js_MobileWebAudioSound.__name__ = true;
kha_js_MobileWebAudioSound.__super__ = kha_Sound;
kha_js_MobileWebAudioSound.prototype = $extend(kha_Sound.prototype,{
	uncompress: function(done) {
		done();
	}
	,__class__: kha_js_MobileWebAudioSound
});
var kha_js_Sound = function(filenames,done,failed) {
	kha_Sound.call(this);
	this.done = done;
	this.failed = failed;
	kha_js_Sound.loading.push(this);
	this.element = window.document.createElement("audio");
	this.filenames = [];
	var _g = 0;
	while(_g < filenames.length) {
		var filename = filenames[_g];
		++_g;
		if(this.element.canPlayType("audio/ogg") != "" && StringTools.endsWith(filename,".ogg")) {
			this.filenames.push(filename);
		}
		if(this.element.canPlayType("audio/mp4") != "" && StringTools.endsWith(filename,".mp4")) {
			this.filenames.push(filename);
		}
		if(this.element.canPlayType("audio/wav") != "" && StringTools.endsWith(filename,".wav")) {
			this.filenames.push(filename);
		}
	}
	this.element.addEventListener("error",$bind(this,this.errorListener),false);
	this.element.addEventListener("canplay",$bind(this,this.canPlayThroughListener),false);
	this.element.src = this.filenames[0];
	this.element.preload = "auto";
	this.element.load();
};
$hxClasses["kha.js.Sound"] = kha_js_Sound;
kha_js_Sound.__name__ = true;
kha_js_Sound.__super__ = kha_Sound;
kha_js_Sound.prototype = $extend(kha_Sound.prototype,{
	errorListener: function(eventInfo) {
		if(this.element.error.code == 4) {
			var _g = 0;
			var _g1 = this.filenames.length - 1;
			while(_g < _g1) {
				var i = _g++;
				if(this.element.src == this.filenames[i]) {
					this.element.src = this.filenames[i + 1];
					return;
				}
			}
		}
		this.failed({ url : this.element.src});
		this.finishAsset();
	}
	,canPlayThroughListener: function(eventInfo) {
		this.finishAsset();
	}
	,finishAsset: function() {
		this.element.removeEventListener("error",$bind(this,this.errorListener),false);
		this.element.removeEventListener("canplaythrough",$bind(this,this.canPlayThroughListener),false);
		this.done(this);
		HxOverrides.remove(kha_js_Sound.loading,this);
	}
	,uncompress: function(done) {
		done();
	}
	,__class__: kha_js_Sound
});
var kha_js_WebAudioSound = function(filename,done,failed) {
	var _gthis = this;
	kha_Sound.call(this);
	var request = new XMLHttpRequest();
	request.open("GET",filename,true);
	request.responseType = "arraybuffer";
	request.onerror = function() {
		failed({ url : filename});
	};
	request.onload = function() {
		_gthis.compressedData = haxe_io_Bytes.ofData(request.response);
		_gthis.uncompressedData = null;
		done(_gthis);
	};
	request.send(null);
};
$hxClasses["kha.js.WebAudioSound"] = kha_js_WebAudioSound;
kha_js_WebAudioSound.__name__ = true;
kha_js_WebAudioSound.__super__ = kha_Sound;
kha_js_WebAudioSound.prototype = $extend(kha_Sound.prototype,{
	superUncompress: function(done) {
		kha_Sound.prototype.uncompress.call(this,done);
	}
	,uncompress: function(done) {
		var _gthis = this;
		kha_audio2_Audio._context.decodeAudioData(this.compressedData.b.bufferValue,function(buffer) {
			var ch0 = buffer.getChannelData(0);
			var ch1 = buffer.numberOfChannels == 1 ? ch0 : buffer.getChannelData(1);
			var len = ch0.length;
			_gthis.uncompressedData = kha_arrays_Float32Array._new(len * 2);
			_gthis.length = buffer.duration;
			_gthis.channels = buffer.numberOfChannels;
			_gthis.sampleRate = Math.round(buffer.sampleRate);
			var idx = 0;
			var i = 0;
			var lidx = len * 2;
			var uncompressInner = null;
			uncompressInner = function() {
				var chk_len = idx + 11025;
				var next_chk = chk_len > lidx ? lidx : chk_len;
				while(idx < next_chk) {
					var v = ch0[i];
					_gthis.uncompressedData.setFloat32(idx * 4,v,true);
					var v1 = ch1[i];
					_gthis.uncompressedData.setFloat32((idx + 1) * 4,v1,true);
					idx += 2;
					i += 1;
				}
				if(idx < lidx) {
					window.setTimeout(uncompressInner,0);
				} else {
					_gthis.compressedData = null;
					done();
				}
			};
			uncompressInner();
		},function() {
			_gthis.superUncompress(done);
		});
	}
	,__class__: kha_js_WebAudioSound
});
var kha_js_graphics4_ConstantLocation = function(value,type) {
	this.value = value;
	this.type = type;
};
$hxClasses["kha.js.graphics4.ConstantLocation"] = kha_js_graphics4_ConstantLocation;
kha_js_graphics4_ConstantLocation.__name__ = true;
kha_js_graphics4_ConstantLocation.__interfaces__ = [kha_graphics4_ConstantLocation];
kha_js_graphics4_ConstantLocation.prototype = {
	__class__: kha_js_graphics4_ConstantLocation
};
var kha_js_graphics4_Graphics = function(renderTarget) {
	this.matrix3Cache = kha_arrays_Float32Array._new(9);
	this.matrixCache = kha_arrays_Float32Array._new(16);
	this.isDepthAttachment = false;
	this.isCubeMap = false;
	this.colorMaskAlpha = true;
	this.colorMaskBlue = true;
	this.colorMaskGreen = true;
	this.colorMaskRed = true;
	this.depthMask = false;
	this.depthTest = false;
	this.currentPipeline = null;
	this.renderTarget = renderTarget;
	this.init();
	if(kha_SystemImpl.gl2) {
		this.instancedExtension = true;
	} else {
		this.instancedExtension = kha_SystemImpl.gl.getExtension("ANGLE_instanced_arrays");
		this.blendMinMaxExtension = kha_SystemImpl.gl.getExtension("EXT_blend_minmax");
	}
};
$hxClasses["kha.js.graphics4.Graphics"] = kha_js_graphics4_Graphics;
kha_js_graphics4_Graphics.__name__ = true;
kha_js_graphics4_Graphics.__interfaces__ = [kha_graphics4_Graphics];
kha_js_graphics4_Graphics.getBlendFunc = function(factor) {
	switch(factor) {
	case 1:
		return 1;
	case 0:case 2:
		return 0;
	case 3:
		return 770;
	case 4:
		return 772;
	case 5:
		return 771;
	case 6:
		return 773;
	case 7:
		return 768;
	case 8:
		return 774;
	case 9:
		return 769;
	case 10:
		return 775;
	}
};
kha_js_graphics4_Graphics.getBlendOp = function(op) {
	switch(op) {
	case 0:
		return 32774;
	case 1:
		return 32778;
	case 2:
		return 32779;
	case 3:
		return 32775;
	case 4:
		return 32776;
	}
};
kha_js_graphics4_Graphics.prototype = {
	init: function() {
		if(this.renderTarget == null) {
			return;
		}
		this.isCubeMap = ((this.renderTarget) instanceof kha_graphics4_CubeMap);
		if(this.isCubeMap) {
			var cubeMap = js_Boot.__cast(this.renderTarget , kha_graphics4_CubeMap);
			this.renderTargetFrameBuffer = cubeMap.frameBuffer;
			this.renderTargetTexture = cubeMap.texture;
			this.isDepthAttachment = cubeMap.isDepthAttachment;
		} else {
			var image = js_Boot.__cast(this.renderTarget , kha_WebGLImage);
			this.renderTargetFrameBuffer = image.frameBuffer;
			this.renderTargetMSAA = image.MSAAFrameBuffer;
			this.renderTargetTexture = image.texture;
		}
	}
	,begin: function(additionalRenderTargets) {
		kha_SystemImpl.gl.enable(3042);
		kha_SystemImpl.gl.blendFunc(770,771);
		if(this.renderTarget == null) {
			kha_SystemImpl.gl.bindFramebuffer(36160,null);
			kha_SystemImpl.gl.viewport(0,0,kha_System.windowWidth(),kha_System.windowHeight());
		} else {
			kha_SystemImpl.gl.bindFramebuffer(36160,this.renderTargetFrameBuffer);
			kha_SystemImpl.gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
			if(additionalRenderTargets != null) {
				kha_SystemImpl.gl.framebufferTexture2D(36160,kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL,3553,this.renderTargetTexture,0);
				var _g = 0;
				var _g1 = additionalRenderTargets.length;
				while(_g < _g1) {
					var i = _g++;
					kha_SystemImpl.gl.framebufferTexture2D(36160,kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL + i + 1,3553,(js_Boot.__cast(additionalRenderTargets[i] , kha_WebGLImage)).texture,0);
				}
				var attachments = [kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL];
				var _g = 0;
				var _g1 = additionalRenderTargets.length;
				while(_g < _g1) {
					var i = _g++;
					attachments.push(kha_SystemImpl.drawBuffers.COLOR_ATTACHMENT0_WEBGL + i + 1);
				}
				if(kha_SystemImpl.gl2) {
					kha_SystemImpl.gl.drawBuffers(attachments);
				} else {
					kha_SystemImpl.drawBuffers.drawBuffersWEBGL(attachments);
				}
			}
		}
	}
	,beginFace: function(face) {
		kha_SystemImpl.gl.enable(3042);
		kha_SystemImpl.gl.blendFunc(770,771);
		kha_SystemImpl.gl.bindFramebuffer(36160,this.renderTargetFrameBuffer);
		kha_SystemImpl.gl.framebufferTexture2D(36160,this.isDepthAttachment ? 36096 : 36064,34069 + face,this.renderTargetTexture,0);
		kha_SystemImpl.gl.viewport(0,0,this.renderTarget.get_width(),this.renderTarget.get_height());
	}
	,end: function() {
		if(this.renderTargetMSAA != null) {
			kha_SystemImpl.gl.bindFramebuffer(kha_SystemImpl.gl.READ_FRAMEBUFFER,this.renderTargetFrameBuffer);
			kha_SystemImpl.gl.bindFramebuffer(kha_SystemImpl.gl.DRAW_FRAMEBUFFER,this.renderTargetMSAA);
			kha_SystemImpl.gl.blitFramebuffer(0,0,this.renderTarget.get_width(),this.renderTarget.get_height(),0,0,this.renderTarget.get_width(),this.renderTarget.get_height(),16384,9728);
		}
	}
	,clear: function(color,depth,stencil) {
		var clearMask = 0;
		if(color != null) {
			clearMask |= 16384;
			kha_SystemImpl.gl.colorMask(true,true,true,true);
			kha_SystemImpl.gl.clearColor(((color & 16711680) >>> 16) * 0.00392156862745098,((color & 65280) >>> 8) * 0.00392156862745098,(color & 255) * 0.00392156862745098,(color >>> 24) * 0.00392156862745098);
		}
		if(depth != null) {
			clearMask |= 256;
			kha_SystemImpl.gl.enable(2929);
			kha_SystemImpl.gl.depthMask(true);
			kha_SystemImpl.gl.clearDepth(depth);
		}
		if(stencil != null) {
			clearMask |= 1024;
			kha_SystemImpl.gl.enable(2960);
			kha_SystemImpl.gl.stencilMask(255);
			kha_SystemImpl.gl.clearStencil(stencil);
		}
		kha_SystemImpl.gl.clear(clearMask);
		kha_SystemImpl.gl.colorMask(this.colorMaskRed,this.colorMaskGreen,this.colorMaskBlue,this.colorMaskAlpha);
		if(this.depthTest) {
			kha_SystemImpl.gl.enable(2929);
		} else {
			kha_SystemImpl.gl.disable(2929);
		}
		kha_SystemImpl.gl.depthMask(this.depthMask);
	}
	,viewport: function(x,y,width,height) {
		if(this.renderTarget == null) {
			kha_SystemImpl.gl.viewport(x,kha_System.windowHeight(0) - y - height,width,height);
		} else {
			kha_SystemImpl.gl.viewport(x,y,width,height);
		}
	}
	,scissor: function(x,y,width,height) {
		kha_SystemImpl.gl.enable(3089);
		if(this.renderTarget == null) {
			kha_SystemImpl.gl.scissor(x,kha_System.windowHeight(0) - y - height,width,height);
		} else {
			kha_SystemImpl.gl.scissor(x,y,width,height);
		}
	}
	,disableScissor: function() {
		kha_SystemImpl.gl.disable(3089);
	}
	,setDepthMode: function(write,mode) {
		switch(mode) {
		case 0:
			if(write) {
				kha_SystemImpl.gl.enable(2929);
			} else {
				kha_SystemImpl.gl.disable(2929);
			}
			this.depthTest = write;
			kha_SystemImpl.gl.depthFunc(519);
			break;
		case 1:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(512);
			break;
		case 2:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(514);
			break;
		case 3:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(517);
			break;
		case 4:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(513);
			break;
		case 5:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(515);
			break;
		case 6:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(516);
			break;
		case 7:
			kha_SystemImpl.gl.enable(2929);
			this.depthTest = true;
			kha_SystemImpl.gl.depthFunc(518);
			break;
		}
		kha_SystemImpl.gl.depthMask(write);
		this.depthMask = write;
	}
	,setBlendingMode: function(source,destination,operation,alphaSource,alphaDestination,alphaOperation) {
		if(source == 1 && destination == 2) {
			kha_SystemImpl.gl.disable(3042);
		} else {
			kha_SystemImpl.gl.enable(3042);
			kha_SystemImpl.gl.blendFuncSeparate(kha_js_graphics4_Graphics.getBlendFunc(source),kha_js_graphics4_Graphics.getBlendFunc(destination),kha_js_graphics4_Graphics.getBlendFunc(alphaSource),kha_js_graphics4_Graphics.getBlendFunc(alphaDestination));
			kha_SystemImpl.gl.blendEquationSeparate(kha_js_graphics4_Graphics.getBlendOp(operation),kha_js_graphics4_Graphics.getBlendOp(alphaOperation));
		}
	}
	,setVertexBuffer: function(vertexBuffer) {
		var _g = 0;
		var _g1 = kha_js_graphics4_Graphics.useVertexAttributes;
		while(_g < _g1) {
			var i = _g++;
			kha_SystemImpl.gl.disableVertexAttribArray(i);
		}
		kha_js_graphics4_Graphics.useVertexAttributes = (js_Boot.__cast(vertexBuffer , kha_graphics4_VertexBuffer)).set(0);
	}
	,setVertexBuffers: function(vertexBuffers) {
		var _g = 0;
		var _g1 = kha_js_graphics4_Graphics.useVertexAttributes;
		while(_g < _g1) {
			var i = _g++;
			kha_SystemImpl.gl.disableVertexAttribArray(i);
		}
		var offset = 0;
		var _g = 0;
		while(_g < vertexBuffers.length) {
			var vertexBuffer = vertexBuffers[_g];
			++_g;
			offset += (js_Boot.__cast(vertexBuffer , kha_graphics4_VertexBuffer)).set(offset);
		}
		kha_js_graphics4_Graphics.useVertexAttributes = offset;
	}
	,setIndexBuffer: function(indexBuffer) {
		this.indicesCount = indexBuffer.count();
		(js_Boot.__cast(indexBuffer , kha_graphics4_IndexBuffer)).set();
	}
	,setTexture: function(stage,texture) {
		if(texture == null) {
			kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
			kha_SystemImpl.gl.bindTexture(3553,null);
		} else {
			(js_Boot.__cast(texture , kha_WebGLImage)).set((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
		}
	}
	,setTextureDepth: function(stage,texture) {
		(js_Boot.__cast(texture , kha_WebGLImage)).setDepth((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
	}
	,setImageTexture: function(unit,texture) {
	}
	,setTextureParameters: function(texunit,uAddressing,vAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
		kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(texunit , kha_js_graphics4_TextureUnit)).value);
		switch(uAddressing) {
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10242,10497);
			break;
		case 1:
			kha_SystemImpl.gl.texParameteri(3553,10242,33648);
			break;
		case 2:
			kha_SystemImpl.gl.texParameteri(3553,10242,33071);
			break;
		}
		switch(vAddressing) {
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10243,10497);
			break;
		case 1:
			kha_SystemImpl.gl.texParameteri(3553,10243,33648);
			break;
		case 2:
			kha_SystemImpl.gl.texParameteri(3553,10243,33071);
			break;
		}
		switch(minificationFilter) {
		case 0:
			switch(mipmapFilter) {
			case 0:
				kha_SystemImpl.gl.texParameteri(3553,10241,9728);
				break;
			case 1:
				kha_SystemImpl.gl.texParameteri(3553,10241,9984);
				break;
			case 2:
				kha_SystemImpl.gl.texParameteri(3553,10241,9986);
				break;
			}
			break;
		case 1:case 2:
			switch(mipmapFilter) {
			case 0:
				kha_SystemImpl.gl.texParameteri(3553,10241,9729);
				break;
			case 1:
				kha_SystemImpl.gl.texParameteri(3553,10241,9985);
				break;
			case 2:
				kha_SystemImpl.gl.texParameteri(3553,10241,9987);
				break;
			}
			if(minificationFilter == 2) {
				kha_SystemImpl.gl.texParameteri(3553,kha_SystemImpl.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT,4);
			}
			break;
		}
		switch(magnificationFilter) {
		case 0:
			kha_SystemImpl.gl.texParameteri(3553,10240,9728);
			break;
		case 1:case 2:
			kha_SystemImpl.gl.texParameteri(3553,10240,9729);
			break;
		}
	}
	,setTexture3DParameters: function(texunit,uAddressing,vAddressing,wAddressing,minificationFilter,magnificationFilter,mipmapFilter) {
	}
	,setTextureCompareMode: function(texunit,enabled) {
		if(enabled) {
			kha_SystemImpl.gl.texParameteri(3553,34892,34894);
			kha_SystemImpl.gl.texParameteri(3553,34893,515);
		} else {
			kha_SystemImpl.gl.texParameteri(3553,34892,0);
		}
	}
	,setCubeMapCompareMode: function(texunit,enabled) {
		if(enabled) {
			kha_SystemImpl.gl.texParameteri(34067,34892,34894);
			kha_SystemImpl.gl.texParameteri(34067,34893,515);
		} else {
			kha_SystemImpl.gl.texParameteri(34067,34892,0);
		}
	}
	,setCubeMap: function(stage,cubeMap) {
		if(cubeMap == null) {
			kha_SystemImpl.gl.activeTexture(33984 + (js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
			kha_SystemImpl.gl.bindTexture(34067,null);
		} else {
			cubeMap.set((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
		}
	}
	,setCubeMapDepth: function(stage,cubeMap) {
		cubeMap.setDepth((js_Boot.__cast(stage , kha_js_graphics4_TextureUnit)).value);
	}
	,setCullMode: function(mode) {
		switch(mode) {
		case 0:
			kha_SystemImpl.gl.enable(2884);
			kha_SystemImpl.gl.cullFace(1029);
			break;
		case 1:
			kha_SystemImpl.gl.enable(2884);
			kha_SystemImpl.gl.cullFace(1028);
			break;
		case 2:
			kha_SystemImpl.gl.disable(2884);
			break;
		}
	}
	,setPipeline: function(pipe) {
		this.setCullMode(pipe.cullMode);
		this.setDepthMode(pipe.depthWrite,pipe.depthMode);
		this.setStencilParameters(pipe.stencilMode,pipe.stencilBothPass,pipe.stencilDepthFail,pipe.stencilFail,pipe.stencilReferenceValue,pipe.stencilReadMask,pipe.stencilWriteMask);
		this.setBlendingMode(pipe.blendSource,pipe.blendDestination,pipe.blendOperation,pipe.alphaBlendSource,pipe.alphaBlendDestination,pipe.alphaBlendOperation);
		this.currentPipeline = pipe;
		pipe.set();
		this.colorMaskRed = pipe.colorWriteMasksRed[0];
		this.colorMaskGreen = pipe.colorWriteMasksGreen[0];
		this.colorMaskBlue = pipe.colorWriteMasksBlue[0];
		this.colorMaskAlpha = pipe.colorWriteMasksAlpha[0];
	}
	,setBool: function(location,value) {
		kha_SystemImpl.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value ? 1 : 0);
	}
	,setInt: function(location,value) {
		kha_SystemImpl.gl.uniform1i((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat: function(location,value) {
		kha_SystemImpl.gl.uniform1f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value);
	}
	,setFloat2: function(location,value1,value2) {
		kha_SystemImpl.gl.uniform2f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2);
	}
	,setFloat3: function(location,value1,value2,value3) {
		kha_SystemImpl.gl.uniform3f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3);
	}
	,setFloat4: function(location,value1,value2,value3,value4) {
		kha_SystemImpl.gl.uniform4f((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,value1,value2,value3,value4);
	}
	,setFloats: function(location,values) {
		var webglLocation = js_Boot.__cast(location , kha_js_graphics4_ConstantLocation);
		var rawValues = new Float32Array(values.buffer,values.byteOffset,values.byteLength >> 2);
		switch(webglLocation.type) {
		case 35664:
			kha_SystemImpl.gl.uniform2fv(webglLocation.value,rawValues);
			break;
		case 35665:
			kha_SystemImpl.gl.uniform3fv(webglLocation.value,rawValues);
			break;
		case 35666:
			kha_SystemImpl.gl.uniform4fv(webglLocation.value,rawValues);
			break;
		case 35676:
			kha_SystemImpl.gl.uniformMatrix4fv(webglLocation.value,false,rawValues);
			break;
		default:
			kha_SystemImpl.gl.uniform1fv(webglLocation.value,rawValues);
		}
	}
	,setMatrix: function(location,matrix) {
		var v = matrix._00;
		this.matrixCache.setFloat32(0,v,true);
		var v = matrix._01;
		this.matrixCache.setFloat32(4,v,true);
		var v = matrix._02;
		this.matrixCache.setFloat32(8,v,true);
		var v = matrix._03;
		this.matrixCache.setFloat32(12,v,true);
		var v = matrix._10;
		this.matrixCache.setFloat32(16,v,true);
		var v = matrix._11;
		this.matrixCache.setFloat32(20,v,true);
		var v = matrix._12;
		this.matrixCache.setFloat32(24,v,true);
		var v = matrix._13;
		this.matrixCache.setFloat32(28,v,true);
		var v = matrix._20;
		this.matrixCache.setFloat32(32,v,true);
		var v = matrix._21;
		this.matrixCache.setFloat32(36,v,true);
		var v = matrix._22;
		this.matrixCache.setFloat32(40,v,true);
		var v = matrix._23;
		this.matrixCache.setFloat32(44,v,true);
		var v = matrix._30;
		this.matrixCache.setFloat32(48,v,true);
		var v = matrix._31;
		this.matrixCache.setFloat32(52,v,true);
		var v = matrix._32;
		this.matrixCache.setFloat32(56,v,true);
		var v = matrix._33;
		this.matrixCache.setFloat32(60,v,true);
		var rawMatrixCache = new Float32Array(this.matrixCache.buffer,this.matrixCache.byteOffset,this.matrixCache.byteLength >> 2);
		kha_SystemImpl.gl.uniformMatrix4fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,false,rawMatrixCache);
	}
	,setMatrix3: function(location,matrix) {
		var v = matrix._00;
		this.matrix3Cache.setFloat32(0,v,true);
		var v = matrix._01;
		this.matrix3Cache.setFloat32(4,v,true);
		var v = matrix._02;
		this.matrix3Cache.setFloat32(8,v,true);
		var v = matrix._10;
		this.matrix3Cache.setFloat32(12,v,true);
		var v = matrix._11;
		this.matrix3Cache.setFloat32(16,v,true);
		var v = matrix._12;
		this.matrix3Cache.setFloat32(20,v,true);
		var v = matrix._20;
		this.matrix3Cache.setFloat32(24,v,true);
		var v = matrix._21;
		this.matrix3Cache.setFloat32(28,v,true);
		var v = matrix._22;
		this.matrix3Cache.setFloat32(32,v,true);
		var rawMatrix3Cache = new Float32Array(this.matrix3Cache.buffer,this.matrix3Cache.byteOffset,this.matrix3Cache.byteLength >> 2);
		kha_SystemImpl.gl.uniformMatrix3fv((js_Boot.__cast(location , kha_js_graphics4_ConstantLocation)).value,false,rawMatrix3Cache);
	}
	,drawIndexedVertices: function(start,count) {
		if(count == null) {
			count = -1;
		}
		if(start == null) {
			start = 0;
		}
		var type = kha_SystemImpl.elementIndexUint == null ? 5123 : 5125;
		var size = type == 5123 ? 2 : 4;
		kha_SystemImpl.gl.drawElements(4,count == -1 ? this.indicesCount : count,type,start * size);
	}
	,convertStencilAction: function(action) {
		switch(action) {
		case 0:
			return 7680;
		case 1:
			return 0;
		case 2:
			return 7681;
		case 3:
			return 7682;
		case 4:
			return 34055;
		case 5:
			return 7683;
		case 6:
			return 34056;
		case 7:
			return 5386;
		}
	}
	,convertCompareMode: function(compareMode) {
		switch(compareMode) {
		case 0:
			return 519;
		case 1:
			return 512;
		case 2:
			return 514;
		case 3:
			return 517;
		case 4:
			return 513;
		case 5:
			return 515;
		case 6:
			return 516;
		case 7:
			return 518;
		}
	}
	,setStencilParameters: function(compareMode,bothPass,depthFail,stencilFail,referenceValue,readMask,writeMask) {
		if(writeMask == null) {
			writeMask = 255;
		}
		if(readMask == null) {
			readMask = 255;
		}
		if(compareMode == 0 && bothPass == 0 && depthFail == 0 && stencilFail == 0) {
			kha_SystemImpl.gl.disable(2960);
		} else {
			kha_SystemImpl.gl.enable(2960);
			var stencilFunc = this.convertCompareMode(compareMode);
			kha_SystemImpl.gl.stencilMask(writeMask);
			kha_SystemImpl.gl.stencilOp(this.convertStencilAction(stencilFail),this.convertStencilAction(depthFail),this.convertStencilAction(bothPass));
			switch(referenceValue._hx_index) {
			case 0:
				kha_SystemImpl.gl.stencilFunc(stencilFunc,0,readMask);
				break;
			case 1:
				var value = referenceValue.value;
				kha_SystemImpl.gl.stencilFunc(stencilFunc,value,readMask);
				break;
			}
		}
	}
	,drawIndexedVerticesInstanced: function(instanceCount,start,count) {
		if(count == null) {
			count = -1;
		}
		if(start == null) {
			start = 0;
		}
		if(this.instancedRenderingAvailable()) {
			var type = kha_SystemImpl.elementIndexUint == null ? 5123 : 5125;
			var typeSize = kha_SystemImpl.elementIndexUint == null ? 2 : 4;
			if(kha_SystemImpl.gl2) {
				kha_SystemImpl.gl.drawElementsInstanced(4,count == -1 ? this.indicesCount : count,type,start * typeSize,instanceCount);
			} else {
				this.instancedExtension.drawElementsInstancedANGLE(4,count == -1 ? this.indicesCount : count,type,start * typeSize,instanceCount);
			}
		}
	}
	,instancedRenderingAvailable: function() {
		return this.instancedExtension;
	}
	,__class__: kha_js_graphics4_Graphics
};
var kha_js_graphics4_Graphics2 = function(canvas) {
	kha_graphics4_Graphics2.call(this,canvas);
};
$hxClasses["kha.js.graphics4.Graphics2"] = kha_js_graphics4_Graphics2;
kha_js_graphics4_Graphics2.__name__ = true;
kha_js_graphics4_Graphics2.__super__ = kha_graphics4_Graphics2;
kha_js_graphics4_Graphics2.prototype = $extend(kha_graphics4_Graphics2.prototype,{
	begin: function(clear,clearColor) {
		if(clear == null) {
			clear = true;
		}
		kha_SystemImpl.gl.colorMask(true,true,true,true);
		kha_SystemImpl.gl.disable(2929);
		kha_SystemImpl.gl.depthFunc(519);
		kha_graphics4_Graphics2.prototype.begin.call(this,clear,clearColor);
	}
	,__class__: kha_js_graphics4_Graphics2
});
var kha_js_graphics4_TextureUnit = function(value) {
	this.value = value;
};
$hxClasses["kha.js.graphics4.TextureUnit"] = kha_js_graphics4_TextureUnit;
kha_js_graphics4_TextureUnit.__name__ = true;
kha_js_graphics4_TextureUnit.__interfaces__ = [kha_graphics4_TextureUnit];
kha_js_graphics4_TextureUnit.prototype = {
	__class__: kha_js_graphics4_TextureUnit
};
var kha_vr_VrInterface = function() {
};
$hxClasses["kha.vr.VrInterface"] = kha_vr_VrInterface;
kha_vr_VrInterface.__name__ = true;
kha_vr_VrInterface.prototype = {
	IsVrEnabled: function() {
		return false;
	}
	,__class__: kha_vr_VrInterface
};
var kha_js_vr_VrInterface = function() {
	this.vrHeight = 0;
	this.vrWidth = 0;
	this.height = 0;
	this.width = 0;
	this.vrEnabled = false;
	kha_vr_VrInterface.call(this);
	var displayEnabled = false;
	if(displayEnabled) {
		this.vrEnabled = true;
		this.getVRDisplays();
		haxe_Log.trace("Display enabled.",{ fileName : "kha/js/vr/VrInterface.hx", lineNumber : 40, className : "kha.js.vr.VrInterface", methodName : "new"});
	}
};
$hxClasses["kha.js.vr.VrInterface"] = kha_js_vr_VrInterface;
kha_js_vr_VrInterface.__name__ = true;
kha_js_vr_VrInterface.__super__ = kha_vr_VrInterface;
kha_js_vr_VrInterface.prototype = $extend(kha_vr_VrInterface.prototype,{
	getVRDisplays: function() {
		var _gthis = this;
		var vrDisplayInstance = navigator.getVRDisplays();
		vrDisplayInstance.then(function(displays) {
			if(displays.length > 0) {
				_gthis.frameData = new VRFrameData();
				_gthis.vrDisplay = displays[0];
				_gthis.vrDisplay.depthNear = 0.1;
				_gthis.vrDisplay.depthFar = 1024.0;
				var leftEye = _gthis.vrDisplay.getEyeParameters("left");
				var rightEye = _gthis.vrDisplay.getEyeParameters("right");
				_gthis.width = kha_SystemImpl.khanvas.width;
				_gthis.height = kha_SystemImpl.khanvas.height;
				_gthis.vrWidth = Math.max(leftEye.renderWidth,rightEye.renderWidth) * 2 | 0;
				_gthis.vrHeight = Math.max(leftEye.renderHeight,rightEye.renderHeight) | 0;
			} else {
				haxe_Log.trace("There are no VR displays connected.",{ fileName : "kha/js/vr/VrInterface.hx", lineNumber : 61, className : "kha.js.vr.VrInterface", methodName : "getVRDisplays"});
			}
		});
	}
	,IsVrEnabled: function() {
		return this.vrEnabled;
	}
	,__class__: kha_js_vr_VrInterface
});
var kha_netsync_ControllerBuilder = function() { };
$hxClasses["kha.netsync.ControllerBuilder"] = kha_netsync_ControllerBuilder;
kha_netsync_ControllerBuilder.__name__ = true;
var kha_netsync_Session = function(maxPlayers,address,port) {
	this.controllers = new haxe_ds_IntMap();
	kha_netsync_Session.instance = this;
	this.maxPlayers = maxPlayers;
	this.address = address;
	this.port = port;
};
$hxClasses["kha.netsync.Session"] = kha_netsync_Session;
kha_netsync_Session.__name__ = true;
kha_netsync_Session.the = function() {
	return kha_netsync_Session.instance;
};
kha_netsync_Session.prototype = {
	sendControllerUpdate: function(id,bytes) {
		if(this.controllers.h.hasOwnProperty(id)) {
			if(this.controllers.h[id]._inputBuffer.length < this.controllers.h[id]._inputBufferIndex + 4 + bytes.length) {
				var newBuffer = new haxe_io_Bytes(new ArrayBuffer(this.controllers.h[id]._inputBufferIndex + 4 + bytes.length));
				newBuffer.blit(0,this.controllers.h[id]._inputBuffer,0,this.controllers.h[id]._inputBufferIndex);
				this.controllers.h[id]._inputBuffer = newBuffer;
			}
			this.controllers.h[id]._inputBuffer.setInt32(this.controllers.h[id]._inputBufferIndex,bytes.length);
			this.controllers.h[id]._inputBuffer.blit(this.controllers.h[id]._inputBufferIndex + 4,bytes,0,bytes.length);
			this.controllers.h[id]._inputBufferIndex += 4 + bytes.length;
		}
	}
	,__class__: kha_netsync_Session
};
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
$hxClasses["Math"] = Math;
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
String.prototype.__class__ = $hxClasses["String"] = String;
String.__name__ = true;
$hxClasses["Array"] = Array;
Array.__name__ = true;
Date.prototype.__class__ = $hxClasses["Date"] = Date;
Date.__name__ = "Date";
var Int = { };
var Dynamic = { };
var Float = Number;
var Bool = Boolean;
var Class = { };
var Enum = { };
haxe_ds_ObjectMap.count = 0;
js_Boot.__toStr = ({ }).toString;
armory_renderpath_Inc.superSample = 1.0;
armory_renderpath_Inc.pointIndex = 0;
armory_renderpath_Inc.spotIndex = 0;
armory_renderpath_NishitaData.lutHeightSteps = 128;
armory_renderpath_NishitaData.lutAngleSteps = 128;
armory_renderpath_NishitaData.jSteps = 8;
armory_renderpath_NishitaData.radiusAtmo = 6420000;
armory_renderpath_NishitaData.radiusPlanet = 6360000;
armory_renderpath_NishitaData.rayleighCoeff = new iron_math_Vec3(5.5e-6,13.0e-6,22.4e-6);
armory_renderpath_NishitaData.rayleighScale = 8e3;
armory_renderpath_NishitaData.mieCoeff = 2e-5;
armory_renderpath_NishitaData.mieScale = 1.2e3;
armory_renderpath_NishitaData.ozoneCoeff = new iron_math_Vec3(1.59051840791988e-6,0.00000096707041180970,0.00000007309568762914);
armory_renderpath_RenderPathCreator.setTargetMeshes = armory_renderpath_RenderPathDeferred.setTargetMeshes;
armory_renderpath_RenderPathCreator.drawMeshes = armory_renderpath_RenderPathDeferred.drawMeshes;
armory_trait_WalkNavigation.enabled = true;
armory_trait_WalkNavigation.keyUp = "w";
armory_trait_WalkNavigation.keyDown = "s";
armory_trait_WalkNavigation.keyLeft = "a";
armory_trait_WalkNavigation.keyRight = "d";
armory_trait_WalkNavigation.keyStrafeUp = "e";
armory_trait_WalkNavigation.keyStrafeDown = "q";
armory_trait_internal_UniformsManager.floatsRegistered = false;
armory_trait_internal_UniformsManager.floatsMap = new haxe_ds_ObjectMap();
armory_trait_internal_UniformsManager.vectorsRegistered = false;
armory_trait_internal_UniformsManager.vectorsMap = new haxe_ds_ObjectMap();
armory_trait_internal_UniformsManager.texturesRegistered = false;
armory_trait_internal_UniformsManager.texturesMap = new haxe_ds_ObjectMap();
armory_trait_internal_UniformsManager.sceneRemoveInitalized = false;
haxe_Unserializer.DEFAULT_RESOLVER = new haxe__$Unserializer_DefaultResolver();
haxe_Unserializer.BASE64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789%:";
haxe_io_FPHelper.helper = new DataView(new ArrayBuffer(8));
iron_App.traitInits = [];
iron_App.traitUpdates = [];
iron_App.traitLateUpdates = [];
iron_App.traitRenders = [];
iron_App.traitRenders2D = [];
iron_App.pauseUpdates = false;
iron_App.lastw = -1;
iron_App.lasth = -1;
iron_Scene.uidCounter = 0;
iron_Scene.framePassed = true;
iron_data_ConstData.skydomeIndices = [261,8,7,258,5,4,265,12,11,257,2,156,262,9,8,259,6,5,179,12,265,0,3,2,263,10,9,260,7,6,1,4,3,264,11,10,6,17,16,179,23,12,3,14,13,10,21,20,7,18,17,4,15,14,11,22,21,8,19,18,5,16,15,12,23,22,2,13,156,9,20,19,16,27,26,23,34,33,13,24,156,20,31,30,17,28,27,179,34,23,14,25,24,21,32,31,18,29,28,15,26,25,22,33,32,19,30,29,29,40,39,26,37,36,33,44,43,30,41,40,27,38,37,34,45,44,24,35,156,31,42,41,28,39,38,179,45,34,25,36,35,32,43,42,39,50,49,179,56,45,36,47,46,43,54,53,40,51,50,37,48,47,44,55,54,41,52,51,38,49,48,45,56,55,35,46,156,42,53,52,52,63,62,49,60,59,56,67,66,46,57,156,53,64,63,50,61,60,179,67,56,47,58,57,54,65,64,51,62,61,48,59,58,55,66,65,62,73,72,59,70,69,66,77,76,63,74,73,60,71,70,67,78,77,57,68,156,64,75,74,61,72,71,179,78,67,58,69,68,65,76,75,75,86,85,72,83,82,179,89,78,69,80,79,76,87,86,73,84,83,70,81,80,77,88,87,74,85,84,71,82,81,78,89,88,68,79,156,85,96,95,82,93,92,89,100,99,79,90,156,86,97,96,83,94,93,179,100,89,80,91,90,87,98,97,84,95,94,81,92,91,88,99,98,98,109,108,95,106,105,92,103,102,99,110,109,96,107,106,93,104,103,100,111,110,90,101,156,97,108,107,94,105,104,179,111,100,91,102,101,101,112,156,108,119,118,105,116,115,179,122,111,102,113,112,109,120,119,106,117,116,103,114,113,110,121,120,107,118,117,104,115,114,111,122,121,121,132,131,118,129,128,115,126,125,122,133,132,112,123,156,119,130,129,116,127,126,179,133,122,113,124,123,120,131,130,117,128,127,114,125,124,124,135,134,131,142,141,128,139,138,125,136,135,132,143,142,129,140,139,126,137,136,133,144,143,123,134,156,130,141,140,127,138,137,179,144,133,144,155,154,134,145,156,141,152,151,138,149,148,179,155,144,135,146,145,142,153,152,139,150,149,136,147,146,143,154,153,140,151,150,137,148,147,147,159,158,154,166,165,151,163,162,148,160,159,155,167,166,145,157,156,152,164,163,149,161,160,179,167,155,146,158,157,153,165,164,150,162,161,179,178,167,158,169,168,165,176,175,162,173,172,159,170,169,166,177,176,163,174,173,160,171,170,167,178,177,157,168,156,164,175,174,161,172,171,171,183,182,178,190,189,168,180,156,175,187,186,172,184,183,179,190,178,169,181,180,176,188,187,173,185,184,170,182,181,177,189,188,174,186,185,182,193,192,189,200,199,186,197,196,183,194,193,190,201,200,180,191,156,187,198,197,184,195,194,179,201,190,181,192,191,188,199,198,185,196,195,195,206,205,179,212,201,192,203,202,199,210,209,196,207,206,193,204,203,200,211,210,197,208,207,194,205,204,201,212,211,191,202,156,198,209,208,205,216,215,212,223,222,202,213,156,209,220,219,206,217,216,179,223,212,203,214,213,210,221,220,207,218,217,204,215,214,211,222,221,208,219,218,218,229,228,215,226,225,222,233,232,219,230,229,216,227,226,223,234,233,213,224,156,220,231,230,217,228,227,179,234,223,214,225,224,221,232,231,228,239,238,179,245,234,225,236,235,232,243,242,229,240,239,226,237,236,233,244,243,230,241,240,227,238,237,234,245,244,224,235,156,231,242,241,241,252,251,238,249,248,245,256,255,235,246,156,242,253,252,239,250,249,179,256,245,236,247,246,243,254,253,240,251,250,237,248,247,244,255,254,251,260,259,248,1,0,255,264,263,252,261,260,249,258,1,256,265,264,246,257,156,253,262,261,250,259,258,179,265,256,247,0,257,254,263,262,261,7,260,258,4,1,265,11,264,262,8,261,259,5,258,0,2,257,263,9,262,260,6,259,1,3,0,264,10,263,6,16,5,3,13,2,10,20,9,7,17,6,4,14,3,11,21,10,8,18,7,5,15,4,12,22,11,9,19,8,16,26,15,23,33,22,20,30,19,17,27,16,14,24,13,21,31,20,18,28,17,15,25,14,22,32,21,19,29,18,29,39,28,26,36,25,33,43,32,30,40,29,27,37,26,34,44,33,31,41,30,28,38,27,25,35,24,32,42,31,39,49,38,36,46,35,43,53,42,40,50,39,37,47,36,44,54,43,41,51,40,38,48,37,45,55,44,42,52,41,52,62,51,49,59,48,56,66,55,53,63,52,50,60,49,47,57,46,54,64,53,51,61,50,48,58,47,55,65,54,62,72,61,59,69,58,66,76,65,63,73,62,60,70,59,67,77,66,64,74,63,61,71,60,58,68,57,65,75,64,75,85,74,72,82,71,69,79,68,76,86,75,73,83,72,70,80,69,77,87,76,74,84,73,71,81,70,78,88,77,85,95,84,82,92,81,89,99,88,86,96,85,83,93,82,80,90,79,87,97,86,84,94,83,81,91,80,88,98,87,98,108,97,95,105,94,92,102,91,99,109,98,96,106,95,93,103,92,100,110,99,97,107,96,94,104,93,91,101,90,108,118,107,105,115,104,102,112,101,109,119,108,106,116,105,103,113,102,110,120,109,107,117,106,104,114,103,111,121,110,121,131,120,118,128,117,115,125,114,122,132,121,119,129,118,116,126,115,113,123,112,120,130,119,117,127,116,114,124,113,124,134,123,131,141,130,128,138,127,125,135,124,132,142,131,129,139,128,126,136,125,133,143,132,130,140,129,127,137,126,144,154,143,141,151,140,138,148,137,135,145,134,142,152,141,139,149,138,136,146,135,143,153,142,140,150,139,137,147,136,147,158,146,154,165,153,151,162,150,148,159,147,155,166,154,152,163,151,149,160,148,146,157,145,153,164,152,150,161,149,158,168,157,165,175,164,162,172,161,159,169,158,166,176,165,163,173,162,160,170,159,167,177,166,164,174,163,161,171,160,171,182,170,178,189,177,175,186,174,172,183,171,169,180,168,176,187,175,173,184,172,170,181,169,177,188,176,174,185,173,182,192,181,189,199,188,186,196,185,183,193,182,190,200,189,187,197,186,184,194,183,181,191,180,188,198,187,185,195,184,195,205,194,192,202,191,199,209,198,196,206,195,193,203,192,200,210,199,197,207,196,194,204,193,201,211,200,198,208,197,205,215,204,212,222,211,209,219,208,206,216,205,203,213,202,210,220,209,207,217,206,204,214,203,211,221,210,208,218,207,218,228,217,215,225,214,222,232,221,219,229,218,216,226,215,223,233,222,220,230,219,217,227,216,214,224,213,221,231,220,228,238,227,225,235,224,232,242,231,229,239,228,226,236,225,233,243,232,230,240,229,227,237,226,234,244,233,231,241,230,241,251,240,238,248,237,245,255,244,242,252,241,239,249,238,236,246,235,243,253,242,240,250,239,237,247,236,244,254,243,251,259,250,248,0,247,255,263,254,252,260,251,249,1,248,256,264,255,253,261,252,250,258,249,247,257,246,254,262,253];
iron_data_ConstData.skydomePos = [0.0,0.5,0.86603,0.0,0.70711,0.70711,0.06699,0.25,0.96593,0.12941,0.48296,0.86603,0.18301,0.68301,0.70711,0.22414,0.83652,0.5,0.25,0.93301,0.25882,0.25882,0.96593,-0.0,0.25,0.93301,-0.25882,0.22414,0.83652,-0.5,0.18301,0.68301,-0.70711,0.12941,0.48296,-0.86603,0.06699,0.25,-0.96593,0.12941,0.22414,0.96593,0.25,0.43301,0.86603,0.35355,0.61237,0.70711,0.43301,0.75,0.5,0.48296,0.83652,0.25882,0.5,0.86603,-0.0,0.48296,0.83652,-0.25882,0.43301,0.75,-0.5,0.35355,0.61237,-0.70711,0.25,0.43301,-0.86603,0.12941,0.22414,-0.96593,0.18301,0.18301,0.96593,0.35355,0.35355,0.86603,0.5,0.5,0.70711,0.61237,0.61237,0.5,0.68301,0.68301,0.25882,0.70711,0.70711,-0.0,0.68301,0.68301,-0.25882,0.61237,0.61237,-0.5,0.5,0.5,-0.70711,0.35355,0.35355,-0.86603,0.18301,0.18301,-0.96593,0.22414,0.12941,0.96593,0.43301,0.25,0.86603,0.61237,0.35355,0.70711,0.75,0.43301,0.5,0.83652,0.48296,0.25882,0.86603,0.5,-0.0,0.83652,0.48296,-0.25882,0.75,0.43301,-0.5,0.61237,0.35355,-0.70711,0.43301,0.25,-0.86603,0.22414,0.12941,-0.96593,0.25,0.06699,0.96593,0.48296,0.12941,0.86603,0.68301,0.18301,0.70711,0.83652,0.22414,0.5,0.93301,0.25,0.25882,0.96593,0.25882,-0.0,0.93301,0.25,-0.25882,0.83652,0.22414,-0.5,0.68301,0.18301,-0.70711,0.48296,0.12941,-0.86603,0.25,0.06699,-0.96593,0.25882,-0.0,0.96593,0.5,-0.0,0.86603,0.70711,-0.0,0.70711,0.86603,0.0,0.5,0.96593,-0.0,0.25882,1.0,-0.0,-0.0,0.96593,-0.0,-0.25882,0.86603,-0.0,-0.5,0.70711,-0.0,-0.70711,0.5,-0.0,-0.86603,0.25882,-0.0,-0.96593,0.25,-0.06699,0.96593,0.48296,-0.12941,0.86603,0.68301,-0.18301,0.70711,0.83652,-0.22414,0.5,0.93301,-0.25,0.25882,0.96593,-0.25882,-0.0,0.93301,-0.25,-0.25882,0.83652,-0.22414,-0.5,0.68301,-0.18301,-0.70711,0.48296,-0.12941,-0.86603,0.25,-0.06699,-0.96593,0.22414,-0.12941,0.96593,0.43301,-0.25,0.86603,0.61237,-0.35355,0.70711,0.75,-0.43301,0.5,0.83652,-0.48296,0.25882,0.86603,-0.5,-0.0,0.83652,-0.48296,-0.25882,0.75,-0.43301,-0.5,0.61237,-0.35355,-0.70711,0.43301,-0.25,-0.86603,0.22414,-0.12941,-0.96593,0.18301,-0.18301,0.96593,0.35355,-0.35355,0.86603,0.5,-0.5,0.70711,0.61237,-0.61237,0.5,0.68301,-0.68301,0.25882,0.70711,-0.70711,-0.0,0.68301,-0.68301,-0.25882,0.61237,-0.61237,-0.5,0.5,-0.5,-0.70711,0.35355,-0.35355,-0.86603,0.18301,-0.18301,-0.96593,0.12941,-0.22414,0.96593,0.25,-0.43301,0.86603,0.35355,-0.61237,0.70711,0.43301,-0.75,0.5,0.48296,-0.83652,0.25882,0.5,-0.86603,-0.0,0.48296,-0.83652,-0.25882,0.43301,-0.75,-0.5,0.35355,-0.61237,-0.70711,0.25,-0.43301,-0.86603,0.12941,-0.22414,-0.96593,0.06699,-0.25,0.96593,0.12941,-0.48296,0.86603,0.18301,-0.68301,0.70711,0.22414,-0.83652,0.5,0.25,-0.93301,0.25882,0.25882,-0.96593,-0.0,0.25,-0.93301,-0.25882,0.22414,-0.83652,-0.5,0.18301,-0.68301,-0.70711,0.12941,-0.48296,-0.86603,0.06699,-0.25,-0.96593,0.0,-0.25882,0.96593,-0.0,-0.5,0.86603,0.0,-0.70711,0.70711,0.0,-0.86603,0.5,0.0,-0.96593,0.25882,-0.0,-1.0,-0.0,0.0,-0.96593,-0.25882,0.0,-0.86603,-0.5,0.0,-0.70711,-0.70711,0.0,-0.5,-0.86603,0.0,-0.25882,-0.96593,-0.06699,-0.25,0.96593,-0.12941,-0.48296,0.86603,-0.18301,-0.68301,0.70711,-0.22414,-0.83652,0.5,-0.25,-0.93301,0.25882,-0.25882,-0.96593,-0.0,-0.25,-0.93301,-0.25882,-0.22414,-0.83652,-0.5,-0.18301,-0.68301,-0.70711,-0.12941,-0.48296,-0.86603,-0.06699,-0.25,-0.96593,-0.12941,-0.22414,0.96593,-0.25,-0.43301,0.86603,-0.35355,-0.61237,0.70711,-0.43301,-0.75,0.5,-0.48296,-0.83652,0.25882,-0.5,-0.86603,-0.0,-0.48296,-0.83652,-0.25882,-0.43301,-0.75,-0.5,-0.35355,-0.61237,-0.70711,-0.25,-0.43301,-0.86603,-0.12941,-0.22414,-0.96593,-0.0,-0.0,1.0,-0.18301,-0.18301,0.96593,-0.35355,-0.35355,0.86603,-0.5,-0.5,0.70711,-0.61237,-0.61237,0.5,-0.68301,-0.68301,0.25882,-0.70711,-0.70711,-0.0,-0.68301,-0.68301,-0.25882,-0.61237,-0.61237,-0.5,-0.5,-0.5,-0.70711,-0.35355,-0.35355,-0.86603,-0.18301,-0.18301,-0.96593,-0.22414,-0.12941,0.96593,-0.43301,-0.25,0.86603,-0.61237,-0.35355,0.70711,-0.75,-0.43301,0.5,-0.83652,-0.48296,0.25882,-0.86602,-0.5,-0.0,-0.83652,-0.48296,-0.25882,-0.75,-0.43301,-0.5,-0.61237,-0.35355,-0.70711,-0.43301,-0.25,-0.86603,-0.22414,-0.12941,-0.96593,0.0,-0.0,-1.0,-0.25,-0.06699,0.96593,-0.48296,-0.12941,0.86603,-0.68301,-0.18301,0.70711,-0.83652,-0.22414,0.5,-0.93301,-0.25,0.25882,-0.96593,-0.25882,-0.0,-0.93301,-0.25,-0.25882,-0.83652,-0.22414,-0.5,-0.68301,-0.18301,-0.70711,-0.48296,-0.12941,-0.86603,-0.25,-0.06699,-0.96593,-0.25882,-0.0,0.96593,-0.5,-0.0,0.86603,-0.70711,-0.0,0.70711,-0.86603,-0.0,0.5,-0.96593,-0.0,0.25882,-1.0,-0.0,-0.0,-0.96593,-0.0,-0.25882,-0.86603,-0.0,-0.5,-0.70711,-0.0,-0.70711,-0.5,-0.0,-0.86603,-0.25882,-0.0,-0.96593,-0.25,0.06699,0.96593,-0.48296,0.12941,0.86603,-0.68301,0.18301,0.70711,-0.83652,0.22414,0.5,-0.93301,0.25,0.25882,-0.96593,0.25882,-0.0,-0.93301,0.25,-0.25882,-0.83652,0.22414,-0.5,-0.68301,0.18301,-0.70711,-0.48296,0.12941,-0.86603,-0.25,0.06699,-0.96593,-0.22414,0.12941,0.96593,-0.43301,0.25,0.86603,-0.61237,0.35355,0.70711,-0.75,0.43301,0.5,-0.83652,0.48296,0.25882,-0.86602,0.5,-0.0,-0.83652,0.48296,-0.25882,-0.75,0.43301,-0.5,-0.61237,0.35355,-0.70711,-0.43301,0.25,-0.86603,-0.22414,0.12941,-0.96593,-0.18301,0.18301,0.96593,-0.35355,0.35355,0.86603,-0.5,0.5,0.70711,-0.61237,0.61237,0.5,-0.68301,0.68301,0.25882,-0.70711,0.70711,-0.0,-0.68301,0.68301,-0.25882,-0.61237,0.61237,-0.5,-0.5,0.5,-0.70711,-0.35355,0.35355,-0.86603,-0.18301,0.18301,-0.96593,-0.12941,0.22414,0.96593,-0.25,0.43301,0.86603,-0.35355,0.61237,0.70711,-0.43301,0.75,0.5,-0.48296,0.83652,0.25882,-0.5,0.86602,-0.0,-0.48296,0.83652,-0.25882,-0.43301,0.75,-0.5,-0.35355,0.61237,-0.70711,-0.25,0.43301,-0.86603,-0.12941,0.22414,-0.96593,-0.06699,0.25,0.96593,-0.12941,0.48296,0.86603,-0.18301,0.68301,0.70711,-0.22414,0.83652,0.5,-0.25,0.93301,0.25882,-0.25882,0.96593,-0.0,-0.25,0.93301,-0.25882,-0.22414,0.83652,-0.5,-0.18301,0.68301,-0.70711,-0.12941,0.48296,-0.86603,-0.06699,0.25,-0.96593,-0.0,0.25882,0.96593,-0.0,0.86603,0.5,-0.0,0.96593,0.25882,0.0,1.0,-0.0,-0.0,0.96593,-0.25882,-0.0,0.86603,-0.5,0.0,0.70711,-0.70711,0.0,0.5,-0.86603,-0.0,0.25882,-0.96593];
iron_data_ConstData.skydomeNor = [0.0,-0.50807,-0.86132,0.0,-0.71246,-0.70172,-0.0696,-0.25975,-0.96317,-0.1315,-0.49075,-0.86132,-0.1844,-0.68818,-0.70172,-0.22483,-0.83909,-0.49536,-0.25018,-0.9337,-0.25615,-0.25882,-0.96593,-0.0,-0.25018,-0.9337,0.25615,-0.22483,-0.83909,0.49536,-0.1844,-0.68818,0.70172,-0.1315,-0.49075,0.86132,-0.0696,-0.25975,0.96317,-0.13445,-0.23288,-0.96317,-0.25403,-0.44,-0.86132,-0.35623,-0.61701,-0.70172,-0.43434,-0.75231,-0.49536,-0.48332,-0.83713,-0.25615,-0.5,-0.86603,0.0,-0.48332,-0.83713,0.25615,-0.43434,-0.75231,0.49536,-0.35623,-0.61701,0.70172,-0.25403,-0.44,0.86132,-0.13445,-0.23288,0.96317,-0.19015,-0.19015,-0.96317,-0.35926,-0.35926,-0.86132,-0.50378,-0.50378,-0.70172,-0.61426,-0.61426,-0.49536,-0.68352,-0.68352,-0.25615,-0.70711,-0.70711,0.0,-0.68352,-0.68352,0.25615,-0.61426,-0.61426,0.49536,-0.50378,-0.50378,0.70172,-0.35926,-0.35926,0.86132,-0.19015,-0.19015,0.96317,-0.23288,-0.13445,-0.96317,-0.44,-0.25403,-0.86132,-0.61701,-0.35623,-0.70172,-0.75231,-0.43434,-0.49536,-0.83713,-0.48332,-0.25615,-0.86603,-0.5,0.0,-0.83713,-0.48332,0.25615,-0.75231,-0.43434,0.49536,-0.61701,-0.35623,0.70172,-0.44,-0.25403,0.86132,-0.23288,-0.13445,0.96317,-0.25975,-0.0696,-0.96317,-0.49075,-0.1315,-0.86132,-0.68818,-0.1844,-0.70172,-0.83909,-0.22483,-0.49536,-0.9337,-0.25018,-0.25615,-0.96593,-0.25882,0.0,-0.9337,-0.25018,0.25615,-0.83909,-0.22483,0.49536,-0.68818,-0.1844,0.70172,-0.49075,-0.1315,0.86132,-0.25975,-0.0696,0.96317,-0.26891,-0.0,-0.96317,-0.50807,0.0,-0.86132,-0.71246,0.0,-0.70172,-0.86869,-0.0,-0.49536,-0.96664,0.0,-0.25615,-1.0,0.0,0.0,-0.96664,0.0,0.25615,-0.86869,0.0,0.49536,-0.71246,0.0,0.70172,-0.50807,0.0,0.86132,-0.26891,-0.0,0.96317,-0.25975,0.0696,-0.96317,-0.49075,0.1315,-0.86132,-0.68818,0.1844,-0.70172,-0.83909,0.22483,-0.49536,-0.9337,0.25018,-0.25615,-0.96593,0.25882,0.0,-0.9337,0.25018,0.25615,-0.83909,0.22483,0.49536,-0.68818,0.1844,0.70172,-0.49075,0.1315,0.86132,-0.25975,0.0696,0.96317,-0.23288,0.13445,-0.96317,-0.44,0.25403,-0.86132,-0.61701,0.35623,-0.70172,-0.75231,0.43434,-0.49536,-0.83713,0.48332,-0.25615,-0.86603,0.5,0.0,-0.83713,0.48332,0.25615,-0.75231,0.43434,0.49536,-0.61701,0.35623,0.70172,-0.44,0.25403,0.86132,-0.23288,0.13445,0.96317,-0.19015,0.19015,-0.96317,-0.35926,0.35926,-0.86132,-0.50378,0.50378,-0.70172,-0.61426,0.61426,-0.49536,-0.68352,0.68352,-0.25615,-0.70711,0.70711,0.0,-0.68352,0.68352,0.25615,-0.61426,0.61426,0.49536,-0.50378,0.50378,0.70172,-0.35926,0.35926,0.86132,-0.19015,0.19015,0.96317,-0.13445,0.23288,-0.96317,-0.25403,0.44,-0.86132,-0.35623,0.61701,-0.70172,-0.43434,0.75231,-0.49536,-0.48332,0.83713,-0.25615,-0.5,0.86603,0.0,-0.48332,0.83713,0.25615,-0.43434,0.75231,0.49536,-0.35623,0.61701,0.70172,-0.25403,0.44,0.86132,-0.13445,0.23288,0.96317,-0.0696,0.25975,-0.96317,-0.1315,0.49075,-0.86132,-0.1844,0.68818,-0.70172,-0.22483,0.83909,-0.49536,-0.25018,0.9337,-0.25615,-0.25882,0.96593,0.0,-0.25018,0.9337,0.25615,-0.22483,0.83909,0.49536,-0.1844,0.68818,0.70172,-0.1315,0.49075,0.86132,-0.0696,0.25975,0.96317,-0.0,0.26891,-0.96317,0.0,0.50807,-0.86132,0.0,0.71246,-0.70172,-0.0,0.86869,-0.49536,0.0,0.96664,-0.25615,0.0,1.0,0.0,-0.0,0.96664,0.25615,0.0,0.86869,0.49536,0.0,0.71246,0.70172,0.0,0.50807,0.86132,0.0,0.26891,0.96317,0.0696,0.25975,-0.96317,0.1315,0.49075,-0.86132,0.1844,0.68818,-0.70172,0.22483,0.83909,-0.49536,0.25018,0.9337,-0.25615,0.25882,0.96593,0.0,0.25018,0.9337,0.25615,0.22483,0.83909,0.49536,0.1844,0.68818,0.70172,0.1315,0.49075,0.86132,0.0696,0.25975,0.96317,0.13445,0.23288,-0.96317,0.25403,0.44,-0.86132,0.35623,0.61701,-0.70172,0.43434,0.75231,-0.49536,0.48332,0.83713,-0.25615,0.5,0.86603,0.0,0.48332,0.83713,0.25615,0.43434,0.75231,0.49536,0.35623,0.61701,0.70172,0.25403,0.44,0.86132,0.13445,0.23288,0.96317,0.0,0.0,-1.0,0.19015,0.19015,-0.96317,0.35926,0.35926,-0.86132,0.50378,0.50378,-0.70172,0.61426,0.61426,-0.49536,0.68352,0.68352,-0.25615,0.70711,0.70711,0.0,0.68352,0.68352,0.25615,0.61426,0.61426,0.49536,0.50378,0.50378,0.70172,0.35926,0.35926,0.86132,0.19015,0.19015,0.96317,0.23288,0.13445,-0.96317,0.44,0.25403,-0.86132,0.61701,0.35623,-0.70172,0.75231,0.43434,-0.49536,0.83713,0.48332,-0.25615,0.86603,0.5,0.0,0.83713,0.48332,0.25615,0.75231,0.43434,0.49536,0.61701,0.35623,0.70172,0.44,0.25403,0.86132,0.23288,0.13445,0.96317,0.0,-0.0,1.0,0.25975,0.0696,-0.96317,0.49075,0.1315,-0.86132,0.68818,0.1844,-0.70172,0.83909,0.22483,-0.49536,0.9337,0.25018,-0.25615,0.96593,0.25882,0.0,0.9337,0.25018,0.25615,0.83909,0.22483,0.49536,0.68818,0.1844,0.70172,0.49075,0.1315,0.86132,0.25975,0.0696,0.96317,0.26891,-0.0,-0.96317,0.50807,-0.0,-0.86132,0.71246,0.0,-0.70172,0.86869,0.0,-0.49536,0.96664,-0.0,-0.25615,1.0,-0.0,0.0,0.96664,0.0,0.25615,0.86869,0.0,0.49536,0.71246,-0.0,0.70172,0.50807,0.0,0.86132,0.26891,-0.0,0.96317,0.25975,-0.0696,-0.96317,0.49075,-0.1315,-0.86132,0.68818,-0.1844,-0.70172,0.83909,-0.22483,-0.49536,0.9337,-0.25018,-0.25615,0.96593,-0.25882,0.0,0.9337,-0.25018,0.25615,0.83909,-0.22483,0.49536,0.68818,-0.1844,0.70172,0.49075,-0.1315,0.86132,0.25975,-0.0696,0.96317,0.23288,-0.13445,-0.96317,0.44,-0.25403,-0.86132,0.61701,-0.35623,-0.70172,0.75231,-0.43434,-0.49536,0.83713,-0.48332,-0.25615,0.86603,-0.5,0.0,0.83713,-0.48332,0.25615,0.75231,-0.43434,0.49536,0.617,-0.35623,0.70172,0.44,-0.25403,0.86132,0.23288,-0.13445,0.96317,0.19015,-0.19015,-0.96317,0.35926,-0.35926,-0.86132,0.50378,-0.50378,-0.70172,0.61426,-0.61426,-0.49536,0.68352,-0.68352,-0.25615,0.70711,-0.70711,-0.0,0.68352,-0.68352,0.25615,0.61426,-0.61426,0.49536,0.50378,-0.50378,0.70172,0.35926,-0.35926,0.86132,0.19015,-0.19015,0.96317,0.13445,-0.23288,-0.96317,0.25403,-0.44,-0.86132,0.35623,-0.61701,-0.70172,0.43434,-0.75231,-0.49536,0.48332,-0.83713,-0.25615,0.5,-0.86603,0.0,0.48332,-0.83713,0.25615,0.43434,-0.75231,0.49536,0.35623,-0.617,0.70172,0.25403,-0.44,0.86132,0.13445,-0.23288,0.96317,0.0696,-0.25975,-0.96317,0.1315,-0.49075,-0.86132,0.1844,-0.68818,-0.70172,0.22483,-0.83909,-0.49536,0.25018,-0.9337,-0.25615,0.25882,-0.96593,0.0,0.25018,-0.9337,0.25615,0.22483,-0.83909,0.49536,0.1844,-0.68818,0.70172,0.1315,-0.49075,0.86132,0.0696,-0.25975,0.96317,0.0,-0.26891,-0.96317,0.0,-0.86869,-0.49536,0.0,-0.96664,-0.25615,0.0,-1.0,-0.0,0.0,-0.96664,0.25615,0.0,-0.86869,0.49536,0.0,-0.71246,0.70172,0.0,-0.50807,0.86132,0.0,-0.26891,0.96317];
iron_data_Data.cachedSceneRaws = new haxe_ds_StringMap();
iron_data_Data.cachedMeshes = new haxe_ds_StringMap();
iron_data_Data.cachedLights = new haxe_ds_StringMap();
iron_data_Data.cachedCameras = new haxe_ds_StringMap();
iron_data_Data.cachedMaterials = new haxe_ds_StringMap();
iron_data_Data.cachedParticles = new haxe_ds_StringMap();
iron_data_Data.cachedWorlds = new haxe_ds_StringMap();
iron_data_Data.cachedShaders = new haxe_ds_StringMap();
iron_data_Data.cachedBlobs = new haxe_ds_StringMap();
iron_data_Data.cachedImages = new haxe_ds_StringMap();
iron_data_Data.cachedSounds = new haxe_ds_StringMap();
iron_data_Data.assetsLoaded = 0;
iron_data_Data.loadingMeshes = new haxe_ds_StringMap();
iron_data_Data.loadingLights = new haxe_ds_StringMap();
iron_data_Data.loadingCameras = new haxe_ds_StringMap();
iron_data_Data.loadingMaterials = new haxe_ds_StringMap();
iron_data_Data.loadingParticles = new haxe_ds_StringMap();
iron_data_Data.loadingWorlds = new haxe_ds_StringMap();
iron_data_Data.loadingShaders = new haxe_ds_StringMap();
iron_data_Data.loadingSceneRaws = new haxe_ds_StringMap();
iron_data_Data.loadingBlobs = new haxe_ds_StringMap();
iron_data_Data.loadingImages = new haxe_ds_StringMap();
iron_data_Data.loadingSounds = new haxe_ds_StringMap();
iron_data_MaterialData.uidCounter = 0;
iron_data_MaterialContext.num = 0;
iron_math_Mat4.helpVec = new iron_math_Vec4();
iron_math_Mat4.helpMat = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Animation.m1 = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Animation.m2 = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Animation.vpos = new iron_math_Vec4();
iron_object_Animation.vpos2 = new iron_math_Vec4();
iron_object_Animation.vscl = new iron_math_Vec4();
iron_object_Animation.vscl2 = new iron_math_Vec4();
iron_object_Animation.q1 = new iron_math_Quat();
iron_object_Animation.q2 = new iron_math_Quat();
iron_object_Animation.q3 = new iron_math_Quat();
iron_object_Animation.vp = new iron_math_Vec4();
iron_object_Animation.vs = new iron_math_Vec4();
iron_object_BoneAnimation.skinMaxBones = 128;
iron_object_BoneAnimation.m = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_BoneAnimation.m1 = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_BoneAnimation.m2 = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_BoneAnimation.vpos = new iron_math_Vec4();
iron_object_BoneAnimation.vscl = new iron_math_Vec4();
iron_object_BoneAnimation.q1 = new iron_math_Quat();
iron_object_BoneAnimation.q2 = new iron_math_Quat();
iron_object_BoneAnimation.q3 = new iron_math_Quat();
iron_object_BoneAnimation.vpos2 = new iron_math_Vec4();
iron_object_BoneAnimation.vscl2 = new iron_math_Vec4();
iron_object_BoneAnimation.v1 = new iron_math_Vec4();
iron_object_BoneAnimation.v2 = new iron_math_Vec4();
iron_object_Object.uidCounter = 0;
iron_object_Object.seed = 1;
iron_object_CameraObject.temp = new iron_math_Vec4();
iron_object_CameraObject.sphereCenter = new iron_math_Vec4();
iron_object_CameraObject.vcenter = new iron_math_Vec4();
iron_object_CameraObject.vup = new iron_math_Vec4();
iron_object_LightObject.cascadeCount = 1;
iron_object_LightObject.cascadeSplitFactor = 0.8;
iron_object_LightObject.cascadeBounds = 1.0;
iron_object_LightObject.m = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_LightObject.eye = new iron_math_Vec4();
iron_object_Transform.temp = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Transform.q = new iron_math_Quat();
iron_object_Uniforms.biasMat = new iron_math_Mat4(0.5,0.0,0.0,0.5,0.0,0.5,0.0,0.5,0.0,0.0,0.5,0.5,0.0,0.0,0.0,1.0);
iron_object_Uniforms.helpMat = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Uniforms.helpMat2 = new iron_math_Mat4(1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,1.0);
iron_object_Uniforms.helpMat3 = new iron_math_Mat3(1,0,0,0,1,0,0,0,1);
iron_object_Uniforms.helpVec = new iron_math_Vec4();
iron_object_Uniforms.helpVec2 = new iron_math_Vec4();
iron_object_Uniforms.helpQuat = new iron_math_Quat();
iron_object_Uniforms.defaultFilter = 1;
iron_system_Input.occupied = false;
iron_system_Input.gamepads = [];
iron_system_Input.registered = false;
iron_system_Mouse.buttons = ["left","right","middle"];
iron_system_Keyboard.keys = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","space","backspace","tab","enter","shift","control","alt","win","escape","delete","up","down","left","right","back",",",".",":",";","<","=",">","?","!","\"","#","$","%","&","_","(",")","*","|","{","}","[","]","~","`","/","\\","@","+","-","f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"];
iron_system_Gamepad.buttonsPS = ["cross","circle","square","triangle","l1","r1","l2","r2","share","options","l3","r3","up","down","left","right","home","touchpad"];
iron_system_Gamepad.buttons = iron_system_Gamepad.buttonsPS;
iron_system_Time.scale = 1.0;
iron_system_Time.last = 0.0;
iron_system_Time.realDelta = 0.0;
kha_Display.instance = new kha_Display();
kha_LoaderImpl.dropFiles = new haxe_ds_StringMap();
kha_Scheduler.DIF_COUNT = 3;
kha_Scheduler.maxframetime = 0.5;
kha_Scheduler.startTime = 0;
kha_Shaders.Checker_mesh_fragData0 = "s2360:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKaW4gaGlnaHAgdmVjMyB3bm9ybWFsOwppbiBoaWdocCB2ZWMzIGJwb3NpdGlvbjsKb3V0IGhpZ2hwIHZlYzQgZnJhZ0NvbG9yWzJdOwoKaGlnaHAgdmVjMyB0ZXhfY2hlY2tlcihoaWdocCB2ZWMzIGNvLCBoaWdocCB2ZWMzIGNvbDEsIGhpZ2hwIHZlYzMgY29sMiwgaGlnaHAgZmxvYXQgc2NhbGUpCnsKICAgIGhpZ2hwIHZlYzMgcCA9IChjbyArIHZlYzMoOS45OTk5ODk3NDI5MzcwMzIxMzMzNDA4MzU1NzEyODkxZS0wNykpICogc2NhbGU7CiAgICBoaWdocCBmbG9hdCB4aSA9IGFicyhmbG9vcihwLngpKTsKICAgIGhpZ2hwIGZsb2F0IHlpID0gYWJzKGZsb29yKHAueSkpOwogICAgaGlnaHAgZmxvYXQgemkgPSBhYnMoZmxvb3IocC56KSk7CiAgICBib29sIGNoZWNrID0gKG1vZCh4aSwgMi4wKSA9PSBtb2QoeWksIDIuMCkpID09IChtb2QoemksIDIuMCkgIT0gMC4wKTsKICAgIGJ2ZWMzIF8xMDQgPSBidmVjMyhjaGVjayk7CiAgICByZXR1cm4gdmVjMyhfMTA0LnggPyBjb2wxLnggOiBjb2wyLngsIF8xMDQueSA:IGNvbDEueSA6IGNvbDIueSwgXzEwNC56ID8gY29sMS56IDogY29sMi56KTsKfQoKaGlnaHAgdmVjMiBvY3RhaGVkcm9uV3JhcChoaWdocCB2ZWMyIHYpCnsKICAgIHJldHVybiAodmVjMigxLjApIC0gYWJzKHYueXgpKSAqIHZlYzIoKHYueCA%PSAwLjApID8gMS4wIDogKC0xLjApLCAodi55ID49IDAuMCkgPyAxLjAgOiAoLTEuMCkpOwp9CgpoaWdocCBmbG9hdCBwYWNrRmxvYXRJbnQxNihoaWdocCBmbG9hdCBmLCB1aW50IGkpCnsKICAgIHJldHVybiAoMC4wNjI0ODU2OTQ4ODUyNTM5MDYyNSAqIGYpICsgKDAuMDYyNTAwOTUzNjc0MzE2NDA2MjUgKiBmbG9hdChpKSk7Cn0KCmhpZ2hwIGZsb2F0IHBhY2tGbG9hdDIoaGlnaHAgZmxvYXQgZjEsIGhpZ2hwIGZsb2F0IGYyKQp7CiAgICByZXR1cm4gZmxvb3IoZjEgKiAyNTUuMCkgKyBtaW4oZjIsIDAuOTkwMDAwMDA5NTM2NzQzMTY0MDYyNSk7Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzMgbiA9IG5vcm1hbGl6ZSh3bm9ybWFsKTsKICAgIGhpZ2hwIHZlYzMgQ2hlY2tlclRleHR1cmVfQ29sb3JfcmVzID0gdGV4X2NoZWNrZXIoYnBvc2l0aW9uLCB2ZWMzKDAuODAwMDAwMDExOTIwOTI4OTU1MDc4MTI1KSwgdmVjMygwLjIwMDAwMDAwMjk4MDIzMjIzODc2OTUzMTI1KSwgMzIuMCk7CiAgICBoaWdocCB2ZWMzIGJhc2Vjb2wgPSBDaGVja2VyVGV4dHVyZV9Db2xvcl9yZXM7CiAgICBoaWdocCBmbG9hdCByb3VnaG5lc3MgPSAwLjU7CiAgICBoaWdocCBmbG9hdCBtZXRhbGxpYyA9IDAuMDsKICAgIGhpZ2hwIGZsb2F0IG9jY2x1c2lvbiA9IDEuMDsKICAgIGhpZ2hwIGZsb2F0IHNwZWN1bGFyID0gMC41OwogICAgbiAvPSB2ZWMzKChhYnMobi54KSArIGFicyhuLnkpKSArIGFicyhuLnopKTsKICAgIGhpZ2hwIHZlYzIgXzE0NzsKICAgIGlmIChuLnogPj0gMC4wKQogICAgewogICAgICAgIF8xNDcgPSBuLnh5OwogICAgfQogICAgZWxzZQogICAgewogICAgICAgIF8xNDcgPSBvY3RhaGVkcm9uV3JhcChuLnh5KTsKICAgIH0KICAgIG4gPSB2ZWMzKF8xNDcueCwgXzE0Ny55LCBuLnopOwogICAgZnJhZ0NvbG9yWzBdID0gdmVjNChuLnh5LCByb3VnaG5lc3MsIHBhY2tGbG9hdEludDE2KG1ldGFsbGljLCAwdSkpOwogICAgZnJhZ0NvbG9yWzFdID0gdmVjNChiYXNlY29sLCBwYWNrRmxvYXQyKG9jY2x1c2lvbiwgc3BlY3VsYXIpKTsKfQoK";
kha_Shaders.Checker_mesh_vertData0 = "s730:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDMgTjsKdW5pZm9ybSBmbG9hdCBwb3NVbnBhY2s7CnVuaWZvcm0gdmVjMyBoZGltOwp1bmlmb3JtIHZlYzMgZGltOwp1bmlmb3JtIG1hdDQgV1ZQOwoKaW4gdmVjNCBwb3M7Cm91dCB2ZWMzIHdub3JtYWw7CmluIHZlYzIgbm9yOwpvdXQgdmVjMyBicG9zaXRpb247Cgp2b2lkIG1haW4oKQp7CiAgICB2ZWM0IHNwb3MgPSB2ZWM0KHBvcy54eXosIDEuMCk7CiAgICB3bm9ybWFsID0gbm9ybWFsaXplKE4gKiB2ZWMzKG5vciwgcG9zLncpKTsKICAgIGJwb3NpdGlvbiA9ICgoc3Bvcy54eXogKiBwb3NVbnBhY2spICsgaGRpbSkgLyBkaW07CiAgICBpZiAoZGltLnogPT0gMC4wKQogICAgewogICAgICAgIGJwb3NpdGlvbi56ID0gMC4wOwogICAgfQogICAgaWYgKGRpbS55ID09IDAuMCkKICAgIHsKICAgICAgICBicG9zaXRpb24ueSA9IDAuMDsKICAgIH0KICAgIGlmIChkaW0ueCA9PSAwLjApCiAgICB7CiAgICAgICAgYnBvc2l0aW9uLnggPSAwLjA7CiAgICB9CiAgICBnbF9Qb3NpdGlvbiA9IFdWUCAqIHNwb3M7Cn0KCg";
kha_Shaders.Checker_shadowmap_fragData0 = "s107:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdm9pZCBtYWluKCkKewp9Cgo";
kha_Shaders.Checker_shadowmap_vertData0 = "s180:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgTFdWUDsKCmluIHZlYzQgcG9zOwoKdm9pZCBtYWluKCkKewogICAgdmVjNCBzcG9zID0gdmVjNChwb3MueHl6LCAxLjApOwogICAgZ2xfUG9zaXRpb24gPSBMV1ZQICogc3BvczsKfQoK";
kha_Shaders.Material_mesh_fragData0 = "s1490:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKaW4gaGlnaHAgdmVjMyB3bm9ybWFsOwpvdXQgaGlnaHAgdmVjNCBmcmFnQ29sb3JbMl07CgpoaWdocCB2ZWMyIG9jdGFoZWRyb25XcmFwKGhpZ2hwIHZlYzIgdikKewogICAgcmV0dXJuICh2ZWMyKDEuMCkgLSBhYnModi55eCkpICogdmVjMigodi54ID49IDAuMCkgPyAxLjAgOiAoLTEuMCksICh2LnkgPj0gMC4wKSA:IDEuMCA6ICgtMS4wKSk7Cn0KCmhpZ2hwIGZsb2F0IHBhY2tGbG9hdEludDE2KGhpZ2hwIGZsb2F0IGYsIHVpbnQgaSkKewogICAgcmV0dXJuICgwLjA2MjQ4NTY5NDg4NTI1MzkwNjI1ICogZikgKyAoMC4wNjI1MDA5NTM2NzQzMTY0MDYyNSAqIGZsb2F0KGkpKTsKfQoKaGlnaHAgZmxvYXQgcGFja0Zsb2F0MihoaWdocCBmbG9hdCBmMSwgaGlnaHAgZmxvYXQgZjIpCnsKICAgIHJldHVybiBmbG9vcihmMSAqIDI1NS4wKSArIG1pbihmMiwgMC45OTAwMDAwMDk1MzY3NDMxNjQwNjI1KTsKfQoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjMyBuID0gbm9ybWFsaXplKHdub3JtYWwpOwogICAgaGlnaHAgdmVjMyBiYXNlY29sID0gdmVjMygwLjgwMDAwMDAxMTkyMDkyODk1NTA3ODEyNSk7CiAgICBoaWdocCBmbG9hdCByb3VnaG5lc3MgPSAwLjA7CiAgICBoaWdocCBmbG9hdCBtZXRhbGxpYyA9IDAuMDsKICAgIGhpZ2hwIGZsb2F0IG9jY2x1c2lvbiA9IDEuMDsKICAgIGhpZ2hwIGZsb2F0IHNwZWN1bGFyID0gMC4wOwogICAgbiAvPSB2ZWMzKChhYnMobi54KSArIGFicyhuLnkpKSArIGFicyhuLnopKTsKICAgIGhpZ2hwIHZlYzIgXzkzOwogICAgaWYgKG4ueiA%PSAwLjApCiAgICB7CiAgICAgICAgXzkzID0gbi54eTsKICAgIH0KICAgIGVsc2UKICAgIHsKICAgICAgICBfOTMgPSBvY3RhaGVkcm9uV3JhcChuLnh5KTsKICAgIH0KICAgIG4gPSB2ZWMzKF85My54LCBfOTMueSwgbi56KTsKICAgIGZyYWdDb2xvclswXSA9IHZlYzQobi54eSwgcm91Z2huZXNzLCBwYWNrRmxvYXRJbnQxNihtZXRhbGxpYywgMHUpKTsKICAgIGZyYWdDb2xvclsxXSA9IHZlYzQoYmFzZWNvbCwgcGFja0Zsb2F0MihvY2NsdXNpb24sIHNwZWN1bGFyKSk7Cn0KCg";
kha_Shaders.Material_mesh_vertData0 = "s303:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDMgTjsKdW5pZm9ybSBtYXQ0IFdWUDsKCmluIHZlYzQgcG9zOwpvdXQgdmVjMyB3bm9ybWFsOwppbiB2ZWMyIG5vcjsKCnZvaWQgbWFpbigpCnsKICAgIHZlYzQgc3BvcyA9IHZlYzQocG9zLnh5eiwgMS4wKTsKICAgIHdub3JtYWwgPSBub3JtYWxpemUoTiAqIHZlYzMobm9yLCBwb3MudykpOwogICAgZ2xfUG9zaXRpb24gPSBXVlAgKiBzcG9zOwp9Cgo";
kha_Shaders.Particle_armtile_armpart_blend_fragData0 = "s1400:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgSW1hZ2VUZXh0dXJlOwoKaW4gaGlnaHAgdmVjMyB3bm9ybWFsOwppbiBoaWdocCB2ZWMyIHRleENvb3JkOwpvdXQgaGlnaHAgdmVjNCBmcmFnQ29sb3JbMV07CmluIGhpZ2hwIGZsb2F0IHBfZmFkZTsKCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzMgbiA9IG5vcm1hbGl6ZSh3bm9ybWFsKTsKICAgIGhpZ2hwIHZlYzQgSW1hZ2VUZXh0dXJlX3RleHJlYWRfc3RvcmUgPSB0ZXh0dXJlKEltYWdlVGV4dHVyZSwgdGV4Q29vcmQpOwogICAgaGlnaHAgdmVjMyBfMzEgPSBwb3coSW1hZ2VUZXh0dXJlX3RleHJlYWRfc3RvcmUueHl6LCB2ZWMzKDIuMjAwMDAwMDQ3NjgzNzE1ODIwMzEyNSkpOwogICAgSW1hZ2VUZXh0dXJlX3RleHJlYWRfc3RvcmUgPSB2ZWM0KF8zMS54LCBfMzEueSwgXzMxLnosIEltYWdlVGV4dHVyZV90ZXhyZWFkX3N0b3JlLncpOwogICAgaGlnaHAgdmVjMyBJbWFnZVRleHR1cmVfQ29sb3JfcmVzID0gSW1hZ2VUZXh0dXJlX3RleHJlYWRfc3RvcmUueHl6OwogICAgaGlnaHAgdmVjMyBiYXNlY29sID0gSW1hZ2VUZXh0dXJlX0NvbG9yX3JlczsKICAgIGhpZ2hwIGZsb2F0IHJvdWdobmVzcyA9IDEuMDsKICAgIGhpZ2hwIGZsb2F0IG1ldGFsbGljID0gMC4wOwogICAgaGlnaHAgZmxvYXQgb2NjbHVzaW9uID0gMS4wOwogICAgaGlnaHAgZmxvYXQgc3BlY3VsYXIgPSAxLjA7CiAgICBoaWdocCBmbG9hdCBvcGFjaXR5ID0gMC45OTk4MDAwMjY0MTY3Nzg1NjQ0NTMxMjU7CiAgICBpZiAob3BhY2l0eSA8IDAuMjAwMDAwMDAyOTgwMjMyMjM4NzY5NTMxMjUpCiAgICB7CiAgICAgICAgZGlzY2FyZDsKICAgIH0KICAgIGZyYWdDb2xvclswXSA9IHZlYzQoYmFzZWNvbCwgb3BhY2l0eSk7CiAgICBoaWdocCB2ZWMzIF83NiA9IGZyYWdDb2xvclswXS54eXogKiBwX2ZhZGU7CiAgICBmcmFnQ29sb3JbMF0gPSB2ZWM0KF83Ni54LCBfNzYueSwgXzc2LnosIGZyYWdDb2xvclswXS53KTsKfQoK";
kha_Shaders.Particle_armtile_armpart_blend_vertData0 = "s2659:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDMgTjsKdW5pZm9ybSBtYXQ0IHBkOwp1bmlmb3JtIG1hdDQgUDsKdW5pZm9ybSBtYXQ0IFdWOwp1bmlmb3JtIGZsb2F0IHRleFVucGFjazsKCmluIHZlYzQgcG9zOwpvdXQgdmVjMyB3bm9ybWFsOwppbiB2ZWMyIG5vcjsKaW4gdmVjMyBpcG9zOwpvdXQgZmxvYXQgcF9mYWRlOwpvdXQgdmVjMiB0ZXhDb29yZDsKaW4gdmVjMiB0ZXg7CgpmbG9hdCBmaGFzaChmbG9hdCBuKQp7CiAgICByZXR1cm4gZnJhY3Qoc2luKG4pICogNDM3NTguNTQ2ODc1KTsKfQoKdm9pZCBtYWluKCkKewogICAgdmVjNCBzcG9zID0gdmVjNChwb3MueHl6LCAxLjApOwogICAgd25vcm1hbCA9IG5vcm1hbGl6ZShOICogdmVjMyhub3IsIHBvcy53KSk7CiAgICB2ZWMzIF81NyA9IHNwb3MueHl6ICsgaXBvczsKICAgIHNwb3MgPSB2ZWM0KF81Ny54LCBfNTcueSwgXzU3LnosIHNwb3Mudyk7CiAgICBmbG9hdCBwX2FnZSA9IHBkWzNdLncgLSAoZmxvYXQoZ2xfSW5zdGFuY2VJRCkgKiBwZFswXS55KTsKICAgIGZsb2F0IHBhcmFtID0gZmxvYXQoZ2xfSW5zdGFuY2VJRCk7CiAgICBwX2FnZSAtPSAoKHBfYWdlICogZmhhc2gocGFyYW0pKSAqIHBkWzJdLncpOwogICAgaWYgKChwZFswXS54ID4gMC4wKSAmJiAocF9hZ2UgPCAwLjApKQogICAgewogICAgICAgIHBfYWdlICs9IChmbG9hdChpbnQoKC1wX2FnZSkgLyBwZFswXS54KSArIDEpICogcGRbMF0ueCk7CiAgICB9CiAgICBmbG9hdCBwX2xpZmV0aW1lID0gcGRbMF0uejsKICAgIGlmICgocF9hZ2UgPCAwLjApIHx8IChwX2FnZSA%IHBfbGlmZXRpbWUpKQogICAgewogICAgICAgIGdsX1Bvc2l0aW9uIC89IHZlYzQoMC4wKTsKICAgICAgICByZXR1cm47CiAgICB9CiAgICB2ZWMzIHBfdmVsb2NpdHkgPSB2ZWMzKHBkWzFdLngsIHBkWzFdLnksIHBkWzFdLnopOwogICAgZmxvYXQgcGFyYW1fMSA9IGZsb2F0KGdsX0luc3RhbmNlSUQpOwogICAgcF92ZWxvY2l0eS54ICs9ICgoZmhhc2gocGFyYW1fMSkgKiBwZFsxXS53KSAtIChwZFsxXS53IC8gMi4wKSk7CiAgICBmbG9hdCBwYXJhbV8yID0gZmxvYXQoZ2xfSW5zdGFuY2VJRCkgKyBwZFswXS53OwogICAgcF92ZWxvY2l0eS55ICs9ICgoZmhhc2gocGFyYW1fMikgKiBwZFsxXS53KSAtIChwZFsxXS53IC8gMi4wKSk7CiAgICBmbG9hdCBwYXJhbV8zID0gZmxvYXQoZ2xfSW5zdGFuY2VJRCkgKyAoMi4wICogcGRbMF0udyk7CiAgICBwX3ZlbG9jaXR5LnogKz0gKChmaGFzaChwYXJhbV8zKSAqIHBkWzFdLncpIC0gKHBkWzFdLncgLyAyLjApKTsKICAgIHBfdmVsb2NpdHkueCArPSAoKHBkWzJdLnggKiBwX2FnZSkgLyA1LjApOwogICAgcF92ZWxvY2l0eS55ICs9ICgocGRbMl0ueSAqIHBfYWdlKSAvIDUuMCk7CiAgICBwX3ZlbG9jaXR5LnogKz0gKChwZFsyXS56ICogcF9hZ2UpIC8gNS4wKTsKICAgIHZlYzMgcF9sb2NhdGlvbiA9IHBfdmVsb2NpdHkgKiBwX2FnZTsKICAgIHZlYzMgXzIzNiA9IHNwb3MueHl6ICsgcF9sb2NhdGlvbjsKICAgIHNwb3MgPSB2ZWM0KF8yMzYueCwgXzIzNi55LCBfMjM2LnosIHNwb3Mudyk7CiAgICBwX2ZhZGUgPSBzaW4obWluKChwX2FnZSAvIDIuMCkgKiAzLjE0MTU5MjAyNTc1NjgzNTkzNzUsIDMuMTQxNTkyMDI1NzU2ODM1OTM3NSkpOwogICAgZ2xfUG9zaXRpb24gPSBQICogKChXViAqIHZlYzQoMC4wLCAwLjAsIHNwb3MueiwgMS4wKSkgKyB2ZWM0KHNwb3MueCwgc3Bvcy55LCAwLjAsIDAuMCkpOwogICAgaW50IGZyYW1lID0gaW50KHBfYWdlIC8gcGRbM10ueik7CiAgICBpbnQgdHggPSBmcmFtZSAlIGludChwZFszXS54KTsKICAgIGludCB0eSA9IGludChmbG9hdChmcmFtZSkgLyBwZFszXS54KTsKICAgIHZlYzIgdGlsZXNoZWV0T2Zmc2V0ID0gdmVjMihmbG9hdCh0eCkgKiAoMS4wIC8gcGRbM10ueCksIGZsb2F0KHR5KSAqICgxLjAgLyBwZFszXS55KSk7CiAgICB0ZXhDb29yZCA9ICh0ZXggKiB0ZXhVbnBhY2spICsgdGlsZXNoZWV0T2Zmc2V0Owp9Cgo";
kha_Shaders.World_World_fragData0 = "s5560:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgbmlzaGl0YUxVVDsKdW5pZm9ybSBoaWdocCB2ZWMyIG5pc2hpdGFEZW5zaXR5Owp1bmlmb3JtIGhpZ2hwIHZlYzMgc3VuRGlyOwp1bmlmb3JtIGhpZ2hwIGZsb2F0IGVudm1hcFN0cmVuZ3RoOwoKaW4gaGlnaHAgdmVjMyBub3JtYWw7Cm91dCBoaWdocCB2ZWM0IGZyYWdDb2xvcjsKCmhpZ2hwIHZlYzIgbmlzaGl0YV9yc2koaGlnaHAgdmVjMyByMCwgaGlnaHAgdmVjMyByZCwgaGlnaHAgZmxvYXQgc3IpCnsKICAgIGhpZ2hwIGZsb2F0IGEgPSBkb3QocmQsIHJkKTsKICAgIGhpZ2hwIGZsb2F0IGIgPSAyLjAgKiBkb3QocmQsIHIwKTsKICAgIGhpZ2hwIGZsb2F0IGMgPSBkb3QocjAsIHIwKSAtIChzciAqIHNyKTsKICAgIGhpZ2hwIGZsb2F0IGQgPSAoYiAqIGIpIC0gKCg0LjAgKiBhKSAqIGMpOwogICAgaGlnaHAgdmVjMiBfMTEyOwogICAgaWYgKGQgPCAwLjApCiAgICB7CiAgICAgICAgXzExMiA9IHZlYzIoMTAwMDAwLjAsIC0xMDAwMDAuMCk7CiAgICB9CiAgICBlbHNlCiAgICB7CiAgICAgICAgXzExMiA9IHZlYzIoKCgtYikgLSBzcXJ0KGQpKSAvICgyLjAgKiBhKSwgKCgtYikgKyBzcXJ0KGQpKSAvICgyLjAgKiBhKSk7CiAgICB9CiAgICByZXR1cm4gXzExMjsKfQoKaGlnaHAgZmxvYXQgc2FmZV9hY29zKGhpZ2hwIGZsb2F0IHgpCnsKICAgIHJldHVybiBhY29zKGNsYW1wKHgsIC0xLjAsIDEuMCkpOwp9CgpoaWdocCB2ZWMzIG5pc2hpdGFfbG9va3VwTFVUKGhpZ2hwIGZsb2F0IGhlaWdodCwgaGlnaHAgZmxvYXQgc3VuVGhldGEpCnsKICAgIGhpZ2hwIHZlYzIgY29vcmRzID0gdmVjMihzcXJ0KGhlaWdodCAqIDEuNTU3NjMyNDU4NTcwODc4OTUyNzQxNjIyOTI0ODA0N2UtMDcpLCAwLjUgKyAoKDAuNSAqIHNpZ24oc3VuVGhldGEgLSAxLjU3MDc5NjAxMjg3ODQxNzk2ODc1KSkgKiBzcXJ0KGFicygoc3VuVGhldGEgKiAwLjYzNjYxOTkyNTQ5ODk2MjQwMjM0Mzc1KSAtIDEuMCkpKSk7CiAgICByZXR1cm4gdGV4dHVyZUxvZChuaXNoaXRhTFVULCBjb29yZHMsIDAuMCkueHl6Owp9CgpoaWdocCBmbG9hdCByYW5kKGhpZ2hwIHZlYzIgY28pCnsKICAgIHJldHVybiBmcmFjdChzaW4oZG90KGNvLCB2ZWMyKDEyLjk4OTgwMDQ1MzE4NjAzNTE1NjI1LCA3OC4yMzMwMDE3MDg5ODQzNzUpKSkgKiA0Mzc1OC41NDY4NzUpOwp9CgpoaWdocCB2ZWMzIG5pc2hpdGFfYXRtb3NwaGVyZShoaWdocCB2ZWMzIHIsIGhpZ2hwIHZlYzMgcjAsIGhpZ2hwIHZlYzMgcFN1biwgaGlnaHAgZmxvYXQgclBsYW5ldCkKewogICAgaGlnaHAgdmVjMiBwID0gbmlzaGl0YV9yc2kocjAsIHIsIDY0MjAwMDAuMCk7CiAgICBpZiAocC54ID4gcC55KQogICAgewogICAgICAgIHJldHVybiB2ZWMzKDAuMCk7CiAgICB9CiAgICBwLnkgPSBtaW4ocC55LCBuaXNoaXRhX3JzaShyMCwgciwgclBsYW5ldCkueCk7CiAgICBoaWdocCBmbG9hdCBpU3RlcFNpemUgPSAocC55IC0gcC54KSAvIDE2LjA7CiAgICBoaWdocCBmbG9hdCBpVGltZSA9IDAuMDsKICAgIGhpZ2hwIHZlYzMgdG90YWxSbGggPSB2ZWMzKDAuMCk7CiAgICBoaWdocCB2ZWMzIHRvdGFsTWllID0gdmVjMygwLjApOwogICAgaGlnaHAgZmxvYXQgaU9kUmxoID0gMC4wOwogICAgaGlnaHAgZmxvYXQgaU9kTWllID0gMC4wOwogICAgaGlnaHAgZmxvYXQgbXUgPSBkb3QociwgcFN1bik7CiAgICBoaWdocCBmbG9hdCBtdW11ID0gbXUgKiBtdTsKICAgIGhpZ2hwIGZsb2F0IHBSbGggPSAwLjA1OTY4MzExNDI5MDIzNzQyNjc1NzgxMjUgKiAoMS4wICsgbXVtdSk7CiAgICBoaWdocCBmbG9hdCBwTWllID0gKDAuMTE5MzY2MjI4NTgwNDc0ODUzNTE1NjI1ICogKDAuNDIyMzk5OTk3NzExMTgxNjQwNjI1ICogKG11bXUgKyAxLjApKSkgLyAocG93KDEuNTc3NjAwMDAyMjg4ODE4MzU5Mzc1IC0gKCgyLjAgKiBtdSkgKiAwLjc1OTk5OTk5MDQ2MzI1NjgzNTkzNzUpLCAxLjUpICogMi41Nzc2MDAwMDIyODg4MTgzNTkzNzUpOwogICAgZm9yIChpbnQgaSA9IDA7IGkgPCAxNjsgaSsrKQogICAgewogICAgICAgIGhpZ2hwIHZlYzMgaVBvcyA9IHIwICsgKHIgKiAoaVRpbWUgKyAoaVN0ZXBTaXplICogMC41KSkpOwogICAgICAgIGhpZ2hwIGZsb2F0IGlIZWlnaHQgPSBsZW5ndGgoaVBvcykgLSByUGxhbmV0OwogICAgICAgIGhpZ2hwIGZsb2F0IG9kU3RlcFJsaCA9IChleHAoKC1pSGVpZ2h0KSAvIDgwMDAuMCkgKiBuaXNoaXRhRGVuc2l0eS54KSAqIGlTdGVwU2l6ZTsKICAgICAgICBoaWdocCBmbG9hdCBvZFN0ZXBNaWUgPSAoZXhwKCgtaUhlaWdodCkgLyAxMjAwLjApICogbmlzaGl0YURlbnNpdHkueSkgKiBpU3RlcFNpemU7CiAgICAgICAgaU9kUmxoICs9IG9kU3RlcFJsaDsKICAgICAgICBpT2RNaWUgKz0gb2RTdGVwTWllOwogICAgICAgIGhpZ2hwIGZsb2F0IHN1blRoZXRhID0gc2FmZV9hY29zKGRvdChub3JtYWxpemUoaVBvcyksIG5vcm1hbGl6ZShwU3VuKSkpOwogICAgICAgIGhpZ2hwIHZlYzMgakF0dG4gPSBuaXNoaXRhX2xvb2t1cExVVChpSGVpZ2h0LCBzdW5UaGV0YSk7CiAgICAgICAgaGlnaHAgdmVjMyBpQXR0biA9IGV4cCgtKHZlYzMoMS45OTk5OTk5NDk0NzU3NTAzMjcxMTAyOTA1MjczNDM4ZS0wNSAqIGlPZE1pZSkgKyAodmVjMyg1LjUwMDAwMDA0Mjk1NzI1Mzc1NDEzODk0NjUzMzIwMzFlLTA2LCAxLjI5OTk5OTk4NTM0OTEzMTc0ODA4MDI1MzYwMTA3NDJlLTA1LCAyLjIzOTk5OTk1Nzk2NDc1NTU5NDczMDM3NzE5NzI2NTZlLTA1KSAqIGlPZFJsaCkpKTsKICAgICAgICBoaWdocCB2ZWMzIGF0dG4gPSBpQXR0biAqIGpBdHRuOwogICAgICAgIGF0dG4gKj0gKDAuOTgwMDAwMDE5MDczNDg2MzI4MTI1ICsgKHJhbmQoci54eSkgKiAwLjAzOTk5OTk5OTEwNTkzMDMyODM2OTE0MDYyNSkpOwogICAgICAgIHRvdGFsUmxoICs9IChhdHRuICogb2RTdGVwUmxoKTsKICAgICAgICB0b3RhbE1pZSArPSAoYXR0biAqIG9kU3RlcE1pZSk7CiAgICAgICAgaVRpbWUgKz0gaVN0ZXBTaXplOwogICAgfQogICAgcmV0dXJuICgoKHZlYzMoNS41MDAwMDAwNDI5NTcyNTM3NTQxMzg5NDY1MzMyMDMxZS0wNiwgMS4yOTk5OTk5ODUzNDkxMzE3NDgwODAyNTM2MDEwNzQyZS0wNSwgMi4yMzk5OTk5NTc5NjQ3NTU1OTQ3MzAzNzcxOTcyNjU2ZS0wNSkgKiBwUmxoKSAqIHRvdGFsUmxoKSArICh0b3RhbE1pZSAqIChwTWllICogMS45OTk5OTk5NDk0NzU3NTAzMjcxMTAyOTA1MjczNDM4ZS0wNSkpKSAqIDIyLjA7Cn0KCmhpZ2hwIHZlYzMgc3VuX2Rpc2soaGlnaHAgdmVjMyBuLCBoaWdocCB2ZWMzIGxpZ2h0X2RpciwgaGlnaHAgZmxvYXQgZGlza19zaXplLCBoaWdocCBmbG9hdCBpbnRlbnNpdHkpCnsKICAgIGhpZ2hwIGZsb2F0IGRpc3QgPSBkaXN0YW5jZShuLCBsaWdodF9kaXIpIC8gZGlza19zaXplOwogICAgaGlnaHAgZmxvYXQgaW52RGlzdCA9IDEuMCAtIGRpc3Q7CiAgICBoaWdocCBmbG9hdCBtdSA9IHNxcnQoaW52RGlzdCAqIGludkRpc3QpOwogICAgaGlnaHAgdmVjMyBsaW1iX2RhcmtlbmluZyA9IHZlYzMoMS4wKSAtICh2ZWMzKDEuMCkgLSBwb3codmVjMyhtdSksIHZlYzMoMC4zOTcwMDAwMTQ3ODE5NTE5MDQyOTY4NzUsIDAuNTAzMDAwMDIwOTgwODM0OTYwOTM3NSwgMC42NTIwMDAwMTAwMTM1ODAzMjIyNjU2MjUpKSk7CiAgICByZXR1cm4gdmVjMygxLjApICsgKGxpbWJfZGFya2VuaW5nICogKCgoMS4wIC0gc3RlcCgxLjAsIGRpc3QpKSAqIDIyLjApICogaW50ZW5zaXR5KSk7Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzMgbiA9IG5vcm1hbGl6ZShub3JtYWwpOwogICAgaGlnaHAgdmVjMyBwb3MgPSAtbjsKICAgIGhpZ2hwIHZlYzMgU2t5VGV4dHVyZV9Db2xvcl9yZXMgPSBuaXNoaXRhX2F0bW9zcGhlcmUocG9zLCB2ZWMzKDAuMCwgMC4wLCA2MzYwMDAwLjApLCBzdW5EaXIsIDYzNjAwMDAuMCkgKiBzdW5fZGlzayhwb3MsIHN1bkRpciwgMC4wMDQ3NTYwMDQwODM5MDE2NDM3NTMwNTE3NTc4MTI1LCAxLjApOwogICAgZnJhZ0NvbG9yID0gdmVjNChTa3lUZXh0dXJlX0NvbG9yX3Jlcy54LCBTa3lUZXh0dXJlX0NvbG9yX3Jlcy55LCBTa3lUZXh0dXJlX0NvbG9yX3Jlcy56LCBmcmFnQ29sb3Iudyk7CiAgICBmcmFnQ29sb3IudyA9IDAuMDsKfQoK";
kha_Shaders.World_World_vertData0 = "s258:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgU01WUDsKCm91dCB2ZWMzIG5vcm1hbDsKaW4gdmVjMyBub3I7CmluIHZlYzMgcG9zOwoKdm9pZCBtYWluKCkKewogICAgbm9ybWFsID0gbm9yOwogICAgdmVjNCBwb3NpdGlvbiA9IFNNVlAgKiB2ZWM0KHBvcywgMS4wKTsKICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3NpdGlvbik7Cn0KCg";
kha_Shaders.blur_edge_pass_fragData0 = "s2671:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKY29uc3QgZmxvYXQgXzE0NFsxMF0gPSBmbG9hdFtdKDAuMTMyNTcxOTk1MjU4MzMxMjk4ODI4MTI1LCAwLjEyNTQ3MTk5NDI4MDgxNTEyNDUxMTcxODc1LCAwLjEwNjM3Mjk5NzE2NDcyNjI1NzMyNDIxODc1LCAwLjA4MDc3OTk5OTQ5NDU1MjYxMjMwNDY4NzUsIDAuMDU0OTQ5OTk4ODU1NTkwODIwMzEyNSwgMC4wMzM0ODIwMDAyMzE3NDI4NTg4ODY3MTg3NSwgMC4wMTgyNzUwMDAxNTQ5NzIwNzY0MTYwMTU2MjUsIDAuMDA4OTMzOTk5NTc1Njc0NTMzODQzOTk0MTQwNjI1LCAwLjAwMzkxMTk5OTk4NTU3NTY3NTk2NDM1NTQ2ODc1LCAwLjAwMTUzNTAwMDA0NjcxNTE0MDM0MjcxMjQwMjM0Mzc1KTsKCnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGdidWZmZXIwOwp1bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRCB0ZXg7CnVuaWZvcm0gaGlnaHAgdmVjMiBkaXJJbnY7CgppbiBoaWdocCB2ZWMyIHRleENvb3JkOwpvdXQgaGlnaHAgZmxvYXQgZnJhZ0NvbG9yOwoKaGlnaHAgdmVjMiBvY3RhaGVkcm9uV3JhcChoaWdocCB2ZWMyIHYpCnsKICAgIHJldHVybiAodmVjMigxLjApIC0gYWJzKHYueXgpKSAqIHZlYzIoKHYueCA%PSAwLjApID8gMS4wIDogKC0xLjApLCAodi55ID49IDAuMCkgPyAxLjAgOiAoLTEuMCkpOwp9CgpoaWdocCB2ZWMzIGdldE5vcihoaWdocCB2ZWMyIGVuYykKewogICAgaGlnaHAgdmVjMyBuOwogICAgbi56ID0gKDEuMCAtIGFicyhlbmMueCkpIC0gYWJzKGVuYy55KTsKICAgIGhpZ2hwIHZlYzIgXzUzOwogICAgaWYgKG4ueiA%PSAwLjApCiAgICB7CiAgICAgICAgXzUzID0gZW5jOwogICAgfQogICAgZWxzZQogICAgewogICAgICAgIF81MyA9IG9jdGFoZWRyb25XcmFwKGVuYyk7CiAgICB9CiAgICBuID0gdmVjMyhfNTMueCwgXzUzLnksIG4ueik7CiAgICBuID0gbm9ybWFsaXplKG4pOwogICAgcmV0dXJuIG47Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzMgbm9yID0gZ2V0Tm9yKHRleHR1cmVMb2QoZ2J1ZmZlcjAsIHRleENvb3JkLCAwLjApLnh5KTsKICAgIGZyYWdDb2xvciA9IHRleHR1cmVMb2QodGV4LCB0ZXhDb29yZCwgMC4wKS54ICogMC4xMzI1NzE5OTUyNTgzMzEyOTg4MjgxMjU7CiAgICBoaWdocCBmbG9hdCB3ZWlnaHQgPSAwLjEzMjU3MTk5NTI1ODMzMTI5ODgyODEyNTsKICAgIGZvciAoaW50IGkgPSAxOyBpIDwgODsgaSsrKQogICAgewogICAgICAgIGhpZ2hwIGZsb2F0IHBvc2FkZCA9IGZsb2F0KGkpOwogICAgICAgIGhpZ2hwIHZlYzMgbm9yMiA9IGdldE5vcih0ZXh0dXJlTG9kKGdidWZmZXIwLCB0ZXhDb29yZCArIChkaXJJbnYgKiBmbG9hdChpKSksIDAuMCkueHkpOwogICAgICAgIGhpZ2hwIGZsb2F0IGluZmx1ZW5jZUZhY3RvciA9IHN0ZXAoMC45NDk5OTk5ODgwNzkwNzEwNDQ5MjE4NzUsIGRvdChub3IyLCBub3IpKTsKICAgICAgICBoaWdocCBmbG9hdCBjb2wgPSB0ZXh0dXJlTG9kKHRleCwgdGV4Q29vcmQgKyAoZGlySW52ICogcG9zYWRkKSwgMC4wKS54OwogICAgICAgIGhpZ2hwIGZsb2F0IHcgPSBfMTQ0W2ldICogaW5mbHVlbmNlRmFjdG9yOwogICAgICAgIGZyYWdDb2xvciArPSAoY29sICogdyk7CiAgICAgICAgd2VpZ2h0ICs9IHc7CiAgICAgICAgbm9yMiA9IGdldE5vcih0ZXh0dXJlTG9kKGdidWZmZXIwLCB0ZXhDb29yZCAtIChkaXJJbnYgKiBmbG9hdChpKSksIDAuMCkueHkpOwogICAgICAgIGluZmx1ZW5jZUZhY3RvciA9IHN0ZXAoMC45NDk5OTk5ODgwNzkwNzEwNDQ5MjE4NzUsIGRvdChub3IyLCBub3IpKTsKICAgICAgICBjb2wgPSB0ZXh0dXJlTG9kKHRleCwgdGV4Q29vcmQgLSAoZGlySW52ICogcG9zYWRkKSwgMC4wKS54OwogICAgICAgIHcgPSBfMTQ0W2ldICogaW5mbHVlbmNlRmFjdG9yOwogICAgICAgIGZyYWdDb2xvciArPSAoY29sICogdyk7CiAgICAgICAgd2VpZ2h0ICs9IHc7CiAgICB9CiAgICBmcmFnQ29sb3IgLz0gd2VpZ2h0Owp9Cgo";
kha_Shaders.compositor_pass_fragData0 = "s870:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKb3V0IGhpZ2hwIHZlYzQgZnJhZ0NvbG9yOwoKaGlnaHAgdmVjMyB0b25lbWFwRmlsbWljKGhpZ2hwIHZlYzMgY29sb3IpCnsKICAgIGhpZ2hwIHZlYzMgeCA9IG1heCh2ZWMzKDAuMCksIGNvbG9yIC0gdmVjMygwLjAwNDAwMDAwMDE4OTk4OTgwNTIyMTU1NzYxNzE4NzUpKTsKICAgIHJldHVybiAoeCAqICgoeCAqIDYuMTk5OTk5ODA5MjY1MTM2NzE4NzUpICsgdmVjMygwLjUpKSkgLyAoKHggKiAoKHggKiA2LjE5OTk5OTgwOTI2NTEzNjcxODc1KSArIHZlYzMoMS43MDAwMDAwNDc2ODM3MTU4MjAzMTI1KSkpICsgdmVjMygwLjA1OTk5OTk5ODY1ODg5NTQ5MjU1MzcxMDkzNzUpKTsKfQoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjMiB0ZXhDbyA9IHRleENvb3JkOwogICAgZnJhZ0NvbG9yID0gdGV4dHVyZUxvZCh0ZXgsIHRleENvLCAwLjApOwogICAgaGlnaHAgdmVjMyBfNTkgPSB0b25lbWFwRmlsbWljKGZyYWdDb2xvci54eXopOwogICAgZnJhZ0NvbG9yID0gdmVjNChfNTkueCwgXzU5LnksIF81OS56LCBmcmFnQ29sb3Iudyk7Cn0KCg";
kha_Shaders.compositor_pass_vertData0 = "s203:I3ZlcnNpb24gMzAwIGVzCgpvdXQgdmVjMiB0ZXhDb29yZDsKaW4gdmVjMiBwb3M7Cgp2b2lkIG1haW4oKQp7CiAgICB0ZXhDb29yZCA9IChwb3MgKiB2ZWMyKDAuNSkpICsgdmVjMigwLjUpOwogICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApOwp9Cgo";
kha_Shaders.deferred_light_fragData0 = "s13340:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCB2ZWM0IGNhc0RhdGFbMjBdOwp1bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRCBnYnVmZmVyMDsKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgZ2J1ZmZlcjE7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGdidWZmZXJEOwp1bmlmb3JtIGhpZ2hwIHZlYzMgZXllOwp1bmlmb3JtIGhpZ2hwIHZlYzMgZXllTG9vazsKdW5pZm9ybSBoaWdocCB2ZWMyIGNhbWVyYVByb2o7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIHNlbnZtYXBCcmRmOwp1bmlmb3JtIGhpZ2hwIHZlYzQgc2hpcnJbN107CnVuaWZvcm0gaW50IGVudm1hcE51bU1pcG1hcHM7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIHNlbnZtYXBSYWRpYW5jZTsKdW5pZm9ybSBoaWdocCBmbG9hdCBlbnZtYXBTdHJlbmd0aDsKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgc3Nhb3RleDsKdW5pZm9ybSBoaWdocCB2ZWMzIHN1bkRpcjsKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93TWFwOwp1bmlmb3JtIGhpZ2hwIGZsb2F0IHNoYWRvd3NCaWFzOwp1bmlmb3JtIGhpZ2hwIHZlYzMgc3VuQ29sOwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjMyB2aWV3UmF5OwpvdXQgaGlnaHAgdmVjNCBmcmFnQ29sb3I7CgpoaWdocCB2ZWMyIG9jdGFoZWRyb25XcmFwKGhpZ2hwIHZlYzIgdikKewogICAgcmV0dXJuICh2ZWMyKDEuMCkgLSBhYnModi55eCkpICogdmVjMigodi54ID49IDAuMCkgPyAxLjAgOiAoLTEuMCksICh2LnkgPj0gMC4wKSA:IDEuMCA6ICgtMS4wKSk7Cn0KCnZvaWQgdW5wYWNrRmxvYXRJbnQxNihoaWdocCBmbG9hdCB2YWwsIG91dCBoaWdocCBmbG9hdCBmLCBpbm91dCB1aW50IGkpCnsKICAgIGkgPSB1aW50KGludCgodmFsIC8gMC4wNjI1MDA5NTM2NzQzMTY0MDYyNSkgKyAxLjUyNTkwMjE4OTMxNDM2NTM4Njk2Mjg5MDYyNWUtMDUpKTsKICAgIGYgPSBjbGFtcCgoKCgtMC4wNjI1MDA5NTM2NzQzMTY0MDYyNSkgKiBmbG9hdChpKSkgKyB2YWwpIC8gMC4wNjI0ODU2OTQ4ODUyNTM5MDYyNSwgMC4wLCAxLjApOwp9CgpoaWdocCB2ZWMyIHVucGFja0Zsb2F0MihoaWdocCBmbG9hdCBmKQp7CiAgICByZXR1cm4gdmVjMihmbG9vcihmKSAvIDI1NS4wLCBmcmFjdChmKSk7Cn0KCmhpZ2hwIHZlYzMgc3VyZmFjZUFsYmVkbyhoaWdocCB2ZWMzIGJhc2VDb2xvciwgaGlnaHAgZmxvYXQgbWV0YWxuZXNzKQp7CiAgICByZXR1cm4gbWl4KGJhc2VDb2xvciwgdmVjMygwLjApLCB2ZWMzKG1ldGFsbmVzcykpOwp9CgpoaWdocCB2ZWMzIHN1cmZhY2VGMChoaWdocCB2ZWMzIGJhc2VDb2xvciwgaGlnaHAgZmxvYXQgbWV0YWxuZXNzKQp7CiAgICByZXR1cm4gbWl4KHZlYzMoMC4wMzk5OTk5OTkxMDU5MzAzMjgzNjkxNDA2MjUpLCBiYXNlQ29sb3IsIHZlYzMobWV0YWxuZXNzKSk7Cn0KCmhpZ2hwIHZlYzMgZ2V0UG9zKGhpZ2hwIHZlYzMgZXllXzEsIGhpZ2hwIHZlYzMgZXllTG9va18xLCBoaWdocCB2ZWMzIHZpZXdSYXlfMSwgaGlnaHAgZmxvYXQgZGVwdGgsIGhpZ2hwIHZlYzIgY2FtZXJhUHJval8xKQp7CiAgICBoaWdocCBmbG9hdCBsaW5lYXJEZXB0aCA9IGNhbWVyYVByb2pfMS55IC8gKCgoZGVwdGggKiAwLjUpICsgMC41KSAtIGNhbWVyYVByb2pfMS54KTsKICAgIGhpZ2hwIGZsb2F0IHZpZXdaRGlzdCA9IGRvdChleWVMb29rXzEsIHZpZXdSYXlfMSk7CiAgICBoaWdocCB2ZWMzIHdwb3NpdGlvbiA9IGV5ZV8xICsgKHZpZXdSYXlfMSAqIChsaW5lYXJEZXB0aCAvIHZpZXdaRGlzdCkpOwogICAgcmV0dXJuIHdwb3NpdGlvbjsKfQoKaGlnaHAgdmVjMyBzaElycmFkaWFuY2UoaGlnaHAgdmVjMyBub3IsIGhpZ2hwIHZlYzQgc2hpcnJfMVs3XSkKewogICAgaGlnaHAgdmVjMyBjbDAwID0gdmVjMyhzaGlycl8xWzBdLngsIHNoaXJyXzFbMF0ueSwgc2hpcnJfMVswXS56KTsKICAgIGhpZ2hwIHZlYzMgY2wxbTEgPSB2ZWMzKHNoaXJyXzFbMF0udywgc2hpcnJfMVsxXS54LCBzaGlycl8xWzFdLnkpOwogICAgaGlnaHAgdmVjMyBjbDEwID0gdmVjMyhzaGlycl8xWzFdLnosIHNoaXJyXzFbMV0udywgc2hpcnJfMVsyXS54KTsKICAgIGhpZ2hwIHZlYzMgY2wxMSA9IHZlYzMoc2hpcnJfMVsyXS55LCBzaGlycl8xWzJdLnosIHNoaXJyXzFbMl0udyk7CiAgICBoaWdocCB2ZWMzIGNsMm0yID0gdmVjMyhzaGlycl8xWzNdLngsIHNoaXJyXzFbM10ueSwgc2hpcnJfMVszXS56KTsKICAgIGhpZ2hwIHZlYzMgY2wybTEgPSB2ZWMzKHNoaXJyXzFbM10udywgc2hpcnJfMVs0XS54LCBzaGlycl8xWzRdLnkpOwogICAgaGlnaHAgdmVjMyBjbDIwID0gdmVjMyhzaGlycl8xWzRdLnosIHNoaXJyXzFbNF0udywgc2hpcnJfMVs1XS54KTsKICAgIGhpZ2hwIHZlYzMgY2wyMSA9IHZlYzMoc2hpcnJfMVs1XS55LCBzaGlycl8xWzVdLnosIHNoaXJyXzFbNV0udyk7CiAgICBoaWdocCB2ZWMzIGNsMjIgPSB2ZWMzKHNoaXJyXzFbNl0ueCwgc2hpcnJfMVs2XS55LCBzaGlycl8xWzZdLnopOwogICAgcmV0dXJuICgoKCgoKCgoKChjbDIyICogMC40MjkwNDI5OTQ5NzYwNDM3MDExNzE4NzUpICogKChub3IueSAqIG5vci55KSAtICgoLW5vci56KSAqICgtbm9yLnopKSkpICsgKCgoY2wyMCAqIDAuNzQzMTI1MDIxNDU3NjcyMTE5MTQwNjI1KSAqIG5vci54KSAqIG5vci54KSkgKyAoY2wwMCAqIDAuODg2MjI3MDExNjgwNjAzMDI3MzQzNzUpKSAtIChjbDIwICogMC4yNDc3MDc5OTI3OTIxMjk1MTY2MDE1NjI1KSkgKyAoKChjbDJtMiAqIDAuODU4MDg1OTg5OTUyMDg3NDAyMzQzNzUpICogbm9yLnkpICogKC1ub3IueikpKSArICgoKGNsMjEgKiAwLjg1ODA4NTk4OTk1MjA4NzQwMjM0Mzc1KSAqIG5vci55KSAqIG5vci54KSkgKyAoKChjbDJtMSAqIDAuODU4MDg1OTg5OTUyMDg3NDAyMzQzNzUpICogKC1ub3IueikpICogbm9yLngpKSArICgoY2wxMSAqIDEuMDIzMzI3OTQ2NjYyOTAyODMyMDMxMjUpICogbm9yLnkpKSArICgoY2wxbTEgKiAxLjAyMzMyNzk0NjY2MjkwMjgzMjAzMTI1KSAqICgtbm9yLnopKSkgKyAoKGNsMTAgKiAxLjAyMzMyNzk0NjY2MjkwMjgzMjAzMTI1KSAqIG5vci54KTsKfQoKaGlnaHAgZmxvYXQgZ2V0TWlwRnJvbVJvdWdobmVzcyhoaWdocCBmbG9hdCByb3VnaG5lc3MsIGhpZ2hwIGZsb2F0IG51bU1pcG1hcHMpCnsKICAgIHJldHVybiByb3VnaG5lc3MgKiBudW1NaXBtYXBzOwp9CgpoaWdocCB2ZWMyIGVudk1hcEVxdWlyZWN0KGhpZ2hwIHZlYzMgbm9ybWFsKQp7CiAgICBoaWdocCBmbG9hdCBwaGkgPSBhY29zKG5vcm1hbC56KTsKICAgIGhpZ2hwIGZsb2F0IHRoZXRhID0gYXRhbigtbm9ybWFsLnksIG5vcm1hbC54KSArIDMuMTQxNTkyNzQxMDEyNTczMjQyMTg3NTsKICAgIHJldHVybiB2ZWMyKHRoZXRhIC8gNi4yODMxODU0ODIwMjUxNDY0ODQzNzUsIHBoaSAvIDMuMTQxNTkyNzQxMDEyNTczMjQyMTg3NSk7Cn0KCmhpZ2hwIHZlYzMgbGFtYmVydERpZmZ1c2VCUkRGKGhpZ2hwIHZlYzMgYWxiZWRvLCBoaWdocCBmbG9hdCBubCkKewogICAgcmV0dXJuIGFsYmVkbyAqIG1heCgwLjAsIG5sKTsKfQoKaGlnaHAgZmxvYXQgZF9nZ3goaGlnaHAgZmxvYXQgbmgsIGhpZ2hwIGZsb2F0IGEpCnsKICAgIGhpZ2hwIGZsb2F0IGEyID0gYSAqIGE7CiAgICBoaWdocCBmbG9hdCBkZW5vbSA9IHBvdygoKG5oICogbmgpICogKGEyIC0gMS4wKSkgKyAxLjAsIDIuMCk7CiAgICByZXR1cm4gKGEyICogMC4zMTgzMDk4NzMzNDI1MTQwMzgwODU5Mzc1KSAvIGRlbm9tOwp9CgpoaWdocCBmbG9hdCB2X3NtaXRoc2NobGljayhoaWdocCBmbG9hdCBubCwgaGlnaHAgZmxvYXQgbnYsIGhpZ2hwIGZsb2F0IGEpCnsKICAgIHJldHVybiAxLjAgLyAoKChubCAqICgxLjAgLSBhKSkgKyBhKSAqICgobnYgKiAoMS4wIC0gYSkpICsgYSkpOwp9CgpoaWdocCB2ZWMzIGZfc2NobGljayhoaWdocCB2ZWMzIGYwLCBoaWdocCBmbG9hdCB2aCkKewogICAgcmV0dXJuIGYwICsgKCh2ZWMzKDEuMCkgLSBmMCkgKiBleHAyKCgoKC01LjU1NDcyOTkzODUwNzA4MDA3ODEyNSkgKiB2aCkgLSA2Ljk4MzE2MDAxODkyMDg5ODQzNzUpICogdmgpKTsKfQoKaGlnaHAgdmVjMyBzcGVjdWxhckJSREYoaGlnaHAgdmVjMyBmMCwgaGlnaHAgZmxvYXQgcm91Z2huZXNzLCBoaWdocCBmbG9hdCBubCwgaGlnaHAgZmxvYXQgbmgsIGhpZ2hwIGZsb2F0IG52LCBoaWdocCBmbG9hdCB2aCkKewogICAgaGlnaHAgZmxvYXQgYSA9IHJvdWdobmVzcyAqIHJvdWdobmVzczsKICAgIHJldHVybiAoZl9zY2hsaWNrKGYwLCB2aCkgKiAoZF9nZ3gobmgsIGEpICogY2xhbXAodl9zbWl0aHNjaGxpY2sobmwsIG52LCBhKSwgMC4wLCAxLjApKSkgLyB2ZWMzKDQuMCk7Cn0KCmhpZ2hwIG1hdDQgZ2V0Q2FzY2FkZU1hdChoaWdocCBmbG9hdCBkLCBpbm91dCBpbnQgY2FzaSwgaW5vdXQgaW50IGNhc0luZGV4KQp7CiAgICBoaWdocCB2ZWM0IGNvbXAgPSB2ZWM0KGZsb2F0KGQgPiBjYXNEYXRhWzE2XS54KSwgZmxvYXQoZCA%IGNhc0RhdGFbMTZdLnkpLCBmbG9hdChkID4gY2FzRGF0YVsxNl0ueiksIGZsb2F0KGQgPiBjYXNEYXRhWzE2XS53KSk7CiAgICBjYXNpID0gaW50KG1pbihkb3QodmVjNCgxLjApLCBjb21wKSwgNC4wKSk7CiAgICBjYXNJbmRleCA9IGNhc2kgKiA0OwogICAgcmV0dXJuIG1hdDQodmVjNChjYXNEYXRhW2Nhc0luZGV4XSksIHZlYzQoY2FzRGF0YVtjYXNJbmRleCArIDFdKSwgdmVjNChjYXNEYXRhW2Nhc0luZGV4ICsgMl0pLCB2ZWM0KGNhc0RhdGFbY2FzSW5kZXggKyAzXSkpOwp9CgpoaWdocCBmbG9hdCBQQ0YoaGlnaHAgc2FtcGxlcjJEU2hhZG93IHNoYWRvd01hcF8xLCBoaWdocCB2ZWMyIHV2LCBoaWdocCBmbG9hdCBjb21wYXJlLCBoaWdocCB2ZWMyIHNtU2l6ZSkKewogICAgaGlnaHAgdmVjMyBfMzk3ID0gdmVjMyh1diArICh2ZWMyKC0xLjApIC8gc21TaXplKSwgY29tcGFyZSk7CiAgICBoaWdocCBmbG9hdCByZXN1bHQgPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF8zOTcueHksIF8zOTcueikpOwogICAgaGlnaHAgdmVjMyBfNDA2ID0gdmVjMyh1diArICh2ZWMyKC0xLjAsIDAuMCkgLyBzbVNpemUpLCBjb21wYXJlKTsKICAgIHJlc3VsdCArPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF80MDYueHksIF80MDYueikpOwogICAgaGlnaHAgdmVjMyBfNDE3ID0gdmVjMyh1diArICh2ZWMyKC0xLjAsIDEuMCkgLyBzbVNpemUpLCBjb21wYXJlKTsKICAgIHJlc3VsdCArPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF80MTcueHksIF80MTcueikpOwogICAgaGlnaHAgdmVjMyBfNDI4ID0gdmVjMyh1diArICh2ZWMyKDAuMCwgLTEuMCkgLyBzbVNpemUpLCBjb21wYXJlKTsKICAgIHJlc3VsdCArPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF80MjgueHksIF80MjgueikpOwogICAgaGlnaHAgdmVjMyBfNDM2ID0gdmVjMyh1diwgY29tcGFyZSk7CiAgICByZXN1bHQgKz0gdGV4dHVyZShzaGFkb3dNYXBfMSwgdmVjMyhfNDM2Lnh5LCBfNDM2LnopKTsKICAgIGhpZ2hwIHZlYzMgXzQ0NyA9IHZlYzModXYgKyAodmVjMigwLjAsIDEuMCkgLyBzbVNpemUpLCBjb21wYXJlKTsKICAgIHJlc3VsdCArPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF80NDcueHksIF80NDcueikpOwogICAgaGlnaHAgdmVjMyBfNDU4ID0gdmVjMyh1diArICh2ZWMyKDEuMCwgLTEuMCkgLyBzbVNpemUpLCBjb21wYXJlKTsKICAgIHJlc3VsdCArPSB0ZXh0dXJlKHNoYWRvd01hcF8xLCB2ZWMzKF80NTgueHksIF80NTgueikpOwogICAgaGlnaHAgdmVjMyBfNDY5ID0gdmVjMyh1diArICh2ZWMyKDEuMCwgMC4wKSAvIHNtU2l6ZSksIGNvbXBhcmUpOwogICAgcmVzdWx0ICs9IHRleHR1cmUoc2hhZG93TWFwXzEsIHZlYzMoXzQ2OS54eSwgXzQ2OS56KSk7CiAgICBoaWdocCB2ZWMzIF80ODAgPSB2ZWMzKHV2ICsgKHZlYzIoMS4wKSAvIHNtU2l6ZSksIGNvbXBhcmUpOwogICAgcmVzdWx0ICs9IHRleHR1cmUoc2hhZG93TWFwXzEsIHZlYzMoXzQ4MC54eSwgXzQ4MC56KSk7CiAgICByZXR1cm4gcmVzdWx0IC8gOS4wOwp9CgpoaWdocCBmbG9hdCBzaGFkb3dUZXN0Q2FzY2FkZShoaWdocCBzYW1wbGVyMkRTaGFkb3cgc2hhZG93TWFwXzEsIGhpZ2hwIHZlYzMgZXllXzEsIGhpZ2hwIHZlYzMgcCwgaGlnaHAgZmxvYXQgc2hhZG93c0JpYXNfMSkKewogICAgaGlnaHAgZmxvYXQgZCA9IGRpc3RhbmNlKGV5ZV8xLCBwKTsKICAgIGludCBwYXJhbTsKICAgIGludCBwYXJhbV8xOwogICAgaGlnaHAgbWF0NCBfNTcwID0gZ2V0Q2FzY2FkZU1hdChkLCBwYXJhbSwgcGFyYW1fMSk7CiAgICBpbnQgY2FzaSA9IHBhcmFtOwogICAgaW50IGNhc0luZGV4ID0gcGFyYW1fMTsKICAgIGhpZ2hwIG1hdDQgTFdWUCA9IF81NzA7CiAgICBoaWdocCB2ZWM0IGxQb3MgPSBMV1ZQICogdmVjNChwLCAxLjApOwogICAgaGlnaHAgdmVjMyBfNTg1ID0gbFBvcy54eXogLyB2ZWMzKGxQb3Mudyk7CiAgICBsUG9zID0gdmVjNChfNTg1LngsIF81ODUueSwgXzU4NS56LCBsUG9zLncpOwogICAgaGlnaHAgZmxvYXQgdmlzaWJpbGl0eSA9IDEuMDsKICAgIGlmIChsUG9zLncgPiAwLjApCiAgICB7CiAgICAgICAgdmlzaWJpbGl0eSA9IFBDRihzaGFkb3dNYXBfMSwgbFBvcy54eSwgbFBvcy56IC0gc2hhZG93c0JpYXNfMSwgdmVjMig0MDk2LjAsIDEwMjQuMCkpOwogICAgfQogICAgaGlnaHAgZmxvYXQgbmV4dFNwbGl0ID0gY2FzRGF0YVsxNl1bY2FzaV07CiAgICBoaWdocCBmbG9hdCBfNjEwOwogICAgaWYgKGNhc2kgPT0gMCkKICAgIHsKICAgICAgICBfNjEwID0gbmV4dFNwbGl0OwogICAgfQogICAgZWxzZQogICAgewogICAgICAgIF82MTAgPSBuZXh0U3BsaXQgLSBjYXNEYXRhWzE2XVtjYXNpIC0gMV07CiAgICB9CiAgICBoaWdocCBmbG9hdCBzcGxpdFNpemUgPSBfNjEwOwogICAgaGlnaHAgZmxvYXQgc3BsaXREaXN0ID0gKG5leHRTcGxpdCAtIGQpIC8gc3BsaXRTaXplOwogICAgaWYgKChzcGxpdERpc3QgPD0gMC4xNTAwMDAwMDU5NjA0NjQ0Nzc1MzkwNjI1KSAmJiAoY2FzaSAhPSAzKSkKICAgIHsKICAgICAgICBpbnQgY2FzSW5kZXgyID0gY2FzSW5kZXggKyA0OwogICAgICAgIGhpZ2hwIG1hdDQgTFdWUDIgPSBtYXQ0KHZlYzQoY2FzRGF0YVtjYXNJbmRleDJdKSwgdmVjNChjYXNEYXRhW2Nhc0luZGV4MiArIDFdKSwgdmVjNChjYXNEYXRhW2Nhc0luZGV4MiArIDJdKSwgdmVjNChjYXNEYXRhW2Nhc0luZGV4MiArIDNdKSk7CiAgICAgICAgaGlnaHAgdmVjNCBsUG9zMiA9IExXVlAyICogdmVjNChwLCAxLjApOwogICAgICAgIGhpZ2hwIHZlYzMgXzY4OCA9IGxQb3MyLnh5eiAvIHZlYzMobFBvczIudyk7CiAgICAgICAgbFBvczIgPSB2ZWM0KF82ODgueCwgXzY4OC55LCBfNjg4LnosIGxQb3MyLncpOwogICAgICAgIGhpZ2hwIGZsb2F0IHZpc2liaWxpdHkyID0gMS4wOwogICAgICAgIGlmIChsUG9zMi53ID4gMC4wKQogICAgICAgIHsKICAgICAgICAgICAgdmlzaWJpbGl0eTIgPSBQQ0Yoc2hhZG93TWFwXzEsIGxQb3MyLnh5LCBsUG9zMi56IC0gc2hhZG93c0JpYXNfMSwgdmVjMig0MDk2LjAsIDEwMjQuMCkpOwogICAgICAgIH0KICAgICAgICBoaWdocCBmbG9hdCBsZXJwQW10ID0gc21vb3Roc3RlcCgwLjAsIDAuMTUwMDAwMDA1OTYwNDY0NDc3NTM5MDYyNSwgc3BsaXREaXN0KTsKICAgICAgICByZXR1cm4gbWl4KHZpc2liaWxpdHkyLCB2aXNpYmlsaXR5LCBsZXJwQW10KTsKICAgIH0KICAgIHJldHVybiB2aXNpYmlsaXR5Owp9Cgp2b2lkIG1haW4oKQp7CiAgICBoaWdocCB2ZWM0IGcwID0gdGV4dHVyZUxvZChnYnVmZmVyMCwgdGV4Q29vcmQsIDAuMCk7CiAgICBoaWdocCB2ZWMzIG47CiAgICBuLnogPSAoMS4wIC0gYWJzKGcwLngpKSAtIGFicyhnMC55KTsKICAgIGhpZ2hwIHZlYzIgXzczODsKICAgIGlmIChuLnogPj0gMC4wKQogICAgewogICAgICAgIF83MzggPSBnMC54eTsKICAgIH0KICAgIGVsc2UKICAgIHsKICAgICAgICBfNzM4ID0gb2N0YWhlZHJvbldyYXAoZzAueHkpOwogICAgfQogICAgbiA9IHZlYzMoXzczOC54LCBfNzM4LnksIG4ueik7CiAgICBuID0gbm9ybWFsaXplKG4pOwogICAgaGlnaHAgZmxvYXQgcm91Z2huZXNzID0gZzAuejsKICAgIGhpZ2hwIGZsb2F0IHBhcmFtOwogICAgdWludCBwYXJhbV8xOwogICAgdW5wYWNrRmxvYXRJbnQxNihnMC53LCBwYXJhbSwgcGFyYW1fMSk7CiAgICBoaWdocCBmbG9hdCBtZXRhbGxpYyA9IHBhcmFtOwogICAgdWludCBtYXRpZCA9IHBhcmFtXzE7CiAgICBoaWdocCB2ZWM0IGcxID0gdGV4dHVyZUxvZChnYnVmZmVyMSwgdGV4Q29vcmQsIDAuMCk7CiAgICBoaWdocCB2ZWMyIG9jY3NwZWMgPSB1bnBhY2tGbG9hdDIoZzEudyk7CiAgICBoaWdocCB2ZWMzIGFsYmVkbyA9IHN1cmZhY2VBbGJlZG8oZzEueHl6LCBtZXRhbGxpYyk7CiAgICBoaWdocCB2ZWMzIGYwID0gc3VyZmFjZUYwKGcxLnh5eiwgbWV0YWxsaWMpOwogICAgaGlnaHAgZmxvYXQgZGVwdGggPSAodGV4dHVyZUxvZChnYnVmZmVyRCwgdGV4Q29vcmQsIDAuMCkueCAqIDIuMCkgLSAxLjA7CiAgICBoaWdocCB2ZWMzIHAgPSBnZXRQb3MoZXllLCBleWVMb29rLCBub3JtYWxpemUodmlld1JheSksIGRlcHRoLCBjYW1lcmFQcm9qKTsKICAgIGhpZ2hwIHZlYzMgdiA9IG5vcm1hbGl6ZShleWUgLSBwKTsKICAgIGhpZ2hwIGZsb2F0IGRvdE5WID0gbWF4KGRvdChuLCB2KSwgMC4wKTsKICAgIGhpZ2hwIHZlYzIgZW52QlJERiA9IHRleHR1cmVMb2Qoc2Vudm1hcEJyZGYsIHZlYzIocm91Z2huZXNzLCAxLjAgLSBkb3ROViksIDAuMCkueHk7CiAgICBoaWdocCB2ZWMzIGVudmwgPSBzaElycmFkaWFuY2Uobiwgc2hpcnIpOwogICAgaGlnaHAgdmVjMyByZWZsZWN0aW9uV29ybGQgPSByZWZsZWN0KC12LCBuKTsKICAgIGhpZ2hwIGZsb2F0IGxvZCA9IGdldE1pcEZyb21Sb3VnaG5lc3Mocm91Z2huZXNzLCBmbG9hdChlbnZtYXBOdW1NaXBtYXBzKSk7CiAgICBoaWdocCB2ZWMzIHByZWZpbHRlcmVkQ29sb3IgPSB0ZXh0dXJlTG9kKHNlbnZtYXBSYWRpYW5jZSwgZW52TWFwRXF1aXJlY3QocmVmbGVjdGlvbldvcmxkKSwgbG9kKS54eXo7CiAgICBlbnZsICo9IGFsYmVkbzsKICAgIGVudmwgKz0gKCgocHJlZmlsdGVyZWRDb2xvciAqICgoZjAgKiBlbnZCUkRGLngpICsgdmVjMyhlbnZCUkRGLnkpKSkgKiAxLjUpICogb2Njc3BlYy55KTsKICAgIGVudmwgKj0gKGVudm1hcFN0cmVuZ3RoICogb2Njc3BlYy54KTsKICAgIGZyYWdDb2xvciA9IHZlYzQoZW52bC54LCBlbnZsLnksIGVudmwueiwgZnJhZ0NvbG9yLncpOwogICAgaGlnaHAgdmVjMyBfODkwID0gZnJhZ0NvbG9yLnh5eiAqIHRleHR1cmVMb2Qoc3Nhb3RleCwgdGV4Q29vcmQsIDAuMCkueDsKICAgIGZyYWdDb2xvciA9IHZlYzQoXzg5MC54LCBfODkwLnksIF84OTAueiwgZnJhZ0NvbG9yLncpOwogICAgaGlnaHAgdmVjMyBzaCA9IG5vcm1hbGl6ZSh2ICsgc3VuRGlyKTsKICAgIGhpZ2hwIGZsb2F0IHNkb3ROSCA9IGRvdChuLCBzaCk7CiAgICBoaWdocCBmbG9hdCBzZG90VkggPSBkb3Qodiwgc2gpOwogICAgaGlnaHAgZmxvYXQgc2RvdE5MID0gZG90KG4sIHN1bkRpcik7CiAgICBoaWdocCBmbG9hdCBzdmlzaWJpbGl0eSA9IDEuMDsKICAgIGhpZ2hwIHZlYzMgc2RpcmVjdCA9IGxhbWJlcnREaWZmdXNlQlJERihhbGJlZG8sIHNkb3ROTCkgKyAoc3BlY3VsYXJCUkRGKGYwLCByb3VnaG5lc3MsIHNkb3ROTCwgc2RvdE5ILCBkb3ROViwgc2RvdFZIKSAqIG9jY3NwZWMueSk7CiAgICBzdmlzaWJpbGl0eSA9IHNoYWRvd1Rlc3RDYXNjYWRlKHNoYWRvd01hcCwgZXllLCBwICsgKChuICogc2hhZG93c0JpYXMpICogMTAuMCksIHNoYWRvd3NCaWFzKTsKICAgIGhpZ2hwIHZlYzMgXzk0NyA9IGZyYWdDb2xvci54eXogKyAoKHNkaXJlY3QgKiBzdmlzaWJpbGl0eSkgKiBzdW5Db2wpOwogICAgZnJhZ0NvbG9yID0gdmVjNChfOTQ3LngsIF85NDcueSwgXzk0Ny56LCBmcmFnQ29sb3Iudyk7CiAgICBmcmFnQ29sb3IudyA9IDEuMDsKfQoK";
kha_Shaders.painter_colored_fragData0 = "s223:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwppbiBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBGcmFnQ29sb3IgPSBmcmFnbWVudENvbG9yOwp9Cgo";
kha_Shaders.painter_colored_vertData0 = "s311:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWM0IGZyYWdtZW50Q29sb3I7CmluIHZlYzQgdmVydGV4Q29sb3I7Cgp2b2lkIG1haW4oKQp7CiAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiB2ZWM0KHZlcnRleFBvc2l0aW9uLCAxLjApOwogICAgZnJhZ21lbnRDb2xvciA9IHZlcnRleENvbG9yOwp9Cgo";
kha_Shaders.painter_image_fragData0 = "s487:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjNCBjb2xvcjsKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUodGV4LCB0ZXhDb29yZCkgKiBjb2xvcjsKICAgIGhpZ2hwIHZlYzMgXzMyID0gdGV4Y29sb3IueHl6ICogY29sb3IudzsKICAgIHRleGNvbG9yID0gdmVjNChfMzIueCwgXzMyLnksIF8zMi56LCB0ZXhjb2xvci53KTsKICAgIEZyYWdDb2xvciA9IHRleGNvbG9yOwp9Cgo";
kha_Shaders.painter_image_vertData0 = "s372:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHZlcnRleFVWOwpvdXQgdmVjNCBjb2xvcjsKaW4gdmVjNCB2ZXJ0ZXhDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb24sIDEuMCk7CiAgICB0ZXhDb29yZCA9IHZlcnRleFVWOwogICAgY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK";
kha_Shaders.painter_text_fragData0 = "s367:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwppbiBoaWdocCB2ZWM0IGZyYWdtZW50Q29sb3I7CmluIGhpZ2hwIHZlYzIgdGV4Q29vcmQ7Cgp2b2lkIG1haW4oKQp7CiAgICBGcmFnQ29sb3IgPSB2ZWM0KGZyYWdtZW50Q29sb3IueHl6LCB0ZXh0dXJlKHRleCwgdGV4Q29vcmQpLnggKiBmcmFnbWVudENvbG9yLncpOwp9Cgo";
kha_Shaders.painter_text_vertData0 = "s394:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHZlcnRleFVWOwpvdXQgdmVjNCBmcmFnbWVudENvbG9yOwppbiB2ZWM0IHZlcnRleENvbG9yOwoKdm9pZCBtYWluKCkKewogICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogdmVjNCh2ZXJ0ZXhQb3NpdGlvbiwgMS4wKTsKICAgIHRleENvb3JkID0gdmVydGV4VVY7CiAgICBmcmFnbWVudENvbG9yID0gdmVydGV4Q29sb3I7Cn0KCg";
kha_Shaders.painter_video_fragData0 = "s487:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjNCBjb2xvcjsKb3V0IGhpZ2hwIHZlYzQgRnJhZ0NvbG9yOwoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgdmVjNCB0ZXhjb2xvciA9IHRleHR1cmUodGV4LCB0ZXhDb29yZCkgKiBjb2xvcjsKICAgIGhpZ2hwIHZlYzMgXzMyID0gdGV4Y29sb3IueHl6ICogY29sb3IudzsKICAgIHRleGNvbG9yID0gdmVjNChfMzIueCwgXzMyLnksIF8zMi56LCB0ZXhjb2xvci53KTsKICAgIEZyYWdDb2xvciA9IHRleGNvbG9yOwp9Cgo";
kha_Shaders.painter_video_vertData0 = "s372:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgcHJvamVjdGlvbk1hdHJpeDsKCmluIHZlYzMgdmVydGV4UG9zaXRpb247Cm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHZlcnRleFVWOwpvdXQgdmVjNCBjb2xvcjsKaW4gdmVjNCB2ZXJ0ZXhDb2xvcjsKCnZvaWQgbWFpbigpCnsKICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIHZlYzQodmVydGV4UG9zaXRpb24sIDEuMCk7CiAgICB0ZXhDb29yZCA9IHZlcnRleFVWOwogICAgY29sb3IgPSB2ZXJ0ZXhDb2xvcjsKfQoK";
kha_Shaders.pass_copy_fragData0 = "s279:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgdGV4OwoKb3V0IGhpZ2hwIHZlYzQgZnJhZ0NvbG9yOwppbiBoaWdocCB2ZWMyIHRleENvb3JkOwoKdm9pZCBtYWluKCkKewogICAgZnJhZ0NvbG9yID0gdGV4dHVyZUxvZCh0ZXgsIHRleENvb3JkLCAwLjApOwp9Cgo";
kha_Shaders.pass_vertData0 = "s203:I3ZlcnNpb24gMzAwIGVzCgpvdXQgdmVjMiB0ZXhDb29yZDsKaW4gdmVjMiBwb3M7Cgp2b2lkIG1haW4oKQp7CiAgICB0ZXhDb29yZCA9IChwb3MgKiB2ZWMyKDAuNSkpICsgdmVjMigwLjUpOwogICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApOwp9Cgo";
kha_Shaders.pass_viewray_vertData0 = "s504:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIG1hdDQgaW52VlA7CnVuaWZvcm0gdmVjMyBleWU7CgpvdXQgdmVjMiB0ZXhDb29yZDsKaW4gdmVjMiBwb3M7Cm91dCB2ZWMzIHZpZXdSYXk7Cgp2b2lkIG1haW4oKQp7CiAgICB0ZXhDb29yZCA9IChwb3MgKiB2ZWMyKDAuNSkpICsgdmVjMigwLjUpOwogICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApOwogICAgdmVjNCB2ID0gdmVjNChwb3MueCwgcG9zLnksIDEuMCwgMS4wKTsKICAgIHYgPSB2ZWM0KGludlZQICogdik7CiAgICB2ZWMzIF82MiA9IHYueHl6IC8gdmVjMyh2LncpOwogICAgdiA9IHZlYzQoXzYyLngsIF82Mi55LCBfNjIueiwgdi53KTsKICAgIHZpZXdSYXkgPSB2Lnh5eiAtIGV5ZTsKfQoK";
kha_Shaders.smaa_blend_weight_fragData0 = "s23918:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCB2ZWMyIHNjcmVlblNpemVJbnY7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGVkZ2VzVGV4Owp1bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRCBhcmVhVGV4Owp1bmlmb3JtIGhpZ2hwIHNhbXBsZXIyRCBzZWFyY2hUZXg7CnVuaWZvcm0gaGlnaHAgdmVjMiBzY3JlZW5TaXplOwoKaW4gaGlnaHAgdmVjNCBvZmZzZXQwOwppbiBoaWdocCB2ZWM0IG9mZnNldDI7CmluIGhpZ2hwIHZlYzQgb2Zmc2V0MTsKb3V0IGhpZ2hwIHZlYzQgZnJhZ0NvbG9yOwppbiBoaWdocCB2ZWMyIHRleENvb3JkOwppbiBoaWdocCB2ZWMyIHBpeGNvb3JkOwpoaWdocCB2ZWMyIGNkd19lbmQ7CgpoaWdocCB2ZWM0IHRleHR1cmVMb2RBKGhpZ2hwIHNhbXBsZXIyRCB0ZXgsIGhpZ2hwIHZlYzIgY29vcmQsIGhpZ2hwIGZsb2F0IGxvZCkKewogICAgcmV0dXJuIHRleHR1cmVMb2QodGV4LCBjb29yZCwgbG9kKTsKfQoKaGlnaHAgdmVjMiBTTUFBU2VhcmNoRGlhZzEoaGlnaHAgdmVjMiB0ZXhjb29yZCwgaGlnaHAgdmVjMiBkaXIpCnsKICAgIGhpZ2hwIHZlYzQgY29vcmQgPSB2ZWM0KHRleGNvb3JkLCAtMS4wLCAxLjApOwogICAgaGlnaHAgdmVjMyB0ID0gdmVjMyhzY3JlZW5TaXplSW52LCAxLjApOwogICAgaGlnaHAgZmxvYXQgY3cgPSBjb29yZC53OwogICAgd2hpbGUgKChjb29yZC56IDwgNy4wKSAmJiAoY3cgPiAwLjg5OTk5OTk3NjE1ODE0MjA4OTg0Mzc1KSkKICAgIHsKICAgICAgICBoaWdocCB2ZWMzIF8xODEgPSAodCAqIHZlYzMoZGlyLCAxLjApKSArIGNvb3JkLnh5ejsKICAgICAgICBjb29yZCA9IHZlYzQoXzE4MS54LCBfMTgxLnksIF8xODEueiwgY29vcmQudyk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbSA9IGNvb3JkLnh5OwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzEgPSAwLjA7CiAgICAgICAgY2R3X2VuZCA9IHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbSwgcGFyYW1fMSkueHk7CiAgICAgICAgY3cgPSBkb3QoY2R3X2VuZCwgdmVjMigwLjUpKTsKICAgIH0KICAgIGNvb3JkLncgPSBjdzsKICAgIHJldHVybiBjb29yZC56dzsKfQoKaGlnaHAgdmVjNCBTTUFBRGVjb2RlRGlhZ0JpbGluZWFyQWNjZXNzKGlub3V0IGhpZ2hwIHZlYzQgZSkKewogICAgaGlnaHAgdmVjMiBfMTI5ID0gZS54eiAqIGFicygoZS54eiAqIDUuMCkgLSB2ZWMyKDMuNzUpKTsKICAgIGUgPSB2ZWM0KF8xMjkueCwgZS55LCBfMTI5LnksIGUudyk7CiAgICByZXR1cm4gZmxvb3IoZSArIHZlYzQoMC41KSk7Cn0KCmhpZ2hwIHZlYzIgU01BQUFyZWFEaWFnKGhpZ2hwIHZlYzIgZGlzdCwgaGlnaHAgdmVjMiBlLCBoaWdocCBmbG9hdCBvZmZzZXQpCnsKICAgIGhpZ2hwIHZlYzIgdGV4Y29vcmQgPSAodmVjMigyMC4wKSAqIGUpICsgZGlzdDsKICAgIHRleGNvb3JkID0gKHZlYzIoMC4wMDYyNTAwMDAwOTMxMzIyNTc0NjE1NDc4NTE1NjI1LCAwLjAwMTc4NTcxNDI5NTY5Mjc0MTg3MDg4MDEyNjk1MzEyNSkgKiB0ZXhjb29yZCkgKyB2ZWMyKDAuMDAzMTI1MDAwMDQ2NTY2MTI4NzMwNzczOTI1NzgxMjUsIDAuMDAwODkyODU3MTQ3ODQ2MzcwOTM1NDQwMDYzNDc2NTYyNSk7CiAgICB0ZXhjb29yZC54ICs9IDAuNTsKICAgIHRleGNvb3JkLnkgKz0gKDAuMTQyODU3MTQ5MjQzMzU0Nzk3MzYzMjgxMjUgKiBvZmZzZXQpOwogICAgcmV0dXJuIHRleHR1cmVMb2QoYXJlYVRleCwgdGV4Y29vcmQsIDAuMCkueHk7Cn0KCmhpZ2hwIHZlYzIgU01BQURlY29kZURpYWdCaWxpbmVhckFjY2Vzcyhpbm91dCBoaWdocCB2ZWMyIGUpCnsKICAgIGUueCAqPSBhYnMoKDUuMCAqIGUueCkgLSAzLjc1KTsKICAgIHJldHVybiBmbG9vcihlICsgdmVjMigwLjUpKTsKfQoKaGlnaHAgdmVjMiBTTUFBU2VhcmNoRGlhZzIoaGlnaHAgdmVjMiB0ZXhjb29yZCwgaGlnaHAgdmVjMiBkaXIpCnsKICAgIGhpZ2hwIHZlYzQgY29vcmQgPSB2ZWM0KHRleGNvb3JkLCAtMS4wLCAxLjApOwogICAgY29vcmQueCArPSAoMC4yNSAqIHNjcmVlblNpemVJbnYueCk7CiAgICBoaWdocCB2ZWMzIHQgPSB2ZWMzKHNjcmVlblNpemVJbnYsIDEuMCk7CiAgICBoaWdocCBmbG9hdCBjdyA9IGNvb3JkLnc7CiAgICB3aGlsZSAoKGNvb3JkLnogPCA3LjApICYmIChjdyA%IDAuODk5OTk5OTc2MTU4MTQyMDg5ODQzNzUpKQogICAgewogICAgICAgIGhpZ2hwIHZlYzMgXzI0NCA9ICh0ICogdmVjMyhkaXIsIDEuMCkpICsgY29vcmQueHl6OwogICAgICAgIGNvb3JkID0gdmVjNChfMjQ0LngsIF8yNDQueSwgXzI0NC56LCBjb29yZC53KTsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtID0gY29vcmQueHk7CiAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMSA9IDAuMDsKICAgICAgICBjZHdfZW5kID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS54eTsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzIgPSBjZHdfZW5kOwogICAgICAgIGhpZ2hwIHZlYzIgXzI1NSA9IFNNQUFEZWNvZGVEaWFnQmlsaW5lYXJBY2Nlc3MocGFyYW1fMik7CiAgICAgICAgY2R3X2VuZCA9IF8yNTU7CiAgICAgICAgY3cgPSBkb3QoY2R3X2VuZCwgdmVjMigwLjUpKTsKICAgIH0KICAgIGNvb3JkLncgPSBjdzsKICAgIHJldHVybiBjb29yZC56dzsKfQoKaGlnaHAgdmVjMiBTTUFBQ2FsY3VsYXRlRGlhZ1dlaWdodHMoaGlnaHAgdmVjMiB0ZXhjb29yZCwgaGlnaHAgdmVjMiBlLCBoaWdocCB2ZWM0IHN1YnNhbXBsZUluZGljZXMpCnsKICAgIGhpZ2hwIHZlYzIgd2VpZ2h0cyA9IHZlYzIoMC4wKTsKICAgIGhpZ2hwIHZlYzQgZDsKICAgIGlmIChlLnggPiAwLjApCiAgICB7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbSA9IHRleGNvb3JkOwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMSA9IHZlYzIoLTEuMCwgMS4wKTsKICAgICAgICBoaWdocCB2ZWMyIF8zMTEgPSBTTUFBU2VhcmNoRGlhZzEocGFyYW0sIHBhcmFtXzEpOwogICAgICAgIGQgPSB2ZWM0KF8zMTEueCwgZC55LCBfMzExLnksIGQudyk7CiAgICAgICAgaGlnaHAgZmxvYXQgZGFkZCA9IGZsb2F0KGNkd19lbmQueSA%IDAuODk5OTk5OTc2MTU4MTQyMDg5ODQzNzUpOwogICAgICAgIGQueCArPSBkYWRkOwogICAgfQogICAgZWxzZQogICAgewogICAgICAgIGQgPSB2ZWM0KHZlYzIoMC4wKS54LCBkLnksIHZlYzIoMC4wKS55LCBkLncpOwogICAgfQogICAgaGlnaHAgdmVjMiBwYXJhbV8yID0gdGV4Y29vcmQ7CiAgICBoaWdocCB2ZWMyIHBhcmFtXzMgPSB2ZWMyKDEuMCwgLTEuMCk7CiAgICBoaWdocCB2ZWMyIF8zMzIgPSBTTUFBU2VhcmNoRGlhZzEocGFyYW1fMiwgcGFyYW1fMyk7CiAgICBkID0gdmVjNChkLngsIF8zMzIueCwgZC56LCBfMzMyLnkpOwogICAgaWYgKChkLnggKyBkLnkpID4gMi4wKQogICAgewogICAgICAgIGhpZ2hwIHZlYzQgY29vcmRzID0gKHZlYzQoKC1kLngpICsgMC4yNSwgZC54LCBkLnksICgtZC55KSAtIDAuMjUpICogc2NyZWVuU2l6ZUludi54eXh5KSArIHRleGNvb3JkLnh5eHk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV80ID0gY29vcmRzLnh5ICsgKHZlYzIoLTEuMCwgMC4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzUgPSAwLjA7CiAgICAgICAgaGlnaHAgdmVjMiBfMzc0ID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzQsIHBhcmFtXzUpLnh5OwogICAgICAgIGhpZ2hwIHZlYzQgYzsKICAgICAgICBjID0gdmVjNChfMzc0LngsIF8zNzQueSwgYy56LCBjLncpOwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fNiA9IGNvb3Jkcy56dyArICh2ZWMyKDEuMCwgMC4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzcgPSAwLjA7CiAgICAgICAgaGlnaHAgdmVjMiBfMzg2ID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzYsIHBhcmFtXzcpLnh5OwogICAgICAgIGMgPSB2ZWM0KGMueCwgYy55LCBfMzg2LngsIF8zODYueSk7CiAgICAgICAgaGlnaHAgdmVjNCBwYXJhbV84ID0gYzsKICAgICAgICBoaWdocCB2ZWM0IF8zOTEgPSBTTUFBRGVjb2RlRGlhZ0JpbGluZWFyQWNjZXNzKHBhcmFtXzgpOwogICAgICAgIGMgPSB2ZWM0KF8zOTEueSwgXzM5MS54LCBfMzkxLncsIF8zOTEueik7CiAgICAgICAgaGlnaHAgdmVjMiBjYyA9ICh2ZWMyKDIuMCkgKiBjLnh6KSArIGMueXc7CiAgICAgICAgaGlnaHAgZmxvYXQgYTFjb25keCA9IHN0ZXAoMC44OTk5OTk5NzYxNTgxNDIwODk4NDM3NSwgZC56KTsKICAgICAgICBoaWdocCBmbG9hdCBhMWNvbmR5ID0gc3RlcCgwLjg5OTk5OTk3NjE1ODE0MjA4OTg0Mzc1LCBkLncpOwogICAgICAgIGlmIChhMWNvbmR4ID09IDEuMCkKICAgICAgICB7CiAgICAgICAgICAgIGNjLnggPSAwLjA7CiAgICAgICAgfQogICAgICAgIGlmIChhMWNvbmR5ID09IDEuMCkKICAgICAgICB7CiAgICAgICAgICAgIGNjLnkgPSAwLjA7CiAgICAgICAgfQogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fOSA9IGQueHk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8xMCA9IGNjOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzExID0gc3Vic2FtcGxlSW5kaWNlcy56OwogICAgICAgIHdlaWdodHMgKz0gU01BQUFyZWFEaWFnKHBhcmFtXzksIHBhcmFtXzEwLCBwYXJhbV8xMSk7CiAgICB9CiAgICBoaWdocCB2ZWMyIHBhcmFtXzEyID0gdGV4Y29vcmQ7CiAgICBoaWdocCB2ZWMyIHBhcmFtXzEzID0gdmVjMigtMS4wKTsKICAgIGhpZ2hwIHZlYzIgXzQzNSA9IFNNQUFTZWFyY2hEaWFnMihwYXJhbV8xMiwgcGFyYW1fMTMpOwogICAgZCA9IHZlYzQoXzQzNS54LCBkLnksIF80MzUueSwgZC53KTsKICAgIGhpZ2hwIHZlYzIgcGFyYW1fMTQgPSB0ZXhjb29yZCArICh2ZWMyKDEuMCwgMC4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMTUgPSAwLjA7CiAgICBpZiAodGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzE0LCBwYXJhbV8xNSkueCA%IDAuMCkKICAgIHsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzE2ID0gdGV4Y29vcmQ7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8xNyA9IHZlYzIoMS4wKTsKICAgICAgICBoaWdocCB2ZWMyIF80NTMgPSBTTUFBU2VhcmNoRGlhZzIocGFyYW1fMTYsIHBhcmFtXzE3KTsKICAgICAgICBkID0gdmVjNChkLngsIF80NTMueCwgZC56LCBfNDUzLnkpOwogICAgICAgIGhpZ2hwIGZsb2F0IGRhZGRfMSA9IGZsb2F0KGNkd19lbmQueSA%IDAuODk5OTk5OTc2MTU4MTQyMDg5ODQzNzUpOwogICAgICAgIGQueSArPSBkYWRkXzE7CiAgICB9CiAgICBlbHNlCiAgICB7CiAgICAgICAgZCA9IHZlYzQoZC54LCB2ZWMyKDAuMCkueCwgZC56LCB2ZWMyKDAuMCkueSk7CiAgICB9CiAgICBpZiAoKGQueCArIGQueSkgPiAyLjApCiAgICB7CiAgICAgICAgaGlnaHAgdmVjNCBjb29yZHNfMSA9ICh2ZWM0KC1kLngsIC1kLngsIGQueSwgZC55KSAqIHNjcmVlblNpemVJbnYueHl4eSkgKyB0ZXhjb29yZC54eXh5OwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMTggPSBjb29yZHNfMS54eSArICh2ZWMyKC0xLjAsIDAuMCkgKiBzY3JlZW5TaXplSW52KTsKICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8xOSA9IDAuMDsKICAgICAgICBoaWdocCB2ZWM0IGNfMTsKICAgICAgICBjXzEueCA9IHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbV8xOCwgcGFyYW1fMTkpLnk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8yMCA9IGNvb3Jkc18xLnh5ICsgKHZlYzIoMC4wLCAtMS4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzIxID0gMC4wOwogICAgICAgIGNfMS55ID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzIwLCBwYXJhbV8yMSkueDsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzIyID0gY29vcmRzXzEuencgKyAodmVjMigxLjAsIDAuMCkgKiBzY3JlZW5TaXplSW52KTsKICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8yMyA9IDAuMDsKICAgICAgICBoaWdocCB2ZWMyIF81MjUgPSB0ZXh0dXJlTG9kQShlZGdlc1RleCwgcGFyYW1fMjIsIHBhcmFtXzIzKS55eDsKICAgICAgICBjXzEgPSB2ZWM0KGNfMS54LCBjXzEueSwgXzUyNS54LCBfNTI1LnkpOwogICAgICAgIGhpZ2hwIHZlYzIgY2NfMSA9ICh2ZWMyKDIuMCkgKiBjXzEueHopICsgY18xLnl3OwogICAgICAgIGhpZ2hwIGZsb2F0IGExY29uZHhfMSA9IHN0ZXAoMC44OTk5OTk5NzYxNTgxNDIwODk4NDM3NSwgZC56KTsKICAgICAgICBoaWdocCBmbG9hdCBhMWNvbmR5XzEgPSBzdGVwKDAuODk5OTk5OTc2MTU4MTQyMDg5ODQzNzUsIGQudyk7CiAgICAgICAgaWYgKGExY29uZHhfMSA9PSAxLjApCiAgICAgICAgewogICAgICAgICAgICBjY18xLnggPSAwLjA7CiAgICAgICAgfQogICAgICAgIGlmIChhMWNvbmR5XzEgPT0gMS4wKQogICAgICAgIHsKICAgICAgICAgICAgY2NfMS55ID0gMC4wOwogICAgICAgIH0KICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzI0ID0gZC54eTsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzI1ID0gY2NfMTsKICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8yNiA9IHN1YnNhbXBsZUluZGljZXMudzsKICAgICAgICB3ZWlnaHRzICs9IFNNQUFBcmVhRGlhZyhwYXJhbV8yNCwgcGFyYW1fMjUsIHBhcmFtXzI2KS55eDsKICAgIH0KICAgIHJldHVybiB3ZWlnaHRzOwp9CgpoaWdocCBmbG9hdCBTTUFBU2VhcmNoTGVuZ3RoKGhpZ2hwIHZlYzIgZSwgaGlnaHAgZmxvYXQgb2Zmc2V0KQp7CiAgICBoaWdocCB2ZWMyIHNjYWxlID0gdmVjMigzMy4wLCAtMzMuMCk7CiAgICBoaWdocCB2ZWMyIGJpYXMgPSB2ZWMyKDY2LjAsIDMzLjApICogdmVjMihvZmZzZXQsIDEuMCk7CiAgICBzY2FsZSArPSB2ZWMyKC0xLjAsIDEuMCk7CiAgICBiaWFzICs9IHZlYzIoMC41LCAtMC41KTsKICAgIHNjYWxlICo9IHZlYzIoMC4wMTU2MjUsIDAuMDYyNSk7CiAgICBiaWFzICo9IHZlYzIoMC4wMTU2MjUsIDAuMDYyNSk7CiAgICBoaWdocCB2ZWMyIGNvb3JkID0gKHNjYWxlICogZSkgKyBiaWFzOwogICAgcmV0dXJuIHRleHR1cmVMb2Qoc2VhcmNoVGV4LCBjb29yZCwgMC4wKS54Owp9CgpoaWdocCBmbG9hdCBTTUFBU2VhcmNoWExlZnQoaW5vdXQgaGlnaHAgdmVjMiB0ZXhjb29yZCwgaGlnaHAgZmxvYXQgZW5kKQp7CiAgICBoaWdocCB2ZWMyIGUgPSB2ZWMyKDAuMCwgMS4wKTsKICAgIGZvciAoOzspCiAgICB7CiAgICAgICAgYm9vbCBfNjE0ID0gdGV4Y29vcmQueCA%IGVuZDsKICAgICAgICBib29sIF82MjE7CiAgICAgICAgaWYgKF82MTQpCiAgICAgICAgewogICAgICAgICAgICBfNjIxID0gZS55ID4gMC44MjgxMDAwMjU2NTM4MzkxMTEzMjgxMjU7CiAgICAgICAgfQogICAgICAgIGVsc2UKICAgICAgICB7CiAgICAgICAgICAgIF82MjEgPSBfNjE0OwogICAgICAgIH0KICAgICAgICBib29sIF82Mjc7CiAgICAgICAgaWYgKF82MjEpCiAgICAgICAgewogICAgICAgICAgICBfNjI3ID0gZS54ID09IDAuMDsKICAgICAgICB9CiAgICAgICAgZWxzZQogICAgICAgIHsKICAgICAgICAgICAgXzYyNyA9IF82MjE7CiAgICAgICAgfQogICAgICAgIGlmIChfNjI3KQogICAgICAgIHsKICAgICAgICAgICAgaGlnaHAgdmVjMiBwYXJhbSA9IHRleGNvb3JkOwogICAgICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8xID0gMC4wOwogICAgICAgICAgICBlID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS54eTsKICAgICAgICAgICAgdGV4Y29vcmQgPSAodmVjMigtMi4wLCAtMC4wKSAqIHNjcmVlblNpemVJbnYpICsgdGV4Y29vcmQ7CiAgICAgICAgICAgIGNvbnRpbnVlOwogICAgICAgIH0KICAgICAgICBlbHNlCiAgICAgICAgewogICAgICAgICAgICBicmVhazsKICAgICAgICB9CiAgICB9CiAgICBoaWdocCB2ZWMyIHBhcmFtXzIgPSBlOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMyA9IDAuMDsKICAgIGhpZ2hwIGZsb2F0IG9mZnNldCA9ICgoLTIuMDA3ODc0MDExOTkzNDA4MjAzMTI1KSAqIFNNQUFTZWFyY2hMZW5ndGgocGFyYW1fMiwgcGFyYW1fMykpICsgMy4yNTsKICAgIHJldHVybiAoc2NyZWVuU2l6ZUludi54ICogb2Zmc2V0KSArIHRleGNvb3JkLng7Cn0KCmhpZ2hwIGZsb2F0IFNNQUFTZWFyY2hYUmlnaHQoaW5vdXQgaGlnaHAgdmVjMiB0ZXhjb29yZCwgaGlnaHAgZmxvYXQgZW5kKQp7CiAgICBoaWdocCB2ZWMyIGUgPSB2ZWMyKDAuMCwgMS4wKTsKICAgIGZvciAoOzspCiAgICB7CiAgICAgICAgYm9vbCBfNjY3ID0gdGV4Y29vcmQueCA8IGVuZDsKICAgICAgICBib29sIF82NzM7CiAgICAgICAgaWYgKF82NjcpCiAgICAgICAgewogICAgICAgICAgICBfNjczID0gZS55ID4gMC44MjgxMDAwMjU2NTM4MzkxMTEzMjgxMjU7CiAgICAgICAgfQogICAgICAgIGVsc2UKICAgICAgICB7CiAgICAgICAgICAgIF82NzMgPSBfNjY3OwogICAgICAgIH0KICAgICAgICBib29sIF82Nzk7CiAgICAgICAgaWYgKF82NzMpCiAgICAgICAgewogICAgICAgICAgICBfNjc5ID0gZS54ID09IDAuMDsKICAgICAgICB9CiAgICAgICAgZWxzZQogICAgICAgIHsKICAgICAgICAgICAgXzY3OSA9IF82NzM7CiAgICAgICAgfQogICAgICAgIGlmIChfNjc5KQogICAgICAgIHsKICAgICAgICAgICAgaGlnaHAgdmVjMiBwYXJhbSA9IHRleGNvb3JkOwogICAgICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8xID0gMC4wOwogICAgICAgICAgICBlID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS54eTsKICAgICAgICAgICAgdGV4Y29vcmQgPSAodmVjMigyLjAsIDAuMCkgKiBzY3JlZW5TaXplSW52KSArIHRleGNvb3JkOwogICAgICAgICAgICBjb250aW51ZTsKICAgICAgICB9CiAgICAgICAgZWxzZQogICAgICAgIHsKICAgICAgICAgICAgYnJlYWs7CiAgICAgICAgfQogICAgfQogICAgaGlnaHAgdmVjMiBwYXJhbV8yID0gZTsKICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzMgPSAwLjU7CiAgICBoaWdocCBmbG9hdCBvZmZzZXQgPSAoKC0yLjAwNzg3NDAxMTk5MzQwODIwMzEyNSkgKiBTTUFBU2VhcmNoTGVuZ3RoKHBhcmFtXzIsIHBhcmFtXzMpKSArIDMuMjU7CiAgICByZXR1cm4gKCgtc2NyZWVuU2l6ZUludi54KSAqIG9mZnNldCkgKyB0ZXhjb29yZC54Owp9CgpoaWdocCB2ZWMyIFNNQUFBcmVhKGhpZ2hwIHZlYzIgZGlzdCwgaGlnaHAgZmxvYXQgZTEsIGhpZ2hwIGZsb2F0IGUyLCBoaWdocCBmbG9hdCBvZmZzZXQpCnsKICAgIGhpZ2hwIHZlYzIgdGV4Y29vcmQgPSAodmVjMigxNi4wKSAqIGZsb29yKCh2ZWMyKGUxLCBlMikgKiA0LjApICsgdmVjMigwLjUpKSkgKyBkaXN0OwogICAgdGV4Y29vcmQgPSAodmVjMigwLjAwNjI1MDAwMDA5MzEzMjI1NzQ2MTU0Nzg1MTU2MjUsIDAuMDAxNzg1NzE0Mjk1NjkyNzQxODcwODgwMTI2OTUzMTI1KSAqIHRleGNvb3JkKSArIHZlYzIoMC4wMDMxMjUwMDAwNDY1NjYxMjg3MzA3NzM5MjU3ODEyNSwgMC4wMDA4OTI4NTcxNDc4NDYzNzA5MzU0NDAwNjM0NzY1NjI1KTsKICAgIHRleGNvb3JkLnkgPSAoMC4xNDI4NTcxNDkyNDMzNTQ3OTczNjMyODEyNSAqIG9mZnNldCkgKyB0ZXhjb29yZC55OwogICAgcmV0dXJuIHRleHR1cmVMb2QoYXJlYVRleCwgdGV4Y29vcmQsIDAuMCkueHk7Cn0KCmhpZ2hwIHZlYzIgU01BQURldGVjdEhvcml6b250YWxDb3JuZXJQYXR0ZXJuKGlub3V0IGhpZ2hwIHZlYzIgd2VpZ2h0cywgaGlnaHAgdmVjNCB0ZXhjb29yZCwgaGlnaHAgdmVjMiBkKQp7CiAgICBoaWdocCB2ZWMyIGxlZnRSaWdodCA9IHN0ZXAoZCwgZC55eCk7CiAgICBoaWdocCB2ZWMyIHJvdW5kaW5nID0gbGVmdFJpZ2h0ICogMC43NTsKICAgIHJvdW5kaW5nIC89IHZlYzIobGVmdFJpZ2h0LnggKyBsZWZ0UmlnaHQueSk7CiAgICBoaWdocCB2ZWMyIGZhY3RvciA9IHZlYzIoMS4wKTsKICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhjb29yZC54eSArICh2ZWMyKDAuMCwgMS4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMSA9IDAuMDsKICAgIGZhY3Rvci54IC09IChyb3VuZGluZy54ICogdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS54KTsKICAgIGhpZ2hwIHZlYzIgcGFyYW1fMiA9IHRleGNvb3JkLnp3ICsgKHZlYzIoMS4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMyA9IDAuMDsKICAgIGZhY3Rvci54IC09IChyb3VuZGluZy55ICogdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzIsIHBhcmFtXzMpLngpOwogICAgaGlnaHAgdmVjMiBwYXJhbV80ID0gdGV4Y29vcmQueHkgKyAodmVjMigwLjAsIC0yLjApICogc2NyZWVuU2l6ZUludik7CiAgICBoaWdocCBmbG9hdCBwYXJhbV81ID0gMC4wOwogICAgZmFjdG9yLnkgLT0gKHJvdW5kaW5nLnggKiB0ZXh0dXJlTG9kQShlZGdlc1RleCwgcGFyYW1fNCwgcGFyYW1fNSkueCk7CiAgICBoaWdocCB2ZWMyIHBhcmFtXzYgPSB0ZXhjb29yZC56dyArICh2ZWMyKDEuMCwgLTIuMCkgKiBzY3JlZW5TaXplSW52KTsKICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzcgPSAwLjA7CiAgICBmYWN0b3IueSAtPSAocm91bmRpbmcueSAqIHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbV82LCBwYXJhbV83KS54KTsKICAgIHdlaWdodHMgKj0gY2xhbXAoZmFjdG9yLCB2ZWMyKDAuMCksIHZlYzIoMS4wKSk7CiAgICByZXR1cm4gd2VpZ2h0czsKfQoKaGlnaHAgZmxvYXQgU01BQVNlYXJjaFlVcChpbm91dCBoaWdocCB2ZWMyIHRleGNvb3JkLCBoaWdocCBmbG9hdCBlbmQpCnsKICAgIGhpZ2hwIHZlYzIgZSA9IHZlYzIoMS4wLCAwLjApOwogICAgZm9yICg7OykKICAgIHsKICAgICAgICBib29sIF83MTYgPSB0ZXhjb29yZC55ID4gZW5kOwogICAgICAgIGJvb2wgXzcyMjsKICAgICAgICBpZiAoXzcxNikKICAgICAgICB7CiAgICAgICAgICAgIF83MjIgPSBlLnggPiAwLjgyODEwMDAyNTY1MzgzOTExMTMyODEyNTsKICAgICAgICB9CiAgICAgICAgZWxzZQogICAgICAgIHsKICAgICAgICAgICAgXzcyMiA9IF83MTY7CiAgICAgICAgfQogICAgICAgIGJvb2wgXzcyODsKICAgICAgICBpZiAoXzcyMikKICAgICAgICB7CiAgICAgICAgICAgIF83MjggPSBlLnkgPT0gMC4wOwogICAgICAgIH0KICAgICAgICBlbHNlCiAgICAgICAgewogICAgICAgICAgICBfNzI4ID0gXzcyMjsKICAgICAgICB9CiAgICAgICAgaWYgKF83MjgpCiAgICAgICAgewogICAgICAgICAgICBoaWdocCB2ZWMyIHBhcmFtID0gdGV4Y29vcmQ7CiAgICAgICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzEgPSAwLjA7CiAgICAgICAgICAgIGUgPSB0ZXh0dXJlTG9kQShlZGdlc1RleCwgcGFyYW0sIHBhcmFtXzEpLnh5OwogICAgICAgICAgICB0ZXhjb29yZCA9ICh2ZWMyKC0wLjAsIC0yLjApICogc2NyZWVuU2l6ZUludikgKyB0ZXhjb29yZDsKICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgfQogICAgICAgIGVsc2UKICAgICAgICB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGhpZ2hwIHZlYzIgcGFyYW1fMiA9IGUueXg7CiAgICBoaWdocCBmbG9hdCBwYXJhbV8zID0gMC4wOwogICAgaGlnaHAgZmxvYXQgb2Zmc2V0ID0gKCgtMi4wMDc4NzQwMTE5OTM0MDgyMDMxMjUpICogU01BQVNlYXJjaExlbmd0aChwYXJhbV8yLCBwYXJhbV8zKSkgKyAzLjI1OwogICAgcmV0dXJuIChzY3JlZW5TaXplSW52LnkgKiBvZmZzZXQpICsgdGV4Y29vcmQueTsKfQoKaGlnaHAgZmxvYXQgU01BQVNlYXJjaFlEb3duKGlub3V0IGhpZ2hwIHZlYzIgdGV4Y29vcmQsIGhpZ2hwIGZsb2F0IGVuZCkKewogICAgaGlnaHAgdmVjMiBlID0gdmVjMigxLjAsIDAuMCk7CiAgICBmb3IgKDs7KQogICAgewogICAgICAgIGJvb2wgXzc2NSA9IHRleGNvb3JkLnkgPCBlbmQ7CiAgICAgICAgYm9vbCBfNzcxOwogICAgICAgIGlmIChfNzY1KQogICAgICAgIHsKICAgICAgICAgICAgXzc3MSA9IGUueCA%IDAuODI4MTAwMDI1NjUzODM5MTExMzI4MTI1OwogICAgICAgIH0KICAgICAgICBlbHNlCiAgICAgICAgewogICAgICAgICAgICBfNzcxID0gXzc2NTsKICAgICAgICB9CiAgICAgICAgYm9vbCBfNzc3OwogICAgICAgIGlmIChfNzcxKQogICAgICAgIHsKICAgICAgICAgICAgXzc3NyA9IGUueSA9PSAwLjA7CiAgICAgICAgfQogICAgICAgIGVsc2UKICAgICAgICB7CiAgICAgICAgICAgIF83NzcgPSBfNzcxOwogICAgICAgIH0KICAgICAgICBpZiAoXzc3NykKICAgICAgICB7CiAgICAgICAgICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhjb29yZDsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMSA9IDAuMDsKICAgICAgICAgICAgZSA9IHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbSwgcGFyYW1fMSkueHk7CiAgICAgICAgICAgIHRleGNvb3JkID0gKHZlYzIoMC4wLCAyLjApICogc2NyZWVuU2l6ZUludikgKyB0ZXhjb29yZDsKICAgICAgICAgICAgY29udGludWU7CiAgICAgICAgfQogICAgICAgIGVsc2UKICAgICAgICB7CiAgICAgICAgICAgIGJyZWFrOwogICAgICAgIH0KICAgIH0KICAgIGhpZ2hwIHZlYzIgcGFyYW1fMiA9IGUueXg7CiAgICBoaWdocCBmbG9hdCBwYXJhbV8zID0gMC41OwogICAgaGlnaHAgZmxvYXQgb2Zmc2V0ID0gKCgtMi4wMDc4NzQwMTE5OTM0MDgyMDMxMjUpICogU01BQVNlYXJjaExlbmd0aChwYXJhbV8yLCBwYXJhbV8zKSkgKyAzLjI1OwogICAgcmV0dXJuICgoLXNjcmVlblNpemVJbnYueSkgKiBvZmZzZXQpICsgdGV4Y29vcmQueTsKfQoKaGlnaHAgdmVjMiBTTUFBRGV0ZWN0VmVydGljYWxDb3JuZXJQYXR0ZXJuKGlub3V0IGhpZ2hwIHZlYzIgd2VpZ2h0cywgaGlnaHAgdmVjNCB0ZXhjb29yZCwgaGlnaHAgdmVjMiBkKQp7CiAgICBoaWdocCB2ZWMyIGxlZnRSaWdodCA9IHN0ZXAoZCwgZC55eCk7CiAgICBoaWdocCB2ZWMyIHJvdW5kaW5nID0gbGVmdFJpZ2h0ICogMC43NTsKICAgIHJvdW5kaW5nIC89IHZlYzIobGVmdFJpZ2h0LnggKyBsZWZ0UmlnaHQueSk7CiAgICBoaWdocCB2ZWMyIGZhY3RvciA9IHZlYzIoMS4wKTsKICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhjb29yZC54eSArICh2ZWMyKDEuMCwgMC4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMSA9IDAuMDsKICAgIGZhY3Rvci54IC09IChyb3VuZGluZy54ICogdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS55KTsKICAgIGhpZ2hwIHZlYzIgcGFyYW1fMiA9IHRleGNvb3JkLnp3ICsgKHZlYzIoMS4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgaGlnaHAgZmxvYXQgcGFyYW1fMyA9IDAuMDsKICAgIGZhY3Rvci54IC09IChyb3VuZGluZy55ICogdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzIsIHBhcmFtXzMpLnkpOwogICAgaGlnaHAgdmVjMiBwYXJhbV80ID0gdGV4Y29vcmQueHkgKyAodmVjMigtMi4wLCAwLjApICogc2NyZWVuU2l6ZUludik7CiAgICBoaWdocCBmbG9hdCBwYXJhbV81ID0gMC4wOwogICAgZmFjdG9yLnkgLT0gKHJvdW5kaW5nLnggKiB0ZXh0dXJlTG9kQShlZGdlc1RleCwgcGFyYW1fNCwgcGFyYW1fNSkueSk7CiAgICBoaWdocCB2ZWMyIHBhcmFtXzYgPSB0ZXhjb29yZC56dyArICh2ZWMyKC0yLjAsIDEuMCkgKiBzY3JlZW5TaXplSW52KTsKICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzcgPSAwLjA7CiAgICBmYWN0b3IueSAtPSAocm91bmRpbmcueSAqIHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbV82LCBwYXJhbV83KS55KTsKICAgIHdlaWdodHMgKj0gY2xhbXAoZmFjdG9yLCB2ZWMyKDAuMCksIHZlYzIoMS4wKSk7CiAgICByZXR1cm4gd2VpZ2h0czsKfQoKaGlnaHAgdmVjNCBTTUFBQmxlbmRpbmdXZWlnaHRDYWxjdWxhdGlvblBTKGhpZ2hwIHZlYzIgdGV4Y29vcmQsIGhpZ2hwIHZlYzIgcGl4Y29vcmRfMSwgaGlnaHAgdmVjNCBzdWJzYW1wbGVJbmRpY2VzKQp7CiAgICBoaWdocCB2ZWM0IHdlaWdodHMgPSB2ZWM0KDAuMCk7CiAgICBoaWdocCB2ZWMyIHBhcmFtID0gdGV4Y29vcmQ7CiAgICBoaWdocCBmbG9hdCBwYXJhbV8xID0gMC4wOwogICAgaGlnaHAgdmVjMiBlID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtLCBwYXJhbV8xKS54eTsKICAgIGlmIChlLnkgPiAwLjApCiAgICB7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8yID0gdGV4Y29vcmQ7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8zID0gZTsKICAgICAgICBoaWdocCB2ZWM0IHBhcmFtXzQgPSBzdWJzYW1wbGVJbmRpY2VzOwogICAgICAgIGhpZ2hwIHZlYzIgXzEwMzkgPSBTTUFBQ2FsY3VsYXRlRGlhZ1dlaWdodHMocGFyYW1fMiwgcGFyYW1fMywgcGFyYW1fNCk7CiAgICAgICAgd2VpZ2h0cyA9IHZlYzQoXzEwMzkueCwgXzEwMzkueSwgd2VpZ2h0cy56LCB3ZWlnaHRzLncpOwogICAgICAgIGlmICh3ZWlnaHRzLnggPT0gKC13ZWlnaHRzLnkpKQogICAgICAgIHsKICAgICAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV81ID0gb2Zmc2V0MC54eTsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fNiA9IG9mZnNldDIueDsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgXzEwNjEgPSBTTUFBU2VhcmNoWExlZnQocGFyYW1fNSwgcGFyYW1fNik7CiAgICAgICAgICAgIGhpZ2hwIHZlYzMgY29vcmRzOwogICAgICAgICAgICBjb29yZHMueCA9IF8xMDYxOwogICAgICAgICAgICBjb29yZHMueSA9IG9mZnNldDEueTsKICAgICAgICAgICAgaGlnaHAgdmVjMiBkOwogICAgICAgICAgICBkLnggPSBjb29yZHMueDsKICAgICAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV83ID0gY29vcmRzLnh5OwogICAgICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV84ID0gMC4wOwogICAgICAgICAgICBoaWdocCBmbG9hdCBlMSA9IHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbV83LCBwYXJhbV84KS54OwogICAgICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzkgPSBvZmZzZXQwLnp3OwogICAgICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8xMCA9IG9mZnNldDIueTsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgXzEwODQgPSBTTUFBU2VhcmNoWFJpZ2h0KHBhcmFtXzksIHBhcmFtXzEwKTsKICAgICAgICAgICAgY29vcmRzLnogPSBfMTA4NDsKICAgICAgICAgICAgZC55ID0gY29vcmRzLno7CiAgICAgICAgICAgIGQgPSBhYnMoZmxvb3IoKChzY3JlZW5TaXplLnh4ICogZCkgKyAoLXBpeGNvb3JkXzEueHgpKSArIHZlYzIoMC41KSkpOwogICAgICAgICAgICBoaWdocCB2ZWMyIHNxcnRfZCA9IHNxcnQoZCk7CiAgICAgICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMTEgPSBjb29yZHMuenkgKyAodmVjMigxLjAsIDAuMCkgKiBzY3JlZW5TaXplSW52KTsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMTIgPSAwLjA7CiAgICAgICAgICAgIGhpZ2hwIGZsb2F0IGUyID0gdGV4dHVyZUxvZEEoZWRnZXNUZXgsIHBhcmFtXzExLCBwYXJhbV8xMikueDsKICAgICAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8xMyA9IHNxcnRfZDsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMTQgPSBlMTsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMTUgPSBlMjsKICAgICAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMTYgPSBzdWJzYW1wbGVJbmRpY2VzLnk7CiAgICAgICAgICAgIGhpZ2hwIHZlYzIgXzExMjQgPSBTTUFBQXJlYShwYXJhbV8xMywgcGFyYW1fMTQsIHBhcmFtXzE1LCBwYXJhbV8xNik7CiAgICAgICAgICAgIHdlaWdodHMgPSB2ZWM0KF8xMTI0LngsIF8xMTI0LnksIHdlaWdodHMueiwgd2VpZ2h0cy53KTsKICAgICAgICAgICAgY29vcmRzLnkgPSB0ZXhjb29yZC55OwogICAgICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzE3ID0gd2VpZ2h0cy54eTsKICAgICAgICAgICAgaGlnaHAgdmVjNCBwYXJhbV8xOCA9IGNvb3Jkcy54eXp5OwogICAgICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzE5ID0gZDsKICAgICAgICAgICAgaGlnaHAgdmVjMiBfMTEzOCA9IFNNQUFEZXRlY3RIb3Jpem9udGFsQ29ybmVyUGF0dGVybihwYXJhbV8xNywgcGFyYW1fMTgsIHBhcmFtXzE5KTsKICAgICAgICAgICAgd2VpZ2h0cyA9IHZlYzQoXzExMzgueCwgXzExMzgueSwgd2VpZ2h0cy56LCB3ZWlnaHRzLncpOwogICAgICAgIH0KICAgICAgICBlbHNlCiAgICAgICAgewogICAgICAgICAgICBlLnggPSAwLjA7CiAgICAgICAgfQogICAgfQogICAgaWYgKGUueCA%IDAuMCkKICAgIHsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzIwID0gb2Zmc2V0MS54eTsKICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8yMSA9IG9mZnNldDIuejsKICAgICAgICBoaWdocCBmbG9hdCBfMTE1NSA9IFNNQUFTZWFyY2hZVXAocGFyYW1fMjAsIHBhcmFtXzIxKTsKICAgICAgICBoaWdocCB2ZWMzIGNvb3Jkc18xOwogICAgICAgIGNvb3Jkc18xLnkgPSBfMTE1NTsKICAgICAgICBjb29yZHNfMS54ID0gb2Zmc2V0MC54OwogICAgICAgIGhpZ2hwIHZlYzIgZF8xOwogICAgICAgIGRfMS54ID0gY29vcmRzXzEueTsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzIyID0gY29vcmRzXzEueHk7CiAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMjMgPSAwLjA7CiAgICAgICAgaGlnaHAgZmxvYXQgZTFfMSA9IHRleHR1cmVMb2RBKGVkZ2VzVGV4LCBwYXJhbV8yMiwgcGFyYW1fMjMpLnk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbV8yNCA9IG9mZnNldDEuenc7CiAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMjUgPSBvZmZzZXQyLnc7CiAgICAgICAgaGlnaHAgZmxvYXQgXzExNzcgPSBTTUFBU2VhcmNoWURvd24ocGFyYW1fMjQsIHBhcmFtXzI1KTsKICAgICAgICBjb29yZHNfMS56ID0gXzExNzc7CiAgICAgICAgZF8xLnkgPSBjb29yZHNfMS56OwogICAgICAgIGRfMSA9IGFicyhmbG9vcigoKHNjcmVlblNpemUueXkgKiBkXzEpICsgKC1waXhjb29yZF8xLnl5KSkgKyB2ZWMyKDAuNSkpKTsKICAgICAgICBoaWdocCB2ZWMyIHNxcnRfZF8xID0gc3FydChkXzEpOwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMjYgPSBjb29yZHNfMS54eiArICh2ZWMyKDAuMCwgMS4wKSAqIHNjcmVlblNpemVJbnYpOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzI3ID0gMC4wOwogICAgICAgIGhpZ2hwIGZsb2F0IGUyXzEgPSB0ZXh0dXJlTG9kQShlZGdlc1RleCwgcGFyYW1fMjYsIHBhcmFtXzI3KS55OwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMjggPSBzcXJ0X2RfMTsKICAgICAgICBoaWdocCBmbG9hdCBwYXJhbV8yOSA9IGUxXzE7CiAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMzAgPSBlMl8xOwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzMxID0gc3Vic2FtcGxlSW5kaWNlcy54OwogICAgICAgIGhpZ2hwIHZlYzIgXzEyMTYgPSBTTUFBQXJlYShwYXJhbV8yOCwgcGFyYW1fMjksIHBhcmFtXzMwLCBwYXJhbV8zMSk7CiAgICAgICAgd2VpZ2h0cyA9IHZlYzQod2VpZ2h0cy54LCB3ZWlnaHRzLnksIF8xMjE2LngsIF8xMjE2LnkpOwogICAgICAgIGNvb3Jkc18xLnggPSB0ZXhjb29yZC54OwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMzIgPSB3ZWlnaHRzLnp3OwogICAgICAgIGhpZ2hwIHZlYzQgcGFyYW1fMzMgPSBjb29yZHNfMS54eXh6OwogICAgICAgIGhpZ2hwIHZlYzIgcGFyYW1fMzQgPSBkXzE7CiAgICAgICAgaGlnaHAgdmVjMiBfMTIzMCA9IFNNQUFEZXRlY3RWZXJ0aWNhbENvcm5lclBhdHRlcm4ocGFyYW1fMzIsIHBhcmFtXzMzLCBwYXJhbV8zNCk7CiAgICAgICAgd2VpZ2h0cyA9IHZlYzQod2VpZ2h0cy54LCB3ZWlnaHRzLnksIF8xMjMwLngsIF8xMjMwLnkpOwogICAgfQogICAgcmV0dXJuIHdlaWdodHM7Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhDb29yZDsKICAgIGhpZ2hwIHZlYzIgcGFyYW1fMSA9IHBpeGNvb3JkOwogICAgaGlnaHAgdmVjNCBwYXJhbV8yID0gdmVjNCgwLjApOwogICAgaGlnaHAgdmVjNCBfMTI0NiA9IFNNQUFCbGVuZGluZ1dlaWdodENhbGN1bGF0aW9uUFMocGFyYW0sIHBhcmFtXzEsIHBhcmFtXzIpOwogICAgZnJhZ0NvbG9yID0gXzEyNDY7Cn0KCg";
kha_Shaders.smaa_blend_weight_vertData0 = "s791:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIHZlYzIgc2NyZWVuU2l6ZTsKdW5pZm9ybSB2ZWMyIHNjcmVlblNpemVJbnY7CgpvdXQgdmVjMiB0ZXhDb29yZDsKaW4gdmVjMiBwb3M7Cm91dCB2ZWMyIHBpeGNvb3JkOwpvdXQgdmVjNCBvZmZzZXQwOwpvdXQgdmVjNCBvZmZzZXQxOwpvdXQgdmVjNCBvZmZzZXQyOwoKdm9pZCBtYWluKCkKewogICAgdGV4Q29vcmQgPSAocG9zICogdmVjMigwLjUpKSArIHZlYzIoMC41KTsKICAgIHBpeGNvb3JkID0gdGV4Q29vcmQgKiBzY3JlZW5TaXplOwogICAgb2Zmc2V0MCA9IChzY3JlZW5TaXplSW52Lnh5eHkgKiB2ZWM0KC0wLjI1LCAtMC4xMjUsIDEuMjUsIC0wLjEyNSkpICsgdGV4Q29vcmQueHl4eTsKICAgIG9mZnNldDEgPSAoc2NyZWVuU2l6ZUludi54eXh5ICogdmVjNCgtMC4xMjUsIC0wLjI1LCAtMC4xMjUsIDEuMjUpKSArIHRleENvb3JkLnh5eHk7CiAgICBvZmZzZXQyID0gKHNjcmVlblNpemVJbnYueHh5eSAqIHZlYzQoLTMyLjAsIDMyLjAsIC0zMi4wLCAzMi4wKSkgKyB2ZWM0KG9mZnNldDAueHosIG9mZnNldDEueXcpOwogICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApOwp9Cgo";
kha_Shaders.smaa_edge_detect_fragData0 = "s2311:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgY29sb3JUZXg7CgppbiBoaWdocCB2ZWM0IG9mZnNldDA7CmluIGhpZ2hwIHZlYzQgb2Zmc2V0MTsKaW4gaGlnaHAgdmVjNCBvZmZzZXQyOwpvdXQgaGlnaHAgdmVjNCBmcmFnQ29sb3I7CmluIGhpZ2hwIHZlYzIgdGV4Q29vcmQ7CgpoaWdocCB2ZWMyIFNNQUFDb2xvckVkZ2VEZXRlY3Rpb25QUyhoaWdocCB2ZWMyIHRleGNvb3JkKQp7CiAgICBoaWdocCB2ZWMyIHRocmVzaG9sZCA9IHZlYzIoMC4xMDAwMDAwMDE0OTAxMTYxMTkzODQ3NjU2MjUpOwogICAgaGlnaHAgdmVjMyBDID0gdGV4dHVyZUxvZChjb2xvclRleCwgdGV4Y29vcmQsIDAuMCkueHl6OwogICAgaGlnaHAgdmVjMyBDbGVmdCA9IHRleHR1cmVMb2QoY29sb3JUZXgsIG9mZnNldDAueHksIDAuMCkueHl6OwogICAgaGlnaHAgdmVjMyB0ID0gYWJzKEMgLSBDbGVmdCk7CiAgICBoaWdocCB2ZWM0IGRlbHRhOwogICAgZGVsdGEueCA9IG1heChtYXgodC54LCB0LnkpLCB0LnopOwogICAgaGlnaHAgdmVjMyBDdG9wID0gdGV4dHVyZUxvZChjb2xvclRleCwgb2Zmc2V0MC56dywgMC4wKS54eXo7CiAgICB0ID0gYWJzKEMgLSBDdG9wKTsKICAgIGRlbHRhLnkgPSBtYXgobWF4KHQueCwgdC55KSwgdC56KTsKICAgIGhpZ2hwIHZlYzIgZWRnZXMgPSBzdGVwKHRocmVzaG9sZCwgZGVsdGEueHkpOwogICAgaWYgKGRvdChlZGdlcywgdmVjMigxLjApKSA9PSAwLjApCiAgICB7CiAgICAgICAgZGlzY2FyZDsKICAgIH0KICAgIGhpZ2hwIHZlYzMgQ3JpZ2h0ID0gdGV4dHVyZUxvZChjb2xvclRleCwgb2Zmc2V0MS54eSwgMC4wKS54eXo7CiAgICB0ID0gYWJzKEMgLSBDcmlnaHQpOwogICAgZGVsdGEueiA9IG1heChtYXgodC54LCB0LnkpLCB0LnopOwogICAgaGlnaHAgdmVjMyBDYm90dG9tID0gdGV4dHVyZUxvZChjb2xvclRleCwgb2Zmc2V0MS56dywgMC4wKS54eXo7CiAgICB0ID0gYWJzKEMgLSBDYm90dG9tKTsKICAgIGRlbHRhLncgPSBtYXgobWF4KHQueCwgdC55KSwgdC56KTsKICAgIGhpZ2hwIHZlYzIgbWF4RGVsdGEgPSBtYXgoZGVsdGEueHksIGRlbHRhLnp3KTsKICAgIGhpZ2hwIHZlYzMgQ2xlZnRsZWZ0ID0gdGV4dHVyZUxvZChjb2xvclRleCwgb2Zmc2V0Mi54eSwgMC4wKS54eXo7CiAgICB0ID0gYWJzKEMgLSBDbGVmdGxlZnQpOwogICAgZGVsdGEueiA9IG1heChtYXgodC54LCB0LnkpLCB0LnopOwogICAgaGlnaHAgdmVjMyBDdG9wdG9wID0gdGV4dHVyZUxvZChjb2xvclRleCwgb2Zmc2V0Mi56dywgMC4wKS54eXo7CiAgICB0ID0gYWJzKEMgLSBDdG9wdG9wKTsKICAgIGRlbHRhLncgPSBtYXgobWF4KHQueCwgdC55KSwgdC56KTsKICAgIG1heERlbHRhID0gbWF4KG1heERlbHRhLCBkZWx0YS56dyk7CiAgICBoaWdocCBmbG9hdCBmaW5hbERlbHRhID0gbWF4KG1heERlbHRhLngsIG1heERlbHRhLnkpOwogICAgZWRnZXMgKj0gc3RlcCh2ZWMyKGZpbmFsRGVsdGEpLCBkZWx0YS54eSAqIDIuMCk7CiAgICByZXR1cm4gZWRnZXM7Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhDb29yZDsKICAgIGhpZ2hwIHZlYzIgXzIwNCA9IFNNQUFDb2xvckVkZ2VEZXRlY3Rpb25QUyhwYXJhbSk7CiAgICBmcmFnQ29sb3IgPSB2ZWM0KF8yMDQueCwgXzIwNC55LCBmcmFnQ29sb3IueiwgZnJhZ0NvbG9yLncpOwp9Cgo";
kha_Shaders.smaa_edge_detect_vertData0 = "s635:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIHZlYzIgc2NyZWVuU2l6ZUludjsKCm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHBvczsKb3V0IHZlYzQgb2Zmc2V0MDsKb3V0IHZlYzQgb2Zmc2V0MTsKb3V0IHZlYzQgb2Zmc2V0MjsKCnZvaWQgbWFpbigpCnsKICAgIHRleENvb3JkID0gKHBvcyAqIHZlYzIoMC41KSkgKyB2ZWMyKDAuNSk7CiAgICBvZmZzZXQwID0gKHNjcmVlblNpemVJbnYueHl4eSAqIHZlYzQoLTEuMCwgMC4wLCAwLjAsIC0xLjApKSArIHRleENvb3JkLnh5eHk7CiAgICBvZmZzZXQxID0gKHNjcmVlblNpemVJbnYueHl4eSAqIHZlYzQoMS4wLCAwLjAsIDAuMCwgMS4wKSkgKyB0ZXhDb29yZC54eXh5OwogICAgb2Zmc2V0MiA9IChzY3JlZW5TaXplSW52Lnh5eHkgKiB2ZWM0KC0yLjAsIDAuMCwgMC4wLCAtMi4wKSkgKyB0ZXhDb29yZC54eXh5OwogICAgZ2xfUG9zaXRpb24gPSB2ZWM0KHBvcywgMC4wLCAxLjApOwp9Cgo";
kha_Shaders.smaa_neighborhood_blend_fragData0 = "s2608:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgYmxlbmRUZXg7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGNvbG9yVGV4Owp1bmlmb3JtIGhpZ2hwIHZlYzIgc2NyZWVuU2l6ZUludjsKCm91dCBoaWdocCB2ZWM0IGZyYWdDb2xvcjsKaW4gaGlnaHAgdmVjMiB0ZXhDb29yZDsKaW4gaGlnaHAgdmVjNCBvZmZzZXQ7CgpoaWdocCB2ZWM0IHRleHR1cmVMb2RBKGhpZ2hwIHNhbXBsZXIyRCB0ZXgsIGhpZ2hwIHZlYzIgY29vcmRzLCBoaWdocCBmbG9hdCBsb2QpCnsKICAgIHJldHVybiB0ZXh0dXJlTG9kKHRleCwgY29vcmRzLCBsb2QpOwp9CgpoaWdocCB2ZWM0IFNNQUFOZWlnaGJvcmhvb2RCbGVuZGluZ1BTKGhpZ2hwIHZlYzIgdGV4Y29vcmQsIGhpZ2hwIHZlYzQgb2Zmc2V0XzEpCnsKICAgIGhpZ2hwIHZlYzQgYTsKICAgIGEueCA9IHRleHR1cmVMb2QoYmxlbmRUZXgsIG9mZnNldF8xLnh5LCAwLjApLnc7CiAgICBhLnkgPSB0ZXh0dXJlTG9kKGJsZW5kVGV4LCBvZmZzZXRfMS56dywgMC4wKS55OwogICAgaGlnaHAgdmVjMiBfNTQgPSB0ZXh0dXJlTG9kKGJsZW5kVGV4LCB0ZXhjb29yZCwgMC4wKS54ejsKICAgIGEgPSB2ZWM0KGEueCwgYS55LCBfNTQueSwgXzU0LngpOwogICAgaWYgKGRvdChhLCB2ZWM0KDEuMCkpIDwgOS45OTk5OTk3NDczNzg3NTE2MzU1NTE0NTI2MzY3MTg4ZS0wNikKICAgIHsKICAgICAgICBoaWdocCB2ZWM0IGNvbG9yID0gdGV4dHVyZUxvZChjb2xvclRleCwgdGV4Y29vcmQsIDAuMCk7CiAgICAgICAgcmV0dXJuIGNvbG9yOwogICAgfQogICAgZWxzZQogICAgewogICAgICAgIGJvb2wgaCA9IG1heChhLngsIGEueikgPiBtYXgoYS55LCBhLncpOwogICAgICAgIGhpZ2hwIHZlYzQgYmxlbmRpbmdPZmZzZXQgPSB2ZWM0KDAuMCwgYS55LCAwLjAsIGEudyk7CiAgICAgICAgaGlnaHAgdmVjMiBibGVuZGluZ1dlaWdodCA9IGEueXc7CiAgICAgICAgaWYgKGgpCiAgICAgICAgewogICAgICAgICAgICBibGVuZGluZ09mZnNldC54ID0gYS54OwogICAgICAgICAgICBibGVuZGluZ09mZnNldC55ID0gMC4wOwogICAgICAgICAgICBibGVuZGluZ09mZnNldC56ID0gYS56OwogICAgICAgICAgICBibGVuZGluZ09mZnNldC53ID0gMC4wOwogICAgICAgICAgICBibGVuZGluZ1dlaWdodC54ID0gYS54OwogICAgICAgICAgICBibGVuZGluZ1dlaWdodC55ID0gYS56OwogICAgICAgIH0KICAgICAgICBibGVuZGluZ1dlaWdodCAvPSB2ZWMyKGRvdChibGVuZGluZ1dlaWdodCwgdmVjMigxLjApKSk7CiAgICAgICAgaGlnaHAgdmVjMiB0YyA9IHRleGNvb3JkOwogICAgICAgIGhpZ2hwIHZlYzQgYmxlbmRpbmdDb29yZCA9IChibGVuZGluZ09mZnNldCAqIHZlYzQoc2NyZWVuU2l6ZUludiwgLXNjcmVlblNpemVJbnYpKSArIHRjLnh5eHk7CiAgICAgICAgaGlnaHAgdmVjMiBwYXJhbSA9IGJsZW5kaW5nQ29vcmQueHk7CiAgICAgICAgaGlnaHAgZmxvYXQgcGFyYW1fMSA9IDAuMDsKICAgICAgICBoaWdocCB2ZWM0IGNvbG9yXzEgPSB0ZXh0dXJlTG9kQShjb2xvclRleCwgcGFyYW0sIHBhcmFtXzEpICogYmxlbmRpbmdXZWlnaHQueDsKICAgICAgICBoaWdocCB2ZWMyIHBhcmFtXzIgPSBibGVuZGluZ0Nvb3JkLnp3OwogICAgICAgIGhpZ2hwIGZsb2F0IHBhcmFtXzMgPSAwLjA7CiAgICAgICAgY29sb3JfMSArPSAodGV4dHVyZUxvZEEoY29sb3JUZXgsIHBhcmFtXzIsIHBhcmFtXzMpICogYmxlbmRpbmdXZWlnaHQueSk7CiAgICAgICAgcmV0dXJuIGNvbG9yXzE7CiAgICB9Cn0KCnZvaWQgbWFpbigpCnsKICAgIGhpZ2hwIHZlYzIgcGFyYW0gPSB0ZXhDb29yZDsKICAgIGhpZ2hwIHZlYzQgcGFyYW1fMSA9IG9mZnNldDsKICAgIGZyYWdDb2xvciA9IFNNQUFOZWlnaGJvcmhvb2RCbGVuZGluZ1BTKHBhcmFtLCBwYXJhbV8xKTsKfQoK";
kha_Shaders.smaa_neighborhood_blend_vertData0 = "s368:I3ZlcnNpb24gMzAwIGVzCgp1bmlmb3JtIHZlYzIgc2NyZWVuU2l6ZUludjsKCm91dCB2ZWMyIHRleENvb3JkOwppbiB2ZWMyIHBvczsKb3V0IHZlYzQgb2Zmc2V0OwoKdm9pZCBtYWluKCkKewogICAgdGV4Q29vcmQgPSAocG9zICogdmVjMigwLjUpKSArIHZlYzIoMC41KTsKICAgIG9mZnNldCA9IChzY3JlZW5TaXplSW52Lnh5eHkgKiB2ZWM0KDEuMCwgMC4wLCAwLjAsIDEuMCkpICsgdGV4Q29vcmQueHl4eTsKICAgIGdsX1Bvc2l0aW9uID0gdmVjNChwb3MsIDAuMCwgMS4wKTsKfQoK";
kha_Shaders.ssao_pass_fragData0 = "s3547:I3ZlcnNpb24gMzAwIGVzCnByZWNpc2lvbiBtZWRpdW1wIGZsb2F0OwpwcmVjaXNpb24gaGlnaHAgaW50OwoKdW5pZm9ybSBoaWdocCBzYW1wbGVyMkQgZ2J1ZmZlckQ7CnVuaWZvcm0gaGlnaHAgc2FtcGxlcjJEIGdidWZmZXIwOwp1bmlmb3JtIGhpZ2hwIHZlYzMgZXllTG9vazsKdW5pZm9ybSBoaWdocCB2ZWMyIGNhbWVyYVByb2o7CnVuaWZvcm0gaGlnaHAgdmVjMiBzY3JlZW5TaXplOwp1bmlmb3JtIGhpZ2hwIHZlYzMgZXllOwp1bmlmb3JtIGhpZ2hwIG1hdDQgaW52VlA7CgppbiBoaWdocCB2ZWMyIHRleENvb3JkOwpvdXQgaGlnaHAgZmxvYXQgZnJhZ0NvbG9yOwppbiBoaWdocCB2ZWMzIHZpZXdSYXk7CgpoaWdocCB2ZWMyIG9jdGFoZWRyb25XcmFwKGhpZ2hwIHZlYzIgdikKewogICAgcmV0dXJuICh2ZWMyKDEuMCkgLSBhYnModi55eCkpICogdmVjMigodi54ID49IDAuMCkgPyAxLjAgOiAoLTEuMCksICh2LnkgPj0gMC4wKSA:IDEuMCA6ICgtMS4wKSk7Cn0KCmhpZ2hwIHZlYzMgZ2V0UG9zTm9FeWUoaGlnaHAgdmVjMyBleWVMb29rXzEsIGhpZ2hwIHZlYzMgdmlld1JheV8xLCBoaWdocCBmbG9hdCBkZXB0aCwgaGlnaHAgdmVjMiBjYW1lcmFQcm9qXzEpCnsKICAgIGhpZ2hwIGZsb2F0IGxpbmVhckRlcHRoID0gY2FtZXJhUHJval8xLnkgLyAoKChkZXB0aCAqIDAuNSkgKyAwLjUpIC0gY2FtZXJhUHJval8xLngpOwogICAgaGlnaHAgZmxvYXQgdmlld1pEaXN0ID0gZG90KGV5ZUxvb2tfMSwgdmlld1JheV8xKTsKICAgIGhpZ2hwIHZlYzMgd3Bvc2l0aW9uID0gdmlld1JheV8xICogKGxpbmVhckRlcHRoIC8gdmlld1pEaXN0KTsKICAgIHJldHVybiB3cG9zaXRpb247Cn0KCmhpZ2hwIHZlYzMgZ2V0UG9zMk5vRXllKGhpZ2hwIHZlYzMgZXllXzEsIGhpZ2hwIG1hdDQgaW52VlBfMSwgaGlnaHAgZmxvYXQgZGVwdGgsIGhpZ2hwIHZlYzIgY29vcmQpCnsKICAgIGhpZ2hwIHZlYzQgcG9zID0gdmVjNCgoY29vcmQgKiAyLjApIC0gdmVjMigxLjApLCBkZXB0aCwgMS4wKTsKICAgIHBvcyA9IGludlZQXzEgKiBwb3M7CiAgICBoaWdocCB2ZWMzIF84NyA9IHBvcy54eXogLyB2ZWMzKHBvcy53KTsKICAgIHBvcyA9IHZlYzQoXzg3LngsIF84Ny55LCBfODcueiwgcG9zLncpOwogICAgcmV0dXJuIHBvcy54eXogLSBleWVfMTsKfQoKdm9pZCBtYWluKCkKewogICAgaGlnaHAgZmxvYXQgZGVwdGggPSAodGV4dHVyZUxvZChnYnVmZmVyRCwgdGV4Q29vcmQsIDAuMCkueCAqIDIuMCkgLSAxLjA7CiAgICBpZiAoZGVwdGggPT0gMS4wKQogICAgewogICAgICAgIGZyYWdDb2xvciA9IDEuMDsKICAgICAgICByZXR1cm47CiAgICB9CiAgICBoaWdocCB2ZWMyIGVuYyA9IHRleHR1cmVMb2QoZ2J1ZmZlcjAsIHRleENvb3JkLCAwLjApLnh5OwogICAgaGlnaHAgdmVjMyBuOwogICAgbi56ID0gKDEuMCAtIGFicyhlbmMueCkpIC0gYWJzKGVuYy55KTsKICAgIGhpZ2hwIHZlYzIgXzEzNjsKICAgIGlmIChuLnogPj0gMC4wKQogICAgewogICAgICAgIF8xMzYgPSBlbmM7CiAgICB9CiAgICBlbHNlCiAgICB7CiAgICAgICAgXzEzNiA9IG9jdGFoZWRyb25XcmFwKGVuYyk7CiAgICB9CiAgICBuID0gdmVjMyhfMTM2LngsIF8xMzYueSwgbi56KTsKICAgIG4gPSBub3JtYWxpemUobik7CiAgICBoaWdocCB2ZWMzIHZyYXkgPSBub3JtYWxpemUodmlld1JheSk7CiAgICBoaWdocCB2ZWMzIGN1cnJlbnRQb3MgPSBnZXRQb3NOb0V5ZShleWVMb29rLCB2cmF5LCBkZXB0aCwgY2FtZXJhUHJvaik7CiAgICBoaWdocCBmbG9hdCBjdXJyZW50RGlzdGFuY2UgPSBsZW5ndGgoY3VycmVudFBvcyk7CiAgICBoaWdocCBmbG9hdCBjdXJyZW50RGlzdGFuY2VBID0gKGN1cnJlbnREaXN0YW5jZSAqIDIwLjApICogMS4wOwogICAgaGlnaHAgZmxvYXQgY3VycmVudERpc3RhbmNlQiA9IGN1cnJlbnREaXN0YW5jZSAqIDAuMDAwNTAwMDAwMDIzNzQ4NzI1NjUyNjk0NzAyMTQ4NDM3NTsKICAgIGl2ZWMyIHB4ID0gaXZlYzIodGV4Q29vcmQgKiBzY3JlZW5TaXplKTsKICAgIGhpZ2hwIGZsb2F0IHBoaSA9IGZsb2F0KCgoMyAqIHB4LngpIF4gKHB4LnkgKyAocHgueCAqIHB4LnkpKSkgKiAxMCk7CiAgICBmcmFnQ29sb3IgPSAwLjA7CiAgICBmb3IgKGludCBpID0gMDsgaSA8IDg7IGkrKykKICAgIHsKICAgICAgICBoaWdocCBmbG9hdCB0aGV0YSA9ICgwLjc4NTM5ODE4NTI1MzE0MzMxMDU0Njg3NSAqIChmbG9hdChpKSArIDAuNSkpICsgcGhpOwogICAgICAgIGhpZ2hwIHZlYzIgayA9IHZlYzIoY29zKHRoZXRhKSwgc2luKHRoZXRhKSkgLyB2ZWMyKGN1cnJlbnREaXN0YW5jZUEpOwogICAgICAgIGRlcHRoID0gKHRleHR1cmVMb2QoZ2J1ZmZlckQsIHRleENvb3JkICsgaywgMC4wKS54ICogMi4wKSAtIDEuMDsKICAgICAgICBoaWdocCB2ZWMzIHBvcyA9IGdldFBvczJOb0V5ZShleWUsIGludlZQLCBkZXB0aCwgdGV4Q29vcmQgKyBrKSAtIGN1cnJlbnRQb3M7CiAgICAgICAgZnJhZ0NvbG9yICs9IChtYXgoMC4wLCBkb3QocG9zLCBuKSAtIGN1cnJlbnREaXN0YW5jZUIpIC8gKGRvdChwb3MsIHBvcykgKyAwLjAxNDk5OTk5OTY2NDcyMzg3MzEzODQyNzczNDM3NSkpOwogICAgfQogICAgZnJhZ0NvbG9yICo9IDAuMDM3NTAwMDAxNDkwMTE2MTE5Mzg0NzY1NjI1OwogICAgZnJhZ0NvbG9yID0gMS4wIC0gZnJhZ0NvbG9yOwp9Cgo";
kha_System.renderListeners = [];
kha_System.foregroundListeners = [];
kha_System.resumeListeners = [];
kha_System.pauseListeners = [];
kha_System.backgroundListeners = [];
kha_System.shutdownListeners = [];
kha_System.dropFilesListeners = [];
kha_SystemImpl.mobile = false;
kha_SystemImpl.ios = false;
kha_SystemImpl.mobileAudioPlaying = false;
kha_SystemImpl.chrome = false;
kha_SystemImpl.firefox = false;
kha_SystemImpl.ie = false;
kha_SystemImpl.insideInputEvent = false;
kha_SystemImpl.estimatedRefreshRate = 60;
kha_SystemImpl.minimumScroll = 999;
kha_SystemImpl.lastFirstTouchX = 0;
kha_SystemImpl.lastFirstTouchY = 0;
kha_SystemImpl.lastCanvasClientWidth = -1;
kha_SystemImpl.lastCanvasClientHeight = -1;
kha_SystemImpl.iosSoundEnabled = false;
kha_SystemImpl.soundEnabled = false;
kha_SystemImpl.iosTouchs = [];
kha_Window.windows = [];
kha_Window.resizeCallbacks = [];
kha_arrays_ByteArray.LITTLE_ENDIAN = new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x78;
kha_audio2_Audio.disableGcInteractions = false;
kha_audio2_Audio.intBox = new kha_internal_IntBox(0);
kha_audio2_Audio.virtualChannels = [];
kha_audio2_Audio1.lastAllocationCount = 0;
kha_audio2_ogg_vorbis_VorbisTools.INVERSE_DB_TABLE = [1.0649863e-07,1.1341951e-07,1.2079015e-07,1.2863978e-07,1.3699951e-07,1.4590251e-07,1.5538408e-07,1.6548181e-07,1.7623575e-07,1.8768855e-07,1.9988561e-07,2.1287530e-07,2.2670913e-07,2.4144197e-07,2.5713223e-07,2.7384213e-07,2.9163793e-07,3.1059021e-07,3.3077411e-07,3.5226968e-07,3.7516214e-07,3.9954229e-07,4.2550680e-07,4.5315863e-07,4.8260743e-07,5.1396998e-07,5.4737065e-07,5.8294187e-07,6.2082472e-07,6.6116941e-07,7.0413592e-07,7.4989464e-07,7.9862701e-07,8.5052630e-07,9.0579828e-07,9.6466216e-07,1.0273513e-06,1.0941144e-06,1.1652161e-06,1.2409384e-06,1.3215816e-06,1.4074654e-06,1.4989305e-06,1.5963394e-06,1.7000785e-06,1.8105592e-06,1.9282195e-06,2.0535261e-06,2.1869758e-06,2.3290978e-06,2.4804557e-06,2.6416497e-06,2.8133190e-06,2.9961443e-06,3.1908506e-06,3.3982101e-06,3.6190449e-06,3.8542308e-06,4.1047004e-06,4.3714470e-06,4.6555282e-06,4.9580707e-06,5.2802740e-06,5.6234160e-06,5.9888572e-06,6.3780469e-06,6.7925283e-06,7.2339451e-06,7.7040476e-06,8.2047000e-06,8.7378876e-06,9.3057248e-06,9.9104632e-06,1.0554501e-05,1.1240392e-05,1.1970856e-05,1.2748789e-05,1.3577278e-05,1.4459606e-05,1.5399272e-05,1.6400004e-05,1.7465768e-05,1.8600792e-05,1.9809576e-05,2.1096914e-05,2.2467911e-05,2.3928002e-05,2.5482978e-05,2.7139006e-05,2.8902651e-05,3.0780908e-05,3.2781225e-05,3.4911534e-05,3.7180282e-05,3.9596466e-05,4.2169667e-05,4.4910090e-05,4.7828601e-05,5.0936773e-05,5.4246931e-05,5.7772202e-05,6.1526565e-05,6.5524908e-05,6.9783085e-05,7.4317983e-05,7.9147585e-05,8.4291040e-05,8.9768747e-05,9.5602426e-05,0.00010181521,0.00010843174,0.00011547824,0.00012298267,0.00013097477,0.00013948625,0.00014855085,0.00015820453,0.00016848555,0.00017943469,0.00019109536,0.00020351382,0.00021673929,0.00023082423,0.00024582449,0.00026179955,0.00027881276,0.00029693158,0.00031622787,0.00033677814,0.00035866388,0.00038197188,0.00040679456,0.00043323036,0.00046138411,0.00049136745,0.00052329927,0.00055730621,0.00059352311,0.00063209358,0.00067317058,0.00071691700,0.00076350630,0.00081312324,0.00086596457,0.00092223983,0.00098217216,0.0010459992,0.0011139742,0.0011863665,0.0012634633,0.0013455702,0.0014330129,0.0015261382,0.0016253153,0.0017309374,0.0018434235,0.0019632195,0.0020908006,0.0022266726,0.0023713743,0.0025254795,0.0026895994,0.0028643847,0.0030505286,0.0032487691,0.0034598925,0.0036847358,0.0039241906,0.0041792066,0.0044507950,0.0047400328,0.0050480668,0.0053761186,0.0057254891,0.0060975636,0.0064938176,0.0069158225,0.0073652516,0.0078438871,0.0083536271,0.0088964928,0.009474637,0.010090352,0.010746080,0.011444421,0.012188144,0.012980198,0.013823725,0.014722068,0.015678791,0.016697687,0.017782797,0.018938423,0.020169149,0.021479854,0.022875735,0.024362330,0.025945531,0.027631618,0.029427276,0.031339626,0.033376252,0.035545228,0.037855157,0.040315199,0.042935108,0.045725273,0.048696758,0.051861348,0.055231591,0.058820850,0.062643361,0.066714279,0.071049749,0.075666962,0.080584227,0.085821044,0.091398179,0.097337747,0.10366330,0.11039993,0.11757434,0.12521498,0.13335215,0.14201813,0.15124727,0.16107617,0.17154380,0.18269168,0.19456402,0.20720788,0.22067342,0.23501402,0.25028656,0.26655159,0.28387361,0.30232132,0.32196786,0.34289114,0.36517414,0.38890521,0.41417847,0.44109412,0.46975890,0.50028648,0.53279791,0.56742212,0.60429640,0.64356699,0.68538959,0.72993007,0.77736504,0.82788260,0.88168307,0.9389798,1.0];
kha_input_Gamepad.__meta__ = { statics : { sendConnectEvent : { input : null}, sendDisconnectEvent : { input : null}}, fields : { sendAxisEvent : { input : null}, sendButtonEvent : { input : null}}};
kha_input_Gamepad.instances = [];
kha_input_Gamepad.connectListeners = [];
kha_input_Gamepad.disconnectListeners = [];
kha_input_Keyboard.__meta__ = { fields : { sendDownEvent : { input : null}, sendUpEvent : { input : null}, sendPressEvent : { input : null}}};
kha_input_Keyboard.keyBehavior = kha_input_BlockInterventions.Default;
kha_input_Mouse.__meta__ = { fields : { sendLeaveEvent : { input : null}, sendDownEvent : { input : null}, sendUpEvent : { input : null}, sendMoveEvent : { input : null}, sendWheelEvent : { input : null}}};
kha_input_Mouse.wheelEventBlockBehavior = kha_input_MouseEventBlockBehavior.Full;
kha_input_Surface.touchDownEventBlockBehavior = kha_input_TouchDownEventBlockBehavior.Full;
kha_internal_HdrFormat.exposurePattern = new EReg("EXPOSURE=\\s*([0-9]*[.][0-9]*)","i");
kha_internal_HdrFormat.formatPattern = new EReg("FORMAT=32-bit_rle_rgbe","i");
kha_internal_HdrFormat.widthHeightPattern = new EReg("-Y ([0-9]+) \\+X ([0-9]+)","i");
kha_js_Sound.loading = [];
kha_js_graphics4_Graphics.useVertexAttributes = 0;
kha_netsync_ControllerBuilder.nextId = 0;
Main.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);
