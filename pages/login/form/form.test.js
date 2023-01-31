const { render, screen, fireEvent, waitFor } = require('@testing-library/react')
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import * as reactquery from '@tanstack/react-query'
import '@testing-library/jest-dom'
import Form from './index'
import { ThemeProvider } from "styled-components";
import Theme from '../../../theme/config'
import { act } from 'react-dom/test-utils';

const mockUseRouter = jest.fn()
const mockMutation = jest.fn(() => {
  return Promise.resolve()
})

jest.mock('next/router', () => ({
  ...jest.requireActual('next/router'),
  useRouter: () => mockUseRouter
}))

const mutation = jest.spyOn(reactquery, "useMutation")

const mockLogin = jest.fn();


const WrraperComponent = () => {
  const queryClient = new QueryClient(
    {
      defaultOptions: {
        queries: {
          retry: false
        }
      }
    }
  )
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Form onSubmit={mockLogin} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

describe('test form', () => {
  const data = {
    email: 'williamnnmiranda@gmail.com',
    password: '123'
  }
  beforeEach(() => {
    mutation.mockReturnValue({
      mutate: mockMutation
    });
  });
  it('check if the form function is being called', async () => {
    WrraperComponent()
    const buttonLogin = screen.getByText('Login')
    await act(async () => {
      fireEvent.input(screen.getByPlaceholderText("Digite seu email"), {
        target: {
          value: "williamnnmiranda@gmail.com"
        }
      });

      fireEvent.input(screen.getByPlaceholderText("Digite sua senha"), {
        target: {
          value: "123"
        }
      });
    })

    await act(async () => fireEvent.click(buttonLogin))
    expect(mockMutation).toHaveBeenCalledWith(data)
  })
})