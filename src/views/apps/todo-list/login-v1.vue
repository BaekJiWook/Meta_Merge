<script setup lang="ts">
// import AuthProvider from '@/views/pages/authentication/AuthProvider.vue'
// import authV1BottomShape from '@images/svg/auth-v1-bottom-shape.svg?raw'
// import authV1TopShape from '@images/svg/auth-v1-top-shape.svg?raw'
import { shallowRef } from 'vue'
import TodoList from '@/views/apps/todo-list/TodoList.vue'
import { themeConfig } from '@themeConfig'

// definePage({
//   meta: {
//     layout: 'blank',
//     public: true,
//   },
// })
const currentComponent = shallowRef(null)

const form = ref({
  email: '',
  password: '',
  remember: false,
})

const isPasswordVisible = ref(false)

// const route = useRoute()
// const router = useRouter()

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

// const rememberMe = ref(false)

const login = async () => {
  try {
    const res = await $api('/auth/login', {
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

    // // // Redirect to `to` query if exist or redirect to index route
    // // // ❗ nextTick is required to wait for DOM updates and later redirect
    // await nextTick(() => {
    //   router.replace(route.query.to ? String(route.query.to) : '/kopoPage')
    // })
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
</script>

<template>
  <!--
    <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <div class="position-relative my-sm-16">
  -->
  <!-- 👉 Top shape -->
  <!--
    <VNodeRenderer
    :nodes="h('div', { innerHTML: authV1TopShape })"
    class="text-primary auth-v1-top-shape d-none d-sm-block"
    />
  -->

  <!-- 👉 Bottom shape -->
  <!--
    <VNodeRenderer
    :nodes="h('div', { innerHTML: authV1BottomShape })"
    class="text-primary auth-v1-bottom-shape d-none d-sm-block"
    />
  -->

  <!-- 👉 Auth Card -->
  <VCard>
    <!--
      <VCardItem class="justify-center">
      <VCardTitle>

      <RouterLink to="/">
      <div class="app-logo">
      <VNodeRenderer :nodes="themeConfig.app.logo" />
      <h1 class="app-logo-title">
      {{ themeConfig.app.title }}
      </h1>
      </div>
      </RouterLink>

      </VCardTitle>
      </VCardItem>
    -->
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
                  v-model="form.email"
                  autofocus
                  label="Email or Username"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <!-- remember me checkbox -->
                <div class="d-flex align-center justify-space-between flex-wrap my-6">
                  <VCheckbox
                    v-model="form.remember"
                    label="Remember me"
                  />

                  <!--
                    <RouterLink
                    class="text-primary"
                    :to="{ name: 'pages-authentication-forgot-password-v1' }"
                    >
                    Forgot Password?
                    </RouterLink>
                  -->
                </div>

                <!-- login button -->
                <VBtn
                  block
                  type="submit"
                >
                  Login
                </VBtn>
              </VCol>

              <!-- create account -->
              <!--
                <VCol
                cols="12"
                class="text-body-1 text-center"
                >
                <span class="d-inline-block">
                New on our platform?
                </span>

                <RouterLink
                class="text-primary ms-1 d-inline-block text-body-1"
                :to="{ name: 'pages-authentication-register-v1' }"
                >
                Create an account
                </RouterLink>

                </VCol>
              -->

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
