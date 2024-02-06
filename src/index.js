import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store/store';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import Header from './header/header';
import News from './news/news';
import About from './about/about';
import Content from './content/contentBody';
import Footer from './footer/footer';
const NavigateLinks = React.lazy(() => import('./navigate/navigate'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <NavigateLinks />
        </React.Suspense>

        <Routes>
          <Route path='/news' element={<News />} />
          <Route path='/about' element={<About />} />
          <Route path='/content' element={<Content />} />
          <Route path='*' element={<Navigate to='/content' replace />} />
          <Route />
        </Routes>
        <Footer />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);


