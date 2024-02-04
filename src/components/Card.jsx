import React, { useState } from 'react'

function Card({ id, image, info, price, name, removeTour, addTour }) {

    const [readMore, setReadMore] = useState(false);

    function readMoreHandler() {
        setReadMore(!readMore)
    }

    const description = readMore ? info : ` ${info.substring(0, 200)}....`;



    return (
        <div className='card'>

            <div className="image-card">
                <img src={image} alt="image" className='image' />
            </div>

            <div className="tour-info">
                <div className="tour-details">

                    <h4 className='tour-price'>₹ {price}</h4>
                    <h4 className='tour-name'>{name}</h4>

                </div>

                <div className="description">
                    <span className='text'>{description}</span>
                    <span className='read-more' onClick={readMoreHandler}>
                        {readMore ? 'Show less' : 'Read More'}
                    </span>
                </div>
            </div>

            <div className="buttons">
                <button className='btn-green' onClick={() => addTour(id)} >Interested</button>
                <button className='btn-red' onClick={() => removeTour(id)}>Not Interested</button>
            </div>

        </div>
    )
}

export default Card;