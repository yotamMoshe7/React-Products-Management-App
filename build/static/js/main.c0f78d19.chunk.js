(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,r){e.exports=r.p+"static/media/addImageIcon.786809da.webp"},32:function(e,t,r){e.exports=r(58)},37:function(e,t,r){},38:function(e,t,r){},39:function(e,t,r){},40:function(e,t,r){},44:function(e,t,r){},49:function(e,t,r){},54:function(e,t,r){},55:function(e,t,r){},56:function(e,t,r){},57:function(e,t,r){},58:function(e,t,r){"use strict";r.r(t);var a=r(2),n=r.n(a),c=r(20),i=r.n(c),l=r(9),o=(r(37),r(38),function(){return n.a.createElement("div",{id:"topBar"},"My Store")}),u=(r(39),"Last Added"),s=function(e){var t=e.setAddButtonClick,r=e.setSearchField,a=e.setSelectSort;return n.a.createElement("div",{id:"buttons-input-wrapper"},n.a.createElement("div",{id:"add-button-wrapper",onClick:function(){t(!0)}},n.a.createElement("button",{id:"add-button"},"Add +")),n.a.createElement("div",{id:"input-wrapper"},n.a.createElement("input",{id:"input",type:"text",placeholder:"Search Products",onChange:function(e){r(e.target.value)}})),n.a.createElement("div",{id:"sort-by-wrapper"},n.a.createElement("select",{name:"sort-options",id:"sort-by",onChange:function(e){a(e.target.value)}},n.a.createElement("option",{value:u},u),n.a.createElement("option",{value:"Higher Price"},"Higher Price"),n.a.createElement("option",{value:"title"},"title"))))},d=(r(40),{id:null,imageUrl:null,date:null,title:"",description:"",price:""}),p=function(e){switch(!0){case e.title.length>22:return"Title can not contain more then 25 chars";case e.description.length>130:return"Description can not contain more then 130 chars";case e.price.length>7:return"Price can not contain more then 7 chars";case""===e.title||""===e.description||""===e.price:return"Please fill all the input fields";case e.price<=0:return"Price must be greater then 0";case null===e.imageUrl:return"Please upload an image";default:return null}},m=function(e,t){return!(!e.title.toLowerCase().includes(t.toLowerCase())&&!e.description.toLowerCase().includes(t.toLowerCase()))},f=function(e){console.log("b");var t=JSON.parse(localStorage.getItem("productsPriceSortList"))||[];if(0===t.length)t.push(e);else if(parseInt(t[t.length-1].price)>parseInt(e.price))t.push(e);else for(var r=0;r<t.length;r++)if(parseInt(t[r].price)<parseInt(e.price)){console.log(t[r].price),console.log(e),t.splice(r,0,e);break}localStorage.setItem("productsPriceSortList",JSON.stringify(t))},g=function(e){for(var t=JSON.parse(localStorage.getItem("productsPriceSortList"))||[],r=0;r<t.length;r++)if(t[r].id===e.id){t.splice(r,1);break}localStorage.setItem("productsPriceSortList",JSON.stringify(t))},b=function(e){var t=[];return e===u?(console.log(u),t=JSON.parse(localStorage.getItem("productsLastAddedSortList"))||[]):"Higher Price"===e?(console.log("Higher Price"),t=JSON.parse(localStorage.getItem("productsPriceSortList"))||[]):"title"===e&&(console.log("title"),t=JSON.parse(localStorage.getItem("productsTitleSortList"))||[]),t},v=function(e){var t=JSON.parse(localStorage.getItem("lastIdValue"))||0;return localStorage.setItem("lastIdValue",JSON.stringify(t+1)),t},S=r(16),E={INITIAL_ITEMS_ARRAY:"INITIAL_ITEMS_ARRAY"},O=function(e){return{type:E.INITIAL_ITEMS_ARRAY,payload:e}},h=(r(44),r(15)),I=r(11),j=function(e){var t=e.page,r=e.setPage,a=e.filteredProductList;return n.a.createElement("div",{id:"page-number-wrapper"},n.a.createElement("div",{onClick:t>1?function(){r(t-1)}:null},n.a.createElement(h.a,{icon:I.a,style:{fontSize:"2em",color:t>1?"white":"rgb(70, 67, 67)",marginRight:"0.5vw"}})),n.a.createElement("div",{id:"page-number"}," ",t," "),n.a.createElement("div",{onClick:4*t<a.length?function(){r(t+1)}:null},n.a.createElement(h.a,{icon:I.b,style:{fontSize:"2em",color:4*t<a.length?" white":"rgb(70, 67, 67)",marginLeft:"0.5vw"}})))},y=r(17),w=r.n(y),P=r(21),k=r(22),L=r(12),A=(r(49),r(27));r(53);A.a.initializeApp({apiKey:"AIzaSyAE-A62neuu272fA7MY7VWgxUctzNIURwE",authDomain:"product-management-6d658.firebaseapp.com",projectId:"product-management-6d658",storageBucket:"product-management-6d658.appspot.com",messagingSenderId:"653275623932",appId:"1:653275623932:web:1aedb847f212df211e4279",measurementId:"G-LCRFPLE45M"});var C=A.a.storage(),N=(r(54),r(30)),J=r.n(N),T=function(e){var t=e.product,r=e.setProduct,c=Object(a.useRef)(null),i=Object(a.useState)(null),o=Object(l.a)(i,2),u=o[0],s=o[1],d=Object(a.useState)(null),p=Object(l.a)(d,2),m=p[0],f=p[1],g=["image/png","image/jpeg","image/jpg"],b=function(e){c.current.click()},v=function(e){var t=Object(a.useState)(0),r=Object(l.a)(t,2),n=r[0],c=r[1],i=Object(a.useState)(null),o=Object(l.a)(i,2),u=o[0],s=o[1],d=Object(a.useState)(null),p=Object(l.a)(d,2),m=p[0],f=p[1];return Object(a.useEffect)(function(){if(e){var t=C.ref(e.name);t.put(e).on("state_changed",function(e){var t=Math.round(e.bytesTransferred/e.totalBytes*100);c(t)},function(e){s(e)},Object(P.a)(w.a.mark(function e(){var r;return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:r=e.sent,f(r);case 4:case"end":return e.stop()}},e)})))}},[e]),{progress:n,url:m,error:u}}(u).url;return Object(a.useEffect)(function(){null!==u&&r(Object(L.a)({},t,{imageUrl:v}))},[v]),n.a.createElement("div",{id:"display-image-wrapper"},n.a.createElement("img",{id:"display-image",alt:"product illustration",style:{padding:null===t.imageUrl?"0.2vw":null},src:null===t.imageUrl?J.a:t.imageUrl,onClick:b}),n.a.createElement("label",{id:"uploade-image"},n.a.createElement(h.a,{icon:I.c,style:{marginLeft:"1vw",width:"2.5vw",height:"2.5vw"}},n.a.createElement("button",{onClick:b})),n.a.createElement("input",{type:"file",ref:c,onChange:function(e){var t=e.target.files[0];t&&(g.includes(t.type)?(f(null),s(t)):(s(null),f("Please select an image file (png or jpg)")))},style:{display:"none"}})),m&&n.a.createElement("p",null,m))},B=(r(55),function(e){var t=e.setAddButtonClick,r=e.setMarkProductId,a=e.setProduct,c=e.emptyProductObject;return n.a.createElement("div",{onClick:function(){t(!1),r(null),a(c)}},n.a.createElement(h.a,{icon:I.d,style:{position:"absolute",right:"0px"},className:"colse-button"}))}),R=Object(S.b)(function(e){return{currentItems:e.items.currentItems}},function(e){return{initialProductArray:function(t){return e(O(t))}}})(function(e){var t=e.initialProductArray,r=e.addButtonClick,c=e.setAddButtonClick,i=e.currentItems,o=e.markProductId,u=e.setMarkProductId,s=e.selectSort,m=Object(a.useState)({id:null,imageUrl:null,date:null,title:"",description:"",price:""}),S=Object(l.a)(m,2),E=S[0],O=S[1],h=Object(a.useState)(!1),I=Object(l.a)(h,2),j=I[0],y=I[1],A=Object(a.useState)(null),C=Object(l.a)(A,2),N=C[0],J=C[1],R=Object(a.useRef)(!1),D=Object(a.useRef)(!1),M=function(e){O(Object(L.a)({},E,Object(k.a)({},e.target.name,e.target.value)))};Object(a.useEffect)(function(){(r||j)&&(O(d),u(null))},[r,j,u]),Object(a.useEffect)(function(){var e=i.find(function(e){return e.id===o});null!==o&&O({id:e.id,imageUrl:e.imageUrl,date:e.date,title:e.title,description:e.description,price:e.price})},[o,i]),Object(a.useEffect)(function(){if(y(!1),R.current){var e=p(E);if(J(e),null===e){!function(e){for(var t=JSON.parse(localStorage.getItem("productsLastAddedSortList"))||[],r=0;r<t.length;r++)t[r].id===e.id&&(t[r]=e);localStorage.setItem("productsLastAddedSortList",JSON.stringify(t))}(E),function(e){g(e),f(e)}(E),function(e){for(var t=JSON.parse(localStorage.getItem("productsTitleSortList"))||[],r=0;r<t.length;r++)if(t[r].id===e.id){t[r]=e;break}localStorage.setItem("productsTitleSortList",JSON.stringify(t))}(E);var r=b(s);t(r),y(!0),R.current=!1}else R.current=!1}},[E,t,s]),Object(a.useEffect)(function(){if(y(!1),null!==E.date&&null!==E.id&&D.current){var e=p(E);if(J(e),null===e){!function(e){var t=JSON.parse(localStorage.getItem("productsLastAddedSortList"))||[];t.push(e),localStorage.setItem("productsLastAddedSortList",JSON.stringify(t))}(E),f(E),function(e){var t=JSON.parse(localStorage.getItem("productsTitleSortList"))||[];if(0===t.length)t.push(e);else if(t[t.length-1].title.toLowerCase()<e.title.toLowerCase())t.push(e);else for(var r=0;r<t.length;r++)if(t[r].title.toLowerCase()>e.title.toLowerCase()){t.splice(r,0,e);break}localStorage.setItem("productsTitleSortList",JSON.stringify(t))}(E);var r=b(s);t(r),y(!0),D.current=!1}else D.current=!1}},[E,t,s]);var U=function(){var e=Object(P.a)(w.a.mark(function e(){return w.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:null!==o?(R.current=!0,O(Object(L.a)({},E,{date:new Date}))):(D.current=!0,O(Object(L.a)({},E,{id:v(),date:new Date})));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();return r||null!==o?n.a.createElement("div",{id:"prducts-display-wrapper"},n.a.createElement("div",{id:"prducts-display-sub-wrapper"},n.a.createElement(B,{setAddButtonClick:c,setMarkProductId:u,setProduct:O,emptyProductObject:d}),n.a.createElement("div",{className:"display-title"},"Product Details"),n.a.createElement(T,{product:E,setProduct:O}),n.a.createElement("div",{className:"display-title"},"Title"),n.a.createElement("input",{id:"product-name",name:"title",type:"text",onChange:M,value:E.title}),n.a.createElement("div",{className:"display-title"},"Description"),n.a.createElement("textarea",{id:"product-description",name:"description",value:E.description,onChange:M}),n.a.createElement("div",{className:"display-title"},"Price"),n.a.createElement("div",{id:"bottom-wrapper"},n.a.createElement("input",{id:"product-price",name:"price",type:"number",value:E.price,onChange:M}),n.a.createElement("div",{id:"error-wrapper"},n.a.createElement("div",{id:"error-message"},N)),n.a.createElement("button",{id:"save-button",onClick:U},"Save")))):null}),D=(r(56),function(e){var t=e.id,r=e.productDetails,c=e.markProductId,i=e.setMarkProductId,l=e.setAddButtonClick,o=e.setProductIdToDelete,u=e.finishDeleteProduct,s=Object(a.useRef)(!1);return n.a.createElement("div",{id:"element-wrapper",style:{backgroundColor:c===t?"rgb(11, 43, 11)":null},onClick:function(){c!==t?s.current||(i(t),l(!1)):i(null)}},n.a.createElement("div",{id:"image-wrapper"},n.a.createElement("img",{id:"image",src:r.imageUrl,alt:"product illustration"})),n.a.createElement("div",{id:"details-wrapper"},n.a.createElement("textarea",{id:"title",disabled:!0,value:r.title}),n.a.createElement("textarea",{id:"description",disabled:!0,value:r.description})),n.a.createElement("div",{id:"date"},null!==r.date?function(e){var t=new Date(e);return"".concat(t.getDate(),"/").concat(t.getMonth(),"/").concat(t.getFullYear())}(r.date):null),n.a.createElement("div",{id:"delete-button-wrapper"},n.a.createElement("div",{id:"price"},r.price,"$"),n.a.createElement("button",{id:"delete-button",onClick:function(){s.current=!0,u.current=!1,o(t)}},"delete button")))}),M=Object(S.b)(function(e){return{currentItems:e.items.currentItems}},function(e){return{initialProductArray:function(t){return e(O(t))}}})(function(e){var t=e.addButtonClick,r=e.setAddButtonClick,c=e.searchField,i=e.currentItems,o=e.initialProductArray,u=e.selectSort,s=Object(a.useState)(null),d=Object(l.a)(s,2),p=d[0],f=d[1],v=Object(a.useState)([]),S=Object(l.a)(v,2),E=S[0],O=S[1],h=Object(a.useState)(null),I=Object(l.a)(h,2),y=I[0],w=I[1],P=Object(a.useState)(1),k=Object(l.a)(P,2),L=k[0],A=k[1],C=Object(a.useRef)(!0),N=Object(a.useRef)(!1);Object(a.useEffect)(function(){var e=b(u);o(e),A(1)},[u,o]),Object(a.useEffect)(function(){for(var e=[],t=0;t<i.length;t++)m(i[t],c)&&e.push(i[t]);O(e),C.current=!1},[i,c]),Object(a.useEffect)(function(){f(null),w(null)},[i]),Object(a.useEffect)(function(){i.length%4===0&&4*L>i.length&&L>1&&A(L-1)},[L,i]),Object(a.useEffect)(function(){if(null!==y&&!N.current){f(null);var e=i.find(function(e){return e.id===y});!function(e){for(var t=[],r=JSON.parse(localStorage.getItem("productsLastAddedSortList"))||[],a=0;a<r.length;a++)r[a].id!==e.id&&t.push(r[a]);localStorage.setItem("productsLastAddedSortList",JSON.stringify(t))}(e),g(e),function(e){for(var t=JSON.parse(localStorage.getItem("productsTitleSortList"))||[],r=0;r<t.length;r++)if(t[r].id===e.id){t.splice(r,1);break}localStorage.setItem("productsTitleSortList",JSON.stringify(t))}(e);var t=b(u);o(t),N.current=!0}},[y,o,u,i]);return n.a.createElement("div",{id:"products-display-container-wrapper"},n.a.createElement("div",null,0!==E.length||C.current?n.a.createElement("div",null,n.a.createElement("div",{id:"products-display-container"},E.length>0?function(){for(var e=[],t=4*(L-1);t<4*L&&void 0!==E[t];t++)e.push(n.a.createElement(D,{key:t,id:E[t].id,markProductId:p,setMarkProductId:f,setAddButtonClick:r,productDetails:E[t],setProductIdToDelete:w,currentItems:i,finishDeleteProduct:N}));return e}():null),n.a.createElement(j,{page:L,setPage:A,filteredProductList:E})):n.a.createElement("div",{id:"no-products-message"},"No Products")),n.a.createElement(R,{addButtonClick:t,setAddButtonClick:r,markProductId:p,setMarkProductId:f,setProductIdToDelete:w,selectSort:u}))});var U=function(){var e=Object(a.useState)(!1),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(a.useState)(""),d=Object(l.a)(i,2),p=d[0],m=d[1],f=Object(a.useState)(u),g=Object(l.a)(f,2),b=g[0],v=g[1];return n.a.createElement("div",{className:"app"},n.a.createElement(o,null),n.a.createElement(s,{setSearchField:m,setAddButtonClick:c,setSelectSort:v}),n.a.createElement(M,{addButtonClick:r,setAddButtonClick:c,searchField:p,selectSort:b}))},x=(r(57),r(18)),_=r(31),F=r.n(_),Y={currentItems:[]},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E.INITIAL_ITEMS_ARRAY:return Object(L.a)({},e,{currentItems:t.payload});default:return e}},H=Object(x.b)({items:z}),V=[F.a],G=Object(x.c)(H,x.a.apply(void 0,V));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S.a,{store:G},n.a.createElement(U,null))),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c0f78d19.chunk.js.map