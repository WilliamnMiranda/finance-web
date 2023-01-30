import React from 'react'
import * as C from './styles'
import { IFinancesCurrentMonth } from '../../../types/finances';
import Graphic from './grapichDonut';
import financesServices from '../../../services/finances';
import { useQuery } from '@tanstack/react-query';
import { IconsItem } from '../../../helpers/typesGraphic';
interface IHeaderCard {
  name: string
}
interface IBodyCard {
  value: number,
}

interface IStatistics {
  finances: IFinancesCurrentMonth
}

interface IItemGraphic {
  count: number,
  soma: number,
  _id: string
}
const HeaderCard = ({ name }: IHeaderCard) => {
  return (
    <C.TittleCard>
      <h2>{name}</h2>
      <p> Mês </p>
    </C.TittleCard>
  )
}

export const BodyCard = ({ value }: IBodyCard) => {
  const formatValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
  return (
    <C.ContainerBody data-testid="value">
      <C.ValueMonth >
        {formatValue}
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
      <p>Mês passado</p>
      <span>${value}</span>
    </C.FooterCard>
  )
}


const ItemListGraphic = ({ item }: { item: IItemGraphic }) => {
  const colorItem = IconsItem[item._id].color
  const formatValue = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(item.soma)
  return <C.ContainerItemGraphic>
    <C.ColorAndNameItemGraphic>
      <C.ColorItem color={colorItem} />
      {item._id}
    </C.ColorAndNameItemGraphic>
    <C.ValueItemGraphic>
      {formatValue}
    </C.ValueItemGraphic>
  </C.ContainerItemGraphic>
}
export default function Statistics({ finances }: IStatistics) {
  const { expenses, deposits } = finances
  const { isLoading, error, data } = useQuery({ queryKey: ['typeOfChartsItems'], queryFn: financesServices.getChartByType })
  return (
    <C.Container>
      <C.MonthStatistics>
        <h2>Estatísticas do mês</h2>
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
        <Graphic isLoading={isLoading} data={data} />
        <C.ContainerItemsGraphic>
          {
            data?.map((item: IItemGraphic) => {
              return (
                <div key={item._id}>
                  <ItemListGraphic item={item} />
                </div>
              )
            })
          }
        </C.ContainerItemsGraphic>
      </C.Graphic>
    </C.Container>
  )
}

