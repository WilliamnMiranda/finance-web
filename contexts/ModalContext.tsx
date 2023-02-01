import { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

interface IProps {
  children: ReactNode
}

type modalTypes = null | 'create' | 'update'


export interface IModal {
  isOpen: boolean,
  type: modalTypes
}


export interface IModalContext {
  modal: IModal,
  setModal: Dispatch<SetStateAction<IModal>>,
}

const initalValue = {
  modal: {
    isOpen: false,
    type: null
  },
  setModal: () => { },
}

export const ModalContext = createContext<IModalContext>(initalValue)
export const ModalStorage = ({ children }: IProps) => {
  const [modal, setModal] = useState<IModal>({
    isOpen: true,
    type: null,
  })
  const type = null
  return (
    <ModalContext.Provider value={{ modal, setModal }}>
      {children}
    </ModalContext.Provider>
  )
}