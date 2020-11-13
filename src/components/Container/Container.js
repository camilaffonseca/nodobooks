import styled from 'styled-components'

import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT } from 'helpers/constants'

const Container = styled.div`
  width: 100%;
  padding: 0 ${({ theme }) => theme?.space[4]}px;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[3]}vw;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0 ${({ theme }) => theme?.space[11]}px;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
    padding: 0 ${({ theme }) => theme?.space[13]}px;
  }
`

export default Container
