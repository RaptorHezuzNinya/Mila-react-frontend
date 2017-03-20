import React from 'react'
import { connect } from 'react-redux'
import createNetworkListModal from './createNetworkListModal'

const MODAL_COMPONENTS = {
  'CREATE_NETWORKLIST_MODAL': createNetworkListModal,
  // other modals
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal { ...modalProps } />
}

const mapStateToProps = ({ state }) => ( state.modal )

export default connect( mapStateToProps )(ModalRoot)
