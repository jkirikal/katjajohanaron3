<template>
<div class="nav">
    <a href="#">Home</a>
    <a href="#">Sign up</a>
</div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name:'Header'
    }
</script>
<style>
.nav{
    background-color: rgb(5, 83, 36);
    overflow:hidden;
}
.nav a{
    float:left;
    color:rgb(222, 222, 242);
    padding:14px 16px;
    text-align:center;
    font-size: 17 px;
    text-decoration:none;
    margin-right:5px;
    height:50px;
}
.nav a:hover{
    background-color: rgb(97, 183, 155);
}
</style>
