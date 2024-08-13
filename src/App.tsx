import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { themeChange } from 'theme-change';

import Footer from './template/footer/Footer';
import Header from './template/header/Header';
import Sidebar from './template/sidebar/Sidebar';
import './App.css';

function App() {
  useEffect(() => {
    // theme change function initializer
    themeChange(true);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <Sidebar />
        <div className="drawer-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
