import './App.css';
import { Routes, Route } from "react-router-dom";
import { HomePage } from './pages/home-page/HomePage';
import { Footer, Header } from './components';

function App() {
  return (
    <>
    <div className="app">
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
        </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
