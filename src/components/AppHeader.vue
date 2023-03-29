<template>
    <div class="header_top">
        <img src="../assets/yu-gi-oh-logo.png" alt="logo">
        <h1>Yu-Gi-Oh API</h1>
    </div>
</template>

<script>
    export default  {
        name: 'AppHeader'
    }
</script>

<style scoped lang="scss">

@use '../styles/partials/variables' as *;
    .header_top {
        height: 50px;
        display: flex;
        align-items: center;
        padding: 10px;
        background-color: $color-primary;
        img {
            width: 50px;
        }
        h1 {
            display: inline-block;
        }
    }
</style>