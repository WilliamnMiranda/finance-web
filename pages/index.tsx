import Statistics from "../components/home/statistics/statistcs";
import Dashboard from "../components/home/dashboard/dashboard";
import * as C from './styles'
import Layout from "../components/layout";
import nookies, { parseCookies } from 'nookies'
import { GetServerSideProps } from "next";
import { setCookie } from 'nookies'
import Modal from "../components/modal";
export default function Home() {
  return (
    <Layout>
      <C.Container>
        <Dashboard />
      </C.Container>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    redirect: {
      destination: '/dashboard',
      permanent: false
    }
  }
}