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
              <v-card-title class="pa-0">
                <h6>Create Admin</h6>
              </v-card-title>
              <v-row no-gutters>
                <v-col cols="12" md="12" class="ma-0">
                  <div>
                    <span class="mb-4"
                      >Admin Name <span class="custom__title">*</span></span
                    >
                    <v-text-field solo> </v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="12" class="ma-0">
                  <div>
                    <span class="mb-4"
                      >Email Address <span class="custom__title">*</span></span
                    >
                    <v-text-field solo class=""> </v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="mr-8">
                  <div>
                    <span class="mb-4"
                      >Password <span class="custom__title">*</span></span
                    >
                    <v-text-field solo class=""> </v-text-field>
                  </div>
                </v-col>
                <v-col cols="12" md="5" class="">
                  <div>
                    <span class="mb-4"
                      >Repeat Password
                      <span class="custom__title">*</span></span
                    >
                    <v-text-field solo class=""> </v-text-field>
                  </div>
                </v-col>
                <v-btn block color="#f69227" class="white--text">
                  Create Admin
                </v-btn>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="7">
          <v-card>
            <v-card-text>
              <v-card-title class="pa-0">
                <h6>Amins</h6>
              </v-card-title>
              <v-list v-for="item in admin" :key="item.name">
                <v-list-item class="pa-0">
                  <v-list-item-avatar>
                    <v-avatar>
                      <img src="../assets/captain.jpeg" alt="image" />
                    </v-avatar>
                  </v-list-item-avatar>
                  <v-list-item-title>
                    <p class="mt-4">{{item.name}}</p>
                  </v-list-item-title>
                  
                  <v-list-item-action class="mx-8">
                    <v-btn small color="#e53030" class="white--text">Remove</v-btn>
                  </v-list-item-action>
                  <v-list-item-action class="mx-8">
                    <v-btn small color="#707070" class="white--text"> Block</v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
    data:()=>({
        admin:[
            {
                name: ' Auwal Abubakar'
            },
             {
                name: ' Mu'
            },
             {
                name: ' Auwal Abubakar'
            },
             {
                name: ' Auwal Abubakar'
            },
             {
                name: ' Auwal Abubakar'
            },

        ]
    })
};
</script>
<style scoped>
.custom__bg {
  background: #f7f9fb;
}
.custom__title {
  color: #f69227;
}
</style>
