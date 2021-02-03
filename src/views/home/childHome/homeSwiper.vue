<template>
    <div class = 'home-swiper'>
         <swiper>
       <swiper-item v-for='(item,i) in banners' :key='i'>
         <a :href="item.link">
           <img :src="item.image" alt=""/>
         </a>

       </swiper-item>
     </swiper>
    </div>
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'
export default {
    name:'hoemswiper',
    components:{
        Swiper,
    SwiperItem
    },
    props:{
        banners:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>