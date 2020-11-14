import { useState, useEffect } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { toast } from 'react-toastify'
import Helmet from 'react-helmet'

import Image from 'components/Image'
import Text from 'components/Text'
import Button from 'components/Button'
import RatingBar from 'components/RatingBar'
import ContainerComponent from 'components/Container'
import BuyModal from 'components/BuyModal'

import { getBookById } from 'services/books'

import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from 'helpers/constants'

import t from 'lang'

const ShowBook = ({ bookId }) => {
  const [currentCard, setCurrentCard] = useState({})
  const [showBuyModal, setShowBuyModal] = useState(false)

  useEffect(() => {
    const fetchCurrentBook = async () => {
      try {
        const response = await getBookById(bookId)
        setCurrentCard(response?.data?.book)
      } catch {
        toast.error(t('bookNotResolvedAccess'), { className: 'toast' })
      }
    }
    fetchCurrentBook()
  }, [])
  return (
    <>
      {showBuyModal && currentCard?.id + 1 && (
        <BuyModal bookId={currentCard?.id} closeModal={() => setShowBuyModal(false)} />
      )}
      {currentCard?.id ? (
        <CardContainer>
          <Helmet>
            <title>Bookstore - {currentCard?.title.charAt(0).toUpperCase() + currentCard?.title.slice(1)}</title>
          </Helmet>
          <Mobile>
            <Container>
              <Text mb={2} mt={[0, 3, 2]} variant='small'>
                {currentCard?.author}
              </Text>
              <Text mb='5px' variant='big' fontSize={4}>
                {currentCard?.title?.charAt(0).toUpperCase() + currentCard?.title?.slice(1)}
              </Text>
              <RatingContainer>
                <RatingBar percent={Number(currentCard?.stars) * 10} />
                <Text ml='6px' mb='24px' variant='small'>
                  {currentCard?.reviews} reviews
                </Text>
              </RatingContainer>
            </Container>
          </Mobile>
          <Mobile>
            <MibileContainer>
              <StyledImage src={currentCard?.cover} alt='Book Image' /> {/* TODO */}
            </MibileContainer>
          </Mobile>
          <Mobile>
            <MibileContainer>
              <Text mt='16px' variant='big' fontSize={2}>
                $ {currentCard?.price}
              </Text>
            </MibileContainer>
            <MibileContainer>
              <Button
                onClick={() => setShowBuyModal(true)}
                width={[0, '100%', '176px']}
                height='45px'
                mt='16px'
                mb='20px'
              >
                {t('buyNow')}
              </Button>
            </MibileContainer>
            <Container>
              <StyledDescription mb={5} variant='small'>
                {currentCard?.description}
              </StyledDescription>
            </Container>
          </Mobile>
          <Desktop>
            <StyledImage src={currentCard?.cover} alt='Book Image' /> {/* TODO */}
          </Desktop>
          <Content>
            <Desktop>
              <Text mb={2} mt={[0, 3, 2]} variant='small'>
                {currentCard?.author}
              </Text>
              <Text mb='5px' variant='big' fontSize={4}>
                {currentCard?.title?.charAt(0).toUpperCase() + currentCard?.title?.slice(1)}
              </Text>
              <RatingContainer>
                <RatingBar percent={Number(currentCard?.stars) * 10} />
                <Text ml='6px' variant='small'>
                  {currentCard?.reviews} reviews
                </Text>
              </RatingContainer>
              <Text mt='16px' variant='big' fontSize={2}>
                $ {currentCard?.price}
              </Text>
              <Button onClick={() => setShowBuyModal(true)} width='176px' height='45px' mt='16px' mb='20px'>
                {t('buyNow')}
              </Button>
              <StyledDescription mb={5} variant='small'>
                {currentCard?.description}
              </StyledDescription>
            </Desktop>
          </Content>
        </CardContainer>
      ) : (
        <Empty />
      )}
    </>
  )
}

const Empty = styled.div`
  width: 100%;
`

const Container = styled(ContainerComponent)`
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0;
  }
`

const MibileContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding: 0;
  }
`

const Content = styled.div`
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding-left: 36px;
    width: 70%;
    padding-right: ${({ theme }) => theme?.space[4]}px;

    @media (min-width: ${TABLET_BREAKPOINT}px) {
      padding-right: ${({ theme }) => theme?.space[3]}vw;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT}px) {
      padding-right: ${({ theme }) => theme?.space[11]}px;
    }

    @media (min-width: ${DESKTOP_BREAKPOINT + 200}px) {
      padding-right: ${({ theme }) => theme?.space[13]}px;
    }
  }
`

const CardContainer = styled.div`
  width: 100%;
  margin-top: 139px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-top: 0px;
    display: flex;
    padding-left: 40px;
    flex-direction: row;
  }
`

const StyledImage = styled(Image)`
  width: 60vw;
  height: 85vw;
  object-fit: cover;

  @media (min-width: ${TABLET_BREAKPOINT - 100}px) {
    width: 50vw;
    height: 65vw;
  }

  @media (min-width: ${TABLET_BREAKPOINT + 100}px) {
    width: 40vw;
    height: 60vw;
    max-width: 260px;
    max-height: 385px;
  }

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    max-height: none;
    max-width: 17vw;
    height: 23vw;
  }
`

const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

const StyledDescription = styled(Text)`
  height: fit-content;
  margin-bottom: 100px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    margin-bottom: 0;
  }
`

const Mobile = styled.div`
  width: fit-content;
  height: fit-content;
  display: initial;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: none !important;
  }
`

// eslint-disable-next-line no-unused-vars
const Desktop = styled.div`
  width: fit-content;
  height: fit-content;
  display: none;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: initial !important;
  }
`

ShowBook.propTypes = {
  bookId: PropTypes.number.isRequired
}

export default ShowBook
