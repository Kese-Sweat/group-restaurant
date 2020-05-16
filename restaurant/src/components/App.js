import React from 'react';
import '../styles/App.css';
import '../styles/Cards.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Landing from './Landing'

export default () => <div>
  <Provider store={store}>
    <Landing>
    </Landing>
  </Provider>
</div>
