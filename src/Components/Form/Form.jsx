import React, { Component } from 'react';
import './Form.scss';
import { Element } from 'react-scroll';
/* global google */

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            tel: '',
            address: '',
            roomquantity: '',
            walls: '',
            sqaremain: '',
            sqarelive: '',
            sqarekit: '',
            floor: '',
            flooring: '',
            description: '',
            heating: '',
            planning: '',
            parking: '',
            warming: '',
            price: '',
            currency: '',
            condition: '',
            class: '',
            response: false
        }
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
    }
    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            {"types": ["geocode"]});
    
        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
      }
    handleClick = (e) =>{
        e.preventDefault()
        try {		
			const url = 'http://api.sellhouse.com.ua/sendData';
			const response = fetch(url, {
					method: 'POST', // *GET, POST, PUT, DELETE, etc.
					mode: 'cors', // no-cors, cors, *same-origin
					cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
					credentials: 'same-origin', // include, *same-origin, omit
					headers: {
							'Content-Type': 'application/json',
							//'Content-Type': 'application/x-www-form-urlencoded',
					},
					body: JSON.stringify(this.state),
			});
			response.then(
				res => {
					res.text()
					.then(text=>{
						this.setState({
							name: '',
                            tel: '',
                            address: '',
                            roomquantity: '',
                            walls: '',
                            sqaremain: '',
                            sqarelive: '',
                            sqarekit: '',
                            floor: '',
                            flooring: '',
                            description: '',
                            heating: '',
                            planning: '',
                            parking: '',
                            warming: '',
                            price: '',
                            currency: '',
                            condition: '',
                            class: '',
                            year: '',
                            response: true
						});
					})
			},  rej =>{
				console.log("server Errror")
			});
			
		} catch (error) {
			console.error('Ошибка:', error);
        }
        return false;
    }
    render() {
        return (
            <div className='Form'>
                <Element name="form">
                </Element>
                <h3>Оформить заявку</h3>
                <form onSubmit={(e) => this.handleClick(e)}>
                    <div className='first'>
                        <input type="text" value={this.state.name} required name='name' placeholder='Имя продавца*' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="text" value={this.state.tel} required name='tel' placeholder='Телефон продавца*' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <input 
                        ref={this.autocompleteInput}  
                        id="autocomplete" 
                        type="text"
                        value={this.state.address}
                        name='address'
                        placeholder='Адрес недвижимости'
                        onChange={(e) => this.handleInputChange(e)}
                        > 
                    </input>
                    {/* <input type="text" value={this.state.address} name='address' placeholder='Адрес недвижимости' onChange={(e) => this.handleInputChange(e)}/> */}
                    <div className='fourth'>
                        <select value={this.state.roomquantity} name='roomquantity' placeholder='Кол-во комнат' onChange={(e) => this.handleInputChange(e)}>
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
                        <input type="number" value={this.state.year} name='year' placeholder='Год постройки' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqaremain} required name='sqaremain' placeholder='Общая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarelive} required name='sqarelive' placeholder='Жилая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='fourth_mobile'>
                        <div>
                        <select value={this.state.roomquantity} name='roomquantity' placeholder='Кол-во комнат' onChange={(e) => this.handleInputChange(e)}>
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
                        <input type="number" value={this.state.year} name='year' placeholder='Год постройки' onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <div>
                        <input type="number" value={this.state.sqaremain} required name='sqaremain' placeholder='Общая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarelive} required name='sqarelive' placeholder='Жилая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                    </div>
                    {/* <div className='third'>
                        <input type="number" value={this.state.sqaremain} name='sqaremain' placeholder='Общая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarelive} name='sqarelive' placeholder='Жилая пл. (кв. м)*' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarekit} name='sqarekit' placeholder='Кухня (кв. м)' onChange={(e) => this.handleInputChange(e)}/> 
                    </div> */}
                    <div className='desc'>
                        <div>
                            <input type="number" value={this.state.floor} required name='floor' placeholder='Этаж*' onChange={(e) => this.handleInputChange(e)}/>
                            <input type="number" value={this.state.flooring} name='flooring' placeholder='Этажность' onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <textarea rows = "3" cols = "60" value={this.state.description} name='description' placeholder='Описание объекта' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                        {/* <input type="text" value={this.state.heating} name='heating' placeholder='Отопление' onChange={(e) => this.handleInputChange(e)} className='small'/> */}
                        <select value={this.state.planning} name='planning' placeholder='Особенности планировки' onChange={(e) => this.handleInputChange(e)}>
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
                            {/* <input type="text" value={this.state.warming} name='warming' placeholder='Утепление' onChange={(e) => this.handleInputChange(e)}/> */}
                            <input type="number" value={this.state.price} name='price' placeholder='Цена' onChange={(e) => this.handleInputChange(e)}/>
                            <select value={this.state.parking} name='currency' placeholder='Валюта' onChange={(e) => this.handleInputChange(e)}>
                                <option value="">Валюта</option>
                                <option value="USD">USD</option>
                                <option value="UAH">UAH</option>
                                <option value="EUR">EUR</option>
                            </select>
                            {/* <input type="text" value={this.state.currency} name='currency' placeholder='Валюта' onChange={(e) => this.handleInputChange(e)}/> */}
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
                    </div>
                    <p>* - обязательные к заполнению поля</p>
                    <button type="button">Оформить заявку</button>
                </form>
                {
                    this.state.response ? <h4>Успешно</h4> : ''
                }
            </div>
        );
    }
}


export default Form;