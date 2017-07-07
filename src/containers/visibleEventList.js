
import { connect } from 'react-redux'
import EventList from '../components/EventList'

const MapStateToProps = state => {
    return {
        state
    }
}

const VisibleEventList = connect(
    MapStateToProps
)(EventList)


export default VisibleEventList
