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

    console.log(account);

    const h1Style = {
        color: account >= 0 ? 'green' : 'red'
    }

    return (
        <div className="App">
            <h1 style={h1Style}>{account}</h1>
            <button onClick={() => depositMoney(1000)}>Deposit</button>
            <button onClick={() => withdrawMoney(1000)}>Withdraw</button>
        </div>
    );
}

export default App;
