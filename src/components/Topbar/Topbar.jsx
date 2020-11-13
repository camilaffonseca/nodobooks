/* eslint-disable no-console */
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Image from 'components/Image'
import Text from 'components/Text'
import Search from 'components/Search'
import Container from 'components/Container'

import nodoIcon from 'images/nodo-icon.png'
import menuIcon from 'images/menu-icon.png'
import closeIcon from 'images/close-icon.png'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'

const TopbarComponent = ({
  toggleNavbarOpen,
  setToggleNavbarOpen,
  setCurrentCategoryId,
  currentCategoryId,
  searchFetch
}) => (
  <Topbar>
    <StyledLogo>
      {!toggleNavbarOpen && <MenuIconMobile onClick={() => setToggleNavbarOpen(true)} src={menuIcon} alt='Menu Icon' />}
      {toggleNavbarOpen && (
        <MenuIconMobile onClick={() => setToggleNavbarOpen(false)} src={closeIcon} alt='Menu Close Icon' />
      )}
      <LogoIcon src={nodoIcon} alt='Nodo Icon' />
      <StyledTitle variant='big' fontSize='18px' marginLeft={[0, '9px', 5]} color='grays.A100'>
        Bookstore
      </StyledTitle>
    </StyledLogo>
    <StyledSearch
      currentCategoryId={currentCategoryId}
      callback={value => {
        setCurrentCategoryId(-1)
        searchFetch(value)
      }}
      handleReset={() => setCurrentCategoryId(0)}
    />
  </Topbar>
)

const Topbar = styled(Container)`
  height: 115px;
  background-color: ${({ theme }) => theme?.colors?.grays?.A900};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 3;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    height: 116px;
    background-color: ${({ theme }) => theme?.colors?.defaults?.white};
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
`

const MenuIconMobile = styled(Image)`
  display: inline;
  cursor: pointer;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: none;
  }
`

const LogoIcon = styled(Image)`
  display: none;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: inline;
  }
`

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  margin-top: ${({ theme }) => theme?.space[5]}px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0;
  }
`

const StyledTitle = styled(Text)`
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    color: ${({ theme }) => theme?.colors?.grays?.A800};
    font-size: ${({ theme }) => theme?.fontSizes[5]}px;
  }
`

const StyledSearch = styled(Search)`
  margin-bottom: ${({ theme }) => theme?.space[3]}px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-bottom: 0;
  }
`

TopbarComponent.propTypes = {
  toggleNavbarOpen: PropTypes.bool.isRequired,
  setToggleNavbarOpen: PropTypes.func.isRequired,
  setCurrentCategoryId: PropTypes.func.isRequired,
  searchFetch: PropTypes.func.isRequired,
  currentCategoryId: PropTypes.number.isRequired
}

export default TopbarComponent
