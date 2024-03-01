import logo from './logo.svg';
import './App.css';
import TopHead from './component/TopHead';
import Header from './component/Header';
import './image/indian-emblemm.png';
import Footer from './component/Footer';
import Data from './component/Data';
import { Route, Switch, Router } from 'react-router-dom';




function App() {
  return (
    <>



      <Header />
      <Data />
      <Footer />
    </>

  );
}

export default App;
