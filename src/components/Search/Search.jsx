import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space } from 'styled-system'

import Image from 'components/Image'

import { DESKTOP_BREAKPOINT } from 'helpers/constants'
import { useDebounce } from 'hooks'

import searchIconDark from 'images/search-icon-dark.png'
import searchIconLight from 'images/search-icon-light.png'

let handleFirstChange = false

const SearchComponent = ({ callback, handleReset, ...props }) => {
  const [searchValue, setSearchValue] = useState('')
  const debouncedValue = useDebounce(searchValue, 400)

  useEffect(() => {
    if (searchValue.length) {
      handleFirstChange = true
    }
    try {
      if (handleFirstChange) {
        if (!searchValue.length) {
          handleReset()
        } else {
          callback()
        }
      }
    } catch {
      toast.error('Não foi possível realizar a busca.', { className: 'toast' })
    }
  }, [debouncedValue])

  return (
    <SearchContainer {...props}>
      <StyledSearchIconDark src={searchIconDark} alt='Search Icon Dark' />
      <StyledSearchIconLight src={searchIconLight} alt='Search Icon Light' />
      <Search onChange={e => setSearchValue(e?.target?.value)} placeholder='Search' />
    </SearchContainer>
  )
}

const Search = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  border: none;
  padding: 1px;
  color: ${({ theme }) => theme?.colors?.grays?.A900};
  font-size: ${({ theme }) => theme?.fontSizes[3]}px;

  &::placeholder {
    font-size: ${({ theme }) => theme?.fontSizes[3]}px;
    color: ${({ theme }) => theme?.colors?.grays?.A900};
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    color: ${({ theme }) => theme?.colors?.defaults?.white};

    &::placeholder {
      color: ${({ theme }) => theme?.colors?.defaults?.white};
    }
  }
`

const SearchContainer = styled.div`
  display: flex;
  height: 43px;
  max-width: 100%;
  align-items: center;
  padding: 1px 5px 1px 0;
  flex-direction: row;
  background: ${({ theme }) => theme?.colors?.defaults?.white};
  border-radius: ${({ theme }) => theme?.radii[2]}px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    width: 500px;
    background-color: ${({ theme }) => theme?.colors?.grays?.A900};
  }

  ${space}
`

const StyledSearchIconDark = styled(Image)`
  margin: 0 16px;
  display: inline;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: none;
  }
`

const StyledSearchIconLight = styled(Image)`
  margin: 0 16px;
  display: none;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: inline;
  }
`

SearchComponent.propTypes = {
  callback: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired
}

export default SearchComponent
