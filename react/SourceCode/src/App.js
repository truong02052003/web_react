import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { Routes, Route } from 'react-router-dom';
import Homemain from './components/home/homemain';
import Residentialmain from './components/residential/residentialmain';
import Commercialmain from './components/commercial/commercialmain';
import Methodsmain from './components/methods/methodsmain';
import Developmentsmain from './components/developments/developmentsmain';
import Contactmain from './components/contact/contactmain';
import Products from './components/products';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Homemain />} />
        <Route path='/residential' element={<Residentialmain />} />
        <Route path='/commercial' element={<Commercialmain />} />
        <Route path='/methods' element={<Methodsmain />} />
        <Route path='/developments' element={<Developmentsmain />} />
        <Route path='/contact' element={<Contactmain />} />
        <Route path='/products' element={<Products />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
