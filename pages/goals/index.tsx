import { useQuery } from '@tanstack/react-query'
import { GetServerSideProps, GetStaticProps } from 'next'
import { parseCookies } from 'nookies'
import React, { useContext } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import Layout from '../../components/layout'
import { ModalContext } from '../../contexts/ModalContext'
import requestFromServer from '../../helpers/apiServer'
import goalServices from '../../services/goals'
import { IGoal } from '../../types/goal'
import Goal from './goal'
import * as C from './style'

interface IProps {
  goals: IGoal
}
function Goals({ goals }: IProps) {
  const { data: dataGoals } = useQuery({
    queryKey: ['goals'],
    queryFn: goalServices.getAll,
    initialData: goals,
  })
  const { setTypeModal } = useContext(ModalContext)
  return (
    <Layout>
      <C.Container>
        <C.Goals>
          <C.HeaderGoal>
            Seus Metas
            <AiFillPlusCircle onClick={() => setTypeModal('createGoal', 'open')} />
          </C.HeaderGoal>
          <C.ContainerGoals>
            {
              dataGoals?.map((goal: IGoal) => <Goal key={goal._id} goal={goal} />)
            }
          </C.ContainerGoals>
        </C.Goals>
        <C.GoalsGroup>
          <C.HeaderGoal>
            Suas metas Compartilhadas
            <AiFillPlusCircle />
          </C.HeaderGoal>
          <C.ContainerGoals>

          </C.ContainerGoals>
        </C.GoalsGroup>
      </C.Container>
    </Layout>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { ['finance.token']: token } = parseCookies(ctx)
  const apiClient = requestFromServer(ctx)
  const goals = await (
    await apiClient.get("/goal")
  ).data;
  console.log(goals)
  if (token)
    return {
      props: {
        finances: goals,
      },
    }
  return {
    redirect: {
      destination: '/login',
      permanent: false
    }
  }
}
export default Goals