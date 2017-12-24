<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="songs">
      Tab Tracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="/songs">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="/login">
        Login
      </v-btn>
      <v-btn v-if="$store.state.isUserLoggedIn" flat dark @click="logout">
        Logout
      </v-btn>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="/register">
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {
    methods: {
      logout () {
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)
        this.$router.push({
          name: 'songs'
        })
      }
    }
  }
</script>
