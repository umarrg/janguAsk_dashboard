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
         <Adscard />
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-list class="pa-0">
              <v-list-item>
                <v-list-item-icon>
                  <v-avatar color="#f7f9fb">
                    <v-icon color="#707070">mdi-video-plus</v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <p class="custom__text mt-5">Post a video here</p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-list class="pa-0">
              <v-list-item>
                <v-list-item-icon>
                  <v-avatar color="#f7f9fb">
                    <v-icon color="#707070">mdi-video-plus</v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <p class="custom__text mt-5">Post a Quize here</p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-list class="pa-0">
              <v-list-item>
                <v-list-item-icon>
                  <v-avatar color="#f7f9fb">
                    <v-icon color="#707070">mdi-video-plus</v-icon>
                  </v-avatar>
                </v-list-item-icon>
                <v-list-item-content>
                  <p class="custom__text mt-5">Post a lecture share</p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-card-subtitle class="pa-0">
                <h5>Videos posted by Admin</h5>
              </v-card-subtitle>
              <v-list v-for="item in videolist" :key="item.title">
                <v-list-item class="pa-0">
                  <v-list-item-icon class="pa-0">
                    <v-sheet
                      rounded
                      color="black"
                      width="50"
                      height="35"
                      class=" d-flex  align-center justify-center "
                    >
                      <v-sheet color="#f69233" width="20" height="19">
                        <v-icon
                          color="white"
                          class="d-flex align-center justify-center"
                          size="20"
                          >mdi-play</v-icon
                        >
                      </v-sheet>
                    </v-sheet>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <p class="custom__size mt-3">
                      {{ item.title }}
                    </p>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-icon color="black">mdi-dots-vertical</v-icon>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
                <v-divider></v-divider>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-card-subtitle class="pa-0 mb-4">
                <h5>Quizes posted by Admin</h5>
              </v-card-subtitle>
              <v-card
                v-for="item in quize"
                :key="item.title"
                class="mb-6"
                rounded
              >
                <v-list>
                  <v-list-item>
                    <v-list-item-icon>
                      <v-avatar color="#e39200">
                        <v-icon color="white"> mdi-pencil-ruler </v-icon>
                      </v-avatar>
                    </v-list-item-icon>
                    <v-list-item-content class="p-0 mb-0">
                      <v-list-item-title class="pa-0 mb-0">
                        <p>{{ item.title }}</p>
                      </v-list-item-title>
                      <v-list-item-subtitle class="pa-0">
                        <p>multiple choice</p>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-menu
            bottom
            left
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, i) in menus"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="4">
          <v-card>
            <v-card-text>
              <v-card-subtitle class="pa-0 mb-4">
                <h5>lecture share posted by Admin</h5>
              </v-card-subtitle>
              <v-sheet color="white" elevation="2" rounded v-for="item in lecture " :key="item.title" class="mb-6">
                <v-card-text>
                  <v-row>
                    <v-card-subtitle class=" ma-0">
                      <h6>Mathematics</h6>
                    </v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-card-subtitle class=" ma-0">
                      <h6>secondary level</h6>
                    </v-card-subtitle>
                    <v-btn icon>
                      <v-icon color="black" size="15"
                        >mdi-dots-vertical
                      </v-icon>
                    </v-btn>
                  </v-row>
                  <v-divider></v-divider>
                  <div>
                    <h5>{{item.title}}</h5>
                    <p class="custom__size">
                      This is very wonderful lecture note on advanced mechanics
                      This is very wonderful lecture note on advanced
                    </p>
                  </div>
                  <div>
                    <v-chip class="mr-7" color="#f7f7f7">
                      Motion
                    </v-chip>
                    <v-chip class="" color="#f7f7f7">
                      Thermodynamics
                    </v-chip>
                  </div>
                  <div class="mt-3">
                    <v-sheet color="#f7f7f7" width="270">
                      <v-card-text class="pa-5">
                        <v-row>
                          <v-icon color="#f69227" class="mr-3">
                            mdi-pdf-box
                          </v-icon>
                          <h6>
                            Mechanics 101.pdf
                          </h6>
                        </v-row>
                      </v-card-text>
                    </v-sheet>
                  </div>
                  <div class="mt-3">
                    <v-row>
                      <h6 class="mt-2">
                        <v-icon color="#707070" size="18"
                          >mdi-arrow-down-bold</v-icon
                        >
                        78 download
                      </h6>
                      <v-spacer></v-spacer>
                      <h6 class="mt-2">
                        <v-icon color="#707070" size="18">mdi-handshake</v-icon>
                        applaud
                      </h6>
                      <h6 class="mt-2">
                        <v-icon color="#707070" size="18">mdi-clock</v-icon>
                        11hr
                      </h6>
                    </v-row>
                  </div>
                </v-card-text>
              </v-sheet>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Adscard from '../components/Ads_card';
export default {
    components:{
        Adscard

    },
  data: () => ({
    videolist: [
      {
        title:
          " Learn how to answer jamb/waec past examination questions at home",
        divider: true,
        inset: true,
      },
      {
        title:
          " Learn how to answer jamb/waec past examination questions at home",
      },
      {
        title:
          " show how to answer jamb/waec past examination questions at home",
      },
      {
        title:
          " find how to answer jamb/waec past examination questions at home",
      },
      {
        title:
          " change how to answer jamb/waec past examination questions at home",
      },
      {
        title:
          " plant how to answer jamb/waec past examination questions at home",
      },
    ],
    quize: [
      {
        title: "Mathematics",
      },
      {
        title: "English",
      },
      // {
      //     title: 'Economics'
      // },
      {
        title: "Science",
      },
      {
        title: "Engineering",
      },
    ],
    lecture:[
        {
            title: 'Advanced machanics'
        },
         {
            title: 'Computer science'
        }
    ]
  }),
};
</script>

<style scoped>
.custom__bg {
  background: #f7f9fb;
}
.custom__text {
  color: #707070;
}
.custom__size {
  font-size: 10px;
}
</style>
