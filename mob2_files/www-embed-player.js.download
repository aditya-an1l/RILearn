(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ca(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&b!=null&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(Math.random()*1E9>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];typeof d==="function"&&typeof d.prototype[a]!="function"&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
var ia=typeof Object.create=="function"?Object.create:function(a){function b(){}
b.prototype=a;return new b},la=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if(typeof Reflect!="undefined"&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){e===void 0&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ma;
if(typeof Object.setPrototypeOf=="function")ma=Object.setPrototypeOf;else{var na;a:{var oa={a:!0},pa={};try{pa.__proto__=oa;na=pa.a;break a}catch(a){}na=!1}ma=na?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var qa=ma;
function w(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(qa)qa(a,b);else for(var c in b)if(c!="prototype")if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function y(a){var b=typeof Symbol!="undefined"&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if(typeof a.length=="number")return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function ra(a){if(!(a instanceof Array)){a=y(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function sa(a){return ta(a,a)}
function ta(a,b){a.raw=b;Object.freeze&&(Object.freeze(a),Object.freeze(b));return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va=typeof Object.assign=="function"?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||va});
function wa(){this.D=!1;this.u=null;this.i=void 0;this.h=1;this.o=this.M=0;this.P=this.j=null}
function xa(a){if(a.D)throw new TypeError("Generator is already running");a.D=!0}
wa.prototype.G=function(a){this.i=a};
function ya(a,b){a.j={exception:b,zd:!0};a.h=a.M||a.o}
wa.prototype.return=function(a){this.j={return:a};this.h=this.o};
wa.prototype.yield=function(a,b){this.h=b;return{value:a}};
wa.prototype.A=function(a){this.h=a};
function za(a,b,c){a.M=b;c!=void 0&&(a.o=c)}
function Aa(a,b){a.h=b;a.M=0}
function Ba(a){a.M=0;var b=a.j.exception;a.j=null;return b}
function Ca(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.zd?a.h=a.M||a.o:b.A!=void 0&&a.o<b.A?(a.h=b.A,a.j=null):a.h=a.o:a.h=0}
function Da(a){this.h=new wa;this.i=a}
function Ea(a,b){xa(a.h);var c=a.h.u;if(c)return Fa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ga(a)}
function Fa(a,b,c,d){try{var e=b.call(a.h.u,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.D=!1,e;var f=e.value}catch(g){return a.h.u=null,ya(a.h,g),Ga(a)}a.h.u=null;d.call(a.h,f);return Ga(a)}
function Ga(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.D=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,ya(a.h,c)}a.h.D=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.zd)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ha(a){this.next=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u.next,b,a.h.G):(a.h.G(b),b=Ga(a));return b};
this.throw=function(b){xa(a.h);a.h.u?b=Fa(a,a.h.u["throw"],b,a.h.G):(ya(a.h,b),b=Ga(a));return b};
this.return=function(b){return Ea(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ia(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ia(new Ha(new Da(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("globalThis",function(a){return a||fa});
v("Reflect",function(a){return a?a:{}});
v("Reflect.construct",function(){return la});
v("Reflect.setPrototypeOf",function(a){return a?a:qa?function(b,c){try{return qa(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.X=0;this.ab=void 0;this.h=[];this.u=!1;var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(this.h==null){this.h=[];var h=this;this.j(function(){h.u()})}this.h.push(g)};
var e=fa.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.u=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.o(l)}}}this.h=null};
c.prototype.o=function(g){this.j(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.U),reject:g(this.j)}};
b.prototype.U=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.Z(g);else{a:switch(typeof g){case "object":var h=g!=null;break a;case "function":h=!0;break a;default:h=!1}h?this.P(g):this.o(g)}};
b.prototype.P=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}typeof h=="function"?this.ha(h,g):this.o(g)};
b.prototype.j=function(g){this.M(2,g)};
b.prototype.o=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(this.X!=0)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.X);this.X=g;this.ab=h;this.X===2&&this.Y();this.D()};
b.prototype.Y=function(){var g=this;e(function(){if(g.G()){var h=fa.console;typeof h!=="undefined"&&h.error(g.ab)}},1)};
b.prototype.G=function(){if(this.u)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if(typeof k==="undefined")return!0;typeof g==="function"?g=new g("unhandledrejection",{cancelable:!0}):typeof h==="function"?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.ab;return k(g)};
b.prototype.D=function(){if(this.h!=null){for(var g=0;g<this.h.length;++g)f.i(this.h[g]);this.h=null}};
var f=new c;b.prototype.Z=function(g){var h=this.i();g.hc(h.resolve,h.reject)};
b.prototype.ha=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(p,t){return typeof p=="function"?function(u){try{l(p(u))}catch(x){m(x)}}:t}
var l,m,n=new b(function(p,t){l=p;m=t});
this.hc(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.hc=function(g,h){function k(){switch(l.X){case 1:g(l.ab);break;case 2:h(l.ab);break;default:throw Error("Unexpected state: "+l.X);}}
var l=this;this.h==null?f.i(k):this.h.push(k);this.u=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=y(g),m=l.next();!m.done;m=l.next())d(m.value).hc(h,k)})};
b.all=function(g){var h=y(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(u){return function(x){p[u]=x;t--;t==0&&l(p)}}
var p=[],t=0;do p.push(void 0),t++,d(k.value).hc(n(p.length-1),m),k=h.next();while(!k.done)})};
return b});
v("Object.setPrototypeOf",function(a){return a||qa});
v("Symbol.dispose",function(a){return a?a:Symbol("Symbol.dispose")});
v("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=y(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return l==="object"&&k!==null||l==="function"}
function e(k){if(!ua(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(m.get(k)!=2||m.get(l)!=3)return!1;m.delete(k);m.set(l,4);return!m.has(k)&&m.get(l)==4}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&ua(k,g)&&ua(k[g],this.h)?delete k[g][this.h]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;l=="object"||l=="function"?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ua(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=y(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var h=Object.seal({x:4}),k=new a(y([[h,"s"]]));if(k.get(h)!="s"||k.size!=1||k.get({x:4})||k.set({x:4},"t")!=k||k.size!=2)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||m.value[1]!="s")return!1;m=l.next();return m.done||m.value[0].x!=4||m.value[1]!="t"||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=h===0?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.h=new Map;if(c){c=y(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||typeof a!="function"||!a.prototype.entries||typeof Object.seal!="function")return!1;try{var c=Object.seal({x:4}),d=new a(y([c]));if(!d.has(c)||d.size!=1||d.add(c)!=d||d.size!=1||d.add({x:4})!=d||d.size!=2)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||f.value[0].x!=4||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=c===0?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
function Ja(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ja(this,function(b,c){return[b,c]})}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ja(this,function(b){return b})}});
function Ka(a,b,c){if(a==null)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ka(this,b,"endsWith");b+="";c===void 0&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;e>0&&c>0;)if(d[--c]!=b[--e])return!1;return e<=0}});
v("Number.isFinite",function(a){return a?a:function(b){return typeof b!=="number"?!1:!isNaN(b)&&b!==Infinity&&b!==-Infinity}});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?b!==0||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(c<0&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return Ka(this,b,"includes").indexOf(b,c||0)!==-1}});
v("Array.from",function(a){return a?a:function(b,c,d){c=c!=null?c:function(h){return h};
var e=[],f=typeof Symbol!="undefined"&&Symbol.iterator&&b[Symbol.iterator];if(typeof f=="function"){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ua(b,d)&&c.push([d,b[d]]);return c}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.MIN_SAFE_INTEGER",function(){return-9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
v("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||b===Infinity||b===-Infinity||b===0)return b;var c=Math.floor(Math.abs(b));return b<0?-c:c}});
v("Number.isNaN",function(a){return a?a:function(b){return typeof b==="number"&&isNaN(b)}});
v("Array.prototype.values",function(a){return a?a:function(){return Ja(this,function(b,c){return c})}});
v("Math.clz32",function(a){return a?a:function(b){b=Number(b)>>>0;if(b===0)return 32;var c=0;(b&4294901760)===0&&(b<<=16,c+=16);(b&4278190080)===0&&(b<<=8,c+=8);(b&4026531840)===0&&(b<<=4,c+=4);(b&3221225472)===0&&(b<<=2,c+=2);(b&2147483648)===0&&c++;return c}});
v("Math.log10",function(a){return a?a:function(b){return Math.log(b)/Math.LN10}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var La=La||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||typeof c.execScript=="undefined"||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||b===void 0?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],b==null)return null;return b}
function Ma(a){var b=typeof a;return b!="object"?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return b=="array"||b=="object"&&typeof a.length=="number"}
function Sa(a){var b=typeof a;return b=="object"&&a!=null||b=="function"}
function Ta(a){return Object.prototype.hasOwnProperty.call(a,Ua)&&a[Ua]||(a[Ua]=++Va)}
var Ua="closure_uid_"+(Math.random()*1E9>>>0),Va=0;function Wa(a,b,c){return a.call.apply(a.bind,arguments)}
function Xa(a,b,c){if(!a)throw Error();if(arguments.length>2){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Za(a,b,c){Za=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Wa:Xa;return Za.apply(null,arguments)}
function $a(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function ab(){return Date.now()}
function bb(a){return a}
function cb(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
;function db(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,db);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));b!==void 0&&(this.cause=b)}
cb(db,Error);db.prototype.name="CustomError";var eb=(new Date("2024-01-01T00:00:00Z")).getTime();function fb(a){var b=a.url;a=a.Xh;this.i=b;this.D=a;a=/[?&]dsh=1(&|$)/.test(b);this.u=!a&&/[?&]ae=1(&|$)/.test(b);this.M=!a&&/[?&]ae=2(&|$)/.test(b);if((this.h=/[?&]adurl=([^&]*)/.exec(b))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.j=c}this.o=(new Date).getTime()-eb}
function gb(a,b){return b?a.h?a.i.slice(0,a.h.index)+b+a.i.slice(a.h.index):a.i+b:a.i}
function hb(a){a=a.D;if(!a)return"";var b="";a.platform&&(b+="&uap="+encodeURIComponent(a.platform));a.platformVersion&&(b+="&uapv="+encodeURIComponent(a.platformVersion));a.uaFullVersion&&(b+="&uafv="+encodeURIComponent(a.uaFullVersion));a.architecture&&(b+="&uaa="+encodeURIComponent(a.architecture));a.model&&(b+="&uam="+encodeURIComponent(a.model));a.bitness&&(b+="&uab="+encodeURIComponent(a.bitness));a.fullVersionList&&(b+="&uafvl="+encodeURIComponent(a.fullVersionList.map(function(c){return encodeURIComponent(c.brand)+
";"+encodeURIComponent(c.version)}).join("|")));
typeof a.wow64!=="undefined"&&(b+="&uaw="+Number(a.wow64));return b}
;var ib=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};/*

 Copyright Google LLC
 SPDX-License-Identifier: Apache-2.0
*/
var jb=globalThis.trustedTypes,kb;function lb(){var a=null;if(!jb)return a;try{var b=function(c){return c};
a=jb.createPolicy("goog#html",{createHTML:b,createScript:b,createScriptURL:b})}catch(c){}return a}
function mb(){kb===void 0&&(kb=lb());return kb}
;function nb(a){this.h=a}
nb.prototype.toString=function(){return this.h+""};
function ob(a){var b=mb();return new nb(b?b.createScriptURL(a):a)}
function pb(a){if(a instanceof nb)return a.h;throw Error("");}
;var qb=sa([""]),rb=ta(["\x00"],["\\0"]),sb=ta(["\n"],["\\n"]),tb=ta(["\x00"],["\\u0000"]);function ub(a){return a.toString().indexOf("`")===-1}
ub(function(a){return a(qb)})||ub(function(a){return a(rb)})||ub(function(a){return a(sb)})||ub(function(a){return a(tb)});function vb(a){this.h=a}
vb.prototype.toString=function(){return this.h};
var wb=new vb("about:invalid#zClosurez");function xb(a){this.He=a}
function yb(a){return new xb(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var zb=[yb("data"),yb("http"),yb("https"),yb("mailto"),yb("ftp"),new xb(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Ab=/^\s*(?!javascript:)(?:[\w+.-]+:|[^:/?#]*(?:[/?#]|$))/i;
function Bb(a){if(a instanceof vb)if(a instanceof vb)a=a.h;else throw Error("");else a=Ab.test(a)?a:void 0;return a}
;function Cb(a,b){b=Bb(b);b!==void 0&&(a.href=b)}
;function Db(a,b){throw Error(b===void 0?"unexpected value "+a+"!":b);}
;function Eb(a){this.h=a}
Eb.prototype.toString=function(){return this.h+""};function Fb(a){a=a===void 0?document:a;var b,c;a=(c=(b=a).querySelector)==null?void 0:c.call(b,"script[nonce]");return a==null?"":a.nonce||a.getAttribute("nonce")||""}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h+""};
function Hb(a){var b=mb();return new Gb(b?b.createScript(a):a)}
function Ib(a){if(a instanceof Gb)return a.h;throw Error("");}
;function Jb(a){var b=Fb(a.ownerDocument);b&&a.setAttribute("nonce",b)}
function Kb(a,b){a.src=pb(b);Jb(a)}
;function Lb(){this.h=Mb[0].toLowerCase()}
Lb.prototype.toString=function(){return this.h};function Nb(a){var b="true".toString(),c=[new Lb];if(c.length===0)throw Error("");if(c.map(function(d){if(d instanceof Lb)d=d.h;else throw Error("");return d}).every(function(d){return"data-loaded".indexOf(d)!==0}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;var Pb="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function Qb(a,b){if(b instanceof nb)a.href=pb(b).toString(),a.rel="stylesheet";else{if(Pb.indexOf("stylesheet")===-1)throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Bb(b);b!==void 0&&(a.href=b,a.rel="stylesheet")}}
;var Rb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(typeof a==="string")return typeof b!=="string"||b.length!=1?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Sb=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},Tb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f=typeof a==="string"?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Ub=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e=typeof a==="string"?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Vb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
Sb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Wb(a,b){a:{for(var c=a.length,d=typeof a==="string"?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return b<0?null:typeof a==="string"?a.charAt(b):a[b]}
function Xb(a,b){b=Rb(a,b);var c;(c=b>=0)&&Array.prototype.splice.call(a,b,1);return c}
function Yb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Zb(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function $b(a){var b=E("window.location.href");a==null&&(a='Unknown Error of type "null/undefined"');if(typeof a==="string")return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ac(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(c==
null){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,bc[c])c=bc[c];else{c=String(c);if(!bc[c]){var f=/function\s+([^\(]+)/m.exec(c);bc[c]=f?f[1]:"[Anonymous]"}c=bc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";typeof a.toString==="function"&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function ac(a,b){b||(b={});b[cc(a)]=!0;var c=a.stack||"",d=a.cause;d&&!b[cc(d)]&&(c+="\nCaused by: ",d.stack&&d.stack.indexOf(d.toString())==0||(c+=typeof d==="string"?d:d.message+"\n"),c+=ac(d,b));a=a.errors;if(Array.isArray(a)){d=1;var e;for(e=0;e<a.length&&!(d>4);e++)b[cc(a[e])]||(c+="\nInner error "+d++ +": ",a[e].stack&&a[e].stack.indexOf(a[e].toString())==0||(c+=typeof a[e]==="string"?a[e]:a[e].message+"\n"),c+=ac(a[e],b));e<a.length&&(c+="\n... "+(a.length-e)+" more inner errors")}return c}
function cc(a){var b="";typeof a.toString==="function"&&(b=""+a);return b+a.stack}
var bc={};function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function hc(a,b){return b.match(ec)[a]||null}
function ic(a){return fc(hc(3,a))}
function jc(a){var b=a.match(ec);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function kc(a){var b=a.indexOf("#");return b<0?a:a.slice(0,b)}
function lc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else b!=null&&c.push(a+(b===""?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
function nc(a,b){b=mc(b);if(b){var c=a.indexOf("#");c<0&&(c=a.length);var d=a.indexOf("?");if(d<0||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function oc(a,b,c,d){for(var e=c.length;(b=a.indexOf(c,b))>=0&&b<d;){var f=a.charCodeAt(b-1);if(f==38||f==63)if(f=a.charCodeAt(b+e),!f||f==61||f==38||f==35)return b;b+=e+1}return-1}
var pc=/#|$/,qc=/[?&]($|#)/;function rc(a,b){for(var c=a.search(pc),d=0,e,f=[];(e=oc(a,d,b,c))>=0;)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(qc,"$1")}
;function sc(){try{var a,b;return!!((a=window)==null?0:(b=a.top)==null?0:b.location.href)&&!1}catch(c){return!0}}
;function tc(a){var b=b===void 0?42:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)<=b&&c.push(wc(d,1))});
return c}
function xc(a){var b=b===void 0?42:b;var c=[];uc(a,vc,6).forEach(function(d){wc(d,2)>b&&c.push(wc(d,1))});
return c}
function yc(a){var b=b===void 0?42:b;a=(a==null?void 0:wc(a,1))||0;return a>0&&b>=a}
;function zc(a){a&&typeof a.dispose=="function"&&a.dispose()}
;function Ac(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?Ac.apply(null,d):zc(d)}}
;function F(){this.ea=this.ea;this.M=this.M}
F.prototype.ea=!1;F.prototype.dispose=function(){this.ea||(this.ea=!0,this.ba())};
F.prototype[Symbol.dispose]=function(){this.dispose()};
function Bc(a,b){a.addOnDisposeCallback($a(zc,b))}
F.prototype.addOnDisposeCallback=function(a,b){this.ea?b!==void 0?a.call(b):a():(this.M||(this.M=[]),b&&(a=a.bind(b)),this.M.push(a))};
F.prototype.ba=function(){if(this.M)for(;this.M.length;)this.M.shift()()};var Cc;function Dc(){F.apply(this,arguments);this.j=1;this[Cc]=this.dispose}
w(Dc,F);Dc.prototype.share=function(){if(this.ea)throw Error("E:AD");this.j++;return this};
Dc.prototype.dispose=function(){--this.j||F.prototype.dispose.call(this)};
Cc=Symbol.dispose;function Ec(a){return{fieldType:2,fieldName:a}}
function Fc(a){return{fieldType:3,fieldName:a}}
;function Gc(a){this.h=a;a.Hc("/client_streamz/bg/frs",Fc("ke"))}
Gc.prototype.record=function(a,b){this.h.record("/client_streamz/bg/frs",a,b)};
function Hc(a){this.h=a;a.Hc("/client_streamz/bg/wrl",Fc("mn"),Ec("ac"),Ec("sc"),Fc("rk"),Fc("mk"))}
Hc.prototype.record=function(a,b,c,d,e,f){this.h.record("/client_streamz/bg/wrl",a,b,c,d,e,f)};
function Ic(a){this.i=a;a.Lb("/client_streamz/bg/ec",Fc("en"),Fc("mk"))}
Ic.prototype.h=function(a,b){this.i.Jb("/client_streamz/bg/ec",a,b)};
function Jc(a){this.h=a;a.Hc("/client_streamz/bg/el",Fc("en"),Fc("rk"),Fc("mk"))}
Jc.prototype.record=function(a,b,c,d){this.h.record("/client_streamz/bg/el",a,b,c,d)};
function Kc(a){this.i=a;a.Lb("/client_streamz/bg/cec",Ec("ec"),Fc("rk"),Fc("mk"))}
Kc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/cec",a,b,c)};
function Lc(a){this.i=a;a.Lb("/client_streamz/bg/po/csc",Ec("cs"),Fc("rk"),Fc("mk"))}
Lc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/csc",a,b,c)};
function Mc(a){this.i=a;a.Lb("/client_streamz/bg/po/ctav",Fc("av"),Fc("rk"),Fc("mk"))}
Mc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/ctav",a,b,c)};
function Nc(a){this.i=a;a.Lb("/client_streamz/bg/po/cwsc",Fc("su"),Fc("rk"),Fc("mk"))}
Nc.prototype.h=function(a,b,c){this.i.Jb("/client_streamz/bg/po/cwsc",a,b,c)};function Oc(a){C.setTimeout(function(){throw a;},0)}
;var Pc,Qc=E("CLOSURE_FLAGS"),Rc=Qc&&Qc[610401301];Pc=Rc!=null?Rc:!1;function Sc(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Tc,Uc=C.navigator;Tc=Uc?Uc.userAgentData||null:null;function Vc(a){return Pc?Tc?Tc.brands.some(function(b){return(b=b.brand)&&b.indexOf(a)!=-1}):!1:!1}
function G(a){return Sc().indexOf(a)!=-1}
;function Wc(){return Pc?!!Tc&&Tc.brands.length>0:!1}
function Xc(){return Wc()?!1:G("Opera")}
function Yc(){return G("Firefox")||G("FxiOS")}
function Zc(){return Wc()?Vc("Chromium"):(G("Chrome")||G("CriOS"))&&!(Wc()?0:G("Edge"))||G("Silk")}
;function $c(){return Pc?!!Tc&&!!Tc.platform:!1}
function ad(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;var bd=Xc(),cd=Wc()?!1:G("Trident")||G("MSIE"),dd=G("Edge"),ed=G("Gecko")&&!(Sc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),fd=Sc().toLowerCase().indexOf("webkit")!=-1&&!G("Edge");fd&&G("Mobile");$c()||G("Macintosh");$c()||G("Windows");($c()?Tc.platform==="Linux":G("Linux"))||$c()||G("CrOS");var gd=$c()?Tc.platform==="Android":G("Android");ad();G("iPad");G("iPod");ad()||G("iPad")||G("iPod");Sc().toLowerCase().indexOf("kaios");Yc();var hd=ad()||G("iPod"),id=G("iPad");!G("Android")||Zc()||Yc()||Xc()||G("Silk");Zc();var jd=G("Safari")&&!(Zc()||(Wc()?0:G("Coast"))||Xc()||(Wc()?0:G("Edge"))||(Wc()?Vc("Microsoft Edge"):G("Edg/"))||(Wc()?Vc("Opera"):G("OPR"))||Yc()||G("Silk")||G("Android"))&&!(ad()||G("iPad")||G("iPod"));var kd={},ld=null;function md(a,b){Na(a);b===void 0&&(b=0);nd();b=kd[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function od(a){var b=a.length,c=b*3/4;c%3?c=Math.floor(c):"=.".indexOf(a[b-1])!=-1&&(c="=.".indexOf(a[b-2])!=-1?c-2:c-1);var d=new Uint8Array(c),e=0;pd(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function pd(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=ld[l];if(m!=null)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
nd();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(h===64&&e===-1)break;b(e<<2|f>>4);g!=64&&(b(f<<4&240|g>>2),h!=64&&b(g<<6&192|h))}}
function nd(){if(!ld){ld={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;c<5;c++){var d=a.concat(b[c].split(""));kd[c]=d;for(var e=0;e<d.length;e++){var f=d[e];ld[f]===void 0&&(ld[f]=e)}}}}
;var qd=typeof Uint8Array!=="undefined",rd=!cd&&typeof btoa==="function";function sd(a){if(!rd)return md(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var td=/[-_.]/g,ud={"-":"+",_:"/",".":"="};function vd(a){return ud[a]||""}
function wd(a){return qd&&a!=null&&a instanceof Uint8Array}
var xd={};function yd(a,b){zd(b);this.h=a;if(a!=null&&a.length===0)throw Error("ByteString should be constructed with non-empty values");}
yd.prototype.sizeBytes=function(){zd(xd);var a=this.h;if(a!=null&&!wd(a))if(typeof a==="string")if(rd){td.test(a)&&(a=a.replace(td,vd));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=od(a);else Ma(a),a=null;return(a=a==null?a:this.h=a)?a.length:0};
var Ad;function zd(a){if(a!==xd)throw Error("illegal external caller");}
;var Bd=void 0;function Cd(a){a=Error(a);Zb(a,"warning");return a}
;var Dd=typeof Symbol==="function"&&typeof Symbol()==="symbol",Ed=new Set;function Fd(a,b,c,d){c=c===void 0?!1:c;a=typeof Symbol==="function"&&typeof Symbol()==="symbol"?(d===void 0?0:d)&&Symbol.for&&a?Symbol.for(a):a!=null?Symbol(a):Symbol():b;c&&Ed.add(a);return a}
var Gd=Fd("jas",void 0,!0,!0),Hd=Fd(void 0,"2ex"),Id=Fd(void 0,"1oa",!0),Jd=Fd(void 0,Symbol(),!0);Math.max.apply(Math,ra(Object.values({mh:1,kh:2,jh:4,ph:8,oh:16,nh:32,Of:64,rh:128,ih:256,hh:512,lh:1024,Uf:2048,qh:4096,Vf:8192,Pf:16384})));var Kd=Dd?function(a,b){a[Gd]|=b}:function(a,b){a.jb!==void 0?a.jb|=b:Object.defineProperties(a,{jb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})},I=Dd?function(a){return a[Gd]|0}:function(a){return a.jb|0},Ld=Dd?function(a,b){a[Gd]=b}:function(a,b){a.jb!==void 0?a.jb=b:Object.defineProperties(a,{jb:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Md(a,b){Ld(b,(a|0)&-30975)}
function Nd(a,b){Ld(b,(a|34)&-30941)}
;function Od(){return typeof BigInt==="function"}
;function Pd(a){return Array.prototype.slice.call(a)}
;var Qd={},Rd={};function Sd(a){return!(!a||typeof a!=="object"||a.h!==Rd)}
function Td(a){return a!==null&&typeof a==="object"&&!Array.isArray(a)&&a.constructor===Object}
function Ud(a){return!Array.isArray(a)||a.length?!1:I(a)&1?!0:!1}
var Vd,Wd=[];Ld(Wd,55);Vd=Object.freeze(Wd);function Xd(a){if(a&2)throw Error();}
function Yd(a,b){var c=bb(Jd);(b=c?b[c]:void 0)&&(a[Jd]=Pd(b))}
var Zd=Object.freeze({});function $d(a){a.Fh=!0;return a}
;var ae=$d(function(a){return typeof a==="number"}),be=$d(function(a){return typeof a==="string"}),ce=$d(function(a){return typeof a==="boolean"});
function de(){var a=ee;return $d(function(b){for(var c in a)if(b===a[c]&&!/^[0-9]+$/.test(c))return!0;return!1})}
var fe=$d(function(a){return a!=null&&typeof a==="object"&&typeof a.then==="function"});var ge=typeof C.BigInt==="function"&&typeof C.BigInt(0)==="bigint";function he(a){var b=a;if(be(b)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(b))throw Error(String(b));}else if(ae(b)&&!Number.isSafeInteger(b))throw Error(String(b));return ge?BigInt(a):a=ce(a)?a?"1":"0":be(a)?a.trim()||"0":String(a)}
var ne=$d(function(a){return ge?a>=ie&&a<=je:a[0]==="-"?ke(a,le):ke(a,me)}),le=Number.MIN_SAFE_INTEGER.toString(),ie=ge?BigInt(Number.MIN_SAFE_INTEGER):void 0,me=Number.MAX_SAFE_INTEGER.toString(),je=ge?BigInt(Number.MAX_SAFE_INTEGER):void 0;
function ke(a,b){if(a.length>b.length)return!1;if(a.length<b.length||a===b)return!0;for(var c=0;c<a.length;c++){var d=a[c],e=b[c];if(d>e)return!1;if(d<e)return!0}}
;var oe=0,pe=0;function qe(a){var b=a>>>0;oe=b;pe=(a-b)/4294967296>>>0}
function re(a){if(a<0){qe(0-a);var b=y(se(oe,pe));a=b.next().value;b=b.next().value;oe=a>>>0;pe=b>>>0}else qe(a)}
function te(a,b){b>>>=0;a>>>=0;if(b<=2097151)var c=""+(4294967296*b+a);else Od()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+c*6777216+b*6710656,c+=b*8147497,b*=2,a>=1E7&&(c+=a/1E7>>>0,a%=1E7),c>=1E7&&(b+=c/1E7>>>0,c%=1E7),c=b+ue(c)+ue(a));return c}
function ue(a){a=String(a);return"0000000".slice(a.length)+a}
function ve(){var a=oe,b=pe;b&2147483648?Od()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=y(se(a,b)),a=b.next().value,b=b.next().value,a="-"+te(a,b)):a=te(a,b);return a}
function se(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;var we=typeof BigInt==="function"?BigInt.asIntN:void 0,xe=Number.isSafeInteger,ye=Number.isFinite,ze=Math.trunc;function Ae(a){return a.displayName||a.name||"unknown type name"}
function Be(a){if(a!=null&&typeof a!=="boolean")throw Error("Expected boolean but got "+Ma(a)+": "+a);return a}
var Ce=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function De(a){switch(typeof a){case "bigint":return!0;case "number":return ye(a);case "string":return Ce.test(a);default:return!1}}
function Ee(a){if(typeof a!=="number")throw Cd("int32");if(!ye(a))throw Cd("int32");return a|0}
function Fe(a){return a==null?a:Ee(a)}
function Ge(a){if(a==null)return a;if(typeof a==="string"&&a)a=+a;else if(typeof a!=="number")return;return ye(a)?a|0:void 0}
function He(a){var b=0;b=b===void 0?0:b;if(!De(a))throw Cd("int64");var c=typeof a;switch(b){case 4096:switch(c){case "string":return Ie(a);case "bigint":return String(we(64,a));default:return Je(a)}case 8192:switch(c){case "string":return b=ze(Number(a)),xe(b)?a=he(b):(b=a.indexOf("."),b!==-1&&(a=a.substring(0,b)),a=Od()?he(we(64,BigInt(a))):he(Ke(a))),a;case "bigint":return he(we(64,a));default:return xe(a)?he(Le(a)):he(Je(a))}case 0:switch(c){case "string":return Ie(a);case "bigint":return he(we(64,
a));default:return Le(a)}default:return Db(b,"Unknown format requested type for int64")}}
function Me(a){return a==null?a:He(a)}
function Ne(a){var b=a.length;return a[0]==="-"?b<20?!0:b===20&&Number(a.substring(0,7))>-922337:b<19?!0:b===19&&Number(a.substring(0,6))<922337}
function Ke(a){a.indexOf(".");if(Ne(a))return a;if(a.length<16)re(Number(a));else if(Od())a=BigInt(a),oe=Number(a&BigInt(4294967295))>>>0,pe=Number(a>>BigInt(32)&BigInt(4294967295));else{var b=+(a[0]==="-");pe=oe=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),pe*=1E6,oe=oe*1E6+d,oe>=4294967296&&(pe+=Math.trunc(oe/4294967296),pe>>>=0,oe>>>=0);b&&(b=y(se(oe,pe)),a=b.next().value,b=b.next().value,oe=a,pe=b)}return ve()}
function Le(a){De(a);a=ze(a);if(!xe(a)){re(a);var b=oe,c=pe;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,b==0&&(c=c+1>>>0);var d=c*4294967296+(b>>>0);b=Number.isSafeInteger(d)?d:te(b,c);a=typeof b==="number"?a?-b:b:a?"-"+b:b}return a}
function Je(a){De(a);a=ze(a);if(xe(a))a=String(a);else{var b=String(a);Ne(b)?a=b:(re(a),a=ve())}return a}
function Ie(a){De(a);var b=ze(Number(a));if(xe(b))return String(b);b=a.indexOf(".");b!==-1&&(a=a.substring(0,b));return Ke(a)}
function Oe(a){if(a==null)return a;if(typeof a==="bigint")return ne(a)?a=Number(a):(a=we(64,a),a=ne(a)?Number(a):String(a)),a;if(De(a))return typeof a==="number"?Le(a):Ie(a)}
function Pe(a){if(typeof a!=="string")throw Error();return a}
function Qe(a){if(a!=null&&typeof a!=="string")throw Error();return a}
function Re(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+Ae(b)+" but got "+(a&&Ae(a.constructor)));}
function Se(a,b,c){if(a!=null&&typeof a==="object"&&a.Tc===Qd)return a;if(Array.isArray(a)){var d=I(a),e=d;e===0&&(e|=c&32);e|=c&2;e!==d&&Ld(a,e);return new b(a)}}
;function Te(a,b){return Ue(b)}
function Ue(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "bigint":return ne(a)?Number(a):String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(Ud(a))return}else{if(wd(a))return sd(a);if(a instanceof yd){var b=a.h;return b==null?"":typeof b==="string"?b:a.h=sd(b)}}}return a}
;function Ve(a,b,c){var d=Pd(a),e=d.length,f=b&256?d[e-1]:void 0;e+=f?-1:0;for(b=b&512?1:0;b<e;b++)d[b]=c(d[b]);if(f){b=d[b]={};for(var g in f)b[g]=c(f[g])}Yd(d,a);return d}
function We(a,b,c,d,e){if(a!=null){if(Array.isArray(a))a=Ud(a)?void 0:e&&I(a)&2?a:Xe(a,b,c,d!==void 0,e);else if(Td(a)){var f={},g;for(g in a)f[g]=We(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function Xe(a,b,c,d,e){var f=d||c?I(a):0;d=d?!!(f&32):void 0;for(var g=Pd(a),h=0;h<g.length;h++)g[h]=We(g[h],b,c,d,e);c&&(Yd(g,a),c(f,g));return g}
function Ye(a){return a.Tc===Qd?a.toJSON():Ue(a)}
function Ze(a){return Xe(a,Ye,void 0,void 0,!1)}
;function J(a,b,c){if(a==null){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-33521665|(b&1023)<<15)}else{if(!Array.isArray(a))throw Error("narr");d=I(a);if(d&2048)throw Error("farr");if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error("mid");a:{c=a;var e=c.length;if(e){var f=e-1;if(Td(c[f])){d|=256;b=f-(d&512?0:-1);if(b>=1024)throw Error("pvtlmt");d=d&-33521665|(b&1023)<<15;break a}}if(b){b=Math.max(b,e-(d&512?0:-1));if(b>1024)throw Error("spvt");d=d&-33521665|(b&1023)<<15}}}Ld(a,d);return a}
;function $e(a,b,c){c=c===void 0?Nd:c;if(a!=null){if(qd&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=I(a);if(d&2)return a;b&&(b=d===0||!!(d&32)&&!(d&64||!(d&16)));return b?(Ld(a,(d|34)&-12293),a):Xe(a,$e,d&4?Nd:c,!0,!0)}a.Tc===Qd&&(c=a.F,d=I(c),a=d&2?a:new a.constructor(af(c,d,!0)));return a}}
function af(a,b,c){var d=c||b&2?Nd:Md,e=!!(b&32);a=Ve(a,b,function(f){return $e(f,e,d)});
Kd(a,32|(c?2:0));return a}
function bf(a){var b=a.F,c=I(b);return c&2?new a.constructor(af(b,c,!1)):a}
;function cf(a,b){a=a.F;return df(a,I(a),b)}
function df(a,b,c,d){if(c===-1)return null;var e=c+(b&512?0:-1),f=a.length-1;if(e>=f&&b&256)return a[f][c];if(d&&b&256&&(b=a[f][c],b!=null)){if(a[e]!=null&&Hd!=null){var g;a=(g=Bd)!=null?g:Bd={};g=a[Hd]||0;g>=4||(a[Hd]=g+1,g=Error(),Zb(g,"incident"),Oc(g))}return b}if(e<=f)return a[e]}
function ef(a,b,c){var d=a.F,e=I(d);Xd(e);ff(d,e,b,c);return a}
function ff(a,b,c,d){var e=b&512?0:-1,f=c+e,g=a.length-1;if(f>=g&&b&256)return a[g][c]=d,b;if(f<=g)return a[f]=d,b&256&&(a=a[g],c in a&&delete a[c]),b;d!==void 0&&(g=b>>15&1023||536870912,c>=g?d!=null&&(f={},a[g+e]=(f[c]=d,f),b|=256,Ld(a,b)):a[f]=d);return b}
function gf(a){return hf(a,jf,11,!1)!==void 0}
function kf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function lf(a,b,c){var d=a.F,e=I(d);Xd(e);if(b==null)return ff(d,e,3),a;if(!Array.isArray(b))throw Cd();var f=I(b),g=f,h=kf(f),k=h||Object.isFrozen(b);h||(f=0);k||(b=Pd(b),g=0,f=mf(f,e),f=nf(f,e,!0),k=!1);f|=21;h=4&f?4096&f?4096:8192&f?8192:0:void 0;h=h!=null?h:0;for(var l=0;l<b.length;l++){var m=b[l],n=c(m,h);Object.is(m,n)||(k&&(b=Pd(b),g=0,f=mf(f,e),f=nf(f,e,!0),k=!1),b[l]=n)}f!==g&&(k&&(b=Pd(b),f=mf(f,e),f=nf(f,e,!0)),Ld(b,f));ff(d,e,3,b);return a}
function of(a,b,c,d){a=a.F;var e=I(a);Xd(e);if(d==null){var f=pf(a);if(qf(f,a,e,c)===b)f.set(c,0);else return}else{c.includes(b);f=pf(a);var g=qf(f,a,e,c);g!==b&&(g&&(e=ff(a,e,g)),f.set(c,b))}ff(a,e,b,d)}
function pf(a){if(Dd){var b;return(b=a[Id])!=null?b:a[Id]=new Map}if(Id in a)return a[Id];b=new Map;Object.defineProperty(a,Id,{value:b});return b}
function qf(a,b,c,d){var e=a.get(d);if(e!=null)return e;for(var f=e=0;f<d.length;f++){var g=d[f];df(b,c,g)!=null&&(e!==0&&(c=ff(b,c,e)),e=g)}a.set(d,e);return e}
function hf(a,b,c,d){a=a.F;var e=I(a);d=df(a,e,c,d);b=Se(d,b,e);b!==d&&b!=null&&ff(a,e,c,b);return b}
function rf(a,b,c,d){b=hf(a,b,c,d===void 0?!1:d);if(b==null)return b;a=a.F;d=I(a);if(!(d&2)){var e=bf(b);e!==b&&(b=e,ff(a,d,c,b))}return b}
function uc(a,b,c){var d=void 0===Zd?2:4;var e=I(a.F),f=e,g=!(2&e);a=a.F;var h=!!(2&f);e=h?1:d;g&&(g=!h);d=df(a,f,c);d=Array.isArray(d)?d:Vd;var k=I(d);h=!!(4&k);if(!h){var l=k;l===0&&(l=mf(l,f));k=d;l|=1;var m=f,n=!!(2&l);n&&(m|=2);for(var p=!n,t=!0,u=0,x=0;u<k.length;u++){var z=Se(k[u],b,m);if(z instanceof b){if(!n){var H=!!(I(z.F)&2);p&&(p=!H);t&&(t=H)}k[x++]=z}}x<u&&(k.length=x);l|=4;l=t?l|16:l&-17;l=p?l|8:l&-9;Ld(k,l);n&&Object.freeze(k);k=l}if(g&&!(8&k||!d.length&&(e===1||e===4&&32&k))){kf(k)&&
(d=Pd(d),k=mf(k,f),f=ff(a,f,c,d));b=d;g=k;for(k=0;k<b.length;k++)l=b[k],m=bf(l),l!==m&&(b[k]=m);g|=8;g=b.length?g&-17:g|16;Ld(b,g);k=g}e===1||e===4&&32&k?kf(k)||(f=k,c=!!(32&k),k|=!d.length||16&k&&(!h||c)?2:2048,k!==f&&Ld(d,k),Object.freeze(d)):(e===2&&kf(k)&&(d=Pd(d),k=mf(k,f),k=nf(k,f,!1),Ld(d,k),f=ff(a,f,c,d)),kf(k)||(c=k,k=nf(k,f,!1),k!==c&&Ld(d,k)));return d}
function sf(a,b,c,d){d!=null?Re(d,b):d=void 0;return ef(a,c,d)}
function tf(a,b,c,d){var e=a.F,f=I(e);Xd(f);if(d==null)return ff(e,f,c),a;if(!Array.isArray(d))throw Cd();for(var g=I(d),h=g,k=kf(g),l=k||Object.isFrozen(d),m=!0,n=!0,p=0;p<d.length;p++){var t=d[p];Re(t,b);k||(t=!!(I(t.F)&2),m&&(m=!t),n&&(n=t))}k||(g=m?13:5,g=n?g|16:g&-17);l&&g===h||(d=Pd(d),h=0,g=mf(g,f),g=nf(g,f,!0));g!==h&&Ld(d,g);ff(e,f,c,d);return a}
function mf(a,b){a=(2&b?a|2:a&-3)|32;return a&=-2049}
function nf(a,b,c){32&b&&c||(a&=-33);return a}
function uf(a){a=cf(a,1);var b=b===void 0?!1:b;var c=typeof a;b=a==null?a:c==="bigint"?String(we(64,a)):De(a)?c==="string"?Ie(a):b?Je(a):Le(a):void 0;return b}
function vf(a,b){a=cf(a,b);return a==null||typeof a==="string"?a:void 0}
function wf(a){a=cf(a,1);return a==null?a:ye(a)?a|0:void 0}
function wc(a,b,c){c=c===void 0?0:c;var d;return(d=Ge(cf(a,b)))!=null?d:c}
function xf(a,b){var c=c===void 0?"":c;var d;return(d=vf(a,b))!=null?d:c}
function yf(a){var b=0;b=b===void 0?0:b;var c;return(c=wf(a))!=null?c:b}
function zf(a,b,c){return ef(a,b,Qe(c))}
function Af(a,b,c){c=Qe(c);a=a.F;var d=I(a);Xd(d);ff(a,d,b,c===""?void 0:c)}
function Bf(a,b,c){if(c!=null){if(!ye(c))throw Cd("enum");c|=0}return ef(a,b,c)}
;function Cf(a){return a}
function Df(a){return a}
function Ef(a,b,c,d){return Ff(a,b,c,d,Gf,Hf)}
function If(a,b,c,d){return Ff(a,b,c,d,Jf,Kf)}
function Ff(a,b,c,d,e,f){if(!c.length&&!d)return 0;for(var g=0,h=0,k=0,l=0,m=0,n=c.length-1;n>=0;n--){var p=c[n];d&&n===c.length-1&&p===d||(l++,p!=null&&k++)}if(d)for(var t in d)n=+t,isNaN(n)||(m+=Lf(n),h++,n>g&&(g=n));l=e(l,k)+f(h,g,m);t=k;n=h;p=g;for(var u=m,x=c.length-1;x>=0;x--){var z=c[x];if(!(z==null||d&&x===c.length-1&&z===d)){z=x-b;var H=e(z,t)+f(n,p,u);H<l&&(a=1+z,l=H);n++;t--;u+=Lf(z);p=Math.max(p,z)}}b=e(0,0)+f(n,p,u);b<l&&(a=0,l=b);if(d){n=h;p=g;u=m;t=k;for(var K in d)d=+K,isNaN(d)||d>=
1024||(n--,t++,u-=K.length,g=e(d,t)+f(n,p,u),g<l&&(a=1+d,l=g))}return a}
function Kf(a,b,c){return c+a*3+(a>1?a-1:0)}
function Jf(a,b){return(a>1?a-1:0)+(a-b)*4}
function Hf(a,b){return a==0?0:9*Math.max(1<<32-Math.clz32(a+a/2-1),4)<=b?a==0?0:a<4?100+(a-1)*16:a<6?148+(a-4)*16:a<12?244+(a-6)*16:a<22?436+(a-12)*19:a<44?820+(a-22)*17:52+32*a:40+4*b}
function Gf(a){return 40+4*a}
function Lf(a){return a>=100?a>=1E4?Math.ceil(Math.log10(1+a)):a<1E3?3:4:a<10?1:2}
;var Mf;function Nf(a){return a}
var Of;function L(a,b,c){this.F=J(a,b,c)}
r=L.prototype;r.toJSON=function(){var a=!Of;try{return a&&(Of=Ze),Pf(this)}finally{a&&(Of=void 0)}};
r.serialize=function(a){try{return Of=Nf,a&&(Mf=a===Df||a!==Cf&&a!==Ef&&a!==If?Df:a),JSON.stringify(Pf(this),Te)}finally{a&&(Mf=void 0),Of=void 0}};
function Qf(a,b){if(b==null||b=="")return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error("dnarr");Kd(b,32);return new a(b)}
r.clone=function(){var a=this.F,b=I(a);return new this.constructor(af(a,b,!1))};
r.Tc=Qd;r.toString=function(){try{return Of=Nf,Pf(this).toString()}finally{Of=void 0}};
function Pf(a){var b=a.F,c=Of(b);b=c!==b;var d=I(b?a.F:c);if(a=c.length){var e=c[a-1],f=Td(e);f?a--:e=void 0;var g=d&512?0:-1,h=a-g;d=!!Mf&&!(d&512);var k,l=(k=Mf)!=null?k:Df;k=d?l(h,g,c,e):h;d=(h=d&&h!==k)?Array.prototype.slice.call(c,0,a):c;if(f||h){b:{var m=d;var n=e;var p;f=!1;if(h)for(l=Math.max(0,k+g);l<m.length;l++){var t=m[l],u=l-g;t==null||Ud(t)||Sd(t)&&t.size===0||(f=m[l]=void 0,((f=p)!=null?f:p={})[u]=t,f=!0)}if(n)for(var x in n)if(l=+x,isNaN(l))l=void 0,((l=p)!=null?l:p={})[x]=n[x];else if(t=
n[x],Array.isArray(t)&&(Ud(t)||Sd(t)&&t.size===0)&&(t=null),t==null&&(f=!0),h&&l<k){f=!0;t=l+g;for(u=m.length;u<=t;u++)m.push(void 0);m[t]=n[l]}else t!=null&&(l=void 0,((l=p)!=null?l:p={})[x]=t);f||(p=n);if(p)for(var z in p){n=p;break b}n=null}m=n==null?e!=null:n!==e}h&&(a=d.length);for(var H;a>0;a--){p=d[a-1];if(!(p==null||Ud(p)||Sd(p)&&p.size===0))break;H=!0}if(d!==c||m||H){if(!h&&!b)d=Array.prototype.slice.call(d,0,a);else if(H||m||n)d.length=a;n&&d.push(n)}c=d}return c}
;function Rf(a){return function(b){return Qf(a,b)}}
;function Sf(a){this.F=J(a)}
w(Sf,L);function Tf(a,b){return lf(a,b,Ee)}
;function Uf(a){this.F=J(a)}
w(Uf,L);var Vf=[1,2,3];function Wf(a){this.F=J(a)}
w(Wf,L);var Xf=[1,2,3];function Yf(a){this.F=J(a)}
w(Yf,L);function Zf(a){this.F=J(a)}
w(Zf,L);function $f(a){this.F=J(a)}
w($f,L);function ag(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.indexOf("blob:")===0&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();a.indexOf("//")==0&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");c!=-1&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if(c!=="http"&&c!=="https"&&c!=="chrome-extension"&&
c!=="moz-extension"&&c!=="file"&&c!=="android-app"&&c!=="chrome-search"&&c!=="chrome-untrusted"&&c!=="chrome"&&c!=="app"&&c!=="devtools")throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(d!=-1){var e=b.substring(d+1);b=b.substring(0,d);if(c==="http"&&e!=="80"||c==="https"&&e!=="443")a=":"+e}return c+"://"+b+a}
;function bg(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var p=g,t=0;t<64;t+=4)p[t/4]=n[t]<<24|n[t+1]<<16|n[t+2]<<8|n[t+3];for(t=16;t<80;t++)n=p[t-3]^p[t-8]^p[t-14]^p[t-16],p[t]=(n<<1|n>>>31)&4294967295;n=e[0];var u=e[1],x=e[2],z=e[3],H=e[4];for(t=0;t<80;t++){if(t<40)if(t<20){var K=z^u&(x^z);var da=1518500249}else K=u^x^z,da=1859775393;else t<60?(K=u&x|z&(u|x),da=2400959708):(K=u^x^z,da=3395469782);K=((n<<5|n>>>27)&4294967295)+K+H+da+p[t]&4294967295;H=z;z=x;x=(u<<30|u>>>2)&4294967295;u=n;n=K}e[0]=e[0]+n&4294967295;e[1]=e[1]+u&4294967295;
e[2]=e[2]+x&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+H&4294967295}
function c(n,p){if(typeof n==="string"){n=unescape(encodeURIComponent(n));for(var t=[],u=0,x=n.length;u<x;++u)t.push(n.charCodeAt(u));n=t}p||(p=n.length);t=0;if(l==0)for(;t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64;for(;t<p;)if(f[l++]=n[t++],m++,l==64)for(l=0,b(f);t+64<p;)b(n.slice(t,t+64)),t+=64,m+=64}
function d(){var n=[],p=m*8;l<56?c(h,56-l):c(h,64-(l-56));for(var t=63;t>=56;t--)f[t]=p&255,p>>>=8;b(f);for(t=p=0;t<5;t++)for(var u=24;u>=0;u-=8)n[p++]=e[t]>>u&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;k<64;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,le:function(){for(var n=d(),p="",t=0;t<n.length;t++)p+="0123456789ABCDEF".charAt(Math.floor(n[t]/16))+"0123456789ABCDEF".charAt(n[t]%16);return p}}}
;function cg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,dg(ag(d),a,c||null)].join(" "):null}
function dg(a,b,c){var d=[],e=[];if((Array.isArray(c)?2:1)==1)return e=[b,a],Sb(d,function(h){e.push(h)}),eg(e.join(" "));
var f=[],g=[];Sb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=f.length==0?[c,b,a]:[f.join(":"),c,b,a];Sb(d,function(h){e.push(h)});
a=eg(e.join(" "));a=[c,a];g.length==0||a.push(g.join(""));return a.join("_")}
function eg(a){var b=bg();b.update(a);return b.le().toLowerCase()}
;function fg(a){this.h=a||{cookie:""}}
r=fg.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{Ub:60});if(this.get("TESTCOOKIESENABLED")!=="1")return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if(typeof c==="object"){var e=c.cf;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ub}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');h===void 0&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=h<0?"":h==0?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+h*1E3)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(e!=null?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=ib(d[e]);if(f.lastIndexOf(c,0)==0)return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=this.get(a)!==void 0;this.set(a,"",{Ub:0,path:b,domain:c});return d};
r.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=ib(a[f]),d=e.indexOf("="),d==-1?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;a>=0;a--)this.remove(b[a])};
var gg=new fg(typeof document=="undefined"?null:document);function hg(){var a=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__1PSAPISID||C.__OVERRIDE_SID;if(a)return!0;typeof document!=="undefined"&&(a=new fg(document),a=a.get("SAPISID")||a.get("APISID")||a.get("__Secure-3PAPISID")||a.get("__Secure-1PAPISID"));return!!a}
function ig(a,b,c,d){(a=C[a])||typeof document==="undefined"||(a=(new fg(document)).get(b));return a?cg(a,c,d):null}
function jg(a){var b=ag(String(C.location.href)),c=[];if(hg()){b=b.indexOf("https:")==0||b.indexOf("chrome-extension:")==0||b.indexOf("chrome-untrusted://new-tab-page")==0||b.indexOf("moz-extension:")==0;var d=b?C.__SAPISID:C.__APISID;d||typeof document==="undefined"||(d=new fg(document),d=d.get(b?"SAPISID":"APISID")||d.get("__Secure-3PAPISID"));(d=d?cg(d,b?"SAPISIDHASH":"APISIDHASH",a):null)&&c.push(d);b&&((b=ig("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&c.push(b),(a=ig("__3PSAPISID",
"__Secure-3PAPISID","SAPISID3PHASH",a))&&c.push(a))}return c.length==0?null:c.join(" ")}
;function kg(){}
kg.prototype.compress=function(a){var b,c,d,e;return A(function(f){switch(f.h){case 1:return b=new CompressionStream("gzip"),c=(new Response(b.readable)).arrayBuffer(),d=b.writable.getWriter(),f.yield(d.write((new TextEncoder).encode(a)),2);case 2:return f.yield(d.close(),3);case 3:return e=Uint8Array,f.yield(c,4);case 4:return f.return(new e(f.i))}})};
kg.prototype.isSupported=function(a){return a<1024?!1:typeof CompressionStream!=="undefined"};function lg(a){this.F=J(a)}
w(lg,L);function mg(a,b){this.intervalMs=a;this.callback=b;this.enabled=!1;this.h=function(){return ab()};
this.i=this.h()}
mg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
mg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.i=this.h())};
mg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
mg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.h()-this.i,0);b<this.intervalMs*.8?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),this.callback(),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function ng(a){this.F=J(a)}
w(ng,L);function og(a){this.F=J(a)}
w(og,L);function pg(a,b){this.x=a!==void 0?a:0;this.y=b!==void 0?b:0}
r=pg.prototype;r.clone=function(){return new pg(this.x,this.y)};
r.equals=function(a){return a instanceof pg&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
r.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
r.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
r.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
r.scale=function(a,b){this.x*=a;this.y*=typeof b==="number"?b:a;return this};function qg(a,b){this.width=a;this.height=b}
r=qg.prototype;r.clone=function(){return new qg(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
r.scale=function(a,b){this.width*=a;this.height*=typeof b==="number"?b:a;return this};function rg(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function sg(a){var b=tg,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ug(a){for(var b in a)return!1;return!0}
function vg(a,b){if(a!==null&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function wg(a){return a!==null&&"privembed"in a?a.privembed:!1}
function xg(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function yg(a){var b={},c;for(c in a)b[c]=a[c];return b}
function zg(a){if(!a||typeof a!=="object")return a;if(typeof a.clone==="function")return a.clone();if(typeof Map!=="undefined"&&a instanceof Map)return new Map(a);if(typeof Set!=="undefined"&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:typeof ArrayBuffer!=="function"||typeof ArrayBuffer.isView!=="function"||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=zg(a[c]);return b}
var Ag="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Bg(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<Ag.length;f++)c=Ag[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Cg(a,b){this.h=a===Dg&&b||""}
Cg.prototype.toString=function(){return this.h};
var Dg={};new Cg(Dg,"");"ARTICLE SECTION NAV ASIDE H1 H2 H3 H4 H5 H6 HEADER FOOTER ADDRESS P HR PRE BLOCKQUOTE OL UL LH LI DL DT DD FIGURE FIGCAPTION MAIN DIV EM STRONG SMALL S CITE Q DFN ABBR RUBY RB RT RTC RP DATA TIME CODE VAR SAMP KBD SUB SUP I B U MARK BDI BDO SPAN BR WBR NOBR INS DEL PICTURE PARAM TRACK MAP TABLE CAPTION COLGROUP COL TBODY THEAD TFOOT TR TD TH SELECT DATALIST OPTGROUP OPTION OUTPUT PROGRESS METER FIELDSET LEGEND DETAILS SUMMARY MENU DIALOG SLOT CANVAS FONT CENTER ACRONYM BASEFONT BIG DIR HGROUP STRIKE TT".split(" ").concat(["BUTTON",
"INPUT"]);function Eg(a){var b=document;return typeof a==="string"?b.getElementById(a):a}
function Fg(a){var b=document;a=String(a);b.contentType==="application/xhtml+xml"&&(a=a.toLowerCase());return b.createElement(a)}
function Gg(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Hg(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ig(a){this.F=J(a)}
w(Ig,L);Ig.prototype.nc=function(){return yf(this)};
function Jg(a,b){return ef(a,2,Be(b))}
;function Kg(a){this.F=J(a)}
w(Kg,L);function Lg(a){this.F=J(a)}
w(Lg,L);function Mg(a,b){tf(a,Kg,1,b)}
;function jf(a){this.F=J(a)}
w(jf,L);var Ng=["platform","platformVersion","architecture","model","uaFullVersion"],Og=new Lg,Pg=null;function Qg(a,b){b=b===void 0?Ng:b;if(!Pg){var c;a=(c=a.navigator)==null?void 0:c.userAgentData;if(!a||typeof a.getHighEntropyValues!=="function"||a.brands&&typeof a.brands.map!=="function")return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(e){var f=new Kg;f=zf(f,1,e.brand);return zf(f,2,e.version)});
Mg(ef(Og,2,Be(a.mobile)),c);Pg=a.getHighEntropyValues(b)}var d=new Set(b);return Pg.then(function(e){var f=Og.clone();d.has("platform")&&zf(f,3,e.platform);d.has("platformVersion")&&zf(f,4,e.platformVersion);d.has("architecture")&&zf(f,5,e.architecture);d.has("model")&&zf(f,6,e.model);d.has("uaFullVersion")&&zf(f,7,e.uaFullVersion);return f}).catch(function(){return Og.clone()})}
;function Rg(a){this.F=J(a)}
w(Rg,L);function Sg(a){this.F=J(a,4)}
w(Sg,L);function Tg(a){this.F=J(a,36)}
w(Tg,L);function Ug(a){this.F=J(a,19)}
w(Ug,L);Ug.prototype.Xb=function(a){return Bf(this,2,a)};function Vg(a,b){this.Wa=b=b===void 0?!1:b;this.i=this.locale=null;this.h=new Ug;Number.isInteger(a)&&this.h.Xb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Wg(this,new Rg)}
Vg.prototype.Xb=function(a){this.h.Xb(a);return this};
function Wg(a,b){sf(a.h,Rg,1,b);yf(b)||Bf(b,1,1);a.Wa||(b=Xg(a),xf(b,5)||zf(b,5,a.locale));a.i&&(b=Xg(a),rf(b,Lg,9)||sf(b,Lg,9,a.i))}
function Yg(a,b){gf(Zg(a))&&(a=$g(a),Bf(a,1,b))}
function Zg(a){return rf(a.h,Rg,1)}
function ah(a){var b=b===void 0?Ng:b;var c=a.Wa?void 0:window;c?Qg(c,b).then(function(d){a.i=d;d=Xg(a);sf(d,Lg,9,a.i);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function Xg(a){a=Zg(a);var b=rf(a,jf,11);b||(b=new jf,sf(a,jf,11,b));return b}
function $g(a){a=Xg(a);var b=rf(a,Ig,10);b||(b=new Ig,Jg(b,!1),sf(a,Ig,10,b));return b}
function bh(a,b,c,d,e,f,g){c=c===void 0?0:c;d=d===void 0?0:d;e=e===void 0?null:e;f=f===void 0?0:f;g=g===void 0?0:g;if(gf(Zg(a))){var h=Xg(a),k=new Ig;var l=$g(a);var m;l=(m=wf(l))!=null?m:void 0;k=Bf(k,1,l);m=$g(a);m=cf(m,2);m=m==null||typeof m==="boolean"?m:typeof m==="number"?!!m:void 0;k=Jg(k,m!=null?m:void 0);m=k.F;l=I(m);k=l&2?k:new k.constructor(af(m,l,!0));sf(h,Ig,10,k)}gf(Zg(a))&&d>0&&(h=$g(a),ef(h,3,Fe(d)));gf(Zg(a))&&f>0&&(d=$g(a),ef(d,4,Fe(f)));gf(Zg(a))&&g>0&&(f=$g(a),ef(f,5,Fe(g)));a=
a.h.clone();g=Date.now().toString();a=ef(a,4,Me(g));b=b.slice();b=tf(a,Tg,3,b);e&&(a=new ng,e=ef(a,13,Fe(e)),a=new og,e=sf(a,ng,2,e),a=new Sg,e=sf(a,og,1,e),e=Bf(e,2,9),sf(b,Sg,18,e));c&&ef(b,14,Me(c));return b}
;var ch=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function dh(a){this.h=this.i=this.j=a}
dh.prototype.reset=function(){this.h=this.i=this.j};
dh.prototype.getValue=function(){return this.i};function eh(a){this.F=J(a,8)}
w(eh,L);var fh=Rf(eh);function gh(a){this.F=J(a)}
w(gh,L);var hh=new function(){this.ctor=gh;this.isRepeated=0;this.h=rf;this.defaultValue=void 0};function ih(a){F.call(this);var b=this;this.componentId="";this.h=[];this.Pa="";this.pageId=null;this.Qa=this.ha=-1;this.G=this.experimentIds=null;this.Y=this.Z=this.D=this.o=0;this.sb=1;this.timeoutMillis=0;this.pa=!1;this.logSource=a.logSource;this.hb=a.hb||function(){};
this.j=new Vg(a.logSource,a.Wa);this.network=a.network||null;this.nb=a.nb||null;this.bufferSize=1E3;this.P=a.Af||null;this.sessionIndex=a.sessionIndex||null;this.Pb=a.Pb||!1;this.logger=null;this.withCredentials=!a.sd;this.Wa=a.Wa||!1;this.U=!this.Wa&&!!window&&!!window.navigator&&window.navigator.sendBeacon!==void 0;this.Fa=typeof URLSearchParams!=="undefined"&&!!(new URL(jh())).searchParams&&!!(new URL(jh())).searchParams.set;var c=Bf(new Rg,1,1);Wg(this.j,c);this.u=new dh(1E4);a=mh(this,a.nd);
this.i=new mg(this.u.getValue(),a);this.xa=new mg(6E5,a);this.Pb||this.xa.start();this.Wa||(document.addEventListener("visibilitychange",function(){document.visibilityState==="hidden"&&b.Lc()}),document.addEventListener("pagehide",this.Lc.bind(this)))}
w(ih,F);function mh(a,b){return a.Fa?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
r=ih.prototype;r.ba=function(){this.Lc();this.i.stop();this.xa.stop();F.prototype.ba.call(this)};
function nh(a){a.P||(a.P=jh());try{return(new URL(a.P)).toString()}catch(b){return(new URL(a.P,window.location.origin)).toString()}}
r.log=function(a){if(this.Fa){a=a.clone();var b=this.sb++;a=ef(a,21,Me(b));this.componentId&&zf(a,26,this.componentId);b=a;if(uf(b)==null){var c=Date.now();c=Number.isFinite(c)?c.toString():"0";ef(b,1,Me(c))}Oe(cf(b,15))==null&&ef(b,15,Me((new Date).getTimezoneOffset()*60));this.experimentIds&&(c=this.experimentIds.clone(),sf(b,lg,16,c));b=this.h.length-this.bufferSize+1;b>0&&(this.h.splice(0,b),this.o+=b);this.h.push(a);this.Pb||this.i.enabled||this.i.start()}};
r.flush=function(a,b){var c=this;if(this.h.length===0)a&&a();else if(this.pa&&this.U)Yg(this.j,3),oh(this);else{var d=Date.now();if(this.Qa>d&&this.ha<d)b&&b("throttled");else{this.network&&(typeof this.network.nc==="function"?Yg(this.j,this.network.nc()):Yg(this.j,0));var e=bh(this.j,this.h,this.o,this.D,this.nb,this.Z,this.Y),f=this.hb();if(f&&this.Pa===f)b&&b("stale-auth-token");else{this.h=[];this.i.enabled&&this.i.stop();this.o=0;d=e.serialize();var g;this.G&&this.G.isSupported(d.length)&&(g=
this.G.compress(d));var h=ph(this,d,f),k=function(n){c.u.reset();c.i.setInterval(c.u.getValue());if(n){var p=null;try{var t=JSON.stringify(JSON.parse(n.replace(")]}'\n","")));p=fh(t)}catch(z){}if(p){n=Number;var u="-1";u=u===void 0?"0":u;var x;t=(x=uf(p))!=null?x:u;x=n(t);x>0&&(c.ha=Date.now(),c.Qa=c.ha+x);p=hh.ctor?hh.h(p,hh.ctor,175237375,!0):hh.h(p,175237375,null,!0);if(p=p===null?void 0:p)p=wc(p,1,-1),p!==-1&&(c.u=new dh(p<1?1:p),c.i.setInterval(c.u.getValue()))}}a&&a();c.D=0},l=function(n,p){var t=
uc(e,Tg,3);
var u;var x=(u=Oe(cf(e,14)))!=null?u:void 0;u=c.u;u.h=Math.min(3E5,u.h*2);u.i=Math.min(3E5,u.h+Math.round(.1*(Math.random()-.5)*2*u.h));c.i.setInterval(c.u.getValue());n===401&&f&&(c.Pa=f);x&&(c.o+=x);p===void 0&&(p=c.isRetryable(n));p&&(c.h=t.concat(c.h),c.Pb||c.i.enabled||c.i.start());b&&b("net-send-failed",n);++c.D},m=function(){c.network&&c.network.send(h,k,l)};
g?g.then(function(n){h.Cc["Content-Encoding"]="gzip";h.Cc["Content-Type"]="application/binary";h.body=n;h.ee=2;m()},function(){m()}):m()}}}};
function ph(a,b,c){c=c===void 0?a.hb():c;var d={},e=new URL(nh(a));c&&(d.Authorization=c);a.sessionIndex&&(d["X-Goog-AuthUser"]=a.sessionIndex,e.searchParams.set("authuser",a.sessionIndex));a.pageId&&(Object.defineProperty(d,"X-Goog-PageId",{value:a.pageId}),e.searchParams.set("pageId",a.pageId));return{url:e.toString(),body:b,ee:1,Cc:d,requestType:"POST",withCredentials:a.withCredentials,timeoutMillis:a.timeoutMillis}}
r.Lc=function(){var a=this.j;gf(Zg(a))&&Jg($g(a),!0);this.flush();a=this.j;gf(Zg(a))&&Jg($g(a),!1)};
function oh(a){qh(a,function(b,c){b=new URL(b);b.searchParams.set("format","json");var d=!1;try{d=window.navigator.sendBeacon(b.toString(),c.serialize())}catch(e){}d||(a.U=!1);return d})}
function qh(a,b){if(a.h.length!==0){var c=new URL(nh(a));c.searchParams.delete("format");var d=a.hb();d&&c.searchParams.set("auth",d);c.searchParams.set("authuser",a.sessionIndex||"0");for(d=0;d<10&&a.h.length;++d){var e=a.h.slice(0,32),f=bh(a.j,e,a.o,a.D,a.nb,a.Z,a.Y);if(!b(c.toString(),f)){++a.D;break}a.o=0;a.D=0;a.Z=0;a.Y=0;a.h=a.h.slice(e.length)}a.i.enabled&&a.i.stop()}}
r.isRetryable=function(a){return 500<=a&&a<600||a===401||a===0};
function jh(){return"https://play.google.com/log?format=json&hasfast=true"}
;function rh(){this.Yd=typeof AbortController!=="undefined"}
rh.prototype.send=function(a,b,c){var d=this,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:return f=(e=d.Yd?new AbortController:void 0)?setTimeout(function(){e.abort()},a.timeoutMillis):void 0,za(u,2,3),g=Object.assign({},{method:a.requestType,
headers:Object.assign({},a.Cc)},a.body&&{body:a.body},a.withCredentials&&{credentials:"include"},{signal:a.timeoutMillis&&e?e.signal:null}),u.yield(fetch(a.url,g),5);case 5:h=u.i;if(h.status!==200){(k=c)==null||k(h.status);u.A(3);break}if((l=b)==null){u.A(7);break}return u.yield(h.text(),8);case 8:l(u.i);case 7:case 3:u.P=[u.j];u.M=0;u.o=0;clearTimeout(f);Ca(u);break;case 2:m=Ba(u);switch((n=m)==null?void 0:n.name){case "AbortError":(p=c)==null||p(408);break;default:(t=c)==null||t(400)}u.A(3)}})};
rh.prototype.nc=function(){return 4};function sh(a,b){F.call(this);this.logSource=a;this.sessionIndex=b;this.Ua="https://play.google.com/log?format=json&hasfast=true";this.i=null;this.o=!1;this.network=null;this.componentId="";this.h=this.nb=null;this.j=!1;this.pageId=null}
w(sh,F);function th(a,b){a.i=b;return a}
function uh(a,b){a.network=b;return a}
function vh(a,b){a.h=b}
sh.prototype.sd=function(){this.u=!0;return this};
function wh(a){a.network||(a.network=new rh);var b=new ih({logSource:a.logSource,hb:a.hb?a.hb:jg,sessionIndex:a.sessionIndex,Af:a.Ua,Wa:a.o,Pb:!1,sd:a.u,nd:a.nd,network:a.network});Bc(a,b);if(a.i){var c=a.i,d=Xg(b.j);zf(d,7,c)}b.G=new kg;a.componentId&&(b.componentId=a.componentId);a.nb&&(b.nb=a.nb);a.pageId&&(b.pageId=a.pageId);a.h&&((d=a.h)?(b.experimentIds||(b.experimentIds=new lg),c=b.experimentIds,d=d.serialize(),zf(c,4,d)):b.experimentIds&&ef(b.experimentIds,4));a.j&&(b.pa=b.U);ah(b.j);a.network.Xb&&
a.network.Xb(a.logSource);a.network.pf&&a.network.pf(b);return b}
;function xh(a,b,c,d,e,f,g){a=a===void 0?-1:a;b=b===void 0?"":b;c=c===void 0?"":c;d=d===void 0?!1:d;e=e===void 0?"":e;F.call(this);this.logSource=a;this.componentId=b;f?b=f:(a=new sh(a,"0"),a.componentId=b,Bc(this,a),c!==""&&(a.Ua=c),d&&(a.o=!0),e&&th(a,e),g&&uh(a,g),b=wh(a));this.h=b}
w(xh,F);
xh.prototype.flush=function(a){var b=a||[];if(b.length){a=new $f;for(var c=[],d=0;d<b.length;d++){var e=b[d],f=new Zf;f=zf(f,1,e.i);var g=yh(e);f=lf(f,g,Pe);g=[];var h=[];for(var k=y(e.h.keys()),l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];var m=e.o;for(var n=e.Mc(l)||[],p=[],t=0;t<n.length;t++){var u=n[t],x=u&&u.h;u=new Wf;switch(m){case 3:x=Number(x);Number.isFinite(x)&&of(u,1,Xf,Me(x));break;case 2:x=Number(x);if(x!=null&&typeof x!=="number")throw Error("Value of float/double field must be a number, found "+typeof x+
": "+x);of(u,2,Xf,x)}p.push(u)}m=p;for(n=0;n<m.length;n++){p=m[n];t=new Yf;p=sf(t,Wf,2,p);t=l;u=[];x=zh(e);for(var z=0;z<x.length;z++){var H=x[z],K=t[z],da=new Uf;switch(H){case 3:of(da,1,Vf,Qe(String(K)));break;case 2:H=Number(K);Number.isFinite(H)&&of(da,2,Vf,Fe(H));break;case 1:of(da,3,Vf,Be(K==="true"))}u.push(da)}tf(p,Uf,1,u);g.push(p)}}tf(f,Yf,4,g);c.push(f);e.clear()}tf(a,Zf,1,c);b=this.h;if(a instanceof Tg)b.log(a);else try{var ea=new Tg,Oa=a.serialize();var Ob=zf(ea,8,Oa);b.log(Ob)}catch(ka){}this.h.flush()}};function Ah(a){this.h=a}
;function Bh(a,b,c){this.i=a;this.o=b;this.fields=c||[];this.h=new Map}
function zh(a){return a.fields.map(function(b){return b.fieldType})}
function yh(a){return a.fields.map(function(b){return b.fieldName})}
r=Bh.prototype;r.Zd=function(a){var b=B.apply(1,arguments),c=this.Mc(b);c?c.push(new Ah(a)):this.Kd(a,b)};
r.Kd=function(a){var b=this.md(B.apply(1,arguments));this.h.set(b,[new Ah(a)])};
r.Mc=function(){var a=this.md(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
r.ye=function(){var a=this.Mc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
r.clear=function(){this.h.clear()};
r.md=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function Ch(a,b){Bh.call(this,a,3,b)}
w(Ch,Bh);Ch.prototype.j=function(a){var b=B.apply(1,arguments),c=0,d=this.ye(b);d&&(c=d.h);this.Kd(c+a,b)};function Dh(a,b){Bh.call(this,a,2,b)}
w(Dh,Bh);Dh.prototype.record=function(a){this.Zd(a,B.apply(1,arguments))};function Eh(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
Eh.prototype.stopPropagation=function(){this.j=!0};
Eh.prototype.preventDefault=function(){this.defaultPrevented=!0};function Fh(a,b){Eh.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
cb(Fh,Eh);
Fh.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;b=a.relatedTarget;b||(c=="mouseover"?b=a.fromElement:c=="mouseout"&&(b=a.toElement));this.relatedTarget=b;d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==
void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||(c=="keypress"?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType=a.pointerType;this.state=a.state;this.i=a;a.defaultPrevented&&Fh.Aa.preventDefault.call(this)};
Fh.prototype.stopPropagation=function(){Fh.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Fh.prototype.preventDefault=function(){Fh.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Gh="closure_listenable_"+(Math.random()*1E6|0);var Hh=0;function Ih(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.pc=e;this.key=++Hh;this.Wb=this.fc=!1}
function Jh(a){a.Wb=!0;a.listener=null;a.proxy=null;a.src=null;a.pc=null}
;function Kh(a){this.src=a;this.listeners={};this.h=0}
Kh.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Lh(a,b,d,e);g>-1?(b=a[g],c||(b.fc=!1)):(b=new Ih(b,this.src,f,!!d,e),b.fc=c,a.push(b));return b};
Kh.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Lh(e,b,c,d);return b>-1?(Jh(e[b]),Array.prototype.splice.call(e,b,1),e.length==0&&(delete this.listeners[a],this.h--),!0):!1};
function Mh(a,b){var c=b.type;c in a.listeners&&Xb(a.listeners[c],b)&&(Jh(b),a.listeners[c].length==0&&(delete a.listeners[c],a.h--))}
function Lh(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Wb&&f.listener==b&&f.capture==!!c&&f.pc==d)return e}return-1}
;var Nh="closure_lm_"+(Math.random()*1E6|0),Oh={},Ph=0;function Qh(a,b,c,d,e){if(d&&d.once)Rh(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Qh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?a.listen(b,c,Sa(d)?!!d.capture:!!d,e):Th(a,b,c,!1,d,e)}
function Th(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Sa(e)?!!e.capture:!!e,h=Uh(a);h||(a[Nh]=h=new Kh(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Vh();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)ch||(e=g),e===void 0&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Wh(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Ph++}}
function Vh(){function a(c){return b.call(a.src,a.listener,c)}
var b=Xh;return a}
function Rh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Rh(a,b[f],c,d,e);else c=Sh(c),a&&a[Gh]?Yh(a,b,c,Sa(d)?!!d.capture:!!d,e):Th(a,b,c,!0,d,e)}
function Zh(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Zh(a,b[f],c,d,e);else(d=Sa(d)?!!d.capture:!!d,c=Sh(c),a&&a[Gh])?a.i.remove(String(b),c,d,e):a&&(a=Uh(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Lh(b,c,d,e)),(c=a>-1?b[a]:null)&&$h(c))}
function $h(a){if(typeof a!=="number"&&a&&!a.Wb){var b=a.src;if(b&&b[Gh])Mh(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Wh(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Ph--;(c=Uh(b))?(Mh(c,a),c.h==0&&(c.src=null,b[Nh]=null)):Jh(a)}}}
function Wh(a){return a in Oh?Oh[a]:Oh[a]="on"+a}
function Xh(a,b){if(a.Wb)a=!0;else{b=new Fh(b,this);var c=a.listener,d=a.pc||a.src;a.fc&&$h(a);a=c.call(d,b)}return a}
function Uh(a){a=a[Nh];return a instanceof Kh?a:null}
var ai="__closure_events_fn_"+(Math.random()*1E9>>>0);function Sh(a){if(typeof a==="function")return a;a[ai]||(a[ai]=function(b){return a.handleEvent(b)});
return a[ai]}
;function bi(){F.call(this);this.i=new Kh(this);this.xa=this;this.Z=null}
cb(bi,F);bi.prototype[Gh]=!0;r=bi.prototype;r.addEventListener=function(a,b,c,d){Qh(this,a,b,c,d)};
r.removeEventListener=function(a,b,c,d){Zh(this,a,b,c,d)};
function ci(a,b){var c=a.Z;if(c){var d=[];for(var e=1;c;c=c.Z)d.push(c),++e}a=a.xa;c=b.type||b;typeof b==="string"?b=new Eh(b,a):b instanceof Eh?b.target=b.target||a:(e=b,b=new Eh(c,a),Bg(b,e));e=!0;var f;if(d)for(f=d.length-1;!b.j&&f>=0;f--){var g=b.h=d[f];e=di(g,c,!0,b)&&e}b.j||(g=b.h=a,e=di(g,c,!0,b)&&e,b.j||(e=di(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=di(g,c,!1,b)&&e}
r.ba=function(){bi.Aa.ba.call(this);this.removeAllListeners();this.Z=null};
r.listen=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Yh(a,b,c,d,e){a.i.add(String(b),c,!0,d,e)}
r.removeAllListeners=function(a){if(this.i){var b=this.i;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Jh(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function di(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Wb&&g.capture==c){var h=g.listener,k=g.pc||g.src;g.fc&&Mh(a.i,g);e=h.call(k,d)!==!1&&e}}return e&&!d.defaultPrevented}
;var ei=typeof AsyncContext!=="undefined"&&typeof AsyncContext.Snapshot==="function"?function(a){return a&&AsyncContext.Snapshot.wrap(a)}:function(a){return a};function fi(a,b){this.j=a;this.o=b;this.i=0;this.h=null}
fi.prototype.get=function(){if(this.i>0){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function gi(a,b){a.o(b);a.i<100&&(a.i++,b.next=a.h,a.h=b)}
;function hi(){this.i=this.h=null}
hi.prototype.add=function(a,b){var c=ii.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
hi.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var ii=new fi(function(){return new ji},function(a){return a.reset()});
function ji(){this.next=this.scope=this.h=null}
ji.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
ji.prototype.reset=function(){this.next=this.scope=this.h=null};var ki,li=!1,mi=new hi;function ni(a,b){ki||oi();li||(ki(),li=!0);mi.add(a,b)}
function oi(){var a=Promise.resolve(void 0);ki=function(){a.then(pi)}}
function pi(){for(var a;a=mi.remove();){try{a.h.call(a.scope)}catch(b){Oc(b)}gi(ii,a)}li=!1}
;function qi(){}
function ri(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function si(a){this.X=0;this.ab=void 0;this.vb=this.Sa=this.parent_=null;this.oc=this.Kc=!1;if(a!=qi)try{var b=this;a.call(void 0,function(c){ti(b,2,c)},function(c){ti(b,3,c)})}catch(c){ti(this,3,c)}}
function ui(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
ui.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var vi=new fi(function(){return new ui},function(a){a.reset()});
function wi(a,b,c){var d=vi.get();d.i=a;d.h=b;d.context=c;return d}
function xi(a){return new si(function(b,c){c(a)})}
si.prototype.then=function(a,b,c){return yi(this,ei(typeof a==="function"?a:null),ei(typeof b==="function"?b:null),c)};
si.prototype.$goog_Thenable=!0;function zi(a,b,c,d){Ai(a,wi(b||qi,c||null,d))}
r=si.prototype;r.finally=function(a){var b=this;a=ei(a);return new Promise(function(c,d){zi(b,function(e){a();c(e)},function(e){a();
d(e)})})};
r.Ec=function(a,b){return yi(this,null,ei(a),b)};
r.catch=si.prototype.Ec;r.cancel=function(a){if(this.X==0){var b=new Bi(a);ni(function(){Ci(this,b)},this)}};
function Ci(a,b){if(a.X==0)if(a.parent_){var c=a.parent_;if(c.Sa){for(var d=0,e=null,f=null,g=c.Sa;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&d>1)));g=g.next)e||(f=g);e&&(c.X==0&&d==1?Ci(c,b):(f?(d=f,d.next==c.vb&&(c.vb=d),d.next=d.next.next):Di(c),Ei(c,e,3,b)))}a.parent_=null}else ti(a,3,b)}
function Ai(a,b){a.Sa||a.X!=2&&a.X!=3||Fi(a);a.vb?a.vb.next=b:a.Sa=b;a.vb=b}
function yi(a,b,c,d){var e=wi(null,null,null);e.child=new si(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);k===void 0&&h instanceof Bi?g(h):f(k)}catch(l){g(l)}}:g});
e.child.parent_=a;Ai(a,e);return e.child}
r.yf=function(a){this.X=0;ti(this,2,a)};
r.zf=function(a){this.X=0;ti(this,3,a)};
function ti(a,b,c){if(a.X==0){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.X=1;a:{var d=c,e=a.yf,f=a.zf;if(d instanceof si){zi(d,e,f,a);var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Sa(d))try{var k=d.then;if(typeof k==="function"){Gi(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.ab=c,a.X=b,a.parent_=null,Fi(a),b!=3||c instanceof Bi||Hi(a,c))}}
function Gi(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Fi(a){a.Kc||(a.Kc=!0,ni(a.se,a))}
function Di(a){var b=null;a.Sa&&(b=a.Sa,a.Sa=b.next,b.next=null);a.Sa||(a.vb=null);return b}
r.se=function(){for(var a;a=Di(this);)Ei(this,a,this.X,this.ab);this.Kc=!1};
function Ei(a,b,c,d){if(c==3&&b.h&&!b.j)for(;a&&a.oc;a=a.parent_)a.oc=!1;if(b.child)b.child.parent_=null,Ii(b,c,d);else try{b.j?b.i.call(b.context):Ii(b,c,d)}catch(e){Ji.call(null,e)}gi(vi,b)}
function Ii(a,b,c){b==2?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Hi(a,b){a.oc=!0;ni(function(){a.oc&&Ji.call(null,b)})}
var Ji=Oc;function Bi(a){db.call(this,a)}
cb(Bi,db);Bi.prototype.name="cancel";function Ki(a,b){bi.call(this);this.j=a||1;this.h=b||C;this.o=Za(this.uf,this);this.u=ab()}
cb(Ki,bi);r=Ki.prototype;r.enabled=!1;r.Ea=null;r.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
r.uf=function(){if(this.enabled){var a=ab()-this.u;a>0&&a<this.j*.8?this.Ea=this.h.setTimeout(this.o,this.j-a):(this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null),ci(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
r.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.h.setTimeout(this.o,this.j),this.u=ab())};
r.stop=function(){this.enabled=!1;this.Ea&&(this.h.clearTimeout(this.Ea),this.Ea=null)};
r.ba=function(){Ki.Aa.ba.call(this);this.stop();delete this.h};function Li(a){F.call(this);this.G=a;this.j=0;this.o=100;this.u=!1;this.i=new Map;this.D=new Set;this.flushInterval=3E4;this.h=new Ki(this.flushInterval);this.h.listen("tick",this.Zb,!1,this);Bc(this,this.h)}
w(Li,F);r=Li.prototype;r.sendIsolatedPayload=function(a){this.u=a;this.o=1};
function Mi(a){a.h.enabled||a.h.start();a.j++;a.j>=a.o&&a.Zb()}
r.Zb=function(){var a=this.i.values();a=[].concat(ra(a)).filter(function(b){return b.h.size});
a.length&&this.G.flush(a,this.u);Ni(a);this.j=0;this.h.enabled&&this.h.stop()};
r.Lb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Ch(a,b))};
r.Hc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new Dh(a,b))};
function Oi(a,b){return a.D.has(b)?void 0:a.i.get(b)}
r.Jb=function(a){this.Xd(a,1,B.apply(1,arguments))};
r.Xd=function(a,b){var c=B.apply(2,arguments),d=Oi(this,a);d&&d instanceof Ch&&(d.j(b,c),Mi(this))};
r.record=function(a,b){var c=B.apply(2,arguments),d=Oi(this,a);d&&d instanceof Dh&&(d.record(b,c),Mi(this))};
function Ni(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function Pi(){}
Pi.prototype.serialize=function(a){var b=[];Qi(this,a,b);return b.join("")};
function Qi(a,b,c){if(b==null)c.push("null");else{if(typeof b=="object"){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Qi(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],typeof f!="function"&&(c.push(e),Ri(d,c),c.push(":"),Qi(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ri(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Si={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},Ti=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ri(a,b){b.push('"',a.replace(Ti,function(c){var d=Si[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),Si[c]=d);return d}),'"')}
;function Ui(){bi.call(this);this.headers=new Map;this.h=!1;this.J=null;this.o=this.Y="";this.j=this.U=this.D=this.P=!1;this.G=0;this.u=null;this.pa="";this.ha=!1}
cb(Ui,bi);var Vi=/^https?$/i,Wi=["POST","PUT"],Xi=[];function Yi(a,b,c,d,e,f,g){var h=new Ui;Xi.push(h);b&&h.listen("complete",b);Yh(h,"ready",h.he);f&&(h.G=Math.max(0,f));g&&(h.ha=g);h.send(a,c,d,e)}
r=Ui.prototype;r.he=function(){this.dispose();Xb(Xi,this)};
r.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.Y+"; newUri="+a);b=b?b.toUpperCase():"GET";this.Y=a;this.o="";this.P=!1;this.h=!0;this.J=new XMLHttpRequest;this.J.onreadystatechange=ei(Za(this.Dd,this));try{this.getStatus(),this.U=!0,this.J.open(b,String(a),!0),this.U=!1}catch(g){this.getStatus();Zi(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===Object.prototype)for(var e in d)c.set(e,d[e]);else if(typeof d.keys===
"function"&&typeof d.get==="function"){e=y(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(Rb(Wi,b)>=0)||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=y(c);for(d=b.next();!d.done;d=b.next())c=y(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.pa&&(this.J.responseType=this.pa);"withCredentials"in this.J&&this.J.withCredentials!==this.ha&&(this.J.withCredentials=this.ha);try{this.u&&(clearTimeout(this.u),this.u=null),this.G>0&&(this.getStatus(),this.u=setTimeout(this.xf.bind(this),this.G)),
this.getStatus(),this.D=!0,this.J.send(a),this.D=!1}catch(g){this.getStatus(),Zi(this,g)}};
r.xf=function(){typeof La!="undefined"&&this.J&&(this.o="Timed out after "+this.G+"ms, aborting",this.getStatus(),ci(this,"timeout"),this.abort(8))};
function Zi(a,b){a.h=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.o=b;$i(a);aj(a)}
function $i(a){a.P||(a.P=!0,ci(a,"complete"),ci(a,"error"))}
r.abort=function(){this.J&&this.h&&(this.getStatus(),this.h=!1,this.j=!0,this.J.abort(),this.j=!1,ci(this,"complete"),ci(this,"abort"),aj(this))};
r.ba=function(){this.J&&(this.h&&(this.h=!1,this.j=!0,this.J.abort(),this.j=!1),aj(this,!0));Ui.Aa.ba.call(this)};
r.Dd=function(){this.ea||(this.U||this.D||this.j?bj(this):this.Oe())};
r.Oe=function(){bj(this)};
function bj(a){if(a.h&&typeof La!="undefined")if(a.D&&(a.J?a.J.readyState:0)==4)setTimeout(a.Dd.bind(a),0);else if(ci(a,"readystatechange"),a.isComplete()){a.getStatus();a.h=!1;try{if(cj(a))ci(a,"complete"),ci(a,"success");else{try{var b=(a.J?a.J.readyState:0)>2?a.J.statusText:""}catch(c){b=""}a.o=b+" ["+a.getStatus()+"]";$i(a)}}finally{aj(a)}}}
function aj(a,b){if(a.J){a.u&&(clearTimeout(a.u),a.u=null);var c=a.J;a.J=null;b||ci(a,"ready");try{c.onreadystatechange=null}catch(d){}}}
r.isActive=function(){return!!this.J};
r.isComplete=function(){return(this.J?this.J.readyState:0)==4};
function cj(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=b===0)a=hc(1,String(a.Y)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!Vi.test(a?a.toLowerCase():"");c=b}return c}
r.getStatus=function(){try{return(this.J?this.J.readyState:0)>2?this.J.status:-1}catch(a){return-1}};
r.getLastError=function(){return typeof this.o==="string"?this.o:String(this.o)};function dj(){}
dj.prototype.send=function(a,b,c){b=b===void 0?function(){}:b;
c=c===void 0?function(){}:c;
Yi(a.url,function(d){d=d.target;if(cj(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Cc,a.timeoutMillis,a.withCredentials)};
dj.prototype.nc=function(){return 1};function ej(a,b){this.logger=a;this.event=b;this.startTime=fj()}
ej.prototype.done=function(){this.logger.Tb(this.event,fj()-this.startTime)};
function gj(){Dc.apply(this,arguments)}
w(gj,Dc);function hj(a,b){var c=fj();b=b();a.Tb("n",fj()-c);return b}
function ij(){gj.apply(this,arguments)}
w(ij,gj);r=ij.prototype;r.Qc=function(){};
r.Cb=function(){};
r.Tb=function(){};
r.Ha=function(){};
r.Bc=function(){};
r.Pd=function(){};
function jj(a){return{sf:new Gc(a),errorCount:new Kc(a),eventCount:new Ic(a),re:new Jc(a),ai:new Hc(a),ci:new Lc(a),vh:new Mc(a),bi:new Nc(a)}}
function kj(a,b,c,d,e){a=uh(th(new sh(1828,"0"),a),new dj);b.length&&vh(a,Tf(new Sf,b));e!==void 0&&(a.Ua=e);d&&(a.j=!0);var f=new xh(1828,"","",!1,"",wh(a));Bc(f,a);var g=new Li({flush:function(h){try{f.flush(h)}catch(k){c(k)}}});
g.addOnDisposeCallback(function(){setTimeout(function(){try{g.Zb()}finally{f.dispose()}})});
g.o=1E5;g.flushInterval=3E4;g.h.setInterval(3E4);return g}
function lj(a,b){F.call(this);var c=this;this.callback=a;this.i=b;this.h=-b;this.addOnDisposeCallback(function(){return void clearTimeout(c.timer)})}
w(lj,F);function mj(a){if(a.timer===void 0){var b=Math.max(0,a.h+a.i-fj());a.timer=setTimeout(function(){try{a.callback()}finally{a.h=fj(),a.timer=void 0}},b)}}
function nj(a,b,c){gj.call(this);this.metrics=a;this.Da=b;this.pb=c}
w(nj,gj);nj.prototype.Qc=function(a){this.metrics.sf.record(a,this.Da)};
nj.prototype.Cb=function(a){this.metrics.eventCount.h(a,this.Da)};
nj.prototype.Tb=function(a,b){this.metrics.re.record(b,a,this.pb,this.Da)};
nj.prototype.Ha=function(a){this.metrics.errorCount.h(a,this.pb,this.Da)};
function oj(a,b){b=b===void 0?[]:b;var c={Da:a.Da||"_",pb:a.pb||"",lc:a.lc||[],uc:a.uc|0,Ua:a.Ua,vc:a.vc||function(){},
Jc:!!a.Jc,Ib:a.Ib||function(e,f){return kj(e,f,c.vc,c.Jc,c.Ua)}};
b=c.Ib("42",c.lc.concat(b));nj.call(this,jj(b),c.Da,c.pb);var d=this;this.options=c;this.service=b;this.i=!a.Ib;this.h=new lj(function(){return void d.service.Zb()},c.uc);
this.addOnDisposeCallback(function(){d.h.dispose();d.i&&d.service.dispose()})}
w(oj,nj);oj.prototype.Pd=function(a){var b=this;this.h.dispose();this.i&&this.service.dispose();this.service=this.options.Ib("42",this.options.lc.concat(a));this.h=new lj(function(){return void b.service.Zb()},this.options.uc);
this.metrics=jj(this.service)};
oj.prototype.Bc=function(){mj(this.h)};
function fj(){var a,b,c;return(c=(a=globalThis.performance)==null?void 0:(b=a.now)==null?void 0:b.call(a))!=null?c:Date.now()}
;function pj(a){this.F=J(a)}
w(pj,L);function qj(a){this.F=J(a)}
w(qj,L);function rj(a){this.F=J(a,0,"bfkj")}
w(rj,L);var sj=function(a){return $d(function(b){return b instanceof a&&!(I(b.F)&2)})}(rj);function tj(a){this.F=J(a)}
w(tj,L);function vc(a){this.F=J(a)}
w(vc,L);function uj(a){this.F=J(a)}
w(uj,L);var vj=Rf(uj);function wj(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function xj(a,b,c){if(a.disable)return new ij;var d=b&&yc(rf(b,tj,7))?tc(b):[];if(c)return c.Pd(d),c.share();a={Da:a.Da,pb:a.pb,lc:a.Bh,uc:a.Lh,Jc:yc(b==null?void 0:rf(b,tj,10)),Ua:a.Ua,vc:a.vc,Ib:a.Ib};d=d===void 0?[]:d;return new oj(a,d)}
function yj(a){function b(u,x,z,H){Promise.resolve().then(function(){k.done();h.Bc();h.dispose();g.resolve({be:u,rf:x,Se:z,xh:H})})}
function c(u,x,z,H){if(!d.logger.ea){var K="k";x?K="h":z&&(K="u");K!=="k"?H!==0&&(d.logger.Cb(K),d.logger.Tb(K,u)):d.i<=0?(d.logger.Cb(K),d.logger.Tb(K,u),d.i=Math.floor(Math.random()*200)):d.i--}}
F.call(this);var d=this;this.i=Math.floor(Math.random()*200);this.h=new uj;if("challenge"in a&&sj(a.challenge)){var e=xf(a.challenge,4);var f=xf(a.challenge,5);xf(a.challenge,7)&&(this.h=vj(xf(a.challenge,7)))}else e=a.program,f=a.globalName;this.addOnDisposeCallback(function(){var u,x,z;return A(function(H){if(H.h==1)return H.yield(d.j,2);u=H.i;x=u.rf;(z=x)==null||z();H.h=0})});
this.logger=xj(a.Bd||{},this.h,a.yh);Bc(this,this.logger);var g=new wj;this.j=g.promise;this.logger.Cb("t");var h=this.logger.share(),k=new ej(h,"t");if(!C[f])throw this.logger.Ha(25),Error("EGOU");if(!C[f].a)throw this.logger.Ha(26),Error("ELIU");try{var l=C[f].a;f=[];var m=[];if(yc(rf(this.h,tj,7))){for(var n=tc(this.h),p=0;p<n.length;p++)f.push(n[p]),m.push(1);var t=xc(this.h);for(n=0;n<t.length;n++)f.push(t[n]),m.push(2)}this.u=y(l(e,b,!0,a.Zh,c,[f,m],xf(this.h,5))).next().value;this.cd=g.promise.then(function(){})}catch(u){throw this.logger.Ha(28),
u;
}}
w(yj,F);yj.prototype.snapshot=function(a){if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var b=this.logger.share();return this.j.then(function(c){var d=c.be;return new Promise(function(e){var f=new ej(b,"n");d(function(g){f.done();b.Qc(g.length);b.Bc();b.dispose();e(g)},[a.wb,
a.ed,a.Cf,a.gd])})})};
yj.prototype.hd=function(a){var b=this;if(this.ea)throw Error("Already disposed");this.logger.Cb("n");var c=hj(this.logger,function(){return b.u([a.wb,a.ed,a.Cf,a.gd])});
this.logger.Qc(c.length);this.logger.Bc();return c};
yj.prototype.o=function(a){this.j.then(function(b){var c;(c=b.Se)==null||c(a)})};function zj(){var a=Aj();a=a===void 0?"bevasrsg":a;return new Promise(function(b){var c=window===window.top?window:sc()?window:window.top,d=c[a],e;((e=d)==null?0:e.bevasrs)?b(new Bj(d.bevasrs)):(d||(d={},d=(d.nqfbel=[],d),c[a]=d),d.nqfbel.push(function(f){b(new Bj(f))}))})}
function Bj(a){F.call(this);var b=this;this.vm=a;this.i="keydown keypress keyup input focusin focusout select copy cut paste change click dblclick auxclick pointerover pointerdown pointerup pointermove pointerout dragenter dragleave drag dragend mouseover mousedown mouseup mousemove mouseout touchstart touchend touchmove wheel".split(" ");this.h=void 0;this.cd=this.vm.p;this.j=this.o.bind(this);this.addOnDisposeCallback(function(){return void Cj(b)})}
w(Bj,F);Bj.prototype.snapshot=function(a){return this.vm.s(Object.assign({},a.wb&&{c:a.wb},a.ed&&{s:a.ed},a.gd!==void 0&&{p:a.gd}))};
Bj.prototype.o=function(a){this.vm.e(a)};
function Cj(a){a.h!==void 0&&(a.i.forEach(function(b){var c;(c=a.h)==null||c.removeEventListener(b,a.j)}),a.h=void 0)}
;function Dj(a){if(!a)return null;a=vf(a,4);return a===null||a===void 0?null:ob(a)}
;function Ej(){this.promises={};this.h=null}
function Fj(){Ej.h||(Ej.h=new Ej);return Ej.h}
function Gj(a,b){return Hj(a,rf(b,pj,1),rf(b,qj,2),xf(b,3))}
function Hj(a,b,c,d){if(!b&&!c)return Promise.resolve();if(!d)return Ij(b,c);var e;(e=a.promises)[d]||(e[d]=new Promise(function(f,g){Ij(b,c).then(function(){a.h=d;f()},function(h){delete a.promises[d];
g(h)})}));
return a.promises[d]}
function Ij(a,b){return b?Jj(b):a?Kj(a):Promise.resolve()}
function Jj(a){return new Promise(function(b,c){var d=Fg("SCRIPT"),e=Dj(a);Kb(d,e);d.onload=function(){Gg(d);b()};
d.onerror=function(){Gg(d);c(Error("EWLS"))};
(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(d)})}
function Kj(a){return new Promise(function(b){var c=Fg("SCRIPT");if(a){var d=vf(a,6);d=d===null||d===void 0?null:Hb(d)}else d=null;c.textContent=Ib(d);Jb(c);(document.getElementsByTagName("HEAD")[0]||document.documentElement).appendChild(c);Gg(c);b()})}
;var Lj=window;function Mj(a){var b=Nj;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function Oj(){var a=[];Mj(function(b){a.push(b)});
return a}
var Nj={Df:"allow-forms",Ef:"allow-modals",Ff:"allow-orientation-lock",Gf:"allow-pointer-lock",Hf:"allow-popups",If:"allow-popups-to-escape-sandbox",Jf:"allow-presentation",Kf:"allow-same-origin",Lf:"allow-scripts",Mf:"allow-top-navigation",Nf:"allow-top-navigation-by-user-activation"},Pj=ri(function(){return Oj()});
function Qj(){var a=Rj(),b={};Sb(Pj(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Rj(){var a=a===void 0?document:a;return a.createElement("iframe")}
;function Sj(a){typeof a=="number"&&(a=Math.round(a)+"px");return a}
;var Tj=(new Date).getTime();function Uj(a){bi.call(this);var b=this;this.D=this.j=0;this.Ca=a!=null?a:{ma:function(e,f){return setTimeout(e,f)},
qa:function(e){clearTimeout(e)}};
var c,d;this.h=(d=(c=window.navigator)==null?void 0:c.onLine)!=null?d:!0;this.o=function(){return A(function(e){return e.yield(Vj(b),0)})};
window.addEventListener("offline",this.o);window.addEventListener("online",this.o);this.D||Wj(this)}
w(Uj,bi);function Xj(){var a=Yj;Uj.h||(Uj.h=new Uj(a));return Uj.h}
Uj.prototype.dispose=function(){window.removeEventListener("offline",this.o);window.removeEventListener("online",this.o);this.Ca.qa(this.D);delete Uj.h};
Uj.prototype.ta=function(){return this.h};
function Wj(a){a.D=a.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return a.h?((b=window.navigator)==null?0:b.onLine)?c.A(3):c.yield(Vj(a),3):c.yield(Vj(a),3);Wj(a);c.h=0})},3E4)}
function Vj(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=(e=d)==null?void 0:e.signal,g=!1,za(h,2,3),d&&(a.j=a.Ca.ma(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.M=0;h.o=0;a.u=void 0;a.j&&(a.Ca.qa(a.j),a.j=0);g!==a.h&&(a.h=g,a.h?ci(a,"networkstatus-online"):ci(a,"networkstatus-offline"));c(g);Ca(h);break;case 2:Ba(h),g=!1,h.A(3)}})})}
;function Zj(){this.data=[];this.h=-1}
Zj.prototype.set=function(a,b){b=b===void 0?!0:b;0<=a&&a<52&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
Zj.prototype.get=function(a){return!!this.data[a]};
function ak(a){a.h===-1&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function bk(){this.blockSize=-1}
;function ck(){this.blockSize=-1;this.blockSize=64;this.h=[];this.u=[];this.M=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.o=this.i=0;this.reset()}
cb(ck,bk);ck.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.o=this.i=0};
function dk(a,b,c){c||(c=0);var d=a.M;if(typeof b==="string")for(var e=0;e<16;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;e<16;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(b=16;b<80;b++)c=d[b-3]^d[b-8]^d[b-14]^d[b-16],d[b]=(c<<1|c>>>31)&4294967295;b=a.h[0];c=a.h[1];e=a.h[2];for(var f=a.h[3],g=a.h[4],h,k,l=0;l<80;l++)l<40?l<20?(h=f^c&(e^f),k=1518500249):(h=c^e^f,k=1859775393):l<60?(h=c&e|f&(c|e),k=2400959708):(h=c^e^f,k=3395469782),
h=(b<<5|b>>>27)+h+g+k+d[l]&4294967295,g=f,f=e,e=(c<<30|c>>>2)&4294967295,c=b,b=h;a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+e&4294967295;a.h[3]=a.h[3]+f&4294967295;a.h[4]=a.h[4]+g&4294967295}
ck.prototype.update=function(a,b){if(a!=null){b===void 0&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.u,f=this.i;d<b;){if(f==0)for(;d<=c;)dk(this,a,d),d+=this.blockSize;if(typeof a==="string")for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){dk(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){dk(this,e);f=0;break}}this.i=f;this.o+=b}};
ck.prototype.digest=function(){var a=[],b=this.o*8;this.i<56?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;c>=56;c--)this.u[c]=b&255,b/=256;dk(this,this.u);for(c=b=0;c<5;c++)for(var d=24;d>=0;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ek(a){return typeof a.className=="string"?a.className:a.getAttribute&&a.getAttribute("class")||""}
function fk(a,b){typeof a.className=="string"?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function gk(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ek(a).match(/\S+/g)||[],b=Rb(a,b)>=0);return b}
function hk(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):gk(a,"inverted-hdpi")&&fk(a,Array.prototype.filter.call(a.classList?a.classList:ek(a).match(/\S+/g)||[],function(b){return b!="inverted-hdpi"}).join(" "))}
;function ik(){}
ik.prototype.next=function(){return jk};
var jk={done:!0,value:void 0};ik.prototype.tb=function(){return this};function kk(a){if(a instanceof lk||a instanceof mk||a instanceof nk)return a;if(typeof a.next=="function")return new lk(function(){return a});
if(typeof a[Symbol.iterator]=="function")return new lk(function(){return a[Symbol.iterator]()});
if(typeof a.tb=="function")return new lk(function(){return a.tb()});
throw Error("Not an iterator or iterable.");}
function lk(a){this.h=a}
lk.prototype.tb=function(){return new mk(this.h())};
lk.prototype[Symbol.iterator]=function(){return new nk(this.h())};
lk.prototype.i=function(){return new nk(this.h())};
function mk(a){this.h=a}
w(mk,ik);mk.prototype.next=function(){return this.h.next()};
mk.prototype[Symbol.iterator]=function(){return new nk(this.h)};
mk.prototype.i=function(){return new nk(this.h)};
function nk(a){lk.call(this,function(){return a});
this.j=a}
w(nk,lk);nk.prototype.next=function(){return this.j.next()};function M(a){F.call(this);this.u=1;this.j=[];this.o=0;this.h=[];this.i={};this.D=!!a}
cb(M,F);r=M.prototype;r.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.u;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.u=e+3;d.push(e);return e};
r.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.cc(a)}return!1};
r.cc=function(a){var b=this.h[a];if(b){var c=this.i[b];this.o!=0?(this.j.push(a),this.h[a+1]=function(){}):(c&&Xb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
r.rb=function(a,b){var c=this.i[a];if(c){var d=Array(arguments.length-1),e=arguments.length,f;for(f=1;f<e;f++)d[f-1]=arguments[f];if(this.D)for(f=0;f<c.length;f++)e=c[f],ok(this.h[e+1],this.h[e+2],d);else{this.o++;try{for(f=0,e=c.length;f<e&&!this.ea;f++){var g=c[f];this.h[g+1].apply(this.h[g+2],d)}}finally{if(this.o--,this.j.length>0&&this.o==0)for(;c=this.j.pop();)this.cc(c)}}return f!=0}return!1};
function ok(a,b,c){ni(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.cc,this),delete this.i[a])}else this.h.length=0,this.i={}};
r.ba=function(){M.Aa.ba.call(this);this.clear();this.j.length=0};function pk(a){this.h=a}
pk.prototype.set=function(a,b){b===void 0?this.h.remove(a):this.h.set(a,(new Pi).serialize(b))};
pk.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(b!==null)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
pk.prototype.remove=function(a){this.h.remove(a)};function qk(a){this.h=a}
cb(qk,pk);function rk(a){this.data=a}
function sk(a){return a===void 0||a instanceof rk?a:new rk(a)}
qk.prototype.set=function(a,b){qk.Aa.set.call(this,a,sk(b))};
qk.prototype.i=function(a){a=qk.Aa.get.call(this,a);if(a===void 0||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
qk.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,a===void 0)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function tk(a){this.h=a}
cb(tk,qk);tk.prototype.set=function(a,b,c){if(b=sk(b)){if(c){if(c<ab()){tk.prototype.remove.call(this,a);return}b.expiration=c}b.creation=ab()}tk.Aa.set.call(this,a,b)};
tk.prototype.i=function(a){var b=tk.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<ab()||c&&c>ab())tk.prototype.remove.call(this,a);else return b}};function uk(){}
;function vk(){}
cb(vk,uk);vk.prototype[Symbol.iterator]=function(){return kk(this.tb(!0)).i()};
vk.prototype.clear=function(){var a=Array.from(this);a=y(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function wk(a){this.h=a;this.i=null}
cb(wk,vk);r=wk.prototype;r.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&(c.name==="QuotaExceededError"||c.code===22||c.code===1014||c.name==="NS_ERROR_DOM_QUOTA_REACHED")&&a&&a.length!==0}else b=!1;return this.i=b};
r.set=function(a,b){xk(this);try{this.h.setItem(a,b)}catch(c){if(this.h.length==0)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){xk(this);a=this.h.getItem(a);if(typeof a!=="string"&&a!==null)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){xk(this);this.h.removeItem(a)};
r.tb=function(a){xk(this);var b=0,c=this.h,d=new ik;d.next=function(){if(b>=c.length)return jk;var e=c.key(b++);if(a)return{value:e,done:!1};e=c.getItem(e);if(typeof e!=="string")throw"Storage mechanism: Invalid value was encountered";return{value:e,done:!1}};
return d};
r.clear=function(){xk(this);this.h.clear()};
r.key=function(a){xk(this);return this.h.key(a)};
function xk(a){if(a.h==null)throw Error("Storage mechanism: Storage unavailable");var b;((b=a.i)!=null?b:a.isAvailable())||Oc(Error("Storage mechanism: Storage unavailable"))}
;function yk(){var a=null;try{a=C.localStorage||null}catch(b){}wk.call(this,a)}
cb(yk,wk);function zk(a,b){this.i=a;this.h=b+"::"}
cb(zk,vk);zk.prototype.set=function(a,b){this.i.set(this.h+a,b)};
zk.prototype.get=function(a){return this.i.get(this.h+a)};
zk.prototype.remove=function(a){this.i.remove(this.h+a)};
zk.prototype.tb=function(a){var b=this.i[Symbol.iterator](),c=this,d=new ik;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return{value:a?e.slice(c.h.length):c.i.get(e),done:!1}};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},Ak=typeof Uint8Array!=="undefined"&&typeof Uint16Array!=="undefined"&&typeof Int32Array!=="undefined";N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if(typeof c!=="object")throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.dd=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Bk={ub:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Ck={ub:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
ud:function(a){return[].concat.apply([],a)}};
N.qf=function(){Ak?(N.qb=Uint8Array,N.Ja=Uint16Array,N.Wd=Int32Array,N.assign(N,Bk)):(N.qb=Array,N.Ja=Array,N.Wd=Array,N.assign(N,Ck))};
N.qf();var Dk=!0;try{new Uint8Array(1)}catch(a){Dk=!1}
function Ek(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if((f&64512)===55296&&b+1<d){var g=a.charCodeAt(b+1);(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=f<128?1:f<2048?2:f<65536?3:4}var h=new N.qb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),(f&64512)===55296&&b+1<d&&(g=a.charCodeAt(b+1),(g&64512)===56320&&(f=65536+(f-55296<<10)+(g-56320),b++)),f<128?h[c++]=f:(f<2048?h[c++]=192|f>>>6:(f<65536?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Fk={};Fk=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;c!==0;){f=c>2E3?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Gk={},Hk,Ik=[],Jk=0;Jk<256;Jk++){Hk=Jk;for(var Kk=0;Kk<8;Kk++)Hk=Hk&1?3988292384^Hk>>>1:Hk>>>1;Ik[Jk]=Hk}Gk=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Ik[(a^b[d])&255];return a^-1};var Lk={};Lk={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function Mk(a){for(var b=a.length;--b>=0;)a[b]=0}
var Nk=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],Ok=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],Pk=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Qk=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Rk=Array(576);Mk(Rk);var Sk=Array(60);Mk(Sk);var Tk=Array(512);Mk(Tk);var Uk=Array(256);Mk(Uk);var Vk=Array(29);Mk(Vk);var Wk=Array(30);Mk(Wk);function Xk(a,b,c,d,e){this.Md=a;this.we=b;this.ue=c;this.oe=d;this.Me=e;this.xd=a&&a.length}
var Yk,Zk,$k;function al(a,b){this.td=a;this.Eb=0;this.bb=b}
function bl(a,b){a.aa[a.pending++]=b&255;a.aa[a.pending++]=b>>>8&255}
function cl(a,b,c){a.ia>16-c?(a.oa|=b<<a.ia&65535,bl(a,a.oa),a.oa=b>>16-a.ia,a.ia+=c-16):(a.oa|=b<<a.ia&65535,a.ia+=c)}
function dl(a,b,c){cl(a,c[b*2],c[b*2+1])}
function el(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(--b>0);return c>>>1}
function fl(a,b,c){var d=Array(16),e=0,f;for(f=1;f<=15;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[c*2+1],e!==0&&(a[c*2]=el(d[e]++,e))}
function gl(a){var b;for(b=0;b<286;b++)a.ra[b*2]=0;for(b=0;b<30;b++)a.fb[b*2]=0;for(b=0;b<19;b++)a.ja[b*2]=0;a.ra[512]=1;a.Oa=a.Hb=0;a.ya=a.matches=0}
function hl(a){a.ia>8?bl(a,a.oa):a.ia>0&&(a.aa[a.pending++]=a.oa);a.oa=0;a.ia=0}
function il(a,b,c){hl(a);bl(a,c);bl(a,~c);N.ub(a.aa,a.window,b,c,a.pending);a.pending+=c}
function jl(a,b,c,d){var e=b*2,f=c*2;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function kl(a,b,c){for(var d=a.da[c],e=c<<1;e<=a.Na;){e<a.Na&&jl(b,a.da[e+1],a.da[e],a.depth)&&e++;if(jl(b,d,a.da[e],a.depth))break;a.da[c]=a.da[e];c=e;e<<=1}a.da[c]=d}
function ll(a,b,c){var d=0;if(a.ya!==0){do{var e=a.aa[a.Ob+d*2]<<8|a.aa[a.Ob+d*2+1];var f=a.aa[a.Pc+d];d++;if(e===0)dl(a,f,b);else{var g=Uk[f];dl(a,g+256+1,b);var h=Nk[g];h!==0&&(f-=Vk[g],cl(a,f,h));e--;g=e<256?Tk[e]:Tk[256+(e>>>7)];dl(a,g,c);h=Ok[g];h!==0&&(e-=Wk[g],cl(a,e,h))}}while(d<a.ya)}dl(a,256,b)}
function ml(a,b){var c=b.td,d=b.bb.Md,e=b.bb.xd,f=b.bb.oe,g,h=-1;a.Na=0;a.zb=573;for(g=0;g<f;g++)c[g*2]!==0?(a.da[++a.Na]=h=g,a.depth[g]=0):c[g*2+1]=0;for(;a.Na<2;){var k=a.da[++a.Na]=h<2?++h:0;c[k*2]=1;a.depth[k]=0;a.Oa--;e&&(a.Hb-=d[k*2+1])}b.Eb=h;for(g=a.Na>>1;g>=1;g--)kl(a,c,g);k=f;do g=a.da[1],a.da[1]=a.da[a.Na--],kl(a,c,1),d=a.da[1],a.da[--a.zb]=g,a.da[--a.zb]=d,c[k*2]=c[g*2]+c[d*2],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[g*2+1]=c[d*2+1]=k,a.da[1]=k++,kl(a,c,1);while(a.Na>=
2);a.da[--a.zb]=a.da[1];g=b.td;k=b.Eb;d=b.bb.Md;e=b.bb.xd;f=b.bb.we;var l=b.bb.ue,m=b.bb.Me,n,p=0;for(n=0;n<=15;n++)a.Ka[n]=0;g[a.da[a.zb]*2+1]=0;for(b=a.zb+1;b<573;b++){var t=a.da[b];n=g[g[t*2+1]*2+1]+1;n>m&&(n=m,p++);g[t*2+1]=n;if(!(t>k)){a.Ka[n]++;var u=0;t>=l&&(u=f[t-l]);var x=g[t*2];a.Oa+=x*(n+u);e&&(a.Hb+=x*(d[t*2+1]+u))}}if(p!==0){do{for(n=m-1;a.Ka[n]===0;)n--;a.Ka[n]--;a.Ka[n+1]+=2;a.Ka[m]--;p-=2}while(p>0);for(n=m;n!==0;n--)for(t=a.Ka[n];t!==0;)d=a.da[--b],d>k||(g[d*2+1]!==n&&(a.Oa+=(n-g[d*
2+1])*g[d*2],g[d*2+1]=n),t--)}fl(c,h,a.Ka)}
function nl(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);b[(c+1)*2+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];++g<h&&l===f||(g<k?a.ja[l*2]+=g:l!==0?(l!==e&&a.ja[l*2]++,a.ja[32]++):g<=10?a.ja[34]++:a.ja[36]++,g=0,e=l,f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function ol(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;f===0&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[(d+1)*2+1];if(!(++g<h&&l===f)){if(g<k){do dl(a,l,a.ja);while(--g!==0)}else l!==0?(l!==e&&(dl(a,l,a.ja),g--),dl(a,16,a.ja),cl(a,g-3,2)):g<=10?(dl(a,17,a.ja),cl(a,g-3,3)):(dl(a,18,a.ja),cl(a,g-11,7));g=0;e=l;f===0?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function pl(a){var b=4093624447,c;for(c=0;c<=31;c++,b>>>=1)if(b&1&&a.ra[c*2]!==0)return 0;if(a.ra[18]!==0||a.ra[20]!==0||a.ra[26]!==0)return 1;for(c=32;c<256;c++)if(a.ra[c*2]!==0)return 1;return 0}
var ql=!1;function rl(a,b,c){a.aa[a.Ob+a.ya*2]=b>>>8&255;a.aa[a.Ob+a.ya*2+1]=b&255;a.aa[a.Pc+a.ya]=c&255;a.ya++;b===0?a.ra[c*2]++:(a.matches++,b--,a.ra[(Uk[c]+256+1)*2]++,a.fb[(b<256?Tk[b]:Tk[256+(b>>>7)])*2]++);return a.ya===a.Sb-1}
;function sl(a,b){a.msg=Lk[b];return b}
function tl(a){for(var b=a.length;--b>=0;)a[b]=0}
function ul(a){var b=a.state,c=b.pending;c>a.S&&(c=a.S);c!==0&&(N.ub(a.output,b.aa,b.Vb,c,a.Fb),a.Fb+=c,b.Vb+=c,a.jd+=c,a.S-=c,b.pending-=c,b.pending===0&&(b.Vb=0))}
function vl(a,b){var c=a.va>=0?a.va:-1,d=a.v-a.va,e=0;if(a.level>0){a.K.Ic===2&&(a.K.Ic=pl(a));ml(a,a.sc);ml(a,a.jc);nl(a,a.ra,a.sc.Eb);nl(a,a.fb,a.jc.Eb);ml(a,a.pd);for(e=18;e>=3&&a.ja[Qk[e]*2+1]===0;e--);a.Oa+=3*(e+1)+5+5+4;var f=a.Oa+3+7>>>3;var g=a.Hb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&c!==-1)cl(a,b?1:0,3),il(a,c,d);else if(a.strategy===4||g===f)cl(a,2+(b?1:0),3),ll(a,Rk,Sk);else{cl(a,4+(b?1:0),3);c=a.sc.Eb+1;d=a.jc.Eb+1;e+=1;cl(a,c-257,5);cl(a,d-1,5);cl(a,e-4,4);for(f=0;f<e;f++)cl(a,
a.ja[Qk[f]*2+1],3);ol(a,a.ra,c-1);ol(a,a.fb,d-1);ll(a,a.ra,a.fb)}gl(a);b&&hl(a);a.va=a.v;ul(a.K)}
function O(a,b){a.aa[a.pending++]=b}
function wl(a,b){a.aa[a.pending++]=b>>>8&255;a.aa[a.pending++]=b&255}
function xl(a,b){var c=a.Ad,d=a.v,e=a.wa,f=a.Cd,g=a.v>a.la-262?a.v-(a.la-262):0,h=a.window,k=a.cb,l=a.Ia,m=a.v+258,n=h[d+e-1],p=h[d+e];a.wa>=a.wd&&(c>>=2);f>a.B&&(f=a.B);do{var t=b;if(h[t+e]===p&&h[t+e-1]===n&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<m;);t=258-(m-d);d=m-258;if(t>e){a.Db=b;e=t;if(t>=f)break;n=h[d+e-1];p=h[d+e]}}}while((b=l[b&k])>g&&--c!==0);return e<=
a.B?e:a.B}
function yl(a){var b=a.la,c;do{var d=a.Ud-a.B-a.v;if(a.v>=b+(b-262)){N.ub(a.window,a.window,b,b,0);a.Db-=b;a.v-=b;a.va-=b;var e=c=a.qc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ia[--e],a.Ia[e]=f>=b?f-b:0;while(--c);d+=b}if(a.K.na===0)break;e=a.K;c=a.window;f=a.v+a.B;var g=e.na;g>d&&(g=d);g===0?c=0:(e.na-=g,N.ub(c,e.input,e.mb,g,f),e.state.wrap===1?e.I=Fk(e.I,c,g,f):e.state.wrap===2&&(e.I=Gk(e.I,c,g,f)),e.mb+=g,e.ob+=g,c=g);a.B+=c;if(a.B+a.sa>=3)for(d=a.v-a.sa,a.R=a.window[d],
a.R=(a.R<<a.Ma^a.window[d+1])&a.La;a.sa&&!(a.R=(a.R<<a.Ma^a.window[d+3-1])&a.La,a.Ia[d&a.cb]=a.head[a.R],a.head[a.R]=d,d++,a.sa--,a.B+a.sa<3););}while(a.B<262&&a.K.na!==0)}
function zl(a,b){for(var c;;){if(a.B<262){yl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);c!==0&&a.v-c<=a.la-262&&(a.T=xl(a,c));if(a.T>=3)if(c=rl(a,a.v-a.Db,a.T-3),a.B-=a.T,a.T<=a.Rc&&a.B>=3){a.T--;do a.v++,a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v;while(--a.T!==0);a.v++}else a.v+=a.T,a.T=0,a.R=a.window[a.v],a.R=(a.R<<a.Ma^a.window[a.v+1])&a.La;else c=rl(a,0,
a.window[a.v]),a.B--,a.v++;if(c&&(vl(a,!1),a.K.S===0))return 1}a.sa=a.v<2?a.v:2;return b===4?(vl(a,!0),a.K.S===0?3:4):a.ya&&(vl(a,!1),a.K.S===0)?1:2}
function Al(a,b){for(var c,d;;){if(a.B<262){yl(a);if(a.B<262&&b===0)return 1;if(a.B===0)break}c=0;a.B>=3&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,c=a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);a.wa=a.T;a.Fd=a.Db;a.T=2;c!==0&&a.wa<a.Rc&&a.v-c<=a.la-262&&(a.T=xl(a,c),a.T<=5&&(a.strategy===1||a.T===3&&a.v-a.Db>4096)&&(a.T=2));if(a.wa>=3&&a.T<=a.wa){d=a.v+a.B-3;c=rl(a,a.v-1-a.Fd,a.wa-3);a.B-=a.wa-1;a.wa-=2;do++a.v<=d&&(a.R=(a.R<<a.Ma^a.window[a.v+3-1])&a.La,a.Ia[a.v&a.cb]=a.head[a.R],a.head[a.R]=a.v);
while(--a.wa!==0);a.kb=0;a.T=2;a.v++;if(c&&(vl(a,!1),a.K.S===0))return 1}else if(a.kb){if((c=rl(a,0,a.window[a.v-1]))&&vl(a,!1),a.v++,a.B--,a.K.S===0)return 1}else a.kb=1,a.v++,a.B--}a.kb&&(rl(a,0,a.window[a.v-1]),a.kb=0);a.sa=a.v<2?a.v:2;return b===4?(vl(a,!0),a.K.S===0?3:4):a.ya&&(vl(a,!1),a.K.S===0)?1:2}
function Bl(a,b){for(var c,d,e,f=a.window;;){if(a.B<=258){yl(a);if(a.B<=258&&b===0)return 1;if(a.B===0)break}a.T=0;if(a.B>=3&&a.v>0&&(d=a.v-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.v+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.T=258-(e-d);a.T>a.B&&(a.T=a.B)}a.T>=3?(c=rl(a,1,a.T-3),a.B-=a.T,a.v+=a.T,a.T=0):(c=rl(a,0,a.window[a.v]),a.B--,a.v++);if(c&&(vl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(vl(a,!0),a.K.S===0?3:4):
a.ya&&(vl(a,!1),a.K.S===0)?1:2}
function Cl(a,b){for(var c;;){if(a.B===0&&(yl(a),a.B===0)){if(b===0)return 1;break}a.T=0;c=rl(a,0,a.window[a.v]);a.B--;a.v++;if(c&&(vl(a,!1),a.K.S===0))return 1}a.sa=0;return b===4?(vl(a,!0),a.K.S===0?3:4):a.ya&&(vl(a,!1),a.K.S===0)?1:2}
function Dl(a,b,c,d,e){this.Ae=a;this.Le=b;this.Ne=c;this.Ke=d;this.xe=e}
var El;El=[new Dl(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(a.B<=1){yl(a);if(a.B===0&&b===0)return 1;if(a.B===0)break}a.v+=a.B;a.B=0;var d=a.va+c;if(a.v===0||a.v>=d)if(a.B=a.v-d,a.v=d,vl(a,!1),a.K.S===0)return 1;if(a.v-a.va>=a.la-262&&(vl(a,!1),a.K.S===0))return 1}a.sa=0;if(b===4)return vl(a,!0),a.K.S===0?3:4;a.v>a.va&&vl(a,!1);return 1}),
new Dl(4,4,8,4,zl),new Dl(4,5,16,8,zl),new Dl(4,6,32,32,zl),new Dl(4,4,16,16,Al),new Dl(8,16,32,32,Al),new Dl(8,16,128,128,Al),new Dl(8,32,128,256,Al),new Dl(32,128,258,1024,Al),new Dl(32,258,258,4096,Al)];
function Fl(){this.K=null;this.status=0;this.aa=null;this.wrap=this.pending=this.Vb=this.za=0;this.H=null;this.Ba=0;this.method=8;this.Bb=-1;this.cb=this.ld=this.la=0;this.window=null;this.Ud=0;this.head=this.Ia=null;this.Cd=this.wd=this.strategy=this.level=this.Rc=this.Ad=this.wa=this.B=this.Db=this.v=this.kb=this.Fd=this.T=this.va=this.Ma=this.La=this.Nc=this.qc=this.R=0;this.ra=new N.Ja(1146);this.fb=new N.Ja(122);this.ja=new N.Ja(78);tl(this.ra);tl(this.fb);tl(this.ja);this.pd=this.jc=this.sc=
null;this.Ka=new N.Ja(16);this.da=new N.Ja(573);tl(this.da);this.zb=this.Na=0;this.depth=new N.Ja(573);tl(this.depth);this.ia=this.oa=this.sa=this.matches=this.Hb=this.Oa=this.Ob=this.ya=this.Sb=this.Pc=0}
function Gl(a,b){if(!a||!a.state||b>5||b<0)return a?sl(a,-2):-2;var c=a.state;if(!a.output||!a.input&&a.na!==0||c.status===666&&b!==4)return sl(a,a.S===0?-5:-2);c.K=a;var d=c.Bb;c.Bb=b;if(c.status===42)if(c.wrap===2)a.I=0,O(c,31),O(c,139),O(c,8),c.H?(O(c,(c.H.text?1:0)+(c.H.Va?2:0)+(c.H.extra?4:0)+(c.H.name?8:0)+(c.H.comment?16:0)),O(c,c.H.time&255),O(c,c.H.time>>8&255),O(c,c.H.time>>16&255),O(c,c.H.time>>24&255),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,c.H.os&255),c.H.extra&&c.H.extra.length&&
(O(c,c.H.extra.length&255),O(c,c.H.extra.length>>8&255)),c.H.Va&&(a.I=Gk(a.I,c.aa,c.pending,0)),c.Ba=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,c.level===9?2:c.strategy>=2||c.level<2?4:0),O(c,3),c.status=113);else{var e=8+(c.ld-8<<4)<<8;e|=(c.strategy>=2||c.level<2?0:c.level<6?1:c.level===6?2:3)<<6;c.v!==0&&(e|=32);c.status=113;wl(c,e+(31-e%31));c.v!==0&&(wl(c,a.I>>>16),wl(c,a.I&65535));a.I=1}if(c.status===69)if(c.H.extra){for(e=c.pending;c.Ba<(c.H.extra.length&65535)&&(c.pending!==c.za||
(c.H.Va&&c.pending>e&&(a.I=Gk(a.I,c.aa,c.pending-e,e)),ul(a),e=c.pending,c.pending!==c.za));)O(c,c.H.extra[c.Ba]&255),c.Ba++;c.H.Va&&c.pending>e&&(a.I=Gk(a.I,c.aa,c.pending-e,e));c.Ba===c.H.extra.length&&(c.Ba=0,c.status=73)}else c.status=73;if(c.status===73)if(c.H.name){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Gk(a.I,c.aa,c.pending-e,e)),ul(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ba<c.H.name.length?c.H.name.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>
e&&(a.I=Gk(a.I,c.aa,c.pending-e,e));f===0&&(c.Ba=0,c.status=91)}else c.status=91;if(c.status===91)if(c.H.comment){e=c.pending;do{if(c.pending===c.za&&(c.H.Va&&c.pending>e&&(a.I=Gk(a.I,c.aa,c.pending-e,e)),ul(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ba<c.H.comment.length?c.H.comment.charCodeAt(c.Ba++)&255:0;O(c,f)}while(f!==0);c.H.Va&&c.pending>e&&(a.I=Gk(a.I,c.aa,c.pending-e,e));f===0&&(c.status=103)}else c.status=103;c.status===103&&(c.H.Va?(c.pending+2>c.za&&ul(a),c.pending+2<=c.za&&(O(c,
a.I&255),O(c,a.I>>8&255),a.I=0,c.status=113)):c.status=113);if(c.pending!==0){if(ul(a),a.S===0)return c.Bb=-1,0}else if(a.na===0&&(b<<1)-(b>4?9:0)<=(d<<1)-(d>4?9:0)&&b!==4)return sl(a,-5);if(c.status===666&&a.na!==0)return sl(a,-5);if(a.na!==0||c.B!==0||b!==0&&c.status!==666){d=c.strategy===2?Cl(c,b):c.strategy===3?Bl(c,b):El[c.level].xe(c,b);if(d===3||d===4)c.status=666;if(d===1||d===3)return a.S===0&&(c.Bb=-1),0;if(d===2&&(b===1?(cl(c,2,3),dl(c,256,Rk),c.ia===16?(bl(c,c.oa),c.oa=0,c.ia=0):c.ia>=
8&&(c.aa[c.pending++]=c.oa&255,c.oa>>=8,c.ia-=8)):b!==5&&(cl(c,0,3),il(c,0,0),b===3&&(tl(c.head),c.B===0&&(c.v=0,c.va=0,c.sa=0))),ul(a),a.S===0))return c.Bb=-1,0}if(b!==4)return 0;if(c.wrap<=0)return 1;c.wrap===2?(O(c,a.I&255),O(c,a.I>>8&255),O(c,a.I>>16&255),O(c,a.I>>24&255),O(c,a.ob&255),O(c,a.ob>>8&255),O(c,a.ob>>16&255),O(c,a.ob>>24&255)):(wl(c,a.I>>>16),wl(c,a.I&65535));ul(a);c.wrap>0&&(c.wrap=-c.wrap);return c.pending!==0?0:1}
;var Hl={};Hl=function(){this.input=null;this.ob=this.na=this.mb=0;this.output=null;this.jd=this.S=this.Fb=0;this.msg="";this.state=null;this.Ic=2;this.I=0};var Il=Object.prototype.toString;
function Jl(a){if(!(this instanceof Jl))return new Jl(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&a.windowBits>0?a.windowBits=-a.windowBits:a.gzip&&a.windowBits>0&&a.windowBits<16&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.K=new Hl;this.K.S=0;var b=this.K;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;c===-1&&(c=6);e<0?(h=0,e=-e):e>15&&(h=2,e-=16);if(f<1||f>
9||d!==8||e<8||e>15||c<0||c>9||g<0||g>4)b=sl(b,-2);else{e===8&&(e=9);var k=new Fl;b.state=k;k.K=b;k.wrap=h;k.H=null;k.ld=e;k.la=1<<k.ld;k.cb=k.la-1;k.Nc=f+7;k.qc=1<<k.Nc;k.La=k.qc-1;k.Ma=~~((k.Nc+3-1)/3);k.window=new N.qb(k.la*2);k.head=new N.Ja(k.qc);k.Ia=new N.Ja(k.la);k.Sb=1<<f+6;k.za=k.Sb*4;k.aa=new N.qb(k.za);k.Ob=1*k.Sb;k.Pc=3*k.Sb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.ob=b.jd=0;b.Ic=2;c=b.state;c.pending=0;c.Vb=0;c.wrap<0&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.I=c.wrap===2?
0:1;c.Bb=0;if(!ql){d=Array(16);for(f=g=0;f<28;f++)for(Vk[f]=g,e=0;e<1<<Nk[f];e++)Uk[g++]=f;Uk[g-1]=f;for(f=g=0;f<16;f++)for(Wk[f]=g,e=0;e<1<<Ok[f];e++)Tk[g++]=f;for(g>>=7;f<30;f++)for(Wk[f]=g<<7,e=0;e<1<<Ok[f]-7;e++)Tk[256+g++]=f;for(e=0;e<=15;e++)d[e]=0;for(e=0;e<=143;)Rk[e*2+1]=8,e++,d[8]++;for(;e<=255;)Rk[e*2+1]=9,e++,d[9]++;for(;e<=279;)Rk[e*2+1]=7,e++,d[7]++;for(;e<=287;)Rk[e*2+1]=8,e++,d[8]++;fl(Rk,287,d);for(e=0;e<30;e++)Sk[e*2+1]=5,Sk[e*2]=el(e,5);Yk=new Xk(Rk,Nk,257,286,15);Zk=new Xk(Sk,
Ok,0,30,15);$k=new Xk([],Pk,0,19,7);ql=!0}c.sc=new al(c.ra,Yk);c.jc=new al(c.fb,Zk);c.pd=new al(c.ja,$k);c.oa=0;c.ia=0;gl(c);c=0}else c=sl(b,-2);c===0&&(b=b.state,b.Ud=2*b.la,tl(b.head),b.Rc=El[b.level].Le,b.wd=El[b.level].Ae,b.Cd=El[b.level].Ne,b.Ad=El[b.level].Ke,b.v=0,b.va=0,b.B=0,b.sa=0,b.T=b.wa=2,b.kb=0,b.R=0);b=c}}else b=-2;if(b!==0)throw Error(Lk[b]);a.header&&(b=this.K)&&b.state&&b.state.wrap===2&&(b.state.H=a.header);if(a.dictionary){var l;typeof a.dictionary==="string"?l=Ek(a.dictionary):
Il.call(a.dictionary)==="[object ArrayBuffer]"?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.K;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,b===2||b===1&&l.status!==42||l.B)b=-2;else{b===1&&(a.I=Fk(a.I,f,g,0));l.wrap=0;g>=l.la&&(b===0&&(tl(l.head),l.v=0,l.va=0,l.sa=0),c=new N.qb(l.la),N.ub(c,f,g-l.la,l.la,0),f=c,g=l.la);c=a.na;d=a.mb;e=a.input;a.na=g;a.mb=0;a.input=f;for(yl(l);l.B>=3;){f=l.v;g=l.B-2;do l.R=(l.R<<l.Ma^l.window[f+3-1])&l.La,l.Ia[f&l.cb]=l.head[l.R],l.head[l.R]=f,f++;while(--g);
l.v=f;l.B=2;yl(l)}l.v+=l.B;l.va=l.v;l.sa=l.B;l.B=0;l.T=l.wa=2;l.kb=0;a.mb=d;a.input=e;a.na=c;l.wrap=b;b=0}else b=-2;if(b!==0)throw Error(Lk[b]);this.sh=!0}}
Jl.prototype.push=function(a,b){var c=this.K,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:b===!0?4:0;typeof a==="string"?c.input=Ek(a):Il.call(a)==="[object ArrayBuffer]"?c.input=new Uint8Array(a):c.input=a;c.mb=0;c.na=c.input.length;do{c.S===0&&(c.output=new N.qb(d),c.Fb=0,c.S=d);a=Gl(c,e);if(a!==1&&a!==0)return Kl(this,a),this.ended=!0,!1;if(c.S===0||c.na===0&&(e===4||e===2))if(this.options.to==="string"){var f=N.dd(c.output,c.Fb);b=f;f=f.length;if(f<65537&&(b.subarray&&Dk||!b.subarray))b=
String.fromCharCode.apply(null,N.dd(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.dd(c.output,c.Fb),this.chunks.push(b)}while((c.na>0||c.S===0)&&a!==1);if(e===4)return(c=this.K)&&c.state?(d=c.state.status,d!==42&&d!==69&&d!==73&&d!==91&&d!==103&&d!==113&&d!==666?a=sl(c,-2):(c.state=null,a=d===113?sl(c,-3):0)):a=-2,Kl(this,a),this.ended=!0,a===0;e===2&&(Kl(this,0),c.S=0);return!0};
function Kl(a,b){b===0&&(a.result=a.options.to==="string"?a.chunks.join(""):N.ud(a.chunks));a.chunks=[];a.err=b;a.msg=a.K.msg}
function Ll(a,b){b=b||{};b.gzip=!0;b=new Jl(b);b.push(a,!0);if(b.err)throw b.msg||Lk[b.err];return b.result}
;function Ml(a){return a?(a=a.privateDoNotAccessOrElseSafeScriptWrappedValue)?Hb(a):null:null}
function Nl(a){return a?(a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue)?ob(a):null:null}
;function Ol(a){return ob(a===null?"null":a===void 0?"undefined":a)}
;function Pl(a){this.name=a}
;var Ql=new Pl("rawColdConfigGroup");var Rl=new Pl("rawHotConfigGroup");function Sl(a){this.F=J(a)}
w(Sl,L);function Tl(a){this.F=J(a)}
w(Tl,L);Tl.prototype.setTrackingParams=function(a){if(a!=null)if(typeof a==="string")a=a?new yd(a,xd):Ad||(Ad=new yd(null,xd));else if(a.constructor!==yd)if(wd(a))a=a.length?new yd(new Uint8Array(a),xd):Ad||(Ad=new yd(null,xd));else throw Error();return ef(this,1,a)};var Ul=new Pl("continuationCommand");var Vl=new Pl("webCommandMetadata");var Wl=new Pl("signalServiceEndpoint");var Xl={Tf:"EMBEDDED_PLAYER_MODE_UNKNOWN",Qf:"EMBEDDED_PLAYER_MODE_DEFAULT",Sf:"EMBEDDED_PLAYER_MODE_PFP",Rf:"EMBEDDED_PLAYER_MODE_PFL"};var Yl=new Pl("feedbackEndpoint");var ee={Vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNKNOWN",pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_FOR_TESTING",Gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_RESUME_TO_HOME_TTL",Ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_START_TO_SHORTS_ANALYSIS_SLICE",fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_DEVICE_LAYER_SLICE",Ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_UNIFIED_LAYER_SLICE",Xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_VISITOR_LAYER_SLICE",Mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SHOW_SHEET_COMMAND_HANDLER_BLOCK",
Zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_MIGRATED_COMPONENT",Yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WIZ_NEXT_CHANNEL_NAME_TOOLTIP",Jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATION_LOCK_SUPPORTED",Pg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_THEATER_MODE_ENABLED",eh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_PIN_SUGGESTION",dh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_LONG_PRESS_EDU_TOAST",bh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_AMBIENT",Qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TIME_WATCHED_PANEL",
Lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SEARCH_FROM_SEARCH_BAR_OVERLAY",fh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_SHOW_VOICE_SEARCH_EDU_TOAST",Og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_SUGGESTED_LANGUAGE_SELECTED",gh:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_TRIGGER_SHORTS_PIP",wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IN_ZP_VOICE_CRASHY_SET",Cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_SUPPRESSED",Bg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_FAST_SWIPE_ALLOWED",Eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_PULL_TO_REFRESH_ATTEMPT",
ah:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_WOULD_BLOCK_KABUKI",Fg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_TALL_SCREEN",Dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_REEL_NORMAL_SCREEN",Xf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_ENABLED",Wf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ACCESSIBILITY_MODE_DISABLED",Yf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_AUTOPLAY_ENABLED",Zf:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_CAST_MATCH_OCCURRED",ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_ELIGIBLE",lg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ENDSCREEN_TRIGGERED",
Ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_TRIGGERED",zg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_POSTPLAY_LACT_THRESHOLD_EXCEEDED",qg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MATCHED_ON_REMOTE_CONNECTION",sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHABLE_ON_REMOTE_CONNECTION",rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_MISATTRIBUTED_ON_REMOTE_CONNECTION",vg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_TV_IS_SIGNED_IN_ON_REMOTE_CONNECTION",Sg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_COLD_ON_REMOTE_CONNECTION",
Tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TV_START_TYPE_NON_COLD_ON_REMOTE_CONNECTION",yg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ON_REMOTE_CONNECTION",eg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_VALID",cg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_INVALID",dg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_UNDEFINED",ag:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_COBALT_PERSISTENT_SETTINGS_TEST_DEFINED",xg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_LACT_THRESHOLD_EXCEEDED",
Kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROUND_TRIP_HANDLING_ON_REMOTE_CONNECTION",ug:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_BEFORE_APP_RELOAD",tg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_IDENTITIES_STATE_SWITCHED_ON_REMOTE_CONNECTION_AFTER_APP_RELOAD",jg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_INELIGIBLE",Rg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_TVHTML5_MID_ROLL_THRESHOLD_REACHED",ng:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_PENDING",
mg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_ACTIVATED",kg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMC3DS_M2_ELIGIBLE",Hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_LANDSCAPE",Ig:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ROTATE_DEVICE_TO_PORTRAIT",hg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EMBEDS_FACEOFF_UI_EVENT",og:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_EXP_COBALT_HTTP3_CONFIG_RECEIVED",gg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_ELIGIBLE_TO_SUPPRESS_TRANSPORT_CONTROLS_BUTTONS",
Wg:"GENERIC_CLIENT_EXPERIMENT_EVENT_TYPE_USER_HAS_THEATER_MODE_COOKIE_ENABLED"};var Zl=new Pl("shareEndpoint"),$l=new Pl("shareEntityEndpoint"),am=new Pl("shareEntityServiceEndpoint"),bm=new Pl("webPlayerShareEntityServiceEndpoint");var cm=new Pl("playlistEditEndpoint");var dm=new Pl("modifyChannelNotificationPreferenceEndpoint");var em=new Pl("unsubscribeEndpoint");var fm=new Pl("subscribeEndpoint");function gm(){var a=hm;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function im(a){D("yt.ads.biscotti.lastId_",a)}
;function jm(a,b){b.length>1?a[b[0]]=b[1]:b.length===1&&Object.assign(a,b[0])}
;var km=C.window,lm,mm,nm=(km==null?void 0:(lm=km.yt)==null?void 0:lm.config_)||(km==null?void 0:(mm=km.ytcfg)==null?void 0:mm.data_)||{};D("yt.config_",nm);function om(){jm(nm,arguments)}
function P(a,b){return a in nm?nm[a]:b}
function pm(a){var b=nm.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var qm=[];function rm(a){qm.forEach(function(b){return b(a)})}
function sm(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){tm(b)}}:a}
function tm(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=P("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),om("ERRORS",b));rm(a)}
function um(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=P("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),om("ERRORS",f))}
;var wm=/^[\w.]*$/,xm={q:!0,search_query:!0};function ym(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(f.length===1&&f[0]||f.length===2)try{var g=zm(f[0]||""),h=zm(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?Yb(k,h):c[g]=[k,h]}else c[g]=h}catch(p){var l=p,m=f[0],n=String(ym);l.args=[{key:m,value:f[1],query:a,method:Am===n?"unchanged":n}];xm.hasOwnProperty(m)||um(l)}}return c}
var Am=String(ym);function Bm(a){var b=[];rg(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];Sb(c,function(f){f==""?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function Cm(a){a.charAt(0)==="?"&&(a=a.substring(1));return ym(a,"&")}
function Dm(a){return a.indexOf("?")!==-1?(a=(a||"").split("#")[0],a=a.split("?",2),Cm(a.length>1?a[1]:a[0])):{}}
function Em(a,b){return Fm(a,b||{},!0)}
function Fm(a,b,c){var d=a.split("#",2);a=d[0];d=d.length>1?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Cm(e[1]||"");for(var f in b)!c&&e!==null&&f in e||(e[f]=b[f]);return nc(a,e)+d}
function Gm(a){if(!b)var b=window.location.href;var c=hc(1,a),d=ic(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?ic(b)===d&&(Number(hc(4,b))||null)===(Number(hc(4,a))||null):!0;return a}
function zm(a){return a&&a.match(wm)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Hm(a){var b=Im;a=a===void 0?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Tj;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Pa){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=g===void 0?Lj:g;try{var h=g.history.length}catch(Pa){h=0}e.u_his=h;var k;e.u_h=(k=Lj.screen)==null?void 0:k.height;var l;e.u_w=(l=Lj.screen)==null?void 0:l.width;var m;e.u_ah=(m=Lj.screen)==null?void 0:m.availHeight;var n;e.u_aw=
(n=Lj.screen)==null?void 0:n.availWidth;var p;e.u_cd=(p=Lj.screen)==null?void 0:p.colorDepth}catch(Pa){}h=b.h;try{var t=h.screenX;var u=h.screenY}catch(Pa){}try{var x=h.outerWidth;var z=h.outerHeight}catch(Pa){}try{var H=h.innerWidth;var K=h.innerHeight}catch(Pa){}try{var da=h.screenLeft;var ea=h.screenTop}catch(Pa){}try{H=h.innerWidth,K=h.innerHeight}catch(Pa){}try{var Oa=h.screen.availWidth;var Ob=h.screen.availTop}catch(Pa){}t=[da,ea,t,u,Oa,Ob,x,z,H,K];try{var ka=(b.h.top||window).document,Ya=
ka.compatMode=="CSS1Compat"?ka.documentElement:ka.body;var Qa=(new qg(Ya.clientWidth,Ya.clientHeight)).round()}catch(Pa){Qa=new qg(-12245933,-12245933)}ka=Qa;Qa={};var Ra=Ra===void 0?C:Ra;Ya=new Zj;"SVGElement"in Ra&&"createElementNS"in Ra.document&&Ya.set(0);u=Qj();u["allow-top-navigation-by-user-activation"]&&Ya.set(1);u["allow-popups-to-escape-sandbox"]&&Ya.set(2);Ra.crypto&&Ra.crypto.subtle&&Ya.set(3);"TextDecoder"in Ra&&"TextEncoder"in Ra&&Ya.set(4);Ra=ak(Ya);Qa.bc=Ra;Qa.bih=ka.height;Qa.biw=
ka.width;Qa.brdim=t.join();b=b.i;b=(Qa.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Qa.wgl=!!Lj.WebGLRenderingContext,Qa);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Im=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return Bm(Hm(a))});ab();navigator.userAgent.indexOf(" (CrKey ");var Jm="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Km(){if(!Jm)return null;var a=Jm();return"open"in a?a:null}
function Lm(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function Mm(a,b){typeof a==="function"&&(a=sm(a));return window.setTimeout(a,b)}
;var Nm="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(ra(Nm),["client_dev_set_cookie"]);function R(a){a=Om(a);return typeof a==="string"&&a==="false"?!1:!!a}
function S(a,b){a=Om(a);return a===void 0&&b!==void 0?b:Number(a||0)}
function Om(a){return P("EXPERIMENT_FLAGS",{})[a]}
function Pm(){for(var a=[],b=P("EXPERIMENTS_FORCED_FLAGS",{}),c=y(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=P("EXPERIMENT_FLAGS",{});d=y(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&b[e]===void 0&&a.push({key:e,value:String(c[e])});return a}
;var Qm={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Rm="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ra(Nm)),Sm=!1;function Tm(a,b,c,d,e,f,g,h){function k(){(l&&"readyState"in l?l.readyState:0)===4&&b&&sm(b)(l)}
c=c===void 0?"GET":c;d=d===void 0?"":d;h=h===void 0?!1:h;var l=Km();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;R("debug_forward_web_query_parameters")&&(a=Um(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c=c==="POST"&&(window.FormData===void 0||!(d instanceof FormData));if(e=Vm(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"===m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(n){um(n)}}l.send(d);return l}
function Vm(a,b){b=b===void 0?{}:b;var c=Gm(a),d=P("INNERTUBE_CLIENT_NAME"),e=R("web_ajax_ignore_global_headers_if_set"),f;for(f in Qm){var g=P(Qm[f]),h=f==="X-Goog-AuthUser"||f==="X-Goog-PageId";f!=="X-Goog-Visitor-Id"||g||(g=P("VISITOR_DATA"));var k;if(!(k=!g)){if(!(k=c||(ic(a)?!1:!0))){k=a;var l;if(l=R("add_auth_headers_to_remarketing_google_dot_com_ping")&&f==="Authorization"&&(d==="TVHTML5"||d==="TVHTML5_UNPLUGGED"||d==="TVHTML5_SIMPLY"))l=ic(k),l=l!==null?l.split(".").reverse():null,l=l===null?
!1:l[1]==="google"?!0:l[2]==="google"?l[0]==="au"&&l[1]==="com"?!0:l[0]==="uk"&&l[1]==="co"?!0:!1:!1;l&&(k=fc(hc(5,k))||"",k=k.split("/"),k="/"+(k.length>1?k[1]:""),l=k==="/pagead");k=l?!0:!1}k=!k}k||e&&b[f]!==void 0||d==="TVHTML5_UNPLUGGED"&&h||(b[f]=g)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!ic(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!ic(a)){try{var m=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(n){}m&&
(b["X-YouTube-Time-Zone"]=m)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&ic(a)||(b["X-YouTube-Ad-Signals"]=Bm(Hm()));return b}
function Wm(a,b){b.method="POST";b.postParams||(b.postParams={});return Xm(a,b)}
function Xm(a,b){var c=b.format||"JSON";a=Ym(a,b);var d=Zm(a,b),e=!1,f=$m(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=Lm(k),m=null,n=400<=k.status&&k.status<500,p=500<=k.status&&k.status<600;if(l||n||p)m=an(a,c,k,b.convertToSafeHtml);l&&(l=bn(c,k,m));m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&d>0){var g=b.onTimeout;var h=Mm(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Ym(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Em(a,b);return a}
function Zm(a,b){var c=P("XSRF_FIELD_NAME"),d=P("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=P("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||ic(a)&&!b.withCredentials&&ic(a)!==document.location.hostname||b.method!=="POST"||h&&h!=="application/x-www-form-urlencoded"||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(R("ajax_parse_query_data_only_when_filled")&&f&&Object.keys(f).length>0||f)&&typeof e==="string"&&(e=Cm(e),Bg(e,f),e=b.postBodyFormat&&b.postBodyFormat===
"JSON"?JSON.stringify(e):mc(e));f=e||f&&!ug(f);!Sm&&f&&b.method!=="POST"&&(Sm=!0,tm(Error("AJAX request with postData should use POST")));return e}
function an(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,um(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&a.indexOf("json")>=0&&(f.substring(0,5)===")]}'\n"&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?cn(a):null)e={},Sb(a.getElementsByTagName("*"),function(g){e[g.tagName]=dn(g)})}d&&en(e);
return e}
function en(a){if(Sa(a))for(var b in a){var c;(c=b==="html_content")||(c=b.length-5,c=c>=0&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];var e=mb();d=new Eb(e?e.createHTML(d):d);a[c]=d}else en(a[b])}}
function bn(a,b,c){if(b&&b.status===204)return!0;switch(a){case "JSON":return!!c;case "XML":return Number(c&&c.return_code)===0;case "RAW":return!0;default:return!!c}}
function cn(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&a.length>0?a[0]:null:null}
function dn(a){var b="";Sb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Um(a){var b=window.location.search,c=ic(a);R("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Gm(a)&&(c=document.location.hostname);var d=fc(hc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Cm(b),f={};Sb(Rm,function(g){e[g]&&(f[g]=e[g])});
return Fm(a,f||{},!1)}
var $m=Tm;var fn=[{Sc:function(a){return"Cannot read property '"+a.key+"'"},
wc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Sc:function(a){return"Cannot call '"+a.key+"'"},
wc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Sc:function(a){return a.key+" is not defined"},
wc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var hn={Ya:[],Ta:[{callback:gn,weight:500}]};function gn(a){if(a.name==="JavaException")return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function jn(){this.Ta=[];this.Ya=[]}
var kn;function ln(){if(!kn){var a=kn=new jn;a.Ya.length=0;a.Ta.length=0;hn.Ya&&a.Ya.push.apply(a.Ya,hn.Ya);hn.Ta&&a.Ta.push.apply(a.Ta,hn.Ta)}return kn}
;var mn=new M;function nn(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=on(b);if(e===Infinity)break;var f=e>>3;switch(e&7){case 0:e=on(b);if(f===2)return e;break;case 1:if(f===2)return;d+=8;break;case 2:e=on(b);if(f===2)return a.substr(d,e);d+=e;break;case 5:if(f===2)return;d+=4;break;default:return}}while(d<c)}
function on(a){var b=a(),c=b&127;if(b<128)return c;b=a();c|=(b&127)<<7;if(b<128)return c;b=a();c|=(b&127)<<14;if(b<128)return c;b=a();return b<128?c|(b&127)<<21:Infinity}
;function pn(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=qn(d,a[d],b,c),e>500));d++);d=e}else if(typeof a==="object")for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f=typeof g!=="string"||f!=="clickTrackingParams"&&f!=="trackingParams"?0:(g=nn(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?qn(f+".ve",g,h,k):0;d+=f;d+=qn(e,a[e],b,c);if(d>500)break}}else c[b]=rn(a),d+=c[b].length;else c[b]=rn(a),d+=c[b].length;return d}
function qn(a,b,c,d){c+="."+a;a=rn(b);d[c]=a;return c.length+a.length}
function rn(a){try{return(typeof a==="string"?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function sn(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function tn(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function un(){this.Nd=!0}
function vn(){un.h||(un.h=new un);return un.h}
function wn(a,b){a={};var c=[];"USER_SESSION_ID"in nm&&c.push({key:"u",value:P("USER_SESSION_ID")});if(c=jg(c))a.Authorization=c,c=b=b==null?void 0:b.sessionIndex,c===void 0&&(c=Number(P("SESSION_INDEX",0)),c=isNaN(c)?0:c),R("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in nm||(a["X-Origin"]=window.location.origin),b===void 0&&"DELEGATED_SESSION_ID"in nm&&(a["X-Goog-PageId"]=P("DELEGATED_SESSION_ID"));return a}
;var xn={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function yn(a,b,c,d,e){gg.set(""+a,b,{Ub:c,path:"/",domain:d===void 0?"youtube.com":d,secure:e===void 0?!1:e})}
function zn(a){return gg.get(""+a,void 0)}
function An(a,b,c){gg.remove(""+a,b===void 0?"/":b,c===void 0?"youtube.com":c)}
function Bn(){if(R("embeds_web_enable_cookie_detection_fix")){if(!C.navigator.cookieEnabled)return!1}else if(!gg.isEnabled())return!1;if(gg.h.cookie)return!0;R("embeds_web_enable_cookie_detection_fix")?gg.set("TESTCOOKIESENABLED","1",{Ub:60,cf:"none",secure:!0}):gg.set("TESTCOOKIESENABLED","1",{Ub:60});if(gg.get("TESTCOOKIESENABLED")!=="1")return!1;gg.remove("TESTCOOKIESENABLED");return!0}
;var Cn=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",Cn);function Dn(){this.h=P("ALT_PREF_COOKIE_NAME","PREF");this.i=P("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=zn(this.h);a&&this.parse(a)}
var En;function Fn(){En||(En=new Dn);return En}
r=Dn.prototype;r.get=function(a,b){Gn(a);Hn(a);a=Cn[a]!==void 0?Cn[a].toString():null;return a!=null?a:b?b:""};
r.set=function(a,b){Gn(a);Hn(a);if(b==null)throw Error("ExpectedNotNull");Cn[a]=b.toString()};
function In(a){return!!((Jn("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
r.remove=function(a){Gn(a);Hn(a);delete Cn[a]};
r.clear=function(){for(var a in Cn)delete Cn[a]};
function Hn(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Gn(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Jn(a){a=Cn[a]!==void 0?Cn[a].toString():null;return a!=null&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
r.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Cn[d]=c.toString())}};var Kn={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ln={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function Mn(){var a=C.navigator;return a?a.connection:void 0}
function Nn(){var a=Mn();if(a){var b=Kn[a.type||"unknown"]||"CONN_UNKNOWN";a=Kn[a.effectiveType||"unknown"]||"CONN_UNKNOWN";b==="CONN_CELLULAR_UNKNOWN"&&a!=="CONN_UNKNOWN"&&(b=a);if(b!=="CONN_UNKNOWN")return b;if(a!=="CONN_UNKNOWN")return a}}
function On(){var a=Mn();if(a!=null&&a.effectiveType)return Ln.hasOwnProperty(a.effectiveType)?Ln[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function T(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ra(b))}
w(T,Error);function Pn(){try{return Qn(),!0}catch(a){return!1}}
function Qn(a){if(P("DATASYNC_ID")!==void 0)return P("DATASYNC_ID");throw new T("Datasync ID not set",a===void 0?"unknown":a);}
;function Rn(){}
function Sn(a,b){return Yj.Ra(a,0,b)}
Rn.prototype.ma=function(a,b){return this.Ra(a,1,b)};
Rn.prototype.Kb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var Tn=S("web_emulated_idle_callback_delay",300),Un=1E3/60-3,Vn=[8,5,4,3,2,1,0];
function Wn(a){a=a===void 0?{}:a;F.call(this);this.i=[];this.j={};this.Z=this.h=0;this.Y=this.u=!1;this.P=[];this.U=this.ha=!1;for(var b=y(Vn),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.o=0;this.Gc=a.timeout||1;this.G=Un;this.D=0;this.xa=this.Pe.bind(this);this.Fc=this.wf.bind(this);this.Pa=this.ae.bind(this);this.Qa=this.Be.bind(this);this.sb=this.We.bind(this);this.Fa=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!R("disable_scheduler_requestIdleCallback");(this.pa=a.useRaf!==
!1&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.xa)}
w(Wn,F);r=Wn.prototype;r.Kb=function(a){var b=ab();Xn(this,a);a=ab()-b;this.u||(this.G-=a)};
r.Ra=function(a,b,c){++this.Z;if(b===10)return this.Kb(a),this.Z;var d=this.Z;this.j[d]=a;this.u&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.Y||this.u||(this.h!==0&&Yn(this)!==this.D&&this.stop(),this.start()));return d};
r.qa=function(a){delete this.j[a]};
function Zn(a){a.P.length=0;for(var b=5;b>=0;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
r.isHidden=function(){return!!document.hidden||!1};
function $n(a){return!a.isHidden()&&a.pa}
function Yn(a){if(a.i[8].length){if(a.U)return 4;if($n(a))return 3}for(var b=5;b>=a.o;b--)if(a.i[b].length>0)return b>0?$n(a)?3:2:1;return 0}
r.Ha=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Xn(a,b){try{b()}catch(c){a.Ha(c)}}
function ao(a){for(var b=y(Vn),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
r.Be=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ha=!0;bo(this,b);this.ha=!1};
r.wf=function(){bo(this)};
r.ae=function(){co(this)};
r.We=function(a){this.U=!0;var b=Yn(this);b===4&&b!==this.D&&(this.stop(),this.start());bo(this,void 0,a);this.U=!1};
r.Pe=function(){this.isHidden()||co(this);this.h&&(this.stop(),this.start())};
function co(a){a.stop();a.u=!0;for(var b=ab(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Xn(a,e)}eo(a);a.u=!1;ao(a)&&a.start();b=ab()-b;a.G-=b}
function eo(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function bo(a,b,c){a.U&&a.D===4&&a.h||a.stop();a.u=!0;b=ab()+(b||a.G);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Ha(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Xn(a,f);d=a.ha?0:1;d=a.o>d?a.o:d;if(!(ab()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Xn(a,c)}while(c&&ab()<b)}a.u=!1;eo(a);a.G=Un;ao(a)&&a.start()}
r.start=function(){this.Y=!1;if(this.h===0)switch(this.D=Yn(this),this.D){case 1:var a=this.Qa;this.h=this.Fa?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,Tn);break;case 2:this.h=window.setTimeout(this.Fc,this.Gc);break;case 3:this.h=window.requestAnimationFrame(this.sb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
r.pause=function(){this.stop();this.Y=!0};
r.stop=function(){if(this.h){switch(this.D){case 1:var a=this.h;this.Fa?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
r.ba=function(){Zn(this);this.stop();this.pa&&document.removeEventListener("visibilitychange",this.xa);F.prototype.ba.call(this)};var fo=E("yt.scheduler.instance.timerIdMap_")||{},go=S("kevlar_tuner_scheduler_soft_state_timer_ms",800),ho=0,io=0;function jo(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.ea)a=new Wn(P("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function ko(){lo();var a=E("ytglobal.schedulerInstanceInstance_");a&&(zc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function lo(){Zn(jo());for(var a in fo)fo.hasOwnProperty(a)&&delete fo[Number(a)]}
function mo(a,b,c){if(!c)return c=c===void 0,-jo().Ra(a,b,c);var d=window.setTimeout(function(){var e=jo().Ra(a,b);fo[d]=e},c);
return d}
function no(a){jo().Kb(a)}
function oo(a){var b=jo();if(a<0)b.qa(-a);else{var c=fo[a];c?(b.qa(c),delete fo[a]):window.clearTimeout(a)}}
function po(){qo()}
function qo(){window.clearTimeout(ho);jo().start()}
function ro(){jo().pause();window.clearTimeout(ho);ho=window.setTimeout(po,go)}
function so(){window.clearTimeout(io);io=window.setTimeout(function(){to(0)},go)}
function to(a){so();var b=jo();b.o=a;b.start()}
function uo(a){so();var b=jo();b.o>a&&(b.o=a,b.start())}
function vo(){window.clearTimeout(io);var a=jo();a.o=0;a.start()}
;function wo(){Rn.apply(this,arguments)}
w(wo,Rn);function xo(){wo.h||(wo.h=new wo);return wo.h}
wo.prototype.Ra=function(a,b,c){c!==void 0&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):c===void 0?(a(),NaN):Mm(a,c||0)};
wo.prototype.qa=function(a){if(a===void 0||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
wo.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
wo.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var Yj=xo();
R("web_scheduler_auto_init")&&!E("yt.scheduler.initialized")&&(D("yt.scheduler.instance.dispose",ko),D("yt.scheduler.instance.addJob",mo),D("yt.scheduler.instance.addImmediateJob",no),D("yt.scheduler.instance.cancelJob",oo),D("yt.scheduler.instance.cancelAllJobs",lo),D("yt.scheduler.instance.start",qo),D("yt.scheduler.instance.pause",ro),D("yt.scheduler.instance.setPriorityThreshold",to),D("yt.scheduler.instance.enablePriorityThreshold",uo),D("yt.scheduler.instance.clearPriorityThreshold",vo),D("yt.scheduler.initialized",
!0));function yo(a){var b=new yk;this.h=(a=b.isAvailable()?a?new zk(b,a):b:null)?new tk(a):null;this.i=document.domain||window.location.hostname}
yo.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+c*1E3);return}catch(f){}var e="";if(d)try{e=escape((new Pi).serialize(b))}catch(f){return}else e=escape(b);yn(a,e,c,this.i)};
yo.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=zn(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
yo.prototype.remove=function(a){this.h&&this.h.remove(a);An(a,"/",this.i)};var zo=function(){var a;return function(){a||(a=new yo("ytidb"));return a}}();
function Ao(){var a;return(a=zo())==null?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Bo=[],Co,Do=!1;function Eo(){var a={};for(Co=new Fo(a.handleError===void 0?Go:a.handleError,a.logEvent===void 0?Ho:a.logEvent);Bo.length>0;)switch(a=Bo.shift(),a.type){case "ERROR":Co.Ha(a.payload);break;case "EVENT":Co.logEvent(a.eventType,a.payload)}}
function Io(a){Do||(Co?Co.Ha(a):(Bo.push({type:"ERROR",payload:a}),Bo.length>10&&Bo.shift()))}
function Jo(a,b){Do||(Co?Co.logEvent(a,b):(Bo.push({type:"EVENT",eventType:a,payload:b}),Bo.length>10&&Bo.shift()))}
;function Ko(a){if(a.indexOf(":")>=0)throw Error("Database name cannot contain ':'");}
function Lo(a){return a.substr(0,a.indexOf(":"))||a}
;var Mo=hd||id;function No(a){var b=Sc();return b?b.toLowerCase().indexOf(a)>=0:!1}
;var Oo={},Po=(Oo.AUTH_INVALID="No user identifier specified.",Oo.EXPLICIT_ABORT="Transaction was explicitly aborted.",Oo.IDB_NOT_SUPPORTED="IndexedDB is not supported.",Oo.MISSING_INDEX="Index not created.",Oo.MISSING_OBJECT_STORES="Object stores not created.",Oo.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",Oo.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",Oo.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
Oo.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",Oo.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",Oo.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",Oo.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",Oo),Qo={},Ro=(Qo.AUTH_INVALID="ERROR",Qo.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",Qo.EXPLICIT_ABORT="IGNORED",Qo.IDB_NOT_SUPPORTED="ERROR",Qo.MISSING_INDEX=
"WARNING",Qo.MISSING_OBJECT_STORES="ERROR",Qo.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",Qo.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",Qo.QUOTA_EXCEEDED="WARNING",Qo.QUOTA_MAYBE_EXCEEDED="WARNING",Qo.UNKNOWN_ABORT="WARNING",Qo.INCOMPATIBLE_DB_VERSION="WARNING",Qo),So={},To=(So.AUTH_INVALID=!1,So.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,So.EXPLICIT_ABORT=!1,So.IDB_NOT_SUPPORTED=!1,So.MISSING_INDEX=!1,So.MISSING_OBJECT_STORES=!1,So.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,So.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,So.QUOTA_EXCEEDED=!1,So.QUOTA_MAYBE_EXCEEDED=!0,So.UNKNOWN_ABORT=!0,So.INCOMPATIBLE_DB_VERSION=!1,So);function Uo(a,b,c,d,e){b=b===void 0?{}:b;c=c===void 0?Po[a]:c;d=d===void 0?Ro[a]:d;e=e===void 0?To[a]:e;T.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:self.document===void 0,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,Uo.prototype)}
w(Uo,T);function Vo(a,b){Uo.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},Po.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,Vo.prototype)}
w(Vo,Uo);function Wo(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Wo.prototype)}
w(Wo,Error);var Xo=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Yo(a,b,c,d){b=Lo(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof Uo)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if(e.name==="QuotaExceededError")return new Uo("QUOTA_EXCEEDED",a);if(jd&&e.name==="UnknownError")return new Uo("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Wo)return new Uo("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if(e.name==="InvalidStateError"&&Xo.some(function(f){return e.message.includes(f)}))return new Uo("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if(e.name==="AbortError")return new Uo("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",Ed:e.name})];e.level="WARNING";return e}
function Zo(a,b,c){var d=Ao();return new Uo("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:d==null?void 0:d.hasSucceededOnce}})}
;function $o(a){if(!a)throw Error();throw a;}
function ap(a){return a}
function bp(a){this.h=a}
function cp(a){function b(e){if(d.state.status==="PENDING"){d.state={status:"REJECTED",reason:e};e=y(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if(d.state.status==="PENDING"){d.state={status:"FULFILLED",value:e};e=y(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
cp.all=function(a){return new cp(new bp(function(b,c){var d=[],e=a.length;e===0&&b(d);for(var f={Ab:0};f.Ab<a.length;f={Ab:f.Ab},++f.Ab)cp.resolve(a[f.Ab]).then(function(g){return function(h){d[g.Ab]=h;e--;e===0&&b(d)}}(f)).catch(function(g){c(g)})}))};
cp.resolve=function(a){return new cp(new bp(function(b,c){a instanceof cp?a.then(b,c):b(a)}))};
cp.reject=function(a){return new cp(new bp(function(b,c){c(a)}))};
cp.prototype.then=function(a,b){var c=this,d=a!=null?a:ap,e=b!=null?b:$o;return new cp(new bp(function(f,g){c.state.status==="PENDING"?(c.h.push(function(){dp(c,c,d,f,g)}),c.i.push(function(){ep(c,c,e,f,g)})):c.state.status==="FULFILLED"?dp(c,c,d,f,g):c.state.status==="REJECTED"&&ep(c,c,e,f,g)}))};
cp.prototype.catch=function(a){return this.then(void 0,a)};
function dp(a,b,c,d,e){try{if(a.state.status!=="FULFILLED")throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof cp?fp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function ep(a,b,c,d,e){try{if(a.state.status!=="REJECTED")throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof cp?fp(a,b,f,d,e):d(f)}catch(g){e(g)}}
function fp(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof cp?fp(a,b,f,d,e):d(f)},function(f){e(f)})}
;function gp(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function hp(a){return new Promise(function(b,c){gp(a,b,c)})}
function ip(a){return new cp(new bp(function(b,c){gp(a,b,c)}))}
;function jp(a,b){return new cp(new bp(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var kp=window,U=kp.ytcsi&&kp.ytcsi.now?kp.ytcsi.now:kp.performance&&kp.performance.timing&&kp.performance.now&&kp.performance.timing.navigationStart?function(){return kp.performance.timing.navigationStart+kp.performance.now()}:function(){return(new Date).getTime()};function lp(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(U());this.i=!1}
r=lp.prototype;r.add=function(a,b,c){return mp(this,[a],{mode:"readwrite",ka:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return mp(this,[a],{mode:"readwrite",ka:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.h.close();var a;((a=this.options)==null?0:a.closed)&&this.options.closed()};
r.count=function(a,b){return mp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).count(b)})};
function np(a,b,c){a=a.h.createObjectStore(b,c);return new op(a)}
r.delete=function(a,b){return mp(this,[a],{mode:"readwrite",ka:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return mp(this,[a],{mode:"readonly",ka:!0},function(c){return c.objectStore(a).get(b)})};
function pp(a,b,c){return mp(a,[b],{mode:"readwrite",ka:!0},function(d){d=d.objectStore(b);return ip(d.h.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function mp(a,b,c,d){var e,f,g,h,k,l,m,n,p,t,u,x;return A(function(z){switch(z.h){case 1:var H={mode:"readonly",ka:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};typeof c==="string"?H.mode=c:Object.assign(H,c);e=H;a.transactionCount++;f=e.ka?3:1;g=0;case 2:if(h){z.A(4);break}g++;k=Math.round(U());za(z,5);l=a.h.transaction(b,e.mode);H=z.yield;var K=new qp(l);K=rp(K,d);return H.call(z,K,7);case 7:return m=z.i,n=Math.round(U()),sp(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:p=Ba(z);t=Math.round(U());u=Yo(p,
a.h.name,b.join(),a.h.version);if((x=u instanceof Uo&&!u.h)||g>=f)sp(a,k,t,g,u,b.join(),e),h=u;z.A(2);break;case 4:return z.return(Promise.reject(h))}})}
function sp(a,b,c,d,e,f,g){b=c-b;e?(e instanceof Uo&&(e.type==="QUOTA_EXCEEDED"||e.type==="QUOTA_MAYBE_EXCEEDED")&&Jo("QUOTA_EXCEEDED",{dbName:Lo(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof Uo&&e.type==="UNKNOWN_ABORT"&&(c-=a.j,c<0&&c>=2147483648&&(c=0),Jo("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),tp(a,!1,d,f,b,g.tag),Io(e)):tp(a,!0,d,f,b,g.tag)}
function tp(a,b,c,d,e,f){Jo("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:f===void 0?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.h.name};
function op(a){this.h=a}
r=op.prototype;r.add=function(a,b){return ip(this.h.add(a,b))};
r.autoIncrement=function(){return this.h.autoIncrement};
r.clear=function(){return ip(this.h.clear()).then(function(){})};
function up(a,b,c){a.h.createIndex(b,c,{unique:!1})}
r.count=function(a){return ip(this.h.count(a))};
function vp(a,b){return wp(a,{query:b},function(c){return c.delete().then(function(){return xp(c)})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?vp(this,a):ip(this.h.delete(a))};
r.get=function(a){return ip(this.h.get(a))};
r.index=function(a){try{return new yp(this.h.index(a))}catch(b){if(b instanceof Error&&b.name==="NotFoundError")throw new Wo(a,this.h.name);throw b;}};
r.getName=function(){return this.h.name};
r.keyPath=function(){return this.h.keyPath};
function wp(a,b,c){a=a.h.openCursor(b.query,b.direction);return zp(a).then(function(d){return jp(d,c)})}
function qp(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=Uo;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(k===null)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function rp(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return y(d).next().value})}
qp.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new Uo("EXPLICIT_ABORT");};
qp.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new op(a),this.i.set(a,b));return b};
function yp(a){this.h=a}
r=yp.prototype;r.count=function(a){return ip(this.h.count(a))};
r.delete=function(a){return Ap(this,{query:a},function(b){return b.delete().then(function(){return xp(b)})})};
r.get=function(a){return ip(this.h.get(a))};
r.keyPath=function(){return this.h.keyPath};
r.unique=function(){return this.h.unique};
function Ap(a,b,c){a=a.h.openCursor(b.query===void 0?null:b.query,b.direction===void 0?"next":b.direction);return zp(a).then(function(d){return jp(d,c)})}
function Bp(a,b){this.request=a;this.cursor=b}
function zp(a){return ip(a).then(function(b){return b?new Bp(a,b):null})}
function xp(a){a.cursor.continue(void 0);return zp(a.request)}
Bp.prototype.delete=function(){return ip(this.cursor.delete()).then(function(){})};
Bp.prototype.getValue=function(){return this.cursor.value};
Bp.prototype.update=function(a){return ip(this.cursor.update(a))};function Cp(a,b,c){return new Promise(function(d,e){function f(){p||(p=new lp(g.result,{closed:n}));return p}
var g=b!==void 0?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.de,k=c.blocking,l=c.tf,m=c.upgrade,n=c.closed,p;g.addEventListener("upgradeneeded",function(t){try{if(t.newVersion===null)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(g.transaction===null)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&t.dataLoss!=="none"&&Jo("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:Lo(a)});var u=f(),x=new qp(g.transaction);
m&&m(u,function(z){return t.oldVersion<z&&t.newVersion>=z},x);
x.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){Jo("IDB_UNEXPECTEDLY_CLOSED",{dbName:Lo(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Dp(a,b,c){c=c===void 0?{}:c;return Cp(a,b,c)}
function Ep(a,b){b=b===void 0?{}:b;var c,d,e,f;return A(function(g){if(g.h==1)return za(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.de)&&c.addEventListener("blocked",function(){e()}),g.yield(hp(c),4);
if(g.h!=2)return Aa(g,0);f=Ba(g);throw Yo(f,a,"",-1);})}
;function Fp(a,b){this.name=a;this.options=b;this.j=!0;this.u=this.o=0}
Fp.prototype.i=function(a,b,c){c=c===void 0?{}:c;return Dp(a,b,c)};
Fp.prototype.delete=function(a){a=a===void 0?{}:a;return Ep(this.name,a)};
function Gp(a,b){return new Uo("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Hp(a,b){if(!b)throw Zo("openWithToken",Lo(a.name));return a.open()}
Fp.prototype.open=function(){function a(){var f,g,h,k,l,m,n,p,t,u;return A(function(x){switch(x.h){case 1:return g=(f=Error().stack)!=null?f:"",za(x,2),x.yield(c.i(c.name,c.options.version,e),4);case 4:for(var z=h=x.i,H=c.options,K=[],da=y(Object.keys(H.Gb)),ea=da.next();!ea.done;ea=da.next()){ea=ea.value;var Oa=H.Gb[ea],Ob=Oa.Xe===void 0?Number.MAX_VALUE:Oa.Xe;!(z.h.version>=Oa.Mb)||z.h.version>=Ob||z.h.objectStoreNames.contains(ea)||K.push(ea)}k=K;if(k.length===0){x.A(5);break}l=Object.keys(c.options.Gb);
m=h.objectStoreNames();if(c.u<S("ytidb_reopen_db_retries",0))return c.u++,h.close(),Io(new Uo("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());if(!(c.o<S("ytidb_remake_db_retries",1))){x.A(6);break}c.o++;return x.yield(c.delete(),7);case 7:return Io(new Uo("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:m})),x.return(a());case 6:throw new Vo(m,l);case 5:return x.return(h);case 2:n=Ba(x);
if(n instanceof DOMException?n.name!=="VersionError":"DOMError"in self&&n instanceof DOMError?n.name!=="VersionError":!(n instanceof Object&&"message"in n)||n.message!=="An attempt was made to open a database using a lower version than the existing version."){x.A(8);break}return x.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:p=x.i;t=p.h.version;if(c.options.version!==void 0&&t>c.options.version+1)throw p.close(),c.j=!1,Gp(c,t);return x.return(p);case 8:throw b(),n instanceof
Error&&!R("ytidb_async_stack_killswitch")&&(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),Yo(n,c.name,"",(u=c.options.version)!=null?u:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw Gp(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,tf:b,upgrade:this.options.upgrade};return this.h=d=a()};var Ip=new Fp("YtIdbMeta",{Gb:{databases:{Mb:1}},upgrade:function(a,b){b(1)&&np(a,"databases",{keyPath:"actualName"})}});
function Jp(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Hp(Ip,b),2);c=d.i;return d.return(mp(c,["databases"],{ka:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return ip(f.h.put(a,void 0)).then(function(){})})}))})}
function Kp(a,b){var c;return A(function(d){if(d.h==1)return a?d.yield(Hp(Ip,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function Lp(a,b){var c,d;return A(function(e){return e.h==1?(c=[],e.yield(Hp(Ip,b),2)):e.h!=3?(d=e.i,e.yield(mp(d,["databases"],{ka:!0,mode:"readonly"},function(f){c.length=0;return wp(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return xp(g)})}),3)):e.return(c)})}
function Mp(a){return Lp(function(b){return b.publicName==="LogsDatabaseV2"&&b.userIdentifier!==void 0},a)}
function Np(a,b,c){return Lp(function(d){return c?d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):d.userIdentifier!==void 0&&!a.includes(d.userIdentifier)},b)}
function Op(a){var b,c;return A(function(d){if(d.h==1)return b=Qn("YtIdbMeta hasAnyMeta other"),d.yield(Lp(function(e){return e.userIdentifier!==void 0&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(c.length>0)})}
;var Pp,Qp=new function(){}(new function(){});
function Rp(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=Ao();if((b=a)==null?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=Mo)f=/WebKit\/([0-9]+)/.exec(Sc()),f=!!(f&&parseInt(f[1],10)>=600);f&&(f=/WebKit\/([0-9]+)/.exec(Sc()),f=!(f&&parseInt(f[1],10)>=602));if(f||dd)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
za(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(Jp(d,Qp),4);case 4:return e.yield(Kp("yt-idb-test-do-not-use",Qp),5);case 5:return e.return(!0);case 2:return Ba(e),e.return(!1)}})}
function Sp(){if(Pp!==void 0)return Pp;Do=!0;return Pp=Rp().then(function(a){Do=!1;var b;if((b=zo())!=null&&b.h){var c;b={hasSucceededOnce:((c=Ao())==null?void 0:c.hasSucceededOnce)||a};var d;(d=zo())==null||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function Tp(){return E("ytglobal.idbToken_")||void 0}
function Up(){var a=Tp();return a?Promise.resolve(a):Sp().then(function(b){(b=b?Qp:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Vp=0;function Wp(a,b){Vp||(Vp=Yj.ma(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(Up(),2);case 2:c=h.i;if(!c)return h.return();d=!0;za(h,3);return h.yield(Np(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.A(6);break}f=e[0];return h.yield(Ep(f.actualName),7);case 7:return h.yield(Kp(f.actualName,c),6);case 6:Aa(h,4);break;case 3:g=Ba(h),Io(g),d=!1;case 4:Yj.qa(Vp),Vp=0,d&&Wp(a,b),h.h=0}})}))}
function Xp(){var a;return A(function(b){return b.h==1?b.yield(Up(),2):(a=b.i)?b.return(Op(a)):b.return(!1)})}
new wj;function Yp(a){if(!Pn())throw a=new Uo("AUTH_INVALID",{dbName:a}),Io(a),a;var b=Qn();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Zp(a,b,c,d){var e,f,g,h,k,l;return A(function(m){switch(m.h){case 1:return f=(e=Error().stack)!=null?e:"",m.yield(Up(),2);case 2:g=m.i;if(!g)throw h=Zo("openDbImpl",a,b),R("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),Io(h),h;Ko(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Yp(a);za(m,3);return m.yield(Jp(k,g),5);case 5:return m.yield(Dp(k.actualName,b,d),6);case 6:return m.return(m.i);case 3:return l=Ba(m),za(m,7),m.yield(Kp(k.actualName,
g),9);case 9:Aa(m,8);break;case 7:Ba(m);case 8:throw l;}})}
function $p(a,b,c){c=c===void 0?{}:c;return Zp(a,b,!1,c)}
function aq(a,b,c){c=c===void 0?{}:c;return Zp(a,b,!0,c)}
function bq(a,b){b=b===void 0?{}:b;var c,d;return A(function(e){if(e.h==1)return e.yield(Up(),2);if(e.h!=3){c=e.i;if(!c)return e.return();Ko(a);d=Yp(a);return e.yield(Ep(d.actualName,b),3)}return e.yield(Kp(d.actualName,c),0)})}
function cq(a,b,c){a=a.map(function(d){return A(function(e){return e.h==1?e.yield(Ep(d.actualName,b),2):e.yield(Kp(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function dq(){var a=a===void 0?{}:a;var b,c;return A(function(d){if(d.h==1)return d.yield(Up(),2);if(d.h!=3){b=d.i;if(!b)return d.return();Ko("LogsDatabaseV2");return d.yield(Mp(b),3)}c=d.i;return d.yield(cq(c,a,b),0)})}
function eq(a,b){b=b===void 0?{}:b;var c;return A(function(d){if(d.h==1)return d.yield(Up(),2);if(d.h!=3){c=d.i;if(!c)return d.return();Ko(a);return d.yield(Ep(a,b),3)}return d.yield(Kp(a,c),0)})}
;function fq(a,b){Fp.call(this,a,b);this.options=b;Ko(a)}
w(fq,Fp);function gq(a,b){var c;return function(){c||(c=new fq(a,b));return c}}
fq.prototype.i=function(a,b,c){c=c===void 0?{}:c;return(this.options.shared?aq:$p)(a,b,Object.assign({},c))};
fq.prototype.delete=function(a){a=a===void 0?{}:a;return(this.options.shared?eq:bq)(this.name,a)};
function hq(a,b){return gq(a,b)}
;var iq={},jq=hq("ytGcfConfig",{Gb:(iq.coldConfigStore={Mb:1},iq.hotConfigStore={Mb:1},iq),shared:!1,upgrade:function(a,b){b(1)&&(up(np(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),up(np(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function kq(a){return Hp(jq(),a)}
function lq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:U()},g.yield(kq(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(pp(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function mq(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:U()},h.yield(kq(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(pp(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function nq(a){var b,c;return A(function(d){return d.h==1?d.yield(kq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(mp(b,["coldConfigStore"],{mode:"readwrite",ka:!0},function(e){return Ap(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function oq(a){var b,c;return A(function(d){return d.h==1?d.yield(kq(a),2):d.h!=3?(b=d.i,c=void 0,d.yield(mp(b,["hotConfigStore"],{mode:"readwrite",ka:!0},function(e){return Ap(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function pq(){F.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(ra(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(pq,F);pq.prototype.ba=function(){for(var a=y(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);b>=0&&c.splice(b,1)}this.i.length=0;F.prototype.ba.call(this)};function qq(){this.h=0;this.i=new pq}
function rq(){var a;return(a=E("yt.gcf.config.hotConfigGroup"))!=null?a:P("RAW_HOT_CONFIG_GROUP")}
function sq(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!R("start_client_gcf")){g.A(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.o(b);d=Tp();if(!d){g.A(3);break}if(c){g.A(4);break}return g.yield(oq(d),5);case 5:e=g.i,c=(f=e)==null?void 0:f.config;case 4:return g.yield(lq(c,b,d),3);case 3:if(c)for(var h=c,k=y(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function tq(a,b,c){var d,e,f,g;return A(function(h){if(h.h==1){if(!R("start_client_gcf"))return h.A(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=Tp())?c?h.A(4):h.yield(nq(d),5):h.A(0)}h.h!=4&&(e=h.i,c=(f=e)==null?void 0:f.config);if(!c)return h.A(0);g=c.configData;return h.yield(mq(c,b,g,d),0)})}
function uq(){if(!qq.h){var a=new qq;qq.h=a}a=qq.h;var b=U()-a.h;if(!(a.h!==0&&b<S("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=U());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
qq.prototype.o=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function vq(){return"INNERTUBE_API_KEY"in nm&&"INNERTUBE_API_VERSION"in nm}
function wq(){return{innertubeApiKey:P("INNERTUBE_API_KEY"),innertubeApiVersion:P("INNERTUBE_API_VERSION"),Ce:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),yd:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Dh:P("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION"),Ee:P("INNERTUBE_CONTEXT_HL"),De:P("INNERTUBE_CONTEXT_GL"),Fe:P("INNERTUBE_HOST_OVERRIDE")||"",Ge:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Eh:!!P("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:P("SERIALIZED_CLIENT_CONFIG_DATA")}}
function xq(a){var b={client:{hl:a.Ee,gl:a.De,clientName:a.yd,clientVersion:a.innertubeContextClientVersion,configInfo:a.Ce}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&c!=1&&(b.client.screenDensityFloat=String(c));c=P("EXPERIMENTS_TOKEN","");c!==""&&(b.client.experimentsToken=c);c=Pm();c.length>0&&(b.request={internalExperimentFlags:c});c=a.yd;if((c==="WEB"||c==="MWEB"||c===1||c===2)&&b){var d;b.client.mainAppWebInfo=(d=b.client.mainAppWebInfo)!=
null?d:{};b.client.mainAppWebInfo.webDisplayMode=tn()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(R("web_log_memory_total_kbytes")&&((e=C.navigator)==null?0:e.deviceMemory)){var f;e=(f=C.navigator)==null?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+e*1E6)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=Nn())&&b&&(b.client.connectionType=a);R("web_log_effective_connection_type")&&
(a=On())&&b&&(b.client.effectiveConnectionType=a);R("start_client_gcf")&&(e=uq())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,b&&(b.client.configInfo=b.client.configInfo||{},a&&(b.client.configInfo.coldConfigData=a),f&&(b.client.configInfo.coldHashData=f),e&&(b.client.configInfo.hotHashData=e)));P("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(b.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});!R("fill_delegate_context_in_gel_killswitch")&&(a=P("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=P("INNERTUBE_CONTEXT");var g;if(R("enable_persistent_device_token")&&(a==null?0:(g=a.client)==null?0:g.rolloutToken)){var h;b.client.rolloutToken=a==null?void 0:(h=a.client)==null?void 0:h.rolloutToken}g=Object;h=g.assign;a=b.client;f={};e=y(Object.entries(Cm(P("DEVICE",""))));for(d=e.next();!d.done;d=e.next())c=y(d.value),d=c.next().value,c=c.next().value,d==="cbrand"?f.deviceMake=c:d==="cmodel"?f.deviceModel=c:d==="cbr"?f.browserName=
c:d==="cbrver"?f.browserVersion=c:d==="cos"?f.osName=c:d==="cosver"?f.osVersion=c:d==="cplatform"&&(f.platform=c);b.client=h.call(g,a,f);return b}
function yq(a,b,c){c=c===void 0?{}:c;var d={};P("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":P("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||P("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().th:(a=wn(vn()),R("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var zq=typeof TextEncoder!=="undefined"?new TextEncoder:null,Aq=zq?function(a){return zq.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
e<128?b[c++]=e:(e<2048?b[c++]=e>>6|192:((e&64512)==55296&&d+1<a.length&&(a.charCodeAt(d+1)&64512)==56320?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};var Bq={next:"wn_s",browse:"br_s",search:"sr_s",reel:"r_wrs",player:"ps_s"},Cq={next:"wn_r",browse:"br_r",search:"sr_r",reel:"r_wrr",player:"ps_r"};function Dq(a,b){this.version=a;this.args=b}
Dq.prototype.serialize=function(){return{version:this.version,args:this.args}};function Eq(a,b){this.topic=a;this.h=b}
Eq.prototype.toString=function(){return this.topic};var Fq=E("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.cc;M.prototype.publish=M.prototype.rb;M.prototype.clear=M.prototype.clear;D("ytPubsub2Pubsub2Instance",Fq);var Gq=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",Gq);var Hq=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",Hq);var Iq=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",Iq);
D("ytPubsub2Pubsub2SkipSubKey",null);function Jq(a,b){var c=Kq();c&&c.publish.call(c,a.toString(),a,b)}
function Lq(a){var b=Mq,c=Kq();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Gq[d])try{if(f&&b instanceof Eq&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Sd){var l=new h;h.Sd=l.version}var m=h.Sd}catch(z){}if(!m||k.version!=m)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{m=Reflect;var n=m.construct;
var p=k.args,t=p.length;if(t>0){var u=Array(t);for(k=0;k<t;k++)u[k]=p[k];var x=u}else x=[];f=n.call(m,h,x)}catch(z){throw z.message="yt.pubsub2.Data.deserialize(): "+z.message,z;}}catch(z){throw z.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+z.message,z;}a.call(window,f)}catch(z){tm(z)}},Iq[b.toString()]?E("yt.scheduler.instance")?Yj.ma(g):Mm(g,0):g())});
Gq[d]=!0;Hq[b.toString()]||(Hq[b.toString()]=[]);Hq[b.toString()].push(d);return d}
function Nq(){var a=Oq,b=Lq(function(c){a.apply(void 0,arguments);Pq(b)});
return b}
function Pq(a){var b=Kq();b&&(typeof a==="number"&&(a=[a]),Sb(a,function(c){b.unsubscribeByKey(c);delete Gq[c]}))}
function Kq(){return E("ytPubsub2Pubsub2Instance")}
;function Qq(a,b,c){c=c===void 0?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&Jq("meta_logging_csi_event",{timerName:a,Wh:b})}
;var Rq=void 0,Sq=void 0;function Tq(){Sq||(Sq=Nl(P("WORKER_SERIALIZATION_URL")));return Sq||void 0}
function Uq(){var a=Tq();Rq||a===void 0||(Rq=new Worker(pb(a),void 0));return Rq}
;var Vq=S("max_body_size_to_compress",5E5),Wq=S("min_body_size_to_compress",500),Xq=!0,Yq=0,Zq=0,$q=S("compression_performance_threshold_lr",250),ar=S("slow_compressions_before_abandon_count",4),br=!1,cr=new Map,dr=1,er=!0;function fr(){if(typeof Worker==="function"&&Tq()&&!br){var a=function(c){c=c.data;if(c.op==="gzippedGelBatch"){var d=cr.get(c.key);d&&(gr(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),cr.delete(c.key))}},b=Uq();
b&&(b.addEventListener("message",a),b.onerror=function(){cr.clear()},br=!0)}}
function hr(a,b,c,d,e){e=e===void 0?!1:e;var f={startTime:U(),ticks:{},infos:{}};if(Xq)try{var g=ir(b);if(g!=null&&(g>Vq||g<Wq))d(a,c);else{if(R("gzip_gel_with_worker")&&(R("initial_gzip_use_main_thread")&&!er||!R("initial_gzip_use_main_thread"))){br||fr();var h=Uq();if(h&&!e){cr.set(dr,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:dr});dr++;return}}var k=Ll(Aq(b));gr(k,f,a,c,d)}}catch(l){um(l),d(a,c)}else d(a,c)}
function gr(a,b,c,d,e){er=!1;var f=U();b.ticks.gelc=f;Zq++;R("disable_compression_due_to_performance_degredation")&&f-b.startTime>=$q&&(Yq++,R("abandon_compression_after_N_slow_zips")?Zq===S("compression_disable_point")&&Yq>ar&&(Xq=!1):Xq=!1);jr(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function kr(a){var b=b===void 0?!1:b;var c=c===void 0?!1:c;var d=U(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Xq&&f){if(!a.body)return a;try{var g=c?a.body:typeof a.body==="string"?a.body:JSON.stringify(a.body);f=g;if(!c&&typeof g==="string"){var h=ir(g);if(h!=null&&(h>Vq||h<Wq))return a;c=b?{level:1}:void 0;f=Ll(Aq(g),c);var k=U();e.ticks.gelc=k;if(b){Zq++;if((R("disable_compression_due_to_performance_degredation")||R("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=$q)if(Yq++,R("abandon_compression_after_N_slow_zips")||R("abandon_compression_after_N_slow_zips_lr")){b=Yq/Zq;var l=ar/S("compression_disable_point");Zq>0&&Zq%S("compression_disable_point")===0&&b>=l&&(Xq=!1)}else Xq=!1;jr(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(m){return um(m),a}}else return a}
function ir(a){try{return(new Blob(a.split(""))).size}catch(b){return um(b),null}}
function jr(a){R("gel_compression_csi_killswitch")||!R("log_gel_compression_latency")&&!R("log_gel_compression_latency_lr")||Qq("gel_compression",a,{sampleRate:.1})}
;function lr(a){a=Object.assign({},a);delete a.Authorization;var b=jg();if(b){var c=new ck;c.update(P("INNERTUBE_API_KEY"));c.update(b);a.hash=md(c.digest(),3)}return a}
;var mr;function nr(){mr||(mr=new yo("yt.innertube"));return mr}
function or(a,b,c,d){if(d)return null;d=nr().get("nextId",!0)||1;var e=nr().get("requests",!0)||{};e[d]={method:a,request:b,authState:lr(c),requestTime:Math.round(U())};nr().set("nextId",d+1,86400,!0);nr().set("requests",e,86400,!0);return d}
function pr(a){var b=nr().get("requests",!0)||{};delete b[a];nr().set("requests",b,86400,!0)}
function qr(a){var b=nr().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(Math.round(U())-d.requestTime<6E4)){var e=d.authState,f=lr(yq(!1));xg(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),rr(a,d.method,e,{}));delete b[c]}}nr().set("requests",b,86400,!0)}}
;function sr(a){this.ec=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.yb=function(){};
this.now=Date.now;this.Qb=!1;var b;this.Od=(b=a.Od)!=null?b:100;var c;this.Jd=(c=a.Jd)!=null?c:1;var d;this.Hd=(d=a.Hd)!=null?d:2592E6;var e;this.Gd=(e=a.Gd)!=null?e:12E4;var f;this.Id=(f=a.Id)!=null?f:5E3;var g;this.V=(g=a.V)!=null?g:void 0;this.kc=!!a.kc;var h;this.ic=(h=a.ic)!=null?h:.1;var k;this.yc=(k=a.yc)!=null?k:10;a.handleError&&(this.handleError=a.handleError);a.yb&&(this.yb=a.yb);a.Qb&&(this.Qb=a.Qb);a.ec&&(this.ec=a.ec);this.W=a.W;this.Ca=a.Ca;this.ga=a.ga;this.fa=a.fa;this.sendFn=a.sendFn;
this.Yc=a.Yc;this.Vc=a.Vc;tr(this)&&(!this.W||this.W("networkless_logging"))&&ur(this)}
function ur(a){tr(a)&&!a.Qb&&(a.h=!0,a.kc&&Math.random()<=a.ic&&a.ga.ge(a.V),vr(a),a.fa.ta()&&a.ac(),a.fa.listen(a.Yc,a.ac.bind(a)),a.fa.listen(a.Vc,a.qd.bind(a)))}
r=sr.prototype;r.writeThenSend=function(a,b){var c=this;b=b===void 0?{}:b;if(tr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.ga.set(d,this.V).then(function(e){d.id=e;c.fa.ta()&&wr(c,d)}).catch(function(e){wr(c,d);
xr(c,e)})}else this.sendFn(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=b===void 0?{}:b;if(tr(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.W&&this.W("nwl_skip_retry")&&(e.skipRetry=c);if(this.fa.ta()||this.W&&this.W("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(k.h==1)return k.yield(d.ga.set(e,d.V).catch(function(l){xr(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.ga.set(e,this.V).catch(function(g){d.sendFn(a,b,e.skipRetry);
xr(d,g)})}else this.sendFn(a,b,this.W&&this.W("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=b===void 0?{}:b;if(tr(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){d.id!==void 0?c.ga.xb(d.id,c.V):e=!0;c.fa.lb&&c.W&&c.W("vss_network_hint")&&c.fa.lb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.ga.set(d,this.V).then(function(g){d.id=g;e&&c.ga.xb(d.id,c.V)}).catch(function(g){xr(c,g)})}else this.sendFn(a,b,void 0,!0)};
r.ac=function(){var a=this;if(!tr(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Ca.ma(function(){var b;return A(function(c){if(c.h==1)return c.yield(a.ga.vd("NEW",a.V),2);if(c.h!=3)return b=c.i,b?c.yield(wr(a,b),3):(a.qd(),c.return());a.i&&(a.i=0,a.ac());c.h=0})},this.Od))};
r.qd=function(){this.Ca.qa(this.i);this.i=0};
function wr(a,b){var c;return A(function(d){switch(d.h){case 1:if(!tr(a))throw Error("IndexedDB is not supported: immediateSend");if(b.id===void 0){d.A(2);break}return d.yield(a.ga.Je(b.id,a.V),3);case 3:(c=d.i)||a.yb(Error("The request cannot be found in the database."));case 2:if(yr(a,b,a.Hd)){d.A(4);break}a.yb(Error("Networkless Logging: Stored logs request expired age limit"));if(b.id===void 0){d.A(5);break}return d.yield(a.ga.xb(b.id,a.V),5);case 5:return d.return();case 4:b.skipRetry||(b=zr(a,
b));if(!b){d.A(0);break}if(!b.skipRetry||b.id===void 0){d.A(8);break}return d.yield(a.ga.xb(b.id,a.V),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function zr(a,b){if(!tr(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(m){switch(m.h){case 1:g=Ar(f);(h=Br(f))&&a.W&&a.W("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.W&&a.W("nwl_consider_error_code")&&g||a.W&&!a.W("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.yc)){m.A(2);break}if(!a.fa.Dc){m.A(3);break}return m.yield(a.fa.Dc(),3);case 3:if(a.fa.ta()){m.A(2);break}c(e,f);if(!a.W||!a.W("nwl_consider_error_code")||((k=b)==null?void 0:k.id)===void 0){m.A(6);
break}return m.yield(a.ga.Zc(b.id,a.V,!1),6);case 6:return m.return();case 2:if(a.W&&a.W("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.yc)return m.return();a.potentialEsfErrorCounter++;if(((l=b)==null?void 0:l.id)===void 0){m.A(8);break}return b.sendCount<a.Jd?m.yield(a.ga.Zc(b.id,a.V,!0,h?!1:void 0),12):m.yield(a.ga.xb(b.id,a.V),8);case 12:a.Ca.ma(function(){a.fa.ta()&&a.ac()},a.Id);
case 8:c(e,f),m.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(h.h==1)return((g=b)==null?void 0:g.id)===void 0?h.A(2):h.yield(a.ga.xb(b.id,a.V),2);a.fa.lb&&a.W&&a.W("vss_network_hint")&&a.fa.lb(!0);d(e,f);h.h=0})};
return b}
function yr(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function vr(a){if(!tr(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.ga.vd("QUEUED",a.V).then(function(b){b&&!yr(a,b,a.Gd)?a.Ca.ma(function(){return A(function(c){if(c.h==1)return b.id===void 0?c.A(2):c.yield(a.ga.Zc(b.id,a.V),2);vr(a);c.h=0})}):a.fa.ta()&&a.ac()})}
function xr(a,b){a.Vd&&!a.fa.ta()?a.Vd(b):a.handleError(b)}
function tr(a){return!!a.V||a.ec}
function Ar(a){var b;return(a=a==null?void 0:(b=a.error)==null?void 0:b.code)&&a>=400&&a<=599?!1:!0}
function Br(a){var b;a=a==null?void 0:(b=a.error)==null?void 0:b.code;return!(a!==400&&a!==415)}
;var Cr;
function Dr(){if(Cr)return Cr();var a={};Cr=hq("LogsDatabaseV2",{Gb:(a.LogsRequestsStore={Mb:2},a),shared:!1,upgrade:function(b,c,d){c(2)&&np(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),up(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Cr()}
;function Er(a){return Hp(Dr(),a)}
function Fr(a,b){var c,d,e,f;return A(function(g){if(g.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(Er(b),2);if(g.h!=3)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:P("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(pp(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=U();Gr(c);return g.return(f)})}
function Hr(a,b){var c,d,e,f,g,h,k,l;return A(function(m){if(m.h==1)return c={startTime:U(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},m.yield(Er(b),2);if(m.h!=3)return d=m.i,e=P("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,U()],h=IDBKeyRange.bound(f,g),k="prev",R("use_fifo_for_networkless")&&(k="next"),l=void 0,m.yield(mp(d,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(n){return Ap(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:k},
function(p){p.getValue()&&(l=p.getValue(),a==="NEW"&&(l.status="QUEUED",p.update(l)))})}),3);
c.ticks.tc=U();Gr(c);return m.return(l)})}
function Ir(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Er(b),2);c=d.i;return d.return(mp(c,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",ip(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Jr(a,b,c,d){c=c===void 0?!0:c;var e;return A(function(f){if(f.h==1)return f.yield(Er(b),2);e=f.i;return f.return(mp(e,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),d!==void 0&&(k.options.compress=d),ip(h.h.put(k,void 0)).then(function(){return k})):cp.resolve(void 0)})}))})}
function Kr(a,b){var c;return A(function(d){if(d.h==1)return d.yield(Er(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Lr(a){var b,c;return A(function(d){if(d.h==1)return d.yield(Er(a),2);b=d.i;c=U()-2592E6;return d.yield(mp(b,["LogsRequestsStore"],{mode:"readwrite",ka:!0},function(e){return wp(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return xp(f)})})}),0)})}
function Mr(){A(function(a){return a.yield(dq(),0)})}
function Gr(a){R("nwl_csi_killswitch")||Qq("networkless_performance",a,{sampleRate:1})}
;var Nr={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrCowatchUserStartOrJoinEvent:504,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,
mbsConnectionInitiated:138,mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,
kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeQosEvent:510,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,mdeExporterEvent:497,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,externalVideoShareToYoutubeAttempt:501,parentCodeEvent:502,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,
mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,
cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,producerAppStateChange:509,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,
fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,
castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496,kidsGuestSessionMismatch:498,musicSideloadedPlaylistMigrationEvent:499,sleepTimerSessionFinishEvent:500,watchEpPromoConflict:503,innertubeResponseCacheMetrics:505,miniAppAdEvent:506,dataPlanUpsellEvent:507,producerProjectRenamed:508,producerMediaSelectionEvent:511,embedsAutoplayStatusChanged:512,remoteConnectEvent:513,connectedSessionMisattributionEvent:514};var Or={},Pr=hq("ServiceWorkerLogsDatabase",{Gb:(Or.SWHealthLog={Mb:1},Or),shared:!0,upgrade:function(a,b){b(1)&&up(np(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function Qr(a){return Hp(Pr(),a)}
function Rr(a){var b,c;A(function(d){if(d.h==1)return d.yield(Qr(a),2);b=d.i;c=U()-2592E6;return d.yield(mp(b,["SWHealthLog"],{mode:"readwrite",ka:!0},function(e){return wp(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return xp(f)})})}),0)})}
function Sr(a){var b;return A(function(c){if(c.h==1)return c.yield(Qr(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var Tr={},Ur=0;function Vr(a){var b=b===void 0?{}:b;var c=new Image,d=""+Ur++;Tr[d]=c;c.onload=c.onerror=function(){delete Tr[d]};
b.Sh&&(c.referrerPolicy="no-referrer");c.src=a}
;var Wr;function Xr(){Wr||(Wr=new yo("yt.offline"));return Wr}
function Yr(a){if(R("offline_error_handling")){var b=Xr().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Xr().set("errors",b,2592E3,!0)}}
;function Zr(){this.h=new Map;this.i=!1}
function $r(){if(!Zr.h){var a=E("yt.networkRequestMonitor.instance")||new Zr;D("yt.networkRequestMonitor.instance",a);Zr.h=a}return Zr.h}
Zr.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
Zr.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:a===!1&&this.i?!0:null};
Zr.prototype.removeParams=function(a){return a.split("?")[0]};
Zr.prototype.removeParams=Zr.prototype.removeParams;Zr.prototype.isEndpointCFR=Zr.prototype.isEndpointCFR;Zr.prototype.requestComplete=Zr.prototype.requestComplete;Zr.getInstance=$r;function as(){bi.call(this);var a=this;this.j=!1;this.h=Xj();this.h.listen("networkstatus-online",function(){if(a.j&&R("offline_error_handling")){var b=Xr().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new T(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;tm(d)}Xr().set("errors",{},2592E3,!0)}}})}
w(as,bi);function bs(){if(!as.h){var a=E("yt.networkStatusManager.instance")||new as;D("yt.networkStatusManager.instance",a);as.h=a}return as.h}
r=as.prototype;r.ta=function(){return this.h.ta()};
r.lb=function(a){this.h.h=a};
r.ze=function(){var a=window.navigator.onLine;return a===void 0?!0:a};
r.pe=function(){this.j=!0};
r.listen=function(a,b){return this.h.listen(a,b)};
r.Dc=function(a){a=Vj(this.h,a);a.then(function(b){R("use_cfr_monitor")&&$r().requestComplete("generate_204",b)});
return a};
as.prototype.sendNetworkCheckRequest=as.prototype.Dc;as.prototype.listen=as.prototype.listen;as.prototype.enableErrorFlushing=as.prototype.pe;as.prototype.getWindowStatus=as.prototype.ze;as.prototype.networkStatusHint=as.prototype.lb;as.prototype.isNetworkAvailable=as.prototype.ta;as.getInstance=bs;function cs(a){a=a===void 0?{}:a;bi.call(this);var b=this;this.h=this.u=0;this.j=bs();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){ds(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ds(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){ci(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){ci(b,"publicytnetworkstatus-offline")})))}
w(cs,bi);cs.prototype.ta=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
cs.prototype.lb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
cs.prototype.Dc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return R("skip_network_check_if_cfr")&&$r().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.lb(((f=window.navigator)==null?void 0:f.onLine)||!0);e(b.ta())})):c?d.return(c(a)):d.return(!0)})};
function ds(a,b){a.rateLimit?a.h?(Yj.qa(a.u),a.u=Yj.ma(function(){a.o!==b&&(ci(a,b),a.o=b,a.h=U())},a.rateLimit-(U()-a.h))):(ci(a,b),a.o=b,a.h=U()):ci(a,b)}
;var es;function gs(){var a=sr.call;es||(es=new cs({Jh:!0,Ah:!0}));a.call(sr,this,{ga:{ge:Lr,xb:Kr,vd:Hr,Je:Ir,Zc:Jr,set:Fr},fa:es,handleError:function(b,c,d){var e,f=d==null?void 0:(e=d.error)==null?void 0:e.code;if(f===400||f===415){var g;um(new T(b.message,c,d==null?void 0:(g=d.error)==null?void 0:g.code),void 0,void 0,void 0,!0)}else tm(b)},
yb:um,sendFn:hs,now:U,Vd:Yr,Ca:xo(),Yc:"publicytnetworkstatus-online",Vc:"publicytnetworkstatus-offline",kc:!0,ic:.1,yc:S("potential_esf_error_limit",10),W:R,Qb:!(Pn()&&is())});this.j=new wj;R("networkless_immediately_drop_all_requests")&&Mr();eq("LogsDatabaseV2")}
w(gs,sr);function js(){var a=E("yt.networklessRequestController.instance");a||(a=new gs,D("yt.networklessRequestController.instance",a),R("networkless_logging")&&Up().then(function(b){a.V=b;ur(a);a.j.resolve();a.kc&&Math.random()<=a.ic&&a.V&&Rr(a.V);R("networkless_immediately_drop_sw_health_store")&&ks(a)}));
return a}
gs.prototype.writeThenSend=function(a,b){b||(b={});b=ls(a,b);Pn()||(this.h=!1);sr.prototype.writeThenSend.call(this,a,b)};
gs.prototype.sendThenWrite=function(a,b,c){b||(b={});b=ls(a,b);Pn()||(this.h=!1);sr.prototype.sendThenWrite.call(this,a,b,c)};
gs.prototype.sendAndWrite=function(a,b){b||(b={});b=ls(a,b);Pn()||(this.h=!1);sr.prototype.sendAndWrite.call(this,a,b)};
gs.prototype.awaitInitialization=function(){return this.j.promise};
function ks(a){var b;A(function(c){if(!a.V)throw b=Zo("clearSWHealthLogsDb"),b;return c.return(Sr(a.V).catch(function(d){a.handleError(d)}))})}
function hs(a,b,c,d){d=d===void 0?!1:d;b=R("web_fp_via_jspb")?Object.assign({},b):b;R("use_cfr_monitor")&&ms(a,b);if(R("use_request_time_ms_header"))b.headers&&Gm(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));else{var e;if((e=b.postParams)==null?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(U())}if(c&&Object.keys(b).length===0){var f=f===void 0?"":f;var g=g===void 0?!1:g;var h=h===void 0?!1:h;if(a)if(f)Tm(a,void 0,"POST",f,void 0);else if(P("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)Tm(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new fb({url:a});if(k.u?typeof k.j!=="string"||k.j.length===0?0:{version:3,ne:k.j,ce:gb(k,"&act=1&ri=1"+hb(k))}:k.M&&{version:4,ne:gb(k,"&dct=1&suid="+k.o),ce:gb(k,"&act=1&ri=1&suid="+k.o)}){var l=fc(hc(5,a)),m;if(!(m=!l||!l.endsWith("/aclk"))){var n=a.search(pc),p=oc(a,0,"ri",n);if(p<0)var t=null;else{var u=a.indexOf("&",p);if(u<0||u>n)u=n;t=decodeURIComponent(a.slice(p+3,u!==-1?u:0).replace(/\+/g," "))}m=t!=="1"}var x=!m;break b}}catch(H){}x=
!1}if(x){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var z=!0;break b}}catch(H){}z=!1}c=z?!0:!1}else c=!1;c||Vr(a)}}else b.compress?b.postBody?(typeof b.postBody!=="string"&&(b.postBody=JSON.stringify(b.postBody)),hr(a,b.postBody,b,Xm,d)):hr(a,JSON.stringify(b.postParams),b,Wm,d):Xm(a,b)}
function ls(a,b){R("use_event_time_ms_header")&&Gm(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(U())));return b}
function ms(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){$r().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){$r().requestComplete(a,!0);d(e,f)}}
function is(){return ic(document.location.toString())!=="www.youtube-nocookie.com"}
;var ns=!1,ps=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ns};D("ytNetworklessLoggingInitializationOptions",ps);function qs(){var a;A(function(b){if(b.h==1)return b.yield(Up(),2);a=b.i;if(!a||!Pn()&&!R("nwl_init_require_datasync_id_killswitch")||!is())return b.A(0);ns=!0;ps.isNwlInitialized=ns;return b.yield(js().awaitInitialization(),0)})}
;function rs(a){var b=this;this.config_=null;a?this.config_=a:vq()&&(this.config_=wq());Sn(function(){qr(b)},5E3)}
rs.prototype.isReady=function(){!this.config_&&vq()&&(this.config_=wq());return!!this.config_};
function rr(a,b,c,d){function e(n){n=n===void 0?!1:n;var p;if(d.retry&&h!="www.youtube-nocookie.com"&&(n||R("skip_ls_gel_retry")||g.headers["Content-Type"]!=="application/json"||(p=or(b,c,l,k)),p)){var t=g.onSuccess,u=g.onFetchSuccess;g.onSuccess=function(H,K){pr(p);t(H,K)};
c.onFetchSuccess=function(H,K){pr(p);u(H,K)}}try{if(n&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?js().writeThenSend(m,g):js().sendAndWrite(m,g);
else if(d.compress){var x=!d.networklessOptions.writeThenSend;if(g.postBody){var z=g.postBody;typeof z!=="string"&&(z=JSON.stringify(g.postBody));hr(m,z,g,Xm,x)}else hr(m,JSON.stringify(g.postParams),g,Wm,x)}else R("web_all_payloads_via_jspb")?Xm(m,g):Wm(m,g)}catch(H){if(H.name==="InvalidAccessError")p&&(pr(p),p=0),um(Error("An extension is blocking network request."));else throw H;}p&&Sn(function(){qr(a)},5E3)}
!P("VISITOR_DATA")&&b!=="visitor_id"&&Math.random()<.01&&um(new T("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new T("innertube xhrclient not ready",b,c,d);tm(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(n,p){if(d.onSuccess)d.onSuccess(p)},
onFetchSuccess:function(n){if(d.onSuccess)d.onSuccess(n)},
onError:function(n,p){if(d.onError)d.onError(p)},
onFetchError:function(n){if(d.onError)d.onError(n)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Fe)&&(h=f);var k=a.config_.Ge||!1,l=yq(k,h,d);Object.assign(g.headers,l);g.headers.Authorization&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m=Em(""+h+("/youtubei/"+a.config_.innertubeApiVersion+"/"+b),{alt:"json"});(E("ytNetworklessLoggingInitializationOptions")?ps.isNwlInitialized:ns)?Sp().then(function(n){e(n)}):e(!1)}
;var ss=0,ts=fd?"webkit":ed?"moz":cd?"ms":bd?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++ss});var us={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function vs(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in us||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&c.nodeType==3&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else this.type=="mouseover"?d=a.fromElement:this.type=="mouseout"&&(d=a.toElement);this.relatedTarget=d;this.clientX=a.clientX!=void 0?a.clientX:a.pageX;this.clientY=a.clientY!=void 0?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||(this.type=="keypress"?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function As(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
vs.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
vs.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
vs.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var tg=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",tg);var Bs=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Bs);
function Cs(a,b,c,d){d=d===void 0?{}:d;a.addEventListener&&(b!="mouseenter"||"onmouseenter"in document?b!="mouseleave"||"onmouseenter"in document?b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return sg(function(e){var f=typeof e[4]==="boolean"&&e[4]==!!d,g=Sa(e[4])&&Sa(d)&&xg(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function Ds(a,b,c,d){d=d===void 0?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Cs(a,b,c,d);if(e)return e;e=++Bs.count+"";var f=!(b!="mouseenter"&&b!="mouseleave"||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new vs(h);if(!Hg(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new vs(h);
h.currentTarget=a;return c.call(a,h)};
g=sm(g);a.addEventListener?(b=="mouseenter"&&f?b="mouseover":b=="mouseleave"&&f?b="mouseout":b=="mousewheel"&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Es()||typeof d==="boolean"?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);tg[e]=[a,b,c,g,d];return e}
function Fs(a){a&&(typeof a=="string"&&(a=[a]),Sb(a,function(b){if(b in tg){var c=tg[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Es()||typeof c==="boolean"?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete tg[b]}}))}
var Es=ri(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});function Gs(a){this.G=a;this.h=null;this.o=0;this.D=null;this.u=0;this.i=[];for(a=0;a<4;a++)this.i.push(0);this.j=0;this.U=Ds(window,"mousemove",Za(this.Y,this));a=Za(this.P,this);typeof a==="function"&&(a=sm(a));this.Z=window.setInterval(a,25)}
cb(Gs,F);Gs.prototype.Y=function(a){a.h===void 0&&As(a);var b=a.h;a.i===void 0&&As(a);this.h=new pg(b,a.i)};
Gs.prototype.P=function(){if(this.h){var a=U();if(this.o!=0){var b=this.D,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.o);this.i[this.j]=Math.abs((d-this.u)/this.u)>.5?1:0;for(c=b=0;c<4;c++)b+=this.i[c]||0;b>=3&&this.G();this.u=d}this.o=a;this.D=this.h;this.j=(this.j+1)%4}};
Gs.prototype.ba=function(){window.clearInterval(this.Z);Fs(this.U)};var Hs={};
function Is(a){var b=a===void 0?{}:a;a=b.Ue===void 0?!1:b.Ue;b=b.qe===void 0?!0:b.qe;if(E("_lact",window)==null){var c=parseInt(P("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);c==-1&&Js();Ds(document,"keydown",Js);Ds(document,"keyup",Js);Ds(document,"mousedown",Js);Ds(document,"mouseup",Js);a?Ds(window,"touchmove",function(){Ks("touchmove",200)},{passive:!0}):(Ds(window,"resize",function(){Ks("resize",200)}),b&&Ds(window,"scroll",function(){Ks("scroll",200)}));
new Gs(function(){Ks("mouse",100)});
Ds(document,"touchstart",Js,{passive:!0});Ds(document,"touchend",Js,{passive:!0})}}
function Ks(a,b){Hs[a]||(Hs[a]=!0,Yj.ma(function(){Js();Hs[a]=!1},b))}
function Js(){E("_lact",window)==null&&Is();var a=Date.now();D("_lact",a,window);E("_fact",window)==-1&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ls(){var a=E("_lact",window);return a==null?-1:Math.max(Date.now()-a,0)}
;var Ms=C.ytPubsubPubsubInstance||new M,Ns=C.ytPubsubPubsubSubscribedKeys||{},Os=C.ytPubsubPubsubTopicToKeys||{},Ps=C.ytPubsubPubsubIsSynchronous||{};function Qs(a,b){var c=Rs();if(c&&b){var d=c.subscribe(a,function(){function e(){Ns[d]&&b.apply&&typeof b.apply=="function"&&b.apply(window,f)}
var f=arguments;try{Ps[a]?e():Mm(e,0)}catch(g){tm(g)}},void 0);
Ns[d]=!0;Os[a]||(Os[a]=[]);Os[a].push(d);return d}return 0}
function Ss(a){var b=Rs();b&&(typeof a==="number"?a=[a]:typeof a==="string"&&(a=[parseInt(a,10)]),Sb(a,function(c){b.unsubscribeByKey(c);delete Ns[c]}))}
function Ts(a,b){var c=Rs();c&&c.publish.apply(c,arguments)}
function Us(a){var b=Rs();if(b)if(b.clear(a),a)Vs(a);else for(var c in Os)Vs(c)}
function Rs(){return C.ytPubsubPubsubInstance}
function Vs(a){Os[a]&&(a=Os[a],Sb(a,function(b){Ns[b]&&delete Ns[b]}),a.length=0)}
M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.cc;M.prototype.publish=M.prototype.rb;M.prototype.clear=M.prototype.clear;D("ytPubsubPubsubInstance",Ms);D("ytPubsubPubsubTopicToKeys",Os);D("ytPubsubPubsubIsSynchronous",Ps);D("ytPubsubPubsubSubscribedKeys",Ns);var Ws=Symbol("injectionDeps");function Xs(a){this.name=a}
Xs.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function Ys(a){this.key=a}
function Zs(){this.i=new Map;this.j=new Map;this.h=new Map}
function $s(a,b){a.i.set(b.Ac,b);var c=a.j.get(b.Ac);if(c)try{c.Rh(a.resolve(b.Ac))}catch(d){c.Ph(d)}}
Zs.prototype.resolve=function(a){return a instanceof Ys?at(this,a.key,[],!0):at(this,a,[])};
function at(a,b,c,d){d=d===void 0?!1:d;if(c.indexOf(b)>-1)throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(d.Rd!==void 0)var e=d.Rd;else if(d.Bf)e=d[Ws]?bt(a,d[Ws],c):[],e=d.Bf.apply(d,ra(e));else if(d.Qd){e=d.Qd;var f=e[Ws]?bt(a,e[Ws],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(ra(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.Vh||a.h.set(b,e);return e}
function bt(a,b,c){return b?b.map(function(d){return d instanceof Ys?at(a,d.key,c,!0):at(a,d,c)}):[]}
;var ct;function dt(){ct||(ct=new Zs);return ct}
;var et=window;function ft(){var a,b;return"h5vcc"in et&&((a=et.h5vcc.traceEvent)==null?0:a.traceBegin)&&((b=et.h5vcc.traceEvent)==null?0:b.traceEnd)?1:"performance"in et&&et.performance.mark&&et.performance.measure?2:0}
function gt(a){var b=ft();switch(b){case 1:et.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:et.performance.mark(a+"-start");break;case 0:break;default:Db(b,"unknown trace type")}}
function ht(a){var b=ft();switch(b){case 1:et.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:b=a+"-start";var c=a+"-end";et.performance.mark(c);et.performance.measure(a,b,c);break;case 0:break;default:Db(b,"unknown trace type")}}
;var jt=R("web_enable_lifecycle_monitoring")&&ft()!==0,kt=R("web_enable_lifecycle_monitoring");function lt(a){var b,c;(c=(b=window).onerror)==null||c.call(b,a.message,"",0,0,a)}
;function mt(a){var b=this;var c=c===void 0?0:c;var d=d===void 0?xo():d;this.j=c;this.scheduler=d;this.i=new wj;this.h=a;for(a={ib:0};a.ib<this.h.length;a={xc:void 0,ib:a.ib},a.ib++)a.xc=this.h[a.ib],c=function(e){return function(){e.xc.Oc();b.h[e.ib].zc=!0;b.h.every(function(f){return f.zc===!0})&&b.i.resolve()}}(a),d=this.getPriority(a.xc),d=this.scheduler.Ra(c,d),this.h[a.ib]=Object.assign({},a.xc,{Oc:c,
jobId:d})}
function nt(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=y(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],c.jobId===void 0||c.zc||(a.scheduler.qa(c.jobId),a.scheduler.Ra(c.Oc,10))}
mt.prototype.cancel=function(){for(var a=y(this.h),b=a.next();!b.done;b=a.next())b=b.value,b.jobId===void 0||b.zc||this.scheduler.qa(b.jobId),b.zc=!0;this.i.resolve()};
mt.prototype.getPriority=function(a){var b;return(b=a.priority)!=null?b:this.j};function ot(a){this.state=a;this.plugins=[];this.o=void 0;this.D={};jt&&gt(this.state)}
r=ot.prototype;r.install=function(a){this.plugins.push(a);return this};
r.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);b>-1&&a.plugins.splice(b,1)})};
r.transition=function(a,b){var c=this;jt&&ht(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(nt(this.j),this.j=void 0);pt(this,a,b);this.state=a;jt&&gt(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(qt(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function qt(a,b){var c=b.filter(function(e){return rt(a,e)===10}),d=b.filter(function(e){return rt(a,e)!==10});
return a.D.Uh?function(){var e=B.apply(0,arguments);return A(function(f){if(f.h==1)return f.yield(a.af.apply(a,[c].concat(ra(e))),2);a.Ld.apply(a,[d].concat(ra(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.bf.apply(a,[c].concat(ra(e)));a.Ld.apply(a,[d].concat(ra(e)))}}
r.bf=function(a){for(var b=B.apply(1,arguments),c=xo(),d=y(a),e=d.next(),f={};!e.done;f={Rb:void 0},e=d.next())f.Rb=e.value,c.Kb(function(g){return function(){st(g.Rb.name);tt(function(){return g.Rb.callback.apply(g.Rb,ra(b))});
ut(g.Rb.name)}}(f))};
r.af=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){h.h==1&&(c=xo(),d=y(a),e=d.next(),f={});if(h.h!=3){if(e.done)return h.A(0);f.Xa=e.value;f.dc=void 0;g=function(k){return function(){st(k.Xa.name);var l=tt(function(){return k.Xa.callback.apply(k.Xa,ra(b))});
fe(l)?k.dc=R("web_lifecycle_error_handling_killswitch")?l.then(function(){ut(k.Xa.name)}):l.then(function(){ut(k.Xa.name)},function(m){lt(m);
ut(k.Xa.name)}):ut(k.Xa.name)}}(f);
c.Kb(g);return f.dc?h.yield(f.dc,3):h.A(3)}f={Xa:void 0,dc:void 0};e=d.next();return h.A(2)})};
r.Ld=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Oc:function(){st(e.name);tt(function(){return e.callback.apply(e,ra(b))});
ut(e.name)},
priority:rt(c,e)}});
d.length&&(this.j=new mt(d))};
function rt(a,b){var c,d;return(d=(c=a.o)!=null?c:b.priority)!=null?d:0}
function st(a){jt&&a&&gt(a)}
function ut(a){jt&&a&&ht(a)}
function pt(a,b,c){kt&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
fa.Object.defineProperties(ot.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});
function tt(a){if(R("web_lifecycle_error_handling_killswitch"))return a();try{return a()}catch(b){lt(b)}}
;function vt(a){ot.call(this,a===void 0?"none":a);this.h=null;this.o=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.u},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var wt;w(vt,ot);vt.prototype.i=function(a,b){var c=this;this.h=Sn(function(){c.currentState==="application_navigating"&&c.transition("none")},5E3);
a(b==null?void 0:b.event)};
vt.prototype.u=function(a,b){this.h&&(Yj.qa(this.h),this.h=null);a(b==null?void 0:b.event)};
function xt(){wt||(wt=new vt);return wt}
;var zt=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return zt});function At(){this.store={};this.h={}}
At.prototype.storePayload=function(a,b){a=Bt(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);R("more_accurate_gel_parser")&&(b=new CustomEvent("TRANSPORTING_NEW_EVENT"),window.dispatchEvent(b));return a};
At.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Ct(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,ra(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,ra(this.store[b[d]].splice(0,a.sizeLimit))));(a==null?0:a.sizeLimit)&&c.length<(a==null?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,ra(this.smartExtractMatchingEntries(a))));return c};
At.prototype.extractMatchingEntries=function(a){a=Ct(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,ra(this.store[a[c]])),delete this.store[a[c]]);return b};
At.prototype.getSequenceCount=function(a){a=Ct(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=((d=this.store[a[c]])==null?void 0:d.length)||0}return b};
function Ct(a,b){var c=Bt(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(d.length<=1&&Bt(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(Dt(b.auth,g[0])){var h=b.isJspb;Dt(h===void 0?"undefined":h?"true":"false",g[1])&&Dt(b.cttAuthInfo,g[2])&&(h=b.tier,h=h===void 0?"undefined":JSON.stringify(h),Dt(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function Dt(a,b){return a===void 0||a==="undefined"?!0:a===b}
At.prototype.getSequenceCount=At.prototype.getSequenceCount;At.prototype.extractMatchingEntries=At.prototype.extractMatchingEntries;At.prototype.smartExtractMatchingEntries=At.prototype.smartExtractMatchingEntries;At.prototype.storePayload=At.prototype.storePayload;function Bt(a){return[a.auth===void 0?"undefined":a.auth,a.isJspb===void 0?"undefined":a.isJspb,a.cttAuthInfo===void 0?"undefined":a.cttAuthInfo,a.tier===void 0?"undefined":a.tier].join("/")}
;function Et(a,b){if(a)return a[b.name]}
;var Ft=S("initial_gel_batch_timeout",2E3),Gt=S("gel_queue_timeout_max_ms",6E4),Ht=S("gel_min_batch_size",5),It=void 0;function Jt(){this.o=this.h=this.i=0;this.j=!1}
var Kt=new Jt,Lt=new Jt,Mt=new Jt,Nt=new Jt,Ot,Pt=!0,Qt=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",Qt);var Rt={};function St(){var a=E("yt.logging.ims");a||(a=new At,D("yt.logging.ims",a));return a}
function Tt(a,b){if(a.endpoint==="log_event"){Ut();var c=Vt(a),d=Wt(a.payload)||"";a:{if(R("enable_web_tiered_gel")){var e=Nr[d||""];var f,g,h,k=dt().resolve(new Ys(qq))==null?void 0:(f=rq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.eventLoggingConfig)==null?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(e.enabled===!1&&!R("web_payload_policy_disabled_killswitch"))return;k=Xt(e.tier);if(k===400){Yt(a,b);return}}Rt[c]=
!0;c={cttAuthInfo:c,isJspb:!1,tier:k};St().storePayload(c,a.payload);Zt(b,c,d==="gelDebuggingEvent")}}
function Zt(a,b,c){function d(){$t({writeThenSend:!0},void 0,e,b.tier)}
var e=!1;e=e===void 0?!1:e;c=c===void 0?!1:c;a&&(It=new a);a=S("tvhtml5_logging_max_batch_ads_fork")||S("tvhtml5_logging_max_batch")||S("web_logging_max_batch")||100;var f=U(),g=au(e,b.tier),h=g.o;c&&(g.j=!0);c=0;b&&(c=St().getSequenceCount(b));c>=1E3?d():c>=a?Ot||(Ot=bu(function(){d();Ot=void 0},0)):f-h>=10&&(cu(e,b.tier),g.o=f)}
function Yt(a,b){if(a.endpoint==="log_event"){R("more_accurate_gel_parser")&&St().storePayload({isJspb:!1},a.payload);Ut();var c=Vt(a),d=new Map;d.set(c,[a.payload]);var e=Wt(a.payload)||"";b&&(It=new b);return new si(function(f,g){It&&It.isReady()?du(d,It,f,g,{bypassNetworkless:!0},!0,e==="gelDebuggingEvent"):f()})}}
function Vt(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);Qt[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function $t(a,b,c,d){a=a===void 0?{}:a;c=c===void 0?!1:c;new si(function(e,f){var g=au(c,d),h=g.j;g.j=!1;eu(g.i);eu(g.h);g.h=0;It&&It.isReady()?d===void 0&&R("enable_web_tiered_gel")?fu(e,f,a,b,c,300,h):fu(e,f,a,b,c,d,h):(cu(c,d),e())})}
function fu(a,b,c,d,e,f,g){var h=It;c=c===void 0?{}:c;e=e===void 0?!1:e;f=f===void 0?200:f;g=g===void 0?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(d!==void 0)f=R("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):St().extractMatchingEntries(e),k.set(d,f);else for(d=y(Object.keys(Rt)),l=d.next();!l.done;l=d.next())l=l.value,e=R("enable_web_tiered_gel")?St().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):St().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),e.length>0&&k.set(l,e),(R("web_fp_via_jspb_and_json")&&c.writeThenSend||!R("web_fp_via_jspb_and_json"))&&delete Rt[l];du(k,h,a,b,c,!1,g)}
function cu(a,b){function c(){$t({writeThenSend:!0},void 0,a,b)}
a=a===void 0?!1:a;b=b===void 0?200:b;var d=au(a,b),e=d===Nt||d===Mt?5E3:Gt;R("web_gel_timeout_cap")&&!d.h&&(e=bu(function(){c()},e),d.h=e);
eu(d.i);e=P("LOGGING_BATCH_TIMEOUT",S("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&Pt&&(e=Ft);e=bu(function(){S("gel_min_batch_size")>0?St().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Ht&&c():c()},e);
d.i=e}
function du(a,b,c,d,e,f,g){e=e===void 0?{}:e;var h=Math.round(U()),k=a.size,l=(g===void 0?0:g)&&R("vss_through_gel_video_stats")?"video_stats":"log_event";a=y(a);var m=a.next();for(g={};!m.done;g={Uc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Xc:void 0,Wc:void 0},m=a.next()){var n=y(m.value);m=n.next().value;n=n.next().value;g.batchRequest=zg({context:xq(b.config_||wq())});if(!Na(n)&&!R("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Qt[m])&&
gu(g.batchRequest,m,n);delete Qt[m];g.dangerousLogToVisitorSession=m==="visitorOnlyApprovedKey";hu(g.batchRequest,h,g.dangerousLogToVisitorSession);R("always_send_and_write")&&(e.writeThenSend=!1);g.Xc=function(p){R("start_client_gcf")&&Yj.ma(function(){return A(function(t){return t.yield(iu(p),0)})});
k--;k||c()};
g.Uc=0;g.Wc=function(p){return function(){p.Uc++;if(e.bypassNetworkless&&p.Uc===1)try{rr(b,l,p.batchRequest,ju({writeThenSend:!0},p.dangerousLogToVisitorSession,p.Xc,p.Wc,f)),Pt=!1}catch(t){tm(t),d()}k--;k||c()}}(g);
try{rr(b,l,g.batchRequest,ju(e,g.dangerousLogToVisitorSession,g.Xc,g.Wc,f)),Pt=!1}catch(p){tm(p),d()}}}
function ju(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,uh:!!e,headers:{},postBodyFormat:"",postBody:"",compress:R("compress_gel")||R("compress_gel_lr")};ku()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(U())));return a}
function hu(a,b,c){ku()||(a.requestTimeMs=String(b));R("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=P("EVENT_ID"))&&((c=P("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*65535/2)),c++,c>65535&&(c=1),om("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function gu(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Ut(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=Om("il_payload_scraping"),a=(a!==void 0?String(a):"")!=="enable_il_payload_scraping");a||(zt=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",zt),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function ku(){return R("use_request_time_ms_header")||R("lr_use_request_time_ms_header")}
function bu(a,b){return R("transport_use_scheduler")===!1?Mm(a,b):R("logging_avoid_blocking_during_navigation")||R("lr_logging_avoid_blocking_during_navigation")?Sn(function(){if(xt().currentState==="none")a();else{var c={};xt().install((c.none={callback:a},c))}},b):Sn(a,b)}
function eu(a){R("transport_use_scheduler")?Yj.qa(a):window.clearTimeout(a)}
function iu(a){var b,c,d,e,f,g,h,k,l,m;return A(function(n){return n.h==1?(d=(b=a)==null?void 0:(c=b.responseContext)==null?void 0:c.globalConfigGroup,e=Et(d,Rl),g=(f=d)==null?void 0:f.hotHashData,h=Et(d,Ql),l=(k=d)==null?void 0:k.coldHashData,(m=dt().resolve(new Ys(qq)))?g?e?n.yield(sq(m,g,e),2):n.yield(sq(m,g),2):n.A(2):n.return()):l?h?n.yield(tq(m,l,h),0):n.yield(tq(m,l),0):n.A(0)})}
function au(a,b){b=b===void 0?200:b;return a?b===300?Nt:Lt:b===300?Mt:Kt}
function Wt(a){a=Object.keys(a);a=y(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,Nr[b])return b}
function Xt(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var lu=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",lu);
function mu(a,b,c,d){d=d===void 0?{}:d;var e={},f=Math.round(d.timestamp||U());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ls();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!R("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,lu[b]=b in lu?lu[b]+1:0,a.sequence={index:lu[b],groupKey:b},d.endOfSequence&&delete lu[d.sequenceGroup]);(d.sendIsolatedPayload?Yt:Tt)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function Ho(a,b,c){c=c===void 0?{}:c;var d=rs;P("ytLoggingEventsDefaultDisabled",!1)&&rs===rs&&(d=null);mu(a,b,d,c)}
;function nu(a){return a.slice(0,void 0).map(function(b){return b.name}).join(" > ")}
;var ou=new Set,pu=0,qu=0,ru=0,su=[],tu=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Go(a){uu(a)}
function V(a){uu(a,"WARNING")}
function vu(a){a instanceof Error?uu(a):(a=Sa(a)?JSON.stringify(a):String(a),a=new T(a),a.name="RejectedPromiseError",V(a))}
function uu(a,b,c,d,e,f,g,h){f=f===void 0?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;b=b===void 0?"ERROR":b;g=g===void 0?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),R("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(pu>=5))){d=su;var k=$b(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var m=l.split("\n");m.shift();l=m.join("\n")}m=k.lineNumber||"Not available";k=k.fileName||"Not available";var n=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var p=0;p<a.args.length&&!(n=pn(a.args[p],"params."+p,c,n),
n>=500);p++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if(typeof a.params==="object")for(p in t){if(t[p]){var u="params."+p,x=rn(t[p]);c[u]=x;n+=u.length+x.length;if(n>500)break}}else c.params=rn(t)}if(d.length)for(p=0;p<d.length&&!(n=pn(d[p],"params.context."+p,c,n),n>=500);p++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);p={message:e,name:f,lineNumber:m,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(p.lineNumber=
p.lineNumber+":"+c);if(a.level==="IGNORED")a=0;else a:{a=ln();c=y(a.Ya);for(d=c.next();!d.done;d=c.next())if(d=d.value,p.message&&p.message.match(d.Kh)){a=d.weight;break a}a=y(a.Ta);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(p)){a=c.weight;break a}a=1}p.sampleWeight=a;a=y(fn);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.wc[p.name])for(e=y(c.wc[p.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=p.message.match(f.regexp)){p.params["params.error.original"]=d[0];e=f.groups;f={};
for(m=0;m<e.length;m++)f[e[m]]=d[m+1],p.params["params.error."+e[m]]=d[m+1];p.message=c.Sc(f);break}p.params||(p.params={});a=ln();p.params["params.errorServiceSignature"]="msg="+a.Ya.length+"&cb="+a.Ta.length;p.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(p.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));(new Cg(Dg,"sample")).constructor!==Cg&&(p.params["params.fconst"]="true");window.yterr&&typeof window.yterr==="function"&&
window.yterr(p);if(p.sampleWeight!==0&&!ou.has(p.message)){if(g&&R("web_enable_error_204"))wu(b===void 0?"ERROR":b,p);else{b=b===void 0?"ERROR":b;b==="ERROR"?(mn.rb("handleError",p),R("record_app_crashed_web")&&ru===0&&p.sampleWeight===1&&(ru++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},R("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:p.message}}}}),Ho("appCrashed",g)),qu++):b==="WARNING"&&mn.rb("handleWarning",p);if(R("kevlar_gel_error_routing")){g=
b;h=h===void 0?{}:h;b:{a=y(tu);for(c=a.next();!c.done;c=a.next())if(No(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:p.stack};p.fileName&&(c.filename=p.fileName);a=p.lineNumber&&p.lineNumber.split?p.lineNumber.split(":"):[];a.length!==0&&(a.length!==1||isNaN(Number(a[0]))?a.length!==2||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:p.message,errorClassName:p.name,
sampleWeight:p.sampleWeight};g==="ERROR"?a.level="ERROR_LEVEL_ERROR":g==="WARNING"&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];P("FEXP_EXPERIMENTS")&&(h.experimentIds=P("FEXP_EXPERIMENTS"));d=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!pm("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=y(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=p.params)for(e=y(Object.keys(d)),
f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=P("SERVER_NAME");e=P("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(Ho("clientError",h),(g==="ERROR"||R("errors_flush_gel_always_killswitch"))&&$t(void 0,void 0,!1))}R("suppress_error_204_logging")||wu(b,p)}try{ou.add(p.message)}catch(z){}pu++}}}
function wu(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:P("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=y(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=y(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=P("SERVER_NAME");b=P("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Xm(P("ECATCHER_REPORT_HOST","")+"/error_204",a)}
function xu(a){var b=B.apply(1,arguments);a.args||(a.args=[]);a.args.push.apply(a.args,ra(b))}
;function yu(){this.register=new Map}
function zu(a){a=y(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.Oh("ABORTED")}
yu.prototype.clear=function(){zu(this);this.register.clear()};
var Au=new yu;var Bu=Date.now().toString();
function Cu(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;a<16;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(Math.random()*256)}if(Bu)for(a=1,b=0;b<Bu.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Bu.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Du,Eu=C.ytLoggingDocDocumentNonce_;Eu||(Eu=Cu(),D("ytLoggingDocDocumentNonce_",Eu));Du=Eu;function Fu(a){this.h=a}
r=Fu.prototype;r.getAsJson=function(){var a={};this.h.trackingParams!==void 0?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,this.h.veCounter!==void 0&&(a.veCounter=this.h.veCounter),this.h.elementIndex!==void 0&&(a.elementIndex=this.h.elementIndex));this.h.dataElement!==void 0&&(a.dataElement=this.h.dataElement.getAsJson());this.h.youtubeData!==void 0&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
r.getAsJspb=function(){var a=new Tl;this.h.trackingParams!==void 0?a.setTrackingParams(this.h.trackingParams):(this.h.veType!==void 0&&ef(a,2,Fe(this.h.veType)),this.h.veCounter!==void 0&&ef(a,6,Fe(this.h.veCounter)),this.h.elementIndex!==void 0&&ef(a,3,Fe(this.h.elementIndex)),this.h.isCounterfactual&&ef(a,5,Be(!0)));if(this.h.dataElement!==void 0){var b=this.h.dataElement.getAsJspb();sf(a,Tl,7,b)}this.h.youtubeData!==void 0&&sf(a,Sl,8,this.h.jspbYoutubeData);return a};
r.toString=function(){return JSON.stringify(this.getAsJson())};
r.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
r.getLoggingDirectives=function(){return this.h.loggingDirectives};function Gu(a){return P("client-screen-nonce-store",{})[a===void 0?0:a]}
function Hu(a,b){b=b===void 0?0:b;var c=P("client-screen-nonce-store");c||(c={},om("client-screen-nonce-store",c));c[b]=a}
function Iu(a){a=a===void 0?0:a;return a===0?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Ju(a){return P(Iu(a===void 0?0:a))}
D("yt_logging_screen.getRootVeType",Ju);function Ku(){var a=P("csn-to-ctt-auth-info");a||(a={},om("csn-to-ctt-auth-info",a));return a}
function Lu(){return Object.values(P("client-screen-nonce-store",{})).filter(function(a){return a!==void 0})}
function Mu(a){a=Gu(a===void 0?0:a);if(!a&&!P("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",Mu);function Nu(a,b,c){var d=Ku();(c=Mu(c))&&delete d[c];b&&(d[a]=b)}
function Ou(a){return Ku()[a]}
D("yt_logging_screen.getCttAuthInfo",Ou);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=c===void 0?0:c;if(a!==Gu(c)||b!==P(Iu(c)))if(Nu(a,d,c),Hu(a,c),om(Iu(c),b),b=function(){setTimeout(function(){a&&Ho("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Du,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});function Pu(){var a=yg(Qu),b;return(new si(function(c,d){a.onSuccess=function(e){Lm(e)?c(new Ru(e)):d(new Su("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Su("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new Su("Request timed out","net.timeout",e))};
b=Xm("//googleads.g.doubleclick.net/pagead/id",a)})).Ec(function(c){if(c instanceof Bi){var d;
(d=b)==null||d.abort()}return xi(c)})}
function Su(a,b,c){db.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(Su,db);function Ru(a){this.xhr=a}
;function Tu(){this.X=0;this.h=null}
Tu.prototype.then=function(a,b,c){return this.X===1&&a?(a=a.call(c,this.h))&&typeof a.then==="function"?a:Uu(a):this.X===2&&b?(a=b.call(c,this.h))&&typeof a.then==="function"?a:Vu(a):this};
Tu.prototype.getValue=function(){return this.h};
Tu.prototype.isRejected=function(){return this.X==2};
Tu.prototype.$goog_Thenable=!0;function Vu(a){var b=new Tu;a=a===void 0?null:a;b.X=2;b.h=a===void 0?null:a;return b}
function Uu(a){var b=new Tu;a=a===void 0?null:a;b.X=1;b.h=a===void 0?null:a;return b}
;function Wu(a){var b=P("INNERTUBE_HOST_OVERRIDE");b&&(a=String(b)+String(jc(a)));return a}
function Xu(a){var b={};R("json_condensed_response")&&(b.prettyPrint="false");return a=Fm(a,b||{},!1)}
function Yu(a,b){var c=c===void 0?{}:c;a={method:b===void 0?"POST":b,mode:Gm(a)?"same-origin":"cors",credentials:Gm(a)?"same-origin":"include"};b={};for(var d=y(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);Object.keys(b).length>0&&(a.headers=b);return a}
;function Zu(){return hg()||(hd||id)&&No("applewebkit")&&!No("version")&&(!No("safari")||No("gsa/"))||gd&&No("version/")?!0:P("EOM_VISITOR_DATA")?!1:!0}
;function $u(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Xl)if(Xl[d]==c.embeddedPlayerMode){b=Xl[d];break b}}return b==="EMBEDDED_PLAYER_MODE_PFL"}
;function av(a){db.call(this,a.message||a.description||a.name);this.isMissing=a instanceof bv;this.isTimeout=a instanceof Su&&a.errorCode=="net.timeout";this.isCanceled=a instanceof Bi}
w(av,db);av.prototype.name="BiscottiError";function bv(){db.call(this,"Biscotti ID is missing from server")}
w(bv,db);bv.prototype.name="BiscottiMissingError";var Qu={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},cv=null;function dv(){if(R("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Zu())return Error("User has not consented - not fetching biscotti id.");var a=P("PLAYER_VARS",{});if(wg(a)=="1")return Error("Biscotti ID is not available in private embed mode");if($u(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function hm(){var a=dv();if(a!==void 0)return xi(a);cv||(cv=Pu().then(ev).Ec(function(b){return fv(2,b)}));
return cv}
function ev(a){a=a.xhr.responseText;if(a.lastIndexOf(")]}'",0)!=0)throw new bv;a=JSON.parse(a.substr(4));if((a.type||1)>1)throw new bv;a=a.id;im(a);cv=Uu(a);gv(18E5,2);return a}
function fv(a,b){b=new av(b);im("");cv=Vu(b);a>0&&gv(12E4,a-1);throw b;}
function gv(a,b){Mm(function(){Pu().then(ev,function(c){return fv(b,c)}).Ec(qi)},a)}
function hv(){try{var a=E("yt.ads.biscotti.getId_");return a?a():hm()}catch(b){return xi(b)}}
;var Mb=sa(["data-"]);function iv(a){a&&(a.dataset?a.dataset[jv()]="true":Nb(a))}
function kv(a){return a?a.dataset?a.dataset[jv()]:a.getAttribute("data-loaded"):null}
var lv={};function jv(){return lv.loaded||(lv.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;function mv(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||yg(b);this.assets=a.assets||{};this.attrs=a.attrs||yg(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
mv.prototype.clone=function(){var a=new mv,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];Ma(c)=="object"?a[b]=yg(c):a[b]=c}return a};var nv=["att/get"],ov=["share/get_share_panel"],pv=["share/get_web_player_share_panel"],qv=["feedback"],rv=["notification/modify_channel_preference"],sv=["browse/edit_playlist"],tv=["subscription/subscribe"],uv=["subscription/unsubscribe"];var vv=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",vv);function wv(a){jm(vv,arguments)}
;function xv(a,b,c){yv(a,b,c===void 0?null:c)}
function zv(a){a=Av(a);var b=document.getElementById(a);b&&(Us(a),b.parentNode.removeChild(b))}
function Bv(a,b){a&&b&&(a=""+Ta(b),(a=Cv[a])&&Ss(a))}
function yv(a,b,c){c=c===void 0?null:c;var d=Av(a),e=document.getElementById(d),f=e&&kv(e),g=e&&!f;f?b&&b():(b&&(f=Qs(d,b),b=""+Ta(b),Cv[b]=f),g||(e=Dv(a,d,function(){kv(e)||(iv(e),Ts(d),Mm(function(){Us(d)},0))},c)))}
function Dv(a,b,c,d){d=d===void 0?null:d;var e=Fg("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Kb(e,Ol(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function Av(a){var b=document.createElement("a");Cb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var Cv={};function Ev(a){var b=Fv(a),c=document.getElementById(b),d=c&&kv(c);d||c&&!d||(c=Gv(a,b,function(){if(!kv(c)){iv(c);Ts(b);var e=$a(Us,b);Mm(e,0)}}))}
function Gv(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=Ol(a);Qb(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function Fv(a){var b=Fg("A");Cb(b,new vb(a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function Hv(a){var b=B.apply(1,arguments);if(!Iv(a)||b.some(function(d){return!Iv(d)}))throw Error("Only objects may be merged.");
b=y(b);for(var c=b.next();!c.done;c=b.next())Jv(a,c.value)}
function Jv(a,b){for(var c in b)if(Iv(b[c])){if(c in a&&!Iv(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Jv(a[c],b[c])}else if(Kv(b[c])){if(c in a&&!Kv(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Lv(a[c],b[c])}else a[c]=b[c];return a}
function Lv(a,b){b=y(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Iv(c)?a.push(Jv({},c)):Kv(c)?a.push(Lv([],c)):a.push(c);return a}
function Iv(a){return typeof a==="object"&&!Array.isArray(a)}
function Kv(a){return typeof a==="object"&&Array.isArray(a)}
;var Mv="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function Nv(a,b){var c=c===void 0?!0:c;var d=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=ic(window.location.href);e&&d.push(e);e=ic(a);if(Rb(d,e)>=0||!e&&a.lastIndexOf("/",0)==0)if(d=document.createElement("a"),Cb(d,a),a=d.href)if(a=jc(a),a=kc(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:Mu()},b)),f){var f=parseInt(f,10);isFinite(f)&&f>0&&Ov(a,b,f)}else Ov(a,b)}
function Ov(a,b,c){a=Pv(a);b=b?mc(b):"";c=c||5;Zu()&&yn(a,b,c)}
function Pv(a){for(var b=y(Mv),c=b.next();!c.done;c=b.next())a=rc(a,c.value);return"ST-"+dc(a).toString(36)}
;function Qv(a){Dq.call(this,1,arguments);this.csn=a}
w(Qv,Dq);var Mq=new Eq("screen-created",Qv),Rv=[],Sv=0,Tv=new Map,Uv=new Map,Vv=new Map;
function Wv(a,b,c,d,e){e=e===void 0?!1:e;for(var f=Xv({cttAuthInfo:Ou(b)||void 0},b),g=y(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(ug(k)||!k.trackingParams&&!k.veType)&&V(Error("Child VE logged with no data"));if(R("no_client_ve_attach_unless_shown")){var l=Yv(h,b);if(k.veType&&!Uv.has(l)&&!Vv.has(l)&&!e){if(!R("il_attach_cache_limit")||Tv.size<1E3){Tv.set(l,[a,b,c,h]);return}R("il_attach_cache_limit")&&Tv.size>1E3&&V(new T("IL Attach cache exceeded limit"))}h=Yv(c,b);Tv.has(h)?
Zv(c,b):Vv.set(h,!0)}}d=d.filter(function(m){m.csn!==b?(m.csn=b,m=!0):m=!1;return m});
c={csn:b,parentVe:c.getAsJson(),childVes:Ub(d,function(m){return m.getAsJson()})};
b==="UNDEFINED_CSN"?$v("visualElementAttached",f,c):a?mu("visualElementAttached",c,a,f):Ho("visualElementAttached",c,f)}
function $v(a,b,c){Rv.push({Te:a,payload:c,Gh:void 0,options:b});Sv||(Sv=Nq())}
function Oq(a){if(Rv){for(var b=y(Rv),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ho(c.Te,c.payload,c.options));Rv.length=0}Sv=0}
function Yv(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function Zv(a,b){a=Yv(a,b);Tv.has(a)&&(b=Tv.get(a)||[],Wv(b[0],b[1],b[2],[b[3]],!0),Tv.delete(a))}
function Xv(a,b){R("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function aw(){try{return!!self.localStorage}catch(a){return!1}}
;function bw(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function cw(a){if(aw()){var b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=bw(c);d===void 0||a.includes(d)||self.localStorage.removeItem(c)}}}
function dw(){if(!aw())return!1;var a=Qn(),b=Object.keys(window.localStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=bw(c.value),c!==void 0&&c!==a)return!0;return!1}
;function ew(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return(P("INNERTUBE_CLIENT_NAME")==="WEB"||P("INNERTUBE_CLIENT_NAME")==="WEB_CREATOR")&&a}
function fw(a){if(P("LOGGED_IN",!0)&&ew()){var b=P("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=ic(window.location.href);c&&b.push(c);c=ic(a);Rb(b,c)>=0||!c&&a.lastIndexOf("/",0)==0?(b=jc(a),(b=kc(b))?(b=Pv(b),b=(b=zn(b)||null)?Cm(b):{}):b=null):b=null;b==null&&(b={});c=b;var d=void 0;ew()?(d||(d=P("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&Nv(a,b)}}
;function gw(a,b,c){b=b===void 0?{}:b;c=c===void 0?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));b&&Nv(a,b);if(c)return!1;fw(a);var e=e===void 0?{}:e;var f=f===void 0?"":f;var g=g===void 0?window:g;b=nc(a,e);fw(b);a=void 0;a=a===void 0?zb:a;a:if(f=b+f,a=a===void 0?zb:a,!(f instanceof vb)){for(b=0;b<a.length;++b)if(c=a[b],c instanceof xb&&c.He(f)){f=new vb(f);break a}f=void 0}g=g.location;f=Bb(f||wb);f!==void 0&&(g.href=f);return!0}
;function hw(a){if(wg(P("PLAYER_VARS",{}))!="1"){a&&gm();try{hv().then(function(){},function(){}),Mm(hw,18E5)}catch(b){tm(b)}}}
;var iw=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function jw(){var a=a===void 0?window.location.href:a;if(R("kevlar_disable_theme_param"))return null;var b=fc(hc(5,a));if(R("enable_dark_theme_only_on_shorts")&&b!=null&&b.startsWith("/shorts/"))return"USER_INTERFACE_THEME_DARK";try{var c=Dm(a).theme;return iw.get(c)||null}catch(d){}return null}
;function kw(){this.h={};if(this.i=Bn()){var a=zn("CONSISTENCY");a&&lw(this,{encryptedTokenJarContents:a})}}
kw.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=((c=b.Ga.context)==null?void 0:(d=c.request)==null?void 0:d.consistencyTokenJars)||[];var e;if(a=(e=a.responseContext)==null?void 0:e.consistencyTokenJar){e=y(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];lw(this,a)}};
function lw(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,typeof b.expirationSeconds==="string")){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},c*1E3);
a.i&&yn("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var mw=window.location.hostname.split(".").slice(-2).join(".");function nw(){this.j=-1;var a=P("LOCATION_PLAYABILITY_TOKEN");P("INNERTUBE_CLIENT_NAME")==="TVHTML5"&&(this.h=ow(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var pw;function qw(){pw=E("yt.clientLocationService.instance");pw||(pw=new nw,D("yt.clientLocationService.instance",pw));return pw}
r=nw.prototype;
r.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});if(this.i)a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(this.i.coords.latitude*1E7),a.client.locationInfo.longitudeE7=Math.floor(this.i.coords.longitude*1E7),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0;else if(this.o||this.locationPlayabilityToken)a.client.locationPlayabilityToken=this.o||
this.locationPlayabilityToken};
r.handleResponse=function(a){var b;a=(b=a.responseContext)==null?void 0:b.locationPlayabilityToken;a!==void 0&&(this.locationPlayabilityToken=a,this.i=void 0,P("INNERTUBE_CLIENT_NAME")==="TVHTML5"?(this.h=ow(this))&&this.h.set("yt-location-playability-token",a,15552E3):yn("YT_CL",JSON.stringify({loctok:a}),15552E3,mw,!0))};
function ow(a){return a.h===void 0?new yo("yt-client-location"):a.h}
r.clearLocationPlayabilityToken=function(a){a==="TVHTML5"?(this.h=ow(this))&&this.h.remove("yt-location-playability-token"):An("YT_CL");this.o=void 0;this.j!==-1&&(clearTimeout(this.j),this.j=-1)};
r.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;P("INNERTUBE_CLIENT_NAME")==="MWEB"&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
r.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);if(a==null?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
r.createLocationInfo=function(a){var b={};a=a.coords;if(a==null?0:a.latitude)b.latitudeE7=Math.floor(a.latitude*1E7);if(a==null?0:a.longitude)b.longitudeE7=Math.floor(a.longitude*1E7);return b};function rw(a,b,c){b=b===void 0?!1:b;c=c===void 0?!1:c;var d=P("INNERTUBE_CONTEXT");if(!d)return uu(Error("Error: No InnerTubeContext shell provided in ytconfig.")),{};d=zg(d);R("web_no_tracking_params_in_shell_killswitch")||delete d.clickTracking;d.client||(d.client={});var e=d.client;e.clientName==="MWEB"&&e.clientFormFactor!=="AUTOMOTIVE_FORM_FACTOR"&&(e.clientFormFactor=P("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");e.screenWidthPoints=window.innerWidth;e.screenHeightPoints=window.innerHeight;
e.screenPixelDensity=Math.round(window.devicePixelRatio||1);e.screenDensityFloat=window.devicePixelRatio||1;e.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var f=f===void 0?!1:f;Fn();var g="USER_INTERFACE_THEME_LIGHT";In(165)?g="USER_INTERFACE_THEME_DARK":In(174)?g="USER_INTERFACE_THEME_LIGHT":!R("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(g="USER_INTERFACE_THEME_DARK");
f=f?g:jw()||g;e.userInterfaceTheme=f;if(!b){if(f=Nn())e.connectionType=f;R("web_log_effective_connection_type")&&(f=On())&&(d.client.effectiveConnectionType=f)}var h;if(R("web_log_memory_total_kbytes")&&((h=C.navigator)==null?0:h.deviceMemory)){var k;h=(k=C.navigator)==null?void 0:k.deviceMemory;d.client.memoryTotalKbytes=""+h*1E6}R("web_gcf_hashes_innertube")&&(f=uq())&&(k=f.coldConfigData,h=f.coldHashData,f=f.hotHashData,d.client.configInfo=d.client.configInfo||{},k&&(d.client.configInfo.coldConfigData=
k),h&&(d.client.configInfo.coldHashData=h),f&&(d.client.configInfo.hotHashData=f));k=Dm(C.location.href);!R("web_populate_internal_geo_killswitch")&&k.internalcountrycode&&(e.internalGeo=k.internalcountrycode);e.clientName==="MWEB"||e.clientName==="WEB"?(e.mainAppWebInfo={graftUrl:C.location.href},R("kevlar_woffle")&&sn.h&&(k=sn.h,e.mainAppWebInfo.pwaInstallabilityStatus=!k.h&&k.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),e.mainAppWebInfo.webDisplayMode=tn(),
e.mainAppWebInfo.isWebNativeShareAvailable=navigator&&navigator.share!==void 0):e.clientName==="TVHTML5"&&(!R("web_lr_app_quality_killswitch")&&(k=P("LIVING_ROOM_APP_QUALITY"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{appQuality:k})),k=P("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(e.tvAppInfo=Object.assign(e.tvAppInfo||{},{certificationScope:k}));if(!R("web_populate_time_zone_itc_killswitch")){a:{if(typeof Intl!=="undefined")try{var l=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break a}catch(Oa){}l=
void 0}l&&(e.timeZone=l)}(l=P("EXPERIMENTS_TOKEN",""))?e.experimentsToken=l:delete e.experimentsToken;l=Pm();kw.h||(kw.h=new kw);e=kw.h.h;k=[];h=0;for(var m in e)k[h++]=e[m];d.request=Object.assign({},d.request,{internalExperimentFlags:l,consistencyTokenJars:k});!R("web_prequest_context_killswitch")&&(m=P("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(d.request.externalPrequestContext=m);l=Fn();m=In(58);l=l.get("gsml","");d.user=Object.assign({},d.user);m&&(d.user.enableSafetyMode=m);l&&(d.user.lockedSafetyMode=
!0);R("warm_op_csn_cleanup")?c&&(b=Mu())&&(d.clientScreenNonce=b):!b&&(b=Mu())&&(d.clientScreenNonce=b);a&&(d.clickTracking={clickTrackingParams:a});if(a=E("yt.mdx.remote.remoteClient_"))d.remoteClient=a;qw().setLocationOnInnerTubeContext(d);try{var n=Hm(),p=n.bid;delete n.bid;d.adSignalsInfo={params:[],bid:p};for(var t=y(Object.entries(n)),u=t.next();!u.done;u=t.next()){var x=y(u.value),z=x.next().value,H=x.next().value;n=z;p=H;a=void 0;(a=d.adSignalsInfo.params)==null||a.push({key:n,value:""+p})}var K,
da;if(((K=d.client)==null?void 0:K.clientName)==="TVHTML5"||((da=d.client)==null?void 0:da.clientName)==="TVHTML5_UNPLUGGED"){var ea=P("INNERTUBE_CONTEXT");ea.adSignalsInfo&&(d.adSignalsInfo.advertisingId=ea.adSignalsInfo.advertisingId,d.adSignalsInfo.advertisingIdSignalType="DEVICE_ID_TYPE_CONNECTED_TV_IFA",d.adSignalsInfo.limitAdTracking=ea.adSignalsInfo.limitAdTracking)}}catch(Oa){uu(Oa)}return d}
;function sw(a){var b={"Content-Type":"application/json"};P("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=P("EOM_VISITOR_DATA"):P("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=P("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=P("LOGGED_IN",!1);P("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=P("DEBUG_SETTINGS_METADATA"));a!=="cors"&&((a=P("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=P("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=P("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=P("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a),P("ENABLE_LAVA_HEADER_ON_IT_EXPANSION")&&(a=P("SERIALIZED_LAVA_DEVICE_CONTEXT"))&&(b["X-YouTube-Lava-Device-Context"]=a));return b}
;function tw(){this.h={}}
tw.prototype.contains=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)};
tw.prototype.get=function(a){if(this.contains(a))return this.h[a]};
tw.prototype.set=function(a,b){this.h[a]=b};
tw.prototype.remove=function(a){delete this.h[a]};function uw(){this.mappings=new tw}
uw.prototype.getModuleId=function(a){return a.serviceId.getModuleId()};
uw.prototype.get=function(a){a:{var b=this.mappings.get(a.toString());switch(b.type){case "mapping":a=b.value;break a;case "factory":b=b.value();this.mappings.set(a.toString(),{type:"mapping",value:b});a=b;break a;default:a=Db(b)}}return a};
new uw;function vw(a){return function(){return new a}}
;var ww={},xw=(ww.WEB_UNPLUGGED="^unplugged/",ww.WEB_UNPLUGGED_ONBOARDING="^unplugged/",ww.WEB_UNPLUGGED_OPS="^unplugged/",ww.WEB_UNPLUGGED_PUBLIC="^unplugged/",ww.WEB_CREATOR="^creator/",ww.WEB_KIDS="^kids/",ww.WEB_EXPERIMENTS="^experiments/",ww.WEB_MUSIC="^music/",ww.WEB_REMIX="^music/",ww.WEB_MUSIC_EMBEDDED_PLAYER="^music/",ww.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",ww);
function yw(a){var b=b===void 0?"UNKNOWN_INTERFACE":b;if(a.length===1)return a[0];var c=xw[b];if(c){c=new RegExp(c);for(var d=y(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(xw).forEach(function(g){var h=y(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=y(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function zw(){}
zw.prototype.u=function(a,b,c){b=b===void 0?{}:b;c=c===void 0?xn:c;var d={context:rw(a.clickTrackingParams,!1,this.o)};var e=this.i(a);if(e){this.h(d,e,b);var f;b="/youtubei/v1/"+yw(this.j());(e=(f=Et(a.commandMetadata,Vl))==null?void 0:f.apiUrl)&&(b=e);f=Xu(Wu(b));a=Object.assign({},{command:a},void 0);d={input:f,Za:Yu(f),Ga:d,config:a};d.config.Nb?d.config.Nb.identity=c:d.config.Nb={identity:c};return d}uu(new T("Error: Failed to create Request from Command.",a))};
fa.Object.defineProperties(zw.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function Aw(){}
w(Aw,zw);function Bw(){}
w(Bw,Aw);Bw.prototype.u=function(){return{input:"/getDatasyncIdsEndpoint",Za:Yu("/getDatasyncIdsEndpoint","GET"),Ga:{}}};
Bw.prototype.j=function(){return[]};
Bw.prototype.i=function(){};
Bw.prototype.h=function(){};var Cw={},Dw=(Cw.GET_DATASYNC_IDS=vw(Bw),Cw);function Ew(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Fw(){var a=Ew();a.info||(a.info={});return a.info}
function Gw(a){a=Ew(a);a.metadata||(a.metadata={});return a.metadata}
function Hw(a){a=Ew(a);a.tick||(a.tick={});return a.tick}
function Iw(a){a=Ew(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Jw(a){a=Iw(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Kw(a){var b=Ew(a).nonce;b||(b=Cu(),Ew(a).nonce=b);return b}
;function Lw(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Mw(a){a=a||"";var b=E("ytcsi.reference");b||(Lw(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Lw(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var W={},Nw=(W["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",W["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",W["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",W["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",W["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",W["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",W["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",W["asset.composition_policy"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",W["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",W["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",W["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",W["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",W["asset.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",W["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",W["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",W["asset.references"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",W["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",W["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",W["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",W["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",W["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",W["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",W["song.analytics"]=
"LATENCY_ACTION_CREATOR_SONG_ANALYTICS",W.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",W["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",W["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",W["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",W["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",W["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",W["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",W["channel.monetization"]=
"LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",W["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",W["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",W["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",W["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",W["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",W["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",W["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",
W["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",W["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",W.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",W["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",W["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",W["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",W["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",W["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",W["owner.bulk"]=
"LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",W["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",W["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",W["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",W["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",W["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",W["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",
W["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",W["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",W["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",W["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",W["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",W["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",W["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",W["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",W["playlist.videos"]=
"LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",W["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",W["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",W["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",W["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",W["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",W["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",W["video.copyright"]="LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",W["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",
W["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",W["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",W["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",W["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",W["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",W["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",W["video.rights_management"]="LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",W["video.translations"]=
"LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",W),X={},Ow=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X.app_startup="LATENCY_ACTION_APP_STARTUP",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channel_activity="LATENCY_ACTION_KIDS_CHANNEL_ACTIVITY",X.channels="LATENCY_ACTION_CHANNELS",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X.direct_playback=
"LATENCY_ACTION_DIRECT_PLAYBACK",X.editor="LATENCY_ACTION_EDITOR",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.favorites="LATENCY_ACTION_FAVORITES",X.home="LATENCY_ACTION_HOME",X.inboarding="LATENCY_ACTION_INBOARDING",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",
X.management="LATENCY_ACTION_MANAGEMENT",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.notification_settings="LATENCY_ACTION_KIDS_NOTIFICATION_SETTINGS",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",
X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.projects="LATENCY_ACTION_PROJECTS",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.privacy_policy="LATENCY_ACTION_KIDS_PRIVACY_POLICY",X.review="LATENCY_ACTION_REVIEW",X.search_overview_answer="LATENCY_ACTION_SEARCH_OVERVIEW_ANSWER",X.search_ui="LATENCY_ACTION_SEARCH_UI",
X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.supervision_dashboard="LATENCY_ACTION_KIDS_SUPERVISION_DASHBOARD",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",
X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",
X.attestation_challenge_fetch="LATENCY_ACTION_ATTESTATION_CHALLENGE_FETCH",X);Object.assign(Ow,Nw);function Pw(a,b){Dq.call(this,1,arguments);this.timer=b}
w(Pw,Dq);var Qw=new Eq("aft-recorded",Pw);D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Rw=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Rw);function Sw(){this.h=0}
function Tw(){Sw.h||(Sw.h=new Sw);return Sw.h}
Sw.prototype.tick=function(a,b,c,d){Uw(this,"tick_"+a+"_"+b)||Ho("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Sw.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Uw(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,Ho("latencyActionInfo",a,{cttAuthInfo:c}))};
Sw.prototype.jspbInfo=function(){};
Sw.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Uw(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,Ho("latencyActionSpan",a,{cttAuthInfo:c}))};
function Uw(a,b){Rw[b]=Rw[b]||{count:0};var c=Rw[b];c.count++;c.time=U();a.h||(a.h=Sn(function(){var d=U(),e;for(e in Rw)Rw[e]&&d-Rw[e].time>6E4&&delete Rw[e];a&&(a.h=0)},5E3));
return c.count>5?(c.count===6&&Math.random()*1E5<1&&(c=new T("CSI data exceeded logging limit with key",b.split("_")),b.indexOf("plev")>=0||V(c)),!0):!1}
;var Vw=window;function Ww(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Xw(){var a;if(R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=Y==null?void 0:(a=Y.getEntriesByType)==null?void 0:(b=a.call(Y,"navigation"))==null?void 0:(c=b[0])==null?void 0:(d=c.toJSON)==null?void 0:d.call(c);e?(e.requestStart=Yw(e.requestStart),e.responseEnd=Yw(e.responseEnd),e.redirectStart=Yw(e.redirectStart),e.redirectEnd=Yw(e.redirectEnd),e.domainLookupEnd=Yw(e.domainLookupEnd),e.connectStart=Yw(e.connectStart),e.connectEnd=
Yw(e.connectEnd),e.responseStart=Yw(e.responseStart),e.secureConnectionStart=Yw(e.secureConnectionStart),e.domainLookupStart=Yw(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=R("csi_performance_timing_to_object")?JSON.parse(JSON.stringify(Y.timing)):Y.timing;return a}
function Yw(a){return Math.round(Zw()+a)}
function Zw(){return(R("csi_use_time_origin")||R("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Vw.performance||Vw.mozPerformance||Vw.msPerformance||Vw.webkitPerformance||new Ww;var $w=!1,ax=!1,bx={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj",'script[name="embed_client"]':"ecj",'link[rel="stylesheet"][name="embed-ui"]':"ecc"};Za(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||qi,Y);function cx(a,b){if(!R("web_csi_action_sampling_enabled")||!Ew(b).actionDisabled){var c=Mw(b||"");Hv(c.info,a);a.loadType&&(c=a.loadType,Gw(b).loadType=c);Hv(Jw(b),a);c=Kw(b);b=Ew(b).cttAuthInfo;Tw().info(a,c,b)}}
function dx(){var a,b,c,d;return((d=dt().resolve(new Ys(qq))==null?void 0:(a=rq())==null?void 0:(b=a.loggingHotConfig)==null?void 0:(c=b.csiConfig)==null?void 0:c.debugTicks)!=null?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!R("web_csi_action_sampling_enabled")||!Ew(c).actionDisabled){var d=Kw(c),e;if(e=R("web_csi_debug_sample_enabled")&&d){(dt().resolve(new Ys(qq))==null?0:rq())&&!ax&&(ax=!0,Z("gcfl",U(),c));var f,g,h;e=(dt().resolve(new Ys(qq))==null?void 0:(f=rq())==null?void 0:(g=f.loggingHotConfig)==null?void 0:(h=g.csiConfig)==null?void 0:h.debugSampleWeight)||0;if(f=e!==0)b:{f=dx();if(f.length>0)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=f*31+d.charCodeAt(g),
g<d.length-1&&(f%=0x800000000000);e=f%1E5%e!==0;Ew(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,cx(f,c));Ew(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){if(a[0]!=="_"&&(e=a,f=b,Y.mark))if(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),f===void 0||R("web_csi_disable_alt_time_performance_mark"))Y.mark(e);else{f=R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?f-Y.timeOrigin:f-(Y.timeOrigin||Y.timing.navigationStart);try{Y.mark(e,
{startTime:f})}catch(k){}}e=Mw(c||"");e.tick[a]=b||U();if(e.callback&&e.callback[a])for(e=y(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Iw(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Hw(c);e=b||U();R("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;f=Ew(c).cttAuthInfo;a==="_start"?(a=Tw(),Uw(a,"baseline_"+d)||Ho("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Tw().tick(a,d,b,f);ex(c);return e}}}
function fx(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=ts+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function gx(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;typeof h==="number"&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=y(Object.entries(P("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=y(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function hx(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;d==="SCRIPT"?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):d==="LINK"&&(c=a.href);Fb(document)&&a.setAttribute("nonce",Fb(document));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Zw(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),a.transferSize!==void 0&&a.transferSize===0)?!0:!1:!1}
function ix(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=Tb(b,function(c){return c.name.indexOf(a+"//fonts.gstatic.com/s/")===0});
(b=Vb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&b.startTime>0&&b.responseEnd>0&&(Z("wffs",Yw(b.startTime)),Z("wffe",Yw(b.responseEnd)))}
function jx(a){var b=kx("aft",a);if(b)return b;b=P((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=kx(b[d],a);if(e)return e}return NaN}
function kx(a,b){if(a=Hw(b)[a])return typeof a==="number"?a:a[a.length-1]}
function ex(a){var b=kx("_start",a),c=jx(a),d=R("enable_cow_info_csi")||!$w;b&&c&&d&&(Jq(Qw,new Pw(Math.round(c-b),a)),$w=!0)}
function lx(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=Wb(a,function(c){return c.name==="first-paint"}))return Yw(a.startTime)}var b;
R("csi_use_performance_navigation_timing")||R("csi_use_performance_navigation_timing_tvhtml5")?b=Y.getEntriesByType("first-paint")[0].startTime:b=Y.timing.Mh;return b?Math.max(0,b):0}
;function mx(a,b){sm(function(){Mw("").info.actionType=a;b&&om("TIMING_AFT_KEYS",b);om("TIMING_ACTION",a);var c=gx();Object.keys(c).length>0&&cx(c);c={isNavigation:!0,actionType:Ow[P("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=P("PREVIOUS_ACTION");d&&(c.previousAction=Ow[d]||"LATENCY_ACTION_UNKNOWN");if(d=P("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=P("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=Mu())&&d!=="UNDEFINED_CSN"&&(c.clientScreenNonce=d);d=fx();if(d===1||d===-1)c.isVisible=!0;Gw();Fw();
c.loadType="cold";d=Fw();var e=Xw(),f=Zw(),g=P("CSI_START_TIMESTAMP_MILLIS",0);g>0&&!R("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),d.prerender!==1&&Z("_start",f,void 0));d=lx();d>0&&Z("fpt",d);d=Xw();d.isPerformanceNavigationTiming&&cx({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);d.redirectEnd-d.redirectStart>0&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));d.domainLookupEnd-d.domainLookupStart>0&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));d.connectEnd-d.connectStart>0&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Zw()&&d.connectEnd-d.secureConnectionStart>0&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&ix();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in bx)bx.hasOwnProperty(h)&&(e=bx[h],
hx(h,e)&&d.push(e));if(d.length>0)for(c.resourceInfo=[],h=y(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});cx(c);c=Iw();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Jw();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if(Gw().loadType==="cold"&&(c.loadType==="cold"||d==="cold")){d=Hw();e=Iw();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if(typeof d[k]==="number")Z(k,kx(k));else if(R("log_repeated_ytcsi_ticks"))for(f=
y(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=y(h);for(e=h.next();!e.done;e=h.next())d=e.value,Hv(c,d),Hv(k,d),d=!0;d&&cx(k)}D("ytglobal.timingready_",!0);k=P("TIMING_ACTION");E("ytglobal.timingready_")&&k&&nx()&&jx()&&ex()})()}
function nx(a){return sm(function(){return ox("_start",a)})()}
function px(a,b,c){sm(cx)(a,b,c===void 0?!1:c)}
function qx(a,b,c){return sm(Z)(a,b,c)}
function ox(a,b){return sm(function(){var c=Hw(b);return a in c})()}
function rx(a){if(!R("universal_csi_network_ticks"))return"";a=fc(hc(5,a))||"";for(var b=Object.keys(Bq),c=0;c<b.length;c++){var d=b[c];if(a.includes(d))return d}return""}
function sx(a){if(!R("universal_csi_network_ticks"))return function(){};
var b=Bq[a];return b?(tx(b),function(){var c=R("universal_csi_network_ticks")?(c=Cq[a])?tx(c):!1:!1;return c}):function(){}}
function tx(a){return sm(function(){if(ox(a))return!1;qx(a,void 0,void 0);return!0})()}
function ux(a){sm(function(){if(!nx("attestation_challenge_fetch")||ox(a,"attestation_challenge_fetch"))return!1;qx(a,void 0,"attestation_challenge_fetch");return!0})()}
function vx(){sm(function(){var a=Kw();requestAnimationFrame(function(){setTimeout(function(){a===Kw()&&qx("ol",void 0,void 0)},0)})})()}
var wx=window;wx.ytcsi&&(wx.ytcsi.infoGel=px,wx.ytcsi.tick=qx);var xx="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD shorts_prefetch".split(" "),yx=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function zx(a,b,c,d){this.u=a;this.fa=b;this.j=c;this.o=d;this.i=void 0;this.h=new Map;a.Yb||(a.Yb={});a.Yb=Object.assign({},Dw,a.Yb)}
function Ax(a,b,c,d){if(zx.h!==void 0){if(d=zx.h,a=[a!==d.u,b!==d.fa,c!==d.j,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new T("InnerTubeTransportService is already initialized",a);
}else zx.h=new zx(a,b,c,d)}
function Bx(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=c===void 0?xn:c;var d=Cx(a,b);return d?new si(function(e,f){var g,h,k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d,2);case 2:g=n.i;h=g.u(b,void 0,c);if(!h){f(new T("Error: Failed to build request for command.",b));n.A(0);break}fw(h.input);l=((k=h.Za)==null?void 0:k.mode)==="cors"?"cors":void 0;if(a.j.Nd){m=Dx(h.config,l);n.A(4);break}return n.yield(Ex(h.config,l),5);case 5:m=n.i;case 4:e(Fx(a,h,m)),n.h=
0}})}):xi(new T("Error: No request builder found for command.",b))}
function Gx(a,b){function c(){}
var d="/youtubei/v1/"+yw(nv);var e=e===void 0?{Nb:{identity:xn}}:e;var f=f===void 0?!0:f;c=sx(rx(d));b.context||(b.context=rw(void 0,f));return new si(function(g){var h,k,l,m,n;return A(function(p){if(p.h==1)return h=Wu(d),k=Gm(h)?"same-origin":"cors",a.j.Nd?(l=Dx(e,k),p.A(2)):p.yield(Ex(e,k),3);p.h!=2&&(l=p.i);m=Xu(Wu(d));n={input:m,Za:Yu(m),Ga:b,config:e};g(Fx(a,n,l,c));p.h=0})})}
function Hx(a,b,c){var d;if(b&&!(b==null?0:(d=b.sequenceMetaData)==null?0:d.skipProcessing)&&a.o){d=y(xx);for(var e=d.next();!e.done;e=d.next())e=e.value,a.o[e]&&a.o[e].handleResponse(b,c)}}
function Fx(a,b,c,d){d=d===void 0?function(){}:d;
var e,f,g,h,k,l,m,n,p,t,u,x,z,H,K,da,ea,Oa,Ob,ka,Ya,Qa,Ra,Pa,kh,lh,ws,xs,ys,zs;return A(function(ja){switch(ja.h){case 1:ja.A(2);break;case 3:if((e=ja.i)&&!e.isExpired())return ja.return(Promise.resolve(e.h()));case 2:if(!((f=b)==null?0:(g=f.Ga)==null?0:g.context)){ja.A(4);break}h=b.Ga.context;ja.A(5);break;case 5:k=y([]),l=k.next();case 8:if(l.done){ja.A(4);break}m=l.value;return ja.yield(m.Nh(h),9);case 9:l=k.next();ja.A(8);break;case 4:if((n=a.i)==null||!n.Th(b.input,b.Ga)){ja.A(12);break}return ja.yield(a.i.Ih(b.input,
b.Ga),13);case 13:return p=ja.i,Hx(a,p,b),ja.return(p);case 12:return(x=(u=b.config)==null?void 0:u.Qh)&&a.h.has(x)?t=a.h.get(x):(z=JSON.stringify(b.Ga),da=(K=(H=b.Za)==null?void 0:H.headers)!=null?K:{},b.Za=Object.assign({},b.Za,{headers:Object.assign({},da,c)}),ea=Object.assign({},b.Za),b.Za.method==="POST"&&(ea=Object.assign({},ea,{body:z})),((Oa=b.config)==null?0:Oa.Ye)&&qx(b.config.Ye),Ob=function(){return a.fa.fetch(b.input,ea,b.config)},t=Ob(),x&&a.h.set(x,t)),ja.yield(t,14);
case 14:if((ka=ja.i)&&"error"in ka&&((Ya=ka)==null?0:(Qa=Ya.error)==null?0:Qa.details))for(Ra=ka.error.details,Pa=y(Ra),kh=Pa.next();!kh.done;kh=Pa.next())lh=kh.value,(ws=lh["@type"])&&yx.indexOf(ws)>-1&&(delete lh["@type"],ka=lh);x&&a.h.has(x)&&a.h.delete(x);((xs=b.config)==null?0:xs.Ze)&&qx(b.config.Ze);if(ka||(ys=a.i)==null||!ys.wh(b.input,b.Ga)){ja.A(15);break}return ja.yield(a.i.Hh(b.input,b.Ga),16);case 16:ka=ja.i;case 15:return Hx(a,ka,b),((zs=b.config)==null?0:zs.Ve)&&qx(b.config.Ve),d(),
ja.return(ka||void 0)}})}
function Cx(a,b){a:{a=a.u;var c,d=(c=Et(b,Wl))==null?void 0:c.signal;if(d&&a.Yb&&(c=a.Yb[d])){var e=c();break a}var f;if((c=(f=Et(b,Ul))==null?void 0:f.request)&&a.ke&&(f=a.ke[c])){e=f();break a}for(e in b)if(a.rd[e]&&(b=a.rd[e])){e=b();break a}e=void 0}if(e!==void 0)return Promise.resolve(e)}
function Ex(a,b){var c,d,e,f;return A(function(g){if(g.h==1){e=(c=a)==null?void 0:(d=c.Nb)==null?void 0:d.sessionIndex;var h=g.yield;var k=wn(0,{sessionIndex:e});if(!(k instanceof si)){var l=new si(qi);ti(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},sw(b),f)))})}
function Dx(a,b){var c;a=a==null?void 0:(c=a.Nb)==null?void 0:c.sessionIndex;c=wn(0,{sessionIndex:a});return Object.assign({},sw(b),c)}
;var Ix=new Xs("INNERTUBE_TRANSPORT_TOKEN");function Jx(){}
w(Jx,Aw);Jx.prototype.j=function(){return tv};
Jx.prototype.i=function(a){return Et(a,fm)||void 0};
Jx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
fa.Object.defineProperties(Jx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Kx(){}
w(Kx,Aw);Kx.prototype.j=function(){return uv};
Kx.prototype.i=function(a){return Et(a,em)||void 0};
Kx.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
fa.Object.defineProperties(Kx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});var Lx=new Xs("SHARE_CLIENT_PARAMS_PROVIDER_TOKEN");function Mx(a){this.M=a}
w(Mx,Aw);Mx.prototype.j=function(){return ov};
Mx.prototype.i=function(a){return Et(a,$l)||Et(a,am)||Et(a,Zl)};
Mx.prototype.h=function(a,b){b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);if(b.clientParamIdentifier){var c;if((c=this.M)==null?0:c.h(b.clientParamIdentifier))a.clientParams=this.M.i(b.clientParamIdentifier)}};
Mx[Ws]=[Lx];function Nx(){}
w(Nx,Aw);Nx.prototype.j=function(){return qv};
Nx.prototype.i=function(a){return Et(a,Yl)||void 0};
Nx.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
fa.Object.defineProperties(Nx.prototype,{o:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Ox(){}
w(Ox,Aw);Ox.prototype.j=function(){return rv};
Ox.prototype.i=function(a){return Et(a,dm)||void 0};
Ox.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Px(){}
w(Px,Aw);Px.prototype.j=function(){return sv};
Px.prototype.i=function(a){return Et(a,cm)||void 0};
Px.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Qx(){}
w(Qx,Aw);Qx.prototype.j=function(){return pv};
Qx.prototype.i=function(a){return Et(a,bm)};
Qx.prototype.h=function(a,b,c){c=c===void 0?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Rx=new Xs("FETCH_FN_TOKEN"),Sx=new Xs("PARSE_FN_TOKEN");function Tx(a,b){var c=B.apply(2,arguments);a=a===void 0?0:a;T.call(this,b,c);this.errorType=a;Object.setPrototypeOf(this,this.constructor.prototype)}
w(Tx,T);var Ux=new Xs("NETWORK_SLI_TOKEN");function Vx(a,b,c){this.h=a;this.i=b;this.j=c}
Vx.prototype.fetch=function(a,b,c){var d=this,e,f,g;return A(function(h){e=Wx(d,a,b);g=(f=d.i)!=null?f:fetch;return h.return(g(e).then(function(k){return d.handleResponse(k,c)}).catch(function(k){V(k);
if((c==null?0:c.te)&&k instanceof Tx&&k.errorType===1)return Promise.reject(k)}))})};
function Wx(a,b,c){if(a.h){var d=fc(hc(5,rc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;R("wug_networking_gzip_request")&&(a=kr(c));return new window.Request(b,a)}
Vx.prototype.handleResponse=function(a,b){var c,d=(c=this.j)!=null?c:JSON.parse;c=a.text().then(function(e){if((b==null?0:b.Ie)&&a.ok)return Qf(b.Ie,e);e=e.replace(")]}'","");if((b==null?0:b.te)&&e)try{var f=d(e)}catch(h){throw new Tx(1,"JSON parsing failed after fetch");}var g;return(g=f)!=null?g:d(e)});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Ch(),c=c.then(function(e){V(new T("Error: API fetch failed",a.status,a.url,e));return Object.assign({},e,{errorMetadata:{status:a.status}})}));
return c};
Vx[Ws]=[new Ys(Ux),new Ys(Rx),new Ys(Sx)];var Xx=new Xs("NETWORK_MANAGER_TOKEN");var Yx;function Zx(){var a,b;if(!Yx){var c=dt();$s(c,{Ac:Xx,Qd:Vx});var d={rd:{feedbackEndpoint:vw(Nx),modifyChannelNotificationPreferenceEndpoint:vw(Ox),playlistEditEndpoint:vw(Px),shareEntityEndpoint:vw(Mx),subscribeEndpoint:vw(Jx),unsubscribeEndpoint:vw(Kx),webPlayerShareEntityServiceEndpoint:vw(Qx)}},e=qw(),f={};e&&(f.client_location=e);a===void 0&&(a=vn());b===void 0&&(b=c.resolve(Xx));Ax(d,b,a,f);$s(c,{Ac:Ix,Rd:zx.h});Yx=c.resolve(Ix)}return Yx}
;function $x(a){var b=new rj;if(a.interpreterJavascript){var c=Ml(a.interpreterJavascript);c=Ib(c).toString();var d=new pj;zf(d,6,c);sf(b,pj,1,d)}else a.interpreterUrl&&(c=Nl(a.interpreterUrl),c=pb(c).toString(),d=new qj,zf(d,4,c),sf(b,qj,2,d));a.interpreterHash&&Af(b,3,a.interpreterHash);a.program&&Af(b,4,a.program);a.globalName&&Af(b,5,a.globalName);a.clientExperimentsStateBlob&&Af(b,7,a.clientExperimentsStateBlob);return b}
function ay(a){var b={};a=y(a.split("&"));for(var c=a.next();!c.done;c=a.next())c=c.value.split("="),c.length===2&&(b[c[0]]=c[1]);return b}
;function Aj(){if(R("bg_st_hr"))return"havuokmhhs-0";var a,b=((a=performance)==null?void 0:a.timeOrigin)||0;return"havuokmhhs-"+Math.floor(b)}
function by(a){this.h=a}
by.prototype.bindInnertubeChallengeFetcher=function(a){this.h.bicf(a)};
by.prototype.registerChallengeFetchedCallback=function(a){this.h.bcr(a)};
by.prototype.getLatestChallengeResponse=function(){return this.h.blc()};
function cy(){return new Promise(function(a){var b=window.top;b.ntpevasrs!==void 0?a(new by(b.ntpevasrs)):(b.ntpqfbel===void 0&&(b.ntpqfbel=[]),b.ntpqfbel.push(function(c){a(new by(c))}))})}
;var dy=[],ey=!1;function fy(){if(!R("disable_biscotti_fetch_for_ad_blocker_detection")&&!R("disable_biscotti_fetch_entirely_for_all_web_clients")&&Zu()){var a=P("PLAYER_VARS",{});if(wg(a)!="1"&&!$u(a)){var b=function(){ey=!0;"google_ad_status"in window?om("DCLKSTAT",1):om("DCLKSTAT",2)};
try{xv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}dy.push(Yj.ma(function(){if(!(ey||"google_ad_status"in window)){try{Bv("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ey=!0;om("DCLKSTAT",3)}},5E3))}}}
function gy(){var a=Number(P("DCLKSTAT",0));return isNaN(a)?0:a}
;function hy(a){this.h=a}
[new hy("b.f_"),new hy("j.s_"),new hy("r.s_"),new hy("e.h_"),new hy("i.s_"),new hy("s.t_"),new hy("p.h_"),new hy("s.i_"),new hy("f.i_"),new hy("a.b_"),new hy("a.o_"),new hy("g.o_"),new hy("p.i_"),new hy("p.m_"),new hy("i.k_"),new hy("n.k_"),new hy("i.f_"),new hy("a.s_"),new hy("m.c_"),new hy("n.h_"),new hy("o.p_")].reduce(function(a,b){a[b.h]=b;return a},{});function iy(a,b){var c={preload:!0},d=this;this.network=a;this.options=c;this.o=b;this.h=null;if(c.Yh){var e=new wj;this.h=e.promise;C.ytAtRC&&Yj.Ra(function(){var f,g;return A(function(h){if(h.h==1){if(!C.ytAtRC)return h.return();f=jy(null);return h.yield(d.gb(f),2)}g=h.i;C.ytAtRC&&C.ytAtRC(JSON.stringify(g));h.h=0})},2);
cy().then(function(f){var g,h,k,l;return A(function(m){if(m.h==1)return f.bindInnertubeChallengeFetcher(function(n){return d.gb(jy(n))}),m.yield(zj(),2);
g=m.i;h=f.getLatestChallengeResponse();k=h.challenge;if(!k)throw Error("BGE_MACIL");l={challenge:k,eb:ay(k),vm:g,bgChallenge:new rj};e.resolve(l);f.registerChallengeFetchedCallback(function(n){n=n.challenge;if(!n)throw Error("BGE_MACR");n={challenge:n,eb:ay(n),vm:g,bgChallenge:new rj};d.h=Promise.resolve(n)});
m.h=0})})}else c.preload&&ky(this,new Promise(function(f){Sn(function(){f(ly(d))},0)}))}
iy.prototype.j=function(){var a=this;return A(function(b){return b.h==1?b.yield(Promise.race([a.h,null]),2):b.return(!!b.i)})};
iy.prototype.i=function(a,b,c){var d=this,e,f,g;return A(function(h){d.h===null&&ky(d,ly(d));e=!1;f={};g=function(){var k,l,m;return A(function(n){switch(n.h){case 1:return n.yield(d.h,2);case 2:k=n.i;f.challenge=k.challenge;if(!k.vm){"c1a"in k.eb&&(f.error="ATTESTATION_ERROR_VM_NOT_INITIALIZED");n.A(3);break}l=Object.assign({},{c:k.challenge,e:a},b);za(n,4);e=!0;if(R("attbs")&&!R("attmusi")){m=k.vm.hd({wb:l});n.A(6);break}return n.yield(k.vm.snapshot({wb:l}),7);case 7:m=n.i;case 6:m?f.webResponse=
m:f.error="ATTESTATION_ERROR_VM_NO_RESPONSE";Aa(n,3);break;case 4:Ba(n),f.error="ATTESTATION_ERROR_VM_INTERNAL_ERROR";case 3:if(a==="ENGAGEMENT_TYPE_PLAYBACK"){var p=k.eb,t={};p.c6a&&(t.reportingStatus=String(Number(p.c)^gy()));p.c6b&&(t.broadSpectrumDetectionResult=String(Number(p.c)^Number(P("CATSTAT",0))));f.adblockReporting=t}return n.return(f)}})};
return h.return(Promise.race([g(),my(c,function(){var k=Object.assign({},f);e&&(k.error="ATTESTATION_ERROR_VM_TIMEOUT");return k})]))})};
function jy(a){var b={engagementType:"ENGAGEMENT_TYPE_UNBOUND"};a&&(b.interpreterHash=a);return b}
function ly(a,b){b=b===void 0?0:b;var c,d,e,f,g,h,k,l,m,n,p,t;return A(function(u){switch(u.h){case 1:c=jy(Fj().h);if(R("att_fet_ks"))return za(u,7),u.yield(a.gb(c),9);za(u,4);return u.yield(ny(a,c),6);case 6:g=u.i;e=g.Qe;f=g.Re;d=g;Aa(u,3);break;case 4:return Ba(u),V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),oy(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});case 9:d=u.i;if(!d)throw Error("Fetching Attestation challenge returned falsy");
if(!d.challenge)throw Error("Missing Attestation challenge");e=d.challenge;f=ay(e);if("c1a"in f&&(!d.bgChallenge||!d.bgChallenge.program))throw Error("Expected bg challenge but missing.");Aa(u,3);break;case 7:h=Ba(u);V(h);b++;if(b>=5)return V(Error("Failed to fetch attestation challenge after "+(b+" attempts; not retrying for 24h."))),oy(a,864E5),u.return({challenge:"",eb:{},vm:void 0,bgChallenge:void 0});k=1E3*Math.pow(2,b-1)+Math.random()*1E3;return u.return(new Promise(function(x){Sn(function(){x(ly(a,
b))},k)}));
case 3:l=Number(f.t)||7200;oy(a,l*1E3);m=void 0;if(!("c1a"in f&&d.bgChallenge)){u.A(10);break}n=$x(d.bgChallenge);za(u,11);return u.yield(Gj(Fj(),n),13);case 13:Aa(u,12);break;case 11:return p=Ba(u),V(p),u.return({challenge:e,eb:f,vm:m,bgChallenge:n});case 12:return za(u,14),m=new yj({challenge:n,Bd:{Da:"aGIf"}}),u.yield(m.cd,16);case 16:Aa(u,10);break;case 14:t=Ba(u),V(t),m=void 0;case 10:return u.return({challenge:e,eb:f,vm:m,bgChallenge:n})}})}
iy.prototype.gb=function(a){var b=this,c;return A(function(d){c=b.o;if(!c||c.ta())return d.return(b.network.gb(a));ux("att_pna");return d.return(new Promise(function(e){Yh(c,"publicytnetworkstatus-online",function(){b.network.gb(a).then(e)})}))})};
function py(a){if(!a)throw Error("Fetching Attestation challenge returned falsy");if(!a.challenge)throw Error("Missing Attestation challenge");var b=a.challenge,c=ay(b);if("c1a"in c&&(!a.bgChallenge||!a.bgChallenge.program))throw Error("Expected bg challenge but missing.");return Object.assign({},a,{Qe:b,Re:c})}
function ny(a,b){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:c=void 0,d=0,e={};case 2:if(!(d<5)){h.A(4);break}if(!(d>0)){h.A(5);break}e.od=1E3*Math.pow(2,d-1)+Math.random()*1E3;return h.yield(new Promise(function(k){return function(l){Sn(function(){l(void 0)},k.od)}}(e)),5);
case 5:return za(h,7),h.yield(a.gb(b),9);case 9:return f=h.i,h.return(py(f));case 7:c=g=Ba(h),g instanceof Error&&V(g);case 8:d++;e={od:void 0};h.A(2);break;case 4:throw c;}})}
function ky(a,b){a.h=b}
function qy(a){var b,c,d;return A(function(e){if(e.h==1)return e.yield(Promise.race([a.h,null]),2);b=e.i;var f=ly(a);a.h=f;(c=b)==null||(d=c.vm)==null||d.dispose();e.h=0})}
function oy(a,b){function c(){var e;return A(function(f){e=d-Date.now();return e<1E3?f.yield(qy(a),0):(Sn(c,Math.min(e,6E4)),f.A(0))})}
var d=Date.now()+b;c()}
function my(a,b){return new Promise(function(c){Sn(function(){c(b())},a)})}
;function ry(){this.h=Zx()}
ry.prototype.gb=function(a){ux("att_fsr");return Gx(this.h,a).then(function(b){ux("att_frr");return b})};function sy(){var a,b,c;return A(function(d){if(d.h==1)return a=dt().resolve(Ix),a?d.yield(Bx(a),2):(V(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return V(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.zh;return d.return(c)}V(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;function ty(){var a;return(a=P("WEB_PLAYER_CONTEXT_CONFIGS"))==null?void 0:a.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER}
;var uy=C.caches,vy;function wy(a){var b=a.indexOf(":");return b===-1?{Ed:a}:{Ed:a.substring(0,b),datasyncId:a.substring(b+1)}}
function xy(){return A(function(a){if(vy!==void 0)return a.return(vy);vy=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return za(d,2),d.yield(uy.open("test-only"),4);case 4:return d.yield(uy.delete("test-only"),5);case 5:Aa(d,3);break;case 2:if(c=Ba(d),c instanceof Error&&c.name==="SecurityError")return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(vy)})}
function yy(a){var b,c,d,e,f,g,h;A(function(k){if(k.h==1)return k.yield(xy(),2);if(k.h!=3){if(!k.i)return k.return(!1);b=[];return k.yield(uy.keys(),3)}c=k.i;d=y(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=wy(f),h=g.datasyncId,!h||a.includes(h)||b.push(uy.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(m){return m})}))})}
function zy(){var a,b,c,d,e,f,g;return A(function(h){if(h.h==1)return h.yield(xy(),2);if(h.h!=3){if(!h.i)return h.return(!1);a=Qn("cache contains other");return h.yield(uy.keys(),3)}b=h.i;c=y(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=wy(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Ay(){try{return!!self.sessionStorage}catch(a){return!1}}
;function By(a){a=a.match(/(.*)::.*::.*/);if(a!==null)return a[1]}
function Cy(a){if(Ay()){var b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=By(c);d===void 0||a.includes(d)||self.sessionStorage.removeItem(c)}}}
function Dy(){if(!Ay())return!1;var a=Qn(),b=Object.keys(window.sessionStorage);b=y(b);for(var c=b.next();!c.done;c=b.next())if(c=By(c.value),c!==void 0&&c!==a)return!0;return!1}
;function Ey(){sy().then(function(a){a&&(Wp(a),yy(a),cw(a),Cy(a))})}
function Fy(){var a=new cs;Yj.ma(function(){var b,c,d,e,f;return A(function(g){switch(g.h){case 1:if(R("ytidb_clear_optimizations_killswitch")){g.A(2);break}b=Qn("clear");if(b.startsWith("V")&&b.endsWith("||")){var h=[b];Wp(h);yy(h);cw(h);Cy(h);return g.return()}c=dw();d=Dy();return g.yield(zy(),3);case 3:return e=g.i,g.yield(Xp(),4);case 4:if(f=g.i,!(c||d||e||f))return g.return();case 2:a.ta()?Ey():Yh(a,"publicytnetworkstatus-online",Ey),g.h=0}})})}
;function Gy(){this.state=1;this.vm=null}
r=Gy.prototype;r.initialize=function(a,b,c){if(a.program){var d,e=(d=a.interpreterUrl)!=null?d:null;if(a.interpreterSafeScript)d=Ml(a.interpreterSafeScript);else{var f;d=(f=a.interpreterScript)!=null?f:null}a.interpreterSafeUrl&&(e=Nl(a.interpreterSafeUrl).toString());Hy(this,d,e,a.program,b,c)}else V(Error("Cannot initialize botguard without program"))};
function Hy(a,b,c,d,e,f){var g=g===void 0?"trayride":g;c?(a.state=2,xv(c,function(){window[g]?Iy(a,d,g,e):(a.state=3,zv(c),V(new T("Unable to load Botguard","from "+c)))},f)):b?(f=Fg("SCRIPT"),b instanceof Gb?(f.textContent=Ib(b),Jb(f)):f.textContent=b,f.nonce=Fb(document),document.head.appendChild(f),document.head.removeChild(f),window[g]?Iy(a,d,g,e):(a.state=4,V(new T("Unable to load Botguard from JS")))):V(new T("Unable to load VM; no url or JS provided"))}
r.isLoading=function(){return this.state===2};
function Iy(a,b,c,d){a.state=5;try{var e=new yj({program:b,globalName:c,Bd:{disable:!R("att_web_record_metrics"),Da:"aGIf"}});e.cd.then(function(){a.state=6;d&&d(b)});
a.bd(e)}catch(f){a.state=7,f instanceof Error&&V(f)}}
r.invoke=function(a){a=a===void 0?{}:a;return this.kd()?this.Td({wb:a}):null};
r.dispose=function(){this.bd(null);this.state=8};
r.kd=function(){return!!this.vm};
r.Td=function(a){return this.vm.hd(a)};
r.bd=function(a){zc(this.vm);this.vm=a};function Jy(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Ky(){Gy.apply(this,arguments)}
w(Ky,Gy);Ky.prototype.bd=function(a){var b;(b=Jy())==null||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.hd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Ky.prototype.kd=function(){return!!Jy()};
Ky.prototype.Td=function(a){return Jy().bgvmc(a)};function Ly(a){ot.call(this,a===void 0?"document_active":a);var b=this;this.o=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.G},{from:"document_active",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"document_disposed",action:this.u},{from:"document_disposed_preventable",to:"flush_logs",action:this.M},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.M},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(Ly,ot);Ly.prototype.G=function(a,b){if(!this.h.get("document_disposed_preventable")){a(b==null?void 0:b.event);var c,d;if((b==null?0:(c=b.event)==null?0:c.defaultPrevented)||(b==null?0:(d=b.event)==null?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
Ly.prototype.u=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(b==null?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
Ly.prototype.M=function(a,b){a(b==null?void 0:b.event);this.transition("document_active")};
Ly.prototype.i=function(){this.h=new Map};function My(a){ot.call(this,a===void 0?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.M},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.u},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.M},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.M},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.u},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.u},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){document.visibilityState==="visible"?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
R("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(My,ot);My.prototype.i=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
My.prototype.h=function(a,b){a(b==null?void 0:b.event);R("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
My.prototype.u=function(a,b){a(b==null?void 0:b.event)};
My.prototype.M=function(a,b){a(b==null?void 0:b.event)};function Ny(){this.o=new Ly;this.u=new My}
Ny.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.o.install(c)});
a.forEach(function(c){b.u.install(c)})};function Oy(){this.o=[];this.i=new Map;this.h=new Map;this.j=new Set}
Oy.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=c===void 0?0:c;if(d)if(c=Mu(c===void 0?0:c)){a=this.client;d=new Fu({trackingParams:d});var e=void 0;if(R("no_client_ve_attach_unless_shown")){var f=Yv(d,c);Uv.set(f,!0);Zv(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=Xv({cttAuthInfo:Ou(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);c==="UNDEFINED_CSN"?$v("visualElementGestured",f,d):a?mu("visualElementGestured",d,a,f):Ho("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
Oy.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new Fu({trackingParams:a}),b,c===void 0?0:c)};
Oy.prototype.visualElementStateChanged=function(a,b,c){c=c===void 0?0:c;if(c===0&&this.j.has(c))this.o.push([a,b]);else{var d=c;d=d===void 0?0:d;c=Mu(d);a||(a=(a=Ju(d===void 0?0:d))?new Fu({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=Xv({cttAuthInfo:Ou(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},c==="UNDEFINED_CSN"?$v("visualElementStateChanged",d,b):a?mu("visualElementStateChanged",b,a,d):Ho("visualElementStateChanged",b,d))}};
function Py(a,b){if(b===void 0)for(var c=Lu(),d=0;d<c.length;d++)c[d]!==void 0&&Py(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&Wv(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function Qy(){Ny.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));R("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a));R("web_log_cfg_cee_ks")||Sn(Ry)}
w(Qy,Ny);Qy.prototype.j=function(){Ho("finalPayload",{csn:Mu()})};
Qy.prototype.h=function(){zu(Au)};
Qy.prototype.i=function(){var a=Py;Oy.h||(Oy.h=new Oy);a(Oy.h)};
function Ry(){var a=P("CLIENT_EXPERIMENT_EVENTS");if(a){var b=de();a=y(a);for(var c=a.next();!c.done;c=a.next())c=c.value,b(c)&&Ho("genericClientExperimentEvent",{eventType:c});delete nm.CLIENT_EXPERIMENT_EVENTS}}
;function Sy(){}
function Ty(){var a=E("ytglobal.storage_");a||(a=new Sy,D("ytglobal.storage_",a));return a}
Sy.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return((b=a.storage)==null?0:b.estimate)?d.return(a.storage.estimate()):((c=a.webkitTemporaryStorage)==null?0:c.queryUsageAndQuota)?d.return(Uy()):d.return()})};
function Uy(){var a=navigator;return new Promise(function(b,c){var d;(d=a.webkitTemporaryStorage)!=null&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",Sy);function Fo(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;self.document===void 0||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=.2}
Fo.prototype.Ha=function(a){this.handleError(a)};
Fo.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":R("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":R("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Vy(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=.1&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=
Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Vy(a,b){Ty().estimate().then(function(c){c=Object.assign({},b,{isSw:self.document===void 0,isIframe:self!==self.top,deviceStorageUsageMbytes:Wy(c==null?void 0:c.usage),deviceStorageQuotaMbytes:Wy(c==null?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Wy(a){return typeof a==="undefined"?"-1":String(Math.ceil(a/1048576))}
;var Xy={},Yy=(Xy["api.invalidparam"]=2,Xy.auth=150,Xy["drm.auth"]=150,Xy["heartbeat.net"]=150,Xy["heartbeat.servererror"]=150,Xy["heartbeat.stop"]=150,Xy["html5.unsupportedads"]=5,Xy["fmt.noneavailable"]=5,Xy["fmt.decode"]=5,Xy["fmt.unplayable"]=5,Xy["html5.missingapi"]=5,Xy["html5.unsupportedlive"]=5,Xy["drm.unavailable"]=5,Xy["mrm.blocked"]=151,Xy["embedder.identity.denied"]=152,Xy);var Zy=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn playmuted muted_autoplay_duration_mode".split(" "));function $y(a){return(a.search("cue")===0||a.search("load")===0)&&a!=="loadModule"}
function az(a,b,c){if(typeof a==="string")return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=y(Zy);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function bz(a,b,c,d){if(Sa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};typeof a==="string"&&a.length===16?b.list="PL"+a:b.playlist=a;return b}
;function cz(a){F.call(this);var b=this;this.api=a;this.Y=this.u=!1;this.D=[];this.P={};this.j=[];this.i=[];this.Z=!1;this.sessionId=this.h=null;this.targetOrigin="*";this.U=R("web_player_split_event_bus_iframe");this.o=P("POST_MESSAGE_ORIGIN")||document.location.protocol+"//"+document.location.hostname;this.G=function(c){a:if(!(b.o!=="*"&&c.origin!==b.o||b.h&&c.source!==b.h||typeof c.data!=="string")){try{var d=JSON.parse(c.data)}catch(h){break a}if(d)switch(d.event){case "listening":var e=c.source;
c=c.origin;d=d.id;c!=="null"&&(b.o=b.targetOrigin=c);b.h=e;b.sessionId=d;if(b.u){b.Y=!0;b.u=!1;b.sendMessage("initialDelivery",dz(b));b.sendMessage("onReady");e=y(b.D);for(d=e.next();!d.done;d=e.next())ez(b,d.value);b.D=[]}break;case "command":if(e=d.func,d=d.args,e==="addEventListener"&&d)e=d[0],d=c.origin,e==="onReady"?b.api.logApiCall(e+" invocation",d):e==="onError"&&b.Z&&(b.api.logApiCall(e+" invocation",d,b.errorCode),b.errorCode=void 0),b.api.logApiCall(e+" registration",d),b.P[e]||e==="onReady"||
(c=fz(b,e,d),b.i.push({eventType:e,listener:c,origin:d}),b.U?b.api.handleExternalCall("addEventListener",[e,c],d):b.api.addEventListener(e,c),b.P[e]=!0);else if(c=c.origin,b.api.isExternalMethodAvailable(e,c)){d=d||[];if(d.length>0&&$y(e)){var f=d;if(Sa(f[0])&&!Array.isArray(f[0]))var g=f[0];else switch(g={},e){case "loadVideoById":case "cueVideoById":g=az(f[0],f[1]!==void 0?Number(f[1]):void 0,f[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":g=f[0];typeof g==="string"&&(g={mediaContentUrl:g,
startSeconds:f[1]!==void 0?Number(f[1]):void 0,suggestedQuality:f[2]});c:{if((f=g.mediaContentUrl)&&(f=/\/([ve]|embed)\/([^#?]+)/.exec(f))&&f[2]){f=f[2];break c}f=null}g.videoId=f;g=az(g);break;case "loadPlaylist":case "cuePlaylist":g=bz(f[0],f[1],f[2],f[3])}d.length=1;d[0]=g}b.api.handleExternalCall(e,d,c);$y(e)&&gz(b,dz(b))}}}};
hz.addEventListener("message",this.G);if(a=P("WIDGET_ID"))this.sessionId=a;iz(this,"onReady",function(){b.u=!0;var c=b.api.getVideoData();if(!c.isPlayable){b.Z=!0;c=c.errorCode;var d=d===void 0?5:d;b.errorCode=c?Yy[c]||d:d;b.sendMessage("onError",Number(b.errorCode))}});
iz(this,"onVideoProgress",this.lf.bind(this));iz(this,"onVolumeChange",this.mf.bind(this));iz(this,"onApiChange",this.df.bind(this));iz(this,"onPlaybackQualityChange",this.hf.bind(this));iz(this,"onPlaybackRateChange",this.jf.bind(this));iz(this,"onStateChange",this.kf.bind(this));iz(this,"onWebglSettingsChanged",this.nf.bind(this));iz(this,"onCaptionsTrackListChanged",this.ef.bind(this));iz(this,"captionssettingschanged",this.ff.bind(this))}
w(cz,F);function gz(a,b){a.sendMessage("infoDelivery",b)}
r=cz.prototype;r.sendMessage=function(a,b){a={event:a,info:b===void 0?null:b};this.Y?ez(this,a):this.D.push(a)};
function fz(a,b,c){return function(d){b==="onError"?a.api.logApiCall(b+" invocation",c,d):a.api.logApiCall(b+" invocation",c);a.sendMessage(b,d)}}
function iz(a,b,c){a.j.push({eventType:b,listener:c});a.api.addEventListener(b,c)}
function dz(a){if(!a.api)return null;var b=a.api.getApiInterface();Xb(b,"getVideoData");for(var c={apiInterface:b},d=0,e=b.length;d<e;d++){var f=b[d];if(f.search("get")===0||f.search("is")===0){var g=0;f.search("get")===0?g=3:f.search("is")===0&&(g=2);g=f.charAt(g).toLowerCase()+f.substring(g+1);try{var h=a.api[f]();c[g]=h}catch(k){}}}c.videoData=a.api.getVideoData();c.currentTimeLastUpdated_=Date.now()/1E3;return c}
r.kf=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());gz(this,a)};
r.hf=function(a){a={playbackQuality:a};this.api.getAvailableQualityLevels&&(a.availableQualityLevels=this.api.getAvailableQualityLevels());this.api.getPreferredQuality&&(a.preferredQuality=this.api.getPreferredQuality());gz(this,a)};
r.jf=function(a){gz(this,{playbackRate:a})};
r.df=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
r.mf=function(){gz(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
r.lf=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());gz(this,a)};
r.nf=function(){gz(this,{sphericalProperties:this.api.getSphericalProperties()})};
r.ef=function(){if(this.api.getCaptionTracks){var a={captionTracks:this.api.getCaptionTracks()};gz(this,a)}};
r.ff=function(){if(this.api.getSubtitlesUserSettings){var a={subtitlesUserSettings:this.api.getSubtitlesUserSettings()};gz(this,a)}};
function ez(a,b){if(a.h){b.channel="widget";a.sessionId&&(b.id=a.sessionId);try{var c=JSON.stringify(b);a.h.postMessage(c,a.targetOrigin)}catch(d){V(d)}}}
r.ba=function(){F.prototype.ba.call(this);hz.removeEventListener("message",this.G);for(var a=0;a<this.j.length;a++){var b=this.j[a];this.api.removeEventListener(b.eventType,b.listener)}this.j=[];for(a=0;a<this.i.length;a++)b=this.i[a],this.U?this.api.handleExternalCall("removeEventListener",[b.eventType,b.listener],b.origin):this.api.removeEventListener(b.eventType,b.listener);this.i=[]};
var hz=window;function jz(a,b,c){F.call(this);var d=this;this.api=a;this.id=b;this.origin=c;this.h={};this.j=R("web_player_split_event_bus_iframe");this.i=function(e){a:if(e.origin===d.origin){var f=e.data;if(typeof f==="string"){try{f=JSON.parse(f)}catch(k){break a}if(f.command){var g=f.command;f=f.data;e=e.origin;if(!d.ea){var h=f||{};switch(g){case "addEventListener":typeof h.event==="string"&&d.addListener(h.event,e);break;case "removeEventListener":typeof h.event==="string"&&d.removeListener(h.event,e);break;
default:d.api.isReady()&&d.api.isExternalMethodAvailable(g,e||null)&&(f=kz(g,f||{}),f=d.api.handleExternalCall(g,f,e||null),(f=lz(g,f))&&mz(d,g,f))}}}}}};
nz.addEventListener("message",this.i);mz(this,"RECEIVING")}
w(jz,F);r=jz.prototype;r.addListener=function(a,b){if(!(a in this.h)){var c=this.gf.bind(this,a);this.h[a]=c;this.addEventListener(a,c,b)}};
r.gf=function(a,b){this.ea||mz(this,a,oz(a,b))};
r.removeListener=function(a,b){a in this.h&&(this.removeEventListener(a,this.h[a],b),delete this.h[a])};
r.addEventListener=function(a,b,c){this.j?a==="onReady"?this.api.addEventListener(a,b):this.api.handleExternalCall("addEventListener",[a,b],c||null):this.api.addEventListener(a,b)};
r.removeEventListener=function(a,b,c){this.j?a==="onReady"?this.api.removeEventListener(a,b):this.api.handleExternalCall("removeEventListener",[a,b],c||null):this.api.removeEventListener(a,b)};
function kz(a,b){switch(a){case "loadVideoById":return[az(b)];case "cueVideoById":return[az(b)];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return[bz(b)];case "cuePlaylist":return[bz(b)];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];case "setShuffle":return[b.shufflePlaylist];
case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function lz(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
function oz(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}if(b!=null)return{value:b}}
function mz(a,b,c){a.ea||(b={id:a.id,command:b},c&&(b.data=c),pz.postMessage(JSON.stringify(b),a.origin))}
r.ba=function(){nz.removeEventListener("message",this.i);for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);F.prototype.ba.call(this)};
var nz=window,pz=window.parent;var qz=new Ky;function rz(){return qz.kd()}
function sz(a){a=a===void 0?{}:a;return qz.invoke(a)}
;function tz(a,b,c,d,e){F.call(this);var f=this;this.D=b;this.webPlayerContextConfig=d;this.Fc=e;this.Pa=!1;this.api={};this.pa=this.u=null;this.U=new M;this.h={};this.Z=this.xa=this.elementId=this.Qa=this.config=null;this.Y=!1;this.j=this.G=null;this.Fa={};this.Gc=["onReady"];this.lastError=null;this.sb=NaN;this.P={};this.ha=0;this.i=this.o=a;Bc(this,this.U);uz(this);c?this.ha=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(vz(this),wz(this))}
w(tz,F);r=tz.prototype;r.getId=function(){return this.D};
r.loadNewVideoConfig=function(a){if(!this.ea){this.ha&&(clearTimeout(this.ha),this.ha=0);var b=a||{};b instanceof mv||(b=new mv(b));this.config=b;this.setConfig(a);wz(this);this.isReady()&&xz(this)}};
function vz(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;a.elementId==="video-player"&&(a.elementId=a.D,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.D:a.config.attrs.id=a.D);var c;((c=a.i)==null?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
r.setConfig=function(a){this.Qa=a;this.config=yz(a);vz(this);if(!this.xa){var b;this.xa=zz(this,((b=this.config.args)==null?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if((c=this.config)==null?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=Sj(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=Sj(Number(a)||a))};
function xz(a){if(a.config&&a.config.loaded!==!0)if(a.config.loaded=!0,!a.config.args||a.config.args.autoplay!=="0"&&a.config.args.autoplay!==0&&a.config.args.autoplay!==!1){var b;a.api.loadVideoByPlayerVars((b=a.config.args)!=null?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function Az(a){var b=!0,c=Bz(a);c&&a.config&&(b=c.dataset.version===Cz(a));return b&&!!E("yt.player.Application.create")}
function wz(a){if(!a.ea&&!a.Y){var b=Az(a);if(b&&(Bz(a)?"html5":null)==="html5")a.Z="html5",a.isReady()||Dz(a);else if(Ez(a),a.Z="html5",b&&a.j&&a.o)a.o.appendChild(a.j),Dz(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.G=function(){c=!0;var d=Fz(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?yz(a.config):void 0;d&&d(a.o,e,a.webPlayerContextConfig,a.Fc);Dz(a)};
a.Y=!0;b?a.G():(xv(Cz(a),a.G),(b=Gz(a))&&Ev(b||""),Hz(a)&&!c&&D("yt.player.Application.create",null))}}}
function Bz(a){var b=Eg(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function Dz(a){if(!a.ea){var b=Bz(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.Y=!1;if(!Fz(a,"html5_remove_not_servable_check_killswitch")){var d;if((b==null?0:b.isNotServable)&&a.config&&(b==null?0:b.isNotServable((d=a.config.args)==null?void 0:d.video_id)))return}Iz(a)}else a.sb=setTimeout(function(){Dz(a)},50)}}
function Iz(a){uz(a);a.Pa=!0;var b=Bz(a);if(b){a.u=Jz(a,b,"addEventListener");a.pa=Jz(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=Jz(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.u&&a.u(g,a.h[g]);xz(a);a.xa&&a.xa(a.api);a.U.rb("onReady",a.api)}
function Jz(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if(c!=="sendAbandonmentPing")throw f.params=c,a.lastError=f,e=new T("PlayerProxy error in method call",{error:f,method:c,playerId:a.D}),e.level="WARNING",e;}}}
function uz(a){a.Pa=!1;if(a.pa)for(var b in a.h)a.h.hasOwnProperty(b)&&a.pa(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.u=null;a.pa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Qa};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
r.isReady=function(){return this.Pa};
r.addEventListener=function(a,b){var c=this,d=zz(this,b);d&&(Rb(this.Gc,a)>=0||this.h[a]||(b=Kz(this,a),this.u&&this.u(a,b)),this.U.subscribe(a,d),a==="onReady"&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
r.removeEventListener=function(a,b){this.ea||(b=zz(this,b))&&this.U.unsubscribe(a,b)};
function zz(a,b){var c=b;if(typeof b==="string"){if(a.Fa[b])return a.Fa[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new T("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Fa[b]=c}return c?c:null}
function Kz(a,b){function c(d){function e(){if(!a.ea)try{a.U.rb(b,d!=null?d:void 0)}catch(h){var g=new T("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.D,data:d,originalStack:h.stack,componentStack:h.je});g.level="WARNING";throw g;}}
if(Fz(a,"web_player_publish_events_immediately"))e();else{var f=setTimeout(function(){e();var g=a.P,h=String(f);h in g&&delete g[h]},0);
vg(a.P,String(f))}}
return a.h[b]=c}
r.getPlayerType=function(){return this.Z||(Bz(this)?"html5":null)};
r.getLastError=function(){return this.lastError};
function Ez(a){a.cancel();uz(a);a.Z=null;a.config&&(a.config.loaded=!1);var b=Bz(a);b&&(Az(a)||!Hz(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.o)for(a=a.o;b=a.firstChild;)a.removeChild(b)}
r.cancel=function(){this.G&&Bv(Cz(this),this.G);clearTimeout(this.sb);this.Y=!1};
r.ba=function(){Ez(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new T("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Fa=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Qa=this.config=this.api=null;delete this.o;delete this.i;F.prototype.ba.call(this)};
function Hz(a){var b,c;a=(b=a.config)==null?void 0:(c=b.args)==null?void 0:c.fflags;return!!a&&a.indexOf("player_destroy_old_version=true")!==-1}
function Cz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function Gz(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function Fz(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if((d=a.config)==null?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function yz(a){for(var b={},c=y(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]=typeof e==="object"?yg(e):e}return b}
;var Lz={},Mz="player_uid_"+(Math.random()*1E9>>>0);function Nz(a,b){var c="player",d=!1;d=d===void 0?!0:d;c=typeof c==="string"?Eg(c):c;var e=Mz+"_"+Ta(c),f=Lz[e];if(f&&d)return Oz(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new tz(c,e,a,b,void 0);Lz[e]=f;f.addOnDisposeCallback(function(){delete Lz[f.getId()]});
return f.api}
function Oz(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Pz=null,Qz=null;
function Rz(){vx();var a=Fn(),b=In(119),c=window.devicePixelRatio>1;if(document.body&&gk(document.body,"exp-invert-logo"))if(c&&!gk(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!gk(d,"inverted-hdpi")){var e=ek(d);fk(d,e+(e.length>0?" inverted-hdpi":"inverted-hdpi"))}}else!c&&gk(document.body,"inverted-hdpi")&&hk();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Jn(b)||0;d=c?d|67108864:d&-67108865;d===0?delete Cn[b]:(c=d.toString(16),Cn[b]=c.toString());
c=!0;R("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in Cn)Cn.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(Cn[f])));var f=d.join("&");yn(b,f,63072E3,a.i,c)}}
function Sz(){Tz()}
function Uz(){qx("ep_init_pr");Tz()}
function Tz(){var a=Pz.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Vz(){Pz&&Pz.sendAbandonmentPing&&Pz.sendAbandonmentPing();P("PL_ATT")&&qz.dispose();for(var a=Yj,b=0,c=dy.length;b<c;b++)a.qa(dy[b]);dy.length=0;zv("//static.doubleclick.net/instream/ad_status.js");ey=!1;om("DCLKSTAT",0);Ac(Qz);Pz&&(Pz.removeEventListener("onVideoDataChange",Sz),Pz.destroy())}
;qx("ep_init_eps");D("yt.setConfig",om);D("yt.config.set",om);D("yt.setMsg",wv);D("yt.msgs.set",wv);D("yt.logging.errors.log",uu);
D("writeEmbed",function(){qx("ep_init_wes");var a=P("PLAYER_CONFIG");if(!a){var b=P("PLAYER_VARS");b&&(a={args:b})}hw(!0);a.args.ps==="gvn"&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=P("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);mx("embed",["ol"]);c=ty();if(!c.serializedForcedExperimentIds){var d=Dm(window.location.href);d.forced_experiments&&(c.serializedForcedExperimentIds=
d.forced_experiments)}var e;((e=a.args)==null?0:e.autoplay)&&mx("watch",["pbs","pbu","pbp"]);Pz=Nz(a,c);Pz.addEventListener("onVideoDataChange",Sz);Pz.addEventListener("onReady",Uz);a=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?Qz=new cz(Pz):P("ENABLE_POST_API")&&typeof a==="string"&&typeof b==="string"&&(Qz=new jz(Pz,a,b));fy();R("ytidb_create_logger_embed_killswitch")||Eo();a={};Qy.h||(Qy.h=new Qy);Qy.h.install((a.flush_logs={callback:function(){$t()}},a));
qs();R("ytidb_clear_embedded_player")&&Yj.ma(function(){Zx();Fy()});
R("enable_rta_manager")&&Yj.ma(function(){var f=new ry;var g=R("enable_rta_nsm")?new cs:void 0;iy.h=new iy(f,g);f=iy.h;g=f.i.bind(f);D("yt.aba.att",g);f=f.j.bind(f);D("yt.aba.att2",f)});
qx("ep_init_wee")});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||rz);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||sz);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||gy);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||gw);D("yt.util.activity.init",E("yt.util.activity.init")||Is);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||Ls);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||Js);window.addEventListener("load",sm(function(){Rz()}));
window.addEventListener("pageshow",sm(function(a){a.persisted||Rz()}));
window.addEventListener("pagehide",sm(function(a){R("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Vz():a.persisted||Vz()}));
window.onerror=function(a,b,c,d,e){var f;b=b===void 0?"Unknown file":b;c=c===void 0?0:c;var g=!1,h=pm("log_window_onerror_fraction");if(h&&Math.random()<h)g=!0;else{h=document.getElementsByTagName("script");for(var k=0,l=h.length;k<l;k++)if(h[k].src.indexOf("/debug-")>0){g=!0;break}}if(g){g=!1;e?g=!0:(typeof a==="string"?h=a:ErrorEvent&&a instanceof ErrorEvent?(g=!0,h=a.message,b=a.filename,c=a.lineno,d=a.colno):(h="Unknown error",b="Unknown file",c=0),e=new T(h),e.name="UnhandledWindowError",e.message=
h,e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d);if(!R("wiz_enable_component_stack_propagation_killswitch")){a=e;var m;if((m=f)==null||!m.componentStack)if(m=a.je)f||(f={}),f.componentStack=nu(m)}f&&xu(e,f);g?uu(e):V(e)}};
Ji=vu;window.addEventListener("unhandledrejection",function(a){vu(a.reason)});
Sb(P("ERRORS")||[],function(a){uu.apply(null,a)});
om("ERRORS",[]);qx("ep_init_epe");}).call(this);
