// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from "react-redux";
// import { store } from "@/app/store";
// import '../../client/src/apis/axiosConfig.jsx';
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <Provider store={store}>
//     <App />
//     </Provider>
//   </StrictMode>,
// )
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Provider } from "react-redux";
import { store } from "@/app/store"; // works with alias
import '@/apis/axiosConfig'; // moved inside src

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
