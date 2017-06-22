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
            <div className="news-date">{this.props.time}</div>
            <div className="news-title">{this.props.title}</div>
            <div className="new-description">{this.props.description}</div>
          </div>
      </div>
    )
  }
}

export default NewsItem;
