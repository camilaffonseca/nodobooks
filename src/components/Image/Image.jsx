import ReactImageAppear from 'react-image-appear'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, layout } from 'styled-system'

const Image = ({ src, alt, ...props }) => (
  <ImageComponent loading='lazy' draggable={false} src={src} alt={alt} {...props} />
)

export const LoaderImage = ({ src, alt, ...props }) => (
  <LoaderImageComponent
    loading='lazy'
    animation='fadeIn'
    animationDuration='1s'
    draggable={false}
    src={src}
    alt={alt}
    {...props}
  />
)

const ImageComponent = styled.img`
  &::selection {
    background: transparent;
  }

  ${space}
  ${layout}
`

const LoaderImageComponent = styled(ReactImageAppear)`
  &::selection {
    background: transparent;
  }

  ${space}
  ${layout}
`

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

LoaderImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Image
