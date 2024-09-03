<template>
    <section :class="`mt-5 container m-auto  about p-5 ${current_page === 'about' ? 'fade-upward' : ''}`"
        data-aos="fade-up">
        <NavBar />
        <div class="title-section text-left text-sm-center container change-section">
            <h1>ABOUT <span>ME</span></h1>
            <span class="title-bg">Resume</span>
        </div>
        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 lg:pt-5 lg:mt-5 personal-information">
            <div class="__data">
                <h1 class="mb-5 pb-5">Personal Information</h1>
                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div v-for="item in personalData" :key="item.label">
                        <p>{{ item.label }}:
                            <span class="font-normal">{{ item.value }}</span>
                        </p>
                    </div>
                </div>
                <div class="pt-5 mt-5">
                    <button :class="`btn-main flex items-center justify-center bg-yellow}`">
                        DOWNLOAD CV <i class="fa-solid fa-download"></i></button>
                </div>
            </div>
            <div class="credentials p-5">
                <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 ">
                    <div class="col _cards" v-for="card in cards" :key="card.label2">
                        <a href="#"
                            class="block max-w-sm p-6 bg-transparent border rounded-lg shadow dark:bg-gray-800 dark:border-gray-300 dark:hover:bg-gray-700">
                            <dt class="mb-2 text-3xl font-extrabold">{{ card.experience }}+</dt>
                            <dd class="pt-5  flex items-center uppercase  "><span class="sm-line"></span>{{
                                card.label1 }}<br>{{ card.label2 }}</dd>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- skills -->
        <div class="skills-section">
            <h1 class="">MY SKILLS</h1>
            <div class="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                <!--  -->
                <div class="box" v-for="skill in skills" :key="skill.label">
                    <div class="circle" data-dots="100" :data-percent="skill.rate"></div>
                    <div class="skill-label">
                        <h2>{{ skill.rate }}%</h2>
                        <small>{{ skill.label }}</small>
                    </div>
                </div>
                <!--  -->
            </div>
        </div>
        <div class="experience-section">
            <h1 class="text-center main-heading">EXPERIENCE & EDUCATION</h1>
            <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-8 justify-items-center ">
                <div class="col">
                    <ul>
                        <li class="pt-5">
                            <div class="__description">
                                <div class="__icon"><i class="fa-solid fa-briefcase"></i><span class="__line"></span>
                                </div>
                                <div class="status mr-1 rounded-full">September 2022 to Present 2023</div>
                                <h1>Netseek Pty LTD / WordPress Developer</h1>
                                <p>Create and Develop WordPress Websites from scratch.</p>
                                <p>Developed WP Comparison Plugin.</p>
                                <p>Create and develop WP Plugins.</p>
                                <p>Zapier and OPENAI Integration.</p>
                            </div>
                        </li>
                        <li class="pt-5">
                            <div class="__description">
                                <div class="__icon"><i class="fa-solid fa-briefcase"></i><span class="__line"></span>
                                </div>
                                <div class="status mr-1 rounded-full">March 2023 - September 2023</div>
                                <h1>Purplebug Inc. - WordPress Developer / WordPress Consultant</h1>
                                <p>Create and Develop WordPress Websites from scratch.</p>
                                <p>Create and Develop Shopify Websites from scratch.</p>
                                <p>Create and Develop WordPress Plugins. Google Analytic Plugin , WP Admin Template
                                    and Elementor Widgets.</p>
                                <p>Create and Develop WordPress Themes and WP Templates.</p>
                                <p>Manage server configuration to maintain and improve website speed.</p>
                            </div>
                        </li>
                        <li class="pt-5">
                            <div class="__description">
                                <div class="__icon"><i class="fa-solid fa-briefcase"></i><span class="__line"></span>
                                </div>
                                <div class="status mr-1 rounded-full">July 2020 - October 2021</div>
                                <h1>IFORMAT LOGIC</h1>
                                <p>Create and Develop WordPress Websites from scratch.</p>
                                <p>Create and Develop Shopify Websites from scratch.</p>
                                <p>Create and Develop Larvel Websites from scratch.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                <!--  -->
                <div class="col">
                    <ul>
                        <li class="pt-5">
                            <div class="__description">
                                <div class="__icon"><i class="fa-solid fa-briefcase"></i><span class="__line"></span>
                                </div>
                                <div class="status mr-1 rounded-full">August 2015 - June 2019</div>
                                <h1>TERTIARY</h1>
                                <h1>Tarlac State University</h1>
                                <p>BS in Information Technology major in Web & Mobile Applications</p>
                                <p>Address: Romulo Boulevard, San Vicente, Tarlac City, Tarlac, 2300, Philippines
                                </p>
                            </div>
                        </li>
                        <li class="pt-5">
                            <div class="__description">
                                <div class="__icon"><i class="fa-solid fa-briefcase"></i><span class="__line"></span>
                                </div>
                                <div class="status mr-1 rounded-full">2008 - 2012</div>
                                <h1>SECONDARY</h1>
                                <h1>MALIWALO NATIONAL HIGH SCHOOL ANNEX</h1>
                                <p>Address: Tibag Tarlac City, Tarlac</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
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
            modal_aboutme: false,
            modal_portfolio: false,
            active_project: [],
            current_page: 'about',
            progressbarCalled: false,
            personalData: [
                { label: 'First Name', value: 'Jhomel' },
                { label: 'Last Name', value: 'Ignacio' },
                { label: 'Age', value: '27' },
                { label: 'Gender', value: 'Male' },
                { label: 'Nationality', value: 'Filipino' },
                { label: 'Address', value: 'Barangay Care Tarlac City' },
                { label: 'Phone', value: '+63935 298 9795' },
                { label: 'Email', value: 'jhomignacio05@gmail.com' },
                { label: 'Skype', value: 'live:.cid.bdc98ed4ff57a19a' },
                { label: 'Languages', value: 'English, Filipino' },
            ],
            skills: [
                { label: 'HTML', rate: '80' },
                { label: 'CSS', rate: '80' },
                { label: 'PHP', rate: '70' },
                { label: 'JAVASCRIPT', rate: '70' },
                { label: 'WORDPRESS', rate: '80' },
                { label: 'LARAVEL', rate: '70' },
                { label: 'VUEJS', rate: '70' },
                { label: 'SHOPIFY', rate: '70' },
            ],
            cards: [
                { label1: 'Years of Experience in', label2: 'WORDPRESS', experience: '3' },
                { label1: 'Years of Experience in', label2: 'LARAVEL', experience: '2' },
                { label1: 'Years of Experience in', label2: 'VUEJS', experience: '1' },
                { label1: 'Projects', label2: 'Created', experience: '9' },

            ],
        }
    },
    methods: {
        async UpdateprogressbarState() {
            if (this.current_page === 'about') {
                this.progressbarCalled = true;
            } else {
                this.progressbarCalled = false;
            }
            return this.progressbarCalled;
        },
        Progressbar() {
            const circles = document.querySelectorAll('.circle');
            circles.forEach(elem => {
                var dots = elem.getAttribute('data-dots');
                var marked = elem.getAttribute('data-percent');
                var percent = Math.floor(dots * marked / 100);
                var rotate = 360 / dots;
                var points = "";
                for (let i = 0; i < dots; i++) {
                    points += `<div class="points" style="--i:${i}; --rot: ${rotate}deg;"></div>`;
                }
                elem.innerHTML = points;

                const pointsmarked = elem.querySelectorAll('.points');
                for (let i = 0; i < percent; i++) {
                    pointsmarked[i].classList.add('marked');
                }
            });
        }
    },
    mounted() {
        this.Progressbar();
    }
}
</script>

<style lang="scss" scoped>
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
                        color: #9747ff;
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
                    background: #9747ff;
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
                    background: #9747ff;
                    transition: all .4s;
                }
            }
        }
    }
section.about {
    .experience-section {
        .main-heading {
            text-align: center;
            font-family: "Plus Jakarta Sans", sans-serif;
            color: #000;
            font-size: 2rem;
            font-weight: 900 !important;
            text-transform: uppercase;
            margin: 100px 0 35px 0;
        }

        .col {
            .__heading {
                text-align: left;
                font-family: "Plus Jakarta Sans", sans-serif;
                color: #000;
                font-size: 2rem;
                font-weight: 900 !important;
                text-transform: uppercase;
                margin: 100px 0 35px 0;
            }

            ul {
                li {
                    .__description {
                        font-family: "Plus Jakarta Sans", sans-serif;
                        position: relative;
                        padding: 0 20px 0 60px;
                        margin-bottom: 60px;

                        &::after {
                            content: "";
                            position: absolute;
                            top: 20px;
                            left: 20px;
                            bottom: 0;
                            border-left: 1px solid #000;
                        }

                        .__icon {
                            i {
                                width: 40px;
                                height: 40px;
                                position: absolute;
                                left: 0;
                                right: 0;
                                line-height: 40px;
                                text-align: center;
                                z-index: 1;
                                border-radius: 50%;
                                color: #fff;
                                background: #ffb400;
                            }
                        }
                    }

                    .status {
                        background-color: #eee;
                        width: fit-content;
                        color: #666;
                        font-size: 12px;
                        margin-bottom: 12px;
                        border-radius: 20px;
                        font-weight: 600;
                        opacity: .8;
                        padding: 8px 20px;
                        text-transform: uppercase;
                        font-family: sans-serif;

                    }

                    h1 {
                        margin-top: 20px;
                        text-transform: uppercase;
                        font-size: 1.2rem;
                    }

                    p {
                        margin-top: 20px;
                        font-size: 0.9rem;
                        color: #666;
                        font-weight: 300;
                    }
                }
            }
        }

    }
}

.dark {

    section.about,
    section.portfolio {
        @media screen and (max-width:768px) {
            margin-bottom: 100px;
        }

        .title-section {
            position: relative;
            display: flex;
            justify-content: center;
            text-align: center;
            height: 100px;
            margin: auto;

            h1 {
                color: #fff;
                font-size: 56px;
                font-weight: 900 !important;
                text-transform: uppercase;
                margin: 0;
                z-index: 2;

                span {
                    color: #ffb400;
                }

                @media screen and (max-width:768px) {
                    font-size: 2rem;
                    line-height: 2rem !important;
                }
            }

            .title-bg {
                opacity: 0.3;
                font-size: 110px;
                letter-spacing: 10px;
                line-height: .7;
                text-transform: uppercase;
                font-weight: 800;
                position: absolute;
                top: 0;
                left: 50%;
                transform: translate(-50%, 0%);
                color: #fff;

                @media screen and (max-width:768px) {
                    font-size: 3rem;
                    line-height: 2rem !important;
                }
            }
        }

    }

    .personal-information {
        .__data {
            h1 {
                color: #fff;
                font-weight: 300 !important;
            }

            p {
                color: #fff;
                font-weight: 300 !important;
            }

            button {
                color: #fff !important;
            }
        }

        .credentials {
            ._cards {
                a {
                    height: 100%;
                    font-size: 1.2rem;
                    border: 1px solid #252525 !important;

                    dt {
                        margin: 0;
                        font-size: 50px;
                        font-weight: 800;
                        color: #ffb400;
                    }

                    dd {
                        color: #fff !important;
                        font-weight: 300 !important;

                        span.sm-line {
                            border: 1px solid #fff !important;
                            width: 30px;
                            margin-right: 20px;

                        }
                    }
                }
            }
        }
    }
}

.dark {

    .skills-section {
        h1 {
            color: #fff !important;
        }

        .box {

            .skill-label {

                h2 {

                    color: #fff !important;
                }

                small {

                    color: #fff !important;
                }
            }
        }
    }
}

.dark {

    section.about {
        @media screen and (max-width:768px) {
            margin-bottom: 100px;
        }

        .experience-section {
            .main-heading {

                color: #fff;

            }

            .col {
                .__heading {

                    color: #fff;

                }

                ul {
                    li {


                        .__description {

                            &::after {

                                border-left: 1px solid #fff;
                            }

                            .__icon {
                                i {

                                    color: #fff;
                                    background: #ffb400;
                                }
                            }
                        }

                        .status {
                            background-color: #ffb400;

                            color: #fff;


                        }

                        h1 {

                            color: #fff;
                        }

                        p {

                            color: #fff;
                        }
                    }
                }
            }

        }
    }
}
</style>