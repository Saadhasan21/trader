

import Viewalgo from "./components/Viewalgo";
import Bots from "./components/Bots";
import Navbar from "./components/Navbar";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {


  let data = [
    {
      "id": 1,
      "bot": "Hot Bot",
      "description": "Hot bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value": 289.34,
      "cagr": 34
    },
    {
      "id": 2,
      "bot": "Cool Bot",
      "description": "Cool bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value": 439.34,
      "cagr": 28
    },
    {
      "id": 3,
      "bot": "Options Bot",
      "description": "Options bot is low volatility portfolio of growth stocks selected based on our proprietary metrics",
      "index-value": 139.34,
      "cagr": 42
    }
  ];

  return (

    <Router>
      <div>
        <Navbar/>
      <Switch>
        <Route path="/bots">
          {data.map((eachbot)=>(
            
            <Bots botid={eachbot.id} botbot={eachbot.bot} botindex={eachbot['index-value']} botcagr={eachbot.cagr}/>
          ))}
        </Route>

        <Route path="/bots-details/:id">
        {data.map((eachbot)=>(
            
            <Viewalgo  botbot={eachbot.bot} botdisc={eachbot.description} botindex={eachbot['index-value']} botcagr={eachbot.cagr}/>
          ))}        </Route>

      </Switch>
      </div>
    </Router >
  );
}

export default App;
