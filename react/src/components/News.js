import React, { Component } from 'react';
import NewsItem from './NewsItem';


class News extends Component {
  constructor(props) {
  super(props);
  this.state = {
    news: []
  };
  this.getNews = this.getNews.bind(this);

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

componentDidMount() {
  this.getNews();
};

render() {

  let news = this.state.news.map((newsItem, index) =>{
    return (
      <NewsItem
        id={newsItem.id}
        key={index}
        title={newsItem.news_title}
        image={newsItem.news_img}
        description={newsItem.news_description}
        time={newsItem.created_at}
        update={newsItem.updated_at}
      />
    )
  });

  return(
    <div className="center-container">
        <div className="center-item news">
          {news}
        </div>
      </div>

  )
}
};

export default News;
