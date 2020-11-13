import styled from 'styled-components'
import PropTypes from 'prop-types'

const RatingBar = ({ percent }) => {
  const barWidth = (percent * 6) / 10
  return (
    <RatingBarContainer>
      <RatingBarColorized barWidth={barWidth} />
      <RatingBarDark />
    </RatingBarContainer>
  )
}

const RatingBarColorized = styled.div`
  width: ${({ barWidth }) => barWidth}px;
  height: 12px;
  position: relative;
  top: 0;
  left: 0;
  z-index: 2;
  background-image: url(/special-assets/star-colorized.png);
  background-repeat: repeat-x;
`

const RatingBarDark = styled.div`
  width: 60px;
  height: 12px;
  position: relative;
  top: -12px;
  left: 0;
  z-index: 1;
  background-image: url(/special-assets/star-dark.png);
  background-repeat: repeat-x;
`

const RatingBarContainer = styled.div`
  width: fit-content;
  height: 12px;
`

RatingBar.propTypes = {
  percent: PropTypes.number.isRequired
}

export default RatingBar
