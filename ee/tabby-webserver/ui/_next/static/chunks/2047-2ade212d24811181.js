"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2047],{7404:function(e,t,n){n.d(t,{j:function(){return u}});let r=e=>"boolean"==typeof e?"".concat(e):0===e?"0":e,i=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.flat(1/0).filter(Boolean).join(" ")},u=(e,t)=>n=>{var u;if((null==t?void 0:t.variants)==null)return i(e,null==n?void 0:n.class,null==n?void 0:n.className);let{variants:o,defaultVariants:a}=t,l=Object.keys(o).map(e=>{let t=null==n?void 0:n[e],i=null==a?void 0:a[e];if(null===t)return null;let u=r(t)||r(i);return o[e][u]}),s=n&&Object.entries(n).reduce((e,t)=>{let[n,r]=t;return void 0===r||(e[n]=r),e},{}),c=null==t?void 0:null===(u=t.compoundVariants)||void 0===u?void 0:u.reduce((e,t)=>{let{class:n,className:r,...i}=t;return Object.entries(i).every(e=>{let[t,n]=e;return Array.isArray(n)?n.includes({...a,...s}[t]):({...a,...s})[t]===n})?[...e,n,r]:e},[]);return i(e,l,c,null==n?void 0:n.class,null==n?void 0:n.className)}},81853:function(e,t,n){/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(2265),i="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=r.useState,o=r.useEffect,a=r.useLayoutEffect,l=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!i(e,n)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),i=r[0].inst,c=r[1];return a(function(){i.value=n,i.getSnapshot=t,s(i)&&c({inst:i})},[e,n,t]),o(function(){return s(i)&&c({inst:i}),e(function(){s(i)&&c({inst:i})})},[e]),l(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},26272:function(e,t,n){e.exports=n(81853)},44796:function(e,t,n){n.d(t,{$l:function(){return o},BN:function(){return x},DY:function(){return g},J$:function(){return q},JN:function(){return m},LI:function(){return k},PM:function(){return s},W6:function(){return V},i_:function(){return u},ko:function(){return K},kw:function(){return L},mf:function(){return l},o8:function(){return a},qC:function(){return D},s6:function(){return H},sj:function(){return I},u3:function(){return j},u_:function(){return $},w6:function(){return S},xD:function(){return Q}});var r=n(2265);let i=()=>{},u=i(),o=Object,a=e=>e===u,l=e=>"function"==typeof e,s=(e,t)=>({...e,...t}),c=e=>l(e.then),f=new WeakMap,d=0,E=e=>{let t,n;let r=typeof e,i=e&&e.constructor,u=i==Date;if(o(e)!==e||u||i==RegExp)t=u?e.toJSON():"symbol"==r?e.toString():"string"==r?JSON.stringify(e):""+e;else{if(t=f.get(e))return t;if(t=++d+"~",f.set(e,t),i==Array){for(n=0,t="@";n<e.length;n++)t+=E(e[n])+",";f.set(e,t)}if(i==o){t="#";let r=o.keys(e).sort();for(;!a(n=r.pop());)a(e[n])||(t+=n+":"+E(e[n])+",");f.set(e,t)}}return t},g=new WeakMap,v={},w={},p="undefined",_=typeof window!=p,h=typeof document!=p,y=()=>_&&typeof window.requestAnimationFrame!=p,m=(e,t)=>{let n=g.get(e);return[()=>!a(t)&&e.get(t)||v,r=>{if(!a(t)){let i=e.get(t);t in w||(w[t]=i),n[5](t,s(i,r),i||v)}},n[6],()=>!a(t)&&t in w?w[t]:!a(t)&&e.get(t)||v]},b=!0,[R,T]=_&&window.addEventListener?[window.addEventListener.bind(window),window.removeEventListener.bind(window)]:[i,i],O={initFocus:e=>(h&&document.addEventListener("visibilitychange",e),R("focus",e),()=>{h&&document.removeEventListener("visibilitychange",e),T("focus",e)}),initReconnect:e=>{let t=()=>{b=!0,e()},n=()=>{b=!1};return R("online",t),R("offline",n),()=>{T("online",t),T("offline",n)}}},S=!r.useId,V=!_||"Deno"in window,L=e=>y()?window.requestAnimationFrame(e):setTimeout(e,1),k=V?r.useEffect:r.useLayoutEffect,N="undefined"!=typeof navigator&&navigator.connection,C=!V&&N&&(["slow-2g","2g"].includes(N.effectiveType)||N.saveData),D=e=>{if(l(e))try{e=e()}catch(t){e=""}let t=e;return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?E(e):"",t]},A=0,j=()=>++A;var I={__proto__:null,ERROR_REVALIDATE_EVENT:3,FOCUS_EVENT:0,MUTATE_EVENT:2,RECONNECT_EVENT:1};async function x(...e){let[t,n,r,i]=e,o=s({populateCache:!0,throwOnError:!0},"boolean"==typeof i?{revalidate:i}:i||{}),f=o.populateCache,d=o.rollbackOnError,E=o.optimisticData,v=!1!==o.revalidate,w=e=>"function"==typeof d?d(e):!1!==d,p=o.throwOnError;if(l(n)){let e=[],r=t.keys();for(let i of r)!/^\$(inf|sub)\$/.test(i)&&n(t.get(i)._k)&&e.push(i);return Promise.all(e.map(_))}return _(n);async function _(n){let i;let[o]=D(n);if(!o)return;let[s,d]=m(t,o),[_,h,y,b]=g.get(t),R=()=>{let e=_[o];return v&&(delete y[o],delete b[o],e&&e[0])?e[0](2).then(()=>s().data):s().data};if(e.length<3)return R();let T=r,O=j();h[o]=[O,0];let S=!a(E),V=s(),L=V.data,k=V._c,N=a(k)?L:k;if(S&&d({data:E=l(E)?E(N,L):E,_c:N}),l(T))try{T=T(N)}catch(e){i=e}if(T&&c(T)){if(T=await T.catch(e=>{i=e}),O!==h[o][0]){if(i)throw i;return T}i&&S&&w(i)&&(f=!0,d({data:N,_c:u}))}if(f&&!i){if(l(f)){let e=f(T,N);d({data:e,error:u,_c:u})}else d({data:T,error:u,_c:u})}if(h[o][1]=j(),Promise.resolve(R()).then(()=>{d({_c:u})}),i){if(p)throw i;return}return T}}let P=(e,t)=>{for(let n in e)e[n][0]&&e[n][0](t)},M=(e,t)=>{if(!g.has(e)){let n=s(O,t),r={},o=x.bind(u,e),a=i,l={},c=(e,t)=>{let n=l[e]||[];return l[e]=n,n.push(t),()=>n.splice(n.indexOf(t),1)},f=(t,n,r)=>{e.set(t,n);let i=l[t];if(i)for(let e of i)e(n,r)},d=()=>{if(!g.has(e)&&(g.set(e,[r,{},{},{},o,f,c]),!V)){let t=n.initFocus(setTimeout.bind(u,P.bind(u,r,0))),i=n.initReconnect(setTimeout.bind(u,P.bind(u,r,1)));a=()=>{t&&t(),i&&i(),g.delete(e)}}};return d(),[e,o,d,a]}return[e,g.get(e)[4]]},[F,W]=M(new Map),$=s({onLoadingSlow:i,onSuccess:i,onError:i,onErrorRetry:(e,t,n,r,i)=>{let u=n.errorRetryCount,o=i.retryCount,l=~~((Math.random()+.5)*(1<<(o<8?o:8)))*n.errorRetryInterval;(a(u)||!(o>u))&&setTimeout(r,l,i)},onDiscarded:i,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:(e,t)=>E(e)==E(t),isPaused:()=>!1,cache:F,mutate:W,fallback:{}},{isOnline:()=>b,isVisible:()=>{let e=h&&document.visibilityState;return a(e)||"hidden"!==e}}),J=(e,t)=>{let n=s(e,t);if(t){let{use:r,fallback:i}=e,{use:u,fallback:o}=t;r&&u&&(n.use=r.concat(u)),i&&o&&(n.fallback=s(i,o))}return n},U=(0,r.createContext)({}),q=e=>{let{value:t}=e,n=(0,r.useContext)(U),i=l(t),o=(0,r.useMemo)(()=>i?t(n):t,[i,n,t]),a=(0,r.useMemo)(()=>i?o:J(n,o),[i,n,o]),c=o&&o.provider,f=(0,r.useRef)(u);c&&!f.current&&(f.current=M(c(a.cache||F),o));let d=f.current;return d&&(a.cache=d[0],a.mutate=d[1]),k(()=>{if(d)return d[2]&&d[2](),d[3]},[]),(0,r.createElement)(U.Provider,s(e,{value:a}))},B=_&&window.__SWR_DEVTOOLS_USE__,Y=B?window.__SWR_DEVTOOLS_USE__:[],Z=e=>l(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}],z=()=>s($,(0,r.useContext)(U)),G=Y.concat(e=>(t,n,r)=>{let i=n&&((...e)=>{let[r]=D(t),[,,,i]=g.get(F);if(r.startsWith("$inf$"))return n(...e);let u=i[r];return a(u)?n(...e):(delete i[r],u)});return e(t,i,r)}),H=e=>function(...t){let n=z(),[r,i,u]=Z(t),o=J(n,u),a=e,{use:l}=o,s=(l||[]).concat(G);for(let e=s.length;e--;)a=s[e](a);return a(r,i||o.fetcher||null,o)},K=(e,t,n)=>{let r=t[e]||(t[e]=[]);return r.push(n),()=>{let e=r.indexOf(n);e>=0&&(r[e]=r[r.length-1],r.pop())}},Q=(e,t)=>(...n)=>{let[r,i,u]=Z(n),o=(u.use||[]).concat(t);return e(r,i,{...u,use:o})};B&&(window.__SWR_DEVTOOLS_REACT__=r)},30713:function(e,t,n){n.d(t,{ZP:function(){return l}});var r=n(2265),i=n(26272),u=n(44796);let o=r.use||(e=>{if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;if("rejected"===e.status)throw e.reason;throw e.status="pending",e.then(t=>{e.status="fulfilled",e.value=t},t=>{e.status="rejected",e.reason=t}),e}),a={dedupe:!0};u.$l.defineProperty(u.J$,"defaultValue",{value:u.u_});let l=(0,u.s6)((e,t,n)=>{let{cache:l,compare:s,suspense:c,fallbackData:f,revalidateOnMount:d,revalidateIfStale:E,refreshInterval:g,refreshWhenHidden:v,refreshWhenOffline:w,keepPreviousData:p}=n,[_,h,y,m]=u.DY.get(l),[b,R]=(0,u.qC)(e),T=(0,r.useRef)(!1),O=(0,r.useRef)(!1),S=(0,r.useRef)(b),V=(0,r.useRef)(t),L=(0,r.useRef)(n),k=()=>L.current,N=()=>k().isVisible()&&k().isOnline(),[C,D,A,j]=(0,u.JN)(l,b),I=(0,r.useRef)({}).current,x=(0,u.o8)(f)?n.fallback[b]:f,P=(e,t)=>{for(let n in I)if("data"===n){if(!s(e[n],t[n])&&(!(0,u.o8)(e[n])||!s(Y,t[n])))return!1}else if(t[n]!==e[n])return!1;return!0},M=(0,r.useMemo)(()=>{let e=!!b&&!!t&&((0,u.o8)(d)?!k().isPaused()&&!c&&(!!(0,u.o8)(E)||E):d),n=t=>{let n=(0,u.PM)(t);return(delete n._k,e)?{isValidating:!0,isLoading:!0,...n}:n},r=C(),i=j(),o=n(r),a=r===i?o:n(i),l=o;return[()=>{let e=n(C()),t=P(e,l);return t?(l.data=e.data,l.isLoading=e.isLoading,l.isValidating=e.isValidating,l.error=e.error,l):(l=e,e)},()=>a]},[l,b]),F=(0,i.useSyncExternalStore)((0,r.useCallback)(e=>A(b,(t,n)=>{P(n,t)||e()}),[l,b]),M[0],M[1]),W=!T.current,$=_[b]&&_[b].length>0,J=F.data,U=(0,u.o8)(J)?x:J,q=F.error,B=(0,r.useRef)(U),Y=p?(0,u.o8)(J)?B.current:J:U,Z=(!$||!!(0,u.o8)(q))&&(W&&!(0,u.o8)(d)?d:!k().isPaused()&&(c?!(0,u.o8)(U)&&E:(0,u.o8)(U)||E)),z=!!(b&&t&&W&&Z),G=(0,u.o8)(F.isValidating)?z:F.isValidating,H=(0,u.o8)(F.isLoading)?z:F.isLoading,K=(0,r.useCallback)(async e=>{let t,r;let i=V.current;if(!b||!i||O.current||k().isPaused())return!1;let o=!0,a=e||{},l=!y[b]||!a.dedupe,c=()=>u.w6?!O.current&&b===S.current&&T.current:b===S.current,f={isValidating:!1,isLoading:!1},d=()=>{D(f)},E=()=>{let e=y[b];e&&e[1]===r&&delete y[b]},g={isValidating:!0};(0,u.o8)(C().data)&&(g.isLoading=!0);try{if(l&&(D(g),n.loadingTimeout&&(0,u.o8)(C().data)&&setTimeout(()=>{o&&c()&&k().onLoadingSlow(b,n)},n.loadingTimeout),y[b]=[i(R),(0,u.u3)()]),[t,r]=y[b],t=await t,l&&setTimeout(E,n.dedupingInterval),!y[b]||y[b][1]!==r)return l&&c()&&k().onDiscarded(b),!1;f.error=u.i_;let e=h[b];if(!(0,u.o8)(e)&&(r<=e[0]||r<=e[1]||0===e[1]))return d(),l&&c()&&k().onDiscarded(b),!1;let a=C().data;f.data=s(a,t)?a:t,l&&c()&&k().onSuccess(t,b,n)}catch(n){E();let e=k(),{shouldRetryOnError:t}=e;!e.isPaused()&&(f.error=n,l&&c()&&(e.onError(n,b,e),(!0===t||(0,u.mf)(t)&&t(n))&&N()&&e.onErrorRetry(n,b,e,e=>{let t=_[b];t&&t[0]&&t[0](u.sj.ERROR_REVALIDATE_EVENT,e)},{retryCount:(a.retryCount||0)+1,dedupe:!0})))}return o=!1,d(),!0},[b,l]),Q=(0,r.useCallback)((...e)=>(0,u.BN)(l,S.current,...e),[]);if((0,u.LI)(()=>{V.current=t,L.current=n,(0,u.o8)(J)||(B.current=J)}),(0,u.LI)(()=>{if(!b)return;let e=K.bind(u.i_,a),t=0,n=(0,u.ko)(b,_,(n,r={})=>{if(n==u.sj.FOCUS_EVENT){let n=Date.now();k().revalidateOnFocus&&n>t&&N()&&(t=n+k().focusThrottleInterval,e())}else if(n==u.sj.RECONNECT_EVENT)k().revalidateOnReconnect&&N()&&e();else if(n==u.sj.MUTATE_EVENT)return K();else if(n==u.sj.ERROR_REVALIDATE_EVENT)return K(r)});return O.current=!1,S.current=b,T.current=!0,D({_k:R}),Z&&((0,u.o8)(U)||u.W6?e():(0,u.kw)(e)),()=>{O.current=!0,n()}},[b]),(0,u.LI)(()=>{let e;function t(){let t=(0,u.mf)(g)?g(C().data):g;t&&-1!==e&&(e=setTimeout(n,t))}function n(){!C().error&&(v||k().isVisible())&&(w||k().isOnline())?K(a).then(t):t()}return t(),()=>{e&&(clearTimeout(e),e=-1)}},[g,v,w,b]),(0,r.useDebugValue)(Y),c&&(0,u.o8)(U)&&b){if(!u.w6&&u.W6)throw Error("Fallback data is required when using suspense in SSR.");V.current=t,L.current=n,O.current=!1;let e=m[b];if(!(0,u.o8)(e)){let t=Q(e);o(t)}if((0,u.o8)(q)){let e=K(a);(0,u.o8)(Y)||(e.status="fulfilled",e.value=!0),o(e)}else throw q}return{mutate:Q,get data(){return I.data=!0,Y},get error(){return I.error=!0,q},get isValidating(){return I.isValidating=!0,G},get isLoading(){return I.isLoading=!0,H}}})}}]);