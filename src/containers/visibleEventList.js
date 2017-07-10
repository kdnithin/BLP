
import { connect } from 'react-redux'
import LoanReqForm from '../components/LoanReqForm'

const MapStateToProps = state => {
    return {
        state
    }
}

const VisibleEventList = connect(
    MapStateToProps
)(LoanReqForm)


export default VisibleEventList
