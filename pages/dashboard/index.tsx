import { GetServerSideProps } from 'next'
import nookies, { parseCookies, setCookie } from 'nookies'
import React from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import financesServices from '../../services/finances'
import { IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'
import * as C from './styles'
interface IDashboard {
  finances: IFinancesCurrentMonth
}

function Dashboard(ctx: IDashboard) {
  return (
    <Layout>
      <C.Container>
        <Statistics finances={ctx.finances} />
        <C.ContainerMain>
          <C.LastTransactions>
            <C.TableItemsLastTransactions>
              <tr>
                <th>Tipo</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Data</th>
              </tr>
            </C.TableItemsLastTransactions>
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
  if (token)
    return {
      props: {
        finances: finances
      }, // will be passed to the page component as props
    }
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}