import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './header/header';
import ScrollToTop from './scroll_to_top';
import Navigate from './navigate/navigate';
import News from './news/news';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <ScrollToTop />
        <Header />
        <Navigate />
        <Routes>
          <Route path='/news' element={<News />} />
          <Route path='*' element={<News />} />
          <Route />
        </Routes>
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


