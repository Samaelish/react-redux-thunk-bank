import { useSelector } from "react-redux"
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { actionCreators } from "./state/index"
import './styles.css'
// useSelector to access the data in the store

// ACTION CREATOR is a function that dispatches an ACTION to the REDUCER, 
// REDUCER interprets that action and then manipulates the store

function App() {
    // easy access to store state
    const account = useSelector((state) => state.account)

    const dispatch = useDispatch()

    const { depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);

    return (
        <div className="App">
            <h1>{account}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        </div>
    );
}

export default App;
