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
                    <v-icon color="black">mdi-dots-vertical</v-icon>
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
                        
                      <v-icon color="black">mdi-dots-vertical </v-icon>
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
              <v-sheet color="white" elevation="3" rounded>
                <v-card-text>
                  <v-row>
                    <v-card-subtitle class="pa-2 ma-0">
                      <h6>Mathematics</h6>
                    </v-card-subtitle>
                    <v-spacer></v-spacer>
                    <v-card-subtitle class="pa-2 ma-0">
                      <h6>secondary level</h6>
                    </v-card-subtitle>
                    <v-btn icon>
                      <v-icon color="black" size="15"
                        >mdi-dots-vertical
                      </v-icon>
                    </v-btn>
                  </v-row>
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
export default {
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
