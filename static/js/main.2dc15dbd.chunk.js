(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/always.84200631.jpg"},function(e,t,a){e.exports=a.p+"static/media/borntodie.5ac53ad0.jpg"},function(e,t,a){e.exports=a.p+"static/media/burn.66448d1e.jpg"},function(e,t,a){e.exports=a.p+"static/media/closer.124d7783.jpg"},function(e,t,a){e.exports=a.p+"static/media/dusktilldawn.6bc582bb.jpg"},function(e,t,a){e.exports=a.p+"static/media/electriclove.b92fb6c6.jpg"},function(e,t,a){e.exports=a.p+"static/media/faded.17be233d.jpg"},function(e,t,a){e.exports=a.p+"static/media/itaintme.3563e092.jpg"},function(e,t,a){e.exports=a.p+"static/media/paradisecity.f1abae04.jpg"},function(e,t,a){e.exports=a.p+"static/media/style.db483dce.jpg"},function(e,t,a){e.exports=a(25)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),i=a.n(c),s=(a(24),a(1)),o=a(2),l=a(4),m=a(3),p=a(5),d=a(8),u=a.n(d),g=a(9),f=a.n(g),h=a(10),b=a.n(h),v=a(11),E=a.n(v),C=a(12),y=a.n(C),j=a(13),k=a.n(j),w=a(14),N=a.n(w),O=a(15),x=a.n(O),S=a(16),R=a.n(S),T=a(17),L=a.n(T),A=[{name:"Always Remember Us This Way",artist:"Lady Gaga",date:"2018",price:"24.55",image:u.a},{name:"Born To Die",artist:"Lana Del Rey",date:"2012",price:"16.20",image:f.a},{name:"Burn",artist:"Ellie Goulding",date:"2013",price:"16.44",image:b.a},{name:"Closer",artist:"The Chainsmokers",date:"2016",price:"20.00",image:E.a},{name:"Dusk Till Dawn",artist:"Zayn Malik",date:"2018",price:"18.99",image:y.a},{name:"Electric Love",artist:"Borns",date:"2015",price:"22.00",image:k.a},{name:"Faded",artist:"Alan Walker",date:"2015",price:"20.55",image:N.a},{name:"It Ain't Me",artist:"KYZO & Selena",date:"2017",price:"25.55",image:x.a},{name:"Paradise City",artist:"Guns 'n Roses",date:"1987",price:"12.55",image:R.a},{name:"Style",artist:"Taylor Swift",date:"2014",price:"20.00",image:L.a}],B=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).toggleCart=function(){document.getElementById("cart").style.display=a.state.toggleCart?"none":"block",a.setState({toggleCart:!a.state.toggleCart})},a.renderCart=function(){return a.props.cart.map(function(e,t){return r.a.createElement("div",{className:"cart-item",key:e.name},r.a.createElement("span",{className:"cart-song-name"},e.name),r.a.createElement("br",null),r.a.createElement("span",{className:"cart-song-artist"},e.artist),r.a.createElement("span",{className:"cart-song-price"},"$",e.price),r.a.createElement("span",{className:"cart-song-remove",onClick:function(){return a.props.onSongRemove(t)}},"\xa0 x"),r.a.createElement("hr",{style:{border:"0.5px solid #5cb8ff",width:"100%"}}))})},a.state={toggleCart:!1},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-main"},r.a.createElement("span",{className:"brand"},"MU$IC"),r.a.createElement("div",{className:"cart"},r.a.createElement("i",{className:"fa fa-shopping-cart",style:D,onClick:this.toggleCart},r.a.createElement("sup",{className:"cart-item-count"},this.props.cart.length)),r.a.createElement("div",{className:"cart-contents",id:"cart"},this.renderCart(),r.a.createElement("div",{className:"cart-checkout"},r.a.createElement("span",{className:"cart-total"},"Total: $",this.props.total),0===this.props.cart.length?null:r.a.createElement("button",{onClick:function(){return window.location.reload()},className:"checkout"},"CHECKOUT")))))}}]),t}(n.Component),D={fontSize:"3.6vh",color:"#cc9200",marginRight:"0.4vw"},H=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(c)))).renderSongsList=function(){return a.props.songsList.map(function(e){return r.a.createElement("div",{className:"song-card",key:e.name},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("span",{className:"name"},e.name),r.a.createElement("span",{className:"price"},"$",e.price),r.a.createElement("p",null,"by ",r.a.createElement("span",{className:"artist"},e.artist)),r.a.createElement("button",{className:"add-to-cart",onClick:function(){return a.props.onCartClick(e)}},"ADD TO CART"))})},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"songs-list"},this.renderSongsList())}}]),t}(n.Component),$=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).onSongRemoveHandler=function(e){var t=a.state.cart;t.splice(e,1),a.setState({cart:t})},a.onCartClickHandler=function(e){var t=a.state.cart;t.push(e);for(var n=0;n<t.length;n++)for(var r=n+1;r<t.length;r++)if(t[n].name===t[r].name)return void t.splice(r,1);var c=t;c=c.reduce(function(e,t){return e+parseFloat(t.price)},0).toFixed(2),a.setState({cart:t,total:c})},a.state={cart:[],total:0},a}return Object(p.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(B,{cart:this.state.cart,onSongRemove:this.onSongRemoveHandler,total:this.state.total}),r.a.createElement(H,{songsList:A,onCartClick:this.onCartClickHandler}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement($,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.2dc15dbd.chunk.js.map