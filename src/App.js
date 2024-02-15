import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/home';
import Form from './components/form';
import Table from './components/table';
import User from './components/user';
import { useState } from 'react';
import Context from './helper/fileContext';
import UseRef from './hooks/useref';
import Reactmemo from './hooks/reactmemo';

function App() {

  const [buttonLabel, setButtonLabel] = useState('Submit label')

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/form",
  //     element: <Form />,
  //   },
  // ]);

  return (
    <Context.Provider value={{ buttonLabel, setButtonLabel }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
          <Route path='/form/:id' element={<Form />} />
          <Route path='/table' element={<Table />} />
          <Route path='/user' element={<User />} />
          <Route path='/useref' element={<UseRef />} />
          <Route path='/reactmemo' element={<Reactmemo />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>

    // <RouterProvider router={router} />
  );
}

export default App;
