(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[999],{5416:function(e,n,t){Promise.resolve().then(t.bind(t,6231))},6231:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var s=t(7437),r=t(2265),o=t(3369),a=t(8170),i=t(1396),c=t.n(i),d=()=>{let[e,n]=(0,r.useState)([]);return(0,r.useEffect)(()=>{(async()=>{try{let e=(0,o.LP)(),t=await (0,a.ZH)("admin/autos",e);console.log("en listaAutos",t),n(t.datos)}catch(e){console.error("Error obteniendo los autos",e)}})()},[]),(0,s.jsx)("div",{className:"container-fluid",children:(0,s.jsxs)("table",{className:"table",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{scope:"col",children:"Marca"}),(0,s.jsx)("th",{scope:"col",children:"Modelo"}),(0,s.jsx)("th",{scope:"col",children:"A\xf1o"}),(0,s.jsx)("th",{scope:"col",children:"Color"}),(0,s.jsx)("th",{scope:"col",children:"Precio"}),(0,s.jsx)("th",{scope:"col",children:"Estado"}),(0,s.jsx)("th",{scope:"col",children:"Acciones"})]})}),(0,s.jsx)("tbody",{children:e.map((e,n)=>(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(c(),{href:"/autos/detalle/".concat(e.external_id),passHref:!0,children:e.marca})}),(0,s.jsx)("td",{children:e.modelo}),(0,s.jsx)("td",{children:e.anio}),(0,s.jsx)("td",{children:e.color}),(0,s.jsx)("td",{children:e.precio}),(0,s.jsx)("td",{children:e.estado?"Disponible":"Vendido"}),(0,s.jsx)("td",{children:e.estado?3===e.foto.length?(0,s.jsx)(c(),{href:"/autos/editar/".concat(e.external_id),passHref:!0,className:"btn btn-dark",children:"Modificar"}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(c(),{href:"/autos/file/".concat(e.external_id),passHref:!0,className:"btn btn-primary",children:"Agregar Imagen"}),"\xa0",(0,s.jsx)(c(),{href:"/autos/editar/".concat(e.external_id),passHref:!0,className:"btn btn-dark",children:"Modificar"})]}):"Sin Acciones"})]},e.external_id))})]})})},l=t(6468),u=t(4174);function h(){let e=(0,o.U2)("rol");return(0,s.jsxs)("div",{className:"row",children:["gerente"===e?(0,s.jsx)(l.Z,{}):(0,s.jsx)(u.Z,{}),(0,s.jsx)("div",{className:"mb-2 mt-4",children:(0,s.jsxs)("div",{className:"d-flex gap-4",children:[(0,s.jsx)("h2",{children:"Listado de Autos"}),(0,s.jsx)(c(),{href:"/autos/nuevo",children:(0,s.jsx)("button",{className:"btn btn-dark px-2",children:"Nuevo Auto"})})]})}),(0,s.jsx)(d,{})]})}},5944:function(e,n,t){"use strict";var s=t(5003),r=t.n(s);n.Z=function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"success";return r()(n,e,t,{button:"ACEPTAR",closeOnEsc:!0,closeOnClickOutside:!0,timer:3e3})}},6468:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(7437),r=t(3369);t(1396);var o=t(5944),a=t(4033),i=t(2580),c=t(7380),d=t(8776);function l(){let e=(0,a.useRouter)(),n=async()=>{await (0,r.jH)(),(0,o.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return(0,s.jsx)(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsx)(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),(0,s.jsx)(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,s.jsxs)(c.Z,{className:"me-auto",children:[(0,s.jsx)(c.Z.Link,{onClick:n,children:"Cerrar Sesi\xf3n"}),(0,s.jsxs)(d.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[(0,s.jsx)(d.Z.Item,{href:"/ventas",children:"Ventas"}),(0,s.jsx)(d.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),(0,s.jsxs)(d.Z,{title:"Autos",id:"basic-nav-dropdown",children:[(0,s.jsx)(d.Z.Item,{href:"/autos",children:"Autos"}),(0,s.jsx)(d.Z.Item,{href:"/autos/vendidos",children:"Autos Vendidos"}),(0,s.jsx)(d.Z.Item,{href:"/autos/disponibles",children:"Autos Disponibles"})]}),(0,s.jsx)(c.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},4174:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var s=t(7437),r=t(3369);t(1396);var o=t(5944),a=t(4033),i=t(2580),c=t(7380),d=t(8776);function l(){let e=(0,a.useRouter)(),n=async()=>{await (0,r.jH)(),(0,o.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return(0,s.jsx)(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,s.jsxs)("div",{className:"container-fluid",children:[(0,s.jsx)(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),(0,s.jsx)(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,s.jsxs)(c.Z,{className:"me-auto",children:[(0,s.jsx)(c.Z.Link,{onClick:n,children:"Cerrar Sesi\xf3n"}),(0,s.jsxs)(d.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[(0,s.jsx)(d.Z.Item,{href:"/ventas",children:"Ventas"}),(0,s.jsx)(d.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),(0,s.jsx)(c.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},8170:function(e,n,t){"use strict";t.d(n,{Lw:function(){return d},MX:function(){return a},ZH:function(){return o},lf:function(){return i},m3:function(){return r},xC:function(){return c}});let s="https://back-end-autos.onrender.com/api/";async function r(e,n){let t=[];t={"Content-Type":"application/json"};let r=await fetch(s+e,{method:"POST",headers:t,body:JSON.stringify(n)});return await r.json()}async function o(e,n){let t=await fetch(s+e,{method:"GET",headers:{"Content-type":"application/json",token:n},cache:"no-store"});return await t.json()}async function a(e,n,t){let r=await fetch(s+e+t,{method:"GET",headers:{"Content-type":"application/json",token:n},cache:"no-store"});return await r.json()}async function i(e,n,t){let r=await fetch(s+e,{method:"POST",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(n)});return await r.json()}async function c(e,n,t){let r=await fetch(s+e,{method:"POST",headers:{token:t},body:n});return await r.json()}async function d(e,n,t){let r=await fetch(s+e,{method:"PATCH",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(n)});return await r.json()}},3369:function(e,n,t){"use strict";t.d(n,{Fr:function(){return o},LP:function(){return a},U2:function(){return r},a1:function(){return s},fK:function(){return i},jH:function(){return c},pR:function(){return d}});let s=(e,n)=>{sessionStorage.setItem(e,n)},r=e=>sessionStorage.getItem(e),o=e=>{sessionStorage.setItem("token",e)},a=()=>sessionStorage.getItem("token"),i=()=>sessionStorage.getItem("external_id"),c=()=>{sessionStorage.clear()},d=()=>{var e=sessionStorage.getItem("token");return e&&("undefined"!==e||null!==e||"null"!==e)}}},function(e){e.O(0,[595,664,971,938,744],function(){return e(e.s=5416)}),_N_E=e.O()}]);