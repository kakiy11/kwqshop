import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '../styles/settings.css';

const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const [notifications, setNotifications] = useState<boolean>(true);
  const [twoFactor, setTwoFactor] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('ru');
  const [theme, setTheme] = useState<string>('dark');

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value);
  };

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    setTheme(e.target.value);
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <button className="back-button" onClick={() => navigate('/market')}>
          ← Назад в магазин
        </button>
        <h1>⚙️ Настройки профиля</h1>
      </div>

      <div className="settings-content">
        <div className="settings-section">
          <h3>🔔 Уведомления</h3>
          <div className="setting-item">
            <label>Email уведомления о покупках</label>
            <button 
              className={`toggle-switch ${notifications ? 'active' : ''}`}
              onClick={() => setNotifications(!notifications)}
            >
              {notifications ? 'Вкл' : 'Выкл'}
            </button>
          </div>
        </div>

        <div className="settings-section">
          <h3>🔒 Безопасность</h3>
          <div className="setting-item">
            <label>Двухфакторная аутентификация</label>
            <button 
              className={`toggle-switch ${twoFactor ? 'active' : ''}`}
              onClick={() => setTwoFactor(!twoFactor)}
            >
              {twoFactor ? 'Вкл' : 'Выкл'}
            </button>
          </div>
          <button className="settings-button">Изменить пароль</button>
          <button className="settings-button">Привязать телефон</button>
        </div>

        <div className="settings-section">
          <h3>🌐 Язык и интерфейс</h3>
          <div className="setting-item">
            <label>Язык</label>
            <select value={language} onChange={handleLanguageChange}>
              <option value="ru">Русский</option>
              <option value="en">English</option>
            </select>
          </div>
          <div className="setting-item">
            <label>Тема</label>
            <select value={theme} onChange={handleThemeChange}>
              <option value="dark">Тёмная</option>
              <option value="light">Светлая</option>
            </select>
          </div>
        </div>

        <button className="save-button" onClick={() => alert('Настройки сохранены!')}>
          💾 Сохранить изменения
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;