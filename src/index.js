const Raect = require("react");
const reactDom = require("react-dom");
const { Provider } = require("react-redux");
const { default: App } = require("./components/App");
const { default: store } = require("./Store");



reactDom.render(
    <Provider store={store()} >
        <App />
    </Provider>
    , document.getElementById("root"));