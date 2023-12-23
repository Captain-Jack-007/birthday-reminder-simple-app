import React from 'react';

function Person({ name, age, image }) {
  return (
    <article className="person">
      <img src={image} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years old</p>
      </div>
    </article>
  );
}

export default Person;
