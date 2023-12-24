import React from 'react';
import ReactDOM from 'react-dom/client';
import './../styles/index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import UserProviderContext from './context/UserProviderContext';
import { ThemeProvider } from './context/ThemeProviderContext';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <UserProviderContext>
        <ThemeProvider>
          <RouterProvider router={router}/>
        </ThemeProvider>
      </UserProviderContext>
    </Provider>
  </React.StrictMode>
);


