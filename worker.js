(()=>{var e={},t={};function r(s){if(t[s])return t[s].exports;var n=t[s]={id:s,loaded:!1,exports:{}};return e[s](n,n.exports,r),n.loaded=!0,n.exports}r.m=e,r.d=(e,t)=>{for(var s in t)r.o(t,s)&&!r.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce(((t,s)=>(r.f[s](e,t),t)),[])),r.u=e=>e+".worker.js",r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;r.g.importScripts&&(e=r.g.location+"");var t=r.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var s=t.getElementsByTagName("script");s.length&&(e=s[s.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=e})(),(()=>{var e={179:1};r.f.i=(t,s)=>{e[t]||importScripts(""+r.u(t))};var t=self.webpackChunkwww=self.webpackChunkwww||[],s=t.push.bind(t);t.push=t=>{var[n,o,a]=t;for(var i in o)r.o(o,i)&&(r.m[i]=o[i]);for(a&&a(r);n.length;)e[n.pop()]=1;s(t)}})(),r.v=(e,t,s,n)=>{var o=fetch(r.p+""+s+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(o,n).then((t=>Object.assign(e,t.instance.exports))):o.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,n))).then((t=>Object.assign(e,t.instance.exports)))},r.e(85).then(r.bind(r,85)).then((e=>{self.addEventListener("message",(({data:t})=>{try{e.optimize(t,(e=>{self.postMessage({success:!0,sets:e})}))}catch(e){self.postMessage({success:!1,err:e.message})}}))}))})();