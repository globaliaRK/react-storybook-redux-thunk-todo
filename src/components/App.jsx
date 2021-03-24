const Raect = require("react");
const { default: Todo } = require("./TodoGame/Todo");
const { BrowserRouter, Redirect, Switch, Route } = require("react-router-dom");

const App = () => {

    let routes = [{
        key: 0,
        exact: true,
        path: "/todo",
        component: Todo
    }];

    return (
        <BrowserRouter>
            <Switch>
                {routes.map((route) => <Route {...route} />)}
                <Redirect exact from="/*" to="/todo" />
            </Switch>
        </BrowserRouter>
    );
};

export default App;