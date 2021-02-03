<template>
    <div class = "tab-control">
        <div v-for='item in titles' :key="item" class="tab-control-item">
            <span>{{item}}</span>   
        </div>
    </div>
</template>
<script>
export default {
    name:"TabControl",
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style>
.tab-control{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 15px;
}
.tab-control-item{
    flex:1;
    height: 40px;
    line-height: 40px;
}

</style>