let events=[
{loan_amnt:2500}]

const evenLists = (state = events, action) => {
   switch(action.type)
 {
     case 'CHECK':
       return Object.assign({}, state, {
            loan_amnt: action.amount
      })    
    default :
      return state;
 }
}

export default evenLists
