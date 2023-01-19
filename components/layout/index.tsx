import { ReactNode, useContext } from "react"
import * as C from './styles'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { MobileContext } from "../../contexts/MobileContext";

interface IProps {
  children: ReactNode
}
const NavBar = () => {
  const { isOpen, setIsOpen } = useContext(MobileContext)
  console.log(isOpen)
  return (
    <C.Aside>
      <C.MenuMobile> <GiHamburgerMenu onClick={() => setIsOpen(true)} /></C.MenuMobile>
      <C.ContainerMenu isOpen={isOpen}>
        <C.MenuMobileClose> <AiOutlineClose onClick={() => setIsOpen(false)} /></C.MenuMobileClose>
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
      </C.ContainerMenu>
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

