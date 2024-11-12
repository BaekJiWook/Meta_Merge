<script setup lang="ts">
import { shallowRef } from 'vue'
import TodoList from '@/views/apps/todo-list/TodoList.vue'
import Register from '@/views/apps/todo-list/register.vue'
import { themeConfig } from '@themeConfig'

// definePage({
//   meta: {
//     layout: 'blank',
//     public: true,
//   },
// })
const currentComponent = shallowRef<typeof TodoList | null>(null)

const isPasswordVisible = ref(false)

const ability = useAbility()

const errors = ref<Record<string, string | undefined>>({
  email: undefined,
  password: undefined,
})

const refVForm = ref<VForm>()

const credentials = ref({
  email: 'admin@demo.com',
  password: 'admin',
})

const rememberMe = ref(false)

const login = async () => {
  try {
    const res = await $api('/auth/loginTodoList', {
      method: 'POST',
      body: {
        email: credentials.value.email,
        password: credentials.value.password,
      },
      onResponseError({ response }) {
        errors.value = response._data.errors
      },
    })

    const { accessToken, userData, userAbilityRules } = res

    useCookie('userAbilityRules').value = userAbilityRules
    ability.update(userAbilityRules)

    useCookie('userData').value = userData
    useCookie('accessToken').value = accessToken

    currentComponent.value = TodoList
  }
  catch (err) {
    console.error(err)
  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        login()
    })
}

const register = () => {
  currentComponent.value = Register
}
</script>

<template>
  <!-- 👉 Auth Card -->
  <VCard>
    <div>
      <template v-if="currentComponent">
        <component :is="currentComponent" />
      </template>
      <template v-else>
        <VCardText>
          <h4 class="text-h4 mb-1">
            Welcome to <span class="text-capitalize">{{ themeConfig.app.title }}</span>! 👋🏻
          </h4>
          <p class="mb-0">
            Please sign-in to your account and start the adventure
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.email"
                  autofocus
                  label="Email or Username"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="credentials.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap my-6">
                  <VCheckbox
                    v-model="rememberMe"
                    label="Remember me"
                  />
                </div>

                <!-- login button -->
                <VBtn
                  block
                  type="submit"
                >
                  TodoList Login
                </VBtn>
              </VCol>

              <!-- create account -->

              <VCol
                cols="12"
                class="text-body-1 text-center"
              >
                <span
                  class="d-inline-block"
                  style="cursor: pointer;"
                  @click="register"
                >
                  Create an account
                </span>
              </VCol>

              <!--
                <VCol
                cols="12"
                class="d-flex align-center"
                >
                <VDivider />
                <span class="mx-4 text-high-emphasis">or</span>
                <VDivider />
                </VCol>
              -->

              <!-- auth providers -->
              <!--
                <VCol
                cols="12"
                class="text-center"
                >
                <AuthProvider />
                </VCol>
              -->
            </VRow>
          </VForm>
        </VCardText>
      </template>
    </div>
  </VCard>
  <div />
  <!--
    </div>
    </div>
  -->
</template>

<style lang="scss">
@use "@core/scss/template/pages/page-auth";
</style>
