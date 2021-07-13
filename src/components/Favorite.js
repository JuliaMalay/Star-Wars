import React from 'react';
import {loadState} from './LocaleStorage';
import FavoritePeople from './FavoritePeopleCard';

export default function Favorite() {
  const [favoritePeoples, setFavoritePeoples] = React.useState([]);
  React.useEffect(() => {
    try {
      setFavoritePeoples(loadState('favorite') ?? []);
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <div>My favorite:</div>
      {favoritePeoples.map((item) => {
        return <FavoritePeople url={item} key={item} />;
      })}
    </div>
  );
}
