<script setup lang="ts">
import * as demoCodeList from '@/views/demos/components/list/demoCodeList'
import CardAdvanceActiveProject from '@/views/pages/cards/card-advance/CardAdvanceActiveProject.vue'
import CardBasic from '@/views/pages/cards/card-basic/CardBasic.vue'
import CardStatisticsSessionsBarWithGapCharts from '@/views/pages/cards/card-statistics/CardStatisticsSessionsBarWithGapCharts.vue'
</script>

<template>
  <VRow>
    <!-- Basic Cards -->
    <VCol
      cols="12"
      sm="4"
      lg="4"
    >
      <p class="text-2xl mb-6">
        Basic Cards
      </p>
      <CardBasic />
    </VCol>
    <!-- 👉 Active Project -->
    <VCol
      cols="12"
      sm="4"
      lg="4"
    >
      <CardAdvanceActiveProject />
    </VCol>
    <!-- 👉 Sessions Bar Chart with Gaps -->
    <VCol
      cols="12"
      sm="4"
      md="4"
      lg="2"
    >
      <CardStatisticsSessionsBarWithGapCharts />
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Users List -->
      <AppCardCode
        title="User List"
        no-padding
        :code="demoCodeList.userList"
      >
        <VCardText>
          <DemoListUserList />
        </VCardText>
      </AppCardCode>
    </VCol>

    <VCol
      cols="12"
      md="6"
    >
      <!-- 👉 Progress List -->
      <AppCardCode
        title="Progress List"
        no-padding
        :code="demoCodeList.progressList"
      >
        <VCardText>
          <DemoListProgressList />
        </VCardText>
      </AppCardCode>
    </VCol>
  </VRow>
</template>
