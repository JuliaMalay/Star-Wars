import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#ffffff',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
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
    backgroundColor: 'black',
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
    paddingBottom: '100%',
    overflow: 'hidden',
  },
  card: {
    display: 'block',
    height: '100%',
  },
}));

export default useStyles;
