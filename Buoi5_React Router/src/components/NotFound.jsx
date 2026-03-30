
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Not Found</h1>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
};

export default NotFound;