import * as yup from 'yup'

import t from 'lang'

yup.setLocale({
  mixed: {
    required: `${t('requiredField')}`
  }
})

export const buySchema = yup.object().shape({
  name: yup.string().required(),
  email: yup
    .string(`${t('invalidEmail')}`)
    .email(`${t('invalidEmail')}`)
    .required(),
  phone: yup
    .number()
    .typeError(`${t('invalidPhone')}`)
    .max(99999999999, `${t('invalidPhone')}`)
    // eslint-disable-next-line no-console
    .test('is-incorrect', `${t('invalidPhone')}`, value => value >= 10000000)
    .positive(`${t('invalidPhone')}`)
    .integer(`${t('invalidPhone')}`)
    .required()
})
