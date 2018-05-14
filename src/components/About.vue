<template>
  <div class="About">
    <div class="hero" id="hero">
      <div class="title-bar">
        <h1 class="letter-spaced">
          Mark Goldstein
        </h1>
        <h2>
          Web Developer
        </h2>
      </div>
    </div>
    <div class="bio" id="bio">
      <div class="text-container">
        <div class="bio-text" id="bio-text">
          <h2 class="letter-spaced">About Me</h2>
          <p>I'm currently based in Seattle, WA. Influenced by my background in astrophysics and engineering, I am constantly striving to find the elegant solution for any problem. Intrigued by functionality, efficiency and stimulating design.</p>
          <hr/>
          <p>In my spare time I can be found in the outdoors, climbing rocks.</p>
        </div>
      </div>
      <div class="bio-image">
          <video class="iceland-video" id="iceland-video" height="544">
            <source src="../assets/climbgif (crop).mp4" type="video/mp4">
          </video>
          <img class="iceland-image" src="../assets/icelandcropsmall.png" alt=""/>
      </div>
    </div>
    <div class="endorsement-block">
      <carousel :perPage="1" :paginationActiveColor="'goldenrod'">
        <slide v-for="quote in endorsementsList" :key="quote.id">
          <Endorsement :quote="quote"></Endorsement>
        </slide>
      </carousel>
    </div>
    <div class="skills">
      <h2 class="letter-spaced">Skills</h2>
      <hr style="width: 300px"/>
      <div class="skills-container">
        <div class="design col-md-6">
          <h3>Design</h3>
          <img class="sketch-logo" height="225" src="../assets/sketch-invision-logos.png" alt="sketch+invision">
        </div>
        <div class="dev col-md-6">
          <h3>Development</h3>
          <div>
            <img class="html-logo" width="285" src="../assets/html5-css-javascript-logos.png" alt="html-css-javascript">
          </div>
          <div class="frameworks">
            <img class="angular-logo" src="../assets/angular-logo.png" alt="angular">
            <img class="vue-logo" src="../assets/logo.png" alt="vuejs">
            <img class="react-logo" src="../assets/react.png" alt="react">
          </div>
        </div>
      </div>
      <div class="full-list">Find a full list of my skills on <a href="https://linkedin.com/in/markdgold" target="_blank"><strong>linkedin</strong></a> or on my <a href="https://drive.google.com/open?id=1qCrPBaTfa9UFX4nbyTQ1ya6TZZDPFmCX" target="_blank"><strong>resume</strong></a></div>
    </div>
  </div>
</template>

<script>
import Endorsement from './Endorsement'
import { Carousel, Slide } from 'vue-carousel'

export default {
  name: 'About',
  components: { Endorsement, Carousel, Slide },
  data () {
    return {
      videoPlayed: false,
      endorsementsList: [
        {
          text: 'Mark did a great job. He worked quickly and kept an open line of communication at all times.',
          from: 'Kevin Goradia',
          company: 'Crux Climbing Center'
        }
      ]
    }
  },
  methods: {
    checkScrollPosition () {
      if (document.body.clientHeight - 100 <= window.pageYOffset) {
        this.$emit('scrolling', true)
        if (!this.videoPlayed) {
          document.getElementById('iceland-video').play()
          this.videoPlayed = !this.videoPlayed
        }
      } else {
        this.$emit('scrolling', false)
      }
    }
  },
  created () {
    this.checkScrollPosition()
    document.addEventListener('scroll', this.checkScrollPosition)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../globals.scss';

.About{
  height: 100%;
  .hero{
    height: 100%;
    background-image: url('../assets/as8nzKo.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    margin-top: -50px;
    margin-bottom: -50px;
    z-index: -10;
    .title-bar{
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      color: $off-white;
    }
  }
  .bio{
    height: 544px;
    @media (max-width: $tablet-break){
        background: rgba(0,0,0,1);
    }
    .text-container{
      width: 50%;
      background: $off-white;
      height: 544px;
      float: left;
      z-index: 3;
      @media (max-width: $tablet-break){
        width: 100%;
        position: absolute;
        background: rgba(0,0,0,.7);
        color: $off-white;
      }
      .bio-text{
        z-index: 3;
        margin-left: 15%;
        text-align: justify;
        position: relative;
        // max-width: 600px;
        @media (max-width: $tablet-break){
          margin: 0 20px;
        }
        h2{
          margin-top: 80px;
        }
      }
    }
    .bio-image{
      float: right;
      width: 50%;
      height: 544px;
      background: $off-white;
      text-align: right;
      @media(max-width: $tablet-break){
        width:100%;
        float:left;
        position: absolute;
      }
      .iceland-image{
        height: 544px;
        width: 339px;
        display: none;
        @media(max-width: $video-break){
          display:inline-block;
        }
      }
      .iceland-video{
        position: absolute;
        right: 0px;
        z-index: 0;
        @media(max-width:$video-break){
          display: none;
        }
      }
    }
  }
  .endorsement-block{
    min-height: 170px;
    background: $blue;
    align-items: center;
    justify-content: center;
    display: flex;
    vertical-align: middle;
    .VueCarousel-slide {
      position: relative;
      background: $blue;
      min-height: 100px;
      text-align: center;
      width: 100%;
    }

    .label {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

  }
  .skills{
    padding-bottom: 35px;
    margin-bottom:170px;
    background: $off-white;
    h2{
      padding-top: 28px;
      margin-bottom: 18px;
      text-align: center;
    }
    hr{
      @media (max-width: $tablet-break){
        margin-bottom: 40px;
      }
    }
    .skills-container{
      display:flex;
      margin: 0 auto;
      justify-content: space-around;
      max-width: 1100px;
      margin-bottom: 28px;
      @media (max-width: $tablet-break){
        flex-wrap: wrap;
        margin-bottom: 0px;
      }
      .design, .dev{
        @media(max-width: $tablet-break){
          margin-bottom: 40px;
          h3{
            font-size: 30px;
          }
          .sketch-logo{
            height: 150px;
          }
          .html-logo{
            width: 180px;
          }
        }
      }
      .dev{
        .frameworks{
          margin-top: 19px;
          img{
            height: 95px;
            @media (max-width: $tablet-break){
              height: 60px;
            }
            &.angular-logo{
              margin-left: 2px;
              @media (max-width: $tablet-break){
                margin-left: 5px;
              }
            }
            &.vue-logo{
              margin-left: 14px;
              @media (max-width: $tablet-break){
                margin-left: 3px;
              }
            }
            &.react-logo{
              @media (max-width: $tablet-break){
                margin-left: -4px;
              }
            }
          }
        }
      }
    }
    .full-list{
      @media(max-width: $tablet-break){
        padding: 0 15px;
      }
    }
    div{
      text-align: center;
      strong{
        color: $font-color;
      }
    }
  }
}
// @media (max-width: 1000px){
//   .About{
//     #bio{
//       .text-container{

//       }
//     }
//   }
//   .iceland-video{
//     display: none;
//   }
//   .iceland-image{
//     display: inline-block !important;
//   }
// }
// @media (max-width: 750px){
//   .About{
//     #bio{
//       .text-container{
//         width: 100%;
//       }
//     }
//   }

// }
</style>
