import PropTypes from 'prop-types'
import styled from 'styled-components'

const ImageComponent = ({ src, alt, ...props }) => <Image draggable={false} src={src} alt={alt} {...props} />

const Image = styled.img`
  &::selection {
    background: transparent;
  }
`

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default ImageComponent
