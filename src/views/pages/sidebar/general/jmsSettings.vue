<script lang="ts" setup>
const hostList = ref([])
const reconnectionTime = ref('')
const reconnectionAttempts = ref('')
const maxWaitTime = ref('')
const randomSelection = ref(null)
</script>

<template>
  <VRow>
    <VCol cols="2">
      <h4>호스트리스트</h4>
    </VCol>
    <VCol cols="10">
      <VDataTable
        v-model="hostList"
        label="호스트리스트"
        class="outlined-table"
        outlined
      />
    </VCol>
    <VRow>
      <!-- 첫 번째 행 -->
      <VCol cols="2">
        <h4>재연결 시간</h4>
      </VCol>
      <VCol cols="4">
        <VTextField
          v-model="reconnectionTime"
          type="number"
          outlined
          hide-details
        />
      </VCol>
      <VCol cols="2">
        <h4>재연결 시도 횟수</h4>
      </VCol>
      <VCol cols="4">
        <VTextField
          v-model="reconnectionAttempts"
          type="number"
        />
      </VCol>
    </VRow>
    <VRow>
      <!-- 두 번째 행 -->
      <VCol cols="2">
        <h4>연결 최대 대기시간</h4>
      </VCol>
      <VCol cols="4">
        <VTextField
          v-model="maxWaitTime"
          type="number"
        />
      </VCol>
      <VCol cols="2">
        <h4>연결 랜덤 선택</h4>
      </VCol>
      <VCol cols="4">
        <VSelect
          v-model="randomSelection"
          :items="['1', '2', '3']"
          label="연결 랜덤 선택"
        />
      </VCol>
    </VRow>
  </VRow>
</template>

<style scoped>
.outlined-table {
  border: 1px solid #ccc; /* 외곽선 추가 */
  border-radius: 4px; /* 둥근 모서리 (필요에 따라 조정) */
}
</style>
