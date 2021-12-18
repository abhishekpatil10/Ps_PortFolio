
import Header from './Components/Header'
import Home from './Components/Home'
import About from './Components/About'
import Footer from './Components/Footer'
import './App.css';
import Service from './Components/Service';
import Contact from './Components/Contact';
import Portfolio from './Components/Portfolio';
import UiUx from './Components/UiUx';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import Newsletter from './Components/Newsletter'


function App() {
  return (
    <div className="App">
    <Header/>
    <Home/>
    <About/>
    <Service/>
<Portfolio/>
<UiUx/>
<Contact/>
<Newsletter/>
    <Footer/>
    <a href="#header" id="backtotop"><BsFillArrowUpCircleFill/></a>
    </div>
  );
}

export default App;
