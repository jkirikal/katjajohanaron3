<template>
    <div class="body">
        <div class="sidebar"></div>
        <div class="middlepart">
            <div id="allposts">
            <post-compo></post-compo>
            </div>
            <span>
                <button id="resetButton" v-on:click="resetAll"> Reset all likes </button>
            </span>
        </div>
        <div class="sidebar"></div>
    </div>
</template>
   
<script>
   import PostCompo from "@/components/PostCompo.vue";
   export default {
   name: "MainView",
   components: {PostCompo},
   data: function() {
   return {}},
   
   methods: {
    resetAll: function() {
        this.$store.commit('reset')
    }
   }
   }
</script>

<style scoped>
    #allposts{
        display:flex;
        justify-content:center;
    }
    #resetButton{
        background-color: rgb(73, 79, 76);
        border:5px solid rgb(130, 184, 162);
        border-radius: 10px;
        width:150px;
        margin-bottom: 10px;
        padding: 10px;
        color:white;
    }
    #resetButton:hover{
        background-color: rgb(97, 183, 155);
        transition: 0.3s;
    }
    .sidebar{
        border:5px solid rgb(130, 184, 162);
        background-color: rgb(73, 79, 76);
        width:20%;
        border-radius: 20px;
        margin:5px;
    }
    .body{
        display:flex;
        justify-content:space-between;
    }
</style>