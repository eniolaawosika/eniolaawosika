import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Header from './Components/Header';
import Footer from './Components/Footer';
import About from './Components/About';
import Contact from './Components/Contact';
import Blogs from './Components/Blogs';
import Works from './Components/Works';
import WorkDetails from './Components/WorkDetails';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route  path='/about' element={<About/>}/>
      <Route  path='/blogs' element={<Blogs/>}/>
      <Route  path='/work' element={<Works/>}/>
      <Route  path='/contact' element={<Contact/>}/>
      <Route path='/work/:id' element={<WorkDetails/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
