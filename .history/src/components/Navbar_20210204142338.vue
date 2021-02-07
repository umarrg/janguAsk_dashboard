<template>
  <v-navigation-drawer v-model="drawer" dark app color="">
    <v-list>
      <v-list-item
        active-class="border"
        v-for="item in items"
        :key="item.icon"
        :to="item.route"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ item.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item
        active-class="border"
        v-for="link in services"
        :key="link.icon"
        :to="link.route"
      >
        <v-list-item-action>
          <v-icon>{{ link.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-list-item
      color="white"
      active-class="border"
      v-for="link in admin"
      :key="link.icon"
      :to="link.route"
      v-show="user.userRole === 'admin'"
    >
      <v-list-item-action>
        <v-icon>{{ link.icon }}</v-icon>
      </v-list-item-action>
      <v-list-item-content>
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-divider></v-divider>

    <template v-slot:append>
      <div class=" d-flex justify-center mb-5 align-center">
        <v-row align="center" justify="center">
          <v-col cols="4">
            <v-avatar size="40">
              <img src="../assets/captain.jpeg" alt="super admin picture" />
            </v-avatar>
          </v-col>
          <v-col cols="4">
              <p>Super Admin</p>
          </v-col>
        </v-row>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,

    items: [
      { icon: "mdi-home", text: "Home", route: "/" },
      { icon: "mdi-office-building", text: "Post", route: "/post" },

      { icon: "mdi-cog", text: "User", route: "/user" },
    ],
  }),
};
</script>
