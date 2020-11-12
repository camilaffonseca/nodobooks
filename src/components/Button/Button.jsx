import styled, { css } from 'styled-components'
import { variant, space, layout } from 'styled-system'
import PropTypes from 'prop-types'

import { TRANSITION_TIME } from 'helpers/constants'

const Button = styled.button`
  height: 45px;
  font-size: 12px;
  font-weight: 700;
  width: 100%;
  cursor: pointer;
  text-transform: uppercase;

  -o-transition: background-color ${TRANSITION_TIME}s ease, color ${TRANSITION_TIME}s ease,
    transform ${TRANSITION_TIME}s ease;
  -moz-transition: background-color ${TRANSITION_TIME}s ease, color ${TRANSITION_TIME}s ease,
    transform ${TRANSITION_TIME}s ease;
  -webkit-transition: background-color ${TRANSITION_TIME}s ease, color ${TRANSITION_TIME}s ease,
    transform ${TRANSITION_TIME}s ease;
  transition: background-color ${TRANSITION_TIME}s ease, color ${TRANSITION_TIME}s ease;

  ${({ outlined, theme }) =>
    variant({
      variants: {
        primary: {
          color: outlined ? 'blues.A200' : 'defaults.white',
          border: `1px solid ${theme?.colors?.blues?.A200}`,
          backgroundColor: outlined ? 'defaults.white' : 'blues.A200'
        },
        secondary: {
          color: 'grays.A600',
          border: `1px solid ${theme?.colors?.grays?.A600}`
        }
      }
    })}
  ${({ outlined, theme, variant: vari4nt }) =>
    vari4nt === 'primary' &&
    outlined &&
    css`
      &:hover {
        background-color: ${theme?.colors?.blues?.A200};
        color: ${theme?.colors?.defaults?.white};
      }
    `}

  ${space}
  ${layout}
`

Button.defaultProps = {
  variant: 'primary',
  outlined: true
}

Button.propTypes = {
  variant: PropTypes.string,
  outlined: PropTypes.bool
}

export default Button
