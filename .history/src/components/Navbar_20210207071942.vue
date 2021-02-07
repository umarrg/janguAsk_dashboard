<template>
  <v-navigation-drawer v-model="drawer" dark app color="#2c3d4d" width="250">
      <v-layout column align-center>
        <v-flex class="mt-3 mb-4">
            <div>
                <p class="header_text">JanguAsk</p>
            </div>
        </v-flex>
      </v-layout>
      <p class="white--text ml-2">Main</p>
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
          <v-col cols="2" class="px-2 py-0" >
            <v-avatar size="40">
              <img src="../assets/captain.jpeg" alt="super admin picture" />
            </v-avatar>
          </v-col>
          <v-col cols="5" class="px-2 py-0">
            <div>
                  <v-btn small text>
              
              <p class="mt-4 white--text" >Super Admin</p>
                  </v-btn>
            </div>
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
      { icon: "mdi-view-dashboard", text: "Dashboard", route: "/" },
      { icon: "mdi-account-circle", text: "Users", route: "/user" },

      { icon: "mdi-share", text: "Post", route: "/post" },
    ],
  }),
};
</script>
<style >
.header_text{
    color: #e39225;
}
</style>