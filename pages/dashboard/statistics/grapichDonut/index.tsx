import React from 'react'
import { VictoryContainer, VictoryPie } from 'victory';
import * as C from './styles'
import { IconsItem } from '../../../../helpers/typesGraphic'
interface IGraphic {
  data: [{
    _id: string,
    count: number,
    soma: number
  }]
  isLoading: boolean
}

const Graphic = ({ data, isLoading }: IGraphic) => {
  const setColors = () => data.map(item => IconsItem[item._id].color)

  return (
    <C.ContainerVictoryPieDonut>
      {!isLoading &&
        <VictoryPie
          containerComponent={<VictoryContainer responsive={false} />}
          padding={0}
          colorScale={setColors()}
          width={140}
          height={140}
          data={data}
          x="_id"
          y="count"
          innerRadius={30}
          style={{
            labels: {
              display: 'none',
            },
          }}
        />}
    </C.ContainerVictoryPieDonut>
  )
}

export default Graphic