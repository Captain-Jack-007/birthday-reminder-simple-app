import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);

  const resetAll = () => {
    setPeople([]);
  };
  return (
    <main>
      <section className="container">
        <h2>{people.length} birthday today</h2>
        <List people={people} />
        <button className="btn btn-block" onClick={resetAll}>
          reset all
        </button>
      </section>
    </main>
  );
}

export default App;
