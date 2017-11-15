<template>
  <v-toolbar fixed class="cyan" dark>
    <v-toolbar-title class="mr-4">
      <router-link to="root">
      Tab Tracker
      </router-link>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat dark to="">
        Browse
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="login">
        Login
      </v-btn>

      <v-btn v-if="!$store.state.isUserLoggedIn" flat dark router to="register">
          Sign Up
        </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
  export default {}
</script>
