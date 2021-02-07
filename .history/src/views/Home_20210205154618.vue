<template>
  <v-app class="custom__bg">
    <v-app-bar max-height="150" color="white">
      <v-toolbar-title class="mt-10 ml-4">
        <div class="mt-12">
          <p class="header_text h2--text">Dashboard</p>
          <p class="second_header mb-0">Welcome to JanguAsk Dashboard</p>

          <span class="third_header">web app and mobile app dashbord</span>
        </div>
      </v-toolbar-title>
    </v-app-bar>
    <v-col cols="12">
      <v-row>
        <v-col cols="4">
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
        <v-col cols="4">
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
        <v-col cols="4">
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
        <v-col cols="4">
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
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
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
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
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
                  :data="chartData"
                  :options="chartOptions"
                />
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-card-text>
              <div>
                <p class="mb-0 card_con">Users on JanguAsk</p>
                <p class="third_header">users dashbord</p>
              </div>
              <v-row justify="center" align="center" v-for="item in items" :key="item.name" class="ma-">
                <v-col cols="6">
                  <v-row>
                    <v-col cols="2" >
                      <v-avatar size="30" >
                        <img :src="item.image" alt="" />
                      </v-avatar>
                    </v-col>
                    <v-col cols="5">
                      <p>{{item.name}}</p>
                    </v-col>
                    <v-col cols="5">
                      <p class="icon--text">
                        <v-icon :color="item.color" size="10"> mdi-circle</v-icon>
                        {{item.isonline}}
                      </p>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="6">
                  <v-row>
                    <v-col cols="5">
                      <p class="red--text" >
                        {{item.rnumber}}
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
    </v-col>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  components: {},
  data() {
    return {
      chartData: [
        ["Year", "Sales", "Expenses", "Profit"],
        ["2014", 1000, 400, 200],
        ["2015", 1170, 460, 250],
        ["2016", 660, 1120, 300],
        ["2017", 1030, 540, 350],
      ],
      chartOptions: {
        chart: {
          title: "Company Performance",
          subtitle: "Sales, Expenses, and Profit: 2014-2017",
        },
      },
      items:[
        {
          name: 'umar rg', color: 'red', isonline: 'online', rcolor: 'red', rnumber: '2x', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU'
        },
         {
          name: 'usman', color: 'red', isonline: 'online', rcolor: 'red', rnumber: '2x', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRBEHPADiAPPa9p0T4-rUSfABRrIBBEFUvWg&usqp=CAU'
        }
      ]
    };
  },
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
.card_con {
  font-weight: bold;
  color: black;
}
</style>
