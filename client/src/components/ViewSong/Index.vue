<template>
  <v-layout>
    <v-flex xs6>
      <v-flex>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex class="mt-2">
        <tab :song="song"></tab>
      </v-flex>
    </v-flex>

    <v-flex xs6 class="ml-2">
      <v-flex>
        <you-tube :youtubeId="song.youtubeId"></you-tube>
      </v-flex>
      <v-flex class="mt-2">
        <lyrics :song="song"></lyrics>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
  import SongMetadata from './SongMetadata'
  import YouTube from './YouTube'
  import Lyrics from './Lyrics'
  import Tab from './Tab'
  import SongService from '@/services/SongsService'
  import SongHistoryService from '@/services/SongHistoryService'
  import { mapState } from 'vuex'

  export default {
    name: 'ViewSong',
    data () {
      return {
        song: {}
      }
    },
    components: {
      SongMetadata,
      YouTube,
      Lyrics,
      Tab
    },
    computed: {
      ...mapState([
        'isUserLoggedIn',
        'user',
        'route'
      ])
    },
    async created () {
      const songId = this.route.params.songId
      this.song.id = songId
      this.song = (await SongService.show(songId)).data

      if (this.isUserLoggedIn) {
        SongHistoryService.post({
          songId: songId,
          userId: this.user.id
        })
      }
    }
  }
</script>

<style scoped>

</style>

