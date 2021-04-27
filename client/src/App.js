import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Auth from "./views/Auth";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Route path="/login">
            <Auth isSignup={false} />
          </Route>
          <Route path="/register">
            <Auth isSignup={true} />
          </Route>
        </Router>
      </header>
    </div>
  );
}
