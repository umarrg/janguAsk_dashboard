<template>
  <nav>
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      width="256"
    >
      <v-list dense>
        <v-list-item color="light-blue" link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item>
        <v-form>
          <v-row justify="center">
            <v-col cols="10">
              <v-select
                hide-details
                dense
                :items="sites"
                solo
                filled
                label="Select Site"
              ></v-select>
            </v-col>
            <v-col cols="10">
              <v-select
                hide-details
                dense
                :items="sections"
                solo
                filled
                label="Select Faculty/Section"
              ></v-select>
            </v-col>
            <v-col cols="10">
              <v-select
                hide-details
                dense
                :items="departments"
                solo
                filled
                label="Select Department"
              ></v-select>
            </v-col>
          </v-row>
        </v-form>
        <v-list-item color="light-blue" link to="/report">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Reports</v-list-item-title>
        </v-list-item>
        <v-list-item color="light-blue" link to="/setting">
          <v-list-item-icon>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="light-blue"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span class="hidden-sm-and-down font-weight-light">FEIMS</span>
      </v-toolbar-title>
      <!-- <v-text-field
        dense
        rounded
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field> -->
      <v-spacer></v-spacer>
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mr-2" v-on="on" v-bind="attrs">
            <v-badge content="15" color="red" overlap>
              <v-icon color="white">mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <v-card
          max-width="400"
          class="mx-auto cutom__card--overflow"
          height="400"
          width="350"
        >
          <v-card-title primary-title> Notifications </v-card-title>

          <v-list>
            <v-list-item-subtitle class="ml-3">Earlier</v-list-item-subtitle>
            <v-list-item v-for="message in messages" :key="message.title" to="">
              <v-avatar>
                <img :src="message.image" alt="alt" class="mr-2" />
              </v-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ message.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ message.tile }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
      <v-btn icon large to="/profile">
        <v-avatar size="32px" item>
          <v-img
            src="https://i.imgur.com/HBOQXZp.png"
            alt="Profile Image"
          ></v-img
        ></v-avatar>
      </v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    drawer: null,
    sites: ["ABU", "ATBU", "BUK"],
    sections: ["FE", "FM", "FS"],
    departments: ["DOM", "DOB", "DOP"],
    items: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-office-building", text: "Sites", route: "/site" },
      { icon: "mdi-chart-bar", text: "Reports", route: "report" },
      { icon: "mdi-cog", text: "Settings", route: "setting" },
    ],
    messages: [
      { title: "solo", tile: "keico cooperation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Os2IiumkKKDJbU7BRdgBJOZLl_SswxJorQ&usqp=CAU' },
      { title: "mono", tile: "keico cooperation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Os2IiumkKKDJbU7BRdgBJOZLl_SswxJorQ&usqp=CAU' },
      { title: "flow", tile: "keico cooperation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Os2IiumkKKDJbU7BRdgBJOZLl_SswxJorQ&usqp=CAU'},
      { title: "zoko", tile: "keico cooperation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Os2IiumkKKDJbU7BRdgBJOZLl_SswxJorQ&usqp=CAU'},
      { title: "keiko", tile: "keico cooperation", image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Os2IiumkKKDJbU7BRdgBJOZLl_SswxJorQ&usqp=CAU'},
    ],
    Faculties: [
      "Faculty of Engineering",
      "Faculty of Sciences",
      "Faculty of Management",
      "Faculty of Social Sciences",
    ],
  }),
};
</script>