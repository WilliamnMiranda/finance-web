import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import { IconsItem } from '../../helpers/typesGraphic'
import { Finance, IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'
import * as C from './styles'
IconsItem
interface IDashboard {
  finances: IFinancesCurrentMonth
  lastFinances: Finance[]
}

const ItemTableLastTransactions = ({ finance }: { finance: Finance }) => {
  const Icon = IconsItem[finance.category].icon
  const { type, category, value, created_at } = finance
  return (
    <C.ItemLastTransaction type={finance.type}>
      <C.ContainerType>
        <C.ContainerIcon>{Icon}</C.ContainerIcon>
        <div>{category}</div>
      </C.ContainerType>
      <div>{type}</div>
      <div>{value}</div>
      <div>{created_at}</div>
    </C.ItemLastTransaction>
  )
}

function Dashboard({ finances, lastFinances }: IDashboard) {
  return (
    <Layout>
      <C.Container>
        <Statistics finances={finances} />
        <C.ContainerMain>
          <C.LastTransactions>
            <C.ContainertemsLastTransactions>
              {lastFinances?.map((finance: Finance) => <ItemTableLastTransactions finance={finance} key={finance._id} />)}
            </C.ContainertemsLastTransactions>
          </C.LastTransactions>
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
  console.log(lastFinances.length)
  if (token)
    return {
      props: {
        finances: finances,
        lastFinances: lastFinances
      },
    }
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}