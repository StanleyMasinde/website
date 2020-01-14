<template>
  <v-app>
    <v-navigation-drawer app color="primary" clipped left dark>
      <v-list color="primary">
        <v-list-item>
          <v-img src="/me.png">
            <v-row justify="center" align="end">
              <v-col cols="12" class="text-left">
                <div class="title">Stanley Masinde</div>
                <div>stanleyloren@gmail.com</div>
              </v-col>
            </v-row>
          </v-img>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/portfolio">
          <v-list-item-icon>
            <v-icon>mdi-circle-expand</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Portfolio</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/achievements">
          <v-list-item-icon>
            <v-icon>mdi-trophy-award</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Achievements</v-list-item-title>
        </v-list-item>

        <v-list-item link to="/pricing">
          <v-list-item-icon>
            <v-icon>mdi-cash</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Pricing</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app dense color="primary" clipped-left dark>
      <v-toolbar-title>Stanley Masinde</v-toolbar-title>
      <v-toolbar-items></v-toolbar-items>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-bottom-navigation class="d-lg-none" color="primary" app>
      <v-btn to="/">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/portfolio">
        <span>Portfolio</span>
        <v-icon>mdi-circle-expand</v-icon>
      </v-btn>

      <v-btn to="/achievements">
        <span>Achievements</span>
        <v-icon>mdi-trophy-award</v-icon>
      </v-btn>

      <v-btn to="/pricing">
        <span>Pricing</span>
        <v-icon>mdi-cash</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  })
};
</script>
