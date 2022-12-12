import { ReactNode } from "react"
import * as C from './styles'
interface IProps {
  children: ReactNode
}
export default function Layout({ children }: IProps) {
  return (
    <C.Container>
      project
    </C.Container>
  )
}
