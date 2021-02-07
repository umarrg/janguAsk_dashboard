<template>

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