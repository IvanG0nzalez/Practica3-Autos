(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[667],{270:function(e,n,t){Promise.resolve().then(t.bind(t,6624))},6624:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(7437),s=t(6468),a=t(4174),o=t(2265),i=t(3369),c=t(8170),d=t(1396),l=t.n(d),u=()=>{let e=(0,i.LP)(),n=(0,i.U2)("external_id"),[t,s]=(0,o.useState)([]);return(0,o.useEffect)(()=>{(async()=>{try{let t=await (0,c.MX)("admin/ventas/obtener/e/",e,n);console.log("en listaVentasEmpleado",t),s(t.datos)}catch(e){console.error("Error obteniendo las ventas",e)}})()},[]),(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("table",{className:"table",children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{scope:"col",children:"N\xfamero"}),(0,r.jsx)("th",{scope:"col",children:"Comprador"}),(0,r.jsx)("th",{scope:"col",children:"Recargo"}),(0,r.jsx)("th",{scope:"col",children:"Total"}),(0,r.jsx)("th",{scope:"col",children:"Acciones"})]})}),(0,r.jsx)("tbody",{children:t.map((e,n)=>{var t;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:e.numero}),(0,r.jsx)("td",{children:e.comprador.nombres+" "+e.comprador.apellidos}),(0,r.jsx)("td",{children:e.recargo}),(0,r.jsx)("td",{children:e.total}),(0,r.jsx)("td",{children:(0,r.jsx)(l(),{href:"/ventas/editar/".concat(e.external_id),passHref:!0,className:"btn btn-primary",children:"Modificar"})})]},e.external_id)})})]})})};function h(){let e=(0,i.U2)("rol"),n=(0,i.U2)("usuario");return(0,r.jsxs)("div",{className:"row",children:["gerente"===e?(0,r.jsx)(s.Z,{}):(0,r.jsx)(a.Z,{}),(0,r.jsx)("div",{className:"mb-2 mt-4",children:(0,r.jsxs)("div",{className:"d-flex gap-4",children:[(0,r.jsxs)("h2",{children:["Ventas de ",n]}),(0,r.jsx)(l(),{href:"/ventas/nuevo",children:(0,r.jsx)("button",{className:"btn btn-dark px-2",children:"Nueva Venta"})})]})}),(0,r.jsx)(u,{})]})}},5944:function(e,n,t){"use strict";var r=t(5003),s=t.n(r);n.Z=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success";return s()(n,e,t,{button:"ACEPTAR",closeOnEsc:!0,closeOnClickOutside:!0,timer:3e3})}},6468:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7437),s=t(3369);t(1396);var a=t(5944),o=t(4033),i=t(2580),c=t(7380),d=t(8776);function l(){let e=(0,o.useRouter)(),n=async()=>{await (0,s.jH)(),(0,a.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return(0,r.jsx)(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),(0,r.jsx)(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,r.jsxs)(c.Z,{className:"me-auto",children:[(0,r.jsx)(c.Z.Link,{onClick:n,children:"Cerrar Sesi\xf3n"}),(0,r.jsxs)(d.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[(0,r.jsx)(d.Z.Item,{href:"/ventas",children:"Ventas"}),(0,r.jsx)(d.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),(0,r.jsxs)(d.Z,{title:"Autos",id:"basic-nav-dropdown",children:[(0,r.jsx)(d.Z.Item,{href:"/autos",children:"Autos"}),(0,r.jsx)(d.Z.Item,{href:"/autos/vendidos",children:"Autos Vendidos"}),(0,r.jsx)(d.Z.Item,{href:"/autos/disponibles",children:"Autos Disponibles"})]}),(0,r.jsx)(c.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},4174:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(7437),s=t(3369);t(1396);var a=t(5944),o=t(4033),i=t(2580),c=t(7380),d=t(8776);function l(){let e=(0,o.useRouter)(),n=async()=>{await (0,s.jH)(),(0,a.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return(0,r.jsx)(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),(0,r.jsx)(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,r.jsxs)(c.Z,{className:"me-auto",children:[(0,r.jsx)(c.Z.Link,{onClick:n,children:"Cerrar Sesi\xf3n"}),(0,r.jsxs)(d.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[(0,r.jsx)(d.Z.Item,{href:"/ventas",children:"Ventas"}),(0,r.jsx)(d.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),(0,r.jsx)(c.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},8170:function(e,n,t){"use strict";t.d(n,{Lw:function(){return d},MX:function(){return o},ZH:function(){return a},lf:function(){return i},m3:function(){return s},xC:function(){return c}});let r="https://back-end-autos.onrender.com/api/";async function s(e,n){let t=[];t={"Content-Type":"application/json"};let s=await fetch(r+e,{method:"POST",headers:t,body:JSON.stringify(n)});return await s.json()}async function a(e,n){let t=await fetch(r+e,{method:"GET",headers:{"Content-type":"application/json",token:n},cache:"no-store"});return await t.json()}async function o(e,n,t){let s=await fetch(r+e+t,{method:"GET",headers:{"Content-type":"application/json",token:n},cache:"no-store"});return await s.json()}async function i(e,n,t){let s=await fetch(r+e,{method:"POST",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(n)});return await s.json()}async function c(e,n,t){let s=await fetch(r+e,{method:"POST",headers:{token:t},body:n});return await s.json()}async function d(e,n,t){let s=await fetch(r+e,{method:"PATCH",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(n)});return await s.json()}},3369:function(e,n,t){"use strict";t.d(n,{Fr:function(){return a},LP:function(){return o},U2:function(){return s},a1:function(){return r},fK:function(){return i},jH:function(){return c},pR:function(){return d}});let r=(e,n)=>{sessionStorage.setItem(e,n)},s=e=>sessionStorage.getItem(e),a=e=>{sessionStorage.setItem("token",e)},o=()=>sessionStorage.getItem("token"),i=()=>sessionStorage.getItem("external_id"),c=()=>{sessionStorage.clear()},d=()=>{var e=sessionStorage.getItem("token");return e&&("undefined"!==e||null!==e||"null"!==e)}}},function(e){e.O(0,[595,664,971,938,744],function(){return e(e.s=270)}),_N_E=e.O()}]);