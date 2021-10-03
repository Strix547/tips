import axios from 'axios'
import router from 'next/router'

import { ROUTES, PROTECTED_ROUTES } from 'core/routes'
import { getCookie } from 'utils'

const API_BASE = '/api/v1'

export const API = axios.create({
  baseURL: API_BASE,
  withCredentials: true,
  transformResponse: [].concat(axios.defaults.transformResponse, ({ result, error }) => {
    if (error) {
      return error
    }

    return result
  })
})

API.interceptors.request.use((req) => {
  const token = getCookie('XSRF-TOKEN')

  API.defaults.headers = {
    'X-XSRF-TOKEN': token
  }
  return req
})

API.interceptors.response.use(
  (res) => {
    return res
  },
  ({ response }) => {
    const isProtectedRoute = PROTECTED_ROUTES.includes(router.pathname)

    if (response?.status === 401 && isProtectedRoute) {
      router.push(ROUTES.AUTH)
    }

    return response
  }
)
