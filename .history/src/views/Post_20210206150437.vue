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
            <v-card>
                <v-card-text>
                    <v-list>
                        <v-list-item>
                            <v-list-item-icon>
                                 <v-avatar color="#707070">
                                      <v-icon color=""></v-icon>
                                     
                                     
                                    </v-avatar>
                                
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

<style scoped>
.custom__bg {
  background: #f7f9fb;
}
</style>
