import React from 'react';
import '../styles/App.css';
import { Provider } from 'react-redux'
import store from '../redux/store'
import Menu from './Menu'
import MenuPhotos from './MenuPhotos'
export default () => <div>
  <Provider store={store}>
    <MenuPhotos></MenuPhotos>
  </Provider>
</div>
