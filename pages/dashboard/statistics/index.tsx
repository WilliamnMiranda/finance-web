import React from 'react'
import { GetServerSideProps } from "next";
import * as C from './styles'

interface IHeaderCard {
  name: string
}
interface IBodyCard {
  value: number
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
      <C.ValueMonth>$ {value} </C.ValueMonth>
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

export default function Statistics() {
  return (
    <C.Container>
      <C.MonthStatistics>
        <h2>Month Statistics</h2>
        <p>Tue, 14 Nov, 2022, 11.30 AM </p>
      </C.MonthStatistics>
      <C.Incomes>
        <HeaderCard name="Income" />
        <BodyCard value={2324324.75} />
        <FooterCard value={2323.70} />
      </C.Incomes>
      <C.Expences>
        <HeaderCard name="Expenses" />
        <BodyCard value={2324324.75} />
        <FooterCard value={2323.70} />
      </C.Expences>
      <C.Graphic>
        <HeaderCard name="Graphic" />
      </C.Graphic>
    </C.Container>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {}, // will be passed to the page component as props
  }
}
