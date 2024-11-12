<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref([

  {
    title: 'af23fb',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 23:45',
    uptime: '218일 15시간 22분',
  },
  {
    title: 'awefaw',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-03-12 09:24',
    uptime: '206일 5시간 42분',
  },
  {
    title: 'azzz',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 23:45',
    uptime: '218일 15시간 22분',
  },
  {
    title: 'DB_DB_RECV',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 14:12',
    uptime: '219일 9시간 18분',
  },
  {
    title: 'DB_DB_SEND',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 14:12',
    uptime: '219일 9시간 18분',
  },
  {
    title: 'JFOSK_MESSAGE_SENDER',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-21 11:05',
    uptime: '226일 4시간 27분',
  },
  {
    title: 'WfEm23',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 23:45',
    uptime: '218일 15시간 22분',
  },
  {
    title: 'WMfEM',
    icon: 'tabler-stack-2-filled',
    color: 'primary',
    status: '중단',
    startTime: '2024-02-28 23:45',
    uptime: '218일 15시간 22분',
  },
])
</script>

<template>
  <VCard>
    <VRow align="start">
      <!-- 가운데 정렬 -->
      <VCol
        v-for="item in statistics"
        :key="item.title"
        class="d-flex align-center "
        cols="12"
        md="3"
      >
        <VCard class="pa-4 d-flex">
          <!-- 왼쪽: 아이콘과 상태 -->
          <VCol
            cols="3"
            class="d-flex flex-column align-center"
          >
            <VAvatar
              :color="item.color"
              size="70"
              class="d-flex flex-column align-center justify-center"
            >
              <VIcon size="40">
                {{ item.icon }}
              </VIcon>
              <p
                class="text-xs mt-1"
                style="font-size: 10px;"
              >
                {{ item.status }}
              </p>
            </VAvatar>
          </VCol>

          <!-- 오른쪽: 제목, 시작 시간, 가동 시간 -->
          <VCol cols="9">
            <h3 class="mb-1">
              {{ item.title }}
            </h3>
            <p class="text-body-2">
              <span class="font-weight-bold">시작 시간</span>
              <span class="float-right">{{ item.startTime }}</span>
            </p>
            <VDivider />
            <p class="text-body-2">
              <span class="font-weight-bold">가동 시간</span>
              <span class="float-right">{{ item.uptime }}</span>
            </p>
          </VCol>
        </VCard>
      </VCol>
    </VRow>
  </VCard>
</template>
