import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page/HomePage';
import { Footer, Header } from './components';
import { LoginPage } from './pages/login-page/LoginPage';
import { SignupPage } from './pages/signup-page/SignupPage';

function App() {
  return (
    <>
    <div className="app">
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/signup' element={<SignupPage/>} />
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
