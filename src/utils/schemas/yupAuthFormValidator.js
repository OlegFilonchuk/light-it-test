const yup = require('yup');

export const authFormValidator = yup.object().shape({
  username: yup
    .string()
    .required('Empty username field!'),
  password: yup
    .string()
    .required('Empty password field!')
});
