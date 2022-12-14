import axios from 'axios'
import type { AxiosInstance } from 'axios'

const service: AxiosInstance = axios.create({
  timeout: 30000,
})
export default service