import { Layout } from 'antd';
import React from 'react';
import './App.css';
import Banner from './components/Banner';
import AppHeader from './components/Header';

function App() {
  return (
    <Layout>
      <AppHeader />
      <Banner />
    </Layout>
  )
}

export default App
