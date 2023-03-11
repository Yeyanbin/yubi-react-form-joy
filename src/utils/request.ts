import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://localhost',
  timeout: 10000,
})

instance.interceptors.request.use(
  (config) => config,
  error => Promise.reject(error),
)

instance.interceptors.response.use(
  response => response,
  error => Promise.reject(error),
)

export default instance
