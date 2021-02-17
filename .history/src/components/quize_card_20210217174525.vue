<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-card class="pa-0" v-bind="attrs" v-on="on">
        <v-list class="pa-0">
          <v-list-item>
            <v-list-item-icon>
              <v-avatar color="#f7f9fb">
                <v-icon color="#707070">mdi-video</v-icon>
              </v-avatar>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="custom__text mt-5">Post a Quiz here</p>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
    </template>
    <v-card>
      <v-card-text>
        <v-card-title class="pt-8">
          <v-row>
            <h6 class="headline">Post a Quiz here</h6>
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
                <span>Body of the quetion</span>
                <v-textarea outlined append-icon="mdi-camera"></v-textarea>
              </div>
            </v-col>
            <v-col cols="12" md="12" class="px-2 py-0">
              <div>
                <v-card-title class="pa-0" color="#e39225">
                  Answers
                </v-card-title>
                <p>
                  Each question can have one or more correct answers. Check the
                  box(es) with the correct answer(s)
                </p>
              </div>

              <v-row align="center">
                <v-col cols="12" md="11" class="px-2 py-0">
                  <v-text-field label="Optiaon a"></v-text-field>
                </v-col>
                <v-col cols="12" md="1" class="px-2 py-0">
                  <v-checkbox value="value" color="#f69227"></v-checkbox>
                </v-col>
                <v-col cols="12" md="11" class="px-2 py-0">
                  <v-text-field label="Optiaon b"></v-text-field>
                </v-col>
                <v-col cols="12" md="1" class="px-2 py-0">
                  <v-checkbox value="value" color="#f69227"></v-checkbox>
                </v-col>
                <v-col cols="12" md="11" class="px-2 py-0">
                  <v-text-field label="Optiaon c"></v-text-field>
                </v-col>
                <v-col cols="12" md="1" class="px-2 py-0">
                  <v-checkbox value="value" color="#f69227"></v-checkbox>
                </v-col>
                <v-col cols="12" md="11" class="px-2 py-0">
                  <v-text-field label="Optiaon d"></v-text-field>
                </v-col>
                <v-col cols="12" md="1" class="px-2 py-0">
                  <v-checkbox value="value" color="#f69227"></v-checkbox>
                </v-col>
                <v-col cols="12" md="11" class="px-2 py-0">
                  <v-text-field label="Optiaon e"></v-text-field>
                </v-col>
                <v-col cols="12" md="1" class="px-2 py-0">
                  <v-checkbox value="value" color="#f69227"></v-checkbox>
                </v-col>
              </v-row>
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
