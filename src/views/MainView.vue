<template>


    <div id="allposts">
        <post-compo></post-compo>
    </div>
    <span id="resetAll">
        <button v-on:click="resetAll"> Reset all likes </button>
    </span>

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
</style>