import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
// Redux
import { store } from './app/store'
import { Provider } from 'react-redux'

// import './assets/scss/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';
// import './assets/scss/style.scss';
import { GlobalStyle } from './styles/GlobalStyle';
import { Normalize } from 'styled-normalize';


const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)

  root.render(

    <React.StrictMode>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file.",
  )
}