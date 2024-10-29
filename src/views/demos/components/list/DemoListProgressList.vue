<script setup lang="ts">
import { ref } from 'vue'

interface Language {
  'react': string
  'bootstrap': string
  'vue': string
  'angular': string
  'javascript': string
}

interface Progress {
  avatar: string
  title: string
  language: keyof Language
  amount: number
}

const languageProgress: Progress[] = [
  {
    avatar: 'tabler-brand-react',
    title: 'React is a JavaScript library for building user interfaces',
    language: 'react',
    amount: 90,
  },
  {
    avatar: 'tabler-brand-bootstrap',
    title: 'Bootstrap is an open source toolkit',
    language: 'bootstrap',
    amount: 80,
  },
  {
    avatar: 'tabler-brand-vue',
    title: 'Vue.js is the Progressive JavaScript Framework',
    language: 'vue',
    amount: 65,
  },
  {
    avatar: 'tabler-brand-angular',
    title: 'Angular implements Functional Programming concepts',
    language: 'angular',
    amount: 75,
  },
  {
    avatar: 'tabler-brand-javascript',
    title: 'JavaScript is the programming language of the Web',
    language: 'javascript',
    amount: 70,
  },
]

const resolveStatusColor: Language = {
  react: 'info',
  bootstrap: 'primary',
  vue: 'success',
  angular: 'error',
  javascript: 'warning',
}

// 알림 표시 여부 상태 배열
const alertVisible = ref<boolean[]>(languageProgress.map(() => false))

// 클릭 시 알림 표시 여부를 토글하는 함수
const toggleAlert = (index: number) => {
  alertVisible.value[index] = !alertVisible.value[index]
}
</script>

<template>
  <VList
    lines="two"
    border
  >
    <template
      v-for="(progress, index) of languageProgress"
      :key="progress.language"
    >
      <VListItem @click="toggleAlert(index)">
        <template #prepend>
          <VAvatar
            size="36"
            rounded
            variant="tonal"
            :icon="progress.avatar"
            :color="resolveStatusColor[progress.language]"
          />
        </template>

        <VListItemTitle>
          {{ progress.language }} 클릭!!
        </VListItemTitle>

        <VListItemSubtitle class="mt-2">
          <VProgressLinear
            height="6"
            rounded
            rounded-bar
            :model-value="progress.amount"
            :color="resolveStatusColor[progress.language]"
          />
        </VListItemSubtitle>

        <!-- 클릭 시 VAlert 표시/숨기기(언어에 맞는 색상 적용) -->
        <VAlert
          v-if="alertVisible[index]"
          :color="resolveStatusColor[progress.language]"
          class="mt-2"
          variant="outlined"
          dismissible
        >
          {{ progress.title }}
        </VAlert>
      </VListItem>

      <VDivider v-if="index !== languageProgress.length - 1" />
    </template>
  </VList>
</template>
