import React from 'react';

export default function FavoritePeople({url}) {
  const [infoFavorite, setInfoFavorite] = React.useState({});
  React.useEffect(() => {
    try {
      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setInfoFavorite(data);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  return <div>{infoFavorite.name ?? '---'}</div>;
}
