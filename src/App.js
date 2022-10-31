import React from 'react'
import { Container } from '@material-ui/core'
import Navbar from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom';
import Auth from './component/Auth/Auth';


function App() {
  return (
    <Container>
     <Navbar />
     <Routes>
      <Route index path='/' element={<Navigate replace to='/post'/>} />
      <Route path='/post' element={<Home/>}/>
      <Route path='/post/search' element={<Home />}/>
      <Route path='/auth' element={<Auth />}/>
     </Routes>
    </Container>
  );
}

export default App;
