<script lang="ts" setup>
import { ref } from 'vue'
import Login from '@/views/apps/todo-list/login-v1.vue' // Login 컴포넌트 임포트
import TodoList from '@/views/apps/todo-list/TodoList.vue'

// 현재 보여줄 컴포넌트를 관리하는 상태
const currentComponent = ref<'TodoList' | 'Login'>('TodoList')

// 컴포넌트 전환 함수
const switchToTodo = () => { currentComponent.value = 'TodoList' }
const switchToLogin = () => { currentComponent.value = 'Login' }
</script>

<template>
  <!--
    <VCard
    class="mx-auto mb-6"
    outlined
    >
    <TodoList />
    </VCard>

    <VCard>
    <Login />
    </VCard>
  -->
  <VCard
    class="mx-auto mb-6"
    outlined
  >
    <!-- 버튼 클릭 시 컴포넌트 전환 -->
    <VCardActions>
      <VBtn
        color="primary"
        @click="switchToTodo"
      >
        To-Do List
      </VBtn>
      <VBtn
        color="secondary"
        @click="switchToLogin"
      >
        Login
      </VBtn>
    </VCardActions>
    <!-- 조건에 따라 TodoList 또는 Login 컴포넌트 렌더링 -->
    <component :is="currentComponent === 'TodoList' ? TodoList : Login" />
  </VCard>
</template>
