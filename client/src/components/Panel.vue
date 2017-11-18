<template>
  <v-card>
    <v-toolbar flat dense class="cyan white--text">
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action">
      </slot>
    </v-toolbar>

    <main class="pl-4 pr-4 pt-2 pb-2">
      <slot>
        No slot content defined.
      </slot>
    </main>

  </v-card>
</template>

<script>
  export default {
    name: 'Panel',
    data () {
      return {}
    },
    props: [
      'title'
    ]
  }
</script>

<style scoped>

</style>

