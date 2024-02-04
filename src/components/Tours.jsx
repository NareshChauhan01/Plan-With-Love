import React from 'react';
import Card from "./Card"

function Tours({ tours, removeTour,addTour }) {

    return (
        <div className="container">
            <div className='title'>
                <h2>Plan With Love</h2>
            </div>

            <div className='cards'>
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour} addTour={addTour}> </Card>
                    })
                }
            </div>
        </div>
    )
}

export default Tours