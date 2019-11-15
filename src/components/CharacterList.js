import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from './CharacterCard';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [list, setList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        const filter = res.data.results.filter(name => 
          name.name.toLowerCase().includes(query.toLowerCase()))
        // console.log(res)
        setList(filter)
      })
      .catch(err => {
        console.log(err, "Oops")
      })
  }, [query]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  return (
    <section className="character-list">
      <div>
        <form>
          <input
            type="text"
            onChange={handleInputChange}
            value={query}
            name="name"
            placeholder="Search by Name"
          />
        </form>
      </div>
      <div>
        {list.map(char => (
          <CharacterCard 
            key={char.id} 
            name={char.name}
            species={char.species}
            status={char.status}
            image={char.image}
            /> 
        ))}
      </div>
    </section>
  );
}
