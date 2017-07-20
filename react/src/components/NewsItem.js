import React from 'react';

class NewsItem extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return(
      <div className="newsItem">
        <img src={this.props.image} className="news-image"/>
          <div className="news-info">
            <div className="news-date"><h2>{this.props.time}</h2></div>
            <div className="news-title"><h2>{this.props.title}</h2></div>
            <div className="new-description"><h2>{this.props.description}</h2></div>
          </div>
      </div>
    )
  }
}

export default NewsItem;
