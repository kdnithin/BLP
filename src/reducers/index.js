let events=[
{loan_amnt:2500,
  loan_terms:50
}
]

const evenLists = (state = events, action) => {
   switch(action.type)
 {
     case 'CHECK':
        return Object.assign({}, state, {
       loan_amnt: action.amount,
       loan_terms:action.term
      }
      )    
       
   
    default :
      return state;
 }
}

export default evenLists
