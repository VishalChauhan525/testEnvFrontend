import{j as e,aX as d,o as s,a_ as h,r as g,cx as u,ae as n,af as r}from"./index.b8b13c58.js";import{a1 as v,b6 as p,A as x,b2 as o,C as l,b7 as t}from"./App.e1b9a34b.js";import{E as f,R as w,G as y}from"./RevenueReport.a9c658ad.js";import{C as b,a as N,b as C,c as k}from"./CardBrowserState.462dbb9f.js";import{S as z,O as T,P as I}from"./ProfitLineChart.3e7ce92e.js";/* empty css                    */import"./react-apexcharts.min.a793d200.js";import"./index.b09f352c.js";import"./avatar-s-20.3ee3e4a2.js";import"./google-chrome.1f2c3076.js";const U="/assets/star.772b7100.svg",j="/assets/book.217c1e4f.svg",D="/assets/brush.30a3a75d.svg",E="/assets/rocket.5331e32d.svg",G="/assets/toolbox.f04159d1.svg",R="/assets/speaker.af172ff8.svg",F="/assets/parachute.8d05906c.svg",M=()=>{const i=[{img:G,name:"Dixons",email:"meguc@ruj.io",icon:e(o,{size:18}),category:"Technology",views:"23.4k",time:"24 hours",revenue:"891.2",sales:"68"},{img:F,name:"Motels",email:"vecav@hodzi.co.uk",icon:e(l,{size:18}),category:"Grocery",views:"78k",time:"2 days",revenue:"668.51",sales:"97",salesUp:!0},{img:D,name:"Zipcar",email:"davcilse@is.gov",icon:e(t,{size:18}),category:"Fashion",views:"162",time:"5 days",revenue:"522.29",sales:"62",salesUp:!0},{img:U,name:"Owning",email:"us@cuhil.gov",icon:e(o,{size:18}),category:"Technology",views:"214",time:"24 hour",revenue:"291.01",sales:"88",salesUp:!0},{img:j,name:"Caf\xE9s",email:"pudais@jife.com",icon:e(l,{size:18}),category:"Grocery",views:"208",time:"1 week",revenue:"783.93",sales:"16"},{img:E,name:"Kmart",email:"bipri@cawiw.com",icon:e(t,{size:18}),category:"Fashion",views:"990",time:"1 month",revenue:"780.05",sales:"78",salesUp:!0},{img:R,name:"Payers",email:"luk@izug.io",icon:e(t,{size:18}),category:"Fashion",views:"12.9k",time:"12 hours",revenue:"531.49",sales:"42",salesUp:!0}],c={Technology:"light-primary",Grocery:"light-success",Fashion:"light-warning"};return e(d,{className:"card-company-table",children:s(h,{responsive:!0,children:[e("thead",{children:s("tr",{children:[e("th",{children:"Company"}),e("th",{children:"Category"}),e("th",{children:"Views"}),e("th",{children:"Revenue"}),e("th",{children:"Sales"})]})}),e("tbody",{children:(()=>i.map(a=>{const m=a.salesUp?e(v,{size:15,className:"text-success"}):e(p,{size:15,className:"text-danger"});return s("tr",{children:[e("td",{children:s("div",{className:"d-flex align-items-center",children:[e("div",{className:"avatar rounded",children:e("div",{className:"avatar-content",children:e("img",{src:a.img,alt:a.name})})}),s("div",{children:[e("div",{className:"fw-bolder",children:a.name}),e("div",{className:"font-small-2 text-muted",children:a.email})]})]})}),e("td",{children:s("div",{className:"d-flex align-items-center",children:[e(x,{className:"me-1",color:c[a.category],icon:a.icon}),e("span",{children:a.category})]})}),e("td",{className:"text-nowrap",children:s("div",{className:"d-flex flex-column",children:[e("span",{className:"fw-bolder mb-25",children:a.views}),s("span",{className:"font-small-2 text-muted",children:["in ",a.time]})]})}),s("td",{children:["$",a.revenue]}),e("td",{children:s("div",{className:"d-flex align-items-center",children:[s("span",{className:"fw-bolder me-1",children:[a.sales,"%"]}),m]})})]},a.name)}))()})]})})};const _=()=>{const{colors:i}=g.exports.useContext(u),c="#e9ecef";return s("div",{id:"dashboard-ecommerce",children:[s(n,{className:"match-height",children:[e(r,{xl:"4",md:"6",xs:"12",children:e(b,{})}),e(r,{xl:"8",md:"6",xs:"12",children:e(z,{cols:{xl:"3",sm:"6"}})})]}),s(n,{className:"match-height",children:[e(r,{lg:"4",md:"12",children:s(n,{className:"match-height",children:[e(r,{lg:"6",md:"3",xs:"6",children:e(T,{warning:i.warning.main})}),e(r,{lg:"6",md:"3",xs:"6",children:e(I,{info:i.info.main})}),e(r,{lg:"12",md:"6",xs:"12",children:e(f,{success:i.success.main})})]})}),e(r,{lg:"8",md:"12",children:e(w,{primary:i.primary.main,warning:i.warning.main})})]}),s(n,{className:"match-height",children:[e(r,{lg:"8",xs:"12",children:e(M,{})}),e(r,{lg:"4",md:"6",xs:"12",children:e(N,{})}),e(r,{lg:"4",md:"6",xs:"12",children:e(C,{colors:i,trackBgColor:c})}),e(r,{lg:"4",md:"6",xs:"12",children:e(y,{success:i.success.main})}),e(r,{lg:"4",md:"6",xs:"12",children:e(k,{})})]})]})};export{_ as default};