<template>
<ul>
<li class="post" v-for = "post in postInfo" :key="post.id">
    <div class="posterInfo">
        <span class="posterPhoto">
            <img :src=post.profilePic />
        </span>
        <span class="postDate">
            {{post.time}}
        </span>
    </div>
    <div class="photo">
        <img :src=post.picture alt="post picture">
    </div>  
    <div class="postText">
        <p>{{post.text}}</p>
    </div>
    <div class="postFooter">
        <span class="likeButton">
            <button v-on:click="IncreaseLike(post.id)"> Like </button>
        </span>
        <span class="likes">
            <p>{{post.likecount}}</p>
        </span>
    </div>
</li>
</ul>
</template>

<script>
export default {
name: "PostCompo",
data: function() {
return {
}},
computed: {
    postInfo(){
        return this.$store.state.postInfo
    }
},
methods: {
IncreaseLike: function(id) {
    this.$store.commit('increment', id)
}
}
}
</script>

<style scoped>
    .posterPhoto img{
        height:30px;
        width:30px;
    }
    .photo img{
        height:450px;
        width:600px;
    }
    ul {
    list-style-type: none;
    width:600px;
    }
    .post{
        display:flex;
        flex-direction:column;
        width:600px;
        border: 1px solid #1E5128;
    }

</style>