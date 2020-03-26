import React, { Component } from 'react';
import './Form.scss';
import { Element } from 'react-scroll';

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
            class: ''
        }
    }
    handleInputChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleClick = () =>{
        console.log(this.state)
    }
    render() {
        return (
            <div className='Form'>
                <Element name="form">
                </Element>
                <h3>оформить заявку</h3>
                <div>
                    <div className='first'>
                        <input type="text" value={this.state.name} name='name' placeholder='Имя продавца' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="text" value={this.state.tel} name='tel' placeholder='Телефон продавца' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <input type="text" value={this.state.address} name='address' placeholder='Адрес недвижимости' onChange={(e) => this.handleInputChange(e)}/>
                    <div className='second'>
                        <select value={this.state.roomquantity} name='roomquantity' placeholder='Кол-во комнат' onChange={(e) => this.handleInputChange(e)} className='small'>
                            <option value="">Кол-во комнат</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4+">4+</option>
                        </select>
                        <select value={this.state.walls} name='walls' placeholder='Стены (цегла,газоблок,керамоблок,залізобетон,інше)' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Стены</option>
                            <option value="цегла">цегла</option>
                            <option value="газоблок">газоблок</option>
                            <option value="керамоблок">керамоблок</option>
                            <option value="залізобетон">залізобетон</option>
                            <option value="інше">інше</option>
                        </select>
                    </div>
                    <div className='third'>
                        <input type="number" value={this.state.sqaremain} name='sqaremain' placeholder='Общая пл. (кв. м)' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarelive} name='sqarelive' placeholder='Жилая пл. (кв. м)' onChange={(e) => this.handleInputChange(e)}/>
                        <input type="number" value={this.state.sqarekit} name='sqarekit' placeholder='Кухня (кв. м)' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='desc'>
                        <div>
                            <input type="number" value={this.state.floor} name='floor' placeholder='Этаж' onChange={(e) => this.handleInputChange(e)}/>
                            <input type="number" value={this.state.flooring} name='flooring' placeholder='Этажность' onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                        <textarea rows = "3" cols = "60" value={this.state.description} name='description' placeholder='Описание обьекта' onChange={(e) => this.handleInputChange(e)}/>
                    </div>
                    <div className='second'>
                        <input type="text" value={this.state.heating} name='heating' placeholder='Отопление' onChange={(e) => this.handleInputChange(e)} className='small'/>
                        <select value={this.state.planning} name='planning' placeholder='Особенности планировки' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Особенности планировки</option>
                            <option value="черновая отделка">черновая отделка</option>
                            <option value="без мебели">без мебели</option>
                            <option value="пентхаус">пентхаус</option>
                            <option value="многоуровневая с мансардой">многоуровневая с мансардой</option>
                            <option value="кухня-студия">кухня-студия</option>
                        </select>
                    </div>
                    <div className='second'>
                        <select value={this.state.parking} name='parking' placeholder='Паркинг' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Паркінг</option>
                            <option value="стоянка">стоянка</option>
                            <option value="підземний">підземний</option>
                            <option value="підземний з ліфтом">підземний з ліфтом</option>
                            <option value="наземний">наземний</option>
                            <option value="багаторівневий">багаторівневий</option>
                            <option value="гаражні бокси">гаражні бокси</option>
                        </select>
                        <div className='fourth'>
                            <input type="text" value={this.state.warming} name='warming' placeholder='Утепление' onChange={(e) => this.handleInputChange(e)}/>
                            <input type="number" value={this.state.price} name='price' placeholder='Цена' onChange={(e) => this.handleInputChange(e)}/>
                            <input type="text" value={this.state.currency} name='currency' placeholder='Валюта' onChange={(e) => this.handleInputChange(e)}/>
                        </div>
                    </div>
                    <div className='first'>
                        <select value={this.state.condition} name='condition' placeholder='Стан квартири' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Стан квартири</option>
                            <option value="без ремонту">без ремонту</option>
                            <option value="з чорновим ремонтом">з чорновим ремонтом</option>
                            <option value="під ремонт">під ремонт</option>
                            <option value="з ремонтом">з ремонтом</option>
                        </select>
                        <select value={this.state.class} name='class' placeholder='Клас жилья' onChange={(e) => this.handleInputChange(e)}>
                            <option value="">Клас жилья</option>
                            <option value="економ">економ</option>
                            <option value="комфорт">комфорт</option>
                            <option value="бізнес">бізнес</option>
                            <option value="еліт">еліт</option>
                        </select>
                    </div>
                </div>
                <button onClick={this.handleClick}>Оформить заявку</button>
                
            </div>
        );
    }
}

export default Form;