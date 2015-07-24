define("playme/app",["exports","ember","ember/resolver","ember/load-initializers","playme/config/environment"],function(e,t,n,r,a){"use strict";var i;t["default"].MODEL_FACTORY_INJECTIONS=!0,i=t["default"].Application.extend({modulePrefix:a["default"].modulePrefix,podModulePrefix:a["default"].podModulePrefix,Resolver:n["default"]}),r["default"](i,a["default"].modulePrefix),e["default"]=i}),define("playme/controllers/application",["exports","ember"],function(e,t){"use strict";var n;n=t["default"].Controller.extend({actions:{loginQRCode:function(){var e,t,n;return n=this.get("railsApiService"),t=this.get("phonegapHelperService"),e=function(e){return console.log("!!!!!!Login key: "+e),n.qrLoginVerify(localStorage.userKey,e)},this.get("phonegapHelperService").scanBarcode(e,this)},linkDeviceQRCode:function(){var e,t;return t=this.get("phonegapHelperService"),e=function(e){return console.log("!!!!!!User key: "+e),localStorage.userKey=e},this.get("phonegapHelperService").scanBarcode(e,this)}}}),e["default"]=n}),define("playme/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("playme/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("playme/initializers/export-application-global",["exports","ember","playme/config/environment"],function(e,t,n){"use strict";function r(e,r){if(n["default"].exportApplicationGlobal!==!1){var a,i=n["default"].exportApplicationGlobal;a="string"==typeof i?i:t["default"].String.classify(n["default"].modulePrefix),window[a]||(window[a]=r,r.reopen({willDestroy:function(){this._super.apply(this,arguments),delete window[a]}}))}}e.initialize=r,e["default"]={name:"export-application-global",initialize:r}}),define("playme/initializers/phonegap-helper-service",["exports"],function(e){"use strict";var t;t={name:"phonegap-helper-service",initialize:function(e,t){return t.inject("route","phonegapHelperService","service:phonegap-helper"),t.inject("controller","phonegapHelperService","service:phonegap-helper")}},e["default"]=t}),define("playme/initializers/rails-api-service",["exports"],function(e){"use strict";var t;t={name:"rails-api-service",initialize:function(e,t){return t.inject("route","railsApiService","service:rails-api"),t.inject("controller","railsApiService","service:rails-api")}},e["default"]=t}),define("playme/instance-initializers/app-version",["exports","playme/config/environment","ember"],function(e,t,n){"use strict";var r=n["default"].String.classify,a=!1;e["default"]={name:"App Version",initialize:function(e){if(!a){var i=r(e.toString());n["default"].libraries.register(i,t["default"].APP.version),a=!0}}}}),define("playme/router",["exports","ember","playme/config/environment"],function(e,t,n){"use strict";var r=t["default"].Router.extend({location:n["default"].locationType});r.map(function(){}),e["default"]=r}),define("playme/services/phonegap-helper",["exports","ember","playme/utils/constants"],function(e,t,n){"use strict";var r;r=t["default"].Object.extend({getMe:function(){return"Me"},vibrate:function(e){return this.doConditionalPGAction(function(t){return function(){return navigator.notification.vibrate(e)}}(this))},doCurlTransition:function(e){return this.havePhonegap()&&"iOS"===device.platform?nativetransitions.curl(.5,"down",e):(console.log("skipping curl transition as in browser"),null!=e?e.call():void 0)},scanBarcode:function(e,t){var n,r;return this.havePhonegap()?(r=function(n){return function(n){return console.log("We got a barcode\nResult: "+n.text+"\nFormat: "+n.format+"\nCancelled: "+n.cancelled),e.call(t,n.text)}}(this),n=function(e){return function(e){return alert("Scanning failed: "+e)}}(this),cordova.plugins.barcodeScanner.scan(r,n)):(console.log("mocking barcode scan with value zzz"),e.call(t,"zzz"))},havePhonegap:function(){return"undefined"!=typeof cordova&&null!==cordova||"undefined"!=typeof Phonegap&&null!==Phonegap||"undefined"!=typeof phonegap&&null!==phonegap}}),e["default"]=r}),define("playme/services/rails-api",["exports","ember","playme/utils/constants","playme/config/environment"],function(e,t,n,r){"use strict";var a;a=t["default"].Object.extend({qrLoginVerify:function(e,n){var a;return a=function(t){return function(t,a){var i,l,o,c,d;try{return console.log("indorailslogin"),d=r["default"].APP.RAILS_API_SERVER_URL+"/qrcode/device_verify",console.log("QR login verify into rails with URL: "+d),i={user_key:e,login_key:n},c=function(e){return console.log("QR login verify success"),t()},o=function(){return a()},$.ajax({url:d,data:i,success:c,fail:o})}catch(p){return l=p,console.error(l.stack),console.log("QR login verify Error: "+l),a()}}}(this),new t["default"].RSVP.Promise(a)}}),e["default"]=a}),define("playme/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:23,column:6}},moduleName:"playme/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("nav");e.setAttribute(n,"class","navbar navbar-default navbar-fixed-top"),e.setAttribute(n,"role","navigation");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","container-fluid");var a=e.createTextNode("\n        ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","navbar-header");var i=e.createTextNode("\n            ");e.appendChild(a,i);var i=e.createComment("");e.appendChild(a,i);var i=e.createTextNode("\n        ");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n");e.appendChild(n,r),e.appendChild(t,n);var n=e.createTextNode("\n\n");e.appendChild(t,n);var n=e.createElement("div");e.setAttribute(n,"class","container-fluid"),e.setAttribute(n,"id","main_container");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","row-fluid");var a=e.createTextNode("\n        ");e.appendChild(r,a);var a=e.createElement("div");e.setAttribute(a,"class","col-md-12");var i=e.createTextNode("\n            ");e.appendChild(a,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","btn btn-primary btn-lg btn-block");var l=e.createTextNode("\n                Log In With QR Code\n            ");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n\n            ");e.appendChild(a,i);var i=e.createElement("button");e.setAttribute(i,"type","button"),e.setAttribute(i,"class","btn btn-primary btn-lg btn-block");var l=e.createTextNode("\n                Link Device QR Code\n            ");e.appendChild(i,l),e.appendChild(a,i);var i=e.createTextNode("\n        ");e.appendChild(a,i),e.appendChild(r,a);var a=e.createTextNode("\n    ");e.appendChild(r,a),e.appendChild(n,r);var r=e.createTextNode("\n\n    ");e.appendChild(n,r);var r=e.createComment("");e.appendChild(n,r);var r=e.createTextNode("\n");return e.appendChild(n,r),e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var r=e.childAt(t,[2]),a=e.childAt(r,[1,1]),i=e.childAt(a,[1]),l=e.childAt(a,[3]),o=new Array(4);return o[0]=e.createMorphAt(e.childAt(t,[0,1,1]),1,1),o[1]=e.createElementMorph(i),o[2]=e.createElementMorph(l),o[3]=e.createMorphAt(r,3,3),o},statements:[["inline","link-to",["PlayMe","index"],["class","navbar-brand"],["loc",[null,[4,12],[4,61]]]],["element","action",["loginQRCode"],[],["loc",[null,[12,20],[12,44]]]],["element","action",["linkDeviceQRCode"],[],["loc",[null,[16,20],[16,49]]]],["content","outlet",["loc",[null,[22,4],[22,14]]]]],locals:[],templates:[]}}())}),define("playme/utils/constants",["exports"],function(e){"use strict";var t;t=Ember.Object.create({a:"AISHERE"}),e["default"]=t}),define("playme/utils/global_vars",["exports"],function(e){"use strict";var t;t=Ember.Object.create({var1:null}),e["default"]=t}),define("playme/config/environment",["ember"],function(e){var t="playme";try{var n=t+"/config/environment",r=e["default"].$('meta[name="'+n+'"]').attr("content"),a=JSON.parse(unescape(r));return{"default":a}}catch(i){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("playme/tests/test-helper"):require("playme/app")["default"].create({RAILS_API_SERVER_URL:"http://192.168.1.24:3000",name:"playme",version:"0.0.0+89388337"});