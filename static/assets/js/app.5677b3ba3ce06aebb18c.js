!function(e){function t(t){for(var i,o,l=t[0],s=t[1],c=t[2],u=0,p=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(m&&m(t);p.length;)p.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],i=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(i=!1)}i&&(r.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},a={app:0},r=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var m=s;r.push([94,"vendor"]),n()}({125:function(e,t,n){"use strict";n.r(t),n.d(t,"default",function(){return i});var i=function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],i=n.length,a=window.console?window.console:{};i--;)a[e=n[i]]||(a[e]=t)}()},126:function(e,t,n){},131:function(e,t,n){"use strict";n.r(t);n(95),n(99);var i=n(2),a=n.n(i),r=window.matchMedia("(min-width: 768px)"),o=(n(61),n(67),n(68),n(45),n(70),n(32),n(80),n(46),n(81),n(83),n(47),n(48),n(34)),l={required:"This field is required",email:"Invalid email address",tel:"Invalid phone number",maxLength:"Maximum {maxLength} characters allowed",minLength:"Minimum {minLength} characters required",maxFileSize:"Max file size must be < {maxFileSize}MB, uploaded {fileSize}MB",image:"Image should be jpg or png",minImageDimensions:"Image must be > {minWidth}x{minHeight}, uploaded {width}x{height}",maxImageDimensions:"Image must be < {maxWidth}x{maxHeight}, uploaded {width}x{height}",requiredFromList:"Select an option",confirmation:"This field is not equal to {originalLabel}",minOptions:"Please select at least {minOptionsCount} options"},s={required:"Dit veld is verplicht",email:"Ongeldig emailadres",tel:"Ongeldig telefoonnummer",maxLength:"Maximum {maxLength} karakters toegestaan",minLength:"Minimum {minLength} karakters toegestaan",maxFileSize:"Max bestandsgrootte moet < {maxFileSize}MB, verzonden {fileSize}MB",image:"Afbeelding moet jpg of png zijn",minImageDimensions:"Afbeelding moet > zijn dan {minWidth}x{minHeight}, verzonden {width}x{height}",maxImageDimensions:"Afbeelding moet < zijn dan {maxWidth}x{maxHeight}, verzonden {width}x{height}",requiredFromList:"Selecteer een optie",confirmation:"Dit veld is niet gelijk aan {originalLabel}",minOptions:"Selecteer ten minste {minOptionsCount} opties"},c={required:"Ce champ est requis",email:"Adresse email invalide",tel:"Numéro de téléphone invalide",maxLength:"Maximum {maxLength} caractères requis",minLength:"Minimum {minLength} caractères requis",maxFileSize:"La taille maximale du fichier doit être < {maxFileSize}MB, téléchargé {fileSize}MB",image:"L'image doit être jpg ou png",minImageDimensions:"L'image doit être > {minWidth}x{minHeight}, téléchargé {width}x{height}",maxImageDimensions:"L'image doit être < {maxWidth}x{maxHeight}, téléchargé {width}x{height}",requiredFromList:"Choisir une option",confirmation:"Ce champ n'est pas égal à {originalLabel}",minOptions:"Veuillez choisir {minOptionsCount} options"},m={required:"Dieses Feld ist ein Pflichtfeld",email:"Ungültige E-Mail-Adresse",tel:"Ungültige Telefonnummer",maxLength:"Maximal {maxLength} Zeichen erlaubt",minLength:"Mindestens {minLength} Zeichen benötigt",maxFileSize:"Die maximale Dateigröße muss sein < {maxFileSize}MB, hochgeladen {fileSize}MB",image:"Das Bild sollte jpg oder png seins",minImageDimensions:"Bild muss sein > {minWidth}x{minHeight}, hochgeladen {width}x{height}",maxImageDimensions:"Bild muss sein < {maxWidth}x{maxHeight}, hochgeladen {width}x{height}",requiredFromList:"Bitte wählen Sie eine Option",confirmation:"Dieses Feld ist nicht gleich {originalLabel}",minOptions:"Bitte wählen Sie mindestens {minOptionsCount} Optionen"};function u(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n(86),n(111);function p(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var d=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.$form=a()(t),this.$form.submit(function(e){if(e.preventDefault(),n.$form.hasClass("validate")&&!1===n.$form.validationEngine("validate"))return!1;var t=n.$form.find('[name="g-recaptcha-response"]');return t.length&&""!==t.val()&&window.grecaptcha.reset(),window.grecaptcha.execute(n.$form.find(".g-recaptcha").data("widgetid")),!1})}var t,n,i;return t=e,(n=[{key:"submitCallback",value:function(){var e=this;if(this.$form.is(".form-ajax")){var t=this.$form.attr("action"),n=new FormData(this.$form[0]),i=this.$form.find('input[type="submit"], button');a.a.ajax({type:"POST",url:t,data:n,processData:!1,contentType:!1}).then(function(n){a()("li").removeClass("error"),!1===n.errors&&(e.$form.html(n.result),"function"==typeof window.ga&&window.ga("send","pageview",t)),i.removeAttr("disabled")}).catch(function(t){var n=t.responseJSON;console.log("Error: ".concat(t.responseText)),e.$form.find(".result").html(n.result),n.fields&&a.a.each(n.fields,function(e,t){a()('input[name="'.concat(t,'"],textarea[name="').concat(t,'"]')).addClass("error")})}).then(function(){i.prop("disabled",!1)})}else this.$form.off("submit").submit()}}])&&p(t.prototype,n),i&&p(t,i),e}();window.onloadReCaptchaCallback=function(){a()(".g-recaptcha").each(function(e,t){var n={sitekey:a()(t).data("sitekey"),size:a()(t).data("size"),callback:a()(t).data("callback")},i=window.grecaptcha.render(t,n);a()(t).data("widgetid",i)})};var f=[{featureType:"administrative.land_parcel",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"landscape.man_made",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"simplified"},{lightness:20}]},{featureType:"road.highway",elementType:"geometry",stylers:[{hue:"#f49935"}]},{featureType:"road.highway",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{hue:"#fad959"}]},{featureType:"road.arterial",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"road.local",elementType:"geometry",stylers:[{visibility:"simplified"}]},{featureType:"road.local",elementType:"labels",stylers:[{visibility:"simplified"}]},{featureType:"transit",elementType:"all",stylers:[{visibility:"off"}]},{featureType:"water",elementType:"all",stylers:[{hue:"#a1cdfc"},{saturation:30},{lightness:49}]}];function h(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var g={holderId:"map",title:"Esign",lat:51.0325538,long:3.7333816,externUrl:"https://www.google.be/maps/place/Esign+-+Web+%26+Graphics/@51.0325538,3.7333816,19z/data=!3m1!4b1!4m5!3m4!1s0x47c373970c763623:0xde317546f86febc9!8m2!3d51.0325538!4d3.7339288"},y=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=window.google||{};this.googleMaps=t.maps,this.baseUrl=window.baseUrl||"";var n=e||g,i=document.getElementById(n.holderId);if(i){var a=this.addMap(i,n.lat,n.long);this.addMarker(a,n.lat,n.long,n.title,n.externUrl)}}},{key:"addMap",value:function(e,t,n){var i=new this.googleMaps.StyledMapType(f,{name:"Styled Map"}),a=new this.googleMaps.LatLng(t,n),r={zoom:15,panControl:!0,zoomControl:!0,scaleControl:!0,mapTypeControl:!1,streetViewControl:!1,overviewMapControl:!1,minZoom:2,scrollwheel:!1,center:a,mapTypeId:this.googleMaps.MapTypeId.ROADMAP},o=new this.googleMaps.Map(e,r);return o.mapTypes.set("map_style",i),o.setMapTypeId("map_style"),this.googleMaps.event.addDomListener(window,"resize",function(){o.setCenter(a)}),o}},{key:"addMarker",value:function(e,t,n,i,a){var r=new this.googleMaps.LatLng(t,n),o={url:window.markerImg,size:new this.googleMaps.Size(100,128),origin:new this.googleMaps.Point(0,0),anchor:new this.googleMaps.Point(25,64),scaledSize:new this.googleMaps.Size(50,64)},l=new this.googleMaps.Marker({position:r,map:e,icon:o});return this.googleMaps.event.addListener(l,"click",function(){window.open(a,"_blank")}),l}}])&&h(t.prototype,n),i&&h(t,i),e}();n(112),n(121),n(122),n(123);function v(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.template=t.querySelector(".json-fetcher__template"),this.api=t.dataset.api,this.keys=t.dataset.keys.split(";"),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){var e=this;fetch(this.api).then(function(e){return e.json()}).then(function(t){e.parseResults(t)}).catch(function(t){e.printError(t)})}},{key:"parseResults",value:function(e){var t=this;e.forEach(function(e){var n=t.template.cloneNode(!0);t.keys.forEach(function(i){try{for(var a=i.split("."),r=0,o=e;r+1<=a.length;)o=o[a[r]],r+=1;n.innerHTML=n.innerHTML.replace("__".concat(i,"__"),o)}catch(e){t.printError(e)}}),n.innerHTML=n.innerHTML.replace("data-src","src"),t.element.appendChild(n.children[0])}),this.template.parentNode.removeChild(this.template)}},{key:"printError",value:function(e){console.error("JsonFetcher error - API: ".concat(this.api,"\n").concat(e))}}])&&v(t.prototype,n),i&&v(t,i),e}();function w(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function x(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var M=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=new d("#form-contact");window.submitRecaptchaFormContact=function(){t.submitCallback()},(new y).init(),this.init()}var t,n,i;return t=e,(n=[{key:"init",value:function(){w(document.querySelectorAll(".json-fetcher")).forEach(function(e){new b(e)})}}])&&x(t.prototype,n),i&&x(t,i),e}(),T=n(49);n(125);var k,L=document.documentElement.classList;L.add("js"),L.remove("no-js"),k=a()(".main-nav__wrap"),a()(".main-nav__trigger").click(function(e){e.preventDefault(),a()(e.currentTarget).next(".main-nav__wrap").slideToggle("fast")}),r.addListener(function(e){e.matches?k.css("display","block"):k.css("display","none")}),a()('iframe[src*="youtube.com/embed"],\n    iframe[src*="youtube-nocookie.com/embed"],\n    iframe[src*="player.vimeo"]').wrap('<div class="video-container"></div>'),function(){if(!T.a.get("cookie-consent")){var e=document.getElementById("cookie-notification");document.getElementById("accept-cookies").addEventListener("click",function(){T.a.set("cookie-consent","1",365),e.classList.add("hide")}),e.classList.remove("hide")}}(),o.a.ui.config={classInputGroup:"input-group",classInputGroupError:"input-group--has-error",classLabel:"input-group__label",tagNameError:"small",classError:"input-group__error",selectorInput:"[name]"},o.a.lang=function(){switch(document.documentElement.lang){case"nl":return s;case"fr":return c;case"de":return m;default:return l}}(),u(document.querySelectorAll("form.validate")).forEach(function(e){o.a.init(e,!0)});var S=new d("#form-newsletter");window.submitRecaptchaFormNewsletter=function(){S.submitCallback()};var C={Contact:function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=new d("#form-contact");window.submitRecaptchaFormContact=function(){t.submitCallback()},(new y).init()},Components:M},j=document.documentElement.getAttribute("data-page");if(j){var O=j.charAt(0).toUpperCase()+j.slice(1);""!==O&&"function"==typeof C[O]&&new C[O]}},94:function(e,t,n){n(131),e.exports=n(126)}});
//# sourceMappingURL=app.5677b3ba3ce06aebb18c.js.map