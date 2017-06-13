import React from 'react';

class Product extends React.Component {
  constructor(props){
    super(props);
  }
  render() {

    return (
      <div className="product">
        <div><img src={this.props.image} className="image"/></div>
        <button onClick={this.props.titleClick}> {this.props.buttonValue} </button>
        <div className={this.props.className}> {this.props.description} </div>
      </div>
    )
  }
}

export default Product;
