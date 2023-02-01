import { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

interface IProps {
  children: ReactNode
}
export interface IModalContext {
  isOpen: boolean,
  setIsOpen: Dispatch<SetStateAction<boolean>>,
}

const initalValue = {
  isOpen: false,
  setIsOpen: () => { }
}
export const ModalContext = createContext<IModalContext>(initalValue)
export const ModalStorage = ({ children }: IProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  )
}