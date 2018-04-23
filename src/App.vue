<template>
  <div id="app">
    <nav>
      <h1 class="letter-spaced">Mark Goldstein</h1>
      <ul>
        <li v-if="isWork" class="nav-link"><router-link to="/about">About</router-link></li>
        <li v-else class="nav-link"><a v-bind:class="{'router-link-active': isAbout}" href="#bio" @click="handleScroll">About</a></li>
        <li class="nav-link"><router-link to="/work">Work</router-link></li>
        <li class="nav-link"><a href="#">Contact</a></li>
      </ul>
    </nav>
    <main>
      <router-view/>
    </main>
    <footer>
      <!-- <div class="footer"> -->
        <div class="copy">
          &copy;{{currentYear}} Mark Goldstein
        </div>
        <div class="links">
          <a href="mailto:mark@markdgold.com" target="_blank"><i class="fa fa-envelope"></i></a>
          <a href="https://linkedin.com/in/markdgold" target="_blank"><i class="fa fa-linkedin-square"></i></a>
          <a href="https://github.com/markdgold" target="_blank"><i class="fa fa-github-square"></i></a>
        </div>
      <!-- </div> -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      isWork: false,
      isAbout: false
    }
  },
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  },
  methods: {
    handleScroll (e) {
      e.preventDefault()
      console.log('scroll to about')
      document.querySelector('#bio').scrollIntoView({
        behavior: 'smooth',
      })
      this.isAbout = true;
    },
    checkRoute () {
      if (this.$route.path === '/work'){
        this.isWork = true
      } else if (this.$route.path === '/about'){
        this.isWork = false
        this.isAbout = true
      } else {
        this.isWork = false
      }
    }
  },
  watch: {
    '$route' () {
      this.checkRoute()
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
  nav{
    height: 100px;
    text-align: center;
    background-image: url('./assets/as8nzKo.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 100;
    h1{
      margin-top: 27px;
      margin-bottom: 0px;
      color: $off-white;
    }
    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      margin: 0px auto;
      padding: 0px;
      max-width: 80%;
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
  main{
    margin-top: 90px;
  }
  footer{
    z-index: -1;
    min-height: 170px;
    background-color: $dark-purple;
    width: 100%;
    display: flex;
    position: fixed;
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
