
import './App.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/ContactPage/ContactPage';

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<ContactPage/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
