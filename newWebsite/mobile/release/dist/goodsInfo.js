webpackJsonp([13,14],{182:function(t,e,o){var i,n,a={};o(183),i=o(185),n=o(186),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})},183:function(t,e,o){var i=o(184);"string"==typeof i&&(i=[[t.id,i,""]]);o(22)(i,{});i.locals&&(t.exports=i.locals)},184:function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".comments-none{padding:3rem 0;text-align:center}.good-comment{background:#fff;overflow:hidden;margin-top:.4rem}.good-comment .info{border-bottom:1px solid #f4f4f4;padding:0 .65rem;height:2.4rem}.good-comment .info a{color:#b2b2b2;line-height:2.3rem;height:2.4rem;display:block}.good-comment .info a span{font-size:.75rem;display:inline-block}.good-comment-text{float:right}.comment-list{padding:0 .65rem;overflow:hidden}.comment-list li{padding:.65rem 0;overflow:hidden;border-bottom:1px solid #e8e8e8}.comment-list .comment-item{overflow:hidden}.comment-list .comment-item .item-left{float:left;width:18%;text-align:center}.comment-list .comment-item .item-right{float:left;width:82%}.comment-img{padding-top:.5rem}.comment-img span{display:inline-block}.comment-item .item-left span{display:inline-block;text-align:center;width:82%}.comment-item .item-left span img{max-width:88px;width:100%}.uaer-name{font-size:.75rem;padding-right:.5rem}.comment-date{float:right;color:#b5b5b5;font-size:.65rem}.comment-container p{font-size:.72rem}.comment-img{display:-webkit-box;display:-ms-flexbox;display:flex;display:-webkit-flex}.comment-img .item-img{width:25%;margin-right:.4rem;display:block}",""])},185:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(151),a=i(n),s=o(31);e.default={vuex:{actions:{setBuyOption:s.setBuyOption}},ready:function(){this.loadComments()},data:function(){return{loading:!1,loadingText:"加载中...",loadTry:0,gid:this.$route.params.id,page:1,comments:[]}},props:{limit:{type:Number},commentList:{}},watch:{commentList:function(t){this.comments=t}},methods:{loadComments:function(){this.loading=!0,parseInt(this.gid)?this.goodsComments():void 0==this.commentList&&this.topicComments()},goodsComments:function(){var t=this,e={gid:this.gid,limit:this.limit?this.limit:5,page:this.page};this.$http.post("/Goods/getGoodComment.json",e).then(function(e){if(e=e.json(),1==e.status){var o=!0,i=!1,n=void 0;try{for(var s,r=(0,a.default)(e.data);!(o=(s=r.next()).done);o=!0){var d=s.value;t.comments.push(d)}}catch(t){i=!0,n=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw n}}t.$nextTick(function(){return t.limit?void(t.loading=!0):void(0==e.data.length?(t.loadingText="没有更多了",t.loading=!0):t.loading=!1)})}else t.loading=!1},function(){t.loadTry++,t.loading=!1,t.loadTry>=3&&(t.loading=!0)})},topicComments:function(){var t=this,e={page_name:this.gid,limit:this.limit?this.limit:5,page:this.page};this.$http.post("/Goods/specialPage.json",e).then(function(e){if(e=e.json(),1==e.status){var o=!0,i=!1,n=void 0;try{for(var s,r=(0,a.default)(e.data.comment_list);!(o=(s=r.next()).done);o=!0){var d=s.value;t.comments.push(d)}}catch(t){i=!0,n=t}finally{try{!o&&r.return&&r.return()}finally{if(i)throw n}}t.setBuyOption({selected:e.data.goods_list[0],list:e.data.goods_list}),t.$nextTick(function(){return t.limit?void(t.loading=!0):void(0==e.data.comment_list.length?(t.loadingText="没有更多了",t.loading=!0):t.loading=!1)})}else t.loading=!1},function(){t.loadTry++,t.loading=!1,t.loadTry>=3&&(t.loading=!0)})},loadMore:function(){this.page+=1,this.loadComments()}}}},186:function(t,e){t.exports=' <div v-if="comments.length == 0" class=comments-none>暂无评论</div> <div v-else> <ul class=comment-list v-infinite-scroll=loadMore() infinite-scroll-disabled=loading> <li v-for="item in comments"> <div class=comment-item> <div class=item-left> <span class=user> <img src=/public/images/detail/person.jpg alt=""/> </span> </div> <div class=item-right> <div class=uaer-name>{{item.user_name}}</div> <div class=comment-container> <p>{{item.content}}</p> </div> <div class=comment-img> <span class=item-img><img :src=item.pic alt=""/></span> <span class=item-img><img :src=item.pic1 alt=""/></span> </div> </div> </div> </li> </ul> <div v-if="limit == undefined" class=load-more>{{loadingText}}</div> </div> '},272:function(t,e,o){var i,n,a={};i=o(273),n=o(285),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})},273:function(t,e,o){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(31),a=o(274),s=i(a),r=o(182),d=i(r);e.default={components:{GoodsDesc:s.default,GoodsComment:d.default},vuex:{getters:{index:function(t){return t.app.header.tabIndex}},actions:{updateAppHeader:n.updateAppHeader,setHeaderTabIndex:n.setHeaderTabIndex}},route:{activate:function(){return this.$root.getAdvisoryInfo()},data:function(){this.updateAppHeader({type:2,content:""}),this.id=this.$route.params.id,"comment"==this.$route.params.view?this.setHeaderTabIndex(1):this.setHeaderTabIndex(0)}},data:function(){return{id:this.$route.params.id,currentView:"GoodsDesc"}},watch:{index:function(t){0==t?this.currentView="GoodsDesc":1==t&&(this.currentView="GoodsComment")}}}},274:function(t,e,o){var i,n,a={};i=o(275),n=o(284),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})},275:function(module,exports,__webpack_require__){(function($,Vue){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(exports,"__esModule",{value:!0});var _getIterator2=__webpack_require__(151),_getIterator3=_interopRequireDefault(_getIterator2),_getters=__webpack_require__(25),_actions=__webpack_require__(31),_favourable=__webpack_require__(276),_favourable2=_interopRequireDefault(_favourable),_ntell=__webpack_require__(281),_ntell2=_interopRequireDefault(_ntell),Swipe=__webpack_require__(103);exports.default={vuex:{getters:{index:function(t){return t.app.header.tabIndex},Q_Chinaskin:function(t){return t.Q_Chinaskin},actName:_getters.actName},actions:{addGoodsToCart:_actions.addGoodsToCart,setBuyOption:_actions.setBuyOption}},ready:function(){var t=this;this.$watch("index",function(e){t.change(t.id)},{immediate:!0})},data:function(){return{html:""}},props:{id:{required:!0}},watch:{id:function(t){this.change(t)}},computed:{detailURL:function(){return this.Q_Chinaskin?"/release/src/view/QChinaskin/":"/release/src/view/goods/detail_"}},methods:{change:function(t){$("#goodsDesc").html(""),parseInt(t)?0==this.index&&this.loadDetail(t):0==this.index&&this.loadTopic(t)},loadDetail:function(t){this.$el.style.padding="0.5rem 0 0",this.$el.style.background="#fff",this.$http.post(this.detailURL+t+".html").then(function(t){var e=Vue.extend({template:t.data});(new e).$mount().$appendTo("#goodsDesc")})},loadTopic:function loadTopic(id){var infoComp=this;this.$http.post("/release/src/view/topic/"+id+".html").then(function(res){var detail=Vue.extend({template:res.data,components:{Favourable:_favourable2.default},ready:function ready(){var _this2=this,script=$("#topicReady").html();script&&eval(script);var data={page_name:id};return this.$http.post("/Goods/specialPage.json",data).then(function(t){if(t=t.json(),1==t.status){var e=!0,o=!1,i=void 0;try{for(var n,a=(0,_getIterator3.default)(t.data.goods_list);!(e=(n=a.next()).done);e=!0){var s=n.value;s.quantity=1}}catch(t){o=!0,i=t}finally{try{!e&&a.return&&a.return()}finally{if(o)throw i}}_this2.goodsList=t.data.goods_list,infoComp.setBuyOption({selected:_this2.goodsList[0],list:_this2.goodsList})}})},data:function(){return{goodsList:""}},methods:{buy:function(t){void 0!=t?""==t.goods_id||void 0==t.goods_id?alert("商品缺货下架，抓紧咨询客服抢购吧！"):infoComp.addGoodsToCart({id:t.goods_id}):alert("商品缺货下架，抓紧咨询客服抢购吧！")}},events:{goAct:function(){infoComp.$route.router.go({name:"act",params:{name:infoComp.actName}})}}});(new detail).$mount().$appendTo("#goodsDesc")})}}}}).call(exports,__webpack_require__(24),__webpack_require__(6))},276:function(t,e,o){var i,n,a={};o(277),i=o(279),n=o(280),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})},277:function(t,e,o){var i=o(278);"string"==typeof i&&(i=[[t.id,i,""]]);o(22)(i,{});i.locals&&(t.exports=i.locals)},278:function(t,e,o){e=t.exports=o(3)(),e.push([t.id,".youhui{line-height:2.2rem;padding:0 .8rem;background:#ea2143;color:#fff;margin:.8rem 0 0}.youhui span{font-size:.9rem}.youhui span:first-child{padding:0 .8rem 0 .2rem;background:url(/public/images/detail/bg.png) no-repeat;background-size:100% 100%;color:#ea2143;margin-right:.4rem}.youhui a{color:#fff;float:right}.youhui2{padding:.6rem .8rem 0;background:#fff;border:1px solid #e1e1e1;border-width:1px 0}.youhui2 p{padding-bottom:.6rem;border-bottom:1px solid #e1e1e1;font-size:.8rem}.youhui2 p:nth-child(-n+2){width:50%;float:left}.youhui2 p:nth-child(3){border-bottom:1px solid #e1e1e1;clear:both}.youhui2 b{width:1.2rem;height:1.2rem;line-height:1.2rem;border-radius:4px;background-color:#ea2143;font-weight:400;font-size:.85rem;color:#fff;text-align:center;display:inline-block;margin-right:.2rem}.icon-warn{background-image:url(/public/images/detail/light.jpg);background-size:100%;vertical-align:top}.youhui2 span{width:20%;line-height:2rem;color:#5a5a5a;float:left;font-size:.7rem}.youhui2 .font{color:#ea2647;margin-right:.2rem}",""])},279:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{aa:function(){this.$dispatch("goAct"),this.$dispatch("popup","1212")}}}},280:function(t,e){t.exports=' <div v-if=true class=youhui> <span>本期优惠</span><span>优惠大放送</span><a href=javascript:; @click=aa>点击进入优惠专场></a> </div> <div class="youhui2 clearfix"> <p><b>减</b>在线支付，立减10元</p> <p><b>免</b>包邮福利，满200免运费</p> <span><i class="font icon-round-check"></i>官网正品</span> <span><i class="font icon-round-check"></i>1对1咨询</span> <span><i class="font icon-round-check"></i>7天无理由</span> <span><i class="font icon-round-check"></i>闪电发货</span> <span><i class="font icon-round-check"></i>无效返券</span> </div> <div style="padding:0.6rem 0"> <a href=/act/index/id/20160818><img src=/public/images/detail/action_01.jpg alt=""></a> </div> '},281:function(t,e,o){var i,n,a={};i=o(282),n=o(283),t.exports=i||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(a).forEach(function(t){var e=a[t];s.computed[t]=function(){return e}})},282:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=o(25);e.default={vuex:{getters:{tel:i.tel}}}},283:function(t,e){t.exports=' <div class=new_tel> <p style=font-weight:normal>美容老师1对1教你解决肌肤问题</p> <p> <a :href="\'tel:\' + tel"><img src=/public/images/detail/on_tel.png alt=""/></a> <a v-link="{ name: \'shoppingCart\' }"><img src=/public/images/detail/on_zx.png alt=""/></a> </p> </div> '},284:function(t,e){t.exports=" <div> <link v-if=Q_Chinaskin rel=stylesheet href=/public/css/q_detail.css /> <div id=goodsDesc></div> </div> "},285:function(t,e){t.exports=' <goods-desc v-if="index == 0" :id=id></goods-desc> <goods-comment v-else></goods-comment> '}});