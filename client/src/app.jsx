import React, { useState } from 'react'
import requestService from './services/requestService'

import './styles/app.scss'

const App = () => {
  const [inputStr, setValue] = useState('')
  const [errorMessage, setError] = useState('')
  const [isLoading, setLoading] = useState(false)
  const [result, setResult] = useState(null)

  const handleInputChange = (e) => setValue(e.target.value)

  const handleSubmit = async () => {
    try {
      if (isLoading) return

      setError(false)
      setLoading(true)

      const requestData = { url: '/calculate/base-operations', method: 'POST', data: { input: inputStr } }
      const { success, data, error } = await requestService.request(requestData)

      if (!success) throw error

      setResult(data.result)
    } catch (error) {
      setError(error)
      setValue('')
      setResult(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="container">
      <div className="title">Supports numbers and +-*/ operations</div>
      <div className="form">
        <input
          className="input"
          type={'text'}
          role={'textbox'}
          placeholder={'type to calculate..'}
          onChange={handleInputChange}
          value={inputStr}
          readOnly={isLoading}
        />
        {(result !== null) && <div className="result">={result}</div>}
      </div>
      {errorMessage && <div className="error">Error occurs: {errorMessage}</div>}
      <button 
        className="submit" 
        role={'button'}
        onClick={handleSubmit}>
        calculate!
      </button>
    </main>
  )
}

export default App
