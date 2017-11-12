<template>
  <v-app>

    <v-layout column>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-toolbar app flat dense class="cyan" dark>
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>
          <div class="white elevation-2">
          </div>
          <main class="pl-4 pr-4 pt-2 pb-2">
            <div>
              <input type="email" name="email" v-model="email" placeholder="email">
            </div>
            <div>
              <input type="password" name="password" v-model="password" placeholder="password">
            </div>
            <div class="error" v-html="error"></div>
            <div>
              <v-btn class="cyan" @click="register">Register</v-btn>
            </div>
          </main>

        </v-card>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
  import AuthenticationService from '@/services/AuthenticationService'

  export default {
    name: 'Register',
    data () {
      return {
        email: '',
        password: '',
        error: null
      }
    },
    methods: {
      async register () {
        try {
          await AuthenticationService.register({
            email: this.email,
            password: this.password
          })
        } catch (error) {
          this.error = error.response.data.error
        }
      }
    }
  }
</script>

<style scoped>

</style>

