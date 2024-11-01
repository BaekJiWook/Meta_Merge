<script setup lang="ts">
import CardStatisticsESB1 from '@/views/pages/cards/card-statistics/CardStatisticsESB1.vue'
import CardStatisticsESB2 from '@/views/pages/cards/card-statistics/CardStatisticsESB2.vue'
import CardStatisticsESB3 from '@/views/pages/cards/card-statistics/CardStatisticsESB3.vue'
import CardStatisticsTransactions from '@/views/pages/cards/card-statistics/CardStatisticsTransactions.vue'
</script>

<template>
  <VRow class="match-height">
    <!-- 👉 Transition Card  -->
    <VCol
      cols="12"
      md="4"
      class="mb-3"
    >
      <CardStatisticsTransactions />
    </VCol>
    <!-- 👉 EBS1 Card  -->
    <VCol
      cols="12"
      md="4"
      class="mb-3"
    >
      <CardStatisticsESB1 />
    </VCol>
    <!-- 👉 EBS2 Card  -->
    <VCol
      cols="12"
      md="4"
      class="mb-3"
    >
      <CardStatisticsESB2 />
    </VCol>
    <!-- 👉 EBS3 Card  -->
    <VCol
      cols="12"
      md="4"
      class="mb-3"
    >
      <CardStatisticsESB3 />
    </VCol>
  </VRow>
</template>
