import { GetServerSideProps } from 'next'
import nookies, { parseCookies, setCookie } from 'nookies'
import React from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import financesServices from '../../services/finances'
import { IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'

interface IDashboard {
  finances: IFinancesCurrentMonth
}
function Dashboard(ctx: IDashboard) {

  return (
    <Layout>
      <Statistics finances={ctx.finances} />
    </Layout>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = parseCookies(ctx)
  const month = new Date().getMonth() + 1
  const year = new Date().getFullYear()
  const apiClient = requestFromServer(ctx)
  const finances = await (
    await apiClient.get("/transaction/getbytype/currentmonth")
  ).data;
  const typesOfCharts = await apiClient.get('/aggregation/getbytype', {
    params: { month, year },
  })
  console.log(typesOfCharts.data)
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