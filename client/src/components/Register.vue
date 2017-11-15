<template>
    <v-layout column>
      <v-flex xs6 offset-xs3>
        <v-card>
          <v-toolbar flat dense class="cyan white--text">
            <v-toolbar-title>Register</v-toolbar-title>
          </v-toolbar>

          <main class="pl-4 pr-4 pt-2 pb-2">
            <form name="tab-tracker-form">
            <v-text-field
              v-model="email"
            label="Email">
            </v-text-field>
            <v-text-field
              v-model="password"
              type="password"
              autocomplete="new-password"
              label="Password">
            </v-text-field>
            </form>
            <div class="error" v-html="error"></div>
            <div>
              <v-btn class="cyan white--text" @click="register">Register</v-btn>
            </div>
          </main>

        </v-card>
      </v-flex>
    </v-layout>
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
          let response = await AuthenticationService.register({
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

