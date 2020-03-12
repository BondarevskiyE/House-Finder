import React from 'react';
import { showMoreHouses } from '../actions';
import { connect } from 'react-redux';

class ShowMore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 2
    }
  }

  nextPages(page) {
    if (this.props.houses.length === 0) {
      this.setState({
        page: 2
      })
      return
    }
    this.setState(state => {
      
      return {page: state.page + 1}
    })
    this.props.showMore(page)
  }

  render() {
    return (
      <div className={"showMore"}>
        <button onClick={() => this.nextPages(this.state.page)}>
          Показать больше
        </button>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  houses: state.requestReducer.houses
})

const mapDispatchToProps = dispatch => ({
  showMore: page => dispatch(showMoreHouses(page))
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowMore);