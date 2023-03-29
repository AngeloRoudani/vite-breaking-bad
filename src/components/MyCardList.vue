<template>
    <div class="container">
        <div class="message">Found card</div>
        <div class="wrapper">
            <div v-for="(photo, index) in store.FigurineImage" :key="index">
                <MyCardImage :image="photo.image_url"/>
            </div>
            <div v-for="(element, index) in store.FigurineList.data" class="single_card" :key="index"> 
                <MyCard
                        :name="element.name"
                        :type="element.archetype"    
                    />
            </div>
        </div>

    </div>
</template>

<script>
    import MyCard from './MyCard.vue';
    import MyCardImage from './MyCardImage.vue';
    import {store} from '../store.js';

    export default  {

        name: 'MyCardList',
        data() {
            return {
                store
            }
        },
        components: {
            MyCard,
            MyCardImage
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

    .wrapper {
        display: flex;
        flex-wrap: wrap;
    }
</style>