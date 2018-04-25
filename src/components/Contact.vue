<template>
  <div id="contact-modal-container">
    <div class="contact-modal-background" v-if="isVisible"></div>
    <div class="contact-modal" v-if="isVisible">
      <div class="contact-info">
        <div class="headshot">
          <img height="200" width="200" src="../assets/headshotsquare.jpg" alt="Mark Goldstein">
        </div>
        <div class="links">
          <h3>Contact Me</h3>
          <ul>
            <li><a href="mailto:mark@markdgold.com"><i class="fa fa-envelope"></i> mark@markdgold.com</a></li>
            <li><a href="https://www.linkedin.com/in/markdgold" target="_blank"><i class="fa fa-linkedin-square"></i> /markdgold</a></li>
            <li><a href="https://www.github.com/markdgold" target="_blank"><i class="fa fa-github-square"></i> /markdgold</a></li>
          </ul> 
        </div>
      </div>
      <div class="contact-form">
        <form method="POST" action="https://formspree.io/mark@markdgold.com">
          <div class="form-input">
            <!-- <label>Your Name</label> -->
              <input type="text" name="name" placeholder="Your Name" required>
          </div>
          <div class="form-input">
            <!-- <label>Your Email</label> -->
            <input type="email" name="_replyto" placeholder="Your Email" required>
          </div>
          <div class="form-textarea">
            <!-- <label>Your message</label> -->
            <textarea rows="6" name="message" placeholder="Your Message" required></textarea>
          </div>
          <div class="submit">
            <input type="submit" value="Submit">
          </div>
          <div>
            <button v-on:click="toggleModal">Close</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      isVisible: true
    }
  },
  methods: {
    toggleModal () {
      this.isVisible = !this.isVisible
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../globals.scss";
.contact-modal-background{
  display: inline-block;
  background: rgba(0,0,0,.6);
  width: 100%;
  height: 100%;
  top: 0px;
  padding-bottom: 100px;
  position: fixed;
  z-index: 100;
}
.contact-modal{
  position: fixed;
  color: $off-white;
  z-index: 101;
  border: 2px solid black;
  background: $grey;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  .contact-info{
    margin-top: 20px;
    display: flex;
    .headshot{
      width: 240px;
      float: left;
      text-align: center;
      img{
        border-radius: 100px;
      }
    }
    .links{
      float: right;
      width: 250px;
      margin: 0 20px;
      padding-top: 35px;
      ul{
        list-style: none;
        padding: 0;
        li{
          a{
            text-decoration: none;
            color: $off-white;
            &:hover{
              color: $gold;
            }
          }
        }
      }
    }
  }
  .contact-form{
    padding-top:20px;
    width: 100%;
    text-align: center;
    form{
      margin: 0 20px;
      div{
        display: inline-block;
        &.form-input{
          width: 49%;
          input{
            width: 100%;
            // margin: 0 10px 20px 10px;
            margin-bottom: 20px;
          }
        }
        &.form-textarea{
          width: 100%;
          textarea{
            width: 100%;
          }
        }
      }
    }
  }
}
</style>
