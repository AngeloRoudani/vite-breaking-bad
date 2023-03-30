<template>
    
    <selected @change="$emit('chooseArch')" class="type" :v-model="element">
        <option v-for="(element, index) in store.Archetype" 
                :value="element" :key="index">{{element}}
        </option>
        
    </selected>
</template>

<script>
    import {store} from '../store.js';

    export default  {
        name: 'AppChoose',
        data() {
            return {
                store
            }
        },
    }
</script>

<style scoped lang="scss">
@use '../styles/partials/variables' as *;
    .type {
        display: inline-block;
        background-color: $color-primary;
        width: 150px;
        margin: 50px 0 50px 10px;
        border-radius: 5px;
        padding: 5px;
    }
</style>