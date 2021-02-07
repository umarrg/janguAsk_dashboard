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
              <v-card tile>
                <v-data-table
                  :headers="headers"
                  :items="desserts"
                  hide-default-header
                  hide-default-footer
                  class="elevation-1"
                ></v-data-table>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data() {
    return {
      // Array will be automatically processed with visualization.arrayToDataTable function
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
       headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%',
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%',
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: '22%',
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: '6%',
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
