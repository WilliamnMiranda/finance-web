import React from 'react'
import { useQuery } from '@tanstack/react-query';
import financesServices from '../../../../services/finances';
import { VictoryContainer, VictoryPie } from 'victory';
import * as C from './styles'
function Graphic() {
  const { isLoading, error, data } = useQuery({ queryKey: ['typeOfChartsItems'], queryFn: financesServices.getChartByType })
  console.log(data)
  return (
    <C.ContainerVictoryPieDonut>
      {!isLoading &&
        <VictoryPie
          containerComponent={<VictoryContainer responsive={false} />}
          padding={0}
          colorScale={["tomato", "orange", "gold", "cyan", "navy"]}
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