import React from 'react';
import { deleteFavorite } from '../actions';
import { connect } from 'react-redux';

const Favorites = (props) => {

  return (
    <div className={"main favorites"}>

      {!props.favorites.length && <h3>В избранном пока ничего нет!</h3>}

      <div className="housesLayout">

        {props.favorites.map(item => {

          return (
            <div key={item.id} className={"houseCell"}>
              <img src={item.img_url} alt="house" width="300" height="150" />
              <p>{item.title}</p>
              <p>
                <span>{item.price_formatted}</span>
                <button onClick={() => props.deleteFavorite(item.id)}>
                  Удалить из избранного
                </button>
              </p>
            </div>
          );
        })}

      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  favorites: state.favoritesReducer.favorites
})

const mapDispatchToProps = dispatch => ({
  deleteFavorite: id => dispatch(deleteFavorite(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);