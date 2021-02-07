<template>
  <nav>

  </nav>
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