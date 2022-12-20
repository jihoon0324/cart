import Header from "./components/Header";
import Main from "./components/Main";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useReducer, useState } from "react";
import Reducer, { initialState } from "./hooks/useReducer/Reducer";
function App() {
  const [toggle, setToggle] = useState(false);
  const [orderInfo, dispatch] = useReducer(Reducer, initialState);
  return (
    <div className="App">
      <ToastContainer />

      <Header toggle={toggle} setToggle={setToggle} orderInfo={orderInfo} />
      <Main toggle={toggle} orderInfo={orderInfo} dispatch={dispatch} />
    </div>
  );
}

export default App;
