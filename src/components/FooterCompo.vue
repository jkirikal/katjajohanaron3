<template>
    <div class="nav_foot">
        <h1>J K A</h1>
        <p>© Copyright 2022, Johan | Katja | Aron </p>
        <a href="#">Contact us</a>
    </div>
    </template>
    <script>
    //import { defineComponent } from '@vue/composition-api'
    
    export default {
        name:'Footer'
        }
    </script>
    <style>
    .nav_foot{
        background-color: rgb(5, 83, 36);
        overflow:hidden;
    }
    .nav_foot h1{
        float:center;
        color:rgb(222, 222, 242);
        padding:14px 16px;
        text-align:center;
        font-size: 17 px;
        margin-right:5px;
        height:50px;
    }
    .nav p{
        color: rgb(97, 183, 155);
        text-align:center;
        float:center;
    }
    </style>
    