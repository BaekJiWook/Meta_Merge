<script lang="ts" setup>
const agentName = ref('')
const ip = ref('')
const port = ref(27001)
const agentVersion = ref(null)
</script>

<template>
  <VRow>
    <VCol cols="2">
      <h4>에이전트 이름</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="agentName"
        label="에이전트 이름"
      />
    </VCol>

    <VCol cols="2">
      <h4>아이피</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="ip"
        label="아이피"
      />
    </VCol>

    <VCol cols="2">
      <h4>포트</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="port"
        label="포트"
        type="number"
      />
    </VCol>

    <VCol cols="2">
      <h4>에이전트 버전</h4>
    </VCol>
    <VCol cols="10">
      <VSelect
        v-model="agentVersion"
        :items="['2.5.0', '2.6.0', '2.7.0']"
        label="에이전트 버전"
      />
    </VCol>
  </VRow>
</template>
