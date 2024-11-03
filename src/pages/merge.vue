<script lang="ts" setup>
import { ref } from 'vue'
import CardStatisticsAdapter from '@/views/pages/cards/card-statistics/CardStatisticsAdapter.vue'

// import AdapterOverview from '@/views/pages/monitoring/adapterOverview.vue'
import AgentMonitoring from '@/views/pages/monitoring/agentMonitoring.vue'

const navigationTab = ref('운영현황')
const tabItems = ['운영현황', '시스템 정보']
</script>

<template>
  <!-- 전체 화면을 사용하기 위해 fluid 속성 추가 -->
  <VContainer fluid>
    <VRow>
      <VCol cols="12">
        <VCard>
          <!-- 왼쪽 정렬된 전체 화면 탭 -->
          <VTabs
            v-model="navigationTab"
            align-tabs="start"
          >
            <VTab
              v-for="item in tabItems"
              :key="item"
            >
              {{ item }}
            </VTab>
          </VTabs>

          <!-- 탭 내용 -->
          <VWindow v-model="navigationTab">
            <VWindowItem value="운영현황">
              <VCardItem class="text-start">
                <VCardTitle>에이전트 모니터링</VCardTitle>
                <VDivider />
              </VCardItem>
              <VCardText>
                <AgentMonitoring />
              </VCardText>
              <VCardItem class="text-start">
                <VCardTitle>어뎁터 현황</VCardTitle>
                <VDivider />
              </VCardItem>
              <VCol>
                <CardStatisticsAdapter />
                <!-- <AdapterOverview /> -->
              </VCol>
            </VWindowItem>

            <VWindowItem value="시스템 정보">
              <VCardItem class="text-center">
                <VCardTitle>원하는컴포넌트</VCardTitle>
              </VCardItem>
              <VCardText>
                <!-- 원하는 다른 컴포넌트를 여기에 추가 -->
              </VCardText>
            </VWindowItem>
          </VWindow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
