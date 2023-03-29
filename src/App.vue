<template>
    <body>
        <header>
            <AppHeader/>
        </header>

        <main>
            <AppChoose/>
            <MyCardList/>
        </main>
    </body>

</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    import AppChoose from './components/AppChoose.vue';
    import MyCardList from './components/MyCardList.vue';
    import axios from 'axios';
    import { store } from './store.js';

    export default {
        data () {
            return {
                store
            }
        },
        components: {
            AppHeader,
            AppChoose,
            MyCardList

        },
        methods: {
            getFigurine() {
                axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes')
                    .then(response => {
                        this.store.FigurineList = response.data;
                        this.store.FigurineImage = response.data.card_images;
                        console.log(this.store.FigurineList);
                        console.log(this.store.FigurineImage);
                });
            }
        },
        created() {
            this.getFigurine();
        }
    }

</script>

<style lang="scss">

@use './styles/generals.scss';

</style>
