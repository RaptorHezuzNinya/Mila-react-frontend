import React from 'react'
import { connect } from 'react-redux'
import CreateNetworkListModal from './CreateNetworkListModal'
import OnboardingDeskModal from './OnboardingDeskModal'
import TestModal from './TestModal'

const MODAL_COMPONENTS = {
  'CREATE_NETWORKLIST_MODAL': CreateNetworkListModal,
  'ONBOARDING_DESK_MODAL': OnboardingDeskModal,
  'TEST_MODAL': TestModal,
  // other modals
}

const ModalRoot = ({ modalType, modalProps }) => {

  if (!modalType) {
    return null
  }
  const SpecificModal = MODAL_COMPONENTS[modalType]

  return <SpecificModal { ...modalProps } />
}

const mapStateToProps = (state) => (state.modal)

export default connect(mapStateToProps)(ModalRoot)
