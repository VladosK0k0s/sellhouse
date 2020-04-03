import React, { Component } from 'react';
import './MainSlider.scss';
// import {Link} from 'react-scroll';


class MainSlider extends Component {
    render() {
        return (
            <div className='MainSlider' >
                <h1>Выкуп недвижимости</h1>
                <h2>Быстро выкупим вашу недвижимость по рыночной цене</h2>
                {/* <button><Link activeClass="active" to="form" spy={true} smooth={true} offset={50} duration={500}>продать недвижимость</Link></button> */}
            </div>
        );
    }
}

export default MainSlider;