
import { connect } from 'react-redux'
import LoanReqForm from '../components/LoanReqForm'
import {RegisterCourse} from '../actions'


const MapStateToProps = state => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) =>
{
   return {
   registerOnClick: (values) => {dispatch(RegisterCourse(values));}
  };
}

const VisibleEventList = connect(
    MapStateToProps,mapDispatchToProps
)(LoanReqForm)


export default VisibleEventList
