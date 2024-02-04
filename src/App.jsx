import React, { useState } from 'react';
import Tours from "./components/Tours/";
import Data from "./Data"

function App() {

  const [tours, setTours] = useState(Data);

  function addTour(id) {
    console.log(id)

    let newTour = tours.filter((tour) => tour.id == id)
    setTours(newTour);
  }

  function removeTour(id) {

    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if (tours.length == 0) {
    return (
      <div className="refesh">

        <h2>No tours left</h2>
        <button onClick={() => setTours(Data)} className='btn-white'>Refresh</button>

      </div>
    )


  }
  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour} addTour={addTour} />
    </div>
  )
}

export default App