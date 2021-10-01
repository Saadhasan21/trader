import logo from './logo.svg';
import './App.css';
import Viewalgo from "./components/Viewalgo";
import Bots from "./components/Bots";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {


 let bots=[
    {
       "id":1,
       "bot":"Hot Bot",
       "description":"Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":289.34,
       "cagr":34
    },
    {
       "id":2,
       "bot":"Cool Bot",
       "description":"Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":439.34,
       "cagr":28
    },
    {
       "id":3,
       "bot":"Options Bot",
       "description":"Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
       "index-value":139.34,
       "cagr":42
    }
 ]

  return (
    <Router>
      <Switch>
        <Route path="/bots">
          <Bots/>
        </Route>
        <Route path="//bots-details/:id=">
          < Viewalgo/>
        </Route>
        
      </Switch>
    </Router >
  );
}

export default App;
