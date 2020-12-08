(this.webpackJsonpburgerbuilder=this.webpackJsonpburgerbuilder||[]).push([[0],{19:function(e,t,a){e.exports={BreadBottom:"BurgerIngredient_BreadBottom__2US69",BreadTop:"BurgerIngredient_BreadTop__3Y4-R",Seeds1:"BurgerIngredient_Seeds1__J6vUJ",Seeds2:"BurgerIngredient_Seeds2__2Ylex",Chicken:"BurgerIngredient_Chicken__2YouW",Cheese:"BurgerIngredient_Cheese__3rOTJ",Salad:"BurgerIngredient_Salad__KLnhy",Mayonnaise:"BurgerIngredient_Mayonnaise__1RbmC"}},45:function(e,t,a){e.exports=a.p+"static/media/burger-logo.b8503d26.png"},46:function(e,t,a){e.exports={Logo:"Logo_Logo__1N0xH"}},48:function(e,t,a){e.exports={Burger:"Burger_Burger__10T8F"}},54:function(e,t,a){e.exports=a(72)},59:function(e,t,a){},66:function(e,t,a){var n={"./Cheese.jpeg":67,"./Chicken.jpeg":68,"./Mayonnaise.jpeg":69,"./Salad.jpeg":70};function r(e){var t=c(e);return a(t)}function c(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=c,e.exports=r,r.id=66},67:function(e,t,a){e.exports=a.p+"static/media/Cheese.c2836c9b.jpeg"},68:function(e,t,a){e.exports=a.p+"static/media/Chicken.eb30d83e.jpeg"},69:function(e,t,a){e.exports=a.p+"static/media/Mayonnaise.1494678f.jpeg"},70:function(e,t,a){e.exports=a.p+"static/media/Salad.91fdfe66.jpeg"},72:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a.n(c),i=(a(59),a(18)),o=a(12),s=a(44),m=a(13),d=a(4),u=a(45),g=a.n(u),b=a(46),E=a.n(b),v=function(){return r.a.createElement("img",{className:E.a.Logo,src:g.a,alt:"logo"})},f=function(){return r.a.createElement("nav",{className:"navbar navbar-expand-sm navbar-light bg-dark"},r.a.createElement(m.b,{className:"navbar-brand text-white",to:"/"},r.a.createElement(v,null)," Burger Builder"),r.a.createElement("button",{className:"navbar-toggler bg-light",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo02","aria-controls":"navbarTogglerDemo02","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ",id:"navbarTogglerDemo02"},r.a.createElement("ul",{className:"navbar-nav nav-pills ml-auto mt-2 mt-lg-0 mr-3"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/cart"},"Cart")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/orders"},"Orders")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/auth"},"Sign In")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/auth"},"Sign Up")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.b,{className:"nav-link text-white",to:"/auth"},"Sign Out")))))},p=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(f,null),r.a.createElement("main",null,e.children))},N=a(40),h=a.n(N),I=a(47),y=function(){return function(){var e=Object(I.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat("https://burger-builder-a7caa.firebaseio.com","/ingredientsInfo.json"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}));case 2:a=e.sent,t({type:"GET_ALL_INGREDIENTS",ingredients:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},j=a(66),O=function(e){var t=j("./".concat(e.ingredients.label,".jpeg"));return r.a.createElement("div",{className:"media"},r.a.createElement("img",{src:t,className:"mr-3 rounded",width:"100px",height:"80px",alt:e.label}),r.a.createElement("div",{className:"media-body"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-8 col-md-6 col-sm-6 col-6"},r.a.createElement("h5",{className:"mt-0 mb-0"},e.ingredients.label)),r.a.createElement("div",{className:"col-lg-4 col-md-6 col-sm-6 col-6"},r.a.createElement("h5",{className:"d-flex justify-content-end"},r.a.createElement("span",{className:"badge badge-info"}," ","\u20b9 ",e.ingredients.price," ")))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},r.a.createElement("p",{className:"mt-0 mb-0"},e.ingredients.description)),r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12"},r.a.createElement("div",{className:"d-flex justify-content-end "},r.a.createElement("button",{className:"btn btn-sm btn-danger text-white mt-1 mr-2",onClick:e.remover,disabled:e.disabled},"Remove"),r.a.createElement("button",{className:"btn btn-sm btn-success text-white mt-1",onClick:e.adder},"Add"))))))},w=function(e){var t={},a=[];for(var n in e.ingredients)t[n]=e.ingredients[n];return a.push(t),r.a.createElement("div",{className:"card  rounded bg-dark text-white"},r.a.createElement("h4",{className:"card-header bg-dark text-white border-info"},"Build Your Burrger Here!!"),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},Object.keys(a[0]).map((function(t){return r.a.createElement("div",{className:"col-lg-6 col-md-12 col-sm-12 mt-4",key:t},r.a.createElement(O,{ingredients:a[0][t],adder:function(){return e.ingredientsAdder(t)},remover:function(){return e.ingredientsRemover(t)},disabled:e.disabled(t)}))}))),r.a.createElement("div",{className:"row mt-3 mb-3 no-gutters"},r.a.createElement("div",{className:"col-lg-4 col-md-5 col-sm-6 col-6"},r.a.createElement("p",{className:"lead  mr-3"},"Total Price: \u20b9",e.price," ")),r.a.createElement("div",{className:"col-lg-4 col-md-5 col-sm-6 col-6"},r.a.createElement("button",{type:"button",className:"btn btn-info mb-2 d-flex ",onClick:e.addtoCart,disabled:!e.purchasable}," ","Add to cart")))))},x=a(53),S=a(48),_=a.n(S),k=a(19),B=a.n(k),C=function(e){var t=Object(o.c)((function(e){return e.ingredients})).ingredients,a=e.type;t[e.type]&&(a=t[e.type].type);var n=a.charAt(0).toUpperCase()+a.slice(1),c=null;switch(a){case"bread-bottom":c=r.a.createElement("div",{className:B.a.BreadBottom});break;case"bread-top":c=r.a.createElement("div",{className:B.a.BreadTop},r.a.createElement("div",{className:B.a.Seeds1}),r.a.createElement("div",{className:B.a.Seeds2}));break;case"".concat(a):c=r.a.createElement("div",{className:B.a[n]});break;default:c=null}return c},T=function(e){var t=Object.keys(e.ingredients).map((function(t){return Object(x.a)(Array(e.ingredients[t].qty)).map((function(e,a){return r.a.createElement(C,{key:t+a,type:t})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===t.length&&(t=r.a.createElement("p",{className:"lead text-light text-center"},"Please start adding ingredients")),r.a.createElement("div",{className:"card  overflow-auto bg-dark"},e.header&&r.a.createElement("h4",{className:"card-header bg-dark text-white border-info text-center"},e.header),r.a.createElement("div",{className:_.a.Burger},r.a.createElement(C,{type:"bread-top"}),t,r.a.createElement(C,{type:"bread-bottom"})))},R=a(14),P=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ingredients})),a=t.ingredients,c=t.totalPrice,l=t.isPurchasable,i=t.currentBurgerIng;Object(n.useEffect)((function(){e(y())}),[e]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-xl mt-3"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-lg-4 col-md-5 col-sm-8 col-12"},r.a.createElement(T,{ingredients:i,header:"Burger in making!!"})),r.a.createElement("div",{className:"col-lg-8 col-md-7 col-sm-8 col-12"},r.a.createElement(w,{ingredients:a,price:c,purchasable:l,disabled:function(e){var t;return!((null===(t=i[e])||void 0===t?void 0:t.qty)>0)},ingredientsAdder:function(t){e(function(e){return{type:"ADD_INGREDIENT",ingId:e}}(t))},ingredientsRemover:function(t){e(function(e){return{type:"REMOVE_INGREDIENT",ingId:e}}(t))},addtoCart:function(){!function(e){var t=[];if(void 0!==typeof window){localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart")));var a=(new Date).toISOString();t.push(Object(R.a)({},a,e)),localStorage.setItem("cart",JSON.stringify(t))}}({ingredients:i,itemPrice:c}),e({type:"RESET_BURGER_BUILDER"})}})))))},D=a(24),A=function(e){var t=Object.keys(e.ingredients).map((function(t){var a,n;return e.ingredients[t].qty>0?r.a.createElement("li",{key:t,className:"list-group-item d-flex justify-content-between align-items-center"},null===(a=e.availableIngredients)||void 0===a||null===(n=a.ingredients[t])||void 0===n?void 0:n.label," ",r.a.createElement("span",{className:"badge badge-info badge-pill"},e.ingredients[t].qty)):null}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list-group list-group-flush rounded"},t),r.a.createElement("div",{className:"d-flex justify-content-between flex-wrap mt-2 align-items-center"},r.a.createElement("p",{className:"lead text-light"},"Total Price: \u20b9 ",e.itemPrice),r.a.createElement("button",{type:"button",className:"btn btn-sm btn-danger",onClick:function(){e.removeItem(e.cartItemId)}},"Remove")))},L=function(e){var t,a,n;for(var c in e.item)n=c,t=e.item[c].ingredients,a=e.item[c].itemPrice;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row my-3 no-gutters container "},r.a.createElement("div",{className:"col-lg-3 col-md-5 col-sm-6  border border-info rounded"},r.a.createElement("div",null,r.a.createElement(T,{ingredients:t}))),r.a.createElement("div",{className:"col-lg-9 col-md-7 col-sm-6 px-md-2 px-sm-3"},r.a.createElement("div",{className:"row justify-content-end"},r.a.createElement("div",{className:"col-lg-7 col-md-10 col-sm-12"},r.a.createElement(A,{ingredients:t,itemPrice:a,availableIngredients:e.availableIngredients,cartItemId:n,removeItem:e.removeItem}))))))},G=a(77),J=a(78),U=a(52),q=function(){var e=Object(o.b)();Object(n.useEffect)((function(){e(y())}),[e]);var t=Object(o.c)((function(e){return e.ingredients})),a=Object(n.useState)([]),c=Object(D.a)(a,2),l=c[0],i=c[1],s=Object(n.useState)(!1),m=Object(D.a)(s,2),d=m[0],u=m[1],g=Object(n.useState)(0),b=Object(D.a)(g,2),E=b[0],v=b[1],f=Object(n.useState)(""),p=Object(D.a)(f,2),N=p[0],h=p[1];Object(n.useEffect)((function(){i(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[d]),Object(n.useEffect)((function(){var e=0;l.map((function(t){for(var a in t)e+=t[a].itemPrice;return null})),v(e)}),[l]);var I=function(e){!function(e){var t=[];void 0!==typeof window&&(localStorage.getItem("cart")&&(t=JSON.parse(localStorage.getItem("cart"))),t.map((function(a,n){return Object.keys(a)[0]===e&&t.splice(n,1),null})),localStorage.setItem("cart",JSON.stringify(t)))}(e),u((function(e){return!e}))};return(null===l||void 0===l?void 0:l.length)>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"container-xl"},r.a.createElement("div",{className:"card mt-3 mb-3 overflow-auto bg-dark"},r.a.createElement("div",{className:"card-header bg-dark text-white border-info d-flex justify-content-between flex-wrap"},r.a.createElement("h5",{className:"align-self-center"},"Your Shopping Cart (",l.length," items)"),r.a.createElement("button",{type:"button",className:"btn btn-info",onClick:function(){!function(){if(void 0!==typeof window){localStorage.removeItem("cart");localStorage.setItem("cart",JSON.stringify([]))}}(),u((function(e){return!e}))}},"Clear Cart")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row no-gutters"},r.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-12 bg-dark"},l.map((function(e,a){return r.a.createElement("div",{key:a,className:"bg-dark my-3 border border-top-0 border-right-0 border-left-0 border-white"},r.a.createElement(L,{item:e,availableIngredients:t,removeItem:I}))}))))))),r.a.createElement("div",{className:"container-fluid position-sticky bg-info",style:{bottom:0}},r.a.createElement("div",{className:"p-1 d-flex justify-content-between align-items-center"},r.a.createElement("div",null,r.a.createElement(G.a,{as:J.a,key:"up",id:"dropdown-button-drop-up",drop:"up",variant:"light",title:""===N?"Select Store":N,onSelect:function(e){return h(e)}},r.a.createElement(U.a.Item,{eventKey:"Sector 5"},"Sector 5"),r.a.createElement(U.a.Item,{eventKey:"City Centre 1"},"City Centre 1"),r.a.createElement(U.a.Item,{eventKey:"Sector 2"},"Sector 2"))),r.a.createElement("div",{className:"d-flex align-items-center"},r.a.createElement("div",{className:"mr-2"},r.a.createElement("h3",null,"Total: \u20b9",E)),r.a.createElement("div",null,r.a.createElement("button",{className:"btn btn-success",disabled:""===N},"Proceed to Pay")))))):r.a.createElement("div",null,"No product in the cart")},M=function(){return r.a.createElement(m.a,null,r.a.createElement(p,null,r.a.createElement(d.c,null,r.a.createElement(d.a,{exact:!0,path:"/",component:P}),r.a.createElement(d.a,{exact:!0,path:"/cart",component:q}))))},F=a(6),Y={ingredients:"",currentBurgerIng:{},isPurchasable:!1,totalPrice:50},K=function(e,t){return Object(F.a)(Object(F.a)({},e),{},{ingredients:t.ingredients})},H=function(e,t){var a=e.currentBurgerIng[t.ingId],n=(a?a.qty:0)+1,r=e.totalPrice+parseInt(e.ingredients[t.ingId].price),c=Object(F.a)(Object(F.a)({},e.currentBurgerIng),{},Object(R.a)({},t.ingId,{qty:n}));return Object(F.a)(Object(F.a)({},e),{},{currentBurgerIng:c,isPurchasable:r>100,totalPrice:r})},W=function(e,t){var a=e.currentBurgerIng[t.ingId],n=a?a.qty:0;if(n<=0)return e;var r=n-1,c=e.totalPrice-parseInt(e.ingredients[t.ingId].price),l=Object(F.a)(Object(F.a)({},e.currentBurgerIng),{},Object(R.a)({},t.ingId,{qty:r}));return Object(F.a)(Object(F.a)({},e),{},{currentBurgerIng:l,isPurchasable:c>100,totalPrice:c})},V=function(e,t){return Object(F.a)(Object(F.a)({},e),{},{currentBurgerIng:{},isPurchasable:!1,totalPrice:50})},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL_INGREDIENTS":return K(e,t);case"ADD_INGREDIENT":return H(e,t);case"REMOVE_INGREDIENT":return W(e,t);case"RESET_BURGER_BUILDER":return V(e);default:return e}},z={},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TO_CART":var a=(new Date).toISOString();return Object(F.a)(Object(F.a)({},e),{},Object(R.a)({},a,t.item));default:return e}},X=Object(i.c)({ingredients:$,cart:Q}),Z=Object(i.d)(X,Object(i.a)(s.a)),ee=function(){return r.a.createElement(o.a,{store:Z},r.a.createElement(M,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.be2d9b5d.chunk.js.map