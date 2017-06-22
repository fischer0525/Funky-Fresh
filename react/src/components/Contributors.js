import React, { Component } from 'react';
import Contributor from './Contributor';

class Contributors extends Component {
  constructor(props) {
  super(props);
  this.state = {
    contributors: []
  };
  this.getContributors = this.getContributors.bind(this);
}

getContributors() {
  fetch('http://localhost:3000/api/v1/contributors.json')
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
      this.setState({contributors: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

componentDidMount() {
  this.getContributors();
};

render() {

  let contributors = this.state.contributors.map((contributor, index) =>{

    return (
      <Contributor
        id={contributor.id}
        key={index}
        name={contributor.contributor_name}
        url={contributor.contributor_url}
        bio={contributor.contributor_bio}
        image={contributor.contributor_img}
      />
    )
  });

  return(
    <div className="center-container">
        <div className="center-item">
          {contributors}
        </div>
      </div>

    )
  }
};

export default Contributors;
