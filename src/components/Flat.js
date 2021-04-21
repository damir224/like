import React from 'react';
import { useDispatch } from 'react-redux';
import Like from './Like';
import { likeFlatAC } from '../store/actions';

export default React.memo(({ flat }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className='antialiased text-gray-900 font-sans p-6'>
        <div className='container mx-auto'>
          <div className='flex flex-wrap -mx-4'>
            <div className='w-full p-4'>
              <div className='c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden'>
                <div className='relative pb-48 overflow-hidden'>
                  <img
                    className='absolute inset-0 h-full w-full object-cover'
                    src='https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80'
                    alt=''
                  />
                </div>
                <div className='p-4'>
                  <h2 className='mt-2 mb-2  font-semibold'>
                    {flat.attributes.title}
                  </h2>
                  <p className='text-sm'>
                    <span className='font-semibold'>Адрес: </span>
                    г.
                    {flat.attributes.address.city}
                    , ул.
                    {flat.attributes.address.street}
                    , д.
                    {flat.attributes.address.house}
                    , кв.
                    {flat.attributes.address.room}
                  </p>
                  <p className='text-sm'>
                    <span className='font-semibold'>Колличество комнат: </span>
                    {flat.attributes.rooms}
                  </p>
                  <p className='text-sm'>
                    <span className='font-semibold'>Площадь: </span>
                    {flat.attributes.area}
                    &nbsp;
                    {flat.attributes.unit}
                  </p>
                  <div className='mt-3 flex items-center'>
                    <span className='text-sm font-semibold'>Цена:</span>
                    &nbsp;
                    <span className='font-bold text-xl'>4,550,000</span>
                    &nbsp;
                    <span className='text-sm font-semibold'>₽</span>
                  </div>
                </div>
                <div className='p-4 border-t border-b text-xs text-gray-700'>
                  <span className='flex items-center mb-1'>
                    <i className='far fa-clock fa-fw mr-2 text-gray-900' />
                    Контакты:
                  </span>
                  <span className='flex items-center'>
                    <i className='far fa-address-card fa-fw text-gray-900 mr-2' />
                    {flat.relationships.attributes.middle_name}
                    {flat.relationships.attributes.first_name}
                    {flat.relationships.attributes.last_name}
                  </span>
                </div>
                <div className='p-4 flex justify-between items-center'>
                  <div className='flex items-center text-sm text-gray-600'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path
                        fillRule='evenodd'
                        d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                    <span className='ml-2'>33</span>
                  </div>
                  <button
                    type='button'
                    onClick={(event) => {
                      event.preventDefault();
                      dispatch(likeFlatAC({ id: flat.id }));
                    }}
                  >
                    <div className='flex items-center text-sm text-gray-600'>
                      <Like
                        like={{ like: flat.like, totalLike: flat.totalLike }}
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
},
)
