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
            <button id=likeId v-on:click="IncreaseLike(post.id)"><img id="likeimg" src="../../media/like.png"/></button>
        </span>
        <span class="likes">
            <p>{{post.likecount}} likes</p>
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
        border-radius:10px;
    }
    .photo img{
        height:400px;
        width:100%;
    }
    ul {
    list-style-type: none;
    width:80%;
    }
    .post{
        display:flex;
        flex-direction:column;
        border: 5px solid rgb(97, 183, 155);
        border-radius:20px;
        background-color: rgb(73, 79, 76);
        color:white;
    }
    .postDate{
        margin-top:8px;
    }
    li {
        margin:10px;
    }
    .posterInfo{
        padding:10px;
        display:flex;
        justify-content:space-between;
    }
    .postFooter{
        display:flex;
        justify-content:space-between;
        margin:10px;
        margin-right:20px;
    }
    .likes{
        margin-top:10px;
    }
    #likeimg{
        height:40px;
        width:40px;
    }
    #likeId{
        border:0;
        padding:10px;
        border-radius:20px;
        background-color: rgb(78, 84, 81);
    }
    #likeId:hover{
        background-color: rgb(97, 183, 155);
        transition: 0.3s;
    }

</style>