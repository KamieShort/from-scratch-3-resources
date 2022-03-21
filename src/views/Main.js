import React, { useEffect, useState } from 'react';
import FamilyData from '../components/FamilyData/familyData';
import { fetchFamilyData } from '../services/fetch';

export default function Main() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchFamilyData();

      setMembers(data);
    };
    fetchData();
  }, []);

  return (
    <>
      {members.map((member) => (
        <FamilyData key={member.name} {...member} />
      ))}
    </>
  );
}
