webpackJsonp([31],{378:function(e,t,i){var a,o,n={};i(379),a=i(381),o=i(382),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports.default);var d="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;o&&(d.template=o),d.computed||(d.computed={}),Object.keys(n).forEach(function(e){var t=n[e];d.computed[e]=function(){return t}})},379:function(e,t,i){var a=i(380);"string"==typeof a&&(a=[[e.id,a,""]]);i(22)(a,{});a.locals&&(e.exports=a.locals)},380:function(e,t,i){t=e.exports=i(3)(),t.push([e.id,'.error-tips[_v-37e32a3b]{text-align:center;font-size:1.2rem;padding-top:1rem;display:none}.tips_tit[_v-37e32a3b]{padding:2em 1em}.tips_tit h3[_v-37e32a3b]{font-size:1.2rem;color:#282828;line-height:1.8em;text-align:center;font-weight:700}.tips_tit p[_v-37e32a3b]{color:#636363;font-size:1rem}.check_phone dl[_v-37e32a3b]{width:85%;margin:0 auto;margin-bottom:.5em;height:1.8em;padding-bottom:2em;border-bottom:1px solid #f4f4f4}.check_phone dl dt[_v-37e32a3b]{float:left;width:22%;height:1.8em;text-align:left;padding-right:.5em;line-height:1.8em}.check_phone dl dd[_v-37e32a3b]{float:left;width:78%;height:1.8em;line-height:1.5em}.check_phone dl dd input[_v-37e32a3b]{height:1.8em;border:0}.check_phone dl.get_code dd input[_v-37e32a3b]{width:60%}.check_phone dl.get_code dd .get_btn[_v-37e32a3b]{background:#f4bfcf;margin-top:-.5em;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1;display:inline-block;width:38%;color:#5c5558;margin-left:.2em}.check_phone dl.get_code dd .get_btn.on[_v-37e32a3b]{background:#ccc}.check_phone .code_tips[_v-37e32a3b]{display:none;border-bottom:0}.check_phone .code_tips.on[_v-37e32a3b]{display:block}.code_tips p[_v-37e32a3b]{text-align:center}.code_tips p b[_v-37e32a3b]{background:#f03254;color:#fff;border-radius:.5em;display:inline-block;width:.8em;height:.8em;line-height:.8em;text-align:center}.code_tips p i[_v-37e32a3b]{color:#ef3354;font-style:normal}.subm_btn02[_v-37e32a3b],.subm_btn[_v-37e32a3b]{text-align:center}.subm_btn02 a[_v-37e32a3b],.subm_btn a[_v-37e32a3b]{display:inline-block;width:90%;background:#f03254;color:#fff;padding:.8em;border-radius:.25em;margin-top:1em}.sucess_com[_v-37e32a3b]{position:fixed;bottom:4em;width:100%;margin:0 auto;min-width:320px;max-width:640px;background:#666;color:#fff;text-align:center;padding:1.5em 0}.sucess_com span[_v-37e32a3b]{font-size:1.5em;padding-left:1.2em;position:relative}.sucess_com span[_v-37e32a3b]:before{display:inline-block;position:absolute;top:50%;left:0;content:"";width:1em;height:1em;margin-top:-.5em;background-image:url(/templates/common/images/common/right.png);background-repeat:no-repeat;background-size:1em}.back_q[_v-37e32a3b]{padding:0 1em}.back_q h4[_v-37e32a3b]{text-align:center;font-size:1.4em;color:#282828}.back_q .aren[_v-37e32a3b]{width:100%;overflow:hidden;padding:1em 0}.back_q .aren textarea[_v-37e32a3b]{width:100%}.tips_icon[_v-37e32a3b]{padding:2em 1em;text-align:center;font-size:1em;color:#333;font-weight:700;font-family:\\\\5FAE\\8F6F\\96C5\\9ED1}.tips_icon img[_v-37e32a3b]{margin:0 auto;display:inline;width:15%;max-width:86px}.tips_icon span[_v-37e32a3b]{display:inline-block;padding-top:.5em}',""])},381:function(e,t,i){(function(e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={ready:function(){function t(){var i=e("#mobile").val();return/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(i)?void(0==a?(e(".code_tips").removeClass("on"),e("#get_btn").removeClass("on"),e("#get_btn").removeAttr("disabled"),e("#get_btn").val("点击获取"),a=60):(60==a&&e.ajax({type:"POST",url:"/WechatBindMobile/sendSms.json",data:"mobile="+i,success:function(t){1==t.status?(e(".code_tips").addClass("on"),e("#get_btn").addClass("on"),e("#get_btn").attr("disabled",!0),e("#get_btn").val("重新获取")):(alert(t.msg),a=0)}}),setTimeout(function(){t()},1e3),e("#time_cha").text(a),a--)):void alert("请输入正确的手机号！！")}var i=this;this.loading=!0,this.$http.post("/WechatBindMobile/show.json").then(function(t){t=t.json(),1==t.status?(i.loading=!1,1==t.data.isCheckWechat?i.showtWechat=!0:(i.showtWechat=!1,e(".error-tips").show()),i.bunded=null==t.data.data||""==t.data.data):alert(t.msg)});var a=60;document.getElementById("time_cha"),document.getElementById("code_tips");e("#app").on("click",".get_btn",function(){t()}),e("#app").on("click","#verify",function(){var t=e("#mobile").val(),i=e("#code").val();return/^(13[0-9]|14[0-9]|15[0-9]|18[0-9])\d{8}$/i.test(t)?i?void e.ajax({type:"POST",url:"/WechatBindMobile/verify.json",data:"mobile="+t+"&code="+i,success:function(e){1==e.status?(alert("绑定成功！！"),this.$route.router.go({name:"index"})):alert(e.msg)}}):void alert("请输入验证码"):void alert("请输入正确的手机号！！")})},data:function(){return{showtWechat:!1,bunded:!1,loading:!0}}}}).call(t,i(24))},382:function(e,t){e.exports=' <div v-show=loading class=loading _v-37e32a3b=""></div> <div v-if=showtWechat _v-37e32a3b=""> <div v-if=!bunded _v-37e32a3b=""> <div class=tips_icon _v-37e32a3b=""> <img src=/public/images/common/icon_01.jpg _v-37e32a3b=""><br _v-37e32a3b=""><span _v-37e32a3b="">手机已经绑定</span> </div> <div class=subm_btn02 _v-37e32a3b=""> <a href=javascript:void(0) id=unbind v-link="{ name: \'index\' }" _v-37e32a3b="">去逛逛~~</a> </div> </div> <div v-if=bunded _v-37e32a3b=""> <div class=tips_tit _v-37e32a3b=""> <h3 _v-37e32a3b="">手机认证</h3> <p _v-37e32a3b="">为确保您的订单物流信息准确发送，请您使用购物时留下的手机号码进行认证！</p> </div> <div class=check_phone _v-37e32a3b=""> <dl _v-37e32a3b=""> <dt _v-37e32a3b="">手机号</dt> <dd _v-37e32a3b=""><input type=text name=mobile id=mobile _v-37e32a3b=""></dd> </dl> <dl class=get_code _v-37e32a3b=""> <dt _v-37e32a3b="">验证码</dt> <dd _v-37e32a3b=""><input type=text name=code id=code _v-37e32a3b=""><input type=button class=get_btn id=get_btn value=点击获取 _v-37e32a3b=""></dd> </dl> <dl class=code_tips id=code_tips _v-37e32a3b=""> <p _v-37e32a3b="">发送成功！若失效，<i id=time_cha _v-37e32a3b="">50</i>S后可重新获取</p> </dl> </div> <div class=subm_btn _v-37e32a3b=""> <a href=javascript:void(0) id=verify _v-37e32a3b="">确认提交</a> </div> <div class=sucess_com style="display: none" _v-37e32a3b=""> <span _v-37e32a3b="">提交成功</span> </div> </div> </div> <div v-else="" _v-37e32a3b=""> <p class=error-tips _v-37e32a3b="">请用微信打开！</p> </div> '}});