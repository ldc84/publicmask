<template>
  <v-container id="about" text-xs-center>
    <h3 class="title">마스크 5부제 시행</h3>
    <p class="overline">코로나19 모두 함께 이겨냅시다!</p>
    <v-list subheader>
      <v-list-item
        v-for="item in items"
        :key="item.title"
      >
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>
        <v-list-item-avatar>
          <v-icon
            :class="[item.iconClass]"
            v-text="item.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title><strong class="subtitle-2" v-text="item.title"></strong></v-list-item-title>
          <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
          <v-list-item-subtitle v-text="item.text"></v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>

  </v-container>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    items: [
      { header: '확인하고 가세요!!' },
      { icon: 'done', iconClass: 'cyan lighten-4 white--text', title: '구매 가능 요일 확인하기', subtitle: '월(1,6) / 화(2,7) / 수(3,8) / 목(4,9) / 금(5,0) / 토,일(주중 구매 못한 사람)', text:'' },
      { icon: 'done', iconClass: 'cyan lighten-4 white--text', title: '신분증 꼭 챙겨가기', subtitle: '미성년 : 청소년증 or 여권 or 학생증, 외국인 : 건강보험증 + 외국인등록증, 장애인 : 장애인복지카드', text:'' },
      { icon: 'done', iconClass: 'cyan lighten-4 white--text', title: '대리구매 가능자', subtitle: '어린이 : 2010년 이후 출생, 어르신 : 1940년 이전 출생, 장기요양급여수급자, 장애인등록증 소지자', text:'필요서류 : 대리구매자의 신분증 및 대리구매자, 대상자 병기된 주민등록등본' },
      { icon: 'done', iconClass: 'cyan lighten-4 white--text', title: '읍, 면 지역', subtitle: '우체국, 하나로마트는 중복구매확인시스템 구축 전까지 하루 1인당 1개만 구매가능', text:'이번주 구매하지 않았다고, 다음주 한도가 늘어나지 않으니 유의해주세요.' },
    ]
  }),
}
</script>

<style lang="scss" scoped>
  .v-list-item__subtitle {
    overflow: visible;
    text-overflow: inherit;
    white-space: inherit;
  }
</style>