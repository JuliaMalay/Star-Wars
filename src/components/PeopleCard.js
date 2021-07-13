import React from 'react';

export default function People({info, changeFavorite, isFavorite}) {
  return (
    <div>
      {info.name}
      <button
        onClick={() => {
          changeFavorite(info.url);
        }}
      >
        {isFavorite ? '❤️' : '🖤'}
      </button>
    </div>
  );
}
