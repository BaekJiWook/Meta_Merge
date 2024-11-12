<script setup lang="ts">
import { ref, shallowRef } from 'vue'
import { VForm } from 'vuetify/components/VForm'
import Login from '@/views/apps/todo-list/login-v1.vue'
import { db } from '@db/auth/db' // db import 추가

const form = ref({
  fullname: '',
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const currentComponent = shallowRef<typeof Login | null>(null)
const isPasswordVisible = ref(false)
const refVForm = ref<VForm>()

const regist = async () => {
  try {
    const res = await $api('/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullName: form.value.fullname,
        username: form.value.username,
        email: form.value.email,
        password: form.value.password,
        avatar: `${import.meta.env.BASE_URL ?? '/'}images/avatars/avatar-${db.users.length + 1}.png`, // db 사용
        role: 'client', // db 사용
        abilityRules: [{ action: 'read', subject: 'all' }], // db 사용
      }),
    })

    // 응답 객체를 로그로 확인
    console.log('Response:', res) // 응답 객체 확인
    // 응답 확인
    if (res.ok) {
      const data = await res.json() // JSON으로 파싱

      console.log('Registration successful:', data)

      // 응답 데이터를 클라이언트 측 상태에 반영
      db.users.push(data.userData) // db.users는 프론트엔드 상태에서 업데이트해야 함
    }
    else {
      const errorText = await res.text() // 오류 메시지를 텍스트로 가져옴

      console.error('Registration error:', errorText)
    }
  }
  catch (err) {
    console.error('Registration error:', JSON.stringify(err, null, 2))
  }
}

const onSubmit = () => {
  refVForm.value?.validate()
    .then(({ valid: isValid }) => {
      if (isValid)
        regist()
    })
}

const loginView = () => {
  try {
    currentComponent.value = Login
  }
  catch (err) {
    console.error(err)
  }
}
</script>

<template>
  <VCard>
    <div>
      <template v-if="currentComponent">
        <component :is="currentComponent" />
      </template>
      <template v-else>
        <VCardText>
          <h4 class="text-h4 mb-1">
            Adventure starts here 🚀
          </h4>
          <p class="mb-0">
            Make your app management easy and fun!
          </p>
        </VCardText>

        <VCardText>
          <VForm
            ref="refVForm"
            @submit.prevent="onSubmit"
          >
            <VRow>
              <!-- Fullname -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.fullname"
                  :rules="[requiredValidator]"
                  autofocus
                  label="Fullname"
                  placeholder="Johndoe lee"
                />
              </VCol>
              <!-- Username -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.username"
                  :rules="[requiredValidator]"
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <!-- Email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- Password -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.password"
                  :rules="[requiredValidator]"
                  label="Password"
                  placeholder="············"
                  :type="isPasswordVisible ? 'text' : 'password'"
                  :append-inner-icon="isPasswordVisible ? 'tabler-eye-off' : 'tabler-eye'"
                  @click:append-inner="isPasswordVisible = !isPasswordVisible"
                />

                <div class="d-flex align-center my-6">
                  <VCheckbox
                    id="privacy-policy"
                    v-model="form.privacyPolicies"
                    inline
                  />
                  <VLabel
                    for="privacy-policy"
                    style="opacity: 1;"
                  >
                    <span class="me-1 text-high-emphasis">I agree to</span>
                    <a
                      href="javascript:void(0)"
                      class="text-primary"
                    >privacy policy & terms</a>
                  </VLabel>
                </div>

                <!-- Sign up button -->
                <VBtn
                  block
                  type="submit"
                >
                  Sign up
                </VBtn>
              </VCol>
              <VCol
                cols="12"
                class="text-body-1 text-center"
              >
                <span
                  class="d-inline-block"
                  style="cursor: pointer;"
                  @click="loginView"
                >
                  Login View
                </span>
              </VCol>
            </VRow>
          </VForm>
        </VCardText>
      </template>
    </div>
  </VCard>
</template>

<style lang="scss">
  @use "@core/scss/template/pages/page-auth";
</style>
