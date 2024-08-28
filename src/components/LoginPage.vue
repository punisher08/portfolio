<template>
    <v-container class="login_container">
        <!-- Logo -->
        <v-col cols="4" class="mx-auto" sm-cols="12">
            <div class="welcome">
                <h2 class="heading"> {{  $store.state.user }} </h2>
                <p class="text">Sign in to your account.</p>
            </div>
        </v-col>
        <v-col cols="4" class="mx-auto" sm-cols="12">
            <v-form>
                <div class="input-group relative">
                    <v-img :src="require('../assets/images/svg/mail.svg')" class="absolute icon-align" contain
                        width="20" />
                    <input type="text" name="email" class="w-full primary-input" placeholder="Email" v-model="email">
                </div>
                <div class="input-group relative">
                    <v-img :src="require('../assets/images/svg/lock.svg')" class="absolute icon-align" contain
                        width="20" />
                    <input type="password" name="password" class="w-full primary-input" placeholder="password"
                        v-model="password">
                </div>
                <div class="form-footer">
                    <button class="primary-button bold" @click.prevent="authenticate">Sign in</button>
                </div>
            </v-form>
        </v-col>
        <v-col cols="4" class="mx-auto" sm-cols="12">
            <div class="divider">
                <h3 class="text-center or">OR</h3>
            </div>
        </v-col>
        <v-col cols="4" class="mx-auto flex" sm-cols="12">
            <v-col cols="6" sm-cols="12">
                <v-card class="flex justify-center">
                    <v-img :src="require('../assets/images/svg/google.svg')" class="max-w-50" contain width="20" />
                </v-card>
            </v-col>
            <v-col cols="6" sm-cols="12">
                <v-card class="flex justify-center">
                    <v-img :src="require('../assets/images/svg/facebook.svg')" class="max-w-50" contain width="20" />
                </v-card>
            </v-col>
        </v-col>
        <v-col cols="4" class="mx-auto" sm-cols="12">
            <div class="singup ">
                <h3 class="text-center">Don't have an account ? <span><a href="#sign-up">Sign up</a></span></h3>
            </div>
        </v-col>
    </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        ...mapActions(['login']), 
        async authenticate() {
            try {
                await this.login({ email: this.email, password: this.password });
                this.$router.push({ name: 'Dashboard' }); 
            } catch (error) {
                console.error('Login failed:', error);
            }
        }
    }
};
</script>

<style lang="css" scoped>
.welcome {
    text-align: left;
}

.heading {
    font-size: 3rem;
    text-align: left;
}

.input-group {
    padding: 15px 0px;
}

input {
    padding-left: 50px;
}

.icon-align {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);

}


button {
    min-width: 100%;
    margin-top: 15px;
}

.max-w-50 {
    max-width: 30px;

}

.v-card {
    padding: 15px;
}

.or {
    color: #a1a1a1;
    padding: 20px 0px;
}

.flex {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
}

@media screen and (max-width: 768px) {
    .login_container {
        top: 0%;
    }
}
</style>