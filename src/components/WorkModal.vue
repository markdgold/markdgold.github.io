<template>
<div :class="{'show': isVisible}" id="project-modal-container">
  <div class="project-modal-background" @click="toggleModal"></div>
  <transition name="fade">
    <div class="transition-container">
      <div class="project-info-container" :class="{'hidden': screenshotVis}">
        <strong class="x" @click="toggleModal"><i class='fa fa-times'></i></strong>
        <h1>{{info.name}}<a :href="info.link" v-if="info.link" target="_blank" class="mobile-hide"><i class="fas fa-external-link-alt"></i></a></h1>
        <hr/>
        <div class="project-description">
          {{info.description}}
        </div>
        <p><strong>My Role: </strong><span v-for="(role, index) in info.role" :key="role.id">{{role}}<span v-if="index+1 <info.role.length">, </span> </span></p>
        <p><strong>Built With: </strong><span v-for="(tech, index) in info.tech" :key="tech.id">{{tech}}<span v-if="index+1 <info.tech.length">, </span> </span></p>
        <button v-if="info.screenshot" class="mobile-hide" @click="toggleScreenshot">View Screenshot</button>
        <a v-if="info.link" :href="info.link" class="mobile-website-button" target="_blank">View Website</a>
      </div>
      <div v-if="info.screenshot" class="project-screenshot-container" :class="{'visible': screenshotVis}">
        <div class="img-wrapper">
          <img :src="info.screenshot" alt="">
        </div>
        <button @click="toggleScreenshot">View Info</button>
      </div>
    </div>
</transition>
</div>
</template>

<script>
export default {
  name: 'WorkModal',
  props: ['info'],
  data () {
    return {
      isVisible: false,
      screenshotVis: false
    }
  },
  methods: {
    toggleModal () {
      this.isVisible = !this.isVisible
      if (this.screenshotVis) {
        this.toggleScreenshot()
      }
    },
    toggleScreenshot () {
      this.screenshotVis = !this.screenshotVis
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "../../globals.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

#project-modal-container{
  display: none;
  &.show {
    display: inline-block;
  }
}
.project-modal-background{
  display: inline-block;
  background: rgba(0,0,0,.6);
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  padding-bottom: 100px;
  position: fixed;
  z-index: 100;
}
.transition-container{
    max-width: 546px;
    width: 100%;
    z-index: 101;
    display: flex;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    @media (max-width: $mobile-break) {
      height: 100%;
      top: 0px;
    }
 
  .project-info-container, .project-screenshot-container{
    display: inline-block;
    background: $grey;
    color: $off-white;
    width: 100%;
    // @media (max-width: $mobile-break) {
    //   width: 100%;
    //   height: 100%;
    // }
    
    button, .mobile-website-button{
      background: $blue;
      text-align: center;
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      padding: 9px 18px;
      border: none;
      color: $off-white;
      cursor: pointer;
    }
  }
  .project-info-container{
    background: $grey;
    padding: 0 20px;
    padding-top: 40px;
    text-align: left;
    z-index: 102;
    backface-visibility: hidden;
    transition: transform .8s;
    &.hidden{
      transform: rotateY(-180deg);
    }
    .x{
      position: absolute;
      display: none;
      cursor: pointer;
      padding: 10px;
      @media screen and (max-width: $mobile-break) {
        display: inline-block;
        right: 10px;
        top: 0;
      }
    }
    h1{
      text-align: center;
      line-height: 36px;
      a{
        color: $gold;
        font-size: 18px;
        position: relative;
        top: 6px;
        left: 7px;
      }
    }
    hr{
      width: 70%;
      margin-top: 15px;
      margin-bottom: 0px;
      background: $off-white;
    }
    .project-description{
      margin-bottom: 40px;
      margin-top: 40px;
      text-align: justify;
    }
    p{
      margin: 0;
      margin-bottom: 10px;
      &:nth-of-type(2){
        margin-bottom: 40px;
      }
    }
    .mobile-website-button{
      width: 186px;
      display: none;
    }
    @media (max-width: $mobile-break) {
      .mobile-website-button{
        display: block;
      }
      .mobile-hide{
        display: none;
      }
    }
  }
  .project-screenshot-container{
    backface-visibility: hidden;
    transform: rotateY(180deg);
    transition: transform .8s;
    height: 100%;
    position: absolute;
    z-index: 101;
    &.visible{
      transform: rotateY(0deg);
    }
    .img-wrapper{
      width: 100%;
      height: 100%;
      overflow: hidden;
      overflow-y: scroll;
      img{
        width: 100%;
        backface-visibility: hidden;
      }
    }
    button{
      position: relative;
      bottom: 70px;
      backface-visibility: hidden;
    }
  } 
}

</style>
