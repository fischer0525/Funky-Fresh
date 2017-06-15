import React, { Component } from 'react';
import Product from './Product';

class Products extends Component {
  constructor(props) {
  super(props);
  this.state = {
    products: [],
    selectedProductId: null
  };
  this.getData = this.getData.bind(this);
  this.handleProductSelect = this.handleProductSelect.bind(this)
}



handleProductSelect(id){
    this.setState({selectedProductId: id})
  }

getData() {
  fetch('http://localhost:3000/api/v1/products.json')
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
      this.setState({products: body});
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
}

componentDidMount() {
  this.getData();
};

render() {

  let products = this.state.products.map((product, index) =>{
    let titleClick= (e) =>{
        e.preventDefault();
      if(product.id===this.state.selectedProductId){
        this.setState({selectedProductId: null})
      }else{
      this.handleProductSelect(product.id);
      }
    }

    let buttonValue;
    let className;
    if(product.id===this.state.selectedProductId){
      className="selected"
      buttonValue=product.product_img
    }else{
      className="not-selected"
      buttonValue=product.product_img

    }

    return (
      <Product
        id={product.id}
        key={index}
        title={product.product_title}
        image={product.product_img}
        description={product.product_description}
        className={className}
        titleClick={titleClick}
        buttonValue={buttonValue}
      />
    )
  });

  return(
    <div className="center-container">
        <div className="center-item">
          {products}
        </div>
      </div>

  )
}
};

export default Products;
