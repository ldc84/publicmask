<template>
  <v-container id="store" text-xs-center>
    <v-list subheader>
      <v-subheader>총 판매처 : {{ paging.totalCount || '0' }}</v-subheader>
        <v-list-item
          v-for="(store, index) in stores"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title v-text="store.name"></v-list-item-title>
            <v-list-item-subtitle v-text="store.addr"></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon @click="getGoogleMap(store.lat, store.lng)">
            <i class="material-icons">
              add_location
            </i>
          </v-list-item-icon>
        </v-list-item>
    </v-list>

    <v-pagination
      v-model="paging.page"
      prev-icon="keyboard_arrow_left"
      next-icon="keyboard_arrow_right"
      :length="paging.length"
      :total-visible="7"
      @input="getStore(paging.page)"
    ></v-pagination>
  </v-container>
</template>

<script>
import axios from 'axios';
import { API_URL } from '^@/API';
import { globalEvent } from '^@/event';
export default {
  name: 'Store',
  data: () => ({
    paging: {
      page:1,
      length: 5,
      totalCount: null
    },
    stores: null
  }),
  mounted(){
    this.getStore(1);
  },
  methods: {
    getStore(num){
      globalEvent.$emit('updateLoader', true);
      const params = {
        page: num,
      }
      axios.get(API_URL+'/stores/json', {params: params})
        .then(res => {
          console.log(res);
          this.stores = res.data.storeInfos;
          this.paging.page = parseInt(res.data.page);
          this.paging.totalCount = res.data.totalCount;
          this.paging.length = res.data.totalPages;
          globalEvent.$emit('updateLoader', false);
        })
    },
    getGoogleMap(lat, lng){
      window.open(`https://www.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=18`)
    }
  }  
}
</script>

<style lang="scss" scoped>

</style>