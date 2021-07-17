import React from 'react';
import People from './PeopleCard';
import {saveState, loadState} from './LocaleStorage';
import {Container, Grid} from '@material-ui/core';
import {Pagination} from '@material-ui/lab';

export default function MainList({setIndexPage, indexPage}) {
  const [page, setPage] = React.useState({
    previous: null,
    next: null,
    count: 0,
  });
  const [timer, setTimer] = React.useState(null);
  const [favorite, setFavorite] = React.useState([]);
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
      />
    );
  }

  return (
    <div>
      <label forhtml="search">Search people:</label>
      <input
        type="search"
        id="search"
        name="search"
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
      <div>
        <Container maxWidth="md">
          <Grid container spacing={4}>
            {(page.results ?? []).map((item) => {
              let parts = item.url.split('/');
              let lastSegment = parts.pop() || parts.pop();
              let image = `https://starwars-visualguide.com/assets/img/characters/${lastSegment}.jpg`;
              // console.log(image);
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
        </Container>
      </div>
      {checkPage()}
    </div>
  );
}
