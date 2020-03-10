<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <v-spacer></v-spacer>
      
      <span class="mr-2">Mask</span>      
    </v-app-bar>

    <v-content id="container">
      <div id="nav">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">Lee Dongchun</v-list-item-title>
                <v-list-item-subtitle>goodldc84@gmail.com</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list
            nav
            dense
          >
            <v-list-item link @click="$router.push('/')">
              <v-list-item-icon>
                <i class="material-icons del">
                  storefront
                </i>
              </v-list-item-icon>
              <v-list-item-title>판매처</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="$router.push('/inventory')">
              <v-list-item-icon>
                <i class="material-icons del">
                  move_to_inbox
                </i>
              </v-list-item-icon>
              <v-list-item-title>재고</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
      <div id="contents">
        <v-container pa-0 fluid fill-height align-content-center align-center>
          <v-slide-x-transition mode="out-in">
            <router-view></router-view>
          </v-slide-x-transition>
        </v-container>
      </div>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
  /* * {padding:0; margin:0;} */
  #nav {
    position:absolute;
    top:0;
    bottom:0;
  }
  #contents {
    padding:0 0 0 56px;
  }
</style>
