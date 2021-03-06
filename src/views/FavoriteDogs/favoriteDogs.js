import React, { useState, useEffect } from 'react';
import Dropdown from '../../components/Dropdown/Dropdown';
import { filterDogs } from '../../services/fetchDogs';

export default function DogsData() {
  const [dogs, setDogs] = useState([]);
  const [breed, setBreed] = useState('All');

  useEffect(() => {
    const fetchData3 = async () => {
      const data = await filterDogs(breed);

      setDogs(data);
    };
    fetchData3();
  }, [breed]);

  return (
    <div>
      <h1>Favorite Dogs</h1>
      <Dropdown breed={breed} setBreed={setBreed} />
      {dogs.map((dog) => (
        <div key={dog.name} {...dog}>
          <h2>{dog.name}</h2>
          <p>Breed: {dog.breed}</p>
          <p>Habits: {dog.habits}</p>
          <p>Age: {dog.age}</p>
        </div>
      ))}
    </div>
  );
}
