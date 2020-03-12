import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HouseDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: this.props.location.state.house
    };
  }


  render() {
    const {house} = this.state
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
}

const mapStateToProps = state => ({
  houses: state.requestReducer.houses
});

export default connect(mapStateToProps, null)(HouseDescription);