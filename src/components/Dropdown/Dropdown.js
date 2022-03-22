import React from 'react';
import './Dropdown.css';

export default function Dropdown({ breed, setBreed }) {
  //   const [breed, setBreed] = useState('');
  const options = ['All', 'Bulldog', 'Labrador', 'Maltese', 'Collie'];
  return (
    <select value={breed} onChange={(e) => setBreed(e.target.value)}>
      {options.map((opt) => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  );
}
