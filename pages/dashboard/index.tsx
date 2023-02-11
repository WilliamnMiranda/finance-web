import dayjs from 'dayjs'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import React, { useContext } from 'react'
import Layout from '../../components/layout'
import requestFromServer from '../../helpers/apiServer'
import { IconsItem } from '../../helpers/typesGraphic'
import { Finance, IFinancesCurrentMonth } from '../../types/finances'
import Statistics from './statistics'
import * as C from './styles'
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import GraphicLine from './GraphicLine'
import { ModalContext } from '../../contexts/ModalContext'
import { useQuery } from '@tanstack/react-query'
import financesServices from '../../services/finances'
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
      <C.ContainerTypeAndDate>
        <C.ContainerTypeAndIcon>
          <C.ContainerIcon>{Icon}</C.ContainerIcon>
          <div>{category}</div>
        </C.ContainerTypeAndIcon>
        <C.ContainerDate>{formatedDate}</C.ContainerDate>
      </C.ContainerTypeAndDate>
      <C.ContainerInfoTransaction>
        <C.ContainerValue>{formatedValue}</C.ContainerValue>
        <C.ContainerIconType type={type}>{formatedType}</C.ContainerIconType>
      </C.ContainerInfoTransaction>
    </C.ItemLastTransaction>
  )
}

function Dashboard({ finances, lastFinances, financesOfTheLastSixMonths }: IDashboard) {
  const { setTypeModal } = useContext(ModalContext)
  const { data: dataFinances } = useQuery({
    queryKey: ['finances'],
    queryFn: financesServices.getByTypeAndCurrentMonth,
    initialData: finances,
  })
  const { data: dataLastFinances } = useQuery({
    queryKey: ['dataLastFinances'],
    queryFn: financesServices.lastFinances,
    initialData: lastFinances,
  })

  const { data: dataFinancesOfTheLastSixMonths } = useQuery({
    queryKey: ['dataFinancesOfTheLastSixMonths'],
    queryFn: financesServices.getByLastMonths,
    initialData: financesOfTheLastSixMonths,
  })
  return (
    <Layout>
      <C.Container>
        <Statistics finances={dataFinances} />
        <C.ContainerMain>
          <C.LastTransactions>
            <C.ContainerTittle>
              <C.Tittle>Ultimas transações</C.Tittle>
              <C.ButtonAddTransaction onClick={() => setTypeModal('createFinance', 'open')}> Adicionar </C.ButtonAddTransaction>
            </C.ContainerTittle>
            <C.ContainertemsLastTransactions>
              {dataLastFinances?.map((finance: Finance) => <ItemTableLastTransactions finance={finance} key={finance._id} />)}
            </C.ContainertemsLastTransactions>
          </C.LastTransactions>
          <C.ContainerGraphicLine>
            <C.Tittle>Suas transaçoes nos ultimos meses</C.Tittle>
            <GraphicLine financesOfTheLastSixMonths={dataFinancesOfTheLastSixMonths} />
          </C.ContainerGraphicLine>
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
    await apiClient.post("/transaction/last")
  ).data;
  const financesOfTheLastSixMonths = await (
    await apiClient.get("/aggregation/getByLastMonths")
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