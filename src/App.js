

import Viewalgo from "./components/Viewalgo";
import Totalbots from "./components/Totalbots";
import Navbar from "./components/Navbar";
import BotsContainer from "./components/BotsContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {


  return (

    <Router>
      <div>
        <Navbar />
        <BotsContainer />

        <Switch>
          <Route path="/bots">
            <BotsContainer />
          </Route>
          <Route path="/bots-details/:id">
            <Viewalgo />
          </Route>

        </Switch>
      </div>
    </Router >
  );
}

export default App;
