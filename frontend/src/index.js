import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Auth0Provider
    domain="dev-b410so0xxfbbpbba.us.auth0.com"
    clientId="Ex56ueb18BGJv3YuGfHE3sswobqDGl3Q"
    redirectUri={window.location.origin}
  >
    <App />
    </Auth0Provider>
    
  </React.StrictMode>
  
);
