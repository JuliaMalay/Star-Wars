import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  mainHeader: {
    position: 'relative',
    color: theme.palette.common.white,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  mainHeaderContent: {
    position: 'relative',
    padding: theme.spacing(1),
  },
  appBar: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  toolBar: {},
  nav: {
    textDecoration: 'none',
    display: 'inline',
    padding: '5px',
    letterSpacing: '1px',
    margin: '0 20px',
    fontSize: '24px',
    fontFamily: 'Fredoka One',
    transition: '.3s ease-in-out',
    backgroundImage:
      'linear-gradient(#fff700 50%, #fff700 50%), linear-gradient(silver 50%, silver 50%)',
    backgroundPosition: 'left bottom',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '0 .063em, 100% .063em',
    color: 'silver',
    paddingBottom: '.188em',
    transition: 'background-size .5s',
    '&:hover': {
      backgroundSize: '100% .063em, 100% .063em',
      backgroundPosition: 'left bottom',
    },
  },
  typography: {
    fontSize: 12,
  },
  logo: {
    display: 'block',
    minWidth: '200px',
    minHeight: '100px',
    margin: '0 auto',
    boxSizing: 'border-box',
    backgroundImage:
      'url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png)',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  cardMedia: {
    position: 'relative',
    paddingTop: '137.5%',
    // overflow: 'hidden',
  },
  card: {
    display: 'block',
    height: '100%',
    '&:hover': {
      // border: '2px solid grey',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
  pagination: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '50px',
    justifyContent: 'center',
    justifyItems: 'center',
    display: 'flex',
  },
  container: {
    minHeight: '100%',
    position: 'relative',
    paddingBottom: '70px',
  },
  cardMediaFavorite: {
    width: '80px',
    height: '110px',
  },
  root: {
    display: 'flex',
    margin: '10px',
    alignItems: 'center',
    '&:hover': {
      // border: '2px solid grey',
      boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    },
  },
}));

export default useStyles;
