import{r as e,a7 as t,a8 as n}from"./index.deafe58f.js";import{a as r}from"./index.31f61ea7.js";import{P as l}from"./index.c47459c0.js";import"./lodash-es.e1174d34.js";import"./index.5e87479e.js";class s extends e.Component{constructor(){super(...arguments),this.inc=()=>this.setState({num:this.state.num+1})}render(){const{num:t}=this.state;return e.createElement("div",null,e.createElement("h1",null,"class comp: ",t),e.createElement("button",{onClick:this.inc},"inc()"))}}const c=t("counter")(s);function a(){const{state:t,setState:r}=n("counter");return e.createElement("div",null,e.createElement("h1",null,"fn comp: ",t.num),e.createElement("button",{onClick:()=>r({num:t.num+1})},"inc()"))}function o(){return e.createElement(l,null,e.createElement(r,null,e.createElement(c,null),e.createElement(a,null)))}export default o;export{a as DemoFn};
