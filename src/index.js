import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import StaticApp from './static_website/App';
import DigitalStaticApp from './digital-business-card/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <DigitalStaticApp />
  </StrictMode>
);
