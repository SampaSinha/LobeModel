(this["webpackJsonplobe-web-sample"]=this["webpackJsonplobe-web-sample"]||[]).push([[0],[,,,,,,,,function(e,t,n){var c=n(26),i=["loadModel","disposeModel","predict"];e.exports=function(){var e=new Worker(n.p+"4c187bfb59c387bf8b37.worker.js",{name:"[hash].worker.js"});return c(e,i),e}},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(6),a=n.n(r),s=(n(13),n(2)),o=n(3),u=n.n(o),l=n(5),d=n(7),j=n.n(d),b=(n(15),n(0)),f=function(e){var t=e.additionalClassname,n=e.children,c="blur-container";return t&&(c+=" ".concat(t)),Object(b.jsx)("div",{className:c,children:n})},v=(n(17),function(e){var t=e.onClick,n=e.setHover,c=e.children;return Object(b.jsx)("div",{onClick:t?function(){return t()}:void 0,onMouseEnter:n?function(){return n(!0)}:void 0,onMouseLeave:n?function(){return n(!1)}:void 0,children:Object(b.jsx)(f,{additionalClassname:"square-button",children:c})})}),O=n.p+"static/media/check.06c31cf8.svg",g=n.p+"static/media/no-check.fe894ae6.svg";n(18);var m=function(e){var t=e.selected,n=e.onSelect,c=e.name;return Object(b.jsxs)("div",{className:"source-item-container",children:[Object(b.jsx)("div",{className:"source-device".concat(t?" source-selected":""),children:c}),Object(b.jsx)("div",{onClick:function(){return n()},className:"source-radio-button",children:Object(b.jsx)("img",{src:t?O:g,alt:"Select device"})})]},c)},h=n.p+"static/media/gear.b1f1407e.svg";n(19);var p=function(e){var t=e.devices,n=e.deviceId,i=e.setDeviceId,r=e.selectorVisible,a=e.setSelectorVisible,o=Object(c.useState)(!1),u=Object(s.a)(o,2),l=u[0],d=u[1];return Object(b.jsxs)("div",{id:"camera-select-button",onClick:function(e){return e.stopPropagation()},onMouseLeave:function(){a(!1)},children:[Object(b.jsx)(v,{setHover:function(e){d(e),e&&a(!0)},children:Object(b.jsx)("img",{id:"gear-icon",src:h,alt:"Gear Icon",className:r||l?"gear-rotated":void 0})}),Object(b.jsx)(f,{additionalClassname:"source-selector".concat(r?" source-expanded":""),children:t.map((function(e,t){return Object(b.jsx)(m,{name:e.label?e.label.replace(/\(.*\)/g,""):"Device ".concat(t+1),onSelect:function(){return i(e.deviceId)},selected:e.deviceId===n},e.deviceId)}))})]})};n(20);var x=function(e){var t=e.predictCanvas,n=e.predictions,i=Object(c.useState)([]),r=Object(s.a)(i,2),a=r[0],o=r[1],d=Object(c.useState)(void 0),f=Object(s.a)(d,2),v=f[0],O=f[1],g=Object(c.useState)(!0),m=Object(s.a)(g,2),h=(m[0],m[1],Object(c.useRef)(null)),x=Object(c.useState)(!1),C=Object(s.a)(x,2),k=C[0],I=C[1],w=Object(c.useCallback)((function(e){var t=e.filter((function(e){return"videoinput"===e.kind}));o(t),t.length>0&&O(t[0].deviceId)}),[o,O]);Object(c.useEffect)((function(){navigator.mediaDevices.enumerateDevices().then(w)}),[w]);var S=Object(c.useCallback)(Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!h.current){e.next=4;break}if(!(t=h.current.getCanvas())){e.next=4;break}return e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)}))),[h]),F=Object(c.useCallback)((function(e){return new Promise((function(t,n){setTimeout(t,e)}))}),[]);return Object(c.useEffect)((function(){S().then(function(){var e=Object(l.a)(u.a.mark((function e(n){var c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n;case 1:if(c){e.next=9;break}return e.next=4,F(1e4);case 4:return e.next=6,S();case 6:c=e.sent,e.next=1;break;case 9:c&&t(c);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),[F,n,v,S,t]),Object(b.jsxs)("div",{id:"video-container",onClick:function(){return I(!1)},children:[Object(b.jsx)(p,{devices:a,deviceId:v,setDeviceId:O,selectorVisible:k,setSelectorVisible:I}),Object(b.jsx)(j.a,{ref:h,screenshotFormat:"image/jpeg",forceScreenshotSourceSize:!0,screenshotQuality:1,audio:!1,videoConstraints:{width:{ideal:1920},height:{ideal:1080},deviceId:v?{exact:v}:void 0}})]})};n(21);var C=function(e){var t=e.label,n=e.confidence,c=e.top;return Object(b.jsxs)("div",{className:"prediction-entry",children:[t,n?Object(b.jsx)("div",{className:"prediction-bar"+(c?" prediction-green":""),style:{width:(100*n).toString()+"%"}}):null]},t)};n(22);var k=function(e){var t,n=e.predictions,c=e.top,i=void 0===c?1:c;return n&&(t=Object.entries(n).sort((function(e,t){return t[1]-e[1]})).slice(0,i)),Object(b.jsx)("div",{id:"predictions",children:Object(b.jsx)(f,{additionalClassname:"prediction-container",children:t?t.map((function(e,t){var n=Object(s.a)(e,2),c=n[0],i=n[1];return Object(b.jsx)(C,{label:c,confidence:i,top:0===t},c)})):Object(b.jsx)(C,{label:"Loading..."})})})},I=n.p+"static/media/gallery.45752e9c.svg";n(23);var w=function(e){var t=e.setImageFile,n=e.imageFile,i=Object(c.useRef)(null);return Object(c.useEffect)((function(){!n&&i.current&&(i.current.value="")}),[n,i]),Object(b.jsxs)("div",{id:"image-select-button",onClick:function(){i.current&&i.current.click()},children:[Object(b.jsx)(v,{children:Object(b.jsx)("img",{id:"gallery-icon",src:I,alt:"File Selector"})}),Object(b.jsx)("input",{ref:i,type:"file",accept:"image/*",onChange:function(e){var n=e.target.files;n&&n.length>0&&t(n[0])},style:{display:"none"}})]})},S=n.p+"static/media/close.b502d4ba.svg";n(24);var F=function(e){var t=e.setImageFile;return Object(b.jsx)("div",{id:"image-close-button",children:Object(b.jsx)(v,{onClick:function(){t(null)},children:Object(b.jsx)("img",{id:"close-icon",src:S,alt:"Close"})})})};n(25);var y=function(e){var t=e.predictCanvas,n=e.image,i=e.setImageFile,r=Object(c.useRef)(null),a=Object(c.useRef)(null);return Object(c.useEffect)((function(){var e=new FileReader;e.onload=function(e){var n=new Image;n.onload=function(){if(r.current){r.current.width=n.width,r.current.height=n.height;var e=r.current.getContext("2d");e&&(e.drawImage(n,0,0),t(r.current))}},e.target&&(n.src=e.target.result,a.current&&(a.current.style.backgroundImage="url(".concat(e.target.result,")")))},e.readAsDataURL(n)}),[n,t,a]),Object(b.jsxs)("div",{id:"static-image",ref:a,children:[Object(b.jsx)(F,{setImageFile:i}),Object(b.jsx)("canvas",{ref:r,style:{display:"none"}})]})},M=n(8),D=n.n(M)()();D.loadModel("/Lobe_Model/model/signature.json","/Lobe_Model/model/model.json");var L=function(){var e=Object(c.useState)(void 0),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(null),a=Object(s.a)(r,2),o=a[0],u=a[1],l=Object(c.useCallback)((function(e){var t=e.getContext("2d");if(t){var n=t.getImageData(0,0,e.width,e.height);D.predict(n).then((function(e){e&&i(e.Confidences)}))}}),[]);return Object(b.jsxs)("div",{children:[Object(b.jsx)(w,{setImageFile:u,imageFile:o}),o?Object(b.jsx)(y,{predictCanvas:l,image:o,setImageFile:u}):Object(b.jsx)(x,{predictCanvas:l,predictions:n}),Object(b.jsx)(k,{predictions:n})]})},N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,28)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),r(e),a(e)}))};a.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(L,{})}),document.getElementById("root")),N()}],[[27,1,2]]]);
//# sourceMappingURL=main.52e09120.chunk.js.map