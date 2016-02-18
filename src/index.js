import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { App } from './App';
import configureStore from './redux/store/configureStore';
import DevTools from './redux/devTools';


const store =  configureStore({});

store.dispatch({type: 'test'});
store.dispatch({type: 'test'});
store.dispatch({type: 'test'});
store.dispatch({type: 'test'});

render(
<Provider store={ store }>
  <div>
    <App />
    <DevTools />
  </div>
</Provider>,
document.getElementById('root'));
