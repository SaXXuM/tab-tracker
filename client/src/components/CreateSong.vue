<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata">
        <v-text-field
          v-model="song.title"
          label="Title"
          required
          :rules="[required]">
        </v-text-field>

        <v-text-field
          v-model="song.artist"
          label="Artist">
        </v-text-field>

        <v-text-field
          v-model="song.genre"
          label="Genre">
        </v-text-field>

        <v-text-field
          v-model="song.album"
          label="Album">
        </v-text-field>

        <v-text-field
          v-model="song.albumImageUrl"
          label="Album Image Url">
        </v-text-field>

        <v-text-field
          v-model="song.youtubeId"
          label="YouTube ID">
        </v-text-field>      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">

        <v-text-field
          v-model="song.lyrics"
          label="Lyrics"
          multi-line>
        </v-text-field>

        <v-text-field
          v-model="song.tab"
          label="Tabs"
          multi-line>
        </v-text-field>

      </panel>
      <div class="error" v-if="error">
        {{error}}
      </div>
      <v-btn class="cyan white--text" @click="create">Create</v-btn>

    </v-flex>
  </v-layout>
</template>

<script>
  import SongService from '@/services/SongsService'
  import Panel from '@/components/Panel'

  export default {
    name: 'Songs',
    data () {
      return {
        song: {
          title: null,
          artist: null,
          genre: null,
          album: null,
          albumImageUrl: null,
          youtubeId: null,
          lyrics: null,
          tab: null
        },
        required: value => !!value || 'Required',
        error: null

      }
    },
    components: {
      Panel
    },
    methods: {
      async create () {
        this.error = null
        const areAllFieldsFilled = Object.keys(this.song).every(key => !!this.song[key])
        if (areAllFieldsFilled) {
          await SongService.post(this.song)
          this.$router.push({
            name: 'songs'
          })
        } else {
          this.error = 'Please fill in all required fields.'
        }
      }
    }
  }
</script>

<style scoped>

</style>

