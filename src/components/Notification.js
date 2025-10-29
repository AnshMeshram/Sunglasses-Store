import { useEffect } from 'react';
import { FaCheck, FaTimes, FaTrash, FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Notification.css';

function Notification({ message, type = 'success', isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <FaShoppingCart />;
      case 'error':
        return <FaTimes />;
      case 'remove':
        return <FaTrash />;
      case 'cart-add':
        return <FaHeart />;
      default:
        return <FaCheck />;
    }
  };

  return (
    <div className={`notification ${type} ${isVisible ? 'show' : ''}`}>
      <div className="notification-icon">
        {getIcon()}
      </div>
      <div className="notification-content">
        <span className="notification-message">{message}</span>
        {type === 'success' && (
          <div className="notification-action">
            <FaCheck className="success-check" />
          </div>
        )}
      </div>
      <button className="notification-close" onClick={onClose}>
        <FaTimes />
      </button>
    </div>
  );
}

export default Notification;