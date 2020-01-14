<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="6" lg="6">
        <v-card flat>
          <v-img src="/me-big.png" class="align-end">
            <v-card-title class="font-weight-bold headline text-grey lighten-2"
              >Stanley Masinde</v-card-title
            >
          </v-img>

          <v-card-actions>
            <v-btn color="primary" text @click.prevent="dialog = !dialog"
              >Contact Me</v-btn
            >

            <v-btn
              color="primary"
              href="//github.com/stannlee"
              target="_blank"
              icon
            >
              <v-icon>mdi-github-circle</v-icon>
            </v-btn>

            <v-btn
              color="primary"
              href="//www.linkedin.com/in/stanley-masinde/"
              target="_blank"
              icon
            >
              <v-icon>mdi-linkedin</v-icon>
            </v-btn>

            <v-btn color="primary" @click="shareProfile" icon>
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" sm="10" md="6" lg="6">
        <v-card flat shaped>
          <v-card-text>
            <div class="body-2">
              I am a software engineer living in Nairobi, Kenya. A great fan of
              technology, IT, and web development. I am passionate about
              creating solutions on the web and making it a better place. I am
              more interested in mobile web because most of internent users are
              on mobile. This drives my development. I do mobile first
              develpment. This makes me a master of Progressive Web Apps(PWAs)
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="600" persistent>
      <v-card>
        <v-card-title class="headline primary white--text" primary-title
          >Contact Me</v-card-title
        >

        <v-card-text class="mt-3">
          <v-alert v-if="info" type="info"
            >Your Message was not sent because the app in in
            development</v-alert
          >
          <v-form @submit.prevent="sendMessage">
            <v-text-field clearable label="Your Name"></v-text-field>
            <v-text-field
              clearable
              type="email"
              label="Your Email"
            ></v-text-field>
            <v-textarea clearable label="Type Something nice here"></v-textarea>
            <v-btn outlined color="secondary" block type="submit"
              >Send Message</v-btn
            >
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" outlined @click="dialog = false">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      dialog: false,
      info: false
    };
  },
  methods: {
    sendMessage() {
      this.info = true;

      setTimeout(() => {
        this.info = false;
      }, 3000);
    },
    shareProfile() {
      const profileData = {
        title: "Stanley Masinde",
        text: "Check out Stanley's website",
        url: "/"
      };

      if (navigator.share) {
        navigator
          .share(profileData)
          .then()
          .catch();
      } else {
        //
      }
    }
  }
};
</script>
