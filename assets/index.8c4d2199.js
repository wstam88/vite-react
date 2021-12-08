var Ue=Object.defineProperty,We=Object.defineProperties;var Ke=Object.getOwnPropertyDescriptors;var se=Object.getOwnPropertySymbols;var Ge=Object.prototype.hasOwnProperty,Ve=Object.prototype.propertyIsEnumerable;var le=(n,e,r)=>e in n?Ue(n,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[e]=r,_=(n,e)=>{for(var r in e||(e={}))Ge.call(e,r)&&le(n,r,e[r]);if(se)for(var r of se(e))Ve.call(e,r)&&le(n,r,e[r]);return n},B=(n,e)=>We(n,Ke(e));import{A as ce,_ as C,C as W,c as k,N as q,b as de,w as ue,a as fe,h as ve,Q as Xe,T as Ye,U as qe,V as Qe,e as A,o as Je,d as K,O as Ze,r as et,x as tt,$ as rt,a0 as at,am as nt}from"./index.db91889e.js";import{r as i,d as S,j as y,m as H,F as Q,e as ot}from"./react-venders.4ac041b7.js";import{K as me,b as it,R as J}from"./index.32c172df.js";import"./index.4521ab2b.js";import{R as G,M as he}from"./RouteContext.c529cb87.js";import{o as st,D as lt,A as ct}from"./index.39a894f1.js";import"./button.4c5d92d4.js";import{D as dt}from"./DownOutlined.046f0c55.js";import{T as pe}from"./index.e1e119ee.js";var ut={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"},ft=ut,ge=function(e,r){return i.exports.createElement(ce,C(C({},e),{},{ref:r,icon:ft}))};ge.displayName="ArrowLeftOutlined";var vt=i.exports.forwardRef(ge),mt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z"}}]},name:"arrow-right",theme:"outlined"},ht=mt,xe=function(e,r){return i.exports.createElement(ce,C(C({},e),{},{ref:r,icon:ht}))};xe.displayName="ArrowRightOutlined";var pt=i.exports.forwardRef(xe),gt=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},xt={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},bt=i.exports.forwardRef(function(n,e){var r=function(f){var u=f.keyCode;u===me.ENTER&&f.preventDefault()},t=function(f){var u=f.keyCode,l=n.onClick;u===me.ENTER&&l&&l()},a=n.style,o=n.noStyle,c=n.disabled,s=gt(n,["style","noStyle","disabled"]),d={};return o||(d=S({},xt)),c&&(d.pointerEvents="none"),d=S(S({},d),a),i.exports.createElement("div",S({role:"button",tabIndex:0,ref:e},s,{onKeyDown:r,onKeyUp:t,style:d}))}),yt=bt;var Ct=function(e){var r=i.exports.useContext(G),t=e.children,a=e.contentWidth,o=e.className,c=e.style,s=i.exports.useContext(W.ConfigContext),d=s.getPrefixCls,v=e.prefixCls||d("pro"),f=a||r.contentWidth,u="".concat(v,"-grid-content");return y("div",{className:k(u,o,{wide:f==="Fixed"}),style:c,children:y("div",{className:"".concat(v,"-grid-content-children"),children:t})})},Pt=Ct;var Nt=["children","className","extra","style","renderContent"],wt=function(e){var r=e.children,t=e.className,a=e.extra,o=e.style,c=e.renderContent,s=q(e,Nt),d=i.exports.useContext(W.ConfigContext),v=d.getPrefixCls,f=e.prefixCls||v("pro"),u="".concat(f,"-footer-bar"),l=i.exports.useContext(G),m=i.exports.useMemo(function(){var g=l.hasSiderMenu,x=l.isMobile,b=l.siderWidth;if(!!g)return b?x?"100%":"calc(100% - ".concat(b,"px)"):"100%"},[l.collapsed,l.hasSiderMenu,l.isMobile,l.siderWidth]),h=H(Q,{children:[y("div",{className:"".concat(u,"-left"),children:a}),y("div",{className:"".concat(u,"-right"),children:r})]});return i.exports.useEffect(function(){return!l||!(l==null?void 0:l.setHasFooterToolbar)?function(){}:(l==null||l.setHasFooterToolbar(!0),function(){var g;l==null||(g=l.setHasFooterToolbar)===null||g===void 0||g.call(l,!1)})},[]),y("div",B(_({className:k(t,"".concat(u)),style:C({width:m},o)},st(s,["prefixCls"])),{children:c?c(C(C(C({},e),l),{},{leftWidth:m}),h):h}))},Rt=wt,Tt=function(e){if(!e)return 1;var r=e.backingStorePixelRatio||e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1;return(window.devicePixelRatio||1)/r},Et=function(e){var r=e.children,t=e.style,a=e.className,o=e.markStyle,c=e.markClassName,s=e.zIndex,d=s===void 0?9:s,v=e.gapX,f=v===void 0?212:v,u=e.gapY,l=u===void 0?222:u,m=e.width,h=m===void 0?120:m,g=e.height,x=g===void 0?64:g,b=e.rotate,P=b===void 0?-22:b,T=e.image,N=e.content,p=e.offsetLeft,w=e.offsetTop,R=e.fontStyle,E=R===void 0?"normal":R,I=e.fontWeight,j=I===void 0?"normal":I,U=e.fontColor,Y=U===void 0?"rgba(0,0,0,.15)":U,F=e.fontSize,ee=F===void 0?16:F,te=e.fontFamily,re=te===void 0?"sans-serif":te,Oe=e.prefixCls,Be=i.exports.useContext(W.ConfigContext),ke=Be.getPrefixCls,ae=ke("pro-layout-watermark",Oe),$e=k("".concat(ae,"-wrapper"),a),Ae=k(ae,c),Fe=i.exports.useState(""),ne=de(Fe,2),He=ne[0],oe=ne[1];return i.exports.useEffect(function(){var D=document.createElement("canvas"),O=D.getContext("2d"),$=Tt(O),Me="".concat((f+h)*$,"px"),je="".concat((l+x)*$,"px"),De=p||f/2,Le=w||l/2;if(D.setAttribute("width",Me),D.setAttribute("height",je),O){O.translate(De*$,Le*$),O.rotate(Math.PI/180*Number(P));var ze=h*$,ie=x*$;if(T){var L=new Image;L.crossOrigin="anonymous",L.referrerPolicy="no-referrer",L.src=T,L.onload=function(){O.drawImage(L,0,0,ze,ie),oe(D.toDataURL())}}else if(N){var Ie=Number(ee)*$;O.font="".concat(E," normal ").concat(j," ").concat(Ie,"px/").concat(ie,"px ").concat(re),O.fillStyle=Y,O.fillText(N,0,0),oe(D.toDataURL())}}else console.error("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301Canvas")},[f,l,p,w,P,E,j,h,x,re,Y,T,N,ee]),H("div",{style:C({position:"relative"},t),className:$e,children:[r,y("div",{className:Ae,style:C({zIndex:d,position:"absolute",left:0,top:0,width:"100%",height:"100%",backgroundSize:"".concat(f+h,"px"),pointerEvents:"none",backgroundRepeat:"repeat",backgroundImage:"url('".concat(He,"')")},o)})]})},_t=Et;function St(n){var e,r=function(o){return function(){e=null,n.apply(void 0,fe(o))}},t=function(){if(e==null){for(var o=arguments.length,c=new Array(o),s=0;s<o;s++)c[s]=arguments[s];e=ue(r(c))}};return t.cancel=function(){return ue.cancel(e)},t}function be(){return function(e,r,t){var a=t.value,o=!1;return{configurable:!0,get:function(){if(o||this===e.prototype||this.hasOwnProperty(r))return a;var s=St(a.bind(this));return o=!0,Object.defineProperty(this,r,{value:s,configurable:!0,writable:!0}),o=!1,s}}}}function V(n){return n!==window?n.getBoundingClientRect():{top:0,bottom:window.innerHeight}}function ye(n,e,r){if(r!==void 0&&e.top>n.top-r)return r+e.top}function Ce(n,e,r){if(r!==void 0&&e.bottom<n.bottom+r){var t=window.innerHeight-e.bottom;return r+t}}var Pe=["resize","scroll","touchstart","touchmove","touchend","pageshow","load"],z=[];function Ne(n,e){if(!!n){var r=z.find(function(t){return t.target===n});r?r.affixList.push(e):(r={target:n,affixList:[e],eventHandlers:{}},z.push(r),Pe.forEach(function(t){r.eventHandlers[t]=it(n,t,function(){r.affixList.forEach(function(a){a.lazyUpdatePosition()})})}))}}function we(n){var e=z.find(function(r){var t=r.affixList.some(function(a){return a===n});return t&&(r.affixList=r.affixList.filter(function(a){return a!==n})),t});e&&e.affixList.length===0&&(z=z.filter(function(r){return r!==e}),Pe.forEach(function(r){var t=e.eventHandlers[r];t&&t.remove&&t.remove()}))}var Re=globalThis&&globalThis.__decorate||function(n,e,r,t){var a=arguments.length,o=a<3?e:t===null?t=Object.getOwnPropertyDescriptor(e,r):t,c;if((typeof Reflect=="undefined"?"undefined":ve(Reflect))==="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,r,t);else for(var s=n.length-1;s>=0;s--)(c=n[s])&&(o=(a<3?c(o):a>3?c(e,r,o):c(e,r))||o);return a>3&&o&&Object.defineProperty(e,r,o),o};function Ot(){return typeof window!="undefined"?window:null}var M;(function(n){n[n.None=0]="None",n[n.Prepare=1]="Prepare"})(M||(M={}));var X=function(n){Xe(r,n);var e=Ye(r);function r(){var t;return qe(this,r),t=e.apply(this,arguments),t.state={status:M.None,lastAffix:!1,prevTarget:null},t.getOffsetTop=function(){var a=t.props,o=a.offsetBottom,c=a.offsetTop;return o===void 0&&c===void 0?0:c},t.getOffsetBottom=function(){return t.props.offsetBottom},t.savePlaceholderNode=function(a){t.placeholderNode=a},t.saveFixedNode=function(a){t.fixedNode=a},t.measure=function(){var a=t.state,o=a.status,c=a.lastAffix,s=t.props.onChange,d=t.getTargetFunc();if(!(o!==M.Prepare||!t.fixedNode||!t.placeholderNode||!d)){var v=t.getOffsetTop(),f=t.getOffsetBottom(),u=d();if(!!u){var l={status:M.None},m=V(u),h=V(t.placeholderNode),g=ye(h,m,v),x=Ce(h,m,f);g!==void 0?(l.affixStyle={position:"fixed",top:g,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}):x!==void 0&&(l.affixStyle={position:"fixed",bottom:x,width:h.width,height:h.height},l.placeholderStyle={width:h.width,height:h.height}),l.lastAffix=!!l.affixStyle,s&&c!==l.lastAffix&&s(l.lastAffix),t.setState(l)}}},t.prepareMeasure=function(){t.setState({status:M.Prepare,affixStyle:void 0,placeholderStyle:void 0})},t}return Qe(r,[{key:"getTargetFunc",value:function(){var a=this.context.getTargetContainer,o=this.props.target;return o!==void 0?o:a||Ot}},{key:"componentDidMount",value:function(){var a=this,o=this.getTargetFunc();o&&(this.timeout=setTimeout(function(){Ne(o(),a),a.updatePosition()}))}},{key:"componentDidUpdate",value:function(a){var o=this.state.prevTarget,c=this.getTargetFunc(),s=(c==null?void 0:c())||null;o!==s&&(we(this),s&&(Ne(s,this),this.updatePosition()),this.setState({prevTarget:s})),(a.offsetTop!==this.props.offsetTop||a.offsetBottom!==this.props.offsetBottom)&&this.updatePosition(),this.measure()}},{key:"componentWillUnmount",value:function(){clearTimeout(this.timeout),we(this),this.updatePosition.cancel(),this.lazyUpdatePosition.cancel()}},{key:"updatePosition",value:function(){this.prepareMeasure()}},{key:"lazyUpdatePosition",value:function(){var a=this.getTargetFunc(),o=this.state.affixStyle;if(a&&o){var c=this.getOffsetTop(),s=this.getOffsetBottom(),d=a();if(d&&this.placeholderNode){var v=V(d),f=V(this.placeholderNode),u=ye(f,v,c),l=Ce(f,v,s);if(u!==void 0&&o.top===u||l!==void 0&&o.bottom===l)return}}this.prepareMeasure()}},{key:"render",value:function(){var a=this,o=this.context.getPrefixCls,c=this.state,s=c.affixStyle,d=c.placeholderStyle,v=this.props,f=v.prefixCls,u=v.children,l=k(A({},o("affix",f),!!s)),m=Je(this.props,["prefixCls","offsetTop","offsetBottom","target","onChange"]);return i.exports.createElement(J,{onResize:function(){a.updatePosition()}},i.exports.createElement("div",S({},m,{ref:this.savePlaceholderNode}),s&&i.exports.createElement("div",{style:d,"aria-hidden":"true"}),i.exports.createElement("div",{className:l,ref:this.saveFixedNode,style:s},i.exports.createElement(J,{onResize:function(){a.updatePosition()}},u))))}}]),r}(i.exports.Component);X.contextType=K;Re([be()],X.prototype,"updatePosition",null);Re([be()],X.prototype,"lazyUpdatePosition",null);var Bt=X;var kt=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r},Te=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.children,c=e.overlay,s=e.dropdownProps,d=kt(e,["prefixCls","separator","children","overlay","dropdownProps"]),v=i.exports.useContext(K),f=v.getPrefixCls,u=f("breadcrumb",r),l=function(g){return c?i.exports.createElement(lt,S({overlay:c,placement:"bottomCenter"},s),i.exports.createElement("span",{className:"".concat(u,"-overlay-link")},g,i.exports.createElement(dt,null))):g},m;return"href"in d?m=i.exports.createElement("a",S({className:"".concat(u,"-link")},d),o):m=i.exports.createElement("span",S({className:"".concat(u,"-link")},d),o),m=l(m),o?i.exports.createElement("span",null,m,a&&i.exports.createElement("span",{className:"".concat(u,"-separator")},a)):null};Te.__ANT_BREADCRUMB_ITEM=!0;var Ee=Te,_e=function(e){var r=e.children,t=i.exports.useContext(K),a=t.getPrefixCls,o=a("breadcrumb");return i.exports.createElement("span",{className:"".concat(o,"-separator")},r||"/")};_e.__ANT_BREADCRUMB_SEPARATOR=!0;var $t=_e,At=globalThis&&globalThis.__rest||function(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(n);a<t.length;a++)e.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(n,t[a])&&(r[t[a]]=n[t[a]]);return r};function Ft(n,e){if(!n.breadcrumbName)return null;var r=Object.keys(e).join("|"),t=n.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(a,o){return e[o]||a});return t}function Ht(n,e,r,t){var a=r.indexOf(n)===r.length-1,o=Ft(n,e);return a?i.exports.createElement("span",null,o):i.exports.createElement("a",{href:"#/".concat(t.join("/"))},o)}var Se=function(e,r){return e=(e||"").replace(/^\//,""),Object.keys(r).forEach(function(t){e=e.replace(":".concat(t),r[t])}),e},Mt=function(e,r,t){var a=fe(e),o=Se(r||"",t);return o&&a.push(o),a},Z=function(e){var r=e.prefixCls,t=e.separator,a=t===void 0?"/":t,o=e.style,c=e.className,s=e.routes,d=e.children,v=e.itemRender,f=v===void 0?Ht:v,u=e.params,l=u===void 0?{}:u,m=At(e,["prefixCls","separator","style","className","routes","children","itemRender","params"]),h=i.exports.useContext(K),g=h.getPrefixCls,x=h.direction,b,P=g("breadcrumb",r);if(s&&s.length>0){var T=[];b=s.map(function(p){var w=Se(p.path,l);w&&T.push(w);var R;return p.children&&p.children.length&&(R=i.exports.createElement(he,null,p.children.map(function(E){return i.exports.createElement(he.Item,{key:E.path||E.breadcrumbName},f(E,l,s,Mt(T,E.path,l)))}))),i.exports.createElement(Ee,{overlay:R,separator:a,key:w||p.breadcrumbName},f(p,l,s,T))})}else d&&(b=Ze(d).map(function(p,w){return p&&(et(p.type&&(p.type.__ANT_BREADCRUMB_ITEM===!0||p.type.__ANT_BREADCRUMB_SEPARATOR===!0),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),tt(p,{separator:a,key:w}))}));var N=k(P,A({},"".concat(P,"-rtl"),x==="rtl"),c);return i.exports.createElement("div",S({className:N,style:o},m),b)};Z.Item=Ee;Z.Separator=$t;var jt=Z,Dt=function(e,r,t){return!r||!t?null:i.exports.createElement(at,{componentName:"PageHeader"},function(a){var o=a.back;return i.exports.createElement("div",{className:"".concat(e,"-back")},i.exports.createElement(yt,{onClick:function(s){t==null||t(s)},className:"".concat(e,"-back-button"),"aria-label":o},r))})},Lt=function(e){return i.exports.createElement(jt,e)},zt=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"ltr";return e.backIcon!==void 0?e.backIcon:r==="rtl"?i.exports.createElement(pt,null):i.exports.createElement(vt,null)},It=function(e,r){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"ltr",a=r.title,o=r.avatar,c=r.subTitle,s=r.tags,d=r.extra,v=r.onBack,f="".concat(e,"-heading"),u=a||c||s||d;if(!u)return null;var l=zt(r,t),m=Dt(e,l,v),h=m||o||u;return i.exports.createElement("div",{className:f},h&&i.exports.createElement("div",{className:"".concat(f,"-left")},m,o&&i.exports.createElement(ct,o),a&&i.exports.createElement("span",{className:"".concat(f,"-title"),title:typeof a=="string"?a:void 0},a),c&&i.exports.createElement("span",{className:"".concat(f,"-sub-title"),title:typeof c=="string"?c:void 0},c),s&&i.exports.createElement("span",{className:"".concat(f,"-tags")},s)),d&&i.exports.createElement("span",{className:"".concat(f,"-extra")},d))},Ut=function(e,r){return r?i.exports.createElement("div",{className:"".concat(e,"-footer")},r):null},Wt=function(e,r){return i.exports.createElement("div",{className:"".concat(e,"-content")},r)},Kt=function(e){var r=i.exports.useState(!1),t=de(r,2),a=t[0],o=t[1],c=function(d){var v=d.width;o(v<768)};return i.exports.createElement(rt,null,function(s){var d,v=s.getPrefixCls,f=s.pageHeader,u=s.direction,l,m=e.prefixCls,h=e.style,g=e.footer,x=e.children,b=e.breadcrumb,P=e.breadcrumbRender,T=e.className,N=!0;"ghost"in e?N=e.ghost:f&&"ghost"in f&&(N=f.ghost);var p=v("page-header",m),w=function(){var F;return((F=b)===null||F===void 0?void 0:F.routes)?Lt(b):null},R=w(),E=b&&"props"in b,I=(l=P==null?void 0:P(e,R))!==null&&l!==void 0?l:R,j=E?b:I,U=k(p,T,(d={"has-breadcrumb":!!j,"has-footer":!!g},A(d,"".concat(p,"-ghost"),N),A(d,"".concat(p,"-rtl"),u==="rtl"),A(d,"".concat(p,"-compact"),a),d));return i.exports.createElement(J,{onResize:c},i.exports.createElement("div",{className:U,style:h},j,It(p,e,u),x&&Wt(p,x),Ut(p,g)))})},Gt=Kt;var Vt=["title","content","pageHeaderRender","header","prefixedClassName","extraContent","style","prefixCls","breadcrumbRender"],Xt=["children","loading","className","style","footer","affixProps","ghost","fixedHeader"];function Yt(n){return ve(n)==="object"?n:{spinning:n}}var qt=function(e){var r=e.tabList,t=e.tabActiveKey,a=e.onTabChange,o=e.tabBarExtraContent,c=e.tabProps,s=e.prefixedClassName;return r&&r.length||o?y(pe,B(_({className:"".concat(s,"-tabs"),activeKey:t,onChange:function(v){a&&a(v)},tabBarExtraContent:o},c),{children:r==null?void 0:r.map(function(d,v){return i.exports.createElement(pe.TabPane,B(_({},d),{tab:d.tab,key:d.key||v}))})})):null},Qt=function(e,r,t){return!e&&!r?null:y("div",{className:"".concat(t,"-detail"),children:y("div",{className:"".concat(t,"-main"),children:H("div",{className:"".concat(t,"-row"),children:[e&&y("div",{className:"".concat(t,"-content"),children:e}),r&&y("div",{className:"".concat(t,"-extraContent"),children:r})]})})})},Jt=function(e){var r,t=i.exports.useContext(G),a=e.title,o=e.content,c=e.pageHeaderRender,s=e.header,d=e.prefixedClassName,v=e.extraContent;e.style;var f=e.prefixCls,u=e.breadcrumbRender,l=q(e,Vt),m=i.exports.useMemo(function(){if(!!u)return u},[u]);if(c===!1)return null;if(c)return H(Q,{children:[" ",c(C(C({},e),t))]});var h=a;!a&&a!==!1&&(h=t.title);var g=C(C(C({},t),{},{title:h},l),{},{footer:qt(C(C({},l),{},{breadcrumbRender:u,prefixedClassName:d}))},s),x=g.breadcrumb,b=(!x||!(x==null?void 0:x.itemRender)&&!(x==null||(r=x.routes)===null||r===void 0?void 0:r.length))&&!u;return["title","subTitle","extra","tags","footer","avatar","backIcon"].every(function(P){return!g[P]})&&b&&!o&&!v?null:y("div",{className:"".concat(d,"-warp"),children:y(Gt,B(_({},g),{breadcrumb:u===!1?void 0:C(C({},g.breadcrumb),t.breadcrumbProps),breadcrumbRender:m,prefixCls:f,children:(s==null?void 0:s.children)||Qt(o,v,d)}))})},Zt=function(e){var r,t=e.children,a=e.loading,o=a===void 0?!1:a,c=e.className,s=e.style,d=e.footer,v=e.affixProps,f=e.ghost,u=e.fixedHeader,l=q(e,Xt),m=i.exports.useContext(G),h=i.exports.useContext(W.ConfigContext),g=h.getPrefixCls,x=e.prefixCls||g("pro"),b="".concat(x,"-page-container"),P=k(b,c,(r={},A(r,"".concat(x,"-page-container-ghost"),f),A(r,"".concat(x,"-page-container-with-footer"),d),r)),T=i.exports.useMemo(function(){return t?H(Q,{children:[y("div",{className:"".concat(b,"-children-content"),children:t}),m.hasFooterToolbar&&y("div",{style:{height:48,marginTop:24}})]}):null},[t,b,m.hasFooterToolbar]),N=y(Jt,B(_({},l),{ghost:f,prefixCls:void 0,prefixedClassName:b})),p=i.exports.useMemo(function(){if(ot.isValidElement(o))return o;if(typeof o=="boolean"&&!o)return null;var R=Yt(o);return y(nt,_({},R))},[o]),w=i.exports.useMemo(function(){var R=p||T;return e.waterMarkProps||m.waterMarkProps?y(_t,B(_({},e.waterMarkProps||m.waterMarkProps),{children:R})):R},[e.waterMarkProps,m.waterMarkProps,p,T]);return H("div",{style:s,className:P,children:[u&&N?y(Bt,B(_({offsetTop:m.hasHeader&&m.fixedHeader?m.headerHeight:0},v),{children:N})):N,w&&y(Pt,{children:w}),d&&y(Rt,{prefixCls:x,children:d})]})},dr=Zt;export{dr as P,yt as T};
