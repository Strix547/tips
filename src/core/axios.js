import axios from 'axios'

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
  (res) => res,
  ({ response }) => {
    // console.log('res', response)
    // if (response?.status === 401) {
    //   setCookie('auth', false)
    // }
  }
)
