import React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import useStyles from './style';

export default function People({info, image, changeFavorite, isFavorite}) {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={image}
          title={info.name}
        ></CardMedia>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" style={{fontFamily: 'Play'}}>
            {info.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={() => {
              changeFavorite(info.url);
            }}
          >
            <FavoriteIcon style={{color: isFavorite ? 'red' : 'silver'}} />
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
