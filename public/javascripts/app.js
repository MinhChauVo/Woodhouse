(function(Y,N,r){'use strict';function G(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.4/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function pb(b){if(null==b||za(b))return!1;var a=
b.length;return 1===b.nodeType&&a?!0:D(b)||L(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(A(b))for(d in b)"prototype"!=d&&("length"!=d&&"name"!=d&&b.hasOwnProperty(d))&&a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(pb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Ob(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}function Mc(b,a,c){for(var d=Ob(b),
e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Pb(b){return function(a,c){b(c,a)}}function Ya(){for(var b=ja.length,a;b;){b--;a=ja[b].charCodeAt(0);if(57==a)return ja[b]="A",ja.join("");if(90==a)ja[b]="0";else return ja[b]=String.fromCharCode(a+1),ja.join("")}ja.unshift("0");return ja.join("")}function Qb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function x(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Qb(b,a);return b}function S(b){return parseInt(b,
10)}function Rb(b,a){return x(new (x(function(){},{prototype:b})),a)}function v(){}function Aa(b){return b}function ca(b){return function(){return b}}function H(b){return"undefined"==typeof b}function z(b){return"undefined"!=typeof b}function V(b){return null!=b&&"object"==typeof b}function D(b){return"string"==typeof b}function qb(b){return"number"==typeof b}function Ka(b){return"[object Date]"==Za.apply(b)}function L(b){return"[object Array]"==Za.apply(b)}function A(b){return"function"==typeof b}
function $a(b){return"[object RegExp]"==Za.apply(b)}function za(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Nc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Oc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function ab(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function La(b,a){var c=ab(b,a);0<=c&&b.splice(c,1);return a}function ga(b,a){if(za(b)||b&&b.$evalAsync&&b.$watch)throw Ma("cpws");if(a){if(b===
a)throw Ma("cpi");if(L(b))for(var c=a.length=0;c<b.length;c++)a.push(ga(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=ga(b[d]);Qb(a,c)}}else(a=b)&&(L(b)?a=ga(b,[]):Ka(b)?a=new Date(b.getTime()):$a(b)?a=RegExp(b.source):V(b)&&(a=ga(b,{})));return a}function Pc(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&"$$"!==c.substr(0,2)&&(a[c]=b[c]);return a}function Ba(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;var c=typeof b,d;if(c==typeof a&&
"object"==c)if(L(b)){if(!L(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!Ba(b[d],a[d]))return!1;return!0}}else{if(Ka(b))return Ka(a)&&b.getTime()==a.getTime();if($a(b)&&$a(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||za(b)||za(a)||L(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!A(b[d])){if(!Ba(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!A(a[d]))return!1;return!0}return!1}function Sb(){return N.securityPolicy&&
N.securityPolicy.isActive||N.querySelector&&!(!N.querySelector("[ng-csp]")&&!N.querySelector("[data-ng-csp]"))}function rb(b,a){var c=2<arguments.length?ta.call(arguments,2):[];return!A(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(ta.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Qc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=r:za(a)?c="$WINDOW":a&&N===a?c="$DOCUMENT":a&&(a.$evalAsync&&
a.$watch)&&(c="$SCOPE");return c}function oa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Qc,a?"  ":null)}function Tb(b){return D(b)?JSON.parse(b):b}function Na(b){b&&0!==b.length?(b=t(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ha(b){b=w(b).clone();try{b.html("")}catch(a){}var c=w("<div>").append(b).html();try{return 3===b[0].nodeType?t(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+t(b)})}catch(d){return t(c)}}function Ub(b){try{return decodeURIComponent(b)}catch(a){}}
function Vb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Ub(c[0]),z(d)&&(b=z(c[1])?Ub(c[1]):!0,a[d]?L(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Wb(b){var a=[];q(b,function(b,d){L(b)?q(b,function(b){a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))}):a.push(ua(d,!0)+(!0===b?"":"="+ua(b,!0)))});return a.length?a.join("&"):""}function sb(b){return ua(b,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ua(b,a){return encodeURIComponent(b).replace(/%40/gi,
"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Rc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(N.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=
(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Xb(b,a){var c=function(){b=w(b);if(b.injector()){var c=b[0]===N?"document":ha(b);throw Ma("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=Yb(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;
if(Y&&!d.test(Y.name))return c();Y.name=Y.name.replace(d,"");bb.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function cb(b,a){a=a||"_";return b.replace(Sc,function(b,d){return(d?a:"")+b.toLowerCase()})}function tb(b,a,c){if(!b)throw Ma("areq",a||"?",c||"required");return b}function Oa(b,a,c){c&&L(b)&&(b=b[b.length-1]);tb(A(b),a,"not a function, got "+(b&&"object"==typeof b?b.constructor.name||"Object":typeof b));return b}function va(b,a){if("hasOwnProperty"===b)throw Ma("badname",
a);}function ub(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&A(b)?rb(e,b):b}function vb(b){var a=b[0];b=b[b.length-1];if(a===b)return w(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return w(c)}function Tc(b){var a=G("$injector"),c=G("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||G;return b.module||(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&
b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],m=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide","constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),
controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:m,run:function(a){d.push(a);return this}};f&&m(f);return n}())}}())}function Pa(b){return b.replace(Uc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Vc,"Moz$1")}function wb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],l=a,k,m,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),m=0,n=k.length;m<n;m++)for(p=w(k[m]),l?p.triggerHandler("$destroy"):l=!l,s=0,p=(C=p.children()).length;s<
p;s++)e.push(Ca(C[s]));return g.apply(this,arguments)}var g=Ca.fn[b],g=g.$original||g;e.$original=g;Ca.fn[b]=e}function I(b){if(b instanceof I)return b;if(!(this instanceof I)){if(D(b)&&"<"!=b.charAt(0))throw xb("nosel");return new I(b)}if(D(b)){var a=N.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);yb(this,a.childNodes);w(N.createDocumentFragment()).append(this)}else yb(this,b)}function zb(b){return b.cloneNode(!0)}function Qa(b){Zb(b);var a=0;for(b=b.childNodes||
[];a<b.length;a++)Qa(b[a])}function $b(b,a,c,d){if(z(d))throw xb("offargs");var e=ka(b,"events");ka(b,"handle")&&(H(a)?q(e,function(a,c){Ab(b,c,a);delete e[c]}):q(a.split(" "),function(a){H(c)?(Ab(b,a,e[a]),delete e[a]):La(e[a]||[],c)}))}function Zb(b,a){var c=b[db],d=Ra[c];d&&(a?delete Ra[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),$b(b)),delete Ra[c],b[db]=r))}function ka(b,a,c){var d=b[db],d=Ra[d||-1];if(z(c))d||(b[db]=d=++Wc,d=Ra[d]={}),d[a]=c;else return d&&d[a]}function ac(b,
a,c){var d=ka(b,"data"),e=z(c),g=!e&&z(a),f=g&&!V(a);d||f||ka(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];x(d,a)}else return d}function Bb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Cb(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").replace(" "+ba(a)+" "," ")))})}function Db(b,a){if(a&&b.setAttribute){var c=(" "+
(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function yb(b,a){if(a){a=a.nodeName||!z(a.length)||za(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function bc(b,a){return eb(b,"$"+(a||"ngController")+"Controller")}function eb(b,a,c){b=w(b);9==b[0].nodeType&&(b=b.find("html"));for(a=L(a)?a:[a];b.length;){for(var d=0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}
function cc(b,a){var c=fb[a.toLowerCase()];return c&&dc[b.nodeName]&&c}function Xc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||N);if(H(c.defaultPrevented)){var g=c.preventDefault;c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};q(a[e||c.type],
function(a){a.call(b,c)});8>=E?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Da(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===r&&(c=b.$$hashKey=Ya()):c=b;return a+":"+c}function Sa(b){q(b,this.put,this)}function ec(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace(Yc,""),c=c.match(Zc),
q(c[1].split($c),function(b){b.replace(ad,function(b,c,d){a.push(d)})})),b.$inject=a):L(b)?(c=b.length-1,Oa(b[c],"fn"),a=b.slice(0,c)):Oa(b,"fn",!0);return a}function Yb(b){function a(a){return function(b,c){if(V(b))q(b,Pb(a));else return a(b,c)}}function c(a,b){va(a,"service");if(A(b)||L(b))b=n.instantiate(b);if(!b.$get)throw Ta("pget",a);return m[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,h,g;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Ua(a),b=b.concat(e(c.requires)).concat(c._runBlocks),
d=c._invokeQueue,h=0,g=d.length;h<g;h++){var f=d[h],l=n.get(f[0]);l[f[1]].apply(l,f[2])}else A(a)?b.push(n.invoke(a)):L(a)?b.push(n.invoke(a)):Oa(a,"module")}catch(m){throw L(a)&&(a=a[a.length-1]),m.message&&(m.stack&&-1==m.stack.indexOf(m.message))&&(m=m.message+"\n"+m.stack),Ta("modulerr",a,m.stack||m.message||m);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ta("cdep",l.join(" <- "));return a[d]}try{return l.unshift(d),a[d]=f,a[d]=b(d)}finally{l.shift()}}
function d(a,b,e){var h=[],g=ec(a),f,k,l;k=0;for(f=g.length;k<f;k++){l=g[k];if("string"!==typeof l)throw Ta("itkn",l);h.push(e&&e.hasOwnProperty(l)?e[l]:c(l))}a.$inject||(a=a[f]);switch(b?-1:h.length){case 0:return a();case 1:return a(h[0]);case 2:return a(h[0],h[1]);case 3:return a(h[0],h[1],h[2]);case 4:return a(h[0],h[1],h[2],h[3]);case 5:return a(h[0],h[1],h[2],h[3],h[4]);case 6:return a(h[0],h[1],h[2],h[3],h[4],h[5]);case 7:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6]);case 8:return a(h[0],h[1],
h[2],h[3],h[4],h[5],h[6],h[7]);case 9:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8]);case 10:return a(h[0],h[1],h[2],h[3],h[4],h[5],h[6],h[7],h[8],h[9]);default:return a.apply(b,h)}}return{invoke:d,instantiate:function(a,b){var c=function(){},e;c.prototype=(L(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return V(e)||A(e)?e:c},get:c,annotate:ec,has:function(b){return m.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",l=[],k=new Sa,m={$provide:{provider:a(c),factory:a(d),
service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,ca(b))}),constant:a(function(a,b){va(a,"constant");m[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=m.$injector=g(m,function(){throw Ta("unpr",l.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||v)});return s}
function bd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==t(a.nodeName)||(b=a)});return b}function g(){var b=c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function cd(b,a,c,d){function e(a){try{a.apply(null,
ta.call(arguments,1))}finally{if(C--,0===C)for(;B.length;)try{B.pop()()}catch(b){c.error(b)}}}function g(a,b){(function la(){q(K,function(a){a()});u=b(la,a)})()}function f(){y=null;P!=h.url()&&(P=h.url(),q(W,function(a){a(h.url())}))}var h=this,l=a[0],k=b.location,m=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,B=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(K,function(a){a()});0===C?a():B.push(a)};
var K=[],u;h.addPollFn=function(a){H(u)&&g(100,n);K.push(a);return a};var P=k.href,Q=a.find("base"),y=null;h.url=function(a,c){k!==b.location&&(k=b.location);if(a){if(P!=a)return P=a,d.history?c?m.replaceState(null,"",a):(m.pushState(null,"",a),Q.attr("href",Q.attr("href"))):(y=a,c?k.replace(a):k.href=a),h}else return y||k.href.replace(/%27/g,"'")};var W=[],R=!1;h.onUrlChange=function(a){if(!R){if(d.history)w(b).on("popstate",f);if(d.hashchange)w(b).on("hashchange",f);else h.addPollFn(f);R=!0}W.push(a);
return a};h.baseHref=function(){var a=Q.attr("href");return a?a.replace(/^https?\:\/\/[^\/]*/,""):""};var $={},Z="",aa=h.baseHref();h.cookies=function(a,b){var d,e,h,g;if(a)b===r?l.cookie=escape(a)+"=;path="+aa+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(l.cookie=escape(a)+"="+escape(b)+";path="+aa).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(l.cookie!==Z)for(Z=l.cookie,d=Z.split("; "),$={},h=0;h<d.length;h++)e=
d[h],g=e.indexOf("="),0<g&&(a=unescape(e.substring(0,g)),$[a]===r&&($[a]=unescape(e.substring(g+1))));return $}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(v),!0):!1}}function dd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new cd(b,d,a,c)}]}function ed(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}
function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw G("$cacheFactory")("iid",b);var f=0,h=x({},d,{id:b}),l={},k=d&&d.capacity||Number.MAX_VALUE,m={},n=null,p=null;return a[b]={put:function(a,b){var c=m[a]||(m[a]={key:a});e(c);if(!H(b))return a in l||f++,l[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=m[a];if(b)return e(b),l[a]},remove:function(a){var b=m[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete m[a],delete l[a],f--)},removeAll:function(){l={};f=0;m={};n=p=null},destroy:function(){m=
h=l=null;delete a[b]},info:function(){return x({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};return b}}function fd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function gc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function l(a,e){va(a,"directive");D(a)?(tb(e,"directiveFactory"),c.hasOwnProperty(a)||
(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);A(f)?f={compile:ca(f)}:!f.compile&&f.link&&(f.compile=ca(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(l){d(l)}});return e}])),c[a].push(e)):q(a,Pb(l));return this};this.aHrefSanitizationWhitelist=function(b){return z(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};
this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate","$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,m,n,p,s,C,B,K,u,P,Q){function y(a,b,c,d,e){a instanceof w||(a=w(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=w(b).wrap("<span></span>").parent()[0])});var g=R(a,b,a,c,d,
e);return function(b,c,d){tb(b,"scope");var e=c?Ea.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var k=e[d];1!=k.nodeType&&9!=k.nodeType||e.eq(d).data("$scope",b)}W(e,"ng-scope");c&&c(e,b);g&&g(b,e,e);return e}}function W(a,b){try{a.addClass(b)}catch(c){}}function R(a,b,c,d,e,g){function f(a,c,d,e){var g,l,m,p,n,s,C,da=[];n=0;for(s=c.length;n<s;n++)da.push(c[n]);C=n=0;for(s=k.length;n<s;C++)l=da[C],c=k[n++],g=k[n++],m=w(l),c?(c.scope?(p=a.$new(),
m.data("$scope",p),W(m,"ng-scope")):p=a,(m=c.transclude)||!e&&b?c(g,p,l,d,$(a,m||b)):c(g,p,l,d,e)):g&&g(a,l.childNodes,r,e)}for(var k=[],l,m,p,n=0;n<a.length;n++)m=new Eb,l=Z(a[n],[],m,0===n?d:r,e),l=(g=l.length?M(l,a[n],m,b,c,null,[],[],g):null)&&g.terminal||!a[n].childNodes||!a[n].childNodes.length?null:R(a[n].childNodes,g?g.transclude:b),k.push(g),k.push(l),p=p||g||l,g=null;return p?f:null}function $(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",
rb(c,c.$destroy));return d}}function Z(a,b,c,d,f){var k=c.$attr,l;switch(a.nodeType){case 1:la(b,ma(Fa(a).toLowerCase()),"E",d,f);var m,p,n;l=a.attributes;for(var s=0,C=l&&l.length;s<C;s++){var B=!1,y=!1;m=l[s];if(!E||8<=E||m.specified){p=m.name;n=ma(p);wa.test(n)&&(p=cb(n.substr(6),"-"));var P=n.replace(/(Start|End)$/,"");n===P+"Start"&&(B=p,y=p.substr(0,p.length-5)+"end",p=p.substr(0,p.length-6));n=ma(p.toLowerCase());k[n]=p;c[n]=m=ba(E&&"href"==p?decodeURIComponent(a.getAttribute(p,2)):m.value);
cc(a,n)&&(c[n]=!0);I(a,b,m,n);la(b,n,"A",d,f,B,y)}}a=a.className;if(D(a)&&""!==a)for(;l=g.exec(a);)n=ma(l[2]),la(b,n,"C",d,f)&&(c[n]=ba(l[3])),a=a.substr(l.index+l[0].length);break;case 3:t(b,a.nodeValue);break;case 8:try{if(l=e.exec(a.nodeValue))n=ma(l[1]),la(b,n,"M",d,f)&&(c[n]=ba(l[2]))}catch(K){}}b.sort(v);return b}function aa(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ia("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=
a.nextSibling}while(0<e)}else d.push(a);return w(d)}function O(a,b,c){return function(d,e,g,f,k){e=aa(e[0],b,c);return a(d,e,g,f,k)}}function M(a,c,d,e,g,f,l,p,n){function B(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=F.require;if(R===F||F.$$isolateScope)a=U(a,{isolateScope:!0});l.push(a)}if(b){c&&(b=O(b,c,d));b.require=F.require;if(R===F||F.$$isolateScope)b=U(b,{isolateScope:!0});p.push(b)}}function P(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),
g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ia("ctreq",a,ea);}else L(a)&&(d=[],q(a,function(a){d.push(P(a,b,c))}));return d}function K(a,e,g,f,n){function B(a,b){var c;2>arguments.length&&(b=a,a=r);Ga&&(c=O);return n(a,b,c)}var y,da,$,u,aa,J,O={},Z;y=c===g?d:Pc(d,new Eb(w(g),d.$attr));da=y.$$element;if(R){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=w(g);J=e.$new(!0);M&&M===R.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);W(f,
"ng-isolate-scope");q(R.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],l,m,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":y.$observe(g,function(a){J[c]=a});y.$$observers[g].$$scope=e;y[g]&&(J[c]=b(y[g])(e));break;case "=":if(f&&!y[g])break;m=s(y[g]);p=m.assign||function(){l=J[c]=m(e);throw ia("nonassign",y[g],R.name);};l=J[c]=m(e);J.$watch(function(){var a=m(e);a!==J[c]&&(a!==l?J[c]=a:p(e,a=J[c]));return l=a});break;case "&":m=s(y[g]);J[c]=function(a){return m(e,a)};break;
default:throw ia("iscp",R.name,c,a);}})}Z=n&&B;Q&&q(Q,function(a){var b={$scope:a===R||a.$$isolateScope?J:e,$element:da,$attrs:y,$transclude:Z},c;aa=a.controller;"@"==aa&&(aa=y[a.name]);c=C(aa,b);O[a.name]=c;Ga||da.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for($=l.length;f<$;f++)try{u=l[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(t){m(t,ha(da))}f=e;R&&(R.template||null===R.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,n);for(f=p.length-1;0<=
f;f--)try{u=p[f],u(u.isolateScope?J:e,da,y,u.require&&P(u.require,da,O),Z)}catch(v){m(v,ha(da))}}n=n||{};var $=-Number.MAX_VALUE,u,Q=n.controllerDirectives,R=n.newIsolateScopeDirective,M=n.templateDirective;n=n.nonTlbTranscludeDirective;for(var la=!1,Ga=!1,v=d.$$element=w(c),F,ea,t,x=e,G,I=0,E=a.length;I<E;I++){F=a[I];var wa=F.$$start,gb=F.$$end;wa&&(v=aa(c,wa,gb));t=r;if($>F.priority)break;if(t=F.scope)u=u||F,F.templateUrl||(H("new/isolated scope",R,F,v),V(t)&&(R=F));ea=F.name;!F.templateUrl&&F.controller&&
(t=F.controller,Q=Q||{},H("'"+ea+"' controller",Q[ea],F,v),Q[ea]=F);if(t=F.transclude)la=!0,F.$$tlb||(H("transclusion",n,F,v),n=F),"element"==t?(Ga=!0,$=F.priority,t=aa(c,wa,gb),v=d.$$element=w(N.createComment(" "+ea+": "+d[ea]+" ")),c=v[0],S(g,w(ta.call(t,0)),c),x=y(t,e,$,f&&f.name,{nonTlbTranscludeDirective:n})):(t=w(zb(c)).contents(),v.html(""),x=y(t,e));if(F.template)if(H("template",M,F,v),M=F,t=A(F.template)?F.template(v,d):F.template,t=hc(t),F.replace){f=F;t=w("<div>"+ba(t)+"</div>").contents();
c=t[0];if(1!=t.length||1!==c.nodeType)throw ia("tplrt",ea,"");S(g,v,c);E={$attr:{}};t=Z(c,[],E);var X=a.splice(I+1,a.length-(I+1));R&&T(t);a=a.concat(t).concat(X);fc(d,E);E=a.length}else v.html(t);if(F.templateUrl)H("template",M,F,v),M=F,F.replace&&(f=F),K=z(a.splice(I,a.length-I),v,d,g,x,l,p,{controllerDirectives:Q,newIsolateScopeDirective:R,templateDirective:M,nonTlbTranscludeDirective:n}),E=a.length;else if(F.compile)try{G=F.compile(v,d,x),A(G)?B(null,G,wa,gb):G&&B(G.pre,G.post,wa,gb)}catch(Y){m(Y,
ha(v))}F.terminal&&(K.terminal=!0,$=Math.max($,F.priority))}K.scope=u&&!0===u.scope;K.transclude=la&&x;return K}function T(a){for(var b=0,c=a.length;b<c;b++)a[b]=Rb(a[b],{$$isolateScope:!0})}function la(b,e,g,f,k,p,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var s;e=a.get(e+d);for(var C=0,B=e.length;C<B;C++)try{s=e[C],(f===r||f>s.priority)&&-1!=s.restrict.indexOf(g)&&(p&&(s=Rb(s,{$$start:p,$$end:n})),b.push(s),k=s)}catch(y){m(y)}}return k}function fc(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;
q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(W(e,b),a["class"]=(a["class"]?a["class"]+" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function z(a,b,c,d,e,g,f,l){var k=[],m,s,C=b[0],B=a.shift(),y=x({},B,{templateUrl:null,transclude:null,replace:null,$$originalDirective:B}),P=A(B.templateUrl)?B.templateUrl(b,
c):B.templateUrl;b.html("");n.get(u.getTrustedResourceUrl(P),{cache:p}).success(function(p){var n,K;p=hc(p);if(B.replace){p=w("<div>"+ba(p)+"</div>").contents();n=p[0];if(1!=p.length||1!==n.nodeType)throw ia("tplrt",B.name,P);p={$attr:{}};S(d,b,n);var W=Z(n,[],p);V(B.scope)&&T(W);a=W.concat(a);fc(c,p)}else n=C,b.html(p);a.unshift(y);m=M(a,n,c,e,b,B,g,f,l);q(d,function(a,c){a==n&&(d[c]=b[0])});for(s=R(b[0].childNodes,e);k.length;){p=k.shift();K=k.shift();var u=k.shift(),Q=k.shift(),W=b[0];K!==C&&(W=
zb(n),S(u,w(K),W));K=m.transclude?$(p,m.transclude):Q;m(s,p,W,d,K)}k=null}).error(function(a,b,c,d){throw ia("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),k.push(c),k.push(d),k.push(e)):m(s,b,c,d,e)}}function v(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function H(a,b,c,d){if(b)throw ia("multidir",b.name,c.name,a,ha(d));}function t(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:ca(function(a,b){var c=b.parent(),e=c.data("$binding")||
[];e.push(d);W(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function G(a,b){if("srcdoc"==b)return u.HTML;var c=Fa(a);if("xlinkHref"==b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function I(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Fa(a))throw ia("selmulti",ha(a));c.push({priority:100,compile:function(){return{pre:function(c,d,l){d=l.$$observers||(l.$$observers={});if(f.test(e))throw ia("nodomevents");if(g=b(l[e],
!0,G(a,e)))l[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(l.$$observers&&l.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?l.$updateClass(a,b):l.$set(e,a)})}}}})}}function S(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,l;if(a)for(f=0,l=a.length;f<l;f++)if(a[f]==d){a[f++]=c;l=f+e-1;for(var k=a.length;f<k;f++,l++)l<k?a[f]=a[l]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=N.createDocumentFragment();a.appendChild(d);c[w.expando]=d[w.expando];d=1;for(e=b.length;d<e;d++)g=b[d],
w(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function U(a,b){return x(function(){return a.apply(null,arguments)},a,b)}var Eb=function(a,b){this.$$element=a;this.$attr=b||{}};Eb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&P.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&P.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(ic(b,a));this.$addClass(ic(a,b))},$set:function(a,b,c,d){var e=cc(this.$$element[0],a);e&&(this.$$element.prop(a,
b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=cb(a,"-"));e=Fa(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=b=Q(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){m(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);B.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var ea=b.startSymbol(),Ga=
b.endSymbol(),hc="{{"==ea||"}}"==Ga?Aa:function(a){return a.replace(/\{\{/g,ea).replace(/}}/g,Ga)},wa=/^ngAttr[A-Z]/;return y}]}function ma(b){return Pa(b.replace(gd,""))}function ic(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function hd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){va(a,"controller");V(a)?x(b,a):b[a]=d};this.$get=["$injector","$window",function(c,
d){return function(e,g){var f,h,l;D(e)&&(f=e.match(a),h=f[1],l=f[3],e=b.hasOwnProperty(h)?b[h]:ub(g.$scope,h,!0)||ub(d,h,!0),Oa(e,h,!0));f=c.instantiate(e,g);if(l){if(!g||"object"!=typeof g.$scope)throw G("$controller")("noscp",h||e.name,l);g.$scope[l]=f}return f}}]}function id(){this.$get=["$window",function(b){return w(b.document)}]}function jd(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function jc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=
b.indexOf(":");c=t(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function kc(b){var a=V(b)?b:r;return function(c){a||(a=jc(b));return c?a[t(c)]||null:a}}function lc(b,a,c){if(A(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function kd(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Tb(d)));return d}],
transformRequest:[function(a){return V(a)&&"[object File]"!==Za.apply(a)?oa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:d,put:d,patch:d},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=x({},a,{data:lc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?
b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,d){A(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=x({},a.headers),g,h,c=x({},c.common,c[t(a.method)]);b(c);b(d);a:for(g in c){a=t(g);for(h in d)if(t(h)===a)continue a;d[g]=c[g]}return d}(a);x(d,a);d.headers=g;d.method=Ha(d.method);(a=Fb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var h=
[function(a){g=a.headers;var b=lc(a.data,kc(g),a.transformRequest);H(a.data)&&q(g,function(a,b){"content-type"===t(b)&&delete g[b]});H(a.withCredentials)&&!H(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],f=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&h.unshift(a.request,a.requestError);(a.response||a.responseError)&&h.push(a.response,a.responseError)});h.length;){a=h.shift();var k=h.shift(),f=f.then(a,k)}f.success=function(a){f.then(function(b){a(b.data,
b.status,b.headers,d)});return f};f.error=function(a){f.then(null,function(b){a(b.data,b.status,b.headers,d)});return f};return f}function C(b,c,g){function f(a,b,c){q&&(200<=a&&300>a?q.put(r,[a,b,jc(c)]):q.remove(r));l(b,a,c);d.$$phase||d.$apply()}function l(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:kc(d),config:b})}function k(){var a=ab(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,q,u,r=B(b.url,b.params);s.pendingRequests.push(b);
C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(q=V(b.cache)?b.cache:V(e.cache)?e.cache:K);if(q)if(u=q.get(r),z(u)){if(u.then)return u.then(k,k),u;L(u)?l(u[1],u[0],ga(u[2])):l(u,200,{})}else q.put(r,C);H(u)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function B(a,b){if(!b)return a;var c=[];Mc(b,function(a,b){null===a||H(a)||(L(a)||(a=[a]),q(a,function(a){V(a)&&(a=oa(a));c.push(ua(b)+"="+ua(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var K=
c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(x(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(x(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=
e;return s}]}function ld(){this.$get=["$browser","$window","$document",function(b,a,c){return md(b,nd,b.defer,a.angular.callbacks,c[0])}]}function md(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;E&&8>=E?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,
l,k,m,n,p,s,C){function B(){u=f;r&&r();y&&y.abort()}function K(a,d,e,g){var f=xa(l).protocol;W&&c.cancel(W);r=y=null;d="file"==f&&0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(v)}var u;b.$$incOutstandingRequestCount();l=l||b.url();if("jsonp"==t(e)){var P="_"+(d.counter++).toString(36);d[P]=function(a){d[P].data=a};var r=g(l.replace("JSON_CALLBACK","angular.callbacks."+P),function(){d[P].data?K(m,200,d[P].data):K(m,u||-2);delete d[P]})}else{var y=new a;y.open(e,l,!0);q(n,function(a,
b){z(a)&&y.setRequestHeader(b,a)});y.onreadystatechange=function(){if(4==y.readyState){var a=null,b=null;u!==f&&(a=y.getAllResponseHeaders(),b=y.responseType?y.response:y.responseText);K(m,u||y.status,b,a)}};s&&(y.withCredentials=!0);C&&(y.responseType=C);y.send(k||null)}if(0<p)var W=c(B,p);else p&&p.then&&p.then(B)}}function od(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,
d,e){function g(g,k,m){for(var n,p,s=0,C=[],B=g.length,K=!1,u=[];s<B;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(K=g.substring(n+f,p))),s.exp=K,s=p+h,K=!0):(s!=B&&C.push(g.substring(s)),s=B);(B=C.length)||(C.push(""),B=1);if(m&&1<C.length)throw mc("noconcat",g);if(!k||K)return u.length=B,s=function(a){try{for(var b=0,c=B,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=m?e.getTrusted(m,f):e.valueOf(f),null===f||H(f)?f="":"string"!=typeof f&&(f=oa(f))),
u[b]=f;return u.join("")}catch(h){a=mc("interr",g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function pd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,l){var k=a.setInterval,m=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=z(l)&&!l;h=z(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),m(p.$$intervalId),delete e[p.$$intervalId]);
C||b.$apply()},f);e[p.$$intervalId]=n;return p}var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function qd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",
gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",
mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function nc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=sb(b[a]);return b.join("/")}function oc(b,a,c){b=xa(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||rd[b.protocol]||null}function pc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=xa(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Vb(b.search);a.$$hash=decodeURIComponent(b.hash);
a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function na(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Va(b){var a=b.indexOf("#");return-1==a?b:b.substr(0,a)}function Gb(b){return b.substr(0,Va(b).lastIndexOf("/")+1)}function qc(b,a){this.$$html5=!0;a=a||"";var c=Gb(b);oc(b,this,b);this.$$parse=function(a){var e=na(c,a);if(!D(e))throw Hb("ipthprfx",a,c);pc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Wb(this.$$search),b=this.$$hash?
"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;if((e=na(b,d))!==r)return d=e,(e=na(a,e))!==r?c+(na("/",e)||e):b+d;if((e=na(c,d))!==r)return c+e;if(c==d+"/")return c}}function Ib(b,a){var c=Gb(b);oc(b,this,b);this.$$parse=function(d){var e=na(b,d)||na(c,d),e="#"==e.charAt(0)?na(a,e):this.$$html5?e:"";if(!D(e))throw Hb("ihshprfx",d,a);pc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,
""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Wb(this.$$search),e=this.$$hash?"#"+sb(this.$$hash):"";this.$$url=nc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Va(b)==Va(a))return a}}function rc(b,a){this.$$html5=!0;Ib.apply(this,arguments);var c=Gb(b);this.$$rewrite=function(d){var e;if(b==Va(d))return d;if(e=na(c,d))return b+a+e;if(c===d+"/")return c}}function hb(b){return function(){return this[b]}}
function sc(b,a){return function(c){if(H(c))return this[b];this[b]=a(c);this.$$compose();return this}}function sd(){var b="",a=!1;this.hashPrefix=function(a){return z(a)?(b=a,this):b};this.html5Mode=function(b){return z(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,l=d.baseHref(),k=d.url();a?(l=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(l||"/"),e=e.history?qc:rc):(l=Va(k),
e=Ib);h=new e(l,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=w(a.target);"a"!==t(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href"),f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Y.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$broadcast("$locationChangeStart",
a,h.absUrl()).defaultPrevented?d.url(h.absUrl()):(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);f(b)}),c.$$phase||c.$digest()))});var m=0;c.$watch(function(){var a=d.url(),b=h.$$replace;m&&a==h.absUrl()||(m++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return m});return h}]}function td(){var b=!0,a=this;this.debugEnabled=function(a){return z(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof
Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||v;return e.apply?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function pa(b,
a){if("constructor"===b)throw ya("isecfld",a);return b}function Wa(b,a){if(b){if(b.constructor===b)throw ya("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw ya("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw ya("isecdom",a);}return b}function ib(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=pa(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(qa(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=pa(a.shift(),d);return b[g]=c}function tc(b,a,c,d,e,g,f){pa(b,g);pa(a,g);pa(c,g);pa(d,g);pa(e,g);return f.unwrapPromises?function(f,l){var k=l&&l.hasOwnProperty(b)?l:f,m;if(null===k||k===r)return k;(k=k[b])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!a||null===k||k===r)return k;(k=k[a])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!c||null===k||k===r)return k;(k=k[c])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,
m.then(function(a){m.$$v=a})),k=k.$$v);if(!d||null===k||k===r)return k;(k=k[d])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);if(!e||null===k||k===r)return k;(k=k[e])&&k.then&&(qa(g),"$$v"in k||(m=k,m.$$v=r,m.then(function(a){m.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null===k||k===r)return k;k=k[b];if(!a||null===k||k===r)return k;k=k[a];if(!c||null===k||k===r)return k;k=k[c];if(!d||null===k||k===r)return k;k=k[d];return e&&null!==
k&&k!==r?k=k[e]:k}}function uc(b,a,c){if(Jb.hasOwnProperty(b))return Jb[b];var d=b.split("."),e=d.length,g;if(a.csp)g=6>e?tc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=tc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);return h};else{var f="var l, fn, p;\n";q(d,function(b,d){pa(b,c);f+="if(s === null || s === undefined) return s;\nl=s;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,
"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=function(){return f};g=function(a,b){return h(a,b,qa)}}"hasOwnProperty"!==b&&(Jb[b]=g);return g}function ud(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return z(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return z(b)?(a.logPromiseWarnings=
b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;qa=function(b){a.logPromiseWarnings&&!vc.hasOwnProperty(b)&&(vc[b]=!0,e.warn("[$parse] Promise found in the expression `"+b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Kb(a);e=(new Xa(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return v}}}]}
function vd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return wd(function(a){b.$evalAsync(a)},a)}]}function wd(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=[],l,k;return k={resolve:function(a){if(h){var c=h;h=r;l=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],l.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},
promise:{then:function(b,f,g){var k=e(),C=function(d){try{k.resolve((A(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},B=function(b){try{k.resolve((A(f)?f:d)(b))}catch(c){k.reject(c),a(c)}},K=function(b){try{k.notify((A(g)?g:c)(b))}catch(d){a(d)}};h?h.push([C,B,K]):l.then(C,B,K);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,f){var g=null;try{g=(a||c)()}catch(h){return b(h,!1)}return g&&
A(g.then)?g.then(function(){return b(e,f)},function(a){return b(a,!1)}):b(e,f)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&A(a.then)?a:{then:function(c){var d=e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(f,g){var m=e();b(function(){try{m.resolve((A(g)?g:d)(c))}catch(b){m.reject(b),a(b)}});return m.promise}}};return{defer:e,reject:f,when:function(h,l,k,m){var n=e(),p,s=function(b){try{return(A(l)?
l:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(A(k)?k:d)(b)}catch(c){return a(c),f(c)}},B=function(b){try{return(A(m)?m:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,C,B)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(B(a))})});return n.promise},all:function(a){var b=e(),c=0,d=L(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});
0===c&&b.resolve(d);return b.promise}}}function xd(){var b=10,a=G("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,e,g,f){function h(){this.$id=Ya();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$isolateBindings=
{}}function l(b){if(n.$$phase)throw a("inprog",n.$$phase);n.$$phase=b}function k(a,b){var c=g(a);Oa(c,b);return c}function m(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=Ya());a["this"]=a;a.$$listeners={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=
this.$$childTail.$$nextSibling=a:this.$$childHead=this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),f=this.$$watchers,g={fn:b,last:m,get:e,exp:a,eq:!!d};c=null;if(!A(b)){var h=k(b||v,"listener");g.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var l=g.fn;g.fn=function(a,b,c){l.call(this,a,b,c);La(f,g)}}f||(f=this.$$watchers=[]);f.unshift(g);return function(){La(f,g)}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),k=[],l={},m=0;return this.$watch(function(){e=
h(c);var a,b;if(V(e))if(pb(e))for(d!==k&&(d=k,m=d.length=0,f++),a=e.length,m!==a&&(f++,d.length=m=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==l&&(d=l={},m=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(m++,d[b]=e[b],f++));if(m>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(m--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,q=this.$$postDigestQueue,r,t,y=
b,v,w=[],z,Z,aa;l("$digest");c=null;do{t=!1;for(v=this;k.length;){try{aa=k.shift(),aa.scope.$eval(aa.expression)}catch(O){n.$$phase=null,e(O)}c=null}a:do{if(h=v.$$watchers)for(r=h.length;r--;)try{if(d=h[r])if((f=d.get(v))!==(g=d.last)&&!(d.eq?Ba(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))t=!0,c=d,d.last=d.eq?ga(f):f,d.fn(f,g===m?f:g,v),5>y&&(z=4-y,w[z]||(w[z]=[]),Z=A(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,Z+="; newVal: "+oa(f)+"; oldVal: "+oa(g),w[z].push(Z));else if(d===
c){t=!1;break a}}catch(M){n.$$phase=null,e(M)}if(!(h=v.$$childHead||v!==this&&v.$$nextSibling))for(;v!==this&&!(h=v.$$nextSibling);)v=v.$parent}while(v=h);if(t&&!y--)throw n.$$phase=null,a("infdig",b,oa(w));}while(t||k.length);for(n.$$phase=null;q.length;)try{q.shift()()}catch(T){e(T)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==n&&(a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&(a.$$childTail=this.$$prevSibling),
this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){n.$$phase||n.$$asyncQueue.length||f.defer(function(){n.$$asyncQueue.length&&n.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return l("$apply"),this.$eval(a)}catch(b){e(b)}finally{n.$$phase=null;try{n.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);return function(){c[ab(c,b)]=null}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=[h].concat(ta.call(arguments,1)),l,m;do{d=f.$$listeners[a]||c;h.currentScope=
f;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){e(n)}else d.splice(l,1),l--,m--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(ta.call(arguments,1)),h,k;do{c=d;f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){e(l)}else d.splice(h,1),h--,k--;if(!(d=c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==
this&&!(d=c.$$nextSibling);)c=c.$parent}while(c=d);return f}};var n=new h;return n}]}function yd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return z(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return z(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!E||8<=E)if(g=xa(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function zd(b){if("self"===b)return b;if(D(b)){if(-1<
b.indexOf("***"))throw ra("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if($a(b))return RegExp("^"+b.source+"$");throw ra("imatcher");}function wc(b){var a=[];z(b)&&q(b,function(b){a.push(zd(b))});return a}function Ad(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=function(a){arguments.length&&(b=wc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&
(a=wc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw ra("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);
return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw ra("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw ra("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=xa(d.toString()),m,n,p=!1;m=0;for(n=b.length;m<n;m++)if("self"===b[m]?Fb(g):b[m].exec(g.href)){p=!0;break}if(p)for(m=0,n=a.length;m<
n;m++)if("self"===a[m]?Fb(g):a[m].exec(g.href)){p=!1;break}if(p)return d;throw ra("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw ra("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Bd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw ra("iequirks");var e=ga(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=
d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Aa);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=t(b);e[Pa("parse_as_"+c)]=function(b){return g(a,b)};e[Pa("get_trusted_"+c)]=function(b){return f(a,b)};e[Pa("trust_as_"+c)]=function(b){return h(a,b)}});return e}]}function Cd(){this.$get=["$window","$document",function(b,
a){var c={},d=S((/android (\d+)/.exec(t((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,l=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,m=!1,n=!1;if(k){for(var p in k)if(m=l.exec(p)){h=m[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");m=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in k);!d||m&&n||(m=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||
!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==E)return!1;if(H(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Sb(),vendorPrefix:h,transitions:m,animations:n,msie:E,msieDocumentMode:f}}]}function Dd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,l){var k=c.defer(),m=k.promise,n=z(l)&&!l;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[m.$$timeoutId]}n||
b.$apply()},h);m.$$timeoutId=h;g[h]=k;return m}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function xa(b,a){var c=b;E&&(U.setAttribute("href",c),c=U.href);U.setAttribute("href",c);return{href:U.href,protocol:U.protocol?U.protocol.replace(/:$/,""):"",host:U.host,search:U.search?U.search.replace(/^\?/,""):"",hash:U.hash?U.hash.replace(/^#/,""):"",hostname:U.hostname,port:U.port,
pathname:"/"===U.pathname.charAt(0)?U.pathname:"/"+U.pathname}}function Fb(b){b=D(b)?xa(b):b;return b.protocol===xc.protocol&&b.host===xc.host}function Ed(){this.$get=ca(Y)}function yc(b){function a(d,e){if(V(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+c)}}];a("currency",zc);a("date",Ac);a("filter",Fd);a("json",Gd);a("limitTo",Hd);a("lowercase",Id);a("number",Bc);a("orderBy",
Cc);a("uppercase",Jd)}function Fd(){return function(b,a,c){if(!L(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return bb.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,
b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)"$"==f?function(){if(a[f]){var b=f;e.push(function(c){return g(c,a[b])})}}():function(){if("undefined"!=typeof a[f]){var b=f;e.push(function(c){return g(ub(c,b),a[b])})}}();break;case "function":e.push(a);break;default:return b}for(var d=[],h=
0;h<b.length;h++){var l=b[h];e.check(l)&&d.push(l)}return d}}function zc(b){var a=b.NUMBER_FORMATS;return function(b,d){H(d)&&(d=a.CURRENCY_SYM);return Dc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Bc(b){var a=b.NUMBER_FORMATS;return function(b,d){return Dc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Dc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);var f=b+"",h="",l=[],k=!1;if(-1!==f.indexOf("e")){var m=f.match(/([\d\.]+)e(-?)(\d+)/);
m&&"-"==m[2]&&m[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Ec)[1]||"").length;H(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Ec);f=b[0];b=b[1]||"";var m=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(m=f.length-n,k=0;k<m;k++)0===(m-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=m;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}l.push(g?a.negPre:
a.posPre);l.push(h);l.push(g?a.negSuf:a.posSuf);return l.join("")}function Lb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function X(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Lb(e,a,d)}}function jb(b,a){return function(c,d){var e=c["get"+b](),g=Ha(a?"SHORT"+b:b);return d[g][e]}}function Ac(b){function a(a){var b;if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,
l=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));l.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,l;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&(c=Kd.test(c)?S(c):a(c));qb(c)&&(c=new Date(c));if(!Ka(c))return c;for(;e;)(l=Ld.exec(e))?
(f=f.concat(ta.call(l,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Md[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Gd(){return function(b){return oa(b,!0)}}function Hd(){return function(b,a){if(!L(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Cc(b){return function(a,
c,d){function e(a,b){return Na(b)?function(b,c){return a(c,b)}:a}if(!L(a)||!c)return a;c=L(c)?c:[c];c=Oc(c,function(a){var c=!1,d=a||Aa;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),f=typeof c,g=typeof e;f==g?("string"==f&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=f<g?-1:1;return c},c)});for(var g=[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=
c[d](a,b);if(0!==e)return e}return 0},d))}}function sa(b){A(b)&&(b={link:b});b.restrict=b.restrict||"AC";return ca(b)}function Fc(b,a){function c(a,c){c=c?"-"+cb(c,"-"):"";b.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}var d=this,e=b.parent().controller("form")||mb,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ia);c(!0);d.$addControl=function(a){va(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=
function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});La(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(La(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=ab(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ia).addClass(nb);d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(nb).addClass(Ia);
d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function ob(b,a,c,d,e,g){var f=!1;a.on("compositionstart",function(){f=!0});a.on("compositionend",function(){f=!1});var h=function(){if(!f){var e=a.val();Na(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&b.$apply(function(){d.$setViewValue(e)})}};if(e.hasEvent("input"))a.on("input",h);else{var l,k=function(){l||(l=g.defer(function(){h();l=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",
k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var m=c.ngPattern,n=function(a,b){if(d.$isEmpty(b)||a.test(b))return d.$setValidity("pattern",!0),b;d.$setValidity("pattern",!1);return r};m&&((e=m.match(/^\/(.*)\/([gim]*)$/))?(m=RegExp(e[1],e[2]),e=function(a){return n(m,a)}):e=function(c){var d=b.$eval(m);if(!d||!d.test)throw G("ngPattern")("noregexp",m,d,ha(a));return n(d,c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var p=S(c.ngMinlength);
e=function(a){if(!d.$isEmpty(a)&&a.length<p)return d.$setValidity("minlength",!1),r;d.$setValidity("minlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var s=S(c.ngMaxlength);e=function(a){if(!d.$isEmpty(a)&&a.length>s)return d.$setValidity("maxlength",!1),r;d.$setValidity("maxlength",!0);return a};d.$parsers.push(e);d.$formatters.push(e)}}function Mb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===a||c.$index%2===
a){var d=f(b||"");h?Ba(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=ga(b)}function f(a){if(L(a))return a.join(" ");if(V(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var t=function(b){return D(b)?b.toLowerCase():b},Ha=function(b){return D(b)?b.toUpperCase():b},
E,w,Ca,ta=[].slice,Nd=[].push,Za=Object.prototype.toString,Ma=G("ng"),bb=Y.angular||(Y.angular={}),Ua,Fa,ja=["0","0","0"];E=S((/msie (\d+)/.exec(t(navigator.userAgent))||[])[1]);isNaN(E)&&(E=S((/trident\/.*; rv:(\d+)/.exec(t(navigator.userAgent))||[])[1]));v.$inject=[];Aa.$inject=[];var ba=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Fa=9>E?function(b){b=b.nodeName?b:b[0];return b.scopeName&&"HTML"!=
b.scopeName?Ha(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Sc=/[A-Z]/g,Od={full:"1.2.4",major:1,minor:2,dot:4,codeName:"wormhole-baster"},Ra=I.cache={},db=I.expando="ng-"+(new Date).getTime(),Wc=1,Gc=Y.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Ab=Y.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,a,c){b.detachEvent("on"+a,c)},Uc=/([\:\-\_]+(.))/g,
Vc=/^moz([A-Z])/,xb=G("jqLite"),Ea=I.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===N.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),I(Y).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?w(this[b]):w(this[this.length+b])},length:0,push:Nd,sort:[].sort,splice:[].splice},fb={};q("multiple selected checked disabled readOnly required open".split(" "),function(b){fb[t(b)]=b});var dc=
{};q("input select option textarea button form details".split(" "),function(b){dc[Ha(b)]=!0});q({data:ac,inheritedData:eb,scope:function(b){return w(b).data("$scope")||eb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return w(b).data("$isolateScope")||w(b).data("$isolateScopeNoTemplate")},controller:bc,injector:function(b){return eb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Bb,css:function(b,a,c){a=Pa(a);if(z(c))b.style[a]=c;else{var d;8>=E&&(d=
b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=E&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=t(a);if(fb[d])if(z(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||v).specified?d:r;else if(z(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(z(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];if(H(d))return e?
b[e]:"";b[e]=d}var a=[];9>E?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(H(a)){if("SELECT"===Fa(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(H(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Qa(d[c]);b.innerHTML=a}},function(b,a){I.prototype[a]=function(a,d){var e,g;if((2==b.length&&b!==Bb&&b!==bc?a:d)===r){if(V(a)){for(e=
0;e<this.length;e++)if(b===ac)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:Zb,dealoc:Qa,on:function a(c,d,e,g){if(z(g))throw xb("onargs");var f=ka(c,"events"),h=ka(c,"handle");f||ka(c,"events",f={});h||ka(c,"handle",h=Xc(c,f));q(d.split(" "),function(d){var g=f[d];if(!g){if("mouseenter"==d||"mouseleave"==
d){var m=N.body.contains||N.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||m(this,c))||h(a,d)})}else Gc(c,d,h),f[d]=[];g=f[d]}g.push(e)})},off:$b,
replaceWith:function(a,c){var d,e=a.parentNode;Qa(a);q(new I(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new I(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,c){if(1===a.nodeType){var d=a.firstChild;q(new I(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=
w(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Qa(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new I(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Db,removeClass:Cb,toggleClass:function(a,c,d){H(d)&&(d=!Bb(a,c));(d?Db:Cb)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=
a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:zb,triggerHandler:function(a,c,d){c=(ka(a,"events")||{})[c];d=d||[];var e=[{preventDefault:v,stopPropagation:v}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){I.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)H(f)?(f=a(this[h],c,e,g),z(f)&&(f=w(f))):yb(f,a(this[h],c,e,g));return z(f)?f:this};I.prototype.bind=I.prototype.on;I.prototype.unbind=I.prototype.off});Sa.prototype=
{put:function(a,c){this[Da(a)]=c},get:function(a){return this[Da(a)]},remove:function(a){var c=this[a=Da(a)];delete this[a];return c}};var Zc=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,$c=/,/,ad=/^\s*(_?)(\S+?)\1\s*$/,Yc=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ta=G("$injector"),Pd=G("$animate"),Qd=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";if(c&&"."!=c.charAt(0))throw Pd("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.$get=["$timeout",function(a){return{enter:function(d,
e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?e:L(e)?e.join(" "):"";q(d,function(a){Cb(a,e)});g&&a(g,0,!1)},enabled:v}}]}],ia=G("$compile");gc.$inject=["$provide","$$sanitizeUriProvider"];var gd=/^(x[\:\-_]|data[\:\-_])/i,nd=Y.XMLHttpRequest||function(){try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(a){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(c){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(d){}throw G("$httpBackend")("noxhr");
},mc=G("$interpolate"),Rd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,rd={http:80,https:443,ftp:21},Hb=G("$location");rc.prototype=Ib.prototype=qc.prototype={$$html5:!1,$$replace:!1,absUrl:hb("$$absUrl"),url:function(a,c){if(H(a))return this.$$url;var d=Rd.exec(a);d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:hb("$$protocol"),host:hb("$$host"),port:hb("$$port"),path:sc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,
c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Vb(a);else if(V(a))this.$$search=a;else throw Hb("isrcharg");break;default:H(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},hash:sc("$$hash",Aa),replace:function(){this.$$replace=!0;return this}};var ya=G("$parse"),vc={},qa,Ja={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:v,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return z(d)?
z(e)?d+e:d:z(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(z(d)?d:0)-(z(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,c)^e(a,c)},"=":v,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},
">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Sd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Kb=function(a){this.options=a};Kb.prototype={constructor:Kb,lex:function(a){this.text=a;
this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&
this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ja[this.ch],f=Ja[d],h=Ja[e];h?(this.tokens.push({index:this.index,text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",
this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===
a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=z(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw ya("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=t(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||
e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,
e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ja.hasOwnProperty(c))d.fn=Ja[c],d.json=Ja[c];else{var l=uc(c,this.options,this.text);d.fn=x(function(a,c){return l(a,c)},{assign:function(d,e){return ib(d,c,e,a.text,a.options)}})}this.tokens.push(d);f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),
e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Sd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Xa=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Xa.ZERO=function(){return 0};
Xa.prototype={constructor:Xa,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),
this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(","[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw ya("syntax",c.text,a,c.index+1,this.text,
this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw ya("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},
unaryFn:function(a,c){return x(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return x(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return x(function(e,g){return c(e,g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=
0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());else{var e=function(a,e,h){h=[h];for(var l=0;l<d.length;l++)h.push(d[l](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=
this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,
c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+",
"-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Xa.ZERO,a.fn,this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=uc(d,this.options,this.text);return x(function(c,d,h){return e(h||
a(c,d),d)},{assign:function(e,f,h){return ib(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return x(function(e,g){var f=a(e,g),h=d(e,g),l;if(!f)return r;(f=Wa(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(l=f,"$$v"in f||(l.$$v=r,l.then(function(a){l.$$v=a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Wa(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());
while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],l=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,l)||v;Wa(l,e.text);Wa(k,e.text);h=k.apply?k.apply(l,h):k(h[0],h[1],h[2],h[3],h[4]);return Wa(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return x(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},
{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return x(function(c,d){for(var e={},l=0;l<a.length;l++){var k=a[l];e[k.key]=k.value(c,d)}return e},{literal:!0,constant:c})}};var Jb={},ra=G("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},U=N.createElement("a"),
xc=xa(Y.location.href,!0);yc.$inject=["$provide"];zc.$inject=["$locale"];Bc.$inject=["$locale"];var Ec=".",Md={yyyy:X("FullYear",4),yy:X("FullYear",2,0,!0),y:X("FullYear",1),MMMM:jb("Month"),MMM:jb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:jb("Day"),EEE:jb("Day",!0),a:function(a,c){return 12>a.getHours()?
c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Lb(Math[0<a?"floor":"ceil"](a/60),2)+Lb(Math.abs(a%60),2))}},Ld=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Kd=/^\-?\d+$/;Ac.$inject=["$locale"];var Id=ca(t),Jd=ca(Ha);Cc.$inject=["$parse"];var Td=ca({restrict:"E",compile:function(a,c){8>=E&&(c.href||c.name||c.$set("href",""),a.append(N.createComment("IE fix")));return function(a,c){c.on("click",function(a){c.attr("href")||a.preventDefault()})}}}),
Nb={};q(fb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Nb[d]=function(){return{priority:100,compile:function(){return function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}}});q(["src","srcset","href"],function(a){var c=ma("ng-"+a);Nb[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),E&&e.prop(a,g[a]))})}}}});var mb={$addControl:v,$removeControl:v,$setValidity:v,$setDirty:v,$setPristine:v};Fc.$inject=["$element","$attrs","$scope"];var Hc=function(a){return["$timeout",
function(c){return{name:"form",restrict:a?"EAC":"E",controller:Fc,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Gc(e[0],"submit",h);e.on("$destroy",function(){c(function(){Ab(e[0],"submit",h)},0,!1)})}var l=e.parent().controller("form"),k=g.name||g.ngForm;k&&ib(a,k,f,k);if(l)e.on("$destroy",function(){l.$removeControl(f);k&&ib(a,k,r,k);x(f,mb)})}}}}}]},Ud=Hc(),Vd=Hc(!0),Wd=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,
Xd=/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}$/,Yd=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Ic={text:ob,number:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||Yd.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);if(!e.$isEmpty(a)&&a<c)return e.$setValidity("min",!1),r;e.$setValidity("min",
!0);return a},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);if(!e.$isEmpty(a)&&a>c)return e.$setValidity("max",!1),r;e.$setValidity("max",!0);return a},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){if(e.$isEmpty(a)||qb(a))return e.$setValidity("number",!0),a;e.$setValidity("number",!1);return r})},url:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Wd.test(a))return e.$setValidity("url",!0),a;e.$setValidity("url",
!1);return r};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){ob(a,c,d,e,g,f);a=function(a){if(e.$isEmpty(a)||Xd.test(a))return e.$setValidity("email",!0),a;e.$setValidity("email",!1);return r};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){H(d.name)&&c.attr("name",Ya());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,
c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:v,button:v,submit:v,reset:v},Jc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",link:function(d,e,g,f){f&&(Ic[t(g.type)]||Ic.text)(d,e,g,f,c,a)}}}],
lb="ng-valid",kb="ng-invalid",Ia="ng-pristine",nb="ng-dirty",Zd=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+cb(c,"-"):"";e.removeClass((a?kb:lb)+c).addClass((a?lb:kb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),l=h.assign;if(!l)throw G("ngModel")("nonassign",d.ngModel,ha(e));
this.$render=v;this.$isEmpty=function(a){return H(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||mb,m=0,n=this.$error={};e.addClass(Ia);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&m--,m||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,m++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(nb).addClass(Ia)};this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&
(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ia).addClass(nb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,l(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],$d=function(){return{require:["ngModel","^?form"],controller:Zd,link:function(a,
c,d,e){var g=e[0],f=e[1]||mb;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ae=ca({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Kc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",function(){g(e.$viewValue)})}}}},
be=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!H(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return L(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ce=/^(true|false|\d+)$/,de=function(){return{priority:100,compile:function(a,c){return ce.test(c.ngValue)?function(a,c,g){g.$set("value",a.$eval(g.ngValue))}:function(a,
c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ee=sa(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),fe=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ge=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",g.ngBindHtml);var f=c(g.ngBindHtml);
d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],he=Mb("",!0),ie=Mb("Odd",0),je=Mb("Even",1),ke=sa({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),le=[function(){return{scope:!0,controller:"@",priority:500}}],Lc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+a);Lc[c]=["$parse",function(d){return{compile:function(e,
g){var f=d(g[c]);return function(c,d,e){d.on(t(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var me=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,l;c.$watch(e.ngIf,function(g){Na(g)?l||(l=c.$new(),f(l,function(c){c[c.length++]=N.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(l&&(l.$destroy(),l=null),h&&(a.leave(vb(h.clone)),h=null))})}}}],ne=["$http","$templateCache",
"$anchorScroll","$compile","$animate","$sce",function(a,c,d,e,g,f){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",compile:function(h,l){var k=l.ngInclude||l.src,m=l.onload||"",n=l.autoscroll;return function(h,l,q,r,t){var u=0,w,Q,y=function(){w&&(w.$destroy(),w=null);Q&&(g.leave(Q),Q=null)};h.$watch(f.parseAsResourceUrl(k),function(f){var k=function(){!z(n)||n&&!h.$eval(n)||d()},q=++u;f?(a.get(f,{cache:c}).success(function(a){if(q===u){var c=h.$new(),d=t(c,v);y();w=c;Q=d;Q.html(a);
g.enter(Q,null,l,k);e(Q.contents())(w);w.$emit("$includeContentLoaded");h.$eval(m)}}).error(function(){q===u&&y()}),h.$emit("$includeContentRequested")):y()})}}}}],oe=sa({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),pe=sa({terminal:!0,priority:1E3}),qe=["$locale","$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,l=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,m=e.$eval(l)||{},n={},p=c.startSymbol(),s=c.endSymbol(),
r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(m[t(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(m,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in m||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],re=["$parse","$animate",function(a,c){var d=G("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,l){var k=f.ngRepeat,m=k.match(/^\s*(.+)\s+in\s+(.*?)\s*(\s+track\s+by\s+(.+)\s*)?$/),
n,p,s,r,v,t,u={$id:Da};if(!m)throw d("iexp",k);f=m[1];h=m[2];(m=m[4])?(n=a(m),p=function(a,c,d){t&&(u[t]=a);u[v]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Da(c)},r=function(a){return a});m=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!m)throw d("iidexp",f);v=m[3]||m[1];t=m[2];var z={};e.$watchCollection(h,function(a){var f,h,m=g[0],n,u={},H,O,M,T,D,x,G=[];if(pb(a))D=a,n=p||s;else{n=p||r;D=[];for(M in a)a.hasOwnProperty(M)&&"$"!=M.charAt(0)&&D.push(M);D.sort()}H=D.length;
h=G.length=D.length;for(f=0;f<h;f++)if(M=a===D?f:D[f],T=a[M],T=n(M,T,f),va(T,"`track by` id"),z.hasOwnProperty(T))x=z[T],delete z[T],u[T]=x,G[f]=x;else{if(u.hasOwnProperty(T))throw q(G,function(a){a&&a.scope&&(z[a.id]=a)}),d("dupes",k,T);G[f]={id:T};u[T]=!1}for(M in z)z.hasOwnProperty(M)&&(x=z[M],f=vb(x.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),x.scope.$destroy());f=0;for(h=D.length;f<h;f++){M=a===D?f:D[f];T=a[M];x=G[f];G[f-1]&&(m=G[f-1].clone[G[f-1].clone.length-1]);if(x.scope){O=x.scope;
n=m;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);x.clone[0]!=n&&c.move(vb(x.clone),null,w(m));m=x.clone[x.clone.length-1]}else O=e.$new();O[v]=T;t&&(O[t]=M);O.$index=f;O.$first=0===f;O.$last=f===H-1;O.$middle=!(O.$first||O.$last);O.$odd=!(O.$even=0===(f&1));x.scope||l(O,function(a){a[a.length++]=N.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,w(m));m=a;x.scope=O;x.clone=a;u[x.id]=x})}z=u})}}}],se=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Na(c)?"removeClass":
"addClass"](d,"ng-hide")})}}],te=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Na(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ue=sa(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),ve=["$animate",function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,l=[];c.$watch(e.ngSwitch||e.on,function(d){for(var m=0,n=l.length;m<n;m++)l[m].$destroy(),
a.leave(h[m]);h=[];l=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();l.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],we=sa({transclude:"element",priority:800,require:"^ngSwitch",compile:function(a,c){return function(a,e,g,f,h){f.cases["!"+c.ngSwitchWhen]=f.cases["!"+c.ngSwitchWhen]||[];f.cases["!"+c.ngSwitchWhen].push({transclude:h,element:e})}}}),xe=sa({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),ye=sa({controller:["$element","$transclude",function(a,c){if(!c)throw G("ngTransclude")("orphan",ha(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.html("");c.append(a)})}}),ze=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Ae=G("ngOptions"),Be=ca({terminal:!0}),Ce=["$compile","$parse",function(a,
c){var d=/^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/,e={$setViewValue:v};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope","$attrs",function(a,c,d){var l=this,k={},m=e,n;l.databound=d.ngModel;l.init=function(a,c,d){m=a;n=d};l.addOption=function(c){va(c,'"option value"');k[c]=!0;m.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};l.removeOption=
function(a){this.hasOption(a)&&(delete k[a],m.$viewValue==a&&this.renderUnknownOption(a))};l.renderUnknownOption=function(c){c="? "+Da(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};l.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){l.renderUnknownOption=v})}],link:function(e,f,h,l){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(y.parent()&&y.remove(),c.val(a),""===a&&u.prop("selected",!0)):H(a)&&u?c.val(""):e.renderUnknownOption(a)};
c.on("change",function(){a.$apply(function(){y.parent()&&y.remove();d.$setViewValue(c.val())})})}function m(a,c,d){var e;d.$render=function(){var a=new Sa(d.$viewValue);q(c.find("option"),function(c){c.selected=z(a.get(c.value))})};a.$watch(function(){Ba(e,d.$viewValue)||(e=ga(d.$viewValue),d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,
r,t,w;t=g.$modelValue;w=s(e)||[];var B=n?Ob(w):w,H,A,J;A={};r=!1;var E,I;if(v)if(u&&L(t))for(r=new Sa([]),J=0;J<t.length;J++)A[m]=t[J],r.put(u(e,A),t[J]);else r=new Sa(t);for(J=0;H=B.length,J<H;J++){k=J;if(n){k=B[J];if("$"===k.charAt(0))continue;A[n]=k}A[m]=w[k];d=p(e,A)||"";(k=a[d])||(k=a[d]=[],c.push(d));v?d=z(r.remove(u?u(e,A):q(e,A))):(u?(d={},d[m]=t,d=u(e,d)===u(e,A)):d=t===q(e,A),r=r||d);E=l(e,A);E=z(E)?E:"";k.push({id:u?u(e,A):n?B[J]:J,label:E,selected:d})}v||(x||null===t?a[""].unshift({id:"",
label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));A=0;for(B=c.length;A<B;A++){d=c[A];k=a[d];y.length<=A?(t={element:G.clone().attr("label",d),label:k.label},w=[t],y.push(w),f.append(t.element)):(w=y[A],t=w[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;J=0;for(H=k.length;J<H;J++)r=k[J],(d=w[J+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&x?I=
x:(I=D.clone()).val(r.id).attr("selected",r.selected).text(r.label),w.push({element:I,label:r.label,id:r.id,selected:r.selected}),E?E.after(I):t.element.append(I),E=I);for(J++;w.length>J;)w.pop().element.remove()}for(;y.length>A;)y.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Ae("iexp",t,ha(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),s=c(k[7]),u=k[8]?c(k[8]):null,y=[[{element:f,label:""}]];x&&(a(x)(e),x.removeClass("ng-scope"),x.remove());f.html("");f.on("change",
function(){e.$apply(function(){var a,c=s(e)||[],d={},h,k,l,p,t,w,x;if(v)for(k=[],p=0,w=y.length;p<w;p++)for(a=y[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(u)for(x=0;x<c.length&&(d[m]=c[x],u(e,d)!=h);x++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),"?"==h)k=r;else if(""===h)k=null;else if(u)for(x=0;x<c.length;x++){if(d[m]=c[x],u(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(l[1]){var p=l[0],
s=l[1],v=h.multiple,t=h.ngOptions,x=!1,u,D=w(N.createElement("option")),G=w(N.createElement("optgroup")),y=D.clone();l=0;for(var A=f.children(),I=A.length;l<I;l++)if(""===A[l].value){u=x=A.eq(l);break}p.init(s,x,y);if(v&&(h.required||h.ngRequired)){var E=function(a){s.$setValidity("required",!h.required||a&&a.length);return a};s.$parsers.push(E);s.$formatters.unshift(E);h.$observe("required",function(){E(s.$viewValue)})}t?n(e,f,s):v?m(e,f,s):k(e,f,s,p)}}}}],De=["$interpolate",function(a){var c={addOption:v,
removeOption:v};return{restrict:"E",priority:100,compile:function(d,e){if(H(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),m=k.data("$selectController")||k.parent().data("$selectController");m&&m.databound?d.prop("selected",!1):m=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&m.removeOption(c);m.addOption(a)}):m.addOption(e.value);d.on("$destroy",function(){m.removeOption(e.value)})}}}}],Ee=ca({restrict:"E",terminal:!0});(Ca=Y.jQuery)?(w=
Ca,x(Ca.fn,{scope:Ea.scope,isolateScope:Ea.isolateScope,controller:Ea.controller,injector:Ea.injector,inheritedData:Ea.inheritedData}),wb("remove",!0,!0,!1),wb("empty",!1,!1,!1),wb("html",!1,!1,!0)):w=I;bb.element=w;(function(a){x(a,{bootstrap:Xb,copy:ga,extend:x,equals:Ba,element:w,forEach:q,injector:Yb,noop:v,bind:rb,toJson:oa,fromJson:Tb,identity:Aa,isUndefined:H,isDefined:z,isString:D,isFunction:A,isObject:V,isNumber:qb,isElement:Nc,isArray:L,version:Od,isDate:Ka,lowercase:t,uppercase:Ha,callbacks:{counter:0},
$$minErr:G,$$csp:Sb});Ua=Tc(Y);try{Ua("ngLocale")}catch(c){Ua("ngLocale",[]).provider("$locale",qd)}Ua("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:yd});a.provider("$compile",gc).directive({a:Td,input:Jc,textarea:Jc,form:Ud,script:ze,select:Ce,style:Ee,option:De,ngBind:ee,ngBindHtml:ge,ngBindTemplate:fe,ngClass:he,ngClassEven:je,ngClassOdd:ie,ngCloak:ke,ngController:le,ngForm:Vd,ngHide:te,ngIf:me,ngInclude:ne,ngInit:oe,ngNonBindable:pe,ngPluralize:qe,ngRepeat:re,ngShow:se,ngStyle:ue,
ngSwitch:ve,ngSwitchWhen:we,ngSwitchDefault:xe,ngOptions:Be,ngTransclude:ye,ngModel:$d,ngList:be,ngChange:ae,required:Kc,ngRequired:Kc,ngValue:de}).directive(Nb).directive(Lc);a.provider({$anchorScroll:bd,$animate:Qd,$browser:dd,$cacheFactory:ed,$controller:hd,$document:id,$exceptionHandler:jd,$filter:yc,$interpolate:od,$interval:pd,$http:kd,$httpBackend:ld,$location:sd,$log:td,$parse:ud,$rootScope:xd,$q:vd,$sce:Bd,$sceDelegate:Ad,$sniffer:Cd,$templateCache:fd,$timeout:Dd,$window:Ed})}])})(bb);w(N).ready(function(){Rc(N,
Xb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}.ng-animate-start{border-spacing:1px 1px;-ms-zoom:1.0001;}.ng-animate-active{border-spacing:0px 0px;-ms-zoom:1;}</style>');
//# sourceMappingURL=angular.min.js.map
;;window.Modernizr=function(a,b,c){function y(a){j.cssText=a}function z(a,b){return y(m.join(a+";")+(b||""))}function A(a,b){return typeof a===b}function B(a,b){return!!~(""+a).indexOf(b)}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:A(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={svg:"http://www.w3.org/2000/svg"},o={},p={},q={},r=[],s=r.slice,t,u=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},v=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return u("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},w={}.hasOwnProperty,x;!A(w,"undefined")&&!A(w.call,"undefined")?x=function(a,b){return w.call(a,b)}:x=function(a,b){return b in a&&A(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=s.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(s.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(s.call(arguments)))};return e}),o.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:u(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},o.svg=function(){return!!b.createElementNS&&!!b.createElementNS(n.svg,"svg").createSVGRect},o.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==n.svg},o.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(l.call(b.createElementNS(n.svg,"clipPath")))};for(var D in o)x(o,D)&&(t=D.toLowerCase(),e[t]=o[D](),r.push((e[t]?"":"no-")+t));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)x(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},y(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.mq=v,e.testStyles=u,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+r.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("ie8compat",function(){return!window.addEventListener&&document.documentMode&&document.documentMode===7});;/*jslint plusplus: true */

var Hashids = (function () {

	"use strict";

	function Hashids(salt, minHashLength, alphabet) {

		var uniqueAlphabet, i, j, len, sepsLength, diff, guardCount;

		this.version = "0.3.0";

		/* internal settings */

		this.minAlphabetLength = 16;
		this.sepDiv = 3.5;
		this.guardDiv = 12;

		/* error messages */

		this.errorAlphabetLength = "error: alphabet must contain at least X unique characters";
		this.errorAlphabetSpace = "error: alphabet cannot contain spaces";

		/* alphabet vars */

		this.alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
		this.seps = "cfhistuCFHISTU";
		this.minHashLength = parseInt(minHashLength, 10) > 0 ? minHashLength : 0;
		this.salt = (typeof salt === "string") ? salt : "";

		if (typeof alphabet === "string") {
			this.alphabet = alphabet;
		}

		for (uniqueAlphabet = "", i = 0, len = this.alphabet.length; i !== len; i++) {
			if (uniqueAlphabet.indexOf(this.alphabet[i]) === -1) {
				uniqueAlphabet += this.alphabet[i];
			}
		}

		this.alphabet = uniqueAlphabet;

		if (this.alphabet.length < this.minAlphabetLength) {
			throw this.errorAlphabetLength.replace("X", this.minAlphabetLength);
		}

		if (this.alphabet.search(" ") !== -1) {
			throw this.errorAlphabetSpace;
		}

		/* seps should contain only characters present in alphabet; alphabet should not contains seps */

		for (i = 0, len = this.seps.length; i !== len; i++) {

			j = this.alphabet.indexOf(this.seps[i]);
			if (j === -1) {
				this.seps = this.seps.substr(0, i) + " " + this.seps.substr(i + 1);
			} else {
				this.alphabet = this.alphabet.substr(0, j) + " " + this.alphabet.substr(j + 1);
			}

		}

		this.alphabet = this.alphabet.replace(/ /g, "");

		this.seps = this.seps.replace(/ /g, "");
		this.seps = this.consistentShuffle(this.seps, this.salt);

		if (!this.seps.length || (this.alphabet.length / this.seps.length) > this.sepDiv) {

			sepsLength = Math.ceil(this.alphabet.length / this.sepDiv);

			if (sepsLength === 1) {
				sepsLength++;
			}

			if (sepsLength > this.seps.length) {

				diff = sepsLength - this.seps.length;
				this.seps += this.alphabet.substr(0, diff);
				this.alphabet = this.alphabet.substr(diff);

			} else {
				this.seps = this.seps.substr(0, sepsLength);
			}

		}

		this.alphabet = this.consistentShuffle(this.alphabet, this.salt);
		guardCount = Math.ceil(this.alphabet.length / this.guardDiv);

		if (this.alphabet.length < 3) {
			this.guards = this.seps.substr(0, guardCount);
			this.seps = this.seps.substr(guardCount);
		} else {
			this.guards = this.alphabet.substr(0, guardCount);
			this.alphabet = this.alphabet.substr(guardCount);
		}

	}

	Hashids.prototype.encrypt = function () {

		var ret = "", i, len,
			numbers = Array.prototype.slice.call(arguments);

		if (!numbers.length) {
			return ret;
		}

		if (numbers[0] instanceof Array) {
			numbers = numbers[0];
		}

		for (i = 0, len = numbers.length; i !== len; i++) {
			if (typeof numbers[i] !== "number" || numbers[i] % 1 !== 0 || numbers[i] < 0) {
				return ret;
			}
		}

		return this.encode(numbers);

	};

	Hashids.prototype.decrypt = function (hash) {

		var ret = [];

		if (!hash.length || typeof hash !== "string") {
			return ret;
		}

		return this.decode(hash, this.alphabet);

	};

	Hashids.prototype.encryptHex = function (str) {

		var i, len, numbers;

		if (!/^[0-9a-fA-F]+$/.test(str)) {
			return "";
		}

		numbers = str.match(/[\w\W]{1,12}/g);

		for (i = 0, len = numbers.length; i !== len; i++) {
			numbers[i] = parseInt("1" + numbers[i], 16);
		}

		return this.encrypt.apply(this, numbers);

	};

	Hashids.prototype.decryptHex = function (hash) {

		var ret = [], i, len,
			numbers = this.decrypt(hash);

		for (i = 0, len = numbers.length; i !== len; i++) {
			ret += (numbers[i]).toString(16).substr(1);
		}

		return ret;

	};

	Hashids.prototype.encode = function (numbers) {

		var ret, lottery, i, len, number, buffer, last, sepsIndex, guardIndex, guard, halfLength, excess,
			alphabet = this.alphabet,
			numbersSize = numbers.length,
			numbersHashInt = 0;

		for (i = 0, len = numbers.length; i !== len; i++) {
			numbersHashInt += (numbers[i] % (i + 100));
		}

		lottery = ret = alphabet[numbersHashInt % alphabet.length];
		for (i = 0, len = numbers.length; i !== len; i++) {

			number = numbers[i];
			buffer = lottery + this.salt + alphabet;

			alphabet = this.consistentShuffle(alphabet, buffer.substr(0, alphabet.length));
			last = this.hash(number, alphabet);

			ret += last;

			if (i + 1 < numbersSize) {
				number %= (last.charCodeAt(0) + i);
				sepsIndex = number % this.seps.length;
				ret += this.seps[sepsIndex];
			}

		}

		if (ret.length < this.minHashLength) {

			guardIndex = (numbersHashInt + ret[0].charCodeAt(0)) % this.guards.length;
			guard = this.guards[guardIndex];

			ret = guard + ret;

			if (ret.length < this.minHashLength) {

				guardIndex = (numbersHashInt + ret[2].charCodeAt(0)) % this.guards.length;
				guard = this.guards[guardIndex];

				ret += guard;

			}

		}

		halfLength = parseInt(alphabet.length / 2, 10);
		while (ret.length < this.minHashLength) {

			alphabet = this.consistentShuffle(alphabet, alphabet);
			ret = alphabet.substr(halfLength) + ret + alphabet.substr(0, halfLength);

			excess = ret.length - this.minHashLength;
			if (excess > 0) {
				ret = ret.substr(excess / 2, this.minHashLength);
			}

		}

		return ret;

	};

	Hashids.prototype.decode = function (hash, alphabet) {

		var ret = [], i = 0,
			lottery, len, subHash, buffer,
			r = new RegExp("[" + this.guards + "]", "g"),
			hashBreakdown = hash.replace(r, " "),
			hashArray = hashBreakdown.split(" ");

		if (hashArray.length === 3 || hashArray.length === 2) {
			i = 1;
		}

		hashBreakdown = hashArray[i];
		if (typeof hashBreakdown[0] !== "undefined") {

			lottery = hashBreakdown[0];
			hashBreakdown = hashBreakdown.substr(1);

			r = new RegExp("[" + this.seps + "]", "g");
			hashBreakdown = hashBreakdown.replace(r, " ");
			hashArray = hashBreakdown.split(" ");

			for (i = 0, len = hashArray.length; i !== len; i++) {

				subHash = hashArray[i];
				buffer = lottery + this.salt + alphabet;

				alphabet = this.consistentShuffle(alphabet, buffer.substr(0, alphabet.length));
				ret.push(this.unhash(subHash, alphabet));

			}

			if (this.encode(ret) !== hash) {
				ret = [];
			}

		}

		return ret;

	};

	Hashids.prototype.consistentShuffle = function (alphabet, salt) {

		var integer, j, temp, i, v, p;

		if (!salt.length) {
			return alphabet;
		}

		for (i = alphabet.length - 1, v = 0, p = 0; i > 0; i--, v++) {

			v %= salt.length;
			p += integer = salt[v].charCodeAt(0);
			j = (integer + v + p) % i;

			temp = alphabet[j];
			alphabet = alphabet.substr(0, j) + alphabet[i] + alphabet.substr(j + 1);
			alphabet = alphabet.substr(0, i) + temp + alphabet.substr(i + 1);

		}

		return alphabet;

	};

	Hashids.prototype.hash = function (input, alphabet) {

		var hash = "",
			alphabetLength = alphabet.length;

		do {
			hash = alphabet[input % alphabetLength] + hash;
			input = parseInt(input / alphabetLength, 10);
		} while (input);

		return hash;

	};

	Hashids.prototype.unhash = function (input, alphabet) {

		var number = 0, pos, i;

		for (i = 0; i < input.length; i++) {
			pos = alphabet.indexOf(input[i]);
			number += pos * Math.pow(alphabet.length, input.length - i - 1);
		}

		return number;

	};

	return Hashids;

}());
;/*!
 * jQuery JavaScript Library v1.9.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2012 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-2-4
 */
(function( window, undefined ) {

// Can't do this because several apps including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
// Support: Firefox 18+
//"use strict";
var
  // The deferred used on DOM ready
  readyList,

  // A central reference to the root jQuery(document)
  rootjQuery,

  // Support: IE<9
  // For `typeof node.method` instead of `node.method !== undefined`
  core_strundefined = typeof undefined,

  // Use the correct document accordingly with window argument (sandbox)
  document = window.document,
  location = window.location,

  // Map over jQuery in case of overwrite
  _jQuery = window.jQuery,

  // Map over the $ in case of overwrite
  _$ = window.$,

  // [[Class]] -> type pairs
  class2type = {},

  // List of deleted data cache ids, so we can reuse them
  core_deletedIds = [],

  core_version = "1.9.1",

  // Save a reference to some core methods
  core_concat = core_deletedIds.concat,
  core_push = core_deletedIds.push,
  core_slice = core_deletedIds.slice,
  core_indexOf = core_deletedIds.indexOf,
  core_toString = class2type.toString,
  core_hasOwn = class2type.hasOwnProperty,
  core_trim = core_version.trim,

  // Define a local copy of jQuery
  jQuery = function( selector, context ) {
    // The jQuery object is actually just the init constructor 'enhanced'
    return new jQuery.fn.init( selector, context, rootjQuery );
  },

  // Used for matching numbers
  core_pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,

  // Used for splitting on whitespace
  core_rnotwhite = /\S+/g,

  // Make sure we trim BOM and NBSP (here's looking at you, Safari 5.0 and IE)
  rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

  // A simple way to check for HTML strings
  // Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
  // Strict HTML recognition (#11290: must start with <)
  rquickExpr = /^(?:(<[\w\W]+>)[^>]*|#([\w-]*))$/,

  // Match a standalone tag
  rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,

  // JSON RegExp
  rvalidchars = /^[\],:{}\s]*$/,
  rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
  rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
  rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,

  // Matches dashed string for camelizing
  rmsPrefix = /^-ms-/,
  rdashAlpha = /-([\da-z])/gi,

  // Used by jQuery.camelCase as callback to replace()
  fcamelCase = function( all, letter ) {
    return letter.toUpperCase();
  },

  // The ready event handler
  completed = function( event ) {

    // readyState === "complete" is good enough for us to call the dom ready in oldIE
    if ( document.addEventListener || event.type === "load" || document.readyState === "complete" ) {
      detach();
      jQuery.ready();
    }
  },
  // Clean-up method for dom ready events
  detach = function() {
    if ( document.addEventListener ) {
      document.removeEventListener( "DOMContentLoaded", completed, false );
      window.removeEventListener( "load", completed, false );

    } else {
      document.detachEvent( "onreadystatechange", completed );
      window.detachEvent( "onload", completed );
    }
  };

jQuery.fn = jQuery.prototype = {
  // The current version of jQuery being used
  jquery: core_version,

  constructor: jQuery,
  init: function( selector, context, rootjQuery ) {
    var match, elem;

    // HANDLE: $(""), $(null), $(undefined), $(false)
    if ( !selector ) {
      return this;
    }

    // Handle HTML strings
    if ( typeof selector === "string" ) {
      if ( selector.charAt(0) === "<" && selector.charAt( selector.length - 1 ) === ">" && selector.length >= 3 ) {
        // Assume that strings that start and end with <> are HTML and skip the regex check
        match = [ null, selector, null ];

      } else {
        match = rquickExpr.exec( selector );
      }

      // Match html or make sure no context is specified for #id
      if ( match && (match[1] || !context) ) {

        // HANDLE: $(html) -> $(array)
        if ( match[1] ) {
          context = context instanceof jQuery ? context[0] : context;

          // scripts is true for back-compat
          jQuery.merge( this, jQuery.parseHTML(
            match[1],
            context && context.nodeType ? context.ownerDocument || context : document,
            true
          ) );

          // HANDLE: $(html, props)
          if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
            for ( match in context ) {
              // Properties of context are called as methods if possible
              if ( jQuery.isFunction( this[ match ] ) ) {
                this[ match ]( context[ match ] );

              // ...and otherwise set as attributes
              } else {
                this.attr( match, context[ match ] );
              }
            }
          }

          return this;

        // HANDLE: $(#id)
        } else {
          elem = document.getElementById( match[2] );

          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE and Opera return items
            // by name instead of ID
            if ( elem.id !== match[2] ) {
              return rootjQuery.find( selector );
            }

            // Otherwise, we inject the element directly into the jQuery object
            this.length = 1;
            this[0] = elem;
          }

          this.context = document;
          this.selector = selector;
          return this;
        }

      // HANDLE: $(expr, $(...))
      } else if ( !context || context.jquery ) {
        return ( context || rootjQuery ).find( selector );

      // HANDLE: $(expr, context)
      // (which is just equivalent to: $(context).find(expr)
      } else {
        return this.constructor( context ).find( selector );
      }

    // HANDLE: $(DOMElement)
    } else if ( selector.nodeType ) {
      this.context = this[0] = selector;
      this.length = 1;
      return this;

    // HANDLE: $(function)
    // Shortcut for document ready
    } else if ( jQuery.isFunction( selector ) ) {
      return rootjQuery.ready( selector );
    }

    if ( selector.selector !== undefined ) {
      this.selector = selector.selector;
      this.context = selector.context;
    }

    return jQuery.makeArray( selector, this );
  },

  // Start with an empty selector
  selector: "",

  // The default length of a jQuery object is 0
  length: 0,

  // The number of elements contained in the matched element set
  size: function() {
    return this.length;
  },

  toArray: function() {
    return core_slice.call( this );
  },

  // Get the Nth element in the matched element set OR
  // Get the whole matched element set as a clean array
  get: function( num ) {
    return num == null ?

      // Return a 'clean' array
      this.toArray() :

      // Return just the object
      ( num < 0 ? this[ this.length + num ] : this[ num ] );
  },

  // Take an array of elements and push it onto the stack
  // (returning the new matched element set)
  pushStack: function( elems ) {

    // Build a new jQuery matched element set
    var ret = jQuery.merge( this.constructor(), elems );

    // Add the old object onto the stack (as a reference)
    ret.prevObject = this;
    ret.context = this.context;

    // Return the newly-formed element set
    return ret;
  },

  // Execute a callback for every element in the matched set.
  // (You can seed the arguments with an array of args, but this is
  // only used internally.)
  each: function( callback, args ) {
    return jQuery.each( this, callback, args );
  },

  ready: function( fn ) {
    // Add the callback
    jQuery.ready.promise().done( fn );

    return this;
  },

  slice: function() {
    return this.pushStack( core_slice.apply( this, arguments ) );
  },

  first: function() {
    return this.eq( 0 );
  },

  last: function() {
    return this.eq( -1 );
  },

  eq: function( i ) {
    var len = this.length,
      j = +i + ( i < 0 ? len : 0 );
    return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
  },

  map: function( callback ) {
    return this.pushStack( jQuery.map(this, function( elem, i ) {
      return callback.call( elem, i, elem );
    }));
  },

  end: function() {
    return this.prevObject || this.constructor(null);
  },

  // For internal use only.
  // Behaves like an Array's method, not like a jQuery method.
  push: core_push,
  sort: [].sort,
  splice: [].splice
};

// Give the init function the jQuery prototype for later instantiation
jQuery.fn.init.prototype = jQuery.fn;

jQuery.extend = jQuery.fn.extend = function() {
  var src, copyIsArray, copy, name, options, clone,
    target = arguments[0] || {},
    i = 1,
    length = arguments.length,
    deep = false;

  // Handle a deep copy situation
  if ( typeof target === "boolean" ) {
    deep = target;
    target = arguments[1] || {};
    // skip the boolean and the target
    i = 2;
  }

  // Handle case when target is a string or something (possible in deep copy)
  if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
    target = {};
  }

  // extend jQuery itself if only one argument is passed
  if ( length === i ) {
    target = this;
    --i;
  }

  for ( ; i < length; i++ ) {
    // Only deal with non-null/undefined values
    if ( (options = arguments[ i ]) != null ) {
      // Extend the base object
      for ( name in options ) {
        src = target[ name ];
        copy = options[ name ];

        // Prevent never-ending loop
        if ( target === copy ) {
          continue;
        }

        // Recurse if we're merging plain objects or arrays
        if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
          if ( copyIsArray ) {
            copyIsArray = false;
            clone = src && jQuery.isArray(src) ? src : [];

          } else {
            clone = src && jQuery.isPlainObject(src) ? src : {};
          }

          // Never move original objects, clone them
          target[ name ] = jQuery.extend( deep, clone, copy );

        // Don't bring in undefined values
        } else if ( copy !== undefined ) {
          target[ name ] = copy;
        }
      }
    }
  }

  // Return the modified object
  return target;
};

jQuery.extend({
  noConflict: function( deep ) {
    if ( window.$ === jQuery ) {
      window.$ = _$;
    }

    if ( deep && window.jQuery === jQuery ) {
      window.jQuery = _jQuery;
    }

    return jQuery;
  },

  // Is the DOM ready to be used? Set to true once it occurs.
  isReady: false,

  // A counter to track how many items to wait for before
  // the ready event fires. See #6781
  readyWait: 1,

  // Hold (or release) the ready event
  holdReady: function( hold ) {
    if ( hold ) {
      jQuery.readyWait++;
    } else {
      jQuery.ready( true );
    }
  },

  // Handle when the DOM is ready
  ready: function( wait ) {

    // Abort if there are pending holds or we're already ready
    if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
      return;
    }

    // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
    if ( !document.body ) {
      return setTimeout( jQuery.ready );
    }

    // Remember that the DOM is ready
    jQuery.isReady = true;

    // If a normal DOM Ready event fired, decrement, and wait if need be
    if ( wait !== true && --jQuery.readyWait > 0 ) {
      return;
    }

    // If there are functions bound, to execute
    readyList.resolveWith( document, [ jQuery ] );

    // Trigger any bound ready events
    if ( jQuery.fn.trigger ) {
      jQuery( document ).trigger("ready").off("ready");
    }
  },

  // See test/unit/core.js for details concerning isFunction.
  // Since version 1.3, DOM methods and functions like alert
  // aren't supported. They return false on IE (#2968).
  isFunction: function( obj ) {
    return jQuery.type(obj) === "function";
  },

  isArray: Array.isArray || function( obj ) {
    return jQuery.type(obj) === "array";
  },

  isWindow: function( obj ) {
    return obj != null && obj == obj.window;
  },

  isNumeric: function( obj ) {
    return !isNaN( parseFloat(obj) ) && isFinite( obj );
  },

  type: function( obj ) {
    if ( obj == null ) {
      return String( obj );
    }
    return typeof obj === "object" || typeof obj === "function" ?
      class2type[ core_toString.call(obj) ] || "object" :
      typeof obj;
  },

  isPlainObject: function( obj ) {
    // Must be an Object.
    // Because of IE, we also have to check the presence of the constructor property.
    // Make sure that DOM nodes and window objects don't pass through, as well
    if ( !obj || jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
      return false;
    }

    try {
      // Not own constructor property must be Object
      if ( obj.constructor &&
        !core_hasOwn.call(obj, "constructor") &&
        !core_hasOwn.call(obj.constructor.prototype, "isPrototypeOf") ) {
        return false;
      }
    } catch ( e ) {
      // IE8,9 Will throw exceptions on certain host objects #9897
      return false;
    }

    // Own properties are enumerated firstly, so to speed up,
    // if last one is own, then all properties are own.

    var key;
    for ( key in obj ) {}

    return key === undefined || core_hasOwn.call( obj, key );
  },

  isEmptyObject: function( obj ) {
    var name;
    for ( name in obj ) {
      return false;
    }
    return true;
  },

  error: function( msg ) {
    throw new Error( msg );
  },

  // data: string of html
  // context (optional): If specified, the fragment will be created in this context, defaults to document
  // keepScripts (optional): If true, will include scripts passed in the html string
  parseHTML: function( data, context, keepScripts ) {
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    if ( typeof context === "boolean" ) {
      keepScripts = context;
      context = false;
    }
    context = context || document;

    var parsed = rsingleTag.exec( data ),
      scripts = !keepScripts && [];

    // Single tag
    if ( parsed ) {
      return [ context.createElement( parsed[1] ) ];
    }

    parsed = jQuery.buildFragment( [ data ], context, scripts );
    if ( scripts ) {
      jQuery( scripts ).remove();
    }
    return jQuery.merge( [], parsed.childNodes );
  },

  parseJSON: function( data ) {
    // Attempt to parse using the native JSON parser first
    if ( window.JSON && window.JSON.parse ) {
      return window.JSON.parse( data );
    }

    if ( data === null ) {
      return data;
    }

    if ( typeof data === "string" ) {

      // Make sure leading/trailing whitespace is removed (IE can't handle it)
      data = jQuery.trim( data );

      if ( data ) {
        // Make sure the incoming data is actual JSON
        // Logic borrowed from http://json.org/json2.js
        if ( rvalidchars.test( data.replace( rvalidescape, "@" )
          .replace( rvalidtokens, "]" )
          .replace( rvalidbraces, "")) ) {

          return ( new Function( "return " + data ) )();
        }
      }
    }

    jQuery.error( "Invalid JSON: " + data );
  },

  // Cross-browser xml parsing
  parseXML: function( data ) {
    var xml, tmp;
    if ( !data || typeof data !== "string" ) {
      return null;
    }
    try {
      if ( window.DOMParser ) { // Standard
        tmp = new DOMParser();
        xml = tmp.parseFromString( data , "text/xml" );
      } else { // IE
        xml = new ActiveXObject( "Microsoft.XMLDOM" );
        xml.async = "false";
        xml.loadXML( data );
      }
    } catch( e ) {
      xml = undefined;
    }
    if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
      jQuery.error( "Invalid XML: " + data );
    }
    return xml;
  },

  noop: function() {},

  // Evaluates a script in a global context
  // Workarounds based on findings by Jim Driscoll
  // http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
  globalEval: function( data ) {
    if ( data && jQuery.trim( data ) ) {
      // We use execScript on Internet Explorer
      // We use an anonymous function so that context is window
      // rather than jQuery in Firefox
      ( window.execScript || function( data ) {
        window[ "eval" ].call( window, data );
      } )( data );
    }
  },

  // Convert dashed to camelCase; used by the css and data modules
  // Microsoft forgot to hump their vendor prefix (#9572)
  camelCase: function( string ) {
    return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
  },

  nodeName: function( elem, name ) {
    return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
  },

  // args is for internal usage only
  each: function( obj, callback, args ) {
    var value,
      i = 0,
      length = obj.length,
      isArray = isArraylike( obj );

    if ( args ) {
      if ( isArray ) {
        for ( ; i < length; i++ ) {
          value = callback.apply( obj[ i ], args );

          if ( value === false ) {
            break;
          }
        }
      } else {
        for ( i in obj ) {
          value = callback.apply( obj[ i ], args );

          if ( value === false ) {
            break;
          }
        }
      }

    // A special, fast, case for the most common use of each
    } else {
      if ( isArray ) {
        for ( ; i < length; i++ ) {
          value = callback.call( obj[ i ], i, obj[ i ] );

          if ( value === false ) {
            break;
          }
        }
      } else {
        for ( i in obj ) {
          value = callback.call( obj[ i ], i, obj[ i ] );

          if ( value === false ) {
            break;
          }
        }
      }
    }

    return obj;
  },

  // Use native String.trim function wherever possible
  trim: core_trim && !core_trim.call("\uFEFF\xA0") ?
    function( text ) {
      return text == null ?
        "" :
        core_trim.call( text );
    } :

    // Otherwise use our own trimming functionality
    function( text ) {
      return text == null ?
        "" :
        ( text + "" ).replace( rtrim, "" );
    },

  // results is for internal usage only
  makeArray: function( arr, results ) {
    var ret = results || [];

    if ( arr != null ) {
      if ( isArraylike( Object(arr) ) ) {
        jQuery.merge( ret,
          typeof arr === "string" ?
          [ arr ] : arr
        );
      } else {
        core_push.call( ret, arr );
      }
    }

    return ret;
  },

  inArray: function( elem, arr, i ) {
    var len;

    if ( arr ) {
      if ( core_indexOf ) {
        return core_indexOf.call( arr, elem, i );
      }

      len = arr.length;
      i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

      for ( ; i < len; i++ ) {
        // Skip accessing in sparse arrays
        if ( i in arr && arr[ i ] === elem ) {
          return i;
        }
      }
    }

    return -1;
  },

  merge: function( first, second ) {
    var l = second.length,
      i = first.length,
      j = 0;

    if ( typeof l === "number" ) {
      for ( ; j < l; j++ ) {
        first[ i++ ] = second[ j ];
      }
    } else {
      while ( second[j] !== undefined ) {
        first[ i++ ] = second[ j++ ];
      }
    }

    first.length = i;

    return first;
  },

  grep: function( elems, callback, inv ) {
    var retVal,
      ret = [],
      i = 0,
      length = elems.length;
    inv = !!inv;

    // Go through the array, only saving the items
    // that pass the validator function
    for ( ; i < length; i++ ) {
      retVal = !!callback( elems[ i ], i );
      if ( inv !== retVal ) {
        ret.push( elems[ i ] );
      }
    }

    return ret;
  },

  // arg is for internal usage only
  map: function( elems, callback, arg ) {
    var value,
      i = 0,
      length = elems.length,
      isArray = isArraylike( elems ),
      ret = [];

    // Go through the array, translating each of the items to their
    if ( isArray ) {
      for ( ; i < length; i++ ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }

    // Go through every key on the object,
    } else {
      for ( i in elems ) {
        value = callback( elems[ i ], i, arg );

        if ( value != null ) {
          ret[ ret.length ] = value;
        }
      }
    }

    // Flatten any nested arrays
    return core_concat.apply( [], ret );
  },

  // A global GUID counter for objects
  guid: 1,

  // Bind a function to a context, optionally partially applying any
  // arguments.
  proxy: function( fn, context ) {
    var args, proxy, tmp;

    if ( typeof context === "string" ) {
      tmp = fn[ context ];
      context = fn;
      fn = tmp;
    }

    // Quick check to determine if target is callable, in the spec
    // this throws a TypeError, but we will just return undefined.
    if ( !jQuery.isFunction( fn ) ) {
      return undefined;
    }

    // Simulated bind
    args = core_slice.call( arguments, 2 );
    proxy = function() {
      return fn.apply( context || this, args.concat( core_slice.call( arguments ) ) );
    };

    // Set the guid of unique handler to the same of original handler, so it can be removed
    proxy.guid = fn.guid = fn.guid || jQuery.guid++;

    return proxy;
  },

  // Multifunctional method to get and set values of a collection
  // The value/s can optionally be executed if it's a function
  access: function( elems, fn, key, value, chainable, emptyGet, raw ) {
    var i = 0,
      length = elems.length,
      bulk = key == null;

    // Sets many values
    if ( jQuery.type( key ) === "object" ) {
      chainable = true;
      for ( i in key ) {
        jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
      }

    // Sets one value
    } else if ( value !== undefined ) {
      chainable = true;

      if ( !jQuery.isFunction( value ) ) {
        raw = true;
      }

      if ( bulk ) {
        // Bulk operations run against the entire set
        if ( raw ) {
          fn.call( elems, value );
          fn = null;

        // ...except when executing function values
        } else {
          bulk = fn;
          fn = function( elem, key, value ) {
            return bulk.call( jQuery( elem ), value );
          };
        }
      }

      if ( fn ) {
        for ( ; i < length; i++ ) {
          fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
        }
      }
    }

    return chainable ?
      elems :

      // Gets
      bulk ?
        fn.call( elems ) :
        length ? fn( elems[0], key ) : emptyGet;
  },

  now: function() {
    return ( new Date() ).getTime();
  }
});

jQuery.ready.promise = function( obj ) {
  if ( !readyList ) {

    readyList = jQuery.Deferred();

    // Catch cases where $(document).ready() is called after the browser event has already occurred.
    // we once tried to use readyState "interactive" here, but it caused issues like the one
    // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
    if ( document.readyState === "complete" ) {
      // Handle it asynchronously to allow scripts the opportunity to delay ready
      setTimeout( jQuery.ready );

    // Standards-based browsers support DOMContentLoaded
    } else if ( document.addEventListener ) {
      // Use the handy event callback
      document.addEventListener( "DOMContentLoaded", completed, false );

      // A fallback to window.onload, that will always work
      window.addEventListener( "load", completed, false );

    // If IE event model is used
    } else {
      // Ensure firing before onload, maybe late but safe also for iframes
      document.attachEvent( "onreadystatechange", completed );

      // A fallback to window.onload, that will always work
      window.attachEvent( "onload", completed );

      // If IE and not a frame
      // continually check to see if the document is ready
      var top = false;

      try {
        top = window.frameElement == null && document.documentElement;
      } catch(e) {}

      if ( top && top.doScroll ) {
        (function doScrollCheck() {
          if ( !jQuery.isReady ) {

            try {
              // Use the trick by Diego Perini
              // http://javascript.nwbox.com/IEContentLoaded/
              top.doScroll("left");
            } catch(e) {
              return setTimeout( doScrollCheck, 50 );
            }

            // detach all dom ready events
            detach();

            // and execute any waiting functions
            jQuery.ready();
          }
        })();
      }
    }
  }
  return readyList.promise( obj );
};

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
  class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {
  var length = obj.length,
    type = jQuery.type( obj );

  if ( jQuery.isWindow( obj ) ) {
    return false;
  }

  if ( obj.nodeType === 1 && length ) {
    return true;
  }

  return type === "array" || type !== "function" &&
    ( length === 0 ||
    typeof length === "number" && length > 0 && ( length - 1 ) in obj );
}

// All jQuery objects should point back to these
rootjQuery = jQuery(document);
// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
  var object = optionsCache[ options ] = {};
  jQuery.each( options.match( core_rnotwhite ) || [], function( _, flag ) {
    object[ flag ] = true;
  });
  return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *  options: an optional list of space-separated options that will change how
 *      the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *  once:     will ensure the callback list can only be fired once (like a Deferred)
 *
 *  memory:     will keep track of previous values and will call any callback added
 *          after the list has been fired right away with the latest "memorized"
 *          values (like a Deferred)
 *
 *  unique:     will ensure a callback can only be added once (no duplicate in the list)
 *
 *  stopOnFalse:  interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

  // Convert options from String-formatted to Object-formatted if needed
  // (we check in cache first)
  options = typeof options === "string" ?
    ( optionsCache[ options ] || createOptions( options ) ) :
    jQuery.extend( {}, options );

  var // Flag to know if list is currently firing
    firing,
    // Last fire value (for non-forgettable lists)
    memory,
    // Flag to know if list was already fired
    fired,
    // End of the loop when firing
    firingLength,
    // Index of currently firing callback (modified by remove if needed)
    firingIndex,
    // First callback to fire (used internally by add and fireWith)
    firingStart,
    // Actual callback list
    list = [],
    // Stack of fire calls for repeatable lists
    stack = !options.once && [],
    // Fire callbacks
    fire = function( data ) {
      memory = options.memory && data;
      fired = true;
      firingIndex = firingStart || 0;
      firingStart = 0;
      firingLength = list.length;
      firing = true;
      for ( ; list && firingIndex < firingLength; firingIndex++ ) {
        if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
          memory = false; // To prevent further calls using add
          break;
        }
      }
      firing = false;
      if ( list ) {
        if ( stack ) {
          if ( stack.length ) {
            fire( stack.shift() );
          }
        } else if ( memory ) {
          list = [];
        } else {
          self.disable();
        }
      }
    },
    // Actual Callbacks object
    self = {
      // Add a callback or a collection of callbacks to the list
      add: function() {
        if ( list ) {
          // First, we save the current length
          var start = list.length;
          (function add( args ) {
            jQuery.each( args, function( _, arg ) {
              var type = jQuery.type( arg );
              if ( type === "function" ) {
                if ( !options.unique || !self.has( arg ) ) {
                  list.push( arg );
                }
              } else if ( arg && arg.length && type !== "string" ) {
                // Inspect recursively
                add( arg );
              }
            });
          })( arguments );
          // Do we need to add the callbacks to the
          // current firing batch?
          if ( firing ) {
            firingLength = list.length;
          // With memory, if we're not firing then
          // we should call right away
          } else if ( memory ) {
            firingStart = start;
            fire( memory );
          }
        }
        return this;
      },
      // Remove a callback from the list
      remove: function() {
        if ( list ) {
          jQuery.each( arguments, function( _, arg ) {
            var index;
            while( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
              list.splice( index, 1 );
              // Handle firing indexes
              if ( firing ) {
                if ( index <= firingLength ) {
                  firingLength--;
                }
                if ( index <= firingIndex ) {
                  firingIndex--;
                }
              }
            }
          });
        }
        return this;
      },
      // Check if a given callback is in the list.
      // If no argument is given, return whether or not list has callbacks attached.
      has: function( fn ) {
        return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
      },
      // Remove all callbacks from the list
      empty: function() {
        list = [];
        return this;
      },
      // Have the list do nothing anymore
      disable: function() {
        list = stack = memory = undefined;
        return this;
      },
      // Is it disabled?
      disabled: function() {
        return !list;
      },
      // Lock the list in its current state
      lock: function() {
        stack = undefined;
        if ( !memory ) {
          self.disable();
        }
        return this;
      },
      // Is it locked?
      locked: function() {
        return !stack;
      },
      // Call all callbacks with the given context and arguments
      fireWith: function( context, args ) {
        args = args || [];
        args = [ context, args.slice ? args.slice() : args ];
        if ( list && ( !fired || stack ) ) {
          if ( firing ) {
            stack.push( args );
          } else {
            fire( args );
          }
        }
        return this;
      },
      // Call all the callbacks with the given arguments
      fire: function() {
        self.fireWith( this, arguments );
        return this;
      },
      // To know if the callbacks have already been called at least once
      fired: function() {
        return !!fired;
      }
    };

  return self;
};
jQuery.extend({

  Deferred: function( func ) {
    var tuples = [
        // action, add listener, listener list, final state
        [ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
        [ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
        [ "notify", "progress", jQuery.Callbacks("memory") ]
      ],
      state = "pending",
      promise = {
        state: function() {
          return state;
        },
        always: function() {
          deferred.done( arguments ).fail( arguments );
          return this;
        },
        then: function( /* fnDone, fnFail, fnProgress */ ) {
          var fns = arguments;
          return jQuery.Deferred(function( newDefer ) {
            jQuery.each( tuples, function( i, tuple ) {
              var action = tuple[ 0 ],
                fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
              // deferred[ done | fail | progress ] for forwarding actions to newDefer
              deferred[ tuple[1] ](function() {
                var returned = fn && fn.apply( this, arguments );
                if ( returned && jQuery.isFunction( returned.promise ) ) {
                  returned.promise()
                    .done( newDefer.resolve )
                    .fail( newDefer.reject )
                    .progress( newDefer.notify );
                } else {
                  newDefer[ action + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
                }
              });
            });
            fns = null;
          }).promise();
        },
        // Get a promise for this deferred
        // If obj is provided, the promise aspect is added to the object
        promise: function( obj ) {
          return obj != null ? jQuery.extend( obj, promise ) : promise;
        }
      },
      deferred = {};

    // Keep pipe for back-compat
    promise.pipe = promise.then;

    // Add list-specific methods
    jQuery.each( tuples, function( i, tuple ) {
      var list = tuple[ 2 ],
        stateString = tuple[ 3 ];

      // promise[ done | fail | progress ] = list.add
      promise[ tuple[1] ] = list.add;

      // Handle state
      if ( stateString ) {
        list.add(function() {
          // state = [ resolved | rejected ]
          state = stateString;

        // [ reject_list | resolve_list ].disable; progress_list.lock
        }, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
      }

      // deferred[ resolve | reject | notify ]
      deferred[ tuple[0] ] = function() {
        deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
        return this;
      };
      deferred[ tuple[0] + "With" ] = list.fireWith;
    });

    // Make the deferred a promise
    promise.promise( deferred );

    // Call given func if any
    if ( func ) {
      func.call( deferred, deferred );
    }

    // All done!
    return deferred;
  },

  // Deferred helper
  when: function( subordinate /* , ..., subordinateN */ ) {
    var i = 0,
      resolveValues = core_slice.call( arguments ),
      length = resolveValues.length,

      // the count of uncompleted subordinates
      remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

      // the master Deferred. If resolveValues consist of only a single Deferred, just use that.
      deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

      // Update function for both resolve and progress values
      updateFunc = function( i, contexts, values ) {
        return function( value ) {
          contexts[ i ] = this;
          values[ i ] = arguments.length > 1 ? core_slice.call( arguments ) : value;
          if( values === progressValues ) {
            deferred.notifyWith( contexts, values );
          } else if ( !( --remaining ) ) {
            deferred.resolveWith( contexts, values );
          }
        };
      },

      progressValues, progressContexts, resolveContexts;

    // add listeners to Deferred subordinates; treat others as resolved
    if ( length > 1 ) {
      progressValues = new Array( length );
      progressContexts = new Array( length );
      resolveContexts = new Array( length );
      for ( ; i < length; i++ ) {
        if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
          resolveValues[ i ].promise()
            .done( updateFunc( i, resolveContexts, resolveValues ) )
            .fail( deferred.reject )
            .progress( updateFunc( i, progressContexts, progressValues ) );
        } else {
          --remaining;
        }
      }
    }

    // if we're not waiting on anything, resolve the master
    if ( !remaining ) {
      deferred.resolveWith( resolveContexts, resolveValues );
    }

    return deferred.promise();
  }
});
jQuery.support = (function() {

  var support, all, a,
    input, select, fragment,
    opt, eventName, isSupported, i,
    div = document.createElement("div");

  // Setup
  div.setAttribute( "className", "t" );
  div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

  // Support tests won't run in some limited or non-browser environments
  all = div.getElementsByTagName("*");
  a = div.getElementsByTagName("a")[ 0 ];
  if ( !all || !a || !all.length ) {
    return {};
  }

  // First batch of tests
  select = document.createElement("select");
  opt = select.appendChild( document.createElement("option") );
  input = div.getElementsByTagName("input")[ 0 ];

  a.style.cssText = "top:1px;float:left;opacity:.5";
  support = {
    // Test setAttribute on camelCase class. If it works, we need attrFixes when doing get/setAttribute (ie6/7)
    getSetAttribute: div.className !== "t",

    // IE strips leading whitespace when .innerHTML is used
    leadingWhitespace: div.firstChild.nodeType === 3,

    // Make sure that tbody elements aren't automatically inserted
    // IE will insert them into empty tables
    tbody: !div.getElementsByTagName("tbody").length,

    // Make sure that link elements get serialized correctly by innerHTML
    // This requires a wrapper element in IE
    htmlSerialize: !!div.getElementsByTagName("link").length,

    // Get the style information from getAttribute
    // (IE uses .cssText instead)
    style: /top/.test( a.getAttribute("style") ),

    // Make sure that URLs aren't manipulated
    // (IE normalizes it by default)
    hrefNormalized: a.getAttribute("href") === "/a",

    // Make sure that element opacity exists
    // (IE uses filter instead)
    // Use a regex to work around a WebKit issue. See #5145
    opacity: /^0.5/.test( a.style.opacity ),

    // Verify style float existence
    // (IE uses styleFloat instead of cssFloat)
    cssFloat: !!a.style.cssFloat,

    // Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
    checkOn: !!input.value,

    // Make sure that a selected-by-default option has a working selected property.
    // (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
    optSelected: opt.selected,

    // Tests for enctype support on a form (#6743)
    enctype: !!document.createElement("form").enctype,

    // Makes sure cloning an html5 element does not cause problems
    // Where outerHTML is undefined, this still works
    html5Clone: document.createElement("nav").cloneNode( true ).outerHTML !== "<:nav></:nav>",

    // jQuery.support.boxModel DEPRECATED in 1.8 since we don't support Quirks Mode
    boxModel: document.compatMode === "CSS1Compat",

    // Will be defined later
    deleteExpando: true,
    noCloneEvent: true,
    inlineBlockNeedsLayout: false,
    shrinkWrapBlocks: false,
    reliableMarginRight: true,
    boxSizingReliable: true,
    pixelPosition: false
  };

  // Make sure checked status is properly cloned
  input.checked = true;
  support.noCloneChecked = input.cloneNode( true ).checked;

  // Make sure that the options inside disabled selects aren't marked as disabled
  // (WebKit marks them as disabled)
  select.disabled = true;
  support.optDisabled = !opt.disabled;

  // Support: IE<9
  try {
    delete div.test;
  } catch( e ) {
    support.deleteExpando = false;
  }

  // Check if we can trust getAttribute("value")
  input = document.createElement("input");
  input.setAttribute( "value", "" );
  support.input = input.getAttribute( "value" ) === "";

  // Check if an input maintains its value after becoming a radio
  input.value = "t";
  input.setAttribute( "type", "radio" );
  support.radioValue = input.value === "t";

  // #11217 - WebKit loses check when the name is after the checked attribute
  input.setAttribute( "checked", "t" );
  input.setAttribute( "name", "t" );

  fragment = document.createDocumentFragment();
  fragment.appendChild( input );

  // Check if a disconnected checkbox will retain its checked
  // value of true after appended to the DOM (IE6/7)
  support.appendChecked = input.checked;

  // WebKit doesn't clone checked state correctly in fragments
  support.checkClone = fragment.cloneNode( true ).cloneNode( true ).lastChild.checked;

  // Support: IE<9
  // Opera does not clone events (and typeof div.attachEvent === undefined).
  // IE9-10 clones events bound via attachEvent, but they don't trigger with .click()
  if ( div.attachEvent ) {
    div.attachEvent( "onclick", function() {
      support.noCloneEvent = false;
    });

    div.cloneNode( true ).click();
  }

  // Support: IE<9 (lack submit/change bubble), Firefox 17+ (lack focusin event)
  // Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP), test/csp.php
  for ( i in { submit: true, change: true, focusin: true }) {
    div.setAttribute( eventName = "on" + i, "t" );

    support[ i + "Bubbles" ] = eventName in window || div.attributes[ eventName ].expando === false;
  }

  div.style.backgroundClip = "content-box";
  div.cloneNode( true ).style.backgroundClip = "";
  support.clearCloneStyle = div.style.backgroundClip === "content-box";

  // Run tests that need a body at doc ready
  jQuery(function() {
    var container, marginDiv, tds,
      divReset = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
      body = document.getElementsByTagName("body")[0];

    if ( !body ) {
      // Return for frameset docs that don't have a body
      return;
    }

    container = document.createElement("div");
    container.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px";

    body.appendChild( container ).appendChild( div );

    // Support: IE8
    // Check if table cells still have offsetWidth/Height when they are set
    // to display:none and there are still other visible table cells in a
    // table row; if so, offsetWidth/Height are not reliable for use when
    // determining if an element has been hidden directly using
    // display:none (it is still safe to use offsets if a parent element is
    // hidden; don safety goggles and see bug #4512 for more information).
    div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
    tds = div.getElementsByTagName("td");
    tds[ 0 ].style.cssText = "padding:0;margin:0;border:0;display:none";
    isSupported = ( tds[ 0 ].offsetHeight === 0 );

    tds[ 0 ].style.display = "";
    tds[ 1 ].style.display = "none";

    // Support: IE8
    // Check if empty table cells still have offsetWidth/Height
    support.reliableHiddenOffsets = isSupported && ( tds[ 0 ].offsetHeight === 0 );

    // Check box-sizing and margin behavior
    div.innerHTML = "";
    div.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";
    support.boxSizing = ( div.offsetWidth === 4 );
    support.doesNotIncludeMarginInBodyOffset = ( body.offsetTop !== 1 );

    // Use window.getComputedStyle because jsdom on node.js will break without it.
    if ( window.getComputedStyle ) {
      support.pixelPosition = ( window.getComputedStyle( div, null ) || {} ).top !== "1%";
      support.boxSizingReliable = ( window.getComputedStyle( div, null ) || { width: "4px" } ).width === "4px";

      // Check if div with explicit width and no margin-right incorrectly
      // gets computed margin-right based on width of container. (#3333)
      // Fails in WebKit before Feb 2011 nightlies
      // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
      marginDiv = div.appendChild( document.createElement("div") );
      marginDiv.style.cssText = div.style.cssText = divReset;
      marginDiv.style.marginRight = marginDiv.style.width = "0";
      div.style.width = "1px";

      support.reliableMarginRight =
        !parseFloat( ( window.getComputedStyle( marginDiv, null ) || {} ).marginRight );
    }

    if ( typeof div.style.zoom !== core_strundefined ) {
      // Support: IE<8
      // Check if natively block-level elements act like inline-block
      // elements when setting their display to 'inline' and giving
      // them layout
      div.innerHTML = "";
      div.style.cssText = divReset + "width:1px;padding:1px;display:inline;zoom:1";
      support.inlineBlockNeedsLayout = ( div.offsetWidth === 3 );

      // Support: IE6
      // Check if elements with layout shrink-wrap their children
      div.style.display = "block";
      div.innerHTML = "<div></div>";
      div.firstChild.style.width = "5px";
      support.shrinkWrapBlocks = ( div.offsetWidth !== 3 );

      if ( support.inlineBlockNeedsLayout ) {
        // Prevent IE 6 from affecting layout for positioned elements #11048
        // Prevent IE from shrinking the body in IE 7 mode #12869
        // Support: IE<8
        body.style.zoom = 1;
      }
    }

    body.removeChild( container );

    // Null elements to avoid leaks in IE
    container = div = tds = marginDiv = null;
  });

  // Null elements to avoid leaks in IE
  all = select = fragment = opt = a = input = null;

  return support;
})();

var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
  rmultiDash = /([A-Z])/g;

function internalData( elem, name, data, pvt /* Internal Use Only */ ){
  if ( !jQuery.acceptData( elem ) ) {
    return;
  }

  var thisCache, ret,
    internalKey = jQuery.expando,
    getByName = typeof name === "string",

    // We have to handle DOM nodes and JS objects differently because IE6-7
    // can't GC object references properly across the DOM-JS boundary
    isNode = elem.nodeType,

    // Only DOM nodes need the global jQuery cache; JS object data is
    // attached directly to the object so GC can occur automatically
    cache = isNode ? jQuery.cache : elem,

    // Only defining an ID for JS objects if its cache already exists allows
    // the code to shortcut on the same path as a DOM node with no cache
    id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

  // Avoid doing any more work than we need to when trying to get data on an
  // object that has no data at all
  if ( (!id || !cache[id] || (!pvt && !cache[id].data)) && getByName && data === undefined ) {
    return;
  }

  if ( !id ) {
    // Only DOM nodes need a new unique ID for each element since their data
    // ends up in the global cache
    if ( isNode ) {
      elem[ internalKey ] = id = core_deletedIds.pop() || jQuery.guid++;
    } else {
      id = internalKey;
    }
  }

  if ( !cache[ id ] ) {
    cache[ id ] = {};

    // Avoids exposing jQuery metadata on plain JS objects when the object
    // is serialized using JSON.stringify
    if ( !isNode ) {
      cache[ id ].toJSON = jQuery.noop;
    }
  }

  // An object can be passed to jQuery.data instead of a key/value pair; this gets
  // shallow copied over onto the existing cache
  if ( typeof name === "object" || typeof name === "function" ) {
    if ( pvt ) {
      cache[ id ] = jQuery.extend( cache[ id ], name );
    } else {
      cache[ id ].data = jQuery.extend( cache[ id ].data, name );
    }
  }

  thisCache = cache[ id ];

  // jQuery data() is stored in a separate object inside the object's internal data
  // cache in order to avoid key collisions between internal data and user-defined
  // data.
  if ( !pvt ) {
    if ( !thisCache.data ) {
      thisCache.data = {};
    }

    thisCache = thisCache.data;
  }

  if ( data !== undefined ) {
    thisCache[ jQuery.camelCase( name ) ] = data;
  }

  // Check for both converted-to-camel and non-converted data property names
  // If a data property was specified
  if ( getByName ) {

    // First Try to find as-is property data
    ret = thisCache[ name ];

    // Test for null|undefined property data
    if ( ret == null ) {

      // Try to find the camelCased property
      ret = thisCache[ jQuery.camelCase( name ) ];
    }
  } else {
    ret = thisCache;
  }

  return ret;
}

function internalRemoveData( elem, name, pvt ) {
  if ( !jQuery.acceptData( elem ) ) {
    return;
  }

  var i, l, thisCache,
    isNode = elem.nodeType,

    // See jQuery.data for more information
    cache = isNode ? jQuery.cache : elem,
    id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

  // If there is already no cache entry for this object, there is no
  // purpose in continuing
  if ( !cache[ id ] ) {
    return;
  }

  if ( name ) {

    thisCache = pvt ? cache[ id ] : cache[ id ].data;

    if ( thisCache ) {

      // Support array or space separated string names for data keys
      if ( !jQuery.isArray( name ) ) {

        // try the string as a key before any manipulation
        if ( name in thisCache ) {
          name = [ name ];
        } else {

          // split the camel cased version by spaces unless a key with the spaces exists
          name = jQuery.camelCase( name );
          if ( name in thisCache ) {
            name = [ name ];
          } else {
            name = name.split(" ");
          }
        }
      } else {
        // If "name" is an array of keys...
        // When data is initially created, via ("key", "val") signature,
        // keys will be converted to camelCase.
        // Since there is no way to tell _how_ a key was added, remove
        // both plain key and camelCase key. #12786
        // This will only penalize the array argument path.
        name = name.concat( jQuery.map( name, jQuery.camelCase ) );
      }

      for ( i = 0, l = name.length; i < l; i++ ) {
        delete thisCache[ name[i] ];
      }

      // If there is no data left in the cache, we want to continue
      // and let the cache object itself get destroyed
      if ( !( pvt ? isEmptyDataObject : jQuery.isEmptyObject )( thisCache ) ) {
        return;
      }
    }
  }

  // See jQuery.data for more information
  if ( !pvt ) {
    delete cache[ id ].data;

    // Don't destroy the parent cache unless the internal data object
    // had been the only thing left in it
    if ( !isEmptyDataObject( cache[ id ] ) ) {
      return;
    }
  }

  // Destroy the cache
  if ( isNode ) {
    jQuery.cleanData( [ elem ], true );

  // Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
  } else if ( jQuery.support.deleteExpando || cache != cache.window ) {
    delete cache[ id ];

  // When all else fails, null
  } else {
    cache[ id ] = null;
  }
}

jQuery.extend({
  cache: {},

  // Unique for each copy of jQuery on the page
  // Non-digits removed to match rinlinejQuery
  expando: "jQuery" + ( core_version + Math.random() ).replace( /\D/g, "" ),

  // The following elements throw uncatchable exceptions if you
  // attempt to add expando properties to them.
  noData: {
    "embed": true,
    // Ban all objects except for Flash (which handle expandos)
    "object": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
    "applet": true
  },

  hasData: function( elem ) {
    elem = elem.nodeType ? jQuery.cache[ elem[jQuery.expando] ] : elem[ jQuery.expando ];
    return !!elem && !isEmptyDataObject( elem );
  },

  data: function( elem, name, data ) {
    return internalData( elem, name, data );
  },

  removeData: function( elem, name ) {
    return internalRemoveData( elem, name );
  },

  // For internal use only.
  _data: function( elem, name, data ) {
    return internalData( elem, name, data, true );
  },

  _removeData: function( elem, name ) {
    return internalRemoveData( elem, name, true );
  },

  // A method for determining if a DOM node can handle the data expando
  acceptData: function( elem ) {
    // Do not set data on non-element because it will not be cleared (#8335).
    if ( elem.nodeType && elem.nodeType !== 1 && elem.nodeType !== 9 ) {
      return false;
    }

    var noData = elem.nodeName && jQuery.noData[ elem.nodeName.toLowerCase() ];

    // nodes accept data unless otherwise specified; rejection can be conditional
    return !noData || noData !== true && elem.getAttribute("classid") === noData;
  }
});

jQuery.fn.extend({
  data: function( key, value ) {
    var attrs, name,
      elem = this[0],
      i = 0,
      data = null;

    // Gets all values
    if ( key === undefined ) {
      if ( this.length ) {
        data = jQuery.data( elem );

        if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
          attrs = elem.attributes;
          for ( ; i < attrs.length; i++ ) {
            name = attrs[i].name;

            if ( !name.indexOf( "data-" ) ) {
              name = jQuery.camelCase( name.slice(5) );

              dataAttr( elem, name, data[ name ] );
            }
          }
          jQuery._data( elem, "parsedAttrs", true );
        }
      }

      return data;
    }

    // Sets multiple values
    if ( typeof key === "object" ) {
      return this.each(function() {
        jQuery.data( this, key );
      });
    }

    return jQuery.access( this, function( value ) {

      if ( value === undefined ) {
        // Try to fetch any internally stored data first
        return elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : null;
      }

      this.each(function() {
        jQuery.data( this, key, value );
      });
    }, null, value, arguments.length > 1, null, true );
  },

  removeData: function( key ) {
    return this.each(function() {
      jQuery.removeData( this, key );
    });
  }
});

function dataAttr( elem, key, data ) {
  // If nothing was found internally, try to fetch any
  // data from the HTML5 data-* attribute
  if ( data === undefined && elem.nodeType === 1 ) {

    var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

    data = elem.getAttribute( name );

    if ( typeof data === "string" ) {
      try {
        data = data === "true" ? true :
          data === "false" ? false :
          data === "null" ? null :
          // Only convert to a number if it doesn't change the string
          +data + "" === data ? +data :
          rbrace.test( data ) ? jQuery.parseJSON( data ) :
            data;
      } catch( e ) {}

      // Make sure we set the data so it isn't changed later
      jQuery.data( elem, key, data );

    } else {
      data = undefined;
    }
  }

  return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
  var name;
  for ( name in obj ) {

    // if the public data object is empty, the private is still empty
    if ( name === "data" && jQuery.isEmptyObject( obj[name] ) ) {
      continue;
    }
    if ( name !== "toJSON" ) {
      return false;
    }
  }

  return true;
}
jQuery.extend({
  queue: function( elem, type, data ) {
    var queue;

    if ( elem ) {
      type = ( type || "fx" ) + "queue";
      queue = jQuery._data( elem, type );

      // Speed up dequeue by getting out quickly if this is just a lookup
      if ( data ) {
        if ( !queue || jQuery.isArray(data) ) {
          queue = jQuery._data( elem, type, jQuery.makeArray(data) );
        } else {
          queue.push( data );
        }
      }
      return queue || [];
    }
  },

  dequeue: function( elem, type ) {
    type = type || "fx";

    var queue = jQuery.queue( elem, type ),
      startLength = queue.length,
      fn = queue.shift(),
      hooks = jQuery._queueHooks( elem, type ),
      next = function() {
        jQuery.dequeue( elem, type );
      };

    // If the fx queue is dequeued, always remove the progress sentinel
    if ( fn === "inprogress" ) {
      fn = queue.shift();
      startLength--;
    }

    hooks.cur = fn;
    if ( fn ) {

      // Add a progress sentinel to prevent the fx queue from being
      // automatically dequeued
      if ( type === "fx" ) {
        queue.unshift( "inprogress" );
      }

      // clear up the last queue stop function
      delete hooks.stop;
      fn.call( elem, next, hooks );
    }

    if ( !startLength && hooks ) {
      hooks.empty.fire();
    }
  },

  // not intended for public consumption - generates a queueHooks object, or returns the current one
  _queueHooks: function( elem, type ) {
    var key = type + "queueHooks";
    return jQuery._data( elem, key ) || jQuery._data( elem, key, {
      empty: jQuery.Callbacks("once memory").add(function() {
        jQuery._removeData( elem, type + "queue" );
        jQuery._removeData( elem, key );
      })
    });
  }
});

jQuery.fn.extend({
  queue: function( type, data ) {
    var setter = 2;

    if ( typeof type !== "string" ) {
      data = type;
      type = "fx";
      setter--;
    }

    if ( arguments.length < setter ) {
      return jQuery.queue( this[0], type );
    }

    return data === undefined ?
      this :
      this.each(function() {
        var queue = jQuery.queue( this, type, data );

        // ensure a hooks for this queue
        jQuery._queueHooks( this, type );

        if ( type === "fx" && queue[0] !== "inprogress" ) {
          jQuery.dequeue( this, type );
        }
      });
  },
  dequeue: function( type ) {
    return this.each(function() {
      jQuery.dequeue( this, type );
    });
  },
  // Based off of the plugin by Clint Helfers, with permission.
  // http://blindsignals.com/index.php/2009/07/jquery-delay/
  delay: function( time, type ) {
    time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
    type = type || "fx";

    return this.queue( type, function( next, hooks ) {
      var timeout = setTimeout( next, time );
      hooks.stop = function() {
        clearTimeout( timeout );
      };
    });
  },
  clearQueue: function( type ) {
    return this.queue( type || "fx", [] );
  },
  // Get a promise resolved when queues of a certain type
  // are emptied (fx is the type by default)
  promise: function( type, obj ) {
    var tmp,
      count = 1,
      defer = jQuery.Deferred(),
      elements = this,
      i = this.length,
      resolve = function() {
        if ( !( --count ) ) {
          defer.resolveWith( elements, [ elements ] );
        }
      };

    if ( typeof type !== "string" ) {
      obj = type;
      type = undefined;
    }
    type = type || "fx";

    while( i-- ) {
      tmp = jQuery._data( elements[ i ], type + "queueHooks" );
      if ( tmp && tmp.empty ) {
        count++;
        tmp.empty.add( resolve );
      }
    }
    resolve();
    return defer.promise( obj );
  }
});
var nodeHook, boolHook,
  rclass = /[\t\r\n]/g,
  rreturn = /\r/g,
  rfocusable = /^(?:input|select|textarea|button|object)$/i,
  rclickable = /^(?:a|area)$/i,
  rboolean = /^(?:checked|selected|autofocus|autoplay|async|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped)$/i,
  ruseDefault = /^(?:checked|selected)$/i,
  getSetAttribute = jQuery.support.getSetAttribute,
  getSetInput = jQuery.support.input;

jQuery.fn.extend({
  attr: function( name, value ) {
    return jQuery.access( this, jQuery.attr, name, value, arguments.length > 1 );
  },

  removeAttr: function( name ) {
    return this.each(function() {
      jQuery.removeAttr( this, name );
    });
  },

  prop: function( name, value ) {
    return jQuery.access( this, jQuery.prop, name, value, arguments.length > 1 );
  },

  removeProp: function( name ) {
    name = jQuery.propFix[ name ] || name;
    return this.each(function() {
      // try/catch handles cases where IE balks (such as removing a property on window)
      try {
        this[ name ] = undefined;
        delete this[ name ];
      } catch( e ) {}
    });
  },

  addClass: function( value ) {
    var classes, elem, cur, clazz, j,
      i = 0,
      len = this.length,
      proceed = typeof value === "string" && value;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).addClass( value.call( this, j, this.className ) );
      });
    }

    if ( proceed ) {
      // The disjunction here is for better compressibility (see removeClass)
      classes = ( value || "" ).match( core_rnotwhite ) || [];

      for ( ; i < len; i++ ) {
        elem = this[ i ];
        cur = elem.nodeType === 1 && ( elem.className ?
          ( " " + elem.className + " " ).replace( rclass, " " ) :
          " "
        );

        if ( cur ) {
          j = 0;
          while ( (clazz = classes[j++]) ) {
            if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
              cur += clazz + " ";
            }
          }
          elem.className = jQuery.trim( cur );

        }
      }
    }

    return this;
  },

  removeClass: function( value ) {
    var classes, elem, cur, clazz, j,
      i = 0,
      len = this.length,
      proceed = arguments.length === 0 || typeof value === "string" && value;

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( j ) {
        jQuery( this ).removeClass( value.call( this, j, this.className ) );
      });
    }
    if ( proceed ) {
      classes = ( value || "" ).match( core_rnotwhite ) || [];

      for ( ; i < len; i++ ) {
        elem = this[ i ];
        // This expression is here for better compressibility (see addClass)
        cur = elem.nodeType === 1 && ( elem.className ?
          ( " " + elem.className + " " ).replace( rclass, " " ) :
          ""
        );

        if ( cur ) {
          j = 0;
          while ( (clazz = classes[j++]) ) {
            // Remove *all* instances
            while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
              cur = cur.replace( " " + clazz + " ", " " );
            }
          }
          elem.className = value ? jQuery.trim( cur ) : "";
        }
      }
    }

    return this;
  },

  toggleClass: function( value, stateVal ) {
    var type = typeof value,
      isBool = typeof stateVal === "boolean";

    if ( jQuery.isFunction( value ) ) {
      return this.each(function( i ) {
        jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
      });
    }

    return this.each(function() {
      if ( type === "string" ) {
        // toggle individual class names
        var className,
          i = 0,
          self = jQuery( this ),
          state = stateVal,
          classNames = value.match( core_rnotwhite ) || [];

        while ( (className = classNames[ i++ ]) ) {
          // check each className given, space separated list
          state = isBool ? state : !self.hasClass( className );
          self[ state ? "addClass" : "removeClass" ]( className );
        }

      // Toggle whole class name
      } else if ( type === core_strundefined || type === "boolean" ) {
        if ( this.className ) {
          // store className if set
          jQuery._data( this, "__className__", this.className );
        }

        // If the element has a class name or if we're passed "false",
        // then remove the whole classname (if there was one, the above saved it).
        // Otherwise bring back whatever was previously saved (if anything),
        // falling back to the empty string if nothing was stored.
        this.className = this.className || value === false ? "" : jQuery._data( this, "__className__" ) || "";
      }
    });
  },

  hasClass: function( selector ) {
    var className = " " + selector + " ",
      i = 0,
      l = this.length;
    for ( ; i < l; i++ ) {
      if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
        return true;
      }
    }

    return false;
  },

  val: function( value ) {
    var ret, hooks, isFunction,
      elem = this[0];

    if ( !arguments.length ) {
      if ( elem ) {
        hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

        if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
          return ret;
        }

        ret = elem.value;

        return typeof ret === "string" ?
          // handle most common string cases
          ret.replace(rreturn, "") :
          // handle cases where value is null/undef or number
          ret == null ? "" : ret;
      }

      return;
    }

    isFunction = jQuery.isFunction( value );

    return this.each(function( i ) {
      var val,
        self = jQuery(this);

      if ( this.nodeType !== 1 ) {
        return;
      }

      if ( isFunction ) {
        val = value.call( this, i, self.val() );
      } else {
        val = value;
      }

      // Treat null/undefined as ""; convert numbers to string
      if ( val == null ) {
        val = "";
      } else if ( typeof val === "number" ) {
        val += "";
      } else if ( jQuery.isArray( val ) ) {
        val = jQuery.map(val, function ( value ) {
          return value == null ? "" : value + "";
        });
      }

      hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

      // If set returns undefined, fall back to normal setting
      if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
        this.value = val;
      }
    });
  }
});

jQuery.extend({
  valHooks: {
    option: {
      get: function( elem ) {
        // attributes.value is undefined in Blackberry 4.7 but
        // uses .value. See #6932
        var val = elem.attributes.value;
        return !val || val.specified ? elem.value : elem.text;
      }
    },
    select: {
      get: function( elem ) {
        var value, option,
          options = elem.options,
          index = elem.selectedIndex,
          one = elem.type === "select-one" || index < 0,
          values = one ? null : [],
          max = one ? index + 1 : options.length,
          i = index < 0 ?
            max :
            one ? index : 0;

        // Loop through all the selected options
        for ( ; i < max; i++ ) {
          option = options[ i ];

          // oldIE doesn't update selected after form reset (#2551)
          if ( ( option.selected || i === index ) &&
              // Don't return options that are disabled or in a disabled optgroup
              ( jQuery.support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null ) &&
              ( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

            // Get the specific value for the option
            value = jQuery( option ).val();

            // We don't need an array for one selects
            if ( one ) {
              return value;
            }

            // Multi-Selects return an array
            values.push( value );
          }
        }

        return values;
      },

      set: function( elem, value ) {
        var values = jQuery.makeArray( value );

        jQuery(elem).find("option").each(function() {
          this.selected = jQuery.inArray( jQuery(this).val(), values ) >= 0;
        });

        if ( !values.length ) {
          elem.selectedIndex = -1;
        }
        return values;
      }
    }
  },

  attr: function( elem, name, value ) {
    var hooks, notxml, ret,
      nType = elem.nodeType;

    // don't get/set attributes on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    // Fallback to prop when attributes are not supported
    if ( typeof elem.getAttribute === core_strundefined ) {
      return jQuery.prop( elem, name, value );
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    // All attributes are lowercase
    // Grab necessary hook if one is defined
    if ( notxml ) {
      name = name.toLowerCase();
      hooks = jQuery.attrHooks[ name ] || ( rboolean.test( name ) ? boolHook : nodeHook );
    }

    if ( value !== undefined ) {

      if ( value === null ) {
        jQuery.removeAttr( elem, name );

      } else if ( hooks && notxml && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        elem.setAttribute( name, value + "" );
        return value;
      }

    } else if ( hooks && notxml && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
      return ret;

    } else {

      // In IE9+, Flash objects don't have .getAttribute (#12945)
      // Support: IE9+
      if ( typeof elem.getAttribute !== core_strundefined ) {
        ret =  elem.getAttribute( name );
      }

      // Non-existent attributes return null, we normalize to undefined
      return ret == null ?
        undefined :
        ret;
    }
  },

  removeAttr: function( elem, value ) {
    var name, propName,
      i = 0,
      attrNames = value && value.match( core_rnotwhite );

    if ( attrNames && elem.nodeType === 1 ) {
      while ( (name = attrNames[i++]) ) {
        propName = jQuery.propFix[ name ] || name;

        // Boolean attributes get special treatment (#10870)
        if ( rboolean.test( name ) ) {
          // Set corresponding property to false for boolean attributes
          // Also clear defaultChecked/defaultSelected (if appropriate) for IE<8
          if ( !getSetAttribute && ruseDefault.test( name ) ) {
            elem[ jQuery.camelCase( "default-" + name ) ] =
              elem[ propName ] = false;
          } else {
            elem[ propName ] = false;
          }

        // See #9699 for explanation of this approach (setting first, then removal)
        } else {
          jQuery.attr( elem, name, "" );
        }

        elem.removeAttribute( getSetAttribute ? name : propName );
      }
    }
  },

  attrHooks: {
    type: {
      set: function( elem, value ) {
        if ( !jQuery.support.radioValue && value === "radio" && jQuery.nodeName(elem, "input") ) {
          // Setting the type on a radio button after the value resets the value in IE6-9
          // Reset value to default in case type is set after value during creation
          var val = elem.value;
          elem.setAttribute( "type", value );
          if ( val ) {
            elem.value = val;
          }
          return value;
        }
      }
    }
  },

  propFix: {
    tabindex: "tabIndex",
    readonly: "readOnly",
    "for": "htmlFor",
    "class": "className",
    maxlength: "maxLength",
    cellspacing: "cellSpacing",
    cellpadding: "cellPadding",
    rowspan: "rowSpan",
    colspan: "colSpan",
    usemap: "useMap",
    frameborder: "frameBorder",
    contenteditable: "contentEditable"
  },

  prop: function( elem, name, value ) {
    var ret, hooks, notxml,
      nType = elem.nodeType;

    // don't get/set properties on text, comment and attribute nodes
    if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
      return;
    }

    notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

    if ( notxml ) {
      // Fix name and attach hooks
      name = jQuery.propFix[ name ] || name;
      hooks = jQuery.propHooks[ name ];
    }

    if ( value !== undefined ) {
      if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
        return ret;

      } else {
        return ( elem[ name ] = value );
      }

    } else {
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
        return ret;

      } else {
        return elem[ name ];
      }
    }
  },

  propHooks: {
    tabIndex: {
      get: function( elem ) {
        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
        // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
        var attributeNode = elem.getAttributeNode("tabindex");

        return attributeNode && attributeNode.specified ?
          parseInt( attributeNode.value, 10 ) :
          rfocusable.test( elem.nodeName ) || rclickable.test( elem.nodeName ) && elem.href ?
            0 :
            undefined;
      }
    }
  }
});

// Hook for boolean attributes
boolHook = {
  get: function( elem, name ) {
    var
      // Use .prop to determine if this attribute is understood as boolean
      prop = jQuery.prop( elem, name ),

      // Fetch it accordingly
      attr = typeof prop === "boolean" && elem.getAttribute( name ),
      detail = typeof prop === "boolean" ?

        getSetInput && getSetAttribute ?
          attr != null :
          // oldIE fabricates an empty string for missing boolean attributes
          // and conflates checked/selected into attroperties
          ruseDefault.test( name ) ?
            elem[ jQuery.camelCase( "default-" + name ) ] :
            !!attr :

        // fetch an attribute node for properties not recognized as boolean
        elem.getAttributeNode( name );

    return detail && detail.value !== false ?
      name.toLowerCase() :
      undefined;
  },
  set: function( elem, value, name ) {
    if ( value === false ) {
      // Remove boolean attributes when set to false
      jQuery.removeAttr( elem, name );
    } else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
      // IE<8 needs the *property* name
      elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

    // Use defaultChecked and defaultSelected for oldIE
    } else {
      elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
    }

    return name;
  }
};

// fix oldIE value attroperty
if ( !getSetInput || !getSetAttribute ) {
  jQuery.attrHooks.value = {
    get: function( elem, name ) {
      var ret = elem.getAttributeNode( name );
      return jQuery.nodeName( elem, "input" ) ?

        // Ignore the value *property* by using defaultValue
        elem.defaultValue :

        ret && ret.specified ? ret.value : undefined;
    },
    set: function( elem, value, name ) {
      if ( jQuery.nodeName( elem, "input" ) ) {
        // Does not return so that setAttribute is also used
        elem.defaultValue = value;
      } else {
        // Use nodeHook if defined (#1954); otherwise setAttribute is fine
        return nodeHook && nodeHook.set( elem, value, name );
      }
    }
  };
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

  // Use this for any attribute in IE6/7
  // This fixes almost every IE6/7 issue
  nodeHook = jQuery.valHooks.button = {
    get: function( elem, name ) {
      var ret = elem.getAttributeNode( name );
      return ret && ( name === "id" || name === "name" || name === "coords" ? ret.value !== "" : ret.specified ) ?
        ret.value :
        undefined;
    },
    set: function( elem, value, name ) {
      // Set the existing or create a new attribute node
      var ret = elem.getAttributeNode( name );
      if ( !ret ) {
        elem.setAttributeNode(
          (ret = elem.ownerDocument.createAttribute( name ))
        );
      }

      ret.value = value += "";

      // Break association with cloned elements by also using setAttribute (#9646)
      return name === "value" || value === elem.getAttribute( name ) ?
        value :
        undefined;
    }
  };

  // Set contenteditable to false on removals(#10429)
  // Setting to empty string throws an error as an invalid value
  jQuery.attrHooks.contenteditable = {
    get: nodeHook.get,
    set: function( elem, value, name ) {
      nodeHook.set( elem, value === "" ? false : value, name );
    }
  };

  // Set width and height to auto instead of 0 on empty string( Bug #8150 )
  // This is for removals
  jQuery.each([ "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      set: function( elem, value ) {
        if ( value === "" ) {
          elem.setAttribute( name, "auto" );
          return value;
        }
      }
    });
  });
}


// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !jQuery.support.hrefNormalized ) {
  jQuery.each([ "href", "src", "width", "height" ], function( i, name ) {
    jQuery.attrHooks[ name ] = jQuery.extend( jQuery.attrHooks[ name ], {
      get: function( elem ) {
        var ret = elem.getAttribute( name, 2 );
        return ret == null ? undefined : ret;
      }
    });
  });

  // href/src property should get the full normalized URL (#10299/#12915)
  jQuery.each([ "href", "src" ], function( i, name ) {
    jQuery.propHooks[ name ] = {
      get: function( elem ) {
        return elem.getAttribute( name, 4 );
      }
    };
  });
}

if ( !jQuery.support.style ) {
  jQuery.attrHooks.style = {
    get: function( elem ) {
      // Return undefined in the case of empty string
      // Note: IE uppercases css property names, but if we were to .toLowerCase()
      // .cssText, that would destroy case senstitivity in URL's, like in "background"
      return elem.style.cssText || undefined;
    },
    set: function( elem, value ) {
      return ( elem.style.cssText = value + "" );
    }
  };
}

// Safari mis-reports the default selected property of an option
// Accessing the parent's selectedIndex property fixes it
if ( !jQuery.support.optSelected ) {
  jQuery.propHooks.selected = jQuery.extend( jQuery.propHooks.selected, {
    get: function( elem ) {
      var parent = elem.parentNode;

      if ( parent ) {
        parent.selectedIndex;

        // Make sure that it also works with optgroups, see #5701
        if ( parent.parentNode ) {
          parent.parentNode.selectedIndex;
        }
      }
      return null;
    }
  });
}

// IE6/7 call enctype encoding
if ( !jQuery.support.enctype ) {
  jQuery.propFix.enctype = "encoding";
}

// Radios and checkboxes getter/setter
if ( !jQuery.support.checkOn ) {
  jQuery.each([ "radio", "checkbox" ], function() {
    jQuery.valHooks[ this ] = {
      get: function( elem ) {
        // Handle the case where in Webkit "" is returned instead of "on" if a value isn't specified
        return elem.getAttribute("value") === null ? "on" : elem.value;
      }
    };
  });
}
jQuery.each([ "radio", "checkbox" ], function() {
  jQuery.valHooks[ this ] = jQuery.extend( jQuery.valHooks[ this ], {
    set: function( elem, value ) {
      if ( jQuery.isArray( value ) ) {
        return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
      }
    }
  });
});
var rformElems = /^(?:input|select|textarea)$/i,
  rkeyEvent = /^key/,
  rmouseEvent = /^(?:mouse|contextmenu)|click/,
  rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
  rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
  return true;
}

function returnFalse() {
  return false;
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

  global: {},

  add: function( elem, types, handler, data, selector ) {
    var tmp, events, t, handleObjIn,
      special, eventHandle, handleObj,
      handlers, type, namespaces, origType,
      elemData = jQuery._data( elem );

    // Don't attach events to noData or text/comment nodes (but allow plain objects)
    if ( !elemData ) {
      return;
    }

    // Caller can pass in an object of custom data in lieu of the handler
    if ( handler.handler ) {
      handleObjIn = handler;
      handler = handleObjIn.handler;
      selector = handleObjIn.selector;
    }

    // Make sure that the handler has a unique ID, used to find/remove it later
    if ( !handler.guid ) {
      handler.guid = jQuery.guid++;
    }

    // Init the element's event structure and main handler, if this is the first
    if ( !(events = elemData.events) ) {
      events = elemData.events = {};
    }
    if ( !(eventHandle = elemData.handle) ) {
      eventHandle = elemData.handle = function( e ) {
        // Discard the second event of a jQuery.event.trigger() and
        // when an event is called after a page has unloaded
        return typeof jQuery !== core_strundefined && (!e || jQuery.event.triggered !== e.type) ?
          jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
          undefined;
      };
      // Add elem as a property of the handle fn to prevent a memory leak with IE non-native events
      eventHandle.elem = elem;
    }

    // Handle multiple events separated by a space
    // jQuery(...).bind("mouseover mouseout", fn);
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[t] ) || [];
      type = origType = tmp[1];
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

      // If event changes its type, use the special event handlers for the changed type
      special = jQuery.event.special[ type ] || {};

      // If selector defined, determine special event api type, otherwise given type
      type = ( selector ? special.delegateType : special.bindType ) || type;

      // Update special based on newly reset type
      special = jQuery.event.special[ type ] || {};

      // handleObj is passed to all event handlers
      handleObj = jQuery.extend({
        type: type,
        origType: origType,
        data: data,
        handler: handler,
        guid: handler.guid,
        selector: selector,
        needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
        namespace: namespaces.join(".")
      }, handleObjIn );

      // Init the event handler queue if we're the first
      if ( !(handlers = events[ type ]) ) {
        handlers = events[ type ] = [];
        handlers.delegateCount = 0;

        // Only use addEventListener/attachEvent if the special events handler returns false
        if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
          // Bind the global event handler to the element
          if ( elem.addEventListener ) {
            elem.addEventListener( type, eventHandle, false );

          } else if ( elem.attachEvent ) {
            elem.attachEvent( "on" + type, eventHandle );
          }
        }
      }

      if ( special.add ) {
        special.add.call( elem, handleObj );

        if ( !handleObj.handler.guid ) {
          handleObj.handler.guid = handler.guid;
        }
      }

      // Add to the element's handler list, delegates in front
      if ( selector ) {
        handlers.splice( handlers.delegateCount++, 0, handleObj );
      } else {
        handlers.push( handleObj );
      }

      // Keep track of which events have ever been used, for event optimization
      jQuery.event.global[ type ] = true;
    }

    // Nullify elem to prevent memory leaks in IE
    elem = null;
  },

  // Detach an event or set of events from an element
  remove: function( elem, types, handler, selector, mappedTypes ) {
    var j, handleObj, tmp,
      origCount, t, events,
      special, handlers, type,
      namespaces, origType,
      elemData = jQuery.hasData( elem ) && jQuery._data( elem );

    if ( !elemData || !(events = elemData.events) ) {
      return;
    }

    // Once for each type.namespace in types; type may be omitted
    types = ( types || "" ).match( core_rnotwhite ) || [""];
    t = types.length;
    while ( t-- ) {
      tmp = rtypenamespace.exec( types[t] ) || [];
      type = origType = tmp[1];
      namespaces = ( tmp[2] || "" ).split( "." ).sort();

      // Unbind all events (on this namespace, if provided) for the element
      if ( !type ) {
        for ( type in events ) {
          jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
        }
        continue;
      }

      special = jQuery.event.special[ type ] || {};
      type = ( selector ? special.delegateType : special.bindType ) || type;
      handlers = events[ type ] || [];
      tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

      // Remove matching events
      origCount = j = handlers.length;
      while ( j-- ) {
        handleObj = handlers[ j ];

        if ( ( mappedTypes || origType === handleObj.origType ) &&
          ( !handler || handler.guid === handleObj.guid ) &&
          ( !tmp || tmp.test( handleObj.namespace ) ) &&
          ( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
          handlers.splice( j, 1 );

          if ( handleObj.selector ) {
            handlers.delegateCount--;
          }
          if ( special.remove ) {
            special.remove.call( elem, handleObj );
          }
        }
      }

      // Remove generic event handler if we removed something and no more handlers exist
      // (avoids potential for endless recursion during removal of special event handlers)
      if ( origCount && !handlers.length ) {
        if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
          jQuery.removeEvent( elem, type, elemData.handle );
        }

        delete events[ type ];
      }
    }

    // Remove the expando if it's no longer used
    if ( jQuery.isEmptyObject( events ) ) {
      delete elemData.handle;

      // removeData also checks for emptiness and clears the expando if empty
      // so use it instead of delete
      jQuery._removeData( elem, "events" );
    }
  },

  trigger: function( event, data, elem, onlyHandlers ) {
    var handle, ontype, cur,
      bubbleType, special, tmp, i,
      eventPath = [ elem || document ],
      type = core_hasOwn.call( event, "type" ) ? event.type : event,
      namespaces = core_hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

    cur = tmp = elem = elem || document;

    // Don't do events on text and comment nodes
    if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
      return;
    }

    // focus/blur morphs to focusin/out; ensure we're not firing them right now
    if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
      return;
    }

    if ( type.indexOf(".") >= 0 ) {
      // Namespaced trigger; create a regexp to match event type in handle()
      namespaces = type.split(".");
      type = namespaces.shift();
      namespaces.sort();
    }
    ontype = type.indexOf(":") < 0 && "on" + type;

    // Caller can pass in a jQuery.Event object, Object, or just an event type string
    event = event[ jQuery.expando ] ?
      event :
      new jQuery.Event( type, typeof event === "object" && event );

    event.isTrigger = true;
    event.namespace = namespaces.join(".");
    event.namespace_re = event.namespace ?
      new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
      null;

    // Clean up the event in case it is being reused
    event.result = undefined;
    if ( !event.target ) {
      event.target = elem;
    }

    // Clone any incoming data and prepend the event, creating the handler arg list
    data = data == null ?
      [ event ] :
      jQuery.makeArray( data, [ event ] );

    // Allow special events to draw outside the lines
    special = jQuery.event.special[ type ] || {};
    if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
      return;
    }

    // Determine event propagation path in advance, per W3C events spec (#9951)
    // Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
    if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

      bubbleType = special.delegateType || type;
      if ( !rfocusMorph.test( bubbleType + type ) ) {
        cur = cur.parentNode;
      }
      for ( ; cur; cur = cur.parentNode ) {
        eventPath.push( cur );
        tmp = cur;
      }

      // Only add window if we got to document (e.g., not plain obj or detached DOM)
      if ( tmp === (elem.ownerDocument || document) ) {
        eventPath.push( tmp.defaultView || tmp.parentWindow || window );
      }
    }

    // Fire handlers on the event path
    i = 0;
    while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

      event.type = i > 1 ?
        bubbleType :
        special.bindType || type;

      // jQuery handler
      handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] && jQuery._data( cur, "handle" );
      if ( handle ) {
        handle.apply( cur, data );
      }

      // Native handler
      handle = ontype && cur[ ontype ];
      if ( handle && jQuery.acceptData( cur ) && handle.apply && handle.apply( cur, data ) === false ) {
        event.preventDefault();
      }
    }
    event.type = type;

    // If nobody prevented the default action, do it now
    if ( !onlyHandlers && !event.isDefaultPrevented() ) {

      if ( (!special._default || special._default.apply( elem.ownerDocument, data ) === false) &&
        !(type === "click" && jQuery.nodeName( elem, "a" )) && jQuery.acceptData( elem ) ) {

        // Call a native DOM method on the target with the same name name as the event.
        // Can't use an .isFunction() check here because IE6/7 fails that test.
        // Don't do default actions on window, that's where global variables be (#6170)
        if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

          // Don't re-trigger an onFOO event when we call its FOO() method
          tmp = elem[ ontype ];

          if ( tmp ) {
            elem[ ontype ] = null;
          }

          // Prevent re-triggering of the same event, since we already bubbled it above
          jQuery.event.triggered = type;
          try {
            elem[ type ]();
          } catch ( e ) {
            // IE<9 dies on focus/blur to hidden element (#1486,#12518)
            // only reproducible on winXP IE8 native, not IE9 in IE8 mode
          }
          jQuery.event.triggered = undefined;

          if ( tmp ) {
            elem[ ontype ] = tmp;
          }
        }
      }
    }

    return event.result;
  },

  dispatch: function( event ) {

    // Make a writable jQuery.Event from the native event object
    event = jQuery.event.fix( event );

    var i, ret, handleObj, matched, j,
      handlerQueue = [],
      args = core_slice.call( arguments ),
      handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
      special = jQuery.event.special[ event.type ] || {};

    // Use the fix-ed jQuery.Event rather than the (read-only) native event
    args[0] = event;
    event.delegateTarget = this;

    // Call the preDispatch hook for the mapped type, and let it bail if desired
    if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
      return;
    }

    // Determine handlers
    handlerQueue = jQuery.event.handlers.call( this, event, handlers );

    // Run delegates first; they may want to stop propagation beneath us
    i = 0;
    while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
      event.currentTarget = matched.elem;

      j = 0;
      while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

        // Triggered event must either 1) have no namespace, or
        // 2) have namespace(s) a subset or equal to those in the bound event (both can have no namespace).
        if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

          event.handleObj = handleObj;
          event.data = handleObj.data;

          ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
              .apply( matched.elem, args );

          if ( ret !== undefined ) {
            if ( (event.result = ret) === false ) {
              event.preventDefault();
              event.stopPropagation();
            }
          }
        }
      }
    }

    // Call the postDispatch hook for the mapped type
    if ( special.postDispatch ) {
      special.postDispatch.call( this, event );
    }

    return event.result;
  },

  handlers: function( event, handlers ) {
    var sel, handleObj, matches, i,
      handlerQueue = [],
      delegateCount = handlers.delegateCount,
      cur = event.target;

    // Find delegate handlers
    // Black-hole SVG <use> instance trees (#13180)
    // Avoid non-left-click bubbling in Firefox (#3861)
    if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

      for ( ; cur != this; cur = cur.parentNode || this ) {

        // Don't check non-elements (#13208)
        // Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
        if ( cur.nodeType === 1 && (cur.disabled !== true || event.type !== "click") ) {
          matches = [];
          for ( i = 0; i < delegateCount; i++ ) {
            handleObj = handlers[ i ];

            // Don't conflict with Object.prototype properties (#13203)
            sel = handleObj.selector + " ";

            if ( matches[ sel ] === undefined ) {
              matches[ sel ] = handleObj.needsContext ?
                jQuery( sel, this ).index( cur ) >= 0 :
                jQuery.find( sel, this, null, [ cur ] ).length;
            }
            if ( matches[ sel ] ) {
              matches.push( handleObj );
            }
          }
          if ( matches.length ) {
            handlerQueue.push({ elem: cur, handlers: matches });
          }
        }
      }
    }

    // Add the remaining (directly-bound) handlers
    if ( delegateCount < handlers.length ) {
      handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
    }

    return handlerQueue;
  },

  fix: function( event ) {
    if ( event[ jQuery.expando ] ) {
      return event;
    }

    // Create a writable copy of the event object and normalize some properties
    var i, prop, copy,
      type = event.type,
      originalEvent = event,
      fixHook = this.fixHooks[ type ];

    if ( !fixHook ) {
      this.fixHooks[ type ] = fixHook =
        rmouseEvent.test( type ) ? this.mouseHooks :
        rkeyEvent.test( type ) ? this.keyHooks :
        {};
    }
    copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

    event = new jQuery.Event( originalEvent );

    i = copy.length;
    while ( i-- ) {
      prop = copy[ i ];
      event[ prop ] = originalEvent[ prop ];
    }

    // Support: IE<9
    // Fix target property (#1925)
    if ( !event.target ) {
      event.target = originalEvent.srcElement || document;
    }

    // Support: Chrome 23+, Safari?
    // Target should not be a text node (#504, #13143)
    if ( event.target.nodeType === 3 ) {
      event.target = event.target.parentNode;
    }

    // Support: IE<9
    // For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
    event.metaKey = !!event.metaKey;

    return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
  },

  // Includes some event props shared by KeyEvent and MouseEvent
  props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

  fixHooks: {},

  keyHooks: {
    props: "char charCode key keyCode".split(" "),
    filter: function( event, original ) {

      // Add which for key events
      if ( event.which == null ) {
        event.which = original.charCode != null ? original.charCode : original.keyCode;
      }

      return event;
    }
  },

  mouseHooks: {
    props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
    filter: function( event, original ) {
      var body, eventDoc, doc,
        button = original.button,
        fromElement = original.fromElement;

      // Calculate pageX/Y if missing and clientX/Y available
      if ( event.pageX == null && original.clientX != null ) {
        eventDoc = event.target.ownerDocument || document;
        doc = eventDoc.documentElement;
        body = eventDoc.body;

        event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
        event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
      }

      // Add relatedTarget, if necessary
      if ( !event.relatedTarget && fromElement ) {
        event.relatedTarget = fromElement === event.target ? original.toElement : fromElement;
      }

      // Add which for click: 1 === left; 2 === middle; 3 === right
      // Note: button is not normalized, so don't use it
      if ( !event.which && button !== undefined ) {
        event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
      }

      return event;
    }
  },

  special: {
    load: {
      // Prevent triggered image.load events from bubbling to window.load
      noBubble: true
    },
    click: {
      // For checkbox, fire native event so checked state will be right
      trigger: function() {
        if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
          this.click();
          return false;
        }
      }
    },
    focus: {
      // Fire native event if possible so blur/focus sequence is correct
      trigger: function() {
        if ( this !== document.activeElement && this.focus ) {
          try {
            this.focus();
            return false;
          } catch ( e ) {
            // Support: IE<9
            // If we error on focus to hidden element (#1486, #12518),
            // let .trigger() run the handlers
          }
        }
      },
      delegateType: "focusin"
    },
    blur: {
      trigger: function() {
        if ( this === document.activeElement && this.blur ) {
          this.blur();
          return false;
        }
      },
      delegateType: "focusout"
    },

    beforeunload: {
      postDispatch: function( event ) {

        // Even when returnValue equals to undefined Firefox will still show alert
        if ( event.result !== undefined ) {
          event.originalEvent.returnValue = event.result;
        }
      }
    }
  },

  simulate: function( type, elem, event, bubble ) {
    // Piggyback on a donor event to simulate a different one.
    // Fake originalEvent to avoid donor's stopPropagation, but if the
    // simulated event prevents default then we do the same on the donor.
    var e = jQuery.extend(
      new jQuery.Event(),
      event,
      { type: type,
        isSimulated: true,
        originalEvent: {}
      }
    );
    if ( bubble ) {
      jQuery.event.trigger( e, null, elem );
    } else {
      jQuery.event.dispatch.call( elem, e );
    }
    if ( e.isDefaultPrevented() ) {
      event.preventDefault();
    }
  }
};

jQuery.removeEvent = document.removeEventListener ?
  function( elem, type, handle ) {
    if ( elem.removeEventListener ) {
      elem.removeEventListener( type, handle, false );
    }
  } :
  function( elem, type, handle ) {
    var name = "on" + type;

    if ( elem.detachEvent ) {

      // #8545, #7054, preventing memory leaks for custom events in IE6-8
      // detachEvent needed property on element, by name of that event, to properly expose it to GC
      if ( typeof elem[ name ] === core_strundefined ) {
        elem[ name ] = null;
      }

      elem.detachEvent( name, handle );
    }
  };

jQuery.Event = function( src, props ) {
  // Allow instantiation without the 'new' keyword
  if ( !(this instanceof jQuery.Event) ) {
    return new jQuery.Event( src, props );
  }

  // Event object
  if ( src && src.type ) {
    this.originalEvent = src;
    this.type = src.type;

    // Events bubbling up the document may have been marked as prevented
    // by a handler lower down the tree; reflect the correct value.
    this.isDefaultPrevented = ( src.defaultPrevented || src.returnValue === false ||
      src.getPreventDefault && src.getPreventDefault() ) ? returnTrue : returnFalse;

  // Event type
  } else {
    this.type = src;
  }

  // Put explicitly provided properties onto the event object
  if ( props ) {
    jQuery.extend( this, props );
  }

  // Create a timestamp if incoming event doesn't have one
  this.timeStamp = src && src.timeStamp || jQuery.now();

  // Mark it as fixed
  this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
  isDefaultPrevented: returnFalse,
  isPropagationStopped: returnFalse,
  isImmediatePropagationStopped: returnFalse,

  preventDefault: function() {
    var e = this.originalEvent;

    this.isDefaultPrevented = returnTrue;
    if ( !e ) {
      return;
    }

    // If preventDefault exists, run it on the original event
    if ( e.preventDefault ) {
      e.preventDefault();

    // Support: IE
    // Otherwise set the returnValue property of the original event to false
    } else {
      e.returnValue = false;
    }
  },
  stopPropagation: function() {
    var e = this.originalEvent;

    this.isPropagationStopped = returnTrue;
    if ( !e ) {
      return;
    }
    // If stopPropagation exists, run it on the original event
    if ( e.stopPropagation ) {
      e.stopPropagation();
    }

    // Support: IE
    // Set the cancelBubble property of the original event to true
    e.cancelBubble = true;
  },
  stopImmediatePropagation: function() {
    this.isImmediatePropagationStopped = returnTrue;
    this.stopPropagation();
  }
};

// Create mouseenter/leave events using mouseover/out and event-time checks
jQuery.each({
  mouseenter: "mouseover",
  mouseleave: "mouseout"
}, function( orig, fix ) {
  jQuery.event.special[ orig ] = {
    delegateType: fix,
    bindType: fix,

    handle: function( event ) {
      var ret,
        target = this,
        related = event.relatedTarget,
        handleObj = event.handleObj;

      // For mousenter/leave call the handler if related is outside the target.
      // NB: No relatedTarget if the mouse left/entered the browser window
      if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
        event.type = handleObj.origType;
        ret = handleObj.handler.apply( this, arguments );
        event.type = fix;
      }
      return ret;
    }
  };
});

// IE submit delegation
if ( !jQuery.support.submitBubbles ) {

  jQuery.event.special.submit = {
    setup: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Lazy-add a submit handler when a descendant form may potentially be submitted
      jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
        // Node name check avoids a VML-related crash in IE (#9807)
        var elem = e.target,
          form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ? elem.form : undefined;
        if ( form && !jQuery._data( form, "submitBubbles" ) ) {
          jQuery.event.add( form, "submit._submit", function( event ) {
            event._submit_bubble = true;
          });
          jQuery._data( form, "submitBubbles", true );
        }
      });
      // return undefined since we don't need an event listener
    },

    postDispatch: function( event ) {
      // If form was submitted by the user, bubble the event up the tree
      if ( event._submit_bubble ) {
        delete event._submit_bubble;
        if ( this.parentNode && !event.isTrigger ) {
          jQuery.event.simulate( "submit", this.parentNode, event, true );
        }
      }
    },

    teardown: function() {
      // Only need this for delegated form submit events
      if ( jQuery.nodeName( this, "form" ) ) {
        return false;
      }

      // Remove delegated handlers; cleanData eventually reaps submit handlers attached above
      jQuery.event.remove( this, "._submit" );
    }
  };
}

// IE change delegation and checkbox/radio fix
if ( !jQuery.support.changeBubbles ) {

  jQuery.event.special.change = {

    setup: function() {

      if ( rformElems.test( this.nodeName ) ) {
        // IE doesn't fire change on a check/radio until blur; trigger it on click
        // after a propertychange. Eat the blur-change in special.change.handle.
        // This still fires onchange a second time for check/radio after blur.
        if ( this.type === "checkbox" || this.type === "radio" ) {
          jQuery.event.add( this, "propertychange._change", function( event ) {
            if ( event.originalEvent.propertyName === "checked" ) {
              this._just_changed = true;
            }
          });
          jQuery.event.add( this, "click._change", function( event ) {
            if ( this._just_changed && !event.isTrigger ) {
              this._just_changed = false;
            }
            // Allow triggered, simulated change events (#11500)
            jQuery.event.simulate( "change", this, event, true );
          });
        }
        return false;
      }
      // Delegated event; lazy-add a change handler on descendant inputs
      jQuery.event.add( this, "beforeactivate._change", function( e ) {
        var elem = e.target;

        if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "changeBubbles" ) ) {
          jQuery.event.add( elem, "change._change", function( event ) {
            if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
              jQuery.event.simulate( "change", this.parentNode, event, true );
            }
          });
          jQuery._data( elem, "changeBubbles", true );
        }
      });
    },

    handle: function( event ) {
      var elem = event.target;

      // Swallow native change events from checkbox/radio, we already triggered them above
      if ( this !== elem || event.isSimulated || event.isTrigger || (elem.type !== "radio" && elem.type !== "checkbox") ) {
        return event.handleObj.handler.apply( this, arguments );
      }
    },

    teardown: function() {
      jQuery.event.remove( this, "._change" );

      return !rformElems.test( this.nodeName );
    }
  };
}

// Create "bubbling" focus and blur events
if ( !jQuery.support.focusinBubbles ) {
  jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

    // Attach a single capturing handler while someone wants focusin/focusout
    var attaches = 0,
      handler = function( event ) {
        jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
      };

    jQuery.event.special[ fix ] = {
      setup: function() {
        if ( attaches++ === 0 ) {
          document.addEventListener( orig, handler, true );
        }
      },
      teardown: function() {
        if ( --attaches === 0 ) {
          document.removeEventListener( orig, handler, true );
        }
      }
    };
  });
}

jQuery.fn.extend({

  on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
    var type, origFn;

    // Types can be a map of types/handlers
    if ( typeof types === "object" ) {
      // ( types-Object, selector, data )
      if ( typeof selector !== "string" ) {
        // ( types-Object, data )
        data = data || selector;
        selector = undefined;
      }
      for ( type in types ) {
        this.on( type, selector, data, types[ type ], one );
      }
      return this;
    }

    if ( data == null && fn == null ) {
      // ( types, fn )
      fn = selector;
      data = selector = undefined;
    } else if ( fn == null ) {
      if ( typeof selector === "string" ) {
        // ( types, selector, fn )
        fn = data;
        data = undefined;
      } else {
        // ( types, data, fn )
        fn = data;
        data = selector;
        selector = undefined;
      }
    }
    if ( fn === false ) {
      fn = returnFalse;
    } else if ( !fn ) {
      return this;
    }

    if ( one === 1 ) {
      origFn = fn;
      fn = function( event ) {
        // Can use an empty set, since event contains the info
        jQuery().off( event );
        return origFn.apply( this, arguments );
      };
      // Use same guid so caller can remove using origFn
      fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
    }
    return this.each( function() {
      jQuery.event.add( this, types, fn, data, selector );
    });
  },
  one: function( types, selector, data, fn ) {
    return this.on( types, selector, data, fn, 1 );
  },
  off: function( types, selector, fn ) {
    var handleObj, type;
    if ( types && types.preventDefault && types.handleObj ) {
      // ( event )  dispatched jQuery.Event
      handleObj = types.handleObj;
      jQuery( types.delegateTarget ).off(
        handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
        handleObj.selector,
        handleObj.handler
      );
      return this;
    }
    if ( typeof types === "object" ) {
      // ( types-object [, selector] )
      for ( type in types ) {
        this.off( type, selector, types[ type ] );
      }
      return this;
    }
    if ( selector === false || typeof selector === "function" ) {
      // ( types [, fn] )
      fn = selector;
      selector = undefined;
    }
    if ( fn === false ) {
      fn = returnFalse;
    }
    return this.each(function() {
      jQuery.event.remove( this, types, fn, selector );
    });
  },

  bind: function( types, data, fn ) {
    return this.on( types, null, data, fn );
  },
  unbind: function( types, fn ) {
    return this.off( types, null, fn );
  },

  delegate: function( selector, types, data, fn ) {
    return this.on( types, selector, data, fn );
  },
  undelegate: function( selector, types, fn ) {
    // ( namespace ) or ( selector, types [, fn] )
    return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
  },

  trigger: function( type, data ) {
    return this.each(function() {
      jQuery.event.trigger( type, data, this );
    });
  },
  triggerHandler: function( type, data ) {
    var elem = this[0];
    if ( elem ) {
      return jQuery.event.trigger( type, data, elem, true );
    }
  }
});
/*!
 * Sizzle CSS Selector Engine
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license
 * http://sizzlejs.com/
 */
(function( window, undefined ) {

var i,
  cachedruns,
  Expr,
  getText,
  isXML,
  compile,
  hasDuplicate,
  outermostContext,

  // Local document vars
  setDocument,
  document,
  docElem,
  documentIsXML,
  rbuggyQSA,
  rbuggyMatches,
  matches,
  contains,
  sortOrder,

  // Instance-specific data
  expando = "sizzle" + -(new Date()),
  preferredDoc = window.document,
  support = {},
  dirruns = 0,
  done = 0,
  classCache = createCache(),
  tokenCache = createCache(),
  compilerCache = createCache(),

  // General-purpose constants
  strundefined = typeof undefined,
  MAX_NEGATIVE = 1 << 31,

  // Array methods
  arr = [],
  pop = arr.pop,
  push = arr.push,
  slice = arr.slice,
  // Use a stripped-down indexOf if we can't use a native one
  indexOf = arr.indexOf || function( elem ) {
    var i = 0,
      len = this.length;
    for ( ; i < len; i++ ) {
      if ( this[i] === elem ) {
        return i;
      }
    }
    return -1;
  },


  // Regular expressions

  // Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
  whitespace = "[\\x20\\t\\r\\n\\f]",
  // http://www.w3.org/TR/css3-syntax/#characters
  characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

  // Loosely modeled on CSS identifier characters
  // An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
  // Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
  identifier = characterEncoding.replace( "w", "w#" ),

  // Acceptable operators http://www.w3.org/TR/selectors/#attribute-selectors
  operators = "([*^$|!~]?=)",
  attributes = "\\[" + whitespace + "*(" + characterEncoding + ")" + whitespace +
    "*(?:" + operators + whitespace + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + identifier + ")|)|)" + whitespace + "*\\]",

  // Prefer arguments quoted,
  //   then not containing pseudos/brackets,
  //   then attribute selectors/non-parenthetical expressions,
  //   then anything else
  // These preferences are here to reduce the number of selectors
  //   needing tokenize in the PSEUDO preFilter
  pseudos = ":(" + characterEncoding + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + attributes.replace( 3, 8 ) + ")*)|.*)\\)|)",

  // Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
  rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

  rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
  rcombinators = new RegExp( "^" + whitespace + "*([\\x20\\t\\r\\n\\f>+~])" + whitespace + "*" ),
  rpseudo = new RegExp( pseudos ),
  ridentifier = new RegExp( "^" + identifier + "$" ),

  matchExpr = {
    "ID": new RegExp( "^#(" + characterEncoding + ")" ),
    "CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
    "NAME": new RegExp( "^\\[name=['\"]?(" + characterEncoding + ")['\"]?\\]" ),
    "TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
    "ATTR": new RegExp( "^" + attributes ),
    "PSEUDO": new RegExp( "^" + pseudos ),
    "CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
      "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
      "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
    // For use in libraries implementing .is()
    // We use this for POS matching in `select`
    "needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
      whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
  },

  rsibling = /[\x20\t\r\n\f]*[+~]/,

  rnative = /^[^{]+\{\s*\[native code/,

  // Easily-parseable/retrievable ID or TAG or CLASS selectors
  rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

  rinputs = /^(?:input|select|textarea|button)$/i,
  rheader = /^h\d$/i,

  rescape = /'|\\/g,
  rattributeQuotes = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,

  // CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
  runescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
  funescape = function( _, escaped ) {
    var high = "0x" + escaped - 0x10000;
    // NaN means non-codepoint
    return high !== high ?
      escaped :
      // BMP codepoint
      high < 0 ?
        String.fromCharCode( high + 0x10000 ) :
        // Supplemental Plane codepoint (surrogate pair)
        String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
  };

// Use a stripped-down slice if we can't use a native one
try {
  slice.call( preferredDoc.documentElement.childNodes, 0 )[0].nodeType;
} catch ( e ) {
  slice = function( i ) {
    var elem,
      results = [];
    while ( (elem = this[i++]) ) {
      results.push( elem );
    }
    return results;
  };
}

/**
 * For feature detection
 * @param {Function} fn The function to test for native support
 */
function isNative( fn ) {
  return rnative.test( fn + "" );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *  property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *  deleting the oldest entry
 */
function createCache() {
  var cache,
    keys = [];

  return (cache = function( key, value ) {
    // Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
    if ( keys.push( key += " " ) > Expr.cacheLength ) {
      // Only keep the most recent entries
      delete cache[ keys.shift() ];
    }
    return (cache[ key ] = value);
  });
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
  fn[ expando ] = true;
  return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
  var div = document.createElement("div");

  try {
    return fn( div );
  } catch (e) {
    return false;
  } finally {
    // release memory in IE
    div = null;
  }
}

function Sizzle( selector, context, results, seed ) {
  var match, elem, m, nodeType,
    // QSA vars
    i, groups, old, nid, newContext, newSelector;

  if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
    setDocument( context );
  }

  context = context || document;
  results = results || [];

  if ( !selector || typeof selector !== "string" ) {
    return results;
  }

  if ( (nodeType = context.nodeType) !== 1 && nodeType !== 9 ) {
    return [];
  }

  if ( !documentIsXML && !seed ) {

    // Shortcuts
    if ( (match = rquickExpr.exec( selector )) ) {
      // Speed-up: Sizzle("#ID")
      if ( (m = match[1]) ) {
        if ( nodeType === 9 ) {
          elem = context.getElementById( m );
          // Check parentNode to catch when Blackberry 4.6 returns
          // nodes that are no longer in the document #6963
          if ( elem && elem.parentNode ) {
            // Handle the case where IE, Opera, and Webkit return items
            // by name instead of ID
            if ( elem.id === m ) {
              results.push( elem );
              return results;
            }
          } else {
            return results;
          }
        } else {
          // Context is not a document
          if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
            contains( context, elem ) && elem.id === m ) {
            results.push( elem );
            return results;
          }
        }

      // Speed-up: Sizzle("TAG")
      } else if ( match[2] ) {
        push.apply( results, slice.call(context.getElementsByTagName( selector ), 0) );
        return results;

      // Speed-up: Sizzle(".CLASS")
      } else if ( (m = match[3]) && support.getByClassName && context.getElementsByClassName ) {
        push.apply( results, slice.call(context.getElementsByClassName( m ), 0) );
        return results;
      }
    }

    // QSA path
    if ( support.qsa && !rbuggyQSA.test(selector) ) {
      old = true;
      nid = expando;
      newContext = context;
      newSelector = nodeType === 9 && selector;

      // qSA works strangely on Element-rooted queries
      // We can work around this by specifying an extra ID on the root
      // and working up from there (Thanks to Andrew Dupont for the technique)
      // IE 8 doesn't work on object elements
      if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
        groups = tokenize( selector );

        if ( (old = context.getAttribute("id")) ) {
          nid = old.replace( rescape, "\\$&" );
        } else {
          context.setAttribute( "id", nid );
        }
        nid = "[id='" + nid + "'] ";

        i = groups.length;
        while ( i-- ) {
          groups[i] = nid + toSelector( groups[i] );
        }
        newContext = rsibling.test( selector ) && context.parentNode || context;
        newSelector = groups.join(",");
      }

      if ( newSelector ) {
        try {
          push.apply( results, slice.call( newContext.querySelectorAll(
            newSelector
          ), 0 ) );
          return results;
        } catch(qsaError) {
        } finally {
          if ( !old ) {
            context.removeAttribute("id");
          }
        }
      }
    }
  }

  // All others
  return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Detect xml
 * @param {Element|Object} elem An element or a document
 */
isXML = Sizzle.isXML = function( elem ) {
  // documentElement is verified for cases where it doesn't yet exist
  // (such as loading iframes in IE - #4833)
  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
  return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
  var doc = node ? node.ownerDocument || node : preferredDoc;

  // If no document and documentElement is available, return
  if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
    return document;
  }

  // Set our document
  document = doc;
  docElem = doc.documentElement;

  // Support tests
  documentIsXML = isXML( doc );

  // Check if getElementsByTagName("*") returns only elements
  support.tagNameNoComments = assert(function( div ) {
    div.appendChild( doc.createComment("") );
    return !div.getElementsByTagName("*").length;
  });

  // Check if attributes should be retrieved by attribute nodes
  support.attributes = assert(function( div ) {
    div.innerHTML = "<select></select>";
    var type = typeof div.lastChild.getAttribute("multiple");
    // IE8 returns a string for some attributes even when not present
    return type !== "boolean" && type !== "string";
  });

  // Check if getElementsByClassName can be trusted
  support.getByClassName = assert(function( div ) {
    // Opera can't find a second classname (in 9.6)
    div.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>";
    if ( !div.getElementsByClassName || !div.getElementsByClassName("e").length ) {
      return false;
    }

    // Safari 3.2 caches class attributes and doesn't catch changes
    div.lastChild.className = "e";
    return div.getElementsByClassName("e").length === 2;
  });

  // Check if getElementById returns elements by name
  // Check if getElementsByName privileges form controls or returns elements by ID
  support.getByName = assert(function( div ) {
    // Inject content
    div.id = expando + 0;
    div.innerHTML = "<a name='" + expando + "'></a><div name='" + expando + "'></div>";
    docElem.insertBefore( div, docElem.firstChild );

    // Test
    var pass = doc.getElementsByName &&
      // buggy browsers will return fewer than the correct 2
      doc.getElementsByName( expando ).length === 2 +
      // buggy browsers will return more than the correct 0
      doc.getElementsByName( expando + 0 ).length;
    support.getIdNotName = !doc.getElementById( expando );

    // Cleanup
    docElem.removeChild( div );

    return pass;
  });

  // IE6/7 return modified attributes
  Expr.attrHandle = assert(function( div ) {
    div.innerHTML = "<a href='#'></a>";
    return div.firstChild && typeof div.firstChild.getAttribute !== strundefined &&
      div.firstChild.getAttribute("href") === "#";
  }) ?
    {} :
    {
      "href": function( elem ) {
        return elem.getAttribute( "href", 2 );
      },
      "type": function( elem ) {
        return elem.getAttribute("type");
      }
    };

  // ID find and filter
  if ( support.getIdNotName ) {
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
        var m = context.getElementById( id );
        // Check parentNode to catch when Blackberry 4.6 returns
        // nodes that are no longer in the document #6963
        return m && m.parentNode ? [m] : [];
      }
    };
    Expr.filter["ID"] = function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        return elem.getAttribute("id") === attrId;
      };
    };
  } else {
    Expr.find["ID"] = function( id, context ) {
      if ( typeof context.getElementById !== strundefined && !documentIsXML ) {
        var m = context.getElementById( id );

        return m ?
          m.id === id || typeof m.getAttributeNode !== strundefined && m.getAttributeNode("id").value === id ?
            [m] :
            undefined :
          [];
      }
    };
    Expr.filter["ID"] =  function( id ) {
      var attrId = id.replace( runescape, funescape );
      return function( elem ) {
        var node = typeof elem.getAttributeNode !== strundefined && elem.getAttributeNode("id");
        return node && node.value === attrId;
      };
    };
  }

  // Tag
  Expr.find["TAG"] = support.tagNameNoComments ?
    function( tag, context ) {
      if ( typeof context.getElementsByTagName !== strundefined ) {
        return context.getElementsByTagName( tag );
      }
    } :
    function( tag, context ) {
      var elem,
        tmp = [],
        i = 0,
        results = context.getElementsByTagName( tag );

      // Filter out possible comments
      if ( tag === "*" ) {
        while ( (elem = results[i++]) ) {
          if ( elem.nodeType === 1 ) {
            tmp.push( elem );
          }
        }

        return tmp;
      }
      return results;
    };

  // Name
  Expr.find["NAME"] = support.getByName && function( tag, context ) {
    if ( typeof context.getElementsByName !== strundefined ) {
      return context.getElementsByName( name );
    }
  };

  // Class
  Expr.find["CLASS"] = support.getByClassName && function( className, context ) {
    if ( typeof context.getElementsByClassName !== strundefined && !documentIsXML ) {
      return context.getElementsByClassName( className );
    }
  };

  // QSA and matchesSelector support

  // matchesSelector(:active) reports false when true (IE9/Opera 11.5)
  rbuggyMatches = [];

  // qSa(:focus) reports false when true (Chrome 21),
  // no need to also add to buggyMatches since matches checks buggyQSA
  // A support test would require too much code (would include document ready)
  rbuggyQSA = [ ":focus" ];

  if ( (support.qsa = isNative(doc.querySelectorAll)) ) {
    // Build QSA regex
    // Regex strategy adopted from Diego Perini
    assert(function( div ) {
      // Select is set to empty string on purpose
      // This is to test IE's treatment of not explictly
      // setting a boolean content attribute,
      // since its presence should be enough
      // http://bugs.jquery.com/ticket/12359
      div.innerHTML = "<select><option selected=''></option></select>";

      // IE8 - Some boolean attributes are not treated correctly
      if ( !div.querySelectorAll("[selected]").length ) {
        rbuggyQSA.push( "\\[" + whitespace + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)" );
      }

      // Webkit/Opera - :checked should return selected option elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":checked").length ) {
        rbuggyQSA.push(":checked");
      }
    });

    assert(function( div ) {

      // Opera 10-12/IE8 - ^= $= *= and empty values
      // Should not select anything
      div.innerHTML = "<input type='hidden' i=''/>";
      if ( div.querySelectorAll("[i^='']").length ) {
        rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:\"\"|'')" );
      }

      // FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
      // IE8 throws error here and will not see later tests
      if ( !div.querySelectorAll(":enabled").length ) {
        rbuggyQSA.push( ":enabled", ":disabled" );
      }

      // Opera 10-11 does not throw on post-comma invalid pseudos
      div.querySelectorAll("*,:x");
      rbuggyQSA.push(",.*:");
    });
  }

  if ( (support.matchesSelector = isNative( (matches = docElem.matchesSelector ||
    docElem.mozMatchesSelector ||
    docElem.webkitMatchesSelector ||
    docElem.oMatchesSelector ||
    docElem.msMatchesSelector) )) ) {

    assert(function( div ) {
      // Check to see if it's possible to do matchesSelector
      // on a disconnected node (IE 9)
      support.disconnectedMatch = matches.call( div, "div" );

      // This should fail with an exception
      // Gecko does not error, returns false instead
      matches.call( div, "[s!='']:x" );
      rbuggyMatches.push( "!=", pseudos );
    });
  }

  rbuggyQSA = new RegExp( rbuggyQSA.join("|") );
  rbuggyMatches = new RegExp( rbuggyMatches.join("|") );

  // Element contains another
  // Purposefully does not implement inclusive descendent
  // As in, an element does not contain itself
  contains = isNative(docElem.contains) || docElem.compareDocumentPosition ?
    function( a, b ) {
      var adown = a.nodeType === 9 ? a.documentElement : a,
        bup = b && b.parentNode;
      return a === bup || !!( bup && bup.nodeType === 1 && (
        adown.contains ?
          adown.contains( bup ) :
          a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
      ));
    } :
    function( a, b ) {
      if ( b ) {
        while ( (b = b.parentNode) ) {
          if ( b === a ) {
            return true;
          }
        }
      }
      return false;
    };

  // Document order sorting
  sortOrder = docElem.compareDocumentPosition ?
  function( a, b ) {
    var compare;

    if ( a === b ) {
      hasDuplicate = true;
      return 0;
    }

    if ( (compare = b.compareDocumentPosition && a.compareDocumentPosition && a.compareDocumentPosition( b )) ) {
      if ( compare & 1 || a.parentNode && a.parentNode.nodeType === 11 ) {
        if ( a === doc || contains( preferredDoc, a ) ) {
          return -1;
        }
        if ( b === doc || contains( preferredDoc, b ) ) {
          return 1;
        }
        return 0;
      }
      return compare & 4 ? -1 : 1;
    }

    return a.compareDocumentPosition ? -1 : 1;
  } :
  function( a, b ) {
    var cur,
      i = 0,
      aup = a.parentNode,
      bup = b.parentNode,
      ap = [ a ],
      bp = [ b ];

    // Exit early if the nodes are identical
    if ( a === b ) {
      hasDuplicate = true;
      return 0;

    // Parentless nodes are either documents or disconnected
    } else if ( !aup || !bup ) {
      return a === doc ? -1 :
        b === doc ? 1 :
        aup ? -1 :
        bup ? 1 :
        0;

    // If the nodes are siblings, we can do a quick check
    } else if ( aup === bup ) {
      return siblingCheck( a, b );
    }

    // Otherwise we need full lists of their ancestors for comparison
    cur = a;
    while ( (cur = cur.parentNode) ) {
      ap.unshift( cur );
    }
    cur = b;
    while ( (cur = cur.parentNode) ) {
      bp.unshift( cur );
    }

    // Walk down the tree looking for a discrepancy
    while ( ap[i] === bp[i] ) {
      i++;
    }

    return i ?
      // Do a sibling check if the nodes have a common ancestor
      siblingCheck( ap[i], bp[i] ) :

      // Otherwise nodes in our document sort first
      ap[i] === preferredDoc ? -1 :
      bp[i] === preferredDoc ? 1 :
      0;
  };

  // Always assume the presence of duplicates if sort doesn't
  // pass them to our comparison function (as in Google Chrome).
  hasDuplicate = false;
  [0, 0].sort( sortOrder );
  support.detectDuplicates = hasDuplicate;

  return document;
};

Sizzle.matches = function( expr, elements ) {
  return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  // Make sure that attribute selectors are quoted
  expr = expr.replace( rattributeQuotes, "='$1']" );

  // rbuggyQSA always contains :focus, so no need for an existence check
  if ( support.matchesSelector && !documentIsXML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && !rbuggyQSA.test(expr) ) {
    try {
      var ret = matches.call( elem, expr );

      // IE 9's matchesSelector returns false on disconnected nodes
      if ( ret || support.disconnectedMatch ||
          // As well, disconnected nodes are said to be in a document
          // fragment in IE 9
          elem.document && elem.document.nodeType !== 11 ) {
        return ret;
      }
    } catch(e) {}
  }

  return Sizzle( expr, document, null, [elem] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
  // Set document vars if needed
  if ( ( context.ownerDocument || context ) !== document ) {
    setDocument( context );
  }
  return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
  var val;

  // Set document vars if needed
  if ( ( elem.ownerDocument || elem ) !== document ) {
    setDocument( elem );
  }

  if ( !documentIsXML ) {
    name = name.toLowerCase();
  }
  if ( (val = Expr.attrHandle[ name ]) ) {
    return val( elem );
  }
  if ( documentIsXML || support.attributes ) {
    return elem.getAttribute( name );
  }
  return ( (val = elem.getAttributeNode( name )) || elem.getAttribute( name ) ) && elem[ name ] === true ?
    name :
    val && val.specified ? val.value : null;
};

Sizzle.error = function( msg ) {
  throw new Error( "Syntax error, unrecognized expression: " + msg );
};

// Document sorting and removing duplicates
Sizzle.uniqueSort = function( results ) {
  var elem,
    duplicates = [],
    i = 1,
    j = 0;

  // Unless we *know* we can detect duplicates, assume their presence
  hasDuplicate = !support.detectDuplicates;
  results.sort( sortOrder );

  if ( hasDuplicate ) {
    for ( ; (elem = results[i]); i++ ) {
      if ( elem === results[ i - 1 ] ) {
        j = duplicates.push( i );
      }
    }
    while ( j-- ) {
      results.splice( duplicates[ j ], 1 );
    }
  }

  return results;
};

function siblingCheck( a, b ) {
  var cur = b && a,
    diff = cur && ( ~b.sourceIndex || MAX_NEGATIVE ) - ( ~a.sourceIndex || MAX_NEGATIVE );

  // Use IE sourceIndex if available on both nodes
  if ( diff ) {
    return diff;
  }

  // Check if b follows a
  if ( cur ) {
    while ( (cur = cur.nextSibling) ) {
      if ( cur === b ) {
        return -1;
      }
    }
  }

  return a ? 1 : -1;
}

// Returns a function to use in pseudos for input types
function createInputPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return name === "input" && elem.type === type;
  };
}

// Returns a function to use in pseudos for buttons
function createButtonPseudo( type ) {
  return function( elem ) {
    var name = elem.nodeName.toLowerCase();
    return (name === "input" || name === "button") && elem.type === type;
  };
}

// Returns a function to use in pseudos for positionals
function createPositionalPseudo( fn ) {
  return markFunction(function( argument ) {
    argument = +argument;
    return markFunction(function( seed, matches ) {
      var j,
        matchIndexes = fn( [], seed.length, argument ),
        i = matchIndexes.length;

      // Match elements found at the specified indexes
      while ( i-- ) {
        if ( seed[ (j = matchIndexes[i]) ] ) {
          seed[j] = !(matches[j] = seed[j]);
        }
      }
    });
  });
}

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
  var node,
    ret = "",
    i = 0,
    nodeType = elem.nodeType;

  if ( !nodeType ) {
    // If no nodeType, this is expected to be an array
    for ( ; (node = elem[i]); i++ ) {
      // Do not traverse comment nodes
      ret += getText( node );
    }
  } else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
    // Use textContent for elements
    // innerText usage removed for consistency of new lines (see #11153)
    if ( typeof elem.textContent === "string" ) {
      return elem.textContent;
    } else {
      // Traverse its children
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        ret += getText( elem );
      }
    }
  } else if ( nodeType === 3 || nodeType === 4 ) {
    return elem.nodeValue;
  }
  // Do not include comment or processing instruction nodes

  return ret;
};

Expr = Sizzle.selectors = {

  // Can be adjusted by the user
  cacheLength: 50,

  createPseudo: markFunction,

  match: matchExpr,

  find: {},

  relative: {
    ">": { dir: "parentNode", first: true },
    " ": { dir: "parentNode" },
    "+": { dir: "previousSibling", first: true },
    "~": { dir: "previousSibling" }
  },

  preFilter: {
    "ATTR": function( match ) {
      match[1] = match[1].replace( runescape, funescape );

      // Move the given value to match[3] whether quoted or unquoted
      match[3] = ( match[4] || match[5] || "" ).replace( runescape, funescape );

      if ( match[2] === "~=" ) {
        match[3] = " " + match[3] + " ";
      }

      return match.slice( 0, 4 );
    },

    "CHILD": function( match ) {
      /* matches from matchExpr["CHILD"]
        1 type (only|nth|...)
        2 what (child|of-type)
        3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
        4 xn-component of xn+y argument ([+-]?\d*n|)
        5 sign of xn-component
        6 x of xn-component
        7 sign of y-component
        8 y of y-component
      */
      match[1] = match[1].toLowerCase();

      if ( match[1].slice( 0, 3 ) === "nth" ) {
        // nth-* requires argument
        if ( !match[3] ) {
          Sizzle.error( match[0] );
        }

        // numeric x and y parameters for Expr.filter.CHILD
        // remember that false/true cast respectively to 0/1
        match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
        match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

      // other types prohibit arguments
      } else if ( match[3] ) {
        Sizzle.error( match[0] );
      }

      return match;
    },

    "PSEUDO": function( match ) {
      var excess,
        unquoted = !match[5] && match[2];

      if ( matchExpr["CHILD"].test( match[0] ) ) {
        return null;
      }

      // Accept quoted arguments as-is
      if ( match[4] ) {
        match[2] = match[4];

      // Strip excess characters from unquoted arguments
      } else if ( unquoted && rpseudo.test( unquoted ) &&
        // Get excess from tokenize (recursively)
        (excess = tokenize( unquoted, true )) &&
        // advance to the next closing parenthesis
        (excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

        // excess is a negative index
        match[0] = match[0].slice( 0, excess );
        match[2] = unquoted.slice( 0, excess );
      }

      // Return only captures needed by the pseudo filter method (type and argument)
      return match.slice( 0, 3 );
    }
  },

  filter: {

    "TAG": function( nodeName ) {
      if ( nodeName === "*" ) {
        return function() { return true; };
      }

      nodeName = nodeName.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
      };
    },

    "CLASS": function( className ) {
      var pattern = classCache[ className + " " ];

      return pattern ||
        (pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
        classCache( className, function( elem ) {
          return pattern.test( elem.className || (typeof elem.getAttribute !== strundefined && elem.getAttribute("class")) || "" );
        });
    },

    "ATTR": function( name, operator, check ) {
      return function( elem ) {
        var result = Sizzle.attr( elem, name );

        if ( result == null ) {
          return operator === "!=";
        }
        if ( !operator ) {
          return true;
        }

        result += "";

        return operator === "=" ? result === check :
          operator === "!=" ? result !== check :
          operator === "^=" ? check && result.indexOf( check ) === 0 :
          operator === "*=" ? check && result.indexOf( check ) > -1 :
          operator === "$=" ? check && result.slice( -check.length ) === check :
          operator === "~=" ? ( " " + result + " " ).indexOf( check ) > -1 :
          operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
          false;
      };
    },

    "CHILD": function( type, what, argument, first, last ) {
      var simple = type.slice( 0, 3 ) !== "nth",
        forward = type.slice( -4 ) !== "last",
        ofType = what === "of-type";

      return first === 1 && last === 0 ?

        // Shortcut for :nth-*(n)
        function( elem ) {
          return !!elem.parentNode;
        } :

        function( elem, context, xml ) {
          var cache, outerCache, node, diff, nodeIndex, start,
            dir = simple !== forward ? "nextSibling" : "previousSibling",
            parent = elem.parentNode,
            name = ofType && elem.nodeName.toLowerCase(),
            useCache = !xml && !ofType;

          if ( parent ) {

            // :(first|last|only)-(child|of-type)
            if ( simple ) {
              while ( dir ) {
                node = elem;
                while ( (node = node[ dir ]) ) {
                  if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
                    return false;
                  }
                }
                // Reverse direction for :only-* (if we haven't yet done so)
                start = dir = type === "only" && !start && "nextSibling";
              }
              return true;
            }

            start = [ forward ? parent.firstChild : parent.lastChild ];

            // non-xml :nth-child(...) stores cache data on `parent`
            if ( forward && useCache ) {
              // Seek `elem` from a previously-cached index
              outerCache = parent[ expando ] || (parent[ expando ] = {});
              cache = outerCache[ type ] || [];
              nodeIndex = cache[0] === dirruns && cache[1];
              diff = cache[0] === dirruns && cache[2];
              node = nodeIndex && parent.childNodes[ nodeIndex ];

              while ( (node = ++nodeIndex && node && node[ dir ] ||

                // Fallback to seeking `elem` from the start
                (diff = nodeIndex = 0) || start.pop()) ) {

                // When found, cache indexes on `parent` and break
                if ( node.nodeType === 1 && ++diff && node === elem ) {
                  outerCache[ type ] = [ dirruns, nodeIndex, diff ];
                  break;
                }
              }

            // Use previously-cached element index if available
            } else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
              diff = cache[1];

            // xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
            } else {
              // Use the same loop as above to seek `elem` from the start
              while ( (node = ++nodeIndex && node && node[ dir ] ||
                (diff = nodeIndex = 0) || start.pop()) ) {

                if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
                  // Cache the index of each encountered element
                  if ( useCache ) {
                    (node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
                  }

                  if ( node === elem ) {
                    break;
                  }
                }
              }
            }

            // Incorporate the offset, then check against cycle size
            diff -= last;
            return diff === first || ( diff % first === 0 && diff / first >= 0 );
          }
        };
    },

    "PSEUDO": function( pseudo, argument ) {
      // pseudo-class names are case-insensitive
      // http://www.w3.org/TR/selectors/#pseudo-classes
      // Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
      // Remember that setFilters inherits from pseudos
      var args,
        fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
          Sizzle.error( "unsupported pseudo: " + pseudo );

      // The user may use createPseudo to indicate that
      // arguments are needed to create the filter function
      // just as Sizzle does
      if ( fn[ expando ] ) {
        return fn( argument );
      }

      // But maintain support for old signatures
      if ( fn.length > 1 ) {
        args = [ pseudo, pseudo, "", argument ];
        return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
          markFunction(function( seed, matches ) {
            var idx,
              matched = fn( seed, argument ),
              i = matched.length;
            while ( i-- ) {
              idx = indexOf.call( seed, matched[i] );
              seed[ idx ] = !( matches[ idx ] = matched[i] );
            }
          }) :
          function( elem ) {
            return fn( elem, 0, args );
          };
      }

      return fn;
    }
  },

  pseudos: {
    // Potentially complex pseudos
    "not": markFunction(function( selector ) {
      // Trim the selector passed to compile
      // to avoid treating leading and trailing
      // spaces as combinators
      var input = [],
        results = [],
        matcher = compile( selector.replace( rtrim, "$1" ) );

      return matcher[ expando ] ?
        markFunction(function( seed, matches, context, xml ) {
          var elem,
            unmatched = matcher( seed, null, xml, [] ),
            i = seed.length;

          // Match elements unmatched by `matcher`
          while ( i-- ) {
            if ( (elem = unmatched[i]) ) {
              seed[i] = !(matches[i] = elem);
            }
          }
        }) :
        function( elem, context, xml ) {
          input[0] = elem;
          matcher( input, null, xml, results );
          return !results.pop();
        };
    }),

    "has": markFunction(function( selector ) {
      return function( elem ) {
        return Sizzle( selector, elem ).length > 0;
      };
    }),

    "contains": markFunction(function( text ) {
      return function( elem ) {
        return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
      };
    }),

    // "Whether an element is represented by a :lang() selector
    // is based solely on the element's language value
    // being equal to the identifier C,
    // or beginning with the identifier C immediately followed by "-".
    // The matching of C against the element's language value is performed case-insensitively.
    // The identifier C does not have to be a valid language name."
    // http://www.w3.org/TR/selectors/#lang-pseudo
    "lang": markFunction( function( lang ) {
      // lang value must be a valid identifider
      if ( !ridentifier.test(lang || "") ) {
        Sizzle.error( "unsupported lang: " + lang );
      }
      lang = lang.replace( runescape, funescape ).toLowerCase();
      return function( elem ) {
        var elemLang;
        do {
          if ( (elemLang = documentIsXML ?
            elem.getAttribute("xml:lang") || elem.getAttribute("lang") :
            elem.lang) ) {

            elemLang = elemLang.toLowerCase();
            return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
          }
        } while ( (elem = elem.parentNode) && elem.nodeType === 1 );
        return false;
      };
    }),

    // Miscellaneous
    "target": function( elem ) {
      var hash = window.location && window.location.hash;
      return hash && hash.slice( 1 ) === elem.id;
    },

    "root": function( elem ) {
      return elem === docElem;
    },

    "focus": function( elem ) {
      return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
    },

    // Boolean properties
    "enabled": function( elem ) {
      return elem.disabled === false;
    },

    "disabled": function( elem ) {
      return elem.disabled === true;
    },

    "checked": function( elem ) {
      // In CSS3, :checked should return both checked and selected elements
      // http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
      var nodeName = elem.nodeName.toLowerCase();
      return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
    },

    "selected": function( elem ) {
      // Accessing this property makes selected-by-default
      // options in Safari work properly
      if ( elem.parentNode ) {
        elem.parentNode.selectedIndex;
      }

      return elem.selected === true;
    },

    // Contents
    "empty": function( elem ) {
      // http://www.w3.org/TR/selectors/#empty-pseudo
      // :empty is only affected by element nodes and content nodes(including text(3), cdata(4)),
      //   not comment, processing instructions, or others
      // Thanks to Diego Perini for the nodeName shortcut
      //   Greater than "@" means alpha characters (specifically not starting with "#" or "?")
      for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
        if ( elem.nodeName > "@" || elem.nodeType === 3 || elem.nodeType === 4 ) {
          return false;
        }
      }
      return true;
    },

    "parent": function( elem ) {
      return !Expr.pseudos["empty"]( elem );
    },

    // Element/input types
    "header": function( elem ) {
      return rheader.test( elem.nodeName );
    },

    "input": function( elem ) {
      return rinputs.test( elem.nodeName );
    },

    "button": function( elem ) {
      var name = elem.nodeName.toLowerCase();
      return name === "input" && elem.type === "button" || name === "button";
    },

    "text": function( elem ) {
      var attr;
      // IE6 and 7 will map elem.type to 'text' for new HTML5 types (search, etc)
      // use getAttribute instead to test this case
      return elem.nodeName.toLowerCase() === "input" &&
        elem.type === "text" &&
        ( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === elem.type );
    },

    // Position-in-collection
    "first": createPositionalPseudo(function() {
      return [ 0 ];
    }),

    "last": createPositionalPseudo(function( matchIndexes, length ) {
      return [ length - 1 ];
    }),

    "eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
      return [ argument < 0 ? argument + length : argument ];
    }),

    "even": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 0;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "odd": createPositionalPseudo(function( matchIndexes, length ) {
      var i = 1;
      for ( ; i < length; i += 2 ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; --i >= 0; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    }),

    "gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
      var i = argument < 0 ? argument + length : argument;
      for ( ; ++i < length; ) {
        matchIndexes.push( i );
      }
      return matchIndexes;
    })
  }
};

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
  Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
  Expr.pseudos[ i ] = createButtonPseudo( i );
}

function tokenize( selector, parseOnly ) {
  var matched, match, tokens, type,
    soFar, groups, preFilters,
    cached = tokenCache[ selector + " " ];

  if ( cached ) {
    return parseOnly ? 0 : cached.slice( 0 );
  }

  soFar = selector;
  groups = [];
  preFilters = Expr.preFilter;

  while ( soFar ) {

    // Comma and first run
    if ( !matched || (match = rcomma.exec( soFar )) ) {
      if ( match ) {
        // Don't consume trailing commas as valid
        soFar = soFar.slice( match[0].length ) || soFar;
      }
      groups.push( tokens = [] );
    }

    matched = false;

    // Combinators
    if ( (match = rcombinators.exec( soFar )) ) {
      matched = match.shift();
      tokens.push( {
        value: matched,
        // Cast descendant combinators to space
        type: match[0].replace( rtrim, " " )
      } );
      soFar = soFar.slice( matched.length );
    }

    // Filters
    for ( type in Expr.filter ) {
      if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
        (match = preFilters[ type ]( match ))) ) {
        matched = match.shift();
        tokens.push( {
          value: matched,
          type: type,
          matches: match
        } );
        soFar = soFar.slice( matched.length );
      }
    }

    if ( !matched ) {
      break;
    }
  }

  // Return the length of the invalid excess
  // if we're just parsing
  // Otherwise, throw an error or return tokens
  return parseOnly ?
    soFar.length :
    soFar ?
      Sizzle.error( selector ) :
      // Cache the tokens
      tokenCache( selector, groups ).slice( 0 );
}

function toSelector( tokens ) {
  var i = 0,
    len = tokens.length,
    selector = "";
  for ( ; i < len; i++ ) {
    selector += tokens[i].value;
  }
  return selector;
}

function addCombinator( matcher, combinator, base ) {
  var dir = combinator.dir,
    checkNonElements = base && dir === "parentNode",
    doneName = done++;

  return combinator.first ?
    // Check against closest ancestor/preceding element
    function( elem, context, xml ) {
      while ( (elem = elem[ dir ]) ) {
        if ( elem.nodeType === 1 || checkNonElements ) {
          return matcher( elem, context, xml );
        }
      }
    } :

    // Check against all ancestor/preceding elements
    function( elem, context, xml ) {
      var data, cache, outerCache,
        dirkey = dirruns + " " + doneName;

      // We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
      if ( xml ) {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            if ( matcher( elem, context, xml ) ) {
              return true;
            }
          }
        }
      } else {
        while ( (elem = elem[ dir ]) ) {
          if ( elem.nodeType === 1 || checkNonElements ) {
            outerCache = elem[ expando ] || (elem[ expando ] = {});
            if ( (cache = outerCache[ dir ]) && cache[0] === dirkey ) {
              if ( (data = cache[1]) === true || data === cachedruns ) {
                return data === true;
              }
            } else {
              cache = outerCache[ dir ] = [ dirkey ];
              cache[1] = matcher( elem, context, xml ) || cachedruns;
              if ( cache[1] === true ) {
                return true;
              }
            }
          }
        }
      }
    };
}

function elementMatcher( matchers ) {
  return matchers.length > 1 ?
    function( elem, context, xml ) {
      var i = matchers.length;
      while ( i-- ) {
        if ( !matchers[i]( elem, context, xml ) ) {
          return false;
        }
      }
      return true;
    } :
    matchers[0];
}

function condense( unmatched, map, filter, context, xml ) {
  var elem,
    newUnmatched = [],
    i = 0,
    len = unmatched.length,
    mapped = map != null;

  for ( ; i < len; i++ ) {
    if ( (elem = unmatched[i]) ) {
      if ( !filter || filter( elem, context, xml ) ) {
        newUnmatched.push( elem );
        if ( mapped ) {
          map.push( i );
        }
      }
    }
  }

  return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
  if ( postFilter && !postFilter[ expando ] ) {
    postFilter = setMatcher( postFilter );
  }
  if ( postFinder && !postFinder[ expando ] ) {
    postFinder = setMatcher( postFinder, postSelector );
  }
  return markFunction(function( seed, results, context, xml ) {
    var temp, i, elem,
      preMap = [],
      postMap = [],
      preexisting = results.length,

      // Get initial elements from seed or context
      elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

      // Prefilter to get matcher input, preserving a map for seed-results synchronization
      matcherIn = preFilter && ( seed || !selector ) ?
        condense( elems, preMap, preFilter, context, xml ) :
        elems,

      matcherOut = matcher ?
        // If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
        postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

          // ...intermediate processing is necessary
          [] :

          // ...otherwise use results directly
          results :
        matcherIn;

    // Find primary matches
    if ( matcher ) {
      matcher( matcherIn, matcherOut, context, xml );
    }

    // Apply postFilter
    if ( postFilter ) {
      temp = condense( matcherOut, postMap );
      postFilter( temp, [], context, xml );

      // Un-match failing elements by moving them back to matcherIn
      i = temp.length;
      while ( i-- ) {
        if ( (elem = temp[i]) ) {
          matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
        }
      }
    }

    if ( seed ) {
      if ( postFinder || preFilter ) {
        if ( postFinder ) {
          // Get the final matcherOut by condensing this intermediate into postFinder contexts
          temp = [];
          i = matcherOut.length;
          while ( i-- ) {
            if ( (elem = matcherOut[i]) ) {
              // Restore matcherIn since elem is not yet a final match
              temp.push( (matcherIn[i] = elem) );
            }
          }
          postFinder( null, (matcherOut = []), temp, xml );
        }

        // Move matched elements from seed to results to keep them synchronized
        i = matcherOut.length;
        while ( i-- ) {
          if ( (elem = matcherOut[i]) &&
            (temp = postFinder ? indexOf.call( seed, elem ) : preMap[i]) > -1 ) {

            seed[temp] = !(results[temp] = elem);
          }
        }
      }

    // Add elements to results, through postFinder if defined
    } else {
      matcherOut = condense(
        matcherOut === results ?
          matcherOut.splice( preexisting, matcherOut.length ) :
          matcherOut
      );
      if ( postFinder ) {
        postFinder( null, results, matcherOut, xml );
      } else {
        push.apply( results, matcherOut );
      }
    }
  });
}

function matcherFromTokens( tokens ) {
  var checkContext, matcher, j,
    len = tokens.length,
    leadingRelative = Expr.relative[ tokens[0].type ],
    implicitRelative = leadingRelative || Expr.relative[" "],
    i = leadingRelative ? 1 : 0,

    // The foundational matcher ensures that elements are reachable from top-level context(s)
    matchContext = addCombinator( function( elem ) {
      return elem === checkContext;
    }, implicitRelative, true ),
    matchAnyContext = addCombinator( function( elem ) {
      return indexOf.call( checkContext, elem ) > -1;
    }, implicitRelative, true ),
    matchers = [ function( elem, context, xml ) {
      return ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
        (checkContext = context).nodeType ?
          matchContext( elem, context, xml ) :
          matchAnyContext( elem, context, xml ) );
    } ];

  for ( ; i < len; i++ ) {
    if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
      matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
    } else {
      matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

      // Return special upon seeing a positional matcher
      if ( matcher[ expando ] ) {
        // Find the next relative operator (if any) for proper handling
        j = ++i;
        for ( ; j < len; j++ ) {
          if ( Expr.relative[ tokens[j].type ] ) {
            break;
          }
        }
        return setMatcher(
          i > 1 && elementMatcher( matchers ),
          i > 1 && toSelector( tokens.slice( 0, i - 1 ) ).replace( rtrim, "$1" ),
          matcher,
          i < j && matcherFromTokens( tokens.slice( i, j ) ),
          j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
          j < len && toSelector( tokens )
        );
      }
      matchers.push( matcher );
    }
  }

  return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
  // A counter to specify which element is currently being matched
  var matcherCachedRuns = 0,
    bySet = setMatchers.length > 0,
    byElement = elementMatchers.length > 0,
    superMatcher = function( seed, context, xml, results, expandContext ) {
      var elem, j, matcher,
        setMatched = [],
        matchedCount = 0,
        i = "0",
        unmatched = seed && [],
        outermost = expandContext != null,
        contextBackup = outermostContext,
        // We must always have either seed elements or context
        elems = seed || byElement && Expr.find["TAG"]( "*", expandContext && context.parentNode || context ),
        // Use integer dirruns iff this is the outermost matcher
        dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1);

      if ( outermost ) {
        outermostContext = context !== document && context;
        cachedruns = matcherCachedRuns;
      }

      // Add elements passing elementMatchers directly to results
      // Keep `i` a string if there are no elements so `matchedCount` will be "00" below
      for ( ; (elem = elems[i]) != null; i++ ) {
        if ( byElement && elem ) {
          j = 0;
          while ( (matcher = elementMatchers[j++]) ) {
            if ( matcher( elem, context, xml ) ) {
              results.push( elem );
              break;
            }
          }
          if ( outermost ) {
            dirruns = dirrunsUnique;
            cachedruns = ++matcherCachedRuns;
          }
        }

        // Track unmatched elements for set filters
        if ( bySet ) {
          // They will have gone through all possible matchers
          if ( (elem = !matcher && elem) ) {
            matchedCount--;
          }

          // Lengthen the array for every element, matched or not
          if ( seed ) {
            unmatched.push( elem );
          }
        }
      }

      // Apply set filters to unmatched elements
      matchedCount += i;
      if ( bySet && i !== matchedCount ) {
        j = 0;
        while ( (matcher = setMatchers[j++]) ) {
          matcher( unmatched, setMatched, context, xml );
        }

        if ( seed ) {
          // Reintegrate element matches to eliminate the need for sorting
          if ( matchedCount > 0 ) {
            while ( i-- ) {
              if ( !(unmatched[i] || setMatched[i]) ) {
                setMatched[i] = pop.call( results );
              }
            }
          }

          // Discard index placeholder values to get only actual matches
          setMatched = condense( setMatched );
        }

        // Add matches to results
        push.apply( results, setMatched );

        // Seedless set matches succeeding multiple successful matchers stipulate sorting
        if ( outermost && !seed && setMatched.length > 0 &&
          ( matchedCount + setMatchers.length ) > 1 ) {

          Sizzle.uniqueSort( results );
        }
      }

      // Override manipulation of globals by nested matchers
      if ( outermost ) {
        dirruns = dirrunsUnique;
        outermostContext = contextBackup;
      }

      return unmatched;
    };

  return bySet ?
    markFunction( superMatcher ) :
    superMatcher;
}

compile = Sizzle.compile = function( selector, group /* Internal Use Only */ ) {
  var i,
    setMatchers = [],
    elementMatchers = [],
    cached = compilerCache[ selector + " " ];

  if ( !cached ) {
    // Generate a function of recursive functions that can be used to check each element
    if ( !group ) {
      group = tokenize( selector );
    }
    i = group.length;
    while ( i-- ) {
      cached = matcherFromTokens( group[i] );
      if ( cached[ expando ] ) {
        setMatchers.push( cached );
      } else {
        elementMatchers.push( cached );
      }
    }

    // Cache the compiled function
    cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
  }
  return cached;
};

function multipleContexts( selector, contexts, results ) {
  var i = 0,
    len = contexts.length;
  for ( ; i < len; i++ ) {
    Sizzle( selector, contexts[i], results );
  }
  return results;
}

function select( selector, context, results, seed ) {
  var i, tokens, token, type, find,
    match = tokenize( selector );

  if ( !seed ) {
    // Try to minimize operations if there is only one group
    if ( match.length === 1 ) {

      // Take a shortcut and set the context if the root selector is an ID
      tokens = match[0] = match[0].slice( 0 );
      if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
          context.nodeType === 9 && !documentIsXML &&
          Expr.relative[ tokens[1].type ] ) {

        context = Expr.find["ID"]( token.matches[0].replace( runescape, funescape ), context )[0];
        if ( !context ) {
          return results;
        }

        selector = selector.slice( tokens.shift().value.length );
      }

      // Fetch a seed set for right-to-left matching
      i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
      while ( i-- ) {
        token = tokens[i];

        // Abort if we hit a combinator
        if ( Expr.relative[ (type = token.type) ] ) {
          break;
        }
        if ( (find = Expr.find[ type ]) ) {
          // Search, expanding context for leading sibling combinators
          if ( (seed = find(
            token.matches[0].replace( runescape, funescape ),
            rsibling.test( tokens[0].type ) && context.parentNode || context
          )) ) {

            // If seed is empty or no tokens remain, we can return early
            tokens.splice( i, 1 );
            selector = seed.length && toSelector( tokens );
            if ( !selector ) {
              push.apply( results, slice.call( seed, 0 ) );
              return results;
            }

            break;
          }
        }
      }
    }
  }

  // Compile and execute a filtering function
  // Provide `match` to avoid retokenization if we modified the selector above
  compile( selector, match )(
    seed,
    context,
    documentIsXML,
    results,
    rsibling.test( selector )
  );
  return results;
}

// Deprecated
Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Easy API for creating new setFilters
function setFilters() {}
Expr.filters = setFilters.prototype = Expr.pseudos;
Expr.setFilters = new setFilters();

// Initialize with the default document
setDocument();

// Override sizzle attribute retrieval
Sizzle.attr = jQuery.attr;
jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;


})( window );
var runtil = /Until$/,
  rparentsprev = /^(?:parents|prev(?:Until|All))/,
  isSimple = /^.[^:#\[\.,]*$/,
  rneedsContext = jQuery.expr.match.needsContext,
  // methods guaranteed to produce a unique set when starting from a unique set
  guaranteedUnique = {
    children: true,
    contents: true,
    next: true,
    prev: true
  };

jQuery.fn.extend({
  find: function( selector ) {
    var i, ret, self,
      len = this.length;

    if ( typeof selector !== "string" ) {
      self = this;
      return this.pushStack( jQuery( selector ).filter(function() {
        for ( i = 0; i < len; i++ ) {
          if ( jQuery.contains( self[ i ], this ) ) {
            return true;
          }
        }
      }) );
    }

    ret = [];
    for ( i = 0; i < len; i++ ) {
      jQuery.find( selector, this[ i ], ret );
    }

    // Needed because $( selector, context ) becomes $( context ).find( selector )
    ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
    ret.selector = ( this.selector ? this.selector + " " : "" ) + selector;
    return ret;
  },

  has: function( target ) {
    var i,
      targets = jQuery( target, this ),
      len = targets.length;

    return this.filter(function() {
      for ( i = 0; i < len; i++ ) {
        if ( jQuery.contains( this, targets[i] ) ) {
          return true;
        }
      }
    });
  },

  not: function( selector ) {
    return this.pushStack( winnow(this, selector, false) );
  },

  filter: function( selector ) {
    return this.pushStack( winnow(this, selector, true) );
  },

  is: function( selector ) {
    return !!selector && (
      typeof selector === "string" ?
        // If this is a positional/relative selector, check membership in the returned set
        // so $("p:first").is("p:last") won't return true for a doc with two "p".
        rneedsContext.test( selector ) ?
          jQuery( selector, this.context ).index( this[0] ) >= 0 :
          jQuery.filter( selector, this ).length > 0 :
        this.filter( selector ).length > 0 );
  },

  closest: function( selectors, context ) {
    var cur,
      i = 0,
      l = this.length,
      ret = [],
      pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
        jQuery( selectors, context || this.context ) :
        0;

    for ( ; i < l; i++ ) {
      cur = this[i];

      while ( cur && cur.ownerDocument && cur !== context && cur.nodeType !== 11 ) {
        if ( pos ? pos.index(cur) > -1 : jQuery.find.matchesSelector(cur, selectors) ) {
          ret.push( cur );
          break;
        }
        cur = cur.parentNode;
      }
    }

    return this.pushStack( ret.length > 1 ? jQuery.unique( ret ) : ret );
  },

  // Determine the position of an element within
  // the matched set of elements
  index: function( elem ) {

    // No argument, return index in parent
    if ( !elem ) {
      return ( this[0] && this[0].parentNode ) ? this.first().prevAll().length : -1;
    }

    // index in selector
    if ( typeof elem === "string" ) {
      return jQuery.inArray( this[0], jQuery( elem ) );
    }

    // Locate the position of the desired element
    return jQuery.inArray(
      // If it receives a jQuery object, the first element is used
      elem.jquery ? elem[0] : elem, this );
  },

  add: function( selector, context ) {
    var set = typeof selector === "string" ?
        jQuery( selector, context ) :
        jQuery.makeArray( selector && selector.nodeType ? [ selector ] : selector ),
      all = jQuery.merge( this.get(), set );

    return this.pushStack( jQuery.unique(all) );
  },

  addBack: function( selector ) {
    return this.add( selector == null ?
      this.prevObject : this.prevObject.filter(selector)
    );
  }
});

jQuery.fn.andSelf = jQuery.fn.addBack;

function sibling( cur, dir ) {
  do {
    cur = cur[ dir ];
  } while ( cur && cur.nodeType !== 1 );

  return cur;
}

jQuery.each({
  parent: function( elem ) {
    var parent = elem.parentNode;
    return parent && parent.nodeType !== 11 ? parent : null;
  },
  parents: function( elem ) {
    return jQuery.dir( elem, "parentNode" );
  },
  parentsUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "parentNode", until );
  },
  next: function( elem ) {
    return sibling( elem, "nextSibling" );
  },
  prev: function( elem ) {
    return sibling( elem, "previousSibling" );
  },
  nextAll: function( elem ) {
    return jQuery.dir( elem, "nextSibling" );
  },
  prevAll: function( elem ) {
    return jQuery.dir( elem, "previousSibling" );
  },
  nextUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "nextSibling", until );
  },
  prevUntil: function( elem, i, until ) {
    return jQuery.dir( elem, "previousSibling", until );
  },
  siblings: function( elem ) {
    return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
  },
  children: function( elem ) {
    return jQuery.sibling( elem.firstChild );
  },
  contents: function( elem ) {
    return jQuery.nodeName( elem, "iframe" ) ?
      elem.contentDocument || elem.contentWindow.document :
      jQuery.merge( [], elem.childNodes );
  }
}, function( name, fn ) {
  jQuery.fn[ name ] = function( until, selector ) {
    var ret = jQuery.map( this, fn, until );

    if ( !runtil.test( name ) ) {
      selector = until;
    }

    if ( selector && typeof selector === "string" ) {
      ret = jQuery.filter( selector, ret );
    }

    ret = this.length > 1 && !guaranteedUnique[ name ] ? jQuery.unique( ret ) : ret;

    if ( this.length > 1 && rparentsprev.test( name ) ) {
      ret = ret.reverse();
    }

    return this.pushStack( ret );
  };
});

jQuery.extend({
  filter: function( expr, elems, not ) {
    if ( not ) {
      expr = ":not(" + expr + ")";
    }

    return elems.length === 1 ?
      jQuery.find.matchesSelector(elems[0], expr) ? [ elems[0] ] : [] :
      jQuery.find.matches(expr, elems);
  },

  dir: function( elem, dir, until ) {
    var matched = [],
      cur = elem[ dir ];

    while ( cur && cur.nodeType !== 9 && (until === undefined || cur.nodeType !== 1 || !jQuery( cur ).is( until )) ) {
      if ( cur.nodeType === 1 ) {
        matched.push( cur );
      }
      cur = cur[dir];
    }
    return matched;
  },

  sibling: function( n, elem ) {
    var r = [];

    for ( ; n; n = n.nextSibling ) {
      if ( n.nodeType === 1 && n !== elem ) {
        r.push( n );
      }
    }

    return r;
  }
});

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, keep ) {

  // Can't pass null or undefined to indexOf in Firefox 4
  // Set to 0 to skip string check
  qualifier = qualifier || 0;

  if ( jQuery.isFunction( qualifier ) ) {
    return jQuery.grep(elements, function( elem, i ) {
      var retVal = !!qualifier.call( elem, i, elem );
      return retVal === keep;
    });

  } else if ( qualifier.nodeType ) {
    return jQuery.grep(elements, function( elem ) {
      return ( elem === qualifier ) === keep;
    });

  } else if ( typeof qualifier === "string" ) {
    var filtered = jQuery.grep(elements, function( elem ) {
      return elem.nodeType === 1;
    });

    if ( isSimple.test( qualifier ) ) {
      return jQuery.filter(qualifier, filtered, !keep);
    } else {
      qualifier = jQuery.filter( qualifier, filtered );
    }
  }

  return jQuery.grep(elements, function( elem ) {
    return ( jQuery.inArray( elem, qualifier ) >= 0 ) === keep;
  });
}
function createSafeFragment( document ) {
  var list = nodeNames.split( "|" ),
    safeFrag = document.createDocumentFragment();

  if ( safeFrag.createElement ) {
    while ( list.length ) {
      safeFrag.createElement(
        list.pop()
      );
    }
  }
  return safeFrag;
}

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|" +
    "header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
  rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
  rnoshimcache = new RegExp("<(?:" + nodeNames + ")[\\s/>]", "i"),
  rleadingWhitespace = /^\s+/,
  rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
  rtagName = /<([\w:]+)/,
  rtbody = /<tbody/i,
  rhtml = /<|&#?\w+;/,
  rnoInnerhtml = /<(?:script|style|link)/i,
  manipulation_rcheckableType = /^(?:checkbox|radio)$/i,
  // checked="checked" or checked
  rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
  rscriptType = /^$|\/(?:java|ecma)script/i,
  rscriptTypeMasked = /^true\/(.*)/,
  rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

  // We have to close these tags to support XHTML (#13200)
  wrapMap = {
    option: [ 1, "<select multiple='multiple'>", "</select>" ],
    legend: [ 1, "<fieldset>", "</fieldset>" ],
    area: [ 1, "<map>", "</map>" ],
    param: [ 1, "<object>", "</object>" ],
    thead: [ 1, "<table>", "</table>" ],
    tr: [ 2, "<table><tbody>", "</tbody></table>" ],
    col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
    td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

    // IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
    // unless wrapped in a div with non-breaking characters in front of it.
    _default: jQuery.support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>"  ]
  },
  safeFragment = createSafeFragment( document ),
  fragmentDiv = safeFragment.appendChild( document.createElement("div") );

wrapMap.optgroup = wrapMap.option;
wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

jQuery.fn.extend({
  text: function( value ) {
    return jQuery.access( this, function( value ) {
      return value === undefined ?
        jQuery.text( this ) :
        this.empty().append( ( this[0] && this[0].ownerDocument || document ).createTextNode( value ) );
    }, null, value, arguments.length );
  },

  wrapAll: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapAll( html.call(this, i) );
      });
    }

    if ( this[0] ) {
      // The elements to wrap the target around
      var wrap = jQuery( html, this[0].ownerDocument ).eq(0).clone(true);

      if ( this[0].parentNode ) {
        wrap.insertBefore( this[0] );
      }

      wrap.map(function() {
        var elem = this;

        while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
          elem = elem.firstChild;
        }

        return elem;
      }).append( this );
    }

    return this;
  },

  wrapInner: function( html ) {
    if ( jQuery.isFunction( html ) ) {
      return this.each(function(i) {
        jQuery(this).wrapInner( html.call(this, i) );
      });
    }

    return this.each(function() {
      var self = jQuery( this ),
        contents = self.contents();

      if ( contents.length ) {
        contents.wrapAll( html );

      } else {
        self.append( html );
      }
    });
  },

  wrap: function( html ) {
    var isFunction = jQuery.isFunction( html );

    return this.each(function(i) {
      jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
    });
  },

  unwrap: function() {
    return this.parent().each(function() {
      if ( !jQuery.nodeName( this, "body" ) ) {
        jQuery( this ).replaceWith( this.childNodes );
      }
    }).end();
  },

  append: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        this.appendChild( elem );
      }
    });
  },

  prepend: function() {
    return this.domManip(arguments, true, function( elem ) {
      if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
        this.insertBefore( elem, this.firstChild );
      }
    });
  },

  before: function() {
    return this.domManip( arguments, false, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this );
      }
    });
  },

  after: function() {
    return this.domManip( arguments, false, function( elem ) {
      if ( this.parentNode ) {
        this.parentNode.insertBefore( elem, this.nextSibling );
      }
    });
  },

  // keepData is for internal use only--do not document
  remove: function( selector, keepData ) {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      if ( !selector || jQuery.filter( selector, [ elem ] ).length > 0 ) {
        if ( !keepData && elem.nodeType === 1 ) {
          jQuery.cleanData( getAll( elem ) );
        }

        if ( elem.parentNode ) {
          if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
            setGlobalEval( getAll( elem, "script" ) );
          }
          elem.parentNode.removeChild( elem );
        }
      }
    }

    return this;
  },

  empty: function() {
    var elem,
      i = 0;

    for ( ; (elem = this[i]) != null; i++ ) {
      // Remove element nodes and prevent memory leaks
      if ( elem.nodeType === 1 ) {
        jQuery.cleanData( getAll( elem, false ) );
      }

      // Remove any remaining nodes
      while ( elem.firstChild ) {
        elem.removeChild( elem.firstChild );
      }

      // If this is a select, ensure that it displays empty (#12336)
      // Support: IE<9
      if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
        elem.options.length = 0;
      }
    }

    return this;
  },

  clone: function( dataAndEvents, deepDataAndEvents ) {
    dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
    deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

    return this.map( function () {
      return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
    });
  },

  html: function( value ) {
    return jQuery.access( this, function( value ) {
      var elem = this[0] || {},
        i = 0,
        l = this.length;

      if ( value === undefined ) {
        return elem.nodeType === 1 ?
          elem.innerHTML.replace( rinlinejQuery, "" ) :
          undefined;
      }

      // See if we can take a shortcut and just use innerHTML
      if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
        ( jQuery.support.htmlSerialize || !rnoshimcache.test( value )  ) &&
        ( jQuery.support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
        !wrapMap[ ( rtagName.exec( value ) || ["", ""] )[1].toLowerCase() ] ) {

        value = value.replace( rxhtmlTag, "<$1></$2>" );

        try {
          for (; i < l; i++ ) {
            // Remove element nodes and prevent memory leaks
            elem = this[i] || {};
            if ( elem.nodeType === 1 ) {
              jQuery.cleanData( getAll( elem, false ) );
              elem.innerHTML = value;
            }
          }

          elem = 0;

        // If using innerHTML throws an exception, use the fallback method
        } catch(e) {}
      }

      if ( elem ) {
        this.empty().append( value );
      }
    }, null, value, arguments.length );
  },

  replaceWith: function( value ) {
    var isFunc = jQuery.isFunction( value );

    // Make sure that the elements are removed from the DOM before they are inserted
    // this can help fix replacing a parent with child elements
    if ( !isFunc && typeof value !== "string" ) {
      value = jQuery( value ).not( this ).detach();
    }

    return this.domManip( [ value ], true, function( elem ) {
      var next = this.nextSibling,
        parent = this.parentNode;

      if ( parent ) {
        jQuery( this ).remove();
        parent.insertBefore( elem, next );
      }
    });
  },

  detach: function( selector ) {
    return this.remove( selector, true );
  },

  domManip: function( args, table, callback ) {

    // Flatten any nested arrays
    args = core_concat.apply( [], args );

    var first, node, hasScripts,
      scripts, doc, fragment,
      i = 0,
      l = this.length,
      set = this,
      iNoClone = l - 1,
      value = args[0],
      isFunction = jQuery.isFunction( value );

    // We can't cloneNode fragments that contain checked, in WebKit
    if ( isFunction || !( l <= 1 || typeof value !== "string" || jQuery.support.checkClone || !rchecked.test( value ) ) ) {
      return this.each(function( index ) {
        var self = set.eq( index );
        if ( isFunction ) {
          args[0] = value.call( this, index, table ? self.html() : undefined );
        }
        self.domManip( args, table, callback );
      });
    }

    if ( l ) {
      fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
      first = fragment.firstChild;

      if ( fragment.childNodes.length === 1 ) {
        fragment = first;
      }

      if ( first ) {
        table = table && jQuery.nodeName( first, "tr" );
        scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
        hasScripts = scripts.length;

        // Use the original fragment for the last item instead of the first because it can end up
        // being emptied incorrectly in certain situations (#8070).
        for ( ; i < l; i++ ) {
          node = fragment;

          if ( i !== iNoClone ) {
            node = jQuery.clone( node, true, true );

            // Keep references to cloned scripts for later restoration
            if ( hasScripts ) {
              jQuery.merge( scripts, getAll( node, "script" ) );
            }
          }

          callback.call(
            table && jQuery.nodeName( this[i], "table" ) ?
              findOrAppend( this[i], "tbody" ) :
              this[i],
            node,
            i
          );
        }

        if ( hasScripts ) {
          doc = scripts[ scripts.length - 1 ].ownerDocument;

          // Reenable scripts
          jQuery.map( scripts, restoreScript );

          // Evaluate executable scripts on first document insertion
          for ( i = 0; i < hasScripts; i++ ) {
            node = scripts[ i ];
            if ( rscriptType.test( node.type || "" ) &&
              !jQuery._data( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

              if ( node.src ) {
                // Hope ajax is available...
                jQuery.ajax({
                  url: node.src,
                  type: "GET",
                  dataType: "script",
                  async: false,
                  global: false,
                  "throws": true
                });
              } else {
                jQuery.globalEval( ( node.text || node.textContent || node.innerHTML || "" ).replace( rcleanScript, "" ) );
              }
            }
          }
        }

        // Fix #11809: Avoid leaking memory
        fragment = first = null;
      }
    }

    return this;
  }
});

function findOrAppend( elem, tag ) {
  return elem.getElementsByTagName( tag )[0] || elem.appendChild( elem.ownerDocument.createElement( tag ) );
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
  var attr = elem.getAttributeNode("type");
  elem.type = ( attr && attr.specified ) + "/" + elem.type;
  return elem;
}
function restoreScript( elem ) {
  var match = rscriptTypeMasked.exec( elem.type );
  if ( match ) {
    elem.type = match[1];
  } else {
    elem.removeAttribute("type");
  }
  return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
  var elem,
    i = 0;
  for ( ; (elem = elems[i]) != null; i++ ) {
    jQuery._data( elem, "globalEval", !refElements || jQuery._data( refElements[i], "globalEval" ) );
  }
}

function cloneCopyEvent( src, dest ) {

  if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
    return;
  }

  var type, i, l,
    oldData = jQuery._data( src ),
    curData = jQuery._data( dest, oldData ),
    events = oldData.events;

  if ( events ) {
    delete curData.handle;
    curData.events = {};

    for ( type in events ) {
      for ( i = 0, l = events[ type ].length; i < l; i++ ) {
        jQuery.event.add( dest, type, events[ type ][ i ] );
      }
    }
  }

  // make the cloned public data object a copy from the original
  if ( curData.data ) {
    curData.data = jQuery.extend( {}, curData.data );
  }
}

function fixCloneNodeIssues( src, dest ) {
  var nodeName, e, data;

  // We do not need to do anything for non-Elements
  if ( dest.nodeType !== 1 ) {
    return;
  }

  nodeName = dest.nodeName.toLowerCase();

  // IE6-8 copies events bound via attachEvent when using cloneNode.
  if ( !jQuery.support.noCloneEvent && dest[ jQuery.expando ] ) {
    data = jQuery._data( dest );

    for ( e in data.events ) {
      jQuery.removeEvent( dest, e, data.handle );
    }

    // Event data gets referenced instead of copied if the expando gets copied too
    dest.removeAttribute( jQuery.expando );
  }

  // IE blanks contents when cloning scripts, and tries to evaluate newly-set text
  if ( nodeName === "script" && dest.text !== src.text ) {
    disableScript( dest ).text = src.text;
    restoreScript( dest );

  // IE6-10 improperly clones children of object elements using classid.
  // IE10 throws NoModificationAllowedError if parent is null, #12132.
  } else if ( nodeName === "object" ) {
    if ( dest.parentNode ) {
      dest.outerHTML = src.outerHTML;
    }

    // This path appears unavoidable for IE9. When cloning an object
    // element in IE9, the outerHTML strategy above is not sufficient.
    // If the src has innerHTML and the destination does not,
    // copy the src.innerHTML into the dest.innerHTML. #10324
    if ( jQuery.support.html5Clone && ( src.innerHTML && !jQuery.trim(dest.innerHTML) ) ) {
      dest.innerHTML = src.innerHTML;
    }

  } else if ( nodeName === "input" && manipulation_rcheckableType.test( src.type ) ) {
    // IE6-8 fails to persist the checked state of a cloned checkbox
    // or radio button. Worse, IE6-7 fail to give the cloned element
    // a checked appearance if the defaultChecked value isn't also set

    dest.defaultChecked = dest.checked = src.checked;

    // IE6-7 get confused and end up setting the value of a cloned
    // checkbox/radio button to an empty string instead of "on"
    if ( dest.value !== src.value ) {
      dest.value = src.value;
    }

  // IE6-8 fails to return the selected option to the default selected
  // state when cloning options
  } else if ( nodeName === "option" ) {
    dest.defaultSelected = dest.selected = src.defaultSelected;

  // IE6-8 fails to set the defaultValue to the correct value when
  // cloning other types of input fields
  } else if ( nodeName === "input" || nodeName === "textarea" ) {
    dest.defaultValue = src.defaultValue;
  }
}

jQuery.each({
  appendTo: "append",
  prependTo: "prepend",
  insertBefore: "before",
  insertAfter: "after",
  replaceAll: "replaceWith"
}, function( name, original ) {
  jQuery.fn[ name ] = function( selector ) {
    var elems,
      i = 0,
      ret = [],
      insert = jQuery( selector ),
      last = insert.length - 1;

    for ( ; i <= last; i++ ) {
      elems = i === last ? this : this.clone(true);
      jQuery( insert[i] )[ original ]( elems );

      // Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
      core_push.apply( ret, elems.get() );
    }

    return this.pushStack( ret );
  };
});

function getAll( context, tag ) {
  var elems, elem,
    i = 0,
    found = typeof context.getElementsByTagName !== core_strundefined ? context.getElementsByTagName( tag || "*" ) :
      typeof context.querySelectorAll !== core_strundefined ? context.querySelectorAll( tag || "*" ) :
      undefined;

  if ( !found ) {
    for ( found = [], elems = context.childNodes || context; (elem = elems[i]) != null; i++ ) {
      if ( !tag || jQuery.nodeName( elem, tag ) ) {
        found.push( elem );
      } else {
        jQuery.merge( found, getAll( elem, tag ) );
      }
    }
  }

  return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
    jQuery.merge( [ context ], found ) :
    found;
}

// Used in buildFragment, fixes the defaultChecked property
function fixDefaultChecked( elem ) {
  if ( manipulation_rcheckableType.test( elem.type ) ) {
    elem.defaultChecked = elem.checked;
  }
}

jQuery.extend({
  clone: function( elem, dataAndEvents, deepDataAndEvents ) {
    var destElements, node, clone, i, srcElements,
      inPage = jQuery.contains( elem.ownerDocument, elem );

    if ( jQuery.support.html5Clone || jQuery.isXMLDoc(elem) || !rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
      clone = elem.cloneNode( true );

    // IE<=8 does not properly clone detached, unknown element nodes
    } else {
      fragmentDiv.innerHTML = elem.outerHTML;
      fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
    }

    if ( (!jQuery.support.noCloneEvent || !jQuery.support.noCloneChecked) &&
        (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem) ) {

      // We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
      destElements = getAll( clone );
      srcElements = getAll( elem );

      // Fix all IE cloning issues
      for ( i = 0; (node = srcElements[i]) != null; ++i ) {
        // Ensure that the destination node is not null; Fixes #9587
        if ( destElements[i] ) {
          fixCloneNodeIssues( node, destElements[i] );
        }
      }
    }

    // Copy the events from the original to the clone
    if ( dataAndEvents ) {
      if ( deepDataAndEvents ) {
        srcElements = srcElements || getAll( elem );
        destElements = destElements || getAll( clone );

        for ( i = 0; (node = srcElements[i]) != null; i++ ) {
          cloneCopyEvent( node, destElements[i] );
        }
      } else {
        cloneCopyEvent( elem, clone );
      }
    }

    // Preserve script evaluation history
    destElements = getAll( clone, "script" );
    if ( destElements.length > 0 ) {
      setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
    }

    destElements = srcElements = node = null;

    // Return the cloned set
    return clone;
  },

  buildFragment: function( elems, context, scripts, selection ) {
    var j, elem, contains,
      tmp, tag, tbody, wrap,
      l = elems.length,

      // Ensure a safe fragment
      safe = createSafeFragment( context ),

      nodes = [],
      i = 0;

    for ( ; i < l; i++ ) {
      elem = elems[ i ];

      if ( elem || elem === 0 ) {

        // Add nodes directly
        if ( jQuery.type( elem ) === "object" ) {
          jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

        // Convert non-html into a text node
        } else if ( !rhtml.test( elem ) ) {
          nodes.push( context.createTextNode( elem ) );

        // Convert html into DOM nodes
        } else {
          tmp = tmp || safe.appendChild( context.createElement("div") );

          // Deserialize a standard representation
          tag = ( rtagName.exec( elem ) || ["", ""] )[1].toLowerCase();
          wrap = wrapMap[ tag ] || wrapMap._default;

          tmp.innerHTML = wrap[1] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[2];

          // Descend through wrappers to the right content
          j = wrap[0];
          while ( j-- ) {
            tmp = tmp.lastChild;
          }

          // Manually add leading whitespace removed by IE
          if ( !jQuery.support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
            nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[0] ) );
          }

          // Remove IE's autoinserted <tbody> from table fragments
          if ( !jQuery.support.tbody ) {

            // String was a <table>, *may* have spurious <tbody>
            elem = tag === "table" && !rtbody.test( elem ) ?
              tmp.firstChild :

              // String was a bare <thead> or <tfoot>
              wrap[1] === "<table>" && !rtbody.test( elem ) ?
                tmp :
                0;

            j = elem && elem.childNodes.length;
            while ( j-- ) {
              if ( jQuery.nodeName( (tbody = elem.childNodes[j]), "tbody" ) && !tbody.childNodes.length ) {
                elem.removeChild( tbody );
              }
            }
          }

          jQuery.merge( nodes, tmp.childNodes );

          // Fix #12392 for WebKit and IE > 9
          tmp.textContent = "";

          // Fix #12392 for oldIE
          while ( tmp.firstChild ) {
            tmp.removeChild( tmp.firstChild );
          }

          // Remember the top-level container for proper cleanup
          tmp = safe.lastChild;
        }
      }
    }

    // Fix #11356: Clear elements from fragment
    if ( tmp ) {
      safe.removeChild( tmp );
    }

    // Reset defaultChecked for any radios and checkboxes
    // about to be appended to the DOM in IE 6/7 (#8060)
    if ( !jQuery.support.appendChecked ) {
      jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
    }

    i = 0;
    while ( (elem = nodes[ i++ ]) ) {

      // #4087 - If origin and destination elements are the same, and this is
      // that element, do not do anything
      if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
        continue;
      }

      contains = jQuery.contains( elem.ownerDocument, elem );

      // Append to fragment
      tmp = getAll( safe.appendChild( elem ), "script" );

      // Preserve script evaluation history
      if ( contains ) {
        setGlobalEval( tmp );
      }

      // Capture executables
      if ( scripts ) {
        j = 0;
        while ( (elem = tmp[ j++ ]) ) {
          if ( rscriptType.test( elem.type || "" ) ) {
            scripts.push( elem );
          }
        }
      }
    }

    tmp = null;

    return safe;
  },

  cleanData: function( elems, /* internal */ acceptData ) {
    var elem, type, id, data,
      i = 0,
      internalKey = jQuery.expando,
      cache = jQuery.cache,
      deleteExpando = jQuery.support.deleteExpando,
      special = jQuery.event.special;

    for ( ; (elem = elems[i]) != null; i++ ) {

      if ( acceptData || jQuery.acceptData( elem ) ) {

        id = elem[ internalKey ];
        data = id && cache[ id ];

        if ( data ) {
          if ( data.events ) {
            for ( type in data.events ) {
              if ( special[ type ] ) {
                jQuery.event.remove( elem, type );

              // This is a shortcut to avoid jQuery.event.remove's overhead
              } else {
                jQuery.removeEvent( elem, type, data.handle );
              }
            }
          }

          // Remove cache only if it was not already removed by jQuery.event.remove
          if ( cache[ id ] ) {

            delete cache[ id ];

            // IE does not allow us to delete expando properties from nodes,
            // nor does it have a removeAttribute function on Document nodes;
            // we must handle all of these cases
            if ( deleteExpando ) {
              delete elem[ internalKey ];

            } else if ( typeof elem.removeAttribute !== core_strundefined ) {
              elem.removeAttribute( internalKey );

            } else {
              elem[ internalKey ] = null;
            }

            core_deletedIds.push( id );
          }
        }
      }
    }
  }
});
var iframe, getStyles, curCSS,
  ralpha = /alpha\([^)]*\)/i,
  ropacity = /opacity\s*=\s*([^)]*)/,
  rposition = /^(top|right|bottom|left)$/,
  // swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
  // see here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
  rdisplayswap = /^(none|table(?!-c[ea]).+)/,
  rmargin = /^margin/,
  rnumsplit = new RegExp( "^(" + core_pnum + ")(.*)$", "i" ),
  rnumnonpx = new RegExp( "^(" + core_pnum + ")(?!px)[a-z%]+$", "i" ),
  rrelNum = new RegExp( "^([+-])=(" + core_pnum + ")", "i" ),
  elemdisplay = { BODY: "block" },

  cssShow = { position: "absolute", visibility: "hidden", display: "block" },
  cssNormalTransform = {
    letterSpacing: 0,
    fontWeight: 400
  },

  cssExpand = [ "Top", "Right", "Bottom", "Left" ],
  cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

  // shortcut for names that are not vendor prefixed
  if ( name in style ) {
    return name;
  }

  // check for vendor prefixed names
  var capName = name.charAt(0).toUpperCase() + name.slice(1),
    origName = name,
    i = cssPrefixes.length;

  while ( i-- ) {
    name = cssPrefixes[ i ] + capName;
    if ( name in style ) {
      return name;
    }
  }

  return origName;
}

function isHidden( elem, el ) {
  // isHidden might be called from jQuery#filter function;
  // in that case, element will be second argument
  elem = el || elem;
  return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
}

function showHide( elements, show ) {
  var display, elem, hidden,
    values = [],
    index = 0,
    length = elements.length;

  for ( ; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }

    values[ index ] = jQuery._data( elem, "olddisplay" );
    display = elem.style.display;
    if ( show ) {
      // Reset the inline display of this element to learn if it is
      // being hidden by cascaded rules or not
      if ( !values[ index ] && display === "none" ) {
        elem.style.display = "";
      }

      // Set elements which have been overridden with display: none
      // in a stylesheet to whatever the default browser style is
      // for such an element
      if ( elem.style.display === "" && isHidden( elem ) ) {
        values[ index ] = jQuery._data( elem, "olddisplay", css_defaultDisplay(elem.nodeName) );
      }
    } else {

      if ( !values[ index ] ) {
        hidden = isHidden( elem );

        if ( display && display !== "none" || !hidden ) {
          jQuery._data( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
        }
      }
    }
  }

  // Set the display of most of the elements in a second loop
  // to avoid the constant reflow
  for ( index = 0; index < length; index++ ) {
    elem = elements[ index ];
    if ( !elem.style ) {
      continue;
    }
    if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
      elem.style.display = show ? values[ index ] || "" : "none";
    }
  }

  return elements;
}

jQuery.fn.extend({
  css: function( name, value ) {
    return jQuery.access( this, function( elem, name, value ) {
      var len, styles,
        map = {},
        i = 0;

      if ( jQuery.isArray( name ) ) {
        styles = getStyles( elem );
        len = name.length;

        for ( ; i < len; i++ ) {
          map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
        }

        return map;
      }

      return value !== undefined ?
        jQuery.style( elem, name, value ) :
        jQuery.css( elem, name );
    }, name, value, arguments.length > 1 );
  },
  show: function() {
    return showHide( this, true );
  },
  hide: function() {
    return showHide( this );
  },
  toggle: function( state ) {
    var bool = typeof state === "boolean";

    return this.each(function() {
      if ( bool ? state : isHidden( this ) ) {
        jQuery( this ).show();
      } else {
        jQuery( this ).hide();
      }
    });
  }
});

jQuery.extend({
  // Add in style property hooks for overriding the default
  // behavior of getting and setting a style property
  cssHooks: {
    opacity: {
      get: function( elem, computed ) {
        if ( computed ) {
          // We should always get a number back from opacity
          var ret = curCSS( elem, "opacity" );
          return ret === "" ? "1" : ret;
        }
      }
    }
  },

  // Exclude the following css properties to add px
  cssNumber: {
    "columnCount": true,
    "fillOpacity": true,
    "fontWeight": true,
    "lineHeight": true,
    "opacity": true,
    "orphans": true,
    "widows": true,
    "zIndex": true,
    "zoom": true
  },

  // Add in properties whose names you wish to fix before
  // setting or getting the value
  cssProps: {
    // normalize float css property
    "float": jQuery.support.cssFloat ? "cssFloat" : "styleFloat"
  },

  // Get and set the style property on a DOM Node
  style: function( elem, name, value, extra ) {
    // Don't set styles on text and comment nodes
    if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
      return;
    }

    // Make sure that we're working with the right name
    var ret, type, hooks,
      origName = jQuery.camelCase( name ),
      style = elem.style;

    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // Check if we're setting a value
    if ( value !== undefined ) {
      type = typeof value;

      // convert relative number strings (+= or -=) to relative numbers. #7345
      if ( type === "string" && (ret = rrelNum.exec( value )) ) {
        value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
        // Fixes bug #9237
        type = "number";
      }

      // Make sure that NaN and null values aren't set. See: #7116
      if ( value == null || type === "number" && isNaN( value ) ) {
        return;
      }

      // If a number was passed in, add 'px' to the (except for certain CSS properties)
      if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
        value += "px";
      }

      // Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
      // but it would mean to define eight (for every problematic property) identical functions
      if ( !jQuery.support.clearCloneStyle && value === "" && name.indexOf("background") === 0 ) {
        style[ name ] = "inherit";
      }

      // If a hook was provided, use that value, otherwise just set the specified value
      if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {

        // Wrapped to prevent IE from throwing errors when 'invalid' values are provided
        // Fixes bug #5509
        try {
          style[ name ] = value;
        } catch(e) {}
      }

    } else {
      // If a hook was provided get the non-computed value from there
      if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
        return ret;
      }

      // Otherwise just get the value from the style object
      return style[ name ];
    }
  },

  css: function( elem, name, extra, styles ) {
    var num, val, hooks,
      origName = jQuery.camelCase( name );

    // Make sure that we're working with the right name
    name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

    // gets hook for the prefixed version
    // followed by the unprefixed version
    hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

    // If a hook was provided get the computed value from there
    if ( hooks && "get" in hooks ) {
      val = hooks.get( elem, true, extra );
    }

    // Otherwise, if a way to get the computed value exists, use that
    if ( val === undefined ) {
      val = curCSS( elem, name, styles );
    }

    //convert "normal" to computed value
    if ( val === "normal" && name in cssNormalTransform ) {
      val = cssNormalTransform[ name ];
    }

    // Return, converting to number if forced or a qualifier was provided and val looks numeric
    if ( extra === "" || extra ) {
      num = parseFloat( val );
      return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
    }
    return val;
  },

  // A method for quickly swapping in/out CSS properties to get correct calculations
  swap: function( elem, options, callback, args ) {
    var ret, name,
      old = {};

    // Remember the old values, and insert the new ones
    for ( name in options ) {
      old[ name ] = elem.style[ name ];
      elem.style[ name ] = options[ name ];
    }

    ret = callback.apply( elem, args || [] );

    // Revert the old values
    for ( name in options ) {
      elem.style[ name ] = old[ name ];
    }

    return ret;
  }
});

// NOTE: we've included the "window" in window.getComputedStyle
// because jsdom on node.js will break without it.
if ( window.getComputedStyle ) {
  getStyles = function( elem ) {
    return window.getComputedStyle( elem, null );
  };

  curCSS = function( elem, name, _computed ) {
    var width, minWidth, maxWidth,
      computed = _computed || getStyles( elem ),

      // getPropertyValue is only needed for .css('filter') in IE9, see #12537
      ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined,
      style = elem.style;

    if ( computed ) {

      if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
        ret = jQuery.style( elem, name );
      }

      // A tribute to the "awesome hack by Dean Edwards"
      // Chrome < 17 and Safari 5.0 uses "computed value" instead of "used value" for margin-right
      // Safari 5.1.7 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
      // this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
      if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

        // Remember the original values
        width = style.width;
        minWidth = style.minWidth;
        maxWidth = style.maxWidth;

        // Put in the new values to get a computed value out
        style.minWidth = style.maxWidth = style.width = ret;
        ret = computed.width;

        // Revert the changed values
        style.width = width;
        style.minWidth = minWidth;
        style.maxWidth = maxWidth;
      }
    }

    return ret;
  };
} else if ( document.documentElement.currentStyle ) {
  getStyles = function( elem ) {
    return elem.currentStyle;
  };

  curCSS = function( elem, name, _computed ) {
    var left, rs, rsLeft,
      computed = _computed || getStyles( elem ),
      ret = computed ? computed[ name ] : undefined,
      style = elem.style;

    // Avoid setting ret to empty string here
    // so we don't default to auto
    if ( ret == null && style && style[ name ] ) {
      ret = style[ name ];
    }

    // From the awesome hack by Dean Edwards
    // http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

    // If we're not dealing with a regular pixel number
    // but a number that has a weird ending, we need to convert it to pixels
    // but not position css attributes, as those are proportional to the parent element instead
    // and we can't measure the parent instead because it might trigger a "stacking dolls" problem
    if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

      // Remember the original values
      left = style.left;
      rs = elem.runtimeStyle;
      rsLeft = rs && rs.left;

      // Put in the new values to get a computed value out
      if ( rsLeft ) {
        rs.left = elem.currentStyle.left;
      }
      style.left = name === "fontSize" ? "1em" : ret;
      ret = style.pixelLeft + "px";

      // Revert the changed values
      style.left = left;
      if ( rsLeft ) {
        rs.left = rsLeft;
      }
    }

    return ret === "" ? "auto" : ret;
  };
}

function setPositiveNumber( elem, value, subtract ) {
  var matches = rnumsplit.exec( value );
  return matches ?
    // Guard against undefined "subtract", e.g., when used as in cssHooks
    Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
    value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
  var i = extra === ( isBorderBox ? "border" : "content" ) ?
    // If we already have the right measurement, avoid augmentation
    4 :
    // Otherwise initialize for horizontal or vertical properties
    name === "width" ? 1 : 0,

    val = 0;

  for ( ; i < 4; i += 2 ) {
    // both box models exclude margin, so add it if we want it
    if ( extra === "margin" ) {
      val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
    }

    if ( isBorderBox ) {
      // border-box includes padding, so remove it if we want content
      if ( extra === "content" ) {
        val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
      }

      // at this point, extra isn't border nor margin, so remove border
      if ( extra !== "margin" ) {
        val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    } else {
      // at this point, extra isn't content, so add padding
      val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

      // at this point, extra isn't content nor padding, so add border
      if ( extra !== "padding" ) {
        val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
      }
    }
  }

  return val;
}

function getWidthOrHeight( elem, name, extra ) {

  // Start with offset property, which is equivalent to the border-box value
  var valueIsBorderBox = true,
    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
    styles = getStyles( elem ),
    isBorderBox = jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

  // some non-html elements return undefined for offsetWidth, so check for null/undefined
  // svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
  // MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
  if ( val <= 0 || val == null ) {
    // Fall back to computed then uncomputed css if necessary
    val = curCSS( elem, name, styles );
    if ( val < 0 || val == null ) {
      val = elem.style[ name ];
    }

    // Computed unit is not pixels. Stop here and return.
    if ( rnumnonpx.test(val) ) {
      return val;
    }

    // we need the check for style in case a browser which returns unreliable values
    // for getComputedStyle silently falls back to the reliable elem.style
    valueIsBorderBox = isBorderBox && ( jQuery.support.boxSizingReliable || val === elem.style[ name ] );

    // Normalize "", auto, and prepare for extra
    val = parseFloat( val ) || 0;
  }

  // use the active box-sizing model to add/subtract irrelevant styles
  return ( val +
    augmentWidthOrHeight(
      elem,
      name,
      extra || ( isBorderBox ? "border" : "content" ),
      valueIsBorderBox,
      styles
    )
  ) + "px";
}

// Try to determine the default display value of an element
function css_defaultDisplay( nodeName ) {
  var doc = document,
    display = elemdisplay[ nodeName ];

  if ( !display ) {
    display = actualDisplay( nodeName, doc );

    // If the simple way fails, read from inside an iframe
    if ( display === "none" || !display ) {
      // Use the already-created iframe if possible
      iframe = ( iframe ||
        jQuery("<iframe frameborder='0' width='0' height='0'/>")
        .css( "cssText", "display:block !important" )
      ).appendTo( doc.documentElement );

      // Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
      doc = ( iframe[0].contentWindow || iframe[0].contentDocument ).document;
      doc.write("<!doctype html><html><body>");
      doc.close();

      display = actualDisplay( nodeName, doc );
      iframe.detach();
    }

    // Store the correct default display
    elemdisplay[ nodeName ] = display;
  }

  return display;
}

// Called ONLY from within css_defaultDisplay
function actualDisplay( name, doc ) {
  var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
    display = jQuery.css( elem[0], "display" );
  elem.remove();
  return display;
}

jQuery.each([ "height", "width" ], function( i, name ) {
  jQuery.cssHooks[ name ] = {
    get: function( elem, computed, extra ) {
      if ( computed ) {
        // certain elements can have dimension info if we invisibly show them
        // however, it must have a current display style that would benefit from this
        return elem.offsetWidth === 0 && rdisplayswap.test( jQuery.css( elem, "display" ) ) ?
          jQuery.swap( elem, cssShow, function() {
            return getWidthOrHeight( elem, name, extra );
          }) :
          getWidthOrHeight( elem, name, extra );
      }
    },

    set: function( elem, value, extra ) {
      var styles = extra && getStyles( elem );
      return setPositiveNumber( elem, value, extra ?
        augmentWidthOrHeight(
          elem,
          name,
          extra,
          jQuery.support.boxSizing && jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
          styles
        ) : 0
      );
    }
  };
});

if ( !jQuery.support.opacity ) {
  jQuery.cssHooks.opacity = {
    get: function( elem, computed ) {
      // IE uses filters for opacity
      return ropacity.test( (computed && elem.currentStyle ? elem.currentStyle.filter : elem.style.filter) || "" ) ?
        ( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
        computed ? "1" : "";
    },

    set: function( elem, value ) {
      var style = elem.style,
        currentStyle = elem.currentStyle,
        opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
        filter = currentStyle && currentStyle.filter || style.filter || "";

      // IE has trouble with opacity if it does not have layout
      // Force it by setting the zoom level
      style.zoom = 1;

      // if setting opacity to 1, and no other filters exist - attempt to remove filter attribute #6652
      // if value === "", then remove inline opacity #12685
      if ( ( value >= 1 || value === "" ) &&
          jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
          style.removeAttribute ) {

        // Setting style.filter to null, "" & " " still leave "filter:" in the cssText
        // if "filter:" is present at all, clearType is disabled, we want to avoid this
        // style.removeAttribute is IE Only, but so apparently is this code path...
        style.removeAttribute( "filter" );

        // if there is no filter style applied in a css rule or unset inline opacity, we are done
        if ( value === "" || currentStyle && !currentStyle.filter ) {
          return;
        }
      }

      // otherwise, set new filter values
      style.filter = ralpha.test( filter ) ?
        filter.replace( ralpha, opacity ) :
        filter + " " + opacity;
    }
  };
}

// These hooks cannot be added until DOM ready because the support test
// for it is not run until after DOM ready
jQuery(function() {
  if ( !jQuery.support.reliableMarginRight ) {
    jQuery.cssHooks.marginRight = {
      get: function( elem, computed ) {
        if ( computed ) {
          // WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
          // Work around by temporarily setting element display to inline-block
          return jQuery.swap( elem, { "display": "inline-block" },
            curCSS, [ elem, "marginRight" ] );
        }
      }
    };
  }

  // Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
  // getComputedStyle returns percent when specified for top/left/bottom/right
  // rather than make the css module depend on the offset module, we just check for it here
  if ( !jQuery.support.pixelPosition && jQuery.fn.position ) {
    jQuery.each( [ "top", "left" ], function( i, prop ) {
      jQuery.cssHooks[ prop ] = {
        get: function( elem, computed ) {
          if ( computed ) {
            computed = curCSS( elem, prop );
            // if curCSS returns percentage, fallback to offset
            return rnumnonpx.test( computed ) ?
              jQuery( elem ).position()[ prop ] + "px" :
              computed;
          }
        }
      };
    });
  }

});

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.hidden = function( elem ) {
    // Support: Opera <= 12.12
    // Opera reports offsetWidths and offsetHeights less than zero on some elements
    return elem.offsetWidth <= 0 && elem.offsetHeight <= 0 ||
      (!jQuery.support.reliableHiddenOffsets && ((elem.style && elem.style.display) || jQuery.css( elem, "display" )) === "none");
  };

  jQuery.expr.filters.visible = function( elem ) {
    return !jQuery.expr.filters.hidden( elem );
  };
}

// These hooks are used by animate to expand properties
jQuery.each({
  margin: "",
  padding: "",
  border: "Width"
}, function( prefix, suffix ) {
  jQuery.cssHooks[ prefix + suffix ] = {
    expand: function( value ) {
      var i = 0,
        expanded = {},

        // assumes a single number if not a string
        parts = typeof value === "string" ? value.split(" ") : [ value ];

      for ( ; i < 4; i++ ) {
        expanded[ prefix + cssExpand[ i ] + suffix ] =
          parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
      }

      return expanded;
    }
  };

  if ( !rmargin.test( prefix ) ) {
    jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
  }
});
var r20 = /%20/g,
  rbracket = /\[\]$/,
  rCRLF = /\r?\n/g,
  rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
  rsubmittable = /^(?:input|select|textarea|keygen)/i;

jQuery.fn.extend({
  serialize: function() {
    return jQuery.param( this.serializeArray() );
  },
  serializeArray: function() {
    return this.map(function(){
      // Can add propHook for "elements" to filter or add form elements
      var elements = jQuery.prop( this, "elements" );
      return elements ? jQuery.makeArray( elements ) : this;
    })
    .filter(function(){
      var type = this.type;
      // Use .is(":disabled") so that fieldset[disabled] works
      return this.name && !jQuery( this ).is( ":disabled" ) &&
        rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
        ( this.checked || !manipulation_rcheckableType.test( type ) );
    })
    .map(function( i, elem ){
      var val = jQuery( this ).val();

      return val == null ?
        null :
        jQuery.isArray( val ) ?
          jQuery.map( val, function( val ){
            return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
          }) :
          { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
    }).get();
  }
});

//Serialize an array of form elements or a set of
//key/values into a query string
jQuery.param = function( a, traditional ) {
  var prefix,
    s = [],
    add = function( key, value ) {
      // If value is a function, invoke it and return its value
      value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
      s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
    };

  // Set traditional to true for jQuery <= 1.3.2 behavior.
  if ( traditional === undefined ) {
    traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
  }

  // If an array was passed in, assume that it is an array of form elements.
  if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
    // Serialize the form elements
    jQuery.each( a, function() {
      add( this.name, this.value );
    });

  } else {
    // If traditional, encode the "old" way (the way 1.3.2 or older
    // did it), otherwise encode params recursively.
    for ( prefix in a ) {
      buildParams( prefix, a[ prefix ], traditional, add );
    }
  }

  // Return the resulting serialization
  return s.join( "&" ).replace( r20, "+" );
};

function buildParams( prefix, obj, traditional, add ) {
  var name;

  if ( jQuery.isArray( obj ) ) {
    // Serialize array item.
    jQuery.each( obj, function( i, v ) {
      if ( traditional || rbracket.test( prefix ) ) {
        // Treat each array item as a scalar.
        add( prefix, v );

      } else {
        // Item is non-scalar (array or object), encode its numeric index.
        buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
      }
    });

  } else if ( !traditional && jQuery.type( obj ) === "object" ) {
    // Serialize object item.
    for ( name in obj ) {
      buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
    }

  } else {
    // Serialize scalar item.
    add( prefix, obj );
  }
}
jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
  "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
  "change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

  // Handle event binding
  jQuery.fn[ name ] = function( data, fn ) {
    return arguments.length > 0 ?
      this.on( name, null, data, fn ) :
      this.trigger( name );
  };
});

jQuery.fn.hover = function( fnOver, fnOut ) {
  return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
};
var
  // Document location
  ajaxLocParts,
  ajaxLocation,
  ajax_nonce = jQuery.now(),

  ajax_rquery = /\?/,
  rhash = /#.*$/,
  rts = /([?&])_=[^&]*/,
  rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, // IE leaves an \r character at EOL
  // #7653, #8125, #8152: local protocol detection
  rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
  rnoContent = /^(?:GET|HEAD)$/,
  rprotocol = /^\/\//,
  rurl = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,

  // Keep a copy of the old load method
  _load = jQuery.fn.load,

  /* Prefilters
   * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
   * 2) These are called:
   *    - BEFORE asking for a transport
   *    - AFTER param serialization (s.data is a string if s.processData is true)
   * 3) key is the dataType
   * 4) the catchall symbol "*" can be used
   * 5) execution will start with transport dataType and THEN continue down to "*" if needed
   */
  prefilters = {},

  /* Transports bindings
   * 1) key is the dataType
   * 2) the catchall symbol "*" can be used
   * 3) selection will start with transport dataType and THEN go to "*" if needed
   */
  transports = {},

  // Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
  allTypes = "*/".concat("*");

// #8138, IE may throw an exception when accessing
// a field from window.location if document.domain has been set
try {
  ajaxLocation = location.href;
} catch( e ) {
  // Use the href attribute of an A element
  // since IE will modify it given document.location
  ajaxLocation = document.createElement( "a" );
  ajaxLocation.href = "";
  ajaxLocation = ajaxLocation.href;
}

// Segment location into parts
ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

  // dataTypeExpression is optional and defaults to "*"
  return function( dataTypeExpression, func ) {

    if ( typeof dataTypeExpression !== "string" ) {
      func = dataTypeExpression;
      dataTypeExpression = "*";
    }

    var dataType,
      i = 0,
      dataTypes = dataTypeExpression.toLowerCase().match( core_rnotwhite ) || [];

    if ( jQuery.isFunction( func ) ) {
      // For each dataType in the dataTypeExpression
      while ( (dataType = dataTypes[i++]) ) {
        // Prepend if requested
        if ( dataType[0] === "+" ) {
          dataType = dataType.slice( 1 ) || "*";
          (structure[ dataType ] = structure[ dataType ] || []).unshift( func );

        // Otherwise append
        } else {
          (structure[ dataType ] = structure[ dataType ] || []).push( func );
        }
      }
    }
  };
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

  var inspected = {},
    seekingTransport = ( structure === transports );

  function inspect( dataType ) {
    var selected;
    inspected[ dataType ] = true;
    jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
      var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
      if( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
        options.dataTypes.unshift( dataTypeOrTransport );
        inspect( dataTypeOrTransport );
        return false;
      } else if ( seekingTransport ) {
        return !( selected = dataTypeOrTransport );
      }
    });
    return selected;
  }

  return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
  var deep, key,
    flatOptions = jQuery.ajaxSettings.flatOptions || {};

  for ( key in src ) {
    if ( src[ key ] !== undefined ) {
      ( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
    }
  }
  if ( deep ) {
    jQuery.extend( true, target, deep );
  }

  return target;
}

jQuery.fn.load = function( url, params, callback ) {
  if ( typeof url !== "string" && _load ) {
    return _load.apply( this, arguments );
  }

  var selector, response, type,
    self = this,
    off = url.indexOf(" ");

  if ( off >= 0 ) {
    selector = url.slice( off, url.length );
    url = url.slice( 0, off );
  }

  // If it's a function
  if ( jQuery.isFunction( params ) ) {

    // We assume that it's the callback
    callback = params;
    params = undefined;

  // Otherwise, build a param string
  } else if ( params && typeof params === "object" ) {
    type = "POST";
  }

  // If we have elements to modify, make the request
  if ( self.length > 0 ) {
    jQuery.ajax({
      url: url,

      // if "type" variable is undefined, then "GET" method will be used
      type: type,
      dataType: "html",
      data: params
    }).done(function( responseText ) {

      // Save response for use in complete callback
      response = arguments;

      self.html( selector ?

        // If a selector was specified, locate the right elements in a dummy div
        // Exclude scripts to avoid IE 'Permission Denied' errors
        jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

        // Otherwise use the full result
        responseText );

    }).complete( callback && function( jqXHR, status ) {
      self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
    });
  }

  return this;
};

// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ){
  jQuery.fn[ type ] = function( fn ){
    return this.on( type, fn );
  };
});

jQuery.each( [ "get", "post" ], function( i, method ) {
  jQuery[ method ] = function( url, data, callback, type ) {
    // shift arguments if data argument was omitted
    if ( jQuery.isFunction( data ) ) {
      type = type || callback;
      callback = data;
      data = undefined;
    }

    return jQuery.ajax({
      url: url,
      type: method,
      dataType: type,
      data: data,
      success: callback
    });
  };
});

jQuery.extend({

  // Counter for holding the number of active queries
  active: 0,

  // Last-Modified header cache for next request
  lastModified: {},
  etag: {},

  ajaxSettings: {
    url: ajaxLocation,
    type: "GET",
    isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
    global: true,
    processData: true,
    async: true,
    contentType: "application/x-www-form-urlencoded; charset=UTF-8",
    /*
    timeout: 0,
    data: null,
    dataType: null,
    username: null,
    password: null,
    cache: null,
    throws: false,
    traditional: false,
    headers: {},
    */

    accepts: {
      "*": allTypes,
      text: "text/plain",
      html: "text/html",
      xml: "application/xml, text/xml",
      json: "application/json, text/javascript"
    },

    contents: {
      xml: /xml/,
      html: /html/,
      json: /json/
    },

    responseFields: {
      xml: "responseXML",
      text: "responseText"
    },

    // Data converters
    // Keys separate source (or catchall "*") and destination types with a single space
    converters: {

      // Convert anything to text
      "* text": window.String,

      // Text to html (true = no transformation)
      "text html": true,

      // Evaluate text as a json expression
      "text json": jQuery.parseJSON,

      // Parse text as xml
      "text xml": jQuery.parseXML
    },

    // For options that shouldn't be deep extended:
    // you can add your own custom options here if
    // and when you create one that shouldn't be
    // deep extended (see ajaxExtend)
    flatOptions: {
      url: true,
      context: true
    }
  },

  // Creates a full fledged settings object into target
  // with both ajaxSettings and settings fields.
  // If target is omitted, writes into ajaxSettings.
  ajaxSetup: function( target, settings ) {
    return settings ?

      // Building a settings object
      ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

      // Extending ajaxSettings
      ajaxExtend( jQuery.ajaxSettings, target );
  },

  ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
  ajaxTransport: addToPrefiltersOrTransports( transports ),

  // Main method
  ajax: function( url, options ) {

    // If url is an object, simulate pre-1.5 signature
    if ( typeof url === "object" ) {
      options = url;
      url = undefined;
    }

    // Force options to be an object
    options = options || {};

    var // Cross-domain detection vars
      parts,
      // Loop variable
      i,
      // URL without anti-cache param
      cacheURL,
      // Response headers as string
      responseHeadersString,
      // timeout handle
      timeoutTimer,

      // To know if global events are to be dispatched
      fireGlobals,

      transport,
      // Response headers
      responseHeaders,
      // Create the final options object
      s = jQuery.ajaxSetup( {}, options ),
      // Callbacks context
      callbackContext = s.context || s,
      // Context for global events is callbackContext if it is a DOM node or jQuery collection
      globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
        jQuery( callbackContext ) :
        jQuery.event,
      // Deferreds
      deferred = jQuery.Deferred(),
      completeDeferred = jQuery.Callbacks("once memory"),
      // Status-dependent callbacks
      statusCode = s.statusCode || {},
      // Headers (they are sent all at once)
      requestHeaders = {},
      requestHeadersNames = {},
      // The jqXHR state
      state = 0,
      // Default abort message
      strAbort = "canceled",
      // Fake xhr
      jqXHR = {
        readyState: 0,

        // Builds headers hashtable if needed
        getResponseHeader: function( key ) {
          var match;
          if ( state === 2 ) {
            if ( !responseHeaders ) {
              responseHeaders = {};
              while ( (match = rheaders.exec( responseHeadersString )) ) {
                responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
              }
            }
            match = responseHeaders[ key.toLowerCase() ];
          }
          return match == null ? null : match;
        },

        // Raw string
        getAllResponseHeaders: function() {
          return state === 2 ? responseHeadersString : null;
        },

        // Caches the header
        setRequestHeader: function( name, value ) {
          var lname = name.toLowerCase();
          if ( !state ) {
            name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
            requestHeaders[ name ] = value;
          }
          return this;
        },

        // Overrides response content-type header
        overrideMimeType: function( type ) {
          if ( !state ) {
            s.mimeType = type;
          }
          return this;
        },

        // Status-dependent callbacks
        statusCode: function( map ) {
          var code;
          if ( map ) {
            if ( state < 2 ) {
              for ( code in map ) {
                // Lazy-add the new callback in a way that preserves old ones
                statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
              }
            } else {
              // Execute the appropriate callbacks
              jqXHR.always( map[ jqXHR.status ] );
            }
          }
          return this;
        },

        // Cancel the request
        abort: function( statusText ) {
          var finalText = statusText || strAbort;
          if ( transport ) {
            transport.abort( finalText );
          }
          done( 0, finalText );
          return this;
        }
      };

    // Attach deferreds
    deferred.promise( jqXHR ).complete = completeDeferred.add;
    jqXHR.success = jqXHR.done;
    jqXHR.error = jqXHR.fail;

    // Remove hash character (#7531: and string promotion)
    // Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
    // Handle falsy url in the settings object (#10093: consistency with old signature)
    // We also use the url parameter if available
    s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" ).replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

    // Alias method option to type as per ticket #12004
    s.type = options.method || options.type || s.method || s.type;

    // Extract dataTypes list
    s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( core_rnotwhite ) || [""];

    // A cross-domain request is in order when we have a protocol:host:port mismatch
    if ( s.crossDomain == null ) {
      parts = rurl.exec( s.url.toLowerCase() );
      s.crossDomain = !!( parts &&
        ( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
          ( parts[ 3 ] || ( parts[ 1 ] === "http:" ? 80 : 443 ) ) !=
            ( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? 80 : 443 ) ) )
      );
    }

    // Convert data if not already a string
    if ( s.data && s.processData && typeof s.data !== "string" ) {
      s.data = jQuery.param( s.data, s.traditional );
    }

    // Apply prefilters
    inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

    // If request was aborted inside a prefilter, stop there
    if ( state === 2 ) {
      return jqXHR;
    }

    // We can fire global events as of now if asked to
    fireGlobals = s.global;

    // Watch for a new set of requests
    if ( fireGlobals && jQuery.active++ === 0 ) {
      jQuery.event.trigger("ajaxStart");
    }

    // Uppercase the type
    s.type = s.type.toUpperCase();

    // Determine if request has content
    s.hasContent = !rnoContent.test( s.type );

    // Save the URL in case we're toying with the If-Modified-Since
    // and/or If-None-Match header later on
    cacheURL = s.url;

    // More options handling for requests with no content
    if ( !s.hasContent ) {

      // If data is available, append data to url
      if ( s.data ) {
        cacheURL = ( s.url += ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
        // #9682: remove data so that it's not used in an eventual retry
        delete s.data;
      }

      // Add anti-cache in url if needed
      if ( s.cache === false ) {
        s.url = rts.test( cacheURL ) ?

          // If there is already a '_' parameter, set its value
          cacheURL.replace( rts, "$1_=" + ajax_nonce++ ) :

          // Otherwise add one to the end
          cacheURL + ( ajax_rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ajax_nonce++;
      }
    }

    // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
    if ( s.ifModified ) {
      if ( jQuery.lastModified[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
      }
      if ( jQuery.etag[ cacheURL ] ) {
        jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
      }
    }

    // Set the correct header, if data is being sent
    if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
      jqXHR.setRequestHeader( "Content-Type", s.contentType );
    }

    // Set the Accepts header for the server, depending on the dataType
    jqXHR.setRequestHeader(
      "Accept",
      s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
        s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
        s.accepts[ "*" ]
    );

    // Check for headers option
    for ( i in s.headers ) {
      jqXHR.setRequestHeader( i, s.headers[ i ] );
    }

    // Allow custom headers/mimetypes and early abort
    if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
      // Abort if not done already and return
      return jqXHR.abort();
    }

    // aborting is no longer a cancellation
    strAbort = "abort";

    // Install callbacks on deferreds
    for ( i in { success: 1, error: 1, complete: 1 } ) {
      jqXHR[ i ]( s[ i ] );
    }

    // Get transport
    transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

    // If no transport, we auto-abort
    if ( !transport ) {
      done( -1, "No Transport" );
    } else {
      jqXHR.readyState = 1;

      // Send global event
      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
      }
      // Timeout
      if ( s.async && s.timeout > 0 ) {
        timeoutTimer = setTimeout(function() {
          jqXHR.abort("timeout");
        }, s.timeout );
      }

      try {
        state = 1;
        transport.send( requestHeaders, done );
      } catch ( e ) {
        // Propagate exception as error if not done
        if ( state < 2 ) {
          done( -1, e );
        // Simply rethrow otherwise
        } else {
          throw e;
        }
      }
    }

    // Callback for when everything is done
    function done( status, nativeStatusText, responses, headers ) {
      var isSuccess, success, error, response, modified,
        statusText = nativeStatusText;

      // Called once
      if ( state === 2 ) {
        return;
      }

      // State is "done" now
      state = 2;

      // Clear timeout if it exists
      if ( timeoutTimer ) {
        clearTimeout( timeoutTimer );
      }

      // Dereference transport for early garbage collection
      // (no matter how long the jqXHR object will be used)
      transport = undefined;

      // Cache response headers
      responseHeadersString = headers || "";

      // Set readyState
      jqXHR.readyState = status > 0 ? 4 : 0;

      // Get response data
      if ( responses ) {
        response = ajaxHandleResponses( s, jqXHR, responses );
      }

      // If successful, handle type chaining
      if ( status >= 200 && status < 300 || status === 304 ) {

        // Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
        if ( s.ifModified ) {
          modified = jqXHR.getResponseHeader("Last-Modified");
          if ( modified ) {
            jQuery.lastModified[ cacheURL ] = modified;
          }
          modified = jqXHR.getResponseHeader("etag");
          if ( modified ) {
            jQuery.etag[ cacheURL ] = modified;
          }
        }

        // if no content
        if ( status === 204 ) {
          isSuccess = true;
          statusText = "nocontent";

        // if not modified
        } else if ( status === 304 ) {
          isSuccess = true;
          statusText = "notmodified";

        // If we have data, let's convert it
        } else {
          isSuccess = ajaxConvert( s, response );
          statusText = isSuccess.state;
          success = isSuccess.data;
          error = isSuccess.error;
          isSuccess = !error;
        }
      } else {
        // We extract error from statusText
        // then normalize statusText and status for non-aborts
        error = statusText;
        if ( status || !statusText ) {
          statusText = "error";
          if ( status < 0 ) {
            status = 0;
          }
        }
      }

      // Set data for the fake xhr object
      jqXHR.status = status;
      jqXHR.statusText = ( nativeStatusText || statusText ) + "";

      // Success/Error
      if ( isSuccess ) {
        deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
      } else {
        deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
      }

      // Status-dependent callbacks
      jqXHR.statusCode( statusCode );
      statusCode = undefined;

      if ( fireGlobals ) {
        globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
          [ jqXHR, s, isSuccess ? success : error ] );
      }

      // Complete
      completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

      if ( fireGlobals ) {
        globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
        // Handle the global AJAX counter
        if ( !( --jQuery.active ) ) {
          jQuery.event.trigger("ajaxStop");
        }
      }
    }

    return jqXHR;
  },

  getScript: function( url, callback ) {
    return jQuery.get( url, undefined, callback, "script" );
  },

  getJSON: function( url, data, callback ) {
    return jQuery.get( url, data, callback, "json" );
  }
});

/* Handles responses to an ajax request:
 * - sets all responseXXX fields accordingly
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
  var firstDataType, ct, finalDataType, type,
    contents = s.contents,
    dataTypes = s.dataTypes,
    responseFields = s.responseFields;

  // Fill responseXXX fields
  for ( type in responseFields ) {
    if ( type in responses ) {
      jqXHR[ responseFields[type] ] = responses[ type ];
    }
  }

  // Remove auto dataType and get content-type in the process
  while( dataTypes[ 0 ] === "*" ) {
    dataTypes.shift();
    if ( ct === undefined ) {
      ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
    }
  }

  // Check if we're dealing with a known content-type
  if ( ct ) {
    for ( type in contents ) {
      if ( contents[ type ] && contents[ type ].test( ct ) ) {
        dataTypes.unshift( type );
        break;
      }
    }
  }

  // Check to see if we have a response for the expected dataType
  if ( dataTypes[ 0 ] in responses ) {
    finalDataType = dataTypes[ 0 ];
  } else {
    // Try convertible dataTypes
    for ( type in responses ) {
      if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
        finalDataType = type;
        break;
      }
      if ( !firstDataType ) {
        firstDataType = type;
      }
    }
    // Or just use first one
    finalDataType = finalDataType || firstDataType;
  }

  // If we found a dataType
  // We add the dataType to the list if needed
  // and return the corresponding response
  if ( finalDataType ) {
    if ( finalDataType !== dataTypes[ 0 ] ) {
      dataTypes.unshift( finalDataType );
    }
    return responses[ finalDataType ];
  }
}

// Chain conversions given the request and the original response
function ajaxConvert( s, response ) {
  var conv2, current, conv, tmp,
    converters = {},
    i = 0,
    // Work with a copy of dataTypes in case we need to modify it for conversion
    dataTypes = s.dataTypes.slice(),
    prev = dataTypes[ 0 ];

  // Apply the dataFilter if provided
  if ( s.dataFilter ) {
    response = s.dataFilter( response, s.dataType );
  }

  // Create converters map with lowercased keys
  if ( dataTypes[ 1 ] ) {
    for ( conv in s.converters ) {
      converters[ conv.toLowerCase() ] = s.converters[ conv ];
    }
  }

  // Convert to each sequential dataType, tolerating list modification
  for ( ; (current = dataTypes[++i]); ) {

    // There's only work to do if current dataType is non-auto
    if ( current !== "*" ) {

      // Convert response if prev dataType is non-auto and differs from current
      if ( prev !== "*" && prev !== current ) {

        // Seek a direct converter
        conv = converters[ prev + " " + current ] || converters[ "* " + current ];

        // If none found, seek a pair
        if ( !conv ) {
          for ( conv2 in converters ) {

            // If conv2 outputs current
            tmp = conv2.split(" ");
            if ( tmp[ 1 ] === current ) {

              // If prev can be converted to accepted input
              conv = converters[ prev + " " + tmp[ 0 ] ] ||
                converters[ "* " + tmp[ 0 ] ];
              if ( conv ) {
                // Condense equivalence converters
                if ( conv === true ) {
                  conv = converters[ conv2 ];

                // Otherwise, insert the intermediate dataType
                } else if ( converters[ conv2 ] !== true ) {
                  current = tmp[ 0 ];
                  dataTypes.splice( i--, 0, current );
                }

                break;
              }
            }
          }
        }

        // Apply converter (if not an equivalence)
        if ( conv !== true ) {

          // Unless errors are allowed to bubble, catch and return them
          if ( conv && s["throws"] ) {
            response = conv( response );
          } else {
            try {
              response = conv( response );
            } catch ( e ) {
              return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
            }
          }
        }
      }

      // Update prev for next iteration
      prev = current;
    }
  }

  return { state: "success", data: response };
}
// Install script dataType
jQuery.ajaxSetup({
  accepts: {
    script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
  },
  contents: {
    script: /(?:java|ecma)script/
  },
  converters: {
    "text script": function( text ) {
      jQuery.globalEval( text );
      return text;
    }
  }
});

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
  if ( s.cache === undefined ) {
    s.cache = false;
  }
  if ( s.crossDomain ) {
    s.type = "GET";
    s.global = false;
  }
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function(s) {

  // This transport only deals with cross domain requests
  if ( s.crossDomain ) {

    var script,
      head = document.head || jQuery("head")[0] || document.documentElement;

    return {

      send: function( _, callback ) {

        script = document.createElement("script");

        script.async = true;

        if ( s.scriptCharset ) {
          script.charset = s.scriptCharset;
        }

        script.src = s.url;

        // Attach handlers for all browsers
        script.onload = script.onreadystatechange = function( _, isAbort ) {

          if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

            // Handle memory leak in IE
            script.onload = script.onreadystatechange = null;

            // Remove the script
            if ( script.parentNode ) {
              script.parentNode.removeChild( script );
            }

            // Dereference the script
            script = null;

            // Callback if not abort
            if ( !isAbort ) {
              callback( 200, "success" );
            }
          }
        };

        // Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
        // Use native DOM manipulation to avoid our domManip AJAX trickery
        head.insertBefore( script, head.firstChild );
      },

      abort: function() {
        if ( script ) {
          script.onload( undefined, true );
        }
      }
    };
  }
});
var oldCallbacks = [],
  rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
  jsonp: "callback",
  jsonpCallback: function() {
    var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( ajax_nonce++ ) );
    this[ callback ] = true;
    return callback;
  }
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

  var callbackName, overwritten, responseContainer,
    jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
      "url" :
      typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
    );

  // Handle iff the expected data type is "jsonp" or we have a parameter to set
  if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

    // Get callback name, remembering preexisting value associated with it
    callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
      s.jsonpCallback() :
      s.jsonpCallback;

    // Insert callback into url or form data
    if ( jsonProp ) {
      s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
    } else if ( s.jsonp !== false ) {
      s.url += ( ajax_rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
    }

    // Use data converter to retrieve json after script execution
    s.converters["script json"] = function() {
      if ( !responseContainer ) {
        jQuery.error( callbackName + " was not called" );
      }
      return responseContainer[ 0 ];
    };

    // force json dataType
    s.dataTypes[ 0 ] = "json";

    // Install callback
    overwritten = window[ callbackName ];
    window[ callbackName ] = function() {
      responseContainer = arguments;
    };

    // Clean-up function (fires after converters)
    jqXHR.always(function() {
      // Restore preexisting value
      window[ callbackName ] = overwritten;

      // Save back as free
      if ( s[ callbackName ] ) {
        // make sure that re-using the options doesn't screw things around
        s.jsonpCallback = originalSettings.jsonpCallback;

        // save the callback name for future use
        oldCallbacks.push( callbackName );
      }

      // Call if it was a function and we have a response
      if ( responseContainer && jQuery.isFunction( overwritten ) ) {
        overwritten( responseContainer[ 0 ] );
      }

      responseContainer = overwritten = undefined;
    });

    // Delegate to script
    return "script";
  }
});
var xhrCallbacks, xhrSupported,
  xhrId = 0,
  // #5280: Internet Explorer will keep connections alive if we don't abort on unload
  xhrOnUnloadAbort = window.ActiveXObject && function() {
    // Abort all pending requests
    var key;
    for ( key in xhrCallbacks ) {
      xhrCallbacks[ key ]( undefined, true );
    }
  };

// Functions to create xhrs
function createStandardXHR() {
  try {
    return new window.XMLHttpRequest();
  } catch( e ) {}
}

function createActiveXHR() {
  try {
    return new window.ActiveXObject("Microsoft.XMLHTTP");
  } catch( e ) {}
}

// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject ?
  /* Microsoft failed to properly
   * implement the XMLHttpRequest in IE7 (can't request local files),
   * so we use the ActiveXObject when it is available
   * Additionally XMLHttpRequest can be disabled in IE7/IE8 so
   * we need a fallback.
   */
  function() {
    return !this.isLocal && createStandardXHR() || createActiveXHR();
  } :
  // For all other browsers, use the standard XMLHttpRequest object
  createStandardXHR;

// Determine support properties
xhrSupported = jQuery.ajaxSettings.xhr();
jQuery.support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = jQuery.support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

  jQuery.ajaxTransport(function( s ) {
    // Cross domain only allowed if supported through XMLHttpRequest
    if ( !s.crossDomain || jQuery.support.cors ) {

      var callback;

      return {
        send: function( headers, complete ) {

          // Get a new xhr
          var handle, i,
            xhr = s.xhr();

          // Open the socket
          // Passing null username, generates a login popup on Opera (#2865)
          if ( s.username ) {
            xhr.open( s.type, s.url, s.async, s.username, s.password );
          } else {
            xhr.open( s.type, s.url, s.async );
          }

          // Apply custom fields if provided
          if ( s.xhrFields ) {
            for ( i in s.xhrFields ) {
              xhr[ i ] = s.xhrFields[ i ];
            }
          }

          // Override mime type if needed
          if ( s.mimeType && xhr.overrideMimeType ) {
            xhr.overrideMimeType( s.mimeType );
          }

          // X-Requested-With header
          // For cross-domain requests, seeing as conditions for a preflight are
          // akin to a jigsaw puzzle, we simply never set it to be sure.
          // (it can always be set on a per-request basis or even using ajaxSetup)
          // For same-domain requests, won't change header if already provided.
          if ( !s.crossDomain && !headers["X-Requested-With"] ) {
            headers["X-Requested-With"] = "XMLHttpRequest";
          }

          // Need an extra try/catch for cross domain requests in Firefox 3
          try {
            for ( i in headers ) {
              xhr.setRequestHeader( i, headers[ i ] );
            }
          } catch( err ) {}

          // Do send the request
          // This may raise an exception which is actually
          // handled in jQuery.ajax (so no try/catch here)
          xhr.send( ( s.hasContent && s.data ) || null );

          // Listener
          callback = function( _, isAbort ) {
            var status, responseHeaders, statusText, responses;

            // Firefox throws exceptions when accessing properties
            // of an xhr when a network error occurred
            // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
            try {

              // Was never called and is aborted or complete
              if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

                // Only called once
                callback = undefined;

                // Do not keep as active anymore
                if ( handle ) {
                  xhr.onreadystatechange = jQuery.noop;
                  if ( xhrOnUnloadAbort ) {
                    delete xhrCallbacks[ handle ];
                  }
                }

                // If it's an abort
                if ( isAbort ) {
                  // Abort it manually if needed
                  if ( xhr.readyState !== 4 ) {
                    xhr.abort();
                  }
                } else {
                  responses = {};
                  status = xhr.status;
                  responseHeaders = xhr.getAllResponseHeaders();

                  // When requesting binary data, IE6-9 will throw an exception
                  // on any attempt to access responseText (#11426)
                  if ( typeof xhr.responseText === "string" ) {
                    responses.text = xhr.responseText;
                  }

                  // Firefox throws an exception when accessing
                  // statusText for faulty cross-domain requests
                  try {
                    statusText = xhr.statusText;
                  } catch( e ) {
                    // We normalize with Webkit giving an empty statusText
                    statusText = "";
                  }

                  // Filter status for non standard behaviors

                  // If the request is local and we have data: assume a success
                  // (success with no data won't get notified, that's the best we
                  // can do given current implementations)
                  if ( !status && s.isLocal && !s.crossDomain ) {
                    status = responses.text ? 200 : 404;
                  // IE - #1450: sometimes returns 1223 when it should be 204
                  } else if ( status === 1223 ) {
                    status = 204;
                  }
                }
              }
            } catch( firefoxAccessException ) {
              if ( !isAbort ) {
                complete( -1, firefoxAccessException );
              }
            }

            // Call complete if needed
            if ( responses ) {
              complete( status, statusText, responses, responseHeaders );
            }
          };

          if ( !s.async ) {
            // if we're in sync mode we fire the callback
            callback();
          } else if ( xhr.readyState === 4 ) {
            // (IE6 & IE7) if it's in cache and has been
            // retrieved directly we need to fire the callback
            setTimeout( callback );
          } else {
            handle = ++xhrId;
            if ( xhrOnUnloadAbort ) {
              // Create the active xhrs callbacks list if needed
              // and attach the unload handler
              if ( !xhrCallbacks ) {
                xhrCallbacks = {};
                jQuery( window ).unload( xhrOnUnloadAbort );
              }
              // Add to list of active xhrs callbacks
              xhrCallbacks[ handle ] = callback;
            }
            xhr.onreadystatechange = callback;
          }
        },

        abort: function() {
          if ( callback ) {
            callback( undefined, true );
          }
        }
      };
    }
  });
}
var fxNow, timerId,
  rfxtypes = /^(?:toggle|show|hide)$/,
  rfxnum = new RegExp( "^(?:([+-])=|)(" + core_pnum + ")([a-z%]*)$", "i" ),
  rrun = /queueHooks$/,
  animationPrefilters = [ defaultPrefilter ],
  tweeners = {
    "*": [function( prop, value ) {
      var end, unit,
        tween = this.createTween( prop, value ),
        parts = rfxnum.exec( value ),
        target = tween.cur(),
        start = +target || 0,
        scale = 1,
        maxIterations = 20;

      if ( parts ) {
        end = +parts[2];
        unit = parts[3] || ( jQuery.cssNumber[ prop ] ? "" : "px" );

        // We need to compute starting value
        if ( unit !== "px" && start ) {
          // Iteratively approximate from a nonzero starting point
          // Prefer the current property, because this process will be trivial if it uses the same units
          // Fallback to end or a simple constant
          start = jQuery.css( tween.elem, prop, true ) || end || 1;

          do {
            // If previous iteration zeroed out, double until we get *something*
            // Use a string for doubling factor so we don't accidentally see scale as unchanged below
            scale = scale || ".5";

            // Adjust and apply
            start = start / scale;
            jQuery.style( tween.elem, prop, start + unit );

          // Update scale, tolerating zero or NaN from tween.cur()
          // And breaking the loop if scale is unchanged or perfect, or if we've just had enough
          } while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
        }

        tween.unit = unit;
        tween.start = start;
        // If a +=/-= token was provided, we're doing a relative animation
        tween.end = parts[1] ? start + ( parts[1] + 1 ) * end : end;
      }
      return tween;
    }]
  };

// Animations created synchronously will run synchronously
function createFxNow() {
  setTimeout(function() {
    fxNow = undefined;
  });
  return ( fxNow = jQuery.now() );
}

function createTweens( animation, props ) {
  jQuery.each( props, function( prop, value ) {
    var collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
      index = 0,
      length = collection.length;
    for ( ; index < length; index++ ) {
      if ( collection[ index ].call( animation, prop, value ) ) {

        // we're done with this property
        return;
      }
    }
  });
}

function Animation( elem, properties, options ) {
  var result,
    stopped,
    index = 0,
    length = animationPrefilters.length,
    deferred = jQuery.Deferred().always( function() {
      // don't match elem in the :animated selector
      delete tick.elem;
    }),
    tick = function() {
      if ( stopped ) {
        return false;
      }
      var currentTime = fxNow || createFxNow(),
        remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
        // archaic crash bug won't allow us to use 1 - ( 0.5 || 0 ) (#12497)
        temp = remaining / animation.duration || 0,
        percent = 1 - temp,
        index = 0,
        length = animation.tweens.length;

      for ( ; index < length ; index++ ) {
        animation.tweens[ index ].run( percent );
      }

      deferred.notifyWith( elem, [ animation, percent, remaining ]);

      if ( percent < 1 && length ) {
        return remaining;
      } else {
        deferred.resolveWith( elem, [ animation ] );
        return false;
      }
    },
    animation = deferred.promise({
      elem: elem,
      props: jQuery.extend( {}, properties ),
      opts: jQuery.extend( true, { specialEasing: {} }, options ),
      originalProperties: properties,
      originalOptions: options,
      startTime: fxNow || createFxNow(),
      duration: options.duration,
      tweens: [],
      createTween: function( prop, end ) {
        var tween = jQuery.Tween( elem, animation.opts, prop, end,
            animation.opts.specialEasing[ prop ] || animation.opts.easing );
        animation.tweens.push( tween );
        return tween;
      },
      stop: function( gotoEnd ) {
        var index = 0,
          // if we are going to the end, we want to run all the tweens
          // otherwise we skip this part
          length = gotoEnd ? animation.tweens.length : 0;
        if ( stopped ) {
          return this;
        }
        stopped = true;
        for ( ; index < length ; index++ ) {
          animation.tweens[ index ].run( 1 );
        }

        // resolve when we played the last frame
        // otherwise, reject
        if ( gotoEnd ) {
          deferred.resolveWith( elem, [ animation, gotoEnd ] );
        } else {
          deferred.rejectWith( elem, [ animation, gotoEnd ] );
        }
        return this;
      }
    }),
    props = animation.props;

  propFilter( props, animation.opts.specialEasing );

  for ( ; index < length ; index++ ) {
    result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
    if ( result ) {
      return result;
    }
  }

  createTweens( animation, props );

  if ( jQuery.isFunction( animation.opts.start ) ) {
    animation.opts.start.call( elem, animation );
  }

  jQuery.fx.timer(
    jQuery.extend( tick, {
      elem: elem,
      anim: animation,
      queue: animation.opts.queue
    })
  );

  // attach callbacks from options
  return animation.progress( animation.opts.progress )
    .done( animation.opts.done, animation.opts.complete )
    .fail( animation.opts.fail )
    .always( animation.opts.always );
}

function propFilter( props, specialEasing ) {
  var value, name, index, easing, hooks;

  // camelCase, specialEasing and expand cssHook pass
  for ( index in props ) {
    name = jQuery.camelCase( index );
    easing = specialEasing[ name ];
    value = props[ index ];
    if ( jQuery.isArray( value ) ) {
      easing = value[ 1 ];
      value = props[ index ] = value[ 0 ];
    }

    if ( index !== name ) {
      props[ name ] = value;
      delete props[ index ];
    }

    hooks = jQuery.cssHooks[ name ];
    if ( hooks && "expand" in hooks ) {
      value = hooks.expand( value );
      delete props[ name ];

      // not quite $.extend, this wont overwrite keys already present.
      // also - reusing 'index' from above because we have the correct "name"
      for ( index in value ) {
        if ( !( index in props ) ) {
          props[ index ] = value[ index ];
          specialEasing[ index ] = easing;
        }
      }
    } else {
      specialEasing[ name ] = easing;
    }
  }
}

jQuery.Animation = jQuery.extend( Animation, {

  tweener: function( props, callback ) {
    if ( jQuery.isFunction( props ) ) {
      callback = props;
      props = [ "*" ];
    } else {
      props = props.split(" ");
    }

    var prop,
      index = 0,
      length = props.length;

    for ( ; index < length ; index++ ) {
      prop = props[ index ];
      tweeners[ prop ] = tweeners[ prop ] || [];
      tweeners[ prop ].unshift( callback );
    }
  },

  prefilter: function( callback, prepend ) {
    if ( prepend ) {
      animationPrefilters.unshift( callback );
    } else {
      animationPrefilters.push( callback );
    }
  }
});

function defaultPrefilter( elem, props, opts ) {
  /*jshint validthis:true */
  var prop, index, length,
    value, dataShow, toggle,
    tween, hooks, oldfire,
    anim = this,
    style = elem.style,
    orig = {},
    handled = [],
    hidden = elem.nodeType && isHidden( elem );

  // handle queue: false promises
  if ( !opts.queue ) {
    hooks = jQuery._queueHooks( elem, "fx" );
    if ( hooks.unqueued == null ) {
      hooks.unqueued = 0;
      oldfire = hooks.empty.fire;
      hooks.empty.fire = function() {
        if ( !hooks.unqueued ) {
          oldfire();
        }
      };
    }
    hooks.unqueued++;

    anim.always(function() {
      // doing this makes sure that the complete handler will be called
      // before this completes
      anim.always(function() {
        hooks.unqueued--;
        if ( !jQuery.queue( elem, "fx" ).length ) {
          hooks.empty.fire();
        }
      });
    });
  }

  // height/width overflow pass
  if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
    // Make sure that nothing sneaks out
    // Record all 3 overflow attributes because IE does not
    // change the overflow attribute when overflowX and
    // overflowY are set to the same value
    opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

    // Set display property to inline-block for height/width
    // animations on inline elements that are having width/height animated
    if ( jQuery.css( elem, "display" ) === "inline" &&
        jQuery.css( elem, "float" ) === "none" ) {

      // inline-level elements accept inline-block;
      // block-level elements need to be inline with layout
      if ( !jQuery.support.inlineBlockNeedsLayout || css_defaultDisplay( elem.nodeName ) === "inline" ) {
        style.display = "inline-block";

      } else {
        style.zoom = 1;
      }
    }
  }

  if ( opts.overflow ) {
    style.overflow = "hidden";
    if ( !jQuery.support.shrinkWrapBlocks ) {
      anim.always(function() {
        style.overflow = opts.overflow[ 0 ];
        style.overflowX = opts.overflow[ 1 ];
        style.overflowY = opts.overflow[ 2 ];
      });
    }
  }


  // show/hide pass
  for ( index in props ) {
    value = props[ index ];
    if ( rfxtypes.exec( value ) ) {
      delete props[ index ];
      toggle = toggle || value === "toggle";
      if ( value === ( hidden ? "hide" : "show" ) ) {
        continue;
      }
      handled.push( index );
    }
  }

  length = handled.length;
  if ( length ) {
    dataShow = jQuery._data( elem, "fxshow" ) || jQuery._data( elem, "fxshow", {} );
    if ( "hidden" in dataShow ) {
      hidden = dataShow.hidden;
    }

    // store state if its toggle - enables .stop().toggle() to "reverse"
    if ( toggle ) {
      dataShow.hidden = !hidden;
    }
    if ( hidden ) {
      jQuery( elem ).show();
    } else {
      anim.done(function() {
        jQuery( elem ).hide();
      });
    }
    anim.done(function() {
      var prop;
      jQuery._removeData( elem, "fxshow" );
      for ( prop in orig ) {
        jQuery.style( elem, prop, orig[ prop ] );
      }
    });
    for ( index = 0 ; index < length ; index++ ) {
      prop = handled[ index ];
      tween = anim.createTween( prop, hidden ? dataShow[ prop ] : 0 );
      orig[ prop ] = dataShow[ prop ] || jQuery.style( elem, prop );

      if ( !( prop in dataShow ) ) {
        dataShow[ prop ] = tween.start;
        if ( hidden ) {
          tween.end = tween.start;
          tween.start = prop === "width" || prop === "height" ? 1 : 0;
        }
      }
    }
  }
}

function Tween( elem, options, prop, end, easing ) {
  return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
  constructor: Tween,
  init: function( elem, options, prop, end, easing, unit ) {
    this.elem = elem;
    this.prop = prop;
    this.easing = easing || "swing";
    this.options = options;
    this.start = this.now = this.cur();
    this.end = end;
    this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
  },
  cur: function() {
    var hooks = Tween.propHooks[ this.prop ];

    return hooks && hooks.get ?
      hooks.get( this ) :
      Tween.propHooks._default.get( this );
  },
  run: function( percent ) {
    var eased,
      hooks = Tween.propHooks[ this.prop ];

    if ( this.options.duration ) {
      this.pos = eased = jQuery.easing[ this.easing ](
        percent, this.options.duration * percent, 0, 1, this.options.duration
      );
    } else {
      this.pos = eased = percent;
    }
    this.now = ( this.end - this.start ) * eased + this.start;

    if ( this.options.step ) {
      this.options.step.call( this.elem, this.now, this );
    }

    if ( hooks && hooks.set ) {
      hooks.set( this );
    } else {
      Tween.propHooks._default.set( this );
    }
    return this;
  }
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
  _default: {
    get: function( tween ) {
      var result;

      if ( tween.elem[ tween.prop ] != null &&
        (!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
        return tween.elem[ tween.prop ];
      }

      // passing an empty string as a 3rd parameter to .css will automatically
      // attempt a parseFloat and fallback to a string if the parse fails
      // so, simple values such as "10px" are parsed to Float.
      // complex values such as "rotate(1rad)" are returned as is.
      result = jQuery.css( tween.elem, tween.prop, "" );
      // Empty strings, null, undefined and "auto" are converted to 0.
      return !result || result === "auto" ? 0 : result;
    },
    set: function( tween ) {
      // use step hook for back compat - use cssHook if its there - use .style if its
      // available and use plain properties where available
      if ( jQuery.fx.step[ tween.prop ] ) {
        jQuery.fx.step[ tween.prop ]( tween );
      } else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
        jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
      } else {
        tween.elem[ tween.prop ] = tween.now;
      }
    }
  }
};

// Remove in 2.0 - this supports IE8's panic based approach
// to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
  set: function( tween ) {
    if ( tween.elem.nodeType && tween.elem.parentNode ) {
      tween.elem[ tween.prop ] = tween.now;
    }
  }
};

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
  var cssFn = jQuery.fn[ name ];
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return speed == null || typeof speed === "boolean" ?
      cssFn.apply( this, arguments ) :
      this.animate( genFx( name, true ), speed, easing, callback );
  };
});

jQuery.fn.extend({
  fadeTo: function( speed, to, easing, callback ) {

    // show any hidden elements after setting opacity to 0
    return this.filter( isHidden ).css( "opacity", 0 ).show()

      // animate to the value specified
      .end().animate({ opacity: to }, speed, easing, callback );
  },
  animate: function( prop, speed, easing, callback ) {
    var empty = jQuery.isEmptyObject( prop ),
      optall = jQuery.speed( speed, easing, callback ),
      doAnimation = function() {
        // Operate on a copy of prop so per-property easing won't be lost
        var anim = Animation( this, jQuery.extend( {}, prop ), optall );
        doAnimation.finish = function() {
          anim.stop( true );
        };
        // Empty animations, or finishing resolves immediately
        if ( empty || jQuery._data( this, "finish" ) ) {
          anim.stop( true );
        }
      };
      doAnimation.finish = doAnimation;

    return empty || optall.queue === false ?
      this.each( doAnimation ) :
      this.queue( optall.queue, doAnimation );
  },
  stop: function( type, clearQueue, gotoEnd ) {
    var stopQueue = function( hooks ) {
      var stop = hooks.stop;
      delete hooks.stop;
      stop( gotoEnd );
    };

    if ( typeof type !== "string" ) {
      gotoEnd = clearQueue;
      clearQueue = type;
      type = undefined;
    }
    if ( clearQueue && type !== false ) {
      this.queue( type || "fx", [] );
    }

    return this.each(function() {
      var dequeue = true,
        index = type != null && type + "queueHooks",
        timers = jQuery.timers,
        data = jQuery._data( this );

      if ( index ) {
        if ( data[ index ] && data[ index ].stop ) {
          stopQueue( data[ index ] );
        }
      } else {
        for ( index in data ) {
          if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
            stopQueue( data[ index ] );
          }
        }
      }

      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
          timers[ index ].anim.stop( gotoEnd );
          dequeue = false;
          timers.splice( index, 1 );
        }
      }

      // start the next in the queue if the last step wasn't forced
      // timers currently will call their complete callbacks, which will dequeue
      // but only if they were gotoEnd
      if ( dequeue || !gotoEnd ) {
        jQuery.dequeue( this, type );
      }
    });
  },
  finish: function( type ) {
    if ( type !== false ) {
      type = type || "fx";
    }
    return this.each(function() {
      var index,
        data = jQuery._data( this ),
        queue = data[ type + "queue" ],
        hooks = data[ type + "queueHooks" ],
        timers = jQuery.timers,
        length = queue ? queue.length : 0;

      // enable finishing flag on private data
      data.finish = true;

      // empty the queue first
      jQuery.queue( this, type, [] );

      if ( hooks && hooks.cur && hooks.cur.finish ) {
        hooks.cur.finish.call( this );
      }

      // look for any active animations, and finish them
      for ( index = timers.length; index--; ) {
        if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
          timers[ index ].anim.stop( true );
          timers.splice( index, 1 );
        }
      }

      // look for any animations in the old queue and finish them
      for ( index = 0; index < length; index++ ) {
        if ( queue[ index ] && queue[ index ].finish ) {
          queue[ index ].finish.call( this );
        }
      }

      // turn off finishing flag
      delete data.finish;
    });
  }
});

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
  var which,
    attrs = { height: type },
    i = 0;

  // if we include width, step value is 1 to do all cssExpand values,
  // if we don't include width, step value is 2 to skip over Left and Right
  includeWidth = includeWidth? 1 : 0;
  for( ; i < 4 ; i += 2 - includeWidth ) {
    which = cssExpand[ i ];
    attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
  }

  if ( includeWidth ) {
    attrs.opacity = attrs.width = type;
  }

  return attrs;
}

// Generate shortcuts for custom animations
jQuery.each({
  slideDown: genFx("show"),
  slideUp: genFx("hide"),
  slideToggle: genFx("toggle"),
  fadeIn: { opacity: "show" },
  fadeOut: { opacity: "hide" },
  fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
  jQuery.fn[ name ] = function( speed, easing, callback ) {
    return this.animate( props, speed, easing, callback );
  };
});

jQuery.speed = function( speed, easing, fn ) {
  var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
    complete: fn || !fn && easing ||
      jQuery.isFunction( speed ) && speed,
    duration: speed,
    easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
  };

  opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
    opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

  // normalize opt.queue - true/undefined/null -> "fx"
  if ( opt.queue == null || opt.queue === true ) {
    opt.queue = "fx";
  }

  // Queueing
  opt.old = opt.complete;

  opt.complete = function() {
    if ( jQuery.isFunction( opt.old ) ) {
      opt.old.call( this );
    }

    if ( opt.queue ) {
      jQuery.dequeue( this, opt.queue );
    }
  };

  return opt;
};

jQuery.easing = {
  linear: function( p ) {
    return p;
  },
  swing: function( p ) {
    return 0.5 - Math.cos( p*Math.PI ) / 2;
  }
};

jQuery.timers = [];
jQuery.fx = Tween.prototype.init;
jQuery.fx.tick = function() {
  var timer,
    timers = jQuery.timers,
    i = 0;

  fxNow = jQuery.now();

  for ( ; i < timers.length; i++ ) {
    timer = timers[ i ];
    // Checks the timer has not already been removed
    if ( !timer() && timers[ i ] === timer ) {
      timers.splice( i--, 1 );
    }
  }

  if ( !timers.length ) {
    jQuery.fx.stop();
  }
  fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
  if ( timer() && jQuery.timers.push( timer ) ) {
    jQuery.fx.start();
  }
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
  if ( !timerId ) {
    timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
  }
};

jQuery.fx.stop = function() {
  clearInterval( timerId );
  timerId = null;
};

jQuery.fx.speeds = {
  slow: 600,
  fast: 200,
  // Default speed
  _default: 400
};

// Back Compat <1.8 extension point
jQuery.fx.step = {};

if ( jQuery.expr && jQuery.expr.filters ) {
  jQuery.expr.filters.animated = function( elem ) {
    return jQuery.grep(jQuery.timers, function( fn ) {
      return elem === fn.elem;
    }).length;
  };
}
jQuery.fn.offset = function( options ) {
  if ( arguments.length ) {
    return options === undefined ?
      this :
      this.each(function( i ) {
        jQuery.offset.setOffset( this, options, i );
      });
  }

  var docElem, win,
    box = { top: 0, left: 0 },
    elem = this[ 0 ],
    doc = elem && elem.ownerDocument;

  if ( !doc ) {
    return;
  }

  docElem = doc.documentElement;

  // Make sure it's not a disconnected DOM node
  if ( !jQuery.contains( docElem, elem ) ) {
    return box;
  }

  // If we don't have gBCR, just use 0,0 rather than error
  // BlackBerry 5, iOS 3 (original iPhone)
  if ( typeof elem.getBoundingClientRect !== core_strundefined ) {
    box = elem.getBoundingClientRect();
  }
  win = getWindow( doc );
  return {
    top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
    left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
  };
};

jQuery.offset = {

  setOffset: function( elem, options, i ) {
    var position = jQuery.css( elem, "position" );

    // set position first, in-case top/left are set even on static elem
    if ( position === "static" ) {
      elem.style.position = "relative";
    }

    var curElem = jQuery( elem ),
      curOffset = curElem.offset(),
      curCSSTop = jQuery.css( elem, "top" ),
      curCSSLeft = jQuery.css( elem, "left" ),
      calculatePosition = ( position === "absolute" || position === "fixed" ) && jQuery.inArray("auto", [curCSSTop, curCSSLeft]) > -1,
      props = {}, curPosition = {}, curTop, curLeft;

    // need to be able to calculate position if either top or left is auto and position is either absolute or fixed
    if ( calculatePosition ) {
      curPosition = curElem.position();
      curTop = curPosition.top;
      curLeft = curPosition.left;
    } else {
      curTop = parseFloat( curCSSTop ) || 0;
      curLeft = parseFloat( curCSSLeft ) || 0;
    }

    if ( jQuery.isFunction( options ) ) {
      options = options.call( elem, i, curOffset );
    }

    if ( options.top != null ) {
      props.top = ( options.top - curOffset.top ) + curTop;
    }
    if ( options.left != null ) {
      props.left = ( options.left - curOffset.left ) + curLeft;
    }

    if ( "using" in options ) {
      options.using.call( elem, props );
    } else {
      curElem.css( props );
    }
  }
};


jQuery.fn.extend({

  position: function() {
    if ( !this[ 0 ] ) {
      return;
    }

    var offsetParent, offset,
      parentOffset = { top: 0, left: 0 },
      elem = this[ 0 ];

    // fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is it's only offset parent
    if ( jQuery.css( elem, "position" ) === "fixed" ) {
      // we assume that getBoundingClientRect is available when computed position is fixed
      offset = elem.getBoundingClientRect();
    } else {
      // Get *real* offsetParent
      offsetParent = this.offsetParent();

      // Get correct offsets
      offset = this.offset();
      if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
        parentOffset = offsetParent.offset();
      }

      // Add offsetParent borders
      parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
      parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
    }

    // Subtract parent offsets and element margins
    // note: when an element has margin: auto the offsetLeft and marginLeft
    // are the same in Safari causing offset.left to incorrectly be 0
    return {
      top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
      left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true)
    };
  },

  offsetParent: function() {
    return this.map(function() {
      var offsetParent = this.offsetParent || document.documentElement;
      while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position") === "static" ) ) {
        offsetParent = offsetParent.offsetParent;
      }
      return offsetParent || document.documentElement;
    });
  }
});


// Create scrollLeft and scrollTop methods
jQuery.each( {scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function( method, prop ) {
  var top = /Y/.test( prop );

  jQuery.fn[ method ] = function( val ) {
    return jQuery.access( this, function( elem, method, val ) {
      var win = getWindow( elem );

      if ( val === undefined ) {
        return win ? (prop in win) ? win[ prop ] :
          win.document.documentElement[ method ] :
          elem[ method ];
      }

      if ( win ) {
        win.scrollTo(
          !top ? val : jQuery( win ).scrollLeft(),
          top ? val : jQuery( win ).scrollTop()
        );

      } else {
        elem[ method ] = val;
      }
    }, method, val, arguments.length, null );
  };
});

function getWindow( elem ) {
  return jQuery.isWindow( elem ) ?
    elem :
    elem.nodeType === 9 ?
      elem.defaultView || elem.parentWindow :
      false;
}
// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
  jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
    // margin is only for outerHeight, outerWidth
    jQuery.fn[ funcName ] = function( margin, value ) {
      var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
        extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

      return jQuery.access( this, function( elem, type, value ) {
        var doc;

        if ( jQuery.isWindow( elem ) ) {
          // As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
          // isn't a whole lot we can do. See pull request at this URL for discussion:
          // https://github.com/jquery/jquery/pull/764
          return elem.document.documentElement[ "client" + name ];
        }

        // Get document width or height
        if ( elem.nodeType === 9 ) {
          doc = elem.documentElement;

          // Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height], whichever is greatest
          // unfortunately, this causes bug #3838 in IE6/8 only, but there is currently no good, small way to fix it.
          return Math.max(
            elem.body[ "scroll" + name ], doc[ "scroll" + name ],
            elem.body[ "offset" + name ], doc[ "offset" + name ],
            doc[ "client" + name ]
          );
        }

        return value === undefined ?
          // Get width or height on the element, requesting but not forcing parseFloat
          jQuery.css( elem, type, extra ) :

          // Set width or height on the element
          jQuery.style( elem, type, value, extra );
      }, type, chainable ? margin : undefined, chainable, null );
    };
  });
});
// Limit scope pollution from any deprecated API
// (function() {

// })();
// Expose jQuery to the global object
window.jQuery = window.$ = jQuery;

// Expose jQuery as an AMD module, but only for AMD loaders that
// understand the issues with loading multiple versions of jQuery
// in a page that all might call define(). The loader will indicate
// they have special allowances for multiple jQuery versions by
// specifying define.amd.jQuery = true. Register as a named module,
// since jQuery can be concatenated with other files that may use define,
// but not use a proper concatenation script that understands anonymous
// AMD modules. A named AMD is safest and most robust way to register.
// Lowercase jquery is used because AMD module names are derived from
// file names, and jQuery is normally delivered in a lowercase file name.
// Do this after creating the global so that if an AMD module wants to call
// noConflict to hide this version of jQuery, it will work.
if ( typeof define === "function" && define.amd && define.amd.jQuery ) {
  define( "jquery", [], function () { return jQuery; } );
}

})( window );;/**
LazyLoad makes it easy and painless to lazily load one or more external
JavaScript or CSS files on demand either during or after the rendering of a web
page.

Supported browsers include Firefox 2+, IE6+, Safari 3+ (including Mobile
Safari), Google Chrome, and Opera 9+. Other browsers may or may not work and
are not officially supported.

Visit https://github.com/rgrove/lazyload/ for more info.

Copyright (c) 2011 Ryan Grove <ryan@wonko.com>
All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the 'Software'), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

@module lazyload
@class LazyLoad
@static
*/

LazyLoad = (function (doc) {
  // -- Private Variables ------------------------------------------------------

  // User agent and feature test information.
  var env,

  // Reference to the <head> element (populated lazily).
  head,

  // Requests currently in progress, if any.
  pending = {},

  // Number of times we've polled to check whether a pending stylesheet has
  // finished loading. If this gets too high, we're probably stalled.
  pollCount = 0,

  // Queued requests.
  queue = {css: [], js: []},

  // Reference to the browser's list of stylesheets.
  styleSheets = doc.styleSheets;

  // -- Private Methods --------------------------------------------------------

  /**
  Creates and returns an HTML element with the specified name and attributes.

  @method createNode
  @param {String} name element name
  @param {Object} attrs name/value mapping of element attributes
  @return {HTMLElement}
  @private
  */
  function createNode(name, attrs) {
    var node = doc.createElement(name), attr;

    for (attr in attrs) {
      if (attrs.hasOwnProperty(attr)) {
        node.setAttribute(attr, attrs[attr]);
      }
    }

    return node;
  }

  /**
  Called when the current pending resource of the specified type has finished
  loading. Executes the associated callback (if any) and loads the next
  resource in the queue.

  @method finish
  @param {String} type resource type ('css' or 'js')
  @private
  */
  function finish(type) {
    var p = pending[type],
        callback,
        urls;

    if (p) {
      callback = p.callback;
      urls     = p.urls;

      urls.shift();
      pollCount = 0;

      // If this is the last of the pending URLs, execute the callback and
      // start the next request in the queue (if any).
      if (!urls.length) {
        callback && callback.call(p.context, p.obj);
        pending[type] = null;
        queue[type].length && load(type);
      }
    }
  }

  /**
  Populates the <code>env</code> variable with user agent and feature test
  information.

  @method getEnv
  @private
  */
  function getEnv() {
    var ua = navigator.userAgent;

    env = {
      // True if this browser supports disabling async mode on dynamically
      // created script nodes. See
      // http://wiki.whatwg.org/wiki/Dynamic_Script_Execution_Order
      async: doc.createElement('script').async === true
    };

    (env.webkit = /AppleWebKit\//.test(ua))
      || (env.ie = /MSIE|Trident/.test(ua))
      || (env.opera = /Opera/.test(ua))
      || (env.gecko = /Gecko\//.test(ua))
      || (env.unknown = true);
  }

  /**
  Loads the specified resources, or the next resource of the specified type
  in the queue if no resources are specified. If a resource of the specified
  type is already being loaded, the new request will be queued until the
  first request has been finished.

  When an array of resource URLs is specified, those URLs will be loaded in
  parallel if it is possible to do so while preserving execution order. All
  browsers support parallel loading of CSS, but only Firefox and Opera
  support parallel loading of scripts. In other browsers, scripts will be
  queued and loaded one at a time to ensure correct execution order.

  @method load
  @param {String} type resource type ('css' or 'js')
  @param {String|Array} urls (optional) URL or array of URLs to load
  @param {Function} callback (optional) callback function to execute when the
    resource is loaded
  @param {Object} obj (optional) object to pass to the callback function
  @param {Object} context (optional) if provided, the callback function will
    be executed in this object's context
  @private
  */
  function load(type, urls, callback, obj, context) {
    var _finish = function () { finish(type); },
        isCSS   = type === 'css',
        nodes   = [],
        i, len, node, p, pendingUrls, url;

    env || getEnv();

    if (urls) {
      // If urls is a string, wrap it in an array. Otherwise assume it's an
      // array and create a copy of it so modifications won't be made to the
      // original.
      urls = typeof urls === 'string' ? [urls] : urls.concat();

      // Create a request object for each URL. If multiple URLs are specified,
      // the callback will only be executed after all URLs have been loaded.
      //
      // Sadly, Firefox and Opera are the only browsers capable of loading
      // scripts in parallel while preserving execution order. In all other
      // browsers, scripts must be loaded sequentially.
      //
      // All browsers respect CSS specificity based on the order of the link
      // elements in the DOM, regardless of the order in which the stylesheets
      // are actually downloaded.
      if (isCSS || env.async || env.gecko || env.opera) {
        // Load in parallel.
        queue[type].push({
          urls    : urls,
          callback: callback,
          obj     : obj,
          context : context
        });
      } else {
        // Load sequentially.
        for (i = 0, len = urls.length; i < len; ++i) {
          queue[type].push({
            urls    : [urls[i]],
            callback: i === len - 1 ? callback : null, // callback is only added to the last URL
            obj     : obj,
            context : context
          });
        }
      }
    }

    // If a previous load request of this type is currently in progress, we'll
    // wait our turn. Otherwise, grab the next item in the queue.
    if (pending[type] || !(p = pending[type] = queue[type].shift())) {
      return;
    }

    head || (head = doc.head || doc.getElementsByTagName('head')[0]);
    pendingUrls = p.urls;

    for (i = 0, len = pendingUrls.length; i < len; ++i) {
      url = pendingUrls[i];

      if (isCSS) {
          node = env.gecko ? createNode('style') : createNode('link', {
            href: url,
            rel : 'stylesheet'
          });
      } else {
        node = createNode('script', {src: url});
        node.async = false;
      }

      node.className = 'lazyload';
      node.setAttribute('charset', 'utf-8');

      if (env.ie && !isCSS && 'onreadystatechange' in node && !('draggable' in node)) {
        node.onreadystatechange = function () {
          if (/loaded|complete/.test(node.readyState)) {
            node.onreadystatechange = null;
            _finish();
          }
        };
      } else if (isCSS && (env.gecko || env.webkit)) {
        // Gecko and WebKit don't support the onload event on link nodes.
        if (env.webkit) {
          // In WebKit, we can poll for changes to document.styleSheets to
          // figure out when stylesheets have loaded.
          p.urls[i] = node.href; // resolve relative URLs (or polling won't work)
          pollWebKit();
        } else {
          // In Gecko, we can import the requested URL into a <style> node and
          // poll for the existence of node.sheet.cssRules. Props to Zach
          // Leatherman for calling my attention to this technique.
          node.innerHTML = '@import "' + url + '";';
          pollGecko(node);
        }
      } else {
        node.onload = node.onerror = _finish;
      }

      nodes.push(node);
    }

    for (i = 0, len = nodes.length; i < len; ++i) {
      head.appendChild(nodes[i]);
    }
  }

  /**
  Begins polling to determine when the specified stylesheet has finished loading
  in Gecko. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  Thanks to Zach Leatherman for calling my attention to the @import-based
  cross-domain technique used here, and to Oleg Slobodskoi for an earlier
  same-domain implementation. See Zach's blog for more details:
  http://www.zachleat.com/web/2010/07/29/load-css-dynamically/

  @method pollGecko
  @param {HTMLElement} node Style node to poll.
  @private
  */
  function pollGecko(node) {
    var hasRules;

    try {
      // We don't really need to store this value or ever refer to it again, but
      // if we don't store it, Closure Compiler assumes the code is useless and
      // removes it.
      hasRules = !!node.sheet.cssRules;
    } catch (ex) {
      // An exception means the stylesheet is still loading.
      pollCount += 1;

      if (pollCount < 200) {
        setTimeout(function () { pollGecko(node); }, 50);
      } else {
        // We've been polling for 10 seconds and nothing's happened. Stop
        // polling and finish the pending requests to avoid blocking further
        // requests.
        hasRules && finish('css');
      }

      return;
    }

    // If we get here, the stylesheet has loaded.
    finish('css');
  }

  /**
  Begins polling to determine when pending stylesheets have finished loading
  in WebKit. Polling stops when all pending stylesheets have loaded or after 10
  seconds (to prevent stalls).

  @method pollWebKit
  @private
  */
  function pollWebKit() {
    var css = pending.css, i;

    if (css) {
      i = styleSheets.length;

      // Look for a stylesheet matching the pending URL.
      while (--i >= 0) {
        if (styleSheets[i].href === css.urls[0]) {
          finish('css');
          break;
        }
      }

      pollCount += 1;

      if (css) {
        if (pollCount < 200) {
          setTimeout(pollWebKit, 50);
        } else {
          // We've been polling for 10 seconds and nothing's happened, which may
          // indicate that the stylesheet has been removed from the document
          // before it had a chance to load. Stop polling and finish the pending
          // request to prevent blocking further requests.
          finish('css');
        }
      }
    }
  }

  return {

    /**
    Requests the specified CSS URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified, the stylesheets will be loaded in parallel and the callback
    will be executed after all stylesheets have finished loading.

    @method css
    @param {String|Array} urls CSS URL or array of CSS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified stylesheets are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    css: function (urls, callback, obj, context) {
      load('css', urls, callback, obj, context);
    },

    /**
    Requests the specified JavaScript URL or URLs and executes the specified
    callback (if any) when they have finished loading. If an array of URLs is
    specified and the browser supports it, the scripts will be loaded in
    parallel and the callback will be executed after all scripts have
    finished loading.

    Currently, only Firefox and Opera support parallel loading of scripts while
    preserving execution order. In other browsers, scripts will be
    queued and loaded one at a time to ensure correct execution order.

    @method js
    @param {String|Array} urls JS URL or array of JS URLs to load
    @param {Function} callback (optional) callback function to execute when
      the specified scripts are loaded
    @param {Object} obj (optional) object to pass to the callback function
    @param {Object} context (optional) if provided, the callback function
      will be executed in this object's context
    @static
    */
    js: function (urls, callback, obj, context) {
      load('js', urls, callback, obj, context);
    }

  };
})(this.document);
;;(function() {

  /** Used as a safe reference for `undefined` in pre ES5 environments */
  var undefined;

  /** Used to pool arrays and objects used internally */
  var arrayPool = [],
      objectPool = [];

  /** Used to generate unique IDs */
  var idCounter = 0;

  /** Used to prefix keys to avoid issues with `__proto__` and properties on `Object.prototype` */
  var keyPrefix = +new Date + '';

  /** Used as the size when optimizations are enabled for large arrays */
  var largeArraySize = 75;

  /** Used as the max size of the `arrayPool` and `objectPool` */
  var maxPoolSize = 40;

  /** Used to detect and test whitespace */
  var whitespace = (
    // whitespace
    ' \t\x0B\f\xA0\ufeff' +

    // line terminators
    '\n\r\u2028\u2029' +

    // unicode category "Zs" space separators
    '\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000'
  );

  /** Used to match empty string literals in compiled template source */
  var reEmptyStringLeading = /\b__p \+= '';/g,
      reEmptyStringMiddle = /\b(__p \+=) '' \+/g,
      reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;

  /**
   * Used to match ES6 template delimiters
   * http://people.mozilla.org/~jorendorff/es6-draft.html#sec-literals-string-literals
   */
  var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;

  /** Used to match regexp flags from their coerced string values */
  var reFlags = /\w*$/;

  /** Used to detected named functions */
  var reFuncName = /^\s*function[ \n\r\t]+\w/;

  /** Used to match "interpolate" template delimiters */
  var reInterpolate = /<%=([\s\S]+?)%>/g;

  /** Used to match leading whitespace and zeros to be removed */
  var reLeadingSpacesAndZeros = RegExp('^[' + whitespace + ']*0+(?=.$)');

  /** Used to ensure capturing order of template delimiters */
  var reNoMatch = /($^)/;

  /** Used to detect functions containing a `this` reference */
  var reThis = /\bthis\b/;

  /** Used to match unescaped characters in compiled string literals */
  var reUnescapedString = /['\n\r\t\u2028\u2029\\]/g;

  /** Used to assign default `context` object properties */
  var contextProps = [
    'Array', 'Boolean', 'Date', 'Function', 'Math', 'Number', 'Object',
    'RegExp', 'String', '_', 'attachEvent', 'clearTimeout', 'isFinite', 'isNaN',
    'parseInt', 'setTimeout'
  ];

  /** Used to make template sourceURLs easier to identify */
  var templateCounter = 0;

  /** `Object#toString` result shortcuts */
  var argsClass = '[object Arguments]',
      arrayClass = '[object Array]',
      boolClass = '[object Boolean]',
      dateClass = '[object Date]',
      funcClass = '[object Function]',
      numberClass = '[object Number]',
      objectClass = '[object Object]',
      regexpClass = '[object RegExp]',
      stringClass = '[object String]';

  /** Used to identify object classifications that `_.clone` supports */
  var cloneableClasses = {};
  cloneableClasses[funcClass] = false;
  cloneableClasses[argsClass] = cloneableClasses[arrayClass] =
  cloneableClasses[boolClass] = cloneableClasses[dateClass] =
  cloneableClasses[numberClass] = cloneableClasses[objectClass] =
  cloneableClasses[regexpClass] = cloneableClasses[stringClass] = true;

  /** Used as an internal `_.debounce` options object */
  var debounceOptions = {
    'leading': false,
    'maxWait': 0,
    'trailing': false
  };

  /** Used as the property descriptor for `__bindData__` */
  var descriptor = {
    'configurable': false,
    'enumerable': false,
    'value': null,
    'writable': false
  };

  /** Used to determine if values are of the language type Object */
  var objectTypes = {
    'boolean': false,
    'function': true,
    'object': true,
    'number': false,
    'string': false,
    'undefined': false
  };

  /** Used to escape characters for inclusion in compiled string literals */
  var stringEscapes = {
    '\\': '\\',
    "'": "'",
    '\n': 'n',
    '\r': 'r',
    '\t': 't',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  /** Used as a reference to the global object */
  var root = (objectTypes[typeof window] && window) || this;

  /** Detect free variable `exports` */
  var freeExports = objectTypes[typeof exports] && exports && !exports.nodeType && exports;

  /** Detect free variable `module` */
  var freeModule = objectTypes[typeof module] && module && !module.nodeType && module;

  /** Detect the popular CommonJS extension `module.exports` */
  var moduleExports = freeModule && freeModule.exports === freeExports && freeExports;

  /** Detect free variable `global` from Node.js or Browserified code and use it as `root` */
  var freeGlobal = objectTypes[typeof global] && global;
  if (freeGlobal && (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal)) {
    root = freeGlobal;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * The base implementation of `_.indexOf` without support for binary searches
   * or `fromIndex` constraints.
   *
   * @private
   * @param {Array} array The array to search.
   * @param {*} value The value to search for.
   * @param {number} [fromIndex=0] The index to search from.
   * @returns {number} Returns the index of the matched value or `-1`.
   */
  function baseIndexOf(array, value, fromIndex) {
    var index = (fromIndex || 0) - 1,
        length = array ? array.length : 0;

    while (++index < length) {
      if (array[index] === value) {
        return index;
      }
    }
    return -1;
  }

  /**
   * An implementation of `_.contains` for cache objects that mimics the return
   * signature of `_.indexOf` by returning `0` if the value is found, else `-1`.
   *
   * @private
   * @param {Object} cache The cache object to inspect.
   * @param {*} value The value to search for.
   * @returns {number} Returns `0` if `value` is found, else `-1`.
   */
  function cacheIndexOf(cache, value) {
    var type = typeof value;
    cache = cache.cache;

    if (type == 'boolean' || value == null) {
      return cache[value] ? 0 : -1;
    }
    if (type != 'number' && type != 'string') {
      type = 'object';
    }
    var key = type == 'number' ? value : keyPrefix + value;
    cache = (cache = cache[type]) && cache[key];

    return type == 'object'
      ? (cache && baseIndexOf(cache, value) > -1 ? 0 : -1)
      : (cache ? 0 : -1);
  }

  /**
   * Adds a given value to the corresponding cache object.
   *
   * @private
   * @param {*} value The value to add to the cache.
   */
  function cachePush(value) {
    var cache = this.cache,
        type = typeof value;

    if (type == 'boolean' || value == null) {
      cache[value] = true;
    } else {
      if (type != 'number' && type != 'string') {
        type = 'object';
      }
      var key = type == 'number' ? value : keyPrefix + value,
          typeCache = cache[type] || (cache[type] = {});

      if (type == 'object') {
        (typeCache[key] || (typeCache[key] = [])).push(value);
      } else {
        typeCache[key] = true;
      }
    }
  }

  /**
   * Used by `_.max` and `_.min` as the default callback when a given
   * collection is a string value.
   *
   * @private
   * @param {string} value The character to inspect.
   * @returns {number} Returns the code unit of given character.
   */
  function charAtCallback(value) {
    return value.charCodeAt(0);
  }

  /**
   * Used by `sortBy` to compare transformed `collection` elements, stable sorting
   * them in ascending order.
   *
   * @private
   * @param {Object} a The object to compare to `b`.
   * @param {Object} b The object to compare to `a`.
   * @returns {number} Returns the sort order indicator of `1` or `-1`.
   */
  function compareAscending(a, b) {
    var ac = a.criteria,
        bc = b.criteria,
        index = -1,
        length = ac.length;

    while (++index < length) {
      var value = ac[index],
          other = bc[index];

      if (value !== other) {
        if (value > other || typeof value == 'undefined') {
          return 1;
        }
        if (value < other || typeof other == 'undefined') {
          return -1;
        }
      }
    }
    // Fixes an `Array#sort` bug in the JS engine embedded in Adobe applications
    // that causes it, under certain circumstances, to return the same value for
    // `a` and `b`. See https://github.com/jashkenas/underscore/pull/1247
    //
    // This also ensures a stable sort in V8 and other engines.
    // See http://code.google.com/p/v8/issues/detail?id=90
    return a.index - b.index;
  }

  /**
   * Creates a cache object to optimize linear searches of large arrays.
   *
   * @private
   * @param {Array} [array=[]] The array to search.
   * @returns {null|Object} Returns the cache object or `null` if caching should not be used.
   */
  function createCache(array) {
    var index = -1,
        length = array.length,
        first = array[0],
        mid = array[(length / 2) | 0],
        last = array[length - 1];

    if (first && typeof first == 'object' &&
        mid && typeof mid == 'object' && last && typeof last == 'object') {
      return false;
    }
    var cache = getObject();
    cache['false'] = cache['null'] = cache['true'] = cache['undefined'] = false;

    var result = getObject();
    result.array = array;
    result.cache = cache;
    result.push = cachePush;

    while (++index < length) {
      result.push(array[index]);
    }
    return result;
  }

  /**
   * Used by `template` to escape characters for inclusion in compiled
   * string literals.
   *
   * @private
   * @param {string} match The matched character to escape.
   * @returns {string} Returns the escaped character.
   */
  function escapeStringChar(match) {
    return '\\' + stringEscapes[match];
  }

  /**
   * Gets an array from the array pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Array} The array from the pool.
   */
  function getArray() {
    return arrayPool.pop() || [];
  }

  /**
   * Gets an object from the object pool or creates a new one if the pool is empty.
   *
   * @private
   * @returns {Object} The object from the pool.
   */
  function getObject() {
    return objectPool.pop() || {
      'array': null,
      'cache': null,
      'criteria': null,
      'false': false,
      'index': 0,
      'null': false,
      'number': null,
      'object': null,
      'push': null,
      'string': null,
      'true': false,
      'undefined': false,
      'value': null
    };
  }

  /**
   * Releases the given array back to the array pool.
   *
   * @private
   * @param {Array} [array] The array to release.
   */
  function releaseArray(array) {
    array.length = 0;
    if (arrayPool.length < maxPoolSize) {
      arrayPool.push(array);
    }
  }

  /**
   * Releases the given object back to the object pool.
   *
   * @private
   * @param {Object} [object] The object to release.
   */
  function releaseObject(object) {
    var cache = object.cache;
    if (cache) {
      releaseObject(cache);
    }
    object.array = object.cache = object.criteria = object.object = object.number = object.string = object.value = null;
    if (objectPool.length < maxPoolSize) {
      objectPool.push(object);
    }
  }

  /**
   * Slices the `collection` from the `start` index up to, but not including,
   * the `end` index.
   *
   * Note: This function is used instead of `Array#slice` to support node lists
   * in IE < 9 and to ensure dense arrays are returned.
   *
   * @private
   * @param {Array|Object|string} collection The collection to slice.
   * @param {number} start The start index.
   * @param {number} end The end index.
   * @returns {Array} Returns the new array.
   */
  function slice(array, start, end) {
    start || (start = 0);
    if (typeof end == 'undefined') {
      end = array ? array.length : 0;
    }
    var index = -1,
        length = end - start || 0,
        result = Array(length < 0 ? 0 : length);

    while (++index < length) {
      result[index] = array[start + index];
    }
    return result;
  }

  /*--------------------------------------------------------------------------*/

  /**
   * Create a new `lodash` function using the given context object.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} [context=root] The context object.
   * @returns {Function} Returns the `lodash` function.
   */
  function runInContext(context) {
    // Avoid issues with some ES3 environments that attempt to use values, named
    // after built-in constructors like `Object`, for the creation of literals.
    // ES5 clears this up by stating that literals must use built-in constructors.
    // See http://es5.github.io/#x11.1.5.
    context = context ? _.defaults(root.Object(), context, _.pick(root, contextProps)) : root;

    /** Native constructor references */
    var Array = context.Array,
        Boolean = context.Boolean,
        Date = context.Date,
        Function = context.Function,
        Math = context.Math,
        Number = context.Number,
        Object = context.Object,
        RegExp = context.RegExp,
        String = context.String,
        TypeError = context.TypeError;

    /**
     * Used for `Array` method references.
     *
     * Normally `Array.prototype` would suffice, however, using an array literal
     * avoids issues in Narwhal.
     */
    var arrayRef = [];

    /** Used for native method references */
    var objectProto = Object.prototype;

    /** Used to restore the original `_` reference in `noConflict` */
    var oldDash = context._;

    /** Used to resolve the internal [[Class]] of values */
    var toString = objectProto.toString;

    /** Used to detect if a method is native */
    var reNative = RegExp('^' +
      String(toString)
        .replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        .replace(/toString| for [^\]]+/g, '.*?') + '$'
    );

    /** Native method shortcuts */
    var ceil = Math.ceil,
        clearTimeout = context.clearTimeout,
        floor = Math.floor,
        fnToString = Function.prototype.toString,
        getPrototypeOf = isNative(getPrototypeOf = Object.getPrototypeOf) && getPrototypeOf,
        hasOwnProperty = objectProto.hasOwnProperty,
        push = arrayRef.push,
        setTimeout = context.setTimeout,
        splice = arrayRef.splice,
        unshift = arrayRef.unshift;

    /** Used to set meta data on functions */
    var defineProperty = (function() {
      // IE 8 only accepts DOM elements
      try {
        var o = {},
            func = isNative(func = Object.defineProperty) && func,
            result = func(o, o, o) && func;
      } catch(e) { }
      return result;
    }());

    /* Native method shortcuts for methods with the same name as other `lodash` methods */
    var nativeCreate = isNative(nativeCreate = Object.create) && nativeCreate,
        nativeIsArray = isNative(nativeIsArray = Array.isArray) && nativeIsArray,
        nativeIsFinite = context.isFinite,
        nativeIsNaN = context.isNaN,
        nativeKeys = isNative(nativeKeys = Object.keys) && nativeKeys,
        nativeMax = Math.max,
        nativeMin = Math.min,
        nativeParseInt = context.parseInt,
        nativeRandom = Math.random;

    /** Used to lookup a built-in constructor by [[Class]] */
    var ctorByClass = {};
    ctorByClass[arrayClass] = Array;
    ctorByClass[boolClass] = Boolean;
    ctorByClass[dateClass] = Date;
    ctorByClass[funcClass] = Function;
    ctorByClass[objectClass] = Object;
    ctorByClass[numberClass] = Number;
    ctorByClass[regexpClass] = RegExp;
    ctorByClass[stringClass] = String;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object which wraps the given value to enable intuitive
     * method chaining.
     *
     * In addition to Lo-Dash methods, wrappers also have the following `Array` methods:
     * `concat`, `join`, `pop`, `push`, `reverse`, `shift`, `slice`, `sort`, `splice`,
     * and `unshift`
     *
     * Chaining is supported in custom builds as long as the `value` method is
     * implicitly or explicitly included in the build.
     *
     * The chainable wrapper functions are:
     * `after`, `assign`, `bind`, `bindAll`, `bindKey`, `chain`, `compact`,
     * `compose`, `concat`, `countBy`, `create`, `createCallback`, `curry`,
     * `debounce`, `defaults`, `defer`, `delay`, `difference`, `filter`, `flatten`,
     * `forEach`, `forEachRight`, `forIn`, `forInRight`, `forOwn`, `forOwnRight`,
     * `functions`, `groupBy`, `indexBy`, `initial`, `intersection`, `invert`,
     * `invoke`, `keys`, `map`, `max`, `memoize`, `merge`, `min`, `object`, `omit`,
     * `once`, `pairs`, `partial`, `partialRight`, `pick`, `pluck`, `pull`, `push`,
     * `range`, `reject`, `remove`, `rest`, `reverse`, `shuffle`, `slice`, `sort`,
     * `sortBy`, `splice`, `tap`, `throttle`, `times`, `toArray`, `transform`,
     * `union`, `uniq`, `unshift`, `unzip`, `values`, `where`, `without`, `wrap`,
     * and `zip`
     *
     * The non-chainable wrapper functions are:
     * `clone`, `cloneDeep`, `contains`, `escape`, `every`, `find`, `findIndex`,
     * `findKey`, `findLast`, `findLastIndex`, `findLastKey`, `has`, `identity`,
     * `indexOf`, `isArguments`, `isArray`, `isBoolean`, `isDate`, `isElement`,
     * `isEmpty`, `isEqual`, `isFinite`, `isFunction`, `isNaN`, `isNull`, `isNumber`,
     * `isObject`, `isPlainObject`, `isRegExp`, `isString`, `isUndefined`, `join`,
     * `lastIndexOf`, `mixin`, `noConflict`, `parseInt`, `pop`, `random`, `reduce`,
     * `reduceRight`, `result`, `shift`, `size`, `some`, `sortedIndex`, `runInContext`,
     * `template`, `unescape`, `uniqueId`, and `value`
     *
     * The wrapper functions `first` and `last` return wrapped values when `n` is
     * provided, otherwise they return unwrapped values.
     *
     * Explicit chaining can be enabled by using the `_.chain` method.
     *
     * @name _
     * @constructor
     * @category Chaining
     * @param {*} value The value to wrap in a `lodash` instance.
     * @returns {Object} Returns a `lodash` instance.
     * @example
     *
     * var wrapped = _([1, 2, 3]);
     *
     * // returns an unwrapped value
     * wrapped.reduce(function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * // returns a wrapped value
     * var squares = wrapped.map(function(num) {
     *   return num * num;
     * });
     *
     * _.isArray(squares);
     * // => false
     *
     * _.isArray(squares.value());
     * // => true
     */
    function lodash(value) {
      // don't wrap if already wrapped, even if wrapped by a different `lodash` constructor
      return (value && typeof value == 'object' && !isArray(value) && hasOwnProperty.call(value, '__wrapped__'))
       ? value
       : new lodashWrapper(value);
    }

    /**
     * A fast path for creating `lodash` wrapper objects.
     *
     * @private
     * @param {*} value The value to wrap in a `lodash` instance.
     * @param {boolean} chainAll A flag to enable chaining for all methods
     * @returns {Object} Returns a `lodash` instance.
     */
    function lodashWrapper(value, chainAll) {
      this.__chain__ = !!chainAll;
      this.__wrapped__ = value;
    }
    // ensure `new lodashWrapper` is an instance of `lodash`
    lodashWrapper.prototype = lodash.prototype;

    /**
     * An object used to flag environments features.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    var support = lodash.support = {};

    /**
     * Detect if functions can be decompiled by `Function#toString`
     * (all but PS3 and older Opera mobile browsers & avoided in Windows 8 apps).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcDecomp = !isNative(context.WinRTError) && reThis.test(runInContext);

    /**
     * Detect if `Function#name` is supported (all but IE).
     *
     * @memberOf _.support
     * @type boolean
     */
    support.funcNames = typeof Function.name == 'string';

    /**
     * By default, the template delimiters used by Lo-Dash are similar to those in
     * embedded Ruby (ERB). Change the following template settings to use alternative
     * delimiters.
     *
     * @static
     * @memberOf _
     * @type Object
     */
    lodash.templateSettings = {

      /**
       * Used to detect `data` property values to be HTML-escaped.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'escape': /<%-([\s\S]+?)%>/g,

      /**
       * Used to detect code to be evaluated.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'evaluate': /<%([\s\S]+?)%>/g,

      /**
       * Used to detect `data` property values to inject.
       *
       * @memberOf _.templateSettings
       * @type RegExp
       */
      'interpolate': reInterpolate,

      /**
       * Used to reference the data object in the template text.
       *
       * @memberOf _.templateSettings
       * @type string
       */
      'variable': '',

      /**
       * Used to import variables into the compiled template.
       *
       * @memberOf _.templateSettings
       * @type Object
       */
      'imports': {

        /**
         * A reference to the `lodash` function.
         *
         * @memberOf _.templateSettings.imports
         * @type Function
         */
        '_': lodash
      }
    };

    /*--------------------------------------------------------------------------*/

    /**
     * The base implementation of `_.bind` that creates the bound function and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new bound function.
     */
    function baseBind(bindData) {
      var func = bindData[0],
          partialArgs = bindData[2],
          thisArg = bindData[4];

      function bound() {
        // `Function#bind` spec
        // http://es5.github.io/#x15.3.4.5
        if (partialArgs) {
          // avoid `arguments` object deoptimizations by using `slice` instead
          // of `Array.prototype.slice.call` and not assigning `arguments` to a
          // variable as a ternary expression
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        // mimic the constructor's `return` behavior
        // http://es5.github.io/#x13.2.2
        if (this instanceof bound) {
          // ensure `new bound` is an instance of `func`
          var thisBinding = baseCreate(func.prototype),
              result = func.apply(thisBinding, args || arguments);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisArg, args || arguments);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.clone` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates clones with source counterparts.
     * @returns {*} Returns the cloned value.
     */
    function baseClone(value, isDeep, callback, stackA, stackB) {
      if (callback) {
        var result = callback(value);
        if (typeof result != 'undefined') {
          return result;
        }
      }
      // inspect [[Class]]
      var isObj = isObject(value);
      if (isObj) {
        var className = toString.call(value);
        if (!cloneableClasses[className]) {
          return value;
        }
        var ctor = ctorByClass[className];
        switch (className) {
          case boolClass:
          case dateClass:
            return new ctor(+value);

          case numberClass:
          case stringClass:
            return new ctor(value);

          case regexpClass:
            result = ctor(value.source, reFlags.exec(value));
            result.lastIndex = value.lastIndex;
            return result;
        }
      } else {
        return value;
      }
      var isArr = isArray(value);
      if (isDeep) {
        // check for circular references and return corresponding clone
        var initedStack = !stackA;
        stackA || (stackA = getArray());
        stackB || (stackB = getArray());

        var length = stackA.length;
        while (length--) {
          if (stackA[length] == value) {
            return stackB[length];
          }
        }
        result = isArr ? ctor(value.length) : {};
      }
      else {
        result = isArr ? slice(value) : assign({}, value);
      }
      // add array properties assigned by `RegExp#exec`
      if (isArr) {
        if (hasOwnProperty.call(value, 'index')) {
          result.index = value.index;
        }
        if (hasOwnProperty.call(value, 'input')) {
          result.input = value.input;
        }
      }
      // exit for shallow clone
      if (!isDeep) {
        return result;
      }
      // add the source value to the stack of traversed objects
      // and associate it with its clone
      stackA.push(value);
      stackB.push(result);

      // recursively populate clone (susceptible to call stack limits)
      (isArr ? forEach : forOwn)(value, function(objValue, key) {
        result[key] = baseClone(objValue, isDeep, callback, stackA, stackB);
      });

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.create` without support for assigning
     * properties to the created object.
     *
     * @private
     * @param {Object} prototype The object to inherit from.
     * @returns {Object} Returns the new object.
     */
    function baseCreate(prototype, properties) {
      return isObject(prototype) ? nativeCreate(prototype) : {};
    }
    // fallback for browsers without `Object.create`
    if (!nativeCreate) {
      baseCreate = (function() {
        function Object() {}
        return function(prototype) {
          if (isObject(prototype)) {
            Object.prototype = prototype;
            var result = new Object;
            Object.prototype = null;
          }
          return result || context.Object();
        };
      }());
    }

    /**
     * The base implementation of `_.createCallback` without support for creating
     * "_.pluck" or "_.where" style callbacks.
     *
     * @private
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     */
    function baseCreateCallback(func, thisArg, argCount) {
      if (typeof func != 'function') {
        return identity;
      }
      // exit early for no `thisArg` or already bound by `Function#bind`
      if (typeof thisArg == 'undefined' || !('prototype' in func)) {
        return func;
      }
      var bindData = func.__bindData__;
      if (typeof bindData == 'undefined') {
        if (support.funcNames) {
          bindData = !func.name;
        }
        bindData = bindData || !support.funcDecomp;
        if (!bindData) {
          var source = fnToString.call(func);
          if (!support.funcNames) {
            bindData = !reFuncName.test(source);
          }
          if (!bindData) {
            // checks if `func` references the `this` keyword and stores the result
            bindData = reThis.test(source);
            setBindData(func, bindData);
          }
        }
      }
      // exit early if there are no `this` references or `func` is bound
      if (bindData === false || (bindData !== true && bindData[1] & 1)) {
        return func;
      }
      switch (argCount) {
        case 1: return function(value) {
          return func.call(thisArg, value);
        };
        case 2: return function(a, b) {
          return func.call(thisArg, a, b);
        };
        case 3: return function(value, index, collection) {
          return func.call(thisArg, value, index, collection);
        };
        case 4: return function(accumulator, value, index, collection) {
          return func.call(thisArg, accumulator, value, index, collection);
        };
      }
      return bind(func, thisArg);
    }

    /**
     * The base implementation of `createWrapper` that creates the wrapper and
     * sets its meta data.
     *
     * @private
     * @param {Array} bindData The bind data array.
     * @returns {Function} Returns the new function.
     */
    function baseCreateWrapper(bindData) {
      var func = bindData[0],
          bitmask = bindData[1],
          partialArgs = bindData[2],
          partialRightArgs = bindData[3],
          thisArg = bindData[4],
          arity = bindData[5];

      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          key = func;

      function bound() {
        var thisBinding = isBind ? thisArg : this;
        if (partialArgs) {
          var args = slice(partialArgs);
          push.apply(args, arguments);
        }
        if (partialRightArgs || isCurry) {
          args || (args = slice(arguments));
          if (partialRightArgs) {
            push.apply(args, partialRightArgs);
          }
          if (isCurry && args.length < arity) {
            bitmask |= 16 & ~32;
            return baseCreateWrapper([func, (isCurryBound ? bitmask : bitmask & ~3), args, null, thisArg, arity]);
          }
        }
        args || (args = arguments);
        if (isBindKey) {
          func = thisBinding[key];
        }
        if (this instanceof bound) {
          thisBinding = baseCreate(func.prototype);
          var result = func.apply(thisBinding, args);
          return isObject(result) ? result : thisBinding;
        }
        return func.apply(thisBinding, args);
      }
      setBindData(bound, bindData);
      return bound;
    }

    /**
     * The base implementation of `_.difference` that accepts a single array
     * of values to exclude.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {Array} [values] The array of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     */
    function baseDifference(array, values) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          isLarge = length >= largeArraySize && indexOf === baseIndexOf,
          result = [];

      if (isLarge) {
        var cache = createCache(values);
        if (cache) {
          indexOf = cacheIndexOf;
          values = cache;
        } else {
          isLarge = false;
        }
      }
      while (++index < length) {
        var value = array[index];
        if (indexOf(values, value) < 0) {
          result.push(value);
        }
      }
      if (isLarge) {
        releaseObject(values);
      }
      return result;
    }

    /**
     * The base implementation of `_.flatten` without support for callback
     * shorthands or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {boolean} [isStrict=false] A flag to restrict flattening to arrays and `arguments` objects.
     * @param {number} [fromIndex=0] The index to start from.
     * @returns {Array} Returns a new flattened array.
     */
    function baseFlatten(array, isShallow, isStrict, fromIndex) {
      var index = (fromIndex || 0) - 1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];

        if (value && typeof value == 'object' && typeof value.length == 'number'
            && (isArray(value) || isArguments(value))) {
          // recursively flatten arrays (susceptible to call stack limits)
          if (!isShallow) {
            value = baseFlatten(value, isShallow, isStrict);
          }
          var valIndex = -1,
              valLength = value.length,
              resIndex = result.length;

          result.length += valLength;
          while (++valIndex < valLength) {
            result[resIndex++] = value[valIndex];
          }
        } else if (!isStrict) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * The base implementation of `_.isEqual`, without support for `thisArg` binding,
     * that allows partial "_.where" style comparisons.
     *
     * @private
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {Function} [isWhere=false] A flag to indicate performing partial comparisons.
     * @param {Array} [stackA=[]] Tracks traversed `a` objects.
     * @param {Array} [stackB=[]] Tracks traversed `b` objects.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     */
    function baseIsEqual(a, b, callback, isWhere, stackA, stackB) {
      // used to indicate that when comparing objects, `a` has at least the properties of `b`
      if (callback) {
        var result = callback(a, b);
        if (typeof result != 'undefined') {
          return !!result;
        }
      }
      // exit early for identical values
      if (a === b) {
        // treat `+0` vs. `-0` as not equal
        return a !== 0 || (1 / a == 1 / b);
      }
      var type = typeof a,
          otherType = typeof b;

      // exit early for unlike primitive values
      if (a === a &&
          !(a && objectTypes[type]) &&
          !(b && objectTypes[otherType])) {
        return false;
      }
      // exit early for `null` and `undefined` avoiding ES3's Function#call behavior
      // http://es5.github.io/#x15.3.4.4
      if (a == null || b == null) {
        return a === b;
      }
      // compare [[Class]] names
      var className = toString.call(a),
          otherClass = toString.call(b);

      if (className == argsClass) {
        className = objectClass;
      }
      if (otherClass == argsClass) {
        otherClass = objectClass;
      }
      if (className != otherClass) {
        return false;
      }
      switch (className) {
        case boolClass:
        case dateClass:
          // coerce dates and booleans to numbers, dates to milliseconds and booleans
          // to `1` or `0` treating invalid dates coerced to `NaN` as not equal
          return +a == +b;

        case numberClass:
          // treat `NaN` vs. `NaN` as equal
          return (a != +a)
            ? b != +b
            // but treat `+0` vs. `-0` as not equal
            : (a == 0 ? (1 / a == 1 / b) : a == +b);

        case regexpClass:
        case stringClass:
          // coerce regexes to strings (http://es5.github.io/#x15.10.6.4)
          // treat string primitives and their corresponding object instances as equal
          return a == String(b);
      }
      var isArr = className == arrayClass;
      if (!isArr) {
        // unwrap any `lodash` wrapped values
        var aWrapped = hasOwnProperty.call(a, '__wrapped__'),
            bWrapped = hasOwnProperty.call(b, '__wrapped__');

        if (aWrapped || bWrapped) {
          return baseIsEqual(aWrapped ? a.__wrapped__ : a, bWrapped ? b.__wrapped__ : b, callback, isWhere, stackA, stackB);
        }
        // exit for functions and DOM nodes
        if (className != objectClass) {
          return false;
        }
        // in older versions of Opera, `arguments` objects have `Array` constructors
        var ctorA = a.constructor,
            ctorB = b.constructor;

        // non `Object` object instances with different constructors are not equal
        if (ctorA != ctorB &&
              !(isFunction(ctorA) && ctorA instanceof ctorA && isFunction(ctorB) && ctorB instanceof ctorB) &&
              ('constructor' in a && 'constructor' in b)
            ) {
          return false;
        }
      }
      // assume cyclic structures are equal
      // the algorithm for detecting cyclic structures is adapted from ES 5.1
      // section 15.12.3, abstract operation `JO` (http://es5.github.io/#x15.12.3)
      var initedStack = !stackA;
      stackA || (stackA = getArray());
      stackB || (stackB = getArray());

      var length = stackA.length;
      while (length--) {
        if (stackA[length] == a) {
          return stackB[length] == b;
        }
      }
      var size = 0;
      result = true;

      // add `a` and `b` to the stack of traversed objects
      stackA.push(a);
      stackB.push(b);

      // recursively compare objects and arrays (susceptible to call stack limits)
      if (isArr) {
        // compare lengths to determine if a deep comparison is necessary
        length = a.length;
        size = b.length;
        result = size == length;

        if (result || isWhere) {
          // deep compare the contents, ignoring non-numeric properties
          while (size--) {
            var index = length,
                value = b[size];

            if (isWhere) {
              while (index--) {
                if ((result = baseIsEqual(a[index], value, callback, isWhere, stackA, stackB))) {
                  break;
                }
              }
            } else if (!(result = baseIsEqual(a[size], value, callback, isWhere, stackA, stackB))) {
              break;
            }
          }
        }
      }
      else {
        // deep compare objects using `forIn`, instead of `forOwn`, to avoid `Object.keys`
        // which, in this case, is more costly
        forIn(b, function(value, key, b) {
          if (hasOwnProperty.call(b, key)) {
            // count the number of properties.
            size++;
            // deep compare each property value.
            return (result = hasOwnProperty.call(a, key) && baseIsEqual(a[key], value, callback, isWhere, stackA, stackB));
          }
        });

        if (result && !isWhere) {
          // ensure both objects have the same number of properties
          forIn(a, function(value, key, a) {
            if (hasOwnProperty.call(a, key)) {
              // `size` will be `-1` if `a` has more properties than `b`
              return (result = --size > -1);
            }
          });
        }
      }
      stackA.pop();
      stackB.pop();

      if (initedStack) {
        releaseArray(stackA);
        releaseArray(stackB);
      }
      return result;
    }

    /**
     * The base implementation of `_.merge` without argument juggling or support
     * for `thisArg` binding.
     *
     * @private
     * @param {Object} object The destination object.
     * @param {Object} source The source object.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {Array} [stackA=[]] Tracks traversed source objects.
     * @param {Array} [stackB=[]] Associates values with source counterparts.
     */
    function baseMerge(object, source, callback, stackA, stackB) {
      (isArray(source) ? forEach : forOwn)(source, function(source, key) {
        var found,
            isArr,
            result = source,
            value = object[key];

        if (source && ((isArr = isArray(source)) || isPlainObject(source))) {
          // avoid merging previously merged cyclic sources
          var stackLength = stackA.length;
          while (stackLength--) {
            if ((found = stackA[stackLength] == source)) {
              value = stackB[stackLength];
              break;
            }
          }
          if (!found) {
            var isShallow;
            if (callback) {
              result = callback(value, source);
              if ((isShallow = typeof result != 'undefined')) {
                value = result;
              }
            }
            if (!isShallow) {
              value = isArr
                ? (isArray(value) ? value : [])
                : (isPlainObject(value) ? value : {});
            }
            // add `source` and associated `value` to the stack of traversed objects
            stackA.push(source);
            stackB.push(value);

            // recursively merge objects and arrays (susceptible to call stack limits)
            if (!isShallow) {
              baseMerge(value, source, callback, stackA, stackB);
            }
          }
        }
        else {
          if (callback) {
            result = callback(value, source);
            if (typeof result == 'undefined') {
              result = source;
            }
          }
          if (typeof result != 'undefined') {
            value = result;
          }
        }
        object[key] = value;
      });
    }

    /**
     * The base implementation of `_.random` without argument juggling or support
     * for returning floating-point numbers.
     *
     * @private
     * @param {number} min The minimum possible value.
     * @param {number} max The maximum possible value.
     * @returns {number} Returns a random number.
     */
    function baseRandom(min, max) {
      return min + floor(nativeRandom() * (max - min + 1));
    }

    /**
     * The base implementation of `_.uniq` without support for callback shorthands
     * or `thisArg` binding.
     *
     * @private
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function} [callback] The function called per iteration.
     * @returns {Array} Returns a duplicate-value-free array.
     */
    function baseUniq(array, isSorted, callback) {
      var index = -1,
          indexOf = getIndexOf(),
          length = array ? array.length : 0,
          result = [];

      var isLarge = !isSorted && length >= largeArraySize && indexOf === baseIndexOf,
          seen = (callback || isLarge) ? getArray() : result;

      if (isLarge) {
        var cache = createCache(seen);
        indexOf = cacheIndexOf;
        seen = cache;
      }
      while (++index < length) {
        var value = array[index],
            computed = callback ? callback(value, index, array) : value;

        if (isSorted
              ? !index || seen[seen.length - 1] !== computed
              : indexOf(seen, computed) < 0
            ) {
          if (callback || isLarge) {
            seen.push(computed);
          }
          result.push(value);
        }
      }
      if (isLarge) {
        releaseArray(seen.array);
        releaseObject(seen);
      } else if (callback) {
        releaseArray(seen);
      }
      return result;
    }

    /**
     * Creates a function that aggregates a collection, creating an object composed
     * of keys generated from the results of running each element of the collection
     * through a callback. The given `setter` function sets the keys and values
     * of the composed object.
     *
     * @private
     * @param {Function} setter The setter function.
     * @returns {Function} Returns the new aggregator function.
     */
    function createAggregator(setter) {
      return function(collection, callback, thisArg) {
        var result = {};
        callback = lodash.createCallback(callback, thisArg, 3);

        var index = -1,
            length = collection ? collection.length : 0;

        if (typeof length == 'number') {
          while (++index < length) {
            var value = collection[index];
            setter(result, value, callback(value, index, collection), collection);
          }
        } else {
          forOwn(collection, function(value, key, collection) {
            setter(result, value, callback(value, key, collection), collection);
          });
        }
        return result;
      };
    }

    /**
     * Creates a function that, when called, either curries or invokes `func`
     * with an optional `this` binding and partially applied arguments.
     *
     * @private
     * @param {Function|string} func The function or method name to reference.
     * @param {number} bitmask The bitmask of method flags to compose.
     *  The bitmask may be composed of the following flags:
     *  1 - `_.bind`
     *  2 - `_.bindKey`
     *  4 - `_.curry`
     *  8 - `_.curry` (bound)
     *  16 - `_.partial`
     *  32 - `_.partialRight`
     * @param {Array} [partialArgs] An array of arguments to prepend to those
     *  provided to the new function.
     * @param {Array} [partialRightArgs] An array of arguments to append to those
     *  provided to the new function.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {number} [arity] The arity of `func`.
     * @returns {Function} Returns the new function.
     */
    function createWrapper(func, bitmask, partialArgs, partialRightArgs, thisArg, arity) {
      var isBind = bitmask & 1,
          isBindKey = bitmask & 2,
          isCurry = bitmask & 4,
          isCurryBound = bitmask & 8,
          isPartial = bitmask & 16,
          isPartialRight = bitmask & 32;

      if (!isBindKey && !isFunction(func)) {
        throw new TypeError;
      }
      if (isPartial && !partialArgs.length) {
        bitmask &= ~16;
        isPartial = partialArgs = false;
      }
      if (isPartialRight && !partialRightArgs.length) {
        bitmask &= ~32;
        isPartialRight = partialRightArgs = false;
      }
      var bindData = func && func.__bindData__;
      if (bindData && bindData !== true) {
        // clone `bindData`
        bindData = slice(bindData);
        if (bindData[2]) {
          bindData[2] = slice(bindData[2]);
        }
        if (bindData[3]) {
          bindData[3] = slice(bindData[3]);
        }
        // set `thisBinding` is not previously bound
        if (isBind && !(bindData[1] & 1)) {
          bindData[4] = thisArg;
        }
        // set if previously bound but not currently (subsequent curried functions)
        if (!isBind && bindData[1] & 1) {
          bitmask |= 8;
        }
        // set curried arity if not yet set
        if (isCurry && !(bindData[1] & 4)) {
          bindData[5] = arity;
        }
        // append partial left arguments
        if (isPartial) {
          push.apply(bindData[2] || (bindData[2] = []), partialArgs);
        }
        // append partial right arguments
        if (isPartialRight) {
          unshift.apply(bindData[3] || (bindData[3] = []), partialRightArgs);
        }
        // merge flags
        bindData[1] |= bitmask;
        return createWrapper.apply(null, bindData);
      }
      // fast path for `_.bind`
      var creater = (bitmask == 1 || bitmask === 17) ? baseBind : baseCreateWrapper;
      return creater([func, bitmask, partialArgs, partialRightArgs, thisArg, arity]);
    }

    /**
     * Used by `escape` to convert characters to HTML entities.
     *
     * @private
     * @param {string} match The matched character to escape.
     * @returns {string} Returns the escaped character.
     */
    function escapeHtmlChar(match) {
      return htmlEscapes[match];
    }

    /**
     * Gets the appropriate "indexOf" function. If the `_.indexOf` method is
     * customized, this method returns the custom method, otherwise it returns
     * the `baseIndexOf` function.
     *
     * @private
     * @returns {Function} Returns the "indexOf" function.
     */
    function getIndexOf() {
      var result = (result = lodash.indexOf) === indexOf ? baseIndexOf : result;
      return result;
    }

    /**
     * Checks if `value` is a native function.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a native function, else `false`.
     */
    function isNative(value) {
      return typeof value == 'function' && reNative.test(value);
    }

    /**
     * Sets `this` binding data on a given function.
     *
     * @private
     * @param {Function} func The function to set data on.
     * @param {Array} value The data array to set.
     */
    var setBindData = !defineProperty ? noop : function(func, value) {
      descriptor.value = value;
      defineProperty(func, '__bindData__', descriptor);
    };

    /**
     * A fallback implementation of `isPlainObject` which checks if a given value
     * is an object created by the `Object` constructor, assuming objects created
     * by the `Object` constructor have no inherited enumerable properties and that
     * there are no `Object.prototype` extensions.
     *
     * @private
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     */
    function shimIsPlainObject(value) {
      var ctor,
          result;

      // avoid non Object objects, `arguments` objects, and DOM elements
      if (!(value && toString.call(value) == objectClass) ||
          (ctor = value.constructor, isFunction(ctor) && !(ctor instanceof ctor))) {
        return false;
      }
      // In most environments an object's own properties are iterated before
      // its inherited properties. If the last iterated property is an object's
      // own property then there are no inherited enumerable properties.
      forIn(value, function(value, key) {
        result = key;
      });
      return typeof result == 'undefined' || hasOwnProperty.call(value, result);
    }

    /**
     * Used by `unescape` to convert HTML entities to characters.
     *
     * @private
     * @param {string} match The matched character to unescape.
     * @returns {string} Returns the unescaped character.
     */
    function unescapeHtmlChar(match) {
      return htmlUnescapes[match];
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Checks if `value` is an `arguments` object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an `arguments` object, else `false`.
     * @example
     *
     * (function() { return _.isArguments(arguments); })(1, 2, 3);
     * // => true
     *
     * _.isArguments([1, 2, 3]);
     * // => false
     */
    function isArguments(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == argsClass || false;
    }

    /**
     * Checks if `value` is an array.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an array, else `false`.
     * @example
     *
     * (function() { return _.isArray(arguments); })();
     * // => false
     *
     * _.isArray([1, 2, 3]);
     * // => true
     */
    var isArray = nativeIsArray || function(value) {
      return value && typeof value == 'object' && typeof value.length == 'number' &&
        toString.call(value) == arrayClass || false;
    };

    /**
     * A fallback implementation of `Object.keys` which produces an array of the
     * given object's own enumerable property names.
     *
     * @private
     * @type Function
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     */
    var shimKeys = function(object) {
      var index, iterable = object, result = [];
      if (!iterable) return result;
      if (!(objectTypes[typeof object])) return result;
        for (index in iterable) {
          if (hasOwnProperty.call(iterable, index)) {
            result.push(index);
          }
        }
      return result
    };

    /**
     * Creates an array composed of the own enumerable property names of an object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names.
     * @example
     *
     * _.keys({ 'one': 1, 'two': 2, 'three': 3 });
     * // => ['one', 'two', 'three'] (property order is not guaranteed across environments)
     */
    var keys = !nativeKeys ? shimKeys : function(object) {
      if (!isObject(object)) {
        return [];
      }
      return nativeKeys(object);
    };

    /**
     * Used to convert characters to HTML entities:
     *
     * Though the `>` character is escaped for symmetry, characters like `>` and `/`
     * don't require escaping in HTML and have no special meaning unless they're part
     * of a tag or an unquoted attribute value.
     * http://mathiasbynens.be/notes/ambiguous-ampersands (under "semi-related fun fact")
     */
    var htmlEscapes = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    };

    /** Used to convert HTML entities to characters */
    var htmlUnescapes = invert(htmlEscapes);

    /** Used to match HTML entities and HTML characters */
    var reEscapedHtml = RegExp('(' + keys(htmlUnescapes).join('|') + ')', 'g'),
        reUnescapedHtml = RegExp('[' + keys(htmlEscapes).join('') + ']', 'g');

    /*--------------------------------------------------------------------------*/

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object. Subsequent sources will overwrite property assignments of previous
     * sources. If a callback is provided it will be executed to produce the
     * assigned values. The callback is bound to `thisArg` and invoked with two
     * arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @type Function
     * @alias extend
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize assigning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * _.assign({ 'name': 'fred' }, { 'employer': 'slate' });
     * // => { 'name': 'fred', 'employer': 'slate' }
     *
     * var defaults = _.partialRight(_.assign, function(a, b) {
     *   return typeof a == 'undefined' ? b : a;
     * });
     *
     * var object = { 'name': 'barney' };
     * defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var assign = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      if (argsLength > 3 && typeof args[argsLength - 2] == 'function') {
        var callback = baseCreateCallback(args[--argsLength - 1], args[argsLength--], 2);
      } else if (argsLength > 2 && typeof args[argsLength - 1] == 'function') {
        callback = args[--argsLength];
      }
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          result[index] = callback ? callback(result[index], iterable[index]) : iterable[index];
        }
        }
      }
      return result
    };

    /**
     * Creates a clone of `value`. If `isDeep` is `true` nested objects will also
     * be cloned, otherwise they will be assigned by reference. If a callback
     * is provided it will be executed to produce the cloned values. If the
     * callback returns `undefined` cloning will be handled by the method instead.
     * The callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to clone.
     * @param {boolean} [isDeep=false] Specify a deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var shallow = _.clone(characters);
     * shallow[0] === characters[0];
     * // => true
     *
     * var deep = _.clone(characters, true);
     * deep[0] === characters[0];
     * // => false
     *
     * _.mixin({
     *   'clone': _.partialRight(_.clone, function(value) {
     *     return _.isElement(value) ? value.cloneNode(false) : undefined;
     *   })
     * });
     *
     * var clone = _.clone(document.body);
     * clone.childNodes.length;
     * // => 0
     */
    function clone(value, isDeep, callback, thisArg) {
      // allows working with "Collections" methods without using their `index`
      // and `collection` arguments for `isDeep` and `callback`
      if (typeof isDeep != 'boolean' && isDeep != null) {
        thisArg = callback;
        callback = isDeep;
        isDeep = false;
      }
      return baseClone(value, isDeep, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates a deep clone of `value`. If a callback is provided it will be
     * executed to produce the cloned values. If the callback returns `undefined`
     * cloning will be handled by the method instead. The callback is bound to
     * `thisArg` and invoked with one argument; (value).
     *
     * Note: This method is loosely based on the structured clone algorithm. Functions
     * and DOM nodes are **not** cloned. The enumerable properties of `arguments` objects and
     * objects created by constructors other than `Object` are cloned to plain `Object` objects.
     * See http://www.w3.org/TR/html5/infrastructure.html#internal-structured-cloning-algorithm.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to deep clone.
     * @param {Function} [callback] The function to customize cloning values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the deep cloned value.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * var deep = _.cloneDeep(characters);
     * deep[0] === characters[0];
     * // => false
     *
     * var view = {
     *   'label': 'docs',
     *   'node': element
     * };
     *
     * var clone = _.cloneDeep(view, function(value) {
     *   return _.isElement(value) ? value.cloneNode(true) : undefined;
     * });
     *
     * clone.node == view.node;
     * // => false
     */
    function cloneDeep(value, callback, thisArg) {
      return baseClone(value, true, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 1));
    }

    /**
     * Creates an object that inherits from the given `prototype` object. If a
     * `properties` object is provided its own enumerable properties are assigned
     * to the created object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} prototype The object to inherit from.
     * @param {Object} [properties] The properties to assign to the object.
     * @returns {Object} Returns the new object.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * function Circle() {
     *   Shape.call(this);
     * }
     *
     * Circle.prototype = _.create(Shape.prototype, { 'constructor': Circle });
     *
     * var circle = new Circle;
     * circle instanceof Circle;
     * // => true
     *
     * circle instanceof Shape;
     * // => true
     */
    function create(prototype, properties) {
      var result = baseCreate(prototype);
      return properties ? assign(result, properties) : result;
    }

    /**
     * Assigns own enumerable properties of source object(s) to the destination
     * object for all destination properties that resolve to `undefined`. Once a
     * property is set, additional defaults of the same property will be ignored.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param- {Object} [guard] Allows working with `_.reduce` without using its
     *  `key` and `object` arguments as sources.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var object = { 'name': 'barney' };
     * _.defaults(object, { 'name': 'fred', 'employer': 'slate' });
     * // => { 'name': 'barney', 'employer': 'slate' }
     */
    var defaults = function(object, source, guard) {
      var index, iterable = object, result = iterable;
      if (!iterable) return result;
      var args = arguments,
          argsIndex = 0,
          argsLength = typeof guard == 'number' ? 2 : args.length;
      while (++argsIndex < argsLength) {
        iterable = args[argsIndex];
        if (iterable && objectTypes[typeof iterable]) {
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (typeof result[index] == 'undefined') result[index] = iterable[index];
        }
        }
      }
      return result
    };

    /**
     * This method is like `_.findIndex` except that it returns the key of the
     * first element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': false },
     *   'fred': {    'age': 40, 'blocked': true },
     *   'pebbles': { 'age': 1,  'blocked': false }
     * };
     *
     * _.findKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => 'barney' (property order is not guaranteed across environments)
     *
     * // using "_.where" callback shorthand
     * _.findKey(characters, { 'age': 1 });
     * // => 'pebbles'
     *
     * // using "_.pluck" callback shorthand
     * _.findKey(characters, 'blocked');
     * // => 'fred'
     */
    function findKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwn(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * This method is like `_.findKey` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to search.
     * @param {Function|Object|string} [callback=identity] The function called per
     *  iteration. If a property name or object is provided it will be used to
     *  create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {string|undefined} Returns the key of the found element, else `undefined`.
     * @example
     *
     * var characters = {
     *   'barney': {  'age': 36, 'blocked': true },
     *   'fred': {    'age': 40, 'blocked': false },
     *   'pebbles': { 'age': 1,  'blocked': true }
     * };
     *
     * _.findLastKey(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => returns `pebbles`, assuming `_.findKey` returns `barney`
     *
     * // using "_.where" callback shorthand
     * _.findLastKey(characters, { 'age': 40 });
     * // => 'fred'
     *
     * // using "_.pluck" callback shorthand
     * _.findLastKey(characters, 'blocked');
     * // => 'pebbles'
     */
    function findLastKey(object, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forOwnRight(object, function(value, key, object) {
        if (callback(value, key, object)) {
          result = key;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over own and inherited enumerable properties of an object,
     * executing the callback for each property. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, key, object). Callbacks may exit
     * iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forIn(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'x', 'y', and 'move' (property order is not guaranteed across environments)
     */
    var forIn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        for (index in iterable) {
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forIn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * Shape.prototype.move = function(x, y) {
     *   this.x += x;
     *   this.y += y;
     * };
     *
     * _.forInRight(new Shape, function(value, key) {
     *   console.log(key);
     * });
     * // => logs 'move', 'y', and 'x' assuming `_.forIn ` logs 'x', 'y', and 'move'
     */
    function forInRight(object, callback, thisArg) {
      var pairs = [];

      forIn(object, function(value, key) {
        pairs.push(key, value);
      });

      var length = pairs.length;
      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(pairs[length--], pairs[length], object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Iterates over own enumerable properties of an object, executing the callback
     * for each property. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, key, object). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwn({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs '0', '1', and 'length' (property order is not guaranteed across environments)
     */
    var forOwn = function(collection, callback, thisArg) {
      var index, iterable = collection, result = iterable;
      if (!iterable) return result;
      if (!objectTypes[typeof iterable]) return result;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
        var ownIndex = -1,
            ownProps = objectTypes[typeof iterable] && keys(iterable),
            length = ownProps ? ownProps.length : 0;

        while (++ownIndex < length) {
          index = ownProps[ownIndex];
          if (callback(iterable[index], index, collection) === false) return result;
        }
      return result
    };

    /**
     * This method is like `_.forOwn` except that it iterates over elements
     * of a `collection` in the opposite order.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns `object`.
     * @example
     *
     * _.forOwnRight({ '0': 'zero', '1': 'one', 'length': 2 }, function(num, key) {
     *   console.log(key);
     * });
     * // => logs 'length', '1', and '0' assuming `_.forOwn` logs '0', '1', and 'length'
     */
    function forOwnRight(object, callback, thisArg) {
      var props = keys(object),
          length = props.length;

      callback = baseCreateCallback(callback, thisArg, 3);
      while (length--) {
        var key = props[length];
        if (callback(object[key], key, object) === false) {
          break;
        }
      }
      return object;
    }

    /**
     * Creates a sorted array of property names of all enumerable properties,
     * own and inherited, of `object` that have function values.
     *
     * @static
     * @memberOf _
     * @alias methods
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property names that have function values.
     * @example
     *
     * _.functions(_);
     * // => ['all', 'any', 'bind', 'bindAll', 'clone', 'compact', 'compose', ...]
     */
    function functions(object) {
      var result = [];
      forIn(object, function(value, key) {
        if (isFunction(value)) {
          result.push(key);
        }
      });
      return result.sort();
    }

    /**
     * Checks if the specified property name exists as a direct property of `object`,
     * instead of an inherited property.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to check.
     * @returns {boolean} Returns `true` if key is a direct property, else `false`.
     * @example
     *
     * _.has({ 'a': 1, 'b': 2, 'c': 3 }, 'b');
     * // => true
     */
    function has(object, key) {
      return object ? hasOwnProperty.call(object, key) : false;
    }

    /**
     * Creates an object composed of the inverted keys and values of the given object.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to invert.
     * @returns {Object} Returns the created inverted object.
     * @example
     *
     * _.invert({ 'first': 'fred', 'second': 'barney' });
     * // => { 'fred': 'first', 'barney': 'second' }
     */
    function invert(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = {};

      while (++index < length) {
        var key = props[index];
        result[object[key]] = key;
      }
      return result;
    }

    /**
     * Checks if `value` is a boolean value.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a boolean value, else `false`.
     * @example
     *
     * _.isBoolean(null);
     * // => false
     */
    function isBoolean(value) {
      return value === true || value === false ||
        value && typeof value == 'object' && toString.call(value) == boolClass || false;
    }

    /**
     * Checks if `value` is a date.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a date, else `false`.
     * @example
     *
     * _.isDate(new Date);
     * // => true
     */
    function isDate(value) {
      return value && typeof value == 'object' && toString.call(value) == dateClass || false;
    }

    /**
     * Checks if `value` is a DOM element.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a DOM element, else `false`.
     * @example
     *
     * _.isElement(document.body);
     * // => true
     */
    function isElement(value) {
      return value && value.nodeType === 1 || false;
    }

    /**
     * Checks if `value` is empty. Arrays, strings, or `arguments` objects with a
     * length of `0` and objects with no own enumerable properties are considered
     * "empty".
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object|string} value The value to inspect.
     * @returns {boolean} Returns `true` if the `value` is empty, else `false`.
     * @example
     *
     * _.isEmpty([1, 2, 3]);
     * // => false
     *
     * _.isEmpty({});
     * // => true
     *
     * _.isEmpty('');
     * // => true
     */
    function isEmpty(value) {
      var result = true;
      if (!value) {
        return result;
      }
      var className = toString.call(value),
          length = value.length;

      if ((className == arrayClass || className == stringClass || className == argsClass ) ||
          (className == objectClass && typeof length == 'number' && isFunction(value.splice))) {
        return !length;
      }
      forOwn(value, function() {
        return (result = false);
      });
      return result;
    }

    /**
     * Performs a deep comparison between two values to determine if they are
     * equivalent to each other. If a callback is provided it will be executed
     * to compare values. If the callback returns `undefined` comparisons will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (a, b).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} a The value to compare.
     * @param {*} b The other value to compare.
     * @param {Function} [callback] The function to customize comparing values.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var copy = { 'name': 'fred' };
     *
     * object == copy;
     * // => false
     *
     * _.isEqual(object, copy);
     * // => true
     *
     * var words = ['hello', 'goodbye'];
     * var otherWords = ['hi', 'goodbye'];
     *
     * _.isEqual(words, otherWords, function(a, b) {
     *   var reGreet = /^(?:hello|hi)$/i,
     *       aGreet = _.isString(a) && reGreet.test(a),
     *       bGreet = _.isString(b) && reGreet.test(b);
     *
     *   return (aGreet || bGreet) ? (aGreet == bGreet) : undefined;
     * });
     * // => true
     */
    function isEqual(a, b, callback, thisArg) {
      return baseIsEqual(a, b, typeof callback == 'function' && baseCreateCallback(callback, thisArg, 2));
    }

    /**
     * Checks if `value` is, or can be coerced to, a finite number.
     *
     * Note: This is not the same as native `isFinite` which will return true for
     * booleans and empty strings. See http://es5.github.io/#x15.1.2.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is finite, else `false`.
     * @example
     *
     * _.isFinite(-101);
     * // => true
     *
     * _.isFinite('10');
     * // => true
     *
     * _.isFinite(true);
     * // => false
     *
     * _.isFinite('');
     * // => false
     *
     * _.isFinite(Infinity);
     * // => false
     */
    function isFinite(value) {
      return nativeIsFinite(value) && !nativeIsNaN(parseFloat(value));
    }

    /**
     * Checks if `value` is a function.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a function, else `false`.
     * @example
     *
     * _.isFunction(_);
     * // => true
     */
    function isFunction(value) {
      return typeof value == 'function';
    }

    /**
     * Checks if `value` is the language type of Object.
     * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is an object, else `false`.
     * @example
     *
     * _.isObject({});
     * // => true
     *
     * _.isObject([1, 2, 3]);
     * // => true
     *
     * _.isObject(1);
     * // => false
     */
    function isObject(value) {
      // check if the value is the ECMAScript language type of Object
      // http://es5.github.io/#x8
      // and avoid a V8 bug
      // http://code.google.com/p/v8/issues/detail?id=2291
      return !!(value && objectTypes[typeof value]);
    }

    /**
     * Checks if `value` is `NaN`.
     *
     * Note: This is not the same as native `isNaN` which will return `true` for
     * `undefined` and other non-numeric values. See http://es5.github.io/#x15.1.2.4.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `NaN`, else `false`.
     * @example
     *
     * _.isNaN(NaN);
     * // => true
     *
     * _.isNaN(new Number(NaN));
     * // => true
     *
     * isNaN(undefined);
     * // => true
     *
     * _.isNaN(undefined);
     * // => false
     */
    function isNaN(value) {
      // `NaN` as a primitive is the only value that is not equal to itself
      // (perform the [[Class]] check first to avoid errors with some host objects in IE)
      return isNumber(value) && value != +value;
    }

    /**
     * Checks if `value` is `null`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `null`, else `false`.
     * @example
     *
     * _.isNull(null);
     * // => true
     *
     * _.isNull(undefined);
     * // => false
     */
    function isNull(value) {
      return value === null;
    }

    /**
     * Checks if `value` is a number.
     *
     * Note: `NaN` is considered a number. See http://es5.github.io/#x8.5.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a number, else `false`.
     * @example
     *
     * _.isNumber(8.4 * 5);
     * // => true
     */
    function isNumber(value) {
      return typeof value == 'number' ||
        value && typeof value == 'object' && toString.call(value) == numberClass || false;
    }

    /**
     * Checks if `value` is an object created by the `Object` constructor.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
     * @example
     *
     * function Shape() {
     *   this.x = 0;
     *   this.y = 0;
     * }
     *
     * _.isPlainObject(new Shape);
     * // => false
     *
     * _.isPlainObject([1, 2, 3]);
     * // => false
     *
     * _.isPlainObject({ 'x': 0, 'y': 0 });
     * // => true
     */
    var isPlainObject = !getPrototypeOf ? shimIsPlainObject : function(value) {
      if (!(value && toString.call(value) == objectClass)) {
        return false;
      }
      var valueOf = value.valueOf,
          objProto = isNative(valueOf) && (objProto = getPrototypeOf(valueOf)) && getPrototypeOf(objProto);

      return objProto
        ? (value == objProto || getPrototypeOf(value) == objProto)
        : shimIsPlainObject(value);
    };

    /**
     * Checks if `value` is a regular expression.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a regular expression, else `false`.
     * @example
     *
     * _.isRegExp(/fred/);
     * // => true
     */
    function isRegExp(value) {
      return value && typeof value == 'object' && toString.call(value) == regexpClass || false;
    }

    /**
     * Checks if `value` is a string.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is a string, else `false`.
     * @example
     *
     * _.isString('fred');
     * // => true
     */
    function isString(value) {
      return typeof value == 'string' ||
        value && typeof value == 'object' && toString.call(value) == stringClass || false;
    }

    /**
     * Checks if `value` is `undefined`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {*} value The value to check.
     * @returns {boolean} Returns `true` if the `value` is `undefined`, else `false`.
     * @example
     *
     * _.isUndefined(void 0);
     * // => true
     */
    function isUndefined(value) {
      return typeof value == 'undefined';
    }

    /**
     * Creates an object with the same keys as `object` and values generated by
     * running each own enumerable property of `object` through the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new object with values of the results of each `callback` execution.
     * @example
     *
     * _.mapValues({ 'a': 1, 'b': 2, 'c': 3} , function(num) { return num * 3; });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     *
     * var characters = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // using "_.pluck" callback shorthand
     * _.mapValues(characters, 'age');
     * // => { 'fred': 40, 'pebbles': 1 }
     */
    function mapValues(object, callback, thisArg) {
      var result = {};
      callback = lodash.createCallback(callback, thisArg, 3);

      forOwn(object, function(value, key, object) {
        result[key] = callback(value, key, object);
      });
      return result;
    }

    /**
     * Recursively merges own enumerable properties of the source object(s), that
     * don't resolve to `undefined` into the destination object. Subsequent sources
     * will overwrite property assignments of previous sources. If a callback is
     * provided it will be executed to produce the merged values of the destination
     * and source properties. If the callback returns `undefined` merging will
     * be handled by the method instead. The callback is bound to `thisArg` and
     * invoked with two arguments; (objectValue, sourceValue).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The destination object.
     * @param {...Object} [source] The source objects.
     * @param {Function} [callback] The function to customize merging properties.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the destination object.
     * @example
     *
     * var names = {
     *   'characters': [
     *     { 'name': 'barney' },
     *     { 'name': 'fred' }
     *   ]
     * };
     *
     * var ages = {
     *   'characters': [
     *     { 'age': 36 },
     *     { 'age': 40 }
     *   ]
     * };
     *
     * _.merge(names, ages);
     * // => { 'characters': [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred', 'age': 40 }] }
     *
     * var food = {
     *   'fruits': ['apple'],
     *   'vegetables': ['beet']
     * };
     *
     * var otherFood = {
     *   'fruits': ['banana'],
     *   'vegetables': ['carrot']
     * };
     *
     * _.merge(food, otherFood, function(a, b) {
     *   return _.isArray(a) ? a.concat(b) : undefined;
     * });
     * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot] }
     */
    function merge(object) {
      var args = arguments,
          length = 2;

      if (!isObject(object)) {
        return object;
      }
      // allows working with `_.reduce` and `_.reduceRight` without using
      // their `index` and `collection` arguments
      if (typeof args[2] != 'number') {
        length = args.length;
      }
      if (length > 3 && typeof args[length - 2] == 'function') {
        var callback = baseCreateCallback(args[--length - 1], args[length--], 2);
      } else if (length > 2 && typeof args[length - 1] == 'function') {
        callback = args[--length];
      }
      var sources = slice(arguments, 1, length),
          index = -1,
          stackA = getArray(),
          stackB = getArray();

      while (++index < length) {
        baseMerge(object, sources[index], callback, stackA, stackB);
      }
      releaseArray(stackA);
      releaseArray(stackB);
      return object;
    }

    /**
     * Creates a shallow clone of `object` excluding the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` omitting the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The properties to omit or the
     *  function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object without the omitted properties.
     * @example
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, 'age');
     * // => { 'name': 'fred' }
     *
     * _.omit({ 'name': 'fred', 'age': 40 }, function(value) {
     *   return typeof value == 'number';
     * });
     * // => { 'name': 'fred' }
     */
    function omit(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var props = [];
        forIn(object, function(value, key) {
          props.push(key);
        });
        props = baseDifference(props, baseFlatten(arguments, true, false, 1));

        var index = -1,
            length = props.length;

        while (++index < length) {
          var key = props[index];
          result[key] = object[key];
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (!callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * Creates a two dimensional array of an object's key-value pairs,
     * i.e. `[[key1, value1], [key2, value2]]`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns new array of key-value pairs.
     * @example
     *
     * _.pairs({ 'barney': 36, 'fred': 40 });
     * // => [['barney', 36], ['fred', 40]] (property order is not guaranteed across environments)
     */
    function pairs(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        var key = props[index];
        result[index] = [key, object[key]];
      }
      return result;
    }

    /**
     * Creates a shallow clone of `object` composed of the specified properties.
     * Property names may be specified as individual arguments or as arrays of
     * property names. If a callback is provided it will be executed for each
     * property of `object` picking the properties the callback returns truey
     * for. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, key, object).
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The source object.
     * @param {Function|...string|string[]} [callback] The function called per
     *  iteration or property names to pick, specified as individual property
     *  names or arrays of property names.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns an object composed of the picked properties.
     * @example
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, 'name');
     * // => { 'name': 'fred' }
     *
     * _.pick({ 'name': 'fred', '_userid': 'fred1' }, function(value, key) {
     *   return key.charAt(0) != '_';
     * });
     * // => { 'name': 'fred' }
     */
    function pick(object, callback, thisArg) {
      var result = {};
      if (typeof callback != 'function') {
        var index = -1,
            props = baseFlatten(arguments, true, false, 1),
            length = isObject(object) ? props.length : 0;

        while (++index < length) {
          var key = props[index];
          if (key in object) {
            result[key] = object[key];
          }
        }
      } else {
        callback = lodash.createCallback(callback, thisArg, 3);
        forIn(object, function(value, key, object) {
          if (callback(value, key, object)) {
            result[key] = value;
          }
        });
      }
      return result;
    }

    /**
     * An alternative to `_.reduce` this method transforms `object` to a new
     * `accumulator` object which is the result of running each of its own
     * enumerable properties through a callback, with each callback execution
     * potentially mutating the `accumulator` object. The callback is bound to
     * `thisArg` and invoked with four arguments; (accumulator, value, key, object).
     * Callbacks may exit iteration early by explicitly returning `false`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Array|Object} object The object to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] The custom accumulator value.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var squares = _.transform([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], function(result, num) {
     *   num *= num;
     *   if (num % 2) {
     *     return result.push(num) < 3;
     *   }
     * });
     * // => [1, 9, 25]
     *
     * var mapped = _.transform({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     * });
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function transform(object, callback, accumulator, thisArg) {
      var isArr = isArray(object);
      if (accumulator == null) {
        if (isArr) {
          accumulator = [];
        } else {
          var ctor = object && object.constructor,
              proto = ctor && ctor.prototype;

          accumulator = baseCreate(proto);
        }
      }
      if (callback) {
        callback = lodash.createCallback(callback, thisArg, 4);
        (isArr ? forEach : forOwn)(object, function(value, index, object) {
          return callback(accumulator, value, index, object);
        });
      }
      return accumulator;
    }

    /**
     * Creates an array composed of the own enumerable property values of `object`.
     *
     * @static
     * @memberOf _
     * @category Objects
     * @param {Object} object The object to inspect.
     * @returns {Array} Returns an array of property values.
     * @example
     *
     * _.values({ 'one': 1, 'two': 2, 'three': 3 });
     * // => [1, 2, 3] (property order is not guaranteed across environments)
     */
    function values(object) {
      var index = -1,
          props = keys(object),
          length = props.length,
          result = Array(length);

      while (++index < length) {
        result[index] = object[props[index]];
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array of elements from the specified indexes, or keys, of the
     * `collection`. Indexes may be specified as individual arguments or as arrays
     * of indexes.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {...(number|number[]|string|string[])} [index] The indexes of `collection`
     *   to retrieve, specified as individual indexes or arrays of indexes.
     * @returns {Array} Returns a new array of elements corresponding to the
     *  provided indexes.
     * @example
     *
     * _.at(['a', 'b', 'c', 'd', 'e'], [0, 2, 4]);
     * // => ['a', 'c', 'e']
     *
     * _.at(['fred', 'barney', 'pebbles'], 0, 2);
     * // => ['fred', 'pebbles']
     */
    function at(collection) {
      var args = arguments,
          index = -1,
          props = baseFlatten(args, true, false, 1),
          length = (args[2] && args[2][args[1]] === collection) ? 1 : props.length,
          result = Array(length);

      while(++index < length) {
        result[index] = collection[props[index]];
      }
      return result;
    }

    /**
     * Checks if a given value is present in a collection using strict equality
     * for comparisons, i.e. `===`. If `fromIndex` is negative, it is used as the
     * offset from the end of the collection.
     *
     * @static
     * @memberOf _
     * @alias include
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {*} target The value to check for.
     * @param {number} [fromIndex=0] The index to search from.
     * @returns {boolean} Returns `true` if the `target` element is found, else `false`.
     * @example
     *
     * _.contains([1, 2, 3], 1);
     * // => true
     *
     * _.contains([1, 2, 3], 1, 2);
     * // => false
     *
     * _.contains({ 'name': 'fred', 'age': 40 }, 'fred');
     * // => true
     *
     * _.contains('pebbles', 'eb');
     * // => true
     */
    function contains(collection, target, fromIndex) {
      var index = -1,
          indexOf = getIndexOf(),
          length = collection ? collection.length : 0,
          result = false;

      fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex) || 0;
      if (isArray(collection)) {
        result = indexOf(collection, target, fromIndex) > -1;
      } else if (typeof length == 'number') {
        result = (isString(collection) ? collection.indexOf(target, fromIndex) : indexOf(collection, target, fromIndex)) > -1;
      } else {
        forOwn(collection, function(value) {
          if (++index >= fromIndex) {
            return !(result = value === target);
          }
        });
      }
      return result;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of `collection` through the callback. The corresponding value
     * of each key is the number of times the key was returned by the callback.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy([4.3, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': 1, '6': 2 }
     *
     * _.countBy(['one', 'two', 'three'], 'length');
     * // => { '3': 2, '5': 1 }
     */
    var countBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key]++ : result[key] = 1);
    });

    /**
     * Checks if the given callback returns truey value for **all** elements of
     * a collection. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias all
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if all elements passed the callback check,
     *  else `false`.
     * @example
     *
     * _.every([true, 1, null, 'yes']);
     * // => false
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.every(characters, 'age');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.every(characters, { 'age': 36 });
     * // => false
     */
    function every(collection, callback, thisArg) {
      var result = true;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if (!(result = !!callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return (result = !!callback(value, index, collection));
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning an array of all elements
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias select
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that passed the callback check.
     * @example
     *
     * var evens = _.filter([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [2, 4, 6]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.filter(characters, 'blocked');
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     *
     * // using "_.where" callback shorthand
     * _.filter(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     */
    function filter(collection, callback, thisArg) {
      var result = [];
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            result.push(value);
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result.push(value);
          }
        });
      }
      return result;
    }

    /**
     * Iterates over elements of a collection, returning the first element that
     * the callback returns truey for. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias detect, findWhere
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.find(characters, function(chr) {
     *   return chr.age < 40;
     * });
     * // => { 'name': 'barney', 'age': 36, 'blocked': false }
     *
     * // using "_.where" callback shorthand
     * _.find(characters, { 'age': 1 });
     * // =>  { 'name': 'pebbles', 'age': 1, 'blocked': false }
     *
     * // using "_.pluck" callback shorthand
     * _.find(characters, 'blocked');
     * // => { 'name': 'fred', 'age': 40, 'blocked': true }
     */
    function find(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          var value = collection[index];
          if (callback(value, index, collection)) {
            return value;
          }
        }
      } else {
        var result;
        forOwn(collection, function(value, index, collection) {
          if (callback(value, index, collection)) {
            result = value;
            return false;
          }
        });
        return result;
      }
    }

    /**
     * This method is like `_.find` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the found element, else `undefined`.
     * @example
     *
     * _.findLast([1, 2, 3, 4], function(num) {
     *   return num % 2 == 1;
     * });
     * // => 3
     */
    function findLast(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);
      forEachRight(collection, function(value, index, collection) {
        if (callback(value, index, collection)) {
          result = value;
          return false;
        }
      });
      return result;
    }

    /**
     * Iterates over elements of a collection, executing the callback for each
     * element. The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection). Callbacks may exit iteration early by
     * explicitly returning `false`.
     *
     * Note: As with other "Collections" methods, objects with a `length` property
     * are iterated like arrays. To avoid this behavior `_.forIn` or `_.forOwn`
     * may be used for object iteration.
     *
     * @static
     * @memberOf _
     * @alias each
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEach(function(num) { console.log(num); }).join(',');
     * // => logs each number and returns '1,2,3'
     *
     * _.forEach({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { console.log(num); });
     * // => logs each number and returns the object (property order is not guaranteed across environments)
     */
    function forEach(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (++index < length) {
          if (callback(collection[index], index, collection) === false) {
            break;
          }
        }
      } else {
        forOwn(collection, callback);
      }
      return collection;
    }

    /**
     * This method is like `_.forEach` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias eachRight
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array|Object|string} Returns `collection`.
     * @example
     *
     * _([1, 2, 3]).forEachRight(function(num) { console.log(num); }).join(',');
     * // => logs each number from right to left and returns '3,2,1'
     */
    function forEachRight(collection, callback, thisArg) {
      var length = collection ? collection.length : 0;
      callback = callback && typeof thisArg == 'undefined' ? callback : baseCreateCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        while (length--) {
          if (callback(collection[length], length, collection) === false) {
            break;
          }
        }
      } else {
        var props = keys(collection);
        length = props.length;
        forOwn(collection, function(value, key, collection) {
          key = props ? props[--length] : --length;
          return callback(collection[key], key, collection);
        });
      }
      return collection;
    }

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of a collection through the callback. The corresponding value
     * of each key is an array of the elements responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return Math.floor(num); });
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * _.groupBy([4.2, 6.1, 6.4], function(num) { return this.floor(num); }, Math);
     * // => { '4': [4.2], '6': [6.1, 6.4] }
     *
     * // using "_.pluck" callback shorthand
     * _.groupBy(['one', 'two', 'three'], 'length');
     * // => { '3': ['one', 'two'], '5': ['three'] }
     */
    var groupBy = createAggregator(function(result, value, key) {
      (hasOwnProperty.call(result, key) ? result[key] : result[key] = []).push(value);
    });

    /**
     * Creates an object composed of keys generated from the results of running
     * each element of the collection through the given callback. The corresponding
     * value of each key is the last element responsible for generating the key.
     * The callback is bound to `thisArg` and invoked with three arguments;
     * (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Object} Returns the composed aggregate object.
     * @example
     *
     * var keys = [
     *   { 'dir': 'left', 'code': 97 },
     *   { 'dir': 'right', 'code': 100 }
     * ];
     *
     * _.indexBy(keys, 'dir');
     * // => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(keys, function(key) { return String.fromCharCode(key.code); });
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     *
     * _.indexBy(characters, function(key) { this.fromCharCode(key.code); }, String);
     * // => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }
     */
    var indexBy = createAggregator(function(result, value, key) {
      result[key] = value;
    });

    /**
     * Invokes the method named by `methodName` on each element in the `collection`
     * returning an array of the results of each invoked method. Additional arguments
     * will be provided to each invoked method. If `methodName` is a function it
     * will be invoked for, and `this` bound to, each element in the `collection`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|string} methodName The name of the method to invoke or
     *  the function invoked per iteration.
     * @param {...*} [arg] Arguments to invoke the method with.
     * @returns {Array} Returns a new array of the results of each invoked method.
     * @example
     *
     * _.invoke([[5, 1, 7], [3, 2, 1]], 'sort');
     * // => [[1, 5, 7], [1, 2, 3]]
     *
     * _.invoke([123, 456], String.prototype.split, '');
     * // => [['1', '2', '3'], ['4', '5', '6']]
     */
    function invoke(collection, methodName) {
      var args = slice(arguments, 2),
          index = -1,
          isFunc = typeof methodName == 'function',
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        result[++index] = (isFunc ? methodName : value[methodName]).apply(value, args);
      });
      return result;
    }

    /**
     * Creates an array of values by running each element in the collection
     * through the callback. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias collect
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of the results of each `callback` execution.
     * @example
     *
     * _.map([1, 2, 3], function(num) { return num * 3; });
     * // => [3, 6, 9]
     *
     * _.map({ 'one': 1, 'two': 2, 'three': 3 }, function(num) { return num * 3; });
     * // => [3, 6, 9] (property order is not guaranteed across environments)
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(characters, 'name');
     * // => ['barney', 'fred']
     */
    function map(collection, callback, thisArg) {
      var index = -1,
          length = collection ? collection.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      if (typeof length == 'number') {
        var result = Array(length);
        while (++index < length) {
          result[index] = callback(collection[index], index, collection);
        }
      } else {
        result = [];
        forOwn(collection, function(value, key, collection) {
          result[++index] = callback(value, key, collection);
        });
      }
      return result;
    }

    /**
     * Retrieves the maximum value of a collection. If the collection is empty or
     * falsey `-Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the maximum value.
     * @example
     *
     * _.max([4, 2, 8, 6]);
     * // => 8
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.max(characters, function(chr) { return chr.age; });
     * // => { 'name': 'fred', 'age': 40 };
     *
     * // using "_.pluck" callback shorthand
     * _.max(characters, 'age');
     * // => { 'name': 'fred', 'age': 40 };
     */
    function max(collection, callback, thisArg) {
      var computed = -Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value > result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current > computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the minimum value of a collection. If the collection is empty or
     * falsey `Infinity` is returned. If a callback is provided it will be executed
     * for each value in the collection to generate the criterion by which the value
     * is ranked. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the minimum value.
     * @example
     *
     * _.min([4, 2, 8, 6]);
     * // => 2
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.min(characters, function(chr) { return chr.age; });
     * // => { 'name': 'barney', 'age': 36 };
     *
     * // using "_.pluck" callback shorthand
     * _.min(characters, 'age');
     * // => { 'name': 'barney', 'age': 36 };
     */
    function min(collection, callback, thisArg) {
      var computed = Infinity,
          result = computed;

      // allows working with functions like `_.map` without using
      // their `index` argument as a callback
      if (typeof callback != 'function' && thisArg && thisArg[callback] === collection) {
        callback = null;
      }
      if (callback == null && isArray(collection)) {
        var index = -1,
            length = collection.length;

        while (++index < length) {
          var value = collection[index];
          if (value < result) {
            result = value;
          }
        }
      } else {
        callback = (callback == null && isString(collection))
          ? charAtCallback
          : lodash.createCallback(callback, thisArg, 3);

        forEach(collection, function(value, index, collection) {
          var current = callback(value, index, collection);
          if (current < computed) {
            computed = current;
            result = value;
          }
        });
      }
      return result;
    }

    /**
     * Retrieves the value of a specified property from all elements in the collection.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {string} property The name of the property to pluck.
     * @returns {Array} Returns a new array of property values.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * _.pluck(characters, 'name');
     * // => ['barney', 'fred']
     */
    var pluck = map;

    /**
     * Reduces a collection to a value which is the accumulated result of running
     * each element in the collection through the callback, where each successive
     * callback execution consumes the return value of the previous execution. If
     * `accumulator` is not provided the first element of the collection will be
     * used as the initial `accumulator` value. The callback is bound to `thisArg`
     * and invoked with four arguments; (accumulator, value, index|key, collection).
     *
     * @static
     * @memberOf _
     * @alias foldl, inject
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var sum = _.reduce([1, 2, 3], function(sum, num) {
     *   return sum + num;
     * });
     * // => 6
     *
     * var mapped = _.reduce({ 'a': 1, 'b': 2, 'c': 3 }, function(result, num, key) {
     *   result[key] = num * 3;
     *   return result;
     * }, {});
     * // => { 'a': 3, 'b': 6, 'c': 9 }
     */
    function reduce(collection, callback, accumulator, thisArg) {
      if (!collection) return accumulator;
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);

      var index = -1,
          length = collection.length;

      if (typeof length == 'number') {
        if (noaccum) {
          accumulator = collection[++index];
        }
        while (++index < length) {
          accumulator = callback(accumulator, collection[index], index, collection);
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          accumulator = noaccum
            ? (noaccum = false, value)
            : callback(accumulator, value, index, collection)
        });
      }
      return accumulator;
    }

    /**
     * This method is like `_.reduce` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * @static
     * @memberOf _
     * @alias foldr
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function} [callback=identity] The function called per iteration.
     * @param {*} [accumulator] Initial value of the accumulator.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the accumulated value.
     * @example
     *
     * var list = [[0, 1], [2, 3], [4, 5]];
     * var flat = _.reduceRight(list, function(a, b) { return a.concat(b); }, []);
     * // => [4, 5, 2, 3, 0, 1]
     */
    function reduceRight(collection, callback, accumulator, thisArg) {
      var noaccum = arguments.length < 3;
      callback = lodash.createCallback(callback, thisArg, 4);
      forEachRight(collection, function(value, index, collection) {
        accumulator = noaccum
          ? (noaccum = false, value)
          : callback(accumulator, value, index, collection);
      });
      return accumulator;
    }

    /**
     * The opposite of `_.filter` this method returns the elements of a
     * collection that the callback does **not** return truey for.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of elements that failed the callback check.
     * @example
     *
     * var odds = _.reject([1, 2, 3, 4, 5, 6], function(num) { return num % 2 == 0; });
     * // => [1, 3, 5]
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.reject(characters, 'blocked');
     * // => [{ 'name': 'barney', 'age': 36, 'blocked': false }]
     *
     * // using "_.where" callback shorthand
     * _.reject(characters, { 'age': 36 });
     * // => [{ 'name': 'fred', 'age': 40, 'blocked': true }]
     */
    function reject(collection, callback, thisArg) {
      callback = lodash.createCallback(callback, thisArg, 3);
      return filter(collection, function(value, index, collection) {
        return !callback(value, index, collection);
      });
    }

    /**
     * Retrieves a random element or `n` random elements from a collection.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to sample.
     * @param {number} [n] The number of elements to sample.
     * @param- {Object} [guard] Allows working with functions like `_.map`
     *  without using their `index` arguments as `n`.
     * @returns {Array} Returns the random sample(s) of `collection`.
     * @example
     *
     * _.sample([1, 2, 3, 4]);
     * // => 2
     *
     * _.sample([1, 2, 3, 4], 2);
     * // => [3, 1]
     */
    function sample(collection, n, guard) {
      if (collection && typeof collection.length != 'number') {
        collection = values(collection);
      }
      if (n == null || guard) {
        return collection ? collection[baseRandom(0, collection.length - 1)] : undefined;
      }
      var result = shuffle(collection);
      result.length = nativeMin(nativeMax(0, n), result.length);
      return result;
    }

    /**
     * Creates an array of shuffled values, using a version of the Fisher-Yates
     * shuffle. See http://en.wikipedia.org/wiki/Fisher-Yates_shuffle.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to shuffle.
     * @returns {Array} Returns a new shuffled collection.
     * @example
     *
     * _.shuffle([1, 2, 3, 4, 5, 6]);
     * // => [4, 1, 6, 3, 5, 2]
     */
    function shuffle(collection) {
      var index = -1,
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      forEach(collection, function(value) {
        var rand = baseRandom(0, ++index);
        result[index] = result[rand];
        result[rand] = value;
      });
      return result;
    }

    /**
     * Gets the size of the `collection` by returning `collection.length` for arrays
     * and array-like objects or the number of own enumerable properties for objects.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to inspect.
     * @returns {number} Returns `collection.length` or number of own enumerable properties.
     * @example
     *
     * _.size([1, 2]);
     * // => 2
     *
     * _.size({ 'one': 1, 'two': 2, 'three': 3 });
     * // => 3
     *
     * _.size('pebbles');
     * // => 7
     */
    function size(collection) {
      var length = collection ? collection.length : 0;
      return typeof length == 'number' ? length : keys(collection).length;
    }

    /**
     * Checks if the callback returns a truey value for **any** element of a
     * collection. The function returns as soon as it finds a passing value and
     * does not iterate over the entire collection. The callback is bound to
     * `thisArg` and invoked with three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias any
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {boolean} Returns `true` if any element passed the callback check,
     *  else `false`.
     * @example
     *
     * _.some([null, 0, 'yes', false], Boolean);
     * // => true
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'blocked': false },
     *   { 'name': 'fred',   'age': 40, 'blocked': true }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.some(characters, 'blocked');
     * // => true
     *
     * // using "_.where" callback shorthand
     * _.some(characters, { 'age': 1 });
     * // => false
     */
    function some(collection, callback, thisArg) {
      var result;
      callback = lodash.createCallback(callback, thisArg, 3);

      var index = -1,
          length = collection ? collection.length : 0;

      if (typeof length == 'number') {
        while (++index < length) {
          if ((result = callback(collection[index], index, collection))) {
            break;
          }
        }
      } else {
        forOwn(collection, function(value, index, collection) {
          return !(result = callback(value, index, collection));
        });
      }
      return !!result;
    }

    /**
     * Creates an array of elements, sorted in ascending order by the results of
     * running each element in a collection through the callback. This method
     * performs a stable sort, that is, it will preserve the original sort order
     * of equal elements. The callback is bound to `thisArg` and invoked with
     * three arguments; (value, index|key, collection).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an array of property names is provided for `callback` the collection
     * will be sorted by each property value.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Array|Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of sorted elements.
     * @example
     *
     * _.sortBy([1, 2, 3], function(num) { return Math.sin(num); });
     * // => [3, 1, 2]
     *
     * _.sortBy([1, 2, 3], function(num) { return this.sin(num); }, Math);
     * // => [3, 1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'barney',  'age': 26 },
     *   { 'name': 'fred',    'age': 30 }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.map(_.sortBy(characters, 'age'), _.values);
     * // => [['barney', 26], ['fred', 30], ['barney', 36], ['fred', 40]]
     *
     * // sorting by multiple properties
     * _.map(_.sortBy(characters, ['name', 'age']), _.values);
     * // = > [['barney', 26], ['barney', 36], ['fred', 30], ['fred', 40]]
     */
    function sortBy(collection, callback, thisArg) {
      var index = -1,
          isArr = isArray(callback),
          length = collection ? collection.length : 0,
          result = Array(typeof length == 'number' ? length : 0);

      if (!isArr) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      forEach(collection, function(value, key, collection) {
        var object = result[++index] = getObject();
        if (isArr) {
          object.criteria = map(callback, function(key) { return value[key]; });
        } else {
          (object.criteria = getArray())[0] = callback(value, key, collection);
        }
        object.index = index;
        object.value = value;
      });

      length = result.length;
      result.sort(compareAscending);
      while (length--) {
        var object = result[length];
        result[length] = object.value;
        if (!isArr) {
          releaseArray(object.criteria);
        }
        releaseObject(object);
      }
      return result;
    }

    /**
     * Converts the `collection` to an array.
     *
     * @static
     * @memberOf _
     * @category Collections
     * @param {Array|Object|string} collection The collection to convert.
     * @returns {Array} Returns the new converted array.
     * @example
     *
     * (function() { return _.toArray(arguments).slice(1); })(1, 2, 3, 4);
     * // => [2, 3, 4]
     */
    function toArray(collection) {
      if (collection && typeof collection.length == 'number') {
        return slice(collection);
      }
      return values(collection);
    }

    /**
     * Performs a deep comparison of each element in a `collection` to the given
     * `properties` object, returning an array of all elements that have equivalent
     * property values.
     *
     * @static
     * @memberOf _
     * @type Function
     * @category Collections
     * @param {Array|Object|string} collection The collection to iterate over.
     * @param {Object} props The object of property values to filter by.
     * @returns {Array} Returns a new array of elements that have the given properties.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * _.where(characters, { 'age': 36 });
     * // => [{ 'name': 'barney', 'age': 36, 'pets': ['hoppy'] }]
     *
     * _.where(characters, { 'pets': ['dino'] });
     * // => [{ 'name': 'fred', 'age': 40, 'pets': ['baby puss', 'dino'] }]
     */
    var where = filter;

    /*--------------------------------------------------------------------------*/

    /**
     * Creates an array with all falsey values removed. The values `false`, `null`,
     * `0`, `""`, `undefined`, and `NaN` are all falsey.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to compact.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.compact([0, 1, false, 2, '', 3]);
     * // => [1, 2, 3]
     */
    function compact(array) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      while (++index < length) {
        var value = array[index];
        if (value) {
          result.push(value);
        }
      }
      return result;
    }

    /**
     * Creates an array excluding all values of the provided arrays using strict
     * equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {...Array} [values] The arrays of values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.difference([1, 2, 3, 4, 5], [5, 2, 10]);
     * // => [1, 3, 4]
     */
    function difference(array) {
      return baseDifference(array, baseFlatten(arguments, true, true, 1));
    }

    /**
     * This method is like `_.find` except that it returns the index of the first
     * element that passes the callback check, instead of the element itself.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': false },
     *   { 'name': 'fred',    'age': 40, 'blocked': true },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': false }
     * ];
     *
     * _.findIndex(characters, function(chr) {
     *   return chr.age < 20;
     * });
     * // => 2
     *
     * // using "_.where" callback shorthand
     * _.findIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findIndex(characters, 'blocked');
     * // => 1
     */
    function findIndex(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0;

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        if (callback(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }

    /**
     * This method is like `_.findIndex` except that it iterates over elements
     * of a `collection` from right to left.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index of the found element, else `-1`.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36, 'blocked': true },
     *   { 'name': 'fred',    'age': 40, 'blocked': false },
     *   { 'name': 'pebbles', 'age': 1,  'blocked': true }
     * ];
     *
     * _.findLastIndex(characters, function(chr) {
     *   return chr.age > 30;
     * });
     * // => 1
     *
     * // using "_.where" callback shorthand
     * _.findLastIndex(characters, { 'age': 36 });
     * // => 0
     *
     * // using "_.pluck" callback shorthand
     * _.findLastIndex(characters, 'blocked');
     * // => 2
     */
    function findLastIndex(array, callback, thisArg) {
      var length = array ? array.length : 0;
      callback = lodash.createCallback(callback, thisArg, 3);
      while (length--) {
        if (callback(array[length], length, array)) {
          return length;
        }
      }
      return -1;
    }

    /**
     * Gets the first element or first `n` elements of an array. If a callback
     * is provided elements at the beginning of the array are returned as long
     * as the callback returns truey. The callback is bound to `thisArg` and
     * invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias head, take
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the first element(s) of `array`.
     * @example
     *
     * _.first([1, 2, 3]);
     * // => 1
     *
     * _.first([1, 2, 3], 2);
     * // => [1, 2]
     *
     * _.first([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [1, 2]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false, 'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.first(characters, 'blocked');
     * // => [{ 'name': 'barney', 'blocked': true, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.first(characters, { 'employer': 'slate' }), 'name');
     * // => ['barney', 'fred']
     */
    function first(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = -1;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[0] : undefined;
        }
      }
      return slice(array, 0, nativeMin(nativeMax(0, n), length));
    }

    /**
     * Flattens a nested array (the nesting can be to any depth). If `isShallow`
     * is truey, the array will only be flattened a single level. If a callback
     * is provided each element of the array is passed through the callback before
     * flattening. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to flatten.
     * @param {boolean} [isShallow=false] A flag to restrict flattening to a single level.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new flattened array.
     * @example
     *
     * _.flatten([1, [2], [3, [[4]]]]);
     * // => [1, 2, 3, 4];
     *
     * _.flatten([1, [2], [3, [[4]]]], true);
     * // => [1, 2, 3, [[4]]];
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 30, 'pets': ['hoppy'] },
     *   { 'name': 'fred',   'age': 40, 'pets': ['baby puss', 'dino'] }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.flatten(characters, 'pets');
     * // => ['hoppy', 'baby puss', 'dino']
     */
    function flatten(array, isShallow, callback, thisArg) {
      // juggle arguments
      if (typeof isShallow != 'boolean' && isShallow != null) {
        thisArg = callback;
        callback = (typeof isShallow != 'function' && thisArg && thisArg[isShallow] === array) ? null : isShallow;
        isShallow = false;
      }
      if (callback != null) {
        array = map(array, callback, thisArg);
      }
      return baseFlatten(array, isShallow);
    }

    /**
     * Gets the index at which the first occurrence of `value` is found using
     * strict equality for comparisons, i.e. `===`. If the array is already sorted
     * providing `true` for `fromIndex` will run a faster binary search.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {boolean|number} [fromIndex=0] The index to search from or `true`
     *  to perform a binary search on a sorted array.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 1
     *
     * _.indexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 4
     *
     * _.indexOf([1, 1, 2, 2, 3, 3], 2, true);
     * // => 2
     */
    function indexOf(array, value, fromIndex) {
      if (typeof fromIndex == 'number') {
        var length = array ? array.length : 0;
        fromIndex = (fromIndex < 0 ? nativeMax(0, length + fromIndex) : fromIndex || 0);
      } else if (fromIndex) {
        var index = sortedIndex(array, value);
        return array[index] === value ? index : -1;
      }
      return baseIndexOf(array, value, fromIndex);
    }

    /**
     * Gets all but the last element or last `n` elements of an array. If a
     * callback is provided elements at the end of the array are excluded from
     * the result as long as the callback returns truey. The callback is bound
     * to `thisArg` and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.initial([1, 2, 3]);
     * // => [1, 2]
     *
     * _.initial([1, 2, 3], 2);
     * // => [1]
     *
     * _.initial([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [1]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.initial(characters, 'blocked');
     * // => [{ 'name': 'barney',  'blocked': false, 'employer': 'slate' }]
     *
     * // using "_.where" callback shorthand
     * _.pluck(_.initial(characters, { 'employer': 'na' }), 'name');
     * // => ['barney', 'fred']
     */
    function initial(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : callback || n;
      }
      return slice(array, 0, nativeMin(nativeMax(0, length - n), length));
    }

    /**
     * Creates an array of unique values present in all provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of shared values.
     * @example
     *
     * _.intersection([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2]
     */
    function intersection() {
      var args = [],
          argsIndex = -1,
          argsLength = arguments.length,
          caches = getArray(),
          indexOf = getIndexOf(),
          trustIndexOf = indexOf === baseIndexOf,
          seen = getArray();

      while (++argsIndex < argsLength) {
        var value = arguments[argsIndex];
        if (isArray(value) || isArguments(value)) {
          args.push(value);
          caches.push(trustIndexOf && value.length >= largeArraySize &&
            createCache(argsIndex ? args[argsIndex] : seen));
        }
      }
      var array = args[0],
          index = -1,
          length = array ? array.length : 0,
          result = [];

      outer:
      while (++index < length) {
        var cache = caches[0];
        value = array[index];

        if ((cache ? cacheIndexOf(cache, value) : indexOf(seen, value)) < 0) {
          argsIndex = argsLength;
          (cache || seen).push(value);
          while (--argsIndex) {
            cache = caches[argsIndex];
            if ((cache ? cacheIndexOf(cache, value) : indexOf(args[argsIndex], value)) < 0) {
              continue outer;
            }
          }
          result.push(value);
        }
      }
      while (argsLength--) {
        cache = caches[argsLength];
        if (cache) {
          releaseObject(cache);
        }
      }
      releaseArray(caches);
      releaseArray(seen);
      return result;
    }

    /**
     * Gets the last element or last `n` elements of an array. If a callback is
     * provided elements at the end of the array are returned as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback] The function called
     *  per element or the number of elements to return. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {*} Returns the last element(s) of `array`.
     * @example
     *
     * _.last([1, 2, 3]);
     * // => 3
     *
     * _.last([1, 2, 3], 2);
     * // => [2, 3]
     *
     * _.last([1, 2, 3], function(num) {
     *   return num > 1;
     * });
     * // => [2, 3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': false, 'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': true,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true,  'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.last(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.last(characters, { 'employer': 'na' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function last(array, callback, thisArg) {
      var n = 0,
          length = array ? array.length : 0;

      if (typeof callback != 'number' && callback != null) {
        var index = length;
        callback = lodash.createCallback(callback, thisArg, 3);
        while (index-- && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = callback;
        if (n == null || thisArg) {
          return array ? array[length - 1] : undefined;
        }
      }
      return slice(array, nativeMax(0, length - n));
    }

    /**
     * Gets the index at which the last occurrence of `value` is found using strict
     * equality for comparisons, i.e. `===`. If `fromIndex` is negative, it is used
     * as the offset from the end of the collection.
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to search.
     * @param {*} value The value to search for.
     * @param {number} [fromIndex=array.length-1] The index to search from.
     * @returns {number} Returns the index of the matched value or `-1`.
     * @example
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2);
     * // => 4
     *
     * _.lastIndexOf([1, 2, 3, 1, 2, 3], 2, 3);
     * // => 1
     */
    function lastIndexOf(array, value, fromIndex) {
      var index = array ? array.length : 0;
      if (typeof fromIndex == 'number') {
        index = (fromIndex < 0 ? nativeMax(0, index + fromIndex) : nativeMin(fromIndex, index - 1)) + 1;
      }
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }

    /**
     * Removes all provided values from the given array using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {...*} [value] The values to remove.
     * @returns {Array} Returns `array`.
     * @example
     *
     * var array = [1, 2, 3, 1, 2, 3];
     * _.pull(array, 2, 3);
     * console.log(array);
     * // => [1, 1]
     */
    function pull(array) {
      var args = arguments,
          argsIndex = 0,
          argsLength = args.length,
          length = array ? array.length : 0;

      while (++argsIndex < argsLength) {
        var index = -1,
            value = args[argsIndex];
        while (++index < length) {
          if (array[index] === value) {
            splice.call(array, index--, 1);
            length--;
          }
        }
      }
      return array;
    }

    /**
     * Creates an array of numbers (positive and/or negative) progressing from
     * `start` up to but not including `end`. If `start` is less than `stop` a
     * zero-length range is created unless a negative `step` is specified.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {number} [start=0] The start of the range.
     * @param {number} end The end of the range.
     * @param {number} [step=1] The value to increment or decrement by.
     * @returns {Array} Returns a new range array.
     * @example
     *
     * _.range(4);
     * // => [0, 1, 2, 3]
     *
     * _.range(1, 5);
     * // => [1, 2, 3, 4]
     *
     * _.range(0, 20, 5);
     * // => [0, 5, 10, 15]
     *
     * _.range(0, -4, -1);
     * // => [0, -1, -2, -3]
     *
     * _.range(1, 4, 0);
     * // => [1, 1, 1]
     *
     * _.range(0);
     * // => []
     */
    function range(start, end, step) {
      start = +start || 0;
      step = typeof step == 'number' ? step : (+step || 1);

      if (end == null) {
        end = start;
        start = 0;
      }
      // use `Array(length)` so engines like Chakra and V8 avoid slower modes
      // http://youtu.be/XAqIpGU8ZZk#t=17m25s
      var index = -1,
          length = nativeMax(0, ceil((end - start) / (step || 1))),
          result = Array(length);

      while (++index < length) {
        result[index] = start;
        start += step;
      }
      return result;
    }

    /**
     * Removes all elements from an array that the callback returns truey for
     * and returns an array of removed elements. The callback is bound to `thisArg`
     * and invoked with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to modify.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a new array of removed elements.
     * @example
     *
     * var array = [1, 2, 3, 4, 5, 6];
     * var evens = _.remove(array, function(num) { return num % 2 == 0; });
     *
     * console.log(array);
     * // => [1, 3, 5]
     *
     * console.log(evens);
     * // => [2, 4, 6]
     */
    function remove(array, callback, thisArg) {
      var index = -1,
          length = array ? array.length : 0,
          result = [];

      callback = lodash.createCallback(callback, thisArg, 3);
      while (++index < length) {
        var value = array[index];
        if (callback(value, index, array)) {
          result.push(value);
          splice.call(array, index--, 1);
          length--;
        }
      }
      return result;
    }

    /**
     * The opposite of `_.initial` this method gets all but the first element or
     * first `n` elements of an array. If a callback function is provided elements
     * at the beginning of the array are excluded from the result as long as the
     * callback returns truey. The callback is bound to `thisArg` and invoked
     * with three arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias drop, tail
     * @category Arrays
     * @param {Array} array The array to query.
     * @param {Function|Object|number|string} [callback=1] The function called
     *  per element or the number of elements to exclude. If a property name or
     *  object is provided it will be used to create a "_.pluck" or "_.where"
     *  style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a slice of `array`.
     * @example
     *
     * _.rest([1, 2, 3]);
     * // => [2, 3]
     *
     * _.rest([1, 2, 3], 2);
     * // => [3]
     *
     * _.rest([1, 2, 3], function(num) {
     *   return num < 3;
     * });
     * // => [3]
     *
     * var characters = [
     *   { 'name': 'barney',  'blocked': true,  'employer': 'slate' },
     *   { 'name': 'fred',    'blocked': false,  'employer': 'slate' },
     *   { 'name': 'pebbles', 'blocked': true, 'employer': 'na' }
     * ];
     *
     * // using "_.pluck" callback shorthand
     * _.pluck(_.rest(characters, 'blocked'), 'name');
     * // => ['fred', 'pebbles']
     *
     * // using "_.where" callback shorthand
     * _.rest(characters, { 'employer': 'slate' });
     * // => [{ 'name': 'pebbles', 'blocked': true, 'employer': 'na' }]
     */
    function rest(array, callback, thisArg) {
      if (typeof callback != 'number' && callback != null) {
        var n = 0,
            index = -1,
            length = array ? array.length : 0;

        callback = lodash.createCallback(callback, thisArg, 3);
        while (++index < length && callback(array[index], index, array)) {
          n++;
        }
      } else {
        n = (callback == null || thisArg) ? 1 : nativeMax(0, callback);
      }
      return slice(array, n);
    }

    /**
     * Uses a binary search to determine the smallest index at which a value
     * should be inserted into a given sorted array in order to maintain the sort
     * order of the array. If a callback is provided it will be executed for
     * `value` and each element of `array` to compute their sort ranking. The
     * callback is bound to `thisArg` and invoked with one argument; (value).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to inspect.
     * @param {*} value The value to evaluate.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {number} Returns the index at which `value` should be inserted
     *  into `array`.
     * @example
     *
     * _.sortedIndex([20, 30, 50], 40);
     * // => 2
     *
     * // using "_.pluck" callback shorthand
     * _.sortedIndex([{ 'x': 20 }, { 'x': 30 }, { 'x': 50 }], { 'x': 40 }, 'x');
     * // => 2
     *
     * var dict = {
     *   'wordToNumber': { 'twenty': 20, 'thirty': 30, 'fourty': 40, 'fifty': 50 }
     * };
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return dict.wordToNumber[word];
     * });
     * // => 2
     *
     * _.sortedIndex(['twenty', 'thirty', 'fifty'], 'fourty', function(word) {
     *   return this.wordToNumber[word];
     * }, dict);
     * // => 2
     */
    function sortedIndex(array, value, callback, thisArg) {
      var low = 0,
          high = array ? array.length : low;

      // explicitly reference `identity` for better inlining in Firefox
      callback = callback ? lodash.createCallback(callback, thisArg, 1) : identity;
      value = callback(value);

      while (low < high) {
        var mid = (low + high) >>> 1;
        (callback(array[mid]) < value)
          ? low = mid + 1
          : high = mid;
      }
      return low;
    }

    /**
     * Creates an array of unique values, in order, of the provided arrays using
     * strict equality for comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of combined values.
     * @example
     *
     * _.union([1, 2, 3], [5, 2, 1, 4], [2, 1]);
     * // => [1, 2, 3, 5, 4]
     */
    function union() {
      return baseUniq(baseFlatten(arguments, true, true));
    }

    /**
     * Creates a duplicate-value-free version of an array using strict equality
     * for comparisons, i.e. `===`. If the array is sorted, providing
     * `true` for `isSorted` will use a faster algorithm. If a callback is provided
     * each element of `array` is passed through the callback before uniqueness
     * is computed. The callback is bound to `thisArg` and invoked with three
     * arguments; (value, index, array).
     *
     * If a property name is provided for `callback` the created "_.pluck" style
     * callback will return the property value of the given element.
     *
     * If an object is provided for `callback` the created "_.where" style callback
     * will return `true` for elements that have the properties of the given object,
     * else `false`.
     *
     * @static
     * @memberOf _
     * @alias unique
     * @category Arrays
     * @param {Array} array The array to process.
     * @param {boolean} [isSorted=false] A flag to indicate that `array` is sorted.
     * @param {Function|Object|string} [callback=identity] The function called
     *  per iteration. If a property name or object is provided it will be used
     *  to create a "_.pluck" or "_.where" style callback, respectively.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns a duplicate-value-free array.
     * @example
     *
     * _.uniq([1, 2, 1, 3, 1]);
     * // => [1, 2, 3]
     *
     * _.uniq([1, 1, 2, 2, 3], true);
     * // => [1, 2, 3]
     *
     * _.uniq(['A', 'b', 'C', 'a', 'B', 'c'], function(letter) { return letter.toLowerCase(); });
     * // => ['A', 'b', 'C']
     *
     * _.uniq([1, 2.5, 3, 1.5, 2, 3.5], function(num) { return this.floor(num); }, Math);
     * // => [1, 2.5, 3]
     *
     * // using "_.pluck" callback shorthand
     * _.uniq([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
     * // => [{ 'x': 1 }, { 'x': 2 }]
     */
    function uniq(array, isSorted, callback, thisArg) {
      // juggle arguments
      if (typeof isSorted != 'boolean' && isSorted != null) {
        thisArg = callback;
        callback = (typeof isSorted != 'function' && thisArg && thisArg[isSorted] === array) ? null : isSorted;
        isSorted = false;
      }
      if (callback != null) {
        callback = lodash.createCallback(callback, thisArg, 3);
      }
      return baseUniq(array, isSorted, callback);
    }

    /**
     * Creates an array excluding all provided values using strict equality for
     * comparisons, i.e. `===`.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {Array} array The array to filter.
     * @param {...*} [value] The values to exclude.
     * @returns {Array} Returns a new array of filtered values.
     * @example
     *
     * _.without([1, 2, 1, 0, 3, 1, 4], 0, 1);
     * // => [2, 3, 4]
     */
    function without(array) {
      return baseDifference(array, slice(arguments, 1));
    }

    /**
     * Creates an array that is the symmetric difference of the provided arrays.
     * See http://en.wikipedia.org/wiki/Symmetric_difference.
     *
     * @static
     * @memberOf _
     * @category Arrays
     * @param {...Array} [array] The arrays to inspect.
     * @returns {Array} Returns an array of values.
     * @example
     *
     * _.xor([1, 2, 3], [5, 2, 1, 4]);
     * // => [3, 5, 4]
     *
     * _.xor([1, 2, 5], [2, 3, 5], [3, 4, 5]);
     * // => [1, 4, 5]
     */
    function xor() {
      var index = -1,
          length = arguments.length;

      while (++index < length) {
        var array = arguments[index];
        if (isArray(array) || isArguments(array)) {
          var result = result
            ? baseUniq(baseDifference(result, array).concat(baseDifference(array, result)))
            : array;
        }
      }
      return result || [];
    }

    /**
     * Creates an array of grouped elements, the first of which contains the first
     * elements of the given arrays, the second of which contains the second
     * elements of the given arrays, and so on.
     *
     * @static
     * @memberOf _
     * @alias unzip
     * @category Arrays
     * @param {...Array} [array] Arrays to process.
     * @returns {Array} Returns a new array of grouped elements.
     * @example
     *
     * _.zip(['fred', 'barney'], [30, 40], [true, false]);
     * // => [['fred', 30, true], ['barney', 40, false]]
     */
    function zip() {
      var array = arguments.length > 1 ? arguments : arguments[0],
          index = -1,
          length = array ? max(pluck(array, 'length')) : 0,
          result = Array(length < 0 ? 0 : length);

      while (++index < length) {
        result[index] = pluck(array, index);
      }
      return result;
    }

    /**
     * Creates an object composed from arrays of `keys` and `values`. Provide
     * either a single two dimensional array, i.e. `[[key1, value1], [key2, value2]]`
     * or two arrays, one of `keys` and one of corresponding `values`.
     *
     * @static
     * @memberOf _
     * @alias object
     * @category Arrays
     * @param {Array} keys The array of keys.
     * @param {Array} [values=[]] The array of values.
     * @returns {Object} Returns an object composed of the given keys and
     *  corresponding values.
     * @example
     *
     * _.zipObject(['fred', 'barney'], [30, 40]);
     * // => { 'fred': 30, 'barney': 40 }
     */
    function zipObject(keys, values) {
      var index = -1,
          length = keys ? keys.length : 0,
          result = {};

      if (!values && length && !isArray(keys[0])) {
        values = [];
      }
      while (++index < length) {
        var key = keys[index];
        if (values) {
          result[key] = values[index];
        } else if (key) {
          result[key[0]] = key[1];
        }
      }
      return result;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that executes `func`, with  the `this` binding and
     * arguments of the created function, only after being called `n` times.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {number} n The number of times the function must be called before
     *  `func` is executed.
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var saves = ['profile', 'settings'];
     *
     * var done = _.after(saves.length, function() {
     *   console.log('Done saving!');
     * });
     *
     * _.forEach(saves, function(type) {
     *   asyncSave({ 'type': type, 'complete': done });
     * });
     * // => logs 'Done saving!', after all saves have completed
     */
    function after(n, func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (--n < 1) {
          return func.apply(this, arguments);
        }
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with the `this`
     * binding of `thisArg` and prepends any additional `bind` arguments to those
     * provided to the bound function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to bind.
     * @param {*} [thisArg] The `this` binding of `func`.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var func = function(greeting) {
     *   return greeting + ' ' + this.name;
     * };
     *
     * func = _.bind(func, { 'name': 'fred' }, 'hi');
     * func();
     * // => 'hi fred'
     */
    function bind(func, thisArg) {
      return arguments.length > 2
        ? createWrapper(func, 17, slice(arguments, 2), null, thisArg)
        : createWrapper(func, 1, null, null, thisArg);
    }

    /**
     * Binds methods of an object to the object itself, overwriting the existing
     * method. Method names may be specified as individual arguments or as arrays
     * of method names. If no method names are provided all the function properties
     * of `object` will be bound.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object to bind and assign the bound methods to.
     * @param {...string} [methodName] The object method names to
     *  bind, specified as individual method names or arrays of method names.
     * @returns {Object} Returns `object`.
     * @example
     *
     * var view = {
     *   'label': 'docs',
     *   'onClick': function() { console.log('clicked ' + this.label); }
     * };
     *
     * _.bindAll(view);
     * jQuery('#docs').on('click', view.onClick);
     * // => logs 'clicked docs', when the button is clicked
     */
    function bindAll(object) {
      var funcs = arguments.length > 1 ? baseFlatten(arguments, true, false, 1) : functions(object),
          index = -1,
          length = funcs.length;

      while (++index < length) {
        var key = funcs[index];
        object[key] = createWrapper(object[key], 1, null, null, object);
      }
      return object;
    }

    /**
     * Creates a function that, when called, invokes the method at `object[key]`
     * and prepends any additional `bindKey` arguments to those provided to the bound
     * function. This method differs from `_.bind` by allowing bound functions to
     * reference methods that will be redefined or don't yet exist.
     * See http://michaux.ca/articles/lazy-function-definition-pattern.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Object} object The object the method belongs to.
     * @param {string} key The key of the method.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new bound function.
     * @example
     *
     * var object = {
     *   'name': 'fred',
     *   'greet': function(greeting) {
     *     return greeting + ' ' + this.name;
     *   }
     * };
     *
     * var func = _.bindKey(object, 'greet', 'hi');
     * func();
     * // => 'hi fred'
     *
     * object.greet = function(greeting) {
     *   return greeting + 'ya ' + this.name + '!';
     * };
     *
     * func();
     * // => 'hiya fred!'
     */
    function bindKey(object, key) {
      return arguments.length > 2
        ? createWrapper(key, 19, slice(arguments, 2), null, object)
        : createWrapper(key, 3, null, null, object);
    }

    /**
     * Creates a function that is the composition of the provided functions,
     * where each function consumes the return value of the function that follows.
     * For example, composing the functions `f()`, `g()`, and `h()` produces `f(g(h()))`.
     * Each function is executed with the `this` binding of the composed function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {...Function} [func] Functions to compose.
     * @returns {Function} Returns the new composed function.
     * @example
     *
     * var realNameMap = {
     *   'pebbles': 'penelope'
     * };
     *
     * var format = function(name) {
     *   name = realNameMap[name.toLowerCase()] || name;
     *   return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
     * };
     *
     * var greet = function(formatted) {
     *   return 'Hiya ' + formatted + '!';
     * };
     *
     * var welcome = _.compose(greet, format);
     * welcome('pebbles');
     * // => 'Hiya Penelope!'
     */
    function compose() {
      var funcs = arguments,
          length = funcs.length;

      while (length--) {
        if (!isFunction(funcs[length])) {
          throw new TypeError;
        }
      }
      return function() {
        var args = arguments,
            length = funcs.length;

        while (length--) {
          args = [funcs[length].apply(this, args)];
        }
        return args[0];
      };
    }

    /**
     * Creates a function which accepts one or more arguments of `func` that when
     * invoked either executes `func` returning its result, if all `func` arguments
     * have been provided, or returns a function that accepts one or more of the
     * remaining `func` arguments, and so on. The arity of `func` can be specified
     * if `func.length` is not sufficient.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to curry.
     * @param {number} [arity=func.length] The arity of `func`.
     * @returns {Function} Returns the new curried function.
     * @example
     *
     * var curried = _.curry(function(a, b, c) {
     *   console.log(a + b + c);
     * });
     *
     * curried(1)(2)(3);
     * // => 6
     *
     * curried(1, 2)(3);
     * // => 6
     *
     * curried(1, 2, 3);
     * // => 6
     */
    function curry(func, arity) {
      arity = typeof arity == 'number' ? arity : (+arity || func.length);
      return createWrapper(func, 4, null, null, null, arity);
    }

    /**
     * Creates a function that will delay the execution of `func` until after
     * `wait` milliseconds have elapsed since the last time it was invoked.
     * Provide an options object to indicate that `func` should be invoked on
     * the leading and/or trailing edge of the `wait` timeout. Subsequent calls
     * to the debounced function will return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the debounced function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to debounce.
     * @param {number} wait The number of milliseconds to delay.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=false] Specify execution on the leading edge of the timeout.
     * @param {number} [options.maxWait] The maximum time `func` is allowed to be delayed before it's called.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new debounced function.
     * @example
     *
     * // avoid costly calculations while the window size is in flux
     * var lazyLayout = _.debounce(calculateLayout, 150);
     * jQuery(window).on('resize', lazyLayout);
     *
     * // execute `sendMail` when the click event is fired, debouncing subsequent calls
     * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
     *   'leading': true,
     *   'trailing': false
     * });
     *
     * // ensure `batchLog` is executed once after 1 second of debounced calls
     * var source = new EventSource('/stream');
     * source.addEventListener('message', _.debounce(batchLog, 250, {
     *   'maxWait': 1000
     * }, false);
     */
    function debounce(func, wait, options) {
      var args,
          maxTimeoutId,
          result,
          stamp,
          thisArg,
          timeoutId,
          trailingCall,
          lastCalled = 0,
          maxWait = false,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      wait = nativeMax(0, wait) || 0;
      if (options === true) {
        var leading = true;
        trailing = false;
      } else if (isObject(options)) {
        leading = options.leading;
        maxWait = 'maxWait' in options && (nativeMax(wait, options.maxWait) || 0);
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      var delayed = function() {
        var remaining = wait - (now() - stamp);
        if (remaining <= 0) {
          if (maxTimeoutId) {
            clearTimeout(maxTimeoutId);
          }
          var isCalled = trailingCall;
          maxTimeoutId = timeoutId = trailingCall = undefined;
          if (isCalled) {
            lastCalled = now();
            result = func.apply(thisArg, args);
            if (!timeoutId && !maxTimeoutId) {
              args = thisArg = null;
            }
          }
        } else {
          timeoutId = setTimeout(delayed, remaining);
        }
      };

      var maxDelayed = function() {
        if (timeoutId) {
          clearTimeout(timeoutId);
        }
        maxTimeoutId = timeoutId = trailingCall = undefined;
        if (trailing || (maxWait !== wait)) {
          lastCalled = now();
          result = func.apply(thisArg, args);
          if (!timeoutId && !maxTimeoutId) {
            args = thisArg = null;
          }
        }
      };

      return function() {
        args = arguments;
        stamp = now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        if (maxWait === false) {
          var leadingCall = leading && !timeoutId;
        } else {
          if (!maxTimeoutId && !leading) {
            lastCalled = stamp;
          }
          var remaining = maxWait - (stamp - lastCalled),
              isCalled = remaining <= 0;

          if (isCalled) {
            if (maxTimeoutId) {
              maxTimeoutId = clearTimeout(maxTimeoutId);
            }
            lastCalled = stamp;
            result = func.apply(thisArg, args);
          }
          else if (!maxTimeoutId) {
            maxTimeoutId = setTimeout(maxDelayed, remaining);
          }
        }
        if (isCalled && timeoutId) {
          timeoutId = clearTimeout(timeoutId);
        }
        else if (!timeoutId && wait !== maxWait) {
          timeoutId = setTimeout(delayed, wait);
        }
        if (leadingCall) {
          isCalled = true;
          result = func.apply(thisArg, args);
        }
        if (isCalled && !timeoutId && !maxTimeoutId) {
          args = thisArg = null;
        }
        return result;
      };
    }

    /**
     * Defers executing the `func` function until the current call stack has cleared.
     * Additional arguments will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to defer.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.defer(function(text) { console.log(text); }, 'deferred');
     * // logs 'deferred' after one or more milliseconds
     */
    function defer(func) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 1);
      return setTimeout(function() { func.apply(undefined, args); }, 1);
    }

    /**
     * Executes the `func` function after `wait` milliseconds. Additional arguments
     * will be provided to `func` when it is invoked.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to delay.
     * @param {number} wait The number of milliseconds to delay execution.
     * @param {...*} [arg] Arguments to invoke the function with.
     * @returns {number} Returns the timer id.
     * @example
     *
     * _.delay(function(text) { console.log(text); }, 1000, 'later');
     * // => logs 'later' after one second
     */
    function delay(func, wait) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var args = slice(arguments, 2);
      return setTimeout(function() { func.apply(undefined, args); }, wait);
    }

    /**
     * Creates a function that memoizes the result of `func`. If `resolver` is
     * provided it will be used to determine the cache key for storing the result
     * based on the arguments provided to the memoized function. By default, the
     * first argument provided to the memoized function is used as the cache key.
     * The `func` is executed with the `this` binding of the memoized function.
     * The result cache is exposed as the `cache` property on the memoized function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to have its output memoized.
     * @param {Function} [resolver] A function used to resolve the cache key.
     * @returns {Function} Returns the new memoizing function.
     * @example
     *
     * var fibonacci = _.memoize(function(n) {
     *   return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
     * });
     *
     * fibonacci(9)
     * // => 34
     *
     * var data = {
     *   'fred': { 'name': 'fred', 'age': 40 },
     *   'pebbles': { 'name': 'pebbles', 'age': 1 }
     * };
     *
     * // modifying the result cache
     * var get = _.memoize(function(name) { return data[name]; }, _.identity);
     * get('pebbles');
     * // => { 'name': 'pebbles', 'age': 1 }
     *
     * get.cache.pebbles.name = 'penelope';
     * get('pebbles');
     * // => { 'name': 'penelope', 'age': 1 }
     */
    function memoize(func, resolver) {
      if (!isFunction(func)) {
        throw new TypeError;
      }
      var memoized = function() {
        var cache = memoized.cache,
            key = resolver ? resolver.apply(this, arguments) : keyPrefix + arguments[0];

        return hasOwnProperty.call(cache, key)
          ? cache[key]
          : (cache[key] = func.apply(this, arguments));
      }
      memoized.cache = {};
      return memoized;
    }

    /**
     * Creates a function that is restricted to execute `func` once. Repeat calls to
     * the function will return the value of the first call. The `func` is executed
     * with the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to restrict.
     * @returns {Function} Returns the new restricted function.
     * @example
     *
     * var initialize = _.once(createApplication);
     * initialize();
     * initialize();
     * // `initialize` executes `createApplication` once
     */
    function once(func) {
      var ran,
          result;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      return function() {
        if (ran) {
          return result;
        }
        ran = true;
        result = func.apply(this, arguments);

        // clear the `func` variable so the function may be garbage collected
        func = null;
        return result;
      };
    }

    /**
     * Creates a function that, when called, invokes `func` with any additional
     * `partial` arguments prepended to those provided to the new function. This
     * method is similar to `_.bind` except it does **not** alter the `this` binding.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var greet = function(greeting, name) { return greeting + ' ' + name; };
     * var hi = _.partial(greet, 'hi');
     * hi('fred');
     * // => 'hi fred'
     */
    function partial(func) {
      return createWrapper(func, 16, slice(arguments, 1));
    }

    /**
     * This method is like `_.partial` except that `partial` arguments are
     * appended to those provided to the new function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to partially apply arguments to.
     * @param {...*} [arg] Arguments to be partially applied.
     * @returns {Function} Returns the new partially applied function.
     * @example
     *
     * var defaultsDeep = _.partialRight(_.merge, _.defaults);
     *
     * var options = {
     *   'variable': 'data',
     *   'imports': { 'jq': $ }
     * };
     *
     * defaultsDeep(options, _.templateSettings);
     *
     * options.variable
     * // => 'data'
     *
     * options.imports
     * // => { '_': _, 'jq': $ }
     */
    function partialRight(func) {
      return createWrapper(func, 32, null, slice(arguments, 1));
    }

    /**
     * Creates a function that, when executed, will only call the `func` function
     * at most once per every `wait` milliseconds. Provide an options object to
     * indicate that `func` should be invoked on the leading and/or trailing edge
     * of the `wait` timeout. Subsequent calls to the throttled function will
     * return the result of the last `func` call.
     *
     * Note: If `leading` and `trailing` options are `true` `func` will be called
     * on the trailing edge of the timeout only if the the throttled function is
     * invoked more than once during the `wait` timeout.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {Function} func The function to throttle.
     * @param {number} wait The number of milliseconds to throttle executions to.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.leading=true] Specify execution on the leading edge of the timeout.
     * @param {boolean} [options.trailing=true] Specify execution on the trailing edge of the timeout.
     * @returns {Function} Returns the new throttled function.
     * @example
     *
     * // avoid excessively updating the position while scrolling
     * var throttled = _.throttle(updatePosition, 100);
     * jQuery(window).on('scroll', throttled);
     *
     * // execute `renewToken` when the click event is fired, but not more than once every 5 minutes
     * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
     *   'trailing': false
     * }));
     */
    function throttle(func, wait, options) {
      var leading = true,
          trailing = true;

      if (!isFunction(func)) {
        throw new TypeError;
      }
      if (options === false) {
        leading = false;
      } else if (isObject(options)) {
        leading = 'leading' in options ? options.leading : leading;
        trailing = 'trailing' in options ? options.trailing : trailing;
      }
      debounceOptions.leading = leading;
      debounceOptions.maxWait = wait;
      debounceOptions.trailing = trailing;

      return debounce(func, wait, debounceOptions);
    }

    /**
     * Creates a function that provides `value` to the wrapper function as its
     * first argument. Additional arguments provided to the function are appended
     * to those provided to the wrapper function. The wrapper is executed with
     * the `this` binding of the created function.
     *
     * @static
     * @memberOf _
     * @category Functions
     * @param {*} value The value to wrap.
     * @param {Function} wrapper The wrapper function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var p = _.wrap(_.escape, function(func, text) {
     *   return '<p>' + func(text) + '</p>';
     * });
     *
     * p('Fred, Wilma, & Pebbles');
     * // => '<p>Fred, Wilma, &amp; Pebbles</p>'
     */
    function wrap(value, wrapper) {
      return createWrapper(wrapper, 16, [value]);
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a function that returns `value`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value The value to return from the new function.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var object = { 'name': 'fred' };
     * var getter = _.constant(object);
     * getter() === object;
     * // => true
     */
    function constant(value) {
      return function() {
        return value;
      };
    }

    /**
     * Produces a callback bound to an optional `thisArg`. If `func` is a property
     * name the created callback will return the property value for a given element.
     * If `func` is an object the created callback will return `true` for elements
     * that contain the equivalent object properties, otherwise it will return `false`.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} [func=identity] The value to convert to a callback.
     * @param {*} [thisArg] The `this` binding of the created callback.
     * @param {number} [argCount] The number of arguments the callback accepts.
     * @returns {Function} Returns a callback function.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // wrap to create custom callback shorthands
     * _.createCallback = _.wrap(_.createCallback, function(func, callback, thisArg) {
     *   var match = /^(.+?)__([gl]t)(.+)$/.exec(callback);
     *   return !match ? func(callback, thisArg) : function(object) {
     *     return match[2] == 'gt' ? object[match[1]] > match[3] : object[match[1]] < match[3];
     *   };
     * });
     *
     * _.filter(characters, 'age__gt38');
     * // => [{ 'name': 'fred', 'age': 40 }]
     */
    function createCallback(func, thisArg, argCount) {
      var type = typeof func;
      if (func == null || type == 'function') {
        return baseCreateCallback(func, thisArg, argCount);
      }
      // handle "_.pluck" style callback shorthands
      if (type != 'object') {
        return property(func);
      }
      var props = keys(func),
          key = props[0],
          a = func[key];

      // handle "_.where" style callback shorthands
      if (props.length == 1 && a === a && !isObject(a)) {
        // fast path the common case of providing an object with a single
        // property containing a primitive value
        return function(object) {
          var b = object[key];
          return a === b && (a !== 0 || (1 / a == 1 / b));
        };
      }
      return function(object) {
        var length = props.length,
            result = false;

        while (length--) {
          if (!(result = baseIsEqual(object[props[length]], func[props[length]], null, true))) {
            break;
          }
        }
        return result;
      };
    }

    /**
     * Converts the characters `&`, `<`, `>`, `"`, and `'` in `string` to their
     * corresponding HTML entities.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to escape.
     * @returns {string} Returns the escaped string.
     * @example
     *
     * _.escape('Fred, Wilma, & Pebbles');
     * // => 'Fred, Wilma, &amp; Pebbles'
     */
    function escape(string) {
      return string == null ? '' : String(string).replace(reUnescapedHtml, escapeHtmlChar);
    }

    /**
     * This method returns the first argument provided to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {*} value Any value.
     * @returns {*} Returns `value`.
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.identity(object) === object;
     * // => true
     */
    function identity(value) {
      return value;
    }

    /**
     * Adds function properties of a source object to the destination object.
     * If `object` is a function methods will be added to its prototype as well.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Function|Object} [object=lodash] object The destination object.
     * @param {Object} source The object of functions to add.
     * @param {Object} [options] The options object.
     * @param {boolean} [options.chain=true] Specify whether the functions added are chainable.
     * @example
     *
     * function capitalize(string) {
     *   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
     * }
     *
     * _.mixin({ 'capitalize': capitalize });
     * _.capitalize('fred');
     * // => 'Fred'
     *
     * _('fred').capitalize().value();
     * // => 'Fred'
     *
     * _.mixin({ 'capitalize': capitalize }, { 'chain': false });
     * _('fred').capitalize();
     * // => 'Fred'
     */
    function mixin(object, source, options) {
      var chain = true,
          methodNames = source && functions(source);

      if (!source || (!options && !methodNames.length)) {
        if (options == null) {
          options = source;
        }
        ctor = lodashWrapper;
        source = object;
        object = lodash;
        methodNames = functions(source);
      }
      if (options === false) {
        chain = false;
      } else if (isObject(options) && 'chain' in options) {
        chain = options.chain;
      }
      var ctor = object,
          isFunc = isFunction(ctor);

      forEach(methodNames, function(methodName) {
        var func = object[methodName] = source[methodName];
        if (isFunc) {
          ctor.prototype[methodName] = function() {
            var chainAll = this.__chain__,
                value = this.__wrapped__,
                args = [value];

            push.apply(args, arguments);
            var result = func.apply(object, args);
            if (chain || chainAll) {
              if (value === result && isObject(result)) {
                return this;
              }
              result = new ctor(result);
              result.__chain__ = chainAll;
            }
            return result;
          };
        }
      });
    }

    /**
     * Reverts the '_' variable to its previous value and returns a reference to
     * the `lodash` function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @returns {Function} Returns the `lodash` function.
     * @example
     *
     * var lodash = _.noConflict();
     */
    function noConflict() {
      context._ = oldDash;
      return this;
    }

    /**
     * A no-operation function.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var object = { 'name': 'fred' };
     * _.noop(object) === undefined;
     * // => true
     */
    function noop() {
      // no operation performed
    }

    /**
     * Gets the number of milliseconds that have elapsed since the Unix epoch
     * (1 January 1970 00:00:00 UTC).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @example
     *
     * var stamp = _.now();
     * _.defer(function() { console.log(_.now() - stamp); });
     * // => logs the number of milliseconds it took for the deferred function to be called
     */
    var now = isNative(now = Date.now) && now || function() {
      return new Date().getTime();
    };

    /**
     * Converts the given value into an integer of the specified radix.
     * If `radix` is `undefined` or `0` a `radix` of `10` is used unless the
     * `value` is a hexadecimal, in which case a `radix` of `16` is used.
     *
     * Note: This method avoids differences in native ES3 and ES5 `parseInt`
     * implementations. See http://es5.github.io/#E.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} value The value to parse.
     * @param {number} [radix] The radix used to interpret the value to parse.
     * @returns {number} Returns the new integer value.
     * @example
     *
     * _.parseInt('08');
     * // => 8
     */
    var parseInt = nativeParseInt(whitespace + '08') == 8 ? nativeParseInt : function(value, radix) {
      // Firefox < 21 and Opera < 15 follow the ES3 specified implementation of `parseInt`
      return nativeParseInt(isString(value) ? value.replace(reLeadingSpacesAndZeros, '') : value, radix || 0);
    };

    /**
     * Creates a "_.pluck" style function, which returns the `key` value of a
     * given object.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} key The name of the property to retrieve.
     * @returns {Function} Returns the new function.
     * @example
     *
     * var characters = [
     *   { 'name': 'fred',   'age': 40 },
     *   { 'name': 'barney', 'age': 36 }
     * ];
     *
     * var getName = _.property('name');
     *
     * _.map(characters, getName);
     * // => ['barney', 'fred']
     *
     * _.sortBy(characters, getName);
     * // => [{ 'name': 'barney', 'age': 36 }, { 'name': 'fred',   'age': 40 }]
     */
    function property(key) {
      return function(object) {
        return object[key];
      };
    }

    /**
     * Produces a random number between `min` and `max` (inclusive). If only one
     * argument is provided a number between `0` and the given number will be
     * returned. If `floating` is truey or either `min` or `max` are floats a
     * floating-point number will be returned instead of an integer.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} [min=0] The minimum possible value.
     * @param {number} [max=1] The maximum possible value.
     * @param {boolean} [floating=false] Specify returning a floating-point number.
     * @returns {number} Returns a random number.
     * @example
     *
     * _.random(0, 5);
     * // => an integer between 0 and 5
     *
     * _.random(5);
     * // => also an integer between 0 and 5
     *
     * _.random(5, true);
     * // => a floating-point number between 0 and 5
     *
     * _.random(1.2, 5.2);
     * // => a floating-point number between 1.2 and 5.2
     */
    function random(min, max, floating) {
      var noMin = min == null,
          noMax = max == null;

      if (floating == null) {
        if (typeof min == 'boolean' && noMax) {
          floating = min;
          min = 1;
        }
        else if (!noMax && typeof max == 'boolean') {
          floating = max;
          noMax = true;
        }
      }
      if (noMin && noMax) {
        max = 1;
      }
      min = +min || 0;
      if (noMax) {
        max = min;
        min = 0;
      } else {
        max = +max || 0;
      }
      if (floating || min % 1 || max % 1) {
        var rand = nativeRandom();
        return nativeMin(min + (rand * (max - min + parseFloat('1e-' + ((rand +'').length - 1)))), max);
      }
      return baseRandom(min, max);
    }

    /**
     * Resolves the value of property `key` on `object`. If `key` is a function
     * it will be invoked with the `this` binding of `object` and its result returned,
     * else the property value is returned. If `object` is falsey then `undefined`
     * is returned.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {Object} object The object to inspect.
     * @param {string} key The name of the property to resolve.
     * @returns {*} Returns the resolved value.
     * @example
     *
     * var object = {
     *   'cheese': 'crumpets',
     *   'stuff': function() {
     *     return 'nonsense';
     *   }
     * };
     *
     * _.result(object, 'cheese');
     * // => 'crumpets'
     *
     * _.result(object, 'stuff');
     * // => 'nonsense'
     */
    function result(object, key) {
      if (object) {
        var value = object[key];
        return isFunction(value) ? object[key]() : value;
      }
    }

    /**
     * A micro-templating method that handles arbitrary delimiters, preserves
     * whitespace, and correctly escapes quotes within interpolated code.
     *
     * Note: In the development build, `_.template` utilizes sourceURLs for easier
     * debugging. See http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
     *
     * For more information on precompiling templates see:
     * http://lodash.com/custom-builds
     *
     * For more information on Chrome extension sandboxes see:
     * http://developer.chrome.com/stable/extensions/sandboxingEval.html
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} text The template text.
     * @param {Object} data The data object used to populate the text.
     * @param {Object} [options] The options object.
     * @param {RegExp} [options.escape] The "escape" delimiter.
     * @param {RegExp} [options.evaluate] The "evaluate" delimiter.
     * @param {Object} [options.imports] An object to import into the template as local variables.
     * @param {RegExp} [options.interpolate] The "interpolate" delimiter.
     * @param {string} [sourceURL] The sourceURL of the template's compiled source.
     * @param {string} [variable] The data object variable name.
     * @returns {Function|string} Returns a compiled function when no `data` object
     *  is given, else it returns the interpolated text.
     * @example
     *
     * // using the "interpolate" delimiter to create a compiled template
     * var compiled = _.template('hello <%= name %>');
     * compiled({ 'name': 'fred' });
     * // => 'hello fred'
     *
     * // using the "escape" delimiter to escape HTML in data property values
     * _.template('<b><%- value %></b>', { 'value': '<script>' });
     * // => '<b>&lt;script&gt;</b>'
     *
     * // using the "evaluate" delimiter to generate HTML
     * var list = '<% _.forEach(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the ES6 delimiter as an alternative to the default "interpolate" delimiter
     * _.template('hello ${ name }', { 'name': 'pebbles' });
     * // => 'hello pebbles'
     *
     * // using the internal `print` function in "evaluate" delimiters
     * _.template('<% print("hello " + name); %>!', { 'name': 'barney' });
     * // => 'hello barney!'
     *
     * // using a custom template delimiters
     * _.templateSettings = {
     *   'interpolate': /{{([\s\S]+?)}}/g
     * };
     *
     * _.template('hello {{ name }}!', { 'name': 'mustache' });
     * // => 'hello mustache!'
     *
     * // using the `imports` option to import jQuery
     * var list = '<% jq.each(people, function(name) { %><li><%- name %></li><% }); %>';
     * _.template(list, { 'people': ['fred', 'barney'] }, { 'imports': { 'jq': jQuery } });
     * // => '<li>fred</li><li>barney</li>'
     *
     * // using the `sourceURL` option to specify a custom sourceURL for the template
     * var compiled = _.template('hello <%= name %>', null, { 'sourceURL': '/basic/greeting.jst' });
     * compiled(data);
     * // => find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector
     *
     * // using the `variable` option to ensure a with-statement isn't used in the compiled template
     * var compiled = _.template('hi <%= data.name %>!', null, { 'variable': 'data' });
     * compiled.source;
     * // => function(data) {
     *   var __t, __p = '', __e = _.escape;
     *   __p += 'hi ' + ((__t = ( data.name )) == null ? '' : __t) + '!';
     *   return __p;
     * }
     *
     * // using the `source` property to inline compiled templates for meaningful
     * // line numbers in error messages and a stack trace
     * fs.writeFileSync(path.join(cwd, 'jst.js'), '\
     *   var JST = {\
     *     "main": ' + _.template(mainText).source + '\
     *   };\
     * ');
     */
    function template(text, data, options) {
      // based on John Resig's `tmpl` implementation
      // http://ejohn.org/blog/javascript-micro-templating/
      // and Laura Doktorova's doT.js
      // https://github.com/olado/doT
      var settings = lodash.templateSettings;
      text = String(text || '');

      // avoid missing dependencies when `iteratorTemplate` is not defined
      options = defaults({}, options, settings);

      var imports = defaults({}, options.imports, settings.imports),
          importsKeys = keys(imports),
          importsValues = values(imports);

      var isEvaluating,
          index = 0,
          interpolate = options.interpolate || reNoMatch,
          source = "__p += '";

      // compile the regexp to match each delimiter
      var reDelimiters = RegExp(
        (options.escape || reNoMatch).source + '|' +
        interpolate.source + '|' +
        (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + '|' +
        (options.evaluate || reNoMatch).source + '|$'
      , 'g');

      text.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
        interpolateValue || (interpolateValue = esTemplateValue);

        // escape characters that cannot be included in string literals
        source += text.slice(index, offset).replace(reUnescapedString, escapeStringChar);

        // replace delimiters with snippets
        if (escapeValue) {
          source += "' +\n__e(" + escapeValue + ") +\n'";
        }
        if (evaluateValue) {
          isEvaluating = true;
          source += "';\n" + evaluateValue + ";\n__p += '";
        }
        if (interpolateValue) {
          source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
        }
        index = offset + match.length;

        // the JS engine embedded in Adobe products requires returning the `match`
        // string in order to produce the correct `offset` value
        return match;
      });

      source += "';\n";

      // if `variable` is not specified, wrap a with-statement around the generated
      // code to add the data object to the top of the scope chain
      var variable = options.variable,
          hasVariable = variable;

      if (!hasVariable) {
        variable = 'obj';
        source = 'with (' + variable + ') {\n' + source + '\n}\n';
      }
      // cleanup code by stripping empty strings
      source = (isEvaluating ? source.replace(reEmptyStringLeading, '') : source)
        .replace(reEmptyStringMiddle, '$1')
        .replace(reEmptyStringTrailing, '$1;');

      // frame code as the function body
      source = 'function(' + variable + ') {\n' +
        (hasVariable ? '' : variable + ' || (' + variable + ' = {});\n') +
        "var __t, __p = '', __e = _.escape" +
        (isEvaluating
          ? ', __j = Array.prototype.join;\n' +
            "function print() { __p += __j.call(arguments, '') }\n"
          : ';\n'
        ) +
        source +
        'return __p\n}';

      // Use a sourceURL for easier debugging.
      // http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/#toc-sourceurl
      var sourceURL = '\n/*\n//# sourceURL=' + (options.sourceURL || '/lodash/template/source[' + (templateCounter++) + ']') + '\n*/';

      try {
        var result = Function(importsKeys, 'return ' + source + sourceURL).apply(undefined, importsValues);
      } catch(e) {
        e.source = source;
        throw e;
      }
      if (data) {
        return result(data);
      }
      // provide the compiled function's source by its `toString` method, in
      // supported environments, or the `source` property as a convenience for
      // inlining compiled templates during the build process
      result.source = source;
      return result;
    }

    /**
     * Executes the callback `n` times, returning an array of the results
     * of each callback execution. The callback is bound to `thisArg` and invoked
     * with one argument; (index).
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {number} n The number of times to execute the callback.
     * @param {Function} callback The function called per iteration.
     * @param {*} [thisArg] The `this` binding of `callback`.
     * @returns {Array} Returns an array of the results of each `callback` execution.
     * @example
     *
     * var diceRolls = _.times(3, _.partial(_.random, 1, 6));
     * // => [3, 6, 4]
     *
     * _.times(3, function(n) { mage.castSpell(n); });
     * // => calls `mage.castSpell(n)` three times, passing `n` of `0`, `1`, and `2` respectively
     *
     * _.times(3, function(n) { this.cast(n); }, mage);
     * // => also calls `mage.castSpell(n)` three times
     */
    function times(n, callback, thisArg) {
      n = (n = +n) > -1 ? n : 0;
      var index = -1,
          result = Array(n);

      callback = baseCreateCallback(callback, thisArg, 1);
      while (++index < n) {
        result[index] = callback(index);
      }
      return result;
    }

    /**
     * The inverse of `_.escape` this method converts the HTML entities
     * `&amp;`, `&lt;`, `&gt;`, `&quot;`, and `&#39;` in `string` to their
     * corresponding characters.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} string The string to unescape.
     * @returns {string} Returns the unescaped string.
     * @example
     *
     * _.unescape('Fred, Barney &amp; Pebbles');
     * // => 'Fred, Barney & Pebbles'
     */
    function unescape(string) {
      return string == null ? '' : String(string).replace(reEscapedHtml, unescapeHtmlChar);
    }

    /**
     * Generates a unique ID. If `prefix` is provided the ID will be appended to it.
     *
     * @static
     * @memberOf _
     * @category Utilities
     * @param {string} [prefix] The value to prefix the ID with.
     * @returns {string} Returns the unique ID.
     * @example
     *
     * _.uniqueId('contact_');
     * // => 'contact_104'
     *
     * _.uniqueId();
     * // => '105'
     */
    function uniqueId(prefix) {
      var id = ++idCounter;
      return String(prefix == null ? '' : prefix) + id;
    }

    /*--------------------------------------------------------------------------*/

    /**
     * Creates a `lodash` object that wraps the given value with explicit
     * method chaining enabled.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to wrap.
     * @returns {Object} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney',  'age': 36 },
     *   { 'name': 'fred',    'age': 40 },
     *   { 'name': 'pebbles', 'age': 1 }
     * ];
     *
     * var youngest = _.chain(characters)
     *     .sortBy('age')
     *     .map(function(chr) { return chr.name + ' is ' + chr.age; })
     *     .first()
     *     .value();
     * // => 'pebbles is 1'
     */
    function chain(value) {
      value = new lodashWrapper(value);
      value.__chain__ = true;
      return value;
    }

    /**
     * Invokes `interceptor` with the `value` as the first argument and then
     * returns `value`. The purpose of this method is to "tap into" a method
     * chain in order to perform operations on intermediate results within
     * the chain.
     *
     * @static
     * @memberOf _
     * @category Chaining
     * @param {*} value The value to provide to `interceptor`.
     * @param {Function} interceptor The function to invoke.
     * @returns {*} Returns `value`.
     * @example
     *
     * _([1, 2, 3, 4])
     *  .tap(function(array) { array.pop(); })
     *  .reverse()
     *  .value();
     * // => [3, 2, 1]
     */
    function tap(value, interceptor) {
      interceptor(value);
      return value;
    }

    /**
     * Enables explicit method chaining on the wrapper object.
     *
     * @name chain
     * @memberOf _
     * @category Chaining
     * @returns {*} Returns the wrapper object.
     * @example
     *
     * var characters = [
     *   { 'name': 'barney', 'age': 36 },
     *   { 'name': 'fred',   'age': 40 }
     * ];
     *
     * // without explicit chaining
     * _(characters).first();
     * // => { 'name': 'barney', 'age': 36 }
     *
     * // with explicit chaining
     * _(characters).chain()
     *   .first()
     *   .pick('age')
     *   .value();
     * // => { 'age': 36 }
     */
    function wrapperChain() {
      this.__chain__ = true;
      return this;
    }

    /**
     * Produces the `toString` result of the wrapped value.
     *
     * @name toString
     * @memberOf _
     * @category Chaining
     * @returns {string} Returns the string result.
     * @example
     *
     * _([1, 2, 3]).toString();
     * // => '1,2,3'
     */
    function wrapperToString() {
      return String(this.__wrapped__);
    }

    /**
     * Extracts the wrapped value.
     *
     * @name valueOf
     * @memberOf _
     * @alias value
     * @category Chaining
     * @returns {*} Returns the wrapped value.
     * @example
     *
     * _([1, 2, 3]).valueOf();
     * // => [1, 2, 3]
     */
    function wrapperValueOf() {
      return this.__wrapped__;
    }

    /*--------------------------------------------------------------------------*/

    // add functions that return wrapped values when chaining
    lodash.after = after;
    lodash.assign = assign;
    lodash.at = at;
    lodash.bind = bind;
    lodash.bindAll = bindAll;
    lodash.bindKey = bindKey;
    lodash.chain = chain;
    lodash.compact = compact;
    lodash.compose = compose;
    lodash.constant = constant;
    lodash.countBy = countBy;
    lodash.create = create;
    lodash.createCallback = createCallback;
    lodash.curry = curry;
    lodash.debounce = debounce;
    lodash.defaults = defaults;
    lodash.defer = defer;
    lodash.delay = delay;
    lodash.difference = difference;
    lodash.filter = filter;
    lodash.flatten = flatten;
    lodash.forEach = forEach;
    lodash.forEachRight = forEachRight;
    lodash.forIn = forIn;
    lodash.forInRight = forInRight;
    lodash.forOwn = forOwn;
    lodash.forOwnRight = forOwnRight;
    lodash.functions = functions;
    lodash.groupBy = groupBy;
    lodash.indexBy = indexBy;
    lodash.initial = initial;
    lodash.intersection = intersection;
    lodash.invert = invert;
    lodash.invoke = invoke;
    lodash.keys = keys;
    lodash.map = map;
    lodash.mapValues = mapValues;
    lodash.max = max;
    lodash.memoize = memoize;
    lodash.merge = merge;
    lodash.min = min;
    lodash.omit = omit;
    lodash.once = once;
    lodash.pairs = pairs;
    lodash.partial = partial;
    lodash.partialRight = partialRight;
    lodash.pick = pick;
    lodash.pluck = pluck;
    lodash.property = property;
    lodash.pull = pull;
    lodash.range = range;
    lodash.reject = reject;
    lodash.remove = remove;
    lodash.rest = rest;
    lodash.shuffle = shuffle;
    lodash.sortBy = sortBy;
    lodash.tap = tap;
    lodash.throttle = throttle;
    lodash.times = times;
    lodash.toArray = toArray;
    lodash.transform = transform;
    lodash.union = union;
    lodash.uniq = uniq;
    lodash.values = values;
    lodash.where = where;
    lodash.without = without;
    lodash.wrap = wrap;
    lodash.xor = xor;
    lodash.zip = zip;
    lodash.zipObject = zipObject;

    // add aliases
    lodash.collect = map;
    lodash.drop = rest;
    lodash.each = forEach;
    lodash.eachRight = forEachRight;
    lodash.extend = assign;
    lodash.methods = functions;
    lodash.object = zipObject;
    lodash.select = filter;
    lodash.tail = rest;
    lodash.unique = uniq;
    lodash.unzip = zip;

    // add functions to `lodash.prototype`
    mixin(lodash);

    /*--------------------------------------------------------------------------*/

    // add functions that return unwrapped values when chaining
    lodash.clone = clone;
    lodash.cloneDeep = cloneDeep;
    lodash.contains = contains;
    lodash.escape = escape;
    lodash.every = every;
    lodash.find = find;
    lodash.findIndex = findIndex;
    lodash.findKey = findKey;
    lodash.findLast = findLast;
    lodash.findLastIndex = findLastIndex;
    lodash.findLastKey = findLastKey;
    lodash.has = has;
    lodash.identity = identity;
    lodash.indexOf = indexOf;
    lodash.isArguments = isArguments;
    lodash.isArray = isArray;
    lodash.isBoolean = isBoolean;
    lodash.isDate = isDate;
    lodash.isElement = isElement;
    lodash.isEmpty = isEmpty;
    lodash.isEqual = isEqual;
    lodash.isFinite = isFinite;
    lodash.isFunction = isFunction;
    lodash.isNaN = isNaN;
    lodash.isNull = isNull;
    lodash.isNumber = isNumber;
    lodash.isObject = isObject;
    lodash.isPlainObject = isPlainObject;
    lodash.isRegExp = isRegExp;
    lodash.isString = isString;
    lodash.isUndefined = isUndefined;
    lodash.lastIndexOf = lastIndexOf;
    lodash.mixin = mixin;
    lodash.noConflict = noConflict;
    lodash.noop = noop;
    lodash.now = now;
    lodash.parseInt = parseInt;
    lodash.random = random;
    lodash.reduce = reduce;
    lodash.reduceRight = reduceRight;
    lodash.result = result;
    lodash.runInContext = runInContext;
    lodash.size = size;
    lodash.some = some;
    lodash.sortedIndex = sortedIndex;
    lodash.template = template;
    lodash.unescape = unescape;
    lodash.uniqueId = uniqueId;

    // add aliases
    lodash.all = every;
    lodash.any = some;
    lodash.detect = find;
    lodash.findWhere = find;
    lodash.foldl = reduce;
    lodash.foldr = reduceRight;
    lodash.include = contains;
    lodash.inject = reduce;

    mixin(function() {
      var source = {}
      forOwn(lodash, function(func, methodName) {
        if (!lodash.prototype[methodName]) {
          source[methodName] = func;
        }
      });
      return source;
    }(), false);

    /*--------------------------------------------------------------------------*/

    // add functions capable of returning wrapped and unwrapped values when chaining
    lodash.first = first;
    lodash.last = last;
    lodash.sample = sample;

    // add aliases
    lodash.take = first;
    lodash.head = first;

    forOwn(lodash, function(func, methodName) {
      var callbackable = methodName !== 'sample';
      if (!lodash.prototype[methodName]) {
        lodash.prototype[methodName]= function(n, guard) {
          var chainAll = this.__chain__,
              result = func(this.__wrapped__, n, guard);

          return !chainAll && (n == null || (guard && !(callbackable && typeof n == 'function')))
            ? result
            : new lodashWrapper(result, chainAll);
        };
      }
    });

    /*--------------------------------------------------------------------------*/

    /**
     * The semantic version number.
     *
     * @static
     * @memberOf _
     * @type string
     */
    lodash.VERSION = '2.4.1';

    // add "Chaining" functions to the wrapper
    lodash.prototype.chain = wrapperChain;
    lodash.prototype.toString = wrapperToString;
    lodash.prototype.value = wrapperValueOf;
    lodash.prototype.valueOf = wrapperValueOf;

    // add `Array` functions that return unwrapped values
    forEach(['join', 'pop', 'shift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        var chainAll = this.__chain__,
            result = func.apply(this.__wrapped__, arguments);

        return chainAll
          ? new lodashWrapper(result, chainAll)
          : result;
      };
    });

    // add `Array` functions that return the existing wrapped value
    forEach(['push', 'reverse', 'sort', 'unshift'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        func.apply(this.__wrapped__, arguments);
        return this;
      };
    });

    // add `Array` functions that return new wrapped values
    forEach(['concat', 'slice', 'splice'], function(methodName) {
      var func = arrayRef[methodName];
      lodash.prototype[methodName] = function() {
        return new lodashWrapper(func.apply(this.__wrapped__, arguments), this.__chain__);
      };
    });

    return lodash;
  }

  /*--------------------------------------------------------------------------*/

  // expose Lo-Dash
  var _ = runInContext();

  // some AMD build optimizers like r.js check for condition patterns like the following:
  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd) {
    // Expose Lo-Dash to the global object even when an AMD loader is present in
    // case Lo-Dash is loaded with a RequireJS shim config.
    // See http://requirejs.org/docs/api.html#config-shim
    root._ = _;

    // define as an anonymous module so, through path mapping, it can be
    // referenced as the "underscore" module
    define(function() {
      return _;
    });
  }
  // check for `exports` after `define` in case a build optimizer adds an `exports` object
  else if (freeExports && freeModule) {
    // in Node.js or RingoJS
    if (moduleExports) {
      (freeModule.exports = _)._ = _;
    }
    // in Narwhal or Rhino -require
    else {
      freeExports._ = _;
    }
  }
  else {
    // in a browser or Rhino
    root._ = _;
  }
}.call(this));
;(function() {
    "use strict";
    var woodhouse = angular.module('woodhouse', [])
        .config(['$locationProvider', function ($locationProvider) {
            $locationProvider.html5Mode(true);
        }]);

    woodhouse.controller('LunchApp', ['$scope', 'hashids', 'socket', 'geolocation', 'gmap', '$location', function($scope, hashids, socket, geolocation, gmap, $location) {
        var updatePlaces = _.bind(function (map) {
            var center = map.getCenter();
            var self = this;
            gmap.nearbySearch(map, {
                location: center,
                radius: '2000',
                types: ['restaurant', 'cafe']
            }).then(function(results) {
                self.map.places = results;
                self.placesRadius = gmap.paintRadius(self.placesRadius, map, center);
            });
        }, $scope);

        $scope.map = {
            center: {
                lat: 0,
                lng: 0
            },
            markers: [],
            placesRadius: null
        };

        $scope.events = {
            'markers_changed': updatePlaces
        };

        // Listen for the announce event.
        socket.on('announce').then(function (data) {
            console.log(data);
        });
        socket.on('location_added').then(function (data) {
            data.icon = 'friend';
            $scope.map.markers.push(data);
        });

        
        socket.on('all_existing_users').then(function (data) {
            angular.forEach(data, function (pos) {
                $scope.map.markers.push(pos);
            });
        });

        geolocation.getCurrentLatLng().then(function (currentLocation) {
            var roomName = $location.path().replace('/', '');
            if (roomName === '') {
                roomName = hashids.hash(currentLocation);
                $location.path(roomName);
            }
            socket.emit('ready', {'room': roomName, 'location': currentLocation});
            socket.emit('location_added', currentLocation);
            currentLocation.icon = 'currentUser';
            $scope.map.markers.push(currentLocation);
        });
    }]);


}());
;(function(){
    "use strict";
    angular.module('woodhouse').service('hashids', function () {
        var hashids = new Hashids(Date.now().toString(), 8);

        this.hash = function (position) {
            return hashids.encrypt(Math.abs(Math.round(position.lat)), Math.abs(Math.round(position.lng)));
        };
    });
}());;(function(){
    "use strict";
    angular.module('woodhouse').factory('socket', ['$q', function ($q) {
        var slice = Array.prototype.slice;
        var Socket = function () {
            this.io = io.connect();
        };

        Socket.prototype.on = function (eventName) {
            var deferred = $q.defer();
            this.io.on(eventName, function () {
                deferred.resolve.apply(null, slice.call(arguments, 0));
            });
            return deferred.promise;
        };

        Socket.prototype.emit = function (eventName, eventData) {
            var deferred = $q.defer();
            this.io.emit(eventName, eventData, function () {
                deferred.resolve.apply(null, slice.call(arguments, 0));
            });
            return deferred.promise;
        };

        return new Socket();
    }]);
}());;(function(){
    "use strict";
    angular.module('woodhouse').service('geolocation', ['$q', function ($q) {
        this.getCurrentPosition = function () {
            var deferred = $q.defer();
            navigator.geolocation.getCurrentPosition(function( position) {
                deferred.resolve(position);
            });
            return deferred.promise;
        };

        this.getCurrentLatLng = function () {
            return this.getCurrentPosition().then(getLatLng);
        };

        function getLatLng(l) {
            if (l.geometry) {
                return {
                    lat: l.geometry.location.lat(),
                    lng: l.geometry.location.lng()
                };
            }

            if (l.location) {
                return {
                    lat: l.location.lat(),
                    lng: l.location.lng()
                };
            }

            if (l.coords) {
                return {
                    lat: l.coords.latitude,
                    lng: l.coords.longitude
                };
            }

            if (typeof l.lat === 'function') {
                return {
                    lat: l.lat(),
                    lng: l.lng()
                };
            }
            return l;
        }
    }]);
}());;(function(){
    "use strict";
	angular.module('woodhouse').service('gmap', ['$q', function ($q) {
        var icons = {
            currentUser: 'http://www.googlemapsmarkers.com/v1/7F00FF/',
            friend: 'http://www.googlemapsmarkers.com/v1/3399FF/',
            center: 'http://www.googlemapsmarkers.com/v1/009900/'
        };
        var skipMapOptions = [
            'markers',
            'center',
            'events',
            'places'
        ];

        this.initMap = function (ele, center, attrs) {
            var options = {
                'center': {
                    'lat': center.lat,
                    'lng': center.lng
                }
            };
            _.each(attrs, function(val, key){
                if(!_.contains(skipMapOptions, key)) {
                    options[key] = val;
                }
            });
            var settings = angular.extend({
                zoom: 12
            }, options);

            return new google.maps.Map(ele, settings);
        };

        this.getLatLng = function (lat, lng) {
            return new google.maps.LatLng(lat, lng);
        };

        this.updateCenter = function (map, center) {
            map.panTo({
                'lat': center.lat,
                'lng': center.lng
            });
        };

        this.addMarker = function (map, location) {
            if (!location) { return; }
            var position = location.geometry ? location.geometry.location : this.getLatLng(location.lat, location.lng);
            var obj = {
                    position: position,
                    map: map
                };

            if (location.icon && icons[location.icon]) {
                obj.icon = icons[location.icon];
            }
            return new google.maps.Marker(obj);
        };

        this.removeMarker = function (marker) {
            return marker.setMap(null);
        };

        this.updateBounds = function (map, positions) {
            var bounds = new google.maps.LatLngBounds();
            positions.forEach(function(position) {
                var latLng = this.getLatLng(position.lat, position.lng);
                bounds.extend(latLng);
            }, this);
            map.fitBounds(bounds);
            if (map.getZoom() > 14) {
                map.setZoom(14);
            }

            return bounds;
        };

        this.nearbySearch = function (map, request) {
            var service = new google.maps.places.PlacesService(map),
                deferred = $q.defer();
            service.nearbySearch(request, function callback(results) {
                deferred.resolve(results);
            });

            return deferred.promise;
        };

        this.paintRadius = function (circle, map, center) {
            var color = "#006600",
                circleSettings = {
                    strokeColor: color,
                    strokeOpacity: 0.8,
                    strokeWeight: 2,
                    fillColor: color,
                    fillOpacity: 0.35,
                    map: map,
                    center: center,
                    radius: 2000
                };

            if (circle) {
                circle.setCenter(center);
                return circle;
            }
            return new google.maps.Circle(circleSettings);
        };

        this.updateRadius = function (circle, center) {
            circle.setCenter(center);
        };

        this.addListener = function (target, listener, fn) {
            google.maps.event.addListener(target, listener, fn);
        };
        
    }]);
}());;(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMap', ['gmap', '$timeout',
        function (gmap, $timeout) {
            var controller = ['$scope', function ($scope) {
                this.getMap = function(){
                    return $scope.gmap;
                };
                this.addMarker = function (marker) {
                    return gmap.addMarker($scope.gmap, marker);
                };
                this.removeMarker = function (marker) {
                    return gmap.removeMarker(marker);
                };
                this.initMap = function (element, attrs) {
                    var center = $scope.center,
                        mapEle = element.prepend('<div/>')[0].childNodes[0];
                    $scope.gmap = gmap.initMap(mapEle, center, attrs);
                };

                this.getEvent = function (eventName, eventFn) {
                    return function () {
                        return eventFn.apply($scope, [$scope.gmap, eventName, arguments]);
                    };
                };

            }];

            function link(scope, element, attrs, controller) {
                controller.initMap(element, attrs);
                scope.$watch('center', function (newcenter, oldcenter) {
                    if (newcenter != oldcenter) {
                        gmap.updateCenter(scope.gmap, newcenter);
                    }
                }, true);

                if (scope.events) {
                    _.each(scope.events, function(eventFn, eventName) {
                        gmap.addListener(scope.gmap, eventName, controller.getEvent(eventName, eventFn));
                    });
                }
            }

            return {
                scope: {
                    center: "=center",
                    markers: "=markers",
                    events: "=events"
                },
                controller: controller,
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();;(function(){
    "use strict";
    angular.module('woodhouse').directive(
        'whMarker', ['$timeout', 'gmap',
        function ($timeout, gmap) {
            function link(scope, element, attrs, mapController) {
                var gMarkers = [];
                scope.$watchCollection('markers', function (markers, oldMarkers) {
                    if ( markers != oldMarkers ) {
                        angular.forEach(gMarkers, function (marker) {
                            mapController.removeMarker(marker);
                        });

                        gMarkers = [];
                        angular.forEach(markers, function (marker) {
                            gMarkers.push(mapController.addMarker(marker));
                        });
                        if (attrs.fitMarkers) {
                            gmap.updateBounds(mapController.getMap(), markers);
                        }
                        if (attrs.watchMarkers) {
                            google.maps.event.trigger(mapController.getMap(), 'markers_changed');
                        }
                    }
                });
                if (scope.events) {
                    $timeout(function() {
                        _.each(scope.events, function(eventFn, eventName) {
                            gmap.addListener(mapController.getMap(), eventName, mapController.getEvent(eventName, eventFn));
                        });
                    });
                }
            }
            return {
                scope: {
                    markers: "=markers",
                    events: "=events"
                },
                require: '^whMap',
                link: link,
                restrict: 'AE'
            };
        }]
    );
})();