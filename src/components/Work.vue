<template>
  <div class="work">
    <WorkModal ref="workModal" :info="projectInfo"></WorkModal>
    <div class="header">
      <h1 class="letter-spaced">Recent Projects</h1>
      <hr/>
    </div>
    <div class="project-grid" >
      <WorkSquare @toggleModal="toggleModal" v-for="i in projectCount" :key="i" :info="projects[i-1]"></WorkSquare>
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

export default {
  name: 'Work',
  components: { WorkSquare, WorkModal },
  data () {
    return {
      projectCount: 5,
      projects: [
        {
          name: 'Mark-Climb',
          description: 'Bouldering profile for myself. Visually stimulating home page with subtle animation effects, social media pages: Instagram feed, Vimeo feed, and logbook analytics dashboard.',
          link: 'http://mark-climb.firebaseapp.com',
          role: ['Web Design', 'Front End Developer'],
          tech: ['Angular 5', 'D3.js', 'Firebase'],
          screenshot: '../static/mark_climb_full.png',
          thumbnail: '../static/mark_climb_thumb.png'
        },
        {
          name: 'The New 40',
          description: 'Adaptation of older app requested by Crux Climbing Center. Database of user-generated boulder problems. Mobile-centric design with a focus on usability. Users can filter climbs based on their style/difficulty, comment on climbs, add climbs to a favorite list and a logbook.',
          link: 'http://thenew40.herokuapp.com/',
          role: ['Full Stack Developer', 'Web Design'],
          tech: ['Node.js', 'Express', 'PostgreSQL'],
          screenshot: '../static/new40_full.png',
          thumbnail: '../static/new40_thumb.png'
        },
        {
          name: 'Employee Task Management App (Avanade)',
          description: 'Worked on a team to produce a task management app using the Vue.js framework. Brought on to provide onshore support for lead FED. Working in two week sprints, added new functionalities to app, improved app performance, and fixed existing bugs.',
          role: ['Front End Developer'],
          tech: ['Vue.js', 'Vuex'],
          thumbnail: '../static/Avanade_task.png'
        },
        {
          name: 'Intranet Redesign (Avanade)',
          description: 'Sole developer for intranet redesign showcase page. Focused on visually intriguing design, including animation and video elements. Three week sprint project required efficient code that could quickly adapt to design changes. Project was content driven but without adequate time to setup a CMS; required bespoke pseudo-CMS to be created to easily add content by client after project hand-off.',
          role: ['Front End Developer'],
          tech: ['jQuery', 'Bootstrap', '.NET'],
          thumbnail: '../static/Avanade_intranet.png'
        },
        {
          name: 'Email Templating (Avanade)',
          description: 'Internal project for marketing team. Lead developer with shadow. Created series of Marketo email templates that had to render consistently between email clients as well as mobile.',
          role: ['Front End Developer'],
          tech: ['Marketo'],
          thumbnail: '../static/Avanade_emails.png'
        },
        {
          name: 'What do they think',
          description: "Data-visualization app showing a country's sentiment on a user-searched keyword. Was in charge of creating Angular routing, services, and views. Used async utility to chain API calls, allowing the second API (Watson Natural Language Understanding analysis) to use the output of the first API call (News API).",
          role: ['Full Stack Developer'],
          tech: ['MongoDB', 'Express', 'AngularJS', 'Node.js'],
          thumbnail: '../static/think_thumb.png'
        }
      ],
      projectInfo: {}
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
