import styled from 'styled-components'

import Image from 'components/Image'
import Text from 'components/Text'

import nodoIcon from 'images/nodo-icon.png'
import menuIcon from 'images/menu-icon.png'

import { TABLET_BREAKPOINT } from 'helpers/constants'

const TopbarComponent = () => (
  <Topbar>
    <span>
      <MenuIconMobile src={menuIcon} alt='Menu Icon' />
      <LogoIcon src={nodoIcon} alt='Nodo Icon' />
      <Text variant='big'>Bookstore</Text>
    </span>
  </Topbar>
)

const Topbar = styled.div`
  height: 115px;
  background-color: ${({ theme }) => theme?.colors?.backgrounds?.primary};
  padding: 0 15px;

  @media (min-width: ${TABLET_BREAKPOINT - 268}px) {
    padding: 0 35px;
  }

  @media (min-width: ${TABLET_BREAKPOINT - 118}px) {
    padding: 0 50px;
  }

  @media (min-width: ${TABLET_BREAKPOINT + 118}px) {
    padding: 0 80px;
  }

  @media (min-width: ${TABLET_BREAKPOINT + 300}px) {
    height: 116px;
    background-color: ${({ theme }) => theme?.colors?.white};
    padding: 0 160px;
  }
`

const MenuIconMobile = styled(Image)`
  display: inline;

  @media (min-width: ${TABLET_BREAKPOINT + 300}px) {
    display: none;
  }
`

const LogoIcon = styled(Image)`
  display: none;

  @media (min-width: ${TABLET_BREAKPOINT + 300}px) {
    display: inline;
  }
`

export default TopbarComponent
