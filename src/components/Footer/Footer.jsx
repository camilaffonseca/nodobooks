import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Text from 'components/Text'
import Container from 'components/Container'

import { TABLET_BREAKPOINT } from 'helpers/constants'

import t from 'lang'

const FooterComponent = ({ reduceMarginTop }) => (
  <Footer reduceMarginTop={reduceMarginTop}>
    <Container>
      <StyledText variant='regular'>&#169; 2020 - {t('copyrightMesage')}</StyledText>
    </Container>
  </Footer>
)

const Footer = styled.footer`
  border-top: 1px solid rgba(28, 42, 57, 0.35);
  height: 110px;
  display: flex;
  margin-top: 135px;
  justify-content: center;

  ${({ reduceMarginTop }) =>
    !reduceMarginTop &&
    css`
      margin-top: 67.5px;
    `}
`

const StyledText = styled(Text)`
  margin-top: 3rem;
  font-size: 14px;
  text-align: left;
  color: ${({ theme }) => theme?.colors?.grays?.A800};

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    text-align: center;
  }
`

FooterComponent.propTypes = {
  reduceMarginTop: PropTypes.bool.isRequired
}

export default FooterComponent
