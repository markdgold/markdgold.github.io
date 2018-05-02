<template>
    <div class="project-tile" style="margin: 20px; display:inline-block; width: 250px; height: 250px; background: #e6e6ee6;" @click="openModal">
        <div class="screen">{{info.name}}</div>
        <img :src="info.thumbnail" width="250" height="250" :alt="info.name">
    </div>
</template>

<script>
export default {
  name: 'WorkSquare',
  props: ['info'],
  methods: {
    openModal () {
      this.$emit('toggleModal', this.info)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../globals.scss';

.project-tile{
    margin: 20px;
    display: inline-block;
    width: 250px;
    height: 250px;
    // background: $grey;
    position: relative;
    &:hover{
        .screen{
            opacity: 1;
            transform: scale(1);
            z-index: 10;
        }
        img{
            transform: scale(.2);
            opacity: 0;
        }
    }
    .screen{
        opacity: 0;
        width: 250px;
        height: 250px;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,.7);
        text-align: center;
        padding: 0px 20px;
        cursor: pointer;
        color: $off-white;
        transform: scale(.5);
        transition:  .3s ease;
    }
    img{
        transition: .3s ease;
    }
}
</style>
