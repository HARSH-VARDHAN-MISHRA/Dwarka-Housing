
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import ContactPage from './Pages/ContactPage/ContactPage';
import PropertyPage from './Pages/PropertyPage/PropertyPage';
import PropertyDetail from './Pages/PropertyDetail/PropertyDetail';
import AboutPage from './Pages/AboutPage/AboutPage';
import BlogPage from './Pages/BlogPage/BlogPage';
import Login from './components/Login/Login';
import ForgetPassword from './components/Login/ForgetPassword';
import SignIn from './components/Login/SignIn';
import OtpSignUp from './components/Login/OtpSignUp';

import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
    <div class="boxed_wrapper">

      <Header/>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/properties' element={<PropertyPage/>} />
        <Route path='/property/detail' element={<PropertyDetail/>} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/blog' element={<BlogPage/>} />
        <Route path='/contact' element={<ContactPage/>} />

          {/* ------- Authentication ---------  */}
          <Route path='/login' element={<Login />} />
          <Route path='/login/forget-password' element={<ForgetPassword />} />
          <Route path='/sign-up' element={<SignIn />} />
          <Route path='/sign-up/confirm-account/:email' element={<OtpSignUp />} />

      </Routes>
      <Footer/>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;
