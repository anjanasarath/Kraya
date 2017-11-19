import React from 'react';
import { Link } from 'react-router';

const quantityOptions = (count) => {
  const qOptions = [];
  for (let i = 0; i < count; i++) {
    qOptions.push(i + 1);
  }

  return qOptions;
}

class CartItem extends React.Component {
  render() {
    const { id, name, price, count, imagePath, stockCount, onQtyChange, onRemoveClick } = this.props;
    return (
        <div>
          <Link to={`/product/${id}`}>
            <img src={`/assets/${imagePath}`} alt={name} />
          </Link>
          <div>
            <Link to={`/product/${id}`} >
                <h1>{name}</h1>
            </Link>
            <div>
              <span>
                Rs. {price.toFixed(2)}
              </span><br></br>
              <span>Quantity:
                <select value={count} onChange={e => onQtyChange(e, id)}>
                  {quantityOptions(stockCount).map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
              </span>
            </div>
          </div>
          <a href="#" onClick={e => onRemoveClick(e, id)}>Delete item!</a>
        </div>
    );
  }
}

class CartItems extends React.Component {
  render(){
    const { cart, onQtyChange, onRemoveClick } = this.props;
    if (!cart.length) {
      return <p>There are no items in your cart!</p>;
      }

      return (
        <div>
          {cart.map(p => (
            <CartItem
              key={p.id}
              id={p.id}
              name={p.name}
              price={p.price}
              count={p.count}
              imagePath={p.imagePath}
              stockCount={p.stockCount}
              onQtyChange={(e, id) => onQtyChange(e, id)}
              onRemoveClick={(e, id) => onRemoveClick(e, id)}
            />
          ))}
        </div>
      );
    }
  }

export default CartItems;
