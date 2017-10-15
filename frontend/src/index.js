import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div className="route-container">
        <Route exact path="/" component={App} />
        <Route exact path="/category/:name" component={App} />
        <Route exact path="/post/:id" component={App} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
