<template>
  <div class="home">
     <navbar class = 'home-nav'><div slot="center">购物街</div></navbar>
     <home-swiper :banners='banners'></home-swiper>
     <recommend-view :recommends="recommends"></recommend-view>
     <feature-view></feature-view>
     <tab-control :titles="['流行','新款','精选']"></tab-control>
   <h2>我是主页</h2>
  <h2>我是主页</h2>
  <h2>我是主页</h2>
  <h2>我是主页</h2>
  <h2>我是主页</h2>
  
  </div>
</template>

<script>


import HomeSwiper from './childHome/homeSwiper'
import RecommendView from './childHome/RecommendView.vue'
import FeatureView from './childHome/FeatureView.vue'

import navbar from 'components/common/navbar/navbar'
import TabControl from '../../components/content/tabControl/TabControl.vue'





import {gethomeMultidata} from 'network/home'






 

export default {
 
  name: 'Home',
  components:{
    navbar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    
  },
  data(){
    return {
      banners:[],
      recommends:[],

    }
  },
  created(){
    gethomeMultidata().then(res =>{
      console.log(res);
      this.banners = res.data.data.banner.list
      this.recommends = res.data.data.recommend.list
      
    })
  }
  
}
</script>

<style>
 .home-nav{
   background-color: var(--color-tint);
   color:white;
 }
</style>
