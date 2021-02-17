<template>
  <v-app class="custom__bg">
    <div class="d-flex align-center justify-center mt-8 mb-8">
      <h4>JanguAsk Users</h4>
    </div>
    <v-container>
      <v-row>
        <v-row class="">
         
          <v-col cols="12" md="6">
            <v-card max-height="500" class="custom__s">
              <v-card-text>
                <div>
                  <p class="mb-0 card_con">Users on JanguAsk</p>
                  <p class="third_header icon-text">
                    <v-icon color="orange">mdi-circle</v-icon> Online Users
                  </p>
                </div>
                <v-list>
                  <v-list-item
                    class="pa-0"
                    v-for="item in items"
                    :key="item.name"
                  >
                    <v-list-item-avatar>
                      <v-avatar color="red">
                        <img src="../assets/captain.jpeg" alt="alt" />
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title class="custom__size">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-title class="custom__size">
                      <v-icon color="#e39225" size="15">mdi-circle</v-icon>
                      {{ item.isonline }}
                    </v-list-item-title>
                    <v-list-item-title class="pa-0 ma-0 custom__size red--text">
                      <span>{{ item.rnumber }}</span> Reported
                    </v-list-item-title>

                    <v-btn
                      small
                      elevation=""
                      color="#e39225"
                      class="mx-2 white--text"
                      >suspend</v-btn
                    >
                    <v-btn
                      small
                      elevation=""
                      color="#707070"
                      class="white--text"
                      >Block</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <v-card>
              <v-card-text>
                <div>
                  <p class="mb-0 card_con">Users on JanguAsk</p>
                  <p class="third_header icon-text">
                    <v-icon color="ash">mdi-circle</v-icon> Offline Users
                  </p>
                </div>
                <v-list class="">
                  <v-list-item
                    class="pa-0"
                    v-for="item in items"
                    :key="item.name"
                  >
                    <v-list-item-avatar>
                      <v-avatar color="red">
                        <img src="../assets/captain.jpeg" alt="alt" />
                      </v-avatar>
                    </v-list-item-avatar>
                    <v-list-item-title class="custom__size">
                      {{ item.name }}
                    </v-list-item-title>

                    <v-list-item-title class="custom__size">
                      <v-icon color="#e39225" size="15">mdi-circle</v-icon>
                      {{ item.isonline }}
                    </v-list-item-title>
                    <v-list-item-title class="pa-0 ma-0 custom__size red--text">
                      <span>{{ item.rnumber }}</span> Reported
                    </v-list-item-title>

                    <v-btn
                      small
                      elevation=""
                      color="#e39225"
                      class="mx-2 white--text"
                      >suspend</v-btn
                    >
                    <v-btn
                      small
                      elevation=""
                      color="#707070"
                      class="white--text"
                      >Block</v-btn
                    >
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
        name: "kaska",
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
