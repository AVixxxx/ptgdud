import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p><strong>Product ID:</strong> {id}</p>
      
      <Link to="/products"> Quay lại danh sách</Link>
    </div>
  );
};

export default ProductDetail;