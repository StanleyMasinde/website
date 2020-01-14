<template>
  <div>
    <v-card flat>
      <v-img src="/me-big.png" class="align-end">
        <v-card-title class="font-weight-heavy">Stanley Masinde</v-card-title>
      </v-img>

      <v-card-actions>
        <v-btn color="primary" text>Hire Me</v-btn>

        <v-btn color="primary" href="//github.com/stannlee" target="_blank" text
          >Github</v-btn
        >

        <v-btn
          color="primary"
          href="//www.linkedin.com/in/stanley-masinde/"
          target="_blank"
          text
          >Linkedin</v-btn
        >
      </v-card-actions>
    </v-card>

    <v-card flat>
      <v-card-text>
        I am a software engineer living in Nairobi, Kenya. A great fan of
        technology, IT, and web development. He is passionate about creating
        solutions on the web and making it a better place. I am more interested
        in mobile web because most of internent users are on mobile. This drives
        my development. I do mobile first develpment. This makes me a master of
        Progressive Web Apps(PWAs)
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>
