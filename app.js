(function ($hx_exports, $global) { "use strict";
$hx_exports["ArmoryExamplesBrowser"] = $hx_exports["ArmoryExamplesBrowser"] || {};
class ArmoryExamplesBrowser {
	static main() {
		window.addEventListener("load",function(e) {
			ArmoryExamplesBrowser.style = window.getComputedStyle(window.document.documentElement);
			let color_fg = ArmoryExamplesBrowser.style.getPropertyValue("--fg");
			let color_bg = ArmoryExamplesBrowser.style.getPropertyValue("--bg");
			$global.console.log("%cArmory3D Examples Browser","color:" + color_fg + ";background:" + color_bg + ";padding:0.5rem 1rem;");
			let body = window.document.body;
			let mainElement = window.document.querySelector("main");
			ArmoryExamplesBrowser.sidebar = body.querySelector("nav");
			ArmoryExamplesBrowser.controls = window.document.getElementById("project-controls");
			ArmoryExamplesBrowser.iframe = mainElement.querySelector("iframe");
			ArmoryExamplesBrowser.readme = mainElement.querySelector(".readme");
			let build = { os : "Linux", commit : null, time : "2022-06-07"};
			$global.console.debug(build);
			ArmoryExamplesBrowser.readme.innerHTML = "<span>Build:</span> <a href=\"" + ArmoryExamplesBrowser.GITHUB + "/armsdk\">ARMSDK</a>";
			if(build.commit != null) {
				ArmoryExamplesBrowser.readme.innerHTML += "/<a href=\"" + ArmoryExamplesBrowser.GITHUB + "/armsdk/commit/" + build.commit + "\">" + HxOverrides.substr(build.commit,0,7) + "</a>";
			}
			ArmoryExamplesBrowser.readme.innerHTML += " " + build.time;
			ArmoryExamplesBrowser.iframe.src = "start.html";
			let _g = new haxe_ds_StringMap();
			let value = ArmoryExamplesBrowser.addProjectGroup("tutorials",["playground","tanks_nodes","tanks_script"]);
			_g.h["tutorials"] = value;
			let value1 = ArmoryExamplesBrowser.addProjectGroup("templates",["archery","first_person","platformer","race_track","third_person","third_person_terrain","top_down","twin_stick"]);
			_g.h["templates"] = value1;
			let value2 = ArmoryExamplesBrowser.addProjectGroup("examples",["animation_actions","animation_blend","animation_bonechild","animation_instanced","animation_movebone","animation_timeline","animation_uv","call_hx","call_js","debug_draw","ease","file_read","file_storage","file_write","game_bowling","graphics_settings","input_mouselock","input_multitouch","input_sensor","instancing","light_area","light_ies","light_probes_cubemap","light_probes_plane","light_volumetric","linked_proxy","load_screen","lod","logic_break","logic_callgroup","logic_camera_pan","logic_camera_zoom","logic_canvas","logic_event_fromhaxe","logic_event_global","logic_event_object","logic_gamepad","logic_gate","logic_get_contacts","logic_keyboard","logic_linked_variable","logic_loadurl","logic_object_rotate","logic_object_scale","logic_object_translate","logic_pause_trait","logic_scenes","logic_scenetree","logic_script","logic_set_property","logic_toy_car","logic_transform","macro_armpack","material_alpha","material_bake","material_batch","material_billboard","material_bump","material_decal","material_decal_colors","material_depth_texture","material_displace","material_normalmap","material_params","material_shadeless","material_shaders","material_sss","material_translucent","material_video","mesh_generate","mesh_import","mesh_terrain","navmesh","navmesh_follow","particle_bunny","particle_hair","particle_info","particle_mesh","particle_smoke","physics_break","physics_collision_groups","physics_constraints","physics_drag","physics_ragdoll","physics_raycast","physics_softbody","render_bloom","render_colorgrading","render_splitscreen","render_to_texture","render_voxelao_teapots","scene_stream","screentex","script_camera_lerp","script_linkedgroup","script_properties","script_properties_global","script_rigidbody_trigger","script_spawnobject","script_transform","server_stream","sound","spawn_from_scene","tilesheet","tilesheet_2d","tilesheet_walkcycle","tween","ui_canvas","ui_events","ui_script2d","ui_script3d","wasm_call","wasm_trait_c","wasm_trait_rust","world_sun_direction"]);
			_g.h["examples"] = value2;
			ArmoryExamplesBrowser.projects = _g;
			let searchInput = ArmoryExamplesBrowser.sidebar.querySelector("input[type=\"search\"]");
			searchInput.addEventListener("input",function(e) {
				let term = StringTools.trim(searchInput.value);
				if(term.length == 0) {
					let h = ArmoryExamplesBrowser.projects.h;
					let group_keys = Object.keys(h);
					let group_length = group_keys.length;
					let group_current = 0;
					while(group_current < group_length) {
						let group = group_keys[group_current++];
						let _g = 0;
						let _g1 = ArmoryExamplesBrowser.sidebar.querySelector("section[data-group=\"" + group + "\"] > ol").children;
						while(_g < _g1.length) {
							let li = _g1[_g];
							++_g;
							li.classList.remove("hidden");
						}
					}
				} else {
					let h = ArmoryExamplesBrowser.projects.h;
					let group_keys = Object.keys(h);
					let group_length = group_keys.length;
					let group_current = 0;
					while(group_current < group_length) {
						let group = group_keys[group_current++];
						let found = ArmoryExamplesBrowser.searchProject(group,searchInput.value);
						if(found.length > 0) {
							let list = ArmoryExamplesBrowser.sidebar.querySelector("section[data-group=\"" + group + "\"] > ol");
							let _g = 0;
							let _g1 = list.children;
							while(_g < _g1.length) {
								let li = _g1[_g];
								++_g;
								if(!li.classList.contains("playing") && Lambda.has(found,li.getAttribute("data-project"))) {
									li.classList.remove("hidden");
								} else {
									li.classList.add("hidden");
								}
							}
						}
					}
				}
			});
			ArmoryExamplesBrowser.iframe.onerror = function(e) {
				$global.console.warn("ERROR: " + e);
				$global.console.groupEnd();
				let li = ArmoryExamplesBrowser.sidebar.querySelector("li[data-project=" + ArmoryExamplesBrowser.project.name + "]");
				return li.classList.replace("loading","error");
			};
			ArmoryExamplesBrowser.iframe.onload = function(e) {
				$global.console.groupEnd();
				if(ArmoryExamplesBrowser.project != null) {
					let li = ArmoryExamplesBrowser.sidebar.querySelector("li[data-project=" + ArmoryExamplesBrowser.project.name + "]");
					li.classList.replace("loading","playing");
					let iframeDocument = ArmoryExamplesBrowser.iframe.contentWindow.document;
					let canvas = iframeDocument.getElementById("khanvas");
					if(canvas != null) {
						canvas.style.background = color_bg;
						canvas.remove();
						iframeDocument.body.append(canvas);
						iframeDocument.body.querySelector("p").remove();
						ArmoryExamplesBrowser.fitProject();
					}
				}
			};
			window.onresize = function(e) {
				ArmoryExamplesBrowser.fitProject();
			};
			window.onkeydown = function(e) {
				if(searchInput == window.document.activeElement) {
					return;
				}
				switch(e.key) {
				case "Escape":
					ArmoryExamplesBrowser.sidebar.classList.toggle("hidden");
					ArmoryExamplesBrowser.fitProject();
					break;
				case "f":
					haxe_Timer.delay($bind(searchInput,searchInput.focus),0);
					break;
				case "o":
					console.log("src/ArmoryExamplesBrowser.hx:144:","OPEN PROJECT");
					break;
				case "r":
					ArmoryExamplesBrowser.reloadProject();
					break;
				case "x":
					ArmoryExamplesBrowser.unloadProject();
					break;
				default:
				}
			};
			if(window.location.hash != "") {
				let hash = window.location.hash.substring(1);
				let i = hash.indexOf("-");
				if(i != -1) {
					let group = HxOverrides.substr(hash,0,i);
					let project = HxOverrides.substr(hash,i + 1,null);
					ArmoryExamplesBrowser.loadProject(project,group);
				}
			}
		});
	}
	static addProjectGroup(group,projects) {
		let section = window.document.createElement("section");
		section.classList.add("group");
		section.setAttribute("data-group",group);
		let title = window.document.createElement("h3");
		title.classList.add("title","icon-link");
		section.append(title);
		let link = window.document.createElement("a");
		link.href = "" + ArmoryExamplesBrowser.GITHUB + "/armory_" + group;
		link.textContent = group;
		title.append(link);
		let list = window.document.createElement("ol");
		list.classList.add("list");
		section.append(list);
		let _g = 0;
		while(_g < projects.length) {
			let project = projects[_g];
			++_g;
			let li = window.document.createElement("li");
			li.classList.add("project");
			li.setAttribute("data-project",project);
			li.setAttribute("data-group",group);
			list.append(li);
			let name = window.document.createElement("a");
			name.classList.add("name");
			name.href = "#" + group + "-" + project;
			name.textContent = StringTools.replace(project,"_"," ");
			name.onclick = function(e) {
				e.preventDefault();
				if(li.classList.contains("active")) {
					ArmoryExamplesBrowser.unloadProject();
				} else {
					ArmoryExamplesBrowser.loadProject(project,group);
				}
			};
			li.append(name);
			let controls = window.document.createElement("div");
			controls.classList.add("controls");
			li.append(controls);
			let src = window.document.createElement("a");
			src.classList.add("src","ic-code");
			src.title = "Open source code on github";
			src.href = src.title = "" + ArmoryExamplesBrowser.GITHUB + "/armory_" + group + "/tree/master/" + project;
			controls.append(src);
			let view = window.document.createElement("a");
			view.onclick = function(e) {
				if(window.document.fullscreenElement == null) {
					ArmoryExamplesBrowser.iframe.requestFullscreen();
				} else {
					window.document.exitFullscreen();
				}
			};
			view.classList.add("view","ic-fullscreen");
			controls.append(view);
			let open = window.document.createElement("a");
			open.classList.add("src","ic-launch");
			open.target = "_blank";
			open.title = "Open in new tab";
			open.href = "" + group + "/" + project;
			controls.append(open);
			let close = window.document.createElement("a");
			close.href = "";
			close.title = "Close project";
			close.classList.add("ic-clear");
			close.onclick = function(e) {
				e.preventDefault();
				ArmoryExamplesBrowser.unloadProject();
			};
			controls.append(close);
		}
		window.document.getElementById("project-groups").append(section);
		return projects;
	}
	static searchProject(group,term) {
		let expr = new EReg(term,"");
		let _this = ArmoryExamplesBrowser.projects.h[group];
		let _g = [];
		let _g1 = 0;
		while(_g1 < _this.length) {
			let v = _this[_g1];
			++_g1;
			if(expr.match(v)) {
				_g.push(v);
			}
		}
		return _g;
	}
	static loadProject(name,group) {
		ArmoryExamplesBrowser.unloadProject();
		let path = "" + group + "/" + name;
		ArmoryExamplesBrowser.project = { name : name, group : group};
		ArmoryExamplesBrowser.iframe.src = "" + path + "/";
		window.location.hash = "" + group + "-" + name;
		let li = ArmoryExamplesBrowser.sidebar.querySelector("li[data-project=" + name + "]");
		li.classList.add("loading");
		ArmoryExamplesBrowser.fetchReadme("" + path + "/README.md").then(function(html) {
			if(html == null) {
				html = "";
			}
			return ArmoryExamplesBrowser.readme.innerHTML = html;
		});
	}
	static reloadProject() {
		if(ArmoryExamplesBrowser.project != null) {
			ArmoryExamplesBrowser.loadProject(ArmoryExamplesBrowser.project.name,ArmoryExamplesBrowser.project.group);
		}
	}
	static unloadProject() {
		if(ArmoryExamplesBrowser.project == null) {
			return;
		}
		let name = ArmoryExamplesBrowser.project.name;
		let li = ArmoryExamplesBrowser.sidebar.querySelector("li[data-project=" + name + "]");
		li.classList.remove("playing","loading");
		ArmoryExamplesBrowser.project = null;
		ArmoryExamplesBrowser.iframe.src = "";
		ArmoryExamplesBrowser.readme.innerHTML = "";
		let tmp = HxOverrides.substr(window.location.href,0,window.location.href.indexOf("#") + 1);
		window.location.href = tmp;
	}
	static fetchMarkdown(path) {
		return window.fetch(path).then(function(res) {
			if(res.status == 200) {
				return res.text().then(function(text) {
					return text;
				});
			}
			return null;
		});
	}
	static fetchReadme(path) {
		return ArmoryExamplesBrowser.fetchMarkdown("" + ArmoryExamplesBrowser.project.group + "/" + ArmoryExamplesBrowser.project.name + "/README.md").then(function(md) {
			if(md == null) {
				return null;
			} else {
				return Markdown.markdownToHtml(md);
			}
		});
	}
	static fitProject() {
		let sidebar_width = 0;
		if(!ArmoryExamplesBrowser.sidebar.classList.contains("hidden")) {
			sidebar_width = Std.parseInt(ArmoryExamplesBrowser.style.getPropertyValue("--sidebar-width"));
		}
		let w = window.innerWidth - sidebar_width;
		let h = window.innerHeight - ArmoryExamplesBrowser.readme.clientHeight;
		let mainElement = window.document.body.querySelector("main");
		mainElement.style.width = w + "px";
		mainElement.style.left = sidebar_width + "px";
		if(ArmoryExamplesBrowser.iframe.src != null) {
			let iframeDocument = ArmoryExamplesBrowser.iframe.contentWindow.document;
			let canvas = iframeDocument.getElementById("khanvas");
			if(canvas != null) {
				canvas.width = window.innerWidth - sidebar_width | 0;
				canvas.height = h | 0;
			}
		}
	}
}
$hx_exports["ArmoryExamplesBrowser"]["unloadProject"] = ArmoryExamplesBrowser.unloadProject;
$hx_exports["ArmoryExamplesBrowser"]["reloadProject"] = ArmoryExamplesBrowser.reloadProject;
$hx_exports["ArmoryExamplesBrowser"]["loadProject"] = ArmoryExamplesBrowser.loadProject;
$hx_exports["ArmoryExamplesBrowser"]["searchProject"] = ArmoryExamplesBrowser.searchProject;
ArmoryExamplesBrowser.__name__ = true;
class EReg {
	constructor(r,opt) {
		this.r = new RegExp(r,opt.split("u").join(""));
	}
	match(s) {
		if(this.r.global) {
			this.r.lastIndex = 0;
		}
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	matched(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) {
			return this.r.m[n];
		} else {
			throw haxe_Exception.thrown("EReg::matched");
		}
	}
	matchedPos() {
		if(this.r.m == null) {
			throw haxe_Exception.thrown("No string matched");
		}
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	matchSub(s,pos,len) {
		if(len == null) {
			len = -1;
		}
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0 ? s : HxOverrides.substr(s,0,pos + len));
			let b = this.r.m != null;
			if(b) {
				this.r.s = s;
			}
			return b;
		} else {
			let b = this.match(len < 0 ? HxOverrides.substr(s,pos,null) : HxOverrides.substr(s,pos,len));
			if(b) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b;
		}
	}
	map(s,f) {
		let offset = 0;
		let buf_b = "";
		while(true) {
			if(offset >= s.length) {
				break;
			} else if(!this.matchSub(s,offset)) {
				buf_b += Std.string(HxOverrides.substr(s,offset,null));
				break;
			}
			let p = this.matchedPos();
			buf_b += Std.string(HxOverrides.substr(s,offset,p.pos - offset));
			buf_b += Std.string(f(this));
			if(p.len == 0) {
				buf_b += Std.string(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else {
				offset = p.pos + p.len;
			}
			if(!this.r.global) {
				break;
			}
		}
		if(!this.r.global && offset > 0 && offset < s.length) {
			buf_b += Std.string(HxOverrides.substr(s,offset,null));
		}
		return buf_b;
	}
}
EReg.__name__ = true;
class HxOverrides {
	static cca(s,index) {
		let x = s.charCodeAt(index);
		if(x != x) {
			return undefined;
		}
		return x;
	}
	static substr(s,pos,len) {
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
	}
	static now() {
		return Date.now();
	}
}
HxOverrides.__name__ = true;
class Lambda {
	static has(it,elt) {
		let x = $getIterator(it);
		while(x.hasNext()) {
			let x1 = x.next();
			if(x1 == elt) {
				return true;
			}
		}
		return false;
	}
}
Lambda.__name__ = true;
class Markdown {
	static markdownToHtml(markdown) {
		let document = new Document();
		try {
			let _this_r = new RegExp("(\r\n|\r)","g".split("u").join(""));
			let lines = markdown.replace(_this_r,"\n").split("\n");
			document.parseRefLinks(lines);
			let blocks = document.parseLines(lines);
			return Markdown.renderHtml(blocks);
		} catch( _g ) {
			return "<pre>" + Std.string(haxe_Exception.caught(_g).unwrap()) + "</pre>";
		}
	}
	static renderHtml(blocks) {
		return new markdown_HtmlRenderer().render(blocks);
	}
}
Markdown.__name__ = true;
class Document {
	constructor() {
		this.refLinks = new haxe_ds_StringMap();
		this.codeBlockSyntaxes = new haxe_ds_StringMap();
		this.inlineSyntaxes = [];
	}
	parseRefLinks(lines) {
		let titles = new EReg("(" + "\"[^\"]+\"" + "|" + "'[^']+'" + "|" + "\\([^)]+\\)" + ")","");
		let link = new EReg("^[ ]{0,3}" + "\\[([^\\]]+)\\]" + ":\\s+(\\S+)\\s*(" + "\"[^\"]+\"" + "|" + "'[^']+'" + "|" + "\\([^)]+\\)" + "|)\\s*$","");
		let _g = 0;
		let _g1 = lines.length;
		while(_g < _g1) {
			let i = _g++;
			if(!link.match(lines[i])) {
				continue;
			}
			let id = link.matched(1);
			let url = link.matched(2);
			let title = link.matched(3);
			if(url.startsWith("<") && url.endsWith(">")) {
				url = HxOverrides.substr(url,1,url.length - 2);
			}
			if(title == "" && lines[i + 1] != null && titles.match(lines[i + 1])) {
				title = titles.matched(1);
				lines[i + 1] = "";
			}
			if(title == "") {
				title = null;
			} else {
				title = title.substring(1,title.length - 1);
			}
			id = id.toLowerCase();
			this.refLinks.h[id] = new Link(id,url,title);
			lines[i] = "";
		}
	}
	parseLines(lines) {
		let parser = new markdown_BlockParser(lines,this);
		let blocks = [];
		while(parser.pos < parser.lines.length) {
			let _g = 0;
			let _g1 = markdown_BlockSyntax.get_syntaxes();
			while(_g < _g1.length) {
				let syntax = _g1[_g];
				++_g;
				if(syntax.canParse(parser)) {
					let block = syntax.parse(parser);
					if(block != null) {
						blocks.push(block);
					}
					break;
				}
			}
		}
		return blocks;
	}
	parseInline(text) {
		return new markdown_InlineParser(text,this).parse();
	}
}
Document.__name__ = true;
class Link {
	constructor(id,url,title) {
		this.id = id;
		this.url = url;
		this.title = title;
	}
}
Link.__name__ = true;
Math.__name__ = true;
class Reflect {
	static compare(a,b) {
		if(a == b) {
			return 0;
		} else if(a > b) {
			return 1;
		} else {
			return -1;
		}
	}
}
Reflect.__name__ = true;
class Std {
	static string(s) {
		return js_Boot.__string_rec(s,"");
	}
	static parseInt(x) {
		if(x != null) {
			let _g = 0;
			let _g1 = x.length;
			while(_g < _g1) {
				let i = _g++;
				let c = x.charCodeAt(i);
				if(c <= 8 || c >= 14 && c != 32 && c != 45) {
					let nc = x.charCodeAt(i + 1);
					let v = parseInt(x,nc == 120 || nc == 88 ? 16 : 10);
					if(isNaN(v)) {
						return null;
					} else {
						return v;
					}
				}
			}
		}
		return null;
	}
}
Std.__name__ = true;
class StringBuf {
	constructor() {
		this.b = "";
	}
}
StringBuf.__name__ = true;
class StringTools {
	static htmlEscape(s,quotes) {
		let buf_b = "";
		let _g_offset = 0;
		let _g_s = s;
		while(_g_offset < _g_s.length) {
			let s = _g_s;
			let index = _g_offset++;
			let c = s.charCodeAt(index);
			if(c >= 55296 && c <= 56319) {
				c = c - 55232 << 10 | s.charCodeAt(index + 1) & 1023;
			}
			let c1 = c;
			if(c1 >= 65536) {
				++_g_offset;
			}
			let code = c1;
			switch(code) {
			case 34:
				if(quotes) {
					buf_b += "&quot;";
				} else {
					buf_b += String.fromCodePoint(code);
				}
				break;
			case 38:
				buf_b += "&amp;";
				break;
			case 39:
				if(quotes) {
					buf_b += "&#039;";
				} else {
					buf_b += String.fromCodePoint(code);
				}
				break;
			case 60:
				buf_b += "&lt;";
				break;
			case 62:
				buf_b += "&gt;";
				break;
			default:
				buf_b += String.fromCodePoint(code);
			}
		}
		return buf_b;
	}
	static isSpace(s,pos) {
		let c = HxOverrides.cca(s,pos);
		if(!(c > 8 && c < 14)) {
			return c == 32;
		} else {
			return true;
		}
	}
	static ltrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,r)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,r,l - r);
		} else {
			return s;
		}
	}
	static rtrim(s) {
		let l = s.length;
		let r = 0;
		while(r < l && StringTools.isSpace(s,l - r - 1)) ++r;
		if(r > 0) {
			return HxOverrides.substr(s,0,l - r);
		} else {
			return s;
		}
	}
	static trim(s) {
		return StringTools.ltrim(StringTools.rtrim(s));
	}
	static replace(s,sub,by) {
		return s.split(sub).join(by);
	}
}
StringTools.__name__ = true;
class haxe_Exception extends Error {
	constructor(message,previous,native) {
		super(message);
		this.message = message;
		this.__previousException = previous;
		this.__nativeException = native != null ? native : this;
	}
	unwrap() {
		return this.__nativeException;
	}
	get_native() {
		return this.__nativeException;
	}
	static caught(value) {
		if(((value) instanceof haxe_Exception)) {
			return value;
		} else if(((value) instanceof Error)) {
			return new haxe_Exception(value.message,null,value);
		} else {
			return new haxe_ValueException(value,null,value);
		}
	}
	static thrown(value) {
		if(((value) instanceof haxe_Exception)) {
			return value.get_native();
		} else if(((value) instanceof Error)) {
			return value;
		} else {
			let e = new haxe_ValueException(value);
			return e;
		}
	}
}
haxe_Exception.__name__ = true;
class haxe_Timer {
	constructor(time_ms) {
		let me = this;
		this.id = setInterval(function() {
			me.run();
		},time_ms);
	}
	stop() {
		if(this.id == null) {
			return;
		}
		clearInterval(this.id);
		this.id = null;
	}
	run() {
	}
	static delay(f,time_ms) {
		let t = new haxe_Timer(time_ms);
		t.run = function() {
			t.stop();
			f();
		};
		return t;
	}
}
haxe_Timer.__name__ = true;
class haxe_ValueException extends haxe_Exception {
	constructor(value,previous,native) {
		super(String(value),previous,native);
		this.value = value;
	}
	unwrap() {
		return this.value;
	}
}
haxe_ValueException.__name__ = true;
class haxe_ds_StringMap {
	constructor() {
		this.h = Object.create(null);
	}
}
haxe_ds_StringMap.__name__ = true;
class haxe_iterators_ArrayIterator {
	constructor(array) {
		this.current = 0;
		this.array = array;
	}
	hasNext() {
		return this.current < this.array.length;
	}
	next() {
		return this.array[this.current++];
	}
}
haxe_iterators_ArrayIterator.__name__ = true;
class js_Boot {
	static __string_rec(o,s) {
		if(o == null) {
			return "null";
		}
		if(s.length >= 5) {
			return "<...>";
		}
		let t = typeof(o);
		if(t == "function" && (o.__name__ || o.__ename__)) {
			t = "object";
		}
		switch(t) {
		case "function":
			return "<function>";
		case "object":
			if(((o) instanceof Array)) {
				let str = "[";
				s += "\t";
				let _g = 0;
				let _g1 = o.length;
				while(_g < _g1) {
					let i = _g++;
					str += (i > 0 ? "," : "") + js_Boot.__string_rec(o[i],s);
				}
				str += "]";
				return str;
			}
			let tostr;
			try {
				tostr = o.toString;
			} catch( _g ) {
				return "???";
			}
			if(tostr != null && tostr != Object.toString && typeof(tostr) == "function") {
				let s2 = o.toString();
				if(s2 != "[object Object]") {
					return s2;
				}
			}
			let str = "{\n";
			s += "\t";
			let hasp = o.hasOwnProperty != null;
			let k = null;
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
	}
}
js_Boot.__name__ = true;
class markdown_ElementNode {
	constructor(tag,children) {
		this.tag = tag;
		this.children = children;
		this.attributes = new haxe_ds_StringMap();
	}
	accept(visitor) {
		if(visitor.visitElementBefore(this)) {
			let _g = 0;
			let _g1 = this.children;
			while(_g < _g1.length) {
				let child = _g1[_g];
				++_g;
				child.accept(visitor);
			}
			visitor.visitElementAfter(this);
		}
	}
	static empty(tag) {
		return new markdown_ElementNode(tag,null);
	}
	static text(tag,text) {
		return new markdown_ElementNode(tag,[new markdown_TextNode(text)]);
	}
}
markdown_ElementNode.__name__ = true;
class markdown_TextNode {
	constructor(text) {
		this.text = text;
	}
	accept(visitor) {
		visitor.visitText(this);
	}
}
markdown_TextNode.__name__ = true;
class markdown_BlockParser {
	constructor(lines,document) {
		this.lines = lines;
		this.document = document;
		this.pos = 0;
	}
	get_next() {
		if(this.pos >= this.lines.length - 1) {
			return null;
		}
		return this.lines[this.pos + 1];
	}
	advance() {
		this.pos++;
	}
	matches(ereg) {
		if(this.pos >= this.lines.length) {
			return false;
		}
		return ereg.match(this.lines[this.pos]);
	}
	matchesNext(ereg) {
		if(this.get_next() == null) {
			return false;
		}
		return ereg.match(this.get_next());
	}
}
markdown_BlockParser.__name__ = true;
class markdown_BlockSyntax {
	constructor() {
	}
	get_pattern() {
		return null;
	}
	get_canEndBlock() {
		return true;
	}
	canParse(parser) {
		return this.get_pattern().match(parser.lines[parser.pos]);
	}
	parse(parser) {
		return null;
	}
	static get_syntaxes() {
		if(markdown_BlockSyntax.syntaxes == null) {
			markdown_BlockSyntax.syntaxes = [new markdown_EmptyBlockSyntax(),new markdown_BlockHtmlSyntax(),new markdown_SetextHeaderSyntax(),new markdown_HeaderSyntax(),new markdown_CodeBlockSyntax(),new markdown_GitHubCodeBlockSyntax(),new markdown_BlockquoteSyntax(),new markdown_HorizontalRuleSyntax(),new markdown_UnorderedListSyntax(),new markdown_OrderedListSyntax(),new markdown_TableSyntax(),new markdown_ParagraphSyntax()];
		}
		return markdown_BlockSyntax.syntaxes;
	}
	static isAtBlockEnd(parser) {
		if(parser.pos >= parser.lines.length) {
			return true;
		}
		let _g = 0;
		let _g1 = markdown_BlockSyntax.get_syntaxes();
		while(_g < _g1.length) {
			let syntax = _g1[_g];
			++_g;
			if(syntax.canParse(parser) && syntax.get_canEndBlock()) {
				return true;
			}
		}
		return false;
	}
}
markdown_BlockSyntax.__name__ = true;
class markdown_EmptyBlockSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_EMPTY;
	}
	parse(parser) {
		parser.advance();
		return null;
	}
}
markdown_EmptyBlockSyntax.__name__ = true;
class markdown_SetextHeaderSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	canParse(parser) {
		return parser.matchesNext(markdown_BlockSyntax.RE_SETEXT);
	}
	parse(parser) {
		let re = markdown_BlockSyntax.RE_SETEXT;
		re.match(parser.get_next());
		let tag = re.matched(1).charAt(0) == "=" ? "h1" : "h2";
		let contents = parser.document.parseInline(parser.lines[parser.pos]);
		parser.advance();
		parser.advance();
		return new markdown_ElementNode(tag,contents);
	}
}
markdown_SetextHeaderSyntax.__name__ = true;
class markdown_HeaderSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_HEADER;
	}
	parse(parser) {
		this.get_pattern().match(parser.lines[parser.pos]);
		parser.advance();
		let level = this.get_pattern().matched(1).length;
		let contents = parser.document.parseInline(StringTools.trim(this.get_pattern().matched(2)));
		return new markdown_ElementNode("h" + level,contents);
	}
}
markdown_HeaderSyntax.__name__ = true;
class markdown_BlockquoteSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_BLOCKQUOTE;
	}
	parseChildLines(parser) {
		let childLines = [];
		while(parser.pos < parser.lines.length) if(this.get_pattern().match(parser.lines[parser.pos])) {
			childLines.push(this.get_pattern().matched(1));
			parser.advance();
		} else {
			let nextMatch = parser.get_next() != null && this.get_pattern().match(parser.get_next());
			if(StringTools.trim(parser.lines[parser.pos]) == "" && nextMatch) {
				childLines.push("");
				childLines.push(this.get_pattern().matched(1));
				parser.advance();
				parser.advance();
			} else {
				break;
			}
		}
		return childLines;
	}
	parse(parser) {
		let childLines = this.parseChildLines(parser);
		let children = parser.document.parseLines(childLines);
		return new markdown_ElementNode("blockquote",children);
	}
}
markdown_BlockquoteSyntax.__name__ = true;
class markdown_CodeBlockSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_INDENT;
	}
	parseChildLines(parser) {
		let childLines = [];
		while(parser.pos < parser.lines.length) if(this.get_pattern().match(parser.lines[parser.pos])) {
			childLines.push(this.get_pattern().matched(1));
			parser.advance();
		} else {
			let nextMatch = parser.get_next() != null && this.get_pattern().match(parser.get_next());
			if(StringTools.trim(parser.lines[parser.pos]) == "" && nextMatch) {
				childLines.push("");
				childLines.push(this.get_pattern().matched(1));
				parser.advance();
				parser.advance();
			} else {
				break;
			}
		}
		return childLines;
	}
	parse(parser) {
		let childLines = this.parseChildLines(parser);
		childLines.push("");
		let escaped = StringTools.htmlEscape(childLines.join("\n"));
		return new markdown_ElementNode("pre",[markdown_ElementNode.text("code",escaped)]);
	}
}
markdown_CodeBlockSyntax.__name__ = true;
class markdown_GitHubCodeBlockSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_CODE;
	}
	parseChildLines(parser) {
		let childLines = [];
		parser.advance();
		while(parser.pos < parser.lines.length) if(!this.get_pattern().match(parser.lines[parser.pos])) {
			childLines.push(parser.lines[parser.pos]);
			parser.advance();
		} else {
			parser.advance();
			break;
		}
		return childLines;
	}
	parse(parser) {
		let syntax = this.get_pattern().matched(1);
		let childLines = this.parseChildLines(parser);
		let code = null;
		let source = childLines.join("\n");
		if(Object.prototype.hasOwnProperty.call(parser.document.codeBlockSyntaxes.h,syntax)) {
			let format = parser.document.codeBlockSyntaxes.h[syntax];
			code = markdown_ElementNode.text("code",format(source));
		} else {
			code = markdown_ElementNode.text("code",StringTools.htmlEscape(source));
			if(syntax != null && syntax.length > 0) {
				code.attributes.h["class"] = "prettyprint " + syntax;
			}
		}
		return new markdown_ElementNode("pre",[code]);
	}
}
markdown_GitHubCodeBlockSyntax.__name__ = true;
class markdown_HorizontalRuleSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_HR;
	}
	parse(parser) {
		parser.advance();
		return markdown_ElementNode.empty("hr");
	}
}
markdown_HorizontalRuleSyntax.__name__ = true;
class markdown_BlockHtmlSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_HTML;
	}
	get_canEndBlock() {
		return false;
	}
	parse(parser) {
		let childLines = [];
		while(parser.pos < parser.lines.length && !parser.matches(markdown_BlockSyntax.RE_EMPTY)) {
			childLines.push(parser.lines[parser.pos]);
			parser.advance();
		}
		return new markdown_TextNode(childLines.join("\n"));
	}
}
markdown_BlockHtmlSyntax.__name__ = true;
class markdown_ListItem {
	constructor(lines) {
		this.forceBlock = false;
		this.lines = lines;
	}
}
markdown_ListItem.__name__ = true;
class markdown_ParagraphSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_canEndBlock() {
		return false;
	}
	canParse(parser) {
		return true;
	}
	parse(parser) {
		let childLines = [];
		while(!markdown_BlockSyntax.isAtBlockEnd(parser)) {
			childLines.push(StringTools.ltrim(parser.lines[parser.pos]));
			parser.advance();
		}
		let contents = parser.document.parseInline(childLines.join("\n"));
		return new markdown_ElementNode("p",contents);
	}
}
markdown_ParagraphSyntax.__name__ = true;
class markdown_ListSyntax extends markdown_BlockSyntax {
	constructor(listTag) {
		super();
		this.listTag = listTag;
	}
	get_canEndBlock() {
		return false;
	}
	parse(parser) {
		let items = [];
		let childLines = [];
		let endItem = function() {
			if(childLines.length > 0) {
				items.push(new markdown_ListItem(childLines));
				childLines = [];
			}
		};
		let match;
		let tryMatch = function(pattern) {
			match = pattern;
			return pattern.match(parser.lines[parser.pos]);
		};
		while(parser.pos < parser.lines.length) {
			if(tryMatch(markdown_BlockSyntax.RE_EMPTY)) {
				childLines.push("");
			} else if(tryMatch(markdown_BlockSyntax.RE_UL) || tryMatch(markdown_BlockSyntax.RE_OL)) {
				endItem();
				childLines.push(match.matched(1));
			} else if(tryMatch(markdown_BlockSyntax.RE_INDENT)) {
				childLines.push(match.matched(1));
			} else if(markdown_BlockSyntax.isAtBlockEnd(parser)) {
				break;
			} else {
				if(childLines.length > 0 && childLines[childLines.length - 1] == "") {
					break;
				}
				childLines.push(parser.lines[parser.pos]);
			}
			parser.advance();
		}
		endItem();
		let _g = 0;
		let _g1 = items.length;
		while(_g < _g1) {
			let i = _g++;
			let len = items[i].lines.length;
			let _g1 = 1;
			let _g2 = len + 1;
			while(_g1 < _g2) {
				let jj = _g1++;
				let j = len - jj;
				if(markdown_BlockSyntax.RE_EMPTY.match(items[i].lines[j])) {
					if(i < items.length - 1) {
						items[i].forceBlock = true;
						items[i + 1].forceBlock = true;
					}
					items[i].lines.pop();
				} else {
					break;
				}
			}
		}
		let itemNodes = [];
		let _g2 = 0;
		while(_g2 < items.length) {
			let item = items[_g2];
			++_g2;
			let blockItem = item.forceBlock || item.lines.length > 1;
			let blocksInList = [markdown_BlockSyntax.RE_BLOCKQUOTE,markdown_BlockSyntax.RE_HEADER,markdown_BlockSyntax.RE_HR,markdown_BlockSyntax.RE_INDENT,markdown_BlockSyntax.RE_UL,markdown_BlockSyntax.RE_OL];
			if(!blockItem) {
				let _g = 0;
				while(_g < blocksInList.length) {
					let pattern = blocksInList[_g];
					++_g;
					if(pattern.match(item.lines[0])) {
						blockItem = true;
						break;
					}
				}
			}
			if(blockItem) {
				let children = parser.document.parseLines(item.lines);
				if(!item.forceBlock && children.length == 1) {
					if(((children[0]) instanceof markdown_ElementNode)) {
						let node = children[0];
						if(node.tag == "p") {
							children = node.children;
						}
					}
				}
				itemNodes.push(new markdown_ElementNode("li",children));
			} else {
				let contents = parser.document.parseInline(item.lines[0]);
				itemNodes.push(new markdown_ElementNode("li",contents));
			}
		}
		return new markdown_ElementNode(this.listTag,itemNodes);
	}
}
markdown_ListSyntax.__name__ = true;
class markdown_UnorderedListSyntax extends markdown_ListSyntax {
	constructor() {
		super("ul");
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_UL;
	}
}
markdown_UnorderedListSyntax.__name__ = true;
class markdown_OrderedListSyntax extends markdown_ListSyntax {
	constructor() {
		super("ol");
	}
	get_pattern() {
		return markdown_BlockSyntax.RE_OL;
	}
}
markdown_OrderedListSyntax.__name__ = true;
class markdown_TableSyntax extends markdown_BlockSyntax {
	constructor() {
		super();
	}
	get_pattern() {
		return markdown_TableSyntax.TABLE_PATTERN;
	}
	get_canEndBlock() {
		return false;
	}
	parse(parser) {
		let lines = [];
		while(parser.pos < parser.lines.length && parser.matches(markdown_TableSyntax.TABLE_PATTERN)) {
			lines.push(parser.lines[parser.pos]);
			parser.advance();
		}
		let heads = [];
		let rows = [];
		let headLine = lines.shift();
		let alignLine = lines.shift();
		let aligns = [];
		if(alignLine != null) {
			markdown_TableSyntax.CELL_PATTERN.map(alignLine,function(e) {
				let text = e.matched(2);
				let align = text.charAt(0) == ":" ? text.charAt(text.length - 1) == ":" ? "center" : "left" : text.charAt(text.length - 1) == ":" ? "right" : "left";
				aligns.push(align);
				return "";
			});
		}
		let index = 0;
		markdown_TableSyntax.CELL_PATTERN.map(headLine,function(e) {
			let text = StringTools.trim(e.matched(2));
			let cell = new markdown_ElementNode("th",parser.document.parseInline(text));
			if(aligns[index] != "left") {
				cell.attributes.h["align"] = aligns[index];
			}
			heads.push(cell);
			index += 1;
			return "";
		});
		let _g = 0;
		while(_g < lines.length) {
			let line = lines[_g];
			++_g;
			let cols = [];
			rows.push(new markdown_ElementNode("tr",cols));
			let index = 0;
			markdown_TableSyntax.CELL_PATTERN.map(line,function(e) {
				let text = StringTools.trim(e.matched(2));
				let cell = new markdown_ElementNode("td",parser.document.parseInline(text));
				if(aligns[index] != "left") {
					cell.attributes.h["align"] = aligns[index];
				}
				cols.push(cell);
				index += 1;
				return "";
			});
		}
		return new markdown_ElementNode("table",[new markdown_ElementNode("thead",heads),new markdown_ElementNode("tbody",rows)]);
	}
}
markdown_TableSyntax.__name__ = true;
class markdown_HtmlRenderer {
	constructor() {
	}
	render(nodes) {
		this.buffer = new StringBuf();
		let _g = 0;
		while(_g < nodes.length) {
			let node = nodes[_g];
			++_g;
			node.accept(this);
		}
		return this.buffer.b;
	}
	visitText(text) {
		this.buffer.b += Std.string(text.text);
	}
	visitElementBefore(element) {
		if(this.buffer.b != "" && markdown_HtmlRenderer.BLOCK_TAGS.match(element.tag)) {
			this.buffer.b += "\n";
		}
		this.buffer.b += Std.string("<" + element.tag);
		let _g = [];
		let h = element.attributes.h;
		let k_keys = Object.keys(h);
		let k_length = k_keys.length;
		let k_current = 0;
		while(k_current < k_length) {
			let k = k_keys[k_current++];
			_g.push(k);
		}
		_g.sort(markdown_HtmlRenderer.sortAttributes);
		let _g1 = 0;
		while(_g1 < _g.length) {
			let name = _g[_g1];
			++_g1;
			this.buffer.b += Std.string(" " + name + "=\"" + element.attributes.h[name] + "\"");
		}
		if(element.children == null) {
			this.buffer.b += " />";
			return false;
		} else {
			this.buffer.b += ">";
			return true;
		}
	}
	visitElementAfter(element) {
		this.buffer.b += Std.string("</" + element.tag + ">");
	}
	static sortAttributes(a,b) {
		let ia = markdown_HtmlRenderer.attributeOrder.indexOf(a);
		let ib = markdown_HtmlRenderer.attributeOrder.indexOf(a);
		if(ia > -1 && ib > -1) {
			return ia - ib;
		}
		return Reflect.compare(a,b);
	}
}
markdown_HtmlRenderer.__name__ = true;
class markdown_InlineSyntax {
	constructor(pattern) {
		this.pattern = new EReg(pattern,"m");
	}
	tryMatch(parser) {
		if(this.pattern.match(parser.get_currentSource()) && this.pattern.matchedPos().pos == 0) {
			parser.writeText();
			if(this.onMatch(parser)) {
				parser.consume(this.pattern.matched(0).length);
			}
			return true;
		}
		return false;
	}
	onMatch(parser) {
		return false;
	}
}
markdown_InlineSyntax.__name__ = true;
class markdown_AutolinkSyntaxWithoutBrackets extends markdown_InlineSyntax {
	constructor() {
		super("\\b((http|https|ftp)://[^\\s]*)\\b");
	}
	tryMatch(parser) {
		return super.tryMatch(parser);
	}
	onMatch(parser) {
		let url = this.pattern.matched(1);
		let anchor = markdown_ElementNode.text("a",StringTools.htmlEscape(url));
		anchor.attributes.h["href"] = url;
		parser.addNode(anchor);
		return true;
	}
}
markdown_AutolinkSyntaxWithoutBrackets.__name__ = true;
class markdown_TextSyntax extends markdown_InlineSyntax {
	constructor(pattern,substitute) {
		super(pattern);
		this.substitute = substitute;
	}
	onMatch(parser) {
		if(this.substitute == null) {
			parser.advanceBy(this.pattern.matched(0).length);
			return false;
		}
		parser.addNode(parser.createText(this.substitute));
		return true;
	}
}
markdown_TextSyntax.__name__ = true;
class markdown_AutolinkSyntax extends markdown_InlineSyntax {
	constructor() {
		super("<((http|https|ftp)://[^>]*)>");
	}
	onMatch(parser) {
		let url = this.pattern.matched(1);
		let anchor = markdown_ElementNode.text("a",StringTools.htmlEscape(url));
		anchor.attributes.h["href"] = url;
		parser.addNode(anchor);
		return true;
	}
}
markdown_AutolinkSyntax.__name__ = true;
class markdown_TagSyntax extends markdown_InlineSyntax {
	constructor(pattern,tag,end) {
		super(pattern);
		this.tag = tag;
		this.endPattern = new EReg(end == null ? pattern : end,"m");
	}
	onMatch(parser) {
		parser.stack.push(new markdown_TagState(parser.pos,parser.pos + this.pattern.matched(0).length,this));
		return true;
	}
	onMatchEnd(parser,state) {
		parser.addNode(new markdown_ElementNode(this.tag,state.children));
		return true;
	}
}
markdown_TagSyntax.__name__ = true;
class markdown_LinkSyntax extends markdown_TagSyntax {
	constructor(linkResolver) {
		super("\\[",null,markdown_LinkSyntax.linkPattern);
		this.linkResolver = linkResolver;
	}
	onMatchEnd(parser,state) {
		let url;
		let title;
		if(this.endPattern.matched(1) == null || this.endPattern.matched(1) == "") {
			if(this.linkResolver == null) {
				return false;
			}
			if(state.children.length != 1) {
				return false;
			}
			if(!((state.children[0]) instanceof markdown_TextNode)) {
				return false;
			}
			let link = state.children[0];
			let node = this.linkResolver(link.text);
			if(node == null) {
				return false;
			}
			parser.addNode(node);
			return true;
		}
		if(this.endPattern.matched(3) != null && this.endPattern.matched(3) != "") {
			url = this.endPattern.matched(3);
			title = this.endPattern.matched(4);
			if(url.startsWith("<") && url.endsWith(">")) {
				url = url.substring(1,url.length - 1);
			}
		} else {
			let id = this.endPattern.matched(2);
			if(id == "") {
				id = parser.source.substring(state.startPos + 1,parser.pos);
			}
			id = id.toLowerCase();
			let link = parser.document.refLinks.h[id];
			if(link == null) {
				return false;
			}
			url = link.url;
			title = link.title;
		}
		let anchor = new markdown_ElementNode("a",state.children);
		let this1 = anchor.attributes;
		let value = StringTools.htmlEscape(url);
		this1.h["href"] = value;
		if(title != null && title != "") {
			let this1 = anchor.attributes;
			let value = StringTools.htmlEscape(title);
			this1.h["title"] = value;
		}
		parser.addNode(anchor);
		return true;
	}
}
markdown_LinkSyntax.__name__ = true;
class markdown_ImgSyntax extends markdown_TagSyntax {
	constructor(linkResolver) {
		super("!\\[",null,markdown_ImgSyntax.linkPattern);
		this.linkResolver = linkResolver;
	}
	onMatchEnd(parser,state) {
		let url;
		let title;
		if(this.endPattern.matched(1) == null || this.endPattern.matched(1) == "") {
			if(this.linkResolver == null) {
				return false;
			}
			if(state.children.length != 1) {
				return false;
			}
			if(!((state.children[0]) instanceof markdown_TextNode)) {
				return false;
			}
			let link = state.children[0];
			let node = this.linkResolver(link.text);
			if(node == null) {
				return false;
			}
			parser.addNode(node);
			return true;
		}
		if(this.endPattern.matched(3) != null && this.endPattern.matched(3) != "") {
			url = this.endPattern.matched(3);
			title = this.endPattern.matched(4);
			if(url.startsWith("<") && url.endsWith(">")) {
				url = url.substring(1,url.length - 1);
			}
		} else {
			let id = this.endPattern.matched(2);
			if(id == "") {
				id = parser.source.substring(state.startPos + 1,parser.pos);
			}
			id = id.toLowerCase();
			let link = parser.document.refLinks.h[id];
			if(link == null) {
				return false;
			}
			url = link.url;
			title = link.title;
		}
		let img = new markdown_ElementNode("img",null);
		let this1 = img.attributes;
		let value = StringTools.htmlEscape(url);
		this1.h["src"] = value;
		if(state.children.length == 1 && ((state.children[0]) instanceof markdown_TextNode)) {
			let alt = state.children[0];
			img.attributes.h["alt"] = alt.text;
		}
		if(title != null && title != "") {
			let this1 = img.attributes;
			let value = StringTools.htmlEscape(title);
			this1.h["title"] = value;
		}
		parser.addNode(img);
		return true;
	}
}
markdown_ImgSyntax.__name__ = true;
class markdown_CodeSyntax extends markdown_InlineSyntax {
	constructor(pattern) {
		super(pattern);
	}
	onMatch(parser) {
		parser.addNode(markdown_ElementNode.text("code",StringTools.htmlEscape(this.pattern.matched(1))));
		return true;
	}
}
markdown_CodeSyntax.__name__ = true;
class markdown_InlineParser {
	constructor(source,document) {
		this.start = 0;
		this.pos = 0;
		this.source = source;
		this.document = document;
		this.stack = [];
		if(document.inlineSyntaxes != null) {
			this.syntaxes = [];
			let _g = 0;
			let _g1 = document.inlineSyntaxes;
			while(_g < _g1.length) {
				let syntax = _g1[_g];
				++_g;
				this.syntaxes.push(syntax);
			}
			let _g2 = 0;
			let _g3 = markdown_InlineParser.defaultSyntaxes;
			while(_g2 < _g3.length) {
				let syntax = _g3[_g2];
				++_g2;
				this.syntaxes.push(syntax);
			}
		} else {
			this.syntaxes = markdown_InlineParser.defaultSyntaxes;
		}
		let _this = this.syntaxes;
		let x = new markdown_LinkSyntax(document.linkResolver);
		_this.splice(1,0,x);
	}
	parse() {
		this.stack.push(new markdown_TagState(0,0,null));
		while(!this.get_isDone()) {
			let matched = false;
			let _g = 1;
			let _g1 = this.stack.length;
			while(_g < _g1) {
				let i = _g++;
				if(this.stack[this.stack.length - i].tryMatch(this)) {
					matched = true;
					break;
				}
			}
			if(matched) {
				continue;
			}
			let _g2 = 0;
			let _g3 = this.syntaxes;
			while(_g2 < _g3.length) {
				let syntax = _g3[_g2];
				++_g2;
				if(syntax.tryMatch(this)) {
					matched = true;
					break;
				}
			}
			if(matched) {
				continue;
			}
			this.advanceBy(1);
		}
		return this.stack[0].close(this);
	}
	writeText() {
		this.writeTextRange(this.start,this.pos);
		this.start = this.pos;
	}
	writeTextRange(start,end) {
		if(end > start) {
			let text = this.source.substring(start,end);
			let nodes = this.stack[this.stack.length - 1].children;
			if(nodes.length > 0 && ((nodes[nodes.length - 1]) instanceof markdown_TextNode)) {
				let lastNode = nodes[nodes.length - 1];
				let newNode = this.createText("" + lastNode.text + text);
				nodes[nodes.length - 1] = newNode;
			} else {
				nodes.push(this.createText(text));
			}
		}
	}
	createText(text) {
		return new markdown_TextNode(this.unescape(text));
	}
	addNode(node) {
		this.stack[this.stack.length - 1].children.push(node);
	}
	get_currentSource() {
		return this.source.substring(this.pos,this.source.length);
	}
	get_isDone() {
		return this.pos == this.source.length;
	}
	advanceBy(length) {
		this.pos += length;
	}
	consume(length) {
		this.pos += length;
		this.start = this.pos;
	}
	unescape(text) {
		let _this_r = new RegExp("\\\\([\\\\`*_{}\\[\\]()#+-.!])","g".split("u").join(""));
		text = text.replace(_this_r,"$1");
		text = StringTools.replace(text,"\t","    ");
		return text;
	}
}
markdown_InlineParser.__name__ = true;
class markdown_TagState {
	constructor(startPos,endPos,syntax) {
		this.startPos = startPos;
		this.endPos = endPos;
		this.syntax = syntax;
		this.children = [];
	}
	tryMatch(parser) {
		if(this.syntax.endPattern.match(parser.get_currentSource()) && this.syntax.endPattern.matchedPos().pos == 0) {
			this.close(parser);
			return true;
		}
		return false;
	}
	close(parser) {
		let index = parser.stack.indexOf(this);
		let unmatchedTags = parser.stack.splice(index + 1,parser.stack.length - index);
		let _g = 0;
		while(_g < unmatchedTags.length) {
			let unmatched = unmatchedTags[_g];
			++_g;
			parser.writeTextRange(unmatched.startPos,unmatched.endPos);
			let _g1 = 0;
			let _g2 = unmatched.children;
			while(_g1 < _g2.length) {
				let child = _g2[_g1];
				++_g1;
				this.children.push(child);
			}
		}
		parser.writeText();
		parser.stack.pop();
		if(parser.stack.length == 0) {
			return this.children;
		}
		if(this.syntax.onMatchEnd(parser,this)) {
			parser.consume(this.syntax.endPattern.matched(0).length);
		} else {
			parser.start = this.startPos;
			parser.advanceBy(this.syntax.endPattern.matched(0).length);
		}
		return null;
	}
}
markdown_TagState.__name__ = true;
function $getIterator(o) { if( o instanceof Array ) return new haxe_iterators_ArrayIterator(o); else return o.iterator(); }
var $_;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $global.$haxeUID++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = m.bind(o); o.hx__closures__[m.__id__] = f; } return f; }
$global.$haxeUID |= 0;
if(typeof(performance) != "undefined" ? typeof(performance.now) == "function" : false) {
	HxOverrides.now = performance.now.bind(performance);
}
if( String.fromCodePoint == null ) String.fromCodePoint = function(c) { return c < 0x10000 ? String.fromCharCode(c) : String.fromCharCode((c>>10)+0xD7C0)+String.fromCharCode((c&0x3FF)+0xDC00); }
{
	String.__name__ = true;
	Array.__name__ = true;
}
js_Boot.__toStr = ({ }).toString;
ArmoryExamplesBrowser.GITORG = "armory3d";
ArmoryExamplesBrowser.GITHUB = "https://github.com/" + ArmoryExamplesBrowser.GITORG;
markdown_BlockSyntax.RE_EMPTY = new EReg("^([ \\t]*)$","");
markdown_BlockSyntax.RE_SETEXT = new EReg("^((=+)|(-+))$","");
markdown_BlockSyntax.RE_HEADER = new EReg("^(#{1,6})(.*?)( +#* *)?$","");
markdown_BlockSyntax.RE_BLOCKQUOTE = new EReg("^[ ]{0,3}>[ ]?(.*)$","");
markdown_BlockSyntax.RE_INDENT = new EReg("^(?:    |\t)(.*)$","");
markdown_BlockSyntax.RE_CODE = new EReg("^```(\\w*)\\s*$","");
markdown_BlockSyntax.RE_HR = new EReg("^[ ]{0,3}((-+[ ]{0,2}){3,}|(_+[ ]{0,2}){3,}|(\\*+[ ]{0,2}){3,})$","");
markdown_BlockSyntax.RE_HTML = new EReg("^<[ ]*\\w+[ >]","");
markdown_BlockSyntax.RE_UL = new EReg("^[ ]{0,3}[*+-][ \\t]+(.*)$","");
markdown_BlockSyntax.RE_OL = new EReg("^[ ]{0,3}\\d+\\.[ \\t]+(.*)$","");
markdown_TableSyntax.TABLE_PATTERN = new EReg("^(.+?:?\\|:?)+(.+)$","");
markdown_TableSyntax.CELL_PATTERN = new EReg("(\\|)?([^\\|]+)(\\|)?","g");
markdown_HtmlRenderer.BLOCK_TAGS = new EReg("blockquote|h1|h2|h3|h4|h5|h6|hr|p|pre","");
markdown_HtmlRenderer.attributeOrder = ["src","alt"];
markdown_LinkSyntax.linkPattern = "\\](?:(" + "\\s?\\[([^\\]]*)\\]" + "|" + "\\s?\\(([^ )]+)(?:[ ]*\"([^\"]+)\"|)\\)" + ")|)";
markdown_ImgSyntax.linkPattern = "\\](?:(" + "\\s?\\[([^\\]]*)\\]" + "|" + "\\s?\\(([^ )]+)(?:[ ]*\"([^\"]+)\"|)\\)" + ")|)";
markdown_InlineParser.defaultSyntaxes = [new markdown_AutolinkSyntaxWithoutBrackets(),new markdown_TextSyntax(" {2,}\n","<br />\n"),new markdown_TextSyntax("\\s*[A-Za-z0-9]+"),new markdown_AutolinkSyntax(),new markdown_LinkSyntax(),new markdown_ImgSyntax(),new markdown_TextSyntax(" \\* "),new markdown_TextSyntax(" _ "),new markdown_TextSyntax("&[#a-zA-Z0-9]*;"),new markdown_TextSyntax("&","&amp;"),new markdown_TextSyntax("<(?:!--[ ]*|/)?\\w+.*?>"),new markdown_TextSyntax("<","&lt;"),new markdown_TagSyntax("\\*\\*","strong"),new markdown_TagSyntax("__","strong"),new markdown_TagSyntax("\\*","em"),new markdown_TagSyntax("\\b_","em","_\\b"),new markdown_CodeSyntax("``\\s?((?:.|\\n)*?)\\s?``"),new markdown_CodeSyntax("`([^`]*)`")];
ArmoryExamplesBrowser.main();
})(typeof exports != "undefined" ? exports : typeof window != "undefined" ? window : typeof self != "undefined" ? self : this, typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this);

//# sourceMappingURL=app.js.map