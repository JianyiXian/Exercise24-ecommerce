import './App.css';
import NavList from './components/NavList'
import Footer from './components/Footer'
import Home from './components/Home'
import ProductList from './components/ProductList'
import About from './components/About'
import Contact from './components/Contact'
import FAQ from './components/FAQ';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div style={{ backgroundColor: "#fae1dd" }}>
      <NavList />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path="*" element={<Home />} />

      </Routes>



      <Footer />
    </div>
  );
}

export default App;
