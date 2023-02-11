import { createContext, ReactNode, useState, SetStateAction, Dispatch } from "react";

interface IProps {
  children: ReactNode
}

type modalTypes = null | 'createFinance' | 'createGoal'
type modalAction = 'open' | 'close'

export interface IModal {
  isOpen: boolean,
  type: modalTypes
}


export interface IModalContext {
  modal: IModal,
  setModal: Dispatch<SetStateAction<IModal>>,
  setTypeModal: (type: modalTypes, action: modalAction) => void
}

const initalValue = {
  modal: {
    isOpen: false,
    type: null
  },
  setModal: () => { },
  setTypeModal: () => { }
}

export const ModalContext = createContext<IModalContext>(initalValue)
export const ModalStorage = ({ children }: IProps) => {
  const [modal, setModal] = useState<IModal>({
    isOpen: true,
    type: null,
  })
  const setTypeModal = (type: modalTypes, action: modalAction) => {
    setModal({
      type: type,
      isOpen: action === 'open' ? true : false
    })
  }
  return (
    <ModalContext.Provider value={{ modal, setModal, setTypeModal }}>
      {children}
    </ModalContext.Provider>
  )
}