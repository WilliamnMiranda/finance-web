import { ReactNode } from "react"
import Image from 'next/image'
import * as C from './styles'
import Link from 'next/link'
interface IProps {
  children: ReactNode
}
const NavBar = () => {
  return (
    <C.Aside>
      <C.ContainerInfomartionUser>
        <C.Avatar>  </C.Avatar>
        <C.Name> William </C.Name>
      </C.ContainerInfomartionUser>
      <C.Navigation>
        <C.ListNavigation>
          <C.Item>
            <Link href="/notifications">  Dashboard </Link>
          </C.Item>
          <C.Item>
            <Link href="/notifications"> Transações </Link>
          </C.Item>
          <C.Item>
            <Link href="/notifications"> Notificações </Link>
          </C.Item>
          <C.Item>
            <Link href="/notifications"> Settings </Link>
          </C.Item>
          <C.Item>
            <Link href="/notifications"> Metas </Link>
          </C.Item>
        </C.ListNavigation>
      </C.Navigation>
    </C.Aside>
  )
}

const Layout = ({ children }: IProps) => {
  return (
    <C.Container>
      <NavBar />
      <C.Children> {children} </C.Children>
    </C.Container>
  )
}
export default Layout

