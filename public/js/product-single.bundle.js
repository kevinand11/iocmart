(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{113:function(t,s,e){"use strict";e.r(s);var n=e(1);function o(t,s){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),e.push.apply(e,n)}return e}function i(t){for(var s=1;s<arguments.length;s++){var e=null!=arguments[s]?arguments[s]:{};s%2?o(e,!0).forEach((function(s){r(t,s,e[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(e).forEach((function(s){Object.defineProperty(t,s,Object.getOwnPropertyDescriptor(e,s))}))}return t}function r(t,s,e){return s in t?Object.defineProperty(t,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[s]=e,t}var a={name:"SingleProduct",data:function(){return{id:null,post:{},orderCount:1}},methods:i({},Object(n.b)(["addToCart","removeFromCart","setIntended","changeQuantity"]),{fetchPost:function(){var t=this;return axios.get(this.getRoutes.posts.base+this.id).then((function(s){t.post=s.data.data})).catch((function(){new toast({type:"error",title:"Error fetching post!"})}))},reduceCount:function(){this.orderCount>1&&this.orderCount--},increaseCount:function(){this.orderCount<this.post.quantity&&this.orderCount++},makeOrder:function(){var t=this;if(!this.isLoggedIn)return this.setIntended(this.$route.fullPath),this.$router.push("/login"),new toast({type:"warning",title:"Login to continue"});this.isInCart(this.post.id)?this.changeQuantity(this.post.id,this.orderCount):this.addToCart({post_id:this.post.id,quantity:this.orderCount}).then((function(){return t.post.is_ordered_by=!0}))},deleteOrder:function(){var t=this;if(!this.isLoggedIn)return this.setIntended(this.$route.fullPath),this.$router.push("/login"),new toast({type:"warning",title:"Login to continue"});this.removeFromCart(this.post.id).then((function(){t.orderCount=1,t.post.is_ordered_by=!1}))}}),computed:i({},Object(n.c)(["getRoutes","isInCart","getOrderFromPostId","isLoggedIn","getSymbol"]),{hasImage:function(){return this.post.pictures&&this.post.pictures.length>0},hasImages:function(){return this.post.pictures&&this.post.pictures.length>1},getFeaturedImage:function(){return this.post.pictures[0].uri},shouldDisable:function(){return this.post.is_ordered_by&&this.orderCount===this.getOrderFromPostId(this.post.id).quantity},hasFetchedPost:function(){return Object.keys(this.post).length>0}}),mounted:function(){var t=this;this.id=this.$route.params.id,this.fetchPost().then((function(){var s=t.getOrderFromPostId(t.post.id);t.orderCount=s&&s.quantity?s.quantity:1}))}},c=(e(70),e(0)),d={name:"ProductSingle",components:{single:Object(c.a)(a,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.hasFetchedPost?e("div",{staticClass:"row"},[t.hasImage?e("div",{staticClass:"col-md-4"},[e("img",{staticClass:"w-100",attrs:{src:t.getFeaturedImage,alt:""}}),t._v(" "),t.hasImages?e("div",{staticClass:"row"},t._l(t.post.pictures,(function(t){return e("div",{key:t.id,staticClass:"col-3"},[e("img",{staticClass:"w-100",attrs:{src:t.uri,alt:""}})])})),0):t._e()]):t._e(),t._v(" "),e("div",{staticClass:"col-md-8"},[e("h3",{staticClass:"post_name"},[t._v(t._s(t.post.name))]),t._v(" "),e("hr"),t._v(" "),e("h5",{staticClass:"post_price"},[e("span",{domProps:{innerHTML:t._s(t.getSymbol)}}),t._v(t._s(t._f("discount")(t.post.price,t.post.discount))+" "),t.post.discount?e("span",{staticClass:"post_discount"},[e("span",{domProps:{innerHTML:t._s(t.getSymbol)}}),t._v(t._s(t._f("discount")(t.post.price)))]):t._e()]),t._v(" "),e("h5",[e("span",{staticClass:"bold"},[t._v("Available in stock: ")]),e("span",{staticClass:"lighter"},[t._v(t._s(t.post.quantity))])]),t._v(" "),e("h5",[e("span",{staticClass:"bold"},[t._v("Category: ")]),e("span",{staticClass:"lighter"},[t._v(t._s(t.post.category?t.post.category.name:null))])]),t._v(" "),e("h5",[t._v(t._s(t.post.description))]),t._v(" "),e("hr"),t._v(" "),e("div",{staticClass:"d-flex justify-content-between"},[e("div",{staticClass:"d-flex align-items-center"},[e("button",{staticClass:"btn btn-info mr-2",attrs:{disabled:t.orderCount<2},on:{click:t.reduceCount}},[t._v("-")]),t._v(" "),e("span",[t._v(t._s(t.orderCount))]),t._v(" "),e("button",{staticClass:"btn btn-info ml-2",attrs:{disabled:t.orderCount>=t.post.quantity},on:{click:t.increaseCount}},[t._v("+")])]),t._v(" "),e("div",{staticClass:"d-flex align-items-center"},[e("button",{staticClass:"btn btn-info mr-2",attrs:{disabled:t.shouldDisable},on:{click:t.makeOrder}},[t._v(t._s(t.post.is_ordered_by?"Change Quantity":"Add To Cart")+" "),e("i",{staticClass:"fas fa-shopping-basket d-none d-sm-inline"})]),t._v(" "),t.post.is_ordered_by?e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:t.deleteOrder}},[t._v("Remove "),e("i",{staticClass:"fas fa-trash d-none d-sm-inline"})]):t._e()])])]),t._v(" "),t.post.store?e("div",{staticClass:"col-12 mt-4 mb-3"},[e("h5",{staticClass:"lead text-primary"},[t._v("Store Information")]),t._v(" "),e("span",{staticClass:"text-uppercase font-weight-bold"},[t._v(t._s(t.post.store.name))]),t._v(" "),e("div",{staticClass:"d-flex justify-content-between flex-column"},[e("span",{staticClass:"lead"},[t._v("Phone: "+t._s(t.post.store.phone.phone))]),t._v(" "),e("span",{staticClass:"lead"},[t._v("Email: "+t._s(t.post.store.email))])])]):t._e()]):t._e()}),[],!1,null,"d7327036",null).exports}},u=Object(c.a)(d,(function(){var t=this.$createElement,s=this._self._c||t;return s("div",[s("single")],1)}),[],!1,null,"246b9afe",null);s.default=u.exports},19:function(t,s,e){var n=e(71);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(4)(n,o);n.locals&&(t.exports=n.locals)},70:function(t,s,e){"use strict";var n=e(19);e.n(n).a},71:function(t,s,e){(t.exports=e(3)(!1)).push([t.i,"\n.post_name[data-v-d7327036]{\n    font-size: 1.714rem;\n    font-weight: bold;\n    color: #000;\n}\n.post_price[data-v-d7327036]{\n    font-size: 1.714rem;\n    color: #FF4858;\n}\n.post_discount[data-v-d7327036]{\n    font-size: 1.4rem;\n    color: #777;\n    text-decoration: line-through;\n}\n.bold[data-v-d7327036]{\n    font-size: 1.4rem;\n}\n.lighter[data-v-d7327036]{\n    font-weight: lighter;\n    font-size: 1.1rem;\n}\n",""])}}]);