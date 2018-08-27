<template>
  <section class="activities">

    <div class="container">
      <div class="row">
        <div class="col-md-offset-4 col-md-8">
          <h2 class="section-title">Last Activities</h2>
        </div>
      </div>
    </div>

    <div class="container-xl">
      <ul>

        <li class="event"
            v-for="event in timeline"
            :key="event.raw.key"
            :class="event.value.site">
          <div class="container">
            <div class="row">

              <div class="event-meta col-xs-12 col-md-3">
                <h5 class="category">{{ event.value.site }}</h5>
                <time class="date">{{ event.value.date }}</time>
              </div>

              <div
                class="event-content col-xs-12 first-xs last-md col-md-offset-1 col-md-8">

                <template v-if="event.value.site === 'soundcloud'">
                  <iframe
                    width="100%"
                    height="115"
                    scrolling="no"
                    frameborder="no"
                    :src="`https://w.soundcloud.com/player/?url=${event.value.uri}&color=%23181a24&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`"
                  ></iframe>
                </template>

                <template v-else-if="event.value.site === 'spotify'">
                  <iframe
                    :src="`https://open.spotify.com/embed/track/${event.value.track_id}`"
                    width="100%"
                    height="80"
                    frameborder="0"
                    allowtransparency="true"
                    allow="encrypted-media"></iframe>
                </template>

                <template v-else-if="event.value.site === 'youtube'">
                  <iframe
                    width="100%"
                    height="230"
                    :src="event.value.embed_url"
                    frameborder="0"
                    allow="encrypted-media"
                    allowfullscreen></iframe>
                </template>

                <template v-else-if="event.value.site === 'instagram'">
                  <img
                    width="200"
                    :src="event.value.image"
                    :alt="event.value.title">
                </template>

                <!--h3 class="Event-content-title">
                  <a
                    :href="event.value.url">
                    {{ event.value.title }}</a>
                </h3-->

              </div>
            </div>
          </div>
        </li>

      </ul>
    </div>

  </section>
</template>

<script>
  export default {
    data () {
      return {
        timeline: []
      }
    },
    mounted () {
      const timeline = database.ref('db').limitToLast(10)
      timeline.once('value', snapshot => {
        snapshot.forEach(event => {
          this.timeline.push({
            raw: event,
            value: event.val()
          })
        })
      })
    }
  }
</script>

<style lang="scss">
  .activities {
    margin-top: 120px;
    @include breakpoints("md") {
      margin-top: 180px;
    }
  }

  .event {
    position: relative;
    padding-top: $offset;
    padding-bottom: $offset;

    &:before {
      content: "";
      position: absolute;
      top: 0;
      height: 100%;
      left: 0;
      right: 0;
      transition: $transition;
    }

    &:hover:before {
      background-color: rgba(white, .04);
    }

    &-meta {
      margin-top: 20px;
      display: flex;
      line-height: 1;
      @include breakpoints("md") {
        display: block;
        line-height: inherit;
        margin-top: 0;
      }

      .category {
        font-size: $font-text-size-small;
        @include breakpoints("md") {
          display: block;
          font-size: 1em;
        }

        // .event.youtube & {
        //   color: rgba(#F5A623, .8);
        // }
      }

      .date {
        display: inline-block;
        font-family: $font-family-serif;
        font-size: $font-text-size-small;
        color: $color-text-light;
        @include breakpoints("md") {
          margin-top: 6px;
        }

        &:before {
          content: "—";
          margin-left: 5px;
          margin-right: 5px;
          @include breakpoints("md") {
            display: none;
          }
        }

      }
    }

    &-content {
      @include breakpoints("md") {
        position: relative;
      }

      .event:first-child &:before,
      .event &:after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        height: 1px;
        background-color: $color-hide;
        transition: $transition;
        @include breakpoints("md") {
          left: $offset-grid;
          right: $offset-grid;
        }
      }

      .event:first-child &:before {
        top: 0;
        @include breakpoints("md") {
          top: -30px;
        }
      }

      .event &:after {
        bottom: 0;
        @include breakpoints("md") {
          bottom: -30px;
        }
      }

    }
  }
</style>
