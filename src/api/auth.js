import { API } from 'core/axios'

const root = '/auth'

export const sendCode = async (phone) => {
  try {
    const res = await API.post(`${root}/sign-in/phone/send-code`, {
      phone: `+${phone}`
    })

    if (res?.status === 400) {
      const { code } = res.data
      if (code === 'PHONE_RESEND_TIMEOUT_NOT_OUT') throw new Error('Code timeout')
      throw new Error(code)
    }

    if (res?.status === 403) {
      throw new Error(res.statusText)
    }
  } catch ({ message }) {
    throw new Error(message)
  }
}

export const confirmCode = async ({ phone, code, remember }) => {
  try {
    const res = await API.post(
      `${root}/sign-in/phone/confirm-code`,
      {
        phone: `+${phone}`,
        code
      },
      { params: { 'remember-me': remember } }
    )

    if (res?.status === 401) {
      throw new Error('wrong code')
    }

    return res
  } catch ({ message }) {
    throw new Error(message)
  }
}

export const signOut = async () => {
  const res = await API.post(`${root}/sign-out`)
  return res
}
