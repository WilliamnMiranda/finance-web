import Statistics from "../components/home/statistics/statistcs";
import Dashboard from "../components/home/dashboard/dashboard";
import * as C from './styles'
import Layout from "../components/layout";
import { GetServerSideProps } from "next";
import { parseCookies } from 'nookies'
export default function Home() {
  return (
    <Layout>
      <C.Container>
        <Statistics />
        <Dashboard />
      </C.Container>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance']: token } = parseCookies(ctx)
  if (!token)
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  return {
    props: {}, // will be passed to the page component as props
  }
}