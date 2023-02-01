import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import * as C from './style'
function Modal() {
  const { isOpen, setIsOpen } = useContext(ModalContext)
  return (
    <>
      {isOpen && (
        <C.ContainerModal></C.ContainerModal>
      )}
    </>
  )
}

export default Modal