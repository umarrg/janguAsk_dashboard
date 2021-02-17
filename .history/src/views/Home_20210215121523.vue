<template>
  <v-app class="custom__bg">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-row class="">
                <v-col cols="2" class="">
                  <v-avatar color="#fbc200">
                    <v-icon color="white">
                      mdi-message-text
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">5000</p>
                    <p>Discussions</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-avatar color="#e53030">
                    <v-icon color="white">
                      mdi-file-video
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">5000</p>
                    <p>Video Post</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-row>
                <v-col cols="2">
                  <v-avatar color="#e530c1">
                    <v-icon color="white">
                      mdi-account-group
                    </v-icon>
                  </v-avatar>
                </v-col>
                <v-col cols="5" class="">
                  <div class="ml-4 mt-1">
                    <p class="mb-0 card_con">3500</p>
                    <p>Installed Users</p>
                  </div>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text class="pa-7">
              <v-row>
                <div>
                  <p class="mb-0 h2-text card_con">Activities Monitor</p>
                  <p class="third_header">Calculated Last 30 days</p>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <span>
                    <v-icon color="">mdi-refresh</v-icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </span>
                </div>
              </v-row>
              <div>
                <v-sparkline
                  :fill="fill"
                  color="#f69227"
                  height="215"
                  :gradient="gradient"
                  :line-width="width"
                  :padding="padding"
                  :smooth="radius || false"
                  :value="value"
                  auto-draw
                ></v-sparkline>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text class="pa-7">
              <v-row>
                <div>
                  <p class="mb-0 h2-text card_con">Activities Monitor</p>
                  <p class="third_header">Calculated Last 30 days</p>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <span>
                    <v-icon color="">mdi-refresh</v-icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </span>
                </div>
              </v-row>
              <div>
                <GChart
                  type="LineChart"
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text class="pa-7">
              <v-row>
                <div>
                  <p class="mb-0 h2-text card_con">Activities Monitor</p>
                  <p class="third_header">Calculated Last 30 days</p>
                </div>
                <v-spacer></v-spacer>
                <div>
                  <span>
                    <v-icon color="">mdi-refresh</v-icon>
                    <v-icon>mdi-dots-vertical</v-icon>
                  </span>
                </div>
              </v-row>
              <div>
                 <GChart
                type="ColumnChart"
                color="#f69227"
                :data="columnChartData"
                :options="chartOptions"
              />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6">
          <v-card class="custom__overflow " max-height="400">
            <v-card-text>
              <div>
                <p class=" card_con">Users on JanguAsk</p>
                <p class="third_header">users dashbord</p>
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
                  <v-list-item-title>
                     <vue-country-code
                  @onSelect="onSelect"
                  <!-- optional -->
                  :preferredCountries="['vn', 'us', 'gb']">
   </vue-country-code>
                  </v-list-item-title>

                  <v-btn
                    small
                    elevation=""
                    color="#e39225"
                    class="mx-2 white--text"
                    >suspend</v-btn
                  >
                  <v-btn small elevation="" color="#707070" class="white--text"
                    >Block</v-btn
                  >
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card max-height="400">
            <v-card-text class="pa-4">
              <div class="ml-3">
                <p class="mb-0 card_con">Stats</p>
                <p class="third_header mb-5">Data Status</p>
              </div>
              <div class="ml-6">
                <v-row>
                  <p class="card_con ">Graph</p>
                  <p class="card_con mx-2">Items</p>
                </v-row>
              </div>
              <v-divider class=""></v-divider>

              <v-list>
                <v-list-item v-for="item in stats" :key="item.name">
                  <v-list-item-icon>
                    <v-icon color="#21a70c">mdi-chart-bar</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title>
                      {{ item.name }}
                    </v-list-item-title>
                  </v-list-item-content>
                  <v-spacer></v-spacer>
                  <v-spacer></v-spacer>
                  <v-list-item-icon>
                    <span class="custom__col">
                      <v-icon color="#21a70c">mdi-arrow-up</v-icon>
                      {{ item.percent }}
                    </span>
                  </v-list-item-icon>
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
const gradients = [
  ["#f69227"],
  ["#42b3f4"],
  ["red", "orange", "yellow"],
  ["purple", "violet"],
  ["#00c6ff", "#F0F", "#FF0"],
  ["#f72047", "#ffd200", "#1feaea"],
];

export default {
  name: "Home",
  components: {},
  data() {
    return {
      fill: true,
      selectedGradient: gradients[4],
      gradients,
      padding: 0,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      drawer: true,
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
       columnChartData: [
      ['Days', 'Times'],
      ['Monday', 45],
      ['Tuesday', 60],
      ['Wednesday', 30],
      ['Thursday', 30],
      ['Friday', 55],
      ['Saturday', 0],
      ['Sunday', 0],
    ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      stats: [
        {
          name: " App download",
          percent: "50%",
        },
        {
          name: " Discussion",
          percent: "70%",
        },
        {
          name: " Quizes",
          percent: "30%",
        },
        {
          name: " Videos",
          percent: "80%",
        },
        {
          name: " Lecture share",
          percent: "20%",
        },
      ],
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
        // {
        //   name: "Ibrahim",
        //   color: "red",
        //   isonline: "online",
        //   rcolor: "red",
        //   rnumber: "2x",
        //   image:
        //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU",
        // },
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
    };
  },
};
</script>

<style scoped>
.second_header {
  color: #576271;
  font-weight: bold;
}
.custom__size {
  font-size: 11px;
}
.custom__col {
  color: #21a70c;
}
.third_header {
  color: #576271;
  font-weight: 300;
  font-size: 17px;
}
.custom__bg {
  background: #f7f9fb;
}
.card_con {
  font-weight: bold;
  color: black;
}
.custom__overflow {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
