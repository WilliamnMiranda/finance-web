import React from 'react'
import Layout from '../../components/layout'
import Goal from './goal'
import * as C from './style'
function index() {
  return (
    <Layout>
      <C.Container>
        <C.Goals>
          <C.HeaderGoal> Seus Metas </C.HeaderGoal>
          <C.ContainerGoals>
            <Goal />
          </C.ContainerGoals>
        </C.Goals>
        <C.GoalsGroup>
          <C.HeaderGoal> Suas metas Compartilhadas </C.HeaderGoal>
          <C.ContainerGoals>

          </C.ContainerGoals>
        </C.GoalsGroup>
      </C.Container>
    </Layout>
  )
}

export default index