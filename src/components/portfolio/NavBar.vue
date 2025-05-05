<template>
    <v-col cols="12" class="main-nav desktop-version">
        <v-card class="flex">
            <div class="logo">
                <h1>JHOMEL <span>IGNACIO</span></h1>
            </div>
            <div class="menu">
                <ul>
                    <li @click="$router.push({name:'Portfolio'})">Home</li>
                    <li  @click="$router.push({name:'About'})">About</li>
                    <li  @click="$router.push({name:'Works'})">Works</li>
                    <li  @click="$router.push({name:'Contact'})">Contact</li>
                </ul>
            </div>
            <div class="cta">
                <button  @click="$router.push({name:'Contact'})">
                    <span> Let's talk </span>
                </button>
                <span class="material-icons anchor"  @click="$router.push({name:'Contact'})">
                    north_east
                </span>
            </div>
        </v-card>
    </v-col>

    <nav class=" border-gray-200 dark:bg-gray-900 mobile-version">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-dark"> <div class="logo">
                <h1>JHOMEL <span>IGNACIO</span></h1>
            </div></span>
        </a>
        <button @click="handleMenu()" data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#000" viewBox="0 0 17 14">
                <path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div  :class="`w-full md:block md:w-auto ${isMenuActive ? '' : 'hidden'}`" id="navbar-default">
        <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li class="block py-2 px-3 text-dark rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-dark md:dark:text-blue-500"> <a href="/">Home</a> </li>
            <li class="block py-2 px-3 text-dark rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-dark md:dark:text-blue-500"> <a href="/about">About</a> </li>
            <li class="block py-2 px-3 text-dark rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-dark md:dark:text-blue-500"> <a href="/works">Works</a> </li>
            <li class="block py-2 px-3 text-dark rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-dark md:dark:text-blue-500"> <a href="/contact">Contact</a> </li>
        </ul>
        </div>
    </div>
    </nav>

</template>

<script>
export default {
    name: 'NavBar',
    data(){
        return{
            isMenuActive:false
        }
    },
    methods:{
        handleMenu(){
           this.isMenuActive = !this.isMenuActive;
        }
    }
}
</script>
<style lang="scss" scoped>
.mobile-version{
    position: relative;
    display: none;
    @media screen and (max-width:768px) {
        display: block;
    }
    ul{
        position: absolute;
        width: 100%;
        z-index: 9999;
        max-width: 100%;
        left: 0;
    }
}
.desktop-version{
    @media screen and (max-width:768px) {
        display: none;
    }
}
h1{
    color: #FFF;
    font-size: 2rem;
    font-weight: 700;
    font-family: "Kanit", sans-serif;
    span{
        font-weight: bold;
        color: #ffb400;
        font-size: 2rem;
    }
}
.anchor{
    cursor: pointer;
}
.main-nav{
    margin-bottom: 0px;
}
.menu{
    li{
        &:hover{
            color: #ffb400 !important;
            cursor: pointer;
        }
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
            @media screen and (max-width:768px) {
                display: grid;
            }

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
    </style>