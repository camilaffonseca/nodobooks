import axios from 'axios'

const options = {
  baseURL: process.env.REACT_APP_API_URL
}

const fetchClient = axios.create(options)

export default fetchClient
