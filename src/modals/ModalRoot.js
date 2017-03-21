import React from 'react'
import { connect } from 'react-redux'
import CreateNetworkListModal from './CreateNetworkListModal'

const MODAL_COMPONENTS = {
  'CREATE_NETWORKLIST_MODAL': CreateNetworkListModal,
  // other modals
}

const ModalRoot = ({ modalType, modalProps }) => {
  console.log('zitten voor IF in ROOT')

  if (!modalType) {
    return null
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal { ...modalProps } />
}

const mapStateToProps = (state) => (state.modal)

export default connect(mapStateToProps)(ModalRoot)
