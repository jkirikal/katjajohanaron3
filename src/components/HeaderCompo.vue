<template>
<div class="nav">
    <router-link to="/main">Home</router-link>
    <router-link to="/signup">Sign up</router-link>
</div>
</template>
<script>
//import { defineComponent } from '@vue/composition-api'

export default {
    name:'HeaderCompo'
    }
</script>
<style scoped>
.nav{
    background-color: rgb(73, 79, 76);
    overflow:hidden;
    border-style: double;
    border: 5px solid rgb(130, 184, 162);
    border-radius: 25px;
    height:60px;
}

.nav a{
    /*float:center;*/
    color:rgb(242, 242, 248);
    padding:14px 16px;
    text-align:center;
    font-size: 1.1rem;
    text-decoration:none;
    margin-right:5px;
    height:30px;
    display: inline-block;
    margin-top: 1px;

}

.nav a:hover{
    background-color: rgb(97, 183, 155);
    border-radius: 10px;
    
}

</style>
