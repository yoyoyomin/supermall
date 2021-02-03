<template>
    <div class = 'navbar'>
        <div class = 'left'><slot  name='letf'></slot></div>
        <div class = 'center'><slot name='center'></slot></div>
        <div class = 'right'><slot name='right'></slot></div>
    </div>
</template>

<script>
export default {
    name:'navbar'
}
</script>

<style>
    .navbar{
        display:flex;
        line-height: 44px;
        height: 44px;
        box-shadow: 0 -4px 1px rgba(100,100,100,0.1) ;
    }

    .left{
         width: 60px;
        height: 44px;

    }
    .right{
        width: 60px;  
        height: 44px;
        
    }
    .center{
        flex:1;
        text-align: center;
       
    }

    
</style>