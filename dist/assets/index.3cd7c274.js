import{r as s,o as t,j as e,ae as g,af as C,aq as I,ar as N,W as v,aX as F,k as b,aY as w,Y as y,ao as A}from"./index.b8b13c58.js";import{S,aR as l,A as k,s as T}from"./App.e1b9a34b.js";import{l as j}from"./index.7db64dc2.js";import{B}from"./index.4c823db6.js";const G=()=>{const c=[],[o,i]=s.exports.useState([]),[d,m]=s.exports.useState([]),[h,p]=s.exports.useState(null);for(const a in l)c.push(a);const u=a=>{const r=[];a.length&&c.filter(n=>{n.toLowerCase().includes(a.toLowerCase())&&r.push(n)}),m([...r])},x=a=>{p(a),A(()=>t("div",{className:"d-flex",children:[e("div",{className:"me-1",children:e(k,{size:"sm",color:"success",icon:e(T,{size:12})})}),t("div",{className:"d-flex flex-column",children:[e("h6",{className:"toast-title",children:"Icon Name Copied! \u{1F4CB}"}),e("span",{role:"img","aria-label":"toast-text",children:a})]})]}))},f=()=>{const a=o.length?d:c;return a.length?a.map(r=>{const n=l[r];return t(s.exports.Fragment,{children:[e(j.CopyToClipboard,{text:`<${r} />`,children:e(F,{id:r,className:b("icon-card cursor-pointer text-center mb-2 mx-50",{active:h===r}),onClick:()=>x(r),children:t(w,{children:[e("div",{className:"icon-wrapper",children:e(n,{})}),e("p",{className:"icon-name text-truncate mb-0 mt-1",children:r})]})})}),e(y,{placement:"top",target:r,children:r.replace(/([A-Z])/g," $1").trim()})]},r)}):e("div",{className:"d-flex align-items-center justify-content-center w-100",children:e("h4",{className:"mb-0",children:"No Icons Found!"})})};return t(s.exports.Fragment,{children:[e(B,{title:"Feather Icons",data:[{title:"UI"},{title:"Feather Icons"}]}),e(g,{children:e(C,{sm:"12",children:e("div",{className:"icon-search-wrapper my-3 mx-auto",children:t(I,{className:"input-group-merge mb-1",children:[e(N,{children:e(S,{size:14})}),e(v,{placeholder:"Search icons...",onChange:a=>{u(a.target.value),i(a.target.value)}})]})})})}),e("div",{className:"d-flex flex-wrap",id:"icons-container",children:f()})]})};export{G as default};