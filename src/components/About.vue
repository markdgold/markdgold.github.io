<template>
  <div class="About">
    <div class="hero" id="hero">
      <div class="title-bar">
        <h1 class="letter-spaced">
          {{msg}}
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
          <p>I'm currently based in Seattle, WA. Influenced by my background in astrophysics and engineering, I am constantly striving to find the elegant solution for any problem. Intrigued by functionality, efficiency and responsive design.</p>
          <hr/>
          <p>In my spare time I can be found in the outdoors, climbing rocks.</p>
        </div>
      </div>
      <div class="bio-image">
          <video class="iceland-video" id="iceland-video" height="544">
            <source src="../assets/climbgif (crop).mp4" type="video/mp4">
          </video>
          <!-- <img class="iceland-image" src="../assets/icelandcropsmall.png" alt=""/> -->
      </div>
    </div>
    <div class="endorsement">
      <div class="endoresment-text" style="display: inline-block;padding-top:30px;padding-bottom:30px;max-width:50%;"> <!--move to comp -->
        <p style="margin-top:0; color: white;">"Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff Mark is Cool and stuff"</p>
        <p style="margin:0; color: white; text-align:right;">-Kevin Goradia</p>
      </div>
    </div>
    <div class="skills">
      <h2 class="letter-spaced">Skills</h2>
      <div class="skills-container">
        <div class="design col-sm-12 col-md-6">
          <h3>Design</h3>
          <img height="225" src="../assets/sketch-invision-logos.png" alt="sketch+invision">
        </div>
        <div class="dev col-sm-12 col-md-6">
          <h3>Development</h3>
          <div>
            <img width="285" src="../assets/html5-css-javascript-logos.png" alt="html-css-javascript">
          </div>
          <div class="frameworks">
            <img src="../assets/angular-logo.png" alt="angular">
            <img src="../assets/logo.png" alt="vuejs">
            <img src="../assets/react.png" alt="react">
          </div>
        </div>
      </div>
      <div>Find a full list of my skills on <a href="https://linkedin.com/in/markdgold" target="_blank"><strong>linkedin</strong></a> or on my <a href="https://drive.google.com/open?id=1qCrPBaTfa9UFX4nbyTQ1ya6TZZDPFmCX" target="_blank"><strong>resume</strong></a></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      msg: 'Mark Goldstein',
      videoPlayed: false
    }
  },
  methods: {
    checkScrollPosition () {
      if (document.body.clientHeight - 100 <= window.pageYOffset) {
        console.log('color about')
        if (!this.videoPlayed) {
          document.getElementById('iceland-video').play()
          this.videoPlayed = !this.videoPlayed
        }
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
    margin-bottom: -90px;
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
    .text-container{
      width: 50%;
      background: $off-white;
      height: 544px;
      float: left;
      .bio-text{
        margin-left: 15%;
        z-index: 3;
        text-align: justify;
        position: relative;
        // max-width: 600px;
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
      .iceland-image{
        height: 544px;
        width: 339px;
      }
      .iceland-video{
        position: absolute;
        right: 0px;
        z-index: 0;
      }
    }
  }
  .endorsement{
    min-height: 170px;
    background: $blue;
    align-items: center;
    justify-content: center;
    display: flex;
    vertical-align: middle;
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
    .skills-container{
      display:flex;
      margin: 0 auto;
      justify-content: space-around;
      max-width: 1100px;
      margin-bottom: 28px;
      div{
        text-align: center;
      }
      .dev{
        .frameworks{
          margin-top: 19px;
          img{
            height: 95px;
            &:nth-child(1){
              margin-left:2px;
            }
            &:nth-child(2){
              margin-left: 14px;
            }
          }
        }
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
</style>
