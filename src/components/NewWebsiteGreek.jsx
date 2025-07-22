import React from 'react';

function NewWebsite() {
  return (
    <div
      style={{
        textAlign: 'center',
        marginTop: '150px',
        backgroundColor: '#e0f7ff',
        padding: '40px',
        borderRadius: '20px',
        maxWidth: '600px',
        marginLeft: 'auto',
        marginRight: 'auto',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h3 style={{ fontSize: '28px', color: '#003366', marginBottom: '10px' }}>
        🌐 Νέα Ιστοσελίδα
      </h3>
      <p style={{ fontSize: '18px', color: '#333', marginBottom: '20px' }}>
        Μεταφερθήκαμε σε μια νέα ιστοσελίδα. Επισκεφθείτε τώρα!
      </p>
      <a
        href="https://www.bigbluehotel.gr"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          padding: '10px 20px',
          fontSize: '16px',
          color: '#fff',
          backgroundColor: '#007bff',
          textDecoration: 'none',
          borderRadius: '8px',
          fontWeight: 'bold',
          transition: 'background-color 0.3s ease',
        }}
        onMouseOver={e => (e.target.style.backgroundColor = '#0056b3')}
        onMouseOut={e => (e.target.style.backgroundColor = '#007bff')}
      >
        BigBlueHotel.GR
      </a>
    </div>
  );
}

export default NewWebsite;
