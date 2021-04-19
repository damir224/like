import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFlatsAC } from '../store/actions';
import Flat from './Flat';

export default function FlatList() {
  const { flats } = useSelector((state) => state);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getFlatsAC());
  }, [dispatch]);
  return (
    <div className='flex justify-around flex-wrap'>
      {flats ? flats.map((e) => <Flat key={e.id} flat={e} />) : '...Loading'}
    </div>
  );
}
