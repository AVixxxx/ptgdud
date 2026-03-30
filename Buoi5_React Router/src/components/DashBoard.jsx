import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
      <aside style={{ width: '200px', borderRight: '1px solid #ccc' }}>
        <h3>Dashboard</h3>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Link to="/dashboard/profile">Profile</Link>
          <Link to="/dashboard/orders">Orders</Link>
          <Link to="/dashboard/settings">Settings</Link>
        </nav>
      </aside>

      <main style={{ flex: 1 }}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default Dashboard;