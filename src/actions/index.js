let selectedCountry, selectedPlace;

function requestHouses(load) {
  return {
    type: 'LOADING',
    isLoading: load
  }
}

function errorFetch() {
  return {
    type: 'ERROR',
    isError: true
  }
}

function receiveHouses(foundHouses) {
  return {
    type: 'SEARCH',
    houses: foundHouses
  }
}

function emptySearch() {
  return {
    type: 'EMPTY',
    isEmpty: true
  }
}

function addMoreHouses(houses) {
  return {
    type: 'SHOW_MORE',
    houses: houses
  }
}

export function showMoreHouses(page) {
  return dispatch => {
    return fetch(
      `https://api.nestoria.${selectedCountry}/api?encoding=json&pretty=1&page=${page}&action=search_listings&listing_type=rent&place_name=${selectedPlace}`
    )
      .then(response => response.json())
      .then(json => {
        return dispatch(addMoreHouses(json.response.listings));
      })
      .catch(err => dispatch(errorFetch()));
  };
}

export function fetchHouses(country, place) {
    selectedCountry = country;
    selectedPlace = place;
  return dispatch => {
    dispatch(requestHouses(true));
    return fetch(
      `https://api.nestoria.${country}/api?encoding=json&pretty=1&action=search_listings&listing_type=rent&place_name=${place}`
    )
      .then(response => response.json())
      .then(json => {
        if (json.response.listings.length === 0) {
          return dispatch(emptySearch())
        }
        return dispatch(receiveHouses(json.response.listings))
      })
      .catch(err => dispatch(errorFetch()));
  }
}

export function addFavorite(item) {
  return {
    type: 'ADD_FAVORITE',
    favorite_house: item
  };
}

export function deleteFavorite(houseId) {
  return {
    type: 'DELETE_FAVORITE',
    houseId: houseId
  }
}