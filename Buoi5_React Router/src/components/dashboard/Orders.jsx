import React from 'react';

const Orders = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#fffbe6', borderRadius: '8px' }}>
      <h2>📦 Đơn hàng của bạn</h2>
      <ul>
        <li>Đơn hàng #101 - Trạng thái: Đang giao</li>
        <li>Đơn hàng #102 - Trạng thái: Đã hoàn thành</li>
        <li>Đơn hàng #103 - Trạng thái: Đã hủy</li>
      </ul>
    </div>
  );
};

export default Orders;