<template>
 <v-navigation-drawer v-model="drawer" dark app color="">
      <v-layout column align-center>
        <v-flex class="mt-6 mb-4">
          
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-list>
        <v-list-item
          active-class="border"
          v-for="link in links"
          :key="link.icon"
          :to="link.route"
          v-show="user.userRole === 'researcher'"
        >
          <v-list-item-action>
            <v-icon>{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
          sub-group
          color="white"
          class="ml-n4"
          v-show="user.userRole === 'researcher'"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title class="ml-4"
                >Grants &amp; Funding</v-list-item-title
              >
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="element in researchFunding"
            :key="element.icon"
            :to="element.route"
            active-class="border"
            class="custom__research--item"
          >
            <v-list-item-icon>
              <v-icon>{{ element.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ element.text }}</v-list-item-title>
          </v-list-item>
        </v-list-group>

        <v-list-item
          active-class="border"
          v-for="link in services"
          :key="link.icon"
          :to="link.route"
          v-show="user.userRole === 'researcher'"
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
        <div class="pa-2 d-flex justify-center">
          <v-btn outlined dark color="white" @click="logOut()">
            <span>Logout</span>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-btn>
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