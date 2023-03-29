<template>
    <div class="container">
        <div class="message">Found card</div>
        <div class="wrapper">
            <div v-for="(element, index) in store.FigurineList.data" class="single_card" :key="index">
                <MyCard :image="element.card_images[0].image_url"
                        :name="element.name"
                        :type="element.archetype"    
                    />
            </div>
        </div>

    </div>
</template>

<script>
    import MyCard from './MyCard.vue';
    import {store} from '../store.js';

    export default  {

        name: 'MyCardList',
        data() {
            return {
                store
            }
        },
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
        font-weight: bold;
        padding: 10px;

    }

    .wrapper {
        width: 90%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
    }
    .single_card {
        text-align: center;
        width: calc(100% / 5);
    }
</style>