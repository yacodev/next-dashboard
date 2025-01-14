'use client';

import { useAppSelector, useAppDispatch } from '@/store';
import {
  addOne,
  initCounterState,
  subtractOne,
} from '@/store/counter/counterSlice';
import { useEffect } from 'react';
//import { useState } from 'react';

interface CartCounterProps {
  value?: number;
}
interface CounterResponse {
  method: string;
  count: number;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const response = await fetch('/api/counter');
  const data = await response.json();
  console.log(data);
  return data;
};
export const CartCounter = ({ value = 0 }: CartCounterProps) => {
  //const [count, setCount] = useState(value);
  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();
  console.log(value);
  /* useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]); */

  useEffect(() => {
    getApiCounter().then((data) => {
      dispatch(initCounterState(data.count));
    });
  }, [dispatch]);

  return (
    <>
      <span className='text-9xl'> {count} </span>

      <div className='flex'>
        <button
          onClick={() => dispatch(addOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          +1
        </button>

        <button
          onClick={() => dispatch(subtractOne())}
          className='flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'
        >
          -1
        </button>
      </div>
    </>
  );
};
