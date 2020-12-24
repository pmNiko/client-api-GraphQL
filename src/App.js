import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MessageList from "./componnets /MessageList";
import MessageForm from "./componnets /MessageForm";
import Navigation from "./componnets /Navbar";

import "bootswatch/dist/simplex/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Switch>
          <Route exact path="/" component={MessageList} />
          <Route exact path="/new-message" component={MessageForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
