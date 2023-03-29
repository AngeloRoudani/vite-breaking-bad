<template>
    <div class="container">
        <div class="message">Found card</div>
        <div class="wrapper">
            <MyCard/>
        </div>

    </div>
</template>

<script>
    import MyCard from './MyCard.vue';

    export default  {

        name: 'MyCardList',

        components: {
            MyCard
        }
    }
</script>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
    .container {
        width: 100%;
        background-color: $color-primary;
        padding-top: 40px;
    }

    .message {
        width: 90%;
        height: 40px;
        margin: auto;
        color: $color-primary;
        background-color: #212529;

    }
</style>