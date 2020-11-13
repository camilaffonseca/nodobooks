import styled from 'styled-components'
import PropTypes from 'prop-types'

const ModalComponent = ({ children }) => (
  <ModalContainer>
    <Modal>{children}</Modal>
  </ModalContainer>
)

const Modal = styled.div`
  background: ${({ theme }) => theme?.colors?.defaults?.white};
  border-radius: ${({ theme }) => theme?.radii[4]}px;
  padding: 3rem;
  width: 90vw;
  max-width: 750px;
  min-height: 498px;
`

const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.88);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
`

ModalComponent.propTypes = {
  children: PropTypes.node
}

ModalComponent.defaultProps = {
  children: ''
}

export default ModalComponent
