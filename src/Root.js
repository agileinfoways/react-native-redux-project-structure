import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './store';
import ReduxNavigation from './ReduxNavigation'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))
const Root = () => {
 return (
  <Provider store={store}>
   <ReduxNavigation />
  </Provider>
 )
}

export default Root;