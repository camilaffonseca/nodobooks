import styled, { css } from 'styled-components'
import { typography, color, variant } from 'styled-system'

const Text = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 10px;
  color: ${({ theme }) => theme?.colors?.texts?.secondary};

  ${variant({
    variants: {
      small: css`
        font-family: 'Open Sans', sans-serif;
      `,
      regular: css`
        font-weight: 500;
        font-size: 12px;
      `,
      big: css`
        font-weight: 700;
        font-size: 24px;
        color: ${({ theme }) => theme?.colors?.text?.primary};
      `
    }
  })}

  ${typography}
  ${color}
`

Text.defaultProps = {
  variant: 'regular'
}

export default Text
