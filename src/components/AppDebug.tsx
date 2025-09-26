import React from 'react';

export function AppDebug() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
      }}>
        <h1 style={{ color: '#333', marginBottom: '20px' }}>
          🎉 App Funcionando!
        </h1>
        <p style={{ color: '#666', fontSize: '18px' }}>
          Se você está vendo esta mensagem, o React está funcionando corretamente.
        </p>
        <p style={{ color: '#999', fontSize: '14px', marginTop: '20px' }}>
          Agora vamos verificar os componentes individuais...
        </p>
      </div>
    </div>
  );
}
