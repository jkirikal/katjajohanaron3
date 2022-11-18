<template>
    <form id="form">
        <span>Email</span>
        <input v-model="form.email" type="text" placeholder="Email"><br>
        <span>Password</span>
        <input v-model="form.password" type="password" placeholder="Password"><br>
        <p v-if="error">
            Fix
        </p>
    </form>
</template>

<script>
export default {
    data: function() {
        return {
            form: {
            name: "",
            password: ""
        }
        }
    }
}
</script>