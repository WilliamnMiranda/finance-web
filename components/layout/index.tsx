import { ReactNode, useContext, useEffect, useState } from "react"
import * as C from './styles'
import Link from 'next/link'
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from "react-icons/ai";
import { MobileContext } from "../../contexts/MobileContext";
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp, BsPiggyBank } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { AiOutlineSetting } from 'react-icons/ai'
import Router from "next/router";
import Modal from "../modal";
interface IProps {
  children: ReactNode
}
const NavBar = () => {
  const { isOpen, setIsOpen } = useContext(MobileContext)
  return (
    <C.Aside>
      <C.MenuMobile>
        {isOpen ? <AiOutlineClose onClick={() => setIsOpen(false)} /> : <GiHamburgerMenu onClick={() => setIsOpen(true)} />}
      </C.MenuMobile>
      <C.ContainerMenu isOpen={isOpen}>
        <C.ContainerInfomartionUser>
          <C.Avatar>  </C.Avatar>
          <C.Name> William </C.Name>
        </C.ContainerInfomartionUser>
        <C.Navigation>
          <C.ListNavigation>
            <C.Item>
              <RxDashboard />
              <Link href="/notifications">  Dashboard </Link>
            </C.Item>
            <C.Item>
              <BsArrowDownUp />
              <Link href="/notifications"> Transações </Link>
            </C.Item>
            <C.Item>
              <RiNotification3Line />
              <Link href="/notifications"> Notificações </Link>
            </C.Item>
            <C.Item>
              <AiOutlineSetting />
              <Link href="/notifications"> Opções </Link>
            </C.Item>
            <C.Item>
              <BsPiggyBank />
              <Link href="/notifications"> Metas </Link>
            </C.Item>
          </C.ListNavigation>
          <C.ButtonLogout> Sair </C.ButtonLogout>
        </C.Navigation>
      </C.ContainerMenu>
    </C.Aside>
  )
}
const Layout = ({ children }: IProps) => {
  return (
    <C.Container>
      <Modal />
      <NavBar />
      <C.Children> {children} </C.Children>
    </C.Container>

  )
}
export default Layout

