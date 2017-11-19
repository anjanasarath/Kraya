import React from 'react';
import { Link } from 'react-router';
import Paper from 'material-ui/Paper';

export default class Product extends React.Component {
  render() {
    const  { id, name, price, category, imagePath } = this.props;
    return (
      <Paper className="product paperContent center" zDepth={5} >
        <Link to={`/product/${id}`}>
          <div>
            <img src={`/assets/${imagePath}`} alt={name} />
            <h4> {name} ({category})</h4>
            <h5>Rs. {price.toFixed(2)}</h5>
          </div>
        </Link>
      </Paper>
    );
  }
}
