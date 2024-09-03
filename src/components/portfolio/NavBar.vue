<template>
    <v-col cols="12" class="main-nav">
        <v-card class="flex">
            <div class="logo">
                <h1>JHOMEL <span>IGNACIO</span></h1>
            </div>
            <div class="menu">
                <ul>
                    <li @click="$router.push({name:'Portfolio'})">Home</li>
                    <li  @click="$router.push({name:'About'})">About</li>
                    <li>Works</li>
                    <li  @click="$router.push({name:'Contact'})">Contact</li>
                </ul>
            </div>
            <div class="cta">
                <button>
                    <span> Let's talk </span>
                </button>
                <span class="material-icons">
                    north_east
                </span>
            </div>
        </v-card>
    </v-col>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>
<style lang="scss" scoped>
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