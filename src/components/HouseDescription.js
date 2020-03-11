import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class HouseDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      house: this.props.houses.filter(
        item => this.props.match.params.houseId === String(item.id)
      )[0]
    };
  }

  render() {
    return (
      <div className="main description">
        <img src={this.state.house.img_url} alt="картинка" />
        <h3>{this.state.house.price_formatted}</h3>
        <h4>Ключевые слова: {this.state.house.keywords}</h4>
        <h4>{this.state.house.summary}</h4>
        <h4>
          <a target="_blink" href={this.state.house.lister_url}>
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