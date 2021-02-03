<template>
    <div id = 'maintabbar'>
       <tabbar>
         <item path='/home' activeColor='Yellow'>
           <img slot='item-icon' src="~assets/img/tabbar/home.png">
           <img slot='item-active' src="~assets/img/tabbar/home-active.svg">
       <div slot="item-text" >首页</div>
      </item>
      <item path='/class' activeColor='Yellow'>
        <img slot='item-icon' src="~assets/img/tabbar/class.svg">
        <img slot='item-active' src="~assets/img/tabbar/class-active.svg">
          <div slot="item-text" >分类</div>
      </item>
      <item path='/cart' activeColor='Yellow'>
         <img slot='item-icon' src="~assets/img/tabbar/cart.png">
         <img slot='item-active' src="~assets/img/tabbar/cart-active.svg">
         <div slot="item-text" > 购物车</div>
      </item>
      <item path='user' activeColor='Yellow'>
         <img slot='item-icon' src="~assets/img/tabbar/user.png">
         <img slot='item-active' src="~assets/img/tabbar/user-active.svg">
         <div slot="item-text" > 我的</div> 
      </item>
    </tabbar> 
    </div>
      
    
</template>

<script>
import item from 'components/common/tabbar/item'
import tabbar from 'components/common/tabbar/tabbar'

export default {
    name:'maintabbar',
    components:{
    tabbar,
    item
 }
}
</script>