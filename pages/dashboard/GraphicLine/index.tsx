import React from 'react'
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLine } from 'victory';

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
  const [alterWidth, setAlterWidth] = React.useState(0)
  React.useEffect(() => {
    window.addEventListener("resize", () => setAlterWidth(window.innerWidth));
  }, [alterWidth])
  console.log(alterWidth)
  return (
    <VictoryChart
      domainPadding={{ x: 50 }}
      containerComponent={<VictoryContainer responsive={true} />}
      singleQuadrantDomainPadding={false}
      width={1600}
      height={500}
    >
      <VictoryGroup offset={30}
        colorScale={["red", "green"]}
        style={{
          data: {
            width: 30,
          }
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



