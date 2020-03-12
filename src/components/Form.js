import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchHouses } from "../actions/";

const Form = props => {

  const [country, setCountry] = useState("com.au");
  const [city, setCity] = useState("")


  return (
    <form
      onSubmit={e => {
      e.preventDefault();
      if (!city) return;
        props.fetchHouses(country, city);
      }}
        >
      <label htmlFor="country_input">Выберите страну поиска</label>
      <select id="country_input" onChange={e => setCountry(e.target.value)}>
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
        onChange={e => setCity(e.target.value)}
      />

      <button type="submit">Искать!</button>
    </form>
  )
}

const mapStateToProps = state => ({
  houses: state.requestReducer.houses
});

const mapDispatchToProps = dispatch => ({
  fetchHouses: (country, place) => dispatch(fetchHouses(country, place))
});


export default connect(mapStateToProps, mapDispatchToProps)(Form);