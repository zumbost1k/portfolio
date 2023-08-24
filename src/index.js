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
import About from './about/about';
import Content from './content/contentBody';
import Footer from './footer/footer';


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
          <Route path='/about' element={<About />} />
          <Route path='/content' element={<Content />} />
          <Route path='*' element={<News />} />
          <Route />
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


