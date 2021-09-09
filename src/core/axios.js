import axios from 'axios'

import { getCookie } from 'utils'

const API_BASE = '/api/v1'

export const API = axios.create({
  baseURL: API_BASE,
  withCredentials: true
})

API.interceptors.request.use((req) => {
  const token = getCookie('XSRF-TOKEN')

  API.defaults.headers = {
    'X-XSRF-TOKEN': token
  }

  return req
})
