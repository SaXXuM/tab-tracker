<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <main class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field
            v-model="email"
            label="Email">
          </v-text-field>
          <v-text-field
            v-model="password"
            type="password"
            label="Password">
          </v-text-field>
          <div class="error" v-html="error"></div>
          <div>
            <v-btn class="cyan white--text" @click="login">Login</v-btn>
          </div>
        </main>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    name: 'Login',
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async login () {
        try {
          let response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>

</style>

