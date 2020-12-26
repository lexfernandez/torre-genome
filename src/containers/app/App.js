import React from 'react';
import 'antd/dist/antd.dark.css';
import {BrowserRouter} from 'react-router-dom';
import MainLayout from '../layout/index';

function App() {
  return (
    <BrowserRouter>
      <MainLayout />
    </BrowserRouter>
  );
}

export default App;
