<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="pa-0" v-bind="attrs" v-on="on">
        <v-list class="pa-0">
          <v-list-item>
            <v-list-item-icon>
              <v-avatar color="#f7f9fb">
                <i class="fas fa-share-alt-square" style="color: #707070;"></i>
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="custom__text mt-5">Post a lecture share</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
    <v-card>
      <v-card-text>
        <v-card-title class="pt-8">
          <v-row>
            <h6 class="headline">Create Lecture Share</h6>
            <v-spacer></v-spacer>
            <v-btn color="#e39200" class="" icon @click="dialog = false">
              <v-icon color="black">mdi-close</v-icon>
            </v-btn>
          </v-row>
        </v-card-title>
        <v-divider class="mb-4"></v-divider>

        <v-container>
          <v-row>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Subject</span>
                <v-text-field outlined> </v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Lavel</span>
                <v-select
                  :items="['Primary level', 'Secondary level', 'Tetiary level']"
                  label="Select level"
                  outlined
                  required
                ></v-select>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Title</span>
                <p>
                  The title could be specific course or sub-field of the subject
                </p>

                <v-text-field outlined label="Enter Title"> </v-text-field>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <span>Describe Lecture</span>
                <v-textarea
                  outlined
                  placeholder="type in a description for the lecture"
                ></v-textarea>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <v-card-title class="pa-0" color="#e39200">
                  Tags
                </v-card-title>
                <p>
                  Add up to 3 tags to further describe lecture.
                </p>
              </div>

              <v-text-field placeholder="Exp, Math" outlined></v-text-field>
            </v-col>
            <v-row>
              <span class="ml-3 ">Share with:</span>

              <v-radio
                value="public"
                label="public"
                size="10"
                color="#e39200"
              ></v-radio>

              <v-radio
                value="followers"
                label="follower/following"
                size="10"
                color="#e39200"
              ></v-radio>
            </v-row>
            <v-row class="mt-5">
              <span class="ml-3 ">Origin:</span>

              <v-radio
                value="original"
                label="Original"
                size="10"
                color="#e39200"
              ></v-radio>

              <v-radio
                value="source"
                label="Source"
                size="10"
                color="#e39200"
              ></v-radio>
            
            </v-row>
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
