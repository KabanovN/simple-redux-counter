import { useSelector, useDispatch } from 'react-redux';
import { dec, inc, rnd, reset } from '../actions';

const SecondCounter = () => {
    const counter = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <div className='counter'>
            <h2 className='counter__title'>Передача store при помощи хуков</h2>
            <p className='counter__descr'>
                Данный способ применим только на фукциональных элементах
            </p>
            <h2 className='counter__subtitle'>{counter}</h2>
            <div className='counter__btns'>
                <button
                    onClick={() => dispatch(inc())}
                    className='btn btn-primary'>
                    INC
                </button>
                <button
                    onClick={() => dispatch(dec())}
                    className='btn btn-primary'>
                    DEC
                </button>
                <button
                    onClick={() => dispatch(rnd())}
                    className='btn btn-primary'>
                    RND
                </button>
                <button
                    onClick={() => dispatch(reset())}
                    className='btn btn-primary'>
                    RESET
                </button>
            </div>
        </div>
    );
};

export default SecondCounter;
