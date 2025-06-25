import React from 'react';

const Card = ({ title, content, image, children }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
      {image && <img className="w-full" src={image} alt={title} />}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {content && <p className="text-gray-700 text-base">{content}</p>}
        {children} 
      </div>
    </div>
  );
};

export default Card;
