import React, { Component } from 'react';
import './MainSlider.scss';
// import {Link} from 'react-scroll';


class MainSlider extends Component {
    render() {
        return (
            <div className='MainSlider' >
                <h1>Выкуп недвижимости</h1>
                <h2>Быстро выкупим вашу недвижимость по рыночной цене</h2>
                <p>На данный момент рассматриваем анкеты с квартирами, которые находиться исключительно в административных городах Украины</p>
                {/* <button><Link activeClass="active" to="form" spy={true} smooth={true} offset={50} duration={500}>продать недвижимость</Link></button> */}
            </div>
        );
    }
}

export default MainSlider;