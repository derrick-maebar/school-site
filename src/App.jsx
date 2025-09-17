import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from "./components/header"
import Footer from './components/footer'
import './App.css'
import AboutPage from './pages/about';
import Contactspage from './pages/contacts';
import Homepage from './pages/home';
import Messagepage from './pages/message';

function App() {
  return (
    <div className='app'>
      <Header />
      <main>
        <h1>school site</h1>
        <p>this is the section that highlights the entire school site</p>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contacts' element={<Contactspage />} />
          <Route path='/message' element={<Messagepage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
