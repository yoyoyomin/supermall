<template>
 <div class = 'tab-bar-item'>
    
    <div v-if='!isActive' @click="itemclick" ><slot name = 'item-icon'></slot></div>
    <div v-else> <slot  name = 'item-active'></slot></div>
    <div :style='activeStyle'>
    <slot  name = 'item-text'></slot>
    </div>
   
   
 </div>

    
</template>


<script>
export default {
    name:'item',
    props:{
      path:String,
      activeColor:{
          type:String,
          default:'red'
      }
    },
    
    
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path) !== -1;
        },
        activeStyle(){
            return this.isActive ? {color: this.activeColor}:{}
        }
    },
    methods: {
        itemclick(){
            this.$router.replace(this.path)
        }
    },
}
</script>

<style>
 
  .tab-bar-item{
    flex :1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img{
      height: 24px;
      width: 24px;
      vertical-align: middle;
      margin-bottom: 2px;
  }
  
    </style>
