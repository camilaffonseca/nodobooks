import styled from 'styled-components'
import { typography, color, space, variant } from 'styled-system'

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: ${({ theme }) => theme.colors.grays.A500};

  ${variant({
    variants: {
      small: {
        fontFamily: "'Open Sans', sans-serif"
      },
      regular: {
        fontWeight: 500,
        fontSize: '12px'
      },
      big: {
        fontWeight: 700,
        fontSize: '24px',
        color: 'grays.A800'
      }
    }
  })}

  ${typography}
  ${color}
  ${space}
`

Text.defaultProps = {
  variant: 'regular'
}

export default Text
