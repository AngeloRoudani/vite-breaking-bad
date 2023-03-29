<template>
    <div class="card">
        <img :src="image" :alt="name">
        <h4>{{name}}</h4>
        <div>{{type}}</div>
        
    </div>
</template>

<script>
    import {store} from '../store.js';

    export default  {
        name: 'MyCard',
        data () {
            return {
                store
            }
        },
        props: {
            image: String,
            name: String,
            type: String
        }
        
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;

    .card {
        width: calc(100% - 1rem) ;
        background-color: $bg-primary;
        height: 400px;
        margin-bottom: 1rem;
    }

    img {
        margin-right: 10px;
        width: 110%;
        padding: 0 1rem;
    }

    h4 {
        color: $color-primary;
        text-transform: uppercase;
        padding: 5px;
    }
</style>