import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Text from 'components/Text'
import Image from 'components/Image'

import liBall from 'images/li-ball.png'

import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT, TRANSITION_TIME } from 'helpers/constants'

const NavbarComponent = ({ navbarData, currentCategoryId, setCurrentCategoryId, customStyle, toggleNavbarOpen }) => (
  <Navbar toggleNavbarOpen={toggleNavbarOpen} customStyle={customStyle}>
    <ul>
      {(navbarData?.rows).map(item => (
        <Li key={item?.id}>
          <StyledImage currentCategoryId={currentCategoryId} itemId={item?.id} src={liBall} alt='Li Ball Image' />
          <StyledText
            currentCategoryId={currentCategoryId}
            itemId={item?.id}
            variant='regular'
            color='grays.A500'
            onClick={() => setCurrentCategoryId(item?.id)}
          >
            {item?.name}
          </StyledText>
        </Li>
      ))}
    </ul>
  </Navbar>
)

const Navbar = styled.nav`
  @keyframes inAnimation {
    0% {
      transform: translateX(-100%);
      opacity: 1;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }

  overflow-y: auto;
  background-color: ${({ theme }) => theme?.colors?.grays?.A200};
  padding-bottom: 40px;
  position: fixed;
  top: 64px;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  padding-left: calc(${({ theme }) => theme?.space[4]}px + 7px);
  padding-top: 37px;

  ${({ toggleNavbarOpen }) =>
    toggleNavbarOpen
      ? css`
          display: initial;
          & {
            animation: inAnimation ${TRANSITION_TIME + 0.2}s forwards 0s ease;
          }
        `
      : css`
          display: none;
        `}

  @media (min-width: ${TABLET_BREAKPOINT - 50}px) {
    max-width: 300px;
    width: 80vw;
  }

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding-left: calc(${({ theme }) => theme?.space[3]}vw + 7px);
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    animation: none;
    display: initial;
    position: initial;
    max-width: none;
    z-index: 0;
    top: initial;
    bottom: initial;
    right: initial;
    left: initial;
    width: 38vw;
    padding-left: ${({ theme }) => theme?.space[11]}px;
    padding-top: 40px;
    height: fit-content;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
    padding-left: ${({ theme }) => theme?.space[13]}px;
  }

  ${({ customStyle }) => customStyle}
`

const StyledImage = styled(Image)`
  width: 6px;
  height: 6px;
  margin-right: 14px;
  display: none;

  ${({ currentCategoryId, itemId }) =>
    currentCategoryId === itemId &&
    css`
      display: inline;
    `}
`

const Li = styled.li`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 23px;
  }

  &:before {
    content: none;
  }
`

const StyledText = styled(Text)`
  cursor: pointer;

  :hover {
    color: ${({ theme }) => theme?.colors?.blues?.A100};
    text-decoration-line: underline;
    text-transform: capitalize;
    font-weight: 600;
  }

  ${({ currentCategoryId, itemId }) =>
    currentCategoryId === itemId &&
    css`
      font-size: 16px;
      font-weight: 700 !important;
      color: ${({ theme }) => theme?.colors?.grays?.A800};
    `}
`

NavbarComponent.propTypes = {
  navbarData: PropTypes.shape({
    rows: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      })
    )
  }).isRequired,
  setCurrentCategoryId: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.number.isRequired,
  customStyle: PropTypes.node,
  toggleNavbarOpen: PropTypes.bool.isRequired
}

NavbarComponent.defaultProps = {
  customStyle: []
}

export default NavbarComponent
