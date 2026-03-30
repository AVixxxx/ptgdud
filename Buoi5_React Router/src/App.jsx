import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Dashboard from './components/DashBoard';
import Profile from './components/dashboard/Profile';
import Orders from './components/dashboard/Orders';
import Settings from './components/dashboard/Settings';



function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link> | <Link to="/dashboard"> Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<Orders />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}


export default App; 