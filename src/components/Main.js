import React from 'react';
import ShowMore from "./ShowMore";
import HousesLayout from "./HousesLayout";
import { connect } from 'react-redux';
import Form from "./Form";

const Main = (props) => {
  return (
      <div className="main">

        <Form />

        {props.isLoading && (
          <h3 className={"loading responseWithoutHouses"}>Идет загрузка</h3>
        )}

        {props.isError && (
          <h3 className={"error responseWithoutHouses"}>Ошибка!</h3>
        )}

        {props.isEmpty && (
          <h3 className={"error responseWithoutHouses"}>
            Ничего не найдено <br /> Попробуйте еще раз
          </h3>
        )}

        <HousesLayout />

        {props.houses.length > 0 && <ShowMore />}

      </div>
  );
  }


const mapStateToProps = state => ({
  houses: state.requestReducer.houses,
  isLoading: state.requestReducer.isLoading,
  isError: state.requestReducer.isError,
  isEmpty: state.requestReducer.isEmpty
});



export default connect(mapStateToProps, null)(Main);