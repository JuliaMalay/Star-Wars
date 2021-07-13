import React from 'react';
import People from './PeopleCard';
import {saveState, loadState} from './LocaleStorage';

export default function MainList() {
  const [page, setPage] = React.useState({previous: null, next: null});
  const [timer, setTimer] = React.useState(null);
  const [favorite, setFavorite] = React.useState([]);
  function getPage(page = '') {
    // `/?page=${index}`
    try {
      fetch(`https://swapi.dev/api/people` + page)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);

          setPage(data);
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
    getPage();
  }, []);

  function search(name) {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPage(data);
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
    let currentPage = 0;
    if (page.previous !== null) {
      currentPage = +page.previous.slice(-1) + 1;
    } else if (page.next !== null) {
      currentPage = page.next.slice(-1) - 1;
    } else {
      return null;
    }
    return (
      <div>
        {page.previous !== null && (
          <button onClick={() => getPage(`/?page=${currentPage - 1}`)}>
            {currentPage - 1}
          </button>
        )}
        <button>{currentPage}</button>
        {page.next !== null && (
          <button onClick={() => getPage(`/?page=${currentPage + 1}`)}>
            {currentPage + 1}
          </button>
        )}
      </div>
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
            search(e.target.value);
          }, 1000);
          setTimer(t);
        }}
      />
      <div>People from Star Wars:</div>
      <div>
        {(page.results ?? []).map((item) => {
          return (
            <People
              info={item}
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
      </div>
      {checkPage()}
    </div>
  );
}
