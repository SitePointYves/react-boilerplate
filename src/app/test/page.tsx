'use client';
import { RootState } from '@/store/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/counterSlice';

export default function Page() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <button aria-label="Increment value" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
