<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="pa-0" v-bind="attrs" v-on="on">
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
    </template>
    <v-card>
      <v-card-text>
        <v-card-title class="pt-8">
          <v-row>
            <h6 class="headline">Post a Ads</h6>
            <v-spacer></v-spacer>
            <v-icon color="black">mdi-cancel</v-icon>
          </v-row>
        </v-card-title>
        <v-divider class=""></v-divider>

        <v-container>
          <v-row>
            <v-col cols="12" md="12">
              <div>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Select Type of Post"
                  outlined
                  required
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="12">
              <div>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Select page to show the post"
                  outlined
                  required
                ></v-select>
              </div>
            </v-col>
             <v-col cols="12" md="12">
              <div>
                v
              </div>
            </v-col>
          </v-row>
        </v-container>
       
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Close
        </v-btn>
        <v-btn color="blue darken-1" text @click="dialog = false">
          Save
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
