import React from 'react'
import * as C from './styles'
import { IFinancesCurrentMonth } from '../../../types/finances';
import Graphic from './grapichDonut';
interface IHeaderCard {
  name: string
}
interface IBodyCard {
  value: number,
}

interface IStatistics {
  finances: IFinancesCurrentMonth
}
const HeaderCard = ({ name }: IHeaderCard) => {
  return (
    <C.TittleCard>
      <h2>{name}</h2>
      <p> Month </p>
    </C.TittleCard>
  )
}

const BodyCard = ({ value }: IBodyCard) => {
  return (
    <C.ContainerBody>
      <C.ValueMonth>
        ${value}
      </C.ValueMonth>
      <C.ComparedToLastMonth>
        2.5%
      </C.ComparedToLastMonth>
    </C.ContainerBody>
  )
}

const FooterCard = ({ value }: { value: number }) => {
  return (
    <C.FooterCard>
      <p>Last week expenses</p>
      <span>${value}</span>
    </C.FooterCard>
  )
}

export default function Statistics({ finances }: IStatistics) {
  const { expenses, deposits } = finances
  return (
    <C.Container>
      <C.MonthStatistics>
        <h2>Month Statistics</h2>
        <p>Tue, 14 Nov, 2022, 11.30 AM </p>
      </C.MonthStatistics>
      <C.Incomes>
        <HeaderCard name="Entradas" />
        <BodyCard value={deposits} />
        <FooterCard value={2323.70} />
      </C.Incomes>
      <C.Expences>
        <HeaderCard name="Saidas" />
        <BodyCard value={expenses} />
        <FooterCard value={2323.70} />
      </C.Expences>
      <C.Graphic>
        <HeaderCard name="Graphic" />
        <Graphic />
      </C.Graphic>
    </C.Container>
  )
}

