
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <div class="boxed_wrapper">

      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
