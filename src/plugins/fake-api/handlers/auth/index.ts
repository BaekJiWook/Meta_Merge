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

    return HttpResopnse.json({ errors }, { status: 400 })
  }),

  http.post<PathParams>(('/api/auth/loginTodoList'), async ({ request }) => {
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

  // 실제 db는 http.post
  // Register 핸들러
  // http.post<PathParams>('/api/auth/register', async ({ request }) => {
  //   const { fullName, username, email, password } = await request.json() as {
  //     fullName: string
  //     username: string
  //     email: string
  //     password: string
  //   }

  //   // 필수 데이터가 없으면 오류 응답 반환
  //   if (!username || !email || !password)
  //     return HttpResponse.json({ error: 'Missing required fields' }, { status: 400 })

  //   // 새로운 사용자 데이터 생성
  //   const newUser: User = {
  //     id: db.users.length + 1, // 새 ID 생성
  //     fullName,
  //     username,
  //     email,
  //     password,
  //     avatar: `${import.meta.env.BASE_URL ?? '/'}images/avatars/avatar-${db.users.length + 1}.png`,
  //     role: 'client',
  //     abilityRules: [{ action: 'read', subject: 'all' }],
  //   }

  //   db.users.push(newUser) // 사용자 추가

  //   // 사용자의 ID에 맞는 토큰 선택
  //   const tokenIndex = newUser.id - 1 // 토큰 배열 인덱스에 맞추기 위해 1을 뺌
  //   const accessToken = db.userTokens[tokenIndex]

  //   // 토큰이 존재하지 않는 경우에 대한 처리
  //   if (!accessToken)
  //     return HttpResponse.json({ error: 'No token available for this user' }, { status: 400 })

  //   // 응답으로 새로운 사용자 데이터와 토큰 반환
  //   const response: RegisterResponse = {
  //     userData: {
  //       id: newUser.id,
  //       fullName: newUser.fullName,
  //       username: newUser.username,
  //       password: newUser.password,
  //       email: newUser.email,
  //       avatar: newUser.avatar,
  //       role: newUser.role,
  //       abilityRules: newUser.abilityRules,
  //     },

  //     // accessToken, // 선택한 토큰 사용
  //     // userAbilityRules: newUser.abilityRules,
  //   }

  //   return HttpResponse.json(response, { status: 201 })
  // }),
]
