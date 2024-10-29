<script lang="ts" setup>
import TodoList from '../views/apps/todo-list/TodoList.vue'
</script>

<template>
  <div>
    <Vcard
      class="mx-auto mb-6"
      outlined
    >
      <TodoList />
    </Vcard>
  </div>
</template>

<style scoped>
.todo {
  color: gray;
  text-decoration: line-through; /* 할 일 완료 시 취소선과 회색 처리 */
}
</style>
