<template>
    <body>
        <header>
            <AppHeader/>
        </header>

        <main>
            <AppChoose @chooseArch="getFigurine"/>
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
                let urlArch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';

                if (value == 'all') {
                    urlArch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
                } else {
                    urlArch += `?archetype=${value}`;
                }
                
                axios.get(urlArch)
                    .then(response => {
                        
                        this.store.FigurineList = response.data;
                        console.log(this.store.FigurineList);      
                });

            },
        },
        created() {
            this.getFigurine();
        }
    }
</script>

<style lang="scss">
@use './styles/generals.scss';
</style>
