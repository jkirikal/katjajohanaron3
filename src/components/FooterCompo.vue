<template>
    <div class="nav_foot">
        <h1>J | K | A</h1>
        <a href="#">Contact us</a>
        <p>© Copyright 2022, Johan | Katja | Aron </p>
    </div>
    </template>
    <script>
    //import { defineComponent } from '@vue/composition-api'
    
    export default {
        name:'FooterCompo'
        }
    </script>
    <style scoped>
    .nav_foot{
        background-color: rgb(73, 79, 76);
        overflow:hidden;
        border-style: double;
        border: 5px solid rgb(130, 184, 162);
        border-radius: 25px;
    }
    .nav_foot a{
    float:center;
    color:rgb(242, 242, 248);
    padding:14px 20px;
    text-align:center;
    font-size: 25 px;
    text-decoration:none;
    margin-right:5px;
    height:50px;
}
.nav_foot a:hover{
    background-color: rgb(97, 183, 155);
    border-radius: 25px;
}
    .nav_foot h1{
        float:center;
        color:rgb(216, 236, 71);
       /* padding:14px 10px;*/
        text-align:center;
        font-size: 15 px;
        margin-right:5px;
        height:50px;
    }
    .nav_foot p{
        color: rgb(103, 158, 188);
        text-align:center;
        float:center;
    }
    </style>
    