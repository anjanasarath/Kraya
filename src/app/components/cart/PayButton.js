import React from 'react';

class PayButton extends React.Component {
  render() {
    const { onPayClick, cart } = this.props;
    return (
       <button type="button" onClick={() => onPayClick()}>Buy Now!</button>
    );
  }
}

export default PayButton;
