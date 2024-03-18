(()=>{var e={};e.id=853,e.ids=[853],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},5399:(e,r,t)=>{"use strict";t.r(r),t.d(r,{GlobalError:()=>o.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var a=t(482),n=t(9108),s=t(2563),o=t.n(s),i=t(8300),l={};for(let e in i)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>i[e]);t.d(r,l);let c=["",{children:["autos",{children:["disponibles",{children:["nuevo",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(t.bind(t,4666)),"/home/ivan/WorkSpace/Practica3/front-end/venta-autos/app/autos/disponibles/nuevo/page.jsx"]}]},{}]},{}]},{}]},{layout:[()=>Promise.resolve().then(t.bind(t,3384)),"/home/ivan/WorkSpace/Practica3/front-end/venta-autos/app/layout.js"],"not-found":[()=>Promise.resolve().then(t.t.bind(t,9361,23)),"next/dist/client/components/not-found-error"]}],d=["/home/ivan/WorkSpace/Practica3/front-end/venta-autos/app/autos/disponibles/nuevo/page.jsx"],u="/autos/disponibles/nuevo/page",m={require:t,loadChunk:()=>Promise.resolve()},p=new a.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/autos/disponibles/nuevo/page",pathname:"/autos/disponibles/nuevo",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},980:(e,r,t)=>{Promise.resolve().then(t.bind(t,379))},7996:()=>{},2234:(e,r,t)=>{Promise.resolve().then(t.t.bind(t,2583,23)),Promise.resolve().then(t.t.bind(t,6840,23)),Promise.resolve().then(t.t.bind(t,8771,23)),Promise.resolve().then(t.t.bind(t,3225,23)),Promise.resolve().then(t.t.bind(t,9295,23)),Promise.resolve().then(t.t.bind(t,3982,23))},379:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>f});var a=t(2295),n=t(4502),s=t(708),o=t(6040),i=t(2254),l=t(5428),c=t(2065),d=t(783),u=t.n(d),m=t(2899),p=t(7199),h=t(2148);function f(){(0,l.fK)();let e=(0,l.LP)(),r=(0,l.U2)("rol"),t=(0,i.useRouter)(),d=n.Ry().shape({marca:n.Z_().required("Ingrese la marca del auto"),modelo:n.Z_().required("Ingrese el modelo del auto"),anio:n.Rx().required("Ingrese el a\xf1o del auto").typeError("El a\xf1o debe ser un n\xfamero").min(1886,"El a\xf1o m\xednimo permitido es 1886").max(new Date().getFullYear(),"El a\xf1o no puede ser mayor al actual"),color:n.Z_().required("Ingrese el color del auto"),precio:n.Rx().required("Ingrese el precio del auto").typeError("El precio debe ser un n\xfamero").min(0,"El precio no puede ser negativo")}),f={resolver:(0,o.X)(d)},{register:v,handleSubmit:x,formState:j}=(0,s.cI)(f),{errors:b}=j;return(0,a.jsxs)("div",{className:"row",children:["gerente"===r?a.jsx(m.Z,{}):a.jsx(p.Z,{}),a.jsx("h1",{children:"Registrar Auto"}),a.jsx("div",{className:"col-4 container-fluid",children:(0,a.jsxs)("form",{onSubmit:x(r=>{console.log("data",r);var a={marca:r.marca,modelo:r.modelo,anio:r.anio,color:r.color,precio:r.precio};console.log("dato",a),(0,h.lf)("admin/auto/guardar",a,e).then(e=>{console.log("info",e),(0,c.Z)("Auto registrado correctamente","OK","sucess"),t.push("/autos/disponibles")})}),children:[(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[a.jsx("label",{className:"form-label",children:"Marca"}),a.jsx("input",{...v("marca"),name:"marca",id:"marca",className:`form-control ${b.marca?"is-invalid":""}`}),a.jsx("div",{className:"alert alert-danger invalid-feedback",children:b.marca?.message})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[a.jsx("label",{className:"form-label",children:"Modelo"}),a.jsx("input",{...v("modelo"),name:"modelo",id:"modelo",className:`form-control ${b.modelo?"is-invalid":""}`}),a.jsx("div",{className:"alert alert-danger invalid-feedback",children:b.modelo?.message})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[a.jsx("label",{className:"form-label",children:"A\xf1o"}),a.jsx("input",{...v("anio"),name:"anio",id:"anio",className:`form-control ${b.anio?"is-invalid":""}`}),a.jsx("div",{className:"alert alert-danger invalid-feedback",children:b.anio?.message})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[a.jsx("label",{className:"form-label",children:"Color"}),a.jsx("input",{...v("color"),name:"color",id:"color",className:`form-control ${b.color?"is-invalid":""}`}),a.jsx("div",{className:"alert alert-danger invalid-feedback",children:b.color?.message})]}),(0,a.jsxs)("div",{className:"form-outline form-white mb-4",children:[a.jsx("label",{className:"form-label",children:"Precio"}),a.jsx("input",{...v("precio"),name:"precio",id:"precio",className:`form-control ${b.precio?"is-invalid":""}`}),a.jsx("div",{className:"alert alert-danger invalid-feedback",children:b.precio?.message})]}),(0,a.jsxs)("div",{className:"d-flex gap-4",children:[a.jsx("button",{type:"submit",className:"btn btn-outline-dark btn-lg px-5",id:"boton-nuevo-auto",children:"Agregar"}),a.jsx(u(),{href:"/autos/disponibles",children:a.jsx("button",{className:"btn btn-outline-dark btn-lg px-5",children:"Cancelar"})})]})]})})]})}},2065:(e,r,t)=>{"use strict";t.d(r,{Z:()=>s});var a=t(3963),n=t.n(a);let s=(e,r,t="success")=>n()(r,e,t,{button:"ACEPTAR",closeOnEsc:!0,closeOnClickOutside:!0,timer:3e3})},2899:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var a=t(2295),n=t(5428);t(783);var s=t(2065),o=t(2254),i=t(633),l=t(5964),c=t(8522);function d(){let e=(0,o.useRouter)(),r=async()=>{await (0,n.jH)(),(0,s.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return a.jsx(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,a.jsxs)("div",{className:"container-fluid",children:[a.jsx(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),a.jsx(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,a.jsxs)(l.Z,{className:"me-auto",children:[a.jsx(l.Z.Link,{onClick:r,children:"Cerrar Sesi\xf3n"}),(0,a.jsxs)(c.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[a.jsx(c.Z.Item,{href:"/ventas",children:"Ventas"}),a.jsx(c.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),(0,a.jsxs)(c.Z,{title:"Autos",id:"basic-nav-dropdown",children:[a.jsx(c.Z.Item,{href:"/autos",children:"Autos"}),a.jsx(c.Z.Item,{href:"/autos/vendidos",children:"Autos Vendidos"}),a.jsx(c.Z.Item,{href:"/autos/disponibles",children:"Autos Disponibles"})]}),a.jsx(l.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},7199:(e,r,t)=>{"use strict";t.d(r,{Z:()=>d});var a=t(2295),n=t(5428);t(783);var s=t(2065),o=t(2254),i=t(633),l=t(5964),c=t(8522);function d(){let e=(0,o.useRouter)(),r=async()=>{await (0,n.jH)(),(0,s.Z)("Adi\xf3s!","Hasta la pr\xf3xima"),e.push("/"),e.refresh()};return a.jsx(i.Z,{bg:"dark",expand:"lg",variant:"dark",children:(0,a.jsxs)("div",{className:"container-fluid",children:[a.jsx(i.Z.Toggle,{"aria-controls":"navbarSupportedContent"}),a.jsx(i.Z.Collapse,{id:"navbarSupportedContent",children:(0,a.jsxs)(l.Z,{className:"me-auto",children:[a.jsx(l.Z.Link,{onClick:r,children:"Cerrar Sesi\xf3n"}),(0,a.jsxs)(c.Z,{title:"Ventas",id:"basic-nav-dropdown",children:[a.jsx(c.Z.Item,{href:"/ventas",children:"Ventas"}),a.jsx(c.Z.Item,{href:"/ventas/propias",children:"Mis Ventas"})]}),a.jsx(l.Z.Link,{href:"/compradores",children:"Compradores"})]})})]})})}},2148:(e,r,t)=>{"use strict";t.d(r,{Lw:()=>c,MX:()=>o,ZH:()=>s,lf:()=>i,m3:()=>n,xC:()=>l});let a="https://back-end-autos.onrender.com/api/";async function n(e,r){let t=[];t={"Content-Type":"application/json"};let n=await fetch(a+e,{method:"POST",headers:t,body:JSON.stringify(r)});return await n.json()}async function s(e,r){let t=await fetch(a+e,{method:"GET",headers:{"Content-type":"application/json",token:r},cache:"no-store"});return await t.json()}async function o(e,r,t){let n=await fetch(a+e+t,{method:"GET",headers:{"Content-type":"application/json",token:r},cache:"no-store"});return await n.json()}async function i(e,r,t){let n=await fetch(a+e,{method:"POST",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(r)});return await n.json()}async function l(e,r,t){let n=await fetch(a+e,{method:"POST",headers:{token:t},body:r});return await n.json()}async function c(e,r,t){let n=await fetch(a+e,{method:"PATCH",headers:{"Content-type":"application/json",token:t},body:JSON.stringify(r)});return await n.json()}},5428:(e,r,t)=>{"use strict";t.d(r,{Fr:()=>s,LP:()=>o,U2:()=>n,a1:()=>a,fK:()=>i,jH:()=>l,pR:()=>c});let a=(e,r)=>{},n=e=>{},s=e=>{},o=()=>{},i=()=>{},l=()=>{},c=()=>{}},4666:(e,r,t)=>{"use strict";t.r(r),t.d(r,{$$typeof:()=>s,__esModule:()=>n,default:()=>o});let a=(0,t(6843).createProxy)(String.raw`/home/ivan/WorkSpace/Practica3/front-end/venta-autos/app/autos/disponibles/nuevo/page.jsx`),{__esModule:n,$$typeof:s}=a,o=a.default},3384:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>o});var a=t(5036),n=t(4932),s=t.n(n);function o({children:e}){return(0,a.jsxs)("html",{lang:"en",children:[(0,a.jsxs)("head",{children:[a.jsx("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),a.jsx("title",{children:"Autos"}),a.jsx("script",{src:"https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js",async:!0})]}),a.jsx("body",{className:s().className,children:a.jsx("div",{className:"container-fluid",children:a.jsx("section",{children:e})})})]})}t(7272),t(8399)},7272:()=>{},6040:(e,r,t)=>{"use strict";t.d(r,{X:()=>c});var a=t(708),n=function(e,r,t){if(e&&"reportValidity"in e){var n=(0,a.U2)(t,r);e.setCustomValidity(n&&n.message||""),e.reportValidity()}},s=function(e,r){var t=function(t){var a=r.fields[t];a&&a.ref&&"reportValidity"in a.ref?n(a.ref,t,e):a.refs&&a.refs.forEach(function(r){return n(r,t,e)})};for(var a in r.fields)t(a)},o=function(e,r){r.shouldUseNativeValidation&&s(e,r);var t={};for(var n in e){var o=(0,a.U2)(r.fields,n),c=Object.assign(e[n]||{},{ref:o&&o.ref});if(l(r.names||Object.keys(e),n)){var d=Object.assign({},i((0,a.U2)(t,n)));(0,a.t8)(d,"root",c),(0,a.t8)(t,n,d)}else(0,a.t8)(t,n,c)}return t},i=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,r){return e.some(function(e){return e.startsWith(r+".")})};function c(e,r,t){return void 0===r&&(r={}),void 0===t&&(t={}),function(n,i,l){try{return Promise.resolve(function(a,o){try{var c=(r.context,Promise.resolve(e["sync"===t.mode?"validateSync":"validate"](n,Object.assign({abortEarly:!1},r,{context:i}))).then(function(e){return l.shouldUseNativeValidation&&s({},l),{values:t.raw?n:e,errors:{}}}))}catch(e){return o(e)}return c&&c.then?c.then(void 0,o):c}(0,function(e){var r;if(!e.inner)throw e;return{values:{},errors:o((r=!l.shouldUseNativeValidation&&"all"===l.criteriaMode,(e.inner||[]).reduce(function(e,t){if(e[t.path]||(e[t.path]={message:t.message,type:t.type}),r){var n=e[t.path].types,s=n&&n[t.type];e[t.path]=(0,a.KN)(t.path,r,e,t.type,s?[].concat(s,t.message):t.message)}return e},{})),l)}}))}catch(e){return Promise.reject(e)}}}}};var r=require("../../../../webpack-runtime.js");r.C(e);var t=e=>r(r.s=e),a=r.X(0,[786,730,950,412],()=>t(5399));module.exports=a})();