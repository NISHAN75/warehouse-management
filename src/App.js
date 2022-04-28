import logo from './logo.svg';
import './App.css';
import Home from './component/Pages/Home/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Pages/Share/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Footer from './component/Pages/Share/Footer/Footer';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
