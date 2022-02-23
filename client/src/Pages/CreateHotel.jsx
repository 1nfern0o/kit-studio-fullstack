import React, {useEffect, useState} from 'react';
import {useHttp} from "../Hooks/http.hook";
import {useMessage} from "../Hooks/message.hook";

const CreateHotel = () => {
    const message = useMessage();
    const { loading, error, request } = useHttp();

    const [hotel, setHotel] = useState({
        id: Date.now(),
        name: 'Отель',
        img: 'https://via.placeholder.com/100',
        description: 'Описание отеля'
    });

    useEffect(() => {
        message(error);
    }, [error, message]);

    const changeHandler = (event) => {
        setHotel({
            ...hotel,
            [event.target.name]: event.target.value
        });
    };

    const createHandler = async () => {
        try {
            const data = await request('http://localhost:5000/api/hotels/create', 'POST', {...hotel});
            console.log(data);
        } catch (e) {
            console.log(e.message);
        }
    };

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Создать отель</h1>
                <div className="card blue darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">Содать</span>
                        <div>
                            <div className="input-field">
                                <input
                                    placeholder="Введите имя отеля"
                                    id="name"
                                    name="name"
                                    type="text"
                                    className="yellow-input"
                                    value={hotel.name}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="name">Название отеля</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Описание отеля"
                                    id="description"
                                    name="description"
                                    type="text"
                                    className="yellow-input"
                                    value={hotel.description}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="description">Описание отеля</label>
                            </div>
                            <div className="input-field">
                                <input
                                    placeholder="Ссылка на фото отеля"
                                    id="photo"
                                    name="img"
                                    type="text"
                                    className="yellow-input"
                                    value={hotel.img}
                                    onChange={changeHandler}
                                />
                                <label htmlFor="photo">Ссылка на фото отеля</label>
                            </div>
                        </div>
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{ marginRight: 10}}
                            onClick={createHandler}
                            disabled={loading}
                        >
                            Создать
                        </button>
                        <button
                            className="btn grey lighten-1 black-text"
                            disabled={loading}
                        >
                            Отменить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateHotel;