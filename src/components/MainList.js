import React from 'react';
import People from './PeopleCard';
export default function MainList() {
  const [people, setPeople] = React.useState([]);
  const [timer, setTimer] = React.useState(null);
  React.useEffect(() => {
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
  return (
    <div>
      <label for="gsearch">Search people:</label>
      <input
        type="search"
        id="gsearch"
        name="gsearch"
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
          return <People info={item} />;
        })}
      </div>
    </div>
  );
}
