import axios from 'axios'

const habitApi = axios.create({
  baseURL: import.meta.env.VITE_URL,
})

export default habitApi;