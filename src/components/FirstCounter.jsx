import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FirstCounter extends Component {
    render() {
        const { counter, inc, dec, rnd, reset } = this.props;
        return (
            <div className='counter'>
                <h2 className='counter__title'>
                    Передача store при помощи connect
                </h2>
                <p className='counter__descr'>
                    На примере классового компонента (применим и на
                    фукциональных)
                </p>
                <h2 className='counter__subtitle'>{counter}</h2>
                <div className='counter__btns'>
                    <button onClick={inc} className='btn btn-primary'>
                        INC
                    </button>
                    <button onClick={dec} className='btn btn-primary'>
                        DEC
                    </button>
                    <button onClick={rnd} className='btn btn-primary'>
                        RND
                    </button>
                    <button onClick={reset} className='btn btn-primary'>
                        RESET
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.count,
    };
};

export default connect(mapStateToProps, actions)(FirstCounter);
