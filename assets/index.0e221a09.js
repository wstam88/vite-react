var E=Object.defineProperty;var $=(e,n,r)=>n in e?E(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r;var C=(e,n,r)=>($(e,typeof n!="symbol"?n+"":n,r),r);import{$ as T,c as z,e as l,au as H}from"./index.db91889e.js";import{C as L}from"./index.477b3148.js";import"./index.e1e119ee.js";import{r as u,d as M,j as i,m as d}from"./react-venders.4ac041b7.js";import{P as q}from"./index.8c4d2199.js";import{c as b,a as g,b as F}from"./concent.39e54ce5.js";import"./index.32c172df.js";import"./index.e8c4f864.js";import"./index.4521ab2b.js";import"./RouteContext.c529cb87.js";import"./index.39a894f1.js";import"./button.4c5d92d4.js";import"./Sider.b903bbd0.js";import"./DownOutlined.046f0c55.js";var I=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(r[t[o]]=e[t[o]]);return r},R=function(n){return u.exports.createElement(T,null,function(r){var t,o=r.getPrefixCls,a=r.direction,s=n.prefixCls,f=n.type,O=f===void 0?"horizontal":f,v=n.orientation,m=v===void 0?"center":v,P=n.className,h=n.children,_=n.dashed,w=n.plain,D=I(n,["prefixCls","type","orientation","className","children","dashed","plain"]),c=o("divider",s),N=m.length>0?"-".concat(m):m,x=!!h,S=z(c,"".concat(c,"-").concat(O),(t={},l(t,"".concat(c,"-with-text"),x),l(t,"".concat(c,"-with-text").concat(N),x),l(t,"".concat(c,"-dashed"),!!_),l(t,"".concat(c,"-plain"),!!w),l(t,"".concat(c,"-rtl"),a==="rtl"),t),P);return u.exports.createElement("div",M({className:S},D,{role:"separator"}),h&&u.exports.createElement("span",{className:"".concat(c,"-inner-text")},h))})},j=R,W=Object.defineProperty,A=Object.getOwnPropertyDescriptor,B=(e,n,r,t)=>{for(var o=t>1?void 0:t?A(n,r):n,a=e.length-1,s;a>=0;a--)(s=e[a])&&(o=(t?s(n,r,o):s(o))||o);return t&&o&&W(n,r,o),o};let p=class extends u.exports.Component{constructor(){super(...arguments);C(this,"inc",()=>{const e=this.state.num+1;this.setState({num:e}),b("countChange",e)})}render(){const{num:e}=this.state;return d("div",{children:[d("h1",{children:["class component: ",e]}),i("button",{onClick:this.inc,children:"increase()"})]})}};p=B([H("counter")],p);function G(){const{state:e,setState:n}=g("counter"),r=()=>{const t=e.num+1;n({num:t}),b("countChange",t)};return d("div",{children:[d("h1",{children:["function component: ",e.num]}),i("button",{onClick:r,children:"increase()"})]})}function y(e){return`update by "countChange" event, count: ${e}`}function J(){const{state:e}=g("counter",{setup(n){F(n)("countChange",r=>{console.log("countChange",r);const t=document.querySelector("#countChange");t&&(t.innerHTML=y(r))})}});return i("div",{id:"countChange",children:y(e.num)})}function ae(){return i(q,{children:d(L,{children:[i(p,{}),i(j,{}),i(G,{}),i(j,{}),i(J,{})]})})}export{G as DemoFunction,J as EventListener,ae as default};
