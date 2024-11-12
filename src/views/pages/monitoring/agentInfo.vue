<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { db } from '@db/info/db'

// Reactive variables
const errors = ref<string[]>([]) // 오류 메시지를 저장할 변수 추가
const loading = ref(true) // 로딩 상태를 위한 변수 추가

// 데이터 받아오는 함수
const systemInfo = async () => {
  try {
    // API 요청
    const response = await $api('/info/agent-info') // 요청 URL
    if (!response.ok) {
      const errorData = await response.text() // 에러 메시지 가져오기
      throw new Error(errorData || 'Network response was not ok')
    }

    const data = await response.json()

    // db 객체의 속성에 데이터 할당
    db.agentInfo.installPath = data.agentInfo.installPath || ''
    db.agentInfo.osInfo = data.agentInfo.osInfo || ''
    db.agentInfo.memoryInfo = data.agentInfo.memoryInfo || ''
    db.agentInfo.classPath = data.agentInfo.classPath || []
    db.agentInfo.totalRunTime = data.agentInfo.totalRunTime || ''
  }
  catch (err) {
    errors.value.push((err as Error).message) // 에러 처리
  }
  finally {
    loading.value = false // 로딩 상태 업데이트
  }
}

// 컴포넌트가 로드될 때 데이터 받아오기
onMounted(() => {
  systemInfo()
})
</script>

<template>
  <VRow>
    <VCol cols="2">
      <h4>설치 경로</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="db.agentInfo.installPath"
        readonly
      />
    </VCol>

    <VCol cols="2">
      <h4>운영체제 정보</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="db.agentInfo.osInfo"
        readonly
      />
    </VCol>

    <VCol cols="2">
      <h4>메모리 정보</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="db.agentInfo.memoryInfo"
        readonly
      />
    </VCol>

    <VCol cols="2">
      <h4>클래스 패스</h4>
    </VCol>
    <VCol cols="10">
      <VTextarea
        v-model="db.agentInfo.classPath"
        style="block-size: 100px;"
        rows="4"
        readonly
      />
    </VCol>

    <VCol cols="2">
      <h4>총 운영 시간</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="db.agentInfo.totalRunTime"
        readonly
      />
    </VCol>
  </VRow>
</template>
