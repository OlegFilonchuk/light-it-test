const yup = require('yup');

export const authFormValidator = yup.object().shape({
  password: yup
    .string()
    .required('Empty password field!'),
  username: yup
    .string()
    .required('Empty username field!'),
});
