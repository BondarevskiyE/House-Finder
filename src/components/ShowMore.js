import React, { useState } from 'react';
import { showMoreHouses } from '../actions';
import { connect } from 'react-redux';

const ShowMore = props => {

  const [page, setPage] = useState(2)

  function nextPages(page) {

    if (props.houses.length === 0) {
      setPage(2);
      return
    }
    setPage(page + 1)
    props.showMore(page)
  }

  return (
    <div className={"showMore"}>
      <button onClick={() => nextPages(page)}>Показать больше</button>
    </div>
  );
}


const mapStateToProps = state => ({
  houses: state.requestReducer.houses
})

const mapDispatchToProps = dispatch => ({
  showMore: page => dispatch(showMoreHouses(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);