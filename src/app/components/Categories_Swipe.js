import React from 'react';
import { connect } from 'react-redux';
import Paper from 'material-ui/Paper';
import SwipeableViews from 'react-swipeable-views';
import { Link } from 'react-router';

const mapStateToProps = state => ({
    categories: state.categories,
  }
);

class Categories extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <SwipeableViews enableMouseEvents={true}>
        {categories.map(category => (
          <Paper key={category.id} className="category paperContent center">
            <Link key={category.id} to={`/category/${category.id}`}>{category.name}</Link>
          </Paper>
        ))}
      </SwipeableViews>
    );
  }
}

export default connect(mapStateToProps)(Categories);
