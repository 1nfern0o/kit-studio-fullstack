import React from 'react';

const Hotel = ({ hotel }) => {
    const {img, alt, name, description, id} = hotel;

    return (
        <div key={id}>
            <div className="hotel-item">
                <div className="hotel-item__img">
                    <img src={img} alt={alt} />
                </div>
                <div className="hotel-item__title">{name}</div>
                <div  className="hotel-item__desc">{description}</div>
            </div>
        </div>
    );
};

export default Hotel;