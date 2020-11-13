import { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import { LoaderImage } from 'components/Image'
import Text from 'components/Text'
import Button from 'components/Button'
import RatingBar from 'components/RatingBar'
import BuyModal from 'components/BuyModal'

import t from 'lang'

import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from 'helpers/constants'

const BookCard = ({ cardData, click }) => {
  const [showBuyModal, setShowBuyModal] = useState(false)
  return (
    <>
      <Helmet>
        <title>Bookstore</title>
      </Helmet>
      {showBuyModal && <BuyModal bookId={cardData?.id} closeModal={() => setShowBuyModal(false)} />}
      <CardContainer>
        <StyledImage
          onClick={() => click(cardData?.id)}
          className='loader-card-image'
          src={cardData.cover}
          alt='Book Image'
        />
        <Content>
          <Text mb={2} mt={[0, 3, 2]} variant='small'>
            {cardData?.author}
          </Text>
          <StyledTitle onClick={() => click(cardData?.id)} mb='5px' variant='big' fontSize={4}>
            {cardData?.title.charAt(0).toUpperCase() + cardData?.title.slice(1)}
          </StyledTitle>
          <RatingContainer>
            <RatingBar percent={Number(cardData?.stars) * 10} />
            <Text ml='6px' variant='small'>
              {cardData?.reviews} reviews
            </Text>
          </RatingContainer>
          <StyledDescription mb={5} variant='small'>
            {cardData?.description}
          </StyledDescription>
          <Text my={5} variant='big' fontSize={2}>
            $ {cardData?.price}
          </Text>
          <Button onClick={() => setShowBuyModal(true)}>{t('buyNow')}</Button>
        </Content>
      </CardContainer>
    </>
  )
}

const Content = styled.div`
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    padding-left: 36px;
    width: 41%;
  }
`

const CardContainer = styled.div`
  width: 100%;
  margin-top: 40px;

  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`

const StyledImage = styled(LoaderImage)`
  cursor: pointer;
  width: 100% !important;
  object-fit: cover;
  height: 60vw;
  max-height: 330px;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    height: 34vw;
  }

  @media (min-width: ${TABLET_BREAKPOINT + 100}px) {
    height: 35vw;
    max-height: 360px;
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

  display: none;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    display: flex;
  }
`

const StyledDescription = styled(Text)`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 45px;

  display: none;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    display: -webkit-box;
  }
`

const StyledTitle = styled(Text)`
  cursor: pointer;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 50px;
`

BookCard.propTypes = {
  cardData: PropTypes.shape({
    id: PropTypes.number,
    price: PropTypes.number,
    cover: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    reviews: PropTypes.number,
    stars: PropTypes.number,
    category: PropTypes.number
  }).isRequired,
  click: PropTypes.func.isRequired
}

export default BookCard
