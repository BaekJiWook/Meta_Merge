import type { PathParams } from 'msw'
import { HttpResponse, http } from 'msw'
import { db } from '@db/auth/db'
import type { UserOut } from '@db/auth/types'

// Handlers for auth
export const handlerAuth = [

  http.post<PathParams>(('/api/auth/login'), async ({ request }) => {
    const { email, password } = await request.json() as { email: string; password: string }

    let errors: Record<string, string[]> = {
      email: ['Something went wrong'],
    }

    const user = db.users.find(u => u.email === email && u.password === password)

    if (user) {
      try {
        const accessToken = db.userTokens[user.id]

        // We are duplicating user here
        const userData = { ...user }

        const userOutData = Object.fromEntries(
          Object.entries(userData)
            .filter(
              ([key, _]) => !(key === 'password' || key === 'abilityRules'),
            ),
        ) as UserOut['userData']

        const response: UserOut = {
          userAbilityRules: userData.abilityRules,
          accessToken,
          userData: userOutData,
        }

        return HttpResponse.json(response,
          { status: 201 })
      }
      catch (e: unknown) {
        errors = { email: [e as string] }
      }
    }
    else {
      errors = { email: ['Invalid email or password'] }
    }

    return HttpResponse.json({ errors }, { status: 400 })
  }),

  // // 회원가입 핸들러 추가
  // http.post<PathParams>('/api/auth/register', async ({ request }) => {
  //   const { email, password, username, fullName } = await request.json() as {
  //     email: string
  //     password: string
  //     username: string
  //     fullName: string
  //   }

  //   const errors: Record<string, string[]> = {
  //     email: ['Something went wrong'],
  //   }

  //   // 중복 이메일 확인
  //   const existingUser = db.users.find(u => u.email === email)
  //   if (existingUser) {
  //     errors.email = ['This email is already in use']

  //     return HttpResponse.json({ errors }, { status: 400 })
  //   }

  //   // 새로운 유저 추가
  //   const newUserId = db.users.length + 1

  //   const newUser = {
  //     id: newUserId,
  //     email,
  //     password,
  //     username,
  //     fullName,
  //     avatar: `${import.meta.env.BASE_URL ?? '/'}images/avatars/avatar-${newUserId}.png`,
  //     role: 'client',
  //     abilityRules: [
  //       {
  //         action: 'read',
  //         subject: 'AclDemo',
  //       },
  //     ],
  //   }

  //   db.users.push(newUser)

  //   // 임시 토큰 가져오기
  //   const assignedToken = db.userTokens[newUserId - 1] // 0부터 시작하여 순서대로 사용

  //   // 응답 데이터 준비
  //   const userOutData = { ...newUser }

  //   delete userOutData.password

  //   const response: UserOut = {
  //     userAbilityRules: newUser.abilityRules,
  //     accessToken: assignedToken,
  //     userData: userOutData,
  //   }

  //   return HttpResponse.json(response, { status: 201 })
  // }),
]
