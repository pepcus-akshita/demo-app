import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import ColorContext from "./Context/ColorContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <ColorContext.Provider value={"red"}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
    // </ColorContext.Provider>
);

