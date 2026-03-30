import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import Dashboard from "./components/Dashboard";
import Profile from "./components/dashboard/Profile";
import Orders from "./components/dashboard/Orders";
import Settings from "./components/dashboard/Settings";
import NotFound from "./components/NotFound";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "15px", backgroundColor: "#f0f0f0", marginBottom: "20px" }}>
        <Link to="/">Home</Link> | 
        <Link to="/products"> Products</Link> | 
        <Link to="/dashboard"> Dashboard</Link> | 
        <Link to="/about"> About</Link> | 
        <Link to="/contact"> Contact</Link>
      </nav>

      <div style={{ padding: "0 20px" }}>
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
         
          <Route path="/products" element={<ProductList />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="profile" element={<Profile />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;