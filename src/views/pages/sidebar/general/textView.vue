<script lang="ts" setup>
const agentName = ref('')
</script>

<template>
  <VRow>
    <VCol cols="12">
      <VTextarea
        v-model="agentName"
        label="텍스트보기"
      />
    </VCol>
  </VRow>
</template>
