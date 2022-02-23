import React from 'react';

const Room = ({rooms}) => {
    return (
        <div className="room-list">
            {rooms.map((room) => (
                <div className="room-item" key={room.number + Math.random()}>
                    <div className="room-item__text">Номер: {room.number}</div>
                    <div className="room-item__text">Количество людей: {room.people}</div>
                    <div className="room-item__text">Класс апартаментов: {room.classRoom}</div>
                    <div className="room-item__text">Цена номера за сутки: {room.price}</div>
                    <div className="room-item__text">Статус номера: {room.status ? "Свободен" : "Занят"}</div>
                    <div className="room-item__img">
                        <img src={room.img} alt={`Room image ${room.number}`} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Room;