import React from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from "../actions/";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      country: "com.au",
      city: ""
    };
  }

  countryHandler(e) {
    this.setState({
      country: e.target.value
    });
  }

  cityHandler(e) {
    this.setState({
      city: e.target.value.toLowerCase()
    });
  }



  render() {
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (this.state.city === '') return;
            this.props.fetchHouses(this.state.country, this.state.city);
          }}
        >
          <label htmlFor="country_input">Выберите страну поиска</label>
          <select id="country_input" onChange={e => this.countryHandler(e)}>
            <option value="com.au">Австралия</option>
            <option value="com.br">Бразилия</option>
            <option value="de">Германия</option>
            <option value="es">Испания</option>
            <option value="fr">Франция</option>
            <option value="in">Индия</option>
            <option value="it">Италия</option>
            <option value="mx">Мексика</option>
            <option value="co.uk">Великобритания</option>
          </select>
          <label htmlFor="cuty_input">Введите город</label>
          <input
            type="text"
            id="city_input"
            onChange={e => this.cityHandler(e)}
          />

          <button type="submit">Искать!</button>
        </form>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  houses: state.requestReducer.houses
});

const mapDispatchToProps = dispatch => ({
  fetchHouses: (country, place) => dispatch(fetchHouses(country, place))
});


export default connect(mapStateToProps, mapDispatchToProps)(Form);