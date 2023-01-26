import React from 'react'
import { LabelHelpers, VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLine } from 'victory';

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
  const [width, setWidth] = React.useState(1200)
  React.useEffect(() => {
    if (alterWidth != 0) {
      if (alterWidth <= 1490)
        setWidth(900)
      if (alterWidth <= 1300)
        setWidth(700)
    }
  }, [alterWidth])

  React.useEffect(() => {
    window.addEventListener("resize", () => setAlterWidth(window.innerWidth));
  }, [])
  return (
    <VictoryChart
      domainPadding={{ x: 50 }}
      containerComponent={<VictoryContainer responsive={true} />}
      singleQuadrantDomainPadding={false}
      //1490 = 900 , 1380 = 700
      width={width}
      height={500}
    >
      <VictoryGroup offset={30}
        colorScale={["red", "green"]}
        style={{
          data: {
            width: 30,
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



