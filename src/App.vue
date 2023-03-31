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

                    if (store.selected == 'all') {
                        urlArch = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
                    } else {
                        urlArch += `?archetype=${store.selected}`;
                    }
                    
                
                console.log(urlArch);
                
                axios.get(urlArch)
                    .then(response => {
                        
                        this.store.FigurineList = response.data;
                        console.log(this.store.FigurineList);      
                });

            },
            getArchetype() {
                axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
                    .then(response => {
                        
                        this.store.Archetype = response;
                        console.log(this.store.Archetype);      
                });
            }
        },
        created() {
            this.getFigurine();
            this.getArchetype();
        }
    }
</script>

<style lang="scss">
@use './styles/generals.scss';
</style>
