import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/globals.css';

const rootElement = document.getElementById('root');

if (rootElement) {
  // Prerendered HTML provides search engines (Googlebot, Bingbot, LLM web crawlers)
  // with complete semantic <h1>, descriptions, NAP, and structured data in raw HTTP GET.
  // Using React 18 createRoot ensures seamless mounting of client-only capabilities
  // (Three.js WebGL canvas, Lenis smooth scrolling, GSAP ScrollTrigger, and animations)
  // with zero hydration mismatch warnings or console errors.
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
