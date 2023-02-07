import React from 'react'
import * as C from './style'
function Goal() {
  return (
    <C.Container>
      <C.NameGoal> Comprar carro Novo</C.NameGoal>
      <C.ContainerInfosProgressBar>
        <C.ContainerProgress>
          <C.Progress />
        </C.ContainerProgress>
        <C.ProcessPercentage> 78% </C.ProcessPercentage>
      </C.ContainerInfosProgressBar>

      <C.ContainerButtons>
        <C.Button> </C.Button>
        <C.Button> </C.Button>
      </C.ContainerButtons>
    </C.Container>
  )
}

export default Goal