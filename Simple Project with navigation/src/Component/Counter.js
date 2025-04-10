import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/calc.css';


function init(initialCount) {
    return { count: 0 };
}

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return init(action.payload);
        default:
            throw new Error();
    }
}

function Counter({ initialCount }) {
    const [state, dispatch] = useReducer(reducer, initialCount, init);
    return (
        <div style={{ textAlign: 'center' }}>
            <h3 style={{ marginTop: '10px' }}>Count: {state.count}</h3>
            <br />
            <button onClick={() => dispatch({ type: 'reset', payload: initialCount })} className='count-btn'>Reset</button>
            <button onClick={() => dispatch({ type: 'decrement' })} className='count-btn' style={{ margin: '10px'}}>-</button>
            <button onClick={() => dispatch({ type: 'increment' })} className='count-btn'>+</button>
            <br />
            <Link to='/' className='btn btn-success' style={{ marginTop: '10px' }}>Back</Link>
        </div>
    );
}
//<Link to='/' className='btn btn-success'>Back</Link>

export default Counter;