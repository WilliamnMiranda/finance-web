import React from 'react'
import { LabelHelpers, VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLine } from 'victory';
import { useWidthGraphic } from '../../../hooks/useWidthGraphic';

interface IGrapichLine {
  financesOfTheLastSixMonths: [{
    month: number,
    sumItemsExpense: number,
    sumItemsDeposits: number,
  }]
}
function GraphicLine({ financesOfTheLastSixMonths }: IGrapichLine) {
  const keys = financesOfTheLastSixMonths.map(item => item.month.toString()).reverse()

  const expenses = financesOfTheLastSixMonths.map((item) => {
    return {
      x: item.month.toString(),
      y: item.sumItemsExpense
    }
  })

  const deposits = financesOfTheLastSixMonths.map((item) => {
    return {
      x: item.month.toString(),
      y: item.sumItemsDeposits
    }
  })
  const { width, offSet } = useWidthGraphic()
  return (
    <VictoryChart
      domainPadding={{ x: 30 }}
      containerComponent={<VictoryContainer responsive={true} />}
      singleQuadrantDomainPadding={false}
      width={width}
      height={500}
    >
      <VictoryGroup offset={offSet}
        colorScale={["red", "green"]}
        style={{
          data: {
            width: offSet,
          },
        }}
      >
        <VictoryBar
          categories={{ x: keys }}
          data={expenses}
        />
        <VictoryBar
          categories={{ x: keys }}
          data={deposits}
        />
      </VictoryGroup>
    </VictoryChart >
  )
}

export default GraphicLine



