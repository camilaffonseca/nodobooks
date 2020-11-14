import { useState } from 'react'
import ReactDOM from 'react-dom'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Modal from 'components/Modal'
import Text from 'components/Text'
import TextField from 'components/TextField'
import Button from 'components/Button'
import Image from 'components/Image'

import { buySchema } from 'schemas/buy'
import { buyBook } from 'services/books'
import { TABLET_BREAKPOINT, DESKTOP_BREAKPOINT } from 'helpers/constants'

import errorIcon from 'images/error-icon.png'
import successIcon from 'images/success-icon.png'

import t from 'lang'

const BuyModal = ({ bookId, closeModal }) => {
  const { register, handleSubmit, errors, formState } = useForm({ validationSchema: buySchema })
  const [buySuccess, setBuySuccess] = useState(null)

  const onSubmit = async values => {
    try {
      const response = await buyBook({ data: { product_id: bookId, ...values } })
      if (response?.data?.book?.id === bookId) {
        setBuySuccess('success')
      }
    } catch {
      setBuySuccess('error')
    }
  }

  if (buySuccess) {
    return ReactDOM.createPortal(
      <Modal>
        <Text variant='big' mb='37px' color='grays.A800'>
          {t('buyNow')}
        </Text>
        <StatusContainer>
          {buySuccess === 'success' ? (
            <>
              <Image src={successIcon} alt='Success Image' />
              <Text
                ml={[0, 0, 0, '30px']}
                mt={[0, '25px', '30px', '0px']}
                mb={[0, '7px', '10px', '0px']}
                fontSize={[0, '20px', '24px', '24px']}
                fontWeight='600'
                fontFamily='Open Sans'
                color='grays.A900'
              >
                {t('purchaseSuccess')}
              </Text>
            </>
          ) : (
            <>
              <Image src={errorIcon} alt='Error Image' />
              <Text
                ml={[0, 0, 0, '30px']}
                mt={[0, '25px', '30px', '0px']}
                mb={[0, '7px', '10px', '0px']}
                fontSize={[0, '20px', '24px', '24px']}
                fontWeight='600'
                fontFamily='Open Sans'
                color='grays.A900'
              >
                {t('purchaseError')}
              </Text>
            </>
          )}
        </StatusContainer>
        <FooterContainerStatus>
          <StyledButton onClick={closeModal} variant='primary' type='button' outlined={false}>
            {t('close')}
          </StyledButton>
        </FooterContainerStatus>
      </Modal>,
      document.body
    )
  }

  return ReactDOM.createPortal(
    <form onSubmit={handleSubmit(onSubmit)}>
      <Modal>
        <Text variant='big' mb='37px' color='grays.A800'>
          {t('buyNow')}
        </Text>
        <TextField
          label={t('name')}
          name='name'
          error={errors?.name?.message}
          register={register}
          placeholder={t('yourName')}
          type='text'
        />
        <TextField
          label={t('email')}
          name='email'
          error={errors?.email?.message}
          register={register}
          placeholder={t('yourEmail')}
          type='text'
        />
        <TextField
          label={t('phone')}
          name='phone'
          error={errors?.phone?.message}
          register={register}
          placeholder={t('yourPhone')}
          type='text'
        />
        <FooterContainer>
          <StyledButton onClick={closeModal} variant='secondary' type='button'>
            {t('cancel')}
          </StyledButton>
          <StyledButton ml={[0, 0, '32px']} type='submit' outlined={false}>
            {formState.isSubmitting ? t('loading') : t('send')}
          </StyledButton>
        </FooterContainer>
      </Modal>
    </form>,
    document.body
  )
}

const StyledButton = styled(Button)`
  width: 100%;

  @media (min-width: ${TABLET_BREAKPOINT}px) {
    width: 176px;
  }
`

const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 25px 30px;
  text-align: center;

  @media (min-width: ${TABLET_BREAKPOINT - 200}px) {
    padding: 5px 30px;
  }
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    padding: 25px 30px;
  }
  @media (min-width: ${DESKTOP_BREAKPOINT}px) {
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 80px 50px;
    text-align: left;
  }
`

const FooterContainerStatus = styled.div`
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: ${TABLET_BREAKPOINT + 150}px) {
    display: flex;
    justify-content: flex-end;
  }
`

const FooterContainer = styled.div`
  @media (min-width: ${TABLET_BREAKPOINT}px) {
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: ${TABLET_BREAKPOINT + 150}px) {
    display: flex;
    justify-content: flex-end;
  }
`

BuyModal.propTypes = {
  bookId: PropTypes.number.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default BuyModal
