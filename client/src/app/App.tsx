import React from 'react';
import './App.css';
import MenuBar from '../components/MenuBar/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/AboutPage/AboutPage';

function App() {
  return (
    <Router>
      <MenuBar />
      <Routes>
        <Route path='/' element={<Home name="Home" />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/explore' element={<Home name="Explore" />}>
        </Route>
      </Routes>
      <Routes>
        <Route path='/about' element={<AboutPage />}>
        </Route>
      </Routes>
    </Router>);
}

export default App;


function Home(props: { name: string; }) {
  return <h2>{props.name}</h2>;
}

