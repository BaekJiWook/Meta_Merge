<script lang="ts" setup>
const imcAddress = ref('')
const rootDirectory = ref('')
const imcVersion = ref(null)
</script>

<template>
  <VRow>
    <VCol cols="2">
      <h4>IMC 주소</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="imcAddress"
        label="IMC 주소"
      />
    </VCol>

    <VCol cols="2">
      <h4>루트 디렉토리</h4>
    </VCol>
    <VCol cols="10">
      <VTextField
        v-model="rootDirectory"
        label="아이피"
      />
    </VCol>

    <VCol cols="2">
      <h4>IMC 버전</h4>
    </VCol>
    <VCol cols="10">
      <VSelect
        v-model="imcVersion"
        :items="['2.5.0', '2.6.0', '2.7.0']"
        label="IMC 버전"
      />
    </VCol>
  </VRow>
</template>
