<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="pa-0" v-bind="attrs" v-on="on">
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
    </template>
    <v-card>
      <v-card-text>
        <v-card-title class="pt-8">
          <v-row>
            <h6 class="headline">Post a Video</h6>
            <v-spacer></v-spacer>
            <v-btn color="#e39200" class="" icon @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>

        <v-container>
            <v-row>
                <v-col cols="12" md12>
                    <v-card flat>
                        <v-card-text>
                           v-text

                        </v-card-text>
                    </v-card>

                </v-col>
            </v-row>
            
            
             </v-container>
      </v-card-text>
      <v-card-actions class="ma-0">
        <v-spacer></v-spacer>

        <v-btn color="#e39200" class="white--text" @click="dialog = false">
          Create
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
  }),
};
</script>
<style scoped>
.custom__size {
  font-size: 11px;
}
</style>
