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
               <v-list>
                <v-list-item class="pa-0" v-for="item in items" :key="item.name">
                  <v-list-item-avatar>
                    <v-avatar color="red">
                      <img src="../assets/captain.jpeg" alt="alt" />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title class="custom__size">
                    {{item.name}}
                  </v-list-item-title>

                  <v-list-item-title class="custom__size">
                    <v-icon color="#e39225" size="15">mdi-circle</v-icon>
                    {{item.isonline}}
                  </v-list-item-title>
                  <v-list-item-title class="pa-0 ma-0 custom__size red--text">
                    <span>{{item.rnumber}}</span> Reported
                  </v-list-item-title>

                  <v-btn small elevation="" color="#e39225" class="mx-2 white--text">suspend</v-btn>
                  <v-btn small elevation="" color="#707070" class="white--text">Block</v-btn>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card >
            <v-card-text>
              <div class="pa-">
                <p class="mb-0 card_con"></p>
                <p class="third_header"></p>
              </div>
               <v-list class="pt-12">
                <v-list-item class="pa-0" v-for="item in items" :key="item.name">
                  <v-list-item-avatar>
                    <v-avatar color="red">
                      <img src="../assets/captain.jpeg" alt="alt" />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title class="custom__size">
                    {{item.name}}
                  </v-list-item-title>

                  <v-list-item-title class="custom__size">
                    <v-icon color="#e39225" size="15">mdi-circle</v-icon>
                    {{item.isonline}}
                  </v-list-item-title>
                  <v-list-item-title class="pa-0 ma-0 custom__size red--text">
                    <span>{{item.rnumber}}</span> Reported
                  </v-list-item-title>

                  <v-btn small elevation="" color="#e39225" class="mx-2 white--text">suspend</v-btn>
                  <v-btn small elevation="" color="#707070" class="white--text">Block</v-btn>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "umar rg",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "Ibrahim",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "usman",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "Ismail",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "John doe",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
      {
        name: "dolex",
        color: "red",
        isonline: "online",
        rcolor: "red",
        rnumber: "2x",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
      },
    ],
  }),
};
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
