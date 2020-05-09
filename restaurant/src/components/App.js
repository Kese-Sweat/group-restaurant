import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Menu from './Menu'

export default () => <div>
  <Provider store={store}>
    <Menu />
  </Provider>
</div>
