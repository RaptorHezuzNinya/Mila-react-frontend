import createNetworkListModal from './'



const MODAL_COMPONENTS = {
  'CREATE_NETWORKLIST': createNetworkListModal,
  // other modals
}

const ModalRoot = ({ modalType, modalProps }) => {
  if (!modalType) {
    return null
  }

  const SpecificModal = MODAL_COMPONENTS[modalType]
  return <SpecificModal { ...modalProps } />
}

export default connect( state => state.modal )(ModalRoot)
