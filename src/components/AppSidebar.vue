
<template>
    <v-card>
        <v-layout>
            <v-app-bar color="primary" prominent>
                <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

                <v-toolbar-title>
                    <v-img :src="require('../assets/images/png/logo.png')" class="absolute icon-align" contain
                        width="20" />
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <template v-if="$vuetify.display.mdAndUp">
                    <v-btn icon="mdi-magnify" variant="text"></v-btn>

                    <v-btn icon="mdi-filter" variant="text"></v-btn>
                </template>

                <v-btn icon="mdi-dots-vertical" variant="text"></v-btn>
            </v-app-bar>

            <v-navigation-drawer v-model="drawer" :location="$vuetify.display.mobile ? 'left' : undefined" temporary>
                <v-list-item prepend-icon="mdi-folder" :title="item.title" :value="item.title" class="align-left"
                    v-for="item in items" :key="item.title"></v-list-item>
            </v-navigation-drawer>

            <v-main>
                
            </v-main>
        </v-layout>
    </v-card>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
    data: () => ({
        drawer: false,
        group: null,
        items: [
            {
                title: 'Foo',
                value: 'foo',
            },
            {
                title: 'Bar',
                value: 'bar',
            },
            {
                title: 'Fizz',
                value: 'fizz',
            },
            {
                title: 'Buzz',
                value: 'buzz',
            },
        ],
        desserts: [
            {
                name: 'Frozen Yogurt',
                calories: 159,
            },
            {
                name: 'Ice cream sandwich',
                calories: 237,
            },
            {
                name: 'Eclair',
                calories: 262,
            },
            {
                name: 'Cupcake',
                calories: 305,
            },
            {
                name: 'Gingerbread',
                calories: 356,
            },
            {
                name: 'Jelly bean',
                calories: 375,
            },
            {
                name: 'Lollipop',
                calories: 392,
            },
            {
                name: 'Honeycomb',
                calories: 408,
            },
            {
                name: 'Donut',
                calories: 452,
            },
            {
                name: 'KitKat',
                calories: 518,
            },
        ],
    }),

    watch: {
        group() {
            this.drawer = false
        },
    },
}
</script>
<style lang="css" scoped>
.v-navigation-drawer__content {
    height: 100vh;
}

.v-list-item:hover {
    background-color: rgba(0, 0, 0, 0.164);
    cursor: pointer;
}

.align-left {
    text-align: left;
}
</style>
