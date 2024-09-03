<template dark>
    <v-container class="dark index" data-aos="fade-left">
        <NavBar />
        <v-col cols="12" class="flex p-0">
            <v-col cols="4" sm-cols="12">
                <div class="profile">
                    <v-card class="">
                        <v-img :src="require('../../assets/images/jhom.png')" class="my-img" contain width="" />
                        <span class="circle"></span>
                    </v-card>
                </div>
                <div class="title">
                    <v-card class="relative">
                        <p class="title-label">Title</p>
                        <h3 class="title">Web Developer / Consultant</h3>
                  
                        <v-img :src="require('../../assets/images/cus-stargay.webp')" class="star" contain width="70" />
                        <div class="arrow">
                            <svg width="58" height="40" viewBox="0 0 58 40" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                    fill="white"></path>
                                <path
                                    d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                    </v-card>
                </div>
            </v-col>
            <v-col cols="8" sm-cols="12">
                <div class="grid-lists">
                    <div class="grid-container">
                        <div class="latest-works">
                            <div class="projects">
                                <v-card class="relative">
                                    <h3 class="title">PROJECTS</h3>
                                    <Splide
                                        :options="{ rewind: true, perPage: 1, arrows: false, focus: 'center', autoplay: true }"
                                        aria-label="My Favorite Images">
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/projects/project1.jpg')"
                                                    class="bordered-15px" contain width="" />
                                                <div class="text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                                    ullam.
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                                    ullam.
                                                </div>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/projects/project1.jpg')"
                                                    class="bordered-15px" contain width="" />
                                                <div class="text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                                    ullam.
                                                </div>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/projects/project1.jpg')"
                                                    class="bordered-15px" contain width="" />
                                                <div class="text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                                    ullam.
                                                </div>
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/projects/project1.jpg')"
                                                    class="bordered-15px" contain width="" />
                                                <div class="text">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                                                    ullam.
                                                </div>
                                            </div>
                                        </SplideSlide>
                                        

                                    </Splide>

                                    <v-img :src="require('../../assets/images/svg/star.svg')" class="star" contain
                                        width="70" />

                                    <div class="arrow">
                                        <svg width="40" height="30" viewBox="0 0 58 40" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                fill="white"></path>
                                            <path
                                                d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                fill="white"></path>
                                        </svg>
                                    </div>
                                </v-card>

                            </div>
                        </div>
                        <div class="slider my-skills">
                            <div class="slider-item">
                                <v-card class="relative" style="display:block;">
                                    <Splide
                                        :options="{ rewind: true, perPage: 6, arrows: false, focus: 'center', autoplay: true }"
                                        aria-label="My Favorite Images">
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/html-1.svg')" class=""  width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/css-3.svg')" class=""  width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/javascript-1.svg')" class=""  width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/vue-js-icon.svg')" class=""  width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/vuetify.svg')" class=""  width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/laravel-2.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/react-2.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/magento-icon.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                    <v-img :src="require('../../assets/images/skills/shopify-icon.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/wordpress-icon-1.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>
                                        <SplideSlide>
                                            <div class="group">
                                                <v-img :src="require('../../assets/images/skills/firebase-1.svg')" class=""
                                                    contain width="50" />
                                            </div>
                                        </SplideSlide>

                                    </Splide>
                                </v-card>
                            </div>
                            <div class="inner-column">
                                <div class="years">
                                    <v-card class="relative">
                                        <div class="group">
                                            <h3 class="title">04</h3>
                                            <p class="title-label">Years of experience</p>

                                        </div>
                                    </v-card>
                                    <v-card class="relative">
                                        <div class="group">
                                            <h3 class="title">+50</h3>
                                            <p class="title-label">Total Projects</p>

                                        </div>
                                    </v-card>
                                </div>
                                <div class="social-icons">
                                    <v-card class="relative">
                                        <div class="group">
                                            <v-img :src="require('../../assets/images/social/git.svg')" class="" contain
                                                width="50" />
                                        </div>
                                        <div class="group">
                                            <v-img :src="require('../../assets/images/social/linkedin.svg')" class="" contain
                                                width="50" />
                                        </div>
                                        <div class="group">
                                            <v-img :src="require('../../assets/images/social/facebook.svg')" class="" contain
                                                width="50" />
                                        </div>
                                     
                                    </v-card>
                                </div>
                            </div>

                        </div>
                      
                    
                        <div class="item6 services">
                            <v-card class="relative ">
                                <div class="group">
                                    <h3 class="title">Contact</h3>
                                    <div class="services-slider">
                                        <Splide :options="{ rewind: true, perPage: 4, arrows: false, focus: 'center' }"
                                            aria-label="My Favorite Images">
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                        </Splide>

                                        <div class="arrow" @click="$router.push({name:'Contact'})">
                                            <svg width="45" height="30" viewBox="0 0 58 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                    fill="white"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                        <div class="item7 services">
                            <v-card class="relative ">
                                <div class="group">
                                    <h3 class="title">EXPERIENCE & EDUCATION</h3>
                                    <div class="services-slider">
                                        <Splide :options="{ rewind: true, perPage: 4, arrows: false, focus: 'center' }"
                                            aria-label="My Favorite Images">
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                            <SplideSlide>
                                                <v-img :src="require('../../assets/images/svg/ball.svg')" class=""
                                                    contain width="50" />
                                            </SplideSlide>
                                        </Splide>

                                        <div class="arrow" @click="Aboutpage">
                                            <svg width="45" height="30" viewBox="0 0 58 40" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M19.7674 28.2202C21.6527 32.4019 24.9182 35.8085 29.0165 37.8689C33.1148 39.9293 37.7968 40.5183 42.2777 39.5372C46.7587 38.5561 50.7661 36.0645 53.6285 32.48C56.4908 28.8955 58.034 24.4361 57.9994 19.8492C57.9648 15.2622 56.3545 10.8266 53.4385 7.28568C50.5224 3.74481 46.4778 1.31394 41.9825 0.400527C37.4873 -0.512885 32.8147 0.146678 28.748 2.26866C24.6812 4.39065 21.4675 7.84608 19.6455 12.0558L20.7467 12.5324C22.4595 8.57532 25.4804 5.32721 29.3031 3.33255C33.1259 1.33788 37.5181 0.717889 41.7436 1.5765C45.9691 2.4351 49.771 4.72012 52.5122 8.04854C55.2533 11.377 56.7669 15.5465 56.7995 19.8582C56.832 24.1699 55.3814 28.3618 52.6908 31.7312C50.0002 35.1006 46.2331 37.4427 42.0211 38.3649C37.809 39.2872 33.4079 38.7335 29.5555 36.7967C25.7031 34.86 22.6335 31.6578 20.8613 27.727L19.7674 28.2202Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M40.5303 20.5303C40.8232 20.2374 40.8232 19.7626 40.5303 19.4697L35.7574 14.6967C35.4645 14.4038 34.9896 14.4038 34.6967 14.6967C34.4038 14.9896 34.4038 15.4645 34.6967 15.7574L38.9393 20L34.6967 24.2426C34.4038 24.5355 34.4038 25.0104 34.6967 25.3033C34.9896 25.5962 35.4645 25.5962 35.7574 25.3033L40.5303 20.5303ZM-6.55671e-08 20.75L40 20.75L40 19.25L6.55671e-08 19.25L-6.55671e-08 20.75Z"
                                                    fill="white"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </v-card>
                        </div>
                      
                       
                    </div>
                </div>
            </v-col>
        </v-col>
    </v-container>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import NavBar from './NavBar.vue'
export default {
    name: 'IndexPage',
    components: {
        Splide,
        SplideSlide,
        NavBar
    },
    methods:{
        Aboutpage(){
            this.$router.push('/about');
        }
    }
}
</script>
<style lang="scss" scoped>
 .arrow {
            width: 50px;
            position: absolute;
            bottom: 50px;
            right: 40px;
            transition: fill 0.3s ease;

            &:hover {
                cursor: pointer;
                path {
                    fill: #ffb400;
                    transition: fill 0.3s ease;
                }
            }
        }
.form {
    align-items: center;

    input {
        margin-top: 10px;
        width: 100%;
        border-radius: 12px;
        border: 1px solid #f5faff;
        background: rgba(26, 26, 26, .4);
        padding: 14px 16px;
        color: var(--n06);
        font-size: 16px;
        font-weight: 300;
        outline: none;
        color: #FFF;

        &:focus {}
    }

    button {
        font-size: 16px;
        font-weight: 500;
        padding: 12px 24px;
        display: block;
        border-radius: 100px;
        background: #ffb400;
        text-align: center;
        transition: all 0.4s;
        margin-top: 20px;
        color: #FFF;

        span {
            padding-left: 8px;
        }
    }


}

.text {
    color: #FFF;
    margin-top: 15px;
    text-align: center;
}

.latest-works {
    grid-area: works;
}

.slider {
    grid-area: slider;
}

.item3 {
    grid-area: main;
}

.item4 {
    grid-area: right;
}

.item5 {
    grid-area: footer;
}

.item6 {
    grid-area: menu;
}

.item7 {
    grid-area: years;
}

.grid-container {
    display: grid;
    grid-template-areas:
        'works works works slider slider slider'
        'menu menu menu years years years'
        'right right right right right right';
    gap: 10px;
    padding: 10px 0px;

    @media screen and (max-width:768px) {
        // grid-template-areas:unset;
        // grid-template-columns: repeat(1,1fr);
    }
}



.grid-lists {
    padding: 15px 0px;
}

.p-0 {
    padding: 0;
}

.star {
    position: absolute;
    right: 20px;
    top: 20px;
}

.index .v-card .title {
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Kanit", sans-serif;
    margin-bottom: 10px;
}

.index {
    margin-top: 40px;

    .flex {
        display: flex;
        flex-wrap: wrap;

        @media screen and (max-width:768px) {
            flex-direction: column;
        }
    }

    .v-col {
        .v-card {
            display: flex;
            justify-content: space-between;
            align-items: center;
            border: 1px solid #323232;
            background: linear-gradient(153deg, rgba(255, 255, 255, 0.12) -65.62%, rgba(255, 255, 255, 0.04) 83.28%);
            -webkit-backdrop-filter: blur(25px);
            backdrop-filter: blur(25px);
            padding: 10px 40px;
            border-radius: 20px;

            .logo {
                h1 {
                    color: #FFF;
                    font-size: 2rem;
                    font-weight: 700;
                    font-family: "Kanit", sans-serif;

                    span {
                        font-weight: bold;
                        color: #ffb400;
                        font-size: 2rem;
                    }
                }
            }

            .menu {
                ul {
                    display: flex;

                    li {
                        list-style: none;
                        color: #FFF;
                        padding-left: 35px;

                        &:nth-of-type(1) {
                            padding-left: 0px;
                        }
                    }
                }
            }

            .cta {
                display: flex;
                gap: 20px;
                align-items: center;

                button {
                    font-size: 16px;
                    font-weight: 500;
                    color: var(--n0);
                    padding: 12px 24px;
                    display: block;
                    border-radius: 100px;
                    background: #ffb400;
                    text-align: center;
                    transition: all .4s;

                    span {
                        color: #FFF;
                    }
                }

                .material-icons {
                    color: #FFF;
                    min-width: 48px;
                    min-height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 50%;
                    background: #ffb400;
                    transition: all .4s;
                }
            }
        }
    }

    .title {
        .v-card {
            display: grid;
            gap: 10px;
            padding: 50px 50px 80px 50px;
        }

        p,
        h3 {
            color: #FFF;
        }



        .arrow {
            width: 50px;
            position: absolute;
            bottom: 50px;
            right: 40px;
            transition: fill 0.3s ease;

            &:hover {
                path {
                    fill: #ffb400;
                    transition: fill 0.3s ease;
                }
            }
        }
    }

    .projects {
        height: 100%;

        .splide {
            padding: 1rem;
            padding-bottom: 2.5rem;

            .bordered-15px {
                border-radius: 15px;
            }
            .splide__pagination{
                margin-bottom: -50px !important;
            }

        }

        p,
        h3 {
            color: #FFF;
        }

        h3 {
            color: #FFF;
            font-size: 2rem;
            font-weight: 700;
            font-family: "Kanit", sans-serif;
            margin-bottom: 10px;
        }

        .v-card {
            display: block;
            padding: 25px;
            height: 100%;

            &:nth-of-type(2) {
                margin-top: 20px;
            }

            .arrow {
                margin-top: 20px;
                display: flex;
                justify-content: flex-end;
            }
        }

    }

    .slider {
        padding-left: 10px;


        .slider-item {
            .group {
                color: #FFF;
                align-items: center;
                gap: 10px;
            }
        }

        .inner-column {
            display: grid;
            grid-template-columns: 60% auto;
            gap: 20px;
            margin-top: 20px;

            .years {
                .v-card {
                    display: block;
                    text-align: center;
                    padding: 25px;

                    &:nth-of-type(2) {
                        margin-top: 20px;
                    }
                }

                h3 {
                    color: #FFF;
                    font-size: 4rem;
                    font-weight: 500;
                    font-family: "Kanit", sans-serif;
                    margin-bottom: 10px;
                }

                p {
                    color: #FFF;
                    text-transform: uppercase;
                    font-size: 1.5rem;
                    font-weight: 500;
                    font-family: "Kanit", sans-serif;
                }
            }

            .social-icons {
                .v-card {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    height: 100%;
                    gap: 25px;

                    .group {
                        border-radius: 50%;
                        border: 1px solid #323232;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        position: relative;
                        padding: 25px;
                    }
                }
            }
        }
    }

    .services {
        .v-card {
            display: block;
            padding: 20px 40px;

            .arrow {
                display: flex;
                justify-content: flex-end;
            }

            .splide {
                padding-top: 1rem;
            }

            ul {
                li {
                    display: grid;
                    justify-content: center;
                    align-items: center;
                }
            }
        }
    }

    .newsletter {
        .v-card {
            height: 100%;
        }
    }

}

.my-skills {
        .slider-item{
            .v-card {
                .splide {
                    padding-top: 1rem;
                    padding-left: 0rem;
                    padding-right: 0rem;
                    .splide__track{
                        .splide__list{
                            display: flex;
                            align-items: center;
                        }
                    }
    
                    .group {
                        display: grid;
                        align-items: center;
                        justify-items: center;
                        margin: 0;
                    }
                    
                }
            }
        }
    }

.profile {
    margin: 25px 0px;

    .v-card {
        padding-bottom: 0px !important;
    }

    .my-img {
        z-index: 9;
    }

    .circle {
        height: 450px;
        width: 450px;
        border-radius: 100%;
        background: #FFF;
        position: absolute;
        z-index: 1;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
    }
}
</style>