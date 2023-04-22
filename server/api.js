import axios from 'axios'

const API_URL = 'http://localhost:4000'

const api = axios.create({
  baseURL: API_URL,
})

api.interceptors.request.use(config => {
  const csrfToken = document.cookie.match(/XSRF-TOKEN=(\w+)/)?.[1]
  if (csrfToken) {
    config.headers['X-CSRF-TOKEN'] = csrfToken
  }
  return config
})

export { api }
