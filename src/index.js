import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "./index.css";
import Layout from './Layout/Layout';
import User from './Pages/User';
import { Provider } from 'react-redux';
import mainStore from './ReduxStore/mainStore';
import Team from './Pages/team';





const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <Provider store={mainStore}>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />} >
      <Route path="/" element={<User />}  />
      <Route path="/teams" element={<Team/>}  />

      </Route>
    </Routes>
  </BrowserRouter>
 </Provider>

);




