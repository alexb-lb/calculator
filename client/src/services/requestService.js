import axios from 'axios'
import requestErrorsMap from '../dictionaries/requestErrorsMap'

const getErrorMessage = (error) => {
  if (error.response) {
    const { status, data } = error.response

    if (data && data.message) {
      return requestErrorsMap[data.message]
    }

    if (status === 404) {
      return requestErrorsMap.NOT_FOUND
    }
  } 
  
  else if (error.request) {
    return requestErrorsMap.NETWORK_ERROR 
  }
  
  return requestErrorsMap.UNHANDLED_ERROR
}

const RequestService = () => {
  const defaultOptions = { method: 'get' }
  const baseUrl = process.env.BACKEND_URL + '/api'

  return {
    async request({ url, method = null, data = null }) {
      const params = { ...defaultOptions }

      params.url = baseUrl + url
      if (method) params.method = method
      if (data) params.data = data

      try {
        const { data } = await axios(params)

        if (!data || typeof data !== 'object' || data === null) {
          throw new Error()
        }

        return { success: true, data }
      } catch (error){
        return { success: false, error: getErrorMessage(error) }
      }
    }
  }
}

export default RequestService()
