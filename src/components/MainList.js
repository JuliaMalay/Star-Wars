import React from 'react';
import {useEffect} from 'react';
import People from './PeopleCard';
import {saveState, loadState} from './LocaleStorage';
import {Container, Grid} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';
import useStyles from './style';
import SearchBar from './SearchBar';

export default function MainList({setIndexPage, indexPage}) {
  const classes = useStyles();
  const [page, setPage] = React.useState({
    previous: null,
    next: null,
    count: 0,
  });
  const [timer, setTimer] = React.useState(null);
  const [favorite, setFavorite] = React.useState([]);
  const [gender, setGender] = React.useState('all');

  const changeGender = (gender) => {
    setGender(gender);
  };

  function getPage(ipage, isRefrash = false) {
    setIndexPage(isRefrash ? 1 : ipage);
    try {
      let search = isRefrash ? '' : page.search ?? '';

      fetch(`https://swapi.dev/api/people/?${search}page=${ipage}`)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setPage({...data, search});
        });
    } catch (e) {
      console.log(e);
    }
  }

  React.useEffect(() => window.scrollTo(0, 0), [indexPage]);

  React.useEffect(() => {
    try {
      setFavorite(loadState('favorite') ?? []);
    } catch (e) {
      console.log(e);
    }
    getPage(indexPage);
  }, []);

  function search(name) {
    setIndexPage(1);
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);

        setPage({...data, search: `search=${name}&`});
      });
  }
  function changeFavorite(url) {
    let index = favorite.findIndex((item) => item === url);
    if (index === -1) {
      saveState('favorite', JSON.stringify([...favorite, url]));
      setFavorite([...favorite, url]);
    } else {
      const newFavorite = favorite.filter((item) => item !== url);
      setFavorite(newFavorite);
      saveState('favorite', JSON.stringify(newFavorite));
    }
  }

  function checkPage() {
    let count = Math.ceil(page.count / 10);
    if (count === 0) return null;
    return (
      <Pagination
        page={indexPage}
        count={count}
        onChange={(e, p) => getPage(p)}
        color="primary"
        size="large"
        shape="rounded"
        variant="outlined"
        className={classes.pagination}
      />
    );
  }
  const list = (page.results ?? []).filter(
    (item) => item.gender === gender || gender === 'all'
  );
  return (
    <div className={classes.container}>
      <SearchBar
        gender={gender}
        changeGender={changeGender}
        onChange={(e) => {
          clearTimeout(timer);
          let t = setTimeout(() => {
            if (e.target.value.length === 0) {
              getPage(indexPage, true);
            } else {
              search(e.target.value);
            }
          }, 1000);
          setTimer(t);
        }}
      />
      <Container maxWidth="md" style={{marginTop: '20px'}}>
        {list.length === 0 ? (
          <div style={{textAlign: 'center'}}>
            <h3>Nothing found on this page</h3>
          </div>
        ) : (
          <Grid container spacing={4}>
            {list.map((item) => {
              let parts = item.url.split('/');
              let lastSegment = parts.pop() || parts.pop();
              let image = `https://starwars-visualguide.com/assets/img/characters/${lastSegment}.jpg`;
              return (
                <People
                  info={item}
                  image={image}
                  changeFavorite={changeFavorite}
                  isFavorite={
                    favorite.find((url) => url === item.url) !== undefined
                      ? true
                      : false
                  }
                  key={item.name}
                />
              );
            })}
          </Grid>
        )}
        {checkPage()}
      </Container>
    </div>
  );
}
