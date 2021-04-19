import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import actionTypes from './actionTypes';
import entities from '../helpers/entities';
const initialState = {
  flats: [],
};
const cardsReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_FLATS:
      return {
        ...state,
        flats: entities.response.map((e) => {
          const city = e.attributes.address.city;
          if (city === 'Tyumen') {
            e.attributes.address.city = 'Тюмень';
            return e;
          } else {
            return e;
          }
        }),
      };
    case actionTypes.LIKE_FLAT:
      console.log(action.payload);
      return {
        ...state,
        flats: { ...state }.flats.map((e) => {
          if (e.id === action.payload) {
            if (!e.like) {
              e.totalLike++;
              return { ...e, like: !e.like };
            }
            e.totalLike--;
            return { ...e, like: !e.like };
          }
          return e;
        }),
      };
    default:
      return state;
  }
};

export default createStore(cardsReducers, composeWithDevTools());
