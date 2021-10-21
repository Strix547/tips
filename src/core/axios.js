import axios from 'axios'
import router from 'next/router'

import { ROUTE_NAMES, ROUTES } from 'core/routes'
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
    const isProtectedRoute = ROUTES.find(({ path }) => router.pathname === path)?.isProtected

    if (response?.status === 401 && isProtectedRoute) {
      router.push(ROUTE_NAMES.AUTH)
    }

    return response
  }
)
