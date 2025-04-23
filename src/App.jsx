
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import { Terms } from "./pages/Terms";

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* terms of use route */}
          <Route path="/terms" element={<Terms />} />

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
