import Home from "./components/Home";
// Components
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";

//styling
import "./App.css";
import Detail from "./components/Detail";
import { Route, Switch, Redirect } from "react-router";

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/ProductList">
          <ProductList />
        </Route>
        <Route exact path="/ProductList/:ProductSlug">
          <Detail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
