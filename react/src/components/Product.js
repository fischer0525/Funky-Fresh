import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className={this.props.className}>
        <div><img src={this.props.image} className="product-image" onClick={this.props.titleClick}/></div>
        <div className="description-visible"> <h3>{this.props.description}</h3> </div>
      </div>
    )
  }
}

export default Product;
