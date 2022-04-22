import "./css/App.css";
import { store, persistor } from "./redux/configStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import Root from "./pages/Root";

const App = () => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
};

export default App;
