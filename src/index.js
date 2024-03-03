import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import StaticApp from './static_website/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <StaticApp />
  </StrictMode>
);
