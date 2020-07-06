import React from 'react';
import Header from './common/header';
import {Provider} from 'react-redux';
import store from './store'
import {GlobalStyle} from './style.js'
import {GlobalIconFont} from './statics/iconfont/iconfont'

function App() {
  return (
    <Provider store={store}>
      <Header/>
    </Provider>
  );
}

export default App;
