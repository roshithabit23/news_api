import React from 'react'

const Newsitem = ({ title, description, image, url }) => {
  return (
    <div
      onClick={() => window.open(url, "_blank")}
      style={{
        display: 'grid',
        gap: '10px',
        border: '1px solid #ddd',
        borderRadius: '10px',
        padding: '12px',
        cursor: 'pointer',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
      }}
      onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-3px)'}
      onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <img
        src={image || 'https://dummyimage.com/300x180/000/fff'}
        alt="News"
        style={{
          width: '100%',
          height: '180px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />

      <h4 style={{ margin: 0 }}>{title}</h4>

      <p style={{ margin: 0, color: '#555', fontSize: '14px' }}>
        {description || 'No description for this news'}
      </p>
    </div>
  )
}

export default Newsitem
