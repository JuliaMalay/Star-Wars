import React from 'react';
import {loadState} from './LocaleStorage';
import {Container, Grid} from '@material-ui/core';
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
      <Container maxWidth="md">
        <Grid container spacing={1}>
          {favoritePeoples.map((item) => {
            let parts = item.split('/');
            let lastSegment = parts.pop() || parts.pop();
            let image = `https://starwars-visualguide.com/assets/img/characters/${lastSegment}.jpg`;
            return <FavoritePeople url={item} image={image} key={item} />;
          })}
        </Grid>
      </Container>
    </div>
  );
}
