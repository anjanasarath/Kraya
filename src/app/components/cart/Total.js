import React from 'react';

class Total extends React.Component {
  render() {
    const { cart } = this.props;
    return (
      <div>
        <span>Total: </span>
        <span>
          Rs. {cart.length ? cart.reduce((acc, item) => (
            acc + (item.price * item.count)
          ), 0).toFixed(2) : Number(0).toFixed(2)}
        </span>
      </div>
    );
  }
}

export default Total;
