import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product';

const mapStateToProps = (state, ownProps) => ({
  products: state.stock.filter(product => product.category === state.categories[ownProps.params.id].name)
});

class ProductSpec extends React.Component {
 render() {
   const { products } = this.props;
   return (
      <div>
        {products.map(product => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            imagePath={product.imagePath}
            />
        ))}
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
)(ProductSpec);
