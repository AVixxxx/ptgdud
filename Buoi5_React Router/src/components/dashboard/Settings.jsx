import React from 'react';

const Settings = () => {
  return (
    <div style={{ padding: '10px', backgroundColor: '#f0f5ff', borderRadius: '8px' }}>
      <h2>⚙️ Cài đặt tài khoản</h2>
      <div>
        <label>
          <input type="checkbox" /> Nhận thông báo qua Email
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <button>Đổi mật khẩu</button>
      </div>
    </div>
  );
};

export default Settings;