import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page/HomePage';
import { Footer, Header } from './components';
import { LoginPage } from './pages/login-page/LoginPage';
import { SignupPage } from './pages/signup-page/SignupPage';
import { Profile } from './pages/profile/Profile';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    <div className="app">
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
