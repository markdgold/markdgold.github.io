<template>
  <div id="app">
    <nav>
      <ul>
        <li class="nav-link"><router-link to="/about">About</router-link></li>
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
  computed: {
    currentYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style lang="scss">
@import "../globals.scss";
#app{
  nav{
    height: 90px;
    text-align: center;
    background-image: url('./assets/as8nzKo.jpg');
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
    position: fixed;
    width: 100%;
    top: 0px;
    z-index: 100;
    ul{
      list-style: none;
      display: flex;
      justify-content: space-around;
      margin: 0px;
      padding: 0px;
      padding-top: 25px;
      li{
        display: inline-block;
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
        width: 165px;
        margin: 15px 0px;
        line-height: 30px;
        height: 30px;
        display: flex;
        justify-content: space-between;
        a{
          color: $off-white;
          height: 30px;
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
