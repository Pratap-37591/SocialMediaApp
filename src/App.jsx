import LeftBar from "./components/leftBar/LeftBar";
import NavBar from "./components/navbar/NavBar";
import RightBar from "./components/rightBar/RightBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

const Layout = () => {
  return (
    <div>
      <NavBar />
      <div style={{display: 'flex'}}>
        <LeftBar />
        <Outlet />
        <RightBar />
      </div>
    </div>
  );
};
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
