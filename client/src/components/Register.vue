<template>
  <div>
    <h1>Register</h1>
    <div>
    <input type="email" name="email" v-model="email" placeholder="email">
    </div>
    <div>
    <input type="password" name="password" v-model="password" placeholder="password">
    </div>
    <div>
      <button @click="register">Register</button>
    </div>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  name: 'Register',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

