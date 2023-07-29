import{al as D,f as d,b as _,g as V,h as W,i as Q,j as H,k as U,w as M,d as G,e as w,o as x,y as K,z as X,a4 as q,x as b,n as T,X as J,a as Y,t as Z,c as ee,A as te,a5 as ne,T as se,am as oe,a7 as ae,an as C}from"./framework.0d967084.js";function Be(e,n){return e.install=t=>{t.component(n,e)},e}const re=(e,n)=>(e.install=t=>{e._context=t._context,t.config.globalProperties[n]=e},e);var E;const y=typeof window<"u",ie=e=>typeof e=="string",m=()=>{};y&&((E=window==null?void 0:window.navigator)!=null&&E.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function g(e){return typeof e=="function"?e():_(e)}function ue(e){return e}function h(e){return V()?(U(e),!0):!1}function le(e,n=!0){W()?Q(e):n?e():H(e)}function j(e,n,t={}){const{immediate:s=!0}=t,a=d(!1);let o=null;function r(){o&&(clearTimeout(o),o=null)}function u(){a.value=!1,r()}function i(...p){r(),a.value=!0,o=setTimeout(()=>{a.value=!1,o=null,e(...p)},g(n))}return s&&(a.value=!0,y&&i()),h(u),{isPending:a,start:i,stop:u}}function Re(e=!1,n={}){const{truthyValue:t=!0,falsyValue:s=!1}=n,a=D(e),o=d(e);function r(u){if(arguments.length)return o.value=u,o.value;{const i=g(t);return o.value=o.value===i?g(s):i,o.value}}return a?r:[o,r]}function F(e){var n;const t=g(e);return(n=t==null?void 0:t.$el)!=null?n:t}const L=y?window:void 0,ce=y?window.navigator:void 0;function fe(...e){let n,t,s,a;if(ie(e[0])?([t,s,a]=e,n=L):[n,t,s,a]=e,!n)return m;let o=m;const r=M(()=>F(n),i=>{o(),i&&(i.addEventListener(t,s,a),o=()=>{i.removeEventListener(t,s,a),o=m})},{immediate:!0,flush:"post"}),u=()=>{r(),o()};return h(u),u}function z(e,n=!1){const t=d(),s=()=>t.value=!!e();return s(),le(s,n),t}function ke(e={}){const{navigator:n=ce,read:t=!1,source:s,copiedDuring:a=1500}=e,o=["copy","cut"],r=z(()=>n&&"clipboard"in n),u=d(""),i=d(!1),p=j(()=>i.value=!1,a);function v(){n.clipboard.readText().then(l=>{u.value=l})}if(r.value&&t)for(const l of o)fe(l,v);async function c(l=g(s)){r.value&&l!=null&&(await n.clipboard.writeText(l),u.value=l,i.value=!0,p.start())}return{isSupported:r,text:u,copied:i,copy:c}}const P=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S="__vueuse_ssr_handlers__";P[S]=P[S]||{};var $=Object.getOwnPropertySymbols,de=Object.prototype.hasOwnProperty,pe=Object.prototype.propertyIsEnumerable,ve=(e,n)=>{var t={};for(var s in e)de.call(e,s)&&n.indexOf(s)<0&&(t[s]=e[s]);if(e!=null&&$)for(var s of $(e))n.indexOf(s)<0&&pe.call(e,s)&&(t[s]=e[s]);return t};function me(e,n,t={}){const s=t,{window:a=L}=s,o=ve(s,["window"]);let r;const u=z(()=>a&&"ResizeObserver"in a),i=()=>{r&&(r.disconnect(),r=void 0)},p=M(()=>F(e),c=>{i(),u.value&&a&&c&&(r=new ResizeObserver(n),r.observe(c,o))},{immediate:!0,flush:"post"}),v=()=>{i(),p()};return h(v),{isSupported:u,stop:v}}var B;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(B||(B={}));var ge=Object.defineProperty,R=Object.getOwnPropertySymbols,ye=Object.prototype.hasOwnProperty,Oe=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,we=(e,n)=>{for(var t in n||(n={}))ye.call(n,t)&&k(e,t,n[t]);if(R)for(var t of R(n))Oe.call(n,t)&&k(e,t,n[t]);return e};const be={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};we({linear:ue},be);const _e=["id"],he={class:"message-content"},Ie=G({__name:"index",props:{message:{},timeout:{default:2e3},id:{},offset:{default:20},closeBtn:{type:Boolean,default:!1},type:{default:"info"}},emits:["destroy"],setup(e,{expose:n}){const t=e,s=d(!1),a=d(0),o=d();let r=m;function u(){t.timeout!==0&&({stop:r}=j(()=>{s.value=!1,r=m},t.timeout))}Q(()=>{u(),s.value=!0}),me(o,()=>{a.value=o.value.getBoundingClientRect().height});const i=w(()=>Te(t.id)+t.offset),p=w(()=>a.value+i.value),v=w(()=>({info:"info-circle",success:"check-circle",warning:"exclamation-triangle",danger:"x-circle"})[t.type]);return n({bottom:p,lastOffset:i,visible:s}),(c,l)=>(x(),K(se,{name:"fn-message-fade",onAfterLeave:l[2]||(l[2]=O=>c.$emit("destroy"))},{default:X(()=>[q(b("div",{id:c.id,ref_key:"elRef",ref:o,class:T(["fn-message",[`is-${c.type}`]]),style:J({top:`${i.value}px`}),onMouseenter:l[1]||(l[1]=(...O)=>_(r)&&_(r)(...O)),onMouseleave:u},[b("div",he,[b("i",{class:T(`icon-${v.value}`),style:{"margin-right":"3px"}},null,2),Y(" "+Z(c.message),1)]),c.closeBtn?(x(),ee("div",{key:0,class:"close-btn",onClick:l[0]||(l[0]=O=>s.value=!1)}," × ")):te("",!0)],46,_e),[[ne,s.value]])]),_:1}))}}),f=oe([]);let N=1;function A(e){const n=document.createElement("div"),t=`lucky-message-${N}`,s=ae(Ie,{...e,id:t,onDestroy:()=>{xe(t),C(null,n)}},()=>e.message);C(s,n),document.body.appendChild(n.firstElementChild);const a={id:t,vnode:s,component:s.component,props:e,close:()=>{s.component.exposed.visible.value=!1}};return f.push(a),N++,a}function xe(e){const n=f.findIndex(t=>t.id===e);n!==-1&&(f[n].close(),f.splice(n,1))}const Te=e=>{const n=f.findIndex(s=>s.id===e),t=f[n-1];return t?t.component.exposed.bottom.value:0};function Ce(e){return function(n,t){return A({...t,type:e,message:n})}}function Ee(){for(const e of f)e.close();f.splice(0,f.length)}const Pe=["info","success","warning","danger"],I=A;for(const e of Pe)I[e]=Ce(e);I.closeAll=Ee;const Se=re(I,"$message"),Ne=Se;export{Ne as F,Re as a,ke as u,Be as w};
