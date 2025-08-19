
import { BrowserRouter, Routes, Route } from "react-router"; 
import { store } from "./redux/store";
import { Provider } from 'react-redux' 
import RootLayout from "./components/lauouts/RootLayout";

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>
           <Route path="/" element={<RootLayout/>} />

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
