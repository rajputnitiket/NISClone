import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/layout.jsx';
import Home from './component/Home.jsx';
import Archive from './component/Archive.jsx';
import DefaultPage from './component/Default.jsx';
import { store } from './action/store.js';
import { Provider } from 'react-redux';
import './mycss.css';
import './App.css'





const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "news",
        element: <Home />
      },
      {
        path: "archive",
        element: <Archive />
      },
      {
        path: "default",
        element: <DefaultPage />
      }
    ]

  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <React.StrictMode>
        {/* <BrowserRouter>
      <App />
    </BrowserRouter> */}
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </Provider>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
