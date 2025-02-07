import "./App.css";
import Header from './Components/Header';
import AllRoutes from './Pages/AllRoutes';
import PrivateRoute from './Components/PrivateRoute';
PrivateRoute

function App() {
  return (
    <>
      <Header />
      <AllRoutes />
      <PrivateRoute />
    </>
  );
}

export default App;
