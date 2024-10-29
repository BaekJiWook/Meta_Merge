<script lang="ts" setup>
import { onMounted, ref, watch } from 'vue' // Vue의 리액티브 기능과 라이프사이클 훅을 불러옴

// TODO항목의 인터페이스 정의
interface Todo {
  id: number // 할 일의 고유 ID
  subject: string // 할 일 내용
  completed: boolean // 할 일 완료 여부
}

// 리액티브 변수 정의
const todo = ref<string>('') // 새로운 할 일 입력을 받는 변수
const todos = ref<Todo[]>([]) // 할 일 목록을 저장하는 배열
const hasError = ref<boolean>(false) // 입력란이 비었을 때 오류 메시지 표시 여부

// 컴포넌트가 처음 로드될 때 로컬 스토리지에서 할 일 목록을 불러옴
onMounted(() => {
  const storedTodos = localStorage.getItem('todos') // 로컬 스토리지에서 'todos' 데이터를 가져옴
  if (storedTodos)
    todos.value = JSON.parse(storedTodos) // JSON 데이터를 배열로 변환하여 할 일 목록에 할당
})

// 할 일 목록이 변경될 때마다 로컬 스토리지에 저장
watch(todos, newTodos => {
  localStorage.setItem('todos', JSON.stringify(newTodos)) // todos 배열을 JSON으로 변환하여 로컬 스토리지에 저장
}, { deep: true }) // deep: true는 배열의 내부 변경도 감지하도록 설정

// 새로운 할 일을 추가하는 함수
const onSubmit = () => {
  if (todo.value === '') {
    hasError.value = true // 입력란이 비어있으면 오류 메시지 표시
  }
  else {
    todos.value.push({
      id: Date.now(), // 현재 시간을 이용해 고유 ID 생성
      subject: todo.value, // 입력된 할 일 내용
      completed: false, // 처음에는 완료되지 않은 상태
    })
    hasError.value = false // 오류 메시지 숨김
    todo.value = '' // 입력란 초기화
  }
}

// 할 일을 삭제하는 함수
const deleteTodo = (index: number) => {
  todos.value.splice(index, 1) // 할 일 목록에서 해당 항목을 삭제
}
</script>

<template>
  <!-- To-Do List 카드 형식으로 할 일 목록 표시 -->
  <VCard
    class="mx-auto mb-6"
    outlined
    title="To-Do List"
  >
    <!-- 할 일 추가 폼 -->
    <VCardText>
      <form @submit.prevent="onSubmit">
        <div class="d-flex">
          <div class="flex-grow-1 mr-2">
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
