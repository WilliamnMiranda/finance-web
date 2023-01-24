import { GetServerSideProps } from 'next'
import nookies, { parseCookies, setCookie } from 'nookies'
import React from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import { Finance, IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'
import * as C from './styles'
interface IDashboard {
  finances: IFinancesCurrentMonth
  lastFinances: Finance[]
}

const ItemTableLastTransactions = ({ finance }: { finance: Finance }) => {
  return (
    <C.ItemLastTransaction type={finance.type}>
      <div>{finance.type}</div>
      <div>{finance.category}</div>
      <div>{finance.value}</div>
      <div>{finance.installments.quantity}</div>
      <div>{finance.created_at}</div>
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