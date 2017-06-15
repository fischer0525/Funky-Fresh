import React, { Component } from 'react';
import NewsItem from './NewsItem';
import EventsItem from './EventsItem';

class NewsEvents extends Component {
  constructor(props) {
  super(props);
  this.state = {
    news: [],
    events: []
  };
  this.getNews = this.getNews.bind(this);
  this.getEvents = this.getEvents.bind(this);
}


getNews() {
  fetch('http://localhost:3000/api/v1/news.json')
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
      this.setState({news: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
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
  this.getNews();
  this.getEvents();
};

render() {

  let news = this.state.news.map((newsItem, index) =>{

    return (
      <NewsItem
        id={product.id}
        key={index}
        title={newsItem.news_title}
        image={newsItem.news_img}
        description={newsItem.news_description}
        date={newsItem.news_date}
        time={newsItem.created_at}
        update={newsItem.updated_at}
      />
    )
  });

  let events = this.state.events.map((eventsItem, index) =>{

    return (
      <EventsItem
        id={product.id}
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
          {news}{events}
        </div>
      </div>

  )
}
};

export default NewsEvents;
