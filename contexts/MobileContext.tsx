import React, { createContext, ReactNode, useState, SetStateAction } from "react";
import { boolean } from "yup/lib/locale";
interface IProps {
  children: ReactNode
}
export interface IMobileContext {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
}

const initalValue = {
  isOpen: false,
  setIsOpen: () => { }
}
export const MobileContext = React.createContext<IMobileContext>(initalValue)
export const StorageMobileContext = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <MobileContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileContext.Provider>
  )
}