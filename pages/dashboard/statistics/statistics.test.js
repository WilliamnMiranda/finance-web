const { render, screen, waitFor, getByAltText } = require('@testing-library/react')
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import '@testing-library/jest-dom'
import Statistics, { BodyCard } from './index'
import { ThemeProvider } from "styled-components";
import Theme from '../../../theme/config'
const objectData = {
  expenses: 500,
  deposits: 1000
}

const WrraperComponent = () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <BodyCard value={200} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

describe('test statistics', () => {
  it('must test if the input cards are displaying the values', async () => {
    WrraperComponent()

  })

})