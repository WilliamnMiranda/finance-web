import React from 'react'
import { VictoryBar, VictoryChart, VictoryContainer, VictoryGroup, VictoryLine } from 'victory';
function GraphicLine() {
  return (
    <VictoryChart domainPadding={{ x: 100 }} containerComponent={<VictoryContainer responsive={false} />}
      width={940}
      height={540}>
      <VictoryGroup offset={5660}
        colorScale={"qualitative"}
      >
        <VictoryBar
          categories={{
            x: ["cats", "dogs", "fish", "frogs"]
          }}
          data={[
            { x: "cats", y: 1 },
            { x: "dogs", y: 2 },
            { x: "fish", y: 5 },
            { x: "frogs", y: 6 }
          ]}
        />
      </VictoryGroup>
    </VictoryChart >
  )
}

export default GraphicLine