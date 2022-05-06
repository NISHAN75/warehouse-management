import logo from "./logo.svg";
import "./App.css";
import Home from "./component/Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Pages/Share/Header/Header";
import { Route, Routes } from "react-router-dom";
import Footer from "./component/Pages/Share/Footer/Footer";
import NotFound from "./component/Pages/NotFound/NotFound";
import Login from "./component/Pages/Login/Login/Login";
import Register from "./component/Pages/Login/Register/Register";
import { ToastContainer } from "react-toastify";
import ProductDeatils from "./component/Pages/ProductDeatils/ProductDeatils";
import RequireAuth from "./component/Pages/Login/RequireAuth/RequireAuth"
import AddItems from "./component/Pages/AddItems/AddItems";
import Manages from "./component/Pages/ManagesInventory/Manages/Manages";
import MyItems from "./component/Pages/MyItems/MyItems";
import Blogs from "./component/Pages/Blogs/Blogs";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/addItems" element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path="/manage" element={
          <RequireAuth>
            <Manages></Manages>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/blog" element={<Blogs></Blogs>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ProductDeatils></ProductDeatils>
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </div>
  );
}

export default App;
