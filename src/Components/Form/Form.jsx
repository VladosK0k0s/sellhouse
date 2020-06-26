import React, { Component } from "react";
import "./Form.scss";
import { Element } from "react-scroll";
import { Redirect } from "react-router-dom";
/* global google */

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            tel: "",
            address: "",
            roomquantity: "",
            sqaremain: "",
            sqarelive: "",
            floor: "",
            description: "",
            price: "",
            year: "",
            street: "",
            city: "",
            house: "",
            response: false,
            failresponse: false,
            transition: false,
        };
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
    }
    handleInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            response: false,
            failresponse: false,
        });
    };
    handlePlaceChanged = () => {
        this.setState({ address: this.autocompleteInput.current.value });
    };
    componentDidMount() {
        let i = 0;
        let error = true;
        while (error) {
            try {
                this.autocomplete = new google.maps.places.Autocomplete(
                    this.autocompleteInput.current,
                    { types: ["geocode"] }
                );

                this.autocomplete.addListener(
                    "place_changed",
                    this.handlePlaceChanged
                );
                error = false;
            } catch {}
            if (i > 10) {
                console.log("Error google");
                break;
            }
            i++;
        }
    }
    handleClick = (e) => {
        this.setState({ response: true });
        e.preventDefault();
        try {
            const url = "https://api.sellhouse.com.ua/sendData";
            //const url = 'http://localhost:4000/sendData';
            const response = fetch(url, {
                method: "POST", // *GET, POST, PUT, DELETE, etc.
                mode: "cors", // no-cors, cors, *same-origin
                cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
                credentials: "same-origin", // include, *same-origin, omit
                headers: {
                    "Content-Type": "application/json",
                    //'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify(this.state),
            });
            response.then(
                (res) => {
                    if (res.status === 200)
                        res.text()
                            // .then(text => {this.TelegaSend('628741849')})
                            .then(() => {
                                this.TelegaSend("668582787");
                            })
                            .then(() => {
                                this.TelegaSend("183629423");
                            })
                            // .then(() => {this.TelegaSend('361102402')})
                            .then(() => {
                                this.setState({
                                    name: "",
                                    tel: "",
                                    address: "",
                                    roomquantity: "",
                                    sqaremain: "",
                                    sqarelive: "",
                                    floor: "",
                                    description: "",
                                    price: "",
                                    year: "",
                                    street: "",
                                    city: "",
                                    house: "",
                                    response: true,
                                });
                            });
                    else this.setState({ failresponse: true });
                },
                (rej) => {
                    console.log("server Errror");
                    this.setState({ failresponse: true });
                }
            );
        } catch (error) {
            console.error("Ошибка:", error);
        }
        return false;
    };
    TelegaSend = (chat_id) => {
        const token = process.env.REACT_APP_TELEGA_BOT_TOKEN;
        const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text= 
            Имя: ${this.state.name},%0A 
            Телефон: ${this.state.tel},%0A
            Адрес: ${this.state.city} ${this.state.street} ${this.state.house},%0A
            Общая площадь: ${this.state.sqaremain},%0A
            Жилая площадь: ${this.state.sqarelive},%0A
            Этаж: ${this.state.floor},%0A
            Кол-во комнат: ${this.state.roomquantity},%0A
            Год: ${this.state.year},%0A
            Цена в USD: ${this.state.price},%0A
            Описание: ${this.state.description}.`;
        fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                //'Content-Type': 'application/x-www-form-urlencoded',
            },
        });
    };
    render() {
        if (this.state.response) {
            setTimeout(() => {
                this.setState({ transition: true });
            }, 2000);
        }
        if (this.state.transition) return <Redirect to="/sorrypage" />;
        return (
            <div className="Form">
                <Element name="form"></Element>
                <h3>Оформить заявку</h3>
                <form onSubmit={(e) => this.handleClick(e)}>
                    <div className="first">
                        <input
                            type="text"
                            value={this.state.name}
                            required
                            name="name"
                            placeholder="Имя продавца*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <input
                            type="text"
                            value={this.state.tel}
                            required
                            name="tel"
                            placeholder="Телефон продавца*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    {/* <input 
                        ref={this.autocompleteInput}  
                        id="autocomplete" 
                        type="text"
                        value={this.state.address}
                        name='address'
                        required
                        placeholder='Адрес недвижимости*'
                        onChange={(e) => this.handleInputChange(e)}
                        > 
                    </input> */}
                    <div className="addressblock">
                        <input
                            type="text"
                            value={this.state.city}
                            required
                            name="city"
                            placeholder="Город*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <input
                            className="street"
                            type="text"
                            value={this.state.street}
                            required
                            name="street"
                            placeholder="Улица*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <input
                            type="text"
                            value={this.state.house}
                            required
                            name="house"
                            placeholder="Дом*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    {/* <input type="text" value={this.state.address} required name='address' placeholder='Адрес недвижимости' onChange={(e) => this.handleInputChange(e)}/> */}
                    <div className="fourth">
                        <select
                            value={this.state.roomquantity}
                            name="roomquantity"
                            placeholder="Кол-во комнат"
                            onChange={(e) => this.handleInputChange(e)}
                        >
                            <option value="">Кол-во комнат</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                        {/* <select value={this.state.walls} name='walls' placeholder='Стены (цегла,газоблок,керамоблок,залізобетон,інше)' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Стены</option>
                            <option value="цегла">цегла</option>
                            <option value="газоблок">газоблок</option>
                            <option value="керамоблок">керамоблок</option>
                            <option value="залізобетон">залізобетон</option>
                            <option value="інше">інше</option>
                        </select> */}
                        <input
                            type="number"
                            value={this.state.year}
                            name="year"
                            placeholder="Год постройки"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <input
                            type="number"
                            value={this.state.sqaremain}
                            required
                            name="sqaremain"
                            placeholder="Общая пл. (кв. м)*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        <input
                            type="number"
                            value={this.state.sqarelive}
                            required
                            name="sqarelive"
                            placeholder="Жилая пл. (кв. м)*"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    <div className="fourth_mobile">
                        <div>
                            <select
                                value={this.state.roomquantity}
                                name="roomquantity"
                                placeholder="Кол-во комнат"
                                onChange={(e) => this.handleInputChange(e)}
                            >
                                <option value="">Кол-во комнат</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4+">4+</option>
                            </select>
                            <input
                                type="number"
                                value={this.state.year}
                                name="year"
                                placeholder="Год постройки"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <div>
                            <input
                                type="number"
                                value={this.state.sqaremain}
                                required
                                name="sqaremain"
                                placeholder="Общая пл. (кв. м)*"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                            <input
                                type="number"
                                value={this.state.sqarelive}
                                required
                                name="sqarelive"
                                placeholder="Жилая пл. (кв. м)*"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                    </div>
                    <div className="desc">
                        <div>
                            <input
                                type="number"
                                value={this.state.floor}
                                required
                                name="floor"
                                placeholder="Этаж*"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                            <input
                                type="number"
                                value={this.state.price}
                                name="price"
                                placeholder="Цена в USD"
                                onChange={(e) => this.handleInputChange(e)}
                            />
                        </div>
                        <textarea
                            rows="3"
                            cols="60"
                            value={this.state.description}
                            name="description"
                            placeholder="Описание объекта"
                            onChange={(e) => this.handleInputChange(e)}
                        />
                    </div>
                    {/* <select value={this.state.planning} name='planning' placeholder='Особенности планировки' onChange={(e) => this.handleInputChange(e)}>
                        <option value="">Особенности планировки</option>
                        <option value="черновая отделка">черновая отделка</option>
                        <option value="без мебели">без мебели</option>
                        <option value="пентхаус">пентхаус</option>
                        <option value="многоуровневая с мансардой">многоуровневая с мансардой</option>
                        <option value="кухня-студия">кухня-студия</option>
                        <option value="без особенностей">без особенностей</option>
                    </select>
                    <div className='second'>
                        <select value={this.state.parking} name='parking' placeholder='Паркинг' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Паркинг</option>
                            <option value="стоянка">стоянка</option>
                            <option value="подземный">подземный</option>
                            <option value="подземный с ліфтом">подземный с ліфтом</option>
                            <option value="наземный">наземный</option>
                            <option value="багатоуровневый">багатоуровневый</option>
                            <option value="гаражные боксы">гаражные боксы</option>
                        </select>
                        <div className='fifth'>
                            <input type="number" value={this.state.price} name='price' placeholder='Цена' onChange={(e) => this.handleInputChange(e)}/>
                            <select value={this.state.parking} name='currency' placeholder='Валюта' onChange={(e) => this.handleInputChange(e)}>
                                <option value="">Валюта</option>
                                <option value="USD">USD</option>
                                <option value="UAH">UAH</option>
                                <option value="EUR">EUR</option>
                            </select>
                        </div>
                    </div>
                    <div className='first'>
                        <select value={this.state.condition} name='condition' placeholder='Состояние квартири' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Состояние квартири</option>
                            <option value="без ремонта">без ремонта</option>
                            <option value="с черновым ремонтом">с черновым ремонтом</option>
                            <option value="средний ремонт">средний ремонт</option>
                            <option value="ремонт высокого класса">ремонт высокого класса</option>
                        </select>
                        <select value={this.state.class} name='class' placeholder='Клас жилья' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Клас жилья</option>
                            <option value="Эконом">Эконом</option>
                            <option value="Комфорт">Комфорт</option>
                            <option value="Бизнес">Бизнес</option>
                            <option value="Элит">Элит</option>
                        </select>
                    </div> */}
                    <p>* - обязательные к заполнению поля</p>
                    {!(this.state.response || this.state.failresponse) ? (
                        <button>Получить предложение</button>
                    ) : (
                        ""
                    )}
                </form>
                {this.state.response ? <h4>Заявка отправлена!</h4> : ""}
                {this.state.failresponse ? (
                    <h4 className="h4error">
                        Что-то пошло не так, попробуйте ещё
                    </h4>
                ) : (
                    ""
                )}
            </div>
        );
    }
}

export default Form;
