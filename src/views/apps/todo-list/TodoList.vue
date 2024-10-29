<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue';

interface Todo {
  id: number
  subject: string
  completed: boolean
}

// 리액티브 변수 정의
const todo = ref<string>('')
const todos = ref<Todo[]>([])
const hasError = ref<boolean>(false)

// 컴포넌트가 처음 로드될 때 로컬 스토리지에서 할 일 목록을 불러옴
onMounted(() => {
  const storedTodos = localStorage.getItem('todos')
  if (storedTodos)
    todos.value = JSON.parse(storedTodos)
})

// 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
watch(todos, newTodos => {
  localStorage.setItem('todos', JSON.stringify(newTodos))
}, { deep: true })

// 새로운 할 일을 추가하는 함수
const onSubmit = () => {
  if (todo.value === '') {
    hasError.value = true
  }
  else {
    todos.value.push({
      id: Date.now(),
      subject: todo.value,
      completed: false,
    })
    hasError.value = false
    todo.value = ''
  }
}

// 할 일을 삭제하는 함수
const deleteTodo = (index: number) => {
  todos.value.splice(index, 1)
}
</script>

<template>
  <!-- To-Do List 카드 형식으로 할 일 목록 표시 -->
  <VCard title="To-Do List">
    <!-- 할 일 추가 폼 -->
    <VCardText>
      <form @submit.prevent="onSubmit">
        <div class="d-flex">
          <div class="flex-grow-1">
            <!-- 할 일 입력 필드 -->
            <VTextField
              v-model="todo"
              label="Type new to-do"
              outlined
              hide-details="auto"
              :error="hasError"
              error-messages="This field cannot be empty"
            />
          </div>
          <div>
            <!-- 할 일 추가 버튼 -->
            <VBtn
              color="primary"
              type="submit"
            >
              Add
            </VBtn>
          </div>
        </div>

        <!-- 할 일 목록이 없을 때 표시되는 메시지 -->
        <div
          v-if="!todos.length"
          class="mt-3"
        >
          추가된 Todo가 없습니다
        </div>
      </form>

      <!-- 할 일 목록을 출력하는 부분 -->
      <div
        v-for="(todo, index) in todos"
        :key="todo.id"
        class="mt-3"
      >
        <VCard class="pa-2">
          <VRow>
            <VCol cols="9">
              <!-- 완료 여부를 나타내는 체크박스 -->
              <VCheckbox
                v-model="todo.completed"
                :label="todo.subject"
                :class="{ todo: todo.completed }"
              />
            </VCol>
            <VCol
              cols="3"
              class="text-right"
            >
              <!-- 할 일 삭제 버튼 -->
              <VBtn
                color="primary"
                type="submit"
                @click="deleteTodo(index)"
              >
                삭제
              </VBtn>
            </VCol>
          </VRow>
        </VCard>
      </div>
    </VCardText>
  </VCard>
</template>

<style scoped>
/* 할 일 완료 시 취소선과 회색 처리 */
.todo {
  color: gray;
  text-decoration: line-through;
}
</style>
