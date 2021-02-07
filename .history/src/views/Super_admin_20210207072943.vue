<template>
  <v-app class="custom__bg">
    <v-app-bar max-height="150" color="white" prominent>
      <v-toolbar-title class="mt-12 ml-4">
        <v-card-text>
          <div class="mt-12">
            <p class="header_text h2--text mt-8">Super Admin</p>
            <p class="second_header mb-0">The super admin can add admins</p>

            <span class="third_header"
              >Is a master admin can controle enything</span
            >
          </div>
        </v-card-text>
      </v-toolbar-title>
    </v-app-bar>
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-card>
            <v-list>
              <v-list-item>
                <v-list-item-avatar>
                  <v-avatar>
                    <img src="../assets/captain.jpeg" alt="images" />
                  </v-avatar>
                </v-list-item-avatar>
                <v-list-item-content>
                  <p class="mt-5">
                    Super Admin
                  </p>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="5">
          <v-card>
            <v-card-text>
              <v-card-title>
                <h6>Create Admin</h6>
              </v-card-title>
              <v-col></v-col>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>
<style scoped>
.custom__bg {
  background: #f7f9fb;
}
</style>
