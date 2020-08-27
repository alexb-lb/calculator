import React from 'react'

import '@testing-library/jest-dom'
import { render, fireEvent, cleanup } from '@testing-library/react'
import { act } from 'react-dom/test-utils'

import App from '../app'
import requestService from '../services/requestService'
import requestErrorsMap from '../dictionaries/requestErrorsMap'

jest.mock('../services/requestService')

afterEach(() => {
  cleanup()
  jest.resetAllMocks()
})

describe('Test App', () => {

  test('Should render App in root node', () => {
    const { getByText, queryByText, getByRole } = render(<App />)

    expect(getByText(/Supports numbers/)).toBeInTheDocument()
    expect(getByRole('textbox')).toBeInTheDocument()
    expect(getByRole('button')).toBeInTheDocument()
    expect(queryByText(/Error occurs/)).not.toBeInTheDocument()
  })

  test('Should change text value after user input', () => {
    const { getByRole } = render(<App />)
    const input = getByRole('textbox')
    const value = '23 + 4' 

    fireEvent.change(input, { target: { value } })
    expect(input.value).toBe(value)
  })

  test('Should show answer after "calculate" button clicked', async () => {
    const value = '0.1 + 0.2' 
    const sum = '0.3'
    const promise = Promise.resolve({ success: true, data: { result: sum } })
    requestService.request.mockImplementationOnce(() => promise)
    
    const { getByRole, queryByText } = render(<App />)

    const input = getByRole('textbox')
    const submit = getByRole('button')
    
    await fireEvent.change(input, { target: { value } })
    await act(async () => await fireEvent.click(submit))

    const error = queryByText(/Error occurs/)
    const result = queryByText('=' + sum)

    expect(requestService.request).toHaveBeenCalledTimes(1)

    expect(result).toBeInTheDocument()
    expect(error).not.toBeInTheDocument()
    expect(input.value).toBe(value)
  })

  test('Should show error on bad user input', async () => {
    const promise = Promise.resolve({ success: false, error: requestErrorsMap.INVALID_DATA })
    requestService.request.mockImplementationOnce(() => promise)
    
    const { getByRole, queryByText } = render(<App />)

    const input = getByRole('textbox')
    const submit = getByRole('button')
        
    await act(async () => await fireEvent.click(submit))

    const error = queryByText(/Error occurs/)
    const result = queryByText(/=/)

    expect(requestService.request).toHaveBeenCalledTimes(1)

    expect(result).not.toBeInTheDocument()
    expect(error).toBeInTheDocument()
    expect(input.value).toBe('')
  })
})
