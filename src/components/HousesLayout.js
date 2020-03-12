import React from 'react';
import { addFavorite } from "../actions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const HousesLayout = (props) => {
  const { houses } = props;
  
  return (
    <div className="housesLayout">

      {houses.map(item => {
        return (

          <div key={item.id} className={"houseCell"}>

            <img src={item.img_url} alt="house" width="300" height="150" />
            <p>{item.title}</p>
            <p>
              <span>{item.price_formatted}</span>
              <button
                className="favorite_btn"
                onClick={() => props.addFavorite(item)}
              >
                Добавить в избранное
              </button>
            </p>

            <Link
              to={{
                pathname: `house/${item.id}`,
                state: {
                  house: item
                }
              }}
            >
              Подробнее
            </Link>

          </div>
        )
      })}
    </div>

  );
}

const mapStateToProps = state => ({
  houses: state.requestReducer.houses
})
const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(HousesLayout);