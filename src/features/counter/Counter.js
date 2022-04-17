import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'

const Counter = () => {

    const count = useSelector((state)=> state.counter.count);
    const status = useSelector((state)=> state.counter.status);

    const dispatch = useDispatch();
  return (
    <div className="counter">
        
    <p>{count}</p>
    <b>{status}</b> <br/>
    <button onClick={()=> dispatch(increment())}>+</button>
    <button onClick={()=> dispatch(decrement())}>-</button>

    </div>
  )
}

export default Counter