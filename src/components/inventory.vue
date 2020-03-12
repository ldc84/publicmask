<template>
  <v-container id="inventory" text-xs-center>
    <div class="sales">
      <p class="overline">100개 이상(<span class="green">녹색</span>) / 30개 이상 100개미만(<span class="yellow">노랑색</span>) / 2개 이상 30개 미만(<span class="red">빨강색</span>) / 1개 이하(<span class="grey">회색</span>) / 집계 안됨(<span>흰색</span>)</p>
      <v-select
        :items="addressSel"
        v-model="addressSelChoice"
        label="지역선택"
        @change="stores = null"
      ></v-select>
      <div v-if="addressSelChoice == '서울시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address1"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 그 외'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address2"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 성남시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address17"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 용인시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address18"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 수원시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address19"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 고양시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address20"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 안양시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address21"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경기도 안산시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address22"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[2] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '인천광역시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address3"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '강원도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address4"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '충청북도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address5"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
          {{ adds.split(' ')[2] || '' }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '충청남도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address6"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
          {{ adds.split(' ')[2] || '' }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '세종특별자치시'">
        <v-btn color="secondary" 
          dark 
          small
          @click="getStoreBy('세종특별자치시')"
        >
          전체보기
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '대전광역시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address8"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경상북도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address9"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
          {{ adds.split(' ')[2] || '' }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '경상남도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address10"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
          {{ adds.split(' ')[2] || '' }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '대구광역시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address11"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '울산광역시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address12"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '전라북도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address13"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
          {{ adds.split(' ')[2] || '' }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '전라남도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address14"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '광주광역시'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address15"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
      <div v-if="addressSelChoice == '제주특별자치도'">
        <v-btn color="secondary" 
          dark 
          small
          v-for="(adds, index) in address16"
          :key="index"
          @click="getStoreBy(adds)"
        >
          {{ adds.split(' ')[1] }}
        </v-btn>
      </div>
    </div>
    <div class="sorting" v-if="stores">
      <v-chip
        class="ma-1"
        color="green"
        label
        text-color="white"
        link
        @click="getSortList('plenty')"
      >
        <v-icon left>insert_emoticon</v-icon>
        <span>100개이상</span>
      </v-chip>
      <v-chip
        class="ma-1"
        color="yellow"
        label
        text-color="white"
        link
        @click="getSortList('some')"
      >
        <v-icon left>sentiment_satisfied_alt</v-icon>
        <span>100개미만</span>
      </v-chip>
      <v-chip
        class="ma-1"
        color="red"
        label
        text-color="white"
        link
        @click="getSortList('few')"
      >
        <v-icon left>sentiment_dissatisfied</v-icon>
        <span>30개미만</span>
      </v-chip>
      <v-chip
        class="ma-1"
        color="grey"
        label
        text-color="white"
        link
        @click="getSortList('empty')"
      >
        <v-icon left>sentiment_very_dissatisfied</v-icon>
        <span>1개이하</span>
      </v-chip>
    </div>
    <v-list class="data-list sort-list" subheader v-if="sortList.length">
        <v-list-item
          v-for="(store, index) in sortList"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>{{ store.name }} <span class="check" :class="getColor(store.remain_stat)"></span></v-list-item-title>
            <v-list-item-subtitle v-text="store.addr"></v-list-item-subtitle>
            <v-list-item-subtitle><span class="time">입고시간 : {{ store.stock_at || '-' }}</span></v-list-item-subtitle>
            <v-list-item-subtitle><span class="time">데이터생성일자 : {{ store.created_at || '-' }}</span></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon @click="getGoogleMap(store.lat, store.lng)">
            <i class="material-icons">
              add_location
            </i>
          </v-list-item-icon>
        </v-list-item>
    </v-list>
    <v-list class="data-list store-list" subheader v-if="stores">
        <v-list-item
          v-for="(store, index) in stores"
          :key="index"
        >
          <v-list-item-content>
            <v-list-item-title>{{ store.name }} <span class="check" :class="getColor(store.remain_stat)"></span></v-list-item-title>
            <v-list-item-subtitle v-text="store.addr"></v-list-item-subtitle>
            <v-list-item-subtitle><span class="time">입고시간 : {{ store.stock_at || '-' }}</span></v-list-item-subtitle>
            <v-list-item-subtitle><span class="time">데이터생성일자 : {{ store.created_at || '-' }}</span></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-icon @click="getGoogleMap(store.lat, store.lng)">
            <i class="material-icons">
              add_location
            </i>
          </v-list-item-icon>
        </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
import axios from 'axios';
import { API_URL } from '^@/API';
import { globalEvent } from '^@/event';
import _ from 'lodash';
export default {
  name: 'Sales',
  data: () => ({
    paging: {
      page:1,
      length: 5,
      totalCount: null
    },
    sorting: [
      {
        color: 'green',
        icon: 'insert_emoticon',
        text: '100개 이상',
      },
      {
        color: 'yellow',
        icon: 'sentiment_satisfied_alt',
        text: '100개 미만',
      },
      {
        color: 'red',
        icon: 'sentiment_dissatisfied',
        text: '30개 미만',
      },
      {
        color: 'grey',
        icon: 'sentiment_very_dissatisfied',
        text: '1개 이하',
      }
    ],
    sortList: [],
    addressSel: ['서울시', '경기도 성남시', '경기도 용인시', '경기도 수원시', '경기도 고양시', '경기도 안양시', '경기도 안산시', '경기도 그 외', '인천광역시', '강원도', '충청북도', '충청남도', '세종특별자치시', '대전광역시', '경상북도', '경상남도','대구광역시','울산광역시','전라북도','전라남도','광주광역시','제주특별자치도'],
    addressSelChoice:'',
    // 서울
    address1: ['서울특별시 강남구', '서울특별시 강동구', '서울특별시 강북구', '서울특별시 강서구', '서울특별시 관악구', '서울특별시 광진구', '서울특별시 구로구', '서울특별시 금천구', '서울특별시 노원구', '서울특별시 도봉구', '서울특별시 동대문구', '서울특별시 동작구', '서울특별시 마포구', '서울특별시 서대문구', '서울특별시 서초구', '서울특별시 성동구', '서울특별시 성북구', '서울특별시 송파구', '서울특별시 양천구', '서울특별시 영등포구', '서울특별시 용산구', '서울특별시 은평구', '서울특별시 종로구', '서울특별시 중구', '서울특별시 중랑구'],
    // 경기도
    address2: ['경기도 부천시','경기도 광명시','경기도 평택시','경기도 과천시','경기도 오산시','경기도 시흥시','경기도 군포시','경기도 의왕시','경기도 하남시','경기도 이천시','경기도 안성시','경기도 김포시','경기도 화성시','경기도 광주시','경기도 의정부시','경기도 동두천시','경기도 구리시','경기도 남양주시','경기도 파주시','경기도 양주시','경기도 포천시','경기도 여주시','경기도 연천군','경기도 가평군','경기도 양평군'],
    // 경기도 성남시
    address17: ['경기도 성남시 분당구','경기도 성남시 수정구','경기도 성남시 중원구'],
    // 경기도 용인시
    address18: ['경기도 용인시 기흥구','경기도 용인시 수지구','경기도 용인시 처인구'],
    // 경기도 수원시
    address19: ['경기도 수원시 권선구','경기도 수원시 영통구','경기도 수원시 장안구','경기도 수원시 팔달구'],
    // 경기도 고양시
    address20: ['경기도 고양시 덕양구','경기도 고양시 일산동구','경기도 고양시 일산서구'],
    // 경기도 안양시
    address21: ['경기도 안양시 만안구','경기도 안양시 동안구'],
    // 경기도 안산시
    address22: ['경기도 안산시 단원구','경기도 안산시 상록구'],
    // 인천
    address3: ['인천광역시 강화군','인천광역시 계양구','인천광역시 남동구','인천광역시 동구','인천광역시 미추홀구','인천광역시 부평구','인천광역시 서구','인천광역시 연수구','인천광역시 옹진군','인천광역시 중구'],
    // 강원도
    address4: ['강원도 강릉시', '강원도 고성군', '강원도 동해시', '강원도 삼척시', '강원도 속초시', '강원도 양구군', '강원도 양양군', '강원도 영월군', '강원도 원주시', '강원도 인제군', '강원도 정선군', '강원도 철원군', '강원도 춘천시', '강원도 태백시', '강원도 평창군', '강원도 홍천군', '강원도 화천군', '강원도 횡성군'],
    // 충청북도
    address5: ['충청북도 괴산군','충청북도 단양군','충청북도 보은군','충청북도 영동군','충청북도 옥천군','충청북도 음성군','충청북도 제천시','충청북도 증평군','충청북도 진천군','충청북도 청주시 상당구','충청북도 청주시 서원구','충청북도 청주시 청원구','충청북도 청주시 흥덕구','충청북도 충주시'],
    // 충청남도
    address6: ['충청남도 계룡시','충청남도 공주시','충청남도 금산군','충청남도 논산시','충청남도 당진시','충청남도 보령시','충청남도 부여군','충청남도 서산시','충청남도 서천군','충청남도 아산시','충청남도 예산군','충청남도 천안시 동남구','충청남도 천안시 서북구','충청남도 청양군','충청남도 태안군','충청남도 홍성군'],
    // 세종시
    address7: ['세종특별자치시 고운동','세종특별자치시 금남면','세종특별자치시 대평동','세종특별자치시 도담동','세종특별자치시 보람동','세종특별자치시 부강면','세종특별자치시 새롬동','세종특별자치시 소담동','세종특별자치시 소정면','세종특별자치시 아름동','세종특별자치시 연기면','세종특별자치시 연동면','세종특별자치시 연서면','세종특별자치시 장군면','세종특별자치시 전동면','세종특별자치시 전의면','세종특별자치시 조치원읍','세종특별자치시 종촌동','세종특별자치시 한솔동'],
    // 대전
    address8: ['대전광역시 대덕구','대전광역시 동구','대전광역시 서구','대전광역시 유성구','대전광역시 중구'],
    // 경북
    address9: ['경상북도 경산시','경상북도 경주시','경상북도 고령군','경상북도 구미시','경상북도 군위군','경상북도 김천시','경상북도 문경시','경상북도 봉화군','경상북도 상주시','경상북도 성주군','경상북도 안동시','경상북도 영덕군','경상북도 영양군','경상북도 영주시','경상북도 영천시','경상북도 예천군','경상북도 울릉군','경상북도 울진군','경상북도 의성군','경상북도 청도군','경상북도 청송군','경상북도 칠곡군','경상북도 포항시 남구','경상북도 포항시 북구'],
    // 경남
    address10: ['경상남도 거제시', '경상남도 거창군', '경상남도 고성군', '경상남도 김해시', '경상남도 남해군', '경상남도 밀양시', '경상남도 사천시', '경상남도 산청군', '경상남도 양산시', '경상남도 의령군', '경상남도 진주시', '경상남도 창녕군', '경상남도 창원시 마산합포구', '경상남도 창원시 마산회원구', '경상남도 창원시 성산구', '경상남도 창원시 의창구', '경상남도 창원시 진해구', '경상남도 통영시', '경상남도 하동군', '경상남도 함안군', '경상남도 함양군', '경상남도 합천군'],
    // 대구
    address11: ['대구광역시 남구','대구광역시 달서구','대구광역시 달성군','대구광역시 동구','대구광역시 북구','대구광역시 서구','대구광역시 수성구','대구광역시 중구'],
    // 울산
    address12: ['울산광역시 남구','울산광역시 동구','울산광역시 북구','울산광역시 울주군','울산광역시 중구'],
    // 전북
    address13: ['전라북도 고창군','전라북도 군산시','전라북도 김제시','전라북도 남원시','전라북도 무주군','전라북도 부안군','전라북도 순창군','전라북도 완주군','전라북도 익산시','전라북도 임실군','전라북도 장수군','전라북도 전주시 덕진구','전라북도 전주시 완산구','전라북도 정읍시','전라북도 진안군'],
    // 전남
    address14: ['전라남도 강진군','전라남도 고흥군','전라남도 곡성군','전라남도 광양시','전라남도 구례군','전라남도 나주시','전라남도 담양군','전라남도 목포시','전라남도 무안군','전라남도 보성군','전라남도 순천시','전라남도 신안군','전라남도 여수시','전라남도 영광군','전라남도 영암군','전라남도 완도군','전라남도 장성군','전라남도 장흥군','전라남도 진도군','전라남도 함평군','전라남도 해남군','전라남도 화순군'],
    // 광주
    address15: ['광주광역시 광산구','광주광역시 남구','광주광역시 동구','광주광역시 북구','광주광역시 서구'],
    // 제주
    address16: ['제주특별자치도 제주시','제주특별자치도 서귀포시'],
    stores: null
  }),
  mounted(){
    if(this.addressSelChoice == '세종특별자치시') this.getStoreBy(this.addressSelChoice)
  },
  methods: {
    getStoreBy(add){
      globalEvent.$emit('updateLoader', true);
      this.sortList = [];
      const storeList = document.querySelector('.store-list');
      if(storeList) storeList.classList = 'data-list store-list'
      const params = {
        address: add,
      }
      axios.get(API_URL+'/storesByAddr/json', {params: params})
        .then(res => {
          this.stores = res.data.stores;
          this.paging.page = parseInt(res.data.page);
          this.paging.totalCount = res.data.totalCount;
          this.paging.length = res.data.totalPages;
          globalEvent.$emit('updateLoader', false);
        })
    },
    getColor(color){
      if(color == 'plenty'){
        return 'green'
      }else if(color == 'some'){
        return 'yellow'
      }else if(color == 'few'){
        return 'red'
      }else if(color == 'empty'){
        return 'grey'
      }
    },
    getGoogleMap(lat, lng){
      window.open(`https://www.google.com/maps?q=${lat},${lng}&ll=${lat},${lng}&z=18`)
    },
    getSortList(stat){
      this.sortList = [];
      const storeList = document.querySelector('.store-list');
      storeList.classList = 'data-list store-list hide'
      _.map(this.stores, (store)=>{
        if(store.remain_stat == stat) {
          this.sortList.push(store)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  button {
    margin:2px;
  }
  .sales {
    > div {
      display:flex;
      flex-wrap:wrap;
    }
  }
  .sorting {
    display:flex;
    justify-content: space-between;
    margin-top:20px;
    .v-chip {
      width:100%;
      justify-content: center;
    }
  }
  .data-list {
    margin-top:20px;
    padding-top:5px;
    border-top:1px solid rgba(0, 0, 0, 0.2);
    border-radius:0;
    &.hide {
      display:none;
    }
    .check {
      display:inline-block;
      width:10px;
      height:10px;
      margin-top:-4px;
      border-radius:50%;
      vertical-align: middle;
    }
    .time {
      color:#999;
      font-size:11px;
      line-height:1.2;
    }
  }
  @media screen and (max-width:980px) {
    .sorting {
      .v-chip {
        padding:0 15px;
        span {
          display:none;
        }
        .v-icon--left {
          margin:0;
        }
      }
    }
  }
</style>
