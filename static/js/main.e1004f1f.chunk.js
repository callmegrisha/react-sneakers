(this["webpackJsonpreact-sneakers"]=this["webpackJsonpreact-sneakers"]||[]).push([[0],{19:function(e,t,c){e.exports={overlay:"Drawer_overlay__ZB98X",overlayVisible:"Drawer_overlayVisible__1tvlX",drawer:"Drawer_drawer__1v_J5",items:"Drawer_items__1Rlxm"}},24:function(e,t,c){e.exports={card:"Card_card__26Y-v",favorite:"Card_favorite__c7fOa",plus:"Card_plus__1Ck0Z"}},42:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),n=c(14),s=c(34),i=c.n(s),l=(c(42),c(11)),o=c(12),d=c(8),j=c.n(d),u=c(13),b=c(4),x=c(2),m=c(5),h=c.n(m),f=a.a.createContext({}),p=function(){var e=a.a.useContext(f),t=e.cartItems,c=e.setCartItems,r=t.reduce((function(e,t){return e+t.price}),0);return{cartItems:t,setCartItems:c,totalPrice:r}},O=c(1);var v=function(e){var t=p().totalPrice;return Object(O.jsxs)("header",{className:"d-flex justify-between align-center p-45",children:[Object(O.jsx)(n.b,{to:"/react-sneakers",children:Object(O.jsxs)("div",{className:"headerLeft d-flex align-center",children:[Object(O.jsx)("img",{width:40,height:40,src:"img/logo.png",alt:""}),Object(O.jsxs)("div",{className:"headerInfo",children:[Object(O.jsx)("h3",{className:"text-uppercase",children:"React Sneakers"}),Object(O.jsx)("span",{children:"\u041c\u0430\u0433\u0430\u0437\u0438\u043d \u043b\u0443\u0447\u0448\u0438\u0445 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a"})]})]})}),Object(O.jsxs)("ul",{className:"headerRight d-flex align-center",children:[Object(O.jsxs)("li",{className:"mr-30 d-flex align-center cu-p",onClick:e.onClickCart,children:[Object(O.jsx)("img",{src:"img/cart.svg",alt:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(O.jsxs)("span",{children:[t," \u0440\u0443\u0431."]})]}),Object(O.jsx)("li",{className:"mr-30",children:Object(O.jsx)(n.b,{to:"/favorites",children:Object(O.jsx)("img",{width:18,height:18,src:"img/favorite.svg",alt:"\u0417\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})})}),Object(O.jsx)("li",{children:Object(O.jsx)(n.b,{to:"/orders",children:Object(O.jsx)("img",{src:"img/user.svg",alt:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c"})})})]})]})};var g=function(e){var t=e.image,c=e.title,r=e.description,n=a.a.useContext(f).setCartOpened;return Object(O.jsxs)("div",{className:"cartEmpty d-flex align-center justify-center flex-column flex",children:[Object(O.jsx)("img",{className:"mb-20",width:"120",height:"120",src:t,alt:"Empty"}),Object(O.jsx)("h2",{children:c}),Object(O.jsx)("p",{className:"opacity-6",children:r}),Object(O.jsxs)("button",{className:"greenButton",onClick:function(){return n(!1)},children:[Object(O.jsx)("img",{src:"img/arrow.svg",alt:"Arrow"}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430\u0437\u0430\u0434"]})]})},k=c(19),N=c.n(k),w=function(e){return new Promise((function(t){return setTimeout(t,e)}))};var y=function(e){var t=e.onClose,c=e.onRemove,r=e.items,n=void 0===r?[]:r,s=e.opened,i=p(),l=i.cartItems,o=i.setCartItems,d=i.totalPrice,x=a.a.useState(!1),m=Object(b.a)(x,2),f=m[0],v=m[1],k=a.a.useState(!1),y=Object(b.a)(k,2),C=y[0],I=y[1],_=a.a.useState(null),S=Object(b.a)(_,2),A=S[0],F=S[1],T=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,I(!0),e.next=4,h.a.post("https://613a4e511fcce10017e78e42.mockapi.io/order",{items:l});case 4:t=e.sent,c=t.data,F(c.id),v(!0),o([]),r=0;case 10:if(!(r<l.length)){e.next=19;break}return a=l[r],e.next=14,h.a.delete("https://613a4e511fcce10017e78e42.mockapi.io/cart/"+a.id);case 14:return e.next=16,w(1e3);case 16:r++,e.next=10;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0441\u043e\u0437\u0434\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437");case 24:I(!1);case 25:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(){return e.apply(this,arguments)}}();return Object(O.jsx)("div",{className:"".concat(N.a.overlay," ").concat(s?N.a.overlayVisible:""),children:Object(O.jsxs)("div",{className:N.a.drawer,children:[Object(O.jsxs)("h2",{className:"d-flex justify-between mb-30",children:["\u041a\u043e\u0440\u0437\u0438\u043d\u0430",Object(O.jsx)("img",{className:"cu-p",src:"img/btn-remove.svg",alt:"Close",onClick:t})]}),n.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"items",children:n.map((function(e){return Object(O.jsxs)("article",{className:"cartItem d-flex align-center mb-20",children:[Object(O.jsx)("div",{style:{backgroundImage:"url(".concat(e.imgUrl,")")},className:"cartItemImg"}),Object(O.jsxs)("div",{className:"mr-20 flex",children:[Object(O.jsx)("span",{className:"mb-5",children:e.title}),Object(O.jsxs)("b",{children:[e.price," \u0440\u0443\u0431."]})]}),Object(O.jsx)("img",{className:"removeBtn",src:"img/btn-remove.svg",alt:"Remove",onClick:function(){return c(e.id)}})]},e.id)}))}),Object(O.jsxs)("div",{className:"cartTotalBlock",children:[Object(O.jsxs)("ul",{children:[Object(O.jsxs)("li",{className:"d-flex",children:[Object(O.jsx)("span",{children:"\u0418\u0442\u043e\u0433\u043e:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d," \u0440\u0443\u0431."]})]}),Object(O.jsxs)("li",{className:"d-flex",children:[Object(O.jsx)("span",{children:"\u041d\u0430\u043b\u043e\u0433 5%:"}),Object(O.jsx)("div",{}),Object(O.jsxs)("b",{children:[d/100*5," \u0440\u0443\u0431."]})]})]}),Object(O.jsxs)("button",{className:"greenButton",type:"button",disabled:C,onClick:T,children:["\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"," ",Object(O.jsx)("img",{src:"img/arrow-right.svg",alt:"Arrow Right"})]})]})]}):Object(O.jsx)(g,{image:f?"img/completed-order.png":"img/empty-cart.png",title:f?"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d!":"\u041a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430\u044f",description:f?"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437 #".concat(A," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043a\u0443\u0440\u044c\u0435\u0440\u0441\u043a\u043e\u0439 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0435"):"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0445\u043e\u0442\u044f \u0431\u044b \u043e\u0434\u043d\u0443 \u043f\u0430\u0440\u0443 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043e\u043a, \u0447\u0442\u043e\u0431\u044b \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u043a\u0430\u0437."})]})})},C=c(37),I=c(24),_=c.n(I);var S=function(e){var t=e.id,c=(e.parentId,e.onFavorite),r=e.imgUrl,n=e.title,s=e.price,i=e.onPlus,l=e.favorited,o=void 0!==l&&l,d=e.loading,j=void 0!==d&&d,u=a.a.useContext(f).isItemAdded,x=a.a.useState(o),m=Object(b.a)(x,2),h=m[0],p=m[1],v={id:t,parentId:t,imgUrl:r,title:n,price:s};return Object(O.jsx)("article",{className:_.a.card,children:j?Object(O.jsxs)(C.a,{speed:2,width:150,height:188,viewBox:"0 0 150 188",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb",children:[Object(O.jsx)("rect",{x:"0",y:"0",rx:"10",ry:"10",width:"150",height:"90"}),Object(O.jsx)("rect",{x:"389",y:"73",rx:"0",ry:"0",width:"0",height:"1"}),Object(O.jsx)("rect",{x:"0",y:"126",rx:"3",ry:"3",width:"93",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"107",rx:"3",ry:"3",width:"150",height:"15"}),Object(O.jsx)("rect",{x:"0",y:"163",rx:"8",ry:"8",width:"80",height:"24"}),Object(O.jsx)("rect",{x:"118",y:"155",rx:"8",ry:"8",width:"32",height:"32"})]}):Object(O.jsxs)(O.Fragment,{children:[c&&Object(O.jsx)("div",{className:"favorite",onClick:function(){c(v),p(!h)},children:Object(O.jsx)("img",{src:h?"img/heart-liked.svg":"img/heart-unliked.svg",alt:"Unlicked"})}),Object(O.jsx)("img",{width:133,height:112,src:r,alt:"Sneakers"}),Object(O.jsx)("h3",{children:n}),Object(O.jsxs)("div",{className:"d-flex justify-between align-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("span",{children:"\u0426\u0435\u043d\u0430: "}),Object(O.jsxs)("b",{children:[s," \u0440\u0443\u0431."]})]}),i&&Object(O.jsx)("img",{className:_.a.plus,src:u(t)?"img/btn-checked.svg":"img/btn-plus.svg",alt:"Plus","aria-label":"Add sneaker",onClick:function(){i(v)}})]})]})})};var A=function(e){var t=e.items,c=e.searchValue,r=e.setSearchValue,a=e.onChangeSearchInput,n=e.onAddToFavorite,s=e.onAddToCart,i=e.isLoading;return Object(O.jsxs)("div",{className:"content p-45",children:[Object(O.jsxs)("div",{className:"d-flex align-center justify-between mb-40",children:[Object(O.jsx)("h1",{children:c?'\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443: "'.concat(c,'"'):"\u0412\u0441\u0435 \u043a\u0440\u043e\u0441\u0441\u043e\u0432\u043a\u0438"}),Object(O.jsxs)("div",{className:"search-block d-flex",children:[Object(O.jsx)("img",{src:"img/search.svg",alt:"Search"}),Object(O.jsx)("input",{type:"search",placeholder:"\u041f\u043e\u0438\u0441\u043a...",value:c,onChange:a}),c&&Object(O.jsx)("img",{className:"search-block-clear",src:"img/close.svg",alt:"Clear",onClick:function(){r("")}})]})]}),Object(O.jsx)("div",{className:"d-flex flex-wrap align-center justify-between",children:function(){var e=t.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}));return(i?Object(o.a)(Array(10)):e).map((function(e,t){return Object(O.jsx)(S,Object(l.a)({onFavorite:function(e){return n(e)},onPlus:function(e){return s(e)},loading:i},e),t)}))}()})]})};var F=function(){var e=a.a.useContext(f),t=e.favorites,c=e.onAddToFavorite;return Object(O.jsxs)("div",{className:"content p-45",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u043b\u0430\u0434\u043a\u0438"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap align-center justify-between",children:t.map((function(e,t){return Object(r.createElement)(S,Object(l.a)(Object(l.a)({},e),{},{key:t,favorited:!0,onFavorite:c}))}))})]})};var T=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState(!0),s=Object(b.a)(n,2),i=s[0],d=s[1];return a.a.useEffect((function(){Object(u.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.a.get("https://613a4e511fcce10017e78e42.mockapi.io/order");case 3:t=e.sent,c=t.data,r(c.reduce((function(e,t){return[].concat(Object(o.a)(e),Object(o.a)(t.items))}),[])),d(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()}),[]),Object(O.jsxs)("div",{className:"content p-45",children:[Object(O.jsx)("div",{className:"d-flex align-center justify-between mb-40",children:Object(O.jsx)("h1",{children:"\u041c\u043e\u0438 \u0437\u0430\u043a\u0430\u0437\u044b"})}),Object(O.jsx)("div",{className:"d-flex flex-wrap align-center justify-between",children:(i?Object(o.a)(Array(10)):c).map((function(e,t){return Object(O.jsx)(S,Object(l.a)({loading:i},e),t)}))})]})};var P=function(){var e=a.a.useState([]),t=Object(b.a)(e,2),c=t[0],r=t[1],n=a.a.useState([]),s=Object(b.a)(n,2),i=s[0],d=s[1],m=a.a.useState([]),p=Object(b.a)(m,2),g=p[0],k=p[1],N=a.a.useState(""),w=Object(b.a)(N,2),C=w[0],I=w[1],_=a.a.useState(!1),S=Object(b.a)(_,2),P=S[0],B=S[1],R=a.a.useState(!1),V=Object(b.a)(R,2),E=V[0],L=V[1];a.a.useEffect((function(){function e(){return(e=Object(u.a)(j.a.mark((function e(){var t,c,a,n,s;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([h.a.get("https://613a4e511fcce10017e78e42.mockapi.io/cart"),h.a.get("https://613a4e511fcce10017e78e42.mockapi.io/favorites"),h.a.get("https://613a4e511fcce10017e78e42.mockapi.io/items")]);case 3:t=e.sent,c=Object(b.a)(t,3),a=c[0],n=c[1],s=c[2],L(!1),d(a.data),k(n.data),r(s.data),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u043f\u0440\u043e\u0441\u0435 \u0434\u0430\u043d\u043d\u044b\u0445");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var D=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!(c=i.find((function(e){return Number(e.parentId)===Number(t.id)})))){e.next=8;break}return d((function(e){return e.filter((function(e){return Number(e.parentId)!==Number(t.id)}))})),e.next=6,h.a.delete("https://613a4e511fcce10017e78e42.mockapi.io/cart/".concat(c.id));case 6:e.next=14;break;case 8:return d((function(e){return[].concat(Object(o.a)(e),[t])})),e.next=11,h.a.post("https://613a4e511fcce10017e78e42.mockapi.io/cart",t);case 11:r=e.sent,a=r.data,d((function(e){return e.map((function(e){return e.parentId===a.parentId?Object(l.a)(Object(l.a)({},e),{},{id:a.id}):e}))}));case 14:e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[0,16]])})));return function(t){return e.apply(this,arguments)}}(),U=function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g.find((function(e){return Number(e.id)===Number(t.id)}))){e.next=6;break}h.a.delete("https://613a4e511fcce10017e78e42.mockapi.io/favorites/".concat(t.id)),k((function(e){return e.filter((function(e){return Number(e.id)!==Number(t.id)}))})),e.next=11;break;case 6:return e.next=8,h.a.post("https://613a4e511fcce10017e78e42.mockapi.io/favorites",t);case 8:c=e.sent,r=c.data,k((function(e){return[].concat(Object(o.a)(e),[r])}));case 11:e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert("\u041d\u0435 \u0443\u0434\u0430\u043b\u043e\u0441\u044c \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0444\u0430\u0432\u043e\u0440\u0438\u0442\u044b"),console.error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsx)(f.Provider,{value:{items:c,cartItems:i,favorites:g,isItemAdded:function(e){return i.some((function(t){return Number(t.parentId)===Number(e)}))},onAddToFavorite:U,onAddToCart:D,setCartOpened:B,setCartItems:d},children:Object(O.jsxs)("div",{className:"wrapper",children:[Object(O.jsx)(y,{items:i,onClose:function(){return B(!1)},onRemove:function(e){try{h.a.delete("https://613a4e511fcce10017e78e42.mockapi.io/cart/".concat(e)),d((function(t){return t.filter((function(t){return Number(t.id)!==Number(e)}))}))}catch(t){alert("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0443\u0434\u0430\u043b\u0435\u043d\u0438\u0438 \u0438\u0437 \u043a\u043e\u0440\u0437\u0438\u043d\u044b"),console.error(t)}},opened:P}),Object(O.jsx)(v,{onClickCart:function(){return B(!0)}}),Object(O.jsx)(x.a,{path:"/react-sneakers",exact:!0,children:Object(O.jsx)(A,{items:c,cartItems:i,searchValue:C,setSearchValue:I,onChangeSearchInput:function(e){I(e.target.value)},onAddToFavorite:U,onAddToCart:D,isLoading:E})}),Object(O.jsx)(x.a,{path:"/favorites",exact:!0,children:Object(O.jsx)(F,{onAddToFavorite:U})}),Object(O.jsx)(x.a,{path:"/orders",exact:!0,children:Object(O.jsx)(T,{})})]})})};c(69);i.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(n.a,{children:Object(O.jsx)(P,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.e1004f1f.chunk.js.map