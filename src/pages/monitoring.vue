<script lang="ts" setup>
import { ref } from 'vue'
import AdapterStatus from '@/views/pages/monitoring/adapterStatus.vue'
import AgentInfo from '@/views/pages/monitoring/agentInfo.vue'
import AgentMonitoring from '@/views/pages/monitoring/agentMonitoring.vue'
import ServerRuntimeInfo from '@/views/pages/monitoring/serverRuntimeInfo.vue'

const navigationTab = ref('운영현황')
const tabItems = ['운영현황', '시스템 정보']
</script>

<template>
  <!-- 전체 화면을 사용하기 위해 fluid 속성 추가 -->
  <VContainer fluid>
    <VRow>
      <VCol cols="12">
        <VCard class="elevation-1 rounded">
          <!-- 상단에 배경색이 있는 모니터링 제목 -->
          <div class="monitoring-header">
            <VCardTitle class="text-h4 m-0">
              모니터링
            </VCardTitle>
          </div>

          <!-- 왼쪽 정렬된 전체 화면 탭 -->
          <VTabs
            v-model="navigationTab"
            align-tabs="start"
            class="tabs-container"
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
                <AdapterStatus />
              </VCol>
            </VWindowItem>

            <VWindowItem value="시스템 정보">
              <VCardItem class="text-start">
                <VCardTitle>에이전트 정보</VCardTitle>
                <VDivider />
              </VCardItem>
              <VCardText>
                <AgentInfo />
              </VCardText>
              <VCardItem class="text-start">
                <VCardTitle>서버 런타임 정보</VCardTitle>
                <VDivider />
              </VCardItem>
              <VCardText>
                <ServerRuntimeInfo />
              </VCardText>
            </VWindowItem>
          </VWindow>
        </VCard>
      </VCol>
    </VRow>
  </VContainer>
</template>
