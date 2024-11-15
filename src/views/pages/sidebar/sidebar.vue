<script setup lang="ts">
import { defineProps, ref } from 'vue'

// props로 navigateTo, currentPage, drawer를 받음
const props = defineProps<{
  navigateTo: (page: string) => void
  currentPage: string
  drawer: boolean
}>()

// 부모에게 상태 변경을 알리기 위한 emit 정의
const emit = defineEmits<{
  (e: 'update:drawer', value: boolean): void
}>()

// props.drawer를 로컬 상태로 복사
const localDrawer = ref(props.drawer)

// localDrawer의 변화가 있을 때 emit으로 부모에 알림
watch(localDrawer, newVal => {
  emit('update:drawer', newVal)
})

// 사이드바 열림/닫힘 상태를 토글하는 함수
const toggleDrawer = () => {
  localDrawer.value = !localDrawer.value
}

// 설정 그룹의 열림/닫힘 상태
const isSettingsOpen = ref(false) // 기본적으로 닫힌 상태

// 설정 그룹 열림/닫힘을 토글하는 함수
const toggleSettings = () => {
  isSettingsOpen.value = !isSettingsOpen.value
}
</script>

<template>
  <!-- 사이드바 컴포넌트 -->
  <VNavigationDrawer
    v-model="localDrawer"
    app
    permanent
    width="250"
    class="elevation-4"
  >
    <!-- 열림/닫힘 토글 버튼 -->
    <div class="d-flex justify-end ma-2">
      <VBtn
        icon
        @click="toggleDrawer"
      >
        <VIcon>
          tabler-chevron-left
        </VIcon>
      </VBtn>
    </div>

    <div class="d-flex justify-center pa-4">
      <VIcon size="150">
        tabler-server-2
      </VIcon>
    </div>

    <!-- 네비게이션 항목들 -->
    <VList dense>
      <!-- 일반 항목 -->
      <VListItem @click="props.navigateTo('GeneralContents')">
        <VListItemTitle :class="{ 'font-weight-bold': props.currentPage === 'GeneralContents' }">
          <VIcon>
            tabler-folder
          </VIcon>
          일반
        </VListItemTitle>
      </VListItem>

      <!-- 설정 그룹 -->
      <VListItem @click="toggleSettings">
        <VListItemTitle>
          <VIcon v-if="!isSettingsOpen">
            tabler-chevron-right
          </VIcon>
          <VIcon v-else>
            tabler-chevron-down
          </VIcon>
          설정
        </VListItemTitle>
      </VListItem>
      <div
        v-if="isSettingsOpen"
        class="pl-4"
      >
        <VListItem @click="props.navigateTo('ClasspathContents')">
          <VListItemTitle :class="{ 'font-weight-bold': props.currentPage === 'ClasspathContents' }">
            <VIcon>
              tabler-settings
            </VIcon>
            .classpath
          </VListItemTitle>
        </VListItem>
        <VListItem @click="props.navigateTo('beanContents')">
          <VListItemTitle :class="{ beanContents: props.currentPage === 'beanContents' }">
            <VIcon>
              tabler-settings
            </VIcon>
            bean.xml
          </VListItemTitle>
        </VListItem>
        <VListItem @click="props.navigateTo('Log4jContents')">
          <VListItemTitle :class="{ beanContents: props.currentPage === 'Log4jContents' }">
            <VIcon>
              tabler-settings
            </VIcon>
            log4j.xml
          </VListItemTitle>
        </VListItem>
      </div>

      <!-- 라이브러리 -->
      <VListItem>
        <VListItemTitle>
          <VIcon>
            tabler-folder
          </VIcon>
          라이브러리
        </VListItemTitle>
      </VListItem>

      <!-- 로그 -->
      <VListItem>
        <VListItemTitle>
          <VIcon>
            tabler-folder
          </VIcon>
          로그
        </VListItemTitle>
      </VListItem>
    </VList>
  </VNavigationDrawer>
</template>
