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
        <v-badge content="9" color="#f69227" bordered overlap>
          <v-icon color="grey">mdi-bell</v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div>
                <p class="mb-0 card_con">Users on JanguAsk</p>
                <p class="third_header">users dashbord</p>
              </div>
              <v-row
                justify="center"
                align="center"
                v-for="item in items"
                :key="item.name"
              >
                <v-col cols="6">
                  <v-row>
                    <v-col cols="2">
                      <v-avatar size="30">
                        <img :src="item.image" alt="" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="5">
                      <p>{{ item.name }}</p>
                    </v-col>
                    <v-col cols="5">
                      <p class="icon--text">
                        <v-icon :color="item.color" size="10">
                          mdi-circle</v-icon
                        >
                        {{ item.isonline }}
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <v-col cols="5">
                      <p class="red--text">
                        {{ item.rnumber }}
                        <span>Reported</span>
                      </p>
                    </v-col>
                    <v-col cols="4" class="px-0">
                      <v-btn small color="#e39225" class="pa-2 white--text">
                        suspend</v-btn
                      >
                    </v-col>
                    <v-col cols="3" class="px-0">
                      <v-btn
                        small
                        width="20"
                        color="#707070"
                        class="white--text"
                      >
                        block</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data
}
</script>

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
