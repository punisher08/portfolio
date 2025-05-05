<template>
    <section :class="`mt-5 container m-auto  works p-5 ${current_page === 'works' ? 'fade-upward' : ''}`"
        data-aos="fade-up">
        <NavBar />
            <div class="grid grid-cols-4 gap-4 mt-5 pt-5">

                <div v-for="item in projects" :key="item.label">
                    <div class="item box">
                        <a :href="item.url" class="grid" target="_blank">
                            <img :src="require(`../../assets/images/projects/${ item.img }`)"
                                                        class="bordered-15px object-cover img-border w-full relative"  />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-white text-center">{{ item.label }}</h5>
                            </div>
                        </a>
                    </div>
                </div>
                <!--  -->
            </div>
    </section>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    components:{
        NavBar
    },
    data() {
        return {
            current_page: 'works',
            projects:[
                { label: 'Bedsrus', url: 'https://bedsrus.com.au/',img:'bedsrus.jpg' },
            ]
        }
    },
    methods: {
    
    },
    mounted() {
        
    }
}
</script>

<style lang="scss" scoped>
.box{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #323232;
    background: linear-gradient(153deg, rgba(255, 255, 255, 0.12) -65.62%, rgba(255, 255, 255, 0.04) 83.28%);
    -webkit-backdrop-filter: blur(25px);
    backdrop-filter: blur(25px);
    // padding: 10px 40px;
    border-radius: 20px;
}

.img-border{
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
}
.v-img__img--contain{
    position: relative !important;
}

        
</style>