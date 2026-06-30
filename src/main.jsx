import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log('Starting React mount...');

try {
  const container = document.getElementById('root');
  if (!container) throw new Error('Root container not found');
  
  const root = createRoot(container);
  console.log('Root created, rendering...');
  
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
  console.log('Render call completed');
} catch (error) {
  console.error('FAILED TO MOUNT REACT:', error);
  document.body.innerHTML = '<h1>REACT MOUNT FAILED: ' + error.message + '</h1>';
}
