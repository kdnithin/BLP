import Event  from './Event'
import { connect } from 'react-redux'
import React from 'react'
import {RegisterCourse}  from '../actions'

let EventList=(props)=>
(
  <div>
        {props.state.map(event => (
          <Event key={event.id} {...event}  />
        ))}
         
        </div>
)
const mapStateToProps = state => {
  return {
   state
  }
}


export default connect(mapStateToProps)(EventList)
