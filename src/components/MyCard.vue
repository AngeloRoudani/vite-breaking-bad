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

    img {
        width: 100%;
        padding: 0 1rem;
    }
</style>