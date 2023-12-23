import React from 'react';
import Person from './Person';
const List = ({ people }) => {
  return (
    <section>
      {people.map((item) => {
        return <Person key={item.id} {...item} />;
      })}
    </section>
  );
};

export default List;
