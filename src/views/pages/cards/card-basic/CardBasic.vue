<script setup lang="ts">
import pages1 from '@images/pages/1.png'
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Influencing The Influencer -->
    <VCol>
      <VCard>
        <VImg
          :src="pages1"
          cover
        />

        <VCardItem>
          <VCardTitle>Basic CheckBox</VCardTitle>
        </VCardItem>

        <VCardText>
          <DemoCheckboxIcon />
        </VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss" scoped>
.v-btn {
  transform: none;
}
</style>
