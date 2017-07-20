export const RegisterCourse = (values,valuesterm) => {
  let myamnt = values;
   let myterm = valuesterm;
  return {
    type: 'CHECK',
    amount:myamnt,
    term:myterm
  };
};