<template>
<div :class="{'show': isVisible}" id="project-modal-container">
    <!-- <transition name="fade"> -->
        <div>
            <div class="project-modal-background" @click="toggleModal"></div>
            <transition name="fade">
            <div class="project-modal" v-if="isVisible">
                <strong class="x" @click="toggleModal"><i class='fa fa-times'></i></strong>
                <div class="project-info-container">
                  <h1>{{info.name}}</h1>
                  <hr/>
                  <div class="project-description">
                    {{info.description}}
                  </div>
                  <p><strong>My Role: </strong><span v-for="(role, index) in info.role" :key="role.id">{{role}}<span v-if="index+1 <info.role.length">, </span> </span></p>
                  <p><strong>Built With: </strong><span v-for="(tech, index) in info.tech" :key="tech.id">{{tech}}<span v-if="index+1 <info.tech.length">, </span> </span></p>
                  <button v-if="info.screenshot">View Screenshot</button>
                </div>
            </div>
            </transition>
        </div>
    <!-- </transition> -->
</div>
</template>

<script>
export default {
  name: 'WorkModal',
  props: ['info'],
  data () {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleModal () {
      this.isVisible = !this.isVisible
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
.project-modal{
  display: inline-block;
  position: fixed;
  color: $off-white;
  z-index: 101;
  // border: 1px solid black;
  background: $grey;
  max-width: 546px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: $mobile-break) {
    width: 100%;
    height: 100%;
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
  .project-info-container{
    margin-top: 40px;
    padding: 0 20px;
    text-align: left;
    h1{
      text-align: center;
      line-height: 36px;
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
    button{
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
    @media (max-width: $mobile-break) {
    }
  }
}
</style>
