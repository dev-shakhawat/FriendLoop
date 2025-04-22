
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { store } from "./redux/store";
import { Provider } from 'react-redux'

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* auth routes */}
          <Route >
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
