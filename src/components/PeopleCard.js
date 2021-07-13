import React from 'react';

export default function People({info, changeFavorite, isFavorite}) {
  console.log(isFavorite);

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
