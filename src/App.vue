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
        공적 마스크 현황
      </div>

      <v-spacer></v-spacer>
      
      <span class="mr-2">Mask</span>      
    </v-app-bar>

    <v-content id="container">
      <v-breadcrumbs :items="mMenu" id="mNav"></v-breadcrumbs>
      <div id="nav">
        <v-navigation-drawer floating permanent expand-on-hover>
          <v-list>
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">Developer</v-list-item-title>
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
                <i class="material-icons">
                  storefront
                </i>
              </v-list-item-icon>
              <v-list-item-title>전체 판매처</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="$router.push('/inventory')">
              <v-list-item-icon>
                <i class="material-icons">
                  move_to_inbox
                </i>
              </v-list-item-icon>
              <v-list-item-title>지역별 판매처</v-list-item-title>
            </v-list-item>
            <v-list-item link @click="$router.push('/about')">
              <v-list-item-icon>
                <i class="material-icons">
                  info
                </i>
              </v-list-item-icon>
              <v-list-item-title>정보</v-list-item-title>
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

    <div class="loader" v-if="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </div>

  </v-app>
</template>

<script>
import { globalEvent } from '^@/event';
export default {
  name: 'App',

  data: () => ({
    overlay: false,
    mMenu: [
      {
        text: '전체 판매처',
        disabled: false,
        to: '/',
      },
      {
        text: '지역별 판매처',
        disabled: false,
        to: '/inventory',
      },
      {
        text: '정보',
        disabled: false,
        to: '/about',
      },
    ]
  }),
  mounted(){
    globalEvent.$on('updateLoader', (bool) => {
      this.overlay = bool;
    });
  }
};
</script>
<style lang="scss" scoped>
  /* * {padding:0; margin:0;} */
  #mNav {
    display:none;
  }
  #nav {
    position:fixed;
    top:56px;
    bottom:0;
    z-index:2;
  }
  #contents {
    padding:0 0 0 56px;
  }
  .loader {
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    display:flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
    background-color:rgba(0,0,0,0.5);
  }
  @media screen and (max-width:980px) {
    #mNav {
      display:block;
    }
    #nav {
      display:none;
    }
    #contents {
      padding:0;
    }
  }
</style>
