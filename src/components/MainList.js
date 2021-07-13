import React from 'react';
import People from './PeopleCard';
import {saveState, loadState} from './LocaleStorage';

export default function MainList() {
  const [people, setPeople] = React.useState([]);
  const [timer, setTimer] = React.useState(null);
  const [favorite, setFavorite] = React.useState([]);
  React.useEffect(() => {
    try {
      setFavorite(loadState('favorite') ?? []);
    } catch (e) {
      console.log(e);
    }

    try {
      fetch('https://swapi.dev/api/people')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setPeople(data.results);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  function search(name) {
    fetch(`https://swapi.dev/api/people/?search=${name}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setPeople(data.results);
      });
  }
  function changeFavorite(url) {
    let index = favorite.findIndex((item) => item === url);
    console.log(index);
    if (index === -1) {
      saveState('favorite', JSON.stringify([...favorite, url]));
      setFavorite([...favorite, url]);
    } else {
      const newFavorite = favorite.filter((item) => item !== url);
      setFavorite(newFavorite);
      saveState('favorite', JSON.stringify(newFavorite));
    }
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
        {people.map((item) => {
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
    </div>
  );
}
