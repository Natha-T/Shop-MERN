import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store, persistor } from './redux/store/store';
import { Provider } from'react-redux';

import { PersistGate } from 'redux-persist/integration/react';
import { ToastContainer } from 'react-toastify'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>    
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
   </PersistGate>
     </Provider>
  </React.StrictMode>

);

