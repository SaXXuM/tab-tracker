<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs-6>
        <div class="song-title">
          {{song.title}}
        </div>
        <div class="song-artist">
          {{song.artist}}
        </div>
        <div class="song-genre">
          {{song.genre}}
        </div>
        <v-btn
          dark
          class="cyan"
          :to="{
            name: 'song-edit',
            params () {
              return {
                songId: song.id
              }
            }
          }">
          Edit
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="cyan"
          @click="addBookmark"
        >
          Bookmark
        </v-btn>
        <v-btn
          v-if="isUserLoggedIn && bookmark"
          dark
          class="cyan"
          @click="removeBookmark"
        >
          Remove Bookmark
        </v-btn>

      </v-flex>
      <v-flex xs6>
        <div><img :src="song.albumImageUrl" alt="" class="album-image"></div>
        <div>{{song.album}}</div>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
  import { mapState } from 'vuex'
  import BookmarkService from '@/services/BookmarkService'

  export default {
    data () {
      return {
        bookmark: null
      }
    },
    props: [
      'song'
    ],
    computed: {
      ...mapState([
        'isUserLoggedIn',
        'user'
      ])
    },
    async mounted () {
      if (this.isUserLoggedIn) {
        const bookmarks = (await BookmarkService.index({
          songId: this.song.id,
          userId: this.user.id
        })).data
        if (bookmarks.length) {
          this.bookmark = bookmarks[0]
        }
      }
    },
    methods: {
      async addBookmark () {
        try {
          this.bookmark = (await BookmarkService.post({
            songId: this.song.id,
            userId: this.user.id
          })).data
        } catch (err) {
          console.log(err)
        }
      },
      async removeBookmark () {
        try {
          await BookmarkService.delete(this.bookmark.id)
          this.bookmark = null
        } catch (err) {
          console.log(err)
        }
      }

    }
  }
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }

  .song-title {
    font-size: 30px;
  }

  .song-artist {
    font-size: 24px;
  }

  .song-genre {
    font-size: 18px;
  }

  .album-image {
    width: 70%;
    margin: 0 auto;
  }
</style>

