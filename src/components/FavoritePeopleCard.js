import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress,
} from '@material-ui/core';
import useStyles from './style';

export default function FavoritePeople({url, image}) {
  const classes = useStyles();
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
  return (
    <Grid item xs={12} sm={12} md={12}>
      <Card className={classes.root}>
        <CardMedia
          image={image}
          title={infoFavorite.name}
          className={classes.cardMediaFavorite}
        ></CardMedia>
        <CardContent>
          <Typography variant="h5" style={{fontFamily: 'Play'}}>
            {infoFavorite.name ?? <CircularProgress />}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
