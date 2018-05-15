<template>
  <div class="work">
    <WorkModal ref="workModal" :info="projectInfo"></WorkModal>
    <div class="header">
      <h1 class="letter-spaced">Recent Projects</h1>
      <hr/>
    </div>
    <div class="project-grid" >
      <h2 v-if="!projects.length">Loading Projects...</h2>
      <WorkSquare @toggleModal="toggleModal" v-if="projects.length" v-for="i in projectCount" :key="i" :info="sortedProjects[i-1]"></WorkSquare>
    </div>
    <div class="view-more" @click="addCount" v-if="projectCount < projects.length">
      <h3>View More</h3>
      <h3><i class="fas fa-caret-down"></i></h3>
    </div>
  </div>
</template>

<script>
import WorkSquare from './WorkSquare'
import WorkModal from './WorkModal'
import { db } from '../main'

export default {
  name: 'Work',
  components: { WorkSquare, WorkModal },
  data () {
    return {
      projectCount: 5,
      projectInfo: {},
      projects: []
    }
  },
  firestore () {
    return {
      projects: db.collection('projects')
    }
  },
  computed: {
    sortedProjects: function () {
      // eslint-disable-next-line
      return this.projects.sort((a, b) => {
        if (a.date.seconds < b.date.seconds) {
          return 1
        }
        if (a.date.seconds > b.date.seconds) {
          return -1
        }
        return 0
      })
    }
  },
  methods: {
    addCount () {
      if (this.projectCount + 3 < this.projects.length) {
        this.projectCount += 3
      } else {
        let remainder = this.projects.length - this.projectCount
        this.projectCount += remainder
      }
    },
    toggleModal (info) {
      this.projectInfo = info
      this.$refs.workModal.toggleModal()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../../globals.scss';

.work{
  text-align: center;
  .header{
    display: inline-block;
    h1{
      padding-top: 28px;
      margin-bottom: 18px;
    }
    hr{
      width: 100%;
    }
  }
  .project-grid{
    max-width: 1000px;
    margin: 0 auto;
  }
  .view-more{
    margin-top: 20px;
    cursor: pointer;
    display: inline-block;
    margin-bottom: 40px;
    h3{
      margin: 0;
    }
    &:hover{
      i{
        transform: scale(1.2);
      }
    }
  }
}
</style>
