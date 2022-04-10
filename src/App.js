import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './comoponents/Header/Header';
import Home from './comoponents/Home/Home';
import Login from './comoponents/Login/Login';
import Orders from './comoponents/Orders/Orders';
import Products from './comoponents/Products/Products';
import Register from './comoponents/Register/Register';
import RequireAuth from './comoponents/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/products' element={
          <RequireAuth>
            <Products></Products>
          </RequireAuth>
        }></Route>
        <Route path="/orders" element={
          <RequireAuth>
            <Orders></Orders>
          </RequireAuth>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;