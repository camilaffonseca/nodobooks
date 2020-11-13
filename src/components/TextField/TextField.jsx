import { useState } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

import Text from 'components/Text'

const TextField = ({ label, name, register, placeholder, error, message, disabled, type, ...props }) => {
  const [isShadow, setIsShadow] = useState(false)

  return (
    <>
      <Text variant='small' fontSize='16px' height='22px' color='defaults.black' lineHeight='22px'>
        {label || ''}
      </Text>
      <Input
        isShadow={isShadow}
        onFocus={() => setIsShadow(true)}
        onBlur={() => setIsShadow(false)}
        name={name}
        ref={register}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
        {...props}
      />
      <Text
        variant='small'
        fontSize='12px'
        height='16px'
        color={error ? 'specials.error' : 'defaults.black'}
        lineHeight='16px'
      >
        {message || error || ''}
      </Text>
    </>
  )
}

const Input = styled.input`
  width: 100%;
  height: 48px;
  color: ${({ theme }) => theme?.colors?.grays?.A700};
  background-color: ${({ theme }) => theme?.colors?.grays?.A50};
  border: 1px solid ${({ theme }) => theme?.colors?.grays?.A250};
  border-radius: ${({ theme }) => theme?.radii[2]}px;
  padding: 16px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin: 8px 0 2px 0;

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.grays?.A400};
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
    line-height: 16px;
    font-weight: 400;
  }

  ${({ isShadow }) =>
    isShadow &&
    css`
      box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    `}
`

TextField.defaultProps = {
  label: '',
  message: '',
  error: '',
  disabled: false
}

TextField.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  message: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool
}

export default TextField
