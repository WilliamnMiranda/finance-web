import React from 'react'
import usePercentage from '../../../hooks/usePercentage'
import { IGoal } from '../../../types/goal'
import * as C from './style'

interface IProps {
  goal: IGoal
}
function Goal({ goal }: IProps) {
  const formatValueMyGoal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(goal.wallet)
  const formatValueMyGoalTotal = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(goal.value)
  const { remainingPercentage } = usePercentage()
  const percentage = remainingPercentage(goal.wallet, goal.value)
  return (
    <C.Container>
      <C.ContainerNameGoal>
        <C.NameGoal> {goal.name} </C.NameGoal>
      </C.ContainerNameGoal>
      <C.ContainerInfos>
        <C.ContainerInfosProgressBar>
          <C.ContainerInfoProgress>
            <C.ContainerProgress>
              <C.Progress percentage={percentage} />
            </C.ContainerProgress>
            <C.ProcessPercentage>{percentage}%</C.ProcessPercentage>
          </C.ContainerInfoProgress>
          <C.ContainerNumbersOfGoals>
            <C.ContainerMyValueGoal>
              Ja tenho :  {formatValueMyGoal}
            </C.ContainerMyValueGoal>
            <C.ContainerMyGoalTotal>
              Total: {formatValueMyGoalTotal}
            </C.ContainerMyGoalTotal>
          </C.ContainerNumbersOfGoals>
        </C.ContainerInfosProgressBar>

        <C.ContainerButtons>
          <C.Button color={'#1a87dd'}> EDITAR </C.Button>
          <C.Button color={'#D9534F'}> EXCLUIR </C.Button>
        </C.ContainerButtons>
      </C.ContainerInfos>
    </C.Container>
  )
}

export default Goal