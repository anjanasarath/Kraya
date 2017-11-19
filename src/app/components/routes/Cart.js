import React from 'react';
import { connect } from 'react-redux';
import { removeFromCart, updateCartItem, removeStockItem } from '../../actions';
import CartItems from '../cart/CartItems';
import Total from '../cart/Total';
import PayButton from '../cart/PayButton';

class Cart extends React.Component {
  render() {
    const { cart, onQtyChange, onRemoveClick, dispatch } = this.props;
    const onPayClick = (e) => {
      buyItems(cart, dispatch)
    };
    return (
        <div className="cart">
          <h1 className="main-header cart-header mycart">My Cart</h1>
          <CartItems
            cart={cart}
            onQtyChange={onQtyChange}
            onRemoveClick={onRemoveClick}
          />
          <div className="center category">
            <Total cart={cart} />
            <PayButton onPayClick={onPayClick} />
          </div>
        </div>
    );
  }
}

const mapStateToProps = state => ({
    cart: state.cart.map((cartItem) => {
      const item = state.stock.find(stockItem => cartItem.id === stockItem.id);
      return {
        id: cartItem.id,
        imagePath:item.imagePath,
        name: item.name,
        price: item.price,
        count: cartItem.count,
        stockCount: item.count,
      };
    }),
  }
);

const mapDispatchToProps = dispatch => ({
    onQtyChange: (e, id) => {
      dispatch(updateCartItem(id, e.target.value));
    },

    onRemoveClick: (e, id) => {
      e.preventDefault();  // ?
      dispatch(removeFromCart(id));
    },

    dispatch,
  }
);

const buyItems = (cart, dispatch) => {
  cart.map(cItem => {
      dispatch(removeStockItem(cItem.id, cItem.count));
      dispatch(removeFromCart(cItem.id));
  })
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
