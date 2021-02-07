<template>
  <nav>
    <v-navigation-drawer
      app
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      width="256"
    >
      <v-list dense>
       e }}</v-list-item-subtitle>
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
      { icon: "mdi-office-building", text: "Post", route: "/post" },
      
      { icon: "mdi-cog", text: "User", route: "/user" },
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