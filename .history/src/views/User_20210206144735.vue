<template>
  <v-app class="custom__bg">
    <v-app-bar max-height="150" color="white" prominent>
      <v-toolbar-title class="mt-12 ml-4">
        <v-card-text>
          <div class="mt-12">
            <p class="header_text h2--text mt-8">Dashboard</p>
            <p class="second_header mb-0">Welcome to JanguAsk Dashboard</p>

            <span class="third_header">web app and mobile app dashbord</span>
          </div>
        </v-card-text>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge content="7" color="red" dot overlap>
          <v-icon color="grey">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
  </v-app>
</template>

<style scoped>
.custom__bg {
  background: #f7f9fb;
}
.second_header {
  color: #576271;
  font-weight: bold;
}
.custom__col {
  color: #21a70c;
}
.third_header {
  color: #576271;
  font-weight: 300;
  font-size: 15px;
}
</style>
