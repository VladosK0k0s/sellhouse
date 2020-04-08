import React from 'react';
import './SorryPage.scss';

const SorryPage = () => {
    return (
        <div className='SorryPage'>
            <h3>На данный момент сервис работает в тестовом режиме, 
                потому Ваша заявка может обрабатываться дольше обычного.
            </h3>
            <p>Также в этот период рассматриваем анкеты с квартирами, 
                которые находиться исключительно в административных городах.
            </p>
        </div>
    );
};

export default SorryPage;