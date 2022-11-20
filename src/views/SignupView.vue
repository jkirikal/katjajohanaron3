<template>
    <h1>tere</h1>
    <div>
       <form id="form">
        <span>Email</span>
        <input v-model="form.email" type="text" placeholder="Email"><br>
        <span>Password</span>
        <input type="password" v-model.trim="$v.password.$model" 
        :class="{'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid}">
        
        </form>
     <div>Password is valid!</div>
    </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
    data: function () {
        return {
            password: ""
        }
    },
    validations: {
        password: {
            required,
            minLength: minLength(8),
            maxLength: maxLength(15),
        }
    }

}
</script>

<style scoped>
div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: aqua;
    margin: 50px;
}
</style>