(this["webpackJsonpe-commerce-react"]=this["webpackJsonpe-commerce-react"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},28:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=(a(27),a(21)),i=a(20),m=a(10),u=(a(28),a(18)),s=a.n(u),d=function(e){return r.a.createElement("div",null,r.a.createElement(s.a,{rating:e.rate,starRatedColor:"yellow",numberOfStars:5,name:"rating",starDimension:"20px"}))},p=function(e){return r.a.createElement("div",{className:"productCard"},r.a.createElement("div",{className:"imgDiv"},r.a.createElement("img",{src:e.data.product_image,alt:""})),r.a.createElement("h4",null,e.data.product_title),r.a.createElement("p",null,e.data.product_price," EUR"),r.a.createElement(d,{rate:e.data.product_rating}))},E=a(5),v=function(e){return r.a.createElement("div",{className:"cardsContainer"},r.a.createElement("div",{className:"productsTitle"},"The most unique products for your pets, don't miss out!"),r.a.createElement("div",{className:"productsList"},e.data.map((function(e){return r.a.createElement(E.b,{to:"/product/".concat(e.id)},r.a.createElement(p,{key:e.id,data:e}))}))))},f=a(1),h=function(e){var t=e.price;return r.a.createElement("div",{className:"navbar"},r.a.createElement("div",null,r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(E.b,{to:"/"},r.a.createElement("img",{src:"https://res.cloudinary.com/dw4g9x8wv/image/upload/v1597950293/Screenshot_from_2020-08-20_20-03-00_qnrngz.png"}))),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(E.b,{to:"/cart"},"Cart")))),r.a.createElement("div",null,r.a.createElement("p",null,"Total: ",t," EUR")))},g=function(e){return r.a.createElement("div",null,r.a.createElement(v,{data:e.data}))},b=a(15),N=(a(36),function(e){var t=e.routerProps,a=e.data,n=e.updatePrice,c=a.find((function(e){return e.id===+t.match.params.id}));return c?r.a.createElement("div",{className:"descriptionContainer"},r.a.createElement("div",{className:"descriptionImage"},r.a.createElement("img",{src:c.product_image,alt:""}),r.a.createElement(d,{rate:c.product_rating})),r.a.createElement("div",{className:"description"},r.a.createElement("h1",null,c.product_title),r.a.createElement("p",null,c.product_description),r.a.createElement("p",null,c.product_price),r.a.createElement("button",{onClick:function(){n(c.product_price,c),Object(b.b)("Item added to cart :)")}},"add to cart"),r.a.createElement(b.a,{position:"top-center",autoClose:1500,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}))):r.a.createElement("p",null,"loading...")}),_=function(e){return console.log(e),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},e.cartItem.product_title),r.a.createElement("div",{className:"col"},e.cartItem.product_price),r.a.createElement("div",{className:"col"},e.cartItem.quantity))},O=function(e){var t=e.cartArray,a=e.price,n=e.clearItems;return r.a.createElement("div",null,r.a.createElement("div",null,t.length>0&&r.a.createElement("button",{onClick:n},"Clear Cart")),0===t.length?r.a.createElement("div",null,"Shopping Cart Empty :("):r.a.createElement("header",null,r.a.createElement("div",{className:"col"},"Product"),r.a.createElement("div",{className:"col"},"Unit Price"),r.a.createElement("div",{className:"col"},"Quantity")),t.map((function(e){return r.a.createElement(_,{cartItem:e})})),r.a.createElement("p",null,"Total: ",a," EUR"))};var w=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(0),u=Object(m.a)(l,2),s=u[0],d=u[1],p=Object(n.useState)([]),E=Object(m.a)(p,2),v=E[0],b=E[1];Object(n.useEffect)((function(){fetch("https://floating-temple-56492.herokuapp.com/products").then((function(e){return e.json()})).then((function(e){return c(e)}))}),[]);var _=function(e,t){d(s+e);var a=Object(i.a)(v),n=a.find((function(e){return t.id===e.id}));n?n.quantity++:(n=Object(o.a)({},t,{quantity:1}),a.push(n)),b(a)},w=function(){b([]),d(0)};return r.a.createElement("div",{className:"App"},r.a.createElement(h,{price:s}),r.a.createElement(f.c,null,r.a.createElement(f.a,{exact:!0,path:"/",render:function(){return r.a.createElement(g,{data:a})}}),r.a.createElement(f.a,{path:"/cart",render:function(){return r.a.createElement(O,{price:s,cartArray:v,clearItems:w})}}),r.a.createElement(f.a,{path:"/product/:id",render:function(e){return r.a.createElement(N,{routerProps:e,data:a,updatePrice:_})}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E.a,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.ec742b5a.chunk.js.map