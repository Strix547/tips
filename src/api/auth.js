import { API } from 'core/axios'

const root = '/auth'

export const sendCode = async (phone) => {
  try {
    await API.post(`${root}/sign-in/phone/send-code`, { phone })
  } catch ({ response }) {
    const { code } = response.data
    if (code === 'PHONE_RESEND_TIMEOUT_NOT_OUT') throw new Error('Code timeout')
  }
}

export const confirmCode = async ({ phone, code, remember }) => {
  try {
    const data = await API.post(
      `${root}/sign-in/phone/confirm-code`,
      {
        phone,
        code
      },
      { params: { 'remember-me': remember } }
    )
    return data
  } catch (e) {
    console.log('confirmCode() - invalid code')
  }
}

export const signOut = () => {
  return API.post(`${root}/sign-out`)
}
