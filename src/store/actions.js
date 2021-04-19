import actionTypes from './actionTypes';

export const getFlatsAC = () => ({
  type: actionTypes.GET_FLATS,
});
export const likeFlatAC = ({ id }) => ({
  type: actionTypes.LIKE_FLAT,
  payload: id,
});
