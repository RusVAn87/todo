import React from 'react';
import ReactDOM from 'react-dom/client';

import './assets/scss/normalize.scss';
import 'react-toastify/dist/ReactToastify.css';
import './assets/scss/style.scss';

// import './index.scss';
import { ToDoListPage } from './pages/ToDoListPage';
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ToDo } from './models/todo-item';
import { NotFound } from './pages/404';
import { ItemDescription } from './pages/ItemDescription';
import { Layout } from './layout/Layout';


const todos: ToDo[] = [
  {
    id: 0,
    text: 'Первое задание',
    isDone: false
  },
  {
    id: 1,
    text: 'Второе задание',
    isDone: true
  },
  {
    id: 2,
    text: 'Третье задание',
    isDone: false
  },
  {
    id: 3,
    text: 'Четвёртое задание',
    isDone: true
  }
]

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <HomePage todos={todos} />
      },
      {
        path: '/todo',
        element: <ToDoListPage />
      },
      {
        path: '/list/:id',
        element: <ItemDescription todos={todos} />
      }
    ]
  },
  {
    path: '*',
    element: <NotFound />
  }
], { basename: '/app/' })

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    {/* <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage todos={todos} />}></Route>
        <Route path='/list/:id' element={<ItemDescription todos={todos} />}></Route>
        <Route path='/todo' element={<ToDoListPage />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter> */}

  </React.StrictMode>
);