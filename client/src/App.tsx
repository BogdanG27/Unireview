import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Typography } from 'antd';
import AboutPage from './Pages/AboutPage/AboutPage';
const { Title, Paragraph, Text, Link } = Typography;

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


function Home(props: { name: string }) {
  return <Typography>
    <Title>{props.name}</Title>
    <Paragraph>LALALAL</Paragraph>
  </Typography>;
}

