import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/admin.css';

interface User {
  id: number;
  username: string;
  balance: number;
  status: string;
  registered: string;
}

interface Order {
  id: number;
  user: string;
  amount: number;
  status: string;
  date: string;
}

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('users');

  const users: User[] = [
    { id: 1, username: 'ProGamer', balance: 1247.50, status: 'active', registered: '2024-01-15' },
    { id: 2, username: 'SniperPro', balance: 890.00, status: 'active', registered: '2024-02-20' },
    { id: 3, username: 'NoobMaster', balance: 45.30, status: 'banned', registered: '2024-01-10' },
  ];

  const orders: Order[] = [
    { id: 1001, user: 'ProGamer', amount: 180.99, status: 'completed', date: '2024-03-15' },
    { id: 1002, user: 'SniperPro', amount: 499.99, status: 'pending', date: '2024-03-16' },
    { id: 1003, user: 'ProGamer', amount: 169.99, status: 'completed', date: '2024-03-14' },
  ];

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className="admin-container">
      <div className="admin-header">
        <button className="back-button" onClick={() => navigate('/market')}>
          ← Назад в магазин
        </button>
        <h1>🛡️ Админ панель</h1>
      </div>

      <div className="admin-tabs">
        <button 
          className={`tab ${activeTab === 'users' ? 'active' : ''}`} 
          onClick={() => handleTabChange('users')}
        >
          👥 Пользователи
        </button>
        <button 
          className={`tab ${activeTab === 'orders' ? 'active' : ''}`} 
          onClick={() => handleTabChange('orders')}
        >
          📦 Заказы
        </button>
        <button 
          className={`tab ${activeTab === 'accounts' ? 'active' : ''}`} 
          onClick={() => handleTabChange('accounts')}
        >
          🎮 Аккаунты
        </button>
        <button 
          className={`tab ${activeTab === 'stats' ? 'active' : ''}`} 
          onClick={() => handleTabChange('stats')}
        >
          📊 Статистика
        </button>
      </div>

      <div className="admin-content">
        {activeTab === 'users' && (
          <div className="users-table">
            <h3>Управление пользователями</h3>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Баланс</th>
                  <th>Статус</th>
                  <th>Действия</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>${user.balance.toFixed(2)}</td>
                    <td><span className={`status-badge ${user.status}`}>{user.status}</span></td>
                    <td>
                      <button className="action-btn">✏️</button>
                      <button className="action-btn danger">🗑️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="admin-button">➕ Добавить пользователя</button>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="orders-table">
            <h3>Управление заказами</h3>
            <table>
              <thead>
                <tr>
                  <th>ID заказа</th>
                  <th>Пользователь</th>
                  <th>Сумма</th>
                  <th>Статус</th>
                  <th>Дата</th>
                </tr>
              </thead>
              <tbody>
                {orders.map(order => (
                  <tr key={order.id}>
                    <td>{order.id}</td>
                    <td>{order.user}</td>
                    <td>${order.amount.toFixed(2)}</td>
                    <td><span className={`status-badge ${order.status}`}>{order.status}</span></td>
                    <td>{order.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="stats-grid">
            <div className="stat-card">
              <h4>Всего пользователей</h4>
              <div className="stat-number">1,247</div>
            </div>
            <div className="stat-card">
              <h4>Продано аккаунтов</h4>
              <div className="stat-number">3,892</div>
            </div>
            <div className="stat-card">
              <h4>Общий оборот</h4>
              <div className="stat-number">$124,890</div>
            </div>
            <div className="stat-card">
              <h4>Активных сессий</h4>
              <div className="stat-number">42</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;