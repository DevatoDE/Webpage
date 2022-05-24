import{a as Be,b as ce}from"/build/_shared/chunk-IOYE4MFH.js";import{c as T,e as te,g as S}from"/build/_shared/chunk-SBU4TMW6.js";S();var Mt=T(Be()),U=T(te());S();S();function B(){return B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},B.apply(this,arguments)}var s=T(te()),M=T(ce());S();var b=T(te());var de=class extends b.default.Component{constructor(t){super(t);this.state={error:t.error||null,location:t.location}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,r){return r.location!==t.location?{error:t.error||null,location:t.location}:{error:t.error||r.error,location:r.location}}render(){return this.state.error?b.default.createElement(this.props.component,{error:this.state.error}):this.props.children}};function Ge({error:e}){return console.error(e),b.default.createElement("html",{lang:"en"},b.default.createElement("head",null,b.default.createElement("meta",{charSet:"utf-8"}),b.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),b.default.createElement("title",null,"Application Error!")),b.default.createElement("body",null,b.default.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},b.default.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),b.default.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},e.stack)),b.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws errors than this. Check out https://remix.run/guides/errors for more information."
              );
            `}})))}var Ke=b.default.createContext(void 0);function ke(){return(0,b.useContext)(Ke)}function De({catch:e,component:t,children:r}){return e?b.default.createElement(Ke.Provider,{value:e},b.default.createElement(t,null)):b.default.createElement(b.default.Fragment,null,r)}function Xe(){let e=ke();return b.default.createElement("html",{lang:"en"},b.default.createElement("head",null,b.default.createElement("meta",{charSet:"utf-8"}),b.default.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),b.default.createElement("title",null,"Unhandled Thrown Response!")),b.default.createElement("body",null,b.default.createElement("h1",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},e.status," ",e.statusText),b.default.createElement("script",{dangerouslySetInnerHTML:{__html:`
              console.log(
                "\u{1F4BF} Hey developer\u{1F44B}. You can provide a way better UX when your app throws 404s (and other responses) than this. Check out https://remix.run/guides/not-found for more information."
              );
            `}})))}S();function k(e,t){if(e===!1||e===null||typeof e=="undefined")throw new Error(t)}S();var Ve=T(Be());S();async function fe(e,t){if(e.id in t)return t[e.id];try{let r=await import(e.module);return t[e.id]=r,r}catch{return window.location.reload(),new Promise(()=>{})}}function qe(e,t,r){let n=e.map(o=>{var l;let m=t[o.route.id];return((l=m.links)===null||l===void 0?void 0:l.call(m))||[]}).flat(1),a=Jt(e,r);return Wt(n,a)}async function ze(e){if(!e.links)return;let t=e.links();if(!t)return;let r=[];for(let a of t)!me(a)&&a.rel==="stylesheet"&&r.push({...a,rel:"preload",as:"style"});let n=r.filter(a=>!a.media||window.matchMedia(a.media).matches);await Promise.all(n.map(Ut))}async function Ut(e){return new Promise(t=>{let r=document.createElement("link");Object.assign(r,e);function n(){document.head.contains(r)&&document.head.removeChild(r)}r.onload=()=>{n(),t()},r.onerror=()=>{n(),t()},document.head.appendChild(r)})}function me(e){return e!=null&&typeof e.page=="string"}function Yt(e){return e!=null&&typeof e.rel=="string"&&typeof e.href=="string"}async function Qe(e,t){return(await Promise.all(e.map(async n=>{let a=await fe(n.route,t);return a.links?a.links():[]}))).flat(1).filter(Yt).filter(n=>n.rel==="stylesheet"||n.rel==="preload").map(({rel:n,...a})=>n==="preload"?{rel:"prefetch",...a}:{rel:"prefetch",as:"style",...a})}function Ie(e,t,r,n,a){let o=tt(e),l=(d,h)=>r[h]?d.route.id!==r[h].route.id:!0,m=(d,h)=>{var R;return r[h].pathname!==d.pathname||((R=r[h].route.path)===null||R===void 0?void 0:R.endsWith("*"))&&r[h].params["*"]!==d.params["*"]};return a==="data"&&n.search!==o.search?t.filter((d,h)=>d.route.hasLoader?l(d,h)||m(d,h)?!0:d.route.shouldReload?d.route.shouldReload({params:d.params,prevUrl:new URL(n.pathname+n.search+n.hash,window.origin),url:new URL(e,window.origin)}):!0:!1):t.filter((d,h)=>d.route.hasLoader&&(l(d,h)||m(d,h)))}function Ze(e,t,r){let n=tt(e);return Pe(t.filter(a=>r.routes[a.route.id].hasLoader).map(a=>{let{pathname:o,search:l}=n,m=new URLSearchParams(l);return m.set("_data",a.route.id),`${o}?${m}`}))}function et(e,t){return Pe(e.map(r=>{let n=t.routes[r.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function Jt(e,t){return Pe(e.map(r=>{let n=t.routes[r.route.id],a=[n.module];return n.imports&&(a=a.concat(n.imports)),a}).flat(1))}function Pe(e){return[...new Set(e)]}function Wt(e,t){let r=new Set,n=new Set(t);return e.reduce((a,o)=>{if(!me(o)&&o.as==="script"&&o.href&&n.has(o.href))return a;let m=JSON.stringify(o);return r.has(m)||(r.add(m),a.push(o)),a},[])}function tt(e){let t=(0,Ve.parsePath)(e);return t.search===void 0&&(t.search=""),t}S();function Te(e){return{__html:e}}S();var ft=T(te());S();function Fe(e){return e instanceof Response&&e.headers.get("X-Remix-Catch")!=null}function Gt(e){return e instanceof Response&&e.headers.get("X-Remix-Error")!=null}function rt(e){return e instanceof Response&&e.headers.get("X-Remix-Redirect")!=null}async function Ne(e,t,r,n){e.searchParams.set("_data",t);let a=n?Kt(n,r):{credentials:"same-origin",signal:r},o=await fetch(e.href,a);if(Gt(o)){let l=await o.json(),m=new Error(l.message);return m.stack=l.stack,m}return o}async function re(e){let t=e.headers.get("Content-Type");return t&&/\bapplication\/json\b/.test(t)?e.json():e.text()}function Kt(e,t){let{encType:r,method:n,formData:a}=e,o,l=a;if(r==="application/x-www-form-urlencoded"){l=new URLSearchParams;for(let[m,i]of a)k(typeof i=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),l.append(m,i);o={"Content-Type":r}}return{method:n,body:l,signal:t,credentials:"same-origin",headers:o}}S();var at=T(Be());S();var nt=T(ce());function K(e,t){let r=(0,nt.matchRoutes)(e,t);return r?r.map(n=>({params:n.params,pathname:n.pathname,route:n.route})):null}var ne=class{constructor(t,r,n){this.status=t,this.statusText=r,this.data=n}};function ot(e){return["POST","PUT","PATCH","DELETE"].includes(e.method)}function it(e){return e.method==="GET"}function he(e){return Boolean(e.state)&&e.state.isRedirect}function Xt(e){return he(e)&&e.state.type==="loader"}function Vt(e){return he(e)&&e.state.type==="action"}function qt(e){return he(e)&&e.state.type==="fetchAction"}function zt(e){return he(e)&&e.state.type==="loaderSubmission"}var pe=class{constructor(t){this.location=typeof t=="string"?t:t.pathname+t.search}},X={state:"idle",submission:void 0,location:void 0,type:"idle"},Qt={state:"idle",type:"init",data:void 0,submission:void 0};function lt(e){let{routes:t}=e,r,n=new Map,a=0,o=-1,l=new Map,m=K(t,e.location);m||(m=[{params:{},pathname:"",route:t[0]}]);let i={location:e.location,loaderData:e.loaderData||{},actionData:e.actionData,catch:e.catch,error:e.error,catchBoundaryId:e.catchBoundaryId||null,errorBoundaryId:e.errorBoundaryId||null,matches:m,nextMatches:void 0,transition:X,fetchers:new Map};function d(u){i=Object.assign({},i,u),e.onChange(i)}function h(){return i}function R(u){return i.fetchers.get(u)||Qt}function p(u){n.has(u)&&Ce(u),l.delete(u),i.fetchers.delete(u)}async function E(u){switch(u.type){case"navigation":{let{action:c,location:f,submission:w}=u,g=K(t,f);g?!w&&Ot(f)?await Tt(f,g):c===at.Action.Pop?await Ye(f,g):w&&ot(w)?await ue(f,w,g):w&&it(w)?await Pt(f,w,g):Vt(f)?await _t(f,g):zt(f)?await Nt(f,g):Xt(f)?await Ft(f,g):qt(f)?await At(f,g):await Ye(f,g):(g=[{params:{},pathname:"",route:t[0]}],await se(f,g)),o=-1;break}case"fetcher":{let{key:c,submission:f,href:w}=u,g=K(t,w);k(g,"No matches found");let L=g.slice(-1)[0];n.has(c)&&Ce(c),f&&ot(f)?await C(c,f,L):f&&it(f)?await Le(w,c,f,L):await xe(w,c,L);break}default:throw new Error(`Unknown data event type: ${u.type}`)}}function y(){N();for(let[,u]of n)u.abort()}async function C(u,c,f){let w=i.fetchers.get(u),g={state:"submitting",type:"actionSubmission",submission:c,data:(w==null?void 0:w.data)||void 0};i.fetchers.set(u,g),d({fetchers:new Map(i.fetchers)});let L=new AbortController;n.set(u,L);let v=await ut(c,f,L.signal);if(L.signal.aborted)return;if(ae(v)){let G={isRedirect:!0,type:"fetchAction"};e.onRedirect(v.value.location,G);return}if(F(f,u,v)||await Q(f,u,v))return;let D={state:"loading",type:"actionReload",data:v.value,submission:c};i.fetchers.set(u,D),d({fetchers:new Map(i.fetchers)});let I=we(v)?v:void 0,A=oe(v)?v:void 0,Z=++a;l.set(u,Z);let ee=i.nextMatches||i.matches,Me=V(i.transition.location||i.location),W=await st(i,z(Me),ee,L.signal,I,A,c,f.route.id,D);if(L.signal.aborted)return;l.delete(u),n.delete(u);let q=ct(W);if(q){let G={isRedirect:!0,type:"loader"};e.onRedirect(q.location,G);return}let[j,Je]=dt(W,i.matches,I),[Ht,$t]=await _e(W,i.matches,A),jt={state:"idle",type:"done",data:v.value,submission:void 0};i.fetchers.set(u,jt);let We=$(Z);if(We&&Y(We),H(Z)){let{transition:G}=i;k(G.state==="loading","Expected loading transition"),d({location:G.location,matches:i.nextMatches,error:j,errorBoundaryId:Je,catch:Ht,catchBoundaryId:$t,loaderData:Oe(i,W,ee),actionData:G.type==="actionReload"?i.actionData:void 0,transition:X,fetchers:new Map(i.fetchers)})}else d({fetchers:new Map(i.fetchers),error:j,errorBoundaryId:Je,loaderData:Oe(i,W,ee)})}function H(u){return i.transition.state==="loading"&&o<u?(N(),!0):!1}function Y(u){for(let c of u){let f=R(c),w={state:"idle",type:"done",data:f.data,submission:void 0};i.fetchers.set(c,w)}}function $(u){let c=[];for(let[f,w]of l)if(w<u){let g=i.fetchers.get(f);k(g,`Expected fetcher: ${f}`),g.state==="loading"&&(Ce(f),l.delete(f),c.push(f))}return c.length?c:!1}async function Le(u,c,f,w){let g=i.fetchers.get(c),L={state:"submitting",type:"loaderSubmission",submission:f,data:(g==null?void 0:g.data)||void 0};i.fetchers.set(c,L),d({fetchers:new Map(i.fetchers)});let v=new AbortController;n.set(c,v);let D=await Ae(w,z(u),v.signal);if(n.delete(c),v.signal.aborted)return;if(ae(D)){let A={isRedirect:!0,type:"loader"};e.onRedirect(D.value.location,A);return}if(F(w,c,D)||await Q(w,c,D))return;let I={state:"idle",type:"done",data:D.value,submission:void 0};i.fetchers.set(c,I),d({fetchers:new Map(i.fetchers)})}async function xe(u,c,f){let w=i.fetchers.get(c),g={state:"loading",type:"normalLoad",submission:void 0,data:(w==null?void 0:w.data)||void 0};i.fetchers.set(c,g),d({fetchers:new Map(i.fetchers)});let L=new AbortController;n.set(c,L);let v=await Ae(f,z(u),L.signal);if(L.signal.aborted)return;if(n.delete(c),ae(v)){let I={isRedirect:!0,type:"loader"};e.onRedirect(v.value.location,I);return}if(F(f,c,v)||await Q(f,c,v))return;let D={state:"idle",type:"done",data:v.value,submission:void 0};i.fetchers.set(c,D),d({fetchers:new Map(i.fetchers)})}async function Q(u,c,f){if(oe(f)){let w=Re(u,i.matches);return i.fetchers.delete(c),d({transition:X,fetchers:new Map(i.fetchers),catch:{data:f.value.data,status:f.value.status,statusText:f.value.statusText},catchBoundaryId:w}),!0}return!1}function F(u,c,f){if(we(f)){let w=ye(u,i.matches);return i.fetchers.delete(c),d({fetchers:new Map(i.fetchers),error:f.value,errorBoundaryId:w}),!0}return!1}async function se(u,c){N(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:u},nextMatches:c}),await Promise.resolve();let w=Re(c[0],c);d({location:u,matches:c,catch:{data:null,status:404,statusText:"Not Found"},catchBoundaryId:w,transition:X})}async function ue(u,c,f){N(),d({transition:{state:"submitting",type:"actionSubmission",submission:c,location:u},nextMatches:f});let g=new AbortController;r=g,!Zt(c.action)&&f[f.length-1].route.id.endsWith("/index")&&(f=f.slice(0,-1));let L=f.slice(-1)[0],v=await ut(c,L,g.signal);if(g.signal.aborted)return;if(ae(v)){let I={isRedirect:!0,type:"action"};e.onRedirect(v.value.location,I);return}if(oe(v)){let[I,A]=await _e([v],f,v);d({transition:X,catch:I,catchBoundaryId:A});return}d({transition:{state:"loading",type:"actionReload",submission:c,location:u},actionData:{[L.route.id]:v.value}}),await J(u,f,c,L.route.id,v)}async function Pt(u,c,f){N(),d({transition:{state:"submitting",type:"loaderSubmission",submission:c,location:u},nextMatches:f}),await J(u,f,c)}async function Tt(u,c){N(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:u},nextMatches:c}),await Promise.resolve(),d({location:u,matches:c,transition:X})}async function Ye(u,c){N(),d({transition:{state:"loading",type:"normalLoad",submission:void 0,location:u},nextMatches:c}),await J(u,c)}async function Ft(u,c){N(),d({transition:{state:"loading",type:"normalRedirect",submission:void 0,location:u},nextMatches:c}),await J(u,c)}async function Nt(u,c){N(),k(i.transition.type==="loaderSubmission",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:f}=i.transition;d({transition:{state:"loading",type:"loaderSubmissionRedirect",submission:f,location:u},nextMatches:c}),await J(u,c,f)}async function At(u,c){N(),d({transition:{state:"loading",type:"fetchActionRedirect",submission:void 0,location:u},nextMatches:c}),await J(u,c)}async function _t(u,c){N(),k(i.transition.type==="actionSubmission"||i.transition.type==="actionReload",`Unexpected transition: ${JSON.stringify(i.transition)}`);let{submission:f}=i.transition;d({transition:{state:"loading",type:"actionRedirect",submission:f,location:u},nextMatches:c}),await J(u,c,f)}function Ot(u){return V(i.location)===V(u)&&i.location.hash!==u.hash}async function J(u,c,f,w,g){let L=g&&we(g)?g:void 0,v=g&&oe(g)?g:void 0,D=new AbortController;r=D,o=++a;let I=await st(i,z(V(u)),c,D.signal,L,v,f,w);if(D.signal.aborted)return;let A=ct(I);if(A){if(i.transition.type==="actionReload"){let j={isRedirect:!0,type:"action"};e.onRedirect(A.location,j)}else if(i.transition.type==="loaderSubmission"){let j={isRedirect:!0,type:"loaderSubmission"};e.onRedirect(A.location,j)}else{let j={isRedirect:!0,type:"loader"};e.onRedirect(A.location,j)}return}let[Z,ee]=dt(I,c,L),[Me,W]=await _e(I,c,L),q=$(o);q&&Y(q),d({location:u,matches:c,error:Z,errorBoundaryId:ee,catch:Me,catchBoundaryId:W,loaderData:Oe(i,I,c),actionData:i.transition.type==="actionReload"?i.actionData:void 0,transition:X,fetchers:q?new Map(i.fetchers):i.fetchers})}function N(){var u;(u=r)===null||u===void 0||u.abort()}function Ce(u){let c=n.get(u);k(c,`Expected fetch controller: ${u}`),c.abort(),n.delete(u)}return{send:E,getState:h,getFetcher:R,deleteFetcher:p,dispose:y,get _internalFetchControllers(){return n}}}function Zt(e){let t=!1,r=new URLSearchParams(e.split("?",2)[1]||"");for(let n of r.getAll("index"))n||(t=!0);return t}async function st(e,t,r,n,a,o,l,m,i){let d=er(e,t,r,a,o,l,m,i);return Promise.all(d.map(h=>Ae(h,t,n)))}async function Ae(e,t,r){k(e.route.loader,`Expected loader for ${e.route.id}`);try{let{params:n}=e,a=await e.route.loader({params:n,url:t,signal:r});return{match:e,value:a}}catch(n){return{match:e,value:n}}}async function ut(e,t,r){if(!t.route.action)throw new Error(`Route "${t.route.id}" does not have an action, but you are trying to submit to it. To fix this, please add an \`action\` function to the route`);try{let n=await t.route.action({url:z(e.action),params:t.params,submission:e,signal:r});return{match:t,value:n}}catch(n){return{match:t,value:n}}}function er(e,t,r,n,a,o,l,m){if(l&&(a||n)){let p=!1;r=r.filter(E=>p?!1:E.route.id===l?(p=!0,!1):!0)}let i=(p,E)=>e.matches[E]?p.route.id!==e.matches[E].route.id:!0,d=(p,E)=>{var y;return e.matches[E].pathname!==p.pathname||((y=e.matches[E].route.path)===null||y===void 0?void 0:y.endsWith("*"))&&e.matches[E].params["*"]!==p.params["*"]},h=(p,E)=>{if(!p.route.loader)return!1;if(i(p,E)||d(p,E))return!0;if(p.route.shouldReload){let y=z(V(e.location));return p.route.shouldReload({prevUrl:y,url:t,submission:o,params:p.params})}return!0};return e.matches.length===1?r.filter(p=>!!p.route.loader):(m==null?void 0:m.type)==="actionReload"||e.transition.type==="actionReload"||e.transition.type==="actionRedirect"||V(t)===V(e.location)||t.searchParams.toString()!==e.location.search?r.filter(h):r.filter((p,E,y)=>(n||a)&&y.length-1===E?!1:p.route.loader&&(i(p,E)||d(p,E)))}function ae(e){return e.value instanceof pe}function V(e){return e.pathname+e.search}function ct(e){for(let t of e)if(ae(t))return t.value;return null}async function _e(e,t,r){let n;for(let o of e)if(oe(o)){n=o;break}let a=async o=>({status:o.status,statusText:o.statusText,data:o.data});if(r&&n){let o=Re(n.match,t);return[await a(r.value),o]}if(n){let o=Re(n.match,t);return[await a(n.value),o]}return[void 0,void 0]}function dt(e,t,r){let n;for(let a of e)if(we(a)){n=a;break}if(r&&n){let a=ye(n.match,t);return[r.value,a]}if(r){let a=ye(r.match,t);return[r.value,a]}if(n){let a=ye(n.match,t);return[n.value,a]}return[void 0,void 0]}function Re(e,t){let r=null;for(let n of t)if(n.route.CatchBoundary&&(r=n.route.id),n===e)break;return r}function ye(e,t){let r=null;for(let n of t)if(n.route.ErrorBoundary&&(r=n.route.id),n===e)break;return r}function Oe(e,t,r){let n={};for(let{match:o,value:l}of t)n[o.route.id]=l;let a={};for(let{route:o}of r){let l=n[o.id]!==void 0?n[o.id]:e.loaderData[o.id];l!==void 0&&(a[o.id]=l)}return a}function oe(e){return e.value instanceof ne}function we(e){return e.value instanceof Error}function z(e){return new URL(e,window.location.origin)}function tr(e,t,r){return{caseSensitive:!!e.caseSensitive,element:ft.createElement(r,{id:e.id}),id:e.id,path:e.path,index:e.index,module:e.module,loader:nr(e,t),action:ar(e),shouldReload:rr(e,t),ErrorBoundary:e.hasErrorBoundary,CatchBoundary:e.hasCatchBoundary,hasLoader:e.hasLoader}}function He(e,t,r,n){return Object.keys(e).filter(a=>e[a].parentId===n).map(a=>{let o=tr(e[a],t,r),l=He(e,t,r,o.id);return l.length>0&&(o.children=l),o})}function rr(e,t){return n=>{let a=t[e.id];return k(a,`Expected route module to be loaded for ${e.id}`),a.unstable_shouldReload?a.unstable_shouldReload(n):!0}}async function mt(e,t){let r=await fe(e,t);return await ze(r),r}function nr(e,t){return async({url:n,signal:a,submission:o})=>{if(e.hasLoader){let[l]=await Promise.all([Ne(n,e.id,a,o),mt(e,t)]);if(l instanceof Error)throw l;let m=await ht(l);if(m)return m;if(Fe(l))throw new ne(l.status,l.statusText,await re(l.clone()));return re(l)}else await mt(e,t)}}function ar(e){return e.hasAction?async({url:r,signal:n,submission:a})=>{let o=await Ne(r,e.id,n,a);if(o instanceof Error)throw o;let l=await ht(o);if(l)return l;if(Fe(o))throw new ne(o.status,o.statusText,await re(o.clone()));return re(o)}:void 0}async function ht(e){if(rt(e)){let t=new URL(e.headers.get("X-Remix-Redirect"),window.location.origin);if(t.origin!==window.location.origin)await new Promise(()=>{window.location.replace(t.href)});else return new pe(t.pathname+t.search)}return null}var pt=s.createContext(void 0);function _(){let e=s.useContext(pt);return k(e,"You must render this element inside a <Remix> element"),e}function Rt({context:e,action:t,location:r,navigator:n,static:a=!1}){let{manifest:o,routeData:l,actionData:m,routeModules:i,serverHandoffString:d,appState:h}=e,R=s.useMemo(()=>He(o.routes,i,lr),[o,i]),[p,E]=s.useState(h),[y]=s.useState(()=>lt({routes:R,actionData:m,loaderData:l,location:r,catch:h.catch,catchBoundaryId:h.catchBoundaryRouteId,onRedirect:n.replace,onChange:F=>{E({catch:F.catch,error:F.error,catchBoundaryRouteId:F.catchBoundaryId,loaderBoundaryRouteId:F.errorBoundaryId,renderBoundaryRouteId:null,trackBoundaries:!1,trackCatchBoundaries:!1})}})),C=s.useMemo(()=>({...n,push:(se,ue)=>y.getState().transition.state!=="idle"?n.replace(se,ue):n.push(se,ue)}),[n,y]),{location:H,matches:Y,loaderData:$,actionData:Le}=y.getState();s.useEffect(()=>{let{location:F}=y.getState();r!==F&&y.send({type:"navigation",location:r,submission:Rr(),action:t})},[y,r,t]);let xe=p.error&&p.renderBoundaryRouteId===null&&p.loaderBoundaryRouteId===null?yt(p.error):void 0,Q=p.catch&&p.catchBoundaryRouteId===null?p.catch:void 0;return s.createElement(pt.Provider,{value:{matches:Y,manifest:o,appState:p,routeModules:i,serverHandoffString:d,clientRoutes:R,routeData:$,actionData:Le,transitionManager:y}},s.createElement(de,{location:H,component:Ge,error:xe},s.createElement(De,{location:H,component:Xe,catch:Q},s.createElement(M.Router,{navigationType:t,location:H,navigator:C,static:a},s.createElement(or,null)))))}function yt(e){let t=new Error(e.message);return t.stack=e.stack,t}function or(){let{clientRoutes:e}=_();return(0,M.useRoutes)(e)||e[0].element}var wt=s.createContext(void 0);function $e(){let e=s.useContext(wt);return k(e,"You must render this element in a remix route element"),e}function ir({id:e}){throw new Error(`Route "${e}" has no component! Please go add a \`default\` export in the route module file.
If you were trying to navigate or submit to a resource route, use \`<a>\` instead of \`<Link>\` or \`<Form reloadDocument>\`.`)}function lr({id:e}){let t=(0,M.useLocation)(),{routeData:r,routeModules:n,appState:a}=_(),o=r[e],{default:l,CatchBoundary:m,ErrorBoundary:i}=n[e],d=l?s.createElement(l,null):s.createElement(ir,{id:e}),h={data:o,id:e};if(m){let R=a.catch&&a.catchBoundaryRouteId===e?a.catch:void 0;a.trackCatchBoundaries&&(a.catchBoundaryRouteId=e),h=R?{id:e,get data(){console.error("You cannot `useLoaderData` in a catch boundary.")}}:{id:e,data:o},d=s.createElement(De,{location:t,component:m,catch:R},d)}if(i){let R=a.error&&(a.renderBoundaryRouteId===e||a.loaderBoundaryRouteId===e)?yt(a.error):void 0;a.trackBoundaries&&(a.renderBoundaryRouteId=e),h=R?{id:e,get data(){console.error("You cannot `useLoaderData` in an error boundary.")}}:{id:e,data:o},d=s.createElement(de,{location:t,component:i,error:R},d)}return s.createElement(wt.Provider,{value:h},d)}function sr(e,t){let[r,n]=s.useState(!1),[a,o]=s.useState(!1),{onFocus:l,onBlur:m,onMouseEnter:i,onMouseLeave:d,onTouchStart:h}=t;s.useEffect(()=>{e==="render"&&o(!0)},[e]);let R=()=>{e==="intent"&&n(!0)},p=()=>{e==="intent"&&n(!1)};return s.useEffect(()=>{if(r){let E=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(E)}}},[r]),[a,{onFocus:ie(l,R),onBlur:ie(m,p),onMouseEnter:ie(i,R),onMouseLeave:ie(d,p),onTouchStart:ie(h,R)}]}var gt=s.forwardRef(({to:e,prefetch:t="none",...r},n)=>{let a=(0,M.useHref)(e),[o,l]=sr(t,r);return s.createElement(s.Fragment,null,s.createElement(M.Link,B({ref:n,to:e},l,r)),o?s.createElement(ge,{page:a}):null)});function ie(e,t){return r=>{e&&e(r),r.defaultPrevented||t(r)}}function Et(){let{matches:e,routeModules:t,manifest:r}=_(),n=s.useMemo(()=>qe(e,t,r),[e,t,r]);return s.createElement(s.Fragment,null,n.map(a=>me(a)?s.createElement(ge,B({key:a.page},a)):s.createElement("link",B({key:a.rel+a.href},a))))}function ge({page:e,...t}){let{clientRoutes:r}=_(),n=s.useMemo(()=>K(r,e),[r,e]);return n?s.createElement(cr,B({page:e,matches:n},t)):(console.warn(`Tried to prefetch ${e} but no routes matched.`),null)}function ur(e){let{routeModules:t}=_(),[r,n]=s.useState([]);return s.useEffect(()=>{let a=!1;return Qe(e,t).then(o=>{a||n(o)}),()=>{a=!0}},[e,t]),r}function cr({page:e,matches:t,...r}){let n=(0,M.useLocation)(),{matches:a,manifest:o}=_(),l=s.useMemo(()=>Ie(e,t,a,n,"data"),[e,t,a,n]),m=s.useMemo(()=>Ie(e,t,a,n,"assets"),[e,t,a,n]),i=s.useMemo(()=>Ze(e,l,o),[l,e,o]),d=s.useMemo(()=>et(m,o),[m,o]),h=ur(m);return s.createElement(s.Fragment,null,i.map(R=>s.createElement("link",B({key:R,rel:"prefetch",as:"fetch",href:R},r))),d.map(R=>s.createElement("link",B({key:R,rel:"modulepreload",href:R},r))),h.map(R=>s.createElement("link",B({key:R.href},R))))}function vt(){let{matches:e,routeData:t,routeModules:r}=_(),n=(0,M.useLocation)(),a={},o={};for(let l of e){let m=l.route.id,i=t[m],d=l.params,h=r[m];if(h.meta){let R=typeof h.meta=="function"?h.meta({data:i,parentsData:o,params:d,location:n}):h.meta;Object.assign(a,R)}o[m]=i}return s.createElement(s.Fragment,null,Object.entries(a).map(([l,m])=>{let i=l.startsWith("og:");return l==="title"?s.createElement("title",{key:"title"},m):Array.isArray(m)?m.map(d=>i?s.createElement("meta",{key:l+d,property:l,content:d}):s.createElement("meta",{key:l+d,name:l,content:d})):i?s.createElement("meta",{key:l,property:l,content:m}):s.createElement("meta",{key:l,name:l,content:m})}))}var St=!1;function bt(e){let{manifest:t,matches:r,pendingLocation:n,clientRoutes:a,serverHandoffString:o}=_();s.useEffect(()=>{St=!0},[]);let l=s.useMemo(()=>{let h=o?`window.__remixContext = ${o};`:"",R=`${r.map((p,E)=>`import * as route${E} from ${JSON.stringify(t.routes[p.route.id].module)};`).join(`
`)}
window.__remixRouteModules = {${r.map((p,E)=>`${JSON.stringify(p.route.id)}:route${E}`).join(",")}};`;return s.createElement(s.Fragment,null,s.createElement("script",B({},e,{suppressHydrationWarning:!0,dangerouslySetInnerHTML:Te(h)})),s.createElement("script",B({},e,{src:t.url})),s.createElement("script",B({},e,{dangerouslySetInnerHTML:Te(R),type:"module"})),s.createElement("script",B({},e,{src:t.entry.module,type:"module"})))},[]),m=s.useMemo(()=>{if(n){let h=K(a,n);return k(h,`No routes match path "${n.pathname}"`),h}return[]},[n,a]),i=r.concat(m).map(h=>{let R=t.routes[h.route.id];return(R.imports||[]).concat([R.module])}).flat(1),d=t.entry.imports.concat(i);return s.createElement(s.Fragment,null,dr(d).map(h=>s.createElement("link",{key:h,rel:"modulepreload",href:h,crossOrigin:e.crossOrigin})),St?null:l)}function dr(e){return[...new Set(e)]}var Lt=s.forwardRef((e,t)=>s.createElement(fr,B({},e,{ref:t}))),fr=s.forwardRef(({reloadDocument:e=!1,replace:t=!1,method:r="get",action:n=".",encType:a="application/x-www-form-urlencoded",fetchKey:o,onSubmit:l,...m},i)=>{let d=hr(o),h=r.toLowerCase()==="get"?"get":"post",R=Ee(n,h),p=s.useRef(),E=Er(i,p),y=s.useRef();return s.useEffect(()=>{let C=p.current;if(!C)return;function H(Y){if(!(Y.target instanceof HTMLElement))return;let $=Y.target.closest("button,input[type=submit]");$&&$.type==="submit"&&(y.current=$)}return C.addEventListener("click",H),()=>{C&&C.removeEventListener("click",H)}},[]),s.createElement("form",B({ref:E,method:h,action:R,encType:a,onSubmit:e?void 0:C=>{l&&l(C),!C.defaultPrevented&&(C.preventDefault(),d(y.current||C.currentTarget,{method:r,replace:t}),y.current=null)}},m))});function mr(e){return e=e.toLowerCase(),e==="post"||e==="put"||e==="patch"||e==="delete"}function Ee(e=".",t="get"){let{id:r}=$e(),n=(0,M.useResolvedPath)(e),a=n.search,o=r.endsWith("/index");return e==="."&&o&&mr(t)&&(a=a?a.replace(/^\?/,"?index&"):"?index"),n.pathname+a}function hr(e){let t=(0,M.useNavigate)(),r=Ee(),{transitionManager:n}=_();return s.useCallback((a,o={})=>{let l,m,i,d;if(wr(a)){let y=o.submissionTrigger;l=o.method||a.method,m=o.action||a.action,i=o.encType||a.enctype,d=new FormData(a),y&&y.name&&d.append(y.name,y.value)}else if(yr(a)||gr(a)&&(a.type==="submit"||a.type==="image")){let y=a.form;if(y==null)throw new Error("Cannot submit a <button> without a <form>");l=o.method||a.getAttribute("formmethod")||y.method,m=o.action||a.getAttribute("formaction")||y.action,i=o.encType||a.getAttribute("formenctype")||y.enctype,d=new FormData(y),a.name&&d.set(a.name,a.value)}else{if(ve(a))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');if(l=o.method||"get",m=o.action||r,i=o.encType||"application/x-www-form-urlencoded",a instanceof FormData)d=a;else if(d=new FormData,a instanceof URLSearchParams)for(let[y,C]of a)d.append(y,C);else if(a!=null)for(let y of Object.keys(a))d.append(y,a[y])}let{protocol:h,host:R}=window.location,p=new URL(m,`${h}//${R}`);if(l.toLowerCase()==="get")for(let[y,C]of d)if(typeof C=="string")p.searchParams.append(y,C);else throw new Error("Cannot submit binary form data using GET");let E={formData:d,action:p.pathname+p.search,method:l.toUpperCase(),encType:i,key:Math.random().toString(36).substr(2,8)};e?n.send({type:"fetcher",href:E.action,submission:E,key:e}):(pr(E),t(p.pathname+p.search,{replace:o.replace}))},[r,e,t,n])}var je;function pr(e){je=e}function Rr(){let e=je;return je=void 0,e}function ve(e){return e!=null&&typeof e.tagName=="string"}function yr(e){return ve(e)&&e.tagName.toLowerCase()==="button"}function wr(e){return ve(e)&&e.tagName.toLowerCase()==="form"}function gr(e){return ve(e)&&e.tagName.toLowerCase()==="input"}function le(e){s.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[e])}function xt(){return $e().data}function Ct(){let{id:e}=$e(),{transitionManager:t}=_(),{actionData:r}=t.getState();return r?r[e]:void 0}function Se(){let{transitionManager:e}=_();return e.getState().transition}function Er(...e){return s.useCallback(t=>{for(let r of e)if(r!=null)if(typeof r=="function")r(t);else try{r.current=t}catch{}},e)}function Bt(e){let t=U.useRef();t.current==null&&(t.current=(0,Mt.createBrowserHistory)({window}));let r=t.current,[n,a]=U.useReducer((l,m)=>m,{action:r.action,location:r.location});U.useLayoutEffect(()=>r.listen(a),[r]);let o=window.__remixContext;return o.manifest=window.__remixManifest,o.routeModules=window.__remixRouteModules,o.appState.trackBoundaries=!1,o.appState.trackCatchBoundaries=!1,U.createElement(Rt,{context:o,action:n.action,location:n.location,navigator:r})}S();var x=T(ce());S();var P=T(te()),kt=T(ce());var Ue="positions",be={};if(typeof document!="undefined"){let e=sessionStorage.getItem(Ue);e&&(be=JSON.parse(e))}function Dt(){return vr(),P.useEffect(()=>{window.history.scrollRestoration="manual"},[]),le(P.useCallback(()=>{window.history.scrollRestoration="auto"},[])),P.createElement("script",{dangerouslySetInnerHTML:{__html:`
          let STORAGE_KEY = ${JSON.stringify(Ue)};
          if (!window.history.state || !window.history.state.key) {
            window.history.replaceState({ key: Math.random().toString(32).slice(2) }, null);
          }
          try {
            let positions = JSON.parse(sessionStorage.getItem(STORAGE_KEY) ?? '{}')
            let storedY = positions[window.history.state.key];
            if (typeof storedY === 'number') {
              window.scrollTo(0, storedY)
            }
          } catch(error) {
            console.error(error)
            sessionStorage.removeItem(STORAGE_KEY)
          }
        `}})}var It=!1;function vr(){let e=(0,kt.useLocation)(),t=Se(),r=P.useRef(!1);P.useEffect(()=>{t.submission&&(r.current=!0)},[t]),P.useEffect(()=>{t.location&&(be[e.key]=window.scrollY)},[t,e]),le(P.useCallback(()=>{sessionStorage.setItem(Ue,JSON.stringify(be))},[])),typeof document!="undefined"&&P.useLayoutEffect(()=>{if(!It){It=!0;return}let n=be[e.key];if(n){window.scrollTo(0,n);return}if(e.hash){let a=document.querySelector(e.hash);if(a){a.scrollIntoView();return}}if(r.current===!0){r.current=!1;return}window.scrollTo(0,0)},[e]),P.useEffect(()=>{t.submission&&(r.current=!0)},[t])}S();export{ke as a,gt as b,Et as c,vt as d,bt as e,Lt as f,xt as g,Ct as h,Se as i,Bt as j,Dt as k,x as l};
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
