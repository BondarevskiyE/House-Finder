import React from 'react';
import { connect } from 'react-redux';
import Form from "./Form";
import ShowMore from "./ShowMore";
import { addFavorite } from "../actions";
import { Link } from 'react-router-dom'

class Main extends React.Component {


  idFinder(item) {
    let regEx = /\d{15}/;
    return item.lister_url.match(regEx)[0];
  }

  render() {
    // let id = 0;
    return (
      <div>
         <div className="main">
          <Form />

          {this.props.isLoading && (
            <h3 className={"loading responseWithoutHouses"}>Идет загрузка</h3>
          )}

          {this.props.isError && (
            <h3 className={"error responseWithoutHouses"}>Ошибка!</h3>
          )}

          {this.props.isEmpty && (
            <h3 className={"error responseWithoutHouses"}>
              Ничего не найдено <br /> Попробуйте еще раз
            </h3>
          )}

          <div className="housesLayout">
            {this.props.houses.map(item => {
              item.id = this.idFinder(item);
              return (
                <React.Fragment key={item.id}>
                  <div className={"houseCell"}>
                    <img
                      src={item.img_url}
                      alt="house"
                      width="300"
                      height="150"
                    />
                    <p>{item.title}</p>
                    <p>
                      <span>{item.price_formatted}</span>
                      <button onClick={() => this.props.addFavorite(item)}>
                        Добавить в избранное
                      </button>
                    </p>
                    <Link to={`/house/${item.id}`}>Подробнее</Link>
                  </div>
                </React.Fragment>
              );
            })}
            {this.props.houses.length > 0 && <ShowMore />}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  houses: state.requestReducer.houses,
  isLoading: state.requestReducer.isLoading,
  isError: state.requestReducer.isError,
  isEmpty: state.requestReducer.isEmpty
});

const mapDispatchToProps = dispatch => ({
  addFavorite: item => dispatch(addFavorite(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);