<template>
  <v-app class="custom__bg">
    <v-toolbar max-height="150">
      <v-toolbar-title class="mt-10 ml-4">
        <div class="mt-12">
          <p class="header_text h2--text">Dashboard</p>
          <p class="second_header mb-0">Welcome to JanguAsk Dashboard</p>
          <span class="third_header">web app and mobile app dashbord</span>
        </div>
      </v-toolbar-title>
    </v-toolbar>
    <v-col cols="12">
      <v-row>
        <v-col cols="4">
          <v-card>
            <v-card-text>
              v-
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4"></v-col>
        <v-col cols="4"></v-col>
      </v-row>
    </v-col>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
};
</script>

<style scoped>
.second_header {
  color: #576271;
  font-weight: bold;
}
.third_header {
  color: #576271;
  font-weight: 300;
  font-size: 15px;
}
.custom__bg {
  background: #f7f9fb;
}
</style>
