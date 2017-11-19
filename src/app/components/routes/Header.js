import React from 'react';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';

const mapStateToProps = (state, ownProps) => ({
    showCart: !ownProps.location.pathname.includes('cart'),
    children: ownProps.children,
    cartItems: state.cart.length,
  }
);

class Header extends React.Component {
  render() {
    const { children, cartItems, cartButton, showCart } = this.props;
    const getCartButton = () => (
      <Link to="/cart">Cart ({cartItems})</Link>
    );

    return (
        <div>
          {showCart &&
            <AppBar title="KRAYA.COM" showMenuIconButton={false}
              iconElementRight={<FlatButton>{getCartButton()}</FlatButton>}
            />
          }
          {!showCart &&
            <AppBar title="KRAYA.COM" showMenuIconButton={false} />
          }
          <main className="main">
            {children}
          </main>
        </div>
      );
    }
}

export default connect(mapStateToProps)(Header);
