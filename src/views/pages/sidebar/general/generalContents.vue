<script setup lang="ts">
import { ref } from 'vue'
import AgentSettings from '@/views/pages/sidebar/general/agentSettings.vue'
import ImcSettings from '@/views/pages/sidebar/general/imcSettings.vue'
import JmsSettings from '@/views/pages/sidebar/general/jmsSettings.vue'
import TextView from '@/views/pages/sidebar/general/textView.vue'

// 탭 활성화 상태
const tab = ref(0)
</script>

<template>
  <VContainer>
    <!-- 탭 추가 -->
    <VTabs
      v-model="tab"
      background-color="indigo"
      dark
    >
      <VTab>일반</VTab>
      <VTab>텍스트보기</VTab>
    </VTabs>

    <!-- 탭 내용 -->
    <VCardText v-if="tab === 0">
      <VCardItem class="text-start">
        <VCardTitle>에이전트 설정</VCardTitle>
        <VDivider />
      </VCardItem>
      <VCardText>
        <AgentSettings />
      </VCardText>
      <VCardItem class="text-start">
        <VCardTitle>IMC 설정</VCardTitle>
        <VDivider />
      </VCardItem>
      <VCardText>
        <ImcSettings />
      </VCardText>
      <VCardItem class="text-start">
        <VCardTitle>JMS 설정</VCardTitle>
        <VDivider />
      </VCardItem>
      <VCardText>
        <JmsSettings />
      </VCardText>
    </VCardText>

    <VCardText v-if="tab === 1">
      <TextView />
    </VCardText>
  </VContainer>
</template>
