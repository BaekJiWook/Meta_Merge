<script setup lang="ts">
import { ref } from 'vue'

const statistics = ref([
  {
    title: 'ESB #_1',
    icon: 'tabler-plug-connected',
    color: 'black',
    address: '127.0.0.1:24211',
    connected: true, // 초기 상태를 연결 성공으로 설정
  },

])

// 연결 상태를 토글하는 함수
const toggleConnection = item => {
  item.connected = !item.connected
  item.icon = item.connected ? 'tabler-plug-connected' : 'tabler-plug-connected-x'
}
</script>

<template>
  <div>
    <VCard
      v-for="item in statistics"
      :key="item.title"
      @click="toggleConnection(item)"
    >
      <!-- VCard 전체에 클릭 이벤트 적용 -->
      <VCardText>
        <VRow
          class="d-flex"
          style="block-size: 100%;"
        >
          <!-- 첫 번째 구역: 제목과 아이콘 -->
          <VCol
            cols="4"
            class="d-flex flex-column align-center justify-center"
          >
            <h2>{{ item.title }}</h2>
            <VAvatar
              :color="item.color"
              size="60"
            >
              <VIcon
                :icon="item.icon"
                size="40"
              />
            </VAvatar>
          </VCol>

          <!-- 두 번째 구역: 빈 공간 -->
          <VCol
            cols="4"
            class="d-flex align-center justify-center"
          >
            <!-- 빈 공간 -->
          </VCol>

          <!-- 세 번째 구역: 주소와 연결 상태 -->
          <VCol
            cols="4"
            class="d-flex flex-column align-center justify-center"
          >
            <p>{{ item.address }}</p>
            <h2 :style="{ color: item.connected ? 'green' : 'red' }">
              {{ item.connected ? '연결 성공' : '연결 실패' }}
            </h2>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </div>
</template>
