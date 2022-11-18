<template>
    <form>
        <span>Email: </span>
        <input v-model= "form.email" type="text"><br>
        <span>Password: </span>
        <input type="password"><br>
    </form>
</template>

<script>
export default {
    data: {
        form: {
            name: "",
        }
    }
    
}
</script>