import React, { Component } from 'react';
import EventsItem from './EventsItem';

class Events extends Component {
  constructor(props) {
  super(props);
  this.state = {
    events: []
  };
  this.getEvents = this.getEvents.bind(this);
}

getEvents() {
  fetch('http://localhost:3000/api/v1/events.json')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} ($response.statusText)`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({events: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}
componentDidMount() {
  this.getEvents();
};

render() {

  let events = this.state.events.map((eventsItem, index) =>{

    return (
      <EventsItem
        id={eventsItem.id}
        key={index}
        title={eventsItem.events_title}
        image={eventsItem.events_img}
        description={eventsItem.events_description}
        date={eventsItem.events_date}
        location={eventsItem.event_location}
        link={eventsItem.event_url}
        time={eventsItem.created_at}
        update={eventsItem.updated_at}
      />
    )
  });

  return(
    <div className="center-container">
        <div className="center-item">
          {events}
        </div>
      </div>

  )
}
};

export default Events;
