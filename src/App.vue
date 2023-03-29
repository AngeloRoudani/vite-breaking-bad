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

    export default {
        data () {
            return {

            }
        },
        components: {
            AppHeader,
            AppChoose,
            MyCardList

        }
    }

</script>

<style lang="scss">

@use './styles/generals.scss';

</style>
