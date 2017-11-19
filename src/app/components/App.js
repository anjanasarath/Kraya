import React from 'react';
import {
  Router,
  Route,
  IndexRoute,
  browserHistory,
} from 'react-router';
import SwipeableViews from 'react-swipeable-views';
import Header from './routes/Header';
import Categories from './Categories_Swipe';
import Category from './routes/Category';
import Selected_Product from './routes/Selected_Product';
import Cart from './routes/Cart';

class App extends React.Component {
  render() {
    return (
        <div>
          <Router history={browserHistory}>
            <Route path="/" component={Header}>
              <IndexRoute component={Categories}/>
              <Route path="category/:id" component={Category}/>
              <Route path="product/:id" component={Selected_Product}/>
              <Route path="cart" component={Cart}/>
            </Route>
          </Router>
        </div>
      );
  }
}

export default App;
