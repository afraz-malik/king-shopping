(this["webpackJsonpking-shopping"]=this["webpackJsonpking-shopping"]||[]).push([[0],{53:function(e,t,n){},54:function(e,t,n){},58:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},62:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},85:function(e,t,n){"use strict";n.r(t);var c,r,a,s,i,o,l,u,d,j,b,p,O,m,h,f=n(2),x=n.n(f),g=n(33),v=n.n(g),I=(n(53),n(9)),N=(n(54),n(18)),y=n(13),E=n(12),S=function(e){return{type:"SIGN_IN_SUCCESS",payload:e}},_=function(e){return{type:"SIGN_IN_FAILED",payload:e}},w=function(e){return{type:"GETTING_SHOP_DATA_FROM_FIREBASE_SUCCESS",payload:e}},T=n(14),C=Object(T.a)([function(e){return e.user}],(function(e){return e.currentUser})),A=function(e){return e.cart},k=Object(T.a)([A],(function(e){return e.cartItem})),R=Object(T.a)([k],(function(e){return e.reduce((function(e,t){return e+t.quantity}),0)})),G=Object(T.a)([k],(function(e){return e.reduce((function(e,t){return e+t.quantity*t.price}),0)})),U=Object(T.a)([A],(function(e){return e.hidden})),P=function(e){return e.shopData},D=Object(T.a)([P],(function(e){return e.shopDataList})),F=Object(T.a)([D],(function(e){return Object.keys(e).map((function(t){return e[t]}))})),L=Object(T.a)([P],(function(e){return e.isFetching}));n(58);function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function M(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function W(e,t){var n=e.title,x=e.titleId,g=M(e,["title","titleId"]);return f.createElement("svg",H({id:"Capa_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 407.453 407.453",style:{enableBackground:"new 0 0 407.453 407.453"},xmlSpace:"preserve",ref:t,"aria-labelledby":x},g),n?f.createElement("title",{id:x},n):null,f.createElement("g",null,f.createElement("path",{style:{fill:"#010002"},d:"M255.099,116.515c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H143.486 c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129H255.099z"}),f.createElement("path",{style:{fill:"#010002"},d:"M367.062,100.258H311.69c-4.487,0-8.129,3.633-8.129,8.129c0,4.495,3.642,8.129,8.129,8.129h47.243 v274.681H48.519V116.515h44.536c4.487,0,8.129-3.633,8.129-8.129c0-4.495-3.642-8.129-8.129-8.129H40.391 c-4.487,0-8.129,3.633-8.129,8.129v290.938c0,4.495,3.642,8.129,8.129,8.129h326.671c4.487,0,8.129-3.633,8.129-8.129V108.386 C375.191,103.891,371.557,100.258,367.062,100.258z"}),f.createElement("path",{style:{fill:"#010002"},d:"M282.59,134.796c4.487,0,8.129-3.633,8.129-8.129V67.394C290.718,30.238,250.604,0,201.101,0 c-49.308,0-89.414,30.238-89.414,67.394v59.274c0,4.495,3.642,8.129,8.129,8.129s8.129-3.633,8.129-8.129V67.394 c0-28.198,32.823-51.137,73.36-51.137c40.334,0,73.157,22.939,73.157,51.137v59.274 C274.461,131.163,278.095,134.796,282.59,134.796z"}),f.createElement("path",{style:{fill:"#010002"},d:"M98.892,147.566c0,11.526,9.389,20.907,20.923,20.907c11.534,0,20.923-9.38,20.923-20.907 c0-4.495-3.642-8.129-8.129-8.129s-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.569,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129S98.892,143.071,98.892,147.566z"}),f.createElement("path",{style:{fill:"#010002"},d:"M282.59,168.473c11.534,0,20.923-9.38,20.923-20.907c0-4.495-3.642-8.129-8.129-8.129 c-4.487,0-8.129,3.633-8.129,8.129c0,2.561-2.089,4.65-4.666,4.65c-2.577,0-4.666-2.089-4.666-4.65 c0-4.495-3.642-8.129-8.129-8.129c-4.487,0-8.129,3.633-8.129,8.129C261.667,159.092,271.055,168.473,282.59,168.473z"})),c||(c=f.createElement("g",null)),r||(r=f.createElement("g",null)),a||(a=f.createElement("g",null)),s||(s=f.createElement("g",null)),i||(i=f.createElement("g",null)),o||(o=f.createElement("g",null)),l||(l=f.createElement("g",null)),u||(u=f.createElement("g",null)),d||(d=f.createElement("g",null)),j||(j=f.createElement("g",null)),b||(b=f.createElement("g",null)),p||(p=f.createElement("g",null)),O||(O=f.createElement("g",null)),m||(m=f.createElement("g",null)),h||(h=f.createElement("g",null)))}var q,B,z=f.forwardRef(W),J=(n.p,function(e){return{type:"ADD_ITEMS_TO_CART",payload:e}}),K=n(1),V=Object(E.b)((function(e){return{cartItemCount:R(e)}}),(function(e){return{toggleCart:function(){return e({type:"TOGGLE_CART"})}}}))((function(e){var t=e.toggleCart,n=e.cartItemCount;return Object(K.jsxs)("div",{className:"cart-icon",onClick:t,children:[Object(K.jsx)(z,{className:"shopping-icon"}),Object(K.jsx)("span",{className:"item-count",children:n})]})})),Q=(n(60),n(24)),Y=(n(61),function(e){var t=e.children,n=e.google,c=e.inverted,r=Object(Q.a)(e,["children","google","inverted"]);return Object(K.jsx)("button",Object(I.a)(Object(I.a)({className:"".concat(n?"google":""," ").concat(c?"inverted":""," button")},r),{},{children:t}))}),X=(n(62),function(e){var t=e.item;return Object(K.jsxs)("div",{className:"cart-item",children:[Object(K.jsx)("img",{alt:"itemImg",src:t.imageUrl}),Object(K.jsxs)("div",{className:"details",children:[Object(K.jsx)("span",{className:"name",children:t.name}),Object(K.jsxs)("span",{className:"price",children:[t.quantity," x $",t.price]})]})]})}),$=Object(y.g)(Object(E.b)((function(e){return{cartItems:e.cart.cartItem}}))((function(e){var t=e.cartItems,n=e.history,c=e.dispatch,r=e.match;return Object(K.jsxs)("div",{className:"cart",children:[Object(K.jsx)("div",{className:"cart-items",children:t.length?t.map((function(e){return Object(K.jsx)(X,{item:e},e.id)})):Object(K.jsx)("span",{className:"empty-message",children:"Your Cart is Empty"})}),t.length?Object(K.jsx)(Y,{inverted:"true",onClick:function(){n.push("".concat(r.path,"checkout")),c({type:"TOGGLE_CART"})},children:"GO TO CHECKOUT"}):null]})})));n(64);function Z(){return(Z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function ee(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function te(e,t){var n=e.title,c=e.titleId,r=ee(e,["title","titleId"]);return f.createElement("svg",Z({width:"50px",height:"39px",viewBox:"0 0 50 39",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",ref:t,"aria-labelledby":c},r),void 0===n?f.createElement("title",{id:c},"Group"):n?f.createElement("title",{id:c},n):null,q||(q=f.createElement("desc",null,"Created with Sketch.")),B||(B=f.createElement("g",{id:"WiP",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"Artboard",transform:"translate(-90.000000, -38.000000)"},f.createElement("g",{id:"Group",transform:"translate(90.000000, 38.000000)"},f.createElement("polygon",{id:"Rectangle",fill:"#808282",points:"3 14 25 26.5 47 14 40.855176 39 9.08421785 39"}),f.createElement("polygon",{id:"Triangle",fillOpacity:.262838724,fill:"#101A1A",points:"25 8 40 39 10 39"}),f.createElement("circle",{id:"Oval",fill:"#5E6363",cx:2,cy:9,r:2}),f.createElement("circle",{id:"Oval",fill:"#5E6363",cx:25,cy:2,r:2}),f.createElement("circle",{id:"Oval",fill:"#5E6363",cx:48,cy:9,r:2}))))))}var ne=f.forwardRef(te),ce=(n.p,Object(y.g)(Object(E.b)(null,(function(e){return{signOut:function(){return e({type:"SIGN_OUT_START"})}}}))((function(e){var t=e.currentUser,n=e.hidden,c=e.match,r=e.signOut;return Object(K.jsxs)("div",{className:"header",children:[Object(K.jsx)(N.b,{to:"".concat(c.path),className:"logo",children:Object(K.jsx)(ne,{})}),Object(K.jsxs)("div",{className:"rightnav",children:[Object(K.jsx)(N.b,{to:"".concat(c.path,"shop"),className:"option",children:"SHOP"}),Object(K.jsx)(N.b,{to:"".concat(c.path,"about"),className:"option",children:"CONTACT"}),t?Object(K.jsx)("div",{className:"option",onClick:function(){return r()},children:"SIGN OUT "}):Object(K.jsx)(N.b,{to:"".concat(c.path,"signin"),className:"option",children:"SIGN IN "}),Object(K.jsx)(V,{})]}),n?null:Object(K.jsx)($,{})]})})))),re=(n(65),n(66),n(67),Object(y.g)((function(e){var t=e.title,n=e.imgUrl,c=e.size,r=e.routeName,a=e.history,s=e.match;return Object(K.jsxs)("div",{className:"".concat(c," menu-item"),onClick:function(){return a.push("".concat(s.path,"shop/").concat(r))},children:[Object(K.jsx)("div",{className:"background-image",style:{backgroundImage:"url(".concat(n,")")}}),Object(K.jsxs)("div",{className:"content",children:[Object(K.jsx)("h1",{className:"title",children:t.toUpperCase()}),Object(K.jsx)("span",{className:"subtitle",children:"SHOP NOW"})]})]})}))),ae=Object(T.b)({shopData:F}),se=Object(E.b)(ae)((function(e){var t=e.shopData;return Object(K.jsx)("div",{className:"directory-menu",children:t.map((function(e){var t=e.id,n=Object(Q.a)(e,["id"]);return Object(K.jsx)(re,Object(I.a)({},n),t)}))})})),ie=function(){return Object(K.jsx)("div",{className:"homepage",children:Object(K.jsx)(se,{})})},oe=(n(68),n(69),Object(E.b)(null,(function(e){return{addItem:function(t){return e(J(t))}}}))((function(e){var t=e.item,n=e.addItem,c=t.name,r=t.price,a=t.imageUrl;return Object(K.jsxs)("div",{className:"collection-item",children:[Object(K.jsx)("div",{className:"image",style:{backgroundImage:"url(".concat(a,")")}}),Object(K.jsxs)("div",{className:"collection-footer",children:[Object(K.jsx)("span",{className:"name",children:c}),Object(K.jsx)("span",{className:"price",children:r})]}),Object(K.jsx)(Y,{inverted:"true",onClick:function(){return n(t)},children:"ADD TO CART"})]})}))),le=Object(y.g)((function(e){var t=e.title,n=e.items,c=e.history,r=e.match;return Object(K.jsxs)("div",{className:"collection-preview",children:[Object(K.jsx)("h1",{className:"title",onClick:function(){return c.push("".concat(r.path,"/").concat(t.toLowerCase()))},children:t.toUpperCase()}),Object(K.jsx)("div",{className:"preview",children:n.filter((function(e,t){return t<4})).map((function(e){return Object(K.jsx)(oe,{item:e},e.id)}))})]})})),ue=Object(T.b)({collections:F}),de=Object(E.b)(ue)((function(e){var t=e.collections;return Object(K.jsx)("div",{className:"shoppage",children:t.map((function(e){var t=e.id,n=Object(Q.a)(e,["id"]);return Object(K.jsx)(le,Object(I.a)({},n),t)}))})})),je=(n(70),Object(E.b)((function(e,t){return{collections:(n=t.match.params.category,Object(T.a)([D],(function(e){return e[n]})))(e)};var n}))((function(e){var t=e.collections;return Object(K.jsx)("div",{className:"ok",children:void 0===t?null:Object(K.jsxs)("div",{className:"categories",children:[Object(K.jsx)("h2",{className:"title",children:t.title}),Object(K.jsx)("div",{className:"items",children:t.items.map((function(e){return Object(K.jsx)(oe,{item:e},e.id)}))})]})})}))),be=Object(y.g)((function(e){var t=e.match;return Object(K.jsxs)("div",{className:"",children:[Object(K.jsx)(y.b,{exact:!0,path:"".concat(t.path),component:de}),Object(K.jsx)(y.b,{path:"".concat(t.path,"/:category"),component:je})]})})),pe=(n(71),n(72),Object(E.b)(null,(function(e){return{clearCartItem:function(t){return e({type:"CLEAR_ITEM_FROM_CART",payload:t})},decCartItem:function(t){return e({type:"DECERASE_ITEM_FROM_CART",payload:t})},incCartItem:function(t){return e(J(t))}}}))((function(e){var t=e.cartItem,n=e.clearCartItem,c=e.decCartItem,r=e.incCartItem;return Object(K.jsxs)("div",{className:"checkout-item",children:[Object(K.jsx)("div",{className:"image-container",children:Object(K.jsx)("img",{alt:"ok",src:t.imageUrl})}),Object(K.jsx)("span",{className:"name",children:t.name}),Object(K.jsxs)("span",{className:"quantity ",children:[Object(K.jsx)("div",{className:"arrow",onClick:function(){return c(t)},children:"\u276e"}),Object(K.jsx)("span",{className:"value",children:t.quantity}),Object(K.jsx)("div",{className:"arrow",onClick:function(){return r(t)},children:"\u276f"})]}),Object(K.jsx)("span",{className:"price",children:t.price}),Object(K.jsx)("span",{className:"remove-button",onClick:function(){return n(t)},children:"\u2613"})]})}))),Oe=n(43),me=n.n(Oe),he=function(e){var t=e.price,n=100*t;return Object(K.jsx)(me.a,{label:"Pay Now",name:"King Shopping Ltd",billingAddress:!0,shippingAddress:!0,image:"",description:"Your Total is : ".concat(t,"$"),amount:n,panelLabel:"Pay Now",token:function(e){fetch("payment",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tokenId:e.id,amount:n})}).then((function(e){return e.json()})).then((function(e){e.status&&alert("Transaction "+e.status),e.message&&alert(e.message)}))},stripeKey:"pk_test_51IorcjHi1sHpYjVtYW88IFhEZ0jTg91PlKPNi1QCsKL8PIaDfdppGFOdjIC8JJzh5SMIa74VH2bQpH9OwXJUTv9f00xHyfkTFS"})},fe=Object(T.b)({cartItems:k,cartTotal:G}),xe=Object(E.b)(fe,null)((function(e){var t=e.cartItems,n=e.cartTotal;return Object(K.jsxs)("div",{className:"checkout",children:[Object(K.jsxs)("div",{className:"checkout-header",children:[Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Product"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Description"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Quantity"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Price"})}),Object(K.jsx)("div",{className:"header-block",children:Object(K.jsx)("span",{children:"Remove"})})]}),t.map((function(e){return Object(K.jsx)(pe,{cartItem:e},e.id)})),Object(K.jsxs)("div",{className:"total",children:["TOTAL: $","".concat(n)]}),Object(K.jsx)(he,{price:n}),Object(K.jsxs)("div",{className:"card",children:[Object(K.jsx)("span",{className:"red",children:"*PLEASE USE THE FOLLOWING CREDIT CARD FOR TEST PAYMENT*"}),Object(K.jsx)("br",{}),Object(K.jsx)("span",{className:"credit-card",children:"Card: 4242 4242 4242 4242 Exp: 12/2021 CVV:021 "})]})]})})),ge=function(){return Object(K.jsx)("div",{className:"about",children:"Page Under Construction ;)"})},ve=(n(73),n(7)),Ie=n.n(ve),Ne=n(31),ye=n(27),Ee=n(38),Se=(n(75),n(76),function(e){var t=e.label,n=e.handleChange,c=Object(Q.a)(e,["label","handleChange"]);return Object(K.jsxs)("div",{className:"group",children:[Object(K.jsx)("input",Object(I.a)({className:"form-input",onChange:n},c)),t?Object(K.jsx)("label",{className:"".concat(c.value.length?"shrink":""," form-label"),children:t}):null]})}),_e=Object(E.b)(null,(function(e){return{signInWithGoogleStart:function(){return e({type:"SIGN_IN_WITH_GOOGLE_START"})},signInWithEmailStart:function(t){return e(function(e){return{type:"SIGN_IN_WITH_EMAIL_START",payload:e}}(t))}}}))((function(e){var t=e.signInWithEmailStart,n=e.signInWithGoogleStart,c=Object(f.useState)({email:"",password:""}),r=Object(Ee.a)(c,2),a=r[0],s=r[1],i=a.email,o=a.password,l=function(e){s(Object(I.a)(Object(I.a)({},a),{},Object(ye.a)({},e.target.name,e.target.value)))},u=function(){var e=Object(Ne.a)(Ie.a.mark((function e(n){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),t({email:i,password:o}),s({email:"",password:""});case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(K.jsxs)("div",{className:"sign-in",children:[Object(K.jsx)("h1",{children:"I already have an account"}),Object(K.jsx)("span",{className:"title",children:"Sign In with your Email and password"}),Object(K.jsxs)("form",{onSubmit:u,children:[Object(K.jsx)(Se,{type:"email",name:"email",label:"email",value:i,handleChange:l,required:!0}),Object(K.jsx)(Se,{type:"password",name:"password",label:"password",value:o,handleChange:l}),Object(K.jsxs)("div",{className:"buttons",children:[Object(K.jsx)(Y,{type:"submit",children:"SIGN IN"}),Object(K.jsx)(Y,{type:"button",onClick:n,google:"true",children:"SIGN IN WITH GOOGLE"})]})]})]})})),we=(n(77),Object(E.b)(null,(function(e){return{signUp:function(t){return e(function(e){return{type:"SIGN_UP_START",payload:e}}(t))}}}))((function(e){var t=e.signUp,n=Object(f.useState)({displayName:"",email:"",password:"",confirmPassword:""}),c=Object(Ee.a)(n,2),r=c[0],a=c[1],s=r.displayName,i=r.email,o=r.password,l=r.confirmPassword,u=function(e){a(Object(I.a)(Object(I.a)({},r),{},Object(ye.a)({},e.target.name,e.target.value)))};return Object(K.jsxs)("div",{className:"sign-up",children:[Object(K.jsx)("h2",{className:"title",children:"I do not have an account"}),Object(K.jsx)("span",{children:"Sign up with your email and password"}),Object(K.jsxs)("form",{className:"sign-up-form",onSubmit:function(e){e.preventDefault(),o===l?(t({email:i,password:o,displayName:s}),a({displayName:"",email:"",password:"",confirmPassword:""})):alert("Password not Matched")},children:[Object(K.jsx)(Se,{type:"text",name:"displayName",value:s,onChange:u,label:" Name",required:!0}),Object(K.jsx)(Se,{type:"email",name:"email",value:i,onChange:u,label:"Email",required:!0}),Object(K.jsx)(Se,{type:"password",name:"password",value:o,onChange:u,label:"Password",required:!0}),Object(K.jsx)(Se,{type:"password",name:"confirmPassword",value:l,onChange:u,label:"Confirm Password",required:!0}),Object(K.jsx)(Y,{type:"submit",children:"SIGN UP"})]})]})}))),Te=function(){return Object(K.jsxs)("div",{className:"sign-in-sign-up",children:[Object(K.jsx)(_e,{}),Object(K.jsx)(we,{})]})},Ce=(n(78),function(e){return function(t){var n=t.isLoading,c=Object(Q.a)(t,["isLoading"]);return n?Object(K.jsx)("div",{className:"SpinnerOverlay",children:Object(K.jsx)("div",{className:"SpinnerContainer"})}):Object(K.jsx)(e,Object(I.a)({},c))}}),Ae=Ce(ie),ke=Ce(be),Re=Object(T.b)({currentUser:C,isCartHidden:U,isFetching:L}),Ge=Object(y.g)(Object(E.b)(Re,(function(e){return{isUserAuthenticated:function(){return e({type:"CHECKING_USER_PERSISTENCE"})},gettingShopData_Start:function(){return e({type:"GETTING_SHOP_DATA_FROM_FIREBASE_START"})}}}))((function(e){var t=e.currentUser,n=e.isCartHidden,c=e.isFetching,r=e.gettingShopData_Start,a=e.isUserAuthenticated;Object(f.useEffect)((function(){a(),r()}),[a,r]);var s="/king-shopping/";return Object(K.jsxs)(N.a,{children:[Object(K.jsxs)(y.b,{path:"".concat(s),children:[" ",Object(K.jsx)(ce,{currentUser:t,hidden:n})," "]}),Object(K.jsxs)(y.d,{children:[Object(K.jsx)(y.b,{exact:!0,path:"".concat(s),render:function(e){return Object(K.jsx)(Ae,Object(I.a)({isLoading:c},e))}}),Object(K.jsx)(y.b,{path:"".concat(s,"shop"),render:function(e){return Object(K.jsx)(ke,Object(I.a)({isLoading:c},e))}}),Object(K.jsx)(y.b,{path:"".concat(s,"about"),component:ge}),Object(K.jsx)(y.b,{exact:!0,path:"".concat(s,"checkout"),component:xe}),Object(K.jsx)(y.b,{exact:!0,path:"".concat(s,"signIn"),render:function(){return t?Object(K.jsx)(y.a,{to:"".concat(s)}):Object(K.jsx)(Te,{})}})]})]})}))),Ue=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))},Pe=n(23),De=(n(79),n(37)),Fe={currentUser:null,error:null,isSigningIn:!1},Le=n(47),He=function(e,t){return e.find((function(e){return e.id===t.id}))?e.map((function(e){return e.id===t.id?Object(I.a)(Object(I.a)({},e),{},{quantity:e.quantity+1}):e})):[].concat(Object(Le.a)(e),[Object(I.a)(Object(I.a)({},t),{},{quantity:1})])},Me=function(e,t){return e.filter((function(e){return e.id!==t.id}))},We=function(e,t){var n=e.find((function(e){return e.id===t.id}));return 1===t.quantity?Me(e,t):n?e.map((function(e){return e.id===t.id?Object(I.a)(Object(I.a)({},e),{},{quantity:e.quantity-1}):e})):e},qe={hidden:!0,cartItem:[]},Be={shopDataList:{},isFetching:!1,error:""},ze=n(44),Je={key:"root",storage:n.n(ze).a,whitelist:["cart"]},Ke=Object(Pe.b)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object.assign({},e,{currentUser:t.payload});case"SIGN_IN_WITH_GOOGLE_START":case"SIGN_IN_WITH_EMAIL_START":return Object.assign({},e,{isSigningIn:!0,error:null});case"SIGN_IN_SUCCESS":return Object.assign({},e,{isSigningIn:!1,currentUser:t.payload,error:null});case"SIGN_IN_FAILED":return Object.assign({},e,{isSigningIn:!1,error:t.payload});case"SIGN_OUT_SUCCESS":return Object.assign({},e,{currentUser:null});case"SIGN_OUT_FAILED":return Object.assign({},e,{error:t.payload});default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_CART":return Object.assign({},e,{hidden:!e.hidden});case"ADD_ITEMS_TO_CART":return Object.assign({},e,{cartItem:He(e.cartItem,t.payload)});case"CLEAR_ITEM_FROM_CART":return Object.assign({},e,{cartItem:Me(e.cartItem,t.payload)});case"DECERASE_ITEM_FROM_CART":return Object.assign({},e,{cartItem:We(e.cartItem,t.payload)});case"CLEAR_CART":return Object.assign({},e,{cartItem:[]});default:return e}},shopData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GETTING_SHOP_DATA_FROM_FIREBASE_START":return Object.assign({},e,{isFetching:!0});case"GETTING_SHOP_DATA_FROM_FIREBASE_SUCCESS":return Object.assign({},e,{shopDataList:t.payload,isFetching:!1});case"GETTING_SHOP_DATA_FROM_FIREBASE_FAILED":return Object.assign({},e,{error:t.payload,isFetching:!1});default:return e}}}),Ve=Object(De.a)(Je,Ke),Qe=n(48),Ye=n(11),Xe=n(28);n(82),n(86);Xe.a.initializeApp({apiKey:"AIzaSyB9yhs9BJItMJJLQ93DAugkwQPHS-e3p3U",authDomain:"crown-db-69.firebaseapp.com",projectId:"crown-db-69",storageBucket:"crown-db-69.appspot.com",messagingSenderId:"123117840144",appId:"1:123117840144:web:064bcf4b1182a5aa89e795",measurementId:"G-XBHL6EW0FG"});var $e=Xe.a.auth(),Ze=Xe.a.firestore(),et=new Xe.a.auth.GoogleAuthProvider,tt=function(){var e=Object(Ne.a)(Ie.a.mark((function e(t,n){var c,r,a,s;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=3;break}return console.log("No user found"),e.abrupt("return");case 3:return c=Ze.doc("users/".concat(t.uid)),e.next=6,c.get();case 6:if(e.sent.exists){e.next=18;break}return r=t.displayName,a=t.email,s=new Date,e.prev=10,e.next=13,c.set(Object(I.a)({displayName:r,email:a,createdAt:s},n));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(10),console.log("eoorr",e.t0.message);case 18:return e.abrupt("return",c);case 19:case"end":return e.stop()}}),e,null,[[10,15]])})));return function(t,n){return e.apply(this,arguments)}}(),nt=function(){var e=Object(Ne.a)(Ie.a.mark((function e(){var t,n,c,r;return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Ze.collection("shopData"),e.next=3,t.get();case 3:return n=e.sent,c=n.docs.map((function(e){var t=e.data(),n=t.title,c=t.items,r=t.imgUrl;return{routeName:encodeURI(n.toLowerCase()),id:e.id,title:n,items:c,imgUrl:r}})),r=c.reduce((function(e,t){return e[t.title.toLowerCase()]=t,e}),{}),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ct=(Xe.a,Ie.a.mark(at)),rt=Ie.a.mark(st);function at(){var e;return Ie.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Ye.b)(nt);case 3:return e=t.sent,t.next=6,Object(Ye.c)(w(e));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Ye.c)({type:"GETTING_SHOP_DATA_FROM_FIREBASE_FAILED",paload:t.t0.message});case 12:case"end":return t.stop()}}),ct,null,[[0,8]])}function st(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("GETTING_SHOP_DATA_FROM_FIREBASE_START",at);case 2:case"end":return e.stop()}}),rt)}var it=Ie.a.mark(ht),ot=Ie.a.mark(ft),lt=Ie.a.mark(xt),ut=Ie.a.mark(gt),dt=Ie.a.mark(vt),jt=Ie.a.mark(It),bt=Ie.a.mark(Nt),pt=Ie.a.mark(yt),Ot=Ie.a.mark(Et),mt=Ie.a.mark(St);function ht(){var e,t,n;return Ie.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,new Promise((function(e,t){var n=$e.onAuthStateChanged((function(t){n(),e(t)}),t)}));case 2:return e=c.sent,c.next=5,tt(e);case 5:if(!(t=c.sent)){c.next=12;break}return c.next=9,t.get();case 9:return n=c.sent,c.next=12,Object(Ye.c)(S(Object(I.a)({id:n.id},n.data())));case 12:case"end":return c.stop()}}),it)}function ft(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("CHECKING_USER_PERSISTENCE",ht);case 2:case"end":return e.stop()}}),ot)}function xt(){var e,t,n,c;return Ie.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,$e.signInWithPopup(et);case 3:return e=r.sent,t=e.user,r.next=7,tt(t);case 7:return n=r.sent,r.next=10,n.get();case 10:return c=r.sent,r.next=13,Object(Ye.c)(S(Object(I.a)({id:c.id},c.data())));case 13:r.next=19;break;case 15:return r.prev=15,r.t0=r.catch(0),r.next=19,Object(Ye.c)(_(r.t0.message));case 19:case"end":return r.stop()}}),lt,null,[[0,15]])}function gt(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("SIGN_IN_WITH_GOOGLE_START",xt);case 2:case"end":return e.stop()}}),ut)}function vt(e){var t,n,c,r,a,s,i;return Ie.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.payload,n=t.email,c=t.password,o.prev=2,o.next=5,$e.signInWithEmailAndPassword(n,c);case 5:return r=o.sent,a=r.user,o.next=9,tt(a);case 9:return s=o.sent,o.next=12,s.get();case 12:return i=o.sent,o.next=15,Object(Ye.c)(S(Object(I.a)({id:i.id},i.data())));case 15:o.next=21;break;case 17:return o.prev=17,o.t0=o.catch(2),o.next=21,Object(Ye.c)(_(o.t0.message));case 21:case"end":return o.stop()}}),dt,null,[[2,17]])}function It(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("SIGN_IN_WITH_EMAIL_START",vt);case 2:case"end":return e.stop()}}),jt)}function Nt(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,$e.signOut();case 3:return e.next=5,Object(Ye.c)({type:"SIGN_OUT_SUCCESS"});case 5:e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(0),e.next=11,Object(Ye.c)({type:"SIGN_OUT_FAILED",payload:e.t0.message});case 11:case"end":return e.stop()}}),bt,null,[[0,7]])}function yt(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("SIGN_OUT_START",Nt);case 2:case"end":return e.stop()}}),pt)}function Et(e){var t,n,c,r,a,s,i,o;return Ie.a.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return t=e.payload,l.prev=1,n=t.email,c=t.password,r=t.displayName,l.next=5,$e.createUserWithEmailAndPassword(n,c);case 5:return a=l.sent,s=a.user,l.next=9,tt(s,{displayName:r});case 9:return i=l.sent,l.next=12,i.get();case 12:return o=l.sent,l.next=15,Object(Ye.c)(S(Object(I.a)({id:o.id},o.data())));case 15:l.next=21;break;case 17:return l.prev=17,l.t0=l.catch(1),l.next=21,Object(Ye.c)(_(l.t0.message));case 21:case"end":return l.stop()}}),Ot,null,[[1,17]])}function St(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("SIGN_UP_START",Et);case 2:case"end":return e.stop()}}),mt)}var _t=Ie.a.mark(Tt),wt=Ie.a.mark(Ct);function Tt(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.c)({type:"CLEAR_CART"});case 2:case"end":return e.stop()}}),_t)}function Ct(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.d)("SIGN_OUT_SUCCESS",Tt);case 2:case"end":return e.stop()}}),wt)}var At=Ie.a.mark(kt);function kt(){return Ie.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Ye.a)([Object(Ye.b)(ft),Object(Ye.b)(st),Object(Ye.b)(gt),Object(Ye.b)(It),Object(Ye.b)(yt),Object(Ye.b)(Ct),Object(Ye.b)(St)]);case 2:case"end":return e.stop()}}),At)}var Rt=Object(Qe.a)(),Gt=[Rt];var Ut=Object(Pe.d)(Ve,Pe.a.apply(void 0,Gt));Rt.run(kt);var Pt=Object(De.b)(Ut),Dt=n(46);v.a.render(Object(K.jsx)(E.a,{store:Ut,children:Object(K.jsx)(N.a,{children:Object(K.jsx)(Dt.a,{persistor:Pt,children:Object(K.jsx)(x.a.StrictMode,{children:Object(K.jsx)(Ge,{})})})})}),document.getElementById("root")),Ue()}},[[85,1,2]]]);
//# sourceMappingURL=main.9df0ebb4.chunk.js.map