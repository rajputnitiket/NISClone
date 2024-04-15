import logo from './logo.svg';
import './App.css';
import TopHead from './component/TopHead';
import Header from './component/Header';
import './image/indian-emblemm.png';
import Footer from './component/Footer';
import Data from './component/Data';
import { Route, Switch, Router } from 'react-router-dom';
import News from './component/news';
import './mycss.css';
import './App.css'



function App() {
  return (
    <>

      <Header />
      <News />
      <Footer />
    </>

  );
}

export default App;
