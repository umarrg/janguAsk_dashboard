<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
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
      <v-card-title >
          <v-row >
           <span class="headline">Post a Ads</span>
           <v-spacer></v-spacer>
            <v-icon color="black">mdi-cancel</v-icon>
           
          </v-row>
      
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Legal first name*" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal middle name"
                hint="example of helper text only on focus"
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="4">
              <v-text-field
                label="Legal last name*"
                hint="example of persistent helper text"
                persistent-hint
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Password*"
                type="password"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-select
                :items="['0-17', '18-29', '30-54', '54+']"
                label="Age*"
                required
              ></v-select>
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="[
                  'Skiing',
                  'Ice hockey',
                  'Soccer',
                  'Basketball',
                  'Hockey',
                  'Reading',
                  'Writing',
                  'Coding',
                  'Basejump',
                ]"
                label="Interests"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
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
