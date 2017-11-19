import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product';
import AddToCart from '../AddToCart';

const mapStateToProps = (state, ownProps) => ({
  product: state.stock.find(product => String(product.id) === ownProps.params.id)
});

class Selected_Product extends React.Component {
  render() {
     const { product } = this.props;
     return (
         <div>
           <Product
             key={product.id}
             id={product.id}
             name={product.name}
             price={product.price}
             category={product.category}
             imagePath={product.imagePath}
           />
           <AddToCart id={product.id}/>
         </div>
       );
  }
}

export default connect(mapStateToProps)(Selected_Product);
