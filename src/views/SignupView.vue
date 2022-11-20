<template>
    <div id="main">
        <form @submit="kontroll" action="#">
            <div class="text">
                <span>Username</span>
                <input type="text" placeholder="Username">
            </div><br>
            <div class="text">
                <span>Password</span>
                <input type="password" placeholder="Password" v-model="pass">
            </div><br>
            <button type="submit">Submit</button><br>
            <p v-if="!this.correct" id="warning">
                Password must contain: One uppercase letter, two lowercase, 
                one number, one "-" and must be between 8-15 charecters.
            </p>
        </form>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            pass: null,
            correct: true
        }
    },
    methods: {
        kontroll: function(juhtum) {
            let errorset = /^[A-Z]+(?=.*[0-9])(?=.*[a-z])(?=.*[a-z])(?=.*[A-Z])(?=.*[-]).{8,15}$/.test(this.pass)
            console.log(errorset)
            this.correct = errorset
            juhtum.preventDefault()

        }
    }
}
</script>

<style scoped>
#main {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    margin: 100px;
    border-radius: 25px;
    padding: 20px;
}
.text {
    display: flex;
    margin: 20px;
    margin-left: 50px;
    margin-right: 50px;
}
#warning {
    color: red;
    word-wrap: break-word;
}
</style>