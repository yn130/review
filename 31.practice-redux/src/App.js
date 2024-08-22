import { useDispatch, useSelector } from 'react-redux'; 
import { minus, plus } from './store/bankSlice'; 
import { useRef } from 'react';

function App() {
    const money = useSelector((state) => state.bank.money); 
    let inputRef = useRef();
    const dispatch = useDispatch();

    const clickbtn = (actionCreator) => {
        const amount = Number(inputRef.current.value);
        dispatch(actionCreator(amount));
        inputRef.current.value = '';
    };

    return (
        <div className="App">
            <h1>코딩온 은행</h1>
            <h2>잔액 : {money} 원</h2>
            <input 
                type="number"
                ref={inputRef}
            />
            <button onClick={() => clickbtn(plus)}>입금</button>
            <button onClick={() => clickbtn(minus)}>출금</button>
        </div>
    );
}

export default App;
