const yup = require('yup')

export const reviewFormValidator = yup.object().shape({
  rate: yup
    .number()
    .required('Rate is required!'),
  text: yup
    .string()
    .required('Empty text field!')
})
