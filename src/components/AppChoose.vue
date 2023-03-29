<template>
    
    <selected class="type">
        <option value="Alien">Alien</option>
    </selected>
</template>

<script>
    export default  {
        name: 'AppChoose'
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