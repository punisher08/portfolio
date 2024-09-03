<template>
    <div class="">
        <section :class="`pt-5 mt-5 container m-auto contact p-5 ${current_page === 'contact' ? 'fade-upward' : ''}`" data-aos="fade-right">
            <NavBar />
            <div class="title-section text-left text-sm-center container change-section">
                <h1>GET IN <span>TOUCH</span></h1>
                <span class="title-bg">CONTACT</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 items-center">
                <div class="col-span-1 md:col-span-1 lg:col-span-1">
                    <h1>DON'T BE SHY !</h1>
                    <p class="mt-5">Feel free to get in touch with me. I am always open to discussing new projects,
                        creative ideas or opportunities to be part of your visions.</p>
                    <ul class="mt-5 personal-info">
                        <li>
                            <div>
                                <i class="fa-sharp fa-solid fa-map-location"></i>
                            </div>
                            <div>
                                <h2>Address Point</h2>
                                <p>Zone 5 Barangay Care Tarlac City, <br>Tarlac 2300</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h2>EMAIL ME</h2>
                                <p><a href="mailto:jhomignacio05@gmail.com" target="_blank">jhomignacio05@gmail.com</a>
                                </p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="fa-brands fa-whatsapp"></i>
                            </div>
                            <div>
                                <h2>WHATSAPP</h2>
                                <p><a href="https://api.whatsapp.com/send?phone=09352989795"
                                        target="_blank">09352989795</a></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <i class="fa-brands fa-skype"></i>
                            </div>
                            <div>
                                <h2>SKYPE</h2>
                                <p><a href="skype:live:cid.bdc98ed4ff57a19a?chat" target="_blank">
                                        live:.cid.bdc98ed4ff57a19a</a></p>
                            </div>
                        </li>
                    </ul>
                    <div class="soc-med">
                        <ul>
                            <li><i class="fa-brands fa-facebook-f"></i></li>
                            <li><i class="fa-brands fa-twitter"></i></li>
                            <li><i class="fa-brands fa-youtube"></i></li>
                            <li><i class="fa-brands fa-github"></i></li>
                            <li><i class="fa-brands fa-linkedin"></i></li>
                        </ul>
                    </div>
                </div>
                <div class="col-span-1 md:col-span-2 lg:col-span-2 contact-form mt-5 px-5">
                    <form action="">
                        <div class="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 my-5">
                            <div>
                                <input type="text" placeholder="Name"
                                    class="border-gray-300 focus:border-blue-500 outline-none px-4 py-2">
                            </div>
                            <div>
                                <input type="email" placeholder="Email"
                                    class="border-gray-300 focus:border-blue-500 outline-none px-4 py-2">
                            </div>
                        </div>
                        <div>
                            <input type="text" placeholder="Subject"
                                class="border-gray-300 focus:border-blue-500 outline-none px-4 py-2">
                            <textarea name="" id="" cols="30" rows="10" placeholder="YOUR MESSAGE"></textarea>
                        </div>
                        <button type="submit" class="btn-main send-message my-5">SEND MESSAGE <i
                                class="fa-solid fa-paper-plane"></i></button>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
    name: 'ContactPage',
    components:{
        NavBar
    }
}
</script>