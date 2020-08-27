import axios from 'axios'
import requestErrorsMap from '../dictionaries/requestErrorsMap'

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
        const response = await axios(params)

        const data = response.data ? response.data : {}

        return { success: true, data }
      } catch (error){
        const errorKey = error.response?.data?.message ? error.response.data.message : error.message

        const errorMessage = (errorKey in requestErrorsMap) 
          ? requestErrorsMap[errorKey] 
          : requestErrorsMap[requestErrorsMap.UNHANDLED_ERROR]

        return { success: false, error: errorMessage }
      }
    }
  }
}

export default RequestService()


// class RequestService {

//   async request({ url, method = 'GET', data = null }) {
//     try {
//       const params = { ...this.params }

//       if (method.toLowerCase() !== 'get') {
//         params.method = 'POST'
//         params.body = JSON.stringify(data)
//       }

//       if (setOnceToken) {
//         params.headers = { ...params.headers, 'Authorization': `Bearer ${setOnceToken}` }
//       }

//       const serverResponse = await fetch(this.baseUrl + url, params)
//       const [response, json] = await Promise.all([serverResponse, serverResponse.json()])

//       if (!response.ok) return errorHandler(response)

//       return json
//     } catch (error) {
//       alert(error.message)
//       return {}
//     }
//   }
// }

// export default new RequestService()

