<template>
  <section class="about">
    <div class="container">

      <div class="about-row-full row bottom-xs">
        <div class="col-xs-12">

          <div class="row">
            <div class="col-xs-12 col-md-8 col-md-offset-4">
              <h1 class="title">
                <span>Hi
                <img draggable="false"
                     class="icon"
                     alt="hi"
                     src="~/assets/1f590-1f3fc.svg">
                  </span>
                <span>I’m ADEM,</span>
                <span>Frontend Developer from Istanbul.</span>
              </h1>
            </div>
          </div>

          <div class="about-row-info row top-md">
            <div class="detail col-xs-12 col-md-8">
              <p>
                Building simple and elegant structures for complex interfaces is
                what I enjoy most about my work.
                I am also interested in designing beautiful minimal products and
                exploring typefaces.
              </p>
              <br>
              <p>
                I’m <a href="https://twitter.com/ADEMilter" target="_blank">tweeting</a>,
                taking
                <a href="https://www.instagram.com/ademilter/" target="_blank">photos</a>
                and pushing my
                <a href="https://github.com/ademilter" target="_blank">codes</a>
                for you.
              </p>
            </div>
            <div class="contact col-xs-12 col-md-4 first-md">
              <dl>
                <dt>For collaboration or questions;</dt>
                <dd><a href="mailto:ademilter@gmail.com">ademilter@gmail.com</a>
                </dd>
              </dl>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss">
  .about {

    &-row-full {
      height: 100vh;
      padding-bottom: 90px;
      @include breakpoints("sm") {
        padding-bottom: 50px;
      }
      @include breakpoints("md") {
        padding-bottom: 80px;
        min-height: 620px;
        max-height: 840px;
      }

      .title {
        span {
          display: block;
        }
      }
    }

    &-row-info {
      margin-top: 30px;
      @include breakpoints("sm") {
        margin-top: 40px;
      }
      @include breakpoints("md") {
        margin-top: 60px;
      }

      .detail {
        display: none;
        font-family: $font-family-serif;
        @include breakpoints("sm") {
          display: block;
        }
      }

      .contact {
        font-size: $font-text-size-small;
        color: $color-text-light;
        @include breakpoints("sm") {
          margin-top: 20px;
        }
        @include breakpoints("md") {
          margin-top: 0;
        }

        dl {
          &:before {
            content: "";
            display: block;
            margin-bottom: 20px;
            width: 30px;
            height: 2px;
            background-color: $color-text-light;
            @include breakpoints("md") {
              margin-bottom: 10px;
            }
          }

          dd + dt {
            margin-top: 1em;
          }
        }
      }

    }

  }
</style>
