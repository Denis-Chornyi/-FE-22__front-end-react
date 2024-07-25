import React, { useEffect, useState } from 'react';

const ConnectionStatus = () => {
  const [status, setStatus] = useState('online');

  useEffect(() => {
    const isOnline = () => {
      setStatus('online');
    };

    const isOffline = () => {
      setStatus('offline');
    };
    window.addEventListener('online', isOnline);
    window.addEventListener('offline', isOffline);

    return () => {
      window.removeEventListener('online', isOnline);
      window.removeEventListener('offline', isOffline);
    };
  });

  const statusClass = status === 'offline' ? 'status status_offline' : 'status';

  return <div className={statusClass}>{status}</div>;
};

export default ConnectionStatus;
