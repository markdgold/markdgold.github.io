<template>
  <div id="app">
    <nav class="nav-bar" id="mobile-nav">
      <div>
        <ul>
          <li v-if="isHome" class="nav-link"><a v-bind:class="{'router-link-active': isAtBio}" href="#bio" @click="handleSmoothScroll">About</a></li>
          <li v-else class="nav-link"><router-link to="/about">About</router-link></li>
          <li class="nav-link"><router-link to="/work">Work</router-link></li>
          <li class="nav-link"><a href="#" @click="toggleModal">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav class="nav-bar" v-bind:style="{'height': navHeight+'px'}">
      <div v-bind:style="{'top': navOffset+'px'}">
        <h1 v-if="isHome"  class="letter-spaced" v-bind:style="{'top': h1Offset+'px'}">{{header}}</h1>
        <h1 v-else class="letter-spaced">{{header}}</h1>
        <ul>
          <li v-if="isHome" class="nav-link"><a v-bind:class="{'router-link-active': isAtBio}" href="#bio" @click="handleSmoothScroll">About</a></li>
          <li v-else class="nav-link"><router-link to="/about">About</router-link></li>
          <li class="nav-link"><router-link to="/work">Work</router-link></li>
          <li class="nav-link"><a href="#" @click="toggleModal">Contact</a></li>
        </ul>
      </div>
    </nav>
    <Contact ref="modal"></Contact>
    <main :class="{'home': isHome}">
      <router-view @scrolling="handleScrollBehavior($event)"/>
    </main>
    <footer :class="{'home-footer': isHome}">
      <!-- <div class="footer"> -->
        <div class="copy">
          &copy;{{currentYear}} Mark Goldstein
        </div>
        <div class="links">
          <a href="mailto:mark@markdgold.com" target="_blank"><i class="fas fa-envelope"></i></a>
          <a href="https://linkedin.com/in/markdgold" target="_blank"><i class="fab fa-linkedin"></i></a>
          <a href="https://github.com/markdgold" target="_blank"><i class="fab fa-github-square"></i></a>
        </div>
      <!-- </div> -->
    </footer>
  </div>
</template>

<script>
import Contact from './components/Contact'

export default {
  name: 'App',
  components: {Contact},
  data () {
    return {
      header: 'Mark Goldstein',
      isHome: false,
      isAtBio: false,
      navOffset: 0,
      h1Offset: 0,
      navHeight: 100
    }
  },
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  },
  methods: {
    handleSmoothScroll (e) {
      if (e) e.preventDefault()
      let scrollHeight = document.body.clientHeight - 100
      window.scrollTo({
        top: scrollHeight,
        behavior: 'smooth'
      })
    },
    checkRoute () {
      // eslint-disable-next-line
      (this.$route.path === '/' || this.$route.path === '/about') ? this.isHome = true : this.isHome = false;
      if (this.$route.path === '/about') setTimeout(this.handleSmoothScroll, 1000)
    },
    handleScrollBehavior (atAbout) {
      let scrollHeight = document.body.clientHeight - 100 - window.pageYOffset
      let windowHeight = document.body.clientHeight
      if (!atAbout) {
        this.navOffset = scrollHeight / windowHeight * (-70)
        this.h1Offset = scrollHeight / windowHeight * (-200)
        this.navHeight = (100 * windowHeight - 50 * scrollHeight) / windowHeight
      }
      this.isAtBio = atAbout
    },
    toggleModal (e) {
      e.preventDefault()
      this.$refs.modal.toggleModal()
    }
  },
  watch: {
    '$route' () {
      this.checkRoute()
    },
    isHome () {
      if (!this.isHome) {
        this.navOffset = 0
        this.h1Offset = 0
        this.navHeight = 100
      }
    }
  },
  created () {
    this.checkRoute()
  }
}
</script>

<style lang="scss">
@import "../globals.scss";
#app{
  .nav-bar{
    // height: 50px;
    text-align: center;
    background-image: url('./assets/as8nzKo.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 100;
    @media (max-width: $mobile-break) {
      display: none;
    }
    &#mobile-nav{
      display: none;
      height: 50px;
      @media (max-width: $mobile-break) {
        display: block;
      }
    }
    div{
      position: relative;
      h1{
        margin-top: 27px;
        position: relative;
        margin-bottom: 0px;
        color: $off-white;
        transition: visibility linear 300ms;
      }
      ul{
        list-style: none;
        display: flex;
        justify-content: space-around;
        margin: 0px auto;
        padding: 0px;
        max-width: 80%;
        @media (max-width: $mobile-break) {
          padding-top: 13px;
        }
        li{
          display: inline-block;
          padding: 0;
          a{
            color: $off-white;
            &.router-link-active{
              color: $gold;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
  main{
    margin-top: 100px;
    z-index: 10;
    min-height: 100%;
    &.home{
      height: 100%;
    }
  }
  footer{
    &.home-footer{
      z-index: -1;
      position: fixed;
    }
    min-height: 170px;
    background-color: $dark-purple;
    width: 100%;
    display: flex;
    padding-top:55px;
    padding-bottom:55px;
    bottom: 0;
    justify-content: center;
    vertical-align: middle;
    div{
      color: $off-white;
      display: inline-block;
      padding: 0px 20px;
      &.copy{
        width: 245px;
        padding-top: 20px;
        line-height: 20px;
        text-align: center;
        border-right: 1px solid grey;
      }
      &.links{
        width: 245px;
        margin: 15px 0px;
        padding-left: 3px;
        line-height: 30px;
        height: 30px;
        display: flex;
        justify-content: left;
        a{
          color: $off-white;
          height: 30px;
          margin: 0 17px;
          i{
            font-size: 30px;
            line-height: 30px;
            transition: transform .3s;
            &:hover{
              color: $gold;
              transform: translateY(-4px);
              // transform: scale(1.3);
            }
          }
        }
      }
    }
  }
}
</style>
