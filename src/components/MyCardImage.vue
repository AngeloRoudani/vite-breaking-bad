<template>
    <div class="photo">
        <img :src="image" :alt="name">
    </div>
</template>

<script>
    import {store} from '../store.js';
    

    export default  {
        name: 'MyCardImage',
        data () {
            return {
                store
            }
        },
        props: {
            image: String,  
        }
        
    }
</script>

<style scoped lang="scss">
    .photo {
        width: calc(100% / 5);
    }
</style>