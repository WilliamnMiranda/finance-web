import React, { useContext } from 'react'
import { ModalContext } from '../../contexts/ModalContext'
import * as C from './style'
import Create from './create'
import { AiFillCloseCircle } from 'react-icons/ai'
import CreateGoal from './create_goal'
function Modal() {
  const { modal } = useContext(ModalContext)
  const renderComponentModal: { [key: string]: any } = {
    createFinance: <Create />,
    createGoal: <CreateGoal />
  }
  const { setTypeModal } = useContext(ModalContext)
  return (
    <>
      {modal.isOpen && modal.type !== null && (
        <C.ContainerModal>
          <C.Modal>
            <C.HeaderContainer> <AiFillCloseCircle onClick={() => setTypeModal(null, 'close')} /> </C.HeaderContainer>
            {
              modal.type !== null && renderComponentModal[modal.type]
            }
          </C.Modal>
        </C.ContainerModal>
      )}
    </>
  )
}

export default Modal