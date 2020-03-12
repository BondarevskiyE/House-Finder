import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HouseDescription = props => {

  const [house] = useState(props.location.state.house);

    return (
      <div className="main description">

        <img src={house.img_url} alt="картинка" />

        <h3>{house.price_formatted}</h3>

        <h4>Ключевые слова: {house.keywords}</h4>

        <h4>{house.summary}</h4>

        <h4>
          <a target="_blink" href={house.lister_url}>
            Объявление арендодателя
          </a>
        </h4>

        <Link to="/">Вернуться</Link>
        
      </div>
    );
}


export default HouseDescription;