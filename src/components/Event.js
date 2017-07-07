import React from 'react'
import PropTypes from 'prop-types'

const Event = (props) => (
    
        <li>
            <img className="online" width="75" src={props.topicImagePath} />
            <a className="users-list-name" href="#"> {props.presenterName}</a>
            <span className="users-list-date">{props.topic}-{props.description}-{props.eventDate}</span>
    
    </li>
      
       
   
)

Event.propTypes = {
  registered: PropTypes.bool.isRequired,
  description: PropTypes.string.isRequired,
  topic: PropTypes.string.isRequired,
  presenterName: PropTypes.string.isRequired,
  eventDate: PropTypes.string.isRequired,
  topicImagePath: PropTypes.string.isRequired
}

export default Event
