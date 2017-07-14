export const RegisterCourse = (values) => {
  return {
    type: 'CHECK',
    amount:values.refs.loan_amnt.value
  };
};