import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import Profile from './Pages/Profile';
import Cart from './Pages/Cart';
import Header from './Components/Header';
import About from './Pages/About';
import CupCakes from './Pages/CupCakes';
import Juice from './Pages/Juice';
import Footer from './Components/Footer';
import CupcakeDetail from './Pages/cupcakeDetail';
import JuiceDetail from './Pages/JuiceDetail';


export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/cup-cakes" element={<CupCakes />} />
        <Route path="/juice" element={<Juice />} />
        <Route path="/cupcakeDetail/:id" element={<CupcakeDetail />} />
        <Route path="/juiceDetail/:id" element={<JuiceDetail />} />
      </Routes>
    <Footer />
    </BrowserRouter>
  );
}
