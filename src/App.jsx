
import { BrowserRouter, Routes, Route } from "react-router";
import { Login } from "./pages/auth/Login";
import { Signup } from "./pages/auth/Signup";
import { store } from "./redux/store";
import { Provider } from 'react-redux'
import { Terms } from "./pages/Terms";
import { ForgotPass } from "./pages/auth/ForgotPass";
import { Checkpoint } from "./pages/auth/Checkpoint";
import AuthLayout from "./components/lauouts/AuthLayout";
import HomeLayout from "./components/lauouts/HomeLayout";
import Home from "./pages/home/Home";
import Friends from "./pages/friends/Friends";
import Chat from "./pages/chat/Chat";
import Groups from "./pages/groups/Groups";

function App() {


  return (

    <Provider store={store}>
      <BrowserRouter>
        <Routes>

          {/* terms of use route */}
          <Route path="/terms" element={<Terms />} />

          {/* auth routes */}
          <Route path="/auth" element={<AuthLayout />} >
            <Route path="login"  element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="resetpassword" element={<ForgotPass />} />
            <Route path="checkpoint" element={<Checkpoint />} />
          </Route>

          {/* default route/home */}
          <Route path="/" element={<HomeLayout />}>
             <Route index element={<Home />} />
             <Route path="/friends" element={<Friends />} />
             <Route path="/chat" element={<Chat />} />
             <Route path="/groups" element={<Groups />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
