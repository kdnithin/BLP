import Event  from './Event'
import React from 'react'
let EventList=(eventListsall)=>
    (
        
            <ul className="users-list clearfix">
           
                {eventListsall.state.map(event => (
                    <Event key={event.id} {...event} />
                ))}
              
            </ul>
      
)

export default EventList
