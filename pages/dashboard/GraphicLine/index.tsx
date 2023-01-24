import React from 'react'
import { VictoryChart, VictoryContainer, VictoryLine } from 'victory';
function GraphicLine() {
  return (
    <VictoryChart
      containerComponent={<VictoryContainer responsive={false} />}
    >
      <VictoryLine
        interpolation="natural"
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc" }
        }}
      />
    </VictoryChart>
  )
}

export default GraphicLine