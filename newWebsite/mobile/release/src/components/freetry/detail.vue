<script>
	export default {
		ready(){
			let id = this.$route.params.id;
			this.$http.post('/FreeTrial/index.json?fid=' + id).then((res) => {
                res = res.json();
                if(res.status == 1){
                	this.$set('applyList', res.data);
                }else{
                	this.$dispatch('popup', res.msg);
                }
            });
		},
		data(){
			return{
				applyList:{}
			}
		}
	}
</script>
<template>
<div class="main n_bg">
	<div class="h1_tit">正品试用</div>
	<div class="cont">
		<h3>试用规则</h3>
		<div class="rule">
			<ul>
				<li>提交试用申请，即有机会获得试用产品。</li>
				<li>试用产品数量有限，送完即止。</li>
				<li>请正确填写你的收货信息，以确保试用品的顺利到达。</li>
			</ul>
			<p class="n_more"><a v-link="{ name: 'freetryRule'}">了解具体活动规则 >></a></p>
		</div>
		<h3>产品信息</h3>
		<div class="pro_info">
			<p class="pro"><img :src="applyList.goods_img" alt=""></p>
			<h4 class="name">{{applyList.goods_name}}</h4>
			<p class="gge"><b>商城售价：</b>{{applyList.price}}元</p>
            <!-- <p class="gge"><b>{$attr.attr_name}：</b>{$attr.attr_value}</p> -->
			<p class="gge"><b>试用份数：</b>{{applyList.max_number}}份</p>
			<p class="gge"><b>活动时间：</b>{{applyList.start_time}}—{{applyList.end_time}}</p>
			<p class="but"><a v-link="{ name: 'freetryForm', params:{id: applyList.activity_id}}"><img src="/public/images/freetry/but.jpg" alt=""></a></p>
		</div>
	</div>
</div>
</template>
<style scoped>
.n_bg{background: #fff;}
.h1_tit{background: #d0213e;text-align: center;line-height: 1.8em;font-size: 1em;color: #fff;margin-top: 1rem;}
.cont{padding: .5em;}
.cont h3{font-size: 1em;line-height: 1.2em;color:#d0213e;font-weight: normal;margin-bottom: .5em;padding-left: .5em;}
.rule {border: 1px solid #acacac;border-radius: .5em;padding: .5em .5em .5em 1.7em;font-size: .9em;box-shadow: 1px 4px 6px #acacac;margin-bottom: .6em;}
.rule ul{list-style: disc;}
.rule ul li{line-height: 1.6em;color: #414040;}
.rule p.n_more{text-align: right;line-height: 1.6em;}
.rule p.n_more a{color: #414040;}
.pro_info {border: 1px solid #acacac;border-radius: .5em;padding: 2em;font-size: .8em;box-shadow: 1px 4px 6px #acacac;margin-bottom: .6em;}
.pro{width: 90%;text-align: center;margin: 0 auto;}
.pro img{width: 100%; max-width:270px;}
.gge{font-size: 1.3em;line-height: 1.6em;}
.pro_info .name{font-size: 1.6em;line-height: 2.2em;text-align: center;}
.but{margin-top: .5em;text-align: center;}
.but img{width: 70%; max-width:275px;}
</style>