<script setup lang="ts">
import { ref } from 'vue'

// 탭 활성화 상태
const tab = ref(0)
const general = ref('')
const textView = ref('')
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
      <VRow>
        <VCol cols="12">
          <VTextarea
            v-model="general"
            label="일반"
          />
        </VCol>
      </VRow>
    </VCardText>

    <VCardText v-if="tab === 1">
      <VRow>
        <VCol cols="12">
          <VTextarea
            v-model="textView"
            label="텍스트보기"
          />
        </VCol>
      </VRow>
    </VCardText>
  </VContainer>
</template>
