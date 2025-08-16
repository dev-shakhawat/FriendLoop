
import { BrowserRouter, Routes, Route } from "react-router"; 
import { store } from "./redux/store";
import { Provider } from 'react-redux' 

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
 

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
