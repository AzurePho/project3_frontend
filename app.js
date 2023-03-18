import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Gallery from "./Gallery";
import Login from "./Login";
//need to add the other imports such as css & the API/backend

function App() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/login" component={Login} />
            </Switch>
        </Router>
    )
}

export default App;