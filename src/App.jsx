import './App.css';
import { BrowserRouter ,Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import ProductDetail from './Pages/ProductDetail';


function App() {
  return (
    <div>
<Home></Home>
   {/* <BrowserRouter>
   <Routes>

<Route path='/' element={<Home/>} exact/>
<Route path='/Product-Detail' element={<ProductDetail/>} exact/>                                     
   </Routes>
    </BrowserRouter> */}
    </div>
);
}
export default App;
