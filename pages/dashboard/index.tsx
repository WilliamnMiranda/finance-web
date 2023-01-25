import dayjs from 'dayjs'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import { IconsItem } from '../../helpers/typesGraphic'
import { Finance, IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'
import * as C from './styles'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import GraphicLine from './GraphicLine'
interface IDashboard {
  finances: IFinancesCurrentMonth,
  lastFinances: Finance[],
  financesOfTheLastSixMonths: [{
    month: number,
    sumItemsExpense: number,
    sumItemsDeposits: number,
  }]
}

const ItemTableLastTransactions = ({ finance, }: { finance: Finance }) => {
  const Icon = IconsItem[finance.category].icon
  const { type, category, value, created_at } = finance
  const formatedDate = dayjs(created_at).format("DD/MM/YYYY")
  const formatedValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  const formatedType = type === 'Expense' ? <AiOutlineArrowDown /> : <AiOutlineArrowUp />
  return (
    <C.ItemLastTransaction type={finance.type}>
      <C.ContainerType>
        <C.ContainerIcon>{Icon}</C.ContainerIcon>
        <div>{category}</div>
      </C.ContainerType>
      <C.ContainerDate>{formatedDate}</C.ContainerDate>
      <C.ContainerValue>{formatedValue}</C.ContainerValue>
      <C.ContainerIconType type={type}>{formatedType}</C.ContainerIconType>
    </C.ItemLastTransaction>
  )
}

function Dashboard({ finances, lastFinances, financesOfTheLastSixMonths }: IDashboard) {
  return (
    <Layout>
      <C.Container>
        <Statistics finances={finances} />
        <C.ContainerMain>
          <C.LastTransactions>
            <C.Tittle>Ultimas transações</C.Tittle>
            <C.ContainertemsLastTransactions>
              {lastFinances?.map((finance: Finance) => <ItemTableLastTransactions finance={finance} key={finance._id} />)}
            </C.ContainertemsLastTransactions>
          </C.LastTransactions>
          <div><GraphicLine financesOfTheLastSixMonths={financesOfTheLastSixMonths} /></div>
        </C.ContainerMain>
      </C.Container>
    </Layout>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = parseCookies(ctx)
  const apiClient = requestFromServer(ctx)
  const finances = await (
    await apiClient.get("/transaction/getbytype/currentmonth")
  ).data;
  const lastFinances = await (
    await apiClient.post("http://localhost:8081/transaction/last")
  ).data;
  const financesOfTheLastSixMonths = await (
    await apiClient.get("http://localhost:8081/aggregation/getByLastMonths")
  ).data;
  if (token)
    return {
      props: {
        finances: finances,
        lastFinances: lastFinances,
        financesOfTheLastSixMonths: financesOfTheLastSixMonths
      },
    }
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}