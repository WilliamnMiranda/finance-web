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
      <Statistics />
    </Layout>
  )
}

export default Dashboard

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = parseCookies(ctx)
  const apiClient = requestFromServer(ctx)
  const finance = await (
    await apiClient.get("/transaction/getbytype/currentmonth")
  ).data;
  if (token)
    return {
      props: {
        finances: finance
      }, // will be passed to the page component as props
    }

  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}