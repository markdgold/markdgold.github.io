<template>
  <div id="contact-modal-container">
    <transition name="fade">
      <div class="contact-modal-background" v-if="isVisible">
        <div class="contact-modal" >
          <strong @click="toggleModal"><i class='fa fa-times' ></i></strong>
          <div class="contact-info">
            <div class="headshot">
              <img height="200" width="200" src="../assets/headshotsquare.jpg" alt="Mark Goldstein">
            </div>
            <div class="links">
              <h3>Contact Me</h3>
              <ul>
                <li><a href="mailto:mark@markdgold.com"><i class="fas fa-envelope"></i> mark@markdgold.com</a></li>
                <li><a href="https://www.linkedin.com/in/markdgold" target="_blank"><i class="fab fa-linkedin"></i> markdgold</a></li>
                <li><a href="https://www.github.com/markdgold" target="_blank"><i class="fab fa-github-square"></i> markdgold</a></li>
              </ul>
            </div>
          </div>
          <div class="contact-form">
            <form accept-charset="UTF-8" action="https://usebasin.com/f/de23e05dff36" method="POST">
              <div class="form-input">
                <!-- <label>Your Name</label> -->
                  <input type="text" v-validate="'required'" :class="{'input': true, 'error': errors.has('name') }" name="name" v-model="name" placeholder="Your Name" required>
              </div>
              <div class="form-input">
                <!-- <label>Your Email</label> -->
                <input type="email" v-validate="'required|email'" :class="{'input': true, 'error': errors.has('email') }" name="email" id="email" v-model="email" placeholder="Your Email" required>
              </div>
              <div class="form-textarea">
                <!-- <label>Your message</label> -->
                <textarea rows="6" v-validate="'required'" :class="{'input': true, 'error': errors.has('message') }" name="message" v-model="message" placeholder="Your Message" required></textarea>
              </div>
              <div class="submit">
                <input v-bind:disabled="!isValidForm" type="submit" @submit="handleFormSubmit" value="Submit">
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data () {
    return {
      isVisible: false,
      isValidForm: false,
      name: '',
      email: '',
      message: ''
    }
  },
  computed: {
    formVals () {
      return {name: this.name, email: this.email, message: this.message}
    }
  },
  methods: {
    toggleModal () {
      this.isVisible = !this.isVisible
    },
    handleFormSubmit () {
      this.isVisible = !this.isVisible
      this.form.name = ''
      this.form.email = ''
      this.form.message = ''
    },
    validateEmail (email) {
      // eslint-disable-next-line
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    }
  },
  watch: {
    formVals () {
      if (this.formVals.name.length > 0 && this.formVals.email.length > 0 && this.validateEmail(this.formVals.email) && this.formVals.message.length > 0) {
        this.isValidForm = true
      } else {
        this.isValidForm = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../../globals.scss";
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
  strong{
    position: absolute;
    right: -30px;
    top: -30px;
    cursor: pointer;
    padding: 10px;
    @media (max-width: $mobile-break) {
      right: 10px;
      top: 0;
    }
  }
  display: inline-block;
  position: fixed;
  color: $off-white;
  z-index: 101;
  border: 2px solid black;
  background: $grey;
  max-width: 546px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  @media (max-width: $mobile-break) {
    width: 100%;
    height: 100%;
  }
  .contact-info{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    @media (max-width: $mobile-break) {
      flex-wrap: wrap;
    }
    .headshot{
      width: 240px;
      float: left;
      text-align: center;
      @media (max-width: $mobile-break) {
        display: none;
      };
      img{
        border-radius: 100px;
      }
    }
    .links{
      float: right;
      width: 245px;
      margin: 0 20px;
      padding-top: 35px;
      @media ( max-width: $mobile-break ) {
        width: 100%;
        display: block;
        float: none;
      }
      ul{
        list-style: none;
        padding: 0;
        li{
          a{
            i{
              font-size: 29px;
              padding-right: 10px;
              &.fa-envelope{
                font-size: 25px;
              }
            }
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
          @media (max-width: $video-break) {
            width: 100%;
          }
          input{
            width: 240px;
            margin-bottom: 10px;
            float: left;
            border: 2px solid rgba(0,0,0,0);
            padding-left: 5px;
            @media (max-width: $video-break) {
              width: 100%;
            }
            &#email{
              float: right;
            }
            &.error{
              border: 2px solid indianred;
            }
          }
        }
        &.form-textarea{
          width: 100%;
          textarea{
            width: 100%;
          }
        }
        &.submit{
          margin-bottom: 20px;
          margin-top: 10px;
          text-align: left;
          width: 100%;
          input{
            background: $blue;
            border: none;
            color: $off-white;
            cursor: pointer;
            &:disabled{
              background: lightgrey;
              color: $blue;
              cursor: default;
            }
          }
        }
      }
    }
  }
}
</style>
