<template>
  <v-app class="custom__bg">
    <v-app-bar max-height="150" color="white" prominent>
      <v-toolbar-title class="mt-12 ml-4">
        <v-card-text>
          <div class="mt-12">
            <p class="header_text h2--text mt-8">Post</p>
            <p class="second_header mb-0">Admin Post To JanguAsk</p>

            <span class="third_header">web app and mobile app dashbord</span>
          </div>
        </v-card-text>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-badge content="9" color="#f69227" bordered overlap>
          <v-icon color="grey">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-card class="pa-0">
            <v-list class="pa-0">
              <v-list-item class="">
                <v-list-item-icon>
                  <v-avatar color="#f7f9fb">
                    <v-icon color="#707070">mdi-image</v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <p class="mt-5 custom__text">
                    Post a promotional Ads/banners here
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
            <v-card>
                <v-list class="pa-0">
                    <v-list-item>
                        v-li
                    </v-list-item>

                </v-list>
            </v-card>
        </v-col>
        <v-col cols="12" md="4"></v-col>
        <v-col cols="12" md="4"></v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.custom__bg {
  background: #f7f9fb;
}
.custom__text {
  color: #707070;
}
</style>
