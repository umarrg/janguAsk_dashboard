<template>
  <v-app>
    <Navbar v-if="$route.meta.showHeader == true" />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer v-if="$route.meta.showHeader == true" />
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
    
  },
  data: () => ({
    //
        drawer: true,
  }),
};
</script>


<style>
</style>