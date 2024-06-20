import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NavbarContainer from './Components/Navbar';
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';

function App() {
  return (
      <CartProvider>

      <Container>
        <NavbarContainer></NavbarContainer>
        <BrowserRouter>
          <Routes>
            {/* http://localhost:3000/ -> Home */}
            <Route index element={<Store/>}/>
            {/* http://localhost:3000/success -> Success */}
            <Route path='success' element={<Success/>}/>
            {/* http://localhost:3000/cancel -> Cancel */}
            <Route path='cancel' element={<Cancel/>}/>
          </Routes>
        </BrowserRouter>
      </Container>
      </CartProvider>
  );
}

export default App;