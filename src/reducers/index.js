import { combineReducers } from 'redux';

const initialState = {
  houses: [],
  isLoading: false,
  isError: false,
  isEmpty: false
}

function requestReducer(state = initialState, action) {
  switch (action.type) {
    case 'ERROR':
      return {
        houses: [],
        isLoading: false,
        isError: true,
        isEmpty: false
      };
    case "LOADING":
      return {
        houses: state.houses,
        isLoading: action.isLoading,
        isError: false,
        isEmpty: false
      };
    case 'EMPTY':
      return {
        houses: state.houses,
        isLoading: false,
        isError: false,
        isEmpty: true
      }
    case 'SHOW_MORE':
      return {
        houses: state.houses.concat(action.houses),
        isLoading: false,
        isError: false,
        isEmpty: false
      };
    case "SEARCH":
      return {
        houses: action.houses,
        isLoading: false,
        isError: false,
        isEmpty: false
      };
    default:
      return state;
  }
}

const favoritesState = {
  favorites: JSON.parse(localStorage.getItem('favorites')) || []
}

function favoritesReducer(state = favoritesState, action) {
  switch (action.type) {
    case 'ADD_FAVORITE':
      if (state.favorites.some(item => item.id === action.favorite_house.id)) {
        return state
      }
      return {
        favorites: state.favorites.concat(action.favorite_house)
      };
    case 'DELETE_FAVORITE':
      return {
        favorites: state.favorites.filter(house => house.id !== action.houseId)
      }
    default:
      return state
  }
}
export default combineReducers({ requestReducer, favoritesReducer });