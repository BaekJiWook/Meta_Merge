<script setup lang="ts">
import { computed, ref } from 'vue'

const statistics = ref([
  {
    title: '총',
    number: '9',
    color: 'black',
  },
  {
    title: '운영',
    number: '0',
    color: 'green',
  },
  {
    title: '중단',
    number: '9',
    color: 'red',
  },
  {
    title: '정지',
    number: '0',
    color: 'blue',
  },
  {
    title: '시작중',
    number: '0',
    color: 'goldenrod',
  },
])

// 합계 계산
const totalNumber = computed(() => {
  return statistics.value.slice(1).reduce((sum, item) => sum + Number(item.number), 0)
})

// 총의 number 업데이트
statistics.value[0].number = String(totalNumber.value)
</script>

<template>
  <VCard>
    <VCardText>
      <VRow>
        <VCol
          v-for="(item, index) in statistics"
          :key="item.title"
          class="d-flex flex-column align-center justify-center position-relative"
          :style="{ flexBasis: `${item.title.length * 5}%` }"
        >
          <div class="text-h4 d-flex flex-column align-center justify-center">
            <h5 :style="{ color: item.color }">
              {{ item.title }}
            </h5>
            <div
              class="text-body-4 d-flex align-center justify-center"
              style="text-align: center;"
            >
              {{ item.number }}
            </div>
          </div>
          <!-- 세로 구분선 추가 -->
          <VDivider
            v-if="index < statistics.length - 1"
            vertical
            class="position-absolute"
            style=" block-size: 80%;inset-inline-end: 0;"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VCard>
</template>
