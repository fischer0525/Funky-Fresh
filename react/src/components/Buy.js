import React, { Component } from 'react';
import Business from './Business';

class Buy extends Component {
  constructor(props) {
  super(props);
  this.state = {
    businesses: []
  };
  this.getBusinesses = this.getBusinesses.bind(this);
}

getBusinesses() {
  fetch('http://localhost:3000/api/v1/buys.json')
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
      this.setState({buys: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

componentDidMount() {
  this.getBusinesses();
};

render() {

  let businesses = this.state.businesses.map((business, index) =>{

    return (
      <Business
        id={business.id}
        key={index}
        name={business.business_name}
        url={business.business_url}
        description={business.business_description}
        address={business.business_address}
        city={business.business_city}
        state={business.business_state}
        zip={business.business_zip}
      />
    )
  });

  return(
    <div className="center-container">
        <div className="center-item">
          {businesses}
        </div>
      </div>

    )
  }
};

export default Buy;
