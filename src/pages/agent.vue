<script setup lang="ts">
import { shallowRef } from 'vue'
import GeneralContents from '@/views/pages/sidebar/general/generalContents.vue'
import beanContents from '@/views/pages/sidebar/settings/beanContents.vue'
import ClasspathContents from '@/views/pages/sidebar/settings/classpathContents.vue'
import Log4jContents from '@/views/pages/sidebar/settings/log4jContents.vue'
import Sidebar from '@/views/pages/sidebar/sidebar.vue'

// 사이드바 열림/닫힘 상태
const drawer = ref(true)

// 현재 선택된 페이지 상태
const currentPage = shallowRef<string>('GeneralContents')

// 컴포넌트 상태
const currentComponent = shallowRef<typeof GeneralContents | typeof ClasspathContents | typeof beanContents | typeof Log4jContents | null>(GeneralContents)

// navigateTo 함수 정의 (사이드바 항목 클릭 시)
const navigateTo = (page: string) => {
  currentPage.value = page
  if (page === 'GeneralContents')
    currentComponent.value = GeneralContents
  else if (page === 'ClasspathContents')
    currentComponent.value = ClasspathContents
  else if (page === 'beanContents')
    currentComponent.value = beanContents
  else if (page === 'Log4jContents')
    currentComponent.value = Log4jContents
}
</script>

<template>
  <VApp>
    <!-- 사이드바 컴포넌트 사용, navigateTo와 currentPage를 전달 -->
    <Sidebar
      v-model:drawer="drawer"
      :navigate-to="navigateTo"
      :current-page="currentPage"
    />

    <!-- 메인 콘텐츠 -->
    <VMain>
      <VContainer>
        <!-- 동적으로 선택된 컴포넌트를 렌더링 -->
        <component :is="currentComponent" />
      </VContainer>
    </VMain>
  </VApp>
</template>
