<template>
  <div>
    <v-row justify="center">
      <v-col cols="12" md="4" lg="4" xl="4"
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>

      <v-col cols="12" md="4" lg="4" xl="4"
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>

      <v-col cols="12" md="4" lg="4" xl="4"
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>

      <v-col cols="12" md="4" lg="4" xl="4"
        ><v-skeleton-loader
          class="mx-auto"
          max-width="300"
          type="card"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
  </div>
</template>
<script>
import db from "../db";
export default {
  data() {
    return {
      portfolios: []
    };
  },
  mounted() {
    db.collection("portfolios")
      .get()
      .then(portfolios => {
        portfolios.forEach(() => {
          // console.log(res._document.proto);
        });
      });
  }
};
</script>
