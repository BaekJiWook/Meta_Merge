<script setup lang="ts">
import { shallowRef } from 'vue'
import { VForm } from 'vuetify/components/VForm'
import Login from '@/views/apps/todo-list/login-v1.vue'

// definePage({
//   meta: {
//     layout: 'blank',
//     unauthenticatedOnly: true,
//   },
// })

const form = ref({
  username: '',
  email: '',
  password: '',
  privacyPolicies: false,
})

const currentComponent = shallowRef<typeof Login | null>(null)
const isPasswordVisible = ref(false)

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
          <VForm @submit.prevent="() => {}">
            <VRow>
              <!-- Username -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.username"
                  :rules="[requiredValidator]"
                  autofocus
                  label="Username"
                  placeholder="Johndoe"
                />
              </VCol>

              <!-- email -->
              <VCol cols="12">
                <AppTextField
                  v-model="form.email"
                  :rules="[requiredValidator, emailValidator]"
                  label="Email"
                  type="email"
                  placeholder="johndoe@email.com"
                />
              </VCol>

              <!-- password -->
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
  </vcard>
</template>

<style lang="scss">
  @use "@core/scss/template/pages/page-auth";
</style>
