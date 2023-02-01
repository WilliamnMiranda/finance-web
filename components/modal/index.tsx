import React, { useContext, ReactNode } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import * as C from './style'
import Create from './create'
function Modal() {
  const { modal } = useContext(ModalContext)
  const renderComponentModal: { [key: string]: any } = {
    create: <Create />
  }
  return (
    <>
      {modal.isOpen && modal.type !== null && (
        <C.ContainerModal>
          {
            modal.type !== null && renderComponentModal[modal.type]
          }
        </C.ContainerModal>
      )}
    </>
  )
}

export default Modal