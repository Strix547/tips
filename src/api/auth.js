import { API } from 'core/axios'

const root = '/auth'

export const sendCode = (phone) => {
  return API.post(`${root}/sign-in/phone/send-code`, { phone })
}

export const confirmCode = ({ phone, code }) => {
  return API.post(`${root}/sign-in/phone/confirm-code`, {
    phone,
    code
  })
}

export const signOut = () => {
  return API.post(`${root}/sign-out`)
}
