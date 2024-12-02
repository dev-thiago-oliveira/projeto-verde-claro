import React from 'react';
import { SWRConfig } from 'swr';
import { HomePage } from './pages/HomePage/HomePage.component';
import { swrConfig } from './services/baseService';
import './i18n';

function App() {
  return (
    <SWRConfig value={swrConfig}>
      <HomePage />
    </SWRConfig>);
}

export default App;
