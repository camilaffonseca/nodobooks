import styled from 'styled-components'

import Container from 'components/Container'
import Image from 'components/Image'

import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from 'helpers/constants'

import landingImage from 'images/landing-image.png'

const Home = () => {
  return (
    <StyledContainer>
      <StyledImage src={landingImage} alt='Landing Image' />
    </StyledContainer>
  )
}

const StyledImage = styled(Image)`
  max-width: 100%;
  margin-top: 16px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0;
  }
`

const StyledContainer = styled(Container)`
  padding: 0;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[3]}vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[13]}px;
  }
`

export default Home
