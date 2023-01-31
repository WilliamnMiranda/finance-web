const { render, screen, waitFor, getByAltText, getByText } = require('@testing-library/react')
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import * as reactQuery from '@tanstack/react-query'
import '@testing-library/jest-dom'
import Statistics from './index'
import { IconsItem } from '../../../helpers/typesGraphic'
import { ThemeProvider } from "styled-components";
import Theme from '../../../theme/config'
const objectData = {
  expenses: 500,
  deposits: 1000
}

const spyOnQueryGraphic = jest.spyOn(reactQuery, 'useQuery')
const WrraperComponent = () => {
  const queryClient = new QueryClient()
  render(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={Theme}>
        <Statistics finances={objectData} />
      </ThemeProvider>
    </QueryClientProvider>
  )
}

describe('test statistics', () => {
  it('must check if cards are showing', async () => {
    WrraperComponent()
    const expenses = screen.getByText('Saidas')
    const Graphic = screen.getByText('Graphic')
    const deposits = screen.getByText('Entradas')
    expect(expenses).toBeInTheDocument()
    expect(Graphic).toBeInTheDocument()
    expect(deposits).toBeInTheDocument()
  })

  it('check if the values ​​are being formatted', async () => {
    WrraperComponent()
    const expensesFormated = screen.getByText(`R$ 500,00`)
    const depositFormated = screen.getByText(`R$ 1.000,00`)
    expect(expensesFormated).toBeInTheDocument()
    expect(depositFormated).toBeInTheDocument()
  })

  it('check if the graph and its items are visible', async () => {
    spyOnQueryGraphic.mockReturnValue({
      data: [
        {
          _id: 'Estudos',
          count: 200,
          soma: 500,
        }
      ],
      error: false,
      isLoading: false,
    })
    WrraperComponent()
    const item = screen.getAllByText('Estudos')
    const graphic = screen.getByTestId('graphic')
    expect(item[1]).toBeInTheDocument()
    expect(graphic).toBeInTheDocument()
  })
})